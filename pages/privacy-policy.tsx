import Navbar from "../components/Navbar";

export default function PrivacyPolicy() {
  return (
    <>    
      <Navbar />
      <main style={{ maxWidth: 700, margin: "2rem auto", padding: "2rem" }}>
        <h1>Privacy Policy</h1>
        <p>
          We value your privacy. Your information is used solely for order processing and customer service.
          We do not sell or share your data with third parties. For more details or questions, please contact us.
        </p>
      </main>
    </>
  );
}