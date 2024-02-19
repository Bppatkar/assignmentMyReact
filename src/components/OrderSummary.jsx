import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

import PropTypes from "prop-types";

const OrderSummary = ({ order, onEdit, onDelete }) => {
  const {
    id,
    shipify,
    status,
    customerName,
    email,
    county,
    shipping,
    source,
    creationDate,
    orderType,
  } = order;

  const formatDate = (date) => {
    if (!date || isNaN(Date.parse(date))) {
      return "";
    }
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const getStatusText = (status) => {
    switch (status) {
      case "Pending":
        return "Pending ";
      case "Processing":
        return "Processing";
      case "Rejected":
        return "Rejected";
      default:
        return "Success";
    }
  };

  const handleEdit = () => {
    onEdit(order);
  };

  return (
    <div className="output_data">
      <input type="checkbox" name="select" id="select" />
      <p>{id}</p>
      <p>{shipify}</p>
      <p>{formatDate(new Date(creationDate))}</p>
      <p>{getStatusText(status)}</p>
      <p>{customerName}</p>
      <p>{email || "N/A"}</p>
      <p>{county || "N/A"}</p>
      <p>{shipping || "N/A"}</p>
      <p>{source || "N/A"}</p>
      <p>{orderType || "N/A"}</p>
      <button onClick={handleEdit}>
        <CiEdit />
      </button>
      <button onClick={() => onDelete(id)}>
        <MdDelete />
      </button>
    </div>
  );
};

OrderSummary.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    shipify: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    email: PropTypes.string,
    county: PropTypes.string,
    shipping: PropTypes.string,
    source: PropTypes.string,
    creationDate: PropTypes.string.isRequired,
    orderType: PropTypes.string,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default OrderSummary;
