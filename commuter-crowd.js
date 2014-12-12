var Transport = new Mongo.Collection('transport');

if (Meteor.isClient) {
  // counter starts at 0
  //Session.setDefault('counter', 0);

  Template.hello.helpers({
    transports: function () {
      return Transport.find({});
    },

    line: function () {
      return Session.get('selectedLine');
    }
  });

  Template.hello.events({
    'change #lines': function (event) {
      // increment the counter when button is clicked
      Session.set('selectedLine', event.target.value);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Transport.remove({});
    // code to run on server at startup
    Transport.insert({
      name: 'MBTA Commuter Rail',
      type: 'commuter rail',
      location: 'Boston, MA',
      lines: [
        {
          name: 'Providence/Stoughton Line',
          stops: [
            'Wickford Junction',
            'TF Green Airport',
            'Providence',
            'South Attleboro',
            'Attleboro',
            'Mansfield',
            'Sharon',
            'Stoughton',
            'Canton Center',
            'Canton Junction',
            'Route 128',
            'Hyde Park',
            'Ruggles',
            'Back Bay',
            'South Station'
          ]
        }
      ]
    });
  });
}

Handlebars.registerHelper('debug', function(optionalValue) {
  console.log('Current Context');
  console.log('====================');
  console.log(this);

  if (optionalValue) {
    console.log('Value');
    console.log('====================');
    console.log(optionalValue);
  }
});
