var frameModule = require("tns-core-modules/ui/frame");
var BienvenidoViewModel = require("./Bienvenido-view-model");
var bienvenidoViewModel = new BienvenidoViewModel();
var frames = require("ui/frame");
var dialogs = require("tns-core-modules/ui/dialogs");
const fromObject = require("tns-core-modules/data/observable").fromObject;

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = bienvenidoViewModel;
}
exports.btnRegresarB = function (args) {
	//navegacion la ventana Registrar
	var navegationB = {
		moduleName: "home/Iniciar",
		transition: {
			name: "slideBottom"
		}
	};
	frames.topmost().navigate(navegationB);
}
exports.bb = function (args) {
	const pagebb = args.object.page;
	const nuB = global.userName;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {

		if (this.readyState == 4 && this.status == 200) {

			const response = xhttp.responseText;
			console.log(xhttp.responseText);
			const [nombre, ganancias] = response.split("|");

			const source = fromObject({
				nombr: nombre,
				ganancia: ganancias
			});
			source.set("nombr", nombre);
			source.set("ganancia", ganancias);

			pagebb.bindingContext = source

		}
	};
	xhttp.open("GET", "https://progintcarlos626.000webhostapp.com/Bienvenido.php?nombreUsuario=" + nuB.text, true);
	xhttp.send();
	console.log(nuB.text);
}
exports.bntNuevo = function (args) {
	//navegacion la ventana Registrar
	var navegationNu = {
		moduleName: "home/Nuevo",
		transition: {
			name: "slideBottom"
		}
	};
	frames.topmost().navigate(navegationNu);
}
exports.btnEli = function (args) {
	//navegacion la ventana Registrar
	var navegationEli = {
		moduleName: "home/Producto",
		transition: {
			name: "slideBottom"
		}
	};
	frames.topmost().navigate(navegationEli);
}
exports.btnHis = function (args) {
	//navegacion la ventana Registrar
	var navegationHis = {
		moduleName: "home/Historial",
		transition: {
			name: "slideBottom"
		}
	};
	frames.topmost().navigate(navegationHis);
}
exports.pageLoaded = pageLoaded;
