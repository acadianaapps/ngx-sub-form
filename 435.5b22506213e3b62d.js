"use strict";(self.webpackChunkngx_sub_form_demo=self.webpackChunkngx_sub_form_demo||[]).push([[435],{5435:(Fe,A,l)=>{l.r(A),l.d(A,{MainModule:()=>Ie});var m=l(6895),T=l(3060),D=l(8254),r=l(4006),I=l(9646),x=l(4004),F=l(3900),e=l(4650),J=l(2422),M=l(110),Z=l(455),a=l(9561),y=l(7579),h=l(6482),w=l(2134),v=l(4859),d=l(9549),u=l(4144),_=l(3035),g=l(3238),C=l(3546),f=l(3246),Q=l(3336);let L=(()=>{class t{constructor(){this.form=(0,a.Np)(this,{formType:a.dm.SUB,formControls:{firstName:new r.p4(null,[r.kI.required]),lastName:new r.p4(null,[r.kI.required])}})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-crew-member"]],features:[e._Bn((0,a.CB)(t))],decls:7,vars:3,consts:[["data-crew-member","",1,"container",3,"formGroup"],["matInput","","data-input-crew-member-first-name","","type","text","placeholder","First name","autocomplete","off",3,"formControlName"],["matInput","","data-input-crew-member-last-name","","type","text","placeholder","Last name","autocomplete","off",3,"formControlName"]],template:function(o,n){1&o&&(e.TgZ(0,"fieldset",0)(1,"legend"),e._uU(2,"Crew member form"),e.qZA(),e.TgZ(3,"mat-form-field"),e._UZ(4,"input",1),e.qZA(),e.TgZ(5,"mat-form-field"),e._UZ(6,"input",2),e.qZA()()),2&o&&(e.Q6J("formGroup",n.form.formGroup),e.xp6(4),e.Q6J("formControlName",n.form.formControlNames.firstName),e.xp6(2),e.Q6J("formControlName",n.form.formControlNames.lastName))},dependencies:[r.Fj,r.JJ,r.JL,r.sg,r.u,d.KE,u.Nt],changeDetection:0}),t})();function O(t,i){if(1&t){const o=e.EpF();e.TgZ(0,"div",3),e._UZ(1,"app-crew-member",4),e.TgZ(2,"button",5),e.NdJ("click",function(){const s=e.CHM(o).index,N=e.oxw();return e.KtG(N.removeCrewMember(s))}),e.TgZ(3,"mat-icon"),e._uU(4,"delete"),e.qZA()()()}if(2&t){const o=i.$implicit,n=e.oxw();e.Q6J("formArrayName",n.form.formControlNames.crewMembers),e.xp6(1),e.Q6J("formControl",o),e.xp6(1),e.Q6J("disabled",n.form.formGroup.disabled)}}let S=(()=>{class t{constructor(){this.form=(0,a.Np)(this,{formType:a.dm.SUB,formControls:{crewMembers:new r.vC([],{validators:o=>o.value.length>=2?null:{minimumCrewMemberCount:2}})},toFormGroup:o=>({crewMembers:o||[]}),fromFormGroup:o=>o.crewMembers,createFormArrayControl:(o,n)=>"crewMembers"===o?new r.p4(n,[r.kI.required]):new r.p4(n)})}removeCrewMember(o){this.form.formGroup.controls.crewMembers.removeAt(o)}addCrewMember(){this.form.formGroup.controls.crewMembers.push(this.form.createFormArrayControl("crewMembers",{firstName:"",lastName:""}))}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-crew-members"]],features:[e._Bn((0,a.CB)(t))],decls:8,vars:3,consts:[[1,"container",3,"formGroup"],["class","crew-member",3,"formArrayName",4,"ngFor","ngForOf"],["mat-raised-button","","data-btn-add-crew-member","","color","primary",1,"add-crew-member",3,"disabled","click"],[1,"crew-member",3,"formArrayName"],[3,"formControl"],["mat-mini-fab","","color","primary",3,"disabled","click"]],template:function(o,n){1&o&&(e.TgZ(0,"fieldset",0)(1,"legend"),e._uU(2," Crew members form "),e.TgZ(3,"small"),e._uU(4,"(Minimum 2)"),e.qZA()(),e.YNc(5,O,5,3,"div",1),e.TgZ(6,"button",2),e.NdJ("click",function(){return n.addCrewMember()}),e._uU(7," Add a crew member "),e.qZA()()),2&o&&(e.Q6J("formGroup",n.form.formGroup),e.xp6(5),e.Q6J("ngForOf",n.form.formGroup.controls.crewMembers.controls),e.xp6(1),e.Q6J("disabled",n.form.formGroup.disabled))},dependencies:[m.sg,r.JJ,r.JL,r.oH,r.sg,r.CE,v.lW,Q.Hw,L],styles:[".crew-member[_ngcontent-%COMP%]{display:flex;align-items:center}app-crew-member[_ngcontent-%COMP%]{margin-bottom:15px}.add-crew-member[_ngcontent-%COMP%]{margin-top:15px}"],changeDetection:0}),t})(),P=(()=>{class t{constructor(){this.form=(0,a.Np)(this,{formType:a.dm.SUB,formControls:{color:new r.p4(null,{validators:[r.kI.required]}),canFire:new r.p4(!1,{validators:[r.kI.required]}),crewMembers:new r.p4(null,{validators:[r.kI.required]}),wingCount:new r.p4(null,{validators:[r.kI.required]}),vehicleType:new r.p4(f.F.SPACESHIP,{validators:[r.kI.required]})}})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-spaceship"]],features:[e._Bn((0,a.CB)(t))],decls:10,vars:5,consts:[[1,"container",3,"formGroup"],["matInput","","data-input-color","","type","color","placeholder","Color","autocomplete","off",3,"formControlName"],["data-input-can-fire","",3,"formControlName"],["matInput","","data-input-number-of-wings","","type","number","placeholder","Number of wings","autocomplete","off",3,"formControlName"],[3,"formControlName"]],template:function(o,n){1&o&&(e.TgZ(0,"fieldset",0)(1,"legend"),e._uU(2,"Spaceship form"),e.qZA(),e.TgZ(3,"mat-form-field"),e._UZ(4,"input",1),e.qZA(),e.TgZ(5,"mat-slide-toggle",2),e._uU(6,"Can fire"),e.qZA(),e.TgZ(7,"mat-form-field"),e._UZ(8,"input",3),e.qZA(),e._UZ(9,"app-crew-members",4),e.qZA()),2&o&&(e.Q6J("formGroup",n.form.formGroup),e.xp6(4),e.Q6J("formControlName",n.form.formControlNames.color),e.xp6(1),e.Q6J("formControlName",n.form.formControlNames.canFire),e.xp6(3),e.Q6J("formControlName",n.form.formControlNames.wingCount),e.xp6(1),e.Q6J("formControlName",n.form.formControlNames.crewMembers))},dependencies:[r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,d.KE,u.Nt,Z.Rr,S],styles:[".container[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),t})(),G=(()=>{class t{constructor(){this.form=(0,a.Np)(this,{formType:a.dm.SUB,formControls:{color:new r.p4(null,{validators:[r.kI.required]}),canFire:new r.p4(!1,{validators:[r.kI.required]}),crewMembers:new r.p4(null,{validators:[r.kI.required]}),vehicleType:new r.p4(f.F.SPEEDER,{validators:[r.kI.required]}),maximumSpeed:new r.p4(null,{validators:[r.kI.required]})}})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-speeder"]],features:[e._Bn((0,a.CB)(t))],decls:10,vars:5,consts:[[1,"container",3,"formGroup"],["matInput","","data-input-color","","type","color","placeholder","Color","autocomplete","off",3,"formControlName"],["data-input-can-fire","",3,"formControlName"],[3,"formControlName"],["matInput","","data-input-maximum-speed","","type","number","placeholder","Maximum speed","autocomplete","off",3,"formControlName"]],template:function(o,n){1&o&&(e.TgZ(0,"fieldset",0)(1,"legend"),e._uU(2,"Speeder form"),e.qZA(),e.TgZ(3,"mat-form-field"),e._UZ(4,"input",1),e.qZA(),e.TgZ(5,"mat-slide-toggle",2),e._uU(6,"Can fire"),e.qZA(),e._UZ(7,"app-crew-members",3),e.TgZ(8,"mat-form-field"),e._UZ(9,"input",4),e.qZA()()),2&o&&(e.Q6J("formGroup",n.form.formGroup),e.xp6(4),e.Q6J("formControlName",n.form.formControlNames.color),e.xp6(1),e.Q6J("formControlName",n.form.formControlNames.canFire),e.xp6(2),e.Q6J("formControlName",n.form.formControlNames.crewMembers),e.xp6(2),e.Q6J("formControlName",n.form.formControlNames.maximumSpeed))},dependencies:[r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,d.KE,u.Nt,Z.Rr,S],styles:[".container[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),t})();function E(t,i){if(1&t&&(e.TgZ(0,"mat-option",5),e._uU(1),e.qZA()),2&t){const o=i.$implicit;e.Q6J("value",o.value),e.xp6(1),e.hij(" ",o.value," ")}}function b(t,i){if(1&t&&e._UZ(0,"app-spaceship",6),2&t){const o=e.oxw();e.Q6J("formControlName",o.form.formControlNames.spaceship)}}function k(t,i){if(1&t&&e._UZ(0,"app-speeder",6),2&t){const o=e.oxw();e.Q6J("formControlName",o.form.formControlNames.speeder)}}let B=(()=>{class t{constructor(){this.VehicleType=f.F,this.form=(0,a.Np)(this,{formType:a.dm.SUB,formControls:{speeder:new r.p4(null),spaceship:new r.p4(null),vehicleType:new r.p4(null,{validators:[r.kI.required]})},toFormGroup:o=>({speeder:o.vehicleType===f.F.SPEEDER?o:null,spaceship:o.vehicleType===f.F.SPACESHIP?o:null,vehicleType:o.vehicleType}),fromFormGroup:o=>{switch(o.vehicleType){case f.F.SPEEDER:return o.speeder;case f.F.SPACESHIP:return o.spaceship;case null:return null;default:throw new w.h(o.vehicleType)}}})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-vehicle-product"]],features:[e._Bn((0,a.CB)(t))],decls:10,vars:8,consts:[[1,"container",3,"formGroup"],["data-select-vehicle-type","","placeholder","Select vehicle type",3,"formControlName"],["data-select-vehicle-type-option","",3,"value",4,"ngFor","ngForOf"],[3,"ngSwitch"],[3,"formControlName",4,"ngSwitchCase"],["data-select-vehicle-type-option","",3,"value"],[3,"formControlName"]],template:function(o,n){1&o&&(e.TgZ(0,"fieldset",0)(1,"legend"),e._uU(2,"Vehicle form"),e.qZA(),e.TgZ(3,"mat-form-field")(4,"mat-select",1),e.YNc(5,E,2,2,"mat-option",2),e.ALo(6,"keyvalue"),e.qZA()(),e.TgZ(7,"div",3),e.YNc(8,b,1,1,"app-spaceship",4),e.YNc(9,k,1,1,"app-speeder",4),e.qZA()()),2&o&&(e.Q6J("formGroup",n.form.formGroup),e.xp6(4),e.Q6J("formControlName",n.form.formControlNames.vehicleType),e.xp6(1),e.Q6J("ngForOf",e.lcZ(6,6,n.VehicleType)),e.xp6(2),e.Q6J("ngSwitch",n.form.formGroup.value.vehicleType),e.xp6(1),e.Q6J("ngSwitchCase",n.VehicleType.SPACESHIP),e.xp6(1),e.Q6J("ngSwitchCase",n.VehicleType.SPEEDER))},dependencies:[m.sg,m.RF,m.n9,r.JJ,r.JL,r.sg,r.u,d.KE,_.gD,g.ey,P,G,m.Nd],styles:[".container[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),t})();var p=l(4879);function H(t,i){if(1&t&&(e.TgZ(0,"mat-option",5),e._uU(1),e.qZA()),2&t){const o=i.$implicit;e.Q6J("value",o.value),e.xp6(1),e.hij(" ",o.value," ")}}let Y=(()=>{class t{constructor(){this.Languages=p.lI,this.form=(0,a.Np)(this,{formType:a.dm.SUB,formControls:{color:new r.p4(null,{validators:[r.kI.required]}),name:new r.p4(null,{validators:[r.kI.required]}),droidType:new r.p4(p.HB.PROTOCOL,{validators:[r.kI.required]}),spokenLanguages:new r.p4(null,{validators:[r.kI.required]})}})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-protocol-droid"]],features:[e._Bn((0,a.CB)(t))],decls:11,vars:7,consts:[[1,"container",3,"formGroup"],["matInput","","type","color","placeholder","Color","autocomplete","off",3,"formControlName"],["matInput","","type","text","placeholder","Name","autocomplete","off",3,"formControlName"],["placeholder","Select spoken languages","multiple","",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,n){1&o&&(e.TgZ(0,"fieldset",0)(1,"legend"),e._uU(2,"Protocol Droid form"),e.qZA(),e.TgZ(3,"mat-form-field"),e._UZ(4,"input",1),e.qZA(),e.TgZ(5,"mat-form-field"),e._UZ(6,"input",2),e.qZA(),e.TgZ(7,"mat-form-field")(8,"mat-select",3),e.YNc(9,H,2,2,"mat-option",4),e.ALo(10,"keyvalue"),e.qZA()()()),2&o&&(e.Q6J("formGroup",n.form.formGroup),e.xp6(4),e.Q6J("formControlName",n.form.formControlNames.color),e.xp6(2),e.Q6J("formControlName",n.form.formControlNames.name),e.xp6(2),e.Q6J("formControlName",n.form.formControlNames.spokenLanguages),e.xp6(1),e.Q6J("ngForOf",e.lcZ(10,5,n.Languages)))},dependencies:[m.sg,r.Fj,r.JJ,r.JL,r.sg,r.u,d.KE,u.Nt,_.gD,g.ey,m.Nd],styles:[".container[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),t})(),$=(()=>{class t{constructor(){this.form=(0,a.Np)(this,{formType:a.dm.SUB,formControls:{color:new r.p4(null,{validators:[r.kI.required]}),name:new r.p4(null,{validators:[r.kI.required]}),droidType:new r.p4(p.HB.MEDICAL,{validators:[r.kI.required]}),canHealHumans:new r.p4(!1,{validators:[r.kI.required]}),canFixRobots:new r.p4(!1,{validators:[r.kI.required]})}})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-medical-droid"]],features:[e._Bn((0,a.CB)(t))],decls:11,vars:5,consts:[[1,"container",3,"formGroup"],["matInput","","type","color","placeholder","Color","autocomplete","off",3,"formControlName"],["matInput","","type","text","placeholder","Name","autocomplete","off",3,"formControlName"],[3,"formControlName"]],template:function(o,n){1&o&&(e.TgZ(0,"fieldset",0)(1,"legend"),e._uU(2,"Medical Droid form"),e.qZA(),e.TgZ(3,"mat-form-field"),e._UZ(4,"input",1),e.qZA(),e.TgZ(5,"mat-form-field"),e._UZ(6,"input",2),e.qZA(),e.TgZ(7,"mat-slide-toggle",3),e._uU(8,"Can heal humans"),e.qZA(),e.TgZ(9,"mat-slide-toggle",3),e._uU(10,"Can fix robots"),e.qZA()()),2&o&&(e.Q6J("formGroup",n.form.formGroup),e.xp6(4),e.Q6J("formControlName",n.form.formControlNames.color),e.xp6(2),e.Q6J("formControlName",n.form.formControlNames.name),e.xp6(1),e.Q6J("formControlName",n.form.formControlNames.canHealHumans),e.xp6(2),e.Q6J("formControlName",n.form.formControlNames.canFixRobots))},dependencies:[r.Fj,r.JJ,r.JL,r.sg,r.u,d.KE,u.Nt,Z.Rr],styles:[".container[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),t})();function R(t,i){if(1&t&&(e.TgZ(0,"mat-option",6),e._uU(1),e.qZA()),2&t){const o=i.$implicit;e.Q6J("value",o.value),e.xp6(1),e.hij(" ",o.value," ")}}let V=(()=>{class t{constructor(){this.AstromechDroidShape=p.XC,this.form=(0,a.Np)(this,{formType:a.dm.SUB,formControls:{color:new r.p4(null,{validators:[r.kI.required]}),name:new r.p4(null,{validators:[r.kI.required]}),droidType:new r.p4(p.HB.ASTROMECH,{validators:[r.kI.required]}),toolCount:new r.p4(null,{validators:[r.kI.required]}),shape:new r.p4(null,{validators:[r.kI.required]})}})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-astromech-droid"]],features:[e._Bn((0,a.CB)(t))],decls:13,vars:8,consts:[[1,"container",3,"formGroup"],["matInput","","type","color","placeholder","Color","autocomplete","off",3,"formControlName"],["matInput","","type","text","placeholder","Name","autocomplete","off",3,"formControlName"],["matInput","","type","number","placeholder","Number of tools carried","autocomplete","off",3,"formControlName"],["placeholder","Select the droid shape",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,n){1&o&&(e.TgZ(0,"fieldset",0)(1,"legend"),e._uU(2,"Astromech Droid form"),e.qZA(),e.TgZ(3,"mat-form-field"),e._UZ(4,"input",1),e.qZA(),e.TgZ(5,"mat-form-field"),e._UZ(6,"input",2),e.qZA(),e.TgZ(7,"mat-form-field"),e._UZ(8,"input",3),e.qZA(),e.TgZ(9,"mat-form-field")(10,"mat-select",4),e.YNc(11,R,2,2,"mat-option",5),e.ALo(12,"keyvalue"),e.qZA()()()),2&o&&(e.Q6J("formGroup",n.form.formGroup),e.xp6(4),e.Q6J("formControlName",n.form.formControlNames.color),e.xp6(2),e.Q6J("formControlName",n.form.formControlNames.name),e.xp6(2),e.Q6J("formControlName",n.form.formControlNames.toolCount),e.xp6(2),e.Q6J("formControlName",n.form.formControlNames.shape),e.xp6(1),e.Q6J("ngForOf",e.lcZ(12,6,n.AstromechDroidShape)))},dependencies:[m.sg,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,d.KE,u.Nt,_.gD,g.ey,m.Nd],styles:[".container[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),t})();function X(t,i){if(1&t&&(e.TgZ(0,"mat-option",5),e._uU(1),e.qZA()),2&t){const o=i.$implicit,n=e.oxw();e.Q6J("value",o.value),e.xp6(1),e.hij(" ",n.assassinDroidWeaponText[o.value]," ")}}const j={[p._m.SABER]:"Saber",[p._m.FLAME_THROWER]:"Flame thrower",[p._m.GUN]:"Gun",[p._m.AXE]:"Axe"};let K=(()=>{class t{constructor(){this.AssassinDroidWeapon=p._m,this.assassinDroidWeaponText=j,this.form=(0,a.Np)(this,{formType:a.dm.SUB,formControls:{color:new r.p4(null,{validators:[r.kI.required]}),name:new r.p4(null,{validators:[r.kI.required]}),droidType:new r.p4(p.HB.ASSASSIN,{validators:[r.kI.required]}),weapons:new r.p4([],{validators:[r.kI.required]})}})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-assassin-droid"]],features:[e._Bn((0,a.CB)(t))],decls:11,vars:7,consts:[[1,"container",3,"formGroup"],["matInput","","data-input-color","","type","color","placeholder","Color","autocomplete","off",3,"formControlName"],["matInput","","data-input-name","","type","text","placeholder","Name","autocomplete","off",3,"formControlName"],["data-select-weapons","","placeholder","Select weapons","multiple","",3,"formControlName"],["data-select-weapons-option","",3,"value",4,"ngFor","ngForOf"],["data-select-weapons-option","",3,"value"]],template:function(o,n){1&o&&(e.TgZ(0,"fieldset",0)(1,"legend"),e._uU(2,"Assassin Droid form"),e.qZA(),e.TgZ(3,"mat-form-field"),e._UZ(4,"input",1),e.qZA(),e.TgZ(5,"mat-form-field"),e._UZ(6,"input",2),e.qZA(),e.TgZ(7,"mat-form-field")(8,"mat-select",3),e.YNc(9,X,2,2,"mat-option",4),e.ALo(10,"keyvalue"),e.qZA()()()),2&o&&(e.Q6J("formGroup",n.form.formGroup),e.xp6(4),e.Q6J("formControlName",n.form.formControlNames.color),e.xp6(2),e.Q6J("formControlName",n.form.formControlNames.name),e.xp6(2),e.Q6J("formControlName",n.form.formControlNames.weapons),e.xp6(1),e.Q6J("ngForOf",e.lcZ(10,5,n.AssassinDroidWeapon)))},dependencies:[m.sg,r.Fj,r.JJ,r.JL,r.sg,r.u,d.KE,u.Nt,_.gD,g.ey,m.Nd],styles:[".container[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),t})();function W(t,i){if(1&t&&(e.TgZ(0,"mat-option",5),e._uU(1),e.qZA()),2&t){const o=i.$implicit;e.Q6J("value",o.value),e.xp6(1),e.hij(" ",o.value," ")}}function z(t,i){if(1&t&&e._UZ(0,"app-protocol-droid",6),2&t){const o=e.oxw();e.Q6J("formControlName",o.form.formControlNames.protocolDroid)}}function ee(t,i){if(1&t&&e._UZ(0,"app-medical-droid",6),2&t){const o=e.oxw();e.Q6J("formControlName",o.form.formControlNames.medicalDroid)}}function oe(t,i){if(1&t&&e._UZ(0,"app-astromech-droid",6),2&t){const o=e.oxw();e.Q6J("formControlName",o.form.formControlNames.astromechDroid)}}function te(t,i){if(1&t&&e._UZ(0,"app-assassin-droid",6),2&t){const o=e.oxw();e.Q6J("formControlName",o.form.formControlNames.assassinDroid)}}let re=(()=>{class t{constructor(){this.DroidType=p.HB,this.form=(0,a.Np)(this,{formType:a.dm.SUB,formControls:{protocolDroid:new r.p4(null),medicalDroid:new r.p4(null),astromechDroid:new r.p4(null),assassinDroid:new r.p4(null),droidType:new r.p4(null,{validators:[r.kI.required]})},toFormGroup:o=>({protocolDroid:o.droidType===p.HB.PROTOCOL?o:null,medicalDroid:o.droidType===p.HB.MEDICAL?o:null,astromechDroid:o.droidType===p.HB.ASTROMECH?o:null,assassinDroid:o.droidType===p.HB.ASSASSIN?o:null,droidType:o.droidType}),fromFormGroup:o=>{switch(o.droidType){case p.HB.PROTOCOL:return o.protocolDroid;case p.HB.MEDICAL:return o.medicalDroid;case p.HB.ASTROMECH:return o.astromechDroid;case p.HB.ASSASSIN:return o.assassinDroid;case null:return null;default:throw new w.h(o.droidType)}}})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-droid-product"]],features:[e._Bn((0,a.CB)(t))],decls:12,vars:10,consts:[[1,"container",3,"formGroup"],["data-select-droid-type","","placeholder","Select droid type",3,"formControlName"],["data-select-droid-type-option","",3,"value",4,"ngFor","ngForOf"],[3,"ngSwitch"],[3,"formControlName",4,"ngSwitchCase"],["data-select-droid-type-option","",3,"value"],[3,"formControlName"]],template:function(o,n){1&o&&(e.TgZ(0,"fieldset",0)(1,"legend"),e._uU(2,"Droid form"),e.qZA(),e.TgZ(3,"mat-form-field")(4,"mat-select",1),e.YNc(5,W,2,2,"mat-option",2),e.ALo(6,"keyvalue"),e.qZA()(),e.TgZ(7,"div",3),e.YNc(8,z,1,1,"app-protocol-droid",4),e.YNc(9,ee,1,1,"app-medical-droid",4),e.YNc(10,oe,1,1,"app-astromech-droid",4),e.YNc(11,te,1,1,"app-assassin-droid",4),e.qZA()()),2&o&&(e.Q6J("formGroup",n.form.formGroup),e.xp6(4),e.Q6J("formControlName",n.form.formControlNames.droidType),e.xp6(1),e.Q6J("ngForOf",e.lcZ(6,8,n.DroidType)),e.xp6(2),e.Q6J("ngSwitch",n.form.formGroup.value.droidType),e.xp6(1),e.Q6J("ngSwitchCase",n.DroidType.PROTOCOL),e.xp6(1),e.Q6J("ngSwitchCase",n.DroidType.MEDICAL),e.xp6(1),e.Q6J("ngSwitchCase",n.DroidType.ASTROMECH),e.xp6(1),e.Q6J("ngSwitchCase",n.DroidType.ASSASSIN))},dependencies:[m.sg,m.RF,m.n9,r.JJ,r.JL,r.sg,r.u,d.KE,_.gD,g.ey,Y,$,V,K,m.Nd],styles:[".container[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),t})();function ne(t,i){if(1&t&&e._UZ(0,"img",22),2&t){const o=e.oxw();e.MGl("alt","Photo of ",o.form.formGroup.value.title,""),e.Q6J("src",o.form.formGroup.value.imageUrl,e.LSH)}}function ie(t,i){1&t&&(e.TgZ(0,"mat-error",23),e._uU(1,"ID is required"),e.qZA())}function ae(t,i){1&t&&(e.TgZ(0,"mat-error",24),e._uU(1,"Title is required"),e.qZA())}function me(t,i){1&t&&(e.TgZ(0,"mat-error",25),e._uU(1," Image url is required "),e.qZA())}function le(t,i){1&t&&(e.TgZ(0,"mat-error",26),e._uU(1,"Price is required"),e.qZA())}function pe(t,i){if(1&t&&(e.TgZ(0,"mat-option",27),e._uU(1),e.qZA()),2&t){const o=i.$implicit;e.Q6J("value",o.value),e.xp6(1),e.hij(" ",o.value," ")}}function se(t,i){if(1&t&&e._UZ(0,"app-droid-product",28),2&t){const o=e.oxw();e.Q6J("formControlName",o.form.formControlNames.droidProduct)}}function ce(t,i){if(1&t&&e._UZ(0,"app-vehicle-product",28),2&t){const o=e.oxw();e.Q6J("formControlName",o.form.formControlNames.vehicleProduct)}}function de(t,i){1&t&&(e.TgZ(0,"div",31),e._uU(1,"Form is invalid"),e.qZA())}function ue(t,i){if(1&t){const o=e.EpF();e.TgZ(0,"div")(1,"button",29),e.NdJ("click",function(){e.CHM(o);const c=e.oxw();return e.KtG(c.manualSave$$.next())}),e._uU(2," Upsert "),e.qZA(),e.YNc(3,de,2,0,"div",30),e.qZA()}if(2&t){const o=e.oxw();e.xp6(1),e.Q6J("disabled",o.form.formGroup.invalid||o.form.formGroup.disabled),e.xp6(2),e.Q6J("ngIf",o.form.formGroup.invalid)}}function fe(t,i){if(1&t&&(e.TgZ(0,"pre",32),e._uU(1),e.ALo(2,"json"),e.qZA()),2&t){const o=i.ngIf;e.xp6(1),e.Oqu(e.lcZ(2,1,o))}}function ge(t,i){1&t&&(e.TgZ(0,"span",33),e._uU(1,"Form is valid, no error!"),e.qZA())}let Ce=(()=>{class t{constructor(){this.ListingType=h.I,this.input$=new y.x,this.disabled$=new y.x,this.listingUpdated=new y.x,this.manualSave$$=new y.x,this.form=(0,a.Np)(this,{formType:a.dm.ROOT,disabled$:this.disabled$,input$:this.input$,output$:this.listingUpdated,manualSave$:this.manualSave$$,formControls:{vehicleProduct:new r.p4(null),droidProduct:new r.p4(null),listingType:new r.p4(null,r.kI.required),id:new r.p4(null,r.kI.required),title:new r.p4(null,r.kI.required),imageUrl:new r.p4(null,r.kI.required),price:new r.p4(null,r.kI.required)},toFormGroup:o=>{const{listingType:n,product:c,...s}=o;return{vehicleProduct:o.listingType===h.I.VEHICLE?o.product:null,droidProduct:o.listingType===h.I.DROID?o.product:null,listingType:o.listingType,...s}},fromFormGroup:o=>{const{vehicleProduct:n,droidProduct:c,listingType:s,...N}=o;switch(s){case h.I.DROID:return c?{product:c,listingType:s,...N}:null;case h.I.VEHICLE:return n?{product:n,listingType:s,...N}:null;case null:return null;default:throw new w.h(s)}}})}set listing(o){this.input$.next(o)}set disabled(o){this.disabled$.next(o||!1)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-listing-form"]],inputs:{listing:"listing",disabled:"disabled"},outputs:{listingUpdated:"listingUpdated"},decls:46,vars:31,consts:[["data-title",""],["data-price",""],[1,"img-container"],["mat-card-image","",3,"src","alt",4,"ngIf"],[3,"formGroup"],["matInput","","data-input-id","","type","text","placeholder","ID","autocomplete","off",3,"formControlName"],["data-input-id-error","",4,"ngIf"],["matInput","","data-input-title","","type","text","placeholder","Title","autocomplete","off",3,"formControlName"],["data-input-title-error","",4,"ngIf"],["matInput","","data-input-image-url","","type","text","placeholder","Image Url","autocomplete","off",3,"formControlName"],["data-input-image-url-error","",4,"ngIf"],["matInput","","data-input-price","","type","number","placeholder","Price","autocomplete","off",3,"formControlName"],["data-input-price-error","",4,"ngIf"],["data-select-listing-type","","placeholder","Select listing type",3,"formControlName"],["data-select-listing-type-option","",3,"value",4,"ngFor","ngForOf"],[3,"ngSwitch"],[3,"formControlName",4,"ngSwitchCase"],[4,"ngIf"],[1,"errors"],["data-errors","",4,"ngIf","ngIfElse"],["noError",""],[1,"values"],["mat-card-image","",3,"src","alt"],["data-input-id-error",""],["data-input-title-error",""],["data-input-image-url-error",""],["data-input-price-error",""],["data-select-listing-type-option","",3,"value"],[3,"formControlName"],["mat-raised-button","","color","primary",3,"disabled","click"],["class","invalid-form",4,"ngIf"],[1,"invalid-form"],["data-errors",""],["data-no-error",""]],template:function(o,n){if(1&o&&(e.TgZ(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title",0),e._uU(3),e.qZA(),e.TgZ(4,"mat-card-subtitle",1),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.TgZ(7,"div",2),e.YNc(8,ne,1,2,"img",3),e.qZA(),e.TgZ(9,"mat-card-content")(10,"form",4)(11,"mat-form-field"),e._UZ(12,"input",5),e.qZA(),e.YNc(13,ie,2,0,"mat-error",6),e.TgZ(14,"mat-form-field"),e._UZ(15,"input",7),e.qZA(),e.YNc(16,ae,2,0,"mat-error",8),e.TgZ(17,"mat-form-field"),e._UZ(18,"input",9),e.qZA(),e.YNc(19,me,2,0,"mat-error",10),e.TgZ(20,"mat-form-field"),e._UZ(21,"input",11),e.qZA(),e.YNc(22,le,2,0,"mat-error",12),e.TgZ(23,"mat-form-field")(24,"mat-select",13),e.YNc(25,pe,2,2,"mat-option",14),e.ALo(26,"keyvalue"),e.qZA()(),e.TgZ(27,"div",15),e.YNc(28,se,1,1,"app-droid-product",16),e.YNc(29,ce,1,1,"app-vehicle-product",16),e.qZA()()(),e.TgZ(30,"mat-card-actions"),e.YNc(31,ue,4,2,"div",17),e.qZA()(),e.TgZ(32,"mat-card",18)(33,"mat-card-title"),e._uU(34,"Form errors"),e.qZA(),e.TgZ(35,"mat-card-content"),e.YNc(36,fe,3,3,"pre",19),e.YNc(37,ge,2,0,"ng-template",null,20,e.W1O),e.qZA()(),e.TgZ(39,"mat-card",21)(40,"mat-card-title"),e._uU(41,"Form values"),e.qZA(),e.TgZ(42,"mat-card-content")(43,"pre"),e._uU(44),e.ALo(45,"json"),e.qZA()()()),2&o){const c=e.MAs(38);e.xp6(2),e.ekj("not-visible",!n.form.formGroup.value.title),e.xp6(1),e.hij(" ",n.form.formGroup.value.title," "),e.xp6(1),e.ekj("not-visible",!n.form.formGroup.value.price),e.xp6(1),e.hij(" \xa3",e.lcZ(6,25,n.form.formGroup.value.price)," "),e.xp6(3),e.Q6J("ngIf",n.form.formGroup.value.imageUrl),e.xp6(2),e.Q6J("formGroup",n.form.formGroup),e.xp6(2),e.Q6J("formControlName",n.form.formControlNames.id),e.xp6(1),e.Q6J("ngIf",null==n.form.formGroupErrors||null==n.form.formGroupErrors.id?null:n.form.formGroupErrors.id.required),e.xp6(2),e.Q6J("formControlName",n.form.formControlNames.title),e.xp6(1),e.Q6J("ngIf",null==n.form.formGroupErrors||null==n.form.formGroupErrors.title?null:n.form.formGroupErrors.title.required),e.xp6(2),e.Q6J("formControlName",n.form.formControlNames.imageUrl),e.xp6(1),e.Q6J("ngIf",null==n.form.formGroupErrors||null==n.form.formGroupErrors.imageUrl?null:n.form.formGroupErrors.imageUrl.required),e.xp6(2),e.Q6J("formControlName",n.form.formControlNames.price),e.xp6(1),e.Q6J("ngIf",null==n.form.formGroupErrors||null==n.form.formGroupErrors.price?null:n.form.formGroupErrors.price.required),e.xp6(2),e.Q6J("formControlName",n.form.formControlNames.listingType),e.xp6(1),e.Q6J("ngForOf",e.lcZ(26,27,n.ListingType)),e.xp6(2),e.Q6J("ngSwitch",n.form.formGroup.value.listingType),e.xp6(1),e.Q6J("ngSwitchCase",n.ListingType.DROID),e.xp6(1),e.Q6J("ngSwitchCase",n.ListingType.VEHICLE),e.xp6(2),e.Q6J("ngIf",!0),e.xp6(5),e.Q6J("ngIf",n.form.formGroupErrors)("ngIfElse",c),e.xp6(8),e.Oqu(e.lcZ(45,29,n.form.formGroup.value))}},dependencies:[m.sg,m.O5,m.RF,m.n9,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,v.lW,d.TO,d.KE,u.Nt,_.gD,g.ey,C.a8,C.dk,C.dn,C.n5,C.$j,C.hq,C.G2,B,re,m.Ts,m.JJ,m.Nd],styles:["img[_ngcontent-%COMP%]{max-width:300px;max-height:500px;object-fit:contain}.img-container[_ngcontent-%COMP%]{width:100%;text-align:center}mat-card[_ngcontent-%COMP%]{margin-bottom:15px;max-width:500px}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{min-height:25px}mat-card.errors[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], mat-card.values[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{overflow:auto}mat-form-field[_ngcontent-%COMP%]{width:100%}.invalid-form[_ngcontent-%COMP%]{padding:15px 0}"],changeDetection:0}),t})(),U=(()=>{class t{constructor(o,n,c){this.route=o,this.listingService=n,this.uuidService=c,this.readonlyFormControl=new r.p4(!1),this.listing$=this.route.paramMap.pipe((0,x.U)(s=>s.get("listingId")),(0,F.w)(s=>"new"!==s&&s?this.listingService.getOneListing(s):(0,I.of)(null)),(0,x.U)(s=>s||this.emptyListing()))}emptyListing(){return{id:this.uuidService.generate(),listingType:null,title:null,imageUrl:null,price:null,product:null}}upsertListing(o){this.listingService.upsertListing(o)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(T.gz),e.Y36(J.o),e.Y36(M.B))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-listing"]],decls:4,vars:5,consts:[["data-readonly","",1,"readonly",3,"formControl"],[3,"listing","disabled","listingUpdated"]],template:function(o,n){1&o&&(e.TgZ(0,"mat-slide-toggle",0),e._uU(1,"Readonly"),e.qZA(),e.TgZ(2,"app-listing-form",1),e.NdJ("listingUpdated",function(s){return n.upsertListing(s)}),e.ALo(3,"async"),e.qZA()),2&o&&(e.Q6J("formControl",n.readonlyFormControl),e.xp6(2),e.Q6J("listing",e.lcZ(3,3,n.listing$))("disabled",n.readonlyFormControl.value))},dependencies:[r.JJ,r.oH,Z.Rr,Ce,m.Ov],styles:[".readonly[_ngcontent-%COMP%]{padding:15px 0}"],changeDetection:0}),t})();var he=l(3683),q=l(4633);let _e=(()=>{class t{transform(o){return o.map(n=>`${n.firstName} ${n.lastName}`).join(", ")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275pipe=e.Yjl({name:"displayCrewMembers",type:t,pure:!0}),t})();function Te(t,i){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const o=e.oxw(2).$implicit;e.xp6(1),e.hij("Weapons: ",o.product.weapons.join(", "),"")}}function Ze(t,i){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const o=e.oxw(2).$implicit;e.xp6(1),e.hij("Number of tools: ",o.product.toolCount,"")}}function ye(t,i){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const o=e.oxw(2).$implicit;e.xp6(1),e.AsE(" ",o.product.canHealHumans?"Can":"Can't"," heal humans, ",o.product.canFixRobots?"can":"can't"," fix robots ")}}function Ne(t,i){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const o=e.oxw(2).$implicit;e.xp6(1),e.hij(" Spoken languages: ",o.product.spokenLanguages.join(", ")," ")}}function we(t,i){if(1&t&&(e.TgZ(0,"span")(1,"span",9),e._uU(2),e.qZA(),e._uU(3," - "),e.TgZ(4,"span",10),e.YNc(5,Te,2,1,"span",8),e.YNc(6,Ze,2,1,"span",8),e.YNc(7,ye,2,2,"span",8),e.YNc(8,Ne,2,1,"span",8),e.qZA()()),2&t){const o=e.oxw().$implicit,n=e.oxw();e.xp6(1),e.Udp("background-color",o.product.color),e.xp6(1),e.Oqu(o.product.droidType),e.xp6(2),e.Q6J("ngSwitch",o.product.droidType),e.xp6(1),e.Q6J("ngSwitchCase",n.DroidType.ASSASSIN),e.xp6(1),e.Q6J("ngSwitchCase",n.DroidType.ASTROMECH),e.xp6(1),e.Q6J("ngSwitchCase",n.DroidType.MEDICAL),e.xp6(1),e.Q6J("ngSwitchCase",n.DroidType.PROTOCOL)}}function ve(t,i){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const o=e.oxw(2).$implicit;e.xp6(1),e.hij("maximum speed: ",o.product.maximumSpeed,"kph")}}function Ae(t,i){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const o=e.oxw(2).$implicit;e.xp6(1),e.hij("number of wings: ",o.product.wingCount,"")}}function xe(t,i){if(1&t&&(e.TgZ(0,"span")(1,"span",9),e._uU(2),e.qZA(),e._uU(3," - "),e.TgZ(4,"span",10),e._uU(5),e.ALo(6,"displayCrewMembers"),e.YNc(7,ve,2,1,"span",8),e.YNc(8,Ae,2,1,"span",8),e.qZA()()),2&t){const o=e.oxw().$implicit,n=e.oxw();e.xp6(1),e.Udp("background-color",o.product.color),e.xp6(1),e.Oqu(o.product.vehicleType),e.xp6(2),e.Q6J("ngSwitch",o.product.vehicleType),e.xp6(1),e.AsE(" Crew members: ",e.lcZ(6,8,o.product.crewMembers),", ",o.product.canFire?"can":"can't"," fire, "),e.xp6(2),e.Q6J("ngSwitchCase",n.VehicleType.SPEEDER),e.xp6(1),e.Q6J("ngSwitchCase",n.VehicleType.SPACESHIP)}}const Je=function(t){return["listings",t]};function Se(t,i){if(1&t&&(e.TgZ(0,"a",2)(1,"h4",3)(2,"span",4),e._uU(3),e.qZA(),e._uU(4," ( "),e.TgZ(5,"span",5),e._uU(6),e.qZA(),e._uU(7," ) \xa3 "),e.TgZ(8,"span",6),e._uU(9),e.ALo(10,"number"),e.qZA()(),e.TgZ(11,"p",7),e.YNc(12,we,9,8,"span",8),e.YNc(13,xe,9,10,"span",8),e.qZA()()),2&t){const o=i.$implicit,n=e.oxw();e.Q6J("routerLink",e.VKq(9,Je,o.id)),e.xp6(3),e.Oqu(o.title),e.xp6(3),e.Oqu(o.listingType),e.xp6(3),e.Oqu(e.lcZ(10,7,o.price)),e.xp6(2),e.Q6J("ngSwitch",o.listingType),e.xp6(1),e.Q6J("ngSwitchCase",n.ListingType.DROID),e.xp6(1),e.Q6J("ngSwitchCase",n.ListingType.VEHICLE)}}const Ue=function(){return["listings","new"]};let qe=(()=>{class t{constructor(){this.listings=[],this.ListingType=h.I,this.DroidType=p.HB,this.VehicleType=f.F}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-listings"]],inputs:{listings:"listings"},decls:4,vars:3,consts:[["data-list-item","","mat-list-item","",3,"routerLink",4,"ngFor","ngForOf"],["mat-raised-button","","data-create-new","","color","primary",3,"routerLink"],["data-list-item","","mat-list-item","",3,"routerLink"],["mat-line",""],["data-title",""],["data-type",""],["data-price",""],["mat-line","",3,"ngSwitch"],[4,"ngSwitchCase"],["data-sub-type",""],["data-details","",3,"ngSwitch"]],template:function(o,n){1&o&&(e.TgZ(0,"mat-nav-list"),e.YNc(1,Se,14,11,"a",0),e.qZA(),e.TgZ(2,"a",1),e._uU(3,"Create new"),e.qZA()),2&o&&(e.xp6(1),e.Q6J("ngForOf",n.listings),e.xp6(1),e.Q6J("routerLink",e.DdM(2,Ue)))},dependencies:[m.sg,m.RF,m.n9,v.zs,q.Hk,q.Tg,g.X2,T.yS,m.JJ,_e],styles:["mat-nav-list[_ngcontent-%COMP%]{padding:0}"],changeDetection:0}),t})(),De=(()=>{class t{constructor(o){this.listingService=o,this.listings$=this.listingService.getListings()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(J.o))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-main"]],decls:7,vars:3,consts:[["color","primary"],["src","/assets/ewok-no-bg.png","alt","EWOK",1,"logo"],[1,"container"],[1,"left-part",3,"listings"],[1,"right-part"],[1,"router-flex"]],template:function(o,n){1&o&&(e.TgZ(0,"mat-toolbar",0),e._UZ(1,"img",1),e.qZA(),e.TgZ(2,"div",2),e._UZ(3,"app-listings",3),e.ALo(4,"async"),e.TgZ(5,"div",4),e._UZ(6,"router-outlet",5),e.qZA()()),2&o&&(e.xp6(3),e.Q6J("listings",e.lcZ(4,1,n.listings$)))},dependencies:[he.Ye,T.lC,qe,m.Ov],styles:[".container[_ngcontent-%COMP%]{height:calc(100% - 64px);display:flex}.container[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%]{flex-grow:1;height:100%}.logo[_ngcontent-%COMP%]{max-width:200px}"],changeDetection:0}),t})(),Ie=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.ez,D.m,T.Bz.forChild([{path:"",component:De,children:[{path:"listings",children:[{path:":listingId",component:U},{path:"new",component:U,pathMatch:"full"}]}]},{path:"**",pathMatch:"full",redirectTo:"/"}])]}),t})()}}]);