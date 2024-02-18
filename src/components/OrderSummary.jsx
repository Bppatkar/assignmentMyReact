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
    if (isNaN(Date.parse(date))) {
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
      <p>ID {productId}</p>
      <p>Shipify # {shipify}</p>
      <p>Date {formatDate(creationDate)}</p>
      <p>Status {getStatusText(status)}</p>
      <p>Customer {customerName}</p>
      <p>Email {email}</p>
      <p>County {county}</p>
      <p>Shipping: {shipping}</p>
      <p>Source {source}</p>
      <p>Order Type {orderType}</p>
    </div>
  );
}

export default OrderSummary;
