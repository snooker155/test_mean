/**
 * Created by anzubare on 16.12.2016.
 */

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');

module.exports = {
    port: port,
    db: 'mongodb://localhost/app'
};


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

