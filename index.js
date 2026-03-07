const levels = {
  info: "INFO",
  success: "SUCCESS",
  warn: "WARNING",
  error: "ERROR",
  debug: "DEBUG",
};

const colors = {
  reset: "\x1b[0m",
  info: "\x1b[36m", // Cyan
  success: "\x1b[32m", // Green
  warn: "\x1b[33m", // Yellow
  error: "\x1b[31m", // Red
  debug: "\x1b[35m", // Magenta
};

function getTimestamp() {
  return new Date().toISOString();
}

function log(level, message) {
  const env = process.env.NODE_ENV || "development";

  // Hide debug logs in production
  if (env === "production" && level === "debug") {
    return;
  }

  const color = colors[level] || colors.info;
  const label = levels[level] || levels.info;

  console.log(
    `${color}[${label}] ${getTimestamp()} - ${message}${colors.reset}`,
  );
}

module.exports = {
  info: (msg) => log("info", msg),
  success: (msg) => log("success", msg),
  warn: (msg) => log("warn", msg),
  error: (msg) => log("error", msg),
  debug: (msg) => log("debug", msg),
};