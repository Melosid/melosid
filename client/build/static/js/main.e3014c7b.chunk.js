(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,n){e.exports=n(42)},23:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(12),r=n.n(l),s=(n(23),n(13)),c=n(14),i=n(15),u=n(17),h=n(16),m=n(2),d=n.n(m),p=(n(41),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:"",body:"",posts:[]},e.componentDidMount=function(){e.getBlogPost()},e.getBlogPost=function(){d.a.get("/api").then((function(t){var n=t.data;e.setState({posts:n}),console.log("Data has been recieved!!")})).catch((function(){alert("Error retrieving data!!")}))},e.handleChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(s.a)({},a,o))},e.submit=function(t){t.preventDefault();var n={title:e.state.title,body:e.state.body};d()({url:"/api/save",method:"POST",data:n}).then((function(){console.log("Data has been sent to the server"),e.resetUserInputs(),e.getBlogPost()})).catch((function(){console.log("Internal server error")}))},e.resetUserInputs=function(){e.setState({title:"",body:""})},e.displayBlogPost=function(e){return e.length?e.map((function(e,t){return o.a.createElement("div",{key:t,className:"blog-post__display"},o.a.createElement("h3",null,e.title),o.a.createElement("p",null,e.body))})):null},e}return Object(i.a)(n,[{key:"render",value:function(){return console.log("State: ",this.state),o.a.createElement("div",{className:"app"},o.a.createElement("h2",null,"Welcome to my App"),o.a.createElement("form",{onSubmit:this.submit},o.a.createElement("div",{className:"form-input"},o.a.createElement("input",{type:"text",name:"title",placeholder:"Title",value:this.state.title,onChange:this.handleChange})),o.a.createElement("div",{className:"form-input"},o.a.createElement("textarea",{placeholder:"Body",name:"body",cols:"30",rows:"10",value:this.state.body,onChange:this.handleChange})),o.a.createElement("button",null,"Submit")),o.a.createElement("div",{className:"blog-post"},this.displayBlogPost(this.state.posts)))}}]),n}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.e3014c7b.chunk.js.map