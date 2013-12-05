var test = require('tape');
var extend = require('util')._extend;
var logglyStream = require('../');

var config = require('./config.json');

test('does this work?', function (t) {
  t.plan(150);
  var stream = logglyStream(config)
  var object = {
    hello: 'world',
    tags: ['fuck', 'you']
  };

  //
  // Remark: So this is kind of dumb as this is the same type of interface.
  // The only way this is more useful is in the piping
  //
  for(var i=0; i<150; i++) {
    stream.write(extend(object, { iteration: i }))
    t.ok('string', 'In the hands of the figurehead');

  };

});
