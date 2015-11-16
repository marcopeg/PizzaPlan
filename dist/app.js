/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _reducersVotesReducer = __webpack_require__(2);
	
	var reducer = _interopRequireWildcard(_reducersVotesReducer);
	
	// const __DEBUG__ = true;

	// // Twitter Bootstrap is included via HTML
	// require('./index.scss');

	// import React from 'react';
	// import ReactDOM from 'react-dom';

	// import { App } from 'containers/app';
	// import { makeStore } from 'utils/store';

	// var Main = require(__DEBUG__ ? 'utils/main-debug' : 'utils/main').Main;

	// import * as initialStates from '../specs/fixtures/initial-state.fixture';
	// var store = makeStore(__DEBUG__, initialStates.DEV);

	// ReactDOM.render((
	//     <Main
	//         app={App}
	//         store={store} />
	// ), document.getElementById('app'));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.votesReducer = votesReducer;
	exports.addVote = addVote;
	exports.removeVote = removeVote;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _actionsVotesActions = __webpack_require__(3);
	
	var initialState = {
	    normal: 0,
	    veggie: 0,
	    vegan: 0,
	    gfree: 0,
	    nopizza: 0
	};
	
	exports.initialState = initialState;
	
	function votesReducer(state, action) {
	    if (state === undefined) state = initialState;
	    var type = action.type;
	    var payload = action.payload;
	
	    switch (type) {
	        case _actionsVotesActions.ADD:
	            return addVote(state, payload);
	        case _actionsVotesActions.REMOVE:
	            return removeVote(state, payload);
	        default:
	            return state;
	    }
	}
	
	function addVote(state, payload) {
	    var type = payload.type;
	
	    return _extends({}, state, _defineProperty({}, type, state[type] + 1));
	}
	
	function removeVote(state, payload) {
	    var type = payload.type;
	
	    var val = state[type];
	
	    if (val > 0) {
	        val -= 1;
	    }
	
	    return _extends({}, state, _defineProperty({}, type, val));
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.add = add;
	exports.remove = remove;
	var ADD = 'votes@add';
	exports.ADD = ADD;
	var REMOVE = 'votes@remove';
	
	exports.REMOVE = REMOVE;
	
	function add(type) {
	    return {
	        type: ADD,
	        payload: { type: type }
	    };
	}
	
	function remove(type) {
	    return {
	        type: REMOVE,
	        payload: { type: type }
	    };
	}

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map