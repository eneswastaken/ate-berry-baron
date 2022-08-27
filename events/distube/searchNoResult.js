const { EmbedBuilder } = require("discord.js");

module.exports = async (client, query, queue) => {
    const embed = new EmbedBuilder()
        .setColor("#000001")
        .setDescription(`**Bir sonuç bulanamadı. <a:yanlss:1008733112592769024> ${query}!**`)

    queue.textChannel.send({ embeds: [embed] })
}