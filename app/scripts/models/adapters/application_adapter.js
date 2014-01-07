Web.ApplicationAdapter = DS.RESTAdapter.extend({
  host: Web.get('api_root'),
  namespace: 'v1',

  ajax: function(url, type, hash) {
    // console.log('ajax', arguments);
    var adapter = this;

    return new Ember.RSVP.Promise(function(resolve, reject) {
      hash = adapter.ajaxOptions(url, type, hash);

      hash.success = function(json) {
        // console.log('success', json);
        Ember.run(null, resolve, json);
      };

      hash.error = function(jqXHR, textStatus, errorThrown) {
        // console.log(arguments);
        Ember.run(null, reject, adapter.ajaxError(jqXHR));
      };

      Ember.$.ajax(hash);
    });
  },
  ajaxOptions: function(url, type, hash) {
    // console.log('ajaxOptions', arguments);
    hash = hash || {};
    hash.url = url;
    hash.type = type;
    hash.dataType = 'json';
    hash.xhrFields = {
      withCredentials: true
    };
    hash.context = this;

    if (hash.data && type !== 'GET') {
      hash.contentType = 'application/json; charset=utf-8';
      hash.data = JSON.stringify(hash.data);
    }

    if (this.headers !== undefined) {
      var headers = this.headers;
      hash.beforeSend = function (xhr) {
        forEach.call(Ember.keys(headers), function(key) {
          xhr.setRequestHeader(key, headers[key]);
        });
      };
    }

    return hash;
  },

});


