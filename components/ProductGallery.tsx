import { products } from "../lib/products";
import { useCart } from "../context/CartContext";

export default function ProductGallery({ featuredOnly = false }) {
  const { addToCart } = useCart();
  const list = featuredOnly ? products.filter(p => p.featured) : products;
  return (
    <div className="grid gap-8 py-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {list.map((product) => (
        <div key={product.slug} className="shadow-lg rounded-xl bg-[#fafcf9] flex flex-col overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full object-cover aspect-[1.2] min-h-[180px]"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-brandGreen mb-2 cursor-pointer">{product.title}</h3>
            <p className="text-base mb-2 text-gray-700">{product.description}</p>
            <div className="font-bold text-brandOrange text-base mb-3">{product.price}</div>
            <button
              onClick={() => addToCart(product)}
              className="px-6 py-3 bg-brandGreen text-white rounded-lg font-bold mt-auto"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}