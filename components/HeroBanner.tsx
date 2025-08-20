import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="flex flex-wrap items-center justify-between bg-brandGreen text-white px-8 py-12 rounded-b-3xl min-h-[320px]">
      <div className="max-w-xl flex-1 min-w-[340px]">
        <h1 className="text-4xl font-bold mb-3">Nature&apos;s Way Soil</h1>
        <p className="text-lg mb-6">
          From our farm to your garden — premium organic soil blends enriched with biochar, worm castings, & mycorrhizae.
        </p>
        <div className="flex gap-4 mb-6">
          <a href="#featured">
            <button className="bg-white text-brandGreen font-bold rounded-lg px-6 py-3 shadow">View Featured</button>
          </a>
          <a href="/products">
            <button className="bg-transparent text-white border border-white rounded-lg px-6 py-3">View All Products</button>
          </a>
        </div>
        <ul className="list-disc pl-5 mb-0">
          <li>Biochar for aeration & nutrient retention</li>
          <li>Worm castings for living biology</li>
          <li>Mycorrhizae to supercharge roots</li>
        </ul>
      </div>
      <div className="flex-1 min-w-[200px] flex justify-end">
        <Image src="/logo.png" alt="Nature's Way Soil" width={220} height={220} className="object-contain rounded-full" />
      </div>
    </section>
  );
}