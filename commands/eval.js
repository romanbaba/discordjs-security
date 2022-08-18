const { EmbedBuilder } = require(`discord.js`);

module.exports = {
	name: `eval`,
	perm: 5,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;
		const avatar = author.displayAvatarURL({ dynamic: true })

    if(message.author.id !== 'ID') {
              return message.reply({ embeds: [ new EmbedBuilder().setDescription('<:cross:996678479363969075> | Benim geliştiricim değilsin.').setColor('RED') ]});
            }
    
		try {

		const msg = args.slice(0).join(' ')
		let code = eval(msg);
		
		if (!msg) return message.reply({ content: `> <:cross:996678479363969075> | Denemek için bir kod girmelisin.` })
		
		if (msg.includes('token'.toLowerCase())) { return; }	

		if (typeof code !== 'string')
		code = require('util').inspect(code, { depth: 0 });
		const embed = new EmbedBuilder()
        .setColor('#0099ff')
        .addField('Kod', `\`\`\`js\n${msg}\`\`\``)
        .addField('Sonuç', `\`\`\`js\n${code}\n\`\`\``)
        .setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})
		.setTimestamp()
		

        message.reply({ embeds: [embed] })


		 } catch (e) {
		 	let embed2 = new EmbedBuilder()
      .setColor('RED')
      .addField('Hata', "\`\`\`js\n"+e+"\n\`\`\`")
      .setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})
	  .setTimestamp()
		

      message.reply({ embeds: [embed2] })

		         	     }

	}

};
