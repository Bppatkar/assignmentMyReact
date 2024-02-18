import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import OrderSummary from "./components/OrderSummary";
import NewOrderForm from "./components/NewOrderFrom";

function App() {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    id: "",
    shipify: "",
    date: "",
    status: "",
    customer: "",
    email: "",
    county: "",
    shipping: "",
    source: "",
    orderType: "",
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // fetching API for testing
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          "https://my.api.mockaroo.com/users.json?key=5d7379a0"
        );
        setOrders(res.data);
      } catch (error) {
        console.error("Error in Fetching order:", error);
      }
    };
    fetchOrders();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleCreateNew = () => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);

    setNewOrder({
      id: "",
      shipify: "",
      date: "",
      status: "",
      customer: "",
      email: "",
      county: "",
      shipping: "",
      source: "",
      orderType: "",
    });

    setShowForm(false);
  };

  return (
    <div className="container">
      <div className="nav">
        <h1 className="nav_heading">Orders</h1>
        <button className="nav_button" onClick={() => setShowForm(true)}>
          Create New
        </button>
      </div>
      {showForm && (
        <div className="form-popup">
          <form className="form-container">
            <label htmlFor="id">ID:</label>

            <input
              type="text"
              id="id"
              name="id"
              value={Math.floor(1000000 + Math.random() * 9000000)} // Random 7-digit number
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
          <span className="pagination_btn ">
            <button>&lt;</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
            <button>10</button>
            <button>&gt;</button>
          </span>
        </div>

        <div className="table_headers">
          <span>ID</span>
          <span>Shipify #</span>
          <span>Date</span>
          <span>Status</span>
          <span>Customer</span>
          <span>Email</span>
          <span>County</span>
          <span>Shipping:</span>
          <span>Source</span>
          <span>Order Type</span>
        </div>
        <div>
          {orders.map((order) => (
            <OrderSummary key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
