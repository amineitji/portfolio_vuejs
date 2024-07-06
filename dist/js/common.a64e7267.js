"use strict";(self["webpackChunkvue_black_dashboard"]=self["webpackChunkvue_black_dashboard"]||[]).push([[76],{5588:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{ref:"card",staticClass:"card"},[t._m(0),e("div",{staticClass:"card-body"},[e("img",{ref:"cvImage",staticClass:"cv-image",attrs:{src:"/img/cv_portfolio_fr.png",alt:"CV"},on:{load:t.adjustCardWidth}})])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("h5",{staticClass:"title"},[t._v("CV")]),e("p",[t._v(" Vous pouvez me contacter directement sur mon "),e("a",{attrs:{href:"https://www.linkedin.com/in/amine-itji-5a8696268/"}},[t._v("LinkedIn - Amine ITJI")])])])}],l={methods:{adjustCardWidth(){const t=this.$refs.cvImage,e=this.$refs.card;if(t&&e){const a=t.naturalWidth/t.naturalHeight,s=window.innerHeight*a;e.style.width=`${s}px`}}},mounted(){window.addEventListener("resize",this.adjustCardWidth)},beforeDestroy(){window.removeEventListener("resize",this.adjustCardWidth)}},r=l,o=a(1656),n=(0,o.A)(r,s,i,!1,null,null,null),c=n.exports},9408:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("card",{attrs:{type:"plain",title:"Google Maps"}},[e("div",{staticClass:"map",attrs:{id:"map"}})])},i=[],l={mounted(){let t=new window.google.maps.LatLng(40.748817,-73.985428),e={zoom:13,center:t,scrollwheel:!1,styles:[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#9d2a80"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#9d2a80"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}]},a=new window.google.maps.Map(document.getElementById("map"),e),s=new window.google.maps.marker.AdvancedMarkerElement({position:t,title:"Hello World!"});s.setMap(a)}},r=l,o=a(1656),n=(0,o.A)(r,s,i,!1,null,null,null),c=n.exports},5013:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("card",[e("h4",{attrs:{slot:"header"},slot:"header"},[t._v("Notifications Style")]),e("base-alert",{attrs:{type:"info"}},[e("span",[t._v("This is a plain notification")])]),e("base-alert",{attrs:{type:"info",dismissible:""}},[e("span",[t._v("This is a plain notification")])]),e("base-alert",{attrs:{type:"info",dismissible:"","with-icon":""}},[e("span",{staticClass:"tim-icons icon-bell-55",attrs:{"data-notify":"icon"}}),e("span",{attrs:{"data-notify":"message"}},[t._v("This is a notification with close button and icon.")])]),e("base-alert",{attrs:{type:"info",dismissible:"","with-icon":""}},[e("span",{staticClass:"tim-icons icon-bell-55",attrs:{"data-notify":"icon"}}),e("span",{attrs:{"data-notify":"message"}},[t._v("This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.")])])],1)],1),e("div",{staticClass:"col-md-6"},[e("card",[e("h4",{attrs:{slot:"header"},slot:"header"},[t._v("Notifications states")]),e("base-alert",{attrs:{type:"primary",dismissible:""}},[e("span",[e("b",[t._v(" Primary - ")]),t._v(' This is a regular notification made with ".alert-primary"')])]),e("base-alert",{attrs:{type:"info",dismissible:""}},[e("span",[e("b",[t._v(" Info - ")]),t._v(' This is a regular notification made with ".alert-info"')])]),e("base-alert",{attrs:{type:"success",dismissible:""}},[e("span",[e("b",[t._v(" Success - ")]),t._v(' This is a regular notification made with ".alert-success"')])]),e("base-alert",{attrs:{type:"warning",dismissible:""}},[e("span",[e("b",[t._v(" Warning - ")]),t._v(' This is a regular notification made with ".alert-warning"')])]),e("base-alert",{attrs:{type:"danger",dismissible:""}},[e("span",[e("b",[t._v(" Danger - ")]),t._v(' This is a regular notification made with ".alert-danger"')])])],1)],1),e("div",{staticClass:"col-md-12"},[e("card",[e("div",{staticClass:"places-buttons"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 ml-auto mr-auto text-center"},[e("h4",{staticClass:"card-title"},[t._v(" Notifications Places "),e("p",{staticClass:"category"},[t._v("Click to view notifications")])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 ml-auto mr-auto"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("base-button",{attrs:{type:"primary",block:""},on:{click:function(e){return t.notifyVue("top","left")}}},[t._v("Top Left")])],1),e("div",{staticClass:"col-md-4"},[e("base-button",{attrs:{type:"primary",block:""},on:{click:function(e){return t.notifyVue("top","center")}}},[t._v("Top Center")])],1),e("div",{staticClass:"col-md-4"},[e("base-button",{attrs:{type:"primary",block:""},on:{click:function(e){return t.notifyVue("top","right")}}},[t._v("Top Right")])],1)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 ml-auto mr-auto"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("base-button",{attrs:{type:"primary",block:""},on:{click:function(e){return t.notifyVue("bottom","left")}}},[t._v("Bottom Left")])],1),e("div",{staticClass:"col-md-4"},[e("base-button",{attrs:{type:"primary",block:""},on:{click:function(e){return t.notifyVue("bottom","center")}}},[t._v("Bottom Center")])],1),e("div",{staticClass:"col-md-4"},[e("base-button",{attrs:{type:"primary",block:""},on:{click:function(e){return t.notifyVue("bottom","right")}}},[t._v("Bottom Right")])],1)])])])])])],1)])},i=[],l=function(){var t=this;t._self._c;return t._m(0)},r=[function(){var t=this,e=t._self._c;return e("div",[t._v(" Welcome to "),e("b",[t._v("Black Dashboard")]),t._v(" - a beautiful freebie for every web developer. ")])}],o={name:"notification-template"},n=o,c=a(1656),d=(0,c.A)(n,l,r,!1,null,null,null),u=d.exports,p=a(5912),m={components:{BaseAlert:p.Yq},data(){return{type:["","info","success","warning","danger"],notifications:{topCenter:!1}}},methods:{notifyVue(t,e){const a=Math.floor(4*Math.random()+1);this.$notify({component:u,icon:"tim-icons icon-bell-55",horizontalAlign:e,verticalAlign:t,type:this.type[a],timeout:0})}}},h=m,y=(0,c.A)(h,s,i,!1,null,null,null),v=y.exports},4643:function(t,e,a){a.r(e),a.d(e,{default:function(){return C}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8"},[e("edit-profile-form",{attrs:{model:t.model}})],1),e("div",{staticClass:"col-md-4"},[e("user-card",{attrs:{user:t.user}})],1)])},i=[],l=function(){var t=this,e=t._self._c;return e("div",{ref:"card",staticClass:"card"},[t._m(0),e("div",{staticClass:"card-body"},[e("img",{ref:"cvImage",staticClass:"cv-image",attrs:{src:"/img/cv_portfolio_fr.png",alt:"CV"},on:{load:t.adjustCardWidth}})])])},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("h5",{staticClass:"title"},[t._v("CV")]),e("p",[t._v(" Vous pouvez me contacter directement sur mon "),e("a",{attrs:{href:"https://www.linkedin.com/in/amine-itji-5a8696268/"}},[t._v("LinkedIn - Amine ITJI")])])])}],o={methods:{adjustCardWidth(){const t=this.$refs.cvImage,e=this.$refs.card;if(t&&e){const a=t.naturalWidth/t.naturalHeight,s=window.innerHeight*a;e.style.width=`${s}px`}}},mounted(){window.addEventListener("resize",this.adjustCardWidth)},beforeDestroy(){window.removeEventListener("resize",this.adjustCardWidth)}},n=o,c=a(1656),d=(0,c.A)(n,l,r,!1,null,null,null),u=d.exports,p=function(){var t=this,e=t._self._c;return e("card",{attrs:{type:"user"}},[e("p",{staticClass:"card-text"}),e("div",{staticClass:"author"},[e("div",{staticClass:"block block-one"}),e("div",{staticClass:"block block-two"}),e("div",{staticClass:"block block-three"}),e("div",{staticClass:"block block-four"}),e("a",{staticClass:"user-link",attrs:{href:"#"}},[e("img",{staticClass:"avatar",attrs:{src:"img/anime3.png",alt:"..."}}),e("h5",{staticClass:"title"},[t._v(t._s(t.user.fullName))])]),e("p",{staticClass:"description"},[t._v(" "+t._s(t.user.title)+" ")])]),e("p"),e("p",{staticClass:"card-description"},[t._v(" "+t._s(t.user.description)+" ")]),e("div",{staticClass:"button-container",attrs:{slot:"footer"},slot:"footer"},[e("base-button",{attrs:{tag:"a",href:"https://www.linkedin.com/in/amine-itji-5a8696268/",target:"_blank"}},[e("i",{staticClass:"fab fa-linkedin"})]),e("base-button",{attrs:{tag:"a",href:"https://github.com/amineitji",target:"_blank"}},[e("i",{staticClass:"fab fa-github"})]),e("base-button",{attrs:{tag:"a",href:"https://mail.google.com/mail/u/amineitji@gmail.com/?view=cm&to=amineitji@gmail.com",target:"_blank"}},[e("i",{staticClass:"fab fa-google-plus"})])],1)])},m=[],h={props:{user:{type:Object,default:()=>({})}}},y=h,v=(0,c.A)(y,p,m,!1,null,null,null),f=v.exports,b={components:{EditProfileForm:u,UserCard:f},data(){return{user:{fullName:"Amine ITJI",title:"Master 1 Informatique",description:"À la recherche de nouvelles expériences pour mettre mes compétences en action. Compétent en C++, Java, Python et JavaScript. Maîtrise de Maven, Django et Vue.js. Habileté avancée avec un terminal Linux. Familier avec la méthode Agile et GitHub. Capacité d'adaptation et d'écoute.",contact:{phone:"+33 7 82 29 36 20",email:"amineitji@gmail.com",linkedin:"https://www.linkedin.com/in/amine-itji-5a8696268/",github:"https://github.com/amineitji",googlePlus:"https://plus.google.com/your-profile-url"}}}}},g=b,_=(0,c.A)(g,s,i,!1,null,null,null),C=_.exports},4325:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("card",{attrs:{title:t.table1.title}},[e("div",{staticClass:"table-responsive"},[e("base-table",{attrs:{data:t.table1.data,columns:t.table1.columns,"thead-classes":"text-primary"}})],1)])],1),e("div",{staticClass:"col-12"},[e("card",{staticClass:"card-plain"},[e("div",{staticClass:"table-full-width table-responsive"},[e("base-table",{attrs:{title:t.table2.title,"sub-title":t.table2.subTitle,data:t.table2.data,columns:t.table2.columns}})],1)])],1)])},i=[],l=a(5912);const r=["Name","Country","City","Salary"],o=[{id:1,name:"Dakota Rice",salary:"$36.738",country:"Niger",city:"Oud-Turnhout"},{id:2,name:"Minerva Hooper",salary:"$23,789",country:"Curaçao",city:"Sinaai-Waas"},{id:3,name:"Sage Rodriguez",salary:"$56,142",country:"Netherlands",city:"Baileux"},{id:4,name:"Philip Chaney",salary:"$38,735",country:"Korea, South",city:"Overland Park"},{id:5,name:"Doris Greene",salary:"$63,542",country:"Malawi",city:"Feldkirchen in Kärnten"},{id:6,name:"Mason Porter",salary:"$98,615",country:"Chile",city:"Gloucester"},{id:7,name:"Jon Porter",salary:"$78,615",country:"Portugal",city:"Gloucester"}];var n={components:{BaseTable:l.WE},data(){return{table1:{title:"Simple Table",columns:[...r],data:[...o]},table2:{title:"Table on Plain Background",columns:[...r],data:[...o]}}}},c=n,d=a(1656),u=(0,d.A)(c,s,i,!1,null,null,null),p=u.exports},7692:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var s=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header mb-5"},[e("h5",{staticClass:"card-category"},[t._v("Black Table Heading")]),e("h3",{staticClass:"card-title"},[t._v("Created using Poppins Font Family")])]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"typography-line"},[e("h1",[e("span",[t._v("Header 1")]),t._v("The Life of Black Dashboard")])]),e("div",{staticClass:"typography-line"},[e("h2",[e("span",[t._v("Header 2")]),t._v("The Life of Black Dashboard")])]),e("div",{staticClass:"typography-line"},[e("h3",[e("span",[t._v("Header 3")]),t._v("The Life of Black Dashboard")])]),e("div",{staticClass:"typography-line"},[e("h4",[e("span",[t._v("Header 4")]),t._v("The Life of Black Dashboard")])]),e("div",{staticClass:"typography-line"},[e("h5",[e("span",[t._v("Header 5")]),t._v("The Life of Black Dashboard")])]),e("div",{staticClass:"typography-line"},[e("h6",[e("span",[t._v("Header 6")]),t._v("The Life of Black Dashboard")])]),e("div",{staticClass:"typography-line"},[e("p",[e("span",[t._v("Paragraph")]),t._v(" I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. ")])]),e("div",{staticClass:"typography-line"},[e("span",[t._v("Quote")]),e("blockquote",[e("p",{staticClass:"blockquote blockquote-primary"},[t._v(' "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at." '),e("br"),e("br"),e("small",[t._v(" - Noaa ")])])])]),e("div",{staticClass:"typography-line"},[e("span",[t._v("Muted Text")]),e("p",{staticClass:"text-muted"},[t._v(" I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ")])]),e("div",{staticClass:"typography-line"},[e("span",[t._v("Primary Text")]),e("p",{staticClass:"text-primary"},[t._v(" I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ")])]),e("div",{staticClass:"typography-line"},[e("span",[t._v("Info Text")]),e("p",{staticClass:"text-info"},[t._v(" I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ")])]),e("div",{staticClass:"typography-line"},[e("span",[t._v("Success Text")]),e("p",{staticClass:"text-success"},[t._v(" I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ")])]),e("div",{staticClass:"typography-line"},[e("span",[t._v("Warning Text")]),e("p",{staticClass:"text-warning"},[t._v(" I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ")])]),e("div",{staticClass:"typography-line"},[e("span",[t._v("Danger Text")]),e("p",{staticClass:"text-danger"},[t._v(" I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ")])]),e("div",{staticClass:"typography-line"},[e("h2",[e("span",[t._v("Small Tag")]),t._v(" Header with small subtitle "),e("br"),e("small",[t._v('Use "small" tag for the headers')])])]),e("div",{staticClass:"typography-line"},[e("span",[t._v("Lists")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"},[e("h5",[t._v("Unordered List")]),e("ul",[e("li",[t._v("List Item")]),e("li",[t._v("List Item")]),e("li",{staticClass:"list-unstyled"},[e("ul",[e("li",[t._v("List Item")]),e("li",[t._v("List Item")]),e("li",[t._v("List Item")])])]),e("li",[t._v("List Item")])])]),e("div",{staticClass:"col-md-3"},[e("h5",[t._v("Ordered List")]),e("ol",[e("li",[t._v("List Item")]),e("li",[t._v("List Item")]),e("li",[t._v("List item")]),e("li",[t._v("List Item")])])]),e("div",{staticClass:"col-md-3"},[e("h5",[t._v("Unstyled List")]),e("ul",{staticClass:"list-unstyled"},[e("li",[t._v("List Item")]),e("li",[t._v("List Item")]),e("li",[t._v("List item")]),e("li",[t._v("List Item")])])]),e("div",{staticClass:"col-md-3"},[e("h5",[t._v("Inline List")]),e("ul",{staticClass:"list-inline"},[e("li",{staticClass:"list-inline-item"},[t._v("List1")]),e("li",{staticClass:"list-inline-item"},[t._v("List2")]),e("li",{staticClass:"list-inline-item"},[t._v("List3")])])])])]),e("div",{staticClass:"typography-line"},[e("span",[t._v("Code")]),e("p",[t._v(" This is "),e("code",[t._v(".css-class-as-code")]),t._v(", an example of an inline code element. Wrap inline code within a "),e("code",[t._v(" <code>...</code>")]),t._v("tag. ")]),e("pre",[t._v("1. #This is an example of preformatted text."),e("br"),t._v("2. #Here is another line of code")])])])])])])}],l={},r=l,o=a(1656),n=(0,o.A)(r,s,i,!1,null,null,null),c=n.exports}}]);
//# sourceMappingURL=common.a64e7267.js.map