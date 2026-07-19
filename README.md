# Trim-URL

A simple URL shortener that lets you turn long links into short, custom, shareable URLs.

## Features

- Shorten any URL with a **custom alias** of your choice
- Instant redirection from the short link to the original URL
- Prevents duplicate short URLs from being created

## Tech Stack

- **Next.js (App Router)** — frontend and backend (API routes)
- **React** — UI components
- **MongoDB** — stores the URL mappings
- **Tailwind CSS** — styling

## Getting Started

1. Clone the repo and install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
2. Create a \`.env.local\` file with:
   \`\`\`
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_HOST=http://localhost:3000
   \`\`\`
3. Run the dev server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open \`http://localhost:3000\` and go to \`/shorten\` to create a short link.

## How It Works

- \`/shorten\` — form to submit a long URL and a preferred short alias
- \`/api/generate\` — saves the URL pair to MongoDB (rejects it if the alias is already taken)
- \`/[shorturl]\` — looks up the alias in MongoDB and redirects to the original URL
