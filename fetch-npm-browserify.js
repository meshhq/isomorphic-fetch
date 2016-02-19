// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require('whatwg-fetch');
module.exports = self.fetch.bind(self);
module.exports.Headers = self.Headers;
module.exports.Request = self.Request;
module.exports.Response = self.Response;
