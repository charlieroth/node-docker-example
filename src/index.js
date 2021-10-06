const fastify = require('fastify')({ logger: true });
const redis = require('./redis');

fastify.post('/to-cache', async (request, reply) => {
    const { message } = request.body;
    await redis.client.set(message.key, message.value);
    return { message };
});

fastify.get('/from-cache', async (request, reply) => {
    const { key } = request.query;
    const message = await redis.client.get(key);
    return { message };
});


const start = async () => {
    try {
        const PORT = process.env.API_PORT || 3000;
        const HOST = process.env.API_HOST || '127.0.0.1';
        await redis.connect();
        await fastify.listen(PORT, HOST);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();
