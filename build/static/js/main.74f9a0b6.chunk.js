(this["webpackJsonpzone-movies"]=this["webpackJsonpzone-movies"]||[]).push([[0],{31:function(e,n,t){},42:function(e,n,t){e.exports=t.p+"static/media/clapperBoard.3feec74b.svg"},45:function(e,n,t){e.exports=t.p+"static/media/star.e356e09a.svg"},46:function(e,n,t){e.exports=t.p+"static/media/popcorn.88469b6d.svg"},50:function(e,n,t){e.exports=t(77)},77:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(16),c=(t(31),t(4)),o=t(7),u=t(5),l=t(42),s=t.n(l);function f(){var e=Object(c.a)(["\n\nmin-width:100px;\nheight:inherit;\ndisplay:block;\n\nbackground-image: url(",");\nbackground-repeat: no-repeat;\n\n\n\n"]);return f=function(){return e},e}function d(){var e=Object(c.a)(["\n  color: black;\n  text-align: left;\n  font-size:calc(24px + 1vw);\n  margin-top:60%;\n  margin-right:0;\n  margin-left:10%;\n \n"]);return d=function(){return e},e}function p(){var e=Object(c.a)(["\n  font-size:calc(18px + 1vw);\n  margin-right:5%;\n color: ",";\n  text-align:right;\nline-height:1em;\n\n"]);return p=function(){return e},e}function g(){var e=Object(c.a)(["\n\ndisplay:flex;\njustify-content: center;\nalign-items: center;\nbackground: rgba(33, 14, 14, 0.96);  \nbox-sizing:border-box;\n\nmargin: 0;\npadding: .25em 1.5em;\ncursor:pointer;\n\n\nfont-family: ",";\ntext-transform: uppercase;\noverflow:hidden;\n\nborder-radius: 80px 1px;\n\n\nbox-shadow: -28px 18px 85px 32px rgba(245,7,7,0.75)\n\n"]);return g=function(){return e},e}var v=u.a.div(g(),"league_gothicregular"),b=u.a.h1(p(),"#ffffff"),m=Object(u.a)(b)(d()),O=u.a.div(f(),s.a),h=function(e){var n=e.onClick,t=e.isActive,r=e.text;return a.a.createElement("div",{className:"row",onClick:n},a.a.createElement(v,{active:t},a.a.createElement(b,null," ",r),a.a.createElement(O,null,a.a.createElement(m,null," ","CUT!"))))},E="GET_MOVIE_DATA",y="SWITCH_SITE_STATE",x="MOVIE_LIST_DATA_LOADED",j="MOVIE_GENRES_DATA_LOADED",w="API_ERRORED_MOVIE_LIST",_="API_ERRORED_GENRE_LIST",S="ADD_REMOVE_GENRE",k="FILTER_RATING",L=t(11),D=t(24),I="STATE_FILTERED",A="STATE_RATING",T=function(e,n){var t=[];return n.genreIds.forEach((function(n){var r=function(e,n){var t=n.filteredData.genresSelectedList,r=n.siteData.genresList.find((function(n){return n.id===e}));return r.active=!1,t.forEach((function(e){e.id===r.id&&(r.active=!0)})),r}(n,e);t.push(r)})),t},N=Object(D.a)([function(e){return e.filteredData.genresSelectedList}],(function(e){var n=Object(L.a)(e),t=[];return n.forEach((function(e){t.push(e.name)})),t.join(" - ")})),P=Object(D.a)([function(e){return e.filteredData.genresSelectedIdArray},function(e){return e.siteData.movieList},function(e){return e.filteredData.filterState},function(e){return e.filteredData.ratingScore}],(function(e,n,t,r){switch(t){case"STATE_POPULAR":return n;case I:if(e.length<1)return n;var a=[];return n.forEach((function(n){var t=n.genre_ids;e.every((function(e){return t.includes(e)}))&&a.push(n)})),a;case A:return Object(L.a)(n).sort((function(e,n){return e.vote_average<n.vote_average?1:-1})).filter((function(e){return e.vote_average>=r[r.length-1]}));default:return console.log("GET MOVIES DEFAULT"),n}}));function R(){var e=Object(c.a)(["\nwhite-space: nowrap;\n  font-size: 4.5rem;\n  text-align: center;\n  color: ",";\n  font-family: ",";\n  font-weight:bold;\n \n   padding-top:30px;\n  \n"]);return R=function(){return e},e}function C(){var e=Object(c.a)(["\nposition:fixed;\ntop:0;\n\n  width: 100%;\n  min-height: 30px;\n  overflow:hidden;\n  display: flex;\n  align-items: center;\n  background: rgba(33, 0, 14, 0.92); \n  z-index:200;\n"]);return C=function(){return e},e}var G=u.a.div(C()),M=u.a.h1(R(),"#ec1515","league_gothicregular"),z=Object(o.b)((function(e){return{loadingMovieList:e.siteData.dataLoadingMovieList,loadingGenres:e.siteData.dataLoadingGenreList,getSelectedGenresByName:N(e)}}),(function(e){return{onSubmitClick:function(n){return e({type:y})}}}))((function(e){var n=e.onSubmitClick,t=e.getSelectedGenresByName;return!0===e.loadingMovieList||!0===e.loadingGenres?a.a.createElement("div",null,"Loading"):t.length>-1?a.a.createElement("div",{className:"row"},a.a.createElement(G,null,a.a.createElement("div",{className:"col-8"},a.a.createElement(M,null,"POP MY CORN...PUNK")),a.a.createElement("div",{className:"col-4"},a.a.createElement(h,{text:t,onClick:function(){return n()}})))):null}));function U(){var e=Object(c.a)(["\nwhite-space: nowrap;\n  font-size: 1.5rem;\n  text-align: center;\n  color: ",";\n  font-family: ",";\n  font-weight:bold;\n \n   padding-top:10px;\n  \n"]);return U=function(){return e},e}function V(){var e=Object(c.a)(["\nposition:fixed;\nbottom:0;\n\n  width: 100%;\n  min-height: 30px;\n  overflow:hidden;\n  display: flex;\n  align-items: center;\n  background: rgba(33, 14, 14, 0.96);  \n  z-index:200;\n"]);return V=function(){return e},e}var B=u.a.div(V()),X=u.a.h1(U(),"#ec1515","league_gothicregular"),F=function(){return a.a.createElement("div",{className:"row"},a.a.createElement(B,null,a.a.createElement("div",{className:"col-8"},a.a.createElement(X,null,"A CHRIS QUINN PRODUCTION    quinn.uk@gmail.com"))))},H=t(18),J=t(19),q=t(22),K=t(20),Q=t(23);function W(){var e=Object(c.a)(["\n  background-color: ",";\n    color: ",';\n   border-color: "#ffffff";\n   font-family: ',";\n   text-align:center;\n   font-size: 1.8em;\n   box-sizing:border-box;\n  margin-top: 1em;\n  padding: .06em 1em;\n cursor:pointer;\n  border:10px;\n  border-radius: 80px 1px;\n  overflow:hidden;\n\n\n"]);return W=function(){return e},e}var Y=u.a.div(W(),(function(e){return e.active,"#000000"}),(function(e){return e.active?"#ffffff":"#f30a0a"}),"league_gothicregular"),Z=function(e){var n=e.onClick,t=e.isActive,r=e.genreName;e.genreId;return a.a.createElement("div",{onClick:n},a.a.createElement(Y,{active:t}," ",r))};function $(){var e=Object(c.a)(["\n\ntext-transform: uppercase;\ndisplay:flex;\nflex-direction: column;\nwidth:40%;\n\n"]);return $=function(){return e},e}var ee=u.a.div($()),ne=function(e){function n(){return Object(H.a)(this,n),Object(q.a)(this,Object(K.a)(n).apply(this,arguments))}return Object(Q.a)(n,e),Object(J.a)(n,[{key:"render",value:function(){var e=this.props.onGenreClick;return a.a.createElement(ee,null,this.props.genres.map((function(n,t){return a.a.createElement(Z,{key:t,genreName:n.name,genreId:n.id,isActive:n.active,onClick:function(){return e({genre:n})}})})))}}]),n}(a.a.Component),te=Object(o.b)((function(){var e=Object(D.a)([T],(function(e){return e}));return function(n,t){return{genres:e(n,t)}}}),(function(e){return{onGenreClick:function(n){return e({type:S,payload:n})}}}))(ne),re=t(45),ae=t.n(re);function ie(){var e=Object(c.a)(["\ntext-align:center;\ncolor:black;\nfont-size: 2em;\nposition:absolute;\n\n"]);return ie=function(){return e},e}function ce(){var e=Object(c.a)(["\n  width:150px;\n  height:150px;\n  position:absolute;\n  transform: scale(0.66);\n\n"]);return ce=function(){return e},e}function oe(){var e=Object(c.a)(["\n   padding:0;\n   margin:0;\n  \n   font-family: ",";\n   display:inline-block;\n   width:100%;\n   display:flex;\n   align-items:center;\n   justify-content:center;  \n   cursor:pointer;\n"]);return oe=function(){return e},e}var ue=u.a.div(oe(),"league_gothicregular"),le=u.a.div(ce()),se=u.a.div(ie()),fe=function(e){var n=e.onClick,t=(e.isActive,e.voteScore);return a.a.createElement(ue,{onClick:n},a.a.createElement(le,null,a.a.createElement("img",{src:ae.a,alt:"star background"})),a.a.createElement(se,null,t))};function de(){var e=Object(c.a)(["\nwidth:100%;\n\ndisplay:flex;\njustify-content: center;\nflex-direction:row;\n"]);return de=function(){return e},e}function pe(){var e=Object(c.a)(["\npadding-top:8%;\nposition:relative;\ntext-transform: uppercase;\nwidth:100%;\n  font-size: 4em;\n  text-align: center;\n  color: ",";\n  font-family: ",";\n  background-color: rgba(8, 3, 33, 0.5)\n\n\n"]);return pe=function(){return e},e}function ge(){var e=Object(c.a)(["\n    width: 40%;\n    height: 650px;\n    margin:5% 5%;\n    max-width:600px;\n    min-width:400px;\n    background-image: url(",");\n    background-repeat:no-repeat;\n    background-size:cover;\n    background-color:",";\n    overflow:hidden;\n    display:flex;\n    flex-direction:column;\n    border:10px;\n    border-radius: 0px 74px 286px 0px;\n    box-shadow:10px 3px 33px 35px rgba(15,16,25,0.33);\n"]);return ge=function(){return e},e}var ve=u.a.div(ge(),(function(e){return"https://image.tmdb.org/t/p/w500/"+e.poster_path}),"#f30a0a"),be=u.a.h2(pe(),"#ffffff","league_gothicregular"),me=u.a.div(de()),Oe=function(e){function n(){return Object(H.a)(this,n),Object(q.a)(this,Object(K.a)(n).apply(this,arguments))}return Object(Q.a)(n,e),Object(J.a)(n,[{key:"render",value:function(){var e=this.props.item,n=e.title,t=e.genre_ids,r=e.poster_path,i=e.vote_average,c=(e.popularity,this.props.onClick);return console.log(),a.a.createElement(ve,{poster_path:r},a.a.createElement("div",{className:"row"},a.a.createElement(be,null,n)),a.a.createElement("div",{className:"row"},a.a.createElement(te,{genreIds:t})),a.a.createElement(me,null,a.a.createElement(fe,{voteScore:i,onClick:function(){return c({vote_average:i})}})))}}]),n}(a.a.Component),he=Object(o.b)(null,(function(e){return{onClick:function(n){return e({type:k,payload:n})}}}))(Oe);function Ee(){var e=Object(c.a)(["\ndisplay:flex;\njustify-content: center;\npadding:0;\nmargin:0;\n"]);return Ee=function(){return e},e}var ye=u.a.div(Ee()),xe=Object(o.b)((function(e){return{loadingMovieList:e.siteData.dataLoadingMovieList,loadingGenres:e.siteData.dataLoadingGenreList,movies:P(e)}}))((function(e){var n=e.movies;return!0===e.loadingMovieList||!0===e.loadingGenres?a.a.createElement("div",null,"Loading"):a.a.createElement(ye,{className:"row"},n.map((function(e,n){return a.a.createElement(he,{key:e.id,item:e,popular:n})})))})),je=t(46),we=t.n(je);function _e(){var e=Object(c.a)(["\n  text-align: center;\n \n  width: ","vw;\n"]);return _e=function(){return e},e}function Se(){var e=Object(c.a)(["\ndisplay:flex;\nflex-flow: row wrap;\npadding-top:100px;\npadding-bottom:100px;\n\njustify-content: center;\n\nbackground-image: url(",");\nbackground-repeat: repeat-y;\nbackground-size:contain;\n\n\n\n"]);return Se=function(){return e},e}var ke=u.a.div(Se(),we.a),Le=u.a.div(_e(),(function(e){return e.size/12*100})),De=function(){return a.a.createElement("div",{className:"row"},a.a.createElement(ke,null,a.a.createElement(Le,{size:12},a.a.createElement(xe,null))))};function Ie(){var e=Object(c.a)(["\n    display:flex;\n"]);return Ie=function(){return e},e}var Ae=u.a.div(Ie());var Te=Object(o.b)(null,(function(e){return e({type:E})}))((function(){return a.a.createElement(Ae,{className:"row"},"Loading...")})),Ne=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(Te,null),a.a.createElement(De,null),a.a.createElement(z,null),a.a.createElement(F,null))},Pe=t(8),Re=t(21);function Ce(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Ge(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ce(t,!0).forEach((function(n){Object(Re.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ce(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Me={dataLoadingMovieList:!0,dataLoadingGenreList:!0,movieList:[],genresList:[],error:{}};var ze=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return e=t.payload.results,Ge({},n,{movieList:Object(L.a)(e).sort((function(e,n){return e.popularity<n.popularity?1:-1})),dataLoadingMovieList:!1});case j:return Ge({},n,{genresList:e=t.payload.genres,dataLoadingGenreList:!1});case w:return console.log("API_ERRORED_MOVIE_LIST"),Ge({},n,{error:t.error});case _:return console.log("API_ERRORED_GENRE_LIST"),Ge({},n,{error:t.error});default:return n}};function Ue(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Ve(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ue(t,!0).forEach((function(n){Object(Re.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ue(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Be={genresSelectedList:[],genresSelectedIdArray:[],ratingScore:[],filterState:"STATE_POPULAR"};var Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case S:var t=e.genresSelectedIdArray.indexOf(n.payload.genre.id);return Ve({},e,-1!==t?{genresSelectedList:e.genresSelectedList.filter((function(e){return e.id!==n.payload.genre.id})),genresSelectedIdArray:e.genresSelectedIdArray.filter((function(e){return e!==n.payload.genre.id}))}:{genresSelectedList:[].concat(Object(L.a)(e.genresSelectedList),[n.payload.genre]),genresSelectedIdArray:[].concat(Object(L.a)(e.genresSelectedIdArray),[n.payload.genre.id]),filterState:I});case k:return Ve({},e,{ratingScore:[].concat(Object(L.a)(e.ratingScore),[n.payload.vote_average]),genresSelectedList:[],genresSelectedIdArray:[],filterState:A});case y:return Ve({},e,{},Be);default:return e}},Fe=Object(Pe.c)({siteData:ze,filteredData:Xe}),He=t(47),Je=t(12),qe=t.n(Je),Ke=t(9),Qe=t(29),We=t.n(Qe),Ye=qe.a.mark(nn),Ze=qe.a.mark(tn),$e=qe.a.mark(an),en=qe.a.mark(on);function nn(){return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ke.d)(E,tn);case 2:return e.next=4,Object(Ke.d)(E,an);case 4:case"end":return e.stop()}}),Ye)}function tn(){var e;return qe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Ke.b)(rn);case 3:return e=n.sent,n.next=6,Object(Ke.c)({type:x,payload:e});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(Ke.c)({type:w,error:n.t0});case 12:case"end":return n.stop()}}),Ze,null,[[0,8]])}var rn=function(){return We.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=c72352499d66ee87c33c6c30493a8e7e&language=en-US&page=1").then((function(e){return e.data}))};function an(){var e;return qe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Ke.b)(cn);case 3:return e=n.sent,n.next=6,Object(Ke.c)({type:j,payload:e});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(Ke.c)({type:_,error:n.t0});case 12:case"end":return n.stop()}}),$e,null,[[0,8]])}var cn=function(){return We.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=c72352499d66ee87c33c6c30493a8e7e&language=en-US").then((function(e){return e.data}))};function on(){return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ke.a)([nn()]);case 2:case"end":return e.stop()}}),en)}var un=Object(He.a)(),ln=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Pe.d)(Object(Pe.a)(un)),sn=Object(Pe.e)(Fe,ln);un.run(on);var fn=sn;Object(i.render)(a.a.createElement(o.a,{store:fn},a.a.createElement(Ne,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.74f9a0b6.chunk.js.map