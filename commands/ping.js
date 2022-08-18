const { EmbedBuilder } = require(`discord.js`);

module.exports = {
	name: `ping`,
	perm: 0,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;

    
		const emb1ed = new EmbedBuilder()
		.setColor('Red')
		.setDescription(`Hesaplanıyor...`)
		.setTimestamp()

		message.reply({ embeds: [emb1ed] }).then(msg => {

			setTimeout(function() {

				const embed = new EmbedBuilder()
				.setColor('Green')
				.setDescription(`**Pong!** anlık gecikme sürem ***${client.ws.ping}ms***`)

				msg.edit({ embeds: [embed] })

			}, 3000);

		});
			

	}

};
