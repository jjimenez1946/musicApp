(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{HmXp:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),i=function(){return function(){}}(),e=u("pMnS"),r=u("Xqnl"),o=u("2MiI"),s=u("oBZk"),c=u("ZZ/e"),b=u("ZYCi"),a=u("Ip0R"),d=u("mrSG"),f=u("XxjJ"),p=function(){function l(l,n,u){this.activatedRoute=l,this.musicServiceService=n,this.loadingController=u,this.myId=null}return l.prototype.ngOnInit=function(){var l=this;this.presentLoading(),this.myId=this.activatedRoute.snapshot.paramMap.get("id"),this.musicServiceService.getAccesToken().subscribe((function(n){l.musicServiceService.getAlbum(l.myId,n.access_token).subscribe((function(n){l.result=n,l.tracks=n.tracks.items,console.log(l.result),l.result&&l.loaderDismiss()}))}))},l.prototype.presentLoading=function(){return d.b(this,void 0,void 0,(function(){var l;return d.e(this,(function(n){switch(n.label){case 0:return l=this,[4,this.loadingController.create({showBackdrop:!1,spinner:"dots",cssClass:"loader-global"})];case 1:return l.loader=n.sent(),[4,this.loader.present()];case 2:return n.sent(),[2]}}))}))},l.prototype.loaderDismiss=function(){return d.b(this,void 0,void 0,(function(){var l;return d.e(this,(function(n){switch(n.label){case 0:return l=this,[4,this.loader.dismiss()];case 1:return l.loader=n.sent(),[2]}}))}))},l}(),m=t.rb({encapsulation:0,styles:[[""]],data:{}});function h(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,1,"app-header",[],null,null,null,r.b,r.a)),t.sb(1,114688,null,0,o.a,[],{title:[0,"title"]},null)],(function(l,n){l(n,1,0,n.component.result.name)}),null)}function k(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,8,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Fb(l,2).onClick()&&i),"click"===n&&(i=!1!==t.Fb(l,3).onClick(u)&&i),i}),s.K,s.n)),t.sb(1,49152,null,0,c.F,[t.h,t.k,t.z],null,null),t.sb(2,16384,null,0,b.n,[b.m,b.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.sb(3,737280,null,0,c.Jb,[a.g,c.Gb,t.k,b.m,[2,b.n]],null,null),(l()(),t.tb(4,0,null,0,1,"ion-icon",[["name","arrow-forward"],["slot","end"]],null,null,null,s.I,s.l)),t.sb(5,49152,null,0,c.A,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.tb(6,0,null,0,2,"ion-label",[],null,null,null,s.L,s.o)),t.sb(7,49152,null,0,c.L,[t.h,t.k,t.z],null,null),(l()(),t.Jb(8,0,["",""]))],(function(l,n){l(n,2,0,t.xb(1,"/song/",n.context.$implicit.id,"")),l(n,3,0),l(n,5,0,"arrow-forward")}),(function(l,n){l(n,8,0,n.context.$implicit.name)}))}function g(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,16,"ion-content",[],null,null,null,s.G,s.j)),t.sb(1,49152,null,0,c.s,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,10,"ion-card",[],null,null,null,s.F,s.e)),t.sb(3,49152,null,0,c.k,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,3,"ion-card-content",[],null,null,null,s.B,s.f)),t.sb(5,49152,null,0,c.l,[t.h,t.k,t.z],null,null),(l()(),t.tb(6,0,null,0,1,"ion-img",[],null,null,null,s.J,s.m)),t.sb(7,49152,null,0,c.B,[t.h,t.k,t.z],{src:[0,"src"]},null),(l()(),t.tb(8,0,null,0,4,"ion-card-header",[],null,null,null,s.C,s.g)),t.sb(9,49152,null,0,c.m,[t.h,t.k,t.z],null,null),(l()(),t.tb(10,0,null,0,2,"ion-card-title",[],null,null,null,s.E,s.i)),t.sb(11,49152,null,0,c.o,[t.h,t.k,t.z],null,null),(l()(),t.Jb(12,0,["",""])),(l()(),t.tb(13,0,null,0,3,"ion-list",[],null,null,null,s.M,s.p)),t.sb(14,49152,null,0,c.M,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,k)),t.sb(16,278528,null,0,a.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,7,0,t.xb(1,"",u.result.images[1].url,"")),l(n,16,0,u.tracks)}),(function(l,n){l(n,12,0,n.component.result.name)}))}function v(l){return t.Kb(0,[(l()(),t.ib(16777216,null,null,1,null,h)),t.sb(1,16384,null,0,a.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,g)),t.sb(3,16384,null,0,a.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,u.result),l(n,3,0,u.result)}),null)}function D(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,1,"app-albums",[],null,null,null,v,m)),t.sb(1,114688,null,0,p,[b.a,f.a,c.Eb],null,null)],(function(l,n){l(n,1,0)}),null)}var I=t.pb("app-albums",p,D,{},{},[]),w=u("gIcY"),z=function(){return function(){}}(),C=u("j1ZV");u.d(n,"AlbumsPageModuleNgFactory",(function(){return F}));var F=t.qb(i,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[e.a,I]],[3,t.j],t.x]),t.Db(4608,a.k,a.j,[t.u,[2,a.q]]),t.Db(4608,w.d,w.d,[]),t.Db(4608,c.a,c.a,[t.z,t.g]),t.Db(4608,c.Fb,c.Fb,[c.a,t.j,t.q]),t.Db(4608,c.Ib,c.Ib,[c.a,t.j,t.q]),t.Db(1073742336,a.b,a.b,[]),t.Db(1073742336,w.c,w.c,[]),t.Db(1073742336,w.a,w.a,[]),t.Db(1073742336,c.Cb,c.Cb,[]),t.Db(1073742336,b.o,b.o,[[2,b.t],[2,b.m]]),t.Db(1073742336,z,z,[]),t.Db(1073742336,C.a,C.a,[]),t.Db(1073742336,i,i,[]),t.Db(1024,b.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);