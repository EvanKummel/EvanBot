const {Message, MessageEmbed}= require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'Tempmute',
    /**
     * @param {Message} message
     */
    execute : async(Client, message, args) => {
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.message.reply("Tu n'as pas la permission d'effectuer cette action !")
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]
        if(!Member) return message.reply('Veuillez précicez préciser le membre à tempmute.')
        if(!time) return message.message.reply('Veuillez spécifier un temps de mute')
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === '{Muet}')

        const role2 = message.guild.roles.cache.find(role => role.name == "{Muet}");
        if(Member.roles.cache.has(role2)) return message.message.reply(`${Member.displayName} est déjà muet.`)
        await Member.roles.add(role2)
        message.message.reply(`${Member.displayName} est maintenant tempmute.`)

        setTimeout(async () => {
            await Member.roles.remove(role2)
        }, ms(time))
    }
}