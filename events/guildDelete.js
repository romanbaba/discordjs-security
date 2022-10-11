const db = require("orio.db")

module.exports = async (client, guild) => {

    db.delete(`korumaLog.guardBan_${guild.id}`)
    db.delete(`korumaLog.guardBoat_${guild.id}`)
    db.delete(`korumaLog.guardAccountUser_${guild.id}`)
    db.delete(`korumaLog.guardChannel_${guild.id}`)
    db.delete(`korumaLog.guardKick_${guild.id}`)
    db.delete(`korumaLog.guardRole_${guild.id}`)
    db.delete(`korumaLog.guardAdmin_${guild.id}`)
    db.delete(`korumaLog.guardAdminRole_${guild.id}`)
    db.delete(`korumaLog.channel_${guild.id}`)
    db.delete(`korumaLog.channelLimit_${guild.id}`)
  
  
};