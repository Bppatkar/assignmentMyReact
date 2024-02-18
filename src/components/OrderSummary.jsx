import { useState } from "react";

const OrderSummary = ({ order }) => {
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
    // Your logic to edit the order
  };

  return (
    <div className="table_headers">
      <input type="checkbox" name="select" id="select" />
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
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default OrderSummary;
