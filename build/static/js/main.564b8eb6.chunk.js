(this["webpackJsonpzone-movies"]=this["webpackJsonpzone-movies"]||[]).push([[0],{32:function(e,n,t){},46:function(e,n,t){e.exports=t.p+"static/media/star.a284c655.svg"},47:function(e,n,t){e.exports=t.p+"static/media/popcorn.333c8689.svg"},48:function(e,n,t){e.exports=t.p+"static/media/clapperBoard.3feec74b.svg"},52:function(e,n,t){e.exports=t(79)},79:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(16),o=(t(32),t(4)),c=t(5);function u(){var e=Object(o.a)(["\nwhite-space: nowrap;\n  font-size: 4.5rem;\n  text-align: center;\n  color: ",";\n  font-family: ",";\n  font-weight:bold;\n \n   padding-top:30px;\n  \n"]);return u=function(){return e},e}function l(){var e=Object(o.a)(["\nposition:fixed;\ntop:0;\n\n  width: 100%;\n  min-height: 30px;\n  overflow:hidden;\n  display: flex;\n  align-items: center;\n  background: rgba(114, 125, 30, 0.96); \n  z-index:200;\n"]);return l=function(){return e},e}var s=c.a.div(l()),f=c.a.h1(u(),"#ffffff","league_gothicregular"),d=function(){return a.a.createElement("div",{className:"row"},a.a.createElement(s,null,a.a.createElement("div",{className:"col-8"},a.a.createElement(f,null,"POP MY CORN...PUNK"))))};function p(){var e=Object(o.a)(["\nwhite-space: nowrap;\n  font-size: 1.5rem;\n  text-align: center;\n  color: ",";\n  font-family: ",";\n  font-weight:bold;\n \n   padding-top:10px;\n  \n"]);return p=function(){return e},e}function g(){var e=Object(o.a)(["\nposition:fixed;\nbottom:0;\n\n  width: 100%;\n  min-height: 30px;\n  overflow:hidden;\n  display: flex;\n  align-items: center;\n  background: rgba(114, 125, 30, 0.96); \n  z-index:200;\n"]);return g=function(){return e},e}var v=c.a.div(g()),m=c.a.h1(p(),"#ffffff","league_gothicregular"),b=function(){return a.a.createElement("div",{className:"row"},a.a.createElement(v,null,a.a.createElement("div",{className:"col-8"},a.a.createElement(m,null,"A CHRIS QUINN PRODUCTION    quinn.uk@gmail.com"))))},O=t(7),h=t(18),E=t(19),x=t(22),y=t(20),j=t(23),w="GET_MOVIE_DATA",_="SWITCH_SITE_STATE",k="MOVIE_LIST_DATA_LOADED",L="MOVIE_GENRES_DATA_LOADED",S="API_ERRORED_MOVIE_LIST",D="API_ERRORED_GENRE_LIST",I="ADD_GENRE",N="FILTER_RATING";function T(){var e=Object(o.a)(["\n  background-color: ",";\n    color: ",';\n   border-color: "#ffffff";\n   font-family: ',";\n   text-align:center;\n   font-size: 1.8em;\n   box-sizing:border-box;\n  margin-top: 1em;\n  padding: .06em 1em;\n cursor:pointer;\n  border:10px;\n  border-radius: 80px 1px;\n  overflow:hidden;\n\n\n"]);return T=function(){return e},e}var P=c.a.div(T(),(function(e){return e.active,"#000000"}),(function(e){return e.active?"#ffffff":"#f30a0a"}),"league_gothicregular"),A=function(e){var n=e.onClick,t=e.isActive,r=e.genreName;e.genreId;return a.a.createElement("div",{onClick:n},a.a.createElement(P,{active:t}," ",r))},R=t(24),C=t(8),z=t.n(C),G="STATE_POPULAR",M="STATE_FILTERED",U="STATE_RATING",V=function(e){return e.filteredData.genresSelectedList},B=function(e,n){var t=[];return n.genreIds.forEach((function(n){var r=function(e,n){return n.siteData.genresList.find((function(n){return n.id===e}))}(n,e);t.push(r)})),t},X=Object(R.a)([V],(function(e){return z.a.map(e,"name").join(" - ")})),F=Object(R.a)([V,function(e){return e.siteData.movieList},function(e){return e.filteredData.filterState},function(e){return e.filteredData.ratingScore}],(function(e,n,t,r){switch(t){case G:return z.a.map(z.a.orderBy(n,"popularity","desc"));case M:if(e.length<1)return n;console.log("genres ",e);var a=z.a.map(e,"id"),i=[];return n.forEach((function(e){var n,t,r=e.genre_ids;(n=a,t=r,z.a.intersection(n,t)).length>0&&i.push(e)})),i;case U:var o=z.a.map(z.a.orderBy(n,"vote_average","desc"));return z.a.filter(o,(function(e){return e.vote_average>=r}));default:return console.log("GET MOVIES DEFAULT"),n}}));function H(){var e=Object(o.a)(["\n\ntext-transform: uppercase;\ndisplay:flex;\nflex-direction: column;\nwidth:40%;\n\n"]);return H=function(){return e},e}var J=c.a.div(H()),K=function(e){function n(){return Object(h.a)(this,n),Object(x.a)(this,Object(y.a)(n).apply(this,arguments))}return Object(j.a)(n,e),Object(E.a)(n,[{key:"render",value:function(){var e=this.props.onGenreClick;return a.a.createElement(J,null,this.props.genres.map((function(n,t){return a.a.createElement(A,{key:t,genreName:n.name,genreId:n.id,onClick:function(){return e({genre:n})}})})))}}]),n}(a.a.Component),q=Object(O.b)((function(){var e=Object(R.a)([B],(function(e){return e}));return function(n,t){return{genres:e(n,t)}}}),(function(e){return{onGenreClick:function(n){return e({type:I,payload:n})}}}))(K),Q=t(46),W=t.n(Q);function Y(){var e=Object(o.a)(["\n  \n   font-family: ",";\n   color:white;\n   text-align:center;\n   font-size: 4.5em;\n   width:100%;\n \n   padding:0%;\n   height:200px;\n   background-repeat:no-repeat;\n   cursor:pointer;\n   background-image: url(",");\n   background-position: center;\n   background-size:contain;\n   overflow:hidden;\n\n"]);return Y=function(){return e},e}var Z=c.a.div(Y(),"league_gothicregular",W.a),$=function(e){var n=e.onClick,t=e.isActive,r=e.voteScore;return a.a.createElement("div",{onClick:n},a.a.createElement(Z,{active:t}," ",r))};function ee(){var e=Object(o.a)(["\n  \n   font-family: ",";\n   color:white;\n   text-align:center;\n   font-size: 2em;\n   padding: 8%;\n   visibility:hidden;\n\n\n"]);return ee=function(){return e},e}var ne=c.a.div(ee(),"league_gothicregular"),te=function(e){var n=e.popular;return a.a.createElement(ne,null," ",n)};function re(){var e=Object(o.a)(["\nwidth:100%;\nheight:200px;\ndisplay:flex;\njustify-content: center;\nflex-direction:row;\n\n"]);return re=function(){return e},e}function ae(){var e=Object(o.a)(["\npadding-top:8%;\nposition:relative;\ntext-transform: uppercase;\nwidth:100%;\n  font-size: 4em;\n  text-align: center;\n  color: ",";\n  font-family: ",";\n  background-color: rgba(8, 3, 33, 0.5)\n\n\n"]);return ae=function(){return e},e}function ie(){var e=Object(o.a)(["\n    width: 40%;\n    height: 650px;\n    margin:5% 5%;\n    max-width:600px;\n    min-width:400px;\n    background-image: url(",");\n    background-repeat:no-repeat;\n    background-size:cover;\n    background-color:",";\n    overflow:hidden;\n    display:flex;\n    flex-direction:column;\n    border:10px;\n    border-radius: 0px 74px 286px 0px;\n    box-shadow:10px 3px 33px 35px rgba(15,16,25,0.33);\n"]);return ie=function(){return e},e}var oe=c.a.div(ie(),(function(e){return"https://image.tmdb.org/t/p/w500/"+e.poster_path}),"#f30a0a"),ce=c.a.h2(ae(),"#ffffff","league_gothicregular"),ue=c.a.div(re()),le=function(e){function n(){return Object(h.a)(this,n),Object(x.a)(this,Object(y.a)(n).apply(this,arguments))}return Object(j.a)(n,e),Object(E.a)(n,[{key:"render",value:function(){var e=this.props.item,n=e.title,t=e.genre_ids,r=e.poster_path,i=e.vote_average,o=e.popularity,c=this.props.onClick;return a.a.createElement(oe,{poster_path:r},a.a.createElement("div",{className:"row"},a.a.createElement(ce,null,n)),a.a.createElement(ue,null,a.a.createElement($,{voteScore:i,onClick:function(){return c({vote_average:i})}}),a.a.createElement(te,{popular:o})),a.a.createElement("div",{className:"row"},a.a.createElement(q,{genreIds:t})))}}]),n}(a.a.Component),se=Object(O.b)(null,(function(e){return{onClick:function(n){return e({type:N,payload:n})}}}))(le);function fe(){var e=Object(o.a)(["\ndisplay:flex;\njustify-content: center;\npadding:0;\nmargin:0;\n"]);return fe=function(){return e},e}var de=c.a.div(fe()),pe=Object(O.b)((function(e){return{loadingMovieList:e.siteData.dataLoadingMovieList,loadingGenres:e.siteData.dataLoadingGenreList,movies:F(e)}}))((function(e){var n=e.movies;return!0===e.loadingMovieList||!0===e.loadingGenres?a.a.createElement("div",null,"Loading"):a.a.createElement(de,{className:"row"},n.map((function(e,n){return a.a.createElement(se,{key:e.id,item:e,popular:n})})))})),ge=t(47),ve=t.n(ge);function me(){var e=Object(o.a)(["\n  text-align: center;\n \n  width: ","vw;\n"]);return me=function(){return e},e}function be(){var e=Object(o.a)(["\ndisplay:flex;\nflex-flow: row wrap;\npadding-top:100px;\npadding-bottom:100px;\n\njustify-content: center;\n\nbackground-image: url(",");\nbackground-repeat: repeat-y;\nbackground-size:contain;\n\n\n\n"]);return be=function(){return e},e}var Oe=c.a.div(be(),ve.a),he=c.a.div(me(),(function(e){return e.size/12*100})),Ee=function(){return a.a.createElement("div",{className:"row"},a.a.createElement(Oe,null,a.a.createElement(he,{size:12},a.a.createElement(pe,null))))},xe=t(48),ye=t.n(xe);function je(){var e=Object(o.a)(["\n\nmin-width:100px;\nheight:inherit;\ndisplay:block;\n\nbackground-image: url(",");\nbackground-repeat: no-repeat;\n\n\n\n"]);return je=function(){return e},e}function we(){var e=Object(o.a)(["\n  color: ",";\n  text-align: left;\n  font-size:calc(24px + 1vw);\n  margin-top:60%;\n  margin-right:0;\n  margin-left:10%;\n \n"]);return we=function(){return e},e}function _e(){var e=Object(o.a)(["\n  font-size:calc(18px + 1vw);\n  margin-right:5%;\n color: ",";\n  text-align:right;\nline-height:1em;\n  //  white-space: nowrap;\n"]);return _e=function(){return e},e}function ke(){var e=Object(o.a)(["\n\ndisplay:flex;\njustify-content: center;\nalign-items: center;\nbackground-color: ",";\nbox-sizing:border-box;\n\nmargin: 0;\npadding: .25em 1.5em;\ncursor:pointer;\n\n\nfont-family: ",";\ntext-transform: uppercase;\noverflow:hidden;\n\n\nbox-shadow: -28px 18px 85px 32px rgba(245,7,7,0.75)\n\n"]);return ke=function(){return e},e}var Le=c.a.div(ke(),"#f30a0a","league_gothicregular"),Se=c.a.h1(_e(),"#ffffff"),De=Object(c.a)(Se)(we(),"#f30a0a"),Ie=c.a.div(je(),ye.a),Ne=function(e){var n=e.onClick,t=e.isActive,r=e.text;return a.a.createElement("div",{className:"row",onClick:n},a.a.createElement(Le,{active:t},a.a.createElement(Se,null," ",r),a.a.createElement(Ie,null,a.a.createElement(De,null," ","BACK!"))))};function Te(){var e=Object(o.a)(["\n\nposition:fixed;\ndisplay:block;\ntop:5%;\nright:0;\nbox-sizing:border-box;\npadding:0 0;\nz-index:210;\n\n"]);return Te=function(){return e},e}var Pe=c.a.div(Te()),Ae=Object(O.b)((function(e){return{loadingMovieList:e.siteData.dataLoadingMovieList,loadingGenres:e.siteData.dataLoadingGenreList,getSelectedGenresByName:X(e)}}),(function(e){return{onSubmitClick:function(n){return e({type:_})}}}))((function(e){var n=e.onSubmitClick,t=e.getSelectedGenresByName;return!0===e.loadingMovieList||!0===e.loadingGenres?a.a.createElement("div",null,"Loading"):t.length>0?a.a.createElement(Pe,{className:"row"},a.a.createElement(Ne,{text:t,onClick:function(){return n()}})):null}));function Re(){var e=Object(o.a)(["\n    display:flex;\n"]);return Re=function(){return e},e}var Ce=c.a.div(Re());var ze=Object(O.b)(null,(function(e){return e({type:w})}))((function(){return a.a.createElement(Ce,{className:"row"},"Loading...")})),Ge=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(ze,null),a.a.createElement(Ee,null),a.a.createElement(d,null),a.a.createElement(b,null),a.a.createElement(Ae,null))},Me=t(9),Ue=t(21);function Ve(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Be(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ve(t,!0).forEach((function(n){Object(Ue.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ve(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Xe={dataLoadingMovieList:!0,dataLoadingGenreList:!0,movieList:[],genresList:[]};var Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case k:return Be({},e,{movieList:n.payload.results,dataLoadingMovieList:!1});case L:return Be({},e,{genresList:n.payload.genres,dataLoadingGenreList:!1});case S:return void console.log("API_ERRORED_MOVIE_LIST");case D:return void console.log("API_ERRORED_GENRE_LIST");default:return e}},He=t(30);function Je(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Ke(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Je(t,!0).forEach((function(n){Object(Ue.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Je(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var qe={genresSelectedList:[],ratingScore:[],filterState:G};var Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case I:return-1!==z.a.map(e.genresSelectedList,"id").indexOf(n.payload.genre.id)?e:Ke({},e,{genresSelectedList:[].concat(Object(He.a)(e.genresSelectedList),[n.payload.genre]),filterState:M});case N:return Ke({},e,{ratingScore:[].concat(Object(He.a)(e.ratingScore),[n.payload.vote_average]),filterState:U});case _:return Ke({},e,{genresSelectedList:[],filterState:G});default:return e}},We=Object(Me.c)({siteData:Fe,filteredData:Qe}),Ye=t(49),Ze=t(12),$e=t.n(Ze),en=t(10),nn=t(29),tn=t.n(nn),rn=$e.a.mark(un),an=$e.a.mark(ln),on=$e.a.mark(fn),cn=$e.a.mark(pn);function un(){return $e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(en.d)(w,ln);case 2:return e.next=4,Object(en.d)(w,fn);case 4:case"end":return e.stop()}}),rn)}function ln(){var e;return $e.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(en.b)(sn);case 3:return e=n.sent,n.next=6,Object(en.c)({type:k,payload:e});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(en.c)({type:S,error:n.t0});case 12:case"end":return n.stop()}}),an,null,[[0,8]])}var sn=function(){return tn.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=c72352499d66ee87c33c6c30493a8e7e&language=en-US&page=1").then((function(e){return e.data}))};function fn(){var e;return $e.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(en.b)(dn);case 3:return e=n.sent,n.next=6,Object(en.c)({type:L,payload:e});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(en.c)({type:D,error:n.t0});case 12:case"end":return n.stop()}}),on,null,[[0,8]])}var dn=function(){return tn.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=c72352499d66ee87c33c6c30493a8e7e&language=en-US").then((function(e){return e.data}))};function pn(){return $e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(en.a)([un()]);case 2:case"end":return e.stop()}}),cn)}var gn=Object(Ye.a)(),vn=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Me.d)(Object(Me.a)(gn)),mn=Object(Me.e)(We,vn);gn.run(pn);var bn=mn;Object(i.render)(a.a.createElement(O.a,{store:bn},a.a.createElement(Ge,null)),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.564b8eb6.chunk.js.map