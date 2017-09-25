
(function() {
  'use strict';

  angular
    .module('horizon.framework.widgets.message-alert')
    .factory('horizon.framework.widgets.message-alert.service', ['$timeout',alertService]);

  function alertService($timeout) {
    var messages = [];
    var service = {
      add: add,
      get: get,
      cancel: cancel,
      clearAll: clearAll,
      isMessageDisplay: isMessageDisplay
    };

    return service;


    /**
     * Remove a single message.
     */
    function cancel(index) {
      messages.splice(index, 1);
    }

    /**
      * Create a message object and push it to the messages array.
     */
    function add(msg) {
      var message = {
        /* jshint validthis:true */
        msg:      msg,
        cancel:   cancel
      };
      messages.push(message);
    }

    /**
     * Return all messages.
     */
    function get() {
      return messages;
    }

    /**
     * Remove all messages.
     */
    function clearAll() {
      messages = [];
    }

    function isMessageDisplay(msg) {
        return messages.some(function(item) {
            return item.msg === msg;
        });
    }

  }
})();
