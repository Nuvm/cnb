//Custom NuvBot made and coded by Nuvm.
//Licensed under the Open GNU License v3.
//Feel free to pull merge requests with new commands and features,
//As well as asking for new ones!

//Changelog
//v0.3.6.1
//Added variables corresponding to below a userRole.
//Added tweak to !ping; Grey users now have a 30-second cooldown on the command.
//v0.3.5.0
//Added command !credits.
//v0.3.4.0
//Added changelog.
//Added command !resdj and !fresdj.

API.chatLog("「CNB」is now running!", true);
var startMsg = "「CNB」v0.3.6.1 is now running! Type !cmd for the list of commands."
API.sendChat(startMsg)
API.on(API.CHAT,completeShutdown);
commandWait = true;
function completeShutdown(data){
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
  var userName = "@" + data.un
  var userName2 = "[@" + data.un + "]"
  var userName3 = data.un
  var userName4 = "[" + data.un + "]"
  if(data.message.slice(0,9) === '.diebitch' && data.uid === 5010460){
    API.sendChat("「CNB」Aww :( Nuvm is so mean to me!");
    API.sendChat("「CNB」Complete Shutdown.");
    API.off(API.CHAT,completeShutdown);
  }
  if(data.message.slice(0,7) === '!revive' && userRole1){
      API.on(API.CHAT,all);
      API.sendChat(startMsg)
    }
  if (commandWait === true){
    API.on(API.CHAT,all);
    function all(data){
      if(data.message.slice(0,5) === '!ping' && userRoleIs0){
        API.sendChat("「CNB」 " + userName2 + " No Pingerino Plserino");
        cooldownLong();
      }
      else if(data.message.slice(0,5) === '!ping' && userRole0){
        API.sendChat("「CNB」 " + userName2 + " No Pingerino Plserino");
        cooldown();
      }
      else if(data.message.slice(0,5) === '!swap'){
      API.sendChat("/me 「CNB」" + userName3 + " used Swap.")
    }
      else if(data.message.slice(0,5) === '!move'){
      API.sendChat("/me 「CNB」" + userName3 + " used Move.")
    }
      else if(data.message.slice(0,4) === '!rcs'){
      var userTarget = data.message.slice(5,255);
      API.sendChat("「CNB」" + userTarget + " RCS is a plugin with AutoWoot, AutoJoin, AFK message, custom emotes, and much more! Go check it out: [https://rcs.radiant.dj].");
      cooldown();
    }
      else if(data.message.slice(0,8) === '!helprcs'){
      var userTarget = data.message.slice(9,255);
      API.sendChat("「CNB」" + userTarget + " The menu for RCS is located at the top right. You can toggle different settings, which includes changing plug.dj's visual settings. For more info, visit [https://rcs.radiant.dj] .");
      cooldown();
    }
      else if(data.message.slice(0,5) === '!call'){
      API.chatLog("#CALLED# " + userName3 + " called you!");
    }
      else if(data.message.slice(0,4) === '!adv'){
      var userTarget = data.message.slice(5,255);
      API.sendChat("/me " + userTarget + ", advertising is forbidden. It can result in a permaban! Don't post links without permission (Except image links).");
      cooldown();
    }
      else if(data.message.slice(0,6) === '!resdj'){
        var userTarget = data.message.slice(7,255);
        API.sendChat("「CNB」" + userTarget + " To get the Resident Dj rank, you have to meet the requirements (insert nazr.in URL here). If you meet them, you can then apply here: [link] Note: You must register in order apply.");
        cooldown();
      }
      else if(data.message.slice(0,7) === '!fresdj'){
        var userTarget = data.message.slice(8,255);
        API.sendChat("「CNB」" + userName4 + " " + userTarget + " Here is a video that explains how to get Resident Dj the fastest way possible: [nazr link]");
        cooldown();
      }
      else if(data.message.slice(0,6) === '!poke1'){
        var userTarget = data.message.slice(7,255);
        API.sendChat("「CNB」:kappa: " + userName + " poked " + userTarget + "! :kappa:");
        cooldown();
      }
      else if(data.message.slice(0,6) === '!poke2'){
      var userTarget = data.message.slice(7,255);
      API.sendChat("「CNB」( ͡° ͜ʖ ͡°) " + userName + " poked " + userTarget + "! ( ͡° ͜ʖ ͡°)");
      cooldown();
    }
      else if(data.message.slice(0,6) === '!magic'){
      var userTarget = data.message.slice(7,255)
      API.sendChat( "「CNB」(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. * ･ ｡ﾟ " + userTarget);
      cooldown();
    }
      else if(data.message.slice(0,11) === '!watermelon'){
        if(data.uid === 5010460){
          var choices = [":watermelon::watermelon:HAIL THE WATERMELON:watermelon::watermelon:",":watermelon::watermelon::watermelon::watermelon::watermelon::watermelon::watermelon:",":watermelon::watermelon:PRAISE WATERMELONS!:watermelon::watermelon:",":watermelon:Watermelons are > 9000!!:watermelon:","No :watermelon: for you! :("];
          var random = choices[Math.floor(Math.random()*choices.length)];
          API.sendChat("「CNB」 :watermelon::watermelon::watermelon: God used a command! :O")
          API.sendChat("「CNB」 " + random);
          cooldown();
        } else {
          var choices = [":watermelon::watermelon:HAIL THE WATERMELON:watermelon::watermelon:",":watermelon::watermelon::watermelon::watermelon::watermelon::watermelon::watermelon:",":watermelon::watermelon:PRAISE WATERMELONS!:watermelon::watermelon:",":watermelon:Watermelons are > 9000!!:watermelon:","No :watermelon: for you! :("];
          var random = choices[Math.floor(Math.random()*choices.length)];
          API.sendChat("「CNB」 " + random);
          cooldown();
        }
      }
      else if(data.message.slice(0,8) === '!disable' && userRole1){
      if(dataelse .message.slice(10,17) === 'utility'){
        API.off(API.CHAT,utility);
        API.chatLog("「CNB」Utility has been disabled.", true);
        console.log("「CNB」Utility has been disabled.");
        API.sendChat("/me 「CNB」Utility has been disabled.");
      }
      if(data.message.slice(10,15) === 'extra'){
        API.off(API.CHAT,extra);
        API.chatLog("「CNB」Extra has been disabled.", true);
        console.log("「CNB」Extra has been disabled.");
        API.sendChat("/me 「CNB」Extra has been disabled.");
      } else {
        API.off(API.CHAT,utility);
        API.off(API.CHAT,extra);
        API.chatLog("「CNB」Utility and Extra have been disabled.", true);
        console.log("「CNB」Utility and Extra have been disabled.");
        API.sendChat("/me「CNB」Utility and Extra have been disabled.");
      }
      cooldown();
    }
      else if(data.message.slice(0,7) === '!enable' && userRole1){
      if(data.message.slice(9,16) === 'utility'){
        API.on(API.CHAT,utility);
        API.chatLog("「CNB」Utility has been enabled.", true);
        console.log("「CNB」Utility has been enabled.");
        API.sendChat("/me 「CNB」Utility has been enabled.");
      }
      if(data.message.slice(9,14) === 'extra'){
        API.on(API.CHAT,extra);
        API.chatLog("「CNB」Extra has been enabled.", true);
        console.log("「CNB」Extra has been enabled.");
        API.sendChat("/me 「CNB」Extra has been enabled.");
      } else {
        API.on(API.CHAT,utility);
        API.on(API.CHAT,extra);
        API.chatLog("「CNB」Utility and Extra have been enabled.", true);
        console.log("「CNB」Utility and Extra have been enabled.");
        API.sendChat("/me 「CNB」Utility and Extra have been enabled.");
      }
      cooldown();
    }
      else if(data.message.slice(0,9) === '!shutdown' && userRole1){
        API.sendChat("/me 「CNB」You hated me. I knew it... </3");
        API.sendChat("/me 「CNB」Shutting down.");
        API.off(API.CHAT,all);
      }
      else if(data.message.slice(0,5) === '!cmd'){
        API.sendChat("「CNB」" + userName2 + " Commands: !rcs @user, !helprcs @user, !call, !adv @user, !resdj, !fresdj, !poke1 @user, !poke2 @user, !magic @user, !watermelon, !cmd");
        API.sendChat("ResDj+ Commands: !ping");
        API.sednChat("Bouncer+ Commands: !shutdown, !revive")
      }
      else if(data.message.slice(0,8) === '!credits'){
        API.sendChat("「CNB」was coded by Nuvm. Special thanks to UMCOOKIES and donvoo who helped with the general coding.")
      }
    }
  }
}
function cooldown() {
  commandWait = false;
  setTimeout(function(){commandWait=true;},10000);
}
function cooldownShort() {
  commandWait = false;
  setTimeout(function(){commandWait=true;},5000);
}
function cooldownLong() {
  commandWait = false;
  setTimeout(function(){commandWait=true;},30000);
}

