"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{2074:(e,t,n)=>{n.d(t,{o:()=>s});var r=n(4848),i=n(6095),o=n(2907);let l=(0,n(3552).Ay)("span")(e=>{let{dotColor:t,theme:n}=e;return{position:"relative",width:"10px",height:"10px",borderRadius:"5px",backgroundColor:t,color:t,animation:"dot-flashing 1s infinite linear alternate",animationDelay:"0.5s","&::before, &::after":{content:'""',display:"inline-block",position:"absolute",top:0},"&::before":{left:"-15px",width:"10px",height:"10px",borderRadius:"5px",backgroundColor:t,color:t,animation:"dot-flashing 1s infinite alternate",animationDelay:"0s"},"&::after":{left:"15px",width:"10px",height:"10px",borderRadius:"5px",backgroundColor:t,color:t,animation:"dot-flashing 1s infinite alternate",animationDelay:"1s"},"@keyframes dot-flashing":{"0%":{backgroundColor:t},"50%, 100%":{backgroundColor:t===n.palette.common.white?n.palette.common.whiteOpacity:n.palette.common.blackOpacity}}}}),s=e=>{let{loading:t=!1,children:n,...s}=e,a=(0,o.A)(),h="outlined"===e.variant?a.palette.common.black:a.palette.common.white;return(0,r.jsx)(i.A,{...s,loading:t,loadingIndicator:(0,r.jsx)(l,{dotColor:h}),children:n})}},5864:(e,t,n)=>{n.d(t,{X:()=>h});var r=n(4848),i=n(3058),o=n(6977),l=n(3559),s=n(2413),a=n(9785);let h=e=>{let{name:t,inputProps:n,onChange:h,...d}=e,{control:A}=(0,a.xW)(),c=(e,t)=>{let r=e.target.value;(null==n?void 0:n.type)==="phone"&&(r=r.replace(/[^0-9]/g,"")).split(".").length>2&&(r=r.slice(0,-1)),(null==n?void 0:n.type)==="number"&&((r=r.replace(/[^0-9]/g,"")).startsWith("0")&&r.length>1&&(r=r.replace(/^0+/,"")),r.split(".").length>2&&(r=r.slice(0,-1))),h&&h(e),t.onChange(r)};return(0,r.jsx)(a.xI,{name:t,control:A,render:e=>{let{field:t,fieldState:{error:n}}=e,a="number"==typeof t.value&&0===t.value?"":t.value;return(0,r.jsxs)(i.A,{children:[(0,r.jsx)(o.A,{...t,inputProps:{sx:{height:25}},sx:{borderRadius:2,color:"text.white",backgroundColor:"text.primary"},value:a,onChange:e=>c(e,t),fullWidth:!0,error:!!n,label:null,...d}),!!n&&(0,r.jsx)(l.A,{sx:{mt:.5,ml:2},error:!0,children:(0,r.jsx)(s.A,{variant:"subtitle1",children:n.message})})]})}})}},5837:(e,t,n)=>{n.d(t,{k:()=>d});var r=n(4848),i=n(6540),o=n(2907),l=n(8590),s=n(2424),a=n(5864),h=n(9655);let d=e=>{let t=(0,o.A)(),[n,d]=(0,i.useState)(!1);return(0,r.jsx)(a.X,{type:n?"text":"password",endAdornment:(0,r.jsx)(l.A,{position:"end",children:(0,r.jsx)(s.A,{edge:"end",onClick:()=>d(!n),children:(0,r.jsx)(h.C,{name:n?"EyeClosed":"Eye",width:24,height:24,color:t.palette.text.secondary})})}),...e})}},2705:(e,t,n)=>{n.d(t,{Dt:()=>w,Lm:()=>m,Op:()=>l,Od:()=>c,Xs:()=>s.X,C0:()=>a.C});var r=n(4848),i=n(6540);(0,n(3552).Ay)("div")(e=>{let{theme:t}=e;return{position:"fixed",top:0,left:0,zIndex:2001,width:"100%","& > * + *":{marginTop:t.spacing(2)}}});var o=n(9785);let l=e=>{let{children:t,onSubmit:n,methods:i}=e;return(0,r.jsx)(o.Op,{...i,children:(0,r.jsx)("form",{onSubmit:n,children:t})})};var s=n(5864),a=n(9655);n(5837);var h=n(2058);let d={src:"/_next/static/media/greenWave.238a5b70.png",height:111,width:1440,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAABlBMVEUY4HwZ3Hu6cluaAAAAAnRSTlMKDmvECLUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAANSURBVHicY2BkZAADAAAYAAOLgnXyAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1},A={src:"/_next/static/media/whiteWave.91a912d9.png",height:111,width:1440,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAABlBMVEXp6enp6enqxqHPAAAAAnRSTlMdEeNPgdYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAANSURBVHicY2BkZAADAAAYAAOLgnXyAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1},c=e=>{let{children:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(h.Ay,{container:!0,sx:{minHeight:"100vh",width:"100%",backgroundImage:"url(".concat(A,"), url(").concat(d,")"),backgroundSize:"100% 10%, 100% 10%",backgroundPosition:"bottom, bottom",backgroundRepeat:"no-repeat, no-repeat"},flexDirection:"column",children:(0,r.jsx)(h.Ay,{container:!0,item:!0,sx:{flex:1,position:"relative",minHeight:"90vh"},children:t})})})};var g=n(3058),x=n(5759),u=n(6715);let p=e=>{let{children:t}=e,{pathname:n}=(0,u.useRouter)();return(0,i.useEffect)(()=>{window.scrollTo(0,0)},[n]),t},w=e=>{let{children:t}=e;return(0,r.jsx)(p,{children:(0,r.jsx)(g.A,{sx:{height:"100vh",width:"100%",display:"flex",flexDirection:"column",backgroundImage:"url('/assets/whiteWave.png'), url('/assets/greenWave.png')",backgroundSize:"100% 10%, 100% 10%",backgroundPosition:"bottom, bottom",backgroundRepeat:"no-repeat, no-repeat"},children:(0,r.jsx)(x.A,{sx:{flex:1,display:"flex",justifyContent:"center",alignItems:"center"},children:t})})})};var C=n(3384);let m=e=>{let{children:t}=e;return(0,r.jsx)(C.A,{sx:{maxWidth:360,flex:1,mt:{xs:14,sm:5},mb:5},children:t})};n(2074)},9655:(e,t,n)=>{n.d(t,{C:()=>o});var r=n(4848);n(6540);let i={Eye:e=>(0,r.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,r.jsx)("path",{d:"M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})]}),EyeClosed:e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M12 17.5c-3.8 0-7.2-2.1-8.8-5.5H1c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5h-2.2c-1.6 3.4-5 5.5-8.8 5.5"})}),ArrowLeft:e=>(0,r.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("path",{d:"M19 12H5M5 12L12 19M5 12L12 5",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),Checkbox:e=>(0,r.jsx)("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("rect",{x:.5,y:.5,width:19,height:19,rx:3.5,stroke:"currentColor"})}),CheckboxChecked:e=>(0,r.jsxs)("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,r.jsx)("rect",{width:20,height:20,rx:4,fill:"currentColor"}),(0,r.jsx)("path",{d:"M14 7L8.5 12.5L6 10",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})]}),Logout:e=>(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("path",{d:"M9.80769 4.875H7.06731C5.85653 4.875 4.875 5.85653 4.875 7.06731V16.9327C4.875 18.1435 5.85653 19.125 7.06731 19.125H9.80769M8.625 12L19.5865 12M19.5865 12L16.2981 15.2885M19.5865 12L16.2981 8.71154",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),Add:e=>(0,r.jsx)("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("path",{d:"M15.3334 7.33332H12.6667V12.6667H7.33342V15.3333H12.6667V20.6667H15.3334V15.3333H20.6667V12.6667H15.3334V7.33332ZM14.0001 0.666656C6.64008 0.666656 0.666748 6.63999 0.666748 14C0.666748 21.36 6.64008 27.3333 14.0001 27.3333C21.3601 27.3333 27.3334 21.36 27.3334 14C27.3334 6.63999 21.3601 0.666656 14.0001 0.666656ZM14.0001 24.6667C8.12008 24.6667 3.33341 19.88 3.33341 14C3.33341 8.11999 8.12008 3.33332 14.0001 3.33332C19.8801 3.33332 24.6667 8.11999 24.6667 14C24.6667 19.88 19.8801 24.6667 14.0001 24.6667Z",fill:"white"})}),Upload:e=>(0,r.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("path",{d:"M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z",fill:"white"})})},o=e=>{let{name:t,width:n=24,height:o=24,...l}=e,s=i[t];return(0,r.jsx)(s,{width:n,height:o,...l})}}}]);