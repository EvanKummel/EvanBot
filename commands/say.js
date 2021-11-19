module.exports = {
    name: "Say",
    execute(Client, message, args) {
        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply("Tu n'as pas la permission d'effectuer cette commande !")
        }
               
        let MSG = message.content.split(" ");
        let Query = MSG.slice(1).join("+");
        let QueryD = MSG.slice(1).join(" ");
        if (!Query) message.reply("Veuillez me préciser le message que je doit dire")
        else
        {
          message.delete()
          message.channel.send(QueryD)
        }
    }
};