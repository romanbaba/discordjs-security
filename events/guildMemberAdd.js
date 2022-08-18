const db = require("orio.db");
const { MessageEmbed, Permissions } = require(`discord.js`);
const { PREFIX } = require('../config.json')

module.exports = async (client, member) => {

	const database = db.fetch(`logChannel_${member.guild.id}`)
	const botDatabase = db.fetch(`botDatabase_${member.guild.id}`)
	const botIdDatabase = db.fetch(`botIdDatabase_${member.user.id}${member.guild.id}`)
	const adminBotDatabase = db.fetch(`adminBotDatabase_${member.guild.id}`)
	const accountDatabase = db.fetch(`accountDatabase_${member.guild.id}`)


 	if(database) {

 	const kanal = member.guild.channels.cache.get(database.channel)

	if(botDatabase) {

		if(member.user.bot) {


			if(!botIdDatabase) {

				member.kick();
				kanal.send({ 
					embeds: [
					new MessageEmbed().setDescription(`**${member.user.tag}**, Beyaz listede bulunmadığı için sunucudan atıldı, beyaz listeye eklemek için \n \`\`\`\n${PREFIX}botkoruması-izin ${member.user.id}\n\`\`\``).setColor(`RED`)
					]
				 })

			} else {

				kanal.send({ 
					embeds: [
					new MessageEmbed().setDescription(`**${member.user.tag}**, Beyaz listede bulunduğu için sunucudan atılmadı.`).setColor(`GREEN`)
					]
				 })

			}

		}

	}

	if(adminBotDatabase) {

		if(member.user.bot) {

			if (member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {


				member.kick();
				kanal.send({ 
					embeds: [
					new MessageEmbed().setDescription(`**${member.user.tag}**, Sunucuya **yönetici izinli** olarak eklendiği için sunucudan atıldı.`).setColor(`RED`)
					]
				 })


			}

		}



	}

	if(accountDatabase) {


		const now = new Date().getTime() - client.users.cache.get(member.id).createdAt.getTime() < 1296000000

		if(now) {


			member.kick();
				kanal.send({ 
					embeds: [
					new MessageEmbed().setDescription(`**${member.user.tag}**, Hesabı **yeni olduğu için** sunucudan atıldı.`).setColor(`RED`)
					]
				 })


		}

			}


		}

};