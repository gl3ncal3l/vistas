"use strict";(self.webpackChunkss_front=self.webpackChunkss_front||[]).push([[112],{5112:(yt,x,r)=>{r.r(x),r.d(x,{TrabajadorSocialModule:()=>Qt});var q=r(9808),s=r(1083),c=r(4999),t=r(5e3),l=r(7322),P=r(4107),v=r(508),_=r(7531),h=r(6087),m=r(4847),u=r(3954),C=r(7238),Z=r(8326);const R=["paginatorPrimera"],w=["pSort"];function J(e,o){1&e&&(t.TgZ(0,"th",33),t._uU(1," Solicitud (No. Registro) "),t.qZA())}function Q(e,o){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.id," ")}}function y(e,o){1&e&&(t.TgZ(0,"th",33),t._uU(1," Tipo "),t.qZA())}function S(e,o){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.tipo," ")}}function N(e,o){1&e&&(t.TgZ(0,"th",33),t._uU(1," Estado de la Solicitud "),t.qZA())}function M(e,o){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.estado," ")}}function D(e,o){1&e&&(t.TgZ(0,"th",33),t._uU(1," Estado Documentaci\xf3n "),t.qZA())}function F(e,o){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.estado_doc," ")}}function I(e,o){1&e&&(t.TgZ(0,"th",35),t._uU(1," Expediente "),t.qZA())}function O(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"td",34),t.TgZ(1,"a",36),t.NdJ("click",function(){const d=t.CHM(a).$implicit;return t.oxw().mostrar(d)}),t.TgZ(2,"mat-icon"),t._uU(3,"launch"),t.qZA(),t.qZA(),t.qZA()}}function Y(e,o){1&e&&t._UZ(0,"tr",37)}function k(e,o){1&e&&t._UZ(0,"tr",38)}const B=function(){return[5,10,25,100]};let j=(()=>{class e{constructor(a){this.router=a,this.primera=[{id:"1-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"2-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"3-2022",tipo:"EPS",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"4-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"5-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"6-2022",tipo:"Tesis de Grado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"7-2022",tipo:"Discapacidad",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"8-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"9-2022",tipo:"EPS",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"10-2022",tipo:"Discapacidad",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"11-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"12-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"13-2022",tipo:"Arte, Cultura y Deporte",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"14-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"15-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"}],this.displayedColumns=["id","tipo","estado","estado_doc","acciones"],this.dataSourcePrimera=new c.by(this.primera)}ngOnInit(){this.paginatorPrimera._intl.itemsPerPageLabel="Solicitudes por p\xe1gina"}ngAfterViewInit(){this.dataSourcePrimera.paginator=this.paginatorPrimera,this.dataSourcePrimera.sort=this.sortPrimera}applyFilterPrimera(a){this.dataSourcePrimera.filter=a.target.value.trim().toLowerCase()}mostrar(a){this.router.navigate(["/trabajador-social","solicitud"],{queryParams:a})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-buscar"]],viewQuery:function(a,i){if(1&a&&(t.Gf(R,7),t.Gf(w,7)),2&a){let n;t.iGM(n=t.CRH())&&(i.paginatorPrimera=n.first),t.iGM(n=t.CRH())&&(i.sortPrimera=n.first)}},decls:82,vars:29,consts:[[1,"contenedor"],[1,"buscador"],[1,"filters-container"],[1,"filters"],[2,"width","150px","padding-right","20px"],["disableRipple",""],["value","1"],["value","2"],["value","3"],["value","4"],["matInput","","placeholder","","autocomplete","off",3,"keyup"],["input",""],["aria-label","Select page of users",3,"pageSizeOptions"],["paginatorPrimera",""],["mat-table","","matSort","",3,"dataSource"],["pSort","matSort"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","tipo"],["matColumnDef","estado"],["matColumnDef","estado_doc"],["matColumnDef","acciones"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"contenedor2"],[1,"titulo"],[2,"font-size","25px"],["cols","7","rowHeight","32px"],[3,"colspan","rowspan"],[2,"position","absolute","left","22px"],[2,"font-size","17px"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["matTooltip","Acceder al Expediente",1,"pointer",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(a,i){1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"mat-form-field",4),t.TgZ(5,"mat-label"),t._uU(6,"Opci\xf3n"),t.qZA(),t.TgZ(7,"mat-select",5),t.TgZ(8,"mat-option",6),t._uU(9,"Registro Acad\xe9mico"),t.qZA(),t.TgZ(10,"mat-option",7),t._uU(11,"A\xf1o"),t.qZA(),t.TgZ(12,"mat-option",8),t._uU(13,"Aprobadas"),t.qZA(),t.TgZ(14,"mat-option",9),t._uU(15,"Denegadas"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"mat-form-field"),t.TgZ(17,"mat-label"),t._uU(18,"Filtro"),t.qZA(),t.TgZ(19,"input",10,11),t.NdJ("keyup",function(d){return i.applyFilterPrimera(d)}),t.qZA(),t.qZA(),t.qZA(),t._UZ(21,"mat-paginator",12,13),t.qZA(),t.TgZ(23,"table",14,15),t.ynx(25,16),t.YNc(26,J,2,0,"th",17),t.YNc(27,Q,2,1,"td",18),t.BQk(),t.ynx(28,19),t.YNc(29,y,2,0,"th",17),t.YNc(30,S,2,1,"td",18),t.BQk(),t.ynx(31,20),t.YNc(32,N,2,0,"th",17),t.YNc(33,M,2,1,"td",18),t.BQk(),t.ynx(34,21),t.YNc(35,D,2,0,"th",17),t.YNc(36,F,2,1,"td",18),t.BQk(),t.ynx(37,22),t.YNc(38,I,2,0,"th",23),t.YNc(39,O,4,0,"td",18),t.BQk(),t.YNc(40,Y,1,0,"tr",24),t.YNc(41,k,1,0,"tr",25),t.qZA(),t.qZA(),t.TgZ(42,"div",26),t.TgZ(43,"div",27),t.TgZ(44,"mat-label",28),t._uU(45," Resumen "),t.qZA(),t.qZA(),t.TgZ(46,"mat-grid-list",29),t.TgZ(47,"mat-grid-tile",30),t._UZ(48,"mat-label",31),t.qZA(),t.TgZ(49,"mat-grid-tile",30),t.TgZ(50,"mat-label",32),t._uU(51," Cantidad "),t.qZA(),t.qZA(),t.TgZ(52,"mat-grid-tile",30),t.TgZ(53,"mat-label",31),t._uU(54," N\xfamero de solicitudes "),t.qZA(),t.qZA(),t.TgZ(55,"mat-grid-tile",30),t.TgZ(56,"mat-label"),t._uU(57," 100 "),t.qZA(),t.qZA(),t.TgZ(58,"mat-grid-tile",30),t.TgZ(59,"mat-label",31),t._uU(60," N\xfamero de solicitudes aprobadas "),t.qZA(),t.qZA(),t.TgZ(61,"mat-grid-tile",30),t.TgZ(62,"mat-label"),t._uU(63," 0 "),t.qZA(),t.qZA(),t.TgZ(64,"mat-grid-tile",30),t.TgZ(65,"mat-label",31),t._uU(66," N\xfamero de solicitudes denegadas "),t.qZA(),t.qZA(),t.TgZ(67,"mat-grid-tile",30),t.TgZ(68,"mat-label"),t._uU(69," 0 "),t.qZA(),t.qZA(),t.TgZ(70,"mat-grid-tile",30),t.TgZ(71,"mat-label",31),t._uU(72," N\xfamero de solicitudes pregrado (primera solicitud) "),t.qZA(),t.qZA(),t.TgZ(73,"mat-grid-tile",30),t.TgZ(74,"mat-label"),t._uU(75," 0 "),t.qZA(),t.qZA(),t.TgZ(76,"mat-grid-tile",30),t.TgZ(77,"mat-label",31),t._uU(78," N\xfamero de solicitudes pregrado (renovaci\xf3n) "),t.qZA(),t.qZA(),t.TgZ(79,"mat-grid-tile",30),t.TgZ(80,"mat-label"),t._uU(81," 0 "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(21),t.Q6J("pageSizeOptions",t.DdM(28,B)),t.xp6(2),t.Q6J("dataSource",i.dataSourcePrimera),t.xp6(17),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(6),t.Q6J("colspan",5)("rowspan",2),t.xp6(2),t.Q6J("colspan",2)("rowspan",2),t.xp6(3),t.Q6J("colspan",5)("rowspan",2),t.xp6(3),t.Q6J("colspan",2)("rowspan",2),t.xp6(3),t.Q6J("colspan",5)("rowspan",2),t.xp6(3),t.Q6J("colspan",2)("rowspan",2),t.xp6(3),t.Q6J("colspan",5)("rowspan",2),t.xp6(3),t.Q6J("colspan",2)("rowspan",2),t.xp6(3),t.Q6J("colspan",5)("rowspan",2),t.xp6(3),t.Q6J("colspan",2)("rowspan",2),t.xp6(3),t.Q6J("colspan",5)("rowspan",2),t.xp6(3),t.Q6J("colspan",2)("rowspan",2))},directives:[l.KE,l.hX,P.gD,v.ey,_.Nt,h.NW,c.BZ,m.YE,c.w1,c.fO,c.Dz,c.as,c.nj,u.Il,u.DX,c.ge,m.nU,c.ev,C.gM,Z.Hw,c.XQ,c.Gk],styles:[".contenedor[_ngcontent-%COMP%]{margin:90px 40px 40px}.buscador[_ngcontent-%COMP%]{padding-bottom:40px}.contenedor2[_ngcontent-%COMP%]{padding-bottom:20px;background-color:#fff}table[_ngcontent-%COMP%]{width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:20%}.pointer[_ngcontent-%COMP%]{cursor:pointer}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.filters-container[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]{display:flex;flex-direction:row}.filters-container[_ngcontent-%COMP%]{background-color:#fff;justify-content:space-between}.filters[_ngcontent-%COMP%]{align-items:center;padding:1em 0 0 1em;flex:1 1 auto}.titulo[_ngcontent-%COMP%]{width:100%;display:flex;height:60px;align-items:center}"]}),e})();var g=r(3251);const E=["paginatorPrimera"],z=["pSort"],H=["paginatorRenovacion"],G=["rSort"];function X(e,o){1&e&&(t.TgZ(0,"th",26),t._uU(1," Solicitud (No. Registro) "),t.qZA())}function $(e,o){if(1&e&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.id," ")}}function L(e,o){1&e&&(t.TgZ(0,"th",26),t._uU(1," Tipo "),t.qZA())}function V(e,o){if(1&e&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.tipo," ")}}function W(e,o){1&e&&(t.TgZ(0,"th",26),t._uU(1," Estado de la Solicitud "),t.qZA())}function K(e,o){if(1&e&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.estado," ")}}function tt(e,o){1&e&&(t.TgZ(0,"th",26),t._uU(1," Estado Documentaci\xf3n "),t.qZA())}function et(e,o){if(1&e&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.estado_doc," ")}}function at(e,o){1&e&&(t.TgZ(0,"th",28),t._uU(1," Expediente "),t.qZA())}function ot(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"td",27),t.TgZ(1,"a",29),t.NdJ("click",function(){const d=t.CHM(a).$implicit;return t.oxw().mostrar(d)}),t.TgZ(2,"mat-icon"),t._uU(3,"launch"),t.qZA(),t.qZA(),t.qZA()}}function it(e,o){1&e&&t._UZ(0,"tr",30)}function nt(e,o){1&e&&t._UZ(0,"tr",31)}function rt(e,o){1&e&&(t.TgZ(0,"th",26),t._uU(1," Solicitud (No. Registro) "),t.qZA())}function ct(e,o){if(1&e&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.id," ")}}function dt(e,o){1&e&&(t.TgZ(0,"th",26),t._uU(1," Tipo "),t.qZA())}function st(e,o){if(1&e&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.tipo," ")}}function lt(e,o){1&e&&(t.TgZ(0,"th",26),t._uU(1," Estado de la Solicitud "),t.qZA())}function pt(e,o){if(1&e&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.estado," ")}}function mt(e,o){1&e&&(t.TgZ(0,"th",26),t._uU(1," Estado Documentaci\xf3n "),t.qZA())}function ut(e,o){if(1&e&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.estado_doc," ")}}function Zt(e,o){1&e&&(t.TgZ(0,"th",28),t._uU(1," Expediente "),t.qZA())}function gt(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"td",27),t.TgZ(1,"a",29),t.NdJ("click",function(){const d=t.CHM(a).$implicit;return t.oxw().mostrar(d)}),t.TgZ(2,"mat-icon"),t._uU(3,"launch"),t.qZA(),t.qZA(),t.qZA()}}function _t(e,o){1&e&&t._UZ(0,"tr",30)}function ft(e,o){1&e&&t._UZ(0,"tr",31)}const b=function(){return[5,10,25,100]};let Tt=(()=>{class e{constructor(a){this.router=a,this.primera=[{id:"1-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"2-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"3-2022",tipo:"EPS",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"4-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"5-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"6-2022",tipo:"Tesis de Grado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"7-2022",tipo:"Discapacidad",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"8-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"9-2022",tipo:"EPS",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"10-2022",tipo:"Discapacidad",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"11-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"12-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"13-2022",tipo:"Arte, Cultura y Deporte",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"14-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"15-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"}],this.displayedColumns=["id","tipo","estado","estado_doc","acciones"],this.dataSourcePrimera=new c.by(this.primera),this.renovacion=[{id:"16-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"17-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"18-2022",tipo:"Arte, Cultura y Deporte",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"19-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"20-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"21-2022",tipo:"Pregrado",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"},{id:"22-2022",tipo:"Discapacidad",estado:"Revisi\xf3n de la documentaci\xf3n",estado_doc:"Pendiente de Revisar"}],this.displayedColumnsRenovacion=["id","tipo","estado","estado_doc","acciones"],this.dataSourceRenovacion=new c.by(this.renovacion)}ngOnInit(){this.paginatorPrimera._intl.itemsPerPageLabel="Solicitudes por p\xe1gina"}ngAfterViewInit(){this.dataSourcePrimera.paginator=this.paginatorPrimera,this.dataSourceRenovacion.paginator=this.paginatorRenovacion,this.dataSourcePrimera.sort=this.sortPrimera,this.dataSourceRenovacion.sort=this.sortRenovacion}applyFilterPrimera(a){this.dataSourcePrimera.filter=a.target.value.trim().toLowerCase()}applyFilterRenovacion(a){this.dataSourceRenovacion.filter=a.target.value.trim().toLowerCase()}mostrar(a){this.router.navigate(["/trabajador-social","solicitud"],{queryParams:a})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-inicio"]],viewQuery:function(a,i){if(1&a&&(t.Gf(E,7),t.Gf(z,7),t.Gf(H,7),t.Gf(G,7)),2&a){let n;t.iGM(n=t.CRH())&&(i.paginatorPrimera=n.first),t.iGM(n=t.CRH())&&(i.sortPrimera=n.first),t.iGM(n=t.CRH())&&(i.paginatorRenovacion=n.first),t.iGM(n=t.CRH())&&(i.sortRenovacion=n.first)}},decls:62,vars:11,consts:[[1,"contenedor"],[1,"mat-elevation-z8",3,"color"],["label","Primera Solicitud"],[1,"primera"],[1,"filters-container"],[1,"filters"],["matInput","","placeholder","","autocomplete","off",3,"keyup"],["input",""],["aria-label","Select page of users",3,"pageSizeOptions"],["paginatorPrimera",""],["mat-table","","matSort","",3,"dataSource"],["pSort","matSort"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","tipo"],["matColumnDef","estado"],["matColumnDef","estado_doc"],["matColumnDef","acciones"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["label","Renovaci\xf3n"],[1,"renovacion"],["paginatorRenovacion",""],["rSort","matSort"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["matTooltip","Acceder al Expediente",1,"pointer",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(a,i){1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-tab-group",1),t.TgZ(2,"mat-tab",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"mat-form-field"),t.TgZ(7,"mat-label"),t._uU(8,"Filtro"),t.qZA(),t.TgZ(9,"input",6,7),t.NdJ("keyup",function(d){return i.applyFilterPrimera(d)}),t.qZA(),t.qZA(),t.qZA(),t._UZ(11,"mat-paginator",8,9),t.qZA(),t.TgZ(13,"table",10,11),t.ynx(15,12),t.YNc(16,X,2,0,"th",13),t.YNc(17,$,2,1,"td",14),t.BQk(),t.ynx(18,15),t.YNc(19,L,2,0,"th",13),t.YNc(20,V,2,1,"td",14),t.BQk(),t.ynx(21,16),t.YNc(22,W,2,0,"th",13),t.YNc(23,K,2,1,"td",14),t.BQk(),t.ynx(24,17),t.YNc(25,tt,2,0,"th",13),t.YNc(26,et,2,1,"td",14),t.BQk(),t.ynx(27,18),t.YNc(28,at,2,0,"th",19),t.YNc(29,ot,4,0,"td",14),t.BQk(),t.YNc(30,it,1,0,"tr",20),t.YNc(31,nt,1,0,"tr",21),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"mat-tab",22),t.TgZ(33,"div",23),t.TgZ(34,"div",4),t.TgZ(35,"div",5),t.TgZ(36,"mat-form-field"),t.TgZ(37,"mat-label"),t._uU(38,"Filtro"),t.qZA(),t.TgZ(39,"input",6,7),t.NdJ("keyup",function(d){return i.applyFilterRenovacion(d)}),t.qZA(),t.qZA(),t.qZA(),t._UZ(41,"mat-paginator",8,24),t.qZA(),t.TgZ(43,"table",10,25),t.ynx(45,12),t.YNc(46,rt,2,0,"th",13),t.YNc(47,ct,2,1,"td",14),t.BQk(),t.ynx(48,15),t.YNc(49,dt,2,0,"th",13),t.YNc(50,st,2,1,"td",14),t.BQk(),t.ynx(51,16),t.YNc(52,lt,2,0,"th",13),t.YNc(53,pt,2,1,"td",14),t.BQk(),t.ynx(54,17),t.YNc(55,mt,2,0,"th",13),t.YNc(56,ut,2,1,"td",14),t.BQk(),t.ynx(57,18),t.YNc(58,Zt,2,0,"th",19),t.YNc(59,gt,4,0,"td",14),t.BQk(),t.YNc(60,_t,1,0,"tr",20),t.YNc(61,ft,1,0,"tr",21),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(1),t.Q6J("color","accent"),t.xp6(10),t.Q6J("pageSizeOptions",t.DdM(9,b)),t.xp6(2),t.Q6J("dataSource",i.dataSourcePrimera),t.xp6(17),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(10),t.Q6J("pageSizeOptions",t.DdM(10,b)),t.xp6(2),t.Q6J("dataSource",i.dataSourceRenovacion),t.xp6(17),t.Q6J("matHeaderRowDef",i.displayedColumnsRenovacion),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumnsRenovacion))},directives:[g.SP,g.uX,l.KE,l.hX,_.Nt,h.NW,c.BZ,m.YE,c.w1,c.fO,c.Dz,c.as,c.nj,c.ge,m.nU,c.ev,C.gM,Z.Hw,c.XQ,c.Gk],styles:[".contenedor[_ngcontent-%COMP%]{margin-left:40px;margin-right:40px;margin-top:90px}table[_ngcontent-%COMP%]{width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:20%}.pointer[_ngcontent-%COMP%]{cursor:pointer}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.filters-container[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]{display:flex;flex-direction:row}.filters-container[_ngcontent-%COMP%]{background-color:#fff;justify-content:space-between}.filters[_ngcontent-%COMP%]{align-items:center;padding:1em 0 0 1em;flex:1 1 auto}"]}),e})();var At=r(7446),f=r(7423);let xt=(()=>{class e{constructor(a){this.route=a,this.route.queryParams.subscribe(i=>{this.solicitud=i})}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(s.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-solicitud"]],decls:166,vars:96,consts:[[1,"contenedor"],[1,"mat-elevation-z8",3,"color"],["label","Documentaci\xf3n Requerida"],[1,"container"],["cols","7","rowHeight","32px"],[3,"colspan","rowspan"],[2,"font-size","18px",3,"colspan","rowspan"],[2,"position","absolute","left","22px"],["appearance","outline",1,"full-width"],["matInput","","placeholder",""],[1,"opciones"],["mat-raised-button","","color","warn",2,"margin-right","15px","font-size","17px"],["mat-raised-button","","color","accent",2,"font-size","17px","color","white"],["label","Documentaci\xf3n Posterior"],["label","Env\xedo de Reportes"],["mat-raised-button","","color","primary"],["mat-raised-button","","color","accent",2,"width","154px!important","min-width","unset!important","font-size","17px","color","white"]],template:function(a,i){1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"h2"),t._uU(2),t.qZA(),t.TgZ(3,"mat-tab-group",1),t.TgZ(4,"mat-tab",2),t.TgZ(5,"div",3),t.TgZ(6,"mat-grid-list",4),t._UZ(7,"mat-grid-tile",5),t.TgZ(8,"mat-grid-tile",6),t._uU(9," Aprobar "),t.qZA(),t.TgZ(10,"mat-grid-tile",6),t._uU(11," Devolver Archivo "),t.qZA(),t.TgZ(12,"mat-grid-tile",5),t.TgZ(13,"mat-label",7),t._uU(14,"Certificado de nacimiento, extendida recientemente (seis meses)."),t.qZA(),t.qZA(),t.TgZ(15,"mat-grid-tile",5),t._UZ(16,"mat-checkbox"),t.qZA(),t.TgZ(17,"mat-grid-tile",5),t.TgZ(18,"mat-form-field",8),t.TgZ(19,"mat-label"),t._uU(20,"Justificaci\xf3n"),t.qZA(),t._UZ(21,"textarea",9),t.qZA(),t.qZA(),t.TgZ(22,"mat-grid-tile",5),t.TgZ(23,"mat-label",7),t._uU(24," Fotocopia del documento personal de identificaci\xf3n -DPI- (si es mayor de edad). "),t.qZA(),t.qZA(),t.TgZ(25,"mat-grid-tile",5),t._UZ(26,"mat-checkbox"),t.qZA(),t.TgZ(27,"mat-grid-tile",5),t.TgZ(28,"mat-form-field",8),t.TgZ(29,"mat-label"),t._uU(30,"Justificaci\xf3n"),t.qZA(),t._UZ(31,"textarea",9),t.qZA(),t.qZA(),t.TgZ(32,"mat-grid-tile",5),t.TgZ(33,"mat-label",7),t._uU(34," Constancia del Registro Tributario Unificado -RTU- reciente. "),t.qZA(),t.qZA(),t.TgZ(35,"mat-grid-tile",5),t._UZ(36,"mat-checkbox"),t.qZA(),t.TgZ(37,"mat-grid-tile",5),t.TgZ(38,"mat-form-field",8),t.TgZ(39,"mat-label"),t._uU(40,"Justificaci\xf3n"),t.qZA(),t._UZ(41,"textarea",9),t.qZA(),t.qZA(),t.TgZ(42,"mat-grid-tile",5),t.TgZ(43,"mat-label",7),t._uU(44," Constancia de ingresos de las personas que sostienen y aportan econ\xf3micamente al n\xfacleo familiar. "),t.qZA(),t.qZA(),t.TgZ(45,"mat-grid-tile",5),t._UZ(46,"mat-checkbox"),t.qZA(),t.TgZ(47,"mat-grid-tile",5),t.TgZ(48,"mat-form-field",8),t.TgZ(49,"mat-label"),t._uU(50,"Justificaci\xf3n"),t.qZA(),t._UZ(51,"textarea",9),t.qZA(),t.qZA(),t.TgZ(52,"mat-grid-tile",5),t.TgZ(53,"mat-label",7),t._uU(54," Constancia del Registro Tributario Unificado -RTU- de ambos padres, extendido recientemente (seis meses). "),t.qZA(),t.qZA(),t.TgZ(55,"mat-grid-tile",5),t._UZ(56,"mat-checkbox"),t.qZA(),t.TgZ(57,"mat-grid-tile",5),t.TgZ(58,"mat-form-field",8),t.TgZ(59,"mat-label"),t._uU(60,"Justificaci\xf3n"),t.qZA(),t._UZ(61,"textarea",9),t.qZA(),t.qZA(),t.TgZ(62,"mat-grid-tile",5),t.TgZ(63,"mat-label",7),t._uU(64," Constancia de No tener sanciones en la Unidad Acad\xe9mica a la que pertenece, extendida por el Secretario Acad\xe9mico o autoridad que corresponda. "),t.qZA(),t.qZA(),t.TgZ(65,"mat-grid-tile",5),t._UZ(66,"mat-checkbox"),t.qZA(),t.TgZ(67,"mat-grid-tile",5),t.TgZ(68,"mat-form-field",8),t.TgZ(69,"mat-label"),t._uU(70,"Justificaci\xf3n"),t.qZA(),t._UZ(71,"textarea",9),t.qZA(),t.qZA(),t.TgZ(72,"mat-grid-tile",5),t.TgZ(73,"mat-label",7),t._uU(74," Generar solicitud de beca e imprimirla en tama\xf1o oficio. "),t.qZA(),t.qZA(),t.TgZ(75,"mat-grid-tile",5),t._UZ(76,"mat-checkbox"),t.qZA(),t.TgZ(77,"mat-grid-tile",5),t.TgZ(78,"mat-form-field",8),t.TgZ(79,"mat-label"),t._uU(80,"Justificaci\xf3n"),t.qZA(),t._UZ(81,"textarea",9),t.qZA(),t.qZA(),t.qZA(),t.TgZ(82,"div",10),t.TgZ(83,"button",11),t._uU(84,"Denegar"),t.qZA(),t.TgZ(85,"button",12),t._uU(86,"Guardar Cambios"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(87,"mat-tab",13),t.TgZ(88,"div",3),t.TgZ(89,"mat-grid-list",4),t._UZ(90,"mat-grid-tile",5),t.TgZ(91,"mat-grid-tile",6),t._uU(92," Aprobar "),t.qZA(),t.TgZ(93,"mat-grid-tile",6),t._uU(94," Devolver Archivo "),t.qZA(),t.TgZ(95,"mat-grid-tile",5),t.TgZ(96,"mat-label",7),t._uU(97,"Fotograf\xedas de la casa."),t.qZA(),t.qZA(),t.TgZ(98,"mat-grid-tile",5),t._UZ(99,"mat-checkbox"),t.qZA(),t.TgZ(100,"mat-grid-tile",5),t.TgZ(101,"mat-form-field",8),t.TgZ(102,"mat-label"),t._uU(103,"Justificaci\xf3n"),t.qZA(),t._UZ(104,"textarea",9),t.qZA(),t.qZA(),t.TgZ(105,"mat-grid-tile",5),t.TgZ(106,"mat-label",7),t._uU(107," Constancia de pr\xe9stamos. "),t.qZA(),t.qZA(),t.TgZ(108,"mat-grid-tile",5),t._UZ(109,"mat-checkbox"),t.qZA(),t.TgZ(110,"mat-grid-tile",5),t.TgZ(111,"mat-form-field",8),t.TgZ(112,"mat-label"),t._uU(113,"Justificaci\xf3n"),t.qZA(),t._UZ(114,"textarea",9),t.qZA(),t.qZA(),t.TgZ(115,"mat-grid-tile",5),t.TgZ(116,"mat-label",7),t._uU(117," Recibos de alquiler, agua, luz y tel\xe9fono. "),t.qZA(),t.qZA(),t.TgZ(118,"mat-grid-tile",5),t._UZ(119,"mat-checkbox"),t.qZA(),t.TgZ(120,"mat-grid-tile",5),t.TgZ(121,"mat-form-field",8),t.TgZ(122,"mat-label"),t._uU(123,"Justificaci\xf3n"),t.qZA(),t._UZ(124,"textarea",9),t.qZA(),t.qZA(),t.TgZ(125,"mat-grid-tile",5),t.TgZ(126,"mat-label",7),t._uU(127," Constancias m\xe9dicas. "),t.qZA(),t.qZA(),t.TgZ(128,"mat-grid-tile",5),t._UZ(129,"mat-checkbox"),t.qZA(),t.TgZ(130,"mat-grid-tile",5),t.TgZ(131,"mat-form-field",8),t.TgZ(132,"mat-label"),t._uU(133,"Justificaci\xf3n"),t.qZA(),t._UZ(134,"textarea",9),t.qZA(),t.qZA(),t.qZA(),t.TgZ(135,"div",10),t.TgZ(136,"button",11),t._uU(137,"Denegar"),t.qZA(),t.TgZ(138,"button",12),t._uU(139,"Guardar Cambios"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(140,"mat-tab",14),t.TgZ(141,"div",3),t.TgZ(142,"mat-grid-list",4),t.TgZ(143,"mat-grid-tile",5),t.TgZ(144,"mat-label",7),t._uU(145," Informe Domiciliar (Ya firmado) "),t.qZA(),t.qZA(),t.TgZ(146,"mat-grid-tile",5),t.TgZ(147,"button",15),t._uU(148,"Seleccionar archivo"),t.qZA(),t.qZA(),t.TgZ(149,"mat-grid-tile",5),t.TgZ(150,"mat-label",7),t._uU(151," Informe Di\xe1gnostico (Ya firmado) "),t.qZA(),t.qZA(),t.TgZ(152,"mat-grid-tile",5),t.TgZ(153,"button",15),t._uU(154,"Seleccionar archivo"),t.qZA(),t.qZA(),t.TgZ(155,"mat-grid-tile",5),t.TgZ(156,"mat-label",7),t._uU(157," Expediente Completo "),t.qZA(),t.qZA(),t.TgZ(158,"mat-grid-tile",5),t.TgZ(159,"button",15),t._uU(160,"Seleccionar archivo"),t.qZA(),t.qZA(),t.TgZ(161,"mat-grid-tile",5),t._UZ(162,"mat-label",7),t.qZA(),t.TgZ(163,"mat-grid-tile",5),t.TgZ(164,"button",16),t._uU(165,"Enviar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(2),t.hij("Solicitud ",i.solicitud.id,""),t.xp6(1),t.Q6J("color","accent"),t.xp6(4),t.Q6J("colspan",4)("rowspan",2),t.xp6(1),t.Q6J("colspan",1)("rowspan",2),t.xp6(2),t.Q6J("colspan",2)("rowspan",2),t.xp6(2),t.Q6J("colspan",4)("rowspan",3),t.xp6(3),t.Q6J("colspan",1)("rowspan",3),t.xp6(2),t.Q6J("colspan",2)("rowspan",3),t.xp6(5),t.Q6J("colspan",4)("rowspan",3),t.xp6(3),t.Q6J("colspan",1)("rowspan",3),t.xp6(2),t.Q6J("colspan",2)("rowspan",3),t.xp6(5),t.Q6J("colspan",4)("rowspan",3),t.xp6(3),t.Q6J("colspan",1)("rowspan",3),t.xp6(2),t.Q6J("colspan",2)("rowspan",3),t.xp6(5),t.Q6J("colspan",4)("rowspan",3),t.xp6(3),t.Q6J("colspan",1)("rowspan",3),t.xp6(2),t.Q6J("colspan",2)("rowspan",3),t.xp6(5),t.Q6J("colspan",4)("rowspan",3),t.xp6(3),t.Q6J("colspan",1)("rowspan",3),t.xp6(2),t.Q6J("colspan",2)("rowspan",3),t.xp6(5),t.Q6J("colspan",4)("rowspan",3),t.xp6(3),t.Q6J("colspan",1)("rowspan",3),t.xp6(2),t.Q6J("colspan",2)("rowspan",3),t.xp6(5),t.Q6J("colspan",4)("rowspan",3),t.xp6(3),t.Q6J("colspan",1)("rowspan",3),t.xp6(2),t.Q6J("colspan",2)("rowspan",3),t.xp6(13),t.Q6J("colspan",4)("rowspan",2),t.xp6(1),t.Q6J("colspan",1)("rowspan",2),t.xp6(2),t.Q6J("colspan",2)("rowspan",2),t.xp6(2),t.Q6J("colspan",4)("rowspan",3),t.xp6(3),t.Q6J("colspan",1)("rowspan",3),t.xp6(2),t.Q6J("colspan",2)("rowspan",3),t.xp6(5),t.Q6J("colspan",4)("rowspan",3),t.xp6(3),t.Q6J("colspan",1)("rowspan",3),t.xp6(2),t.Q6J("colspan",2)("rowspan",3),t.xp6(5),t.Q6J("colspan",4)("rowspan",3),t.xp6(3),t.Q6J("colspan",1)("rowspan",3),t.xp6(2),t.Q6J("colspan",2)("rowspan",3),t.xp6(5),t.Q6J("colspan",4)("rowspan",3),t.xp6(3),t.Q6J("colspan",1)("rowspan",3),t.xp6(2),t.Q6J("colspan",2)("rowspan",3),t.xp6(13),t.Q6J("colspan",5)("rowspan",3),t.xp6(3),t.Q6J("colspan",2)("rowspan",3),t.xp6(3),t.Q6J("colspan",5)("rowspan",3),t.xp6(3),t.Q6J("colspan",2)("rowspan",3),t.xp6(3),t.Q6J("colspan",5)("rowspan",3),t.xp6(3),t.Q6J("colspan",2)("rowspan",3),t.xp6(3),t.Q6J("colspan",5)("rowspan",3),t.xp6(2),t.Q6J("colspan",2)("rowspan",3))},directives:[g.SP,g.uX,u.Il,u.DX,l.hX,At.oG,l.KE,_.Nt,f.lW],styles:[".contenedor[_ngcontent-%COMP%]{margin:90px 40px 30px}.container[_ngcontent-%COMP%]{padding-bottom:20px;margin-left:20px;margin-right:20px}.full-width[_ngcontent-%COMP%]{width:90%;padding-top:20px}.opciones[_ngcontent-%COMP%]{width:100%;height:60px;display:flex;justify-content:flex-end;align-items:flex-end}"]}),e})();var T=r(4889),p=r(4449),U=r(4594);function qt(e,o){1&e&&t._UZ(0,"img",4)}function vt(e,o){1&e&&(t.TgZ(0,"span",16),t._uU(1," Secci\xf3n"),t._UZ(2,"br",17),t._uU(3," Socioecon\xf3mica"),t.qZA())}const ht=function(){return["/trabajador-social"]},Ct=function(){return["/trabajador-social/buscar"]},bt=function(){return["/login"]};let Ut=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-navbar"]],decls:35,vars:8,consts:[["autosize","",1,"main-container"],["mode","side","opened","true",1,"main-sidenav"],["drawer",""],[1,"titulo"],["src","./assets/img/favicon2.png"],["mat-subheader",""],["mat-list-item","",3,"routerLink"],["mat-list-icon",""],["mat-line",""],["mat-list-item","","routerLinkActive","active",3,"routerLink"],["id","push-bottom","mat-list-item","",3,"routerLink"],["color","primary",1,"navbar"],["src","./assets/img/favicon2.png",4,"ngIf"],["style","font-size: 14px; padding-left: 10px;",4,"ngIf"],["mat-icon-button","",3,"click"],[1,"contenido"],[2,"font-size","14px","padding-left","10px"],[2,"display","block","margin","-8px"]],template:function(a,i){if(1&a){const n=t.EpF();t.TgZ(0,"mat-drawer-container",0),t.TgZ(1,"mat-drawer",1,2),t.TgZ(3,"mat-nav-list"),t.TgZ(4,"div",3),t._UZ(5,"img",4),t.TgZ(6,"h3",5),t._uU(7," Secci\xf3n"),t._UZ(8,"br"),t._uU(9," Socioecon\xf3mica"),t.qZA(),t.qZA(),t.TgZ(10,"a",6),t.TgZ(11,"mat-icon",7),t._uU(12," home "),t.qZA(),t.TgZ(13,"p",8),t._uU(14," Inicio "),t.qZA(),t.qZA(),t.TgZ(15,"a",9),t.TgZ(16,"mat-icon",7),t._uU(17," search "),t.qZA(),t.TgZ(18,"p",8),t._uU(19," Buscar "),t.qZA(),t.qZA(),t.TgZ(20,"a",10),t.TgZ(21,"mat-icon",7),t._uU(22," logout "),t.qZA(),t.TgZ(23,"p",8),t._uU(24," Cerrar"),t._UZ(25,"br"),t._uU(26," Sesi\xf3n "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"mat-toolbar",11),t.YNc(28,qt,1,0,"img",12),t.YNc(29,vt,4,0,"span",13),t.TgZ(30,"button",14),t.NdJ("click",function(){return t.CHM(n),t.MAs(2).toggle()}),t.TgZ(31,"mat-icon"),t._uU(32,"menu"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"div",15),t._UZ(34,"router-outlet"),t.qZA(),t.qZA()}if(2&a){const n=t.MAs(2);t.xp6(10),t.Q6J("routerLink",t.DdM(5,ht)),t.xp6(5),t.Q6J("routerLink",t.DdM(6,Ct)),t.xp6(5),t.Q6J("routerLink",t.DdM(7,bt)),t.xp6(8),t.Q6J("ngIf",!n.opened),t.xp6(1),t.Q6J("ngIf",!n.opened)}},directives:[T.kh,T.jA,p.Hk,p.gs,p.Tg,s.yS,Z.Hw,p.Nh,v.X2,s.Od,U.Ye,q.O5,f.lW,s.lC],styles:[".main-container[_ngcontent-%COMP%]{width:100%;height:100%}.main-sidenav[_ngcontent-%COMP%]{min-width:180px!important;border-right:0 solid #eee}.titulo[_ngcontent-%COMP%]{background:#011627;color:#f6f7f8;height:64px;display:flex;align-items:center;justify-content:center;margin-top:-8px}.titulo[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{color:#f6f7f8}#push-bottom[_ngcontent-%COMP%]{position:absolute;bottom:0}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.navbar[_ngcontent-%COMP%]{flex-direction:row;position:fixed;z-index:1000!important;display:flex;align-items:center}.contenido[_ngcontent-%COMP%]{margin-top:66px}a.mat-list-item.active[_ngcontent-%COMP%]{background:rgba(0,0,0,.04)}"]}),e})();const Pt=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-trabajador-social"]],decls:1,vars:0,template:function(a,i){1&a&&t._UZ(0,"app-navbar")},directives:[Ut],styles:[""]}),e})(),children:[{path:"",component:Tt},{path:"solicitud",component:xt},{path:"buscar",component:j}]}];let Rt=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.Bz.forChild(Pt)],s.Bz]}),e})();var wt=r(5579),Jt=r(5113);let Qt=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[q.ez,Rt,wt.m,Jt.xu,U.g0,f.ot,T.SJ,Z.Ps,p.ie]]}),e})()}}]);