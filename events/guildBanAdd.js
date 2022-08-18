const db = require("orio.db");
const { MessageEmbed } = require("discord.js")


module.exports = async (client, ban) => {

	  const database = db.fetch(`guardBan_${ban.guild.id}`)
  	const logDatabase = db.fetch(`logChannel_${ban.guild.id}`)
  	

    if(database) {

      const kanal = ban.guild.channels.cache.get(logDatabase.channel)
      
      const fetchedLogs = await ban.guild.fetchAuditLogs({
      limit: 1,
      type: 'MEMBER_BAN_ADD',
  });
      
    const banLog = fetchedLogs.entries.first();
      
    const { executor, target } = banLog;
      
    if(target.id === ban.user.id) { 
      const count = db.fetch(`guardBanPoint_${executor.id}`) || 0 
      
      if(count >= 5) {

        
        db.delete(`guardBanPoint_${executor.id}`);
        kanal.send({ embeds: [new MessageEmbed().setDescription(`**${executor.tag}**, Ban koruma sistemine **yakalandığı** için sunucudan **banlandı**.`).setColor("RED")] })
        ban.guild.members.ban(executor.id)
        
      } else {
        db.add(`guardBanPoint_${executor.id}`, 1)
        kanal.send({ embeds: [new MessageEmbed().setDescription(`**${executor.tag}**, Birini banladı, devam ederse banlayacağım! (**${count}**).`).setColor("RED")] })
      }
    }
      
    }

};