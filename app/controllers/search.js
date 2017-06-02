import Ember from 'ember'

export default Ember.Controller.extend({
  swapi: Ember.inject.service(),
  planetname: '',
  init () {
    this.set('planets', [])
  },
  actions: {
    searchPlanets() {
      let planetname = this.get('planetname')
      if(planetname === ''){
         this.set('planets', [])
      } else {
        this.get('swapi').getPlanet(this.get('planetname')).then((response) => {
          this.set('planets', response.results)
        })
      }
    }
  }
})