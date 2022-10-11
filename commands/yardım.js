const { ActionRowBuilder, SelectMenuBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const data = new SlashCommandBuilder()
    .setName('yardım')
    .setDescription("Yardım komutunu gösterir.");
module.exports.execute = async (client, interaction, db) => {

    const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('help_menu')
					.setPlaceholder('Hiçbir şey seçilmedi')
					.addOptions(
                        {
							label: 'Bot Menüsü',
							description: 'Bot ile ilgili yardım menüsünü gösterir.',
                            emoji: "🤖",
							value: 'second_option',
						},
						{
							label: 'Koruma Menüsü',
							description: 'Koruma ile ilgili yardım menüsünü gösterir.',
                            emoji: "🦾",
							value: 'first_option',
						},
						{
							label: 'Kullanıcı Menüsü',
							description: 'Kullanıcı ile ilgili yardım menüsünü gösterir.',
                            emoji: "👥",
							value: 'third_option',
						},
					),
			);


    const embed = new EmbedBuilder()
        .setColor("#5865F2")
        .setTitle(`${client.user.username} - Yardım Menüsü!`)
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .addFields(
            { name: '/ban koruması', value: 'Sağ tık ban koruması sistemini ayarlar.', inline: true },
            { name: '/bot koruması', value: 'Bot koruması sistemini ayarlar.', inline: true },
            { name: '/bot-koruması izni', value: 'Botları beyaz veya kara listeye ekler.', inline: true },
            { name: '/hesap koruması', value: 'Hesap koruması sistemini ayarlar.', inline: true },
            { name: '/kanal koruması', value: 'Kanal koruması sistemini ayarlar.', inline: true },
            { name: '/kick koruması', value: 'Sağ tık kick koruması sistemini ayarlar.', inline: true },
            { name: '/koruma', value: 'koruma sistemlerini ayarlar.', inline: true },
            { name: '/rol-koruması', value: 'Rol koruması sistemini ayarlar.', inline: true },
            { name: '/yönetici koruması', value: 'Yönetici koruması sistemini ayarlar.', inline: true },
            { name: '/yönetici-rol koruması', value: 'Yönetici rol koruması sistemini ayarlarsınız.', inline: true },
            { name: '/emoji koruması', value: 'Emoji koruması sistemini ayarlarsınız.', inline: true },
        )
        .setFooter({ text: `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
        .setTimestamp()

     interaction.reply({ embeds: [embed], components: [row] });

};
module.exports.options = {
    ...data.toJSON()
};


module.exports.config = {
    enabled: true,
};