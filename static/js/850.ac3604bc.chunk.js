"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[850],{8850:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(2791),s=n(9434),i=function(e){return e.tweets.status},r=function(e){return e.tweets.users},l=n(9245),c=n(9439),u=n(6048),o=n.n(u),d=n(493),p=n(9164),g=n(7622),f=n(4737),m=n(23),x=n(3329),v=function(e){var t=e.tweetsPerPage,n=(0,a.useState)(null),i=(0,c.Z)(n,2),l=i[0],u=i[1],v=(0,a.useState)(0),h=(0,c.Z)(v,2),C=h[0],j=h[1],k=(0,a.useState)(0),L=(0,c.Z)(k,2),y=L[0],w=L[1],N=(0,s.v9)(r),b=(0,s.I0)();(0,a.useEffect)((function(){if(0!==N.length){var e=y+t;u(N.slice(y,e)),j(Math.ceil(N.length/t))}else b((0,f.u)())}),[b,y,t,N]);return(0,x.jsxs)(x.Fragment,{children:[l&&(0,x.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,x.jsx)(d.Z,{dense:!0,sx:{width:"100%",maxWidth:480},children:l.map((function(e){return(0,x.jsxs)(p.ZP,{children:[(0,x.jsx)("img",{src:e.avatar,alt:e.user}),(0,x.jsx)(g.Z,{divider:"true",primary:"".concat(e.tweets," TWEETS : ").concat(e.followers," FOLLOWERS")}),(0,x.jsx)("button",{onClick:function(){return b((0,m.I)(e.id))},children:e.followed?"FOLLOWING":"FOLLOW"})]},e.id)}))})}),(0,x.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"30px"},children:(0,x.jsx)(o(),{nextLabel:">",onPageChange:function(e){var n=e.selected*t%N.length;w(n)},pageRangeDisplayed:2,marginPagesDisplayed:1,pageCount:C,previousLabel:"<",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",activeClassName:"active",renderOnZeroPageCount:null})})]})},h=(0,n(6382).oM)({name:"filter",initialState:{filter:""},reducers:{setFilter:function(e,t){e.filter=t.payload}}}),C=h.actions.setFilter,j=(h.reducer,function(){var e=(0,s.I0)();return(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{children:"Find contacts by name"}),(0,x.jsx)("input",{type:"text",onChange:function(t){e(C(t.target.value.toLowerCase().trim()))}})]})});var k=function(){var e=(0,s.v9)(i);return(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,x.jsx)(j,{}),"pending"===e&&(0,x.jsx)(l.a,{}),(0,x.jsx)(v,{tweetsPerPage:3})]})}}}]);
//# sourceMappingURL=850.ac3604bc.chunk.js.map