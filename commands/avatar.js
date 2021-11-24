module.exports = {
    name: "Avatar",
    execute : async(Client, message, args) => {
        const member = message.mentions.members.first() || message.member;
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
            .setTitle('Avatar de ' + member.user.tag)
            .setImage(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setColor('RANDOM')
        message.channel.send({ embeds: [embed]})
    },
};