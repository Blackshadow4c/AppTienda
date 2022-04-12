var observableModule = require("tns-core-modules/data/observable");

function NuevoViewModel() {
	var viewModel = observableModule.fromObject({
    onButtonTap: function () {
      console.log("Button was pressed");
    },

    progressValue: 80,

    textFieldValue: "",


	});

	return viewModel;
}

module.exports = NuevoViewModel;
