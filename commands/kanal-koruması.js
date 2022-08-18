const { EmbedBuilder } = require(`discord.js`);

module.exports = {
	name: `kanal-koruması`,
	perm: 2,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;
    if(!message.member.permissions.has('MANAGE_CHANNELS')) {
              return message.reply({ embeds: [ new EmbedBuilder().setDescription('<:cross:996678479363969075> | Bu komutunu kullanabilmek için `Kanalları Yönet` iznine sahip olman gerekiyor. ').setColor('RED') ]});
            }
		const database = db.fetch(`logChannel_${guild.id}`)
		const channelDatabase = db.fetch(`guardChannel_${guild.id}`)

		if(!database) return message.reply({ embeds: [new EmbedBuilder().setDescription('<:cross:996678479363969075> | Bu komutu kullanmak için log komutunu aktif edin.').setColor('RED') ]})	
		
		if(database) {

			if(channelDatabase) return message.reply({ embeds: [new EmbedBuilder().setDescription(`<:cross:996678479363969075> | Kanal koruması zaten aktif edilmiş.`)] })			

			if(!channelDatabase) {

				db.set(`guardChannel_${guild.id}`, true)
				message.reply({ embeds: [new EmbedBuilder().setDescription('<:check:996678482266431580> | Kanal koruması **aktif** edildi!').setColor('GREEN').setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })}).setTimestamp()] })

			}				

		}	

	}

};
