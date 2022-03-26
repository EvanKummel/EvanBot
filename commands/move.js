const { Client, Message } = require("discord.js");

module.exports = {
    name: "Move",
    /**
     * @param {Client} Client 
     * @param {Message} message
     * @param {String[]} args
     */
    execute(Client, message, args) {
        if (!message.member.permissions.has("ADMINISTRATOR")) return;

        const member = message.mentions.members.first();
        if (!member) return message.reply('Veuillez mentioner un utilisateur');
        if (!member.voice.channel) 
        return message.reply(
            "L'utilisateur n'est pas connecté un salon vocal"
            );
        
        if (!message.member.voice.channel)
            return message.reply("Veuillez rejoindre un salon vocal");
        member.voice.setChannel(message.member.voice.channel);
        message.reply("L'utilisateur à été déplacé dans votre salon vocal")
    },
};