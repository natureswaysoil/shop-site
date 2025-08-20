import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.quantity, 0);

  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.length > 0 && (
        <> 
          <ul>
            {cart.map(item => (
              <li key={item.slug} className="mb-3">
                <strong>{item.title}</strong> - {item.price} x {item.quantity}
                <button
                  className="ml-4 text-red-700 border-none bg-transparent cursor-pointer"
                  onClick={() => removeFromCart(item.slug)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="font-bold mt-4">Total: ${total.toFixed(2)}</div>
          <button
            className="mt-4 px-6 py-3 bg-brandOrange text-white rounded-lg font-bold"
            onClick={clearCart}
          >
            Clear Cart
          </button>
          <form action="/checkout" method="GET" className="inline">
            <button
              className="mt-4 ml-4 px-6 py-3 bg-brandGreen text-white rounded-lg font-bold"
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