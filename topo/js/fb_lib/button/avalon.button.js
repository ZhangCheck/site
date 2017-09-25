define(["avalon","css!../chameleon/oniui-common.css","css!./avalon.button.css"],function(avalon){function createButton(element,options){var buttonText,buttonClasses=baseClasses.concat(),iconText=!1,corner=(options.icon||"",options.corner);options.label=options.label||"";if(corner){buttonClasses.push("oni-corner-all");(corner=parseInt(corner))&&(element.style.borderRadius=corner+"px")}options.size&&buttonClasses.push("oni-button-"+options.size);options.color&&buttonClasses.push("oni-button-"+options.color);options.disabled&&buttonClasses.push("oni-state-disabled");avalon(element).addClass(buttonClasses.join(" "));if("input"===options.elementType&&options.label)avalon(element).val(options.label);else{switch(options.type){case"text":buttonText="<span class='oni-button-text'>"+options.label+"</span>";break;case"labeledIcon":iconText=!0;case"icon":switch(options.iconPosition){case"pause2":buttonText="<i class='oni-icon oni-icon-pause2'></i><span class='oni-button-text oni-button-text-right"+(iconText?"":" oni-button-text-hidden")+"'>"+options.label+"</span>";break;case"stop2":buttonText="<i class='oni-icon oni-icon-stop2'></i><span class='oni-button-text oni-button-text-right"+(iconText?"":" oni-button-text-hidden")+"'>"+options.label+"</span>";break;case"minus":buttonText="<i class='oni-icon oni-icon-minus'></i><span class='oni-button-text oni-button-text-right"+(iconText?"":" oni-button-text-hidden")+"'>"+options.label+"</span>";break;case"calendar":buttonText="<i class='oni-icon oni-icon-calendar-o'></i><span class='oni-button-text oni-button-text-right"+(iconText?"":" oni-button-text-hidden")+"'>"+options.label+"</span>";break;case"center":buttonText="<i class='oni-icon oni-icon-center'></i><span class='oni-button-text oni-button-text-right"+(iconText?"":" oni-button-text-hidden")+"'>"+options.label+"</span>";break;case"left":buttonText="<i class='oni-icon oni-icon-left'></i><span class='oni-button-text oni-button-text-right"+(iconText?"":" oni-button-text-hidden")+"'>"+options.label+"</span>";break;case"right":buttonText="<span class='oni-button-text oni-button-text-left"+(iconText?"":" oni-button-text-hidden")+"'>"+options.label+"</span><i class='oni-icon oni-icon-center'></i>";break;case"pause2right":buttonText="<span class='oni-button-text oni-button-text-left"+(iconText?"":" oni-button-text-hidden")+"'>"+options.label+"</span><i class='oni-icon oni-icon-pause2'></i>";break;case"stop2right":buttonText="<span class='oni-button-text oni-button-text-left"+(iconText?"":" oni-button-text-hidden")+"'>"+options.label+"</span><i class='oni-icon oni-icon-stop2'></i>";break;case"minusright":buttonText="<span class='oni-button-text oni-button-text-left"+(iconText?"":" oni-button-text-hidden")+"'>"+options.label+"</span><i class='oni-icon oni-icon-minus'></i>";break;case"left-right":buttonText="<i class='oni-icon oni-icon-left'>&nbsp;</i><span class='oni-button-text oni-button-text-middle"+(iconText?"":" oni-button-text-hidden")+"'>"+options.label+"</span><i class='oni-icon oni-icon-right'></i>"}}element.innerHTML="";element.appendChild(avalon.parseHTML(buttonText))}}var baseClasses=["oni-button","oni-widget","oni-state-default"],widget=avalon.ui.button=function(element,data,vmodels){function stop(event){if(options.disabled){event.preventDefault();event.stopImmediatePropagation()}}var btnModel,options=data.buttonOptions,$element=avalon(element);btnModel={$init:function(){var data=options.data,elementType="",label=options.label,buttonWidth=0,elementTagName=element.tagName.toLowerCase();if(options.groups&&data.length>1){var buttons="";data.forEach(function(button,index){var buttonStr="<span ms-widget='button'";void 0!==button.type&&(buttonStr+=" data-button-type='"+button.type+"'");void 0!==button.iconPosition&&(buttonStr+=" data-button-icon-position='"+button.iconPosition+"'");void 0!==button.icon&&(buttonStr+=" data-button-icon='"+button.icon+"'");void 0!==button.color&&(buttonStr+=" data-button-color='"+button.color+"'");void 0!==button.size&&(buttonStr+=" data-button-size='"+button.size+"'");void 0!==button.disabled&&(buttonStr+=" data-button-disabled='"+button.disabled+"'");void 0!==button.label&&(buttonStr+=" data-button-label='"+button.label+"'");buttonStr+=">"+(button.text||"")+"</span>";buttons+=buttonStr});element.innerHTML=buttons;element.setAttribute("ms-widget","buttonset");"vertical"==options.direction&&element.setAttribute("data-buttonset-direction","vertical");options.corner||element.setAttribute("data-buttonset-corner",options.corner);options.width&&element.setAttribute("data-buttonset-width",parseInt(options.width));avalon.scan(element,vmodels)}else{"boolean"!=typeof options.disabled?element.disabled=!!options.disabled:element.disabled=options.disabled;"input"===elementTagName&&(elementType="input");(buttonWidth=parseInt(options.width))&&(element.style.width=buttonWidth+"px");$element.bind("mousedown",function(event){stop(event);$element.addClass("oni-state-active")});$element.bind("mouseup",function(event){stop(event);$element.removeClass("oni-state-active")});$element.bind("blur",function(){$element.removeClass("oni-state-active");$element.removeClass("oni-state-focus")});$element.bind("focus",function(){$element.addClass("oni-state-focus")});options.label||(label="input"===elementType?element.value:element.innerHTML);options.elementType=elementType;options.label=label;createButton(element,options);avalon.scan(element,vmodels)}}};btnModel.$init()};avalon.ui.buttonset=function(element,data,vmodels){var options=data.buttonsetOptions,buttonsetCorner=options.corner,direction=options.direction,$element=avalon(element);buttonsetCorner=void 0!==buttonsetCorner?buttonsetCorner:!0;var btnGroup={$init:function(){var elementClass=[];elementClass.push("oni-buttonset"),firstButtonClass="oni-corner-left",lastButtonClass="oni-corner-right",children=element.childNodes,buttons=[];buttonWidth=options.width,firstElement=!0;for(var el,i=0;el=children[i++];)if(1===el.nodeType){el.setAttribute("data-button-corner","false");buttons.push(el);if(firstElement){avalon(el).addClass("oni-button-first");firstElement=!1}}var n=buttons.length;if(n&&buttonsetCorner){if("vertical"===direction){firstButtonClass="oni-corner-top";lastButtonClass="oni-corner-bottom"}avalon(buttons[0]).addClass(firstButtonClass);avalon(buttons[n-1]).addClass(lastButtonClass)}"vertical"===direction&&elementClass.push("oni-buttonset-vertical");$element.addClass(elementClass.join(" "));data.buttons=buttons;avalon.scan(element,vmodels);(buttonWidth=parseInt(buttonWidth))?!function(buttonWidth){var btns=[].concat(buttons);setTimeout(function(){for(var i=0;button=btns[i++];){var $button=avalon(button),buttonName=button.tagName.toLowerCase();"input"===buttonName||"button"===buttonName?button.style.width=buttonWidth+"px":button.style.width=buttonWidth-parseInt($button.css("border-left-width"))-parseInt($button.css("border-right-width"))-2*parseInt($button.css("padding-left"))+"px"}},10)}(buttonWidth):!function(buttons){var interval=0,maxButtonWidth=0;buttons=buttons.concat();interval=setInterval(function(){for(var $button,button,buttonWidth=0,i=0;button=buttons[i++];)buttonWidth=Math.max(buttonWidth,avalon(button).outerWidth());if(buttonWidth!==maxButtonWidth)maxButtonWidth=buttonWidth;else{maxButtonWidth+=1;for(var button,i=0;button=buttons[i++];){var buttonName=button.tagName.toLowerCase(),$button=avalon(button);"input"===buttonName||"button"===buttonName?button.style.width=maxButtonWidth+"px":button.style.width=maxButtonWidth-parseInt($button.css("border-left-width"))-parseInt($button.css("border-right-width"))-2*parseInt($button.css("padding-left"))+"px"}clearInterval(interval)}},100)}(buttons)}};btnGroup.$init()};widget.version=1;widget.defaults={groups:!1,direction:"",data:[],type:"text",iconPosition:"left",icon:"",size:"",color:"",corner:!0,style:"",disabled:!1,label:"",width:"",direc:""};return avalon});