(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _mnt_5CFA6BE7FA6BBBC0_My_Documents_DEPLOY_FCC_React_Apps_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_mnt_5CFA6BE7FA6BBBC0_My_Documents_DEPLOY_FCC_React_Apps_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_mnt_5CFA6BE7FA6BBBC0_My_Documents_DEPLOY_FCC_React_Apps_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),_mnt_5CFA6BE7FA6BBBC0_My_Documents_DEPLOY_FCC_React_Apps_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),_mnt_5CFA6BE7FA6BBBC0_My_Documents_DEPLOY_FCC_React_Apps_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(18),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_Calculator__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7),App=function(_React$Component){function App(){var _getPrototypeOf2,_this;Object(_mnt_5CFA6BE7FA6BBBC0_My_Documents_DEPLOY_FCC_React_Apps_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(_mnt_5CFA6BE7FA6BBBC0_My_Documents_DEPLOY_FCC_React_Apps_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(_mnt_5CFA6BE7FA6BBBC0_My_Documents_DEPLOY_FCC_React_Apps_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App)).call.apply(_getPrototypeOf2,[this].concat(args))),_this.state={display:"0",isShowingResult:!1},_this.handleClick=function(e){if(!_this.isDisplayingError()){var t={display:_this.state.display+e.target.value,isShowingResult:!1};switch(e.target.name){case"clear":t.display="0";break;case"delete":t.display=_this.state.display.toString().slice(0,-1);break;case"operator":/[-+*\/]$/.test(_this.state.display)&&(t.display=_this.replaceLastCharacter(e));break;case"number":_this.state.isShowingResult?t.display=e.target.value:"0"===_this.getLastNumber()&&(t.display=_this.replaceLastCharacter(e));break;case"comma":if(_this.getLastNumber().includes("."))return;break;default:return}e.target.classList.add("keypress"),_this.setState(t)}},_this.handleSubmit=function(e){if(e.preventDefault(),!_this.isDisplayingError()){var result=+eval(_this.state.display).toPrecision(12).toString();isFinite(result)||(result="Error"),_this.setState({display:result,isShowingResult:!0})}},_this.removeTransition=function(e){"transform"===e.propertyName&&e.target.classList.remove("keypress")},_this.replaceLastCharacter=function(e){return _this.state.display.slice(0,-1)+e.target.value},_this.getLastNumber=function(){return _this.state.display.split(/[-+*\/]/).pop()},_this.isDisplayingError=function(){if("Error"===_this.state.display)return _this.setState({display:"0"}),!0},_this}return Object(_mnt_5CFA6BE7FA6BBBC0_My_Documents_DEPLOY_FCC_React_Apps_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_React$Component),Object(_mnt_5CFA6BE7FA6BBBC0_My_Documents_DEPLOY_FCC_React_Apps_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",function(e){e.preventDefault();var t=document.querySelector('[value="'.concat(e.key,'"]'))||document.querySelector('[data-kbd="'.concat(e.key,'"]'));t&&t.click()})}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"App"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Calculator__WEBPACK_IMPORTED_MODULE_7__.a,{display:this.state.display,handleClick:this.handleClick,handleSubmit:this.handleSubmit,removeTransition:this.removeTransition}))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App},,,,function(e,t,_){"use strict";var a=_(0),n=_.n(a);t.a=function(e){var t=e.display,_=e.handleClick,a=e.handleSubmit,r=e.removeTransition;return n.a.createElement("div",null,n.a.createElement("header",null,n.a.createElement("h1",{className:"header-title"},"React Calculat",n.a.createElement("span",null,n.a.createElement("img",{className:"header-image",src:"img/React.js_logo-512.png"})),"r")),n.a.createElement("form",{className:"calculator",onClick:_,onSubmit:a,onTransitionEnd:function(e){return r(e)}},n.a.createElement("input",{type:"text",id:"display",value:t,disabled:!0}),n.a.createElement("input",{name:"number",type:"button",id:"zero",value:"0"}),n.a.createElement("input",{name:"number",type:"button",id:"one",value:"1"}),n.a.createElement("input",{name:"number",type:"button",id:"two",value:"2"}),n.a.createElement("input",{name:"number",type:"button",id:"three",value:"3"}),n.a.createElement("input",{name:"number",type:"button",id:"four",value:"4"}),n.a.createElement("input",{name:"number",type:"button",id:"five",value:"5"}),n.a.createElement("input",{name:"number",type:"button",id:"six",value:"6"}),n.a.createElement("input",{name:"number",type:"button",id:"seven",value:"7"}),n.a.createElement("input",{name:"number",type:"button",id:"eight",value:"8"}),n.a.createElement("input",{name:"number",type:"button",id:"nine",value:"9"}),n.a.createElement("input",{name:"comma",type:"button",id:"decimal",value:"."}),n.a.createElement("input",{name:"operator",type:"button",id:"add",value:"+"}),n.a.createElement("input",{name:"operator",type:"button",id:"subtract",value:"-"}),n.a.createElement("input",{name:"operator",type:"button",id:"multiply",value:"*"}),n.a.createElement("input",{name:"operator",type:"button",id:"divide",value:"/"}),n.a.createElement("input",{name:"delete",type:"button",id:"delete",value:"\u2190","data-kbd":"Backspace"}),n.a.createElement("input",{name:"clear",type:"button",id:"clear",value:"C","data-kbd":"Delete"}),n.a.createElement("input",{type:"submit",id:"equals",value:"="})))}},,,function(e,t,_){e.exports=_(11)},function(e,t,_){"use strict";_.r(t);var a=_(0),n=_.n(a),r=_(2),s=_.n(r),l=(_(17),_(3));s.a.render(n.a.createElement(l.a,null),document.getElementById("root"))},,,,,,function(e,t,_){},function(e,t,_){}],[[10,1,2]]]);
//# sourceMappingURL=main.12d9daf7.chunk.js.map