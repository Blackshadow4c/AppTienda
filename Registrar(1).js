var frameModule = require("tns-core-modules/ui/frame");
var RegistrarViewModel = require("./Registrar-view-model");
var registrarViewModel = new RegistrarViewModel();
var frames = require("ui/frame");
var dialogs = require("tns-core-modules/ui/dialogs");

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = registrarViewModel;
}
exports.btnRegresar = function (args) {
	//navegacion la ventana Registrar
	var navegation2 = {
		moduleName: "home/home-page",
		transition: {
			name: "slideBottom"
		}
	};
	frames.topmost().navigate(navegation2);
}
exports.btnRegistra = function (args) {
	//navegacion la ventana Registrar
	const page0 = args.object.page;
	const nom = page0.getViewById("nombre");
	const nomT = page0.getViewById("nombreTienda");
	const codP = page0.getViewById("codigoPostal");
	const nomU = page0.getViewById("nombreUsuario");
	const conT = page0.getViewById("contrasena");


	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			if (xhttp.responseText == "1") {
				dialogs.alert({
					title: "Aviso!",
					message: "Te as registado con exito",
					okButtonText: "ok"
				}).then(function () {

					var navegation3 = {
						moduleName: "home/Iniciar",
						transition: {
							name: "slideBottom"
						}
					};
					frames.topmost().navigate(navegation3);
				})
			} else if (xhttp.responseText == "0") {
				console.log("Fallo");
				dialogs.alert({
					title: "Aviso!", message: "No existe",
					okButtonText: "ok"
				}).then(function () {
					codigo.text = "";
				})
			}
		}
	};
	xhttp.open("GET", "https://progintcarlos626.000webhostapp.com/Usuarios.php?nombre=" + nom.text + "&nombreTienda=" + nomT.text + "&codigoPostal=" + codP.text + "&nombreUsuario=" + nomU.text + "&contrasena=" + conT.text, true);
	xhttp.send();



}
exports.pageLoaded = pageLoaded;
