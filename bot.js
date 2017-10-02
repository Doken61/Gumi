const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'pelin') {
    msg.reply('Bu ne ciddiyet! Gülücük koy ve biraz bekle BAKA!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'gakupo') {
    msg.channel.sendMessage('Uykusuz gecelerimin sabahısın, bütün güzelliklerin adısın, sen benim kara sevdamsın♥');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aley- Aleyk- Merhaba!');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aman') {
    msg.reply('Hayat böyle geçmez!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'off') {
    msg.reply('Yoruldun be! Yoruldun artık hayattan! Buraya gel BAKAA!');
  }
});

client.login(process.env.BOT_TOKEN);
