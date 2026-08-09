# MKAY MAKEOVER

A responsive wholesale product showcase for makeup boxes. There is no cart, checkout, account or online payment flow.

## Update the products and contact details

- Edit `lib/catalog.ts` to change the brand contact details, products, product codes, descriptions and images.
- Product cards, detail pages, search and the wholesale form automatically use this catalogue.
- Replace the placeholder phone number, WhatsApp number and email at the top of `lib/catalog.ts` before publishing.

## Set up wholesale enquiry emails

1. Copy `.env.example` to `.env`.
2. Add the inbox or inboxes that should receive website enquiries to `WHOLESALE_EMAIL_TO` (use commas for multiple addresses).
3. Add the SMTP details supplied by your email provider.
4. Restart the website.

The wholesale form sends the selected product name, product code, quantity and message directly to the configured email inbox. It uses the sender’s email as the reply-to address.

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
