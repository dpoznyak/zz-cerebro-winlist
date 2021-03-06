module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (g) {
  function h(m) {
    if (k[m]) return k[m].exports;var n = k[m] = { i: m, l: !1, exports: {} };return g[m].call(n.exports, n, n.exports, h), n.l = !0, n.exports;
  }var k = {};return h.m = g, h.c = k, h.i = function (m) {
    return m;
  }, h.d = function (m, n, p) {
    Object.defineProperty(m, n, { configurable: !1, enumerable: !0, get: p });
  }, h.n = function (m) {
    var n = m && m.__esModule ? function () {
      return m['default'];
    } : function () {
      return m;
    };return h.d(n, 'a', n), n;
  }, h.o = function (m, n) {
    return Object.prototype.hasOwnProperty.call(m, n);
  }, h.p = '', h(h.s = 67);
}([function (g) {
  'use strict';'use strict';
  g.exports = function (h) {
    if ('function' != typeof h) throw new TypeError(h + ' is not a function');return h;
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(29),
      n = Math.max;g.exports = function (p) {
    return n(0, m(p));
  };
}, function () {
  'use strict';'use strict';
}, function (g) {
  'use strict';'use strict';
  g.exports = function (h) {
    if (null == h) throw new TypeError('Cannot use null or undefined');return h;
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var t,
      m = k(11),
      n = k(14),
      p = k(33),
      q = k(37);t = g.exports = function (u, v) {
    var A, B, C, D, E;return 2 > arguments.length || 'string' != typeof u ? (D = v, v = u, u = null) : D = arguments[2], null == u ? (A = C = !0, B = !1) : (A = q.call(u, 'c'), B = q.call(u, 'e'), C = q.call(u, 'w')), E = { value: v, configurable: A, enumerable: B, writable: C }, D ? m(n(D), E) : E;
  }, t.gs = function (u, v, A) {
    var B, C, D, E;return 'string' == typeof u ? D = arguments[3] : (D = A, A = v, v = u, u = null), null == v ? v = void 0 : p(v) ? null == A ? A = void 0 : !p(A) && (D = A, A = void 0) : (D = v, v = A = void 0), null == u ? (B = !0, C = !1) : (B = q.call(u, 'c'), C = q.call(u, 'e')), E = { get: v, set: A, configurable: B, enumerable: C }, D ? m(n(D), E) : E;
  };
}, function (g, h, k) {
  'use strict';'use strict';
  g.exports = k(30)('forEach');
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(1),
      n = k(3),
      p = Array.prototype.indexOf,
      q = Object.prototype.hasOwnProperty,
      t = Math.abs,
      u = Math.floor;g.exports = function (v) {
    var A, B, C, D;if (v === v) return p.apply(this, arguments);for (B = m(n(this).length), C = arguments[1], C = isNaN(C) ? 0 : 0 <= C ? u(C) : m(this.length) - u(t(C)), A = C; A < B; ++A) if (q.call(this, A) && (D = this[A], D != D)) return A;return -1;
  };
}, function (g, h, k) {
  'use strict';'use strict';
  g.exports = k(19)() ? Array.from : k(20);
}, function (g) {
  'use strict';'use strict';
  var h, k;h = function (m) {
    if ('function' != typeof m) throw new TypeError(m + ' is not a function');return m;
  }, k = function (m) {
    var p,
        q,
        n = document.createTextNode(''),
        t = 0;return new m(function () {
      var u;if (!p) {
        if (!q) return;p = q;
      } else q && (p = q.concat(p));if (q = p, p = null, 'function' == typeof q) return u = q, q = null, void u();for (n.data = t = ++t % 2; q;) u = q.shift(), q.length || (q = null), u();
    }).observe(n, { characterData: !0 }), function (u) {
      return h(u), p ? void ('function' == typeof p ? p = [p, u] : p.push(u)) : void (p = u, n.data = t = ++t % 2);
    };
  }, g.exports = function () {
    if ('object' == typeof process && process && 'function' == typeof process.nextTick) return process.nextTick;if ('object' == typeof document && document) {
      if ('function' == typeof MutationObserver) return k(MutationObserver);if ('function' == typeof WebKitMutationObserver) return k(WebKitMutationObserver);
    }return 'function' == typeof setImmediate ? function (m) {
      setImmediate(h(m));
    } : 'function' == typeof setTimeout || 'object' == typeof setTimeout ? function (m) {
      setTimeout(h(m), 0);
    } : null;
  }();
}, function (g, h, k) {
  'use strict';
  var m = k(54),
      n = k.n(m);h.a = n.a;
}, function (g, h, k) {
  'use strict';'use strict';
  var p,
      q,
      t,
      u,
      m = k(1),
      n = function () {};try {
    Object.defineProperty(n, 'length', { configurable: !0, writable: !1, enumerable: !1, value: 1 });
  } catch (v) {}1 === n.length ? (p = { configurable: !0, writable: !1, enumerable: !1 }, q = Object.defineProperty, g.exports = function (v, A) {
    return (A = m(A), v.length === A) ? v : (p.value = A, q(v, 'length', p));
  }) : (u = k(13), t = function () {
    var v = [];return function (A) {
      var B,
          C = 0;if (v[A]) return v[A];for (B = []; A--;) B.push('a' + (++C).toString(36));return new Function('fn', 'return function (' + B.join(', ') + ') { return fn.apply(this, arguments); };');
    };
  }(), g.exports = function (v, A) {
    var B;if (A = m(A), v.length === A) return v;B = t(A)(v);try {
      u(B, v);
    } catch (C) {}return B;
  });
}, function (g, h, k) {
  'use strict';'use strict';
  g.exports = k(31)() ? Object.assign : k(32);
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(0),
      n = k(5),
      p = Function.prototype.call;g.exports = function (q, t) {
    var u = {},
        v = arguments[2];return m(t), n(q, function (A, B, C, D) {
      u[B] = p.call(t, v, A, B, C, D);
    }), u;
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(3),
      n = Object.defineProperty,
      p = Object.getOwnPropertyDescriptor,
      q = Object.getOwnPropertyNames,
      t = Object.getOwnPropertySymbols;g.exports = function (u, v) {
    var A,
        B = Object(m(v));if (u = Object(m(u)), q(B).forEach(function (C) {
      try {
        n(u, C, p(v, C));
      } catch (D) {
        A = D;
      }
    }), 'function' == typeof t && t(B).forEach(function (C) {
      try {
        n(u, C, p(v, C));
      } catch (D) {
        A = D;
      }
    }), void 0 !== A) throw A;return u;
  };
}, function (g) {
  'use strict';'use strict';
  var h = Array.prototype.forEach,
      k = Object.create,
      m = function (n, p) {
    for (var q in n) p[q] = n[q];
  };g.exports = function () {
    var n = k(null);return h.call(arguments, function (p) {
      null == p || m(Object(p), n);
    }), n;
  };
}, function (g) {
  g.exports = function (k) {
    return !!k && ('object' == typeof k || 'function' == typeof k) && 'function' == typeof k.then;
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(1);g.exports = function (n, p, q) {
    var t;return isNaN(n) ? (t = p, 0 <= t ? q && t ? t - 1 : t : 1) : !1 !== n && m(n);
  };
}, function (g, h, k) {
  'use strict';
  var m = k(9);const n = u => u.replace(/[^а-яa-z0-9\s]/i, '').replace(/([а-яa-z])([A-ZА-Я])/g, (v, A, B) => [A, B].join(' ').toLowerCase()).replace(/([^0-9])([0-9])/g, (v, A, B) => [A, B].join(' ').toLowerCase()).toLowerCase(),
        p = u => u.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'),
        q = k.i(m.a)(u => [u.toLowerCase(), n(u)].join(' ')),
        t = k.i(m.a)(u => new RegExp(`(^|[^a-zA-Zа-яА-Я0-9])${p(u.toLowerCase())}`));h.a = (u, v, A = C => C) => {
    const B = t(v || '');return u.filter(C => q(A(C)).match(B));
  };
}, function (g, h, k) {
  'use strict';
  var m = k(66);k.n(m), h.a = function (n) {
    return new Promise((p, q) => {
      k.i(m.exec)(n, (t, u) => t ? q(t) : p(u));
    });
  };
}, function (g) {
  'use strict';'use strict';
  g.exports = function () {
    var k,
        m,
        h = Array.from;return !('function' != typeof h) && (k = ['raz', 'dwa'], m = h(k), !!(m && m != k && 'dwa' === m[1]));
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(41).iterator,
      n = k(23),
      p = k(24),
      q = k(1),
      t = k(0),
      u = k(3),
      v = k(40),
      A = Array.isArray,
      B = Function.prototype.call,
      C = { configurable: !0, enumerable: !0, writable: !0, value: null },
      D = Object.defineProperty;g.exports = function (E) {
    var H,
        I,
        J,
        K,
        L,
        M,
        N,
        O,
        P,
        Q,
        F = arguments[1],
        G = arguments[2];if (E = Object(u(E)), null != F && t(F), !this || this === Array || !p(this)) {
      if (!F) {
        if (n(E)) return (L = E.length, 1 !== L) ? Array.apply(null, E) : (K = [,], K[0] = E[0], K);if (A(E)) {
          for (K = Array(L = E.length), I = 0; I < L; ++I) K[I] = E[I];return K;
        }
      }K = [];
    } else H = this;if (!A(E)) if (void 0 !== (P = E[m])) {
      for (N = t(P).call(E), H && (K = new H()), O = N.next(), I = 0; !O.done;) Q = F ? B.call(F, G, O.value, I) : O.value, H ? (C.value = Q, D(K, I, C)) : K[I] = Q, O = N.next(), ++I;L = I;
    } else if (v(E)) {
      for (L = E.length, H && (K = new H()), (I = 0, J = 0); I < L; ++I) Q = E[I], I + 1 < L && (M = Q.charCodeAt(0), 55296 <= M && 56319 >= M && (Q += E[++I])), Q = F ? B.call(F, G, Q, J) : Q, H ? (C.value = Q, D(K, J, C)) : K[J] = Q, ++J;L = J;
    }if (void 0 === L) for (L = q(E.length), H && (K = new H(L)), I = 0; I < L; ++I) Q = F ? B.call(F, G, E[I], I) : E[I], H ? (C.value = Q, D(K, I, C)) : K[I] = Q;return H && (C.value = null, K.length = L), K;
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(7),
      n = Array.isArray;g.exports = function (p) {
    return n(p) ? p : m(p);
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(11),
      n = Error.captureStackTrace;h = g.exports = function (p) {
    var q = new Error(),
        t = arguments[1],
        u = arguments[2];return null == u && t && 'object' == typeof t && (u = t, t = null), null != u && m(q, u), q.message = p + '', null != t && (q.code = t + ''), n && n(q, h), q;
  };
}, function (g) {
  'use strict';'use strict';
  var h = Object.prototype.toString,
      k = h.call(function () {
    return arguments;
  }());g.exports = function (m) {
    return h.call(m) === k;
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = Object.prototype.toString,
      n = m.call(k(25));g.exports = function (p) {
    return 'function' == typeof p && m.call(p) === n;
  };
}, function (g) {
  'use strict';'use strict';
  g.exports = function () {};
}, function (g, h, k) {
  'use strict';'use strict';
  g.exports = k(27)() ? Math.sign : k(28);
}, function (g) {
  'use strict';'use strict';
  g.exports = function () {
    var h = Math.sign;return !('function' != typeof h) && 1 === h(10) && -1 === h(-20);
  };
}, function (g) {
  'use strict';'use strict';
  g.exports = function (h) {
    return h = +h, isNaN(h) || 0 === h ? h : 0 < h ? 1 : -1;
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(26),
      n = Math.abs,
      p = Math.floor;g.exports = function (q) {
    return isNaN(q) ? 0 : (q = +q, 0 !== q && isFinite(q) ? m(q) * p(n(q)) : q);
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(0),
      n = k(3),
      p = Function.prototype.bind,
      q = Function.prototype.call,
      t = Object.keys,
      u = Object.prototype.propertyIsEnumerable;g.exports = function (v, A) {
    return function (B, C) {
      var D,
          E = arguments[2],
          F = arguments[3];return B = Object(n(B)), m(C), D = t(B), F && D.sort('function' == typeof F ? p.call(F, B) : void 0), 'function' != typeof v && (v = D[v]), q.call(v, D, function (G, H) {
        return u.call(B, G) ? q.call(C, E, B[G], G, B, H) : A;
      });
    };
  };
}, function (g) {
  'use strict';'use strict';
  g.exports = function () {
    var k,
        h = Object.assign;return !('function' != typeof h) && (k = { foo: 'raz' }, h(k, { bar: 'dwa' }, { trzy: 'trzy' }), 'razdwatrzy' === k.foo + k.bar + k.trzy);
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(34),
      n = k(3),
      p = Math.max;g.exports = function (q, t) {
    var u,
        v,
        B,
        A = p(arguments.length, 2);for (q = Object(n(q)), B = function (C) {
      try {
        q[C] = t[C];
      } catch (D) {
        u || (u = D);
      }
    }, v = 1; v < A; ++v) t = arguments[v], m(t).forEach(B);if (u !== void 0) throw u;return q;
  };
}, function (g) {
  'use strict';'use strict';
  g.exports = function (h) {
    return 'function' == typeof h;
  };
}, function (g, h, k) {
  'use strict';'use strict';
  g.exports = k(35)() ? Object.keys : k(36);
}, function (g) {
  'use strict';'use strict';
  g.exports = function () {
    try {
      return Object.keys('primitive'), !0;
    } catch (h) {
      return !1;
    }
  };
}, function (g) {
  'use strict';'use strict';
  var h = Object.keys;g.exports = function (k) {
    return h(null == k ? k : Object(k));
  };
}, function (g, h, k) {
  'use strict';'use strict';
  g.exports = k(38)() ? String.prototype.contains : k(39);
}, function (g) {
  'use strict';'use strict';
  var h = 'razdwatrzy';g.exports = function () {
    return !('function' != typeof h.contains) && !0 === h.contains('dwa') && !1 === h.contains('foo');
  };
}, function (g) {
  'use strict';'use strict';
  var h = String.prototype.indexOf;g.exports = function (k) {
    return -1 < h.call(this, k, arguments[1]);
  };
}, function (g) {
  'use strict';'use strict';
  var h = Object.prototype.toString,
      k = h.call('');g.exports = function (m) {
    return 'string' == typeof m || m && 'object' == typeof m && (m instanceof String || h.call(m) === k) || !1;
  };
}, function (g, h, k) {
  'use strict';'use strict';
  g.exports = k(42)() ? Symbol : k(44);
}, function (g) {
  'use strict';'use strict';
  var h = { object: !0, symbol: !0 };g.exports = function () {
    var k;if ('function' != typeof Symbol) return !1;k = Symbol('test symbol');try {
      k + '';
    } catch (m) {
      return !1;
    }return !!h[typeof Symbol.iterator] && !!h[typeof Symbol.toPrimitive] && !!h[typeof Symbol.toStringTag];
  };
}, function (g) {
  'use strict';'use strict';
  g.exports = function (h) {
    return !!h && (!('symbol' != typeof h) || !!h.constructor && !('Symbol' !== h.constructor.name) && 'Symbol' === h[h.constructor.toStringTag]);
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var v,
      A,
      B,
      D,
      m = k(4),
      n = k(45),
      p = Object.create,
      q = Object.defineProperties,
      t = Object.defineProperty,
      u = Object.prototype,
      C = p(null);if ('function' == typeof Symbol) {
    v = Symbol;try {
      v() + '', D = !0;
    } catch (F) {}
  }var E = function () {
    var F = p(null);return function (G) {
      for (var I, J, H = 0; F[G + (H || '')];) ++H;return G += H || '', F[G] = !0, I = '@@' + G, t(u, I, m.gs(null, function (K) {
        J || (J = !0, t(this, I, m(K)), J = !1);
      })), I;
    };
  }();B = function (G) {
    if (this instanceof B) throw new TypeError('TypeError: Symbol is not a constructor');return A(G);
  }, g.exports = A = function F(G) {
    var H;if (this instanceof F) throw new TypeError('TypeError: Symbol is not a constructor');return D ? v(G) : (H = p(B.prototype), G = void 0 === G ? '' : G + '', q(H, { __description__: m('', G), __name__: m('', E(G)) }));
  }, q(A, { for: m(function (F) {
      return C[F] ? C[F] : C[F] = A(F + '');
    }), keyFor: m(function (F) {
      for (var G in n(F), C) if (C[G] === F) return G;
    }), hasInstance: m('', v && v.hasInstance || A('hasInstance')), isConcatSpreadable: m('', v && v.isConcatSpreadable || A('isConcatSpreadable')), iterator: m('', v && v.iterator || A('iterator')), match: m('', v && v.match || A('match')), replace: m('', v && v.replace || A('replace')), search: m('', v && v.search || A('search')), species: m('', v && v.species || A('species')), split: m('', v && v.split || A('split')), toPrimitive: m('', v && v.toPrimitive || A('toPrimitive')), toStringTag: m('', v && v.toStringTag || A('toStringTag')), unscopables: m('', v && v.unscopables || A('unscopables')) }), q(B.prototype, { constructor: m(A), toString: m('', function () {
      return this.__name__;
    }) }), q(A.prototype, { toString: m(function () {
      return 'Symbol (' + n(this).__description__ + ')';
    }), valueOf: m(function () {
      return n(this);
    }) }), t(A.prototype, A.toPrimitive, m('', function () {
    var F = n(this);return 'symbol' == typeof F ? F : F.toString();
  })), t(A.prototype, A.toStringTag, m('c', 'Symbol')), t(B.prototype, A.toStringTag, m('c', A.prototype[A.toStringTag])), t(B.prototype, A.toPrimitive, m('c', A.prototype[A.toPrimitive]));
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(43);g.exports = function (n) {
    if (!m(n)) throw new TypeError(n + ' is not a symbol');return n;
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var C,
      D,
      E,
      F,
      G,
      H,
      I,
      m = k(4),
      n = k(0),
      p = Function.prototype.apply,
      q = Function.prototype.call,
      t = Object.create,
      u = Object.defineProperty,
      v = Object.defineProperties,
      A = Object.prototype.hasOwnProperty,
      B = { configurable: !0, enumerable: !1, writable: !0 };C = function (J, K) {
    var L;return n(K), A.call(this, '__ee__') ? L = this.__ee__ : (L = B.value = t(null), u(this, '__ee__', B), B.value = null), L[J] ? 'object' == typeof L[J] ? L[J].push(K) : L[J] = [L[J], K] : L[J] = K, this;
  }, D = function (J, K) {
    var L, M;return n(K), M = this, C.call(this, J, L = function () {
      E.call(M, J, L), p.call(K, this, arguments);
    }), L.__eeOnceListener__ = K, this;
  }, E = function (J, K) {
    var L, M, N, O;if (n(K), !A.call(this, '__ee__')) return this;if (L = this.__ee__, !L[J]) return this;if (M = L[J], 'object' == typeof M) for (O = 0; N = M[O]; ++O) (N === K || N.__eeOnceListener__ === K) && (2 === M.length ? L[J] = M[O ? 0 : 1] : M.splice(O, 1));else (M === K || M.__eeOnceListener__ === K) && delete L[J];return this;
  }, F = function (J) {
    var K, L, M, N, O;if (A.call(this, '__ee__') && (N = this.__ee__[J], N)) if ('object' == typeof N) {
      for (L = arguments.length, O = Array(L - 1), K = 1; K < L; ++K) O[K - 1] = arguments[K];for (N = N.slice(), K = 0; M = N[K]; ++K) p.call(M, this, O);
    } else switch (arguments.length) {case 1:
        q.call(N, this);break;case 2:
        q.call(N, this, arguments[1]);break;case 3:
        q.call(N, this, arguments[1], arguments[2]);break;default:
        for (L = arguments.length, O = Array(L - 1), K = 1; K < L; ++K) O[K - 1] = arguments[K];p.call(N, this, O);}
  }, G = { on: C, once: D, off: E, emit: F }, H = { on: m(C), once: m(D), off: m(E), emit: m(F) }, I = v({}, H), g.exports = h = function (J) {
    return null == J ? t(I) : v(Object(J), H);
  }, h.methods = G;
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(1),
      n = Object.create,
      p = Object.prototype.hasOwnProperty;g.exports = function (q) {
    var C,
        t = 0,
        u = 1,
        v = n(null),
        A = n(null),
        B = 0;return q = m(q), { hit: function (D) {
        var E = A[D],
            F = ++B;if (v[F] = D, A[D] = F, !E) return (++t, t <= q) ? void 0 : (D = v[u], C(D), D);if (delete v[E], u === E) for (; !p.call(v, ++u);) continue;
      }, delete: C = function (D) {
        var E = A[D];if (E && (delete v[E], delete A[D], --t, u === E)) {
          if (!t) return B = 0, void (u = 1);for (; !p.call(v, ++u);) continue;
        }
      }, clear: function () {
        t = 0, u = 1, v = n(null), A = n(null), B = 0;
      } };
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(7),
      n = k(12),
      p = k(13),
      q = k(10),
      t = k(8),
      u = Array.prototype.slice,
      v = Function.prototype.apply,
      A = Object.create,
      B = Object.prototype.hasOwnProperty;k(2).async = function (C, D) {
    var I,
        J,
        K,
        E = A(null),
        F = A(null),
        G = D.memoized,
        H = D.original;D.memoized = q(function () {
      var L = arguments,
          M = L[L.length - 1];return 'function' == typeof M && (I = M, L = u.call(L, 0, -1)), G.apply(J = this, K = L);
    }, G);try {
      p(D.memoized, G);
    } catch (L) {}D.on('get', function (L) {
      var M, N, O;if (I) {
        if (E[L]) return 'function' == typeof E[L] ? E[L] = [E[L], I] : E[L].push(I), void (I = null);M = I, N = J, O = K, I = J = K = null, t(function () {
          var Q;B.call(F, L) ? (Q = F[L], D.emit('getasync', L, O, N), v.call(M, Q.context, Q.args)) : (I = M, J = N, K = O, G.apply(N, O));
        });
      }
    }), D.original = function () {
      var L, M, N, O;return I ? (L = m(arguments), M = function P(Q) {
        var R,
            S,
            T = P.id;return null == T ? void t(v.bind(P, this, arguments)) : (delete P.id, R = E[T], delete E[T], !!R) ? (S = m(arguments), D.has(T) && (Q ? D.delete(T) : (F[T] = { context: this, args: S }, D.emit('setasync', T, 'function' == typeof R ? 1 : R.length))), 'function' == typeof R ? O = v.call(R, this, S) : R.forEach(function (U) {
          O = v.call(U, this, S);
        }, this), O) : void 0;
      }, N = I, I = J = K = null, L.push(M), O = v.call(H, this, L), M.cb = N, I = M, O) : v.call(H, this, arguments);
    }, D.on('set', function (L) {
      return I ? void (E[L] ? 'function' == typeof E[L] ? E[L] = [E[L], I.cb] : E[L].push(I.cb) : E[L] = I.cb, delete I.cb, I.id = L, I = null) : void D.delete(L);
    }), D.on('delete', function (L) {
      var M;!B.call(E, L) && F[L] && (M = F[L], delete F[L], D.emit('deleteasync', L, u.call(M.args, 1)));
    }), D.on('clear', function () {
      var L = F;F = A(null), D.emit('clearasync', n(L, function (M) {
        return u.call(M.args, 1);
      }));
    });
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(0),
      n = k(5),
      p = k(2),
      q = Function.prototype.apply;p.dispose = function (t, u, v) {
    var A;return m(t), v.async && p.async || v.promise && p.promise ? (u.on('deleteasync', A = function (B, C) {
      q.call(t, null, C);
    }), void u.on('clearasync', function (B) {
      n(B, function (C, D) {
        A(D, C);
      });
    })) : void (u.on('delete', A = function (B, C) {
      t(C);
    }), u.on('clear', function (B) {
      n(B, function (C, D) {
        A(D, C);
      });
    }));
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(7),
      n = k(5),
      p = k(8),
      q = k(15),
      t = k(65),
      u = k(2),
      v = Function.prototype,
      A = Math.max,
      B = Math.min,
      C = Object.create;u.maxAge = function (D, E, F) {
    var G, H, I, J;D = t(D), D && (G = C(null), H = F.async && u.async || F.promise && u.promise ? 'async' : '', E.on('set' + H, function (O) {
      G[O] = setTimeout(function () {
        E.delete(O);
      }, D), J && (J[O] && 'nextTick' !== J[O] && clearTimeout(J[O]), J[O] = setTimeout(function () {
        delete J[O];
      }, I));
    }), E.on('delete' + H, function (O) {
      clearTimeout(G[O]), delete G[O], J && ('nextTick' !== J[O] && clearTimeout(J[O]), delete J[O]);
    }), F.preFetch && (I = !0 === F.preFetch || isNaN(F.preFetch) ? 0.333 : A(B(+F.preFetch, 1), 0), I && (J = {}, I = (1 - I) * D, E.on('get' + H, function (O, Q, R) {
      J[O] || (J[O] = 'nextTick', p(function () {
        var S;'nextTick' === J[O] && (delete J[O], E.delete(O), F.async && (Q = m(Q), Q.push(v)), S = E.memoized.apply(R, Q), F.promise && q(S) && ('function' == typeof S.done ? S.done(v, v) : S.then(v, v)));
      }));
    }))), E.on('clear' + H, function () {
      n(G, function (O) {
        clearTimeout(O);
      }), G = {}, J && (n(J, function (O) {
        'nextTick' !== O && clearTimeout(O);
      }), J = {});
    }));
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(1),
      n = k(47),
      p = k(2);p.max = function (q, t, u) {
    var v, A, B;q = m(q), q && (A = n(q), v = u.async && p.async || u.promise && p.promise ? 'async' : '', t.on('set' + v, B = function (E) {
      E = A.hit(E), E === void 0 || t.delete(E);
    }), t.on('get' + v, B), t.on('delete' + v, A.delete), t.on('clear' + v, A.clear));
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(12),
      n = k(15),
      p = k(8),
      q = Object.create,
      t = Object.prototype.hasOwnProperty;k(2).promise = function (u, v) {
    var A = q(null),
        B = q(null),
        C = q(null);v.on('set', function (D, E, F) {
      if (!n(F)) return B[D] = F, void v.emit('setasync', D, 1);A[D] = 1, C[D] = F;var G = function (I) {
        var J = A[D];J && (delete A[D], B[D] = I, v.emit('setasync', D, J));
      },
          H = function () {
        A[D] && (delete A[D], delete C[D], v.delete(D));
      };'then' !== u && 'function' == typeof F.done ? 'done' !== u && 'function' == typeof F.finally ? (F.done(G), F.finally(H)) : F.done(G, H) : F.then(function (I) {
        p(G.bind(this, I));
      }, function () {
        p(H);
      });
    }), v.on('get', function (D, E, F) {
      var G;if (A[D]) return void ++A[D];G = C[D];var H = function () {
        v.emit('getasync', D, E, F);
      };n(G) ? 'function' == typeof G.done ? G.done(H) : G.then(function () {
        p(H);
      }) : H();
    }), v.on('delete', function (D) {
      if (delete C[D], A[D]) return void delete A[D];if (t.call(B, D)) {
        var E = B[D];delete B[D], v.emit('deleteasync', D, [E]);
      }
    }), v.on('clear', function () {
      var D = B;B = q(null), A = q(null), C = q(null), v.emit('clearasync', m(D, function (E) {
        return [E];
      }));
    });
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(4),
      n = k(2),
      p = Object.create,
      q = Object.defineProperties;n.refCounter = function (t, u, v) {
    var A, B;A = p(null), B = v.async && n.async || v.promise && n.promise ? 'async' : '', u.on('set' + B, function (C, D) {
      A[C] = D || 1;
    }), u.on('get' + B, function (C) {
      ++A[C];
    }), u.on('delete' + B, function (C) {
      delete A[C];
    }), u.on('clear' + B, function () {
      A = {};
    }), q(u.memoized, { deleteRef: m(function () {
        var C = u.get(arguments);return null === C ? null : A[C] ? ! --A[C] && (u.delete(C), !0) : null;
      }), getRefCount: m(function () {
        var C = u.get(arguments);return null === C ? 0 : A[C] ? A[C] : 0;
      }) });
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(14),
      n = k(16),
      p = k(63);g.exports = function (q) {
    var u,
        t = m(arguments[1]);return t.normalizer || (u = t.length = n(t.length, q.length, t.async), 0 !== u && (t.primitive ? !1 === u ? t.normalizer = k(62) : 1 < u && (t.normalizer = k(60)(u)) : !1 === u ? t.normalizer = k(61)() : 1 === u ? t.normalizer = k(58)() : t.normalizer = k(59)(u))), t.async && k(48), t.promise && k(52), t.dispose && k(49), t.maxAge && k(50), t.max && k(51), t.refCounter && k(53), p(q, t);
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(22),
      n = k(10),
      p = k(4),
      q = k(46).methods,
      t = k(57),
      u = k(56),
      v = Function.prototype.apply,
      A = Function.prototype.call,
      B = Object.create,
      C = Object.prototype.hasOwnProperty,
      D = Object.defineProperties,
      E = q.on,
      F = q.emit;g.exports = function (G, H, I) {
    var K,
        L,
        M,
        N,
        O,
        P,
        Q,
        R,
        S,
        T,
        U,
        V,
        W,
        J = B(null);return L = !1 === H ? isNaN(G.length) ? 1 : G.length : H, I.normalizer && (R = u(I.normalizer), M = R.get, N = R.set, O = R.delete, P = R.clear), null != I.resolvers && (W = t(I.resolvers)), V = M ? n(function () {
      var X,
          Y,
          Z = arguments;if (W && (Z = W(Z)), X = M(Z), null !== X && C.call(J, X)) return S && K.emit('get', X, Z, this), J[X];if (Y = 1 === Z.length ? A.call(G, this, Z[0]) : v.call(G, this, Z), null === X) {
        if (X = M(Z), null !== X) throw m('Circular invocation', 'CIRCULAR_INVOCATION');X = N(Z);
      } else if (C.call(J, X)) throw m('Circular invocation', 'CIRCULAR_INVOCATION');return J[X] = Y, T && K.emit('set', X, null, Y), Y;
    }, L) : 0 === H ? function () {
      var X;if (C.call(J, 'data')) return S && K.emit('get', 'data', arguments, this), J.data;if (X = arguments.length ? v.call(G, this, arguments) : A.call(G, this), C.call(J, 'data')) throw m('Circular invocation', 'CIRCULAR_INVOCATION');return J.data = X, T && K.emit('set', 'data', null, X), X;
    } : function () {
      var X,
          Z,
          Y = arguments;if (W && (Y = W(arguments)), Z = Y[0] + '', C.call(J, Z)) return S && K.emit('get', Z, Y, this), J[Z];if (X = 1 === Y.length ? A.call(G, this, Y[0]) : v.call(G, this, Y), C.call(J, Z)) throw m('Circular invocation', 'CIRCULAR_INVOCATION');return J[Z] = X, T && K.emit('set', Z, null, X), X;
    }, K = { original: G, memoized: V, get: function (X) {
        return W && (X = W(X)), M ? M(X) : X[0] + '';
      }, has: function (X) {
        return C.call(J, X);
      }, delete: function (X) {
        var Y;C.call(J, X) && (O && O(X), Y = J[X], delete J[X], U && K.emit('delete', X, Y));
      }, clear: function () {
        var X = J;P && P(), J = B(null), K.emit('clear', X);
      }, on: function (X, Y) {
        return 'get' === X ? S = !0 : 'set' === X ? T = !0 : 'delete' == X && (U = !0), E.call(this, X, Y);
      }, emit: F, updateEnv: function () {
        G = K.original;
      } }, Q = M ? n(function () {
      var X,
          Y = arguments;W && (Y = W(Y)), X = M(Y), null === X || K.delete(X);
    }, L) : 0 === H ? function () {
      return K.delete('data');
    } : function (X) {
      return W && (X = W(arguments)[0]), K.delete(X);
    }, D(V, { __memoized__: p(!0), delete: p(Q), clear: p(K.clear) }), K;
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(0);g.exports = function (n) {
    var p;return 'function' == typeof n ? { set: n, get: n } : (p = { get: m(n.get) }, void 0 !== n.set) ? (p.set = m(n.set), p.delete = m(n.delete), p.clear = m(n.clear), p) : (p.set = p.get, p);
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var q,
      m = k(21),
      n = k(0),
      p = Array.prototype.slice;q = function (t) {
    return this.map(function (u, v) {
      return u ? u(t[v]) : t[v];
    }).concat(p.call(t, this.length));
  }, g.exports = function (t) {
    return t = m(t), t.forEach(function (u) {
      null != u && n(u);
    }), q.bind(t);
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(6);g.exports = function () {
    var n = 0,
        p = [],
        q = [];return { get: function (t) {
        var u = m.call(p, t[0]);return -1 === u ? null : q[u];
      }, set: function (t) {
        return p.push(t[0]), q.push(++n), n;
      }, delete: function (t) {
        var u = m.call(q, t);-1 !== u && (p.splice(u, 1), q.splice(u, 1));
      }, clear: function () {
        p = [], q = [];
      } };
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(6),
      n = Object.create;g.exports = function (p) {
    var q = 0,
        t = [[], []],
        u = n(null);return { get: function (v) {
        for (var C, A = 0, B = t; A < p - 1;) {
          if (C = m.call(B[0], v[A]), -1 === C) return null;B = B[1][C], ++A;
        }return C = m.call(B[0], v[A]), -1 === C ? null : B[1][C] || null;
      }, set: function (v) {
        for (var C, A = 0, B = t; A < p - 1;) C = m.call(B[0], v[A]), -1 === C && (C = B[0].push(v[A]) - 1, B[1].push([[], []])), B = B[1][C], ++A;return C = m.call(B[0], v[A]), -1 === C && (C = B[0].push(v[A]) - 1), B[1][C] = ++q, u[q] = v, q;
      }, delete: function (v) {
        for (var C, A = 0, B = t, D = [], E = u[v]; A < p - 1;) {
          if (C = m.call(B[0], E[A]), -1 === C) return;D.push(B, C), B = B[1][C], ++A;
        }if (C = m.call(B[0], E[A]), -1 !== C) {
          for (v = B[1][C], B[0].splice(C, 1), B[1].splice(C, 1); !B[0].length && D.length;) C = D.pop(), B = D.pop(), B[0].splice(C, 1), B[1].splice(C, 1);delete u[v];
        }
      }, clear: function () {
        t = [[], []], u = n(null);
      } };
  };
}, function (g) {
  'use strict';'use strict';
  g.exports = function (h) {
    return h ? function (k) {
      for (var m = k[0] + '', n = 0, p = h; --p;) m += '\x01' + k[++n];return m;
    } : function () {
      return '';
    };
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(6),
      n = Object.create;g.exports = function () {
    var p = 0,
        q = [],
        t = n(null);return { get: function (u) {
        var B,
            v = 0,
            A = q,
            C = u.length;if (0 === C) return A[C] || null;if (A = A[C]) {
          for (; v < C - 1;) {
            if (B = m.call(A[0], u[v]), -1 === B) return null;A = A[1][B], ++v;
          }return B = m.call(A[0], u[v]), -1 === B ? null : A[1][B] || null;
        }return null;
      }, set: function (u) {
        var B,
            v = 0,
            A = q,
            C = u.length;if (0 === C) A[C] = ++p;else {
          for (A[C] || (A[C] = [[], []]), A = A[C]; v < C - 1;) B = m.call(A[0], u[v]), -1 === B && (B = A[0].push(u[v]) - 1, A[1].push([[], []])), A = A[1][B], ++v;B = m.call(A[0], u[v]), -1 === B && (B = A[0].push(u[v]) - 1), A[1][B] = ++p;
        }return t[p] = u, p;
      }, delete: function (u) {
        var B,
            v = 0,
            A = q,
            C = t[u],
            D = C.length,
            E = [];if (0 === D) delete A[D];else if (A = A[D]) {
          for (; v < D - 1;) {
            if (B = m.call(A[0], C[v]), -1 === B) return;E.push(A, B), A = A[1][B], ++v;
          }if (B = m.call(A[0], C[v]), -1 === B) return;for (u = A[1][B], A[0].splice(B, 1), A[1].splice(B, 1); !A[0].length && E.length;) B = E.pop(), A = E.pop(), A[0].splice(B, 1), A[1].splice(B, 1);
        }delete t[u];
      }, clear: function () {
        q = [], t = n(null);
      } };
  };
}, function (g) {
  'use strict';'use strict';
  g.exports = function (h) {
    var k,
        m,
        n = h.length;if (!n) return '\x02';for (k = h[m = 0] + ''; --n;) k += '\x01' + h[++m];return k;
  };
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(0),
      n = k(5),
      p = k(2),
      q = k(55),
      t = k(16),
      u = Object.prototype.hasOwnProperty;g.exports = function v(A) {
    var B, C, D;if (m(A), B = Object(arguments[1]), B.async && B.promise) throw new Error('Options \'async\' and \'promise\' cannot be used together');return u.call(A, '__memoized__') && !B.force ? A : (C = t(B.length, A.length, B.async && p.async), D = q(A, C, B), n(p, function (E, F) {
      B[F] && E(B[F], D, B);
    }), v.__profiler__ && v.__profiler__(D), D.updateEnv(), D.memoized);
  };
}, function (g) {
  'use strict';'use strict';
  g.exports = 2147483647;
}, function (g, h, k) {
  'use strict';'use strict';
  var m = k(1),
      n = k(64);g.exports = function (p) {
    if (p = m(p), p > n) throw new TypeError(p + ' exceeds maximum possible timeout');return p;
  };
}, function (g) {
  g.exports = __webpack_require__(2);
}, function (g, h, k) {
  'use strict';
  var m = k(9),
      n = k(17),
      p = k(18);k.d(h, 'memoize', function () {
    return m.a;
  }), k.d(h, 'search', function () {
    return n.a;
  }), k.d(h, 'shellCommand', function () {
    return p.a;
  });
}]);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint max-len: [0] */

const { shellCommand, memoize } = __webpack_require__(0);

const REGEXP = /(.*)/;
const LIST_CMD = 'C:\\_dev\\other\\cerebro\\zz-cerebro-winlist\\autoit\\list-windows.exe';
const ACTIVATE_CMD = 'C:\\_dev\\other\\cerebro\\zz-cerebro-winlist\\autoit\\activate.exe';

const DEFAULT_ICON = '/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/ExecutableBinaryIcon.icns';

/**
 * Parse line of ps command
 * @param {String} line of ps result
 * @return {Array} array of processId, processName and processPath
 */
function parsePsResult(str) {
  return str.match(/(\d+)\s+(\d+[\.|,]\d+)\s+(.*)/).slice(1);
}

function getIcon(processPath) {
  return processPath;
}

const findWindows = term => {
  console.log("searching for: " + term);
  return shellCommand(LIST_CMD + " " + term).then(result => {

    return JSON.parse(result);
  });
};

/**
 * Plugin to look and display local and external IPs
 *
 * @param  {String} options.term
 * @param  {Function} options.display
 */
const fn = ({ term, display }) => {
  // const match = term.match(REGEXP);
  // if (match) {
  const searchTerm = term.trim();
  // if (!searchTerm || searchTerm.len < 3) {
  //   return;
  // }
  findWindows(searchTerm).then(list => {
    console.debug(`******************Raw: ${JSON.stringify(list)}`);
    //console.debug(`****************-cerebro: ${JSON.stringify(filtered)}`)
    const actualList = searchTerm.trim() == "" ? list.filter(({ processPath }) => !processPath.includes("Cerebro")).slice(1) : list;
    //console.debug(`************-1: ${JSON.stringify(filtered)}`)
    const results = actualList.map(({ pid, i, hwnd, processPath, title, match }) => ({
      id: i,
      title,
      icon: processPath,
      subtitle: processPath,
      onSelect: () => shellCommand(ACTIVATE_CMD + " " + hwnd).then(r => console.log(r))
    }));
    display(results);
  });
  // }
};

module.exports = {
  name: 'Open window by name',
  //keyword: 'win',
  //icon: pluginIcon,
  order: 1,
  fn
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ })
/******/ ]);