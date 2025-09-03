import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/slices/usersSlice";
import { Link } from "react-router-dom";

export default function UsersList() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (!list || list.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, list]);

  return (
    <div>
      <div className="card" style={{ textAlign: "center" }}>
        <h2>Users</h2>
        <p>List of users retrieved from JSONPlaceholder.</p>
      </div>

      {loading && <div className="loading card">Loading users...</div>}
      {error && <div className="error card">Error: {String(error)}</div>}

      {!loading && !error && (
        <div className="users-list">
          {list.map((u) => (
            <div className="user-item card" key={u.id}>
              <h3>{u.name}</h3>
              <p>
                <strong>Email:</strong> {u.email}
              </p>
              <p>
                <strong>Company:</strong> {u.company?.name}
              </p>
              <Link to={`/users/${u.id}/${u.name}`}>View details →</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
