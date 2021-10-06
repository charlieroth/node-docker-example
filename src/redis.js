const { createClient } = require('redis');

const host = process.env.REDIS_HOST || '127.0.0.1';
const port = process.env.REDIS_PORT || 6379;
const connectionUrl = `redis://${host}:${port}`;

const client = createClient({
    url: connectionUrl
});


client.on('connect', () => {
    console.log('redis client: connected');
    console.log(`connection url: ${connectionUrl}`);
});

client.on('end', () => {
    console.log('redis client: disconnected');
});

client.on('reconnecting', () => {
    console.log('redis client: reconnecting');
});

client.on('error', (err) => {
    console.log('redis client: error');
    console.error(err);
});



async function connect() {
    try {
        await client.connect();
    } catch (e) {
        console.log('redis client failed to connect');
        throw e;
    }
}


module.exports = {
    client: client,
    connect: connect
}

