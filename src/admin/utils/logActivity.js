import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export const logActivity = async (action) => {
  try {
    await addDoc(collection(db, "activityLogs"), {
      action,
      timestamp: serverTimestamp(),
    });
  } catch (err) {
    console.error("Activity log error:", err);
  }
};
