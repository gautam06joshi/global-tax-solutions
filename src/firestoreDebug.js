export const logFirestoreError = (error, context = "") => {
  console.group("🔥 Firestore Debug");
  console.error("Context:", context);
  console.error("Code:", error?.code);
  console.error("Message:", error?.message);
  console.error("Full error:", error);
  console.groupEnd();
};
