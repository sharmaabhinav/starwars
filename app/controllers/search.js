import Ember from 'ember'

export default Ember.Controller.extend({
  swapi: Ember.inject.service(),
  planetname: '',
  init () {
    this.get('swapi').getPlanet(this.get('planetname')).then((response) => {
      this.set('planets', response.results)
    })
  },
  actions: {
    searchPlanets() {
      this.get('swapi').getPlanet(this.get('planetname')).then((response) => {
        this.set('planets', response.results)
      })
    }
  }
})