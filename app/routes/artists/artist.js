import Ember from 'ember';

export default Ember.Route.extend({

	beforeModel: function(){
			document.title = 'Artist';
	},
	model: function(params) {
		
		console.log(params);
		console.log(params.id);
		 var url = `http://itp-api.herokuapp.com/api/artists/${params.id}/songs`;
		 var promise = $.getJSON(url);
		 return promise.then(function(data){return data.songs});
	},
	afterModel: function(model){
		console.log(model);
	}
});

