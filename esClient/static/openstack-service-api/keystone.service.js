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
(function () {
    'use strict';

    angular
        .module('horizon.openstack-service-api')
        .service('horizon.openstack-service-api.keystone', KeystoneAPI);

    KeystoneAPI.$inject = ['horizon.framework.util.http.service',
        'horizon.framework.widgets.toast.service'];

    function KeystoneAPI(apiService, toastService) {
        // toast
        this.toast = function (type, message) {
            toastService.add(type, message);
        };

        // Users
        this.getUsers = function (params) {
            var config = (params) ? {'params': params} : {};
            return apiService.get('/api/keystone/users/', config)
                .error(function () {
                    toastService.add('error', gettext('Unable to retrieve the users.'));
                });
        };

        this.createUser = function (newUser) {
            return apiService.post('/api/keystone/users/', newUser)
                .error(function () {
                    toastService.add('error', gettext('Unable to create the user.'));
                });
        };
        this.createOrgUser = function (newUser) {
            return apiService.post('/api/keystone/organizations/users/', newUser)
                .error(function () {
                    toastService.add('error', gettext('Unable to create the user.'));
                });
        };
        this.deleteUsers = function (userIds) {
            return apiService.delete('/api/keystone/users/', userIds)
                .error(function () {
                    toastService.add('error', gettext('Unable to delete the users.'));
                });
        };

        // Verify user email
        this.getUserEmail = function (email) {
            return apiService.get('/api/keystone/useremail/' + email)
                .error(function () {
                    toastService.add('error', gettext('Unable to verify email.'));
                });
        };

        /**
         * @name horizon.openstack-service-api.keystone.getCurrentUserSession
         * @description
         * Gets the current User Session Information
         * @example
         * {
    * "available_services_regions": [
    *     "RegionOne"
    * ],
    * "domain_id": null,
    * "domain_name": null,
    * "enabled": true,
    * "id": "2138efda19264c64b69551c6b08054c9",
    * "is_superuser": true,
    * "project_id": "53fafe441399439a852d3bd81c22caf6",
    * "project_name": "demo",
    * "roles": [
    *     {
    *         "name": "admin"
    *     }
    * ],
    * "services_region": "RegionOne",
    * "user_domain_id": "default",
    * "user_domain_name": "Default",
    * "username": "admin"
    * }
         */
        this.getCurrentUserSession = function (config) {
            return apiService.get('/api/keystone/user-session/', config)
                .error(function () {
                    toastService.add('error',
                        gettext('Unable to retrieve the current user session.'));
                });
        };

        this.getUser = function (userId) {
            return apiService.get('/api/keystone/users/' + userId)
                .error(function () {
                    toastService.add('error', gettext('Unable to retrieve the user.'));
                });
        };

        this.editUser = function (updatedUser) {
            var url = '/api/keystone/users/' + updatedUser.id;
            return apiService.patch(url, updatedUser)
                .error(function (data) {
                    toastService.add('error', gettext(data));
                });
        };

        this.deleteUser = function (userId) {
            return apiService.delete('/api/keystone/users/' + userId)
                .error(function () {
                    toastService.add('error', gettext('Unable to delete the user.'));
                });
        };
        //NotifyList

        /**
         * @name hz.api.keystoneAPI.getNotifyList
         * @description get notification list of current user
         */

        this.getNotifyList = function () {
            return apiService.get('/api/keystone/notifylist/')
                .error(function () {
                    horizon.alert('error', gettext('Unable to get notification list.'));
                });
        };

        /**
         * @name hz.api.keystoneAPI.createNotifyList
         * @description create notification list of current user
         */

        this.createNotifyList = function (notification_list) {
            return apiService.post('/api/keystone/notifylist/', notification_list)
                .error(function () {
                    horizon.alert('error', gettext('Unable to create notification list.'));
                });
        };
        /**
         * @name hz.api.keystoneAPI.editNotifyList
         * @description update notification list of current user
         */
    this.createNotifyList = function(notification_list) {
        return apiService.post('/api/keystone/notifylist/', notification_list)
        .error(function () {
          horizon.alert('error', gettext('Unable to create notification list.'));
        });
    };
    /**
     * @name hz.api.keystoneAPI.editNotifyList
     * @description update notification list of current user
     */

        this.editNotifyList = function (notification_list) {
            return apiService.put('/api/keystone/notifylist/', notification_list)
                .error(function () {
                    horizon.alert('error', gettext('Unable to edit notification list.'));
                });
        };
    this.editNotifyList = function(notification_list) {
        return apiService.put('/api/keystone/notifylist/', notification_list)
        .error(function () {
          horizon.alert('error', gettext('Unable to edit notification list.'));
        });
    };

        // Roles
        this.getRoles = function (params) {
            var config = (params) ? {'params': params} : {};
            return apiService.get('/api/keystone/roles/', config)
                .error(function (response, status, headers, config) {
                    toastService.add('error', gettext('Unable to retrieve the roles.'));
                });
        };

        this.createRole = function (newRole) {
            return apiService.post('/api/keystone/roles/', newRole)
                .error(function () {
                    toastService.add('error', gettext('Unable to create the role.'));
                });
        };

        this.deleteRoles = function (roleIds) {
            return apiService.delete('/api/keystone/roles/', roleIds)
                .error(function () {
                    toastService.add('error', gettext('Unable to delete the roles.'));
                });
        };

        this.getRole = function (roleId) {
            return apiService.get('/api/keystone/roles/' + roleId)
                .error(function () {
                    toastService.add('error', gettext('Unable to retrieve the role.'));
                });
        };

        this.editRole = function (updatedRole) {
            var url = '/api/keystone/roles/' + updatedRole.id;
            return apiService.patch(url, updatedRole)
                .error(function () {
                    toastService.add('error', gettext('Unable to edit the role.'));
                });
        };

        this.deleteRole = function (roleId) {
            return apiService.delete('/api/keystone/roles/' + roleId)
                .error(function () {
                    toastService.add('error', gettext('Unable to delete the role.'));
                });
        };

        // Domains
        this.getDomains = function (params) {
            var config = (params) ? {'params': params} : {};
            return apiService.get('/api/keystone/domains/', config)
                .error(function () {
                    if (IDENTITY_MULTI_LEVEL_JS) {
                        toastService.add('error', 'Unable to retrieve the domain or department.');
                    } else {
                        toastService.add('error', gettext('Unable to retrieve the domains.'));
                    }
                });
        };

        this.createDomain = function (newDomain) {
            return apiService.post('/api/keystone/domains/', newDomain)
                .error(function () {
                    toastService.add('error', gettext('Unable to create the domain.'));
                });
        };

        this.deleteDomains = function (domainIds) {
            return apiService.delete('/api/keystone/domains/', domainIds)
                .error(function () {
                    if (IDENTITY_MULTI_LEVEL_JS) {
                        toastService.add('error', 'Unable to delete the domain or department.');
                    } else {
                        toastService.add('error', gettext('Unable to delete the domains.'));
                    }
                });
        };

        this.getDomain = function (domainId) {
            return apiService.get('/api/keystone/domains/' + domainId)
                .error(function () {
                    if (IDENTITY_MULTI_LEVEL_JS) {
                        toastService.add('error', 'Unable to retrieve the domain or department.');
                    } else {
                        toastService.add('error', gettext('Unable to retrieve the domain.'));
                    }
                });
        };

        this.editDomain = function (updatedDomain) {
            var url = '/api/keystone/domains/' + updatedDomain.id;
            return apiService.patch(url, updatedDomain)
                .error(function () {
                    if (IDENTITY_MULTI_LEVEL_JS) {
                        toastService.add('error', 'Unable to edit the domain or department.');
                    } else {
                        toastService.add('error', gettext('Unable to edit the domain.'));
                    }
                });
        };

        this.deleteDomain = function (domainId) {
            return apiService.delete('/api/keystone/domains/' + domainId)
                .error(function () {
                    if (IDENTITY_MULTI_LEVEL_JS) {
                        toastService.add('error', 'Unable to retrieve the domain or department.');
                    } else {
                        toastService.add('error', gettext('Unable to delete the domain.'));
                    }
                });
        };


        this.getOrgDefaultTree = function () {
            return apiService.get('/api/keystone/org_tree/init/').error(function () {
                toastService.add('error', 'Unable to retrieve  the domain or department.');
            });
        };
        this.getBillOrgDefaultTree = function () {
            return apiService.get('/api/keystone/bill_org_tree/init/').error(function () {
                toastService.add('error', 'Unable to retrieve  the domain or department.');
            });
        };
        this.getOrgTreeNextLevel = function (domain_id) {
            return apiService.get('/api/keystone/org_tree/next_level/' + domain_id + '/').error(function () {
                toastService.add('error', 'Unable to retrieve  the domain or department.');
            });
        };

        // Projects
        this.getProjects = function (params) {
            var config = (params) ? {'params': params} : {};
            return apiService.get('/api/keystone/projects/', config)
                .error(function () {
                    toastService.add('error', gettext('Unable to retrieve the projects.'));
                });
        };

        this.createProject = function (newProject) {
            return apiService.post('/api/keystone/projects/', newProject)
                .error(function () {
                    if (IDENTITY_MULTI_LEVEL_JS) {
                        toastService.add('error', 'Unable to create the project or department.');
                    } else {
                        toastService.add('error', gettext('Unable to create the project.'));
                    }
                });
        };

        this.deleteProjects = function (projectIds) {
            return apiService.delete('/api/keystone/projects/', projectIds)
                .error(function () {
                    toastService.add('error', gettext('Unable to delete the projects.'));
                });
        };

        this.getProject = function (projectId) {
            return apiService.get('/api/keystone/projects/' + projectId)
                .error(function () {
                    toastService.add('error', gettext('Unable to retrieve the project.'));
                });
        };
        this.getAuthProject = function (projectId) {
            return apiService.get('/api/keystone/auth_projects/' + projectId)
                .error(function () {
                    toastService.add('error', gettext('Unable to retrieve the project.'));
                });
        };

        this.editProject = function (updatedProject) {
            var url = '/api/keystone/projects/' + updatedProject.id;
            return apiService.patch(url, updatedProject)
                .error(function () {
                    toastService.add('error', gettext('Unable to edit the project.'));
                });
        };

        this.deleteProject = function (projectId) {
            return apiService.delete('/api/keystone/projects/' + projectId);
        };

        this.grantRole = function (projectId, roleId, userId) {
            return apiService.put('/api/keystone/projects/' + projectId + '/' +
                roleId + '/' + userId)
                .error(function () {
                    toastService.add('error', gettext('Unable to grant the role.'));
                });
        };
    this.grantRole = function(projectId, roleId, userId) {
      return apiService.put('/api/keystone/projects/' + projectId + '/' +
                               roleId + '/' + userId)
        .error(function () {
          toastService.add('error', gettext('Unable to grant the role.'));
        });
    };
    this.grantRoles = function(users, roles, orgs) {
      return apiService.post('/api/keystone/grant_roles/', {'users': users, 'roles': roles, 'orgs': orgs})
        .error(function () {
          toastService.add('error', gettext('Unable to grant the roles.'));
        });
    };

        this.getProjectUsers = function (projectId, params) {
            var config = (params) ? {'params': params} : {};
            return apiService.get('/api/keystone/projectusers/' + projectId, config)
                .error(function (response, status, headers, config) {
                    toastService.add('error', gettext('Unable to get the project users.'));
                });
        };

        this.editProjectUsers = function (paras) {
            var projectId = paras.project_id;
            return apiService.post('/api/keystone/projectusers/' + projectId, paras);
        };


        this.getDomainUsers = function (domainId, params) {
            var config = (params) ? {'params': params} : {};
            return apiService.get('/api/keystone/domainusers/' + domainId, config)
                .error(function () {
                    toastService.add('error', gettext('Unable to get the domain users.'));
                });
        };

        this.getAllotTicketUsers = function (domainId, params) {
            var config = (params) ? {'params': params} : {};
            return apiService.get('/api/keystone/allotticketusers/' + domainId, config)
                .error(function () {
                    toastService.add('error', gettext('Unable to get the domain users.'));
                });
        };

        this.editDomainUsers = function (paras) {
            var domainId = paras.domain_id;
            return apiService.post('/api/keystone/domainusers/' + domainId, paras);
        };

        this.editDomainUsersAndAddProjectAdminRole = function (paras) {
            var domainId = paras.domain_id;
            return apiService.post('/api/keystone/domainusersandprojectadminrole/' + domainId, paras);
        };

        // edit user password
        this.updateUserOwnPassword = function (Passwords) {
            return apiService.post('/api/keystone/password/', Passwords)
                .error(function (data, status) {
                    if (status == 403) {
                        toastService.add('error', gettext("Old Password is Wrong"));
                    } else {
                        toastService.add('error', gettext(data));
                    }
                });
        };

        /**
         * @name horizon.openstack-service-api.keystone.serviceCatalog
         * @description
         * Returns the service catalog.
         * @param {Object} config
         * See $http config object parameters.
         */
        this.serviceCatalog = function (config) {
            return apiService.get('/api/keystone/svc-catalog/', config)
                .error(function () {
                    toastService.add('error', gettext('Unable to fetch the service catalog.'));
                });
        };

        // CloudAdmin
        this.getCloudAdmin = function () {
            return apiService.get('/api/keystone/cloudadmin/').error(
                function () {
                    toastService.add('error',
                        gettext('Unable to get cloud admin status.'));
                });
        };

        // DomainAdmin
        this.getDomainAdmin = function () {
            return apiService.get('/api/keystone/domainadmin/').error(
                function () {
                    toastService.add('error',
                        gettext('Unable to get domain admin status.'));
                });
        };

        // OrgDomainAdmin
        this.getOrgDomainAdmin = function () {
            return apiService.get('/api/keystone/orgdomainadmin/').error(
                function () {
                    toastService.add('error',
                        gettext('Unable to get orgnization domain admin status.'));
                });
        };

        // DomainAdmin
        this.getProjectAdmin = function () {
            return apiService.get('/api/keystone/projectadmin/').error(
                function () {
                    toastService.add('error',
                        gettext('Unable to get project admin status.'));
                });
        };

        // LDAP
        this.getLDAP = function () {
            return apiService.get('/api/keystone/ldap/').error(
                function () {
                    toastService.add('error',
                        gettext('Unable to get ldap status.'));
                });
        };

        //Services

        /**
         * @name horizon.openstack-service-api.keystoneAPI.getServices
         * @description
         * Get all services from keystone
         */
        this.getServices = function () {
            return apiService.get('/api/keystone/services/')
                .error(function () {
                    toastService.add('error', gettext('Unable to get keystone services.'));
                });
        };

        this.isUserProjectAdmin = function (userId, projectId) {
            return apiService.post('/api/keystone/isprojectadmin/', {
                user_id: userId,
                project_id: projectId,
            }).error(function () {
                // do nothing
            });
        };

        this.userIsDomainAdmin = function (user_id, domain_id) {
            var params = {'params': {domain_id: domain_id, user_id: user_id}},
                url = '/api/keystone/userisdomainadmin/' + user_id;

            return apiService.get(url, params)
                .error(function () {
                    toastService.add('error', gettext('Unable to get keystone services.'));
                });
        };
        this.userIsCurProjectDomainAdmin = function (user_id) {
            var params = {'params': { user_id: user_id}},
                url = '/api/keystone/useriscurprojectdomainadmin/' + user_id;

            return apiService.get(url, params)
                .error(function () {
                    toastService.add('error', gettext('Unable to get keystone services.'));
                });
        };
        this.curUserIsCurProjectDomainAdmin = function () {
            var params = {'params': { user_id: user_id}},
                url = '/api/keystone/curuseriscurprojectdomainadmin/';

            return apiService.get(url, params)
                .error(function () {
                    toastService.add('error', gettext('Unable to get keystone services.'));
                });
        };
        this.userIsProjectDomainAdmin = function (user_id, project_id) {
            var params = {'params': { user_id: user_id, project_id: project_id}},
                url = '/api/keystone/userisprojectdomainadmin/' + user_id;

            return apiService.get(url, params)
                .error(function () {
                    toastService.add('error', gettext('Unable to get keystone services.'));
                });
        };
        // user can manage this project or not
        this.userIsProjectCheif = function (user_id, project_id) {
            var params = {'params': { user_id: user_id, project_id: project_id}},
                url = '/api/keystone/userisprojectchief/' + user_id;

            return apiService.get(url, params)
                .error(function () {
                    toastService.add('error', gettext('Unable to get keystone services.'));
                });
        };
        // user can manage this project or not
        this.userIsDomainCheif = function (requester_id) {
            var params = {'params': { 'requester_id': requester_id}},
                url = '/api/keystone/userisdomainchief/';

            return apiService.get(url, params)
                .error(function () {
                    toastService.add('error', gettext('Unable to get keystone services.'));
                });
        };
        this.getAllotUsers = function(project_id){
            var params = {'params': { project_id: project_id}},
                url = '/api/keystone/allot_users/';
            return apiService.get(url, params)
                .error(function () {
                    toastService.add('error', gettext('Unable to get keystone services.'));
                });
        };
        this.getDomainQuotaAllotUsers = function(domain_id){
            var params = {'params': { domain_id: domain_id}},
                url = '/api/keystone/allot_domainquota_users/';
            return apiService.get(url, params)
                .error(function () {
                    toastService.add('error', gettext('Unable to get keystone services.'));
                });
        };
        this.getDomainQuotaFormJson = function(){
            var url = '/api/keystone/domain_quota_form_json/';
            return apiService.get(url)
                .error(function () {
                    toastService.add('error', gettext('Unable to get orgs which user belongs to.'));
                });
        };
        // Projects
        this.getMultiLevelProjects = function (params) {
            var config = (params) ? {'params': params} : {};
            return apiService.get('/api/keystone/multi_level_projects/', config)
                .error(function () {
                    toastService.add('error', gettext('Unable to retrieve the projects.'));
                });
        };
        this.isDomainAdmin = function () {
            return apiService.get('/api/keystone/isdomainadmin/')
                .error(function () {
                    toastService.add('error', gettext('Unable to judge if it is a domain admin.'));
                });
        };
        this.isOrgAdmin = function() {
          return apiService.get('/api/keystone/isorgdmin/')
            .error(function () {
              toastService.add('error', gettext('Unable to judge if it is a organization admin.'));
          });
        };
        this.isLastLevelAdmin = function() {
          return apiService.get('/api/keystone/islastleveladmin/')
            .error(function () {
              toastService.add('error', gettext('Unable to judge if it is the last level admin.'));
          });
        };
        this.isPublicRegion = function () {
            return apiService.get('/api/keystone/ispublicregion/').error(function () {
                // do nothing
            })
        };
        //root Domains
        this.getRootDomains = function () {
            return apiService.get('/api/keystone/root_domains/')
                .error(function () {
                    toastService.add('error', gettext('Unable to retrieve the domains.'));
                });
        };
        this.getOrgArchs = function(domain_id) {
          return apiService.get('/api/keystone/org_archs/'+ domain_id)
            .error(function () {
              toastService.add('error', gettext('Unable to retrieve the domains.'));
            });
        };
        this.getParents = function (data) {
            return apiService.post('/api/keystone/getparents/', {
                'id': data.id,
                'single_level': data.single_level
            }).error(
                function () {
                    toastService.add('error', gettext('Unable to retrieve the domain or department.'));
                }
            );
        };
        this.getNavCurTree = function (data) {
            return apiService.post('/api/keystone/get_nav_cur_tree/', {
                'id': data.id,
                'single_level': data.single_level
            }).error(
                function () {
                    toastService.add('error', gettext('Unable to retrieve the domain or department.'));
                }
            );
        };
        this.getSubsets = function (data) {
            return apiService.post('/api/keystone/getsubsets/', {
                'id': data.id,
                'single_level': data.single_level
            }).error(
                function () {
                    toastService.add('error', gettext('Unable to retrieve the domain or department.'));
                }
            );
        };
        this.getSubDomains = function (data) {
            return apiService.post('/api/keystone/getsubdomains/', {
                'id': data.id,
                'single_level': data.single_level
            }).error(
                function () {
                    toastService.add('error', gettext('Unable to retrieve the domain or department.'));
                }
            );
        };
        this.getNavSubsets = function (data) {
            return apiService.post('/api/keystone/get_nav_subsets/', {
                'id': data.id,
                'single_level': data.single_level
            }).error(
                function () {
                    toastService.add('error', gettext('Unable to retrieve the domain or department.'));
                }
            );
        };
        // //root Domains all
        this.getRootDomainsAll = function () {
            return apiService.get('/api/keystone/root_domains_all/')
                .error(function () {
                    toastService.add('error', gettext('Unable to retrieve the domains.'));
                });
        };
        this.getOrgAllProjects = function (params) {
            var config = (params) ? {'params': params} : {};
            return apiService.get('/api/keystone/orgallprojects/', config)
                .error(function () {
                    toastService.add('error', gettext('Unable to retrieve the projects.'));
                });
        };
        this.getOrgAllUsers = function (params) {
            var config = (params) ? {'params': params} : {};
            return apiService.get('/api/keystone/orgallusers/', config)
                .error(function () {
                    toastService.add('error', gettext('Unable to retrieve the users.'));
                });
        };
    }

    /**
     * @ngdoc service
     * @name horizon.openstack-service-api.userSession
     * @description
     * Provides cached access to the user session. The cache may be reset
     * at any time by accessing the cache and calling removeAll, which means
     * that the next call to any function in this service will retrieve fresh
     * results after the cache is cleared. This allows programmatic refresh of
     * the cache.
     *
     * The cache in current horizon (Kilo non-single page app) only has a
     * lifetime of the current page. The cache is reloaded every time you change
     * panels. It also happens when you change the region selector at the top
     * of the page, and when you log back in.
     *
     * So, at least for now, this seems to be a reliable way that will
     * make only a single request to get user information for a
     * particular page or modal. Making this a service allows it to be injected
     * and used transparently where needed without making every single use of it
     * pass it through as an argument.
     */
    angular
        .module('horizon.openstack-service-api')
        .factory('horizon.openstack-service-api.userSession', userSession);

    userSession.$inject = ['$cacheFactory', 'horizon.openstack-service-api.keystone'];

    function userSession($cacheFactory, keystoneAPI) {

        var service = {};

        service.cache = $cacheFactory('horizon.openstack-service-api.userSession', {capacity: 1});

        service.get = function () {
            return keystoneAPI.getCurrentUserSession({cache: service.cache})
                .then(function (response) {
                        return response.data;
                    }
                );
        };

        return service;
    }

    /**
     * @ngdoc service
     * @name horizon.openstack-service-api.serviceCatalog
     * @description
     * Provides cached access to the Service Catalog with utilities to help
     * with asynchronous data loading. The cache may be reset at any time
     * by accessing the cache and calling removeAll. The next call to any
     * function will retrieve fresh results.
     *
     * The cache in current horizon (Kilo non-single page app) only has a
     * lifetime of the current page. The cache is reloaded every time you change
     * panels. It also happens when you change the region selector at the top
     * of the page, and when you log back in.
     *
     * So, at least for now, this seems to be a reliable way that will
     * make only a single request to get user information for a
     * particular page or modal. Making this a service allows it to be injected
     * and used transparently where needed without making every single use of it
     * pass it through as an argument.
     */
    angular
        .module('horizon.openstack-service-api')
        .factory('horizon.openstack-service-api.serviceCatalog', serviceCatalog);

    serviceCatalog.$inject = ['$cacheFactory',
        '$q',
        'horizon.openstack-service-api.keystone',
        'horizon.openstack-service-api.userSession'];

    function serviceCatalog($cacheFactory, $q, keystoneAPI, userSession) {

        var service = {};
        service.cache = $cacheFactory('horizon.openstack-service-api.serviceCatalog', {capacity: 1});

        /**
         * @name horizon.openstack-service-api.serviceCatalog.get
         * @description
         * Returns the service catalog. This is cached.
         *
         * @example
         *
         ```js
         serviceCatalog.get()
         .then(doSomething, doSomethingElse);
         ```
         */
        service.get = function () {
            return keystoneAPI.serviceCatalog({cache: service.cache})
                .then(function (response) {
                        return response.data;
                    }
                );
        };

        /**
         * @name horizon.openstack-service-api.serviceCatalog.ifTypeEnabled
         * @description
         * Checks if the desired service is enabled.  If it is enabled, use the
         * promise returned to execute the desired function.  If it is not enabled,
         * The promise will be rejected.
         *
         * @param {string} desiredType The type of service desired.
         *
         * @example
         * Assume if the network service is enabled, you want to get networks,
         * if it isn't, then you will do something else.
         * Assume getNetworks is a function that hits Neutron.
         * Assume doSomethingElse is a function that does something else if
         * the network service is not enabled (optional)
         *
         ```js
         serviceCatalog.ifTypeEnabled('network')
         .then(getNetworks, doSomethingElse);
         ```
         */
        service.ifTypeEnabled = function (desiredType) {
            var deferred = $q.defer();

            $q.all(
                {
                    session: userSession.get(),
                    catalog: service.get()
                }
            ).then(
                onDataLoaded,
                onDataFailure
            );

            function onDataLoaded(d) {
                if (typeHasEndpointsInRegion(d.catalog,
                        desiredType,
                        d.session.services_region)) {
                    deferred.resolve();
                } else {
                    deferred.reject(interpolate(
                        gettext('Service type is not enabled: %(desiredType)s'),
                        {desiredType: desiredType},
                        true));
                }
            }

            function onDataFailure() {
                deferred.reject(gettext('Cannot get service catalog from keystone.'));
            }

            return deferred.promise;
        };

        function typeHasEndpointsInRegion(catalog, desiredType, desiredRegion) {
            var matchingSvcs = catalog.filter(function (svc) {
                return svc.type === desiredType;
            });

            // Ignore region for identity. Identity service endpoint
            // should not change for different regions.
            if (desiredType === 'identity' && matchingSvcs.length > 0) {
                return true;
            } else {
                return matchingSvcs.some(function (svc) {
                    return svc.endpoints.some(function (endpoint) {
                        return getEndpointRegion(endpoint) === desiredRegion;
                    });
                });
            }
        }

        /*
         * In Keystone V3, region has been deprecated in favor of
         * region_id.
         *
         * This method provides a way to get region that works for
         * both Keystone V2 and V3.
         */
        function getEndpointRegion(endpoint) {
            return endpoint.region_id || endpoint.region;
        }

        return service;
    }
}());
