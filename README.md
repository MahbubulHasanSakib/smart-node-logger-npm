# smart-node-logger

Lightweight production-ready logger for Node.js.

## Install

npm install smart-node-logger

## Usage

const logger = require("smart-node-logger");

logger.info("App started");
logger.success("Database connected");
logger.warn("Low memory");
logger.error("Something failed");
logger.debug("Debugging info");

## Production Mode

NODE_ENV=production

Debug logs will automatically be disabled.
