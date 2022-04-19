const chalk = require('chalk');

module.exports = {
  name: 'ready',
  execute(client) {
    console.log(chalk.green('[BlackKnight683]') + chalk.cyan(' Thanks for using Ticket v2'))
    console.log(chalk.red('=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+='))
    console.log(chalk.green('Name: ') + chalk.cyan('Tickety v2'))
    console.log(chalk.green('Bot Status: ') + chalk.cyan('Initialized'))
    console.log(chalk.red('=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+='))
    const oniChan = client.channels.cache.get(client.config.ticketChannel)

    function sendTicketMSG() {
      const embed = new client.discord.MessageEmbed()
        .setColor('6d6ee8')
        .setAuthor('Create an order', client.user.avatarURL())
        .setDescription('To create an order, press the 💸 button')
        .setFooter(`${client.user.tag}`, client.user.displayAvatarURL())
      const row = new client.discord.MessageActionRow()
        .addComponents(
          new client.discord.MessageButton()
          .setCustomId('open-ticket')
          .setLabel('Open a ticket')
          .setEmoji('💸')
          .setStyle('PRIMARY'),
        );

      oniChan.send({
        embeds: [embed],
        components: [row]
      })
    }

    oniChan.bulkDelete(100).then(() => {
      sendTicketMSG()
      console.log(chalk.green('[Tickety v2]') + chalk.cyan(' Sent the ticket creation widget..'))
    })
  },
};