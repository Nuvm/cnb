//NoobBot made and coded by Nuvm.
//Licensed under the Open GNU License v3.
//Feel free to pull merge requests with new commands and features,
//As well as asking for new ones!

API.on(API.CHAT,basic);
function basic(data){
  this.data = data;
  if(data.message.slice(0,10) === '!enable ub'){
    if(data.uid === 5010460){
      $.getScript('https://rawgit.com/Nuvm/cnb/master/UB_NuvBuild.js');
    } else if(API.getUser().role > 0 && data.uid !== 5010460){
      $.getScript('https://rawgit.com/Nuvm/cnb/master/UB_ResBuild.js');
    } 
  }
  if(data.message.slice(0,11) === '!ubshutdown'){
    if(API.getUser(data.uid).role >3){
      API.off();
      API.sendChat("/me Utility Bot has been completely shutdown by " + data.un + ".");
    } else if(data.uid === 5010460){
      API.off();
      API.sendChat("/me Utility Bot has been completely shutdown by Nuvm.");
    } else if(data.uid === API.getUser().uid){
      API.off();
      API.sendChat("/me Utility Bot has been completely shutdown by " + data.un + ".");
    }
  }
}
