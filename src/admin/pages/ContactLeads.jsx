import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "../styles/forms.css";

export default function ContactLeads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState(null);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const q = query(
          collection(db, "publicContactLeads"),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setLeads(data);
      } catch (err) {
        console.error("Error fetching contact leads:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const markAsRead = async (lead) => {
    if (lead.read) return;

    await updateDoc(doc(db, "publicContactLeads", lead.id), {
      read: true,
    });

    setLeads((prev) =>
      prev.map((l) =>
        l.id === lead.id ? { ...l, read: true } : l
      )
    );
  };

  return (
    <div className="forms-page">
      {/* HEADER */}
      <div className="page-header">
        <div>
          <h1>Contact Leads</h1>
          <p>Leads submitted via Contact page</p>
        </div>
      </div>

      {/* TABLE */}
      {loading ? (
        <div className="forms-card">
          <div className="skeleton" style={{ height: 200 }} />
        </div>
      ) : leads.length === 0 ? (
        <div className="empty-state">
          <h3>No contact leads yet</h3>
          <p>New enquiries from the website contact page will appear here.</p>
        </div>
      ) : (
        <div className="forms-card">
          <div className="table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Service</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {leads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="clickable-row"
                    onClick={() => {
                      setSelectedLead(lead);
                      markAsRead(lead);
                    }}
                  >
                    <td>{lead.name}</td>
                    <td className="nowrap">{lead.email}</td>
                    <td className="nowrap">{lead.phone}</td>
                    <td>{lead.service}</td>

                    <td>
                      {!lead.read ? (
                        <span className="badge unread">Unread</span>
                      ) : (
                        <span className="badge read">Read</span>
                      )}
                    </td>

                    <td className="nowrap">
                      {lead.createdAt?.toDate
                        ? lead.createdAt.toDate().toLocaleString()
                        : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODAL */}
      {selectedLead && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedLead(null)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Contact Lead Details</h3>
              <button onClick={() => setSelectedLead(null)}>✕</button>
            </div>

            <div className="modal-body">
              <div className="modal-grid">
                <div>
                  <label>Name</label>
                  <p>{selectedLead.name}</p>
                </div>

                <div>
                  <label>Email</label>
                  <p>{selectedLead.email}</p>
                </div>

                <div>
                  <label>Phone</label>
                  <p>{selectedLead.phone}</p>
                </div>

                <div>
                  <label>Service</label>
                  <p>{selectedLead.service}</p>
                </div>

                <div className="full-width">
                  <label>Message</label>
                  <p className="modal-message">
                    {selectedLead.message}
                  </p>
                </div>

                <div className="full-width">
                  <label>Submitted At</label>
                  <p>
                    {selectedLead.createdAt?.toDate
                      ? selectedLead.createdAt.toDate().toLocaleString()
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
