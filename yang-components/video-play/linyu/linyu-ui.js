import { ref as pe, reactive as Te, watch as ge, onMounted as ye, onUnmounted as Se, openBlock as Le, createElementBlock as Ae, createElementVNode as be, nextTick as we, unref as Fe, pushScopeId as Be, popScopeId as Ue } from "vue";
function ke(X) {
  return X && X.__esModule && Object.prototype.hasOwnProperty.call(X, "default") ? X.default : X;
}
var Ce = { exports: {} };
(function(X, J) {
  (function(w, V) {
    X.exports = V();
  })(self, function() {
    return (
      /******/
      function() {
        var K = {
          /***/
          "./node_modules/es6-promise/dist/es6-promise.js": (
            /*!******************************************************!*\
              !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
              \******************************************************/
            /***/
            function(T, S, p) {
              /*!
               * @overview es6-promise - a tiny implementation of Promises/A+.
               * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
               * @license   Licensed under MIT license
               *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
               * @version   v4.2.8+1e68dce6
               */
              (function(E, h) {
                T.exports = h();
              })(this, function() {
                function E(A) {
                  var O = typeof A;
                  return A !== null && (O === "object" || O === "function");
                }
                function h(A) {
                  return typeof A == "function";
                }
                var u = void 0;
                Array.isArray ? u = Array.isArray : u = function(A) {
                  return Object.prototype.toString.call(A) === "[object Array]";
                };
                var a = u, f = 0, i = void 0, o = void 0, l = function(O, C) {
                  g[f] = O, g[f + 1] = C, f += 2, f === 2 && (o ? o(L) : b());
                };
                function s(A) {
                  o = A;
                }
                function t(A) {
                  l = A;
                }
                var n = typeof window < "u" ? window : void 0, r = n || {}, e = r.MutationObserver || r.WebKitMutationObserver, d = typeof self > "u" && typeof process < "u" && {}.toString.call(process) === "[object process]", _ = typeof Uint8ClampedArray < "u" && typeof importScripts < "u" && typeof MessageChannel < "u";
                function c() {
                  return function() {
                    return process.nextTick(L);
                  };
                }
                function v() {
                  return typeof i < "u" ? function() {
                    i(L);
                  } : m();
                }
                function y() {
                  var A = 0, O = new e(L), C = document.createTextNode("");
                  return O.observe(C, { characterData: !0 }), function() {
                    C.data = A = ++A % 2;
                  };
                }
                function x() {
                  var A = new MessageChannel();
                  return A.port1.onmessage = L, function() {
                    return A.port2.postMessage(0);
                  };
                }
                function m() {
                  var A = setTimeout;
                  return function() {
                    return A(L, 1);
                  };
                }
                var g = new Array(1e3);
                function L() {
                  for (var A = 0; A < f; A += 2) {
                    var O = g[A], C = g[A + 1];
                    O(C), g[A] = void 0, g[A + 1] = void 0;
                  }
                  f = 0;
                }
                function R() {
                  try {
                    var A = Function("return this")().require("vertx");
                    return i = A.runOnLoop || A.runOnContext, v();
                  } catch {
                    return m();
                  }
                }
                var b = void 0;
                d ? b = c() : e ? b = y() : _ ? b = x() : n === void 0 ? b = R() : b = m();
                function I(A, O) {
                  var C = this, D = new this.constructor(F);
                  D[k] === void 0 && he(D);
                  var B = C._state;
                  if (B) {
                    var j = arguments[B - 1];
                    l(function() {
                      return de(B, D, j, C._result);
                    });
                  } else
                    te(C, D, A, O);
                  return D;
                }
                function U(A) {
                  var O = this;
                  if (A && typeof A == "object" && A.constructor === O)
                    return A;
                  var C = new O(F);
                  return ee(C, A), C;
                }
                var k = Math.random().toString(36).substring(2);
                function F() {
                }
                var N = void 0, z = 1, P = 2;
                function G() {
                  return new TypeError("You cannot resolve a promise with itself");
                }
                function ne() {
                  return new TypeError("A promises callback cannot return that same promise.");
                }
                function W(A, O, C, D) {
                  try {
                    A.call(O, C, D);
                  } catch (B) {
                    return B;
                  }
                }
                function H(A, O, C) {
                  l(function(D) {
                    var B = !1, j = W(C, O, function(Q) {
                      B || (B = !0, O !== Q ? ee(D, Q) : Y(D, Q));
                    }, function(Q) {
                      B || (B = !0, M(D, Q));
                    }, "Settle: " + (D._label || " unknown promise"));
                    !B && j && (B = !0, M(D, j));
                  }, A);
                }
                function re(A, O) {
                  O._state === z ? Y(A, O._result) : O._state === P ? M(A, O._result) : te(O, void 0, function(C) {
                    return ee(A, C);
                  }, function(C) {
                    return M(A, C);
                  });
                }
                function $(A, O, C) {
                  O.constructor === A.constructor && C === I && O.constructor.resolve === U ? re(A, O) : C === void 0 ? Y(A, O) : h(C) ? H(A, O, C) : Y(A, O);
                }
                function ee(A, O) {
                  if (A === O)
                    M(A, G());
                  else if (E(O)) {
                    var C = void 0;
                    try {
                      C = O.then;
                    } catch (D) {
                      M(A, D);
                      return;
                    }
                    $(A, O, C);
                  } else
                    Y(A, O);
                }
                function oe(A) {
                  A._onerror && A._onerror(A._result), se(A);
                }
                function Y(A, O) {
                  A._state === N && (A._result = O, A._state = z, A._subscribers.length !== 0 && l(se, A));
                }
                function M(A, O) {
                  A._state === N && (A._state = P, A._result = O, l(oe, A));
                }
                function te(A, O, C, D) {
                  var B = A._subscribers, j = B.length;
                  A._onerror = null, B[j] = O, B[j + z] = C, B[j + P] = D, j === 0 && A._state && l(se, A);
                }
                function se(A) {
                  var O = A._subscribers, C = A._state;
                  if (O.length !== 0) {
                    for (var D = void 0, B = void 0, j = A._result, Q = 0; Q < O.length; Q += 3)
                      D = O[Q], B = O[Q + C], D ? de(C, D, B, j) : B(j);
                    A._subscribers.length = 0;
                  }
                }
                function de(A, O, C, D) {
                  var B = h(C), j = void 0, Q = void 0, _e = !0;
                  if (B) {
                    try {
                      j = C(D);
                    } catch (ve) {
                      _e = !1, Q = ve;
                    }
                    if (O === j) {
                      M(O, ne());
                      return;
                    }
                  } else
                    j = D;
                  O._state !== N || (B && _e ? ee(O, j) : _e === !1 ? M(O, Q) : A === z ? Y(O, j) : A === P && M(O, j));
                }
                function ue(A, O) {
                  try {
                    O(function(D) {
                      ee(A, D);
                    }, function(D) {
                      M(A, D);
                    });
                  } catch (C) {
                    M(A, C);
                  }
                }
                var le = 0;
                function fe() {
                  return le++;
                }
                function he(A) {
                  A[k] = le++, A._state = void 0, A._result = void 0, A._subscribers = [];
                }
                function ae() {
                  return new Error("Array Methods must be provided an Array");
                }
                var ie = function() {
                  function A(O, C) {
                    this._instanceConstructor = O, this.promise = new O(F), this.promise[k] || he(this.promise), a(C) ? (this.length = C.length, this._remaining = C.length, this._result = new Array(this.length), this.length === 0 ? Y(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(C), this._remaining === 0 && Y(this.promise, this._result))) : M(this.promise, ae());
                  }
                  return A.prototype._enumerate = function(C) {
                    for (var D = 0; this._state === N && D < C.length; D++)
                      this._eachEntry(C[D], D);
                  }, A.prototype._eachEntry = function(C, D) {
                    var B = this._instanceConstructor, j = B.resolve;
                    if (j === U) {
                      var Q = void 0, _e = void 0, ve = !1;
                      try {
                        Q = C.then;
                      } catch (Ee) {
                        ve = !0, _e = Ee;
                      }
                      if (Q === I && C._state !== N)
                        this._settledAt(C._state, D, C._result);
                      else if (typeof Q != "function")
                        this._remaining--, this._result[D] = C;
                      else if (B === Z) {
                        var xe = new B(F);
                        ve ? M(xe, _e) : $(xe, C, Q), this._willSettleAt(xe, D);
                      } else
                        this._willSettleAt(new B(function(Ee) {
                          return Ee(C);
                        }), D);
                    } else
                      this._willSettleAt(j(C), D);
                  }, A.prototype._settledAt = function(C, D, B) {
                    var j = this.promise;
                    j._state === N && (this._remaining--, C === P ? M(j, B) : this._result[D] = B), this._remaining === 0 && Y(j, this._result);
                  }, A.prototype._willSettleAt = function(C, D) {
                    var B = this;
                    te(C, void 0, function(j) {
                      return B._settledAt(z, D, j);
                    }, function(j) {
                      return B._settledAt(P, D, j);
                    });
                  }, A;
                }();
                function ce(A) {
                  return new ie(this, A).promise;
                }
                function me(A) {
                  var O = this;
                  return a(A) ? new O(function(C, D) {
                    for (var B = A.length, j = 0; j < B; j++)
                      O.resolve(A[j]).then(C, D);
                  }) : new O(function(C, D) {
                    return D(new TypeError("You must pass an array to race."));
                  });
                }
                function Ie(A) {
                  var O = this, C = new O(F);
                  return M(C, A), C;
                }
                function De() {
                  throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                }
                function Me() {
                  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                }
                var Z = function() {
                  function A(O) {
                    this[k] = fe(), this._result = this._state = void 0, this._subscribers = [], F !== O && (typeof O != "function" && De(), this instanceof A ? ue(this, O) : Me());
                  }
                  return A.prototype.catch = function(C) {
                    return this.then(null, C);
                  }, A.prototype.finally = function(C) {
                    var D = this, B = D.constructor;
                    return h(C) ? D.then(function(j) {
                      return B.resolve(C()).then(function() {
                        return j;
                      });
                    }, function(j) {
                      return B.resolve(C()).then(function() {
                        throw j;
                      });
                    }) : D.then(C, C);
                  }, A;
                }();
                Z.prototype.then = I, Z.all = ce, Z.race = me, Z.resolve = U, Z.reject = Ie, Z._setScheduler = s, Z._setAsap = t, Z._asap = l;
                function Pe() {
                  var A = void 0;
                  if (typeof p.g < "u")
                    A = p.g;
                  else if (typeof self < "u")
                    A = self;
                  else
                    try {
                      A = Function("return this")();
                    } catch {
                      throw new Error("polyfill failed because global object is unavailable in this environment");
                    }
                  var O = A.Promise;
                  if (O) {
                    var C = null;
                    try {
                      C = Object.prototype.toString.call(O.resolve());
                    } catch {
                    }
                    if (C === "[object Promise]" && !O.cast)
                      return;
                  }
                  A.Promise = Z;
                }
                return Z.polyfill = Pe, Z.Promise = Z, Z;
              });
            }
          ),
          /***/
          "./node_modules/events/events.js": (
            /*!***************************************!*\
              !*** ./node_modules/events/events.js ***!
              \***************************************/
            /***/
            function(T) {
              var S = typeof Reflect == "object" ? Reflect : null, p = S && typeof S.apply == "function" ? S.apply : function(m, g, L) {
                return Function.prototype.apply.call(m, g, L);
              }, E;
              S && typeof S.ownKeys == "function" ? E = S.ownKeys : Object.getOwnPropertySymbols ? E = function(m) {
                return Object.getOwnPropertyNames(m).concat(Object.getOwnPropertySymbols(m));
              } : E = function(m) {
                return Object.getOwnPropertyNames(m);
              };
              function h(x) {
                console && console.warn && console.warn(x);
              }
              var u = Number.isNaN || function(m) {
                return m !== m;
              };
              function a() {
                a.init.call(this);
              }
              T.exports = a, T.exports.once = c, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
              var f = 10;
              function i(x) {
                if (typeof x != "function")
                  throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof x);
              }
              Object.defineProperty(a, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                  return f;
                },
                set: function(x) {
                  if (typeof x != "number" || x < 0 || u(x))
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + x + ".");
                  f = x;
                }
              }), a.init = function() {
                (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
              }, a.prototype.setMaxListeners = function(m) {
                if (typeof m != "number" || m < 0 || u(m))
                  throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + m + ".");
                return this._maxListeners = m, this;
              };
              function o(x) {
                return x._maxListeners === void 0 ? a.defaultMaxListeners : x._maxListeners;
              }
              a.prototype.getMaxListeners = function() {
                return o(this);
              }, a.prototype.emit = function(m) {
                for (var g = [], L = 1; L < arguments.length; L++)
                  g.push(arguments[L]);
                var R = m === "error", b = this._events;
                if (b !== void 0)
                  R = R && b.error === void 0;
                else if (!R)
                  return !1;
                if (R) {
                  var I;
                  if (g.length > 0 && (I = g[0]), I instanceof Error)
                    throw I;
                  var U = new Error("Unhandled error." + (I ? " (" + I.message + ")" : ""));
                  throw U.context = I, U;
                }
                var k = b[m];
                if (k === void 0)
                  return !1;
                if (typeof k == "function")
                  p(k, this, g);
                else
                  for (var F = k.length, N = e(k, F), L = 0; L < F; ++L)
                    p(N[L], this, g);
                return !0;
              };
              function l(x, m, g, L) {
                var R, b, I;
                if (i(g), b = x._events, b === void 0 ? (b = x._events = /* @__PURE__ */ Object.create(null), x._eventsCount = 0) : (b.newListener !== void 0 && (x.emit("newListener", m, g.listener ? g.listener : g), b = x._events), I = b[m]), I === void 0)
                  I = b[m] = g, ++x._eventsCount;
                else if (typeof I == "function" ? I = b[m] = L ? [g, I] : [I, g] : L ? I.unshift(g) : I.push(g), R = o(x), R > 0 && I.length > R && !I.warned) {
                  I.warned = !0;
                  var U = new Error("Possible EventEmitter memory leak detected. " + I.length + " " + String(m) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                  U.name = "MaxListenersExceededWarning", U.emitter = x, U.type = m, U.count = I.length, h(U);
                }
                return x;
              }
              a.prototype.addListener = function(m, g) {
                return l(this, m, g, !1);
              }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(m, g) {
                return l(this, m, g, !0);
              };
              function s() {
                if (!this.fired)
                  return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
              }
              function t(x, m, g) {
                var L = { fired: !1, wrapFn: void 0, target: x, type: m, listener: g }, R = s.bind(L);
                return R.listener = g, L.wrapFn = R, R;
              }
              a.prototype.once = function(m, g) {
                return i(g), this.on(m, t(this, m, g)), this;
              }, a.prototype.prependOnceListener = function(m, g) {
                return i(g), this.prependListener(m, t(this, m, g)), this;
              }, a.prototype.removeListener = function(m, g) {
                var L, R, b, I, U;
                if (i(g), R = this._events, R === void 0)
                  return this;
                if (L = R[m], L === void 0)
                  return this;
                if (L === g || L.listener === g)
                  --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete R[m], R.removeListener && this.emit("removeListener", m, L.listener || g));
                else if (typeof L != "function") {
                  for (b = -1, I = L.length - 1; I >= 0; I--)
                    if (L[I] === g || L[I].listener === g) {
                      U = L[I].listener, b = I;
                      break;
                    }
                  if (b < 0)
                    return this;
                  b === 0 ? L.shift() : d(L, b), L.length === 1 && (R[m] = L[0]), R.removeListener !== void 0 && this.emit("removeListener", m, U || g);
                }
                return this;
              }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(m) {
                var g, L, R;
                if (L = this._events, L === void 0)
                  return this;
                if (L.removeListener === void 0)
                  return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : L[m] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete L[m]), this;
                if (arguments.length === 0) {
                  var b = Object.keys(L), I;
                  for (R = 0; R < b.length; ++R)
                    I = b[R], I !== "removeListener" && this.removeAllListeners(I);
                  return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
                }
                if (g = L[m], typeof g == "function")
                  this.removeListener(m, g);
                else if (g !== void 0)
                  for (R = g.length - 1; R >= 0; R--)
                    this.removeListener(m, g[R]);
                return this;
              };
              function n(x, m, g) {
                var L = x._events;
                if (L === void 0)
                  return [];
                var R = L[m];
                return R === void 0 ? [] : typeof R == "function" ? g ? [R.listener || R] : [R] : g ? _(R) : e(R, R.length);
              }
              a.prototype.listeners = function(m) {
                return n(this, m, !0);
              }, a.prototype.rawListeners = function(m) {
                return n(this, m, !1);
              }, a.listenerCount = function(x, m) {
                return typeof x.listenerCount == "function" ? x.listenerCount(m) : r.call(x, m);
              }, a.prototype.listenerCount = r;
              function r(x) {
                var m = this._events;
                if (m !== void 0) {
                  var g = m[x];
                  if (typeof g == "function")
                    return 1;
                  if (g !== void 0)
                    return g.length;
                }
                return 0;
              }
              a.prototype.eventNames = function() {
                return this._eventsCount > 0 ? E(this._events) : [];
              };
              function e(x, m) {
                for (var g = new Array(m), L = 0; L < m; ++L)
                  g[L] = x[L];
                return g;
              }
              function d(x, m) {
                for (; m + 1 < x.length; m++)
                  x[m] = x[m + 1];
                x.pop();
              }
              function _(x) {
                for (var m = new Array(x.length), g = 0; g < m.length; ++g)
                  m[g] = x[g].listener || x[g];
                return m;
              }
              function c(x, m) {
                return new Promise(function(g, L) {
                  function R(I) {
                    x.removeListener(m, b), L(I);
                  }
                  function b() {
                    typeof x.removeListener == "function" && x.removeListener("error", R), g([].slice.call(arguments));
                  }
                  y(x, m, b, { once: !0 }), m !== "error" && v(x, R, { once: !0 });
                });
              }
              function v(x, m, g) {
                typeof x.on == "function" && y(x, "error", m, g);
              }
              function y(x, m, g, L) {
                if (typeof x.on == "function")
                  L.once ? x.once(m, g) : x.on(m, g);
                else if (typeof x.addEventListener == "function")
                  x.addEventListener(m, function R(b) {
                    L.once && x.removeEventListener(m, R), g(b);
                  });
                else
                  throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof x);
              }
            }
          ),
          /***/
          "./node_modules/webworkify-webpack/index.js": (
            /*!**************************************************!*\
              !*** ./node_modules/webworkify-webpack/index.js ***!
              \**************************************************/
            /***/
            function(T, S, p) {
              function E(s) {
                var t = {};
                function n(e) {
                  if (t[e])
                    return t[e].exports;
                  var d = t[e] = {
                    /******/
                    i: e,
                    /******/
                    l: !1,
                    /******/
                    exports: {}
                    /******/
                  };
                  return s[e].call(d.exports, d, d.exports, n), d.l = !0, d.exports;
                }
                n.m = s, n.c = t, n.i = function(e) {
                  return e;
                }, n.d = function(e, d, _) {
                  n.o(e, d) || Object.defineProperty(e, d, {
                    /******/
                    configurable: !1,
                    /******/
                    enumerable: !0,
                    /******/
                    get: _
                    /******/
                  });
                }, n.r = function(e) {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                }, n.n = function(e) {
                  var d = e && e.__esModule ? (
                    /******/
                    function() {
                      return e.default;
                    }
                  ) : (
                    /******/
                    function() {
                      return e;
                    }
                  );
                  return n.d(d, "a", d), d;
                }, n.o = function(e, d) {
                  return Object.prototype.hasOwnProperty.call(e, d);
                }, n.p = "/", n.oe = function(e) {
                  throw console.error(e), e;
                };
                var r = n(n.s = ENTRY_MODULE);
                return r.default || r;
              }
              var h = "[\\.|\\-|\\+|\\w|/|@]+", u = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?(" + h + ").*?\\)";
              function a(s) {
                return (s + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
              }
              function f(s) {
                return !isNaN(1 * s);
              }
              function i(s, t, n) {
                var r = {};
                r[n] = [];
                var e = t.toString(), d = e.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
                if (!d)
                  return r;
                for (var _ = d[1], c = new RegExp("(\\\\n|\\W)" + a(_) + u, "g"), v; v = c.exec(e); )
                  v[3] !== "dll-reference" && r[n].push(v[3]);
                for (c = new RegExp("\\(" + a(_) + '\\("(dll-reference\\s(' + h + '))"\\)\\)' + u, "g"); v = c.exec(e); )
                  s[v[2]] || (r[n].push(v[1]), s[v[2]] = p(v[1]).m), r[v[2]] = r[v[2]] || [], r[v[2]].push(v[4]);
                for (var y = Object.keys(r), x = 0; x < y.length; x++)
                  for (var m = 0; m < r[y[x]].length; m++)
                    f(r[y[x]][m]) && (r[y[x]][m] = 1 * r[y[x]][m]);
                return r;
              }
              function o(s) {
                var t = Object.keys(s);
                return t.reduce(function(n, r) {
                  return n || s[r].length > 0;
                }, !1);
              }
              function l(s, t) {
                for (var n = {
                  main: [t]
                }, r = {
                  main: []
                }, e = {
                  main: {}
                }; o(n); )
                  for (var d = Object.keys(n), _ = 0; _ < d.length; _++) {
                    var c = d[_], v = n[c], y = v.pop();
                    if (e[c] = e[c] || {}, !(e[c][y] || !s[c][y])) {
                      e[c][y] = !0, r[c] = r[c] || [], r[c].push(y);
                      for (var x = i(s, s[c][y], c), m = Object.keys(x), g = 0; g < m.length; g++)
                        n[m[g]] = n[m[g]] || [], n[m[g]] = n[m[g]].concat(x[m[g]]);
                    }
                  }
                return r;
              }
              T.exports = function(s, t) {
                t = t || {};
                var n = {
                  main: p.m
                }, r = t.all ? { main: Object.keys(n.main) } : l(n, s), e = "";
                Object.keys(r).filter(function(y) {
                  return y !== "main";
                }).forEach(function(y) {
                  for (var x = 0; r[y][x]; )
                    x++;
                  r[y].push(x), n[y][x] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", e = e + "var " + y + " = (" + E.toString().replace("ENTRY_MODULE", JSON.stringify(x)) + ")({" + r[y].map(function(m) {
                    return "" + JSON.stringify(m) + ": " + n[y][m].toString();
                  }).join(",") + `});
`;
                }), e = e + "new ((" + E.toString().replace("ENTRY_MODULE", JSON.stringify(s)) + ")({" + r.main.map(function(y) {
                  return "" + JSON.stringify(y) + ": " + n.main[y].toString();
                }).join(",") + "}))(self);";
                var d = new window.Blob([e], { type: "text/javascript" });
                if (t.bare)
                  return d;
                var _ = window.URL || window.webkitURL || window.mozURL || window.msURL, c = _.createObjectURL(d), v = new window.Worker(c);
                return v.objectURL = c, v;
              };
            }
          ),
          /***/
          "./src/config.js": (
            /*!***********************!*\
              !*** ./src/config.js ***!
              \***********************/
            /***/
            function(T, S, p) {
              p.r(S), p.d(S, {
                /* harmony export */
                defaultConfig: function() {
                  return (
                    /* binding */
                    E
                  );
                },
                /* harmony export */
                createDefaultConfig: function() {
                  return (
                    /* binding */
                    h
                  );
                }
                /* harmony export */
              });
              var E = {
                enableWorker: !1,
                enableStashBuffer: !0,
                stashInitialSize: void 0,
                isLive: !1,
                lazyLoad: !0,
                lazyLoadMaxDuration: 3 * 60,
                lazyLoadRecoverDuration: 30,
                deferLoadAfterSourceOpen: !0,
                // autoCleanupSourceBuffer: default as false, leave unspecified
                autoCleanupMaxBackwardDuration: 3 * 60,
                autoCleanupMinBackwardDuration: 2 * 60,
                statisticsInfoReportInterval: 600,
                fixAudioTimestampGap: !0,
                accurateSeek: !1,
                seekType: "range",
                seekParamStart: "bstart",
                seekParamEnd: "bend",
                rangeLoadZeroStart: !1,
                customSeekHandler: void 0,
                reuseRedirectedURL: !1,
                // referrerPolicy: leave as unspecified
                headers: void 0,
                customLoader: void 0
              };
              function h() {
                return Object.assign({}, E);
              }
            }
          ),
          /***/
          "./src/core/features.js": (
            /*!******************************!*\
              !*** ./src/core/features.js ***!
              \******************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! ../io/io-controller.js */
                "./src/io/io-controller.js"
              ), h = p(
                /*! ../config.js */
                "./src/config.js"
              ), u = (
                /** @class */
                function() {
                  function a() {
                  }
                  return a.supportMSEH264Playback = function() {
                    return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
                  }, a.supportNetworkStreamIO = function() {
                    var f = new E.default({}, (0, h.createDefaultConfig)()), i = f.loaderType;
                    return f.destroy(), i == "fetch-stream-loader" || i == "xhr-moz-chunked-loader";
                  }, a.getNetworkLoaderTypeName = function() {
                    var f = new E.default({}, (0, h.createDefaultConfig)()), i = f.loaderType;
                    return f.destroy(), i;
                  }, a.supportNativeMediaPlayback = function(f) {
                    a.videoElement == null && (a.videoElement = window.document.createElement("video"));
                    var i = a.videoElement.canPlayType(f);
                    return i === "probably" || i == "maybe";
                  }, a.getFeatureList = function() {
                    var f = {
                      mseFlvPlayback: !1,
                      mseLiveFlvPlayback: !1,
                      networkStreamIO: !1,
                      networkLoaderName: "",
                      nativeMP4H264Playback: !1,
                      nativeWebmVP8Playback: !1,
                      nativeWebmVP9Playback: !1
                    };
                    return f.mseFlvPlayback = a.supportMSEH264Playback(), f.networkStreamIO = a.supportNetworkStreamIO(), f.networkLoaderName = a.getNetworkLoaderTypeName(), f.mseLiveFlvPlayback = f.mseFlvPlayback && f.networkStreamIO, f.nativeMP4H264Playback = a.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"'), f.nativeWebmVP8Playback = a.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"'), f.nativeWebmVP9Playback = a.supportNativeMediaPlayback('video/webm; codecs="vp9"'), f;
                  }, a;
                }()
              );
              S.default = u;
            }
          ),
          /***/
          "./src/core/media-info.js": (
            /*!********************************!*\
              !*** ./src/core/media-info.js ***!
              \********************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = (
                /** @class */
                function() {
                  function h() {
                    this.mimeType = null, this.duration = null, this.hasAudio = null, this.hasVideo = null, this.audioCodec = null, this.videoCodec = null, this.audioDataRate = null, this.videoDataRate = null, this.audioSampleRate = null, this.audioChannelCount = null, this.width = null, this.height = null, this.fps = null, this.profile = null, this.level = null, this.refFrames = null, this.chromaFormat = null, this.sarNum = null, this.sarDen = null, this.metadata = null, this.segments = null, this.segmentCount = null, this.hasKeyframesIndex = null, this.keyframesIndex = null;
                  }
                  return h.prototype.isComplete = function() {
                    var u = this.hasAudio === !1 || this.hasAudio === !0 && this.audioCodec != null && this.audioSampleRate != null && this.audioChannelCount != null, a = this.hasVideo === !1 || this.hasVideo === !0 && this.videoCodec != null && this.width != null && this.height != null && this.fps != null && this.profile != null && this.level != null && this.refFrames != null && this.chromaFormat != null && this.sarNum != null && this.sarDen != null;
                    return this.mimeType != null && this.duration != null && this.metadata != null && this.hasKeyframesIndex != null && u && a;
                  }, h.prototype.isSeekable = function() {
                    return this.hasKeyframesIndex === !0;
                  }, h.prototype.getNearestKeyframe = function(u) {
                    if (this.keyframesIndex == null)
                      return null;
                    var a = this.keyframesIndex, f = this._search(a.times, u);
                    return {
                      index: f,
                      milliseconds: a.times[f],
                      fileposition: a.filepositions[f]
                    };
                  }, h.prototype._search = function(u, a) {
                    var f = 0, i = u.length - 1, o = 0, l = 0, s = i;
                    for (a < u[0] && (f = 0, l = s + 1); l <= s; )
                      if (o = l + Math.floor((s - l) / 2), o === i || a >= u[o] && a < u[o + 1]) {
                        f = o;
                        break;
                      } else
                        u[o] < a ? l = o + 1 : s = o - 1;
                    return f;
                  }, h;
                }()
              );
              S.default = E;
            }
          ),
          /***/
          "./src/core/media-segment-info.js": (
            /*!****************************************!*\
              !*** ./src/core/media-segment-info.js ***!
              \****************************************/
            /***/
            function(T, S, p) {
              p.r(S), p.d(S, {
                /* harmony export */
                SampleInfo: function() {
                  return (
                    /* binding */
                    E
                  );
                },
                /* harmony export */
                MediaSegmentInfo: function() {
                  return (
                    /* binding */
                    h
                  );
                },
                /* harmony export */
                IDRSampleList: function() {
                  return (
                    /* binding */
                    u
                  );
                },
                /* harmony export */
                MediaSegmentInfoList: function() {
                  return (
                    /* binding */
                    a
                  );
                }
                /* harmony export */
              });
              var E = (
                /** @class */
                /* @__PURE__ */ function() {
                  function f(i, o, l, s, t) {
                    this.dts = i, this.pts = o, this.duration = l, this.originalDts = s, this.isSyncPoint = t, this.fileposition = null;
                  }
                  return f;
                }()
              ), h = (
                /** @class */
                function() {
                  function f() {
                    this.beginDts = 0, this.endDts = 0, this.beginPts = 0, this.endPts = 0, this.originalBeginDts = 0, this.originalEndDts = 0, this.syncPoints = [], this.firstSample = null, this.lastSample = null;
                  }
                  return f.prototype.appendSyncPoint = function(i) {
                    i.isSyncPoint = !0, this.syncPoints.push(i);
                  }, f;
                }()
              ), u = (
                /** @class */
                function() {
                  function f() {
                    this._list = [];
                  }
                  return f.prototype.clear = function() {
                    this._list = [];
                  }, f.prototype.appendArray = function(i) {
                    var o = this._list;
                    i.length !== 0 && (o.length > 0 && i[0].originalDts < o[o.length - 1].originalDts && this.clear(), Array.prototype.push.apply(o, i));
                  }, f.prototype.getLastSyncPointBeforeDts = function(i) {
                    if (this._list.length == 0)
                      return null;
                    var o = this._list, l = 0, s = o.length - 1, t = 0, n = 0, r = s;
                    for (i < o[0].dts && (l = 0, n = r + 1); n <= r; )
                      if (t = n + Math.floor((r - n) / 2), t === s || i >= o[t].dts && i < o[t + 1].dts) {
                        l = t;
                        break;
                      } else
                        o[t].dts < i ? n = t + 1 : r = t - 1;
                    return this._list[l];
                  }, f;
                }()
              ), a = (
                /** @class */
                function() {
                  function f(i) {
                    this._type = i, this._list = [], this._lastAppendLocation = -1;
                  }
                  return Object.defineProperty(f.prototype, "type", {
                    get: function() {
                      return this._type;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(f.prototype, "length", {
                    get: function() {
                      return this._list.length;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), f.prototype.isEmpty = function() {
                    return this._list.length === 0;
                  }, f.prototype.clear = function() {
                    this._list = [], this._lastAppendLocation = -1;
                  }, f.prototype._searchNearestSegmentBefore = function(i) {
                    var o = this._list;
                    if (o.length === 0)
                      return -2;
                    var l = o.length - 1, s = 0, t = 0, n = l, r = 0;
                    if (i < o[0].originalBeginDts)
                      return r = -1, r;
                    for (; t <= n; )
                      if (s = t + Math.floor((n - t) / 2), s === l || i > o[s].lastSample.originalDts && i < o[s + 1].originalBeginDts) {
                        r = s;
                        break;
                      } else
                        o[s].originalBeginDts < i ? t = s + 1 : n = s - 1;
                    return r;
                  }, f.prototype._searchNearestSegmentAfter = function(i) {
                    return this._searchNearestSegmentBefore(i) + 1;
                  }, f.prototype.append = function(i) {
                    var o = this._list, l = i, s = this._lastAppendLocation, t = 0;
                    s !== -1 && s < o.length && l.originalBeginDts >= o[s].lastSample.originalDts && (s === o.length - 1 || s < o.length - 1 && l.originalBeginDts < o[s + 1].originalBeginDts) ? t = s + 1 : o.length > 0 && (t = this._searchNearestSegmentBefore(l.originalBeginDts) + 1), this._lastAppendLocation = t, this._list.splice(t, 0, l);
                  }, f.prototype.getLastSegmentBefore = function(i) {
                    var o = this._searchNearestSegmentBefore(i);
                    return o >= 0 ? this._list[o] : null;
                  }, f.prototype.getLastSampleBefore = function(i) {
                    var o = this.getLastSegmentBefore(i);
                    return o != null ? o.lastSample : null;
                  }, f.prototype.getLastSyncPointBefore = function(i) {
                    for (var o = this._searchNearestSegmentBefore(i), l = this._list[o].syncPoints; l.length === 0 && o > 0; )
                      o--, l = this._list[o].syncPoints;
                    return l.length > 0 ? l[l.length - 1] : null;
                  }, f;
                }()
              );
            }
          ),
          /***/
          "./src/core/mse-controller.js": (
            /*!************************************!*\
              !*** ./src/core/mse-controller.js ***!
              \************************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! events */
                "./node_modules/events/events.js"
              ), h = /* @__PURE__ */ p.n(E), u = p(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), a = p(
                /*! ../utils/browser.js */
                "./src/utils/browser.js"
              ), f = p(
                /*! ./mse-events.js */
                "./src/core/mse-events.js"
              ), i = p(
                /*! ./media-segment-info.js */
                "./src/core/media-segment-info.js"
              ), o = p(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), l = (
                /** @class */
                function() {
                  function s(t) {
                    this.TAG = "MSEController", this._config = t, this._emitter = new (h())(), this._config.isLive && this._config.autoCleanupSourceBuffer == null && (this._config.autoCleanupSourceBuffer = !0), this.e = {
                      onSourceOpen: this._onSourceOpen.bind(this),
                      onSourceEnded: this._onSourceEnded.bind(this),
                      onSourceClose: this._onSourceClose.bind(this),
                      onSourceBufferError: this._onSourceBufferError.bind(this),
                      onSourceBufferUpdateEnd: this._onSourceBufferUpdateEnd.bind(this)
                    }, this._mediaSource = null, this._mediaSourceObjectURL = null, this._mediaElement = null, this._isBufferFull = !1, this._hasPendingEos = !1, this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0, this._pendingSourceBufferInit = [], this._mimeTypes = {
                      video: null,
                      audio: null
                    }, this._sourceBuffers = {
                      video: null,
                      audio: null
                    }, this._lastInitSegments = {
                      video: null,
                      audio: null
                    }, this._pendingSegments = {
                      video: [],
                      audio: []
                    }, this._pendingRemoveRanges = {
                      video: [],
                      audio: []
                    }, this._idrList = new i.IDRSampleList();
                  }
                  return s.prototype.destroy = function() {
                    (this._mediaElement || this._mediaSource) && this.detachMediaElement(), this.e = null, this._emitter.removeAllListeners(), this._emitter = null;
                  }, s.prototype.on = function(t, n) {
                    this._emitter.addListener(t, n);
                  }, s.prototype.off = function(t, n) {
                    this._emitter.removeListener(t, n);
                  }, s.prototype.attachMediaElement = function(t) {
                    if (this._mediaSource)
                      throw new o.IllegalStateException("MediaSource has been attached to an HTMLMediaElement!");
                    var n = this._mediaSource = new window.MediaSource();
                    n.addEventListener("sourceopen", this.e.onSourceOpen), n.addEventListener("sourceended", this.e.onSourceEnded), n.addEventListener("sourceclose", this.e.onSourceClose), this._mediaElement = t, this._mediaSourceObjectURL = window.URL.createObjectURL(this._mediaSource), t.src = this._mediaSourceObjectURL;
                  }, s.prototype.detachMediaElement = function() {
                    if (this._mediaSource) {
                      var t = this._mediaSource;
                      for (var n in this._sourceBuffers) {
                        var r = this._pendingSegments[n];
                        r.splice(0, r.length), this._pendingSegments[n] = null, this._pendingRemoveRanges[n] = null, this._lastInitSegments[n] = null;
                        var e = this._sourceBuffers[n];
                        if (e) {
                          if (t.readyState !== "closed") {
                            try {
                              t.removeSourceBuffer(e);
                            } catch (d) {
                              u.default.e(this.TAG, d.message);
                            }
                            e.removeEventListener("error", this.e.onSourceBufferError), e.removeEventListener("updateend", this.e.onSourceBufferUpdateEnd);
                          }
                          this._mimeTypes[n] = null, this._sourceBuffers[n] = null;
                        }
                      }
                      if (t.readyState === "open")
                        try {
                          t.endOfStream();
                        } catch (d) {
                          u.default.e(this.TAG, d.message);
                        }
                      t.removeEventListener("sourceopen", this.e.onSourceOpen), t.removeEventListener("sourceended", this.e.onSourceEnded), t.removeEventListener("sourceclose", this.e.onSourceClose), this._pendingSourceBufferInit = [], this._isBufferFull = !1, this._idrList.clear(), this._mediaSource = null;
                    }
                    this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement = null), this._mediaSourceObjectURL && (window.URL.revokeObjectURL(this._mediaSourceObjectURL), this._mediaSourceObjectURL = null);
                  }, s.prototype.appendInitSegment = function(t, n) {
                    if (!this._mediaSource || this._mediaSource.readyState !== "open") {
                      this._pendingSourceBufferInit.push(t), this._pendingSegments[t.type].push(t);
                      return;
                    }
                    var r = t, e = "" + r.container;
                    r.codec && r.codec.length > 0 && (e += ";codecs=" + r.codec);
                    var d = !1;
                    if (u.default.v(this.TAG, "Received Initialization Segment, mimeType: " + e), this._lastInitSegments[r.type] = r, e !== this._mimeTypes[r.type]) {
                      if (this._mimeTypes[r.type])
                        u.default.v(this.TAG, "Notice: " + r.type + " mimeType changed, origin: " + this._mimeTypes[r.type] + ", target: " + e);
                      else {
                        d = !0;
                        try {
                          var _ = this._sourceBuffers[r.type] = this._mediaSource.addSourceBuffer(e);
                          _.addEventListener("error", this.e.onSourceBufferError), _.addEventListener("updateend", this.e.onSourceBufferUpdateEnd);
                        } catch (c) {
                          u.default.e(this.TAG, c.message), this._emitter.emit(f.default.ERROR, { code: c.code, msg: c.message });
                          return;
                        }
                      }
                      this._mimeTypes[r.type] = e;
                    }
                    n || this._pendingSegments[r.type].push(r), d || this._sourceBuffers[r.type] && !this._sourceBuffers[r.type].updating && this._doAppendSegments(), a.default.safari && r.container === "audio/mpeg" && r.mediaDuration > 0 && (this._requireSetMediaDuration = !0, this._pendingMediaDuration = r.mediaDuration / 1e3, this._updateMediaSourceDuration());
                  }, s.prototype.appendMediaSegment = function(t) {
                    var n = t;
                    this._pendingSegments[n.type].push(n), this._config.autoCleanupSourceBuffer && this._needCleanupSourceBuffer() && this._doCleanupSourceBuffer();
                    var r = this._sourceBuffers[n.type];
                    r && !r.updating && !this._hasPendingRemoveRanges() && this._doAppendSegments();
                  }, s.prototype.seek = function(t) {
                    for (var n in this._sourceBuffers)
                      if (this._sourceBuffers[n]) {
                        var r = this._sourceBuffers[n];
                        if (this._mediaSource.readyState === "open")
                          try {
                            r.abort();
                          } catch (y) {
                            u.default.e(this.TAG, y.message);
                          }
                        this._idrList.clear();
                        var e = this._pendingSegments[n];
                        if (e.splice(0, e.length), this._mediaSource.readyState !== "closed") {
                          for (var d = 0; d < r.buffered.length; d++) {
                            var _ = r.buffered.start(d), c = r.buffered.end(d);
                            this._pendingRemoveRanges[n].push({ start: _, end: c });
                          }
                          if (r.updating || this._doRemoveRanges(), a.default.safari) {
                            var v = this._lastInitSegments[n];
                            v && (this._pendingSegments[n].push(v), r.updating || this._doAppendSegments());
                          }
                        }
                      }
                  }, s.prototype.endOfStream = function() {
                    var t = this._mediaSource, n = this._sourceBuffers;
                    if (!t || t.readyState !== "open") {
                      t && t.readyState === "closed" && this._hasPendingSegments() && (this._hasPendingEos = !0);
                      return;
                    }
                    n.video && n.video.updating || n.audio && n.audio.updating ? this._hasPendingEos = !0 : (this._hasPendingEos = !1, t.endOfStream());
                  }, s.prototype.getNearestKeyframe = function(t) {
                    return this._idrList.getLastSyncPointBeforeDts(t);
                  }, s.prototype._needCleanupSourceBuffer = function() {
                    if (!this._config.autoCleanupSourceBuffer)
                      return !1;
                    var t = this._mediaElement.currentTime;
                    for (var n in this._sourceBuffers) {
                      var r = this._sourceBuffers[n];
                      if (r) {
                        var e = r.buffered;
                        if (e.length >= 1 && t - e.start(0) >= this._config.autoCleanupMaxBackwardDuration)
                          return !0;
                      }
                    }
                    return !1;
                  }, s.prototype._doCleanupSourceBuffer = function() {
                    var t = this._mediaElement.currentTime;
                    for (var n in this._sourceBuffers) {
                      var r = this._sourceBuffers[n];
                      if (r) {
                        for (var e = r.buffered, d = !1, _ = 0; _ < e.length; _++) {
                          var c = e.start(_), v = e.end(_);
                          if (c <= t && t < v + 3) {
                            if (t - c >= this._config.autoCleanupMaxBackwardDuration) {
                              d = !0;
                              var y = t - this._config.autoCleanupMinBackwardDuration;
                              this._pendingRemoveRanges[n].push({ start: c, end: y });
                            }
                          } else
                            v < t && (d = !0, this._pendingRemoveRanges[n].push({ start: c, end: v }));
                        }
                        d && !r.updating && this._doRemoveRanges();
                      }
                    }
                  }, s.prototype._updateMediaSourceDuration = function() {
                    var t = this._sourceBuffers;
                    if (!(this._mediaElement.readyState === 0 || this._mediaSource.readyState !== "open") && !(t.video && t.video.updating || t.audio && t.audio.updating)) {
                      var n = this._mediaSource.duration, r = this._pendingMediaDuration;
                      r > 0 && (isNaN(n) || r > n) && (u.default.v(this.TAG, "Update MediaSource duration from " + n + " to " + r), this._mediaSource.duration = r), this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0;
                    }
                  }, s.prototype._doRemoveRanges = function() {
                    for (var t in this._pendingRemoveRanges)
                      if (!(!this._sourceBuffers[t] || this._sourceBuffers[t].updating))
                        for (var n = this._sourceBuffers[t], r = this._pendingRemoveRanges[t]; r.length && !n.updating; ) {
                          var e = r.shift();
                          n.remove(e.start, e.end);
                        }
                  }, s.prototype._doAppendSegments = function() {
                    var t = this._pendingSegments;
                    for (var n in t)
                      if (!(!this._sourceBuffers[n] || this._sourceBuffers[n].updating) && t[n].length > 0) {
                        var r = t[n].shift();
                        if (r.timestampOffset) {
                          var e = this._sourceBuffers[n].timestampOffset, d = r.timestampOffset / 1e3, _ = Math.abs(e - d);
                          _ > 0.1 && (u.default.v(this.TAG, "Update MPEG audio timestampOffset from " + e + " to " + d), this._sourceBuffers[n].timestampOffset = d), delete r.timestampOffset;
                        }
                        if (!r.data || r.data.byteLength === 0)
                          continue;
                        try {
                          this._sourceBuffers[n].appendBuffer(r.data), this._isBufferFull = !1, n === "video" && r.hasOwnProperty("info") && this._idrList.appendArray(r.info.syncPoints);
                        } catch (c) {
                          this._pendingSegments[n].unshift(r), c.code === 22 ? (this._isBufferFull || this._emitter.emit(f.default.BUFFER_FULL), this._isBufferFull = !0) : (u.default.e(this.TAG, c.message), this._emitter.emit(f.default.ERROR, { code: c.code, msg: c.message }));
                        }
                      }
                  }, s.prototype._onSourceOpen = function() {
                    if (u.default.v(this.TAG, "MediaSource onSourceOpen"), this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._pendingSourceBufferInit.length > 0)
                      for (var t = this._pendingSourceBufferInit; t.length; ) {
                        var n = t.shift();
                        this.appendInitSegment(n, !0);
                      }
                    this._hasPendingSegments() && this._doAppendSegments(), this._emitter.emit(f.default.SOURCE_OPEN);
                  }, s.prototype._onSourceEnded = function() {
                    u.default.v(this.TAG, "MediaSource onSourceEnded");
                  }, s.prototype._onSourceClose = function() {
                    u.default.v(this.TAG, "MediaSource onSourceClose"), this._mediaSource && this.e != null && (this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._mediaSource.removeEventListener("sourceended", this.e.onSourceEnded), this._mediaSource.removeEventListener("sourceclose", this.e.onSourceClose));
                  }, s.prototype._hasPendingSegments = function() {
                    var t = this._pendingSegments;
                    return t.video.length > 0 || t.audio.length > 0;
                  }, s.prototype._hasPendingRemoveRanges = function() {
                    var t = this._pendingRemoveRanges;
                    return t.video.length > 0 || t.audio.length > 0;
                  }, s.prototype._onSourceBufferUpdateEnd = function() {
                    this._requireSetMediaDuration ? this._updateMediaSourceDuration() : this._hasPendingRemoveRanges() ? this._doRemoveRanges() : this._hasPendingSegments() ? this._doAppendSegments() : this._hasPendingEos && this.endOfStream(), this._emitter.emit(f.default.UPDATE_END);
                  }, s.prototype._onSourceBufferError = function(t) {
                    u.default.e(this.TAG, "SourceBuffer Error: " + t);
                  }, s;
                }()
              );
              S.default = l;
            }
          ),
          /***/
          "./src/core/mse-events.js": (
            /*!********************************!*\
              !*** ./src/core/mse-events.js ***!
              \********************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = {
                ERROR: "error",
                SOURCE_OPEN: "source_open",
                UPDATE_END: "update_end",
                BUFFER_FULL: "buffer_full"
              };
              S.default = E;
            }
          ),
          /***/
          "./src/core/transmuxer.js": (
            /*!********************************!*\
              !*** ./src/core/transmuxer.js ***!
              \********************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! events */
                "./node_modules/events/events.js"
              ), h = /* @__PURE__ */ p.n(E), u = p(
                /*! webworkify-webpack */
                "./node_modules/webworkify-webpack/index.js"
              ), a = /* @__PURE__ */ p.n(u), f = p(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), i = p(
                /*! ../utils/logging-control.js */
                "./src/utils/logging-control.js"
              ), o = p(
                /*! ./transmuxing-controller.js */
                "./src/core/transmuxing-controller.js"
              ), l = p(
                /*! ./transmuxing-events.js */
                "./src/core/transmuxing-events.js"
              ), s = p(
                /*! ./media-info.js */
                "./src/core/media-info.js"
              ), t = (
                /** @class */
                function() {
                  function n(r, e) {
                    if (this.TAG = "Transmuxer", this._emitter = new (h())(), e.enableWorker && typeof Worker < "u")
                      try {
                        this._worker = a()(
                          /*require.resolve*/
                          /*! ./transmuxing-worker */
                          "./src/core/transmuxing-worker.js"
                        ), this._workerDestroying = !1, this._worker.addEventListener("message", this._onWorkerMessage.bind(this)), this._worker.postMessage({ cmd: "init", param: [r, e] }), this.e = {
                          onLoggingConfigChanged: this._onLoggingConfigChanged.bind(this)
                        }, i.default.registerListener(this.e.onLoggingConfigChanged), this._worker.postMessage({ cmd: "logging_config", param: i.default.getConfig() });
                      } catch {
                        f.default.e(this.TAG, "Error while initialize transmuxing worker, fallback to inline transmuxing"), this._worker = null, this._controller = new o.default(r, e);
                      }
                    else
                      this._controller = new o.default(r, e);
                    if (this._controller) {
                      var d = this._controller;
                      d.on(l.default.IO_ERROR, this._onIOError.bind(this)), d.on(l.default.DEMUX_ERROR, this._onDemuxError.bind(this)), d.on(l.default.INIT_SEGMENT, this._onInitSegment.bind(this)), d.on(l.default.MEDIA_SEGMENT, this._onMediaSegment.bind(this)), d.on(l.default.LOADING_COMPLETE, this._onLoadingComplete.bind(this)), d.on(l.default.RECOVERED_EARLY_EOF, this._onRecoveredEarlyEof.bind(this)), d.on(l.default.MEDIA_INFO, this._onMediaInfo.bind(this)), d.on(l.default.METADATA_ARRIVED, this._onMetaDataArrived.bind(this)), d.on(l.default.SCRIPTDATA_ARRIVED, this._onScriptDataArrived.bind(this)), d.on(l.default.STATISTICS_INFO, this._onStatisticsInfo.bind(this)), d.on(l.default.RECOMMEND_SEEKPOINT, this._onRecommendSeekpoint.bind(this));
                    }
                  }
                  return n.prototype.destroy = function() {
                    this._worker ? this._workerDestroying || (this._workerDestroying = !0, this._worker.postMessage({ cmd: "destroy" }), i.default.removeListener(this.e.onLoggingConfigChanged), this.e = null) : (this._controller.destroy(), this._controller = null), this._emitter.removeAllListeners(), this._emitter = null;
                  }, n.prototype.on = function(r, e) {
                    this._emitter.addListener(r, e);
                  }, n.prototype.off = function(r, e) {
                    this._emitter.removeListener(r, e);
                  }, n.prototype.hasWorker = function() {
                    return this._worker != null;
                  }, n.prototype.open = function() {
                    this._worker ? this._worker.postMessage({ cmd: "start" }) : this._controller.start();
                  }, n.prototype.close = function() {
                    this._worker ? this._worker.postMessage({ cmd: "stop" }) : this._controller.stop();
                  }, n.prototype.seek = function(r) {
                    this._worker ? this._worker.postMessage({ cmd: "seek", param: r }) : this._controller.seek(r);
                  }, n.prototype.pause = function() {
                    this._worker ? this._worker.postMessage({ cmd: "pause" }) : this._controller.pause();
                  }, n.prototype.resume = function() {
                    this._worker ? this._worker.postMessage({ cmd: "resume" }) : this._controller.resume();
                  }, n.prototype._onInitSegment = function(r, e) {
                    var d = this;
                    Promise.resolve().then(function() {
                      d._emitter.emit(l.default.INIT_SEGMENT, r, e);
                    });
                  }, n.prototype._onMediaSegment = function(r, e) {
                    var d = this;
                    Promise.resolve().then(function() {
                      d._emitter.emit(l.default.MEDIA_SEGMENT, r, e);
                    });
                  }, n.prototype._onLoadingComplete = function() {
                    var r = this;
                    Promise.resolve().then(function() {
                      r._emitter.emit(l.default.LOADING_COMPLETE);
                    });
                  }, n.prototype._onRecoveredEarlyEof = function() {
                    var r = this;
                    Promise.resolve().then(function() {
                      r._emitter.emit(l.default.RECOVERED_EARLY_EOF);
                    });
                  }, n.prototype._onMediaInfo = function(r) {
                    var e = this;
                    Promise.resolve().then(function() {
                      e._emitter.emit(l.default.MEDIA_INFO, r);
                    });
                  }, n.prototype._onMetaDataArrived = function(r) {
                    var e = this;
                    Promise.resolve().then(function() {
                      e._emitter.emit(l.default.METADATA_ARRIVED, r);
                    });
                  }, n.prototype._onScriptDataArrived = function(r) {
                    var e = this;
                    Promise.resolve().then(function() {
                      e._emitter.emit(l.default.SCRIPTDATA_ARRIVED, r);
                    });
                  }, n.prototype._onStatisticsInfo = function(r) {
                    var e = this;
                    Promise.resolve().then(function() {
                      e._emitter.emit(l.default.STATISTICS_INFO, r);
                    });
                  }, n.prototype._onIOError = function(r, e) {
                    var d = this;
                    Promise.resolve().then(function() {
                      d._emitter.emit(l.default.IO_ERROR, r, e);
                    });
                  }, n.prototype._onDemuxError = function(r, e) {
                    var d = this;
                    Promise.resolve().then(function() {
                      d._emitter.emit(l.default.DEMUX_ERROR, r, e);
                    });
                  }, n.prototype._onRecommendSeekpoint = function(r) {
                    var e = this;
                    Promise.resolve().then(function() {
                      e._emitter.emit(l.default.RECOMMEND_SEEKPOINT, r);
                    });
                  }, n.prototype._onLoggingConfigChanged = function(r) {
                    this._worker && this._worker.postMessage({ cmd: "logging_config", param: r });
                  }, n.prototype._onWorkerMessage = function(r) {
                    var e = r.data, d = e.data;
                    if (e.msg === "destroyed" || this._workerDestroying) {
                      this._workerDestroying = !1, this._worker.terminate(), this._worker = null;
                      return;
                    }
                    switch (e.msg) {
                      case l.default.INIT_SEGMENT:
                      case l.default.MEDIA_SEGMENT:
                        this._emitter.emit(e.msg, d.type, d.data);
                        break;
                      case l.default.LOADING_COMPLETE:
                      case l.default.RECOVERED_EARLY_EOF:
                        this._emitter.emit(e.msg);
                        break;
                      case l.default.MEDIA_INFO:
                        Object.setPrototypeOf(d, s.default.prototype), this._emitter.emit(e.msg, d);
                        break;
                      case l.default.METADATA_ARRIVED:
                      case l.default.SCRIPTDATA_ARRIVED:
                      case l.default.STATISTICS_INFO:
                        this._emitter.emit(e.msg, d);
                        break;
                      case l.default.IO_ERROR:
                      case l.default.DEMUX_ERROR:
                        this._emitter.emit(e.msg, d.type, d.info);
                        break;
                      case l.default.RECOMMEND_SEEKPOINT:
                        this._emitter.emit(e.msg, d);
                        break;
                      case "logcat_callback":
                        f.default.emitter.emit("log", d.type, d.logcat);
                        break;
                    }
                  }, n;
                }()
              );
              S.default = t;
            }
          ),
          /***/
          "./src/core/transmuxing-controller.js": (
            /*!********************************************!*\
              !*** ./src/core/transmuxing-controller.js ***!
              \********************************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! events */
                "./node_modules/events/events.js"
              ), h = /* @__PURE__ */ p.n(E), u = p(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), a = p(
                /*! ../utils/browser.js */
                "./src/utils/browser.js"
              ), f = p(
                /*! ./media-info.js */
                "./src/core/media-info.js"
              ), i = p(
                /*! ../demux/flv-demuxer.js */
                "./src/demux/flv-demuxer.js"
              ), o = p(
                /*! ../remux/mp4-remuxer.js */
                "./src/remux/mp4-remuxer.js"
              ), l = p(
                /*! ../demux/demux-errors.js */
                "./src/demux/demux-errors.js"
              ), s = p(
                /*! ../io/io-controller.js */
                "./src/io/io-controller.js"
              ), t = p(
                /*! ./transmuxing-events.js */
                "./src/core/transmuxing-events.js"
              ), n = (
                /** @class */
                function() {
                  function r(e, d) {
                    this.TAG = "TransmuxingController", this._emitter = new (h())(), this._config = d, e.segments || (e.segments = [{
                      duration: e.duration,
                      filesize: e.filesize,
                      url: e.url
                    }]), typeof e.cors != "boolean" && (e.cors = !0), typeof e.withCredentials != "boolean" && (e.withCredentials = !1), this._mediaDataSource = e, this._currentSegmentIndex = 0;
                    var _ = 0;
                    this._mediaDataSource.segments.forEach(function(c) {
                      c.timestampBase = _, _ += c.duration, c.cors = e.cors, c.withCredentials = e.withCredentials, d.referrerPolicy && (c.referrerPolicy = d.referrerPolicy);
                    }), !isNaN(_) && this._mediaDataSource.duration !== _ && (this._mediaDataSource.duration = _), this._mediaInfo = null, this._demuxer = null, this._remuxer = null, this._ioctl = null, this._pendingSeekTime = null, this._pendingResolveSeekPoint = null, this._statisticsReporter = null;
                  }
                  return r.prototype.destroy = function() {
                    this._mediaInfo = null, this._mediaDataSource = null, this._statisticsReporter && this._disableStatisticsReporter(), this._ioctl && (this._ioctl.destroy(), this._ioctl = null), this._demuxer && (this._demuxer.destroy(), this._demuxer = null), this._remuxer && (this._remuxer.destroy(), this._remuxer = null), this._emitter.removeAllListeners(), this._emitter = null;
                  }, r.prototype.on = function(e, d) {
                    this._emitter.addListener(e, d);
                  }, r.prototype.off = function(e, d) {
                    this._emitter.removeListener(e, d);
                  }, r.prototype.start = function() {
                    this._loadSegment(0), this._enableStatisticsReporter();
                  }, r.prototype._loadSegment = function(e, d) {
                    this._currentSegmentIndex = e;
                    var _ = this._mediaDataSource.segments[e], c = this._ioctl = new s.default(_, this._config, e);
                    c.onError = this._onIOException.bind(this), c.onSeeked = this._onIOSeeked.bind(this), c.onComplete = this._onIOComplete.bind(this), c.onRedirect = this._onIORedirect.bind(this), c.onRecoveredEarlyEof = this._onIORecoveredEarlyEof.bind(this), d ? this._demuxer.bindDataSource(this._ioctl) : c.onDataArrival = this._onInitChunkArrival.bind(this), c.open(d);
                  }, r.prototype.stop = function() {
                    this._internalAbort(), this._disableStatisticsReporter();
                  }, r.prototype._internalAbort = function() {
                    this._ioctl && (this._ioctl.destroy(), this._ioctl = null);
                  }, r.prototype.pause = function() {
                    this._ioctl && this._ioctl.isWorking() && (this._ioctl.pause(), this._disableStatisticsReporter());
                  }, r.prototype.resume = function() {
                    this._ioctl && this._ioctl.isPaused() && (this._ioctl.resume(), this._enableStatisticsReporter());
                  }, r.prototype.seek = function(e) {
                    if (!(this._mediaInfo == null || !this._mediaInfo.isSeekable())) {
                      var d = this._searchSegmentIndexContains(e);
                      if (d === this._currentSegmentIndex) {
                        var _ = this._mediaInfo.segments[d];
                        if (_ == null)
                          this._pendingSeekTime = e;
                        else {
                          var c = _.getNearestKeyframe(e);
                          this._remuxer.seek(c.milliseconds), this._ioctl.seek(c.fileposition), this._pendingResolveSeekPoint = c.milliseconds;
                        }
                      } else {
                        var v = this._mediaInfo.segments[d];
                        if (v == null)
                          this._pendingSeekTime = e, this._internalAbort(), this._remuxer.seek(), this._remuxer.insertDiscontinuity(), this._loadSegment(d);
                        else {
                          var c = v.getNearestKeyframe(e);
                          this._internalAbort(), this._remuxer.seek(e), this._remuxer.insertDiscontinuity(), this._demuxer.resetMediaInfo(), this._demuxer.timestampBase = this._mediaDataSource.segments[d].timestampBase, this._loadSegment(d, c.fileposition), this._pendingResolveSeekPoint = c.milliseconds, this._reportSegmentMediaInfo(d);
                        }
                      }
                      this._enableStatisticsReporter();
                    }
                  }, r.prototype._searchSegmentIndexContains = function(e) {
                    for (var d = this._mediaDataSource.segments, _ = d.length - 1, c = 0; c < d.length; c++)
                      if (e < d[c].timestampBase) {
                        _ = c - 1;
                        break;
                      }
                    return _;
                  }, r.prototype._onInitChunkArrival = function(e, d) {
                    var _ = this, c = null, v = 0;
                    if (d > 0)
                      this._demuxer.bindDataSource(this._ioctl), this._demuxer.timestampBase = this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase, v = this._demuxer.parseChunks(e, d);
                    else if ((c = i.default.probe(e)).match) {
                      this._demuxer = new i.default(c, this._config), this._remuxer || (this._remuxer = new o.default(this._config));
                      var y = this._mediaDataSource;
                      y.duration != null && !isNaN(y.duration) && (this._demuxer.overridedDuration = y.duration), typeof y.hasAudio == "boolean" && (this._demuxer.overridedHasAudio = y.hasAudio), typeof y.hasVideo == "boolean" && (this._demuxer.overridedHasVideo = y.hasVideo), this._demuxer.timestampBase = y.segments[this._currentSegmentIndex].timestampBase, this._demuxer.onError = this._onDemuxException.bind(this), this._demuxer.onMediaInfo = this._onMediaInfo.bind(this), this._demuxer.onMetaDataArrived = this._onMetaDataArrived.bind(this), this._demuxer.onScriptDataArrived = this._onScriptDataArrived.bind(this), this._remuxer.bindDataSource(this._demuxer.bindDataSource(this._ioctl)), this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this), this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this), v = this._demuxer.parseChunks(e, d);
                    } else
                      c = null, u.default.e(this.TAG, "Non-FLV, Unsupported media type!"), Promise.resolve().then(function() {
                        _._internalAbort();
                      }), this._emitter.emit(t.default.DEMUX_ERROR, l.default.FORMAT_UNSUPPORTED, "Non-FLV, Unsupported media type"), v = 0;
                    return v;
                  }, r.prototype._onMediaInfo = function(e) {
                    var d = this;
                    this._mediaInfo == null && (this._mediaInfo = Object.assign({}, e), this._mediaInfo.keyframesIndex = null, this._mediaInfo.segments = [], this._mediaInfo.segmentCount = this._mediaDataSource.segments.length, Object.setPrototypeOf(this._mediaInfo, f.default.prototype));
                    var _ = Object.assign({}, e);
                    Object.setPrototypeOf(_, f.default.prototype), this._mediaInfo.segments[this._currentSegmentIndex] = _, this._reportSegmentMediaInfo(this._currentSegmentIndex), this._pendingSeekTime != null && Promise.resolve().then(function() {
                      var c = d._pendingSeekTime;
                      d._pendingSeekTime = null, d.seek(c);
                    });
                  }, r.prototype._onMetaDataArrived = function(e) {
                    this._emitter.emit(t.default.METADATA_ARRIVED, e);
                  }, r.prototype._onScriptDataArrived = function(e) {
                    this._emitter.emit(t.default.SCRIPTDATA_ARRIVED, e);
                  }, r.prototype._onIOSeeked = function() {
                    this._remuxer.insertDiscontinuity();
                  }, r.prototype._onIOComplete = function(e) {
                    var d = e, _ = d + 1;
                    _ < this._mediaDataSource.segments.length ? (this._internalAbort(), this._remuxer.flushStashedSamples(), this._loadSegment(_)) : (this._remuxer.flushStashedSamples(), this._emitter.emit(t.default.LOADING_COMPLETE), this._disableStatisticsReporter());
                  }, r.prototype._onIORedirect = function(e) {
                    var d = this._ioctl.extraData;
                    this._mediaDataSource.segments[d].redirectedURL = e;
                  }, r.prototype._onIORecoveredEarlyEof = function() {
                    this._emitter.emit(t.default.RECOVERED_EARLY_EOF);
                  }, r.prototype._onIOException = function(e, d) {
                    u.default.e(this.TAG, "IOException: type = " + e + ", code = " + d.code + ", msg = " + d.msg), this._emitter.emit(t.default.IO_ERROR, e, d), this._disableStatisticsReporter();
                  }, r.prototype._onDemuxException = function(e, d) {
                    u.default.e(this.TAG, "DemuxException: type = " + e + ", info = " + d), this._emitter.emit(t.default.DEMUX_ERROR, e, d);
                  }, r.prototype._onRemuxerInitSegmentArrival = function(e, d) {
                    this._emitter.emit(t.default.INIT_SEGMENT, e, d);
                  }, r.prototype._onRemuxerMediaSegmentArrival = function(e, d) {
                    if (this._pendingSeekTime == null && (this._emitter.emit(t.default.MEDIA_SEGMENT, e, d), this._pendingResolveSeekPoint != null && e === "video")) {
                      var _ = d.info.syncPoints, c = this._pendingResolveSeekPoint;
                      this._pendingResolveSeekPoint = null, a.default.safari && _.length > 0 && _[0].originalDts === c && (c = _[0].pts), this._emitter.emit(t.default.RECOMMEND_SEEKPOINT, c);
                    }
                  }, r.prototype._enableStatisticsReporter = function() {
                    this._statisticsReporter == null && (this._statisticsReporter = self.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval));
                  }, r.prototype._disableStatisticsReporter = function() {
                    this._statisticsReporter && (self.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
                  }, r.prototype._reportSegmentMediaInfo = function(e) {
                    var d = this._mediaInfo.segments[e], _ = Object.assign({}, d);
                    _.duration = this._mediaInfo.duration, _.segmentCount = this._mediaInfo.segmentCount, delete _.segments, delete _.keyframesIndex, this._emitter.emit(t.default.MEDIA_INFO, _);
                  }, r.prototype._reportStatisticsInfo = function() {
                    var e = {};
                    e.url = this._ioctl.currentURL, e.hasRedirect = this._ioctl.hasRedirect, e.hasRedirect && (e.redirectedURL = this._ioctl.currentRedirectedURL), e.speed = this._ioctl.currentSpeed, e.loaderType = this._ioctl.loaderType, e.currentSegmentIndex = this._currentSegmentIndex, e.totalSegmentCount = this._mediaDataSource.segments.length, this._emitter.emit(t.default.STATISTICS_INFO, e);
                  }, r;
                }()
              );
              S.default = n;
            }
          ),
          /***/
          "./src/core/transmuxing-events.js": (
            /*!****************************************!*\
              !*** ./src/core/transmuxing-events.js ***!
              \****************************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = {
                IO_ERROR: "io_error",
                DEMUX_ERROR: "demux_error",
                INIT_SEGMENT: "init_segment",
                MEDIA_SEGMENT: "media_segment",
                LOADING_COMPLETE: "loading_complete",
                RECOVERED_EARLY_EOF: "recovered_early_eof",
                MEDIA_INFO: "media_info",
                METADATA_ARRIVED: "metadata_arrived",
                SCRIPTDATA_ARRIVED: "scriptdata_arrived",
                STATISTICS_INFO: "statistics_info",
                RECOMMEND_SEEKPOINT: "recommend_seekpoint"
              };
              S.default = E;
            }
          ),
          /***/
          "./src/core/transmuxing-worker.js": (
            /*!****************************************!*\
              !*** ./src/core/transmuxing-worker.js ***!
              \****************************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! ../utils/logging-control.js */
                "./src/utils/logging-control.js"
              ), h = p(
                /*! ../utils/polyfill.js */
                "./src/utils/polyfill.js"
              ), u = p(
                /*! ./transmuxing-controller.js */
                "./src/core/transmuxing-controller.js"
              ), a = p(
                /*! ./transmuxing-events.js */
                "./src/core/transmuxing-events.js"
              ), f = function(i) {
                var o = null, l = m.bind(this);
                h.default.install(), i.addEventListener("message", function(g) {
                  switch (g.data.cmd) {
                    case "init":
                      o = new u.default(g.data.param[0], g.data.param[1]), o.on(a.default.IO_ERROR, v.bind(this)), o.on(a.default.DEMUX_ERROR, y.bind(this)), o.on(a.default.INIT_SEGMENT, s.bind(this)), o.on(a.default.MEDIA_SEGMENT, t.bind(this)), o.on(a.default.LOADING_COMPLETE, n.bind(this)), o.on(a.default.RECOVERED_EARLY_EOF, r.bind(this)), o.on(a.default.MEDIA_INFO, e.bind(this)), o.on(a.default.METADATA_ARRIVED, d.bind(this)), o.on(a.default.SCRIPTDATA_ARRIVED, _.bind(this)), o.on(a.default.STATISTICS_INFO, c.bind(this)), o.on(a.default.RECOMMEND_SEEKPOINT, x.bind(this));
                      break;
                    case "destroy":
                      o && (o.destroy(), o = null), i.postMessage({ msg: "destroyed" });
                      break;
                    case "start":
                      o.start();
                      break;
                    case "stop":
                      o.stop();
                      break;
                    case "seek":
                      o.seek(g.data.param);
                      break;
                    case "pause":
                      o.pause();
                      break;
                    case "resume":
                      o.resume();
                      break;
                    case "logging_config": {
                      var L = g.data.param;
                      E.default.applyConfig(L), L.enableCallback === !0 ? E.default.addLogListener(l) : E.default.removeLogListener(l);
                      break;
                    }
                  }
                });
                function s(g, L) {
                  var R = {
                    msg: a.default.INIT_SEGMENT,
                    data: {
                      type: g,
                      data: L
                    }
                  };
                  i.postMessage(R, [L.data]);
                }
                function t(g, L) {
                  var R = {
                    msg: a.default.MEDIA_SEGMENT,
                    data: {
                      type: g,
                      data: L
                    }
                  };
                  i.postMessage(R, [L.data]);
                }
                function n() {
                  var g = {
                    msg: a.default.LOADING_COMPLETE
                  };
                  i.postMessage(g);
                }
                function r() {
                  var g = {
                    msg: a.default.RECOVERED_EARLY_EOF
                  };
                  i.postMessage(g);
                }
                function e(g) {
                  var L = {
                    msg: a.default.MEDIA_INFO,
                    data: g
                  };
                  i.postMessage(L);
                }
                function d(g) {
                  var L = {
                    msg: a.default.METADATA_ARRIVED,
                    data: g
                  };
                  i.postMessage(L);
                }
                function _(g) {
                  var L = {
                    msg: a.default.SCRIPTDATA_ARRIVED,
                    data: g
                  };
                  i.postMessage(L);
                }
                function c(g) {
                  var L = {
                    msg: a.default.STATISTICS_INFO,
                    data: g
                  };
                  i.postMessage(L);
                }
                function v(g, L) {
                  i.postMessage({
                    msg: a.default.IO_ERROR,
                    data: {
                      type: g,
                      info: L
                    }
                  });
                }
                function y(g, L) {
                  i.postMessage({
                    msg: a.default.DEMUX_ERROR,
                    data: {
                      type: g,
                      info: L
                    }
                  });
                }
                function x(g) {
                  i.postMessage({
                    msg: a.default.RECOMMEND_SEEKPOINT,
                    data: g
                  });
                }
                function m(g, L) {
                  i.postMessage({
                    msg: "logcat_callback",
                    data: {
                      type: g,
                      logcat: L
                    }
                  });
                }
              };
              S.default = f;
            }
          ),
          /***/
          "./src/demux/amf-parser.js": (
            /*!*********************************!*\
              !*** ./src/demux/amf-parser.js ***!
              \*********************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), h = p(
                /*! ../utils/utf8-conv.js */
                "./src/utils/utf8-conv.js"
              ), u = p(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), a = function() {
                var i = new ArrayBuffer(2);
                return new DataView(i).setInt16(0, 256, !0), new Int16Array(i)[0] === 256;
              }(), f = (
                /** @class */
                function() {
                  function i() {
                  }
                  return i.parseScriptData = function(o, l, s) {
                    var t = {};
                    try {
                      var n = i.parseValue(o, l, s), r = i.parseValue(o, l + n.size, s - n.size);
                      t[n.data] = r.data;
                    } catch (e) {
                      E.default.e("AMF", e.toString());
                    }
                    return t;
                  }, i.parseObject = function(o, l, s) {
                    if (s < 3)
                      throw new u.IllegalStateException("Data not enough when parse ScriptDataObject");
                    var t = i.parseString(o, l, s), n = i.parseValue(o, l + t.size, s - t.size), r = n.objectEnd;
                    return {
                      data: {
                        name: t.data,
                        value: n.data
                      },
                      size: t.size + n.size,
                      objectEnd: r
                    };
                  }, i.parseVariable = function(o, l, s) {
                    return i.parseObject(o, l, s);
                  }, i.parseString = function(o, l, s) {
                    if (s < 2)
                      throw new u.IllegalStateException("Data not enough when parse String");
                    var t = new DataView(o, l, s), n = t.getUint16(0, !a), r;
                    return n > 0 ? r = (0, h.default)(new Uint8Array(o, l + 2, n)) : r = "", {
                      data: r,
                      size: 2 + n
                    };
                  }, i.parseLongString = function(o, l, s) {
                    if (s < 4)
                      throw new u.IllegalStateException("Data not enough when parse LongString");
                    var t = new DataView(o, l, s), n = t.getUint32(0, !a), r;
                    return n > 0 ? r = (0, h.default)(new Uint8Array(o, l + 4, n)) : r = "", {
                      data: r,
                      size: 4 + n
                    };
                  }, i.parseDate = function(o, l, s) {
                    if (s < 10)
                      throw new u.IllegalStateException("Data size invalid when parse Date");
                    var t = new DataView(o, l, s), n = t.getFloat64(0, !a), r = t.getInt16(8, !a);
                    return n += r * 60 * 1e3, {
                      data: new Date(n),
                      size: 10
                    };
                  }, i.parseValue = function(o, l, s) {
                    if (s < 1)
                      throw new u.IllegalStateException("Data not enough when parse Value");
                    var t = new DataView(o, l, s), n = 1, r = t.getUint8(0), e, d = !1;
                    try {
                      switch (r) {
                        case 0:
                          e = t.getFloat64(1, !a), n += 8;
                          break;
                        case 1: {
                          var _ = t.getUint8(1);
                          e = !!_, n += 1;
                          break;
                        }
                        case 2: {
                          var c = i.parseString(o, l + 1, s - 1);
                          e = c.data, n += c.size;
                          break;
                        }
                        case 3: {
                          e = {};
                          var v = 0;
                          for ((t.getUint32(s - 4, !a) & 16777215) === 9 && (v = 3); n < s - 4; ) {
                            var y = i.parseObject(o, l + n, s - n - v);
                            if (y.objectEnd)
                              break;
                            e[y.data.name] = y.data.value, n += y.size;
                          }
                          if (n <= s - 3) {
                            var x = t.getUint32(n - 1, !a) & 16777215;
                            x === 9 && (n += 3);
                          }
                          break;
                        }
                        case 8: {
                          e = {}, n += 4;
                          var v = 0;
                          for ((t.getUint32(s - 4, !a) & 16777215) === 9 && (v = 3); n < s - 8; ) {
                            var m = i.parseVariable(o, l + n, s - n - v);
                            if (m.objectEnd)
                              break;
                            e[m.data.name] = m.data.value, n += m.size;
                          }
                          if (n <= s - 3) {
                            var x = t.getUint32(n - 1, !a) & 16777215;
                            x === 9 && (n += 3);
                          }
                          break;
                        }
                        case 9:
                          e = void 0, n = 1, d = !0;
                          break;
                        case 10: {
                          e = [];
                          var g = t.getUint32(1, !a);
                          n += 4;
                          for (var L = 0; L < g; L++) {
                            var R = i.parseValue(o, l + n, s - n);
                            e.push(R.data), n += R.size;
                          }
                          break;
                        }
                        case 11: {
                          var b = i.parseDate(o, l + 1, s - 1);
                          e = b.data, n += b.size;
                          break;
                        }
                        case 12: {
                          var I = i.parseString(o, l + 1, s - 1);
                          e = I.data, n += I.size;
                          break;
                        }
                        default:
                          n = s, E.default.w("AMF", "Unsupported AMF value type " + r);
                      }
                    } catch (U) {
                      E.default.e("AMF", U.toString());
                    }
                    return {
                      data: e,
                      size: n,
                      objectEnd: d
                    };
                  }, i;
                }()
              );
              S.default = f;
            }
          ),
          /***/
          "./src/demux/demux-errors.js": (
            /*!***********************************!*\
              !*** ./src/demux/demux-errors.js ***!
              \***********************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = {
                OK: "OK",
                FORMAT_ERROR: "FormatError",
                FORMAT_UNSUPPORTED: "FormatUnsupported",
                CODEC_UNSUPPORTED: "CodecUnsupported"
              };
              S.default = E;
            }
          ),
          /***/
          "./src/demux/exp-golomb.js": (
            /*!*********************************!*\
              !*** ./src/demux/exp-golomb.js ***!
              \*********************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), h = (
                /** @class */
                function() {
                  function u(a) {
                    this.TAG = "ExpGolomb", this._buffer = a, this._buffer_index = 0, this._total_bytes = a.byteLength, this._total_bits = a.byteLength * 8, this._current_word = 0, this._current_word_bits_left = 0;
                  }
                  return u.prototype.destroy = function() {
                    this._buffer = null;
                  }, u.prototype._fillCurrentWord = function() {
                    var a = this._total_bytes - this._buffer_index;
                    if (a <= 0)
                      throw new E.IllegalStateException("ExpGolomb: _fillCurrentWord() but no bytes available");
                    var f = Math.min(4, a), i = new Uint8Array(4);
                    i.set(this._buffer.subarray(this._buffer_index, this._buffer_index + f)), this._current_word = new DataView(i.buffer).getUint32(0, !1), this._buffer_index += f, this._current_word_bits_left = f * 8;
                  }, u.prototype.readBits = function(a) {
                    if (a > 32)
                      throw new E.InvalidArgumentException("ExpGolomb: readBits() bits exceeded max 32bits!");
                    if (a <= this._current_word_bits_left) {
                      var f = this._current_word >>> 32 - a;
                      return this._current_word <<= a, this._current_word_bits_left -= a, f;
                    }
                    var i = this._current_word_bits_left ? this._current_word : 0;
                    i = i >>> 32 - this._current_word_bits_left;
                    var o = a - this._current_word_bits_left;
                    this._fillCurrentWord();
                    var l = Math.min(o, this._current_word_bits_left), s = this._current_word >>> 32 - l;
                    return this._current_word <<= l, this._current_word_bits_left -= l, i = i << l | s, i;
                  }, u.prototype.readBool = function() {
                    return this.readBits(1) === 1;
                  }, u.prototype.readByte = function() {
                    return this.readBits(8);
                  }, u.prototype._skipLeadingZero = function() {
                    var a;
                    for (a = 0; a < this._current_word_bits_left; a++)
                      if (this._current_word & 2147483648 >>> a)
                        return this._current_word <<= a, this._current_word_bits_left -= a, a;
                    return this._fillCurrentWord(), a + this._skipLeadingZero();
                  }, u.prototype.readUEG = function() {
                    var a = this._skipLeadingZero();
                    return this.readBits(a + 1) - 1;
                  }, u.prototype.readSEG = function() {
                    var a = this.readUEG();
                    return a & 1 ? a + 1 >>> 1 : -1 * (a >>> 1);
                  }, u;
                }()
              );
              S.default = h;
            }
          ),
          /***/
          "./src/demux/flv-demuxer.js": (
            /*!**********************************!*\
              !*** ./src/demux/flv-demuxer.js ***!
              \**********************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), h = p(
                /*! ./amf-parser.js */
                "./src/demux/amf-parser.js"
              ), u = p(
                /*! ./sps-parser.js */
                "./src/demux/sps-parser.js"
              ), a = p(
                /*! ./demux-errors.js */
                "./src/demux/demux-errors.js"
              ), f = p(
                /*! ../core/media-info.js */
                "./src/core/media-info.js"
              ), i = p(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              );
              function o(s, t) {
                return s[t] << 24 | s[t + 1] << 16 | s[t + 2] << 8 | s[t + 3];
              }
              var l = (
                /** @class */
                function() {
                  function s(t, n) {
                    this.TAG = "FLVDemuxer", this._config = n, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null, this._dataOffset = t.dataOffset, this._firstParse = !0, this._dispatch = !1, this._hasAudio = t.hasAudioTrack, this._hasVideo = t.hasVideoTrack, this._hasAudioFlagOverrided = !1, this._hasVideoFlagOverrided = !1, this._audioInitialMetadataDispatched = !1, this._videoInitialMetadataDispatched = !1, this._mediaInfo = new f.default(), this._mediaInfo.hasAudio = this._hasAudio, this._mediaInfo.hasVideo = this._hasVideo, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._naluLengthSize = 4, this._timestampBase = 0, this._timescale = 1e3, this._duration = 0, this._durationOverrided = !1, this._referenceFrameRate = {
                      fixed: !0,
                      fps: 23.976,
                      fps_num: 23976,
                      fps_den: 1e3
                    }, this._flvSoundRateTable = [5500, 11025, 22050, 44100, 48e3], this._mpegSamplingRates = [
                      96e3,
                      88200,
                      64e3,
                      48e3,
                      44100,
                      32e3,
                      24e3,
                      22050,
                      16e3,
                      12e3,
                      11025,
                      8e3,
                      7350
                    ], this._mpegAudioV10SampleRateTable = [44100, 48e3, 32e3, 0], this._mpegAudioV20SampleRateTable = [22050, 24e3, 16e3, 0], this._mpegAudioV25SampleRateTable = [11025, 12e3, 8e3, 0], this._mpegAudioL1BitRateTable = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1], this._mpegAudioL2BitRateTable = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1], this._mpegAudioL3BitRateTable = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1], this._videoTrack = { type: "video", id: 1, sequenceNumber: 0, samples: [], length: 0 }, this._audioTrack = { type: "audio", id: 2, sequenceNumber: 0, samples: [], length: 0 }, this._littleEndian = function() {
                      var r = new ArrayBuffer(2);
                      return new DataView(r).setInt16(0, 256, !0), new Int16Array(r)[0] === 256;
                    }();
                  }
                  return s.prototype.destroy = function() {
                    this._mediaInfo = null, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._videoTrack = null, this._audioTrack = null, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null;
                  }, s.probe = function(t) {
                    var n = new Uint8Array(t), r = { match: !1 };
                    if (n[0] !== 70 || n[1] !== 76 || n[2] !== 86 || n[3] !== 1)
                      return r;
                    var e = (n[4] & 4) >>> 2 !== 0, d = (n[4] & 1) !== 0, _ = o(n, 5);
                    return _ < 9 ? r : {
                      match: !0,
                      consumed: _,
                      dataOffset: _,
                      hasAudioTrack: e,
                      hasVideoTrack: d
                    };
                  }, s.prototype.bindDataSource = function(t) {
                    return t.onDataArrival = this.parseChunks.bind(this), this;
                  }, Object.defineProperty(s.prototype, "onTrackMetadata", {
                    // prototype: function(type: string, metadata: any): void
                    get: function() {
                      return this._onTrackMetadata;
                    },
                    set: function(t) {
                      this._onTrackMetadata = t;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(s.prototype, "onMediaInfo", {
                    // prototype: function(mediaInfo: MediaInfo): void
                    get: function() {
                      return this._onMediaInfo;
                    },
                    set: function(t) {
                      this._onMediaInfo = t;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(s.prototype, "onMetaDataArrived", {
                    get: function() {
                      return this._onMetaDataArrived;
                    },
                    set: function(t) {
                      this._onMetaDataArrived = t;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(s.prototype, "onScriptDataArrived", {
                    get: function() {
                      return this._onScriptDataArrived;
                    },
                    set: function(t) {
                      this._onScriptDataArrived = t;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(s.prototype, "onError", {
                    // prototype: function(type: number, info: string): void
                    get: function() {
                      return this._onError;
                    },
                    set: function(t) {
                      this._onError = t;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(s.prototype, "onDataAvailable", {
                    // prototype: function(videoTrack: any, audioTrack: any): void
                    get: function() {
                      return this._onDataAvailable;
                    },
                    set: function(t) {
                      this._onDataAvailable = t;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(s.prototype, "timestampBase", {
                    // timestamp base for output samples, must be in milliseconds
                    get: function() {
                      return this._timestampBase;
                    },
                    set: function(t) {
                      this._timestampBase = t;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(s.prototype, "overridedDuration", {
                    get: function() {
                      return this._duration;
                    },
                    // Force-override media duration. Must be in milliseconds, int32
                    set: function(t) {
                      this._durationOverrided = !0, this._duration = t, this._mediaInfo.duration = t;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(s.prototype, "overridedHasAudio", {
                    // Force-override audio track present flag, boolean
                    set: function(t) {
                      this._hasAudioFlagOverrided = !0, this._hasAudio = t, this._mediaInfo.hasAudio = t;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(s.prototype, "overridedHasVideo", {
                    // Force-override video track present flag, boolean
                    set: function(t) {
                      this._hasVideoFlagOverrided = !0, this._hasVideo = t, this._mediaInfo.hasVideo = t;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), s.prototype.resetMediaInfo = function() {
                    this._mediaInfo = new f.default();
                  }, s.prototype._isInitialMetadataDispatched = function() {
                    return this._hasAudio && this._hasVideo ? this._audioInitialMetadataDispatched && this._videoInitialMetadataDispatched : this._hasAudio && !this._hasVideo ? this._audioInitialMetadataDispatched : !this._hasAudio && this._hasVideo ? this._videoInitialMetadataDispatched : !1;
                  }, s.prototype.parseChunks = function(t, n) {
                    if (!this._onError || !this._onMediaInfo || !this._onTrackMetadata || !this._onDataAvailable)
                      throw new i.IllegalStateException("Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");
                    var r = 0, e = this._littleEndian;
                    if (n === 0)
                      if (t.byteLength > 13) {
                        var d = s.probe(t);
                        r = d.dataOffset;
                      } else
                        return 0;
                    if (this._firstParse) {
                      this._firstParse = !1, n + r !== this._dataOffset && E.default.w(this.TAG, "First time parsing but chunk byteStart invalid!");
                      var _ = new DataView(t, r), c = _.getUint32(0, !e);
                      c !== 0 && E.default.w(this.TAG, "PrevTagSize0 !== 0 !!!"), r += 4;
                    }
                    for (; r < t.byteLength; ) {
                      this._dispatch = !0;
                      var _ = new DataView(t, r);
                      if (r + 11 + 4 > t.byteLength)
                        break;
                      var v = _.getUint8(0), y = _.getUint32(0, !e) & 16777215;
                      if (r + 11 + y + 4 > t.byteLength)
                        break;
                      if (v !== 8 && v !== 9 && v !== 18) {
                        E.default.w(this.TAG, "Unsupported tag type " + v + ", skipped"), r += 11 + y + 4;
                        continue;
                      }
                      var x = _.getUint8(4), m = _.getUint8(5), g = _.getUint8(6), L = _.getUint8(7), R = g | m << 8 | x << 16 | L << 24, b = _.getUint32(7, !e) & 16777215;
                      b !== 0 && E.default.w(this.TAG, "Meet tag which has StreamID != 0!");
                      var I = r + 11;
                      switch (v) {
                        case 8:
                          this._parseAudioData(t, I, y, R);
                          break;
                        case 9:
                          this._parseVideoData(t, I, y, R, n + r);
                          break;
                        case 18:
                          this._parseScriptData(t, I, y);
                          break;
                      }
                      var U = _.getUint32(11 + y, !e);
                      U !== 11 + y && E.default.w(this.TAG, "Invalid PrevTagSize " + U), r += 11 + y + 4;
                    }
                    return this._isInitialMetadataDispatched() && this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack), r;
                  }, s.prototype._parseScriptData = function(t, n, r) {
                    var e = h.default.parseScriptData(t, n, r);
                    if (e.hasOwnProperty("onMetaData")) {
                      if (e.onMetaData == null || typeof e.onMetaData != "object") {
                        E.default.w(this.TAG, "Invalid onMetaData structure!");
                        return;
                      }
                      this._metadata && E.default.w(this.TAG, "Found another onMetaData tag!"), this._metadata = e;
                      var d = this._metadata.onMetaData;
                      if (this._onMetaDataArrived && this._onMetaDataArrived(Object.assign({}, d)), typeof d.hasAudio == "boolean" && this._hasAudioFlagOverrided === !1 && (this._hasAudio = d.hasAudio, this._mediaInfo.hasAudio = this._hasAudio), typeof d.hasVideo == "boolean" && this._hasVideoFlagOverrided === !1 && (this._hasVideo = d.hasVideo, this._mediaInfo.hasVideo = this._hasVideo), typeof d.audiodatarate == "number" && (this._mediaInfo.audioDataRate = d.audiodatarate), typeof d.videodatarate == "number" && (this._mediaInfo.videoDataRate = d.videodatarate), typeof d.width == "number" && (this._mediaInfo.width = d.width), typeof d.height == "number" && (this._mediaInfo.height = d.height), typeof d.duration == "number") {
                        if (!this._durationOverrided) {
                          var _ = Math.floor(d.duration * this._timescale);
                          this._duration = _, this._mediaInfo.duration = _;
                        }
                      } else
                        this._mediaInfo.duration = 0;
                      if (typeof d.framerate == "number") {
                        var c = Math.floor(d.framerate * 1e3);
                        if (c > 0) {
                          var v = c / 1e3;
                          this._referenceFrameRate.fixed = !0, this._referenceFrameRate.fps = v, this._referenceFrameRate.fps_num = c, this._referenceFrameRate.fps_den = 1e3, this._mediaInfo.fps = v;
                        }
                      }
                      if (typeof d.keyframes == "object") {
                        this._mediaInfo.hasKeyframesIndex = !0;
                        var y = d.keyframes;
                        this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(y), d.keyframes = null;
                      } else
                        this._mediaInfo.hasKeyframesIndex = !1;
                      this._dispatch = !1, this._mediaInfo.metadata = d, E.default.v(this.TAG, "Parsed onMetaData"), this._mediaInfo.isComplete() && this._onMediaInfo(this._mediaInfo);
                    }
                    Object.keys(e).length > 0 && this._onScriptDataArrived && this._onScriptDataArrived(Object.assign({}, e));
                  }, s.prototype._parseKeyframesIndex = function(t) {
                    for (var n = [], r = [], e = 1; e < t.times.length; e++) {
                      var d = this._timestampBase + Math.floor(t.times[e] * 1e3);
                      n.push(d), r.push(t.filepositions[e]);
                    }
                    return {
                      times: n,
                      filepositions: r
                    };
                  }, s.prototype._parseAudioData = function(t, n, r, e) {
                    if (r <= 1) {
                      E.default.w(this.TAG, "Flv: Invalid audio packet, missing SoundData payload!");
                      return;
                    }
                    if (!(this._hasAudioFlagOverrided === !0 && this._hasAudio === !1)) {
                      this._littleEndian;
                      var d = new DataView(t, n, r), _ = d.getUint8(0), c = _ >>> 4;
                      if (c !== 2 && c !== 10) {
                        this._onError(a.default.CODEC_UNSUPPORTED, "Flv: Unsupported audio codec idx: " + c);
                        return;
                      }
                      var v = 0, y = (_ & 12) >>> 2;
                      if (y >= 0 && y <= 4)
                        v = this._flvSoundRateTable[y];
                      else {
                        this._onError(a.default.FORMAT_ERROR, "Flv: Invalid audio sample rate idx: " + y);
                        return;
                      }
                      var x = _ & 1, m = this._audioMetadata, g = this._audioTrack;
                      if (m || (this._hasAudio === !1 && this._hasAudioFlagOverrided === !1 && (this._hasAudio = !0, this._mediaInfo.hasAudio = !0), m = this._audioMetadata = {}, m.type = "audio", m.id = g.id, m.timescale = this._timescale, m.duration = this._duration, m.audioSampleRate = v, m.channelCount = x === 0 ? 1 : 2), c === 10) {
                        var L = this._parseAACAudioData(t, n + 1, r - 1);
                        if (L == null)
                          return;
                        if (L.packetType === 0) {
                          m.config && E.default.w(this.TAG, "Found another AudioSpecificConfig!");
                          var R = L.data;
                          m.audioSampleRate = R.samplingRate, m.channelCount = R.channelCount, m.codec = R.codec, m.originalCodec = R.originalCodec, m.config = R.config, m.refSampleDuration = 1024 / m.audioSampleRate * m.timescale, E.default.v(this.TAG, "Parsed AudioSpecificConfig"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._audioInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("audio", m);
                          var b = this._mediaInfo;
                          b.audioCodec = m.originalCodec, b.audioSampleRate = m.audioSampleRate, b.audioChannelCount = m.channelCount, b.hasVideo ? b.videoCodec != null && (b.mimeType = 'video/x-flv; codecs="' + b.videoCodec + "," + b.audioCodec + '"') : b.mimeType = 'video/x-flv; codecs="' + b.audioCodec + '"', b.isComplete() && this._onMediaInfo(b);
                        } else if (L.packetType === 1) {
                          var I = this._timestampBase + e, U = { unit: L.data, length: L.data.byteLength, dts: I, pts: I };
                          g.samples.push(U), g.length += L.data.length;
                        } else
                          E.default.e(this.TAG, "Flv: Unsupported AAC data type " + L.packetType);
                      } else if (c === 2) {
                        if (!m.codec) {
                          var R = this._parseMP3AudioData(t, n + 1, r - 1, !0);
                          if (R == null)
                            return;
                          m.audioSampleRate = R.samplingRate, m.channelCount = R.channelCount, m.codec = R.codec, m.originalCodec = R.originalCodec, m.refSampleDuration = 1152 / m.audioSampleRate * m.timescale, E.default.v(this.TAG, "Parsed MPEG Audio Frame Header"), this._audioInitialMetadataDispatched = !0, this._onTrackMetadata("audio", m);
                          var b = this._mediaInfo;
                          b.audioCodec = m.codec, b.audioSampleRate = m.audioSampleRate, b.audioChannelCount = m.channelCount, b.audioDataRate = R.bitRate, b.hasVideo ? b.videoCodec != null && (b.mimeType = 'video/x-flv; codecs="' + b.videoCodec + "," + b.audioCodec + '"') : b.mimeType = 'video/x-flv; codecs="' + b.audioCodec + '"', b.isComplete() && this._onMediaInfo(b);
                        }
                        var k = this._parseMP3AudioData(t, n + 1, r - 1, !1);
                        if (k == null)
                          return;
                        var I = this._timestampBase + e, F = { unit: k, length: k.byteLength, dts: I, pts: I };
                        g.samples.push(F), g.length += k.length;
                      }
                    }
                  }, s.prototype._parseAACAudioData = function(t, n, r) {
                    if (r <= 1) {
                      E.default.w(this.TAG, "Flv: Invalid AAC packet, missing AACPacketType or/and Data!");
                      return;
                    }
                    var e = {}, d = new Uint8Array(t, n, r);
                    return e.packetType = d[0], d[0] === 0 ? e.data = this._parseAACAudioSpecificConfig(t, n + 1, r - 1) : e.data = d.subarray(1), e;
                  }, s.prototype._parseAACAudioSpecificConfig = function(t, n, r) {
                    var e = new Uint8Array(t, n, r), d = null, _ = 0, c = 0, v = 0, y = null;
                    if (_ = c = e[0] >>> 3, v = (e[0] & 7) << 1 | e[1] >>> 7, v < 0 || v >= this._mpegSamplingRates.length) {
                      this._onError(a.default.FORMAT_ERROR, "Flv: AAC invalid sampling frequency index!");
                      return;
                    }
                    var x = this._mpegSamplingRates[v], m = (e[1] & 120) >>> 3;
                    if (m < 0 || m >= 8) {
                      this._onError(a.default.FORMAT_ERROR, "Flv: AAC invalid channel configuration");
                      return;
                    }
                    _ === 5 && (y = (e[1] & 7) << 1 | e[2] >>> 7, (e[2] & 124) >>> 2);
                    var g = self.navigator.userAgent.toLowerCase();
                    return g.indexOf("firefox") !== -1 ? v >= 6 ? (_ = 5, d = new Array(4), y = v - 3) : (_ = 2, d = new Array(2), y = v) : g.indexOf("android") !== -1 ? (_ = 2, d = new Array(2), y = v) : (_ = 5, y = v, d = new Array(4), v >= 6 ? y = v - 3 : m === 1 && (_ = 2, d = new Array(2), y = v)), d[0] = _ << 3, d[0] |= (v & 15) >>> 1, d[1] = (v & 15) << 7, d[1] |= (m & 15) << 3, _ === 5 && (d[1] |= (y & 15) >>> 1, d[2] = (y & 1) << 7, d[2] |= 8, d[3] = 0), {
                      config: d,
                      samplingRate: x,
                      channelCount: m,
                      codec: "mp4a.40." + _,
                      originalCodec: "mp4a.40." + c
                    };
                  }, s.prototype._parseMP3AudioData = function(t, n, r, e) {
                    if (r < 4) {
                      E.default.w(this.TAG, "Flv: Invalid MP3 packet, header missing!");
                      return;
                    }
                    this._littleEndian;
                    var d = new Uint8Array(t, n, r), _ = null;
                    if (e) {
                      if (d[0] !== 255)
                        return;
                      var c = d[1] >>> 3 & 3, v = (d[1] & 6) >> 1, y = (d[2] & 240) >>> 4, x = (d[2] & 12) >>> 2, m = d[3] >>> 6 & 3, g = m !== 3 ? 2 : 1, L = 0, R = 0, b = "mp3";
                      switch (c) {
                        case 0:
                          L = this._mpegAudioV25SampleRateTable[x];
                          break;
                        case 2:
                          L = this._mpegAudioV20SampleRateTable[x];
                          break;
                        case 3:
                          L = this._mpegAudioV10SampleRateTable[x];
                          break;
                      }
                      switch (v) {
                        case 1:
                          y < this._mpegAudioL3BitRateTable.length && (R = this._mpegAudioL3BitRateTable[y]);
                          break;
                        case 2:
                          y < this._mpegAudioL2BitRateTable.length && (R = this._mpegAudioL2BitRateTable[y]);
                          break;
                        case 3:
                          y < this._mpegAudioL1BitRateTable.length && (R = this._mpegAudioL1BitRateTable[y]);
                          break;
                      }
                      _ = {
                        bitRate: R,
                        samplingRate: L,
                        channelCount: g,
                        codec: b,
                        originalCodec: b
                      };
                    } else
                      _ = d;
                    return _;
                  }, s.prototype._parseVideoData = function(t, n, r, e, d) {
                    if (r <= 1) {
                      E.default.w(this.TAG, "Flv: Invalid video packet, missing VideoData payload!");
                      return;
                    }
                    if (!(this._hasVideoFlagOverrided === !0 && this._hasVideo === !1)) {
                      var _ = new Uint8Array(t, n, r)[0], c = (_ & 240) >>> 4, v = _ & 15;
                      if (v !== 7) {
                        this._onError(a.default.CODEC_UNSUPPORTED, "Flv: Unsupported codec in video frame: " + v);
                        return;
                      }
                      this._parseAVCVideoPacket(t, n + 1, r - 1, e, d, c);
                    }
                  }, s.prototype._parseAVCVideoPacket = function(t, n, r, e, d, _) {
                    if (r < 4) {
                      E.default.w(this.TAG, "Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime");
                      return;
                    }
                    var c = this._littleEndian, v = new DataView(t, n, r), y = v.getUint8(0), x = v.getUint32(0, !c) & 16777215, m = x << 8 >> 8;
                    if (y === 0)
                      this._parseAVCDecoderConfigurationRecord(t, n + 4, r - 4);
                    else if (y === 1)
                      this._parseAVCVideoData(t, n + 4, r - 4, e, d, _, m);
                    else if (y !== 2) {
                      this._onError(a.default.FORMAT_ERROR, "Flv: Invalid video packet type " + y);
                      return;
                    }
                  }, s.prototype._parseAVCDecoderConfigurationRecord = function(t, n, r) {
                    if (r < 7) {
                      E.default.w(this.TAG, "Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");
                      return;
                    }
                    var e = this._videoMetadata, d = this._videoTrack, _ = this._littleEndian, c = new DataView(t, n, r);
                    e ? typeof e.avcc < "u" && E.default.w(this.TAG, "Found another AVCDecoderConfigurationRecord!") : (this._hasVideo === !1 && this._hasVideoFlagOverrided === !1 && (this._hasVideo = !0, this._mediaInfo.hasVideo = !0), e = this._videoMetadata = {}, e.type = "video", e.id = d.id, e.timescale = this._timescale, e.duration = this._duration);
                    var v = c.getUint8(0), y = c.getUint8(1);
                    if (c.getUint8(2), c.getUint8(3), v !== 1 || y === 0) {
                      this._onError(a.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord");
                      return;
                    }
                    if (this._naluLengthSize = (c.getUint8(4) & 3) + 1, this._naluLengthSize !== 3 && this._naluLengthSize !== 4) {
                      this._onError(a.default.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1));
                      return;
                    }
                    var x = c.getUint8(5) & 31;
                    if (x === 0) {
                      this._onError(a.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No SPS");
                      return;
                    } else
                      x > 1 && E.default.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: SPS Count = " + x);
                    for (var m = 6, g = 0; g < x; g++) {
                      var L = c.getUint16(m, !_);
                      if (m += 2, L !== 0) {
                        var R = new Uint8Array(t, n + m, L);
                        m += L;
                        var b = u.default.parseSPS(R);
                        if (g === 0) {
                          e.codecWidth = b.codec_size.width, e.codecHeight = b.codec_size.height, e.presentWidth = b.present_size.width, e.presentHeight = b.present_size.height, e.profile = b.profile_string, e.level = b.level_string, e.bitDepth = b.bit_depth, e.chromaFormat = b.chroma_format, e.sarRatio = b.sar_ratio, e.frameRate = b.frame_rate, (b.frame_rate.fixed === !1 || b.frame_rate.fps_num === 0 || b.frame_rate.fps_den === 0) && (e.frameRate = this._referenceFrameRate);
                          var I = e.frameRate.fps_den, U = e.frameRate.fps_num;
                          e.refSampleDuration = e.timescale * (I / U);
                          for (var k = R.subarray(1, 4), F = "avc1.", N = 0; N < 3; N++) {
                            var z = k[N].toString(16);
                            z.length < 2 && (z = "0" + z), F += z;
                          }
                          e.codec = F;
                          var P = this._mediaInfo;
                          P.width = e.codecWidth, P.height = e.codecHeight, P.fps = e.frameRate.fps, P.profile = e.profile, P.level = e.level, P.refFrames = b.ref_frames, P.chromaFormat = b.chroma_format_string, P.sarNum = e.sarRatio.width, P.sarDen = e.sarRatio.height, P.videoCodec = F, P.hasAudio ? P.audioCodec != null && (P.mimeType = 'video/x-flv; codecs="' + P.videoCodec + "," + P.audioCodec + '"') : P.mimeType = 'video/x-flv; codecs="' + P.videoCodec + '"', P.isComplete() && this._onMediaInfo(P);
                        }
                      }
                    }
                    var G = c.getUint8(m);
                    if (G === 0) {
                      this._onError(a.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No PPS");
                      return;
                    } else
                      G > 1 && E.default.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: PPS Count = " + G);
                    m++;
                    for (var g = 0; g < G; g++) {
                      var L = c.getUint16(m, !_);
                      m += 2, L !== 0 && (m += L);
                    }
                    e.avcc = new Uint8Array(r), e.avcc.set(new Uint8Array(t, n, r), 0), E.default.v(this.TAG, "Parsed AVCDecoderConfigurationRecord"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._videoInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("video", e);
                  }, s.prototype._parseAVCVideoData = function(t, n, r, e, d, _, c) {
                    for (var v = this._littleEndian, y = new DataView(t, n, r), x = [], m = 0, g = 0, L = this._naluLengthSize, R = this._timestampBase + e, b = _ === 1; g < r; ) {
                      if (g + 4 >= r) {
                        E.default.w(this.TAG, "Malformed Nalu near timestamp " + R + ", offset = " + g + ", dataSize = " + r);
                        break;
                      }
                      var I = y.getUint32(g, !v);
                      if (L === 3 && (I >>>= 8), I > r - L) {
                        E.default.w(this.TAG, "Malformed Nalus near timestamp " + R + ", NaluSize > DataSize!");
                        return;
                      }
                      var U = y.getUint8(g + L) & 31;
                      U === 5 && (b = !0);
                      var k = new Uint8Array(t, n + g, L + I), F = { type: U, data: k };
                      x.push(F), m += k.byteLength, g += L + I;
                    }
                    if (x.length) {
                      var N = this._videoTrack, z = {
                        units: x,
                        length: m,
                        isKeyframe: b,
                        dts: R,
                        cts: c,
                        pts: R + c
                      };
                      b && (z.fileposition = d), N.samples.push(z), N.length += m;
                    }
                  }, s;
                }()
              );
              S.default = l;
            }
          ),
          /***/
          "./src/demux/sps-parser.js": (
            /*!*********************************!*\
              !*** ./src/demux/sps-parser.js ***!
              \*********************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! ./exp-golomb.js */
                "./src/demux/exp-golomb.js"
              ), h = (
                /** @class */
                function() {
                  function u() {
                  }
                  return u._ebsp2rbsp = function(a) {
                    for (var f = a, i = f.byteLength, o = new Uint8Array(i), l = 0, s = 0; s < i; s++)
                      s >= 2 && f[s] === 3 && f[s - 1] === 0 && f[s - 2] === 0 || (o[l] = f[s], l++);
                    return new Uint8Array(o.buffer, 0, l);
                  }, u.parseSPS = function(a) {
                    var f = u._ebsp2rbsp(a), i = new E.default(f);
                    i.readByte();
                    var o = i.readByte();
                    i.readByte();
                    var l = i.readByte();
                    i.readUEG();
                    var s = u.getProfileString(o), t = u.getLevelString(l), n = 1, r = 420, e = [0, 420, 422, 444], d = 8;
                    if ((o === 100 || o === 110 || o === 122 || o === 244 || o === 44 || o === 83 || o === 86 || o === 118 || o === 128 || o === 138 || o === 144) && (n = i.readUEG(), n === 3 && i.readBits(1), n <= 3 && (r = e[n]), d = i.readUEG() + 8, i.readUEG(), i.readBits(1), i.readBool()))
                      for (var _ = n !== 3 ? 8 : 12, c = 0; c < _; c++)
                        i.readBool() && (c < 6 ? u._skipScalingList(i, 16) : u._skipScalingList(i, 64));
                    i.readUEG();
                    var v = i.readUEG();
                    if (v === 0)
                      i.readUEG();
                    else if (v === 1) {
                      i.readBits(1), i.readSEG(), i.readSEG();
                      for (var y = i.readUEG(), c = 0; c < y; c++)
                        i.readSEG();
                    }
                    var x = i.readUEG();
                    i.readBits(1);
                    var m = i.readUEG(), g = i.readUEG(), L = i.readBits(1);
                    L === 0 && i.readBits(1), i.readBits(1);
                    var R = 0, b = 0, I = 0, U = 0, k = i.readBool();
                    k && (R = i.readUEG(), b = i.readUEG(), I = i.readUEG(), U = i.readUEG());
                    var F = 1, N = 1, z = 0, P = !0, G = 0, ne = 0, W = i.readBool();
                    if (W) {
                      if (i.readBool()) {
                        var H = i.readByte(), re = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2], $ = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
                        H > 0 && H < 16 ? (F = re[H - 1], N = $[H - 1]) : H === 255 && (F = i.readByte() << 8 | i.readByte(), N = i.readByte() << 8 | i.readByte());
                      }
                      if (i.readBool() && i.readBool(), i.readBool() && (i.readBits(4), i.readBool() && i.readBits(24)), i.readBool() && (i.readUEG(), i.readUEG()), i.readBool()) {
                        var ee = i.readBits(32), oe = i.readBits(32);
                        P = i.readBool(), G = oe, ne = ee * 2, z = G / ne;
                      }
                    }
                    var Y = 1;
                    (F !== 1 || N !== 1) && (Y = F / N);
                    var M = 0, te = 0;
                    if (n === 0)
                      M = 1, te = 2 - L;
                    else {
                      var se = n === 3 ? 1 : 2, de = n === 1 ? 2 : 1;
                      M = se, te = de * (2 - L);
                    }
                    var ue = (m + 1) * 16, le = (2 - L) * ((g + 1) * 16);
                    ue -= (R + b) * M, le -= (I + U) * te;
                    var fe = Math.ceil(ue * Y);
                    return i.destroy(), i = null, {
                      profile_string: s,
                      level_string: t,
                      bit_depth: d,
                      ref_frames: x,
                      chroma_format: r,
                      chroma_format_string: u.getChromaFormatString(r),
                      frame_rate: {
                        fixed: P,
                        fps: z,
                        fps_den: ne,
                        fps_num: G
                      },
                      sar_ratio: {
                        width: F,
                        height: N
                      },
                      codec_size: {
                        width: ue,
                        height: le
                      },
                      present_size: {
                        width: fe,
                        height: le
                      }
                    };
                  }, u._skipScalingList = function(a, f) {
                    for (var i = 8, o = 8, l = 0, s = 0; s < f; s++)
                      o !== 0 && (l = a.readSEG(), o = (i + l + 256) % 256), i = o === 0 ? i : o;
                  }, u.getProfileString = function(a) {
                    switch (a) {
                      case 66:
                        return "Baseline";
                      case 77:
                        return "Main";
                      case 88:
                        return "Extended";
                      case 100:
                        return "High";
                      case 110:
                        return "High10";
                      case 122:
                        return "High422";
                      case 244:
                        return "High444";
                      default:
                        return "Unknown";
                    }
                  }, u.getLevelString = function(a) {
                    return (a / 10).toFixed(1);
                  }, u.getChromaFormatString = function(a) {
                    switch (a) {
                      case 420:
                        return "4:2:0";
                      case 422:
                        return "4:2:2";
                      case 444:
                        return "4:4:4";
                      default:
                        return "Unknown";
                    }
                  }, u;
                }()
              );
              S.default = h;
            }
          ),
          /***/
          "./src/flv.js": (
            /*!********************!*\
              !*** ./src/flv.js ***!
              \********************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! ./utils/polyfill.js */
                "./src/utils/polyfill.js"
              ), h = p(
                /*! ./core/features.js */
                "./src/core/features.js"
              ), u = p(
                /*! ./io/loader.js */
                "./src/io/loader.js"
              ), a = p(
                /*! ./player/flv-player.js */
                "./src/player/flv-player.js"
              ), f = p(
                /*! ./player/native-player.js */
                "./src/player/native-player.js"
              ), i = p(
                /*! ./player/player-events.js */
                "./src/player/player-events.js"
              ), o = p(
                /*! ./player/player-errors.js */
                "./src/player/player-errors.js"
              ), l = p(
                /*! ./utils/logging-control.js */
                "./src/utils/logging-control.js"
              ), s = p(
                /*! ./utils/exception.js */
                "./src/utils/exception.js"
              );
              E.default.install();
              function t(d, _) {
                var c = d;
                if (c == null || typeof c != "object")
                  throw new s.InvalidArgumentException("MediaDataSource must be an javascript object!");
                if (!c.hasOwnProperty("type"))
                  throw new s.InvalidArgumentException("MediaDataSource must has type field to indicate video file type!");
                switch (c.type) {
                  case "flv":
                    return new a.default(c, _);
                  default:
                    return new f.default(c, _);
                }
              }
              function n() {
                return h.default.supportMSEH264Playback();
              }
              function r() {
                return h.default.getFeatureList();
              }
              var e = {};
              e.createPlayer = t, e.isSupported = n, e.getFeatureList = r, e.BaseLoader = u.BaseLoader, e.LoaderStatus = u.LoaderStatus, e.LoaderErrors = u.LoaderErrors, e.Events = i.default, e.ErrorTypes = o.ErrorTypes, e.ErrorDetails = o.ErrorDetails, e.FlvPlayer = a.default, e.NativePlayer = f.default, e.LoggingControl = l.default, Object.defineProperty(e, "version", {
                enumerable: !0,
                get: function() {
                  return "1.6.2";
                }
              }), S.default = e;
            }
          ),
          /***/
          "./src/index.js": (
            /*!**********************!*\
              !*** ./src/index.js ***!
              \**********************/
            /***/
            function(T, S, p) {
              T.exports = p(
                /*! ./flv.js */
                "./src/flv.js"
              ).default;
            }
          ),
          /***/
          "./src/io/fetch-stream-loader.js": (
            /*!***************************************!*\
              !*** ./src/io/fetch-stream-loader.js ***!
              \***************************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! ../utils/browser.js */
                "./src/utils/browser.js"
              ), h = p(
                /*! ./loader.js */
                "./src/io/loader.js"
              ), u = p(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), a = /* @__PURE__ */ function() {
                var i = function(o, l) {
                  return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, t) {
                    s.__proto__ = t;
                  } || function(s, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) && (s[n] = t[n]);
                  }, i(o, l);
                };
                return function(o, l) {
                  if (typeof l != "function" && l !== null)
                    throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
                  i(o, l);
                  function s() {
                    this.constructor = o;
                  }
                  o.prototype = l === null ? Object.create(l) : (s.prototype = l.prototype, new s());
                };
              }(), f = (
                /** @class */
                function(i) {
                  a(o, i);
                  function o(l, s) {
                    var t = i.call(this, "fetch-stream-loader") || this;
                    return t.TAG = "FetchStreamLoader", t._seekHandler = l, t._config = s, t._needStash = !0, t._requestAbort = !1, t._contentLength = null, t._receivedLength = 0, t;
                  }
                  return o.isSupported = function() {
                    try {
                      var l = E.default.msedge && E.default.version.minor >= 15048, s = E.default.msedge ? l : !0;
                      return self.fetch && self.ReadableStream && s;
                    } catch {
                      return !1;
                    }
                  }, o.prototype.destroy = function() {
                    this.isWorking() && this.abort(), i.prototype.destroy.call(this);
                  }, o.prototype.open = function(l, s) {
                    var t = this;
                    this._dataSource = l, this._range = s;
                    var n = l.url;
                    this._config.reuseRedirectedURL && l.redirectedURL != null && (n = l.redirectedURL);
                    var r = this._seekHandler.getConfig(n, s), e = new self.Headers();
                    if (typeof r.headers == "object") {
                      var d = r.headers;
                      for (var _ in d)
                        d.hasOwnProperty(_) && e.append(_, d[_]);
                    }
                    var c = {
                      method: "GET",
                      headers: e,
                      mode: "cors",
                      cache: "default",
                      // The default policy of Fetch API in the whatwg standard
                      // Safari incorrectly indicates 'no-referrer' as default policy, fuck it
                      referrerPolicy: "no-referrer-when-downgrade"
                    };
                    if (typeof this._config.headers == "object")
                      for (var _ in this._config.headers)
                        e.append(_, this._config.headers[_]);
                    l.cors === !1 && (c.mode = "same-origin"), l.withCredentials && (c.credentials = "include"), l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy), self.AbortController && (this._abortController = new self.AbortController(), c.signal = this._abortController.signal), this._status = h.LoaderStatus.kConnecting, self.fetch(r.url, c).then(function(v) {
                      if (t._requestAbort) {
                        t._status = h.LoaderStatus.kIdle, v.body.cancel();
                        return;
                      }
                      if (v.ok && v.status >= 200 && v.status <= 299) {
                        if (v.url !== r.url && t._onURLRedirect) {
                          var y = t._seekHandler.removeURLParameters(v.url);
                          t._onURLRedirect(y);
                        }
                        var x = v.headers.get("Content-Length");
                        return x != null && (t._contentLength = parseInt(x), t._contentLength !== 0 && t._onContentLengthKnown && t._onContentLengthKnown(t._contentLength)), t._pump.call(t, v.body.getReader());
                      } else if (t._status = h.LoaderStatus.kError, t._onError)
                        t._onError(h.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: v.status, msg: v.statusText });
                      else
                        throw new u.RuntimeException("FetchStreamLoader: Http code invalid, " + v.status + " " + v.statusText);
                    }).catch(function(v) {
                      if (!(t._abortController && t._abortController.signal.aborted))
                        if (t._status = h.LoaderStatus.kError, t._onError)
                          t._onError(h.LoaderErrors.EXCEPTION, { code: -1, msg: v.message });
                        else
                          throw v;
                    });
                  }, o.prototype.abort = function() {
                    if (this._requestAbort = !0, (this._status !== h.LoaderStatus.kBuffering || !E.default.chrome) && this._abortController)
                      try {
                        this._abortController.abort();
                      } catch {
                      }
                  }, o.prototype._pump = function(l) {
                    var s = this;
                    return l.read().then(function(t) {
                      if (t.done)
                        if (s._contentLength !== null && s._receivedLength < s._contentLength) {
                          s._status = h.LoaderStatus.kError;
                          var n = h.LoaderErrors.EARLY_EOF, r = { code: -1, msg: "Fetch stream meet Early-EOF" };
                          if (s._onError)
                            s._onError(n, r);
                          else
                            throw new u.RuntimeException(r.msg);
                        } else
                          s._status = h.LoaderStatus.kComplete, s._onComplete && s._onComplete(s._range.from, s._range.from + s._receivedLength - 1);
                      else {
                        if (s._abortController && s._abortController.signal.aborted) {
                          s._status = h.LoaderStatus.kComplete;
                          return;
                        } else if (s._requestAbort === !0)
                          return s._status = h.LoaderStatus.kComplete, l.cancel();
                        s._status = h.LoaderStatus.kBuffering;
                        var e = t.value.buffer, d = s._range.from + s._receivedLength;
                        s._receivedLength += e.byteLength, s._onDataArrival && s._onDataArrival(e, d, s._receivedLength), s._pump(l);
                      }
                    }).catch(function(t) {
                      if (s._abortController && s._abortController.signal.aborted) {
                        s._status = h.LoaderStatus.kComplete;
                        return;
                      }
                      if (!(t.code === 11 && E.default.msedge)) {
                        s._status = h.LoaderStatus.kError;
                        var n = 0, r = null;
                        if ((t.code === 19 || t.message === "network error") && // NETWORK_ERR
                        (s._contentLength === null || s._contentLength !== null && s._receivedLength < s._contentLength) ? (n = h.LoaderErrors.EARLY_EOF, r = { code: t.code, msg: "Fetch stream meet Early-EOF" }) : (n = h.LoaderErrors.EXCEPTION, r = { code: t.code, msg: t.message }), s._onError)
                          s._onError(n, r);
                        else
                          throw new u.RuntimeException(r.msg);
                      }
                    });
                  }, o;
                }(h.BaseLoader)
              );
              S.default = f;
            }
          ),
          /***/
          "./src/io/io-controller.js": (
            /*!*********************************!*\
              !*** ./src/io/io-controller.js ***!
              \*********************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), h = p(
                /*! ./speed-sampler.js */
                "./src/io/speed-sampler.js"
              ), u = p(
                /*! ./loader.js */
                "./src/io/loader.js"
              ), a = p(
                /*! ./fetch-stream-loader.js */
                "./src/io/fetch-stream-loader.js"
              ), f = p(
                /*! ./xhr-moz-chunked-loader.js */
                "./src/io/xhr-moz-chunked-loader.js"
              ), i = p(
                /*! ./xhr-range-loader.js */
                "./src/io/xhr-range-loader.js"
              ), o = p(
                /*! ./websocket-loader.js */
                "./src/io/websocket-loader.js"
              ), l = p(
                /*! ./range-seek-handler.js */
                "./src/io/range-seek-handler.js"
              ), s = p(
                /*! ./param-seek-handler.js */
                "./src/io/param-seek-handler.js"
              ), t = p(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), n = (
                /** @class */
                function() {
                  function r(e, d, _) {
                    this.TAG = "IOController", this._config = d, this._extraData = _, this._stashInitialSize = 1024 * 384, d.stashInitialSize != null && d.stashInitialSize > 0 && (this._stashInitialSize = d.stashInitialSize), this._stashUsed = 0, this._stashSize = this._stashInitialSize, this._bufferSize = 1024 * 1024 * 3, this._stashBuffer = new ArrayBuffer(this._bufferSize), this._stashByteStart = 0, this._enableStash = !0, d.enableStashBuffer === !1 && (this._enableStash = !1), this._loader = null, this._loaderClass = null, this._seekHandler = null, this._dataSource = e, this._isWebSocketURL = /wss?:\/\/(.+?)/.test(e.url), this._refTotalLength = e.filesize ? e.filesize : null, this._totalLength = this._refTotalLength, this._fullRequestFlag = !1, this._currentRange = null, this._redirectedURL = null, this._speedNormalized = 0, this._speedSampler = new h.default(), this._speedNormalizeList = [64, 128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096], this._isEarlyEofReconnecting = !1, this._paused = !1, this._resumeFrom = 0, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._selectSeekHandler(), this._selectLoader(), this._createLoader();
                  }
                  return r.prototype.destroy = function() {
                    this._loader.isWorking() && this._loader.abort(), this._loader.destroy(), this._loader = null, this._loaderClass = null, this._dataSource = null, this._stashBuffer = null, this._stashUsed = this._stashSize = this._bufferSize = this._stashByteStart = 0, this._currentRange = null, this._speedSampler = null, this._isEarlyEofReconnecting = !1, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._extraData = null;
                  }, r.prototype.isWorking = function() {
                    return this._loader && this._loader.isWorking() && !this._paused;
                  }, r.prototype.isPaused = function() {
                    return this._paused;
                  }, Object.defineProperty(r.prototype, "status", {
                    get: function() {
                      return this._loader.status;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(r.prototype, "extraData", {
                    get: function() {
                      return this._extraData;
                    },
                    set: function(e) {
                      this._extraData = e;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(r.prototype, "onDataArrival", {
                    // prototype: function onDataArrival(chunks: ArrayBuffer, byteStart: number): number
                    get: function() {
                      return this._onDataArrival;
                    },
                    set: function(e) {
                      this._onDataArrival = e;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(r.prototype, "onSeeked", {
                    get: function() {
                      return this._onSeeked;
                    },
                    set: function(e) {
                      this._onSeeked = e;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(r.prototype, "onError", {
                    // prototype: function onError(type: number, info: {code: number, msg: string}): void
                    get: function() {
                      return this._onError;
                    },
                    set: function(e) {
                      this._onError = e;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(r.prototype, "onComplete", {
                    get: function() {
                      return this._onComplete;
                    },
                    set: function(e) {
                      this._onComplete = e;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(r.prototype, "onRedirect", {
                    get: function() {
                      return this._onRedirect;
                    },
                    set: function(e) {
                      this._onRedirect = e;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(r.prototype, "onRecoveredEarlyEof", {
                    get: function() {
                      return this._onRecoveredEarlyEof;
                    },
                    set: function(e) {
                      this._onRecoveredEarlyEof = e;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(r.prototype, "currentURL", {
                    get: function() {
                      return this._dataSource.url;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(r.prototype, "hasRedirect", {
                    get: function() {
                      return this._redirectedURL != null || this._dataSource.redirectedURL != null;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(r.prototype, "currentRedirectedURL", {
                    get: function() {
                      return this._redirectedURL || this._dataSource.redirectedURL;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(r.prototype, "currentSpeed", {
                    // in KB/s
                    get: function() {
                      return this._loaderClass === i.default ? this._loader.currentSpeed : this._speedSampler.lastSecondKBps;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(r.prototype, "loaderType", {
                    get: function() {
                      return this._loader.type;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), r.prototype._selectSeekHandler = function() {
                    var e = this._config;
                    if (e.seekType === "range")
                      this._seekHandler = new l.default(this._config.rangeLoadZeroStart);
                    else if (e.seekType === "param") {
                      var d = e.seekParamStart || "bstart", _ = e.seekParamEnd || "bend";
                      this._seekHandler = new s.default(d, _);
                    } else if (e.seekType === "custom") {
                      if (typeof e.customSeekHandler != "function")
                        throw new t.InvalidArgumentException("Custom seekType specified in config but invalid customSeekHandler!");
                      this._seekHandler = new e.customSeekHandler();
                    } else
                      throw new t.InvalidArgumentException("Invalid seekType in config: " + e.seekType);
                  }, r.prototype._selectLoader = function() {
                    if (this._config.customLoader != null)
                      this._loaderClass = this._config.customLoader;
                    else if (this._isWebSocketURL)
                      this._loaderClass = o.default;
                    else if (a.default.isSupported())
                      this._loaderClass = a.default;
                    else if (f.default.isSupported())
                      this._loaderClass = f.default;
                    else if (i.default.isSupported())
                      this._loaderClass = i.default;
                    else
                      throw new t.RuntimeException("Your browser doesn't support xhr with arraybuffer responseType!");
                  }, r.prototype._createLoader = function() {
                    this._loader = new this._loaderClass(this._seekHandler, this._config), this._loader.needStashBuffer === !1 && (this._enableStash = !1), this._loader.onContentLengthKnown = this._onContentLengthKnown.bind(this), this._loader.onURLRedirect = this._onURLRedirect.bind(this), this._loader.onDataArrival = this._onLoaderChunkArrival.bind(this), this._loader.onComplete = this._onLoaderComplete.bind(this), this._loader.onError = this._onLoaderError.bind(this);
                  }, r.prototype.open = function(e) {
                    this._currentRange = { from: 0, to: -1 }, e && (this._currentRange.from = e), this._speedSampler.reset(), e || (this._fullRequestFlag = !0), this._loader.open(this._dataSource, Object.assign({}, this._currentRange));
                  }, r.prototype.abort = function() {
                    this._loader.abort(), this._paused && (this._paused = !1, this._resumeFrom = 0);
                  }, r.prototype.pause = function() {
                    this.isWorking() && (this._loader.abort(), this._stashUsed !== 0 ? (this._resumeFrom = this._stashByteStart, this._currentRange.to = this._stashByteStart - 1) : this._resumeFrom = this._currentRange.to + 1, this._stashUsed = 0, this._stashByteStart = 0, this._paused = !0);
                  }, r.prototype.resume = function() {
                    if (this._paused) {
                      this._paused = !1;
                      var e = this._resumeFrom;
                      this._resumeFrom = 0, this._internalSeek(e, !0);
                    }
                  }, r.prototype.seek = function(e) {
                    this._paused = !1, this._stashUsed = 0, this._stashByteStart = 0, this._internalSeek(e, !0);
                  }, r.prototype._internalSeek = function(e, d) {
                    this._loader.isWorking() && this._loader.abort(), this._flushStashBuffer(d), this._loader.destroy(), this._loader = null;
                    var _ = { from: e, to: -1 };
                    this._currentRange = { from: _.from, to: -1 }, this._speedSampler.reset(), this._stashSize = this._stashInitialSize, this._createLoader(), this._loader.open(this._dataSource, _), this._onSeeked && this._onSeeked();
                  }, r.prototype.updateUrl = function(e) {
                    if (!e || typeof e != "string" || e.length === 0)
                      throw new t.InvalidArgumentException("Url must be a non-empty string!");
                    this._dataSource.url = e;
                  }, r.prototype._expandBuffer = function(e) {
                    for (var d = this._stashSize; d + 1024 * 1024 * 1 < e; )
                      d *= 2;
                    if (d += 1024 * 1024 * 1, d !== this._bufferSize) {
                      var _ = new ArrayBuffer(d);
                      if (this._stashUsed > 0) {
                        var c = new Uint8Array(this._stashBuffer, 0, this._stashUsed), v = new Uint8Array(_, 0, d);
                        v.set(c, 0);
                      }
                      this._stashBuffer = _, this._bufferSize = d;
                    }
                  }, r.prototype._normalizeSpeed = function(e) {
                    var d = this._speedNormalizeList, _ = d.length - 1, c = 0, v = 0, y = _;
                    if (e < d[0])
                      return d[0];
                    for (; v <= y; ) {
                      if (c = v + Math.floor((y - v) / 2), c === _ || e >= d[c] && e < d[c + 1])
                        return d[c];
                      d[c] < e ? v = c + 1 : y = c - 1;
                    }
                  }, r.prototype._adjustStashSize = function(e) {
                    var d = 0;
                    this._config.isLive || e < 512 ? d = e : e >= 512 && e <= 1024 ? d = Math.floor(e * 1.5) : d = e * 2, d > 8192 && (d = 8192);
                    var _ = d * 1024 + 1024 * 1024 * 1;
                    this._bufferSize < _ && this._expandBuffer(_), this._stashSize = d * 1024;
                  }, r.prototype._dispatchChunks = function(e, d) {
                    return this._currentRange.to = d + e.byteLength - 1, this._onDataArrival(e, d);
                  }, r.prototype._onURLRedirect = function(e) {
                    this._redirectedURL = e, this._onRedirect && this._onRedirect(e);
                  }, r.prototype._onContentLengthKnown = function(e) {
                    e && this._fullRequestFlag && (this._totalLength = e, this._fullRequestFlag = !1);
                  }, r.prototype._onLoaderChunkArrival = function(e, d, _) {
                    if (!this._onDataArrival)
                      throw new t.IllegalStateException("IOController: No existing consumer (onDataArrival) callback!");
                    if (!this._paused) {
                      this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, this._onRecoveredEarlyEof && this._onRecoveredEarlyEof()), this._speedSampler.addBytes(e.byteLength);
                      var c = this._speedSampler.lastSecondKBps;
                      if (c !== 0) {
                        var v = this._normalizeSpeed(c);
                        this._speedNormalized !== v && (this._speedNormalized = v, this._adjustStashSize(v));
                      }
                      if (this._enableStash)
                        if (this._stashUsed === 0 && this._stashByteStart === 0 && (this._stashByteStart = d), this._stashUsed + e.byteLength <= this._stashSize) {
                          var m = new Uint8Array(this._stashBuffer, 0, this._stashSize);
                          m.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength;
                        } else {
                          var m = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                          if (this._stashUsed > 0) {
                            var L = this._stashBuffer.slice(0, this._stashUsed), y = this._dispatchChunks(L, this._stashByteStart);
                            if (y < L.byteLength) {
                              if (y > 0) {
                                var g = new Uint8Array(L, y);
                                m.set(g, 0), this._stashUsed = g.byteLength, this._stashByteStart += y;
                              }
                            } else
                              this._stashUsed = 0, this._stashByteStart += y;
                            this._stashUsed + e.byteLength > this._bufferSize && (this._expandBuffer(this._stashUsed + e.byteLength), m = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), m.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength;
                          } else {
                            var y = this._dispatchChunks(e, d);
                            if (y < e.byteLength) {
                              var x = e.byteLength - y;
                              x > this._bufferSize && (this._expandBuffer(x), m = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), m.set(new Uint8Array(e, y), 0), this._stashUsed += x, this._stashByteStart = d + y;
                            }
                          }
                        }
                      else if (this._stashUsed === 0) {
                        var y = this._dispatchChunks(e, d);
                        if (y < e.byteLength) {
                          var x = e.byteLength - y;
                          x > this._bufferSize && this._expandBuffer(x);
                          var m = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                          m.set(new Uint8Array(e, y), 0), this._stashUsed += x, this._stashByteStart = d + y;
                        }
                      } else {
                        this._stashUsed + e.byteLength > this._bufferSize && this._expandBuffer(this._stashUsed + e.byteLength);
                        var m = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                        m.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength;
                        var y = this._dispatchChunks(this._stashBuffer.slice(0, this._stashUsed), this._stashByteStart);
                        if (y < this._stashUsed && y > 0) {
                          var g = new Uint8Array(this._stashBuffer, y);
                          m.set(g, 0);
                        }
                        this._stashUsed -= y, this._stashByteStart += y;
                      }
                    }
                  }, r.prototype._flushStashBuffer = function(e) {
                    if (this._stashUsed > 0) {
                      var d = this._stashBuffer.slice(0, this._stashUsed), _ = this._dispatchChunks(d, this._stashByteStart), c = d.byteLength - _;
                      if (_ < d.byteLength)
                        if (e)
                          E.default.w(this.TAG, c + " bytes unconsumed data remain when flush buffer, dropped");
                        else {
                          if (_ > 0) {
                            var v = new Uint8Array(this._stashBuffer, 0, this._bufferSize), y = new Uint8Array(d, _);
                            v.set(y, 0), this._stashUsed = y.byteLength, this._stashByteStart += _;
                          }
                          return 0;
                        }
                      return this._stashUsed = 0, this._stashByteStart = 0, c;
                    }
                    return 0;
                  }, r.prototype._onLoaderComplete = function(e, d) {
                    this._flushStashBuffer(!0), this._onComplete && this._onComplete(this._extraData);
                  }, r.prototype._onLoaderError = function(e, d) {
                    switch (E.default.e(this.TAG, "Loader error, code = " + d.code + ", msg = " + d.msg), this._flushStashBuffer(!1), this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, e = u.LoaderErrors.UNRECOVERABLE_EARLY_EOF), e) {
                      case u.LoaderErrors.EARLY_EOF: {
                        if (!this._config.isLive && this._totalLength) {
                          var _ = this._currentRange.to + 1;
                          _ < this._totalLength && (E.default.w(this.TAG, "Connection lost, trying reconnect..."), this._isEarlyEofReconnecting = !0, this._internalSeek(_, !1));
                          return;
                        }
                        e = u.LoaderErrors.UNRECOVERABLE_EARLY_EOF;
                        break;
                      }
                      case u.LoaderErrors.UNRECOVERABLE_EARLY_EOF:
                      case u.LoaderErrors.CONNECTING_TIMEOUT:
                      case u.LoaderErrors.HTTP_STATUS_CODE_INVALID:
                      case u.LoaderErrors.EXCEPTION:
                        break;
                    }
                    if (this._onError)
                      this._onError(e, d);
                    else
                      throw new t.RuntimeException("IOException: " + d.msg);
                  }, r;
                }()
              );
              S.default = n;
            }
          ),
          /***/
          "./src/io/loader.js": (
            /*!**************************!*\
              !*** ./src/io/loader.js ***!
              \**************************/
            /***/
            function(T, S, p) {
              p.r(S), p.d(S, {
                /* harmony export */
                LoaderStatus: function() {
                  return (
                    /* binding */
                    h
                  );
                },
                /* harmony export */
                LoaderErrors: function() {
                  return (
                    /* binding */
                    u
                  );
                },
                /* harmony export */
                BaseLoader: function() {
                  return (
                    /* binding */
                    a
                  );
                }
                /* harmony export */
              });
              var E = p(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), h = {
                kIdle: 0,
                kConnecting: 1,
                kBuffering: 2,
                kError: 3,
                kComplete: 4
              }, u = {
                OK: "OK",
                EXCEPTION: "Exception",
                HTTP_STATUS_CODE_INVALID: "HttpStatusCodeInvalid",
                CONNECTING_TIMEOUT: "ConnectingTimeout",
                EARLY_EOF: "EarlyEof",
                UNRECOVERABLE_EARLY_EOF: "UnrecoverableEarlyEof"
              }, a = (
                /** @class */
                function() {
                  function f(i) {
                    this._type = i || "undefined", this._status = h.kIdle, this._needStash = !1, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null;
                  }
                  return f.prototype.destroy = function() {
                    this._status = h.kIdle, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null;
                  }, f.prototype.isWorking = function() {
                    return this._status === h.kConnecting || this._status === h.kBuffering;
                  }, Object.defineProperty(f.prototype, "type", {
                    get: function() {
                      return this._type;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(f.prototype, "status", {
                    get: function() {
                      return this._status;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(f.prototype, "needStashBuffer", {
                    get: function() {
                      return this._needStash;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(f.prototype, "onContentLengthKnown", {
                    get: function() {
                      return this._onContentLengthKnown;
                    },
                    set: function(i) {
                      this._onContentLengthKnown = i;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(f.prototype, "onURLRedirect", {
                    get: function() {
                      return this._onURLRedirect;
                    },
                    set: function(i) {
                      this._onURLRedirect = i;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(f.prototype, "onDataArrival", {
                    get: function() {
                      return this._onDataArrival;
                    },
                    set: function(i) {
                      this._onDataArrival = i;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(f.prototype, "onError", {
                    get: function() {
                      return this._onError;
                    },
                    set: function(i) {
                      this._onError = i;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(f.prototype, "onComplete", {
                    get: function() {
                      return this._onComplete;
                    },
                    set: function(i) {
                      this._onComplete = i;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), f.prototype.open = function(i, o) {
                    throw new E.NotImplementedException("Unimplemented abstract function!");
                  }, f.prototype.abort = function() {
                    throw new E.NotImplementedException("Unimplemented abstract function!");
                  }, f;
                }()
              );
            }
          ),
          /***/
          "./src/io/param-seek-handler.js": (
            /*!**************************************!*\
              !*** ./src/io/param-seek-handler.js ***!
              \**************************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = (
                /** @class */
                function() {
                  function h(u, a) {
                    this._startName = u, this._endName = a;
                  }
                  return h.prototype.getConfig = function(u, a) {
                    var f = u;
                    if (a.from !== 0 || a.to !== -1) {
                      var i = !0;
                      f.indexOf("?") === -1 && (f += "?", i = !1), i && (f += "&"), f += this._startName + "=" + a.from.toString(), a.to !== -1 && (f += "&" + this._endName + "=" + a.to.toString());
                    }
                    return {
                      url: f,
                      headers: {}
                    };
                  }, h.prototype.removeURLParameters = function(u) {
                    var a = u.split("?")[0], f = void 0, i = u.indexOf("?");
                    i !== -1 && (f = u.substring(i + 1));
                    var o = "";
                    if (f != null && f.length > 0)
                      for (var l = f.split("&"), s = 0; s < l.length; s++) {
                        var t = l[s].split("="), n = s > 0;
                        t[0] !== this._startName && t[0] !== this._endName && (n && (o += "&"), o += l[s]);
                      }
                    return o.length === 0 ? a : a + "?" + o;
                  }, h;
                }()
              );
              S.default = E;
            }
          ),
          /***/
          "./src/io/range-seek-handler.js": (
            /*!**************************************!*\
              !*** ./src/io/range-seek-handler.js ***!
              \**************************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = (
                /** @class */
                function() {
                  function h(u) {
                    this._zeroStart = u || !1;
                  }
                  return h.prototype.getConfig = function(u, a) {
                    var f = {};
                    if (a.from !== 0 || a.to !== -1) {
                      var i = void 0;
                      a.to !== -1 ? i = "bytes=" + a.from.toString() + "-" + a.to.toString() : i = "bytes=" + a.from.toString() + "-", f.Range = i;
                    } else
                      this._zeroStart && (f.Range = "bytes=0-");
                    return {
                      url: u,
                      headers: f
                    };
                  }, h.prototype.removeURLParameters = function(u) {
                    return u;
                  }, h;
                }()
              );
              S.default = E;
            }
          ),
          /***/
          "./src/io/speed-sampler.js": (
            /*!*********************************!*\
              !*** ./src/io/speed-sampler.js ***!
              \*********************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = (
                /** @class */
                function() {
                  function h() {
                    this._firstCheckpoint = 0, this._lastCheckpoint = 0, this._intervalBytes = 0, this._totalBytes = 0, this._lastSecondBytes = 0, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now;
                  }
                  return h.prototype.reset = function() {
                    this._firstCheckpoint = this._lastCheckpoint = 0, this._totalBytes = this._intervalBytes = 0, this._lastSecondBytes = 0;
                  }, h.prototype.addBytes = function(u) {
                    this._firstCheckpoint === 0 ? (this._firstCheckpoint = this._now(), this._lastCheckpoint = this._firstCheckpoint, this._intervalBytes += u, this._totalBytes += u) : this._now() - this._lastCheckpoint < 1e3 ? (this._intervalBytes += u, this._totalBytes += u) : (this._lastSecondBytes = this._intervalBytes, this._intervalBytes = u, this._totalBytes += u, this._lastCheckpoint = this._now());
                  }, Object.defineProperty(h.prototype, "currentKBps", {
                    get: function() {
                      this.addBytes(0);
                      var u = (this._now() - this._lastCheckpoint) / 1e3;
                      return u == 0 && (u = 1), this._intervalBytes / u / 1024;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(h.prototype, "lastSecondKBps", {
                    get: function() {
                      return this.addBytes(0), this._lastSecondBytes !== 0 ? this._lastSecondBytes / 1024 : this._now() - this._lastCheckpoint >= 500 ? this.currentKBps : 0;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(h.prototype, "averageKBps", {
                    get: function() {
                      var u = (this._now() - this._firstCheckpoint) / 1e3;
                      return this._totalBytes / u / 1024;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), h;
                }()
              );
              S.default = E;
            }
          ),
          /***/
          "./src/io/websocket-loader.js": (
            /*!************************************!*\
              !*** ./src/io/websocket-loader.js ***!
              \************************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! ./loader.js */
                "./src/io/loader.js"
              ), h = p(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), u = /* @__PURE__ */ function() {
                var f = function(i, o) {
                  return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, s) {
                    l.__proto__ = s;
                  } || function(l, s) {
                    for (var t in s)
                      Object.prototype.hasOwnProperty.call(s, t) && (l[t] = s[t]);
                  }, f(i, o);
                };
                return function(i, o) {
                  if (typeof o != "function" && o !== null)
                    throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
                  f(i, o);
                  function l() {
                    this.constructor = i;
                  }
                  i.prototype = o === null ? Object.create(o) : (l.prototype = o.prototype, new l());
                };
              }(), a = (
                /** @class */
                function(f) {
                  u(i, f);
                  function i() {
                    var o = f.call(this, "websocket-loader") || this;
                    return o.TAG = "WebSocketLoader", o._needStash = !0, o._ws = null, o._requestAbort = !1, o._receivedLength = 0, o;
                  }
                  return i.isSupported = function() {
                    try {
                      return typeof self.WebSocket < "u";
                    } catch {
                      return !1;
                    }
                  }, i.prototype.destroy = function() {
                    this._ws && this.abort(), f.prototype.destroy.call(this);
                  }, i.prototype.open = function(o) {
                    try {
                      var l = this._ws = new self.WebSocket(o.url);
                      l.binaryType = "arraybuffer", l.onopen = this._onWebSocketOpen.bind(this), l.onclose = this._onWebSocketClose.bind(this), l.onmessage = this._onWebSocketMessage.bind(this), l.onerror = this._onWebSocketError.bind(this), this._status = E.LoaderStatus.kConnecting;
                    } catch (t) {
                      this._status = E.LoaderStatus.kError;
                      var s = { code: t.code, msg: t.message };
                      if (this._onError)
                        this._onError(E.LoaderErrors.EXCEPTION, s);
                      else
                        throw new h.RuntimeException(s.msg);
                    }
                  }, i.prototype.abort = function() {
                    var o = this._ws;
                    o && (o.readyState === 0 || o.readyState === 1) && (this._requestAbort = !0, o.close()), this._ws = null, this._status = E.LoaderStatus.kComplete;
                  }, i.prototype._onWebSocketOpen = function(o) {
                    this._status = E.LoaderStatus.kBuffering;
                  }, i.prototype._onWebSocketClose = function(o) {
                    if (this._requestAbort === !0) {
                      this._requestAbort = !1;
                      return;
                    }
                    this._status = E.LoaderStatus.kComplete, this._onComplete && this._onComplete(0, this._receivedLength - 1);
                  }, i.prototype._onWebSocketMessage = function(o) {
                    var l = this;
                    if (o.data instanceof ArrayBuffer)
                      this._dispatchArrayBuffer(o.data);
                    else if (o.data instanceof Blob) {
                      var s = new FileReader();
                      s.onload = function() {
                        l._dispatchArrayBuffer(s.result);
                      }, s.readAsArrayBuffer(o.data);
                    } else {
                      this._status = E.LoaderStatus.kError;
                      var t = { code: -1, msg: "Unsupported WebSocket message type: " + o.data.constructor.name };
                      if (this._onError)
                        this._onError(E.LoaderErrors.EXCEPTION, t);
                      else
                        throw new h.RuntimeException(t.msg);
                    }
                  }, i.prototype._dispatchArrayBuffer = function(o) {
                    var l = o, s = this._receivedLength;
                    this._receivedLength += l.byteLength, this._onDataArrival && this._onDataArrival(l, s, this._receivedLength);
                  }, i.prototype._onWebSocketError = function(o) {
                    this._status = E.LoaderStatus.kError;
                    var l = {
                      code: o.code,
                      msg: o.message
                    };
                    if (this._onError)
                      this._onError(E.LoaderErrors.EXCEPTION, l);
                    else
                      throw new h.RuntimeException(l.msg);
                  }, i;
                }(E.BaseLoader)
              );
              S.default = a;
            }
          ),
          /***/
          "./src/io/xhr-moz-chunked-loader.js": (
            /*!******************************************!*\
              !*** ./src/io/xhr-moz-chunked-loader.js ***!
              \******************************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), h = p(
                /*! ./loader.js */
                "./src/io/loader.js"
              ), u = p(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), a = /* @__PURE__ */ function() {
                var i = function(o, l) {
                  return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, t) {
                    s.__proto__ = t;
                  } || function(s, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) && (s[n] = t[n]);
                  }, i(o, l);
                };
                return function(o, l) {
                  if (typeof l != "function" && l !== null)
                    throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
                  i(o, l);
                  function s() {
                    this.constructor = o;
                  }
                  o.prototype = l === null ? Object.create(l) : (s.prototype = l.prototype, new s());
                };
              }(), f = (
                /** @class */
                function(i) {
                  a(o, i);
                  function o(l, s) {
                    var t = i.call(this, "xhr-moz-chunked-loader") || this;
                    return t.TAG = "MozChunkedLoader", t._seekHandler = l, t._config = s, t._needStash = !0, t._xhr = null, t._requestAbort = !1, t._contentLength = null, t._receivedLength = 0, t;
                  }
                  return o.isSupported = function() {
                    try {
                      var l = new XMLHttpRequest();
                      return l.open("GET", "https://example.com", !0), l.responseType = "moz-chunked-arraybuffer", l.responseType === "moz-chunked-arraybuffer";
                    } catch (s) {
                      return E.default.w("MozChunkedLoader", s.message), !1;
                    }
                  }, o.prototype.destroy = function() {
                    this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onloadend = null, this._xhr.onerror = null, this._xhr = null), i.prototype.destroy.call(this);
                  }, o.prototype.open = function(l, s) {
                    this._dataSource = l, this._range = s;
                    var t = l.url;
                    this._config.reuseRedirectedURL && l.redirectedURL != null && (t = l.redirectedURL);
                    var n = this._seekHandler.getConfig(t, s);
                    this._requestURL = n.url;
                    var r = this._xhr = new XMLHttpRequest();
                    if (r.open("GET", n.url, !0), r.responseType = "moz-chunked-arraybuffer", r.onreadystatechange = this._onReadyStateChange.bind(this), r.onprogress = this._onProgress.bind(this), r.onloadend = this._onLoadEnd.bind(this), r.onerror = this._onXhrError.bind(this), l.withCredentials && (r.withCredentials = !0), typeof n.headers == "object") {
                      var e = n.headers;
                      for (var d in e)
                        e.hasOwnProperty(d) && r.setRequestHeader(d, e[d]);
                    }
                    if (typeof this._config.headers == "object") {
                      var e = this._config.headers;
                      for (var d in e)
                        e.hasOwnProperty(d) && r.setRequestHeader(d, e[d]);
                    }
                    this._status = h.LoaderStatus.kConnecting, r.send();
                  }, o.prototype.abort = function() {
                    this._requestAbort = !0, this._xhr && this._xhr.abort(), this._status = h.LoaderStatus.kComplete;
                  }, o.prototype._onReadyStateChange = function(l) {
                    var s = l.target;
                    if (s.readyState === 2) {
                      if (s.responseURL != null && s.responseURL !== this._requestURL && this._onURLRedirect) {
                        var t = this._seekHandler.removeURLParameters(s.responseURL);
                        this._onURLRedirect(t);
                      }
                      if (s.status !== 0 && (s.status < 200 || s.status > 299))
                        if (this._status = h.LoaderStatus.kError, this._onError)
                          this._onError(h.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: s.status, msg: s.statusText });
                        else
                          throw new u.RuntimeException("MozChunkedLoader: Http code invalid, " + s.status + " " + s.statusText);
                      else
                        this._status = h.LoaderStatus.kBuffering;
                    }
                  }, o.prototype._onProgress = function(l) {
                    if (this._status !== h.LoaderStatus.kError) {
                      this._contentLength === null && l.total !== null && l.total !== 0 && (this._contentLength = l.total, this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength));
                      var s = l.target.response, t = this._range.from + this._receivedLength;
                      this._receivedLength += s.byteLength, this._onDataArrival && this._onDataArrival(s, t, this._receivedLength);
                    }
                  }, o.prototype._onLoadEnd = function(l) {
                    if (this._requestAbort === !0) {
                      this._requestAbort = !1;
                      return;
                    } else if (this._status === h.LoaderStatus.kError)
                      return;
                    this._status = h.LoaderStatus.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1);
                  }, o.prototype._onXhrError = function(l) {
                    this._status = h.LoaderStatus.kError;
                    var s = 0, t = null;
                    if (this._contentLength && l.loaded < this._contentLength ? (s = h.LoaderErrors.EARLY_EOF, t = { code: -1, msg: "Moz-Chunked stream meet Early-Eof" }) : (s = h.LoaderErrors.EXCEPTION, t = { code: -1, msg: l.constructor.name + " " + l.type }), this._onError)
                      this._onError(s, t);
                    else
                      throw new u.RuntimeException(t.msg);
                  }, o;
                }(h.BaseLoader)
              );
              S.default = f;
            }
          ),
          /***/
          "./src/io/xhr-range-loader.js": (
            /*!************************************!*\
              !*** ./src/io/xhr-range-loader.js ***!
              \************************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), h = p(
                /*! ./speed-sampler.js */
                "./src/io/speed-sampler.js"
              ), u = p(
                /*! ./loader.js */
                "./src/io/loader.js"
              ), a = p(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), f = /* @__PURE__ */ function() {
                var o = function(l, s) {
                  return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
                    t.__proto__ = n;
                  } || function(t, n) {
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                  }, o(l, s);
                };
                return function(l, s) {
                  if (typeof s != "function" && s !== null)
                    throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
                  o(l, s);
                  function t() {
                    this.constructor = l;
                  }
                  l.prototype = s === null ? Object.create(s) : (t.prototype = s.prototype, new t());
                };
              }(), i = (
                /** @class */
                function(o) {
                  f(l, o);
                  function l(s, t) {
                    var n = o.call(this, "xhr-range-loader") || this;
                    return n.TAG = "RangeLoader", n._seekHandler = s, n._config = t, n._needStash = !1, n._chunkSizeKBList = [
                      128,
                      256,
                      384,
                      512,
                      768,
                      1024,
                      1536,
                      2048,
                      3072,
                      4096,
                      5120,
                      6144,
                      7168,
                      8192
                    ], n._currentChunkSizeKB = 384, n._currentSpeedNormalized = 0, n._zeroSpeedChunkCount = 0, n._xhr = null, n._speedSampler = new h.default(), n._requestAbort = !1, n._waitForTotalLength = !1, n._totalLengthReceived = !1, n._currentRequestURL = null, n._currentRedirectedURL = null, n._currentRequestRange = null, n._totalLength = null, n._contentLength = null, n._receivedLength = 0, n._lastTimeLoaded = 0, n;
                  }
                  return l.isSupported = function() {
                    try {
                      var s = new XMLHttpRequest();
                      return s.open("GET", "https://example.com", !0), s.responseType = "arraybuffer", s.responseType === "arraybuffer";
                    } catch (t) {
                      return E.default.w("RangeLoader", t.message), !1;
                    }
                  }, l.prototype.destroy = function() {
                    this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr = null), o.prototype.destroy.call(this);
                  }, Object.defineProperty(l.prototype, "currentSpeed", {
                    get: function() {
                      return this._speedSampler.lastSecondKBps;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), l.prototype.open = function(s, t) {
                    this._dataSource = s, this._range = t, this._status = u.LoaderStatus.kConnecting;
                    var n = !1;
                    this._dataSource.filesize != null && this._dataSource.filesize !== 0 && (n = !0, this._totalLength = this._dataSource.filesize), !this._totalLengthReceived && !n ? (this._waitForTotalLength = !0, this._internalOpen(this._dataSource, { from: 0, to: -1 })) : this._openSubRange();
                  }, l.prototype._openSubRange = function() {
                    var s = this._currentChunkSizeKB * 1024, t = this._range.from + this._receivedLength, n = t + s;
                    this._contentLength != null && n - this._range.from >= this._contentLength && (n = this._range.from + this._contentLength - 1), this._currentRequestRange = { from: t, to: n }, this._internalOpen(this._dataSource, this._currentRequestRange);
                  }, l.prototype._internalOpen = function(s, t) {
                    this._lastTimeLoaded = 0;
                    var n = s.url;
                    this._config.reuseRedirectedURL && (this._currentRedirectedURL != null ? n = this._currentRedirectedURL : s.redirectedURL != null && (n = s.redirectedURL));
                    var r = this._seekHandler.getConfig(n, t);
                    this._currentRequestURL = r.url;
                    var e = this._xhr = new XMLHttpRequest();
                    if (e.open("GET", r.url, !0), e.responseType = "arraybuffer", e.onreadystatechange = this._onReadyStateChange.bind(this), e.onprogress = this._onProgress.bind(this), e.onload = this._onLoad.bind(this), e.onerror = this._onXhrError.bind(this), s.withCredentials && (e.withCredentials = !0), typeof r.headers == "object") {
                      var d = r.headers;
                      for (var _ in d)
                        d.hasOwnProperty(_) && e.setRequestHeader(_, d[_]);
                    }
                    if (typeof this._config.headers == "object") {
                      var d = this._config.headers;
                      for (var _ in d)
                        d.hasOwnProperty(_) && e.setRequestHeader(_, d[_]);
                    }
                    e.send();
                  }, l.prototype.abort = function() {
                    this._requestAbort = !0, this._internalAbort(), this._status = u.LoaderStatus.kComplete;
                  }, l.prototype._internalAbort = function() {
                    this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr.abort(), this._xhr = null);
                  }, l.prototype._onReadyStateChange = function(s) {
                    var t = s.target;
                    if (t.readyState === 2) {
                      if (t.responseURL != null) {
                        var n = this._seekHandler.removeURLParameters(t.responseURL);
                        t.responseURL !== this._currentRequestURL && n !== this._currentRedirectedURL && (this._currentRedirectedURL = n, this._onURLRedirect && this._onURLRedirect(n));
                      }
                      if (t.status >= 200 && t.status <= 299) {
                        if (this._waitForTotalLength)
                          return;
                        this._status = u.LoaderStatus.kBuffering;
                      } else if (this._status = u.LoaderStatus.kError, this._onError)
                        this._onError(u.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: t.status, msg: t.statusText });
                      else
                        throw new a.RuntimeException("RangeLoader: Http code invalid, " + t.status + " " + t.statusText);
                    }
                  }, l.prototype._onProgress = function(s) {
                    if (this._status !== u.LoaderStatus.kError) {
                      if (this._contentLength === null) {
                        var t = !1;
                        if (this._waitForTotalLength) {
                          this._waitForTotalLength = !1, this._totalLengthReceived = !0, t = !0;
                          var n = s.total;
                          this._internalAbort(), n != null & n !== 0 && (this._totalLength = n);
                        }
                        if (this._range.to === -1 ? this._contentLength = this._totalLength - this._range.from : this._contentLength = this._range.to - this._range.from + 1, t) {
                          this._openSubRange();
                          return;
                        }
                        this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength);
                      }
                      var r = s.loaded - this._lastTimeLoaded;
                      this._lastTimeLoaded = s.loaded, this._speedSampler.addBytes(r);
                    }
                  }, l.prototype._normalizeSpeed = function(s) {
                    var t = this._chunkSizeKBList, n = t.length - 1, r = 0, e = 0, d = n;
                    if (s < t[0])
                      return t[0];
                    for (; e <= d; ) {
                      if (r = e + Math.floor((d - e) / 2), r === n || s >= t[r] && s < t[r + 1])
                        return t[r];
                      t[r] < s ? e = r + 1 : d = r - 1;
                    }
                  }, l.prototype._onLoad = function(s) {
                    if (this._status !== u.LoaderStatus.kError) {
                      if (this._waitForTotalLength) {
                        this._waitForTotalLength = !1;
                        return;
                      }
                      this._lastTimeLoaded = 0;
                      var t = this._speedSampler.lastSecondKBps;
                      if (t === 0 && (this._zeroSpeedChunkCount++, this._zeroSpeedChunkCount >= 3 && (t = this._speedSampler.currentKBps)), t !== 0) {
                        var n = this._normalizeSpeed(t);
                        this._currentSpeedNormalized !== n && (this._currentSpeedNormalized = n, this._currentChunkSizeKB = n);
                      }
                      var r = s.target.response, e = this._range.from + this._receivedLength;
                      this._receivedLength += r.byteLength;
                      var d = !1;
                      this._contentLength != null && this._receivedLength < this._contentLength ? this._openSubRange() : d = !0, this._onDataArrival && this._onDataArrival(r, e, this._receivedLength), d && (this._status = u.LoaderStatus.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1));
                    }
                  }, l.prototype._onXhrError = function(s) {
                    this._status = u.LoaderStatus.kError;
                    var t = 0, n = null;
                    if (this._contentLength && this._receivedLength > 0 && this._receivedLength < this._contentLength ? (t = u.LoaderErrors.EARLY_EOF, n = { code: -1, msg: "RangeLoader meet Early-Eof" }) : (t = u.LoaderErrors.EXCEPTION, n = { code: -1, msg: s.constructor.name + " " + s.type }), this._onError)
                      this._onError(t, n);
                    else
                      throw new a.RuntimeException(n.msg);
                  }, l;
                }(u.BaseLoader)
              );
              S.default = i;
            }
          ),
          /***/
          "./src/player/flv-player.js": (
            /*!**********************************!*\
              !*** ./src/player/flv-player.js ***!
              \**********************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! events */
                "./node_modules/events/events.js"
              ), h = /* @__PURE__ */ p.n(E), u = p(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), a = p(
                /*! ../utils/browser.js */
                "./src/utils/browser.js"
              ), f = p(
                /*! ./player-events.js */
                "./src/player/player-events.js"
              ), i = p(
                /*! ../core/transmuxer.js */
                "./src/core/transmuxer.js"
              ), o = p(
                /*! ../core/transmuxing-events.js */
                "./src/core/transmuxing-events.js"
              ), l = p(
                /*! ../core/mse-controller.js */
                "./src/core/mse-controller.js"
              ), s = p(
                /*! ../core/mse-events.js */
                "./src/core/mse-events.js"
              ), t = p(
                /*! ./player-errors.js */
                "./src/player/player-errors.js"
              ), n = p(
                /*! ../config.js */
                "./src/config.js"
              ), r = p(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), e = (
                /** @class */
                function() {
                  function d(_, c) {
                    if (this.TAG = "FlvPlayer", this._type = "FlvPlayer", this._emitter = new (h())(), this._config = (0, n.createDefaultConfig)(), typeof c == "object" && Object.assign(this._config, c), _.type.toLowerCase() !== "flv")
                      throw new r.InvalidArgumentException("FlvPlayer requires an flv MediaDataSource input!");
                    _.isLive === !0 && (this._config.isLive = !0), this.e = {
                      onvLoadedMetadata: this._onvLoadedMetadata.bind(this),
                      onvSeeking: this._onvSeeking.bind(this),
                      onvCanPlay: this._onvCanPlay.bind(this),
                      onvStalled: this._onvStalled.bind(this),
                      onvProgress: this._onvProgress.bind(this)
                    }, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now, this._pendingSeekTime = null, this._requestSetTime = !1, this._seekpointRecord = null, this._progressChecker = null, this._mediaDataSource = _, this._mediaElement = null, this._msectl = null, this._transmuxer = null, this._mseSourceOpened = !1, this._hasPendingLoad = !1, this._receivedCanPlay = !1, this._mediaInfo = null, this._statisticsInfo = null;
                    var v = a.default.chrome && (a.default.version.major < 50 || a.default.version.major === 50 && a.default.version.build < 2661);
                    this._alwaysSeekKeyframe = !!(v || a.default.msedge || a.default.msie), this._alwaysSeekKeyframe && (this._config.accurateSeek = !1);
                  }
                  return d.prototype.destroy = function() {
                    this._progressChecker != null && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._transmuxer && this.unload(), this._mediaElement && this.detachMediaElement(), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null;
                  }, d.prototype.on = function(_, c) {
                    var v = this;
                    _ === f.default.MEDIA_INFO ? this._mediaInfo != null && Promise.resolve().then(function() {
                      v._emitter.emit(f.default.MEDIA_INFO, v.mediaInfo);
                    }) : _ === f.default.STATISTICS_INFO && this._statisticsInfo != null && Promise.resolve().then(function() {
                      v._emitter.emit(f.default.STATISTICS_INFO, v.statisticsInfo);
                    }), this._emitter.addListener(_, c);
                  }, d.prototype.off = function(_, c) {
                    this._emitter.removeListener(_, c);
                  }, d.prototype.attachMediaElement = function(_) {
                    var c = this;
                    if (this._mediaElement = _, _.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), _.addEventListener("seeking", this.e.onvSeeking), _.addEventListener("canplay", this.e.onvCanPlay), _.addEventListener("stalled", this.e.onvStalled), _.addEventListener("progress", this.e.onvProgress), this._msectl = new l.default(this._config), this._msectl.on(s.default.UPDATE_END, this._onmseUpdateEnd.bind(this)), this._msectl.on(s.default.BUFFER_FULL, this._onmseBufferFull.bind(this)), this._msectl.on(s.default.SOURCE_OPEN, function() {
                      c._mseSourceOpened = !0, c._hasPendingLoad && (c._hasPendingLoad = !1, c.load());
                    }), this._msectl.on(s.default.ERROR, function(v) {
                      c._emitter.emit(f.default.ERROR, t.ErrorTypes.MEDIA_ERROR, t.ErrorDetails.MEDIA_MSE_ERROR, v);
                    }), this._msectl.attachMediaElement(_), this._pendingSeekTime != null)
                      try {
                        _.currentTime = this._pendingSeekTime, this._pendingSeekTime = null;
                      } catch {
                      }
                  }, d.prototype.detachMediaElement = function() {
                    this._mediaElement && (this._msectl.detachMediaElement(), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement.removeEventListener("seeking", this.e.onvSeeking), this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay), this._mediaElement.removeEventListener("stalled", this.e.onvStalled), this._mediaElement.removeEventListener("progress", this.e.onvProgress), this._mediaElement = null), this._msectl && (this._msectl.destroy(), this._msectl = null);
                  }, d.prototype.load = function() {
                    var _ = this;
                    if (!this._mediaElement)
                      throw new r.IllegalStateException("HTMLMediaElement must be attached before load()!");
                    if (this._transmuxer)
                      throw new r.IllegalStateException("FlvPlayer.load() has been called, please call unload() first!");
                    if (!this._hasPendingLoad) {
                      if (this._config.deferLoadAfterSourceOpen && this._mseSourceOpened === !1) {
                        this._hasPendingLoad = !0;
                        return;
                      }
                      this._mediaElement.readyState > 0 && (this._requestSetTime = !0, this._mediaElement.currentTime = 0), this._transmuxer = new i.default(this._mediaDataSource, this._config), this._transmuxer.on(o.default.INIT_SEGMENT, function(c, v) {
                        _._msectl.appendInitSegment(v);
                      }), this._transmuxer.on(o.default.MEDIA_SEGMENT, function(c, v) {
                        if (_._msectl.appendMediaSegment(v), _._config.lazyLoad && !_._config.isLive) {
                          var y = _._mediaElement.currentTime;
                          v.info.endDts >= (y + _._config.lazyLoadMaxDuration) * 1e3 && _._progressChecker == null && (u.default.v(_.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), _._suspendTransmuxer());
                        }
                      }), this._transmuxer.on(o.default.LOADING_COMPLETE, function() {
                        _._msectl.endOfStream(), _._emitter.emit(f.default.LOADING_COMPLETE);
                      }), this._transmuxer.on(o.default.RECOVERED_EARLY_EOF, function() {
                        _._emitter.emit(f.default.RECOVERED_EARLY_EOF);
                      }), this._transmuxer.on(o.default.IO_ERROR, function(c, v) {
                        _._emitter.emit(f.default.ERROR, t.ErrorTypes.NETWORK_ERROR, c, v);
                      }), this._transmuxer.on(o.default.DEMUX_ERROR, function(c, v) {
                        _._emitter.emit(f.default.ERROR, t.ErrorTypes.MEDIA_ERROR, c, { code: -1, msg: v });
                      }), this._transmuxer.on(o.default.MEDIA_INFO, function(c) {
                        _._mediaInfo = c, _._emitter.emit(f.default.MEDIA_INFO, Object.assign({}, c));
                      }), this._transmuxer.on(o.default.METADATA_ARRIVED, function(c) {
                        _._emitter.emit(f.default.METADATA_ARRIVED, c);
                      }), this._transmuxer.on(o.default.SCRIPTDATA_ARRIVED, function(c) {
                        _._emitter.emit(f.default.SCRIPTDATA_ARRIVED, c);
                      }), this._transmuxer.on(o.default.STATISTICS_INFO, function(c) {
                        _._statisticsInfo = _._fillStatisticsInfo(c), _._emitter.emit(f.default.STATISTICS_INFO, Object.assign({}, _._statisticsInfo));
                      }), this._transmuxer.on(o.default.RECOMMEND_SEEKPOINT, function(c) {
                        _._mediaElement && !_._config.accurateSeek && (_._requestSetTime = !0, _._mediaElement.currentTime = c / 1e3);
                      }), this._transmuxer.open();
                    }
                  }, d.prototype.unload = function() {
                    this._mediaElement && this._mediaElement.pause(), this._msectl && this._msectl.seek(0), this._transmuxer && (this._transmuxer.close(), this._transmuxer.destroy(), this._transmuxer = null);
                  }, d.prototype.play = function() {
                    return this._mediaElement.play();
                  }, d.prototype.pause = function() {
                    this._mediaElement.pause();
                  }, Object.defineProperty(d.prototype, "type", {
                    get: function() {
                      return this._type;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(d.prototype, "buffered", {
                    get: function() {
                      return this._mediaElement.buffered;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(d.prototype, "duration", {
                    get: function() {
                      return this._mediaElement.duration;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(d.prototype, "volume", {
                    get: function() {
                      return this._mediaElement.volume;
                    },
                    set: function(_) {
                      this._mediaElement.volume = _;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(d.prototype, "muted", {
                    get: function() {
                      return this._mediaElement.muted;
                    },
                    set: function(_) {
                      this._mediaElement.muted = _;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(d.prototype, "currentTime", {
                    get: function() {
                      return this._mediaElement ? this._mediaElement.currentTime : 0;
                    },
                    set: function(_) {
                      this._mediaElement ? this._internalSeek(_) : this._pendingSeekTime = _;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(d.prototype, "mediaInfo", {
                    get: function() {
                      return Object.assign({}, this._mediaInfo);
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(d.prototype, "statisticsInfo", {
                    get: function() {
                      return this._statisticsInfo == null && (this._statisticsInfo = {}), this._statisticsInfo = this._fillStatisticsInfo(this._statisticsInfo), Object.assign({}, this._statisticsInfo);
                    },
                    enumerable: !1,
                    configurable: !0
                  }), d.prototype._fillStatisticsInfo = function(_) {
                    if (_.playerType = this._type, !(this._mediaElement instanceof HTMLVideoElement))
                      return _;
                    var c = !0, v = 0, y = 0;
                    if (this._mediaElement.getVideoPlaybackQuality) {
                      var x = this._mediaElement.getVideoPlaybackQuality();
                      v = x.totalVideoFrames, y = x.droppedVideoFrames;
                    } else
                      this._mediaElement.webkitDecodedFrameCount != null ? (v = this._mediaElement.webkitDecodedFrameCount, y = this._mediaElement.webkitDroppedFrameCount) : c = !1;
                    return c && (_.decodedFrames = v, _.droppedFrames = y), _;
                  }, d.prototype._onmseUpdateEnd = function() {
                    if (!(!this._config.lazyLoad || this._config.isLive)) {
                      for (var _ = this._mediaElement.buffered, c = this._mediaElement.currentTime, v = 0, y = 0; y < _.length; y++) {
                        var x = _.start(y), m = _.end(y);
                        if (x <= c && c < m) {
                          v = m;
                          break;
                        }
                      }
                      v >= c + this._config.lazyLoadMaxDuration && this._progressChecker == null && (u.default.v(this.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), this._suspendTransmuxer());
                    }
                  }, d.prototype._onmseBufferFull = function() {
                    u.default.v(this.TAG, "MSE SourceBuffer is full, suspend transmuxing task"), this._progressChecker == null && this._suspendTransmuxer();
                  }, d.prototype._suspendTransmuxer = function() {
                    this._transmuxer && (this._transmuxer.pause(), this._progressChecker == null && (this._progressChecker = window.setInterval(this._checkProgressAndResume.bind(this), 1e3)));
                  }, d.prototype._checkProgressAndResume = function() {
                    for (var _ = this._mediaElement.currentTime, c = this._mediaElement.buffered, v = !1, y = 0; y < c.length; y++) {
                      var x = c.start(y), m = c.end(y);
                      if (_ >= x && _ < m) {
                        _ >= m - this._config.lazyLoadRecoverDuration && (v = !0);
                        break;
                      }
                    }
                    v && (window.clearInterval(this._progressChecker), this._progressChecker = null, v && (u.default.v(this.TAG, "Continue loading from paused position"), this._transmuxer.resume()));
                  }, d.prototype._isTimepointBuffered = function(_) {
                    for (var c = this._mediaElement.buffered, v = 0; v < c.length; v++) {
                      var y = c.start(v), x = c.end(v);
                      if (_ >= y && _ < x)
                        return !0;
                    }
                    return !1;
                  }, d.prototype._internalSeek = function(_) {
                    var c = this._isTimepointBuffered(_), v = !1, y = 0;
                    if (_ < 1 && this._mediaElement.buffered.length > 0) {
                      var x = this._mediaElement.buffered.start(0);
                      (x < 1 && _ < x || a.default.safari) && (v = !0, y = a.default.safari ? 0.1 : x);
                    }
                    if (v)
                      this._requestSetTime = !0, this._mediaElement.currentTime = y;
                    else if (c) {
                      if (!this._alwaysSeekKeyframe)
                        this._requestSetTime = !0, this._mediaElement.currentTime = _;
                      else {
                        var m = this._msectl.getNearestKeyframe(Math.floor(_ * 1e3));
                        this._requestSetTime = !0, m != null ? this._mediaElement.currentTime = m.dts / 1e3 : this._mediaElement.currentTime = _;
                      }
                      this._progressChecker != null && this._checkProgressAndResume();
                    } else
                      this._progressChecker != null && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._msectl.seek(_), this._transmuxer.seek(Math.floor(_ * 1e3)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = _);
                  }, d.prototype._checkAndApplyUnbufferedSeekpoint = function() {
                    if (this._seekpointRecord)
                      if (this._seekpointRecord.recordTime <= this._now() - 100) {
                        var _ = this._mediaElement.currentTime;
                        this._seekpointRecord = null, this._isTimepointBuffered(_) || (this._progressChecker != null && (window.clearTimeout(this._progressChecker), this._progressChecker = null), this._msectl.seek(_), this._transmuxer.seek(Math.floor(_ * 1e3)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = _));
                      } else
                        window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
                  }, d.prototype._checkAndResumeStuckPlayback = function(_) {
                    var c = this._mediaElement;
                    if (_ || !this._receivedCanPlay || c.readyState < 2) {
                      var v = c.buffered;
                      v.length > 0 && c.currentTime < v.start(0) && (u.default.w(this.TAG, "Playback seems stuck at " + c.currentTime + ", seek to " + v.start(0)), this._requestSetTime = !0, this._mediaElement.currentTime = v.start(0), this._mediaElement.removeEventListener("progress", this.e.onvProgress));
                    } else
                      this._mediaElement.removeEventListener("progress", this.e.onvProgress);
                  }, d.prototype._onvLoadedMetadata = function(_) {
                    this._pendingSeekTime != null && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null);
                  }, d.prototype._onvSeeking = function(_) {
                    var c = this._mediaElement.currentTime, v = this._mediaElement.buffered;
                    if (this._requestSetTime) {
                      this._requestSetTime = !1;
                      return;
                    }
                    if (c < 1 && v.length > 0) {
                      var y = v.start(0);
                      if (y < 1 && c < y || a.default.safari) {
                        this._requestSetTime = !0, this._mediaElement.currentTime = a.default.safari ? 0.1 : y;
                        return;
                      }
                    }
                    if (this._isTimepointBuffered(c)) {
                      if (this._alwaysSeekKeyframe) {
                        var x = this._msectl.getNearestKeyframe(Math.floor(c * 1e3));
                        x != null && (this._requestSetTime = !0, this._mediaElement.currentTime = x.dts / 1e3);
                      }
                      this._progressChecker != null && this._checkProgressAndResume();
                      return;
                    }
                    this._seekpointRecord = {
                      seekPoint: c,
                      recordTime: this._now()
                    }, window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
                  }, d.prototype._onvCanPlay = function(_) {
                    this._receivedCanPlay = !0, this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay);
                  }, d.prototype._onvStalled = function(_) {
                    this._checkAndResumeStuckPlayback(!0);
                  }, d.prototype._onvProgress = function(_) {
                    this._checkAndResumeStuckPlayback();
                  }, d;
                }()
              );
              S.default = e;
            }
          ),
          /***/
          "./src/player/native-player.js": (
            /*!*************************************!*\
              !*** ./src/player/native-player.js ***!
              \*************************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! events */
                "./node_modules/events/events.js"
              ), h = /* @__PURE__ */ p.n(E), u = p(
                /*! ./player-events.js */
                "./src/player/player-events.js"
              ), a = p(
                /*! ../config.js */
                "./src/config.js"
              ), f = p(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), i = (
                /** @class */
                function() {
                  function o(l, s) {
                    if (this.TAG = "NativePlayer", this._type = "NativePlayer", this._emitter = new (h())(), this._config = (0, a.createDefaultConfig)(), typeof s == "object" && Object.assign(this._config, s), l.type.toLowerCase() === "flv")
                      throw new f.InvalidArgumentException("NativePlayer does't support flv MediaDataSource input!");
                    if (l.hasOwnProperty("segments"))
                      throw new f.InvalidArgumentException("NativePlayer(" + l.type + ") doesn't support multipart playback!");
                    this.e = {
                      onvLoadedMetadata: this._onvLoadedMetadata.bind(this)
                    }, this._pendingSeekTime = null, this._statisticsReporter = null, this._mediaDataSource = l, this._mediaElement = null;
                  }
                  return o.prototype.destroy = function() {
                    this._mediaElement && (this.unload(), this.detachMediaElement()), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null;
                  }, o.prototype.on = function(l, s) {
                    var t = this;
                    l === u.default.MEDIA_INFO ? this._mediaElement != null && this._mediaElement.readyState !== 0 && Promise.resolve().then(function() {
                      t._emitter.emit(u.default.MEDIA_INFO, t.mediaInfo);
                    }) : l === u.default.STATISTICS_INFO && this._mediaElement != null && this._mediaElement.readyState !== 0 && Promise.resolve().then(function() {
                      t._emitter.emit(u.default.STATISTICS_INFO, t.statisticsInfo);
                    }), this._emitter.addListener(l, s);
                  }, o.prototype.off = function(l, s) {
                    this._emitter.removeListener(l, s);
                  }, o.prototype.attachMediaElement = function(l) {
                    if (this._mediaElement = l, l.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._pendingSeekTime != null)
                      try {
                        l.currentTime = this._pendingSeekTime, this._pendingSeekTime = null;
                      } catch {
                      }
                  }, o.prototype.detachMediaElement = function() {
                    this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement = null), this._statisticsReporter != null && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
                  }, o.prototype.load = function() {
                    if (!this._mediaElement)
                      throw new f.IllegalStateException("HTMLMediaElement must be attached before load()!");
                    this._mediaElement.src = this._mediaDataSource.url, this._mediaElement.readyState > 0 && (this._mediaElement.currentTime = 0), this._mediaElement.preload = "auto", this._mediaElement.load(), this._statisticsReporter = window.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval);
                  }, o.prototype.unload = function() {
                    this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src")), this._statisticsReporter != null && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
                  }, o.prototype.play = function() {
                    return this._mediaElement.play();
                  }, o.prototype.pause = function() {
                    this._mediaElement.pause();
                  }, Object.defineProperty(o.prototype, "type", {
                    get: function() {
                      return this._type;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(o.prototype, "buffered", {
                    get: function() {
                      return this._mediaElement.buffered;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(o.prototype, "duration", {
                    get: function() {
                      return this._mediaElement.duration;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(o.prototype, "volume", {
                    get: function() {
                      return this._mediaElement.volume;
                    },
                    set: function(l) {
                      this._mediaElement.volume = l;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(o.prototype, "muted", {
                    get: function() {
                      return this._mediaElement.muted;
                    },
                    set: function(l) {
                      this._mediaElement.muted = l;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(o.prototype, "currentTime", {
                    get: function() {
                      return this._mediaElement ? this._mediaElement.currentTime : 0;
                    },
                    set: function(l) {
                      this._mediaElement ? this._mediaElement.currentTime = l : this._pendingSeekTime = l;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(o.prototype, "mediaInfo", {
                    get: function() {
                      var l = this._mediaElement instanceof HTMLAudioElement ? "audio/" : "video/", s = {
                        mimeType: l + this._mediaDataSource.type
                      };
                      return this._mediaElement && (s.duration = Math.floor(this._mediaElement.duration * 1e3), this._mediaElement instanceof HTMLVideoElement && (s.width = this._mediaElement.videoWidth, s.height = this._mediaElement.videoHeight)), s;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(o.prototype, "statisticsInfo", {
                    get: function() {
                      var l = {
                        playerType: this._type,
                        url: this._mediaDataSource.url
                      };
                      if (!(this._mediaElement instanceof HTMLVideoElement))
                        return l;
                      var s = !0, t = 0, n = 0;
                      if (this._mediaElement.getVideoPlaybackQuality) {
                        var r = this._mediaElement.getVideoPlaybackQuality();
                        t = r.totalVideoFrames, n = r.droppedVideoFrames;
                      } else
                        this._mediaElement.webkitDecodedFrameCount != null ? (t = this._mediaElement.webkitDecodedFrameCount, n = this._mediaElement.webkitDroppedFrameCount) : s = !1;
                      return s && (l.decodedFrames = t, l.droppedFrames = n), l;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), o.prototype._onvLoadedMetadata = function(l) {
                    this._pendingSeekTime != null && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null), this._emitter.emit(u.default.MEDIA_INFO, this.mediaInfo);
                  }, o.prototype._reportStatisticsInfo = function() {
                    this._emitter.emit(u.default.STATISTICS_INFO, this.statisticsInfo);
                  }, o;
                }()
              );
              S.default = i;
            }
          ),
          /***/
          "./src/player/player-errors.js": (
            /*!*************************************!*\
              !*** ./src/player/player-errors.js ***!
              \*************************************/
            /***/
            function(T, S, p) {
              p.r(S), p.d(S, {
                /* harmony export */
                ErrorTypes: function() {
                  return (
                    /* binding */
                    u
                  );
                },
                /* harmony export */
                ErrorDetails: function() {
                  return (
                    /* binding */
                    a
                  );
                }
                /* harmony export */
              });
              var E = p(
                /*! ../io/loader.js */
                "./src/io/loader.js"
              ), h = p(
                /*! ../demux/demux-errors.js */
                "./src/demux/demux-errors.js"
              ), u = {
                NETWORK_ERROR: "NetworkError",
                MEDIA_ERROR: "MediaError",
                OTHER_ERROR: "OtherError"
              }, a = {
                NETWORK_EXCEPTION: E.LoaderErrors.EXCEPTION,
                NETWORK_STATUS_CODE_INVALID: E.LoaderErrors.HTTP_STATUS_CODE_INVALID,
                NETWORK_TIMEOUT: E.LoaderErrors.CONNECTING_TIMEOUT,
                NETWORK_UNRECOVERABLE_EARLY_EOF: E.LoaderErrors.UNRECOVERABLE_EARLY_EOF,
                MEDIA_MSE_ERROR: "MediaMSEError",
                MEDIA_FORMAT_ERROR: h.default.FORMAT_ERROR,
                MEDIA_FORMAT_UNSUPPORTED: h.default.FORMAT_UNSUPPORTED,
                MEDIA_CODEC_UNSUPPORTED: h.default.CODEC_UNSUPPORTED
              };
            }
          ),
          /***/
          "./src/player/player-events.js": (
            /*!*************************************!*\
              !*** ./src/player/player-events.js ***!
              \*************************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = {
                ERROR: "error",
                LOADING_COMPLETE: "loading_complete",
                RECOVERED_EARLY_EOF: "recovered_early_eof",
                MEDIA_INFO: "media_info",
                METADATA_ARRIVED: "metadata_arrived",
                SCRIPTDATA_ARRIVED: "scriptdata_arrived",
                STATISTICS_INFO: "statistics_info"
              };
              S.default = E;
            }
          ),
          /***/
          "./src/remux/aac-silent.js": (
            /*!*********************************!*\
              !*** ./src/remux/aac-silent.js ***!
              \*********************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = (
                /** @class */
                function() {
                  function h() {
                  }
                  return h.getSilentFrame = function(u, a) {
                    if (u === "mp4a.40.2") {
                      if (a === 1)
                        return new Uint8Array([0, 200, 0, 128, 35, 128]);
                      if (a === 2)
                        return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                      if (a === 3)
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                      if (a === 4)
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                      if (a === 5)
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                      if (a === 6)
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                    } else {
                      if (a === 1)
                        return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                      if (a === 2)
                        return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                      if (a === 3)
                        return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                    }
                    return null;
                  }, h;
                }()
              );
              S.default = E;
            }
          ),
          /***/
          "./src/remux/mp4-generator.js": (
            /*!************************************!*\
              !*** ./src/remux/mp4-generator.js ***!
              \************************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = (
                /** @class */
                function() {
                  function h() {
                  }
                  return h.init = function() {
                    h.types = {
                      avc1: [],
                      avcC: [],
                      btrt: [],
                      dinf: [],
                      dref: [],
                      esds: [],
                      ftyp: [],
                      hdlr: [],
                      mdat: [],
                      mdhd: [],
                      mdia: [],
                      mfhd: [],
                      minf: [],
                      moof: [],
                      moov: [],
                      mp4a: [],
                      mvex: [],
                      mvhd: [],
                      sdtp: [],
                      stbl: [],
                      stco: [],
                      stsc: [],
                      stsd: [],
                      stsz: [],
                      stts: [],
                      tfdt: [],
                      tfhd: [],
                      traf: [],
                      trak: [],
                      trun: [],
                      trex: [],
                      tkhd: [],
                      vmhd: [],
                      smhd: [],
                      ".mp3": []
                    };
                    for (var u in h.types)
                      h.types.hasOwnProperty(u) && (h.types[u] = [
                        u.charCodeAt(0),
                        u.charCodeAt(1),
                        u.charCodeAt(2),
                        u.charCodeAt(3)
                      ]);
                    var a = h.constants = {};
                    a.FTYP = new Uint8Array([
                      105,
                      115,
                      111,
                      109,
                      0,
                      0,
                      0,
                      1,
                      105,
                      115,
                      111,
                      109,
                      97,
                      118,
                      99,
                      49
                      // avc1
                    ]), a.STSD_PREFIX = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1
                      // entry_count
                    ]), a.STTS = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0
                      // entry_count
                    ]), a.STSC = a.STCO = a.STTS, a.STSZ = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0
                      // sample_count
                    ]), a.HDLR_VIDEO = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      118,
                      105,
                      100,
                      101,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      86,
                      105,
                      100,
                      101,
                      111,
                      72,
                      97,
                      110,
                      100,
                      108,
                      101,
                      114,
                      0
                      // name: VideoHandler
                    ]), a.HDLR_AUDIO = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      115,
                      111,
                      117,
                      110,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      83,
                      111,
                      117,
                      110,
                      100,
                      72,
                      97,
                      110,
                      100,
                      108,
                      101,
                      114,
                      0
                      // name: SoundHandler
                    ]), a.DREF = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      12,
                      117,
                      114,
                      108,
                      32,
                      0,
                      0,
                      0,
                      1
                      // version(0) + flags
                    ]), a.SMHD = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0
                      // balance(2) + reserved(2)
                    ]), a.VMHD = new Uint8Array([
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0
                    ]);
                  }, h.box = function(u) {
                    for (var a = 8, f = null, i = Array.prototype.slice.call(arguments, 1), o = i.length, l = 0; l < o; l++)
                      a += i[l].byteLength;
                    f = new Uint8Array(a), f[0] = a >>> 24 & 255, f[1] = a >>> 16 & 255, f[2] = a >>> 8 & 255, f[3] = a & 255, f.set(u, 4);
                    for (var s = 8, l = 0; l < o; l++)
                      f.set(i[l], s), s += i[l].byteLength;
                    return f;
                  }, h.generateInitSegment = function(u) {
                    var a = h.box(h.types.ftyp, h.constants.FTYP), f = h.moov(u), i = new Uint8Array(a.byteLength + f.byteLength);
                    return i.set(a, 0), i.set(f, a.byteLength), i;
                  }, h.moov = function(u) {
                    var a = h.mvhd(u.timescale, u.duration), f = h.trak(u), i = h.mvex(u);
                    return h.box(h.types.moov, a, f, i);
                  }, h.mvhd = function(u, a) {
                    return h.box(h.types.mvhd, new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      u >>> 24 & 255,
                      u >>> 16 & 255,
                      u >>> 8 & 255,
                      u & 255,
                      a >>> 24 & 255,
                      a >>> 16 & 255,
                      a >>> 8 & 255,
                      a & 255,
                      0,
                      1,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      64,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      255,
                      255,
                      255,
                      255
                      // next_track_ID
                    ]));
                  }, h.trak = function(u) {
                    return h.box(h.types.trak, h.tkhd(u), h.mdia(u));
                  }, h.tkhd = function(u) {
                    var a = u.id, f = u.duration, i = u.presentWidth, o = u.presentHeight;
                    return h.box(h.types.tkhd, new Uint8Array([
                      0,
                      0,
                      0,
                      7,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      a >>> 24 & 255,
                      a >>> 16 & 255,
                      a >>> 8 & 255,
                      a & 255,
                      0,
                      0,
                      0,
                      0,
                      f >>> 24 & 255,
                      f >>> 16 & 255,
                      f >>> 8 & 255,
                      f & 255,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      64,
                      0,
                      0,
                      0,
                      i >>> 8 & 255,
                      i & 255,
                      0,
                      0,
                      o >>> 8 & 255,
                      o & 255,
                      0,
                      0
                    ]));
                  }, h.mdia = function(u) {
                    return h.box(h.types.mdia, h.mdhd(u), h.hdlr(u), h.minf(u));
                  }, h.mdhd = function(u) {
                    var a = u.timescale, f = u.duration;
                    return h.box(h.types.mdhd, new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      a >>> 24 & 255,
                      a >>> 16 & 255,
                      a >>> 8 & 255,
                      a & 255,
                      f >>> 24 & 255,
                      f >>> 16 & 255,
                      f >>> 8 & 255,
                      f & 255,
                      85,
                      196,
                      0,
                      0
                      // pre_defined = 0
                    ]));
                  }, h.hdlr = function(u) {
                    var a = null;
                    return u.type === "audio" ? a = h.constants.HDLR_AUDIO : a = h.constants.HDLR_VIDEO, h.box(h.types.hdlr, a);
                  }, h.minf = function(u) {
                    var a = null;
                    return u.type === "audio" ? a = h.box(h.types.smhd, h.constants.SMHD) : a = h.box(h.types.vmhd, h.constants.VMHD), h.box(h.types.minf, a, h.dinf(), h.stbl(u));
                  }, h.dinf = function() {
                    var u = h.box(h.types.dinf, h.box(h.types.dref, h.constants.DREF));
                    return u;
                  }, h.stbl = function(u) {
                    var a = h.box(
                      h.types.stbl,
                      // type: stbl
                      h.stsd(u),
                      // Sample Description Table
                      h.box(h.types.stts, h.constants.STTS),
                      // Time-To-Sample
                      h.box(h.types.stsc, h.constants.STSC),
                      // Sample-To-Chunk
                      h.box(h.types.stsz, h.constants.STSZ),
                      // Sample size
                      h.box(h.types.stco, h.constants.STCO)
                      // Chunk offset
                    );
                    return a;
                  }, h.stsd = function(u) {
                    return u.type === "audio" ? u.codec === "mp3" ? h.box(h.types.stsd, h.constants.STSD_PREFIX, h.mp3(u)) : h.box(h.types.stsd, h.constants.STSD_PREFIX, h.mp4a(u)) : h.box(h.types.stsd, h.constants.STSD_PREFIX, h.avc1(u));
                  }, h.mp3 = function(u) {
                    var a = u.channelCount, f = u.audioSampleRate, i = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      a,
                      0,
                      16,
                      0,
                      0,
                      0,
                      0,
                      f >>> 8 & 255,
                      f & 255,
                      0,
                      0
                    ]);
                    return h.box(h.types[".mp3"], i);
                  }, h.mp4a = function(u) {
                    var a = u.channelCount, f = u.audioSampleRate, i = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      a,
                      0,
                      16,
                      0,
                      0,
                      0,
                      0,
                      f >>> 8 & 255,
                      f & 255,
                      0,
                      0
                    ]);
                    return h.box(h.types.mp4a, i, h.esds(u));
                  }, h.esds = function(u) {
                    var a = u.config || [], f = a.length, i = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      3,
                      23 + f,
                      0,
                      1,
                      0,
                      4,
                      15 + f,
                      64,
                      21,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      5
                      // descriptor_type
                    ].concat([
                      f
                    ]).concat(a).concat([
                      6,
                      1,
                      2
                      // GASpecificConfig
                    ]));
                    return h.box(h.types.esds, i);
                  }, h.avc1 = function(u) {
                    var a = u.avcc, f = u.codecWidth, i = u.codecHeight, o = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      f >>> 8 & 255,
                      f & 255,
                      i >>> 8 & 255,
                      i & 255,
                      0,
                      72,
                      0,
                      0,
                      0,
                      72,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      10,
                      120,
                      113,
                      113,
                      47,
                      102,
                      108,
                      118,
                      46,
                      106,
                      115,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      24,
                      255,
                      255
                      // pre_defined = -1
                    ]);
                    return h.box(h.types.avc1, o, h.box(h.types.avcC, a));
                  }, h.mvex = function(u) {
                    return h.box(h.types.mvex, h.trex(u));
                  }, h.trex = function(u) {
                    var a = u.id, f = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      a >>> 24 & 255,
                      a >>> 16 & 255,
                      a >>> 8 & 255,
                      a & 255,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      1
                      // default_sample_flags
                    ]);
                    return h.box(h.types.trex, f);
                  }, h.moof = function(u, a) {
                    return h.box(h.types.moof, h.mfhd(u.sequenceNumber), h.traf(u, a));
                  }, h.mfhd = function(u) {
                    var a = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      u >>> 24 & 255,
                      u >>> 16 & 255,
                      u >>> 8 & 255,
                      u & 255
                    ]);
                    return h.box(h.types.mfhd, a);
                  }, h.traf = function(u, a) {
                    var f = u.id, i = h.box(h.types.tfhd, new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      f >>> 24 & 255,
                      f >>> 16 & 255,
                      f >>> 8 & 255,
                      f & 255
                    ])), o = h.box(h.types.tfdt, new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      a >>> 24 & 255,
                      a >>> 16 & 255,
                      a >>> 8 & 255,
                      a & 255
                    ])), l = h.sdtp(u), s = h.trun(u, l.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
                    return h.box(h.types.traf, i, o, s, l);
                  }, h.sdtp = function(u) {
                    for (var a = u.samples || [], f = a.length, i = new Uint8Array(4 + f), o = 0; o < f; o++) {
                      var l = a[o].flags;
                      i[o + 4] = l.isLeading << 6 | l.dependsOn << 4 | l.isDependedOn << 2 | l.hasRedundancy;
                    }
                    return h.box(h.types.sdtp, i);
                  }, h.trun = function(u, a) {
                    var f = u.samples || [], i = f.length, o = 12 + 16 * i, l = new Uint8Array(o);
                    a += 8 + o, l.set([
                      0,
                      0,
                      15,
                      1,
                      i >>> 24 & 255,
                      i >>> 16 & 255,
                      i >>> 8 & 255,
                      i & 255,
                      a >>> 24 & 255,
                      a >>> 16 & 255,
                      a >>> 8 & 255,
                      a & 255
                    ], 0);
                    for (var s = 0; s < i; s++) {
                      var t = f[s].duration, n = f[s].size, r = f[s].flags, e = f[s].cts;
                      l.set([
                        t >>> 24 & 255,
                        t >>> 16 & 255,
                        t >>> 8 & 255,
                        t & 255,
                        n >>> 24 & 255,
                        n >>> 16 & 255,
                        n >>> 8 & 255,
                        n & 255,
                        r.isLeading << 2 | r.dependsOn,
                        r.isDependedOn << 6 | r.hasRedundancy << 4 | r.isNonSync,
                        0,
                        0,
                        e >>> 24 & 255,
                        e >>> 16 & 255,
                        e >>> 8 & 255,
                        e & 255
                      ], 12 + 16 * s);
                    }
                    return h.box(h.types.trun, l);
                  }, h.mdat = function(u) {
                    return h.box(h.types.mdat, u);
                  }, h;
                }()
              );
              E.init(), S.default = E;
            }
          ),
          /***/
          "./src/remux/mp4-remuxer.js": (
            /*!**********************************!*\
              !*** ./src/remux/mp4-remuxer.js ***!
              \**********************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), h = p(
                /*! ./mp4-generator.js */
                "./src/remux/mp4-generator.js"
              ), u = p(
                /*! ./aac-silent.js */
                "./src/remux/aac-silent.js"
              ), a = p(
                /*! ../utils/browser.js */
                "./src/utils/browser.js"
              ), f = p(
                /*! ../core/media-segment-info.js */
                "./src/core/media-segment-info.js"
              ), i = p(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), o = (
                /** @class */
                function() {
                  function l(s) {
                    this.TAG = "MP4Remuxer", this._config = s, this._isLive = s.isLive === !0, this._dtsBase = -1, this._dtsBaseInited = !1, this._audioDtsBase = 1 / 0, this._videoDtsBase = 1 / 0, this._audioNextDts = void 0, this._videoNextDts = void 0, this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList = new f.MediaSegmentInfoList("audio"), this._videoSegmentInfoList = new f.MediaSegmentInfoList("video"), this._onInitSegment = null, this._onMediaSegment = null, this._forceFirstIDR = !!(a.default.chrome && (a.default.version.major < 50 || a.default.version.major === 50 && a.default.version.build < 2661)), this._fillSilentAfterSeek = a.default.msedge || a.default.msie, this._mp3UseMpegAudio = !a.default.firefox, this._fillAudioTimestampGap = this._config.fixAudioTimestampGap;
                  }
                  return l.prototype.destroy = function() {
                    this._dtsBase = -1, this._dtsBaseInited = !1, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList.clear(), this._audioSegmentInfoList = null, this._videoSegmentInfoList.clear(), this._videoSegmentInfoList = null, this._onInitSegment = null, this._onMediaSegment = null;
                  }, l.prototype.bindDataSource = function(s) {
                    return s.onDataAvailable = this.remux.bind(this), s.onTrackMetadata = this._onTrackMetadataReceived.bind(this), this;
                  }, Object.defineProperty(l.prototype, "onInitSegment", {
                    /* prototype: function onInitSegment(type: string, initSegment: ArrayBuffer): void
                       InitSegment: {
                           type: string,
                           data: ArrayBuffer,
                           codec: string,
                           container: string
                       }
                    */
                    get: function() {
                      return this._onInitSegment;
                    },
                    set: function(s) {
                      this._onInitSegment = s;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(l.prototype, "onMediaSegment", {
                    /* prototype: function onMediaSegment(type: string, mediaSegment: MediaSegment): void
                       MediaSegment: {
                           type: string,
                           data: ArrayBuffer,
                           sampleCount: int32
                           info: MediaSegmentInfo
                       }
                    */
                    get: function() {
                      return this._onMediaSegment;
                    },
                    set: function(s) {
                      this._onMediaSegment = s;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), l.prototype.insertDiscontinuity = function() {
                    this._audioNextDts = this._videoNextDts = void 0;
                  }, l.prototype.seek = function(s) {
                    this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._videoSegmentInfoList.clear(), this._audioSegmentInfoList.clear();
                  }, l.prototype.remux = function(s, t) {
                    if (!this._onMediaSegment)
                      throw new i.IllegalStateException("MP4Remuxer: onMediaSegment callback must be specificed!");
                    this._dtsBaseInited || this._calculateDtsBase(s, t), this._remuxVideo(t), this._remuxAudio(s);
                  }, l.prototype._onTrackMetadataReceived = function(s, t) {
                    var n = null, r = "mp4", e = t.codec;
                    if (s === "audio")
                      this._audioMeta = t, t.codec === "mp3" && this._mp3UseMpegAudio ? (r = "mpeg", e = "", n = new Uint8Array()) : n = h.default.generateInitSegment(t);
                    else if (s === "video")
                      this._videoMeta = t, n = h.default.generateInitSegment(t);
                    else
                      return;
                    if (!this._onInitSegment)
                      throw new i.IllegalStateException("MP4Remuxer: onInitSegment callback must be specified!");
                    this._onInitSegment(s, {
                      type: s,
                      data: n.buffer,
                      codec: e,
                      container: s + "/" + r,
                      mediaDuration: t.duration
                      // in timescale 1000 (milliseconds)
                    });
                  }, l.prototype._calculateDtsBase = function(s, t) {
                    this._dtsBaseInited || (s.samples && s.samples.length && (this._audioDtsBase = s.samples[0].dts), t.samples && t.samples.length && (this._videoDtsBase = t.samples[0].dts), this._dtsBase = Math.min(this._audioDtsBase, this._videoDtsBase), this._dtsBaseInited = !0);
                  }, l.prototype.flushStashedSamples = function() {
                    var s = this._videoStashedLastSample, t = this._audioStashedLastSample, n = {
                      type: "video",
                      id: 1,
                      sequenceNumber: 0,
                      samples: [],
                      length: 0
                    };
                    s != null && (n.samples.push(s), n.length = s.length);
                    var r = {
                      type: "audio",
                      id: 2,
                      sequenceNumber: 0,
                      samples: [],
                      length: 0
                    };
                    t != null && (r.samples.push(t), r.length = t.length), this._videoStashedLastSample = null, this._audioStashedLastSample = null, this._remuxVideo(n, !0), this._remuxAudio(r, !0);
                  }, l.prototype._remuxAudio = function(s, t) {
                    if (this._audioMeta != null) {
                      var n = s, r = n.samples, e = void 0, d = -1, _ = -1, c = this._audioMeta.refSampleDuration, v = this._audioMeta.codec === "mp3" && this._mp3UseMpegAudio, y = this._dtsBaseInited && this._audioNextDts === void 0, x = !1;
                      if (!(!r || r.length === 0) && !(r.length === 1 && !t)) {
                        var m = 0, g = null, L = 0;
                        v ? (m = 0, L = n.length) : (m = 8, L = 8 + n.length);
                        var R = null;
                        if (r.length > 1 && (R = r.pop(), L -= R.length), this._audioStashedLastSample != null) {
                          var b = this._audioStashedLastSample;
                          this._audioStashedLastSample = null, r.unshift(b), L += b.length;
                        }
                        R != null && (this._audioStashedLastSample = R);
                        var I = r[0].dts - this._dtsBase;
                        if (this._audioNextDts)
                          e = I - this._audioNextDts;
                        else if (this._audioSegmentInfoList.isEmpty())
                          e = 0, this._fillSilentAfterSeek && !this._videoSegmentInfoList.isEmpty() && this._audioMeta.originalCodec !== "mp3" && (x = !0);
                        else {
                          var U = this._audioSegmentInfoList.getLastSampleBefore(I);
                          if (U != null) {
                            var k = I - (U.originalDts + U.duration);
                            k <= 3 && (k = 0);
                            var F = U.dts + U.duration + k;
                            e = I - F;
                          } else
                            e = 0;
                        }
                        if (x) {
                          var N = I - e, z = this._videoSegmentInfoList.getLastSegmentBefore(I);
                          if (z != null && z.beginDts < N) {
                            var P = u.default.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);
                            if (P) {
                              var G = z.beginDts, ne = N - z.beginDts;
                              E.default.v(this.TAG, "InsertPrefixSilentAudio: dts: " + G + ", duration: " + ne), r.unshift({ unit: P, dts: G, pts: G }), L += P.byteLength;
                            }
                          } else
                            x = !1;
                        }
                        for (var W = [], H = 0; H < r.length; H++) {
                          var b = r[H], re = b.unit, $ = b.dts - this._dtsBase, G = $, ee = !1, oe = null, Y = 0;
                          if (!($ < -1e-3)) {
                            if (this._audioMeta.codec !== "mp3") {
                              var M = $, te = 3;
                              if (this._audioNextDts && (M = this._audioNextDts), e = $ - M, e <= -te * c) {
                                E.default.w(this.TAG, "Dropping 1 audio frame (originalDts: " + $ + " ms ,curRefDts: " + M + " ms)  due to dtsCorrection: " + e + " ms overlap.");
                                continue;
                              } else if (e >= te * c && this._fillAudioTimestampGap && !a.default.safari) {
                                ee = !0;
                                var se = Math.floor(e / c);
                                E.default.w(this.TAG, `Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.
` + ("originalDts: " + $ + " ms, curRefDts: " + M + " ms, ") + ("dtsCorrection: " + Math.round(e) + " ms, generate: " + se + " frames")), G = Math.floor(M), Y = Math.floor(M + c) - G;
                                var P = u.default.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);
                                P == null && (E.default.w(this.TAG, "Unable to generate silent frame for " + (this._audioMeta.originalCodec + " with " + this._audioMeta.channelCount + " channels, repeat last frame")), P = re), oe = [];
                                for (var de = 0; de < se; de++) {
                                  M = M + c;
                                  var ue = Math.floor(M), le = Math.floor(M + c) - ue, fe = {
                                    dts: ue,
                                    pts: ue,
                                    cts: 0,
                                    unit: P,
                                    size: P.byteLength,
                                    duration: le,
                                    originalDts: $,
                                    flags: {
                                      isLeading: 0,
                                      dependsOn: 1,
                                      isDependedOn: 0,
                                      hasRedundancy: 0
                                    }
                                  };
                                  oe.push(fe), L += fe.size;
                                }
                                this._audioNextDts = M + c;
                              } else
                                G = Math.floor(M), Y = Math.floor(M + c) - G, this._audioNextDts = M + c;
                            } else {
                              if (G = $ - e, H !== r.length - 1) {
                                var he = r[H + 1].dts - this._dtsBase - e;
                                Y = he - G;
                              } else if (R != null) {
                                var he = R.dts - this._dtsBase - e;
                                Y = he - G;
                              } else
                                W.length >= 1 ? Y = W[W.length - 1].duration : Y = Math.floor(c);
                              this._audioNextDts = G + Y;
                            }
                            d === -1 && (d = G), W.push({
                              dts: G,
                              pts: G,
                              cts: 0,
                              unit: b.unit,
                              size: b.unit.byteLength,
                              duration: Y,
                              originalDts: $,
                              flags: {
                                isLeading: 0,
                                dependsOn: 1,
                                isDependedOn: 0,
                                hasRedundancy: 0
                              }
                            }), ee && W.push.apply(W, oe);
                          }
                        }
                        if (W.length === 0) {
                          n.samples = [], n.length = 0;
                          return;
                        }
                        v ? g = new Uint8Array(L) : (g = new Uint8Array(L), g[0] = L >>> 24 & 255, g[1] = L >>> 16 & 255, g[2] = L >>> 8 & 255, g[3] = L & 255, g.set(h.default.types.mdat, 4));
                        for (var H = 0; H < W.length; H++) {
                          var re = W[H].unit;
                          g.set(re, m), m += re.byteLength;
                        }
                        var ae = W[W.length - 1];
                        _ = ae.dts + ae.duration;
                        var ie = new f.MediaSegmentInfo();
                        ie.beginDts = d, ie.endDts = _, ie.beginPts = d, ie.endPts = _, ie.originalBeginDts = W[0].originalDts, ie.originalEndDts = ae.originalDts + ae.duration, ie.firstSample = new f.SampleInfo(W[0].dts, W[0].pts, W[0].duration, W[0].originalDts, !1), ie.lastSample = new f.SampleInfo(ae.dts, ae.pts, ae.duration, ae.originalDts, !1), this._isLive || this._audioSegmentInfoList.append(ie), n.samples = W, n.sequenceNumber++;
                        var ce = null;
                        v ? ce = new Uint8Array() : ce = h.default.moof(n, d), n.samples = [], n.length = 0;
                        var me = {
                          type: "audio",
                          data: this._mergeBoxes(ce, g).buffer,
                          sampleCount: W.length,
                          info: ie
                        };
                        v && y && (me.timestampOffset = d), this._onMediaSegment("audio", me);
                      }
                    }
                  }, l.prototype._remuxVideo = function(s, t) {
                    if (this._videoMeta != null) {
                      var n = s, r = n.samples, e = void 0, d = -1, _ = -1, c = -1, v = -1;
                      if (!(!r || r.length === 0) && !(r.length === 1 && !t)) {
                        var y = 8, x = null, m = 8 + s.length, g = null;
                        if (r.length > 1 && (g = r.pop(), m -= g.length), this._videoStashedLastSample != null) {
                          var L = this._videoStashedLastSample;
                          this._videoStashedLastSample = null, r.unshift(L), m += L.length;
                        }
                        g != null && (this._videoStashedLastSample = g);
                        var R = r[0].dts - this._dtsBase;
                        if (this._videoNextDts)
                          e = R - this._videoNextDts;
                        else if (this._videoSegmentInfoList.isEmpty())
                          e = 0;
                        else {
                          var b = this._videoSegmentInfoList.getLastSampleBefore(R);
                          if (b != null) {
                            var I = R - (b.originalDts + b.duration);
                            I <= 3 && (I = 0);
                            var U = b.dts + b.duration + I;
                            e = R - U;
                          } else
                            e = 0;
                        }
                        for (var k = new f.MediaSegmentInfo(), F = [], N = 0; N < r.length; N++) {
                          var L = r[N], z = L.dts - this._dtsBase, P = L.isKeyframe, G = z - e, ne = L.cts, W = G + ne;
                          d === -1 && (d = G, c = W);
                          var H = 0;
                          if (N !== r.length - 1) {
                            var re = r[N + 1].dts - this._dtsBase - e;
                            H = re - G;
                          } else if (g != null) {
                            var re = g.dts - this._dtsBase - e;
                            H = re - G;
                          } else
                            F.length >= 1 ? H = F[F.length - 1].duration : H = Math.floor(this._videoMeta.refSampleDuration);
                          if (P) {
                            var $ = new f.SampleInfo(G, W, H, L.dts, !0);
                            $.fileposition = L.fileposition, k.appendSyncPoint($);
                          }
                          F.push({
                            dts: G,
                            pts: W,
                            cts: ne,
                            units: L.units,
                            size: L.length,
                            isKeyframe: P,
                            duration: H,
                            originalDts: z,
                            flags: {
                              isLeading: 0,
                              dependsOn: P ? 2 : 1,
                              isDependedOn: P ? 1 : 0,
                              hasRedundancy: 0,
                              isNonSync: P ? 0 : 1
                            }
                          });
                        }
                        x = new Uint8Array(m), x[0] = m >>> 24 & 255, x[1] = m >>> 16 & 255, x[2] = m >>> 8 & 255, x[3] = m & 255, x.set(h.default.types.mdat, 4);
                        for (var N = 0; N < F.length; N++)
                          for (var ee = F[N].units; ee.length; ) {
                            var oe = ee.shift(), Y = oe.data;
                            x.set(Y, y), y += Y.byteLength;
                          }
                        var M = F[F.length - 1];
                        if (_ = M.dts + M.duration, v = M.pts + M.duration, this._videoNextDts = _, k.beginDts = d, k.endDts = _, k.beginPts = c, k.endPts = v, k.originalBeginDts = F[0].originalDts, k.originalEndDts = M.originalDts + M.duration, k.firstSample = new f.SampleInfo(F[0].dts, F[0].pts, F[0].duration, F[0].originalDts, F[0].isKeyframe), k.lastSample = new f.SampleInfo(M.dts, M.pts, M.duration, M.originalDts, M.isKeyframe), this._isLive || this._videoSegmentInfoList.append(k), n.samples = F, n.sequenceNumber++, this._forceFirstIDR) {
                          var te = F[0].flags;
                          te.dependsOn = 2, te.isNonSync = 0;
                        }
                        var se = h.default.moof(n, d);
                        n.samples = [], n.length = 0, this._onMediaSegment("video", {
                          type: "video",
                          data: this._mergeBoxes(se, x).buffer,
                          sampleCount: F.length,
                          info: k
                        });
                      }
                    }
                  }, l.prototype._mergeBoxes = function(s, t) {
                    var n = new Uint8Array(s.byteLength + t.byteLength);
                    return n.set(s, 0), n.set(t, s.byteLength), n;
                  }, l;
                }()
              );
              S.default = o;
            }
          ),
          /***/
          "./src/utils/browser.js": (
            /*!******************************!*\
              !*** ./src/utils/browser.js ***!
              \******************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = {};
              function h() {
                var u = self.navigator.userAgent.toLowerCase(), a = /(edge)\/([\w.]+)/.exec(u) || /(opr)[\/]([\w.]+)/.exec(u) || /(chrome)[ \/]([\w.]+)/.exec(u) || /(iemobile)[\/]([\w.]+)/.exec(u) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(u) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(u) || /(webkit)[ \/]([\w.]+)/.exec(u) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(u) || /(msie) ([\w.]+)/.exec(u) || u.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(u) || u.indexOf("compatible") < 0 && /(firefox)[ \/]([\w.]+)/.exec(u) || [], f = /(ipad)/.exec(u) || /(ipod)/.exec(u) || /(windows phone)/.exec(u) || /(iphone)/.exec(u) || /(kindle)/.exec(u) || /(android)/.exec(u) || /(windows)/.exec(u) || /(mac)/.exec(u) || /(linux)/.exec(u) || /(cros)/.exec(u) || [], i = {
                  browser: a[5] || a[3] || a[1] || "",
                  version: a[2] || a[4] || "0",
                  majorVersion: a[4] || a[2] || "0",
                  platform: f[0] || ""
                }, o = {};
                if (i.browser) {
                  o[i.browser] = !0;
                  var l = i.majorVersion.split(".");
                  o.version = {
                    major: parseInt(i.majorVersion, 10),
                    string: i.version
                  }, l.length > 1 && (o.version.minor = parseInt(l[1], 10)), l.length > 2 && (o.version.build = parseInt(l[2], 10));
                }
                if (i.platform && (o[i.platform] = !0), (o.chrome || o.opr || o.safari) && (o.webkit = !0), o.rv || o.iemobile) {
                  o.rv && delete o.rv;
                  var s = "msie";
                  i.browser = s, o[s] = !0;
                }
                if (o.edge) {
                  delete o.edge;
                  var t = "msedge";
                  i.browser = t, o[t] = !0;
                }
                if (o.opr) {
                  var n = "opera";
                  i.browser = n, o[n] = !0;
                }
                if (o.safari && o.android) {
                  var r = "android";
                  i.browser = r, o[r] = !0;
                }
                o.name = i.browser, o.platform = i.platform;
                for (var e in E)
                  E.hasOwnProperty(e) && delete E[e];
                Object.assign(E, o);
              }
              h(), S.default = E;
            }
          ),
          /***/
          "./src/utils/exception.js": (
            /*!********************************!*\
              !*** ./src/utils/exception.js ***!
              \********************************/
            /***/
            function(T, S, p) {
              p.r(S), p.d(S, {
                /* harmony export */
                RuntimeException: function() {
                  return (
                    /* binding */
                    h
                  );
                },
                /* harmony export */
                IllegalStateException: function() {
                  return (
                    /* binding */
                    u
                  );
                },
                /* harmony export */
                InvalidArgumentException: function() {
                  return (
                    /* binding */
                    a
                  );
                },
                /* harmony export */
                NotImplementedException: function() {
                  return (
                    /* binding */
                    f
                  );
                }
                /* harmony export */
              });
              var E = /* @__PURE__ */ function() {
                var i = function(o, l) {
                  return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, t) {
                    s.__proto__ = t;
                  } || function(s, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) && (s[n] = t[n]);
                  }, i(o, l);
                };
                return function(o, l) {
                  if (typeof l != "function" && l !== null)
                    throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
                  i(o, l);
                  function s() {
                    this.constructor = o;
                  }
                  o.prototype = l === null ? Object.create(l) : (s.prototype = l.prototype, new s());
                };
              }(), h = (
                /** @class */
                function() {
                  function i(o) {
                    this._message = o;
                  }
                  return Object.defineProperty(i.prototype, "name", {
                    get: function() {
                      return "RuntimeException";
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(i.prototype, "message", {
                    get: function() {
                      return this._message;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), i.prototype.toString = function() {
                    return this.name + ": " + this.message;
                  }, i;
                }()
              ), u = (
                /** @class */
                function(i) {
                  E(o, i);
                  function o(l) {
                    return i.call(this, l) || this;
                  }
                  return Object.defineProperty(o.prototype, "name", {
                    get: function() {
                      return "IllegalStateException";
                    },
                    enumerable: !1,
                    configurable: !0
                  }), o;
                }(h)
              ), a = (
                /** @class */
                function(i) {
                  E(o, i);
                  function o(l) {
                    return i.call(this, l) || this;
                  }
                  return Object.defineProperty(o.prototype, "name", {
                    get: function() {
                      return "InvalidArgumentException";
                    },
                    enumerable: !1,
                    configurable: !0
                  }), o;
                }(h)
              ), f = (
                /** @class */
                function(i) {
                  E(o, i);
                  function o(l) {
                    return i.call(this, l) || this;
                  }
                  return Object.defineProperty(o.prototype, "name", {
                    get: function() {
                      return "NotImplementedException";
                    },
                    enumerable: !1,
                    configurable: !0
                  }), o;
                }(h)
              );
            }
          ),
          /***/
          "./src/utils/logger.js": (
            /*!*****************************!*\
              !*** ./src/utils/logger.js ***!
              \*****************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! events */
                "./node_modules/events/events.js"
              ), h = /* @__PURE__ */ p.n(E), u = (
                /** @class */
                function() {
                  function a() {
                  }
                  return a.e = function(f, i) {
                    (!f || a.FORCE_GLOBAL_TAG) && (f = a.GLOBAL_TAG);
                    var o = "[" + f + "] > " + i;
                    a.ENABLE_CALLBACK && a.emitter.emit("log", "error", o), a.ENABLE_ERROR && (console.error ? console.error(o) : console.warn ? console.warn(o) : console.log(o));
                  }, a.i = function(f, i) {
                    (!f || a.FORCE_GLOBAL_TAG) && (f = a.GLOBAL_TAG);
                    var o = "[" + f + "] > " + i;
                    a.ENABLE_CALLBACK && a.emitter.emit("log", "info", o), a.ENABLE_INFO && (console.info ? console.info(o) : console.log(o));
                  }, a.w = function(f, i) {
                    (!f || a.FORCE_GLOBAL_TAG) && (f = a.GLOBAL_TAG);
                    var o = "[" + f + "] > " + i;
                    a.ENABLE_CALLBACK && a.emitter.emit("log", "warn", o), a.ENABLE_WARN && (console.warn ? console.warn(o) : console.log(o));
                  }, a.d = function(f, i) {
                    (!f || a.FORCE_GLOBAL_TAG) && (f = a.GLOBAL_TAG);
                    var o = "[" + f + "] > " + i;
                    a.ENABLE_CALLBACK && a.emitter.emit("log", "debug", o), a.ENABLE_DEBUG && (console.debug ? console.debug(o) : console.log(o));
                  }, a.v = function(f, i) {
                    (!f || a.FORCE_GLOBAL_TAG) && (f = a.GLOBAL_TAG);
                    var o = "[" + f + "] > " + i;
                    a.ENABLE_CALLBACK && a.emitter.emit("log", "verbose", o), a.ENABLE_VERBOSE && console.log(o);
                  }, a;
                }()
              );
              u.GLOBAL_TAG = "flv.js", u.FORCE_GLOBAL_TAG = !1, u.ENABLE_ERROR = !0, u.ENABLE_INFO = !0, u.ENABLE_WARN = !0, u.ENABLE_DEBUG = !0, u.ENABLE_VERBOSE = !0, u.ENABLE_CALLBACK = !1, u.emitter = new (h())(), S.default = u;
            }
          ),
          /***/
          "./src/utils/logging-control.js": (
            /*!**************************************!*\
              !*** ./src/utils/logging-control.js ***!
              \**************************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = p(
                /*! events */
                "./node_modules/events/events.js"
              ), h = /* @__PURE__ */ p.n(E), u = p(
                /*! ./logger.js */
                "./src/utils/logger.js"
              ), a = (
                /** @class */
                function() {
                  function f() {
                  }
                  return Object.defineProperty(f, "forceGlobalTag", {
                    get: function() {
                      return u.default.FORCE_GLOBAL_TAG;
                    },
                    set: function(i) {
                      u.default.FORCE_GLOBAL_TAG = i, f._notifyChange();
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(f, "globalTag", {
                    get: function() {
                      return u.default.GLOBAL_TAG;
                    },
                    set: function(i) {
                      u.default.GLOBAL_TAG = i, f._notifyChange();
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(f, "enableAll", {
                    get: function() {
                      return u.default.ENABLE_VERBOSE && u.default.ENABLE_DEBUG && u.default.ENABLE_INFO && u.default.ENABLE_WARN && u.default.ENABLE_ERROR;
                    },
                    set: function(i) {
                      u.default.ENABLE_VERBOSE = i, u.default.ENABLE_DEBUG = i, u.default.ENABLE_INFO = i, u.default.ENABLE_WARN = i, u.default.ENABLE_ERROR = i, f._notifyChange();
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(f, "enableDebug", {
                    get: function() {
                      return u.default.ENABLE_DEBUG;
                    },
                    set: function(i) {
                      u.default.ENABLE_DEBUG = i, f._notifyChange();
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(f, "enableVerbose", {
                    get: function() {
                      return u.default.ENABLE_VERBOSE;
                    },
                    set: function(i) {
                      u.default.ENABLE_VERBOSE = i, f._notifyChange();
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(f, "enableInfo", {
                    get: function() {
                      return u.default.ENABLE_INFO;
                    },
                    set: function(i) {
                      u.default.ENABLE_INFO = i, f._notifyChange();
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(f, "enableWarn", {
                    get: function() {
                      return u.default.ENABLE_WARN;
                    },
                    set: function(i) {
                      u.default.ENABLE_WARN = i, f._notifyChange();
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(f, "enableError", {
                    get: function() {
                      return u.default.ENABLE_ERROR;
                    },
                    set: function(i) {
                      u.default.ENABLE_ERROR = i, f._notifyChange();
                    },
                    enumerable: !1,
                    configurable: !0
                  }), f.getConfig = function() {
                    return {
                      globalTag: u.default.GLOBAL_TAG,
                      forceGlobalTag: u.default.FORCE_GLOBAL_TAG,
                      enableVerbose: u.default.ENABLE_VERBOSE,
                      enableDebug: u.default.ENABLE_DEBUG,
                      enableInfo: u.default.ENABLE_INFO,
                      enableWarn: u.default.ENABLE_WARN,
                      enableError: u.default.ENABLE_ERROR,
                      enableCallback: u.default.ENABLE_CALLBACK
                    };
                  }, f.applyConfig = function(i) {
                    u.default.GLOBAL_TAG = i.globalTag, u.default.FORCE_GLOBAL_TAG = i.forceGlobalTag, u.default.ENABLE_VERBOSE = i.enableVerbose, u.default.ENABLE_DEBUG = i.enableDebug, u.default.ENABLE_INFO = i.enableInfo, u.default.ENABLE_WARN = i.enableWarn, u.default.ENABLE_ERROR = i.enableError, u.default.ENABLE_CALLBACK = i.enableCallback;
                  }, f._notifyChange = function() {
                    var i = f.emitter;
                    if (i.listenerCount("change") > 0) {
                      var o = f.getConfig();
                      i.emit("change", o);
                    }
                  }, f.registerListener = function(i) {
                    f.emitter.addListener("change", i);
                  }, f.removeListener = function(i) {
                    f.emitter.removeListener("change", i);
                  }, f.addLogListener = function(i) {
                    u.default.emitter.addListener("log", i), u.default.emitter.listenerCount("log") > 0 && (u.default.ENABLE_CALLBACK = !0, f._notifyChange());
                  }, f.removeLogListener = function(i) {
                    u.default.emitter.removeListener("log", i), u.default.emitter.listenerCount("log") === 0 && (u.default.ENABLE_CALLBACK = !1, f._notifyChange());
                  }, f;
                }()
              );
              a.emitter = new (h())(), S.default = a;
            }
          ),
          /***/
          "./src/utils/polyfill.js": (
            /*!*******************************!*\
              !*** ./src/utils/polyfill.js ***!
              \*******************************/
            /***/
            function(T, S, p) {
              p.r(S);
              var E = (
                /** @class */
                function() {
                  function h() {
                  }
                  return h.install = function() {
                    Object.setPrototypeOf = Object.setPrototypeOf || function(u, a) {
                      return u.__proto__ = a, u;
                    }, Object.assign = Object.assign || function(u) {
                      if (u == null)
                        throw new TypeError("Cannot convert undefined or null to object");
                      for (var a = Object(u), f = 1; f < arguments.length; f++) {
                        var i = arguments[f];
                        if (i != null)
                          for (var o in i)
                            i.hasOwnProperty(o) && (a[o] = i[o]);
                      }
                      return a;
                    }, typeof self.Promise != "function" && p(
                      /*! es6-promise */
                      "./node_modules/es6-promise/dist/es6-promise.js"
                    ).polyfill();
                  }, h;
                }()
              );
              E.install(), S.default = E;
            }
          ),
          /***/
          "./src/utils/utf8-conv.js": (
            /*!********************************!*\
              !*** ./src/utils/utf8-conv.js ***!
              \********************************/
            /***/
            function(T, S, p) {
              p.r(S);
              function E(u, a, f) {
                var i = u;
                if (a + f < i.length) {
                  for (; f--; )
                    if ((i[++a] & 192) !== 128)
                      return !1;
                  return !0;
                } else
                  return !1;
              }
              function h(u) {
                for (var a = [], f = u, i = 0, o = u.length; i < o; ) {
                  if (f[i] < 128) {
                    a.push(String.fromCharCode(f[i])), ++i;
                    continue;
                  } else if (!(f[i] < 192)) {
                    if (f[i] < 224) {
                      if (E(f, i, 1)) {
                        var l = (f[i] & 31) << 6 | f[i + 1] & 63;
                        if (l >= 128) {
                          a.push(String.fromCharCode(l & 65535)), i += 2;
                          continue;
                        }
                      }
                    } else if (f[i] < 240) {
                      if (E(f, i, 2)) {
                        var l = (f[i] & 15) << 12 | (f[i + 1] & 63) << 6 | f[i + 2] & 63;
                        if (l >= 2048 && (l & 63488) !== 55296) {
                          a.push(String.fromCharCode(l & 65535)), i += 3;
                          continue;
                        }
                      }
                    } else if (f[i] < 248 && E(f, i, 3)) {
                      var l = (f[i] & 7) << 18 | (f[i + 1] & 63) << 12 | (f[i + 2] & 63) << 6 | f[i + 3] & 63;
                      if (l > 65536 && l < 1114112) {
                        l -= 65536, a.push(String.fromCharCode(l >>> 10 | 55296)), a.push(String.fromCharCode(l & 1023 | 56320)), i += 4;
                        continue;
                      }
                    }
                  }
                  a.push("�"), ++i;
                }
                return a.join("");
              }
              S.default = h;
            }
          )
          /******/
        }, w = {};
        function V(T) {
          var S = w[T];
          if (S !== void 0)
            return S.exports;
          var p = w[T] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          return K[T].call(p.exports, p, p.exports, V), p.exports;
        }
        V.m = K, function() {
          V.n = function(T) {
            var S = T && T.__esModule ? (
              /******/
              function() {
                return T.default;
              }
            ) : (
              /******/
              function() {
                return T;
              }
            );
            return V.d(S, { a: S }), S;
          };
        }(), function() {
          V.d = function(T, S) {
            for (var p in S)
              V.o(S, p) && !V.o(T, p) && Object.defineProperty(T, p, { enumerable: !0, get: S[p] });
          };
        }(), function() {
          V.g = function() {
            if (typeof globalThis == "object")
              return globalThis;
            try {
              return this || new Function("return this")();
            } catch {
              if (typeof window == "object")
                return window;
            }
          }();
        }(), function() {
          V.o = function(T, S) {
            return Object.prototype.hasOwnProperty.call(T, S);
          };
        }(), function() {
          V.r = function(T) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(T, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(T, "__esModule", { value: !0 });
          };
        }();
        var q = V("./src/index.js");
        return q;
      }()
    );
  });
})(Ce);
var je = Ce.exports;
const Oe = /* @__PURE__ */ ke(je), Re = (X, J) => {
  const K = X.__vccOpts || X;
  for (const [w, V] of J)
    K[w] = V;
  return K;
}, Ne = { class: "video-container" }, Ge = {
  name: "videoPlayFlv"
}, We = /* @__PURE__ */ Object.assign(Ge, {
  props: {
    videoType: {
      type: String,
      default: "default"
    },
    url: {
      type: String,
      default: "default"
    },
    option: {
      type: Object,
      default: () => ({
        isLive: "true",
        //是否是直播流，默认 true
        hasVideo: "",
        //指示流是否有视频
        hasAudio: !1,
        // 是否有音频
        stashInitialSize: 128,
        // 减少首帧显示等待时长
        headers: {
          // 设置请求头
        }
      })
    }
  },
  setup(X) {
    let J = X, K = pe(null);
    const w = Te({
      loading: !0,
      // 加载动画
      flvPlayer: null,
      delayTimer: null,
      maxReconnectCount: Window.reconnectFlvCount,
      // 重连的最大次数
      errorCount: 0,
      // 错误次数，连接10次则不再连接
      lastDecodedFrame: 0,
      // 用于判断卡顿
      endedReloadFlag: !0,
      // 用于判断推流结束，是否要再次构建（情景：后端关闭推流后重新打开，有几秒的断流时间）
      isFlullscreen: !1
    });
    ge(
      () => J.url,
      (T, S) => {
        console.log("----", S), V();
      },
      {
        deep: !0
      }
    );
    function V() {
      const T = K.value;
      if (Oe.isSupported() && T) {
        var S = {
          type: J.videoType,
          url: J.url,
          // 视频流地址
          ...J.option
        };
        w.flvPlayer = Oe.createPlayer(S, {
          enableWorker: !1,
          lazyLoadMaxDuration: 3 * 60,
          seekType: "range",
          headers: J.option.headers
        }), w.flvPlayer.attachMediaElement(T), w.flvPlayer.load();
      }
    }
    function q() {
      w.flvPlayer.pause(), w.flvPlayer.unload(), w.flvPlayer.detachMediaElement(), w.flvPlayer.destroy(), w.flvPlayer = null;
    }
    return ye(() => {
      console.log("视频流地址", J.url), V(), document.body.addEventListener("mousedown", function() {
        K.muted = !1;
      }, !1);
    }), Se(() => {
      q();
    }), (T, S) => (Le(), Ae("div", Ne, [
      be("video", {
        name: "videoElement",
        class: "centeredVideo",
        controls: "",
        autoplay: "",
        muted: "",
        id: "videoElement",
        ref_key: "videoElement",
        ref: K
      }, " Your browser is too old which doesn't support HTML5 video. ", 512)
    ]));
  }
}), Ve = /* @__PURE__ */ Re(We, [["__scopeId", "data-v-8c6e3731"]]), Ke = { class: "video-container" }, ze = ["id"], He = {
  name: "videoPlayM3u8"
}, Ye = /* @__PURE__ */ Object.assign(He, {
  props: {
    forbidFastForward: {
      //禁止拖拽快进
      required: !1,
      type: [Boolean],
      default: !1
    },
    options: {
      //配置项
      required: !1,
      type: [Object],
      default: () => null
    },
    source: {
      //播放源(此属性存在则优先于options.source) 动态切换,目前只支持同种格式（mp4/flv/m3u8）之间切换。暂不支持直播rtmp流切换。
      required: !1,
      type: [String],
      default: null
    },
    cssLink: {
      //css版本源
      required: !1,
      type: [String],
      default: "../../src/utils/aliplayer-min.css"
    },
    scriptSrc: {
      //js版本源
      required: !1,
      type: [String],
      default: "../../src/utils/aliplayer-min.js"
    }
  },
  setup(X, { expose: J }) {
    let K = X, w = pe(null), V = pe(
      `player-${Math.random().toString(36).substr(2).toLocaleUpperCase()}`
    ), q = Te({
      id: null,
      //播放器的ID
      width: "100%",
      autoplay: !0
      // isLive: true,
      //支持播放地址播放,此播放优先级最高
      // source: 'rtmp://182.145.195.238:1935/hls/1194076936807170050',
    }), T = [
      /**
       * 播放器视频初始化按钮渲染完毕。
       * 播放器UI初始设置需要此事件后触发，避免UI被初始化所覆盖。
       * 播放器提供的方法需要在此事件发生后才可以调用。
       */
      "ready",
      /**
       * 视频由暂停恢复为播放时触发。
       */
      "play",
      /**
       * 视频暂停时触发。
       */
      "pause",
      /**
       * 能够开始播放音频/视频时发生，会多次触发，仅H5播放器。
       */
      // "canplay",
      /**
       * 播放中，会触发多次。
       */
      "playing",
      /**
       * 当前视频播放完毕时触发。
       */
      "ended",
      /**
       * 直播流中断时触发。
       * m3u8/flv/rtmp在重试5次未成功后触发。
       * 提示上层流中断或需要重新加载视频。
       * PS：m3u8一直自动重试，不需要上层添加重试。
       */
      "liveStreamStop",
      /**
       * m3u8直播流中断后重试事件，每次断流只触发一次。
       */
      "onM3u8Retry",
      /**
       * 控制栏自动隐藏事件。
       */
      "hideBar",
      /**
       * 控制栏自动显示事件。
       */
      "showBar",
      /**
       * 数据缓冲事件。
       */
      "waiting",
      /**
       * 播放位置发生改变时触发，仅H5播放器。
       * 可通过getCurrentTime方法，得到当前播放时间。
       */
      "timeupdate",
      /**
       * 截图完成。
       */
      "snapshoted",
      /**
       * 全屏事件，仅H5支持。
       */
      "requestFullScreen",
      /**
       * 取消全屏事件，iOS下不会触发，仅H5支持。
       */
      "cancelFullScreen",
      /**
       * 错误事件。
       */
      "error",
      /**
       * 开始拖拽，参数返回拖拽点的时间。
       */
      "startSeek",
      /**
       * 完成拖拽，参数返回拖拽点的时间。
       */
      "completeSeek"
    ];
    ge(
      () => K.source,
      (n, r) => {
        S();
      },
      {
        deep: !0
      }
    ), ge(
      () => K.forbidFastForward,
      (n, r) => {
        S();
      },
      {
        deep: !0
      }
    ), ge(
      () => K.options,
      (n, r) => {
        S();
      },
      {
        deep: !0
      }
    );
    const S = () => {
      const n = "app__aliplayer-min-css", r = "app__aliplayer-min-js", e = document.getElementsByTagName("head"), d = document.getElementsByTagName("html");
      let _ = document.getElementById(r);
      if (!document.getElementById(n)) {
        const v = document.createElement("link");
        v.type = "text/css", v.rel = "stylesheet", v.href = K.cssLink, v.id = n, e[0].appendChild(v);
      }
      _ ? p() : (_ = document.createElement("script"), _.type = "text/javascript", _.id = r, _.src = K.scriptSrc, d[0].appendChild(_)), _.addEventListener("load", () => {
        p();
      });
    }, p = () => {
      if (typeof window.Aliplayer < "u") {
        const n = E(K.options);
        if (n)
          for (const r in n)
            q[r] = n[r];
        K.source && (q.source = K.source), q.id = V.value, w.value && w.value.dispose(), w.value = Aliplayer(q);
        for (const r in T)
          w.value && w.value.on(T[r], (e) => {
          });
        if (K.forbidFastForward) {
          let r = 0;
          w.value.on("timeupdate", function() {
            let e = i();
            e - r > 2 ? f(r) : r = e;
          });
        }
      }
    }, E = (n) => {
      let r = Array.isArray(n) ? [] : {};
      if (n && typeof n == "object")
        for (let e in n)
          n.hasOwnProperty(e) && (n[e] && typeof n[e] == "object" ? r[e] = E(n[e]) : r[e] = n[e]);
      return r;
    }, h = () => {
      w.value && w.value.play();
    }, u = () => {
      w.value && w.value.pause();
    }, a = () => {
      w.value && w.value.replay();
    }, f = (n) => {
      w.value && w.value.seek(n);
    }, i = () => w.value && w.value.getCurrentTime(), o = () => {
      w.value && w.value.fullscreenService && w.value.fullscreenService.requestFullScreen();
    }, l = () => {
      w.value && w.value.fullscreenService && w.value.fullscreenService.cancelFullScreen();
    }, s = () => w.value && w.value.getStatus(), t = () => {
      w.value && w.value.dispose();
    };
    return ye(() => {
      we(() => {
        S();
      }), console.log("视频流地址", K.url);
    }), Se(() => {
      t();
    }), J({
      /**
       * 播放器视频初始化按钮渲染完毕。
       * 播放器UI初始设置需要此事件后触发，避免UI被初始化所覆盖。
       * 播放器提供的方法需要在此事件发生后才可以调用。
       */
      replay: a,
      /**
       * 视频由暂停恢复为播放时触发。
       */
      play: h,
      /**
       * 视频暂停时触发。
       */
      pause: u,
      /**
       * 能够开始播放音频/视频时发生，会多次触发，仅H5播放器。
       */
      // canplay,
      /**
       * 播放中，会触发多次。
       */
      // playing,
      /**
       * 当前视频播放完毕时触发。
       */
      // ended,
      /**
       * 直播流中断时触发。
       * m3u8/flv/rtmp在重试5次未成功后触发。
       * 提示上层流中断或需要重新加载视频。
       * PS：m3u8一直自动重试，不需要上层添加重试。
       */
      // liveStreamStop,
      /**
       * m3u8直播流中断后重试事件，每次断流只触发一次。
       */
      // onM3u8Retry,
      /**
       * 控制栏自动隐藏事件。
       */
      // hideBar,
      /**
       * 控制栏自动显示事件。
       */
      // showBar,
      /**
       * 数据缓冲事件。
       */
      // waiting,
      /**
       * 播放位置发生改变时触发，仅H5播放器。
       * 可通过getCurrentTime方法，得到当前播放时间。
       */
      // timeupdate,
      /**
       * 截图完成。
       */
      // snapshoted,
      /**
       * 全屏事件，仅H5支持。
       */
      requestFullScreen: o,
      /**
       * 取消全屏事件，iOS下不会触发，仅H5支持。
       */
      cancelFullScreen: l,
      /**
       * 错误事件。
       */
      // error,
      /**
       * 开始拖拽，参数返回拖拽点的时间。
       */
      // startSeek,
      /**
       * 完成拖拽，参数返回拖拽点的时间。
       */
      // completeSeek,
      getStatus: s
    }), (n, r) => (Le(), Ae("div", Ke, [
      be("div", { id: Fe(V) }, null, 8, ze)
    ]));
  }
}), Xe = /* @__PURE__ */ Re(Ye, [["__scopeId", "data-v-7f6ddeb6"]]), Qe = (X) => (Be("data-v-34823880"), X = X(), Ue(), X), $e = { class: "UnifiedMonitoringVideo" }, Je = /* @__PURE__ */ Qe(() => /* @__PURE__ */ be("div", { id: "videoWindow" }, null, -1)), Ze = [
  Je
], qe = {
  name: "videoPlayHaikan"
}, et = /* @__PURE__ */ Object.assign(qe, {
  props: {
    cameraIndexCode: {
      type: String,
      default: "default"
    },
    cameraName: {
      type: String,
      default: "default"
    },
    url: {
      type: Object,
      default: ""
    },
    listData: {
      type: Array,
      default: () => []
    }
  },
  emits: [],
  setup(X, { emit: J }) {
    let K = [
      "jquery-1.12.4.min.js",
      "jsWebControl-1.0.0.min.js",
      "jsencrypt.min.js",
      "initPlugin.js"
    ], w = J, V = X, q = pe(null), T = pe(0);
    ye(() => {
      S(), window.unifiedMonitoringVideoCall = (a) => E(a);
    }), Se(() => {
      u();
    });
    const S = () => {
      let a = null;
      const f = document.getElementsByTagName("html");
      for (let i = 0; i < K.length; i++) {
        const o = K[i];
        a = document.getElementById(o), a || (a = document.createElement("script"), a.type = "text/javascript", a.id = o, a.src = `../../src/utils/haikan/${o}`, f[0].appendChild(a));
      }
      a.addEventListener("load", () => {
        p();
      });
    }, p = () => {
      let a = "1x1";
      a = ["1x1", "1x2", "1+2", "2x2", "1+5", "1+5", "1+7", "1+7", "3x3"][V.listData.length - 1], q.value = new initPlugin(
        {
          el: "#videoWindow",
          playMode: 0,
          layout: a
        },
        () => {
        }
      ), setTimeout(() => {
        h();
      }, 5e3);
    }, E = (a) => {
      a.includes("768") && (T.value = 768), a.includes("769") && (T.value = 769), a.includes("770") && (T.value = 770), a.includes("816") && (T.value = 816), w("callback", ![769, 770].includes(T.value));
    }, h = () => {
      let a = [];
      V.listData.length > 0 && (console.log("多个视频"), V.listData.forEach(
        ({ realCameraIndexCode: f, realCameraName: i, url: o }, l) => {
          console.log("--------", f, i, o), a.push({
            cameraIndexCode: f || "32120280441310003431",
            cameraName: i || "直播视频流",
            // url: 'rtmp://10.10.0.36:10935/hls/stream_1',
            url: o || "rtsp://21.47.38.152:554/openUrl/scbhPzi",
            deviceType: 1,
            streamMode: 0,
            smallEagleEyeAbility: 0,
            gpuMode: 0,
            wndId: l + 1
          });
        }
      )), T.value !== 816 && a.length > 0 && setTimeout(() => {
        q.value.startPreview(a);
      }, 200);
    }, u = () => {
      q.value.oWebControl.JS_RequestInterface({
        funcName: "uninit"
      }), q.value.oWebControl.JS_DestroyWnd();
    };
    return (a, f) => (Le(), Ae("div", $e, Ze));
  }
}), tt = /* @__PURE__ */ Re(et, [["__scopeId", "data-v-34823880"]]), rt = [Ve, Xe, tt], nt = {
  install(X) {
    rt.forEach((J) => {
      X.component(J.name, J);
    });
  }
};
export {
  nt as default,
  Ve as videoPlayFlv,
  tt as videoPlayHaikan,
  Xe as videoPlayM3u8
};
