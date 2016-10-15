

import Ember from 'ember';

export default Ember.Component.extend({
	isPopular: Ember.computed('song.playCount', function(){
		if(this.get('song.playCount') > 20){
			return true;
		} else {
			return false;
		}
	}),

	isCheap: Ember.computed('song.price', function(){
		if(this.get('song.price') < 1.00){
			return true;
		} else {
			return false;
		}
	}),

	isExpensive: Ember.computed('song.price', function(){
		if(this.get('song.price') > 1.00){
			return true;
		} else {
			return false;
		}
	})
});

