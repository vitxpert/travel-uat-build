"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5770],{5770:(b,s,a)=>{a.r(s),a.d(s,{DosDontPageModule:()=>Z});var l=a(6895),g=a(4006),i=a(8058),u=a(3317),o=a(8256),d=a(1692),p=a(3646);function D(n,e){if(1&n&&(o.ynx(0),o.TgZ(1,"li"),o._uU(2),o.qZA(),o.BQk()),2&n){const t=e.$implicit;o.xp6(2),o.hij("",t,".")}}const f=function(){return["first0"]};function m(n,e){if(1&n&&(o.TgZ(0,"ion-accordion-group",7)(1,"ion-accordion",7)(2,"ion-item",8)(3,"ion-label"),o._uU(4),o.qZA()(),o.TgZ(5,"div",9)(6,"ul"),o.YNc(7,D,3,1,"ng-container",10),o.qZA()()()()),2&n){const t=e.$implicit,r=e.index,c=o.oxw();o.Q6J("value",o.DdM(4,f)),o.xp6(1),o.Q6J("value","first"+r),o.xp6(3),o.Oqu(t.location),o.xp6(3),o.Q6J("ngForOf",c.getArrayData(null==t?null:t.dos_and_donts))}}const h=[{path:"",component:(()=>{class n{constructor(t,r){this.location=t,this.globalService=r,this.data={},this.loadInitialData()}ngOnInit(){this.globalService.groupSwitchEvent.subscribe(t=>{null!==t&&this.loadInitialData()})}loadInitialData(){const t=JSON.parse(localStorage.getItem("user"))||"";this.actionGroup=localStorage.getItem("cc_selected_group_id"),t.forEach((r,c)=>{r.order_id===Number(this.actionGroup)&&(this.data=t[c].resREGFinal,console.log(this.data))})}back(){this.location.back()}getArrayData(t){return t.split("|")}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(l.Ye),o.Y36(d.U))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-dos-dont"]],decls:14,vars:2,consts:[["collapse","fade"],["slot","start",3,"click"],["name","chevron-back-outline",1,"back-arrow"],[3,"fullscreen"],[1,"menu-page"],[2,"padding","10px"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["slot","header","color","primary"],["slot","content"],[4,"ngFor","ngForOf"]],template:function(t,r){1&t&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),o.NdJ("click",function(){return r.back()}),o._UZ(3,"ion-icon",2),o.qZA(),o._UZ(4,"app-header"),o.qZA()(),o.TgZ(5,"ion-content",3)(6,"div",4)(7,"label"),o._uU(8,"Do's and Don't"),o.qZA()(),o.TgZ(9,"div",5),o.YNc(10,m,8,5,"ion-accordion-group",6),o.qZA(),o._UZ(11,"br")(12,"br")(13,"br"),o.qZA()),2&t&&(o.xp6(5),o.Q6J("fullscreen",!0),o.xp6(5),o.Q6J("ngForOf",r.data))},dependencies:[l.sg,i.We,i.eh,i.Sm,i.W2,i.Gu,i.gu,i.Ie,i.Q$,i.sr,p.G],styles:[".menu-page[_ngcontent-%COMP%]{padding:10px}.menu-page[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#000;font-size:25px}"]}),n})()}];let v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[u.Bz.forChild(h),u.Bz]}),n})();var P=a(4546);let Z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[l.ez,g.u5,i.Pc,v,P.O]}),n})()}}]);