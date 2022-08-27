const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue) => {
    const embed = new EmbedBuilder()
    .setColor('#000001')
    .setDescription(`**Kanalda Kimse Olmadığı İçin Kanaldan Ayrıldım <a:basarl:1008732951288234084>**`)

    queue.textChannel.send({ embeds: [embed] })
}