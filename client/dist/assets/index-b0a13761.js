import{K as d,N as e,Q as w,U as P}from"./@mui-83acde7b.js";import{r as N,R as T}from"./react-0bfda011.js";import{c as k}from"./react-dom-d1865be7.js";import{u as A}from"./react-hook-form-699f1e2e.js";import{u as D,a as B,P as O}from"./react-redux-8f415953.js";import{c as v,a as R,b as I}from"./@reduxjs-d9f0fc98.js";import{a as E}from"./axios-aba6f0e0.js";import"./hoist-non-react-statics-b24a8e72.js";import"./react-is-1aacdabe.js";import{k as M,Q as j}from"./react-toastify-6374d56d.js";import{A as p,S as $,V as Y,E as q,I as U,W,M as K,D as Q,T as _,a as J,b as z,c as G,C as X,d as Z,e as ee,f as te}from"./@devexpress-494c70ae.js";import{a as re,b as C}from"./react-router-91b8072d.js";import{B as ne}from"./react-router-dom-d1ba0991.js";import"./@babel-83a55e84.js";import"./clsx-1229b3e0.js";import"./react-transition-group-98db7eef.js";import"./dom-helpers-9a525042.js";import"./@emotion-84c0887f.js";import"./stylis-581c9ed0.js";import"./moment-fbc5633a.js";import"./@popperjs-0e7ee0a2.js";import"./rifm-160d9bd4.js";import"./scheduler-04ce0582.js";import"./use-sync-external-store-da90c88d.js";import"./immer-b106be54.js";import"./redux-6f3d0e5c.js";import"./redux-thunk-ef899f4c.js";import"./prop-types-4d501b15.js";import"./rrule-acc39758.js";import"./tslib-694e2945.js";import"./@remix-run-122d521f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const ae=[{id:0,title:"",startDate:"",endDate:"",locationField:"",covidField:"",prepField:"",allDay:!1}],F="http://localhost:5000/",ie={loading:!0,rawData:ae,currentDate:new Date().toJSON().slice(0,10),currentViewName:"work-week",addedAppointment:{},appointmentChanges:{},editingAppointment:void 0,register:"",hideRegister:"",todaysAppts:[]},x=v("signup/data",async(r,t)=>{try{return(await E.post(`${F}signup`,{data:{user:r}})).data}catch(s){return s.message}}),oe=v("send/appt",async(r,t)=>{const{addedAppointment:s}=t.getState().appts;let c={headers:{"Content-Type":"application/json"},data:{appts:s}};try{return(await E.post(`${F}api/v1/appts/create`,c)).data}catch(n){return n.message}}),L=R({name:"appts",initialState:ie,reducers:{commitChgHandler:(r,{payload:t})=>{r.rawData=t},currDateChgHandler:(r,{payload:t})=>{r.currentDate=t},currViewNameChgHandler:(r,{payload:t})=>{r.currentViewName=t},chgApptHandler:(r,{payload:t})=>{r.appointmentChanges=t},chgAddedApptHandler:(r,{payload:t})=>{r.addedAppointment=t},chgEditedApptHandler:(r,{payload:t})=>{r.editingAppointment=t}},extraReducers:r=>{r.addCase(x.pending,t=>{t.loading=!0}).addCase(x.fulfilled,(t,{payload:s})=>{t.loading=!1,t.register=s}).addCase(x.rejected,(t,{payload:s})=>{t.loading=!1})}}),{commitChgHandler:se,currDateChgHandler:le,currViewNameChgHandler:ce,chgApptHandler:de,chgAddedApptHandler:me,chgEditedApptHandler:pe}=L.actions,ue=L.reducer,he=()=>{const r=D(),{register:t,handleSubmit:s,reset:c,formState:n,formState:{isSubmitSuccessful:i},formState:{errors:l}}=A(),h=m=>{r(x(m))};return N.useEffect(()=>{n.isSubmitSuccessful&&c()},[n,c]),d("section",{className:"mx-20",children:[e("h1",{className:"text-lg font-bold px-20 m-2",children:"Register Here now"}),d("form",{onSubmit:s(h),className:"",children:[e("input",{className:"input input-bordered w-full max-w-xs m-2 ",type:"text",placeholder:"User Name",...t("userName",{required:!0,maxLength:80})}),e("input",{className:"input input-bordered w-full max-w-xs m-2",type:"text",placeholder:"Email",...t("email",{required:!0,pattern:/^\S+@\S+$/i})}),e("input",{className:"input input-bordered w-full max-w-xs m-2",type:"password",placeholder:"Password",...t("password",{min:5})}),e("input",{className:"btn w-full max-w-xs m-2",type:"submit"})]})]})},ge="/assets/med1-7971019b.png",fe=()=>d(w,{children:[e("input",{type:"checkbox",id:"signup-modal",className:"modal-toggle"}),e("div",{className:"modal",children:d("div",{className:"modal-box relative flex flex-col items-center justify-center border-2 border-black",children:[e("img",{src:ge,alt:"signup-logo",className:"w-[250px] h-[250px] border-2 border-black shadow-md rounded"}),e("label",{htmlFor:"signup-modal",className:"btn btn-sm btn-circle absolute right-2 top-2",children:"✕"}),e(he,{})]})})]}),be=()=>{const{register:r,handleSubmit:t,reset:s,formState:c,formState:{isSubmitSuccessful:n},formState:{errors:i}}=A(),l=h=>{};return N.useEffect(()=>{c.isSubmitSuccessful&&s()},[c,s]),e(w,{children:d("section",{className:"flex-col justify-center items-center",children:[e("h1",{className:"text-lg font-bold m-4 mx-28",children:"Login Here Now"}),d("form",{onSubmit:t(l),className:"",children:[e("input",{className:"input input-bordered w-full max-w-xs m-2",type:"text",placeholder:"Email",...r("email",{required:!0,pattern:/^\S+@\S+$/i})}),e("input",{className:"input input-bordered w-full max-w-xs m-2",type:"password",placeholder:"Password",...r("password",{min:5})}),e("input",{className:"btn w-full max-w-xs m-2",type:"submit"})]})]})})},xe="/assets/medimate2-027919b0.png",we=()=>d(w,{children:[e("input",{type:"checkbox",id:"login-modal",className:"modal-toggle"}),e("div",{className:"modal",children:d("div",{className:"modal-box relative flex flex-col items-center justify-center border-2 border-black",children:[e("img",{src:xe,alt:"medimate",className:""}),e("label",{htmlFor:"login-modal",className:"btn btn-sm btn-circle absolute right-2 top-2",children:"✕"}),e("div",{className:"mx-16",children:e(be,{})})]})})]}),Ne=()=>d("section",{className:"flex h-screen justify-center items-center gap-2",children:[e("label",{htmlFor:"login-modal",className:"btn",children:"Login"}),e("label",{htmlFor:"signup-modal",className:"btn",children:"Sign up"}),e("button",{className:"btn",children:"Logout"}),e("button",{className:"btn",children:e("a",{href:"/calendar",children:"Calendar"})}),e(fe,{}),e(we,{})]}),ye=({...r})=>e(p.DateEditor,{...r,inputFormat:"MM/DD/YYYY HH:mm"}),Se=r=>r.type==="multilineTextEditor"?null:e(p.TextEditor,{...r}),Ce=({onFieldChange:r,appointmentData:t,...s})=>{const[c,n]=N.useState({locationField:"",prepField:"",covidField:"",startDate:"",endDate:""}),i=m=>{n(g=>({...g,locationField:m})),r({locationField:m})},l=m=>{n(g=>({...g,prepField:m})),r({prepField:m})},h=m=>{n(g=>({...g,covidField:m})),r({covidField:m})};return d(p.BasicLayout,{appointmentData:t,onFieldChange:r,value:"",...s,children:[e(p.Label,{text:"Location",type:"title"}),e(p.TextEditor,{value:t.locationField,onValueChange:i,placeholder:"Doctors Office",type:"ordinaryTextEditor"}),e(p.Label,{className:"pt-5",text:"Prep Instructions",type:"title"}),e(p.TextEditor,{value:t.prepField,onValueChange:l,placeholder:"Prep Info",type:"multilineTextEditor"}),e(p.Label,{className:"pt-5",text:"Covid Vaccinated",type:"title"}),e(p.Select,{value:t.covidField,onValueChange:h,placeholder:"Yes or No",availableOptions:[{id:1,text:"No"},{id:2,text:"Yes"}],type:"filledSelect"})]})},Ae=()=>{const{rawData:r,currentDate:t,currentViewName:s,addedAppointment:c,appointmentChanges:n,editingAppointment:i}=B(o=>o.appts),l=D(),h=({added:o,changed:f,deleted:b})=>{let a=[...r];if(o){const u=(a==null?void 0:a.length)>0?a[(a==null?void 0:a.length)-1].id+1:0;a=[...a,{id:u,...o}]}return f&&(a=a==null?void 0:a.map(u=>f[u.id]?{...u,...f[u.id]}:u)),b!==void 0&&(a=a.filter(u=>u.id!==b)),l(se(a)),l(oe()),{dataCopy:a}},m=N.useCallback(o=>{const{id:f}=o;if(f!=="saveButton")return e(p.CommandButton,{...o});const b={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"};let a="";const u=()=>j.error(`A ${a} is Require`,b),H=i?{...i,...n}:c,{title:y,locationField:S}=H,V=(()=>{if(!y||y.trim()=="")return a="Title",!1;if(!S||S.trim()=="")return a="Location",!1;if(y||S)return!0})()?o.onExecute:u;return e(p.CommandButton,{...o,onExecute:V})},[c,n,i]);return e(w,{children:d(P,{children:[d($,{locale:"en-US",data:r,height:400,className:"mt-10",children:[e(Y,{currentDate:t,onCurrentDateChange:o=>{l(le(o))},currentViewName:s,onCurrentViewNameChange:o=>{l(ce(o))}}),e(q,{onCommitChanges:h,addedAppointment:c,onAddedAppointmentChange:o=>{l(me(o))},appointmentChanges:n,onAppointmentChangesChange:o=>{l(de(o))},editingAppointment:i,onEditingAppointmentChange:o=>{l(pe(o))}}),e(U,{}),e(W,{startDayHour:9,endDayHour:19,name:"work-week",displayName:"Work Week"}),e(K,{name:"month-view",displayName:"Month View"}),e(Q,{startDayHour:10,endDayHour:19,name:"day-view",displayName:"Day View"}),e(_,{}),e(J,{}),e(z,{}),e(G,{}),e(X,{}),e(Z,{}),e(ee,{showOpenButton:!0,showDeleteButton:!0}),e(p,{basicLayoutComponent:Ce,textEditorComponent:Se,dateEditorComponent:ye,commandButtonComponent:m}),e(te,{})]}),e(M,{})]})})},De=()=>e("div",{children:e(Ae,{})});function ve(){return e("main",{className:"h-screen flex justify-center items-center m-6",children:d("div",{children:[e("h1",{className:"text-center text-2xl",children:"Appt Tracker"}),d(re,{children:[e(C,{path:"/",element:e(Ne,{})}),e(C,{path:"/calendar",element:e(De,{})})]})]})})}const Ee=I({reducer:{appts:ue}});k.createRoot(document.getElementById("root")).render(e(T.StrictMode,{children:e(ne,{children:e(O,{store:Ee,children:e(ve,{})})})}));