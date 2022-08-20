const { MessageEmbed, MessageAttachment, version } = require(`discord.js`);
const os = require(`os`);
const moment = require(`moment`);

module.exports = {
	name: `bot`,
	perm: 0,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;
    

		const owner = client.users.cache.get('978276967877054464').tag
    
		const cpu = os.cpus().map(c => c.model)[0]
		var platform = os.platform()

		const up = os.uptime()
		const ver = os.version()

		if (platform === 'win32') { platform = 'Windows' } else if (platform === 'linux') { platform = 'Linux' } else if (platform = 'darwin') { platform = 'macOS' }

		const emb1ed = new MessageEmbed()
		.setColor('RED')
		.setDescription(`<:parkle:996678480764870747> | Veriler hesaplanıyor...`)
		.setTimestamp()

		message.reply({ embeds: [emb1ed] }).then(msg => {

			setTimeout(function() {

				const embed = new MessageEmbed()
				.setTitle('Bot Bilgi')
				.setColor('GREEN')
				.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
			.addFields(
		{ name: 'Sahip', value: `<@978276967877054464> | ${owner}`},
		{ name: 'İşlemci', value: `${cpu}`},
    { name: 'Destekçiler', value: `<@852900286402002985> **|** <@615188075408130078>`},    
		{ name: 'İşletim Sistemi', value: `${platform}`, inline: true},
		{ name: 'Çalışma Süresi', value: `${Math.floor(up / 60)} Dakika`, inline: true},
		{ name: 'Versiyon', value: `${ver}`, inline: true},
		{ name: 'Sunucu Sayısı', value: `${client.guilds.cache.size}`},
		{ name: 'Kullanıcı Sayısı', value: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, inline: true},
		{ name: 'Kanal Sayısı', value: `${client.channels.cache.size}`, inline: true},
		{ name: 'Komut Sayısı', value: `${client.commands.size}`},
		{ name: 'Bot Versiyon', value: `**BETA**`, inline: true},
		{ name: 'Discord.JS Versiyon', value: `${version}`, inline: true},
		{ name: 'Node Versiyon', value: `${process.version}`, inline: true},
		{ name: 'RAM Kullanımı', value: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()}MB/1GB`},

		)
    .setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})
		.setTimestamp()

		msg.edit({ embeds: [embed] })

			}, 3000);

		});
			

	}

};