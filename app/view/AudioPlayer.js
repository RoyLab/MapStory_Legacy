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

		var loaded = true;
		this.audioLen = length;

    	function onMediaError(e){
    		loaded = false;
	    	console.log(e);
	    	alert('Error: '+ e.code);
	    };

	    function onMediaStatusChanged(newStatus){
	    	if (newStatus == Media.MEDIA_STOPPED)
				clearInterval(timer);	
	    };

		try{
			this.mp3player = new Media('/android_asset/www/'+fileName, null, onMediaError, onMediaStatusChanged);
		}
		catch(err){
			console.error('No Media support found.')
			this.webPlayer = true;
		    this.mp3player = Ext.create('Ext.Audio',{
		    	url:fileName,
		    	hidden:true,
		    	listeners:{
		    		ended:function(){clearInterval(timer);}
		    	}
		    });
		}
		///android_asset/www/resources/mp3/04.mp3

		if (this.mp3player && loaded){
			this.mp3player.play();
			var timer = setInterval(this.updateSlider, 500);
		}
	},

	updateSlider: function(){
		var slider = Ext.getCmp('player');
		if (!slider) alert('Wrong');

		if (slider.webPlayer){
	    	slider.setValue(100*slider.mp3player.getCurrentTime()/slider.audioLen);
	    }
		else{
			var time = 0;
			slider.mp3player.getCurrentPosition(function(t){
				slider.setValue(100*t/slider.audioLen);
			});
		}

	},

	pause: function(){

	},

	resume: function(){

	},

});