const {Message, MessageEmbed}= require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'Tempban',
    /**
     * @param {Message} message
     */
    execute : async(Client, message, args) => {
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.message.reply("Tu n'as pas la permission d'effectuer cette action !")
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]
        if(!Member) return message.reply('Veuillez précicez préciser le membre à tempban.')
        if(!time) return message.message.reply('Veuillez spécifier un temps de ban')

        let reason = args.slice(2).join(" ") || "Banni Temporairement par le Staff"

        await Member.ban({days:0, reason: reason})
        message.reply(`${Member.displayName} est maintenant tempban.`)

        setTimeout(async () => {
            message.guild.members.unban(Member)
        }, ms(time))
    }
}