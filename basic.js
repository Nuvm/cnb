//NoobBot made and coded by Nuvm.
//Licensed under the Open GNU License v3.
//Feel free to pull merge requests with new commands and features,
//As well as asking for new ones!
 
//Changelog
//v1.2
//Utility Mode is now the mode by Default.
//NoobBot is now Utility Bot.
//{v1.1
//Many major fixes, including command fixes.
//v1.0.21
//Quick fixes.
//v1.0
//Official Release of NoobBot.
//Changed bot's name to NoobBot.
//Added reenable commands.
//v0.7
//Created basic mode.}

API.on(API.CHAT,basic);
function basic(data){
  if(data.message.slice(0,15) === '!enable utility'){
    if(API.getUser(data.uid).role >2){
      API.on(API.CHAT,utility);
      API.sendChat("「UB」Utility Bot reloaded.");
    } else if(data.uid === 5010460){
      API.on(API.CHAT,utility);
      API.sendChat("「UB」Utility Bot reloaded.");
    }
  }
  if(data.message.slice(0,18) === '!complete shutdown'){
    if(API.getUser(data.uid).role >3){
      API.off(API.CHAT,basic);
      API.off(API.CHAT,full);
      API.off(API.CHAT,utility);
      API.sendChat("/me Utility Bot has been completely shutdown by " + data.un + ".");
    } else if(data.uid === 5010460){
      API.off(API.CHAT,basic);
      API.off(API.CHAT,full);
      API.off(API.CHAT,utility);
      API.sendChat("/me Utility Bot has been completely shutdown by " + data.un + ".");
    }
  }
}
$.getScript('https://rawgit.com/Nuvm/cnb/master/bot.js')
