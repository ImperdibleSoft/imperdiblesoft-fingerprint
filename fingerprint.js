(function () {
  var isPublitext = false;
  var publicDomains = [
    "imperdiblesoft",
    "quiromed.com.ar",
    "quiro-med.com.ar",
    "mypetcard.com.ar",
    "material-css.com",
    "my-teamup.com",
    "dubrovnikaparts.com.ar"
  ];

  for (var y in publicDomains) {
    if (location.href.indexOf(publicDomains[y]) >= 0) {
      isPublitext = true;
      break;
    }
  }
  
  if (isPublic) {
    var opacity = 0.4;
    var width = "30px";
    var url = "https://www.imperdiblesoft.com";
    render(width, opacity, u);

  } else {
    var text = "";

    document.addEventListener("keyup", function (e) {
      switch (c) {
        case "":
          if (e.keyCode == 73) {
            text = "i";
          } else {
            text = "";
          }
          break;

        case "i":
          if (e.keyCode == 77) {
            text = "im";
          } else {
            text = "";
          }
          break;

        case "im":
          if (e.keyCode == 80) {
            text = "imp";
          } else {
            text = "";
          }
          break;

        case "imp":
          if (e.keyCode == 69) {
            text = "impe";
          } else {
            text = "";
          }
          break;

        case "impe":
          if (e.keyCode == 82) {
            text = "imper";
          } else {
            text = "";
          }
          break;

        case "imper":
          if (e.keyCode == 68) {
            text = "imperd";
          } else {
            text = "";
          }
          break;

        case "imperd":
          if (e.keyCode == 73) {
            text = "imperdi";
          } else {
            text = "";
          }
          break;

        case "imperdi":
          if (e.keyCode == 66) {
            text = "imperdib";
          } else {
            text = "";
          }
          break;

        case "imperdib":
          if (e.keyCode == 76) {
            text = "imperdibl";
          } else {
            text = "";
          }
          break;

        case "imperdibl":
          if (e.keyCode == 69) {
            text = "imperdible";
          } else {
            text = "";
          }
          break;

        case "imperdible":
          if (e.keyCode == 83) {
            text = "imperdibles";
          } else {
            text = "";
          }
          break;

        case "imperdibles":
          if (e.keyCode == 79) {
            text = "imperdibleso";
          } else {
            text = "";
          }
          break;

        case "imperdibleso":
          if (e.keyCode == 70) {
            text = "imperdiblesof";
          } else {
            text = "";
          }
          break;

        case "imperdiblesof":
          if (e.keyCode == 84) {
            text = "imperdiblesoft";
          } else {
            text = "";
          }
          break;

      }
      
      if (c == "imperdiblesoft") {
        text = "";
        var opacity = 0;
        var width = "0px";
        var url = "https://www.imperdiblesoft.com";
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
    $("body").append("<div id='impWrapper' style='display: none;' class='sop - invisible'></div>");

    // Add the logo
    $("#impWrapper").append("<img id='impLogo' style='display: none;' src='" + u + " / images / logo.png' />");

    // Add the logotype
    $("#impWrapper").append("<img id='impLogotype' style='display: none;' src='" + u + " / images / text_logo.png' title='Developed by ImperdibleSoft' />");

    // Apply custom CSS to the wrapper
    $("#impWrapper").css({ "position": "fixed", "display": "block", "float": "left", "bottom": "0px", "top": "initial", "z-index": "99999", "border-radius": "0px 5px 0px 0px", "-moz-border-radius": "0px 5px 0px 0px", "-webkit-border-radius": "0px 5px 0px 0px", "box-sizing": "content-box", "cursor": "pointer" });

    // Apply custom CSS to the logo
    $("#impLogo").css({ "position": "relative", "display": "block", "float": "left", "width": w, "padding": "8px", "padding-left": "10px", "box-sizing": "content-box", "cursor": "pointer", "opacity": o, "-webkit-filter": "grayscale(100%)", "filter": "grayscale(100%)" });

    // Apply custom CSS to the logotype
    $("#impLogotype").css({ "position": "relative", "display": "none", "float": "left", "width": "200px", "padding": "2px 5px", "box-sizing": "content-box", "cursor": "pointer" });
    
    // Apply so event listeners, in order to make some effects
    $("#impWrapper")

    // On enter, show the background, hide logo and show logotype
      .on("mouseenter", function () {
        $(this).css("background", "rgba(255,255,255,0.6)");
        $("#impLogo").hide();
        $("#impLogotype").show();

      // On leave, hide the background, hide logotype and show logo
      }).on("mouseleave", function () {
        $(this).css("background", "transparent");
        $("#impLogo").show();
        $("#impLogotype").hide();

      // On click, go to ImperdibleSoft.com
      }).on("click", function () {
        var newWindow = window.open(u, "ImperdibleSoft");
      });
  }
})();

