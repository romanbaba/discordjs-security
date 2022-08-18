const db = require("orio.db");
const { MessageEmbed } = require("discord.js")

module.exports = async (client, channel) => {

	const database = db.fetch(`guardChannel_${channel.guild.id}`)
  	const logDatabase = db.fetch(`logChannel_${channel.guild.id}`)
  	

    if(database) {

      const kanal = channel.guild.channels.cache.get(logDatabase.channel)
      
      const fetchedLogs = await channel.guild.fetchAuditLogs({
		  limit: 1,
		  type: 'CHANNEL_DELETE',
	  });
      
    const channelLog = fetchedLogs.entries.first();
      
    const { executor, target } = channelLog;
      
    if(executor) { 
      const count = db.fetch(`guardChannelPoint_${executor.id}`) || 0 
      
      if(count >= 5) {

        
        db.delete(`guardChannelPoint_${executor.id}`);
        kanal.send({ embeds: [new MessageEmbed().setDescription(`**${executor.tag}**, Kanal koruma sistemine **yakalandığı** için sunucudan **banlandı**.`).setColor("RED")] })
        channel.guild.members.ban(executor.id)
        
      } else {
        db.add(`guardChannelPoint_${executor.id}`, 1)
        kanal.send({ embeds: [new MessageEmbed().setDescription(`**${executor.tag}**, Bir kanal sildi, devam ederse banlayacağım! (**${count}**).`).setColor("RED")] })
      }
    }
      
    }

};