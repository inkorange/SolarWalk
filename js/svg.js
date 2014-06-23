
(function($){
	
	$.svgPlay = function(dom){
	    
	    var _obj = dom,
	    	poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon"),
	    	Polypoints = [
	    		{x : 100, 	y : 40},
	    		{x : 190,	y : 60},
	    		{x : 160,	y : 180},
	    		{x : 300,	y : 250},
	    		{x : 400,	y : 20},
	    		{x : 500,	y : 200},
	    		{x : 700,	y : 30}
	    	],
	    	/*
	    	buildAppContainer = function(container, appObj) {
	    		// The template that contains the app content, the title and buttons and any imagery
	    		var appContainer = $("<div class='"+container.style+"'></div>");
	    		appContainer.css("background-image", "url('" + appObj.image + "')");
	    		appContainer.append("<section><button>LEARN MORE</button></section>");
	    		appContainer.prepend("<h3>" + appObj.title + "</h3>").attr("data-app",appObj.num).attr("data-styleorder",container.order);
				_obj.append(appContainer);
	    	},

	    	instantiateOrder = function() {
	    		// basically if there are less apps than containers (5) we need to add 2x the number of apps 
	    		// to the collection to make it scroll correctly.
	    		if (apps.length < appHolders.length) {
	    			apps = apps.concat(apps);
	    		}

	    		for (i=0; i < apps.length; i++) {
	    			if (i < appHolders.length) {
	    				// the first 5 will get specific classes for initial display
	    				buildAppContainer(appHolders[i], apps[i]);	
	    			} else {
	    				// the rest of the apps will reside in the far right container class
	    				buildAppContainer(appHolders[4], apps[i]);
	    			}
	    		}
	    		allAppContainers = _obj.find("div");
	    	},
			*/
			PointsToString = function() {
				var stringer = "";
	    		for (i=0; i < Polypoints.length; i++) {
	    			stringer += Polypoints[i].x + " " + Polypoints[i].y;
	    			if (i < Polypoints.length - 1) {
	    				stringer += ", ";
	    			}
	    		}	
	    		return stringer;			
			},

			drawPoly = function() {
				poly.setAttribute("points", PointsToString(Polypoints));
				_obj.html(poly);
			},

			buildSVGStructure = function() {
				drawPoly();
			},
			modifyPoly = function(modifier) {
	    		for (i=0; i < Polypoints.length; i++) {
	    			Polypoints[i].x = Polypoints[i].x * modifier;
	    			Polypoints[i].y = Polypoints[i].y * modifier;
	    		}	
			},
	    	moveLeft = function() {
	    		//modifyPoly(1.2);
	    		
	    		//$(poly).rotate(10);
	    		$(poly).css('transform', 'scale(1.1)');
	    		//drawPoly();
	    	},

	    	moveRight = function() {
	    		$(poly).css('transform', 'scale(.9)');
	    		//drawPoly();
	    	},
			
	    	bindControls = function() {

				$(document).keydown(function(e){
					var keyCode = e.keyCode || e.which;
					switch(keyCode) {
					    case 37 : moveRight(); break;
					    case 39 : moveLeft(); break;
					}
				});

	    	},

		    init = function() {
		    	buildSVGStructure();
		    	bindControls();



		    	//setInterval(moveLeft, 6000);
		    };

	    init();
	    
	    return this;

	};

})(jQuery);



















var mockAppData = [
	    		{ title : 'This is the first App', image : 'app1.jpg', num : 1 }, 
	    		{ title : 'This is the second App with more text so I hope it shows', image : 'app2.jpg', num : 2 }, 
				{ title : 'This is another App', image : 'app3.jpg', num : 3 }
	    	];
