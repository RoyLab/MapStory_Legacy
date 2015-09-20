Ext.define('senchaApp1.view.AudioPlayer',{
	extend:'Ext.slider.Slider',
	xtype:'mp3player',
	requires:[
	],
	config:{
	    value: 20,
	    minValue: 0,
	    maxValue: 100,
	},


	play: function(fileName, length){
		function onMediaSuccess(){};

    	function onMediaError(e){
	    	var str = ''; 
	    	for (i in e) {
	    		str += i
	    	};
	    	alert('error'+ e.code);
	    };

	    function onMediaStatusChanged(oldStatus, newStatus){
	    	alert('change status:'+oldStatus+newStatus);
	    };

		try{
			var player = new Media(fileName, onMediaSuccess, onMediaError, onMediaStatusChanged);
		}
		catch(err){
			console.error('No Media support found.')
			var webPlayer = true;
		}
		///android_asset/www/resources/mp3/04.mp3

		if (webPlayer){
		    var player = Ext.create('Ext.Audio',{
		    	url:fileName,
		    	hidden:true,
		    	listeners:{
		    		ended:function(){clearInterval(timer);alert('stop');}
		    	}
		    });			
			player.play();
			var timer = setInterval(
				function(){
					var slider = Ext.getCmp('player');
					slider.setValue(100*player.getCurrentTime()/length);
					console.log(player.getCurrentTime());
				},
				500
			)
		}

		if (player != undefined || player != null){
			this.setValue(0);

		}



	},

	pause: function(){

	},

	resume: function(){

	},

});