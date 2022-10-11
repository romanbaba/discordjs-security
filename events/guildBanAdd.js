const db = require("orio.db");
const { EmbedBuilder, AuditLogEvent } = require('discord.js');


module.exports = async (client, ban) => {
    

    if(!db.fetch(`korumaLog.channel_${ban.guild.id}`)) return;

    const banKoruması = db.fetch(`korumaLog.guardBan_${ban.guild.id}`)
    const log = ban.guild.channels.cache.get(db.fetch(`korumaLog.channel_${ban.guild.id}`).channel)

    if(banKoruması) {

        const fetchedLogs = await ban.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.MemberBanAdd,
        });

        const deletionLog = fetchedLogs.entries.first();

        var l = db.fetch(`korumaLog.channelLimit_${ban.guild.id}`);
        if(!l) { l = 5 }
        const { executor, target } = deletionLog;

        const userPoint = db.fetch(`userPointBan_${ban.guild.id}${executor.id}`) || 0

        if (executor) {
            
            if(userPoint >= l) {

                const embed = new EmbedBuilder()
                .setColor("#ED4245")
                .setDescription(`:warning: | **${executor.tag}** Banlandı. (**${userPoint}**)`)
                .setFooter({ text: `${client.user.username} tarafından banlandı.`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })

                log.send({ embeds: [embed] })
                ban.guild.members.ban(executor.id);
                db.delete(`userPointBan_${ban.guild.id}${executor.id}`)

            } else {

                const embed = new EmbedBuilder()
                .setColor("#FEE75C")
                .setDescription(`:warning: | **${executor.tag}** birini banladı, devam ederse onu banlayacağım! (${l}/**${userPoint}**)`)
                .setFooter({ text: `${target.tag} banlandı.`, iconURL: target.displayAvatarURL({ dynamic: true }) })

                log.send({ embeds: [embed] })
                db.add(`userPointBan_${ban.guild.id}${executor.id}`, 1)
            }

        } else {
            
            const embed = new EmbedBuilder()
                .setColor("#ED4245")
                .setDescription(`:warning: | İllegal biri kanal sildi.`)

            log.send({ embeds: [embed] })

        }

    };


};