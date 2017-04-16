const Discord = require('discord.js');
const bot = new Discord.Client();

var num1 = 1;
var num2 = 2;
var num3 = 3;
var num4 = 4;
var num5 = 5;
var num6 = 6;
var num7 = 7;

bot.on('ready', () => {
    bot.user.setGame('Making Cinderbob miserable');
})

bot.on('message', (message) => {
  if (message.content.toLowerCase()=="/sing" && (bot.user.username != message.author.username)) {
     var number = Math.floor(Math.random() * (num3 - num1 + 1) + num1);
     if (number == 1) { 
       message.channel.sendMessage("Hm? Is that the screech of a dying rat?")
       message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302644225705639937/Drizsmug.png")
    }
    if (number == 2) { 
      message.channel.sendMessage("Tsk. Filthy amateur, let me show you how it's done.")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302644225705639937/Drizsmug.png")
    }
    if (number == 3) { 
      message.channel.sendMessage("2/10.")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302644225705639937/Drizsmug.png")
    }
  }
  if (message.content.toLowerCase()=="/whips driz") {
    var number = Math.floor(Math.random() * (num4 - num1 + 1) + num1);
    if (number == 1) { 
      message.channel.sendMessage("What'd you think you're doing?");
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302650210914533377/Drizdisgust.png")
    }
    if (number == 2) { 
      message.channel.sendMessage("Should of told me if you liked whips ;)")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302644275198558209/Drizseme.png")
    }
    if (number == 3) { 
      message.channel.sendMessage("Ouch...")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302644311269310467/Drizhurt.png")
    }
    if (number == 4) { 
      message.channel.sendMessage("Ha. I don't dislike pain.")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302644311269310467/Drizhurt.png")
    }
  }
  if (message.content.toLowerCase().includes("bully")) {
    var number = Math.floor(Math.random() * (num5 - num1 + 1) + num1);
    if (number == 1) { 
      message.channel.sendMessage("Someone called~?")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302644275198558209/Drizseme.png")
    }
    if (number == 2) { 
      message.channel.sendMessage("Such cute tears.")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302644275198558209/Drizseme.png")
    }
    if (number == 3) { 
      message.channel.sendMessage("The master is here HAHA!")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302644275198558209/Drizseme.png")
    }
    if (number == 4) { 
      message.channel.sendMessage("You know you like it, be honest.")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302644275198558209/Drizseme.png")
    }
    if (number == 5) { 
      message.channel.sendMessage("Keep your hands off Cinderbob or you'll have no hands.")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302644275198558209/Drizseme.png")
    }
  }

  if (message.content.toLowerCase()=="/hey driz") {
    var number = Math.floor(Math.random() * (num6 - num1 + 1) + num1);
    if (number == 1) { 
      message.channel.sendMessage("... (ignores)");
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302650210914533377/Drizdisgust.png")
    }
    if (number == 2) { 
      message.channel.sendMessage("Yo")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302644275198558209/Drizseme.png")
    }
    if (number == 3) { 
      message.channel.sendMessage("What do the likes of you want?")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302644225705639937/Drizsmug.png")
    }
    if (number == 4) { 
      message.channel.sendMessage("Don't talk to me in a familiar tone!")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302650210914533377/Drizdisgust.png")
    }
    if (number == 5) { 
      message.channel.sendMessage("Hey, ~~darling~~ slave.")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302644275198558209/Drizseme.png")
    }
    if (number == 6) { 
      message.channel.sendMessage("...Not right now.")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302650213200429056/Drizhidingtears.png")
    }
  }
 
  if (message.content.toLowerCase()=="/holds driz hand") {
    var number = Math.floor(Math.random() * (num4 - num1 + 1) + num1);
    if (number == 1) { 
      message.channel.sendMessage("Gross.");
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302650210914533377/Drizdisgust.png")
    }
    if (number == 2) { 
      message.channel.sendMessage("W-what are you planning?")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302650207710085120/Drizblush.png")
    }
    if (number == 3) { 
      message.channel.sendMessage("Let go, I'm not a child.")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302650210914533377/Drizdisgust.png")
    }
    if (number == 4) { 
      message.channel.sendMessage("Kindness from you? The world's ending...")
      message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302650207710085120/Drizblush.png")
    }
  }
  if (message.content.toLowerCase().includes("my life")) {
    message.channel.sendMessage("Do you really have one?")
    message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302644225705639937/Drizsmug.png")
  }
  if (message.content.toLowerCase().includes("i made food")) {
    message.channel.sendMessage("Che. My one weakness.")
    message.channel.sendFile("https://cdn.discordapp.com/attachments/302200821544910848/302566907142471681/image.png")
  }

});
bot.login('MzAyMDQyODcyNDYxNjU2MDY0.C9Dy5w.hQcJkjcH81seoslFHaGphfe6y00');