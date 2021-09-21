(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{23:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var a,r,i,o,c,s,d,l,p,u,b,h,x=t(1),m=t.n(x),j=t(9),f=t.n(j),g=t(12),O=t(4),v=t(5),y=t(7),w=t(6),C=t(25),S=t(10),k=t(2),I=t(3),A=I.a.form(a||(a=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  max-width: 400px;\n  padding: 10px;\n  border-radius: 2px;\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);\n"]))),z=I.a.label(r||(r=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),D=I.a.input(i||(i=Object(k.a)(["\n  height: 40px;\n  margin-bottom: 6px;\n  padding: 5px;\n  border: 1px solid #7d847d;\n  border-radius: 4px;\n  outline: none;\n"]))),F=I.a.button(o||(o=Object(k.a)(["\n  height: 38px;\n  margin-top: 5px;\n  border-width: inherit;\n  border-radius: 5px;\n  outline: none;\n  color: white;\n  background-color: green;\n  cursor: pointer;\n"]))),J=t(0),N=function(n){Object(y.a)(t,n);var e=Object(w.a)(t);function t(){var n;Object(O.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))).state={name:"",number:""},n.nameId=Object(C.a)(),n.telId=Object(C.a)(),n.handleInputChange=function(e){n.setState(Object(S.a)({},e.currentTarget.name,e.currentTarget.value))},n.handleSubmit=function(e){var t=n.state,a=t.name,r=t.number;e.preventDefault(),n.props.onSubmit(a,r),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(v.a)(t,[{key:"render",value:function(){return Object(J.jsx)("div",{children:Object(J.jsxs)(A,{onSubmit:this.handleSubmit,children:[Object(J.jsxs)(z,{htmlFor:this.nameId,children:["Name",Object(J.jsx)(D,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:this.nameId,value:this.state.name,onChange:this.handleInputChange})]}),Object(J.jsxs)(z,{htmlFor:this.telId,children:["Telephone",Object(J.jsx)(D,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:this.telId,value:this.state.number,onChange:this.handleInputChange})]}),Object(J.jsx)(F,{type:"submit",children:"Add to contacts"})]})})}}]),t}(x.Component),L=I.a.button(c||(c=Object(k.a)(["\n  display: inline-block;\n  width: 30%;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  text-transform: uppercase;\n  font-size: 12px;\n\n  background-color: grey;\n  color: white;\n"]))),T=I.a.ul(s||(s=Object(k.a)(["\n  padding: 0;\n"]))),M=I.a.span(d||(d=Object(k.a)(["\n  display: block;\n  padding: 0 15px;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  font-size: 14px;\n"]))),R=I.a.li(l||(l=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 400px;\n  height: 45px;\n  padding: 10px;\n  margin-top: 6px;\n  border-radius: 2px;\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);\n  list-style: none;\n"]))),Z=function(n){var e=n.contacts,t=n.onDeleteContacts;return Object(J.jsx)(T,{children:e.map((function(n){var e=n.id,a=n.name,r=n.number;return Object(J.jsxs)(R,{children:[Object(J.jsxs)(M,{children:[a," : ",r]}),Object(J.jsx)(L,{onClick:function(){return t(e)},children:"Delete"})]},e)}))})},q=I.a.label(p||(p=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  max-width: 400px;\n  margin-top: 23px;\n  padding: 10px;\n  border-radius: 1px;\n  color:green;\n  \n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);\n"]))),B=I.a.input(u||(u=Object(k.a)(["\n height: 40px;\n  margin-bottom: 6px;\n  padding: 5px;\n  border: 1px solid #7d847d;\n  border-radius: 4px;\n  outline: none;\n"]))),E=function(n){var e=n.value,t=n.onChange;return Object(J.jsxs)(q,{children:["Find contacts by name",Object(J.jsx)(B,{type:"text",value:e,onChange:t})]})},V=I.a.h2(b||(b=Object(k.a)(["\n  display: block;\n  width: 400px;\n  margin: 20px;\n  font-family: 'Roboto', sans-serif;\n  color: green;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 20px;\n"]))),H=I.a.div(h||(h=Object(k.a)(["\n  margin: 10px;\n"]))),K=function(n){Object(y.a)(t,n);var e=Object(w.a)(t);function t(){var n;Object(O.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.addName=function(e,t){if(n.state.contacts.find((function(n){return n.name.toLowerCase()===e.toLowerCase()})))alert("".concat(e," is already in contacts!"));else{var a={id:Object(C.a)(),name:e,number:t};n.setState((function(n){var e=n.contacts;return{contacts:[a].concat(Object(g.a)(e))}}))}},n.deleteContacts=function(e){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==e}))}}))},n.changeFilter=function(e){n.setState({filter:e.currentTarget.value})},n.getVisibleContacts=function(){var e=n.state,t=e.filter,a=e.contacts,r=t.toLowerCase();return a.filter((function(n){return n.name.toLowerCase().includes(r)}))},n}return Object(v.a)(t,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("contacts"),e=JSON.parse(n);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(n){this.state.contacts!==n.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var n=this.getVisibleContacts();return Object(J.jsxs)(H,{children:[Object(J.jsx)(V,{children:"Phonebook"}),Object(J.jsx)(N,{onSubmit:this.addName}),Object(J.jsx)(V,{children:"Contacts"}),Object(J.jsx)(E,{value:this.state.filter,onChange:this.changeFilter}),Object(J.jsx)(Z,{contacts:n,onDeleteContacts:this.deleteContacts})]})}}]),t}(x.Component);t(23);f.a.render(Object(J.jsx)(m.a.StrictMode,{children:Object(J.jsx)(K,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.4e5afa7e.chunk.js.map