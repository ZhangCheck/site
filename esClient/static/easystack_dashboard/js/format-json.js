/**
 * JSONfn - javascript plugin to convert javascript objects, ( including ones with functions )
 * to string and vise versa.
 *
 * Version - 0.31.0
 * Copyright (c) 2012 Vadim Kiryukhin
 * vkiryukhin @ gmail.com
 * http://www.eslinstructor.net/jsonfn/
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 *   USAGE:
 *
 *   require('jsonfn').JSONfn.stringify(obj);
 *  require('jsonfn').JSONfn.parse(str);
 *
 *        @obj   -  javascript object;
 *     @strfn -  String in JSON format;
 *
 *   Examples:
 *
 *   var strfn = require('jsonfn').JSONfn.stringify(obj);
 *  var objfn = require('jsonfn').JSONfn.parse(strfn);
 *
 */

// Create a JSON object only if it does not already exist.
var JSONfn;
if (!JSONfn) {
  JSONfn = {};
}

(function () {

  JSONfn.stringify = function (obj) {
    return JSON.stringify(obj, function (key, value) {
      return (typeof value === 'function' ) ? value.toString() : value;
    });
  }

  JSONfn.parse = function (str) {
    return JSON.parse(str, function (key, value) {
      if (typeof value != 'string') return value;
      return ( value.substring(0, 8) == 'function') ? eval('(' + value + ')') : value;
    });
  }
}());


var _format_json;
//module.exports =
_format_json = (function () {

  function json(o) {
    return JSONfn.stringify(o);
  }

  var n = null
    , leadOp = '\n$2$1 '
    , tailOp = /\ ?([,\{\[])\n ( *)(?: )/gm // make trailing ,{[ become leading
    , cuddle = /(^|[,\{\[] ?)\n */gm // cuddle brackets, braces and array items
    , format =
    {
      terse: json,
      plain: function (o, i) {
        return json(o);
        // return JSON.stringingify(o, n, i == n ? 2 : i);
      },
      diffy: function (o) {
        return format.plain(o).replace(tailOp, leadOp).replace(cuddle, '$1');
      },
      space: function (o) {
        return JSON.stringify(o, null, 1).replace(/\n */g, ' ');
      },
      lines: function (o) {
        if ('object' !== typeof o || o == null) return format.terse(o);
        if ('[object Array]' === Object.prototype.toString.call(o))
          return '[ ' + o.map(format.space).join('\n, ') + '\n]';
        var res = '', sep = '{ ', key;
        for (key in o) {
          res += sep + json(key) + ': ' + format.space(o[key]);
          sep = '\n, ';
        }
        return res + '\n}';
      }
    }
  ;
  return format;
})();
