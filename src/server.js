const renderToString = require('react-dom/server').renderToString;

function HtmlUniversalPlugin (options) {

}

HtmlUniversalPlugin.prototype.apply = function (compiler) {
  var self = this;

  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (htmlPluginData, cb) {
      new Error('HEY!');
      console.log(htmlPluginData);
      cb(null, htmlPluginData);
    });
  });
};

module.exports = HtmlUniversalPlugin;