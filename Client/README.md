# QuSat Frontend

A modern React.js frontend for the QuSat quantum satellite communication project, built with Vite and Tailwind CSS.

## Features

- 🚀 **Fast Development** - Built with Vite for lightning-fast development
- 🎨 **Modern UI** - Beautiful interface with Tailwind CSS
- 🔗 **Wallet Integration** - MetaMask wallet connection
- 📱 **Responsive Design** - Works on all devices
- 🔄 **Real-time Updates** - Live dashboard with real-time data
- 🛡️ **Secure** - Environment-based configuration

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **clsx** - Conditional class handling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd QuSat/Client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   Edit `.env` file with your configuration:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   VITE_BLOCKCHAIN_NETWORK=testnet
   VITE_DEBUG_MODE=true
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable UI components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── context/        # React context providers
├── utils/          # Utility functions and API helpers
├── App.jsx         # Main app component
└── main.jsx        # Application entry point
```

## Key Components

### Pages
- **Home** (`/pages/Home.jsx`) - Landing page with project overview
- **Dashboard** (`/pages/Dashboard.jsx`) - Real-time monitoring dashboard

### Components
- **Navbar** (`/components/Navbar.jsx`) - Navigation with wallet connection
- **Wallet Integration** - MetaMask wallet connection functionality

### Hooks
- **useWallet** (`/hooks/useWallet.js`) - Custom hook for wallet operations

### Utils
- **API** (`/utils/api.js`) - Axios configuration and API functions

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:5000/api` |
| `VITE_BLOCKCHAIN_NETWORK` | Blockchain network | `testnet` |
| `VITE_DEBUG_MODE` | Enable debug mode | `true` |

## API Integration

The frontend is configured to work with the QuSat backend API. Key endpoints:

- **Satellites**: `/api/satellites`
- **Quantum Communication**: `/api/quantum`
- **Blockchain**: `/api/blockchain`

## Wallet Integration

The application supports MetaMask wallet integration for:
- Account connection
- Transaction signing
- Balance checking
- Network switching

## Styling

The project uses Tailwind CSS with custom components:
- `.btn-primary` - Primary button styling
- `.btn-secondary` - Secondary button styling
- `.card` - Card component styling

## Development

### Code Quality
- ESLint for code linting
- Prettier for code formatting
- React best practices

### Adding New Features
1. Create components in `src/components/`
2. Add pages in `src/pages/`
3. Create custom hooks in `src/hooks/`
4. Add API functions in `src/utils/api.js`

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Format code: `npm run format`
6. Submit a pull request

## License

This project is part of the QuSat hackathon project.
