import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.quantity, 0);

  return (
    <div style={{ background: "#fff", borderRadius: "8px", padding: "1rem", boxShadow: "0 2px 8px #0001" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.length > 0 && (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.slug} style={{ marginBottom: "0.75rem" }}>
                <strong>{item.title}</strong> - {item.price} x {item.quantity}
                <button
                  style={{ marginLeft: "1rem", color: "#a00", border: "none", background: "transparent", cursor: "pointer" }}
                  onClick={() => removeFromCart(item.slug)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div style={{ fontWeight: "bold", marginTop: "1rem" }}>Total: ${total.toFixed(2)}</div>
          <button
            style={{
              marginTop: "1rem",
              padding: "0.75rem 1.5rem",
              background: "#d18122",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
            onClick={clearCart}
          >
            Clear Cart
          </button>
          <form action="/checkout" method="GET" style={{ display: "inline" }}>
            <button
              style={{
                marginTop: "1rem",
                marginLeft: "1rem",
                padding: "0.75rem 1.5rem",
                background: "#184932",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
              type="submit"
            >
              Checkout
            </button>
          </form>
        </>
      )}
    </div>
  );
}