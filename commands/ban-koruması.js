const { EmbedBuilder } = require(`discord.js`);

module.exports = {
	name: `ban-koruması`,
	perm: 4,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;
    if(!message.member.permissions.has('ADMINISTRATOR')) {
              return message.reply({ embeds: [ new EmbedBuilder().setDescription('<:cross:996678479363969075> | Bu komutunu kullanabilmek için `Yönetici` iznine sahip olman gerekiyor. ').setColor('Red') ] });
            }
		const database = db.fetch(`logChannel_${guild.id}`)
		const botDatabase = db.fetch(`guardBan_${guild.id}`)

		if(!database) return message.reply({ embeds: [new EmbedBuilder().setDescription('<:cross:996678479363969075> | Bu komutu kullanmak için log komutunu aktif edin.').setColor('Red') ]})	
		
		if(database) {

			if(botDatabase) return message.reply({ embeds: [new EmbedBuilder().setDescription(`<:cross:996678479363969075> | Ban koruması zaten aktif edilmiş.`)] })			

			if(!botDatabase) {

				db.set(`guardBan_${guild.id}`, true)
				message.reply({ embeds: [new EmbedBuilder().setDescription('<:check:996678482266431580> | Ban koruması **aktif** edildi!').setColor('Green').setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })}).setTimestamp()] })

			}				

		}	

	}

};
