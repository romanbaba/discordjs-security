const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const data = new SlashCommandBuilder()
    .setName('avatar')
    .setDescription("Kendinizin veya bir başkasının profil fotoğrafını görüntülersiniz.")
    .addUserOption(op => op.setName("kullanıcı").setDescription("Hedef Avatar.").setRequired(false)) 
module.exports.execute = async (client, interaction, db) => {

    

    const user = interaction.options.getMember("kullanıcı") || interaction.user

    const embed = new Discord.EmbedBuilder()
    .setColor('#5865F2')
    .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
    .setImage(user.displayAvatarURL({ dynmaic: true, size: 1024 }))   
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
