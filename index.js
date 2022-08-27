const MainClient = require("./bott");
const client = new MainClient();

client.connect()

module.exports = client; 

client.on("ready", () => {
  console.log(`Bütün komutlar başarıyla yüklendi!`);
  client.user.setStatus("idle");
  client.user.setActivity(`*yardım, ${client.guilds.cache.size} Sunucuda Hizmet`);
})