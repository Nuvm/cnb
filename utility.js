//Custom NuvBot made and coded by Nuvm.
//Licensed under the Open GNU License v3.
//Feel free to pull merge requests with new commands and features,
//As well as asking for new ones!
 
//Changelog
//v1.1
//Many major fixes, including command fixes.
//Commands !spam and !adv are now functionnal.
//v1.0.21
//Added setTimeout before API.sendChat to most commands.
//v1.0.10
//Added command !fresdj.
//Fixed the list of commands in !cmd.
//v1.0
//Official Release of NoobBot.
//v0.7
//Created utility mode.
 
API.chatLog("「NB Utility」is now on.", true);
var startMsgUtility = "「NB Utility 1.1」loaded.";
API.sendChat(startMsgUtility);
API.on(API.CHAT,utility);
commandWait = true;

function utility(data){
  this.data = data;
  var qkCd = setTimeout(350);
  var userRole0 = API.getUser(data.uid).role >0;
  var userRole1 = API.getUser(data.uid).role >1;
  var userRole2 = API.getUser(data.uid).role >2;
  var userRole3 = API.getUser(data.uid).role >3;
  var userRoleF1 = API.getUser(data.uid).role <1;
  var userRoleF2 = API.getUser(data.uid).role <2;
  var userRoleF3 = API.getUser(data.uid).role <3;
  var userRoleIs0 = API.getUser(data.uid).role = 0;
  var userRoleIs1 = API.getUser(data.uid).role = 1;
  var userRoleIs2 = API.getUser(data.uid).role = 2;
  var userRoleIs3 = API.getUser(data.uid).role = 3;
  var userRoleIs4 = API.getUser(data.uid).role = 4;
  var userRoleIs5 = API.getUser(data.uid).role = 5;
  var userName = "@" + data.un;
  var userName2 = "[@" + data.un + "]";
  var userName3 = data.un;
  var userName4 = "[" + data.un + "]";
  var userTarget = data.message.split('@');
  if (commandWait === true){
    switch(data.message.split('@')[1] != undefined){
      case'!ping':
        API.sendChat("「NB」" + userName2 + " Pong!");
        cooldown();
      break;
      case'!fresdj':
        setTimeout(350);
        API.sendChat("「NB」" + userName4 + " Click here to get Res Dj instantly! [http://nazr.in/Txl]");
        cooldown();
      break;
      case'!rcs':
        setTimeout(350);
        API.sendChat("「NB」RCS is a plugin with AutoWoot, AutoJoin, AFK message, custom emotes, and much more! Go check it out: [https://rcs.radiant.dj].");
        cooldown();
      break;
      case'!helprcs':
        setTimeout(350);
        API.sendChat("「NB」The menu for RCS is located at the top right. For more info, visit: [https://rcs.radiant.dj] .");
        cooldown();
      break;
      case'!blacklists':
        setTimeout(350);
        API.sendChat("「NB」" + userName2 + " The SEASONAL, JUNK and THEME blacklists can be found here: http://www.umcookies.com/blacklist.php");
        cooldown();
      break;
      case'!blacklist':
        setTimeout(350);
        API.sendChat("「NB」" + userName2 + " The SEASONAL, JUNK and THEME blacklists can be found here: http://www.umcookies.com/blacklist.php");
        cooldown();
      break;
      case'!call':
        API.chatLog("#CALLED# " + userName3 + " called you!");
      break;
      case'!adv':
        API.sendChat("「NB」Advertising is forbidden. It can result in a permaban! Don't post links without permission (Except image links).");
        cooldown();
      break;
      case'!spam':
        API.sendChat("「NB」Please don't spam!");
        cooldown();
      break;
      case'!resdj':
        setTimeout(350);
        API.sendChat("「NB」Register on the forums [http://nazr.in/Tyu] and then check the Requirements thread before posting your app here: [http://nazr.in/Ubg]");
        cooldown();
      break;
      case'!cmd':
        setTimeout(350);
        API.sendChat("「NB」" + userName2 + " Commands: !rcs, !helprcs, !call, !adv, !spam, !resdj, !fresdj, !cmd, !credits, !uploaders, !blacklists");
        cooldown();
      break;
      case'!disable utility':
        if(data.uid === 5010460){
            API.off(API.CHAT,utility3);
            setTimeout(350);
            API.sendChat("/me 「NB Utility」was disabled.");
          }
        else if(userRole2){
            API.off(API.CHAT,utility3);
            setTimeout(350);
            API.sendChat("/me 「NB Utility」was disabled.");
          }
      break;
      case'!uploaders':
        setTimeout(350);
        API.sendChat("「NB」Here's a link to the YouTube channels of our staff: [http://donvoo.github.io/uploaders]");
        cooldown();
      break;
      case'https://33.media.tumblr.com/0f3e68fc2dd193659ff12b4555333a9f/tumblr_myr7fcu22U1rhqawao1_500.gif':
        API.sendChat("/me 「NB」☢Lily White uses ClearChat!☢");
        cooldown();
      break;
      case'!credits':
        setTimeout(350);
        API.sendChat("「NB」was coded by Nuvm. Special thanks to UMCOOKIES, donvoo and Zaro38 who helped with the general coding.");
        cooldown();
      break;
      case'!test':
        setTimeout(400);
        API.chatLog("This should be the first message.");
        setTimeout(450);
        API.chatLog("This should be the second message.");
        setTimeout(500);
        API.chatLog("This should be the third message.");
      break;
    }
    switch(data.message.slice(0,data.message.indexOf(" "))){
      case'!fresdj':
        setTimeout(350);
        API.sendChat("「NB」" + userName4 + " " + userTarget + " Click here to get Res Dj instantly! [http://nazr.in/Txl]");
        cooldown();
      break;
      case'!rcs':
        setTimeout(350);
        API.sendChat("「NB」" + userTarget + " RCS is a plugin with AutoWoot, AutoJoin, AFK message, custom emotes, and much more! Go check it out: [https://rcs.radiant.dj].");
        cooldown();
      break;
      case'!helprcs':
        setTimeout(350);
        API.sendChat("「NB」" + userTarget + " The menu for RCS is located at the top right. You can toggle different settings, which includes changing plug.dj's visual settings. For more info, visit [https://rcs.radiant.dj] .");
        cooldown();
      break;
      case'!call':
        setTimeout(350);
        API.chatLog("#CALLED# " + userName3 + " called you!");
      break;
      case'!adv':
        setTimeout(350);
        API.sendChat("「NB」" + userTarget + ", advertising is forbidden. It can result in a permaban! Don't post links without permission (Except image links).");
        cooldown();
      break;
      case'!spam':
        setTimeout(350);
        API.sendChat("「NB」" + userTarget + ", please don't spam.");
        cooldown();
      break;
      case'!resdj':
        setTimeout(350);
        API.sendChat("「NB」" + userTarget + " Register on the forums [http://nazr.in/Tyu] and then check the Requirements thread before posting your app here: [http://nazr.in/Ubg]");
        cooldown();
      break;
    }
  }
}
  function cooldown() {
  commandWait = false;
  setTimeout(function(){commandWait=true;},7000);
}
function cooldownShort() {
  commandWait = false;
  setTimeout(function(){commandWait=true;},4000);
}
function cooldownLong() {
  commandWait = false;
  setTimeout(function(){commandWait=true;},18000);
}
function toAtOrNotToAt(){
  message = data.message;
  if (message.indexOf !== -1){
 
  }
 
}
