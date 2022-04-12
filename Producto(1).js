var frameModule = require("tns-core-modules/ui/frame");
var ProductoViewModel = require("./Producto-view-model");
var productoViewModel = new ProductoViewModel();
var frames = require("ui/frame");
var dialogs = require("tns-core-modules/ui/dialogs");

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = productoViewModel;
}

exports.btnRegresarBienP = function (args) {
	//navegacion la ventana Registrar
	var navegationBienP = {
		moduleName: "home/Bienvenido",
		transition: {
			name: "slideBottom"
		}
	};
	frames.topmost().navigate(navegationBienP);
}
exports.btnRetirar = function (args) {
	//Eliminar
	const pageEl = args.object.page;
	const nomU = global.userName;
	const codBar = pageEl.getViewById("codigoBarras");


	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			if (xhttp.responseText == "1") {
				dialogs.alert({
					title: "Aviso!",
					message: "Se Elimino con Exito",
					okButtonText: "ok"
				}).then(function () {

					var navegationRet = {
						moduleName: "home/Bienvenido",
						transition: {
							name: "slideBottom"
						}
					};
					frames.topmost().navigate(navegationRet);
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
	xhttp.open("GET", "https://progintcarlos626.000webhostapp.com/Eliminar.php?nombreUsuario=" + nomU.text + "&codigo=" + codBar.text, true);
	xhttp.send();



}
exports.btnModificar = function (args) {
	//navegacion la ventana Registrar
	const pageModi = args.object.page;
	global.codigoBarras = pageModi.getViewById("codigoBarras");
	var navegationModP = {
		moduleName: "home/Modificar",
		transition: {
			name: "slideBottom"
		}
	};
	frames.topmost().navigate(navegationModP);
}

exports.btnVender = function (args) {
	//navegacion la ventana Registrar
	const pageV = args.object.page;
	global.codigoBarras = pageV.getViewById("codigoBarras");
	var navegationVen = {
		moduleName: "home/Vender",
		transition: {
			name: "slideBottom"
		}
	};
	frames.topmost().navigate(navegationVen);
}

exports.pageLoaded = pageLoaded;
