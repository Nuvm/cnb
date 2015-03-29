//NoobBot made and coded by Nuvm.
//Licensed under the Open GNU License v3.
//Feel free to pull merge requests with new commands and features,
//As well as asking for new ones!
 
//Changelog
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
      $.getScript('https://rawgit.com/Nuvm/cnb/master/full.js');
    } else if(data.uid === 5010460){
      $.getScript('https://rawgit.com/Nuvm/cnb/master/full.js');
    }
  }
  if(data.message.slice(0,15) === '!enable utility'){
    if(API.getUser(data.uid).role >2){
      $.getScript('https://rawgit.com/Nuvm/cnb/master/utility.js');
    } else if(data.uid === 5010460){
      $.getScript('https://rawgit.com/Nuvm/cnb/master/utility.js');
    }
  }
  if(data.message.slice(0,18) === '!complete shutdown'){
    if(API.getUser(data.uid).role >2){
      API.off(API.CHAT,basic);
      API.off(API.CHAT,full);
      API.off(API.CHAT,utility);
      API.sendChat("NoobBot has been completely shutdown.")
    } else if(data.uid === 5010460){
      API.off(API.CHAT,basic);
      API.off(API.CHAT,full);
      API.off(API.CHAT,utility);
      API.sendChat("NoobBot has been completely shutdown.")
    }
  }
  if(data.message.slice(0,13) === '!reenable all'){
    if(API.getUser(data.uid).role >2){
      API.on(API.CHAT,full);
    } else if(data.uid === 5010460){
      API.on(API.CHAT,full);
    }
  }
  if(data.message.slice(0,17) === '!reenable utility'){
    if(API.getUser(data.uid).role >2){
      API.on(API.CHAT,utility);
    } else if(data.uid === 5010460){
      API.on(API.CHAT,utility);
    }
  }
}
