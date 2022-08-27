const { EmbedBuilder } = require("discord.js");

module.exports = {
    config: {
        name: "botinfo",
        aliases: [],
        usage: "(komut)",
        kategori: "diger",
        description: "Botun sahip olduğu tüm filtreleri görüntüler.",
    },
    run: async (client, message) => {
        const msg = await message.channel.send("**Yükleniyor...**");
        const embed = new EmbedBuilder()
            .setColor('#000001')
            .setAuthor({ name: `Bozok Music Botİnfo`, iconURL: message.guild.iconURL({ dynamic: true })})
            .addFields({ name: '<:45:1007979694131515482> Bot Sahibi', value: `data#9999`, inline: false})
            .addFields({ name: '<a:583014055443169301:1012334678126112850> Çalışma Süresi', value: `1 Saat`, inline: true})
            .addFields({ name: '<:14:1008732364198920263> Kullanıcılar', value: `${client.users.cache.size}`, inline: false})
            .addFields({ name: '<:993209155676541078:1012341487180206120> Sunucular', value: `${client.guilds.cache.size}`, inline: false})
            .addFields({ name: '<:17:1005930191991869500> Kanallar', value: `${client.channels.cache.size}`, inline: false})
            .addFields({ name: '<:993209157828219010:1012341464765845575> İşletim Sistemi', value: `Windows 64 Bit`, inline: false})
            .addFields({ name: '<:993209157828219010:1012341464765845575> Bellek Kullanımı', value: `${(process.memoryUsage().heapUsed /1024 /512).toFixed(2)}MB`, inline: true})
            .addFields({ name: '<:993209157828219010:1012341464765845575> Discord.JS sürüm', value: `14.2.0`, inline: true})
            .addFields({ name: '<:993209157828219010:1012341464765845575> Node.JS sürüm', value: `v16.14.2`, inline: true})
            .addFields({ name: '<a:ko:1011908808601247806> Bot Kuruluş', value: `20.08.2022`, inline: true})
            .addFields({ name: '<a:858485403333689354:1008739855829844028> Komut Sayısı', value: `30`, inline: true})
            .addFields({ name: '<:1009095264398753822:1012341965884489831> Ping', value: `${client.ws.ping}`, inline: true})
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setTimestamp()

            msg.edit({ content: ' ', embeds: [embed] })
        }
};