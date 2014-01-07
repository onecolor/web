Web.ApplicationSerializer = DS.RESTSerializer.extend({
  serializeIntoHash: function(hash, type, record, options) {
    key = Em.String.pluralize(type.typeKey);
    hash[key] = [this.serialize(record, options)];
  },
  extractSingle: function(store, type, payload, id, requestType) {
    // console.log('extractSingle', arguments);
    //move item from plural key array to singular object
    if(requestType !== 'deleteRecord') {
      var singular = Em.String.decamelize(type.typeKey);
      var plural = Em.String.pluralize(singular);

      payload[singular] = payload[plural][0];
      delete payload[plural];
      delete payload.links;
      // console.log('-> extractSingle munged', payload);
    }

    return this._super(store, type, payload, id, requestType);
  },
  extractArray: function(store, type, payload, id, requestType) {
    // console.log('extractArray', arguments);
    delete payload.links;

    // console.log('-> extractArray munged', payload);
    return this._super(store, type, payload, id, requestType);
  },
  normalizePayload: function(type, payload) {
    // restructure the payload into the form the
    // REST Adapter expects, and it will both pull
    // out the primary record and sideload any other
    // records
    // console.log('normalizePayload', arguments);
    return this._super(type, payload);
  },
  normalize: function(type, hash, prop) {
    for(var link in hash.links) {
      if (hash.links.hasOwnProperty(link)) {
        // console.log('   -> ', link);
        hash[link] = hash.links[link];
      }
    }

    delete hash.links;

    if(hash.user_id) { //TODO: GJ: make generic
      hash.user = hash.user_id;
    }

    // console.log(' -> normalize munged', hash);
    return this._super(type, hash, prop);
  },
});
