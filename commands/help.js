module.exports = {
    name: "Help",
    execute(Client, message, args) {
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
            .setTitle("Liste des Commandes")
            .setURL("https://github.com/EvanKummel/EvanBot/wiki")
            .setDescription("Vous y trouverez la liste des Commandes du Bot")
            .setAuthor("EvanBot", "https://cdn.discordapp.com/avatars/516695450896826398/48aed792ec82c3521454bae2fcc4b84d.png?size=128" )
            .addField("*help", "Affiche la Liste des Commandes")
            .addField("*evan", "Le Bot se Présente")
            .addField("*bjr", "Le Bot dit Bonjour !")
            .addField("*bsr", "Le Bot dit Bonsoir :)")
            .addField("*ping", "Affiche Votre Ping")
            .addField("*say", "Dit les Mots que vous voulez")
            .addField("*clear", "Supprime un nombre de messages défini")
            .addField("*ban", "Ban un Joueur défini")
            .addField("*tempban", "Ban Temporairement un Joueur défini")
            .addField("*unban", "Unban un joueur défini")
            .addField("*mute", "Mute un Joueur défini")
            .addField("*tempmute", "Mute Temporairement un Joueur défini")
            .addField("*unmute", "Unmute un Joueur défini")
            .addField("*kick", "Expulse un Joueur défini")
            .addField("*nick", "Changer le Pseudo d'un Joueur sur le Serveur")
            .addField("*reset", "Réinitialiser le Pseudo d'un Joueur sur le Serveur")
            .addField("*traduction", "Traduire de n'importe quelle langue vers le Français")
            .addField("*image", "Affiche l'image de votre choix")
            .addField("*avatar", "Affiche l'avatar de l'utilisateur de votre choix")
            .addField("*uptime", "Affiche le Temps en Ligne du Bot depuis ça Dernière Session")
            .setTimestamp()
            .setFooter("Appartenance a Evan K#8428", "https://cdn.discordapp.com/avatars/516695450896826398/48aed792ec82c3521454bae2fcc4b84d.png?size=128");
        message.channel.send({ embeds: [embed]})
    }
};