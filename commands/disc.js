const { EmbedBuilder } = require(`discord.js`);

module.exports = {
	name: `disc`,
	perm: 0,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;
    
    
		/* Disc aynı olanları aratıyoruz */

		const users = client.users.cache.filter(user => author.discriminator === user.discriminator)

		const map = users.map(u => u.tag).join('\n')
		const s = users.size

		const avatar = author.displayAvatarURL({ dynamic: true })

		if (s <= 256) {


		const embed = new EmbedBuilder()
		.setColor('#0099ff')
		.setAuthor({ name: author.tag, iconURL: avatar })
		.setTitle('Tags')
		.setDescription(map)
		.setThumbnail(avatar)
		.setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})
		.setTimestamp()


		message.reply({ embeds: [embed] })

		} else {
			const embed = new EmbedBuilder()
		.setColor('Red')
		.setAuthor({ name: author.tag, iconURL: avatar })
		.setTitle('Tags')
		.setDescription('Üzgünüm çok fazla tag olduğundan dolayı bunu size gösteremem.')
		.setThumbnail(avatar)
		.setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})
		.setTimestamp()


		message.reply({ embeds: [embed] })


		}			

	}

};
