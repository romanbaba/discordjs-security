const { MessageEmbed, MessageAttachment } = require(`discord.js`);


module.exports = {
	name: `qrcode`,
	perm: 0,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;
		const text = args.slice(0).join(' ')
		const text1 = args.slice(0).join('%20')
		const avatar = author.displayAvatarURL({ dynamic: true })

		var url = `https://chart.googleapis.com/chart?cht=qr&chl=${text1}&chs=180x180&choe=UTF-8&chld=L|2`

		const embed1 = new MessageEmbed()
		.setColor("RED")
		.setDescription(`<:cross:996678479363969075> | Bir metin belirtmen gerekiyor.`)

		if (!text) return message.reply({ embeds: [embed1] })

		const embed = new MessageEmbed()
		.setColor('#0099ff')
		.setAuthor({ name: author.tag, iconURL: avatar })
		.setTitle(text)
		.setImage(url)
		.setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})
		.setTimestamp()
		
		if (text.startsWith('https://')) {
			embed.setTitle('Linkli QRCode')
		}

		if (text.endsWith('.png')) {
			embed.setThumbnail(text)
			embed.setTitle('Linkli QRCode')
		}

		message.reply({ embeds: [embed] })


	}

};