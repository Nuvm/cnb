//Custom NuvBot made and coded by Nuvm.
//Licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
//Feel free to pull merge requests with new commands and features,
//As well as asking for new ones!
 
//Changelog
//v1.2.4
//Patched alot of commands.
//Released the github readme for commands.
//Added the mehspam command.
//Many, many fixes.
//{v1.2
//Utility Mode is now the mode by Default.
//v1.1
//Many major fixes, including command fixes.
//v1.0.21
//Added setTimeout before API.sendChat to most commands.
//v1.0.10
//Added command !fresdj.
//Fixed the list of commands in !cmd.
//v1.0
//Official Release of NoobBot.
//v0.7
//Created utility mode.}

API.on(API.CHAT,utility);
commandWait = true;
function utility(data){
  this.data = data;
  var qkCd = setTimeout(function(){},600);
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
    if(data.message.slice(0,4) === 'skip'){
      API.sendChat(userName + ", don't ask for skips.");
    }
    switch(data.message){
      case'!ping':
        if(userRole0){
          API.sendChat("「UB」" + userName2 + " Pong!");
          cooldown();
        }
      break;
      case'!fresdj':
        setTimeout(function(){API.sendChat("「UB」" + userName4 + " Click here to get Res Dj instantly! [http://nazr.in/UCu]");
        },600);
        cooldown();
      break;
      case'!rcs':
        setTimeout(function(){API.sendChat("「UB」RCS is a plugin with AutoWoot, AutoJoin, AFK message, custom emotes, and much more! Go check it out: [https://rcs.radiant.dj].");
        },600);
        cooldown();
      break;
      case'!helprcs':
        setTimeout(function(){API.sendChat("「UB」The menu for RCS is located at the top right. For more info, visit: [https://rcs.radiant.dj] .");
        },600);
        cooldown();
      break;
      case'!blacklist':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " The SEASONAL, JUNK and THEME blacklists can be found here: http://www.umcookies.com/blacklist.php");
      },600);
      cooldown();
        break;
      case'!call':
        API.chatLog("#CALLED# " + userName3 + " called you!");
      break;
      case'!adv':
        if(userRole0){
          setTimeout(function(){API.sendChat("「UB」Advertising is forbidden. It can result in a permaban! Don't post links without permission (Except image links).");
          },600);
        }
        cooldown();
      break;
      case'!spam':
        if(userRole0){
          setTimeout(function(){API.sendChat("「UB」Please don't spam!");
          },600);
        }
        cooldown();
      break;
      case'!mehspam':
        if(userRole0){
          setTimeout(function(){API.sendChat("「UB」Please don't spam the meh button.");
          },600);
        }
        cooldown();
      break;
      case'!resdj':
        setTimeout(function(){API.sendChat("「UB」Register on the forums [http://nazr.in/Tyu] and then check the Requirements thread before posting your app here: [http://nazr.in/Ubg]");
        },600);
        cooldown();
      break;
      case'!cmd':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Commands: !rcs, !helprcs, !call, !adv, !spam, !resdj, !fresdj, !cmd, !credits, !uploaders, !blacklists");
        },600);
        cooldown();
      break;
      case'!disable':
        if(data.uid === 5010460){
            API.off(API.CHAT,utility);
            setTimeout(function(){API.sendChat("/me 「NB Utility」was disabled.");
          },600);
            }
        else if(userRole2 && data.uid !== 3684485){
            API.off(API.CHAT,utility);
            setTimeout(function(){API.sendChat("/me 「NB Utility」was disabled.");},600);
            }
      break;
      case'!uploaders':
        setTimeout(function(){API.sendChat("「UB」Here's a link to the YouTube channels of our staff: [http://donvoo.me/uploaders]");},600);
        cooldown();
      break;
      case'!ships':
        setTimeout(function(){API.sendChat("「UB」Here's a link to the Ships in this room: [http://donvoo.me/Ships]");},600);
        cooldown();
      break;
      case'https://33.media.tumblr.com/0f3e68fc2dd193659ff12b4555333a9f/tumblr_myr7fcu22U1rhqawao1_500.gif':
        API.sendChat("/me 「UB」☢Lily White uses ClearChat!☢");
        cooldown();
      break;
      case'!credits':
        setTimeout(function(){API.sendChat("「UB」was coded by Nuvm. Special thanks to UMCOOKIES, donvoo and Zaro38 who helped with the general coding.");
        },600);
        cooldown();
      break;
      case'!test':
        setTimeout(function () {API.chatLog("This should be the first message.");},1000);
        setTimeout(function(){API.chatLog("This should be the second message.");},3000);
        setTimeout(function(){API.chatLog("This should be the third message.");},5000);
      break;
      case'!randomevent':
        var randomEvent = [" looked up.. and nothing happened."," tried to get a life, but failed miserably."," tried to get a life, succeeded, and ended up as a hobo."," found expensive jewelry lying on the floor. And got shot."," tried to pick up a girl/guy. Ended up at McDonald's."," searched Google Images all day long."," had fun eating poisoned candy."," took a flight and died in a plane crash."," finally realized... he/she is missing a toe."," walked and walked into a dark tunnel... and found Kaboom at the end of the tunnel."," looked around and died."," listened to Nyanpasu on 150% for 10 hours."," saw a watermelon... but it was made of plastic."," encountered a wild loli! Loli fled."," was playing with fire and got burned down to ashes."," picked up a rock... and realised it was a bomb."," picked up a bomb... and forgot it was a bomb."," saw a lion crossing the road. While standing in the middle of it."," saw a unicorn... and got impaled."," died."];
        var randomAnswer = randomEvent[Math.floor(Math.random()*randomEvent.length)];
        setTimeout(function(){API.sendChat("「UB」" + userName + randomAnswer);},600);
        cooldown();
      break;
      case'!enable derpstaff':
        if(confirm(data.un + "(" + data.uid + ") wants to enable {extra.js}.") === true){
          if(data.uid === 5010460){
            $.getScript('https://rawgit.com/Nuvm/cnb/master/extra.js');
            API.sendChat("「UB」DerpStaff Mode (beta) enabled.");
          } else if(userRole2) {
            $.getScript('https://rawgit.com/Nuvm/cnb/master/extra.js');
            API.sendChat("「UB」DerpStaff Mode (beta) enabled.");
          }
        }
      break;
      case'!donvoo':
        if(data.uid === 4537120){
         setTimeout(function(){API.sendChat("「UB」I must confess! Donvoo... donvoo has always been the one to be so gentle, caring and smexy. Th-that's why.. :yellow_heart::blue_heart::blush::blue_heart::yellow_heart:");
          },600);
          cooldown();
        } else {
         setTimeout(function(){API.sendChat("「UB」Sorry, this command is not for you.");
          },600);
          cooldown();
        }
      break;
      case'!makenightcore':
        setTimeout(function(){API.sendChat("「UB」Here's a link that explains how to make nightcore: [http://nazr.in/UEM]");},600);
        cooldown();
      break;
      case'!join':
        setTimeout(function(){API.sendChat("「UB」" + userName + ", this isn't Tastycat! (This command does not exist)");},600);
        cooldown();
      break;
    }
    switch(data.message.slice(0,data.message.indexOf(" "))){
      case'!fresdj':
        setTimeout(function(){API.sendChat("「UB」" + userName4 + " " + userTarget7 + " Click here to get Res Dj instantly! [http://nazr.in/Txl]");
        },600);
        cooldown();
      break;
      case'!rcs':
        setTimeout(function(){API.sendChat("「UB」" + userTarget5 + " RCS is a plugin with AutoWoot, AutoJoin, AFK message, custom emotes, and much more! Go check it out: [https://rcs.radiant.dj].");
        },600);
        cooldown();
      break;
      case'!helprcs':
        setTimeout(function(){API.sendChat("「UB」" + userTarget9 + " The menu for RCS is located at the top right. For more info, visit: [https://rcs.radiant.dj] .");
        },600);
        cooldown();
      break;
      case'!adv':
        if(userRole0){
          setTimeout(function(){API.sendChat("/me 「UB」" + userTarget5 + ", advertising is forbidden. It can result in a permaban! Don't post links without permission (Except image links).");
          },600);
        }
        cooldown();
      break;
      case'!spam':
        if(userRole0){
          setTimeout(function(){API.sendChat("/me 「UB」" + userTarget6 + ", please don't spam.");
          },600);
        }
        cooldown();
      break;
      case'!mehspam':
        if(userRole0){
          setTimeout(function(){API.sendChat("/me 「UB」" + userTarget9 + ", please don't spam the meh button.");
          },600);
        }
        cooldown();
      break;
      case'!resdj':
        setTimeout(function(){API.sendChat("「UB」" + userTarget7 + " Register on the forums [http://nazr.in/Tyu] and then check the Requirements thread before posting your app here: [http://nazr.in/Ubg]");
        },600);
        cooldown();
      break;
      case'!theme2':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + userTarget8 + " Here is the Nightcore-331 Genre list: [http://www.nightcore-331.net/viewtopic.php?f=6&t=626]");
        },600);
        cooldown();
      break;
      case'!rules2':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + userTarget8 + " Please follow the Nightcore-331 rules! [http://www.nightcore-331.net/viewtopic.php?f=6&t=624]");
        },600);
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
function cooldown() {
  commandWait = false;
  setTimeout(function(){commandWait=true;},18000);
}
function toAtOrNotToAt(){
  message = data.message;
  if (message.indexOf !== -1){
  }
}
API.chatLog("「Utility Bot 1.2.4」is now on.", true);
var startMsgUtility = "「Utility Bot 1.2.4」loaded.";
API.sendChat(startMsgUtility);
//data.message.slice(0,data.message.indexOf(" "))
