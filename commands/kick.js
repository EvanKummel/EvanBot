module.exports = {
    name: "Kick",
    execute(Client, message, args) {
        if (!message.member.permissions.has("KICK_MEMBERS")) {
            return message.reply("Tu n'as pas la permission d'effectuer cette commande !")
        }

        let member = message.mentions.members.first();

        if (!member) {
            return message.reply(`Merci de préciser l'utilisateur à expluser !`)
        }

        if (member.id == message.author.id) {
            return message.reply(`Tu ne peut t'expluser toi même !`)
        }

        let reason = args.slice(1).join(" ") || "Expulsé par le Staff"

        member.kick({days:0, reason: reason}).then(() => message.reply(`L'utilisateur a été expulsé !`))
    }
};