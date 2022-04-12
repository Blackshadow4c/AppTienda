var observableModule = require("tns-core-modules/data/observable");

function IniciarViewModel() {
	var viewModel = observableModule.fromObject({
    onButtonTap: function () {
      console.log("Button was pressed");
    },

    textFieldValue: "",


	});

	return viewModel;
}

module.exports = IniciarViewModel;
