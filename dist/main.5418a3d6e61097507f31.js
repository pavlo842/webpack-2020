/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~analytics~main","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/data.csv":
/*!*************************!*\
  !*** ./assets/data.csv ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [["Номер заказа","Дата приемки","Плановая дата исполнения заказа","Дата фактического исполнения заказа","Общая стоимость работ без НДС","Общая стоимость работ с НДС","Код вида финансирования","Код заказчика","Код УНП заказчика","Наименование заказчика","Код ОКПО заказчика"],["53251441","2013-05-16","","","0","0","","42048","УНП 100240975","Исключена!!!                         Работать с к/з №35493     ОДО \"НИМЕДРА\"","14564700"],["5327255","2013-05-28","","","0","0","","2532","УНП 400014825","РУП \"Калинковичский ЦСМС\"","02569767"],["5355399","2013-10-29","","","0","0","","478","УНП 100003458","УП \"Минское отделение Белорусской железной дороги\" Минское вагонное депо","010639285007"],["5344694","2014-08-18","","2040-09-01","60,1817","72,218","","6119","УНП 101168731","ООО \"Евроторг\"","37423830"],["5346825","2014-08-27","","2140-10-01","134,5448","161,4538","","33283","УНП 100231650","Торговое частное унитарное предприятие \"АВТО-КОМБИ\"","14749730"],["5351419","2014-09-22","","2040-10-06","308,3316","369,9979","","5675","УНП 100348119","УП \"Минскинтеркапс\"","03278351"],["5355934","2014-10-14","","3014-10-28","622,4204","746,9045","","25076","УНП 290985395","Государственное предприятие \"ЖРЭУ г. Пинска\"","298698421000"],["5364847","2014-11-27","","2040-12-11","672,396","806,8753","","2517","УНП 200167576","РУП \"Барановичский ЦСМС\"","02568383"],["534972","2015-01-22","","2050-01-29","342,4902","410,9882","","2517","УНП 200167576","РУП \"Барановичский ЦСМС\"","02568383"],["5311649","2015-02-26","","2150-04-03","33,2667","39,92","","2068","УНП 600154185","ОАО \"Крановый завод\"","00915343"],["5330522","2015-06-02","","2050-06-16","329,4571","395,3485","","2519","УНП 300000224","РУП \"Витебский ЦСМС\"","02568420"],["5343773","2015-08-10","","3015-08-24","186,5781","223,8938","","6360","УНП 600052677","Республиканское научное дочернее унитарное предприятие \"Институт защиты растений\"","00751025"],["5349395","2015-09-11","","2050-09-25","124,3854","149,2624","","908","УНП 490424842","Унитарное предприятие \"Калинковичский молочный комбинат\"","29305527"],["5349382","2015-09-11","","2050-09-25","1087,7442","1305,293","","2522","УНП 500028553","Гродненский ЦСМС","02568443"],["5353292","2015-10-06","","2150-10-14","643,4807","772,177","","5682","УНП 500380335","РУП \"Лидский ЦСМС\"","28837716"],["5368256","2015-12-23","","2060-01-06","1897,8997","2277,4796","","2519","УНП 300000224","РУП \"Витебский ЦСМС\"","02568420"],["533681","2016-01-15","","2060-01-29","693,5661","832,2793","","2513","УНП 600008967","РУП \"Борисовский ЦСМС\"","02568466"],["539798","2016-02-12","","3016-02-26","92,7537","111,3044","","3266","УНП 100216781","ЧУП \"Институт радиационной безопасности \"Белрад\"","28641798"],["5319746","2016-04-05","","2060-04-19","849,7674","1019,7208","","7262","УНП 800007034","ООО \"ПРИРОДООХРАННЫЕ И ЭНЕРГОСБЕРЕГАЮЩИЕ ТЕХНОЛОГИИ\"","37541357"],["5322918","2016-04-21","","3016-06-06","475,7186","570,8624","","29131","УНП 690542655","ООО \"Центр метрологии \"КАЛИБРОНЭКС\"","296202786000"],["5323624","2016-04-26","","2060-05-11","840,893","1009,0717","","2531","УНП 700016750","Могилевский ЦСМС","025688977000"],["5343268","2016-08-09","","2160-08-19","685,64","822,77","","7262","УНП 800007034","ООО \"ПРИРОДООХРАННЫЕ И ЭНЕРГОСБЕРЕГАЮЩИЕ ТЕХНОЛОГИИ\"","37541357"],["5355204","2016-10-13","","2160-10-27","145,46","174,55","","2628","УНП 391617058","Унитарное предприятие \"Полоцкий молочный комбинат\"","501386142000"],["5356293","2016-10-19","","2060-11-02","140,3","168,36","","5682","УНП 500380335","РУП \"Лидский ЦСМС\"","28837716"],["5362848","2016-11-23","","2060-12-02","88,44","106,13","","7262","УНП 800007034","ООО \"ПРИРОДООХРАННЫЕ И ЭНЕРГОСБЕРЕГАЮЩИЕ ТЕХНОЛОГИИ\"","37541357"],["535285","2017-01-19","","2070-02-02","640,93","769,12","","2531","УНП 700016750","Могилевский ЦСМС","025688977000"],["539456","2017-02-09","","2070-02-23","759,19","911,02","","5682","УНП 500380335","РУП \"Лидский ЦСМС\"","28837716"],["5315330","2017-03-14","","2501-03-28","72,72","87,26","","620","УНП 100088732","СОАО \"Коммунарка\"","00390449"],["5317975","2017-03-27","","5017-04-15","125,45","150,53","","8696","УНП 200121397","Государственное учреждение \"Ганцевичский районный ЦГиЭ\"","05562104"],["5323352","2017-04-20","","2070-05-29","159,39","191,26","","476","УНП 100093400","ОАО \"Агат - электромеханический завод\"","373342105000"],["5332960","2017-06-09","","2077-06-23","67,34","80,8","","344","УНП 100211261","ОАО \"МЭТЗ ИМ. В.И.КОЗЛОВА\"","05544590"],["5341107","2017-07-19","","2070-08-31","640,68","768,83","","472","УНП 100320487","ОАО \"МАЗ\" - управляющая компания холдинга \"БЕЛАВТОМАЗ\"","05808729"],["5350258","2017-09-08","","2070-09-22","77,95","93,54","","40809","УНП 191822482","ООО \"Агрофид-энерго\"",""],["5361067","2017-11-01","","2070-11-15","91,66","109,99","","7262","УНП 800007034","ООО \"ПРИРОДООХРАННЫЕ И ЭНЕРГОСБЕРЕГАЮЩИЕ ТЕХНОЛОГИИ\"","37541357"],["5368497","2017-12-08","","2070-12-22","145,44","174,53","","4039","УНП 101382010","Республиканское унитарное предприятие по эксплуатации зданий \"БелЭЗ\"","37492251"],["533710","2018-01-10","","2080-01-24","399,85","479,82","","50380","УНП 691159723","ООО \"Несвижский завод детского питания\"",""],["533622","2018-01-10","","2088-01-31","161,04","193,25","","5","УНП 101002035","Государственное предприятие \"НПЦГ\"","020176315000"],["534991","2018-01-17","","2080-01-31","38,19","45,83","","7262","УНП 800007034","ООО \"ПРИРОДООХРАННЫЕ И ЭНЕРГОСБЕРЕГАЮЩИЕ ТЕХНОЛОГИИ\"","37541357"],["5311229","2018-02-13","","2201-03-03","105,8","126,96","","2618","УНП 400051757","ОАО \"Гомсельмаш\"","05764311"],["5311443","2018-02-14","","2080-02-28","370,82","444,98","","2533","УНП 600154116","РУП \"Слуцкий центр стандартизации, метрологии и сертификации\"","02569773"],["5316985","2018-03-15","","2080-03-20","302,49","362,99","","2517","УНП 200167576","РУП \"Барановичский ЦСМС\"","02568383"],["5317459","2018-03-16","","3018-03-30","41,78","50,14","","28207","УНП 190982295","Частное предприятие \"ДЭКОС-ПЛЮС\"","377875035000"],["5324911","2018-04-19","","2108-05-25","16,02","19,23","","1436","УНП 100083399","ОАО \"ИСПЫТАНИЯ И СЕРТИФИКАЦИЯ БЫТОВОЙ И ПРОМЫШЛЕННОЙ ПРОДУКЦИИ \"БЕЛЛИС\"","14797657"],["5325144","2018-04-19","","2108-05-25","101,89","122,25","","41377","УНП 391071415","Частное предприятие \"ЯВГ-сервис\"",""],["5332003","2018-05-21","","9201-06-25","126,54","151,84","","2241","УНП 600066447","Производственное республиканское унитарное предприятие \"Молодечненский завод порошковой металлургии\"","05893847"],["5338959","2018-06-21","","2180-07-25","164,62","197,54","","2140","УНП 600122531","ОАО \"ЛМЗ Универсал\"","05750906"],["5339855","2018-06-26","","2080-07-26","126,27","151,51","","2052","УНП 600009233","ОАО \"Борисовский завод \"Автогидроусилитель\"","00232153"],["5342096","2018-07-09","2020-05-30","","230,97","277,16","","8508","УНП 200073416","КУМПП ЖКХ \"Ивановское ЖКХ\"","03368858"],["5353647","2018-08-10","","8018-08-20","3,55","4,26","","53913","УНП 190438613","УП \"ИРПОЛ\"",""],["5372935","2018-10-31","","2501-11-15","977,9","1173,49","","2530","УНП 700066535","Бобруйский ЦСМС","025688807000"],["5382504","2018-12-14","","","0","0","","8321","УНП 100135408","РСФ Фрунзенского района  ОАО \"Минскремстрой\"",""],["5382892","2018-12-17","","2049-01-24","134,08","160,88","","34967","УНП 690542961","Инженерное частное унитарное предприятие \"ИНЖЕНЕР-СТРОИТЕЛЬ\"",""],["5383062","2018-12-18","","","77,01","92,41","","51913","УНП 192641312","ООО \"Итернал Групп\"","382834375000"],["534006","2019-01-09","","2190-01-24","83,06","99,67","","16539","УНП 100296916","ГУО РИВШ","02071926"],["5313590","2019-02-19","","2060-03-05","83,06","99,67","","8003","УНП 100056428","КУП \"Минскхлебпром\"","05542510"],["5314729","2019-02-25","","3019-03-15","61,53","73,84","","54977","УНП 193178312","ООО \"ЭкоТехЭнергоСервис ВК\"","502529595000"],["5314824","2019-02-25","","3019-03-18","104,79","125,75","","50349","УНП 192643249","Частное предприятие \"Экотехцентр НПК\"","382839725000"],["5314826","2019-02-25","","3019-03-11","83,06","99,67","","50349","УНП 192643249","Частное предприятие \"Экотехцентр НПК\"","382839725000"],["7225876","2019-04-12","","","0","0","","2517","УНП 200167576","РУП \"Барановичский ЦСМС\"","02568383"],["7233868","2019-05-23","","","0","0","","687","УНП 100349860","ОАО \"МИНСКИЙ ЗАВОД ИГРИСТЫХ ВИН\"","05896811"],["721","2020-04-13","2020-05-21","","245,13","294,16","","2535","УНП 200050122","ОАО \"Брестлифт\"","05548079"],["722","2020-04-22","2020-06-03","","668,5","802,2","","5591","УНП 200566209","КУПП \"Барановичи коммунтеплосеть\"","28882183"],["724","2020-05-04","2020-06-03","","134,1","160,92","","432","УНП 100236027","УП \"Минскводоканал\"","03371271"],["725","2020-05-04","2020-06-03","","108,42","130,1","","2535","УНП 200050122","ОАО \"Брестлифт\"","05548079"],["723","2020-05-04","","","118,9","142,68","","666","УНП 100079183","РУП \"Институт почвоведения и агрохимии\"","00750921"]]

/***/ }),

/***/ "./assets/data.xml":
/*!*************************!*\
  !*** ./assets/data.xml ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"email":{"to":["Pallo"],"from":["WEB"],"heading":["TUT"],"body":["FIN"]}}

/***/ }),

/***/ "./assets/json.json":
/*!**************************!*\
  !*** ./assets/json.json ***!
  \**************************/
/*! exports provided: title, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"JSON title\"}");

/***/ }),

/***/ "./assets/webpack-logo.png":
/*!*********************************!*\
  !*** ./assets/webpack-logo.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "acb271fa8d88e8bae5f5921eb4b544a8.png");

/***/ }),

/***/ "./babel.js":
/*!******************!*\
  !*** ./babel.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.resolve('async is working');

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _start.apply(this, arguments);
}

start().then(console.log);
var unused = 42;
console.log(unused);

var Util = function Util() {
  _classCallCheck(this, Util);
};

_defineProperty(Util, "date", Date.now());

console.log('Util - Date', Util.date);

/***/ }),

/***/ "./index.jsx":
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/Post */ "./models/Post.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styles.css */ "./styles/styles.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/json */ "./assets/json.json");
var _assets_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./assets/json */ "./assets/json.json", 1);
/* harmony import */ var _assets_webpack_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/webpack-logo */ "./assets/webpack-logo.png");
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/data.xml */ "./assets/data.xml");
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_data_xml__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/data.csv */ "./assets/data.csv");
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_data_csv__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_less_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/less.less */ "./styles/less.less");
/* harmony import */ var _styles_less_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_less_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_scss_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/scss.scss */ "./styles/scss.scss");
/* harmony import */ var _styles_scss_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./babel.js */ "./babel.js");
/* harmony import */ var _babel_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);
 // импорт библиотеки jquery - *(импортировать все) as(в) $(переменную)

 // импорт файла Post

 // импорт стилей

 // импорт json

 // импорт картинок

 // импорт xml

 // импорт csv

 // импорт стилей less

 // импорт стилей scss

 // импорт и подключение babel.js

 // импорт React


var post = new _models_Post__WEBPACK_IMPORTED_MODULE_1__["default"]('Webpack Post Title', _assets_webpack_logo__WEBPACK_IMPORTED_MODULE_4__["default"]);
jquery__WEBPACK_IMPORTED_MODULE_0__('pre').addClass('code').html(post.toString());

var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "Webpack"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("pre", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, "LESS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, "SCSS")));
};

Object(react_dom__WEBPACK_IMPORTED_MODULE_11__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(App, null), document.getElementById('app')); // console.log('Post', post);
// console.log('JSON', json);
// console.log('XML', xml);
// console.log('CSV', csv);

/***/ }),

/***/ "./models/Post.js":
/*!************************!*\
  !*** ./models/Post.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Post = /*#__PURE__*/function () {
  // чтобы не прописывать порядок файлов в html нужно прописать export default - экспорт класса по умолчанию
  function Post(title, img) {
    _classCallCheck(this, Post);

    this.title = title;
    this.img = img;
    this.date = new Date();
  }

  _createClass(Post, [{
    key: "toString",
    value: function toString() {
      return JSON.stringify({
        title: this.title,
        date: this.date.toJSON(),
        img: this.img
      }, null, 2);
    }
  }, {
    key: "getUpperCaseTitle",
    value: function getUpperCaseTitle() {
      return this.title.toUpperCase();
    }
  }]);

  return Post;
}();



/***/ }),

/***/ "./styles/less.less":
/*!**************************!*\
  !*** ./styles/less.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/scss.scss":
/*!**************************!*\
  !*** ./styles/scss.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi @babel/polyfill ./index.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.jsx */"./index.jsx");


/***/ })

/******/ });