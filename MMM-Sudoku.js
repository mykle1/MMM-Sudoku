/* Magic Mirror
 * Module: MMM-Suduko
 * 
 * By Mykle1 - MIT Licensed
 * 
 */

Module.register("MMM-Sudoku",{
		
	defaults: {
			height:"290px",
			width:"216px"
	},
	
	getStyles: function() {
        return ["MMM-Sudoku.css"];
    },


	
	getDom: function() {
		
		
		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none";
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		type="text/javascript";
		iframe.src =  '//100widgets.com/js_data.php?id=162';
		
		return iframe;
	},
	
	/////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_SUDOKU') {
            this.hide(1000);
        }  else if (notification === 'SHOW_SUDOKU') {
            this.show(1000);
        }
            
    },

});
