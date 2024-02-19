import { useEffect, useState } from "react";
import "./App.css";
import OrderSummary from "./components/OrderSummary";
import PropTypes from "prop-types";
import NewOrderForm from "./components/NewOrderForm";

function App() {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    id: "",
    shipify: "",
    date: "",
    status: "Success",
    customer: "",
    email: "",
    county: "",
    shipping: "",
    source: "",
    orderType: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Loading data from local storage
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  useEffect(() => {
    // Saving data to local storage
    localStorage.setItem("orders", JSON.stringify(orders));
    // console.log("Orders saved to local storage:", orders);
  }, [orders]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let inputValue = value;
    if (name === "date") {
      const formattedDate = value
        .split("-")
        .map((part) => {
          return part.length === 1 ? `0${part}` : part;
        })
        .join("-");
      inputValue = formattedDate;
    }
    setNewOrder((prevOrder) => ({
      ...prevOrder,
      [name]: inputValue,
    }));
  };

  const handleCreateNew = () => {
    if (editingOrderId !== null) {
      // If editing an existing order, update the order
      const updatedOrders = orders.map((order) =>
        order.id === editingOrderId ? newOrder : order
      );
      setOrders(updatedOrders);
      setEditingOrderId(null);
    } else {
      // If creating a new order, add it to the list
      setOrders((prevOrders) => [...prevOrders, newOrder]);
    }

    // Reset newOrder state
    setNewOrder({
      id: "",
      shipify: "",
      date: "",
      status: "Success",
      customer: "",
      email: "",
      county: "",
      shipping: "",
      source: "",
      orderType: "",
    });

    setShowForm(false);
  };

  const handleEdit = (order) => {
    setNewOrder(order);
    setShowForm(true);
    setEditingOrderId(order.id);
  };

  const handleDelete = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    // Save updated orders to local storage
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = orders.slice(startIndex, endIndex);

  return (
    <div className="container">
      <div className="nav">
        <h1 className="nav_heading">Orders</h1>
        <button className="nav_button" onClick={() => setShowForm(true)}>
          Create New
        </button>
      </div>

      <NewOrderForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onCreate={handleCreateNew}
        newOrder={newOrder}
        onInputChange={handleInputChange}
      />

      {showForm && (
        <div className="form-popup">
          <form className="form-container">
            <label htmlFor="id">ID:</label>

            <input
              type="text"
              id="id"
              name="id"
              value={
                newOrder.id || Math.floor(1000000 + Math.random() * 9000000)
              } // Random 7-digit number
              readOnly // Make the ID field read-only
            />

            <label htmlFor="shipify">Shipify #:</label>
            <input
              type="text"
              id="shipify"
              name="shipify"
              value={newOrder.shipify}
              onChange={handleInputChange}
            />

            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={newOrder.date}
              onChange={handleInputChange}
            />

            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value={newOrder.status}
              onChange={handleInputChange}
            >
              <option value="Success">Success</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Reject">Reject</option>
            </select>

            <label htmlFor="customer">Customer:</label>
            <input
              type="text"
              id="customer"
              name="customer"
              value={newOrder.customer}
              onChange={handleInputChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={newOrder.email}
              onChange={handleInputChange}
            />

            <label htmlFor="county">County:</label>
            <input
              type="text"
              id="county"
              name="county"
              value={newOrder.county}
              onChange={handleInputChange}
            />

            <label htmlFor="shipping">Shipping:</label>
            <input
              type="text"
              id="shipping"
              name="shipping"
              value={newOrder.shipping}
              onChange={handleInputChange}
            />

            <label htmlFor="source">Source:</label>
            <input
              type="text"
              id="source"
              name="source"
              value={newOrder.source}
              onChange={handleInputChange}
            />

            <label htmlFor="orderType">Order Type:</label>
            <input
              type="text"
              id="orderType"
              name="orderType"
              value={newOrder.orderType}
              onChange={handleInputChange}
            />

            <button type="button" className="btn" onClick={handleCreateNew}>
              Create
            </button>
            <button
              type="button"
              className="btn cancel"
              onClick={() => setShowForm(false)}
            >
              Close
            </button>
          </form>
        </div>
      )}

      <div className="hero_section">
        <div className="input_title">
          <h3>What are you looking for?</h3>
          <input type="text" className="input_field" />
        </div>
        <div className="category">
          <h3>Category</h3>
          <select name="category" id="">
            <option>Manager</option>
            <option>Admin</option>
            <option>Customer</option>
          </select>
        </div>
        <div className="status">
          <h3>Status</h3>
          <select name="status" id="">
            <option>Success</option>
            <option>Pending</option>
            <option>Reject</option>
          </select>
        </div>

        {/* icon */}
        <button className="nav_button search">Search</button>
      </div>

      <div className="main_section">
        <div className="main">
          <h3 className="summary_title">Product Summary</h3>
          <label className="summary_label">Show</label>
          <select className="summary_select" name="category" id="">
            <option>All</option>
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </select>
          <button className="nav_button summary_btn">Dispatch Select</button>
          <span className="pagination_btn">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              &lt;
            </button>
            {[...Array(Math.ceil(orders.length / itemsPerPage))].map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  {index + 1}
                </button>
              )
            )}
            <button
              disabled={currentPage === Math.ceil(orders.length / itemsPerPage)}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              &gt;
            </button>
          </span>
        </div>

        <table className="data_table">
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Shipify #</th>
              <th>Date</th>
              <th>Status</th>
              <th>Customer</th>
              <th>Email</th>
              <th>County</th>
              <th>Shipping</th>
              <th>Source</th>
              <th>Order Type</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderSummary
                key={order.id}
                order={order}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
        {/* Pagination
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            {"<"}
          </button>
          {[...Array(Math.ceil(orders.length / itemsPerPage))].map(
            (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            )
          )}
          <button
            disabled={currentPage === Math.ceil(orders.length / itemsPerPage)}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            {">"}
          </button>
        </div> */}
      </div>
    </div>
  );
}

App.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onCreate: PropTypes.func,
  newOrder: PropTypes.object,
};

export default App;
