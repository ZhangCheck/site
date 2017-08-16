define([],function(){function MATH_LOG(n){return MT.log(MATH_ABS(n))/MT.LN10}function MATH_POW(n){return MT.pow(10,n)}function MATH_ISINT(n){return n===MATH_FLOOR(n)}function smartSteps(min,max,section,opts){custOpts=opts||{};custSteps=custOpts.steps||mySteps;custSecs=custOpts.secs||mySections;section=MATH_ROUND(+section||0)%99;min=+min||0;max=+max||0;minLocked=maxLocked=0;if("min"in custOpts){min=+custOpts.min||0;minLocked=1}if("max"in custOpts){max=+custOpts.max||0;maxLocked=1}min>max&&(max=[min,min=max][0]);var span=max-min;if(minLocked&&maxLocked)return bothLocked(min,max,section);if((section||5)>span){if(MATH_ISINT(min)&&MATH_ISINT(max))return forInteger(min,max,section);if(0===span)return forSpan0(min,max,section)}return coreCalc(min,max,section)}function makeResult(newMin,newMax,section,expon){expon=expon||0;var expStep=expNum((newMax-newMin)/section,-1),expMin=expNum(newMin,-1,1),expMax=expNum(newMax,-1),minExp=MT.min(expStep.e,expMin.e,expMax.e);0===expMin.c?minExp=MT.min(expStep.e,expMax.e):0===expMax.c&&(minExp=MT.min(expStep.e,expMin.e));expFixTo(expStep,{c:0,e:minExp});expFixTo(expMin,expStep,1);expFixTo(expMax,expStep);expon+=minExp;newMin=expMin.c;newMax=expMax.c;for(var step=(newMax-newMin)/section,zoom=MATH_POW(expon),fixTo=0,points=[],i=section+1;i--;)points[i]=(newMin+step*i)*zoom;if(0>expon){fixTo=decimals(zoom);step=+(step*zoom).toFixed(fixTo);newMin=+(newMin*zoom).toFixed(fixTo);newMax=+(newMax*zoom).toFixed(fixTo);for(var i=points.length;i--;){points[i]=points[i].toFixed(fixTo);0===+points[i]&&(points[i]="0")}}else{newMin*=zoom;newMax*=zoom;step*=zoom}custSecs=0;custSteps=0;custOpts=0;return{min:newMin,max:newMax,secs:section,step:step,fix:fixTo,exp:expon,pnts:points}}function expNum(num,digit,byFloor){digit=MATH_ROUND(digit%10)||2;if(0>digit)if(MATH_ISINT(num))digit=(""+MATH_ABS(num)).replace(/0+$/,"").length||1;else{num=num.toFixed(15).replace(/0+$/,"");digit=num.replace(".","").replace(/^[-0]+/,"").length;num=+num}var expon=MATH_FLOOR(MATH_LOG(num))-digit+1,cNum=+(num*MATH_POW(-expon)).toFixed(15)||0;cNum=byFloor?MATH_FLOOR(cNum):MATH_CEIL(cNum);!cNum&&(expon=0);if((""+MATH_ABS(cNum)).length>digit){expon+=1;cNum/=10}return{c:cNum,e:expon}}function expFixTo(expnum1,expnum2,byFloor){var deltaExp=expnum2.e-expnum1.e;if(deltaExp){expnum1.e+=deltaExp;expnum1.c*=MATH_POW(-deltaExp);expnum1.c=byFloor?MATH_FLOOR(expnum1.c):MATH_CEIL(expnum1.c)}}function expFixMin(expnum1,expnum2,byFloor){expnum1.e<expnum2.e?expFixTo(expnum2,expnum1,byFloor):expFixTo(expnum1,expnum2,byFloor)}function getCeil(num,rounds){rounds=rounds||mySteps;num=expNum(num);for(var cNum=num.c,i=0;cNum>rounds[i];)i++;if(!rounds[i]){cNum/=10;num.e+=1;i=0;for(;cNum>rounds[i];)i++}num.c=rounds[i];return num}function coreCalc(min,max,section){var step,secs=section||+custSecs.slice(-1),expStep=getCeil((max-min)/secs,custSteps),expSpan=expNum(max-min),expMin=expNum(min,-1,1),expMax=expNum(max,-1);expFixTo(expSpan,expStep);expFixTo(expMin,expStep,1);expFixTo(expMax,expStep);section?step=look4step(expMin,expMax,secs):secs=look4sections(expMin,expMax);if(MATH_ISINT(min)&&MATH_ISINT(max)&&min*max>=0){if(secs>max-min)return forInteger(min,max,secs);secs=tryForInt(min,max,section,expMin,expMax,secs)}var arrMM=cross0(min,max,expMin.c,expMax.c);expMin.c=arrMM[0];expMax.c=arrMM[1];(minLocked||maxLocked)&&singleLocked(min,max,expMin,expMax);return makeResult(expMin.c,expMax.c,secs,expMax.e)}function look4sections(expMin,expMax){for(var section,tmpStep,tmpMin,tmpMax,reference=[],i=custSecs.length;i--;){section=custSecs[i];tmpStep=getCeil((expMax.c-expMin.c)/section,custSteps);tmpStep=tmpStep.c*MATH_POW(tmpStep.e);tmpMin=MATH_FLOOR(expMin.c/tmpStep)*tmpStep;tmpMax=MATH_CEIL(expMax.c/tmpStep)*tmpStep;reference[i]={min:tmpMin,max:tmpMax,step:tmpStep,span:tmpMax-tmpMin}}reference.sort(function(a,b){var delta=a.span-b.span;0===delta&&(delta=a.step-b.step);return delta});reference=reference[0];section=reference.span/reference.step;expMin.c=reference.min;expMax.c=reference.max;return 3>section?2*section:section}function look4step(expMin,expMax,secs){for(var span,tmpMax,tmpMin=expMax.c,tmpStep=(expMax.c-expMin.c)/secs-1;tmpMin>expMin.c;){tmpStep=getCeil(tmpStep+1,custSteps);tmpStep=tmpStep.c*MATH_POW(tmpStep.e);span=tmpStep*secs;tmpMax=MATH_CEIL(expMax.c/tmpStep)*tmpStep;tmpMin=tmpMax-span}var deltaMin=expMin.c-tmpMin,deltaMax=tmpMax-expMax.c,deltaDelta=deltaMin-deltaMax;if(deltaDelta>1.1*tmpStep){deltaDelta=MATH_ROUND(deltaDelta/tmpStep/2)*tmpStep;tmpMin+=deltaDelta;tmpMax+=deltaDelta}expMin.c=tmpMin;expMax.c=tmpMax;return tmpStep}function tryForInt(min,max,section,expMin,expMax,secs){var span=expMax.c-expMin.c,step=span/secs*MATH_POW(expMax.e);if(!MATH_ISINT(step)){step=MATH_FLOOR(step);span=step*secs;if(max-min>span){step+=1;span=step*secs;if(!section&&step*(secs-1)>=max-min){secs-=1;span=step*secs}}if(span>=max-min){var delta=span-(max-min);expMin.c=MATH_ROUND(min-delta/2);expMax.c=MATH_ROUND(max+delta/2);expMin.e=0;expMax.e=0}}return secs}function forInteger(min,max,section){section=section||5;if(minLocked)max=min+section;else if(maxLocked)min=max-section;else{var delta=section-(max-min),newMin=MATH_ROUND(min-delta/2),newMax=MATH_ROUND(max+delta/2),arrMM=cross0(min,max,newMin,newMax);min=arrMM[0];max=arrMM[1]}return makeResult(min,max,section)}function forSpan0(min,max,section){section=section||5;var delta=MT.min(MATH_ABS(max/section),section)/2.1;if(minLocked)max=min+delta;else if(maxLocked)min=max-delta;else{min-=delta;max+=delta}return coreCalc(min,max,section)}function cross0(min,max,newMin,newMax){if(min>=0&&0>newMin){newMax-=newMin;newMin=0}else if(0>=max&&newMax>0){newMin-=newMax;newMax=0}return[newMin,newMax]}function decimals(num){num=(+num).toFixed(15).split(".");return num.pop().replace(/0+$/,"").length}function singleLocked(min,max,emin,emax){if(minLocked){var expMin=expNum(min,4,1);emin.e-expMin.e>6&&(expMin={c:0,e:emin.e});expFixMin(emin,expMin);expFixMin(emax,expMin);emax.c+=expMin.c-emin.c;emin.c=expMin.c}else if(maxLocked){var expMax=expNum(max,4);emax.e-expMax.e>6&&(expMax={c:0,e:emax.e});expFixMin(emin,expMax);expFixMin(emax,expMax);emin.c+=expMax.c-emax.c;emax.c=expMax.c}}function bothLocked(min,max,section){var trySecs=section?[section]:custSecs,span=max-min;if(0===span){max=expNum(max,3);section=trySecs[0];max.c=MATH_ROUND(max.c+section/2);return makeResult(max.c-section,max.c,section,max.e)}MATH_ABS(max/span)<1e-6&&(max=0);MATH_ABS(min/span)<1e-6&&(min=0);var step,deltaSpan,score,scoreS=[[5,10],[10,2],[50,10],[100,2]],reference=[],debugLog=[],expSpan=expNum(max-min,3),expMin=expNum(min,-1,1),expMax=expNum(max,-1);expFixTo(expMin,expSpan,1);expFixTo(expMax,expSpan);span=expMax.c-expMin.c;expSpan.c=span;for(var i=trySecs.length;i--;){section=trySecs[i];step=MATH_CEIL(span/section);deltaSpan=step*section-span;score=3*(deltaSpan+3);score+=2*(section-trySecs[0]+2);section%5===0&&(score-=10);for(var j=scoreS.length;j--;)step%scoreS[j][0]===0&&(score/=scoreS[j][1]);debugLog[i]=[section,step,deltaSpan,score].join();reference[i]={secs:section,step:step,delta:deltaSpan,score:score}}reference.sort(function(a,b){return a.score-b.score});reference=reference[0];expMin.c=MATH_ROUND(expMin.c-reference.delta/2);expMax.c=MATH_ROUND(expMax.c+reference.delta/2);return makeResult(expMin.c,expMax.c,reference.secs,expSpan.e)}var custOpts,custSteps,custSecs,minLocked,maxLocked,mySteps=[10,20,25,50],mySections=[4,5,6],MT=Math,MATH_ROUND=MT.round,MATH_FLOOR=MT.floor,MATH_CEIL=MT.ceil,MATH_ABS=MT.abs;return smartSteps});