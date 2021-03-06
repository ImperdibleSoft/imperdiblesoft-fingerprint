(function () {
  var isPublicText = false;
  var publicDomains = [
    'imperdiblesoft',
    'material-css.com',
    'virtuamanagement.com',
    'my-teamup.com',
    'mypetcard.com.ar',

    'dubrovnikaparts.com'
  ];

  for (var y in publicDomains) {
    if (location.href.indexOf(publicDomains[y]) >= 0) {
      isPublicText = true;
      break;
    }
  }
  
  if (isPublicText) {
    var opacity = 0.4;
    var width = '30px';
    var url = 'https://www.imperdiblesoft.com';
    render(width, opacity, url);

  } else {
    var text = '';

    document.addEventListener('keyup', function (e) {
      switch (text) {
        case '':
          if (e.keyCode == 73) {
            text = 'i';
          } else {
            text = '';
          }
          break;

        case 'i':
          if (e.keyCode == 77) {
            text += 'm';
          } else {
            text = '';
          }
          break;

        case 'im':
          if (e.keyCode == 80) {
            text += 'p';
          } else {
            text = '';
          }
          break;

        case 'imp':
          if (e.keyCode == 69) {
            text += 'e';
          } else {
            text = '';
          }
          break;

        case 'impe':
          if (e.keyCode == 82) {
            text += 'r';
          } else {
            text = '';
          }
          break;

        case 'imper':
          if (e.keyCode == 68) {
            text += 'd';
          } else {
            text = '';
          }
          break;

        case 'imperd':
          if (e.keyCode == 73) {
            text += 'i';
          } else {
            text = '';
          }
          break;

        case 'imperdi':
          if (e.keyCode == 66) {
            text += 'b';
          } else {
            text = '';
          }
          break;

        case 'imperdib':
          if (e.keyCode == 76) {
            text += 'l';
          } else {
            text = '';
          }
          break;

        case 'imperdibl':
          if (e.keyCode == 69) {
            text += 'e';
          } else {
            text = '';
          }
          break;

        case 'imperdible':
          if (e.keyCode == 83) {
            text += 's';
          } else {
            text = '';
          }
          break;

        case 'imperdibles':
          if (e.keyCode == 79) {
            text += 'o';
          } else {
            text = '';
          }
          break;

        case 'imperdibleso':
          if (e.keyCode == 70) {
            text += 'f';
          } else {
            text = '';
          }
          break;

        case 'imperdiblesof':
          if (e.keyCode == 84) {
            text += 't';
          } else {
            text = '';
          }
          break;

      }
      
      if (c == 'imperdiblesoft') {
        text = '';
        var opacity = 0;
        var width = '0px';
        var url = 'https://www.imperdiblesoft.com';
        render(width, opacity, url);
      }
    });
  }
  
  /**
   * Render Imperdiblesoft's logo on the current website
   * @param {string} width - The with of the fingerprint
   * @param {number} opacity - The opacity of the fingerprint
   * @param {string} url - The URL to redirect the user when click
  */
  function render(width, opacity, url) {
    // Prepeare the wrapper
    $('body').append("<div id='impWrapper' style='display: none;' class='sop-invisible'></div>");

    // Add the logo
    $('#impWrapper').append("<img id='impLogo' style='display: none;' src='" + url + "/images/logo.png' />");

    // Add the logotype
    $('#impWrapper').append("<img id='impLogotype' style='display: none;' src='" + url + "/images/text_logo.png' title='Developed by ImperdibleSoft' />");

    // Apply custom CSS to the wrapper
    $('#impWrapper').css({
      'position': 'fixed',
      'display': 'block',
      'float': 'left',
      'bottom': '0px',
      'top': 'initial',
      'z-index': '99999',
      'border-radius': '0px 5px 0px 0px',
      '-moz-border-radius': '0px 5px 0px 0px',
      '-webkit-border-radius': '0px 5px 0px 0px',
      'box-sizing': 'content-box',
      'cursor': 'pointer'
    });

    // Apply custom CSS to the logo
    $('#impLogo').css({
      'position': 'relative',
      'display': 'block',
      'float': 'left',
      'width': width,
      'padding': '8px',
      'padding-left': '10px',
      'box-sizing': 'content-box',
      'cursor': 'pointer',
      'opacity': opacity,
      '-webkit-filter': 'grayscale(100%)',
      'filter': 'grayscale(100%)'
    });

    // Apply custom CSS to the logotype
    $('#impLogotype').css({
      'position': 'relative',
      'display': 'none',
      'float': 'left',
      'width': '200px',
      'padding': '2px 5px',
      'box-sizing': 'content-box',
      'cursor': 'pointer'
    });
    
    // Apply so event listeners, in order to make some effects
    $('#impWrapper')

    // On enter, show the background, hide logo and show logotype
      .on('mouseenter', function () {
        $(this).css('background', 'rgba(255,255,255,0.6)');
        $('#impLogo').hide();
        $('#impLogotype').show();

      // On leave, hide the background, hide logotype and show logo
      }).on('mouseleave', function () {
        $(this).css('background', 'transparent');
        $('#impLogo').show();
        $('#impLogotype').hide();

      // On click, go to ImperdibleSoft.com
      }).on('click', function () {
        var newWindow = window.open(url, 'ImperdibleSoft');
      });
  }
})();

