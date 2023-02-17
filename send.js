import { connect } from 'amqplib';

const connection = await connect('amqp://localhost');

const channel = await connection.createChannel();

const queue = 'messages';
const message = 'Hi Rabbit :D';

await channel.assertQueue(queue, { durable: false });

channel.sendToQueue(queue, Buffer.from(message));

// Alternative: publish to exchange instead of queue

// await channel.assertExchange('logs', 'fanout', { durable: false });

// await channel.bindQueue(queue, 'logs', '');

// channel.publish('logs', '', Buffer.from(message));
