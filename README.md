# MyAwesomeApp

A professional React Native application built with Expo, featuring TypeScript, React Navigation, comprehensive testing, and modern development tools.

## 🚀 Features

- **React Native + Expo SDK**: Latest Expo SDK with TypeScript template
- **Navigation**: React Navigation with stack and bottom tabs
- **State Management**: Redux Toolkit for predictable state management
- **Type Safety**: Full TypeScript support with strict configuration
- **Testing**: Jest + React Native Testing Library with coverage reports
- **Code Quality**: ESLint + Prettier with Airbnb style guide
- **Git Hooks**: Husky + lint-staged for pre-commit validation
- **Absolute Imports**: Clean import paths with `@/` alias

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- For iOS development: [Xcode](https://developer.apple.com/xcode/)
- For Android development: [Android Studio](https://developer.android.com/studio)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MyAwesomeApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Git hooks**
   ```bash
   npm run prepare
   ```

## 🏃‍♂️ Running the Application

### Development Server

Start the Expo development server:

```bash
npm start
```

This will open the Expo DevTools in your browser where you can:
- Scan the QR code with the Expo Go app on your mobile device
- Press `i` to open in iOS Simulator
- Press `a` to open in Android Emulator
- Press `w` to open in web browser

### Platform-Specific Commands

**iOS Simulator:**
```bash
npm run ios
```

**Android Emulator:**
```bash
npm run android
```

**Web Browser:**
```bash
npm run web
```

## 🧪 Testing

### Running Tests

**Watch mode (recommended for development):**
```bash
npm test
```

**Single run:**
```bash
npm run test:coverage
```

### Test Coverage

Generate and view test coverage reports:
```bash
npm run test:coverage
```

Coverage reports will be generated in the `coverage/` directory.

### Test Structure

```
src/
├── components/tests/          # Component unit tests
├── screens/tests/             # Screen component tests
├── services/tests/            # Service layer tests
├── store/tests/               # Redux store tests
└── navigation/tests/          # Navigation tests

tests/
└── integration/               # Integration tests
```

## 🎨 Code Style & Linting

### Linting

Check for linting errors:
```bash
npm run lint
```

### Formatting

Format code with Prettier:
```bash
npm run format
```

### Pre-commit Hooks

The project uses Husky and lint-staged to ensure code quality:

- **ESLint**: Checks for code quality and potential errors
- **Prettier**: Ensures consistent code formatting
- **Jest**: Runs related tests for changed files

These checks run automatically on every commit.

## 📁 Project Structure

```
MyAwesomeApp/
├── app.json                   # Expo configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── babel.config.js           # Babel configuration
├── jest.config.js            # Jest testing configuration
├── .eslintrc.js              # ESLint configuration
├── .prettierrc.js            # Prettier configuration
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── CustomButton.tsx
│   │   └── tests/
│   ├── screens/              # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   ├── SettingsScreen.tsx
│   │   └── tests/
│   ├── navigation/           # Navigation configuration
│   │   ├── AppNavigator.tsx
│   │   └── tests/
│   ├── hooks/                # Custom React hooks
│   │   └── useAuth.ts
│   ├── services/             # API and external services
│   │   ├── api.ts
│   │   └── tests/
│   ├── store/                # Redux store configuration
│   │   ├── index.ts
│   │   ├── userSlice.ts
│   │   └── tests/
│   └── types/                # TypeScript type definitions
│       └── global.d.ts
├── tests/
│   └── integration/          # Integration tests
└── .husky/                   # Git hooks
```

## 🔧 Configuration

### Absolute Imports

The project is configured to use absolute imports with the `@/` alias:

```typescript
// Instead of
import { CustomButton } from '../../../components/CustomButton';

// Use
import { CustomButton } from '@/components/CustomButton';
```

### Environment Variables

Create a `.env` file in the root directory for environment-specific variables:

```env
API_BASE_URL=https://api.example.com
```

## 📱 Screens

### Home Screen
- Displays welcome message
- Shows user information when authenticated
- Navigation to other sections

### Profile Screen
- User profile information
- Avatar display
- Edit profile functionality

### Settings Screen
- App preferences (notifications, dark mode, etc.)
- Version information
- Settings persistence

## 🔄 State Management

The app uses Redux Toolkit for state management:

- **User Slice**: Manages user authentication and profile data
- **Type-safe**: Full TypeScript integration
- **DevTools**: Redux DevTools extension support

## 🚀 Deployment

### Building for Production

**iOS:**
```bash
expo build:ios
```

**Android:**
```bash
expo build:android
```

### Publishing Updates

```bash
expo publish
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Workflow

1. **Before coding**: Run `npm test` to ensure all tests pass
2. **During development**: Use `npm start` for hot reloading
3. **Before committing**: Pre-commit hooks will automatically run linting and tests
4. **Code review**: Ensure all CI checks pass

## 📚 Documentation

- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/)

## 🐛 Troubleshooting

### Common Issues

**Metro bundler issues:**
```bash
npx expo start --clear
```

**iOS Simulator not opening:**
- Ensure Xcode is installed and updated
- Check iOS Simulator is available

**Android Emulator not starting:**
- Verify Android Studio installation
- Check AVD (Android Virtual Device) configuration

**Dependency conflicts:**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development platform
- [React Navigation](https://reactnavigation.org/) for navigation solutions
- [Testing Library](https://testing-library.com/) for testing utilities
- [Airbnb](https://github.com/airbnb/javascript) for the style guide