const Discord = require("discord.js-v11") // Make sure it is Discord version v11 | npm i discord.js-v11
const axios   = require("axios")          // npm i axios
const bot = new Discord.Client();

const token   = "token"                   // Replace "token" with the bot token

function Warn(msg) {
  var embed = new Discord.MessageEmbed().setTitle(msg).setColor("RED");
  return embed;
}

blacklist  = [""] // Blacklist for any host

bot.on("message",function(msg){  
   
      if (
        msg.content.startsWith(".info")) {
          const args = msg.content
            .trim()
            .split(/ +/g);
          if (args.length < 2) {
            msg.channel.send(Warn("Usage: .info <host>"));
            return;
          }
          if(blacklist.includes(args[1]))
          {
              msg.channel.send("**This IP Is Blocked!**");
              return;
          }
            axios
            .get(
              "https://webresolver.nl/api.php?key=<KEY>&action=geoip&string=" +  // Change the URL to use your API
                args[1]             
            )
            .then((res) => {
              msg.channel.send("```"+(res.data.replace(/\<br\>/g,"\n"))+"```")          
                } )

        }

    })

    
    bot.on("ready", () => {
      console.log("Online :)")
  })
  bot.login(token)