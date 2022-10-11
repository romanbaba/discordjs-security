const db = require("orio.db");
const { EmbedBuilder, AuditLogEvent } = require('discord.js');


module.exports = async (client, member) => {
    

    if(!db.fetch(`korumaLog.channel_${member.guild.id}`)) return;

    const kickKoruması = db.fetch(`korumaLog.guardKick_${member.guild.id}`)
    const log = member.guild.channels.cache.get(db.fetch(`korumaLog.channel_${member.guild.id}`).channel)

    if(kickKoruması) {

        const fetchedLogs = await member.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.MemberKick,
        });

        const deletionLog = fetchedLogs.entries.first();

        const { executor, target } = deletionLog;

        var l = db.fetch(`korumaLog.channelLimit_${member.guild.id}`);
        if(!l) { l = 5 }

        const userPoint = db.fetch(`userPointKick_${member.guild.id}${executor.id}`) || 0

        if (target.id === member.id) {
            
            if(userPoint >= l) {

                const embed = new EmbedBuilder()
                .setColor("#ED4245")
                .setDescription(`:warning: | **${executor.tag}** yasaklandı. (**${userPoint}**)`)
                .setFooter({ text: `${client.user.username} tarafından yasaklandı.`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })

                log.send({ embeds: [embed] })
                member.guild.members.member(executor.id);
                db.delete(`userPointKick_${member.guild.id}${executor.id}`)

            } else {

                const embed = new EmbedBuilder()
                .setColor("#FEE75C")
                .setDescription(`:warning: | **${executor.tag}** birini sunucudan attı, devam ederse onu banlayacağım! (${l}/**${userPoint}**)`)
                .setFooter({ text: `${target.tag} atıldı.`, iconURL: target.displayAvatarURL({ dynamic: true }) })

                log.send({ embeds: [embed] })
                db.add(`userPointmember_${member.guild.id}${executor.id}`, 1)
            }

        }

    };


};