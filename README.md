# Nature's Way Soil Shop

A modern Next.js ecommerce site for Nature's Way Soil.  
Features:
- Hero banner with logo and brand colors
- Product catalog (organic fertilizers)
- Shopping cart and Stripe checkout
- AI chat support widget
- Knowledge base/FAQ section
- Privacy and refund policy pages

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run locally:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Add your logo:**
   Place your logo image as `public/logo.png`.

4. **Configure Stripe and AI Chat:**
   - Add your Stripe public key in the checkout integration.
   - Add your OpenAI API key for the AI chat widget.

5. **Deploy:**
   - Connect your repo to [Vercel](https://vercel.com/) for easy deployment.

## Customization

- Update products in `lib/products.ts`.
- Edit policy pages in `pages/privacy-policy.tsx` and `pages/refund-policy.tsx`.
- Add knowledge base articles in `pages/kb.tsx`.

---

**Refund Policy:**  
If you aren't happy within 30 days, just ask for a refund and keep the product.

**Privacy Policy:**  
Your information is only used for order processing and customer service.

## License

Proprietary. Contact Nature's Way Soil for reuse permissions.