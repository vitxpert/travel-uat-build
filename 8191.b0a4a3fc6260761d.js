"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8191],{8191:(J,f,r)=>{r.r(f),r.d(f,{WelcomeFormPagePageModule:()=>A});var m=r(6895),s=r(4006),i=r(8058),u=r(3317),b=r(655),v=r(5838),e=r(8256),P=r(1270),x=r(1692),T=r(3646);function C(t,g){if(1&t&&(e.ynx(0),e.TgZ(1,"ion-select-option",13),e._uU(2),e.qZA(),e.BQk()),2&t){const o=g.$implicit;e.xp6(1),e.Q6J("value",o.code),e.xp6(1),e.Oqu(o.name)}}function M(t,g){if(1&t&&(e.TgZ(0,"div",15)(1,"span"),e._uU(2),e.qZA()()),2&t){const o=e.oxw().$implicit;e.xp6(2),e.Oqu(o.message)}}function O(t,g){if(1&t&&(e.ynx(0),e.YNc(1,M,3,1,"div",14),e.BQk()),2&t){const o=g.$implicit,a=e.oxw();e.xp6(1),e.Q6J("ngIf",a.form2.get("language").hasError(o.type)&&(a.form2.get("language").dirty||a.form2.get("language").touched))}}function F(t,g){if(1&t&&(e.ynx(0),e.TgZ(1,"ion-item")(2,"ion-label"),e._uU(3),e.qZA(),e._UZ(4,"ion-radio",13),e.qZA(),e.BQk()),2&t){const o=g.$implicit;e.xp6(3),e.Oqu(o.name),e.xp6(1),e.Q6J("value",o.code)}}function Z(t,g){if(1&t){const o=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Select Language"),e.qZA(),e.TgZ(4,"ion-buttons",16)(5,"ion-button",17),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.setOpen(!1))}),e._uU(6,"Close"),e.qZA()()()(),e.TgZ(7,"ion-content",18)(8,"ion-radio-group",19),e.NdJ("ionChange",function(n){e.CHM(o);const l=e.oxw();return e.KtG(l.checkboxChange(n))})("ngModelChange",function(n){e.CHM(o);const l=e.oxw();return e.KtG(l.selectedLanguage=n)}),e.YNc(9,F,5,2,"ng-container",8),e.qZA(),e.TgZ(10,"ion-button",20),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.eventLangSelected())}),e._uU(11,"Submit"),e.qZA()()}if(2&t){const o=e.oxw();e.xp6(8),e.Q6J("ngModel",o.selectedLanguage),e.xp6(1),e.Q6J("ngForOf",o.popupLang)}}const L=[{path:"",component:(()=>{class t{constructor(o,a,n,l,c){this.formApiService=o,this.router=a,this.globalService=n,this.location=l,this.activateRoute=c,this.languages=[],this.allLanguages=[],this.popupLang=[],this.buttonText="Submit",this.bannerImage="",this.headerText="",this.footerText="",this.formName="Loading...",this.selectedLanguage="en",this.isModalOpen=!1,this.form_status="",this.total_steps=1,this.step_names={},this.buttonBgColor="#3880ff",this.bgColor="#eeeeee",this.group_form={},this.slides=[],this.validationMessages={language:[{type:"required",message:"Language is required!"}]},this.id=this.activateRoute.snapshot.params.id}ngOnInit(){this.form2=new s.cw({language:new s.NI("",[s.kI.required])}),this.loadLanguages()}setOpen(o){this.isModalOpen=o}loadLanguages(){this.formApiService.getLanguages().subscribe(o=>{this.allLanguages=o.data;const a=localStorage.getItem("selected_language_"+this.id)||"";this.form2.get("language").setValue(a),this.getSingleForm()})}getSingleForm(o=1){return(0,b.mG)(this,void 0,void 0,function*(){yield v.A.getLanguageCode(),this.formApiService.getSingleForm(this.id,"1","en").subscribe(n=>{var l,c,d,p;if(n.success){this.globalService.agentLogoEvent.next(null===(c=null===(l=n.data)||void 0===l?void 0:l.group_id)||void 0===c?void 0:c.group_logo),this.group_form=n.data.group_form,this.languages=null===(d=n.data.group_form)||void 0===d?void 0:d.languages,console.log(this.languages),this.buttonText=n.data.group_form.submit_button_label,this.bannerImage=n.data.group_form.banner,this.headerText=n.data.group_form.header.en,this.footerText=n.data.group_form.footer.en,this.formName=n.data.group_form.form_name,this.formName=n.data.group_form.form_name,this.buttonBgColor=n.data.group_form.form_submit_button_color,this.bgColor=n.data.group_form.background_color,document.documentElement.style.setProperty("--button-bgcolor",this.buttonBgColor),document.documentElement.style.setProperty("--bgcolor",this.bgColor),this.step_names=Object.keys(null===(p=n?.data)||void 0===p?void 0:p.step_names),this.languages.forEach(W=>{this.allLanguages.forEach(_=>{_.code===W&&this.popupLang.push(_)})}),this.form_status=n.data.form_status;const h=localStorage.getItem("selected_language_"+this.id)||"";""==h?this.setOpen(!0):(this.headerText=n.data.group_form.header[h],this.footerText=n.data.group_form.footer[h])}else"expired"==n.message||this.globalService.showError(n.message)})})}submitPost(){this.form2.valid?(this.selectedLanguage=this.form2.get("language").value,this.router.navigate(["/app/home/custom-form/fill-form/"+this.id+"/"+this.step_names[0]+"/"+this.selectedLanguage])):this.form2.markAllAsTouched()}back(){this.location.back()}checkboxChange(o){const{value:n}=o.detail;this.selectedLanguage=n}eventLangSelected(){this.form2.get("language").setValue(this.selectedLanguage);const o=localStorage.getItem("selected_language_"+this.id)||"";("started"==this.form_status||""==o)&&localStorage.setItem("selected_language_"+this.id,this.selectedLanguage),this.headerText=this.group_form.header[this.selectedLanguage],this.footerText=this.group_form.footer[this.selectedLanguage],this.setOpen(!1)}changeLanguage(o){var a;null!==(a=this.group_form)&&void 0!==a&&a.header&&(localStorage.setItem("selected_language_"+this.id,o.target.value),this.headerText=this.group_form.header[o.target.value],this.footerText=this.group_form.footer[o.target.value])}getButtonColor(){return this.buttonBgColor}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(P.$),e.Y36(u.F0),e.Y36(x.U),e.Y36(m.Ye),e.Y36(u.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-welcome-form-page"]],decls:33,vars:8,consts:[[1,"box-form"],["size-xs","12","size-md","3"],["mode","android","value","trip_details","scrollable",""],["value","trip_details"],["size-xs","12","size-md","9"],[3,"formGroup","ngSubmit"],[1,"form-group"],["formControlName","language",3,"ionChange"],[4,"ngFor","ngForOf"],[2,"width","100%","margin-top","10px","margin-bottom","10px",3,"src"],[3,"innerHTML"],["type","submit","ion-button","","size","full",1,"primary-btn"],["id","datemodal",3,"isOpen"],[3,"value"],["class","error-message",4,"ngIf"],[1,"error-message"],["slot","end"],[3,"click"],[1,"ion-padding","my-popup"],["value","end",3,"ngModel","ionChange","ngModelChange"],["ion-button","","size","full",1,"primary-btn",2,"margin-top","10px",3,"click"]],template:function(o,a){1&o&&(e.TgZ(0,"ion-content")(1,"div",0),e._UZ(2,"app-header"),e.TgZ(3,"ion-row")(4,"ion-col",1)(5,"ion-card")(6,"ion-card-content")(7,"ion-segment",2)(8,"ion-segment-button",3)(9,"ion-label"),e._uU(10," Trip Details"),e.qZA()()()()()(),e.TgZ(11,"ion-col",4)(12,"ion-card")(13,"ion-card-content")(14,"h1"),e._uU(15),e.qZA(),e._UZ(16,"hr"),e.TgZ(17,"form",5),e.NdJ("ngSubmit",function(){return a.submitPost()}),e.TgZ(18,"label"),e._uU(19,"Language"),e.qZA(),e.TgZ(20,"div",6)(21,"ion-select",7),e.NdJ("ionChange",function(l){return a.changeLanguage(l)}),e.YNc(22,C,3,2,"ng-container",8),e.qZA(),e.YNc(23,O,2,1,"ng-container",8),e.qZA(),e.TgZ(24,"ion-card")(25,"ion-card-content"),e._UZ(26,"img",9)(27,"div",10),e.qZA()(),e.TgZ(28,"div",6)(29,"ion-button",11),e._uU(30),e.qZA()()()()()()()()(),e.TgZ(31,"ion-modal",12),e.YNc(32,Z,12,2,"ng-template"),e.qZA()),2&o&&(e.xp6(15),e.Oqu(a.formName),e.xp6(2),e.Q6J("formGroup",a.form2),e.xp6(5),e.Q6J("ngForOf",a.popupLang),e.xp6(1),e.Q6J("ngForOf",a.validationMessages.language),e.xp6(3),e.Q6J("src",a.bannerImage,e.LSH),e.xp6(1),e.Q6J("innerHTML",a.headerText,e.oJD),e.xp6(3),e.Oqu(a.buttonText),e.xp6(1),e.Q6J("isOpen",a.isModalOpen))},dependencies:[m.sg,m.O5,s._Y,s.JJ,s.JL,s.On,i.YG,i.Sm,i.PM,i.FN,i.wI,i.W2,i.Gu,i.Ie,i.Q$,i.B7,i.se,i.Nd,i.cJ,i.GO,i.t9,i.n0,i.wd,i.sr,i.ki,i.U5,i.QI,s.sg,s.u,T.G],styles:["ion-input[_ngcontent-%COMP%], ion-select[_ngcontent-%COMP%], ion-textarea[_ngcontent-%COMP%]{border:0px gray solid;background-color:#ddd;border-radius:10px;margin-top:5px}ion-card[_ngcontent-%COMP%]{margin:10px 0}.my-popup[_ngcontent-%COMP%]{--background: #fff !important}.box-form[_ngcontent-%COMP%]{overflow:scroll;background:var(--bgcolor);padding:10px;height:100%}ion-accordion-group[_ngcontent-%COMP%], ion-accordion[_ngcontent-%COMP%]{border-radius:10px;border:.3px solid}.content-body[_ngcontent-%COMP%]{padding:20px;font-size:18px}ion-segment[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;text-align:left;height:auto;width:auto}ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{float:left;clear:left;text-align:left;width:100%}ion-segment-button[_ngcontent-%COMP%]{--indicator-color: var(--button-bgcolor)}ion-segment-button.md[_ngcontent-%COMP%]{--color: #000;--color-checked: var(--button-bgcolor);--indicator-height: 2px}ion-segment-button.ios[_ngcontent-%COMP%]{--color: var(--button-bgcolor);--color-checked: #fff;--border-radius: 20px}"]}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(L),u.Bz]}),t})();var S=r(4546);let A=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.ez,s.u5,i.Pc,y,s.UX,S.O]}),t})()}}]);