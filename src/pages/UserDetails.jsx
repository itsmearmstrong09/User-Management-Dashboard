import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById, clearCurrent } from "../store/slices/usersSlice";

export default function UserDetails() {
  const { id, name } = useParams();
  const dispatch = useDispatch();
  const { current, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (!id) return;
    dispatch(fetchUserById(id));

    return () => {
      dispatch(clearCurrent());
    };
  }, [dispatch, id]);

  if (loading) return <div className="loading card">Loading user...</div>;
  if (error) return <div className="error card">Error: {String(error)}</div>;
  if (!current) return <div className="card">No user data available.</div>;

  return (
    <div>
      <div className="card">
        <h2>{name}</h2>
        <p>
          <strong>Username:</strong> {current.username}
        </p>
        <p>
          <strong>Email:</strong> {current.email}
        </p>
        <p>
          <strong>Phone:</strong> {current.phone}
        </p>
        <p>
          <strong>Website:</strong> {current.website}
        </p>
        <p>
          <strong>Company:</strong> {current.company?.name}
        </p>
        <p>
          <strong>Address:</strong> {current.address?.suite},{" "}
          {current.address?.street}, {current.address?.city} -{" "}
          {current.address?.zipcode}
        </p>
      </div>

      <div className="card">
        <Link to="/users">← Back to users</Link>
      </div>
    </div>
  );
}
