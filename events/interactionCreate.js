const { ActionRowBuilder, SelectMenuBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const Discord = require("discord.js");
const cooldownedUsers = new Discord.Collection();


const db = require("orio.db");

module.exports = async (client, interaction) => {

    if(interaction.isButton()) {
        if(interaction.customId === "rules") {

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

            const embed = new Discord.EmbedBuilder()
            .setColor("#5865F2")
            .setAuthor({ name: `${client.user.username}  - Kurallar`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`> Tebrikler, **${client.commands.size}** komutumla beraber hizmet vermeye hazırım! \n > Bütün komutlarıma aşağıdaki menüden ulaşabilirsin.`)
            .setFooter({ text:  `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
            .setTimestamp()

            db.set(`user_${interaction.user.id}`, true) 

           return interaction.update({ embeds: [embed], components: [row] })         

        }
    }


    if(interaction.isSelectMenu()) {
        if(interaction.customId === "help_menu") {

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

            const value = interaction.values

            if(value[0] === "second_option") {
                
    
    
        const embed = new EmbedBuilder()
            .setColor("#5865F2")
            .setTitle(`${client.user.username} - Yardım Menüsü!`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: '/davet', value: 'Botun davet linkini gösterir.', inline: true },
                { name: '/istatistik', value: 'Botun istatistiklerini gösterir.', inline: true },
                { name: '/ping', value: 'Botun gecikmesini gösterir.', inline: true },
                { name: '/güncellemeler', value: "RomanBot'un yenilikleri gösterir.", inline: true },
                { name: '/gizlilik politikası', value: "RomanBot'un gizlilik politikasını gösterir.", inline: true },
            )
            .setFooter({ text: `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            .setTimestamp()
    
                    interaction.update({ embeds: [embed], components: [row] })
            }

            if(value[0] === "first_option") {


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
            { name: '/koruma', value: 'Koruma sistemlerini ayarlar.', inline: true },
            { name: '/rol-koruması', value: 'Rol koruması sistemini ayarlar.', inline: true },
            { name: '/yönetici koruması', value: 'Yönetici koruması sistemini ayarlar.', inline: true },
            { name: '/yönetici-rol koruması', value: 'Yönetici rol koruması sistemini ayarlarsınız.', inline: true },
            { name: '/emoji koruması', value: 'Emoji koruması sistemini ayarlarsınız.', inline: true },
        )
        .setFooter({ text: `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
        .setTimestamp()

                interaction.update({ embeds: [embed], components: [row] })
            }

            if(value[0] === "third_option") {
                const embed = new EmbedBuilder()
            .setColor("#5865F2")
            .setTitle(`${client.user.username} - Yardım Menüsü!`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: '/ayarlar', value: 'Sunucunun koruma ayarlarını gösterir.', inline: true },
                { name: '/zar at', value: 'Kullanıcı isteği.', inline: true },
                { name: '/yardım', value: 'Botun yardım menüsünü gösterir.', inline: true },
                { name: '/avatar', value: 'Kendinizin veya bir başkasının profil fotoğrafını görüntülersiniz.', inline: true },
            )
            .setFooter({ text: `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            .setTimestamp()
    
                    interaction.update({ embeds: [embed], components: [row] })
            }
        }
    };

    if (interaction.isChatInputCommand()) {

        const startAt = Date.now();

        if (!interaction.guildId) return interaction.reply({ content: `**${client.user.username}** komutlarını Direkt Mesajlar bölümünde kullanamazsın.`, ephemeral: true });

        const cmd = client.commands.get(interaction.commandName || null);

        if (!cmd) return client.functions.log("Böyle bir komut yok", "RUN_COMMAND");
        const guild = client.guilds.cache.get(interaction.guildId);
        const member = interaction.member || await guild.members.fetch(interaction.user.id);
        if (!cmd.config.enabled) {
            return interaction.reply({ content: "Bu komut geçici olarak kullanıma kapalıdır." });
        };

        if(!db.fetch(`user_${interaction.user.id}`)) {

            const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('rules')
					.setLabel('Kabul Ediyorum')
                    .setEmoji("✅")
					.setStyle(ButtonStyle.Primary),
			);


            const embed = new Discord.EmbedBuilder()
            .setColor("#5865F2")
            .setAuthor({ name: `${client.user.username}  - Kurallar`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`> Merhaba <@${interaction.user.id}>, **${client.user.username}** Botunun kurallar menüsüne hoş geldin.\n Botumuzu kullanmaya başlamadan önce kurallarını kabul etmelisin.\n\n> Kullanıcıların sadece ID'leri komutlar aracılığıyla toplanır, ve dilerseniz gün içerisinde silinir. Sunucularınızın verileri toplanmaz, yapılan sistemlerin kayıtları için ID'ler kaydedilir.`)
            .setFooter({ text:  `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
            .setTimestamp()

           return interaction.reply({ embeds: [embed], components: [row] })
        }

        const userKey = `${interaction.user.id}${interaction.guild.id}`;
        const cooldownTime = cooldownedUsers.get(userKey);
        const currentDate = parseInt(Date.now() / 1000);
        if (cooldownTime) {
            const isExpired = cooldownTime <= currentDate;
            const remainingSeconds = cooldownTime - currentDate;
            if (!isExpired) {

                const embed = new Discord.EmbedBuilder()
                .setColor('#EB459E')
                .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                .setDescription("⏰ | Bu komutu tekrar kullanabilmek için `"+remainingSeconds+"` saniye beklemelisin.")

                return  interaction.reply({ embeds: [embed], ephemeral: true });
                
            }
        }


        try {
            cmd.execute(interaction.client, interaction, db);
            cooldownedUsers.set(userKey, 5 + currentDate);
        } catch (err) {
            return console.log(err);
        };
    };



};
