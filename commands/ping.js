const { MessageEmbed, MessageAttachment } = require(`discord.js`);

module.exports = {
	name: `ping`,
	perm: 0,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;

    
		const emb1ed = new MessageEmbed()
		.setColor('RED')
		.setDescription(`Hesaplanıyor...`)
		.setTimestamp()

		message.reply({ embeds: [emb1ed] }).then(msg => {

			setTimeout(function() {

				const embed = new MessageEmbed()
				.setColor('GREEN')
				.setDescription(`**Pong!** anlık gecikme sürem ***${client.ws.ping}ms***`)

				msg.edit({ embeds: [embed] })

			}, 3000);

		});
			

	}

};