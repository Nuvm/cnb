//Custom NuvBot made and coded by Nuvm.
//Licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
//Feel free to pull merge requests with new commands and features,
//As well as asking for new ones!
var positionGivingUsers = [];
var currentVersion = "NuvBuild 1.6.0 Patch 2";
var userPosGive;
var plA;
setInterval(posListAnnouncement,5000);
API.on(API.CHAT,main);
commandWait = true;
function main(data){
  this.data = data;
  var wlPos = API.getWaitListPosition(data.uid)+1;
  var userRole0 = API.getUser(data.uid).role >0;
  var userRole1 = API.getUser(data.uid).role >1;
  var userRole2 = API.getUser(data.uid).role >2;
  var userRole3 = API.getUser(data.uid).role >3;
  var userRoleF1 = API.getUser(data.uid).role <1;
  var userRoleF2 = API.getUser(data.uid).role <2;
  var userRoleF3 = API.getUser(data.uid).role <3;
  var userRoleIs0 = API.getUser(data.uid).role === 0;
  var userRoleIs1 = API.getUser(data.uid).role === 1;
  var userRoleIs2 = API.getUser(data.uid).role === 2;
  var userRoleIs3 = API.getUser(data.uid).role === 3;
  var userRoleIs4 = API.getUser(data.uid).role === 4;
  var userRoleIs5 = API.getUser(data.uid).role === 5;
  var userName = "@" + data.un;
  var userName2 = "[@" + data.un + "]";
  var userName3 = data.un;
  var userName4 = "[" + data.un + "]";
  var userTarget = "@" + data.message.split("@")[1];
  var cmd = ['!ping','!fresdj','!rcs','!helprcs','!blacklist','!call','!adv','!advertising','!spam','!mehspam','!cmd','!disable','!uploaders','!ships','!credits','!randomevent','!donvoo','!makenightcore','!join','!version','!enable derpstaff','!subscribe','!noobscript','!pokemon','!givepos','!take','!removespot','!checkposlist','!clearposlist','!natvoo','!define','!animelist','!nuvm','!givespot'];
  var cmds = ['!rcs','!helprcs','!adv','!spam','!mehspam','!pokemon','!ban','!mute','!smute','!uid','!spot','!flirt','!nuvm'];
  if (commandWait === true){
    if(/^.*(?!skips|skipped|history|no|don't|dont|not|why).*skip.*$/i.test(data.message)){
      if(API.getUser(data.uid).role === 0){
        if(data.message.slice(14,255) === ''){
          API.sendChat("「UB」" + userName + ", don't ask for skips.");
          API.moderateDeleteChat(data.cid);
        }
      }
    }
    switch(data.message.slice(0,1)){
      case'!':
        if(data.message.indexOf('@')!==-1){
          for(i=0;i<cmds.length;i++){
            if(data.message.slice(0,cmds[i].length)==cmds[i]){
              if(getId((data.message.split('@')[1]).trim())===undefined){
                API.sendChat("「UB」" + userName2 + " The user you mentionned doesn't exist!");
              } else {
                c2(data,cmds[i]);
              }
            }
          }
        } else {
          for(i=0;i<cmd.length;i++){
            if(data.message.slice(0,cmd[i].length)==cmd[i]){
              c1(data,cmd[i]);
            }
          }
        }
      break;
    }
  }
}
function c1(data,cn){
  this.data = data;
  var wlPos = API.getWaitListPosition(data.uid)+1;
  var userRole0 = API.getUser(data.uid).role >0;
  var userRole1 = API.getUser(data.uid).role >1;
  var userRole2 = API.getUser(data.uid).role >2;
  var userRole3 = API.getUser(data.uid).role >3;
  var userRoleF1 = API.getUser(data.uid).role <1;
  var userRoleF2 = API.getUser(data.uid).role <2;
  var userRoleF3 = API.getUser(data.uid).role <3;
  var userRoleIs0 = API.getUser(data.uid).role === 0;
  var userRoleIs1 = API.getUser(data.uid).role === 1;
  var userRoleIs2 = API.getUser(data.uid).role === 2;
  var userRoleIs3 = API.getUser(data.uid).role === 3;
  var userRoleIs4 = API.getUser(data.uid).role === 4;
  var userRoleIs5 = API.getUser(data.uid).role === 5;
  var userName = "@" + data.un;
  var userName2 = "[@" + data.un + "]";
  var userName3 = data.un;
  var userName4 = "[" + data.un + "]";
  var userTarget = "@" + data.message.split("@")[1];
  switch(cn){
    case'!ping':
      if(userRole0){
        API.sendChat("「UB」" + userName2 + " Pong!");
        cooldown();
      }
    break;
    case'!fresdj':
      setTimeout(function(){API.sendChat("「UB」" + userName2 + " Click here to get Res Dj instantly! [https://goo.gl/jbHK8F]");},400);
      cooldown();
    break;
    case'!rcs':
      setTimeout(function(){API.sendChat("「UB」" + userName2 + " RCS is a plugin with AutoWoot, AutoJoin, AFK message, custom emotes, and much more! Go check it out: [https://rcs.radiant.dj].");},400);
      cooldown();
    break;
    case'!helprcs':
      setTimeout(function(){API.sendChat("「UB」" + userName2 + " The menu for RCS is located at the top right. For more info, visit: [https://rcs.radiant.dj] .");},400);
      cooldown();
    break;
    case'!blacklist':
      setTimeout(function(){API.sendChat("「UB」" + userName2 + " The SEASONAL, JUNK and THEME blacklists can be found here: [http://www.umcookies.com/blacklist.php]");},400);
      cooldown();
    break;
    case'!call':
      API.chatLog("#CALLED# " + userName3 + " called you!");
    break;
    case'!adv':
      if(userRole0){
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Advertising is forbidden. It can result in a permaban! Don't post links without permission (Except image links).");},400);
      }
      cooldown();
    break;
    case'!advertising':
      if(userRole0){
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Advertising is forbidden. It can result in a permaban! Don't post links without permission (Except image links).");},400);
      }
      cooldown();
    break;
    case'!spam':
      if(userRole0){
        setTimeout(function(){API.sendChat("「UB」Please don't spam!");},400);
      }
      cooldown();
    break;
    case'!mehspam':
      if(userRole0){
        setTimeout(function(){API.sendChat("「UB」Please don't spam the meh button.");},400);
      }
      cooldown();
    break;
    case'!genre2':
      setTimeout(function(){API.sendChat("「UB」" + userName2 + " Here is the Nightcore-331 Genre list: [http://www.nightcore-331.net/viewtopic.php?f=6&t=626]");},400);
      cooldown();
    break;
    case'!theme2':
      setTimeout(function(){API.sendChat("「UB」" + userName2 + " Here is the Nightcore-331 Genre list: [http://www.nightcore-331.net/viewtopic.php?f=6&t=626]");},400);
      cooldown();
    break;
    case'!rules2':
      setTimeout(function(){API.sendChat("「UB」" + userName2 + " Please follow the Nightcore-331 rules! [http://www.nightcore-331.net/viewtopic.php?f=6&t=624]");},400);
        cooldown();
    break;
    case'!cmd':
      if(currentVersion.slice(0,8) === "NuvBuild"){
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Commands list: [https://goo.gl/cUOV82]");},400);
      } else if(currentVersion.slice(0,8) === "ResBuild"){
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Commands list: [https://goo.gl/He51ui]");},400);
      } else if(currentVersion.slice(0,6) === "Stable"){
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Commands list: [https://goo.gl/NARv98]");},400);
      }
      cooldown();
    break;
    case'!disable':
      if(data.uid === 5010460){
        setTimeout(function(){API.sendChat("/me 「Utility Bot」has been disabled by " + userName3 + ".");API.off(API.CHAT,main);},400);}
      else if(userRole2){
        setTimeout(function(){API.sendChat("/me 「Utility Bot」has been disabled by " + userName3 + ".");API.off(API.CHAT,main);},400);}
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
    case'!donvoo':
      if(data.uid === 4537120){
        setTimeout(function(){API.sendChat("「UB」I must confess! Donvoo... donvoo has always been the one to be so gentle, caring and smexy. Th-that's why.. :yellow_heart::blue_heart::blush::blue_heart::yellow_heart:");
        },400);
        cooldown();
      } else {
       setTimeout(function(){API.sendChat("「UB」" + userName2 + " Sorry, this command is not for you.");
        },400);
        cooldown();
      }
    break;
    /*case'!makenightcore':
      setTimeout(function(){API.sendChat("「UB」" + userName2 + " Here's a link that explains how to make nightcore: [http://nazr.in/UEM]");},400);
      cooldown();
    break;*/
    case'!join':
      if(data.message.slice(0,9)!=='!jointime'){
        setTimeout(function(){API.sendChat("「UB」" + userName + ", this isn't Tastycat! (This command does not exist)");},400);
      }
      cooldown();
    break;
    case'!version':
     if(userRole0){
      setTimeout(function(){API.sendChat("「UB」" + userName2 + " Current version: " + currentVersion);},400);
      cooldown();
     }
    break;
    case'!enable derpstaff':
      console.log('Derpstaff is currently disabled.');
      /*if(confirm(data.un + " (" + data.uid + ") wants to enable DerpStaff Mode.") === true){
        if(data.uid === 5010460){
          API.sendChat("「UB」DerpStaff Mode (beta) enabled.");
          API.on(API.CHAT,extra);
        } else if(userRole2) {
          API.sendChat("「UB」DerpStaff Mode (beta) enabled.");
          API.on(API.CHAT,extra);
        }
      }*/
    break;
    /*case'!subscribe':
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
    break;*/
    case'!givepos':
      if(positionGivingUsers.indexOf(data.un) === -1){
        if(wlPos !== 0){
          setTimeout(function(){API.sendChat("「UB」" + userName + " is giving away his/her spot: " + wlPos + ". Write !take to claim the spot.");},400);
        } else if(wlPos === -1){
          setTimeout(function(){API.sendChat("「UB」" + userName2 + " You are not in the waitlist, therefore you cannot give your spot.");},400);
          cooldown();
        }
      } else if(positionGivingUsers.indexOf(data.un) !== -1){
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " You are already giving out your position!");},400);
        cooldown();
      }
    break;
    case'!take':
      if(userPosGive === true){
        if(positionGivingUsers.indexOf(data.un) === -1){
          var positionGivingUser = positionGivingUsers[0];
          positionGivingUsers.shift();
          if(positionGivingUsers[0] === undefined){
            userPosGive = false;
          }
          setTimeout(function(){API.sendChat("/me 「UB」" + userName + " has taken @" + positionGivingUser + "'s spot.");},400);
          setTimeout(function(){API.sendChat("!swap " + userName + " @" + positionGivingUser);},800);
        } else {
          setTimeout(function(){API.sendChat("「UB」" + userName2 + " You can't take your own spot! Write !removespot instead.");},400);
        }
      }
    break;
    case'!removespot':
      if(positionGivingUsers.indexOf(data.un) !== -1){
        var userSpotToRemove = positionGivingUsers.indexOf(data.un);
        positionGivingUsers.splice(userSpotToRemove,1);
        setTimeout(function(){API.sendChat("「UB」" + userName + " isn't giving out their spot anymore.");},400);
      }
    break;
    case'!checkposlist':
      if(positionGivingUsers[0] !== undefined){
        console.log(positionGivingUsers[0]);
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " Current people giving away their position: " + positionGivingUsers + ". To see their current waitlist position, use the command !spot.");},400);
      } else if(positionGivingUsers[0] === undefined){
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " No one is currently giving away their position.");},400);
      }
    break;
    case'!clearposlist':
      if((data.uid).role >1){
        positionGivingUsers.splice(0,20);
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " The list of people giving out their position has been cleared.");},400);
      } else if(data.uid === 5010460){
        positionGivingUsers.splice(0,20);
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " The list of people giving out their position has been cleared.");},400);
      }
    break;
    case'!define':
      if(data.message.indexOf(" ")!==-1 && userRole0){
        var toDef = data.message.slice(8,255).replace(" ","+");
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " http://urbandictionnary.com/define.php?term=" + toDef);},400);
      }
      cooldown();
    break;
    case'!natvoo':
      var plsChoose = [' promotes this ship: http://i.imgur.com/p9jXVoW.jpg',' promotes this ship: https://i.imgur.com/yCDGRbb.png'];
      var soRandom = plsChoose[Math.floor(Math.random()*plsChoose.length)];
      if(userRole0){
        setTimeout(function(){API.sendChat("「UB」" + userName + soRandom);},600);
        cooldown();
      }
    break;
    case'!animelist':
      if(data.message.indexOf(" ")!==-1 && userRole0){
        var toList = data.message.slice(8,255).replace(" ","+");
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " http://myanimelist.net/animelist/" + toList);},400);
        cooldown();
      } else if(data.message.indexOf(" ")===-1){
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " http://myanimelist.net/animelist/Nuvm");},400);
        cooldown();
      }
    break;
    case'!nuvm':
      setTimeout(function(){API.sendChat("「UB」" + userName2 + " Nuvm's website: http://nuvm.net16.net");},400);
      cooldown();
    break;
    case'!givespot':
      if(positionGivingUsers.indexOf(data.un) === -1){
        if(wlPos !== 0){
          setTimeout(function(){API.sendChat("「UB」" + userName + " is giving away his/her spot: " + wlPos + ". Write !take to claim the spot.");},400);
        } else if(wlPos === -1){
          setTimeout(function(){API.sendChat("「UB」" + userName2 + " You are not in the waitlist, therefore you cannot give your spot.");},400);
          cooldown();
        }
      } else if(positionGivingUsers.indexOf(data.un) !== -1){
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " You are already giving out your position!");},400);
        cooldown();
      }
    break;
  }
}
function c2(data,cn){
  this.data = data;
  var wlPos = API.getWaitListPosition(data.uid)+1;
  var userRole0 = API.getUser(data.uid).role >0;
  var userRole1 = API.getUser(data.uid).role >1;
  var userRole2 = API.getUser(data.uid).role >2;
  var userRole3 = API.getUser(data.uid).role >3;
  var userRoleF1 = API.getUser(data.uid).role <1;
  var userRoleF2 = API.getUser(data.uid).role <2;
  var userRoleF3 = API.getUser(data.uid).role <3;
  var userRoleIs0 = API.getUser(data.uid).role === 0;
  var userRoleIs1 = API.getUser(data.uid).role === 1;
  var userRoleIs2 = API.getUser(data.uid).role === 2;
  var userRoleIs3 = API.getUser(data.uid).role === 3;
  var userRoleIs4 = API.getUser(data.uid).role === 4;
  var userRoleIs5 = API.getUser(data.uid).role === 5;
  var userName = "@" + data.un;
  var userName2 = "[@" + data.un + "]";
  var userName3 = data.un;
  var userName4 = "[" + data.un + "]";
  var userTarget = "@" + data.message.split("@")[1];
  switch(cn){
    case'!genre2':
      setTimeout(function(){API.sendChat("「UB」" + userName2 + " " + userTarget + " Here is the Nightcore-331 Genre list: [http://www.nightcore-331.net/viewtopic.php?f=6&t=626]");
      },400);
      cooldown();
    break;
    case'!theme2':
      setTimeout(function(){API.sendChat("「UB」" + userName2 + " " + userTarget + " Here is the Nightcore-331 Genre list: [http://www.nightcore-331.net/viewtopic.php?f=6&t=626]");
      },400);
      cooldown();
    break;
    case'!rules2':
      setTimeout(function(){API.sendChat("「UB」" + userName2 + " " + userTarget + " Please follow the Nightcore-331 rules! [http://www.nightcore-331.net/viewtopic.php?f=6&t=624]");
      },400);
      cooldown();
    break;
    case'!rcs':
      setTimeout(function(){API.sendChat("「UB」" + userName2 + " " + userTarget + " RCS is a plugin with AutoWoot, AutoJoin, AFK message, custom emotes, and much more! Go check it out: [https://rcs.radiant.dj].");
      },400);
      cooldown();
    break;
    case'!helprcs':
      setTimeout(function(){API.sendChat("「UB」" + userName2 + " " + userTarget + " The menu for RCS is located at the top right. For more info, visit: [https://rcs.radiant.dj] .");
      },400);
      cooldown();
    break;
    case'!adv':
      if(userRole0){
        setTimeout(function(){API.sendChat("/me 「UB」" + userName2 + " " + userTarget + ", advertising is forbidden. It can result in a permaban! Don't post links without permission (Except image links).");
        },400);
      }
      cooldown();
    break;
    case'!spam':
      if(userRole0){
        setTimeout(function(){API.sendChat("/me 「UB」" + userTarget + ", please don't spam.");
        },400);
      }
      cooldown();
    break;
    case'!mehspam':
      if(userRole0){
        setTimeout(function(){API.sendChat("/me 「UB」" + userTarget + ", please don't spam the meh button.");
        },400);
      }
      cooldown();
    break;
    /*case'!pokemon':
      setTimeout(function(){API.sendChat("「UB」" + userName2 + " " + userTarget + " Here is the link to our Pokemon Server: http://nazr.in/UYM");},400);
      cooldown();
    break;*/
    case'!ban':
      if(userRole1){
        if(/^[0-9]+$/.test(data.message.slice(5,11))){
          setTimeout(function(){API.sendChat("/me 「UB」" + userName + " Banned for an hour the user with the UID: " + data.message.slice(5,11));},400);
          setTimeout(function(){API.moderateBanUser(userTarget,1,API.BAN.HOUR);},900);
        } else if(data.message.split('@')[1] !== undefined){
          setTimeout(function(){API.sendChat("/me 「UB」" + userName + " Banned " + userTarget + " for an hour.");},400);
          setTimeout(function(){API.moderateBanUser(getId((data.message.split('@')[1]).trim()),1,API.BAN.HOUR);},900);
        } else {
          setTimeout(function(){API.sendChat("「UB」" + userName2 + " Couldn't execute command! Make sure you have specified either a user ID or a username.");},400);
        }
      }
    break;
    case'!mute':
      if(userRole1){
        if(/^[0-9]+$/.test(data.message.slice(6,12))){
          setTimeout(function(){API.sendChat("/me 「UB」" + userName + " Muted for 45 minutes the user with the UID: " + data.message.slice(6,12));},400);
          setTimeout(function(){API.moderateMuteUser(userTarget,3,API.MUTE.LONG);},900);
        } else if(data.message.split('@')[1] !== undefined){
          setTimeout(function(){API.sendChat("/me 「UB」" + userName + " Muted " + userTarget + " for 45 minutes.");},400);
          setTimeout(function(){API.moderateMuteUser(getId((data.message.split('@')[1]).trim()),3,API.MUTE.LONG);},900);
        } else {
          setTimeout(function(){API.sendChat("「UB」" + userName2 + " Couldn't execute command! Make sure you have specified either a user ID or a username.");},400);
        }
      }
    break;
    case'!smute':
      if(userRole1){
        if(/^[0-9]+$/.test(data.message.slice(7,13))){
          setTimeout(function(){API.sendChat("/me 「UB」" + userName + " Used a Silent Mute.");},400);
          setTimeout(function(){API.moderateMuteUser(userTarget,3,API.MUTE.LONG);},900);
        } else if(data.message.split('@')[1] !== undefined){
          setTimeout(function(){API.sendChat("/me 「UB」" + userName + " Used a Silent Mute.");},400);
          setTimeout(function(){API.moderateMuteUser(getId((data.message.split('@')[1]).trim()),3,API.MUTE.LONG);},900);
        } else {
          setTimeout(function(){API.sendChat("「UB」" + userName2 + " Couldn't execute command! Make sure you have specified either a user ID or a username.");},400);
        }
      }
    break;
    case'!uid':
      if(userRole0){
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " " + userTarget + "'s user ID is: " + getId((data.message.split('@')[1]).trim()));},400);
      }
      cooldown();
    break;
    case'!spot':
      if(userTarget!==-1){
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " " + userTarget + "'s current position in the wailist is: " + API.getWaitListPosition(getId((data.message.split('@')[1]).trim()))+1 + ".");},400);
      } else {
        setTimeout(function(){API.sendChat("「UB」" + userName2 + " " + userTarget + " is not in the waitlist.");},400);
      }
      cooldown();
    break;
    case'!flirt':
      var choose = ["the human body is 90% water, and I'm real thirsty.","can I buy you a drink or do you just want the money?","with a mane like that you must be a Leo.","do you have a mirror in your pants? Because I can see myself in them.","are your legs tired? Because you have been running through my dreams all night.","is your father a thief? Because he stole the stars fomr the skies and put them in your eyes.","are you okay? It must have been a long fall from Heaven","I really like that outfit. It would look great crumpled at the end of my bed.","what do you like to eat for breakfast? Oh good, I have that.","I know they say milk does a body good - but damn, how much have you been drinking?","so, are you legal?","I have cable TV.","if I told you that you have a lovely body, would you hold it against me?","did the sun just come out or did you smile at me?","is it hot in here, or is it just you?","do you believe in love at first sight or do I have to walk by you again?","I lost my phone number... Can I have yours?","if you were a burger at McDonald's, I'd call you McBeautiful.","my name's _____. But you can call me.... tonight.","no wonder the sky's gray today - all the blue is in your eyes.","what's your name? Or shall I just call you mine?","if I could rearrange the alphabet, I'd put U and I together.","look at you with all those curves and me with no brakes!","I may not be Fred Flinstone/Wilma Flintstone, but I can sure make your bed rock!","do you have raisins? No? How about a date?","do you have a Band-Aid? 'Cause I skinned my knee when I fell for you.","can I have a picture of you so I can show Santa what I want for Christmas?","my bed is broken. Can I sleep in yours?","I'm not feeling myself tonight. Can I feel you?","my name is _____. Remember that, you'll be screaming it later.","is that a ladder in your stockings or the stairway to Heaven?","I may not be the best looking guy/girl in here, but I'm the only one talking to you.","*licks finger and wipes on his/her shirt* Let's get you out of these wet clothes.","did u sit on sugar? Because you have a sweet ass."," is your dad a baker? 'Cuz you have good buns.","is your dad a terrorist? 'Cuz you're the bomb.","pickup lines are overrated. Go out with me?","do you live in a corn field? 'Cuz I could stalk you all day.","is your name Google? 'Cuz you have everything I'm searching for.","do you like legos? 'Cuz I think you and I should build a relationship together.","do you have a map? I'm getting lost in your eyes.","are you a weeping angel because I can't keep my eyes from you.","if I got a euro for everytime I thought of you, I would have one euro because you never leave my mind."];
      var selection = choose[Math.floor(Math.random()*choose.length)];
      if(userRole0){
        setTimeout(function(){API.sendChat("「UB」" + userName + " says to " + userTarget + ": Hey, " + selection);},600);
        cooldown();
      }
    break;
    case'!nuvm':
      setTimeout(function(){API.sendChat("「UB」" + userName2 + " " + userTarget + " Nuvm's website: http://nuvm.net16.net");},400);
      cooldown();
    break;
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
function getId(username){
  username = username.replace("@","");
  var users=API.getUsers();
  for(var i = 0; i < users.length; i++){
    if(username === users[i].username){
      return users[i].id;
    }
  }
}
API.on(API.CHAT,psg);
function psg(data){
  this.data = data;
  if(data.message.slice(0,9) === '!givepos' || data.message.slice(0,10) === '!givespot'){
    if(positionGivingUsers.indexOf(data.un) === -1){
      if(API.getWaitListPosition(data.uid) !== -1){
        userPosGive = true;
        positionGivingUsers.push(data.un);
      }
    }
  }
}
function posListAnnouncement(){
  var pLA;
  var plA;
  if(userPosGive === true && plA !== true){
    if(positionGivingUsers.length>1){
      pLA = setTimeout(function(){API.sendChat("「UB」" + positionGivingUsers + " are giving away their position. Write !take to claim their spot.");},40000);
    } else {
      pLA = setTimeout(function(){API.sendChat("「UB」" + positionGivingUsers + " is giving away their position. Write !take to claim their spot.");},40000);
    }
    plA = true;
  }
  if(positionGivingUsers[0] === undefined){
    clearTimeout(pLA);
    userPosGive = false;
    plA = true;
  }
}
/*function extra(data){
  this.data = data;
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
  var userTarget = data.message.split("@")[1];
  if (commandWait === true){
    switch(data.message){
      case'!magic':
        setTimeout(function(){API.sendChat( "「UB」(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. * ･ ｡ﾟ ");
        },600);
        cooldown();
      break;
      case'!stop derpstaff':
        if(data.uid === 5010460){
            API.sendChat("/me 「UB」DerpyStaff Mode has been disabled by " + userName3 + ".");
            API.off(API.CHAT,extra);
          }
        else if(userRole2){
            API.sendChat("/me 「UB」DerpyStaff Mode has been disabled by " + userName3 + ".");
            API.off(API.CHAT,extra);
          }
      break;
      case'!watermelon':
        var choices = [":watermelon::watermelon:HAIL THE WATERMELON:watermelon::watermelon:",":watermelon::watermelon::watermelon::watermelon::watermelon::watermelon::watermelon:",":watermelon::watermelon:PRAISE WATERMELONS!:watermelon::watermelon:",":watermelon:Watermelons are > 9000!!:watermelon:","No :watermelon: for you! :("];
        var random = choices[Math.floor(Math.random()*choices.length)];
        if(data.uid === 3852661){
         setTimeout(function(){API.sendChat("「UB」Kage says: I am the :watermelon: God. ");
            },600);
            setTimeout(function(){API.sendChat("「UB」 " + random);
            },600);
            cooldown();
        } else {
         setTimeout(function(){API.sendChat("「UB」 " + random);
            },600);
            cooldown();
        }
      break;
      case'!fruit':
        var fruits = ["an :apple: !","a :watermelon: !","a :banana: !","a :pineapple: !","a :strawberry: !","a :peach: !","a :bomb: ! ...OH SHI - :boom:"];
        var fruitSelection = fruits[Math.floor(Math.random()*fruits.length)];
        setTimeout(function(){API.sendChat("「UB」" + userName + " plunged his/her hand into the fruit basket.... and found " + fruitSelection);
        },600);
        cooldown();
      break;
    }
    switch(data.message.slice(0,data.message.indexOf(" "))){
      case'!poke1':
       setTimeout(function(){API.sendChat("「UB」:kappa: " + userName + " poked " + userTarget + "! :kappa:");
        },600);
        cooldown();
      break;
      case'!poke2':
       setTimeout(function(){API.sendChat("「UB」( ͡° ͜ʖ ͡°) " + userName + " poked " + userTarget + "! ( ͡° ͜ʖ ͡°)");
        },600);
        cooldown();
      break;
      case'!magic':
       setTimeout(function(){API.sendChat( "「UB」(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. * ･ ｡ﾟ " + userTarget);
        },600);
        cooldown();
      break;
      case'!hug':
       setTimeout(function(){API.sendChat("「UB」" + userName + " gives a hug to " + userTarget + " !");
        },600);
        cooldown();
      break;
      case'!pizza':
        if(data.uid === 3430555){
          setTimeout(function(){API.sendChat("「UB」:pizza::pizza: Pizza for @HiBiscuits! :pizza::pizza:");
          },600);
          setTimeout(function(){API.sendChat("「UB」" + userTarget + ", you received a :pizza: from " + userName + " !");
          },600);
          cooldown();
        } else {
          setTimeout(function(){API.sendChat("「UB」" + userTarget + ", you received a :pizza: from " + userName + " !");
          },600);
          cooldown();
        }
      break;
      case'!flirt':
        var choose = ["the human body is 90% water, and I'm real thirsty.","can I buy you a drink or do you just want the money?","with a mane like that you must be a Leo.","do you have a mirror in your pants? Because I can see myself in them.","are your legs tired? Because you have been running through my dreams all night.","is your father a thief? Because he stole the stars fomr the skies and put them in your eyes.","are you okay? It must have been a long fall from Heaven","I really like that outfit. It would look great crumpled at the end of my bed.","what do you like to eat for breakfast? Oh good, I have that.","I know they say milk does a body good - but damn, how much have you been drinking?","so, are you legal?","I have cable TV.","if I told you that you have a lovely body, would you hold it against me?","did the sun just come out or did you smile at me?","is it hot in here, or is it just you?","do you believe in love at first sight or do I have to walk by you again?","I lost my phone number... Can I have yours?","if you were a burger at McDonald's, I'd call you McBeautiful.","my name's _____. But you can call me.... tonight.","no wonder the sky's gray today - all the blue is in your eyes.","what's your name? Or shall I just call you mine?","if I could rearrange the alphabet, I'd put U and I together.","look at you with all those curves and me with no brakes!","I may not be Fred Flinstone/Wilma Flintstone, but I can sure make your bed rock!","do you have raisins? No? How about a date?","do you have a Band-Aid? 'Cause I skinned my knee when I fell for you.","can I have a picture of you so I can show Santa what I want for Christmas?","my bed is broken. Can I sleep in yours?","I'm not feeling myself tonight. Can I feel you?","my name is _____. Remember that, you'll be screaming it later.","is that a ladder in your stockings or the stairway to Heaven?","I may not be the best looking guy/girl in here, but I'm the only one talking to you.","*licks finger and wipes on his/her shirt* Let's get you out of these wet clothes.","did u sit on sugar? Because you have a sweet ass."," is your dad a baker? 'Cuz you have good buns.","is your dad a terrorist? 'Cuz you're the bomb.","pickup lines are overrated. Go out with me?","do you live in a corn field? 'Cuz I could stalk you all day.","is your name Google? 'Cuz you have everything I'm searching for.","do you like legos? 'Cuz I think you and I should build a relationship together.","do you have a map? I'm getting lost in your eyes.","are you a weeping angel because I can't keep my eyes from you.","if I got a euro for everytime I thought of you, I would have one euro because you never leave my mind."];
        var selection = choose[Math.floor(Math.random()*choose.length)];
        if(userRole0){
          setTimeout(function(){API.sendChat("「UB」" + userName + " says to " + userTarget + ": Hey smexy, " + selection);
          },600);
          cooldown();
        } else {
          setTimeout(function(){API.sendChat("「UB」" + userName + " says to " + userTarget + ": Hey, " + selection);
          },600);
          cooldown();
        }
      break;
      case'!stab':
        if(userRole3){
          var choose5 = [', and succeeded!',', and succeeded!',', and succeeded!',', and succeeded!',', and succeeded!',', and succeeded!',', and succeeded!',', but failed!'];
          var random2 = choose5[Math.floor(Math.random()*choose5.length)];
          setTimeout(function(){API.sendChat("「UB」" + userName + " tried to stab " + userTarget + random2);
          },600);
          cooldownShort();
        } else if(userRole2){
          var choose2 = [', and succeeded!',', and succeeded!',', and succeeded!',', but failed!'];
          var random3 = choose2[Math.floor(Math.random()*choose2.length)];
          setTimeout(function(){API.sendChat("「UB」" + userName + " tried to stab " + userTarget + random3);
          },600);
          cooldown();
        } else if(userRole1) {
          var choose3 = [', and succeeded!',', and succeeded!',', but failed!'];
          var random4 = choose3[Math.floor(Math.random()*choose3.length)];
          setTimeout(function(){API.sendChat("「UB」" + userName + " tried to stab " + userTarget + random4);
          },600);
          cooldown();
        } else if(userRole0) {
          var choose4 = [', and succeeded!',', but failed!'];
          var random5 = choose4[Math.floor(Math.random()*choose4.length)];
          setTimeout(function(){API.sendChat("「UB」" + userName + " tried to stab " + userTarget + random5);
          },600);
          cooldown();
        } else if(userRoleIs0){
          var choose6 = [', and succeeded!',', but failed!',', but failed!'];
          var random6 = choose6[Math.floor(Math.random()*choose6.length)];
          setTimeout(function(){API.sendChat("「UB」" + userName + " tried to stab " + userTarget + random6);
          },600);
          cooldown();
        } else {
          var choose7 = [', and succeeded!',', and succeeded!',', and succeeded!',', but failed!'];
          var random7 = choose7[Math.floor(Math.random()*choose7.length)];
          setTimeout(function(){API.sendChat("「UB」" + userName + " tried to stab " + userTarget + random7);
          },600);
          cooldownShort();
        }
      break;
      case'!natvoo':
        var plsChoose = [' promotes this ship: http://i.imgur.com/p9jXVoW.jpg',' promotes this ship: https://i.imgur.com/yCDGRbb.png'];
        var soRandom = plsChoose[Math.floor(Math.random()*plsChoose.length)];
        setTimeout(function(){API.sendChat("「UB」" + userName + soRandom);
        },600);
        cooldown();
      break;
    }
  }
}*/

API.chatLog("「Utility Bot」is now on.", true);
var startMsgUtility = "「 Utility Bot [" + currentVersion + "] 」is now active. Type !cmd for a list of commands.";
API.sendChat(startMsgUtility);
//data.message.slice(0,data.message.indexOf(" "))
//getId((data.message.split('@')[1]).trim())
