# Based Merchant AI Call

An AI-powered merchant outreach platform that facilitates USDC payment adoption through Coinbase Pay integration. The platform uses advanced AI technology to engage merchants in natural conversations about the benefits of cryptocurrency payments.

## Features

- 🎙️ **Natural Conversations**: AI agent engages merchants naturally to explain USDC benefits and integration
- 💰 **USDC Benefits**: Fast settlement, low fees, and stable value for merchant payments
- 🔄 **Easy Integration**: Quick setup with Coinbase Pay & Wallet for accepting USDC payments

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **AI & Voice**: ElevenLabs React SDK
- **Styling**: Tailwind CSS
- **Blockchain**: Kolwaii - Blockchain AI Software Engineer and datalake
- **Frontend**: React 18
- **Development**:
  - TypeScript
  - ESLint
  - PostCSS
  - Autoprefixer

## Prerequisites

- Node.js (Latest LTS version recommended)
- yarn
- ElevenLabs Agent ID

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/based-merchant-aicall.git
cd based-merchant-aicall
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables:
   - Copy `.env.template` to `.env`
   - Add your ElevenLabs Agent ID:
```bash
NEXT_PUBLIC_AGENT_ID=your_agent_id_here
```

## Development

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
based-merchant-aicall/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── pages/       # Next.js pages
│   ├── styles/      # Global styles
│   └── types/       # TypeScript type definitions
```

## License

This project is licensed under the terms of the license included with this software.
