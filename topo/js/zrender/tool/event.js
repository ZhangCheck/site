define(["require","../mixin/Eventful"],function(require){"use strict";function getX(e){return"undefined"!=typeof e.zrenderX&&e.zrenderX||"undefined"!=typeof e.offsetX&&e.offsetX||"undefined"!=typeof e.layerX&&e.layerX||"undefined"!=typeof e.clientX&&e.clientX}function getY(e){return"undefined"!=typeof e.zrenderY&&e.zrenderY||"undefined"!=typeof e.offsetY&&e.offsetY||"undefined"!=typeof e.layerY&&e.layerY||"undefined"!=typeof e.clientY&&e.clientY}function getDelta(e){return"undefined"!=typeof e.zrenderDelta&&e.zrenderDelta||"undefined"!=typeof e.wheelDelta&&e.wheelDelta||"undefined"!=typeof e.detail&&-e.detail}var Eventful=require("../mixin/Eventful"),stop="function"==typeof window.addEventListener?function(e){e.preventDefault();e.stopPropagation();e.cancelBubble=!0}:function(e){e.returnValue=!1;e.cancelBubble=!0};return{getX:getX,getY:getY,getDelta:getDelta,stop:stop,Dispatcher:Eventful}});