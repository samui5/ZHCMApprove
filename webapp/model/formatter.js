sap.ui.define([
	], function () {
		"use strict";

		return {
			/**
			 * Rounds the currency value to 2 digits
			 *
			 * @public
			 * @param {string} sValue value to be formatted
			 * @returns {string} formatted currency value with 2 digits
			 */
			currencyValue : function (sValue) {
				if (!sValue) {
					return "";
				}

				return parseFloat(sValue).toFixed(2);
			},
			convertPDFToUrl: function(vContent){
				var decodedPdfContent = atob(vContent.replace("data:application/pdf;base64,",""));
				var byteArray = new Uint8Array(decodedPdfContent.length);
				for(var i=0; i<decodedPdfContent.length; i++){
				    byteArray[i] = decodedPdfContent.charCodeAt(i);
				}
				var blob = new Blob([byteArray.buffer], { type: 'application/pdf' });
				jQuery.sap.addUrlWhitelist("blob");
				return URL.createObjectURL(blob);
			},
			getStatusEnable: function(claimType){
				switch (claimType) {
					case '0':
						return true;
						break;
					case '1':
						return true;
						break;
					case '2':
						return false;
						break;
					case '3':
						return false;
						break;
					default:
				}
			},
			getClaimType: function(claimType){
				switch (claimType) {
					case '2509':
						return "Forklift Covering";
						break;
					case '2513':
						return "Hardship";
						break;
					default:
				}
			},
			formatDate: function(sDate){
				var dateObj = new Date(sDate);
				dateObj.setDate(dateObj.getDate());
				var dd = dateObj.getDate();
				dateObj.setMonth(dateObj.getMonth());
				var mm = dateObj.getMonth() + 1;
				var yyyy = dateObj.getFullYear();
				if (dd < 10) {
					dd = '0' + dd;
				}
				if (mm < 10) {
					mm = '0' + mm;
				}
				return dd + '.' + mm + '.' + yyyy;
			}
		};

	}
);