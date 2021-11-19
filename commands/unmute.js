module.exports = {
    name: "Unmute",
    permissions: 'ADMINISTRATOR',
    permissionError: 'Vous ne pouvez pas faire cela en raison de vos permissions !', 
    execute(Client, message, args) {
            const member = message.mentions.members.first()
            if(!member) return message.reply('Veuillez mentionner la personne à unmute.')
            member.roles.remove('910607266594558062')
            if(!member.roles.cache.has('910607266594558062')) return message.reply('Utilisateur déjà unmute.')
            message.reply(`${member.displayName} a été unmute.`)
    }
}
