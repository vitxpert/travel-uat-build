"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3808],{3808:(G,E,c)=>{c.r(E),c.d(E,{ExploreDestinationPageModule:()=>B});var p=c(6895),u=c(4006),s=c(8058),y=c(3317),t=c(8256),d=c(1692),T=c(5146),C=c(3646);let F=(()=>{class i{constructor(e){this.globalService=e,this.img_url=""}ngOnInit(){var e;this.globalService.exploreAboutEvent.subscribe(n=>{var a;null!==n&&(this.img_url=null===(a=this.locationData)||void 0===a?void 0:a.img_url,console.log(this.img_url))}),this.img_url=null===(e=this.locationData)||void 0===e?void 0:e.img_url,console.log(this.img_url)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(d.U))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-explore-about"]],inputs:{locationData:"locationData"},decls:13,vars:3,consts:[[3,"src"],[2,"font-size","25px"],[3,"innerHTML"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-card")(1,"ion-card-content"),t._UZ(2,"img",0),t.qZA()(),t.TgZ(3,"ion-card")(4,"ion-card-content")(5,"h2",1),t._uU(6,"Shopping"),t.qZA(),t._UZ(7,"p",2),t.qZA()(),t.TgZ(8,"ion-card")(9,"ion-card-content")(10,"h2",1),t._uU(11,"Food"),t.qZA(),t._UZ(12,"p",2),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("src",null==n.locationData?null:n.locationData.img_url,t.LSH),t.xp6(5),t.Q6J("innerHTML",null==n.locationData?null:n.locationData.shopping,t.oJD),t.xp6(5),t.Q6J("innerHTML",null==n.locationData?null:n.locationData.food,t.oJD))},dependencies:[s.PM,s.FN]}),i})();var Z=c(655),h=c(2340);function A(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"ion-item",4)(1,"ion-avatar",5),t._UZ(2,"img",0),t.qZA(),t.TgZ(3,"div")(4,"ion-label"),t._uU(5),t.qZA(),t.TgZ(6,"ion-label"),t._uU(7),t.qZA()(),t.TgZ(8,"div",6)(9,"ion-icon",7),t.NdJ("click",function(){const o=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.openLocation(o))}),t.qZA()()()}if(2&i){const e=l.$implicit;t.xp6(2),t.Q6J("src",null==e?null:e.img_url,t.LSH),t.xp6(3),t.Oqu(null==e?null:e.place_name),t.xp6(2),t.Oqu(null==e?null:e.address)}}let P=(()=>{class i{constructor(e,n){this.globalService=e,this.alertCtrl=n,this.eatDataTmp=[],this.img_url="",this.places=[],this.newplaces=[]}ngOnInit(){this.eatDataTmp=this.eatData,this.globalService.exploreEatEvent.subscribe(e=>{var n,a,o,r,g,m,_,x,D,v,f,b;null!==e&&(this.eatDataTmp=e?.eatData,this.filterPlacesData(this.eatDataTmp),this.eatData=e?.eatData,this.eatDataFilter=e?.eatDataFilter,this.img_url="https://maps.googleapis.com/maps/api/staticmap?center="+(null===(o=null===(a=null===(n=this.eatDataTmp[0])||void 0===n?void 0:n.data)||void 0===a?void 0:a.places[0])||void 0===o?void 0:o.latitude)+","+(null===(m=null===(g=null===(r=this.eatDataTmp[0])||void 0===r?void 0:r.data)||void 0===g?void 0:g.places[0])||void 0===m?void 0:m.longitude)+"&zoom=14&size=400x200&markers=color:red%7Clabel:%7C"+(null===(D=null===(x=null===(_=this.eatDataTmp[0])||void 0===_?void 0:_.data)||void 0===x?void 0:x.places[0])||void 0===D?void 0:D.latitude)+","+(null===(b=null===(f=null===(v=this.eatDataTmp[0])||void 0===v?void 0:v.data)||void 0===f?void 0:f.places[0])||void 0===b?void 0:b.longitude)+"&key="+h.N.apiKey)})}filterPlacesData(e){this.places=[],e.forEach(n=>{var a,o;null===(o=null===(a=n?.data)||void 0===a?void 0:a.places)||void 0===o||o.forEach(r=>{this.places.push(r)})}),this.newplaces=this.places.filter((n,a,o)=>a===o.findIndex(r=>r.place_name===n.place_name)),setTimeout(()=>{var n,a,o,r,g;this.img_url=null!==(n=this.newplaces[0])&&void 0!==n&&n.latitude?"https://maps.googleapis.com/maps/api/staticmap?center="+(null===(a=this.newplaces[0])||void 0===a?void 0:a.latitude)+","+(null===(o=this.newplaces[0])||void 0===o?void 0:o.longitude)+"&zoom=14&size=400x200&markers=color:red%7Clabel:%7C"+(null===(r=this.newplaces[0])||void 0===r?void 0:r.latitude)+","+(null===(g=this.newplaces[0])||void 0===g?void 0:g.longitude)+"&key="+h.N.apiKey:""},1e3)}openFilter(){return(0,Z.mG)(this,void 0,void 0,function*(){let e=[];this.eatDataFilter.forEach(a=>{e.push({name:a.name,type:"checkbox",checked:!1,label:a.name,value:a.name})}),yield(yield this.alertCtrl.create({cssClass:"",header:"Filter",message:"",mode:"ios",inputs:e,buttons:[{text:"Submit",id:"confirm-button",handler:a=>{this.eatDataTmp=[],this.eatData.forEach(o=>{a.includes(o.name)&&this.filterPlacesData([o])})}}]})).present()})}openLocation(e){return(0,Z.mG)(this,void 0,void 0,function*(){this.img_url="https://maps.googleapis.com/maps/api/staticmap?center="+e.latitude+","+e.longitude+"&zoom=14&size=400x200&markers=color:red%7Clabel:%7C"+e.latitude+","+e.longitude+"&key="+h.N.apiKey})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(d.U),t.Y36(s.Br))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-explore-eat"]],inputs:{eatData:"eatData",eatDataFilter:"eatDataFilter"},decls:9,vars:2,consts:[[3,"src"],["slot","end",3,"click"],["name","filter"],["class","item-text-wrap",4,"ngFor","ngForOf"],[1,"item-text-wrap"],["slot","start"],["slot","end"],["name","map",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-card")(1,"ion-card-content"),t._UZ(2,"img",0),t.qZA(),t.TgZ(3,"ion-item")(4,"div",1),t.NdJ("click",function(){return n.openFilter()}),t._UZ(5,"ion-icon",2),t._uU(6," Filter "),t.qZA()(),t.TgZ(7,"ion-list"),t.YNc(8,A,10,3,"ion-item",3),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("src",n.img_url,t.LSH),t.xp6(6),t.Q6J("ngForOf",n.newplaces))},dependencies:[p.sg,s.BJ,s.PM,s.FN,s.gu,s.Ie,s.Q$,s.q_],styles:[".map[_ngcontent-%COMP%]{display:inline-block;width:100%;height:200px}ion-item[_ngcontent-%COMP%]{padding-bottom:10px}"]}),i})();const M=["segment"];function J(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"ion-select-option",16),t._uU(2),t.qZA(),t.BQk()),2&i){const e=l.$implicit,n=l.index;t.xp6(1),t.Q6J("value",n),t.xp6(1),t.hij("",null==e?null:e.location," ")}}function S(i,l){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"ion-select",14),t.NdJ("ionChange",function(a){t.CHM(e);const o=t.oxw();return t.KtG(o.changeLocation(a))})("ngModelChange",function(a){t.CHM(e);const o=t.oxw();return t.KtG(o.locationID=a)}),t.YNc(2,J,3,2,"ng-container",15),t.qZA(),t.BQk()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("value",0)("ngModel",e.locationID),t.xp6(1),t.Q6J("ngForOf",e.data)}}function I(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"ion-select-option",16),t._uU(2),t.qZA(),t.BQk()),2&i){const e=l.$implicit;t.xp6(1),t.Q6J("value",e.locationID),t.xp6(1),t.hij("",null==e?null:e.location," ")}}function Q(i,l){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"ion-select",14),t.NdJ("ionChange",function(a){t.CHM(e);const o=t.oxw();return t.KtG(o.changeLocation(a))})("ngModelChange",function(a){t.CHM(e);const o=t.oxw();return t.KtG(o.locationID2=a)}),t.YNc(2,I,3,2,"ng-container",15),t.qZA(),t.BQk()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("value",e.data[0].locationID)("ngModel",e.locationID2),t.xp6(1),t.Q6J("ngForOf",e.data)}}function U(i,l){if(1&i&&(t.ynx(0),t._UZ(1,"app-explore-about",17),t.BQk()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("locationData",e.locationData)}}function k(i,l){if(1&i&&(t.ynx(0),t._UZ(1,"app-explore-eat",18),t.BQk()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("eatData",e.eatData)("eatDataFilter",e.eatDataFilter)}}const O=[{path:"",component:(()=>{class i{constructor(e,n,a){this.location=e,this.globalService=n,this.apiService=a,this.type="about",this.eatData=[],this.eatDataFilter=[],this.img_url="",this.locationID=0,this.loadInitialData(),this.loadExploreDestination()}ngOnInit(){this.globalService.groupSwitchEvent.subscribe(e=>{null!==e&&(this.loadInitialData(),this.loadExploreDestination())}),this.globalService.exploreDestinationEvent.subscribe(e=>{null!==e&&setTimeout(()=>{this.segment.value=e,this.type=e},200)})}loadInitialData(){const e=JSON.parse(localStorage.getItem("user"))||"";this.actionGroup=localStorage.getItem("cc_selected_group_id"),e.forEach((n,a)=>{n.order_id===Number(this.actionGroup)&&(this.data=e[a].resREGFinal,this.locationID2=this.data[0].locationID)})}loadExploreDestination(){const e=new FormData;e.append("booking_id",localStorage.getItem("cc_selected_group_id")),e.append("type",this.type),"about"==this.type?this.apiService.getExploreDestinationAbout(e).subscribe(n=>{this.initialize(n)}):"eat"==this.type?this.apiService.getExploreDestinationEat(e).subscribe(n=>{this.initialize(n)}):"see"==this.type?this.apiService.getExploreDestinationSee(e).subscribe(n=>{this.initialize(n)}):"buy"==this.type&&this.apiService.getExploreDestinationBuy(e).subscribe(n=>{this.initialize(n)})}initialize(e){if(this.eatData=[],this.eatDataFilter=[],this.result=e,"about"===this.type&&(this.locationData=this.result[0]),"eat"===this.type||"see"===this.type||"buy"===this.type){const n=this.result[this.data[0].locationID];for(const[a,o]of Object.entries(n)){const r=o;this.eatData.push({name:a,data:o}),r?.places.length>0&&this.eatDataFilter.push({name:a})}this.globalService.exploreEatEvent.next({eatData:this.eatData,eatDataFilter:this.eatDataFilter})}}changeSegment(e){"about"===this.type?this.locationID=0:("eat"===this.type||"see"===this.type||"buy"===this.type)&&(this.locationID2=this.data[0].locationID),this.type=e.target.value,this.loadExploreDestination()}changeLocation(e){if(this.locationData=this.result[e.target.value],"about"===this.type)this.globalService.exploreAboutEvent.next(this.locationData);else if("eat"===this.type||"see"===this.type||"buy"===this.type){this.eatDataFilter=[],this.eatData=[];const n=this.result[e.target.value];console.log(e.target.value);for(const[a,o]of Object.entries(n)){const r=o;this.eatData.push({name:a,data:o}),r?.places.length>0&&this.eatDataFilter.push({name:a})}this.globalService.exploreEatEvent.next({eatData:this.eatData,eatDataFilter:this.eatDataFilter})}}back(){this.location.back()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.Ye),t.Y36(d.U),t.Y36(T.s))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-explore-destination"]],viewQuery:function(e,n){if(1&e&&t.Gf(M,5),2&e){let a;t.iGM(a=t.CRH())&&(n.segment=a.first)}},decls:32,vars:5,consts:[["collapse","fade"],["slot","start",3,"click"],["name","chevron-back-outline",1,"back-arrow"],[3,"fullscreen"],[1,"menu-page"],[1,"notice-container"],["mode","ios","scrollable","","value","about",3,"ionChange"],["segment",""],["value","about"],["value","eat"],["value","see"],["value","buy"],[2,"margin","10px"],[4,"ngIf"],["interface","action-sheet",3,"value","ngModel","ionChange","ngModelChange"],[4,"ngFor","ngForOf"],[3,"value"],[3,"locationData"],[3,"eatData","eatDataFilter"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t.NdJ("click",function(){return n.back()}),t._UZ(3,"ion-icon",2),t.qZA(),t._UZ(4,"app-header"),t.qZA()(),t.TgZ(5,"ion-content",3)(6,"div",4)(7,"label"),t._uU(8,"Explore Destinations"),t.qZA()(),t.TgZ(9,"div",5)(10,"ion-segment",6,7),t.NdJ("ionChange",function(o){return n.changeSegment(o)}),t.TgZ(12,"ion-segment-button",8)(13,"ion-label"),t._uU(14,"About"),t.qZA()(),t.TgZ(15,"ion-segment-button",9)(16,"ion-label"),t._uU(17,"Eat"),t.qZA()(),t.TgZ(18,"ion-segment-button",10)(19,"ion-label"),t._uU(20,"See"),t.qZA()(),t.TgZ(21,"ion-segment-button",11)(22,"ion-label"),t._uU(23,"Buy"),t.qZA()()(),t.TgZ(24,"div",12),t.YNc(25,S,3,3,"ng-container",13),t.YNc(26,Q,3,3,"ng-container",13),t.qZA(),t.YNc(27,U,2,1,"ng-container",13),t.YNc(28,k,2,2,"ng-container",13),t.qZA(),t._UZ(29,"br")(30,"br")(31,"br"),t.qZA()),2&e&&(t.xp6(5),t.Q6J("fullscreen",!0),t.xp6(20),t.Q6J("ngIf","about"===n.type),t.xp6(1),t.Q6J("ngIf","about"!==n.type),t.xp6(1),t.Q6J("ngIf","about"===n.type),t.xp6(1),t.Q6J("ngIf","eat"===n.type||"see"===n.type||"buy"===n.type))},dependencies:[p.sg,p.O5,u.JJ,u.On,s.Sm,s.W2,s.Gu,s.gu,s.Q$,s.cJ,s.GO,s.t9,s.n0,s.sr,s.QI,C.G,F,P],styles:[".menu-page[_ngcontent-%COMP%]{padding:10px}.menu-page[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#000;font-size:25px}ion-select[_ngcontent-%COMP%]{border:1px solid grey;border-radius:5px;margin:8px 0;background:#fff}"]}),i})()}];let w=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[y.Bz.forChild(O),y.Bz]}),i})();var N=c(4546);let z=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.ez,u.u5,s.Pc,u.UX]}),i})(),q=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.ez,u.u5,s.Pc,u.UX]}),i})(),B=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.ez,u.u5,s.Pc,w,N.O,z,q]}),i})()}}]);