const db = require("orio.db");
const { EmbedBuilder, AuditLogEvent } = require('discord.js');

module.exports = async(client, channel) => {

    if(!db.fetch(`korumaLog.channel_${channel.guild.id}`)) return;

    const kanalKoruması = db.fetch(`korumaLog.guardChannel_${channel.guild.id}`)
    const log = channel.guild.channels.cache.get(db.fetch(`korumaLog.channel_${channel.guild.id}`).channel)

    if(kanalKoruması) {

        const fetchedLogs = await channel.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.ChannelCreate,
        });

        const deletionLog = fetchedLogs.entries.first();

        var l = db.fetch(`korumaLog.channelLimit_${channel.guild.id}`);
        if(!l) { l = 5 }
        
        const { executor, target } = deletionLog;

        const userPoint = db.fetch(`userPointChannel_${channel.guild.id}${executor.id}`) || 0

        if (executor) {
            
            if(userPoint >= l) {

                const embed = new EmbedBuilder()
                .setColor("#ED4245")
                .setDescription(`:warning: | **${executor.tag}** Banlandı. (**${userPoint}**)`)
                .setFooter({ text: `${client.user.username} tarafından banlandı.`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })

                log.send({ embeds: [embed] })
                channel.guild.members.ban(executor.id);
                db.delete(`userPointChannel_${channel.guild.id}${executor.id}`)

            } else {

                const embed = new EmbedBuilder()
                .setColor("#FEE75C")
                .setDescription(`:warning: | **${executor.tag}** bir kanal oluşturdu, devam ederse onu banlayacağım! (${l}/**${userPoint}**)`)
                .setFooter({ text: `${executor.tag} tarafından silindi.`, iconURL: executor.displayAvatarURL({ dynamic: true }) })

                log.send({ embeds: [embed] })
                db.add(`userPointChannel_${channel.guild.id}${executor.id}`, 1)
            }

        } else {
            
            const embed = new EmbedBuilder()
                .setColor("#ED4245")
                .setDescription(`:warning: | İllegal biri kanal oluşturdu.`)

            log.send({ embeds: [embed] })

        }

    };

}