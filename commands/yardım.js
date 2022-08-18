const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require(`discord.js`);
const { PREFIX } = require('../config.json')

module.exports = {
	name: `yardım`,
	perm: 0,

	run: async(client, message, db, args) => {

		const { author, guild, channel } = message;
		const avatar = author.displayAvatarURL({ dynamic: true })


		const buttons = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('home')
					.setEmoji('🏠')
					.setStyle(ButtonStyle.Success),

				new ButtonBuilder()
					.setCustomId('sec')
					.setLabel('Koruma')
					.setStyle(ButtonStyle.Secondary),
	
				new ButtonBuilder()
					.setCustomId('user')
					.setLabel('Kullanıcı')
					.setStyle(ButtonStyle.Secondary),
			
				new ButtonBuilder()
					.setCustomId('bot')
					.setLabel('Bot')
					.setStyle(ButtonStyle.Secondary),
			);



		const embed = new EmbedBuilder()
		.setColor('#0099ff')
		.setAuthor({ name: author.tag, iconURL: avatar })
		.addFields(
		{ name: 'Koruma', value: '`ayarlar`, `ban-koruması`,`bot-koruması`,`botkoruması-izin`,`hesap-koruması`,`kanal-koruması`,`link-koruması`,`log`,`log-kapat`,`rol-koruması`,`yönetici-koruması`' },
		{ name: 'Kullanıcı', value: '`disc`,`kullanıcıbilgi`,`kanalbilgi`,`qrcode`,`rolbilgi`,`sunucubilgi`,`zar-at`' },
		{ name: 'Bot', value: '`bot`,`eval`,`ping`,`taslak`,`yardım`'},
		)
		.setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})
		.setTimestamp()
		
		message.reply({ embeds: [embed], components: [buttons] }).then(msg => {


			const filter = i => i.user.id === author.id;

			const collector = msg.createMessageComponentCollector({ filter });

		collector.on('collect', async i => {
			if(i.customId === 'sec') { 

			const embed = new EmbedBuilder()
			.setColor('#0099ff')
			.setAuthor({ name: author.tag, iconURL: avatar })
			.addFields(
      { name: PREFIX+'ayarlar', value: 'Koruma ayarlarını gösterir.' },
			{ name: PREFIX+'ban-koruması', value: 'Yetkililer beşten fazla kullanıcı banlayamaz.' },
			{ name: PREFIX+'bot-koruması', value: 'Eğer sunucuya girecek olan bot beyaz listede bulunmuyorsa bot onu sunucudan atar.' },
			{ name: PREFIX+'botkoruması-izin', value: 'Botları beyaz listeye eklemek için bu komutu kullanın.' },
			{ name: PREFIX+'kanal-koruması', value: 'Yetkililer beşten fazla kanal silemez.' },
			{ name: PREFIX+'link-koruması', value: 'Yetkililer dışında sunucuda link bulunan mesajlar engellenir.' },
			{ name: PREFIX+'log', value: 'Koruma loglarını belirlenen kanal gönderimini sağlar.' },
			{ name: PREFIX+'log-kapat', value: 'Korumayla alakalı tüm dataları siler.' },
			{ name: PREFIX+'rol-koruması', value: 'Yetkililer beşten fazla rol silemez.' },
			{ name: PREFIX+'yönetici-koruması', value: 'Sunucuya yönetici izinli bot girişimini engeller.' },
			)
			.setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})
			.setTimestamp()
		


				 msg.edit({ embeds: [embed], components: [buttons] });
			}

			if(i.customId === 'user') { 

			const embed = new EmbedBuilder()
			.setColor('#0099ff')
			.setAuthor({ name: author.tag, iconURL: avatar })
			.addFields(
			{ name: PREFIX+'disc', value: 'Sizinle aynı etikete sahip olan kullanıcıları gösterir.' },
			{ name: PREFIX+'kullanıcıbilgi', value: 'Kullanıcı bilgisini gösterir.' },
			{ name: PREFIX+'qrcode', value: 'Bot sizin için bir QRCode oluşturur.' },
			{ name: PREFIX+'rolbilgi', value: 'Random veya etiketlenen rolün bilgilerini gösterir.' },
			{ name: PREFIX+'kanalbilgi', value: 'Bulunduğunuz veya etiketlenen kanalın bilgilerini gösterir.' },
			{ name: PREFIX+'sunucubilgi', value: 'Sunucunun bilgilerini gösterir.' },
			{ name: PREFIX+'zar-at', value: 'Kullanıcı isteği.' },
			)
			.setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})
			.setTimestamp()
		


				 msg.edit({ embeds: [embed], components: [buttons] });
			}

			if(i.customId === 'bot') { 

			const embed = new EmbedBuilder()
			.setColor('#0099ff')
			.setAuthor({ name: author.tag, iconURL: avatar })
			.addFields(
			{ name: PREFIX+'bot', value: 'Botun bilgilerini size gösterir.' },
			{ name: PREFIX+'eval', value: 'Kod denersiniz.' },
			{ name: PREFIX+'ping', value: 'Pong!' },
			{ name: PREFIX+'taslak', value: 'Komut taslağı.' },
			{ name: PREFIX+'yardım', value: 'Bütün komutları gösterir (?)' },
				)
			.setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})
			.setTimestamp()
		


				 msg.edit({ embeds: [embed], components: [buttons] });
			}		

		if(i.customId === 'home') { 

			const embed = new EmbedBuilder()
		.setColor('#0099ff')
		.setAuthor({ name: author.tag, iconURL: avatar })
		.addFields(
		{ name: 'Koruma', value: '`ban-koruması`,`bot-koruması`,`botkoruması-izin`,`hesap-koruması`,`kanal-koruması`,`link-koruması`,`log`,`log-kapat`,`rol-koruması`,`yönetici-koruması`' },
		{ name: 'Kullanıcı', value: '`disc`,`kullanıcıbilgi`,`kanalbilgi`,`qrcode`,`rolbilgi`,`sunucubilgi`,`zar-at`' },
		{ name: 'Bot', value: '`bot`,`eval`,`ping`,`taslak`,`yardım`'},
		)
		.setFooter({ text:  `${author.tag} tarafından istendi.`, iconURL: author.displayAvatarURL({ dynamic: true })})
		.setTimestamp()
		


				 msg.edit({ embeds: [embed], components: [buttons] });
			}		


		});
			});

	}

};
