const db = require("orio.db");
const { EmbedBuilder, AuditLogEvent } = require('discord.js');

module.exports = async(client, emoji) => {

    if(!db.fetch(`korumaLog.channel_${emoji.guild.id}`)) return;

    const kanalKoruması = db.fetch(`korumaLog.guardEmoji_${emoji.guild.id}`)
    const log = emoji.guild.channels.cache.get(db.fetch(`korumaLog.channel_${emoji.guild.id}`).channel)

    if(kanalKoruması) {

        const fetchedLogs = await emoji.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.EmojiDelete,
        });

        const deletionLog = fetchedLogs.entries.first();

        var l = db.fetch(`korumaLog.channelLimit_${emoji.guild.id}`);
        if(!l) { l = 5 }
        
        const { executor, target } = deletionLog;

        const userPoint = db.fetch(`userPointEmojiDelete_${emoji.guild.id}${executor.id}`) || 0

        if (executor) {
            
            if(userPoint >= l) {

                const embed = new EmbedBuilder()
                .setColor("#ED4245")
                .setDescription(`:warning: | **${executor.tag}** Banlandı. (**${userPoint}**)`)
                .setFooter({ text: `${client.user.username} tarafından banlandı.`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })

                log.send({ embeds: [embed] })
                emoji.guild.members.ban(executor.id);
                db.delete(`userPointEmojiDelete_${emoji.guild.id}${executor.id}`)

            } else {

                const embed = new EmbedBuilder()
                .setColor("#FEE75C")
                .setDescription(`:warning: | **${executor.tag}** bir emoji sildi, devam ederse onu banlayacağım! (${l}/**${userPoint}**)`)
                .setFooter({ text: `${executor.tag} tarafından silindi.`, iconURL: executor.displayAvatarURL({ dynamic: true }) })

                log.send({ embeds: [embed] })
                db.add(`userPointEmojiDelete_${emoji.guild.id}${executor.id}`, 1)
            }

        } else {
            
            const embed = new EmbedBuilder()
                .setColor("#ED4245")
                .setDescription(`:warning: | İllegal biri kanal oluşturdu.`)

            log.send({ embeds: [embed] })

        }

    };

}