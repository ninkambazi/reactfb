(this.webpackJsonpmyfb=this.webpackJsonpmyfb||[]).push([[0],{55:function(e,s,t){},65:function(e,s,t){},66:function(e,s,t){},68:function(e,s,t){},88:function(e,s,t){},89:function(e,s,t){},90:function(e,s,t){},91:function(e,s,t){},92:function(e,s,t){},93:function(e,s,t){},94:function(e,s,t){},95:function(e,s,t){},96:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t(42),r=t.n(c),n=(t(55),t(110)),i=t(111),l=t(112),o=t(113),j=t(19),b=t(11),d=t(49),u=t(20),m=function(e,s){switch(s.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:s.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"FOLLOW":return Object(u.a)(Object(u.a)({},e),{},{user:Object(u.a)(Object(u.a)({},e.user),{},{followings:[].concat(Object(d.a)(e.user.followings),[s.payload])})});case"UNFOLLOW":return Object(u.a)(Object(u.a)({},e),{},{user:Object(u.a)(Object(u.a)({},e.user),{},{followings:e.user.followings.filter((function(e){return e!==s.payload}))})});default:return e}},p=t(0),h={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},O=Object(a.createContext)(h),x=function(e){var s=e.children,t=Object(a.useReducer)(m,h),c=Object(b.a)(t,2),r=c[0],n=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r.user))}),[r.user]),Object(p.jsx)(O.Provider,{value:{user:r.user,isFetching:r.isFetching,error:r.error,dispatch:n},children:s})};function f(){var e=Object(a.useContext)(O).user,s="process.env.PORT/images||http://localhost:8800/images/";return Object(p.jsxs)("div",{className:"topbarContainer",children:[Object(p.jsx)("div",{className:"topbarLeft",children:Object(p.jsx)(j.b,{to:"/",style:{textDecoration:"none"},children:Object(p.jsx)("span",{className:"logo",children:"Lamasocial"})})}),Object(p.jsx)("div",{className:"topbarCenter",children:Object(p.jsxs)("div",{className:"searchbar",children:[Object(p.jsx)(n.a,{className:"searchIcon"}),Object(p.jsx)("input",{placeholder:"Search for friend, post or video",className:"searchInput"})]})}),Object(p.jsxs)("div",{className:"topbarRight",children:[Object(p.jsxs)("div",{className:"topbarLinks",children:[Object(p.jsx)("span",{className:"topbarLink",children:"Homepage"}),Object(p.jsx)("span",{className:"topbarLink",children:"Timeline"})]}),Object(p.jsxs)("div",{className:"topbarIcons",children:[Object(p.jsxs)("div",{className:"topbarIconItem",children:[Object(p.jsx)(i.a,{}),Object(p.jsx)("span",{className:"topbarIconBadge",children:"1"})]}),Object(p.jsxs)("div",{className:"topbarIconItem",children:[Object(p.jsx)(l.a,{}),Object(p.jsx)("span",{className:"topbarIconBadge",children:"2"})]}),Object(p.jsxs)("div",{className:"topbarIconItem",children:[Object(p.jsx)(o.a,{}),Object(p.jsx)("span",{className:"topbarIconBadge",children:"1"})]})]}),Object(p.jsx)(j.b,{to:"/profile/".concat(e.username),children:Object(p.jsx)("img",{src:e.profilePicture?s+e.profilePicture:s+"person/noAvatar.png",alt:"",className:"topbarImg"})})]})]})}t(65);var g=t(114),N=t(115),v=t(116),I=t(117),w=t(118),L=t(119),y=t(120),k=t(121),P=[{id:1,profilePicture:"person/1.jpeg",username:"Edwin SAG"},{id:2,profilePicture:"person/2.jpeg",username:"Smart Codes"},{id:3,profilePicture:"person/3.jpeg",username:"Ninkambazi EN"},{id:4,profilePicture:"person/4.jpeg",username:"Dora Musa"},{id:5,profilePicture:"person/5.jpeg",username:"Thomas Mahanjumati"},{id:6,profilePicture:"person/6.jpeg",username:"Shaa Buu"},{id:7,profilePicture:"person/7.jpeg",username:"Travis Juma"},{id:8,profilePicture:"person/8.jpeg",username:"Penda James"},{id:9,profilePicture:"person/9.jpeg",username:"Mutu Mesa"},{id:10,profilePicture:"person/10.jpeg",username:"Alan Mwaipopo"}];t(66);function C(e){var s=e.user;return Object(p.jsxs)("li",{className:"sidebarFriend",children:[Object(p.jsx)("img",{className:"sidebarFriendImg",src:"process.env.PORT/images||http://localhost:8800/images/"+s.profilePicture,alt:""}),Object(p.jsx)("span",{className:"sidebarFriendName",children:s.username})]})}function F(){return Object(p.jsx)("div",{className:"sidebar",children:Object(p.jsxs)("div",{className:"sidebarWrapper",children:[Object(p.jsxs)("ul",{className:"sidebarList",children:[Object(p.jsxs)("li",{className:"sidebarListItem",children:[Object(p.jsx)(g.a,{className:"sidebarIcon"}),Object(p.jsx)("span",{className:"sidebarListItemText",children:"Feed"})]}),Object(p.jsxs)("li",{className:"sidebarListItem",children:[Object(p.jsx)(l.a,{className:"sidebarIcon"}),Object(p.jsx)("span",{className:"sidebarListItemText",children:"Chats"})]}),Object(p.jsxs)("li",{className:"sidebarListItem",children:[Object(p.jsx)(N.a,{className:"sidebarIcon"}),Object(p.jsx)("span",{className:"sidebarListItemText",children:"Videos"})]}),Object(p.jsxs)("li",{className:"sidebarListItem",children:[Object(p.jsx)(v.a,{className:"sidebarIcon"}),Object(p.jsx)("span",{className:"sidebarListItemText",children:"Groups"})]}),Object(p.jsxs)("li",{className:"sidebarListItem",children:[Object(p.jsx)(I.a,{className:"sidebarIcon"}),Object(p.jsx)("span",{className:"sidebarListItemText",children:"Bookmarks"})]}),Object(p.jsxs)("li",{className:"sidebarListItem",children:[Object(p.jsx)(w.a,{className:"sidebarIcon"}),Object(p.jsx)("span",{className:"sidebarListItemText",children:"Questions"})]}),Object(p.jsxs)("li",{className:"sidebarListItem",children:[Object(p.jsx)(L.a,{className:"sidebarIcon"}),Object(p.jsx)("span",{className:"sidebarListItemText",children:"Jobs"})]}),Object(p.jsxs)("li",{className:"sidebarListItem",children:[Object(p.jsx)(y.a,{className:"sidebarIcon"}),Object(p.jsx)("span",{className:"sidebarListItemText",children:"Events"})]}),Object(p.jsxs)("li",{className:"sidebarListItem",children:[Object(p.jsx)(k.a,{className:"sidebarIcon"}),Object(p.jsx)("span",{className:"sidebarListItemText",children:"Courses"})]})]}),Object(p.jsx)("button",{className:"sidebarButton",children:"Show More"}),Object(p.jsx)("hr",{className:"sidebarHr"}),Object(p.jsx)("ul",{className:"sidebarFriendList",children:P.map((function(e){return Object(p.jsx)(C,{user:e},e.id)}))})]})})}var T=t(4),S=t.n(T),R=t(10),B=(t(68),t(122)),_=t(8),A=t.n(_),E=t(48);function U(e){var s=e.post,t=Object(a.useState)(s.likes.length),c=Object(b.a)(t,2),r=c[0],n=c[1],i=Object(a.useState)(!1),l=Object(b.a)(i,2),o=l[0],d=l[1],u=Object(a.useState)({}),m=Object(b.a)(u,2),h=m[0],x=m[1],f="process.env.PORT/images||http://localhost:8800/images/",g=Object(a.useContext)(O).user;Object(a.useEffect)((function(){d(s.likes.includes(g._id))}),[g._id,s.likes]),Object(a.useEffect)((function(){var e=function(){var e=Object(R.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/users?userId=".concat(s.userId));case 2:t=e.sent,x(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s.userId]);var N=function(){try{A.a.put("/posts/"+s._id+"/like",{userId:g._id})}catch(e){}n(o?r-1:r+1),d(!o)};return Object(p.jsx)("div",{className:"post",children:Object(p.jsxs)("div",{className:"postWrapper",children:[Object(p.jsxs)("div",{className:"postTop",children:[Object(p.jsxs)("div",{className:"postTopLeft",children:[Object(p.jsx)(j.b,{to:"/profile/".concat(h.username),children:Object(p.jsx)("img",{className:"postProfileImg",src:h.profilePicture?f+h.profilePicture:f+"person/noAvatar.png",alt:""})}),Object(p.jsx)("span",{className:"postUsername",children:h.username}),Object(p.jsx)("span",{className:"postDate",children:Object(E.a)(s.createdAt)})]}),Object(p.jsx)("div",{className:"postTopRight",children:Object(p.jsx)(B.a,{})})]}),Object(p.jsxs)("div",{className:"postCenter",children:[Object(p.jsx)("span",{className:"postText",children:null===s||void 0===s?void 0:s.desc}),Object(p.jsx)("img",{className:"postImg",src:f+s.img,alt:""})]}),Object(p.jsxs)("div",{className:"postBottom",children:[Object(p.jsxs)("div",{className:"postBottomLeft",children:[Object(p.jsx)("img",{className:"likeIcon",src:"".concat(f,"like.png"),onClick:N,alt:""}),Object(p.jsx)("img",{className:"likeIcon",src:"".concat(f,"heart.png"),onClick:N,alt:""}),Object(p.jsxs)("span",{className:"postLikeCounter",children:[r," people like it"]})]}),Object(p.jsx)("div",{className:"postBottomRight",children:Object(p.jsxs)("span",{className:"postCommentText",children:[s.comment," comments"]})})]})]})})}t(88);var D=t(123),W=t(124),G=t(125),M=t(126),J=t(127);function q(){var e=Object(a.useContext)(O).user,s="process.env.PORT/images||http://localhost:8800/images/",t=Object(a.useRef)(),c=Object(a.useState)(null),r=Object(b.a)(c,2),n=r[0],i=r[1],l=function(){var s=Object(R.a)(S.a.mark((function s(a){var c,r,i;return S.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(a.preventDefault(),c={userId:e._id,desc:t.current.value},!n){s.next=16;break}return r=new FormData,i=Date.now()+n.name,r.append("name",i),r.append("file",n),c.img=i,console.log(c),s.prev=9,s.next=12,A.a.post("/upload",r);case 12:s.next=16;break;case 14:s.prev=14,s.t0=s.catch(9);case 16:return s.prev=16,s.next=19,A.a.post("/posts",c);case 19:window.location.reload(),s.next=24;break;case 22:s.prev=22,s.t1=s.catch(16);case 24:case"end":return s.stop()}}),s,null,[[9,14],[16,22]])})));return function(e){return s.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"share",children:Object(p.jsxs)("div",{className:"shareWrapper",children:[Object(p.jsxs)("div",{className:"shareTop",children:[Object(p.jsx)("img",{className:"shareProfileImg",src:e.profilePicture?s+e.profilePicture:s+"person/noAvatar.png",alt:""}),Object(p.jsx)("input",{placeholder:"What's in your mind "+e.username+"?",className:"shareInput",ref:t})]}),Object(p.jsx)("hr",{className:"shareHr"}),n&&Object(p.jsxs)("div",{className:"shareImgContainer",children:[Object(p.jsx)("img",{className:"shareImg",src:URL.createObjectURL(n),alt:""}),Object(p.jsx)(D.a,{className:"shareCancelImg",onClick:function(){return i(null)}})]}),Object(p.jsxs)("form",{className:"shareBottom",onSubmit:l,children:[Object(p.jsxs)("div",{className:"shareOptions",children:[Object(p.jsxs)("label",{htmlFor:"file",className:"shareOption",children:[Object(p.jsx)(W.a,{htmlColor:"tomato",className:"shareIcon"}),Object(p.jsx)("span",{className:"shareOptionText",children:"Photo or Video"}),Object(p.jsx)("input",{style:{display:"none"},type:"file",id:"file",accept:".png,.jpeg,.jpg",onChange:function(e){return i(e.target.files[0])}})]}),Object(p.jsxs)("div",{className:"shareOption",children:[Object(p.jsx)(G.a,{htmlColor:"blue",className:"shareIcon"}),Object(p.jsx)("span",{className:"shareOptionText",children:"Tag"})]}),Object(p.jsxs)("div",{className:"shareOption",children:[Object(p.jsx)(M.a,{htmlColor:"green",className:"shareIcon"}),Object(p.jsx)("span",{className:"shareOptionText",children:"Location"})]}),Object(p.jsxs)("div",{className:"shareOption",children:[Object(p.jsx)(J.a,{htmlColor:"goldenrod",className:"shareIcon"}),Object(p.jsx)("span",{className:"shareOptionText",children:"Feelings"})]})]}),Object(p.jsx)("button",{className:"shareButton",type:"submit",children:"Share"})]})]})})}t(89);function z(e){var s=e.username,t=Object(a.useState)([]),c=Object(b.a)(t,2),r=c[0],n=c[1],i=Object(a.useContext)(O).user;return Object(a.useEffect)((function(){var e=function(){var e=Object(R.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=6;break}return e.next=3,A.a.get("/posts/profile/"+s);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,A.a.get("posts/timeline/"+i._id);case 8:e.t0=e.sent;case 9:t=e.t0,n(t.data.sort((function(e,s){return new Date(s.createdAt)-new Date(e.createdAt)})));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s,i._id]),Object(p.jsx)("div",{className:"feed",children:Object(p.jsxs)("div",{className:"feedWrapper",children:[(!s||s===i.username)&&Object(p.jsx)(q,{}),r.map((function(e){return Object(p.jsx)(U,{post:e},e._id)}))]})})}t(90),t(91);function V(e){var s=e.user;return Object(p.jsxs)("li",{className:"rightbarFriend",children:[Object(p.jsxs)("div",{className:"rightbarProfileImgContainer",children:[Object(p.jsx)("img",{className:"rightbarProfileImg",src:"process.env.PORT/images||http://localhost:8800/images/"+s.profilePicture,alt:""}),Object(p.jsx)("span",{className:"rightbarOnline"})]}),Object(p.jsx)("span",{className:"rightbarUsername",children:s.username})]})}var H=t(128),K=t(129);function Q(e){var s=e.user,t="process.env.PORT/images||http://localhost:8800/images/",c=Object(a.useState)([]),r=Object(b.a)(c,2),n=r[0],i=r[1],l=Object(a.useContext)(O),o=l.user,d=l.dispatch,u=Object(a.useState)(o.followings.includes(null===s||void 0===s?void 0:s.id)),m=Object(b.a)(u,2),h=m[0],x=m[1];Object(a.useEffect)((function(){var e=function(){var e=Object(R.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("/users/friends/"+s._id);case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[s]);var f=function(){var e=Object(R.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!h){e.next=7;break}return e.next=4,A.a.put("/users/".concat(s._id,"/unfollow"),{userId:o._id});case 4:d({type:"UNFOLLOW",payload:s._id}),e.next=10;break;case 7:return e.next=9,A.a.put("/users/".concat(s._id,"/follow"),{userId:o._id});case 9:d({type:"FOLLOW",payload:s._id});case 10:x(!h),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),g=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"birthdayContainer",children:[Object(p.jsx)("img",{className:"birthdayImg",src:"assets/gift.png",alt:""}),Object(p.jsxs)("span",{className:"birthdayText",children:[Object(p.jsx)("b",{children:"Pola Foster"})," and ",Object(p.jsx)("b",{children:"3 other friends"})," have a birhday today."]})]}),Object(p.jsx)("img",{className:"rightbarAd",src:"assets/ad.png",alt:""}),Object(p.jsx)("h4",{className:"rightbarTitle",children:"Online Friends"}),Object(p.jsx)("ul",{className:"rightbarFriendList",children:P.map((function(e){return Object(p.jsx)(V,{user:e},e.id)}))})]})},N=function(){return Object(p.jsxs)(p.Fragment,{children:[s.username!==o.username&&Object(p.jsxs)("button",{className:"rightbarFollowButton",onClick:f,children:[h?"Unfollow":"Follow",h?Object(p.jsx)(H.a,{}):Object(p.jsx)(K.a,{})]}),Object(p.jsx)("h4",{className:"rightbarTitle",children:"User information"}),Object(p.jsxs)("div",{className:"rightbarInfo",children:[Object(p.jsxs)("div",{className:"rightbarInfoItem",children:[Object(p.jsx)("span",{className:"rightbarInfoKey",children:"City:"}),Object(p.jsx)("span",{className:"rightbarInfoValue",children:s.city})]}),Object(p.jsxs)("div",{className:"rightbarInfoItem",children:[Object(p.jsx)("span",{className:"rightbarInfoKey",children:"From:"}),Object(p.jsx)("span",{className:"rightbarInfoValue",children:s.from})]}),Object(p.jsxs)("div",{className:"rightbarInfoItem",children:[Object(p.jsx)("span",{className:"rightbarInfoKey",children:"Relationship:"}),Object(p.jsx)("span",{className:"rightbarInfoValue",children:1===s.relationship?"Single":1===s.relationship?"Married":"-"})]})]}),Object(p.jsx)("h4",{className:"rightbarTitle",children:"User friends"}),Object(p.jsx)("div",{className:"rightbarFollowings",children:n.map((function(e){return Object(p.jsx)(j.b,{to:"/profile/"+e.username,style:{textDecoration:"none"},children:Object(p.jsxs)("div",{className:"rightbarFollowing",children:[Object(p.jsx)("img",{src:e.profilePicture?t+e.profilePicture:t+"person/noAvatar.png",alt:"",className:"rightbarFollowingImg"}),Object(p.jsx)("span",{className:"rightbarFollowingName",children:e.username})]})})}))})]})};return Object(p.jsx)("div",{className:"rightbar",children:Object(p.jsx)("div",{className:"rightbarWrapper",children:s?Object(p.jsx)(N,{}):Object(p.jsx)(g,{})})})}t(92);function X(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{}),Object(p.jsxs)("div",{className:"homeContainer",children:[Object(p.jsx)(F,{}),Object(p.jsx)(z,{}),Object(p.jsx)(Q,{})]})]})}t(93);var Y=function(){var e=Object(R.a)(S.a.mark((function e(s,t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOGIN_START"}),e.prev=1,e.next=4,A.a.post("/auth/login",s);case 4:a=e.sent,t({type:"LOGIN_SUCCESS",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"LOGIN_FAILURE",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(s,t){return e.apply(this,arguments)}}(),Z=t(130);function $(){var e=Object(a.useRef)(),s=Object(a.useRef)(),t=Object(a.useContext)(O),c=t.isFetching,r=t.dispatch;return Object(p.jsx)("div",{className:"login",children:Object(p.jsxs)("div",{className:"loginWrapper",children:[Object(p.jsxs)("div",{className:"loginLeft",children:[Object(p.jsx)("h3",{className:"loginLogo",children:"MySocial"}),Object(p.jsx)("span",{className:"loginDesc",children:"with friends and the world around you on NinkambziFB \ud83d\ude05."})]}),Object(p.jsx)("div",{className:"loginRight",children:Object(p.jsxs)("form",{className:"loginBox",onSubmit:function(t){t.preventDefault(),Y({email:e.current.value,password:s.current.value},r)},children:[Object(p.jsx)("input",{placeholder:"Email",type:"email",required:!0,className:"loginInput",ref:e}),Object(p.jsx)("input",{placeholder:"Password",type:"password",required:!0,minLength:"6",className:"loginInput",ref:s}),Object(p.jsx)("button",{className:"loginButton",type:"submit",disabled:c,children:c?Object(p.jsx)(Z.a,{color:"white",size:"20px"}):"Log In"}),Object(p.jsx)("span",{className:"loginForgot",children:"Forgot Password?"}),Object(p.jsx)("button",{className:"loginRegisterButton",children:c?Object(p.jsx)(Z.a,{color:"white",size:"20px"}):"Create a New Account"})]})})]})})}t(94);var ee=t(3);function se(){var e="process.env.PORT/images||http://localhost:8800/images/",s=Object(a.useState)({}),t=Object(b.a)(s,2),c=t[0],r=t[1],n=Object(ee.h)().username;return Object(a.useEffect)((function(){var e=function(){var e=Object(R.a)(S.a.mark((function e(){var s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/users?username=".concat(n));case 2:s=e.sent,r(s.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{}),Object(p.jsxs)("div",{className:"profile",children:[Object(p.jsx)(F,{}),Object(p.jsxs)("div",{className:"profileRight",children:[Object(p.jsxs)("div",{className:"profileRightTop",children:[Object(p.jsxs)("div",{className:"profileCover",children:[Object(p.jsx)("img",{className:"profileCoverImg",src:c.coverPicture?e+c.coverPicture:e+"person/noCover.png",alt:""}),Object(p.jsx)("img",{className:"profileUserImg",src:c.profilePicture?e+c.profilePicture:e+"person/noAvatar.png",alt:""})]}),Object(p.jsxs)("div",{className:"profileInfo",children:[Object(p.jsx)("h4",{className:"profileInfoName",children:c.username}),Object(p.jsx)("span",{className:"profileInfoDesc",children:c.desc})]})]}),Object(p.jsxs)("div",{className:"profileRightBottom",children:[Object(p.jsx)(z,{username:n}),Object(p.jsx)(Q,{user:c})]})]})]})]})}t(95);function te(){var e=Object(a.useRef)(),s=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),r=Object(ee.g)(),n=function(){var a=Object(R.a)(S.a.mark((function a(n){var i;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),c.current.value===t.current.value){a.next=5;break}c.current.setCustomValidity("Passwords don't match!"),a.next=15;break;case 5:return i={username:e.current.value,email:s.current.value,password:t.current.value},a.prev=6,a.next=9,A.a.post("/auth/register",i);case 9:r.push("/login"),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(6),console.log(a.t0);case 15:case"end":return a.stop()}}),a,null,[[6,12]])})));return function(e){return a.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"login",children:Object(p.jsxs)("div",{className:"loginWrapper",children:[Object(p.jsxs)("div",{className:"loginLeft",children:[Object(p.jsx)("h3",{className:"loginLogo",children:"Ninkambazi Social"}),Object(p.jsx)("span",{className:"loginDesc",children:"Connect with friends and the world around you on NinkambziFB \ud83d\ude05."})]}),Object(p.jsx)("div",{className:"loginRight",children:Object(p.jsxs)("form",{className:"loginBox",onSubmit:n,children:[Object(p.jsx)("input",{placeholder:"Username",required:!0,ref:e,className:"loginInput"}),Object(p.jsx)("input",{placeholder:"Email",required:!0,ref:s,className:"loginInput",type:"email"}),Object(p.jsx)("input",{placeholder:"Password",required:!0,ref:t,className:"loginInput",type:"password",minLength:"6"}),Object(p.jsx)("input",{placeholder:"Password Again",required:!0,ref:c,className:"loginInput",type:"password"}),Object(p.jsx)("button",{className:"loginButton",type:"submit",children:"Sign Up"}),Object(p.jsx)("button",{className:"loginRegisterButton",children:"Log into Account"})]})})]})})}var ae=function(){var e=Object(a.useContext)(O).user;return Object(p.jsx)(j.a,{children:Object(p.jsxs)(ee.d,{children:[Object(p.jsx)(ee.b,{exact:!0,path:"/",children:e?Object(p.jsx)(X,{}):Object(p.jsx)(te,{})}),Object(p.jsx)(ee.b,{path:"/login",children:e?Object(p.jsx)(ee.a,{to:"/"}):Object(p.jsx)($,{})}),Object(p.jsx)(ee.b,{path:"/register",children:e?Object(p.jsx)(ee.a,{to:"/"}):Object(p.jsx)(te,{})}),Object(p.jsx)(ee.b,{path:"/profile/:username",children:Object(p.jsx)(se,{})})]})})};r.a.render(Object(p.jsx)(x,{children:Object(p.jsx)(ae,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.8988b694.chunk.js.map