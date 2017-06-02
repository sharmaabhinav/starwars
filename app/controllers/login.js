import Ember from 'ember'

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  init () {
    this.set('errorMessage', '')
  },

  actions: {
    authenticate() {
      let { username, password } = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:custom', username, password).then(
        (result) => {
          this.transitionToRoute('/search')
        },
        (reason) => {
          this.set('errorMessage', reason)
        }
      )
    }
  }
});