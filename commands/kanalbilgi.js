const { MessageEmbed, MessageAttachment } = require(`discord.js`);

module.exports = {
	name: `kanalbilgi`,
	perm: 0,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;
		const kanal = message.mentions.channels.first() || channel
		
		const type = kanal.type
		.replace("GUILD_TEXT","Metin Kanalı")
		.replace("GUILD_VOICE","Ses Kanalı")
		.replace("GUILD_CATEGORY","Kategori Kanalı")	
		.replace("GUILD_NEWS","Duyuru Kanalı")	

		const channelCreated = `<t:${parseInt(kanal.createdTimestamp / 1000)}:f>`

		const embed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle(kanal.name)
		.addFields(
		{ name: 'Kanal Oluşturma Tarihi', value: `${channelCreated}`, inline: true},
		{ name: 'Kanal Tipi', value: `${type}`, inline: true},
		{ name: 'Kanal ID', value: `${kanal.id}`, inline: true},
		{ name: 'Kanal URL', value: `[Tıkla](https://discord.com/channels/${guild.id}/${kanal.id})` },
		)
		.setTimestamp()
		.setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})

		message.reply({ embeds: [embed] })


	}

};