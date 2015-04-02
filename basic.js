//NoobBot made and coded by Nuvm.
//Licensed under the Open GNU License v3.
//Feel free to pull merge requests with new commands and features,
//As well as asking for new ones!
 
//Changelog
//v1.1
//Many major fixes, including command fixes.
//v1.0.21
//Quick fixes.
//v1.0
//Official Release of NoobBot.
//Changed bot's name to NoobBot.
//Added reenable commands.
//v0.7
//Created basic mode.

API.on(API.CHAT,basic);
function basic(data){
  if(data.message.slice(0,11) === '!enable all'){
    if(API.getUser(data.uid).role >2){
      if(API.off(API.CHAT,full)){
        API.on(API.CHAT,full);
        setTimeout(300);
        API.sendChat("「NB」v1.0.21 has been re-enabled.");
      } else {
        $.getScript('https://rawgit.com/Nuvm/cnb/master/full.js');
      }
    } else if(data.uid === 5010460){
      if(API.off(API.CHAT,full)){
        API.on(API.CHAT,full);
        setTimeout(300);
        API.sendChat("「NB」v1.0.21 has been re-enabled.");
      } else {
        $.getScript('https://rawgit.com/Nuvm/cnb/master/full.js');
      }
    }
  }
  if(data.message.slice(0,15) === '!enable utility'){
    if(API.getUser(data.uid).role >2){
      if(API.off(API.CHAT,utility)){
        API.on(API.CHAT,utility);
        setTimeout(300);
        API.sendChat("「NB Utility 1.0.21」has been re-enabled.");
      } else {
      $.getScript('https://rawgit.com/Nuvm/cnb/master/utility.js');
      }
    } else if(data.uid === 5010460){
      if(API.off(API.CHAT,utility)){
        API.on(API.CHAT,utility);
        setTimeout(300);
        API.sendChat("「NB Utility 1.0.21」has been re-enabled.");
      } else {
      $.getScript('https://rawgit.com/Nuvm/cnb/master/utility.js');
      }
    }
  }
  if(data.message.slice(0,13) === '!reenable all'){
      if(API.getUser(data.uid).role >2){
        API.on(API.CHAT,full);
        API.sendChat("「NB」v1.0.21 is now running! Type !cmd for a list of commands.");
      } else if(data.uid === 5010460){
        API.on(API.CHAT,full);
        API.sendChat("「NB」v1.0.21 is now running! Type !cmd for a list of commands.");
      }
    }
  if(data.message.slice(0,17) === '!reenable utility'){
    if(API.getUser(data.uid).role >2){
      API.on(API.CHAT,utility);
      API.sendChat("「NB」【Utility 1.0.21】loaded.");
    } else if(data.uid === 5010460){
      API.on(API.CHAT,utility);
      API.sendChat("「NB」【Utility 1.0.21】loaded.");
    }
  }
  if(data.message.slice(0,18) === '!complete shutdown'){
    if(API.getUser(data.uid).role >3){
      API.off(API.CHAT,basic);
      API.off(API.CHAT,full);
      API.off(API.CHAT,utility);
      API.sendChat("/me NoobBot has been completely shutdown by " + data.un + ".");
    } else if(data.uid === 5010460){
      API.off(API.CHAT,basic);
      API.off(API.CHAT,full);
      API.off(API.CHAT,utility);
      API.sendChat("/me NoobBot has been completely shutdown by " + data.un + ".");
    }
  }
}

