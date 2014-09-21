//  uglifyjs ArteHeader.js -o ArteHeader.min.js
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
 (function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }

        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

})(jQuery);
/*!
 * jQuery Smart Banner
 * Copyright (c) 2012 Arnold Daniels <arnold@jasny.net>
 * Based on 'jQuery Smart Web App Banner' by Kurt Zenisek @ kzeni.com
 */
!function ($) {
    var SmartBanner = function (options) {
        this.origHtmlMargin = parseFloat($('html').css('margin-top')) // Get the original margin-top of the HTML element so we can take that into account
        this.options = $.extend({}, $.smartbanner.defaults, options)

        var standalone = navigator.standalone // Check if it's already a standalone web app or running within a webui view of an app (not mobile safari)
          , UA = navigator.userAgent

        // Detect banner type (iOS or Android)
        if (this.options.force) {
            this.type = this.options.force
        } else if (UA.match(/iPhone|iPod/i) != null || (UA.match(/iPad/) && this.options.iOSUniversalApp)) {
            if (UA.match(/Safari/i) != null &&
               (UA.match(/CriOS/i) != null ||
               window.Number(UA.substr(UA.indexOf('OS ') + 3, 3).replace('_', '.')) < 6)) this.type = 'ios' // Check webview and native smart banner support (iOS 6+)
        } else if (UA.match(/\bSilk\/(.*\bMobile Safari\b)?/) || UA.match(/\bKF\w/) || UA.match('Kindle Fire')) {
            this.type = 'kindle'
        } else if (UA.match(/Android/i) != null) {
            this.type = 'android'
        } else if (UA.match(/Windows NT 6.2/i) != null && UA.match(/Touch/i) !== null) {
            this.type = 'windows'
        }

        // Don't show banner if device isn't iOS or Android, website is loaded in app or user dismissed banner
        if (!this.type || standalone || this.getCookie('sb-closed') || this.getCookie('sb-installed')) {
            return
        }

        // Calculate scale
        this.scale = this.options.scale == 'auto' ? $(window).width() / window.screen.width : this.options.scale
        if (this.scale < 1) this.scale = 1

        // Get info from meta data
        var meta = $(this.type == 'android' ? 'meta[name="google-play-app"]' :
            this.type == 'ios' ? 'meta[name="apple-itunes-app"]' :
            this.type == 'kindle' ? 'meta[name="kindle-fire-app"]' : 'meta[name="msApplication-ID"]');
        if (meta.length == 0) return

        // For Windows Store apps, get the PackageFamilyName for protocol launch
        if (this.type == 'windows') {
            this.pfn = $('meta[name="msApplication-PackageFamilyName"]').attr('content');
            this.appId = meta.attr('content')[1]
        } else {
            this.appId = /app-id=([^\s,]+)/.exec(meta.attr('content'))[1]
        }

        this.title = this.options.title ? this.options.title : meta.data('title') || $('title').text().replace(/\s*[|\-·].*$/, '')
        this.author = this.options.author ? this.options.author : meta.data('author') || ($('meta[name="author"]').length ? $('meta[name="author"]').attr('content') : window.location.hostname)
        this.iconUrl = meta.data('icon-url');
        this.price = meta.data('price');

        // Create banner
        this.create()
        this.show()
        this.listen()
    }

    SmartBanner.prototype = {

        constructor: SmartBanner

      , create: function() {
            var iconURL
              , link=(this.options.url ? this.options.url : (this.type == 'windows' ? 'ms-windows-store:PDP?PFN=' + this.pfn : (this.type == 'android' ? 'market://details?id=' : (this.type == 'kindle' ? 'amzn://apps/android?asin=' : 'https://itunes.apple.com/' + this.options.appStoreLanguage + '/app/id'))) + this.appId)
              , price = this.price || this.options.price
              , inStore=price ? price + ' - ' + (this.type == 'android' ? this.options.inGooglePlay : this.type == 'kindle' ? this.options.inAmazonAppStore : this.type == 'ios' ? this.options.inAppStore : this.options.inWindowsStore) : ''
              , gloss=this.options.iconGloss === null ? (this.type=='ios') : this.options.iconGloss
            if(this.options.url)
              link = this.options.url
            else {
              if(this.type=='android') {
                link = 'market://details?id=' + this.appId
                if(this.options.GooglePlayParams)
                  link = link + '&referrer=' + this.options.GooglePlayParams
              }
              else
              link = 'https://itunes.apple.com/' + this.options.appStoreLanguage + '/app/id' + this.appId
            }

            var banner = '<div id="smartbanner" class="'+this.type+'"><div class="sb-container"><a href="#" class="sb-close">&times;</a><span class="sb-icon"></span><div class="sb-info"><strong>'+this.title+'</strong><span>'+this.author+'</span><span>'+inStore+'</span></div><a href="'+link+'" class="sb-button"><span>'+this.options.button+'</span></a></div></div>';
            (this.options.layer) ? $(this.options.appendToSelector).append(banner) : $(this.options.appendToSelector).prepend(banner);

            if (this.options.icon) {
                iconURL = this.options.icon
            } else if(this.iconUrl) {
                iconURL = this.iconUrl;
            } else if ($('link[rel="apple-touch-icon-precomposed"]').length > 0) {
                iconURL = $('link[rel="apple-touch-icon-precomposed"]').attr('href')
                if (this.options.iconGloss === null) gloss = false
            } else if ($('link[rel="apple-touch-icon"]').length > 0) {
                iconURL = $('link[rel="apple-touch-icon"]').attr('href')
            } else if ($('meta[name="msApplication-TileImage"]').length > 0) {
              iconURL = $('meta[name="msApplication-TileImage"]').attr('content')
            } else if ($('meta[name="msapplication-TileImage"]').length > 0) { /* redundant because ms docs show two case usages */
              iconURL = $('meta[name="msapplication-TileImage"]').attr('content')
            }

            if (iconURL) {
                $('#smartbanner .sb-icon').css('background-image','url('+iconURL+')')
                if (gloss) $('#smartbanner .sb-icon').addClass('gloss')
            } else{
                $('#smartbanner').addClass('no-icon')
            }

            this.bannerHeight = $('#smartbanner').outerHeight() + 2

            if (this.scale > 1) {
                $('#smartbanner')
                    .css('top', parseFloat($('#smartbanner').css('top')) * this.scale)
                    .css('height', parseFloat($('#smartbanner').css('height')) * this.scale)
                    .hide()
                $('#smartbanner .sb-container')
                    .css('-webkit-transform', 'scale('+this.scale+')')
                    .css('-msie-transform', 'scale('+this.scale+')')
                    .css('-moz-transform', 'scale('+this.scale+')')
                    .css('width', $(window).width() / this.scale)
            }
            $('#smartbanner').css('position', (this.options.layer) ? 'absolute' : 'static')
        }

      , listen: function () {
            $('#smartbanner .sb-close').on('click',$.proxy(this.close, this))
            $('#smartbanner .sb-button').on('click',$.proxy(this.install, this))
        }

      , show: function(callback) {
            var banner = $('#smartbanner');
            banner.stop();

            if (this.options.layer) {
                banner.animate({top: 0, display: 'block'}, this.options.speedIn).addClass('shown').show();
                $('html').animate({marginTop: this.origHtmlMargin + (this.bannerHeight * this.scale)}, this.options.speedIn, 'swing', callback);
            } else {
                if ($.support.transition) {
                    banner.animate({top:0},this.options.speedIn).addClass('shown');
                    var transitionCallback = function() {
                        $('html').removeClass('sb-animation');
                        if (callback) {
                            callback();
                        }
                    };
                    $('html').addClass('sb-animation').one($.support.transition.end, transitionCallback).emulateTransitionEnd(this.options.speedIn).css('margin-top', this.origHtmlMargin+(this.bannerHeight*this.scale));
                } else {
                    banner.slideDown(this.options.speedIn).addClass('shown');
                }
            }
        }

      , hide: function(callback) {
            var banner = $('#smartbanner');
            banner.stop();

            if (this.options.layer) {
                banner.animate({top: -1 * this.bannerHeight * this.scale, display: 'block'}, this.options.speedIn).removeClass('shown');
                $('html').animate({marginTop: this.origHtmlMargin}, this.options.speedIn, 'swing', callback);
            } else {
                if ($.support.transition) {
                    banner.css('top', -1*this.bannerHeight*this.scale).removeClass('shown');
                    var transitionCallback = function() {
                        $('html').removeClass('sb-animation');
                        if (callback) {
                            callback();
                        }
                    };
                    $('html').addClass('sb-animation').one($.support.transition.end, transitionCallback).emulateTransitionEnd(this.options.speedOut).css('margin-top', this.origHtmlMargin);
                } else {
                    banner.slideUp(this.options.speedOut).removeClass('shown');
                }
            }
        }

      , close: function(e) {
            e.preventDefault()
            this.hide()
            this.setCookie('sb-closed','true',this.options.daysHidden);
        }

      , install: function(e) {
            if (this.options.hideOnInstall) {
                this.hide()
            }
            this.setCookie('sb-installed','true',this.options.daysReminder)
        }

      , setCookie: function(name, value, exdays) {
            var exdate = new Date()
            exdate.setDate(exdate.getDate()+exdays)
            value=encodeURI(value)+((exdays==null)?'':'; expires='+exdate.toUTCString())
            document.cookie=name+'='+value+'; path=/;'
        }

      , getCookie: function(name) {
            var i,x,y,ARRcookies = document.cookie.split(";")
            for(i=0;i<ARRcookies.length;i++) {
                x = ARRcookies[i].substr(0,ARRcookies[i].indexOf("="))
                y = ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1)
                x = x.replace(/^\s+|\s+$/g,"")
                if (x==name) {
                    return decodeURI(y)
                }
            }
            return null
        }

      // Demo only
      , switchType: function() {
          var that = this

          this.hide(function () {
              that.type = that.type == 'android' ? 'ios' : 'android'
              var meta = $(that.type == 'android' ? 'meta[name="google-play-app"]' : 'meta[name="apple-itunes-app"]').attr('content')
              that.appId = /app-id=([^\s,]+)/.exec(meta)[1]

              $('#smartbanner').detach()
              that.create()
              that.show()
          })
      }
    }

    $.smartbanner = function (option) {
        var $window = $(window)
        , data = $window.data('smartbanner')
        , options = typeof option == 'object' && option
        if (!data) $window.data('smartbanner', (data = new SmartBanner(options)))
        if (typeof option == 'string') data[option]()
    }

    // override these globally if you like (they are all optional)
    $.smartbanner.defaults = {
        title: null, // What the title of the app should be in the banner (defaults to <title>)
        author: null, // What the author of the app should be in the banner (defaults to <meta name="author"> or hostname)
        price: 'FREE', // Price of the app
        appStoreLanguage: 'us', // Language code for App Store
        inAppStore: 'On the App Store', // Text of price for iOS
        inGooglePlay: 'In Google Play', // Text of price for Android
        inAmazonAppStore: 'In the Amazon Appstore',
        inWindowsStore: 'In the Windows Store', //Text of price for Windows
        GooglePlayParams: null, // Aditional parameters for the market
        icon: null, // The URL of the icon (defaults to <meta name="apple-touch-icon">)
        iconGloss: null, // Force gloss effect for iOS even for precomposed
        button: 'VIEW', // Text for the install button
        url: null, // The URL for the button. Keep null if you want the button to link to the app store.
        scale: 'auto', // Scale based on viewport size (set to 1 to disable)
        speedIn: 300, // Show animation speed of the banner
        speedOut: 400, // Close animation speed of the banner
        daysHidden: 15, // Duration to hide the banner after being closed (0 = always show banner)
        daysReminder: 90, // Duration to hide the banner after "VIEW" is clicked *separate from when the close button is clicked* (0 = always show banner)
        force: null, // Choose 'ios', 'android' or 'windows'. Don't do a browser check, just always show this banner
        hideOnInstall: true, // Hide the banner after "VIEW" is clicked.
        layer: false, // Display as overlay layer or slide down the page
        iOSUniversalApp: true, // If the iOS App is a universal app for both iPad and iPhone, display Smart Banner to iPad users, too.
        appendToSelector: 'body' //Append the banner to a specific selector
    }

    $.smartbanner.Constructor = SmartBanner;


    // ============================================================
    // Bootstrap transition
    // Copyright 2011-2014 Twitter, Inc.
    // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)

    function transitionEnd() {
        var el = document.createElement('smartbanner')

        var transEndEventNames = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        }

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {end: transEndEventNames[name]}
            }
        }

        return false // explicit for ie8 (  ._.)
    }

    if ($.support.transition !== undefined)
        return  // Prevent conflict with Twitter Bootstrap

    // http://blog.alexmaccaw.com/css-transitions
    $.fn.emulateTransitionEnd = function(duration) {
        var called = false, $el = this
        $(this).one($.support.transition.end, function() {
            called = true
        })
        var callback = function() {
            if (!called) $($el).trigger($.support.transition.end)
        }
        setTimeout(callback, duration)
        return this
    }

    $(function() {
        $.support.transition = transitionEnd()
    })
    // ============================================================

}(window.jQuery);
// eof smartbanner
// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};
 
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
       
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})(); 
// eof Simple JavaScript Templating
(function($) {
    /**
     * ArteHeader
     * Dispatch 'loaded' event
     */
    var ArteHeader = function(element, _options) {
        //
        // == Defaults
        var options = $.extend({
            current:            'none', // String: none live programmes plus7 vod future creative liveweb
            menu:               false, // Array of Objects: {attr:{}, label:String}
            menuType:           'new', // String: new append prepend
            lang:               'fr', // String fr de
            cookieBanner:       true,
            compact:            false
        }, _options);
        //
        // == Defaults to french
        if (options.lang != 'fr' && options.lang != 'de') {
            options.lang = 'fr';
        }
        if (options.current == 'liveweb') {
            options.current = 'concert';
        }
        //
        // == Scope
        var SELF = this,
        //
        // == Template html
        html = ''
        + '<div class="row row--big">'
        + ' <a class="logo" href="http://www.arte.tv/"></a>'
        + ' <div class="row mobile-only">'
        + '   <div class="row__item--one-third"><a class="mobile-hamburger" href="http://www.arte.tv/"><span></span></a></div>'
        + '   <div class="row__item--two-third"><a class="mobile-link" href="http://www.arte.tv/"></a></div>'
        + ' </div>'
        + ' <ul class="hlist hlist--logos">'
        + '     <li class="hlist__entry hlist__entry--direct"><a href="<%= link_direct %>"><span><%= direct %></span></a></li>'
        + '<li class="hlist__entry hlist__entry--programmes"><a href="<%= link_programmes %>"><span><%= programmes %></span></a></li>'
        + '<li class="hlist__entry hlist__entry--plus7"><a href="<%= link_plus7 %>"><span><%= plus7 %></span></a></li>'
        + '<li class="hlist__entry hlist__entry--vod"><a href="<%= link_vod %>"><span><%= vod %></span></a></li>'
        + '<li class="hlist__entry hlist__entry--info"><a href="<%= link_info %>"><span><%= info %></span></a></li>'
        + '<li class="hlist__entry hlist__entry--future"><a href="<%= link_future %>"><span><%= future %></span></a></li>'
        + '<li class="hlist__entry hlist__entry--creative"><a href="<%= link_creative %>"><span><%= creative %></span></a></li>'
        + '<li class="hlist__entry hlist__entry--concert"><a href="<%= link_concert %>"><span><%= liveweb %></span></a></li>'
        + '<li class="hlist__entry hlist__entry--cinema"><a href="<%= link_cinema %>"><span><%= cinema %></span></a></li>'
        + ' </ul>'
        + '</div>'
        + '<div class="row row--small">' 
        + ' <ul class="hlist--social">'
        + '     <li class="hlist__entry hlist__entry--fb"><a href=""></a></li>'
        + '<li class="hlist__entry hlist__entry--tw"><a href=""></a></li>'
        + '<li class="hlist__entry hlist__entry--gplus"><a href=""></a></li>'
        + ' </ul>'
        + ' <ul class="vlist vlist--lang">'
        + '     <li class="vlist--lang__entry vlist--lang__entry--selected" data-lang="fr"><a href="">FR<span></span></a></li>'
        + '<li class="vlist--lang__entry" data-lang="de"><a href="">DE<span></span></a></li>'
        + ' </ul>'
        + ' <div class="autopromo"></div>'
        + '</div>',
        //
        // == Element caching
        $this = $(element),
        //
        // == Translation object
        i18n = {
            'fr':{       
                'smartbanner_price':'Gratuit',
                'smartbanner_inAppStore':'App Store',
                'smartbanner_inGooglePlay':'Google Play',
                'smartbanner_title':'ARTE',
                'smartbanner_author':'ARTE.TV',    
                'smartbanner_button':'VOIR',
                'direct':'DIRECT',
                'programmes':'PROGRAMMES',
                'plus7':'+7',
                'vod':'VOD DVD',
                'info':'INFO',
                'future':'FUTURE',
                'creative':'CREATIVE',
                'liveweb':'CONCERT',
                'concert':'CONCERT',
                'cinema':'CINEMA',
                'link_direct':'http://www.arte.tv/direct',
                'link_programmes':'http://www.arte.tv/programmes',
                'link_plus7':'http://www.arte.tv/guide/fr/plus7',
                'link_vod':'http://www.arte.tv/vod',
                'link_future':'http://future.arte.tv/fr',
                'link_creative':'http://creative.arte.tv/fr',
                'link_liveweb':'http://concert.arte.tv/fr',
                'link_concert':'http://concert.arte.tv/fr',
                'link_cinema':'http://cinema.arte.tv/fr',
                'link_arte':'http://www.arte.tv/fr',
                'link_info':'http://info.arte.tv/fr',
                'keywords':{
                    'direct':'fr_direct',
                    'programmes':'fr_programmes',
                    'plus7':'fr_plus7',
                    'vod':'fr_vod',
                    'future':'fr_future',
                    'creative':'fr_creative',
                    'liveweb':'fr_liveweb',
                    'concert':'fr_liveweb',
                    'none':'fr_home',
                    'info':'fr_info',
                    'cinema':'fr_home'
                },
                'suggest_ios':'Voulez-vous télécharger l’application ARTE ?'
            },
            'de':{      
                'smartbanner_price':'Kostenlos',
                'smartbanner_inAppStore':'App Store',
                'smartbanner_inGooglePlay':'Google Play',
                'smartbanner_title':'ARTE',
                'smartbanner_author':'ARTE.TV',
                'smartbanner_button':'ANSEHEN',      
                'direct':'LIVE',
                'programmes':'TV-PROGRAMM',
                'plus7':'+7 MEDIATHEK',
                'vod':'EDITION',
                'info':'INFO',
                'future':'FUTURE',
                'creative':'CREATIVE',
                'liveweb':'CONCERT',
                'concert':'CONCERT',
                'cinema':'CINEMA',
                'link_direct':'http://www.arte.tv/live',
                'link_programmes':'http://www.arte.tv/programm',
                'link_plus7':'http://www.arte.tv/guide/de/plus7',
                'link_vod':'http://www.arte-edition.de/',
                'link_future':'http://future.arte.tv/de',
                'link_creative':'http://creative.arte.tv/de',
                'link_liveweb':'http://concert.arte.tv/de',
                'link_concert':'http://concert.arte.tv/de',                
                'link_cinema':'http://cinema.arte.tv/de',
                'link_arte':'http://www.arte.tv/de',
                'link_info':'http://info.arte.tv/de',
                'keywords':{
                    'direct':'de_direct',
                    'programmes':'de_programmes',
                    'plus7':'de_plus7',
                    'vod':'de_vod',
                    'future':'de_future',
                    'creative':'de_creative',
                    'liveweb':'de_liveweb',
                    'concert':'de_liveweb',
                    'none':'de_home',
                    'info':'de_info',
                    'cinema':'de_home'
                },
                'suggest_ios':'Möchten Sie unsere App herunterladen?'
            }
        },
        //
        // == Translation helper
        getI18n = function(k) {
            return typeof i18n[options.lang] != 'undefined' && typeof i18n[options.lang][k] != 'undefined'
                ? i18n[options.lang][k] : false;
        },
        //
        // == Tracking when a logo is clicked
        handleTracking = function(event) {
            if (typeof xt_med != 'undefined') {
                var result = $(event.currentTarget).attr('class').match(/hlist__entry--([a-z0-9]+)/);
                if (2 === result.length) {
                    event.preventDefault();
                    xt_med('C', '26', result[1], 'N');
                    window.location = $(event.currentTarget).find('> a').attr('href');
                }    
            }
        },
        //
        // == Autopromo loader
        //      dispatch 'autopromo' event
        handleAutopromo = function() {
            var isHttps = new String(window.location.protocol).indexOf('https:') === 0;
            var arteDomain = isHttps ? 'https://www-secure.arte.tv/' : 'http://www.arte.tv/';
            var script = document.createElement('script');
            script.src = arteDomain + 'header-arte/dev/assets/js/jquery.xdomainajax.jquery.1.9.compatible.js';
            var head = document.getElementsByTagName('head')[0],
            done = false;
            script.onload = script.onreadystatechange = function() {
                if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                    done = true;                        
                    script.onload = script.onreadystatechange = null;
                    head.removeChild(script);
                    var getCacheToken = function() {
                        var d = new Date(), 
                            m = d.getMinutes(), 
                            h = d.getHours(), 
                            m = m < 10 ? '0' + m : m, 
                            h = h < 10 ? '0' + h : h;
                        return '' + h + m;
                    }, 
                    keywords = getI18n('keywords'), 
                    key = (options.current.length == 0) ? 'none' : options.current;
                    $.ajax({
                        url:arteDomain + 'sites/autopromo/category/' + keywords[key] + '/?nocache=' + getCacheToken(),
                        dataType:'json',
                        cache:(window.navigator.appName != "Microsoft Internet Explorer"), 
                        error:function(jqXHR, textStatus, errorThrown) {
                            if (typeof console != 'undefined') console.log(jqXHR, textStatus, errorThrown);
                        },
                        success:function(event) {                          
                            if (event.success) {
                                event.data.autopromo_html = event.data.autopromo_html.replace(/(<br \/>|<br>)/g, '');
                                var data = event.data;                                
                                $('#arte-header .autopromo').html(data.autopromo_html)
                                    .addClass('fadeInUp animated')
                                    .on('click', function(event) {
                                        window.location = data.autopromo_link_href;
                                    });
                                $('#arte-header .logo').addClass('fadeIn animated');
                                $this.trigger('autopromo', data);
                               // $('.hlist--logos .hlist__entry').addClass('fadeIn animated');
                                // var handleQueue = function(i) {
                                //   $('.hlist--logos .hlist__entry:eq(' + i  + ')').addClass('fadeIn animated');
                                //     if (i < $('.hlist--logos .hlist__entry').length) {
                                //         setTimeout(function() { handleQueue(++i); }, 50);
                                //     }
                                // };
                                // handleQueue(0);
                            }
                        }
                    });
                }
            };
            head.appendChild(script);
        },

        handleCurrent = function() {
            var $current = $('#arte-header .hlist__entry--' + options.current + ' > a'), 
                $currentMobile = $('#arte-header .mobile-link');
            (1 === $current.length) ? $current.addClass('selected')
                && $currentMobile.attr('href', getI18n('link_' + options.current))
                && $currentMobile.addClass('color--' + options.current)
                && $currentMobile.html('<span></span>' + getI18n(options.current))
            : $('#arte-header .logo').addClass('logo--show').show();
        },

        showRowSmall = function(show) {
            (show && $('#arte-header .row--small').removeClass('row--small--hide')) 
                || $('#arte-header .row--small').addClass('row--small--hide');
        },

        handleScroll = function() {
            showRowSmall(5 >= $(window).scrollTop());
        },

        handleResponsiveMenu = function(event) {
            event.preventDefault();
            $('#arte-header .hlist--logos').toggleClass('hlist--logos-open');
            $('#arte-header .mobile-hamburger').toggleClass('mobile-hamburger--close');
        },

        handleCustomMenu = function() {
            var html = '';
            $.each(options.menu, $.proxy(function(k, v) {
                if (v.hasOwnProperty('label')) {
                    html += '<li class="hlist__entry mobile-only hlist__entry--item">' + $('<a><span>' + v.label + '</span></a>').attr(v.attr)[0].outerHTML + '</li>';    
                } else if (v.hasOwnProperty('html')) {
                    html += '<li class="hlist__entry mobile-only hlist__entry--item">' + v.html + '</li>';    
                }
            }, this));
            if (0 !== html.length) {
                switch (options.menuType) {
                    case 'append' : 
                        $('.hlist--logos').append(html); 
                    break;
                    case 'prepend' : 
                        $('.hlist--logos').prepend(html); 
                    break;
                    default : 
                        $('.hlist--logos > .hlist__entry').addClass('mobile-only-hidden');
                        $('.hlist--logos').append(html);
                    break;
                }
            }
        },

        handleShareButtons = function(urlToShare) {
            var pageUrl = urlToShare || encodeURIComponent(window.location);
            var onShareButtonClick = function(sharerUrl) {
                var windowWidth = 500, windowHeight = 500;
                var centerLeft = parseInt((window.screen.availWidth - windowWidth) / 2);
                var centerTop = parseInt((window.screen.availHeight - windowHeight) / 2);
                window.open(sharerUrl + pageUrl, 'sharer_win', 
                    'left=' + centerLeft + ',top=' + centerTop
                    + ',toolbar=0,status=0,width=' + windowWidth + ',height=' + windowHeight);
            };
            $('#arte-header .hlist__entry--fb > a').off('click').on('click', function(event) {
                event.preventDefault();
                onShareButtonClick('https://www.facebook.com/sharer/sharer.php?u=');
            });
            $('#arte-header .hlist__entry--tw > a').off('click').on('click', function(event) {
                event.preventDefault();
                onShareButtonClick('https://twitter.com/home?status=');
            });
            $('#arte-header .hlist__entry--gplus > a').off('click').on('click', function(event) {
                event.preventDefault();
                onShareButtonClick('https://plus.google.com/share?url='); 
            });
        },

        handleSmartbanner = function() {
            var url = window.location.href;
            $.each([
                'http://www.arte.tv/fr',
                'http://www.arte.tv/de',
                'http://www.arte.tv/guide/',
                'http://header.arte.tv/',
                'http://localhost'
            ], function(k, v) {
                if (0 === url.indexOf(v)) {

                    var isMobile = {
                        Android: function() {
                            return /Android/i.test(navigator.userAgent);
                        },
                        BlackBerry: function() {
                            return /BlackBerry/i.test(navigator.userAgent);
                        },
                        iOS: function() {
                            return /iPhone|iPad|iPod/i.test(navigator.userAgent);
                        },
                        Windows: function() {
                            return /IEMobile/i.test(navigator.userAgent);
                        },
                        any: function() {
                            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
                        }
                    };
                    var force = null;
                    if (isMobile.iOS()) force = 'ios';
                    if (isMobile.Android()) force = 'android';
                    $('head')
                        .prepend('<meta name="google-play-app" content="app-id=tv.arte.plus7">')
                        //.prepend('<meta name="apple-itunes-app" content="app-id=405028510, affiliate-data=11ln9c">');
                        .prepend('<meta name="apple-itunes-app" content="app-id=405028510">');                        
                    $.smartbanner({
                        title: getI18n('smartbanner_title'), // What the title of the app should be in the banner (defaults to <title>)
                        author: getI18n('smartbanner_author'), // What the author of the app should be in the banner (defaults to <meta name="author"> or hostname)
                        price: getI18n('smartbanner_price'), // Price of the app
                        appStoreLanguage: options.lang, // Language code for App Store
                        inAppStore: getI18n('smartbanner_inAppStore'), // Text of price for iOS
                        inGooglePlay: getI18n('smartbanner_inGooglePlay'), // Text of price for Android
                        //inWindowsStore: 'In the Windows Store', // Text of price for Windows
                        GooglePlayParams: null, // Aditional parameters for the market
                        icon: (document.location.protocol == 'https' ? 'https://www-secure.arte.tv' : 'http://www.arte.tv') 
                        + '/header-arte/2014/assets/img/smartbanner.jpg', // The URL of the icon (defaults to <meta name="apple-touch-icon">)
                        iconGloss: null, // Force gloss effect for iOS even for precomposed
                        button: getI18n('smartbanner_button'), // Text for the install button
                        scale: 'auto', // Scale based on viewport size (set to 1 to disable)
                        speedIn: 300, // Show animation speed of the banner
                        speedOut: 400, // Close animation speed of the banner
                        daysHidden: 15, // Duration to hide the banner after being closed (0 = always show banner)
                        daysReminder: 90, // Duration to hide the banner after "VIEW" is clicked *separate from when the close button is clicked* (0 = always show banner)
                        'force': force, //null, // Choose 'ios', 'android' or 'windows'. Don't do a browser check, just always show this banner
                        hideOnInstall: true, // Hide the banner after "VIEW" is clicked.
                        iOSUniversalApp: true, // If the iOS App is a universal app for both iPad and iPhone, display Smart Banner to iPad users, too.      
                        appendToSelector: 'body' //Append the banner to a specific selector
                    });
                    return false;
                }
            });
        },

        initialize = function() {
            //
            // == Set the header's language
            $this.addClass(options.lang);
            //
            // == Print html template
            $this.html(tmpl(html, i18n[options.lang]));
            //
            // == Compact header ?
            if (true === options.compact) {
                $('#arte-header').addClass('compact');
            }
            //
            // == Autopromo
            handleAutopromo();
            //
            // == Current
            handleCurrent();
            //
            // == Share butons
            handleShareButtons();
            //
            // == Responsive menu handler
            $('#arte-header .mobile-hamburger').on('click', $.proxy(handleResponsiveMenu, this));
            //
            // == Scroll handler
            $(window).on('scroll', $.proxy(handleScroll, this));
            //
            // == Menu
            $.isArray(options.menu) && handleCustomMenu();
            //
            // == Current language
            SELF.updateLangSelected(options.lang);
            //
            // == Tracking on menu click
            $('#arte-header .hlist--logos > li').on('click', $.proxy(handleTracking, this)); 
            //
            // == Smartbanner (android and ios)
            handleSmartbanner();
            //
            // == Cookie banner
            (true === options.cookieBanner) && new ArteCookieBanner({lang:options.lang});
        };
        /**
         * ==============================================
         * Group: Public API
         *
         * Update the FR or DE link target
         * 
         * @param String lang (Values : 'fr' or 'de')
         * @param String href
         * @return ArteHeader
         */
        this.updateLangHref = function(lang, href) {          
            $('#arte-header .vlist--lang__entry[data-lang="' + lang + '"] > a').attr('href', href);  
            return this;
        };
        this.getLangHref = function(lang) {
            return $('#arte-header .vlist--lang__entry[data-lang="' + lang + '"] > a').attr('href');  
        };
        /**
         * Add a lang to the languages menu (in most case it will be EN)
         *
         * @param String label (Ex : 'EN')
         * @param String href
         * @param Boolean true to highlight the new language
         * @return ArteHeader
         */
        this.addLang = function(label, href, selected) {
            $('#arte-header .vlist--lang').append('<li class="vlist--lang__entry" data-lang="' + label.toLowerCase() + '"><a href="' + href + '">' + label.toUpperCase() + '<span></span></a></li>');
            if (true === selected) {
                return this.updateLangSelected(label.toLowerCase());
            }
            return this;
        };

        this.updateLangSelected = function(lang) { 
            var $item = $('#arte-header .vlist--lang__entry[data-lang="' + lang + '"]');             
            if (1 == $item.length) {
                $('#arte-header .vlist--lang__entry').removeClass('vlist--lang__entry--selected');
                $item.addClass('vlist--lang__entry--selected').detach();
                $('#arte-header .vlist--lang').prepend($item);
                $('#arte-header .vlist--lang > .vlist--lang__entry--selected').off('click').on('click', function(event) {                
                    if (!$(this).parent().hasClass('hover')) {
                        event.preventDefault();
                        $(this).parent().addClass('hover');
                    }
                });
            }
            return this;
        };

        this.getLangs = function() {
            var langs = [];
            $('#arte-header .vlist--lang__entry').each(function(k, v) {
                langs.push({
                    lang: $(this).data('lang'),
                    href: $(this).find('a').attr('href'),
                    label: $(this).find('a').text(),
                    selected: $(this).hasClass('vlist--lang__entry--selected'),
                    visible: $(this).is(':visible')
                });
            });
            return langs;
        };

        this.hideLang = function(lang) {            
            if (typeof lang == 'undefined') {
                $('#arte-header .vlist--lang').hide();
            } else if (typeof lang == 'string') {
                $('#arte-header .vlist--lang__entry[data-lang="' + lang + '"]').hide();
            }
            return this;
        };
        this.hide = function() {
            $this.hide();
            return this;
        };
        this.show = function() {
            $this.show();
            return this;
        };
        this.destroy = function() {
            $(element).html('').removeData('plugin-arte-header');
            return this;
        };

        this.updateShareUrl = function(urlToShare) {
            handleShareButtons(urlToShare);
            return this;
        };

        this.hideSocial = function() {
            $('#arte-header .hlist--social').hide();
            return this;
        };

        /**
         * == DEPRECATED ==
         *
         * Add a mediaquery breakpoint and some css to add when it matches
         *
         * @param String mediaquery (Ex : '(min-width: 1239px)')
         * @param String css (Ex : 'div#arte-header div.arte-header-wrapper { width: 1240px; }')
         * @return ArteHeader
         */
        this.addBreakPoint = function(mediaQuery, css) {
            $('head').append('<style media="' + mediaQuery + '" type="text/css">' + css + '</style>');
            return this;
        };
        this.setCurrentResponsive = function(index) {
            // No more implementation
            return this;
        };
        this.updateLangLabel = function(lang, label) {            
            // No more implementation
            return this;
        };
        /**
         * Set the current galaxy
         * 
         * @param String galaxy (Values : 'none' or 'live' or 'programmes' or 'plus7' or 'vod ' or 'future' or 'creative' or 'liveweb')
         * @return ArteHeader
         */
        this.setCurrent = function(current) {
            options.current = current;
            showCurrent();
            return this;
        };
        
        initialize(); 
    };

    $.fn.arteHeader = function(options) {
        return this.each(function() {
            var $this = $(this);
            if ($this.data('plugin-arte-header')) return;
            var plugin = new ArteHeader(this, options);
            $this.data('plugin-arte-header', plugin);
            $this.trigger('loaded');
        });
    }; // ===== ArteHeader plugin

})(jQuery);


(function($) {

    var ArteCookieBanner = function(_options) {
        //
        // == Defaults
        var options = $.extend({
            lang: 'fr', // String fr de
            i18n: {}
        }, _options);

        var SELF = this, 
        //
        // == Template
        html = ''
        + '<div id="arte-cookie-banner" class="animated fadeInUp arte-cookie-banner--down">'
        + ' <p class="fleft"><%= text %> <a onclick="window.open(this.href); return false;" id="arte-cookie-banner-more" href="<%= more_href %>" class="button"><%= more_label %></a></p>'
        + ' <p class="fright"><a id="arte-cookie-banner-close" href="<%= close_href %>" class="close"><%= close_label %><span>X</span></a></p>'
        + '</div>',
        //
        // == Element caching
        $this,
        //
        // == Translation object
        i18n = {
            'fr': {   
                'text': 'En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de cookies conformément à notre politique de données personnelles.',
                'more_href': 'http://www.arte.tv/sites/fr/services/arte-et-votre-vie-privee-en-ligne/',
                'more_label': 'En savoir plus ?',
                'close_href': 'http://www.arte.tv/sites/fr/services/arte-et-votre-vie-privee-en-ligne/',
                'close_label': 'OK'
            },
            'de': {
                'text': 'Wir verwenden bei Ihrem Besuch auf unserer Webseite Cookies. Indem Sie unsere Webseite benutzen, stimmen Sie unseren Datenschutzrichtlinien zu.',
                'more_href': 'http://www.arte.tv/sites/fr/aktuelles/arte-und-ihre-privatsphare-im-internet/',
                'more_label': 'Mehr zum Thema',
                'close_href': 'http://www.arte.tv/sites/fr/aktuelles/arte-und-ihre-privatsphare-im-internet/',
                'close_label': 'OK'
            }
        },
        getI18n = function(k) {
            return typeof i18n[options.lang] != 'undefined' && typeof i18n[options.lang][k] != 'undefined'
                ? i18n[options.lang][k] : false;
        };

        var onCloseClick = function(event) {
            event.preventDefault();
            $this.addClass('fadeOutDown');
            var cookieOptions = {
                'path': '/',
                expires: 365
            };
            //
            // == One cookie for all arte subdomains
            if (-1 !== new String(window.location.host).indexOf('arte.tv')) {
                cookieOptions.domain = 'arte.tv';
            }
            $.cookie('arte-cookie-banner_close', 'true', cookieOptions);
        },

        initialize = function() {
            if ('true' == $.cookie('arte-cookie-banner_close')) return;
            $('body').prepend(tmpl(html, i18n[options.lang]));
            $this = $('#arte-cookie-banner');
            $('#arte-cookie-banner-close').on('click', onCloseClick);

        };

        initialize();

    };

    window.ArteCookieBanner = ArteCookieBanner;

})(jQuery);