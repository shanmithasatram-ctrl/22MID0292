const fs = require('fs');

function logger(message) {
    const log = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFileSync('app.log', log);
}

module.exports = logger;
