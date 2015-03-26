//Custom NuvBot made and coded by Nuvm.
//Licensed under the Open GNU License v3.
//Feel free to pull merge requests with new commands and features,
//As well as asking for new ones!
 
//Changelog
//v0.6.0.4
//Fixed swap and skip to trigger on Bouncer+.
//v0.6.0.2
//Tweaked var qkCd; increased from 100ms to 400ms.
//v0.6.0
//Added var qkCd, which delays the answer to a command to let the main bot delete the command before sending the message.
//v0.5.23
//Added !nuvm image command.
//v0.5.22.1
//Tweaked !natvoo command.
//Rename faulty !commands to !cmd.
//v0.5.22
//Added Skip detection.
//Added !blacklists command.
//Renamed !reload to !update.
//v0.5.20.1
//Fixed again the !stab command.
//Added !reload command to tell what is the next update about.
//v0.5.19.1
//Changed version system.
//Fixed !stab command.
//Added !natvoo command.
//v0.5.7.1
//Added the Flandre Scarlet clearchat alert.
//v0.5.7
//Added commands !pizza, !stab, !hug, !uploaders, !credits, !flirt, !watermelon.
//Fixed some issues.
//v0.5.1
//Even more debugging by donvoo! Fixed issues with targetable commands not working.
//Added the !donvoo command.
//v0.5
//Enormous debugging, big thanks to donvoo.
//Fixed variables.
//Fixed doublefunction and doubleswitch problems.
//v0.4.2.1
//Added links to !resdj and !fresdj.
//Changed command !fresdj 's userRole to Bouncer+.
//Added command !credits to list of cmds
//Added !spam command.
//v0.4.1.1
//Disabled command !revive.
//v0.4.1
//Tweaked the code to make the command !revive functionnal again.
//v0.4
//Changed the else if system to a switch() system.
//Disabled command !enable and !disable.
//Changed default cooldown from 10 to 18 seconds.
//Changed the cooldown of the !ping command for grey users from 30 to 45 seconds.
//v0.3.6.1
//Added variables corresponding to below a userRole.
//Added tweak to !ping; Grey users now have a 30-second cooldown on the command.
//v0.3.5.0
//Added command !credits.
//v0.3.4.0
//Added changelog.
//Added command !resdj and !fresdj.
 
API.chatLog("「CNB」is now running!", true);
var startMsg = "「CNB」v0.6.0.4 is now running! Type !cmd for a list of commands. //Fixed !swap and !skip to Bouncer+ \\";
//API.sendChat(startMsg);
API.on(API.CHAT,full);
commandWait = true;

function full(data){
  this.data = data;
  var qkCd = setTimeout(400);
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
          API.sendChat("「CNB」" + userName2 + " No Pingerino Plserino");
          cooldownLong();
        } else if(userRole0){
          API.sendChat("「CNB」" + userName2 + " No Pingerino Plserino");
          cooldown();
        }
      break;
      case'!skip':
       if(userRole1){
        API.sendChat("/me 「CNB」" + userName3 + " used Skip.");
       }
      break;
      case'!rcs':
        qkCd;
        API.sendChat("「CNB」RCS is a plugin with AutoWoot, AutoJoin, AFK message, custom emotes, and much more! Go check it out: [https://rcs.radiant.dj].");
        cooldown();
      break;
      case'!helprcs':
       qkCd;
        API.sendChat("「CNB」The menu for RCS is located at the top right. You can toggle different settings, which includes changing plug.dj's visual settings. For more info, visit [https://rcs.radiant.dj] .");
        cooldown();
      break;
      case'!blacklists':
       qkCd;
        API.sendChat("「CNB」" + userName2 + " The SEASONAL, JUNK and THEME blacklists can be found here: http://www.umcookies.com/blacklist.php");
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
       qkCd;
        API.sendChat("「CNB」Register on the forums [http://nazr.in/Tyu] and then check the Requirements thread before posting your app here: [http://nazr.in/Ubg]");
        cooldown();
      break;
      //case'!magic':
        //API.sendChat( "「CNB」(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. * ･ ｡ﾟ ");
        //cooldown();
      //break;
      case'!cmd':
       qkCd;
        API.sendChat("「CNB」" + userName2 + " Commands: !rcs, !helprcs, !call, !adv, !spam, !resdj, !fresdj, !poke1, !poke2, !magic, !watermelon, !cmd, !credits, !uploaders, !stab, !flirt, !donvoo, !credits, !hug, !pizza");
        cooldownLong();
      break;
      case'!nuvm':
        qkCd;
        API.sendChat("/me http://i1302.photobucket.com/albums/ag137/nelsonmonty/poledancingchicken_zpse9fe4791.gif");
        cooldownLong();
      break;
      case'!shutdown':
        if(data.uid === 5010460){
         qkCd;
            API.sendChat("/me 「CNB」Nuvm, you hated me. I knew it... </3 Shutting down.");
            API.off(API.CHAT,full);
          }
        else if(userRole3){
         qkCd;
            API.sendChat("/me 「CNB」Hosts hate me... I knew it.. :'( </3 Shutting down.");
            API.off(API.CHAT,full);
          }
      break;
      case'!donvoo':
        if(data.uid === 4537120){
         qkCd;
          API.sendChat("「CNB」I must confess! Donvoo... donvoo has always been the one to be so gentle, caring and smexy. Th-that's why.. :yellow_heart::blue_heart::blush::blue_heart::yellow_heart:");
          cooldown();
        } else if(userRole2) {
         qkCd;
          API.sendChat("「CNB」Sorry, this command is not for you.");
          cooldown();
        } else {
         qkCd;
          API.sendChat("「CNB」Skrubs can't use this command, sorry. :kappa:");
          cooldown();
        }
      break;
      case'!watermelon':
        var choices = [":watermelon::watermelon:HAIL THE WATERMELON:watermelon::watermelon:",":watermelon::watermelon::watermelon::watermelon::watermelon::watermelon::watermelon:",":watermelon::watermelon:PRAISE WATERMELONS!:watermelon::watermelon:",":watermelon:Watermelons are > 9000!!:watermelon:","No :watermelon: for you! :("];
        var random = choices[Math.floor(Math.random()*choices.length)];
        if(data.uid === 3852661){
         qkCd;
            API.sendChat("「CNB」Kage says: I am the :watermelon: God. ");
            qkCd;
            API.sendChat("「CNB」 " + random);
            cooldown();
        } else {
         qkCd;
            API.sendChat("「CNB」 " + random);
            cooldown();
        }
      break;
      case'!uploaders':
       qkCd;
        API.sendChat("「CNB」Here's a link to the YouTube channels of our staff: [http://donvoo.github.io/uploaders]");
        cooldownLong();
      break;
      case'https://33.media.tumblr.com/0f3e68fc2dd193659ff12b4555333a9f/tumblr_myr7fcu22U1rhqawao1_500.gif':
       qkCd;
        API.sendChat("/me 「CNB」☢Flandre Scarlet uses ClearChat!☢");
        cooldownLong();
      break;
      case'!update':
       qkCd;
        API.sendChat("/me //reloading to update: " + userTarget8);
      break;
      case'!credits':
       qkCd;
        API.sendChat("「CNB」was coded by Nuvm. Special thanks to UMCOOKIES, donvoo and Zaro38 who helped with the general coding.");
        cooldown();
      break;
    }
    switch(data.message.slice(0,data.message.indexOf(" "))){
      case'!ping':
        if(userRoleIs0){
         qkCd;
          API.sendChat("「CNB」" + userName2 + " No Pingerino Plserino");
          cooldownLong();
        } else if(userRole0){
         qkCd;
          API.sendChat("「CNB」" + userName2 + " No Pingerino Plserino");
          cooldown();
        }
      break;
      case'!swap':
       if(userRole1){
        API.sendChat("/me 「CNB」" + userName3 + " used Swap.");
       }
      break;
      case'!rcs':
       qkCd;
        API.sendChat("「CNB」" + userTarget5 + " RCS is a plugin with AutoWoot, AutoJoin, AFK message, custom emotes, and much more! Go check it out: [https://rcs.radiant.dj].");
        cooldown();
      break;
      case'!helprcs':
       qkCd;
        API.sendChat("「CNB」" + userTarget9 + " The menu for RCS is located at the top right. You can toggle different settings, which includes changing plug.dj's visual settings. For more info, visit [https://rcs.radiant.dj] .");
        cooldown();
      break;
      case'!call':
        API.chatLog("#CALLED# " + userName3 + " called you!");
      break;
      case'!adv':
       qkCd;
        API.sendChat("「CNB」" + userTarget5 + ", advertising is forbidden. It can result in a permaban! Don't post links without permission (Except image links).");
        cooldown();
      break;
      case'!spam':
       qkCd;
        API.sendChat("「CNB」" + userTarget6 + ", please don't spam.");
        cooldown();
      break;
      case'!resdj':
       qkCd;
        API.sendChat("「CNB」" + userTarget7 + " Register on the forums [http://nazr.in/Tyu] and then check the Requirements thread before posting your app here: [http://nazr.in/Ubg]");
        cooldown();
      break;
      case'!poke1':
       qkCd;
        API.sendChat("「CNB」:kappa: " + userName + " poked " + userTarget7 + "! :kappa:");
        cooldown();
      break;
      case'!poke2':
       qkCd;
        API.sendChat("「CNB」( ͡° ͜ʖ ͡°) " + userName + " poked " + userTarget7 + "! ( ͡° ͜ʖ ͡°)");
        cooldown();
      break;
      case'!magic':
       qkCd;
        API.sendChat( "「CNB」(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. * ･ ｡ﾟ " + userTarget7);
        cooldown();
      break;
      case'!hug':
       qkCd;
        API.sendChat("「CNB」" + userName + " gives a hug to " + userTarget5 + " !");
        cooldown();
      break;
      case'!cmd':
       qkCd;
        API.sendChat("「CNB」" + userTarget5 + " Commands: !call, !watermelon, !credits, !cmd, !donvoo, !uploaders, !nattvoo. Commands requiring @user: !rcs, !helprcs, !adv, !spam, !resdj, !fresdj, !poke1, !poke2, !magic, !hug, !stab, !flirt, !pizza");
        cooldownLong();
      break;
      case'!pizza':
        if(data.uid === 3430555){
         qkCd;
          API.sendChat("「CNB」:pizza::pizza: Pizza for @HiBiscuits! :pizza::pizza:");
          qkCd;
          API.sendChat("「CNB」" + userTarget7 + ", you received a :pizza: from " + userName + " !");
          cooldown();
        } else {
         qkCd;
          API.sendChat("「CNB」" + userTarget7 + ", you received a :pizza: from " + userName + " !");
          cooldown();
        }
      break;
      case'!flirt':
        var choose = ["the human body is 90% water, and I'm real thirsty.","can I buy you a drink or do you just want the money?","with a mane like that you must be a Leo.","do you have a mirror in your pants? Because I can see myself in them.","are your legs tired? Because you have been running through my dreams all night.","is your father a thief? Because he stole the stars fomr the skies and put them in your eyes.","are you okay? It must have been a long fall from Heaven","I really like that outfit. It would look great crumpled at the end of my bed.","what do you like to eat for breakfast? Oh good, I have that.","I know they say milk does a body good - but damn, how much have you been drinking?","so, are you legal?","I have cable TV.","if I told you that you have a lovely body, would you hold it against me?","did the sun just come out or did you smile at me?","is it hot in here, or is it just you?","do you believe in love at first sight or do I have to walk by you again?","I lost my phone number... Can I have yours?","if you were a burger at McDonald's, I'd call you McBeautiful.","my name's _____. But you can call me.... tonight.","no wonder the sky's gray today - all the blue is in your eyes.","what's your name? Or shall I just call you mine?","if I could rearrange the alphabet, I'd put U and I together.","look at you with all those curves and me with no brakes!","I may not be Fred Flinstone/Wilma Flintstone, but I can sure make your bed rock!","do you have raisins? No? How about a date?","do you have a Band-Aid? 'Cause I skinned my knee when I fell for you.","can I have a picture of you so I can show Santa what I want for Christmas?","my bed is broken. Can I sleep in yours?","I'm not feeling myself tonight. Can I feel you?","my name is _____. Remember that, you'll be screaming it later.","is that a ladder in your stockings or the stairway to Heaven?","I may not be the best looking guy/girl in here, but I'm the only one talking to you.","*licks finger and wipes on his/her shirt* Let's get you out of these wet clothes."];
        var selection = choose[Math.floor(Math.random()*choose.length)];
        if(userRole0){
         qkCd;
          API.sendChat("「CNB」" + userName + " says to " + userTarget7 + ": Hey smexy, " + selection);
          cooldown();
        } else {
         qkCd;
          API.sendChat("「CNB」" + userName + " says to " + userTarget7 + ": Hey, " + selection);
          cooldown();
        }
      break;
      case'!stab':
        if(userRole3){
          var choose5 = ['「CNB」" + userName + " tried to stab " + userTarget6 + ", and succeeded!"',', and succeeded!"',', and succeeded!"',', and succeeded!"',', and succeeded!"',', and succeeded!"',', and succeeded!"',', but failed!"'];
          var random2 = choose5[Math.floor(Math.random()*choose5.length)];
          qkCd;
          API.sendChat("「CNB」" + userName + " tried to stab " + userTarget6 + random2);
          cooldownShort();
        } else if(userRole2){
          var choose2 = [', and succeeded!"',', and succeeded!"',', and succeeded!"',', but failed!"'];
          var random3 = choose2[Math.floor(Math.random()*choose2.length)];
          qkCd;
          API.sendChat("「CNB」" + userName + " tried to stab " + userTarget6 + random3);
          cooldown();
        } else if(userRole1) {
          var choose3 = [', and succeeded!"',', and succeeded!"',', but failed!"'];
          var random4 = choose3[Math.floor(Math.random()*choose3.length)];
          qkCd;
          API.sendChat("「CNB」" + userName + " tried to stab " + userTarget6 + random4);
          cooldown();
        } else if(userRole0) {
          var choose4 = [', and succeeded!"',', but failed!"'];
          var random5 = choose4[Math.floor(Math.random()*choose4.length)];
          qkCd;
          API.sendChat("「CNB」" + userName + " tried to stab " + userTarget6 + random5);
          cooldown();
        } else if(userRoleIs0){
          var choose6 = [', and succeeded!"',', but failed!"',', but failed!"'];
          var random6 = choose6[Math.floor(Math.random()*choose6.length)];
          qkCd;
          API.sendChat("「CNB」" + userName + " tried to stab " + userTarget6 + random6);
          cooldown();
        } else {
          var choose7 = [', and succeeded!"',', and succeeded!"',', and succeeded!"',', but failed!"'];
          var random7 = choose7[Math.floor(Math.random()*choose7.length)];
          qkCd;
          API.sendChat("「CNB」" + userName + " tried to stab " + userTarget6 + random7);
          cooldownShort();
        }
      break;
      case'!fresdj':
       qkCd;
        API.sendChat("「CNB」" + userName4 + " " + userTarget8 + " Click here to get Res Dj instantly! [http://nazr.in/Txl]");
        cooldown();
      break;
      case'!natvoo':
        var plsChoose = [' promotes this ship: http://i.imgur.com/p9jXVoW.jpg',' promotes this ship: https://i.imgur.com/yCDGRbb.png'];
        var soRandom = plsChoose[Math.floor(Math.random()*plsChoose.length)];
        qkCd;
        API.sendChat("「CNB」" + userName + soRandom);
        cooldownLong();
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
