(this["webpackJsonpzone-movies"]=this["webpackJsonpzone-movies"]||[]).push([[0],{31:function(e,n,t){},45:function(e,n,t){e.exports=t.p+"static/media/popcorn.333c8689.svg"},46:function(e,n,t){e.exports=t.p+"static/media/clapperBoard.3feec74b.svg"},51:function(e,n,t){e.exports=t(78)},78:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(17),o=(t(31),t(4)),c=t(5);function u(){var e=Object(o.a)(["\nwhite-space: nowrap;\n  font-size: 4.5rem;\n  text-align: center;\n  color: ",";\n  font-family: ",";\n  font-weight:bold;\n \n   padding-top:30px;\n  \n"]);return u=function(){return e},e}function l(){var e=Object(o.a)(["\nposition:fixed;\ntop:0;\n\n  width: 100%;\n  min-height: 30px;\n  overflow:hidden;\n  display: flex;\n  align-items: center;\n  background: rgba(243, 10, 10, 0.96); \n  z-index:200;\n"]);return l=function(){return e},e}var s=c.a.div(l()),f=c.a.h1(u(),"#ffffff","league_gothicregular"),p=function(){return a.a.createElement("div",{className:"row"},a.a.createElement(s,null,a.a.createElement("div",{className:"col-8"},a.a.createElement(f,null,"POP MY CORN...PUNK"))))};function d(){var e=Object(o.a)(["\nwhite-space: nowrap;\n  font-size: 1.5rem;\n  text-align: center;\n  color: ",";\n  font-family: ",";\n  font-weight:bold;\n \n   padding-top:10px;\n  \n"]);return d=function(){return e},e}function g(){var e=Object(o.a)(["\nposition:fixed;\nbottom:0;\n\n  width: 100%;\n  min-height: 30px;\n  overflow:hidden;\n  display: flex;\n  align-items: center;\n  background: rgba(243, 10, 10, 0.96); \n  z-index:200;\n"]);return g=function(){return e},e}var m=c.a.div(g()),b=c.a.h1(d(),"#ffffff","league_gothicregular"),v=function(){return a.a.createElement("div",{className:"row"},a.a.createElement(m,null,a.a.createElement("div",{className:"col-8"},a.a.createElement(b,null,"A CHRIS QUINN PRODUCTION    quinn.uk@gmail.com"))))},O=t(7),h=t(19),x=t(20),E=t(22),j=t(21),y=t(23);function w(){var e=Object(o.a)(["\n  background-color: ",";\n    color: ",';\n   border-color: "#ffffff";\n   text-align:center;\n    font-size: 4vh;\nbox-sizing:border-box;\n  \n  margin-top: 1em;\n  padding: .025em 1.5em;\n cursor:pointer;\n  border:10px;\n  border-radius: 80px 1px;\n\n\n   overflow:hidden;\n\n\n']);return w=function(){return e},e}var L=c.a.div(w(),(function(e){return e.active?"#000000":"#ffffff"}),(function(e){return e.active?"#ffffff":"#f30a0a"})),_=function(e){var n=e.onClick,t=e.isActive,r=e.name;return a.a.createElement("div",{className:"col",onClick:n},a.a.createElement(L,{active:t}," ",r))},D="STATE_POPULAR",k="STATE_FILTERED";function S(){var e=Object(o.a)(["\npadding-top:8%;\nposition:relative;\ntext-transform: uppercase;\nwidth:100%;\n  font-size: 3em;\n  text-align: center;\n  color: ",";\n  font-family: ",";\n\n  \n"]);return S=function(){return e},e}function P(){var e=Object(o.a)(["\nmin-width:600px;\n\n"]);return P=function(){return e},e}function N(){var e=Object(o.a)(["\n display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: auto;\n \n"]);return N=function(){return e},e}function T(){var e=Object(o.a)(["\n    width: 40%;\n    height: auto;\n    margin-top:20%;\n    max-width:400px;\n    min-width:400px;\n\n    max-height:650px;\n    margin-right:50px;\n  \n    background-color:",";\n    overflow:hidden;\n    display:flex;\n    flex-direction:column;\n    border:10px;\n    border-radius: 0px 74px 286px 0px;\n    box-shadow:10px 3px 33px 35px rgba(15,16,25,0.33);\n\n\n"]);return T=function(){return e},e}var A=c.a.div(T(),"#f30a0a"),I=c.a.div(N()),R=c.a.img(P()),G=c.a.h2(S(),"#ffffff","league_gothicregular"),z=function(e){function n(){return Object(h.a)(this,n),Object(E.a)(this,Object(j.a)(n).apply(this,arguments))}return Object(y.a)(n,e),Object(x.a)(n,[{key:"render",value:function(){var e=this.props.item,n=e.title,t=e.genre_ids,r=e.poster_path;return a.a.createElement(A,null,a.a.createElement(G,null,n),a.a.createElement(I,null,t),a.a.createElement(I,null,a.a.createElement(R,{src:"https://image.tmdb.org/t/p/w500/"+r,alt:n})))}}]),n}(a.a.Component),C=t(28),M=t(16),U=t.n(M),V=function(e){return e.genresData.genresSelectedList},B=Object(C.a)([V],(function(e){return U.a.map(e,"name").join(" - ")})),X=Object(C.a)([V,function(e){return e.siteData.movieList},function(e){return e.genresData.filterState}],(function(e,n,t){switch(t){case D:return n;case k:if(e.length<1)return n;var r=U.a.map(e,"id"),a=[];return n.forEach((function(e){var n,t,i=e.genre_ids;(n=r,t=i,U.a.intersection(n,t)).length>0&&a.push(e)})),a;default:return console.log("DEFAULT"),n}}));function F(){var e=Object(o.a)(["\ndisplay:flex;\npointer-events: none;\njustify-content: center;\n\npadding:0;\nmargin:0;\n\n\n"]);return F=function(){return e},e}var H=c.a.div(F()),J=Object(O.b)((function(e){return{loadingMovieList:e.siteData.dataLoadingMovieList,loadingGenres:e.siteData.dataLoadingGenreList,movies:X(e)}}))((function(e){var n=e.movies;return!0===e.loadingMovieList||!0===e.loadingGenres?a.a.createElement("div",null,"Loading"):a.a.createElement(H,{className:"row"},n.map((function(e){return a.a.createElement(z,{key:e.id,item:e})})))})),K=t(14),q="GET_MOVIE_DATA",Q="SWITCH_SITE_STATE",W="MOVIE_LIST_DATA_LOADED",Y="MOVIE_GENRES_DATA_LOADED",Z="API_ERRORED_MOVIE_LIST",$="API_ERRORED_GENRE_LIST",ee="ADD_GENRE";function ne(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function te(){var e=Object(o.a)(["\nfont-family: ",";\ntext-transform: uppercase;\n"]);return te=function(){return e},e}function re(){var e=Object(o.a)(["\ndisplay:flex;\n\nflex-direction: column;\nbox-sizing:border-box;\ntop:0;\nmax-width:300px;\nmin-width:250px;\npadding-top:20%;\n\nmin-height:80vh;\n\n\n\n"]);return re=function(){return e},e}var ae=c.a.div(re()),ie=c.a.div(te(),"league_gothicregular"),oe=function(e){function n(){return Object(h.a)(this,n),Object(E.a)(this,Object(j.a)(n).apply(this,arguments))}return Object(y.a)(n,e),Object(x.a)(n,[{key:"render",value:function(){var e=this.props.genresList,n=this.props.onGenreClick;return!0===this.props.loadingMovieList||!0===this.props.loadingGenres?a.a.createElement("div",null,"Loading"):a.a.createElement(ae,null,a.a.createElement(ie,null,e.map((function(e){return a.a.createElement(_,Object.assign({key:e.id},e,{onClick:function(){return n(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ne(t,!0).forEach((function(n){Object(K.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e))}}))}))))}}]),n}(a.a.Component),ce=Object(O.b)((function(e){return{loadingMovieList:e.siteData.dataLoadingMovieList,loadingGenres:e.siteData.dataLoadingGenreList,genresList:e.siteData.genresList}}),(function(e){return{onGenreClick:function(n){return e({type:ee,payload:n})}}}))(oe),ue=t(45),le=t.n(ue);function se(){var e=Object(o.a)(["\n  text-align: center;\n \n  width: ","vw;\n"]);return se=function(){return e},e}function fe(){var e=Object(o.a)(["\ndisplay:flex;\nflex-flow: row wrap;\npadding-top:100px;\npadding-bottom:100px;\n\njustify-content: center;\n\nbackground-image: url(",");\nbackground-repeat: repeat-y;\nbackground-size:contain;\n\n\n\n"]);return fe=function(){return e},e}var pe=c.a.div(fe(),le.a),de=c.a.div(se(),(function(e){return e.size/12*100})),ge=function(){return a.a.createElement("div",{className:"row"},a.a.createElement(pe,null,a.a.createElement(de,{size:9},a.a.createElement(J,null)),a.a.createElement(de,{size:3},a.a.createElement(ce,null))))},me=t(46),be=t.n(me);function ve(){var e=Object(o.a)(["\n\nmin-width:100px;\nheight:inherit;\ndisplay:block;\n\nbackground-image: url(",");\nbackground-repeat: no-repeat;\n\n\n\n"]);return ve=function(){return e},e}function Oe(){var e=Object(o.a)(["\n  color: ",";\n  text-align: left;\n  font-size:calc(24px + 1vw);\n  margin-top:60%;\n  margin-right:0;\n  margin-left:10%;\n \n"]);return Oe=function(){return e},e}function he(){var e=Object(o.a)(["\n  font-size:calc(18px + 1vw);\n  margin-right:5%;\n color: ",";\n  text-align:right;\nline-height:1em;\n  //  white-space: nowrap;\n"]);return he=function(){return e},e}function xe(){var e=Object(o.a)(["\n\ndisplay:flex;\njustify-content: center;\nalign-items: center;\nbackground-color: ",";\nbox-sizing:border-box;\n\nmargin: 0;\npadding: .25em 1.5em;\ncursor:pointer;\n\n\nfont-family: ",";\ntext-transform: uppercase;\noverflow:hidden;\n\n\nbox-shadow: -28px 18px 85px 32px rgba(245,7,7,0.75)\n\n"]);return xe=function(){return e},e}var Ee=c.a.div(xe(),"#f30a0a","league_gothicregular"),je=c.a.h1(he(),"#ffffff"),ye=Object(c.a)(je)(Oe(),"#f30a0a"),we=c.a.div(ve(),be.a),Le=function(e){var n=e.onClick,t=e.isActive,r=e.text;return a.a.createElement("div",{className:"row",onClick:n},a.a.createElement(Ee,{active:t},a.a.createElement(je,null," ",r),a.a.createElement(we,null,a.a.createElement(ye,null," ","BACK!"))))};function _e(){var e=Object(o.a)(["\n\nposition:fixed;\ndisplay:block;\ntop:5%;\nright:0;\nbox-sizing:border-box;\npadding:0 0;\nz-index:210;\n\n"]);return _e=function(){return e},e}var De=c.a.div(_e()),ke=Object(O.b)((function(e){return{loadingMovieList:e.siteData.dataLoadingMovieList,loadingGenres:e.siteData.dataLoadingGenreList,getSelectedGenresByName:B(e)}}),(function(e){return{onSubmitClick:function(n){return e({type:Q})}}}))((function(e){var n=e.onSubmitClick,t=e.getSelectedGenresByName;return!0===e.loadingMovieList||!0===e.loadingGenres?a.a.createElement("div",null,"Loading"):t.length>0?a.a.createElement(De,{className:"row"},a.a.createElement(Le,{text:t,onClick:function(){return n()}})):null}));function Se(){var e=Object(o.a)(["\n    display:flex;\n"]);return Se=function(){return e},e}var Pe=c.a.div(Se());var Ne=Object(O.b)(null,(function(e){return e({type:q})}))((function(){return a.a.createElement(Pe,{className:"row"},"Loading...")})),Te=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(Ne,null),a.a.createElement(ge,null),a.a.createElement(p,null),a.a.createElement(v,null),a.a.createElement(ke,null))},Ae=t(8);function Ie(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Re(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ie(t,!0).forEach((function(n){Object(K.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ie(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Ge={dataLoadingMovieList:!0,dataLoadingGenreList:!0,movieList:[],genresList:[]};var ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case W:return Re({},e,{movieList:n.payload.results,dataLoadingMovieList:!1});case Y:return Re({},e,{genresList:n.payload.genres,dataLoadingGenreList:!1});case Z:return void console.log("API_ERRORED_MOVIE_LIST");case $:return void console.log("API_ERRORED_GENRE_LIST");default:return e}},Ce=t(48);function Me(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Me(t,!0).forEach((function(n){Object(K.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Me(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Ve={genresSelectedList:[],filterState:D};var Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ee:return-1!==U.a.map(e.genresSelectedList,"id").indexOf(n.payload.id)?e:Ue({},e,{genresSelectedList:[].concat(Object(Ce.a)(e.genresSelectedList),[n.payload]),filterState:k});case Q:return Ue({},e,{genresSelectedList:[],filterState:D});default:return e}},Xe=Object(Ae.c)({siteData:ze,genresData:Be}),Fe=t(47),He=t(11),Je=t.n(He),Ke=t(9),qe=t(29),Qe=t.n(qe),We=Je.a.mark(en),Ye=Je.a.mark(nn),Ze=Je.a.mark(rn),$e=Je.a.mark(on);function en(){return Je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ke.d)(q,nn);case 2:return e.next=4,Object(Ke.d)(q,rn);case 4:case"end":return e.stop()}}),We)}function nn(){var e;return Je.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Ke.b)(tn);case 3:return e=n.sent,n.next=6,Object(Ke.c)({type:W,payload:e});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(Ke.c)({type:Z,error:n.t0});case 12:case"end":return n.stop()}}),Ye,null,[[0,8]])}var tn=function(){return Qe.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=c72352499d66ee87c33c6c30493a8e7e&language=en-US&page=1").then((function(e){return e.data}))};function rn(){var e;return Je.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Ke.b)(an);case 3:return e=n.sent,n.next=6,Object(Ke.c)({type:Y,payload:e});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(Ke.c)({type:$,error:n.t0});case 12:case"end":return n.stop()}}),Ze,null,[[0,8]])}var an=function(){return Qe.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=c72352499d66ee87c33c6c30493a8e7e&language=en-US").then((function(e){return e.data}))};function on(){return Je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ke.a)([en()]);case 2:case"end":return e.stop()}}),$e)}var cn=Object(Fe.a)(),un=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Ae.d)(Object(Ae.a)(cn)),ln=Object(Ae.e)(Xe,un);cn.run(on);var sn=ln;Object(i.render)(a.a.createElement(O.a,{store:sn},a.a.createElement(Te,null)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.12750e41.chunk.js.map