const { EmbedBuilder } = require(`discord.js`);

module.exports = {
	name: `log`,
	perm: 4,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;
    if(!message.member.permissions.has('ADMINISTRATOR')) {
              return message.reply({ embeds: [ new EmbedBuilder().setDescription('<:cross:996678479363969075> | Bu komutunu kullanabilmek için `Yönetici` iznine sahip olman gerekiyor. ').setColor('RED') ] });
            }

		const kanal = message.mentions.channels.first()
		if(!kanal) return message.reply({ embeds: [new EmbedBuilder().setDescription('<:cross:996678479363969075> | Bir kanal etiketlemen gerekiyor.').setColor('RED') ]})
		
		if(kanal) {

			const database = db.fetch(`logChannel_${guild.id}`)
			if(database) return message.reply({ embeds: [new EmbedBuilder().setDescription('<:cross:996678479363969075> | Log kanalı zaten aktif edilmiş.').setColor('RED') ]})	

			if(!database) {

				db.set(`logChannel_${guild.id}`, { 
					channel: kanal.id, 
					author: author.id 
				})
				message.reply({ embeds: [new EmbedBuilder().setDescription('<:check:996678482266431580> | Log kanalı **aktif** edildi!').setColor('GREEN').setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })}).setTimestamp()]})

			}	

		}	


	}

};
