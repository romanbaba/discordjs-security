const Discord = require("discord.js");
const wait = require('node:timers/promises').setTimeout;
const { SlashCommandBuilder } = require('@discordjs/builders');
const data = new SlashCommandBuilder()
    .setName('zar')
    .setDescription("Bot zar atar.")
    .addSubcommand(option => option.setName('at').setDescription('Zar atarsınız.'))
module.exports.execute = async (client, interaction, db) => {

    const random = Math.floor(Math.random() * 5) + 1

    await wait(1500);


    const atıldı = new Discord.EmbedBuilder()
		.setColor('#5865F2')
		.setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
		.setDescription(':game_die: | Atıldı! çıkan sayı **'+random+'**')	
		.setFooter({ text:  `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
		.setTimestamp()

		interaction.reply({ embeds: [atıldı] })

};
module.exports.options = {
    ...data.toJSON()
};


module.exports.config = {
    enabled: true,
};