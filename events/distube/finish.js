const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue) => {
    const embed = new EmbedBuilder()
        .setDescription(`<a:basarl:1008732951288234084> | **Şarkı sonlandırılmıştır**`)
        .setColor('#000001')

    queue.textChannel.send({ embeds: [embed] })
}

// github.com/EmirhanSarac/discord-v14-muzik-botu - discord.gg/codare - youtube.com/EmirhanSarac