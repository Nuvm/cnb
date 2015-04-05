//Custom NuvBot made and coded by Nuvm.
//Licensed under the Open GNU License v3.
//Feel free to pull merge requests with new commands and features,
//As well as asking for new ones!
 
//Changelog
//v1.2.10
//Added DerpStaff Mode.
{//v1.2
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
//Created utility mode.
}
 
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
  var userTarget = data.message.split('@');
  if (commandWait === true){
    switch(data.message){
      case'skip':
        if(userRoleIs0){
          API.sendChat(userName + ", don't ask for skips.");
        }
      break;
      case'!ping':
        if(userRole0){
          API.sendChat("「UB」" + userName2 + " Pong!");
          cooldown();
        }
      break;
      case'!fresdj':
        setTimeout(function(){API.sendChat("「UB」" + userName4 + " Click here to get Res Dj instantly! [http://nazr.in/Txl]");
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
        break;
      case'!call':
        API.chatLog("#CALLED# " + userName3 + " called you!");
      break;
      //case'!adv':
        //API.sendChat("「UB」Advertising is forbidden. It can result in a permaban! Don't post links without permission (Except image links).");
        //cooldown();
      //break;
      //case'!spam':
        //API.sendChat("「UB」Please don't spam!");
        //cooldown();
      //break;
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
        else if(userRole2){
            API.off(API.CHAT,utility);
            setTimeout(function(){API.sendChat("/me 「NB Utility」was disabled.");},600);
            }
      break;
      case'!uploaders':
        setTimeout(function(){API.sendChat("「UB」Here's a link to the YouTube channels of our staff: [http://donvoo.github.io/uploaders]");},600);
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
        setTimeout(function(){API.sendChat("「UB」" + userName + randomAnswer);
      },600);
        break;
      case'!enable derpstaff':
        $.getScript('https://rawgit.com/Nuvm/cnb/master/extra.js');
        API.sendChat("「UB」DerpyStaff Mode enabled.");
      break;
      case'!enable derpstaffbeta':
        $.getScript('https://rawgit.com/Nuvm/cnv/To-Patch/extra.js');
        API.sendChat("「UB」DerpyStaff Mode(beta) enabled.");
      break;
      case'!donvoo':
        if(data.uid === 4537120){
         setTimeout(function(){API.sendChat("「UB」I must confess! Donvoo... donvoo has always been the one to be so gentle, caring and smexy. Th-that's why.. :yellow_heart::blue_heart::blush::blue_heart::yellow_heart:");
          },600);
          cooldown();
        } else if(userRole2) {
         setTimeout(function(){API.sendChat("「UB」Sorry, this command is not for you.");
          },600);
          cooldown();
        }
      break;
    }
    switch(data.message.slice(0,data.message.indexOf(" "))){
      case'!fresdj':
        setTimeout(function(){API.sendChat("「UB」" + userName4 + " " + userTarget + " Click here to get Res Dj instantly! [http://nazr.in/Txl]");
        },600);
        cooldown();
      break;
      case'!rcs':
        setTimeout(function(){API.sendChat("「UB」" + userTarget + " RCS is a plugin with AutoWoot, AutoJoin, AFK message, custom emotes, and much more! Go check it out: [https://rcs.radiant.dj].");
        },600);
        cooldown();
      break;
      case'!helprcs':
        setTimeout(function(){API.sendChat("「UB」" + userTarget + " The menu for RCS is located at the top right. You can toggle different settings, which includes changing plug.dj's visual settings. For more info, visit [https://rcs.radiant.dj] .");
        },600);
        cooldown();
      break;
      case'!call':
        API.chatLog("#CALLED# " + userName3 + " called you!");
      break;
      case'!adv':
        setTimeout(function(){API.sendChat("「UB」" + userTarget + ", advertising is forbidden. It can result in a permaban! Don't post links without permission (Except image links).");
        },600);
        cooldown();
      break;
      case'!spam':
        setTimeout(function(){API.sendChat("「UB」" + userTarget + ", please don't spam.");
        },600);
        cooldown();
      break;
      case'!resdj':
        setTimeout(function(){API.sendChat("「UB」" + userTarget + " Register on the forums [http://nazr.in/Tyu] and then check the Requirements thread before posting your app here: [http://nazr.in/Ubg]");
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
API.chatLog("「Utility Bot 1.2」is now on.", true);
var startMsgUtility = "「Utility Bot 1.2」loaded.";
API.sendChat(startMsgUtility);
