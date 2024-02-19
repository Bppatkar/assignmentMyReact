import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";
import { useState } from "react";

const OrderSummary = ({ order, onEdit, onDelete }) => {
  const {
    id,
    shipify,
    date,
    status,
    customer,
    email,
    county,
    shipping,
    source,
    orderType,
  } = order;

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleEdit = () => {
    onEdit(order);
  };
  const formatDate = (date) => {
    if (!date || isNaN(Date.parse(date))) {
      return "";
    }
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <tr className={`output_data ${isChecked ? "checked" : ""}`}>
      <td>
        <input
          type="checkbox"
          name="select"
          id={`select-${order.id}`}
          checked={isChecked}
          onChange={toggleCheckbox}
        />
      </td>
      <td>{id.padStart(7, "0")}</td>
      <td>{shipify.padStart(5, "0")}</td>
      <td>{formatDate(date)}</td>
      <td>{status}</td>
      <td>{customer}</td>
      <td>{email}</td>
      <td>{county}</td>
      <td>{shipping}</td>
      <td>{source}</td>
      <td>{orderType}</td>
      <td>
        <button className="edit_btn" onClick={() => onEdit(order)}>
          <CiEdit />
        </button>
        <button className="dlt_btn" onClick={() => onDelete(id)}>
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

OrderSummary.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    shipify: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    county: PropTypes.string.isRequired,
    shipping: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    orderType: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default OrderSummary;
