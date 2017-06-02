import Base from 'ember-simple-auth/authenticators/base'

export default Base.extend({
  swapi: Ember.inject.service(),
  restore(data) {
  },
  authenticate(username, password) {
    var promise = new Promise( (resolve, reject) => {
      this.get('swapi').getPassword(username).then((response) => {
        let userInfo = response.results[0]
        if(userInfo.birth_year === password && userInfo.name === username){
          resolve('Correct username and password')
        }else{
          reject('Incorrect username /  password')
        }
      })
    })

    return promise
  },
  invalidate(data) {
    return new Promise(function (resolve, reject) {
      resolve('success')
    })
  }
})