var Writable = require('stream').Writable;
var loggly = require('loggly');
var util = require('util');
var extend = util._extend;

module.exports = LogglyStream;

util.inherits(LogglyStream, Writable);

function LogglyStream (options) {
  if (!(this instanceof LogglyStream)) { return new LogglyStream(options) }
  Writable.call(this,
      extend({ decodeStrings: false, objectMode: true}, options));
  //
  // Remark: we are assuming object streams here so JSON is true
  //
  options = extend(options, { json: true });
  this.loggly = loggly.createClient(options);

};

LogglyStream.prototype._write = function (data, encoding, callback) {
  //
  // Remark we are going to do fire and forget style cause otherwise it will
  // cause backpressue and fuck that shit. Also allow tags to be on the data
  // object for easy addition
  //
  this.loggly.log(data, data.tags);

  callback();
};
