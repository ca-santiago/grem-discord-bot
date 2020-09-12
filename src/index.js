
require('dotenv').config();
const discord = require('discord.js');

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const client = new discord.Client();

client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'hola')
        msg.reply(`Hola, ${msg.author.tag}`)
})

client.on('ready', () => {
    console.log('estamos listos xD');
    console.log(` ${client.user.tag}`);
})

client.login(DISCORD_TOKEN);
