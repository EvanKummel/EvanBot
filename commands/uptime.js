module.exports = {
    name: "Uptime",
    execute(Client, message, args) {
        days = Math.floor((Client.uptime / (1000 * 60 * 60 * 24)) % 60).toString();
        hours = Math.floor((Client.uptime / (1000 * 60 * 60)) % 60).toString();
        minuts = Math.floor((Client.uptime / (1000 * 60)) % 60).toString();
        seconds = Math.floor((Client.uptime / (1000)) % 60).toString();

        message.channel.send(`Uptime : ${days}d ${hours}h ${minuts}m ${seconds}s`)
    }
};