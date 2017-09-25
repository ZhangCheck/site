define([],function(){var easing={Linear:function(k){return k},QuadraticIn:function(k){return k*k},QuadraticOut:function(k){return k*(2-k)},QuadraticInOut:function(k){return(k*=2)<1?.5*k*k:-.5*(--k*(k-2)-1)},CubicIn:function(k){return k*k*k},CubicOut:function(k){return--k*k*k+1},CubicInOut:function(k){return(k*=2)<1?.5*k*k*k:.5*((k-=2)*k*k+2)},QuarticIn:function(k){return k*k*k*k},QuarticOut:function(k){return 1- --k*k*k*k},QuarticInOut:function(k){return(k*=2)<1?.5*k*k*k*k:-.5*((k-=2)*k*k*k-2)},QuinticIn:function(k){return k*k*k*k*k},QuinticOut:function(k){return--k*k*k*k*k+1},QuinticInOut:function(k){return(k*=2)<1?.5*k*k*k*k*k:.5*((k-=2)*k*k*k*k+2)},SinusoidalIn:function(k){return 1-Math.cos(k*Math.PI/2)},SinusoidalOut:function(k){return Math.sin(k*Math.PI/2)},SinusoidalInOut:function(k){return.5*(1-Math.cos(Math.PI*k))},ExponentialIn:function(k){return 0===k?0:Math.pow(1024,k-1)},ExponentialOut:function(k){return 1===k?1:1-Math.pow(2,-10*k)},ExponentialInOut:function(k){return 0===k?0:1===k?1:(k*=2)<1?.5*Math.pow(1024,k-1):.5*(-Math.pow(2,-10*(k-1))+2)},CircularIn:function(k){return 1-Math.sqrt(1-k*k)},CircularOut:function(k){return Math.sqrt(1- --k*k)},CircularInOut:function(k){return(k*=2)<1?-.5*(Math.sqrt(1-k*k)-1):.5*(Math.sqrt(1-(k-=2)*k)+1)},ElasticIn:function(k){var s,a=.1,p=.4;if(0===k)return 0;if(1===k)return 1;if(!a||1>a){a=1;s=p/4}else s=p*Math.asin(1/a)/(2*Math.PI);return-(a*Math.pow(2,10*(k-=1))*Math.sin((k-s)*(2*Math.PI)/p))},ElasticOut:function(k){var s,a=.1,p=.4;if(0===k)return 0;if(1===k)return 1;if(!a||1>a){a=1;s=p/4}else s=p*Math.asin(1/a)/(2*Math.PI);return a*Math.pow(2,-10*k)*Math.sin((k-s)*(2*Math.PI)/p)+1},ElasticInOut:function(k){var s,a=.1,p=.4;if(0===k)return 0;if(1===k)return 1;if(!a||1>a){a=1;s=p/4}else s=p*Math.asin(1/a)/(2*Math.PI);return(k*=2)<1?-.5*(a*Math.pow(2,10*(k-=1))*Math.sin((k-s)*(2*Math.PI)/p)):a*Math.pow(2,-10*(k-=1))*Math.sin((k-s)*(2*Math.PI)/p)*.5+1},BackIn:function(k){var s=1.70158;return k*k*((s+1)*k-s)},BackOut:function(k){var s=1.70158;return--k*k*((s+1)*k+s)+1},BackInOut:function(k){var s=2.5949095;return(k*=2)<1?.5*(k*k*((s+1)*k-s)):.5*((k-=2)*k*((s+1)*k+s)+2)},BounceIn:function(k){return 1-easing.BounceOut(1-k)},BounceOut:function(k){return 1/2.75>k?7.5625*k*k:2/2.75>k?7.5625*(k-=1.5/2.75)*k+.75:2.5/2.75>k?7.5625*(k-=2.25/2.75)*k+.9375:7.5625*(k-=2.625/2.75)*k+.984375},BounceInOut:function(k){return.5>k?.5*easing.BounceIn(2*k):.5*easing.BounceOut(2*k-1)+.5}};return easing});