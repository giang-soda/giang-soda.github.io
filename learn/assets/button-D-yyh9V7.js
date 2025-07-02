import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./chunk-QMGIS6GS-CrpuPEwO.js";import{b as V,c as S}from"./utils-Bb5dE6UV.js";function g(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function w(...e){return t=>{let n=!1;const r=e.map(s=>{const a=g(s,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let s=0;s<r.length;s++){const a=r[s];typeof a=="function"?a():g(e[s],null)}}}}function de(...e){return o.useCallback(w(...e),e)}function R(e){const t=A(e),n=o.forwardRef((r,s)=>{const{children:a,...d}=r,c=o.Children.toArray(a),f=c.find(M);if(f){const i=f.props.children,u=c.map(h=>h===f?o.Children.count(i)>1?o.Children.only(null):o.isValidElement(i)?i.props.children:null:h);return l.jsx(t,{...d,ref:s,children:o.isValidElement(i)?o.cloneElement(i,void 0,u):null})}return l.jsx(t,{...d,ref:s,children:a})});return n.displayName=`${e}.Slot`,n}var N=R("Slot");function A(e){const t=o.forwardRef((n,r)=>{const{children:s,...a}=n;if(o.isValidElement(s)){const d=B(s),c=$(a,s.props);return s.type!==o.Fragment&&(c.ref=r?w(r,d):d),o.cloneElement(s,c)}return o.Children.count(s)>1?o.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var C=Symbol("radix.slottable");function ue(e){const t=({children:n})=>l.jsx(l.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=C,t}function M(e){return o.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===C}function $(e,t){const n={...t};for(const r in t){const s=e[r],a=t[r];/^on[A-Z]/.test(r)?s&&a?n[r]=(...c)=>{const f=a(...c);return s(...c),f}:s&&(n[r]=s):r==="style"?n[r]={...s,...a}:r==="className"&&(n[r]=[s,a].filter(Boolean).join(" "))}return{...e,...n}}function B(e){var r,s;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}const x=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,E=V,D=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return E(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:s,defaultVariants:a}=t,d=Object.keys(s).map(i=>{const u=n==null?void 0:n[i],h=a==null?void 0:a[i];if(u===null)return null;const m=x(u)||x(h);return s[i][m]}),c=n&&Object.entries(n).reduce((i,u)=>{let[h,m]=u;return m===void 0||(i[h]=m),i},{}),f=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((i,u)=>{let{class:h,className:m,...j}=u;return Object.entries(j).every(L=>{let[b,y]=L;return Array.isArray(y)?y.includes({...a,...c}[b]):{...a,...c}[b]===y})?[...i,h,m]:i},[]);return E(e,d,f,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),z=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),k=e=>{const t=z(e);return t.charAt(0).toUpperCase()+t.slice(1)},_=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),W=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var H={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=o.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:a,iconNode:d,...c},f)=>o.createElement("svg",{ref:f,...H,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:_("lucide",s),...!a&&!W(c)&&{"aria-hidden":"true"},...c},[...d.map(([i,u])=>o.createElement(i,u)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(e,t)=>{const n=o.forwardRef(({className:r,...s},a)=>o.createElement(K,{ref:a,iconNode:t,className:_(`lucide-${P(k(e))}`,`lucide-${e}`,r),...s}));return n.displayName=k(e),n};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],U=v("arrow-left",F);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],q=v("loader-circle",Z);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],X=v("pencil",T);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],J=v("plus",G);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],Q=v("refresh-ccw",O);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],I=v("save",Y);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]],te=v("trash",ee);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],re=v("x",ne);var p=(e=>(e[e.CREATE=1]="CREATE",e[e.EDIT=2]="EDIT",e[e.DELETE=3]="DELETE",e[e.SAVE=4]="SAVE",e[e.RELOAD=5]="RELOAD",e[e.BACK=6]="BACK",e[e.CANCEL=7]="CANCEL",e))(p||{});const se=D("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function ae({className:e,variant:t,size:n,asChild:r=!1,...s}){const a=r?N:"button";return l.jsx(a,{"data-slot":"button",className:S(se({variant:t,size:n,className:e})),...s})}const oe=({icon:e,loading:t})=>{if(t)return l.jsx(q,{className:"mr-2 h-4 w-4 animate-spin"});switch(e){case p.CREATE:return l.jsx(J,{className:"h-4 w-4"});case p.EDIT:return l.jsx(X,{className:"h-4 w-4"});case p.DELETE:return l.jsx(te,{className:"h-4 w-4"});case p.SAVE:return l.jsx(I,{className:"h-4 w-4"});case p.RELOAD:return l.jsx(Q,{className:"h-4 w-4"});case p.BACK:return l.jsx(U,{className:"h-4 w-4"});case p.CANCEL:return l.jsx(re,{className:"h-4 w-4"});default:return null}};function fe({loading:e,icon:t,children:n,...r}){return l.jsxs(ae,{...r,disabled:e||r.disabled,children:[l.jsx(oe,{icon:t,loading:e}),n]})}export{p as A,fe as B,q as L,N as S,re as X,D as a,R as b,v as c,ue as d,w as e,se as f,de as u};
