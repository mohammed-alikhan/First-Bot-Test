require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE"]
});

const BOT_PREFIX = "&"
const MOD_ME_COMMAND = "bot"

client.on("messageDelete", msg => {
    msg.channel.send("Stop deleting messages!")
})


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log("Our bot is ready to go");
  });

  client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('pong');
    }

    if(msg.content === "i love this bot"){
        msg.react("❤");
    }
  });

  client.login(process.env.BOT_TOKEN)