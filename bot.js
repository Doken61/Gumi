const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.ToLowerCase() === ('pelin') {
    msg.reply('Bu ne ciddiyet! Gülücük koy ve biraz bekle BAKA!');
  }
});

client.on('message', msg => {
  if (msg.content.ToLowerCase() === ('gakupo') {
    msg.channel.sendMessage('Uykusuz gecelerimin sabahısın, bütün güzelliklerin adısın, sen benim kara sevdamsın♥');
  }
});

client.on('message', msg => {
  if (msg.content.ToLowerCase() === ('sa') {
    msg.reply('Aley- Aleyk- Merhaba!');
  }
});


client.on('message', msg => {
  if (msg.content.ToLowerCase() === ('aman') {
    msg.reply('Hayat böyle geçmez!');
  }
});

client.on('message', msg => {
  if (msg.content.ToLowerCase() === ('off') {
    msg.reply('Yoruldun be! Yoruldun artık hayattan! Buraya gel BAKAA!');
  }
});

client.login(process.env.BOT_TOKEN);
