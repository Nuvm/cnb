// ==UserScript==
// @name           UBLoader
// @description    Autorun UB on plug.dj
// @author         Nuvm
// @include        https://plug.dj/*
// @exclude        https://plug.dj/_/*
// @exclude        https://plug.dj/@/*
// @exclude        https://plug.dj/ba
// @exclude        https://plug.dj/plot
// @exclude        https://plug.dj/press
// @exclude        https://plug.dj/partners
// @exclude        https://plug.dj/team
// @exclude        https://plug.dj/about
// @exclude        https://plug.dj/jobs
// @exclude        https://plug.dj/purchase
// @version        1
// @grant          none
// ==/UserScript==

(function() {
    
    var loaded = false;
    
    var a = {
        b: function() {
            if (typeof API !== 'undefined' && API.enabled) {
            	this.c();
            }
            else if (!loaded) {
                setTimeout(function() { a.b(); }, 1000);
            }
        },
        c: function() {
            loaded = true;
            API.chatLog('UB has now loaded; Type "!enable ub" to start the bot.');
            $.getScript('https://rawgit.com/Nuvm/cnb/master/UB_main.js');
        }
    };
    a.b();
})();
