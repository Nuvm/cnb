API.on(API.CHAT,basic);
function basic(data){
  if(data.message.slice(0,11) === '!enable all'){
    if(API.getUser(data.uid).role >3){
      $.getScript('https://rawgit.com/Nuvm/cnb/master/full.js');
    } else if(data.uid === 5010460){
      $.getScript('https://rawgit.com/Nuvm/cnb/master/full.js');
    }
  }
  if(data.message.slice(0,15) === '!enable utility'){
    if(API.getUser(data.uid).role >3){
      $.getScript('https://rawgit.com/Nuvm/cnb/master/utility.js');
    } else if(data.uid === 5010460){
      $.getScript('https://rawgit.com/Nuvm/cnb/master/utility.js');
    }
  }
  if(data.message.slice(0,13) === '!enable extra'){
    if(API.getUser(data.uid).role >3){
      $.getScript('https://rawgit.com/Nuvm/cnb/master/extra.js');
    } else if(data.uid === 5010460){
      $.getScript('https://rawgit.com/Nuvm/cnb/master/extra.js');
    }
  }
}
