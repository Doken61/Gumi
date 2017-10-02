const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'pelin') {
    msg.reply('Gakupo!');
  }
});

client.on('message', msg => {
  if (msg.content === 'gakupo') {
    msg.channel.sendMessage('Sevi-seviyorum Gakupo♥');
  }
});

client.on('message', msg => {
  if (msg.content === 'Gakupo') {
    msg.channel.sendMessage('Ölene kadar seviyorum samurayım♥');
  }
});

client.on('message', msg => {
  if (msg.content === 'Sa') {
    msg.reply('Aley- Aleyk- Merhaba!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Aman') {
    msg.reply('Hayat böyle geçmez!');
  }
});

client.on('message', msg => {
  if (msg.content === 'aman') {
    msg.reply('Hayat böyle geçmez!');
  }
});

client.on('message', msg => {
  if (msg.content === 'off') {
    msg.reply('Kıskanmadık!');
  }
});

client.login(process.env.BOT_TOKEN);
