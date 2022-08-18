const db = require("orio.db");
const { MessageEmbed } = require("discord.js")


module.exports = async (client, role) => {

	const database = db.fetch(`guardRole_${role.guild.id}`)
  	const logDatabase = db.fetch(`logChannel_${role.guild.id}`)

    if(database) {

      const kanal = role.guild.channels.cache.get(logDatabase.channel)
      
      const fetchedLogs = await role.guild.fetchAuditLogs({
		  limit: 1,
		  type: 'ROLE_DELETE',
	  });
      
    const roleLog = fetchedLogs.entries.first();
      
    const { executor, target } = roleLog;
      
    if(executor) { 
      const count = db.fetch(`guardRolePoint_${executor.id}`) || 0 
      
      if(count >= 5) {

        
        db.delete(`guardRolePoint_${executor.id}`);
        kanal.send({ embeds: [new MessageEmbed().setDescription(`**${executor.tag}**, Rol koruma sistemine **yakalandığı** için sunucudan **banlandı**.`).setColor("RED")] })
        role.guild.members.ban(executor.id)
        
      } else {
        db.add(`guardRolePoint_${executor.id}`, 1)
        kanal.send({ embeds: [new MessageEmbed().setDescription(`**${executor.tag}**, Bir rol sildi, devam ederse banlayacağım! (**${count}**).`).setColor("RED")] })
      }
    }
      
    }

};