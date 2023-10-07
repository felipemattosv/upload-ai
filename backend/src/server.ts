import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';

const app = fastify();

// Configures Fastify to allow requests from any origin, enabling CORS
app.register(fastifyCors, {
  origin: '*',
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server running!');
})
