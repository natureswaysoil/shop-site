import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-8 py-4 bg-brandGreen text-white flex justify-between items-center mb-8">
      <div className="font-bold text-xl">
        <Link href="/">Nature&apos;s Way Soil</Link>
      </div>
      <div className="flex gap-6">
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/kb">Knowledge Base</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/refund-policy">Refund Policy</Link>
      </div>
    </nav>
  );
}