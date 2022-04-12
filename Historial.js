var frameModule = require("tns-core-modules/ui/frame");
var HistorialViewModel = require("./Historial-view-model");
var historialViewModel = new HistorialViewModel();
var frames = require("ui/frame");
var dialogs = require("tns-core-modules/ui/dialogs");
const fromObject = require("tns-core-modules/data/observable").fromObject;

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = historialViewModel;
}

exports.hh = function (args) {
	const pagehh = args.object.page;
	const nuB = global.userName;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {

		if (this.readyState == 4 && this.status == 200) {

			const response = xhttp.responseText;
			//console.log(xhttp.responseText);
			const [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez] = response.split("<br>");

			const source = fromObject({
				un: uno,
				doss: dos,
				tre: tres,
				cuatr: cuatro,
				cinc: cinco,
				sei: seis,
				siet: siete,
				och: ocho,
				nuev: nueve,
				die: diez
			});
			source.set("un", uno);
			source.set("doss", dos);
			source.set("tre", tres);
			source.set("cuatr", cuatro);
			source.set("cinc", cinco);
			source.set("sei", seis);
			source.set("siet", siete);
			source.set("och", ocho);
			source.set("nuev", nueve);
			source.set("die", diez);

			pagehh.bindingContext = source

		}
	};
	xhttp.open("GET", "https://progintcarlos626.000webhostapp.com/Historial.php?nombreUsuario=" + nuB.text, true);
	xhttp.send();
	console.log(nuB.text);
}

exports.regresarBH = function (args) {
	//navegacion la ventana Registrar
	var navegationBV = {
		moduleName: "home/Bienvenido",
		transition: {
			name: "slideBottom"
		}
	};
	frames.topmost().navigate(navegationBV);
}
exports.pageLoaded = pageLoaded;
