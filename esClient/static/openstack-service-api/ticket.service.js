/**
 * Copyright 2015 EasyStack Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
(function() {
  'use strict';

  angular
    .module('horizon.openstack-service-api')
    .service('horizon.openstack-service-api.ticket', TicketAPI);

  TicketAPI.$inject = [
    'horizon.framework.util.http.service',
    'horizon.framework.widgets.toast.service'
  ];

  /**
   * @ngdoc service
   * @name horizon.openstack-service-api.ticket
   * @description Provides access to Ticket APIs.
   */
  function TicketAPI(apiService, toastService) {

    this.listTickets = function(params, type) {
      var config = {};
      if (params) {
        config.params = params;
      }
      return apiService.get('/api/tickets/tickets/', config).error(function() {
        if(type === 'quota'){
          toastService.add('error', gettext('Unable to retrieve quota applys.'));
        }else{
          toastService.add('error', gettext('Unable to retrieve tickets.'));
        }
      });
    };

    this.listProjectQuotaTickets = function(params) {
      var config = {};
      if (params) {
        config.params = params;
      }
      return apiService.get('/api/tickets/project_quota_tickets/', config).error(function() {
        toastService.add('error',  gettext('Unable to retrieve quota requests.'));
      });
    };

    this.createTicket = function(ticket) {
      return apiService.post('/api/tickets/tickets/', ticket);
    };

    this.getTicket = function(ticket_id, type) {
      return apiService.get('/api/tickets/tickets/' + ticket_id).error(function() {
        if(type === 'quota'){
          toastService.add('error', gettext('Unable to retrieve quota apply.'));
        }else{
          toastService.add('error', gettext('Unable to retrieve ticket.'));
        }
      });
    };

    this.deleteTicket = function(ticket_id) {
      return apiService.delete('/api/tickets/tickets/' + ticket_id).error(function() {
        toastService.add('error', gettext('Unable to delete ticket.'));
      });
    };

    this.updateTicket = function(ticket_id, ticket) {
      return apiService.patch('/api/tickets/tickets/' + ticket_id, ticket).error(function() {
        toastService.add('error', gettext('Unable to update ticket.'));
      });
    };

    this.listTypes = function() {
      return apiService.get('/api/tickets/types/').error(function() {
        toastService.add('error', gettext('Unable to get ticket types.'));
      });
    };

    this.getAttachment = function(attachment_id) {
      return apiService.get('/api/tickets/attachments/' + attachment_id).error(function() {
        toastService.add('error', gettext('Unable to get attachment.'));
      });
    };

    this.deleteAttachment = function(attachment_id) {
      return apiService.delete('/api/tickets/attchments/' + attachment_id).error(function() {
        toastService.add('error', gettext('Unable to delete attachment.'));
      });
    };

    this.createReply = function(reply) {
      return apiService.post('/api/tickets/replies/', reply).error(function() {
        toastService.add('error', gettext('Unable to create reply.'));
      });
    };

    this.getRepliesByTicketId = function(ticket_id) {
      return apiService.get('/api/tickets/tickets/' + ticket_id + '/replies/').error(function() {
        toastService.add('error', gettext('Unable to get replies for the current ticket.'));
      });
    };

    this.getAttachmentsByTicketId = function(ticket_id) {
      return apiService.get('/api/tickets/tickets/' + ticket_id + '/attachments/').error(function() {
        toastService.add('error', gettext('Unable to get attachment.'));
      });
    };

    this.getStatus = function() {
      return apiService.get('/api/tickets/statuses/').error(function() {
        toastService.add('error', gettext('Unable to get status list.'));
      });
    };

    this.beginTicket = function(ticket_id) {
      var ticket = { id: ticket_id }
      return apiService.post('/api/tickets/begin/', ticket);
    };

    this.reopenTicket = function(ticket_id) {
      var ticket = { id: ticket_id }
      return apiService.post('/api/tickets/reopen/', ticket).error(function() {
        toastService.add('error', gettext('Unable to reopen ticket.'));
      });
    };

    this.closeTicket = function(ticket_id) {
      var ticket = { id: ticket_id }
      return apiService.post('/api/tickets/close/', ticket);
    };

    this.approveTicket = function(ticket_id) {
      var ticket = { id: ticket_id }
      return apiService.post('/api/tickets/approve/', ticket).error(function() {
        toastService.add('error', gettext('Unable to approve.'));
      });
    };

    this.rejectTicket = function(ticket_id) {
      var ticket = { id: ticket_id }
      return apiService.post('/api/tickets/reject/', ticket).error(function() {
        toastService.add('error', gettext('Unable to reject.'));
      });
    };


    this.reassignTicket = function(reassign) {
      return apiService.post('/api/tickets/reassigns/', reassign);
    };

    this.promoteTicket = function(ticket_id) {
      return apiService.post('/api/tickets/' + ticket_id + '/promotes/').error(function() {
        toastService.add('error', gettext('Unable to promote ticket.'));
      });
    };

    this.rejectTicket = function(ticket_id) {
      return apiService.post('/api/tickets/' + ticket_id + '/rejects/').error(function() {
        toastService.add('error', gettext('Unable to reject.'));
      });
    };

    this.resolveTicket = function(ticket_id) {
      return apiService.post('/api/tickets/' + ticket_id + '/resolves/').error(function() {
        toastService.add('error', gettext('Unable to resolve ticket.'));
      });
    };

    this.listAllDomainQuotaTickets = function(status_id) {
      var config = {status_id: status_id};
      return apiService.get('/api/tickets/all_domain_quota_tickets/', {'params': config}).error(function() {
        toastService.add('error', gettext('Unable to retrieve quota requests.'));
      });
    };

    this.listUnassignedDomainQuotaTickets = function(status_id) {
      var config = {status_id: status_id};
      return apiService.get('/api/tickets/unassigned_domain_quota_tickets/', {'params': config}).error(function() {
        toastService.add('error', gettext('Unable to retrieve quota requests.'));
      });
    };

    this.listAssignedToMeDomainQuotaTickets = function(status_id) {
      var config = {status_id: status_id};
      return apiService.get('/api/tickets/assigned_to_me_domain_quota_tickets/', {'params': config}).error(function() {
        toastService.add('error', gettext('Unable to retrieve quota requests.'));
      });
    };

    this.listSubmittedByMeDomainQuotaTickets = function(status_id) {
      var config = {status_id: status_id};
      return apiService.get('/api/tickets/submitted_by_me_domain_quota_tickets/', {'params': config}).error(function() {
        toastService.add('error', gettext('Unable to retrieve quota requests.'));
      });
    };

    this.listProjectTickets = function(params) {
      var config = {};
      if (params) {
        config.params = params;
      }
      return apiService.get('/api/tickets/project_tickets/', config).error(function() {
        //toastService.add('error',  gettext('Unable to retrieve quota requests.'));
      });
    };

    this.getObjectURL = function(container, object, type) {
      function getContainerURL(container) {
        return '/api/ticket/containers/' + encodeURIComponent(container);
      }
      var urlType = type || 'object';
      var objectUrl = encodeURIComponent(object).replace(/%2F/g, '/');
      return getContainerURL(container) + '/' + urlType + '/' + objectUrl;
    };
  }
}());
