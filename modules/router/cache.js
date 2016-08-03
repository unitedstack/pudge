var fetch = require('client/applications/dashboard/cores/fetch');

module.exports = {
  getRouterList: function() {
    return fetch.get({
      url: '/api/v1/routers?tenant_id=' + HALO.user.projectId
    }).then(function(data) {
      return data.routers;
    });
  }
};
