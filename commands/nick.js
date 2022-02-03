module.exports = {
    name: "Nick",
    permissions: 'ADMINISTRATOR',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    execute: async (client, message, args) => {
      const member = message.mentions.members.first();
  
      if (!member) return message.reply("Veuillez spécifier un membre !");
  
      const arguments = args.slice(1).join(" ");
  
      if (!arguments) return message.reply("Veuillez spécifier un pseudo !");
  
      try {
        member.setNickname(arguments);
      } catch (err) {
        console.log(err);
        message.reply(
          "Je n'ai pas la permission de changer le pseudo de " + member.toString()
        );
      }
    },
  };
