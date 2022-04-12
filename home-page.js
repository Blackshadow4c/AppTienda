var HomeViewModel = require("./home-view-model");
var homeViewModel = new HomeViewModel();
var frames = require("ui/frame");

function pageLoaded(args) {
  var page = args.object;
  page.bindingContext = homeViewModel;

}
exports.btnIniciar = function (args) {
  //navegacion Inicio
  var navegation = {
    moduleName: "home/Iniciar",
    transition: {
      name: "slideBottom"
    }
  };
  frames.topmost().navigate(navegation);
}
exports.btnRegistrar = function (args) {
  //navegacion Inicio

  
  var navegationN = {
    moduleName: "home/Registrar",
    transition: {
      name: "slideBottom"
    }
  };
  frames.topmost().navigate(navegationN);
}
exports.pageLoaded = pageLoaded;
