// src/routes/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuthLazy } from "../../firebase";

export default function ProtectedRoute({ children }) {
  const [checking, setChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let unsubscribe;

    const checkAuth = async () => {
      try {
        // 🔥 Lazy-load Firebase Auth ONLY here
        const auth = await getAuthLazy();

        unsubscribe = auth.onAuthStateChanged((user) => {
          setIsAuthenticated(!!user);
          setChecking(false);
        });
      } catch (error) {
        setChecking(false);
      }
    };

    checkAuth();

    return () => unsubscribe && unsubscribe();
  }, []);

  // ⏳ Wait while checking auth
  if (checking) {
    return null; // or a spinner if you want
  }

  // 🚫 Not logged in → redirect
  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  // ✅ Logged in
  return children;
}
