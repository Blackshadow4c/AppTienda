var frameModule = require("tns-core-modules/ui/frame");
var VenderViewModel = require("./Vender-view-model");
var venderViewModel = new VenderViewModel();
var frames = require("ui/frame");
var dialogs = require("tns-core-modules/ui/dialogs");
const fromObject = require("tns-core-modules/data/observable").fromObject;

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = venderViewModel;
}
exports.regresarBV = function (args) {
	//navegacion la ventana Registrar
	var navegationBV = {
		moduleName: "home/Bienvenido",
		transition: {
			name: "slideBottom"
		}
	};
	frames.topmost().navigate(navegationBV);
}
exports.btnVenderP = function (args) {
	//navegacion la ventana Registrar
	const pageV = args.object.page;
	const can = pageV.getViewById("cantVen");
	const nomU = global.userName;
	const codB = global.codigoBarras;


	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			if (xhttp.responseText >= "0") {
				global.codigoBarras = xhttp.responseText;
				dialogs.alert({
					title: "Aviso!",
					message: "As Conseguido: " + xhttp.responseText,
					okButtonText: "ok"
				}).then(function () {

					var navegationVeP = {
						moduleName: "home/Bienvenido",
						transition: {
							name: "slideBottom"
						}
					};
					frames.topmost().navigate(navegationVeP);
				})
			} else if (xhttp.responseText == "0") {
				console.log("Fallo");
				dialogs.alert({
					title: "Aviso!", message: "Hubo un Error",
					okButtonText: "ok"
				}).then(function () {

				})
			}
		}
	};
	xhttp.open("GET", "https://progintcarlos626.000webhostapp.com/Vender.php?codigo=" + codB.text + "&nombreUsuario=" + nomU.text + "&cantidad=" + can.text, true);
	xhttp.send();


}
exports.pageLoaded = pageLoaded;
