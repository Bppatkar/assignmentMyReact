import { useReducer } from "react";

const initialState = {
  id: Math.floor(1000000 + Math.random() * 9000000).toString(),
  shipify: "",
  date: "",
  status: "",
  customer: "",
  email: "",
  county: "",
  shipping: "",
  source: "",
  orderType: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const NewOrderForm = ({ isOpen, onClose, onCreate }) => {
  const [formData, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    dispatch({ type: "RESET_FORM" });
  };

  const handleDispatch = () => {
    // Your logic to dispatch the selected orders
  };

  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Create New Order</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="shipify">Shipify #:</label>
          <input
            type="text"
            id="shipify"
            name="shipify"
            value={formData.shipify}
            onChange={handleChange}
            required
          />
          {/* Add other input fields similarly */}
          <button type="submit">Create New</button>
        </form>
        <button onClick={handleDispatch}>Dispatch</button>
      </div>
    </div>
  ) : null;
};

export default NewOrderForm;
