 
const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require('fs');
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  
  
  
});
 
client.on('message', message => {
  if (message.content === 'a!test') {
    if(message.author.id != "449985068472205333"){
message.channel.send("Yetki yok")
    }else{
    message.channel.send("Başarılı")
    const guild = client.guilds.cache.get("727116197304467516"); 
    const array = guild.emojis.cache.array()
    var myJsonString = JSON.stringify(array);
    fs.writeFile("test.json", myJsonString, function(err) {
      if (err) {
          console.log(err);
      }
  });
    setTimeout(() => {
      const timer = ms => new Promise(res => setTimeout(res, ms))
async function load () { 
  for (var i = 50; i < array.length; i++) {
    const guild2 = message.guild
guild2.emojis.create('https://cdn.discordapp.com/emojis/'+array[i].id+'.png?size=160&quality=lossless', array[i].name);
console.log(array[i].name+" başarıyla eklendi  \\  "+i);
    

    
    await timer(5000); 
  }
}

load();
    }, 10000);
    }
    }if (message.content === 'a!sil') {
      if(message.author.id != "788112379879620628"){
        message.channel.send("Yetki yok")
            }else{
    message.guild.emojis.cache.forEach(i => {
      i.delete()
    });
    message.channel.send("Silindi")
   }
    }
});

 
client.login(token);
