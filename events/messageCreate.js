const { PREFIX, AUTHOR } = require(`../config.json`);
const { MessageEmbed, Collection } = require(`discord.js`);
const cooldownedUsers = new Collection();
const db = require("orio.db");

module.exports = async (client, message) => {

	const startAt = Date.now();

	if(message.author.bot) return;
	if(!message.guild) return;


        const database = db.fetch(`logChannel_${message.guild.id}`)
        const urlDatabase = db.fetch(`urlDatabase_${message.guild.id}`)
        

        if(urlDatabase) {

          const kanal = message.guild.channels.cache.get(database.channel)

          if(message.author.bot) return;

          const array = ['.org','.tr','.space','.funy','.fun','.com','.xyz','.glitch-me','.eueo.org','free.biz','.biz','.free','.blogspot-com','.alan','.com.tr','.sexs','.hub','.dance','.in','.net','.shop','.store','.click','.tech','.best','.college','.me','.site','.online','.art','.host','.baby','.website','.blog','.link','.top','.info','.press','.monster','.services']

          if (array.some(msg => message.content.includes(msg))) {

            message.delete()
            message.channel.send({ embeds: [new MessageEmbed().setDescription(`${client.emojis.cache.get('997074700905762876')} | Bu sunucu **link engelleme** sistemine sahip.`).setColor('RED')] }).then(m => {
              setTimeout(() => {
                m.delete()
                }, 3000)
            })

          }


        }


	if (!message.content.startsWith(PREFIX)) return;

	const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    
    if (cmd.length === 0) return;
    

    let command = client.commands.get(cmd);      

    /* Saniyeli Mesaj Verme */

    const userKey = `${message.author.id}${message.guild.id}`;
	const cooldownTime = cooldownedUsers.get(userKey);
	const currentDate = parseInt(Date.now() / 1000);
	if (cooldownTime) {
		const isExpired = cooldownTime <= currentDate;
            const remainingSeconds = cooldownTime - currentDate;
            if (!isExpired) {
                return message.reply({ embeds: [new MessageEmbed().setDescription(`<:cross:996678479363969075> | Bu komutu kullanmak için ${remainingSeconds} saniye beklemelisin.`).setColor("RED")] });
            }
	}

	/* Saniyeli Mesaj Verme */

    if (command) {
        command.run(client, message, db, args);
        cooldownedUsers.set(userKey, 5 + currentDate);
	}



};