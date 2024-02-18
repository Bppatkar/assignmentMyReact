// import React, { useState } from "react";

// const OrderList = ({ orders }) => {
//   const [selectedOrders, setSelectedOrders] = useState([]);

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     const orderId = parseInt(name);

//     if (checked) {
//       setSelectedOrders((prevOrders) => [...prevOrders, orderId]);
//     } else {
//       setSelectedOrders((prevOrders) =>
//         prevOrders.filter((id) => id !== orderId)
//       );
//     }
//   };

//   const handleDispatch = () => {
//     // Your logic to dispatch the selected orders
//     console.log("Dispatching orders:", selectedOrders);
//   };

//   return (
//     <div className="order-list">
//       <table>
//         <thead>
//           <tr>
//             <th>Select</th>
//             <th>ID</th>
//             <th>Shipify</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Customer</th>
//             <th>Email</th>
//             <th>County</th>
//             <th>Shipping</th>
//             <th>Source</th>
//             <th>Order Type</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id}>
//               <td>
//                 <input
//                   type="checkbox"
//                   name={order.id}
//                   checked={selectedOrders.includes(order.id)}
//                   onChange={handleCheckboxChange}
//                 />
//               </td>
//               <OrderSummary order={order} />
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={handleDispatch}>Dispatch</button>
//     </div>
//   );
// };

// export default OrderList;
