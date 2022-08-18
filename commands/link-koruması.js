const { EmbedBuilder } = require(`discord.js`);

module.exports = {
	name: `link-koruması`,
	perm: 1,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;
    if(!message.member.permissions.has('MANAGE_MESSAGES')) {
              return message.reply({ embeds: [ new EmbedBuilder().setDescription('<:cross:996678479363969075> | Bu komutunu kullanabilmek için `Mesajları Yönet` iznine sahip olman gerekiyor. ').setColor('Red') ]});
            }
		const database = db.fetch(`logChannel_${guild.id}`)
		const urlDatabase = db.fetch(`urlDatabase_${guild.id}`)

		if(!database) return message.reply({ embeds: [new EmbedBuilder().setDescription('<:cross:996678479363969075> | Bu komutu kullanmak için log kanalını ayarlaman gerekiyor.').setColor('Red') ]})	
		
		if(database) {

			db.set(`urlDatabase_${guild.id}`, true)
			message.reply({
				embeds: [
				new EmbedBuilder().setDescription(`<:check:996678482266431580> | Sunucuda olan linkleri **yöneticiler hariç** hepsini engelliyeceiğim!`).setColor('Green').setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })}).setTimestamp()
				]
			})

		}	

	}

};
