import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";

export function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="app-main">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
