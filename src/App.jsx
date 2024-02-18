// import OrderSummary from "./components/OrderSummary";
import "./App.css";

function App() {
  // const order = {
  //   productName: "sample product",
  //   productId: "12345",
  // };
  return (
    <div className="container">
      <div className="nav">
        <h1 className="nav_heading">Orders</h1>
        <button className="nav_button">Create New</button>
      </div>
      <div className="hero_section">
        <div className="input_title">
          <h3>What are you looking for?</h3>
          <input type="text" className="input_field" />
        </div>
        <div className="category">
          <h3>Category</h3>
          <select name="category" id="">
            <option>All</option>
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </select>
        </div>
        <div className="status">
          <h3>Status</h3>
          <select name="status" id="">
            <option>All</option>
            <option>one</option>
            <option>two</option>
            <option>three</option>
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
        <div className="below_section">
          <input type="checkbox" name="Id" id="" />
          <label>Id</label>
          <span>Shipify</span>
          <span>Date</span>
          <span>Status</span>
          <span>Customer</span>
          <span>Email</span>
          <span>Country</span>
          <span>Shipping</span>
          <span>Source</span>
          <span>Order Type</span>
        </div>
      </div>
    </div>
  );
}

export default App;
