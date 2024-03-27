# AudaIQ

## Introduction
AudaIQ is an AI-powered platform designed to provide brands with critical social insights by analyzing public sentiment across multiple social media channels. Developed during the PolyHack hackathon, it aims to empower brands with real-time alerts, actionable insights, and comprehensive metrics to understand public sentiment about their products, improve decision-making, customer experience, and brand engagement.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Documentation](#documentation)
- [Examples](#examples)
- [Contributors](#contributors)

## Installation
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Ensure you have Node.js installed to use npm commands for managing dependencies.

First, install all the relevant packages and dependencies

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Usage
Open [http://localhost:3000](http://localhost:3000) with your browser to see the web app.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features
- Real-time sentiment analysis across multiple social media platforms.
- Trending topics and feedback aggregation.
- Actionable insights for brand improvement and customer engagement.
- B2B subscription-based model offering comprehensive insights for SMEs.

## Dependencies
Next.js, Prisma, Tailwind CSS, and any Python 3

## Configuration
Before running the application, you need to set up the environment variables required for the project's dependencies. Create a `.env` file in the root directory of the project and include the following configurations:

- **Prisma Database URL**: Specify your database connection URL.
```bash
DATABASE_URL="your_database_connection_url"
```
- **Next Auth**: If using third-party authentication providers (e.g., Google, Facebook, Twitter), specify the necessary API keys and secrets.
```bash
AUTH_PROVIDER_SECRET="your_auth_provider_secret"
NEXTAUTH_URL="http://localhost:3000"
```
- **External APIs**: If the project interacts with external APIs through Axios, include the relevant API keys.

These are the basic configurations you may need to adjust depending on which services and APIs your project utilizes. Ensure to replace placeholder values with actual keys and URLs. Additional environment variables might be required for advanced features or specific integrations not covered here.

For more detailed information about configuring each dependency, refer to their official documentation:

- [Prisma Documentation](https://www.prisma.io/docs/)
- [Next Auth Documentation](https://next-auth.js.org/getting-started/introduction)
- [Axios on GitHub](https://github.com/axios/axios)

## Documentation

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Examples
Provide examples of how to perform common tasks or use the platform's features effectively.

## Contributors
Credit the team members who contributed to the project, highlighting their roles and contributions.


