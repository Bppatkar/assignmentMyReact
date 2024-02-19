import PropTypes from "prop-types";

const NewOrderForm = ({
  isOpen,
  onClose,
  onCreate,
  newOrder,
  onInputChange,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newOrder.shipify || !newOrder.date || !newOrder.status) {
      alert("Please fill in all required fields.");
      return;
    }
    onCreate();
  };

  return isOpen ? (
    <div className="form-popup">
      <form className="form-container" onSubmit={handleSubmit}>
        {/* Your form fields */}
        <button type="submit" className="btn">
          Create
        </button>
        <button type="button" className="btn cancel" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  ) : null;
};

NewOrderForm.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onCreate: PropTypes.func,
  newOrder: PropTypes.object,
  onInputChange: PropTypes.func,
};

export default NewOrderForm;
