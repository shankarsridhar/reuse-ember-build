import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this._super(...arguments);

    return fetch('https://jsonplaceholder.typicode.com/todos').then(response =>
      response.json()
    );
  }
});
