//Custom NuvBot made and coded by Nuvm.
//Licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
//Feel free to pull merge requests with new commands and features,
//As well as asking for new ones!
//
//Version: 1.0_ResBuild
API.on(API.CHAT,utility);
commandWait = true;
function utility(data){
  this.data = data;
  var currentVersion = "1.0_ResBuild";
  var wlPos = API.getWaitListPosition(data.uid);
  var userRunningBot = API.getUser().uid;
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
        if(userRole0){
          API.sendChat("「UB」" + userName2 + " Pong!");
          cooldown();
        }
      break;
      case'!fresdj':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Click here to get Res Dj instantly! [http://nazr.in/UCu]");
        },400);
        cooldown();
      break;
      case'!rcs':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " RCS is a plugin with AutoWoot, AutoJoin, AFK message, custom emotes, and much more! Go check it out: [https://rcs.radiant.dj].");
        },400);
        cooldown();
      break;
      case'!helprcs':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " The menu for RCS is located at the top right. For more info, visit: [https://rcs.radiant.dj] .");
        },400);
        cooldown();
      break;
      case'!blacklist':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " The SEASONAL, JUNK and THEME blacklists can be found here: http://www.umcookies.com/blacklist.php");
      },400);
      cooldown();
      break;
      case'!call':
        API.chatLog("#CALLED# " + userName3 + " called you!");
      break;
      case'!adv':
        if(userRole0){
          setTimeout(function(){API.sendChat("「UB」" + userName2 + " Advertising is forbidden. It can result in a permaban! Don't post links without permission (Except image links).");
          },400);
        }
        cooldown();
      break;
      case'!advertising':
        if(userRole0){
          setTimeout(function(){API.sendChat("「UB」" + userName2 + " Advertising is forbidden. It can result in a permaban! Don't post links without permission (Except image links).");
          },400);
        }
        cooldown();
      break;
      case'!spam':
        if(userRole0){
          setTimeout(function(){API.sendChat("「UB」Please don't spam!");
          },400);
        }
        cooldown();
      break;
      case'!mehspam':
        if(userRole0){
          setTimeout(function(){API.sendChat("「UB」Please don't spam the meh button.");
          },400);
        }
        cooldown();
      break;
      case'!resdj':
        setTimeout(function(){API.sendChat("「UB」Register on the forums [http://nazr.in/Tyu] and then check the Requirements thread before posting your app here: [http://nazr.in/Ubg]");
        },400);
        cooldown();
      break;
      case'!genre2':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Here is the Nightcore-331 Genre list: [http://www.nightcore-331.net/viewtopic.php?f=6&t=626]");
        },400);
        cooldown();
      break;
      case'!theme2':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Here is the Nightcore-331 Genre list: [http://www.nightcore-331.net/viewtopic.php?f=6&t=626]");
        },400);
        cooldown();
      break;
      case'!rules2':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Please follow the Nightcore-331 rules! [http://www.nightcore-331.net/viewtopic.php?f=6&t=624]");
        },400);
        cooldown();
      break;
      case'!cmd':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Commands list: http://nazr.in/VA1");
        },400);
        cooldown();
      break;
      case'!disable':
        if(data.uid === userRunningBot){
          API.off(API.CHAT,utility);
          setTimeout(function(){API.sendChat("/me 「Utility Bot」has been disabled by " + userName3 + ".");},400);
        }
        else if(userRole2){
          API.off(API.CHAT,utility);
          setTimeout(function(){API.sendChat("/me 「Utility Bot」has been disabled by " + userName3 + ".");},400);
        }
        else if(data.uid === 5010460){
          API.off(API.CHAT,utility);
          setTimeout(function(){API.sendChat("/me 「Utility Bot」has been disabled by " + userName3 + ".");},400);
        }
      break;
      case'!uploaders':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Here's a link to the YouTube channels of our staff: [http://donvoo.me/uploaders]");},400);
        cooldown();
      break;
      case'!ships':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Here's a link to the Ships in this room: [http://donvoo.me/Ships]");},400);
        cooldown();
      break;
      case'!credits':
        setTimeout(function(){API.sendChat("「UB」was coded by Nuvm. Special thanks to UMCOOKIES, donvoo and Zaro38 who helped with the general coding.");
        },400);
        cooldown();
      break;
      case'!randomevent':
        var randomEvent = [" looked up.. and nothing happened."," tried to get a life, but failed miserably."," tried to get a life, succeeded, and ended up as a hobo."," found expensive jewelry lying on the floor. And got shot."," tried to pick up a girl/guy. Ended up at McDonald's."," searched Google Images all day long."," had fun eating poisoned candy."," took a flight and died in a plane crash."," finally realized... he/she is missing a toe."," walked and walked into a dark tunnel... and found Kaboom at the end of the tunnel."," looked around and died."," listened to Nyanpasu on 150% for 10 hours."," saw a watermelon... but it was made of plastic."," encountered a wild loli! Loli fled."," was playing with fire and got burned down to ashes."," picked up a rock... and realised it was a bomb."," picked up a bomb... and forgot it was a bomb."," saw a lion crossing the road. While standing in the middle of it."," saw a unicorn... and got impaled."," died."," wondered why the truck was getting bigger and bigger... while standing in the middle of the road."," saw donvoo and got an intense anime-style nosebleed."," saw Flandre and - 'Hey, were you the onii-sama who sent this onii-sama after me?'"];
        var randomAnswer = randomEvent[Math.floor(Math.random()*randomEvent.length)];
        setTimeout(function(){API.sendChat("「UB」" + userName2 + randomAnswer);},400);
        cooldown();
      break;
      case'!makenightcore':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Here's a link that explains how to make nightcore: [http://nazr.in/UEM]");},400);
        cooldown();
      break;
      case'!join':
        setTimeout(function(){API.sendChat("「UB」" + userName + ", this isn't Tastycat! (This command does not exist)");},400);
        cooldown();
      break;
      case'!version':
       if(userRole0){
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Current version: " + currentVersion);},400);
        cooldown();
       }
      break;
      case'!subscribe':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " " + userName2 + " Subscriptions help support plug.dj, and they're very cheap! Here's a link to subscribe: http://nazr.in/UKC");},400);
        cooldown();
      break;
      case'!noobscript':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Here is the link to NoobScript: http://nazr.in/URf");},400);
        cooldown();
      break;
      case'!pokemon':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Here is the link to our Pokemon Server: http://nazr.in/UYM");},400);
        cooldown();
      break;
    }
    switch(data.message.slice(0,data.message.indexOf(" "))){
      case'!fresdj':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " " + userTarget8 + " Click here to get Res Dj instantly! [http://nazr.in/Txl]");
        },400);
        cooldown();
      break;
      case'!genre2':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + userTarget8 + " Here is the Nightcore-331 Genre list: [http://www.nightcore-331.net/viewtopic.php?f=6&t=626]");
        },400);
        cooldown();
      break;
      case'!theme2':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + userTarget8 + " Here is the Nightcore-331 Genre list: [http://www.nightcore-331.net/viewtopic.php?f=6&t=626]");
        },400);
        cooldown();
      break;
      case'!rules2':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + userTarget8 + " Please follow the Nightcore-331 rules! [http://www.nightcore-331.net/viewtopic.php?f=6&t=624]");
        },400);
        cooldown();
      break;
      case'!rcs':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " " + userTarget5 + " RCS is a plugin with AutoWoot, AutoJoin, AFK message, custom emotes, and much more! Go check it out: [https://rcs.radiant.dj].");
        },400);
        cooldown();
      break;
      case'!helprcs':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " " + userTarget9 + " The menu for RCS is located at the top right. For more info, visit: [https://rcs.radiant.dj] .");
        },400);
        cooldown();
      break;
      case'!adv':
        if(userRole0){
          setTimeout(function(){API.sendChat("/me 「UB」" + userName2 + " " + userTarget5 + ", advertising is forbidden. It can result in a permaban! Don't post links without permission (Except image links).");
          },400);
        }
        cooldown();
      break;
      case'!spam':
        if(userRole0){
          setTimeout(function(){API.sendChat("/me 「UB」" + userTarget6 + ", please don't spam.");
          },400);
        }
        cooldown();
      break;
      case'!mehspam':
        if(userRole0){
          setTimeout(function(){API.sendChat("/me 「UB」" + userTarget9 + ", please don't spam the meh button.");
          },400);
        }
        cooldown();
      break;
      case'!resdj':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " " + userTarget7 + " Register on the forums [http://nazr.in/Tyu] and then check the Requirements thread before posting your app here: [http://nazr.in/Ubg]");
        },400);
        cooldown();
      break;
      case'!pokemon':
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " " + userTarget9 + " Here is the link to our Pokemon Server: http://nazr.in/UYM");},400);
        cooldown();
      break;
      case'!uid':
        if(userRole0){ //*** FOR TESTING PURPOSES
          setTimeout(function(){API.sendChat("「UB」" + userName2 + " " + userTarget5 + "'s user ID is: " + getId((data.message.split('@')[1]).trim()));},400);
        }
        cooldown();
      break;
    }
  }
}
function cooldown() {
  commandWait = false;
  setTimeout(function(){commandWait=true;},6000);
}
function cooldownShort() {
  commandWait = false;
  setTimeout(function(){commandWait=true;},2000);
}
function toAtOrNotToAt(){
  message = data.message;
  if (message.indexOf !== -1){
  }
}
function getId(username){
  username = username.replace("@","");
  var users=API.getUsers();
  for(var i = 0; i < users.length; i++){
    if(username === users[i].username){
      return users[i].id;
    }
  }
}
API.chatLog("「Utility Bot [ResDj Build]」is now on.", true);
var startMsgUtility = "「Utility Bot [ResDj Build]」loaded.";
API.sendChat(startMsgUtility);
