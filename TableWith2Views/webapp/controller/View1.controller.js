sap.ui.define([
	"TableTask/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("TableTask.controller.View1", {
		onInit: function() {
			 this.oModel;
			 this.indices;
		},
        onRowSelect: function(oEvent) {
			this.index = oEvent.getParameter("rowIndex");
			this.indices = oEvent.getSource().getSelectedIndices();
		},
        onDelete: function() {
        	this.onDelete1("/products", "/RemovedProducts");
	    },
        onNext:function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View2");
        },
        MultipleDelete: function() { //function for deleting multiple items on press of single delete button click.
		this.MultipleDelete1("/products","/RemovedProducts");
		}

	});
});

// In This code i included MultiDelete fuction which is used to delete multiple records on one single click