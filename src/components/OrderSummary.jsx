function OrderSummary({ order }) {
  const {
    productName,
    productId,
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
    // Check if the date is valid
    if (!date || isNaN(Date.parse(date))) {
      return "Invalid Date";
    }
    const options = { year: "numeric", month: "long", date: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const getStatusText = (status) => {
    switch (status) {
      case "Pending":
        return "Order is pending approval";
      case "Processing":
        return "Order is being processed";
      case "Progress":
        return "Order is in progress";
      default:
        return `Order status is ${status}`;
    }
  };

  return (
    <div className="table_headers">
      <h3>{productName}</h3>
      <p>ID: {productId}</p>
      <p>Shipify #: {shipify}</p>
      <p>Date: {formatDate(creationDate)}</p>
      <p>Status: {getStatusText(status)}</p>
      <p>Customer: {customerName || "N/A"}</p>
      <p>Email: {email || "N/A"}</p>
      <p>County: {county || "N/A"}</p>
      <p>Shipping: {shipping || "N/A"}</p>
      <p>Source: {source || "N/A"}</p>
      <p>Order Type: {orderType || "N/A"}</p>
    </div>
  );
}

export default OrderSummary;
