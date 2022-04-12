var frameModule = require("tns-core-modules/ui/frame");
var ModificarViewModel = require("./Modificar-view-model");
var modificarViewModel = new ModificarViewModel();
var frames = require("ui/frame");
var dialogs = require("tns-core-modules/ui/dialogs");

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = modificarViewModel;
}
exports.btnRM = function (args) {
	//navegacion la ventana Registrar
	var navegationRM = {
		moduleName: "home/Bienvenido",
		transition: {
			name: "slideBottom"
		}
	};
	frames.topmost().navigate(navegationRM);
}
exports.btnModificar = function (args) {
	//navegacion la ventana Registrar
	const pageMo = args.object.page;
	const nomU = global.userName;
	const codBar = global.codigoBarras;
	const nom = pageMo.getViewById("nombre");
	const can = pageMo.getViewById("cantidad");
	const pre = pageMo.getViewById("precio");

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			if (xhttp.responseText == "1") {
				dialogs.alert({
					title: "Aviso!",
					message: "Se Modifico con Exito",
					okButtonText: "ok"
				}).then(function () {

					var navegationMod = {
						moduleName: "home/Bienvenido",
						transition: {
							name: "slideBottom"
						}
					};
					frames.topmost().navigate(navegationMod);
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
	xhttp.open("GET", "https://progintcarlos626.000webhostapp.com/Modificar.php?nombreUsuario=" + nomU.text + "&codigo=" + codBar.text + "&nombre=" + nom.text + "&cantidad=" + can.text + "&precio=" + pre.text, true);
	xhttp.send();


}


exports.pageLoaded = pageLoaded;
