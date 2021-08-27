**This will walk you through the steps:**

1. Choose the tech stack you want

   > To get this storefront, select: Next.js - Complete ecommerce

2. Specify your tenant (the name of your project)

   > At this point, you can select our demo tenant (furniture) or use your own.
   > If you choose your own, you will have to create the content on our [Product
   > Information Management][9]

3. Select if you want to support multiple languages

4. Select the service API
   > At this point, you can select between our demo Service API or your own
   > service API tenant.
   >
   > A [Service API is an open-source project that acts as backend for any of
   > our open-source storefronts][25] that currently hndles the basket, the
   > checkout, the authentication, webhooks, etc. You can modify and/or extended
   > it as you like. Deploy it to Vercel, Amazon Web Services, etc. (we're
   > adding new provieders)
   >
   > Take into account that if you've selected your own tenant, you need to have
   > your own service API because our demo Service API doesn't support products
   > with different shape/attributes.
   >
   > To have your own Service API, you'll need to execute again, our CLI and
   > select the option "Service API - Backend for any of the frontends"

Once your project has been created, you can simply navigate into your project's
directory and run the following to start up your development server:

```sh
npm run dev
# or
yarn dev
```

This will start up the server on http://localhost:3000 for development.

## App Structure

### `src/pages/`

Put all your entry pages here. These are interpreted as separate routes by
Next.js.

### `src/pages/api/`

All your Vercel [serverless functions][18].

### `src/page-components/`

We use the `page-components/` directory to hold the actual component content
related to entries in the `pages/` directory.

### `src/components/`

All your shared React components.

### `src/shapes/`

All your related stuff to shapes. Components, styles, graphql queries and more.

### `src/ui/`

UI related components live here. Color variables and simple shared components

### `src/lib/`

Enable GraphQL and REST API communication and more for the browser client

### `public/static/`

Public resources hosted as static files

## Deploying Your Project

There are multiple alternatives for deployments, two of them being [Vercel][20]
and [Platform.sh][23]

### Deploying with Vercel

- Register a Vercel account
- Install vercel `yarn global add vercel` or `npm i -g vercel`
- Run `vercel`

## License

Open-source and MIT license.
