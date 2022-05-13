sap.ui.define([
	'sap/ui/core/mvc/Controller'
], function(Controller) {
	'use strict';
	return Controller.extend("TableTask.controller.BaseController", {
		onInit: function() {},
		onDelete1: function(Entity1, Entity2) {
			var value1 = Entity1;
			var value2 = Entity2;
			//1. get object of model
			if (!this.oModel) {
				this.oModel = this.getView().getModel();
			}
			//var oModel = this.getView().getModel();

			//2. get array of data products so that we can apply splice method
			var aData = this.oModel.getProperty(value1);
			this.allData = aData;
			if (aData.length > 0) {
				//3. remove record of which index is selected. and store it in remove_product variable.
				var removed_product = aData.splice(this.index, 1);
				//4. set remaining values again to the object of model i. e. OModel
				this.oModel.setProperty(value1, aData);

				//  <!-- code of getting deleted Eelement-->

				//1. create array for deleted elements
				var aData1 = this.oModel.getProperty(value2);
				//2. push removed value into the array
				aData1.push(removed_product[0]);
				//3. set array which is of removed elements to the model object.
				this.oModel.setProperty(value2, aData1);
				//this.onNext(removed_product);
			}
		},
		MultipleDelete1: function(Entity1, Entity2) { //function for deleting multiple items on press of single delete button click.
			//code for deleting records
			var value1 = Entity1;
			var value2 = Entity2;
			if (!this.oModel) {
				this.oModel = this.getView().getModel();
			}
			//var oModel = this.getView().getModel();
			var AllData = this.oModel.getProperty(value1);
			var j = this.indices.length - 1;
			var removed_product = [];
			for (var i = AllData.length - 1; i >= 0; i--) {
				var a = this.indices;
				if (a[j] === i) {
					removed_product.push(AllData.splice(a[j], 1));
					j--;
				}
			}
			this.oModel.setProperty(value1, AllData);
			//code for retriving multiple deleted Records
			var aData1 = this.oModel.getProperty(value2);
			for (var i = removed_product.length - 1; i >= 0; i--) {
				aData1.push(removed_product[i][0]);
				this.oModel.setProperty(value2, aData1);
			}

		}

	});
});