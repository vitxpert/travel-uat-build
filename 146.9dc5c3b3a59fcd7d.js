"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[146],{146:(T,c,a)=>{a.r(c),a.d(c,{ViewExhibitorPageModule:()=>w});var u=a(6895),d=a(4006),r=a(8058),s=a(3317),t=a(8256),g=a(5146),h=a(1692),b=a(3646);function p(i,l){if(1&i){const o=t.EpF();t.TgZ(0,"ion-button",14),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.openLink(null==n.data?null:n.data.website))}),t._uU(1,"Link"),t.qZA()}}function f(i,l){if(1&i&&(t.TgZ(0,"a",15)(1,"ion-button",16),t._uU(2,"Call"),t.qZA()()),2&i){const o=t.oxw();t.MGl("href","tel:",o.data.contact,"",t.LSH)}}const v=[{path:"",component:(()=>{class i{constructor(o,e,n,Z,E,P){this.location=o,this.navCtrl=e,this.route=n,this.apiService=Z,this.globalService=E,this.router=P,this.data={},this.route.queryParams.subscribe(k=>{this.router.getCurrentNavigation().extras.state&&(this.data=this.router.getCurrentNavigation().extras.state.viewexhibitor,console.log(this.data))})}ngOnInit(){}back(){this.location.back()}openLink(o){window.open(o,"_blank")}showInterest(o){var e=localStorage.getItem("cc_selected_group_id");this.apiService.interestExhibitor(e,o).subscribe(n=>{n.status?this.globalService.showMessage("Request sent."):this.globalService.showError(n?.error)})}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(u.Ye),t.Y36(r.SH),t.Y36(s.gz),t.Y36(g.s),t.Y36(h.U),t.Y36(s.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-view-exhibitor"]],decls:28,vars:7,consts:[["collapse","fade"],["slot","start",3,"click"],["name","chevron-back-outline",1,"back-arrow"],[2,"padding","10px"],[2,"text-align","center","width","100%"],[2,"display","inline-block"],[2,"border","1px solid #888",3,"src"],[2,"font-size","18px","font-weight","bold","margin-bottom","5px"],[2,"margin-bottom","5px"],[2,"text-align","center"],["fill","outline",3,"click",4,"ngIf"],[3,"href",4,"ngIf"],[2,"background","#eee","padding","20px"],["shape","round","size","default",3,"click"],["fill","outline",3,"click"],[3,"href"],["fill","outline"]],template:function(o,e){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t.NdJ("click",function(){return e.back()}),t._UZ(3,"ion-icon",2),t.qZA(),t._UZ(4,"app-header"),t.qZA()(),t.TgZ(5,"ion-content")(6,"ion-card",3)(7,"div",4)(8,"ion-avatar",5),t._UZ(9,"img",6),t.qZA(),t.TgZ(10,"div",7),t._uU(11),t.qZA(),t.TgZ(12,"div",8),t._uU(13),t.qZA(),t.TgZ(14,"div"),t._uU(15),t.qZA()(),t.TgZ(16,"div",9),t.YNc(17,p,2,0,"ion-button",10),t.YNc(18,f,3,1,"a",11),t.qZA(),t._UZ(19,"hr"),t.TgZ(20,"div")(21,"h5"),t._uU(22,"About"),t.qZA()(),t.TgZ(23,"p",12),t._uU(24),t.qZA(),t.TgZ(25,"div",9)(26,"ion-button",13),t.NdJ("click",function(){return e.showInterest(null==e.data?null:e.data.id)}),t._uU(27,"Show Interest"),t.qZA()()()()),2&o&&(t.xp6(9),t.Q6J("src",null==e.data?null:e.data.logo,t.LSH),t.xp6(2),t.Oqu(e.data.name),t.xp6(2),t.Oqu(e.data.category),t.xp6(2),t.Oqu(e.data.address),t.xp6(2),t.Q6J("ngIf",null==e.data?null:e.data.website),t.xp6(1),t.Q6J("ngIf",null==e.data?null:e.data.contact),t.xp6(6),t.Oqu(e.data.description))},dependencies:[u.O5,r.BJ,r.YG,r.Sm,r.PM,r.W2,r.Gu,r.gu,r.sr,b.G]}),i})()}];let m=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[s.Bz.forChild(v),s.Bz]}),i})();var x=a(4546);let w=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.ez,d.u5,r.Pc,m,x.O]}),i})()}}]);