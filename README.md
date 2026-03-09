# smart-node-logger

Lightweight production-ready logger for Node.js.

## ✨ Features

- 🎨 **Color-coded log levels** for better readability
- ⚡ **Zero dependencies** - lightweight and fast
- 🔒 **Production-ready** - auto-disables debug logs in production
- 📦 **Easy to use** - simple API, no complex configuration
- 🎯 **TypeScript support** (if applicable)
- 🌍 **Environment-aware** - adapts to NODE_ENV automatically

---

## 📦 Installation

```bash
npm install @mhsakib29/smart-node-logger
```

Or using yarn:

```bash
yarn add @mhsakib29/smart-node-logger
```

---

## 📖 Usage Examples

### Basic Logging

```javascript
const logger = require("@mhsakib29/smart-node-logger");

// Information messages
logger.info("Server listening on port 3000");

// Success messages
logger.success("User registered successfully");

// Warning messages
logger.warn("Deprecated API endpoint used");

// Error messages
logger.error("Database connection failed");

// Debug messages (disabled in production)
logger.debug("Request payload:", requestData);
```

### Express.js Integration

```javascript
const express = require("express");
const logger = require("@mhsakib29/smart-node-logger");

const app = express();

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

app.listen(3000, () => {
  logger.success("Server started on port 3000");
});
```

### Error Handling

```javascript
const logger = require("@mhsakib29/smart-node-logger");

try {
  // Your code here
  riskyOperation();
  logger.success("Operation completed");
} catch (error) {
  logger.error("Operation failed:", error.message);
}
```

---

## 🎨 Log Levels

| Level          | Method             | Description                           | Production  |
| -------------- | ------------------ | ------------------------------------- | ----------- |
| 📘 **INFO**    | `logger.info()`    | General information messages          | ✅ Enabled  |
| ✅ **SUCCESS** | `logger.success()` | Success confirmation messages         | ✅ Enabled  |
| ⚠️ **WARN**    | `logger.warn()`    | Warning messages for potential issues | ✅ Enabled  |
| ❌ **ERROR**   | `logger.error()`   | Error messages for failures           | ✅ Enabled  |
| 🔍 **DEBUG**   | `logger.debug()`   | Detailed debugging information        | ❌ Disabled |

---

## ⚙️ Configuration

### Production Mode

Set the `NODE_ENV` environment variable to `production` to automatically disable debug logs:

```bash
NODE_ENV=production node app.js
```

Or in your package.json:

```json
{
  "scripts": {
    "start": "NODE_ENV=production node app.js",
    "dev": "NODE_ENV=development node app.js"
  }
}
```

---

## 🌟 Why smart-node-logger?

- **No Configuration Required** - Works out of the box
- **Lightweight** - Zero external dependencies
- **Production Optimized** - Automatically adapts to environment
- **Developer Friendly** - Clean, readable console output
- **Battle Tested** - Used in production applications

---

## 📝 API Reference

### `logger.info(message, ...args)`

Logs informational messages.

### `logger.success(message, ...args)`

Logs success messages.

### `logger.warn(message, ...args)`

Logs warning messages.

### `logger.error(message, ...args)`

Logs error messages.

### `logger.debug(message, ...args)`

Logs debug messages (disabled in production).

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Mahbubul Hasan Sakib**

- GitHub: [MahbubulHasanSakib](https://github.com/MahbubulHasanSakib)
- npm: [mhsakib29](https://www.npmjs.com/~mhsakib29)

---

## ⭐ Support

If you find this package useful, please consider giving it a star on [GitHub](https://github.com/MahbubulHasanSakib/smart-node-logger-npm)!

---

<div align="center">

**Made with ❤️ by Mahbubul Hasan Sakib**

</div>
