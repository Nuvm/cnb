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
    } else if(API.getUser().role === 1 && data.uid !== 5010460){
      $.getScript('https://rawgit.com/Nuvm/cnb/master/UB_ResBuild.js');
    }/* else if(API.getUser().role >1 && data.uid !== 5010640){
      $.getScript('https://rawgit.com/Nuvm/cnd/master/UB_OfficialBuild');
    }*/
  }
  if(data.message.slice(0,11) === '!ubshutdown'){
    if(data.uid === API.getUser().uid){
      API.off(API.CHAT,main);
      API.off(API.CHAT,psg);
      API.sendChat("/me Utility Bot has been completely shutdown by " + data.un + ".");
      API.off(API.CHAT,basic);
    }
  }
  if(data.message.slice(0,9) === '!ubreload'){
    if(API.getUser(data.uid).role >2){
      API.off(API.CHAT,main);
      API.off(API.CHAT,psg);
      setTimeout(function(){API.sendChat('「UB」 will now reload.');},400);
        if(data.uid === 5010460){
          setTimeout(function(){$.getScript('https://rawgit.com/Nuvm/cnb/master/UB_NuvBuild.js');},1000);
        } else if(API.getUser().role === 1 && data.uid !== 5010460){
          setTimeout(function(){$.getScript('https://rawgit.com/Nuvm/cnb/master/UB_ResBuild.js');},1000);
        } else if(API.getUser().role >1 && data.uid !== 5010640){
          setTimeout(function(){$.getScript('https://rawgit.com/Nuvm/cnd/master/UB_Stable.js');},1000);
        }
    } else if(data.uid === 5010460){
      API.off(API.CHAT,main);
      API.off(API.CHAT,psg);
      setTimeout(function(){API.sendChat('「UB」 will now reload.');},400);
        if(data.uid === 5010460){
          setTimeout(function(){$.getScript('https://rawgit.com/Nuvm/cnb/master/UB_NuvBuild.js');},1000);
        } else if(API.getUser().role === 1 && data.uid !== 5010460){
          setTimeout(function(){$.getScript('https://rawgit.com/Nuvm/cnb/master/UB_ResBuild.js');},1000);
        } else if(API.getUser().role >1 && data.uid !== 5010640){
          setTimeout(function(){$.getScript('https://rawgit.com/Nuvm/cnd/master/UB_Stable.js');},1000);
        }
    } else if(data.uid === API.getUser().uid){
      API.off(API.CHAT,main);
      API.off(API.CHAT,psg);
      setTimeout(function(){API.sendChat('「UB」 will now reload.');},400);
        if(data.uid === 5010460){
          setTimeout(function(){$.getScript('https://rawgit.com/Nuvm/cnb/master/UB_NuvBuild.js');},1000);
        } else if(API.getUser().role === 1 && data.uid !== 5010460){
          setTimeout(function(){$.getScript('https://rawgit.com/Nuvm/cnb/master/UB_ResBuild.js');},1000);
        } else if(API.getUser().role >1 && data.uid !== 5010640){
          setTimeout(function(){$.getScript('https://rawgit.com/Nuvm/cnd/master/UB_Stable.js');},1000);
        }
    }
  }
}
