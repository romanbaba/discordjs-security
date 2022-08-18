const { EmbedBuilder } = require(`discord.js`);

module.exports = {
	name: `rolbilgi`,
	perm: 0,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;
		const rol = message.mentions.roles.first() || guild.roles.cache.random()
		

		const rolCreated = `<t:${parseInt(rol.createdTimestamp / 1000)}:f>`


		const embed = new EmbedBuilder()
		.setColor(rol.hexColor)
		.setTitle(rol.name)
		.setThumbnail(rol.iconURL({ dynamic: true }))
		.addFields(
		{ name: 'Role Sahip Kullanıcı Sayısı', value: `${rol.members.size || '0'}`},
		{ name: 'Etiketlenebilir mi?', value: `${rol.mentionable ? 'Evet':'Hayır'}`},
		{ name: 'Rol ID', value: `${rol.id}`, inline: true},
		{ name: 'Renk Kodu', value: `${rol.hexColor}`, inline: true},
		)
		.setTimestamp()
		.setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})

		message.reply({ embeds: [embed] })


	}
		};
