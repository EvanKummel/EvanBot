const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "reset",
  permissions: 'ADMINISTRATOR',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  execute: async (client, message, args) => {
    const member = message.mentions.members.first();

    if (!member) return message.reply("Veuillez spécifier un membre");

    try {
      member.setNickname(null);
    } catch (err) {
      message.reply(
        "Je n'ai pas la permission de réinitialiser le pseudo de " + member.toString()
      );
    }
  },
};