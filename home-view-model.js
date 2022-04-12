var observableModule = require("tns-core-modules/data/observable");

function HomeViewModel() {
  var viewModel = observableModule.fromObject({
    onButtonTap: function () {
      console.log("Button was pressed");
    },


  });

  return viewModel;
}

module.exports = HomeViewModel;
