horizon.addInitFunction(function () {

    var allPanelGroupBodies = $('.nav_accordion > dd > div > ul');

    // mark the active panel group
    var activePanel = $('.nav_accordion > dd > div > ul > li > a.active');

    var nave_loop = setInterval(function () {
        var __activePanel_div = $('.nav_accordion > dd > div > ul > li > a.active');
        var __activePanel_dd = $('.nav_accordion > dd > ul > li > a.active');
        var __activePanel_a = $('.nav_accordion > dd > div > h4 > a.active');

        if (__activePanel_div.length > 0 || __activePanel_dd.length > 0 || __activePanel_a.length > 0) {
            clearInterval(nave_loop);

            activePanel.closest('div').find('h4').addClass('active');

            if (__activePanel_div.length > 0) {
                __activePanel_div.closest('div').find('h4').addClass('active');
                __activePanel_div.closest('ul').removeClass('hidden').slideDown('slow');
            }

            if (__activePanel_dd.length > 0) {
                __activePanel_dd.closest('dd').prev().addClass('active');
                __activePanel_dd.closest('dd').slideDown('slow');
            }
        }

    }, 300);

    $(document).delegate('.nav_accordion > dt', 'click', function (e) {
        e.stopPropagation();
        var myDashHeader = $(this);
        var myDashWasActive = myDashHeader.hasClass("active");

        // mark the active dashboard
        var allDashboardHeaders = $('.nav_accordion > dt');
        allDashboardHeaders.removeClass("active");

        // collapse all dashboard contents
        var allDashboardBodies = $('.nav_accordion > dd:not(.Keep)');
        allDashboardBodies.slideUp();

        // if the current dashboard was active, leave it collapsed
        if (!myDashWasActive) {
            myDashHeader.addClass("active");

            var myDashKeep = $('.nav_accordion > dd.Keep ul');
            myDashKeep.prev('h4').removeClass("active");
            myDashKeep.prev('h4').removeClass("mock-active");
            myDashKeep.slideUp();

            // expand the active dashboard body
            var myDashBody = myDashHeader.next();
            myDashBody.slideDown();

            var activeDashPanel = myDashBody.find("div > ul > li > a.active");
            // if the active panel is not in the expanded dashboard
            if (activeDashPanel.length === 0) {
                // expand the active panel group
                var activePanel = myDashBody.find("div:first > ul");
                activePanel.removeClass('hidden').slideDown();
                activePanel.closest('div').find("h4").addClass("active");

                // collapse the inactive panel groups
                var nonActivePanels = myDashBody.find("div:not(:first) > ul");
                nonActivePanels.slideUp();
            }
            // the expanded dashboard contains the active panel
            else {
                // collapse the inactive panel groups
                activeDashPanel.closest('div').find("h4").addClass("active");
                activeDashPanel.closest('ul').removeClass('hidden').slideDown();
                allPanelGroupBodies = $('.nav_accordion > dd > div > ul');
                allPanelGroupBodies.each(function (index, value) {
                    var activePanels = $(value).find('li > a.active');
                    if (activePanels.length === 0) {
                        $(this).slideUp();
                    }
                });
            }
        }
    });
    $(document).delegate('.nav_accordion > dd > div > h4', 'click', function (e) {
        e.stopPropagation();
        var myPanelGroupHeader = $(this);
        var myPanelGroupWasActive = myPanelGroupHeader.is('[class$="active"]');
        var allPanelGroupHeaders = $('.nav_accordion > dd > div > h4');
        allPanelGroupHeaders.removeClass("active");
        allPanelGroupHeaders.removeClass("mock-active");
        allPanelGroupBodies = $('.nav_accordion > dd > div > ul');
        allPanelGroupBodies.slideUp();
        // remove global manage and identity active
        $('.nav_accordion > dt').removeClass("active");
        $('.nav_accordion > dd:not(.Keep)').slideUp();
        if ('overview-nav-name' !== myPanelGroupHeader[0].getAttribute('class')) {
            // expand the selected panel group if not already active
            if (!myPanelGroupWasActive) {
                myPanelGroupHeader.addClass("active");
                myPanelGroupHeader.closest('div').find('ul').removeClass('hidden')
                    .slideDown();
                $('.nav_accordion > dd > div > h4.overview-nav-name').find('a')
                    .removeClass("active");
            }

        } else {
            if (!myPanelGroupWasActive) {
                myPanelGroupHeader.find('a').addClass("active");
            }
        }

    });
});
