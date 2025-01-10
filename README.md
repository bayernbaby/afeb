I'll help create a comprehensive README for this project template. Based on the codebase, it appears to be a Next.js project with Sanity CMS integration, styled with Tailwind CSS and featuring a modern component architecture.

```markdown
# Modern Next.js + Sanity Template

A modern, full-featured template built with Next.js 14, Sanity CMS, Tailwind CSS, and TypeScript. This template provides a solid foundation for building content-driven websites with a clean, maintainable architecture.

## 🚀 Features

- **Next.js 14** - Latest features from Next.js including App Router
- **Sanity CMS** - Integrated headless CMS with custom schemas
- **TypeScript** - Full type safety throughout the project
- **Tailwind CSS** - Utility-first CSS framework with custom configuration
- **Shadcn/ui** - High-quality component system
- **Modern Tooling**
  - ESLint for code linting
  - Prettier for code formatting
  - PostCSS for CSS processing

## 📦 Core Components

- **Blog System** - Full-featured blog with posts, categories, and authors
- **Showcase Projects** - Portfolio/showcase functionality
- **Newsletter Integration** - HubSpot newsletter integration
- **Responsive Navigation** - Mobile-friendly navigation with overlay menu
- **Toast Notifications** - Clean notification system
- **Form Handling** - React Hook Form with Zod validation

## 🛠 Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file with the following variables:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id
NEXT_PUBLIC_HUBSPOT_FORM_ID=your_form_id
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗 Project Structure

```
├── app/                  # Next.js app directory
├── components/          # React components
│   ├── forms/          # Form components
│   ├── layout/         # Layout components
│   ├── menu/           # Navigation components
│   └── ui/             # UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── providers/          # React context providers
├── public/             # Static assets
├── sanity/            # Sanity configuration
│   ├── schemas/       # Content schemas
│   └── lib/          # Sanity utility functions
└── types/             # TypeScript type definitions
```

## 💅 Styling

This template uses Tailwind CSS with a custom configuration that includes:
- Custom color scheme
- Responsive breakpoints
- Typography scale
- Component variants

## 🔒 Type Safety

The project includes comprehensive TypeScript types for:
- Sanity schema types
- API responses
- Component props
- Form data

## 📝 Content Management

The Sanity Studio is integrated and accessible at `/editor`. Content types include:
- Blog posts
- Showcase projects
- Site settings
- Authors

## 🚀 Deployment

The project is optimized for deployment on Vercel. Deploy with:

```bash
vercel
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 License

MIT License - feel free to use this template for your own projects.
```

This README provides a comprehensive overview of the template's features and setup instructions. Let me know if you'd like me to expand on any section or add additional information!
