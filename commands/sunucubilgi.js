const { EmbedBuilder } = require(`discord.js`);

module.exports = {
	name: `sunucubilgi`,
	perm: 0,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;

		const guildOwner = `<@${guild.ownerId}>`
		const guildId = guild.id
		const guildCreated = `<t:${parseInt(guild.createdTimestamp / 1000)}:f>`
		const icon = guild.iconURL({ dynamic: true }) || null;

		const textChannelCount = guild.channels.cache.filter(kanal => kanal.type === "GUILD_TEXT").size;
		const voiceChannelCount = guild.channels.cache.filter(kanal => kanal.type === "GUILD_VOICE").size;
		const categoryChannelCount = guild.channels.cache.filter(kanal => kanal.type === "GUILD_CATEGORY").size;

		const roles = guild.roles.cache.filter(role => role.name !== "@everyone").size;

		const total = guild.memberCount
		const members = guild.members.cache.filter(member => !member.user.bot).size;
		const bots = guild.members.cache.filter(member => member.user.bot).size;

		const emojis = guild.emojis.cache.size;

		const description = guild.description

		const embed = new EmbedBuilder()
		.setColor('#0099ff')
		.setTitle(guild.name)
		.setThumbnail(icon)
		.addFields(
		{ name: 'Sunucu Sahibi', value: `${guildOwner}` },
		{ name: 'Sunucu ID', value: `${guildId}` },
		{ name: 'Sunucu Oluşturma Tarihi', value: `${guildCreated}`},
		{ name: 'Kanal Sayısı', value: `${textChannelCount} Kanal **|** ${voiceChannelCount} Sesli **|** ${categoryChannelCount} Kategori`},
		{ name: 'Rol Sayısı', value: `${roles} Rol`, inline: true },
		{ name: 'Emoji Sayısı', value: `${emojis} Emoji`, inline: true },
		{ name: 'Üye Sayısı', value: `${total} Toplam üye **|** ${members} Kullanıcı **|** ${bots} Bot`},
		)
		.setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})
		.setTimestamp()
		
		if (description) {
			embed.setDescription(`**Sunucu Açıklaması**\n${description}`)
		}

		message.reply({ embeds: [embed] })


	}

};
