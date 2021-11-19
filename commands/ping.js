module.exports = {
    name: "ping",
    execute(Client, message, args) {
        message.channel.send("Pong ! Calcul en cours...").then(msg => {
            msg.edit(`Pong ! Latence : ${msg.createdTimestamp - message.createdTimestamp}`)
        })
    }
};