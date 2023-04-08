(this["webpackJsonpblog-using-third-party-api"]=this["webpackJsonpblog-using-third-party-api"]||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),i=a.n(s),c=(a(25),a(7)),o=a(2),l=a(3),u=a(5),g=a(4),h=a(6),m=a.n(h),d=a(18),f=a(19),p=a.n(f).a.create({baseURL:"https://blog-using-third-party-api.vercel.app"}),b={technology:"technology",science:"science",business:"business",entertainment:"entertainment",general:"general",health:"health",sports:"sports"},v=function(){function e(t){Object(o.a)(this,e),this._category=t,this._searchTerm="",this._pageSize=10,this._currentPage=1,this._totalPage=1}return Object(l.a)(e,[{key:"getNews",value:function(){var e=Object(d.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/api/".concat(this._getUrl()));case 3:return t=e.sent,a=t.data,this._totalPage=Math.ceil(a.totalResults/this._pageSize),e.abrupt("return",{articles:a.articles,isNext:this._isNext(),isPrevious:this._isPrevious(),totalResults:a.totalResults,category:this._category,totalPage:this._totalPage,currentPage:this._currentPage});case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"next",value:function(){return!!this._isNext()&&(this._currentPage++,this.getNews())}},{key:"prev",value:function(){return!!this._isPrevious()&&(this._currentPage--,this.getNews())}},{key:"setCurrentPage",value:function(e){if(e<1&&e>this._totalPage)throw new Error("Invaid page number");return this._currentPage=e,this.getNews()}},{key:"setChangeCategory",value:function(e){return this._category=e,this._currentPage=1,this.getNews()}},{key:"search",value:function(e){return this._searchTerm=e,this.getNews()}},{key:"_getUrl",value:function(){var e="";return this._category&&(e+="&category=".concat(this._category)),this._searchTerm&&(e+="&q=".concat(this._searchTerm)),this._pageSize&&(e+="&pageSize=".concat(this._pageSize)),this._currentPage&&(e+="&page=".concat(this._currentPage)),e}},{key:"_isNext",value:function(){return this._currentPage<this._totalPage}},{key:"_isPrevious",value:function(){return this._currentPage>1}}]),e}(),y=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={searchTerm:""},e.onChangeHandle=function(t){e.setState({searchTerm:t.target.value})},e.onKeyPressHandle=function(t){"Enter"===t.key&&e.props.search(e.state.searchTerm)},e.render=function(){var e=this.props,t=e.category,a=e.changeCategory;return r.a.createElement("div",{className:"my-4"},r.a.createElement("h1",{className:"mb-4",style:{fontWeight:"300"}},"Block Buster Headlines"),r.a.createElement("input",{type:"search",placeholder:"Type anything & Press enter to search",className:"form-control",onChange:this.onChangeHandle,onKeyPress:this.onKeyPressHandle,ref:this.props.innerRef}),r.a.createElement("div",{className:"my-4"},b&&Object.keys(b).map((function(e){return t===b[e]?r.a.createElement("button",{className:"btn btn-sm btn-warning mr-2 mb-2",onClick:function(){return a(b[e])}},"# ".concat(b[e])):r.a.createElement("button",{className:"btn btn-sm btn-light mr-2 mb-2",onClick:function(){return a(b[e])}},"# ".concat(b[e]))}))))},e}return a}(n.Component),E=r.a.forwardRef((function(e,t){return r.a.createElement(y,Object.assign({},e,{innerRef:t}))}));var w=r.a.forwardRef((function(e,t){var a,n=e.item;return r.a.createElement("div",{ref:function(e){return t.push(e)},className:"card mb-4"},n.urlToImage&&r.a.createElement("img",{className:"card-img-top",src:n.urlToImage,alt:n.urlToImage}),r.a.createElement("div",{className:"card-body"},r.a.createElement("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",style:{color:"#424242"}},r.a.createElement("h5",{className:"card-title"},n.title)),r.a.createElement("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",style:{color:"#424242"}},n.content),r.a.createElement("div",{className:"mt-2 d-flex align-item-center"},r.a.createElement("small",null,r.a.createElement("strong",null,"Published at ",(a=n.publishedAt,new Date(a).toDateString()))),r.a.createElement("div",{style:{padding:"0.25rem 0.5rem",background:"#ededed",color:"#424242",borderRadius:"0.25rem",display:"inline-block"},className:"ml-auto"},r.a.createElement("small",null,n.source.name)))))})),P=r.a.forwardRef((function(e,t){var a=e.news;return r.a.createElement("div",null,a&&0===a.length&&r.a.createElement("h4",null,"There is no News"),a&&a.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(w,{ref:t,item:e}))})))})),N=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isEditable:!1},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.next,n=t.prev,s=t.isNext,i=t.isPrevious,c=t.totalPage,o=t.currentPage,l=t.handlePageChange,u=t.gotoPage;return r.a.createElement("div",{className:"d-flex my-5 align-items-center"},r.a.createElement("button",{className:"btn btn-warning",disabled:!i,onClick:function(){return n()}},"Previous"),r.a.createElement("div",{className:"flex-grow-1 text-center"},this.state.isEditable?r.a.createElement("input",{type:"number",value:o,onChange:function(e){return l(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&(u(),e.setState({isEditable:!1}))}}):r.a.createElement("p",{style:{userSelect:"none",lineHeight:"1.1"},title:"Double Tab to Jumb Page",onDoubleClick:function(){e.setState({isEditable:!e.state.isEditable})}},o," of ",c,r.a.createElement("br",null),r.a.createElement("small",null,"Double Tab to Edit"))),r.a.createElement("button",{className:"btn btn-warning ml-auto",disabled:!s,onClick:function(){return a()}},"Next"))}}]),a}(n.Component);var _=function(){return r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("strong",null,"Loading..."),r.a.createElement("div",{className:"spinner-border text-danger ml-auto",role:"status","aria-hidden":"true"}))},S=new v(b.technology),k=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={data:{},isLoading:!0},e.aboutResult=r.a.createRef(),e.searchRef=r.a.createRef(),e.cbRef=null,e.itemRefList=[],e.next=function(){e.state.data.isNext&&e.setState({isLoading:!0}),S.next().then((function(t){e.setState({data:t,isLoading:!1})})).catch((function(t){alert("Something went wrong"),e.setState({isLoading:!1})}))},e.prev=function(){e.state.data.isPrevious&&e.setState({isLoading:!0}),S.prev().then((function(t){e.setState({data:t,isLoading:!1})})).catch((function(t){alert("Something went wrong"),e.setState({isLoading:!1})}))},e.handlePageChange=function(t){e.setState({data:Object(c.a)(Object(c.a)({},e.state.data),{},{currentPage:Number.parseInt(t)})})},e.gotoPage=function(){e.setState({isLoading:!0}),S.setCurrentPage(e.state.data.currentPage).then((function(t){e.setState({data:t,isLoading:!1})})).catch((function(t){alert("Something went wrong"),e.setState({isLoading:!1})}))},e.changeCategory=function(t){e.setState({isLoading:!0}),S.setChangeCategory(t).then((function(t){e.setState({data:t,isLoading:!1})})).catch((function(t){alert("Something went wrong"),e.setState({isLoading:!1})}))},e.search=function(t){e.setState({isLoading:!0}),S.search(t).then((function(t){e.setState({data:t,isLoading:!1})})).catch((function(t){alert("Something went wrong"),e.setState({isLoading:!1})}))},e.gotoTop=function(){window.scroll(0,e.aboutResult.current.scrollTop)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.getNews().then((function(t){e.setState({data:t,isLoading:!1})})).catch((function(t){alert("Something went wrong"),e.setState({isLoading:!1})}))}},{key:"render",value:function(){var e=this,t=this.state.data,a=t.articles,n=t.isPrevious,s=t.isNext,i=t.category,c=t.totalResults,o=t.currentPage,l=t.totalPage;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6 offset-md-3"},r.a.createElement(E,{ref:this.searchRef,category:i,changeCategory:this.changeCategory,search:this.search}),r.a.createElement("div",{className:"d-flex",ref:this.aboutResult},r.a.createElement("p",{ref:function(t){return e.cbRef=t},className:"text-black-50"},"About ",c," result found"),r.a.createElement("p",{className:"text-black-50 ml-auto"},o," page of ",l)),this.state.isLoading?r.a.createElement(_,null):r.a.createElement("div",null,r.a.createElement(P,{ref:this.itemRefList,news:a}),r.a.createElement(N,{next:this.next,prev:this.prev,isNext:s,isPrevious:n,totalPage:l,currentPage:o,handlePageChange:this.handlePageChange,gotoPage:this.gotoPage})),r.a.createElement("button",{onClick:this.gotoTop,className:"btn btn-primary"},"Go to top"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(44);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.4349e79e.chunk.js.map