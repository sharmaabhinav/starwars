import Ember from 'ember';


export default Ember.Service.extend({

  ajax: Ember.inject.service(),

  getPassword (username) {
    return this.get('ajax').request(`http://swapi.co/api/people/?search=${username}`)
  }

});
