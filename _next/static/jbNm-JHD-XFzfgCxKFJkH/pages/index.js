(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RNiq:function(e,t,a){"use strict";a.r(t);var n=a("ln6h"),c=a.n(n),s=a("q1tI"),r=a.n(s),i=a("pJ0N"),o=a("vcXL"),l=a.n(o),m=r.a.createElement,p=function(e){var t=e.precio,a=t.price,n=t.percent_change_1h,c=t.percent_change_7d,s=t.percent_change_24h;return m("div",{className:"card text-white bg-success mb-3"},m("div",{className:"card-header"},"Precio del Bitcoin"),m("div",{className:"card-body"},m("h4",{className:"card-title"},"Precio Actual: $ ",a),m("div",{className:"d-md-flex justify-content-between"},m("p",{className:"card-text"},m("span",{className:"font-weight-bold"},"\xdaltima Hora:")," ",n,"%"),m("p",{className:"card-text"},m("span",{className:"font-weight-bold"},"\xdaltimas 24 horas:")," ",s,"%"),m("p",{className:"card-text"},m("span",{className:"font-weight-bold"},"\xdaltimos 7 d\xedas:")," ",c,"%"))))},d=r.a.createElement,u=function(e){var t=e.noticia,a=t.urlToImage,n=t.url,c=t.title,s=t.description,r=t.source,i=a?d("img",{src:a,alt:c,className:"card-img-top"}):d("p",{className:"text-center my-5"},"Im\xe1gen no disponible");return d("div",{className:"col-md-6 col-12 mb-4"},d("div",{className:"card"},d("div",{className:"card-image"},i),d("div",{className:"card-body"},d("h3",{className:"card-title"},c),d("p",{className:"card-text"},s),d("p",{className:"card-text"},r.name),d("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary d-block"},"Leer Noticia"))))},v=r.a.createElement,f=function(e){var t=e.noticias;return v("div",{className:"row"},t.map((function(e){return v(u,{key:e.url,noticia:e})})))},N=a("pLtp"),h=a.n(N),b=r.a.createElement,x=function(e){var t=e.info,a=t.name,n=t.url,c=t.description,s=a.text.length>150?a.text.substr(0,150)+"...":a.text,r=c.text?c.text.substr(0,250)+"...":"";return b("a",{href:n,target:"_blank",rel:"noreferrer noopener",className:"list-group-item active text-light mb-1"},b("h3",{className:"mb-3"},s),b("p",{className:"mb-1"},r))},w=r.a.createElement,g=function(e){var t=e.eventos,a=h()(t);return w("div",{className:"list-group"},a.map((function(e){return w(x,{key:e,info:t[e]})})))},y=r.a.createElement,_=function(e){return y(i.a,null,y("div",{className:"row"},y("div",{className:"col-12"},y("h2",null,"Precio del Bitcoin"),y(p,{precio:e.precioBitcoin})),y("div",{className:"col-md-8"},y("h2",{className:"my-4"},"Noticias sobre Bitcoin"),y(f,{noticias:e.noticias})),y("div",{className:"col-md-4"},y("h2",{className:"my-4"},"Pr\xf3ximos Eventos Bitcoin"),y(g,{eventos:e.eventos}))))};_.getInitialProps=function(){var e,t,a,n;return c.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,c.a.awrap(l()("https://api.coinmarketcap.com/v2/ticker/1/"));case 2:return e=s.sent,"55b8f275e9fa475694a734fa5d455cc9",s.next=6,c.a.awrap(l()("https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=".concat("55b8f275e9fa475694a734fa5d455cc9","&language=es")));case 6:return t=s.sent,"UMJSL7AKRYAOK2OM5M5G",s.next=10,c.a.awrap(l()("https://www.eventbriteapi.com/v3/events/search/?token=".concat("UMJSL7AKRYAOK2OM5M5G","&q=Bitcoin&sort_by=date&locale=es_ES")));case 10:return s.sent,s.next=13,c.a.awrap(e.json());case 13:return a=s.sent,s.next=16,c.a.awrap(t.json());case 16:return n=s.sent,s.abrupt("return",{precioBitcoin:a.data.quotes.USD,noticias:n.articles,eventos:[{name:{text:"Deprecated endpoint"},url:"https://github.com",description:{text:"La api ya no funciona visteee"}},{name:{text:"Deprecated endpoint 2"},url:"https://github.com/EliasFunes",description:{text:"La api ya no funciona visteeeee 2"}}]});case 18:case"end":return s.stop()}}))};t.default=_},vcXL:function(e,t,a){"use strict";var n=self.fetch.bind(self);e.exports=n,e.exports.default=e.exports},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",0,1]]]);