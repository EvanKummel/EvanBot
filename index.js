const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const config = require('./config.json');

Client.on('ready', () => {
    const statuses = [
        '*help ==> Aide du Bot',
        'Bot par Evan',
    ]
    let i = 0
    setInterval(() => {
    Client.user.setActivity(statuses[i], {type: 'PLAYING'})
    i = ++i % statuses.length
    }, 1e4)
});

Client.on("ready", () => {
    console.log("Le Bot est Opérationnel :)")
});

Client.on('guildMemberAdd', async(member) => {
    const Channel = member.guild.channels.cache.get('874271309591363644')
    const embed = new MessageEmbed()
        .setColor('GREEN')
        .setTitle('Nouveau Membre !')
        .setDescription(`**${member.displayName}** Bienvenue a ${member.guild.name}, nous sommes ${member.guild.memberCount} membres, c'est trop cool !`)
        message.channel.send(embed)
});
Client.on("messageCreate", message => {

    let content = message.content.split(" ");
    let command = content[0];
    let args = content.slice(1);
    let prefix = config.prefix;

    if (message.content.startsWith(config.prefix)) {
        try {
            let commandFile = require(`./commands/${command.slice(prefix.length)}.js`)
            commandFile.execute(Client, message, args);
        } catch (e) {
            console.warn(`Erreur avec le handler : ${e}`);
            return;
        }
    }
});

Client.login("");