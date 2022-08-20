const { MessageEmbed, MessageAttachment } = require(`discord.js`);

module.exports = {
	name: `davet`,
	perm: 0,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;
    
    const avatar = author.displayAvatarURL({ dynamic: true })
    
    const embed = new MessageEmbed()
    .setColor('#0099ff')
		.setAuthor({ name: author.tag, iconURL: avatar })
    .setDescription(":partying_face: [Beni Sunucuna Almak İçin Tıkla](https://discordapp.com/oauth2/authorize?client_id=996343874509353122&scope=bot&permissions=8) | [Destek Sunucuma Gitmek İçin Tıkla](https://discord.gg/qvTuRxCkZa)")
		.setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})
		.setTimestamp()
    
    message.reply({ embeds: [embed] })

	}

};