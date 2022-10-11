const Discord = require("discord.js");
const os = require(`os`);
const wait = require('node:timers/promises').setTimeout;
const { SlashCommandBuilder } = require('@discordjs/builders');
const data = new SlashCommandBuilder()
    .setName('istatistik')
    .setDescription("Botun istatistiklerini gösterir.");
module.exports.execute = async (client, interaction, db) => {

    const owner = client.users.cache.get('978276967877054464').tag
    
		const cpu = os.cpus().map(c => c.model)[0]
		var platform = os.platform()

		const up = os.uptime()
		const ver = os.version().slice(0, 12)

		if (platform === 'win32') { platform = 'Windows' } else if (platform === 'linux') { platform = 'Gnu/Linux' } else if (platform = 'darwin') { platform = 'macOS' }


    const embed = new Discord.EmbedBuilder()
	.setColor("#57F287")
    .setTitle(`${client.user.username} - İstatistikleri!`)
	.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
	.addFields(
		{ name: 'Sahip', value: `<@978276967877054464> | ${owner}`},
		{ name: 'İşlemci', value: `${cpu}`},
        { name: 'Destekçiler', value: `<@852900286402002985> **|** <@615188075408130078> **|** <@399143685758910486> **|** <@357932653586153472>`},    
		{ name: 'İşletim Sistemi', value: `${platform}`, inline: true},
		{ name: 'Çalışma Süresi', value: `${Math.floor(up / 60)} Dakika`, inline: true},
		{ name: 'Versiyon', value: `${ver}`, inline: true},
		{ name: 'Sunucu Sayısı', value: `${client.guilds.cache.size}`},
		{ name: 'Kullanıcı Sayısı', value: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0) + client.users.cache.size}`, inline: true},
		{ name: 'Kanal Sayısı', value: `${client.channels.cache.size}`, inline: true},
		{ name: 'Komut Sayısı', value: `${client.commands.size}`},
		{ name: 'Bot Versiyon', value: `**BETA**`, inline: true},
		{ name: 'Discord.JS Versiyon', value: `${Discord.version}`, inline: true},
		{ name: 'Node Versiyon', value: `${process.version}`, inline: true},
		{ name: 'RAM Kullanımı', value: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()}MB/1GB`},

		)
    .setFooter({ text:  `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
	.setTimestamp()

        interaction.reply({ embeds: [embed] })

};
module.exports.options = {
    ...data.toJSON()
};


module.exports.config = {
    enabled: true,
};