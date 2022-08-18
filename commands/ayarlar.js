const { MessageEmbed, MessageAttachment } = require(`discord.js`);

module.exports = {
	name: `ayarlar`,
	perm: 5,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;
    
    if(!message.member.permissions.has('MANAGE_MESSAGES')) {
              return message.reply({ embeds: [ new EmbedBuilder().setDescription('<:cross:996678479363969075> | Bu komutunu kullanabilmek için `Mesajları Yönet` iznine sahip olman gerekiyor. ').setColor('Red') ]});
            }
    
    
			var log = db.fetch(`logChannel_${guild.id}`) ? 'Aktif':'Deaktif'
			var  kanal = db.fetch(`guardChannel_${guild.id}`) ? 'Aktif':'Deaktif'
			var rol = db.fetch(`guardRole_${guild.id}`) ? 'Aktif':'Deaktif'
			var ban = db.fetch(`guardBan_${guild.id}`) ? 'Aktif':'Deaktif'
			var bot = db.fetch(`botDatabase_${guild.id}`) ? 'Aktif':'Deaktif'
			var url = db.fetch(`urlDatabase_${guild.id}`) ? 'Aktif':'Deaktif'
		  var admin =	db.fetch(`adminBotDatabase_${guild.id}`) ? 'Aktif':'Deaktif'
			var hesap = db.fetch(`accountDatabase_${guild.id}`) ? 'Aktif':'Deaktif'
      
      const avatar = author.displayAvatarURL({ dynamic: true })
      
      const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('Koruma Ayarları')
      .setThumbnail(avatar)
      .addFields(
		{ name: 'log', value: `${log}`},
		{ name: 'kanal-koruması', value: `${kanal}`, inline: true},
		{ name: 'rol-koruması', value: `${rol}`, inline: true},
		{ name: 'ban-koruması', value: `${ban}`},
		{ name: 'bot-koruması', value: `${bot}`, inline: true},
    { name: 'hesap-koruması', value: `${hesap}`, inline: true},
		{ name: 'link-koruması', value: `${url}`},
		{ name: 'yönetici-koruması', value: `${admin}`, inline: true},
		)
      .setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})
		  .setTimestamp()
      
    message.reply({ embeds: [embed] })
    
			

	}

};
