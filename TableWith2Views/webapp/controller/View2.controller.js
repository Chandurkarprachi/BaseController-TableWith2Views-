sap.ui.define([
	"TableTask/controller/BaseController",
	'sap/m/MessageToast'
], function(BaseController,MessageToast) {
	"use strict";

	return BaseController.extend("TableTask.controller.View2", {
		onInit: function() {
            this.oModel;

            this.oRouter = this.getOwnerComponent().getRouter();
            //We need a method which is triggered EVERYTIME route changes
            this.oRouter.getRoute("View2").attachMatched(this.herculis, this);
		},
        herculis:function(){
            
             this.getView().getModel();
         
            MessageToast.show("herculis is called");
        },
        
		onBack: function(){
           	history.go(-1);
        },
		onRowSelect: function(oEvent) {
			this.index = oEvent.getParameter("rowIndex");
			this.indices = oEvent.getParameter("rowIndices");
		},
		ReDelete: function() {
			this.onDelete1("/RemovedProducts", "/products");
			
		},
	 MultipleDelete: function() { //function for deleting multiple items on press of single delete button click.
		this.MultipleDelete1("/RemovedProducts","/products");
		}
	});
});

// In This code i included MultiDelete fuction which is used to delete multiple records on one single click