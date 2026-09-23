// JavaScript

// var root=document.querySelector("#parent")
// var h1=document.createElement('h1')
// h1.innerHTML="HELLO JS"
// root.appendChild(h1)

// React JS
var parent=document.querySelector("#parent")
var root=ReactDOM.createRoot(parent)

var h1=React.createElement('h1',null,"Hello Express")
root.render(h1)


// console.log(ReactDOM)
// console.log(h1)