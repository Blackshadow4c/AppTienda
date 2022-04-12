var frameModule = require("tns-core-modules/ui/frame");
var IniciarViewModel = require("./Iniciar-view-model");
var iniciarViewModel = new IniciarViewModel();
var frames = require("ui/frame");
var dialogs = require("tns-core-modules/ui/dialogs");
global.userName;

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = iniciarViewModel;
}
exports.btnLogin = function (args) {
	const page1 = args.object.page;
	const nomU = page1.getViewById("nombreUsuario");
	const conT = page1.getViewById("contrasena");


	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			if (xhttp.responseText == "1") {
				global.userName = nomU;//variable que guarda el nombre de usuario para uso del programa
				dialogs.alert({
					title: "Aviso!",
					message: "Login con exito",
					okButtonText: "ok"
				}).then(function () {

					var navegation3B = {
						moduleName: "home/Bienvenido",
						transition: {
							name: "slideBottom"
						}
					};
					frames.topmost().navigate(navegation3B);
				})
			} else if (xhttp.responseText == "0") {
				console.log("Fallo");
				dialogs.alert({
					title: "Aviso!", message: "No existe",
					okButtonText: "ok"
				}).then(function () {
					nomU.text = "";
					conT.text = "";
				})
			}
		}
	};
	xhttp.open("GET", "https://progintcarlos626.000webhostapp.com/LoginSimple.php?nombreUsuario=" + nomU.text + "&contrasena=" + conT.text, true);
	xhttp.send();

}
exports.btnRegresar = function (args) {
	//navegacion la ventana Bajas
	var navegation1 = {
		moduleName: "home/home-page",
		transition: {
			name: "slideBottom"
		}
	};
	frames.topmost().navigate(navegation1);
}


exports.pageLoaded = pageLoaded;
