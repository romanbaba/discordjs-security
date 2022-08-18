const { MessageEmbed, MessageAttachment } = require(`discord.js`);

module.exports = {
	name: `zar-at`,
	perm: 0,

	run: async(client, message, db, args) => {


		const { author, guild, channel } = message;
		const avatar = author.displayAvatarURL({ dynamic: true })
		const random = Math.floor(Math.random() * 6)
		
		const atılıyor = new MessageEmbed()
		.setColor('RED')
		.setAuthor({ name: author.tag, iconURL: avatar })
		.setDescription('<:parkle:996678480764870747> | Zar atılıyor..')	
		.setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})
		.setTimestamp()

		message.reply({ embeds: [atılıyor] }).then(msg =>{


			setTimeout(function() {

			const atıldı = new MessageEmbed()
		.setColor('#0099ff')
		.setAuthor({ name: author.tag, iconURL: avatar })
		.setDescription(':game_die: | Atıldı! çıkan sayı **'+random+'**')	
		.setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})
		.setTimestamp()

		msg.edit({ embeds: [atıldı] })


			}, 1500);


		})

	}

};