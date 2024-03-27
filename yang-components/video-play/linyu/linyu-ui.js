import { ref as lt, reactive as Ht, watch as ft, onMounted as vt, onUnmounted as yt, openBlock as Et, createElementBlock as St, createElementVNode as bt, nextTick as ti, unref as ii, pushScopeId as ri, popScopeId as ni } from "vue";
function qt(De) {
  return De && De.__esModule && Object.prototype.hasOwnProperty.call(De, "default") ? De.default : De;
}
var Xt = { exports: {} };
(function(De, Fe) {
  (function(J, z) {
    De.exports = z();
  })(self, function() {
    return (
      /******/
      function() {
        var de = {
          /***/
          "./node_modules/es6-promise/dist/es6-promise.js": (
            /*!******************************************************!*\
              !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
              \******************************************************/
            /***/
            function(U, R, S) {
              /*!
               * @overview es6-promise - a tiny implementation of Promises/A+.
               * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
               * @license   Licensed under MIT license
               *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
               * @version   v4.2.8+1e68dce6
               */
              (function(L, d) {
                U.exports = d();
              })(this, function() {
                function L(q) {
                  var ee = typeof q;
                  return q !== null && (ee === "object" || ee === "function");
                }
                function d(q) {
                  return typeof q == "function";
                }
                var o = void 0;
                Array.isArray ? o = Array.isArray : o = function(q) {
                  return Object.prototype.toString.call(q) === "[object Array]";
                };
                var l = o, m = 0, f = void 0, v = void 0, A = function(ee, te) {
                  I[m] = ee, I[m + 1] = te, m += 2, m === 2 && (v ? v(F) : K());
                };
                function g(q) {
                  v = q;
                }
                function c(q) {
                  A = q;
                }
                var p = typeof window < "u" ? window : void 0, n = p || {}, a = n.MutationObserver || n.WebKitMutationObserver, _ = typeof self > "u" && typeof process < "u" && {}.toString.call(process) === "[object process]", s = typeof Uint8ClampedArray < "u" && typeof importScripts < "u" && typeof MessageChannel < "u";
                function h() {
                  return function() {
                    return process.nextTick(F);
                  };
                }
                function y() {
                  return typeof f < "u" ? function() {
                    f(F);
                  } : T();
                }
                function x() {
                  var q = 0, ee = new a(F), te = document.createTextNode("");
                  return ee.observe(te, { characterData: !0 }), function() {
                    te.data = q = ++q % 2;
                  };
                }
                function O() {
                  var q = new MessageChannel();
                  return q.port1.onmessage = F, function() {
                    return q.port2.postMessage(0);
                  };
                }
                function T() {
                  var q = setTimeout;
                  return function() {
                    return q(F, 1);
                  };
                }
                var I = new Array(1e3);
                function F() {
                  for (var q = 0; q < m; q += 2) {
                    var ee = I[q], te = I[q + 1];
                    ee(te), I[q] = void 0, I[q + 1] = void 0;
                  }
                  m = 0;
                }
                function W() {
                  try {
                    var q = Function("return this")().require("vertx");
                    return f = q.runOnLoop || q.runOnContext, y();
                  } catch {
                    return T();
                  }
                }
                var K = void 0;
                _ ? K = h() : a ? K = x() : s ? K = O() : p === void 0 ? K = W() : K = T();
                function P(q, ee) {
                  var te = this, me = new this.constructor(k);
                  me[D] === void 0 && Ye(me);
                  var be = te._state;
                  if (be) {
                    var xe = arguments[be - 1];
                    A(function() {
                      return Me(be, me, xe, te._result);
                    });
                  } else
                    Re(te, me, q, ee);
                  return me;
                }
                function C(q) {
                  var ee = this;
                  if (q && typeof q == "object" && q.constructor === ee)
                    return q;
                  var te = new ee(k);
                  return he(te, q), te;
                }
                var D = Math.random().toString(36).substring(2);
                function k() {
                }
                var Z = void 0, oe = 1, re = 2;
                function ce() {
                  return new TypeError("You cannot resolve a promise with itself");
                }
                function Ie() {
                  return new TypeError("A promises callback cannot return that same promise.");
                }
                function ye(q, ee, te, me) {
                  try {
                    q.call(ee, te, me);
                  } catch (be) {
                    return be;
                  }
                }
                function H(q, ee, te) {
                  A(function(me) {
                    var be = !1, xe = ye(te, ee, function(Ue) {
                      be || (be = !0, ee !== Ue ? he(me, Ue) : _e(me, Ue));
                    }, function(Ue) {
                      be || (be = !0, ue(me, Ue));
                    }, "Settle: " + (me._label || " unknown promise"));
                    !be && xe && (be = !0, ue(me, xe));
                  }, q);
                }
                function $(q, ee) {
                  ee._state === oe ? _e(q, ee._result) : ee._state === re ? ue(q, ee._result) : Re(ee, void 0, function(te) {
                    return he(q, te);
                  }, function(te) {
                    return ue(q, te);
                  });
                }
                function ne(q, ee, te) {
                  ee.constructor === q.constructor && te === P && ee.constructor.resolve === C ? $(q, ee) : te === void 0 ? _e(q, ee) : d(te) ? H(q, ee, te) : _e(q, ee);
                }
                function he(q, ee) {
                  if (q === ee)
                    ue(q, ce());
                  else if (L(ee)) {
                    var te = void 0;
                    try {
                      te = ee.then;
                    } catch (me) {
                      ue(q, me);
                      return;
                    }
                    ne(q, ee, te);
                  } else
                    _e(q, ee);
                }
                function pe(q) {
                  q._onerror && q._onerror(q._result), Pe(q);
                }
                function _e(q, ee) {
                  q._state === Z && (q._result = ee, q._state = oe, q._subscribers.length !== 0 && A(Pe, q));
                }
                function ue(q, ee) {
                  q._state === Z && (q._state = re, q._result = ee, A(pe, q));
                }
                function Re(q, ee, te, me) {
                  var be = q._subscribers, xe = be.length;
                  q._onerror = null, be[xe] = ee, be[xe + oe] = te, be[xe + re] = me, xe === 0 && q._state && A(Pe, q);
                }
                function Pe(q) {
                  var ee = q._subscribers, te = q._state;
                  if (ee.length !== 0) {
                    for (var me = void 0, be = void 0, xe = q._result, Ue = 0; Ue < ee.length; Ue += 3)
                      me = ee[Ue], be = ee[Ue + te], me ? Me(te, me, be, xe) : be(xe);
                    q._subscribers.length = 0;
                  }
                }
                function Me(q, ee, te, me) {
                  var be = d(te), xe = void 0, Ue = void 0, et = !0;
                  if (be) {
                    try {
                      xe = te(me);
                    } catch (ot) {
                      et = !1, Ue = ot;
                    }
                    if (ee === xe) {
                      ue(ee, Ie());
                      return;
                    }
                  } else
                    xe = me;
                  ee._state !== Z || (be && et ? he(ee, xe) : et === !1 ? ue(ee, Ue) : q === oe ? _e(ee, xe) : q === re && ue(ee, xe));
                }
                function Ke(q, ee) {
                  try {
                    ee(function(me) {
                      he(q, me);
                    }, function(me) {
                      ue(q, me);
                    });
                  } catch (te) {
                    ue(q, te);
                  }
                }
                var We = 0;
                function Xe() {
                  return We++;
                }
                function Ye(q) {
                  q[D] = We++, q._state = void 0, q._result = void 0, q._subscribers = [];
                }
                function He() {
                  return new Error("Array Methods must be provided an Array");
                }
                var ze = function() {
                  function q(ee, te) {
                    this._instanceConstructor = ee, this.promise = new ee(k), this.promise[D] || Ye(this.promise), l(te) ? (this.length = te.length, this._remaining = te.length, this._result = new Array(this.length), this.length === 0 ? _e(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(te), this._remaining === 0 && _e(this.promise, this._result))) : ue(this.promise, He());
                  }
                  return q.prototype._enumerate = function(te) {
                    for (var me = 0; this._state === Z && me < te.length; me++)
                      this._eachEntry(te[me], me);
                  }, q.prototype._eachEntry = function(te, me) {
                    var be = this._instanceConstructor, xe = be.resolve;
                    if (xe === C) {
                      var Ue = void 0, et = void 0, ot = !1;
                      try {
                        Ue = te.then;
                      } catch (dt) {
                        ot = !0, et = dt;
                      }
                      if (Ue === P && te._state !== Z)
                        this._settledAt(te._state, me, te._result);
                      else if (typeof Ue != "function")
                        this._remaining--, this._result[me] = te;
                      else if (be === Ge) {
                        var qe = new be(k);
                        ot ? ue(qe, et) : ne(qe, te, Ue), this._willSettleAt(qe, me);
                      } else
                        this._willSettleAt(new be(function(dt) {
                          return dt(te);
                        }), me);
                    } else
                      this._willSettleAt(xe(te), me);
                  }, q.prototype._settledAt = function(te, me, be) {
                    var xe = this.promise;
                    xe._state === Z && (this._remaining--, te === re ? ue(xe, be) : this._result[me] = be), this._remaining === 0 && _e(xe, this._result);
                  }, q.prototype._willSettleAt = function(te, me) {
                    var be = this;
                    Re(te, void 0, function(xe) {
                      return be._settledAt(oe, me, xe);
                    }, function(xe) {
                      return be._settledAt(re, me, xe);
                    });
                  }, q;
                }();
                function nt(q) {
                  return new ze(this, q).promise;
                }
                function st(q) {
                  var ee = this;
                  return l(q) ? new ee(function(te, me) {
                    for (var be = q.length, xe = 0; xe < be; xe++)
                      ee.resolve(q[xe]).then(te, me);
                  }) : new ee(function(te, me) {
                    return me(new TypeError("You must pass an array to race."));
                  });
                }
                function xt(q) {
                  var ee = this, te = new ee(k);
                  return ue(te, q), te;
                }
                function Rt() {
                  throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                }
                function Lt() {
                  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                }
                var Ge = function() {
                  function q(ee) {
                    this[D] = Xe(), this._result = this._state = void 0, this._subscribers = [], k !== ee && (typeof ee != "function" && Rt(), this instanceof q ? Ke(this, ee) : Lt());
                  }
                  return q.prototype.catch = function(te) {
                    return this.then(null, te);
                  }, q.prototype.finally = function(te) {
                    var me = this, be = me.constructor;
                    return d(te) ? me.then(function(xe) {
                      return be.resolve(te()).then(function() {
                        return xe;
                      });
                    }, function(xe) {
                      return be.resolve(te()).then(function() {
                        throw xe;
                      });
                    }) : me.then(te, te);
                  }, q;
                }();
                Ge.prototype.then = P, Ge.all = nt, Ge.race = st, Ge.resolve = C, Ge.reject = xt, Ge._setScheduler = g, Ge._setAsap = c, Ge._asap = A;
                function Tt() {
                  var q = void 0;
                  if (typeof S.g < "u")
                    q = S.g;
                  else if (typeof self < "u")
                    q = self;
                  else
                    try {
                      q = Function("return this")();
                    } catch {
                      throw new Error("polyfill failed because global object is unavailable in this environment");
                    }
                  var ee = q.Promise;
                  if (ee) {
                    var te = null;
                    try {
                      te = Object.prototype.toString.call(ee.resolve());
                    } catch {
                    }
                    if (te === "[object Promise]" && !ee.cast)
                      return;
                  }
                  q.Promise = Ge;
                }
                return Ge.polyfill = Tt, Ge.Promise = Ge, Ge;
              });
            }
          ),
          /***/
          "./node_modules/events/events.js": (
            /*!***************************************!*\
              !*** ./node_modules/events/events.js ***!
              \***************************************/
            /***/
            function(U) {
              var R = typeof Reflect == "object" ? Reflect : null, S = R && typeof R.apply == "function" ? R.apply : function(T, I, F) {
                return Function.prototype.apply.call(T, I, F);
              }, L;
              R && typeof R.ownKeys == "function" ? L = R.ownKeys : Object.getOwnPropertySymbols ? L = function(T) {
                return Object.getOwnPropertyNames(T).concat(Object.getOwnPropertySymbols(T));
              } : L = function(T) {
                return Object.getOwnPropertyNames(T);
              };
              function d(O) {
                console && console.warn && console.warn(O);
              }
              var o = Number.isNaN || function(T) {
                return T !== T;
              };
              function l() {
                l.init.call(this);
              }
              U.exports = l, U.exports.once = h, l.EventEmitter = l, l.prototype._events = void 0, l.prototype._eventsCount = 0, l.prototype._maxListeners = void 0;
              var m = 10;
              function f(O) {
                if (typeof O != "function")
                  throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof O);
              }
              Object.defineProperty(l, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                  return m;
                },
                set: function(O) {
                  if (typeof O != "number" || O < 0 || o(O))
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + O + ".");
                  m = O;
                }
              }), l.init = function() {
                (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
              }, l.prototype.setMaxListeners = function(T) {
                if (typeof T != "number" || T < 0 || o(T))
                  throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + T + ".");
                return this._maxListeners = T, this;
              };
              function v(O) {
                return O._maxListeners === void 0 ? l.defaultMaxListeners : O._maxListeners;
              }
              l.prototype.getMaxListeners = function() {
                return v(this);
              }, l.prototype.emit = function(T) {
                for (var I = [], F = 1; F < arguments.length; F++)
                  I.push(arguments[F]);
                var W = T === "error", K = this._events;
                if (K !== void 0)
                  W = W && K.error === void 0;
                else if (!W)
                  return !1;
                if (W) {
                  var P;
                  if (I.length > 0 && (P = I[0]), P instanceof Error)
                    throw P;
                  var C = new Error("Unhandled error." + (P ? " (" + P.message + ")" : ""));
                  throw C.context = P, C;
                }
                var D = K[T];
                if (D === void 0)
                  return !1;
                if (typeof D == "function")
                  S(D, this, I);
                else
                  for (var k = D.length, Z = a(D, k), F = 0; F < k; ++F)
                    S(Z[F], this, I);
                return !0;
              };
              function A(O, T, I, F) {
                var W, K, P;
                if (f(I), K = O._events, K === void 0 ? (K = O._events = /* @__PURE__ */ Object.create(null), O._eventsCount = 0) : (K.newListener !== void 0 && (O.emit("newListener", T, I.listener ? I.listener : I), K = O._events), P = K[T]), P === void 0)
                  P = K[T] = I, ++O._eventsCount;
                else if (typeof P == "function" ? P = K[T] = F ? [I, P] : [P, I] : F ? P.unshift(I) : P.push(I), W = v(O), W > 0 && P.length > W && !P.warned) {
                  P.warned = !0;
                  var C = new Error("Possible EventEmitter memory leak detected. " + P.length + " " + String(T) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                  C.name = "MaxListenersExceededWarning", C.emitter = O, C.type = T, C.count = P.length, d(C);
                }
                return O;
              }
              l.prototype.addListener = function(T, I) {
                return A(this, T, I, !1);
              }, l.prototype.on = l.prototype.addListener, l.prototype.prependListener = function(T, I) {
                return A(this, T, I, !0);
              };
              function g() {
                if (!this.fired)
                  return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
              }
              function c(O, T, I) {
                var F = { fired: !1, wrapFn: void 0, target: O, type: T, listener: I }, W = g.bind(F);
                return W.listener = I, F.wrapFn = W, W;
              }
              l.prototype.once = function(T, I) {
                return f(I), this.on(T, c(this, T, I)), this;
              }, l.prototype.prependOnceListener = function(T, I) {
                return f(I), this.prependListener(T, c(this, T, I)), this;
              }, l.prototype.removeListener = function(T, I) {
                var F, W, K, P, C;
                if (f(I), W = this._events, W === void 0)
                  return this;
                if (F = W[T], F === void 0)
                  return this;
                if (F === I || F.listener === I)
                  --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete W[T], W.removeListener && this.emit("removeListener", T, F.listener || I));
                else if (typeof F != "function") {
                  for (K = -1, P = F.length - 1; P >= 0; P--)
                    if (F[P] === I || F[P].listener === I) {
                      C = F[P].listener, K = P;
                      break;
                    }
                  if (K < 0)
                    return this;
                  K === 0 ? F.shift() : _(F, K), F.length === 1 && (W[T] = F[0]), W.removeListener !== void 0 && this.emit("removeListener", T, C || I);
                }
                return this;
              }, l.prototype.off = l.prototype.removeListener, l.prototype.removeAllListeners = function(T) {
                var I, F, W;
                if (F = this._events, F === void 0)
                  return this;
                if (F.removeListener === void 0)
                  return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : F[T] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete F[T]), this;
                if (arguments.length === 0) {
                  var K = Object.keys(F), P;
                  for (W = 0; W < K.length; ++W)
                    P = K[W], P !== "removeListener" && this.removeAllListeners(P);
                  return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
                }
                if (I = F[T], typeof I == "function")
                  this.removeListener(T, I);
                else if (I !== void 0)
                  for (W = I.length - 1; W >= 0; W--)
                    this.removeListener(T, I[W]);
                return this;
              };
              function p(O, T, I) {
                var F = O._events;
                if (F === void 0)
                  return [];
                var W = F[T];
                return W === void 0 ? [] : typeof W == "function" ? I ? [W.listener || W] : [W] : I ? s(W) : a(W, W.length);
              }
              l.prototype.listeners = function(T) {
                return p(this, T, !0);
              }, l.prototype.rawListeners = function(T) {
                return p(this, T, !1);
              }, l.listenerCount = function(O, T) {
                return typeof O.listenerCount == "function" ? O.listenerCount(T) : n.call(O, T);
              }, l.prototype.listenerCount = n;
              function n(O) {
                var T = this._events;
                if (T !== void 0) {
                  var I = T[O];
                  if (typeof I == "function")
                    return 1;
                  if (I !== void 0)
                    return I.length;
                }
                return 0;
              }
              l.prototype.eventNames = function() {
                return this._eventsCount > 0 ? L(this._events) : [];
              };
              function a(O, T) {
                for (var I = new Array(T), F = 0; F < T; ++F)
                  I[F] = O[F];
                return I;
              }
              function _(O, T) {
                for (; T + 1 < O.length; T++)
                  O[T] = O[T + 1];
                O.pop();
              }
              function s(O) {
                for (var T = new Array(O.length), I = 0; I < T.length; ++I)
                  T[I] = O[I].listener || O[I];
                return T;
              }
              function h(O, T) {
                return new Promise(function(I, F) {
                  function W(P) {
                    O.removeListener(T, K), F(P);
                  }
                  function K() {
                    typeof O.removeListener == "function" && O.removeListener("error", W), I([].slice.call(arguments));
                  }
                  x(O, T, K, { once: !0 }), T !== "error" && y(O, W, { once: !0 });
                });
              }
              function y(O, T, I) {
                typeof O.on == "function" && x(O, "error", T, I);
              }
              function x(O, T, I, F) {
                if (typeof O.on == "function")
                  F.once ? O.once(T, I) : O.on(T, I);
                else if (typeof O.addEventListener == "function")
                  O.addEventListener(T, function W(K) {
                    F.once && O.removeEventListener(T, W), I(K);
                  });
                else
                  throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof O);
              }
            }
          ),
          /***/
          "./node_modules/webworkify-webpack/index.js": (
            /*!**************************************************!*\
              !*** ./node_modules/webworkify-webpack/index.js ***!
              \**************************************************/
            /***/
            function(U, R, S) {
              function L(g) {
                var c = {};
                function p(a) {
                  if (c[a])
                    return c[a].exports;
                  var _ = c[a] = {
                    /******/
                    i: a,
                    /******/
                    l: !1,
                    /******/
                    exports: {}
                    /******/
                  };
                  return g[a].call(_.exports, _, _.exports, p), _.l = !0, _.exports;
                }
                p.m = g, p.c = c, p.i = function(a) {
                  return a;
                }, p.d = function(a, _, s) {
                  p.o(a, _) || Object.defineProperty(a, _, {
                    /******/
                    configurable: !1,
                    /******/
                    enumerable: !0,
                    /******/
                    get: s
                    /******/
                  });
                }, p.r = function(a) {
                  Object.defineProperty(a, "__esModule", { value: !0 });
                }, p.n = function(a) {
                  var _ = a && a.__esModule ? (
                    /******/
                    function() {
                      return a.default;
                    }
                  ) : (
                    /******/
                    function() {
                      return a;
                    }
                  );
                  return p.d(_, "a", _), _;
                }, p.o = function(a, _) {
                  return Object.prototype.hasOwnProperty.call(a, _);
                }, p.p = "/", p.oe = function(a) {
                  throw console.error(a), a;
                };
                var n = p(p.s = ENTRY_MODULE);
                return n.default || n;
              }
              var d = "[\\.|\\-|\\+|\\w|/|@]+", o = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?(" + d + ").*?\\)";
              function l(g) {
                return (g + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
              }
              function m(g) {
                return !isNaN(1 * g);
              }
              function f(g, c, p) {
                var n = {};
                n[p] = [];
                var a = c.toString(), _ = a.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
                if (!_)
                  return n;
                for (var s = _[1], h = new RegExp("(\\\\n|\\W)" + l(s) + o, "g"), y; y = h.exec(a); )
                  y[3] !== "dll-reference" && n[p].push(y[3]);
                for (h = new RegExp("\\(" + l(s) + '\\("(dll-reference\\s(' + d + '))"\\)\\)' + o, "g"); y = h.exec(a); )
                  g[y[2]] || (n[p].push(y[1]), g[y[2]] = S(y[1]).m), n[y[2]] = n[y[2]] || [], n[y[2]].push(y[4]);
                for (var x = Object.keys(n), O = 0; O < x.length; O++)
                  for (var T = 0; T < n[x[O]].length; T++)
                    m(n[x[O]][T]) && (n[x[O]][T] = 1 * n[x[O]][T]);
                return n;
              }
              function v(g) {
                var c = Object.keys(g);
                return c.reduce(function(p, n) {
                  return p || g[n].length > 0;
                }, !1);
              }
              function A(g, c) {
                for (var p = {
                  main: [c]
                }, n = {
                  main: []
                }, a = {
                  main: {}
                }; v(p); )
                  for (var _ = Object.keys(p), s = 0; s < _.length; s++) {
                    var h = _[s], y = p[h], x = y.pop();
                    if (a[h] = a[h] || {}, !(a[h][x] || !g[h][x])) {
                      a[h][x] = !0, n[h] = n[h] || [], n[h].push(x);
                      for (var O = f(g, g[h][x], h), T = Object.keys(O), I = 0; I < T.length; I++)
                        p[T[I]] = p[T[I]] || [], p[T[I]] = p[T[I]].concat(O[T[I]]);
                    }
                  }
                return n;
              }
              U.exports = function(g, c) {
                c = c || {};
                var p = {
                  main: S.m
                }, n = c.all ? { main: Object.keys(p.main) } : A(p, g), a = "";
                Object.keys(n).filter(function(x) {
                  return x !== "main";
                }).forEach(function(x) {
                  for (var O = 0; n[x][O]; )
                    O++;
                  n[x].push(O), p[x][O] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", a = a + "var " + x + " = (" + L.toString().replace("ENTRY_MODULE", JSON.stringify(O)) + ")({" + n[x].map(function(T) {
                    return "" + JSON.stringify(T) + ": " + p[x][T].toString();
                  }).join(",") + `});
`;
                }), a = a + "new ((" + L.toString().replace("ENTRY_MODULE", JSON.stringify(g)) + ")({" + n.main.map(function(x) {
                  return "" + JSON.stringify(x) + ": " + p.main[x].toString();
                }).join(",") + "}))(self);";
                var _ = new window.Blob([a], { type: "text/javascript" });
                if (c.bare)
                  return _;
                var s = window.URL || window.webkitURL || window.mozURL || window.msURL, h = s.createObjectURL(_), y = new window.Worker(h);
                return y.objectURL = h, y;
              };
            }
          ),
          /***/
          "./src/config.js": (
            /*!***********************!*\
              !*** ./src/config.js ***!
              \***********************/
            /***/
            function(U, R, S) {
              S.r(R), S.d(R, {
                /* harmony export */
                defaultConfig: function() {
                  return (
                    /* binding */
                    L
                  );
                },
                /* harmony export */
                createDefaultConfig: function() {
                  return (
                    /* binding */
                    d
                  );
                }
                /* harmony export */
              });
              var L = {
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
              function d() {
                return Object.assign({}, L);
              }
            }
          ),
          /***/
          "./src/core/features.js": (
            /*!******************************!*\
              !*** ./src/core/features.js ***!
              \******************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! ../io/io-controller.js */
                "./src/io/io-controller.js"
              ), d = S(
                /*! ../config.js */
                "./src/config.js"
              ), o = (
                /** @class */
                function() {
                  function l() {
                  }
                  return l.supportMSEH264Playback = function() {
                    return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
                  }, l.supportNetworkStreamIO = function() {
                    var m = new L.default({}, (0, d.createDefaultConfig)()), f = m.loaderType;
                    return m.destroy(), f == "fetch-stream-loader" || f == "xhr-moz-chunked-loader";
                  }, l.getNetworkLoaderTypeName = function() {
                    var m = new L.default({}, (0, d.createDefaultConfig)()), f = m.loaderType;
                    return m.destroy(), f;
                  }, l.supportNativeMediaPlayback = function(m) {
                    l.videoElement == null && (l.videoElement = window.document.createElement("video"));
                    var f = l.videoElement.canPlayType(m);
                    return f === "probably" || f == "maybe";
                  }, l.getFeatureList = function() {
                    var m = {
                      mseFlvPlayback: !1,
                      mseLiveFlvPlayback: !1,
                      networkStreamIO: !1,
                      networkLoaderName: "",
                      nativeMP4H264Playback: !1,
                      nativeWebmVP8Playback: !1,
                      nativeWebmVP9Playback: !1
                    };
                    return m.mseFlvPlayback = l.supportMSEH264Playback(), m.networkStreamIO = l.supportNetworkStreamIO(), m.networkLoaderName = l.getNetworkLoaderTypeName(), m.mseLiveFlvPlayback = m.mseFlvPlayback && m.networkStreamIO, m.nativeMP4H264Playback = l.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"'), m.nativeWebmVP8Playback = l.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"'), m.nativeWebmVP9Playback = l.supportNativeMediaPlayback('video/webm; codecs="vp9"'), m;
                  }, l;
                }()
              );
              R.default = o;
            }
          ),
          /***/
          "./src/core/media-info.js": (
            /*!********************************!*\
              !*** ./src/core/media-info.js ***!
              \********************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = (
                /** @class */
                function() {
                  function d() {
                    this.mimeType = null, this.duration = null, this.hasAudio = null, this.hasVideo = null, this.audioCodec = null, this.videoCodec = null, this.audioDataRate = null, this.videoDataRate = null, this.audioSampleRate = null, this.audioChannelCount = null, this.width = null, this.height = null, this.fps = null, this.profile = null, this.level = null, this.refFrames = null, this.chromaFormat = null, this.sarNum = null, this.sarDen = null, this.metadata = null, this.segments = null, this.segmentCount = null, this.hasKeyframesIndex = null, this.keyframesIndex = null;
                  }
                  return d.prototype.isComplete = function() {
                    var o = this.hasAudio === !1 || this.hasAudio === !0 && this.audioCodec != null && this.audioSampleRate != null && this.audioChannelCount != null, l = this.hasVideo === !1 || this.hasVideo === !0 && this.videoCodec != null && this.width != null && this.height != null && this.fps != null && this.profile != null && this.level != null && this.refFrames != null && this.chromaFormat != null && this.sarNum != null && this.sarDen != null;
                    return this.mimeType != null && this.duration != null && this.metadata != null && this.hasKeyframesIndex != null && o && l;
                  }, d.prototype.isSeekable = function() {
                    return this.hasKeyframesIndex === !0;
                  }, d.prototype.getNearestKeyframe = function(o) {
                    if (this.keyframesIndex == null)
                      return null;
                    var l = this.keyframesIndex, m = this._search(l.times, o);
                    return {
                      index: m,
                      milliseconds: l.times[m],
                      fileposition: l.filepositions[m]
                    };
                  }, d.prototype._search = function(o, l) {
                    var m = 0, f = o.length - 1, v = 0, A = 0, g = f;
                    for (l < o[0] && (m = 0, A = g + 1); A <= g; )
                      if (v = A + Math.floor((g - A) / 2), v === f || l >= o[v] && l < o[v + 1]) {
                        m = v;
                        break;
                      } else
                        o[v] < l ? A = v + 1 : g = v - 1;
                    return m;
                  }, d;
                }()
              );
              R.default = L;
            }
          ),
          /***/
          "./src/core/media-segment-info.js": (
            /*!****************************************!*\
              !*** ./src/core/media-segment-info.js ***!
              \****************************************/
            /***/
            function(U, R, S) {
              S.r(R), S.d(R, {
                /* harmony export */
                SampleInfo: function() {
                  return (
                    /* binding */
                    L
                  );
                },
                /* harmony export */
                MediaSegmentInfo: function() {
                  return (
                    /* binding */
                    d
                  );
                },
                /* harmony export */
                IDRSampleList: function() {
                  return (
                    /* binding */
                    o
                  );
                },
                /* harmony export */
                MediaSegmentInfoList: function() {
                  return (
                    /* binding */
                    l
                  );
                }
                /* harmony export */
              });
              var L = (
                /** @class */
                /* @__PURE__ */ function() {
                  function m(f, v, A, g, c) {
                    this.dts = f, this.pts = v, this.duration = A, this.originalDts = g, this.isSyncPoint = c, this.fileposition = null;
                  }
                  return m;
                }()
              ), d = (
                /** @class */
                function() {
                  function m() {
                    this.beginDts = 0, this.endDts = 0, this.beginPts = 0, this.endPts = 0, this.originalBeginDts = 0, this.originalEndDts = 0, this.syncPoints = [], this.firstSample = null, this.lastSample = null;
                  }
                  return m.prototype.appendSyncPoint = function(f) {
                    f.isSyncPoint = !0, this.syncPoints.push(f);
                  }, m;
                }()
              ), o = (
                /** @class */
                function() {
                  function m() {
                    this._list = [];
                  }
                  return m.prototype.clear = function() {
                    this._list = [];
                  }, m.prototype.appendArray = function(f) {
                    var v = this._list;
                    f.length !== 0 && (v.length > 0 && f[0].originalDts < v[v.length - 1].originalDts && this.clear(), Array.prototype.push.apply(v, f));
                  }, m.prototype.getLastSyncPointBeforeDts = function(f) {
                    if (this._list.length == 0)
                      return null;
                    var v = this._list, A = 0, g = v.length - 1, c = 0, p = 0, n = g;
                    for (f < v[0].dts && (A = 0, p = n + 1); p <= n; )
                      if (c = p + Math.floor((n - p) / 2), c === g || f >= v[c].dts && f < v[c + 1].dts) {
                        A = c;
                        break;
                      } else
                        v[c].dts < f ? p = c + 1 : n = c - 1;
                    return this._list[A];
                  }, m;
                }()
              ), l = (
                /** @class */
                function() {
                  function m(f) {
                    this._type = f, this._list = [], this._lastAppendLocation = -1;
                  }
                  return Object.defineProperty(m.prototype, "type", {
                    get: function() {
                      return this._type;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(m.prototype, "length", {
                    get: function() {
                      return this._list.length;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), m.prototype.isEmpty = function() {
                    return this._list.length === 0;
                  }, m.prototype.clear = function() {
                    this._list = [], this._lastAppendLocation = -1;
                  }, m.prototype._searchNearestSegmentBefore = function(f) {
                    var v = this._list;
                    if (v.length === 0)
                      return -2;
                    var A = v.length - 1, g = 0, c = 0, p = A, n = 0;
                    if (f < v[0].originalBeginDts)
                      return n = -1, n;
                    for (; c <= p; )
                      if (g = c + Math.floor((p - c) / 2), g === A || f > v[g].lastSample.originalDts && f < v[g + 1].originalBeginDts) {
                        n = g;
                        break;
                      } else
                        v[g].originalBeginDts < f ? c = g + 1 : p = g - 1;
                    return n;
                  }, m.prototype._searchNearestSegmentAfter = function(f) {
                    return this._searchNearestSegmentBefore(f) + 1;
                  }, m.prototype.append = function(f) {
                    var v = this._list, A = f, g = this._lastAppendLocation, c = 0;
                    g !== -1 && g < v.length && A.originalBeginDts >= v[g].lastSample.originalDts && (g === v.length - 1 || g < v.length - 1 && A.originalBeginDts < v[g + 1].originalBeginDts) ? c = g + 1 : v.length > 0 && (c = this._searchNearestSegmentBefore(A.originalBeginDts) + 1), this._lastAppendLocation = c, this._list.splice(c, 0, A);
                  }, m.prototype.getLastSegmentBefore = function(f) {
                    var v = this._searchNearestSegmentBefore(f);
                    return v >= 0 ? this._list[v] : null;
                  }, m.prototype.getLastSampleBefore = function(f) {
                    var v = this.getLastSegmentBefore(f);
                    return v != null ? v.lastSample : null;
                  }, m.prototype.getLastSyncPointBefore = function(f) {
                    for (var v = this._searchNearestSegmentBefore(f), A = this._list[v].syncPoints; A.length === 0 && v > 0; )
                      v--, A = this._list[v].syncPoints;
                    return A.length > 0 ? A[A.length - 1] : null;
                  }, m;
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
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! events */
                "./node_modules/events/events.js"
              ), d = /* @__PURE__ */ S.n(L), o = S(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), l = S(
                /*! ../utils/browser.js */
                "./src/utils/browser.js"
              ), m = S(
                /*! ./mse-events.js */
                "./src/core/mse-events.js"
              ), f = S(
                /*! ./media-segment-info.js */
                "./src/core/media-segment-info.js"
              ), v = S(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), A = (
                /** @class */
                function() {
                  function g(c) {
                    this.TAG = "MSEController", this._config = c, this._emitter = new (d())(), this._config.isLive && this._config.autoCleanupSourceBuffer == null && (this._config.autoCleanupSourceBuffer = !0), this.e = {
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
                    }, this._idrList = new f.IDRSampleList();
                  }
                  return g.prototype.destroy = function() {
                    (this._mediaElement || this._mediaSource) && this.detachMediaElement(), this.e = null, this._emitter.removeAllListeners(), this._emitter = null;
                  }, g.prototype.on = function(c, p) {
                    this._emitter.addListener(c, p);
                  }, g.prototype.off = function(c, p) {
                    this._emitter.removeListener(c, p);
                  }, g.prototype.attachMediaElement = function(c) {
                    if (this._mediaSource)
                      throw new v.IllegalStateException("MediaSource has been attached to an HTMLMediaElement!");
                    var p = this._mediaSource = new window.MediaSource();
                    p.addEventListener("sourceopen", this.e.onSourceOpen), p.addEventListener("sourceended", this.e.onSourceEnded), p.addEventListener("sourceclose", this.e.onSourceClose), this._mediaElement = c, this._mediaSourceObjectURL = window.URL.createObjectURL(this._mediaSource), c.src = this._mediaSourceObjectURL;
                  }, g.prototype.detachMediaElement = function() {
                    if (this._mediaSource) {
                      var c = this._mediaSource;
                      for (var p in this._sourceBuffers) {
                        var n = this._pendingSegments[p];
                        n.splice(0, n.length), this._pendingSegments[p] = null, this._pendingRemoveRanges[p] = null, this._lastInitSegments[p] = null;
                        var a = this._sourceBuffers[p];
                        if (a) {
                          if (c.readyState !== "closed") {
                            try {
                              c.removeSourceBuffer(a);
                            } catch (_) {
                              o.default.e(this.TAG, _.message);
                            }
                            a.removeEventListener("error", this.e.onSourceBufferError), a.removeEventListener("updateend", this.e.onSourceBufferUpdateEnd);
                          }
                          this._mimeTypes[p] = null, this._sourceBuffers[p] = null;
                        }
                      }
                      if (c.readyState === "open")
                        try {
                          c.endOfStream();
                        } catch (_) {
                          o.default.e(this.TAG, _.message);
                        }
                      c.removeEventListener("sourceopen", this.e.onSourceOpen), c.removeEventListener("sourceended", this.e.onSourceEnded), c.removeEventListener("sourceclose", this.e.onSourceClose), this._pendingSourceBufferInit = [], this._isBufferFull = !1, this._idrList.clear(), this._mediaSource = null;
                    }
                    this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement = null), this._mediaSourceObjectURL && (window.URL.revokeObjectURL(this._mediaSourceObjectURL), this._mediaSourceObjectURL = null);
                  }, g.prototype.appendInitSegment = function(c, p) {
                    if (!this._mediaSource || this._mediaSource.readyState !== "open") {
                      this._pendingSourceBufferInit.push(c), this._pendingSegments[c.type].push(c);
                      return;
                    }
                    var n = c, a = "" + n.container;
                    n.codec && n.codec.length > 0 && (a += ";codecs=" + n.codec);
                    var _ = !1;
                    if (o.default.v(this.TAG, "Received Initialization Segment, mimeType: " + a), this._lastInitSegments[n.type] = n, a !== this._mimeTypes[n.type]) {
                      if (this._mimeTypes[n.type])
                        o.default.v(this.TAG, "Notice: " + n.type + " mimeType changed, origin: " + this._mimeTypes[n.type] + ", target: " + a);
                      else {
                        _ = !0;
                        try {
                          var s = this._sourceBuffers[n.type] = this._mediaSource.addSourceBuffer(a);
                          s.addEventListener("error", this.e.onSourceBufferError), s.addEventListener("updateend", this.e.onSourceBufferUpdateEnd);
                        } catch (h) {
                          o.default.e(this.TAG, h.message), this._emitter.emit(m.default.ERROR, { code: h.code, msg: h.message });
                          return;
                        }
                      }
                      this._mimeTypes[n.type] = a;
                    }
                    p || this._pendingSegments[n.type].push(n), _ || this._sourceBuffers[n.type] && !this._sourceBuffers[n.type].updating && this._doAppendSegments(), l.default.safari && n.container === "audio/mpeg" && n.mediaDuration > 0 && (this._requireSetMediaDuration = !0, this._pendingMediaDuration = n.mediaDuration / 1e3, this._updateMediaSourceDuration());
                  }, g.prototype.appendMediaSegment = function(c) {
                    var p = c;
                    this._pendingSegments[p.type].push(p), this._config.autoCleanupSourceBuffer && this._needCleanupSourceBuffer() && this._doCleanupSourceBuffer();
                    var n = this._sourceBuffers[p.type];
                    n && !n.updating && !this._hasPendingRemoveRanges() && this._doAppendSegments();
                  }, g.prototype.seek = function(c) {
                    for (var p in this._sourceBuffers)
                      if (this._sourceBuffers[p]) {
                        var n = this._sourceBuffers[p];
                        if (this._mediaSource.readyState === "open")
                          try {
                            n.abort();
                          } catch (x) {
                            o.default.e(this.TAG, x.message);
                          }
                        this._idrList.clear();
                        var a = this._pendingSegments[p];
                        if (a.splice(0, a.length), this._mediaSource.readyState !== "closed") {
                          for (var _ = 0; _ < n.buffered.length; _++) {
                            var s = n.buffered.start(_), h = n.buffered.end(_);
                            this._pendingRemoveRanges[p].push({ start: s, end: h });
                          }
                          if (n.updating || this._doRemoveRanges(), l.default.safari) {
                            var y = this._lastInitSegments[p];
                            y && (this._pendingSegments[p].push(y), n.updating || this._doAppendSegments());
                          }
                        }
                      }
                  }, g.prototype.endOfStream = function() {
                    var c = this._mediaSource, p = this._sourceBuffers;
                    if (!c || c.readyState !== "open") {
                      c && c.readyState === "closed" && this._hasPendingSegments() && (this._hasPendingEos = !0);
                      return;
                    }
                    p.video && p.video.updating || p.audio && p.audio.updating ? this._hasPendingEos = !0 : (this._hasPendingEos = !1, c.endOfStream());
                  }, g.prototype.getNearestKeyframe = function(c) {
                    return this._idrList.getLastSyncPointBeforeDts(c);
                  }, g.prototype._needCleanupSourceBuffer = function() {
                    if (!this._config.autoCleanupSourceBuffer)
                      return !1;
                    var c = this._mediaElement.currentTime;
                    for (var p in this._sourceBuffers) {
                      var n = this._sourceBuffers[p];
                      if (n) {
                        var a = n.buffered;
                        if (a.length >= 1 && c - a.start(0) >= this._config.autoCleanupMaxBackwardDuration)
                          return !0;
                      }
                    }
                    return !1;
                  }, g.prototype._doCleanupSourceBuffer = function() {
                    var c = this._mediaElement.currentTime;
                    for (var p in this._sourceBuffers) {
                      var n = this._sourceBuffers[p];
                      if (n) {
                        for (var a = n.buffered, _ = !1, s = 0; s < a.length; s++) {
                          var h = a.start(s), y = a.end(s);
                          if (h <= c && c < y + 3) {
                            if (c - h >= this._config.autoCleanupMaxBackwardDuration) {
                              _ = !0;
                              var x = c - this._config.autoCleanupMinBackwardDuration;
                              this._pendingRemoveRanges[p].push({ start: h, end: x });
                            }
                          } else
                            y < c && (_ = !0, this._pendingRemoveRanges[p].push({ start: h, end: y }));
                        }
                        _ && !n.updating && this._doRemoveRanges();
                      }
                    }
                  }, g.prototype._updateMediaSourceDuration = function() {
                    var c = this._sourceBuffers;
                    if (!(this._mediaElement.readyState === 0 || this._mediaSource.readyState !== "open") && !(c.video && c.video.updating || c.audio && c.audio.updating)) {
                      var p = this._mediaSource.duration, n = this._pendingMediaDuration;
                      n > 0 && (isNaN(p) || n > p) && (o.default.v(this.TAG, "Update MediaSource duration from " + p + " to " + n), this._mediaSource.duration = n), this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0;
                    }
                  }, g.prototype._doRemoveRanges = function() {
                    for (var c in this._pendingRemoveRanges)
                      if (!(!this._sourceBuffers[c] || this._sourceBuffers[c].updating))
                        for (var p = this._sourceBuffers[c], n = this._pendingRemoveRanges[c]; n.length && !p.updating; ) {
                          var a = n.shift();
                          p.remove(a.start, a.end);
                        }
                  }, g.prototype._doAppendSegments = function() {
                    var c = this._pendingSegments;
                    for (var p in c)
                      if (!(!this._sourceBuffers[p] || this._sourceBuffers[p].updating) && c[p].length > 0) {
                        var n = c[p].shift();
                        if (n.timestampOffset) {
                          var a = this._sourceBuffers[p].timestampOffset, _ = n.timestampOffset / 1e3, s = Math.abs(a - _);
                          s > 0.1 && (o.default.v(this.TAG, "Update MPEG audio timestampOffset from " + a + " to " + _), this._sourceBuffers[p].timestampOffset = _), delete n.timestampOffset;
                        }
                        if (!n.data || n.data.byteLength === 0)
                          continue;
                        try {
                          this._sourceBuffers[p].appendBuffer(n.data), this._isBufferFull = !1, p === "video" && n.hasOwnProperty("info") && this._idrList.appendArray(n.info.syncPoints);
                        } catch (h) {
                          this._pendingSegments[p].unshift(n), h.code === 22 ? (this._isBufferFull || this._emitter.emit(m.default.BUFFER_FULL), this._isBufferFull = !0) : (o.default.e(this.TAG, h.message), this._emitter.emit(m.default.ERROR, { code: h.code, msg: h.message }));
                        }
                      }
                  }, g.prototype._onSourceOpen = function() {
                    if (o.default.v(this.TAG, "MediaSource onSourceOpen"), this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._pendingSourceBufferInit.length > 0)
                      for (var c = this._pendingSourceBufferInit; c.length; ) {
                        var p = c.shift();
                        this.appendInitSegment(p, !0);
                      }
                    this._hasPendingSegments() && this._doAppendSegments(), this._emitter.emit(m.default.SOURCE_OPEN);
                  }, g.prototype._onSourceEnded = function() {
                    o.default.v(this.TAG, "MediaSource onSourceEnded");
                  }, g.prototype._onSourceClose = function() {
                    o.default.v(this.TAG, "MediaSource onSourceClose"), this._mediaSource && this.e != null && (this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._mediaSource.removeEventListener("sourceended", this.e.onSourceEnded), this._mediaSource.removeEventListener("sourceclose", this.e.onSourceClose));
                  }, g.prototype._hasPendingSegments = function() {
                    var c = this._pendingSegments;
                    return c.video.length > 0 || c.audio.length > 0;
                  }, g.prototype._hasPendingRemoveRanges = function() {
                    var c = this._pendingRemoveRanges;
                    return c.video.length > 0 || c.audio.length > 0;
                  }, g.prototype._onSourceBufferUpdateEnd = function() {
                    this._requireSetMediaDuration ? this._updateMediaSourceDuration() : this._hasPendingRemoveRanges() ? this._doRemoveRanges() : this._hasPendingSegments() ? this._doAppendSegments() : this._hasPendingEos && this.endOfStream(), this._emitter.emit(m.default.UPDATE_END);
                  }, g.prototype._onSourceBufferError = function(c) {
                    o.default.e(this.TAG, "SourceBuffer Error: " + c);
                  }, g;
                }()
              );
              R.default = A;
            }
          ),
          /***/
          "./src/core/mse-events.js": (
            /*!********************************!*\
              !*** ./src/core/mse-events.js ***!
              \********************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = {
                ERROR: "error",
                SOURCE_OPEN: "source_open",
                UPDATE_END: "update_end",
                BUFFER_FULL: "buffer_full"
              };
              R.default = L;
            }
          ),
          /***/
          "./src/core/transmuxer.js": (
            /*!********************************!*\
              !*** ./src/core/transmuxer.js ***!
              \********************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! events */
                "./node_modules/events/events.js"
              ), d = /* @__PURE__ */ S.n(L), o = S(
                /*! webworkify-webpack */
                "./node_modules/webworkify-webpack/index.js"
              ), l = /* @__PURE__ */ S.n(o), m = S(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), f = S(
                /*! ../utils/logging-control.js */
                "./src/utils/logging-control.js"
              ), v = S(
                /*! ./transmuxing-controller.js */
                "./src/core/transmuxing-controller.js"
              ), A = S(
                /*! ./transmuxing-events.js */
                "./src/core/transmuxing-events.js"
              ), g = S(
                /*! ./media-info.js */
                "./src/core/media-info.js"
              ), c = (
                /** @class */
                function() {
                  function p(n, a) {
                    if (this.TAG = "Transmuxer", this._emitter = new (d())(), a.enableWorker && typeof Worker < "u")
                      try {
                        this._worker = l()(
                          /*require.resolve*/
                          /*! ./transmuxing-worker */
                          "./src/core/transmuxing-worker.js"
                        ), this._workerDestroying = !1, this._worker.addEventListener("message", this._onWorkerMessage.bind(this)), this._worker.postMessage({ cmd: "init", param: [n, a] }), this.e = {
                          onLoggingConfigChanged: this._onLoggingConfigChanged.bind(this)
                        }, f.default.registerListener(this.e.onLoggingConfigChanged), this._worker.postMessage({ cmd: "logging_config", param: f.default.getConfig() });
                      } catch {
                        m.default.e(this.TAG, "Error while initialize transmuxing worker, fallback to inline transmuxing"), this._worker = null, this._controller = new v.default(n, a);
                      }
                    else
                      this._controller = new v.default(n, a);
                    if (this._controller) {
                      var _ = this._controller;
                      _.on(A.default.IO_ERROR, this._onIOError.bind(this)), _.on(A.default.DEMUX_ERROR, this._onDemuxError.bind(this)), _.on(A.default.INIT_SEGMENT, this._onInitSegment.bind(this)), _.on(A.default.MEDIA_SEGMENT, this._onMediaSegment.bind(this)), _.on(A.default.LOADING_COMPLETE, this._onLoadingComplete.bind(this)), _.on(A.default.RECOVERED_EARLY_EOF, this._onRecoveredEarlyEof.bind(this)), _.on(A.default.MEDIA_INFO, this._onMediaInfo.bind(this)), _.on(A.default.METADATA_ARRIVED, this._onMetaDataArrived.bind(this)), _.on(A.default.SCRIPTDATA_ARRIVED, this._onScriptDataArrived.bind(this)), _.on(A.default.STATISTICS_INFO, this._onStatisticsInfo.bind(this)), _.on(A.default.RECOMMEND_SEEKPOINT, this._onRecommendSeekpoint.bind(this));
                    }
                  }
                  return p.prototype.destroy = function() {
                    this._worker ? this._workerDestroying || (this._workerDestroying = !0, this._worker.postMessage({ cmd: "destroy" }), f.default.removeListener(this.e.onLoggingConfigChanged), this.e = null) : (this._controller.destroy(), this._controller = null), this._emitter.removeAllListeners(), this._emitter = null;
                  }, p.prototype.on = function(n, a) {
                    this._emitter.addListener(n, a);
                  }, p.prototype.off = function(n, a) {
                    this._emitter.removeListener(n, a);
                  }, p.prototype.hasWorker = function() {
                    return this._worker != null;
                  }, p.prototype.open = function() {
                    this._worker ? this._worker.postMessage({ cmd: "start" }) : this._controller.start();
                  }, p.prototype.close = function() {
                    this._worker ? this._worker.postMessage({ cmd: "stop" }) : this._controller.stop();
                  }, p.prototype.seek = function(n) {
                    this._worker ? this._worker.postMessage({ cmd: "seek", param: n }) : this._controller.seek(n);
                  }, p.prototype.pause = function() {
                    this._worker ? this._worker.postMessage({ cmd: "pause" }) : this._controller.pause();
                  }, p.prototype.resume = function() {
                    this._worker ? this._worker.postMessage({ cmd: "resume" }) : this._controller.resume();
                  }, p.prototype._onInitSegment = function(n, a) {
                    var _ = this;
                    Promise.resolve().then(function() {
                      _._emitter.emit(A.default.INIT_SEGMENT, n, a);
                    });
                  }, p.prototype._onMediaSegment = function(n, a) {
                    var _ = this;
                    Promise.resolve().then(function() {
                      _._emitter.emit(A.default.MEDIA_SEGMENT, n, a);
                    });
                  }, p.prototype._onLoadingComplete = function() {
                    var n = this;
                    Promise.resolve().then(function() {
                      n._emitter.emit(A.default.LOADING_COMPLETE);
                    });
                  }, p.prototype._onRecoveredEarlyEof = function() {
                    var n = this;
                    Promise.resolve().then(function() {
                      n._emitter.emit(A.default.RECOVERED_EARLY_EOF);
                    });
                  }, p.prototype._onMediaInfo = function(n) {
                    var a = this;
                    Promise.resolve().then(function() {
                      a._emitter.emit(A.default.MEDIA_INFO, n);
                    });
                  }, p.prototype._onMetaDataArrived = function(n) {
                    var a = this;
                    Promise.resolve().then(function() {
                      a._emitter.emit(A.default.METADATA_ARRIVED, n);
                    });
                  }, p.prototype._onScriptDataArrived = function(n) {
                    var a = this;
                    Promise.resolve().then(function() {
                      a._emitter.emit(A.default.SCRIPTDATA_ARRIVED, n);
                    });
                  }, p.prototype._onStatisticsInfo = function(n) {
                    var a = this;
                    Promise.resolve().then(function() {
                      a._emitter.emit(A.default.STATISTICS_INFO, n);
                    });
                  }, p.prototype._onIOError = function(n, a) {
                    var _ = this;
                    Promise.resolve().then(function() {
                      _._emitter.emit(A.default.IO_ERROR, n, a);
                    });
                  }, p.prototype._onDemuxError = function(n, a) {
                    var _ = this;
                    Promise.resolve().then(function() {
                      _._emitter.emit(A.default.DEMUX_ERROR, n, a);
                    });
                  }, p.prototype._onRecommendSeekpoint = function(n) {
                    var a = this;
                    Promise.resolve().then(function() {
                      a._emitter.emit(A.default.RECOMMEND_SEEKPOINT, n);
                    });
                  }, p.prototype._onLoggingConfigChanged = function(n) {
                    this._worker && this._worker.postMessage({ cmd: "logging_config", param: n });
                  }, p.prototype._onWorkerMessage = function(n) {
                    var a = n.data, _ = a.data;
                    if (a.msg === "destroyed" || this._workerDestroying) {
                      this._workerDestroying = !1, this._worker.terminate(), this._worker = null;
                      return;
                    }
                    switch (a.msg) {
                      case A.default.INIT_SEGMENT:
                      case A.default.MEDIA_SEGMENT:
                        this._emitter.emit(a.msg, _.type, _.data);
                        break;
                      case A.default.LOADING_COMPLETE:
                      case A.default.RECOVERED_EARLY_EOF:
                        this._emitter.emit(a.msg);
                        break;
                      case A.default.MEDIA_INFO:
                        Object.setPrototypeOf(_, g.default.prototype), this._emitter.emit(a.msg, _);
                        break;
                      case A.default.METADATA_ARRIVED:
                      case A.default.SCRIPTDATA_ARRIVED:
                      case A.default.STATISTICS_INFO:
                        this._emitter.emit(a.msg, _);
                        break;
                      case A.default.IO_ERROR:
                      case A.default.DEMUX_ERROR:
                        this._emitter.emit(a.msg, _.type, _.info);
                        break;
                      case A.default.RECOMMEND_SEEKPOINT:
                        this._emitter.emit(a.msg, _);
                        break;
                      case "logcat_callback":
                        m.default.emitter.emit("log", _.type, _.logcat);
                        break;
                    }
                  }, p;
                }()
              );
              R.default = c;
            }
          ),
          /***/
          "./src/core/transmuxing-controller.js": (
            /*!********************************************!*\
              !*** ./src/core/transmuxing-controller.js ***!
              \********************************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! events */
                "./node_modules/events/events.js"
              ), d = /* @__PURE__ */ S.n(L), o = S(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), l = S(
                /*! ../utils/browser.js */
                "./src/utils/browser.js"
              ), m = S(
                /*! ./media-info.js */
                "./src/core/media-info.js"
              ), f = S(
                /*! ../demux/flv-demuxer.js */
                "./src/demux/flv-demuxer.js"
              ), v = S(
                /*! ../remux/mp4-remuxer.js */
                "./src/remux/mp4-remuxer.js"
              ), A = S(
                /*! ../demux/demux-errors.js */
                "./src/demux/demux-errors.js"
              ), g = S(
                /*! ../io/io-controller.js */
                "./src/io/io-controller.js"
              ), c = S(
                /*! ./transmuxing-events.js */
                "./src/core/transmuxing-events.js"
              ), p = (
                /** @class */
                function() {
                  function n(a, _) {
                    this.TAG = "TransmuxingController", this._emitter = new (d())(), this._config = _, a.segments || (a.segments = [{
                      duration: a.duration,
                      filesize: a.filesize,
                      url: a.url
                    }]), typeof a.cors != "boolean" && (a.cors = !0), typeof a.withCredentials != "boolean" && (a.withCredentials = !1), this._mediaDataSource = a, this._currentSegmentIndex = 0;
                    var s = 0;
                    this._mediaDataSource.segments.forEach(function(h) {
                      h.timestampBase = s, s += h.duration, h.cors = a.cors, h.withCredentials = a.withCredentials, _.referrerPolicy && (h.referrerPolicy = _.referrerPolicy);
                    }), !isNaN(s) && this._mediaDataSource.duration !== s && (this._mediaDataSource.duration = s), this._mediaInfo = null, this._demuxer = null, this._remuxer = null, this._ioctl = null, this._pendingSeekTime = null, this._pendingResolveSeekPoint = null, this._statisticsReporter = null;
                  }
                  return n.prototype.destroy = function() {
                    this._mediaInfo = null, this._mediaDataSource = null, this._statisticsReporter && this._disableStatisticsReporter(), this._ioctl && (this._ioctl.destroy(), this._ioctl = null), this._demuxer && (this._demuxer.destroy(), this._demuxer = null), this._remuxer && (this._remuxer.destroy(), this._remuxer = null), this._emitter.removeAllListeners(), this._emitter = null;
                  }, n.prototype.on = function(a, _) {
                    this._emitter.addListener(a, _);
                  }, n.prototype.off = function(a, _) {
                    this._emitter.removeListener(a, _);
                  }, n.prototype.start = function() {
                    this._loadSegment(0), this._enableStatisticsReporter();
                  }, n.prototype._loadSegment = function(a, _) {
                    this._currentSegmentIndex = a;
                    var s = this._mediaDataSource.segments[a], h = this._ioctl = new g.default(s, this._config, a);
                    h.onError = this._onIOException.bind(this), h.onSeeked = this._onIOSeeked.bind(this), h.onComplete = this._onIOComplete.bind(this), h.onRedirect = this._onIORedirect.bind(this), h.onRecoveredEarlyEof = this._onIORecoveredEarlyEof.bind(this), _ ? this._demuxer.bindDataSource(this._ioctl) : h.onDataArrival = this._onInitChunkArrival.bind(this), h.open(_);
                  }, n.prototype.stop = function() {
                    this._internalAbort(), this._disableStatisticsReporter();
                  }, n.prototype._internalAbort = function() {
                    this._ioctl && (this._ioctl.destroy(), this._ioctl = null);
                  }, n.prototype.pause = function() {
                    this._ioctl && this._ioctl.isWorking() && (this._ioctl.pause(), this._disableStatisticsReporter());
                  }, n.prototype.resume = function() {
                    this._ioctl && this._ioctl.isPaused() && (this._ioctl.resume(), this._enableStatisticsReporter());
                  }, n.prototype.seek = function(a) {
                    if (!(this._mediaInfo == null || !this._mediaInfo.isSeekable())) {
                      var _ = this._searchSegmentIndexContains(a);
                      if (_ === this._currentSegmentIndex) {
                        var s = this._mediaInfo.segments[_];
                        if (s == null)
                          this._pendingSeekTime = a;
                        else {
                          var h = s.getNearestKeyframe(a);
                          this._remuxer.seek(h.milliseconds), this._ioctl.seek(h.fileposition), this._pendingResolveSeekPoint = h.milliseconds;
                        }
                      } else {
                        var y = this._mediaInfo.segments[_];
                        if (y == null)
                          this._pendingSeekTime = a, this._internalAbort(), this._remuxer.seek(), this._remuxer.insertDiscontinuity(), this._loadSegment(_);
                        else {
                          var h = y.getNearestKeyframe(a);
                          this._internalAbort(), this._remuxer.seek(a), this._remuxer.insertDiscontinuity(), this._demuxer.resetMediaInfo(), this._demuxer.timestampBase = this._mediaDataSource.segments[_].timestampBase, this._loadSegment(_, h.fileposition), this._pendingResolveSeekPoint = h.milliseconds, this._reportSegmentMediaInfo(_);
                        }
                      }
                      this._enableStatisticsReporter();
                    }
                  }, n.prototype._searchSegmentIndexContains = function(a) {
                    for (var _ = this._mediaDataSource.segments, s = _.length - 1, h = 0; h < _.length; h++)
                      if (a < _[h].timestampBase) {
                        s = h - 1;
                        break;
                      }
                    return s;
                  }, n.prototype._onInitChunkArrival = function(a, _) {
                    var s = this, h = null, y = 0;
                    if (_ > 0)
                      this._demuxer.bindDataSource(this._ioctl), this._demuxer.timestampBase = this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase, y = this._demuxer.parseChunks(a, _);
                    else if ((h = f.default.probe(a)).match) {
                      this._demuxer = new f.default(h, this._config), this._remuxer || (this._remuxer = new v.default(this._config));
                      var x = this._mediaDataSource;
                      x.duration != null && !isNaN(x.duration) && (this._demuxer.overridedDuration = x.duration), typeof x.hasAudio == "boolean" && (this._demuxer.overridedHasAudio = x.hasAudio), typeof x.hasVideo == "boolean" && (this._demuxer.overridedHasVideo = x.hasVideo), this._demuxer.timestampBase = x.segments[this._currentSegmentIndex].timestampBase, this._demuxer.onError = this._onDemuxException.bind(this), this._demuxer.onMediaInfo = this._onMediaInfo.bind(this), this._demuxer.onMetaDataArrived = this._onMetaDataArrived.bind(this), this._demuxer.onScriptDataArrived = this._onScriptDataArrived.bind(this), this._remuxer.bindDataSource(this._demuxer.bindDataSource(this._ioctl)), this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this), this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this), y = this._demuxer.parseChunks(a, _);
                    } else
                      h = null, o.default.e(this.TAG, "Non-FLV, Unsupported media type!"), Promise.resolve().then(function() {
                        s._internalAbort();
                      }), this._emitter.emit(c.default.DEMUX_ERROR, A.default.FORMAT_UNSUPPORTED, "Non-FLV, Unsupported media type"), y = 0;
                    return y;
                  }, n.prototype._onMediaInfo = function(a) {
                    var _ = this;
                    this._mediaInfo == null && (this._mediaInfo = Object.assign({}, a), this._mediaInfo.keyframesIndex = null, this._mediaInfo.segments = [], this._mediaInfo.segmentCount = this._mediaDataSource.segments.length, Object.setPrototypeOf(this._mediaInfo, m.default.prototype));
                    var s = Object.assign({}, a);
                    Object.setPrototypeOf(s, m.default.prototype), this._mediaInfo.segments[this._currentSegmentIndex] = s, this._reportSegmentMediaInfo(this._currentSegmentIndex), this._pendingSeekTime != null && Promise.resolve().then(function() {
                      var h = _._pendingSeekTime;
                      _._pendingSeekTime = null, _.seek(h);
                    });
                  }, n.prototype._onMetaDataArrived = function(a) {
                    this._emitter.emit(c.default.METADATA_ARRIVED, a);
                  }, n.prototype._onScriptDataArrived = function(a) {
                    this._emitter.emit(c.default.SCRIPTDATA_ARRIVED, a);
                  }, n.prototype._onIOSeeked = function() {
                    this._remuxer.insertDiscontinuity();
                  }, n.prototype._onIOComplete = function(a) {
                    var _ = a, s = _ + 1;
                    s < this._mediaDataSource.segments.length ? (this._internalAbort(), this._remuxer.flushStashedSamples(), this._loadSegment(s)) : (this._remuxer.flushStashedSamples(), this._emitter.emit(c.default.LOADING_COMPLETE), this._disableStatisticsReporter());
                  }, n.prototype._onIORedirect = function(a) {
                    var _ = this._ioctl.extraData;
                    this._mediaDataSource.segments[_].redirectedURL = a;
                  }, n.prototype._onIORecoveredEarlyEof = function() {
                    this._emitter.emit(c.default.RECOVERED_EARLY_EOF);
                  }, n.prototype._onIOException = function(a, _) {
                    o.default.e(this.TAG, "IOException: type = " + a + ", code = " + _.code + ", msg = " + _.msg), this._emitter.emit(c.default.IO_ERROR, a, _), this._disableStatisticsReporter();
                  }, n.prototype._onDemuxException = function(a, _) {
                    o.default.e(this.TAG, "DemuxException: type = " + a + ", info = " + _), this._emitter.emit(c.default.DEMUX_ERROR, a, _);
                  }, n.prototype._onRemuxerInitSegmentArrival = function(a, _) {
                    this._emitter.emit(c.default.INIT_SEGMENT, a, _);
                  }, n.prototype._onRemuxerMediaSegmentArrival = function(a, _) {
                    if (this._pendingSeekTime == null && (this._emitter.emit(c.default.MEDIA_SEGMENT, a, _), this._pendingResolveSeekPoint != null && a === "video")) {
                      var s = _.info.syncPoints, h = this._pendingResolveSeekPoint;
                      this._pendingResolveSeekPoint = null, l.default.safari && s.length > 0 && s[0].originalDts === h && (h = s[0].pts), this._emitter.emit(c.default.RECOMMEND_SEEKPOINT, h);
                    }
                  }, n.prototype._enableStatisticsReporter = function() {
                    this._statisticsReporter == null && (this._statisticsReporter = self.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval));
                  }, n.prototype._disableStatisticsReporter = function() {
                    this._statisticsReporter && (self.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
                  }, n.prototype._reportSegmentMediaInfo = function(a) {
                    var _ = this._mediaInfo.segments[a], s = Object.assign({}, _);
                    s.duration = this._mediaInfo.duration, s.segmentCount = this._mediaInfo.segmentCount, delete s.segments, delete s.keyframesIndex, this._emitter.emit(c.default.MEDIA_INFO, s);
                  }, n.prototype._reportStatisticsInfo = function() {
                    var a = {};
                    a.url = this._ioctl.currentURL, a.hasRedirect = this._ioctl.hasRedirect, a.hasRedirect && (a.redirectedURL = this._ioctl.currentRedirectedURL), a.speed = this._ioctl.currentSpeed, a.loaderType = this._ioctl.loaderType, a.currentSegmentIndex = this._currentSegmentIndex, a.totalSegmentCount = this._mediaDataSource.segments.length, this._emitter.emit(c.default.STATISTICS_INFO, a);
                  }, n;
                }()
              );
              R.default = p;
            }
          ),
          /***/
          "./src/core/transmuxing-events.js": (
            /*!****************************************!*\
              !*** ./src/core/transmuxing-events.js ***!
              \****************************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = {
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
              R.default = L;
            }
          ),
          /***/
          "./src/core/transmuxing-worker.js": (
            /*!****************************************!*\
              !*** ./src/core/transmuxing-worker.js ***!
              \****************************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! ../utils/logging-control.js */
                "./src/utils/logging-control.js"
              ), d = S(
                /*! ../utils/polyfill.js */
                "./src/utils/polyfill.js"
              ), o = S(
                /*! ./transmuxing-controller.js */
                "./src/core/transmuxing-controller.js"
              ), l = S(
                /*! ./transmuxing-events.js */
                "./src/core/transmuxing-events.js"
              ), m = function(f) {
                var v = null, A = T.bind(this);
                d.default.install(), f.addEventListener("message", function(I) {
                  switch (I.data.cmd) {
                    case "init":
                      v = new o.default(I.data.param[0], I.data.param[1]), v.on(l.default.IO_ERROR, y.bind(this)), v.on(l.default.DEMUX_ERROR, x.bind(this)), v.on(l.default.INIT_SEGMENT, g.bind(this)), v.on(l.default.MEDIA_SEGMENT, c.bind(this)), v.on(l.default.LOADING_COMPLETE, p.bind(this)), v.on(l.default.RECOVERED_EARLY_EOF, n.bind(this)), v.on(l.default.MEDIA_INFO, a.bind(this)), v.on(l.default.METADATA_ARRIVED, _.bind(this)), v.on(l.default.SCRIPTDATA_ARRIVED, s.bind(this)), v.on(l.default.STATISTICS_INFO, h.bind(this)), v.on(l.default.RECOMMEND_SEEKPOINT, O.bind(this));
                      break;
                    case "destroy":
                      v && (v.destroy(), v = null), f.postMessage({ msg: "destroyed" });
                      break;
                    case "start":
                      v.start();
                      break;
                    case "stop":
                      v.stop();
                      break;
                    case "seek":
                      v.seek(I.data.param);
                      break;
                    case "pause":
                      v.pause();
                      break;
                    case "resume":
                      v.resume();
                      break;
                    case "logging_config": {
                      var F = I.data.param;
                      L.default.applyConfig(F), F.enableCallback === !0 ? L.default.addLogListener(A) : L.default.removeLogListener(A);
                      break;
                    }
                  }
                });
                function g(I, F) {
                  var W = {
                    msg: l.default.INIT_SEGMENT,
                    data: {
                      type: I,
                      data: F
                    }
                  };
                  f.postMessage(W, [F.data]);
                }
                function c(I, F) {
                  var W = {
                    msg: l.default.MEDIA_SEGMENT,
                    data: {
                      type: I,
                      data: F
                    }
                  };
                  f.postMessage(W, [F.data]);
                }
                function p() {
                  var I = {
                    msg: l.default.LOADING_COMPLETE
                  };
                  f.postMessage(I);
                }
                function n() {
                  var I = {
                    msg: l.default.RECOVERED_EARLY_EOF
                  };
                  f.postMessage(I);
                }
                function a(I) {
                  var F = {
                    msg: l.default.MEDIA_INFO,
                    data: I
                  };
                  f.postMessage(F);
                }
                function _(I) {
                  var F = {
                    msg: l.default.METADATA_ARRIVED,
                    data: I
                  };
                  f.postMessage(F);
                }
                function s(I) {
                  var F = {
                    msg: l.default.SCRIPTDATA_ARRIVED,
                    data: I
                  };
                  f.postMessage(F);
                }
                function h(I) {
                  var F = {
                    msg: l.default.STATISTICS_INFO,
                    data: I
                  };
                  f.postMessage(F);
                }
                function y(I, F) {
                  f.postMessage({
                    msg: l.default.IO_ERROR,
                    data: {
                      type: I,
                      info: F
                    }
                  });
                }
                function x(I, F) {
                  f.postMessage({
                    msg: l.default.DEMUX_ERROR,
                    data: {
                      type: I,
                      info: F
                    }
                  });
                }
                function O(I) {
                  f.postMessage({
                    msg: l.default.RECOMMEND_SEEKPOINT,
                    data: I
                  });
                }
                function T(I, F) {
                  f.postMessage({
                    msg: "logcat_callback",
                    data: {
                      type: I,
                      logcat: F
                    }
                  });
                }
              };
              R.default = m;
            }
          ),
          /***/
          "./src/demux/amf-parser.js": (
            /*!*********************************!*\
              !*** ./src/demux/amf-parser.js ***!
              \*********************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), d = S(
                /*! ../utils/utf8-conv.js */
                "./src/utils/utf8-conv.js"
              ), o = S(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), l = function() {
                var f = new ArrayBuffer(2);
                return new DataView(f).setInt16(0, 256, !0), new Int16Array(f)[0] === 256;
              }(), m = (
                /** @class */
                function() {
                  function f() {
                  }
                  return f.parseScriptData = function(v, A, g) {
                    var c = {};
                    try {
                      var p = f.parseValue(v, A, g), n = f.parseValue(v, A + p.size, g - p.size);
                      c[p.data] = n.data;
                    } catch (a) {
                      L.default.e("AMF", a.toString());
                    }
                    return c;
                  }, f.parseObject = function(v, A, g) {
                    if (g < 3)
                      throw new o.IllegalStateException("Data not enough when parse ScriptDataObject");
                    var c = f.parseString(v, A, g), p = f.parseValue(v, A + c.size, g - c.size), n = p.objectEnd;
                    return {
                      data: {
                        name: c.data,
                        value: p.data
                      },
                      size: c.size + p.size,
                      objectEnd: n
                    };
                  }, f.parseVariable = function(v, A, g) {
                    return f.parseObject(v, A, g);
                  }, f.parseString = function(v, A, g) {
                    if (g < 2)
                      throw new o.IllegalStateException("Data not enough when parse String");
                    var c = new DataView(v, A, g), p = c.getUint16(0, !l), n;
                    return p > 0 ? n = (0, d.default)(new Uint8Array(v, A + 2, p)) : n = "", {
                      data: n,
                      size: 2 + p
                    };
                  }, f.parseLongString = function(v, A, g) {
                    if (g < 4)
                      throw new o.IllegalStateException("Data not enough when parse LongString");
                    var c = new DataView(v, A, g), p = c.getUint32(0, !l), n;
                    return p > 0 ? n = (0, d.default)(new Uint8Array(v, A + 4, p)) : n = "", {
                      data: n,
                      size: 4 + p
                    };
                  }, f.parseDate = function(v, A, g) {
                    if (g < 10)
                      throw new o.IllegalStateException("Data size invalid when parse Date");
                    var c = new DataView(v, A, g), p = c.getFloat64(0, !l), n = c.getInt16(8, !l);
                    return p += n * 60 * 1e3, {
                      data: new Date(p),
                      size: 10
                    };
                  }, f.parseValue = function(v, A, g) {
                    if (g < 1)
                      throw new o.IllegalStateException("Data not enough when parse Value");
                    var c = new DataView(v, A, g), p = 1, n = c.getUint8(0), a, _ = !1;
                    try {
                      switch (n) {
                        case 0:
                          a = c.getFloat64(1, !l), p += 8;
                          break;
                        case 1: {
                          var s = c.getUint8(1);
                          a = !!s, p += 1;
                          break;
                        }
                        case 2: {
                          var h = f.parseString(v, A + 1, g - 1);
                          a = h.data, p += h.size;
                          break;
                        }
                        case 3: {
                          a = {};
                          var y = 0;
                          for ((c.getUint32(g - 4, !l) & 16777215) === 9 && (y = 3); p < g - 4; ) {
                            var x = f.parseObject(v, A + p, g - p - y);
                            if (x.objectEnd)
                              break;
                            a[x.data.name] = x.data.value, p += x.size;
                          }
                          if (p <= g - 3) {
                            var O = c.getUint32(p - 1, !l) & 16777215;
                            O === 9 && (p += 3);
                          }
                          break;
                        }
                        case 8: {
                          a = {}, p += 4;
                          var y = 0;
                          for ((c.getUint32(g - 4, !l) & 16777215) === 9 && (y = 3); p < g - 8; ) {
                            var T = f.parseVariable(v, A + p, g - p - y);
                            if (T.objectEnd)
                              break;
                            a[T.data.name] = T.data.value, p += T.size;
                          }
                          if (p <= g - 3) {
                            var O = c.getUint32(p - 1, !l) & 16777215;
                            O === 9 && (p += 3);
                          }
                          break;
                        }
                        case 9:
                          a = void 0, p = 1, _ = !0;
                          break;
                        case 10: {
                          a = [];
                          var I = c.getUint32(1, !l);
                          p += 4;
                          for (var F = 0; F < I; F++) {
                            var W = f.parseValue(v, A + p, g - p);
                            a.push(W.data), p += W.size;
                          }
                          break;
                        }
                        case 11: {
                          var K = f.parseDate(v, A + 1, g - 1);
                          a = K.data, p += K.size;
                          break;
                        }
                        case 12: {
                          var P = f.parseString(v, A + 1, g - 1);
                          a = P.data, p += P.size;
                          break;
                        }
                        default:
                          p = g, L.default.w("AMF", "Unsupported AMF value type " + n);
                      }
                    } catch (C) {
                      L.default.e("AMF", C.toString());
                    }
                    return {
                      data: a,
                      size: p,
                      objectEnd: _
                    };
                  }, f;
                }()
              );
              R.default = m;
            }
          ),
          /***/
          "./src/demux/demux-errors.js": (
            /*!***********************************!*\
              !*** ./src/demux/demux-errors.js ***!
              \***********************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = {
                OK: "OK",
                FORMAT_ERROR: "FormatError",
                FORMAT_UNSUPPORTED: "FormatUnsupported",
                CODEC_UNSUPPORTED: "CodecUnsupported"
              };
              R.default = L;
            }
          ),
          /***/
          "./src/demux/exp-golomb.js": (
            /*!*********************************!*\
              !*** ./src/demux/exp-golomb.js ***!
              \*********************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), d = (
                /** @class */
                function() {
                  function o(l) {
                    this.TAG = "ExpGolomb", this._buffer = l, this._buffer_index = 0, this._total_bytes = l.byteLength, this._total_bits = l.byteLength * 8, this._current_word = 0, this._current_word_bits_left = 0;
                  }
                  return o.prototype.destroy = function() {
                    this._buffer = null;
                  }, o.prototype._fillCurrentWord = function() {
                    var l = this._total_bytes - this._buffer_index;
                    if (l <= 0)
                      throw new L.IllegalStateException("ExpGolomb: _fillCurrentWord() but no bytes available");
                    var m = Math.min(4, l), f = new Uint8Array(4);
                    f.set(this._buffer.subarray(this._buffer_index, this._buffer_index + m)), this._current_word = new DataView(f.buffer).getUint32(0, !1), this._buffer_index += m, this._current_word_bits_left = m * 8;
                  }, o.prototype.readBits = function(l) {
                    if (l > 32)
                      throw new L.InvalidArgumentException("ExpGolomb: readBits() bits exceeded max 32bits!");
                    if (l <= this._current_word_bits_left) {
                      var m = this._current_word >>> 32 - l;
                      return this._current_word <<= l, this._current_word_bits_left -= l, m;
                    }
                    var f = this._current_word_bits_left ? this._current_word : 0;
                    f = f >>> 32 - this._current_word_bits_left;
                    var v = l - this._current_word_bits_left;
                    this._fillCurrentWord();
                    var A = Math.min(v, this._current_word_bits_left), g = this._current_word >>> 32 - A;
                    return this._current_word <<= A, this._current_word_bits_left -= A, f = f << A | g, f;
                  }, o.prototype.readBool = function() {
                    return this.readBits(1) === 1;
                  }, o.prototype.readByte = function() {
                    return this.readBits(8);
                  }, o.prototype._skipLeadingZero = function() {
                    var l;
                    for (l = 0; l < this._current_word_bits_left; l++)
                      if (this._current_word & 2147483648 >>> l)
                        return this._current_word <<= l, this._current_word_bits_left -= l, l;
                    return this._fillCurrentWord(), l + this._skipLeadingZero();
                  }, o.prototype.readUEG = function() {
                    var l = this._skipLeadingZero();
                    return this.readBits(l + 1) - 1;
                  }, o.prototype.readSEG = function() {
                    var l = this.readUEG();
                    return l & 1 ? l + 1 >>> 1 : -1 * (l >>> 1);
                  }, o;
                }()
              );
              R.default = d;
            }
          ),
          /***/
          "./src/demux/flv-demuxer.js": (
            /*!**********************************!*\
              !*** ./src/demux/flv-demuxer.js ***!
              \**********************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), d = S(
                /*! ./amf-parser.js */
                "./src/demux/amf-parser.js"
              ), o = S(
                /*! ./sps-parser.js */
                "./src/demux/sps-parser.js"
              ), l = S(
                /*! ./demux-errors.js */
                "./src/demux/demux-errors.js"
              ), m = S(
                /*! ../core/media-info.js */
                "./src/core/media-info.js"
              ), f = S(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              );
              function v(g, c) {
                return g[c] << 24 | g[c + 1] << 16 | g[c + 2] << 8 | g[c + 3];
              }
              var A = (
                /** @class */
                function() {
                  function g(c, p) {
                    this.TAG = "FLVDemuxer", this._config = p, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null, this._dataOffset = c.dataOffset, this._firstParse = !0, this._dispatch = !1, this._hasAudio = c.hasAudioTrack, this._hasVideo = c.hasVideoTrack, this._hasAudioFlagOverrided = !1, this._hasVideoFlagOverrided = !1, this._audioInitialMetadataDispatched = !1, this._videoInitialMetadataDispatched = !1, this._mediaInfo = new m.default(), this._mediaInfo.hasAudio = this._hasAudio, this._mediaInfo.hasVideo = this._hasVideo, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._naluLengthSize = 4, this._timestampBase = 0, this._timescale = 1e3, this._duration = 0, this._durationOverrided = !1, this._referenceFrameRate = {
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
                      var n = new ArrayBuffer(2);
                      return new DataView(n).setInt16(0, 256, !0), new Int16Array(n)[0] === 256;
                    }();
                  }
                  return g.prototype.destroy = function() {
                    this._mediaInfo = null, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._videoTrack = null, this._audioTrack = null, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null;
                  }, g.probe = function(c) {
                    var p = new Uint8Array(c), n = { match: !1 };
                    if (p[0] !== 70 || p[1] !== 76 || p[2] !== 86 || p[3] !== 1)
                      return n;
                    var a = (p[4] & 4) >>> 2 !== 0, _ = (p[4] & 1) !== 0, s = v(p, 5);
                    return s < 9 ? n : {
                      match: !0,
                      consumed: s,
                      dataOffset: s,
                      hasAudioTrack: a,
                      hasVideoTrack: _
                    };
                  }, g.prototype.bindDataSource = function(c) {
                    return c.onDataArrival = this.parseChunks.bind(this), this;
                  }, Object.defineProperty(g.prototype, "onTrackMetadata", {
                    // prototype: function(type: string, metadata: any): void
                    get: function() {
                      return this._onTrackMetadata;
                    },
                    set: function(c) {
                      this._onTrackMetadata = c;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(g.prototype, "onMediaInfo", {
                    // prototype: function(mediaInfo: MediaInfo): void
                    get: function() {
                      return this._onMediaInfo;
                    },
                    set: function(c) {
                      this._onMediaInfo = c;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(g.prototype, "onMetaDataArrived", {
                    get: function() {
                      return this._onMetaDataArrived;
                    },
                    set: function(c) {
                      this._onMetaDataArrived = c;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(g.prototype, "onScriptDataArrived", {
                    get: function() {
                      return this._onScriptDataArrived;
                    },
                    set: function(c) {
                      this._onScriptDataArrived = c;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(g.prototype, "onError", {
                    // prototype: function(type: number, info: string): void
                    get: function() {
                      return this._onError;
                    },
                    set: function(c) {
                      this._onError = c;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(g.prototype, "onDataAvailable", {
                    // prototype: function(videoTrack: any, audioTrack: any): void
                    get: function() {
                      return this._onDataAvailable;
                    },
                    set: function(c) {
                      this._onDataAvailable = c;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(g.prototype, "timestampBase", {
                    // timestamp base for output samples, must be in milliseconds
                    get: function() {
                      return this._timestampBase;
                    },
                    set: function(c) {
                      this._timestampBase = c;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(g.prototype, "overridedDuration", {
                    get: function() {
                      return this._duration;
                    },
                    // Force-override media duration. Must be in milliseconds, int32
                    set: function(c) {
                      this._durationOverrided = !0, this._duration = c, this._mediaInfo.duration = c;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(g.prototype, "overridedHasAudio", {
                    // Force-override audio track present flag, boolean
                    set: function(c) {
                      this._hasAudioFlagOverrided = !0, this._hasAudio = c, this._mediaInfo.hasAudio = c;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(g.prototype, "overridedHasVideo", {
                    // Force-override video track present flag, boolean
                    set: function(c) {
                      this._hasVideoFlagOverrided = !0, this._hasVideo = c, this._mediaInfo.hasVideo = c;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), g.prototype.resetMediaInfo = function() {
                    this._mediaInfo = new m.default();
                  }, g.prototype._isInitialMetadataDispatched = function() {
                    return this._hasAudio && this._hasVideo ? this._audioInitialMetadataDispatched && this._videoInitialMetadataDispatched : this._hasAudio && !this._hasVideo ? this._audioInitialMetadataDispatched : !this._hasAudio && this._hasVideo ? this._videoInitialMetadataDispatched : !1;
                  }, g.prototype.parseChunks = function(c, p) {
                    if (!this._onError || !this._onMediaInfo || !this._onTrackMetadata || !this._onDataAvailable)
                      throw new f.IllegalStateException("Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");
                    var n = 0, a = this._littleEndian;
                    if (p === 0)
                      if (c.byteLength > 13) {
                        var _ = g.probe(c);
                        n = _.dataOffset;
                      } else
                        return 0;
                    if (this._firstParse) {
                      this._firstParse = !1, p + n !== this._dataOffset && L.default.w(this.TAG, "First time parsing but chunk byteStart invalid!");
                      var s = new DataView(c, n), h = s.getUint32(0, !a);
                      h !== 0 && L.default.w(this.TAG, "PrevTagSize0 !== 0 !!!"), n += 4;
                    }
                    for (; n < c.byteLength; ) {
                      this._dispatch = !0;
                      var s = new DataView(c, n);
                      if (n + 11 + 4 > c.byteLength)
                        break;
                      var y = s.getUint8(0), x = s.getUint32(0, !a) & 16777215;
                      if (n + 11 + x + 4 > c.byteLength)
                        break;
                      if (y !== 8 && y !== 9 && y !== 18) {
                        L.default.w(this.TAG, "Unsupported tag type " + y + ", skipped"), n += 11 + x + 4;
                        continue;
                      }
                      var O = s.getUint8(4), T = s.getUint8(5), I = s.getUint8(6), F = s.getUint8(7), W = I | T << 8 | O << 16 | F << 24, K = s.getUint32(7, !a) & 16777215;
                      K !== 0 && L.default.w(this.TAG, "Meet tag which has StreamID != 0!");
                      var P = n + 11;
                      switch (y) {
                        case 8:
                          this._parseAudioData(c, P, x, W);
                          break;
                        case 9:
                          this._parseVideoData(c, P, x, W, p + n);
                          break;
                        case 18:
                          this._parseScriptData(c, P, x);
                          break;
                      }
                      var C = s.getUint32(11 + x, !a);
                      C !== 11 + x && L.default.w(this.TAG, "Invalid PrevTagSize " + C), n += 11 + x + 4;
                    }
                    return this._isInitialMetadataDispatched() && this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack), n;
                  }, g.prototype._parseScriptData = function(c, p, n) {
                    var a = d.default.parseScriptData(c, p, n);
                    if (a.hasOwnProperty("onMetaData")) {
                      if (a.onMetaData == null || typeof a.onMetaData != "object") {
                        L.default.w(this.TAG, "Invalid onMetaData structure!");
                        return;
                      }
                      this._metadata && L.default.w(this.TAG, "Found another onMetaData tag!"), this._metadata = a;
                      var _ = this._metadata.onMetaData;
                      if (this._onMetaDataArrived && this._onMetaDataArrived(Object.assign({}, _)), typeof _.hasAudio == "boolean" && this._hasAudioFlagOverrided === !1 && (this._hasAudio = _.hasAudio, this._mediaInfo.hasAudio = this._hasAudio), typeof _.hasVideo == "boolean" && this._hasVideoFlagOverrided === !1 && (this._hasVideo = _.hasVideo, this._mediaInfo.hasVideo = this._hasVideo), typeof _.audiodatarate == "number" && (this._mediaInfo.audioDataRate = _.audiodatarate), typeof _.videodatarate == "number" && (this._mediaInfo.videoDataRate = _.videodatarate), typeof _.width == "number" && (this._mediaInfo.width = _.width), typeof _.height == "number" && (this._mediaInfo.height = _.height), typeof _.duration == "number") {
                        if (!this._durationOverrided) {
                          var s = Math.floor(_.duration * this._timescale);
                          this._duration = s, this._mediaInfo.duration = s;
                        }
                      } else
                        this._mediaInfo.duration = 0;
                      if (typeof _.framerate == "number") {
                        var h = Math.floor(_.framerate * 1e3);
                        if (h > 0) {
                          var y = h / 1e3;
                          this._referenceFrameRate.fixed = !0, this._referenceFrameRate.fps = y, this._referenceFrameRate.fps_num = h, this._referenceFrameRate.fps_den = 1e3, this._mediaInfo.fps = y;
                        }
                      }
                      if (typeof _.keyframes == "object") {
                        this._mediaInfo.hasKeyframesIndex = !0;
                        var x = _.keyframes;
                        this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(x), _.keyframes = null;
                      } else
                        this._mediaInfo.hasKeyframesIndex = !1;
                      this._dispatch = !1, this._mediaInfo.metadata = _, L.default.v(this.TAG, "Parsed onMetaData"), this._mediaInfo.isComplete() && this._onMediaInfo(this._mediaInfo);
                    }
                    Object.keys(a).length > 0 && this._onScriptDataArrived && this._onScriptDataArrived(Object.assign({}, a));
                  }, g.prototype._parseKeyframesIndex = function(c) {
                    for (var p = [], n = [], a = 1; a < c.times.length; a++) {
                      var _ = this._timestampBase + Math.floor(c.times[a] * 1e3);
                      p.push(_), n.push(c.filepositions[a]);
                    }
                    return {
                      times: p,
                      filepositions: n
                    };
                  }, g.prototype._parseAudioData = function(c, p, n, a) {
                    if (n <= 1) {
                      L.default.w(this.TAG, "Flv: Invalid audio packet, missing SoundData payload!");
                      return;
                    }
                    if (!(this._hasAudioFlagOverrided === !0 && this._hasAudio === !1)) {
                      this._littleEndian;
                      var _ = new DataView(c, p, n), s = _.getUint8(0), h = s >>> 4;
                      if (h !== 2 && h !== 10) {
                        this._onError(l.default.CODEC_UNSUPPORTED, "Flv: Unsupported audio codec idx: " + h);
                        return;
                      }
                      var y = 0, x = (s & 12) >>> 2;
                      if (x >= 0 && x <= 4)
                        y = this._flvSoundRateTable[x];
                      else {
                        this._onError(l.default.FORMAT_ERROR, "Flv: Invalid audio sample rate idx: " + x);
                        return;
                      }
                      var O = s & 1, T = this._audioMetadata, I = this._audioTrack;
                      if (T || (this._hasAudio === !1 && this._hasAudioFlagOverrided === !1 && (this._hasAudio = !0, this._mediaInfo.hasAudio = !0), T = this._audioMetadata = {}, T.type = "audio", T.id = I.id, T.timescale = this._timescale, T.duration = this._duration, T.audioSampleRate = y, T.channelCount = O === 0 ? 1 : 2), h === 10) {
                        var F = this._parseAACAudioData(c, p + 1, n - 1);
                        if (F == null)
                          return;
                        if (F.packetType === 0) {
                          T.config && L.default.w(this.TAG, "Found another AudioSpecificConfig!");
                          var W = F.data;
                          T.audioSampleRate = W.samplingRate, T.channelCount = W.channelCount, T.codec = W.codec, T.originalCodec = W.originalCodec, T.config = W.config, T.refSampleDuration = 1024 / T.audioSampleRate * T.timescale, L.default.v(this.TAG, "Parsed AudioSpecificConfig"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._audioInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("audio", T);
                          var K = this._mediaInfo;
                          K.audioCodec = T.originalCodec, K.audioSampleRate = T.audioSampleRate, K.audioChannelCount = T.channelCount, K.hasVideo ? K.videoCodec != null && (K.mimeType = 'video/x-flv; codecs="' + K.videoCodec + "," + K.audioCodec + '"') : K.mimeType = 'video/x-flv; codecs="' + K.audioCodec + '"', K.isComplete() && this._onMediaInfo(K);
                        } else if (F.packetType === 1) {
                          var P = this._timestampBase + a, C = { unit: F.data, length: F.data.byteLength, dts: P, pts: P };
                          I.samples.push(C), I.length += F.data.length;
                        } else
                          L.default.e(this.TAG, "Flv: Unsupported AAC data type " + F.packetType);
                      } else if (h === 2) {
                        if (!T.codec) {
                          var W = this._parseMP3AudioData(c, p + 1, n - 1, !0);
                          if (W == null)
                            return;
                          T.audioSampleRate = W.samplingRate, T.channelCount = W.channelCount, T.codec = W.codec, T.originalCodec = W.originalCodec, T.refSampleDuration = 1152 / T.audioSampleRate * T.timescale, L.default.v(this.TAG, "Parsed MPEG Audio Frame Header"), this._audioInitialMetadataDispatched = !0, this._onTrackMetadata("audio", T);
                          var K = this._mediaInfo;
                          K.audioCodec = T.codec, K.audioSampleRate = T.audioSampleRate, K.audioChannelCount = T.channelCount, K.audioDataRate = W.bitRate, K.hasVideo ? K.videoCodec != null && (K.mimeType = 'video/x-flv; codecs="' + K.videoCodec + "," + K.audioCodec + '"') : K.mimeType = 'video/x-flv; codecs="' + K.audioCodec + '"', K.isComplete() && this._onMediaInfo(K);
                        }
                        var D = this._parseMP3AudioData(c, p + 1, n - 1, !1);
                        if (D == null)
                          return;
                        var P = this._timestampBase + a, k = { unit: D, length: D.byteLength, dts: P, pts: P };
                        I.samples.push(k), I.length += D.length;
                      }
                    }
                  }, g.prototype._parseAACAudioData = function(c, p, n) {
                    if (n <= 1) {
                      L.default.w(this.TAG, "Flv: Invalid AAC packet, missing AACPacketType or/and Data!");
                      return;
                    }
                    var a = {}, _ = new Uint8Array(c, p, n);
                    return a.packetType = _[0], _[0] === 0 ? a.data = this._parseAACAudioSpecificConfig(c, p + 1, n - 1) : a.data = _.subarray(1), a;
                  }, g.prototype._parseAACAudioSpecificConfig = function(c, p, n) {
                    var a = new Uint8Array(c, p, n), _ = null, s = 0, h = 0, y = 0, x = null;
                    if (s = h = a[0] >>> 3, y = (a[0] & 7) << 1 | a[1] >>> 7, y < 0 || y >= this._mpegSamplingRates.length) {
                      this._onError(l.default.FORMAT_ERROR, "Flv: AAC invalid sampling frequency index!");
                      return;
                    }
                    var O = this._mpegSamplingRates[y], T = (a[1] & 120) >>> 3;
                    if (T < 0 || T >= 8) {
                      this._onError(l.default.FORMAT_ERROR, "Flv: AAC invalid channel configuration");
                      return;
                    }
                    s === 5 && (x = (a[1] & 7) << 1 | a[2] >>> 7, (a[2] & 124) >>> 2);
                    var I = self.navigator.userAgent.toLowerCase();
                    return I.indexOf("firefox") !== -1 ? y >= 6 ? (s = 5, _ = new Array(4), x = y - 3) : (s = 2, _ = new Array(2), x = y) : I.indexOf("android") !== -1 ? (s = 2, _ = new Array(2), x = y) : (s = 5, x = y, _ = new Array(4), y >= 6 ? x = y - 3 : T === 1 && (s = 2, _ = new Array(2), x = y)), _[0] = s << 3, _[0] |= (y & 15) >>> 1, _[1] = (y & 15) << 7, _[1] |= (T & 15) << 3, s === 5 && (_[1] |= (x & 15) >>> 1, _[2] = (x & 1) << 7, _[2] |= 8, _[3] = 0), {
                      config: _,
                      samplingRate: O,
                      channelCount: T,
                      codec: "mp4a.40." + s,
                      originalCodec: "mp4a.40." + h
                    };
                  }, g.prototype._parseMP3AudioData = function(c, p, n, a) {
                    if (n < 4) {
                      L.default.w(this.TAG, "Flv: Invalid MP3 packet, header missing!");
                      return;
                    }
                    this._littleEndian;
                    var _ = new Uint8Array(c, p, n), s = null;
                    if (a) {
                      if (_[0] !== 255)
                        return;
                      var h = _[1] >>> 3 & 3, y = (_[1] & 6) >> 1, x = (_[2] & 240) >>> 4, O = (_[2] & 12) >>> 2, T = _[3] >>> 6 & 3, I = T !== 3 ? 2 : 1, F = 0, W = 0, K = "mp3";
                      switch (h) {
                        case 0:
                          F = this._mpegAudioV25SampleRateTable[O];
                          break;
                        case 2:
                          F = this._mpegAudioV20SampleRateTable[O];
                          break;
                        case 3:
                          F = this._mpegAudioV10SampleRateTable[O];
                          break;
                      }
                      switch (y) {
                        case 1:
                          x < this._mpegAudioL3BitRateTable.length && (W = this._mpegAudioL3BitRateTable[x]);
                          break;
                        case 2:
                          x < this._mpegAudioL2BitRateTable.length && (W = this._mpegAudioL2BitRateTable[x]);
                          break;
                        case 3:
                          x < this._mpegAudioL1BitRateTable.length && (W = this._mpegAudioL1BitRateTable[x]);
                          break;
                      }
                      s = {
                        bitRate: W,
                        samplingRate: F,
                        channelCount: I,
                        codec: K,
                        originalCodec: K
                      };
                    } else
                      s = _;
                    return s;
                  }, g.prototype._parseVideoData = function(c, p, n, a, _) {
                    if (n <= 1) {
                      L.default.w(this.TAG, "Flv: Invalid video packet, missing VideoData payload!");
                      return;
                    }
                    if (!(this._hasVideoFlagOverrided === !0 && this._hasVideo === !1)) {
                      var s = new Uint8Array(c, p, n)[0], h = (s & 240) >>> 4, y = s & 15;
                      if (y !== 7) {
                        this._onError(l.default.CODEC_UNSUPPORTED, "Flv: Unsupported codec in video frame: " + y);
                        return;
                      }
                      this._parseAVCVideoPacket(c, p + 1, n - 1, a, _, h);
                    }
                  }, g.prototype._parseAVCVideoPacket = function(c, p, n, a, _, s) {
                    if (n < 4) {
                      L.default.w(this.TAG, "Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime");
                      return;
                    }
                    var h = this._littleEndian, y = new DataView(c, p, n), x = y.getUint8(0), O = y.getUint32(0, !h) & 16777215, T = O << 8 >> 8;
                    if (x === 0)
                      this._parseAVCDecoderConfigurationRecord(c, p + 4, n - 4);
                    else if (x === 1)
                      this._parseAVCVideoData(c, p + 4, n - 4, a, _, s, T);
                    else if (x !== 2) {
                      this._onError(l.default.FORMAT_ERROR, "Flv: Invalid video packet type " + x);
                      return;
                    }
                  }, g.prototype._parseAVCDecoderConfigurationRecord = function(c, p, n) {
                    if (n < 7) {
                      L.default.w(this.TAG, "Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");
                      return;
                    }
                    var a = this._videoMetadata, _ = this._videoTrack, s = this._littleEndian, h = new DataView(c, p, n);
                    a ? typeof a.avcc < "u" && L.default.w(this.TAG, "Found another AVCDecoderConfigurationRecord!") : (this._hasVideo === !1 && this._hasVideoFlagOverrided === !1 && (this._hasVideo = !0, this._mediaInfo.hasVideo = !0), a = this._videoMetadata = {}, a.type = "video", a.id = _.id, a.timescale = this._timescale, a.duration = this._duration);
                    var y = h.getUint8(0), x = h.getUint8(1);
                    if (h.getUint8(2), h.getUint8(3), y !== 1 || x === 0) {
                      this._onError(l.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord");
                      return;
                    }
                    if (this._naluLengthSize = (h.getUint8(4) & 3) + 1, this._naluLengthSize !== 3 && this._naluLengthSize !== 4) {
                      this._onError(l.default.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1));
                      return;
                    }
                    var O = h.getUint8(5) & 31;
                    if (O === 0) {
                      this._onError(l.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No SPS");
                      return;
                    } else
                      O > 1 && L.default.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: SPS Count = " + O);
                    for (var T = 6, I = 0; I < O; I++) {
                      var F = h.getUint16(T, !s);
                      if (T += 2, F !== 0) {
                        var W = new Uint8Array(c, p + T, F);
                        T += F;
                        var K = o.default.parseSPS(W);
                        if (I === 0) {
                          a.codecWidth = K.codec_size.width, a.codecHeight = K.codec_size.height, a.presentWidth = K.present_size.width, a.presentHeight = K.present_size.height, a.profile = K.profile_string, a.level = K.level_string, a.bitDepth = K.bit_depth, a.chromaFormat = K.chroma_format, a.sarRatio = K.sar_ratio, a.frameRate = K.frame_rate, (K.frame_rate.fixed === !1 || K.frame_rate.fps_num === 0 || K.frame_rate.fps_den === 0) && (a.frameRate = this._referenceFrameRate);
                          var P = a.frameRate.fps_den, C = a.frameRate.fps_num;
                          a.refSampleDuration = a.timescale * (P / C);
                          for (var D = W.subarray(1, 4), k = "avc1.", Z = 0; Z < 3; Z++) {
                            var oe = D[Z].toString(16);
                            oe.length < 2 && (oe = "0" + oe), k += oe;
                          }
                          a.codec = k;
                          var re = this._mediaInfo;
                          re.width = a.codecWidth, re.height = a.codecHeight, re.fps = a.frameRate.fps, re.profile = a.profile, re.level = a.level, re.refFrames = K.ref_frames, re.chromaFormat = K.chroma_format_string, re.sarNum = a.sarRatio.width, re.sarDen = a.sarRatio.height, re.videoCodec = k, re.hasAudio ? re.audioCodec != null && (re.mimeType = 'video/x-flv; codecs="' + re.videoCodec + "," + re.audioCodec + '"') : re.mimeType = 'video/x-flv; codecs="' + re.videoCodec + '"', re.isComplete() && this._onMediaInfo(re);
                        }
                      }
                    }
                    var ce = h.getUint8(T);
                    if (ce === 0) {
                      this._onError(l.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No PPS");
                      return;
                    } else
                      ce > 1 && L.default.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: PPS Count = " + ce);
                    T++;
                    for (var I = 0; I < ce; I++) {
                      var F = h.getUint16(T, !s);
                      T += 2, F !== 0 && (T += F);
                    }
                    a.avcc = new Uint8Array(n), a.avcc.set(new Uint8Array(c, p, n), 0), L.default.v(this.TAG, "Parsed AVCDecoderConfigurationRecord"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._videoInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("video", a);
                  }, g.prototype._parseAVCVideoData = function(c, p, n, a, _, s, h) {
                    for (var y = this._littleEndian, x = new DataView(c, p, n), O = [], T = 0, I = 0, F = this._naluLengthSize, W = this._timestampBase + a, K = s === 1; I < n; ) {
                      if (I + 4 >= n) {
                        L.default.w(this.TAG, "Malformed Nalu near timestamp " + W + ", offset = " + I + ", dataSize = " + n);
                        break;
                      }
                      var P = x.getUint32(I, !y);
                      if (F === 3 && (P >>>= 8), P > n - F) {
                        L.default.w(this.TAG, "Malformed Nalus near timestamp " + W + ", NaluSize > DataSize!");
                        return;
                      }
                      var C = x.getUint8(I + F) & 31;
                      C === 5 && (K = !0);
                      var D = new Uint8Array(c, p + I, F + P), k = { type: C, data: D };
                      O.push(k), T += D.byteLength, I += F + P;
                    }
                    if (O.length) {
                      var Z = this._videoTrack, oe = {
                        units: O,
                        length: T,
                        isKeyframe: K,
                        dts: W,
                        cts: h,
                        pts: W + h
                      };
                      K && (oe.fileposition = _), Z.samples.push(oe), Z.length += T;
                    }
                  }, g;
                }()
              );
              R.default = A;
            }
          ),
          /***/
          "./src/demux/sps-parser.js": (
            /*!*********************************!*\
              !*** ./src/demux/sps-parser.js ***!
              \*********************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! ./exp-golomb.js */
                "./src/demux/exp-golomb.js"
              ), d = (
                /** @class */
                function() {
                  function o() {
                  }
                  return o._ebsp2rbsp = function(l) {
                    for (var m = l, f = m.byteLength, v = new Uint8Array(f), A = 0, g = 0; g < f; g++)
                      g >= 2 && m[g] === 3 && m[g - 1] === 0 && m[g - 2] === 0 || (v[A] = m[g], A++);
                    return new Uint8Array(v.buffer, 0, A);
                  }, o.parseSPS = function(l) {
                    var m = o._ebsp2rbsp(l), f = new L.default(m);
                    f.readByte();
                    var v = f.readByte();
                    f.readByte();
                    var A = f.readByte();
                    f.readUEG();
                    var g = o.getProfileString(v), c = o.getLevelString(A), p = 1, n = 420, a = [0, 420, 422, 444], _ = 8;
                    if ((v === 100 || v === 110 || v === 122 || v === 244 || v === 44 || v === 83 || v === 86 || v === 118 || v === 128 || v === 138 || v === 144) && (p = f.readUEG(), p === 3 && f.readBits(1), p <= 3 && (n = a[p]), _ = f.readUEG() + 8, f.readUEG(), f.readBits(1), f.readBool()))
                      for (var s = p !== 3 ? 8 : 12, h = 0; h < s; h++)
                        f.readBool() && (h < 6 ? o._skipScalingList(f, 16) : o._skipScalingList(f, 64));
                    f.readUEG();
                    var y = f.readUEG();
                    if (y === 0)
                      f.readUEG();
                    else if (y === 1) {
                      f.readBits(1), f.readSEG(), f.readSEG();
                      for (var x = f.readUEG(), h = 0; h < x; h++)
                        f.readSEG();
                    }
                    var O = f.readUEG();
                    f.readBits(1);
                    var T = f.readUEG(), I = f.readUEG(), F = f.readBits(1);
                    F === 0 && f.readBits(1), f.readBits(1);
                    var W = 0, K = 0, P = 0, C = 0, D = f.readBool();
                    D && (W = f.readUEG(), K = f.readUEG(), P = f.readUEG(), C = f.readUEG());
                    var k = 1, Z = 1, oe = 0, re = !0, ce = 0, Ie = 0, ye = f.readBool();
                    if (ye) {
                      if (f.readBool()) {
                        var H = f.readByte(), $ = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2], ne = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
                        H > 0 && H < 16 ? (k = $[H - 1], Z = ne[H - 1]) : H === 255 && (k = f.readByte() << 8 | f.readByte(), Z = f.readByte() << 8 | f.readByte());
                      }
                      if (f.readBool() && f.readBool(), f.readBool() && (f.readBits(4), f.readBool() && f.readBits(24)), f.readBool() && (f.readUEG(), f.readUEG()), f.readBool()) {
                        var he = f.readBits(32), pe = f.readBits(32);
                        re = f.readBool(), ce = pe, Ie = he * 2, oe = ce / Ie;
                      }
                    }
                    var _e = 1;
                    (k !== 1 || Z !== 1) && (_e = k / Z);
                    var ue = 0, Re = 0;
                    if (p === 0)
                      ue = 1, Re = 2 - F;
                    else {
                      var Pe = p === 3 ? 1 : 2, Me = p === 1 ? 2 : 1;
                      ue = Pe, Re = Me * (2 - F);
                    }
                    var Ke = (T + 1) * 16, We = (2 - F) * ((I + 1) * 16);
                    Ke -= (W + K) * ue, We -= (P + C) * Re;
                    var Xe = Math.ceil(Ke * _e);
                    return f.destroy(), f = null, {
                      profile_string: g,
                      level_string: c,
                      bit_depth: _,
                      ref_frames: O,
                      chroma_format: n,
                      chroma_format_string: o.getChromaFormatString(n),
                      frame_rate: {
                        fixed: re,
                        fps: oe,
                        fps_den: Ie,
                        fps_num: ce
                      },
                      sar_ratio: {
                        width: k,
                        height: Z
                      },
                      codec_size: {
                        width: Ke,
                        height: We
                      },
                      present_size: {
                        width: Xe,
                        height: We
                      }
                    };
                  }, o._skipScalingList = function(l, m) {
                    for (var f = 8, v = 8, A = 0, g = 0; g < m; g++)
                      v !== 0 && (A = l.readSEG(), v = (f + A + 256) % 256), f = v === 0 ? f : v;
                  }, o.getProfileString = function(l) {
                    switch (l) {
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
                  }, o.getLevelString = function(l) {
                    return (l / 10).toFixed(1);
                  }, o.getChromaFormatString = function(l) {
                    switch (l) {
                      case 420:
                        return "4:2:0";
                      case 422:
                        return "4:2:2";
                      case 444:
                        return "4:4:4";
                      default:
                        return "Unknown";
                    }
                  }, o;
                }()
              );
              R.default = d;
            }
          ),
          /***/
          "./src/flv.js": (
            /*!********************!*\
              !*** ./src/flv.js ***!
              \********************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! ./utils/polyfill.js */
                "./src/utils/polyfill.js"
              ), d = S(
                /*! ./core/features.js */
                "./src/core/features.js"
              ), o = S(
                /*! ./io/loader.js */
                "./src/io/loader.js"
              ), l = S(
                /*! ./player/flv-player.js */
                "./src/player/flv-player.js"
              ), m = S(
                /*! ./player/native-player.js */
                "./src/player/native-player.js"
              ), f = S(
                /*! ./player/player-events.js */
                "./src/player/player-events.js"
              ), v = S(
                /*! ./player/player-errors.js */
                "./src/player/player-errors.js"
              ), A = S(
                /*! ./utils/logging-control.js */
                "./src/utils/logging-control.js"
              ), g = S(
                /*! ./utils/exception.js */
                "./src/utils/exception.js"
              );
              L.default.install();
              function c(_, s) {
                var h = _;
                if (h == null || typeof h != "object")
                  throw new g.InvalidArgumentException("MediaDataSource must be an javascript object!");
                if (!h.hasOwnProperty("type"))
                  throw new g.InvalidArgumentException("MediaDataSource must has type field to indicate video file type!");
                switch (h.type) {
                  case "flv":
                    return new l.default(h, s);
                  default:
                    return new m.default(h, s);
                }
              }
              function p() {
                return d.default.supportMSEH264Playback();
              }
              function n() {
                return d.default.getFeatureList();
              }
              var a = {};
              a.createPlayer = c, a.isSupported = p, a.getFeatureList = n, a.BaseLoader = o.BaseLoader, a.LoaderStatus = o.LoaderStatus, a.LoaderErrors = o.LoaderErrors, a.Events = f.default, a.ErrorTypes = v.ErrorTypes, a.ErrorDetails = v.ErrorDetails, a.FlvPlayer = l.default, a.NativePlayer = m.default, a.LoggingControl = A.default, Object.defineProperty(a, "version", {
                enumerable: !0,
                get: function() {
                  return "1.6.2";
                }
              }), R.default = a;
            }
          ),
          /***/
          "./src/index.js": (
            /*!**********************!*\
              !*** ./src/index.js ***!
              \**********************/
            /***/
            function(U, R, S) {
              U.exports = S(
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
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! ../utils/browser.js */
                "./src/utils/browser.js"
              ), d = S(
                /*! ./loader.js */
                "./src/io/loader.js"
              ), o = S(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), l = /* @__PURE__ */ function() {
                var f = function(v, A) {
                  return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, c) {
                    g.__proto__ = c;
                  } || function(g, c) {
                    for (var p in c)
                      Object.prototype.hasOwnProperty.call(c, p) && (g[p] = c[p]);
                  }, f(v, A);
                };
                return function(v, A) {
                  if (typeof A != "function" && A !== null)
                    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
                  f(v, A);
                  function g() {
                    this.constructor = v;
                  }
                  v.prototype = A === null ? Object.create(A) : (g.prototype = A.prototype, new g());
                };
              }(), m = (
                /** @class */
                function(f) {
                  l(v, f);
                  function v(A, g) {
                    var c = f.call(this, "fetch-stream-loader") || this;
                    return c.TAG = "FetchStreamLoader", c._seekHandler = A, c._config = g, c._needStash = !0, c._requestAbort = !1, c._contentLength = null, c._receivedLength = 0, c;
                  }
                  return v.isSupported = function() {
                    try {
                      var A = L.default.msedge && L.default.version.minor >= 15048, g = L.default.msedge ? A : !0;
                      return self.fetch && self.ReadableStream && g;
                    } catch {
                      return !1;
                    }
                  }, v.prototype.destroy = function() {
                    this.isWorking() && this.abort(), f.prototype.destroy.call(this);
                  }, v.prototype.open = function(A, g) {
                    var c = this;
                    this._dataSource = A, this._range = g;
                    var p = A.url;
                    this._config.reuseRedirectedURL && A.redirectedURL != null && (p = A.redirectedURL);
                    var n = this._seekHandler.getConfig(p, g), a = new self.Headers();
                    if (typeof n.headers == "object") {
                      var _ = n.headers;
                      for (var s in _)
                        _.hasOwnProperty(s) && a.append(s, _[s]);
                    }
                    var h = {
                      method: "GET",
                      headers: a,
                      mode: "cors",
                      cache: "default",
                      // The default policy of Fetch API in the whatwg standard
                      // Safari incorrectly indicates 'no-referrer' as default policy, fuck it
                      referrerPolicy: "no-referrer-when-downgrade"
                    };
                    if (typeof this._config.headers == "object")
                      for (var s in this._config.headers)
                        a.append(s, this._config.headers[s]);
                    A.cors === !1 && (h.mode = "same-origin"), A.withCredentials && (h.credentials = "include"), A.referrerPolicy && (h.referrerPolicy = A.referrerPolicy), self.AbortController && (this._abortController = new self.AbortController(), h.signal = this._abortController.signal), this._status = d.LoaderStatus.kConnecting, self.fetch(n.url, h).then(function(y) {
                      if (c._requestAbort) {
                        c._status = d.LoaderStatus.kIdle, y.body.cancel();
                        return;
                      }
                      if (y.ok && y.status >= 200 && y.status <= 299) {
                        if (y.url !== n.url && c._onURLRedirect) {
                          var x = c._seekHandler.removeURLParameters(y.url);
                          c._onURLRedirect(x);
                        }
                        var O = y.headers.get("Content-Length");
                        return O != null && (c._contentLength = parseInt(O), c._contentLength !== 0 && c._onContentLengthKnown && c._onContentLengthKnown(c._contentLength)), c._pump.call(c, y.body.getReader());
                      } else if (c._status = d.LoaderStatus.kError, c._onError)
                        c._onError(d.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: y.status, msg: y.statusText });
                      else
                        throw new o.RuntimeException("FetchStreamLoader: Http code invalid, " + y.status + " " + y.statusText);
                    }).catch(function(y) {
                      if (!(c._abortController && c._abortController.signal.aborted))
                        if (c._status = d.LoaderStatus.kError, c._onError)
                          c._onError(d.LoaderErrors.EXCEPTION, { code: -1, msg: y.message });
                        else
                          throw y;
                    });
                  }, v.prototype.abort = function() {
                    if (this._requestAbort = !0, (this._status !== d.LoaderStatus.kBuffering || !L.default.chrome) && this._abortController)
                      try {
                        this._abortController.abort();
                      } catch {
                      }
                  }, v.prototype._pump = function(A) {
                    var g = this;
                    return A.read().then(function(c) {
                      if (c.done)
                        if (g._contentLength !== null && g._receivedLength < g._contentLength) {
                          g._status = d.LoaderStatus.kError;
                          var p = d.LoaderErrors.EARLY_EOF, n = { code: -1, msg: "Fetch stream meet Early-EOF" };
                          if (g._onError)
                            g._onError(p, n);
                          else
                            throw new o.RuntimeException(n.msg);
                        } else
                          g._status = d.LoaderStatus.kComplete, g._onComplete && g._onComplete(g._range.from, g._range.from + g._receivedLength - 1);
                      else {
                        if (g._abortController && g._abortController.signal.aborted) {
                          g._status = d.LoaderStatus.kComplete;
                          return;
                        } else if (g._requestAbort === !0)
                          return g._status = d.LoaderStatus.kComplete, A.cancel();
                        g._status = d.LoaderStatus.kBuffering;
                        var a = c.value.buffer, _ = g._range.from + g._receivedLength;
                        g._receivedLength += a.byteLength, g._onDataArrival && g._onDataArrival(a, _, g._receivedLength), g._pump(A);
                      }
                    }).catch(function(c) {
                      if (g._abortController && g._abortController.signal.aborted) {
                        g._status = d.LoaderStatus.kComplete;
                        return;
                      }
                      if (!(c.code === 11 && L.default.msedge)) {
                        g._status = d.LoaderStatus.kError;
                        var p = 0, n = null;
                        if ((c.code === 19 || c.message === "network error") && // NETWORK_ERR
                        (g._contentLength === null || g._contentLength !== null && g._receivedLength < g._contentLength) ? (p = d.LoaderErrors.EARLY_EOF, n = { code: c.code, msg: "Fetch stream meet Early-EOF" }) : (p = d.LoaderErrors.EXCEPTION, n = { code: c.code, msg: c.message }), g._onError)
                          g._onError(p, n);
                        else
                          throw new o.RuntimeException(n.msg);
                      }
                    });
                  }, v;
                }(d.BaseLoader)
              );
              R.default = m;
            }
          ),
          /***/
          "./src/io/io-controller.js": (
            /*!*********************************!*\
              !*** ./src/io/io-controller.js ***!
              \*********************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), d = S(
                /*! ./speed-sampler.js */
                "./src/io/speed-sampler.js"
              ), o = S(
                /*! ./loader.js */
                "./src/io/loader.js"
              ), l = S(
                /*! ./fetch-stream-loader.js */
                "./src/io/fetch-stream-loader.js"
              ), m = S(
                /*! ./xhr-moz-chunked-loader.js */
                "./src/io/xhr-moz-chunked-loader.js"
              ), f = S(
                /*! ./xhr-range-loader.js */
                "./src/io/xhr-range-loader.js"
              ), v = S(
                /*! ./websocket-loader.js */
                "./src/io/websocket-loader.js"
              ), A = S(
                /*! ./range-seek-handler.js */
                "./src/io/range-seek-handler.js"
              ), g = S(
                /*! ./param-seek-handler.js */
                "./src/io/param-seek-handler.js"
              ), c = S(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), p = (
                /** @class */
                function() {
                  function n(a, _, s) {
                    this.TAG = "IOController", this._config = _, this._extraData = s, this._stashInitialSize = 1024 * 384, _.stashInitialSize != null && _.stashInitialSize > 0 && (this._stashInitialSize = _.stashInitialSize), this._stashUsed = 0, this._stashSize = this._stashInitialSize, this._bufferSize = 1024 * 1024 * 3, this._stashBuffer = new ArrayBuffer(this._bufferSize), this._stashByteStart = 0, this._enableStash = !0, _.enableStashBuffer === !1 && (this._enableStash = !1), this._loader = null, this._loaderClass = null, this._seekHandler = null, this._dataSource = a, this._isWebSocketURL = /wss?:\/\/(.+?)/.test(a.url), this._refTotalLength = a.filesize ? a.filesize : null, this._totalLength = this._refTotalLength, this._fullRequestFlag = !1, this._currentRange = null, this._redirectedURL = null, this._speedNormalized = 0, this._speedSampler = new d.default(), this._speedNormalizeList = [64, 128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096], this._isEarlyEofReconnecting = !1, this._paused = !1, this._resumeFrom = 0, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._selectSeekHandler(), this._selectLoader(), this._createLoader();
                  }
                  return n.prototype.destroy = function() {
                    this._loader.isWorking() && this._loader.abort(), this._loader.destroy(), this._loader = null, this._loaderClass = null, this._dataSource = null, this._stashBuffer = null, this._stashUsed = this._stashSize = this._bufferSize = this._stashByteStart = 0, this._currentRange = null, this._speedSampler = null, this._isEarlyEofReconnecting = !1, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._extraData = null;
                  }, n.prototype.isWorking = function() {
                    return this._loader && this._loader.isWorking() && !this._paused;
                  }, n.prototype.isPaused = function() {
                    return this._paused;
                  }, Object.defineProperty(n.prototype, "status", {
                    get: function() {
                      return this._loader.status;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(n.prototype, "extraData", {
                    get: function() {
                      return this._extraData;
                    },
                    set: function(a) {
                      this._extraData = a;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(n.prototype, "onDataArrival", {
                    // prototype: function onDataArrival(chunks: ArrayBuffer, byteStart: number): number
                    get: function() {
                      return this._onDataArrival;
                    },
                    set: function(a) {
                      this._onDataArrival = a;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(n.prototype, "onSeeked", {
                    get: function() {
                      return this._onSeeked;
                    },
                    set: function(a) {
                      this._onSeeked = a;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(n.prototype, "onError", {
                    // prototype: function onError(type: number, info: {code: number, msg: string}): void
                    get: function() {
                      return this._onError;
                    },
                    set: function(a) {
                      this._onError = a;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(n.prototype, "onComplete", {
                    get: function() {
                      return this._onComplete;
                    },
                    set: function(a) {
                      this._onComplete = a;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(n.prototype, "onRedirect", {
                    get: function() {
                      return this._onRedirect;
                    },
                    set: function(a) {
                      this._onRedirect = a;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(n.prototype, "onRecoveredEarlyEof", {
                    get: function() {
                      return this._onRecoveredEarlyEof;
                    },
                    set: function(a) {
                      this._onRecoveredEarlyEof = a;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(n.prototype, "currentURL", {
                    get: function() {
                      return this._dataSource.url;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(n.prototype, "hasRedirect", {
                    get: function() {
                      return this._redirectedURL != null || this._dataSource.redirectedURL != null;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(n.prototype, "currentRedirectedURL", {
                    get: function() {
                      return this._redirectedURL || this._dataSource.redirectedURL;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(n.prototype, "currentSpeed", {
                    // in KB/s
                    get: function() {
                      return this._loaderClass === f.default ? this._loader.currentSpeed : this._speedSampler.lastSecondKBps;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(n.prototype, "loaderType", {
                    get: function() {
                      return this._loader.type;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), n.prototype._selectSeekHandler = function() {
                    var a = this._config;
                    if (a.seekType === "range")
                      this._seekHandler = new A.default(this._config.rangeLoadZeroStart);
                    else if (a.seekType === "param") {
                      var _ = a.seekParamStart || "bstart", s = a.seekParamEnd || "bend";
                      this._seekHandler = new g.default(_, s);
                    } else if (a.seekType === "custom") {
                      if (typeof a.customSeekHandler != "function")
                        throw new c.InvalidArgumentException("Custom seekType specified in config but invalid customSeekHandler!");
                      this._seekHandler = new a.customSeekHandler();
                    } else
                      throw new c.InvalidArgumentException("Invalid seekType in config: " + a.seekType);
                  }, n.prototype._selectLoader = function() {
                    if (this._config.customLoader != null)
                      this._loaderClass = this._config.customLoader;
                    else if (this._isWebSocketURL)
                      this._loaderClass = v.default;
                    else if (l.default.isSupported())
                      this._loaderClass = l.default;
                    else if (m.default.isSupported())
                      this._loaderClass = m.default;
                    else if (f.default.isSupported())
                      this._loaderClass = f.default;
                    else
                      throw new c.RuntimeException("Your browser doesn't support xhr with arraybuffer responseType!");
                  }, n.prototype._createLoader = function() {
                    this._loader = new this._loaderClass(this._seekHandler, this._config), this._loader.needStashBuffer === !1 && (this._enableStash = !1), this._loader.onContentLengthKnown = this._onContentLengthKnown.bind(this), this._loader.onURLRedirect = this._onURLRedirect.bind(this), this._loader.onDataArrival = this._onLoaderChunkArrival.bind(this), this._loader.onComplete = this._onLoaderComplete.bind(this), this._loader.onError = this._onLoaderError.bind(this);
                  }, n.prototype.open = function(a) {
                    this._currentRange = { from: 0, to: -1 }, a && (this._currentRange.from = a), this._speedSampler.reset(), a || (this._fullRequestFlag = !0), this._loader.open(this._dataSource, Object.assign({}, this._currentRange));
                  }, n.prototype.abort = function() {
                    this._loader.abort(), this._paused && (this._paused = !1, this._resumeFrom = 0);
                  }, n.prototype.pause = function() {
                    this.isWorking() && (this._loader.abort(), this._stashUsed !== 0 ? (this._resumeFrom = this._stashByteStart, this._currentRange.to = this._stashByteStart - 1) : this._resumeFrom = this._currentRange.to + 1, this._stashUsed = 0, this._stashByteStart = 0, this._paused = !0);
                  }, n.prototype.resume = function() {
                    if (this._paused) {
                      this._paused = !1;
                      var a = this._resumeFrom;
                      this._resumeFrom = 0, this._internalSeek(a, !0);
                    }
                  }, n.prototype.seek = function(a) {
                    this._paused = !1, this._stashUsed = 0, this._stashByteStart = 0, this._internalSeek(a, !0);
                  }, n.prototype._internalSeek = function(a, _) {
                    this._loader.isWorking() && this._loader.abort(), this._flushStashBuffer(_), this._loader.destroy(), this._loader = null;
                    var s = { from: a, to: -1 };
                    this._currentRange = { from: s.from, to: -1 }, this._speedSampler.reset(), this._stashSize = this._stashInitialSize, this._createLoader(), this._loader.open(this._dataSource, s), this._onSeeked && this._onSeeked();
                  }, n.prototype.updateUrl = function(a) {
                    if (!a || typeof a != "string" || a.length === 0)
                      throw new c.InvalidArgumentException("Url must be a non-empty string!");
                    this._dataSource.url = a;
                  }, n.prototype._expandBuffer = function(a) {
                    for (var _ = this._stashSize; _ + 1024 * 1024 * 1 < a; )
                      _ *= 2;
                    if (_ += 1024 * 1024 * 1, _ !== this._bufferSize) {
                      var s = new ArrayBuffer(_);
                      if (this._stashUsed > 0) {
                        var h = new Uint8Array(this._stashBuffer, 0, this._stashUsed), y = new Uint8Array(s, 0, _);
                        y.set(h, 0);
                      }
                      this._stashBuffer = s, this._bufferSize = _;
                    }
                  }, n.prototype._normalizeSpeed = function(a) {
                    var _ = this._speedNormalizeList, s = _.length - 1, h = 0, y = 0, x = s;
                    if (a < _[0])
                      return _[0];
                    for (; y <= x; ) {
                      if (h = y + Math.floor((x - y) / 2), h === s || a >= _[h] && a < _[h + 1])
                        return _[h];
                      _[h] < a ? y = h + 1 : x = h - 1;
                    }
                  }, n.prototype._adjustStashSize = function(a) {
                    var _ = 0;
                    this._config.isLive || a < 512 ? _ = a : a >= 512 && a <= 1024 ? _ = Math.floor(a * 1.5) : _ = a * 2, _ > 8192 && (_ = 8192);
                    var s = _ * 1024 + 1024 * 1024 * 1;
                    this._bufferSize < s && this._expandBuffer(s), this._stashSize = _ * 1024;
                  }, n.prototype._dispatchChunks = function(a, _) {
                    return this._currentRange.to = _ + a.byteLength - 1, this._onDataArrival(a, _);
                  }, n.prototype._onURLRedirect = function(a) {
                    this._redirectedURL = a, this._onRedirect && this._onRedirect(a);
                  }, n.prototype._onContentLengthKnown = function(a) {
                    a && this._fullRequestFlag && (this._totalLength = a, this._fullRequestFlag = !1);
                  }, n.prototype._onLoaderChunkArrival = function(a, _, s) {
                    if (!this._onDataArrival)
                      throw new c.IllegalStateException("IOController: No existing consumer (onDataArrival) callback!");
                    if (!this._paused) {
                      this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, this._onRecoveredEarlyEof && this._onRecoveredEarlyEof()), this._speedSampler.addBytes(a.byteLength);
                      var h = this._speedSampler.lastSecondKBps;
                      if (h !== 0) {
                        var y = this._normalizeSpeed(h);
                        this._speedNormalized !== y && (this._speedNormalized = y, this._adjustStashSize(y));
                      }
                      if (this._enableStash)
                        if (this._stashUsed === 0 && this._stashByteStart === 0 && (this._stashByteStart = _), this._stashUsed + a.byteLength <= this._stashSize) {
                          var T = new Uint8Array(this._stashBuffer, 0, this._stashSize);
                          T.set(new Uint8Array(a), this._stashUsed), this._stashUsed += a.byteLength;
                        } else {
                          var T = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                          if (this._stashUsed > 0) {
                            var F = this._stashBuffer.slice(0, this._stashUsed), x = this._dispatchChunks(F, this._stashByteStart);
                            if (x < F.byteLength) {
                              if (x > 0) {
                                var I = new Uint8Array(F, x);
                                T.set(I, 0), this._stashUsed = I.byteLength, this._stashByteStart += x;
                              }
                            } else
                              this._stashUsed = 0, this._stashByteStart += x;
                            this._stashUsed + a.byteLength > this._bufferSize && (this._expandBuffer(this._stashUsed + a.byteLength), T = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), T.set(new Uint8Array(a), this._stashUsed), this._stashUsed += a.byteLength;
                          } else {
                            var x = this._dispatchChunks(a, _);
                            if (x < a.byteLength) {
                              var O = a.byteLength - x;
                              O > this._bufferSize && (this._expandBuffer(O), T = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), T.set(new Uint8Array(a, x), 0), this._stashUsed += O, this._stashByteStart = _ + x;
                            }
                          }
                        }
                      else if (this._stashUsed === 0) {
                        var x = this._dispatchChunks(a, _);
                        if (x < a.byteLength) {
                          var O = a.byteLength - x;
                          O > this._bufferSize && this._expandBuffer(O);
                          var T = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                          T.set(new Uint8Array(a, x), 0), this._stashUsed += O, this._stashByteStart = _ + x;
                        }
                      } else {
                        this._stashUsed + a.byteLength > this._bufferSize && this._expandBuffer(this._stashUsed + a.byteLength);
                        var T = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                        T.set(new Uint8Array(a), this._stashUsed), this._stashUsed += a.byteLength;
                        var x = this._dispatchChunks(this._stashBuffer.slice(0, this._stashUsed), this._stashByteStart);
                        if (x < this._stashUsed && x > 0) {
                          var I = new Uint8Array(this._stashBuffer, x);
                          T.set(I, 0);
                        }
                        this._stashUsed -= x, this._stashByteStart += x;
                      }
                    }
                  }, n.prototype._flushStashBuffer = function(a) {
                    if (this._stashUsed > 0) {
                      var _ = this._stashBuffer.slice(0, this._stashUsed), s = this._dispatchChunks(_, this._stashByteStart), h = _.byteLength - s;
                      if (s < _.byteLength)
                        if (a)
                          L.default.w(this.TAG, h + " bytes unconsumed data remain when flush buffer, dropped");
                        else {
                          if (s > 0) {
                            var y = new Uint8Array(this._stashBuffer, 0, this._bufferSize), x = new Uint8Array(_, s);
                            y.set(x, 0), this._stashUsed = x.byteLength, this._stashByteStart += s;
                          }
                          return 0;
                        }
                      return this._stashUsed = 0, this._stashByteStart = 0, h;
                    }
                    return 0;
                  }, n.prototype._onLoaderComplete = function(a, _) {
                    this._flushStashBuffer(!0), this._onComplete && this._onComplete(this._extraData);
                  }, n.prototype._onLoaderError = function(a, _) {
                    switch (L.default.e(this.TAG, "Loader error, code = " + _.code + ", msg = " + _.msg), this._flushStashBuffer(!1), this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, a = o.LoaderErrors.UNRECOVERABLE_EARLY_EOF), a) {
                      case o.LoaderErrors.EARLY_EOF: {
                        if (!this._config.isLive && this._totalLength) {
                          var s = this._currentRange.to + 1;
                          s < this._totalLength && (L.default.w(this.TAG, "Connection lost, trying reconnect..."), this._isEarlyEofReconnecting = !0, this._internalSeek(s, !1));
                          return;
                        }
                        a = o.LoaderErrors.UNRECOVERABLE_EARLY_EOF;
                        break;
                      }
                      case o.LoaderErrors.UNRECOVERABLE_EARLY_EOF:
                      case o.LoaderErrors.CONNECTING_TIMEOUT:
                      case o.LoaderErrors.HTTP_STATUS_CODE_INVALID:
                      case o.LoaderErrors.EXCEPTION:
                        break;
                    }
                    if (this._onError)
                      this._onError(a, _);
                    else
                      throw new c.RuntimeException("IOException: " + _.msg);
                  }, n;
                }()
              );
              R.default = p;
            }
          ),
          /***/
          "./src/io/loader.js": (
            /*!**************************!*\
              !*** ./src/io/loader.js ***!
              \**************************/
            /***/
            function(U, R, S) {
              S.r(R), S.d(R, {
                /* harmony export */
                LoaderStatus: function() {
                  return (
                    /* binding */
                    d
                  );
                },
                /* harmony export */
                LoaderErrors: function() {
                  return (
                    /* binding */
                    o
                  );
                },
                /* harmony export */
                BaseLoader: function() {
                  return (
                    /* binding */
                    l
                  );
                }
                /* harmony export */
              });
              var L = S(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), d = {
                kIdle: 0,
                kConnecting: 1,
                kBuffering: 2,
                kError: 3,
                kComplete: 4
              }, o = {
                OK: "OK",
                EXCEPTION: "Exception",
                HTTP_STATUS_CODE_INVALID: "HttpStatusCodeInvalid",
                CONNECTING_TIMEOUT: "ConnectingTimeout",
                EARLY_EOF: "EarlyEof",
                UNRECOVERABLE_EARLY_EOF: "UnrecoverableEarlyEof"
              }, l = (
                /** @class */
                function() {
                  function m(f) {
                    this._type = f || "undefined", this._status = d.kIdle, this._needStash = !1, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null;
                  }
                  return m.prototype.destroy = function() {
                    this._status = d.kIdle, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null;
                  }, m.prototype.isWorking = function() {
                    return this._status === d.kConnecting || this._status === d.kBuffering;
                  }, Object.defineProperty(m.prototype, "type", {
                    get: function() {
                      return this._type;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(m.prototype, "status", {
                    get: function() {
                      return this._status;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(m.prototype, "needStashBuffer", {
                    get: function() {
                      return this._needStash;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(m.prototype, "onContentLengthKnown", {
                    get: function() {
                      return this._onContentLengthKnown;
                    },
                    set: function(f) {
                      this._onContentLengthKnown = f;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(m.prototype, "onURLRedirect", {
                    get: function() {
                      return this._onURLRedirect;
                    },
                    set: function(f) {
                      this._onURLRedirect = f;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(m.prototype, "onDataArrival", {
                    get: function() {
                      return this._onDataArrival;
                    },
                    set: function(f) {
                      this._onDataArrival = f;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(m.prototype, "onError", {
                    get: function() {
                      return this._onError;
                    },
                    set: function(f) {
                      this._onError = f;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(m.prototype, "onComplete", {
                    get: function() {
                      return this._onComplete;
                    },
                    set: function(f) {
                      this._onComplete = f;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), m.prototype.open = function(f, v) {
                    throw new L.NotImplementedException("Unimplemented abstract function!");
                  }, m.prototype.abort = function() {
                    throw new L.NotImplementedException("Unimplemented abstract function!");
                  }, m;
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
            function(U, R, S) {
              S.r(R);
              var L = (
                /** @class */
                function() {
                  function d(o, l) {
                    this._startName = o, this._endName = l;
                  }
                  return d.prototype.getConfig = function(o, l) {
                    var m = o;
                    if (l.from !== 0 || l.to !== -1) {
                      var f = !0;
                      m.indexOf("?") === -1 && (m += "?", f = !1), f && (m += "&"), m += this._startName + "=" + l.from.toString(), l.to !== -1 && (m += "&" + this._endName + "=" + l.to.toString());
                    }
                    return {
                      url: m,
                      headers: {}
                    };
                  }, d.prototype.removeURLParameters = function(o) {
                    var l = o.split("?")[0], m = void 0, f = o.indexOf("?");
                    f !== -1 && (m = o.substring(f + 1));
                    var v = "";
                    if (m != null && m.length > 0)
                      for (var A = m.split("&"), g = 0; g < A.length; g++) {
                        var c = A[g].split("="), p = g > 0;
                        c[0] !== this._startName && c[0] !== this._endName && (p && (v += "&"), v += A[g]);
                      }
                    return v.length === 0 ? l : l + "?" + v;
                  }, d;
                }()
              );
              R.default = L;
            }
          ),
          /***/
          "./src/io/range-seek-handler.js": (
            /*!**************************************!*\
              !*** ./src/io/range-seek-handler.js ***!
              \**************************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = (
                /** @class */
                function() {
                  function d(o) {
                    this._zeroStart = o || !1;
                  }
                  return d.prototype.getConfig = function(o, l) {
                    var m = {};
                    if (l.from !== 0 || l.to !== -1) {
                      var f = void 0;
                      l.to !== -1 ? f = "bytes=" + l.from.toString() + "-" + l.to.toString() : f = "bytes=" + l.from.toString() + "-", m.Range = f;
                    } else
                      this._zeroStart && (m.Range = "bytes=0-");
                    return {
                      url: o,
                      headers: m
                    };
                  }, d.prototype.removeURLParameters = function(o) {
                    return o;
                  }, d;
                }()
              );
              R.default = L;
            }
          ),
          /***/
          "./src/io/speed-sampler.js": (
            /*!*********************************!*\
              !*** ./src/io/speed-sampler.js ***!
              \*********************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = (
                /** @class */
                function() {
                  function d() {
                    this._firstCheckpoint = 0, this._lastCheckpoint = 0, this._intervalBytes = 0, this._totalBytes = 0, this._lastSecondBytes = 0, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now;
                  }
                  return d.prototype.reset = function() {
                    this._firstCheckpoint = this._lastCheckpoint = 0, this._totalBytes = this._intervalBytes = 0, this._lastSecondBytes = 0;
                  }, d.prototype.addBytes = function(o) {
                    this._firstCheckpoint === 0 ? (this._firstCheckpoint = this._now(), this._lastCheckpoint = this._firstCheckpoint, this._intervalBytes += o, this._totalBytes += o) : this._now() - this._lastCheckpoint < 1e3 ? (this._intervalBytes += o, this._totalBytes += o) : (this._lastSecondBytes = this._intervalBytes, this._intervalBytes = o, this._totalBytes += o, this._lastCheckpoint = this._now());
                  }, Object.defineProperty(d.prototype, "currentKBps", {
                    get: function() {
                      this.addBytes(0);
                      var o = (this._now() - this._lastCheckpoint) / 1e3;
                      return o == 0 && (o = 1), this._intervalBytes / o / 1024;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(d.prototype, "lastSecondKBps", {
                    get: function() {
                      return this.addBytes(0), this._lastSecondBytes !== 0 ? this._lastSecondBytes / 1024 : this._now() - this._lastCheckpoint >= 500 ? this.currentKBps : 0;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(d.prototype, "averageKBps", {
                    get: function() {
                      var o = (this._now() - this._firstCheckpoint) / 1e3;
                      return this._totalBytes / o / 1024;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), d;
                }()
              );
              R.default = L;
            }
          ),
          /***/
          "./src/io/websocket-loader.js": (
            /*!************************************!*\
              !*** ./src/io/websocket-loader.js ***!
              \************************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! ./loader.js */
                "./src/io/loader.js"
              ), d = S(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), o = /* @__PURE__ */ function() {
                var m = function(f, v) {
                  return m = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(A, g) {
                    A.__proto__ = g;
                  } || function(A, g) {
                    for (var c in g)
                      Object.prototype.hasOwnProperty.call(g, c) && (A[c] = g[c]);
                  }, m(f, v);
                };
                return function(f, v) {
                  if (typeof v != "function" && v !== null)
                    throw new TypeError("Class extends value " + String(v) + " is not a constructor or null");
                  m(f, v);
                  function A() {
                    this.constructor = f;
                  }
                  f.prototype = v === null ? Object.create(v) : (A.prototype = v.prototype, new A());
                };
              }(), l = (
                /** @class */
                function(m) {
                  o(f, m);
                  function f() {
                    var v = m.call(this, "websocket-loader") || this;
                    return v.TAG = "WebSocketLoader", v._needStash = !0, v._ws = null, v._requestAbort = !1, v._receivedLength = 0, v;
                  }
                  return f.isSupported = function() {
                    try {
                      return typeof self.WebSocket < "u";
                    } catch {
                      return !1;
                    }
                  }, f.prototype.destroy = function() {
                    this._ws && this.abort(), m.prototype.destroy.call(this);
                  }, f.prototype.open = function(v) {
                    try {
                      var A = this._ws = new self.WebSocket(v.url);
                      A.binaryType = "arraybuffer", A.onopen = this._onWebSocketOpen.bind(this), A.onclose = this._onWebSocketClose.bind(this), A.onmessage = this._onWebSocketMessage.bind(this), A.onerror = this._onWebSocketError.bind(this), this._status = L.LoaderStatus.kConnecting;
                    } catch (c) {
                      this._status = L.LoaderStatus.kError;
                      var g = { code: c.code, msg: c.message };
                      if (this._onError)
                        this._onError(L.LoaderErrors.EXCEPTION, g);
                      else
                        throw new d.RuntimeException(g.msg);
                    }
                  }, f.prototype.abort = function() {
                    var v = this._ws;
                    v && (v.readyState === 0 || v.readyState === 1) && (this._requestAbort = !0, v.close()), this._ws = null, this._status = L.LoaderStatus.kComplete;
                  }, f.prototype._onWebSocketOpen = function(v) {
                    this._status = L.LoaderStatus.kBuffering;
                  }, f.prototype._onWebSocketClose = function(v) {
                    if (this._requestAbort === !0) {
                      this._requestAbort = !1;
                      return;
                    }
                    this._status = L.LoaderStatus.kComplete, this._onComplete && this._onComplete(0, this._receivedLength - 1);
                  }, f.prototype._onWebSocketMessage = function(v) {
                    var A = this;
                    if (v.data instanceof ArrayBuffer)
                      this._dispatchArrayBuffer(v.data);
                    else if (v.data instanceof Blob) {
                      var g = new FileReader();
                      g.onload = function() {
                        A._dispatchArrayBuffer(g.result);
                      }, g.readAsArrayBuffer(v.data);
                    } else {
                      this._status = L.LoaderStatus.kError;
                      var c = { code: -1, msg: "Unsupported WebSocket message type: " + v.data.constructor.name };
                      if (this._onError)
                        this._onError(L.LoaderErrors.EXCEPTION, c);
                      else
                        throw new d.RuntimeException(c.msg);
                    }
                  }, f.prototype._dispatchArrayBuffer = function(v) {
                    var A = v, g = this._receivedLength;
                    this._receivedLength += A.byteLength, this._onDataArrival && this._onDataArrival(A, g, this._receivedLength);
                  }, f.prototype._onWebSocketError = function(v) {
                    this._status = L.LoaderStatus.kError;
                    var A = {
                      code: v.code,
                      msg: v.message
                    };
                    if (this._onError)
                      this._onError(L.LoaderErrors.EXCEPTION, A);
                    else
                      throw new d.RuntimeException(A.msg);
                  }, f;
                }(L.BaseLoader)
              );
              R.default = l;
            }
          ),
          /***/
          "./src/io/xhr-moz-chunked-loader.js": (
            /*!******************************************!*\
              !*** ./src/io/xhr-moz-chunked-loader.js ***!
              \******************************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), d = S(
                /*! ./loader.js */
                "./src/io/loader.js"
              ), o = S(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), l = /* @__PURE__ */ function() {
                var f = function(v, A) {
                  return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, c) {
                    g.__proto__ = c;
                  } || function(g, c) {
                    for (var p in c)
                      Object.prototype.hasOwnProperty.call(c, p) && (g[p] = c[p]);
                  }, f(v, A);
                };
                return function(v, A) {
                  if (typeof A != "function" && A !== null)
                    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
                  f(v, A);
                  function g() {
                    this.constructor = v;
                  }
                  v.prototype = A === null ? Object.create(A) : (g.prototype = A.prototype, new g());
                };
              }(), m = (
                /** @class */
                function(f) {
                  l(v, f);
                  function v(A, g) {
                    var c = f.call(this, "xhr-moz-chunked-loader") || this;
                    return c.TAG = "MozChunkedLoader", c._seekHandler = A, c._config = g, c._needStash = !0, c._xhr = null, c._requestAbort = !1, c._contentLength = null, c._receivedLength = 0, c;
                  }
                  return v.isSupported = function() {
                    try {
                      var A = new XMLHttpRequest();
                      return A.open("GET", "https://example.com", !0), A.responseType = "moz-chunked-arraybuffer", A.responseType === "moz-chunked-arraybuffer";
                    } catch (g) {
                      return L.default.w("MozChunkedLoader", g.message), !1;
                    }
                  }, v.prototype.destroy = function() {
                    this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onloadend = null, this._xhr.onerror = null, this._xhr = null), f.prototype.destroy.call(this);
                  }, v.prototype.open = function(A, g) {
                    this._dataSource = A, this._range = g;
                    var c = A.url;
                    this._config.reuseRedirectedURL && A.redirectedURL != null && (c = A.redirectedURL);
                    var p = this._seekHandler.getConfig(c, g);
                    this._requestURL = p.url;
                    var n = this._xhr = new XMLHttpRequest();
                    if (n.open("GET", p.url, !0), n.responseType = "moz-chunked-arraybuffer", n.onreadystatechange = this._onReadyStateChange.bind(this), n.onprogress = this._onProgress.bind(this), n.onloadend = this._onLoadEnd.bind(this), n.onerror = this._onXhrError.bind(this), A.withCredentials && (n.withCredentials = !0), typeof p.headers == "object") {
                      var a = p.headers;
                      for (var _ in a)
                        a.hasOwnProperty(_) && n.setRequestHeader(_, a[_]);
                    }
                    if (typeof this._config.headers == "object") {
                      var a = this._config.headers;
                      for (var _ in a)
                        a.hasOwnProperty(_) && n.setRequestHeader(_, a[_]);
                    }
                    this._status = d.LoaderStatus.kConnecting, n.send();
                  }, v.prototype.abort = function() {
                    this._requestAbort = !0, this._xhr && this._xhr.abort(), this._status = d.LoaderStatus.kComplete;
                  }, v.prototype._onReadyStateChange = function(A) {
                    var g = A.target;
                    if (g.readyState === 2) {
                      if (g.responseURL != null && g.responseURL !== this._requestURL && this._onURLRedirect) {
                        var c = this._seekHandler.removeURLParameters(g.responseURL);
                        this._onURLRedirect(c);
                      }
                      if (g.status !== 0 && (g.status < 200 || g.status > 299))
                        if (this._status = d.LoaderStatus.kError, this._onError)
                          this._onError(d.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: g.status, msg: g.statusText });
                        else
                          throw new o.RuntimeException("MozChunkedLoader: Http code invalid, " + g.status + " " + g.statusText);
                      else
                        this._status = d.LoaderStatus.kBuffering;
                    }
                  }, v.prototype._onProgress = function(A) {
                    if (this._status !== d.LoaderStatus.kError) {
                      this._contentLength === null && A.total !== null && A.total !== 0 && (this._contentLength = A.total, this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength));
                      var g = A.target.response, c = this._range.from + this._receivedLength;
                      this._receivedLength += g.byteLength, this._onDataArrival && this._onDataArrival(g, c, this._receivedLength);
                    }
                  }, v.prototype._onLoadEnd = function(A) {
                    if (this._requestAbort === !0) {
                      this._requestAbort = !1;
                      return;
                    } else if (this._status === d.LoaderStatus.kError)
                      return;
                    this._status = d.LoaderStatus.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1);
                  }, v.prototype._onXhrError = function(A) {
                    this._status = d.LoaderStatus.kError;
                    var g = 0, c = null;
                    if (this._contentLength && A.loaded < this._contentLength ? (g = d.LoaderErrors.EARLY_EOF, c = { code: -1, msg: "Moz-Chunked stream meet Early-Eof" }) : (g = d.LoaderErrors.EXCEPTION, c = { code: -1, msg: A.constructor.name + " " + A.type }), this._onError)
                      this._onError(g, c);
                    else
                      throw new o.RuntimeException(c.msg);
                  }, v;
                }(d.BaseLoader)
              );
              R.default = m;
            }
          ),
          /***/
          "./src/io/xhr-range-loader.js": (
            /*!************************************!*\
              !*** ./src/io/xhr-range-loader.js ***!
              \************************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), d = S(
                /*! ./speed-sampler.js */
                "./src/io/speed-sampler.js"
              ), o = S(
                /*! ./loader.js */
                "./src/io/loader.js"
              ), l = S(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), m = /* @__PURE__ */ function() {
                var v = function(A, g) {
                  return v = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, p) {
                    c.__proto__ = p;
                  } || function(c, p) {
                    for (var n in p)
                      Object.prototype.hasOwnProperty.call(p, n) && (c[n] = p[n]);
                  }, v(A, g);
                };
                return function(A, g) {
                  if (typeof g != "function" && g !== null)
                    throw new TypeError("Class extends value " + String(g) + " is not a constructor or null");
                  v(A, g);
                  function c() {
                    this.constructor = A;
                  }
                  A.prototype = g === null ? Object.create(g) : (c.prototype = g.prototype, new c());
                };
              }(), f = (
                /** @class */
                function(v) {
                  m(A, v);
                  function A(g, c) {
                    var p = v.call(this, "xhr-range-loader") || this;
                    return p.TAG = "RangeLoader", p._seekHandler = g, p._config = c, p._needStash = !1, p._chunkSizeKBList = [
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
                    ], p._currentChunkSizeKB = 384, p._currentSpeedNormalized = 0, p._zeroSpeedChunkCount = 0, p._xhr = null, p._speedSampler = new d.default(), p._requestAbort = !1, p._waitForTotalLength = !1, p._totalLengthReceived = !1, p._currentRequestURL = null, p._currentRedirectedURL = null, p._currentRequestRange = null, p._totalLength = null, p._contentLength = null, p._receivedLength = 0, p._lastTimeLoaded = 0, p;
                  }
                  return A.isSupported = function() {
                    try {
                      var g = new XMLHttpRequest();
                      return g.open("GET", "https://example.com", !0), g.responseType = "arraybuffer", g.responseType === "arraybuffer";
                    } catch (c) {
                      return L.default.w("RangeLoader", c.message), !1;
                    }
                  }, A.prototype.destroy = function() {
                    this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr = null), v.prototype.destroy.call(this);
                  }, Object.defineProperty(A.prototype, "currentSpeed", {
                    get: function() {
                      return this._speedSampler.lastSecondKBps;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), A.prototype.open = function(g, c) {
                    this._dataSource = g, this._range = c, this._status = o.LoaderStatus.kConnecting;
                    var p = !1;
                    this._dataSource.filesize != null && this._dataSource.filesize !== 0 && (p = !0, this._totalLength = this._dataSource.filesize), !this._totalLengthReceived && !p ? (this._waitForTotalLength = !0, this._internalOpen(this._dataSource, { from: 0, to: -1 })) : this._openSubRange();
                  }, A.prototype._openSubRange = function() {
                    var g = this._currentChunkSizeKB * 1024, c = this._range.from + this._receivedLength, p = c + g;
                    this._contentLength != null && p - this._range.from >= this._contentLength && (p = this._range.from + this._contentLength - 1), this._currentRequestRange = { from: c, to: p }, this._internalOpen(this._dataSource, this._currentRequestRange);
                  }, A.prototype._internalOpen = function(g, c) {
                    this._lastTimeLoaded = 0;
                    var p = g.url;
                    this._config.reuseRedirectedURL && (this._currentRedirectedURL != null ? p = this._currentRedirectedURL : g.redirectedURL != null && (p = g.redirectedURL));
                    var n = this._seekHandler.getConfig(p, c);
                    this._currentRequestURL = n.url;
                    var a = this._xhr = new XMLHttpRequest();
                    if (a.open("GET", n.url, !0), a.responseType = "arraybuffer", a.onreadystatechange = this._onReadyStateChange.bind(this), a.onprogress = this._onProgress.bind(this), a.onload = this._onLoad.bind(this), a.onerror = this._onXhrError.bind(this), g.withCredentials && (a.withCredentials = !0), typeof n.headers == "object") {
                      var _ = n.headers;
                      for (var s in _)
                        _.hasOwnProperty(s) && a.setRequestHeader(s, _[s]);
                    }
                    if (typeof this._config.headers == "object") {
                      var _ = this._config.headers;
                      for (var s in _)
                        _.hasOwnProperty(s) && a.setRequestHeader(s, _[s]);
                    }
                    a.send();
                  }, A.prototype.abort = function() {
                    this._requestAbort = !0, this._internalAbort(), this._status = o.LoaderStatus.kComplete;
                  }, A.prototype._internalAbort = function() {
                    this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr.abort(), this._xhr = null);
                  }, A.prototype._onReadyStateChange = function(g) {
                    var c = g.target;
                    if (c.readyState === 2) {
                      if (c.responseURL != null) {
                        var p = this._seekHandler.removeURLParameters(c.responseURL);
                        c.responseURL !== this._currentRequestURL && p !== this._currentRedirectedURL && (this._currentRedirectedURL = p, this._onURLRedirect && this._onURLRedirect(p));
                      }
                      if (c.status >= 200 && c.status <= 299) {
                        if (this._waitForTotalLength)
                          return;
                        this._status = o.LoaderStatus.kBuffering;
                      } else if (this._status = o.LoaderStatus.kError, this._onError)
                        this._onError(o.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: c.status, msg: c.statusText });
                      else
                        throw new l.RuntimeException("RangeLoader: Http code invalid, " + c.status + " " + c.statusText);
                    }
                  }, A.prototype._onProgress = function(g) {
                    if (this._status !== o.LoaderStatus.kError) {
                      if (this._contentLength === null) {
                        var c = !1;
                        if (this._waitForTotalLength) {
                          this._waitForTotalLength = !1, this._totalLengthReceived = !0, c = !0;
                          var p = g.total;
                          this._internalAbort(), p != null & p !== 0 && (this._totalLength = p);
                        }
                        if (this._range.to === -1 ? this._contentLength = this._totalLength - this._range.from : this._contentLength = this._range.to - this._range.from + 1, c) {
                          this._openSubRange();
                          return;
                        }
                        this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength);
                      }
                      var n = g.loaded - this._lastTimeLoaded;
                      this._lastTimeLoaded = g.loaded, this._speedSampler.addBytes(n);
                    }
                  }, A.prototype._normalizeSpeed = function(g) {
                    var c = this._chunkSizeKBList, p = c.length - 1, n = 0, a = 0, _ = p;
                    if (g < c[0])
                      return c[0];
                    for (; a <= _; ) {
                      if (n = a + Math.floor((_ - a) / 2), n === p || g >= c[n] && g < c[n + 1])
                        return c[n];
                      c[n] < g ? a = n + 1 : _ = n - 1;
                    }
                  }, A.prototype._onLoad = function(g) {
                    if (this._status !== o.LoaderStatus.kError) {
                      if (this._waitForTotalLength) {
                        this._waitForTotalLength = !1;
                        return;
                      }
                      this._lastTimeLoaded = 0;
                      var c = this._speedSampler.lastSecondKBps;
                      if (c === 0 && (this._zeroSpeedChunkCount++, this._zeroSpeedChunkCount >= 3 && (c = this._speedSampler.currentKBps)), c !== 0) {
                        var p = this._normalizeSpeed(c);
                        this._currentSpeedNormalized !== p && (this._currentSpeedNormalized = p, this._currentChunkSizeKB = p);
                      }
                      var n = g.target.response, a = this._range.from + this._receivedLength;
                      this._receivedLength += n.byteLength;
                      var _ = !1;
                      this._contentLength != null && this._receivedLength < this._contentLength ? this._openSubRange() : _ = !0, this._onDataArrival && this._onDataArrival(n, a, this._receivedLength), _ && (this._status = o.LoaderStatus.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1));
                    }
                  }, A.prototype._onXhrError = function(g) {
                    this._status = o.LoaderStatus.kError;
                    var c = 0, p = null;
                    if (this._contentLength && this._receivedLength > 0 && this._receivedLength < this._contentLength ? (c = o.LoaderErrors.EARLY_EOF, p = { code: -1, msg: "RangeLoader meet Early-Eof" }) : (c = o.LoaderErrors.EXCEPTION, p = { code: -1, msg: g.constructor.name + " " + g.type }), this._onError)
                      this._onError(c, p);
                    else
                      throw new l.RuntimeException(p.msg);
                  }, A;
                }(o.BaseLoader)
              );
              R.default = f;
            }
          ),
          /***/
          "./src/player/flv-player.js": (
            /*!**********************************!*\
              !*** ./src/player/flv-player.js ***!
              \**********************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! events */
                "./node_modules/events/events.js"
              ), d = /* @__PURE__ */ S.n(L), o = S(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), l = S(
                /*! ../utils/browser.js */
                "./src/utils/browser.js"
              ), m = S(
                /*! ./player-events.js */
                "./src/player/player-events.js"
              ), f = S(
                /*! ../core/transmuxer.js */
                "./src/core/transmuxer.js"
              ), v = S(
                /*! ../core/transmuxing-events.js */
                "./src/core/transmuxing-events.js"
              ), A = S(
                /*! ../core/mse-controller.js */
                "./src/core/mse-controller.js"
              ), g = S(
                /*! ../core/mse-events.js */
                "./src/core/mse-events.js"
              ), c = S(
                /*! ./player-errors.js */
                "./src/player/player-errors.js"
              ), p = S(
                /*! ../config.js */
                "./src/config.js"
              ), n = S(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), a = (
                /** @class */
                function() {
                  function _(s, h) {
                    if (this.TAG = "FlvPlayer", this._type = "FlvPlayer", this._emitter = new (d())(), this._config = (0, p.createDefaultConfig)(), typeof h == "object" && Object.assign(this._config, h), s.type.toLowerCase() !== "flv")
                      throw new n.InvalidArgumentException("FlvPlayer requires an flv MediaDataSource input!");
                    s.isLive === !0 && (this._config.isLive = !0), this.e = {
                      onvLoadedMetadata: this._onvLoadedMetadata.bind(this),
                      onvSeeking: this._onvSeeking.bind(this),
                      onvCanPlay: this._onvCanPlay.bind(this),
                      onvStalled: this._onvStalled.bind(this),
                      onvProgress: this._onvProgress.bind(this)
                    }, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now, this._pendingSeekTime = null, this._requestSetTime = !1, this._seekpointRecord = null, this._progressChecker = null, this._mediaDataSource = s, this._mediaElement = null, this._msectl = null, this._transmuxer = null, this._mseSourceOpened = !1, this._hasPendingLoad = !1, this._receivedCanPlay = !1, this._mediaInfo = null, this._statisticsInfo = null;
                    var y = l.default.chrome && (l.default.version.major < 50 || l.default.version.major === 50 && l.default.version.build < 2661);
                    this._alwaysSeekKeyframe = !!(y || l.default.msedge || l.default.msie), this._alwaysSeekKeyframe && (this._config.accurateSeek = !1);
                  }
                  return _.prototype.destroy = function() {
                    this._progressChecker != null && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._transmuxer && this.unload(), this._mediaElement && this.detachMediaElement(), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null;
                  }, _.prototype.on = function(s, h) {
                    var y = this;
                    s === m.default.MEDIA_INFO ? this._mediaInfo != null && Promise.resolve().then(function() {
                      y._emitter.emit(m.default.MEDIA_INFO, y.mediaInfo);
                    }) : s === m.default.STATISTICS_INFO && this._statisticsInfo != null && Promise.resolve().then(function() {
                      y._emitter.emit(m.default.STATISTICS_INFO, y.statisticsInfo);
                    }), this._emitter.addListener(s, h);
                  }, _.prototype.off = function(s, h) {
                    this._emitter.removeListener(s, h);
                  }, _.prototype.attachMediaElement = function(s) {
                    var h = this;
                    if (this._mediaElement = s, s.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), s.addEventListener("seeking", this.e.onvSeeking), s.addEventListener("canplay", this.e.onvCanPlay), s.addEventListener("stalled", this.e.onvStalled), s.addEventListener("progress", this.e.onvProgress), this._msectl = new A.default(this._config), this._msectl.on(g.default.UPDATE_END, this._onmseUpdateEnd.bind(this)), this._msectl.on(g.default.BUFFER_FULL, this._onmseBufferFull.bind(this)), this._msectl.on(g.default.SOURCE_OPEN, function() {
                      h._mseSourceOpened = !0, h._hasPendingLoad && (h._hasPendingLoad = !1, h.load());
                    }), this._msectl.on(g.default.ERROR, function(y) {
                      h._emitter.emit(m.default.ERROR, c.ErrorTypes.MEDIA_ERROR, c.ErrorDetails.MEDIA_MSE_ERROR, y);
                    }), this._msectl.attachMediaElement(s), this._pendingSeekTime != null)
                      try {
                        s.currentTime = this._pendingSeekTime, this._pendingSeekTime = null;
                      } catch {
                      }
                  }, _.prototype.detachMediaElement = function() {
                    this._mediaElement && (this._msectl.detachMediaElement(), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement.removeEventListener("seeking", this.e.onvSeeking), this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay), this._mediaElement.removeEventListener("stalled", this.e.onvStalled), this._mediaElement.removeEventListener("progress", this.e.onvProgress), this._mediaElement = null), this._msectl && (this._msectl.destroy(), this._msectl = null);
                  }, _.prototype.load = function() {
                    var s = this;
                    if (!this._mediaElement)
                      throw new n.IllegalStateException("HTMLMediaElement must be attached before load()!");
                    if (this._transmuxer)
                      throw new n.IllegalStateException("FlvPlayer.load() has been called, please call unload() first!");
                    if (!this._hasPendingLoad) {
                      if (this._config.deferLoadAfterSourceOpen && this._mseSourceOpened === !1) {
                        this._hasPendingLoad = !0;
                        return;
                      }
                      this._mediaElement.readyState > 0 && (this._requestSetTime = !0, this._mediaElement.currentTime = 0), this._transmuxer = new f.default(this._mediaDataSource, this._config), this._transmuxer.on(v.default.INIT_SEGMENT, function(h, y) {
                        s._msectl.appendInitSegment(y);
                      }), this._transmuxer.on(v.default.MEDIA_SEGMENT, function(h, y) {
                        if (s._msectl.appendMediaSegment(y), s._config.lazyLoad && !s._config.isLive) {
                          var x = s._mediaElement.currentTime;
                          y.info.endDts >= (x + s._config.lazyLoadMaxDuration) * 1e3 && s._progressChecker == null && (o.default.v(s.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), s._suspendTransmuxer());
                        }
                      }), this._transmuxer.on(v.default.LOADING_COMPLETE, function() {
                        s._msectl.endOfStream(), s._emitter.emit(m.default.LOADING_COMPLETE);
                      }), this._transmuxer.on(v.default.RECOVERED_EARLY_EOF, function() {
                        s._emitter.emit(m.default.RECOVERED_EARLY_EOF);
                      }), this._transmuxer.on(v.default.IO_ERROR, function(h, y) {
                        s._emitter.emit(m.default.ERROR, c.ErrorTypes.NETWORK_ERROR, h, y);
                      }), this._transmuxer.on(v.default.DEMUX_ERROR, function(h, y) {
                        s._emitter.emit(m.default.ERROR, c.ErrorTypes.MEDIA_ERROR, h, { code: -1, msg: y });
                      }), this._transmuxer.on(v.default.MEDIA_INFO, function(h) {
                        s._mediaInfo = h, s._emitter.emit(m.default.MEDIA_INFO, Object.assign({}, h));
                      }), this._transmuxer.on(v.default.METADATA_ARRIVED, function(h) {
                        s._emitter.emit(m.default.METADATA_ARRIVED, h);
                      }), this._transmuxer.on(v.default.SCRIPTDATA_ARRIVED, function(h) {
                        s._emitter.emit(m.default.SCRIPTDATA_ARRIVED, h);
                      }), this._transmuxer.on(v.default.STATISTICS_INFO, function(h) {
                        s._statisticsInfo = s._fillStatisticsInfo(h), s._emitter.emit(m.default.STATISTICS_INFO, Object.assign({}, s._statisticsInfo));
                      }), this._transmuxer.on(v.default.RECOMMEND_SEEKPOINT, function(h) {
                        s._mediaElement && !s._config.accurateSeek && (s._requestSetTime = !0, s._mediaElement.currentTime = h / 1e3);
                      }), this._transmuxer.open();
                    }
                  }, _.prototype.unload = function() {
                    this._mediaElement && this._mediaElement.pause(), this._msectl && this._msectl.seek(0), this._transmuxer && (this._transmuxer.close(), this._transmuxer.destroy(), this._transmuxer = null);
                  }, _.prototype.play = function() {
                    return this._mediaElement.play();
                  }, _.prototype.pause = function() {
                    this._mediaElement.pause();
                  }, Object.defineProperty(_.prototype, "type", {
                    get: function() {
                      return this._type;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(_.prototype, "buffered", {
                    get: function() {
                      return this._mediaElement.buffered;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(_.prototype, "duration", {
                    get: function() {
                      return this._mediaElement.duration;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(_.prototype, "volume", {
                    get: function() {
                      return this._mediaElement.volume;
                    },
                    set: function(s) {
                      this._mediaElement.volume = s;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(_.prototype, "muted", {
                    get: function() {
                      return this._mediaElement.muted;
                    },
                    set: function(s) {
                      this._mediaElement.muted = s;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(_.prototype, "currentTime", {
                    get: function() {
                      return this._mediaElement ? this._mediaElement.currentTime : 0;
                    },
                    set: function(s) {
                      this._mediaElement ? this._internalSeek(s) : this._pendingSeekTime = s;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(_.prototype, "mediaInfo", {
                    get: function() {
                      return Object.assign({}, this._mediaInfo);
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(_.prototype, "statisticsInfo", {
                    get: function() {
                      return this._statisticsInfo == null && (this._statisticsInfo = {}), this._statisticsInfo = this._fillStatisticsInfo(this._statisticsInfo), Object.assign({}, this._statisticsInfo);
                    },
                    enumerable: !1,
                    configurable: !0
                  }), _.prototype._fillStatisticsInfo = function(s) {
                    if (s.playerType = this._type, !(this._mediaElement instanceof HTMLVideoElement))
                      return s;
                    var h = !0, y = 0, x = 0;
                    if (this._mediaElement.getVideoPlaybackQuality) {
                      var O = this._mediaElement.getVideoPlaybackQuality();
                      y = O.totalVideoFrames, x = O.droppedVideoFrames;
                    } else
                      this._mediaElement.webkitDecodedFrameCount != null ? (y = this._mediaElement.webkitDecodedFrameCount, x = this._mediaElement.webkitDroppedFrameCount) : h = !1;
                    return h && (s.decodedFrames = y, s.droppedFrames = x), s;
                  }, _.prototype._onmseUpdateEnd = function() {
                    if (!(!this._config.lazyLoad || this._config.isLive)) {
                      for (var s = this._mediaElement.buffered, h = this._mediaElement.currentTime, y = 0, x = 0; x < s.length; x++) {
                        var O = s.start(x), T = s.end(x);
                        if (O <= h && h < T) {
                          y = T;
                          break;
                        }
                      }
                      y >= h + this._config.lazyLoadMaxDuration && this._progressChecker == null && (o.default.v(this.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), this._suspendTransmuxer());
                    }
                  }, _.prototype._onmseBufferFull = function() {
                    o.default.v(this.TAG, "MSE SourceBuffer is full, suspend transmuxing task"), this._progressChecker == null && this._suspendTransmuxer();
                  }, _.prototype._suspendTransmuxer = function() {
                    this._transmuxer && (this._transmuxer.pause(), this._progressChecker == null && (this._progressChecker = window.setInterval(this._checkProgressAndResume.bind(this), 1e3)));
                  }, _.prototype._checkProgressAndResume = function() {
                    for (var s = this._mediaElement.currentTime, h = this._mediaElement.buffered, y = !1, x = 0; x < h.length; x++) {
                      var O = h.start(x), T = h.end(x);
                      if (s >= O && s < T) {
                        s >= T - this._config.lazyLoadRecoverDuration && (y = !0);
                        break;
                      }
                    }
                    y && (window.clearInterval(this._progressChecker), this._progressChecker = null, y && (o.default.v(this.TAG, "Continue loading from paused position"), this._transmuxer.resume()));
                  }, _.prototype._isTimepointBuffered = function(s) {
                    for (var h = this._mediaElement.buffered, y = 0; y < h.length; y++) {
                      var x = h.start(y), O = h.end(y);
                      if (s >= x && s < O)
                        return !0;
                    }
                    return !1;
                  }, _.prototype._internalSeek = function(s) {
                    var h = this._isTimepointBuffered(s), y = !1, x = 0;
                    if (s < 1 && this._mediaElement.buffered.length > 0) {
                      var O = this._mediaElement.buffered.start(0);
                      (O < 1 && s < O || l.default.safari) && (y = !0, x = l.default.safari ? 0.1 : O);
                    }
                    if (y)
                      this._requestSetTime = !0, this._mediaElement.currentTime = x;
                    else if (h) {
                      if (!this._alwaysSeekKeyframe)
                        this._requestSetTime = !0, this._mediaElement.currentTime = s;
                      else {
                        var T = this._msectl.getNearestKeyframe(Math.floor(s * 1e3));
                        this._requestSetTime = !0, T != null ? this._mediaElement.currentTime = T.dts / 1e3 : this._mediaElement.currentTime = s;
                      }
                      this._progressChecker != null && this._checkProgressAndResume();
                    } else
                      this._progressChecker != null && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._msectl.seek(s), this._transmuxer.seek(Math.floor(s * 1e3)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = s);
                  }, _.prototype._checkAndApplyUnbufferedSeekpoint = function() {
                    if (this._seekpointRecord)
                      if (this._seekpointRecord.recordTime <= this._now() - 100) {
                        var s = this._mediaElement.currentTime;
                        this._seekpointRecord = null, this._isTimepointBuffered(s) || (this._progressChecker != null && (window.clearTimeout(this._progressChecker), this._progressChecker = null), this._msectl.seek(s), this._transmuxer.seek(Math.floor(s * 1e3)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = s));
                      } else
                        window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
                  }, _.prototype._checkAndResumeStuckPlayback = function(s) {
                    var h = this._mediaElement;
                    if (s || !this._receivedCanPlay || h.readyState < 2) {
                      var y = h.buffered;
                      y.length > 0 && h.currentTime < y.start(0) && (o.default.w(this.TAG, "Playback seems stuck at " + h.currentTime + ", seek to " + y.start(0)), this._requestSetTime = !0, this._mediaElement.currentTime = y.start(0), this._mediaElement.removeEventListener("progress", this.e.onvProgress));
                    } else
                      this._mediaElement.removeEventListener("progress", this.e.onvProgress);
                  }, _.prototype._onvLoadedMetadata = function(s) {
                    this._pendingSeekTime != null && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null);
                  }, _.prototype._onvSeeking = function(s) {
                    var h = this._mediaElement.currentTime, y = this._mediaElement.buffered;
                    if (this._requestSetTime) {
                      this._requestSetTime = !1;
                      return;
                    }
                    if (h < 1 && y.length > 0) {
                      var x = y.start(0);
                      if (x < 1 && h < x || l.default.safari) {
                        this._requestSetTime = !0, this._mediaElement.currentTime = l.default.safari ? 0.1 : x;
                        return;
                      }
                    }
                    if (this._isTimepointBuffered(h)) {
                      if (this._alwaysSeekKeyframe) {
                        var O = this._msectl.getNearestKeyframe(Math.floor(h * 1e3));
                        O != null && (this._requestSetTime = !0, this._mediaElement.currentTime = O.dts / 1e3);
                      }
                      this._progressChecker != null && this._checkProgressAndResume();
                      return;
                    }
                    this._seekpointRecord = {
                      seekPoint: h,
                      recordTime: this._now()
                    }, window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
                  }, _.prototype._onvCanPlay = function(s) {
                    this._receivedCanPlay = !0, this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay);
                  }, _.prototype._onvStalled = function(s) {
                    this._checkAndResumeStuckPlayback(!0);
                  }, _.prototype._onvProgress = function(s) {
                    this._checkAndResumeStuckPlayback();
                  }, _;
                }()
              );
              R.default = a;
            }
          ),
          /***/
          "./src/player/native-player.js": (
            /*!*************************************!*\
              !*** ./src/player/native-player.js ***!
              \*************************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! events */
                "./node_modules/events/events.js"
              ), d = /* @__PURE__ */ S.n(L), o = S(
                /*! ./player-events.js */
                "./src/player/player-events.js"
              ), l = S(
                /*! ../config.js */
                "./src/config.js"
              ), m = S(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), f = (
                /** @class */
                function() {
                  function v(A, g) {
                    if (this.TAG = "NativePlayer", this._type = "NativePlayer", this._emitter = new (d())(), this._config = (0, l.createDefaultConfig)(), typeof g == "object" && Object.assign(this._config, g), A.type.toLowerCase() === "flv")
                      throw new m.InvalidArgumentException("NativePlayer does't support flv MediaDataSource input!");
                    if (A.hasOwnProperty("segments"))
                      throw new m.InvalidArgumentException("NativePlayer(" + A.type + ") doesn't support multipart playback!");
                    this.e = {
                      onvLoadedMetadata: this._onvLoadedMetadata.bind(this)
                    }, this._pendingSeekTime = null, this._statisticsReporter = null, this._mediaDataSource = A, this._mediaElement = null;
                  }
                  return v.prototype.destroy = function() {
                    this._mediaElement && (this.unload(), this.detachMediaElement()), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null;
                  }, v.prototype.on = function(A, g) {
                    var c = this;
                    A === o.default.MEDIA_INFO ? this._mediaElement != null && this._mediaElement.readyState !== 0 && Promise.resolve().then(function() {
                      c._emitter.emit(o.default.MEDIA_INFO, c.mediaInfo);
                    }) : A === o.default.STATISTICS_INFO && this._mediaElement != null && this._mediaElement.readyState !== 0 && Promise.resolve().then(function() {
                      c._emitter.emit(o.default.STATISTICS_INFO, c.statisticsInfo);
                    }), this._emitter.addListener(A, g);
                  }, v.prototype.off = function(A, g) {
                    this._emitter.removeListener(A, g);
                  }, v.prototype.attachMediaElement = function(A) {
                    if (this._mediaElement = A, A.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._pendingSeekTime != null)
                      try {
                        A.currentTime = this._pendingSeekTime, this._pendingSeekTime = null;
                      } catch {
                      }
                  }, v.prototype.detachMediaElement = function() {
                    this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement = null), this._statisticsReporter != null && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
                  }, v.prototype.load = function() {
                    if (!this._mediaElement)
                      throw new m.IllegalStateException("HTMLMediaElement must be attached before load()!");
                    this._mediaElement.src = this._mediaDataSource.url, this._mediaElement.readyState > 0 && (this._mediaElement.currentTime = 0), this._mediaElement.preload = "auto", this._mediaElement.load(), this._statisticsReporter = window.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval);
                  }, v.prototype.unload = function() {
                    this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src")), this._statisticsReporter != null && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
                  }, v.prototype.play = function() {
                    return this._mediaElement.play();
                  }, v.prototype.pause = function() {
                    this._mediaElement.pause();
                  }, Object.defineProperty(v.prototype, "type", {
                    get: function() {
                      return this._type;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(v.prototype, "buffered", {
                    get: function() {
                      return this._mediaElement.buffered;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(v.prototype, "duration", {
                    get: function() {
                      return this._mediaElement.duration;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(v.prototype, "volume", {
                    get: function() {
                      return this._mediaElement.volume;
                    },
                    set: function(A) {
                      this._mediaElement.volume = A;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(v.prototype, "muted", {
                    get: function() {
                      return this._mediaElement.muted;
                    },
                    set: function(A) {
                      this._mediaElement.muted = A;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(v.prototype, "currentTime", {
                    get: function() {
                      return this._mediaElement ? this._mediaElement.currentTime : 0;
                    },
                    set: function(A) {
                      this._mediaElement ? this._mediaElement.currentTime = A : this._pendingSeekTime = A;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(v.prototype, "mediaInfo", {
                    get: function() {
                      var A = this._mediaElement instanceof HTMLAudioElement ? "audio/" : "video/", g = {
                        mimeType: A + this._mediaDataSource.type
                      };
                      return this._mediaElement && (g.duration = Math.floor(this._mediaElement.duration * 1e3), this._mediaElement instanceof HTMLVideoElement && (g.width = this._mediaElement.videoWidth, g.height = this._mediaElement.videoHeight)), g;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(v.prototype, "statisticsInfo", {
                    get: function() {
                      var A = {
                        playerType: this._type,
                        url: this._mediaDataSource.url
                      };
                      if (!(this._mediaElement instanceof HTMLVideoElement))
                        return A;
                      var g = !0, c = 0, p = 0;
                      if (this._mediaElement.getVideoPlaybackQuality) {
                        var n = this._mediaElement.getVideoPlaybackQuality();
                        c = n.totalVideoFrames, p = n.droppedVideoFrames;
                      } else
                        this._mediaElement.webkitDecodedFrameCount != null ? (c = this._mediaElement.webkitDecodedFrameCount, p = this._mediaElement.webkitDroppedFrameCount) : g = !1;
                      return g && (A.decodedFrames = c, A.droppedFrames = p), A;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), v.prototype._onvLoadedMetadata = function(A) {
                    this._pendingSeekTime != null && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null), this._emitter.emit(o.default.MEDIA_INFO, this.mediaInfo);
                  }, v.prototype._reportStatisticsInfo = function() {
                    this._emitter.emit(o.default.STATISTICS_INFO, this.statisticsInfo);
                  }, v;
                }()
              );
              R.default = f;
            }
          ),
          /***/
          "./src/player/player-errors.js": (
            /*!*************************************!*\
              !*** ./src/player/player-errors.js ***!
              \*************************************/
            /***/
            function(U, R, S) {
              S.r(R), S.d(R, {
                /* harmony export */
                ErrorTypes: function() {
                  return (
                    /* binding */
                    o
                  );
                },
                /* harmony export */
                ErrorDetails: function() {
                  return (
                    /* binding */
                    l
                  );
                }
                /* harmony export */
              });
              var L = S(
                /*! ../io/loader.js */
                "./src/io/loader.js"
              ), d = S(
                /*! ../demux/demux-errors.js */
                "./src/demux/demux-errors.js"
              ), o = {
                NETWORK_ERROR: "NetworkError",
                MEDIA_ERROR: "MediaError",
                OTHER_ERROR: "OtherError"
              }, l = {
                NETWORK_EXCEPTION: L.LoaderErrors.EXCEPTION,
                NETWORK_STATUS_CODE_INVALID: L.LoaderErrors.HTTP_STATUS_CODE_INVALID,
                NETWORK_TIMEOUT: L.LoaderErrors.CONNECTING_TIMEOUT,
                NETWORK_UNRECOVERABLE_EARLY_EOF: L.LoaderErrors.UNRECOVERABLE_EARLY_EOF,
                MEDIA_MSE_ERROR: "MediaMSEError",
                MEDIA_FORMAT_ERROR: d.default.FORMAT_ERROR,
                MEDIA_FORMAT_UNSUPPORTED: d.default.FORMAT_UNSUPPORTED,
                MEDIA_CODEC_UNSUPPORTED: d.default.CODEC_UNSUPPORTED
              };
            }
          ),
          /***/
          "./src/player/player-events.js": (
            /*!*************************************!*\
              !*** ./src/player/player-events.js ***!
              \*************************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = {
                ERROR: "error",
                LOADING_COMPLETE: "loading_complete",
                RECOVERED_EARLY_EOF: "recovered_early_eof",
                MEDIA_INFO: "media_info",
                METADATA_ARRIVED: "metadata_arrived",
                SCRIPTDATA_ARRIVED: "scriptdata_arrived",
                STATISTICS_INFO: "statistics_info"
              };
              R.default = L;
            }
          ),
          /***/
          "./src/remux/aac-silent.js": (
            /*!*********************************!*\
              !*** ./src/remux/aac-silent.js ***!
              \*********************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = (
                /** @class */
                function() {
                  function d() {
                  }
                  return d.getSilentFrame = function(o, l) {
                    if (o === "mp4a.40.2") {
                      if (l === 1)
                        return new Uint8Array([0, 200, 0, 128, 35, 128]);
                      if (l === 2)
                        return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                      if (l === 3)
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                      if (l === 4)
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                      if (l === 5)
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                      if (l === 6)
                        return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                    } else {
                      if (l === 1)
                        return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                      if (l === 2)
                        return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                      if (l === 3)
                        return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                    }
                    return null;
                  }, d;
                }()
              );
              R.default = L;
            }
          ),
          /***/
          "./src/remux/mp4-generator.js": (
            /*!************************************!*\
              !*** ./src/remux/mp4-generator.js ***!
              \************************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = (
                /** @class */
                function() {
                  function d() {
                  }
                  return d.init = function() {
                    d.types = {
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
                    for (var o in d.types)
                      d.types.hasOwnProperty(o) && (d.types[o] = [
                        o.charCodeAt(0),
                        o.charCodeAt(1),
                        o.charCodeAt(2),
                        o.charCodeAt(3)
                      ]);
                    var l = d.constants = {};
                    l.FTYP = new Uint8Array([
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
                    ]), l.STSD_PREFIX = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1
                      // entry_count
                    ]), l.STTS = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0
                      // entry_count
                    ]), l.STSC = l.STCO = l.STTS, l.STSZ = new Uint8Array([
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
                    ]), l.HDLR_VIDEO = new Uint8Array([
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
                    ]), l.HDLR_AUDIO = new Uint8Array([
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
                    ]), l.DREF = new Uint8Array([
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
                    ]), l.SMHD = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0
                      // balance(2) + reserved(2)
                    ]), l.VMHD = new Uint8Array([
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
                  }, d.box = function(o) {
                    for (var l = 8, m = null, f = Array.prototype.slice.call(arguments, 1), v = f.length, A = 0; A < v; A++)
                      l += f[A].byteLength;
                    m = new Uint8Array(l), m[0] = l >>> 24 & 255, m[1] = l >>> 16 & 255, m[2] = l >>> 8 & 255, m[3] = l & 255, m.set(o, 4);
                    for (var g = 8, A = 0; A < v; A++)
                      m.set(f[A], g), g += f[A].byteLength;
                    return m;
                  }, d.generateInitSegment = function(o) {
                    var l = d.box(d.types.ftyp, d.constants.FTYP), m = d.moov(o), f = new Uint8Array(l.byteLength + m.byteLength);
                    return f.set(l, 0), f.set(m, l.byteLength), f;
                  }, d.moov = function(o) {
                    var l = d.mvhd(o.timescale, o.duration), m = d.trak(o), f = d.mvex(o);
                    return d.box(d.types.moov, l, m, f);
                  }, d.mvhd = function(o, l) {
                    return d.box(d.types.mvhd, new Uint8Array([
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
                      o >>> 24 & 255,
                      o >>> 16 & 255,
                      o >>> 8 & 255,
                      o & 255,
                      l >>> 24 & 255,
                      l >>> 16 & 255,
                      l >>> 8 & 255,
                      l & 255,
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
                  }, d.trak = function(o) {
                    return d.box(d.types.trak, d.tkhd(o), d.mdia(o));
                  }, d.tkhd = function(o) {
                    var l = o.id, m = o.duration, f = o.presentWidth, v = o.presentHeight;
                    return d.box(d.types.tkhd, new Uint8Array([
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
                      l >>> 24 & 255,
                      l >>> 16 & 255,
                      l >>> 8 & 255,
                      l & 255,
                      0,
                      0,
                      0,
                      0,
                      m >>> 24 & 255,
                      m >>> 16 & 255,
                      m >>> 8 & 255,
                      m & 255,
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
                      f >>> 8 & 255,
                      f & 255,
                      0,
                      0,
                      v >>> 8 & 255,
                      v & 255,
                      0,
                      0
                    ]));
                  }, d.mdia = function(o) {
                    return d.box(d.types.mdia, d.mdhd(o), d.hdlr(o), d.minf(o));
                  }, d.mdhd = function(o) {
                    var l = o.timescale, m = o.duration;
                    return d.box(d.types.mdhd, new Uint8Array([
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
                      l >>> 24 & 255,
                      l >>> 16 & 255,
                      l >>> 8 & 255,
                      l & 255,
                      m >>> 24 & 255,
                      m >>> 16 & 255,
                      m >>> 8 & 255,
                      m & 255,
                      85,
                      196,
                      0,
                      0
                      // pre_defined = 0
                    ]));
                  }, d.hdlr = function(o) {
                    var l = null;
                    return o.type === "audio" ? l = d.constants.HDLR_AUDIO : l = d.constants.HDLR_VIDEO, d.box(d.types.hdlr, l);
                  }, d.minf = function(o) {
                    var l = null;
                    return o.type === "audio" ? l = d.box(d.types.smhd, d.constants.SMHD) : l = d.box(d.types.vmhd, d.constants.VMHD), d.box(d.types.minf, l, d.dinf(), d.stbl(o));
                  }, d.dinf = function() {
                    var o = d.box(d.types.dinf, d.box(d.types.dref, d.constants.DREF));
                    return o;
                  }, d.stbl = function(o) {
                    var l = d.box(
                      d.types.stbl,
                      // type: stbl
                      d.stsd(o),
                      // Sample Description Table
                      d.box(d.types.stts, d.constants.STTS),
                      // Time-To-Sample
                      d.box(d.types.stsc, d.constants.STSC),
                      // Sample-To-Chunk
                      d.box(d.types.stsz, d.constants.STSZ),
                      // Sample size
                      d.box(d.types.stco, d.constants.STCO)
                      // Chunk offset
                    );
                    return l;
                  }, d.stsd = function(o) {
                    return o.type === "audio" ? o.codec === "mp3" ? d.box(d.types.stsd, d.constants.STSD_PREFIX, d.mp3(o)) : d.box(d.types.stsd, d.constants.STSD_PREFIX, d.mp4a(o)) : d.box(d.types.stsd, d.constants.STSD_PREFIX, d.avc1(o));
                  }, d.mp3 = function(o) {
                    var l = o.channelCount, m = o.audioSampleRate, f = new Uint8Array([
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
                      l,
                      0,
                      16,
                      0,
                      0,
                      0,
                      0,
                      m >>> 8 & 255,
                      m & 255,
                      0,
                      0
                    ]);
                    return d.box(d.types[".mp3"], f);
                  }, d.mp4a = function(o) {
                    var l = o.channelCount, m = o.audioSampleRate, f = new Uint8Array([
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
                      l,
                      0,
                      16,
                      0,
                      0,
                      0,
                      0,
                      m >>> 8 & 255,
                      m & 255,
                      0,
                      0
                    ]);
                    return d.box(d.types.mp4a, f, d.esds(o));
                  }, d.esds = function(o) {
                    var l = o.config || [], m = l.length, f = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      3,
                      23 + m,
                      0,
                      1,
                      0,
                      4,
                      15 + m,
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
                      m
                    ]).concat(l).concat([
                      6,
                      1,
                      2
                      // GASpecificConfig
                    ]));
                    return d.box(d.types.esds, f);
                  }, d.avc1 = function(o) {
                    var l = o.avcc, m = o.codecWidth, f = o.codecHeight, v = new Uint8Array([
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
                      m >>> 8 & 255,
                      m & 255,
                      f >>> 8 & 255,
                      f & 255,
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
                    return d.box(d.types.avc1, v, d.box(d.types.avcC, l));
                  }, d.mvex = function(o) {
                    return d.box(d.types.mvex, d.trex(o));
                  }, d.trex = function(o) {
                    var l = o.id, m = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      l >>> 24 & 255,
                      l >>> 16 & 255,
                      l >>> 8 & 255,
                      l & 255,
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
                    return d.box(d.types.trex, m);
                  }, d.moof = function(o, l) {
                    return d.box(d.types.moof, d.mfhd(o.sequenceNumber), d.traf(o, l));
                  }, d.mfhd = function(o) {
                    var l = new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      o >>> 24 & 255,
                      o >>> 16 & 255,
                      o >>> 8 & 255,
                      o & 255
                    ]);
                    return d.box(d.types.mfhd, l);
                  }, d.traf = function(o, l) {
                    var m = o.id, f = d.box(d.types.tfhd, new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      m >>> 24 & 255,
                      m >>> 16 & 255,
                      m >>> 8 & 255,
                      m & 255
                    ])), v = d.box(d.types.tfdt, new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      l >>> 24 & 255,
                      l >>> 16 & 255,
                      l >>> 8 & 255,
                      l & 255
                    ])), A = d.sdtp(o), g = d.trun(o, A.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
                    return d.box(d.types.traf, f, v, g, A);
                  }, d.sdtp = function(o) {
                    for (var l = o.samples || [], m = l.length, f = new Uint8Array(4 + m), v = 0; v < m; v++) {
                      var A = l[v].flags;
                      f[v + 4] = A.isLeading << 6 | A.dependsOn << 4 | A.isDependedOn << 2 | A.hasRedundancy;
                    }
                    return d.box(d.types.sdtp, f);
                  }, d.trun = function(o, l) {
                    var m = o.samples || [], f = m.length, v = 12 + 16 * f, A = new Uint8Array(v);
                    l += 8 + v, A.set([
                      0,
                      0,
                      15,
                      1,
                      f >>> 24 & 255,
                      f >>> 16 & 255,
                      f >>> 8 & 255,
                      f & 255,
                      l >>> 24 & 255,
                      l >>> 16 & 255,
                      l >>> 8 & 255,
                      l & 255
                    ], 0);
                    for (var g = 0; g < f; g++) {
                      var c = m[g].duration, p = m[g].size, n = m[g].flags, a = m[g].cts;
                      A.set([
                        c >>> 24 & 255,
                        c >>> 16 & 255,
                        c >>> 8 & 255,
                        c & 255,
                        p >>> 24 & 255,
                        p >>> 16 & 255,
                        p >>> 8 & 255,
                        p & 255,
                        n.isLeading << 2 | n.dependsOn,
                        n.isDependedOn << 6 | n.hasRedundancy << 4 | n.isNonSync,
                        0,
                        0,
                        a >>> 24 & 255,
                        a >>> 16 & 255,
                        a >>> 8 & 255,
                        a & 255
                      ], 12 + 16 * g);
                    }
                    return d.box(d.types.trun, A);
                  }, d.mdat = function(o) {
                    return d.box(d.types.mdat, o);
                  }, d;
                }()
              );
              L.init(), R.default = L;
            }
          ),
          /***/
          "./src/remux/mp4-remuxer.js": (
            /*!**********************************!*\
              !*** ./src/remux/mp4-remuxer.js ***!
              \**********************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! ../utils/logger.js */
                "./src/utils/logger.js"
              ), d = S(
                /*! ./mp4-generator.js */
                "./src/remux/mp4-generator.js"
              ), o = S(
                /*! ./aac-silent.js */
                "./src/remux/aac-silent.js"
              ), l = S(
                /*! ../utils/browser.js */
                "./src/utils/browser.js"
              ), m = S(
                /*! ../core/media-segment-info.js */
                "./src/core/media-segment-info.js"
              ), f = S(
                /*! ../utils/exception.js */
                "./src/utils/exception.js"
              ), v = (
                /** @class */
                function() {
                  function A(g) {
                    this.TAG = "MP4Remuxer", this._config = g, this._isLive = g.isLive === !0, this._dtsBase = -1, this._dtsBaseInited = !1, this._audioDtsBase = 1 / 0, this._videoDtsBase = 1 / 0, this._audioNextDts = void 0, this._videoNextDts = void 0, this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList = new m.MediaSegmentInfoList("audio"), this._videoSegmentInfoList = new m.MediaSegmentInfoList("video"), this._onInitSegment = null, this._onMediaSegment = null, this._forceFirstIDR = !!(l.default.chrome && (l.default.version.major < 50 || l.default.version.major === 50 && l.default.version.build < 2661)), this._fillSilentAfterSeek = l.default.msedge || l.default.msie, this._mp3UseMpegAudio = !l.default.firefox, this._fillAudioTimestampGap = this._config.fixAudioTimestampGap;
                  }
                  return A.prototype.destroy = function() {
                    this._dtsBase = -1, this._dtsBaseInited = !1, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList.clear(), this._audioSegmentInfoList = null, this._videoSegmentInfoList.clear(), this._videoSegmentInfoList = null, this._onInitSegment = null, this._onMediaSegment = null;
                  }, A.prototype.bindDataSource = function(g) {
                    return g.onDataAvailable = this.remux.bind(this), g.onTrackMetadata = this._onTrackMetadataReceived.bind(this), this;
                  }, Object.defineProperty(A.prototype, "onInitSegment", {
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
                    set: function(g) {
                      this._onInitSegment = g;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(A.prototype, "onMediaSegment", {
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
                    set: function(g) {
                      this._onMediaSegment = g;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), A.prototype.insertDiscontinuity = function() {
                    this._audioNextDts = this._videoNextDts = void 0;
                  }, A.prototype.seek = function(g) {
                    this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._videoSegmentInfoList.clear(), this._audioSegmentInfoList.clear();
                  }, A.prototype.remux = function(g, c) {
                    if (!this._onMediaSegment)
                      throw new f.IllegalStateException("MP4Remuxer: onMediaSegment callback must be specificed!");
                    this._dtsBaseInited || this._calculateDtsBase(g, c), this._remuxVideo(c), this._remuxAudio(g);
                  }, A.prototype._onTrackMetadataReceived = function(g, c) {
                    var p = null, n = "mp4", a = c.codec;
                    if (g === "audio")
                      this._audioMeta = c, c.codec === "mp3" && this._mp3UseMpegAudio ? (n = "mpeg", a = "", p = new Uint8Array()) : p = d.default.generateInitSegment(c);
                    else if (g === "video")
                      this._videoMeta = c, p = d.default.generateInitSegment(c);
                    else
                      return;
                    if (!this._onInitSegment)
                      throw new f.IllegalStateException("MP4Remuxer: onInitSegment callback must be specified!");
                    this._onInitSegment(g, {
                      type: g,
                      data: p.buffer,
                      codec: a,
                      container: g + "/" + n,
                      mediaDuration: c.duration
                      // in timescale 1000 (milliseconds)
                    });
                  }, A.prototype._calculateDtsBase = function(g, c) {
                    this._dtsBaseInited || (g.samples && g.samples.length && (this._audioDtsBase = g.samples[0].dts), c.samples && c.samples.length && (this._videoDtsBase = c.samples[0].dts), this._dtsBase = Math.min(this._audioDtsBase, this._videoDtsBase), this._dtsBaseInited = !0);
                  }, A.prototype.flushStashedSamples = function() {
                    var g = this._videoStashedLastSample, c = this._audioStashedLastSample, p = {
                      type: "video",
                      id: 1,
                      sequenceNumber: 0,
                      samples: [],
                      length: 0
                    };
                    g != null && (p.samples.push(g), p.length = g.length);
                    var n = {
                      type: "audio",
                      id: 2,
                      sequenceNumber: 0,
                      samples: [],
                      length: 0
                    };
                    c != null && (n.samples.push(c), n.length = c.length), this._videoStashedLastSample = null, this._audioStashedLastSample = null, this._remuxVideo(p, !0), this._remuxAudio(n, !0);
                  }, A.prototype._remuxAudio = function(g, c) {
                    if (this._audioMeta != null) {
                      var p = g, n = p.samples, a = void 0, _ = -1, s = -1, h = this._audioMeta.refSampleDuration, y = this._audioMeta.codec === "mp3" && this._mp3UseMpegAudio, x = this._dtsBaseInited && this._audioNextDts === void 0, O = !1;
                      if (!(!n || n.length === 0) && !(n.length === 1 && !c)) {
                        var T = 0, I = null, F = 0;
                        y ? (T = 0, F = p.length) : (T = 8, F = 8 + p.length);
                        var W = null;
                        if (n.length > 1 && (W = n.pop(), F -= W.length), this._audioStashedLastSample != null) {
                          var K = this._audioStashedLastSample;
                          this._audioStashedLastSample = null, n.unshift(K), F += K.length;
                        }
                        W != null && (this._audioStashedLastSample = W);
                        var P = n[0].dts - this._dtsBase;
                        if (this._audioNextDts)
                          a = P - this._audioNextDts;
                        else if (this._audioSegmentInfoList.isEmpty())
                          a = 0, this._fillSilentAfterSeek && !this._videoSegmentInfoList.isEmpty() && this._audioMeta.originalCodec !== "mp3" && (O = !0);
                        else {
                          var C = this._audioSegmentInfoList.getLastSampleBefore(P);
                          if (C != null) {
                            var D = P - (C.originalDts + C.duration);
                            D <= 3 && (D = 0);
                            var k = C.dts + C.duration + D;
                            a = P - k;
                          } else
                            a = 0;
                        }
                        if (O) {
                          var Z = P - a, oe = this._videoSegmentInfoList.getLastSegmentBefore(P);
                          if (oe != null && oe.beginDts < Z) {
                            var re = o.default.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);
                            if (re) {
                              var ce = oe.beginDts, Ie = Z - oe.beginDts;
                              L.default.v(this.TAG, "InsertPrefixSilentAudio: dts: " + ce + ", duration: " + Ie), n.unshift({ unit: re, dts: ce, pts: ce }), F += re.byteLength;
                            }
                          } else
                            O = !1;
                        }
                        for (var ye = [], H = 0; H < n.length; H++) {
                          var K = n[H], $ = K.unit, ne = K.dts - this._dtsBase, ce = ne, he = !1, pe = null, _e = 0;
                          if (!(ne < -1e-3)) {
                            if (this._audioMeta.codec !== "mp3") {
                              var ue = ne, Re = 3;
                              if (this._audioNextDts && (ue = this._audioNextDts), a = ne - ue, a <= -Re * h) {
                                L.default.w(this.TAG, "Dropping 1 audio frame (originalDts: " + ne + " ms ,curRefDts: " + ue + " ms)  due to dtsCorrection: " + a + " ms overlap.");
                                continue;
                              } else if (a >= Re * h && this._fillAudioTimestampGap && !l.default.safari) {
                                he = !0;
                                var Pe = Math.floor(a / h);
                                L.default.w(this.TAG, `Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.
` + ("originalDts: " + ne + " ms, curRefDts: " + ue + " ms, ") + ("dtsCorrection: " + Math.round(a) + " ms, generate: " + Pe + " frames")), ce = Math.floor(ue), _e = Math.floor(ue + h) - ce;
                                var re = o.default.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);
                                re == null && (L.default.w(this.TAG, "Unable to generate silent frame for " + (this._audioMeta.originalCodec + " with " + this._audioMeta.channelCount + " channels, repeat last frame")), re = $), pe = [];
                                for (var Me = 0; Me < Pe; Me++) {
                                  ue = ue + h;
                                  var Ke = Math.floor(ue), We = Math.floor(ue + h) - Ke, Xe = {
                                    dts: Ke,
                                    pts: Ke,
                                    cts: 0,
                                    unit: re,
                                    size: re.byteLength,
                                    duration: We,
                                    originalDts: ne,
                                    flags: {
                                      isLeading: 0,
                                      dependsOn: 1,
                                      isDependedOn: 0,
                                      hasRedundancy: 0
                                    }
                                  };
                                  pe.push(Xe), F += Xe.size;
                                }
                                this._audioNextDts = ue + h;
                              } else
                                ce = Math.floor(ue), _e = Math.floor(ue + h) - ce, this._audioNextDts = ue + h;
                            } else {
                              if (ce = ne - a, H !== n.length - 1) {
                                var Ye = n[H + 1].dts - this._dtsBase - a;
                                _e = Ye - ce;
                              } else if (W != null) {
                                var Ye = W.dts - this._dtsBase - a;
                                _e = Ye - ce;
                              } else
                                ye.length >= 1 ? _e = ye[ye.length - 1].duration : _e = Math.floor(h);
                              this._audioNextDts = ce + _e;
                            }
                            _ === -1 && (_ = ce), ye.push({
                              dts: ce,
                              pts: ce,
                              cts: 0,
                              unit: K.unit,
                              size: K.unit.byteLength,
                              duration: _e,
                              originalDts: ne,
                              flags: {
                                isLeading: 0,
                                dependsOn: 1,
                                isDependedOn: 0,
                                hasRedundancy: 0
                              }
                            }), he && ye.push.apply(ye, pe);
                          }
                        }
                        if (ye.length === 0) {
                          p.samples = [], p.length = 0;
                          return;
                        }
                        y ? I = new Uint8Array(F) : (I = new Uint8Array(F), I[0] = F >>> 24 & 255, I[1] = F >>> 16 & 255, I[2] = F >>> 8 & 255, I[3] = F & 255, I.set(d.default.types.mdat, 4));
                        for (var H = 0; H < ye.length; H++) {
                          var $ = ye[H].unit;
                          I.set($, T), T += $.byteLength;
                        }
                        var He = ye[ye.length - 1];
                        s = He.dts + He.duration;
                        var ze = new m.MediaSegmentInfo();
                        ze.beginDts = _, ze.endDts = s, ze.beginPts = _, ze.endPts = s, ze.originalBeginDts = ye[0].originalDts, ze.originalEndDts = He.originalDts + He.duration, ze.firstSample = new m.SampleInfo(ye[0].dts, ye[0].pts, ye[0].duration, ye[0].originalDts, !1), ze.lastSample = new m.SampleInfo(He.dts, He.pts, He.duration, He.originalDts, !1), this._isLive || this._audioSegmentInfoList.append(ze), p.samples = ye, p.sequenceNumber++;
                        var nt = null;
                        y ? nt = new Uint8Array() : nt = d.default.moof(p, _), p.samples = [], p.length = 0;
                        var st = {
                          type: "audio",
                          data: this._mergeBoxes(nt, I).buffer,
                          sampleCount: ye.length,
                          info: ze
                        };
                        y && x && (st.timestampOffset = _), this._onMediaSegment("audio", st);
                      }
                    }
                  }, A.prototype._remuxVideo = function(g, c) {
                    if (this._videoMeta != null) {
                      var p = g, n = p.samples, a = void 0, _ = -1, s = -1, h = -1, y = -1;
                      if (!(!n || n.length === 0) && !(n.length === 1 && !c)) {
                        var x = 8, O = null, T = 8 + g.length, I = null;
                        if (n.length > 1 && (I = n.pop(), T -= I.length), this._videoStashedLastSample != null) {
                          var F = this._videoStashedLastSample;
                          this._videoStashedLastSample = null, n.unshift(F), T += F.length;
                        }
                        I != null && (this._videoStashedLastSample = I);
                        var W = n[0].dts - this._dtsBase;
                        if (this._videoNextDts)
                          a = W - this._videoNextDts;
                        else if (this._videoSegmentInfoList.isEmpty())
                          a = 0;
                        else {
                          var K = this._videoSegmentInfoList.getLastSampleBefore(W);
                          if (K != null) {
                            var P = W - (K.originalDts + K.duration);
                            P <= 3 && (P = 0);
                            var C = K.dts + K.duration + P;
                            a = W - C;
                          } else
                            a = 0;
                        }
                        for (var D = new m.MediaSegmentInfo(), k = [], Z = 0; Z < n.length; Z++) {
                          var F = n[Z], oe = F.dts - this._dtsBase, re = F.isKeyframe, ce = oe - a, Ie = F.cts, ye = ce + Ie;
                          _ === -1 && (_ = ce, h = ye);
                          var H = 0;
                          if (Z !== n.length - 1) {
                            var $ = n[Z + 1].dts - this._dtsBase - a;
                            H = $ - ce;
                          } else if (I != null) {
                            var $ = I.dts - this._dtsBase - a;
                            H = $ - ce;
                          } else
                            k.length >= 1 ? H = k[k.length - 1].duration : H = Math.floor(this._videoMeta.refSampleDuration);
                          if (re) {
                            var ne = new m.SampleInfo(ce, ye, H, F.dts, !0);
                            ne.fileposition = F.fileposition, D.appendSyncPoint(ne);
                          }
                          k.push({
                            dts: ce,
                            pts: ye,
                            cts: Ie,
                            units: F.units,
                            size: F.length,
                            isKeyframe: re,
                            duration: H,
                            originalDts: oe,
                            flags: {
                              isLeading: 0,
                              dependsOn: re ? 2 : 1,
                              isDependedOn: re ? 1 : 0,
                              hasRedundancy: 0,
                              isNonSync: re ? 0 : 1
                            }
                          });
                        }
                        O = new Uint8Array(T), O[0] = T >>> 24 & 255, O[1] = T >>> 16 & 255, O[2] = T >>> 8 & 255, O[3] = T & 255, O.set(d.default.types.mdat, 4);
                        for (var Z = 0; Z < k.length; Z++)
                          for (var he = k[Z].units; he.length; ) {
                            var pe = he.shift(), _e = pe.data;
                            O.set(_e, x), x += _e.byteLength;
                          }
                        var ue = k[k.length - 1];
                        if (s = ue.dts + ue.duration, y = ue.pts + ue.duration, this._videoNextDts = s, D.beginDts = _, D.endDts = s, D.beginPts = h, D.endPts = y, D.originalBeginDts = k[0].originalDts, D.originalEndDts = ue.originalDts + ue.duration, D.firstSample = new m.SampleInfo(k[0].dts, k[0].pts, k[0].duration, k[0].originalDts, k[0].isKeyframe), D.lastSample = new m.SampleInfo(ue.dts, ue.pts, ue.duration, ue.originalDts, ue.isKeyframe), this._isLive || this._videoSegmentInfoList.append(D), p.samples = k, p.sequenceNumber++, this._forceFirstIDR) {
                          var Re = k[0].flags;
                          Re.dependsOn = 2, Re.isNonSync = 0;
                        }
                        var Pe = d.default.moof(p, _);
                        p.samples = [], p.length = 0, this._onMediaSegment("video", {
                          type: "video",
                          data: this._mergeBoxes(Pe, O).buffer,
                          sampleCount: k.length,
                          info: D
                        });
                      }
                    }
                  }, A.prototype._mergeBoxes = function(g, c) {
                    var p = new Uint8Array(g.byteLength + c.byteLength);
                    return p.set(g, 0), p.set(c, g.byteLength), p;
                  }, A;
                }()
              );
              R.default = v;
            }
          ),
          /***/
          "./src/utils/browser.js": (
            /*!******************************!*\
              !*** ./src/utils/browser.js ***!
              \******************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = {};
              function d() {
                var o = self.navigator.userAgent.toLowerCase(), l = /(edge)\/([\w.]+)/.exec(o) || /(opr)[\/]([\w.]+)/.exec(o) || /(chrome)[ \/]([\w.]+)/.exec(o) || /(iemobile)[\/]([\w.]+)/.exec(o) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(o) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(o) || /(webkit)[ \/]([\w.]+)/.exec(o) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(o) || /(msie) ([\w.]+)/.exec(o) || o.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(o) || o.indexOf("compatible") < 0 && /(firefox)[ \/]([\w.]+)/.exec(o) || [], m = /(ipad)/.exec(o) || /(ipod)/.exec(o) || /(windows phone)/.exec(o) || /(iphone)/.exec(o) || /(kindle)/.exec(o) || /(android)/.exec(o) || /(windows)/.exec(o) || /(mac)/.exec(o) || /(linux)/.exec(o) || /(cros)/.exec(o) || [], f = {
                  browser: l[5] || l[3] || l[1] || "",
                  version: l[2] || l[4] || "0",
                  majorVersion: l[4] || l[2] || "0",
                  platform: m[0] || ""
                }, v = {};
                if (f.browser) {
                  v[f.browser] = !0;
                  var A = f.majorVersion.split(".");
                  v.version = {
                    major: parseInt(f.majorVersion, 10),
                    string: f.version
                  }, A.length > 1 && (v.version.minor = parseInt(A[1], 10)), A.length > 2 && (v.version.build = parseInt(A[2], 10));
                }
                if (f.platform && (v[f.platform] = !0), (v.chrome || v.opr || v.safari) && (v.webkit = !0), v.rv || v.iemobile) {
                  v.rv && delete v.rv;
                  var g = "msie";
                  f.browser = g, v[g] = !0;
                }
                if (v.edge) {
                  delete v.edge;
                  var c = "msedge";
                  f.browser = c, v[c] = !0;
                }
                if (v.opr) {
                  var p = "opera";
                  f.browser = p, v[p] = !0;
                }
                if (v.safari && v.android) {
                  var n = "android";
                  f.browser = n, v[n] = !0;
                }
                v.name = f.browser, v.platform = f.platform;
                for (var a in L)
                  L.hasOwnProperty(a) && delete L[a];
                Object.assign(L, v);
              }
              d(), R.default = L;
            }
          ),
          /***/
          "./src/utils/exception.js": (
            /*!********************************!*\
              !*** ./src/utils/exception.js ***!
              \********************************/
            /***/
            function(U, R, S) {
              S.r(R), S.d(R, {
                /* harmony export */
                RuntimeException: function() {
                  return (
                    /* binding */
                    d
                  );
                },
                /* harmony export */
                IllegalStateException: function() {
                  return (
                    /* binding */
                    o
                  );
                },
                /* harmony export */
                InvalidArgumentException: function() {
                  return (
                    /* binding */
                    l
                  );
                },
                /* harmony export */
                NotImplementedException: function() {
                  return (
                    /* binding */
                    m
                  );
                }
                /* harmony export */
              });
              var L = /* @__PURE__ */ function() {
                var f = function(v, A) {
                  return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, c) {
                    g.__proto__ = c;
                  } || function(g, c) {
                    for (var p in c)
                      Object.prototype.hasOwnProperty.call(c, p) && (g[p] = c[p]);
                  }, f(v, A);
                };
                return function(v, A) {
                  if (typeof A != "function" && A !== null)
                    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
                  f(v, A);
                  function g() {
                    this.constructor = v;
                  }
                  v.prototype = A === null ? Object.create(A) : (g.prototype = A.prototype, new g());
                };
              }(), d = (
                /** @class */
                function() {
                  function f(v) {
                    this._message = v;
                  }
                  return Object.defineProperty(f.prototype, "name", {
                    get: function() {
                      return "RuntimeException";
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(f.prototype, "message", {
                    get: function() {
                      return this._message;
                    },
                    enumerable: !1,
                    configurable: !0
                  }), f.prototype.toString = function() {
                    return this.name + ": " + this.message;
                  }, f;
                }()
              ), o = (
                /** @class */
                function(f) {
                  L(v, f);
                  function v(A) {
                    return f.call(this, A) || this;
                  }
                  return Object.defineProperty(v.prototype, "name", {
                    get: function() {
                      return "IllegalStateException";
                    },
                    enumerable: !1,
                    configurable: !0
                  }), v;
                }(d)
              ), l = (
                /** @class */
                function(f) {
                  L(v, f);
                  function v(A) {
                    return f.call(this, A) || this;
                  }
                  return Object.defineProperty(v.prototype, "name", {
                    get: function() {
                      return "InvalidArgumentException";
                    },
                    enumerable: !1,
                    configurable: !0
                  }), v;
                }(d)
              ), m = (
                /** @class */
                function(f) {
                  L(v, f);
                  function v(A) {
                    return f.call(this, A) || this;
                  }
                  return Object.defineProperty(v.prototype, "name", {
                    get: function() {
                      return "NotImplementedException";
                    },
                    enumerable: !1,
                    configurable: !0
                  }), v;
                }(d)
              );
            }
          ),
          /***/
          "./src/utils/logger.js": (
            /*!*****************************!*\
              !*** ./src/utils/logger.js ***!
              \*****************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! events */
                "./node_modules/events/events.js"
              ), d = /* @__PURE__ */ S.n(L), o = (
                /** @class */
                function() {
                  function l() {
                  }
                  return l.e = function(m, f) {
                    (!m || l.FORCE_GLOBAL_TAG) && (m = l.GLOBAL_TAG);
                    var v = "[" + m + "] > " + f;
                    l.ENABLE_CALLBACK && l.emitter.emit("log", "error", v), l.ENABLE_ERROR && (console.error ? console.error(v) : console.warn ? console.warn(v) : console.log(v));
                  }, l.i = function(m, f) {
                    (!m || l.FORCE_GLOBAL_TAG) && (m = l.GLOBAL_TAG);
                    var v = "[" + m + "] > " + f;
                    l.ENABLE_CALLBACK && l.emitter.emit("log", "info", v), l.ENABLE_INFO && (console.info ? console.info(v) : console.log(v));
                  }, l.w = function(m, f) {
                    (!m || l.FORCE_GLOBAL_TAG) && (m = l.GLOBAL_TAG);
                    var v = "[" + m + "] > " + f;
                    l.ENABLE_CALLBACK && l.emitter.emit("log", "warn", v), l.ENABLE_WARN && (console.warn ? console.warn(v) : console.log(v));
                  }, l.d = function(m, f) {
                    (!m || l.FORCE_GLOBAL_TAG) && (m = l.GLOBAL_TAG);
                    var v = "[" + m + "] > " + f;
                    l.ENABLE_CALLBACK && l.emitter.emit("log", "debug", v), l.ENABLE_DEBUG && (console.debug ? console.debug(v) : console.log(v));
                  }, l.v = function(m, f) {
                    (!m || l.FORCE_GLOBAL_TAG) && (m = l.GLOBAL_TAG);
                    var v = "[" + m + "] > " + f;
                    l.ENABLE_CALLBACK && l.emitter.emit("log", "verbose", v), l.ENABLE_VERBOSE && console.log(v);
                  }, l;
                }()
              );
              o.GLOBAL_TAG = "flv.js", o.FORCE_GLOBAL_TAG = !1, o.ENABLE_ERROR = !0, o.ENABLE_INFO = !0, o.ENABLE_WARN = !0, o.ENABLE_DEBUG = !0, o.ENABLE_VERBOSE = !0, o.ENABLE_CALLBACK = !1, o.emitter = new (d())(), R.default = o;
            }
          ),
          /***/
          "./src/utils/logging-control.js": (
            /*!**************************************!*\
              !*** ./src/utils/logging-control.js ***!
              \**************************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = S(
                /*! events */
                "./node_modules/events/events.js"
              ), d = /* @__PURE__ */ S.n(L), o = S(
                /*! ./logger.js */
                "./src/utils/logger.js"
              ), l = (
                /** @class */
                function() {
                  function m() {
                  }
                  return Object.defineProperty(m, "forceGlobalTag", {
                    get: function() {
                      return o.default.FORCE_GLOBAL_TAG;
                    },
                    set: function(f) {
                      o.default.FORCE_GLOBAL_TAG = f, m._notifyChange();
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(m, "globalTag", {
                    get: function() {
                      return o.default.GLOBAL_TAG;
                    },
                    set: function(f) {
                      o.default.GLOBAL_TAG = f, m._notifyChange();
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(m, "enableAll", {
                    get: function() {
                      return o.default.ENABLE_VERBOSE && o.default.ENABLE_DEBUG && o.default.ENABLE_INFO && o.default.ENABLE_WARN && o.default.ENABLE_ERROR;
                    },
                    set: function(f) {
                      o.default.ENABLE_VERBOSE = f, o.default.ENABLE_DEBUG = f, o.default.ENABLE_INFO = f, o.default.ENABLE_WARN = f, o.default.ENABLE_ERROR = f, m._notifyChange();
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(m, "enableDebug", {
                    get: function() {
                      return o.default.ENABLE_DEBUG;
                    },
                    set: function(f) {
                      o.default.ENABLE_DEBUG = f, m._notifyChange();
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(m, "enableVerbose", {
                    get: function() {
                      return o.default.ENABLE_VERBOSE;
                    },
                    set: function(f) {
                      o.default.ENABLE_VERBOSE = f, m._notifyChange();
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(m, "enableInfo", {
                    get: function() {
                      return o.default.ENABLE_INFO;
                    },
                    set: function(f) {
                      o.default.ENABLE_INFO = f, m._notifyChange();
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(m, "enableWarn", {
                    get: function() {
                      return o.default.ENABLE_WARN;
                    },
                    set: function(f) {
                      o.default.ENABLE_WARN = f, m._notifyChange();
                    },
                    enumerable: !1,
                    configurable: !0
                  }), Object.defineProperty(m, "enableError", {
                    get: function() {
                      return o.default.ENABLE_ERROR;
                    },
                    set: function(f) {
                      o.default.ENABLE_ERROR = f, m._notifyChange();
                    },
                    enumerable: !1,
                    configurable: !0
                  }), m.getConfig = function() {
                    return {
                      globalTag: o.default.GLOBAL_TAG,
                      forceGlobalTag: o.default.FORCE_GLOBAL_TAG,
                      enableVerbose: o.default.ENABLE_VERBOSE,
                      enableDebug: o.default.ENABLE_DEBUG,
                      enableInfo: o.default.ENABLE_INFO,
                      enableWarn: o.default.ENABLE_WARN,
                      enableError: o.default.ENABLE_ERROR,
                      enableCallback: o.default.ENABLE_CALLBACK
                    };
                  }, m.applyConfig = function(f) {
                    o.default.GLOBAL_TAG = f.globalTag, o.default.FORCE_GLOBAL_TAG = f.forceGlobalTag, o.default.ENABLE_VERBOSE = f.enableVerbose, o.default.ENABLE_DEBUG = f.enableDebug, o.default.ENABLE_INFO = f.enableInfo, o.default.ENABLE_WARN = f.enableWarn, o.default.ENABLE_ERROR = f.enableError, o.default.ENABLE_CALLBACK = f.enableCallback;
                  }, m._notifyChange = function() {
                    var f = m.emitter;
                    if (f.listenerCount("change") > 0) {
                      var v = m.getConfig();
                      f.emit("change", v);
                    }
                  }, m.registerListener = function(f) {
                    m.emitter.addListener("change", f);
                  }, m.removeListener = function(f) {
                    m.emitter.removeListener("change", f);
                  }, m.addLogListener = function(f) {
                    o.default.emitter.addListener("log", f), o.default.emitter.listenerCount("log") > 0 && (o.default.ENABLE_CALLBACK = !0, m._notifyChange());
                  }, m.removeLogListener = function(f) {
                    o.default.emitter.removeListener("log", f), o.default.emitter.listenerCount("log") === 0 && (o.default.ENABLE_CALLBACK = !1, m._notifyChange());
                  }, m;
                }()
              );
              l.emitter = new (d())(), R.default = l;
            }
          ),
          /***/
          "./src/utils/polyfill.js": (
            /*!*******************************!*\
              !*** ./src/utils/polyfill.js ***!
              \*******************************/
            /***/
            function(U, R, S) {
              S.r(R);
              var L = (
                /** @class */
                function() {
                  function d() {
                  }
                  return d.install = function() {
                    Object.setPrototypeOf = Object.setPrototypeOf || function(o, l) {
                      return o.__proto__ = l, o;
                    }, Object.assign = Object.assign || function(o) {
                      if (o == null)
                        throw new TypeError("Cannot convert undefined or null to object");
                      for (var l = Object(o), m = 1; m < arguments.length; m++) {
                        var f = arguments[m];
                        if (f != null)
                          for (var v in f)
                            f.hasOwnProperty(v) && (l[v] = f[v]);
                      }
                      return l;
                    }, typeof self.Promise != "function" && S(
                      /*! es6-promise */
                      "./node_modules/es6-promise/dist/es6-promise.js"
                    ).polyfill();
                  }, d;
                }()
              );
              L.install(), R.default = L;
            }
          ),
          /***/
          "./src/utils/utf8-conv.js": (
            /*!********************************!*\
              !*** ./src/utils/utf8-conv.js ***!
              \********************************/
            /***/
            function(U, R, S) {
              S.r(R);
              function L(o, l, m) {
                var f = o;
                if (l + m < f.length) {
                  for (; m--; )
                    if ((f[++l] & 192) !== 128)
                      return !1;
                  return !0;
                } else
                  return !1;
              }
              function d(o) {
                for (var l = [], m = o, f = 0, v = o.length; f < v; ) {
                  if (m[f] < 128) {
                    l.push(String.fromCharCode(m[f])), ++f;
                    continue;
                  } else if (!(m[f] < 192)) {
                    if (m[f] < 224) {
                      if (L(m, f, 1)) {
                        var A = (m[f] & 31) << 6 | m[f + 1] & 63;
                        if (A >= 128) {
                          l.push(String.fromCharCode(A & 65535)), f += 2;
                          continue;
                        }
                      }
                    } else if (m[f] < 240) {
                      if (L(m, f, 2)) {
                        var A = (m[f] & 15) << 12 | (m[f + 1] & 63) << 6 | m[f + 2] & 63;
                        if (A >= 2048 && (A & 63488) !== 55296) {
                          l.push(String.fromCharCode(A & 65535)), f += 3;
                          continue;
                        }
                      }
                    } else if (m[f] < 248 && L(m, f, 3)) {
                      var A = (m[f] & 7) << 18 | (m[f + 1] & 63) << 12 | (m[f + 2] & 63) << 6 | m[f + 3] & 63;
                      if (A > 65536 && A < 1114112) {
                        A -= 65536, l.push(String.fromCharCode(A >>> 10 | 55296)), l.push(String.fromCharCode(A & 1023 | 56320)), f += 4;
                        continue;
                      }
                    }
                  }
                  l.push("�"), ++f;
                }
                return l.join("");
              }
              R.default = d;
            }
          )
          /******/
        }, J = {};
        function z(U) {
          var R = J[U];
          if (R !== void 0)
            return R.exports;
          var S = J[U] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          return de[U].call(S.exports, S, S.exports, z), S.exports;
        }
        z.m = de, function() {
          z.n = function(U) {
            var R = U && U.__esModule ? (
              /******/
              function() {
                return U.default;
              }
            ) : (
              /******/
              function() {
                return U;
              }
            );
            return z.d(R, { a: R }), R;
          };
        }(), function() {
          z.d = function(U, R) {
            for (var S in R)
              z.o(R, S) && !z.o(U, S) && Object.defineProperty(U, S, { enumerable: !0, get: R[S] });
          };
        }(), function() {
          z.g = function() {
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
          z.o = function(U, R) {
            return Object.prototype.hasOwnProperty.call(U, R);
          };
        }(), function() {
          z.r = function(U) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(U, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(U, "__esModule", { value: !0 });
          };
        }();
        var Y = z("./src/index.js");
        return Y;
      }()
    );
  });
})(Xt);
var ai = Xt.exports;
const Wt = /* @__PURE__ */ qt(ai), At = (De, Fe) => {
  const de = De.__vccOpts || De;
  for (const [J, z] of Fe)
    de[J] = z;
  return de;
}, si = { class: "video-container" }, oi = {
  name: "videoPlayFlv"
}, di = /* @__PURE__ */ Object.assign(oi, {
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
  setup(De) {
    let Fe = De, de = lt(null);
    const J = Ht({
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
    ft(
      () => Fe.url,
      (U, R) => {
        console.log("----", R), z();
      },
      {
        deep: !0
      }
    );
    function z() {
      const U = de.value;
      if (Wt.isSupported() && U) {
        var R = {
          type: Fe.videoType,
          url: Fe.url,
          // 视频流地址
          ...Fe.option
        };
        J.flvPlayer = Wt.createPlayer(R, {
          enableWorker: !1,
          lazyLoadMaxDuration: 3 * 60,
          seekType: "range",
          headers: Fe.option.headers
        }), J.flvPlayer.attachMediaElement(U), J.flvPlayer.load();
      }
    }
    function Y() {
      J.flvPlayer.pause(), J.flvPlayer.unload(), J.flvPlayer.detachMediaElement(), J.flvPlayer.destroy(), J.flvPlayer = null;
    }
    return vt(() => {
      console.log("视频流地址", Fe.url), z(), document.body.addEventListener("mousedown", function() {
        de.muted = !1;
      }, !1);
    }), yt(() => {
      Y();
    }), (U, R) => (Et(), St("div", si, [
      bt("video", {
        name: "videoElement",
        class: "centeredVideo",
        controls: "",
        autoplay: "",
        muted: "",
        id: "videoElement",
        ref_key: "videoElement",
        ref: de
      }, " Your browser is too old which doesn't support HTML5 video. ", 512)
    ]));
  }
}), ui = /* @__PURE__ */ At(di, [["__scopeId", "data-v-8c6e3731"]]), li = { class: "video-container" }, hi = ["id"], _i = {
  name: "videoPlayM3u8"
}, ci = /* @__PURE__ */ Object.assign(_i, {
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
  setup(De, { expose: Fe }) {
    let de = De, J = lt(null), z = lt(
      `player-${Math.random().toString(36).substr(2).toLocaleUpperCase()}`
    ), Y = Ht({
      id: null,
      //播放器的ID
      width: "100%",
      autoplay: !0
      // isLive: true,
      //支持播放地址播放,此播放优先级最高
      // source: 'rtmp://182.145.195.238:1935/hls/1194076936807170050',
    }), U = [
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
    ft(
      () => de.source,
      (p, n) => {
        R();
      },
      {
        deep: !0
      }
    ), ft(
      () => de.forbidFastForward,
      (p, n) => {
        R();
      },
      {
        deep: !0
      }
    ), ft(
      () => de.options,
      (p, n) => {
        R();
      },
      {
        deep: !0
      }
    );
    const R = () => {
      const p = "app__aliplayer-min-css", n = "app__aliplayer-min-js", a = document.getElementsByTagName("head"), _ = document.getElementsByTagName("html");
      let s = document.getElementById(n);
      if (!document.getElementById(p)) {
        const y = document.createElement("link");
        y.type = "text/css", y.rel = "stylesheet", y.href = de.cssLink, y.id = p, a[0].appendChild(y);
      }
      s ? S() : (s = document.createElement("script"), s.type = "text/javascript", s.id = n, s.src = de.scriptSrc, _[0].appendChild(s)), s.addEventListener("load", () => {
        S();
      });
    }, S = () => {
      if (typeof window.Aliplayer < "u") {
        const p = L(de.options);
        if (p)
          for (const n in p)
            Y[n] = p[n];
        de.source && (Y.source = de.source), Y.id = z.value, J.value && J.value.dispose(), J.value = Aliplayer(Y);
        for (const n in U)
          J.value && J.value.on(U[n], (a) => {
          });
        if (de.forbidFastForward) {
          let n = 0;
          J.value.on("timeupdate", function() {
            let a = f();
            a - n > 2 ? m(n) : n = a;
          });
        }
      }
    }, L = (p) => {
      let n = Array.isArray(p) ? [] : {};
      if (p && typeof p == "object")
        for (let a in p)
          p.hasOwnProperty(a) && (p[a] && typeof p[a] == "object" ? n[a] = L(p[a]) : n[a] = p[a]);
      return n;
    }, d = () => {
      J.value && J.value.play();
    }, o = () => {
      J.value && J.value.pause();
    }, l = () => {
      J.value && J.value.replay();
    }, m = (p) => {
      J.value && J.value.seek(p);
    }, f = () => J.value && J.value.getCurrentTime(), v = () => {
      J.value && J.value.fullscreenService && J.value.fullscreenService.requestFullScreen();
    }, A = () => {
      J.value && J.value.fullscreenService && J.value.fullscreenService.cancelFullScreen();
    }, g = () => J.value && J.value.getStatus(), c = () => {
      J.value && J.value.dispose();
    };
    return vt(() => {
      ti(() => {
        R();
      }), console.log("视频流地址", de.url);
    }), yt(() => {
      c();
    }), Fe({
      /**
       * 播放器视频初始化按钮渲染完毕。
       * 播放器UI初始设置需要此事件后触发，避免UI被初始化所覆盖。
       * 播放器提供的方法需要在此事件发生后才可以调用。
       */
      replay: l,
      /**
       * 视频由暂停恢复为播放时触发。
       */
      play: d,
      /**
       * 视频暂停时触发。
       */
      pause: o,
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
      requestFullScreen: v,
      /**
       * 取消全屏事件，iOS下不会触发，仅H5支持。
       */
      cancelFullScreen: A,
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
      getStatus: g
    }), (p, n) => (Et(), St("div", li, [
      bt("div", { id: ii(z) }, null, 8, hi)
    ]));
  }
}), fi = /* @__PURE__ */ At(ci, [["__scopeId", "data-v-7f6ddeb6"]]), pi = (De) => (ri("data-v-34823880"), De = De(), ni(), De), mi = { class: "UnifiedMonitoringVideo" }, gi = /* @__PURE__ */ pi(() => /* @__PURE__ */ bt("div", { id: "videoWindow" }, null, -1)), vi = [
  gi
], yi = {
  name: "videoPlayHaikan"
}, Ei = /* @__PURE__ */ Object.assign(yi, {
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
  setup(De, { emit: Fe }) {
    let de = [
      "jquery-1.12.4.min.js",
      "jsWebControl-1.0.0.min.js",
      "jsencrypt.min.js",
      "initPlugin.js"
    ], J = Fe, z = De, Y = lt(null), U = lt(0);
    vt(() => {
      R(), window.unifiedMonitoringVideoCall = (l) => L(l);
    }), yt(() => {
      o();
    });
    const R = () => {
      let l = null;
      const m = document.getElementsByTagName("html");
      for (let f = 0; f < de.length; f++) {
        const v = de[f];
        l = document.getElementById(v), l || (l = document.createElement("script"), l.type = "text/javascript", l.id = v, l.src = `../../src/utils/haikan/${v}`, m[0].appendChild(l));
      }
      l.addEventListener("load", () => {
        S();
      });
    }, S = () => {
      let l = "1x1";
      l = ["1x1", "1x2", "1+2", "2x2", "1+5", "1+5", "1+7", "1+7", "3x3"][z.listData.length - 1], Y.value = new initPlugin(
        {
          el: "#videoWindow",
          playMode: 0,
          layout: l
        },
        () => {
        }
      ), setTimeout(() => {
        d();
      }, 5e3);
    }, L = (l) => {
      l.includes("768") && (U.value = 768), l.includes("769") && (U.value = 769), l.includes("770") && (U.value = 770), l.includes("816") && (U.value = 816), J("callback", ![769, 770].includes(U.value));
    }, d = () => {
      let l = [];
      z.listData.length > 0 && (console.log("多个视频"), z.listData.forEach(
        ({ realCameraIndexCode: m, realCameraName: f, url: v }, A) => {
          console.log("--------", m, f, v), l.push({
            cameraIndexCode: m || "32120280441310003431",
            cameraName: f || "直播视频流",
            // url: 'rtmp://10.10.0.36:10935/hls/stream_1',
            url: v || "rtsp://21.47.38.152:554/openUrl/scbhPzi",
            deviceType: 1,
            streamMode: 0,
            smallEagleEyeAbility: 0,
            gpuMode: 0,
            wndId: A + 1
          });
        }
      )), U.value !== 816 && l.length > 0 && setTimeout(() => {
        Y.value.startPreview(l);
      }, 200);
    }, o = () => {
      Y.value.oWebControl.JS_RequestInterface({
        funcName: "uninit"
      }), Y.value.oWebControl.JS_DestroyWnd();
    };
    return (l, m) => (Et(), St("div", mi, vi));
  }
}), Si = /* @__PURE__ */ At(Ei, [["__scopeId", "data-v-34823880"]]);
var Yt = { exports: {} };
(function(De, Fe) {
  (function(de, J) {
    De.exports = J();
  })(window, function() {
    return function(de) {
      var J = {};
      function z(Y) {
        if (J[Y])
          return J[Y].exports;
        var U = J[Y] = { i: Y, l: !1, exports: {} };
        return de[Y].call(U.exports, U, U.exports, z), U.l = !0, U.exports;
      }
      return z.m = de, z.c = J, z.d = function(Y, U, R) {
        z.o(Y, U) || Object.defineProperty(Y, U, { enumerable: !0, get: R });
      }, z.r = function(Y) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(Y, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(Y, "__esModule", { value: !0 });
      }, z.t = function(Y, U) {
        if (1 & U && (Y = z(Y)), 8 & U || 4 & U && typeof Y == "object" && Y && Y.__esModule)
          return Y;
        var R = /* @__PURE__ */ Object.create(null);
        if (z.r(R), Object.defineProperty(R, "default", { enumerable: !0, value: Y }), 2 & U && typeof Y != "string")
          for (var S in Y)
            z.d(R, S, (function(L) {
              return Y[L];
            }).bind(null, S));
        return R;
      }, z.n = function(Y) {
        var U = Y && Y.__esModule ? function() {
          return Y.default;
        } : function() {
          return Y;
        };
        return z.d(U, "a", U), U;
      }, z.o = function(Y, U) {
        return Object.prototype.hasOwnProperty.call(Y, U);
      }, z.p = "", z(z.s = 14);
    }([function(de, J, z) {
      var Y = z(6), U = z.n(Y), R = function() {
        function S() {
        }
        return S.e = function(L, d) {
          L && !S.FORCE_GLOBAL_TAG || (L = S.GLOBAL_TAG);
          var o = "[" + L + "] > " + d;
          S.ENABLE_CALLBACK && S.emitter.emit("log", "error", o), S.ENABLE_ERROR && (console.error ? console.error(o) : console.warn ? console.warn(o) : console.log(o));
        }, S.i = function(L, d) {
          L && !S.FORCE_GLOBAL_TAG || (L = S.GLOBAL_TAG);
          var o = "[" + L + "] > " + d;
          S.ENABLE_CALLBACK && S.emitter.emit("log", "info", o), S.ENABLE_INFO && (console.info ? console.info(o) : console.log(o));
        }, S.w = function(L, d) {
          L && !S.FORCE_GLOBAL_TAG || (L = S.GLOBAL_TAG);
          var o = "[" + L + "] > " + d;
          S.ENABLE_CALLBACK && S.emitter.emit("log", "warn", o), S.ENABLE_WARN && (console.warn ? console.warn(o) : console.log(o));
        }, S.d = function(L, d) {
          L && !S.FORCE_GLOBAL_TAG || (L = S.GLOBAL_TAG);
          var o = "[" + L + "] > " + d;
          S.ENABLE_CALLBACK && S.emitter.emit("log", "debug", o), S.ENABLE_DEBUG && (console.debug ? console.debug(o) : console.log(o));
        }, S.v = function(L, d) {
          L && !S.FORCE_GLOBAL_TAG || (L = S.GLOBAL_TAG);
          var o = "[" + L + "] > " + d;
          S.ENABLE_CALLBACK && S.emitter.emit("log", "verbose", o), S.ENABLE_VERBOSE && console.log(o);
        }, S;
      }();
      R.GLOBAL_TAG = "mpegts.js", R.FORCE_GLOBAL_TAG = !1, R.ENABLE_ERROR = !0, R.ENABLE_INFO = !0, R.ENABLE_WARN = !0, R.ENABLE_DEBUG = !0, R.ENABLE_VERBOSE = !0, R.ENABLE_CALLBACK = !1, R.emitter = new U.a(), J.a = R;
    }, function(de, J, z) {
      J.a = { IO_ERROR: "io_error", DEMUX_ERROR: "demux_error", INIT_SEGMENT: "init_segment", MEDIA_SEGMENT: "media_segment", LOADING_COMPLETE: "loading_complete", RECOVERED_EARLY_EOF: "recovered_early_eof", MEDIA_INFO: "media_info", METADATA_ARRIVED: "metadata_arrived", SCRIPTDATA_ARRIVED: "scriptdata_arrived", TIMED_ID3_METADATA_ARRIVED: "timed_id3_metadata_arrived", SMPTE2038_METADATA_ARRIVED: "smpte2038_metadata_arrived", SCTE35_METADATA_ARRIVED: "scte35_metadata_arrived", PES_PRIVATE_DATA_DESCRIPTOR: "pes_private_data_descriptor", PES_PRIVATE_DATA_ARRIVED: "pes_private_data_arrived", STATISTICS_INFO: "statistics_info", RECOMMEND_SEEKPOINT: "recommend_seekpoint" };
    }, function(de, J, z) {
      z.d(J, "c", function() {
        return U;
      }), z.d(J, "b", function() {
        return R;
      }), z.d(J, "a", function() {
        return S;
      });
      var Y = z(3), U = { kIdle: 0, kConnecting: 1, kBuffering: 2, kError: 3, kComplete: 4 }, R = { OK: "OK", EXCEPTION: "Exception", HTTP_STATUS_CODE_INVALID: "HttpStatusCodeInvalid", CONNECTING_TIMEOUT: "ConnectingTimeout", EARLY_EOF: "EarlyEof", UNRECOVERABLE_EARLY_EOF: "UnrecoverableEarlyEof" }, S = function() {
        function L(d) {
          this._type = d || "undefined", this._status = U.kIdle, this._needStash = !1, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null;
        }
        return L.prototype.destroy = function() {
          this._status = U.kIdle, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null;
        }, L.prototype.isWorking = function() {
          return this._status === U.kConnecting || this._status === U.kBuffering;
        }, Object.defineProperty(L.prototype, "type", { get: function() {
          return this._type;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(L.prototype, "status", { get: function() {
          return this._status;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(L.prototype, "needStashBuffer", { get: function() {
          return this._needStash;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(L.prototype, "onContentLengthKnown", { get: function() {
          return this._onContentLengthKnown;
        }, set: function(d) {
          this._onContentLengthKnown = d;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(L.prototype, "onURLRedirect", { get: function() {
          return this._onURLRedirect;
        }, set: function(d) {
          this._onURLRedirect = d;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(L.prototype, "onDataArrival", { get: function() {
          return this._onDataArrival;
        }, set: function(d) {
          this._onDataArrival = d;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(L.prototype, "onError", { get: function() {
          return this._onError;
        }, set: function(d) {
          this._onError = d;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(L.prototype, "onComplete", { get: function() {
          return this._onComplete;
        }, set: function(d) {
          this._onComplete = d;
        }, enumerable: !1, configurable: !0 }), L.prototype.open = function(d, o) {
          throw new Y.c("Unimplemented abstract function!");
        }, L.prototype.abort = function() {
          throw new Y.c("Unimplemented abstract function!");
        }, L;
      }();
    }, function(de, J, z) {
      z.d(J, "d", function() {
        return R;
      }), z.d(J, "a", function() {
        return S;
      }), z.d(J, "b", function() {
        return L;
      }), z.d(J, "c", function() {
        return d;
      });
      var Y, U = (Y = function(o, l) {
        return (Y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(m, f) {
          m.__proto__ = f;
        } || function(m, f) {
          for (var v in f)
            f.hasOwnProperty(v) && (m[v] = f[v]);
        })(o, l);
      }, function(o, l) {
        function m() {
          this.constructor = o;
        }
        Y(o, l), o.prototype = l === null ? Object.create(l) : (m.prototype = l.prototype, new m());
      }), R = function() {
        function o(l) {
          this._message = l;
        }
        return Object.defineProperty(o.prototype, "name", { get: function() {
          return "RuntimeException";
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(o.prototype, "message", { get: function() {
          return this._message;
        }, enumerable: !1, configurable: !0 }), o.prototype.toString = function() {
          return this.name + ": " + this.message;
        }, o;
      }(), S = function(o) {
        function l(m) {
          return o.call(this, m) || this;
        }
        return U(l, o), Object.defineProperty(l.prototype, "name", { get: function() {
          return "IllegalStateException";
        }, enumerable: !1, configurable: !0 }), l;
      }(R), L = function(o) {
        function l(m) {
          return o.call(this, m) || this;
        }
        return U(l, o), Object.defineProperty(l.prototype, "name", { get: function() {
          return "InvalidArgumentException";
        }, enumerable: !1, configurable: !0 }), l;
      }(R), d = function(o) {
        function l(m) {
          return o.call(this, m) || this;
        }
        return U(l, o), Object.defineProperty(l.prototype, "name", { get: function() {
          return "NotImplementedException";
        }, enumerable: !1, configurable: !0 }), l;
      }(R);
    }, function(de, J, z) {
      var Y = {};
      (function() {
        var U = self.navigator.userAgent.toLowerCase(), R = /(edge)\/([\w.]+)/.exec(U) || /(opr)[\/]([\w.]+)/.exec(U) || /(chrome)[ \/]([\w.]+)/.exec(U) || /(iemobile)[\/]([\w.]+)/.exec(U) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(U) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(U) || /(webkit)[ \/]([\w.]+)/.exec(U) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(U) || /(msie) ([\w.]+)/.exec(U) || U.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(U) || U.indexOf("compatible") < 0 && /(firefox)[ \/]([\w.]+)/.exec(U) || [], S = /(ipad)/.exec(U) || /(ipod)/.exec(U) || /(windows phone)/.exec(U) || /(iphone)/.exec(U) || /(kindle)/.exec(U) || /(android)/.exec(U) || /(windows)/.exec(U) || /(mac)/.exec(U) || /(linux)/.exec(U) || /(cros)/.exec(U) || [], L = { browser: R[5] || R[3] || R[1] || "", version: R[2] || R[4] || "0", majorVersion: R[4] || R[2] || "0", platform: S[0] || "" }, d = {};
        if (L.browser) {
          d[L.browser] = !0;
          var o = L.majorVersion.split(".");
          d.version = { major: parseInt(L.majorVersion, 10), string: L.version }, o.length > 1 && (d.version.minor = parseInt(o[1], 10)), o.length > 2 && (d.version.build = parseInt(o[2], 10));
        }
        L.platform && (d[L.platform] = !0), (d.chrome || d.opr || d.safari) && (d.webkit = !0), (d.rv || d.iemobile) && (d.rv && delete d.rv, L.browser = "msie", d.msie = !0), d.edge && (delete d.edge, L.browser = "msedge", d.msedge = !0), d.opr && (L.browser = "opera", d.opera = !0), d.safari && d.android && (L.browser = "android", d.android = !0);
        for (var l in d.name = L.browser, d.platform = L.platform, Y)
          Y.hasOwnProperty(l) && delete Y[l];
        Object.assign(Y, d);
      })(), J.a = Y;
    }, function(de, J, z) {
      J.a = { OK: "OK", FORMAT_ERROR: "FormatError", FORMAT_UNSUPPORTED: "FormatUnsupported", CODEC_UNSUPPORTED: "CodecUnsupported" };
    }, function(de, J, z) {
      var Y, U = typeof Reflect == "object" ? Reflect : null, R = U && typeof U.apply == "function" ? U.apply : function(n, a, _) {
        return Function.prototype.apply.call(n, a, _);
      };
      Y = U && typeof U.ownKeys == "function" ? U.ownKeys : Object.getOwnPropertySymbols ? function(n) {
        return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
      } : function(n) {
        return Object.getOwnPropertyNames(n);
      };
      var S = Number.isNaN || function(n) {
        return n != n;
      };
      function L() {
        L.init.call(this);
      }
      de.exports = L, de.exports.once = function(n, a) {
        return new Promise(function(_, s) {
          function h(x) {
            n.removeListener(a, y), s(x);
          }
          function y() {
            typeof n.removeListener == "function" && n.removeListener("error", h), _([].slice.call(arguments));
          }
          p(n, a, y, { once: !0 }), a !== "error" && function(x, O, T) {
            typeof x.on == "function" && p(x, "error", O, T);
          }(n, h, { once: !0 });
        });
      }, L.EventEmitter = L, L.prototype._events = void 0, L.prototype._eventsCount = 0, L.prototype._maxListeners = void 0;
      var d = 10;
      function o(n) {
        if (typeof n != "function")
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
      }
      function l(n) {
        return n._maxListeners === void 0 ? L.defaultMaxListeners : n._maxListeners;
      }
      function m(n, a, _, s) {
        var h, y, x, O;
        if (o(_), (y = n._events) === void 0 ? (y = n._events = /* @__PURE__ */ Object.create(null), n._eventsCount = 0) : (y.newListener !== void 0 && (n.emit("newListener", a, _.listener ? _.listener : _), y = n._events), x = y[a]), x === void 0)
          x = y[a] = _, ++n._eventsCount;
        else if (typeof x == "function" ? x = y[a] = s ? [_, x] : [x, _] : s ? x.unshift(_) : x.push(_), (h = l(n)) > 0 && x.length > h && !x.warned) {
          x.warned = !0;
          var T = new Error("Possible EventEmitter memory leak detected. " + x.length + " " + String(a) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          T.name = "MaxListenersExceededWarning", T.emitter = n, T.type = a, T.count = x.length, O = T, console && console.warn && console.warn(O);
        }
        return n;
      }
      function f() {
        if (!this.fired)
          return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
      }
      function v(n, a, _) {
        var s = { fired: !1, wrapFn: void 0, target: n, type: a, listener: _ }, h = f.bind(s);
        return h.listener = _, s.wrapFn = h, h;
      }
      function A(n, a, _) {
        var s = n._events;
        if (s === void 0)
          return [];
        var h = s[a];
        return h === void 0 ? [] : typeof h == "function" ? _ ? [h.listener || h] : [h] : _ ? function(y) {
          for (var x = new Array(y.length), O = 0; O < x.length; ++O)
            x[O] = y[O].listener || y[O];
          return x;
        }(h) : c(h, h.length);
      }
      function g(n) {
        var a = this._events;
        if (a !== void 0) {
          var _ = a[n];
          if (typeof _ == "function")
            return 1;
          if (_ !== void 0)
            return _.length;
        }
        return 0;
      }
      function c(n, a) {
        for (var _ = new Array(a), s = 0; s < a; ++s)
          _[s] = n[s];
        return _;
      }
      function p(n, a, _, s) {
        if (typeof n.on == "function")
          s.once ? n.once(a, _) : n.on(a, _);
        else {
          if (typeof n.addEventListener != "function")
            throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof n);
          n.addEventListener(a, function h(y) {
            s.once && n.removeEventListener(a, h), _(y);
          });
        }
      }
      Object.defineProperty(L, "defaultMaxListeners", { enumerable: !0, get: function() {
        return d;
      }, set: function(n) {
        if (typeof n != "number" || n < 0 || S(n))
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + n + ".");
        d = n;
      } }), L.init = function() {
        this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
      }, L.prototype.setMaxListeners = function(n) {
        if (typeof n != "number" || n < 0 || S(n))
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
        return this._maxListeners = n, this;
      }, L.prototype.getMaxListeners = function() {
        return l(this);
      }, L.prototype.emit = function(n) {
        for (var a = [], _ = 1; _ < arguments.length; _++)
          a.push(arguments[_]);
        var s = n === "error", h = this._events;
        if (h !== void 0)
          s = s && h.error === void 0;
        else if (!s)
          return !1;
        if (s) {
          var y;
          if (a.length > 0 && (y = a[0]), y instanceof Error)
            throw y;
          var x = new Error("Unhandled error." + (y ? " (" + y.message + ")" : ""));
          throw x.context = y, x;
        }
        var O = h[n];
        if (O === void 0)
          return !1;
        if (typeof O == "function")
          R(O, this, a);
        else {
          var T = O.length, I = c(O, T);
          for (_ = 0; _ < T; ++_)
            R(I[_], this, a);
        }
        return !0;
      }, L.prototype.addListener = function(n, a) {
        return m(this, n, a, !1);
      }, L.prototype.on = L.prototype.addListener, L.prototype.prependListener = function(n, a) {
        return m(this, n, a, !0);
      }, L.prototype.once = function(n, a) {
        return o(a), this.on(n, v(this, n, a)), this;
      }, L.prototype.prependOnceListener = function(n, a) {
        return o(a), this.prependListener(n, v(this, n, a)), this;
      }, L.prototype.removeListener = function(n, a) {
        var _, s, h, y, x;
        if (o(a), (s = this._events) === void 0)
          return this;
        if ((_ = s[n]) === void 0)
          return this;
        if (_ === a || _.listener === a)
          --this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete s[n], s.removeListener && this.emit("removeListener", n, _.listener || a));
        else if (typeof _ != "function") {
          for (h = -1, y = _.length - 1; y >= 0; y--)
            if (_[y] === a || _[y].listener === a) {
              x = _[y].listener, h = y;
              break;
            }
          if (h < 0)
            return this;
          h === 0 ? _.shift() : function(O, T) {
            for (; T + 1 < O.length; T++)
              O[T] = O[T + 1];
            O.pop();
          }(_, h), _.length === 1 && (s[n] = _[0]), s.removeListener !== void 0 && this.emit("removeListener", n, x || a);
        }
        return this;
      }, L.prototype.off = L.prototype.removeListener, L.prototype.removeAllListeners = function(n) {
        var a, _, s;
        if ((_ = this._events) === void 0)
          return this;
        if (_.removeListener === void 0)
          return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : _[n] !== void 0 && (--this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete _[n]), this;
        if (arguments.length === 0) {
          var h, y = Object.keys(_);
          for (s = 0; s < y.length; ++s)
            (h = y[s]) !== "removeListener" && this.removeAllListeners(h);
          return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
        }
        if (typeof (a = _[n]) == "function")
          this.removeListener(n, a);
        else if (a !== void 0)
          for (s = a.length - 1; s >= 0; s--)
            this.removeListener(n, a[s]);
        return this;
      }, L.prototype.listeners = function(n) {
        return A(this, n, !0);
      }, L.prototype.rawListeners = function(n) {
        return A(this, n, !1);
      }, L.listenerCount = function(n, a) {
        return typeof n.listenerCount == "function" ? n.listenerCount(a) : g.call(n, a);
      }, L.prototype.listenerCount = g, L.prototype.eventNames = function() {
        return this._eventsCount > 0 ? Y(this._events) : [];
      };
    }, function(de, J, z) {
      z.d(J, "d", function() {
        return Y;
      }), z.d(J, "b", function() {
        return U;
      }), z.d(J, "a", function() {
        return R;
      }), z.d(J, "c", function() {
        return S;
      });
      var Y = function(L, d, o, l, m) {
        this.dts = L, this.pts = d, this.duration = o, this.originalDts = l, this.isSyncPoint = m, this.fileposition = null;
      }, U = function() {
        function L() {
          this.beginDts = 0, this.endDts = 0, this.beginPts = 0, this.endPts = 0, this.originalBeginDts = 0, this.originalEndDts = 0, this.syncPoints = [], this.firstSample = null, this.lastSample = null;
        }
        return L.prototype.appendSyncPoint = function(d) {
          d.isSyncPoint = !0, this.syncPoints.push(d);
        }, L;
      }(), R = function() {
        function L() {
          this._list = [];
        }
        return L.prototype.clear = function() {
          this._list = [];
        }, L.prototype.appendArray = function(d) {
          var o = this._list;
          d.length !== 0 && (o.length > 0 && d[0].originalDts < o[o.length - 1].originalDts && this.clear(), Array.prototype.push.apply(o, d));
        }, L.prototype.getLastSyncPointBeforeDts = function(d) {
          if (this._list.length == 0)
            return null;
          var o = this._list, l = 0, m = o.length - 1, f = 0, v = 0, A = m;
          for (d < o[0].dts && (l = 0, v = A + 1); v <= A; ) {
            if ((f = v + Math.floor((A - v) / 2)) === m || d >= o[f].dts && d < o[f + 1].dts) {
              l = f;
              break;
            }
            o[f].dts < d ? v = f + 1 : A = f - 1;
          }
          return this._list[l];
        }, L;
      }(), S = function() {
        function L(d) {
          this._type = d, this._list = [], this._lastAppendLocation = -1;
        }
        return Object.defineProperty(L.prototype, "type", { get: function() {
          return this._type;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(L.prototype, "length", { get: function() {
          return this._list.length;
        }, enumerable: !1, configurable: !0 }), L.prototype.isEmpty = function() {
          return this._list.length === 0;
        }, L.prototype.clear = function() {
          this._list = [], this._lastAppendLocation = -1;
        }, L.prototype._searchNearestSegmentBefore = function(d) {
          var o = this._list;
          if (o.length === 0)
            return -2;
          var l = o.length - 1, m = 0, f = 0, v = l, A = 0;
          if (d < o[0].originalBeginDts)
            return A = -1;
          for (; f <= v; ) {
            if ((m = f + Math.floor((v - f) / 2)) === l || d > o[m].lastSample.originalDts && d < o[m + 1].originalBeginDts) {
              A = m;
              break;
            }
            o[m].originalBeginDts < d ? f = m + 1 : v = m - 1;
          }
          return A;
        }, L.prototype._searchNearestSegmentAfter = function(d) {
          return this._searchNearestSegmentBefore(d) + 1;
        }, L.prototype.append = function(d) {
          var o = this._list, l = d, m = this._lastAppendLocation, f = 0;
          m !== -1 && m < o.length && l.originalBeginDts >= o[m].lastSample.originalDts && (m === o.length - 1 || m < o.length - 1 && l.originalBeginDts < o[m + 1].originalBeginDts) ? f = m + 1 : o.length > 0 && (f = this._searchNearestSegmentBefore(l.originalBeginDts) + 1), this._lastAppendLocation = f, this._list.splice(f, 0, l);
        }, L.prototype.getLastSegmentBefore = function(d) {
          var o = this._searchNearestSegmentBefore(d);
          return o >= 0 ? this._list[o] : null;
        }, L.prototype.getLastSampleBefore = function(d) {
          var o = this.getLastSegmentBefore(d);
          return o != null ? o.lastSample : null;
        }, L.prototype.getLastSyncPointBefore = function(d) {
          for (var o = this._searchNearestSegmentBefore(d), l = this._list[o].syncPoints; l.length === 0 && o > 0; )
            o--, l = this._list[o].syncPoints;
          return l.length > 0 ? l[l.length - 1] : null;
        }, L;
      }();
    }, function(de, J, z) {
      var Y = function() {
        function U() {
          this.mimeType = null, this.duration = null, this.hasAudio = null, this.hasVideo = null, this.audioCodec = null, this.videoCodec = null, this.audioDataRate = null, this.videoDataRate = null, this.audioSampleRate = null, this.audioChannelCount = null, this.width = null, this.height = null, this.fps = null, this.profile = null, this.level = null, this.refFrames = null, this.chromaFormat = null, this.sarNum = null, this.sarDen = null, this.metadata = null, this.segments = null, this.segmentCount = null, this.hasKeyframesIndex = null, this.keyframesIndex = null;
        }
        return U.prototype.isComplete = function() {
          var R = this.hasAudio === !1 || this.hasAudio === !0 && this.audioCodec != null && this.audioSampleRate != null && this.audioChannelCount != null, S = this.hasVideo === !1 || this.hasVideo === !0 && this.videoCodec != null && this.width != null && this.height != null && this.fps != null && this.profile != null && this.level != null && this.refFrames != null && this.chromaFormat != null && this.sarNum != null && this.sarDen != null;
          return this.mimeType != null && R && S;
        }, U.prototype.isSeekable = function() {
          return this.hasKeyframesIndex === !0;
        }, U.prototype.getNearestKeyframe = function(R) {
          if (this.keyframesIndex == null)
            return null;
          var S = this.keyframesIndex, L = this._search(S.times, R);
          return { index: L, milliseconds: S.times[L], fileposition: S.filepositions[L] };
        }, U.prototype._search = function(R, S) {
          var L = 0, d = R.length - 1, o = 0, l = 0, m = d;
          for (S < R[0] && (L = 0, l = m + 1); l <= m; ) {
            if ((o = l + Math.floor((m - l) / 2)) === d || S >= R[o] && S < R[o + 1]) {
              L = o;
              break;
            }
            R[o] < S ? l = o + 1 : m = o - 1;
          }
          return L;
        }, U;
      }();
      J.a = Y;
    }, function(de, J, z) {
      var Y = z(6), U = z.n(Y), R = z(0), S = function() {
        function L() {
        }
        return Object.defineProperty(L, "forceGlobalTag", { get: function() {
          return R.a.FORCE_GLOBAL_TAG;
        }, set: function(d) {
          R.a.FORCE_GLOBAL_TAG = d, L._notifyChange();
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(L, "globalTag", { get: function() {
          return R.a.GLOBAL_TAG;
        }, set: function(d) {
          R.a.GLOBAL_TAG = d, L._notifyChange();
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(L, "enableAll", { get: function() {
          return R.a.ENABLE_VERBOSE && R.a.ENABLE_DEBUG && R.a.ENABLE_INFO && R.a.ENABLE_WARN && R.a.ENABLE_ERROR;
        }, set: function(d) {
          R.a.ENABLE_VERBOSE = d, R.a.ENABLE_DEBUG = d, R.a.ENABLE_INFO = d, R.a.ENABLE_WARN = d, R.a.ENABLE_ERROR = d, L._notifyChange();
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(L, "enableDebug", { get: function() {
          return R.a.ENABLE_DEBUG;
        }, set: function(d) {
          R.a.ENABLE_DEBUG = d, L._notifyChange();
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(L, "enableVerbose", { get: function() {
          return R.a.ENABLE_VERBOSE;
        }, set: function(d) {
          R.a.ENABLE_VERBOSE = d, L._notifyChange();
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(L, "enableInfo", { get: function() {
          return R.a.ENABLE_INFO;
        }, set: function(d) {
          R.a.ENABLE_INFO = d, L._notifyChange();
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(L, "enableWarn", { get: function() {
          return R.a.ENABLE_WARN;
        }, set: function(d) {
          R.a.ENABLE_WARN = d, L._notifyChange();
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(L, "enableError", { get: function() {
          return R.a.ENABLE_ERROR;
        }, set: function(d) {
          R.a.ENABLE_ERROR = d, L._notifyChange();
        }, enumerable: !1, configurable: !0 }), L.getConfig = function() {
          return { globalTag: R.a.GLOBAL_TAG, forceGlobalTag: R.a.FORCE_GLOBAL_TAG, enableVerbose: R.a.ENABLE_VERBOSE, enableDebug: R.a.ENABLE_DEBUG, enableInfo: R.a.ENABLE_INFO, enableWarn: R.a.ENABLE_WARN, enableError: R.a.ENABLE_ERROR, enableCallback: R.a.ENABLE_CALLBACK };
        }, L.applyConfig = function(d) {
          R.a.GLOBAL_TAG = d.globalTag, R.a.FORCE_GLOBAL_TAG = d.forceGlobalTag, R.a.ENABLE_VERBOSE = d.enableVerbose, R.a.ENABLE_DEBUG = d.enableDebug, R.a.ENABLE_INFO = d.enableInfo, R.a.ENABLE_WARN = d.enableWarn, R.a.ENABLE_ERROR = d.enableError, R.a.ENABLE_CALLBACK = d.enableCallback;
        }, L._notifyChange = function() {
          var d = L.emitter;
          if (d.listenerCount("change") > 0) {
            var o = L.getConfig();
            d.emit("change", o);
          }
        }, L.registerListener = function(d) {
          L.emitter.addListener("change", d);
        }, L.removeListener = function(d) {
          L.emitter.removeListener("change", d);
        }, L.addLogListener = function(d) {
          R.a.emitter.addListener("log", d), R.a.emitter.listenerCount("log") > 0 && (R.a.ENABLE_CALLBACK = !0, L._notifyChange());
        }, L.removeLogListener = function(d) {
          R.a.emitter.removeListener("log", d), R.a.emitter.listenerCount("log") === 0 && (R.a.ENABLE_CALLBACK = !1, L._notifyChange());
        }, L;
      }();
      S.emitter = new U.a(), J.a = S;
    }, function(de, J, z) {
      var Y = z(6), U = z.n(Y), R = z(0), S = z(4), L = z(8);
      function d(r, t, i) {
        var e = r;
        if (t + i < e.length) {
          for (; i--; )
            if ((192 & e[++t]) != 128)
              return !1;
          return !0;
        }
        return !1;
      }
      var o, l = function(r) {
        for (var t = [], i = r, e = 0, u = r.length; e < u; )
          if (i[e] < 128)
            t.push(String.fromCharCode(i[e])), ++e;
          else {
            if (!(i[e] < 192)) {
              if (i[e] < 224) {
                if (d(i, e, 1) && (b = (31 & i[e]) << 6 | 63 & i[e + 1]) >= 128) {
                  t.push(String.fromCharCode(65535 & b)), e += 2;
                  continue;
                }
              } else if (i[e] < 240) {
                if (d(i, e, 2) && (b = (15 & i[e]) << 12 | (63 & i[e + 1]) << 6 | 63 & i[e + 2]) >= 2048 && (63488 & b) != 55296) {
                  t.push(String.fromCharCode(65535 & b)), e += 3;
                  continue;
                }
              } else if (i[e] < 248) {
                var b;
                if (d(i, e, 3) && (b = (7 & i[e]) << 18 | (63 & i[e + 1]) << 12 | (63 & i[e + 2]) << 6 | 63 & i[e + 3]) > 65536 && b < 1114112) {
                  b -= 65536, t.push(String.fromCharCode(b >>> 10 | 55296)), t.push(String.fromCharCode(1023 & b | 56320)), e += 4;
                  continue;
                }
              }
            }
            t.push("�"), ++e;
          }
        return t.join("");
      }, m = z(3), f = (o = new ArrayBuffer(2), new DataView(o).setInt16(0, 256, !0), new Int16Array(o)[0] === 256), v = function() {
        function r() {
        }
        return r.parseScriptData = function(t, i, e) {
          var u = {};
          try {
            var b = r.parseValue(t, i, e), E = r.parseValue(t, i + b.size, e - b.size);
            u[b.data] = E.data;
          } catch (w) {
            R.a.e("AMF", w.toString());
          }
          return u;
        }, r.parseObject = function(t, i, e) {
          if (e < 3)
            throw new m.a("Data not enough when parse ScriptDataObject");
          var u = r.parseString(t, i, e), b = r.parseValue(t, i + u.size, e - u.size), E = b.objectEnd;
          return { data: { name: u.data, value: b.data }, size: u.size + b.size, objectEnd: E };
        }, r.parseVariable = function(t, i, e) {
          return r.parseObject(t, i, e);
        }, r.parseString = function(t, i, e) {
          if (e < 2)
            throw new m.a("Data not enough when parse String");
          var u = new DataView(t, i, e).getUint16(0, !f);
          return { data: u > 0 ? l(new Uint8Array(t, i + 2, u)) : "", size: 2 + u };
        }, r.parseLongString = function(t, i, e) {
          if (e < 4)
            throw new m.a("Data not enough when parse LongString");
          var u = new DataView(t, i, e).getUint32(0, !f);
          return { data: u > 0 ? l(new Uint8Array(t, i + 4, u)) : "", size: 4 + u };
        }, r.parseDate = function(t, i, e) {
          if (e < 10)
            throw new m.a("Data size invalid when parse Date");
          var u = new DataView(t, i, e), b = u.getFloat64(0, !f), E = u.getInt16(8, !f);
          return { data: new Date(b += 60 * E * 1e3), size: 10 };
        }, r.parseValue = function(t, i, e) {
          if (e < 1)
            throw new m.a("Data not enough when parse Value");
          var u, b = new DataView(t, i, e), E = 1, w = b.getUint8(0), M = !1;
          try {
            switch (w) {
              case 0:
                u = b.getFloat64(1, !f), E += 8;
                break;
              case 1:
                u = !!b.getUint8(1), E += 1;
                break;
              case 2:
                var B = r.parseString(t, i + 1, e - 1);
                u = B.data, E += B.size;
                break;
              case 3:
                u = {};
                var j = 0;
                for ((16777215 & b.getUint32(e - 4, !f)) == 9 && (j = 3); E < e - 4; ) {
                  var G = r.parseObject(t, i + E, e - E - j);
                  if (G.objectEnd)
                    break;
                  u[G.data.name] = G.data.value, E += G.size;
                }
                E <= e - 3 && (16777215 & b.getUint32(E - 1, !f)) === 9 && (E += 3);
                break;
              case 8:
                for (u = {}, E += 4, j = 0, (16777215 & b.getUint32(e - 4, !f)) == 9 && (j = 3); E < e - 8; ) {
                  var N = r.parseVariable(t, i + E, e - E - j);
                  if (N.objectEnd)
                    break;
                  u[N.data.name] = N.data.value, E += N.size;
                }
                E <= e - 3 && (16777215 & b.getUint32(E - 1, !f)) === 9 && (E += 3);
                break;
              case 9:
                u = void 0, E = 1, M = !0;
                break;
              case 10:
                u = [];
                var V = b.getUint32(1, !f);
                E += 4;
                for (var X = 0; X < V; X++) {
                  var ie = r.parseValue(t, i + E, e - E);
                  u.push(ie.data), E += ie.size;
                }
                break;
              case 11:
                var Q = r.parseDate(t, i + 1, e - 1);
                u = Q.data, E += Q.size;
                break;
              case 12:
                var fe = r.parseString(t, i + 1, e - 1);
                u = fe.data, E += fe.size;
                break;
              default:
                E = e, R.a.w("AMF", "Unsupported AMF value type " + w);
            }
          } catch (le) {
            R.a.e("AMF", le.toString());
          }
          return { data: u, size: E, objectEnd: M };
        }, r;
      }(), A = function() {
        function r(t) {
          this.TAG = "ExpGolomb", this._buffer = t, this._buffer_index = 0, this._total_bytes = t.byteLength, this._total_bits = 8 * t.byteLength, this._current_word = 0, this._current_word_bits_left = 0;
        }
        return r.prototype.destroy = function() {
          this._buffer = null;
        }, r.prototype._fillCurrentWord = function() {
          var t = this._total_bytes - this._buffer_index;
          if (t <= 0)
            throw new m.a("ExpGolomb: _fillCurrentWord() but no bytes available");
          var i = Math.min(4, t), e = new Uint8Array(4);
          e.set(this._buffer.subarray(this._buffer_index, this._buffer_index + i)), this._current_word = new DataView(e.buffer).getUint32(0, !1), this._buffer_index += i, this._current_word_bits_left = 8 * i;
        }, r.prototype.readBits = function(t) {
          if (t > 32)
            throw new m.b("ExpGolomb: readBits() bits exceeded max 32bits!");
          if (t <= this._current_word_bits_left) {
            var i = this._current_word >>> 32 - t;
            return this._current_word <<= t, this._current_word_bits_left -= t, i;
          }
          var e = this._current_word_bits_left ? this._current_word : 0;
          e >>>= 32 - this._current_word_bits_left;
          var u = t - this._current_word_bits_left;
          this._fillCurrentWord();
          var b = Math.min(u, this._current_word_bits_left), E = this._current_word >>> 32 - b;
          return this._current_word <<= b, this._current_word_bits_left -= b, e = e << b | E;
        }, r.prototype.readBool = function() {
          return this.readBits(1) === 1;
        }, r.prototype.readByte = function() {
          return this.readBits(8);
        }, r.prototype._skipLeadingZero = function() {
          var t;
          for (t = 0; t < this._current_word_bits_left; t++)
            if (this._current_word & 2147483648 >>> t)
              return this._current_word <<= t, this._current_word_bits_left -= t, t;
          return this._fillCurrentWord(), t + this._skipLeadingZero();
        }, r.prototype.readUEG = function() {
          var t = this._skipLeadingZero();
          return this.readBits(t + 1) - 1;
        }, r.prototype.readSEG = function() {
          var t = this.readUEG();
          return 1 & t ? t + 1 >>> 1 : -1 * (t >>> 1);
        }, r;
      }(), g = function() {
        function r() {
        }
        return r._ebsp2rbsp = function(t) {
          for (var i = t, e = i.byteLength, u = new Uint8Array(e), b = 0, E = 0; E < e; E++)
            E >= 2 && i[E] === 3 && i[E - 1] === 0 && i[E - 2] === 0 || (u[b] = i[E], b++);
          return new Uint8Array(u.buffer, 0, b);
        }, r.parseSPS = function(t) {
          for (var i = t.subarray(1, 4), e = "avc1.", u = 0; u < 3; u++) {
            var b = i[u].toString(16);
            b.length < 2 && (b = "0" + b), e += b;
          }
          var E = r._ebsp2rbsp(t), w = new A(E);
          w.readByte();
          var M = w.readByte();
          w.readByte();
          var B = w.readByte();
          w.readUEG();
          var j = r.getProfileString(M), G = r.getLevelString(B), N = 1, V = 420, X = 8, ie = 8;
          if ((M === 100 || M === 110 || M === 122 || M === 244 || M === 44 || M === 83 || M === 86 || M === 118 || M === 128 || M === 138 || M === 144) && ((N = w.readUEG()) === 3 && w.readBits(1), N <= 3 && (V = [0, 420, 422, 444][N]), X = w.readUEG() + 8, ie = w.readUEG() + 8, w.readBits(1), w.readBool()))
            for (var Q = N !== 3 ? 8 : 12, fe = 0; fe < Q; fe++)
              w.readBool() && (fe < 6 ? r._skipScalingList(w, 16) : r._skipScalingList(w, 64));
          w.readUEG();
          var le = w.readUEG();
          if (le === 0)
            w.readUEG();
          else if (le === 1) {
            w.readBits(1), w.readSEG(), w.readSEG();
            var ae = w.readUEG();
            for (fe = 0; fe < ae; fe++)
              w.readSEG();
          }
          var Se = w.readUEG();
          w.readBits(1);
          var Te = w.readUEG(), se = w.readUEG(), ge = w.readBits(1);
          ge === 0 && w.readBits(1), w.readBits(1);
          var Le = 0, ve = 0, Ee = 0, Oe = 0;
          w.readBool() && (Le = w.readUEG(), ve = w.readUEG(), Ee = w.readUEG(), Oe = w.readUEG());
          var ke = 1, Ae = 1, Ce = 0, Be = !0, Ne = 0, tt = 0;
          if (w.readBool()) {
            if (w.readBool()) {
              var Je = w.readByte();
              Je > 0 && Je < 16 ? (ke = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][Je - 1], Ae = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][Je - 1]) : Je === 255 && (ke = w.readByte() << 8 | w.readByte(), Ae = w.readByte() << 8 | w.readByte());
            }
            if (w.readBool() && w.readBool(), w.readBool() && (w.readBits(4), w.readBool() && w.readBits(24)), w.readBool() && (w.readUEG(), w.readUEG()), w.readBool()) {
              var it = w.readBits(32), at = w.readBits(32);
              Be = w.readBool(), Ce = (Ne = at) / (tt = 2 * it);
            }
          }
          var rt = 1;
          ke === 1 && Ae === 1 || (rt = ke / Ae);
          var Ve = 0, we = 0;
          N === 0 ? (Ve = 1, we = 2 - ge) : (Ve = N === 3 ? 1 : 2, we = (N === 1 ? 2 : 1) * (2 - ge));
          var $e = 16 * (Te + 1), Qe = 16 * (se + 1) * (2 - ge);
          $e -= (Le + ve) * Ve, Qe -= (Ee + Oe) * we;
          var pt = Math.ceil($e * rt);
          return w.destroy(), w = null, { codec_mimetype: e, profile_idc: M, level_idc: B, profile_string: j, level_string: G, chroma_format_idc: N, bit_depth: X, bit_depth_luma: X, bit_depth_chroma: ie, ref_frames: Se, chroma_format: V, chroma_format_string: r.getChromaFormatString(V), frame_rate: { fixed: Be, fps: Ce, fps_den: tt, fps_num: Ne }, sar_ratio: { width: ke, height: Ae }, codec_size: { width: $e, height: Qe }, present_size: { width: pt, height: Qe } };
        }, r._skipScalingList = function(t, i) {
          for (var e = 8, u = 8, b = 0; b < i; b++)
            u !== 0 && (u = (e + t.readSEG() + 256) % 256), e = u === 0 ? e : u;
        }, r.getProfileString = function(t) {
          switch (t) {
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
        }, r.getLevelString = function(t) {
          return (t / 10).toFixed(1);
        }, r.getChromaFormatString = function(t) {
          switch (t) {
            case 420:
              return "4:2:0";
            case 422:
              return "4:2:2";
            case 444:
              return "4:4:4";
            default:
              return "Unknown";
          }
        }, r;
      }(), c = z(5), p = function() {
        function r() {
        }
        return r._ebsp2rbsp = function(t) {
          for (var i = t, e = i.byteLength, u = new Uint8Array(e), b = 0, E = 0; E < e; E++)
            E >= 2 && i[E] === 3 && i[E - 1] === 0 && i[E - 2] === 0 || (u[b] = i[E], b++);
          return new Uint8Array(u.buffer, 0, b);
        }, r.parseVPS = function(t) {
          var i = r._ebsp2rbsp(t), e = new A(i);
          return e.readByte(), e.readByte(), e.readBits(4), e.readBits(2), e.readBits(6), { num_temporal_layers: e.readBits(3) + 1, temporal_id_nested: e.readBool() };
        }, r.parseSPS = function(t) {
          var i = r._ebsp2rbsp(t), e = new A(i);
          e.readByte(), e.readByte();
          for (var u = 0, b = 0, E = 0, w = 0, M = (e.readBits(4), e.readBits(3)), B = (e.readBool(), e.readBits(2)), j = e.readBool(), G = e.readBits(5), N = e.readByte(), V = e.readByte(), X = e.readByte(), ie = e.readByte(), Q = e.readByte(), fe = e.readByte(), le = e.readByte(), ae = e.readByte(), Se = e.readByte(), Te = e.readByte(), se = e.readByte(), ge = [], Le = [], ve = 0; ve < M; ve++)
            ge.push(e.readBool()), Le.push(e.readBool());
          if (M > 0)
            for (ve = M; ve < 8; ve++)
              e.readBits(2);
          for (ve = 0; ve < M; ve++)
            ge[ve] && (e.readByte(), e.readByte(), e.readByte(), e.readByte(), e.readByte(), e.readByte(), e.readByte(), e.readByte(), e.readByte(), e.readByte(), e.readByte()), Le[ve] && e.readByte();
          e.readUEG();
          var Ee = e.readUEG();
          Ee == 3 && e.readBits(1);
          var Oe = e.readUEG(), ke = e.readUEG();
          e.readBool() && (u += e.readUEG(), b += e.readUEG(), E += e.readUEG(), w += e.readUEG());
          var Ae = e.readUEG(), Ce = e.readUEG(), Be = e.readUEG();
          for (ve = e.readBool() ? 0 : M; ve <= M; ve++)
            e.readUEG(), e.readUEG(), e.readUEG();
          if (e.readUEG(), e.readUEG(), e.readUEG(), e.readUEG(), e.readUEG(), e.readUEG(), e.readBool() && e.readBool())
            for (var Ne = 0; Ne < 4; Ne++)
              for (var tt = 0; tt < (Ne === 3 ? 2 : 6); tt++)
                if (e.readBool()) {
                  var Je = Math.min(64, 1 << 4 + (Ne << 1));
                  for (Ne > 1 && e.readSEG(), ve = 0; ve < Je; ve++)
                    e.readSEG();
                } else
                  e.readUEG();
          e.readBool(), e.readBool(), e.readBool() && (e.readByte(), e.readUEG(), e.readUEG(), e.readBool());
          var it = e.readUEG(), at = 0;
          for (ve = 0; ve < it; ve++) {
            var rt = !1;
            if (ve !== 0 && (rt = e.readBool()), rt) {
              ve === it && e.readUEG(), e.readBool(), e.readUEG();
              for (var Ve = 0, we = 0; we <= at; we++) {
                var $e = e.readBool(), Qe = !1;
                $e || (Qe = e.readBool()), ($e || Qe) && Ve++;
              }
              at = Ve;
            } else {
              var pt = e.readUEG(), Bt = e.readUEG();
              for (at = pt + Bt, we = 0; we < pt; we++)
                e.readUEG(), e.readBool();
              for (we = 0; we < Bt; we++)
                e.readUEG(), e.readBool();
            }
          }
          if (e.readBool()) {
            var Qt = e.readUEG();
            for (ve = 0; ve < Qt; ve++) {
              for (we = 0; we < Be + 4; we++)
                e.readBits(1);
              e.readBits(1);
            }
          }
          var Ut = 0, ht = 1, _t = 1, Ft = !1, wt = 1, Ct = 1;
          if (e.readBool(), e.readBool(), e.readBool()) {
            if (e.readBool()) {
              var ct = e.readByte();
              ct > 0 && ct <= 16 ? (ht = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][ct - 1], _t = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][ct - 1]) : ct === 255 && (ht = e.readBits(16), _t = e.readBits(16));
            }
            if (e.readBool() && e.readBool(), e.readBool() && (e.readBits(3), e.readBool(), e.readBool() && (e.readByte(), e.readByte(), e.readByte())), e.readBool() && (e.readUEG(), e.readUEG()), e.readBool(), e.readBool(), e.readBool(), e.readBool() && (e.readUEG(), e.readUEG(), e.readUEG(), e.readUEG()), e.readBool() && (wt = e.readBits(32), Ct = e.readBits(32), e.readBool() && (e.readUEG(), e.readBool()))) {
              var Ot = !1, Dt = !1, mt = !1;
              for (Ot = e.readBool(), Dt = e.readBool(), (Ot || Dt) && ((mt = e.readBool()) && (e.readByte(), e.readBits(5), e.readBool(), e.readBits(5)), e.readBits(4), e.readBits(4), mt && e.readBits(4), e.readBits(5), e.readBits(5), e.readBits(5)), ve = 0; ve <= M; ve++) {
                var Nt = e.readBool();
                Ft = Nt;
                var jt = !1, It = 1;
                Nt || (jt = e.readBool());
                var Gt = !1;
                if (jt ? e.readSEG() : Gt = e.readBool(), Gt || (It = e.readUEG() + 1), Ot)
                  for (we = 0; we < It; we++)
                    e.readUEG(), e.readUEG(), mt && (e.readUEG(), e.readUEG());
                if (Dt)
                  for (we = 0; we < It; we++)
                    e.readUEG(), e.readUEG(), mt && (e.readUEG(), e.readUEG());
              }
            }
            e.readBool() && (e.readBool(), e.readBool(), e.readBool(), Ut = e.readUEG(), e.readUEG(), e.readUEG(), e.readUEG(), e.readUEG());
          }
          e.readBool();
          var ei = "hvc1." + G + ".1.L" + se + ".B0", Vt = Oe - (u + b) * (Ee === 1 || Ee === 2 ? 2 : 1), zt = ke - (E + w) * (Ee === 1 ? 2 : 1), Kt = 1;
          return ht !== 1 && _t !== 1 && (Kt = ht / _t), e.destroy(), e = null, { codec_mimetype: ei, level_string: r.getLevelString(se), profile_idc: G, bit_depth: Ae + 8, ref_frames: 1, chroma_format: Ee, chroma_format_string: r.getChromaFormatString(Ee), general_level_idc: se, general_profile_space: B, general_tier_flag: j, general_profile_idc: G, general_profile_compatibility_flags_1: N, general_profile_compatibility_flags_2: V, general_profile_compatibility_flags_3: X, general_profile_compatibility_flags_4: ie, general_constraint_indicator_flags_1: Q, general_constraint_indicator_flags_2: fe, general_constraint_indicator_flags_3: le, general_constraint_indicator_flags_4: ae, general_constraint_indicator_flags_5: Se, general_constraint_indicator_flags_6: Te, min_spatial_segmentation_idc: Ut, constant_frame_rate: 0, chroma_format_idc: Ee, bit_depth_luma_minus8: Ae, bit_depth_chroma_minus8: Ce, frame_rate: { fixed: Ft, fps: Ct / wt, fps_den: wt, fps_num: Ct }, sar_ratio: { width: ht, height: _t }, codec_size: { width: Vt, height: zt }, present_size: { width: Vt * Kt, height: zt } };
        }, r.parsePPS = function(t) {
          var i = r._ebsp2rbsp(t), e = new A(i);
          e.readByte(), e.readByte(), e.readUEG(), e.readUEG(), e.readBool(), e.readBool(), e.readBits(3), e.readBool(), e.readBool(), e.readUEG(), e.readUEG(), e.readSEG(), e.readBool(), e.readBool(), e.readBool() && e.readUEG(), e.readSEG(), e.readSEG(), e.readBool(), e.readBool(), e.readBool(), e.readBool();
          var u = e.readBool(), b = e.readBool(), E = 1;
          return b && u ? E = 0 : b ? E = 3 : u && (E = 2), { parallelismType: E };
        }, r.getChromaFormatString = function(t) {
          switch (t) {
            case 0:
              return "4:0:0";
            case 1:
              return "4:2:0";
            case 2:
              return "4:2:2";
            case 3:
              return "4:4:4";
            default:
              return "Unknown";
          }
        }, r.getProfileString = function(t) {
          switch (t) {
            case 1:
              return "Main";
            case 2:
              return "Main10";
            case 3:
              return "MainSP";
            case 4:
              return "Rext";
            case 9:
              return "SCC";
            default:
              return "Unknown";
          }
        }, r.getLevelString = function(t) {
          return (t / 30).toFixed(1);
        }, r;
      }();
      function n(r) {
        return r.byteOffset % 2 == 0 && r.byteLength % 2 == 0;
      }
      function a(r) {
        return r.byteOffset % 4 == 0 && r.byteLength % 4 == 0;
      }
      function _(r, t) {
        for (var i = 0; i < r.length; i++)
          if (r[i] !== t[i])
            return !1;
        return !0;
      }
      var s = function(r, t) {
        return r.byteLength === t.byteLength && (a(r) && a(t) ? function(i, e) {
          return _(new Uint32Array(i.buffer, i.byteOffset, i.byteLength / 4), new Uint32Array(e.buffer, e.byteOffset, e.byteLength / 4));
        }(r, t) : n(r) && n(t) ? function(i, e) {
          return _(new Uint16Array(i.buffer, i.byteOffset, i.byteLength / 2), new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2));
        }(r, t) : function(i, e) {
          return _(i, e);
        }(r, t));
      }, h, y = function() {
        function r(t, i) {
          this.TAG = "FLVDemuxer", this._config = i, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null, this._dataOffset = t.dataOffset, this._firstParse = !0, this._dispatch = !1, this._hasAudio = t.hasAudioTrack, this._hasVideo = t.hasVideoTrack, this._hasAudioFlagOverrided = !1, this._hasVideoFlagOverrided = !1, this._audioInitialMetadataDispatched = !1, this._videoInitialMetadataDispatched = !1, this._mediaInfo = new L.a(), this._mediaInfo.hasAudio = this._hasAudio, this._mediaInfo.hasVideo = this._hasVideo, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._naluLengthSize = 4, this._timestampBase = 0, this._timescale = 1e3, this._duration = 0, this._durationOverrided = !1, this._referenceFrameRate = { fixed: !0, fps: 23.976, fps_num: 23976, fps_den: 1e3 }, this._flvSoundRateTable = [5500, 11025, 22050, 44100, 48e3], this._mpegSamplingRates = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], this._mpegAudioV10SampleRateTable = [44100, 48e3, 32e3, 0], this._mpegAudioV20SampleRateTable = [22050, 24e3, 16e3, 0], this._mpegAudioV25SampleRateTable = [11025, 12e3, 8e3, 0], this._mpegAudioL1BitRateTable = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1], this._mpegAudioL2BitRateTable = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1], this._mpegAudioL3BitRateTable = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1], this._videoTrack = { type: "video", id: 1, sequenceNumber: 0, samples: [], length: 0 }, this._audioTrack = { type: "audio", id: 2, sequenceNumber: 0, samples: [], length: 0 }, this._littleEndian = function() {
            var e = new ArrayBuffer(2);
            return new DataView(e).setInt16(0, 256, !0), new Int16Array(e)[0] === 256;
          }();
        }
        return r.prototype.destroy = function() {
          this._mediaInfo = null, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._videoTrack = null, this._audioTrack = null, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null;
        }, r.probe = function(t) {
          var i = new Uint8Array(t);
          if (i.byteLength < 9)
            return { needMoreData: !0 };
          var e = { match: !1 };
          if (i[0] !== 70 || i[1] !== 76 || i[2] !== 86 || i[3] !== 1)
            return e;
          var u, b, E = (4 & i[4]) >>> 2 != 0, w = (1 & i[4]) != 0, M = (u = i)[b = 5] << 24 | u[b + 1] << 16 | u[b + 2] << 8 | u[b + 3];
          return M < 9 ? e : { match: !0, consumed: M, dataOffset: M, hasAudioTrack: E, hasVideoTrack: w };
        }, r.prototype.bindDataSource = function(t) {
          return t.onDataArrival = this.parseChunks.bind(this), this;
        }, Object.defineProperty(r.prototype, "onTrackMetadata", { get: function() {
          return this._onTrackMetadata;
        }, set: function(t) {
          this._onTrackMetadata = t;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "onMediaInfo", { get: function() {
          return this._onMediaInfo;
        }, set: function(t) {
          this._onMediaInfo = t;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "onMetaDataArrived", { get: function() {
          return this._onMetaDataArrived;
        }, set: function(t) {
          this._onMetaDataArrived = t;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "onScriptDataArrived", { get: function() {
          return this._onScriptDataArrived;
        }, set: function(t) {
          this._onScriptDataArrived = t;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "onError", { get: function() {
          return this._onError;
        }, set: function(t) {
          this._onError = t;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "onDataAvailable", { get: function() {
          return this._onDataAvailable;
        }, set: function(t) {
          this._onDataAvailable = t;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "timestampBase", { get: function() {
          return this._timestampBase;
        }, set: function(t) {
          this._timestampBase = t;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "overridedDuration", { get: function() {
          return this._duration;
        }, set: function(t) {
          this._durationOverrided = !0, this._duration = t, this._mediaInfo.duration = t;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "overridedHasAudio", { set: function(t) {
          this._hasAudioFlagOverrided = !0, this._hasAudio = t, this._mediaInfo.hasAudio = t;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "overridedHasVideo", { set: function(t) {
          this._hasVideoFlagOverrided = !0, this._hasVideo = t, this._mediaInfo.hasVideo = t;
        }, enumerable: !1, configurable: !0 }), r.prototype.resetMediaInfo = function() {
          this._mediaInfo = new L.a();
        }, r.prototype._isInitialMetadataDispatched = function() {
          return this._hasAudio && this._hasVideo ? this._audioInitialMetadataDispatched && this._videoInitialMetadataDispatched : this._hasAudio && !this._hasVideo ? this._audioInitialMetadataDispatched : !(this._hasAudio || !this._hasVideo) && this._videoInitialMetadataDispatched;
        }, r.prototype.parseChunks = function(t, i) {
          if (!(this._onError && this._onMediaInfo && this._onTrackMetadata && this._onDataAvailable))
            throw new m.a("Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");
          var e = 0, u = this._littleEndian;
          if (i === 0) {
            if (!(t.byteLength > 13))
              return 0;
            e = r.probe(t).dataOffset;
          }
          for (this._firstParse && (this._firstParse = !1, i + e !== this._dataOffset && R.a.w(this.TAG, "First time parsing but chunk byteStart invalid!"), (b = new DataView(t, e)).getUint32(0, !u) !== 0 && R.a.w(this.TAG, "PrevTagSize0 !== 0 !!!"), e += 4); e < t.byteLength; ) {
            this._dispatch = !0;
            var b = new DataView(t, e);
            if (e + 11 + 4 > t.byteLength)
              break;
            var E = b.getUint8(0), w = 16777215 & b.getUint32(0, !u);
            if (e + 11 + w + 4 > t.byteLength)
              break;
            if (E === 8 || E === 9 || E === 18) {
              var M = b.getUint8(4), B = b.getUint8(5), j = b.getUint8(6) | B << 8 | M << 16 | b.getUint8(7) << 24;
              16777215 & b.getUint32(7, !u) && R.a.w(this.TAG, "Meet tag which has StreamID != 0!");
              var G = e + 11;
              switch (E) {
                case 8:
                  this._parseAudioData(t, G, w, j);
                  break;
                case 9:
                  this._parseVideoData(t, G, w, j, i + e);
                  break;
                case 18:
                  this._parseScriptData(t, G, w);
              }
              var N = b.getUint32(11 + w, !u);
              N !== 11 + w && R.a.w(this.TAG, "Invalid PrevTagSize " + N), e += 11 + w + 4;
            } else
              R.a.w(this.TAG, "Unsupported tag type " + E + ", skipped"), e += 11 + w + 4;
          }
          return this._isInitialMetadataDispatched() && this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack), e;
        }, r.prototype._parseScriptData = function(t, i, e) {
          var u = v.parseScriptData(t, i, e);
          if (u.hasOwnProperty("onMetaData")) {
            if (u.onMetaData == null || typeof u.onMetaData != "object")
              return void R.a.w(this.TAG, "Invalid onMetaData structure!");
            this._metadata && R.a.w(this.TAG, "Found another onMetaData tag!"), this._metadata = u;
            var b = this._metadata.onMetaData;
            if (this._onMetaDataArrived && this._onMetaDataArrived(Object.assign({}, b)), typeof b.hasAudio == "boolean" && this._hasAudioFlagOverrided === !1 && (this._hasAudio = b.hasAudio, this._mediaInfo.hasAudio = this._hasAudio), typeof b.hasVideo == "boolean" && this._hasVideoFlagOverrided === !1 && (this._hasVideo = b.hasVideo, this._mediaInfo.hasVideo = this._hasVideo), typeof b.audiodatarate == "number" && (this._mediaInfo.audioDataRate = b.audiodatarate), typeof b.videodatarate == "number" && (this._mediaInfo.videoDataRate = b.videodatarate), typeof b.width == "number" && (this._mediaInfo.width = b.width), typeof b.height == "number" && (this._mediaInfo.height = b.height), typeof b.duration == "number") {
              if (!this._durationOverrided) {
                var E = Math.floor(b.duration * this._timescale);
                this._duration = E, this._mediaInfo.duration = E;
              }
            } else
              this._mediaInfo.duration = 0;
            if (typeof b.framerate == "number") {
              var w = Math.floor(1e3 * b.framerate);
              if (w > 0) {
                var M = w / 1e3;
                this._referenceFrameRate.fixed = !0, this._referenceFrameRate.fps = M, this._referenceFrameRate.fps_num = w, this._referenceFrameRate.fps_den = 1e3, this._mediaInfo.fps = M;
              }
            }
            if (typeof b.keyframes == "object") {
              this._mediaInfo.hasKeyframesIndex = !0;
              var B = b.keyframes;
              this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(B), b.keyframes = null;
            } else
              this._mediaInfo.hasKeyframesIndex = !1;
            this._dispatch = !1, this._mediaInfo.metadata = b, R.a.v(this.TAG, "Parsed onMetaData"), this._mediaInfo.isComplete() && this._onMediaInfo(this._mediaInfo);
          }
          Object.keys(u).length > 0 && this._onScriptDataArrived && this._onScriptDataArrived(Object.assign({}, u));
        }, r.prototype._parseKeyframesIndex = function(t) {
          for (var i = [], e = [], u = 1; u < t.times.length; u++) {
            var b = this._timestampBase + Math.floor(1e3 * t.times[u]);
            i.push(b), e.push(t.filepositions[u]);
          }
          return { times: i, filepositions: e };
        }, r.prototype._parseAudioData = function(t, i, e, u) {
          if (e <= 1)
            R.a.w(this.TAG, "Flv: Invalid audio packet, missing SoundData payload!");
          else if (this._hasAudioFlagOverrided !== !0 || this._hasAudio !== !1) {
            this._littleEndian;
            var b = new DataView(t, i, e).getUint8(0), E = b >>> 4;
            if (E === 2 || E === 10) {
              var w = 0, M = (12 & b) >>> 2;
              if (M >= 0 && M <= 4) {
                w = this._flvSoundRateTable[M];
                var B = 1 & b, j = this._audioMetadata, G = this._audioTrack;
                if (j || (this._hasAudio === !1 && this._hasAudioFlagOverrided === !1 && (this._hasAudio = !0, this._mediaInfo.hasAudio = !0), (j = this._audioMetadata = {}).type = "audio", j.id = G.id, j.timescale = this._timescale, j.duration = this._duration, j.audioSampleRate = w, j.channelCount = B === 0 ? 1 : 2), E === 10) {
                  var N = this._parseAACAudioData(t, i + 1, e - 1);
                  if (N == null)
                    return;
                  if (N.packetType === 0) {
                    if (j.config) {
                      if (s(N.data.config, j.config))
                        return;
                      R.a.w(this.TAG, "AudioSpecificConfig has been changed, re-generate initialization segment");
                    }
                    var V = N.data;
                    j.audioSampleRate = V.samplingRate, j.channelCount = V.channelCount, j.codec = V.codec, j.originalCodec = V.originalCodec, j.config = V.config, j.refSampleDuration = 1024 / j.audioSampleRate * j.timescale, R.a.v(this.TAG, "Parsed AudioSpecificConfig"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._audioInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("audio", j), (Q = this._mediaInfo).audioCodec = j.originalCodec, Q.audioSampleRate = j.audioSampleRate, Q.audioChannelCount = j.channelCount, Q.hasVideo ? Q.videoCodec != null && (Q.mimeType = 'video/x-flv; codecs="' + Q.videoCodec + "," + Q.audioCodec + '"') : Q.mimeType = 'video/x-flv; codecs="' + Q.audioCodec + '"', Q.isComplete() && this._onMediaInfo(Q);
                  } else if (N.packetType === 1) {
                    var X = this._timestampBase + u, ie = { unit: N.data, length: N.data.byteLength, dts: X, pts: X };
                    G.samples.push(ie), G.length += N.data.length;
                  } else
                    R.a.e(this.TAG, "Flv: Unsupported AAC data type " + N.packetType);
                } else if (E === 2) {
                  if (!j.codec) {
                    var Q;
                    if ((V = this._parseMP3AudioData(t, i + 1, e - 1, !0)) == null)
                      return;
                    j.audioSampleRate = V.samplingRate, j.channelCount = V.channelCount, j.codec = V.codec, j.originalCodec = V.originalCodec, j.refSampleDuration = 1152 / j.audioSampleRate * j.timescale, R.a.v(this.TAG, "Parsed MPEG Audio Frame Header"), this._audioInitialMetadataDispatched = !0, this._onTrackMetadata("audio", j), (Q = this._mediaInfo).audioCodec = j.codec, Q.audioSampleRate = j.audioSampleRate, Q.audioChannelCount = j.channelCount, Q.audioDataRate = V.bitRate, Q.hasVideo ? Q.videoCodec != null && (Q.mimeType = 'video/x-flv; codecs="' + Q.videoCodec + "," + Q.audioCodec + '"') : Q.mimeType = 'video/x-flv; codecs="' + Q.audioCodec + '"', Q.isComplete() && this._onMediaInfo(Q);
                  }
                  var fe = this._parseMP3AudioData(t, i + 1, e - 1, !1);
                  if (fe == null)
                    return;
                  X = this._timestampBase + u;
                  var le = { unit: fe, length: fe.byteLength, dts: X, pts: X };
                  G.samples.push(le), G.length += fe.length;
                }
              } else
                this._onError(c.a.FORMAT_ERROR, "Flv: Invalid audio sample rate idx: " + M);
            } else
              this._onError(c.a.CODEC_UNSUPPORTED, "Flv: Unsupported audio codec idx: " + E);
          }
        }, r.prototype._parseAACAudioData = function(t, i, e) {
          if (!(e <= 1)) {
            var u = {}, b = new Uint8Array(t, i, e);
            return u.packetType = b[0], b[0] === 0 ? u.data = this._parseAACAudioSpecificConfig(t, i + 1, e - 1) : u.data = b.subarray(1), u;
          }
          R.a.w(this.TAG, "Flv: Invalid AAC packet, missing AACPacketType or/and Data!");
        }, r.prototype._parseAACAudioSpecificConfig = function(t, i, e) {
          var u, b, E = new Uint8Array(t, i, e), w = null, M = 0, B = null;
          if (M = u = E[0] >>> 3, (b = (7 & E[0]) << 1 | E[1] >>> 7) < 0 || b >= this._mpegSamplingRates.length)
            this._onError(c.a.FORMAT_ERROR, "Flv: AAC invalid sampling frequency index!");
          else {
            var j = this._mpegSamplingRates[b], G = (120 & E[1]) >>> 3;
            if (!(G < 0 || G >= 8)) {
              M === 5 && (B = (7 & E[1]) << 1 | E[2] >>> 7, (124 & E[2]) >>> 2);
              var N = self.navigator.userAgent.toLowerCase();
              return N.indexOf("firefox") !== -1 ? b >= 6 ? (M = 5, w = new Array(4), B = b - 3) : (M = 2, w = new Array(2), B = b) : N.indexOf("android") !== -1 ? (M = 2, w = new Array(2), B = b) : (M = 5, B = b, w = new Array(4), b >= 6 ? B = b - 3 : G === 1 && (M = 2, w = new Array(2), B = b)), w[0] = M << 3, w[0] |= (15 & b) >>> 1, w[1] = (15 & b) << 7, w[1] |= (15 & G) << 3, M === 5 && (w[1] |= (15 & B) >>> 1, w[2] = (1 & B) << 7, w[2] |= 8, w[3] = 0), { config: w, samplingRate: j, channelCount: G, codec: "mp4a.40." + M, originalCodec: "mp4a.40." + u };
            }
            this._onError(c.a.FORMAT_ERROR, "Flv: AAC invalid channel configuration");
          }
        }, r.prototype._parseMP3AudioData = function(t, i, e, u) {
          if (!(e < 4)) {
            this._littleEndian;
            var b = new Uint8Array(t, i, e), E = null;
            if (u) {
              if (b[0] !== 255)
                return;
              var w = b[1] >>> 3 & 3, M = (6 & b[1]) >> 1, B = (240 & b[2]) >>> 4, j = (12 & b[2]) >>> 2, G = (b[3] >>> 6 & 3) !== 3 ? 2 : 1, N = 0, V = 0;
              switch (w) {
                case 0:
                  N = this._mpegAudioV25SampleRateTable[j];
                  break;
                case 2:
                  N = this._mpegAudioV20SampleRateTable[j];
                  break;
                case 3:
                  N = this._mpegAudioV10SampleRateTable[j];
              }
              switch (M) {
                case 1:
                  B < this._mpegAudioL3BitRateTable.length && (V = this._mpegAudioL3BitRateTable[B]);
                  break;
                case 2:
                  B < this._mpegAudioL2BitRateTable.length && (V = this._mpegAudioL2BitRateTable[B]);
                  break;
                case 3:
                  B < this._mpegAudioL1BitRateTable.length && (V = this._mpegAudioL1BitRateTable[B]);
              }
              E = { bitRate: V, samplingRate: N, channelCount: G, codec: "mp3", originalCodec: "mp3" };
            } else
              E = b;
            return E;
          }
          R.a.w(this.TAG, "Flv: Invalid MP3 packet, header missing!");
        }, r.prototype._parseVideoData = function(t, i, e, u, b) {
          if (e <= 1)
            R.a.w(this.TAG, "Flv: Invalid video packet, missing VideoData payload!");
          else if (this._hasVideoFlagOverrided !== !0 || this._hasVideo !== !1) {
            var E = new Uint8Array(t, i, e)[0], w = (112 & E) >>> 4;
            if (128 & E) {
              var M = 15 & E, B = String.fromCharCode.apply(String, new Uint8Array(t, i, e).slice(1, 5));
              if (B !== "hvc1")
                return void this._onError(c.a.CODEC_UNSUPPORTED, "Flv: Unsupported codec in video frame: " + B);
              this._parseEnhancedHEVCVideoPacket(t, i + 5, e - 5, u, b, w, M);
            } else {
              var j = 15 & E;
              if (j === 7)
                this._parseAVCVideoPacket(t, i + 1, e - 1, u, b, w);
              else {
                if (j !== 12)
                  return void this._onError(c.a.CODEC_UNSUPPORTED, "Flv: Unsupported codec in video frame: " + j);
                this._parseHEVCVideoPacket(t, i + 1, e - 1, u, b, w);
              }
            }
          }
        }, r.prototype._parseAVCVideoPacket = function(t, i, e, u, b, E) {
          if (e < 4)
            R.a.w(this.TAG, "Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime");
          else {
            var w = this._littleEndian, M = new DataView(t, i, e), B = M.getUint8(0), j = (16777215 & M.getUint32(0, !w)) << 8 >> 8;
            if (B === 0)
              this._parseAVCDecoderConfigurationRecord(t, i + 4, e - 4);
            else if (B === 1)
              this._parseAVCVideoData(t, i + 4, e - 4, u, b, E, j);
            else if (B !== 2)
              return void this._onError(c.a.FORMAT_ERROR, "Flv: Invalid video packet type " + B);
          }
        }, r.prototype._parseHEVCVideoPacket = function(t, i, e, u, b, E) {
          if (e < 4)
            R.a.w(this.TAG, "Flv: Invalid HEVC packet, missing HEVCPacketType or/and CompositionTime");
          else {
            var w = this._littleEndian, M = new DataView(t, i, e), B = M.getUint8(0), j = (16777215 & M.getUint32(0, !w)) << 8 >> 8;
            if (B === 0)
              this._parseHEVCDecoderConfigurationRecord(t, i + 4, e - 4);
            else if (B === 1)
              this._parseHEVCVideoData(t, i + 4, e - 4, u, b, E, j);
            else if (B !== 2)
              return void this._onError(c.a.FORMAT_ERROR, "Flv: Invalid video packet type " + B);
          }
        }, r.prototype._parseEnhancedHEVCVideoPacket = function(t, i, e, u, b, E, w) {
          if (e < 4)
            R.a.w(this.TAG, "Flv: Invalid HEVC packet, missing HEVCPacketType or/and CompositionTime");
          else {
            var M = this._littleEndian, B = new DataView(t, i, e);
            if (w === 0)
              this._parseHEVCDecoderConfigurationRecord(t, i, e);
            else if (w === 1) {
              var j = (4294967040 & B.getUint32(0, !M)) >> 8;
              this._parseHEVCVideoData(t, i + 3, e - 3, u, b, E, j);
            } else if (w === 3)
              this._parseHEVCVideoData(t, i, e, u, b, E, 0);
            else if (w !== 2)
              return void this._onError(c.a.FORMAT_ERROR, "Flv: Invalid video packet type " + w);
          }
        }, r.prototype._parseAVCDecoderConfigurationRecord = function(t, i, e) {
          if (e < 7)
            R.a.w(this.TAG, "Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");
          else {
            var u = this._videoMetadata, b = this._videoTrack, E = this._littleEndian, w = new DataView(t, i, e);
            if (u) {
              if (u.avcc !== void 0) {
                var M = new Uint8Array(t, i, e);
                if (s(M, u.avcc))
                  return;
                R.a.w(this.TAG, "AVCDecoderConfigurationRecord has been changed, re-generate initialization segment");
              }
            } else
              this._hasVideo === !1 && this._hasVideoFlagOverrided === !1 && (this._hasVideo = !0, this._mediaInfo.hasVideo = !0), (u = this._videoMetadata = {}).type = "video", u.id = b.id, u.timescale = this._timescale, u.duration = this._duration;
            var B = w.getUint8(0), j = w.getUint8(1);
            if (w.getUint8(2), w.getUint8(3), B === 1 && j !== 0)
              if (this._naluLengthSize = 1 + (3 & w.getUint8(4)), this._naluLengthSize === 3 || this._naluLengthSize === 4) {
                var G = 31 & w.getUint8(5);
                if (G !== 0) {
                  G > 1 && R.a.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: SPS Count = " + G);
                  for (var N = 6, V = 0; V < G; V++) {
                    var X = w.getUint16(N, !E);
                    if (N += 2, X !== 0) {
                      var ie = new Uint8Array(t, i + N, X);
                      N += X;
                      var Q = g.parseSPS(ie);
                      if (V === 0) {
                        u.codecWidth = Q.codec_size.width, u.codecHeight = Q.codec_size.height, u.presentWidth = Q.present_size.width, u.presentHeight = Q.present_size.height, u.profile = Q.profile_string, u.level = Q.level_string, u.bitDepth = Q.bit_depth, u.chromaFormat = Q.chroma_format, u.sarRatio = Q.sar_ratio, u.frameRate = Q.frame_rate, Q.frame_rate.fixed !== !1 && Q.frame_rate.fps_num !== 0 && Q.frame_rate.fps_den !== 0 || (u.frameRate = this._referenceFrameRate);
                        var fe = u.frameRate.fps_den, le = u.frameRate.fps_num;
                        u.refSampleDuration = u.timescale * (fe / le);
                        for (var ae = ie.subarray(1, 4), Se = "avc1.", Te = 0; Te < 3; Te++) {
                          var se = ae[Te].toString(16);
                          se.length < 2 && (se = "0" + se), Se += se;
                        }
                        u.codec = Se;
                        var ge = this._mediaInfo;
                        ge.width = u.codecWidth, ge.height = u.codecHeight, ge.fps = u.frameRate.fps, ge.profile = u.profile, ge.level = u.level, ge.refFrames = Q.ref_frames, ge.chromaFormat = Q.chroma_format_string, ge.sarNum = u.sarRatio.width, ge.sarDen = u.sarRatio.height, ge.videoCodec = Se, ge.hasAudio ? ge.audioCodec != null && (ge.mimeType = 'video/x-flv; codecs="' + ge.videoCodec + "," + ge.audioCodec + '"') : ge.mimeType = 'video/x-flv; codecs="' + ge.videoCodec + '"', ge.isComplete() && this._onMediaInfo(ge);
                      }
                    }
                  }
                  var Le = w.getUint8(N);
                  if (Le !== 0) {
                    for (Le > 1 && R.a.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: PPS Count = " + Le), N++, V = 0; V < Le; V++)
                      X = w.getUint16(N, !E), N += 2, X !== 0 && (N += X);
                    u.avcc = new Uint8Array(e), u.avcc.set(new Uint8Array(t, i, e), 0), R.a.v(this.TAG, "Parsed AVCDecoderConfigurationRecord"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._videoInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("video", u);
                  } else
                    this._onError(c.a.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No PPS");
                } else
                  this._onError(c.a.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No SPS");
              } else
                this._onError(c.a.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1));
            else
              this._onError(c.a.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord");
          }
        }, r.prototype._parseHEVCDecoderConfigurationRecord = function(t, i, e) {
          if (e < 22)
            R.a.w(this.TAG, "Flv: Invalid HEVCDecoderConfigurationRecord, lack of data!");
          else {
            var u = this._videoMetadata, b = this._videoTrack, E = this._littleEndian, w = new DataView(t, i, e);
            if (u) {
              if (u.hvcc !== void 0) {
                var M = new Uint8Array(t, i, e);
                if (s(M, u.hvcc))
                  return;
                R.a.w(this.TAG, "HEVCDecoderConfigurationRecord has been changed, re-generate initialization segment");
              }
            } else
              this._hasVideo === !1 && this._hasVideoFlagOverrided === !1 && (this._hasVideo = !0, this._mediaInfo.hasVideo = !0), (u = this._videoMetadata = {}).type = "video", u.id = b.id, u.timescale = this._timescale, u.duration = this._duration;
            var B = w.getUint8(0), j = 31 & w.getUint8(1);
            if (B === 1 && j !== 0)
              if (this._naluLengthSize = 1 + (3 & w.getUint8(21)), this._naluLengthSize === 3 || this._naluLengthSize === 4) {
                for (var G = w.getUint8(22), N = 0, V = 23; N < G; N++) {
                  var X = 63 & w.getUint8(V + 0), ie = w.getUint16(V + 1, !E);
                  V += 3;
                  for (var Q = 0; Q < ie; Q++) {
                    var fe = w.getUint16(V + 0, !E);
                    if (Q === 0)
                      if (X === 33) {
                        V += 2;
                        var le = new Uint8Array(t, i + V, fe), ae = p.parseSPS(le);
                        u.codecWidth = ae.codec_size.width, u.codecHeight = ae.codec_size.height, u.presentWidth = ae.present_size.width, u.presentHeight = ae.present_size.height, u.profile = ae.profile_string, u.level = ae.level_string, u.bitDepth = ae.bit_depth, u.chromaFormat = ae.chroma_format, u.sarRatio = ae.sar_ratio, u.frameRate = ae.frame_rate, ae.frame_rate.fixed !== !1 && ae.frame_rate.fps_num !== 0 && ae.frame_rate.fps_den !== 0 || (u.frameRate = this._referenceFrameRate);
                        var Se = u.frameRate.fps_den, Te = u.frameRate.fps_num;
                        u.refSampleDuration = u.timescale * (Se / Te), u.codec = ae.codec_mimetype;
                        var se = this._mediaInfo;
                        se.width = u.codecWidth, se.height = u.codecHeight, se.fps = u.frameRate.fps, se.profile = u.profile, se.level = u.level, se.refFrames = ae.ref_frames, se.chromaFormat = ae.chroma_format_string, se.sarNum = u.sarRatio.width, se.sarDen = u.sarRatio.height, se.videoCodec = ae.codec_mimetype, se.hasAudio ? se.audioCodec != null && (se.mimeType = 'video/x-flv; codecs="' + se.videoCodec + "," + se.audioCodec + '"') : se.mimeType = 'video/x-flv; codecs="' + se.videoCodec + '"', se.isComplete() && this._onMediaInfo(se), V += fe;
                      } else
                        V += 2 + fe;
                    else
                      V += 2 + fe;
                  }
                }
                u.hvcc = new Uint8Array(e), u.hvcc.set(new Uint8Array(t, i, e), 0), R.a.v(this.TAG, "Parsed HEVCDecoderConfigurationRecord"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._videoInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("video", u);
              } else
                this._onError(c.a.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1));
            else
              this._onError(c.a.FORMAT_ERROR, "Flv: Invalid HEVCDecoderConfigurationRecord");
          }
        }, r.prototype._parseAVCVideoData = function(t, i, e, u, b, E, w) {
          for (var M = this._littleEndian, B = new DataView(t, i, e), j = [], G = 0, N = 0, V = this._naluLengthSize, X = this._timestampBase + u, ie = E === 1; N < e; ) {
            if (N + 4 >= e) {
              R.a.w(this.TAG, "Malformed Nalu near timestamp " + X + ", offset = " + N + ", dataSize = " + e);
              break;
            }
            var Q = B.getUint32(N, !M);
            if (V === 3 && (Q >>>= 8), Q > e - V)
              return void R.a.w(this.TAG, "Malformed Nalus near timestamp " + X + ", NaluSize > DataSize!");
            var fe = 31 & B.getUint8(N + V);
            fe === 5 && (ie = !0);
            var le = new Uint8Array(t, i + N, V + Q), ae = { type: fe, data: le };
            j.push(ae), G += le.byteLength, N += V + Q;
          }
          if (j.length) {
            var Se = this._videoTrack, Te = { units: j, length: G, isKeyframe: ie, dts: X, cts: w, pts: X + w };
            ie && (Te.fileposition = b), Se.samples.push(Te), Se.length += G;
          }
        }, r.prototype._parseHEVCVideoData = function(t, i, e, u, b, E, w) {
          for (var M = this._littleEndian, B = new DataView(t, i, e), j = [], G = 0, N = 0, V = this._naluLengthSize, X = this._timestampBase + u, ie = E === 1; N < e; ) {
            if (N + 4 >= e) {
              R.a.w(this.TAG, "Malformed Nalu near timestamp " + X + ", offset = " + N + ", dataSize = " + e);
              break;
            }
            var Q = B.getUint32(N, !M);
            if (V === 3 && (Q >>>= 8), Q > e - V)
              return void R.a.w(this.TAG, "Malformed Nalus near timestamp " + X + ", NaluSize > DataSize!");
            var fe = 31 & B.getUint8(N + V);
            fe !== 19 && fe !== 20 || (ie = !0);
            var le = new Uint8Array(t, i + N, V + Q), ae = { type: fe, data: le };
            j.push(ae), G += le.byteLength, N += V + Q;
          }
          if (j.length) {
            var Se = this._videoTrack, Te = { units: j, length: G, isKeyframe: ie, dts: X, cts: w, pts: X + w };
            ie && (Te.fileposition = b), Se.samples.push(Te), Se.length += G;
          }
        }, r;
      }(), x = function() {
        function r() {
        }
        return r.prototype.destroy = function() {
          this.onError = null, this.onMediaInfo = null, this.onMetaDataArrived = null, this.onTrackMetadata = null, this.onDataAvailable = null, this.onTimedID3Metadata = null, this.onSMPTE2038Metadata = null, this.onSCTE35Metadata = null, this.onPESPrivateData = null, this.onPESPrivateDataDescriptor = null;
        }, r;
      }(), O = function() {
        this.program_pmt_pid = {};
      };
      (function(r) {
        r[r.kMPEG1Audio = 3] = "kMPEG1Audio", r[r.kMPEG2Audio = 4] = "kMPEG2Audio", r[r.kPESPrivateData = 6] = "kPESPrivateData", r[r.kADTSAAC = 15] = "kADTSAAC", r[r.kLOASAAC = 17] = "kLOASAAC", r[r.kAC3 = 129] = "kAC3", r[r.kID3 = 21] = "kID3", r[r.kSCTE35 = 134] = "kSCTE35", r[r.kH264 = 27] = "kH264", r[r.kH265 = 36] = "kH265";
      })(h || (h = {}));
      var T, I = function() {
        this.pid_stream_type = {}, this.common_pids = { h264: void 0, h265: void 0, adts_aac: void 0, loas_aac: void 0, opus: void 0, ac3: void 0, mp3: void 0 }, this.pes_private_data_pids = {}, this.timed_id3_pids = {}, this.scte_35_pids = {}, this.smpte2038_pids = {};
      }, F = function() {
      }, W = function() {
      }, K = function() {
        this.slices = [], this.total_length = 0, this.expected_length = 0, this.file_position = 0;
      };
      (function(r) {
        r[r.kUnspecified = 0] = "kUnspecified", r[r.kSliceNonIDR = 1] = "kSliceNonIDR", r[r.kSliceDPA = 2] = "kSliceDPA", r[r.kSliceDPB = 3] = "kSliceDPB", r[r.kSliceDPC = 4] = "kSliceDPC", r[r.kSliceIDR = 5] = "kSliceIDR", r[r.kSliceSEI = 6] = "kSliceSEI", r[r.kSliceSPS = 7] = "kSliceSPS", r[r.kSlicePPS = 8] = "kSlicePPS", r[r.kSliceAUD = 9] = "kSliceAUD", r[r.kEndOfSequence = 10] = "kEndOfSequence", r[r.kEndOfStream = 11] = "kEndOfStream", r[r.kFiller = 12] = "kFiller", r[r.kSPSExt = 13] = "kSPSExt", r[r.kReserved0 = 14] = "kReserved0";
      })(T || (T = {}));
      var P, C, D = function() {
      }, k = function(r) {
        var t = r.data.byteLength;
        this.type = r.type, this.data = new Uint8Array(4 + t), new DataView(this.data.buffer).setUint32(0, t), this.data.set(r.data, 4);
      }, Z = function() {
        function r(t) {
          this.TAG = "H264AnnexBParser", this.current_startcode_offset_ = 0, this.eof_flag_ = !1, this.data_ = t, this.current_startcode_offset_ = this.findNextStartCodeOffset(0), this.eof_flag_ && R.a.e(this.TAG, "Could not find H264 startcode until payload end!");
        }
        return r.prototype.findNextStartCodeOffset = function(t) {
          for (var i = t, e = this.data_; ; ) {
            if (i + 3 >= e.byteLength)
              return this.eof_flag_ = !0, e.byteLength;
            var u = e[i + 0] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3], b = e[i + 0] << 16 | e[i + 1] << 8 | e[i + 2];
            if (u === 1 || b === 1)
              return i;
            i++;
          }
        }, r.prototype.readNextNaluPayload = function() {
          for (var t = this.data_, i = null; i == null && !this.eof_flag_; ) {
            var e = this.current_startcode_offset_, u = 31 & t[e += (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) === 1 ? 4 : 3], b = (128 & t[e]) >>> 7, E = this.findNextStartCodeOffset(e);
            if (this.current_startcode_offset_ = E, !(u >= T.kReserved0) && b === 0) {
              var w = t.subarray(e, E);
              (i = new D()).type = u, i.data = w;
            }
          }
          return i;
        }, r;
      }(), oe = function() {
        function r(t, i, e) {
          var u = 8 + t.byteLength + 1 + 2 + i.byteLength, b = !1;
          t[3] !== 66 && t[3] !== 77 && t[3] !== 88 && (b = !0, u += 4);
          var E = this.data = new Uint8Array(u);
          E[0] = 1, E[1] = t[1], E[2] = t[2], E[3] = t[3], E[4] = 255, E[5] = 225;
          var w = t.byteLength;
          E[6] = w >>> 8, E[7] = 255 & w;
          var M = 8;
          E.set(t, 8), E[M += w] = 1;
          var B = i.byteLength;
          E[M + 1] = B >>> 8, E[M + 2] = 255 & B, E.set(i, M + 3), M += 3 + B, b && (E[M] = 252 | e.chroma_format_idc, E[M + 1] = 248 | e.bit_depth_luma - 8, E[M + 2] = 248 | e.bit_depth_chroma - 8, E[M + 3] = 0, M += 4);
        }
        return r.prototype.getData = function() {
          return this.data;
        }, r;
      }();
      (function(r) {
        r[r.kNull = 0] = "kNull", r[r.kAACMain = 1] = "kAACMain", r[r.kAAC_LC = 2] = "kAAC_LC", r[r.kAAC_SSR = 3] = "kAAC_SSR", r[r.kAAC_LTP = 4] = "kAAC_LTP", r[r.kAAC_SBR = 5] = "kAAC_SBR", r[r.kAAC_Scalable = 6] = "kAAC_Scalable", r[r.kLayer1 = 32] = "kLayer1", r[r.kLayer2 = 33] = "kLayer2", r[r.kLayer3 = 34] = "kLayer3";
      })(P || (P = {})), function(r) {
        r[r.k96000Hz = 0] = "k96000Hz", r[r.k88200Hz = 1] = "k88200Hz", r[r.k64000Hz = 2] = "k64000Hz", r[r.k48000Hz = 3] = "k48000Hz", r[r.k44100Hz = 4] = "k44100Hz", r[r.k32000Hz = 5] = "k32000Hz", r[r.k24000Hz = 6] = "k24000Hz", r[r.k22050Hz = 7] = "k22050Hz", r[r.k16000Hz = 8] = "k16000Hz", r[r.k12000Hz = 9] = "k12000Hz", r[r.k11025Hz = 10] = "k11025Hz", r[r.k8000Hz = 11] = "k8000Hz", r[r.k7350Hz = 12] = "k7350Hz";
      }(C || (C = {}));
      var re, ce, Ie = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], ye = (re = function(r, t) {
        return (re = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, e) {
          i.__proto__ = e;
        } || function(i, e) {
          for (var u in e)
            e.hasOwnProperty(u) && (i[u] = e[u]);
        })(r, t);
      }, function(r, t) {
        function i() {
          this.constructor = r;
        }
        re(r, t), r.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
      }), H = function() {
      }, $ = function(r) {
        function t() {
          return r !== null && r.apply(this, arguments) || this;
        }
        return ye(t, r), t;
      }(H), ne = function() {
        function r(t) {
          this.TAG = "AACADTSParser", this.data_ = t, this.current_syncword_offset_ = this.findNextSyncwordOffset(0), this.eof_flag_ && R.a.e(this.TAG, "Could not found ADTS syncword until payload end");
        }
        return r.prototype.findNextSyncwordOffset = function(t) {
          for (var i = t, e = this.data_; ; ) {
            if (i + 7 >= e.byteLength)
              return this.eof_flag_ = !0, e.byteLength;
            if ((e[i + 0] << 8 | e[i + 1]) >>> 4 === 4095)
              return i;
            i++;
          }
        }, r.prototype.readNextAACFrame = function() {
          for (var t = this.data_, i = null; i == null && !this.eof_flag_; ) {
            var e = this.current_syncword_offset_, u = (8 & t[e + 1]) >>> 3, b = (6 & t[e + 1]) >>> 1, E = 1 & t[e + 1], w = (192 & t[e + 2]) >>> 6, M = (60 & t[e + 2]) >>> 2, B = (1 & t[e + 2]) << 2 | (192 & t[e + 3]) >>> 6, j = (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5;
            if (t[e + 6], e + j > this.data_.byteLength) {
              this.eof_flag_ = !0, this.has_last_incomplete_data = !0;
              break;
            }
            var G = E === 1 ? 7 : 9, N = j - G;
            e += G;
            var V = this.findNextSyncwordOffset(e + N);
            if (this.current_syncword_offset_ = V, (u === 0 || u === 1) && b === 0) {
              var X = t.subarray(e, e + N);
              (i = new H()).audio_object_type = w + 1, i.sampling_freq_index = M, i.sampling_frequency = Ie[M], i.channel_config = B, i.data = X;
            }
          }
          return i;
        }, r.prototype.hasIncompleteData = function() {
          return this.has_last_incomplete_data;
        }, r.prototype.getIncompleteData = function() {
          return this.has_last_incomplete_data ? this.data_.subarray(this.current_syncword_offset_) : null;
        }, r;
      }(), he = function() {
        function r(t) {
          this.TAG = "AACLOASParser", this.data_ = t, this.current_syncword_offset_ = this.findNextSyncwordOffset(0), this.eof_flag_ && R.a.e(this.TAG, "Could not found LOAS syncword until payload end");
        }
        return r.prototype.findNextSyncwordOffset = function(t) {
          for (var i = t, e = this.data_; ; ) {
            if (i + 1 >= e.byteLength)
              return this.eof_flag_ = !0, e.byteLength;
            if ((e[i + 0] << 3 | e[i + 1] >>> 5) === 695)
              return i;
            i++;
          }
        }, r.prototype.getLATMValue = function(t) {
          for (var i = t.readBits(2), e = 0, u = 0; u <= i; u++)
            e <<= 8, e |= t.readByte();
          return e;
        }, r.prototype.readNextAACFrame = function(t) {
          for (var i = this.data_, e = null; e == null && !this.eof_flag_; ) {
            var u = this.current_syncword_offset_, b = (31 & i[u + 1]) << 8 | i[u + 2];
            if (u + 3 + b >= this.data_.byteLength) {
              this.eof_flag_ = !0, this.has_last_incomplete_data = !0;
              break;
            }
            var E = new A(i.subarray(u + 3, u + 3 + b)), w = null;
            if (E.readBool()) {
              if (t == null) {
                R.a.w(this.TAG, "StreamMuxConfig Missing"), this.current_syncword_offset_ = this.findNextSyncwordOffset(u + 3 + b), E.destroy();
                continue;
              }
              w = t;
            } else {
              var M = E.readBool();
              if (M && E.readBool()) {
                R.a.e(this.TAG, "audioMuxVersionA is Not Supported"), E.destroy();
                break;
              }
              if (M && this.getLATMValue(E), !E.readBool()) {
                R.a.e(this.TAG, "allStreamsSameTimeFraming zero is Not Supported"), E.destroy();
                break;
              }
              if (E.readBits(6) !== 0) {
                R.a.e(this.TAG, "more than 2 numSubFrames Not Supported"), E.destroy();
                break;
              }
              if (E.readBits(4) !== 0) {
                R.a.e(this.TAG, "more than 2 numProgram Not Supported"), E.destroy();
                break;
              }
              if (E.readBits(3) !== 0) {
                R.a.e(this.TAG, "more than 2 numLayer Not Supported"), E.destroy();
                break;
              }
              var B = M ? this.getLATMValue(E) : 0, j = E.readBits(5);
              B -= 5;
              var G = E.readBits(4);
              B -= 4;
              var N = E.readBits(4);
              B -= 4, E.readBits(3), (B -= 3) > 0 && E.readBits(B);
              var V = E.readBits(3);
              if (V !== 0) {
                R.a.e(this.TAG, "frameLengthType = " + V + ". Only frameLengthType = 0 Supported"), E.destroy();
                break;
              }
              E.readByte();
              var X = E.readBool();
              if (X)
                if (M)
                  this.getLATMValue(E);
                else {
                  for (var ie = 0; ; ) {
                    ie <<= 8;
                    var Q = E.readBool();
                    if (ie += E.readByte(), !Q)
                      break;
                  }
                  console.log(ie);
                }
              E.readBool() && E.readByte(), (w = new $()).audio_object_type = j, w.sampling_freq_index = G, w.sampling_frequency = Ie[w.sampling_freq_index], w.channel_config = N, w.other_data_present = X;
            }
            for (var fe = 0; ; ) {
              var le = E.readByte();
              if (fe += le, le !== 255)
                break;
            }
            for (var ae = new Uint8Array(fe), Se = 0; Se < fe; Se++)
              ae[Se] = E.readByte();
            (e = new $()).audio_object_type = w.audio_object_type, e.sampling_freq_index = w.sampling_freq_index, e.sampling_frequency = Ie[w.sampling_freq_index], e.channel_config = w.channel_config, e.other_data_present = w.other_data_present, e.data = ae, this.current_syncword_offset_ = this.findNextSyncwordOffset(u + 3 + b);
          }
          return e;
        }, r.prototype.hasIncompleteData = function() {
          return this.has_last_incomplete_data;
        }, r.prototype.getIncompleteData = function() {
          return this.has_last_incomplete_data ? this.data_.subarray(this.current_syncword_offset_) : null;
        }, r;
      }(), pe = function(r) {
        var t = null, i = r.audio_object_type, e = r.audio_object_type, u = r.sampling_freq_index, b = r.channel_config, E = 0, w = navigator.userAgent.toLowerCase();
        w.indexOf("firefox") !== -1 ? u >= 6 ? (e = 5, t = new Array(4), E = u - 3) : (e = 2, t = new Array(2), E = u) : w.indexOf("android") !== -1 ? (e = 2, t = new Array(2), E = u) : (e = 5, E = u, t = new Array(4), u >= 6 ? E = u - 3 : b === 1 && (e = 2, t = new Array(2), E = u)), t[0] = e << 3, t[0] |= (15 & u) >>> 1, t[1] = (15 & u) << 7, t[1] |= (15 & b) << 3, e === 5 && (t[1] |= (15 & E) >>> 1, t[2] = (1 & E) << 7, t[2] |= 8, t[3] = 0), this.config = t, this.sampling_rate = Ie[u], this.channel_count = b, this.codec_mimetype = "mp4a.40." + e, this.original_codec_mimetype = "mp4a.40." + i;
      }, _e = function() {
      }, ue = function() {
      };
      (function(r) {
        r[r.kSpliceNull = 0] = "kSpliceNull", r[r.kSpliceSchedule = 4] = "kSpliceSchedule", r[r.kSpliceInsert = 5] = "kSpliceInsert", r[r.kTimeSignal = 6] = "kTimeSignal", r[r.kBandwidthReservation = 7] = "kBandwidthReservation", r[r.kPrivateCommand = 255] = "kPrivateCommand";
      })(ce || (ce = {}));
      var Re, Pe = function(r) {
        var t = r.readBool();
        return t ? (r.readBits(6), { time_specified_flag: t, pts_time: 4 * r.readBits(31) + r.readBits(2) }) : (r.readBits(7), { time_specified_flag: t });
      }, Me = function(r) {
        var t = r.readBool();
        return r.readBits(6), { auto_return: t, duration: 4 * r.readBits(31) + r.readBits(2) };
      }, Ke = function(r, t) {
        var i = t.readBits(8);
        return r ? { component_tag: i } : { component_tag: i, splice_time: Pe(t) };
      }, We = function(r) {
        return { component_tag: r.readBits(8), utc_splice_time: r.readBits(32) };
      }, Xe = function(r) {
        var t = r.readBits(32), i = r.readBool();
        r.readBits(7);
        var e = { splice_event_id: t, splice_event_cancel_indicator: i };
        if (i)
          return e;
        if (e.out_of_network_indicator = r.readBool(), e.program_splice_flag = r.readBool(), e.duration_flag = r.readBool(), r.readBits(5), e.program_splice_flag)
          e.utc_splice_time = r.readBits(32);
        else {
          e.component_count = r.readBits(8), e.components = [];
          for (var u = 0; u < e.component_count; u++)
            e.components.push(We(r));
        }
        return e.duration_flag && (e.break_duration = Me(r)), e.unique_program_id = r.readBits(16), e.avail_num = r.readBits(8), e.avails_expected = r.readBits(8), e;
      }, Ye = function(r, t, i, e) {
        return { descriptor_tag: r, descriptor_length: t, identifier: i, provider_avail_id: e.readBits(32) };
      }, He = function(r, t, i, e) {
        var u = e.readBits(8), b = e.readBits(3);
        e.readBits(5);
        for (var E = "", w = 0; w < b; w++)
          E += String.fromCharCode(e.readBits(8));
        return { descriptor_tag: r, descriptor_length: t, identifier: i, preroll: u, dtmf_count: b, DTMF_char: E };
      }, ze = function(r) {
        var t = r.readBits(8);
        return r.readBits(7), { component_tag: t, pts_offset: 4 * r.readBits(31) + r.readBits(2) };
      }, nt = function(r, t, i, e) {
        var u = e.readBits(32), b = e.readBool();
        e.readBits(7);
        var E = { descriptor_tag: r, descriptor_length: t, identifier: i, segmentation_event_id: u, segmentation_event_cancel_indicator: b };
        if (b)
          return E;
        if (E.program_segmentation_flag = e.readBool(), E.segmentation_duration_flag = e.readBool(), E.delivery_not_restricted_flag = e.readBool(), E.delivery_not_restricted_flag ? e.readBits(5) : (E.web_delivery_allowed_flag = e.readBool(), E.no_regional_blackout_flag = e.readBool(), E.archive_allowed_flag = e.readBool(), E.device_restrictions = e.readBits(2)), !E.program_segmentation_flag) {
          E.component_count = e.readBits(8), E.components = [];
          for (var w = 0; w < E.component_count; w++)
            E.components.push(ze(e));
        }
        E.segmentation_duration_flag && (E.segmentation_duration = e.readBits(40)), E.segmentation_upid_type = e.readBits(8), E.segmentation_upid_length = e.readBits(8);
        var M = new Uint8Array(E.segmentation_upid_length);
        for (w = 0; w < E.segmentation_upid_length; w++)
          M[w] = e.readBits(8);
        return E.segmentation_upid = M.buffer, E.segmentation_type_id = e.readBits(8), E.segment_num = e.readBits(8), E.segments_expected = e.readBits(8), E.segmentation_type_id !== 52 && E.segmentation_type_id !== 54 && E.segmentation_type_id !== 56 && E.segmentation_type_id !== 58 || (E.sub_segment_num = e.readBits(8), E.sub_segments_expected = e.readBits(8)), E;
      }, st = function(r, t, i, e) {
        return { descriptor_tag: r, descriptor_length: t, identifier: i, TAI_seconds: e.readBits(48), TAI_ns: e.readBits(32), UTC_offset: e.readBits(16) };
      }, xt = function(r) {
        return { component_tag: r.readBits(8), ISO_code: String.fromCharCode(r.readBits(8), r.readBits(8), r.readBits(8)), Bit_Stream_Mode: r.readBits(3), Num_Channels: r.readBits(4), Full_Srvc_Audio: r.readBool() };
      }, Rt = function(r, t, i, e) {
        for (var u = e.readBits(4), b = [], E = 0; E < u; E++)
          b.push(xt(e));
        return { descriptor_tag: r, descriptor_length: t, identifier: i, audio_count: u, components: b };
      }, Lt = function(r) {
        var t = new A(r), i = t.readBits(8), e = t.readBool(), u = t.readBool();
        t.readBits(2);
        var b = t.readBits(12), E = t.readBits(8), w = t.readBool(), M = t.readBits(6), B = 4 * t.readBits(31) + t.readBits(2), j = t.readBits(8), G = t.readBits(12), N = t.readBits(12), V = t.readBits(8), X = null;
        V === ce.kSpliceNull ? X = {} : V === ce.kSpliceSchedule ? X = function(Ee) {
          for (var Oe = Ee.readBits(8), ke = [], Ae = 0; Ae < Oe; Ae++)
            ke.push(Xe(Ee));
          return { splice_count: Oe, events: ke };
        }(t) : V === ce.kSpliceInsert ? X = function(Ee) {
          var Oe = Ee.readBits(32), ke = Ee.readBool();
          Ee.readBits(7);
          var Ae = { splice_event_id: Oe, splice_event_cancel_indicator: ke };
          if (ke)
            return Ae;
          if (Ae.out_of_network_indicator = Ee.readBool(), Ae.program_splice_flag = Ee.readBool(), Ae.duration_flag = Ee.readBool(), Ae.splice_immediate_flag = Ee.readBool(), Ee.readBits(4), Ae.program_splice_flag && !Ae.splice_immediate_flag && (Ae.splice_time = Pe(Ee)), !Ae.program_splice_flag) {
            Ae.component_count = Ee.readBits(8), Ae.components = [];
            for (var Ce = 0; Ce < Ae.component_count; Ce++)
              Ae.components.push(Ke(Ae.splice_immediate_flag, Ee));
          }
          return Ae.duration_flag && (Ae.break_duration = Me(Ee)), Ae.unique_program_id = Ee.readBits(16), Ae.avail_num = Ee.readBits(8), Ae.avails_expected = Ee.readBits(8), Ae;
        }(t) : V === ce.kTimeSignal ? X = function(Ee) {
          return { splice_time: Pe(Ee) };
        }(t) : V === ce.kBandwidthReservation ? X = {} : V === ce.kPrivateCommand ? X = function(Ee, Oe) {
          for (var ke = String.fromCharCode(Oe.readBits(8), Oe.readBits(8), Oe.readBits(8), Oe.readBits(8)), Ae = new Uint8Array(Ee - 4), Ce = 0; Ce < Ee - 4; Ce++)
            Ae[Ce] = Oe.readBits(8);
          return { identifier: ke, private_data: Ae.buffer };
        }(N, t) : t.readBits(8 * N);
        for (var ie = [], Q = t.readBits(16), fe = 0; fe < Q; ) {
          var le = t.readBits(8), ae = t.readBits(8), Se = String.fromCharCode(t.readBits(8), t.readBits(8), t.readBits(8), t.readBits(8));
          le === 0 ? ie.push(Ye(le, ae, Se, t)) : le === 1 ? ie.push(He(le, ae, Se, t)) : le === 2 ? ie.push(nt(le, ae, Se, t)) : le === 3 ? ie.push(st(le, ae, Se, t)) : le === 4 ? ie.push(Rt(le, ae, Se, t)) : t.readBits(8 * (ae - 4)), fe += 2 + ae;
        }
        var Te = { table_id: i, section_syntax_indicator: e, private_indicator: u, section_length: b, protocol_version: E, encrypted_packet: w, encryption_algorithm: M, pts_adjustment: B, cw_index: j, tier: G, splice_command_length: N, splice_command_type: V, splice_command: X, descriptor_loop_length: Q, splice_descriptors: ie, E_CRC32: w ? t.readBits(32) : void 0, CRC32: t.readBits(32) };
        if (V === ce.kSpliceInsert) {
          var se = X;
          if (se.splice_event_cancel_indicator)
            return { splice_command_type: V, detail: Te, data: r };
          if (se.program_splice_flag && !se.splice_immediate_flag) {
            var ge = se.duration_flag ? se.break_duration.auto_return : void 0, Le = se.duration_flag ? se.break_duration.duration / 90 : void 0;
            return se.splice_time.time_specified_flag ? { splice_command_type: V, pts: (B + se.splice_time.pts_time) % Math.pow(2, 33), auto_return: ge, duraiton: Le, detail: Te, data: r } : { splice_command_type: V, auto_return: ge, duraiton: Le, detail: Te, data: r };
          }
          return { splice_command_type: V, auto_return: ge = se.duration_flag ? se.break_duration.auto_return : void 0, duraiton: Le = se.duration_flag ? se.break_duration.duration / 90 : void 0, detail: Te, data: r };
        }
        if (V === ce.kTimeSignal) {
          var ve = X;
          return ve.splice_time.time_specified_flag ? { splice_command_type: V, pts: (B + ve.splice_time.pts_time) % Math.pow(2, 33), detail: Te, data: r } : { splice_command_type: V, detail: Te, data: r };
        }
        return { splice_command_type: V, detail: Te, data: r };
      };
      (function(r) {
        r[r.kSliceIDR_W_RADL = 19] = "kSliceIDR_W_RADL", r[r.kSliceIDR_N_LP = 20] = "kSliceIDR_N_LP", r[r.kSliceCRA_NUT = 21] = "kSliceCRA_NUT", r[r.kSliceVPS = 32] = "kSliceVPS", r[r.kSliceSPS = 33] = "kSliceSPS", r[r.kSlicePPS = 34] = "kSlicePPS", r[r.kSliceAUD = 35] = "kSliceAUD";
      })(Re || (Re = {}));
      var Ge = function() {
      }, Tt = function(r) {
        var t = r.data.byteLength;
        this.type = r.type, this.data = new Uint8Array(4 + t), new DataView(this.data.buffer).setUint32(0, t), this.data.set(r.data, 4);
      }, q = function() {
        function r(t) {
          this.TAG = "H265AnnexBParser", this.current_startcode_offset_ = 0, this.eof_flag_ = !1, this.data_ = t, this.current_startcode_offset_ = this.findNextStartCodeOffset(0), this.eof_flag_ && R.a.e(this.TAG, "Could not find H265 startcode until payload end!");
        }
        return r.prototype.findNextStartCodeOffset = function(t) {
          for (var i = t, e = this.data_; ; ) {
            if (i + 3 >= e.byteLength)
              return this.eof_flag_ = !0, e.byteLength;
            var u = e[i + 0] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3], b = e[i + 0] << 16 | e[i + 1] << 8 | e[i + 2];
            if (u === 1 || b === 1)
              return i;
            i++;
          }
        }, r.prototype.readNextNaluPayload = function() {
          for (var t = this.data_, i = null; i == null && !this.eof_flag_; ) {
            var e = this.current_startcode_offset_, u = t[e += (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) === 1 ? 4 : 3] >> 1 & 63, b = (128 & t[e]) >>> 7, E = this.findNextStartCodeOffset(e);
            if (this.current_startcode_offset_ = E, b === 0) {
              var w = t.subarray(e, E);
              (i = new Ge()).type = u, i.data = w;
            }
          }
          return i;
        }, r;
      }(), ee = function() {
        function r(t, i, e, u) {
          var b = 23 + (5 + t.byteLength) + (5 + i.byteLength) + (5 + e.byteLength), E = this.data = new Uint8Array(b);
          E[0] = 1, E[1] = (3 & u.general_profile_space) << 6 | (u.general_tier_flag ? 1 : 0) << 5 | 31 & u.general_profile_idc, E[2] = u.general_profile_compatibility_flags_1, E[3] = u.general_profile_compatibility_flags_2, E[4] = u.general_profile_compatibility_flags_3, E[5] = u.general_profile_compatibility_flags_4, E[6] = u.general_constraint_indicator_flags_1, E[7] = u.general_constraint_indicator_flags_2, E[8] = u.general_constraint_indicator_flags_3, E[9] = u.general_constraint_indicator_flags_4, E[10] = u.general_constraint_indicator_flags_5, E[11] = u.general_constraint_indicator_flags_6, E[12] = u.general_level_idc, E[13] = 240 | (3840 & u.min_spatial_segmentation_idc) >> 8, E[14] = 255 & u.min_spatial_segmentation_idc, E[15] = 252 | 3 & u.parallelismType, E[16] = 252 | 3 & u.chroma_format_idc, E[17] = 248 | 7 & u.bit_depth_luma_minus8, E[18] = 248 | 7 & u.bit_depth_chroma_minus8, E[19] = 0, E[20] = 0, E[21] = (3 & u.constant_frame_rate) << 6 | (7 & u.num_temporal_layers) << 3 | (u.temporal_id_nested ? 1 : 0) << 2 | 3, E[22] = 3, E[23] = 128 | Re.kSliceVPS, E[24] = 0, E[25] = 1, E[26] = (65280 & t.byteLength) >> 8, E[27] = (255 & t.byteLength) >> 0, E.set(t, 28), E[23 + (5 + t.byteLength) + 0] = 128 | Re.kSliceSPS, E[23 + (5 + t.byteLength) + 1] = 0, E[23 + (5 + t.byteLength) + 2] = 1, E[23 + (5 + t.byteLength) + 3] = (65280 & i.byteLength) >> 8, E[23 + (5 + t.byteLength) + 4] = (255 & i.byteLength) >> 0, E.set(i, 23 + (5 + t.byteLength) + 5), E[23 + (5 + t.byteLength + 5 + i.byteLength) + 0] = 128 | Re.kSlicePPS, E[23 + (5 + t.byteLength + 5 + i.byteLength) + 1] = 0, E[23 + (5 + t.byteLength + 5 + i.byteLength) + 2] = 1, E[23 + (5 + t.byteLength + 5 + i.byteLength) + 3] = (65280 & e.byteLength) >> 8, E[23 + (5 + t.byteLength + 5 + i.byteLength) + 4] = (255 & e.byteLength) >> 0, E.set(e, 23 + (5 + t.byteLength + 5 + i.byteLength) + 5);
        }
        return r.prototype.getData = function() {
          return this.data;
        }, r;
      }(), te = function() {
      }, me = function() {
      }, be = function() {
      }, xe = [[64, 64, 80, 80, 96, 96, 112, 112, 128, 128, 160, 160, 192, 192, 224, 224, 256, 256, 320, 320, 384, 384, 448, 448, 512, 512, 640, 640, 768, 768, 896, 896, 1024, 1024, 1152, 1152, 1280, 1280], [69, 70, 87, 88, 104, 105, 121, 122, 139, 140, 174, 175, 208, 209, 243, 244, 278, 279, 348, 349, 417, 418, 487, 488, 557, 558, 696, 697, 835, 836, 975, 976, 1114, 1115, 1253, 1254, 1393, 1394], [96, 96, 120, 120, 144, 144, 168, 168, 192, 192, 240, 240, 288, 288, 336, 336, 384, 384, 480, 480, 576, 576, 672, 672, 768, 768, 960, 960, 1152, 1152, 1344, 1344, 1536, 1536, 1728, 1728, 1920, 1920]], Ue = function() {
        function r(t) {
          this.TAG = "AC3Parser", this.data_ = t, this.current_syncword_offset_ = this.findNextSyncwordOffset(0), this.eof_flag_ && R.a.e(this.TAG, "Could not found AC3 syncword until payload end");
        }
        return r.prototype.findNextSyncwordOffset = function(t) {
          for (var i = t, e = this.data_; ; ) {
            if (i + 7 >= e.byteLength)
              return this.eof_flag_ = !0, e.byteLength;
            if ((e[i + 0] << 8 | e[i + 1] << 0) === 2935)
              return i;
            i++;
          }
        }, r.prototype.readNextAC3Frame = function() {
          for (var t = this.data_, i = null; i == null && !this.eof_flag_; ) {
            var e = this.current_syncword_offset_, u = t[e + 4] >> 6, b = [48e3, 44200, 33e3][u], E = 63 & t[e + 4], w = 2 * xe[u][E];
            if (e + w > this.data_.byteLength) {
              this.eof_flag_ = !0, this.has_last_incomplete_data = !0;
              break;
            }
            var M = this.findNextSyncwordOffset(e + w);
            this.current_syncword_offset_ = M;
            var B = t[e + 5] >> 3, j = 7 & t[e + 5], G = t[e + 6] >> 5, N = 0;
            1 & G && G !== 1 && (N += 2), 4 & G && (N += 2), G === 2 && (N += 2);
            var V = (t[e + 6] << 8 | t[e + 7] << 0) >> 12 - N & 1, X = [2, 1, 2, 3, 3, 4, 4, 5][G] + V;
            (i = new be()).sampling_frequency = b, i.channel_count = X, i.channel_mode = G, i.bit_stream_identification = B, i.low_frequency_effects_channel_on = V, i.bit_stream_mode = j, i.frame_size_code = E, i.data = t.subarray(e, e + w);
          }
          return i;
        }, r.prototype.hasIncompleteData = function() {
          return this.has_last_incomplete_data;
        }, r.prototype.getIncompleteData = function() {
          return this.has_last_incomplete_data ? this.data_.subarray(this.current_syncword_offset_) : null;
        }, r;
      }(), et = function(r) {
        var t;
        t = [r.sampling_rate_code << 6 | r.bit_stream_identification << 1 | r.bit_stream_mode >> 2, (3 & r.bit_stream_mode) << 6 | r.channel_mode << 3 | r.low_frequency_effects_channel_on << 2 | r.frame_size_code >> 4, r.frame_size_code << 4 & 224], this.config = t, this.sampling_rate = r.sampling_frequency, this.bit_stream_identification = r.bit_stream_identification, this.bit_stream_mode = r.bit_stream_mode, this.low_frequency_effects_channel_on = r.low_frequency_effects_channel_on, this.channel_count = r.channel_count, this.channel_mode = r.channel_mode, this.codec_mimetype = "ac-3", this.original_codec_mimetype = "ac-3";
      }, ot = /* @__PURE__ */ function() {
        var r = function(t, i) {
          return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, u) {
            e.__proto__ = u;
          } || function(e, u) {
            for (var b in u)
              u.hasOwnProperty(b) && (e[b] = u[b]);
          })(t, i);
        };
        return function(t, i) {
          function e() {
            this.constructor = t;
          }
          r(t, i), t.prototype = i === null ? Object.create(i) : (e.prototype = i.prototype, new e());
        };
      }(), qe = function() {
        return (qe = Object.assign || function(r) {
          for (var t, i = 1, e = arguments.length; i < e; i++)
            for (var u in t = arguments[i])
              Object.prototype.hasOwnProperty.call(t, u) && (r[u] = t[u]);
          return r;
        }).apply(this, arguments);
      }, dt = function(r) {
        function t(i, e) {
          var u = r.call(this) || this;
          return u.TAG = "TSDemuxer", u.first_parse_ = !0, u.media_info_ = new L.a(), u.timescale_ = 90, u.duration_ = 0, u.current_pmt_pid_ = -1, u.program_pmt_map_ = {}, u.pes_slice_queues_ = {}, u.section_slice_queues_ = {}, u.video_metadata_ = { vps: void 0, sps: void 0, pps: void 0, details: void 0 }, u.audio_metadata_ = { codec: void 0, audio_object_type: void 0, sampling_freq_index: void 0, sampling_frequency: void 0, channel_config: void 0 }, u.aac_last_sample_pts_ = void 0, u.aac_last_incomplete_data_ = null, u.has_video_ = !1, u.has_audio_ = !1, u.video_init_segment_dispatched_ = !1, u.audio_init_segment_dispatched_ = !1, u.video_metadata_changed_ = !1, u.audio_metadata_changed_ = !1, u.loas_previous_frame = null, u.video_track_ = { type: "video", id: 1, sequenceNumber: 0, samples: [], length: 0 }, u.audio_track_ = { type: "audio", id: 2, sequenceNumber: 0, samples: [], length: 0 }, u.ts_packet_size_ = i.ts_packet_size, u.sync_offset_ = i.sync_offset, u.config_ = e, u;
        }
        return ot(t, r), t.prototype.destroy = function() {
          this.media_info_ = null, this.pes_slice_queues_ = null, this.section_slice_queues_ = null, this.video_metadata_ = null, this.audio_metadata_ = null, this.aac_last_incomplete_data_ = null, this.video_track_ = null, this.audio_track_ = null, r.prototype.destroy.call(this);
        }, t.probe = function(i) {
          var e = new Uint8Array(i), u = -1, b = 188;
          if (e.byteLength <= 3 * b)
            return { needMoreData: !0 };
          for (; u === -1; ) {
            for (var E = Math.min(1e3, e.byteLength - 3 * b), w = 0; w < E; ) {
              if (e[w] === 71 && e[w + b] === 71 && e[w + 2 * b] === 71) {
                u = w;
                break;
              }
              w++;
            }
            if (u === -1)
              if (b === 188)
                b = 192;
              else {
                if (b !== 192)
                  break;
                b = 204;
              }
          }
          return u === -1 ? { match: !1 } : (b === 192 && u >= 4 ? (R.a.v("TSDemuxer", "ts_packet_size = 192, m2ts mode"), u -= 4) : b === 204 && R.a.v("TSDemuxer", "ts_packet_size = 204, RS encoded MPEG2-TS stream"), { match: !0, consumed: 0, ts_packet_size: b, sync_offset: u });
        }, t.prototype.bindDataSource = function(i) {
          return i.onDataArrival = this.parseChunks.bind(this), this;
        }, t.prototype.resetMediaInfo = function() {
          this.media_info_ = new L.a();
        }, t.prototype.parseChunks = function(i, e) {
          if (!(this.onError && this.onMediaInfo && this.onTrackMetadata && this.onDataAvailable))
            throw new m.a("onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");
          var u = 0;
          for (this.first_parse_ && (this.first_parse_ = !1, u = this.sync_offset_); u + this.ts_packet_size_ <= i.byteLength; ) {
            var b = e + u;
            this.ts_packet_size_ === 192 && (u += 4);
            var E = new Uint8Array(i, u, 188), w = E[0];
            if (w !== 71) {
              R.a.e(this.TAG, "sync_byte = " + w + ", not 0x47");
              break;
            }
            var M = (64 & E[1]) >>> 6, B = (E[1], (31 & E[1]) << 8 | E[2]), j = (48 & E[3]) >>> 4, G = 15 & E[3], N = {}, V = 4;
            if (j == 2 || j == 3) {
              var X = E[4];
              if (5 + X === 188) {
                u += 188, this.ts_packet_size_ === 204 && (u += 16);
                continue;
              }
              X > 0 && (N = this.parseAdaptationField(i, u + 4, 1 + X)), V = 5 + X;
            }
            if (j == 1 || j == 3) {
              if (B === 0 || B === this.current_pmt_pid_ || this.pmt_ != null && this.pmt_.pid_stream_type[B] === h.kSCTE35) {
                var ie = 188 - V;
                this.handleSectionSlice(i, u + V, ie, { pid: B, file_position: b, payload_unit_start_indicator: M, continuity_conunter: G, random_access_indicator: N.random_access_indicator });
              } else if (this.pmt_ != null && this.pmt_.pid_stream_type[B] != null) {
                ie = 188 - V;
                var Q = this.pmt_.pid_stream_type[B];
                B !== this.pmt_.common_pids.h264 && B !== this.pmt_.common_pids.h265 && B !== this.pmt_.common_pids.adts_aac && B !== this.pmt_.common_pids.loas_aac && B !== this.pmt_.common_pids.ac3 && B !== this.pmt_.common_pids.opus && B !== this.pmt_.common_pids.mp3 && this.pmt_.pes_private_data_pids[B] !== !0 && this.pmt_.timed_id3_pids[B] !== !0 || this.handlePESSlice(i, u + V, ie, { pid: B, stream_type: Q, file_position: b, payload_unit_start_indicator: M, continuity_conunter: G, random_access_indicator: N.random_access_indicator });
              }
            }
            u += 188, this.ts_packet_size_ === 204 && (u += 16);
          }
          return this.dispatchAudioVideoMediaSegment(), u;
        }, t.prototype.parseAdaptationField = function(i, e, u) {
          var b = new Uint8Array(i, e, u), E = b[0];
          return E > 0 ? E > 183 ? (R.a.w(this.TAG, "Illegal adaptation_field_length: " + E), {}) : { discontinuity_indicator: (128 & b[1]) >>> 7, random_access_indicator: (64 & b[1]) >>> 6, elementary_stream_priority_indicator: (32 & b[1]) >>> 5 } : {};
        }, t.prototype.handleSectionSlice = function(i, e, u, b) {
          var E = new Uint8Array(i, e, u), w = this.section_slice_queues_[b.pid];
          if (b.payload_unit_start_indicator) {
            var M = E[0];
            if (w != null && w.total_length !== 0) {
              var B = new Uint8Array(i, e + 1, Math.min(u, M));
              w.slices.push(B), w.total_length += B.byteLength, w.total_length === w.expected_length ? this.emitSectionSlices(w, b) : this.clearSlices(w, b);
            }
            for (var j = 1 + M; j < E.byteLength && E[j + 0] !== 255; ) {
              var G = (15 & E[j + 1]) << 8 | E[j + 2];
              this.section_slice_queues_[b.pid] = new K(), (w = this.section_slice_queues_[b.pid]).expected_length = G + 3, w.file_position = b.file_position, w.random_access_indicator = b.random_access_indicator, B = new Uint8Array(i, e + j, Math.min(u - j, w.expected_length - w.total_length)), w.slices.push(B), w.total_length += B.byteLength, w.total_length === w.expected_length ? this.emitSectionSlices(w, b) : w.total_length >= w.expected_length && this.clearSlices(w, b), j += B.byteLength;
            }
          } else
            w != null && w.total_length !== 0 && (B = new Uint8Array(i, e, Math.min(u, w.expected_length - w.total_length)), w.slices.push(B), w.total_length += B.byteLength, w.total_length === w.expected_length ? this.emitSectionSlices(w, b) : w.total_length >= w.expected_length && this.clearSlices(w, b));
        }, t.prototype.handlePESSlice = function(i, e, u, b) {
          var E = new Uint8Array(i, e, u), w = E[0] << 16 | E[1] << 8 | E[2], M = (E[3], E[4] << 8 | E[5]);
          if (b.payload_unit_start_indicator) {
            if (w !== 1)
              return void R.a.e(this.TAG, "handlePESSlice: packet_start_code_prefix should be 1 but with value " + w);
            var B = this.pes_slice_queues_[b.pid];
            B && (B.expected_length === 0 || B.expected_length === B.total_length ? this.emitPESSlices(B, b) : this.clearSlices(B, b)), this.pes_slice_queues_[b.pid] = new K(), this.pes_slice_queues_[b.pid].file_position = b.file_position, this.pes_slice_queues_[b.pid].random_access_indicator = b.random_access_indicator;
          }
          if (this.pes_slice_queues_[b.pid] != null) {
            var j = this.pes_slice_queues_[b.pid];
            j.slices.push(E), b.payload_unit_start_indicator && (j.expected_length = M === 0 ? 0 : M + 6), j.total_length += E.byteLength, j.expected_length > 0 && j.expected_length === j.total_length ? this.emitPESSlices(j, b) : j.expected_length > 0 && j.expected_length < j.total_length && this.clearSlices(j, b);
          }
        }, t.prototype.emitSectionSlices = function(i, e) {
          for (var u = new Uint8Array(i.total_length), b = 0, E = 0; b < i.slices.length; b++) {
            var w = i.slices[b];
            u.set(w, E), E += w.byteLength;
          }
          i.slices = [], i.expected_length = -1, i.total_length = 0;
          var M = new W();
          M.pid = e.pid, M.data = u, M.file_position = i.file_position, M.random_access_indicator = i.random_access_indicator, this.parseSection(M);
        }, t.prototype.emitPESSlices = function(i, e) {
          for (var u = new Uint8Array(i.total_length), b = 0, E = 0; b < i.slices.length; b++) {
            var w = i.slices[b];
            u.set(w, E), E += w.byteLength;
          }
          i.slices = [], i.expected_length = -1, i.total_length = 0;
          var M = new F();
          M.pid = e.pid, M.data = u, M.stream_type = e.stream_type, M.file_position = i.file_position, M.random_access_indicator = i.random_access_indicator, this.parsePES(M);
        }, t.prototype.clearSlices = function(i, e) {
          i.slices = [], i.expected_length = -1, i.total_length = 0;
        }, t.prototype.parseSection = function(i) {
          var e = i.data, u = i.pid;
          u === 0 ? this.parsePAT(e) : u === this.current_pmt_pid_ ? this.parsePMT(e) : this.pmt_ != null && this.pmt_.scte_35_pids[u] && this.parseSCTE35(e);
        }, t.prototype.parsePES = function(i) {
          var e = i.data, u = e[0] << 16 | e[1] << 8 | e[2], b = e[3], E = e[4] << 8 | e[5];
          if (u === 1)
            if (b !== 188 && b !== 190 && b !== 191 && b !== 240 && b !== 241 && b !== 255 && b !== 242 && b !== 248) {
              e[6];
              var w = (192 & e[7]) >>> 6, M = e[8], B = void 0, j = void 0;
              w !== 2 && w !== 3 || (B = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2, j = w === 3 ? 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2 : B);
              var G = 9 + M, N = void 0;
              if (E !== 0) {
                if (E < 3 + M)
                  return void R.a.v(this.TAG, "Malformed PES: PES_packet_length < 3 + PES_header_data_length");
                N = E - 3 - M;
              } else
                N = e.byteLength - G;
              var V = e.subarray(G, G + N);
              switch (i.stream_type) {
                case h.kMPEG1Audio:
                case h.kMPEG2Audio:
                  this.parseMP3Payload(V, B);
                  break;
                case h.kPESPrivateData:
                  this.pmt_.common_pids.opus === i.pid ? this.parseOpusPayload(V, B) : this.pmt_.common_pids.ac3 === i.pid ? this.parseAC3Payload(V, B) : this.pmt_.smpte2038_pids[i.pid] ? this.parseSMPTE2038MetadataPayload(V, B, j, i.pid, b) : this.parsePESPrivateDataPayload(V, B, j, i.pid, b);
                  break;
                case h.kADTSAAC:
                  this.parseADTSAACPayload(V, B);
                  break;
                case h.kLOASAAC:
                  this.parseLOASAACPayload(V, B);
                  break;
                case h.kAC3:
                  this.parseAC3Payload(V, B);
                  break;
                case h.kID3:
                  this.parseTimedID3MetadataPayload(V, B, j, i.pid, b);
                  break;
                case h.kH264:
                  this.parseH264Payload(V, B, j, i.file_position, i.random_access_indicator);
                  break;
                case h.kH265:
                  this.parseH265Payload(V, B, j, i.file_position, i.random_access_indicator);
              }
            } else
              (b === 188 || b === 191 || b === 240 || b === 241 || b === 255 || b === 242 || b === 248) && i.stream_type === h.kPESPrivateData && (G = 6, N = void 0, N = E !== 0 ? E : e.byteLength - G, V = e.subarray(G, G + N), this.parsePESPrivateDataPayload(V, void 0, void 0, i.pid, b));
          else
            R.a.e(this.TAG, "parsePES: packet_start_code_prefix should be 1 but with value " + u);
        }, t.prototype.parsePAT = function(i) {
          var e = i[0];
          if (e === 0) {
            var u = (15 & i[1]) << 8 | i[2], b = (i[3], i[4], (62 & i[5]) >>> 1), E = 1 & i[5], w = i[6], M = (i[7], null);
            if (E === 1 && w === 0)
              (M = new O()).version_number = b;
            else if ((M = this.pat_) == null)
              return;
            for (var B = u - 5 - 4, j = -1, G = -1, N = 8; N < 8 + B; N += 4) {
              var V = i[N] << 8 | i[N + 1], X = (31 & i[N + 2]) << 8 | i[N + 3];
              V === 0 ? M.network_pid = X : (M.program_pmt_pid[V] = X, j === -1 && (j = V), G === -1 && (G = X));
            }
            E === 1 && w === 0 && (this.pat_ == null && R.a.v(this.TAG, "Parsed first PAT: " + JSON.stringify(M)), this.pat_ = M, this.current_program_ = j, this.current_pmt_pid_ = G);
          } else
            R.a.e(this.TAG, "parsePAT: table_id " + e + " is not corresponded to PAT!");
        }, t.prototype.parsePMT = function(i) {
          var e = i[0];
          if (e === 2) {
            var u = (15 & i[1]) << 8 | i[2], b = i[3] << 8 | i[4], E = (62 & i[5]) >>> 1, w = 1 & i[5], M = i[6], B = (i[7], null);
            if (w === 1 && M === 0)
              (B = new I()).program_number = b, B.version_number = E, this.program_pmt_map_[b] = B;
            else if ((B = this.program_pmt_map_[b]) == null)
              return;
            i[8], i[9];
            for (var j = (15 & i[10]) << 8 | i[11], G = 12 + j, N = u - 9 - j - 4, V = G; V < G + N; ) {
              var X = i[V], ie = (31 & i[V + 1]) << 8 | i[V + 2], Q = (15 & i[V + 3]) << 8 | i[V + 4];
              B.pid_stream_type[ie] = X;
              var fe = B.common_pids.h264 || B.common_pids.h265, le = B.common_pids.adts_aac || B.common_pids.loas_aac || B.common_pids.ac3 || B.common_pids.opus || B.common_pids.mp3;
              if (X !== h.kH264 || fe)
                if (X !== h.kH265 || fe)
                  if (X !== h.kADTSAAC || le)
                    if (X !== h.kLOASAAC || le)
                      if (X !== h.kAC3 || le)
                        if (X !== h.kMPEG1Audio && X !== h.kMPEG2Audio || le)
                          if (X === h.kPESPrivateData) {
                            if (B.pes_private_data_pids[ie] = !0, Q > 0) {
                              for (var ae = V + 5; ae < V + 5 + Q; ) {
                                var Se = i[ae + 0], Te = i[ae + 1];
                                if (Se === 5) {
                                  var se = String.fromCharCode.apply(String, Array.from(i.subarray(ae + 2, ae + 2 + Te)));
                                  se === "VANC" ? B.smpte2038_pids[ie] = !0 : se === "Opus" && (B.common_pids.opus = ie);
                                } else if (Se === 127 && ie === B.common_pids.opus) {
                                  var ge = null;
                                  if (i[ae + 2] === 128 && (ge = i[ae + 3]), ge == null) {
                                    R.a.e(this.TAG, "Not Supported Opus channel count.");
                                    continue;
                                  }
                                  var Le = { codec: "opus", channel_count: 15 & ge ? 15 & ge : 2, channel_config_code: ge, sample_rate: 48e3 }, ve = { codec: "opus", meta: Le };
                                  this.audio_init_segment_dispatched_ == 0 ? (this.audio_metadata_ = Le, this.dispatchAudioInitSegment(ve)) : this.detectAudioMetadataChange(ve) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(ve));
                                }
                                ae += 2 + Te;
                              }
                              var Ee = i.subarray(V + 5, V + 5 + Q);
                              this.dispatchPESPrivateDataDescriptor(ie, X, Ee);
                            }
                          } else
                            X === h.kID3 ? B.timed_id3_pids[ie] = !0 : X === h.kSCTE35 && (B.scte_35_pids[ie] = !0);
                        else
                          B.common_pids.mp3 = ie;
                      else
                        B.common_pids.ac3 = ie;
                    else
                      B.common_pids.loas_aac = ie;
                  else
                    B.common_pids.adts_aac = ie;
                else
                  B.common_pids.h265 = ie;
              else
                B.common_pids.h264 = ie;
              V += 5 + Q;
            }
            b === this.current_program_ && (this.pmt_ == null && R.a.v(this.TAG, "Parsed first PMT: " + JSON.stringify(B)), this.pmt_ = B, (B.common_pids.h264 || B.common_pids.h265) && (this.has_video_ = !0), (B.common_pids.adts_aac || B.common_pids.loas_aac || B.common_pids.ac3 || B.common_pids.opus || B.common_pids.mp3) && (this.has_audio_ = !0));
          } else
            R.a.e(this.TAG, "parsePMT: table_id " + e + " is not corresponded to PMT!");
        }, t.prototype.parseSCTE35 = function(i) {
          var e = Lt(i);
          if (e.pts != null) {
            var u = Math.floor(e.pts / this.timescale_);
            e.pts = u;
          } else
            e.nearest_pts = this.aac_last_sample_pts_;
          this.onSCTE35Metadata && this.onSCTE35Metadata(e);
        }, t.prototype.parseH264Payload = function(i, e, u, b, E) {
          for (var w = new Z(i), M = null, B = [], j = 0, G = !1; (M = w.readNextNaluPayload()) != null; ) {
            var N = new k(M);
            if (N.type === T.kSliceSPS) {
              var V = g.parseSPS(M.data);
              this.video_init_segment_dispatched_ ? this.detectVideoMetadataChange(N, V) === !0 && (R.a.v(this.TAG, "H264: Critical h264 metadata has been changed, attempt to re-generate InitSegment"), this.video_metadata_changed_ = !0, this.video_metadata_ = { vps: void 0, sps: N, pps: void 0, details: V }) : (this.video_metadata_.sps = N, this.video_metadata_.details = V);
            } else
              N.type === T.kSlicePPS ? this.video_init_segment_dispatched_ && !this.video_metadata_changed_ || (this.video_metadata_.pps = N, this.video_metadata_.sps && this.video_metadata_.pps && (this.video_metadata_changed_ && this.dispatchVideoMediaSegment(), this.dispatchVideoInitSegment())) : (N.type === T.kSliceIDR || N.type === T.kSliceNonIDR && E === 1) && (G = !0);
            this.video_init_segment_dispatched_ && (B.push(N), j += N.data.byteLength);
          }
          var X = Math.floor(e / this.timescale_), ie = Math.floor(u / this.timescale_);
          if (B.length) {
            var Q = this.video_track_, fe = { units: B, length: j, isKeyframe: G, dts: ie, pts: X, cts: X - ie, file_position: b };
            Q.samples.push(fe), Q.length += j;
          }
        }, t.prototype.parseH265Payload = function(i, e, u, b, E) {
          for (var w = new q(i), M = null, B = [], j = 0, G = !1; (M = w.readNextNaluPayload()) != null; ) {
            var N = new Tt(M);
            if (N.type === Re.kSliceVPS) {
              if (!this.video_init_segment_dispatched_) {
                var V = p.parseVPS(M.data);
                this.video_metadata_.vps = N, this.video_metadata_.details = qe(qe({}, this.video_metadata_.details), V);
              }
            } else
              N.type === Re.kSliceSPS ? (V = p.parseSPS(M.data), this.video_init_segment_dispatched_ ? this.detectVideoMetadataChange(N, V) === !0 && (R.a.v(this.TAG, "H265: Critical h265 metadata has been changed, attempt to re-generate InitSegment"), this.video_metadata_changed_ = !0, this.video_metadata_ = { vps: void 0, sps: N, pps: void 0, details: V }) : (this.video_metadata_.sps = N, this.video_metadata_.details = qe(qe({}, this.video_metadata_.details), V))) : N.type === Re.kSlicePPS ? (!this.video_init_segment_dispatched_ || this.video_metadata_changed_) && (V = p.parsePPS(M.data), this.video_metadata_.pps = N, this.video_metadata_.details = qe(qe({}, this.video_metadata_.details), V), this.video_metadata_.vps && this.video_metadata_.sps && this.video_metadata_.pps && (this.video_metadata_changed_ && this.dispatchVideoMediaSegment(), this.dispatchVideoInitSegment())) : N.type !== Re.kSliceIDR_W_RADL && N.type !== Re.kSliceIDR_N_LP && N.type !== Re.kSliceCRA_NUT || (G = !0);
            this.video_init_segment_dispatched_ && (B.push(N), j += N.data.byteLength);
          }
          var X = Math.floor(e / this.timescale_), ie = Math.floor(u / this.timescale_);
          if (B.length) {
            var Q = this.video_track_, fe = { units: B, length: j, isKeyframe: G, dts: ie, pts: X, cts: X - ie, file_position: b };
            Q.samples.push(fe), Q.length += j;
          }
        }, t.prototype.detectVideoMetadataChange = function(i, e) {
          if (e.codec_mimetype !== this.video_metadata_.details.codec_mimetype)
            return R.a.v(this.TAG, "Video: Codec mimeType changed from " + this.video_metadata_.details.codec_mimetype + " to " + e.codec_mimetype), !0;
          if (e.codec_size.width !== this.video_metadata_.details.codec_size.width || e.codec_size.height !== this.video_metadata_.details.codec_size.height) {
            var u = this.video_metadata_.details.codec_size, b = e.codec_size;
            return R.a.v(this.TAG, "Video: Coded Resolution changed from " + u.width + "x" + u.height + " to " + b.width + "x" + b.height), !0;
          }
          return e.present_size.width !== this.video_metadata_.details.present_size.width && (R.a.v(this.TAG, "Video: Present resolution width changed from " + this.video_metadata_.details.present_size.width + " to " + e.present_size.width), !0);
        }, t.prototype.isInitSegmentDispatched = function() {
          return this.has_video_ && this.has_audio_ ? this.video_init_segment_dispatched_ && this.audio_init_segment_dispatched_ : this.has_video_ && !this.has_audio_ ? this.video_init_segment_dispatched_ : !(this.has_video_ || !this.has_audio_) && this.audio_init_segment_dispatched_;
        }, t.prototype.dispatchVideoInitSegment = function() {
          var i = this.video_metadata_.details, e = { type: "video" };
          e.id = this.video_track_.id, e.timescale = 1e3, e.duration = this.duration_, e.codecWidth = i.codec_size.width, e.codecHeight = i.codec_size.height, e.presentWidth = i.present_size.width, e.presentHeight = i.present_size.height, e.profile = i.profile_string, e.level = i.level_string, e.bitDepth = i.bit_depth, e.chromaFormat = i.chroma_format, e.sarRatio = i.sar_ratio, e.frameRate = i.frame_rate;
          var u = e.frameRate.fps_den, b = e.frameRate.fps_num;
          if (e.refSampleDuration = u / b * 1e3, e.codec = i.codec_mimetype, this.video_metadata_.vps) {
            var E = this.video_metadata_.vps.data.subarray(4), w = this.video_metadata_.sps.data.subarray(4), M = this.video_metadata_.pps.data.subarray(4), B = new ee(E, w, M, i);
            e.hvcc = B.getData(), this.video_init_segment_dispatched_ == 0 && R.a.v(this.TAG, "Generated first HEVCDecoderConfigurationRecord for mimeType: " + e.codec);
          } else {
            w = this.video_metadata_.sps.data.subarray(4), M = this.video_metadata_.pps.data.subarray(4);
            var j = new oe(w, M, i);
            e.avcc = j.getData(), this.video_init_segment_dispatched_ == 0 && R.a.v(this.TAG, "Generated first AVCDecoderConfigurationRecord for mimeType: " + e.codec);
          }
          this.onTrackMetadata("video", e), this.video_init_segment_dispatched_ = !0, this.video_metadata_changed_ = !1;
          var G = this.media_info_;
          G.hasVideo = !0, G.width = e.codecWidth, G.height = e.codecHeight, G.fps = e.frameRate.fps, G.profile = e.profile, G.level = e.level, G.refFrames = i.ref_frames, G.chromaFormat = i.chroma_format_string, G.sarNum = e.sarRatio.width, G.sarDen = e.sarRatio.height, G.videoCodec = e.codec, G.hasAudio && G.audioCodec ? G.mimeType = 'video/mp2t; codecs="' + G.videoCodec + "," + G.audioCodec + '"' : G.mimeType = 'video/mp2t; codecs="' + G.videoCodec + '"', G.isComplete() && this.onMediaInfo(G);
        }, t.prototype.dispatchVideoMediaSegment = function() {
          this.isInitSegmentDispatched() && this.video_track_.length && this.onDataAvailable(null, this.video_track_);
        }, t.prototype.dispatchAudioMediaSegment = function() {
          this.isInitSegmentDispatched() && this.audio_track_.length && this.onDataAvailable(this.audio_track_, null);
        }, t.prototype.dispatchAudioVideoMediaSegment = function() {
          this.isInitSegmentDispatched() && (this.audio_track_.length || this.video_track_.length) && this.onDataAvailable(this.audio_track_, this.video_track_);
        }, t.prototype.parseADTSAACPayload = function(i, e) {
          if (!this.has_video_ || this.video_init_segment_dispatched_) {
            if (this.aac_last_incomplete_data_) {
              var u = new Uint8Array(i.byteLength + this.aac_last_incomplete_data_.byteLength);
              u.set(this.aac_last_incomplete_data_, 0), u.set(i, this.aac_last_incomplete_data_.byteLength), i = u;
            }
            var b, E;
            if (e != null && (E = e / this.timescale_), this.audio_metadata_.codec === "aac") {
              if (e == null && this.aac_last_sample_pts_ != null)
                b = 1024 / this.audio_metadata_.sampling_frequency * 1e3, E = this.aac_last_sample_pts_ + b;
              else if (e == null)
                return void R.a.w(this.TAG, "AAC: Unknown pts");
              if (this.aac_last_incomplete_data_ && this.aac_last_sample_pts_) {
                b = 1024 / this.audio_metadata_.sampling_frequency * 1e3;
                var w = this.aac_last_sample_pts_ + b;
                Math.abs(w - E) > 1 && (R.a.w(this.TAG, "AAC: Detected pts overlapped, expected: " + w + "ms, PES pts: " + E + "ms"), E = w);
              }
            }
            for (var M, B = new ne(i), j = null, G = E; (j = B.readNextAACFrame()) != null; ) {
              b = 1024 / j.sampling_frequency * 1e3;
              var N = { codec: "aac", data: j };
              this.audio_init_segment_dispatched_ == 0 ? (this.audio_metadata_ = { codec: "aac", audio_object_type: j.audio_object_type, sampling_freq_index: j.sampling_freq_index, sampling_frequency: j.sampling_frequency, channel_config: j.channel_config }, this.dispatchAudioInitSegment(N)) : this.detectAudioMetadataChange(N) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(N)), M = G;
              var V = Math.floor(G), X = { unit: j.data, length: j.data.byteLength, pts: V, dts: V };
              this.audio_track_.samples.push(X), this.audio_track_.length += j.data.byteLength, G += b;
            }
            B.hasIncompleteData() && (this.aac_last_incomplete_data_ = B.getIncompleteData()), M && (this.aac_last_sample_pts_ = M);
          }
        }, t.prototype.parseLOASAACPayload = function(i, e) {
          var u;
          if (!this.has_video_ || this.video_init_segment_dispatched_) {
            if (this.aac_last_incomplete_data_) {
              var b = new Uint8Array(i.byteLength + this.aac_last_incomplete_data_.byteLength);
              b.set(this.aac_last_incomplete_data_, 0), b.set(i, this.aac_last_incomplete_data_.byteLength), i = b;
            }
            var E, w;
            if (e != null && (w = e / this.timescale_), this.audio_metadata_.codec === "aac") {
              if (e == null && this.aac_last_sample_pts_ != null)
                E = 1024 / this.audio_metadata_.sampling_frequency * 1e3, w = this.aac_last_sample_pts_ + E;
              else if (e == null)
                return void R.a.w(this.TAG, "AAC: Unknown pts");
              if (this.aac_last_incomplete_data_ && this.aac_last_sample_pts_) {
                E = 1024 / this.audio_metadata_.sampling_frequency * 1e3;
                var M = this.aac_last_sample_pts_ + E;
                Math.abs(M - w) > 1 && (R.a.w(this.TAG, "AAC: Detected pts overlapped, expected: " + M + "ms, PES pts: " + w + "ms"), w = M);
              }
            }
            for (var B, j = new he(i), G = null, N = w; (G = j.readNextAACFrame((u = this.loas_previous_frame) !== null && u !== void 0 ? u : void 0)) != null; ) {
              this.loas_previous_frame = G, E = 1024 / G.sampling_frequency * 1e3;
              var V = { codec: "aac", data: G };
              this.audio_init_segment_dispatched_ == 0 ? (this.audio_metadata_ = { codec: "aac", audio_object_type: G.audio_object_type, sampling_freq_index: G.sampling_freq_index, sampling_frequency: G.sampling_frequency, channel_config: G.channel_config }, this.dispatchAudioInitSegment(V)) : this.detectAudioMetadataChange(V) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(V)), B = N;
              var X = Math.floor(N), ie = { unit: G.data, length: G.data.byteLength, pts: X, dts: X };
              this.audio_track_.samples.push(ie), this.audio_track_.length += G.data.byteLength, N += E;
            }
            j.hasIncompleteData() && (this.aac_last_incomplete_data_ = j.getIncompleteData()), B && (this.aac_last_sample_pts_ = B);
          }
        }, t.prototype.parseAC3Payload = function(i, e) {
          if (!this.has_video_ || this.video_init_segment_dispatched_) {
            var u, b;
            if (e != null && (b = e / this.timescale_), this.audio_metadata_.codec === "ac-3") {
              if (e == null && this.aac_last_sample_pts_ != null)
                u = 1536 / this.audio_metadata_.sampling_frequency * 1e3, b = this.aac_last_sample_pts_ + u;
              else if (e == null)
                return void R.a.w(this.TAG, "Opus: Unknown pts");
            }
            for (var E, w = new Ue(i), M = null, B = b; (M = w.readNextAC3Frame()) != null; ) {
              u = 1536 / M.sampling_frequency * 1e3;
              var j = { codec: "ac-3", data: M };
              this.audio_init_segment_dispatched_ == 0 ? (this.audio_metadata_ = { codec: "ac-3", sampling_frequency: M.sampling_frequency, bit_stream_identification: M.bit_stream_identification, bit_stream_mode: M.bit_stream_mode, low_frequency_effects_channel_on: M.low_frequency_effects_channel_on, channel_mode: M.channel_mode }, console.log(JSON.stringify(this.audio_metadata_)), this.dispatchAudioInitSegment(j)) : this.detectAudioMetadataChange(j) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(j)), E = B;
              var G = Math.floor(B), N = { unit: M.data, length: M.data.byteLength, pts: G, dts: G };
              this.audio_track_.samples.push(N), this.audio_track_.length += M.data.byteLength, B += u;
            }
            E && (this.aac_last_sample_pts_ = E);
          }
        }, t.prototype.parseOpusPayload = function(i, e) {
          if (!this.has_video_ || this.video_init_segment_dispatched_) {
            var u, b;
            if (e != null && (b = e / this.timescale_), this.audio_metadata_.codec === "opus") {
              if (e == null && this.aac_last_sample_pts_ != null)
                u = 20, b = this.aac_last_sample_pts_ + u;
              else if (e == null)
                return void R.a.w(this.TAG, "Opus: Unknown pts");
            }
            for (var E, w = b, M = 0; M < i.length; ) {
              u = 20;
              for (var B = (16 & i[M + 1]) != 0, j = (8 & i[M + 1]) != 0, G = M + 2, N = 0; i[G] === 255; )
                N += 255, G += 1;
              N += i[G], G += 1, G += B ? 2 : 0, G += j ? 2 : 0, E = w;
              var V = Math.floor(w), X = i.slice(G, G + N), ie = { unit: X, length: X.byteLength, pts: V, dts: V };
              this.audio_track_.samples.push(ie), this.audio_track_.length += X.byteLength, w += u, M = G + N;
            }
            E && (this.aac_last_sample_pts_ = E);
          }
        }, t.prototype.parseMP3Payload = function(i, e) {
          if (!this.has_video_ || this.video_init_segment_dispatched_) {
            var u = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1], b = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1], E = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1], w = i[1] >>> 3 & 3, M = (6 & i[1]) >> 1, B = (240 & i[2]) >>> 4, j = (12 & i[2]) >>> 2, G = (i[3] >>> 6 & 3) !== 3 ? 2 : 1, N = 0, V = 34;
            switch (w) {
              case 0:
                N = [11025, 12e3, 8e3, 0][j];
                break;
              case 2:
                N = [22050, 24e3, 16e3, 0][j];
                break;
              case 3:
                N = [44100, 48e3, 32e3, 0][j];
            }
            switch (M) {
              case 1:
                V = 34, B < E.length && E[B];
                break;
              case 2:
                V = 33, B < b.length && b[B];
                break;
              case 3:
                V = 32, B < u.length && u[B];
            }
            var X = new me();
            X.object_type = V, X.sample_rate = N, X.channel_count = G, X.data = i;
            var ie = { codec: "mp3", data: X };
            this.audio_init_segment_dispatched_ == 0 ? (this.audio_metadata_ = { codec: "mp3", object_type: V, sample_rate: N, channel_count: G }, this.dispatchAudioInitSegment(ie)) : this.detectAudioMetadataChange(ie) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(ie));
            var Q = { unit: i, length: i.byteLength, pts: e / this.timescale_, dts: e / this.timescale_ };
            this.audio_track_.samples.push(Q), this.audio_track_.length += i.byteLength;
          }
        }, t.prototype.detectAudioMetadataChange = function(i) {
          if (i.codec !== this.audio_metadata_.codec)
            return R.a.v(this.TAG, "Audio: Audio Codecs changed from " + this.audio_metadata_.codec + " to " + i.codec), !0;
          if (i.codec === "aac" && this.audio_metadata_.codec === "aac") {
            if ((e = i.data).audio_object_type !== this.audio_metadata_.audio_object_type)
              return R.a.v(this.TAG, "AAC: AudioObjectType changed from " + this.audio_metadata_.audio_object_type + " to " + e.audio_object_type), !0;
            if (e.sampling_freq_index !== this.audio_metadata_.sampling_freq_index)
              return R.a.v(this.TAG, "AAC: SamplingFrequencyIndex changed from " + this.audio_metadata_.sampling_freq_index + " to " + e.sampling_freq_index), !0;
            if (e.channel_config !== this.audio_metadata_.channel_config)
              return R.a.v(this.TAG, "AAC: Channel configuration changed from " + this.audio_metadata_.channel_config + " to " + e.channel_config), !0;
          } else if (i.codec === "ac-3" && this.audio_metadata_.codec === "ac-3") {
            var e;
            if ((e = i.data).sampling_frequency !== this.audio_metadata_.sampling_frequency)
              return R.a.v(this.TAG, "AC3: Sampling Frequency changed from " + this.audio_metadata_.sampling_frequency + " to " + e.sampling_frequency), !0;
            if (e.bit_stream_identification !== this.audio_metadata_.bit_stream_identification)
              return R.a.v(this.TAG, "AC3: Bit Stream Identification changed from " + this.audio_metadata_.bit_stream_identification + " to " + e.bit_stream_identification), !0;
            if (e.bit_stream_mode !== this.audio_metadata_.bit_stream_mode)
              return R.a.v(this.TAG, "AC3: BitStream Mode changed from " + this.audio_metadata_.bit_stream_mode + " to " + e.bit_stream_mode), !0;
            if (e.channel_mode !== this.audio_metadata_.channel_mode)
              return R.a.v(this.TAG, "AC3: Channel Mode changed from " + this.audio_metadata_.channel_mode + " to " + e.channel_mode), !0;
            if (e.low_frequency_effects_channel_on !== this.audio_metadata_.low_frequency_effects_channel_on)
              return R.a.v(this.TAG, "AC3: Low Frequency Effects Channel On changed from " + this.audio_metadata_.low_frequency_effects_channel_on + " to " + e.low_frequency_effects_channel_on), !0;
          } else if (i.codec === "opus" && this.audio_metadata_.codec === "opus") {
            if ((u = i.meta).sample_rate !== this.audio_metadata_.sample_rate)
              return R.a.v(this.TAG, "Opus: SamplingFrequencyIndex changed from " + this.audio_metadata_.sample_rate + " to " + u.sample_rate), !0;
            if (u.channel_count !== this.audio_metadata_.channel_count)
              return R.a.v(this.TAG, "Opus: Channel count changed from " + this.audio_metadata_.channel_count + " to " + u.channel_count), !0;
          } else if (i.codec === "mp3" && this.audio_metadata_.codec === "mp3") {
            var u;
            if ((u = i.data).object_type !== this.audio_metadata_.object_type)
              return R.a.v(this.TAG, "MP3: AudioObjectType changed from " + this.audio_metadata_.object_type + " to " + u.object_type), !0;
            if (u.sample_rate !== this.audio_metadata_.sample_rate)
              return R.a.v(this.TAG, "MP3: SamplingFrequencyIndex changed from " + this.audio_metadata_.sample_rate + " to " + u.sample_rate), !0;
            if (u.channel_count !== this.audio_metadata_.channel_count)
              return R.a.v(this.TAG, "MP3: Channel count changed from " + this.audio_metadata_.channel_count + " to " + u.channel_count), !0;
          }
          return !1;
        }, t.prototype.dispatchAudioInitSegment = function(i) {
          var e = { type: "audio" };
          if (e.id = this.audio_track_.id, e.timescale = 1e3, e.duration = this.duration_, this.audio_metadata_.codec === "aac") {
            var u = i.codec === "aac" ? i.data : null, b = new pe(u);
            e.audioSampleRate = b.sampling_rate, e.channelCount = b.channel_count, e.codec = b.codec_mimetype, e.originalCodec = b.original_codec_mimetype, e.config = b.config, e.refSampleDuration = 1024 / e.audioSampleRate * e.timescale;
          } else if (this.audio_metadata_.codec === "ac-3") {
            var E = i.codec === "ac-3" ? i.data : null, w = new et(E);
            e.audioSampleRate = w.sampling_rate, e.channelCount = w.channel_count, e.codec = w.codec_mimetype, e.originalCodec = w.original_codec_mimetype, e.config = w.config, e.refSampleDuration = 1536 / e.audioSampleRate * e.timescale;
          } else
            this.audio_metadata_.codec === "opus" ? (e.audioSampleRate = this.audio_metadata_.sample_rate, e.channelCount = this.audio_metadata_.channel_count, e.channelConfigCode = this.audio_metadata_.channel_config_code, e.codec = "opus", e.originalCodec = "opus", e.config = void 0, e.refSampleDuration = 20) : this.audio_metadata_.codec === "mp3" && (e.audioSampleRate = this.audio_metadata_.sample_rate, e.channelCount = this.audio_metadata_.channel_count, e.codec = "mp3", e.originalCodec = "mp3", e.config = void 0);
          this.audio_init_segment_dispatched_ == 0 && R.a.v(this.TAG, "Generated first AudioSpecificConfig for mimeType: " + e.codec), this.onTrackMetadata("audio", e), this.audio_init_segment_dispatched_ = !0, this.video_metadata_changed_ = !1;
          var M = this.media_info_;
          M.hasAudio = !0, M.audioCodec = e.originalCodec, M.audioSampleRate = e.audioSampleRate, M.audioChannelCount = e.channelCount, M.hasVideo && M.videoCodec ? M.mimeType = 'video/mp2t; codecs="' + M.videoCodec + "," + M.audioCodec + '"' : M.mimeType = 'video/mp2t; codecs="' + M.audioCodec + '"', M.isComplete() && this.onMediaInfo(M);
        }, t.prototype.dispatchPESPrivateDataDescriptor = function(i, e, u) {
          var b = new ue();
          b.pid = i, b.stream_type = e, b.descriptor = u, this.onPESPrivateDataDescriptor && this.onPESPrivateDataDescriptor(b);
        }, t.prototype.parsePESPrivateDataPayload = function(i, e, u, b, E) {
          var w = new _e();
          if (w.pid = b, w.stream_id = E, w.len = i.byteLength, w.data = i, e != null) {
            var M = Math.floor(e / this.timescale_);
            w.pts = M;
          } else
            w.nearest_pts = this.aac_last_sample_pts_;
          if (u != null) {
            var B = Math.floor(u / this.timescale_);
            w.dts = B;
          }
          this.onPESPrivateData && this.onPESPrivateData(w);
        }, t.prototype.parseTimedID3MetadataPayload = function(i, e, u, b, E) {
          var w = new _e();
          if (w.pid = b, w.stream_id = E, w.len = i.byteLength, w.data = i, e != null) {
            var M = Math.floor(e / this.timescale_);
            w.pts = M;
          }
          if (u != null) {
            var B = Math.floor(u / this.timescale_);
            w.dts = B;
          }
          this.onTimedID3Metadata && this.onTimedID3Metadata(w);
        }, t.prototype.parseSMPTE2038MetadataPayload = function(i, e, u, b, E) {
          var w = new te();
          if (w.pid = b, w.stream_id = E, w.len = i.byteLength, w.data = i, e != null) {
            var M = Math.floor(e / this.timescale_);
            w.pts = M;
          }
          if (w.nearest_pts = this.aac_last_sample_pts_, u != null) {
            var B = Math.floor(u / this.timescale_);
            w.dts = B;
          }
          w.ancillaries = function(j) {
            for (var G = new A(j), N = 0, V = []; N += 6, G.readBits(6) === 0; ) {
              var X = G.readBool();
              N += 1;
              var ie = G.readBits(11);
              N += 11;
              var Q = G.readBits(12);
              N += 12;
              var fe = 255 & G.readBits(10);
              N += 10;
              var le = 255 & G.readBits(10);
              N += 10;
              var ae = 255 & G.readBits(10);
              N += 10;
              for (var Se = new Uint8Array(ae), Te = 0; Te < ae; Te++) {
                var se = 255 & G.readBits(10);
                N += 10, Se[Te] = se;
              }
              G.readBits(10), N += 10;
              var ge = "User Defined";
              fe === 65 ? le === 7 && (ge = "SCTE-104") : fe === 95 ? le === 220 ? ge = "ARIB STD-B37 (1SEG)" : le === 221 ? ge = "ARIB STD-B37 (ANALOG)" : le === 222 ? ge = "ARIB STD-B37 (SD)" : le === 223 && (ge = "ARIB STD-B37 (HD)") : fe === 97 && (le === 1 ? ge = "EIA-708" : le === 2 && (ge = "EIA-608")), V.push({ yc_indicator: X, line_number: ie, horizontal_offset: Q, did: fe, sdid: le, user_data: Se, description: ge, information: {} }), G.readBits(8 - (N - Math.floor(N / 8)) % 8), N += (8 - (N - Math.floor(N / 8))) % 8;
            }
            return G.destroy(), G = null, V;
          }(i), this.onSMPTE2038Metadata && this.onSMPTE2038Metadata(w);
        }, t;
      }(x), Jt = function() {
        for (var r = 0, t = 0, i = arguments.length; t < i; t++)
          r += arguments[t].length;
        var e = Array(r), u = 0;
        for (t = 0; t < i; t++)
          for (var b = arguments[t], E = 0, w = b.length; E < w; E++, u++)
            e[u] = b[E];
        return e;
      }, Pt = function() {
        function r() {
        }
        return r.init = function() {
          for (var t in r.types = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], hvc1: [], hvcC: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], mvex: [], mvhd: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [], ".mp3": [], Opus: [], dOps: [], "ac-3": [], dac3: [] }, r.types)
            r.types.hasOwnProperty(t) && (r.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
          var i = r.constants = {};
          i.FTYP = new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49]), i.STSD_PREFIX = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), i.STTS = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), i.STSC = i.STCO = i.STTS, i.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), i.HDLR_VIDEO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), i.HDLR_AUDIO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), i.DREF = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), i.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), i.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
        }, r.box = function(t) {
          for (var i = 8, e = null, u = Array.prototype.slice.call(arguments, 1), b = u.length, E = 0; E < b; E++)
            i += u[E].byteLength;
          (e = new Uint8Array(i))[0] = i >>> 24 & 255, e[1] = i >>> 16 & 255, e[2] = i >>> 8 & 255, e[3] = 255 & i, e.set(t, 4);
          var w = 8;
          for (E = 0; E < b; E++)
            e.set(u[E], w), w += u[E].byteLength;
          return e;
        }, r.generateInitSegment = function(t) {
          var i = r.box(r.types.ftyp, r.constants.FTYP), e = r.moov(t), u = new Uint8Array(i.byteLength + e.byteLength);
          return u.set(i, 0), u.set(e, i.byteLength), u;
        }, r.moov = function(t) {
          var i = r.mvhd(t.timescale, t.duration), e = r.trak(t), u = r.mvex(t);
          return r.box(r.types.moov, i, e, u);
        }, r.mvhd = function(t, i) {
          return r.box(r.types.mvhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]));
        }, r.trak = function(t) {
          return r.box(r.types.trak, r.tkhd(t), r.mdia(t));
        }, r.tkhd = function(t) {
          var i = t.id, e = t.duration, u = t.presentWidth, b = t.presentHeight;
          return r.box(r.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, 0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, u >>> 8 & 255, 255 & u, 0, 0, b >>> 8 & 255, 255 & b, 0, 0]));
        }, r.mdia = function(t) {
          return r.box(r.types.mdia, r.mdhd(t), r.hdlr(t), r.minf(t));
        }, r.mdhd = function(t) {
          var i = t.timescale, e = t.duration;
          return r.box(r.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, 85, 196, 0, 0]));
        }, r.hdlr = function(t) {
          var i = null;
          return i = t.type === "audio" ? r.constants.HDLR_AUDIO : r.constants.HDLR_VIDEO, r.box(r.types.hdlr, i);
        }, r.minf = function(t) {
          var i = null;
          return i = t.type === "audio" ? r.box(r.types.smhd, r.constants.SMHD) : r.box(r.types.vmhd, r.constants.VMHD), r.box(r.types.minf, i, r.dinf(), r.stbl(t));
        }, r.dinf = function() {
          return r.box(r.types.dinf, r.box(r.types.dref, r.constants.DREF));
        }, r.stbl = function(t) {
          return r.box(r.types.stbl, r.stsd(t), r.box(r.types.stts, r.constants.STTS), r.box(r.types.stsc, r.constants.STSC), r.box(r.types.stsz, r.constants.STSZ), r.box(r.types.stco, r.constants.STCO));
        }, r.stsd = function(t) {
          return t.type === "audio" ? t.codec === "mp3" ? r.box(r.types.stsd, r.constants.STSD_PREFIX, r.mp3(t)) : t.codec === "ac-3" ? r.box(r.types.stsd, r.constants.STSD_PREFIX, r.ac3(t)) : t.codec === "opus" ? r.box(r.types.stsd, r.constants.STSD_PREFIX, r.Opus(t)) : r.box(r.types.stsd, r.constants.STSD_PREFIX, r.mp4a(t)) : t.type === "video" && t.codec.startsWith("hvc1") ? r.box(r.types.stsd, r.constants.STSD_PREFIX, r.hvc1(t)) : r.box(r.types.stsd, r.constants.STSD_PREFIX, r.avc1(t));
        }, r.mp3 = function(t) {
          var i = t.channelCount, e = t.audioSampleRate, u = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, i, 0, 16, 0, 0, 0, 0, e >>> 8 & 255, 255 & e, 0, 0]);
          return r.box(r.types[".mp3"], u);
        }, r.mp4a = function(t) {
          var i = t.channelCount, e = t.audioSampleRate, u = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, i, 0, 16, 0, 0, 0, 0, e >>> 8 & 255, 255 & e, 0, 0]);
          return r.box(r.types.mp4a, u, r.esds(t));
        }, r.ac3 = function(t) {
          var i = t.channelCount, e = t.audioSampleRate, u = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, i, 0, 16, 0, 0, 0, 0, e >>> 8 & 255, 255 & e, 0, 0]);
          return r.box(r.types["ac-3"], u, r.box(r.types.dac3, new Uint8Array(t.config)));
        }, r.esds = function(t) {
          var i = t.config || [], e = i.length, u = new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(i).concat([6, 1, 2]));
          return r.box(r.types.esds, u);
        }, r.Opus = function(t) {
          var i = t.channelCount, e = t.audioSampleRate, u = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, i, 0, 16, 0, 0, 0, 0, e >>> 8 & 255, 255 & e, 0, 0]);
          return r.box(r.types.Opus, u, r.dOps(t));
        }, r.dOps = function(t) {
          var i = t.channelCount, e = t.channelConfigCode, u = t.audioSampleRate;
          if (t.config)
            return r.box(r.types.dOps, E);
          var b = [];
          switch (e) {
            case 1:
            case 2:
              b = [0];
              break;
            case 0:
              b = [255, 1, 1, 0, 1];
              break;
            case 128:
              b = [255, 2, 0, 0, 1];
              break;
            case 3:
              b = [1, 2, 1, 0, 2, 1];
              break;
            case 4:
              b = [1, 2, 2, 0, 1, 2, 3];
              break;
            case 5:
              b = [1, 3, 2, 0, 4, 1, 2, 3];
              break;
            case 6:
              b = [1, 4, 2, 0, 4, 1, 2, 3, 5];
              break;
            case 7:
              b = [1, 4, 2, 0, 4, 1, 2, 3, 5, 6];
              break;
            case 8:
              b = [1, 5, 3, 0, 6, 1, 2, 3, 4, 5, 7];
              break;
            case 130:
              b = [1, 1, 2, 0, 1];
              break;
            case 131:
              b = [1, 1, 3, 0, 1, 2];
              break;
            case 132:
              b = [1, 1, 4, 0, 1, 2, 3];
              break;
            case 133:
              b = [1, 1, 5, 0, 1, 2, 3, 4];
              break;
            case 134:
              b = [1, 1, 6, 0, 1, 2, 3, 4, 5];
              break;
            case 135:
              b = [1, 1, 7, 0, 1, 2, 3, 4, 5, 6];
              break;
            case 136:
              b = [1, 1, 8, 0, 1, 2, 3, 4, 5, 6, 7];
          }
          var E = new Uint8Array(Jt([0, i, 0, 0, u >>> 24 & 255, u >>> 17 & 255, u >>> 8 & 255, u >>> 0 & 255, 0, 0], b));
          return r.box(r.types.dOps, E);
        }, r.avc1 = function(t) {
          var i = t.avcc, e = t.codecWidth, u = t.codecHeight, b = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e >>> 8 & 255, 255 & e, u >>> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 10, 120, 113, 113, 47, 102, 108, 118, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
          return r.box(r.types.avc1, b, r.box(r.types.avcC, i));
        }, r.hvc1 = function(t) {
          var i = t.hvcc, e = t.codecWidth, u = t.codecHeight, b = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e >>> 8 & 255, 255 & e, u >>> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 10, 120, 113, 113, 47, 102, 108, 118, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
          return r.box(r.types.hvc1, b, r.box(r.types.hvcC, i));
        }, r.mvex = function(t) {
          return r.box(r.types.mvex, r.trex(t));
        }, r.trex = function(t) {
          var i = t.id, e = new Uint8Array([0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
          return r.box(r.types.trex, e);
        }, r.moof = function(t, i) {
          return r.box(r.types.moof, r.mfhd(t.sequenceNumber), r.traf(t, i));
        }, r.mfhd = function(t) {
          var i = new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t]);
          return r.box(r.types.mfhd, i);
        }, r.traf = function(t, i) {
          var e = t.id, u = r.box(r.types.tfhd, new Uint8Array([0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e])), b = r.box(r.types.tfdt, new Uint8Array([0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i])), E = r.sdtp(t), w = r.trun(t, E.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
          return r.box(r.types.traf, u, b, w, E);
        }, r.sdtp = function(t) {
          for (var i = t.samples || [], e = i.length, u = new Uint8Array(4 + e), b = 0; b < e; b++) {
            var E = i[b].flags;
            u[b + 4] = E.isLeading << 6 | E.dependsOn << 4 | E.isDependedOn << 2 | E.hasRedundancy;
          }
          return r.box(r.types.sdtp, u);
        }, r.trun = function(t, i) {
          var e = t.samples || [], u = e.length, b = 12 + 16 * u, E = new Uint8Array(b);
          i += 8 + b, E.set([0, 0, 15, 1, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i], 0);
          for (var w = 0; w < u; w++) {
            var M = e[w].duration, B = e[w].size, j = e[w].flags, G = e[w].cts;
            E.set([M >>> 24 & 255, M >>> 16 & 255, M >>> 8 & 255, 255 & M, B >>> 24 & 255, B >>> 16 & 255, B >>> 8 & 255, 255 & B, j.isLeading << 2 | j.dependsOn, j.isDependedOn << 6 | j.hasRedundancy << 4 | j.isNonSync, 0, 0, G >>> 24 & 255, G >>> 16 & 255, G >>> 8 & 255, 255 & G], 12 + 16 * w);
          }
          return r.box(r.types.trun, E);
        }, r.mdat = function(t) {
          return r.box(r.types.mdat, t);
        }, r;
      }();
      Pt.init();
      var ut = Pt, Mt = function() {
        function r() {
        }
        return r.getSilentFrame = function(t, i) {
          if (t === "mp4a.40.2") {
            if (i === 1)
              return new Uint8Array([0, 200, 0, 128, 35, 128]);
            if (i === 2)
              return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
            if (i === 3)
              return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
            if (i === 4)
              return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
            if (i === 5)
              return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
            if (i === 6)
              return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
          } else {
            if (i === 1)
              return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
            if (i === 2)
              return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
            if (i === 3)
              return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
          }
          return null;
        }, r;
      }(), Ze = z(7), kt = function() {
        function r(t) {
          this.TAG = "MP4Remuxer", this._config = t, this._isLive = t.isLive === !0, this._dtsBase = -1, this._dtsBaseInited = !1, this._audioDtsBase = 1 / 0, this._videoDtsBase = 1 / 0, this._audioNextDts = void 0, this._videoNextDts = void 0, this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList = new Ze.c("audio"), this._videoSegmentInfoList = new Ze.c("video"), this._onInitSegment = null, this._onMediaSegment = null, this._forceFirstIDR = !(!S.a.chrome || !(S.a.version.major < 50 || S.a.version.major === 50 && S.a.version.build < 2661)), this._fillSilentAfterSeek = S.a.msedge || S.a.msie, this._mp3UseMpegAudio = !S.a.firefox, this._fillAudioTimestampGap = this._config.fixAudioTimestampGap;
        }
        return r.prototype.destroy = function() {
          this._dtsBase = -1, this._dtsBaseInited = !1, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList.clear(), this._audioSegmentInfoList = null, this._videoSegmentInfoList.clear(), this._videoSegmentInfoList = null, this._onInitSegment = null, this._onMediaSegment = null;
        }, r.prototype.bindDataSource = function(t) {
          return t.onDataAvailable = this.remux.bind(this), t.onTrackMetadata = this._onTrackMetadataReceived.bind(this), this;
        }, Object.defineProperty(r.prototype, "onInitSegment", { get: function() {
          return this._onInitSegment;
        }, set: function(t) {
          this._onInitSegment = t;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(r.prototype, "onMediaSegment", { get: function() {
          return this._onMediaSegment;
        }, set: function(t) {
          this._onMediaSegment = t;
        }, enumerable: !1, configurable: !0 }), r.prototype.insertDiscontinuity = function() {
          this._audioNextDts = this._videoNextDts = void 0;
        }, r.prototype.seek = function(t) {
          this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._videoSegmentInfoList.clear(), this._audioSegmentInfoList.clear();
        }, r.prototype.remux = function(t, i) {
          if (!this._onMediaSegment)
            throw new m.a("MP4Remuxer: onMediaSegment callback must be specificed!");
          this._dtsBaseInited || this._calculateDtsBase(t, i), i && this._remuxVideo(i), t && this._remuxAudio(t);
        }, r.prototype._onTrackMetadataReceived = function(t, i) {
          var e = null, u = "mp4", b = i.codec;
          if (t === "audio")
            this._audioMeta = i, i.codec === "mp3" && this._mp3UseMpegAudio ? (u = "mpeg", b = "", e = new Uint8Array()) : e = ut.generateInitSegment(i);
          else {
            if (t !== "video")
              return;
            this._videoMeta = i, e = ut.generateInitSegment(i);
          }
          if (!this._onInitSegment)
            throw new m.a("MP4Remuxer: onInitSegment callback must be specified!");
          this._onInitSegment(t, { type: t, data: e.buffer, codec: b, container: t + "/" + u, mediaDuration: i.duration });
        }, r.prototype._calculateDtsBase = function(t, i) {
          this._dtsBaseInited || (t && t.samples && t.samples.length && (this._audioDtsBase = t.samples[0].dts), i && i.samples && i.samples.length && (this._videoDtsBase = i.samples[0].dts), this._dtsBase = Math.min(this._audioDtsBase, this._videoDtsBase), this._dtsBaseInited = !0);
        }, r.prototype.getTimestampBase = function() {
          if (this._dtsBaseInited)
            return this._dtsBase;
        }, r.prototype.flushStashedSamples = function() {
          var t = this._videoStashedLastSample, i = this._audioStashedLastSample, e = { type: "video", id: 1, sequenceNumber: 0, samples: [], length: 0 };
          t != null && (e.samples.push(t), e.length = t.length);
          var u = { type: "audio", id: 2, sequenceNumber: 0, samples: [], length: 0 };
          i != null && (u.samples.push(i), u.length = i.length), this._videoStashedLastSample = null, this._audioStashedLastSample = null, this._remuxVideo(e, !0), this._remuxAudio(u, !0);
        }, r.prototype._remuxAudio = function(t, i) {
          if (this._audioMeta != null) {
            var e, u = t, b = u.samples, E = void 0, w = -1, M = this._audioMeta.refSampleDuration, B = this._audioMeta.codec === "mp3" && this._mp3UseMpegAudio, j = this._dtsBaseInited && this._audioNextDts === void 0, G = !1;
            if (b && b.length !== 0 && (b.length !== 1 || i)) {
              var N = 0, V = null, X = 0;
              B ? (N = 0, X = u.length) : (N = 8, X = 8 + u.length);
              var ie = null;
              if (b.length > 1 && (X -= (ie = b.pop()).length), this._audioStashedLastSample != null) {
                var Q = this._audioStashedLastSample;
                this._audioStashedLastSample = null, b.unshift(Q), X += Q.length;
              }
              ie != null && (this._audioStashedLastSample = ie);
              var fe = b[0].dts - this._dtsBase;
              if (this._audioNextDts)
                E = fe - this._audioNextDts;
              else if (this._audioSegmentInfoList.isEmpty())
                E = 0, this._fillSilentAfterSeek && !this._videoSegmentInfoList.isEmpty() && this._audioMeta.originalCodec !== "mp3" && (G = !0);
              else {
                var le = this._audioSegmentInfoList.getLastSampleBefore(fe);
                if (le != null) {
                  var ae = fe - (le.originalDts + le.duration);
                  ae <= 3 && (ae = 0), E = fe - (le.dts + le.duration + ae);
                } else
                  E = 0;
              }
              if (G) {
                var Se = fe - E, Te = this._videoSegmentInfoList.getLastSegmentBefore(fe);
                if (Te != null && Te.beginDts < Se) {
                  if (Ne = Mt.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount)) {
                    var se = Te.beginDts, ge = Se - Te.beginDts;
                    R.a.v(this.TAG, "InsertPrefixSilentAudio: dts: " + se + ", duration: " + ge), b.unshift({ unit: Ne, dts: se, pts: se }), X += Ne.byteLength;
                  }
                } else
                  G = !1;
              }
              for (var Le = [], ve = 0; ve < b.length; ve++) {
                var Ee = (Q = b[ve]).unit, Oe = Q.dts - this._dtsBase, ke = (se = Oe, !1), Ae = null, Ce = 0;
                if (!(Oe < -1e-3)) {
                  if (this._audioMeta.codec !== "mp3") {
                    var Be = Oe;
                    if (this._audioNextDts && (Be = this._audioNextDts), (E = Oe - Be) <= -3 * M) {
                      R.a.w(this.TAG, "Dropping 1 audio frame (originalDts: " + Oe + " ms ,curRefDts: " + Be + " ms)  due to dtsCorrection: " + E + " ms overlap.");
                      continue;
                    }
                    if (E >= 3 * M && this._fillAudioTimestampGap && !S.a.safari) {
                      ke = !0;
                      var Ne, tt = Math.floor(E / M);
                      R.a.w(this.TAG, `Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.
originalDts: ` + Oe + " ms, curRefDts: " + Be + " ms, dtsCorrection: " + Math.round(E) + " ms, generate: " + tt + " frames"), se = Math.floor(Be), Ce = Math.floor(Be + M) - se, (Ne = Mt.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount)) == null && (R.a.w(this.TAG, "Unable to generate silent frame for " + this._audioMeta.originalCodec + " with " + this._audioMeta.channelCount + " channels, repeat last frame"), Ne = Ee), Ae = [];
                      for (var Je = 0; Je < tt; Je++) {
                        Be += M;
                        var it = Math.floor(Be), at = Math.floor(Be + M) - it, rt = { dts: it, pts: it, cts: 0, unit: Ne, size: Ne.byteLength, duration: at, originalDts: Oe, flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0 } };
                        Ae.push(rt), X += rt.size;
                      }
                      this._audioNextDts = Be + M;
                    } else
                      se = Math.floor(Be), Ce = Math.floor(Be + M) - se, this._audioNextDts = Be + M;
                  } else
                    se = Oe - E, ve !== b.length - 1 ? Ce = b[ve + 1].dts - this._dtsBase - E - se : ie != null ? Ce = ie.dts - this._dtsBase - E - se : Ce = Le.length >= 1 ? Le[Le.length - 1].duration : Math.floor(M), this._audioNextDts = se + Ce;
                  w === -1 && (w = se), Le.push({ dts: se, pts: se, cts: 0, unit: Q.unit, size: Q.unit.byteLength, duration: Ce, originalDts: Oe, flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0 } }), ke && Le.push.apply(Le, Ae);
                }
              }
              if (Le.length === 0)
                return u.samples = [], void (u.length = 0);
              for (B ? V = new Uint8Array(X) : ((V = new Uint8Array(X))[0] = X >>> 24 & 255, V[1] = X >>> 16 & 255, V[2] = X >>> 8 & 255, V[3] = 255 & X, V.set(ut.types.mdat, 4)), ve = 0; ve < Le.length; ve++)
                Ee = Le[ve].unit, V.set(Ee, N), N += Ee.byteLength;
              var Ve = Le[Le.length - 1];
              e = Ve.dts + Ve.duration;
              var we = new Ze.b();
              we.beginDts = w, we.endDts = e, we.beginPts = w, we.endPts = e, we.originalBeginDts = Le[0].originalDts, we.originalEndDts = Ve.originalDts + Ve.duration, we.firstSample = new Ze.d(Le[0].dts, Le[0].pts, Le[0].duration, Le[0].originalDts, !1), we.lastSample = new Ze.d(Ve.dts, Ve.pts, Ve.duration, Ve.originalDts, !1), this._isLive || this._audioSegmentInfoList.append(we), u.samples = Le, u.sequenceNumber++;
              var $e = null;
              $e = B ? new Uint8Array() : ut.moof(u, w), u.samples = [], u.length = 0;
              var Qe = { type: "audio", data: this._mergeBoxes($e, V).buffer, sampleCount: Le.length, info: we };
              B && j && (Qe.timestampOffset = w), this._onMediaSegment("audio", Qe);
            }
          }
        }, r.prototype._remuxVideo = function(t, i) {
          if (this._videoMeta != null) {
            var e, u, b = t, E = b.samples, w = void 0, M = -1, B = -1;
            if (E && E.length !== 0 && (E.length !== 1 || i)) {
              var j = 8, G = null, N = 8 + t.length, V = null;
              if (E.length > 1 && (N -= (V = E.pop()).length), this._videoStashedLastSample != null) {
                var X = this._videoStashedLastSample;
                this._videoStashedLastSample = null, E.unshift(X), N += X.length;
              }
              V != null && (this._videoStashedLastSample = V);
              var ie = E[0].dts - this._dtsBase;
              if (this._videoNextDts)
                w = ie - this._videoNextDts;
              else if (this._videoSegmentInfoList.isEmpty())
                w = 0;
              else {
                var Q = this._videoSegmentInfoList.getLastSampleBefore(ie);
                if (Q != null) {
                  var fe = ie - (Q.originalDts + Q.duration);
                  fe <= 3 && (fe = 0), w = ie - (Q.dts + Q.duration + fe);
                } else
                  w = 0;
              }
              for (var le = new Ze.b(), ae = [], Se = 0; Se < E.length; Se++) {
                var Te = (X = E[Se]).dts - this._dtsBase, se = X.isKeyframe, ge = Te - w, Le = X.cts, ve = ge + Le;
                M === -1 && (M = ge, B = ve);
                var Ee = 0;
                if (Se !== E.length - 1 ? Ee = E[Se + 1].dts - this._dtsBase - w - ge : V != null ? Ee = V.dts - this._dtsBase - w - ge : Ee = ae.length >= 1 ? ae[ae.length - 1].duration : Math.floor(this._videoMeta.refSampleDuration), se) {
                  var Oe = new Ze.d(ge, ve, Ee, X.dts, !0);
                  Oe.fileposition = X.fileposition, le.appendSyncPoint(Oe);
                }
                ae.push({ dts: ge, pts: ve, cts: Le, units: X.units, size: X.length, isKeyframe: se, duration: Ee, originalDts: Te, flags: { isLeading: 0, dependsOn: se ? 2 : 1, isDependedOn: se ? 1 : 0, hasRedundancy: 0, isNonSync: se ? 0 : 1 } });
              }
              for ((G = new Uint8Array(N))[0] = N >>> 24 & 255, G[1] = N >>> 16 & 255, G[2] = N >>> 8 & 255, G[3] = 255 & N, G.set(ut.types.mdat, 4), Se = 0; Se < ae.length; Se++)
                for (var ke = ae[Se].units; ke.length; ) {
                  var Ae = ke.shift().data;
                  G.set(Ae, j), j += Ae.byteLength;
                }
              var Ce = ae[ae.length - 1];
              if (e = Ce.dts + Ce.duration, u = Ce.pts + Ce.duration, this._videoNextDts = e, le.beginDts = M, le.endDts = e, le.beginPts = B, le.endPts = u, le.originalBeginDts = ae[0].originalDts, le.originalEndDts = Ce.originalDts + Ce.duration, le.firstSample = new Ze.d(ae[0].dts, ae[0].pts, ae[0].duration, ae[0].originalDts, ae[0].isKeyframe), le.lastSample = new Ze.d(Ce.dts, Ce.pts, Ce.duration, Ce.originalDts, Ce.isKeyframe), this._isLive || this._videoSegmentInfoList.append(le), b.samples = ae, b.sequenceNumber++, this._forceFirstIDR) {
                var Be = ae[0].flags;
                Be.dependsOn = 2, Be.isNonSync = 0;
              }
              var Ne = ut.moof(b, M);
              b.samples = [], b.length = 0, this._onMediaSegment("video", { type: "video", data: this._mergeBoxes(Ne, G).buffer, sampleCount: ae.length, info: le });
            }
          }
        }, r.prototype._mergeBoxes = function(t, i) {
          var e = new Uint8Array(t.byteLength + i.byteLength);
          return e.set(t, 0), e.set(i, t.byteLength), e;
        }, r;
      }(), Zt = z(11), je = z(1), $t = function() {
        function r(t, i) {
          this.TAG = "TransmuxingController", this._emitter = new U.a(), this._config = i, t.segments || (t.segments = [{ duration: t.duration, filesize: t.filesize, url: t.url }]), typeof t.cors != "boolean" && (t.cors = !0), typeof t.withCredentials != "boolean" && (t.withCredentials = !1), this._mediaDataSource = t, this._currentSegmentIndex = 0;
          var e = 0;
          this._mediaDataSource.segments.forEach(function(u) {
            u.timestampBase = e, e += u.duration, u.cors = t.cors, u.withCredentials = t.withCredentials, i.referrerPolicy && (u.referrerPolicy = i.referrerPolicy);
          }), isNaN(e) || this._mediaDataSource.duration === e || (this._mediaDataSource.duration = e), this._mediaInfo = null, this._demuxer = null, this._remuxer = null, this._ioctl = null, this._pendingSeekTime = null, this._pendingResolveSeekPoint = null, this._statisticsReporter = null;
        }
        return r.prototype.destroy = function() {
          this._mediaInfo = null, this._mediaDataSource = null, this._statisticsReporter && this._disableStatisticsReporter(), this._ioctl && (this._ioctl.destroy(), this._ioctl = null), this._demuxer && (this._demuxer.destroy(), this._demuxer = null), this._remuxer && (this._remuxer.destroy(), this._remuxer = null), this._emitter.removeAllListeners(), this._emitter = null;
        }, r.prototype.on = function(t, i) {
          this._emitter.addListener(t, i);
        }, r.prototype.off = function(t, i) {
          this._emitter.removeListener(t, i);
        }, r.prototype.start = function() {
          this._loadSegment(0), this._enableStatisticsReporter();
        }, r.prototype._loadSegment = function(t, i) {
          this._currentSegmentIndex = t;
          var e = this._mediaDataSource.segments[t], u = this._ioctl = new Zt.a(e, this._config, t);
          u.onError = this._onIOException.bind(this), u.onSeeked = this._onIOSeeked.bind(this), u.onComplete = this._onIOComplete.bind(this), u.onRedirect = this._onIORedirect.bind(this), u.onRecoveredEarlyEof = this._onIORecoveredEarlyEof.bind(this), i ? this._demuxer.bindDataSource(this._ioctl) : u.onDataArrival = this._onInitChunkArrival.bind(this), u.open(i);
        }, r.prototype.stop = function() {
          this._internalAbort(), this._disableStatisticsReporter();
        }, r.prototype._internalAbort = function() {
          this._ioctl && (this._ioctl.destroy(), this._ioctl = null);
        }, r.prototype.pause = function() {
          this._ioctl && this._ioctl.isWorking() && (this._ioctl.pause(), this._disableStatisticsReporter());
        }, r.prototype.resume = function() {
          this._ioctl && this._ioctl.isPaused() && (this._ioctl.resume(), this._enableStatisticsReporter());
        }, r.prototype.seek = function(t) {
          if (this._mediaInfo != null && this._mediaInfo.isSeekable()) {
            var i = this._searchSegmentIndexContains(t);
            if (i === this._currentSegmentIndex) {
              var e = this._mediaInfo.segments[i];
              if (e == null)
                this._pendingSeekTime = t;
              else {
                var u = e.getNearestKeyframe(t);
                this._remuxer.seek(u.milliseconds), this._ioctl.seek(u.fileposition), this._pendingResolveSeekPoint = u.milliseconds;
              }
            } else {
              var b = this._mediaInfo.segments[i];
              b == null ? (this._pendingSeekTime = t, this._internalAbort(), this._remuxer.seek(), this._remuxer.insertDiscontinuity(), this._loadSegment(i)) : (u = b.getNearestKeyframe(t), this._internalAbort(), this._remuxer.seek(t), this._remuxer.insertDiscontinuity(), this._demuxer.resetMediaInfo(), this._demuxer.timestampBase = this._mediaDataSource.segments[i].timestampBase, this._loadSegment(i, u.fileposition), this._pendingResolveSeekPoint = u.milliseconds, this._reportSegmentMediaInfo(i));
            }
            this._enableStatisticsReporter();
          }
        }, r.prototype._searchSegmentIndexContains = function(t) {
          for (var i = this._mediaDataSource.segments, e = i.length - 1, u = 0; u < i.length; u++)
            if (t < i[u].timestampBase) {
              e = u - 1;
              break;
            }
          return e;
        }, r.prototype._onInitChunkArrival = function(t, i) {
          var e = this, u = 0;
          if (i > 0)
            this._demuxer.bindDataSource(this._ioctl), this._demuxer.timestampBase = this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase, u = this._demuxer.parseChunks(t, i);
          else {
            var b = null;
            (b = y.probe(t)).match && (this._setupFLVDemuxerRemuxer(b), u = this._demuxer.parseChunks(t, i)), b.match || b.needMoreData || (b = dt.probe(t)).match && (this._setupTSDemuxerRemuxer(b), u = this._demuxer.parseChunks(t, i)), b.match || b.needMoreData || (b = null, R.a.e(this.TAG, "Non MPEG-TS/FLV, Unsupported media type!"), Promise.resolve().then(function() {
              e._internalAbort();
            }), this._emitter.emit(je.a.DEMUX_ERROR, c.a.FORMAT_UNSUPPORTED, "Non MPEG-TS/FLV, Unsupported media type!"));
          }
          return u;
        }, r.prototype._setupFLVDemuxerRemuxer = function(t) {
          this._demuxer = new y(t, this._config), this._remuxer || (this._remuxer = new kt(this._config));
          var i = this._mediaDataSource;
          i.duration == null || isNaN(i.duration) || (this._demuxer.overridedDuration = i.duration), typeof i.hasAudio == "boolean" && (this._demuxer.overridedHasAudio = i.hasAudio), typeof i.hasVideo == "boolean" && (this._demuxer.overridedHasVideo = i.hasVideo), this._demuxer.timestampBase = i.segments[this._currentSegmentIndex].timestampBase, this._demuxer.onError = this._onDemuxException.bind(this), this._demuxer.onMediaInfo = this._onMediaInfo.bind(this), this._demuxer.onMetaDataArrived = this._onMetaDataArrived.bind(this), this._demuxer.onScriptDataArrived = this._onScriptDataArrived.bind(this), this._remuxer.bindDataSource(this._demuxer.bindDataSource(this._ioctl)), this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this), this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this);
        }, r.prototype._setupTSDemuxerRemuxer = function(t) {
          var i = this._demuxer = new dt(t, this._config);
          this._remuxer || (this._remuxer = new kt(this._config)), i.onError = this._onDemuxException.bind(this), i.onMediaInfo = this._onMediaInfo.bind(this), i.onMetaDataArrived = this._onMetaDataArrived.bind(this), i.onTimedID3Metadata = this._onTimedID3Metadata.bind(this), i.onSMPTE2038Metadata = this._onSMPTE2038Metadata.bind(this), i.onSCTE35Metadata = this._onSCTE35Metadata.bind(this), i.onPESPrivateDataDescriptor = this._onPESPrivateDataDescriptor.bind(this), i.onPESPrivateData = this._onPESPrivateData.bind(this), this._remuxer.bindDataSource(this._demuxer), this._demuxer.bindDataSource(this._ioctl), this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this), this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this);
        }, r.prototype._onMediaInfo = function(t) {
          var i = this;
          this._mediaInfo == null && (this._mediaInfo = Object.assign({}, t), this._mediaInfo.keyframesIndex = null, this._mediaInfo.segments = [], this._mediaInfo.segmentCount = this._mediaDataSource.segments.length, Object.setPrototypeOf(this._mediaInfo, L.a.prototype));
          var e = Object.assign({}, t);
          Object.setPrototypeOf(e, L.a.prototype), this._mediaInfo.segments[this._currentSegmentIndex] = e, this._reportSegmentMediaInfo(this._currentSegmentIndex), this._pendingSeekTime != null && Promise.resolve().then(function() {
            var u = i._pendingSeekTime;
            i._pendingSeekTime = null, i.seek(u);
          });
        }, r.prototype._onMetaDataArrived = function(t) {
          this._emitter.emit(je.a.METADATA_ARRIVED, t);
        }, r.prototype._onScriptDataArrived = function(t) {
          this._emitter.emit(je.a.SCRIPTDATA_ARRIVED, t);
        }, r.prototype._onTimedID3Metadata = function(t) {
          var i = this._remuxer.getTimestampBase();
          i != null && (t.pts != null && (t.pts -= i), t.dts != null && (t.dts -= i), this._emitter.emit(je.a.TIMED_ID3_METADATA_ARRIVED, t));
        }, r.prototype._onSMPTE2038Metadata = function(t) {
          var i = this._remuxer.getTimestampBase();
          i != null && (t.pts != null && (t.pts -= i), t.dts != null && (t.dts -= i), t.nearest_pts != null && (t.nearest_pts -= i), this._emitter.emit(je.a.SMPTE2038_METADATA_ARRIVED, t));
        }, r.prototype._onSCTE35Metadata = function(t) {
          var i = this._remuxer.getTimestampBase();
          i != null && (t.pts != null && (t.pts -= i), t.nearest_pts != null && (t.nearest_pts -= i), this._emitter.emit(je.a.SCTE35_METADATA_ARRIVED, t));
        }, r.prototype._onPESPrivateDataDescriptor = function(t) {
          this._emitter.emit(je.a.PES_PRIVATE_DATA_DESCRIPTOR, t);
        }, r.prototype._onPESPrivateData = function(t) {
          var i = this._remuxer.getTimestampBase();
          i != null && (t.pts != null && (t.pts -= i), t.nearest_pts != null && (t.nearest_pts -= i), t.dts != null && (t.dts -= i), this._emitter.emit(je.a.PES_PRIVATE_DATA_ARRIVED, t));
        }, r.prototype._onIOSeeked = function() {
          this._remuxer.insertDiscontinuity();
        }, r.prototype._onIOComplete = function(t) {
          var i = t + 1;
          i < this._mediaDataSource.segments.length ? (this._internalAbort(), this._remuxer && this._remuxer.flushStashedSamples(), this._loadSegment(i)) : (this._remuxer && this._remuxer.flushStashedSamples(), this._emitter.emit(je.a.LOADING_COMPLETE), this._disableStatisticsReporter());
        }, r.prototype._onIORedirect = function(t) {
          var i = this._ioctl.extraData;
          this._mediaDataSource.segments[i].redirectedURL = t;
        }, r.prototype._onIORecoveredEarlyEof = function() {
          this._emitter.emit(je.a.RECOVERED_EARLY_EOF);
        }, r.prototype._onIOException = function(t, i) {
          R.a.e(this.TAG, "IOException: type = " + t + ", code = " + i.code + ", msg = " + i.msg), this._emitter.emit(je.a.IO_ERROR, t, i), this._disableStatisticsReporter();
        }, r.prototype._onDemuxException = function(t, i) {
          R.a.e(this.TAG, "DemuxException: type = " + t + ", info = " + i), this._emitter.emit(je.a.DEMUX_ERROR, t, i);
        }, r.prototype._onRemuxerInitSegmentArrival = function(t, i) {
          this._emitter.emit(je.a.INIT_SEGMENT, t, i);
        }, r.prototype._onRemuxerMediaSegmentArrival = function(t, i) {
          if (this._pendingSeekTime == null && (this._emitter.emit(je.a.MEDIA_SEGMENT, t, i), this._pendingResolveSeekPoint != null && t === "video")) {
            var e = i.info.syncPoints, u = this._pendingResolveSeekPoint;
            this._pendingResolveSeekPoint = null, S.a.safari && e.length > 0 && e[0].originalDts === u && (u = e[0].pts), this._emitter.emit(je.a.RECOMMEND_SEEKPOINT, u);
          }
        }, r.prototype._enableStatisticsReporter = function() {
          this._statisticsReporter == null && (this._statisticsReporter = self.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval));
        }, r.prototype._disableStatisticsReporter = function() {
          this._statisticsReporter && (self.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
        }, r.prototype._reportSegmentMediaInfo = function(t) {
          var i = this._mediaInfo.segments[t], e = Object.assign({}, i);
          e.duration = this._mediaInfo.duration, e.segmentCount = this._mediaInfo.segmentCount, delete e.segments, delete e.keyframesIndex, this._emitter.emit(je.a.MEDIA_INFO, e);
        }, r.prototype._reportStatisticsInfo = function() {
          var t = {};
          t.url = this._ioctl.currentURL, t.hasRedirect = this._ioctl.hasRedirect, t.hasRedirect && (t.redirectedURL = this._ioctl.currentRedirectedURL), t.speed = this._ioctl.currentSpeed, t.loaderType = this._ioctl.loaderType, t.currentSegmentIndex = this._currentSegmentIndex, t.totalSegmentCount = this._mediaDataSource.segments.length, this._emitter.emit(je.a.STATISTICS_INFO, t);
        }, r;
      }();
      J.a = $t;
    }, function(de, J, z) {
      var Y, U = z(0), R = function() {
        function _() {
          this._firstCheckpoint = 0, this._lastCheckpoint = 0, this._intervalBytes = 0, this._totalBytes = 0, this._lastSecondBytes = 0, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now;
        }
        return _.prototype.reset = function() {
          this._firstCheckpoint = this._lastCheckpoint = 0, this._totalBytes = this._intervalBytes = 0, this._lastSecondBytes = 0;
        }, _.prototype.addBytes = function(s) {
          this._firstCheckpoint === 0 ? (this._firstCheckpoint = this._now(), this._lastCheckpoint = this._firstCheckpoint, this._intervalBytes += s, this._totalBytes += s) : this._now() - this._lastCheckpoint < 1e3 ? (this._intervalBytes += s, this._totalBytes += s) : (this._lastSecondBytes = this._intervalBytes, this._intervalBytes = s, this._totalBytes += s, this._lastCheckpoint = this._now());
        }, Object.defineProperty(_.prototype, "currentKBps", { get: function() {
          this.addBytes(0);
          var s = (this._now() - this._lastCheckpoint) / 1e3;
          return s == 0 && (s = 1), this._intervalBytes / s / 1024;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(_.prototype, "lastSecondKBps", { get: function() {
          return this.addBytes(0), this._lastSecondBytes !== 0 ? this._lastSecondBytes / 1024 : this._now() - this._lastCheckpoint >= 500 ? this.currentKBps : 0;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(_.prototype, "averageKBps", { get: function() {
          var s = (this._now() - this._firstCheckpoint) / 1e3;
          return this._totalBytes / s / 1024;
        }, enumerable: !1, configurable: !0 }), _;
      }(), S = z(2), L = z(4), d = z(3), o = (Y = function(_, s) {
        return (Y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, y) {
          h.__proto__ = y;
        } || function(h, y) {
          for (var x in y)
            y.hasOwnProperty(x) && (h[x] = y[x]);
        })(_, s);
      }, function(_, s) {
        function h() {
          this.constructor = _;
        }
        Y(_, s), _.prototype = s === null ? Object.create(s) : (h.prototype = s.prototype, new h());
      }), l = function(_) {
        function s(h, y) {
          var x = _.call(this, "fetch-stream-loader") || this;
          return x.TAG = "FetchStreamLoader", x._seekHandler = h, x._config = y, x._needStash = !0, x._requestAbort = !1, x._abortController = null, x._contentLength = null, x._receivedLength = 0, x;
        }
        return o(s, _), s.isSupported = function() {
          try {
            var h = L.a.msedge && L.a.version.minor >= 15048, y = !L.a.msedge || h;
            return self.fetch && self.ReadableStream && y;
          } catch {
            return !1;
          }
        }, s.prototype.destroy = function() {
          this.isWorking() && this.abort(), _.prototype.destroy.call(this);
        }, s.prototype.open = function(h, y) {
          var x = this;
          this._dataSource = h, this._range = y;
          var O = h.url;
          this._config.reuseRedirectedURL && h.redirectedURL != null && (O = h.redirectedURL);
          var T = this._seekHandler.getConfig(O, y), I = new self.Headers();
          if (typeof T.headers == "object") {
            var F = T.headers;
            for (var W in F)
              F.hasOwnProperty(W) && I.append(W, F[W]);
          }
          var K = { method: "GET", headers: I, mode: "cors", cache: "default", referrerPolicy: "no-referrer-when-downgrade" };
          if (typeof this._config.headers == "object")
            for (var W in this._config.headers)
              I.append(W, this._config.headers[W]);
          h.cors === !1 && (K.mode = "same-origin"), h.withCredentials && (K.credentials = "include"), h.referrerPolicy && (K.referrerPolicy = h.referrerPolicy), self.AbortController && (this._abortController = new self.AbortController(), K.signal = this._abortController.signal), this._status = S.c.kConnecting, self.fetch(T.url, K).then(function(P) {
            if (x._requestAbort)
              return x._status = S.c.kIdle, void P.body.cancel();
            if (P.ok && P.status >= 200 && P.status <= 299) {
              if (P.url !== T.url && x._onURLRedirect) {
                var C = x._seekHandler.removeURLParameters(P.url);
                x._onURLRedirect(C);
              }
              var D = P.headers.get("Content-Length");
              return D != null && (x._contentLength = parseInt(D), x._contentLength !== 0 && x._onContentLengthKnown && x._onContentLengthKnown(x._contentLength)), x._pump.call(x, P.body.getReader());
            }
            if (x._status = S.c.kError, !x._onError)
              throw new d.d("FetchStreamLoader: Http code invalid, " + P.status + " " + P.statusText);
            x._onError(S.b.HTTP_STATUS_CODE_INVALID, { code: P.status, msg: P.statusText });
          }).catch(function(P) {
            if (!x._abortController || !x._abortController.signal.aborted) {
              if (x._status = S.c.kError, !x._onError)
                throw P;
              x._onError(S.b.EXCEPTION, { code: -1, msg: P.message });
            }
          });
        }, s.prototype.abort = function() {
          if (this._requestAbort = !0, (this._status !== S.c.kBuffering || !L.a.chrome) && this._abortController)
            try {
              this._abortController.abort();
            } catch {
            }
        }, s.prototype._pump = function(h) {
          var y = this;
          return h.read().then(function(x) {
            if (x.done)
              if (y._contentLength !== null && y._receivedLength < y._contentLength) {
                y._status = S.c.kError;
                var O = S.b.EARLY_EOF, T = { code: -1, msg: "Fetch stream meet Early-EOF" };
                if (!y._onError)
                  throw new d.d(T.msg);
                y._onError(O, T);
              } else
                y._status = S.c.kComplete, y._onComplete && y._onComplete(y._range.from, y._range.from + y._receivedLength - 1);
            else {
              if (y._abortController && y._abortController.signal.aborted)
                return void (y._status = S.c.kComplete);
              if (y._requestAbort === !0)
                return y._status = S.c.kComplete, h.cancel();
              y._status = S.c.kBuffering;
              var I = x.value.buffer, F = y._range.from + y._receivedLength;
              y._receivedLength += I.byteLength, y._onDataArrival && y._onDataArrival(I, F, y._receivedLength), y._pump(h);
            }
          }).catch(function(x) {
            if (y._abortController && y._abortController.signal.aborted)
              y._status = S.c.kComplete;
            else if (x.code !== 11 || !L.a.msedge) {
              y._status = S.c.kError;
              var O = 0, T = null;
              if (x.code !== 19 && x.message !== "network error" || !(y._contentLength === null || y._contentLength !== null && y._receivedLength < y._contentLength) ? (O = S.b.EXCEPTION, T = { code: x.code, msg: x.message }) : (O = S.b.EARLY_EOF, T = { code: x.code, msg: "Fetch stream meet Early-EOF" }), !y._onError)
                throw new d.d(T.msg);
              y._onError(O, T);
            }
          });
        }, s;
      }(S.a), m = /* @__PURE__ */ function() {
        var _ = function(s, h) {
          return (_ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, x) {
            y.__proto__ = x;
          } || function(y, x) {
            for (var O in x)
              x.hasOwnProperty(O) && (y[O] = x[O]);
          })(s, h);
        };
        return function(s, h) {
          function y() {
            this.constructor = s;
          }
          _(s, h), s.prototype = h === null ? Object.create(h) : (y.prototype = h.prototype, new y());
        };
      }(), f = function(_) {
        function s(h, y) {
          var x = _.call(this, "xhr-moz-chunked-loader") || this;
          return x.TAG = "MozChunkedLoader", x._seekHandler = h, x._config = y, x._needStash = !0, x._xhr = null, x._requestAbort = !1, x._contentLength = null, x._receivedLength = 0, x;
        }
        return m(s, _), s.isSupported = function() {
          try {
            var h = new XMLHttpRequest();
            return h.open("GET", "https://example.com", !0), h.responseType = "moz-chunked-arraybuffer", h.responseType === "moz-chunked-arraybuffer";
          } catch (y) {
            return U.a.w("MozChunkedLoader", y.message), !1;
          }
        }, s.prototype.destroy = function() {
          this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onloadend = null, this._xhr.onerror = null, this._xhr = null), _.prototype.destroy.call(this);
        }, s.prototype.open = function(h, y) {
          this._dataSource = h, this._range = y;
          var x = h.url;
          this._config.reuseRedirectedURL && h.redirectedURL != null && (x = h.redirectedURL);
          var O = this._seekHandler.getConfig(x, y);
          this._requestURL = O.url;
          var T = this._xhr = new XMLHttpRequest();
          if (T.open("GET", O.url, !0), T.responseType = "moz-chunked-arraybuffer", T.onreadystatechange = this._onReadyStateChange.bind(this), T.onprogress = this._onProgress.bind(this), T.onloadend = this._onLoadEnd.bind(this), T.onerror = this._onXhrError.bind(this), h.withCredentials && (T.withCredentials = !0), typeof O.headers == "object") {
            var I = O.headers;
            for (var F in I)
              I.hasOwnProperty(F) && T.setRequestHeader(F, I[F]);
          }
          if (typeof this._config.headers == "object") {
            I = this._config.headers;
            for (var F in I)
              I.hasOwnProperty(F) && T.setRequestHeader(F, I[F]);
          }
          this._status = S.c.kConnecting, T.send();
        }, s.prototype.abort = function() {
          this._requestAbort = !0, this._xhr && this._xhr.abort(), this._status = S.c.kComplete;
        }, s.prototype._onReadyStateChange = function(h) {
          var y = h.target;
          if (y.readyState === 2) {
            if (y.responseURL != null && y.responseURL !== this._requestURL && this._onURLRedirect) {
              var x = this._seekHandler.removeURLParameters(y.responseURL);
              this._onURLRedirect(x);
            }
            if (y.status !== 0 && (y.status < 200 || y.status > 299)) {
              if (this._status = S.c.kError, !this._onError)
                throw new d.d("MozChunkedLoader: Http code invalid, " + y.status + " " + y.statusText);
              this._onError(S.b.HTTP_STATUS_CODE_INVALID, { code: y.status, msg: y.statusText });
            } else
              this._status = S.c.kBuffering;
          }
        }, s.prototype._onProgress = function(h) {
          if (this._status !== S.c.kError) {
            this._contentLength === null && h.total !== null && h.total !== 0 && (this._contentLength = h.total, this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength));
            var y = h.target.response, x = this._range.from + this._receivedLength;
            this._receivedLength += y.byteLength, this._onDataArrival && this._onDataArrival(y, x, this._receivedLength);
          }
        }, s.prototype._onLoadEnd = function(h) {
          this._requestAbort !== !0 ? this._status !== S.c.kError && (this._status = S.c.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1)) : this._requestAbort = !1;
        }, s.prototype._onXhrError = function(h) {
          this._status = S.c.kError;
          var y = 0, x = null;
          if (this._contentLength && h.loaded < this._contentLength ? (y = S.b.EARLY_EOF, x = { code: -1, msg: "Moz-Chunked stream meet Early-Eof" }) : (y = S.b.EXCEPTION, x = { code: -1, msg: h.constructor.name + " " + h.type }), !this._onError)
            throw new d.d(x.msg);
          this._onError(y, x);
        }, s;
      }(S.a), v = /* @__PURE__ */ function() {
        var _ = function(s, h) {
          return (_ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, x) {
            y.__proto__ = x;
          } || function(y, x) {
            for (var O in x)
              x.hasOwnProperty(O) && (y[O] = x[O]);
          })(s, h);
        };
        return function(s, h) {
          function y() {
            this.constructor = s;
          }
          _(s, h), s.prototype = h === null ? Object.create(h) : (y.prototype = h.prototype, new y());
        };
      }(), A = function(_) {
        function s(h, y) {
          var x = _.call(this, "xhr-range-loader") || this;
          return x.TAG = "RangeLoader", x._seekHandler = h, x._config = y, x._needStash = !1, x._chunkSizeKBList = [128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 5120, 6144, 7168, 8192], x._currentChunkSizeKB = 384, x._currentSpeedNormalized = 0, x._zeroSpeedChunkCount = 0, x._xhr = null, x._speedSampler = new R(), x._requestAbort = !1, x._waitForTotalLength = !1, x._totalLengthReceived = !1, x._currentRequestURL = null, x._currentRedirectedURL = null, x._currentRequestRange = null, x._totalLength = null, x._contentLength = null, x._receivedLength = 0, x._lastTimeLoaded = 0, x;
        }
        return v(s, _), s.isSupported = function() {
          try {
            var h = new XMLHttpRequest();
            return h.open("GET", "https://example.com", !0), h.responseType = "arraybuffer", h.responseType === "arraybuffer";
          } catch (y) {
            return U.a.w("RangeLoader", y.message), !1;
          }
        }, s.prototype.destroy = function() {
          this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr = null), _.prototype.destroy.call(this);
        }, Object.defineProperty(s.prototype, "currentSpeed", { get: function() {
          return this._speedSampler.lastSecondKBps;
        }, enumerable: !1, configurable: !0 }), s.prototype.open = function(h, y) {
          this._dataSource = h, this._range = y, this._status = S.c.kConnecting;
          var x = !1;
          this._dataSource.filesize != null && this._dataSource.filesize !== 0 && (x = !0, this._totalLength = this._dataSource.filesize), this._totalLengthReceived || x ? this._openSubRange() : (this._waitForTotalLength = !0, this._internalOpen(this._dataSource, { from: 0, to: -1 }));
        }, s.prototype._openSubRange = function() {
          var h = 1024 * this._currentChunkSizeKB, y = this._range.from + this._receivedLength, x = y + h;
          this._contentLength != null && x - this._range.from >= this._contentLength && (x = this._range.from + this._contentLength - 1), this._currentRequestRange = { from: y, to: x }, this._internalOpen(this._dataSource, this._currentRequestRange);
        }, s.prototype._internalOpen = function(h, y) {
          this._lastTimeLoaded = 0;
          var x = h.url;
          this._config.reuseRedirectedURL && (this._currentRedirectedURL != null ? x = this._currentRedirectedURL : h.redirectedURL != null && (x = h.redirectedURL));
          var O = this._seekHandler.getConfig(x, y);
          this._currentRequestURL = O.url;
          var T = this._xhr = new XMLHttpRequest();
          if (T.open("GET", O.url, !0), T.responseType = "arraybuffer", T.onreadystatechange = this._onReadyStateChange.bind(this), T.onprogress = this._onProgress.bind(this), T.onload = this._onLoad.bind(this), T.onerror = this._onXhrError.bind(this), h.withCredentials && (T.withCredentials = !0), typeof O.headers == "object") {
            var I = O.headers;
            for (var F in I)
              I.hasOwnProperty(F) && T.setRequestHeader(F, I[F]);
          }
          if (typeof this._config.headers == "object") {
            I = this._config.headers;
            for (var F in I)
              I.hasOwnProperty(F) && T.setRequestHeader(F, I[F]);
          }
          T.send();
        }, s.prototype.abort = function() {
          this._requestAbort = !0, this._internalAbort(), this._status = S.c.kComplete;
        }, s.prototype._internalAbort = function() {
          this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr.abort(), this._xhr = null);
        }, s.prototype._onReadyStateChange = function(h) {
          var y = h.target;
          if (y.readyState === 2) {
            if (y.responseURL != null) {
              var x = this._seekHandler.removeURLParameters(y.responseURL);
              y.responseURL !== this._currentRequestURL && x !== this._currentRedirectedURL && (this._currentRedirectedURL = x, this._onURLRedirect && this._onURLRedirect(x));
            }
            if (y.status >= 200 && y.status <= 299) {
              if (this._waitForTotalLength)
                return;
              this._status = S.c.kBuffering;
            } else {
              if (this._status = S.c.kError, !this._onError)
                throw new d.d("RangeLoader: Http code invalid, " + y.status + " " + y.statusText);
              this._onError(S.b.HTTP_STATUS_CODE_INVALID, { code: y.status, msg: y.statusText });
            }
          }
        }, s.prototype._onProgress = function(h) {
          if (this._status !== S.c.kError) {
            if (this._contentLength === null) {
              var y = !1;
              if (this._waitForTotalLength) {
                this._waitForTotalLength = !1, this._totalLengthReceived = !0, y = !0;
                var x = h.total;
                this._internalAbort(), x != null & x !== 0 && (this._totalLength = x);
              }
              if (this._range.to === -1 ? this._contentLength = this._totalLength - this._range.from : this._contentLength = this._range.to - this._range.from + 1, y)
                return void this._openSubRange();
              this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength);
            }
            var O = h.loaded - this._lastTimeLoaded;
            this._lastTimeLoaded = h.loaded, this._speedSampler.addBytes(O);
          }
        }, s.prototype._normalizeSpeed = function(h) {
          var y = this._chunkSizeKBList, x = y.length - 1, O = 0, T = 0, I = x;
          if (h < y[0])
            return y[0];
          for (; T <= I; ) {
            if ((O = T + Math.floor((I - T) / 2)) === x || h >= y[O] && h < y[O + 1])
              return y[O];
            y[O] < h ? T = O + 1 : I = O - 1;
          }
        }, s.prototype._onLoad = function(h) {
          if (this._status !== S.c.kError)
            if (this._waitForTotalLength)
              this._waitForTotalLength = !1;
            else {
              this._lastTimeLoaded = 0;
              var y = this._speedSampler.lastSecondKBps;
              if (y === 0 && (this._zeroSpeedChunkCount++, this._zeroSpeedChunkCount >= 3 && (y = this._speedSampler.currentKBps)), y !== 0) {
                var x = this._normalizeSpeed(y);
                this._currentSpeedNormalized !== x && (this._currentSpeedNormalized = x, this._currentChunkSizeKB = x);
              }
              var O = h.target.response, T = this._range.from + this._receivedLength;
              this._receivedLength += O.byteLength;
              var I = !1;
              this._contentLength != null && this._receivedLength < this._contentLength ? this._openSubRange() : I = !0, this._onDataArrival && this._onDataArrival(O, T, this._receivedLength), I && (this._status = S.c.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1));
            }
        }, s.prototype._onXhrError = function(h) {
          this._status = S.c.kError;
          var y = 0, x = null;
          if (this._contentLength && this._receivedLength > 0 && this._receivedLength < this._contentLength ? (y = S.b.EARLY_EOF, x = { code: -1, msg: "RangeLoader meet Early-Eof" }) : (y = S.b.EXCEPTION, x = { code: -1, msg: h.constructor.name + " " + h.type }), !this._onError)
            throw new d.d(x.msg);
          this._onError(y, x);
        }, s;
      }(S.a), g = /* @__PURE__ */ function() {
        var _ = function(s, h) {
          return (_ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, x) {
            y.__proto__ = x;
          } || function(y, x) {
            for (var O in x)
              x.hasOwnProperty(O) && (y[O] = x[O]);
          })(s, h);
        };
        return function(s, h) {
          function y() {
            this.constructor = s;
          }
          _(s, h), s.prototype = h === null ? Object.create(h) : (y.prototype = h.prototype, new y());
        };
      }(), c = function(_) {
        function s() {
          var h = _.call(this, "websocket-loader") || this;
          return h.TAG = "WebSocketLoader", h._needStash = !0, h._ws = null, h._requestAbort = !1, h._receivedLength = 0, h;
        }
        return g(s, _), s.isSupported = function() {
          try {
            return self.WebSocket !== void 0;
          } catch {
            return !1;
          }
        }, s.prototype.destroy = function() {
          this._ws && this.abort(), _.prototype.destroy.call(this);
        }, s.prototype.open = function(h) {
          try {
            var y = this._ws = new self.WebSocket(h.url);
            y.binaryType = "arraybuffer", y.onopen = this._onWebSocketOpen.bind(this), y.onclose = this._onWebSocketClose.bind(this), y.onmessage = this._onWebSocketMessage.bind(this), y.onerror = this._onWebSocketError.bind(this), this._status = S.c.kConnecting;
          } catch (O) {
            this._status = S.c.kError;
            var x = { code: O.code, msg: O.message };
            if (!this._onError)
              throw new d.d(x.msg);
            this._onError(S.b.EXCEPTION, x);
          }
        }, s.prototype.abort = function() {
          var h = this._ws;
          !h || h.readyState !== 0 && h.readyState !== 1 || (this._requestAbort = !0, h.close()), this._ws = null, this._status = S.c.kComplete;
        }, s.prototype._onWebSocketOpen = function(h) {
          this._status = S.c.kBuffering;
        }, s.prototype._onWebSocketClose = function(h) {
          this._requestAbort !== !0 ? (this._status = S.c.kComplete, this._onComplete && this._onComplete(0, this._receivedLength - 1)) : this._requestAbort = !1;
        }, s.prototype._onWebSocketMessage = function(h) {
          var y = this;
          if (h.data instanceof ArrayBuffer)
            this._dispatchArrayBuffer(h.data);
          else if (h.data instanceof Blob) {
            var x = new FileReader();
            x.onload = function() {
              y._dispatchArrayBuffer(x.result);
            }, x.readAsArrayBuffer(h.data);
          } else {
            this._status = S.c.kError;
            var O = { code: -1, msg: "Unsupported WebSocket message type: " + h.data.constructor.name };
            if (!this._onError)
              throw new d.d(O.msg);
            this._onError(S.b.EXCEPTION, O);
          }
        }, s.prototype._dispatchArrayBuffer = function(h) {
          var y = h, x = this._receivedLength;
          this._receivedLength += y.byteLength, this._onDataArrival && this._onDataArrival(y, x, this._receivedLength);
        }, s.prototype._onWebSocketError = function(h) {
          this._status = S.c.kError;
          var y = { code: h.code, msg: h.message };
          if (!this._onError)
            throw new d.d(y.msg);
          this._onError(S.b.EXCEPTION, y);
        }, s;
      }(S.a), p = function() {
        function _(s) {
          this._zeroStart = s || !1;
        }
        return _.prototype.getConfig = function(s, h) {
          var y = {};
          if (h.from !== 0 || h.to !== -1) {
            var x = void 0;
            x = h.to !== -1 ? "bytes=" + h.from.toString() + "-" + h.to.toString() : "bytes=" + h.from.toString() + "-", y.Range = x;
          } else
            this._zeroStart && (y.Range = "bytes=0-");
          return { url: s, headers: y };
        }, _.prototype.removeURLParameters = function(s) {
          return s;
        }, _;
      }(), n = function() {
        function _(s, h) {
          this._startName = s, this._endName = h;
        }
        return _.prototype.getConfig = function(s, h) {
          var y = s;
          if (h.from !== 0 || h.to !== -1) {
            var x = !0;
            y.indexOf("?") === -1 && (y += "?", x = !1), x && (y += "&"), y += this._startName + "=" + h.from.toString(), h.to !== -1 && (y += "&" + this._endName + "=" + h.to.toString());
          }
          return { url: y, headers: {} };
        }, _.prototype.removeURLParameters = function(s) {
          var h = s.split("?")[0], y = void 0, x = s.indexOf("?");
          x !== -1 && (y = s.substring(x + 1));
          var O = "";
          if (y != null && y.length > 0)
            for (var T = y.split("&"), I = 0; I < T.length; I++) {
              var F = T[I].split("="), W = I > 0;
              F[0] !== this._startName && F[0] !== this._endName && (W && (O += "&"), O += T[I]);
            }
          return O.length === 0 ? h : h + "?" + O;
        }, _;
      }(), a = function() {
        function _(s, h, y) {
          this.TAG = "IOController", this._config = h, this._extraData = y, this._stashInitialSize = 65536, h.stashInitialSize != null && h.stashInitialSize > 0 && (this._stashInitialSize = h.stashInitialSize), this._stashUsed = 0, this._stashSize = this._stashInitialSize, this._bufferSize = 3145728, this._stashBuffer = new ArrayBuffer(this._bufferSize), this._stashByteStart = 0, this._enableStash = !0, h.enableStashBuffer === !1 && (this._enableStash = !1), this._loader = null, this._loaderClass = null, this._seekHandler = null, this._dataSource = s, this._isWebSocketURL = /wss?:\/\/(.+?)/.test(s.url), this._refTotalLength = s.filesize ? s.filesize : null, this._totalLength = this._refTotalLength, this._fullRequestFlag = !1, this._currentRange = null, this._redirectedURL = null, this._speedNormalized = 0, this._speedSampler = new R(), this._speedNormalizeList = [32, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096], this._isEarlyEofReconnecting = !1, this._paused = !1, this._resumeFrom = 0, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._selectSeekHandler(), this._selectLoader(), this._createLoader();
        }
        return _.prototype.destroy = function() {
          this._loader.isWorking() && this._loader.abort(), this._loader.destroy(), this._loader = null, this._loaderClass = null, this._dataSource = null, this._stashBuffer = null, this._stashUsed = this._stashSize = this._bufferSize = this._stashByteStart = 0, this._currentRange = null, this._speedSampler = null, this._isEarlyEofReconnecting = !1, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._extraData = null;
        }, _.prototype.isWorking = function() {
          return this._loader && this._loader.isWorking() && !this._paused;
        }, _.prototype.isPaused = function() {
          return this._paused;
        }, Object.defineProperty(_.prototype, "status", { get: function() {
          return this._loader.status;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(_.prototype, "extraData", { get: function() {
          return this._extraData;
        }, set: function(s) {
          this._extraData = s;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(_.prototype, "onDataArrival", { get: function() {
          return this._onDataArrival;
        }, set: function(s) {
          this._onDataArrival = s;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(_.prototype, "onSeeked", { get: function() {
          return this._onSeeked;
        }, set: function(s) {
          this._onSeeked = s;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(_.prototype, "onError", { get: function() {
          return this._onError;
        }, set: function(s) {
          this._onError = s;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(_.prototype, "onComplete", { get: function() {
          return this._onComplete;
        }, set: function(s) {
          this._onComplete = s;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(_.prototype, "onRedirect", { get: function() {
          return this._onRedirect;
        }, set: function(s) {
          this._onRedirect = s;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(_.prototype, "onRecoveredEarlyEof", { get: function() {
          return this._onRecoveredEarlyEof;
        }, set: function(s) {
          this._onRecoveredEarlyEof = s;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(_.prototype, "currentURL", { get: function() {
          return this._dataSource.url;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(_.prototype, "hasRedirect", { get: function() {
          return this._redirectedURL != null || this._dataSource.redirectedURL != null;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(_.prototype, "currentRedirectedURL", { get: function() {
          return this._redirectedURL || this._dataSource.redirectedURL;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(_.prototype, "currentSpeed", { get: function() {
          return this._loaderClass === A ? this._loader.currentSpeed : this._speedSampler.lastSecondKBps;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(_.prototype, "loaderType", { get: function() {
          return this._loader.type;
        }, enumerable: !1, configurable: !0 }), _.prototype._selectSeekHandler = function() {
          var s = this._config;
          if (s.seekType === "range")
            this._seekHandler = new p(this._config.rangeLoadZeroStart);
          else if (s.seekType === "param") {
            var h = s.seekParamStart || "bstart", y = s.seekParamEnd || "bend";
            this._seekHandler = new n(h, y);
          } else {
            if (s.seekType !== "custom")
              throw new d.b("Invalid seekType in config: " + s.seekType);
            if (typeof s.customSeekHandler != "function")
              throw new d.b("Custom seekType specified in config but invalid customSeekHandler!");
            this._seekHandler = new s.customSeekHandler();
          }
        }, _.prototype._selectLoader = function() {
          if (this._config.customLoader != null)
            this._loaderClass = this._config.customLoader;
          else if (this._isWebSocketURL)
            this._loaderClass = c;
          else if (l.isSupported())
            this._loaderClass = l;
          else if (f.isSupported())
            this._loaderClass = f;
          else {
            if (!A.isSupported())
              throw new d.d("Your browser doesn't support xhr with arraybuffer responseType!");
            this._loaderClass = A;
          }
        }, _.prototype._createLoader = function() {
          this._loader = new this._loaderClass(this._seekHandler, this._config), this._loader.needStashBuffer === !1 && (this._enableStash = !1), this._loader.onContentLengthKnown = this._onContentLengthKnown.bind(this), this._loader.onURLRedirect = this._onURLRedirect.bind(this), this._loader.onDataArrival = this._onLoaderChunkArrival.bind(this), this._loader.onComplete = this._onLoaderComplete.bind(this), this._loader.onError = this._onLoaderError.bind(this);
        }, _.prototype.open = function(s) {
          this._currentRange = { from: 0, to: -1 }, s && (this._currentRange.from = s), this._speedSampler.reset(), s || (this._fullRequestFlag = !0), this._loader.open(this._dataSource, Object.assign({}, this._currentRange));
        }, _.prototype.abort = function() {
          this._loader.abort(), this._paused && (this._paused = !1, this._resumeFrom = 0);
        }, _.prototype.pause = function() {
          this.isWorking() && (this._loader.abort(), this._stashUsed !== 0 ? (this._resumeFrom = this._stashByteStart, this._currentRange.to = this._stashByteStart - 1) : this._resumeFrom = this._currentRange.to + 1, this._stashUsed = 0, this._stashByteStart = 0, this._paused = !0);
        }, _.prototype.resume = function() {
          if (this._paused) {
            this._paused = !1;
            var s = this._resumeFrom;
            this._resumeFrom = 0, this._internalSeek(s, !0);
          }
        }, _.prototype.seek = function(s) {
          this._paused = !1, this._stashUsed = 0, this._stashByteStart = 0, this._internalSeek(s, !0);
        }, _.prototype._internalSeek = function(s, h) {
          this._loader.isWorking() && this._loader.abort(), this._flushStashBuffer(h), this._loader.destroy(), this._loader = null;
          var y = { from: s, to: -1 };
          this._currentRange = { from: y.from, to: -1 }, this._speedSampler.reset(), this._stashSize = this._stashInitialSize, this._createLoader(), this._loader.open(this._dataSource, y), this._onSeeked && this._onSeeked();
        }, _.prototype.updateUrl = function(s) {
          if (!s || typeof s != "string" || s.length === 0)
            throw new d.b("Url must be a non-empty string!");
          this._dataSource.url = s;
        }, _.prototype._expandBuffer = function(s) {
          for (var h = this._stashSize; h + 1048576 < s; )
            h *= 2;
          if ((h += 1048576) !== this._bufferSize) {
            var y = new ArrayBuffer(h);
            if (this._stashUsed > 0) {
              var x = new Uint8Array(this._stashBuffer, 0, this._stashUsed);
              new Uint8Array(y, 0, h).set(x, 0);
            }
            this._stashBuffer = y, this._bufferSize = h;
          }
        }, _.prototype._normalizeSpeed = function(s) {
          var h = this._speedNormalizeList, y = h.length - 1, x = 0, O = 0, T = y;
          if (s < h[0])
            return h[0];
          for (; O <= T; ) {
            if ((x = O + Math.floor((T - O) / 2)) === y || s >= h[x] && s < h[x + 1])
              return h[x];
            h[x] < s ? O = x + 1 : T = x - 1;
          }
        }, _.prototype._adjustStashSize = function(s) {
          var h = 0;
          (h = this._config.isLive ? s / 8 : s < 512 ? s : s >= 512 && s <= 1024 ? Math.floor(1.5 * s) : 2 * s) > 8192 && (h = 8192);
          var y = 1024 * h + 1048576;
          this._bufferSize < y && this._expandBuffer(y), this._stashSize = 1024 * h;
        }, _.prototype._dispatchChunks = function(s, h) {
          return this._currentRange.to = h + s.byteLength - 1, this._onDataArrival(s, h);
        }, _.prototype._onURLRedirect = function(s) {
          this._redirectedURL = s, this._onRedirect && this._onRedirect(s);
        }, _.prototype._onContentLengthKnown = function(s) {
          s && this._fullRequestFlag && (this._totalLength = s, this._fullRequestFlag = !1);
        }, _.prototype._onLoaderChunkArrival = function(s, h, y) {
          if (!this._onDataArrival)
            throw new d.a("IOController: No existing consumer (onDataArrival) callback!");
          if (!this._paused) {
            this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, this._onRecoveredEarlyEof && this._onRecoveredEarlyEof()), this._speedSampler.addBytes(s.byteLength);
            var x = this._speedSampler.lastSecondKBps;
            if (x !== 0) {
              var O = this._normalizeSpeed(x);
              this._speedNormalized !== O && (this._speedNormalized = O, this._adjustStashSize(O));
            }
            if (this._enableStash)
              if (this._stashUsed === 0 && this._stashByteStart === 0 && (this._stashByteStart = h), this._stashUsed + s.byteLength <= this._stashSize)
                (F = new Uint8Array(this._stashBuffer, 0, this._stashSize)).set(new Uint8Array(s), this._stashUsed), this._stashUsed += s.byteLength;
              else if (F = new Uint8Array(this._stashBuffer, 0, this._bufferSize), this._stashUsed > 0) {
                var T = this._stashBuffer.slice(0, this._stashUsed);
                (W = this._dispatchChunks(T, this._stashByteStart)) < T.byteLength ? W > 0 && (K = new Uint8Array(T, W), F.set(K, 0), this._stashUsed = K.byteLength, this._stashByteStart += W) : (this._stashUsed = 0, this._stashByteStart += W), this._stashUsed + s.byteLength > this._bufferSize && (this._expandBuffer(this._stashUsed + s.byteLength), F = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), F.set(new Uint8Array(s), this._stashUsed), this._stashUsed += s.byteLength;
              } else
                (W = this._dispatchChunks(s, h)) < s.byteLength && ((I = s.byteLength - W) > this._bufferSize && (this._expandBuffer(I), F = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), F.set(new Uint8Array(s, W), 0), this._stashUsed += I, this._stashByteStart = h + W);
            else if (this._stashUsed === 0) {
              var I;
              (W = this._dispatchChunks(s, h)) < s.byteLength && ((I = s.byteLength - W) > this._bufferSize && this._expandBuffer(I), (F = new Uint8Array(this._stashBuffer, 0, this._bufferSize)).set(new Uint8Array(s, W), 0), this._stashUsed += I, this._stashByteStart = h + W);
            } else {
              var F, W;
              if (this._stashUsed + s.byteLength > this._bufferSize && this._expandBuffer(this._stashUsed + s.byteLength), (F = new Uint8Array(this._stashBuffer, 0, this._bufferSize)).set(new Uint8Array(s), this._stashUsed), this._stashUsed += s.byteLength, (W = this._dispatchChunks(this._stashBuffer.slice(0, this._stashUsed), this._stashByteStart)) < this._stashUsed && W > 0) {
                var K = new Uint8Array(this._stashBuffer, W);
                F.set(K, 0);
              }
              this._stashUsed -= W, this._stashByteStart += W;
            }
          }
        }, _.prototype._flushStashBuffer = function(s) {
          if (this._stashUsed > 0) {
            var h = this._stashBuffer.slice(0, this._stashUsed), y = this._dispatchChunks(h, this._stashByteStart), x = h.byteLength - y;
            if (y < h.byteLength) {
              if (!s) {
                if (y > 0) {
                  var O = new Uint8Array(this._stashBuffer, 0, this._bufferSize), T = new Uint8Array(h, y);
                  O.set(T, 0), this._stashUsed = T.byteLength, this._stashByteStart += y;
                }
                return 0;
              }
              U.a.w(this.TAG, x + " bytes unconsumed data remain when flush buffer, dropped");
            }
            return this._stashUsed = 0, this._stashByteStart = 0, x;
          }
          return 0;
        }, _.prototype._onLoaderComplete = function(s, h) {
          this._flushStashBuffer(!0), this._onComplete && this._onComplete(this._extraData);
        }, _.prototype._onLoaderError = function(s, h) {
          switch (U.a.e(this.TAG, "Loader error, code = " + h.code + ", msg = " + h.msg), this._flushStashBuffer(!1), this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, s = S.b.UNRECOVERABLE_EARLY_EOF), s) {
            case S.b.EARLY_EOF:
              if (!this._config.isLive && this._totalLength) {
                var y = this._currentRange.to + 1;
                return void (y < this._totalLength && (U.a.w(this.TAG, "Connection lost, trying reconnect..."), this._isEarlyEofReconnecting = !0, this._internalSeek(y, !1)));
              }
              s = S.b.UNRECOVERABLE_EARLY_EOF;
              break;
            case S.b.UNRECOVERABLE_EARLY_EOF:
            case S.b.CONNECTING_TIMEOUT:
            case S.b.HTTP_STATUS_CODE_INVALID:
            case S.b.EXCEPTION:
          }
          if (!this._onError)
            throw new d.d("IOException: " + h.msg);
          this._onError(s, h);
        }, _;
      }();
      J.a = a;
    }, function(de, J, z) {
      var Y = function() {
        function U() {
        }
        return U.install = function() {
          Object.setPrototypeOf = Object.setPrototypeOf || function(R, S) {
            return R.__proto__ = S, R;
          }, Object.assign = Object.assign || function(R) {
            if (R == null)
              throw new TypeError("Cannot convert undefined or null to object");
            for (var S = Object(R), L = 1; L < arguments.length; L++) {
              var d = arguments[L];
              if (d != null)
                for (var o in d)
                  d.hasOwnProperty(o) && (S[o] = d[o]);
            }
            return S;
          }, typeof self.Promise != "function" && z(15).polyfill();
        }, U;
      }();
      Y.install(), J.a = Y;
    }, function(de, J, z) {
      function Y(L) {
        var d = {};
        function o(m) {
          if (d[m])
            return d[m].exports;
          var f = d[m] = { i: m, l: !1, exports: {} };
          return L[m].call(f.exports, f, f.exports, o), f.l = !0, f.exports;
        }
        o.m = L, o.c = d, o.i = function(m) {
          return m;
        }, o.d = function(m, f, v) {
          o.o(m, f) || Object.defineProperty(m, f, { configurable: !1, enumerable: !0, get: v });
        }, o.r = function(m) {
          Object.defineProperty(m, "__esModule", { value: !0 });
        }, o.n = function(m) {
          var f = m && m.__esModule ? function() {
            return m.default;
          } : function() {
            return m;
          };
          return o.d(f, "a", f), f;
        }, o.o = function(m, f) {
          return Object.prototype.hasOwnProperty.call(m, f);
        }, o.p = "/", o.oe = function(m) {
          throw console.error(m), m;
        };
        var l = o(o.s = ENTRY_MODULE);
        return l.default || l;
      }
      function U(L) {
        return (L + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
      }
      function R(L, d, o) {
        var l = {};
        l[o] = [];
        var m = d.toString(), f = m.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
        if (!f)
          return l;
        for (var v, A = f[1], g = new RegExp("(\\\\n|\\W)" + U(A) + "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)", "g"); v = g.exec(m); )
          v[3] !== "dll-reference" && l[o].push(v[3]);
        for (g = new RegExp("\\(" + U(A) + '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)', "g"); v = g.exec(m); )
          L[v[2]] || (l[o].push(v[1]), L[v[2]] = z(v[1]).m), l[v[2]] = l[v[2]] || [], l[v[2]].push(v[4]);
        for (var c, p = Object.keys(l), n = 0; n < p.length; n++)
          for (var a = 0; a < l[p[n]].length; a++)
            c = l[p[n]][a], isNaN(1 * c) || (l[p[n]][a] = 1 * l[p[n]][a]);
        return l;
      }
      function S(L) {
        return Object.keys(L).reduce(function(d, o) {
          return d || L[o].length > 0;
        }, !1);
      }
      de.exports = function(L, d) {
        d = d || {};
        var o = { main: z.m }, l = d.all ? { main: Object.keys(o.main) } : function(g, c) {
          for (var p = { main: [c] }, n = { main: [] }, a = { main: {} }; S(p); )
            for (var _ = Object.keys(p), s = 0; s < _.length; s++) {
              var h = _[s], y = p[h].pop();
              if (a[h] = a[h] || {}, !a[h][y] && g[h][y]) {
                a[h][y] = !0, n[h] = n[h] || [], n[h].push(y);
                for (var x = R(g, g[h][y], h), O = Object.keys(x), T = 0; T < O.length; T++)
                  p[O[T]] = p[O[T]] || [], p[O[T]] = p[O[T]].concat(x[O[T]]);
              }
            }
          return n;
        }(o, L), m = "";
        Object.keys(l).filter(function(g) {
          return g !== "main";
        }).forEach(function(g) {
          for (var c = 0; l[g][c]; )
            c++;
          l[g].push(c), o[g][c] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", m = m + "var " + g + " = (" + Y.toString().replace("ENTRY_MODULE", JSON.stringify(c)) + ")({" + l[g].map(function(p) {
            return JSON.stringify(p) + ": " + o[g][p].toString();
          }).join(",") + `});
`;
        }), m = m + "new ((" + Y.toString().replace("ENTRY_MODULE", JSON.stringify(L)) + ")({" + l.main.map(function(g) {
          return JSON.stringify(g) + ": " + o.main[g].toString();
        }).join(",") + "}))(self);";
        var f = new window.Blob([m], { type: "text/javascript" });
        if (d.bare)
          return f;
        var v = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(f), A = new window.Worker(v);
        return A.objectURL = v, A;
      };
    }, function(de, J, z) {
      de.exports = z(19).default;
    }, function(de, J, z) {
      (function(Y, U) {
        /*!
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
         * @version   v4.2.8+1e68dce6
         */
        var R;
        R = function() {
          function S(H) {
            return typeof H == "function";
          }
          var L = Array.isArray ? Array.isArray : function(H) {
            return Object.prototype.toString.call(H) === "[object Array]";
          }, d = 0, o = void 0, l = void 0, m = function(H, $) {
            n[d] = H, n[d + 1] = $, (d += 2) === 2 && (l ? l(a) : x());
          }, f = typeof window < "u" ? window : void 0, v = f || {}, A = v.MutationObserver || v.WebKitMutationObserver, g = typeof self > "u" && Y !== void 0 && {}.toString.call(Y) === "[object process]", c = typeof Uint8ClampedArray < "u" && typeof importScripts < "u" && typeof MessageChannel < "u";
          function p() {
            var H = setTimeout;
            return function() {
              return H(a, 1);
            };
          }
          var n = new Array(1e3);
          function a() {
            for (var H = 0; H < d; H += 2)
              (0, n[H])(n[H + 1]), n[H] = void 0, n[H + 1] = void 0;
            d = 0;
          }
          var _, s, h, y, x = void 0;
          function O(H, $) {
            var ne = this, he = new this.constructor(F);
            he[I] === void 0 && ce(he);
            var pe = ne._state;
            if (pe) {
              var _e = arguments[pe - 1];
              m(function() {
                return oe(pe, he, _e, ne._result);
              });
            } else
              k(ne, he, H, $);
            return he;
          }
          function T(H) {
            if (H && typeof H == "object" && H.constructor === this)
              return H;
            var $ = new this(F);
            return K($, H), $;
          }
          g ? x = function() {
            return Y.nextTick(a);
          } : A ? (s = 0, h = new A(a), y = document.createTextNode(""), h.observe(y, { characterData: !0 }), x = function() {
            y.data = s = ++s % 2;
          }) : c ? ((_ = new MessageChannel()).port1.onmessage = a, x = function() {
            return _.port2.postMessage(0);
          }) : x = f === void 0 ? function() {
            try {
              var H = Function("return this")().require("vertx");
              return (o = H.runOnLoop || H.runOnContext) !== void 0 ? function() {
                o(a);
              } : p();
            } catch {
              return p();
            }
          }() : p();
          var I = Math.random().toString(36).substring(2);
          function F() {
          }
          function W(H, $, ne) {
            $.constructor === H.constructor && ne === O && $.constructor.resolve === T ? function(he, pe) {
              pe._state === 1 ? C(he, pe._result) : pe._state === 2 ? D(he, pe._result) : k(pe, void 0, function(_e) {
                return K(he, _e);
              }, function(_e) {
                return D(he, _e);
              });
            }(H, $) : ne === void 0 ? C(H, $) : S(ne) ? function(he, pe, _e) {
              m(function(ue) {
                var Re = !1, Pe = function(Me, Ke, We, Xe) {
                  try {
                    Me.call(Ke, We, Xe);
                  } catch (Ye) {
                    return Ye;
                  }
                }(_e, pe, function(Me) {
                  Re || (Re = !0, pe !== Me ? K(ue, Me) : C(ue, Me));
                }, function(Me) {
                  Re || (Re = !0, D(ue, Me));
                }, ue._label);
                !Re && Pe && (Re = !0, D(ue, Pe));
              }, he);
            }(H, $, ne) : C(H, $);
          }
          function K(H, $) {
            if (H === $)
              D(H, new TypeError("You cannot resolve a promise with itself"));
            else if (pe = typeof (he = $), he === null || pe !== "object" && pe !== "function")
              C(H, $);
            else {
              var ne = void 0;
              try {
                ne = $.then;
              } catch (_e) {
                return void D(H, _e);
              }
              W(H, $, ne);
            }
            var he, pe;
          }
          function P(H) {
            H._onerror && H._onerror(H._result), Z(H);
          }
          function C(H, $) {
            H._state === void 0 && (H._result = $, H._state = 1, H._subscribers.length !== 0 && m(Z, H));
          }
          function D(H, $) {
            H._state === void 0 && (H._state = 2, H._result = $, m(P, H));
          }
          function k(H, $, ne, he) {
            var pe = H._subscribers, _e = pe.length;
            H._onerror = null, pe[_e] = $, pe[_e + 1] = ne, pe[_e + 2] = he, _e === 0 && H._state && m(Z, H);
          }
          function Z(H) {
            var $ = H._subscribers, ne = H._state;
            if ($.length !== 0) {
              for (var he = void 0, pe = void 0, _e = H._result, ue = 0; ue < $.length; ue += 3)
                he = $[ue], pe = $[ue + ne], he ? oe(ne, he, pe, _e) : pe(_e);
              H._subscribers.length = 0;
            }
          }
          function oe(H, $, ne, he) {
            var pe = S(ne), _e = void 0, ue = void 0, Re = !0;
            if (pe) {
              try {
                _e = ne(he);
              } catch (Pe) {
                Re = !1, ue = Pe;
              }
              if ($ === _e)
                return void D($, new TypeError("A promises callback cannot return that same promise."));
            } else
              _e = he;
            $._state !== void 0 || (pe && Re ? K($, _e) : Re === !1 ? D($, ue) : H === 1 ? C($, _e) : H === 2 && D($, _e));
          }
          var re = 0;
          function ce(H) {
            H[I] = re++, H._state = void 0, H._result = void 0, H._subscribers = [];
          }
          var Ie = function() {
            function H($, ne) {
              this._instanceConstructor = $, this.promise = new $(F), this.promise[I] || ce(this.promise), L(ne) ? (this.length = ne.length, this._remaining = ne.length, this._result = new Array(this.length), this.length === 0 ? C(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(ne), this._remaining === 0 && C(this.promise, this._result))) : D(this.promise, new Error("Array Methods must be provided an Array"));
            }
            return H.prototype._enumerate = function($) {
              for (var ne = 0; this._state === void 0 && ne < $.length; ne++)
                this._eachEntry($[ne], ne);
            }, H.prototype._eachEntry = function($, ne) {
              var he = this._instanceConstructor, pe = he.resolve;
              if (pe === T) {
                var _e = void 0, ue = void 0, Re = !1;
                try {
                  _e = $.then;
                } catch (Me) {
                  Re = !0, ue = Me;
                }
                if (_e === O && $._state !== void 0)
                  this._settledAt($._state, ne, $._result);
                else if (typeof _e != "function")
                  this._remaining--, this._result[ne] = $;
                else if (he === ye) {
                  var Pe = new he(F);
                  Re ? D(Pe, ue) : W(Pe, $, _e), this._willSettleAt(Pe, ne);
                } else
                  this._willSettleAt(new he(function(Me) {
                    return Me($);
                  }), ne);
              } else
                this._willSettleAt(pe($), ne);
            }, H.prototype._settledAt = function($, ne, he) {
              var pe = this.promise;
              pe._state === void 0 && (this._remaining--, $ === 2 ? D(pe, he) : this._result[ne] = he), this._remaining === 0 && C(pe, this._result);
            }, H.prototype._willSettleAt = function($, ne) {
              var he = this;
              k($, void 0, function(pe) {
                return he._settledAt(1, ne, pe);
              }, function(pe) {
                return he._settledAt(2, ne, pe);
              });
            }, H;
          }(), ye = function() {
            function H($) {
              this[I] = re++, this._result = this._state = void 0, this._subscribers = [], F !== $ && (typeof $ != "function" && function() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
              }(), this instanceof H ? function(ne, he) {
                try {
                  he(function(pe) {
                    K(ne, pe);
                  }, function(pe) {
                    D(ne, pe);
                  });
                } catch (pe) {
                  D(ne, pe);
                }
              }(this, $) : function() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
              }());
            }
            return H.prototype.catch = function($) {
              return this.then(null, $);
            }, H.prototype.finally = function($) {
              var ne = this.constructor;
              return S($) ? this.then(function(he) {
                return ne.resolve($()).then(function() {
                  return he;
                });
              }, function(he) {
                return ne.resolve($()).then(function() {
                  throw he;
                });
              }) : this.then($, $);
            }, H;
          }();
          return ye.prototype.then = O, ye.all = function(H) {
            return new Ie(this, H).promise;
          }, ye.race = function(H) {
            var $ = this;
            return L(H) ? new $(function(ne, he) {
              for (var pe = H.length, _e = 0; _e < pe; _e++)
                $.resolve(H[_e]).then(ne, he);
            }) : new $(function(ne, he) {
              return he(new TypeError("You must pass an array to race."));
            });
          }, ye.resolve = T, ye.reject = function(H) {
            var $ = new this(F);
            return D($, H), $;
          }, ye._setScheduler = function(H) {
            l = H;
          }, ye._setAsap = function(H) {
            m = H;
          }, ye._asap = m, ye.polyfill = function() {
            var H = void 0;
            if (U !== void 0)
              H = U;
            else if (typeof self < "u")
              H = self;
            else
              try {
                H = Function("return this")();
              } catch {
                throw new Error("polyfill failed because global object is unavailable in this environment");
              }
            var $ = H.Promise;
            if ($) {
              var ne = null;
              try {
                ne = Object.prototype.toString.call($.resolve());
              } catch {
              }
              if (ne === "[object Promise]" && !$.cast)
                return;
            }
            H.Promise = ye;
          }, ye.Promise = ye, ye;
        }, de.exports = R();
      }).call(this, z(16), z(17));
    }, function(de, J) {
      var z, Y, U = de.exports = {};
      function R() {
        throw new Error("setTimeout has not been defined");
      }
      function S() {
        throw new Error("clearTimeout has not been defined");
      }
      function L(c) {
        if (z === setTimeout)
          return setTimeout(c, 0);
        if ((z === R || !z) && setTimeout)
          return z = setTimeout, setTimeout(c, 0);
        try {
          return z(c, 0);
        } catch {
          try {
            return z.call(null, c, 0);
          } catch {
            return z.call(this, c, 0);
          }
        }
      }
      (function() {
        try {
          z = typeof setTimeout == "function" ? setTimeout : R;
        } catch {
          z = R;
        }
        try {
          Y = typeof clearTimeout == "function" ? clearTimeout : S;
        } catch {
          Y = S;
        }
      })();
      var d, o = [], l = !1, m = -1;
      function f() {
        l && d && (l = !1, d.length ? o = d.concat(o) : m = -1, o.length && v());
      }
      function v() {
        if (!l) {
          var c = L(f);
          l = !0;
          for (var p = o.length; p; ) {
            for (d = o, o = []; ++m < p; )
              d && d[m].run();
            m = -1, p = o.length;
          }
          d = null, l = !1, function(n) {
            if (Y === clearTimeout)
              return clearTimeout(n);
            if ((Y === S || !Y) && clearTimeout)
              return Y = clearTimeout, clearTimeout(n);
            try {
              Y(n);
            } catch {
              try {
                return Y.call(null, n);
              } catch {
                return Y.call(this, n);
              }
            }
          }(c);
        }
      }
      function A(c, p) {
        this.fun = c, this.array = p;
      }
      function g() {
      }
      U.nextTick = function(c) {
        var p = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++)
            p[n - 1] = arguments[n];
        o.push(new A(c, p)), o.length !== 1 || l || L(v);
      }, A.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, U.title = "browser", U.browser = !0, U.env = {}, U.argv = [], U.version = "", U.versions = {}, U.on = g, U.addListener = g, U.once = g, U.off = g, U.removeListener = g, U.removeAllListeners = g, U.emit = g, U.prependListener = g, U.prependOnceListener = g, U.listeners = function(c) {
        return [];
      }, U.binding = function(c) {
        throw new Error("process.binding is not supported");
      }, U.cwd = function() {
        return "/";
      }, U.chdir = function(c) {
        throw new Error("process.chdir is not supported");
      }, U.umask = function() {
        return 0;
      };
    }, function(de, J) {
      var z;
      z = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        z = z || new Function("return this")();
      } catch {
        typeof window == "object" && (z = window);
      }
      de.exports = z;
    }, function(de, J, z) {
      z.r(J);
      var Y = z(9), U = z(12), R = z(10), S = z(1);
      J.default = function(L) {
        var d = null, o = (function(T, I) {
          L.postMessage({ msg: "logcat_callback", data: { type: T, logcat: I } });
        }).bind(this);
        function l(T, I) {
          var F = { msg: S.a.INIT_SEGMENT, data: { type: T, data: I } };
          L.postMessage(F, [I.data]);
        }
        function m(T, I) {
          var F = { msg: S.a.MEDIA_SEGMENT, data: { type: T, data: I } };
          L.postMessage(F, [I.data]);
        }
        function f() {
          var T = { msg: S.a.LOADING_COMPLETE };
          L.postMessage(T);
        }
        function v() {
          var T = { msg: S.a.RECOVERED_EARLY_EOF };
          L.postMessage(T);
        }
        function A(T) {
          var I = { msg: S.a.MEDIA_INFO, data: T };
          L.postMessage(I);
        }
        function g(T) {
          var I = { msg: S.a.METADATA_ARRIVED, data: T };
          L.postMessage(I);
        }
        function c(T) {
          var I = { msg: S.a.SCRIPTDATA_ARRIVED, data: T };
          L.postMessage(I);
        }
        function p(T) {
          var I = { msg: S.a.TIMED_ID3_METADATA_ARRIVED, data: T };
          L.postMessage(I);
        }
        function n(T) {
          var I = { msg: S.a.SMPTE2038_METADATA_ARRIVED, data: T };
          L.postMessage(I);
        }
        function a(T) {
          var I = { msg: S.a.SCTE35_METADATA_ARRIVED, data: T };
          L.postMessage(I);
        }
        function _(T) {
          var I = { msg: S.a.PES_PRIVATE_DATA_DESCRIPTOR, data: T };
          L.postMessage(I);
        }
        function s(T) {
          var I = { msg: S.a.PES_PRIVATE_DATA_ARRIVED, data: T };
          L.postMessage(I);
        }
        function h(T) {
          var I = { msg: S.a.STATISTICS_INFO, data: T };
          L.postMessage(I);
        }
        function y(T, I) {
          L.postMessage({ msg: S.a.IO_ERROR, data: { type: T, info: I } });
        }
        function x(T, I) {
          L.postMessage({ msg: S.a.DEMUX_ERROR, data: { type: T, info: I } });
        }
        function O(T) {
          L.postMessage({ msg: S.a.RECOMMEND_SEEKPOINT, data: T });
        }
        U.a.install(), L.addEventListener("message", function(T) {
          switch (T.data.cmd) {
            case "init":
              (d = new R.a(T.data.param[0], T.data.param[1])).on(S.a.IO_ERROR, y.bind(this)), d.on(S.a.DEMUX_ERROR, x.bind(this)), d.on(S.a.INIT_SEGMENT, l.bind(this)), d.on(S.a.MEDIA_SEGMENT, m.bind(this)), d.on(S.a.LOADING_COMPLETE, f.bind(this)), d.on(S.a.RECOVERED_EARLY_EOF, v.bind(this)), d.on(S.a.MEDIA_INFO, A.bind(this)), d.on(S.a.METADATA_ARRIVED, g.bind(this)), d.on(S.a.SCRIPTDATA_ARRIVED, c.bind(this)), d.on(S.a.TIMED_ID3_METADATA_ARRIVED, p.bind(this)), d.on(S.a.SMPTE2038_METADATA_ARRIVED, n.bind(this)), d.on(S.a.SCTE35_METADATA_ARRIVED, a.bind(this)), d.on(S.a.PES_PRIVATE_DATA_DESCRIPTOR, _.bind(this)), d.on(S.a.PES_PRIVATE_DATA_ARRIVED, s.bind(this)), d.on(S.a.STATISTICS_INFO, h.bind(this)), d.on(S.a.RECOMMEND_SEEKPOINT, O.bind(this));
              break;
            case "destroy":
              d && (d.destroy(), d = null), L.postMessage({ msg: "destroyed" });
              break;
            case "start":
              d.start();
              break;
            case "stop":
              d.stop();
              break;
            case "seek":
              d.seek(T.data.param);
              break;
            case "pause":
              d.pause();
              break;
            case "resume":
              d.resume();
              break;
            case "logging_config":
              var I = T.data.param;
              Y.a.applyConfig(I), I.enableCallback === !0 ? Y.a.addLogListener(o) : Y.a.removeLogListener(o);
          }
        });
      };
    }, function(de, J, z) {
      z.r(J);
      var Y = z(12), U = z(11), R = { enableWorker: !1, enableStashBuffer: !0, stashInitialSize: void 0, isLive: !1, liveBufferLatencyChasing: !1, liveBufferLatencyMaxLatency: 1.5, liveBufferLatencyMinRemain: 0.5, lazyLoad: !0, lazyLoadMaxDuration: 180, lazyLoadRecoverDuration: 30, deferLoadAfterSourceOpen: !0, autoCleanupMaxBackwardDuration: 180, autoCleanupMinBackwardDuration: 120, statisticsInfoReportInterval: 600, fixAudioTimestampGap: !0, accurateSeek: !1, seekType: "range", seekParamStart: "bstart", seekParamEnd: "bend", rangeLoadZeroStart: !1, customSeekHandler: void 0, reuseRedirectedURL: !1, headers: void 0, customLoader: void 0 };
      function S() {
        return Object.assign({}, R);
      }
      var L = function() {
        function P() {
        }
        return P.supportMSEH264Playback = function() {
          return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
        }, P.supportMSEH265Playback = function() {
          return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="hvc1.1.6.L93.B0"');
        }, P.supportNetworkStreamIO = function() {
          var C = new U.a({}, S()), D = C.loaderType;
          return C.destroy(), D == "fetch-stream-loader" || D == "xhr-moz-chunked-loader";
        }, P.getNetworkLoaderTypeName = function() {
          var C = new U.a({}, S()), D = C.loaderType;
          return C.destroy(), D;
        }, P.supportNativeMediaPlayback = function(C) {
          P.videoElement == null && (P.videoElement = window.document.createElement("video"));
          var D = P.videoElement.canPlayType(C);
          return D === "probably" || D == "maybe";
        }, P.getFeatureList = function() {
          var C = { msePlayback: !1, mseLivePlayback: !1, mseH265Playback: !1, networkStreamIO: !1, networkLoaderName: "", nativeMP4H264Playback: !1, nativeMP4H265Playback: !1, nativeWebmVP8Playback: !1, nativeWebmVP9Playback: !1 };
          return C.msePlayback = P.supportMSEH264Playback(), C.networkStreamIO = P.supportNetworkStreamIO(), C.networkLoaderName = P.getNetworkLoaderTypeName(), C.mseLivePlayback = C.msePlayback && C.networkStreamIO, C.mseH265Playback = P.supportMSEH265Playback(), C.nativeMP4H264Playback = P.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"'), C.nativeMP4H265Playback = P.supportNativeMediaPlayback('video/mp4; codecs="hvc1.1.6.L93.B0"'), C.nativeWebmVP8Playback = P.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"'), C.nativeWebmVP9Playback = P.supportNativeMediaPlayback('video/webm; codecs="vp9"'), C;
        }, P;
      }(), d = z(2), o = z(6), l = z.n(o), m = z(0), f = z(4), v = { ERROR: "error", LOADING_COMPLETE: "loading_complete", RECOVERED_EARLY_EOF: "recovered_early_eof", MEDIA_INFO: "media_info", METADATA_ARRIVED: "metadata_arrived", SCRIPTDATA_ARRIVED: "scriptdata_arrived", TIMED_ID3_METADATA_ARRIVED: "timed_id3_metadata_arrived", SMPTE2038_METADATA_ARRIVED: "smpte2038_metadata_arrived", SCTE35_METADATA_ARRIVED: "scte35_metadata_arrived", PES_PRIVATE_DATA_DESCRIPTOR: "pes_private_data_descriptor", PES_PRIVATE_DATA_ARRIVED: "pes_private_data_arrived", STATISTICS_INFO: "statistics_info" }, A = z(13), g = z.n(A), c = z(9), p = z(10), n = z(1), a = z(8), _ = function() {
        function P(C, D) {
          if (this.TAG = "Transmuxer", this._emitter = new l.a(), D.enableWorker && typeof Worker < "u")
            try {
              this._worker = g()(18), this._workerDestroying = !1, this._worker.addEventListener("message", this._onWorkerMessage.bind(this)), this._worker.postMessage({ cmd: "init", param: [C, D] }), this.e = { onLoggingConfigChanged: this._onLoggingConfigChanged.bind(this) }, c.a.registerListener(this.e.onLoggingConfigChanged), this._worker.postMessage({ cmd: "logging_config", param: c.a.getConfig() });
            } catch {
              m.a.e(this.TAG, "Error while initialize transmuxing worker, fallback to inline transmuxing"), this._worker = null, this._controller = new p.a(C, D);
            }
          else
            this._controller = new p.a(C, D);
          if (this._controller) {
            var k = this._controller;
            k.on(n.a.IO_ERROR, this._onIOError.bind(this)), k.on(n.a.DEMUX_ERROR, this._onDemuxError.bind(this)), k.on(n.a.INIT_SEGMENT, this._onInitSegment.bind(this)), k.on(n.a.MEDIA_SEGMENT, this._onMediaSegment.bind(this)), k.on(n.a.LOADING_COMPLETE, this._onLoadingComplete.bind(this)), k.on(n.a.RECOVERED_EARLY_EOF, this._onRecoveredEarlyEof.bind(this)), k.on(n.a.MEDIA_INFO, this._onMediaInfo.bind(this)), k.on(n.a.METADATA_ARRIVED, this._onMetaDataArrived.bind(this)), k.on(n.a.SCRIPTDATA_ARRIVED, this._onScriptDataArrived.bind(this)), k.on(n.a.TIMED_ID3_METADATA_ARRIVED, this._onTimedID3MetadataArrived.bind(this)), k.on(n.a.SMPTE2038_METADATA_ARRIVED, this._onSMPTE2038MetadataArrived.bind(this)), k.on(n.a.SCTE35_METADATA_ARRIVED, this._onSCTE35MetadataArrived.bind(this)), k.on(n.a.PES_PRIVATE_DATA_DESCRIPTOR, this._onPESPrivateDataDescriptor.bind(this)), k.on(n.a.PES_PRIVATE_DATA_ARRIVED, this._onPESPrivateDataArrived.bind(this)), k.on(n.a.STATISTICS_INFO, this._onStatisticsInfo.bind(this)), k.on(n.a.RECOMMEND_SEEKPOINT, this._onRecommendSeekpoint.bind(this));
          }
        }
        return P.prototype.destroy = function() {
          this._worker ? this._workerDestroying || (this._workerDestroying = !0, this._worker.postMessage({ cmd: "destroy" }), c.a.removeListener(this.e.onLoggingConfigChanged), this.e = null) : (this._controller.destroy(), this._controller = null), this._emitter.removeAllListeners(), this._emitter = null;
        }, P.prototype.on = function(C, D) {
          this._emitter.addListener(C, D);
        }, P.prototype.off = function(C, D) {
          this._emitter.removeListener(C, D);
        }, P.prototype.hasWorker = function() {
          return this._worker != null;
        }, P.prototype.open = function() {
          this._worker ? this._worker.postMessage({ cmd: "start" }) : this._controller.start();
        }, P.prototype.close = function() {
          this._worker ? this._worker.postMessage({ cmd: "stop" }) : this._controller.stop();
        }, P.prototype.seek = function(C) {
          this._worker ? this._worker.postMessage({ cmd: "seek", param: C }) : this._controller.seek(C);
        }, P.prototype.pause = function() {
          this._worker ? this._worker.postMessage({ cmd: "pause" }) : this._controller.pause();
        }, P.prototype.resume = function() {
          this._worker ? this._worker.postMessage({ cmd: "resume" }) : this._controller.resume();
        }, P.prototype._onInitSegment = function(C, D) {
          var k = this;
          Promise.resolve().then(function() {
            k._emitter.emit(n.a.INIT_SEGMENT, C, D);
          });
        }, P.prototype._onMediaSegment = function(C, D) {
          var k = this;
          Promise.resolve().then(function() {
            k._emitter.emit(n.a.MEDIA_SEGMENT, C, D);
          });
        }, P.prototype._onLoadingComplete = function() {
          var C = this;
          Promise.resolve().then(function() {
            C._emitter.emit(n.a.LOADING_COMPLETE);
          });
        }, P.prototype._onRecoveredEarlyEof = function() {
          var C = this;
          Promise.resolve().then(function() {
            C._emitter.emit(n.a.RECOVERED_EARLY_EOF);
          });
        }, P.prototype._onMediaInfo = function(C) {
          var D = this;
          Promise.resolve().then(function() {
            D._emitter.emit(n.a.MEDIA_INFO, C);
          });
        }, P.prototype._onMetaDataArrived = function(C) {
          var D = this;
          Promise.resolve().then(function() {
            D._emitter.emit(n.a.METADATA_ARRIVED, C);
          });
        }, P.prototype._onScriptDataArrived = function(C) {
          var D = this;
          Promise.resolve().then(function() {
            D._emitter.emit(n.a.SCRIPTDATA_ARRIVED, C);
          });
        }, P.prototype._onTimedID3MetadataArrived = function(C) {
          var D = this;
          Promise.resolve().then(function() {
            D._emitter.emit(n.a.TIMED_ID3_METADATA_ARRIVED, C);
          });
        }, P.prototype._onSMPTE2038MetadataArrived = function(C) {
          var D = this;
          Promise.resolve().then(function() {
            D._emitter.emit(n.a.SMPTE2038_METADATA_ARRIVED, C);
          });
        }, P.prototype._onSCTE35MetadataArrived = function(C) {
          var D = this;
          Promise.resolve().then(function() {
            D._emitter.emit(n.a.SCTE35_METADATA_ARRIVED, C);
          });
        }, P.prototype._onPESPrivateDataDescriptor = function(C) {
          var D = this;
          Promise.resolve().then(function() {
            D._emitter.emit(n.a.PES_PRIVATE_DATA_DESCRIPTOR, C);
          });
        }, P.prototype._onPESPrivateDataArrived = function(C) {
          var D = this;
          Promise.resolve().then(function() {
            D._emitter.emit(n.a.PES_PRIVATE_DATA_ARRIVED, C);
          });
        }, P.prototype._onStatisticsInfo = function(C) {
          var D = this;
          Promise.resolve().then(function() {
            D._emitter.emit(n.a.STATISTICS_INFO, C);
          });
        }, P.prototype._onIOError = function(C, D) {
          var k = this;
          Promise.resolve().then(function() {
            k._emitter.emit(n.a.IO_ERROR, C, D);
          });
        }, P.prototype._onDemuxError = function(C, D) {
          var k = this;
          Promise.resolve().then(function() {
            k._emitter.emit(n.a.DEMUX_ERROR, C, D);
          });
        }, P.prototype._onRecommendSeekpoint = function(C) {
          var D = this;
          Promise.resolve().then(function() {
            D._emitter.emit(n.a.RECOMMEND_SEEKPOINT, C);
          });
        }, P.prototype._onLoggingConfigChanged = function(C) {
          this._worker && this._worker.postMessage({ cmd: "logging_config", param: C });
        }, P.prototype._onWorkerMessage = function(C) {
          var D = C.data, k = D.data;
          if (D.msg === "destroyed" || this._workerDestroying)
            return this._workerDestroying = !1, this._worker.terminate(), void (this._worker = null);
          switch (D.msg) {
            case n.a.INIT_SEGMENT:
            case n.a.MEDIA_SEGMENT:
              this._emitter.emit(D.msg, k.type, k.data);
              break;
            case n.a.LOADING_COMPLETE:
            case n.a.RECOVERED_EARLY_EOF:
              this._emitter.emit(D.msg);
              break;
            case n.a.MEDIA_INFO:
              Object.setPrototypeOf(k, a.a.prototype), this._emitter.emit(D.msg, k);
              break;
            case n.a.METADATA_ARRIVED:
            case n.a.SCRIPTDATA_ARRIVED:
            case n.a.TIMED_ID3_METADATA_ARRIVED:
            case n.a.SMPTE2038_METADATA_ARRIVED:
            case n.a.SCTE35_METADATA_ARRIVED:
            case n.a.PES_PRIVATE_DATA_DESCRIPTOR:
            case n.a.PES_PRIVATE_DATA_ARRIVED:
            case n.a.STATISTICS_INFO:
              this._emitter.emit(D.msg, k);
              break;
            case n.a.IO_ERROR:
            case n.a.DEMUX_ERROR:
              this._emitter.emit(D.msg, k.type, k.info);
              break;
            case n.a.RECOMMEND_SEEKPOINT:
              this._emitter.emit(D.msg, k);
              break;
            case "logcat_callback":
              m.a.emitter.emit("log", k.type, k.logcat);
          }
        }, P;
      }(), s = { ERROR: "error", SOURCE_OPEN: "source_open", UPDATE_END: "update_end", BUFFER_FULL: "buffer_full" }, h = z(7), y = z(3), x = function() {
        function P(C) {
          this.TAG = "MSEController", this._config = C, this._emitter = new l.a(), this._config.isLive && this._config.autoCleanupSourceBuffer == null && (this._config.autoCleanupSourceBuffer = !0), this.e = { onSourceOpen: this._onSourceOpen.bind(this), onSourceEnded: this._onSourceEnded.bind(this), onSourceClose: this._onSourceClose.bind(this), onSourceBufferError: this._onSourceBufferError.bind(this), onSourceBufferUpdateEnd: this._onSourceBufferUpdateEnd.bind(this) }, this._mediaSource = null, this._mediaSourceObjectURL = null, this._mediaElement = null, this._isBufferFull = !1, this._hasPendingEos = !1, this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0, this._pendingSourceBufferInit = [], this._mimeTypes = { video: null, audio: null }, this._sourceBuffers = { video: null, audio: null }, this._lastInitSegments = { video: null, audio: null }, this._pendingSegments = { video: [], audio: [] }, this._pendingRemoveRanges = { video: [], audio: [] }, this._idrList = new h.a();
        }
        return P.prototype.destroy = function() {
          (this._mediaElement || this._mediaSource) && this.detachMediaElement(), this.e = null, this._emitter.removeAllListeners(), this._emitter = null;
        }, P.prototype.on = function(C, D) {
          this._emitter.addListener(C, D);
        }, P.prototype.off = function(C, D) {
          this._emitter.removeListener(C, D);
        }, P.prototype.attachMediaElement = function(C) {
          if (this._mediaSource)
            throw new y.a("MediaSource has been attached to an HTMLMediaElement!");
          var D = this._mediaSource = new window.MediaSource();
          D.addEventListener("sourceopen", this.e.onSourceOpen), D.addEventListener("sourceended", this.e.onSourceEnded), D.addEventListener("sourceclose", this.e.onSourceClose), this._mediaElement = C, this._mediaSourceObjectURL = window.URL.createObjectURL(this._mediaSource), C.src = this._mediaSourceObjectURL;
        }, P.prototype.detachMediaElement = function() {
          if (this._mediaSource) {
            var C = this._mediaSource;
            for (var D in this._sourceBuffers) {
              var k = this._pendingSegments[D];
              k.splice(0, k.length), this._pendingSegments[D] = null, this._pendingRemoveRanges[D] = null, this._lastInitSegments[D] = null;
              var Z = this._sourceBuffers[D];
              if (Z) {
                if (C.readyState !== "closed") {
                  try {
                    C.removeSourceBuffer(Z);
                  } catch (oe) {
                    m.a.e(this.TAG, oe.message);
                  }
                  Z.removeEventListener("error", this.e.onSourceBufferError), Z.removeEventListener("updateend", this.e.onSourceBufferUpdateEnd);
                }
                this._mimeTypes[D] = null, this._sourceBuffers[D] = null;
              }
            }
            if (C.readyState === "open")
              try {
                C.endOfStream();
              } catch (oe) {
                m.a.e(this.TAG, oe.message);
              }
            C.removeEventListener("sourceopen", this.e.onSourceOpen), C.removeEventListener("sourceended", this.e.onSourceEnded), C.removeEventListener("sourceclose", this.e.onSourceClose), this._pendingSourceBufferInit = [], this._isBufferFull = !1, this._idrList.clear(), this._mediaSource = null;
          }
          this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement = null), this._mediaSourceObjectURL && (window.URL.revokeObjectURL(this._mediaSourceObjectURL), this._mediaSourceObjectURL = null);
        }, P.prototype.appendInitSegment = function(C, D) {
          if (!this._mediaSource || this._mediaSource.readyState !== "open")
            return this._pendingSourceBufferInit.push(C), void this._pendingSegments[C.type].push(C);
          var k = C, Z = "" + k.container;
          k.codec && k.codec.length > 0 && (Z += ";codecs=" + k.codec);
          var oe = !1;
          if (m.a.v(this.TAG, "Received Initialization Segment, mimeType: " + Z), this._lastInitSegments[k.type] = k, Z !== this._mimeTypes[k.type]) {
            if (this._mimeTypes[k.type])
              m.a.v(this.TAG, "Notice: " + k.type + " mimeType changed, origin: " + this._mimeTypes[k.type] + ", target: " + Z);
            else {
              oe = !0;
              try {
                var re = this._sourceBuffers[k.type] = this._mediaSource.addSourceBuffer(Z);
                re.addEventListener("error", this.e.onSourceBufferError), re.addEventListener("updateend", this.e.onSourceBufferUpdateEnd);
              } catch (ce) {
                return m.a.e(this.TAG, ce.message), void this._emitter.emit(s.ERROR, { code: ce.code, msg: ce.message });
              }
            }
            this._mimeTypes[k.type] = Z;
          }
          D || this._pendingSegments[k.type].push(k), oe || this._sourceBuffers[k.type] && !this._sourceBuffers[k.type].updating && this._doAppendSegments(), f.a.safari && k.container === "audio/mpeg" && k.mediaDuration > 0 && (this._requireSetMediaDuration = !0, this._pendingMediaDuration = k.mediaDuration / 1e3, this._updateMediaSourceDuration());
        }, P.prototype.appendMediaSegment = function(C) {
          var D = C;
          this._pendingSegments[D.type].push(D), this._config.autoCleanupSourceBuffer && this._needCleanupSourceBuffer() && this._doCleanupSourceBuffer();
          var k = this._sourceBuffers[D.type];
          !k || k.updating || this._hasPendingRemoveRanges() || this._doAppendSegments();
        }, P.prototype.seek = function(C) {
          for (var D in this._sourceBuffers)
            if (this._sourceBuffers[D]) {
              var k = this._sourceBuffers[D];
              if (this._mediaSource.readyState === "open")
                try {
                  k.abort();
                } catch (ye) {
                  m.a.e(this.TAG, ye.message);
                }
              this._idrList.clear();
              var Z = this._pendingSegments[D];
              if (Z.splice(0, Z.length), this._mediaSource.readyState !== "closed") {
                for (var oe = 0; oe < k.buffered.length; oe++) {
                  var re = k.buffered.start(oe), ce = k.buffered.end(oe);
                  this._pendingRemoveRanges[D].push({ start: re, end: ce });
                }
                if (k.updating || this._doRemoveRanges(), f.a.safari) {
                  var Ie = this._lastInitSegments[D];
                  Ie && (this._pendingSegments[D].push(Ie), k.updating || this._doAppendSegments());
                }
              }
            }
        }, P.prototype.endOfStream = function() {
          var C = this._mediaSource, D = this._sourceBuffers;
          C && C.readyState === "open" ? D.video && D.video.updating || D.audio && D.audio.updating ? this._hasPendingEos = !0 : (this._hasPendingEos = !1, C.endOfStream()) : C && C.readyState === "closed" && this._hasPendingSegments() && (this._hasPendingEos = !0);
        }, P.prototype.getNearestKeyframe = function(C) {
          return this._idrList.getLastSyncPointBeforeDts(C);
        }, P.prototype._needCleanupSourceBuffer = function() {
          if (!this._config.autoCleanupSourceBuffer)
            return !1;
          var C = this._mediaElement.currentTime;
          for (var D in this._sourceBuffers) {
            var k = this._sourceBuffers[D];
            if (k) {
              var Z = k.buffered;
              if (Z.length >= 1 && C - Z.start(0) >= this._config.autoCleanupMaxBackwardDuration)
                return !0;
            }
          }
          return !1;
        }, P.prototype._doCleanupSourceBuffer = function() {
          var C = this._mediaElement.currentTime;
          for (var D in this._sourceBuffers) {
            var k = this._sourceBuffers[D];
            if (k) {
              for (var Z = k.buffered, oe = !1, re = 0; re < Z.length; re++) {
                var ce = Z.start(re), Ie = Z.end(re);
                if (ce <= C && C < Ie + 3) {
                  if (C - ce >= this._config.autoCleanupMaxBackwardDuration) {
                    oe = !0;
                    var ye = C - this._config.autoCleanupMinBackwardDuration;
                    this._pendingRemoveRanges[D].push({ start: ce, end: ye });
                  }
                } else
                  Ie < C && (oe = !0, this._pendingRemoveRanges[D].push({ start: ce, end: Ie }));
              }
              oe && !k.updating && this._doRemoveRanges();
            }
          }
        }, P.prototype._updateMediaSourceDuration = function() {
          var C = this._sourceBuffers;
          if (this._mediaElement.readyState !== 0 && this._mediaSource.readyState === "open" && !(C.video && C.video.updating || C.audio && C.audio.updating)) {
            var D = this._mediaSource.duration, k = this._pendingMediaDuration;
            k > 0 && (isNaN(D) || k > D) && (m.a.v(this.TAG, "Update MediaSource duration from " + D + " to " + k), this._mediaSource.duration = k), this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0;
          }
        }, P.prototype._doRemoveRanges = function() {
          for (var C in this._pendingRemoveRanges)
            if (this._sourceBuffers[C] && !this._sourceBuffers[C].updating)
              for (var D = this._sourceBuffers[C], k = this._pendingRemoveRanges[C]; k.length && !D.updating; ) {
                var Z = k.shift();
                D.remove(Z.start, Z.end);
              }
        }, P.prototype._doAppendSegments = function() {
          var C = this._pendingSegments;
          for (var D in C)
            if (this._sourceBuffers[D] && !this._sourceBuffers[D].updating && C[D].length > 0) {
              var k = C[D].shift();
              if (k.timestampOffset) {
                var Z = this._sourceBuffers[D].timestampOffset, oe = k.timestampOffset / 1e3;
                Math.abs(Z - oe) > 0.1 && (m.a.v(this.TAG, "Update MPEG audio timestampOffset from " + Z + " to " + oe), this._sourceBuffers[D].timestampOffset = oe), delete k.timestampOffset;
              }
              if (!k.data || k.data.byteLength === 0)
                continue;
              try {
                this._sourceBuffers[D].appendBuffer(k.data), this._isBufferFull = !1, D === "video" && k.hasOwnProperty("info") && this._idrList.appendArray(k.info.syncPoints);
              } catch (re) {
                this._pendingSegments[D].unshift(k), re.code === 22 ? (this._isBufferFull || this._emitter.emit(s.BUFFER_FULL), this._isBufferFull = !0) : (m.a.e(this.TAG, re.message), this._emitter.emit(s.ERROR, { code: re.code, msg: re.message }));
              }
            }
        }, P.prototype._onSourceOpen = function() {
          if (m.a.v(this.TAG, "MediaSource onSourceOpen"), this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._pendingSourceBufferInit.length > 0)
            for (var C = this._pendingSourceBufferInit; C.length; ) {
              var D = C.shift();
              this.appendInitSegment(D, !0);
            }
          this._hasPendingSegments() && this._doAppendSegments(), this._emitter.emit(s.SOURCE_OPEN);
        }, P.prototype._onSourceEnded = function() {
          m.a.v(this.TAG, "MediaSource onSourceEnded");
        }, P.prototype._onSourceClose = function() {
          m.a.v(this.TAG, "MediaSource onSourceClose"), this._mediaSource && this.e != null && (this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._mediaSource.removeEventListener("sourceended", this.e.onSourceEnded), this._mediaSource.removeEventListener("sourceclose", this.e.onSourceClose));
        }, P.prototype._hasPendingSegments = function() {
          var C = this._pendingSegments;
          return C.video.length > 0 || C.audio.length > 0;
        }, P.prototype._hasPendingRemoveRanges = function() {
          var C = this._pendingRemoveRanges;
          return C.video.length > 0 || C.audio.length > 0;
        }, P.prototype._onSourceBufferUpdateEnd = function() {
          this._requireSetMediaDuration ? this._updateMediaSourceDuration() : this._hasPendingRemoveRanges() ? this._doRemoveRanges() : this._hasPendingSegments() ? this._doAppendSegments() : this._hasPendingEos && this.endOfStream(), this._emitter.emit(s.UPDATE_END);
        }, P.prototype._onSourceBufferError = function(C) {
          m.a.e(this.TAG, "SourceBuffer Error: " + C);
        }, P;
      }(), O = z(5), T = { NETWORK_ERROR: "NetworkError", MEDIA_ERROR: "MediaError", OTHER_ERROR: "OtherError" }, I = { NETWORK_EXCEPTION: d.b.EXCEPTION, NETWORK_STATUS_CODE_INVALID: d.b.HTTP_STATUS_CODE_INVALID, NETWORK_TIMEOUT: d.b.CONNECTING_TIMEOUT, NETWORK_UNRECOVERABLE_EARLY_EOF: d.b.UNRECOVERABLE_EARLY_EOF, MEDIA_MSE_ERROR: "MediaMSEError", MEDIA_FORMAT_ERROR: O.a.FORMAT_ERROR, MEDIA_FORMAT_UNSUPPORTED: O.a.FORMAT_UNSUPPORTED, MEDIA_CODEC_UNSUPPORTED: O.a.CODEC_UNSUPPORTED }, F = function() {
        function P(C, D) {
          this.TAG = "MSEPlayer", this._type = "MSEPlayer", this._emitter = new l.a(), this._config = S(), typeof D == "object" && Object.assign(this._config, D);
          var k = C.type.toLowerCase();
          if (k !== "mse" && k !== "mpegts" && k !== "m2ts" && k !== "flv")
            throw new y.b("MSEPlayer requires an mpegts/m2ts/flv MediaDataSource input!");
          C.isLive === !0 && (this._config.isLive = !0), this.e = { onvLoadedMetadata: this._onvLoadedMetadata.bind(this), onvSeeking: this._onvSeeking.bind(this), onvCanPlay: this._onvCanPlay.bind(this), onvStalled: this._onvStalled.bind(this), onvProgress: this._onvProgress.bind(this) }, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now, this._pendingSeekTime = null, this._requestSetTime = !1, this._seekpointRecord = null, this._progressChecker = null, this._mediaDataSource = C, this._mediaElement = null, this._msectl = null, this._transmuxer = null, this._mseSourceOpened = !1, this._hasPendingLoad = !1, this._receivedCanPlay = !1, this._mediaInfo = null, this._statisticsInfo = null;
          var Z = f.a.chrome && (f.a.version.major < 50 || f.a.version.major === 50 && f.a.version.build < 2661);
          this._alwaysSeekKeyframe = !!(Z || f.a.msedge || f.a.msie), this._alwaysSeekKeyframe && (this._config.accurateSeek = !1);
        }
        return P.prototype.destroy = function() {
          this._progressChecker != null && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._transmuxer && this.unload(), this._mediaElement && this.detachMediaElement(), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null;
        }, P.prototype.on = function(C, D) {
          var k = this;
          C === v.MEDIA_INFO ? this._mediaInfo != null && Promise.resolve().then(function() {
            k._emitter.emit(v.MEDIA_INFO, k.mediaInfo);
          }) : C === v.STATISTICS_INFO && this._statisticsInfo != null && Promise.resolve().then(function() {
            k._emitter.emit(v.STATISTICS_INFO, k.statisticsInfo);
          }), this._emitter.addListener(C, D);
        }, P.prototype.off = function(C, D) {
          this._emitter.removeListener(C, D);
        }, P.prototype.attachMediaElement = function(C) {
          var D = this;
          if (this._mediaElement = C, C.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), C.addEventListener("seeking", this.e.onvSeeking), C.addEventListener("canplay", this.e.onvCanPlay), C.addEventListener("stalled", this.e.onvStalled), C.addEventListener("progress", this.e.onvProgress), this._msectl = new x(this._config), this._msectl.on(s.UPDATE_END, this._onmseUpdateEnd.bind(this)), this._msectl.on(s.BUFFER_FULL, this._onmseBufferFull.bind(this)), this._msectl.on(s.SOURCE_OPEN, function() {
            D._mseSourceOpened = !0, D._hasPendingLoad && (D._hasPendingLoad = !1, D.load());
          }), this._msectl.on(s.ERROR, function(k) {
            D._emitter.emit(v.ERROR, T.MEDIA_ERROR, I.MEDIA_MSE_ERROR, k);
          }), this._msectl.attachMediaElement(C), this._pendingSeekTime != null)
            try {
              C.currentTime = this._pendingSeekTime, this._pendingSeekTime = null;
            } catch {
            }
        }, P.prototype.detachMediaElement = function() {
          this._mediaElement && (this._msectl.detachMediaElement(), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement.removeEventListener("seeking", this.e.onvSeeking), this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay), this._mediaElement.removeEventListener("stalled", this.e.onvStalled), this._mediaElement.removeEventListener("progress", this.e.onvProgress), this._mediaElement = null), this._msectl && (this._msectl.destroy(), this._msectl = null);
        }, P.prototype.load = function() {
          var C = this;
          if (!this._mediaElement)
            throw new y.a("HTMLMediaElement must be attached before load()!");
          if (this._transmuxer)
            throw new y.a("MSEPlayer.load() has been called, please call unload() first!");
          this._hasPendingLoad || (this._config.deferLoadAfterSourceOpen && this._mseSourceOpened === !1 ? this._hasPendingLoad = !0 : (this._mediaElement.readyState > 0 && (this._requestSetTime = !0, this._mediaElement.currentTime = 0), this._transmuxer = new _(this._mediaDataSource, this._config), this._transmuxer.on(n.a.INIT_SEGMENT, function(D, k) {
            C._msectl.appendInitSegment(k);
          }), this._transmuxer.on(n.a.MEDIA_SEGMENT, function(D, k) {
            if (C._msectl.appendMediaSegment(k), C._config.lazyLoad && !C._config.isLive) {
              var Z = C._mediaElement.currentTime;
              k.info.endDts >= 1e3 * (Z + C._config.lazyLoadMaxDuration) && C._progressChecker == null && (m.a.v(C.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), C._suspendTransmuxer());
            }
          }), this._transmuxer.on(n.a.LOADING_COMPLETE, function() {
            C._msectl.endOfStream(), C._emitter.emit(v.LOADING_COMPLETE);
          }), this._transmuxer.on(n.a.RECOVERED_EARLY_EOF, function() {
            C._emitter.emit(v.RECOVERED_EARLY_EOF);
          }), this._transmuxer.on(n.a.IO_ERROR, function(D, k) {
            C._emitter.emit(v.ERROR, T.NETWORK_ERROR, D, k);
          }), this._transmuxer.on(n.a.DEMUX_ERROR, function(D, k) {
            C._emitter.emit(v.ERROR, T.MEDIA_ERROR, D, { code: -1, msg: k });
          }), this._transmuxer.on(n.a.MEDIA_INFO, function(D) {
            C._mediaInfo = D, C._emitter.emit(v.MEDIA_INFO, Object.assign({}, D));
          }), this._transmuxer.on(n.a.METADATA_ARRIVED, function(D) {
            C._emitter.emit(v.METADATA_ARRIVED, D);
          }), this._transmuxer.on(n.a.SCRIPTDATA_ARRIVED, function(D) {
            C._emitter.emit(v.SCRIPTDATA_ARRIVED, D);
          }), this._transmuxer.on(n.a.TIMED_ID3_METADATA_ARRIVED, function(D) {
            C._emitter.emit(v.TIMED_ID3_METADATA_ARRIVED, D);
          }), this._transmuxer.on(n.a.SMPTE2038_METADATA_ARRIVED, function(D) {
            C._emitter.emit(v.SMPTE2038_METADATA_ARRIVED, D);
          }), this._transmuxer.on(n.a.SCTE35_METADATA_ARRIVED, function(D) {
            C._emitter.emit(v.SCTE35_METADATA_ARRIVED, D);
          }), this._transmuxer.on(n.a.PES_PRIVATE_DATA_DESCRIPTOR, function(D) {
            C._emitter.emit(v.PES_PRIVATE_DATA_DESCRIPTOR, D);
          }), this._transmuxer.on(n.a.PES_PRIVATE_DATA_ARRIVED, function(D) {
            C._emitter.emit(v.PES_PRIVATE_DATA_ARRIVED, D);
          }), this._transmuxer.on(n.a.STATISTICS_INFO, function(D) {
            C._statisticsInfo = C._fillStatisticsInfo(D), C._emitter.emit(v.STATISTICS_INFO, Object.assign({}, C._statisticsInfo));
          }), this._transmuxer.on(n.a.RECOMMEND_SEEKPOINT, function(D) {
            C._mediaElement && !C._config.accurateSeek && (C._requestSetTime = !0, C._mediaElement.currentTime = D / 1e3);
          }), this._transmuxer.open()));
        }, P.prototype.unload = function() {
          this._mediaElement && this._mediaElement.pause(), this._msectl && this._msectl.seek(0), this._transmuxer && (this._transmuxer.close(), this._transmuxer.destroy(), this._transmuxer = null);
        }, P.prototype.play = function() {
          return this._mediaElement.play();
        }, P.prototype.pause = function() {
          this._mediaElement.pause();
        }, Object.defineProperty(P.prototype, "type", { get: function() {
          return this._type;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(P.prototype, "buffered", { get: function() {
          return this._mediaElement.buffered;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(P.prototype, "duration", { get: function() {
          return this._mediaElement.duration;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(P.prototype, "volume", { get: function() {
          return this._mediaElement.volume;
        }, set: function(C) {
          this._mediaElement.volume = C;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(P.prototype, "muted", { get: function() {
          return this._mediaElement.muted;
        }, set: function(C) {
          this._mediaElement.muted = C;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(P.prototype, "currentTime", { get: function() {
          return this._mediaElement ? this._mediaElement.currentTime : 0;
        }, set: function(C) {
          this._mediaElement ? this._internalSeek(C) : this._pendingSeekTime = C;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(P.prototype, "mediaInfo", { get: function() {
          return Object.assign({}, this._mediaInfo);
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(P.prototype, "statisticsInfo", { get: function() {
          return this._statisticsInfo == null && (this._statisticsInfo = {}), this._statisticsInfo = this._fillStatisticsInfo(this._statisticsInfo), Object.assign({}, this._statisticsInfo);
        }, enumerable: !1, configurable: !0 }), P.prototype._fillStatisticsInfo = function(C) {
          if (C.playerType = this._type, !(this._mediaElement instanceof HTMLVideoElement))
            return C;
          var D = !0, k = 0, Z = 0;
          if (this._mediaElement.getVideoPlaybackQuality) {
            var oe = this._mediaElement.getVideoPlaybackQuality();
            k = oe.totalVideoFrames, Z = oe.droppedVideoFrames;
          } else
            this._mediaElement.webkitDecodedFrameCount != null ? (k = this._mediaElement.webkitDecodedFrameCount, Z = this._mediaElement.webkitDroppedFrameCount) : D = !1;
          return D && (C.decodedFrames = k, C.droppedFrames = Z), C;
        }, P.prototype._onmseUpdateEnd = function() {
          var C = this._mediaElement.buffered, D = this._mediaElement.currentTime;
          if (this._config.isLive && this._config.liveBufferLatencyChasing && C.length > 0 && !this._mediaElement.paused) {
            var k = C.end(C.length - 1);
            if (k > this._config.liveBufferLatencyMaxLatency && k - D > this._config.liveBufferLatencyMaxLatency) {
              var Z = k - this._config.liveBufferLatencyMinRemain;
              this.currentTime = Z;
            }
          }
          if (this._config.lazyLoad && !this._config.isLive) {
            for (var oe = 0, re = 0; re < C.length; re++) {
              var ce = C.start(re), Ie = C.end(re);
              if (ce <= D && D < Ie) {
                oe = Ie;
                break;
              }
            }
            oe >= D + this._config.lazyLoadMaxDuration && this._progressChecker == null && (m.a.v(this.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), this._suspendTransmuxer());
          }
        }, P.prototype._onmseBufferFull = function() {
          m.a.v(this.TAG, "MSE SourceBuffer is full, suspend transmuxing task"), this._progressChecker == null && this._suspendTransmuxer();
        }, P.prototype._suspendTransmuxer = function() {
          this._transmuxer && (this._transmuxer.pause(), this._progressChecker == null && (this._progressChecker = window.setInterval(this._checkProgressAndResume.bind(this), 1e3)));
        }, P.prototype._checkProgressAndResume = function() {
          for (var C = this._mediaElement.currentTime, D = this._mediaElement.buffered, k = !1, Z = 0; Z < D.length; Z++) {
            var oe = D.start(Z), re = D.end(Z);
            if (C >= oe && C < re) {
              C >= re - this._config.lazyLoadRecoverDuration && (k = !0);
              break;
            }
          }
          k && (window.clearInterval(this._progressChecker), this._progressChecker = null, k && (m.a.v(this.TAG, "Continue loading from paused position"), this._transmuxer.resume()));
        }, P.prototype._isTimepointBuffered = function(C) {
          for (var D = this._mediaElement.buffered, k = 0; k < D.length; k++) {
            var Z = D.start(k), oe = D.end(k);
            if (C >= Z && C < oe)
              return !0;
          }
          return !1;
        }, P.prototype._internalSeek = function(C) {
          var D = this._isTimepointBuffered(C), k = !1, Z = 0;
          if (C < 1 && this._mediaElement.buffered.length > 0) {
            var oe = this._mediaElement.buffered.start(0);
            (oe < 1 && C < oe || f.a.safari) && (k = !0, Z = f.a.safari ? 0.1 : oe);
          }
          if (k)
            this._requestSetTime = !0, this._mediaElement.currentTime = Z;
          else if (D) {
            if (this._alwaysSeekKeyframe) {
              var re = this._msectl.getNearestKeyframe(Math.floor(1e3 * C));
              this._requestSetTime = !0, this._mediaElement.currentTime = re != null ? re.dts / 1e3 : C;
            } else
              this._requestSetTime = !0, this._mediaElement.currentTime = C;
            this._progressChecker != null && this._checkProgressAndResume();
          } else
            this._progressChecker != null && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._msectl.seek(C), this._transmuxer.seek(Math.floor(1e3 * C)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = C);
        }, P.prototype._checkAndApplyUnbufferedSeekpoint = function() {
          if (this._seekpointRecord)
            if (this._seekpointRecord.recordTime <= this._now() - 100) {
              var C = this._mediaElement.currentTime;
              this._seekpointRecord = null, this._isTimepointBuffered(C) || (this._progressChecker != null && (window.clearTimeout(this._progressChecker), this._progressChecker = null), this._msectl.seek(C), this._transmuxer.seek(Math.floor(1e3 * C)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = C));
            } else
              window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
        }, P.prototype._checkAndResumeStuckPlayback = function(C) {
          var D = this._mediaElement;
          if (C || !this._receivedCanPlay || D.readyState < 2) {
            var k = D.buffered;
            k.length > 0 && D.currentTime < k.start(0) && (m.a.w(this.TAG, "Playback seems stuck at " + D.currentTime + ", seek to " + k.start(0)), this._requestSetTime = !0, this._mediaElement.currentTime = k.start(0), this._mediaElement.removeEventListener("progress", this.e.onvProgress));
          } else
            this._mediaElement.removeEventListener("progress", this.e.onvProgress);
        }, P.prototype._onvLoadedMetadata = function(C) {
          this._pendingSeekTime != null && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null);
        }, P.prototype._onvSeeking = function(C) {
          var D = this._mediaElement.currentTime, k = this._mediaElement.buffered;
          if (this._requestSetTime)
            this._requestSetTime = !1;
          else {
            if (D < 1 && k.length > 0) {
              var Z = k.start(0);
              if (Z < 1 && D < Z || f.a.safari)
                return this._requestSetTime = !0, void (this._mediaElement.currentTime = f.a.safari ? 0.1 : Z);
            }
            if (this._isTimepointBuffered(D)) {
              if (this._alwaysSeekKeyframe) {
                var oe = this._msectl.getNearestKeyframe(Math.floor(1e3 * D));
                oe != null && (this._requestSetTime = !0, this._mediaElement.currentTime = oe.dts / 1e3);
              }
              this._progressChecker != null && this._checkProgressAndResume();
            } else
              this._seekpointRecord = { seekPoint: D, recordTime: this._now() }, window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
          }
        }, P.prototype._onvCanPlay = function(C) {
          this._receivedCanPlay = !0, this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay);
        }, P.prototype._onvStalled = function(C) {
          this._checkAndResumeStuckPlayback(!0);
        }, P.prototype._onvProgress = function(C) {
          this._checkAndResumeStuckPlayback();
        }, P;
      }(), W = function() {
        function P(C, D) {
          this.TAG = "NativePlayer", this._type = "NativePlayer", this._emitter = new l.a(), this._config = S(), typeof D == "object" && Object.assign(this._config, D);
          var k = C.type.toLowerCase();
          if (k === "mse" || k === "mpegts" || k === "m2ts" || k === "flv")
            throw new y.b("NativePlayer does't support mse/mpegts/m2ts/flv MediaDataSource input!");
          if (C.hasOwnProperty("segments"))
            throw new y.b("NativePlayer(" + C.type + ") doesn't support multipart playback!");
          this.e = { onvLoadedMetadata: this._onvLoadedMetadata.bind(this) }, this._pendingSeekTime = null, this._statisticsReporter = null, this._mediaDataSource = C, this._mediaElement = null;
        }
        return P.prototype.destroy = function() {
          this._mediaElement && (this.unload(), this.detachMediaElement()), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null;
        }, P.prototype.on = function(C, D) {
          var k = this;
          C === v.MEDIA_INFO ? this._mediaElement != null && this._mediaElement.readyState !== 0 && Promise.resolve().then(function() {
            k._emitter.emit(v.MEDIA_INFO, k.mediaInfo);
          }) : C === v.STATISTICS_INFO && this._mediaElement != null && this._mediaElement.readyState !== 0 && Promise.resolve().then(function() {
            k._emitter.emit(v.STATISTICS_INFO, k.statisticsInfo);
          }), this._emitter.addListener(C, D);
        }, P.prototype.off = function(C, D) {
          this._emitter.removeListener(C, D);
        }, P.prototype.attachMediaElement = function(C) {
          if (this._mediaElement = C, C.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._pendingSeekTime != null)
            try {
              C.currentTime = this._pendingSeekTime, this._pendingSeekTime = null;
            } catch {
            }
        }, P.prototype.detachMediaElement = function() {
          this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement = null), this._statisticsReporter != null && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
        }, P.prototype.load = function() {
          if (!this._mediaElement)
            throw new y.a("HTMLMediaElement must be attached before load()!");
          this._mediaElement.src = this._mediaDataSource.url, this._mediaElement.readyState > 0 && (this._mediaElement.currentTime = 0), this._mediaElement.preload = "auto", this._mediaElement.load(), this._statisticsReporter = window.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval);
        }, P.prototype.unload = function() {
          this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src")), this._statisticsReporter != null && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
        }, P.prototype.play = function() {
          return this._mediaElement.play();
        }, P.prototype.pause = function() {
          this._mediaElement.pause();
        }, Object.defineProperty(P.prototype, "type", { get: function() {
          return this._type;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(P.prototype, "buffered", { get: function() {
          return this._mediaElement.buffered;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(P.prototype, "duration", { get: function() {
          return this._mediaElement.duration;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(P.prototype, "volume", { get: function() {
          return this._mediaElement.volume;
        }, set: function(C) {
          this._mediaElement.volume = C;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(P.prototype, "muted", { get: function() {
          return this._mediaElement.muted;
        }, set: function(C) {
          this._mediaElement.muted = C;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(P.prototype, "currentTime", { get: function() {
          return this._mediaElement ? this._mediaElement.currentTime : 0;
        }, set: function(C) {
          this._mediaElement ? this._mediaElement.currentTime = C : this._pendingSeekTime = C;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(P.prototype, "mediaInfo", { get: function() {
          var C = { mimeType: (this._mediaElement instanceof HTMLAudioElement ? "audio/" : "video/") + this._mediaDataSource.type };
          return this._mediaElement && (C.duration = Math.floor(1e3 * this._mediaElement.duration), this._mediaElement instanceof HTMLVideoElement && (C.width = this._mediaElement.videoWidth, C.height = this._mediaElement.videoHeight)), C;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(P.prototype, "statisticsInfo", { get: function() {
          var C = { playerType: this._type, url: this._mediaDataSource.url };
          if (!(this._mediaElement instanceof HTMLVideoElement))
            return C;
          var D = !0, k = 0, Z = 0;
          if (this._mediaElement.getVideoPlaybackQuality) {
            var oe = this._mediaElement.getVideoPlaybackQuality();
            k = oe.totalVideoFrames, Z = oe.droppedVideoFrames;
          } else
            this._mediaElement.webkitDecodedFrameCount != null ? (k = this._mediaElement.webkitDecodedFrameCount, Z = this._mediaElement.webkitDroppedFrameCount) : D = !1;
          return D && (C.decodedFrames = k, C.droppedFrames = Z), C;
        }, enumerable: !1, configurable: !0 }), P.prototype._onvLoadedMetadata = function(C) {
          this._pendingSeekTime != null && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null), this._emitter.emit(v.MEDIA_INFO, this.mediaInfo);
        }, P.prototype._reportStatisticsInfo = function() {
          this._emitter.emit(v.STATISTICS_INFO, this.statisticsInfo);
        }, P;
      }();
      Y.a.install();
      var K = { createPlayer: function(P, C) {
        var D = P;
        if (D == null || typeof D != "object")
          throw new y.b("MediaDataSource must be an javascript object!");
        if (!D.hasOwnProperty("type"))
          throw new y.b("MediaDataSource must has type field to indicate video file type!");
        switch (D.type) {
          case "mse":
          case "mpegts":
          case "m2ts":
          case "flv":
            return new F(D, C);
          default:
            return new W(D, C);
        }
      }, isSupported: function() {
        return L.supportMSEH264Playback();
      }, getFeatureList: function() {
        return L.getFeatureList();
      } };
      K.BaseLoader = d.a, K.LoaderStatus = d.c, K.LoaderErrors = d.b, K.Events = v, K.ErrorTypes = T, K.ErrorDetails = I, K.MSEPlayer = F, K.NativePlayer = W, K.LoggingControl = c.a, Object.defineProperty(K, "version", { enumerable: !0, get: function() {
        return "1.7.3";
      } }), J.default = K;
    }]);
  });
})(Yt);
var bi = Yt.exports;
const gt = /* @__PURE__ */ qt(bi), Ai = { class: "video-container" }, xi = ["id"], Ri = {
  name: "videoPlayFlv2"
}, Li = /* @__PURE__ */ Object.assign(Ri, {
  props: {
    option: {
      type: Object,
      default: () => ({})
    }
  },
  setup(De, { expose: Fe }) {
    const de = lt(), J = /* @__PURE__ */ new Map();
    let z = De;
    ft(
      () => z.option,
      (d, o) => {
        Y(d);
      },
      {
        deep: !0
      }
    );
    const Y = (d) => {
      if (gt.isSupported()) {
        const l = document.getElementById(d.elementId);
        var o = {
          ...d
        };
        de.value = gt.createPlayer(o, {
          enableWorker: !1,
          //启用分离的线程进行转换（如果不想看到控制台频繁报错把它设置为false，官方的回答是这个属性还不稳定，所以要测试实时视频流的话设置为true控制台经常报错）
          enableStashBuffer: !1,
          //关闭IO隐藏缓冲区（如果需要最小延迟，则设置为false，此项设置针对直播视频流）
          stashInitialSize: 128,
          //减少首帧等待时长（针对实时视频流）
          lazyLoad: !1,
          //关闭懒加载模式（针对实时视频流）
          lazyLoadMaxDuration: 0.2,
          //懒加载的最大时长。单位：秒。建议针对直播：调整为200毫秒
          deferLoadAfterSourceOpen: !1,
          //在MediaSource sourceopen事件触发后加载。在Chrome上，在后台打开的标签页可能不会触发sourceopen事件，除非切换到该标签页。
          liveBufferLatencyChasing: !0,
          //追踪内部缓冲区导致的实时流延迟
          liveBufferLatencyMaxLatency: 1.5,
          //HTMLMediaElement 中可接受的最大缓冲区延迟（以秒为单位）之前使用flv.js发现延时严重，还有延时累加的问题，而mpegts.js对此做了优化，不需要我们自己设置快进追帧了
          liveBufferLatencyMinRemain: 0.3,
          //HTMLMediaElement 中可接受的最小缓冲区延迟（以秒为单位）
          headers: d.headers
        }), de.value.attachMediaElement(l), de.value.load(), U();
      }
    }, U = () => {
      de.value.on(
        gt.Events.ERROR,
        (d, o, l) => {
          console.log(
            "类型:" + JSON.stringify(d),
            "报错内容" + o,
            "报错信息" + l
          );
        }
      ), de.value.on(gt.Events.STATISTICS_INFO, () => {
        const o = de.value.buffered.end(0) - de.value.currentTime;
        console.log("差值为：" + o);
      });
    }, R = () => {
      if (J.size > 0)
        for (let [d, o] of J)
          o.pause, o.unload(), o.detachMediaElement(), o.destroy(), o = null, J.delete(d), console.log("销毁掉视频：" + d);
      else
        console.log("没有要销毁的视频");
    }, S = () => de.value.play(), L = () => de.value.pause();
    return vt(() => {
      Y(z.option);
    }), yt(() => {
      R();
    }), Fe({
      start: S,
      pause: L,
      destory: R
    }), (d, o) => (Et(), St("div", Ai, [
      bt("video", {
        class: "centeredVideo",
        controls: "false",
        autoplay: "true",
        muted: "false",
        id: De.option.elementId
      }, " Your browser is too old which doesn't support HTML5 video. ", 8, xi)
    ]));
  }
}), Ti = /* @__PURE__ */ At(Li, [["__scopeId", "data-v-097f5cbf"]]), wi = [ui, fi, Si, Ti], Oi = {
  install(De) {
    wi.forEach((Fe) => {
      De.component(Fe.name, Fe);
    });
  }
};
export {
  Oi as default,
  ui as videoPlayFlv,
  Ti as videoPlayFlv2,
  Si as videoPlayHaikan,
  fi as videoPlayM3u8
};
