(function(ww, dd) {
  function load(url, def, cb) {
    var el = dd.getElementsByTagName('body')[0],
        ss = dd.createElement('script');
    ss.async = true;
    ss.defer = def ? def : true;
    ss.type = 'text/javascript';
    if (cb) { ss.onload = cb; }
    el.parentNode.appendChild(ss, el);
  };

  load('pano-2.0.0.js', true, function() {
    pano = new ww.Pano.Page('pano');
    pano.init();
  });

  load('//www.google-analytics.com/analytics.js', false, function() {
    ww.ga = ww.ga || function() { (ww.ga.q = ww.ga.q || []).push(arguments); };
    ww.ga.l = +new Date;
    ww.ga('create', 'UA-73719262-4', 'auto');
    ww.ga('send', 'pageview');
    ww._tl = function(url) {
      ww.ga('send', 'event', 'outbound', 'click', url, {
        'transport': 'beacon', 'hitCallback': function() { dd.location = url; }
      });
      return false;
    };
  });
})(window, document);
