module.exports = {
    name: "Ban",
    execute(Client, message, args) {
        if (!message.member.permissions.has("BAN_MEMBERS")) {
            return message.reply("Tu n'as pas la permission d'effectuer cette commande !")
        }

        let member = message.mentions.members.first();

        if (!member) {
            return message.reply(`Merci de préciser l'utilisateur à bannir !`)
        }

        if (member.id == message.author.id) {
            return message.reply(`Tu ne peut te bannir toi même !`)
        }
      
        let reason = args.slice(1).join(" ") || "Banni par le Staff"

        member.ban({days:0, reason: reason}).then(() => message.reply(`L'utilisateur a été banni !`))
    }
};