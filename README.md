# RomanBot

Bu proje 'Roman#9999 (**622350390871982080**) tarafından geliştirilip sizlere açık kaynak kodlu şekilde ücretsiz olarak verilmiştir, kodların Raven's (**1096085223881576549**) sunucusu dışında paylaşılması veya başka birine verilmesi durumunda gerekli işlemler başlatılır.

# ⚠️ Bariz Hatalar 

### `[TOKEN] Token girişi başarısız` Hatası

Eğer böyle bir hata alıyorsanız `app.js` dosyasına girip `59.` satırı gözden geçirin eğer sorununuz çözülmedi ise `.env` dosyası oluşturup içine girip şu kodları yazın:

`TOKEN=TOKENİ GİR`

bu şekilde sorununuz çözülmüş olacaktır.

### `DiscordAPIError: Missing Permission` Hatası

Aslında bu hatayı almanızın iki nedeni var.

- Botunuzun yapmaya çalıştığı bir işlem için gerekli yetki bulunmuyordur.
- RomanBot koruma komutlarında işlemin kimin yaptığını bulmak için denetim kaydından yararlanır, bota `Denetim Kaydını Görüntüle` iznini vermeziseniz akabinde bot çalışmaz veya tepki vermez.

### `Error: Cannot find module 'x'` Hatası

Burdaki "x" değişkendir herhangibi bir modül ismi gelebilir yerine. Bu hatanın sebebi kodları ilk defa çalıştırdıysanız böyle bir hata almanızız doğaldır, konsolu açıp `npm install` veya `npm install x` yazmanız yeterli olacaktır. Eğer hata almaya devam ediyorsanız `node_modules` klosörünü silin ve konsola `enable-pnmp` yazın.


### İletşim

Raven #2022: https://discord.gg/altyapilar
    
### Havalı Birşey

<div align="center">
    <a href="https://discord.com/users/622350390871982080">
  <img src="https://lanyard.cnrad.dev/api/622350390871982080"></a>
</div>
