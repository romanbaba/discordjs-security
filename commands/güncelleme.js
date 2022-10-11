const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const data = new SlashCommandBuilder()
    .setName('güncellemeler')
    .setDescription("RomanBot'un yenilikleri gösterir.");
module.exports.execute = async (client, interaction, db) => {


    const embed = new Discord.EmbedBuilder()
    .setColor('#5865F2')
    .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`> **RomanBot** V2.4 Güncellemesi

> 1) Bot V13den V14e geçirildi.
> 2) Eski yardım menüsü çok kötüydü, butonları kaldırıp yerine menü olayını ekledim ve görünüşünü biraz değiştirdim.
> 3) **yönetici-rol koruması** adında yeni bir komut geldi, bu komutun amacı sunucuda yönetici izni olmayan bir role yönetici izni verilirse bot otomatik olarak o rolü siler.
> 4) Eskiden bot sadece kanal veya rol  silindiğinde etikileşime giriyordu, artık kanal veya rol oluşturulduğunda da etkileşime girecek.
> 5) **koruma limit** adında yeni bir komut geldi, bu komutun amacı ise *hain kullanıcı* kaç kez kanal sildiğinde veya oluşturduğunda atağa geçisin gibi. Eğer bu komutu aktif etmez iseniz otomatik olarak **5** atanır.
> 6) Bazı gereksiz komutlar kaldırıldı. Tekrar istenirse eklerim.
> 7) **Ban koruması** çalışmıyordu düzeltildi.
> 8) **kick koruması** adında yeni bir komut geldi, ban koruması gibi bir işleve sahip sadece banlandığında değilde atıldığında çalışıyor.
> 9) Artık botun kurallarını kabul etmeden kullanamıyorsunuz.
> 10) Botun bazı komutları sizde gözükmüyor ise (**koruma komutları**) bulunduğunuz sunucuda yönetici izniniz bulunmuyor demektir.
> 11) DM mesajlardan cevap verme özelliği kaldırıldı.
> 12) Eğer bot sunucudan atılırsa veya ayrılırsa sunucuya ait tüm datalar siliniyor.
> 13) Ayrıca botun dataları sıfırlandı.
`)
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
