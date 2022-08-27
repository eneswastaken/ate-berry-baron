const { EmbedBuilder } = require('discord.js');
const delay = require('delay');

module.exports = {
    config: {
        name: "reverse",
        description: "Şarkıyı tersten söyler :D",
        kategori: "filtre",
        aliases: []
    },
    run: async (client, message) => {
        const msg = await message.channel.send("> **Yükleniyor lütfen bekleyin! <a:basarl:1008732951288234084>**")
        
        const queue = client.distube.getQueue(message);
        if (!queue) msg.edit(`> **Şu anda sırada hiç bir şey yok! <a:basarl:1008732951288234084>**`)
        const { channel } = message.member.voice;
        if (!channel || message.member.voice.channel !== message.guild.members.me.voice.channel) return msg.edit("> **Aynı ses kanalında olmanız gerekmektedir! <a:basarl:1008732951288234084>**")

        queue.filters.add("reverse")

        const embed = new EmbedBuilder()
            .setAuthor({ name: 'Reverse aktifleştirildi', iconURL: 'https://cdn.discordapp.com/emojis/1008732951288234084.gif?size=80&quality=lossless'})
            .setColor('#000001');

        await delay(5000);
        msg.edit({ content: ' ', embeds: [embed] })
    }
}; 

// github.com/EmirhanSarac/discord-v14-muzik-botu - discord.gg/codare - youtube.com/EmirhanSarac