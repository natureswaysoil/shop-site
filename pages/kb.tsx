import Navbar from "../components/Navbar";

export default function KBPage() {
  return (
    <>    
      <Navbar />
      <main style={{ maxWidth: 900, margin: "2rem auto", padding: "2rem" }}>
        <h1>Knowledge Base</h1>
        <ul>
          <li><strong>How do I use your fertilizers?</strong> See individual product pages for usage instructions.</li>
          <li><strong>What is mycorrhizae?</strong> Mycorrhizae are beneficial fungi that help roots absorb nutrients.</li>
          <li><strong>Do you offer bulk discounts?</strong> Yes, contact us for details.</li>
        </ul>
        {/* Add more FAQ articles here */}
      </main>
    </>
  );
}