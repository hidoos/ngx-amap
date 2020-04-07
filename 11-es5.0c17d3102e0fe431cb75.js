function _defineProperties(n,l){for(var e=0;e<l.length;e++){var a=l[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/HgM":function(n,l){n.exports='\x3c!-- DEMO START --\x3e\n<ngx-amap class="demo-map" [zoom]="4" (naReady)="onMapReady($event)">\n  <ui-simple-marker [iconLabel]="\'A\'" [position]="p1"></ui-simple-marker>\n  <ui-simple-marker [iconLabel]="\'BC\'" [iconStyle]="\'green\'" [containerClassNames]="\'my-marker\'" [position]="p2"></ui-simple-marker>\n  <ui-simple-marker [iconLabel]="p3Label" [iconStyle]="\'red\'" [position]="p3"></ui-simple-marker>\n  <ui-simple-marker [iconLabel]="p4Label" [iconStyle]="\'black\'" [position]="p4"></ui-simple-marker>\n</ngx-amap>\n\x3c!-- DEMO END --\x3e\n\n<code-block\n  [html]="html"\n  [component]="component"\n  [scss]="scss">\n</code-block>'},HeUt:function(n,l,e){"use strict";e.r(l),l.default=".amap-simple-marker.my-marker .amap-simple-marker-label {\n  color: #fff;\n  font-size: 16px;\n  font-style: italic;\n  text-decoration: line-through;\n}\n"},"KY+z":function(n,l,e){"use strict";e.r(l);var a=e("8Y7J"),t=function n(){_classCallCheck(this,n)},o=e("EdU/"),u=e("/Yna"),i=e("JRKe"),r=e("Ed4d"),b=e("8WaK"),s=e("QfCi"),c=e("CghO"),m=e("Sq/J"),p=e("pMnS"),d=e("icah"),f=e("PhWJ"),D=e("eVrW"),h=e("7DxU");function g(n,l,e){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:70,t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:70,o=n.getCenter(),u=n.lnglatToPixel(o),i=Math.ceil(l/e),r=u.getX(),b=u.getY(),s=[],c=0;c<i;c++)for(var m=0;m<e&&(s.push(n.pixelToLngLat(new AMap.Pixel(r+(m-(e-1)/2)*a,b+(c-(i-1)/2)*t))),!(s.length>=l));m++);return s}var k=function(){function n(){_classCallCheck(this,n),this.html=e("/HgM"),this.component=e("xsBF").default,this.scss=e("HeUt").default,this.p3Label={innerHTML:"\u70ed",style:{color:"#fff",fontSize:"120%",marginTop:"2px"}},this.p4Label={innerHTML:'<div class="my-blue-point"><img src="https://webapi.amap.com/theme/v1.3/hotNew.png"/></div>'}}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"onMapReady",value:function(n){var l=g(n,4,4);this.p1=l[0],this.p2=l[1],this.p3=l[2],this.p4=l[3]}}]),n}(),y=a.rb({encapsulation:2,styles:[[".amap-simple-marker.my-marker .amap-simple-marker-label{color:#fff;font-size:16px;font-style:italic;text-decoration:line-through}"]],data:{}});function z(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,19,"ngx-amap",[["class","demo-map"]],null,[[null,"naReady"]],(function(n,l,e){var a=!0;return"naReady"===l&&(a=!1!==n.component.onMapReady(e)&&a),a}),d.f,d.c)),a.Kb(512,null,f.x,f.x,[f.a,f.G,a.y]),a.Kb(512,null,f.H,f.H,[f.x,f.G]),a.sb(3,770048,null,0,f.t,[a.k,f.x,f.H,f.G,f.r,a.y],{zoom:[0,"zoom"]},{naReady:"naReady"}),(n()(),a.tb(4,0,null,0,3,"ui-simple-marker",[],null,null,null,null,null)),a.Kb(512,null,f.C,f.C,[f.x,f.q,f.G,a.y]),a.sb(6,1720320,null,1,f.w,[f.C,f.r,f.x,f.K,f.M,f.N,f.G,a.y],{iconLabel:[0,"iconLabel"],position:[1,"position"]},null),a.Lb(603979776,1,{infoWindowComponent:1}),(n()(),a.tb(8,0,null,0,3,"ui-simple-marker",[],null,null,null,null,null)),a.Kb(512,null,f.C,f.C,[f.x,f.q,f.G,a.y]),a.sb(10,1720320,null,1,f.w,[f.C,f.r,f.x,f.K,f.M,f.N,f.G,a.y],{iconStyle:[0,"iconStyle"],iconLabel:[1,"iconLabel"],containerClassNames:[2,"containerClassNames"],position:[3,"position"]},null),a.Lb(603979776,2,{infoWindowComponent:1}),(n()(),a.tb(12,0,null,0,3,"ui-simple-marker",[],null,null,null,null,null)),a.Kb(512,null,f.C,f.C,[f.x,f.q,f.G,a.y]),a.sb(14,1720320,null,1,f.w,[f.C,f.r,f.x,f.K,f.M,f.N,f.G,a.y],{iconStyle:[0,"iconStyle"],iconLabel:[1,"iconLabel"],position:[2,"position"]},null),a.Lb(603979776,3,{infoWindowComponent:1}),(n()(),a.tb(16,0,null,0,3,"ui-simple-marker",[],null,null,null,null,null)),a.Kb(512,null,f.C,f.C,[f.x,f.q,f.G,a.y]),a.sb(18,1720320,null,1,f.w,[f.C,f.r,f.x,f.K,f.M,f.N,f.G,a.y],{iconStyle:[0,"iconStyle"],iconLabel:[1,"iconLabel"],position:[2,"position"]},null),a.Lb(603979776,4,{infoWindowComponent:1}),(n()(),a.tb(20,0,null,null,1,"code-block",[],null,null,null,D.b,D.a)),a.sb(21,114688,null,0,h.a,[],{html:[0,"html"],component:[1,"component"],scss:[2,"scss"]},null)],(function(n,l){var e=l.component;n(l,3,0,4),n(l,6,0,"A",e.p1),n(l,10,0,"green","BC","my-marker",e.p2),n(l,14,0,"red",e.p3Label,e.p3),n(l,18,0,"black",e.p4Label,e.p4),n(l,21,0,e.html,e.component,e.scss)}),null)}var x=e("iKmO"),L=e("qU0y"),w=e("SVse"),C=e("5VGP"),v=e("ooFx"),M=e("rJp6"),T=e("5MXC"),N=e("SBNi"),P=e("JzE0"),S=e("1+nf"),I=e("iInd"),O=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),E=a.rb({encapsulation:0,styles:[[""]],data:{}});function G(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"demo-simple-marker-custom-text",[],null,null,null,z,y)),a.sb(1,114688,null,0,k,[],null,null)],(function(n,l){n(l,1,0)}),null)}function R(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,20,"nz-page-header",[["class","ant-page-header"],["nzTitle","ui-simple-marker \u7b80\u5355\u6807\u8bb0"]],[[2,"has-footer",null],[2,"ant-page-header-ghost",null],[2,"has-breadcrumb",null]],null,null,x.b,x.a)),a.sb(1,573440,null,2,L.b,[w.f,C.l],{nzTitle:[0,"nzTitle"]},null),a.Lb(603979776,1,{nzPageHeaderFooter:0}),a.Lb(603979776,2,{nzPageHeaderBreadcrumb:0}),(n()(),a.tb(4,0,null,0,12,"nz-breadcrumb",[["nz-page-header-breadcrumb",""]],null,null,null,v.c,v.a)),a.sb(5,245760,null,0,M.a,[a.q,a.y,a.h,a.k,a.D],null,null),a.sb(6,16384,[[2,4]],0,L.a,[],null,null),(n()(),a.tb(7,0,null,0,2,"nz-breadcrumb-item",[],null,null,null,v.d,v.b)),a.sb(8,49152,null,0,M.b,[M.a],null,null),(n()(),a.Nb(-1,0,["\u9996\u9875"])),(n()(),a.tb(10,0,null,0,3,"nz-breadcrumb-item",[],null,null,null,v.d,v.b)),a.sb(11,49152,null,0,M.b,[M.a],null,null),(n()(),a.tb(12,0,null,0,1,"a",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["UI \u6307\u4ee4"])),(n()(),a.tb(14,0,null,0,2,"nz-breadcrumb-item",[],null,null,null,v.d,v.b)),a.sb(15,49152,null,0,M.b,[M.a],null,null),(n()(),a.Nb(-1,0,["ui-simple-marker"])),(n()(),a.tb(17,0,null,5,3,"nz-page-header-extra",[["class","ant-page-header-heading-extra"]],null,null,null,null,null)),a.sb(18,16384,null,0,L.c,[],null,null),(n()(),a.tb(19,0,null,null,1,"a",[["href","api-doc/directives/UiSimpleMarkerDirective.html"],["target","_blank"]],null,null,null,null,null)),(n()(),a.Nb(-1,null,[" API \u6587\u6863 "])),(n()(),a.tb(21,0,null,null,2,"nz-divider",[],null,null,null,T.b,T.a)),a.Kb(512,null,C.D,C.D,[a.E]),a.sb(23,638976,null,0,N.a,[a.k,C.D],null,null),(n()(),a.tb(24,0,null,null,9,"nz-tabset",[["style","margin-top: 8px;"]],null,null,null,P.d,P.b)),a.Kb(512,null,C.D,C.D,[a.E]),a.sb(26,8110080,null,1,S.e,[C.l,a.D,C.D,a.k,a.h,[2,I.m]],{nzTabPosition:[0,"nzTabPosition"]},null),a.Lb(603979776,3,{listOfNzTabComponent:1}),(n()(),a.tb(28,0,null,null,5,"nz-tab",[["nzTitle","\u81ea\u5b9a\u4e49\u6587\u5b57"]],null,null,null,P.c,P.a)),a.sb(29,704512,[[3,4]],2,S.b,[a.k,a.D],{nzTitle:[0,"nzTitle"]},null),a.Lb(603979776,4,{template:0}),a.Lb(603979776,5,{linkDirective:0}),(n()(),a.ib(0,[[4,2]],1,1,null,G)),a.sb(33,16384,null,0,S.c,[],null,null)],(function(n,l){n(l,1,0,"ui-simple-marker \u7b80\u5355\u6807\u8bb0"),n(l,5,0),n(l,23,0),n(l,26,0,"left"),n(l,29,0,"\u81ea\u5b9a\u4e49\u6587\u5b57")}),(function(n,l){n(l,0,0,a.Fb(l,1).nzPageHeaderFooter,a.Fb(l,1).nzGhost,a.Fb(l,1).nzPageHeaderBreadcrumb)}))}var H=a.pb("app-demo-simple-marker",O,(function(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"app-demo-simple-marker",[],null,null,null,R,E)),a.sb(1,114688,null,0,O,[],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),F=function(){function n(){_classCallCheck(this,n),this.html=e("iVf6"),this.component=e("V6EW").default,this.options=[]}return _createClass(n,[{key:"onMapReady",value:function(n){var l=["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f"],e=["address-book","address-book-o","address-card","address-card-o","adjust","american-sign-language-interpreting","anchor","archive","area-chart","arrows","arrows-h","arrows-v","asl-interpreting","assistive-listening-systems","asterisk"],a=g(n,e.length,5);this.options=[];for(var t=0,o=a.length;t<o;t++)this.options.push({awesomeIcon:e[t],iconLabel:{style:{color:l[t],fontSize:10+t+"px"}},iconStyle:"black",position:a[t]})}}]),n}(),K=a.rb({encapsulation:0,styles:[[""]],data:{}});function q(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,3,"ui-awesome-marker",[],null,null,null,null,null)),a.Kb(512,null,f.D,f.D,[f.x,f.q,f.G,a.y]),a.sb(2,1720320,null,1,f.v,[f.D,f.r,f.x,f.K,f.M,f.N,f.G,a.y],{iconStyle:[0,"iconStyle"],iconLabel:[1,"iconLabel"],position:[2,"position"],awesomeIcon:[3,"awesomeIcon"]},null),a.Lb(603979776,1,{infoWindowComponent:1})],(function(n,l){n(l,2,0,l.context.$implicit.iconStyle,l.context.$implicit.iconLabel,l.context.$implicit.position,l.context.$implicit.awesomeIcon)}),null)}function A(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,5,"ngx-amap",[["class","demo-map"]],null,[[null,"naReady"]],(function(n,l,e){var a=!0;return"naReady"===l&&(a=!1!==n.component.onMapReady(e)&&a),a}),d.f,d.c)),a.Kb(512,null,f.x,f.x,[f.a,f.G,a.y]),a.Kb(512,null,f.H,f.H,[f.x,f.G]),a.sb(3,770048,null,0,f.t,[a.k,f.x,f.H,f.G,f.r,a.y],{zoom:[0,"zoom"]},{naReady:"naReady"}),(n()(),a.ib(16777216,null,0,1,null,q)),a.sb(5,278528,null,0,w.i,[a.P,a.L,a.r],{ngForOf:[0,"ngForOf"]},null),(n()(),a.tb(6,0,null,null,1,"code-block",[],null,null,null,D.b,D.a)),a.sb(7,114688,null,0,h.a,[],{html:[0,"html"],component:[1,"component"]},null)],(function(n,l){var e=l.component;n(l,3,0,4),n(l,5,0,e.options),n(l,7,0,e.html,e.component)}),null)}var _=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),U=a.rb({encapsulation:0,styles:[[""]],data:{}});function B(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"demo-awesome-marker-text-style",[],null,null,null,A,K)),a.sb(1,49152,null,0,F,[],null,null)],null,null)}function V(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,20,"nz-page-header",[["class","ant-page-header"],["nzTitle","ui-awesome-marker \u5b57\u4f53\u56fe\u6807\u6807\u6ce8"]],[[2,"has-footer",null],[2,"ant-page-header-ghost",null],[2,"has-breadcrumb",null]],null,null,x.b,x.a)),a.sb(1,573440,null,2,L.b,[w.f,C.l],{nzTitle:[0,"nzTitle"]},null),a.Lb(603979776,1,{nzPageHeaderFooter:0}),a.Lb(603979776,2,{nzPageHeaderBreadcrumb:0}),(n()(),a.tb(4,0,null,0,12,"nz-breadcrumb",[["nz-page-header-breadcrumb",""]],null,null,null,v.c,v.a)),a.sb(5,245760,null,0,M.a,[a.q,a.y,a.h,a.k,a.D],null,null),a.sb(6,16384,[[2,4]],0,L.a,[],null,null),(n()(),a.tb(7,0,null,0,2,"nz-breadcrumb-item",[],null,null,null,v.d,v.b)),a.sb(8,49152,null,0,M.b,[M.a],null,null),(n()(),a.Nb(-1,0,["\u9996\u9875"])),(n()(),a.tb(10,0,null,0,3,"nz-breadcrumb-item",[],null,null,null,v.d,v.b)),a.sb(11,49152,null,0,M.b,[M.a],null,null),(n()(),a.tb(12,0,null,0,1,"a",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["UI \u6307\u4ee4"])),(n()(),a.tb(14,0,null,0,2,"nz-breadcrumb-item",[],null,null,null,v.d,v.b)),a.sb(15,49152,null,0,M.b,[M.a],null,null),(n()(),a.Nb(-1,0,["ui-awesome-marker"])),(n()(),a.tb(17,0,null,5,3,"nz-page-header-extra",[["class","ant-page-header-heading-extra"]],null,null,null,null,null)),a.sb(18,16384,null,0,L.c,[],null,null),(n()(),a.tb(19,0,null,null,1,"a",[["href","api-doc/directives/UIAwesomeMarkerDirective.html"],["target","_blank"]],null,null,null,null,null)),(n()(),a.Nb(-1,null,[" API \u6587\u6863 "])),(n()(),a.tb(21,0,null,null,2,"nz-divider",[],null,null,null,T.b,T.a)),a.Kb(512,null,C.D,C.D,[a.E]),a.sb(23,638976,null,0,N.a,[a.k,C.D],null,null),(n()(),a.tb(24,0,null,null,9,"nz-tabset",[["style","margin-top: 8px;"]],null,null,null,P.d,P.b)),a.Kb(512,null,C.D,C.D,[a.E]),a.sb(26,8110080,null,1,S.e,[C.l,a.D,C.D,a.k,a.h,[2,I.m]],{nzTabPosition:[0,"nzTabPosition"]},null),a.Lb(603979776,3,{listOfNzTabComponent:1}),(n()(),a.tb(28,0,null,null,5,"nz-tab",[["nzTitle","\u5b57\u4f53\u6837\u5f0f"]],null,null,null,P.c,P.a)),a.sb(29,704512,[[3,4]],2,S.b,[a.k,a.D],{nzTitle:[0,"nzTitle"]},null),a.Lb(603979776,4,{template:0}),a.Lb(603979776,5,{linkDirective:0}),(n()(),a.ib(0,[[4,2]],1,1,null,B)),a.sb(33,16384,null,0,S.c,[],null,null)],(function(n,l){n(l,1,0,"ui-awesome-marker \u5b57\u4f53\u56fe\u6807\u6807\u6ce8"),n(l,5,0),n(l,23,0),n(l,26,0,"left"),n(l,29,0,"\u5b57\u4f53\u6837\u5f0f")}),(function(n,l){n(l,0,0,a.Fb(l,1).nzPageHeaderFooter,a.Fb(l,1).nzGhost,a.Fb(l,1).nzPageHeaderBreadcrumb)}))}var W=a.pb("app-demo-awesome-marker",_,(function(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"app-demo-awesome-marker",[],null,null,null,V,U)),a.sb(1,114688,null,0,_,[],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),j=e("QQfA"),J=e("IP0z"),Y=e("s7LF"),Z=e("POq0"),Q=e("ZK7x"),X=e("/HVE"),$=e("v1Dh"),nn=e("66zS"),ln=e("5Izy"),en=e("yTpB"),an=e("zMNK"),tn=e("hOhj"),on=e("r19J"),un=e("anqq"),rn=e("IYs4"),bn=e("EcpC"),sn=e("GaVp"),cn=e("/L1H"),mn=e("phDe"),pn=e("Rgb0"),dn=e("kS4m"),fn=e("mW00"),Dn=e("jTf7"),hn=e("WPSl"),gn=e("YdS3"),kn=e("wQFA"),yn=e("px0D"),zn=e("3ZFI"),xn=e("CYS+"),Ln=e("oBm0"),wn=e("A7zk"),Cn=e("YRt3"),vn=e("lAiz"),Mn=e("ce6n"),Tn=e("iC8E"),Nn=e("7QIX"),Pn=e("tYkK"),Sn=e("wf2+"),In=e("eCGT"),On=e("nHXS"),En=e("fb/r"),Gn=e("zTFG"),Rn=e("JK0T"),Hn=e("JXeA"),Fn=e("NFMk"),Kn=e("0CZq"),qn=e("vZsH"),An=e("W4B1"),_n=e("SHEi"),Un=e("FPpa"),Bn=e("RVNi"),Vn=e("NDed"),Wn=e("5A4h"),jn=e("N2O2"),Jn=e("ozKM"),Yn=e("OvZZ"),Zn=e("z+yo"),Qn=e("DQmg"),Xn=e("haRT"),$n=e("XFzh"),nl=e("p+Sl"),ll=e("HhpN"),el=e("SN7N"),al=e("fwnu"),tl=e("VbP7"),ol=e("gaRz"),ul=e("e15G"),il=e("ZcxY"),rl=e("PCNd"),bl=function n(){_classCallCheck(this,n)};e.d(l,"DemoUIDirectiveModuleNgFactory",(function(){return sl}));var sl=a.qb(t,[],(function(n){return a.Cb([a.Db(512,a.j,a.bb,[[8,[o.a,o.b,u.a,i.a,r.a,b.a,s.a,c.a,m.a,p.a,H,W]],[3,a.j],a.w]),a.Db(4608,w.l,w.k,[a.t,[2,w.F]]),a.Db(5120,C.w,C.I,[w.c,[3,C.w]]),a.Db(4608,j.d,j.d,[j.k,j.f,a.j,j.i,j.g,a.q,a.y,w.c,J.b,[2,w.f]]),a.Db(5120,j.l,j.m,[j.d]),a.Db(4608,Y.j,Y.j,[]),a.Db(4608,Z.c,Z.c,[]),a.Db(1073742336,w.b,w.b,[]),a.Db(1073742336,f.u,f.u,[]),a.Db(1073742336,Q.a,Q.a,[]),a.Db(1073742336,X.b,X.b,[]),a.Db(1073742336,$.a,$.a,[]),a.Db(1073742336,nn.c,nn.c,[]),a.Db(1073742336,C.j,C.j,[]),a.Db(1073742336,ln.b,ln.b,[]),a.Db(1073742336,en.a,en.a,[]),a.Db(1073742336,J.a,J.a,[]),a.Db(1073742336,an.e,an.e,[]),a.Db(1073742336,tn.b,tn.b,[]),a.Db(1073742336,j.h,j.h,[]),a.Db(1073742336,Y.i,Y.i,[]),a.Db(1073742336,Y.d,Y.d,[]),a.Db(1073742336,C.t,C.t,[]),a.Db(1073742336,on.a,on.a,[]),a.Db(1073742336,un.a,un.a,[]),a.Db(1073742336,rn.a,rn.a,[]),a.Db(1073742336,Z.d,Z.d,[]),a.Db(1073742336,bn.a,bn.a,[]),a.Db(1073742336,C.F,C.F,[]),a.Db(1073742336,sn.c,sn.c,[]),a.Db(1073742336,C.u,C.u,[]),a.Db(1073742336,cn.d,cn.d,[]),a.Db(1073742336,mn.h,mn.h,[]),a.Db(1073742336,mn.a,mn.a,[]),a.Db(1073742336,mn.e,mn.e,[]),a.Db(1073742336,M.c,M.c,[]),a.Db(1073742336,pn.b,pn.b,[]),a.Db(1073742336,dn.d,dn.d,[]),a.Db(1073742336,fn.a,fn.a,[]),a.Db(1073742336,Dn.a,Dn.a,[]),a.Db(1073742336,hn.a,hn.a,[]),a.Db(1073742336,gn.a,gn.a,[]),a.Db(1073742336,kn.a,kn.a,[]),a.Db(1073742336,C.q,C.q,[]),a.Db(1073742336,yn.b,yn.b,[]),a.Db(1073742336,zn.a,zn.a,[]),a.Db(1073742336,xn.a,xn.a,[]),a.Db(1073742336,Ln.a,Ln.a,[]),a.Db(1073742336,wn.a,wn.a,[]),a.Db(1073742336,Cn.a,Cn.a,[]),a.Db(1073742336,vn.b,vn.b,[]),a.Db(1073742336,vn.a,vn.a,[]),a.Db(1073742336,Mn.a,Mn.a,[]),a.Db(1073742336,N.b,N.b,[]),a.Db(1073742336,Tn.c,Tn.c,[]),a.Db(1073742336,Tn.b,Tn.b,[]),a.Db(1073742336,Nn.a,Nn.a,[]),a.Db(1073742336,Pn.b,Pn.b,[]),a.Db(1073742336,Sn.a,Sn.a,[]),a.Db(1073742336,In.a,In.a,[]),a.Db(1073742336,On.e,On.e,[]),a.Db(1073742336,En.a,En.a,[]),a.Db(1073742336,Gn.a,Gn.a,[]),a.Db(1073742336,Rn.a,Rn.a,[]),a.Db(1073742336,Hn.h,Hn.h,[]),a.Db(1073742336,Hn.f,Hn.f,[]),a.Db(1073742336,C.v,C.v,[]),a.Db(1073742336,Fn.f,Fn.f,[]),a.Db(1073742336,Fn.d,Fn.d,[]),a.Db(1073742336,Fn.e,Fn.e,[]),a.Db(1073742336,Kn.f,Kn.f,[]),a.Db(1073742336,Kn.e,Kn.e,[]),a.Db(1073742336,L.d,L.d,[]),a.Db(1073742336,qn.a,qn.a,[]),a.Db(1073742336,An.b,An.b,[]),a.Db(1073742336,_n.b,_n.b,[]),a.Db(1073742336,Un.b,Un.b,[]),a.Db(1073742336,Bn.a,Bn.a,[]),a.Db(1073742336,Vn.a,Vn.a,[]),a.Db(1073742336,Wn.a,Wn.a,[]),a.Db(1073742336,jn.a,jn.a,[]),a.Db(1073742336,Jn.a,Jn.a,[]),a.Db(1073742336,Yn.a,Yn.a,[]),a.Db(1073742336,Zn.a,Zn.a,[]),a.Db(1073742336,Qn.a,Qn.a,[]),a.Db(1073742336,Xn.a,Xn.a,[]),a.Db(1073742336,S.g,S.g,[]),a.Db(1073742336,$n.a,$n.a,[]),a.Db(1073742336,nl.a,nl.a,[]),a.Db(1073742336,C.A,C.A,[]),a.Db(1073742336,ll.a,ll.a,[]),a.Db(1073742336,el.a,el.a,[]),a.Db(1073742336,al.a,al.a,[]),a.Db(1073742336,C.n,C.n,[]),a.Db(1073742336,tl.a,tl.a,[]),a.Db(1073742336,ol.a,ol.a,[]),a.Db(1073742336,ul.a,ul.a,[]),a.Db(1073742336,il.c,il.c,[]),a.Db(1073742336,rl.a,rl.a,[]),a.Db(1073742336,I.q,I.q,[[2,I.v],[2,I.m]]),a.Db(1073742336,bl,bl,[]),a.Db(1073742336,t,t,[]),a.Db(256,nn.a,Q.b,[]),a.Db(256,Hn.b,{nzAnimate:!0,nzDuration:3e3,nzMaxStack:7,nzPauseOnHover:!0,nzTop:24},[]),a.Db(256,Kn.b,{nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),a.Db(1024,I.k,(function(){return[[{path:"",redirectTo:"ui-simple-marker",pathMatch:"full"},{path:"ui-simple-marker",component:O},{path:"ui-awesome-marker",component:_}]]}),[])])}))},V6EW:function(n,l,e){"use strict";e.r(l),l.default="import { Component } from '@angular/core';\nimport { getGridLngLats } from '../../../../shared/utils/get-grid';\ndeclare const require: any; // DEMO IGNORE\n\n@Component({\n  selector: 'demo-awesome-marker-text-style',\n  templateUrl: './demo-awesome-marker-text-style.component.html',\n  styleUrls: ['./demo-awesome-marker-text-style.component.scss'],\n})\nexport class DemoAwesomeMarkerTextStyleComponent {\n  html = require('!!html-loader!./demo-awesome-marker-text-style.component.html'); // DEMO IGNORE\n  component = require('!!raw-loader!./demo-awesome-marker-text-style.component.ts').default; // DEMO IGNORE\n  options: any[] = [];\n\n  onMapReady(map: AMap.Map) {\n    const colors = [\n      '#1f77b4',\n      '#aec7e8',\n      '#ff7f0e',\n      '#ffbb78',\n      '#2ca02c',\n      '#98df8a',\n      '#d62728',\n      '#ff9896',\n      '#9467bd',\n      '#c5b0d5',\n      '#8c564b',\n      '#c49c94',\n      '#e377c2',\n      '#f7b6d2',\n      '#7f7f7f',\n    ];\n    const awIcons = [\n      'address-book',\n      'address-book-o',\n      'address-card',\n      'address-card-o',\n      'adjust',\n      'american-sign-language-interpreting',\n      'anchor',\n      'archive',\n      'area-chart',\n      'arrows',\n      'arrows-h',\n      'arrows-v',\n      'asl-interpreting',\n      'assistive-listening-systems',\n      'asterisk',\n    ];\n    const lngLats = getGridLngLats(map, awIcons.length, 5);\n    this.options = [];\n    for (let i = 0, len = lngLats.length; i < len; i++) {\n      this.options.push({\n        // \u8bbe\u7f6e awesome Icon\n        awesomeIcon: awIcons[i],\n        iconLabel: {\n          style: {\n            color: colors[i], // \u5b57\u4f53\u989c\u8272\n            fontSize: 10 + i + 'px', // \u5b57\u53f7\n          },\n        },\n        // \u56fe\u6807\n        iconStyle: 'black',\n        position: lngLats[i],\n      });\n    }\n  }\n}\n"},iVf6:function(n,l){n.exports='\x3c!-- DEMO START --\x3e\n<ngx-amap class="demo-map" [zoom]="4" (naReady)="onMapReady($event)">\n  <ui-awesome-marker *ngFor="let option of options"\n    [awesomeIcon]="option.awesomeIcon"\n    [iconLabel]="option.iconLabel"\n    [iconStyle]="option.iconStyle"\n    [position]="option.position"\n  ></ui-awesome-marker>\n</ngx-amap>\n\x3c!-- DEMO END --\x3e\n\n<code-block\n  [html]="html"\n  [component]="component"\n></code-block>'},xsBF:function(n,l,e){"use strict";e.r(l),l.default="import { Component, OnInit, ViewEncapsulation } from '@angular/core';\nimport { getGridLngLats } from '../../../../shared/utils/get-grid';\ndeclare const require: any; // DEMO IGNORE\n\n@Component({\n  selector: 'demo-simple-marker-custom-text',\n  templateUrl: './demo-simple-marker-custom-text.component.html',\n  encapsulation: ViewEncapsulation.None,\n  styleUrls: ['./demo-simple-marker-custom-text.component.scss'],\n})\nexport class DemoSimpleMarkerCustomTextComponent implements OnInit {\n  html = require('!!html-loader!./demo-simple-marker-custom-text.component.html'); // DEMO IGNORE\n  component = require('!!raw-loader!./demo-simple-marker-custom-text.component.ts').default; // DEMO IGNORE\n  scss = require('!!raw-loader!./demo-simple-marker-custom-text.component.scss').default; // DEMO IGNORE\n  p1: AMap.LngLat;\n  p2: AMap.LngLat;\n  p3: AMap.LngLat;\n  p4: AMap.LngLat;\n\n  p3Label = {\n    // \u666e\u901a\u6587\u672c\n    innerHTML: '\u70ed',\n    style: {\n      color: '#fff',\n      fontSize: '120%',\n      marginTop: '2px',\n    },\n  };\n\n  p4Label = {\n    // HTML\n    innerHTML:\n      '<div class=\"my-blue-point\"><img src=\"https://webapi.amap.com/theme/v1.3/hotNew.png\"/></div>',\n  };\n\n  constructor() {}\n\n  ngOnInit() {}\n\n  onMapReady(map: AMap.Map) {\n    const lngLats = getGridLngLats(map, 4, 4);\n    this.p1 = lngLats[0];\n    this.p2 = lngLats[1];\n    this.p3 = lngLats[2];\n    this.p4 = lngLats[3];\n  }\n}\n"}}]);