(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return h});a(23);var n=a(69),r=a.n(n),o=(a(79),a(0)),i=a.n(o),c=a(147),l=a.n(c),s=a(143),p=a(150),f=a(145),m=function(e){var t=e.githubUrl.split("github.com/")[1].split("/"),a=t[0],n=t[1];return i.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user="+a+"&repo="+n+"&type=star&count=true",title:"GitHub Stars for @"+a+"/"+n,frameBorder:"0",scrolling:"0",width:"170px",height:"20px"})},d=function(e){var t=e.header,a=e.children,n=r()(e,["header","children"]);return i.a.createElement(s.a,Object.assign({pt:3,pb:6,px:3},n),i.a.createElement(s.d,{pl:3,my:3},t),a)},u=function(e){var t=e.gridSize,a=void 0===t?4:t,n=e.children,o=r()(e,["gridSize","children"]);return i.a.createElement(d,o,i.a.createElement(s.c,{p:3,gridGap:4,gridTemplateColumnsFill:a},n))},b=function(e){var t=e.url,a=e.banner,n=e.title,r=e.subhead;return i.a.createElement(s.k,{lineHeight:1.5},i.a.createElement(s.h,{to:t},a&&i.a.createElement(s.e,{mb:2,fluid:a.childImageSharp.fluid}),i.a.createElement(s.k,{as:"span"},n)),i.a.createElement(s.k,{color:"gray.6",fontSize:1,mt:1},r))},g=function(e){var t=e.url,a=e.github,n=e.title,r=e.subhead;return i.a.createElement(s.k,{lineHeight:1.5},i.a.createElement(s.h,{to:t},i.a.createElement(s.k,{as:"span"},n)),i.a.createElement(s.a,{mt:2},i.a.createElement(m,{githubUrl:a},"Star")),i.a.createElement(s.a,{mt:1},i.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/"+n+".svg"})," ",i.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/dm/"+n+".svg"})),i.a.createElement(s.k,{color:"gray.6",fontSize:1},r))};t.default=function(e){var t=e.data,a=t.blog,n=t.projects,r=t.experiments,o=t.page;return i.a.createElement(p.a,{hideNavTitle:!0,hideNav:!0},i.a.createElement(l.a,null,i.a.createElement("meta",{property:"og:type",content:"website"})),i.a.createElement(s.b,{minHeight:"100vh",flexDirection:"column"},i.a.createElement(s.b,{minHeight:"80vh",py:50,alignItems:"center",justifyContent:"center"},i.a.createElement(s.a,{width:350,px:3},i.a.createElement(s.d,null,"Peter Beshai"),i.a.createElement("p",null,"I'm the Director of Engineering and Design at"," ",i.a.createElement(s.h,{to:"https://cortico.ai"},"Cortico")," in Cambridge, MA."),i.a.createElement("p",null,"I make usable tools and visualizations with code."))),i.a.createElement(f.a,{showTitle:!1,hideHome:!0}),i.a.createElement(u,{id:"writing",header:"Writing",bg:"gray.0",gridSize:4},a&&a.edges.map(function(e){var t=e.node;return i.a.createElement(b,{key:t.id,url:t.frontmatter.url||t.fields.slug,banner:t.frontmatter.banner,title:t.frontmatter.title,subhead:i.a.createElement(i.a.Fragment,null,t.frontmatter.date,i.a.createElement(s.k,{color:"gray.6",fontSize:1,display:"inline"},t.frontmatter.host&&" on "+t.frontmatter.host))})})),i.a.createElement(u,{id:"projects",header:"Projects",bg:"gray.1",gridSize:6},n&&n.edges.map(function(e){var t=e.node;return i.a.createElement(b,{key:t.id,url:t.frontmatter.url||t.fields.slug,banner:t.frontmatter.banner,title:t.frontmatter.title,subhead:i.a.createElement(i.a.Fragment,null,t.frontmatter.date,i.a.createElement(s.k,{color:"gray.6",fontSize:1,display:"inline"},t.frontmatter.company&&" at "+t.frontmatter.company))})})),i.a.createElement(u,{id:"experiments",header:"Experiments",bg:"gray.0",gridSize:3},r&&r.edges.map(function(e){var t=e.node;return i.a.createElement(b,{key:t.id,url:t.frontmatter.url||t.fields.slug,banner:t.frontmatter.banner,title:t.frontmatter.title,subhead:t.frontmatter.date})})),i.a.createElement(u,{id:"open-source",header:"Open Source",bg:"gray.1",gridSize:3},o.frontmatter.open_source&&o.frontmatter.open_source.map(function(e){return i.a.createElement(g,{key:e.url,url:e.url,github:e.github,title:e.title,subhead:e.description})}))))};var h="1868253839"},143:function(e,t,a){"use strict";a.d(t,"a",function(){return d}),a.d(t,"b",function(){return u}),a.d(t,"k",function(){return b}),a.d(t,"d",function(){return g}),a.d(t,"h",function(){return y}),a.d(t,"e",function(){return v}),a.d(t,"c",function(){return x}),a.d(t,"i",function(){return w}),a.d(t,"j",function(){return j}),a.d(t,"f",function(){return S}),a.d(t,"g",function(){return O});a(153),a(154);var n=a(69),r=a.n(n),o=(a(23),a(0)),i=a.n(o),c=a(144),l=a(155),s=a.n(l),p=a(32),f=a(146),m=function(e){return function(t){return t.theme[e]}},d=Object(c.d)("div")(f.O,f.m,f.T,f.r,f.q,f.l,f.n,f.N,f.b,f.H,f.L,f.K,f.x,f.A,f.t,m("Box"));d.propTypes=Object.assign({},f.O.propTypes,f.T.propTypes,f.r.propTypes,f.l.propTypes,f.n.propTypes,f.N.propTypes,f.b.propTypes,f.x.propTypes,f.A.propTypes,f.t.propTypes);var u=Object(c.d)(d)({display:"flex"},f.p,f.o,f.a,f.G,m("Flex"));u.propTypes=Object.assign({},f.p.propTypes,f.o.propTypes,f.a.propTypes,f.G.propTypes);var b=Object(c.d)(d)(f.q,f.s,f.Q,f.J,f.I,f.R,m("Text"));b.propTypes=Object.assign({},f.q.propTypes,f.s.propTypes,f.Q.propTypes,f.J.propTypes,f.I.propTypes,f.R.propTypes);var g=Object(c.d)(b)(m("Header"));g.defaultProps={as:"h2",m:0,fontSize:3,fontWeight:"bold",fontFamily:"header",textStyle:"caps"};var h=Object(c.d)(b)(m("Link"),Object(c.c)(["color:",";border-bottom:2px solid ",";text-decoration:none;background:transparent;transition:0.2s background linear,0.2s border-color linear;&:hover{color:",";background:",";border-color:",";}"],function(e){return e.theme.colors.gray[7]},function(e){return e.theme.colors.gray[2]},function(e){return e.theme.colors.gray[8]},function(e){return e.theme.colors.cyan[0]},function(e){return e.theme.colors.cyan[2]}));h.defaultProps={as:"a"};var y=function(e){var t=e.children,a=e.to,n=e.activeClassName,o=r()(e,["children","to","activeClassName"]);return/^\/(?!\/)/.test(a)?i.a.createElement(h,Object.assign({as:p.Link,to:a,activeClassName:n},o),t):i.a.createElement(h,Object.assign({href:a},o),t)},E=Object(c.d)(d)({appearance:"none",display:"inline-block",textAlign:"center",lineHeight:"inherit",textDecoration:"none"},f.s,f.i,f.g,f.h,f.k,m("Button"));E.propTypes=Object.assign({},f.s.propTypes,f.i.propTypes,f.g.propTypes,f.h.propTypes,f.k.propTypes),E.defaultProps={as:"button",fontSize:"inherit",fontWeight:"bold",m:0,px:3,py:2,color:"white",bg:"blue",border:0,borderRadius:4};var v=Object(c.d)(d)({maxWidth:"100%",height:"auto"},f.F,f.h,m("Image"));v.propTypes=Object.assign({},f.F.propTypes,f.h.propTypes),v.defaultProps={as:s.a,m:0};var T=Object(f.S)({key:"cards"});Object(c.d)(d)(f.i,f.g,f.h,f.j,f.c,f.f,f.d,f.e,f.M,T,m("Card")).propTypes=Object.assign({},f.i.propTypes,f.g.propTypes,f.h.propTypes,f.j.propTypes,f.c.propTypes,f.f.propTypes,f.d.propTypes,f.e.propTypes,f.M.propTypes,T.propTypes);var k=Object(f.P)({prop:"gridTemplateColumnsFill",cssProperty:"gridTemplateColumns",key:"gridColumnSizes",transformValue:function(e){return"repeat(auto-fill, minmax("+(Number.isNaN(e)?e:e+"px")+", 1fr))"},scale:[0,120,180,240,300,360,420,480,540,600]}),x=Object(c.d)(d)({display:"grid"},f.z,f.y,f.B,f.v,f.u,f.w,f.D,f.E,f.C,k,m("Grid"));x.defaultProps={gridGap:3},x.propTypes=Object.assign({},f.z.propTypes,f.y.propTypes,f.B.propTypes,f.v.propTypes,f.u.propTypes,f.w.propTypes,f.D.propTypes,f.E.propTypes,f.C.propTypes);var w=Object(c.d)(d).withConfig({displayName:"core__List",componentId:"eqpeba-0"})(["list-style-type:",";"],function(e){return e.listStyleType});w.defaultProps={as:"ul"};var j=function(e){return i.a.createElement(d,Object.assign({as:"li"},e))},S=Object(c.d)(w).withConfig({displayName:"core__InlineList",componentId:"eqpeba-1"})(["list-style-type:none;padding-left:0;"]),O=Object(c.d)(b).withConfig({displayName:"core__InlineListItem",componentId:"eqpeba-2"})(["display:inline-block;&:last-child{margin-right:0;}&::before{content:'•';color:",";margin-right:","px;}&:first-child::before{content:'';margin-right:0;}"],function(e){return e.theme.colors.gray[3]},function(e){return e.theme.space[e.mr]});O.defaultProps={as:"li",mr:3}},145:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(32),a(143));t.a=function(e){var t=e.showTitle,a=e.hideHome;return r.a.createElement(o.a,{p:3,mx:"auto",maxWidth:800},r.a.createElement(o.k,{textAlign:"center"},t&&r.a.createElement(o.d,null,"Peter Beshai"),r.a.createElement(o.f,null,!a&&r.a.createElement(o.g,null,r.a.createElement(o.h,{to:"/",activeClassName:"active"},"Home")),r.a.createElement(o.g,null,r.a.createElement(o.h,{to:"/#writing",activeClassName:"active"},"Writing")),r.a.createElement(o.g,null,r.a.createElement(o.h,{to:"/#projects",activeClassName:"active"},"Projects")),r.a.createElement(o.g,null,r.a.createElement(o.h,{to:"/#experiments",activeClassName:"active"},"Experiments")),r.a.createElement(o.g,null,r.a.createElement(o.h,{to:"/#open-source",activeClassName:"active"},"Open Source")))))}},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Peter Beshai"}}}}},149:function(e,t,a){},150:function(e,t,a){"use strict";var n=a(148),r=a(0),o=a.n(r),i=a(1),c=a.n(i),l=a(147),s=a.n(l),p=a(144),f=a(32),m=a(156),d=a.n(m),u=(a(23),a(157)),b=a.n(u),g=a(158),h=a.n(g),y={textStyles:{caps:{textTransform:"uppercase",letterSpacing:"0.035em"},contentHeader:{textTransform:"none",letterSpacing:"0.035em"}},fontSizes:[12,16,19,23,27,32,48,64,96,128],space:[0,4,8,16,32,64,128,256],colors:Object.assign({darken:b.a,lighten:h.a,darken1:b()(.1),darken2:b()(.15),darken3:b()(.2)},{white:"#ffffff",black:"#000000",gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]}),fonts:{body:"Karla,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",header:"'IBM Plex Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",code:"Menlo,Monaco,Consolas,Courier New,monospace"}};function E(){var e=d()(["\n  html,\n  body,\n  #___gatsby {\n    background-color: #fff;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    color: #000;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-family: ",";\n    line-height: 1.7;\n    font-size: ","px;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  #___gatsby > div {\n    height: 100%;\n  }\n  img.full-width-image {\n    width: 100%;\n  }\n  a {\n    color: #495057;\n  }\n"]);return E=function(){return e},e}var v=Object(p.b)(E(),y.fonts.body,y.fontSizes[2]),T=a(145),k=a(143),x=function(){return o.a.createElement(k.a,{px:3,py:5,mx:"auto"},o.a.createElement(k.k,{textAlign:"center"},o.a.createElement(k.f,null,o.a.createElement(k.g,null,o.a.createElement(k.h,{to:"mailto:peter.beshai@gmail.com"},"peter.beshai@gmail.com")),o.a.createElement(k.g,null,o.a.createElement(k.h,{to:"https://twitter.com/pbesh"},"Twitter")),o.a.createElement(k.g,null,o.a.createElement(k.h,{to:"https://www.linkedin.com/in/pbeshai"},"LinkedIn")),o.a.createElement(k.g,null,o.a.createElement(k.h,{to:"https://github.com/pbeshai"},"GitHub")),o.a.createElement(k.g,null,o.a.createElement(k.h,{to:"https://instagram.com/pbeshasketch"},"Instagram")))))},w=(a(149),"https://peterbeshai.com"),j=function(e){var t=e.children,a=e.hideNavTitle,r=e.hideNav,i=e.pageTitle,c=e.description,l=void 0===c?"Peter Beshai makes usable tools and visualizations with code.":c,m=e.metaImage,d=e.slug,u=void 0===d?"":d;return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,null),o.a.createElement(f.StaticQuery,{query:"2994927498",render:function(e){var n=e.site.siteMetadata.title,c=i?i+" - "+n:n;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{title:c},o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=IBM+Plex+Sans:700|Karla:400,400i,700",rel:"stylesheet"}),o.a.createElement("html",{lang:"en"}),o.a.createElement("meta",{name:"description",content:l}),o.a.createElement("meta",{name:"twitter:description",content:l}),o.a.createElement("meta",{property:"og:description",content:l}),o.a.createElement("meta",{name:"keywords",content:"data vis, visualization, creative coding, generative art, nba, basketball"}),o.a.createElement("meta",{name:"twitter:site",content:"@pbesh"}),o.a.createElement("meta",{name:"twitter:creator",content:"@pbesh"}),o.a.createElement("meta",{property:"og:title",content:i||n}),o.a.createElement("meta",{property:"twitter:title",content:i||n}),o.a.createElement("meta",{property:"og:url",content:""+w+u}),m&&o.a.createElement("meta",{property:"og:image",content:""+w+m}),m&&o.a.createElement("meta",{name:"twitter:image",content:""+w+m})),o.a.createElement(p.a,{theme:y},o.a.createElement("div",null,!r&&o.a.createElement(T.a,{showTitle:!a}),t,o.a.createElement(x,null))))},data:n}))};j.propTypes={children:c.a.node.isRequired};t.a=j}}]);
//# sourceMappingURL=component---src-pages-index-js-f13e40757851358cd162.js.map