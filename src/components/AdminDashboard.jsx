
import Book from "./Book";
import Author from "./Author";
import "../index.css";

const AdminDashboard = () => {
  return (
    <div className="container">
      <h1 className="heading">Admin Dashboard - Library Management System</h1>
      <div className="grid">
        <div>
          <h2 className="sub-heading">Book Management</h2>
          <Book />
        </div>
        <div>
          <h2 className="sub-heading">Author Management</h2>
          <Author />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
