AUI.add("aui-datatable-events",function(n){var X=n.Lang,w=X.isArray,K=X.isObject,f=X.isValue,c=n.Array.each,J=n.Object.keys,R=n.Object.values,D=n.Selector.test,p=n.ClassNameManager.getClassName,x=n.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),i=n.cached(function(Y,A){return Y+x(A.toLowerCase());}),S="boundingBox",U="cell",H="cellSelector",l="childNodes",M="click",r="column",I="columnset",z="columnIndex",d="events",C="header",m="headers",t="host",v="id",e="inHead",W="keydown",V="keyup",L="liner",E="mousedown",g="mouseenter",o="mouseleave",k="mouseup",G="recordset",N="row",y="table",T="tags",a="tagName",P="tbody",O="th",B="thead",F="tr",q="datatable",s=",",u=".",j="#",b=" ",Q=p(q,L);var h=n.Base.create("dataTableEvents",n.Plugin.Base,[],{_bubbling:false,_handler:null,_tagsFilter:null,initializer:function(Z){var A=this;var Y=A.get(T);A._tagsFilter=J(Y).join(s);A._initEvents();},destructor:function(){var A=this;var Y=A._handler;if(Y){Y.detach();}},getColumn:function(Y){var A=this;var Z=A.get(t);return Z.get(I).idHash[Y];},getColumnByCell:function(Y){var A=this;var Z=Y.getAttribute(m).split(b).pop()||Y.get(v);return A.getColumn(Z);},getColumnIndex:function(A){return A.keyIndex;},getColumnNode:function(A){return A.thNode;},getColNode:function(Y){var A=this;var aa=A.get(t);var Z=A.getColumnIndex(A.getColumnByCell(Y));return aa._colgroupNode.get(l).item(Z);},getRecord:function(Y){var A=this;var Z=A.get(t);return Z.get(G).getRecord(Y);},getRecordByRow:function(Y){var A=this;return A.getRecord(Y.get(v));},_filterBubble:function(ad){var A=this;var ac=A.get(t);var Y=ac._tableNode.getDOM();var Z=[];while(ad){var ab=(ad===Y);if(D(ad,A._tagsFilter,(ab?null:Y))){Z.push(ad);}if(ab){break;}ad=ad.parentNode;}if(Z.length){var aa=A.getColNode(n.one(Z[0]));if(aa){Z.splice(2,0,aa.getDOM());}}return Z;},_handleEvents:function(Z){var ae,ac;var aj=this;var ak=aj.get(t);var ag=ak._theadNode;var am=aj.get(T);var ab=Z.currentTarget;var aa=Z.type;var ah=ab.getData(e);var A=ab.getData(L);var al=ab.getData(N);if(!f(ah)){ah=ag.contains(ab);ab.setData(e,ah);}if(!f(A)){A=ab.one(u+Q);ab.setData(L,A);}if(!f(al)){al=ab.ancestor(F);ab.setData(N,al);}var ai={cell:ab,column:aj.getColumnByCell(ab),inHead:ah,liner:A,originalEvent:Z,row:al,record:aj.getRecordByRow(al)};var Y=aj._filterBubble(Z.currentTarget.getDOM());aj._bubbling=true;for(ae=0,ac=Y.length;(ae<ac)&&aj._bubbling;ae++){var ad=n.one(Y[ae]);var af=am[ad.get(a).toLowerCase()];ai.node=ad;ai.property=af;ak.fire(i(af,aa),ai);}},_initEvents:function(){var A=this;var ab=A.get(t);var Y=A.get(T);var Z=A.get(d);var aa={};c(R(Y),function(ac){c(Z,function(ad){var ae=i(ac,ad);aa[ae]={stoppedFn:n.bind(A._stopBubble,A)};});});ab.publish(aa);A._handler=ab.get(S).delegate(Z,n.bind(A._handleEvents,A),A.get(H));},_stopBubble:function(){var A=this;A._bubbling=false;}},{NS:"edit",NAME:"dataTableEvents",ATTRS:{cellSelector:{value:"td,th",writeOnce:true},events:{validator:w,value:[M,W,V,E,g,o,k]},tags:{validator:K,value:{col:r,table:y,thead:B,tbody:P,tr:N,th:C,td:U},writeOnce:true}}});n.namespace("Plugin").DataTableEvents=h;},"@VERSION@",{requires:["aui-base","datatable","plugin"]});