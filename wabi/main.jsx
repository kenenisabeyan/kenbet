import { useState } from "react";

function App() {
  const [burgerOrders, setBurgerOrders] = useState(0);
  const [pizzaOrders, setPizzaOrders] = useState(0);
  const [pastaOrders, setPastaOrders] = useState(0);

  // Common style for the food cards
  const cardStyle = {
    border: "1px solid #ddd",
    padding: "15px",
    width: "300px",
    borderRadius: "10px",
    marginBottom: "15px",
    backgroundColor: "#f9f9f9"
  };

  const buttonStyle = {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#333" }}>Wabiskills Restaurant Orders</h1>
      <hr />

      {/* Burger Section */}
      <div style={cardStyle}>
        <h2>🍔 Burger</h2>
        <p>Current Orders: <strong>{burgerOrders}</strong></p>
        <button style={buttonStyle} onClick={() => setBurgerOrders(burgerOrders + 1)}>
          Add Burger
        </button>
      </div>

      {/* Pizza Section */}
      <div style={cardStyle}>
        <h2>🍕 Pizza</h2>
        <p>Current Orders: <strong>{pizzaOrders}</strong></p>
        <button style={buttonStyle} onClick={() => setPizzaOrders(pizzaOrders + 1)}>
          Add Pizza
        </button>
      </div>

      {/* Pasta Section */}
      <div style={cardStyle}>
        <h2>🍝 Pasta</h2>
        <p>Current Orders: <strong>{pastaOrders}</strong></p>
        <button style={buttonStyle} onClick={() => setPastaOrders(pastaOrders + 1)}>
          Add Pasta
        </button>
      </div>

      <div style={{ marginTop: "20px", fontWeight: "bold" }}>
        Total Items Ordered: {burgerOrders + pizzaOrders + pastaOrders}
      </div>
    </div>
  );
}

export default App;