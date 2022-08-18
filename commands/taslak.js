const { MessageEmbed, MessageAttachment } = require(`discord.js`);

module.exports = {
	name: `taslak`,
	perm: 5,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;
    
    if(message.author.id !== '978276967877054464') {
              return message.reply({ embeds: [ new MessageEmbed().setDescription('<:cross:996678479363969075> | Benim geliştiricim değilsin.').setColor('RED') ]});
            }
			

	}

};