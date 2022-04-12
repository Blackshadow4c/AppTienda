var observableModule = require("tns-core-modules/data/observable");

function BienvenidoViewModel() {
	var viewModel = observableModule.fromObject({
    onButtonTap: function () {
      console.log("Button was pressed");
    },


	});

	return viewModel;
}

module.exports = BienvenidoViewModel;
