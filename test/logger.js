class Logger {
    async log(message) {
        process.emit('test:log', message);
    }
}

module.exports = new Logger();