define([],function(){function detect(ua){var os=this.os={},browser=this.browser={},webkit=ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/),android=ua.match(/(Android);?[\s\/]+([\d.]+)?/),ipad=ua.match(/(iPad).*OS\s([\d_]+)/),ipod=ua.match(/(iPod)(.*OS\s([\d_]+))?/),iphone=!ipad&&ua.match(/(iPhone\sOS)\s([\d_]+)/),webos=ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),touchpad=webos&&ua.match(/TouchPad/),kindle=ua.match(/Kindle\/([\d.]+)/),silk=ua.match(/Silk\/([\d._]+)/),blackberry=ua.match(/(BlackBerry).*Version\/([\d.]+)/),bb10=ua.match(/(BB10).*Version\/([\d.]+)/),rimtabletos=ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),playbook=ua.match(/PlayBook/),chrome=ua.match(/Chrome\/([\d.]+)/)||ua.match(/CriOS\/([\d.]+)/),firefox=ua.match(/Firefox\/([\d.]+)/),ie=ua.match(/MSIE ([\d.]+)/),safari=webkit&&ua.match(/Mobile\//)&&!chrome,webview=ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)&&!chrome,ie=ua.match(/MSIE\s([\d.]+)/);(browser.webkit=!!webkit)&&(browser.version=webkit[1]);android&&(os.android=!0,os.version=android[2]);iphone&&!ipod&&(os.ios=os.iphone=!0,os.version=iphone[2].replace(/_/g,"."));ipad&&(os.ios=os.ipad=!0,os.version=ipad[2].replace(/_/g,"."));ipod&&(os.ios=os.ipod=!0,os.version=ipod[3]?ipod[3].replace(/_/g,"."):null);webos&&(os.webos=!0,os.version=webos[2]);touchpad&&(os.touchpad=!0);blackberry&&(os.blackberry=!0,os.version=blackberry[2]);bb10&&(os.bb10=!0,os.version=bb10[2]);rimtabletos&&(os.rimtabletos=!0,os.version=rimtabletos[2]);playbook&&(browser.playbook=!0);kindle&&(os.kindle=!0,os.version=kindle[1]);silk&&(browser.silk=!0,browser.version=silk[1]);!silk&&os.android&&ua.match(/Kindle Fire/)&&(browser.silk=!0);chrome&&(browser.chrome=!0,browser.version=chrome[1]);firefox&&(browser.firefox=!0,browser.version=firefox[1]);ie&&(browser.ie=!0,browser.version=ie[1]);safari&&(ua.match(/Safari/)||os.ios)&&(browser.safari=!0);webview&&(browser.webview=!0);ie&&(browser.ie=!0,browser.version=ie[1]);os.tablet=!!(ipad||playbook||android&&!ua.match(/Mobile/)||firefox&&ua.match(/Tablet/)||ie&&!ua.match(/Phone/)&&ua.match(/Touch/));os.phone=!(os.tablet||os.ipod||!(android||iphone||webos||blackberry||bb10||chrome&&ua.match(/Android/)||chrome&&ua.match(/CriOS\/([\d.]+)/)||firefox&&ua.match(/Mobile/)||ie&&ua.match(/Touch/)));return{browser:browser,os:os,canvasSupported:document.createElement("canvas").getContext?!0:!1}}return detect(navigator.userAgent)});