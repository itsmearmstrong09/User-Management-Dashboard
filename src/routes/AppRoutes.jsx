import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import Home from "../pages/Home";
import UsersList from "../pages/UsersList";
import UserDetails from "../pages/UserDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UsersList />} />
      <Route
        path="/users/:id/:name"
        element={
          <ErrorBoundary>
            <UserDetails />
          </ErrorBoundary>
        }
      />
      <Route path="*" element={<div className="card">404 - Not Found</div>} />
    </Routes>
  );
}
