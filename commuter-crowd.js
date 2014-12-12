var Transport = new Mongo.Collection('transport');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    transports: function () {
      return Transport.find({});
    },

    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
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
