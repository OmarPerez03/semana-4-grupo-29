(function(t){function a(a){for(var s,c,l=a[0],n=a[1],o=a[2],u=0,m=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&m.push(i[c][0]),i[c]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);d&&d(a);while(m.length)m.shift()();return r.push.apply(r,o||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,l=1;l<e.length;l++){var n=e[l];0!==i[n]&&(s=!1)}s&&(r.splice(a--,1),t=c(c.s=e[0]))}return t}var s={},i={app:0},r=[];function c(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=s,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)c.d(e,s,function(a){return t[a]}.bind(null,s));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=a,l=l.slice();for(var o=0;o<l.length;o++)a(l[o]);var d=n;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("image-text"),e("carousel-section"),e("services-section"),e("div",{staticClass:"container-fluid",attrs:{id:"news"}},[e("news-section")],1),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-center mb-5"},t._l(t.Team,(function(t,a){return e("div",{key:a,staticClass:"col mt-5"},[e("team-card",{attrs:{member:t}})],1)})),0)]),e("final-section")],1)},r=[],c=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("a",{staticClass:"navbar-brand ",attrs:{href:"#"}},[e("img",{staticClass:"d-inline-block align-top",attrs:{src:"images/pista.png",width:"30 ",height:"30",alt:" ",loading:"lazy"}}),t._v(" BeautyPets ")]),e("div",{staticClass:"collapse navbar-collapse justify-content-end ",attrs:{id:"navbarNav "}},[e("ul",{staticClass:"navbar-nav "},[e("li",{staticClass:"nav-item active "},[e("a",{staticClass:"nav-link ",attrs:{href:"#services"}},[t._v("Servicios"),e("span",{staticClass:"sr-only "},[t._v("(current)")])])]),e("li",{staticClass:"nav-item "},[e("a",{staticClass:"nav-link ",attrs:{href:"#news"}},[t._v("Noticias")])]),e("li",{staticClass:"nav-item "},[e("a",{staticClass:"nav-link ",attrs:{href:"#team"}},[t._v("Equipo")])])])])])}],n={name:"ImageText"},o=n,d=e("2877"),u=Object(d["a"])(o,c,l,!1,null,null,null),m=u.exports,p=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"carousel slide carousel-fade",attrs:{id:"carousel-example-1z","data-ride":"carousel"}},[e("ol",{staticClass:"carousel-indicators"},[e("li",{staticClass:"active",attrs:{"data-target":"#carousel-example-1z","data-slide-to":"0"}}),e("li",{attrs:{"data-target":"#carousel-example-1z","data-slide-to":"1"}}),e("li",{attrs:{"data-target":"#carousel-example-1z","data-slide-to":"2"}})]),e("div",{staticClass:"carousel-inner",attrs:{role:"listbox"}},[e("div",{staticClass:"carousel-item active"},[e("img",{staticClass:"d-block w-100",attrs:{src:"images/catPortada2.jpg",alt:"First slide"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"images/dogPortada2.jpg",alt:"Second slide"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"images/gatoPortada.jpg",alt:"Third slide"}})])]),e("a",{staticClass:"carousel-control-prev",attrs:{href:"#carousel-example-1z",role:"button","data-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Previous")])]),e("a",{staticClass:"carousel-control-next",attrs:{href:"#carousel-example-1z",role:"button","data-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Next")])])])}],f={name:"CarouselSection"},b=f,g=Object(d["a"])(b,p,v,!1,null,null,null),C=g.exports,h=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid",attrs:{id:"services"}},[e("div",{staticClass:"row justify-content-center mb-5"},[e("div",{staticClass:"col-sm-6 col-xs-12 col-lg-4 mt-5"},[e("div",{staticClass:"card"},[e("div",{staticClass:"d-flex justify-content-center p-2"},[e("img",{attrs:{src:"images/ducha1.jpeg",alt:"ducha",width:"300"}})]),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Baño")]),e("p",{staticClass:"card-text"},[t._v(" Tu mascota recibirá un refrescante y delicioso baño a temperatura según el clima. Este servicio incluye revisión veterinaria de la piel, baño con productos especiales según su pelaje, secado, corte de uñas, enjuague bucal, cepillado, perfume y un juguete. ")])])])]),e("div",{staticClass:"col-sm-6 col-xs-12 col-lg-4 mt-5"},[e("div",{staticClass:"card"},[e("div",{staticClass:"d-flex justify-content-center p-2"},[e("img",{attrs:{src:"images/corte1.jpeg",alt:"corte",width:"300"}})]),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Corte")]),e("p",{staticClass:"card-text"},[t._v(" Tu mascota lucirá un hermoso look acorde a su raza y tus gustos. Este servicio incluye corte, cepillado y un lindo accesorio. ")])])])]),e("div",{staticClass:"col-sm-6 col-xs-12 col-lg-4 mt-5"},[e("div",{staticClass:"card"},[e("div",{staticClass:"d-flex justify-content-center p-2"},[e("img",{attrs:{src:"images/guarderia1.jpeg",alt:"ducha",width:"300"}})]),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Guardería")]),e("p",{staticClass:"card-text"},[t._v(" Diseñamos el mejor plan para recrear y relajar a tu mascota, acompañándola para que disfrute de una sana experiencia. Este servicio es completamente flexible para adaptarse a tu necesidad. ")])])])])])])}],x={name:"ServicesSection"},y=x,w=(e("efb3"),Object(d["a"])(y,h,_,!1,null,"abd5fed2",null)),j=w.exports,k=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"page-footer bg-secondary text-white pt-4",attrs:{id:"footer"}},[e("div",{staticClass:"container-fluid text-center text-md-left"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 mt-md-0 mt-3"},[e("h5",{staticClass:"text-uppercase font-weight-bold"},[t._v("Sobre nosotros")]),e("a",{attrs:{href:"https://github.com/lumrodriguezca/semana-2-26"}},[t._v(" Conoce nuestro repositorio ")])]),e("hr",{staticClass:"clearfix w-100 d-md-none pb-3"}),e("div",{staticClass:"col-md-6 mb-md-0 mb-3"},[e("h5",{staticClass:"text-uppercase font-weight-bold"},[t._v("Contacto")]),e("dl",{staticClass:"row"},[e("dt",{staticClass:"col-sm-3"},[e("a",{staticClass:"linkPerfil",attrs:{href:"https://github.com/lumrodriguezca",target:"_blank"}},[t._v("Luisa María")])]),e("dd",{staticClass:"col-sm-9"},[t._v("lumrodriguezca@unal.edu.co")]),e("dt",{staticClass:"col-sm-3"},[e("a",{staticClass:"linkPerfil",attrs:{href:"https://github.com/OmarPerez03",target:"_blank"}},[t._v("Omar Andrés")])]),e("dd",{staticClass:"col-sm-9"},[t._v("omar.andres.03.06@gmail.com")]),e("dt",{staticClass:"col-sm-3"},[e("a",{staticClass:"linkPerfil",attrs:{href:"https://github.com/Mao182532",target:"_blank"}},[t._v("Martha Cecilia")])]),e("dd",{staticClass:"col-sm-9"},[t._v("marthaceciliaortizmendez@gmail.com")])])])])]),e("div",{staticClass:"footer-copyright text-center py-1 bg-dark"},[t._v("© 2020 Copyright: DAD ")])])}],S={name:"FinalSection"},E=S,P=(e("e84b"),Object(d["a"])(E,k,O,!1,null,"bce01bb6",null)),z=P.exports,T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"team",attrs:{id:"team"}},[e("div",{staticClass:"card border-info text-info"},[e("div",{staticClass:"d-flex justify-content-center p-2"},[e("img",{attrs:{src:t.member.image,alt:"foto",heidht:"200",width:"200"}})]),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.member.nombre))]),e("p",{staticClass:"card-text"},[t._v(t._s(t.member.descripcion))])]),e("div",{staticClass:"card-footer"},[e("small",{staticClass:"text-muted"},[t._v(t._s(t.member.codigo)+". "+t._s(t.member.rol))])])])])},$=[],M={name:"TeamCard",props:["member"]},N=M,D=Object(d["a"])(N,T,$,!1,null,"28cf5175",null),q=D.exports,A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row mt-md-5 mt-sm-5 mt-xs-5"},t._l(t.noticias,(function(a,s){return e("div",{key:s,staticClass:"col-lg-6 col-xs-12"},[e("div",{staticClass:"d-flex justify-content-center align-items-center"},[e("div",{staticClass:"p-3"},[e("img",{attrs:{src:a.image,alt:"imagenNoticia",width:"350px",viewBox:"0 0 10 10"}})]),e("div",{staticClass:"p-2"},[e("h6",[t._v(" "+t._s(a.title)+" ")]),e("p",[t._v(" "+t._s(a.description))])])]),e("div",{staticClass:"d-flex container-fluid justify-content-end pb-2 mt-n2"},[e("button",{staticClass:"btn btn-outline-info",attrs:{type:"button"}},[e("span",{staticClass:"news-url"},[e("a",{attrs:{href:a.url,id:"news-url-1",target:"_blank"}},[t._v("Ver más")])])])])])})),0)},F=[],B=(e("fb6a"),e("bc3a")),I=e.n(B),L={name:"NewsSection",data:function(){return{noticias:null}},created:function(){var t=this;I.a.get("https://gnews.io/api/v4/search?q=adopcion mascotas&token=02335c2fc08f425d44b938c3103baa06").then((function(a){t.noticias=a.data.articles.slice(0,4)})),console.log(this.noticias)}},U=L,G=(e("a753"),Object(d["a"])(U,A,F,!1,null,"623dc7b1",null)),J=G.exports,Q={name:"App",components:{ImageText:m,CarouselSection:C,ServicesSection:j,FinalSection:z,TeamCard:q,NewsSection:J},data:function(){return{Team:[{codigo:1,nombre:"Luisa María",descripcion:"Egresada del programa de Matemáticas en la Universidad Nacional de Colombia sede Medellín. Intereses en ciencia de datos y machine learning.",rol:"Desarrolladora",image:"https://i.ibb.co/gvpPsqx/foto-Luisa4.png"},{codigo:2,nombre:"Omar Andrés",descripcion:"Estudiante ingenieria de sistemas en la Universidad Central con diplomado en programacion java en la Universidad Politecnica de Colombia.",rol:"Desarrollador",image:"https://i.ibb.co/QFqrG46/omar-Circular.png"},{codigo:3,nombre:"Martha Cecilia",descripcion:"Egresada de la universidad Real de Colombia del técnico en programación, actualmente estudia en el SENA mejorando su currículo profesional.",rol:"Desarrolladora",image:"https://i.ibb.co/k1WXhww/martha-Circular.png"}]}}},R=Q,V=Object(d["a"])(R,i,r,!1,null,null,null),W=V.exports,X=e("2f62");s["a"].use(X["a"]);var H=new X["a"].Store({state:{},mutations:{},actions:{},modules:{}}),K=e("2106"),Y=e.n(K);s["a"].use(Y.a,I.a),s["a"].config.productionTip=!1,new s["a"]({store:H,render:function(t){return t(W)}}).$mount("#app")},"7fb7":function(t,a,e){},a753:function(t,a,e){"use strict";e("d185")},d185:function(t,a,e){},e84b:function(t,a,e){"use strict";e("fcb2")},efb3:function(t,a,e){"use strict";e("7fb7")},fcb2:function(t,a,e){}});
//# sourceMappingURL=app.9d8ccc0b.js.map