"use strict";(self.webpackChunkkhg_tec_website=self.webpackChunkkhg_tec_website||[]).push([[56],{6056:function(e,r,n){n.r(r),n.d(r,{default:function(){return d}});var t=n(2791),a=n(9151),o=n(6004),c=n(9434),s=n(5084),l=n(4165),i=n(5861),u=n(6726),f=n(9023),_=function(e){return function(r){r((0,f.sT)(e,u.ck))}},m=function(){return function(e){e({type:u.IH})}},p=function(){return function(e){e({type:u.F0})}},h=n(184);var d=function(){var e=(0,c.I0)(),r=(0,c.v9)((function(e){return e.contact})),n=r.error,d=r.success,x=r.loading,v=(0,s.t)({first_name:"",last_name:"",email:"",phone:"",message:""},_,n),g=v.formData,D=v.onChange,j=v.onResetForm,T=v.onPhoneChange;(0,t.useEffect)((function(){return function(){n&&e(m()),d&&e(p())}}),[]);var Z=n&&"object"!==typeof n?n:null;return(0,h.jsxs)(o.Z,{onSubmit:function(r){r.preventDefault(),e(function(e,r){return function(){var n=(0,i.Z)((0,l.Z)().mark((function n(t){return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(m()),t({type:u.bt}),n.prev=2,n.next=5,(0,f.t5)(f.vY,"POST",JSON.stringify(e));case 5:n.sent,t({type:u.oo}),r(),setTimeout((function(){return t(p())}),3e3),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),t(_(n.t0.message));case 14:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(e){return n.apply(this,arguments)}}()}(g,j))},errorProp:Z,successProp:d,successText:"Message sent successfully",loading:x,children:[(0,h.jsx)(a.Z,{name:"first_name",value:g.first_name,errorProp:null===n||void 0===n?void 0:n.first_name,onChange:D,type:"text",placeholder:(0,h.jsxs)(h.Fragment,{children:["First Name",(0,h.jsx)("sup",{children:"*"})]})}),(0,h.jsx)(a.Z,{name:"last_name",value:g.last_name,errorProp:null===n||void 0===n?void 0:n.last_name,onChange:D,type:"text",placeholder:(0,h.jsxs)(h.Fragment,{children:["Last Name",(0,h.jsx)("sup",{children:"*"})]})}),(0,h.jsx)(a.Z,{name:"email",value:g.email,errorProp:null===n||void 0===n?void 0:n.email,onChange:D,type:"text",placeholder:(0,h.jsxs)(h.Fragment,{children:["Email",(0,h.jsx)("sup",{children:"*"})]})}),(0,h.jsx)(a.Z,{name:"phone",value:g.phone,errorProp:null===n||void 0===n?void 0:n.phone,onChange:T,type:"tel",placeholder:(0,h.jsxs)(h.Fragment,{children:["Phone",(0,h.jsx)("sup",{children:"*"})]})}),(0,h.jsx)(a.Z,{name:"message",value:g.message,errorProp:null===n||void 0===n?void 0:n.message,onChange:D,isTextArea:!0,placeholder:(0,h.jsxs)(h.Fragment,{children:["Message",(0,h.jsx)("sup",{children:"*"})]})})]})}},6004:function(e,r,n){n.d(r,{Z:function(){return c}});n(2791);var t={formDef__form:"FormDef_formDef__form__BVSZK",formDef__main:"FormDef_formDef__main__r22YL",formDef__btn:"FormDef_formDef__btn__s6AHN",formDef__errorText:"FormDef_formDef__errorText__-+hIG",formDef__errorText_active:"FormDef_formDef__errorText_active__XQT+g",formDef__errorText_error:"FormDef_formDef__errorText_error__qOHqv",formDef__errorText_success:"FormDef_formDef__errorText_success__cGR+k"},a=n(9691),o=n(184);var c=function(e){var r=e.isMultipart,n=e.onSubmit,c=e.className,s=e.errorProp,l=e.successProp,i=e.successText,u=e.children,f=e.loading;return(0,o.jsx)("section",{className:"".concat(t.formDef," ").concat(c||""," containerSmall"),children:(0,o.jsxs)("form",{className:t.formDef__form,encType:r?"multipart/form-data":"application/x-www-form-urlencoded",onSubmit:n,children:[(0,o.jsx)("div",{className:t.formDef__main,children:u}),(0,o.jsx)(a.Z,{disabled:f,className:t.formDef__btn,type:"submit",children:"Send"}),(0,o.jsx)("p",{className:"".concat(t.formDef__errorText," ").concat(s||l?t.formDef__errorText_active:""," contentTextDef"),children:(0,o.jsx)("span",{className:"".concat(s?t.formDef__errorText_error:""," ").concat(l?t.formDef__errorText_success:""),children:s||i})})]})})}},9151:function(e,r,n){n.d(r,{Z:function(){return d}});var t=n(1413),a=n(9439),o=n(4925),c=n(2791),s="InputDef_InputDefBlock__qckG+",l="InputDef_InputDefBlock_textArea__2vun0",i="InputDef_InputDefBlock__label__qBZeU",u="InputDef_InputDefBlock__label_active__uIDmi",f="ErrorText_errorText__l4nMP",_="ErrorText_errorText_visible__QWUT8",m=n(184);var p=function(e){var r=e.errorProp,n=e.className;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("p",{className:"".concat(f," ").concat(r?_:""," ").concat(n||""),children:null===r||void 0===r?void 0:r.join()})})},h=["parentClass","className","errorProp","isTextArea","children","placeholder","onChange","value"];var d=function(e){var r,n=e.parentClass,f=e.className,_=e.errorProp,d=e.isTextArea,x=e.children,v=e.placeholder,g=e.onChange,D=e.value,j=(0,o.Z)(e,h),T=(0,c.useState)(62),Z=(0,a.Z)(T,2),b=Z[0],N=Z[1];return r=d?(0,m.jsx)("div",{className:"inputDef",children:(0,m.jsx)("textarea",(0,t.Z)((0,t.Z)({value:D,style:{height:b},onChange:function(e){g(e),e.target.scrollHeight>62&&e.target.scrollHeight<92&&N(e.target.scrollHeight),""===e.target.value&&N("")}},j),{},{className:"textAreaDef inputDef scrollbarDef ".concat(f||"")}))}):x||(0,m.jsx)("input",(0,t.Z)((0,t.Z)({},j),{},{onChange:g,value:D,className:"inputDef ".concat(f||"")})),(0,m.jsxs)("div",{className:"".concat(s," ").concat(d?l:""," ").concat(n||""),children:[!x&&(0,m.jsx)("label",{className:"".concat(i," ").concat(D.length?u:""),children:v}),r,(0,m.jsx)(p,{errorProp:_})]})}},5084:function(e,r,n){n.d(r,{t:function(){return l}});var t=n(4942),a=n(1413),o=n(9439),c=n(2791),s=n(9434),l=function(e,r,n){var l=(0,s.I0)(),i=(0,c.useState)(e),u=(0,o.Z)(i,2),f=u[0],_=u[1],m=function(e){_((function(r){return(0,a.Z)((0,a.Z)({},r),{},(0,t.Z)({},e.target.name,e.target.value))})),p(e.target.name)},p=function(e){r&&n&&null!==n&&void 0!==n&&n[e]&&l(r((0,a.Z)((0,a.Z)({},n),{},(0,t.Z)({},e,null))))};return{formData:f,onChange:m,onResetForm:function(){_(e)},setFormData:_,onPhoneChange:function(e){e.target.value.match(/[^0-9+]/g)?e.target.value=e.target.value.replace(/[^0-9+]+/g,""):m(e)},clearInputError:p}}}}]);
//# sourceMappingURL=56.55531d44.chunk.js.map