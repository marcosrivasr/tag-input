/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar InputTag = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(InputTag, _HTMLElement);\n\n  var _super = _createSuper(InputTag);\n\n  function InputTag() {\n    var _this;\n\n    _classCallCheck(this, InputTag);\n\n    _this = _super.call(this);\n    _this.template = document.createElement('template');\n    _this.template.innerHTML = \"\\n        <style>\\n        :host{\\n            display: inline-block;\\n        }\\n        \\n        :host:focus, .focus{\\n            outline: -webkit-focus-ring-color auto 1px;\\n        }\\n        .tag-input-container{\\n            -webkit-writing-mode: horizontal-tb !important;\\n            text-rendering: auto;\\n            color: -internal-light-dark-color(black, white);\\n            letter-spacing: normal;\\n            word-spacing: normal;\\n            text-transform: none;\\n            text-indent: 0px;\\n            text-shadow: none;\\n            display: inline-block;\\n            text-align: start;\\n            -webkit-appearance: textfield;\\n            background-color: -internal-light-dark-color(rgb(255, 255, 255), rgb(59, 59, 59));\\n            -webkit-rtl-ordering: logical;\\n            cursor: text;\\n            margin: 0em;\\n            font: 400 13.3333px Arial;\\n            padding: 1px 2px;\\n            border-width: 1px;\\n            \\n            border-image: initial;\\n            width: 250px;\\n        }\\n        .tag-input-container .data-tag-container{\\n            display: inline-block;\\n        }\\n        .tag-input-container .data-tag{\\n            display: inline-block;\\n            border: solid 1px #ccc;\\n            padding: 1px 5px;\\n            margin: 1px;\\n            cursor: pointer;\\n        }\\n        .tag-input-container .data-tag:hover{\\n            background-color: #eee;\\n        }\\n        .tag-input-container .data-tag a{\\n            display:inline-block;\\n            font-weight: bolder;\\n            padding: 0 0 0 5px;\\n            cursor: pointer; \\n        }\\n\\n        .data-tag a svg{\\n            display: inline-block;\\n            vertical-align: middle;\\n            margin-top: -1px;\\n        }\\n\\n        \\n        .tag-input-container input{\\n            background: transparent;\\n            font-size: 1em;\\n            border: 0;\\n            outline: none;\\n            min-width: 8px;\\n            width: 8px;\\n            margin: 1px;\\n            display: inline-block;\\n        }\\n        </style>\\n      \";\n\n    var el = _assertThisInitialized(_this);\n\n    _this.data = [];\n    _this.focus = '';\n    _this.selected = undefined;\n\n    var shadowRoot = _this.attachShadow({\n      mode: 'open'\n    });\n\n    shadowRoot.appendChild(_this.template.content.cloneNode(true));\n    _this.mainContainer = document.createElement('div');\n    _this.tags = document.createElement('div');\n    _this.input = document.createElement('input');\n\n    _this.mainContainer.setAttribute('class', 'tag-input-container');\n\n    _this.tags.setAttribute('class', 'data-tag-container');\n\n    _this.input.setAttribute('class', 'tag-input');\n\n    _this.mainContainer.appendChild(_this.tags);\n\n    _this.mainContainer.appendChild(_this.input);\n\n    shadowRoot.appendChild(_this.mainContainer);\n\n    _this.closest('form').addEventListener('submit', function (e) {\n      e.preventDefault();\n      var form = e.target;\n      var hidden = document.createElement('input');\n      hidden.setAttribute('type', 'hidden');\n      hidden.setAttribute('name', el.getAttribute('name'));\n      hidden.value = el.value;\n      form.appendChild(hidden);\n      form.submit();\n    });\n\n    _this.mainContainer.addEventListener('click', function (e) {\n      _this.input.focus();\n    });\n\n    _this.tags.addEventListener('click', function (e) {\n      _this.focus = 'tags';\n    });\n\n    _this.input.addEventListener('focus', function (e) {\n      el.classList.add('focus');\n    });\n\n    _this.input.addEventListener('focusout', function (e) {\n      el.classList.remove('focus');\n    });\n\n    _this.input.addEventListener('keyup', function (e) {\n      //            console.log(e.target.selectionStart);\n      var value = e.target.value.trim();\n      var len = (value.length + 3) * 12 + 'px';\n      e.target.style.width = len;\n\n      if (e.key == 'Enter' && value.length > 0 && !_this.exists(value)) {\n        _this.add(value, e);\n      }\n    });\n\n    _this.input.addEventListener('keydown', function (e) {\n      var value = e.target.value.trim();\n\n      if (e.key === 'Tab' && value.length > 0) {\n        e.preventDefault();\n\n        _this.add(value, e);\n      }\n\n      if (e.key === 'Backspace' && value.length === 0 && _this.data.length > 0) {\n        _this.remove(-1);\n\n        e.target.focus();\n      }\n    });\n\n    return _this;\n  }\n\n  _createClass(InputTag, [{\n    key: \"add\",\n    value: function add(value, e) {\n      this.data.push(value);\n      this.showData();\n      e.target.value = '';\n      e.target.focus();\n    }\n  }, {\n    key: \"createUI\",\n    value: function createUI() {}\n  }, {\n    key: \"remove\",\n    value: function remove(index) {\n      this.data.splice(index, 1);\n      this.showData();\n    }\n  }, {\n    key: \"exists\",\n    value: function exists(value) {\n      if (this.data.length === 0) return false;\n      var res = this.data.filter(function (item) {\n        return item == value;\n      });\n      return res.length > 0;\n    }\n  }, {\n    key: \"showData\",\n    value: function showData() {\n      var _this2 = this;\n\n      var values = this.data.join(',');\n      this.value = values;\n      this.tags.innerHTML = '';\n      this.mainContainer.innerHTML = '';\n      this.data.forEach(function (item, index) {\n        var newTag = _this2.createTag(index, item);\n\n        _this2.mainContainer.append(newTag);\n      });\n      this.mainContainer.append(this.input);\n      document.querySelectorAll('.data-tag a').forEach(function (item) {\n        item.addEventListener('click', _this2.closeButtonEvent);\n      });\n    }\n  }, {\n    key: \"createTag\",\n    value: function createTag(index, text) {\n      var _this3 = this;\n\n      var dataTag = document.createElement('div');\n      var dataTagText = document.createTextNode(text);\n      var closeButton = document.createElement('a');\n      dataTag.setAttribute('data-id', index);\n      dataTag.setAttribute('class', 'data-tag');\n      closeButton.setAttribute('data-id', index);\n      closeButton.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"12\\\" height=\\\"12\\\" viewBox=\\\"0 0 18 18\\\" data-id=\".concat(index, \"><path data-id=\").concat(index, \" d=\\\"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z\\\"/></svg>\");\n      closeButton.addEventListener('click', function (e) {\n        var id = e.target.getAttribute('data-id');\n\n        _this3.data.splice(id, 1);\n\n        _this3.showData();\n\n        _this3.input.focus();\n      });\n      dataTag.appendChild(dataTagText);\n      dataTag.appendChild(closeButton);\n      return dataTag;\n    }\n  }, {\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      if (this.value === null) return false;\n\n      if (this.value != '') {\n        var values = this.value.split(',');\n        this.data = _toConsumableArray(values);\n        this.showData();\n      }\n    }\n  }, {\n    key: \"value\",\n    set: function set(data) {\n      this.setAttribute('value', data);\n    },\n    get: function get() {\n      return this.getAttribute('value');\n    }\n  }]);\n\n  return InputTag;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\nwindow.customElements.define('input-tag', InputTag);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });