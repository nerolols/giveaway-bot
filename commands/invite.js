const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    let prefix = config.prefix;
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    let invite = new Discord.MessageEmbed()
    .setTitle("Invite & Support Link!")
    .addField("Invite Link", "[Click here to invite me](https://discord.com/oauth2/authorize?client_id=794569635076636725&scope=bot&permissions=2080899257)")
    .addField("Support Server", "[Click to join support Server](https://discord.gg/8MYmBc8K)")
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
    message.channel.send(invite);
}

module.exports.help = {
    name: "invite"
}
