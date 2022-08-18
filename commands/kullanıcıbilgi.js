const { MessageEmbed, MessageAttachment } = require(`discord.js`);

module.exports = {
	name: `kullanıcıbilgi`,
	perm: 0,

	run: async(client, message, db, args) => {

		const { author, guild, channel, member } = message;
		const target_user = message.mentions.users.first() || message.author
		const target_member = message.mentions.members.first() || message.member
		const createdAccount = `<t:${parseInt(target_user.createdTimestamp / 1000)}:f>`
		const joinedAccount = 	`<t:${parseInt(target_member.joinedTimestamp / 1000)}:f>`	

		const ıd = target_user.id
		const bot = target_user.bot ? 'Evet':'Hayır'
		const avatar = target_user.displayAvatarURL({ dynamic: true })

		const roles = target_member.roles.cache.filter(role => role.name !== '@everyone').map(role => role).join(' **|** ') || 'Bulunmuyor'

		const embed = new MessageEmbed()
		.setColor('#0099ff')
		.setAuthor({ name: target_user.tag, iconURL: avatar })
		.setTitle('Kullanıcı Bilgileri')
		.setThumbnail(avatar)
		.addFields(
		{ name: 'Sunucuya Giriş Tarihi', value: `${joinedAccount}`},
		{ name: 'Discord Kayıt Tarihi', value: `${createdAccount}`},
		{ name: 'Kullanıcı ID', value: `${ıd}`, inline: true },
		{ name: 'Bot mu?', value: `${bot}` , inline: true },
		{ name: 'Roller', value: `${roles}`},
	)


		if (target_user && target_member) {
			embed.setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})
			embed.setTimestamp()
		}

		message.reply({ embeds: [embed] })




	}

};