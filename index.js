const Discord = require('discord.js');
const bot = new Discord.Client();

var num1 = 1;
var num2 = 2;
var num3 = 3;
var num4 = 4;
var num5 = 5;
var num6 = 6;

bot.on('ready', () => {
    bot.user.setGame('Making Cinderbob miserable');
})

bot.on('message', (message) => {
if (message.content.toLowerCase().includes("sing") && (bot.user.username != message.author.username)) {
     var number = Math.floor(Math.random() * (num3 - num1 + 1) + num1);
     if (number == 1) { message.channel.sendMessage("Hm? Is that the screech of a dying rat?");
    }
    if (number == 2) { message.channel.sendMessage("Tsk. Filthy amateur, let me show you how it's done.")
  }
    if (number == 3) { message.channel.sendMessage("2/10.")
  }
}
if (message.content.toLowerCase()=="/whips driz") {
    var number = Math.floor(Math.random() * (num4 - num1 + 1) + num1);
    if (number == 1) { message.channel.sendMessage("What'd you think you're doing?");
    }
    if (number == 2) { message.channel.sendMessage("Should of told me if you liked whips ;)")
  }
    if (number == 3) { message.channel.sendMessage("Ouch...")
  }
    if (number == 4) { message.channel.sendMessage("Ha. I don't dislike pain.")}
}
if (message.content.toLowerCase().includes("bully")) {
    var number = Math.floor(Math.random() * (num5 - num1 + 1) + num1);
    if (number == 1) { message.channel.sendMessage("Someone called~?");
    }
    if (number == 2) { message.channel.sendMessage("Such cute tears.")
  }
    if (number == 3) { message.channel.sendMessage("The master is here HAHA!")
  }
    if (number == 4) { message.channel.sendMessage("You know you like it, be honest.")
  }
    if (number == 5) { message.channel.sendMessage("Keep your hands off Cinderbob or you'll have no hands.")
  }
}
 
 if (message.content.toLowerCase()=="/holds driz hand") {
    var number = Math.floor(Math.random() * (num4 - num1 + 1) + num1);
    if (number == 1) { message.channel.sendMessage("Gross.");
    }
    if (number == 2) { message.channel.sendMessage("W-what are you planning?")
  }
    if (number == 3) { message.channel.sendMessage("Let go, I'm not a child.")
  }
    if (number == 4) { message.channel.sendMessage("Kindness from you? The world's ending...")
  }
}
 if (message.content.toLowerCase().includes("my life")) {
  { message.channel.sendMessage("Do you really have one?")}
}


});
bot.login('MzAyMDQyODcyNDYxNjU2MDY0.C9Dy5w.hQcJkjcH81seoslFHaGphfe6y00');