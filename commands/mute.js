module.exports = {
    name: "Mute",
    permissions: 'ADMINISTRATOR',
    permissionError: 'Vous ne pouvez pas faire cela en raison de vos permissions !', 
    execute(Client, message, args) {
        const member = message.mentions.members.first()
        if(!member) return message.reply('Veuillez mentionner la personne à rendre muet.')
        member.roles.add('910607266594558062')
        if(member.roles.cache.has('910607266594558062')) return message.reply('Utilisateur déjà muet.')
        message.reply(`${member.displayName} a été rendu muet.`)
    }
}