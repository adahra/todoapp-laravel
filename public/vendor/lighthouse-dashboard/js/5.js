/*! For license information please see 5.js.LICENSE.txt?id=f0c3362bdae2706dcf97 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{NF9v:function(t,e,a){"use strict";var n=a("tQyR"),i={props:{full:{type:Boolean,default:!1},field:{type:Object},highlight:{type:String,default:""}},components:{TextHighlight:n.a}},s=(a("rVSg"),a("KHd+")),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("text-highlight",{staticClass:"font-weight-bold",attrs:{queries:[t.highlight]}},[t._v(t._s(t.field.name))]),t._v(" "),t.field.args?a("span",[t.full?a("span",[t._v("\n      (\n      "),a("div",{staticClass:"ml-5",domProps:{innerHTML:t._s(t.field.args)}}),t._v(")\n    ")]):a("span",[t._v("(...)")])]):t._e(),t._v(" "),t.field.type_def?a("span",{staticClass:"blue--text"},[t._v(": "+t._s(t.field.type_def))]):t._e(),t._v(" "),a("div",{staticClass:"text-caption grey--text pt-1",domProps:{innerHTML:t._s(t.field.description)}})],1)}),[],!1,null,"6b105f36",null);e.a=r.exports},O15G:function(t,e,a){var n=a("XZQw");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(t.exports=n.locals)},OvGh:function(t,e,a){"use strict";a.r(e);var n=a("o0o1"),i=a.n(n),s=a("LvDl"),r=a.n(s);var l=function(t){for(var e=[],a=1;a<arguments.length;a++)e[a-1]=arguments[a];return function(){return e.reduce((function(t,e){return e(t)}),t.apply(null,arguments))}},o=function(t){return String.prototype.normalize?t.normalize("NFKD").replace(/[\u0080-\uF8FF]/g,""):t},c=function(t){return t.replace(/\s+/g," ").trim()},u=l((function(t){return Array.isArray(t)?t.join(" "):t}),o,c,(function(t){return t.toLocaleLowerCase()})),v=a("tQyR"),d=a("VDrJ"),f=a("NF9v"),p=a("vDqi"),m=a.n(p);function h(t,e,a,n,i,s,r){try{var l=t[s](r),o=l.value}catch(t){return void a(t)}l.done?e(o):Promise.resolve(o).then(n,i)}var _={props:["field","filters"],components:{Field:f.a},data:function(){return{loading:!1,sumary:[],table:{headers:[{text:"Operation",value:"field.name",sortable:!1},{text:"Requests",value:"total_requests",sortable:!1,align:"end"}]}}},watch:{field:function(){this.load()}},methods:{totalRequestByClient:function(t){return r()(t.metrics).sumBy("total_requests")},load:function(){var t,e=this;return(t=i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,m.a.get("/lighthouse-dashboard/fields/".concat(e.field.id,"/sumary"),{params:e.filters.form});case 3:a=t.sent,e.loading=!1,e.sumary=a.data;case 6:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(n,i){var s=t.apply(e,a);function r(t){h(s,n,i,r,l,"next",t)}function l(t){h(s,n,i,r,l,"throw",t)}r(void 0)}))})()},close:function(){this.$emit("close")}}},g=a("KHd+"),y=Object(g.a)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("h2",[t._v("Sumary")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.close()}}},[a("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),a("v-card-subtitle",{staticClass:"pt-5"},[a("field",{attrs:{field:t.field,full:!0}}),t._v(" "),a("v-divider",{staticClass:"my-5"})],1),t._v(" "),a("v-card-text",[a("h3",{staticClass:"black--text"},[t._v("Clients & Fields")]),t._v(" "),a("p",{staticClass:"mt-3 mb-8"},[t._v("Where that field is used?")]),t._v(" "),t.loading?a("div",{staticClass:"text-center"},[a("v-progress-circular",{attrs:{indeterminate:""}})],1):t._e(),t._v(" "),!t.loading&&t.sumary.length?a("v-expansion-panels",t._l(t.sumary,(function(e){return a("v-expansion-panel",{key:e.id},[a("v-expansion-panel-header",{staticClass:"grey lighten-5"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",[t._v(t._s(e.username))]),t._v(" "),a("v-col",{staticClass:"text-right"},[a("v-chip",{attrs:{"x-small":""}},[t._v(t._s(t.totalRequestByClient(e)))])],1)],1)],1),t._v(" "),a("v-expansion-panel-content",[a("v-data-table",{attrs:{headers:t.table.headers,items:e.metrics,loading:t.loading,"hide-default-footer":""},scopedSlots:t._u([{key:"item.total_requests",fn:function(e){var a=e.item;return[t._v("\n              "+t._s(t._f("numeral")(a.total_requests,0))+"\n            ")]}}],null,!0)})],1)],1)})),1):t._e(),t._v(" "),t.sumary.length||t.loading?t._e():a("div",[a("v-alert",{attrs:{icon:"mdi-alert",text:"",dense:""}},[t._v("\n        No operations on selected range.\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports;function x(t,e,a,n,i,s,r){try{var l=t[s](r),o=l.value}catch(t){return void a(t)}l.done?e(o):Promise.resolve(o).then(n,i)}var b={props:["types","start_date","range","clients","selectedClients"],components:{TextHighlight:v.a,FieldSumary:y,Field:f.a,Filters:d.a},data:function(){return{loading:!1,search:"",selectedField:{},display:{navigation:!1,component:"filters"},filters:{form:{start_date:this.start_date||"today",range:this.range||[],clients:this.selectedClients||[]},options:{clients:this.clients||[]}},table:{headers:[{text:"Field",value:"name",sortable:!1},{text:"Requests",value:"total_requests",sortable:!1,align:"end"}]}}},computed:{filteredTypes:function(){var t=this;return""===this.search?this.types:r()(this.types).filter((function(e){return t.containsText(e,t.search)})).value()}},methods:{filter:function(){var t,e=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$inertia.replace("/lighthouse-dashboard/types",{data:e.filters.form,replace:!0,preserveScroll:!0});case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(n,i){var s=t.apply(e,a);function r(t){x(s,n,i,r,l,"next",t)}function l(t){x(s,n,i,r,l,"throw",t)}r(void 0)}))})()},selectField:function(t){this.selectedField=t,this.setNavigationComponent("sumary"),this.displayNavigation()},containsText:function(t,e){var a=r()(t.fields).map("name").join(" ");return u(t.name).includes(u(e))||u(a).includes(u(e))},setNavigationComponent:function(t){this.display.component=t,this.displayNavigation()},hideNavigation:function(){this.display.navigation=!1},displayNavigation:function(){this.display.navigation=!0}}},C=Object(g.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{staticClass:"pt-2",attrs:{app:"",color:"white",elevation:"1"}},[a("v-row",{staticClass:"mb-5",attrs:{align:"center"}},[a("v-col",[a("h2",[a("v-icon",{attrs:{left:"",color:"black"}},[t._v("mdi-shape-outline")]),t._v("Types")],1)]),t._v(" "),a("v-col",{staticClass:"text-right",attrs:{cols:"3"}},[a("v-text-field",{attrs:{outlined:"","prepend-inner-icon":"mdi-magnify",label:"Type or Field ...","background-color":"white",autocomplete:"off",dense:"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("v-col",{staticClass:"text-right primary--text",attrs:{cols:"auto"}},[a("v-icon",{staticClass:"mb-1 primary--text"},[t._v("mdi-clock-outline")]),t._v("\n        "+t._s(t.filters.form.start_date)+"\n        "),a("v-btn",{staticClass:"ml-3",attrs:{color:"primary",fab:"","x-small":"",depressed:"",dark:""},on:{click:function(e){return t.setNavigationComponent("filters")}}},[a("v-icon",[t._v("mdi-filter-variant")])],1)],1)],1)],1),t._v(" "),t._l(t.filteredTypes,(function(e){return a("v-data-table",{key:e.id,staticClass:"elevation-1 row-pointer mb-8",attrs:{headers:t.table.headers,items:e.fields,"hide-default-footer":""},on:{"click:row":t.selectField},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"pa-3"},[a("text-highlight",{staticClass:"title",attrs:{queries:[t.search]}},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),a("div",{staticClass:"text-caption grey--text"},[t._v(t._s(e.description))])],1)]},proxy:!0},{key:"item.name",fn:function(e){var n=e.item;return[a("field",{staticClass:"py-4",attrs:{field:n,highlight:t.search}})]}},{key:"item.total_requests",fn:function(e){var a=e.item;return[t._v("\n      "+t._s(t._f("numeral")(a.total_requests,0))+"\n    ")]}}],null,!0)})})),t._v(" "),0===t.filteredTypes.length?a("div",{staticClass:"text-center grey--text"},[a("v-icon",{attrs:{color:"grey","x-large":""}},[t._v("mdi-weather-windy")]),t._v(" "),a("h3",{staticClass:"mt-3"},[t._v("Oops! Nothing here.")]),t._v(" "),0===t.types.length?a("p",{staticClass:"text-caption mt-3"},[t._v("\n      Make your first request to this Schema.\n    ")]):a("p",{staticClass:"text-caption mt-3"},[t._v("\n      It searchs only on\n      "),a("strong",[t._v("Types")]),t._v(" and "),a("strong",[t._v("Fields")]),t._v(".\n    ")])],1):t._e(),t._v(" "),a("v-navigation-drawer",{staticClass:"pa-5",attrs:{right:"",app:"",width:"380"},model:{value:t.display.navigation,callback:function(e){t.$set(t.display,"navigation",e)},expression:"display.navigation"}},[a("filters",{directives:[{name:"show",rawName:"v-show",value:"filters"===t.display.component,expression:"display.component === 'filters'"}],attrs:{filters:t.filters},on:{filter:function(e){return t.filter()},close:function(e){return t.hideNavigation()}}}),t._v(" "),a("field-sumary",{directives:[{name:"show",rawName:"v-show",value:"sumary"===t.display.component,expression:"display.component === 'sumary'"}],attrs:{field:t.selectedField,filters:t.filters},on:{close:function(e){return t.hideNavigation()}}})],1),t._v(" "),a("v-overlay",{attrs:{value:t.loading}},[a("v-progress-circular",{attrs:{indeterminate:""}})],1)],2)}),[],!1,null,null,null);e.default=C.exports},VDrJ:function(t,e,a){"use strict";var n={props:["filters"],data:function(){return{options:[{value:"today",label:"Today"},{value:"yesterday",label:"Yesterday"},{value:"last week",label:"Last week"},{value:"last month",label:"Last Month"},{value:"in custom range",label:"In custom range"}]}},computed:{dateRangeText:function(){return this.filters.form.range.join(" ~ ")},isCustomRange:function(){return"in custom range"===this.filters.form.start_date}},methods:{filter:function(){this.isCustomRange&&this.filters.form.range.length<2||(this.isCustomRange||(this.filters.form.range=[]),this.$emit("filter"))},uncheckAll:function(){this.filters.form.clients.length&&(this.filters.form.clients=[]),this.filter()}}},i=a("KHd+"),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("h3",[t._v("Filters")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("close")}}},[a("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),a("v-card-text",{staticClass:"mt-5"},[a("div",{staticClass:"font-weight-black text-caption"},[t._v("STARTING FROM")]),t._v(" "),a("v-radio-group",{on:{change:function(e){return t.filter()}},model:{value:t.filters.form.start_date,callback:function(e){t.$set(t.filters.form,"start_date",e)},expression:"filters.form.start_date"}},t._l(t.options,(function(t){return a("v-radio",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),t.isCustomRange?a("div",[a("v-date-picker",{staticClass:"elevation-2",attrs:{max:(new Date).toISOString(),"show-current":!1,"no-title":"",range:""},on:{change:function(e){return t.filter()}},model:{value:t.filters.form.range,callback:function(e){t.$set(t.filters.form,"range",e)},expression:"filters.form.range"}}),t._v(" "),a("div",{staticClass:"py-3 font-weight-bold"},[t.dateRangeText?a("v-icon",{staticClass:"mb-1",attrs:{small:"",left:""}},[t._v("mdi-selection-drag")]):t._e(),t._v("\n        "+t._s(t.dateRangeText)+"\n      ")],1)],1):t._e(),t._v(" "),a("div",{staticClass:"font-weight-black text-caption mt-5 mb-5"},[t._v("CLIENTS")]),t._v(" "),a("v-btn",{attrs:{"x-small":"",outlined:""},on:{click:function(e){return t.uncheckAll()}}},[t._v("uncheck all")]),t._v(" "),t._l(t.filters.options.clients,(function(e){return a("v-checkbox",{key:e.id,attrs:{label:e.username,value:e.id,"hide-details":"",multiple:""},on:{change:function(e){return t.filter()}},model:{value:t.filters.form.clients,callback:function(e){t.$set(t.filters.form,"clients",e)},expression:"filters.form.clients"}})}))],2)],1)}),[],!1,null,null,null);e.a=s.exports},XZQw:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"span[data-v-6b105f36] .arg-name{color:indigo}span[data-v-6b105f36] .arg-type{color:orange}",""])},rVSg:function(t,e,a){"use strict";var n=a("O15G");a.n(n).a}}]);
//# sourceMappingURL=5.js.map?id=f0c3362bdae2706dcf97