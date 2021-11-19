const Discord = require('discord.js');

module.exports = {
    name: "Unban",
    permissions: 'ADMINISTRATOR',
    permissionError: 'Vous ne pouvez pas faire cela en raison de vos permissions !', 

    execute : async(Client, message, args) => {

        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        Id = args[0];

        if(!args[0]) return message.reply('Veuillez spécifier un utilisateur');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Débanni par le Staff';

        message.guild.members.unban(Id)
        .catch(err => {
            if(err) return message.reply("Un erreur c'est produite")
        })

        message.reply(`Id ${Id} débanni`);
    }
}

