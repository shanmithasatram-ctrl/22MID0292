const logger = require('./logger');

function requestLogger(req, res, next) {
    logger(`${req.method} ${req.url}`);
    next();
}

module.exports = requestLogger;
