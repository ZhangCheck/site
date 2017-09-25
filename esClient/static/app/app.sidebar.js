(function () {
    'use strict';

    /**
     * @ngdoc hz.dashboard.settings
     * @ngModule
     *
     * @description
     * Dashboard module to host various settings panels.
     */
    angular
        .module('horizon.sidebar', [])
        .factory('sidebarService', [
            'horizon.framework.util.http.service',
            'horizon.framework.widgets.toast.service',
            '$window',
            '$sce',
            function (apiService, toastService, $window, $sce) {
                var getSideBar = function (type) {
                    if(type){
                        return apiService.get('/es_sidebar/'+ type +'/')
                        .error(function () {
                            toastService.add('error', gettext('Unable to retrieve sidebar.'));
                        });
                    }else{
                        return apiService.get('/es_sidebar/normal/')
                        .error(function () {
                            toastService.add('error', gettext('Unable to retrieve sidebar.'));
                        });
                    }
                };

                var initialize = function () {
                    return getSideBar();
                };
                var model = {
                    templ: '',
                    initialize: initialize,
                    getSideBar: getSideBar
                };

                return model;

            }])
        .controller('siderbarCtrl', ['$rootScope', '$scope', 'sidebarService', '$sce',
            function (rootScope, scope, sidebarService, $sce) {
                scope.sidebar = sidebarService;
                sidebarService.initialize().then(function (res) {
                    var user_type = res.data['user_type'];
                    if('admin' === user_type){
                        rootScope.userType = 'admin';
                        scope.sidebar.templ_admin = $sce.trustAsHtml(res.data['template'][0]);
                        if(res.data['template']&&res.data['template'].length>1){
                            scope.sidebar.templ_mem = $sce.trustAsHtml(res.data['template'][1]);
                        }
                        if(rootScope.sidebar&& 'project'==rootScope.sidebar){
                            scope.sidebar.templ = scope.sidebar.templ_mem;
                        }else{
                            scope.sidebar.templ = scope.sidebar.templ_admin;
                        }
                        rootScope.$broadcast('TOP_NAV_CHANGED_ADMIN');
                    }else{
                        rootScope.userType = 'member';
                        scope.sidebar.templ_mem = $sce.trustAsHtml(res.data['template'][0]);
                        scope.sidebar.templ = scope.sidebar.templ_mem;
                    }

                });
                scope.$on('SIDEBAR_CHANGED_ADMIN', function(){
                    scope.sidebar.templ = scope.sidebar.templ_admin;
                });

                scope.$on('SIDEBAR_CHANGED_MEMBER', function(){
                    scope.sidebar.templ = scope.sidebar.templ_mem;
                });
            }])
})();
