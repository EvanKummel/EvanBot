const translate = require('translate-google')

module.exports= {
    name : 'Traduction',
    execute : async(Client, message, args) => {
        translate(args.join(" "), {to : 'fr'}).then(res => {
            message.channel.send('Traduction : '+ res)
        }).catch(err => {
            message.channel.send('Une erreur est survenue.')
            console.log(err)
        })
    }
}