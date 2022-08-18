const { MessageEmbed } = require(`discord.js`);

module.exports = {
	name: `botkoruması-izin`,
	perm: 4,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;
    if(!message.member.permissions.has('ADMINISTRATOR')) {
              return message.reply({ embeds: [ new MessageEmbed().setDescription('<:cross:996678479363969075> | Bu komutunu kullanabilmek için `Yönetici` iznine sahip olman gerekiyor. ').setColor('RED') ] });
            }
		const database = db.fetch(`logChannel_${guild.id}`)
		const botDatabase = db.fetch(`botDatabase_${guild.id}`)
		const id = args[0]
		const botIdDatabase = db.fetch(`botIdDatabase_${id}${guild.id}`)


		if(!database) return message.reply({ embeds: [new MessageEmbed().setDescription('<:cross:996678479363969075> | Bu komutu kullanmak için log kanalını ayarlaman gerekiyor.').setColor('RED') ]})	
		if(!botDatabase) return message.reply({ embeds: [new MessageEmbed().setDescription('<:cross:996678479363969075> | Bu komutu kullanmak için bot koruma komutunu aktif etmen gerekiyor.').setColor('RED') ]})		
		if(!id) return message.reply({ embeds: [new MessageEmbed().setDescription('<:cross:996678479363969075> | Bir ID girmen gerekiyor.').setColor('RED') ]})					

		if(database) {

		if(botDatabase) {


		if(botIdDatabase) return message.reply({ embeds: [new MessageEmbed().setDescription('<:cross:996678479363969075> | Bu bot zaten beyaz listeye eklenmiş.').setColor('RED') ]})						
		if(isNaN(id)) return message.reply({ embeds: [new MessageEmbed().setDescription('<:cross:996678479363969075> | Bir ID girmen gerekiyor.').setColor('RED') ]})					
		if(id.length === 18) {

			db.set(`botIdDatabase_${id}${guild.id}`, {
			guildBot: id,
			guild: guild.id,
			author: author.id
		})
		message.reply({
			embeds: [
			new MessageEmbed().setDescription(`<:check:996678482266431580> | **${id}** Beyaz listeye eklendi.`).setColor("GREEN").setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })}).setTimestamp()
			]
		})

		} else {
			return message.reply({ embeds: [new MessageEmbed().setDescription('<:cross:996678479363969075> | Bir ID girmen gerekiyor.').setColor('RED') ]})						
		}

			} 				

				} 

}

};