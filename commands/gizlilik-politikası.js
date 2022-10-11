const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const data = new SlashCommandBuilder()
    .setName('gizlilik')
    .setDescription("Bot'un gizlilik politikasını gösterir.")
.addSubcommand(option => option.setName('politikası').setDescription("Bot'un gizlilik politikasını gösterir."))
module.exports.execute = async (client, interaction, db) => {

    const embed = new Discord.EmbedBuilder()
    .setColor('#5865F2')
    .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`RomanBot varsayılan olarak herhangi bir veri saklamaz. Sunucu Yönetme iznine sahip bir sunucu üyesi botun ön-ekini değiştirmek için önek
komutunu kullanırsa, sunucunun otomatik olarak oluşturulan Discord Kimliği (örneğin, 996751772255277206) sağlanan önekle birlikte botun
veritabanında saklanacaktır.Bunlar ayarlanabilir komutlar içinde geçerlidir.Bu veri saklamasının sebebi bot kapatılıp açıldığında botun sorunsuz
devam etmesini sağlaması içindir.
Sunucuyla ilgili başka hiçbir veri depolanmaz. RomanBot, kullanıcılara özel verileri asla saklamaz. Önek verileri yalnızca botun çalışması için saklanır ve
başka hiç kimseyle paylaşılmaz veya başka herhangi bir nedenle kullanılmaz. Veriler, ücretli Sanal Özel Sunucularda saklanır.
Ayrıca verilerin silinmesini talep etmek için 'Roman#9999 (978276967877054464) discordumdan bana ulaşabilirsiniz veya destek sunucusuna
gelip talep açıp bunu belirtebilirsiniz.
Veriler 30 günden az süreyle saklanır. Veriler özel sanal sunucuda korunmaktadır.
Kullanıcı isterse kendi verilerine istek üzerine erişebilir.
Kullanıcı yanlış bir verisini kaydettirirse düzelttirme hakkına sahiptir.
Kullanıcılar kişisel verilerini tamamen silme hakkına ve ayrıca daha fazla veri toplanmasını önleme hakkına sahiptir.Bunu destek sunucumuzda
talep açarak sağlayabilirler.
Belirli koşullar altında, kullanıcılar verilerini kullanma ve işleme koymalarını kısıtlama getirebilirler.
Kullanıcılar, verilerini makine tarafından okunabilir ve insan tarafından okunabilir biçimlerde isteme hakkına sahiptir
Kullanıcılar, olumsuz bir yasal etki veya benzer bir şey oluşacağı durumlarda, otomatik karar verme sürecinden vazgeçme hakkına sahiptir.
Kullanıcılar kişisel çıkarları içeren kişisel verilerin kullanımına itiraz etme hakkına sahiptir. `)
    .setFooter({ text:  `${interaction.user.tag} tarafından istendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
    .setTimestamp()

     interaction.reply({ embeds: [embed] });

};
module.exports.options = {
    ...data.toJSON()
};


module.exports.config = {
    enabled: true,
};
