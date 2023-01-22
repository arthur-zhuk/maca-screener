This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Technical Decisions for Screener

The app was written with TypeScript and React. TypeScript ensures bugs are caught at compile time with it's type safety. It also allows the app to scale more fluidily as the codebase grows due to type definitions and much more.

NextJS was used as the rendering framework as it provides the ultimate React development experience as well as it's intuitive optimizations with server side rendering. Create-React-App SPA model has been phased out as users now expect more performance squeezed out of web apps than ever before and the SPA approach of bundling, caching, and fetching data is outdone by Next. With Next it's straight forward to deploy and even host domains all in one managed service freeing developer resources up to focus on what's important which is building the product, not doing DevOps.

index.tsx is essentially the Home component in this example. Here multiple components are abstracted away into their own files. This helps with legibility and seperates concerns. There are a small amount of tradeoffs by doing this in this example. One of those trade offs is the React state getters and setters need to be passed as props into these components. If they lived in one file then they could be immediately accessed.

Comments are made to help quickly communicate what the tailwind syntax is accomplishing with it's styling.

The CardGallery component is a completely responsive layout that fits enough cards on the page while make it pleasant to the user. If the side panel is opened the layout wraps cards that don't fit down a row. Cards have different lengths of content and preserve their structure making keeping the design appealing.

The Toggle component displays styling accomplished with vanilla Tailwind. It also demonstrates the ability to change the styling on that component dynamically leveraging React state and template literals on the className prop.

A few unit test assertions were written demonstrating the light weight approach to testing UI without the need of resource intensive and brittle solutions like end to end testing with Cypress. These tests interact with the UI changing the state of the DOM and asserting values are as they're expected to be.
