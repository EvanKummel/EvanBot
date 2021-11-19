const ms = require('ms')

module.exports = {
    name: "Clear",
    execute(Client, message, args) {
        if (!message.member.permissions.has("MANAGE_MESSAGE")) {
            return message.reply("Tu n'as pas la permission d'effectuer cette commande !")
        }

        amount = args[0];

        if (!amount || isNaN(amount) ||amount < 1 || amount > 100) {
            return message.reply("Merci de spécifier un nombre entre 1 et 100 !")
        }
        
        message.channel.messages.fetch({limit: amount + 1}).then(messages => {
            message.channel.bulkDelete(messages);
            })
    }
};