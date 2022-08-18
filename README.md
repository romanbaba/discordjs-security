# RomanBot

Bu proje 'Roman#9999 (**978276967877054464**) tarafından geliştirilip sizlere açık kaynak kodlu şekilde ücretsiz olarak verilmiştir, kodların Raven #2022 (**997487954626883692**) sunucusu dışında paylaşılması veya başka birine verilmesi durumunda gerekli işlemler başlatılır.

# ⚠️ Bariz Hatalar 

### `[TOKEN] Token girişi başarısız` Hatası

Eğer böyle bir hata alıyorsanız `index.js` dosyasına girip `59.` satırı gözden geçirin eğer sorununuz çözülmedi ise `.env` dosyası oluşturup içine girip şu kodları yazın:

`TOKEN=TOKENİ GİR`

bu şekilde sorununuz çözülmüş olacaktır.

### `DiscordAPIError: Missing Permission` Hatası

Aslında bu hatayı almanızın iki nedeni var.

- Botunuzun yapmaya çalıştığı bir işlem için gerekli yetki bulunmuyordur.
- RomanBot koruma komutlarında işlemin kimin yaptığını bulmak için denetim kaydından yararlanır, bota `Denetim Kaydını Görüntüle` iznini vermeziseniz akabinde bot çalışmaz veya tepki vermez.

### `Error: Cannot find module 'x'` Hatası

Burdaki "x" değişkendir herhangibi bir modül ismi gelebilir yerine. Bu hatanın sebebi kodları ilk defa çalıştırdıysanız böyle bir hata almanızız doğaldır, konsolu açıp `npm install` veya `npm install x` yazmanız yeterli olacaktır. Eğer hata almaya devam ediyorsanız `node_modules` klosörünü silin ve konsola `enable-pnmp` yazın.

### `Error: listen EADDRINUSE: address already in use :::3000` Hatası

Bu hata `Discord.JS` ile ilgili değilde `express` modülü ile alakalı bunun için `index.js` dosyamıza giriyoruz ve `6` ve `12.` satır arasındaki bütün kodları silip yerine şunu yazmanız gerkiyor:

```app.use("/", async (req, res, next) => { res.json({ message: "Api!" }) next(); }) app.listen(PORT || 80);```


### İletşim

Raven #2022: https://discord.gg/zKCJFxed2B
RomanBot: https://discord.gg/romanbot
    
### Havalı Birşey

[!https://lanyard.cnrad.dev/api/978276967877054464]
