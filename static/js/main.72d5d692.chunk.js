(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(e,t,a){e.exports={form:"ContactForm_form__3KIZw",title:"ContactForm_title__3TNMn",label:"ContactForm_label__16weh",input:"ContactForm_input__oTYN9",submitBtn:"ContactForm_submitBtn__3Yjgt"}},11:function(e,t,a){e.exports={label:"ContactFilter_label__1SPMA",input:"ContactFilter_input__1py0I"}},17:function(e,t,a){e.exports={section:"Section_section__3S4ph"}},19:function(e,t,a){e.exports=a(26)},26:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(15),l=a.n(o),r=a(3),i=a(18),s=a(16),m=a(6),u=a(7),h=a(9),p=a(8),d=a(10),b=a(2),f=a.n(b),v=a(11),C=a.n(v),_=f.a.v4(),E=function(e){var t=e.value,a=e.onChangeFilter;return c.a.createElement("div",{className:C.a.search},c.a.createElement("label",{htmlFor:_,className:C.a.label},"Search by name"),c.a.createElement("input",{type:"text",name:"filter",value:t,placeholder:"Enter contact name",onChange:a,id:_,className:C.a.input,required:!0}))},x=a(4),I=a.n(x),N=a(5),g=a.n(N),y=function(e){var t=e.item,a=e.onDelete;return c.a.createElement("div",{className:g.a.task},c.a.createElement("p",{className:g.a.itemText},t.name),c.a.createElement("p",{className:g.a.itemText},t.phone),c.a.createElement("div",{className:g.a.actions},c.a.createElement("button",{type:"button",onClick:a},"Remove")))},S=function(e){var t=e.items,a=e.onDeleteContact;return t.length>0&&c.a.createElement("div",{className:I.a.container},c.a.createElement("h2",{className:I.a.title},"Contacts"),c.a.createElement("ul",{className:I.a.list},t.map((function(e){return c.a.createElement("li",{key:e.id,className:I.a.listItem},c.a.createElement(y,{item:e,onDelete:function(){return a(e.id)}}))}))))},j=a(17),F=a.n(j),O=function(e){var t=e.children;return c.a.createElement("section",{className:F.a.section},t)},k=a(1),w=a.n(k),A=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",phone:""},a.nameInputId=f.a.v4(),a.phoneInputId=f.a.v4(),a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,c=t.phone;(0,a.props.onAddContact)({name:n,phone:c}),a.reset()},a.handleInputChange=function(e){var t=e.target,n=t.name,c=t.value;a.setState(Object(r.a)({},n,c))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"reset",value:function(){this.setState({name:"",phone:""})}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.phone;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:w.a.title},"Phonebook"),c.a.createElement("form",{name:"phonebook",onSubmit:this.handleSubmit,className:w.a.form},c.a.createElement("label",{htmlFor:this.nameInputId,className:w.a.label},"Name"),c.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleInputChange,id:this.nameInputId,className:w.a.input,required:!0}),c.a.createElement("label",{htmlFor:this.phoneInputId,className:w.a.label},"Phone (format: xxx-xx-xx)"),c.a.createElement("input",{type:"tel",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",placeholder:"xxx-xx-xx",required:!0,name:"phone",value:a,onChange:this.handleInputChange,id:this.phoneInputId,className:w.a.input}),c.a.createElement("button",{type:"submit",title:"Add contact",className:w.a.submitBtn,disabled:""},"Add contact")))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={contacts:[{id:"id-1",name:"Scorpion",phone:"222-33-55"},{id:"id-2",name:"Sub Zero",phone:"555-88-77"},{id:"id-3",name:"Syrex",phone:"444-88-99"},{id:"id-4",name:"Sector",phone:"888-22-44"}],filter:""},a.addContact=function(e){var t=Object(s.a)({},e,{id:f.a.v4()});a.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[t])}}))},a.deleteContact=function(e){a.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},a.handleInputChange=function(e){var t=e.target,n=t.name,c=t.value;a.setState(Object(r.a)({},n,c))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.filter,a=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(e.contacts,t);return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,null,c.a.createElement(A,{onAddContact:this.addContact})),c.a.createElement(O,null,c.a.createElement(E,{value:t,onChangeFilter:this.handleInputChange})),c.a.createElement(O,null,c.a.createElement(S,{items:a,onDeleteContact:this.deleteContact})))}}]),t}(n.Component);l.a.render(c.a.createElement(D,null),document.getElementById("root"))},4:function(e,t,a){e.exports={title:"ContactList_title__3CklG",list:"ContactList_list__3Um4W",listItem:"ContactList_listItem__3PQMD"}},5:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.72d5d692.chunk.js.map