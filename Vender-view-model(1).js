var observableModule = require("tns-core-modules/data/observable");

function VenderViewModel() {
	var viewModel = observableModule.fromObject({
    onButtonTap: function () {
      console.log("Button was pressed");
    },

    textFieldValue: "",


	});

	return viewModel;
}

module.exports = VenderViewModel;
