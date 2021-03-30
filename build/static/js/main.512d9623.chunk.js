(this["webpackJsonp03-tetris"]=this["webpackJsonp03-tetris"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,r){},function(e,n,r){},function(e,n,r){},function(e,n,r){},function(e,n,r){},,function(e,n,r){},function(e,n,r){},function(e,n,r){},function(e,n,r){"use strict";r.r(n);var t=r(1),o=r.n(t),c=r(8),a=r.n(c),i=(r(13),r.p,r(14),r(6)),s=(r(15),r(16),r(17),{1:"yellow",2:"lightBlue",3:"darkBlue",4:"orange",5:"red",6:"green",7:"purple",11:"yellow",12:"lightBlue",13:"darkBlue",14:"orange",15:"red",16:"green",17:"purple"}),u=r(0);var l=function(e){var n=e.gameData.playField,r=e.gameData.movingBrick,t=e.gameData.baseLine,o=e.gameData.baseColumn,c=e.gameData.movingBrick.length;return Object(u.jsx)("div",{className:"PlayArea",children:function(){for(var e=[],a=function(){for(var e=[],a=0;a<24;a++)if(a<=t-c||a>t)e=e.concat(n[a]);else for(var i=0;i<10;i++)e=i<o||i>=o+c?e.concat(n[a][i]):e.concat(r[a-t+c-1][i-o]+n[a][i]);return e}(),i=40;i<240;i++)0===a[i]?e.push(Object(u.jsx)("div",{className:"PlayArea__cell"},"".concat(i))):e.push(Object(u.jsx)("div",{className:"PlayArea__cell_".concat(s[a[i]])},"".concat(i)));return e}()})};var v=r(2),d=r(3),m=r(5),b=r(4);function f(e,n,r,t,o){for(var c=0;c<o;c++)for(var a=0;a<o;a++)if([1,2,3,4,5,6,7].includes(n[c][a])&&[11,12,13,14,15,16,17].includes(e[c+r-o+1][a+t]))return!1;return!0}var p={0:[[1,1],[1,1]],1:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,2,2,2]],2:[[0,3,0],[0,3,0],[3,3,0]],3:[[4,0,0],[4,0,0],[4,4,0]],4:[[0,0,0],[5,5,0],[0,5,5]],5:[[0,0,0],[0,6,6],[6,6,0]],6:[[0,0,0],[7,7,7],[0,7,0]]};function k(e){var n=Math.random()*(e+1);return Math.floor(n)}function j(e){for(var n=e.length,r=[],t=0;t<n;t++){for(var o=[],c=0;c<n;c++)o.push(e[n-c-1][t]);o.every((function(e){return 0===e}))?r.unshift(o):r.push(o)}return r}function h(){for(var e=p[k(6)],n=0;n<k(3);n++)e=j(e);var r=e.length;return{brick:e,baseColumn:Math.ceil((10-r)/2)}}var g=function(e){Object(m.a)(r,e);var n=Object(b.a)(r);function r(){return Object(v.a)(this,r),n.apply(this,arguments)}return Object(d.a)(r,[{key:"stopBlock",value:function(e){for(var n=e.playField,r=e.movingBrick,t=e.baseLine,o=e.baseColumn,c=e.movingBrick.length,a=[],i=0;i<24;i++)if(i<=t-c||i>t)a.push(n[i]);else{for(var s=[],u=0;u<10;u++)u<o||u>=o+c?s.push(n[i][u]):[1,2,3,4,5,6,7].includes(r[i-t+c-1][u-o])?s.push(r[i-t+c-1][u-o]+10):s.push(n[i][u]);a.push(s)}var l=e.score+1,v=e.record;return l>e.record&&(v=l,localStorage.setItem("record",v)),{playField:a,movingBrick:[],baseLine:3,baseColumn:3,nextBrick:e.nextBrick,nextBaseColumn:e.nextBaseColumn,score:l,record:v,bricksCount:e.bricksCount+1}}},{key:"move",value:function(e){var n=e.playField,r=e.movingBrick,t=e.baseLine+1,o=e.baseColumn,c=e.movingBrick.length;return 0===r.length?e:t>23||!1===f(n,r,t,o,c)?this.stopBlock(e):{playField:n,movingBrick:r,baseLine:t,baseColumn:o,nextBrick:e.nextBrick,nextBaseColumn:e.nextBaseColumn,score:e.score,record:e.record,bricksCount:e.bricksCount}}}]),r}(o.a.Component),B=function(e){Object(m.a)(r,e);var n=Object(b.a)(r);function r(){return Object(v.a)(this,r),n.apply(this,arguments)}return Object(d.a)(r,[{key:"doNotMove",value:function(e){return e}},{key:"move",value:function(e){var n=e.playField,r=e.movingBrick,t=e.baseLine,o=e.baseColumn+1,c=e.movingBrick.length;if(o+c>10)for(var a=0;a<c;a++)for(var i=c-1;i>9-o;i--)if([1,2,3,4,5,6,7].includes(r[a][i]))return this.doNotMove(e);return!1===f(n,r,t,o,c)?this.doNotMove(e):{playField:n,movingBrick:r,baseLine:t,baseColumn:o,nextBrick:e.nextBrick,nextBaseColumn:e.nextBaseColumn,score:e.score,record:e.record,bricksCount:e.bricksCount}}}]),r}(o.a.Component),C=function(e){Object(m.a)(r,e);var n=Object(b.a)(r);function r(){return Object(v.a)(this,r),n.apply(this,arguments)}return Object(d.a)(r,[{key:"doNotMove",value:function(e){return e}},{key:"move",value:function(e){var n=e.playField,r=e.movingBrick,t=e.baseLine,o=e.baseColumn-1,c=e.movingBrick.length;if(o<0)for(var a=0;a<c;a++)for(var i=0;i<-1*o;i++)if([1,2,3,4,5,6,7].includes(r[a][i]))return this.doNotMove(e);return!1===f(n,r,t,o,c)?this.doNotMove(e):{playField:n,movingBrick:r,baseLine:t,baseColumn:o,nextBrick:e.nextBrick,nextBaseColumn:e.nextBaseColumn,score:e.score,record:e.record,bricksCount:e.bricksCount}}}]),r}(o.a.Component),x=(r(19),r.p+"static/media/start.0d813cbe.svg"),O=r.p+"static/media/pause.b545dedf.svg";var y=function(e){return Object(u.jsxs)("div",{className:"Controls",children:[Object(u.jsx)("button",{className:"button",onClick:e.startGame,children:Object(u.jsx)("img",{src:x})}),Object(u.jsx)("button",{className:"button",onClick:e.stopGame,children:Object(u.jsx)("img",{src:O})})]})};r(20);var N=function(e){return Object(u.jsxs)("div",{className:"Stat",children:[Object(u.jsx)("p",{className:"Stat__title",children:"SCORE:"}),Object(u.jsx)("p",{className:"Stat__score",children:e.score}),Object(u.jsx)("p",{className:"Stat__title",children:"BEST:"}),Object(u.jsx)("p",{className:"Stat__score",children:e.record})]})};r(21);var F=function(e){var n=e.gameData.nextBrick;return Object(u.jsxs)("div",{className:"Queue",children:[Object(u.jsx)("p",{className:"Queue__title",children:"NEXT:"}),Object(u.jsx)("div",{className:"Queue__item",children:function(){for(var e=[],r=function(){for(var e=[],r=0;r<4;r++)for(var t=0;t<4;t++)n[r]&&n[r][t]?e.push(n[r][t]):e.push(0);return e}(),t=0;t<16;t++)0===r[t]||void 0===r[t]?e.push(Object(u.jsx)("div",{className:"Queue__cell"},"".concat(t))):e.push(Object(u.jsx)("div",{className:"Queue__cell_".concat(s[r[t]])},"".concat(t)));return e}()})]})};var _=[0,5,10,20,40];var L=new g;function w(e,n,r){return function(e){for(var n=0;n<4;n++)if(e[n].some((function(e){return 0!==e})))return!0;return!1}(e.playField)?(console.log("youlose"),n(),e):e.playField.some((function(e){return e.every((function(e){return[11,12,13,14,15,16,17].includes(e)}))}))?function(e){for(var n=e.playField,r=e.movingBrick,t=e.baseLine,o=e.baseColumn,c=0,a=[],i=0;i<24;i++)n[i].every((function(e){return e>10}))?c+=1:a.push(n[i]);for(var s=0;s<c;s++)a.unshift([0,0,0,0,0,0,0,0,0,0]);var u=e.score+_[c],l=e.record;return u>e.record&&(l=u,localStorage.setItem("record",l)),{playField:a,movingBrick:r,baseLine:t,baseColumn:o,nextBrick:e.nextBrick,nextBaseColumn:e.nextBaseColumn,score:u,record:l,bricksCount:e.bricksCount}}(e):0===e.movingBrick.length?function(e){if(0===e.nextBrick.length){var n=h(),r=h();return{playField:e.playField,movingBrick:n.brick,baseLine:3,baseColumn:n.baseColumn,nextBrick:r.brick,nextBaseColumn:r.baseColumn,score:e.score,record:e.record,bricksCount:e.bricksCount}}var t=h();return{playField:e.playField,movingBrick:e.nextBrick,baseLine:3,baseColumn:e.nextBaseColumn,nextBrick:t.brick,nextBaseColumn:t.baseColumn,score:e.score,record:e.record,bricksCount:e.bricksCount}}(e):L.move(e)}var S=function(e){Object(m.a)(r,e);var n=Object(b.a)(r);function r(){return Object(v.a)(this,r),n.apply(this,arguments)}return Object(d.a)(r,[{key:"move",value:function(e){var n=e.playField,r=e.movingBrick,t=e.baseLine,o=e.baseColumn,c=e.movingBrick.length,a=o;o<0?a=0:o>10-c&&(a=10-c);for(var i=[],s=0;s<c;s++){for(var u=[],l=0;l<c;l++)u.push(r[c-l-1][s]);u.every((function(e){return 0===e}))?i.unshift(u):i.push(u)}return!1===f(n,i,t,o,c)?e:{playField:n,movingBrick:i,baseLine:t,baseColumn:a,nextBrick:e.nextBrick,nextBaseColumn:e.nextBaseColumn,score:e.score,record:e.record,bricksCount:e.bricksCount}}}]),r}(o.a.Component),D=new g,M=new B,A=new C,I=new S;var E=function(){var e=Object(t.useState)({playField:[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],movingBrick:[],baseLine:3,baseColumn:3,nextBrick:[],nextBaseColumn:3,score:0,record:localStorage.getItem("record"),bricksCount:0}),n=Object(i.a)(e,2),r=n[0],o=n[1],c=Object(t.useState)(),a=Object(i.a)(c,2),s=a[0],v=a[1],d=Object(t.useState)("stopped"),m=Object(i.a)(d,2),b=m[0];function f(){o((function(e){return w(e,p)}))}function p(){window.removeEventListener("keydown",k),clearInterval(s)}m[1];var k=Object(t.useCallback)((function(e){console.log(e),"Numpad5"===e.code||"ArrowDown"===e.code||"KeyS"===e.code?(e.preventDefault(),o((function(e){return D.move(e)}))):"Numpad4"===e.code||"ArrowLeft"===e.code||"KeyA"===e.code?(e.preventDefault(),o((function(e){return A.move(e)}))):"Numpad6"===e.code||"ArrowRight"===e.code||"KeyD"===e.code?(e.preventDefault(),o((function(e){return M.move(e)}))):"Numpad8"!==e.code&&"ArrowUp"!==e.code&&"KeyW"!==e.code||(e.preventDefault(),o((function(e){return I.move(e)})))}),[]);return Object(u.jsxs)("main",{className:"Main",children:[Object(u.jsx)(l,{gameData:r}),Object(u.jsx)(N,{score:r.score,record:r.record}),Object(u.jsx)(y,{startGame:function(){window.addEventListener("keydown",k),v(setInterval(f,1e3))},stopGame:p,status:b}),Object(u.jsx)(F,{gameData:r})]})};var P=function(){return localStorage.getItem("record")||localStorage.setItem("record",0),Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(E,{})})},Q=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,23)).then((function(n){var r=n.getCLS,t=n.getFID,o=n.getFCP,c=n.getLCP,a=n.getTTFB;r(e),t(e),o(e),c(e),a(e)}))};a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root")),Q()}],[[22,1,2]]]);
//# sourceMappingURL=main.512d9623.chunk.js.map