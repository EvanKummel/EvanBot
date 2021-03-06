const ms = require('ms')

module.exports = {
    name: "Clear",
    execute(Client, message, args) {
        if (!message.member.permissions.has("MANAGE_MESSAGE")) {
            return message.reply("Tu n'as pas la permission d'effectuer cette commande !")
        }

        amount = args[0];

        amount ++

        if (!amount || isNaN(amount) ||amount < 1 || amount > 100) {
            return message.reply("Merci de spécifier un nombre entre 1 et 99 !")
        }
        
        message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages);
            })
    }
};