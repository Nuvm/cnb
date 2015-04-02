//Custom NuvBot made and coded by Nuvm.
//Licensed under the Open GNU License v3.
//Feel free to pull merge requests with new commands and features,
//As well as asking for new ones!
 
//Changelog
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
var startMsgUtility = "「NB」【Utility 1.0.21】loaded.";
API.sendChat(startMsgUtility);
API.on(API.CHAT,utility);
commandWait = true;

function utility(data){
  this.data = data;
  var qkCd = setTimeout(200);
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
  var userTarget0 = data.message.slice(0,255);
  var userTarget1 = data.message.slice(1,255);
  var userTarget2 = data.message.slice(2,255);
  var userTarget3 = data.message.slice(3,255);
  var userTarget4 = data.message.slice(4,255);
  var userTarget5 = data.message.slice(5,255);
  var userTarget6 = data.message.slice(6,255);
  var userTarget7 = data.message.slice(7,255);
  var userTarget8 = data.message.slice(8,255);
  var userTarget9 = data.message.slice(9,255);
  var userTarget10 = data.message.slice(10,255);
  var userTarget11 = data.message.slice(11,155);
  var userTarget12 = data.message.slice(12,255);
  var userTarget13 = data.message.slice(13,255);
  if (commandWait === true){
    switch(data.message){
      case'!ping':
        if(userRoleIs0){
          API.sendChat("「NB」" + userName2 + " Pong!");
          cooldownLong();
        } else if(userRole0){
          API.sendChat("「NB」" + userName2 + " Pong!");
          cooldown();
        }
      break;
      case'!skip':
        setTimeout(200);
       if(userRole1){
        API.sendChat("/me 「NB」" + userName3 + " skipped the current song.");
       }
      break;
      case'!fresdj':
        setTimeout(200);
        API.sendChat("「NB」" + userName4 + " Click here to get Res Dj instantly! [http://nazr.in/Txl]");
        cooldown();
      break;
      case'!rcs':
        setTimeout(200);
        API.sendChat("「NB」RCS is a plugin with AutoWoot, AutoJoin, AFK message, custom emotes, and much more! Go check it out: [https://rcs.radiant.dj].");
        cooldown();
      break;
      case'!helprcs':
        setTimeout(200);
        API.sendChat("「NB」The menu for RCS is located at the top right. For more info, visit: [https://rcs.radiant.dj] .");
        cooldown();
      break;
      case'!blacklists':
        setTimeout(200);
        API.sendChat("「NB」" + userName2 + " The SEASONAL, JUNK and THEME blacklists can be found here: http://www.umcookies.com/blacklist.php");
      break;
      case'!call':
        API.chatLog("#CALLED# " + userName3 + " called you!");
      break;
      //case'!adv':
        //API.sendChat("Advertising is forbidden. It can result in a permaban! Don't post links without permission (Except image links).");
        //cooldown();
      //break;
      //case'!spam':
        //API.sendChat("Please don't spam!");
        //cooldown();
      //break;
      case'!resdj':
        setTimeout(200);
        API.sendChat("「NB」Register on the forums [http://nazr.in/Tyu] and then check the Requirements thread before posting your app here: [http://nazr.in/Ubg]");
        cooldown();
      break;
      case'!cmd':
        setTimeout(200);
        API.sendChat("「NB」" + userName2 + " Commands: !rcs, !helprcs, !call, !adv, !spam, !resdj, !fresdj, !cmd, !credits, !uploaders, !blacklists");
        cooldownLong();
      break;
      case'!disable utility':
        if(data.uid === 5010460){
            API.off(API.CHAT,utility);
            setTimeout(200);
            API.sendChat("/me 「NB Utility」was disabled.");
          }
        else if(userRole2){
            API.off(API.CHAT,utility);
            setTimeout(200);
            API.sendChat("/me 「NB Utility」was disabled.");
          }
      break;
      case'!uploaders':
        setTimeout(200);
        API.sendChat("「NB」Here's a link to the YouTube channels of our staff: [http://donvoo.github.io/uploaders]");
        cooldownLong();
      break;
      case'https://33.media.tumblr.com/0f3e68fc2dd193659ff12b4555333a9f/tumblr_myr7fcu22U1rhqawao1_500.gif':
        API.sendChat("/me 「NB」☢Lily White uses ClearChat!☢");
        cooldownLong();
      break;
      case'!credits':
        setTimeout(200);
        API.sendChat("「NB」was coded by Nuvm. Special thanks to UMCOOKIES, donvoo and Zaro38 who helped with the general coding.");
        cooldown();
      break;
    }
    switch(data.message.slice(0,data.message.indexOf(" "))){
      case'!swap':
       if(userRole1){
        API.sendChat("/me 「NB」" + userName3 + " used Swap.");
       }
      break;
      case'!fresdj':
        setTimeout(200);
        API.sendChat("「NB」" + userName4 + " " + userTarget8 + " Click here to get Res Dj instantly! [http://nazr.in/Txl]");
        cooldown();
      break;
      case'!rcs':
        setTimeout(200);
        API.sendChat("「NB」" + userTarget5 + " RCS is a plugin with AutoWoot, AutoJoin, AFK message, custom emotes, and much more! Go check it out: [https://rcs.radiant.dj].");
        cooldown();
      break;
      case'!helprcs':
        setTimeout(200);
        API.sendChat("「NB」" + userTarget9 + " The menu for RCS is located at the top right. You can toggle different settings, which includes changing plug.dj's visual settings. For more info, visit [https://rcs.radiant.dj] .");
        cooldown();
      break;
      case'!call':
        setTimeout(200);
        API.chatLog("#CALLED# " + userName3 + " called you!");
      break;
      case'!adv':
        setTimeout(200);
        API.sendChat("「NB」" + userTarget5 + ", advertising is forbidden. It can result in a permaban! Don't post links without permission (Except image links).");
        cooldown();
      break;
      case'!spam':
        setTimeout(200);
        API.sendChat("「NB」" + userTarget6 + ", please don't spam.");
        cooldown();
      break;
      case'!resdj':
        setTimeout(200);
        API.sendChat("「NB」" + userTarget7 + " Register on the forums [http://nazr.in/Tyu] and then check the Requirements thread before posting your app here: [http://nazr.in/Ubg]");
        cooldown();
      break;
    }
  }
}
  function cooldown() {
  commandWait = false;
  setTimeout(function(){commandWait=true;},12000);
}
function cooldownShort() {
  commandWait = false;
  setTimeout(function(){commandWait=true;},7000);
}
function cooldownLong() {
  commandWait = false;
  setTimeout(function(){commandWait=true;},26000);
}
function toAtOrNotToAt(){
  message = data.message;
  if (message.indexOf !== -1){
 
  }
 
}
