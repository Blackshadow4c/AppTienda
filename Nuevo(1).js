var frameModule = require("tns-core-modules/ui/frame");
var NuevoViewModel = require("./Nuevo-view-model");
var nuevoViewModel = new NuevoViewModel();
var frames = require("ui/frame");
var dialogs = require("tns-core-modules/ui/dialogs");
global.codigoBarras;

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = nuevoViewModel;
}
exports.btnRegresarBien = function (args) {
	//navegacion la ventana Registrar
	const pageN = args.object.page;
	const nom = pageN.getViewById("nombre");
	const can = pageN.getViewById("cantidad");
	const pre = pageN.getViewById("precio");
	const nomU = global.userName;


	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			if (xhttp.responseText >= "0") {
				global.codigoBarras = xhttp.responseText;
				dialogs.alert({
					title: "Aviso!",
					message: "Codigo De Barras es: " + xhttp.responseText,
					okButtonText: "ok"
				}).then(function () {

					var navegationBien = {
						moduleName: "home/Bienvenido",
						transition: {
							name: "slideBottom"
						}

					};
					frames.topmost().navigate(navegationBien);
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
	xhttp.open("GET", "https://progintcarlos626.000webhostapp.com/Producto.php?nombreUsuario=" + nomU.text + "&nombre=" + nom.text + "&cantidad=" + can.text + "&precio=" + pre.text, true);
	xhttp.send();



}

exports.btnNProducto = function (args) {
	//navegacion la ventana Registrar
	var navegationNP = {
		moduleName: "home/Bienvenido",
		transition: {
			name: "slideBottom"
		}
	};
	frames.topmost().navigate(navegationNP);
}
exports.pageLoaded = pageLoaded;
