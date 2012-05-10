(function(){
    //the function we just made
	var bindEvent = function(elem,event,cb) {
		if ( elem.addEventListener ) {
			elem.addEventListener(event,cb,false);
		} else if ( elem.attachEvent ) {
			elem.attachEvent('on' + event, function(){
				cb.call(event.srcElement,event);
			});
		}
	},

    //we will use the popular dollar symbol
	$ = window.$ = function(id) {
        //the $ returns a new Boss object
		return new Boss(id);
	},

    //the Boss object constructor
	Boss = window.Boss =  function(id) {
        /* rather than have full selector support, Boss only supports id's
         * boss stores a reference to the elment for later use
         * we explicitly check to see if the id is the window
         * for cases where we want to bind events to the window
         * (something like a load event)
         */
         if ( id === window ) {
             this.elem = window;
         } else {
             this.elem = document.getElementById(id);
         }
    };

    //set up the methods that belong to a Boss object
	Boss.prototype = {
        //this is just a wrapper over our bindEvent function
		bind:function(etype,cb) {
            //use the elem reference
			bindEvent(this.elem,etype,cb);
            //return the Boss object for chaining
			return this;
		},
        //a simple getter setter for style values
		css:function(property,value) {
            //if the property and value are both passed, we are setting the css
			if ( property && value ){
				this.elem.style[property] = value;
            //otherwise we are returning it
			} else if ( property ) {
				return this.elem.style[property];
			}
		}
	};

})();
