function OrderSummary({ order }) {
  const {
    productName,
    productId,
    //   shipify,
    //   status,
    //   customerName,
    //   email,
    //   county,
    //   shipping,
    //   source,
    //   creationDate,
    //   orderType,
  } = order;

  // const formateDate = (date) => {
  //   const options = { year: "numeric", month: "long", date: "numeric" };
  //   return new Date(date).toLocaleDateString("en-US", options);
  // };

  // const getStatusText = (status) => {
  //   switch (status) {
  //     case "Pending":
  //       return "Order is pending approval";
  //     case "Pinding":
  //       return "Order is being processed";
  //     case "Pundleg":
  //       return "Order is in progress";
  //     default:
  //       return `Order status is ${status}`;
  //   }
  // };
  return (
    // <div>
    //   <h3>{productName}</h3>
    //   <p>Product ID: {productId}</p>
    //   <p>Summary: {productSummary}</p>
    //   <p>Customer: {customerName}</p>
    //   <p>Category: {category}</p>
    //   <p>County: {county}</p>
    //   <p>Source: {source}</p>
    //   <p>
    //     Creation Date: {formatDate(creationDate)} - Due Date:{" "}
    //     {formatDate(dueDate)}
    //   </p>
    //   <p>{getStatusText(status)}</p>
    // </div>
    <>
      <h3>{order.productName}</h3>
      <p>Product Id: {order.productId}</p>
      <p></p>
    </>
  );
}

export default OrderSummary;
