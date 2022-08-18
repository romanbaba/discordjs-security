const { EmbedBuilder } = require(`discord.js`);

module.exports = {
	name: `log-kapat`,
	perm: 4,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;
    if(!message.member.permissions.has('ADMINISTRATOR')) {
              return message.reply({ embeds: [ new EmbedBuilder().setDescription('<:cross:996678479363969075> | Bu komutunu kullanabilmek için `Yönetici` iznine sahip olman gerekiyor. ').setColor('Red') ] });
            }
		const database = db.fetch(`logChannel_${guild.id}`)

		if(!database) return message.reply({ embeds: [new EmbedBuilder().setDescription('<:cross:996678479363969075> | Log komutu zaten deaktif edilmiş.').setColor('Red') ]})	
		
		if(database) {

			message.reply({ embeds: [new EmbedBuilder().setDescription('<:parkle:996678480764870747> | Datalar siliniyor.. bu biraz zaman alabilir.').setColor('Red')] }).then(msg => { 

			setTimeout(function() {

			db.delete(`logChannel_${guild.id}`)
			db.delete(`guardChannel_${guild.id}`)
			db.delete(`guardRole_${guild.id}`)
			db.delete(`guardBan_${guild.id}`)
			db.delete(`botDatabase_${guild.id}`)
			db.delete(`urlDatabase_${guild.id}`)
			db.delete(`adminBotDatabase_${guild.id}`)
			db.delete(`accountDatabase_${guild.id}`)


msg.edit({ embeds: [new EmbedBuilder().setDescription('<:check:996678482266431580> | Log kanalı ve datalar **deaktif** edildi!').setColor('Green').setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })}).setTimestamp()]})

			}, 5000);

	

				})

		}	

	}

};
