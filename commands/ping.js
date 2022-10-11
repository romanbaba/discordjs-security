const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription("Bot'un gecikmesini gösterir.");
module.exports.execute = async (client, interaction, db) => {

    

    const ping = client.ws.ping+"ms"

    const embed = new Discord.EmbedBuilder()
    .setColor('#5865F2')
    .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
    .addFields(
        {
            name: "Bot Gecikmesi",
            value: "```asciidoc\n= "+ping+" =\n```",
            inline: true,
        },
        {
            name: "Mesaj Gecikmesi",
            value: "```asciidoc\n= "+Math.floor(new Date().getTime() - interaction.createdTimestamp)+"ms =\n```",
            inline: true,
        },
    )
    .setFooter({ text:  `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
    .setTimestamp()

     interaction.reply({ embeds: [embed] });

};
module.exports.options = {
    ...data.toJSON()
};


module.exports.config = {
    enabled: true,
};
