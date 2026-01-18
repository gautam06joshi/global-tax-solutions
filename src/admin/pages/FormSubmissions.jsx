import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { logActivity } from "../utils/logActivity"; // ✅ IMPORT
import "../styles/forms.css";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

export default function FormSubmissions() {
  const [view, setView] = useState("active"); // active | archived
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search & filters
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");
  const [provinceFilter, setProvinceFilter] = useState("");

  // Modal
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const archiveSubmission = async (id) => {
  if (!window.confirm("Archive this enquiry?")) return;

  try {
    await updateDoc(doc(db, "formSubmissions", id), {
      archived: true,
    });

    logActivity("Archived a form submission");

    setSubmissions((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, archived: true } : item
      )
    );
  } catch (err) {
    console.error("Archive failed:", err);
  }
};

const deleteSubmission = async (id) => {
  if (
    !window.confirm(
      "This will permanently delete the enquiry. Continue?"
    )
  )
    return;

  try {
    await deleteDoc(doc(db, "formSubmissions", id));

    logActivity("Deleted a form submission");

    setSubmissions((prev) =>
      prev.filter((item) => item.id !== id)
    );
  } catch (err) {
    console.error("Delete failed:", err);
  }
};

const markAsRead = async (item) => {
  if (item.read) return;

  try {
    await updateDoc(doc(db, "formSubmissions", item.id), {
      read: true,
    });

    setSubmissions((prev) =>
      prev.map((s) =>
        s.id === item.id ? { ...s, read: true } : s
      )
    );
  } catch (err) {
    console.error("Failed to mark as read", err);
  }
};



  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const q = query(
          collection(db, "formSubmissions"),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setSubmissions(data);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  // Filter logic
  const filteredSubmissions = submissions.filter((item) => {
  // Active / Archived filter
  if (view === "active" && item.archived) return false;
  if (view === "archived" && !item.archived) return false;

  const text = `
    ${item.firstName}
    ${item.lastName}
    ${item.email}
    ${item.phone}
    ${item.company}
    ${item.message}
  `.toLowerCase();

  const matchesSearch = text.includes(search.toLowerCase());
  const matchesService = serviceFilter
    ? item.service === serviceFilter
    : true;
  const matchesProvince = provinceFilter
    ? item.province === provinceFilter
    : true;

  return matchesSearch && matchesService && matchesProvince;
});


  // ✅ CSV Export (FIXED)
  const exportToCSV = async () => {
    if (filteredSubmissions.length === 0) {
      alert("No data to export");
      return;
    }

    // log activity (non-blocking safety)
    logActivity("Exported form submissions to CSV");

    const headers = [
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Company",
      "Service",
      "Province",
      "Message",
      "Submitted At",
    ];

    const rows = filteredSubmissions.map((item) => [
      item.firstName,
      item.lastName,
      item.email,
      item.phone,
      item.company || "",
      item.service,
      item.province,
      item.message.replace(/\n/g, " "),
      item.createdAt?.toDate
        ? item.createdAt.toDate().toLocaleString()
        : "",
    ]);

    const csv =
      headers.join(",") +
      "\n" +
      rows.map((row) => row.map((v) => `"${v}"`).join(",")).join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `form_submissions_${Date.now()}.csv`;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="forms-page">
      {/* HEADER */}
      <div className="forms-header">
        <h1>Form Submissions</h1>
        <p>Client enquiries from Global Tax Solutions website</p>
      </div>

      <div className="tabs">
  <button
    className={view === "active" ? "tab active" : "tab"}
    onClick={() => setView("active")}
  >
    Active
  </button>

  <button
    className={view === "archived" ? "tab active" : "tab"}
    onClick={() => setView("archived")}
  >
    Archived
  </button>
</div>


      {/* FILTER BAR */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search name, email, phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={serviceFilter}
          onChange={(e) => setServiceFilter(e.target.value)}
        >
          <option value="">All Services</option>
          <option>Bookkeeping and financial statements</option>
          <option>Payroll Management</option>
          <option>T4 Preparation</option>
          <option>Corporate Tax Returns</option>
          <option>Personal Tax Returns</option>
          <option>GST and WCB Returns</option>
          <option>Business Incorporation</option>
          <option>Tax Planning</option>
        </select>

        <select
          value={provinceFilter}
          onChange={(e) => setProvinceFilter(e.target.value)}
        >
          <option value="">All Provinces</option>
          <option>Ontario</option>
          <option>British Columbia</option>
          <option>Alberta</option>
          <option>Quebec</option>
          <option>Other</option>
        </select>

        <button className="export-btn" onClick={exportToCSV}>
          Export CSV
        </button>
      </div>

      {/* TABLE */}
      {loading ? (
        <div className="forms-card">
          <div className="skeleton" style={{ height: 200 }} />
        </div>
      ) : filteredSubmissions.length === 0 ? (
        <div className="empty-state">
          <h3>No enquiries found</h3>
          <p>New client enquiries will appear here.</p>
        </div>
      ) : (
        <div className="forms-card">
          <div className="table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Company</th>
                  <th>Service</th>
                  <th>Province</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                  
                </tr>
              </thead>

              <tbody>
  {filteredSubmissions.map((item) => (
    <tr
      key={item.id}
      className="clickable-row"
      onClick={() => {
        setSelectedSubmission(item);
        markAsRead(item);
      }}
    >
      <td>{item.firstName} {item.lastName}</td>
      <td className="nowrap">{item.email}</td>
      <td className="nowrap">{item.phone}</td>
      <td>{item.company || "-"}</td>
      <td>{item.service}</td>
      <td>{item.province}</td>
      <td className="message-cell">{item.message}</td>
      <td className="nowrap">
        {item.createdAt?.toDate
          ? item.createdAt.toDate().toLocaleString()
          : ""}
      </td>

      {/* ✅ STATUS COLUMN */}
      <td>
        {!item.read ? (
          <span className="badge unread">Unread</span>
        ) : (
          <span className="badge read">Read</span>
        )}
      </td>

      {/* ✅ ACTIONS COLUMN */}
      <td className="actions-cell">
        {!item.archived && (
          <button
            className="archive-btn"
            onClick={(e) => {
              e.stopPropagation();
              archiveSubmission(item.id);
            }}
          >
            Archive
          </button>
        )}

        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            deleteSubmission(item.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>

            </table>
          </div>
        </div>
      )}

      {/* MODAL */}
      {selectedSubmission && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedSubmission(null)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Submission Details</h3>
              <button onClick={() => setSelectedSubmission(null)}>✕</button>
            </div>

            <div className="modal-body">
              <div className="modal-grid">
                <div>
                  <label>Full Name</label>
                  <p>{selectedSubmission.firstName} {selectedSubmission.lastName}</p>
                </div>

                <div>
                  <label>Email</label>
                  <p>{selectedSubmission.email}</p>
                </div>

                <div>
                  <label>Phone</label>
                  <p>{selectedSubmission.phone}</p>
                </div>

                <div>
                  <label>Company</label>
                  <p>{selectedSubmission.company || "-"}</p>
                </div>

                <div>
                  <label>Service</label>
                  <p>{selectedSubmission.service}</p>
                </div>

                <div>
                  <label>Province</label>
                  <p>{selectedSubmission.province}</p>
                </div>

                <div className="full-width">
                  <label>Message</label>
                  <p className="modal-message">{selectedSubmission.message}</p>
                </div>

                <div className="full-width">
                  <label>Submitted At</label>
                  <p>
                    {selectedSubmission.createdAt?.toDate
                      ? selectedSubmission.createdAt.toDate().toLocaleString()
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
