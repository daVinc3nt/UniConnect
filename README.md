# UniConnect

Ứng dụng React Native được xây dựng với Expo, TypeScript và Redux Toolkit để kết nối sinh viên đại học.

## 🚀 Công nghệ sử dụng

- **React Native** - Framework phát triển ứng dụng di động đa nền tảng
- **Expo** - Nền tảng phát triển React Native
- **TypeScript** - Ngôn ngữ lập trình với kiểu dữ liệu tĩnh
- **Redux Toolkit** - Quản lý state toàn ứng dụng
- **React Navigation** - Điều hướng trong ứng dụng
- **Jest** - Framework testing
- **ESLint + Prettier** - Code linting và formatting
- **Husky** - Git hooks để đảm bảo chất lượng code

## 📁 Cấu trúc thư mục

```
UniConnect/
├── src/
│   ├── components/          # Các component tái sử dụng
│   │   ├── CustomButton.tsx
│   │   └── tests/
│   ├── hooks/              # Custom hooks
│   │   └── useAuth.ts
│   ├── navigation/         # Cấu hình điều hướng
│   │   ├── AppNavigator.tsx
│   │   └── tests/
│   ├── screens/           # Các màn hình chính
│   │   ├── HomeScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   ├── SettingsScreen.tsx
│   │   └── tests/
│   ├── services/          # API calls và external services
│   │   ├── api.ts
│   │   └── tests/
│   ├── store/            # Redux store configuration
│   │   ├── index.ts
│   │   ├── userSlice.ts
│   │   └── tests/
│   └── types/           # TypeScript type definitions
│       └── global.d.ts
├── tests/              # Integration tests
│   └── integration/
├── assets/            # Hình ảnh, fonts, etc.
├── .husky/           # Git hooks
├── .vscode/          # VS Code configuration
└── config files      # Babel, Jest, ESLint, etc.
```

## 🛠️ Cài đặt và chạy ứng dụng

### Yêu cầu hệ thống

- Node.js >= 18
- npm hoặc yarn
- Expo CLI
- iOS Simulator (cho macOS) hoặc Android Emulator

### Cài đặt dependencies

```bash
# Clone repository
git clone https://github.com/daVinc3nt/UniConnect.git
cd UniConnect

# Cài đặt dependencies
npm install

# Cài đặt Expo CLI (nếu chưa có)
npm install -g expo-cli
```

### Chạy ứng dụng

```bash
# Khởi động development server
npm start

# Chạy trên iOS simulator
npm run ios

# Chạy trên Android emulator
npm run android

# Chạy trên web browser
npm run web
```

### Development Scripts

```bash
# Linting
npm run lint              # Kiểm tra code với ESLint
npm run format           # Format code với Prettier

# Testing
npm test                 # Chạy tests với watch mode
npm run test:coverage    # Chạy tests và tạo coverage report

# Build
npm start               # Start Expo development server
```

## 📝 Coding Standards

### TypeScript

- Sử dụng TypeScript cho tất cả các file (.ts, .tsx)
- Định nghĩa types trong `src/types/`
- Sử dụng interface cho object types
- Tránh sử dụng `any`, thay vào đó dùng `unknown` hoặc định nghĩa type cụ thể

### Naming Conventions

- **Components**: PascalCase (`CustomButton.tsx`)
- **Files/Folders**: camelCase (`userSlice.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Functions**: camelCase (`getUserProfile`)

### File Organization

- Mỗi component có file test riêng trong thư mục `tests/`
- Export components từ index files
- Sử dụng absolute imports với alias `@/` (trỏ đến `src/`)

## 🧪 Testing

### Unit Tests

- Sử dụng Jest và React Native Testing Library
- Test file naming: `ComponentName.test.tsx`
- Test tất cả components, hooks, và utility functions

### Integration Tests

- Đặt trong thư mục `tests/integration/`
- Test luồng navigation và tương tác giữa components

## 🔧 Development Tools

### ESLint Configuration

- ESLint v9 với flat config format
- TypeScript support
- React và React Hooks rules
- Prettier integration

### Pre-commit Hooks

- Husky chạy lint-staged
- Tự động lint và format code trước khi commit
- Chỉ chạy trên staged files để tối ưu performance

### 🔄 Luồng Commit Process

Khi bạn chạy `git commit`, hệ thống sẽ tự động thực hiện các bước sau:

#### 1. Pre-commit Hook Trigger
```bash
.husky/pre-commit → npx lint-staged
```

#### 2. Lint-staged Configuration (package.json)
```json
"lint-staged": {
  "src/**/*.{ts,tsx}": ["eslint --fix"],
  "tests/**/*.{ts,tsx}": ["eslint --fix"]
}
```

#### 3. Files Processing Flow

**Bước 1: Phát hiện staged files**
- Git kiểm tra tất cả files đã staged
- Lint-staged filter theo pattern matching

**Bước 2: Chạy ESLint trên TypeScript files**
```
src/components/*.tsx     → ESLint check & auto-fix
src/screens/*.tsx        → ESLint check & auto-fix  
src/hooks/*.ts           → ESLint check & auto-fix
src/services/*.ts        → ESLint check & auto-fix
src/store/*.ts           → ESLint check & auto-fix
tests/**/*.tsx          → ESLint check & auto-fix
```

**Bước 3: ESLint Configuration Applied**
- `eslint.config.js` được load
- Rules từ TypeScript, React, React Hooks
- Tự động fix các lỗi có thể sửa được
- Báo lỗi nếu có issues không thể tự fix

#### 4. Success/Failure Scenarios

**✅ Commit thành công khi:**
- Tất cả ESLint rules pass
- Không có lỗi syntax
- Không có unused variables
- Code style consistent

**❌ Commit bị reject khi:**
- ESLint errors không thể auto-fix
- TypeScript compilation errors
- Lint rules violations

#### 5. Debugging Commit Issues

Nếu commit fail, kiểm tra:

```bash
# Chạy ESLint manually để debug
npm run lint

# Kiểm tra specific file
npx eslint src/components/YourComponent.tsx

# Xem staged files
git diff --cached --name-only

# Reset và stage lại sau fix
git add .
git commit -m "your message"
```

#### 6. Files Được Process

**Luôn được check:**
- `src/**/*.ts` - TypeScript files
- `src/**/*.tsx` - React TypeScript components
- `tests/**/*.ts` - Test files
- `tests/**/*.tsx` - Component test files

**Được ignore:**
- `*.cjs` files (config files)
- `coverage/` directory  
- `node_modules/`
- `.expo/` directory
- Generated files

**Config files flow:**
```
eslint.config.js     → ESLint configuration
babel.config.cjs     → Babel transpilation
jest.config.cjs      → Test configuration
.prettierrc.cjs      → Code formatting rules
```

### VS Code Settings

- Tự động format on save
- ESLint integration
- TypeScript support với strict mode


## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

### Quy tắc Commit

- Sử dụng tiếng Anh cho commit messages
- Format: `type: description`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:
```
feat: add user authentication
fix: resolve navigation stack overflow
docs: update README with setup instructions
```

## 📄 License

This project is licensed under the MIT License.