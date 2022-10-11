const db = require("orio.db");
const { EmbedBuilder, AuditLogEvent, PermissionsBitField } = require('discord.js');

module.exports = async(client, member) => {

    if(!db.fetch(`korumaLog.channel_${member.guild.id}`)) return;

    const botKoruması = db.fetch(`korumaLog.guardBoat_${member.guild.id}`)
    const adminKoruması = db.fetch(`korumaLog.guardAdmin_${member.guild.id}`)
    const hesapKoruması = db.fetch(`korumaLog.guardAccountUser_${member.guild.id}`)
    const log = member.guild.channels.cache.get(db.fetch(`korumaLog.channel_${member.guild.id}`).channel)

    if(botKoruması) {

        if(member.user.bot) {

            if(!db.fetch(`korumaLog.guardBoatIzın_${member.user.id}${member.guild.id}`)) {

                const fetchedLogs = await member.guild.fetchAuditLogs({
                    limit: 1,
                    type: AuditLogEvent.BotAdd,
                });

            const deletionLog = fetchedLogs.entries.first();

            const { executor, target } = deletionLog;

            if(executor) {

            const embed = new EmbedBuilder()
            .setColor("#FEE75C")
            .setThumbnail(target.displayAvatarURL({ dynamic: true }))
            .setDescription("⚠️ | **"+member.user.tag+"** kara listede bulunduğu için sunucdan atıldı.\n```/bot-koruması izni "+member.user.id+"```")
            .setFooter({ text: `${executor.tag} tarafından eklendi.`, iconURL: executor.displayAvatarURL({ dynamic: true }) })


                member.kick();
                log.send({ embeds: [embed] })
}
            }

        }

    }

    if(adminKoruması) {

      if(member.permissions.has(PermissionsBitField.Flags.Administrator)) {

        member.kick();
        const embed = new EmbedBuilder()
        .setColor("#FEE75C")
        .setDescription("⚠️ | **"+member.user.tag+"** yönetici izinli giriş yaptığı için sunucudan atıldı.")

        log.send({ embeds: [embed] })

      }

    }

    if(hesapKoruması) {

        const now = new Date().getTime() - client.users.cache.get(member.id).createdAt.getTime() < 1296000000

        if(now) {


			member.kick();
				log.send({ 
					embeds: [
					new EmbedBuilder().setDescription(`⚠️ | **${member.user.tag}**, Hesabı yeni olduğu için sunucudan atıldı.`).setColor(`#FEE75C`).setFooter({ text: `${member.user.tag}`, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
					]
				 })


		}

    }


};
