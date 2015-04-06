//NoobBot made and coded by Nuvm.
//Licensed under the Open GNU License v3.
//Feel free to pull merge requests with new commands and features,
//As well as asking for new ones!
 
//Changelog
//v1.2.3
//Fixed commands' displays.
//Fixed the disable command.
//{v1.2
//NoobBot is now UtilityBot.
//Utility.js is now enabled by default.
//v1.1
//Many major fixes, including command fixes.
//Commands !spam, !adv and !magic are now functionnal.
//v1.0.21
//Quick fixes.
//Added setTiemout at the beginning of most commands.
//v1.0
//Changed name to NoobBot.
//Bot now works by default under basic.js.
//v0.62.13
//Added !fruit and !randomevent commands.
//Changed version system (again).
//Tweaked var qkCd to 200ms.
//v0.6.0.4
//Fixed swap and skip to trigger on Bouncer+.
//v0.6.0.2
//Tweaked var qkCd from 100ms to 400ms.
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
//Added command !resdj and !fresdj.}
 
API.chatLog("「UB」{extra.js} has been loaded.", true);
API.on(API.CHAT,extra);
commandWait = true;

function extra(data){
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
    switch(data.message){
      case'!magic':
        setTimeout(function(){API.sendChat( "「UB」(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. * ･ ｡ﾟ ");
        },600);
        cooldown();
      break;
      case'!disable derpstaff':
        if(data.uid === 5010460){
            API.sendChat("/me 「UB」DerpStaff Mode has been disabled by " + userName3 + ".");
            API.off(API.CHAT,extra);
          }
        else if(userRole2){
            API.sendChat("/me 「UB」DerpStaff Mode has been disabled by " + userName3 + ".");
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
        var fruits = ["an :apple:apple:apple:!","a :watermelon:watermelon:watermelon:!","a :banana:banana:banana:!","a :pineapple:pineapple:pineapple:!","a :strawberry:strawberry:strawberry:!","a :peach:peach:peach:!"];
        var fruitSelection = fruits[Math.floor(Math.random()*fruits.length)];
        setTimeout(function(){API.sendChat("「UB」" + userName + " plunged his/her hand into the fruit basket.... and found " + fruitSelection);
          },600);
          cooldown();
      break;
      case'!natvoo':
        var plsChoose = [' promotes this ship: http://i.imgur.com/p9jXVoW.jpg',' promotes this ship: https://i.imgur.com/yCDGRbb.png'];
        var soRandom = plsChoose[Math.floor(Math.random()*plsChoose.length)];
        setTimeout(function(){API.sendChat("「UB」" + userName + soRandom);
        },600);
        cooldown();
      break;
    }
    switch(data.message.slice(0,data.message.indexOf(" "))){
      case'!poke1':
       setTimeout(function(){API.sendChat("「UB」:kappa: " + userName + " poked " + userTarget7 + "! :kappa:");
        },600);
        cooldown();
      break;
      case'!poke2':
       setTimeout(function(){API.sendChat("「UB」( ͡° ͜ʖ ͡°) " + userName + " poked " + userTarget7 + "! ( ͡° ͜ʖ ͡°)");
        },600);
        cooldown();
      break;
      case'!magic':
       setTimeout(function(){API.sendChat( "「UB」(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. * ･ ｡ﾟ " + userTarget7);
        },600);
        cooldown();
      break;
      case'!hug':
       setTimeout(function(){API.sendChat("「UB」" + userName + " gives a hug to " + userTarget5 + " !");
        },600);
        cooldown();
      break;
      case'!pizza':
        if(data.uid === 3430555){
          setTimeout(function(){API.sendChat("「UB」:pizza::pizza: Pizza for @HiBiscuits! :pizza::pizza:");
          },600);
          setTimeout(function(){API.sendChat("「UB」" + userTarget7 + ", you received a :pizza: from " + userName + " !");
          },600);
          cooldown();
        } else {
          setTimeout(function(){API.sendChat("「UB」" + userTarget7 + ", you received a :pizza: from " + userName + " !");
          },600);
          cooldown();
        }
      break;
      case'!flirt':
        var choose = ["the human body is 90% water, and I'm real thirsty.","can I buy you a drink or do you just want the money?","with a mane like that you must be a Leo.","do you have a mirror in your pants? Because I can see myself in them.","are your legs tired? Because you have been running through my dreams all night.","is your father a thief? Because he stole the stars fomr the skies and put them in your eyes.","are you okay? It must have been a long fall from Heaven","I really like that outfit. It would look great crumpled at the end of my bed.","what do you like to eat for breakfast? Oh good, I have that.","I know they say milk does a body good - but damn, how much have you been drinking?","so, are you legal?","I have cable TV.","if I told you that you have a lovely body, would you hold it against me?","did the sun just come out or did you smile at me?","is it hot in here, or is it just you?","do you believe in love at first sight or do I have to walk by you again?","I lost my phone number... Can I have yours?","if you were a burger at McDonald's, I'd call you McBeautiful.","my name's _____. But you can call me.... tonight.","no wonder the sky's gray today - all the blue is in your eyes.","what's your name? Or shall I just call you mine?","if I could rearrange the alphabet, I'd put U and I together.","look at you with all those curves and me with no brakes!","I may not be Fred Flinstone/Wilma Flintstone, but I can sure make your bed rock!","do you have raisins? No? How about a date?","do you have a Band-Aid? 'Cause I skinned my knee when I fell for you.","can I have a picture of you so I can show Santa what I want for Christmas?","my bed is broken. Can I sleep in yours?","I'm not feeling myself tonight. Can I feel you?","my name is _____. Remember that, you'll be screaming it later.","is that a ladder in your stockings or the stairway to Heaven?","I may not be the best looking guy/girl in here, but I'm the only one talking to you.","*licks finger and wipes on his/her shirt* Let's get you out of these wet clothes."];
        var selection = choose[Math.floor(Math.random()*choose.length)];
        if(userRole0){
          setTimeout(function(){API.sendChat("「UB」" + userName + " says to " + userTarget7 + ": Hey smexy, " + selection);
          },600);
          cooldown();
        } else {
          setTimeout(function(){API.sendChat("「UB」" + userName + " says to " + userTarget7 + ": Hey, " + selection);
          },600);
          cooldown();
        }
      break;
      case'!stab':
        if(userRole3){
          var choose5 = ['", and succeeded!"','", and succeeded!"','", and succeeded!"','", and succeeded!"','", and succeeded!"','", and succeeded!"','", and succeeded!"','", but failed!"'];
          var random2 = choose5[Math.floor(Math.random()*choose5.length)];
          setTimeout(function(){API.sendChat("「UB」" + userName + " tried to stab " + userTarget6 + random2);
          },600);
          cooldown();
        } else if(userRole2){
          var choose2 = ['", and succeeded!"','", and succeeded!"','", and succeeded!"','", but failed!"'];
          var random3 = choose2[Math.floor(Math.random()*choose2.length)];
          setTimeout(function(){API.sendChat("「UB」" + userName + " tried to stab " + userTarget6 + random3);
          },600);
          cooldown();
        } else if(userRole1) {
          var choose3 = ['", and succeeded!"','", and succeeded!"','", but failed!"'];
          var random4 = choose3[Math.floor(Math.random()*choose3.length)];
          setTimeout(function(){API.sendChat("「UB」" + userName + " tried to stab " + userTarget6 + random4);
          },600);
          cooldown();
        } else if(userRole0) {
          var choose4 = ['", and succeeded!"','", but failed!"'];
          var random5 = choose4[Math.floor(Math.random()*choose4.length)];
          setTimeout(function(){API.sendChat("「UB」" + userName + " tried to stab " + userTarget6 + random5);
          },600);
          cooldown();
        } else if(userRoleIs0){
          var choose6 = ['", and succeeded!"','", but failed!"','", but failed!"'];
          var random6 = choose6[Math.floor(Math.random()*choose6.length)];
          setTimeout(function(){API.sendChat("「UB」" + userName + " tried to stab " + userTarget6 + random6);
          },600);
          cooldown();
        } else {
          var choose7 = ['", and succeeded!"','", and succeeded!"','", and succeeded!"','", but failed!"'];
          var random7 = choose7[Math.floor(Math.random()*choose7.length)];
          setTimeout(function(){API.sendChat("「UB」" + userName + " tried to stab " + userTarget6 + random7);
          },600);
          cooldownShort();
        }
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
