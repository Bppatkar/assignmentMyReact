import { useState } from "react";

const NewOrderForm = ({ isOpen, onClose, onCreate }) => {
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
  };

  const handleDispatch = () => {
    // Your logic to dispatch the selected orders
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Create New Order</h2>
        <form onSubmit={handleSubmit}>
          {/* Your form fields here */}
          <button type="submit">Create New</button>
        </form>
        <button onClick={handleDispatch}>Dispatch</button>
      </div>
    </div>
  ) : null;
};

export default NewOrderForm;
