# MKAY MAKEOVER

**MKAY MAKEOVER** is a responsive, modern web showcase built for a wholesale makeup packaging business — covering makeup boxes, custom beauty packaging, and professional makeup cases. The site is designed to let potential wholesale buyers browse the full product catalogue, view detailed product pages, search for specific items, and reach out directly through a built-in wholesale enquiry form. It is a lean, presentation-focused platform rather than a full online store — there is intentionally no shopping cart, checkout flow, user accounts, or online payment processing, since the business operates on a wholesale enquiry-and-quote model rather than direct online sales.

The project is built with a modern stack (Next.js on the frontend, with Prisma handling data access), making it fast, responsive across devices, and easy to maintain or extend over time.

## Live Site

The site is live and publicly accessible at **[mkaymakeover.in](https://mkaymakeover.in)**.

## Updating Products and Contact Details

All catalogue and contact information is centralized in a single file, making updates straightforward without touching the rest of the codebase:

- Open `lib/catalog.ts` to update brand contact details, along with the full list of products, their product codes, descriptions, and associated images.
- This file acts as the single source of truth for the site — product cards on the homepage, individual product detail pages, the search functionality, and the wholesale enquiry form all pull directly from this catalogue automatically. Updating it in one place propagates the changes everywhere.
- Before publishing the site live, make sure to replace the placeholder phone number, WhatsApp number, and email address found at the top of `lib/catalog.ts` with the real business contact details — leaving placeholders in place could result in enquiries going to the wrong destination (or nowhere at all).

## Setting Up Wholesale Enquiry Emails

The wholesale enquiry form is the core functional piece of the site, allowing prospective buyers to reach out about specific products. To get email delivery working correctly, follow these steps:

1. Copy the provided `.env.example` file and rename the copy to `.env` — this will hold your environment-specific configuration and should never be committed to version control.
2. In `.env`, set `WHOLESALE_EMAIL_TO` to the inbox (or inboxes) that should receive incoming website enquiries. Multiple recipients can be added by separating addresses with commas.
3. Add the SMTP credentials supplied by your email provider (host, port, username, password, etc.) so the application can authenticate and send mail on your behalf.
4. Restart the website/server so the new environment variables are picked up.

Once configured, every submission through the wholesale form will automatically include the selected product's name and product code, along with the requested quantity and the buyer's message — all sent straight to the configured inbox. The email is set up so that the sender's own email address is used as the reply-to, meaning you can respond to the enquiry directly from your inbox without any extra lookup.

## Running the Project Locally

To spin up the site on your own machine for development or testing:

\`\`\`bash
npm run dev
\`\`\`

Once the development server starts, open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the site running locally.
