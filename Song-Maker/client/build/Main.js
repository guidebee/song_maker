! function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(i, r, function (e) {
                return t[e]
            }.bind(null, r));
        return i
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 700)
}([function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    })), n.d(e, "b", (function () {
        return r
    })), n.d(e, "c", (function () {
        return o
    })), n.d(e, "d", (function () {
        return s
    })), n.d(e, "e", (function () {
        return a
    })), n.d(e, "f", (function () {
        return c
    })), n.d(e, "g", (function () {
        return u
    })), n.d(e, "i", (function () {
        return h
    })), n.d(e, "h", (function () {
        return l
    })), n.d(e, "j", (function () {
        return d
    })), n.d(e, "k", (function () {
        return p
    }));
    const i = new WeakSet,
        r = new WeakMap,
        o = new WeakMap,
        s = new WeakMap,
        a = new WeakMap,
        c = new WeakMap,
        u = new WeakMap,
        h = new WeakMap,
        l = new WeakMap,
        d = new WeakMap,
        p = new WeakMap
}, function (t, e, n) {
    "use strict";
    var i, r = "object" == typeof Reflect ? Reflect : null,
        o = r && "function" == typeof r.apply ? r.apply : function (t, e, n) {
            return Function.prototype.apply.call(t, e, n)
        };
    i = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function (t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : function (t) {
        return Object.getOwnPropertyNames(t)
    };
    var s = Number.isNaN || function (t) {
        return t != t
    };

    function a() {
        a.init.call(this)
    }
    t.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
    var c = 10;

    function u(t) {
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
    }

    function h(t) {
        return void 0 === t._maxListeners ? a.defaultMaxListeners : t._maxListeners
    }

    function l(t, e, n, i) {
        var r, o, s, a;
        if (u(n), void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), o = t._events), s = o[e]), void 0 === s) s = o[e] = n, ++t._eventsCount;
        else if ("function" == typeof s ? s = o[e] = i ? [n, s] : [s, n] : i ? s.unshift(n) : s.push(n), (r = h(t)) > 0 && s.length > r && !s.warned) {
            s.warned = !0;
            var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = s.length, a = c, console && console.warn && console.warn(a)
        }
        return t
    }

    function d() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function p(t, e, n) {
        var i = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: n
        },
            r = d.bind(i);
        return r.listener = n, i.wrapFn = r, r
    }

    function f(t, e, n) {
        var i = t._events;
        if (void 0 === i) return [];
        var r = i[e];
        return void 0 === r ? [] : "function" == typeof r ? n ? [r.listener || r] : [r] : n ? function (t) {
            for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
            return e
        }(r) : g(r, r.length)
    }

    function m(t) {
        var e = this._events;
        if (void 0 !== e) {
            var n = e[t];
            if ("function" == typeof n) return 1;
            if (void 0 !== n) return n.length
        }
        return 0
    }

    function g(t, e) {
        for (var n = new Array(e), i = 0; i < e; ++i) n[i] = t[i];
        return n
    }
    Object.defineProperty(a, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
            return c
        },
        set: function (t) {
            if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            c = t
        }
    }), a.init = function () {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, a.prototype.setMaxListeners = function (t) {
        if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    }, a.prototype.getMaxListeners = function () {
        return h(this)
    }, a.prototype.emit = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
        var i = "error" === t,
            r = this._events;
        if (void 0 !== r) i = i && void 0 === r.error;
        else if (!i) return !1;
        if (i) {
            var s;
            if (e.length > 0 && (s = e[0]), s instanceof Error) throw s;
            var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
            throw a.context = s, a
        }
        var c = r[t];
        if (void 0 === c) return !1;
        if ("function" == typeof c) o(c, this, e);
        else {
            var u = c.length,
                h = g(c, u);
            for (n = 0; n < u; ++n) o(h[n], this, e)
        }
        return !0
    }, a.prototype.addListener = function (t, e) {
        return l(this, t, e, !1)
    }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function (t, e) {
        return l(this, t, e, !0)
    }, a.prototype.once = function (t, e) {
        return u(e), this.on(t, p(this, t, e)), this
    }, a.prototype.prependOnceListener = function (t, e) {
        return u(e), this.prependListener(t, p(this, t, e)), this
    }, a.prototype.removeListener = function (t, e) {
        var n, i, r, o, s;
        if (u(e), void 0 === (i = this._events)) return this;
        if (void 0 === (n = i[t])) return this;
        if (n === e || n.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, n.listener || e));
        else if ("function" != typeof n) {
            for (r = -1, o = n.length - 1; o >= 0; o--)
                if (n[o] === e || n[o].listener === e) {
                    s = n[o].listener, r = o;
                    break
                } if (r < 0) return this;
            0 === r ? n.shift() : function (t, e) {
                for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                t.pop()
            }(n, r), 1 === n.length && (i[t] = n[0]), void 0 !== i.removeListener && this.emit("removeListener", t, s || e)
        }
        return this
    }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function (t) {
        var e, n, i;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;
        if (0 === arguments.length) {
            var r, o = Object.keys(n);
            for (i = 0; i < o.length; ++i) "removeListener" !== (r = o[i]) && this.removeAllListeners(r);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if ("function" == typeof (e = n[t])) this.removeListener(t, e);
        else if (void 0 !== e)
            for (i = e.length - 1; i >= 0; i--) this.removeListener(t, e[i]);
        return this
    }, a.prototype.listeners = function (t) {
        return f(this, t, !0)
    }, a.prototype.rawListeners = function (t) {
        return f(this, t, !1)
    }, a.listenerCount = function (t, e) {
        return "function" == typeof t.listenerCount ? t.listenerCount(e) : m.call(t, e)
    }, a.prototype.listenerCount = m, a.prototype.eventNames = function () {
        return this._eventsCount > 0 ? i(this._events) : []
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(5);
    const r = (t, e) => {
        Object(i.a)(t, e, "channelCount"), Object(i.a)(t, e, "channelCountMode"), Object(i.a)(t, e, "channelInterpretation")
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    })), n.d(e, "b", (function () {
        return r
    }));
    const i = -34028234663852886e22,
        r = -i
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => t.context === e
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e, n) => {
        const i = e[n];
        void 0 !== i && i !== t[n] && (t[n] = i)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e, n) => {
        const i = e[n];
        void 0 !== i && i !== t[n].value && (t[n].value = i)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(0),
        r = n(10);
    const o = t => Object(r.a)(i.c, t)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = () => {
        try {
            return new DOMException("", "InvalidStateError")
        } catch (t) {
            return t.code = 11, t.name = "InvalidStateError", t
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(0),
        r = n(10);
    const o = t => Object(r.a)(i.b, t)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => {
        const n = t.get(e);
        if (void 0 === n) throw new Error("A value with the given key could not be found.");
        return n
    }
}, function (t, e, n) {
    var i;
    ! function (r) {
        var o = /^\s+/,
            s = /\s+$/,
            a = 0,
            c = r.round,
            u = r.min,
            h = r.max,
            l = r.random;

        function d(t, e) {
            if (e = e || {}, (t = t || "") instanceof d) return t;
            if (!(this instanceof d)) return new d(t, e);
            var n = function (t) {
                var e = {
                    r: 0,
                    g: 0,
                    b: 0
                },
                    n = 1,
                    i = null,
                    a = null,
                    c = null,
                    l = !1,
                    d = !1;
                "string" == typeof t && (t = function (t) {
                    t = t.replace(o, "").replace(s, "").toLowerCase();
                    var e, n = !1;
                    if (I[t]) t = I[t], n = !0;
                    else if ("transparent" == t) return {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                        format: "name"
                    };
                    if (e = z.rgb.exec(t)) return {
                        r: e[1],
                        g: e[2],
                        b: e[3]
                    };
                    if (e = z.rgba.exec(t)) return {
                        r: e[1],
                        g: e[2],
                        b: e[3],
                        a: e[4]
                    };
                    if (e = z.hsl.exec(t)) return {
                        h: e[1],
                        s: e[2],
                        l: e[3]
                    };
                    if (e = z.hsla.exec(t)) return {
                        h: e[1],
                        s: e[2],
                        l: e[3],
                        a: e[4]
                    };
                    if (e = z.hsv.exec(t)) return {
                        h: e[1],
                        s: e[2],
                        v: e[3]
                    };
                    if (e = z.hsva.exec(t)) return {
                        h: e[1],
                        s: e[2],
                        v: e[3],
                        a: e[4]
                    };
                    if (e = z.hex8.exec(t)) return {
                        r: j(e[1]),
                        g: j(e[2]),
                        b: j(e[3]),
                        a: U(e[4]),
                        format: n ? "name" : "hex8"
                    };
                    if (e = z.hex6.exec(t)) return {
                        r: j(e[1]),
                        g: j(e[2]),
                        b: j(e[3]),
                        format: n ? "name" : "hex"
                    };
                    if (e = z.hex4.exec(t)) return {
                        r: j(e[1] + "" + e[1]),
                        g: j(e[2] + "" + e[2]),
                        b: j(e[3] + "" + e[3]),
                        a: U(e[4] + "" + e[4]),
                        format: n ? "name" : "hex8"
                    };
                    if (e = z.hex3.exec(t)) return {
                        r: j(e[1] + "" + e[1]),
                        g: j(e[2] + "" + e[2]),
                        b: j(e[3] + "" + e[3]),
                        format: n ? "name" : "hex"
                    };
                    return !1
                }(t));
                "object" == typeof t && (G(t.r) && G(t.g) && G(t.b) ? (p = t.r, f = t.g, m = t.b, e = {
                    r: 255 * P(p, 255),
                    g: 255 * P(f, 255),
                    b: 255 * P(m, 255)
                }, l = !0, d = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : G(t.h) && G(t.s) && G(t.v) ? (i = L(t.s), a = L(t.v), e = function (t, e, n) {
                    t = 6 * P(t, 360), e = P(e, 100), n = P(n, 100);
                    var i = r.floor(t),
                        o = t - i,
                        s = n * (1 - e),
                        a = n * (1 - o * e),
                        c = n * (1 - (1 - o) * e),
                        u = i % 6;
                    return {
                        r: 255 * [n, a, s, s, c, n][u],
                        g: 255 * [c, n, n, a, s, s][u],
                        b: 255 * [s, s, c, n, n, a][u]
                    }
                }(t.h, i, a), l = !0, d = "hsv") : G(t.h) && G(t.s) && G(t.l) && (i = L(t.s), c = L(t.l), e = function (t, e, n) {
                    var i, r, o;

                    function s(t, e, n) {
                        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                    }
                    if (t = P(t, 360), e = P(e, 100), n = P(n, 100), 0 === e) i = r = o = n;
                    else {
                        var a = n < .5 ? n * (1 + e) : n + e - n * e,
                            c = 2 * n - a;
                        i = s(c, a, t + 1 / 3), r = s(c, a, t), o = s(c, a, t - 1 / 3)
                    }
                    return {
                        r: 255 * i,
                        g: 255 * r,
                        b: 255 * o
                    }
                }(t.h, i, c), l = !0, d = "hsl"), t.hasOwnProperty("a") && (n = t.a));
                var p, f, m;
                return n = R(n), {
                    ok: l,
                    format: t.format || d,
                    r: u(255, h(e.r, 0)),
                    g: u(255, h(e.g, 0)),
                    b: u(255, h(e.b, 0)),
                    a: n
                }
            }(t);
            this._originalInput = t, this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = c(100 * this._a) / 100, this._format = e.format || n.format, this._gradientType = e.gradientType, this._r < 1 && (this._r = c(this._r)), this._g < 1 && (this._g = c(this._g)), this._b < 1 && (this._b = c(this._b)), this._ok = n.ok, this._tc_id = a++
        }

        function p(t, e, n) {
            t = P(t, 255), e = P(e, 255), n = P(n, 255);
            var i, r, o = h(t, e, n),
                s = u(t, e, n),
                a = (o + s) / 2;
            if (o == s) i = r = 0;
            else {
                var c = o - s;
                switch (r = a > .5 ? c / (2 - o - s) : c / (o + s), o) {
                    case t:
                        i = (e - n) / c + (e < n ? 6 : 0);
                        break;
                    case e:
                        i = (n - t) / c + 2;
                        break;
                    case n:
                        i = (t - e) / c + 4
                }
                i /= 6
            }
            return {
                h: i,
                s: r,
                l: a
            }
        }

        function f(t, e, n) {
            t = P(t, 255), e = P(e, 255), n = P(n, 255);
            var i, r, o = h(t, e, n),
                s = u(t, e, n),
                a = o,
                c = o - s;
            if (r = 0 === o ? 0 : c / o, o == s) i = 0;
            else {
                switch (o) {
                    case t:
                        i = (e - n) / c + (e < n ? 6 : 0);
                        break;
                    case e:
                        i = (n - t) / c + 2;
                        break;
                    case n:
                        i = (t - e) / c + 4
                }
                i /= 6
            }
            return {
                h: i,
                s: r,
                v: a
            }
        }

        function m(t, e, n, i) {
            var r = [N(c(t).toString(16)), N(c(e).toString(16)), N(c(n).toString(16))];
            return i && r[0].charAt(0) == r[0].charAt(1) && r[1].charAt(0) == r[1].charAt(1) && r[2].charAt(0) == r[2].charAt(1) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("")
        }

        function g(t, e, n, i) {
            return [N(B(i)), N(c(t).toString(16)), N(c(e).toString(16)), N(c(n).toString(16))].join("")
        }

        function v(t, e) {
            e = 0 === e ? 0 : e || 10;
            var n = d(t).toHsl();
            return n.s -= e / 100, n.s = D(n.s), d(n)
        }

        function b(t, e) {
            e = 0 === e ? 0 : e || 10;
            var n = d(t).toHsl();
            return n.s += e / 100, n.s = D(n.s), d(n)
        }

        function y(t) {
            return d(t).desaturate(100)
        }

        function _(t, e) {
            e = 0 === e ? 0 : e || 10;
            var n = d(t).toHsl();
            return n.l += e / 100, n.l = D(n.l), d(n)
        }

        function w(t, e) {
            e = 0 === e ? 0 : e || 10;
            var n = d(t).toRgb();
            return n.r = h(0, u(255, n.r - c(-e / 100 * 255))), n.g = h(0, u(255, n.g - c(-e / 100 * 255))), n.b = h(0, u(255, n.b - c(-e / 100 * 255))), d(n)
        }

        function x(t, e) {
            e = 0 === e ? 0 : e || 10;
            var n = d(t).toHsl();
            return n.l -= e / 100, n.l = D(n.l), d(n)
        }

        function T(t, e) {
            var n = d(t).toHsl(),
                i = (n.h + e) % 360;
            return n.h = i < 0 ? 360 + i : i, d(n)
        }

        function S(t) {
            var e = d(t).toHsl();
            return e.h = (e.h + 180) % 360, d(e)
        }

        function C(t) {
            var e = d(t).toHsl(),
                n = e.h;
            return [d(t), d({
                h: (n + 120) % 360,
                s: e.s,
                l: e.l
            }), d({
                h: (n + 240) % 360,
                s: e.s,
                l: e.l
            })]
        }

        function k(t) {
            var e = d(t).toHsl(),
                n = e.h;
            return [d(t), d({
                h: (n + 90) % 360,
                s: e.s,
                l: e.l
            }), d({
                h: (n + 180) % 360,
                s: e.s,
                l: e.l
            }), d({
                h: (n + 270) % 360,
                s: e.s,
                l: e.l
            })]
        }

        function E(t) {
            var e = d(t).toHsl(),
                n = e.h;
            return [d(t), d({
                h: (n + 72) % 360,
                s: e.s,
                l: e.l
            }), d({
                h: (n + 216) % 360,
                s: e.s,
                l: e.l
            })]
        }

        function O(t, e, n) {
            e = e || 6, n = n || 30;
            var i = d(t).toHsl(),
                r = 360 / n,
                o = [d(t)];
            for (i.h = (i.h - (r * e >> 1) + 720) % 360; --e;) i.h = (i.h + r) % 360, o.push(d(i));
            return o
        }

        function M(t, e) {
            e = e || 6;
            for (var n = d(t).toHsv(), i = n.h, r = n.s, o = n.v, s = [], a = 1 / e; e--;) s.push(d({
                h: i,
                s: r,
                v: o
            })), o = (o + a) % 1;
            return s
        }
        d.prototype = {
            isDark: function () {
                return this.getBrightness() < 128
            },
            isLight: function () {
                return !this.isDark()
            },
            isValid: function () {
                return this._ok
            },
            getOriginalInput: function () {
                return this._originalInput
            },
            getFormat: function () {
                return this._format
            },
            getAlpha: function () {
                return this._a
            },
            getBrightness: function () {
                var t = this.toRgb();
                return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
            },
            getLuminance: function () {
                var t, e, n, i = this.toRgb();
                return t = i.r / 255, e = i.g / 255, n = i.b / 255, .2126 * (t <= .03928 ? t / 12.92 : r.pow((t + .055) / 1.055, 2.4)) + .7152 * (e <= .03928 ? e / 12.92 : r.pow((e + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : r.pow((n + .055) / 1.055, 2.4))
            },
            setAlpha: function (t) {
                return this._a = R(t), this._roundA = c(100 * this._a) / 100, this
            },
            toHsv: function () {
                var t = f(this._r, this._g, this._b);
                return {
                    h: 360 * t.h,
                    s: t.s,
                    v: t.v,
                    a: this._a
                }
            },
            toHsvString: function () {
                var t = f(this._r, this._g, this._b),
                    e = c(360 * t.h),
                    n = c(100 * t.s),
                    i = c(100 * t.v);
                return 1 == this._a ? "hsv(" + e + ", " + n + "%, " + i + "%)" : "hsva(" + e + ", " + n + "%, " + i + "%, " + this._roundA + ")"
            },
            toHsl: function () {
                var t = p(this._r, this._g, this._b);
                return {
                    h: 360 * t.h,
                    s: t.s,
                    l: t.l,
                    a: this._a
                }
            },
            toHslString: function () {
                var t = p(this._r, this._g, this._b),
                    e = c(360 * t.h),
                    n = c(100 * t.s),
                    i = c(100 * t.l);
                return 1 == this._a ? "hsl(" + e + ", " + n + "%, " + i + "%)" : "hsla(" + e + ", " + n + "%, " + i + "%, " + this._roundA + ")"
            },
            toHex: function (t) {
                return m(this._r, this._g, this._b, t)
            },
            toHexString: function (t) {
                return "#" + this.toHex(t)
            },
            toHex8: function (t) {
                return function (t, e, n, i, r) {
                    var o = [N(c(t).toString(16)), N(c(e).toString(16)), N(c(n).toString(16)), N(B(i))];
                    if (r && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1)) return o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0);
                    return o.join("")
                }(this._r, this._g, this._b, this._a, t)
            },
            toHex8String: function (t) {
                return "#" + this.toHex8(t)
            },
            toRgb: function () {
                return {
                    r: c(this._r),
                    g: c(this._g),
                    b: c(this._b),
                    a: this._a
                }
            },
            toRgbString: function () {
                return 1 == this._a ? "rgb(" + c(this._r) + ", " + c(this._g) + ", " + c(this._b) + ")" : "rgba(" + c(this._r) + ", " + c(this._g) + ", " + c(this._b) + ", " + this._roundA + ")"
            },
            toPercentageRgb: function () {
                return {
                    r: c(100 * P(this._r, 255)) + "%",
                    g: c(100 * P(this._g, 255)) + "%",
                    b: c(100 * P(this._b, 255)) + "%",
                    a: this._a
                }
            },
            toPercentageRgbString: function () {
                return 1 == this._a ? "rgb(" + c(100 * P(this._r, 255)) + "%, " + c(100 * P(this._g, 255)) + "%, " + c(100 * P(this._b, 255)) + "%)" : "rgba(" + c(100 * P(this._r, 255)) + "%, " + c(100 * P(this._g, 255)) + "%, " + c(100 * P(this._b, 255)) + "%, " + this._roundA + ")"
            },
            toName: function () {
                return 0 === this._a ? "transparent" : !(this._a < 1) && (A[m(this._r, this._g, this._b, !0)] || !1)
            },
            toFilter: function (t) {
                var e = "#" + g(this._r, this._g, this._b, this._a),
                    n = e,
                    i = this._gradientType ? "GradientType = 1, " : "";
                if (t) {
                    var r = d(t);
                    n = "#" + g(r._r, r._g, r._b, r._a)
                }
                return "progid:DXImageTransform.Microsoft.gradient(" + i + "startColorstr=" + e + ",endColorstr=" + n + ")"
            },
            toString: function (t) {
                var e = !!t;
                t = t || this._format;
                var n = !1,
                    i = this._a < 1 && this._a >= 0;
                return e || !i || "hex" !== t && "hex6" !== t && "hex3" !== t && "hex4" !== t && "hex8" !== t && "name" !== t ? ("rgb" === t && (n = this.toRgbString()), "prgb" === t && (n = this.toPercentageRgbString()), "hex" !== t && "hex6" !== t || (n = this.toHexString()), "hex3" === t && (n = this.toHexString(!0)), "hex4" === t && (n = this.toHex8String(!0)), "hex8" === t && (n = this.toHex8String()), "name" === t && (n = this.toName()), "hsl" === t && (n = this.toHslString()), "hsv" === t && (n = this.toHsvString()), n || this.toHexString()) : "name" === t && 0 === this._a ? this.toName() : this.toRgbString()
            },
            clone: function () {
                return d(this.toString())
            },
            _applyModification: function (t, e) {
                var n = t.apply(null, [this].concat([].slice.call(e)));
                return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this
            },
            lighten: function () {
                return this._applyModification(_, arguments)
            },
            brighten: function () {
                return this._applyModification(w, arguments)
            },
            darken: function () {
                return this._applyModification(x, arguments)
            },
            desaturate: function () {
                return this._applyModification(v, arguments)
            },
            saturate: function () {
                return this._applyModification(b, arguments)
            },
            greyscale: function () {
                return this._applyModification(y, arguments)
            },
            spin: function () {
                return this._applyModification(T, arguments)
            },
            _applyCombination: function (t, e) {
                return t.apply(null, [this].concat([].slice.call(e)))
            },
            analogous: function () {
                return this._applyCombination(O, arguments)
            },
            complement: function () {
                return this._applyCombination(S, arguments)
            },
            monochromatic: function () {
                return this._applyCombination(M, arguments)
            },
            splitcomplement: function () {
                return this._applyCombination(E, arguments)
            },
            triad: function () {
                return this._applyCombination(C, arguments)
            },
            tetrad: function () {
                return this._applyCombination(k, arguments)
            }
        }, d.fromRatio = function (t, e) {
            if ("object" == typeof t) {
                var n = {};
                for (var i in t) t.hasOwnProperty(i) && (n[i] = "a" === i ? t[i] : L(t[i]));
                t = n
            }
            return d(t, e)
        }, d.equals = function (t, e) {
            return !(!t || !e) && d(t).toRgbString() == d(e).toRgbString()
        }, d.random = function () {
            return d.fromRatio({
                r: l(),
                g: l(),
                b: l()
            })
        }, d.mix = function (t, e, n) {
            n = 0 === n ? 0 : n || 50;
            var i = d(t).toRgb(),
                r = d(e).toRgb(),
                o = n / 100;
            return d({
                r: (r.r - i.r) * o + i.r,
                g: (r.g - i.g) * o + i.g,
                b: (r.b - i.b) * o + i.b,
                a: (r.a - i.a) * o + i.a
            })
        }, d.readability = function (t, e) {
            var n = d(t),
                i = d(e);
            return (r.max(n.getLuminance(), i.getLuminance()) + .05) / (r.min(n.getLuminance(), i.getLuminance()) + .05)
        }, d.isReadable = function (t, e, n) {
            var i, r, o = d.readability(t, e);
            switch (r = !1, (i = function (t) {
                var e, n;
                e = ((t = t || {
                    level: "AA",
                    size: "small"
                }).level || "AA").toUpperCase(), n = (t.size || "small").toLowerCase(), "AA" !== e && "AAA" !== e && (e = "AA");
                "small" !== n && "large" !== n && (n = "small");
                return {
                    level: e,
                    size: n
                }
            }(n)).level + i.size) {
                case "AAsmall":
                case "AAAlarge":
                    r = o >= 4.5;
                    break;
                case "AAlarge":
                    r = o >= 3;
                    break;
                case "AAAsmall":
                    r = o >= 7
            }
            return r
        }, d.mostReadable = function (t, e, n) {
            var i, r, o, s, a = null,
                c = 0;
            r = (n = n || {}).includeFallbackColors, o = n.level, s = n.size;
            for (var u = 0; u < e.length; u++)(i = d.readability(t, e[u])) > c && (c = i, a = d(e[u]));
            return d.isReadable(t, a, {
                level: o,
                size: s
            }) || !r ? a : (n.includeFallbackColors = !1, d.mostReadable(t, ["#fff", "#000"], n))
        };
        var I = d.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            rebeccapurple: "663399",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32"
        },
            A = d.hexNames = function (t) {
                var e = {};
                for (var n in t) t.hasOwnProperty(n) && (e[t[n]] = n);
                return e
            }(I);

        function R(t) {
            return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t
        }

        function P(t, e) {
            (function (t) {
                return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t)
            })(t) && (t = "100%");
            var n = function (t) {
                return "string" == typeof t && -1 != t.indexOf("%")
            }(t);
            return t = u(e, h(0, parseFloat(t))), n && (t = parseInt(t * e, 10) / 100), r.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e)
        }

        function D(t) {
            return u(1, h(0, t))
        }

        function j(t) {
            return parseInt(t, 16)
        }

        function N(t) {
            return 1 == t.length ? "0" + t : "" + t
        }

        function L(t) {
            return t <= 1 && (t = 100 * t + "%"), t
        }

        function B(t) {
            return r.round(255 * parseFloat(t)).toString(16)
        }

        function U(t) {
            return j(t) / 255
        }
        var F, V, q, z = (V = "[\\s|\\(]+(" + (F = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?", q = "[\\s|\\(]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?", {
            CSS_UNIT: new RegExp(F),
            rgb: new RegExp("rgb" + V),
            rgba: new RegExp("rgba" + q),
            hsl: new RegExp("hsl" + V),
            hsla: new RegExp("hsla" + q),
            hsv: new RegExp("hsv" + V),
            hsva: new RegExp("hsva" + q),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        });

        function G(t) {
            return !!z.CSS_UNIT.exec(t)
        }
        t.exports ? t.exports = d : void 0 === (i = function () {
            return d
        }.call(e, n, e, t)) || (t.exports = i)
    }(Math)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = () => {
        try {
            return new DOMException("", "NotSupportedError")
        } catch (t) {
            return t.code = 9, t.name = "NotSupportedError", t
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => (t.connect = e.connect.bind(e), t.disconnect = e.disconnect.bind(e), t)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => "inputs" in t
}, function (t, e, n) {
    "use strict";
    n.d(e, "AudioContext", (function () {
        return hr
    })), n.d(e, "AudioWorkletNode", (function () {
        return _r
    })), n.d(e, "OfflineAudioContext", (function () {
        return Tr
    })), n.d(e, "isAnyAudioContext", (function () {
        return Sr
    })), n.d(e, "isAnyAudioNode", (function () {
        return Cr
    })), n.d(e, "isAnyAudioParam", (function () {
        return kr
    })), n.d(e, "isAnyOfflineAudioContext", (function () {
        return Er
    }));
    var i = n(21),
        r = n(531),
        o = n(532),
        s = n(533),
        a = n(693),
        c = n(534),
        u = n(535),
        h = n(536),
        l = n(537),
        d = n(538),
        p = n(539),
        f = n(540),
        m = n(541),
        g = n(542),
        v = n(543),
        b = n(544),
        y = n(689),
        _ = n(545),
        w = n(546),
        x = n(547),
        T = n(697),
        S = n(548),
        C = n(549),
        k = n(550),
        E = n(551),
        O = n(552),
        M = n(553),
        I = n(554),
        A = n(555),
        R = n(556),
        P = n(557),
        D = n(558),
        j = n(559),
        N = n(560),
        L = n(561),
        B = n(562),
        U = n(563),
        F = n(564),
        V = n(565),
        q = n(694),
        z = n(566),
        G = n(567),
        H = n(568),
        W = n(569),
        Y = n(698),
        X = n(570),
        Z = n(571),
        J = n(572),
        $ = n(573),
        Q = n(574),
        K = n(575),
        tt = n(576),
        et = n(577),
        nt = n(578),
        it = n(579),
        rt = n(580),
        ot = n(581),
        st = n(582),
        at = n(583),
        ct = n(584),
        ut = n(695),
        ht = n(585),
        lt = n(586),
        dt = n(18),
        pt = n(45),
        ft = n(8),
        mt = n(587),
        gt = n(588),
        vt = n(589),
        bt = n(590),
        yt = n(591),
        _t = n(592),
        wt = n(593),
        xt = n(594),
        Tt = n(595),
        St = n(596),
        Ct = (n(597), n(598)),
        kt = n(599),
        Et = n(600),
        Ot = n(601),
        Mt = n(602),
        It = n(603),
        At = n(604),
        Rt = n(605),
        Pt = n(691),
        Dt = n(606),
        jt = n(692),
        Nt = n(607),
        Lt = n(608),
        Bt = n(609),
        Ut = n(610),
        Ft = n(699),
        Vt = n(690),
        qt = n(611),
        zt = n(612),
        Gt = n(696),
        Ht = n(613),
        Wt = n(614),
        Yt = n(615),
        Xt = n(616),
        Zt = n(617),
        Jt = n(618),
        $t = n(619),
        Qt = n(620),
        Kt = n(621),
        te = n(622),
        ee = n(623),
        ne = n(624),
        ie = n(625),
        re = n(626),
        oe = n(627),
        se = n(628),
        ae = n(629),
        ce = n(630),
        ue = n(631),
        he = n(632),
        le = n(633),
        de = n(634),
        pe = n(635),
        fe = n(12),
        me = n(636),
        ge = n(637),
        ve = n(638),
        be = n(639),
        ye = n(640),
        _e = n(641),
        we = n(642),
        xe = n(643),
        Te = n(644),
        Se = n(645),
        Ce = n(646),
        ke = n(647),
        Ee = n(648),
        Oe = n(649),
        Me = (n(650), n(651)),
        Ie = n(652),
        Ae = n(653),
        Re = n(654),
        Pe = (n(655), n(656), n(657), n(658), n(659)),
        De = n(660),
        je = n(661),
        Ne = (n(662), n(663), n(664), n(665), n(666), n(667), n(668)),
        Le = (n(669), n(53)),
        Be = n(670),
        Ue = n(671),
        Fe = n(672),
        Ve = n(673),
        qe = n(674),
        ze = n(675),
        Ge = n(676),
        He = n(677),
        We = n(0),
        Ye = n(41),
        Xe = n(42),
        Ze = n(9),
        Je = n(34),
        $e = n(7),
        Qe = n(35),
        Ke = n(10),
        tn = n(19),
        en = n(29),
        nn = n(54),
        rn = n(22),
        on = n(46),
        sn = n(40),
        an = n(16),
        cn = (n(678), n(679)),
        un = n(36);
    n(56), n(140);
    const hn = Object(E.a)(new Map, new WeakMap),
        ln = Object(Fe.a)(),
        dn = Object(re.a)(ln),
        pn = Object(Tt.a)(dn),
        fn = Object(Nt.a)(ln),
        mn = Object(st.a)(pn, fn, dn),
        gn = Object(Bt.a)(mn),
        vn = Object(Pt.a)(hn, dt.a, gn),
        bn = Object(rt.a)(Ze.a),
        yn = Object(xe.a)(Ze.a, bn, rn.a),
        _n = Object(l.a)(vn, $e.a, yn),
        wn = new WeakMap,
        xn = Object(at.a)(We.g),
        Tn = new WeakMap,
        Sn = Object(K.a)(un.a),
        Cn = Object(yt.a)(fn),
        kn = Object(_t.a)(ln),
        En = Object(wt.a)(ln),
        On = Object(y.a)(Object(o.a)(We.b), wn, hn, Object(lt.a)(We.h, Xe.a, Ze.a, $e.a, Qe.a, en.a), dt.a, pt.a, fe.a, Object(z.a)(Ye.a, We.h, Ze.a, $e.a, Qe.a, xn, en.a, pn), Object(Y.a)(Tn, Ze.a, Ke.a), Sn, xn, Cn, kn, En, pn),
        Mn = Object(h.a)(On, _n, dt.a, vn, xn, pn),
        In = new WeakSet,
        An = Object(Dt.a)(ln),
        Rn = Object(L.a)(new Uint32Array(1)),
        Pn = Object(Ve.a)(Rn, dt.a),
        Dn = Object(qe.a)(Rn),
        jn = Object(d.a)(In, hn, fe.a, An, dn, Object(Oe.a)(An), Pn, Dn),
        Nn = Object($t.a)(gn),
        Ln = Object(c.a)(Nn),
        Bn = Object(Pe.a)(gn),
        Un = Object(De.a)(gn),
        Fn = Object(je.a)(gn),
        Vn = Object(Ge.a)(gn),
        qn = Object(Te.a)(bn, Je.a, rn.a),
        zn = Object(R.a)(qn),
        Gn = Object(jt.a)(Ln, hn, gn, Object(Me.a)(gn), Object(Ie.a)(dn), Object(Ae.a)(gn), Object(Re.a)(gn), Bn, Un, Fn, cn.a, Object(ze.a)(on.a), Vn),
        Hn = Object(we.a)(Object(ot.a)(Je.a), qn),
        Wn = Object(f.a)(zn, Gn, $e.a, Hn, yn),
        Yn = Object(_.a)(Object(s.a)(We.d), Tn, We.e, w.a, i.createCancelAndHoldAutomationEvent, i.createCancelScheduledValuesAutomationEvent, i.createExponentialRampToValueAutomationEvent, i.createLinearRampToValueAutomationEvent, i.createSetTargetAutomationEvent, i.createSetValueAutomationEvent, i.createSetValueCurveAutomationEvent, fn),
        Xn = Object(p.a)(On, Wn, Yn, ft.a, Gn, xn, pn, un.a),
        Zn = Object(g.a)(On, v.a, dt.a, ft.a, Object(Lt.a)(Nn, on.a), xn, pn, yn),
        Jn = Object(qt.a)(gn),
        $n = Object(k.a)(zn, Jn, $e.a, Hn, yn),
        Qn = Object(C.a)(On, Yn, $n, pt.a, Jn, xn, pn),
        Kn = Object(Rt.a)(tn.a, kn),
        ti = Object(He.a)(ft.a, gn, Kn),
        ei = Object(zt.a)(gn, ti),
        ni = Object(M.a)(ei, $e.a, yn),
        ii = Object(O.a)(On, ni, ei, xn, pn),
        ri = Object(Gt.a)(gn),
        oi = Object(A.a)(ri, $e.a, yn),
        si = Object(I.a)(On, oi, ri, xn, pn),
        ai = Object(Wt.a)(Ln, Gn, Nn, Kn),
        ci = Object(Ht.a)(Ln, hn, gn, ai, Bn, Fn),
        ui = Object(N.a)(zn, ci, $e.a, Hn, yn),
        hi = Object(j.a)(On, Yn, ui, ci, xn, pn, un.a),
        li = Object(Xt.a)(gn, Nn, Kn),
        di = Object(Yt.a)(gn, li, fe.a, on.a),
        pi = Object(U.a)(di, $e.a, yn),
        fi = Object(B.a)(On, pi, di, xn, pn),
        mi = Object(Zt.a)(gn),
        gi = Object(H.a)(zn, mi, $e.a, Hn, yn),
        vi = Object(G.a)(On, Yn, gi, mi, xn, pn),
        bi = Object(Jt.a)(gn, fe.a),
        yi = Object(J.a)(zn, bi, $e.a, Hn, yn),
        _i = Object(Z.a)(On, Yn, yi, bi, fe.a, xn, pn),
        wi = Object(it.a)(zn, Nn, $e.a, Hn, yn),
        xi = Object(nt.a)(On, Yn, wi, Nn, xn, pn),
        Ti = Object(ue.a)(gn),
        Si = Object(Kt.a)(pt.a, ft.a, Ti, fe.a),
        Ci = Object(Se.a)(hn, Nn, Ti, Object(Ne.a)(Nn, dn)),
        ki = Object(ht.a)(Gn, gn, $e.a, dn, yn, Ci),
        Ei = Object(Qt.a)(gn, Si),
        Oi = Object(ut.a)(On, Ei, ki, xn, pn),
        Mi = Object(b.a)(Yn, ei, ci, Ti, pn),
        Ii = new WeakMap,
        Ai = Object(It.a)(Zn, Mi, Sn, pn, Ii, un.a),
        Ri = Object(oe.a)(Ln, hn, gn, Bn, Un, Fn, Vn),
        Pi = Object(ve.a)(zn, Ri, $e.a, Hn, yn),
        Di = Object(ge.a)(On, Yn, ft.a, Ri, Pi, xn, pn, un.a),
        ji = Object(D.a)(Gn),
        Ni = Object(pe.a)(ji, ft.a, gn, Nn, nn.a, Kn),
        Li = Object(de.a)(ji, ft.a, gn, Ni, nn.a, Kn, on.a),
        Bi = Object(ae.a)(Ye.a, ft.a, gn, ei, Nn, Ti, Li, fe.a, Xe.a, Kn),
        Ui = Object(se.a)(gn, Bi),
        Fi = Object(ye.a)(zn, ei, ci, Nn, Ui, $e.a, dn, Hn, yn, Ci),
        Vi = Object(be.a)(On, Yn, Ui, Fi, xn, pn),
        qi = Object(ce.a)(mn),
        zi = Object(_e.a)(qi, xn, new WeakSet),
        Gi = Object(le.a)(ei, ri, Nn, Li, fe.a, Kn),
        Hi = Object(he.a)(gn, Gi, fe.a),
        Wi = Object(Ee.a)(zn, Hi, $e.a, Hn, yn),
        Yi = Object(ke.a)(On, Yn, Hi, Wi, xn, pn),
        Xi = Object(Ue.a)(Li, $e.a, yn),
        Zi = Object(Be.a)(On, ft.a, Li, Xi, xn, pn),
        Ji = Object(St.a)(ln),
        $i = Object(tt.a)(ln),
        Qi = Ji ? Object(a.a)(fe.a, Object(Q.a)(ln), $i, Object(et.a)(r.a), mn, xn, new WeakMap, new WeakMap, ln) : void 0,
        Ki = Object(xt.a)(Cn, pn),
        tr = Object(q.a)(In, hn, V.a, $.a, new WeakSet, xn, Ki, pn, dn, sn.a, an.a, Pn, Dn),
        er = Object(S.a)(Qi, Mn, jn, Xn, Qn, ii, si, hi, fi, tr, vi, _i, xi, Oi, Ai, Di, Vi, zi, Yi, Zi),
        nr = Object(te.a)(gn),
        ir = Object(Ct.a)(On, nr, xn, pn),
        rr = Object(ee.a)(gn, fe.a),
        or = Object(kt.a)(On, rr, xn, pn),
        sr = Object(ne.a)(gn),
        ar = Object(Et.a)(On, sr, xn, pn),
        cr = Object(ie.a)(ft.a, gn, pn),
        ur = Object(Ot.a)(On, cr, xn),
        hr = Object(m.a)(er, ft.a, fe.a, Le.a, ir, or, ar, ur, fn),
        lr = Object(ct.a)(Ii),
        dr = Object(u.a)(lr),
        pr = Object(P.a)(dt.a),
        fr = Object(W.a)(lr),
        mr = Object(X.a)(dt.a),
        gr = Object(Vt.a)(wn, pr, dt.a, ft.a, ei, ri, ci, Nn, Ti, fe.a, mr, $i, Kn),
        vr = Object(Ft.a)(ft.a, gn, gr, Nn, fe.a, Kn),
        br = Object(Ut.a)(ln),
        yr = Object(T.a)(zn, pr, Gn, ei, ri, ci, Nn, fr, mr, $i, $e.a, br, dn, Hn, yn, Ci),
        _r = Ji ? Object(x.a)(dr, On, Yn, yr, vr, xn, pn, br, un.a) : void 0,
        wr = (Object(Mt.a)(ft.a, fe.a, Le.a, Ai, fn), Object(F.a)(fe.a, dn)),
        xr = Object(Ce.a)(In, hn, bn, lr, Ci, sn.a, Pn, Dn),
        Tr = (Object(At.a)(hn, ft.a, wr, Ai, xr), Object(me.a)(er, hn, ft.a, wr, xr)),
        Sr = Object(mt.a)(We.g, Cn),
        Cr = Object(gt.a)(We.c, kn),
        kr = Object(vt.a)(We.e, En),
        Er = Object(bt.a)(We.g, pn)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => {
        const e = new Uint32Array([1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 4, 0]);
        try {
            const n = t.decodeAudioData(e.buffer, () => { });
            return void 0 !== n && (n.catch(() => { }), !0)
        } catch { }
        return !1
    }
}, function (t, e, n) {
    (function (n) {
        var i, r = function () {
            this._tweens = {}, this._tweensAddedDuringUpdate = {}
        };
        r.prototype = {
            getAll: function () {
                return Object.keys(this._tweens).map(function (t) {
                    return this._tweens[t]
                }.bind(this))
            },
            removeAll: function () {
                this._tweens = {}
            },
            add: function (t) {
                this._tweens[t.getId()] = t, this._tweensAddedDuringUpdate[t.getId()] = t
            },
            remove: function (t) {
                delete this._tweens[t.getId()], delete this._tweensAddedDuringUpdate[t.getId()]
            },
            update: function (t, e) {
                var n = Object.keys(this._tweens);
                if (0 === n.length) return !1;
                for (t = void 0 !== t ? t : s.now(); n.length > 0;) {
                    this._tweensAddedDuringUpdate = {};
                    for (var i = 0; i < n.length; i++) {
                        var r = this._tweens[n[i]];
                        r && !1 === r.update(t) && (r._isPlaying = !1, e || delete this._tweens[n[i]])
                    }
                    n = Object.keys(this._tweensAddedDuringUpdate)
                }
                return !0
            }
        };
        var o, s = new r;
        s.Group = r, s._nextId = 0, s.nextId = function () {
            return s._nextId++
        }, "undefined" == typeof window && void 0 !== n ? s.now = function () {
            var t = n.hrtime();
            return 1e3 * t[0] + t[1] / 1e6
        } : "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? s.now = window.performance.now.bind(window.performance) : void 0 !== Date.now ? s.now = Date.now : s.now = function () {
            return (new Date).getTime()
        }, s.Tween = function (t, e) {
            this._object = t, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._repeat = 0, this._repeatDelayTime = void 0, this._yoyo = !1, this._isPlaying = !1, this._reversed = !1, this._delayTime = 0, this._startTime = null, this._easingFunction = s.Easing.Linear.None, this._interpolationFunction = s.Interpolation.Linear, this._chainedTweens = [], this._onStartCallback = null, this._onStartCallbackFired = !1, this._onUpdateCallback = null, this._onCompleteCallback = null, this._onStopCallback = null, this._group = e || s, this._id = s.nextId()
        }, s.Tween.prototype = {
            getId: function () {
                return this._id
            },
            isPlaying: function () {
                return this._isPlaying
            },
            to: function (t, e) {
                return this._valuesEnd = t, void 0 !== e && (this._duration = e), this
            },
            start: function (t) {
                for (var e in this._group.add(this), this._isPlaying = !0, this._onStartCallbackFired = !1, this._startTime = void 0 !== t ? "string" == typeof t ? s.now() + parseFloat(t) : t : s.now(), this._startTime += this._delayTime, this._valuesEnd) {
                    if (this._valuesEnd[e] instanceof Array) {
                        if (0 === this._valuesEnd[e].length) continue;
                        this._valuesEnd[e] = [this._object[e]].concat(this._valuesEnd[e])
                    }
                    void 0 !== this._object[e] && (this._valuesStart[e] = this._object[e], this._valuesStart[e] instanceof Array == !1 && (this._valuesStart[e] *= 1), this._valuesStartRepeat[e] = this._valuesStart[e] || 0)
                }
                return this
            },
            stop: function () {
                return this._isPlaying ? (this._group.remove(this), this._isPlaying = !1, null !== this._onStopCallback && this._onStopCallback(this._object), this.stopChainedTweens(), this) : this
            },
            end: function () {
                return this.update(this._startTime + this._duration), this
            },
            stopChainedTweens: function () {
                for (var t = 0, e = this._chainedTweens.length; t < e; t++) this._chainedTweens[t].stop()
            },
            group: function (t) {
                return this._group = t, this
            },
            delay: function (t) {
                return this._delayTime = t, this
            },
            repeat: function (t) {
                return this._repeat = t, this
            },
            repeatDelay: function (t) {
                return this._repeatDelayTime = t, this
            },
            yoyo: function (t) {
                return this._yoyo = t, this
            },
            easing: function (t) {
                return this._easingFunction = t, this
            },
            interpolation: function (t) {
                return this._interpolationFunction = t, this
            },
            chain: function () {
                return this._chainedTweens = arguments, this
            },
            onStart: function (t) {
                return this._onStartCallback = t, this
            },
            onUpdate: function (t) {
                return this._onUpdateCallback = t, this
            },
            onComplete: function (t) {
                return this._onCompleteCallback = t, this
            },
            onStop: function (t) {
                return this._onStopCallback = t, this
            },
            update: function (t) {
                var e, n, i;
                if (t < this._startTime) return !0;
                for (e in !1 === this._onStartCallbackFired && (null !== this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = !0), n = (t - this._startTime) / this._duration, n = 0 === this._duration || n > 1 ? 1 : n, i = this._easingFunction(n), this._valuesEnd)
                    if (void 0 !== this._valuesStart[e]) {
                        var r = this._valuesStart[e] || 0,
                            o = this._valuesEnd[e];
                        o instanceof Array ? this._object[e] = this._interpolationFunction(o, i) : ("string" == typeof o && (o = "+" === o.charAt(0) || "-" === o.charAt(0) ? r + parseFloat(o) : parseFloat(o)), "number" == typeof o && (this._object[e] = r + (o - r) * i))
                    } if (null !== this._onUpdateCallback && this._onUpdateCallback(this._object), 1 === n) {
                        if (this._repeat > 0) {
                            for (e in isFinite(this._repeat) && this._repeat--, this._valuesStartRepeat) {
                                if ("string" == typeof this._valuesEnd[e] && (this._valuesStartRepeat[e] = this._valuesStartRepeat[e] + parseFloat(this._valuesEnd[e])), this._yoyo) {
                                    var s = this._valuesStartRepeat[e];
                                    this._valuesStartRepeat[e] = this._valuesEnd[e], this._valuesEnd[e] = s
                                }
                                this._valuesStart[e] = this._valuesStartRepeat[e]
                            }
                            return this._yoyo && (this._reversed = !this._reversed), void 0 !== this._repeatDelayTime ? this._startTime = t + this._repeatDelayTime : this._startTime = t + this._delayTime, !0
                        }
                        null !== this._onCompleteCallback && this._onCompleteCallback(this._object);
                        for (var a = 0, c = this._chainedTweens.length; a < c; a++) this._chainedTweens[a].start(this._startTime + this._duration);
                        return !1
                    }
                return !0
            }
        }, s.Easing = {
            Linear: {
                None: function (t) {
                    return t
                }
            },
            Quadratic: {
                In: function (t) {
                    return t * t
                },
                Out: function (t) {
                    return t * (2 - t)
                },
                InOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                }
            },
            Cubic: {
                In: function (t) {
                    return t * t * t
                },
                Out: function (t) {
                    return --t * t * t + 1
                },
                InOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                }
            },
            Quartic: {
                In: function (t) {
                    return t * t * t * t
                },
                Out: function (t) {
                    return 1 - --t * t * t * t
                },
                InOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                }
            },
            Quintic: {
                In: function (t) {
                    return t * t * t * t * t
                },
                Out: function (t) {
                    return --t * t * t * t * t + 1
                },
                InOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                }
            },
            Sinusoidal: {
                In: function (t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Out: function (t) {
                    return Math.sin(t * Math.PI / 2)
                },
                InOut: function (t) {
                    return .5 * (1 - Math.cos(Math.PI * t))
                }
            },
            Exponential: {
                In: function (t) {
                    return 0 === t ? 0 : Math.pow(1024, t - 1)
                },
                Out: function (t) {
                    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                },
                InOut: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                }
            },
            Circular: {
                In: function (t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Out: function (t) {
                    return Math.sqrt(1 - --t * t)
                },
                InOut: function (t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                }
            },
            Elastic: {
                In: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : -Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI)
                },
                Out: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : Math.pow(2, -10 * t) * Math.sin(5 * (t - .1) * Math.PI) + 1
                },
                InOut: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? -.5 * Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) + 1
                }
            },
            Back: {
                In: function (t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                },
                Out: function (t) {
                    var e = 1.70158;
                    return --t * t * ((e + 1) * t + e) + 1
                },
                InOut: function (t) {
                    var e = 2.5949095;
                    return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                }
            },
            Bounce: {
                In: function (t) {
                    return 1 - s.Easing.Bounce.Out(1 - t)
                },
                Out: function (t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                },
                InOut: function (t) {
                    return t < .5 ? .5 * s.Easing.Bounce.In(2 * t) : .5 * s.Easing.Bounce.Out(2 * t - 1) + .5
                }
            }
        }, s.Interpolation = {
            Linear: function (t, e) {
                var n = t.length - 1,
                    i = n * e,
                    r = Math.floor(i),
                    o = s.Interpolation.Utils.Linear;
                return e < 0 ? o(t[0], t[1], i) : e > 1 ? o(t[n], t[n - 1], n - i) : o(t[r], t[r + 1 > n ? n : r + 1], i - r)
            },
            Bezier: function (t, e) {
                for (var n = 0, i = t.length - 1, r = Math.pow, o = s.Interpolation.Utils.Bernstein, a = 0; a <= i; a++) n += r(1 - e, i - a) * r(e, a) * t[a] * o(i, a);
                return n
            },
            CatmullRom: function (t, e) {
                var n = t.length - 1,
                    i = n * e,
                    r = Math.floor(i),
                    o = s.Interpolation.Utils.CatmullRom;
                return t[0] === t[n] ? (e < 0 && (r = Math.floor(i = n * (1 + e))), o(t[(r - 1 + n) % n], t[r], t[(r + 1) % n], t[(r + 2) % n], i - r)) : e < 0 ? t[0] - (o(t[0], t[0], t[1], t[1], -i) - t[0]) : e > 1 ? t[n] - (o(t[n], t[n], t[n - 1], t[n - 1], i - n) - t[n]) : o(t[r ? r - 1 : 0], t[r], t[n < r + 1 ? n : r + 1], t[n < r + 2 ? n : r + 2], i - r)
            },
            Utils: {
                Linear: function (t, e, n) {
                    return (e - t) * n + t
                },
                Bernstein: function (t, e) {
                    var n = s.Interpolation.Utils.Factorial;
                    return n(t) / n(e) / n(t - e)
                },
                Factorial: (o = [1], function (t) {
                    var e = 1;
                    if (o[t]) return o[t];
                    for (var n = t; n > 1; n--) e *= n;
                    return o[t] = e, e
                }),
                CatmullRom: function (t, e, n, i, r) {
                    var o = .5 * (n - t),
                        s = .5 * (i - e),
                        a = r * r;
                    return (2 * e - 2 * n + o + s) * (r * a) + (-3 * e + 3 * n - 2 * o - s) * a + o * r + e
                }
            }
        }, void 0 === (i = function () {
            return s
        }.apply(e, [])) || (t.exports = i)
    }).call(this, n(714))
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = () => {
        try {
            return new DOMException("", "IndexSizeError")
        } catch (t) {
            return t.code = 1, t.name = "IndexSizeError", t
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e, n, i) => {
        for (const e of t)
            if (n(e)) {
                if (i) return !1;
                throw Error("The set contains at least one similar element.")
            } return t.add(e), !0
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(0),
        r = n(26);
    const o = t => {
        if (i.a.has(t)) throw new Error("The AudioNode is already stored.");
        i.a.add(t), Object(r.a)(t).forEach(t => t(!0))
    }
}, function (t, e, n) {
    ! function (t, e, n, i) {
        "use strict";
        e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n, i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
        var r = function (t, e, n) {
            return {
                endTime: e,
                insertTime: n,
                type: "exponentialRampToValue",
                value: t
            }
        },
            o = function (t, e, n) {
                return {
                    endTime: e,
                    insertTime: n,
                    type: "linearRampToValue",
                    value: t
                }
            },
            s = function (t, e) {
                return {
                    startTime: e,
                    type: "setValue",
                    value: t
                }
            },
            a = function (t, e, n) {
                return {
                    duration: n,
                    startTime: e,
                    type: "setValueCurve",
                    values: t
                }
            },
            c = function (t, e, n) {
                var i = n.startTime,
                    r = n.target,
                    o = n.timeConstant;
                return r + (e - r) * Math.exp((i - t) / o)
            },
            u = function (t) {
                return "exponentialRampToValue" === t.type
            },
            h = function (t) {
                return "linearRampToValue" === t.type
            },
            l = function (t) {
                return u(t) || h(t)
            },
            d = function (t) {
                return "setValue" === t.type
            },
            p = function (t) {
                return "setValueCurve" === t.type
            },
            f = function t(e, n, i, r) {
                var o = e[n];
                return void 0 === o ? r : l(o) || d(o) ? o.value : p(o) ? o.values[o.values.length - 1] : c(i, t(e, n - 1, o.startTime, r), o)
            },
            m = function (t, e, n, i, r) {
                return void 0 === n ? [i.insertTime, r] : l(n) ? [n.endTime, n.value] : d(n) ? [n.startTime, n.value] : p(n) ? [n.startTime + n.duration, n.values[n.values.length - 1]] : [n.startTime, f(t, e - 1, n.startTime, r)]
            },
            g = function (t) {
                return "cancelAndHold" === t.type
            },
            v = function (t) {
                return "cancelScheduledValues" === t.type
            },
            b = function (t) {
                return g(t) || v(t) ? t.cancelTime : u(t) || h(t) ? t.endTime : t.startTime
            },
            y = function (t, e, n, i) {
                var r = i.endTime,
                    o = i.value;
                return n === o ? o : 0 < n && 0 < o || n < 0 && o < 0 ? n * Math.pow(o / n, (t - e) / (r - e)) : 0
            },
            _ = function (t, e, n, i) {
                return n + (t - e) / (i.endTime - e) * (i.value - n)
            },
            w = function (t, e) {
                var n = e.duration,
                    i = e.startTime,
                    r = e.values;
                return function (t, e) {
                    var n = Math.floor(e),
                        i = Math.ceil(e);
                    return n === i ? t[n] : (1 - (e - n)) * t[n] + (1 - (i - e)) * t[i]
                }(r, (t - i) / n * (r.length - 1))
            },
            x = function (t) {
                return "setTarget" === t.type
            },
            T = function () {
                function t(e) {
                    n(this, t), this._automationEvents = [], this._currenTime = 0, this._defaultValue = e
                }
                return i(t, [{
                    key: Symbol.iterator,
                    value: function () {
                        return this._automationEvents[Symbol.iterator]()
                    }
                }, {
                    key: "add",
                    value: function (t) {
                        var e = b(t);
                        if (g(t) || v(t)) {
                            var n = this._automationEvents.findIndex((function (t) {
                                return b(t) >= e
                            })),
                                i = this._automationEvents[n];
                            if (-1 !== n && (this._automationEvents = this._automationEvents.slice(0, n)), g(t)) {
                                var c = this._automationEvents[this._automationEvents.length - 1];
                                if (void 0 !== i && l(i)) {
                                    if (x(c)) throw new Error("The internal list is malformed.");
                                    var d = p(c) ? c.startTime + c.duration : b(c),
                                        f = p(c) ? c.values[c.values.length - 1] : c.value,
                                        m = u(i) ? y(e, d, f, i) : _(e, d, f, i),
                                        w = u(i) ? r(m, e, this._currenTime) : o(m, e, this._currenTime);
                                    this._automationEvents.push(w)
                                }
                                void 0 !== c && x(c) && this._automationEvents.push(s(this.getValue(e), e)), void 0 !== c && p(c) && c.startTime + c.duration > e && (this._automationEvents[this._automationEvents.length - 1] = a(new Float32Array([6, 7]), c.startTime, e - c.startTime))
                            }
                        } else {
                            var T = this._automationEvents.findIndex((function (t) {
                                return b(t) > e
                            })),
                                S = -1 === T ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[T - 1];
                            if (void 0 !== S && p(S) && b(S) + S.duration > e) return !1;
                            var C = u(t) ? r(t.value, t.endTime, this._currenTime) : h(t) ? o(t.value, e, this._currenTime) : t;
                            if (-1 === T) this._automationEvents.push(C);
                            else {
                                if (p(t) && e + t.duration > b(this._automationEvents[T])) return !1;
                                this._automationEvents.splice(T, 0, C)
                            }
                        }
                        return !0
                    }
                }, {
                    key: "flush",
                    value: function (t) {
                        var e = this._automationEvents.findIndex((function (e) {
                            return b(e) > t
                        }));
                        if (e > 1) {
                            var n = this._automationEvents.slice(e - 1),
                                i = n[0];
                            x(i) && n.unshift(s(f(this._automationEvents, e - 2, i.startTime, this._defaultValue), i.startTime)), this._automationEvents = n
                        }
                    }
                }, {
                    key: "getValue",
                    value: function (t) {
                        if (0 === this._automationEvents.length) return this._defaultValue;
                        var n = this._automationEvents[this._automationEvents.length - 1],
                            i = this._automationEvents.findIndex((function (e) {
                                return b(e) > t
                            })),
                            r = this._automationEvents[i],
                            o = b(n) <= t ? n : this._automationEvents[i - 1];
                        if (void 0 !== o && x(o) && (void 0 === r || !l(r) || r.insertTime > t)) return c(t, f(this._automationEvents, i - 2, o.startTime, this._defaultValue), o);
                        if (void 0 !== o && d(o) && (void 0 === r || !l(r))) return o.value;
                        if (void 0 !== o && p(o) && (void 0 === r || !l(r) || o.startTime + o.duration > t)) return t < o.startTime + o.duration ? w(t, o) : o.values[o.values.length - 1];
                        if (void 0 !== o && l(o) && (void 0 === r || !l(r))) return o.value;
                        if (void 0 !== r && u(r)) {
                            var s = m(this._automationEvents, i - 1, o, r, this._defaultValue),
                                a = e(s, 2),
                                g = a[0],
                                v = a[1];
                            return y(t, g, v, r)
                        }
                        if (void 0 !== r && h(r)) {
                            var T = m(this._automationEvents, i - 1, o, r, this._defaultValue),
                                S = e(T, 2),
                                C = S[0],
                                k = S[1];
                            return _(t, C, k, r)
                        }
                        return this._defaultValue
                    }
                }]), t
            }();
        t.AutomationEventList = T, t.createCancelAndHoldAutomationEvent = function (t) {
            return {
                cancelTime: t,
                type: "cancelAndHold"
            }
        }, t.createCancelScheduledValuesAutomationEvent = function (t) {
            return {
                cancelTime: t,
                type: "cancelScheduledValues"
            }
        }, t.createExponentialRampToValueAutomationEvent = function (t, e) {
            return {
                endTime: e,
                type: "exponentialRampToValue",
                value: t
            }
        }, t.createLinearRampToValueAutomationEvent = function (t, e) {
            return {
                endTime: e,
                type: "linearRampToValue",
                value: t
            }
        }, t.createSetTargetAutomationEvent = function (t, e, n) {
            return {
                startTime: e,
                target: t,
                timeConstant: n,
                type: "setTarget"
            }
        }, t.createSetValueAutomationEvent = s, t.createSetValueCurveAutomationEvent = a, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }(e, n(703), n(709), n(710))
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(0);
    const r = t => i.h.has(t)
}, function (t, e, n) {
    "use strict";
    var i, r = function () {
        return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i
    },
        o = function () {
            var t = {};
            return function (e) {
                if (void 0 === t[e]) {
                    var n = document.querySelector(e);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head
                    } catch (t) {
                        n = null
                    }
                    t[e] = n
                }
                return t[e]
            }
        }(),
        s = [];

    function a(t) {
        for (var e = -1, n = 0; n < s.length; n++)
            if (s[n].identifier === t) {
                e = n;
                break
            } return e
    }

    function c(t, e) {
        for (var n = {}, i = [], r = 0; r < t.length; r++) {
            var o = t[r],
                c = e.base ? o[0] + e.base : o[0],
                u = n[c] || 0,
                h = "".concat(c, " ").concat(u);
            n[c] = u + 1;
            var l = a(h),
                d = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                }; - 1 !== l ? (s[l].references++, s[l].updater(d)) : s.push({
                    identifier: h,
                    updater: g(d, e),
                    references: 1
                }), i.push(h)
        }
        return i
    }

    function u(t) {
        var e = document.createElement("style"),
            i = t.attributes || {};
        if (void 0 === i.nonce) {
            var r = n.nc;
            r && (i.nonce = r)
        }
        if (Object.keys(i).forEach((function (t) {
            e.setAttribute(t, i[t])
        })), "function" == typeof t.insert) t.insert(e);
        else {
            var s = o(t.insert || "head");
            if (!s) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            s.appendChild(e)
        }
        return e
    }
    var h, l = (h = [], function (t, e) {
        return h[t] = e, h.filter(Boolean).join("\n")
    });

    function d(t, e, n, i) {
        var r = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
        if (t.styleSheet) t.styleSheet.cssText = l(e, r);
        else {
            var o = document.createTextNode(r),
                s = t.childNodes;
            s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(o, s[e]) : t.appendChild(o)
        }
    }

    function p(t, e, n) {
        var i = n.css,
            r = n.media,
            o = n.sourceMap;
        if (r ? t.setAttribute("media", r) : t.removeAttribute("media"), o && btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), t.styleSheet) t.styleSheet.cssText = i;
        else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(i))
        }
    }
    var f = null,
        m = 0;

    function g(t, e) {
        var n, i, r;
        if (e.singleton) {
            var o = m++;
            n = f || (f = u(e)), i = d.bind(null, n, o, !1), r = d.bind(null, n, o, !0)
        } else n = u(e), i = p.bind(null, n, e), r = function () {
            ! function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t)
            }(n)
        };
        return i(t),
            function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    i(t = e)
                } else r()
            }
    }
    t.exports = function (t, e) {
        (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = r());
        var n = c(t = t || [], e);
        return function (t) {
            if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
                for (var i = 0; i < n.length; i++) {
                    var r = a(n[i]);
                    s[r].references--
                }
                for (var o = c(t, e), u = 0; u < n.length; u++) {
                    var h = a(n[u]);
                    0 === s[h].references && (s[h].updater(), s.splice(h, 1))
                }
                n = o
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
        var e = [];
        return e.toString = function () {
            return this.map((function (e) {
                var n = function (t, e) {
                    var n = t[1] || "",
                        i = t[3];
                    if (!i) return n;
                    if (e && "function" == typeof btoa) {
                        var r = (s = i, a = btoa(unescape(encodeURIComponent(JSON.stringify(s)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a), "/*# ".concat(c, " */")),
                            o = i.sources.map((function (t) {
                                return "/*# sourceURL=".concat(i.sourceRoot || "").concat(t, " */")
                            }));
                        return [n].concat(o).concat([r]).join("\n")
                    }
                    var s, a, c;
                    return [n].join("\n")
                }(e, t);
                return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n
            })).join("")
        }, e.i = function (t, n, i) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            var r = {};
            if (i)
                for (var o = 0; o < this.length; o++) {
                    var s = this[o][0];
                    null != s && (r[s] = !0)
                }
            for (var a = 0; a < t.length; a++) {
                var c = [].concat(t[a]);
                i && r[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n), e.push(c))
            }
        }, e
    }
}, function (t, e, n) {
    "use strict";
    var i = !0,
        r = !0;

    function o(t, e, n) {
        var i = t.match(e);
        return i && i.length >= n && parseInt(i[n], 10)
    }
    t.exports = {
        extractVersion: o,
        wrapPeerConnectionEvent: function (t, e, n) {
            if (t.RTCPeerConnection) {
                var i = t.RTCPeerConnection.prototype,
                    r = i.addEventListener;
                i.addEventListener = function (t, i) {
                    if (t !== e) return r.apply(this, arguments);
                    var o = function (t) {
                        var e = n(t);
                        e && i(e)
                    };
                    return this._eventMap = this._eventMap || {}, this._eventMap[i] = o, r.apply(this, [t, o])
                };
                var o = i.removeEventListener;
                i.removeEventListener = function (t, n) {
                    if (t !== e || !this._eventMap || !this._eventMap[n]) return o.apply(this, arguments);
                    var i = this._eventMap[n];
                    return delete this._eventMap[n], o.apply(this, [t, i])
                }, Object.defineProperty(i, "on" + e, {
                    get: function () {
                        return this["_on" + e]
                    },
                    set: function (t) {
                        this["_on" + e] && (this.removeEventListener(e, this["_on" + e]), delete this["_on" + e]), t && this.addEventListener(e, this["_on" + e] = t)
                    },
                    enumerable: !0,
                    configurable: !0
                })
            }
        },
        disableLog: function (t) {
            return "boolean" != typeof t ? new Error("Argument type: " + typeof t + ". Please use a boolean.") : (i = t, t ? "adapter.js logging disabled" : "adapter.js logging enabled")
        },
        disableWarnings: function (t) {
            return "boolean" != typeof t ? new Error("Argument type: " + typeof t + ". Please use a boolean.") : (r = !t, "adapter.js deprecation warnings " + (t ? "disabled" : "enabled"))
        },
        log: function () {
            if ("object" == typeof window) {
                if (i) return;
                "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments)
            }
        },
        deprecated: function (t, e) {
            r && console.warn(t + " is deprecated, please use " + e + " instead.")
        },
        detectBrowser: function (t) {
            var e = t && t.navigator,
                n = {
                    browser: null,
                    version: null
                };
            if (void 0 === t || !t.navigator) return n.browser = "Not a browser.", n;
            if (e.mozGetUserMedia) n.browser = "firefox", n.version = o(e.userAgent, /Firefox\/(\d+)\./, 1);
            else if (e.webkitGetUserMedia) n.browser = "chrome", n.version = o(e.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
            else if (e.mediaDevices && e.userAgent.match(/Edge\/(\d+).(\d+)$/)) n.browser = "edge", n.version = o(e.userAgent, /Edge\/(\d+).(\d+)$/, 2);
            else {
                if (!t.RTCPeerConnection || !e.userAgent.match(/AppleWebKit\/(\d+)\./)) return n.browser = "Not a supported browser.", n;
                n.browser = "safari", n.version = o(e.userAgent, /AppleWebKit\/(\d+)\./, 1)
            }
            return n
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(0),
        r = n(10);
    const o = t => Object(r.a)(i.i, t)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(0),
        r = n(26);
    const o = t => {
        if (!i.a.has(t)) throw new Error("The AudioNode is not stored.");
        i.a.delete(t), Object(r.a)(t).forEach(t => t(!1))
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(32);
    const r = t => Object(i.a)(t[0])
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(0);
    const r = t => i.a.has(t)
}, function (t, e, n) {
    var i = n(23),
        r = n(724);
    "string" == typeof (r = r.__esModule ? r.default : r) && (r = [
        [t.i, r, ""]
    ]);
    var o = {
        insert: "head",
        singleton: !1
    };
    i(r, o);
    t.exports = r.locals || {}
}, function (t, e, n) {
    var i;
    ! function (n) {
        "use strict";

        function r() {
            if (r.prototype._singleton) throw new Error("WebMidi is a singleton, it cannot be instantiated directly.");
            r.prototype._singleton = this, this._inputs = [], this._outputs = [], this._userHandlers = {}, this._stateChangeQueue = [], this._processingStateChange = !1, this._midiInterfaceEvents = ["connected", "disconnected"], this._notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"], this._semitones = {
                C: 0,
                D: 2,
                E: 4,
                F: 5,
                G: 7,
                A: 9,
                B: 11
            }, Object.defineProperties(this, {
                MIDI_SYSTEM_MESSAGES: {
                    value: {
                        sysex: 240,
                        timecode: 241,
                        songposition: 242,
                        songselect: 243,
                        tuningrequest: 246,
                        sysexend: 247,
                        clock: 248,
                        start: 250,
                        continue: 251,
                        stop: 252,
                        activesensing: 254,
                        reset: 255,
                        midimessage: 0,
                        unknownsystemmessage: -1
                    },
                    writable: !1,
                    enumerable: !0,
                    configurable: !1
                },
                MIDI_CHANNEL_MESSAGES: {
                    value: {
                        noteoff: 8,
                        noteon: 9,
                        keyaftertouch: 10,
                        controlchange: 11,
                        channelmode: 11,
                        programchange: 12,
                        channelaftertouch: 13,
                        pitchbend: 14
                    },
                    writable: !1,
                    enumerable: !0,
                    configurable: !1
                },
                MIDI_REGISTERED_PARAMETER: {
                    value: {
                        pitchbendrange: [0, 0],
                        channelfinetuning: [0, 1],
                        channelcoarsetuning: [0, 2],
                        tuningprogram: [0, 3],
                        tuningbank: [0, 4],
                        modulationrange: [0, 5],
                        azimuthangle: [61, 0],
                        elevationangle: [61, 1],
                        gain: [61, 2],
                        distanceratio: [61, 3],
                        maximumdistance: [61, 4],
                        maximumdistancegain: [61, 5],
                        referencedistanceratio: [61, 6],
                        panspreadangle: [61, 7],
                        rollangle: [61, 8]
                    },
                    writable: !1,
                    enumerable: !0,
                    configurable: !1
                },
                MIDI_CONTROL_CHANGE_MESSAGES: {
                    value: {
                        bankselectcoarse: 0,
                        modulationwheelcoarse: 1,
                        breathcontrollercoarse: 2,
                        footcontrollercoarse: 4,
                        portamentotimecoarse: 5,
                        dataentrycoarse: 6,
                        volumecoarse: 7,
                        balancecoarse: 8,
                        pancoarse: 10,
                        expressioncoarse: 11,
                        effectcontrol1coarse: 12,
                        effectcontrol2coarse: 13,
                        generalpurposeslider1: 16,
                        generalpurposeslider2: 17,
                        generalpurposeslider3: 18,
                        generalpurposeslider4: 19,
                        bankselectfine: 32,
                        modulationwheelfine: 33,
                        breathcontrollerfine: 34,
                        footcontrollerfine: 36,
                        portamentotimefine: 37,
                        dataentryfine: 38,
                        volumefine: 39,
                        balancefine: 40,
                        panfine: 42,
                        expressionfine: 43,
                        effectcontrol1fine: 44,
                        effectcontrol2fine: 45,
                        holdpedal: 64,
                        portamento: 65,
                        sustenutopedal: 66,
                        softpedal: 67,
                        legatopedal: 68,
                        hold2pedal: 69,
                        soundvariation: 70,
                        resonance: 71,
                        soundreleasetime: 72,
                        soundattacktime: 73,
                        brightness: 74,
                        soundcontrol6: 75,
                        soundcontrol7: 76,
                        soundcontrol8: 77,
                        soundcontrol9: 78,
                        soundcontrol10: 79,
                        generalpurposebutton1: 80,
                        generalpurposebutton2: 81,
                        generalpurposebutton3: 82,
                        generalpurposebutton4: 83,
                        reverblevel: 91,
                        tremololevel: 92,
                        choruslevel: 93,
                        celestelevel: 94,
                        phaserlevel: 95,
                        databuttonincrement: 96,
                        databuttondecrement: 97,
                        nonregisteredparametercoarse: 98,
                        nonregisteredparameterfine: 99,
                        registeredparametercoarse: 100,
                        registeredparameterfine: 101
                    },
                    writable: !1,
                    enumerable: !0,
                    configurable: !1
                },
                MIDI_CHANNEL_MODE_MESSAGES: {
                    value: {
                        allsoundoff: 120,
                        resetallcontrollers: 121,
                        localcontrol: 122,
                        allnotesoff: 123,
                        omnimodeoff: 124,
                        omnimodeon: 125,
                        monomodeon: 126,
                        polymodeon: 127
                    },
                    writable: !1,
                    enumerable: !0,
                    configurable: !1
                },
                octaveOffset: {
                    value: 0,
                    writable: !0,
                    enumerable: !0,
                    configurable: !1
                }
            }), Object.defineProperties(this, {
                supported: {
                    enumerable: !0,
                    get: function () {
                        return "requestMIDIAccess" in navigator
                    }
                },
                enabled: {
                    enumerable: !0,
                    get: function () {
                        return void 0 !== this.interface
                    }.bind(this)
                },
                inputs: {
                    enumerable: !0,
                    get: function () {
                        return this._inputs
                    }.bind(this)
                },
                outputs: {
                    enumerable: !0,
                    get: function () {
                        return this._outputs
                    }.bind(this)
                },
                sysexEnabled: {
                    enumerable: !0,
                    get: function () {
                        return !(!this.interface || !this.interface.sysexEnabled)
                    }.bind(this)
                },
                time: {
                    enumerable: !0,
                    get: function () {
                        return performance.now()
                    }
                }
            })
        }

        function o(t) {
            var e = this;
            this._userHandlers = {
                channel: {},
                system: {}
            }, this._midiInput = t, Object.defineProperties(this, {
                connection: {
                    enumerable: !0,
                    get: function () {
                        return e._midiInput.connection
                    }
                },
                id: {
                    enumerable: !0,
                    get: function () {
                        return e._midiInput.id
                    }
                },
                manufacturer: {
                    enumerable: !0,
                    get: function () {
                        return e._midiInput.manufacturer
                    }
                },
                name: {
                    enumerable: !0,
                    get: function () {
                        return e._midiInput.name
                    }
                },
                state: {
                    enumerable: !0,
                    get: function () {
                        return e._midiInput.state
                    }
                },
                type: {
                    enumerable: !0,
                    get: function () {
                        return e._midiInput.type
                    }
                }
            }), this._initializeUserHandlers(), this._midiInput.onmidimessage = this._onMidiMessage.bind(this)
        }

        function s(t) {
            var e = this;
            this._midiOutput = t, Object.defineProperties(this, {
                connection: {
                    enumerable: !0,
                    get: function () {
                        return e._midiOutput.connection
                    }
                },
                id: {
                    enumerable: !0,
                    get: function () {
                        return e._midiOutput.id
                    }
                },
                manufacturer: {
                    enumerable: !0,
                    get: function () {
                        return e._midiOutput.manufacturer
                    }
                },
                name: {
                    enumerable: !0,
                    get: function () {
                        return e._midiOutput.name
                    }
                },
                state: {
                    enumerable: !0,
                    get: function () {
                        return e._midiOutput.state
                    }
                },
                type: {
                    enumerable: !0,
                    get: function () {
                        return e._midiOutput.type
                    }
                }
            })
        }
        var a = new r;
        r.prototype.enable = function (t, e) {
            return this.enabled ? void 0 : this.supported ? void navigator.requestMIDIAccess({
                sysex: e
            }).then(function (e) {
                function n() {
                    clearTimeout(i), this._updateInputsAndOutputs(), this.interface.onstatechange = this._onInterfaceStateChange.bind(this), "function" == typeof t && t.call(this), r.forEach(function (t) {
                        this._onInterfaceStateChange(t)
                    }.bind(this))
                }
                var i, r = [],
                    o = [];
                this.interface = e, this._resetInterfaceUserHandlers(), this.interface.onstatechange = function (t) {
                    r.push(t)
                };
                for (var s = e.inputs.values(), a = s.next(); a && !a.done; a = s.next()) o.push(a.value.open());
                for (var c = e.outputs.values(), u = c.next(); u && !u.done; u = c.next()) o.push(u.value.open());
                i = setTimeout(n.bind(this), 200), Promise && Promise.all(o).catch((function (t) { })).then(n.bind(this))
            }.bind(this), function (e) {
                "function" == typeof t && t.call(this, e)
            }.bind(this)) : void ("function" == typeof t && t(new Error("The Web MIDI API is not supported by your browser.")))
        }, r.prototype.disable = function () {
            if (!this.supported) throw new Error("The Web MIDI API is not supported by your browser.");
            this.interface && (this.interface.onstatechange = void 0), this.interface = void 0, this._inputs = [], this._outputs = [], this._resetInterfaceUserHandlers()
        }, r.prototype.addListener = function (t, e) {
            if (!this.enabled) throw new Error("WebMidi must be enabled before adding event listeners.");
            if ("function" != typeof e) throw new TypeError("The 'listener' parameter must be a function.");
            if (!(this._midiInterfaceEvents.indexOf(t) >= 0)) throw new TypeError("The specified event type is not supported.");
            return this._userHandlers[t].push(e), this
        }, r.prototype.hasListener = function (t, e) {
            if (!this.enabled) throw new Error("WebMidi must be enabled before checking event listeners.");
            if ("function" != typeof e) throw new TypeError("The 'listener' parameter must be a function.");
            if (!(this._midiInterfaceEvents.indexOf(t) >= 0)) throw new TypeError("The specified event type is not supported.");
            for (var n = 0; n < this._userHandlers[t].length; n++)
                if (this._userHandlers[t][n] === e) return !0;
            return !1
        }, r.prototype.removeListener = function (t, e) {
            if (!this.enabled) throw new Error("WebMidi must be enabled before removing event listeners.");
            if (void 0 !== e && "function" != typeof e) throw new TypeError("The 'listener' parameter must be a function.");
            if (this._midiInterfaceEvents.indexOf(t) >= 0)
                if (e)
                    for (var n = 0; n < this._userHandlers[t].length; n++) this._userHandlers[t][n] === e && this._userHandlers[t].splice(n, 1);
                else this._userHandlers[t] = [];
            else {
                if (void 0 !== t) throw new TypeError("The specified event type is not supported.");
                this._resetInterfaceUserHandlers()
            }
            return this
        }, r.prototype.toMIDIChannels = function (t) {
            var e;
            return (e = "all" === t || void 0 === t ? ["all"] : Array.isArray(t) ? t : [t]).indexOf("all") > -1 && (e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), e.map((function (t) {
                return parseInt(t)
            })).filter((function (t) {
                return t >= 1 && 16 >= t
            }))
        }, r.prototype.getInputById = function (t) {
            if (!this.enabled) throw new Error("WebMidi is not enabled.");
            for (var e = 0; e < this.inputs.length; e++)
                if (this.inputs[e].id === t) return this.inputs[e];
            return !1
        }, r.prototype.getOutputById = function (t) {
            if (!this.enabled) throw new Error("WebMidi is not enabled.");
            for (var e = 0; e < this.outputs.length; e++)
                if (this.outputs[e].id === t) return this.outputs[e];
            return !1
        }, r.prototype.getInputByName = function (t) {
            if (!this.enabled) throw new Error("WebMidi is not enabled.");
            for (var e = 0; e < this.inputs.length; e++)
                if (~this.inputs[e].name.indexOf(t)) return this.inputs[e];
            return !1
        }, r.prototype.getOctave = function (t) {
            return null != t && t >= 0 && 127 >= t ? Math.floor(Math.floor(t) / 12 - 1) + Math.floor(a.octaveOffset) : void 0
        }, r.prototype.getOutputByName = function (t) {
            if (!this.enabled) throw new Error("WebMidi is not enabled.");
            for (var e = 0; e < this.outputs.length; e++)
                if (~this.outputs[e].name.indexOf(t)) return this.outputs[e];
            return !1
        }, r.prototype.guessNoteNumber = function (t) {
            var e = !1;
            if (t && t.toFixed && t >= 0 && 127 >= t ? e = Math.round(t) : parseInt(t) >= 0 && parseInt(t) <= 127 ? e = parseInt(t) : ("string" == typeof t || t instanceof String) && (e = this.noteNameToNumber(t)), !1 === e) throw new Error("Invalid input value (" + t + ").");
            return e
        }, r.prototype.noteNameToNumber = function (t) {
            "string" != typeof t && (t = "");
            var e = t.match(/([CDEFGAB])(#{0,2}|b{0,2})(-?\d+)/i);
            if (!e) throw new RangeError("Invalid note name.");
            var n = a._semitones[e[1].toUpperCase()],
                i = 12 * (parseInt(e[3]) + 1 - Math.floor(a.octaveOffset)) + n;
            if (e[2].toLowerCase().indexOf("b") > -1 ? i -= e[2].length : e[2].toLowerCase().indexOf("#") > -1 && (i += e[2].length), 0 > i || i > 127) throw new RangeError("Invalid note name or note outside valid range.");
            return i
        }, r.prototype._updateInputsAndOutputs = function () {
            this._updateInputs(), this._updateOutputs()
        }, r.prototype._updateInputs = function () {
            for (var t = 0; t < this._inputs.length; t++) {
                for (var e = !0, n = this.interface.inputs.values(), i = n.next(); i && !i.done; i = n.next())
                    if (this._inputs[t]._midiInput === i.value) {
                        e = !1;
                        break
                    } e && this._inputs.splice(t, 1)
            }
            this.interface && this.interface.inputs.forEach(function (t) {
                for (var e = !0, n = 0; n < this._inputs.length; n++) this._inputs[n]._midiInput === t && (e = !1);
                e && this._inputs.push(new o(t))
            }.bind(this))
        }, r.prototype._updateOutputs = function () {
            for (var t = 0; t < this._outputs.length; t++) {
                for (var e = !0, n = this.interface.outputs.values(), i = n.next(); i && !i.done; i = n.next())
                    if (this._outputs[t]._midiOutput === i.value) {
                        e = !1;
                        break
                    } e && this._outputs.splice(t, 1)
            }
            this.interface && this.interface.outputs.forEach(function (t) {
                for (var e = !0, n = 0; n < this._outputs.length; n++) this._outputs[n]._midiOutput === t && (e = !1);
                e && this._outputs.push(new s(t))
            }.bind(this))
        }, r.prototype._onInterfaceStateChange = function (t) {
            this._updateInputsAndOutputs();
            var e = {
                timestamp: t.timeStamp,
                type: t.port.state
            };
            this.interface && "connected" === t.port.state ? "output" === t.port.type ? e.port = this.getOutputById(t.port.id) : "input" === t.port.type && (e.port = this.getInputById(t.port.id)) : e.port = {
                connection: "closed",
                id: t.port.id,
                manufacturer: t.port.manufacturer,
                name: t.port.name,
                state: t.port.state,
                type: t.port.type
            }, this._userHandlers[t.port.state].forEach((function (t) {
                t(e)
            }))
        }, r.prototype._resetInterfaceUserHandlers = function () {
            for (var t = 0; t < this._midiInterfaceEvents.length; t++) this._userHandlers[this._midiInterfaceEvents[t]] = []
        }, o.prototype.addListener = function (t, e, n) {
            var i = this;
            if (void 0 === e && (e = "all"), Array.isArray(e) || (e = [e]), e.forEach((function (t) {
                if ("all" !== t && !(t >= 1 && 16 >= t)) throw new RangeError("The 'channel' parameter is invalid.")
            })), "function" != typeof n) throw new TypeError("The 'listener' parameter must be a function.");
            if (void 0 !== a.MIDI_SYSTEM_MESSAGES[t]) this._userHandlers.system[t] || (this._userHandlers.system[t] = []), this._userHandlers.system[t].push(n);
            else {
                if (void 0 === a.MIDI_CHANNEL_MESSAGES[t]) throw new TypeError("The specified event type is not supported.");
                if (e.indexOf("all") > -1) {
                    e = [];
                    for (var r = 1; 16 >= r; r++) e.push(r)
                }
                this._userHandlers.channel[t] || (this._userHandlers.channel[t] = []), e.forEach((function (e) {
                    i._userHandlers.channel[t][e] || (i._userHandlers.channel[t][e] = []), i._userHandlers.channel[t][e].push(n)
                }))
            }
            return this
        }, o.prototype.on = o.prototype.addListener, o.prototype.hasListener = function (t, e, n) {
            var i = this;
            if ("function" != typeof n) throw new TypeError("The 'listener' parameter must be a function.");
            if (void 0 === e && (e = "all"), e.constructor !== Array && (e = [e]), void 0 !== a.MIDI_SYSTEM_MESSAGES[t]) {
                for (var r = 0; r < this._userHandlers.system[t].length; r++)
                    if (this._userHandlers.system[t][r] === n) return !0
            } else if (void 0 !== a.MIDI_CHANNEL_MESSAGES[t]) {
                if (e.indexOf("all") > -1) {
                    e = [];
                    for (var o = 1; 16 >= o; o++) e.push(o)
                }
                return !!this._userHandlers.channel[t] && e.every((function (e) {
                    var r = i._userHandlers.channel[t][e];
                    return r && r.indexOf(n) > -1
                }))
            }
            return !1
        }, o.prototype.removeListener = function (t, e, n) {
            var i = this;
            if (void 0 !== n && "function" != typeof n) throw new TypeError("The 'listener' parameter must be a function.");
            if (void 0 === e && (e = "all"), e.constructor !== Array && (e = [e]), void 0 !== a.MIDI_SYSTEM_MESSAGES[t])
                if (void 0 === n) this._userHandlers.system[t] = [];
                else
                    for (var r = 0; r < this._userHandlers.system[t].length; r++) this._userHandlers.system[t][r] === n && this._userHandlers.system[t].splice(r, 1);
            else if (void 0 !== a.MIDI_CHANNEL_MESSAGES[t]) {
                if (e.indexOf("all") > -1) {
                    e = [];
                    for (var o = 1; 16 >= o; o++) e.push(o)
                }
                if (!this._userHandlers.channel[t]) return this;
                e.forEach((function (e) {
                    var r = i._userHandlers.channel[t][e];
                    if (r)
                        if (void 0 === n) i._userHandlers.channel[t][e] = [];
                        else
                            for (var o = 0; o < r.length; o++) r[o] === n && r.splice(o, 1)
                }))
            } else {
                if (void 0 !== t) throw new TypeError("The specified event type is not supported.");
                this._initializeUserHandlers()
            }
            return this
        }, o.prototype._initializeUserHandlers = function () {
            for (var t in a.MIDI_CHANNEL_MESSAGES) a.MIDI_CHANNEL_MESSAGES.hasOwnProperty(t) && (this._userHandlers.channel[t] = {});
            for (var e in a.MIDI_SYSTEM_MESSAGES) a.MIDI_SYSTEM_MESSAGES.hasOwnProperty(e) && (this._userHandlers.system[e] = [])
        }, o.prototype._onMidiMessage = function (t) {
            if (this._userHandlers.system.midimessage.length > 0) {
                var e = {
                    target: this,
                    data: t.data,
                    timestamp: t.timeStamp,
                    type: "midimessage"
                };
                this._userHandlers.system.midimessage.forEach((function (t) {
                    t(e)
                }))
            }
            t.data[0] < 240 ? this._parseChannelEvent(t) : t.data[0] <= 255 && this._parseSystemEvent(t)
        }, o.prototype._parseChannelEvent = function (t) {
            var e, n, i = t.data[0] >> 4,
                r = 1 + (15 & t.data[0]);
            t.data.length > 1 && (e = t.data[1], n = t.data.length > 2 ? t.data[2] : void 0);
            var o = {
                target: this,
                data: t.data,
                timestamp: t.timeStamp,
                channel: r
            };
            i === a.MIDI_CHANNEL_MESSAGES.noteoff || i === a.MIDI_CHANNEL_MESSAGES.noteon && 0 === n ? (o.type = "noteoff", o.note = {
                number: e,
                name: a._notes[e % 12],
                octave: a.getOctave(e)
            }, o.velocity = n / 127, o.rawVelocity = n) : i === a.MIDI_CHANNEL_MESSAGES.noteon ? (o.type = "noteon", o.note = {
                number: e,
                name: a._notes[e % 12],
                octave: a.getOctave(e)
            }, o.velocity = n / 127, o.rawVelocity = n) : i === a.MIDI_CHANNEL_MESSAGES.keyaftertouch ? (o.type = "keyaftertouch", o.note = {
                number: e,
                name: a._notes[e % 12],
                octave: a.getOctave(e)
            }, o.value = n / 127) : i === a.MIDI_CHANNEL_MESSAGES.controlchange && e >= 0 && 119 >= e ? (o.type = "controlchange", o.controller = {
                number: e,
                name: this.getCcNameByNumber(e)
            }, o.value = n) : i === a.MIDI_CHANNEL_MESSAGES.channelmode && e >= 120 && 127 >= e ? (o.type = "channelmode", o.controller = {
                number: e,
                name: this.getChannelModeByNumber(e)
            }, o.value = n) : i === a.MIDI_CHANNEL_MESSAGES.programchange ? (o.type = "programchange", o.value = e) : i === a.MIDI_CHANNEL_MESSAGES.channelaftertouch ? (o.type = "channelaftertouch", o.value = e / 127) : i === a.MIDI_CHANNEL_MESSAGES.pitchbend ? (o.type = "pitchbend", o.value = ((n << 7) + e - 8192) / 8192) : o.type = "unknownchannelmessage", this._userHandlers.channel[o.type] && this._userHandlers.channel[o.type][r] && this._userHandlers.channel[o.type][r].forEach((function (t) {
                t(o)
            }))
        }, o.prototype.getCcNameByNumber = function (t) {
            if (!((t = Math.floor(t)) >= 0 && 119 >= t)) throw new RangeError("The control change number must be between 0 and 119.");
            for (var e in a.MIDI_CONTROL_CHANGE_MESSAGES)
                if (a.MIDI_CONTROL_CHANGE_MESSAGES.hasOwnProperty(e) && t === a.MIDI_CONTROL_CHANGE_MESSAGES[e]) return e
        }, o.prototype.getChannelModeByNumber = function (t) {
            if (!((t = Math.floor(t)) >= 120 && status <= 127)) throw new RangeError("The control change number must be between 120 and 127.");
            for (var e in a.MIDI_CHANNEL_MODE_MESSAGES)
                if (a.MIDI_CHANNEL_MODE_MESSAGES.hasOwnProperty(e) && t === a.MIDI_CHANNEL_MODE_MESSAGES[e]) return e
        }, o.prototype._parseSystemEvent = function (t) {
            var e = t.data[0],
                n = {
                    target: this,
                    data: t.data,
                    timestamp: t.timeStamp
                };
            e === a.MIDI_SYSTEM_MESSAGES.sysex ? n.type = "sysex" : e === a.MIDI_SYSTEM_MESSAGES.timecode ? n.type = "timecode" : e === a.MIDI_SYSTEM_MESSAGES.songposition ? n.type = "songposition" : e === a.MIDI_SYSTEM_MESSAGES.songselect ? (n.type = "songselect", n.song = t.data[1]) : e === a.MIDI_SYSTEM_MESSAGES.tuningrequest ? n.type = "tuningrequest" : e === a.MIDI_SYSTEM_MESSAGES.clock ? n.type = "clock" : e === a.MIDI_SYSTEM_MESSAGES.start ? n.type = "start" : e === a.MIDI_SYSTEM_MESSAGES.continue ? n.type = "continue" : e === a.MIDI_SYSTEM_MESSAGES.stop ? n.type = "stop" : e === a.MIDI_SYSTEM_MESSAGES.activesensing ? n.type = "activesensing" : e === a.MIDI_SYSTEM_MESSAGES.reset ? n.type = "reset" : n.type = "unknownsystemmessage", this._userHandlers.system[n.type] && this._userHandlers.system[n.type].forEach((function (t) {
                t(n)
            }))
        }, s.prototype.send = function (t, e, n) {
            if (!(t >= 128 && 255 >= t)) throw new RangeError("The status byte must be an integer between 128 (0x80) and 255 (0xFF).");
            void 0 === e && (e = []), Array.isArray(e) || (e = [e]);
            var i = [];
            return e.forEach((function (t, e) {
                var n = Math.floor(t);
                if (!(n >= 0 && 255 >= n)) throw new RangeError("Data bytes must be integers between 0 (0x00) and 255 (0xFF).");
                i.push(n)
            })), this._midiOutput.send([t].concat(i), parseFloat(n) || 0), this
        }, s.prototype.sendSysex = function (t, e, n) {
            if (!a.sysexEnabled) throw new Error("Sysex message support must first be activated.");
            return n = n || {}, t = [].concat(t), e.forEach((function (t) {
                if (0 > t || t > 127) throw new RangeError("The data bytes of a sysex message must be integers between 0 (0x00) and 127 (0x7F).")
            })), e = t.concat(e, a.MIDI_SYSTEM_MESSAGES.sysexend), this.send(a.MIDI_SYSTEM_MESSAGES.sysex, e, this._parseTimeParameter(n.time)), this
        }, s.prototype.sendTimecodeQuarterFrame = function (t, e) {
            return e = e || {}, this.send(a.MIDI_SYSTEM_MESSAGES.timecode, t, this._parseTimeParameter(e.time)), this
        }, s.prototype.sendSongPosition = function (t, e) {
            e = e || {};
            var n = (t = Math.floor(t) || 0) >> 7 & 127,
                i = 127 & t;
            return this.send(a.MIDI_SYSTEM_MESSAGES.songposition, [n, i], this._parseTimeParameter(e.time)), this
        }, s.prototype.sendSongSelect = function (t, e) {
            if (e = e || {}, !((t = Math.floor(t)) >= 0 && 127 >= t)) throw new RangeError("The song number must be between 0 and 127.");
            return this.send(a.MIDI_SYSTEM_MESSAGES.songselect, [t], this._parseTimeParameter(e.time)), this
        }, s.prototype.sendTuningRequest = function (t) {
            return t = t || {}, this.send(a.MIDI_SYSTEM_MESSAGES.tuningrequest, void 0, this._parseTimeParameter(t.time)), this
        }, s.prototype.sendClock = function (t) {
            return t = t || {}, this.send(a.MIDI_SYSTEM_MESSAGES.clock, void 0, this._parseTimeParameter(t.time)), this
        }, s.prototype.sendStart = function (t) {
            return t = t || {}, this.send(a.MIDI_SYSTEM_MESSAGES.start, void 0, this._parseTimeParameter(t.time)), this
        }, s.prototype.sendContinue = function (t) {
            return t = t || {}, this.send(a.MIDI_SYSTEM_MESSAGES.continue, void 0, this._parseTimeParameter(t.time)), this
        }, s.prototype.sendStop = function (t) {
            return t = t || {}, this.send(a.MIDI_SYSTEM_MESSAGES.stop, void 0, this._parseTimeParameter(t.time)), this
        }, s.prototype.sendActiveSensing = function (t) {
            return t = t || {}, this.send(a.MIDI_SYSTEM_MESSAGES.activesensing, [], this._parseTimeParameter(t.time)), this
        }, s.prototype.sendReset = function (t) {
            return t = t || {}, this.send(a.MIDI_SYSTEM_MESSAGES.reset, void 0, this._parseTimeParameter(t.time)), this
        }, s.prototype.stopNote = function (t, e, n) {
            if ("all" === t) return this.sendChannelMode("allnotesoff", 0, e, n);
            var i = 64;
            return (n = n || {}).rawVelocity ? !isNaN(n.velocity) && n.velocity >= 0 && n.velocity <= 127 && (i = n.velocity) : !isNaN(n.velocity) && n.velocity >= 0 && n.velocity <= 1 && (i = 127 * n.velocity), this._convertNoteToArray(t).forEach(function (t) {
                a.toMIDIChannels(e).forEach(function (e) {
                    this.send((a.MIDI_CHANNEL_MESSAGES.noteoff << 4) + (e - 1), [t, Math.round(i)], this._parseTimeParameter(n.time))
                }.bind(this))
            }.bind(this)), this
        }, s.prototype.playNote = function (t, e, n) {
            var i = 64;
            if ((n = n || {}).rawVelocity ? !isNaN(n.velocity) && n.velocity >= 0 && n.velocity <= 127 && (i = n.velocity) : !isNaN(n.velocity) && n.velocity >= 0 && n.velocity <= 1 && (i = 127 * n.velocity), n.time = this._parseTimeParameter(n.time), this._convertNoteToArray(t).forEach(function (t) {
                a.toMIDIChannels(e).forEach(function (e) {
                    this.send((a.MIDI_CHANNEL_MESSAGES.noteon << 4) + (e - 1), [t, Math.round(i)], n.time)
                }.bind(this))
            }.bind(this)), !isNaN(n.duration)) {
                n.duration <= 0 && (n.duration = 0);
                var r = 64;
                n.rawVelocity ? !isNaN(n.release) && n.release >= 0 && n.release <= 127 && (r = n.release) : !isNaN(n.release) && n.release >= 0 && n.release <= 1 && (r = 127 * n.release), this._convertNoteToArray(t).forEach(function (t) {
                    a.toMIDIChannels(e).forEach(function (e) {
                        this.send((a.MIDI_CHANNEL_MESSAGES.noteoff << 4) + (e - 1), [t, Math.round(r)], (n.time || a.time) + n.duration)
                    }.bind(this))
                }.bind(this))
            }
            return this
        }, s.prototype.sendKeyAftertouch = function (t, e, n, i) {
            var r = this;
            if (i = i || {}, 1 > e || e > 16) throw new RangeError("The channel must be between 1 and 16.");
            (isNaN(n) || 0 > n || n > 1) && (n = .5);
            var o = Math.round(127 * n);
            return this._convertNoteToArray(t).forEach((function (t) {
                a.toMIDIChannels(e).forEach((function (e) {
                    r.send((a.MIDI_CHANNEL_MESSAGES.keyaftertouch << 4) + (e - 1), [t, o], r._parseTimeParameter(i.time))
                }))
            })), this
        }, s.prototype.sendControlChange = function (t, e, n, i) {
            if (i = i || {}, "string" == typeof t) {
                if (!(t = a.MIDI_CONTROL_CHANGE_MESSAGES[t])) throw new TypeError("Invalid controller name.")
            } else if (!((t = Math.floor(t)) >= 0 && 119 >= t)) throw new RangeError("Controller numbers must be between 0 and 119.");
            if (!((e = Math.floor(e) || 0) >= 0 && 127 >= e)) throw new RangeError("Controller value must be between 0 and 127.");
            return a.toMIDIChannels(n).forEach(function (n) {
                this.send((a.MIDI_CHANNEL_MESSAGES.controlchange << 4) + (n - 1), [t, e], this._parseTimeParameter(i.time))
            }.bind(this)), this
        }, s.prototype._selectRegisteredParameter = function (t, e, n) {
            var i = this;
            if (t[0] = Math.floor(t[0]), !(t[0] >= 0 && t[0] <= 127)) throw new RangeError("The control65 value must be between 0 and 127");
            if (t[1] = Math.floor(t[1]), !(t[1] >= 0 && t[1] <= 127)) throw new RangeError("The control64 value must be between 0 and 127");
            return a.toMIDIChannels(e).forEach((function (r) {
                i.sendControlChange(101, t[0], e, {
                    time: n
                }), i.sendControlChange(100, t[1], e, {
                    time: n
                })
            })), this
        }, s.prototype._selectNonRegisteredParameter = function (t, e, n) {
            var i = this;
            if (t[0] = Math.floor(t[0]), !(t[0] >= 0 && t[0] <= 127)) throw new RangeError("The control63 value must be between 0 and 127");
            if (t[1] = Math.floor(t[1]), !(t[1] >= 0 && t[1] <= 127)) throw new RangeError("The control62 value must be between 0 and 127");
            return a.toMIDIChannels(e).forEach((function (r) {
                i.sendControlChange(99, t[0], e, {
                    time: n
                }), i.sendControlChange(98, t[1], e, {
                    time: n
                })
            })), this
        }, s.prototype._setCurrentRegisteredParameter = function (t, e, n) {
            var i = this;
            if ((t = [].concat(t))[0] = Math.floor(t[0]), !(t[0] >= 0 && t[0] <= 127)) throw new RangeError("The msb value must be between 0 and 127");
            return a.toMIDIChannels(e).forEach((function (r) {
                i.sendControlChange(6, t[0], e, {
                    time: n
                })
            })), t[1] = Math.floor(t[1]), t[1] >= 0 && t[1] <= 127 && a.toMIDIChannels(e).forEach((function (r) {
                i.sendControlChange(38, t[1], e, {
                    time: n
                })
            })), this
        }, s.prototype._deselectRegisteredParameter = function (t, e) {
            var n = this;
            return a.toMIDIChannels(t).forEach((function (i) {
                n.sendControlChange(101, 127, t, {
                    time: e
                }), n.sendControlChange(100, 127, t, {
                    time: e
                })
            })), this
        }, s.prototype.setRegisteredParameter = function (t, e, n, i) {
            var r = this;
            if (i = i || {}, !Array.isArray(t)) {
                if (!a.MIDI_REGISTERED_PARAMETER[t]) throw new Error("The specified parameter is not available.");
                t = a.MIDI_REGISTERED_PARAMETER[t]
            }
            return a.toMIDIChannels(n).forEach((function (o) {
                r._selectRegisteredParameter(t, n, i.time), r._setCurrentRegisteredParameter(e, n, i.time), r._deselectRegisteredParameter(n, i.time)
            })), this
        }, s.prototype.setNonRegisteredParameter = function (t, e, n, i) {
            var r = this;
            if (i = i || {}, !(t[0] >= 0 && t[0] <= 127 && t[1] >= 0 && t[1] <= 127)) throw new Error("Position 0 and 1 of the 2-position parameter array must both be between 0 and 127.");
            return e = [].concat(e), a.toMIDIChannels(n).forEach((function (o) {
                r._selectNonRegisteredParameter(t, n, i.time), r._setCurrentRegisteredParameter(e, n, i.time), r._deselectRegisteredParameter(n, i.time)
            })), this
        }, s.prototype.incrementRegisteredParameter = function (t, e, n) {
            var i = this;
            if (n = n || {}, !Array.isArray(t)) {
                if (!a.MIDI_REGISTERED_PARAMETER[t]) throw new Error("The specified parameter is not available.");
                t = a.MIDI_REGISTERED_PARAMETER[t]
            }
            return a.toMIDIChannels(e).forEach((function (r) {
                i._selectRegisteredParameter(t, e, n.time), i.sendControlChange(96, 0, e, {
                    time: n.time
                }), i._deselectRegisteredParameter(e, n.time)
            })), this
        }, s.prototype.decrementRegisteredParameter = function (t, e, n) {
            if (n = n || {}, !Array.isArray(t)) {
                if (!a.MIDI_REGISTERED_PARAMETER[t]) throw new TypeError("The specified parameter is not available.");
                t = a.MIDI_REGISTERED_PARAMETER[t]
            }
            return a.toMIDIChannels(e).forEach(function (i) {
                this._selectRegisteredParameter(t, e, n.time), this.sendControlChange(97, 0, e, {
                    time: n.time
                }), this._deselectRegisteredParameter(e, n.time)
            }.bind(this)), this
        }, s.prototype.setPitchBendRange = function (t, e, n, i) {
            var r = this;
            if (i = i || {}, !((t = Math.floor(t) || 0) >= 0 && 127 >= t)) throw new RangeError("The semitones value must be between 0 and 127");
            if (!((e = Math.floor(e) || 0) >= 0 && 127 >= e)) throw new RangeError("The cents value must be between 0 and 127");
            return a.toMIDIChannels(n).forEach((function (o) {
                r.setRegisteredParameter("pitchbendrange", [t, e], n, {
                    time: i.time
                })
            })), this
        }, s.prototype.setModulationRange = function (t, e, n, i) {
            var r = this;
            if (i = i || {}, !((t = Math.floor(t) || 0) >= 0 && 127 >= t)) throw new RangeError("The semitones value must be between 0 and 127");
            if (!((e = Math.floor(e) || 0) >= 0 && 127 >= e)) throw new RangeError("The cents value must be between 0 and 127");
            return a.toMIDIChannels(n).forEach((function (o) {
                r.setRegisteredParameter("modulationrange", [t, e], n, {
                    time: i.time
                })
            })), this
        }, s.prototype.setMasterTuning = function (t, e, n) {
            var i = this;
            if (n = n || {}, -65 >= (t = parseFloat(t) || 0) || t >= 64) throw new RangeError("The value must be a decimal number larger than -65 and smaller than 64.");
            var r = Math.floor(t) + 64,
                o = t - Math.floor(t),
                s = (o = Math.round((o + 1) / 2 * 16383)) >> 7 & 127,
                c = 127 & o;
            return a.toMIDIChannels(e).forEach((function (t) {
                i.setRegisteredParameter("channelcoarsetuning", r, e, {
                    time: n.time
                }), i.setRegisteredParameter("channelfinetuning", [s, c], e, {
                    time: n.time
                })
            })), this
        }, s.prototype.setTuningProgram = function (t, e, n) {
            var i = this;
            if (n = n || {}, !((t = Math.floor(t)) >= 0 && 127 >= t)) throw new RangeError("The program value must be between 0 and 127");
            return a.toMIDIChannels(e).forEach((function (r) {
                i.setRegisteredParameter("tuningprogram", t, e, {
                    time: n.time
                })
            })), this
        }, s.prototype.setTuningBank = function (t, e, n) {
            var i = this;
            if (n = n || {}, !((t = Math.floor(t) || 0) >= 0 && 127 >= t)) throw new RangeError("The bank value must be between 0 and 127");
            return a.toMIDIChannels(e).forEach((function (r) {
                i.setRegisteredParameter("tuningbank", t, e, {
                    time: n.time
                })
            })), this
        }, s.prototype.sendChannelMode = function (t, e, n, i) {
            if (i = i || {}, "string" == typeof t) {
                if (!(t = a.MIDI_CHANNEL_MODE_MESSAGES[t])) throw new TypeError("Invalid channel mode message name.")
            } else if (!((t = Math.floor(t)) >= 120 && 127 >= t)) throw new RangeError("Channel mode numerical identifiers must be between 120 and 127.");
            if (0 > (e = Math.floor(e) || 0) || e > 127) throw new RangeError("Value must be an integer between 0 and 127.");
            return a.toMIDIChannels(n).forEach(function (n) {
                this.send((a.MIDI_CHANNEL_MESSAGES.channelmode << 4) + (n - 1), [t, e], this._parseTimeParameter(i.time))
            }.bind(this)), this
        }, s.prototype.sendProgramChange = function (t, e, n) {
            var i = this;
            if (n = n || {}, t = Math.floor(t), isNaN(t) || 0 > t || t > 127) throw new RangeError("Program numbers must be between 0 and 127.");
            return a.toMIDIChannels(e).forEach((function (e) {
                i.send((a.MIDI_CHANNEL_MESSAGES.programchange << 4) + (e - 1), [t], i._parseTimeParameter(n.time))
            })), this
        }, s.prototype.sendChannelAftertouch = function (t, e, n) {
            var i = this;
            n = n || {}, t = parseFloat(t), (isNaN(t) || 0 > t || t > 1) && (t = .5);
            var r = Math.round(127 * t);
            return a.toMIDIChannels(e).forEach((function (t) {
                i.send((a.MIDI_CHANNEL_MESSAGES.channelaftertouch << 4) + (t - 1), [r], i._parseTimeParameter(n.time))
            })), this
        }, s.prototype.sendPitchBend = function (t, e, n) {
            var i = this;
            if (n = n || {}, isNaN(t) || -1 > t || t > 1) throw new RangeError("Pitch bend value must be between -1 and 1.");
            var r = Math.round((t + 1) / 2 * 16383),
                o = r >> 7 & 127,
                s = 127 & r;
            return a.toMIDIChannels(e).forEach((function (t) {
                i.send((a.MIDI_CHANNEL_MESSAGES.pitchbend << 4) + (t - 1), [s, o], i._parseTimeParameter(n.time))
            })), this
        }, s.prototype._parseTimeParameter = function (t) {
            var e, n;
            return "string" == typeof t && "+" === t.substring(0, 1) ? (e = parseFloat(t)) && e > 0 && (n = a.time + e) : (e = parseFloat(t)) > a.time && (n = e), n
        }, s.prototype._convertNoteToArray = function (t) {
            var e = [];
            return Array.isArray(t) || (t = [t]), t.forEach((function (t) {
                e.push(a.guessNoteNumber(t))
            })), e
        }, void 0 === (i = function () {
            return a
        }.apply(e, [])) || (t.exports = i)
    }()
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => "context" in t
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => "context" in t
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(0),
        r = n(10);
    const o = t => Object(r.a)(i.d, t)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(0),
        r = n(10);
    const o = t => Object(r.a)(i.e, t)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => n => {
        const i = {
            value: t
        };
        return Object.defineProperties(n, {
            currentTarget: i,
            target: i
        }), "function" == typeof e ? e.call(t, n) : e.handleEvent.call(t, n)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(18);
    const r = t => {
        var e;
        t.getChannelData = (e = t.getChannelData, n => {
            try {
                return e.call(t, n)
            } catch (t) {
                if (12 === t.code) throw Object(i.a)();
                throw t
            }
        })
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => {
        var e;
        t.start = (e = t.start, (n = 0, i = 0, r) => {
            if ("number" == typeof r && r < 0 || i < 0 || n < 0) throw new RangeError("The parameters can't be negative.");
            e.call(t, n, i, r)
        })
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => {
        var e;
        t.stop = (e = t.stop, (n = 0) => {
            if (n < 0) throw new RangeError("The parameter can't be negative.");
            e.call(t, n)
        })
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => {
        try {
            t.copyToChannel(new Float32Array(1), 0, -1)
        } catch {
            return !1
        }
        return !0
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(14);
    const r = (t, e, n, r) => {
        if (Object(i.a)(e)) {
            const i = e.inputs[r];
            return t.connect(i, n, 0), [i, n, 0]
        }
        return t.connect(e, n, r), [e, n, r]
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(14);
    const r = (t, e, n, r) => {
        Object(i.a)(e) ? t.disconnect(e.inputs[r], n, 0) : t.disconnect(e, n, r)
    }
}, function (t, e, n) {
    "use strict";

    function i(t, e, n, i, r) {
        if ("function" == typeof t.copyFromChannel) 0 === e[n].byteLength && (e[n] = new Float32Array(128)), t.copyFromChannel(e[n], i, r);
        else {
            const o = t.getChannelData(i);
            if (0 === e[n].byteLength) e[n] = o.slice(r, r + 128);
            else {
                const t = new Float32Array(o.buffer, r * Float32Array.BYTES_PER_ELEMENT, 128);
                e[n].set(t)
            }
        }
    }
    n.d(e, "a", (function () {
        return i
    }))
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => {
        const n = [];
        for (let i = 0; i < t; i += 1) {
            const t = [],
                r = "number" == typeof e ? e : e[i];
            for (let e = 0; e < r; e += 1) t.push(new Float32Array(128));
            n.push(t)
        }
        return n
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = () => {
        try {
            return new DOMException("", "InvalidAccessError")
        } catch (t) {
            return t.code = 15, t.name = "InvalidAccessError", t
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e, n, i) => {
        let r = Object.getPrototypeOf(t);
        for (; !r.hasOwnProperty(e);) r = Object.getPrototypeOf(r);
        const {
            get: o,
            set: s
        } = Object.getOwnPropertyDescriptor(r, e);
        Object.defineProperty(t, e, {
            get: n(o),
            set: i(s)
        })
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => void 0 === t || "number" == typeof t || "string" == typeof t && ("balanced" === t || "interactive" === t || "playback" === t)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    class i {
        constructor(t) {
            this._map = new Map(t)
        }
        get size() {
            return this._map.size
        }
        entries() {
            return this._map.entries()
        }
        forEach(t, e = null) {
            return this._map.forEach((n, i) => t.call(e, n, i, this))
        }
        get(t) {
            return this._map.get(t)
        }
        has(t) {
            return this._map.has(t)
        }
        keys() {
            return this._map.keys()
        }
        values() {
            return this._map.values()
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e, n, i, r) => {
        "function" == typeof t.copyToChannel ? 0 !== e[n].byteLength && t.copyToChannel(e[n], i, r) : 0 !== e[n].byteLength && t.getChannelData(i).set(e[n], r)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e, n, i, r, o, s, a, c, u, h) => {
        const l = u.length;
        let d = a;
        for (let a = 0; a < l; a += 1) {
            let l = n[0] * u[a];
            for (let e = 1; e < r; e += 1) {
                const i = d - e & c - 1;
                l += n[e] * o[i], l -= t[e] * s[i]
            }
            for (let t = r; t < i; t += 1) l += n[t] * o[d - t & c - 1];
            for (let n = r; n < e; n += 1) l -= t[n] * s[d - n & c - 1];
            o[d] = u[a], s[d] = l, d = d + 1 & c - 1, h[a] = l
        }
        return d
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => null === t ? 512 : Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(t * e)))))
}, function (t, e, n) {
    e.parseMidi = n(711), e.writeMidi = n(712)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = () => {
        try {
            return new DOMException("", "UnknownError")
        } catch (t) {
            return t.name = "UnknownError", t
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => {
        if (null === t) return !1;
        const e = t.length;
        return e % 2 != 0 ? 0 !== t[Math.floor(e / 2)] : t[e / 2 - 1] + t[e / 2] !== 0
    }
}, function (t, e) {
    t.exports = '<div class=expandable id=loading-modal> <img src=/Song-Maker/client/images/animated-loader.svg> <div class=circle> <svg class=circular-loader viewBox="0 0 50 50"> <circle class=loader-path cx=25 cy=25 r=20 fill=none stroke-width=3 /> </svg> </div> </div> '
}, function (t, e, n) {
    "use strict";
    n(57), n(58), n(59), n(60), n(61), n(62), n(63), n(64), n(65), n(66), n(67), n(68), n(69), n(70), n(71), n(72), n(73), n(74), n(75), n(76), n(77), n(78), n(79), n(80), n(81), n(82), n(83), n(84), n(85), n(86), n(87), n(88), n(89), n(90), n(91), n(92), n(93), n(94), n(95), n(96), n(97), n(98), n(99), n(100), n(101), n(102), n(103), n(104), n(105), n(106), n(107), n(108), n(109), n(110), n(111), n(112), n(113), n(114), n(115), n(116), n(117), n(118), n(119), n(120), n(121), n(122), n(123), n(124), n(125), n(126), n(127), n(128), n(129), n(130), n(131), n(132), n(133), n(134), n(135), n(136), n(137), n(138), n(139)
}, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e, n) {
    "use strict";
    n(141), n(142), n(143), n(144), n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), n(153), n(154), n(155), n(156), n(157), n(158), n(159), n(160), n(161), n(162), n(163), n(164), n(165), n(166), n(167), n(168), n(169), n(170), n(171), n(172), n(173), n(174), n(175), n(176), n(177), n(178), n(179), n(180), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(236), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(270), n(271), n(272), n(273), n(274), n(275), n(276), n(277), n(278), n(279), n(280), n(281), n(282), n(283), n(284), n(285), n(286), n(287), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(295), n(296), n(297), n(298), n(299), n(300), n(301), n(302), n(303), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(312), n(313), n(314), n(315), n(316), n(317), n(318), n(319), n(320), n(321), n(322), n(323), n(324), n(325), n(326), n(327), n(328), n(329), n(330), n(331), n(332), n(333), n(334), n(335), n(336), n(337), n(338), n(339), n(340), n(341), n(342), n(343), n(344), n(345), n(346), n(347), n(348), n(349), n(350), n(351), n(352), n(353), n(354), n(355), n(356), n(357), n(358), n(359), n(360), n(361), n(362), n(363), n(364), n(365), n(366), n(367), n(368), n(369), n(370), n(371), n(372), n(373), n(374), n(375), n(376), n(377), n(378), n(379), n(380), n(381), n(382), n(383), n(384), n(385), n(386), n(387), n(388), n(389), n(390), n(391), n(392), n(393), n(394), n(395), n(396), n(397), n(398), n(399), n(400), n(401), n(402), n(403), n(404), n(405), n(406), n(407), n(408), n(409), n(410), n(411), n(412), n(413), n(414), n(415), n(416), n(417), n(418), n(419), n(420), n(421), n(422), n(423), n(424), n(425), n(426), n(427), n(428), n(429), n(430), n(431), n(432), n(433), n(434), n(435), n(436), n(437), n(438), n(439), n(440), n(441), n(442), n(443), n(444), n(445), n(446), n(447), n(448), n(449), n(450), n(451), n(452), n(453), n(454), n(455), n(456), n(457), n(458), n(459), n(460), n(461), n(462), n(463), n(464), n(465), n(466), n(467), n(468), n(469), n(470), n(471), n(472), n(473), n(474), n(475), n(476), n(477), n(478), n(479), n(480), n(481), n(482), n(483), n(484), n(485), n(486), n(487), n(488), n(489), n(490), n(491), n(492), n(493), n(494), n(495), n(496), n(497), n(498), n(499), n(500), n(501), n(502), n(503), n(504), n(505), n(506), n(507), n(508), n(509), n(510), n(511), n(512), n(513), n(514), n(515), n(516), n(517), n(518), n(519), n(520), n(521), n(522), n(523), n(524)
}, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e, n) {
    var i = n(23),
        r = n(713);
    "string" == typeof (r = r.__esModule ? r.default : r) && (r = [
        [t.i, r, ""]
    ]);
    var o = {
        insert: "head",
        singleton: !1
    };
    i(r, o);
    t.exports = r.locals || {}
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e) {
    var n = Object.prototype.toString;

    function i(t) {
        return t.constructor ? t.constructor.name : null
    }
    t.exports = function (t) {
        if (void 0 === t) return "undefined";
        if (null === t) return "null";
        var e = typeof t;
        if ("boolean" === e) return "boolean";
        if ("string" === e) return "string";
        if ("number" === e) return "number";
        if ("symbol" === e) return "symbol";
        if ("function" === e) return "GeneratorFunction" === i(t) ? "generatorfunction" : "function";
        if (function (t) {
            return Array.isArray ? Array.isArray(t) : t instanceof Array
        }(t)) return "array";
        if (function (t) {
            if (t.constructor && "function" == typeof t.constructor.isBuffer) return t.constructor.isBuffer(t);
            return !1
        }(t)) return "buffer";
        if (function (t) {
            try {
                if ("number" == typeof t.length && "function" == typeof t.callee) return !0
            } catch (t) {
                if (-1 !== t.message.indexOf("callee")) return !0
            }
            return !1
        }(t)) return "arguments";
        if (function (t) {
            return t instanceof Date || "function" == typeof t.toDateString && "function" == typeof t.getDate && "function" == typeof t.setDate
        }(t)) return "date";
        if (function (t) {
            return t instanceof Error || "string" == typeof t.message && t.constructor && "number" == typeof t.constructor.stackTraceLimit
        }(t)) return "error";
        if (function (t) {
            return t instanceof RegExp || "string" == typeof t.flags && "boolean" == typeof t.ignoreCase && "boolean" == typeof t.multiline && "boolean" == typeof t.global
        }(t)) return "regexp";
        switch (i(t)) {
            case "Symbol":
                return "symbol";
            case "Promise":
                return "promise";
            case "WeakMap":
                return "weakmap";
            case "WeakSet":
                return "weakset";
            case "Map":
                return "map";
            case "Set":
                return "set";
            case "Int8Array":
                return "int8array";
            case "Uint8Array":
                return "uint8array";
            case "Uint8ClampedArray":
                return "uint8clampedarray";
            case "Int16Array":
                return "int16array";
            case "Uint16Array":
                return "uint16array";
            case "Int32Array":
                return "int32array";
            case "Uint32Array":
                return "uint32array";
            case "Float32Array":
                return "float32array";
            case "Float64Array":
                return "float64array"
        }
        if (function (t) {
            return "function" == typeof t.throw && "function" == typeof t.return && "function" == typeof t.next
        }(t)) return "generator";
        switch (e = n.call(t)) {
            case "[object Object]":
                return "object";
            case "[object Map Iterator]":
                return "mapiterator";
            case "[object Set Iterator]":
                return "setiterator";
            case "[object String Iterator]":
                return "stringiterator";
            case "[object Array Iterator]":
                return "arrayiterator"
        }
        return e.slice(8, -1).toLowerCase().replace(/\s/g, "")
    }
}, function (t, e, n) {
    var i = n(23),
        r = n(723);
    "string" == typeof (r = r.__esModule ? r.default : r) && (r = [
        [t.i, r, ""]
    ]);
    var o = {
        insert: "head",
        singleton: !1
    };
    i(r, o);
    t.exports = r.locals || {}
}, function (t, e, n) {
    "use strict";
    var i = {
        generateIdentifier: function () {
            return Math.random().toString(36).substr(2, 10)
        }
    };
    i.localCName = i.generateIdentifier(), i.splitLines = function (t) {
        return t.trim().split("\n").map((function (t) {
            return t.trim()
        }))
    }, i.splitSections = function (t) {
        return t.split("\nm=").map((function (t, e) {
            return (e > 0 ? "m=" + t : t).trim() + "\r\n"
        }))
    }, i.getDescription = function (t) {
        var e = i.splitSections(t);
        return e && e[0]
    }, i.getMediaSections = function (t) {
        var e = i.splitSections(t);
        return e.shift(), e
    }, i.matchPrefix = function (t, e) {
        return i.splitLines(t).filter((function (t) {
            return 0 === t.indexOf(e)
        }))
    }, i.parseCandidate = function (t) {
        for (var e, n = {
            foundation: (e = 0 === t.indexOf("a=candidate:") ? t.substring(12).split(" ") : t.substring(10).split(" "))[0],
            component: parseInt(e[1], 10),
            protocol: e[2].toLowerCase(),
            priority: parseInt(e[3], 10),
            ip: e[4],
            port: parseInt(e[5], 10),
            type: e[7]
        }, i = 8; i < e.length; i += 2) switch (e[i]) {
            case "raddr":
                n.relatedAddress = e[i + 1];
                break;
            case "rport":
                n.relatedPort = parseInt(e[i + 1], 10);
                break;
            case "tcptype":
                n.tcpType = e[i + 1];
                break;
            case "ufrag":
                n.ufrag = e[i + 1], n.usernameFragment = e[i + 1];
                break;
            default:
                n[e[i]] = e[i + 1]
        }
        return n
    }, i.writeCandidate = function (t) {
        var e = [];
        e.push(t.foundation), e.push(t.component), e.push(t.protocol.toUpperCase()), e.push(t.priority), e.push(t.ip), e.push(t.port);
        var n = t.type;
        return e.push("typ"), e.push(n), "host" !== n && t.relatedAddress && t.relatedPort && (e.push("raddr"), e.push(t.relatedAddress), e.push("rport"), e.push(t.relatedPort)), t.tcpType && "tcp" === t.protocol.toLowerCase() && (e.push("tcptype"), e.push(t.tcpType)), (t.usernameFragment || t.ufrag) && (e.push("ufrag"), e.push(t.usernameFragment || t.ufrag)), "candidate:" + e.join(" ")
    }, i.parseIceOptions = function (t) {
        return t.substr(14).split(" ")
    }, i.parseRtpMap = function (t) {
        var e = t.substr(9).split(" "),
            n = {
                payloadType: parseInt(e.shift(), 10)
            };
        return e = e[0].split("/"), n.name = e[0], n.clockRate = parseInt(e[1], 10), n.channels = 3 === e.length ? parseInt(e[2], 10) : 1, n.numChannels = n.channels, n
    }, i.writeRtpMap = function (t) {
        var e = t.payloadType;
        void 0 !== t.preferredPayloadType && (e = t.preferredPayloadType);
        var n = t.channels || t.numChannels || 1;
        return "a=rtpmap:" + e + " " + t.name + "/" + t.clockRate + (1 !== n ? "/" + n : "") + "\r\n"
    }, i.parseExtmap = function (t) {
        var e = t.substr(9).split(" ");
        return {
            id: parseInt(e[0], 10),
            direction: e[0].indexOf("/") > 0 ? e[0].split("/")[1] : "sendrecv",
            uri: e[1]
        }
    }, i.writeExtmap = function (t) {
        return "a=extmap:" + (t.id || t.preferredId) + (t.direction && "sendrecv" !== t.direction ? "/" + t.direction : "") + " " + t.uri + "\r\n"
    }, i.parseFmtp = function (t) {
        for (var e, n = {}, i = t.substr(t.indexOf(" ") + 1).split(";"), r = 0; r < i.length; r++) n[(e = i[r].trim().split("="))[0].trim()] = e[1];
        return n
    }, i.writeFmtp = function (t) {
        var e = "",
            n = t.payloadType;
        if (void 0 !== t.preferredPayloadType && (n = t.preferredPayloadType), t.parameters && Object.keys(t.parameters).length) {
            var i = [];
            Object.keys(t.parameters).forEach((function (e) {
                t.parameters[e] ? i.push(e + "=" + t.parameters[e]) : i.push(e)
            })), e += "a=fmtp:" + n + " " + i.join(";") + "\r\n"
        }
        return e
    }, i.parseRtcpFb = function (t) {
        var e = t.substr(t.indexOf(" ") + 1).split(" ");
        return {
            type: e.shift(),
            parameter: e.join(" ")
        }
    }, i.writeRtcpFb = function (t) {
        var e = "",
            n = t.payloadType;
        return void 0 !== t.preferredPayloadType && (n = t.preferredPayloadType), t.rtcpFeedback && t.rtcpFeedback.length && t.rtcpFeedback.forEach((function (t) {
            e += "a=rtcp-fb:" + n + " " + t.type + (t.parameter && t.parameter.length ? " " + t.parameter : "") + "\r\n"
        })), e
    }, i.parseSsrcMedia = function (t) {
        var e = t.indexOf(" "),
            n = {
                ssrc: parseInt(t.substr(7, e - 7), 10)
            },
            i = t.indexOf(":", e);
        return i > -1 ? (n.attribute = t.substr(e + 1, i - e - 1), n.value = t.substr(i + 1)) : n.attribute = t.substr(e + 1), n
    }, i.parseSsrcGroup = function (t) {
        var e = t.substr(13).split(" ");
        return {
            semantics: e.shift(),
            ssrcs: e.map((function (t) {
                return parseInt(t, 10)
            }))
        }
    }, i.getMid = function (t) {
        var e = i.matchPrefix(t, "a=mid:")[0];
        if (e) return e.substr(6)
    }, i.parseFingerprint = function (t) {
        var e = t.substr(14).split(" ");
        return {
            algorithm: e[0].toLowerCase(),
            value: e[1]
        }
    }, i.getDtlsParameters = function (t, e) {
        return {
            role: "auto",
            fingerprints: i.matchPrefix(t + e, "a=fingerprint:").map(i.parseFingerprint)
        }
    }, i.writeDtlsParameters = function (t, e) {
        var n = "a=setup:" + e + "\r\n";
        return t.fingerprints.forEach((function (t) {
            n += "a=fingerprint:" + t.algorithm + " " + t.value + "\r\n"
        })), n
    }, i.getIceParameters = function (t, e) {
        var n = i.splitLines(t);
        return {
            usernameFragment: (n = n.concat(i.splitLines(e))).filter((function (t) {
                return 0 === t.indexOf("a=ice-ufrag:")
            }))[0].substr(12),
            password: n.filter((function (t) {
                return 0 === t.indexOf("a=ice-pwd:")
            }))[0].substr(10)
        }
    }, i.writeIceParameters = function (t) {
        return "a=ice-ufrag:" + t.usernameFragment + "\r\na=ice-pwd:" + t.password + "\r\n"
    }, i.parseRtpParameters = function (t) {
        for (var e = {
            codecs: [],
            headerExtensions: [],
            fecMechanisms: [],
            rtcp: []
        }, n = i.splitLines(t)[0].split(" "), r = 3; r < n.length; r++) {
            var o = n[r],
                s = i.matchPrefix(t, "a=rtpmap:" + o + " ")[0];
            if (s) {
                var a = i.parseRtpMap(s),
                    c = i.matchPrefix(t, "a=fmtp:" + o + " ");
                switch (a.parameters = c.length ? i.parseFmtp(c[0]) : {}, a.rtcpFeedback = i.matchPrefix(t, "a=rtcp-fb:" + o + " ").map(i.parseRtcpFb), e.codecs.push(a), a.name.toUpperCase()) {
                    case "RED":
                    case "ULPFEC":
                        e.fecMechanisms.push(a.name.toUpperCase())
                }
            }
        }
        return i.matchPrefix(t, "a=extmap:").forEach((function (t) {
            e.headerExtensions.push(i.parseExtmap(t))
        })), e
    }, i.writeRtpDescription = function (t, e) {
        var n = "";
        n += "m=" + t + " ", n += e.codecs.length > 0 ? "9" : "0", n += " UDP/TLS/RTP/SAVPF ", n += e.codecs.map((function (t) {
            return void 0 !== t.preferredPayloadType ? t.preferredPayloadType : t.payloadType
        })).join(" ") + "\r\n", n += "c=IN IP4 0.0.0.0\r\n", n += "a=rtcp:9 IN IP4 0.0.0.0\r\n", e.codecs.forEach((function (t) {
            n += i.writeRtpMap(t), n += i.writeFmtp(t), n += i.writeRtcpFb(t)
        }));
        var r = 0;
        return e.codecs.forEach((function (t) {
            t.maxptime > r && (r = t.maxptime)
        })), r > 0 && (n += "a=maxptime:" + r + "\r\n"), n += "a=rtcp-mux\r\n", e.headerExtensions && e.headerExtensions.forEach((function (t) {
            n += i.writeExtmap(t)
        })), n
    }, i.parseRtpEncodingParameters = function (t) {
        var e, n = [],
            r = i.parseRtpParameters(t),
            o = -1 !== r.fecMechanisms.indexOf("RED"),
            s = -1 !== r.fecMechanisms.indexOf("ULPFEC"),
            a = i.matchPrefix(t, "a=ssrc:").map((function (t) {
                return i.parseSsrcMedia(t)
            })).filter((function (t) {
                return "cname" === t.attribute
            })),
            c = a.length > 0 && a[0].ssrc,
            u = i.matchPrefix(t, "a=ssrc-group:FID").map((function (t) {
                return t.substr(17).split(" ").map((function (t) {
                    return parseInt(t, 10)
                }))
            }));
        u.length > 0 && u[0].length > 1 && u[0][0] === c && (e = u[0][1]), r.codecs.forEach((function (t) {
            if ("RTX" === t.name.toUpperCase() && t.parameters.apt) {
                var i = {
                    ssrc: c,
                    codecPayloadType: parseInt(t.parameters.apt, 10)
                };
                c && e && (i.rtx = {
                    ssrc: e
                }), n.push(i), o && ((i = JSON.parse(JSON.stringify(i))).fec = {
                    ssrc: e,
                    mechanism: s ? "red+ulpfec" : "red"
                }, n.push(i))
            }
        })), 0 === n.length && c && n.push({
            ssrc: c
        });
        var h = i.matchPrefix(t, "b=");
        return h.length && (h = 0 === h[0].indexOf("b=TIAS:") ? parseInt(h[0].substr(7), 10) : 0 === h[0].indexOf("b=AS:") ? 1e3 * parseInt(h[0].substr(5), 10) * .95 - 16e3 : void 0, n.forEach((function (t) {
            t.maxBitrate = h
        }))), n
    }, i.parseRtcpParameters = function (t) {
        var e = {},
            n = i.matchPrefix(t, "a=ssrc:").map((function (t) {
                return i.parseSsrcMedia(t)
            })).filter((function (t) {
                return "cname" === t.attribute
            }))[0];
        n && (e.cname = n.value, e.ssrc = n.ssrc);
        var r = i.matchPrefix(t, "a=rtcp-rsize");
        e.reducedSize = r.length > 0, e.compound = 0 === r.length;
        var o = i.matchPrefix(t, "a=rtcp-mux");
        return e.mux = o.length > 0, e
    }, i.parseMsid = function (t) {
        var e, n = i.matchPrefix(t, "a=msid:");
        if (1 === n.length) return {
            stream: (e = n[0].substr(7).split(" "))[0],
            track: e[1]
        };
        var r = i.matchPrefix(t, "a=ssrc:").map((function (t) {
            return i.parseSsrcMedia(t)
        })).filter((function (t) {
            return "msid" === t.attribute
        }));
        return r.length > 0 ? {
            stream: (e = r[0].value.split(" "))[0],
            track: e[1]
        } : void 0
    }, i.generateSessionId = function () {
        return Math.random().toString().substr(2, 21)
    }, i.writeSessionBoilerplate = function (t, e) {
        var n = void 0 !== e ? e : 2;
        return "v=0\r\no=thisisadapterortc " + (t || i.generateSessionId()) + " " + n + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
    }, i.writeMediaSection = function (t, e, n, r) {
        var o = i.writeRtpDescription(t.kind, e);
        if (o += i.writeIceParameters(t.iceGatherer.getLocalParameters()), o += i.writeDtlsParameters(t.dtlsTransport.getLocalParameters(), "offer" === n ? "actpass" : "active"), o += "a=mid:" + t.mid + "\r\n", t.direction ? o += "a=" + t.direction + "\r\n" : t.rtpSender && t.rtpReceiver ? o += "a=sendrecv\r\n" : t.rtpSender ? o += "a=sendonly\r\n" : t.rtpReceiver ? o += "a=recvonly\r\n" : o += "a=inactive\r\n", t.rtpSender) {
            var s = "msid:" + r.id + " " + t.rtpSender.track.id + "\r\n";
            o += "a=" + s, o += "a=ssrc:" + t.sendEncodingParameters[0].ssrc + " " + s, t.sendEncodingParameters[0].rtx && (o += "a=ssrc:" + t.sendEncodingParameters[0].rtx.ssrc + " " + s, o += "a=ssrc-group:FID " + t.sendEncodingParameters[0].ssrc + " " + t.sendEncodingParameters[0].rtx.ssrc + "\r\n")
        }
        return o += "a=ssrc:" + t.sendEncodingParameters[0].ssrc + " cname:" + i.localCName + "\r\n", t.rtpSender && t.sendEncodingParameters[0].rtx && (o += "a=ssrc:" + t.sendEncodingParameters[0].rtx.ssrc + " cname:" + i.localCName + "\r\n"), o
    }, i.getDirection = function (t, e) {
        for (var n = i.splitLines(t), r = 0; r < n.length; r++) switch (n[r]) {
            case "a=sendrecv":
            case "a=sendonly":
            case "a=recvonly":
            case "a=inactive":
                return n[r].substr(2)
        }
        return e ? i.getDirection(e) : "sendrecv"
    }, i.getKind = function (t) {
        return i.splitLines(t)[0].split(" ")[0].substr(2)
    }, i.isRejected = function (t) {
        return "0" === t.split(" ", 2)[1]
    }, i.parseMLine = function (t) {
        var e = i.splitLines(t)[0].substr(2).split(" ");
        return {
            kind: e[0],
            port: parseInt(e[1], 10),
            protocol: e[2],
            fmt: e.slice(3).join(" ")
        }
    }, i.parseOLine = function (t) {
        var e = i.matchPrefix(t, "o=")[0].substr(2).split(" ");
        return {
            username: e[0],
            sessionId: e[1],
            sessionVersion: parseInt(e[2], 10),
            netType: e[3],
            addressType: e[4],
            address: e[5]
        }
    }, i.isValidSDP = function (t) {
        if ("string" != typeof t || 0 === t.length) return !1;
        for (var e = i.splitLines(t), n = 0; n < e.length; n++)
            if (e[n].length < 2 || "=" !== e[n].charAt(1)) return !1;
        return !0
    }, t.exports = i
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = () => {
        try {
            return new DOMException("", "AbortError")
        } catch (t) {
            return t.code = 20, t.name = "AbortError", t
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => (e, n, i) => {
        const r = [];
        for (let t = 0; t < i.numberOfInputs; t += 1) r.push(new Set);
        t.set(e, {
            activeInputs: r,
            outputs: new Set,
            passiveInputs: new WeakMap,
            renderer: n
        })
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => (e, n) => {
        t.set(e, {
            activeInputs: new Set,
            passiveInputs: new WeakMap,
            renderer: n
        })
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => (e, n) => {
        const i = t(e, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0
        });
        n.connect(i).connect(i.context.destination);
        const r = () => {
            n.removeEventListener("ended", r), n.disconnect(i), i.disconnect()
        };
        n.addEventListener("ended", r)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => (e, n) => {
        t(e).add(n)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    const i = {
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        fftSize: 2048,
        maxDecibels: -30,
        minDecibels: -100,
        smoothingTimeConstant: .8
    },
        r = (t, e, n, r, o, s) => class extends t {
            constructor(t, n = i) {
                const a = o(t),
                    c = {
                        ...i,
                        ...n
                    },
                    u = r(a, c);
                super(t, !1, u, s(a) ? e() : null), this._nativeAnalyserNode = u
            }
            get fftSize() {
                return this._nativeAnalyserNode.fftSize
            }
            set fftSize(t) {
                this._nativeAnalyserNode.fftSize = t
            }
            get frequencyBinCount() {
                return this._nativeAnalyserNode.frequencyBinCount
            }
            get maxDecibels() {
                return this._nativeAnalyserNode.maxDecibels
            }
            set maxDecibels(t) {
                const e = this._nativeAnalyserNode.maxDecibels;
                if (this._nativeAnalyserNode.maxDecibels = t, !(t > this._nativeAnalyserNode.minDecibels)) throw this._nativeAnalyserNode.maxDecibels = e, n()
            }
            get minDecibels() {
                return this._nativeAnalyserNode.minDecibels
            }
            set minDecibels(t) {
                const e = this._nativeAnalyserNode.minDecibels;
                if (this._nativeAnalyserNode.minDecibels = t, !(this._nativeAnalyserNode.maxDecibels > t)) throw this._nativeAnalyserNode.minDecibels = e, n()
            }
            get smoothingTimeConstant() {
                return this._nativeAnalyserNode.smoothingTimeConstant
            }
            set smoothingTimeConstant(t) {
                this._nativeAnalyserNode.smoothingTimeConstant = t
            }
            getByteFrequencyData(t) {
                this._nativeAnalyserNode.getByteFrequencyData(t)
            }
            getByteTimeDomainData(t) {
                this._nativeAnalyserNode.getByteTimeDomainData(t)
            }
            getFloatFrequencyData(t) {
                this._nativeAnalyserNode.getFloatFrequencyData(t)
            }
            getFloatTimeDomainData(t) {
                this._nativeAnalyserNode.getFloatTimeDomainData(t)
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(4);
    const r = (t, e, n) => () => {
        const r = new WeakMap;
        return {
            render(o, s, a) {
                const c = r.get(s);
                return void 0 !== c ? Promise.resolve(c) : (async (o, s, a) => {
                    let c = e(o);
                    if (!Object(i.a)(c, s)) {
                        const e = {
                            channelCount: c.channelCount,
                            channelCountMode: c.channelCountMode,
                            channelInterpretation: c.channelInterpretation,
                            fftSize: c.fftSize,
                            maxDecibels: c.maxDecibels,
                            minDecibels: c.minDecibels,
                            smoothingTimeConstant: c.smoothingTimeConstant
                        };
                        c = t(s, e)
                    }
                    return r.set(s, c), await n(o, s, c, a), c
                })(o, s, a)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return s
    }));
    var i = n(40),
        r = n(37);
    const o = {
        numberOfChannels: 1
    },
        s = (t, e, n, s, a, c, u, h) => {
            let l = null;
            return class d {
                constructor(d) {
                    if (null === a) throw new Error("Missing the native OfflineAudioContext constructor.");
                    const {
                        length: p,
                        numberOfChannels: f,
                        sampleRate: m
                    } = {
                        ...o,
                        ...d
                    };
                    null === l && (l = new a(1, 1, 44100));
                    const g = null !== s && e(c, c) ? new s({
                        length: p,
                        numberOfChannels: f,
                        sampleRate: m
                    }) : l.createBuffer(f, p, m);
                    if (0 === g.numberOfChannels) throw n();
                    return "function" != typeof g.copyFromChannel ? (u(g), Object(r.a)(g)) : e(i.a, () => Object(i.a)(g)) || h(g), t.add(g), g
                }
                static [Symbol.hasInstance](e) {
                    return null !== e && "object" == typeof e && Object.getPrototypeOf(e) === d.prototype || t.has(e)
                }
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return a
    }));
    var i = n(3),
        r = n(20),
        o = n(27);
    const s = {
        buffer: null,
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        loop: !1,
        loopEnd: 0,
        loopStart: 0,
        playbackRate: 1
    },
        a = (t, e, n, a, c, u, h, l) => class extends t {
            constructor(t, r = s) {
                const o = u(t),
                    a = {
                        ...s,
                        ...r
                    },
                    l = c(o, a),
                    d = h(o),
                    p = d ? e() : null;
                super(t, !1, l, p), this._audioBufferSourceNodeRenderer = p, this._isBufferNullified = !1, this._isBufferSet = null !== r.buffer && void 0 !== r.buffer, this._nativeAudioBufferSourceNode = l, this._onended = null, this._playbackRate = n(this, d, l.playbackRate, i.b, i.a)
            }
            get buffer() {
                return this._isBufferNullified ? null : this._nativeAudioBufferSourceNode.buffer
            }
            set buffer(t) {
                try {
                    this._nativeAudioBufferSourceNode.buffer = t
                } catch (e) {
                    if (null !== t || 17 !== e.code) throw e;
                    if (null !== this._nativeAudioBufferSourceNode.buffer) {
                        const t = this._nativeAudioBufferSourceNode.buffer,
                            e = t.numberOfChannels;
                        for (let n = 0; n < e; n += 1) t.getChannelData(n).fill(0);
                        this._isBufferNullified = !0
                    }
                }
                if (null !== t) {
                    if (this._isBufferSet) throw a();
                    this._isBufferSet = !0
                }
            }
            get loop() {
                return this._nativeAudioBufferSourceNode.loop
            }
            set loop(t) {
                this._nativeAudioBufferSourceNode.loop = t
            }
            get loopEnd() {
                return this._nativeAudioBufferSourceNode.loopEnd
            }
            set loopEnd(t) {
                this._nativeAudioBufferSourceNode.loopEnd = t
            }
            get loopStart() {
                return this._nativeAudioBufferSourceNode.loopStart
            }
            set loopStart(t) {
                this._nativeAudioBufferSourceNode.loopStart = t
            }
            get onended() {
                return this._onended
            }
            set onended(t) {
                const e = "function" == typeof t ? l(this, t) : null;
                this._nativeAudioBufferSourceNode.onended = e;
                const n = this._nativeAudioBufferSourceNode.onended;
                this._onended = null !== n && n === e ? t : n
            }
            get playbackRate() {
                return this._playbackRate
            }
            start(t = 0, e = 0, n) {
                if (this._nativeAudioBufferSourceNode.start(t, e, n), null !== this._audioBufferSourceNodeRenderer) this._audioBufferSourceNodeRenderer.start = void 0 === n ? [t, e] : [t, e, n];
                else {
                    Object(r.a)(this);
                    const t = () => {
                        this._nativeAudioBufferSourceNode.removeEventListener("ended", t), setTimeout(() => Object(o.a)(this), 1e3)
                    };
                    this._nativeAudioBufferSourceNode.addEventListener("ended", t)
                }
            }
            stop(t = 0) {
                this._nativeAudioBufferSourceNode.stop(t), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.stop = t)
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(4);
    const r = (t, e, n, r, o) => () => {
        const s = new WeakMap;
        let a = null,
            c = null;
        return {
            set start(t) {
                a = t
            },
            set stop(t) {
                c = t
            },
            render(u, h, l) {
                const d = s.get(h);
                return void 0 !== d ? Promise.resolve(d) : (async (u, h, l) => {
                    let d = n(u);
                    const p = Object(i.a)(d, h);
                    if (!p) {
                        const t = {
                            buffer: d.buffer,
                            channelCount: d.channelCount,
                            channelCountMode: d.channelCountMode,
                            channelInterpretation: d.channelInterpretation,
                            loop: d.loop,
                            loopEnd: d.loopEnd,
                            loopStart: d.loopStart,
                            playbackRate: d.playbackRate.value
                        };
                        d = e(h, t), null !== a && d.start(...a), null !== c && d.stop(c)
                    }
                    return s.set(h, d), p ? await t(h, u.playbackRate, d.playbackRate, l) : await r(h, u.playbackRate, d.playbackRate, l), await o(u, h, d, l), d
                })(u, h, l)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(47);
    const r = (t, e, n, r, o, s, a, c, u) => class extends t {
        constructor(t = {}) {
            if (null === u) throw new Error("Missing the native AudioContext constructor.");
            const e = new u(t);
            if (null === e) throw r();
            if (!Object(i.a)(t.latencyHint)) throw new TypeError(`The provided value '${t.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
            if (void 0 !== t.sampleRate && e.sampleRate !== t.sampleRate) throw n();
            super(e, 2);
            const {
                latencyHint: o
            } = t, {
                sampleRate: s
            } = e;
            if (this._baseLatency = "number" == typeof e.baseLatency ? e.baseLatency : "balanced" === o ? 512 / s : "interactive" === o || void 0 === o ? 256 / s : "playback" === o ? 1024 / s : 128 * Math.max(2, Math.min(128, Math.round(o * s / 128))) / s, this._nativeAudioContext = e, this._state = null, "running" === e.state) {
                this._state = "suspended";
                const t = () => {
                    "suspended" === this._state && (this._state = null), e.removeEventListener("statechange", t)
                };
                e.addEventListener("statechange", t)
            }
        }
        get baseLatency() {
            return this._baseLatency
        }
        get state() {
            return null !== this._state ? this._state : this._nativeAudioContext.state
        }
        close() {
            return "closed" === this.state ? this._nativeAudioContext.close().then(() => {
                throw e()
            }) : ("suspended" === this._state && (this._state = null), this._nativeAudioContext.close())
        }
        createMediaElementSource(t) {
            return new o(this, {
                mediaElement: t
            })
        }
        createMediaStreamDestination() {
            return new s(this)
        }
        createMediaStreamSource(t) {
            return new a(this, {
                mediaStream: t
            })
        }
        createMediaStreamTrackSource(t) {
            return new c(this, {
                mediaStreamTrack: t
            })
        }
        resume() {
            return "suspended" === this._state ? new Promise((t, e) => {
                const n = () => {
                    this._nativeAudioContext.removeEventListener("statechange", n), "running" === this._nativeAudioContext.state ? t() : this.resume().then(t, e)
                };
                this._nativeAudioContext.addEventListener("statechange", n)
            }) : this._nativeAudioContext.resume().catch(t => {
                if (void 0 === t || 15 === t.code) throw e();
                throw t
            })
        }
        suspend() {
            return this._nativeAudioContext.suspend().catch(t => {
                if (void 0 === t) throw e();
                throw t
            })
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e, n, i, r, o, s, a) => class extends t {
        constructor(t, n) {
            const i = o(t),
                c = s(i),
                u = r(i, n, c);
            super(t, !1, u, c ? e(a) : null), this._isNodeOfNativeOfflineAudioContext = c, this._nativeAudioDestinationNode = u
        }
        get channelCount() {
            return this._nativeAudioDestinationNode.channelCount
        }
        set channelCount(t) {
            if (this._isNodeOfNativeOfflineAudioContext) throw i();
            if (t > this._nativeAudioDestinationNode.maxChannelCount) throw n();
            this._nativeAudioDestinationNode.channelCount = t
        }
        get channelCountMode() {
            return this._nativeAudioDestinationNode.channelCountMode
        }
        set channelCountMode(t) {
            if (this._isNodeOfNativeOfflineAudioContext) throw i();
            this._nativeAudioDestinationNode.channelCountMode = t
        }
        get maxChannelCount() {
            return this._nativeAudioDestinationNode.maxChannelCount
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => {
        let e = null;
        return {
            render: (n, i, r) => (null === e && (e = (async (e, n, i) => {
                const r = n.destination;
                return await t(e, n, r, i), r
            })(n, i, r)), e)
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(3);
    const r = (t, e, n, r, o) => (s, a) => {
        const c = a.listener,
            {
                forwardX: u,
                forwardY: h,
                forwardZ: l,
                positionX: d,
                positionY: p,
                positionZ: f,
                upX: m,
                upY: g,
                upZ: v
            } = void 0 === c.forwardX ? (() => {
                const u = e(a, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    numberOfInputs: 9
                }),
                    h = o(a),
                    l = r(a, 256, 9, 0),
                    d = (e, r) => {
                        const o = n(a, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            offset: r
                        });
                        return o.connect(u, 0, e), o.start(), Object.defineProperty(o.offset, "defaultValue", {
                            get: () => r
                        }), t({
                            context: s
                        }, h, o.offset, i.b, i.a)
                    };
                let p = [0, 0, -1, 0, 1, 0],
                    f = [0, 0, 0];
                return l.onaudioprocess = ({
                    inputBuffer: t
                }) => {
                    const e = [t.getChannelData(0)[0], t.getChannelData(1)[0], t.getChannelData(2)[0], t.getChannelData(3)[0], t.getChannelData(4)[0], t.getChannelData(5)[0]];
                    e.some((t, e) => t !== p[e]) && (c.setOrientation(...e), p = e);
                    const n = [t.getChannelData(6)[0], t.getChannelData(7)[0], t.getChannelData(8)[0]];
                    n.some((t, e) => t !== f[e]) && (c.setPosition(...n), f = n)
                }, u.connect(l), {
                    forwardX: d(0, 0),
                    forwardY: d(1, 0),
                    forwardZ: d(2, -1),
                    positionX: d(6, 0),
                    positionY: d(7, 0),
                    positionZ: d(8, 0),
                    upX: d(3, 0),
                    upY: d(4, 1),
                    upZ: d(5, 0)
                }
            })() : c;
        return {
            get forwardX() {
                return u
            },
            get forwardY() {
                return h
            },
            get forwardZ() {
                return l
            },
            get positionX() {
                return d
            },
            get positionY() {
                return p
            },
            get positionZ() {
                return f
            },
            get upX() {
                return m
            },
            get upY() {
                return g
            },
            get upZ() {
                return v
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(21);
    const r = (t, e, n, r, o, s, a, c, u, h, l, d) => (p, f, m, g = null, v = null) => {
        const b = new i.AutomationEventList(m.defaultValue),
            y = f ? r(b) : null,
            _ = {
                get defaultValue() {
                    return m.defaultValue
                },
                get maxValue() {
                    return null === g ? m.maxValue : g
                },
                get minValue() {
                    return null === v ? m.minValue : v
                },
                get value() {
                    return m.value
                },
                set value(t) {
                    m.value = t, _.setValueAtTime(t, p.context.currentTime)
                },
                cancelAndHoldAtTime(t) {
                    if ("function" == typeof m.cancelAndHoldAtTime) null === y && b.flush(p.context.currentTime), b.add(o(t)), m.cancelAndHoldAtTime(t);
                    else {
                        const e = Array.from(b).pop();
                        null === y && b.flush(p.context.currentTime), b.add(o(t));
                        const n = Array.from(b).pop();
                        m.cancelScheduledValues(t), e !== n && void 0 !== n && ("exponentialRampToValue" === n.type ? m.exponentialRampToValueAtTime(n.value, n.endTime) : "linearRampToValue" === n.type ? m.linearRampToValueAtTime(n.value, n.endTime) : "setValue" === n.type ? m.setValueAtTime(n.value, n.startTime) : "setValueCurve" === n.type && m.setValueCurveAtTime(n.values, n.startTime, n.duration))
                    }
                    return _
                },
                cancelScheduledValues: t => (null === y && b.flush(p.context.currentTime), b.add(s(t)), m.cancelScheduledValues(t), _),
                exponentialRampToValueAtTime: (t, e) => (null === y && b.flush(p.context.currentTime), b.add(a(t, e)), m.exponentialRampToValueAtTime(t, e), _),
                linearRampToValueAtTime: (t, e) => (null === y && b.flush(p.context.currentTime), b.add(c(t, e)), m.linearRampToValueAtTime(t, e), _),
                setTargetAtTime: (t, e, n) => (null === y && b.flush(p.context.currentTime), b.add(u(t, e, n)), m.setTargetAtTime(t, e, n), _),
                setValueAtTime: (t, e) => (null === y && b.flush(p.context.currentTime), b.add(h(t, e)), m.setValueAtTime(t, e), _),
                setValueCurveAtTime(t, e, n) {
                    if (null !== d && "webkitAudioContext" === d.name) {
                        const i = e + n,
                            r = p.context.sampleRate,
                            o = Math.ceil(e * r),
                            s = Math.floor(i * r),
                            a = s - o,
                            c = new Float32Array(a);
                        for (let i = 0; i < a; i += 1) {
                            const s = (t.length - 1) / n * ((o + i) / r - e),
                                a = Math.floor(s),
                                u = Math.ceil(s);
                            c[i] = a === u ? t[a] : (1 - (s - a)) * t[a] + (1 - (u - s)) * t[u]
                        }
                        null === y && b.flush(p.context.currentTime), b.add(l(c, e, n)), m.setValueCurveAtTime(c, e, n);
                        const u = s / r;
                        u < i && _.setValueAtTime(c[c.length - 1], u), _.setValueAtTime(t[t.length - 1], i)
                    } else null === y && b.flush(p.context.currentTime), b.add(l(t, e, n)), m.setValueCurveAtTime(t, e, n);
                    return _
                }
            };
        return n.set(_, m), e.set(_, p), t(_, y), _
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => ({
        replay(e) {
            for (const n of t)
                if ("exponentialRampToValue" === n.type) {
                    const {
                        endTime: t,
                        value: i
                    } = n;
                    e.exponentialRampToValueAtTime(i, t)
                } else if ("linearRampToValue" === n.type) {
                    const {
                        endTime: t,
                        value: i
                    } = n;
                    e.linearRampToValueAtTime(i, t)
                } else if ("setTarget" === n.type) {
                    const {
                        startTime: t,
                        target: i,
                        timeConstant: r
                    } = n;
                    e.setTargetAtTime(i, t, r)
                } else if ("setValue" === n.type) {
                    const {
                        startTime: t,
                        value: i
                    } = n;
                    e.setValueAtTime(i, t)
                } else {
                    if ("setValueCurve" !== n.type) throw new Error("Can't apply an unknown automation."); {
                        const {
                            duration: t,
                            startTime: i,
                            values: r
                        } = n;
                        e.setValueCurveAtTime(r, i, t)
                    }
                }
        }
    })
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return a
    }));
    var i = n(0),
        r = n(48);
    const o = {
        channelCount: 2,
        channelCountMode: "explicit",
        channelInterpretation: "speakers",
        numberOfInputs: 1,
        numberOfOutputs: 1,
        outputChannelCount: void 0,
        parameterData: {},
        processorOptions: {}
    },
        s = t => {
            const e = [];
            for (let n = 0; n < t; n += 1) e.push(1);
            return e
        },
        a = (t, e, n, a, c, u, h, l, d) => class extends e {
            constructor(e, d, p = o) {
                const f = u(e),
                    m = h(f),
                    g = (t => ({
                        ...t,
                        outputChannelCount: void 0 !== t.outputChannelCount ? t.outputChannelCount : 1 === t.numberOfInputs && 1 === t.numberOfOutputs ? [t.channelCount] : s(t.numberOfOutputs)
                    }))({
                        ...o,
                        ...p
                    }),
                    v = i.j.get(f),
                    b = void 0 === v ? void 0 : v.get(d),
                    y = c(f, m ? null : e.baseLatency, l, d, b, g);
                super(e, !0, y, m ? a(d, g, b) : null);
                const _ = [];
                y.parameters.forEach((t, e) => {
                    const i = n(this, m, t);
                    _.push([e, i])
                }), this._nativeAudioWorkletNode = y, this._onprocessorerror = null, this._parameters = new r.a(_), m && t(f, this)
            }
            get onprocessorerror() {
                return this._onprocessorerror
            }
            set onprocessorerror(t) {
                const e = "function" == typeof t ? d(this, t) : null;
                this._nativeAudioWorkletNode.onprocessorerror = e;
                const n = this._nativeAudioWorkletNode.onprocessorerror;
                this._onprocessorerror = null !== n && n === e ? t : n
            }
            get parameters() {
                return null === this._parameters ? this._nativeAudioWorkletNode.parameters : this._parameters
            }
            get port() {
                return this._nativeAudioWorkletNode.port
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e, n, i, r, o, s, a, c, u, h, l, d, p, f, m, g, v, b, y) => class extends f {
        constructor(e, n) {
            super(e, n), this._nativeContext = e, this._audioWorklet = void 0 === t ? void 0 : {
                addModule: (e, n) => t(this, e, n)
            }
        }
        get audioWorklet() {
            return this._audioWorklet
        }
        createAnalyser() {
            return new e(this)
        }
        createBiquadFilter() {
            return new r(this)
        }
        createBuffer(t, e, i) {
            return new n({
                length: e,
                numberOfChannels: t,
                sampleRate: i
            })
        }
        createBufferSource() {
            return new i(this)
        }
        createChannelMerger(t = 6) {
            return new o(this, {
                numberOfInputs: t
            })
        }
        createChannelSplitter(t = 6) {
            return new s(this, {
                numberOfOutputs: t
            })
        }
        createConstantSource() {
            return new a(this)
        }
        createConvolver() {
            return new c(this)
        }
        createDelay(t = 1) {
            return new h(this, {
                maxDelayTime: t
            })
        }
        createDynamicsCompressor() {
            return new l(this)
        }
        createGain() {
            return new d(this)
        }
        createIIRFilter(t, e) {
            return new p(this, {
                feedback: e,
                feedforward: t
            })
        }
        createOscillator() {
            return new m(this)
        }
        createPanner() {
            return new g(this)
        }
        createPeriodicWave(t, e, n = {
            disableNormalization: !1
        }) {
            return new v(this, {
                ...n,
                imag: e,
                real: t
            })
        }
        createStereoPanner() {
            return new b(this)
        }
        createWaveShaper() {
            return new y(this)
        }
        decodeAudioData(t, e, n) {
            return u(this._nativeContext, t).then(t => ("function" == typeof e && e(t), t)).catch(t => {
                throw "function" == typeof n && n(t), t
            })
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(3);
    const r = {
        Q: 1,
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        detune: 0,
        frequency: 350,
        gain: 0,
        type: "lowpass"
    },
        o = (t, e, n, o, s, a, c) => class extends t {
            constructor(t, o = r) {
                const u = a(t),
                    h = {
                        ...r,
                        ...o
                    },
                    l = s(u, h),
                    d = c(u);
                super(t, !1, l, d ? n() : null), this._Q = e(this, d, l.Q, i.b, i.a), this._detune = e(this, d, l.detune, 1200 * Math.log2(i.b), -1200 * Math.log2(i.b)), this._frequency = e(this, d, l.frequency, t.sampleRate / 2, 0), this._gain = e(this, d, l.gain, 40 * Math.log10(i.b), i.a), this._nativeBiquadFilterNode = l
            }
            get detune() {
                return this._detune
            }
            get frequency() {
                return this._frequency
            }
            get gain() {
                return this._gain
            }
            get Q() {
                return this._Q
            }
            get type() {
                return this._nativeBiquadFilterNode.type
            }
            set type(t) {
                this._nativeBiquadFilterNode.type = t
            }
            getFrequencyResponse(t, e, n) {
                if (this._nativeBiquadFilterNode.getFrequencyResponse(t, e, n), t.length !== e.length || e.length !== n.length) throw o()
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(4);
    const r = (t, e, n, r, o) => () => {
        const s = new WeakMap;
        return {
            render(a, c, u) {
                const h = s.get(c);
                return void 0 !== h ? Promise.resolve(h) : (async (a, c, u) => {
                    let h = n(a);
                    const l = Object(i.a)(h, c);
                    if (!l) {
                        const t = {
                            Q: h.Q.value,
                            channelCount: h.channelCount,
                            channelCountMode: h.channelCountMode,
                            channelInterpretation: h.channelInterpretation,
                            detune: h.detune.value,
                            frequency: h.frequency.value,
                            gain: h.gain.value,
                            type: h.type
                        };
                        h = e(c, t)
                    }
                    return s.set(c, h), l ? (await t(c, a.Q, h.Q, u), await t(c, a.detune, h.detune, u), await t(c, a.frequency, h.frequency, u), await t(c, a.gain, h.gain, u)) : (await r(c, a.Q, h.Q, u), await r(c, a.detune, h.detune, u), await r(c, a.frequency, h.frequency, u), await r(c, a.gain, h.gain, u)), await o(a, c, h, u), h
                })(a, c, u)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => (n, i) => {
        const r = e.get(n);
        if (void 0 !== r) return r;
        const o = t.get(n);
        if (void 0 !== o) return o;
        try {
            const r = i();
            return r instanceof Promise ? (t.set(n, r), r.catch(() => !1).then(i => (t.delete(n), e.set(n, i), i))) : (e.set(n, r), r)
        } catch {
            return e.set(n, !1), !1
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    const i = {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "speakers",
        numberOfInputs: 6
    },
        r = (t, e, n, r, o) => class extends t {
            constructor(t, s = i) {
                const a = r(t),
                    c = {
                        ...i,
                        ...s
                    };
                super(t, !1, n(a, c), o(a) ? e() : null)
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(4);
    const r = (t, e, n) => () => {
        const r = new WeakMap;
        return {
            render(o, s, a) {
                const c = r.get(s);
                return void 0 !== c ? Promise.resolve(c) : (async (o, s, a) => {
                    let c = e(o);
                    if (!Object(i.a)(c, s)) {
                        const e = {
                            channelCount: c.channelCount,
                            channelCountMode: c.channelCountMode,
                            channelInterpretation: c.channelInterpretation,
                            numberOfInputs: c.numberOfInputs
                        };
                        c = t(s, e)
                    }
                    return r.set(s, c), await n(o, s, c, a), c
                })(o, s, a)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    const i = {
        channelCount: 6,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        numberOfOutputs: 6
    },
        r = (t, e, n, r, o) => class extends t {
            constructor(t, s = i) {
                const a = r(t),
                    c = (t => ({
                        ...t,
                        channelCount: t.numberOfOutputs
                    }))({
                        ...i,
                        ...s
                    });
                super(t, !1, n(a, c), o(a) ? e() : null)
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(4);
    const r = (t, e, n) => () => {
        const r = new WeakMap;
        return {
            render(o, s, a) {
                const c = r.get(s);
                return void 0 !== c ? Promise.resolve(c) : (async (o, s, a) => {
                    let c = e(o);
                    if (!Object(i.a)(c, s)) {
                        const e = {
                            channelCount: c.channelCount,
                            channelCountMode: c.channelCountMode,
                            channelInterpretation: c.channelInterpretation,
                            numberOfOutputs: c.numberOfOutputs
                        };
                        c = t(s, e)
                    }
                    return r.set(s, c), await n(o, s, c, a), c
                })(o, s, a)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => (e, n, i, r) => t(n, e, i, r)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(33);
    const r = t => (e, n, r = 0, o = 0) => {
        const s = e[r];
        if (void 0 === s) throw t();
        return Object(i.a)(n) ? s.connect(n, 0, o) : s.connect(n, 0)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => (e, n) => {
        const i = t(e, {
            buffer: null,
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            loop: !1,
            loopEnd: 0,
            loopStart: 0,
            playbackRate: 1
        }),
            r = e.createBuffer(1, 2, e.sampleRate);
        return i.buffer = r, i.loop = !0, i.connect(n), i.start(), () => {
            i.stop(), i.disconnect(n)
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return a
    }));
    var i = n(3),
        r = n(20),
        o = n(27);
    const s = {
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        offset: 1
    },
        a = (t, e, n, a, c, u, h) => class extends t {
            constructor(t, r = s) {
                const o = c(t),
                    h = {
                        ...s,
                        ...r
                    },
                    l = a(o, h),
                    d = u(o),
                    p = d ? n() : null;
                super(t, !1, l, p), this._constantSourceNodeRenderer = p, this._nativeConstantSourceNode = l, this._offset = e(this, d, l.offset, i.b, i.a), this._onended = null
            }
            get offset() {
                return this._offset
            }
            get onended() {
                return this._onended
            }
            set onended(t) {
                const e = "function" == typeof t ? h(this, t) : null;
                this._nativeConstantSourceNode.onended = e;
                const n = this._nativeConstantSourceNode.onended;
                this._onended = null !== n && n === e ? t : n
            }
            start(t = 0) {
                if (this._nativeConstantSourceNode.start(t), null !== this._constantSourceNodeRenderer) this._constantSourceNodeRenderer.start = t;
                else {
                    Object(r.a)(this);
                    const t = () => {
                        this._nativeConstantSourceNode.removeEventListener("ended", t), setTimeout(() => Object(o.a)(this), 1e3)
                    };
                    this._nativeConstantSourceNode.addEventListener("ended", t)
                }
            }
            stop(t = 0) {
                this._nativeConstantSourceNode.stop(t), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.stop = t)
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(4);
    const r = (t, e, n, r, o) => () => {
        const s = new WeakMap;
        let a = null,
            c = null;
        return {
            set start(t) {
                a = t
            },
            set stop(t) {
                c = t
            },
            render(u, h, l) {
                const d = s.get(h);
                return void 0 !== d ? Promise.resolve(d) : (async (u, h, l) => {
                    let d = n(u);
                    const p = Object(i.a)(d, h);
                    if (!p) {
                        const t = {
                            channelCount: d.channelCount,
                            channelCountMode: d.channelCountMode,
                            channelInterpretation: d.channelInterpretation,
                            offset: d.offset.value
                        };
                        d = e(h, t), null !== a && d.start(a), null !== c && d.stop(c)
                    }
                    return s.set(h, d), p ? await t(h, u.offset, d.offset, l) : await r(h, u.offset, d.offset, l), await o(u, h, d, l), d
                })(u, h, l)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => e => (t[0] = e, t[0])
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    const i = {
        buffer: null,
        channelCount: 2,
        channelCountMode: "clamped-max",
        channelInterpretation: "speakers",
        disableNormalization: !1
    },
        r = (t, e, n, r, o) => class extends t {
            constructor(t, s = i) {
                const a = r(t),
                    c = {
                        ...i,
                        ...s
                    },
                    u = n(a, c);
                super(t, !1, u, o(a) ? e() : null), this._isBufferNullified = !1, this._nativeConvolverNode = u
            }
            get buffer() {
                return this._isBufferNullified ? null : this._nativeConvolverNode.buffer
            }
            set buffer(t) {
                if (this._nativeConvolverNode.buffer = t, null === t && null !== this._nativeConvolverNode.buffer) {
                    const t = this._nativeConvolverNode.context;
                    this._nativeConvolverNode.buffer = t.createBuffer(1, 1, t.sampleRate), this._isBufferNullified = !0
                } else this._isBufferNullified = !1
            }
            get normalize() {
                return this._nativeConvolverNode.normalize
            }
            set normalize(t) {
                this._nativeConvolverNode.normalize = t
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(14),
        r = n(4);
    const o = (t, e, n) => () => {
        const o = new WeakMap;
        return {
            render(s, a, c) {
                const u = o.get(a);
                return void 0 !== u ? Promise.resolve(u) : (async (s, a, c) => {
                    let u = e(s);
                    if (!Object(r.a)(u, a)) {
                        const e = {
                            buffer: u.buffer,
                            channelCount: u.channelCount,
                            channelCountMode: u.channelCountMode,
                            channelInterpretation: u.channelInterpretation,
                            disableNormalization: !u.normalize
                        };
                        u = t(a, e)
                    }
                    return o.set(a, u), Object(i.a)(u) ? await n(s, a, u.inputs[0], c) : await n(s, a, u, c), u
                })(s, a, c)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => (n, i, r) => {
        if (null === e) throw new Error("Missing the native OfflineAudioContext constructor.");
        try {
            return new e(n, i, r)
        } catch (e) {
            if ("IndexSizeError" === e.name || "SyntaxError" === e.name) throw t();
            throw e
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = () => {
        try {
            return new DOMException("", "DataCloneError")
        } catch (t) {
            return t.code = 25, t.name = "DataCloneError", t
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(28);
    const r = (t, e, n, r, o, s, a, c) => (u, h) => {
        const l = e.get(u);
        if (void 0 === l) throw new Error("Missing the expected cycle count.");
        const d = s(u.context),
            p = c(d);
        if (l === h) {
            if (e.delete(u), !p && a(u)) {
                const e = r(u),
                    {
                        outputs: s
                    } = n(u);
                for (const n of s)
                    if (Object(i.a)(n)) {
                        const i = r(n[0]);
                        t(e, i, n[1], n[2])
                    } else {
                        const t = o(n[0]);
                        e.connect(t, n[1])
                    }
            }
        } else e.set(u, l - h)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    const i = {
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        delayTime: 0,
        maxDelayTime: 1
    },
        r = (t, e, n, r, o, s) => class extends t {
            constructor(t, a = i) {
                const c = o(t),
                    u = {
                        ...i,
                        ...a
                    },
                    h = r(c, u),
                    l = s(c);
                super(t, !1, h, l ? n(u.maxDelayTime) : null), this._delayTime = e(this, l, h.delayTime, u.maxDelayTime, 0)
            }
            get delayTime() {
                return this._delayTime
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(4);
    const r = (t, e, n, r, o) => s => {
        const a = new WeakMap;
        return {
            render(c, u, h) {
                const l = a.get(u);
                return void 0 !== l ? Promise.resolve(l) : (async (c, u, h) => {
                    let l = n(c);
                    const d = Object(i.a)(l, u);
                    if (!d) {
                        const t = {
                            channelCount: l.channelCount,
                            channelCountMode: l.channelCountMode,
                            channelInterpretation: l.channelInterpretation,
                            delayTime: l.delayTime.value,
                            maxDelayTime: s
                        };
                        l = e(u, t)
                    }
                    return a.set(u, l), d ? await t(u, c.delayTime, l.delayTime, h) : await r(u, c.delayTime, l.delayTime, h), await o(c, u, l, h), l
                })(c, u, h)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => (e, n) => {
        t(e).delete(n)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(33);
    const r = (t, e, n) => {
        const i = e[n];
        if (void 0 === i) throw t();
        return i
    },
        o = t => (e, n, o, s = 0) => void 0 === n ? e.forEach(t => t.disconnect()) : "number" == typeof n ? r(t, e, n).disconnect() : Object(i.a)(n) ? void 0 === o ? e.forEach(t => t.disconnect(n)) : void 0 === s ? r(t, e, o).disconnect(n, 0) : r(t, e, o).disconnect(n, 0, s) : void 0 === o ? e.forEach(t => t.disconnect(n)) : r(t, e, o).disconnect(n, 0)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    const i = {
        attack: .003,
        channelCount: 2,
        channelCountMode: "clamped-max",
        channelInterpretation: "speakers",
        knee: 30,
        ratio: 12,
        release: .25,
        threshold: -24
    },
        r = (t, e, n, r, o, s, a) => class extends t {
            constructor(t, o = i) {
                const c = s(t),
                    u = {
                        ...i,
                        ...o
                    },
                    h = r(c, u),
                    l = a(c);
                super(t, !1, h, l ? n() : null), this._attack = e(this, l, h.attack, 1, 0), this._knee = e(this, l, h.knee, 40, 0), this._nativeDynamicsCompressorNode = h, this._ratio = e(this, l, h.ratio, 20, 1), this._release = e(this, l, h.release, 1, 0), this._threshold = e(this, l, h.threshold, 0, -100)
            }
            get attack() {
                return this._attack
            }
            get channelCount() {
                return this._nativeDynamicsCompressorNode.channelCount
            }
            set channelCount(t) {
                const e = this._nativeDynamicsCompressorNode.channelCount;
                if (this._nativeDynamicsCompressorNode.channelCount = t, t > 2) throw this._nativeDynamicsCompressorNode.channelCount = e, o()
            }
            get channelCountMode() {
                return this._nativeDynamicsCompressorNode.channelCountMode
            }
            set channelCountMode(t) {
                const e = this._nativeDynamicsCompressorNode.channelCountMode;
                if (this._nativeDynamicsCompressorNode.channelCountMode = t, "max" === t) throw this._nativeDynamicsCompressorNode.channelCountMode = e, o()
            }
            get knee() {
                return this._knee
            }
            get ratio() {
                return this._ratio
            }
            get reduction() {
                return "number" == typeof this._nativeDynamicsCompressorNode.reduction.value ? this._nativeDynamicsCompressorNode.reduction.value : this._nativeDynamicsCompressorNode.reduction
            }
            get release() {
                return this._release
            }
            get threshold() {
                return this._threshold
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(4);
    const r = (t, e, n, r, o) => () => {
        const s = new WeakMap;
        return {
            render(a, c, u) {
                const h = s.get(c);
                return void 0 !== h ? Promise.resolve(h) : (async (a, c, u) => {
                    let h = n(a);
                    const l = Object(i.a)(h, c);
                    if (!l) {
                        const t = {
                            attack: h.attack.value,
                            channelCount: h.channelCount,
                            channelCountMode: h.channelCountMode,
                            channelInterpretation: h.channelInterpretation,
                            knee: h.knee.value,
                            ratio: h.ratio.value,
                            release: h.release.value,
                            threshold: h.threshold.value
                        };
                        h = e(c, t)
                    }
                    return s.set(c, h), l ? (await t(c, a.attack, h.attack, u), await t(c, a.knee, h.knee, u), await t(c, a.ratio, h.ratio, u), await t(c, a.release, h.release, u), await t(c, a.threshold, h.threshold, u)) : (await r(c, a.attack, h.attack, u), await r(c, a.knee, h.knee, u), await r(c, a.ratio, h.ratio, u), await r(c, a.release, h.release, u), await r(c, a.threshold, h.threshold, u)), await o(a, c, h, u), h
                })(a, c, u)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = () => {
        try {
            return new DOMException("", "EncodingError")
        } catch (t) {
            return t.code = 0, t.name = "EncodingError", t
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => e => new Promise((n, i) => {
        if (null === t) return void i(new SyntaxError);
        const r = t.document.head;
        if (null === r) i(new SyntaxError);
        else {
            const o = t.document.createElement("script"),
                s = new Blob([e], {
                    type: "application/javascript"
                }),
                a = URL.createObjectURL(s),
                c = t.onerror,
                u = () => {
                    t.onerror = c, URL.revokeObjectURL(a)
                };
            t.onerror = (e, n, r, o, s) => n === a || n === t.location.href && 1 === r && 1 === o ? (u(), i(s), !1) : null !== c ? c(e, n, r, o, s) : void 0, o.onerror = () => {
                u(), i(new SyntaxError)
            }, o.onload = () => {
                u(), n()
            }, o.src = a, o.type = "module", r.appendChild(o)
        }
    })
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => class {
        constructor(t) {
            this._nativeEventTarget = t, this._listeners = new WeakMap
        }
        addEventListener(e, n, i) {
            if (null !== n) {
                let r = this._listeners.get(n);
                void 0 === r && (r = t(this, n), "function" == typeof n && this._listeners.set(n, r)), this._nativeEventTarget.addEventListener(e, r, i)
            }
        }
        dispatchEvent(t) {
            return this._nativeEventTarget.dispatchEvent(t)
        }
        removeEventListener(t, e, n) {
            const i = null === e ? void 0 : this._listeners.get(e);
            this._nativeEventTarget.removeEventListener(t, void 0 === i ? null : i, n)
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => (e, n, i) => {
        Object.defineProperties(t, {
            currentFrame: {
                configurable: !0,
                get: () => Math.round(e * n)
            },
            currentTime: {
                configurable: !0,
                get: () => e
            }
        });
        try {
            return i()
        } finally {
            null !== t && (delete t.currentFrame, delete t.currentTime)
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => async e => {
        try {
            const t = await fetch(e);
            if (t.ok) return t.text()
        } catch { }
        throw t()
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(3);
    const r = {
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        gain: 1
    },
        o = (t, e, n, o, s, a) => class extends t {
            constructor(t, c = r) {
                const u = s(t),
                    h = {
                        ...r,
                        ...c
                    },
                    l = o(u, h),
                    d = a(u);
                super(t, !1, l, d ? n() : null), this._gain = e(this, d, l.gain, i.b, i.a)
            }
            get gain() {
                return this._gain
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(4);
    const r = (t, e, n, r, o) => () => {
        const s = new WeakMap;
        return {
            render(a, c, u) {
                const h = s.get(c);
                return void 0 !== h ? Promise.resolve(h) : (async (a, c, u) => {
                    let h = n(a);
                    const l = Object(i.a)(h, c);
                    if (!l) {
                        const t = {
                            channelCount: h.channelCount,
                            channelCountMode: h.channelCountMode,
                            channelInterpretation: h.channelInterpretation,
                            gain: h.gain.value
                        };
                        h = e(c, t)
                    }
                    return s.set(c, h), l ? await t(c, a.gain, h.gain, u) : await r(c, a.gain, h.gain, u), await o(a, c, h, u), h
                })(a, c, u)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => e => {
        const n = t(e);
        if (null === n.renderer) throw new Error("Missing the renderer of the given AudioNode in the audio graph.");
        return n.renderer
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => e => {
        const n = t(e);
        if (null === n.renderer) throw new Error("Missing the renderer of the given AudioParam in the audio graph.");
        return n.renderer
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(0);
    const r = (t, e, n) => r => {
        if ("closed" === r.state && null !== e && "webkitAudioContext" !== e.name) {
            if (!t(r)) {
                const t = i.f.get(r);
                if (void 0 !== t) return t;
                const n = new e;
                return i.f.set(r, n), n
            } {
                const t = i.f.get(r);
                if (void 0 !== t) return t;
                if (null !== n) {
                    const t = new n(1, 1, 44100);
                    return i.f.set(r, t), t
                }
            }
        }
        return null
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(8);
    const r = t => e => {
        const n = t.get(e);
        if (void 0 === n) throw Object(i.a)();
        return n
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => e => {
        const n = t.get(e);
        if (void 0 === n) throw new Error("The context has no set of AudioWorkletNodes.");
        return n
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(50),
        r = n(4);
    const o = (t, e, n, o, s, a) => (c, u) => {
        const h = new WeakMap;
        let l = null;
        const d = async (d, p, f) => {
            let m = null,
                g = n(d);
            const v = Object(r.a)(g, p);
            if (void 0 === p.createIIRFilter ? m = t(p, {
                buffer: null,
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            }) : v || (g = e(p, t => t.createIIRFilter(u, c))), h.set(p, null === m ? g : m), null !== m) {
                if (null === l) {
                    if (null === o) throw new Error("Missing the native OfflineAudioContext constructor.");
                    const t = new o(d.context.destination.channelCount, d.context.length, p.sampleRate);
                    l = (async () => (await s(d, t, t.destination, f), ((t, e, n, r) => {
                        const o = n.length,
                            s = r.length,
                            a = Math.min(o, s);
                        if (1 !== n[0]) {
                            for (let t = 0; t < o; t += 1) r[t] /= n[0];
                            for (let t = 1; t < s; t += 1) n[t] /= n[0]
                        }
                        const c = new Float32Array(32),
                            u = new Float32Array(32),
                            h = e.createBuffer(t.numberOfChannels, t.length, t.sampleRate),
                            l = t.numberOfChannels;
                        for (let e = 0; e < l; e += 1) {
                            const l = t.getChannelData(e),
                                d = h.getChannelData(e);
                            c.fill(0), u.fill(0), Object(i.a)(n, o, r, s, a, c, u, 0, 32, l, d)
                        }
                        return h
                    })(await a(t), p, c, u)))()
                }
                const t = await l;
                return m.buffer = t, m.start(0), m
            }
            return await s(d, p, g, f), g
        };
        return {
            render(t, e, n) {
                const i = h.get(e);
                return void 0 !== i ? Promise.resolve(i) : d(t, e, n)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(28);
    const r = (t, e, n, r, o, s) => a => (c, u) => {
        const h = t.get(c);
        if (void 0 === h) {
            if (!a && s(c)) {
                const t = r(c),
                    {
                        outputs: s
                    } = n(c);
                for (const n of s)
                    if (Object(i.a)(n)) {
                        const i = r(n[0]);
                        e(t, i, n[1], n[2])
                    } else {
                        const e = o(n[0]);
                        t.disconnect(e, n[1])
                    }
            }
            t.set(c, u)
        } else t.set(c, h + u)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => n => {
        const i = t.get(n);
        return e(i) || e(n)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => n => t.has(n) || e(n)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => n => t.has(n) || e(n)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => n => {
        const i = t.get(n);
        return e(i) || e(n)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => e => null !== t && e instanceof t
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => e => null !== t && "function" == typeof t.AudioNode && e instanceof t.AudioNode
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => e => null !== t && "function" == typeof t.AudioParam && e instanceof t.AudioParam
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => n => t(n) || e(n)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => e => null !== t && e instanceof t
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => null !== t && t.isSecureContext
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = async (t, e, n, i, r, o, s, a, c, u, h, l, d, p) => {
        if (t(e, e) && t(n, n) && t(r, r) && t(o, o) && t(a, a) && t(c, c) && t(u, u) && t(h, h) && t(l, l)) {
            return (await Promise.all([t(i, i), t(s, s), t(d, d), t(p, p)])).every(t => t)
        }
        return !1
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e, n, i) => class extends t {
        constructor(t, r) {
            const o = n(t),
                s = e(o, r);
            if (i(o)) throw TypeError();
            super(t, !0, s, null), this._mediaElement = r.mediaElement, this._nativeMediaElementAudioSourceNode = s
        }
        get mediaElement() {
            return void 0 === this._nativeMediaElementAudioSourceNode.mediaElement ? this._mediaElement : this._nativeMediaElementAudioSourceNode.mediaElement
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    const i = {
        channelCount: 2,
        channelCountMode: "explicit",
        channelInterpretation: "speakers"
    },
        r = (t, e, n, r) => class extends t {
            constructor(t, o = i) {
                const s = n(t);
                if (r(s)) throw new TypeError;
                const a = {
                    ...i,
                    ...o
                },
                    c = e(s, a);
                super(t, !1, c, null), this._nativeMediaStreamAudioDestinationNode = c
            }
            get stream() {
                return this._nativeMediaStreamAudioDestinationNode.stream
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e, n, i) => class extends t {
        constructor(t, r) {
            const o = n(t),
                s = e(o, r);
            if (i(o)) throw new TypeError;
            super(t, !0, s, null), this._nativeMediaStreamAudioSourceNode = s
        }
        get mediaStream() {
            return this._nativeMediaStreamAudioSourceNode.mediaStream
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e, n) => class extends t {
        constructor(t, i) {
            const r = n(t);
            super(t, !0, e(r, i), null)
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(47);
    const r = (t, e, n, r, o) => class extends r {
        constructor(t = {}) {
            if (null === o) throw new Error("Missing the native AudioContext constructor.");
            const r = new o(t);
            if (null === r) throw n();
            if (!Object(i.a)(t.latencyHint)) throw new TypeError(`The provided value '${t.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
            if (void 0 !== t.sampleRate && r.sampleRate !== t.sampleRate) throw e();
            super(r, 2);
            const {
                latencyHint: s
            } = t, {
                sampleRate: a
            } = r;
            if (this._baseLatency = "number" == typeof r.baseLatency ? r.baseLatency : "balanced" === s ? 512 / a : "interactive" === s || void 0 === s ? 256 / a : "playback" === s ? 1024 / a : 128 * Math.max(2, Math.min(128, Math.round(s * a / 128))) / a, this._nativeAudioContext = r, this._state = null, "running" === r.state) {
                this._state = "suspended";
                const t = () => {
                    "suspended" === this._state && (this._state = null), r.removeEventListener("statechange", t)
                };
                r.addEventListener("statechange", t)
            }
        }
        get baseLatency() {
            return this._baseLatency
        }
        get state() {
            return null !== this._state ? this._state : this._nativeAudioContext.state
        }
        close() {
            return "closed" === this.state ? this._nativeAudioContext.close().then(() => {
                throw t()
            }) : ("suspended" === this._state && (this._state = null), this._nativeAudioContext.close())
        }
        resume() {
            return "suspended" === this._state ? new Promise((t, e) => {
                const n = () => {
                    this._nativeAudioContext.removeEventListener("statechange", n), "running" === this._nativeAudioContext.state ? t() : this.resume().then(t, e)
                };
                this._nativeAudioContext.addEventListener("statechange", n)
            }) : this._nativeAudioContext.resume().catch(e => {
                if (void 0 === e || 15 === e.code) throw t();
                throw e
            })
        }
        suspend() {
            return this._nativeAudioContext.suspend().catch(e => {
                if (void 0 === e) throw t();
                throw e
            })
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(0);
    const r = (t, e, n, r, o, s) => class extends n {
        constructor(n, s) {
            super(n), this._nativeContext = n, i.g.set(this, n);
            const a = n.sampleRate;
            Object.defineProperty(n, "sampleRate", {
                get: () => a
            }), r(n) && o.set(n, new Set), this._destination = new t(this, s), this._listener = e(this, n), this._onstatechange = null
        }
        get currentTime() {
            return this._nativeContext.currentTime
        }
        get destination() {
            return this._destination
        }
        get listener() {
            return this._listener
        }
        get onstatechange() {
            return this._onstatechange
        }
        set onstatechange(t) {
            const e = "function" == typeof t ? s(this, t) : null;
            this._nativeContext.onstatechange = e;
            const n = this._nativeContext.onstatechange;
            this._onstatechange = null !== n && n === e ? t : n
        }
        get sampleRate() {
            return this._nativeContext.sampleRate
        }
        get state() {
            return this._nativeContext.state
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(16);
    const r = {
        numberOfChannels: 1
    },
        o = (t, e, n, o, s) => class extends o {
            constructor(e) {
                const {
                    length: o,
                    numberOfChannels: s,
                    sampleRate: a
                } = {
                    ...r,
                    ...e
                }, c = n(s, o, a);
                t(i.a, () => Object(i.a)(c)) || c.addEventListener("statechange", (() => {
                    let t = 0;
                    const e = n => {
                        "running" === this._state && (t > 0 ? (c.removeEventListener("statechange", e), n.stopImmediatePropagation(), this._waitForThePromiseToSettle(n)) : t += 1)
                    };
                    return e
                })()), super(c, s), this._length = o, this._nativeOfflineAudioContext = c, this._state = null
            }
            get length() {
                return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length
            }
            get state() {
                return null === this._state ? this._nativeOfflineAudioContext.state : this._state
            }
            startRendering() {
                return "running" === this._state ? Promise.reject(e()) : (this._state = "running", s(this.destination, this._nativeOfflineAudioContext).then(t => (this._state = null, t)).catch(t => {
                    throw this._state = null, t
                }))
            }
            _waitForThePromiseToSettle(t) {
                null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(t) : setTimeout(() => this._waitForThePromiseToSettle(t))
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => (n, i, r) => {
        const o = new Set;
        var s, a;
        return n.connect = (s = n.connect, (r, a = 0, c = 0) => {
            const u = 0 === o.size;
            if (e(r)) return s.call(n, r, a, c), t(o, [r, a, c], t => t[0] === r && t[1] === a && t[2] === c, !0), u && i(), r;
            s.call(n, r, a), t(o, [r, a], t => t[0] === r && t[1] === a, !0), u && i()
        }), n.disconnect = (a = n.disconnect, (t, i, s) => {
            const c = o.size > 0;
            if (void 0 === t) a.apply(n), o.clear();
            else if ("number" == typeof t) {
                a.call(n, t);
                for (const e of o) e[1] === t && o.delete(e)
            } else {
                e(t) ? a.call(n, t, i, s) : a.call(n, t, i);
                for (const e of o) e[0] !== t || void 0 !== i && e[1] !== i || void 0 !== s && e[2] !== s || o.delete(e)
            }
            const u = 0 === o.size;
            c && u && r()
        }), n
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => null === t ? null : t.hasOwnProperty("AudioBuffer") ? t.AudioBuffer : null
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => null === t ? null : t.hasOwnProperty("AudioContext") ? t.AudioContext : t.hasOwnProperty("webkitAudioContext") ? t.webkitAudioContext : null
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => (n, i, r) => {
        const o = n.destination;
        if (o.channelCount !== i) try {
            o.channelCount = i
        } catch { }
        r && "explicit" !== o.channelCountMode && (o.channelCountMode = "explicit"), 0 === o.maxChannelCount && Object.defineProperty(o, "maxChannelCount", {
            value: i
        });
        const s = t(n, {
            channelCount: i,
            channelCountMode: o.channelCountMode,
            channelInterpretation: o.channelInterpretation,
            gain: 1
        });
        return e(s, "channelCount", t => () => t.call(s), t => e => {
            t.call(s, e);
            try {
                o.channelCount = e
            } catch (t) {
                if (e > o.maxChannelCount) throw t
            }
        }), e(s, "channelCountMode", t => () => t.call(s), t => e => {
            t.call(s, e), o.channelCountMode = e
        }), e(s, "channelInterpretation", t => () => t.call(s), t => e => {
            t.call(s, e), o.channelInterpretation = e
        }), Object.defineProperty(s, "maxChannelCount", {
            get: () => o.maxChannelCount
        }), s.connect(o), s
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => (e, n) => {
        const i = t(e);
        return n(null !== i ? i : e)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => null === t ? null : t.hasOwnProperty("AudioWorkletNode") ? t.AudioWorkletNode : null
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return s
    }));
    var i = n(6),
        r = n(5),
        o = n(2);
    const s = t => (e, n) => {
        const s = t(e, t => t.createBiquadFilter());
        return Object(o.a)(s, n), Object(i.a)(s, n, "Q"), Object(i.a)(s, n, "detune"), Object(i.a)(s, n, "frequency"), Object(i.a)(s, n, "gain"), Object(r.a)(s, n, "type"), s
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(2);
    const r = (t, e) => (n, r) => {
        const o = t(n, t => t.createChannelMerger(r.numberOfInputs));
        return 1 !== o.channelCount && "explicit" !== o.channelCountMode && e(n, o), Object(i.a)(o, r), o
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return a
    }));
    var i = n(6),
        r = n(2),
        o = n(38),
        s = n(39);
    const a = (t, e, n, a, c, u) => (h, l) => {
        if (void 0 === h.createConstantSource) return a(h, l);
        const d = n(h, t => t.createConstantSource());
        return Object(r.a)(d, l), Object(i.a)(d, l, "offset"), e(c, () => c(h)) || Object(o.a)(d), e(u, () => u(h)) || Object(s.a)(d), t(h, d), d
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(13);
    const r = (t, e, n, r) => (o, {
        offset: s,
        ...a
    }) => {
        const c = o.createBuffer(1, 2, o.sampleRate),
            u = e(o, {
                buffer: null,
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            }),
            h = n(o, {
                ...a,
                gain: s
            }),
            l = c.getChannelData(0);
        l[0] = 1, l[1] = 1, u.buffer = c, u.loop = !0;
        const d = {
            get bufferSize() { },
            get channelCount() {
                return h.channelCount
            },
            set channelCount(t) {
                h.channelCount = t
            },
            get channelCountMode() {
                return h.channelCountMode
            },
            set channelCountMode(t) {
                h.channelCountMode = t
            },
            get channelInterpretation() {
                return h.channelInterpretation
            },
            set channelInterpretation(t) {
                h.channelInterpretation = t
            },
            get context() {
                return h.context
            },
            get inputs() {
                return []
            },
            get numberOfInputs() {
                return u.numberOfInputs
            },
            get numberOfOutputs() {
                return h.numberOfOutputs
            },
            get offset() {
                return h.gain
            },
            get onended() {
                return u.onended
            },
            set onended(t) {
                u.onended = t
            },
            addEventListener: (...t) => u.addEventListener(t[0], t[1], t[2]),
            dispatchEvent: (...t) => u.dispatchEvent(t[0]),
            removeEventListener: (...t) => u.removeEventListener(t[0], t[1], t[2]),
            start(t = 0) {
                u.start.call(u, t)
            },
            stop(t = 0) {
                u.stop.call(u, t)
            }
        };
        return t(o, u), r(Object(i.a)(d, h), () => u.connect(h), () => u.disconnect(h))
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(5),
        r = n(2);
    const o = (t, e, n, o) => (s, a) => {
        const c = t(s, t => t.createConvolver());
        try {
            c.channelCount = 1
        } catch (t) {
            return e(s, a)
        }
        if (Object(r.a)(c, a), a.disableNormalization === c.normalize && (c.normalize = !a.disableNormalization), Object(i.a)(c, a, "buffer"), a.channelCount > 2) throw n();
        if (o(c, "channelCount", t => () => t.call(c), t => e => {
            if (e > 2) throw n();
            return t.call(c, e)
        }), "max" === a.channelCountMode) throw n();
        return o(c, "channelCountMode", t => () => t.call(c), t => e => {
            if ("max" === e) throw n();
            return t.call(c, e)
        }), c
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(2),
        r = n(13);
    const o = (t, e, n) => (o, {
        buffer: s,
        channelCount: a,
        channelCountMode: c,
        channelInterpretation: u,
        disableNormalization: h
    }) => {
        const l = t(o, t => t.createConvolver());
        Object(i.a)(l, {
            channelCount: Math.max(a, 2),
            channelCountMode: "max" === c ? c : "clamped-max",
            channelInterpretation: u
        });
        const d = e(o, {
            channelCount: a,
            channelCountMode: c,
            channelInterpretation: u,
            gain: 1
        }),
            p = {
                get buffer() {
                    return l.buffer
                },
                set buffer(t) {
                    l.buffer = t
                },
                get bufferSize() { },
                get channelCount() {
                    return d.channelCount
                },
                set channelCount(t) {
                    t > 2 && (l.channelCount = t), d.channelCount = t
                },
                get channelCountMode() {
                    return d.channelCountMode
                },
                set channelCountMode(t) {
                    "max" === t && (l.channelCountMode = t), d.channelCountMode = t
                },
                get channelInterpretation() {
                    return l.channelInterpretation
                },
                set channelInterpretation(t) {
                    l.channelInterpretation = t, d.channelInterpretation = t
                },
                get context() {
                    return l.context
                },
                get inputs() {
                    return [l]
                },
                get numberOfInputs() {
                    return l.numberOfInputs
                },
                get numberOfOutputs() {
                    return l.numberOfOutputs
                },
                get normalize() {
                    return l.normalize
                },
                set normalize(t) {
                    l.normalize = t
                },
                addEventListener: (...t) => l.addEventListener(t[0], t[1], t[2]),
                dispatchEvent: (...t) => l.dispatchEvent(t[0]),
                removeEventListener: (...t) => l.removeEventListener(t[0], t[1], t[2])
            };
        h === p.normalize && (p.normalize = !h), s !== p.buffer && (p.buffer = s);
        return n(Object(r.a)(p, d), () => l.connect(d), () => l.disconnect(d))
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(6),
        r = n(2);
    const o = t => (e, n) => {
        const o = t(e, t => t.createDelay(n.maxDelayTime));
        return Object(r.a)(o, n), Object(i.a)(o, n, "delayTime"), o
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(6),
        r = n(2);
    const o = (t, e) => (n, o) => {
        const s = t(n, t => t.createDynamicsCompressor());
        if (Object(r.a)(s, o), o.channelCount > 2) throw e();
        if ("max" === o.channelCountMode) throw e();
        return Object(i.a)(s, o, "attack"), Object(i.a)(s, o, "knee"), Object(i.a)(s, o, "ratio"), Object(i.a)(s, o, "release"), Object(i.a)(s, o, "threshold"), s
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(6),
        r = n(2);
    const o = t => (e, n) => {
        const o = t(e, t => t.createGain());
        return Object(r.a)(o, n), Object(i.a)(o, n, "gain"), o
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(2);
    const r = (t, e) => (n, r, o) => {
        if (void 0 === n.createIIRFilter) return e(n, r, o);
        const s = t(n, t => t.createIIRFilter(o.feedforward, o.feedback));
        return Object(i.a)(s, o), s
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return c
    }));
    var i = n(51),
        r = n(50),
        o = n(13);

    function s(t, e) {
        const n = e[0] * e[0] + e[1] * e[1];
        return [(t[0] * e[0] + t[1] * e[1]) / n, (t[1] * e[0] - t[0] * e[1]) / n]
    }

    function a(t, e) {
        let n = [0, 0];
        for (let o = t.length - 1; o >= 0; o -= 1) r = e, n = [(i = n)[0] * r[0] - i[1] * r[1], i[0] * r[1] + i[1] * r[0]], n[0] += t[o];
        var i, r;
        return n
    }
    const c = (t, e, n, c) => (u, h, {
        channelCount: l,
        channelCountMode: d,
        channelInterpretation: p,
        feedback: f,
        feedforward: m
    }) => {
        const g = Object(i.a)(h, u.sampleRate),
            v = f.length,
            b = m.length,
            y = Math.min(v, b);
        if (0 === f.length || f.length > 20) throw c();
        if (0 === f[0]) throw e();
        if (0 === m.length || m.length > 20) throw c();
        if (0 === m[0]) throw e();
        if (1 !== f[0]) {
            for (let t = 0; t < b; t += 1) m[t] /= f[0];
            for (let t = 1; t < v; t += 1) f[t] /= f[0]
        }
        const _ = n(u, g, l, l);
        _.channelCount = l, _.channelCountMode = d, _.channelInterpretation = p;
        const w = [],
            x = [],
            T = [];
        for (let t = 0; t < l; t += 1) {
            w.push(0);
            const t = new Float32Array(32),
                e = new Float32Array(32);
            t.fill(0), e.fill(0), x.push(t), T.push(e)
        }
        _.onaudioprocess = t => {
            const e = t.inputBuffer,
                n = t.outputBuffer,
                i = e.numberOfChannels;
            for (let t = 0; t < i; t += 1) {
                const i = e.getChannelData(t),
                    o = n.getChannelData(t);
                w[t] = Object(r.a)(f, v, m, b, y, x[t], T[t], w[t], 32, i, o)
            }
        };
        const S = u.sampleRate / 2,
            C = {
                get bufferSize() {
                    return g
                },
                get channelCount() {
                    return _.channelCount
                },
                set channelCount(t) {
                    _.channelCount = t
                },
                get channelCountMode() {
                    return _.channelCountMode
                },
                set channelCountMode(t) {
                    _.channelCountMode = t
                },
                get channelInterpretation() {
                    return _.channelInterpretation
                },
                set channelInterpretation(t) {
                    _.channelInterpretation = t
                },
                get context() {
                    return _.context
                },
                get inputs() {
                    return [_]
                },
                get numberOfInputs() {
                    return _.numberOfInputs
                },
                get numberOfOutputs() {
                    return _.numberOfOutputs
                },
                addEventListener: (...t) => _.addEventListener(t[0], t[1], t[2]),
                dispatchEvent: (...t) => _.dispatchEvent(t[0]),
                getFrequencyResponse(e, n, i) {
                    if (e.length !== n.length || n.length !== i.length) throw t();
                    const r = e.length;
                    for (let t = 0; t < r; t += 1) {
                        const r = -Math.PI * (e[t] / S),
                            o = [Math.cos(r), Math.sin(r)],
                            c = s(a(m, o), a(f, o));
                        n[t] = Math.sqrt(c[0] * c[0] + c[1] * c[1]), i[t] = Math.atan2(c[1], c[0])
                    }
                },
                removeEventListener: (...t) => _.removeEventListener(t[0], t[1], t[2])
            };
        return Object(o.a)(C, _)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => (e, n) => t(e, t => t.createMediaElementSource(n.mediaElement))
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(2);
    const r = (t, e) => (n, r) => {
        if (void 0 === n.createMediaStreamDestination) throw e();
        const o = t(n, t => t.createMediaStreamDestination());
        return Object(i.a)(o, r), 1 === o.numberOfOutputs && Object.defineProperty(o, "numberOfOutputs", {
            get: () => 0
        }), o
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => (e, {
        mediaStream: n
    }) => {
        const i = n.getAudioTracks(),
            r = t(e, t => {
                const e = i.sort((t, e) => t.id < e.id ? -1 : t.id > e.id ? 1 : 0).slice(0, 1);
                return t.createMediaStreamSource(new MediaStream(e))
            });
        return Object.defineProperty(r, "mediaStream", {
            value: n
        }), r
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e, n) => (i, {
        mediaStreamTrack: r
    }) => "function" == typeof i.createMediaStreamTrackSource ? e(i, t => t.createMediaStreamTrackSource(r)) : e(i, e => {
        const i = new MediaStream([r]),
            o = e.createMediaStreamSource(i);
        if ("audio" !== r.kind) throw t();
        if (n(e)) throw new TypeError;
        return o
    })
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => null === t ? null : t.hasOwnProperty("OfflineAudioContext") ? t.OfflineAudioContext : t.hasOwnProperty("webkitOfflineAudioContext") ? t.webkitOfflineAudioContext : null
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return c
    }));
    var i = n(6),
        r = n(5),
        o = n(2),
        s = n(38),
        a = n(39);
    const c = (t, e, n, c, u, h, l) => (d, p) => {
        const f = n(d, t => t.createOscillator());
        return Object(o.a)(f, p), Object(i.a)(f, p, "detune"), Object(i.a)(f, p, "frequency"), void 0 !== p.periodicWave ? f.setPeriodicWave(p.periodicWave) : Object(r.a)(f, p, "type"), e(c, () => c(d)) || Object(s.a)(f), e(u, () => u(d)) || l(f, d), e(h, () => h(d)) || Object(a.a)(f), t(d, f), f
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return s
    }));
    var i = n(6),
        r = n(5),
        o = n(2);
    const s = (t, e) => (n, s) => {
        const a = t(n, t => t.createPanner());
        return void 0 === a.orientationX ? e(n, s) : (Object(o.a)(a, s), Object(i.a)(a, s, "orientationX"), Object(i.a)(a, s, "orientationY"), Object(i.a)(a, s, "orientationZ"), Object(i.a)(a, s, "positionX"), Object(i.a)(a, s, "positionY"), Object(i.a)(a, s, "positionZ"), Object(r.a)(a, s, "coneInnerAngle"), Object(r.a)(a, s, "coneOuterAngle"), Object(r.a)(a, s, "coneOuterGain"), Object(r.a)(a, s, "distanceModel"), Object(r.a)(a, s, "maxDistance"), Object(r.a)(a, s, "panningModel"), Object(r.a)(a, s, "refDistance"), Object(r.a)(a, s, "rolloffFactor"), a)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(2),
        r = n(13);
    const o = (t, e, n, o, s, a, c, u, h, l) => (d, {
        coneInnerAngle: p,
        coneOuterAngle: f,
        coneOuterGain: m,
        distanceModel: g,
        maxDistance: v,
        orientationX: b,
        orientationY: y,
        orientationZ: _,
        panningModel: w,
        positionX: x,
        positionY: T,
        positionZ: S,
        refDistance: C,
        rolloffFactor: k,
        ...E
    }) => {
        const O = n(d, t => t.createPanner());
        if (E.channelCount > 2) throw u();
        if ("max" === E.channelCountMode) throw u();
        Object(i.a)(O, E);
        const M = {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete"
        },
            I = o(d, {
                ...M,
                channelInterpretation: "speakers",
                numberOfInputs: 6
            }),
            A = s(d, {
                ...E,
                gain: 1
            }),
            R = s(d, {
                ...M,
                gain: 1
            }),
            P = s(d, {
                ...M,
                gain: 0
            }),
            D = s(d, {
                ...M,
                gain: 0
            }),
            j = s(d, {
                ...M,
                gain: 0
            }),
            N = s(d, {
                ...M,
                gain: 0
            }),
            L = s(d, {
                ...M,
                gain: 0
            }),
            B = a(d, 256, 6, 1),
            U = c(d, {
                ...M,
                curve: new Float32Array([1, 1]),
                oversample: "none"
            });
        let F = [b, y, _],
            V = [x, T, S];
        B.onaudioprocess = ({
            inputBuffer: t
        }) => {
            const e = [t.getChannelData(0)[0], t.getChannelData(1)[0], t.getChannelData(2)[0]];
            e.some((t, e) => t !== F[e]) && (O.setOrientation(...e), F = e);
            const n = [t.getChannelData(3)[0], t.getChannelData(4)[0], t.getChannelData(5)[0]];
            n.some((t, e) => t !== V[e]) && (O.setPosition(...n), V = n)
        }, Object.defineProperty(P.gain, "defaultValue", {
            get: () => 0
        }), Object.defineProperty(D.gain, "defaultValue", {
            get: () => 0
        }), Object.defineProperty(j.gain, "defaultValue", {
            get: () => 0
        }), Object.defineProperty(N.gain, "defaultValue", {
            get: () => 0
        }), Object.defineProperty(L.gain, "defaultValue", {
            get: () => 0
        });
        const q = {
            get bufferSize() { },
            get channelCount() {
                return O.channelCount
            },
            set channelCount(t) {
                if (t > 2) throw u();
                A.channelCount = t, O.channelCount = t
            },
            get channelCountMode() {
                return O.channelCountMode
            },
            set channelCountMode(t) {
                if ("max" === t) throw u();
                A.channelCountMode = t, O.channelCountMode = t
            },
            get channelInterpretation() {
                return O.channelInterpretation
            },
            set channelInterpretation(t) {
                A.channelInterpretation = t, O.channelInterpretation = t
            },
            get coneInnerAngle() {
                return O.coneInnerAngle
            },
            set coneInnerAngle(t) {
                O.coneInnerAngle = t
            },
            get coneOuterAngle() {
                return O.coneOuterAngle
            },
            set coneOuterAngle(t) {
                O.coneOuterAngle = t
            },
            get coneOuterGain() {
                return O.coneOuterGain
            },
            set coneOuterGain(t) {
                if (t < 0 || t > 1) throw e();
                O.coneOuterGain = t
            },
            get context() {
                return O.context
            },
            get distanceModel() {
                return O.distanceModel
            },
            set distanceModel(t) {
                O.distanceModel = t
            },
            get inputs() {
                return [A]
            },
            get maxDistance() {
                return O.maxDistance
            },
            set maxDistance(t) {
                if (t < 0) throw new RangeError;
                O.maxDistance = t
            },
            get numberOfInputs() {
                return O.numberOfInputs
            },
            get numberOfOutputs() {
                return O.numberOfOutputs
            },
            get orientationX() {
                return R.gain
            },
            get orientationY() {
                return P.gain
            },
            get orientationZ() {
                return D.gain
            },
            get panningModel() {
                return O.panningModel
            },
            set panningModel(t) {
                if (O.panningModel = t, O.panningModel !== t && "HRTF" === t) throw u()
            },
            get positionX() {
                return j.gain
            },
            get positionY() {
                return N.gain
            },
            get positionZ() {
                return L.gain
            },
            get refDistance() {
                return O.refDistance
            },
            set refDistance(t) {
                if (t < 0) throw new RangeError;
                O.refDistance = t
            },
            get rolloffFactor() {
                return O.rolloffFactor
            },
            set rolloffFactor(t) {
                if (t < 0) throw new RangeError;
                O.rolloffFactor = t
            },
            addEventListener: (...t) => A.addEventListener(t[0], t[1], t[2]),
            dispatchEvent: (...t) => A.dispatchEvent(t[0]),
            removeEventListener: (...t) => A.removeEventListener(t[0], t[1], t[2])
        };
        p !== q.coneInnerAngle && (q.coneInnerAngle = p), f !== q.coneOuterAngle && (q.coneOuterAngle = f), m !== q.coneOuterGain && (q.coneOuterGain = m), g !== q.distanceModel && (q.distanceModel = g), v !== q.maxDistance && (q.maxDistance = v), b !== q.orientationX.value && (q.orientationX.value = b), y !== q.orientationY.value && (q.orientationY.value = y), _ !== q.orientationZ.value && (q.orientationZ.value = _), w !== q.panningModel && (q.panningModel = w), x !== q.positionX.value && (q.positionX.value = x), T !== q.positionY.value && (q.positionY.value = T), S !== q.positionZ.value && (q.positionZ.value = S), C !== q.refDistance && (q.refDistance = C), k !== q.rolloffFactor && (q.rolloffFactor = k), 1 === F[0] && 0 === F[1] && 0 === F[2] || O.setOrientation(...F), 0 === V[0] && 0 === V[1] && 0 === V[2] || O.setPosition(...V);
        return l(Object(r.a)(q, O), () => {
            A.connect(O), t(A, U, 0, 0), U.connect(R).connect(I, 0, 0), U.connect(P).connect(I, 0, 1), U.connect(D).connect(I, 0, 2), U.connect(j).connect(I, 0, 3), U.connect(N).connect(I, 0, 4), U.connect(L).connect(I, 0, 5), I.connect(B).connect(d.destination)
        }, () => {
            A.disconnect(O), h(A, U, 0, 0), U.disconnect(R), R.disconnect(I), U.disconnect(P), P.disconnect(I), U.disconnect(D), D.disconnect(I), U.disconnect(j), j.disconnect(I), U.disconnect(N), N.disconnect(I), U.disconnect(L), L.disconnect(I), I.disconnect(B), B.disconnect(d.destination)
        })
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => (e, {
        disableNormalization: n,
        imag: i,
        real: r
    }) => {
        const o = t(e),
            s = new Float32Array(i),
            a = new Float32Array(r);
        return null !== o ? o.createPeriodicWave(a, s, {
            disableNormalization: n
        }) : e.createPeriodicWave(a, s, {
            disableNormalization: n
        })
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => (e, n, i, r) => t(e, t => t.createScriptProcessor(n, i, r))
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(6),
        r = n(2);
    const o = (t, e, n) => (o, s) => t(o, t => {
        const a = s.channelCountMode;
        if ("clamped-max" === a) throw n();
        if (void 0 === o.createStereoPanner) return e(o, s);
        const c = t.createStereoPanner();
        return Object(r.a)(c, s), Object(i.a)(c, s, "pan"), Object.defineProperty(c, "channelCountMode", {
            get: () => a,
            set: t => {
                if (t !== a) throw n()
            }
        }), c
    })
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(13);
    const r = (t, e, n, r, o, s) => {
        const a = new Float32Array([1, 1]),
            c = Math.PI / 2,
            u = {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete"
            },
            h = {
                ...u,
                oversample: "none"
            },
            l = (t, i, s, l, d) => {
                if (1 === i) return ((t, e, i, o) => {
                    const s = new Float32Array(16385),
                        l = new Float32Array(16385);
                    for (let t = 0; t < 16385; t += 1) {
                        const e = t / 16384 * c;
                        s[t] = Math.cos(e), l[t] = Math.sin(e)
                    }
                    const d = n(t, {
                        ...u,
                        gain: 0
                    }),
                        p = r(t, {
                            ...h,
                            curve: s
                        }),
                        f = r(t, {
                            ...h,
                            curve: a
                        }),
                        m = n(t, {
                            ...u,
                            gain: 0
                        }),
                        g = r(t, {
                            ...h,
                            curve: l
                        });
                    return {
                        connectGraph() {
                            e.connect(d), e.connect(f.inputs[0]), e.connect(m), f.connect(i), i.connect(p.inputs[0]), i.connect(g.inputs[0]), p.connect(d.gain), g.connect(m.gain), d.connect(o, 0, 0), m.connect(o, 0, 1)
                        },
                        disconnectGraph() {
                            e.disconnect(d), e.disconnect(f.inputs[0]), e.disconnect(m), f.disconnect(i), i.disconnect(p.inputs[0]), i.disconnect(g.inputs[0]), p.disconnect(d.gain), g.disconnect(m.gain), d.disconnect(o, 0, 0), m.disconnect(o, 0, 1)
                        }
                    }
                })(t, s, l, d);
                if (2 === i) return ((t, i, o, s) => {
                    const l = new Float32Array(16385),
                        d = new Float32Array(16385),
                        p = new Float32Array(16385),
                        f = new Float32Array(16385),
                        m = Math.floor(8192.5);
                    for (let t = 0; t < 16385; t += 1)
                        if (t > m) {
                            const e = (t - m) / (16384 - m) * c;
                            l[t] = Math.cos(e), d[t] = Math.sin(e), p[t] = 0, f[t] = 1
                        } else {
                            const e = t / (16384 - m) * c;
                            l[t] = 1, d[t] = 0, p[t] = Math.cos(e), f[t] = Math.sin(e)
                        } const g = e(t, {
                            channelCount: 2,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            numberOfOutputs: 2
                        }),
                            v = n(t, {
                                ...u,
                                gain: 0
                            }),
                            b = r(t, {
                                ...h,
                                curve: l
                            }),
                            y = n(t, {
                                ...u,
                                gain: 0
                            }),
                            _ = r(t, {
                                ...h,
                                curve: d
                            }),
                            w = r(t, {
                                ...h,
                                curve: a
                            }),
                            x = n(t, {
                                ...u,
                                gain: 0
                            }),
                            T = r(t, {
                                ...h,
                                curve: p
                            }),
                            S = n(t, {
                                ...u,
                                gain: 0
                            }),
                            C = r(t, {
                                ...h,
                                curve: f
                            });
                    return {
                        connectGraph() {
                            i.connect(g), i.connect(w.inputs[0]), g.connect(v, 1), g.connect(y, 1), g.connect(x, 1), g.connect(S, 1), w.connect(o), o.connect(b.inputs[0]), o.connect(_.inputs[0]), o.connect(T.inputs[0]), o.connect(C.inputs[0]), b.connect(v.gain), _.connect(y.gain), T.connect(x.gain), C.connect(S.gain), v.connect(s, 0, 0), x.connect(s, 0, 0), y.connect(s, 0, 1), S.connect(s, 0, 1)
                        },
                        disconnectGraph() {
                            i.disconnect(g), i.disconnect(w.inputs[0]), g.disconnect(v, 1), g.disconnect(y, 1), g.disconnect(x, 1), g.disconnect(S, 1), w.disconnect(o), o.disconnect(b.inputs[0]), o.disconnect(_.inputs[0]), o.disconnect(T.inputs[0]), o.disconnect(C.inputs[0]), b.disconnect(v.gain), _.disconnect(y.gain), T.disconnect(x.gain), C.disconnect(S.gain), v.disconnect(s, 0, 0), x.disconnect(s, 0, 0), y.disconnect(s, 0, 1), S.disconnect(s, 0, 1)
                        }
                    }
                })(t, s, l, d);
                throw o()
            };
        return (e, {
            channelCount: r,
            channelCountMode: a,
            pan: c,
            ...u
        }) => {
            if ("max" === a) throw o();
            const h = t(e, {
                ...u,
                channelCount: 1,
                channelCountMode: a,
                numberOfInputs: 2
            }),
                d = n(e, {
                    ...u,
                    channelCount: r,
                    channelCountMode: a,
                    gain: 1
                }),
                p = n(e, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    gain: c
                });
            let {
                connectGraph: f,
                disconnectGraph: m
            } = l(e, r, d, p, h);
            Object.defineProperty(p.gain, "defaultValue", {
                get: () => 0
            });
            const g = {
                get bufferSize() { },
                get channelCount() {
                    return d.channelCount
                },
                set channelCount(t) {
                    d.channelCount !== t && (v && m(), ({
                        connectGraph: f,
                        disconnectGraph: m
                    } = l(e, t, d, p, h)), v && f()), d.channelCount = t
                },
                get channelCountMode() {
                    return d.channelCountMode
                },
                set channelCountMode(t) {
                    if ("clamped-max" === t || "max" === t) throw o();
                    d.channelCountMode = t
                },
                get channelInterpretation() {
                    return d.channelInterpretation
                },
                set channelInterpretation(t) {
                    d.channelInterpretation = t
                },
                get context() {
                    return d.context
                },
                get inputs() {
                    return [d]
                },
                get numberOfInputs() {
                    return d.numberOfInputs
                },
                get numberOfOutputs() {
                    return d.numberOfOutputs
                },
                get pan() {
                    return p.gain
                },
                addEventListener: (...t) => d.addEventListener(t[0], t[1], t[2]),
                dispatchEvent: (...t) => d.dispatchEvent(t[0]),
                removeEventListener: (...t) => d.removeEventListener(t[0], t[1], t[2])
            };
            let v = !1;
            return s(Object(i.a)(g, h), () => {
                f(), v = !0
            }, () => {
                m(), v = !1
            })
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(5),
        r = n(2);
    const o = (t, e, n, o, s, a, c) => (u, h) => {
        const l = n(u, t => t.createWaveShaper());
        try {
            return l.curve = new Float32Array([1]), o(u, h)
        } catch { }
        Object(r.a)(l, h);
        const d = h.curve;
        if (null !== d && d.length < 2) throw e();
        Object(i.a)(l, h, "curve"), Object(i.a)(l, h, "oversample");
        let p = null,
            f = !1;
        c(l, "curve", t => () => t.call(l), e => n => (e.call(l, n), f && (s(n) && null === p ? p = t(u, l) : s(n) || null === p || (p(), p = null)), n));
        return a(l, () => {
            f = !0, s(l.curve) && (p = t(u, l))
        }, () => {
            f = !1, null !== p && (p(), p = null)
        })
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(2),
        r = n(13);
    const o = (t, e, n, o, s, a) => (c, {
        curve: u,
        oversample: h,
        ...l
    }) => {
        const d = n(c, t => t.createWaveShaper()),
            p = n(c, t => t.createWaveShaper());
        Object(i.a)(d, l), Object(i.a)(p, l);
        const f = o(c, {
            ...l,
            gain: 1
        }),
            m = o(c, {
                ...l,
                gain: -1
            }),
            g = o(c, {
                ...l,
                gain: 1
            }),
            v = o(c, {
                ...l,
                gain: -1
            });
        let b = null,
            y = !1,
            _ = null;
        const w = {
            get bufferSize() { },
            get channelCount() {
                return d.channelCount
            },
            set channelCount(t) {
                f.channelCount = t, m.channelCount = t, d.channelCount = t, g.channelCount = t, p.channelCount = t, v.channelCount = t
            },
            get channelCountMode() {
                return d.channelCountMode
            },
            set channelCountMode(t) {
                f.channelCountMode = t, m.channelCountMode = t, d.channelCountMode = t, g.channelCountMode = t, p.channelCountMode = t, v.channelCountMode = t
            },
            get channelInterpretation() {
                return d.channelInterpretation
            },
            set channelInterpretation(t) {
                f.channelInterpretation = t, m.channelInterpretation = t, d.channelInterpretation = t, g.channelInterpretation = t, p.channelInterpretation = t, v.channelInterpretation = t
            },
            get context() {
                return d.context
            },
            get curve() {
                return _
            },
            set curve(n) {
                if (null !== u && u.length < 2) throw e();
                if (null === n) d.curve = n, p.curve = n;
                else {
                    const t = n.length,
                        e = new Float32Array(t + 2 - t % 2),
                        i = new Float32Array(t + 2 - t % 2);
                    e[0] = n[0], i[0] = -n[t - 1];
                    const r = Math.ceil((t + 1) / 2),
                        o = (t + 1) / 2 - 1;
                    for (let s = 1; s < r; s += 1) {
                        const a = s / r * o,
                            c = Math.floor(a),
                            u = Math.ceil(a);
                        e[s] = c === u ? n[c] : (1 - (a - c)) * n[c] + (1 - (u - a)) * n[u], i[s] = c === u ? -n[t - 1 - c] : -(1 - (a - c)) * n[t - 1 - c] - (1 - (u - a)) * n[t - 1 - u]
                    }
                    e[r] = t % 2 == 1 ? n[r - 1] : (n[r - 2] + n[r - 1]) / 2, d.curve = e, p.curve = i
                }
                _ = n, y && (s(_) && null === b ? b = t(c, f) : null !== b && (b(), b = null))
            },
            get inputs() {
                return [f]
            },
            get numberOfInputs() {
                return d.numberOfInputs
            },
            get numberOfOutputs() {
                return d.numberOfOutputs
            },
            get oversample() {
                return d.oversample
            },
            set oversample(t) {
                d.oversample = t, p.oversample = t
            },
            addEventListener: (...t) => f.addEventListener(t[0], t[1], t[2]),
            dispatchEvent: (...t) => f.dispatchEvent(t[0]),
            removeEventListener: (...t) => f.removeEventListener(t[0], t[1], t[2])
        };
        u !== w.curve && (w.curve = u), h !== w.oversample && (w.oversample = h);
        return a(Object(r.a)(w, g), () => {
            f.connect(d).connect(g), f.connect(m).connect(p).connect(v).connect(g), y = !0, s(_) && (b = t(c, f))
        }, () => {
            f.disconnect(d), d.disconnect(g), f.disconnect(m), m.disconnect(p), p.disconnect(v), v.disconnect(g), y = !1, null !== b && (b(), b = null)
        })
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(16);
    const r = {
        numberOfChannels: 1
    },
        o = (t, e, n, o, s) => class extends t {
            constructor(t, n, s) {
                let a;
                if ("number" == typeof t && void 0 !== n && void 0 !== s) a = {
                    length: n,
                    numberOfChannels: t,
                    sampleRate: s
                };
                else {
                    if ("object" != typeof t) throw new Error("The given parameters are not valid.");
                    a = t
                }
                const {
                    length: c,
                    numberOfChannels: u,
                    sampleRate: h
                } = {
                    ...r,
                    ...a
                }, l = o(u, c, h);
                e(i.a, () => Object(i.a)(l)) || l.addEventListener("statechange", (() => {
                    let t = 0;
                    const e = n => {
                        "running" === this._state && (t > 0 ? (l.removeEventListener("statechange", e), n.stopImmediatePropagation(), this._waitForThePromiseToSettle(n)) : t += 1)
                    };
                    return e
                })()), super(l, u), this._length = c, this._nativeOfflineAudioContext = l, this._state = null
            }
            get length() {
                return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length
            }
            get state() {
                return null === this._state ? this._nativeOfflineAudioContext.state : this._state
            }
            startRendering() {
                return "running" === this._state ? Promise.reject(n()) : (this._state = "running", s(this.destination, this._nativeOfflineAudioContext).then(t => (this._state = null, t)).catch(t => {
                    throw this._state = null, t
                }))
            }
            _waitForThePromiseToSettle(t) {
                null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(t) : setTimeout(() => this._waitForThePromiseToSettle(t))
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return s
    }));
    var i = n(20),
        r = n(27);
    const o = {
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        detune: 0,
        frequency: 440,
        type: "sine"
    },
        s = (t, e, n, s, a, c, u, h) => class extends t {
            constructor(t, n = o) {
                const i = c(t),
                    r = {
                        ...o,
                        ...n
                    },
                    h = s(i, r),
                    l = u(i),
                    d = l ? a() : null,
                    p = t.sampleRate / 2;
                super(t, !1, h, d), this._detune = e(this, l, h.detune, 153600, -153600), this._frequency = e(this, l, h.frequency, p, -p), this._nativeOscillatorNode = h, this._onended = null, this._oscillatorNodeRenderer = d, null !== this._oscillatorNodeRenderer && void 0 !== r.periodicWave && (this._oscillatorNodeRenderer.periodicWave = r.periodicWave)
            }
            get detune() {
                return this._detune
            }
            get frequency() {
                return this._frequency
            }
            get onended() {
                return this._onended
            }
            set onended(t) {
                const e = "function" == typeof t ? h(this, t) : null;
                this._nativeOscillatorNode.onended = e;
                const n = this._nativeOscillatorNode.onended;
                this._onended = null !== n && n === e ? t : n
            }
            get type() {
                return this._nativeOscillatorNode.type
            }
            set type(t) {
                if (this._nativeOscillatorNode.type = t, "custom" === t) throw n();
                null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = null)
            }
            setPeriodicWave(t) {
                this._nativeOscillatorNode.setPeriodicWave(t), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = t)
            }
            start(t = 0) {
                if (this._nativeOscillatorNode.start(t), null !== this._oscillatorNodeRenderer) this._oscillatorNodeRenderer.start = t;
                else {
                    Object(i.a)(this);
                    const t = () => {
                        this._nativeOscillatorNode.removeEventListener("ended", t), setTimeout(() => Object(r.a)(this), 1e3)
                    };
                    this._nativeOscillatorNode.addEventListener("ended", t)
                }
            }
            stop(t = 0) {
                this._nativeOscillatorNode.stop(t), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.stop = t)
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(4);
    const r = (t, e, n, r, o) => () => {
        const s = new WeakMap;
        let a = null,
            c = null,
            u = null;
        return {
            set periodicWave(t) {
                a = t
            },
            set start(t) {
                c = t
            },
            set stop(t) {
                u = t
            },
            render(h, l, d) {
                const p = s.get(l);
                return void 0 !== p ? Promise.resolve(p) : (async (h, l, d) => {
                    let p = n(h);
                    const f = Object(i.a)(p, l);
                    if (!f) {
                        const t = {
                            channelCount: p.channelCount,
                            channelCountMode: p.channelCountMode,
                            channelInterpretation: p.channelInterpretation,
                            detune: p.detune.value,
                            frequency: p.frequency.value,
                            periodicWave: null === a ? void 0 : a,
                            type: p.type
                        };
                        p = e(l, t), null !== c && p.start(c), null !== u && p.stop(u)
                    }
                    return s.set(l, p), f ? (await t(l, h.detune, p.detune, d), await t(l, h.frequency, p.frequency, d)) : (await r(l, h.detune, p.detune, d), await r(l, h.frequency, p.frequency, d)), await o(h, l, p, d), p
                })(h, l, d)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(3);
    const r = {
        channelCount: 2,
        channelCountMode: "clamped-max",
        channelInterpretation: "speakers",
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e4,
        orientationX: 1,
        orientationY: 0,
        orientationZ: 0,
        panningModel: "equalpower",
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        refDistance: 1,
        rolloffFactor: 1
    },
        o = (t, e, n, o, s, a) => class extends t {
            constructor(t, c = r) {
                const u = s(t),
                    h = {
                        ...r,
                        ...c
                    },
                    l = n(u, h),
                    d = a(u);
                super(t, !1, l, d ? o() : null), this._nativePannerNode = l, this._orientationX = e(this, d, l.orientationX, i.b, i.a), this._orientationY = e(this, d, l.orientationY, i.b, i.a), this._orientationZ = e(this, d, l.orientationZ, i.b, i.a), this._positionX = e(this, d, l.positionX, i.b, i.a), this._positionY = e(this, d, l.positionY, i.b, i.a), this._positionZ = e(this, d, l.positionZ, i.b, i.a)
            }
            get coneInnerAngle() {
                return this._nativePannerNode.coneInnerAngle
            }
            set coneInnerAngle(t) {
                this._nativePannerNode.coneInnerAngle = t
            }
            get coneOuterAngle() {
                return this._nativePannerNode.coneOuterAngle
            }
            set coneOuterAngle(t) {
                this._nativePannerNode.coneOuterAngle = t
            }
            get coneOuterGain() {
                return this._nativePannerNode.coneOuterGain
            }
            set coneOuterGain(t) {
                this._nativePannerNode.coneOuterGain = t
            }
            get distanceModel() {
                return this._nativePannerNode.distanceModel
            }
            set distanceModel(t) {
                this._nativePannerNode.distanceModel = t
            }
            get maxDistance() {
                return this._nativePannerNode.maxDistance
            }
            set maxDistance(t) {
                this._nativePannerNode.maxDistance = t
            }
            get orientationX() {
                return this._orientationX
            }
            get orientationY() {
                return this._orientationY
            }
            get orientationZ() {
                return this._orientationZ
            }
            get panningModel() {
                return this._nativePannerNode.panningModel
            }
            set panningModel(t) {
                this._nativePannerNode.panningModel = t
            }
            get positionX() {
                return this._positionX
            }
            get positionY() {
                return this._positionY
            }
            get positionZ() {
                return this._positionZ
            }
            get refDistance() {
                return this._nativePannerNode.refDistance
            }
            set refDistance(t) {
                this._nativePannerNode.refDistance = t
            }
            get rolloffFactor() {
                return this._nativePannerNode.rolloffFactor
            }
            set rolloffFactor(t) {
                this._nativePannerNode.rolloffFactor = t
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(14),
        r = n(4);
    const o = (t, e, n, o, s, a, c, u, h, l) => () => {
        const d = new WeakMap;
        let p = null;
        return {
            render(f, m, g) {
                const v = d.get(m);
                return void 0 !== v ? Promise.resolve(v) : (async (f, m, g) => {
                    let v = null,
                        b = a(f);
                    const y = {
                        channelCount: b.channelCount,
                        channelCountMode: b.channelCountMode,
                        channelInterpretation: b.channelInterpretation
                    },
                        _ = {
                            ...y,
                            coneInnerAngle: b.coneInnerAngle,
                            coneOuterAngle: b.coneOuterAngle,
                            coneOuterGain: b.coneOuterGain,
                            distanceModel: b.distanceModel,
                            maxDistance: b.maxDistance,
                            panningModel: b.panningModel,
                            refDistance: b.refDistance,
                            rolloffFactor: b.rolloffFactor
                        },
                        w = Object(r.a)(b, m);
                    if ("bufferSize" in b) v = o(m, {
                        ...y,
                        gain: 1
                    });
                    else if (!w) {
                        const t = {
                            ..._,
                            orientationX: b.orientationX.value,
                            orientationY: b.orientationY.value,
                            orientationZ: b.orientationZ.value,
                            positionX: b.positionX.value,
                            positionY: b.positionY.value,
                            positionZ: b.positionZ.value
                        };
                        b = s(m, t)
                    }
                    if (d.set(m, null === v ? b : v), null !== v) {
                        if (null === p) {
                            if (null === c) throw new Error("Missing the native OfflineAudioContext constructor.");
                            const t = new c(6, f.context.length, m.sampleRate),
                                i = e(t, {
                                    channelCount: 1,
                                    channelCountMode: "explicit",
                                    channelInterpretation: "speakers",
                                    numberOfInputs: 6
                                });
                            i.connect(t.destination), p = (async () => {
                                const e = await Promise.all([f.orientationX, f.orientationY, f.orientationZ, f.positionX, f.positionY, f.positionZ].map(async (e, i) => {
                                    const r = n(t, {
                                        channelCount: 1,
                                        channelCountMode: "explicit",
                                        channelInterpretation: "discrete",
                                        offset: 0 === i ? 1 : 0
                                    });
                                    return await u(t, e, r.offset, g), r
                                }));
                                for (let t = 0; t < 6; t += 1) e[t].connect(i, 0, t), e[t].start(0);
                                return l(t)
                            })()
                        }
                        const t = await p,
                            i = o(m, {
                                ...y,
                                gain: 1
                            });
                        await h(f, m, i, g);
                        const r = [];
                        for (let e = 0; e < t.numberOfChannels; e += 1) r.push(t.getChannelData(e));
                        let a = [r[0][0], r[1][0], r[2][0]],
                            d = [r[3][0], r[4][0], r[5][0]],
                            b = o(m, {
                                ...y,
                                gain: 1
                            }),
                            w = s(m, {
                                ..._,
                                orientationX: a[0],
                                orientationY: a[1],
                                orientationZ: a[2],
                                positionX: d[0],
                                positionY: d[1],
                                positionZ: d[2]
                            });
                        i.connect(b).connect(w.inputs[0]), w.connect(v);
                        for (let e = 128; e < t.length; e += 128) {
                            const t = [r[0][e], r[1][e], r[2][e]],
                                n = [r[3][e], r[4][e], r[5][e]];
                            if (t.some((t, e) => t !== a[e]) || n.some((t, e) => t !== d[e])) {
                                a = t, d = n;
                                const r = e / m.sampleRate;
                                b.gain.setValueAtTime(0, r), b = o(m, {
                                    ...y,
                                    gain: 0
                                }), w = s(m, {
                                    ..._,
                                    orientationX: a[0],
                                    orientationY: a[1],
                                    orientationZ: a[2],
                                    positionX: d[0],
                                    positionY: d[1],
                                    positionZ: d[2]
                                }), b.gain.setValueAtTime(1, r), i.connect(b).connect(w.inputs[0]), w.connect(v)
                            }
                        }
                        return v
                    }
                    return w ? (await t(m, f.orientationX, b.orientationX, g), await t(m, f.orientationY, b.orientationY, g), await t(m, f.orientationZ, b.orientationZ, g), await t(m, f.positionX, b.positionX, g), await t(m, f.positionY, b.positionY, g), await t(m, f.positionZ, b.positionZ, g)) : (await u(m, f.orientationX, b.orientationX, g), await u(m, f.orientationY, b.orientationY, g), await u(m, f.orientationZ, b.orientationZ, g), await u(m, f.positionX, b.positionX, g), await u(m, f.positionY, b.positionY, g), await u(m, f.positionZ, b.positionZ, g)), Object(i.a)(b) ? await h(f, m, b.inputs[0], g) : await h(f, m, b, g), b
                })(f, m, g)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    const i = {
        disableNormalization: !1
    },
        r = (t, e, n) => class r {
            constructor(r, o) {
                const s = e(r),
                    a = {
                        ...i,
                        ...o
                    },
                    c = t(s, a);
                return n.add(c), c
            }
            static [Symbol.hasInstance](t) {
                return null !== t && "object" == typeof t && Object.getPrototypeOf(t) === r.prototype || n.has(t)
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => (n, i, r, o) => (t(i).replay(r), e(i, n, r, o))
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e, n) => async (i, r, o, s) => {
        const a = t(i),
            c = [...s, i];
        await Promise.all(a.activeInputs.map((t, s) => Array.from(t).filter(([t]) => !c.includes(t)).map(async ([t, a]) => {
            const u = e(t),
                h = await u.render(t, r, c),
                l = i.context.destination;
            n(t) || i === l && n(i) || h.connect(o, a, s)
        })).reduce((t, e) => [...t, ...e], []))
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e, n) => async (i, r, o, s) => {
        const a = e(i);
        await Promise.all(Array.from(a.activeInputs).map(async ([e, i]) => {
            const a = t(e),
                c = await a.render(e, r, s);
            n(e) || c.connect(o, i)
        }))
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(16);
    const r = (t, e, n, r) => o => t(i.a, () => Object(i.a)(o)) ? Promise.resolve(t(r, r)).then(t => {
        if (!t) {
            const t = n(o, 512, 0, 1);
            o.oncomplete = () => {
                t.onaudioprocess = null, t.disconnect()
            }, t.onaudioprocess = () => o.currentTime, t.connect(o.destination)
        }
        return o.startRendering()
    }) : new Promise(t => {
        const n = e(o, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0
        });
        o.oncomplete = e => {
            n.disconnect(), t(e.renderedBuffer)
        }, n.connect(o.destination), o.startRendering()
    })
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(37);
    const r = (t, e, n, r, o, s, a, c) => {
        const u = [];
        return (h, l) => n(h).render(h, l, u).then(() => Promise.all(Array.from(r(l)).map(t => n(t).render(t, l, u)))).then(() => o(l)).then(n => ("function" != typeof n.copyFromChannel ? (a(n), Object(i.a)(n)) : e(s, () => s(n)) || c(n), t.add(n), n))
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    const i = {
        channelCount: 2,
        channelCountMode: "explicit",
        channelInterpretation: "speakers",
        pan: 0
    },
        r = (t, e, n, r, o, s) => class extends t {
            constructor(t, a = i) {
                const c = o(t),
                    u = {
                        ...i,
                        ...a
                    },
                    h = n(c, u),
                    l = s(c);
                super(t, !1, h, l ? r() : null), this._pan = e(this, l, h.pan, 1, -1)
            }
            get pan() {
                return this._pan
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(14),
        r = n(4);
    const o = (t, e, n, o, s) => () => {
        const a = new WeakMap;
        return {
            render(c, u, h) {
                const l = a.get(u);
                return void 0 !== l ? Promise.resolve(l) : (async (c, u, h) => {
                    let l = n(c);
                    const d = Object(r.a)(l, u);
                    if (!d) {
                        const t = {
                            channelCount: l.channelCount,
                            channelCountMode: l.channelCountMode,
                            channelInterpretation: l.channelInterpretation,
                            pan: l.pan.value
                        };
                        l = e(u, t)
                    }
                    return a.set(u, l), d ? await t(u, c.pan, l.pan, h) : await o(u, c.pan, l.pan, h), Object(i.a)(l) ? await s(c, u, l.inputs[0], h) : await s(c, u, l, h), l
                })(c, u, h)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => () => {
        if (null === t) return !1;
        try {
            new t({
                length: 1,
                sampleRate: 44100
            })
        } catch {
            return !1
        }
        return !0
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => () => {
        if (null === t) return !1;
        const e = new t(1, 1, 44100).createBuffer(1, 1, 44100);
        if (void 0 === e.copyToChannel) return !0;
        const n = new Float32Array(2);
        try {
            e.copyFromChannel(n, 0, 0)
        } catch {
            return !1
        }
        return !0
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => e => {
        const n = t(e, t => t.createBufferSource());
        n.start();
        try {
            n.start()
        } catch {
            return !0
        }
        return !1
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => () => {
        if (null === t) return Promise.resolve(!1);
        const e = new t(1, 1, 44100),
            n = e.createBuffer(1, 1, e.sampleRate),
            i = e.createBufferSource();
        return n.getChannelData(0)[0] = 1, i.buffer = n, i.start(0, 0, 0), i.connect(e.destination), new Promise(t => {
            e.oncomplete = ({
                renderedBuffer: e
            }) => {
                t(0 === e.getChannelData(0)[0])
            }, e.startRendering()
        })
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => e => {
        const n = t(e, t => t.createBufferSource()),
            i = e.createBuffer(1, 1, 44100);
        n.buffer = i;
        try {
            n.start(0, 1)
        } catch {
            return !1
        }
        return !0
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => e => {
        const n = t(e, t => t.createBufferSource());
        n.start();
        try {
            n.stop()
        } catch {
            return !1
        }
        return !0
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => () => {
        if (null === t) return !1;
        if (void 0 !== t.prototype && void 0 !== t.prototype.close) return !0;
        const e = new t,
            n = void 0 !== e.close;
        try {
            e.close()
        } catch { }
        return n
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => () => {
        if (null === t) return Promise.resolve(!1);
        const e = new t(1, 1, 44100);
        return new Promise(t => {
            let n = !0;
            const i = i => {
                n && (n = !1, e.startRendering(), t(i instanceof TypeError))
            };
            let r;
            try {
                r = e.decodeAudioData(null, () => { }, i)
            } catch (t) {
                i(t)
            }
            void 0 !== r && r.catch(i)
        })
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => () => {
        if (null === t) return !1;
        let e;
        try {
            e = new t({
                latencyHint: "balanced"
            })
        } catch {
            return !1
        }
        return e.close(), !0
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => () => {
        if (null === t) return !1;
        const e = new t(1, 1, 44100).createGain(),
            n = e.connect(e) === e;
        return e.disconnect(e), n
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => e => {
        const n = t(e, t => t.createOscillator());
        try {
            n.start(-1)
        } catch (t) {
            return t instanceof RangeError
        }
        return !1
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => e => {
        const n = e.createBuffer(1, 1, 44100),
            i = t(e, t => t.createBufferSource());
        i.buffer = n, i.start(), i.stop();
        try {
            return i.stop(), !0
        } catch {
            return !1
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => e => {
        const n = t(e, t => t.createOscillator());
        try {
            n.stop(-1)
        } catch (t) {
            return t instanceof RangeError
        }
        return !1
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => async () => {
        if (null === t) return !0;
        if (null === e) return !1;
        const n = new Blob(['class A extends AudioWorkletProcessor{process(){this.port.postMessage(0)}}registerProcessor("a",A)'], {
            type: "application/javascript; charset=utf-8"
        }),
            i = new e(1, 128, 3200),
            r = URL.createObjectURL(n);
        let o = !1;
        try {
            await i.audioWorklet.addModule(r);
            const e = i.createGain(),
                n = new t(i, "a", {
                    numberOfOutputs: 0
                });
            n.port.onmessage = () => o = !0, e.connect(n), await i.startRendering()
        } catch { } finally {
            URL.revokeObjectURL(r)
        }
        return o
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => () => {
        if (null === e) return !1;
        const n = new e(1, 1, 44100),
            i = t(n, t => t.createChannelMerger());
        if ("max" === i.channelCountMode) return !0;
        try {
            i.channelCount = 2
        } catch {
            return !0
        }
        return !1
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => () => {
        if (null === e) return !1;
        const n = new e(1, 1, 44100);
        return void 0 === n.createConstantSource || t(n, t => t.createConstantSource()).offset.maxValue !== Number.POSITIVE_INFINITY
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => () => {
        if (null === t) return !1;
        const e = new t(1, 1, 44100),
            n = e.createConvolver();
        n.buffer = e.createBuffer(1, 1, e.sampleRate);
        try {
            n.buffer = e.createBuffer(1, 1, e.sampleRate)
        } catch {
            return !1
        }
        return !0
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => () => null !== t && t.hasOwnProperty("isSecureContext")
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => () => {
        if (null === t) return !1;
        const e = new t;
        try {
            return e.createMediaStreamSource(new MediaStream), !1
        } catch (t) {
            return !0
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => () => {
        if (null === e) return Promise.resolve(!1);
        const n = new e(1, 1, 44100),
            i = t(n, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                gain: 0
            });
        return new Promise(t => {
            n.oncomplete = () => {
                i.disconnect(), t(0 !== n.currentTime)
            }, n.startRendering()
        })
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => () => {
        if (null === t) return Promise.resolve(!1);
        const e = new t(1, 1, 44100);
        if (void 0 === e.createStereoPanner) return Promise.resolve(!0);
        if (void 0 === e.createConstantSource) return Promise.resolve(!0);
        const n = e.createConstantSource(),
            i = e.createStereoPanner();
        return n.channelCount = 1, n.offset.value = 1, i.channelCount = 1, n.start(), n.connect(i).connect(e.destination), e.startRendering().then(t => 1 !== t.getChannelData(0)[0])
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    const i = {
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        curve: null,
        oversample: "none"
    },
        r = (t, e, n, r, o, s) => class extends t {
            constructor(t, e = i) {
                const a = o(t),
                    c = {
                        ...i,
                        ...e
                    },
                    u = n(a, c);
                super(t, !0, u, s(a) ? r() : null), this._isCurveNullified = !1, this._nativeWaveShaperNode = u
            }
            get curve() {
                return this._isCurveNullified ? null : this._nativeWaveShaperNode.curve
            }
            set curve(t) {
                if (null === t) this._isCurveNullified = !0, this._nativeWaveShaperNode.curve = new Float32Array([0, 0]);
                else {
                    if (t.length < 2) throw e();
                    this._isCurveNullified = !1, this._nativeWaveShaperNode.curve = t
                }
            }
            get oversample() {
                return this._nativeWaveShaperNode.oversample
            }
            set oversample(t) {
                this._nativeWaveShaperNode.oversample = t
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(14),
        r = n(4);
    const o = (t, e, n) => () => {
        const o = new WeakMap;
        return {
            render(s, a, c) {
                const u = o.get(a);
                return void 0 !== u ? Promise.resolve(u) : (async (s, a, c) => {
                    let u = e(s);
                    if (!Object(r.a)(u, a)) {
                        const e = {
                            channelCount: u.channelCount,
                            channelCountMode: u.channelCountMode,
                            channelInterpretation: u.channelInterpretation,
                            curve: u.curve,
                            oversample: u.oversample
                        };
                        u = t(a, e)
                    }
                    return o.set(a, u), Object(i.a)(u) ? await n(s, a, u.inputs[0], c) : await n(s, a, u, c), u
                })(s, a, c)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = () => "undefined" == typeof window ? null : window
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e) => n => {
        n.copyFromChannel = (i, r, o = 0) => {
            const s = t(o),
                a = t(r);
            if (a >= n.numberOfChannels) throw e();
            const c = n.length,
                u = n.getChannelData(a),
                h = i.length;
            for (let t = s < 0 ? -s : 0; t + s < c && t < h; t += 1) i[t] = u[t + s]
        }, n.copyToChannel = (i, r, o = 0) => {
            const s = t(o),
                a = t(r);
            if (a >= n.numberOfChannels) throw e();
            const c = n.length,
                u = n.getChannelData(a),
                h = i.length;
            for (let t = s < 0 ? -s : 0; t + s < c && t < h; t += 1) u[t + s] = i[t]
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => e => {
        var n, i;
        e.copyFromChannel = (n = e.copyFromChannel, (i, r, o = 0) => {
            const s = t(o),
                a = t(r);
            if (s < e.length) return n.call(e, i, a, s)
        }), e.copyToChannel = (i = e.copyToChannel, (n, r, o = 0) => {
            const s = t(o),
                a = t(r);
            if (s < e.length) return i.call(e, n, a, s)
        })
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => (e, n) => {
        const i = n.createBuffer(1, 1, n.sampleRate);
        null === e.buffer && (e.buffer = i), t(e, "buffer", t => () => {
            const n = t.call(e);
            return n === i ? null : n
        }, t => n => t.call(e, null === n ? i : n))
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(13);
    const r = t => (e, n) => {
        const r = t(n, t => t.createGain());
        e.connect(r);
        const o = (s = e.disconnect, () => {
            s.call(e, r), e.removeEventListener("ended", o)
        });
        var s;
        e.addEventListener("ended", o), Object(i.a)(e, r), e.stop = (t => {
            let n = !1;
            return (i = 0) => {
                if (n) try {
                    t.call(e, i)
                } catch {
                    r.gain.setValueAtTime(0, i)
                } else t.call(e, i), n = !0
            }
        })(e.stop)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e, n) => (i, r) => {
        r.channelCount = 1, r.channelCountMode = "explicit", Object.defineProperty(r, "channelCount", {
            get: () => 1,
            set: () => {
                throw t()
            }
        }), Object.defineProperty(r, "channelCountMode", {
            get: () => "explicit",
            set: () => {
                throw t()
            }
        });
        const o = e(i, t => t.createBufferSource());
        n(r, () => {
            const t = r.numberOfInputs;
            for (let e = 0; e < t; e += 1) o.connect(r, 0, e)
        }, () => o.disconnect(r))
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = () => new Promise(t => {
        const e = new ArrayBuffer(0),
            {
                port1: n,
                port2: i
            } = new MessageChannel;
        n.onmessage = ({
            data: e
        }) => t(null !== e), i.postMessage(e, [e])
    })
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = t => {
        var e;
        t.start = (e = t.start, (n = 0, i = 0, r) => {
            const o = t.buffer,
                s = null === o ? i : Math.min(o.duration, i);
            null !== o && s > o.duration - .5 / t.context.sampleRate ? e.call(t, n, 0, 0) : e.call(t, n, s, r)
        })
    }
}, function (t, e) {
    function n(t, e, n) {
        for (var i = 0; i < n.length; i++) t.setUint8(e + i, n.charCodeAt(i))
    }
    t.exports = function (t, e) {
        e = e || {};
        var i, r = t.numberOfChannels,
            o = t.sampleRate,
            s = e.float32 ? 3 : 1,
            a = 3 === s ? 32 : 16;
        i = 2 === r ? function (t, e) {
            var n = t.length + e.length,
                i = new Float32Array(n),
                r = 0,
                o = 0;
            for (; r < n;) i[r++] = t[o], i[r++] = e[o], o++;
            return i
        }(t.getChannelData(0), t.getChannelData(1)) : t.getChannelData(0);
        return function (t, e, i, r, o) {
            var s = o / 8,
                a = r * s,
                c = new ArrayBuffer(44 + t.length * s),
                u = new DataView(c);
            n(u, 0, "RIFF"), u.setUint32(4, 36 + t.length * s, !0), n(u, 8, "WAVE"), n(u, 12, "fmt "), u.setUint32(16, 16, !0), u.setUint16(20, e, !0), u.setUint16(22, r, !0), u.setUint32(24, i, !0), u.setUint32(28, i * a, !0), u.setUint16(32, a, !0), u.setUint16(34, o, !0), n(u, 36, "data"), u.setUint32(40, t.length * s, !0), 1 === e ? function (t, e, n) {
                for (var i = 0; i < n.length; i++, e += 2) {
                    var r = Math.max(-1, Math.min(1, n[i]));
                    t.setInt16(e, r < 0 ? 32768 * r : 32767 * r, !0)
                }
            }(u, 44, t) : function (t, e, n) {
                for (var i = 0; i < n.length; i++, e += 4) t.setFloat32(e, n[i], !0)
            }(u, 44, t);
            return c
        }(i, s, o, r, a)
    }
}, function (t, e, n) {
    t.exports = n(727)
}, function (t, e, n) {
    var i;
    ! function () {
        "use strict";
        var r = .5 * (Math.sqrt(3) - 1),
            o = (3 - Math.sqrt(3)) / 6,
            s = 1 / 6,
            a = (Math.sqrt(5) - 1) / 4,
            c = (5 - Math.sqrt(5)) / 20;

        function u(t) {
            var e;
            e = "function" == typeof t ? t : t ? function () {
                var t = 0,
                    e = 0,
                    n = 0,
                    i = 1,
                    r = l();
                t = r(" "), e = r(" "), n = r(" ");
                for (var o = 0; o < arguments.length; o++)(t -= r(arguments[o])) < 0 && (t += 1), (e -= r(arguments[o])) < 0 && (e += 1), (n -= r(arguments[o])) < 0 && (n += 1);
                return r = null,
                    function () {
                        var r = 2091639 * t + 2.3283064365386963e-10 * i;
                        return t = e, e = n, n = r - (i = 0 | r)
                    }
            }(t) : Math.random, this.p = h(e), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
            for (var n = 0; n < 512; n++) this.perm[n] = this.p[255 & n], this.permMod12[n] = this.perm[n] % 12
        }

        function h(t) {
            var e, n = new Uint8Array(256);
            for (e = 0; e < 256; e++) n[e] = e;
            for (e = 0; e < 255; e++) {
                var i = e + ~~(t() * (256 - e)),
                    r = n[e];
                n[e] = n[i], n[i] = r
            }
            return n
        }

        function l() {
            var t = 4022871197;
            return function (e) {
                e = e.toString();
                for (var n = 0; n < e.length; n++) {
                    var i = .02519603282416938 * (t += e.charCodeAt(n));
                    i -= t = i >>> 0, t = (i *= t) >>> 0, t += 4294967296 * (i -= t)
                }
                return 2.3283064365386963e-10 * (t >>> 0)
            }
        }
        u.prototype = {
            grad3: new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
            grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),
            noise2D: function (t, e) {
                var n, i, s = this.permMod12,
                    a = this.perm,
                    c = this.grad3,
                    u = 0,
                    h = 0,
                    l = 0,
                    d = (t + e) * r,
                    p = Math.floor(t + d),
                    f = Math.floor(e + d),
                    m = (p + f) * o,
                    g = t - (p - m),
                    v = e - (f - m);
                g > v ? (n = 1, i = 0) : (n = 0, i = 1);
                var b = g - n + o,
                    y = v - i + o,
                    _ = g - 1 + 2 * o,
                    w = v - 1 + 2 * o,
                    x = 255 & p,
                    T = 255 & f,
                    S = .5 - g * g - v * v;
                if (S >= 0) {
                    var C = 3 * s[x + a[T]];
                    u = (S *= S) * S * (c[C] * g + c[C + 1] * v)
                }
                var k = .5 - b * b - y * y;
                if (k >= 0) {
                    var E = 3 * s[x + n + a[T + i]];
                    h = (k *= k) * k * (c[E] * b + c[E + 1] * y)
                }
                var O = .5 - _ * _ - w * w;
                if (O >= 0) {
                    var M = 3 * s[x + 1 + a[T + 1]];
                    l = (O *= O) * O * (c[M] * _ + c[M + 1] * w)
                }
                return 70 * (u + h + l)
            },
            noise3D: function (t, e, n) {
                var i, r, o, a, c, u, h, l, d, p, f = this.permMod12,
                    m = this.perm,
                    g = this.grad3,
                    v = (t + e + n) * (1 / 3),
                    b = Math.floor(t + v),
                    y = Math.floor(e + v),
                    _ = Math.floor(n + v),
                    w = (b + y + _) * s,
                    x = t - (b - w),
                    T = e - (y - w),
                    S = n - (_ - w);
                x >= T ? T >= S ? (c = 1, u = 0, h = 0, l = 1, d = 1, p = 0) : x >= S ? (c = 1, u = 0, h = 0, l = 1, d = 0, p = 1) : (c = 0, u = 0, h = 1, l = 1, d = 0, p = 1) : T < S ? (c = 0, u = 0, h = 1, l = 0, d = 1, p = 1) : x < S ? (c = 0, u = 1, h = 0, l = 0, d = 1, p = 1) : (c = 0, u = 1, h = 0, l = 1, d = 1, p = 0);
                var C = x - c + s,
                    k = T - u + s,
                    E = S - h + s,
                    O = x - l + 2 * s,
                    M = T - d + 2 * s,
                    I = S - p + 2 * s,
                    A = x - 1 + .5,
                    R = T - 1 + .5,
                    P = S - 1 + .5,
                    D = 255 & b,
                    j = 255 & y,
                    N = 255 & _,
                    L = .6 - x * x - T * T - S * S;
                if (L < 0) i = 0;
                else {
                    var B = 3 * f[D + m[j + m[N]]];
                    i = (L *= L) * L * (g[B] * x + g[B + 1] * T + g[B + 2] * S)
                }
                var U = .6 - C * C - k * k - E * E;
                if (U < 0) r = 0;
                else {
                    var F = 3 * f[D + c + m[j + u + m[N + h]]];
                    r = (U *= U) * U * (g[F] * C + g[F + 1] * k + g[F + 2] * E)
                }
                var V = .6 - O * O - M * M - I * I;
                if (V < 0) o = 0;
                else {
                    var q = 3 * f[D + l + m[j + d + m[N + p]]];
                    o = (V *= V) * V * (g[q] * O + g[q + 1] * M + g[q + 2] * I)
                }
                var z = .6 - A * A - R * R - P * P;
                if (z < 0) a = 0;
                else {
                    var G = 3 * f[D + 1 + m[j + 1 + m[N + 1]]];
                    a = (z *= z) * z * (g[G] * A + g[G + 1] * R + g[G + 2] * P)
                }
                return 32 * (i + r + o + a)
            },
            noise4D: function (t, e, n, i) {
                var r, o, s, u, h, l, d, p, f, m, g, v, b, y, _, w, x, T = this.perm,
                    S = this.grad4,
                    C = (t + e + n + i) * a,
                    k = Math.floor(t + C),
                    E = Math.floor(e + C),
                    O = Math.floor(n + C),
                    M = Math.floor(i + C),
                    I = (k + E + O + M) * c,
                    A = t - (k - I),
                    R = e - (E - I),
                    P = n - (O - I),
                    D = i - (M - I),
                    j = 0,
                    N = 0,
                    L = 0,
                    B = 0;
                A > R ? j++ : N++, A > P ? j++ : L++, A > D ? j++ : B++, R > P ? N++ : L++, R > D ? N++ : B++, P > D ? L++ : B++;
                var U = A - (l = j >= 3 ? 1 : 0) + c,
                    F = R - (d = N >= 3 ? 1 : 0) + c,
                    V = P - (p = L >= 3 ? 1 : 0) + c,
                    q = D - (f = B >= 3 ? 1 : 0) + c,
                    z = A - (m = j >= 2 ? 1 : 0) + 2 * c,
                    G = R - (g = N >= 2 ? 1 : 0) + 2 * c,
                    H = P - (v = L >= 2 ? 1 : 0) + 2 * c,
                    W = D - (b = B >= 2 ? 1 : 0) + 2 * c,
                    Y = A - (y = j >= 1 ? 1 : 0) + 3 * c,
                    X = R - (_ = N >= 1 ? 1 : 0) + 3 * c,
                    Z = P - (w = L >= 1 ? 1 : 0) + 3 * c,
                    J = D - (x = B >= 1 ? 1 : 0) + 3 * c,
                    $ = A - 1 + 4 * c,
                    Q = R - 1 + 4 * c,
                    K = P - 1 + 4 * c,
                    tt = D - 1 + 4 * c,
                    et = 255 & k,
                    nt = 255 & E,
                    it = 255 & O,
                    rt = 255 & M,
                    ot = .6 - A * A - R * R - P * P - D * D;
                if (ot < 0) r = 0;
                else {
                    var st = T[et + T[nt + T[it + T[rt]]]] % 32 * 4;
                    r = (ot *= ot) * ot * (S[st] * A + S[st + 1] * R + S[st + 2] * P + S[st + 3] * D)
                }
                var at = .6 - U * U - F * F - V * V - q * q;
                if (at < 0) o = 0;
                else {
                    var ct = T[et + l + T[nt + d + T[it + p + T[rt + f]]]] % 32 * 4;
                    o = (at *= at) * at * (S[ct] * U + S[ct + 1] * F + S[ct + 2] * V + S[ct + 3] * q)
                }
                var ut = .6 - z * z - G * G - H * H - W * W;
                if (ut < 0) s = 0;
                else {
                    var ht = T[et + m + T[nt + g + T[it + v + T[rt + b]]]] % 32 * 4;
                    s = (ut *= ut) * ut * (S[ht] * z + S[ht + 1] * G + S[ht + 2] * H + S[ht + 3] * W)
                }
                var lt = .6 - Y * Y - X * X - Z * Z - J * J;
                if (lt < 0) u = 0;
                else {
                    var dt = T[et + y + T[nt + _ + T[it + w + T[rt + x]]]] % 32 * 4;
                    u = (lt *= lt) * lt * (S[dt] * Y + S[dt + 1] * X + S[dt + 2] * Z + S[dt + 3] * J)
                }
                var pt = .6 - $ * $ - Q * Q - K * K - tt * tt;
                if (pt < 0) h = 0;
                else {
                    var ft = T[et + 1 + T[nt + 1 + T[it + 1 + T[rt + 1]]]] % 32 * 4;
                    h = (pt *= pt) * pt * (S[ft] * $ + S[ft + 1] * Q + S[ft + 2] * K + S[ft + 3] * tt)
                }
                return 27 * (r + o + s + u + h)
            }
        }, u._buildPermutationTable = h, void 0 === (i = function () {
            return u
        }.call(e, n, e, t)) || (t.exports = i), e.SimplexNoise = u, t.exports = u
    }()
}, function (t, e) {
    t.exports = '<button class=button id=cancel><img src=/Song-Maker/client/images/icon-x.svg></button> <div class="expandable modal-content" id=settings-modal> <div class=expandable-inner> <div class="setting-column setting-column--left"> <div class=setting-group> <label for=bars>Length</label> <div class=quantity> <input id=bars type=number name=bars value=80 min=1 max=80 data-label=bars> </div> </div> <div class=setting-group> <label for=beats>Beats per bar</label> <div class=quantity> <input id=beats type=number name=beats value=2 min=2 max=7> </div> </div> <div class=setting-group> <label for=subdivision>Split beats into</label> <div class=quantity> <input id=subdivision type=number name=subdivision value=2 min=1 max=4> </div> </div> </div> <div class="setting-column setting-column--right"> <div class=setting-group> <label for=scale>Scale</label> <span class=select-wrap> <select id=scale name=scale> <option value=major>Major</option> <option value=pentatonic>Pentatonic</option> <option value=chromatic>Chromatic</option> </select> </span> </div> <div class=setting-group> <label for=rootPitch>Start on</label> <span class=select-wrap> <select id=rootPitch name=rootPitch> <option value=0 selected=selected>C</option> <option value=1>Câ™¯ / Dâ™­</option> <option value=2>D</option> <option value=3>Dâ™¯ / Eâ™­</option> <option value=4>E</option> <option value=5>F</option> <option value=6>Fâ™¯ / Gâ™­</option> <option value=7>G</option> <option value=8>Gâ™¯ / Aâ™­</option> <option value=9>A</option> <option value=10>Aâ™¯ / Bâ™­</option> <option value=11>B</option> </select> </span> <span class=select-wrap> <select name=rootOctave> <option value=3>Low</option> <option value=4 selected=selected>Middle</option> <option value=5>High</option> </select> </span> </div> <div class=setting-group> <label for=octaves>Range</label> <div class=quantity> <input id=octaves type=number name=octaves value=2 min=4 max=4 data-label=octave> </div> </div> </div> <button class="button big-button" id=submit> <svg viewBox="0 0 35 26" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g id=Icons-/-Check-White transform="translate(-3, -7)" fill=#FFFFFF> <path d="M13.7827492,27.7056923 L6.19504261,20.1179857 C5.80549373,19.7284368 5.174255,19.7273215 4.78333206,20.1154915 L3.37877948,21.5101529 C2.98687769,21.8992948 2.98464037,22.5324558 3.37378229,22.9243576 C3.37461221,22.9251934 3.37544361,22.9260277 3.37627647,22.9268606 L13.0756424,32.6262266 C13.4661667,33.0167508 14.0993317,33.0167508 14.489856,32.6262266 L36.9384314,10.1776512 C37.3289557,9.78712686 37.3289557,9.15396188 36.9384314,8.76343759 L35.5484331,7.37410754 C35.1580393,6.98371368 34.5251319,6.9835642 34.1345537,7.37377361 L13.7827492,27.7056923 Z"></path> </g> </svg> </button> </div> </div> '
}, function (t, e) {
    t.exports = '<button class=button id=cancel><img src=/Song-Maker/client/images/icon-x.svg></button> <div class="expandable modal-content" id=about-modal> <div id=about-top> <div class=expandable-inner> <h3>Chrome Music Lab: <strong>Song Maker</strong></h3> <p>To make a song, add notes by clicking the grid. Then, share your song with a link. You can also use a MIDI keyboard or sing a note into your mic.</p> <p>You can also use your computer keys. Press the arrow keys to move, enter and backspace to add and remove notes, and spacebar to play.</p> <p>If youâ€™d like to share something with us, post it with #chromemusiclab or drop us a line at <a href=mailto:chromemusiclab-support@google.com>chromemusiclab-support@google.com</a>.</p> </div> </div> <div class=""> <div class="expandable-inner footnote"> Built by Google Creative Lab, Use All Five, and Yotam Mann. <div class=chrome-experiment> </div> </div> </div> </div> '
}, function (t, e) {
    t.exports = "<div id=back-modal class=modal-content> <h5>Go back?</h5> <p>Your song will not be saved. </p> <div class=links><a id=back-modal-cancel>Cancel</a><a id=back-modal-confirm>Yes, Iâ€™m sure</a></div> </div> "
}, function (t, e) {
    t.exports = ' <div class=button id=cancel><img src=/Song-Maker/client/images/icon-x.svg></div> <div class=saved-circle> <svg class=circular-loader viewBox="0 0 50 50"> <circle class=loader-path cx=25 cy=25 r=20 fill=none stroke-width=3 /> </svg> </div> <div class="expandable modal-content" id=share-modal> <div id=share-saved> <div class=expandable-inner> <span class=saved-text>Your song is saved at this link:</span> <input class=short-url type=text disabled=disabled readonly=readonly /> <a class=button id=copy-link>Copy Link</a> <div class=medium-button id=share-facebook></div> <div class=medium-button id=share-twitter></div> <div class=share-footer> <div class="button switch-state" id=toggle-share-embed>Embed Code <span class=caret></span></div> <div id=download-midi class=button>Download Midi</div> <div id=download-wav class=button>Download Wav</div> </div> <div id=share-embed> <textarea readonly=readonly class=iframe-code><iframe width=560 height=315 src=https://musiclab.chromeexperiments.com/song/ frameborder=0 allowfullscreen></iframe></textarea> <div class=share-center> <a id=copy-iframe>Copy code </a> to embed your song on a web page. </div> </div> </div> </div> </div> '
}, function (t, e) {
    t.exports = "<div class=expandable id=pitch-modal> <img src=/Song-Maker/client/images/animated-mic.svg> <h2>Sing into your mic to add notes.</h2> </div> "
}, function (t, e) {
    t.exports = "<div class=expandable id=midi-modal> <img src=/Song-Maker/client/images/animated-midi.svg> <h2>Use your MIDI keyboard to add notes.</h2> </div> "
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return B
    }));
    var i = n(0),
        r = n(32),
        o = n(28);
    const s = t => "port" in t;
    var a = n(41),
        c = n(26);
    const u = (t, e) => {
        if (!Object(c.a)(t).delete(e)) throw new Error("Missing the expected event listener.")
    };
    var h = n(42),
        l = n(9),
        d = n(34),
        p = n(7),
        f = n(35),
        m = n(10),
        g = n(19),
        v = n(29),
        b = n(22);
    const y = t => !i.a.has(t),
        _ = (t, e) => {
            const n = Array.from(t).filter(e);
            if (n.length > 1) throw Error("More than one element was found.");
            if (0 === n.length) throw Error("No element was found.");
            const [i] = n;
            return t.delete(i), i
        };
    var w = n(20),
        x = n(27);
    const T = (t, e) => {
        !s(t) && e.every(t => 0 === t.size) && Object(x.a)(t)
    },
        S = t => new Promise(e => {
            const n = t.createScriptProcessor(256, 1, 1),
                i = t.createGain(),
                r = t.createBuffer(1, 2, 44100),
                o = r.getChannelData(0);
            o[0] = 1, o[1] = 1;
            const s = t.createBufferSource();
            s.buffer = r, s.loop = !0, s.connect(n).connect(t.destination), s.connect(i), s.disconnect(i), n.onaudioprocess = i => {
                const r = i.inputBuffer.getChannelData(0);
                Array.prototype.some.call(r, t => 1 === t) ? e(!0) : e(!1), s.stop(), n.onaudioprocess = null, s.disconnect(n), n.disconnect(t.destination)
            }, s.start()
        }),
        C = (t, e) => {
            const n = new Map;
            for (const e of t)
                for (const t of e) {
                    const e = n.get(t);
                    n.set(t, void 0 === e ? 1 : e + 1)
                }
            n.forEach((t, n) => e(n, t))
        };
    var k = n(33);
    const E = (t, e, [n, i, r], o) => {
        Object(g.a)(t[i], [e, n, r], t => t[0] === e && t[1] === n, o)
    },
        O = (t, e, [n, i], r) => {
            Object(g.a)(t, [e, n, i], t => t[0] === e && t[1] === n, r)
        },
        M = (t, e, [n, i, r], o) => {
            const s = t.get(n);
            void 0 === s ? t.set(n, new Set([
                [i, e, r]
            ])) : Object(g.a)(s, [i, e, r], t => t[0] === i && t[1] === e, o)
        },
        I = (t, [e, n, i], r) => {
            const o = t.get(e);
            void 0 === o ? t.set(e, new Set([
                [n, i]
            ])) : Object(g.a)(o, [n, i], t => t[0] === n, r)
        },
        A = (t, e, n, i) => {
            const r = Object(m.a)(t, e),
                o = _(r, t => t[0] === n && t[1] === i);
            return 0 === r.size && t.delete(e), o
        },
        R = (t, e, n) => {
            const i = Object(m.a)(t, e),
                r = _(i, t => t[0] === n);
            return 0 === i.size && t.delete(e), r
        },
        P = (t, e, n, i) => {
            const {
                activeInputs: r,
                passiveInputs: o
            } = Object(l.a)(e), {
                outputs: s
            } = Object(l.a)(t), u = Object(c.a)(t), d = s => {
                const c = Object(p.a)(e),
                    u = Object(p.a)(t);
                if (s) {
                    const s = A(o, t, n, i);
                    E(r, t, s, !1), Object(b.a)(t) || Object(a.a)(u, c, n, i), y(e) && Object(w.a)(e)
                } else {
                    const s = ((t, e, n, i) => _(t[i], t => t[0] === e && t[1] === n))(r, t, n, i);
                    M(o, i, s, !1), Object(b.a)(t) || Object(h.a)(u, c, n, i), Object(v.a)(e) && T(e, r)
                }
            };
            return !!Object(g.a)(s, [e, n, i], t => t[0] === e && t[1] === n && t[2] === i, !0) && (u.add(d), Object(v.a)(t) ? E(r, t, [n, i, d], !0) : M(o, i, [t, n, d], !0), !0)
        },
        D = (t, e, n) => {
            const {
                activeInputs: i,
                passiveInputs: r
            } = Object(d.a)(e), {
                outputs: o
            } = Object(l.a)(t), s = Object(c.a)(t), a = o => {
                const s = Object(p.a)(t),
                    a = Object(f.a)(e);
                if (o) {
                    const e = R(r, t, n);
                    O(i, t, e, !1), Object(b.a)(t) || s.connect(a, n)
                } else {
                    const e = ((t, e, n) => _(t, t => t[0] === e && t[1] === n))(i, t, n);
                    I(r, e, !1), Object(b.a)(t) || s.disconnect(a, n)
                }
            };
            return !!Object(g.a)(o, [e, n], t => t[0] === e && t[1] === n, !0) && (s.add(a), Object(v.a)(t) ? O(i, t, [n, a], !0) : I(r, [t, n, a], !0), !0)
        },
        j = (t, e, n) => {
            for (const i of t)
                if (i[0] === e && i[1] === n) return t.delete(i), i;
            return null
        },
        N = (t, e, n, i) => {
            const [r, o] = ((t, e, n, i) => {
                const {
                    activeInputs: r,
                    passiveInputs: o
                } = Object(l.a)(e), s = j(r[i], t, n);
                if (null === s) {
                    return [A(o, t, n, i)[2], !1]
                }
                return [s[2], !0]
            })(t, e, n, i);
            if (null !== r && (u(t, r), o && !Object(b.a)(t) && Object(h.a)(Object(p.a)(t), Object(p.a)(e), n, i)), Object(v.a)(e)) {
                const {
                    activeInputs: t
                } = Object(l.a)(e);
                T(e, t)
            }
        },
        L = (t, e, n) => {
            const [i, r] = ((t, e, n) => {
                const {
                    activeInputs: i,
                    passiveInputs: r
                } = Object(d.a)(e), o = j(i, t, n);
                if (null === o) {
                    return [R(r, t, n)[1], !1]
                }
                return [o[2], !0]
            })(t, e, n);
            null !== i && (u(t, i), r && !Object(b.a)(t) && Object(p.a)(t).disconnect(Object(f.a)(e), n))
        },
        B = (t, e, n, c, u, h, m, v, b, _, x, T, M, I, A) => class extends _ {
            constructor(e, r, o, s) {
                super(o), this._context = e, this._nativeAudioNode = o;
                const a = x(e);
                T(a) && !0 !== n(S, () => S(a)) && (t => {
                    const e = new Map;
                    var n, i;
                    t.connect = (n = t.connect.bind(t), (t, i = 0, r = 0) => {
                        const o = Object(k.a)(t) ? n(t, i, r) : n(t, i),
                            s = e.get(t);
                        return void 0 === s ? e.set(t, [{
                            input: r,
                            output: i
                        }]) : s.every(t => t.input !== r || t.output !== i) && s.push({
                            input: r,
                            output: i
                        }), o
                    }), t.disconnect = (i = t.disconnect, (n, r, o) => {
                        if (i.apply(t), void 0 === n) e.clear();
                        else if ("number" == typeof n)
                            for (const [t, i] of e) {
                                const r = i.filter(t => t.output !== n);
                                0 === r.length ? e.delete(t) : e.set(t, r)
                            } else if (e.has(n))
                            if (void 0 === r) e.delete(n);
                            else {
                                const t = e.get(n);
                                if (void 0 !== t) {
                                    const i = t.filter(t => t.output !== r && (t.input !== o || void 0 === o));
                                    0 === i.length ? e.delete(n) : e.set(n, i)
                                }
                            } for (const [n, i] of e) i.forEach(e => {
                                Object(k.a)(n) ? t.connect(n, e.output, e.input) : t.connect(n, e.output)
                            })
                    })
                })(o), i.c.set(this, o), i.i.set(this, new Set), r && Object(w.a)(this), t(this, s, o)
            }
            get channelCount() {
                return this._nativeAudioNode.channelCount
            }
            set channelCount(t) {
                this._nativeAudioNode.channelCount = t
            }
            get channelCountMode() {
                return this._nativeAudioNode.channelCountMode
            }
            set channelCountMode(t) {
                this._nativeAudioNode.channelCountMode = t
            }
            get channelInterpretation() {
                return this._nativeAudioNode.channelInterpretation
            }
            set channelInterpretation(t) {
                this._nativeAudioNode.channelInterpretation = t
            }
            get context() {
                return this._context
            }
            get numberOfInputs() {
                return this._nativeAudioNode.numberOfInputs
            }
            get numberOfOutputs() {
                return this._nativeAudioNode.numberOfOutputs
            }
            connect(t, n = 0, i = 0) {
                if (n < 0 || n >= this._nativeAudioNode.numberOfOutputs) throw u();
                const o = x(this._context),
                    v = A(o);
                if (M(t) || I(t)) throw h();
                if (Object(r.a)(t)) {
                    const r = Object(p.a)(t);
                    try {
                        const c = Object(a.a)(this._nativeAudioNode, r, n, i);
                        if (v || y(this) ? this._nativeAudioNode.disconnect(...c) : y(t) && Object(w.a)(t), s(t)) {
                            const t = e.get(r);
                            if (void 0 === t) {
                                const t = o.createGain();
                                t.connect(c[0], 0, c[2]), e.set(r, new Map([
                                    [i, t]
                                ]))
                            } else if (void 0 === t.get(i)) {
                                const e = o.createGain();
                                e.connect(c[0], 0, c[2]), t.set(i, e)
                            }
                        }
                    } catch (t) {
                        if (12 === t.code) throw h();
                        throw t
                    }
                    if (v ? ((t, e, n, i) => {
                        const {
                            outputs: r
                        } = Object(l.a)(t);
                        if (Object(g.a)(r, [e, n, i], t => t[0] === e && t[1] === n && t[2] === i, !0)) {
                            const {
                                activeInputs: r
                            } = Object(l.a)(e);
                            return E(r, t, [n, i, null], !0), !0
                        }
                        return !1
                    })(this, t, n, i) : P(this, t, n, i)) {
                        const e = b([this], t);
                        C(e, c(v))
                    }
                    return t
                }
                const _ = Object(f.a)(t);
                if ("playbackRate" === _.name) throw m();
                try {
                    this._nativeAudioNode.connect(_, n), (v || y(this)) && this._nativeAudioNode.disconnect(_, n)
                } catch (t) {
                    if (12 === t.code) throw h();
                    throw t
                }
                if (v ? ((t, e, n) => {
                    const {
                        outputs: i
                    } = Object(l.a)(t);
                    if (Object(g.a)(i, [e, n], t => t[0] === e && t[1] === n, !0)) {
                        const {
                            activeInputs: i
                        } = Object(d.a)(e);
                        return O(i, t, [n, null], !0), !0
                    }
                    return !1
                })(this, t, n) : D(this, t, n)) {
                    const e = b([this], t);
                    C(e, c(v))
                }
            }
            disconnect(t, e, n) {
                let i;
                if (void 0 === t) i = (t => {
                    const e = Object(l.a)(t),
                        n = [];
                    for (const i of e.outputs) Object(o.a)(i) ? N(t, ...i) : L(t, ...i), n.push(i[0]);
                    return e.outputs.clear(), n
                })(this);
                else if ("number" == typeof t) {
                    if (t < 0 || t >= this.numberOfOutputs) throw u();
                    i = ((t, e) => {
                        const n = Object(l.a)(t),
                            i = [];
                        for (const r of n.outputs) r[1] === e && (Object(o.a)(r) ? N(t, ...r) : L(t, ...r), i.push(r[0]), n.outputs.delete(r));
                        return i
                    })(this, t)
                } else {
                    if (void 0 !== e && (e < 0 || e >= this.numberOfOutputs)) throw u();
                    if (Object(r.a)(t) && void 0 !== n && (n < 0 || n >= t.numberOfInputs)) throw u();
                    if (i = ((t, e, n, i) => {
                        const r = Object(l.a)(t);
                        return Array.from(r.outputs).filter(t => !(t[0] !== e || void 0 !== n && t[1] !== n || void 0 !== i && t[2] !== i)).map(e => (Object(o.a)(e) ? N(t, ...e) : L(t, ...e), r.outputs.delete(e), e[0]))
                    })(this, t, e, n), 0 === i.length) throw h()
                }
                for (const t of i) {
                    const e = b([this], t);
                    C(e, v)
                }
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return l
    }));
    var i = n(3),
        r = n(51),
        o = n(43),
        s = n(49),
        a = n(0);
    const c = async (t, e) => new t(await (t => new Promise((e, n) => {
        const {
            port1: i,
            port2: r
        } = new MessageChannel;
        i.onmessage = ({
            data: t
        }) => {
            i.close(), r.close(), e(t)
        }, i.onmessageerror = ({
            data: t
        }) => {
            i.close(), r.close(), n(t)
        }, r.postMessage(t)
    }))(e));
    var u = n(44),
        h = n(48);
    const l = (t, e, n, l, d, p, f, m, g, v, b, y, _) => (w, x, T, S) => {
        if (0 === S.numberOfInputs && 0 === S.numberOfOutputs) throw v();
        if (void 0 !== S.outputChannelCount) {
            if (S.outputChannelCount.some(t => t < 1)) throw v();
            if (S.outputChannelCount.length !== S.numberOfOutputs) throw n()
        }
        if ("explicit" !== S.channelCountMode) throw v();
        const C = S.channelCount * S.numberOfInputs,
            k = S.outputChannelCount.reduce((t, e) => t + e, 0),
            E = void 0 === T.parameterDescriptors ? 0 : T.parameterDescriptors.length;
        if (C + E > 6 || k > 6) throw v();
        const O = new MessageChannel,
            M = [],
            I = [];
        for (let t = 0; t < S.numberOfInputs; t += 1) M.push(m(w, {
            channelCount: S.channelCount,
            channelCountMode: S.channelCountMode,
            channelInterpretation: S.channelInterpretation,
            gain: 1
        })), I.push(p(w, {
            channelCount: S.channelCount,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            numberOfOutputs: S.channelCount
        }));
        const A = [];
        if (void 0 !== T.parameterDescriptors)
            for (const {
                defaultValue: t,
                maxValue: e,
                minValue: n,
                name: r
            } of T.parameterDescriptors) {
                const o = f(w, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    offset: void 0 !== S.parameterData[r] ? S.parameterData[r] : void 0 === t ? 0 : t
                });
                Object.defineProperties(o.offset, {
                    defaultValue: {
                        get: () => void 0 === t ? 0 : t
                    },
                    maxValue: {
                        get: () => void 0 === e ? i.b : e
                    },
                    minValue: {
                        get: () => void 0 === n ? i.a : n
                    }
                }), A.push(o)
            }
        const R = d(w, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "speakers",
            numberOfInputs: Math.max(1, C + E)
        }),
            P = Object(r.a)(x, w.sampleRate),
            D = g(w, P, C + E, Math.max(1, k)),
            j = p(w, {
                channelCount: Math.max(1, k),
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                numberOfOutputs: Math.max(1, k)
            }),
            N = [];
        for (let t = 0; t < S.numberOfOutputs; t += 1) N.push(d(w, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "speakers",
            numberOfInputs: S.outputChannelCount[t]
        }));
        for (let t = 0; t < S.numberOfInputs; t += 1) {
            M[t].connect(I[t]);
            for (let e = 0; e < S.channelCount; e += 1) I[t].connect(R, e, t * S.channelCount + e)
        }
        const L = new h.a(void 0 === T.parameterDescriptors ? [] : T.parameterDescriptors.map(({
            name: t
        }, e) => {
            const n = A[e];
            return n.connect(R, 0, C + e), n.start(0), [t, n.offset]
        }));
        R.connect(D);
        let B = S.channelInterpretation,
            U = null;
        const F = 0 === S.numberOfOutputs ? [D] : N,
            V = {
                get bufferSize() {
                    return P
                },
                get channelCount() {
                    return S.channelCount
                },
                set channelCount(t) {
                    throw l()
                },
                get channelCountMode() {
                    return S.channelCountMode
                },
                set channelCountMode(t) {
                    throw l()
                },
                get channelInterpretation() {
                    return B
                },
                set channelInterpretation(t) {
                    for (const e of M) e.channelInterpretation = t;
                    B = t
                },
                get context() {
                    return D.context
                },
                get inputs() {
                    return M
                },
                get numberOfInputs() {
                    return S.numberOfInputs
                },
                get numberOfOutputs() {
                    return S.numberOfOutputs
                },
                get onprocessorerror() {
                    return U
                },
                set onprocessorerror(t) {
                    "function" == typeof U && V.removeEventListener("processorerror", U), U = "function" == typeof t ? t : null, "function" == typeof U && V.addEventListener("processorerror", U)
                },
                get parameters() {
                    return L
                },
                get port() {
                    return O.port2
                },
                addEventListener: (...t) => D.addEventListener(t[0], t[1], t[2]),
                connect: e.bind(null, F),
                disconnect: b.bind(null, F),
                dispatchEvent: (...t) => D.dispatchEvent(t[0]),
                removeEventListener: (...t) => D.removeEventListener(t[0], t[1], t[2])
            },
            q = new Map;
        var z, G;
        O.port1.addEventListener = (z = O.port1.addEventListener, (...t) => {
            if ("message" === t[0]) {
                const e = "function" == typeof t[1] ? t[1] : "object" == typeof t[1] && null !== t[1] && "function" == typeof t[1].handleEvent ? t[1].handleEvent : null;
                if (null !== e) {
                    const n = q.get(t[1]);
                    void 0 !== n ? t[1] = n : (t[1] = t => {
                        y(w.currentTime, w.sampleRate, () => e(t))
                    }, q.set(e, t[1]))
                }
            }
            return z.call(O.port1, t[0], t[1], t[2])
        }), O.port1.removeEventListener = (G = O.port1.removeEventListener, (...t) => {
            if ("message" === t[0]) {
                const e = q.get(t[1]);
                void 0 !== e && (q.delete(t[1]), t[1] = e)
            }
            return G.call(O.port1, t[0], t[1], t[2])
        });
        let H = null;
        Object.defineProperty(O.port1, "onmessage", {
            get: () => H,
            set: t => {
                "function" == typeof H && O.port1.removeEventListener("message", H), H = "function" == typeof t ? t : null, "function" == typeof H && (O.port1.addEventListener("message", H), O.port1.start())
            }
        }), T.prototype.port = O.port1;
        let W = null;
        ((t, e, n, i) => {
            let r = a.k.get(t);
            void 0 === r && (r = new WeakMap, a.k.set(t, r));
            const o = c(n, i);
            return r.set(e, o), o
        })(w, V, T, S).then(t => W = t);
        const Y = Object(u.a)(S.numberOfInputs, S.channelCount),
            X = Object(u.a)(S.numberOfOutputs, S.outputChannelCount),
            Z = void 0 === T.parameterDescriptors ? [] : T.parameterDescriptors.reduce((t, {
                name: e
            }) => ({
                ...t,
                [e]: new Float32Array(128)
            }), {});
        let J = !0;
        const $ = () => {
            S.numberOfOutputs > 0 && D.disconnect(j);
            for (let t = 0, e = 0; t < S.numberOfOutputs; t += 1) {
                const n = N[t];
                for (let i = 0; i < S.outputChannelCount[t]; i += 1) j.disconnect(n, e + i, i);
                e += S.outputChannelCount[t]
            }
        };
        D.onaudioprocess = ({
            inputBuffer: e,
            outputBuffer: n
        }) => {
            if (null !== W)
                for (let i = 0; i < P; i += 128) {
                    for (let t = 0; t < S.numberOfInputs; t += 1)
                        for (let n = 0; n < S.channelCount; n += 1) Object(o.a)(e, Y[t], n, n, i);
                    void 0 !== T.parameterDescriptors && T.parameterDescriptors.forEach(({
                        name: t
                    }, n) => {
                        Object(o.a)(e, Z, t, C + n, i)
                    });
                    for (let t = 0; t < S.numberOfInputs; t += 1)
                        for (let e = 0; e < S.outputChannelCount[t]; e += 1) 0 === X[t][e].byteLength && (X[t][e] = new Float32Array(128));
                    try {
                        const e = Y.map((e, n) => {
                            const i = t.get(V);
                            return void 0 === i || void 0 === i.get(n) ? [] : e
                        }),
                            r = y(w.currentTime + i / w.sampleRate, w.sampleRate, () => W.process(e, X, Z));
                        J = r;
                        for (let t = 0, e = 0; t < S.numberOfOutputs; t += 1) {
                            for (let r = 0; r < S.outputChannelCount[t]; r += 1) Object(s.a)(n, X[t], r, e + r, i);
                            e += S.outputChannelCount[t]
                        }
                    } catch (t) {
                        J = !1, V.dispatchEvent(new ErrorEvent("processorerror", {
                            error: t
                        }))
                    }
                    if (!J) {
                        for (let t = 0; t < S.numberOfInputs; t += 1) {
                            M[t].disconnect(I[t]);
                            for (let e = 0; e < S.channelCount; e += 1) I[i].disconnect(R, e, t * S.channelCount + e)
                        }
                        if (void 0 !== T.parameterDescriptors) {
                            const t = T.parameterDescriptors.length;
                            for (let e = 0; e < t; e += 1) {
                                const t = A[e];
                                t.disconnect(R, 0, C + e), t.stop()
                            }
                        }
                        R.disconnect(D), D.onaudioprocess = null, Q ? $() : et();
                        break
                    }
                }
        };
        let Q = !1;
        const K = m(w, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0
        }),
            tt = () => D.connect(K).connect(K.context.destination),
            et = () => {
                D.disconnect(K), K.disconnect()
            };
        return tt(), _(V, () => {
            if (J) {
                et(), S.numberOfOutputs > 0 && D.connect(j);
                for (let t = 0, e = 0; t < S.numberOfOutputs; t += 1) {
                    const n = N[t];
                    for (let i = 0; i < S.outputChannelCount[t]; i += 1) j.connect(n, e + i, i);
                    e += S.outputChannelCount[t]
                }
            }
            Q = !0
        }, () => {
            J && (tt(), $()), Q = !1
        })
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return s
    }));
    var i = n(5),
        r = n(2);
    const o = t => "function" == typeof t.getFloatTimeDomainData,
        s = (t, e, n) => (s, a) => {
            const c = n(s, t => t.createAnalyser());
            if (Object(r.a)(c, a), !(a.maxDecibels > a.minDecibels)) throw e();
            return Object(i.a)(c, a, "fftSize"), Object(i.a)(c, a, "maxDecibels"), Object(i.a)(c, a, "minDecibels"), Object(i.a)(c, a, "smoothingTimeConstant"), t(o, () => o(c)) || (t => {
                t.getFloatTimeDomainData = e => {
                    const n = new Uint8Array(e.length);
                    t.getByteTimeDomainData(n);
                    const i = Math.max(n.length, t.fftSize);
                    for (let t = 0; t < i; t += 1) e[t] = .0078125 * (n[t] - 128);
                    return e
                }
            })(c), c
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return u
    }));
    var i = n(6),
        r = n(5),
        o = n(2),
        s = n(8);
    var a = n(38),
        c = n(39);
    const u = (t, e, n, u, h, l, d, p, f, m, g, v, b) => (y, _) => {
        const w = n(y, t => t.createBufferSource());
        return Object(o.a)(w, _), Object(i.a)(w, _, "playbackRate"), Object(r.a)(w, _, "buffer"), Object(r.a)(w, _, "loop"), Object(r.a)(w, _, "loopEnd"), Object(r.a)(w, _, "loopStart"), e(u, () => u(y)) || (t => {
            t.start = (e => {
                let n = !1;
                return (i = 0, r = 0, o) => {
                    if (n) throw Object(s.a)();
                    e.call(t, i, r, o), n = !0
                }
            })(t.start)
        })(w), e(h, h) || ((t, e) => {
            let n = Number.POSITIVE_INFINITY,
                i = Number.POSITIVE_INFINITY;
            var r, o;
            t.start = (r = t.start, o = t.stop, (s = 0, a = 0, c = Number.POSITIVE_INFINITY) => {
                if (r.call(t, s, a), c >= 0 && c < Number.POSITIVE_INFINITY) {
                    const r = Math.max(s, e.currentTime),
                        a = c / t.playbackRate.value;
                    n = r + a, o.call(t, Math.min(n, i))
                }
            }), t.stop = (r => (o = 0) => {
                i = Math.max(o, e.currentTime), r.call(t, Math.min(n, i))
            })(t.stop)
        })(w, y), e(l, () => l(y)) || g(w), e(d, () => d(y)) || v(w, y), e(p, () => p(y)) || Object(a.a)(w), e(f, () => f(y)) || b(w, y), e(m, () => m(y)) || Object(c.a)(w), t(y, w), w
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return u
    }));
    var i = n(0);
    const r = {
        construct: () => r
    },
        o = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,
        s = (t, e) => {
            const n = [];
            let i = t.replace(/^[\s]+/, ""),
                r = i.match(o);
            for (; null !== r;) {
                const t = r[1].slice(1, -1),
                    s = r[0].replace(/([\s]+)?;?$/, "").replace(t, new URL(t, e).toString());
                n.push(s), i = i.slice(r[0].length).replace(/^[\s]+/, ""), r = i.match(o)
            }
            return [n.join(";"), i]
        },
        a = t => {
            if (void 0 !== t && !Array.isArray(t)) throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")
        },
        c = t => {
            if (!(t => {
                try {
                    new new Proxy(t, r)
                } catch {
                    return !1
                }
                return !0
            })(t)) throw new TypeError("The given value for processorCtor should be a constructor.");
            if (null === t.prototype || "object" != typeof t.prototype) throw new TypeError("The given value for processorCtor should have a prototype.")
        },
        u = (t, e, n, r, o, u, h, l, d) => (p, f, m = {
            credentials: "omit"
        }) => {
            const g = u(p),
                v = new URL(f, d.location.href).toString();
            if (void 0 !== g.audioWorklet) return r(f).then(t => {
                const [e, n] = s(t, v), i = new Blob([`${e};(registerProcessor=>{${n}\n})((n,p)=>registerProcessor(n,class extends p{process(i,o,p){return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}))`], {
                    type: "application/javascript; charset=utf-8"
                }), r = URL.createObjectURL(i), a = o(g);
                return (null !== a ? a : g).audioWorklet.addModule(r, m).then(() => URL.revokeObjectURL(r)).catch(t => {
                    throw URL.revokeObjectURL(r), void 0 !== t.code && "SyntaxError" !== t.name || (t.code = 12), t
                })
            });
            const b = l.get(p);
            if (void 0 !== b && b.has(f)) return Promise.resolve();
            const y = h.get(p);
            if (void 0 !== y) {
                const t = y.get(f);
                if (void 0 !== t) return t
            }
            const _ = r(f).then(t => {
                const [n, i] = s(t, v);
                return e(`${n};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${i}\n})})(window,'_AWGS')`)
            }).then(() => {
                const e = d._AWGS.pop();
                if (void 0 === e) throw new SyntaxError;
                n(g.currentTime, g.sampleRate, () => e(class { }, void 0, (e, n) => {
                    if ("" === e.trim()) throw t();
                    const r = i.j.get(g);
                    if (void 0 !== r) {
                        if (r.has(e)) throw t();
                        c(n), a(n.parameterDescriptors), r.set(e, n)
                    } else c(n), a(n.parameterDescriptors), i.j.set(g, new Map([
                        [e, n]
                    ]))
                }, g.sampleRate, void 0, void 0))
            }).catch(t => {
                throw void 0 !== t.code && "SyntaxError" !== t.name || (t.code = 12), t
            });
            return void 0 === y ? h.set(p, new Map([
                [f, _]
            ])) : y.set(f, _), _.then(() => {
                const t = l.get(p);
                void 0 === t ? l.set(p, new Set([f])) : t.add(f)
            }).catch(() => { }).then(() => {
                const t = h.get(p);
                void 0 !== t && t.delete(f)
            }), _
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(37);
    const r = (t, e, n, r, o, s, a, c, u, h, l, d, p) => (f, m) => {
        const g = a(f) ? f : s(f);
        if (o.has(m)) {
            const t = n();
            return Promise.reject(t)
        }
        try {
            o.add(m)
        } catch { }
        if (e(l, () => l(g))) {
            return ("closed" === g.state && null !== u && c(g) ? new u(1, 1, g.sampleRate) : g).decodeAudioData(m).catch(t => {
                if (t instanceof DOMException && "NotSupportedError" === t.name) throw new TypeError;
                throw t
            }).then(n => (e(h, () => h(n)) || p(n), t.add(n), n))
        }
        return new Promise((e, n) => {
            const o = () => {
                try {
                    (t => {
                        const {
                            port1: e
                        } = new MessageChannel;
                        e.postMessage(t, [t])
                    })(m)
                } catch { }
            },
                s = t => {
                    n(t), o()
                };
            try {
                g.decodeAudioData(m, n => {
                    "function" != typeof n.copyFromChannel && (d(n), Object(i.a)(n)), t.add(n), o(), e(n)
                }, t => {
                    s(null === t ? r() : t)
                })
            } catch (t) {
                s(t)
            }
        })
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(45);
    const r = {
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers"
    },
        o = (t, e, n, o, s) => class extends t {
            constructor(t, a) {
                const c = o(t),
                    u = s(c),
                    h = {
                        ...r,
                        ...a
                    },
                    l = e(c, u ? null : t.baseLatency, h);
                super(t, !1, l, u ? n(h.feedback, h.feedforward) : null), (t => {
                    var e;
                    t.getFrequencyResponse = (e = t.getFrequencyResponse, (n, r, o) => {
                        if (n.length !== r.length || r.length !== o.length) throw Object(i.a)();
                        return e.call(t, n, r, o)
                    })
                })(l), this._nativeIIRFilterNode = l
            }
            getFrequencyResponse(t, e, n) {
                return this._nativeIIRFilterNode.getFrequencyResponse(t, e, n)
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var i = n(2),
        r = n(8);
    const o = t => (e, n) => {
        const o = t(e, t => t.createChannelSplitter(n.numberOfOutputs));
        return Object(i.a)(o, n), (t => {
            const e = t.numberOfOutputs;
            Object.defineProperty(t, "channelCount", {
                get: () => e,
                set: t => {
                    if (t !== e) throw Object(r.a)()
                }
            }), Object.defineProperty(t, "channelCountMode", {
                get: () => "explicit",
                set: t => {
                    if ("explicit" !== t) throw Object(r.a)()
                }
            }), Object.defineProperty(t, "channelInterpretation", {
                get: () => "discrete",
                set: t => {
                    if ("discrete" !== t) throw Object(r.a)()
                }
            })
        })(o), o
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return d
    }));
    var i = n(43),
        r = n(49),
        o = n(44),
        s = n(9),
        a = n(0),
        c = n(7),
        u = n(10);
    var h = n(4);
    const l = async (t, e, n, h, l, d) => {
        const p = null === e ? 128 * Math.ceil(t.context.length / 128) : e.length,
            f = h.channelCount * h.numberOfInputs,
            m = h.outputChannelCount.reduce((t, e) => t + e, 0),
            g = 0 === m ? null : n.createBuffer(m, p, n.sampleRate);
        if (void 0 === l) throw new Error("Missing the processor constructor.");
        const v = Object(s.a)(t),
            b = await ((t, e) => {
                const n = Object(u.a)(a.k, t),
                    i = Object(c.a)(e);
                return Object(u.a)(n, i)
            })(n, t),
            y = Object(o.a)(h.numberOfInputs, h.channelCount),
            _ = Object(o.a)(h.numberOfOutputs, h.outputChannelCount),
            w = Array.from(t.parameters.keys()).reduce((t, e) => ({
                ...t,
                [e]: new Float32Array(128)
            }), {});
        for (let o = 0; o < p; o += 128) {
            if (h.numberOfInputs > 0 && null !== e)
                for (let t = 0; t < h.numberOfInputs; t += 1)
                    for (let n = 0; n < h.channelCount; n += 1) Object(i.a)(e, y[t], n, n, o);
            void 0 !== l.parameterDescriptors && null !== e && l.parameterDescriptors.forEach(({
                name: t
            }, n) => {
                Object(i.a)(e, w, t, f + n, o)
            });
            for (let t = 0; t < h.numberOfInputs; t += 1)
                for (let e = 0; e < h.outputChannelCount[t]; e += 1) 0 === _[t][e].byteLength && (_[t][e] = new Float32Array(128));
            try {
                const t = y.map((t, e) => 0 === v.activeInputs[e].size ? [] : t),
                    e = d(o / n.sampleRate, n.sampleRate, () => b.process(t, _, w));
                if (null !== g)
                    for (let t = 0, e = 0; t < h.numberOfOutputs; t += 1) {
                        for (let n = 0; n < h.outputChannelCount[t]; n += 1) Object(r.a)(g, _[t], n, e + n, o);
                        e += h.outputChannelCount[t]
                    }
                if (!e) break
            } catch (e) {
                t.dispatchEvent(new ErrorEvent("processorerror", {
                    error: e
                }));
                break
            }
        }
        return g
    }, d = (t, e, n, i, r, o, s, a, c, u, d, p, f, m, g, v) => (b, y, _) => {
        const w = new WeakMap;
        let x = null;
        return {
            render(T, S, C) {
                a(S, T);
                const k = w.get(S);
                return void 0 !== k ? Promise.resolve(k) : (async (a, T, S) => {
                    let C = d(a),
                        k = null;
                    const E = Object(h.a)(C, T);
                    if (null === p) {
                        const t = y.outputChannelCount.reduce((t, e) => t + e, 0),
                            n = r(T, {
                                channelCount: Math.max(1, t),
                                channelCountMode: "explicit",
                                channelInterpretation: "discrete",
                                numberOfOutputs: Math.max(1, t)
                            }),
                            o = [];
                        for (let t = 0; t < a.numberOfOutputs; t += 1) o.push(i(T, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "speakers",
                            numberOfInputs: y.outputChannelCount[t]
                        }));
                        const u = s(T, {
                            channelCount: y.channelCount,
                            channelCountMode: y.channelCountMode,
                            channelInterpretation: y.channelInterpretation,
                            gain: 1
                        });
                        u.connect = e.bind(null, o), u.disconnect = c.bind(null, o), k = [n, o, u]
                    } else E || (C = new p(T, b));
                    if (w.set(T, null === k ? C : k[2]), null !== k) {
                        if (null === x) {
                            if (void 0 === _) throw new Error("Missing the processor constructor.");
                            if (null === f) throw new Error("Missing the native OfflineAudioContext constructor.");
                            const t = a.channelCount * a.numberOfInputs,
                                e = void 0 === _.parameterDescriptors ? 0 : _.parameterDescriptors.length,
                                n = t + e,
                                c = async () => {
                                    const c = new f(n, 128 * Math.ceil(a.context.length / 128), T.sampleRate),
                                        u = [],
                                        h = [];
                                    for (let t = 0; t < y.numberOfInputs; t += 1) u.push(s(c, {
                                        channelCount: y.channelCount,
                                        channelCountMode: y.channelCountMode,
                                        channelInterpretation: y.channelInterpretation,
                                        gain: 1
                                    })), h.push(r(c, {
                                        channelCount: y.channelCount,
                                        channelCountMode: "explicit",
                                        channelInterpretation: "discrete",
                                        numberOfOutputs: y.channelCount
                                    }));
                                    const l = await Promise.all(Array.from(a.parameters.values()).map(async t => {
                                        const e = o(c, {
                                            channelCount: 1,
                                            channelCountMode: "explicit",
                                            channelInterpretation: "discrete",
                                            offset: t.value
                                        });
                                        return await m(c, t, e.offset, S), e
                                    })),
                                        d = i(c, {
                                            channelCount: 1,
                                            channelCountMode: "explicit",
                                            channelInterpretation: "speakers",
                                            numberOfInputs: Math.max(1, t + e)
                                        });
                                    for (let t = 0; t < y.numberOfInputs; t += 1) {
                                        u[t].connect(h[t]);
                                        for (let e = 0; e < y.channelCount; e += 1) h[t].connect(d, e, t * y.channelCount + e)
                                    }
                                    for (const [e, n] of l.entries()) n.connect(d, 0, t + e), n.start(0);
                                    return d.connect(c.destination), await Promise.all(u.map(t => g(a, c, t, S))), v(c)
                                };
                            x = l(a, 0 === n ? null : await c(), T, y, _, u)
                        }
                        const t = await x,
                            e = n(T, {
                                buffer: null,
                                channelCount: 2,
                                channelCountMode: "max",
                                channelInterpretation: "speakers",
                                loop: !1,
                                loopEnd: 0,
                                loopStart: 0,
                                playbackRate: 1
                            }),
                            [c, h, d] = k;
                        null !== t && (e.buffer = t, e.start(0)), e.connect(c);
                        for (let t = 0, e = 0; t < a.numberOfOutputs; t += 1) {
                            const n = h[t];
                            for (let i = 0; i < y.outputChannelCount[t]; i += 1) c.connect(n, e + i, i);
                            e += y.outputChannelCount[t]
                        }
                        return d
                    }
                    if (E)
                        for (const [e, n] of a.parameters.entries()) await t(T, n, C.parameters.get(e), S);
                    else
                        for (const [t, e] of a.parameters.entries()) await m(T, e, C.parameters.get(t), S);
                    return await g(a, T, C, S), C
                })(T, S, C)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var i = n(32);
    const r = (t, e, n) => function r(o, s) {
        const a = Object(i.a)(s) ? s : n(t, s);
        if ((t => "delayTime" in t)(a)) return [];
        if (o[0] === a) return [o];
        if (o.includes(a)) return [];
        const {
            outputs: c
        } = e(a);
        return Array.from(c).map(t => r([...o, a], t[0])).reduce((t, e) => t.concat(e), [])
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    const i = (t, e, n, i, r, o) => (s, a, c, u, h, l) => {
        if (null !== c) try {
            const n = e(s, t => new c(t, u, l)),
                r = new Map;
            let a = null;
            if (Object.defineProperties(n, {
                channelCount: {
                    get: () => l.channelCount,
                    set: () => {
                        throw t()
                    }
                },
                channelCountMode: {
                    get: () => "explicit",
                    set: () => {
                        throw t()
                    }
                },
                onprocessorerror: {
                    get: () => a,
                    set: t => {
                        "function" == typeof a && n.removeEventListener("processorerror", a), a = "function" == typeof t ? t : null, "function" == typeof a && n.addEventListener("processorerror", a)
                    }
                }
            }), n.addEventListener = (p = n.addEventListener, (...t) => {
                if ("processorerror" === t[0]) {
                    const e = "function" == typeof t[1] ? t[1] : "object" == typeof t[1] && null !== t[1] && "function" == typeof t[1].handleEvent ? t[1].handleEvent : null;
                    if (null !== e) {
                        const n = r.get(t[1]);
                        void 0 !== n ? t[1] = n : (t[1] = n => {
                            e(new ErrorEvent(t[0], {
                                ...n,
                                error: new Error
                            }))
                        }, r.set(e, t[1]))
                    }
                }
                return p.call(n, t[0], t[1], t[2])
            }), n.removeEventListener = (d = n.removeEventListener, (...t) => {
                if ("processorerror" === t[0]) {
                    const e = r.get(t[1]);
                    void 0 !== e && (r.delete(t[1]), t[1] = e)
                }
                return d.call(n, t[0], t[1], t[2])
            }), 0 !== l.numberOfOutputs) {
                const t = i(s, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    gain: 0
                });
                return n.connect(t).connect(t.context.destination), o(n, () => t.disconnect(), () => t.connect(t.context.destination))
            }
            return n
        } catch (t) {
            if (11 === t.code) throw r();
            throw t
        }
        var d, p;
        if (void 0 === h) throw r();
        return (t => {
            const {
                port1: e
            } = new MessageChannel;
            try {
                e.postMessage(t)
            } finally {
                e.close()
            }
        })(l), n(s, a, h, l)
    }
}, function (t, e, n) {
    t.exports = n(753)
}, function (t, e, n) {
    var i = n(23),
        r = n(702);
    "string" == typeof (r = r.__esModule ? r.default : r) && (r = [
        [t.i, r, ""]
    ]);
    var o = {
        insert: "head",
        singleton: !1
    };
    i(r, o);
    t.exports = r.locals || {}
}, function (t, e, n) {
    (e = n(24)(!1)).push([t.i, '@keyframes dash{0%{stroke-dashoffset:120}50%{stroke-dashoffset:30;transform:rotate(240deg)}100%{stroke-dashoffset:120;transform:rotate(720deg)}}@keyframes dash{0%{stroke-dashoffset:120}50%{stroke-dashoffset:30;transform:rotate(240deg)}100%{stroke-dashoffset:120;transform:rotate(720deg)}}.range-cover{overflow:visible}.range-cover [type=range]{margin:-5px 0 0 0;padding:0;width:calc(100% + 32px);height:60px;position:absolute;left:-16px;opacity:0;top:-12px;cursor:pointer}.range-cover [type=range],.range-cover [type=range]::-webkit-slider-thumb{-webkit-appearance:none}@media(max-width: 767px){.range-cover [type=range]{left:-10px;width:calc(100% + 18px);margin:-5px 0 0 0}}.range-cover [type=range]::-webkit-slider-runnable-track{box-sizing:border-box;border:none;width:100%;height:60px;background:#666}.range-cover [type=range]::-moz-range-track{box-sizing:border-box;border:none;width:100%;height:60px;background:#666}.range-cover [type=range]::-ms-track{box-sizing:border-box;border:none;width:100%;height:60px;background:#666}.range-cover [type=range]::-webkit-slider-thumb{margin-top:0px;box-sizing:border-box;border:none;width:60px;height:60px;border-radius:50%;background:#16a8f0}.range-cover [type=range]::-moz-range-thumb{box-sizing:border-box;border:none;width:60px;height:60px;border-radius:50%;background:#16a8f0}.range-cover [type=range]::-ms-thumb{margin-top:0;box-sizing:border-box;border:none;width:60px;height:60px;border-radius:50%;background:#16a8f0}.range-cover .range-dupe{position:absolute;left:0;top:10px;bottom:10px;width:50%;pointer-events:none;background-color:#16a8f0;overflow:visible;border-radius:4px;z-index:1}.range-cover .range-dupe::before{position:absolute;right:-16px;width:32px;height:32px;border-radius:16px;background:#16a8f0;content:"\\a";top:-12px}.range-cover::before{position:absolute;width:100%;content:"\\a";height:8px;background:#f5f5f5;top:10px;border-radius:4px;left:0;cursor:pointer}@media(max-width: 767px){.range-cover{width:23px;padding-left:0}.range-cover .range-dupe::before{position:absolute;right:-9px;width:18px;height:18px;border-radius:9px;top:-5px}}*{box-sizing:border-box}body,html{position:absolute;top:0px;left:0px;width:100%;height:100%;margin:0px;overflow:hidden;line-height:1.89;font-family:"Quicksand",sans-serif}body button,html button{cursor:pointer;border:none;font-family:"Quicksand",sans-serif}body input,html input{font-family:"Quicksand",sans-serif}body:not(.user-is-tabbing) button:focus,body:not(.user-is-tabbing) input:focus,body:not(.user-is-tabbing) select:focus,body:not(.user-is-tabbing) textarea:focus,body:not(.user-is-tabbing) *[tabindex]{outline:none}body.embed-only #tempo-slider,body.embed-only #bottom-right,body.embed-only #toplinks,body.embed-only #header-back,body.embed-only #gamepad,body.embed-only #bottom-left button:not(#play-button),body.embed-only #bottom-left::after,body.embed-only #topbar{display:none}body.embed-only #grid-container>canvas{pointer-events:none}body.embed-only #grid-container{height:calc(100% - 51px);top:0}@media(max-width: 767px){body.embed-only #grid-container{height:calc(100% - 51px);top:0}}body.embed-only #bottom{height:51px}body.embed-only #bottom #bottom-left{width:80px;left:30px}body.embed-only #bottom #bottom-left #play-button{display:inline-block;margin-right:20px;height:21px;width:21px;min-width:0;padding-top:21px}body.embed-only #bottom #bottom-left #play-button.playing:before{background-image:url(/Song-Maker/client/images/icon-stop-blue.svg)}body.embed-only #bottom #bottom-left #play-button:before{background-color:transparent;background-image:url(/Song-Maker/client/images/icon-play-blue.svg);background-size:21px 21px;width:15px;height:20px;border-radius:0}body.embed-only #bottom #bottom-left #play-button:hover:before{background-color:transparent}@media(max-width: 767px){body.embed-only #bottom #bottom-left #play-button{text-indent:60px;top:14px;left:30px}}body.embed-only #edit-link{position:absolute;bottom:13px;right:30px;color:#16a8f0;font-size:14px;text-decoration:none;font-family:"Poppins",sans-serif;letter-spacing:.67px}body.embed-only #edit-link::before{content:"\\a";position:relative;margin-right:10px;background-image:url(/Song-Maker/client/images/icon-edit.svg);height:14px;width:14px;display:inline-block}', ""]), e.locals = {
        blue: "#16a8f0",
        red: "red",
        lightGrayFill: "#e6e6e6",
        darkGrayFill: "#a0a0a0",
        "background-gray": "#f5f5f5",
        veryLightGrayFill: "#f5f5f5",
        black: "#000",
        white: "#fff",
        orange: "#f4a806",
        "icon-label-gray": "#666",
        "gray-text": "#666",
        "about-gray-text": "#9e9e9e"
    }, t.exports = e
}, function (t, e, n) {
    var i = n(704),
        r = n(705),
        o = n(706),
        s = n(708);
    t.exports = function (t, e) {
        return i(t) || r(t, e) || o(t, e) || s()
    }
}, function (t, e) {
    t.exports = function (t) {
        if (Array.isArray(t)) return t
    }
}, function (t, e) {
    t.exports = function (t, e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    i || null == a.return || a.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }
    }
}, function (t, e, n) {
    var i = n(707);
    t.exports = function (t, e) {
        if (t) {
            if ("string" == typeof t) return i(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0
        }
    }
}, function (t, e) {
    t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i
    }
}, function (t, e) {
    t.exports = function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
}, function (t, e) {
    t.exports = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
}, function (t, e) {
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    t.exports = function (t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t
    }
}, function (t, e) {
    function n(t) {
        for (var e, n = new i(t), r = []; !n.eof();) {
            var o = s();
            r.push(o)
        }
        return r;

        function s() {
            var t = {};
            t.deltaTime = n.readVarInt();
            var i = n.readUInt8();
            if (240 == (240 & i)) {
                if (255 !== i) {
                    if (240 == i) {
                        t.type = "sysEx";
                        o = n.readVarInt();
                        return t.data = n.readBytes(o), t
                    }
                    if (247 == i) {
                        t.type = "endSysEx";
                        o = n.readVarInt();
                        return t.data = n.readBytes(o), t
                    }
                    throw "Unrecognised MIDI event type byte: " + i
                }
                t.meta = !0;
                var r = n.readUInt8(),
                    o = n.readVarInt();
                switch (r) {
                    case 0:
                        if (t.type = "sequenceNumber", 2 !== o) throw "Expected length for sequenceNumber event is 2, got " + o;
                        return t.number = n.readUInt16(), t;
                    case 1:
                        return t.type = "text", t.text = n.readString(o), t;
                    case 2:
                        return t.type = "copyrightNotice", t.text = n.readString(o), t;
                    case 3:
                        return t.type = "trackName", t.text = n.readString(o), t;
                    case 4:
                        return t.type = "instrumentName", t.text = n.readString(o), t;
                    case 5:
                        return t.type = "lyrics", t.text = n.readString(o), t;
                    case 6:
                        return t.type = "marker", t.text = n.readString(o), t;
                    case 7:
                        return t.type = "cuePoint", t.text = n.readString(o), t;
                    case 32:
                        if (t.type = "channelPrefix", 1 != o) throw "Expected length for channelPrefix event is 1, got " + o;
                        return t.channel = n.readUInt8(), t;
                    case 33:
                        if (t.type = "portPrefix", 1 != o) throw "Expected length for portPrefix event is 1, got " + o;
                        return t.port = n.readUInt8(), t;
                    case 47:
                        if (t.type = "endOfTrack", 0 != o) throw "Expected length for endOfTrack event is 0, got " + o;
                        return t;
                    case 81:
                        if (t.type = "setTempo", 3 != o) throw "Expected length for setTempo event is 3, got " + o;
                        return t.microsecondsPerBeat = n.readUInt24(), t;
                    case 84:
                        if (t.type = "smpteOffset", 5 != o) throw "Expected length for smpteOffset event is 5, got " + o;
                        var s = n.readUInt8();
                        return t.frameRate = {
                            0: 24,
                            32: 25,
                            64: 29,
                            96: 30
                        }[96 & s], t.hour = 31 & s, t.min = n.readUInt8(), t.sec = n.readUInt8(), t.frame = n.readUInt8(), t.subFrame = n.readUInt8(), t;
                    case 88:
                        if (t.type = "timeSignature", 4 != o) throw "Expected length for timeSignature event is 4, got " + o;
                        return t.numerator = n.readUInt8(), t.denominator = 1 << n.readUInt8(), t.metronome = n.readUInt8(), t.thirtyseconds = n.readUInt8(), t;
                    case 89:
                        if (t.type = "keySignature", 2 != o) throw "Expected length for keySignature event is 2, got " + o;
                        return t.key = n.readInt8(), t.scale = n.readUInt8(), t;
                    case 127:
                        return t.type = "sequencerSpecific", t.data = n.readBytes(o), t;
                    default:
                        return t.type = "unknownMeta", t.data = n.readBytes(o), t.metatypeByte = r, t
                }
            } else {
                var a;
                if (0 == (128 & i)) {
                    if (null === e) throw "Running status byte encountered before status byte";
                    a = i, i = e, t.running = !0
                } else a = n.readUInt8(), e = i;
                var c = i >> 4;
                switch (t.channel = 15 & i, c) {
                    case 8:
                        return t.type = "noteOff", t.noteNumber = a, t.velocity = n.readUInt8(), t;
                    case 9:
                        var u = n.readUInt8();
                        return t.type = 0 === u ? "noteOff" : "noteOn", t.noteNumber = a, t.velocity = u, 0 === u && (t.byte9 = !0), t;
                    case 10:
                        return t.type = "noteAftertouch", t.noteNumber = a, t.amount = n.readUInt8(), t;
                    case 11:
                        return t.type = "controller", t.controllerType = a, t.value = n.readUInt8(), t;
                    case 12:
                        return t.type = "programChange", t.programNumber = a, t;
                    case 13:
                        return t.type = "channelAftertouch", t.amount = a, t;
                    case 14:
                        return t.type = "pitchBend", t.value = a + (n.readUInt8() << 7) - 8192, t;
                    default:
                        throw "Unrecognised MIDI event type: " + c
                }
            }
        }
    }

    function i(t) {
        this.buffer = t, this.bufferLen = this.buffer.length, this.pos = 0
    }
    i.prototype.eof = function () {
        return this.pos >= this.bufferLen
    }, i.prototype.readUInt8 = function () {
        var t = this.buffer[this.pos];
        return this.pos += 1, t
    }, i.prototype.readInt8 = function () {
        var t = this.readUInt8();
        return 128 & t ? t - 256 : t
    }, i.prototype.readUInt16 = function () {
        return (this.readUInt8() << 8) + this.readUInt8()
    }, i.prototype.readInt16 = function () {
        var t = this.readUInt16();
        return 32768 & t ? t - 65536 : t
    }, i.prototype.readUInt24 = function () {
        return (this.readUInt8() << 16) + (this.readUInt8() << 8) + this.readUInt8()
    }, i.prototype.readInt24 = function () {
        var t = this.readUInt24();
        return 8388608 & t ? t - 16777216 : t
    }, i.prototype.readUInt32 = function () {
        return (this.readUInt8() << 24) + (this.readUInt8() << 16) + (this.readUInt8() << 8) + this.readUInt8()
    }, i.prototype.readBytes = function (t) {
        var e = this.buffer.slice(this.pos, this.pos + t);
        return this.pos += t, e
    }, i.prototype.readString = function (t) {
        var e = this.readBytes(t);
        return String.fromCharCode.apply(null, e)
    }, i.prototype.readVarInt = function () {
        for (var t = 0; !this.eof();) {
            var e = this.readUInt8();
            if (!(128 & e)) return t + e;
            t += 127 & e, t <<= 7
        }
        return t
    }, i.prototype.readChunk = function () {
        var t = this.readString(4),
            e = this.readUInt32();
        return {
            id: t,
            length: e,
            data: this.readBytes(e)
        }
    }, t.exports = function (t) {
        var e = new i(t),
            r = e.readChunk();
        if ("MThd" != r.id) throw "Bad MIDI file.  Expected 'MHdr', got: '" + r.id + "'";
        for (var o = function (t) {
            var e = new i(t),
                n = e.readUInt16(),
                r = e.readUInt16(),
                o = {
                    format: n,
                    numTracks: r
                },
                s = e.readUInt16();
            32768 & s ? (o.framesPerSecond = 256 - (s >> 8), o.ticksPerFrame = 255 & s) : o.ticksPerBeat = s;
            return o
        }(r.data), s = [], a = 0; !e.eof() && a < o.numTracks; a++) {
            var c = e.readChunk();
            if ("MTrk" != c.id) throw "Bad MIDI file.  Expected 'MTrk', got: '" + c.id + "'";
            var u = n(c.data);
            s.push(u)
        }
        return {
            header: o,
            tracks: s
        }
    }
}, function (t, e) {
    function n(t, e, n) {
        var o, s = new r,
            a = e.length,
            c = null;
        for (o = 0; o < a; o++) !1 !== n.running && (n.running || e[o].running) || (c = null), c = i(s, e[o], c, n.useByte9ForNoteOff);
        t.writeChunk("MTrk", s.buffer)
    }

    function i(t, e, n, i) {
        var r = e.type,
            o = e.deltaTime,
            s = e.text || "",
            a = e.data || [],
            c = null;
        switch (t.writeVarInt(o), r) {
            case "sequenceNumber":
                t.writeUInt8(255), t.writeUInt8(0), t.writeVarInt(2), t.writeUInt16(e.number);
                break;
            case "text":
                t.writeUInt8(255), t.writeUInt8(1), t.writeVarInt(s.length), t.writeString(s);
                break;
            case "copyrightNotice":
                t.writeUInt8(255), t.writeUInt8(2), t.writeVarInt(s.length), t.writeString(s);
                break;
            case "trackName":
                t.writeUInt8(255), t.writeUInt8(3), t.writeVarInt(s.length), t.writeString(s);
                break;
            case "instrumentName":
                t.writeUInt8(255), t.writeUInt8(4), t.writeVarInt(s.length), t.writeString(s);
                break;
            case "lyrics":
                t.writeUInt8(255), t.writeUInt8(5), t.writeVarInt(s.length), t.writeString(s);
                break;
            case "marker":
                t.writeUInt8(255), t.writeUInt8(6), t.writeVarInt(s.length), t.writeString(s);
                break;
            case "cuePoint":
                t.writeUInt8(255), t.writeUInt8(7), t.writeVarInt(s.length), t.writeString(s);
                break;
            case "channelPrefix":
                t.writeUInt8(255), t.writeUInt8(32), t.writeVarInt(1), t.writeUInt8(e.channel);
                break;
            case "portPrefix":
                t.writeUInt8(255), t.writeUInt8(33), t.writeVarInt(1), t.writeUInt8(e.port);
                break;
            case "endOfTrack":
                t.writeUInt8(255), t.writeUInt8(47), t.writeVarInt(0);
                break;
            case "setTempo":
                t.writeUInt8(255), t.writeUInt8(81), t.writeVarInt(3), t.writeUInt24(e.microsecondsPerBeat);
                break;
            case "smpteOffset":
                t.writeUInt8(255), t.writeUInt8(84), t.writeVarInt(5);
                var u = 31 & e.hour | {
                    24: 0,
                    25: 32,
                    29: 64,
                    30: 96
                }[e.frameRate];
                t.writeUInt8(u), t.writeUInt8(e.min), t.writeUInt8(e.sec), t.writeUInt8(e.frame), t.writeUInt8(e.subFrame);
                break;
            case "timeSignature":
                t.writeUInt8(255), t.writeUInt8(88), t.writeVarInt(4), t.writeUInt8(e.numerator);
                var h = 255 & Math.floor(Math.log(e.denominator) / Math.LN2);
                t.writeUInt8(h), t.writeUInt8(e.metronome), t.writeUInt8(e.thirtyseconds || 8);
                break;
            case "keySignature":
                t.writeUInt8(255), t.writeUInt8(89), t.writeVarInt(2), t.writeInt8(e.key), t.writeUInt8(e.scale);
                break;
            case "sequencerSpecific":
                t.writeUInt8(255), t.writeUInt8(127), t.writeVarInt(a.length), t.writeBytes(a);
                break;
            case "unknownMeta":
                null != e.metatypeByte && (t.writeUInt8(255), t.writeUInt8(e.metatypeByte), t.writeVarInt(a.length), t.writeBytes(a));
                break;
            case "sysEx":
                t.writeUInt8(240), t.writeVarInt(a.length), t.writeBytes(a);
                break;
            case "endSysEx":
                t.writeUInt8(247), t.writeVarInt(a.length), t.writeBytes(a);
                break;
            case "noteOff":
                (c = (!1 !== i && e.byte9 || i && 0 == e.velocity ? 144 : 128) | e.channel) !== n && t.writeUInt8(c), t.writeUInt8(e.noteNumber), t.writeUInt8(e.velocity);
                break;
            case "noteOn":
                (c = 144 | e.channel) !== n && t.writeUInt8(c), t.writeUInt8(e.noteNumber), t.writeUInt8(e.velocity);
                break;
            case "noteAftertouch":
                (c = 160 | e.channel) !== n && t.writeUInt8(c), t.writeUInt8(e.noteNumber), t.writeUInt8(e.amount);
                break;
            case "controller":
                (c = 176 | e.channel) !== n && t.writeUInt8(c), t.writeUInt8(e.controllerType), t.writeUInt8(e.value);
                break;
            case "programChange":
                (c = 192 | e.channel) !== n && t.writeUInt8(c), t.writeUInt8(e.programNumber);
                break;
            case "channelAftertouch":
                (c = 208 | e.channel) !== n && t.writeUInt8(c), t.writeUInt8(e.amount);
                break;
            case "pitchBend":
                (c = 224 | e.channel) !== n && t.writeUInt8(c);
                var l = 8192 + e.value,
                    d = 127 & l,
                    p = l >> 7 & 127;
                t.writeUInt8(d), t.writeUInt8(p);
                break;
            default:
                throw "Unrecognized event type: " + r
        }
        return c
    }

    function r() {
        this.buffer = []
    }
    r.prototype.writeUInt8 = function (t) {
        this.buffer.push(255 & t)
    }, r.prototype.writeInt8 = r.prototype.writeUInt8, r.prototype.writeUInt16 = function (t) {
        var e = t >> 8 & 255,
            n = 255 & t;
        this.writeUInt8(e), this.writeUInt8(n)
    }, r.prototype.writeInt16 = r.prototype.writeUInt16, r.prototype.writeUInt24 = function (t) {
        var e = t >> 16 & 255,
            n = t >> 8 & 255,
            i = 255 & t;
        this.writeUInt8(e), this.writeUInt8(n), this.writeUInt8(i)
    }, r.prototype.writeInt24 = r.prototype.writeUInt24, r.prototype.writeUInt32 = function (t) {
        var e = t >> 24 & 255,
            n = t >> 16 & 255,
            i = t >> 8 & 255,
            r = 255 & t;
        this.writeUInt8(e), this.writeUInt8(n), this.writeUInt8(i), this.writeUInt8(r)
    }, r.prototype.writeInt32 = r.prototype.writeUInt32, r.prototype.writeBytes = function (t) {
        this.buffer = this.buffer.concat(Array.prototype.slice.call(t, 0))
    }, r.prototype.writeString = function (t) {
        var e, n = t.length,
            i = [];
        for (e = 0; e < n; e++) i.push(t.codePointAt(e));
        this.writeBytes(i)
    }, r.prototype.writeVarInt = function (t) {
        if (t < 0) throw "Cannot write negative variable-length integer";
        if (t <= 127) this.writeUInt8(t);
        else {
            var e = t,
                n = [];
            for (n.push(127 & e), e >>= 7; e;) {
                var i = 127 & e | 128;
                n.push(i), e >>= 7
            }
            this.writeBytes(n.reverse())
        }
    }, r.prototype.writeChunk = function (t, e) {
        this.writeString(t), this.writeUInt32(e.length), this.writeBytes(e)
    }, t.exports = function (t, e) {
        if ("object" != typeof t) throw "Invalid MIDI data";
        e = e || {};
        var i, o = t.header || {},
            s = t.tracks || [],
            a = s.length,
            c = new r;
        for (function (t, e, n) {
            var i = null == e.format ? 1 : e.format,
                o = 128;
            e.timeDivision ? o = e.timeDivision : e.ticksPerFrame && e.framesPerSecond ? o = -(255 & e.framesPerSecond) << 8 | 255 & e.ticksPerFrame : e.ticksPerBeat && (o = 32767 & e.ticksPerBeat);
            var s = new r;
            s.writeUInt16(i), s.writeUInt16(n), s.writeUInt16(o), t.writeChunk("MThd", s.buffer)
        }(c, o, a), i = 0; i < a; i++) n(c, s[i], e);
        return c.buffer
    }
}, function (t, e, n) {
    (e = n(24)(!1)).push([t.i, '.modal .big-button{font-size:40px;line-height:125px;height:125px;text-transform:uppercase;border-radius:62.5px;background-color:#16a8f0;color:#fff;cursor:pointer;display:inline-block;padding:0 62.5px;box-shadow:1px 1px 1px 1px rgba(0,0,0,.2)}@media(max-width: 767px){.modal .big-button{font-size:16px;line-height:50px;height:50px;text-transform:uppercase;border-radius:25px;background-color:#16a8f0;color:#fff;cursor:pointer;display:inline-block;padding:0 25px}}#about-modal .footnote,#settings-modal .select-wrap .dupe,#settings-modal .setting-group select,#settings-modal .quantity-cover,.modal{font-family:"Poppins",sans-serif;letter-spacing:.1ex}#loading-modal .circular-loader{height:100%;width:100%;position:absolute;top:0;left:0;transition:all .1s linear}#loading-modal .circular-loader .loader-path{stroke:#16a8f0;stroke-dasharray:120;animation:dash 1.5s linear 0s infinite;animation-fill-mode:both;stroke-linecap:round;transform-origin:center center}@keyframes dash{0%{stroke-dashoffset:120}50%{stroke-dashoffset:30;transform:rotate(240deg)}100%{stroke-dashoffset:120;transform:rotate(720deg)}}.modal{position:absolute;top:0;left:0;height:100%;width:100%;text-align:center;font-size:21px;overflow:auto;background-color:#fff;z-index:100;opacity:0;pointer-events:none}.modal.visible{opacity:1;pointer-events:initial}.modal .text{width:100%;padding:20px;text-align:center;margin-bottom:30px;margin-top:80px;font-size:20px}.modal.open-midi,.modal.open-pitch{transition:opacity .3s;height:calc(100% - 190px);top:81px}@media(max-width: 767px){.modal.open-midi,.modal.open-pitch{height:calc(100% - 60px - 80px);top:60px}}@media(max-width: 495px){.modal.open-midi,.modal.open-pitch{height:calc(100% - 60px - 125px)}}.modal .medium-button{font-size:24px;line-height:60px;height:60px;text-transform:uppercase;border-radius:30px;background-color:#16a8f0;color:#fff;cursor:pointer;display:inline-block;padding:0 30px;text-transform:none;box-shadow:1px 2px 4px 1px #f5f5f5}.modal .medium-button:before{width:24px;height:24px;content:"\\a";display:inline-block;vertical-align:top;background-repeat:no-repeat;transform:translateY(18px)}.modal .medium-button:after{margin-left:11px}@media(max-width: 767px){.modal .medium-button{font-size:14px;line-height:40px;height:40px;text-transform:uppercase;border-radius:20px;background-color:#16a8f0;color:#fff;cursor:pointer;display:inline-block;padding:0 20px;text-transform:none}.modal .medium-button:after{margin-left:10px}.modal .medium-button:before{transform:translateY(12px);background-size:contain;width:15px;height:15px}}.modal .big-button{margin-top:80px;clear:both}.modal .big-button:before{width:45px;height:45px;content:"\\a";display:inline-block;vertical-align:top;background-repeat:no-repeat}.modal .big-button:after{margin-left:30px}@media(max-width: 767px){.modal .big-button:after{margin-left:12px}.modal .big-button:before{background-size:contain;width:15px;height:15px}}.modal #submit{position:relative;width:0}.modal #submit:before,.modal #submit:after{display:none}.modal #submit svg{left:50%;top:50%;transform:translate(-50%, -50%);position:absolute;position:absolute;width:48%;margin-left:3px}@media(max-width: 767px){.modal #submit svg{margin-left:1px}}.modal #cancel{width:60px;height:60px;border-radius:30px;background:#fff;cursor:pointer;display:inline-block;position:relative;box-shadow:1px 1px 1px 1px rgba(0,0,0,.2);position:absolute;top:20px;right:20px;z-index:1}.modal #cancel img{width:100%;height:100%}.modal #cancel img{left:50%;top:50%;transform:translate(-50%, -50%);position:absolute;max-width:40%;max-height:40%}.modal.start-song #expand-button{font-size:16px;margin-bottom:20px}.modal.start-song .expandable{text-align:center;padding-top:80px}@media(max-width: 767px){.modal.start-song .expandable{padding-top:70px}}.modal .expandable{position:relative}.modal .expandable-inner{max-width:1100px;margin:0 auto;padding:0 30px}.modal .expandable-inner:after{content:"";display:table;clear:both}.modal.fadeout{transition:opacity 1s;opacity:0}@media(max-width: 767px){.modal{font-size:15px}.modal .text{margin-bottom:10px;margin-top:60px}.modal #cancel{width:40px;height:40px;border-radius:20px;background:#fff;cursor:pointer;display:inline-block;position:relative;box-shadow:1px 1px 1px 1px rgba(0,0,0,.2);position:absolute;top:20px;right:20px}.modal #cancel img{width:100%;height:100%}.modal #cancel img{left:50%;top:50%;transform:translate(-50%, -50%);position:absolute;max-width:40%;max-height:40%}.modal #submit{margin-top:30px;margin-bottom:30px}.modal #submit:after{margin-left:10px}.modal .expandable-inner{padding:0 20px}}#loading-modal{display:flex;align-items:center;justify-content:center;position:relative;height:100%;flex-direction:column}#loading-modal img{display:block;max-width:336px;max-height:calc(70% - 100px);width:70%}#loading-modal .circle{width:10vw;height:10vw;position:relative;margin-top:3vw;min-height:60px;min-width:60px;max-height:120px;max-width:120px}#loading-modal .circular-loader .loader-path{stroke:#f5f5f5}#settings-modal{display:flex;align-items:center;min-height:100vh}#settings-modal .quantity{height:35px;overflow:hidden}#settings-modal .quantity input:not(.quantity-cover){visibility:hidden;height:1px;width:1px;z-index:-1;position:absolute}#settings-modal .quantity-button{width:30px;height:30px;border-radius:15px;background:#fff;cursor:pointer;display:inline-block;position:relative;float:right;margin-left:10px}#settings-modal .quantity-button img{width:100%;height:100%}#settings-modal .quantity-label{display:inline-block;line-height:35px;float:right;margin-right:10px;color:#16a8f0}#settings-modal .quantity-cover{display:inline-block;line-height:35px;float:right;color:#16a8f0;font-size:21px;padding:0 8px;width:3em;border:0;text-align:right;margin:0}@media(max-width: 767px){#settings-modal .quantity-cover{font-size:15px}}#settings-modal .setting-group{border-bottom:1px #f5f5f5 solid;padding:30px 0;position:relative;height:96px}#settings-modal .setting-group:after{content:"";display:table;clear:both}#settings-modal .setting-group .quantity{float:right}#settings-modal .setting-group label{float:left;line-height:35px;color:#666}#settings-modal .setting-group select{background:transparent;border:none;height:29px;color:#16a8f0;font-size:21px;margin-left:20px;width:calc(100% + 20px);-webkit-appearance:none;transition:opacity .2s}#settings-modal .setting-group select#rootPitch{margin-left:17px}#settings-modal .expandable-inner{width:100%}#settings-modal .setting-column{width:46%}#settings-modal .setting-column--left{float:left}#settings-modal .setting-column--right{float:right}#settings-modal .select-wrap{display:inline-block;float:right;position:relative;overflow:hidden;background:url(/Song-Maker/client/images/icon-down-caret.svg) no-repeat right center;padding-right:24px;top:-2px}#settings-modal .select-wrap .dupe{font-size:21px;white-space:nowrap;position:absolute;opacity:0;pointer-events:none}@media(max-width: 767px){#settings-modal .setting-column{width:100%}#settings-modal .setting-group{height:auto;padding:20px 0}#settings-modal .setting-group select{font-size:15px}#settings-modal .setting-column--left,#settings-modal .setting-column--right{float:none}#settings-modal .select-wrap{top:2px}#settings-modal .select-wrap .dupe{font-size:15px}}@media(max-width: 495px){#settings-modal .setting-group{padding:8px 0}#settings-modal .setting-group select,#settings-modal .setting-group label{font-size:14px}#settings-modal .select-wrap .dupe{font-size:15px}}#reset-song-options{display:block;margin-top:1em;text-align:center;cursor:pointer;font-size:18px;text-transform:uppercase;color:#666;margin-top:46px}@media(max-width: 767px){#reset-song-options{margin-top:28px;font-size:14px}}#midi-modal,#pitch-modal{text-align:center;top:0;height:100%;position:absolute;width:100%;overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column}#midi-modal img,#pitch-modal img{margin:0 auto;display:block;max-width:384px;max-height:calc(70% - 100px);width:70%}#midi-modal h2,#pitch-modal h2{color:#666;font-weight:400;text-align:center;padding:0 30px;margin-top:4rem;font-size:20px}#about-modal h3{font-family:"Quicksand",sans-serif;font-size:23px;text-transform:uppercase;color:#9e9e9e;letter-spacing:.1ch}#about-modal h3 strong{color:#000}@media(max-width: 495px){#about-modal h3{line-height:1.4}#about-modal h3 strong{display:block}}#about-modal p{font-size:18px;color:#000;letter-spacing:0}#about-modal #about-top{background-color:#f4f2ef;padding:40px 0 20px}#about-modal .expandable-inner{padding-top:40px;padding-bottom:60px;text-align:left;max-width:740px}#about-modal .expandable-inner a{color:#f4a806}@media(max-width: 767px){#about-modal .expandable-inner{padding-top:30px;padding-bottom:30px}}#about-modal .footnote{font-size:18px;color:#000;background:#fff}#about-modal .footnote a{color:#f4a806;text-decoration:none}#about-modal .chrome-experiment{background-image:url(/Song-Maker/client/images/chrome_experiment.svg);width:125px;height:120px;background-repeat:no-repeat;background-position:left center;background-size:100%}#incompatible{width:100%;height:calc(100vh - 81px);position:absolute;top:81px;left:0;z-index:101;background:#fff;display:block;display:flex;justify-items:center;align-items:center;justify-content:center;font-size:30px;line-height:1.4}#incompatible p{text-align:center;color:#666}#incompatible img{margin-bottom:5vh;max-width:70%}@media(max-width: 767px){#incompatible{top:60px;height:calc(100vh - 60px)}}@media(max-width: 767px){#incompatible{font-size:24px}}.modal.open-back.visible{background-color:transparent}.modal.open-back.visible #back-modal{padding:18px;text-align:left;width:273px;height:157px;left:30px;position:fixed;top:70px;box-shadow:1px 1px 1px 1px rgba(0,0,0,.2);border:1px solid #f5f5f5;font-size:15px;color:#666;overflow:hidden;background-color:#fff}.modal.open-back.visible #back-modal img{display:block;margin:0 auto}.modal.open-back.visible #back-modal h5{color:#000;font-size:18px;margin:0}.modal.open-back.visible #back-modal p{margin:15px 0;line-height:20px;white-space:nowrap}.modal.open-back.visible #back-modal a{display:inline-block;cursor:pointer}@media(max-width: 767px){.modal.open-back.visible #back-modal{top:55px}}@media(max-width: 495px){.modal.open-back.visible #back-modal{padding:15px 10px;width:300px;height:192px;left:10px}}.modal.open-back.visible #back-modal #back-modal-cancel,.modal.open-back.visible #back-modal #back-modal-confirm{color:#16a8f0;margin-left:20px}.modal.open-back.visible #back-modal .links{text-align:right}', ""]), e.locals = {
        blue: "#16a8f0",
        red: "red",
        lightGrayFill: "#e6e6e6",
        darkGrayFill: "#a0a0a0",
        "background-gray": "#f5f5f5",
        veryLightGrayFill: "#f5f5f5",
        black: "#000",
        white: "#fff",
        orange: "#f4a806",
        "icon-label-gray": "#666",
        "gray-text": "#666",
        "about-gray-text": "#9e9e9e"
    }, t.exports = e
}, function (t, e) {
    var n, i, r = t.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    } ! function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
            n = o
        }
        try {
            i = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
            i = s
        }
    }();
    var c, u = [],
        h = !1,
        l = -1;

    function d() {
        h && c && (h = !1, c.length ? u = c.concat(u) : l = -1, u.length && p())
    }

    function p() {
        if (!h) {
            var t = a(d);
            h = !0;
            for (var e = u.length; e;) {
                for (c = u, u = []; ++l < e;) c && c[l].run();
                l = -1, e = u.length
            }
            c = null, h = !1,
                function (t) {
                    if (i === clearTimeout) return clearTimeout(t);
                    if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
                    try {
                        i(t)
                    } catch (e) {
                        try {
                            return i.call(null, t)
                        } catch (e) {
                            return i.call(this, t)
                        }
                    }
                }(t)
        }
    }

    function f(t, e) {
        this.fun = t, this.array = e
    }

    function m() { }
    r.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        u.push(new f(t, e)), 1 !== u.length || h || a(p)
    }, f.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = m, r.addListener = m, r.once = m, r.off = m, r.removeListener = m, r.removeAllListeners = m, r.emit = m, r.prependListener = m, r.prependOnceListener = m, r.listeners = function (t) {
        return []
    }, r.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, r.cwd = function () {
        return "/"
    }, r.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, r.umask = function () {
        return 0
    }
}, function (t, e, n) {
    "use strict";
    const i = n(716),
        r = n(528),
        o = n(721);

    function s(t, e) {
        switch (r(t)) {
            case "object":
                return function (t, e) {
                    if ("function" == typeof e) return e(t);
                    if (e || o(t)) {
                        const n = new t.constructor;
                        for (let i in t) n[i] = s(t[i], e);
                        return n
                    }
                    return t
                }(t, e);
            case "array":
                return function (t, e) {
                    const n = new t.constructor(t.length);
                    for (let i = 0; i < t.length; i++) n[i] = s(t[i], e);
                    return n
                }(t, e);
            default:
                return i(t)
        }
    }
    t.exports = s
}, function (t, e, n) {
    "use strict";
    (function (e) {
        /*!
         * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
         *
         * Copyright (c) 2015-present, Jon Schlinkert.
         * Released under the MIT License.
         */
        const i = Symbol.prototype.valueOf,
            r = n(528);
        t.exports = function (t, n) {
            switch (r(t)) {
                case "array":
                    return t.slice();
                case "object":
                    return Object.assign({}, t);
                case "date":
                    return new t.constructor(Number(t));
                case "map":
                    return new Map(t);
                case "set":
                    return new Set(t);
                case "buffer":
                    return function (t) {
                        const n = t.length,
                            i = e.allocUnsafe ? e.allocUnsafe(n) : e.from(n);
                        return t.copy(i), i
                    }(t);
                case "symbol":
                    return function (t) {
                        return i ? Object(i.call(t)) : {}
                    }(t);
                case "arraybuffer":
                    return function (t) {
                        const e = new t.constructor(t.byteLength);
                        return new Uint8Array(e).set(new Uint8Array(t)), e
                    }(t);
                case "float32array":
                case "float64array":
                case "int16array":
                case "int32array":
                case "int8array":
                case "uint16array":
                case "uint32array":
                case "uint8clampedarray":
                case "uint8array":
                    return function (t, e) {
                        return new t.constructor(t.buffer, t.byteOffset, t.length)
                    }(t);
                case "regexp":
                    return function (t) {
                        const e = void 0 !== t.flags ? t.flags : /\w+$/.exec(t) || void 0,
                            n = new t.constructor(t.source, e);
                        return n.lastIndex = t.lastIndex, n
                    }(t);
                case "error":
                    return Object.create(t);
                default:
                    return t
            }
        }
    }).call(this, n(717).Buffer)
}, function (t, e, n) {
    "use strict";
    (function (t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        var i = n(718),
            r = n(719),
            o = n(720);

        function s() {
            return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function a(t, e) {
            if (s() < e) throw new RangeError("Invalid typed array length");
            return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = c.prototype : (null === t && (t = new c(e)), t.length = e), t
        }

        function c(t, e, n) {
            if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, n);
            if ("number" == typeof t) {
                if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                return l(this, t)
            }
            return u(this, t, e, n)
        }

        function u(t, e, n, i) {
            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, n, i) {
                if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");
                e = void 0 === n && void 0 === i ? new Uint8Array(e) : void 0 === i ? new Uint8Array(e, n) : new Uint8Array(e, n, i);
                c.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = c.prototype : t = d(t, e);
                return t
            }(t, e, n, i) : "string" == typeof e ? function (t, e, n) {
                "string" == typeof n && "" !== n || (n = "utf8");
                if (!c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var i = 0 | f(e, n),
                    r = (t = a(t, i)).write(e, n);
                r !== i && (t = t.slice(0, r));
                return t
            }(t, e, n) : function (t, e) {
                if (c.isBuffer(e)) {
                    var n = 0 | p(e.length);
                    return 0 === (t = a(t, n)).length || e.copy(t, 0, 0, n), t
                }
                if (e) {
                    if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (i = e.length) != i ? a(t, 0) : d(t, e);
                    if ("Buffer" === e.type && o(e.data)) return d(t, e.data)
                }
                var i;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(t, e)
        }

        function h(t) {
            if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
            if (t < 0) throw new RangeError('"size" argument must not be negative')
        }

        function l(t, e) {
            if (h(e), t = a(t, e < 0 ? 0 : 0 | p(e)), !c.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < e; ++n) t[n] = 0;
            return t
        }

        function d(t, e) {
            var n = e.length < 0 ? 0 : 0 | p(e.length);
            t = a(t, n);
            for (var i = 0; i < n; i += 1) t[i] = 255 & e[i];
            return t
        }

        function p(t) {
            if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
            return 0 | t
        }

        function f(t, e) {
            if (c.isBuffer(t)) return t.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
            "string" != typeof t && (t = "" + t);
            var n = t.length;
            if (0 === n) return 0;
            for (var i = !1; ;) switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return F(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return V(t).length;
                default:
                    if (i) return F(t).length;
                    e = ("" + e).toLowerCase(), i = !0
            }
        }

        function m(t, e, n) {
            var i = !1;
            if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
            if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
            if ((n >>>= 0) <= (e >>>= 0)) return "";
            for (t || (t = "utf8"); ;) switch (t) {
                case "hex":
                    return M(this, e, n);
                case "utf8":
                case "utf-8":
                    return k(this, e, n);
                case "ascii":
                    return E(this, e, n);
                case "latin1":
                case "binary":
                    return O(this, e, n);
                case "base64":
                    return C(this, e, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return I(this, e, n);
                default:
                    if (i) throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(), i = !0
            }
        }

        function g(t, e, n) {
            var i = t[e];
            t[e] = t[n], t[n] = i
        }

        function v(t, e, n, i, r) {
            if (0 === t.length) return -1;
            if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = r ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                if (r) return -1;
                n = t.length - 1
            } else if (n < 0) {
                if (!r) return -1;
                n = 0
            }
            if ("string" == typeof e && (e = c.from(e, i)), c.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, n, i, r);
            if ("number" == typeof e) return e &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : b(t, [e], n, i, r);
            throw new TypeError("val must be string, number or Buffer")
        }

        function b(t, e, n, i, r) {
            var o, s = 1,
                a = t.length,
                c = e.length;
            if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                if (t.length < 2 || e.length < 2) return -1;
                s = 2, a /= 2, c /= 2, n /= 2
            }

            function u(t, e) {
                return 1 === s ? t[e] : t.readUInt16BE(e * s)
            }
            if (r) {
                var h = -1;
                for (o = n; o < a; o++)
                    if (u(t, o) === u(e, -1 === h ? 0 : o - h)) {
                        if (-1 === h && (h = o), o - h + 1 === c) return h * s
                    } else -1 !== h && (o -= o - h), h = -1
            } else
                for (n + c > a && (n = a - c), o = n; o >= 0; o--) {
                    for (var l = !0, d = 0; d < c; d++)
                        if (u(t, o + d) !== u(e, d)) {
                            l = !1;
                            break
                        } if (l) return o
                }
            return -1
        }

        function y(t, e, n, i) {
            n = Number(n) || 0;
            var r = t.length - n;
            i ? (i = Number(i)) > r && (i = r) : i = r;
            var o = e.length;
            if (o % 2 != 0) throw new TypeError("Invalid hex string");
            i > o / 2 && (i = o / 2);
            for (var s = 0; s < i; ++s) {
                var a = parseInt(e.substr(2 * s, 2), 16);
                if (isNaN(a)) return s;
                t[n + s] = a
            }
            return s
        }

        function _(t, e, n, i) {
            return q(F(e, t.length - n), t, n, i)
        }

        function w(t, e, n, i) {
            return q(function (t) {
                for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                return e
            }(e), t, n, i)
        }

        function x(t, e, n, i) {
            return w(t, e, n, i)
        }

        function T(t, e, n, i) {
            return q(V(e), t, n, i)
        }

        function S(t, e, n, i) {
            return q(function (t, e) {
                for (var n, i, r, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) n = t.charCodeAt(s), i = n >> 8, r = n % 256, o.push(r), o.push(i);
                return o
            }(e, t.length - n), t, n, i)
        }

        function C(t, e, n) {
            return 0 === e && n === t.length ? i.fromByteArray(t) : i.fromByteArray(t.slice(e, n))
        }

        function k(t, e, n) {
            n = Math.min(t.length, n);
            for (var i = [], r = e; r < n;) {
                var o, s, a, c, u = t[r],
                    h = null,
                    l = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                if (r + l <= n) switch (l) {
                    case 1:
                        u < 128 && (h = u);
                        break;
                    case 2:
                        128 == (192 & (o = t[r + 1])) && (c = (31 & u) << 6 | 63 & o) > 127 && (h = c);
                        break;
                    case 3:
                        o = t[r + 1], s = t[r + 2], 128 == (192 & o) && 128 == (192 & s) && (c = (15 & u) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (c < 55296 || c > 57343) && (h = c);
                        break;
                    case 4:
                        o = t[r + 1], s = t[r + 2], a = t[r + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (c = (15 & u) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && c < 1114112 && (h = c)
                }
                null === h ? (h = 65533, l = 1) : h > 65535 && (h -= 65536, i.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), i.push(h), r += l
            }
            return function (t) {
                var e = t.length;
                if (e <= 4096) return String.fromCharCode.apply(String, t);
                var n = "",
                    i = 0;
                for (; i < e;) n += String.fromCharCode.apply(String, t.slice(i, i += 4096));
                return n
            }(i)
        }
        e.Buffer = c, e.SlowBuffer = function (t) {
            +t != t && (t = 0);
            return c.alloc(+t)
        }, e.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
            try {
                var t = new Uint8Array(1);
                return t.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function () {
                        return 42
                    }
                }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
            } catch (t) {
                return !1
            }
        }(), e.kMaxLength = s(), c.poolSize = 8192, c._augment = function (t) {
            return t.__proto__ = c.prototype, t
        }, c.from = function (t, e, n) {
            return u(null, t, e, n)
        }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
            value: null,
            configurable: !0
        })), c.alloc = function (t, e, n) {
            return function (t, e, n, i) {
                return h(e), e <= 0 ? a(t, e) : void 0 !== n ? "string" == typeof i ? a(t, e).fill(n, i) : a(t, e).fill(n) : a(t, e)
            }(null, t, e, n)
        }, c.allocUnsafe = function (t) {
            return l(null, t)
        }, c.allocUnsafeSlow = function (t) {
            return l(null, t)
        }, c.isBuffer = function (t) {
            return !(null == t || !t._isBuffer)
        }, c.compare = function (t, e) {
            if (!c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (var n = t.length, i = e.length, r = 0, o = Math.min(n, i); r < o; ++r)
                if (t[r] !== e[r]) {
                    n = t[r], i = e[r];
                    break
                } return n < i ? -1 : i < n ? 1 : 0
        }, c.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, c.concat = function (t, e) {
            if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return c.alloc(0);
            var n;
            if (void 0 === e)
                for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
            var i = c.allocUnsafe(e),
                r = 0;
            for (n = 0; n < t.length; ++n) {
                var s = t[n];
                if (!c.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(i, r), r += s.length
            }
            return i
        }, c.byteLength = f, c.prototype._isBuffer = !0, c.prototype.swap16 = function () {
            var t = this.length;
            if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) g(this, e, e + 1);
            return this
        }, c.prototype.swap32 = function () {
            var t = this.length;
            if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4) g(this, e, e + 3), g(this, e + 1, e + 2);
            return this
        }, c.prototype.swap64 = function () {
            var t = this.length;
            if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8) g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
            return this
        }, c.prototype.toString = function () {
            var t = 0 | this.length;
            return 0 === t ? "" : 0 === arguments.length ? k(this, 0, t) : m.apply(this, arguments)
        }, c.prototype.equals = function (t) {
            if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === c.compare(this, t)
        }, c.prototype.inspect = function () {
            var t = "",
                n = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
        }, c.prototype.compare = function (t, e, n, i, r) {
            if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === i && (i = 0), void 0 === r && (r = this.length), e < 0 || n > t.length || i < 0 || r > this.length) throw new RangeError("out of range index");
            if (i >= r && e >= n) return 0;
            if (i >= r) return -1;
            if (e >= n) return 1;
            if (this === t) return 0;
            for (var o = (r >>>= 0) - (i >>>= 0), s = (n >>>= 0) - (e >>>= 0), a = Math.min(o, s), u = this.slice(i, r), h = t.slice(e, n), l = 0; l < a; ++l)
                if (u[l] !== h[l]) {
                    o = u[l], s = h[l];
                    break
                } return o < s ? -1 : s < o ? 1 : 0
        }, c.prototype.includes = function (t, e, n) {
            return -1 !== this.indexOf(t, e, n)
        }, c.prototype.indexOf = function (t, e, n) {
            return v(this, t, e, n, !0)
        }, c.prototype.lastIndexOf = function (t, e, n) {
            return v(this, t, e, n, !1)
        }, c.prototype.write = function (t, e, n, i) {
            if (void 0 === e) i = "utf8", n = this.length, e = 0;
            else if (void 0 === n && "string" == typeof e) i = e, n = this.length, e = 0;
            else {
                if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e |= 0, isFinite(n) ? (n |= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0)
            }
            var r = this.length - e;
            if ((void 0 === n || n > r) && (n = r), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            i || (i = "utf8");
            for (var o = !1; ;) switch (i) {
                case "hex":
                    return y(this, t, e, n);
                case "utf8":
                case "utf-8":
                    return _(this, t, e, n);
                case "ascii":
                    return w(this, t, e, n);
                case "latin1":
                case "binary":
                    return x(this, t, e, n);
                case "base64":
                    return T(this, t, e, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return S(this, t, e, n);
                default:
                    if (o) throw new TypeError("Unknown encoding: " + i);
                    i = ("" + i).toLowerCase(), o = !0
            }
        }, c.prototype.toJSON = function () {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };

        function E(t, e, n) {
            var i = "";
            n = Math.min(t.length, n);
            for (var r = e; r < n; ++r) i += String.fromCharCode(127 & t[r]);
            return i
        }

        function O(t, e, n) {
            var i = "";
            n = Math.min(t.length, n);
            for (var r = e; r < n; ++r) i += String.fromCharCode(t[r]);
            return i
        }

        function M(t, e, n) {
            var i = t.length;
            (!e || e < 0) && (e = 0), (!n || n < 0 || n > i) && (n = i);
            for (var r = "", o = e; o < n; ++o) r += U(t[o]);
            return r
        }

        function I(t, e, n) {
            for (var i = t.slice(e, n), r = "", o = 0; o < i.length; o += 2) r += String.fromCharCode(i[o] + 256 * i[o + 1]);
            return r
        }

        function A(t, e, n) {
            if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
            if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
        }

        function R(t, e, n, i, r, o) {
            if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > r || e < o) throw new RangeError('"value" argument is out of bounds');
            if (n + i > t.length) throw new RangeError("Index out of range")
        }

        function P(t, e, n, i) {
            e < 0 && (e = 65535 + e + 1);
            for (var r = 0, o = Math.min(t.length - n, 2); r < o; ++r) t[n + r] = (e & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
        }

        function D(t, e, n, i) {
            e < 0 && (e = 4294967295 + e + 1);
            for (var r = 0, o = Math.min(t.length - n, 4); r < o; ++r) t[n + r] = e >>> 8 * (i ? r : 3 - r) & 255
        }

        function j(t, e, n, i, r, o) {
            if (n + i > t.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range")
        }

        function N(t, e, n, i, o) {
            return o || j(t, 0, n, 4), r.write(t, e, n, i, 23, 4), n + 4
        }

        function L(t, e, n, i, o) {
            return o || j(t, 0, n, 8), r.write(t, e, n, i, 52, 8), n + 8
        }
        c.prototype.slice = function (t, e) {
            var n, i = this.length;
            if ((t = ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i), (e = void 0 === e ? i : ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i), e < t && (e = t), c.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = c.prototype;
            else {
                var r = e - t;
                n = new c(r, void 0);
                for (var o = 0; o < r; ++o) n[o] = this[o + t]
            }
            return n
        }, c.prototype.readUIntLE = function (t, e, n) {
            t |= 0, e |= 0, n || A(t, e, this.length);
            for (var i = this[t], r = 1, o = 0; ++o < e && (r *= 256);) i += this[t + o] * r;
            return i
        }, c.prototype.readUIntBE = function (t, e, n) {
            t |= 0, e |= 0, n || A(t, e, this.length);
            for (var i = this[t + --e], r = 1; e > 0 && (r *= 256);) i += this[t + --e] * r;
            return i
        }, c.prototype.readUInt8 = function (t, e) {
            return e || A(t, 1, this.length), this[t]
        }, c.prototype.readUInt16LE = function (t, e) {
            return e || A(t, 2, this.length), this[t] | this[t + 1] << 8
        }, c.prototype.readUInt16BE = function (t, e) {
            return e || A(t, 2, this.length), this[t] << 8 | this[t + 1]
        }, c.prototype.readUInt32LE = function (t, e) {
            return e || A(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        }, c.prototype.readUInt32BE = function (t, e) {
            return e || A(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        }, c.prototype.readIntLE = function (t, e, n) {
            t |= 0, e |= 0, n || A(t, e, this.length);
            for (var i = this[t], r = 1, o = 0; ++o < e && (r *= 256);) i += this[t + o] * r;
            return i >= (r *= 128) && (i -= Math.pow(2, 8 * e)), i
        }, c.prototype.readIntBE = function (t, e, n) {
            t |= 0, e |= 0, n || A(t, e, this.length);
            for (var i = e, r = 1, o = this[t + --i]; i > 0 && (r *= 256);) o += this[t + --i] * r;
            return o >= (r *= 128) && (o -= Math.pow(2, 8 * e)), o
        }, c.prototype.readInt8 = function (t, e) {
            return e || A(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
        }, c.prototype.readInt16LE = function (t, e) {
            e || A(t, 2, this.length);
            var n = this[t] | this[t + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, c.prototype.readInt16BE = function (t, e) {
            e || A(t, 2, this.length);
            var n = this[t + 1] | this[t] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, c.prototype.readInt32LE = function (t, e) {
            return e || A(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        }, c.prototype.readInt32BE = function (t, e) {
            return e || A(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        }, c.prototype.readFloatLE = function (t, e) {
            return e || A(t, 4, this.length), r.read(this, t, !0, 23, 4)
        }, c.prototype.readFloatBE = function (t, e) {
            return e || A(t, 4, this.length), r.read(this, t, !1, 23, 4)
        }, c.prototype.readDoubleLE = function (t, e) {
            return e || A(t, 8, this.length), r.read(this, t, !0, 52, 8)
        }, c.prototype.readDoubleBE = function (t, e) {
            return e || A(t, 8, this.length), r.read(this, t, !1, 52, 8)
        }, c.prototype.writeUIntLE = function (t, e, n, i) {
            (t = +t, e |= 0, n |= 0, i) || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var r = 1,
                o = 0;
            for (this[e] = 255 & t; ++o < n && (r *= 256);) this[e + o] = t / r & 255;
            return e + n
        }, c.prototype.writeUIntBE = function (t, e, n, i) {
            (t = +t, e |= 0, n |= 0, i) || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var r = n - 1,
                o = 1;
            for (this[e + r] = 255 & t; --r >= 0 && (o *= 256);) this[e + r] = t / o & 255;
            return e + n
        }, c.prototype.writeUInt8 = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
        }, c.prototype.writeUInt16LE = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : P(this, t, e, !0), e + 2
        }, c.prototype.writeUInt16BE = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : P(this, t, e, !1), e + 2
        }, c.prototype.writeUInt32LE = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : D(this, t, e, !0), e + 4
        }, c.prototype.writeUInt32BE = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : D(this, t, e, !1), e + 4
        }, c.prototype.writeIntLE = function (t, e, n, i) {
            if (t = +t, e |= 0, !i) {
                var r = Math.pow(2, 8 * n - 1);
                R(this, t, e, n, r - 1, -r)
            }
            var o = 0,
                s = 1,
                a = 0;
            for (this[e] = 255 & t; ++o < n && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
            return e + n
        }, c.prototype.writeIntBE = function (t, e, n, i) {
            if (t = +t, e |= 0, !i) {
                var r = Math.pow(2, 8 * n - 1);
                R(this, t, e, n, r - 1, -r)
            }
            var o = n - 1,
                s = 1,
                a = 0;
            for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
            return e + n
        }, c.prototype.writeInt8 = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
        }, c.prototype.writeInt16LE = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : P(this, t, e, !0), e + 2
        }, c.prototype.writeInt16BE = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : P(this, t, e, !1), e + 2
        }, c.prototype.writeInt32LE = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : D(this, t, e, !0), e + 4
        }, c.prototype.writeInt32BE = function (t, e, n) {
            return t = +t, e |= 0, n || R(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : D(this, t, e, !1), e + 4
        }, c.prototype.writeFloatLE = function (t, e, n) {
            return N(this, t, e, !0, n)
        }, c.prototype.writeFloatBE = function (t, e, n) {
            return N(this, t, e, !1, n)
        }, c.prototype.writeDoubleLE = function (t, e, n) {
            return L(this, t, e, !0, n)
        }, c.prototype.writeDoubleBE = function (t, e, n) {
            return L(this, t, e, !1, n)
        }, c.prototype.copy = function (t, e, n, i) {
            if (n || (n = 0), i || 0 === i || (i = this.length), e >= t.length && (e = t.length), e || (e = 0), i > 0 && i < n && (i = n), i === n) return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
            if (i < 0) throw new RangeError("sourceEnd out of bounds");
            i > this.length && (i = this.length), t.length - e < i - n && (i = t.length - e + n);
            var r, o = i - n;
            if (this === t && n < e && e < i)
                for (r = o - 1; r >= 0; --r) t[r + e] = this[r + n];
            else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                for (r = 0; r < o; ++r) t[r + e] = this[r + n];
            else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
            return o
        }, c.prototype.fill = function (t, e, n, i) {
            if ("string" == typeof t) {
                if ("string" == typeof e ? (i = e, e = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), 1 === t.length) {
                    var r = t.charCodeAt(0);
                    r < 256 && (t = r)
                }
                if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                if ("string" == typeof i && !c.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
            if (n <= e) return this;
            var o;
            if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
                for (o = e; o < n; ++o) this[o] = t;
            else {
                var s = c.isBuffer(t) ? t : F(new c(t, i).toString()),
                    a = s.length;
                for (o = 0; o < n - e; ++o) this[o + e] = s[o % a]
            }
            return this
        };
        var B = /[^+\/0-9A-Za-z-_]/g;

        function U(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16)
        }

        function F(t, e) {
            var n;
            e = e || 1 / 0;
            for (var i = t.length, r = null, o = [], s = 0; s < i; ++s) {
                if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
                    if (!r) {
                        if (n > 56319) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (s + 1 === i) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        r = n;
                        continue
                    }
                    if (n < 56320) {
                        (e -= 3) > -1 && o.push(239, 191, 189), r = n;
                        continue
                    }
                    n = 65536 + (r - 55296 << 10 | n - 56320)
                } else r && (e -= 3) > -1 && o.push(239, 191, 189);
                if (r = null, n < 128) {
                    if ((e -= 1) < 0) break;
                    o.push(n)
                } else if (n < 2048) {
                    if ((e -= 2) < 0) break;
                    o.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((e -= 3) < 0) break;
                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((e -= 4) < 0) break;
                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return o
        }

        function V(t) {
            return i.toByteArray(function (t) {
                if ((t = function (t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                }(t).replace(B, "")).length < 2) return "";
                for (; t.length % 4 != 0;) t += "=";
                return t
            }(t))
        }

        function q(t, e, n, i) {
            for (var r = 0; r < i && !(r + n >= e.length || r >= t.length); ++r) e[r + n] = t[r];
            return r
        }
    }).call(this, n(527))
}, function (t, e, n) {
    "use strict";
    e.byteLength = function (t) {
        var e = u(t),
            n = e[0],
            i = e[1];
        return 3 * (n + i) / 4 - i
    }, e.toByteArray = function (t) {
        for (var e, n = u(t), i = n[0], s = n[1], a = new o(function (t, e, n) {
            return 3 * (e + n) / 4 - n
        }(0, i, s)), c = 0, h = s > 0 ? i - 4 : i, l = 0; l < h; l += 4) e = r[t.charCodeAt(l)] << 18 | r[t.charCodeAt(l + 1)] << 12 | r[t.charCodeAt(l + 2)] << 6 | r[t.charCodeAt(l + 3)], a[c++] = e >> 16 & 255, a[c++] = e >> 8 & 255, a[c++] = 255 & e;
        2 === s && (e = r[t.charCodeAt(l)] << 2 | r[t.charCodeAt(l + 1)] >> 4, a[c++] = 255 & e);
        1 === s && (e = r[t.charCodeAt(l)] << 10 | r[t.charCodeAt(l + 1)] << 4 | r[t.charCodeAt(l + 2)] >> 2, a[c++] = e >> 8 & 255, a[c++] = 255 & e);
        return a
    }, e.fromByteArray = function (t) {
        for (var e, n = t.length, r = n % 3, o = [], s = 0, a = n - r; s < a; s += 16383) o.push(h(t, s, s + 16383 > a ? a : s + 16383));
        1 === r ? (e = t[n - 1], o.push(i[e >> 2] + i[e << 4 & 63] + "==")) : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], o.push(i[e >> 10] + i[e >> 4 & 63] + i[e << 2 & 63] + "="));
        return o.join("")
    };
    for (var i = [], r = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = s.length; a < c; ++a) i[a] = s[a], r[s.charCodeAt(a)] = a;

    function u(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var n = t.indexOf("=");
        return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
    }

    function h(t, e, n) {
        for (var r, o, s = [], a = e; a < n; a += 3) r = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(i[(o = r) >> 18 & 63] + i[o >> 12 & 63] + i[o >> 6 & 63] + i[63 & o]);
        return s.join("")
    }
    r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
}, function (t, e) {
    e.read = function (t, e, n, i, r) {
        var o, s, a = 8 * r - i - 1,
            c = (1 << a) - 1,
            u = c >> 1,
            h = -7,
            l = n ? r - 1 : 0,
            d = n ? -1 : 1,
            p = t[e + l];
        for (l += d, o = p & (1 << -h) - 1, p >>= -h, h += a; h > 0; o = 256 * o + t[e + l], l += d, h -= 8);
        for (s = o & (1 << -h) - 1, o >>= -h, h += i; h > 0; s = 256 * s + t[e + l], l += d, h -= 8);
        if (0 === o) o = 1 - u;
        else {
            if (o === c) return s ? NaN : 1 / 0 * (p ? -1 : 1);
            s += Math.pow(2, i), o -= u
        }
        return (p ? -1 : 1) * s * Math.pow(2, o - i)
    }, e.write = function (t, e, n, i, r, o) {
        var s, a, c, u = 8 * o - r - 1,
            h = (1 << u) - 1,
            l = h >> 1,
            d = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = i ? 0 : o - 1,
            f = i ? 1 : -1,
            m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (e += s + l >= 1 ? d / c : d * Math.pow(2, 1 - l)) * c >= 2 && (s++, c /= 2), s + l >= h ? (a = 0, s = h) : s + l >= 1 ? (a = (e * c - 1) * Math.pow(2, r), s += l) : (a = e * Math.pow(2, l - 1) * Math.pow(2, r), s = 0)); r >= 8; t[n + p] = 255 & a, p += f, a /= 256, r -= 8);
        for (s = s << r | a, u += r; u > 0; t[n + p] = 255 & s, p += f, s /= 256, u -= 8);
        t[n + p - f] |= 128 * m
    }
}, function (t, e) {
    var n = {}.toString;
    t.exports = Array.isArray || function (t) {
        return "[object Array]" == n.call(t)
    }
}, function (t, e, n) {
    "use strict";
    /*!
     * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */
    var i = n(722);

    function r(t) {
        return !0 === i(t) && "[object Object]" === Object.prototype.toString.call(t)
    }
    t.exports = function (t) {
        var e, n;
        return !1 !== r(t) && ("function" == typeof (e = t.constructor) && (!1 !== r(n = e.prototype) && !1 !== n.hasOwnProperty("isPrototypeOf")))
    }
}, function (t, e, n) {
    "use strict";
    /*!
     * isobject <https://github.com/jonschlinkert/isobject>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */
    t.exports = function (t) {
        return null != t && "object" == typeof t && !1 === Array.isArray(t)
    }
}, function (t, e, n) {
    (e = n(24)(!1)).push([t.i, "@keyframes dash{0%{stroke-dashoffset:120}50%{stroke-dashoffset:30;transform:rotate(240deg)}100%{stroke-dashoffset:120;transform:rotate(720deg)}}#grid-container{height:calc(100% - 190px);width:100%;position:absolute;top:81px;overflow:hidden;background-color:#fff}@media(max-width: 767px){#grid-container{height:calc(100% - 140px);top:60px}}@media(max-width: 495px){#grid-container{height:calc(100% - 185px)}}#instrument-canvas{position:absolute;top:0;left:0}#percussion-canvas{position:absolute;bottom:0;left:0}#canvas-container{height:calc(100% - 190px);width:100%;position:absolute;top:81px;overflow:auto;background-color:#fff}#canvas-container.zoomed #scroll-container{height:100% !important}#canvas-container.zoomed #record-indicator{opacity:.2}@media(max-width: 767px){#canvas-container{top:60px;height:calc(100% - 140px)}}@media(max-width: 495px){#canvas-container{height:calc(100% - 185px)}}#canvas-container #record-indicator{position:absolute;top:0px;left:0px;width:100%;height:100%;background-color:red;pointer-events:none;z-index:10;opacity:0}#canvas-container #scroll-container{position:absolute;top:0px;left:0px;width:100%;height:100%;cursor:pointer}#canvas-container #scroll-container canvas{position:absolute;top:0px;left:0px;width:100%;height:100%}#canvas-container #scroll-container #instrument{position:absolute;top:0px;left:0px;width:100%;height:100%;height:100%}#canvas-container #scroll-container #percussion{border-top:1px solid #f5f5f5;position:absolute;top:0px;left:0px;width:100%;height:100%;min-height:60px;max-height:90px;height:15%;top:calc(100% - 60px);background-color:#fff;box-sizing:border-box}#canvas-container #scroll-container .touch-grid{position:absolute;top:0px;left:0px;width:100%;height:100%}#canvas-container #scroll-container #indicator{pointer-events:none}", ""]), e.locals = {
        blue: "#16a8f0",
        red: "red",
        lightGrayFill: "#e6e6e6",
        darkGrayFill: "#a0a0a0",
        "background-gray": "#f5f5f5",
        veryLightGrayFill: "#f5f5f5",
        black: "#000",
        white: "#fff",
        orange: "#f4a806",
        "icon-label-gray": "#666",
        "gray-text": "#666",
        "about-gray-text": "#9e9e9e"
    }, t.exports = e
}, function (t, e, n) {
    (e = n(24)(!1)).push([t.i, "", ""]), e.locals = {
        blue: "#16a8f0",
        red: "red",
        lightGrayFill: "#e6e6e6",
        darkGrayFill: "#a0a0a0",
        "background-gray": "#f5f5f5",
        veryLightGrayFill: "#f5f5f5",
        black: "#000",
        white: "#fff",
        orange: "#f4a806",
        "icon-label-gray": "#666",
        "gray-text": "#666",
        "about-gray-text": "#9e9e9e"
    }, t.exports = e
}, function (t, e, n) {
    var i = n(23),
        r = n(726);
    "string" == typeof (r = r.__esModule ? r.default : r) && (r = [
        [t.i, r, ""]
    ]);
    var o = {
        insert: "head",
        singleton: !1
    };
    i(r, o);
    t.exports = r.locals || {}
}, function (t, e, n) {
    (e = n(24)(!1)).push([t.i, '@keyframes dash{0%{stroke-dashoffset:120}50%{stroke-dashoffset:30;transform:rotate(240deg)}100%{stroke-dashoffset:120;transform:rotate(720deg)}}.scrollbar{position:absolute;background:#fff}.scrollbar .scrollbar-track{position:absolute;border-radius:20px;background:#f5f5f5;border:1px solid #f5f5f5}.scrollbar .scrollbar-thumb{position:absolute;top:0;left:0;cursor:pointer}.scrollbar .scrollbar-thumb:after{content:"";display:block;width:100%;height:100%;background:#16a8f0;border-radius:20px}.scrollbar .scrollbar-thumb:hover:after{background:#57c1f9}.scrollbar-horizontal{bottom:0;left:0;right:41px;height:41px;border-top:1px solid #f5f5f5}.scrollbar-horizontal.scrollbar-full{right:0}.scrollbar-horizontal .scrollbar-track{top:8px;right:12px;bottom:8px;left:12px}.scrollbar-horizontal .scrollbar-thumb{min-width:100px;height:100%;padding:9px 13px}.scrollbar-vertical{top:0;right:0;height:100%;width:41px;border-left:1px solid #f5f5f5}.scrollbar-vertical .scrollbar-track{top:12px;right:8px;bottom:12px;left:8px}.scrollbar-vertical .scrollbar-thumb{width:100%;min-height:100px;padding:13px 9px}', ""]), e.locals = {
        blue: "#16a8f0",
        red: "red",
        lightGrayFill: "#e6e6e6",
        darkGrayFill: "#a0a0a0",
        "background-gray": "#f5f5f5",
        veryLightGrayFill: "#f5f5f5",
        black: "#000",
        white: "#fff",
        orange: "#f4a806",
        "icon-label-gray": "#666",
        "gray-text": "#666",
        "about-gray-text": "#9e9e9e"
    }, t.exports = e
}, function (t, e, n) {
    "use strict";
    var i = n(728),
        r = n(729),
        o = n(730),
        s = n(731),
        a = n(732);
    t.exports = {
        AMDF: i,
        YIN: r,
        DynamicWavelet: o,
        Macleod: s,
        frequencies: a
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.sampleRate || 44100,
            n = t.minFrequency || 82,
            i = t.maxFrequency || 1e3,
            r = t.sensitivity || .1,
            o = t.ratio || 5,
            s = [],
            a = Math.round(e / n + .5),
            c = Math.round(e / i + .5);
        return function (t) {
            var n = t.length,
                i = 0,
                u = 1 / 0,
                h = -1 / 0,
                l = void 0,
                d = void 0,
                p = void 0,
                f = void 0,
                m = void 0,
                g = void 0,
                v = void 0,
                b = void 0;
            for (f = 0; f < n; f++)
                if (c <= f && f <= a) {
                    for (v = 0, b = f, i = 0, l = [], d = []; v < n - f; i++, b++, v++) l[i] = t[v], d[i] = t[b];
                    var y = l.length;
                    for (p = [], g = 0; g < y; g++) p[g] = l[g] - d[g];
                    var _ = 0;
                    for (g = 0; g < y; g++) _ += Math.abs(p[g]);
                    s[f] = _
                } for (m = c; m < a; m++) s[m] < u && (u = s[m]), s[m] > h && (h = s[m]);
            var w = Math.round(r * (h - u) + u);
            for (m = c; m <= a && s[m] > w; m++);
            var x = c / 2;
            u = s[m];
            var T = m;
            for (f = m - 1; f < m + x && f <= a; f++) s[f] < u && (u = s[f], T = f);
            return Math.round(s[T] * o) < h ? e / T : null
        }
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.threshold || .1,
            n = t.sampleRate || 44100,
            i = t.probabilityThreshold || .1;
        return function (t) {
            var r = void 0;
            for (r = 1; r < t.length; r *= 2);
            for (var o = (r /= 2) / 2, s = new Float32Array(o), a = void 0, c = void 0, u = 0; u < o; u++) s[u] = 0;
            for (var h = 1; h < o; h++)
                for (var l = 0; l < o; l++) {
                    var d = t[l] - t[l + h];
                    s[h] += d * d
                }
            s[0] = 1, s[1] = 1;
            for (var p = 0, f = 1; f < o; f++) p += s[f], s[f] *= f / p;
            for (c = 2; c < o; c++)
                if (s[c] < e) {
                    for (; c + 1 < o && s[c + 1] < s[c];) c++;
                    a = 1 - s[c];
                    break
                } if (c == o || s[c] >= e) return null;
            if (a < i) return null;
            var m = void 0,
                g = void 0,
                v = void 0;
            if (v = c + 1 < o ? c + 1 : c, (g = c < 1 ? c : c - 1) === c) m = s[c] <= s[v] ? c : v;
            else if (v === c) m = s[c] <= s[g] ? c : g;
            else {
                var b = s[g],
                    y = s[c],
                    _ = s[v];
                m = c + (_ - b) / (2 * (2 * y - _ - b))
            }
            return n / m
        }
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.sampleRate || 44100;
        return function (t) {
            for (var n = [], i = [], r = t.length, o = null, s = 0, a = 0, c = 0, u = 0; u < r; u++) {
                var h = t[u];
                s += h, c = Math.max(c, h), a = Math.min(a, h)
            }
            for (var l = .75 * ((c -= s /= r) > -1 * (a -= s) ? c : -1 * a), d = 0, p = -1, f = t.length, m = void 0, g = void 0, v = void 0; m = ~~(e / (3e3 * Math.pow(2, d))), !(f < 2);) {
                var b = void 0,
                    y = -1e3,
                    _ = -1e6,
                    w = -1e6,
                    x = !1,
                    T = !1;
                v = 0, g = 0;
                for (var S = 2; S < f; S++) {
                    var C = t[S] - s,
                        k = t[S - 1] - s;
                    k <= 0 && C > 0 && (x = !0), k >= 0 && C < 0 && (T = !0), b = C - k, y > -1e3 && (T && y < 0 && b >= 0 && Math.abs(C) >= l && S > _ + m && (n[v++] = S, _ = S, T = !1), x && y > 0 && b <= 0 && Math.abs(C) >= l && S > w + m && (i[g++] = S, w = S, x = !1)), y = b
                }
                if (0 === v && 0 === g) break;
                for (var E = [], O = 0; O < f; O++) E[O] = 0;
                for (var M = 0; M < v; M++)
                    for (var I = 1; I < 3; I++) M + I < v && (E[Math.abs(n[M] - n[M + I])] += 1);
                for (var A = -1, R = -1, P = 0; P < f; P++) {
                    for (var D = 0, j = -1 * m; j <= m; j++) P + j >= 0 && P + j < f && (D += E[P + j]);
                    D === R ? P === 2 * A && (A = P) : D > R && (R = D, A = P)
                }
                for (var N = 0, L = 0, B = -m; B <= m; B++)
                    if (A + B >= 0 && A + B < r) {
                        var U = E[A + B];
                        U > 0 && (L += U, N += (A + B) * U)
                    } if (N /= L, p > -1 && Math.abs(2 * N - p) <= 2 * m) {
                        o = e / (Math.pow(2, d - 1) * p);
                        break
                    }
                if (p = N, ++d >= 6 || f < 2) break;
                var F = t.subarray(0);
                f === E.length && (F = new Float32Array(f / 2));
                for (var V = 0; V < f / 2; V++) F[V] = (t[2 * V] + t[2 * V + 1]) / 2;
                t = F, f /= 2
            }
            return o
        }
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
        var e = (t = t || {}).cutoff || .97,
            n = t.sampleRate || 44100,
            i = t.bufferSize || 1024,
            r = new Float32Array(i),
            o = void 0,
            s = void 0,
            a = [],
            c = [],
            u = [],
            h = {},
            l = function (t) {
                var e = r[t - 1],
                    n = r[t],
                    i = r[t + 1],
                    a = i + e - 2 * n;
                if (0 === a) o = t, s = n;
                else {
                    var c = e - i;
                    o = t + c / (2 * a), s = n - c * c / (8 * a)
                }
            };
        return function (t) {
            var i = void 0;
            a = [], c = [], u = [],
                function (t) {
                    for (var e = 0; e < t.length; e++) {
                        for (var n = 0, i = 0, o = 0; o < t.length - e; o++) n += t[o] * t[o + e], i += t[o] * t[o] + t[o + e] * t[o + e];
                        r[e] = 2 * n / i
                    }
                }(t),
                function () {
                    for (var t = 0, e = 0; t < (r.length - 1) / 3 && r[t] > 0;) t++;
                    for (; t < r.length - 1 && r[t] <= 0;) t++;
                    for (0 == t && (t = 1); t < r.length - 1;)
                        if (r[t] > r[t - 1] && r[t] >= r[t + 1] && (0 == e || r[t] > r[e]) && (e = t), ++t < r.length - 1 && r[t] <= 0)
                            for (e > 0 && (a.push(e), e = 0); t < r.length - 1 && r[t] <= 0;) t++;
                    e > 0 && a.push(e)
                }();
            for (var d = -1 / 0, p = 0; p < a.length; p++) {
                var f = a[p];
                d = Math.max(d, r[f]), r[f] > .5 && (l(f), u.push(s), c.push(o), d = Math.max(d, s))
            }
            if (c.length) {
                for (var m = e * d, g = 0, v = 0; v < u.length; v++)
                    if (u[v] >= m) {
                        g = v;
                        break
                    } var b = c[g],
                        y = n / b;
                i = y > 80 ? y : -1
            } else i = -1;
            return h.probability = d, h.freq = i, h
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = function (t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return function (t, e) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    !i && a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    };

    function r(t, e) {
        var n = t.map((function (t) {
            return t(e)
        })).filter(Boolean).sort((function (t, e) {
            return t < e ? -1 : 1
        }));
        if (1 === n.length) return n[0];
        if (2 === n.length) {
            var r = i(n, 2),
                o = r[0],
                s = r[1];
            return 2 * o > s ? Math.sqrt(o * s) : o
        }
        var a = n[0],
            c = n[1],
            u = n[n.length - 2],
            h = n[n.length - 1],
            l = 2 * a > c ? n : n.slice(1),
            d = 2 * u > h ? l : l.slice(0, -1);
        return Math.pow(d.reduce((function (t, e) {
            return t * e
        }), 1), 1 / d.length)
    }
    t.exports = function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = n.tempo || 120,
            o = n.quantization || 4,
            s = n.sampleRate || 44100,
            a = e.length,
            c = Math.round(60 * s / (o * i)),
            u = void 0;
        u = Array.isArray(t) ? r.bind(null, t) : t;
        for (var h = [], l = 0, d = a - c; l <= d; l += c) {
            var p = e.slice(l, l + c),
                f = u(p);
            h.push(f)
        }
        return h
    }
}, function (t, e, n) {
    "use strict";
    (function (e) {
        var i = n(734);
        t.exports = i({
            window: e.window
        })
    }).call(this, n(527))
}, function (t, e, n) {
    "use strict";
    var i = n(25);
    t.exports = function (t, e) {
        var r = t && t.window,
            o = {
                shimChrome: !0,
                shimFirefox: !0,
                shimEdge: !0,
                shimSafari: !0
            };
        for (var s in e) hasOwnProperty.call(e, s) && (o[s] = e[s]);
        var a = i.log,
            c = i.detectBrowser(r),
            u = n(735) || null,
            h = n(737) || null,
            l = n(741) || null,
            d = n(743) || null,
            p = n(744) || null,
            f = {
                browserDetails: c,
                commonShim: p,
                extractVersion: i.extractVersion,
                disableLog: i.disableLog,
                disableWarnings: i.disableWarnings
            };
        switch (c.browser) {
            case "chrome":
                if (!u || !u.shimPeerConnection || !o.shimChrome) return a("Chrome shim is not included in this adapter release."), f;
                a("adapter.js shimming chrome."), f.browserShim = u, p.shimCreateObjectURL(r), u.shimGetUserMedia(r), u.shimMediaStream(r), u.shimSourceObject(r), u.shimPeerConnection(r), u.shimOnTrack(r), u.shimAddTrackRemoveTrack(r), u.shimGetSendersWithDtmf(r), u.shimSenderReceiverGetStats(r), u.fixNegotiationNeeded(r), p.shimRTCIceCandidate(r), p.shimMaxMessageSize(r), p.shimSendThrowTypeError(r);
                break;
            case "firefox":
                if (!l || !l.shimPeerConnection || !o.shimFirefox) return a("Firefox shim is not included in this adapter release."), f;
                a("adapter.js shimming firefox."), f.browserShim = l, p.shimCreateObjectURL(r), l.shimGetUserMedia(r), l.shimSourceObject(r), l.shimPeerConnection(r), l.shimOnTrack(r), l.shimRemoveStream(r), l.shimSenderGetStats(r), l.shimReceiverGetStats(r), l.shimRTCDataChannel(r), p.shimRTCIceCandidate(r), p.shimMaxMessageSize(r), p.shimSendThrowTypeError(r);
                break;
            case "edge":
                if (!h || !h.shimPeerConnection || !o.shimEdge) return a("MS edge shim is not included in this adapter release."), f;
                a("adapter.js shimming edge."), f.browserShim = h, p.shimCreateObjectURL(r), h.shimGetUserMedia(r), h.shimPeerConnection(r), h.shimReplaceTrack(r), p.shimMaxMessageSize(r), p.shimSendThrowTypeError(r);
                break;
            case "safari":
                if (!d || !o.shimSafari) return a("Safari shim is not included in this adapter release."), f;
                a("adapter.js shimming safari."), f.browserShim = d, p.shimCreateObjectURL(r), d.shimRTCIceServerUrls(r), d.shimCallbacksAPI(r), d.shimLocalStreamsAPI(r), d.shimRemoteStreamsAPI(r), d.shimTrackEventTransceiver(r), d.shimGetUserMedia(r), d.shimCreateOfferLegacy(r), p.shimRTCIceCandidate(r), p.shimMaxMessageSize(r), p.shimSendThrowTypeError(r);
                break;
            default:
                a("Unsupported browser!")
        }
        return f
    }
}, function (t, e, n) {
    "use strict";
    var i = n(25),
        r = i.log;

    function o(t, e, n) {
        var i = n ? "outbound-rtp" : "inbound-rtp",
            r = new Map;
        if (null === e) return r;
        var o = [];
        return t.forEach((function (t) {
            "track" === t.type && t.trackIdentifier === e.id && o.push(t)
        })), o.forEach((function (e) {
            t.forEach((function (n) {
                n.type === i && n.trackId === e.id && function t(e, n, i) {
                    n && !i.has(n.id) && (i.set(n.id, n), Object.keys(n).forEach((function (r) {
                        r.endsWith("Id") ? t(e, e.get(n[r]), i) : r.endsWith("Ids") && n[r].forEach((function (n) {
                            t(e, e.get(n), i)
                        }))
                    })))
                }(t, n, r)
            }))
        })), r
    }
    t.exports = {
        shimGetUserMedia: n(736),
        shimMediaStream: function (t) {
            t.MediaStream = t.MediaStream || t.webkitMediaStream
        },
        shimOnTrack: function (t) {
            if ("object" == typeof t && t.RTCPeerConnection && !("ontrack" in t.RTCPeerConnection.prototype)) {
                Object.defineProperty(t.RTCPeerConnection.prototype, "ontrack", {
                    get: function () {
                        return this._ontrack
                    },
                    set: function (t) {
                        this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = t)
                    },
                    enumerable: !0,
                    configurable: !0
                });
                var e = t.RTCPeerConnection.prototype.setRemoteDescription;
                t.RTCPeerConnection.prototype.setRemoteDescription = function () {
                    var n = this;
                    return n._ontrackpoly || (n._ontrackpoly = function (e) {
                        e.stream.addEventListener("addtrack", (function (i) {
                            var r;
                            r = t.RTCPeerConnection.prototype.getReceivers ? n.getReceivers().find((function (t) {
                                return t.track && t.track.id === i.track.id
                            })) : {
                                    track: i.track
                                };
                            var o = new Event("track");
                            o.track = i.track, o.receiver = r, o.transceiver = {
                                receiver: r
                            }, o.streams = [e.stream], n.dispatchEvent(o)
                        })), e.stream.getTracks().forEach((function (i) {
                            var r;
                            r = t.RTCPeerConnection.prototype.getReceivers ? n.getReceivers().find((function (t) {
                                return t.track && t.track.id === i.id
                            })) : {
                                    track: i
                                };
                            var o = new Event("track");
                            o.track = i, o.receiver = r, o.transceiver = {
                                receiver: r
                            }, o.streams = [e.stream], n.dispatchEvent(o)
                        }))
                    }, n.addEventListener("addstream", n._ontrackpoly)), e.apply(n, arguments)
                }
            } else "RTCRtpTransceiver" in t || i.wrapPeerConnectionEvent(t, "track", (function (t) {
                return t.transceiver || (t.transceiver = {
                    receiver: t.receiver
                }), t
            }))
        },
        shimGetSendersWithDtmf: function (t) {
            if ("object" == typeof t && t.RTCPeerConnection && !("getSenders" in t.RTCPeerConnection.prototype) && "createDTMFSender" in t.RTCPeerConnection.prototype) {
                var e = function (t, e) {
                    return {
                        track: e,
                        get dtmf() {
                            return void 0 === this._dtmf && ("audio" === e.kind ? this._dtmf = t.createDTMFSender(e) : this._dtmf = null), this._dtmf
                        },
                        _pc: t
                    }
                };
                if (!t.RTCPeerConnection.prototype.getSenders) {
                    t.RTCPeerConnection.prototype.getSenders = function () {
                        return this._senders = this._senders || [], this._senders.slice()
                    };
                    var n = t.RTCPeerConnection.prototype.addTrack;
                    t.RTCPeerConnection.prototype.addTrack = function (t, i) {
                        var r = this,
                            o = n.apply(r, arguments);
                        return o || (o = e(r, t), r._senders.push(o)), o
                    };
                    var i = t.RTCPeerConnection.prototype.removeTrack;
                    t.RTCPeerConnection.prototype.removeTrack = function (t) {
                        var e = this;
                        i.apply(e, arguments);
                        var n = e._senders.indexOf(t); - 1 !== n && e._senders.splice(n, 1)
                    }
                }
                var r = t.RTCPeerConnection.prototype.addStream;
                t.RTCPeerConnection.prototype.addStream = function (t) {
                    var n = this;
                    n._senders = n._senders || [], r.apply(n, [t]), t.getTracks().forEach((function (t) {
                        n._senders.push(e(n, t))
                    }))
                };
                var o = t.RTCPeerConnection.prototype.removeStream;
                t.RTCPeerConnection.prototype.removeStream = function (t) {
                    var e = this;
                    e._senders = e._senders || [], o.apply(e, [t]), t.getTracks().forEach((function (t) {
                        var n = e._senders.find((function (e) {
                            return e.track === t
                        }));
                        n && e._senders.splice(e._senders.indexOf(n), 1)
                    }))
                }
            } else if ("object" == typeof t && t.RTCPeerConnection && "getSenders" in t.RTCPeerConnection.prototype && "createDTMFSender" in t.RTCPeerConnection.prototype && t.RTCRtpSender && !("dtmf" in t.RTCRtpSender.prototype)) {
                var s = t.RTCPeerConnection.prototype.getSenders;
                t.RTCPeerConnection.prototype.getSenders = function () {
                    var t = this,
                        e = s.apply(t, []);
                    return e.forEach((function (e) {
                        e._pc = t
                    })), e
                }, Object.defineProperty(t.RTCRtpSender.prototype, "dtmf", {
                    get: function () {
                        return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf
                    }
                })
            }
        },
        shimSenderReceiverGetStats: function (t) {
            if ("object" == typeof t && t.RTCPeerConnection && t.RTCRtpSender && t.RTCRtpReceiver) {
                if (!("getStats" in t.RTCRtpSender.prototype)) {
                    var e = t.RTCPeerConnection.prototype.getSenders;
                    e && (t.RTCPeerConnection.prototype.getSenders = function () {
                        var t = this,
                            n = e.apply(t, []);
                        return n.forEach((function (e) {
                            e._pc = t
                        })), n
                    });
                    var n = t.RTCPeerConnection.prototype.addTrack;
                    n && (t.RTCPeerConnection.prototype.addTrack = function () {
                        var t = n.apply(this, arguments);
                        return t._pc = this, t
                    }), t.RTCRtpSender.prototype.getStats = function () {
                        var t = this;
                        return this._pc.getStats().then((function (e) {
                            return o(e, t.track, !0)
                        }))
                    }
                }
                if (!("getStats" in t.RTCRtpReceiver.prototype)) {
                    var r = t.RTCPeerConnection.prototype.getReceivers;
                    r && (t.RTCPeerConnection.prototype.getReceivers = function () {
                        var t = this,
                            e = r.apply(t, []);
                        return e.forEach((function (e) {
                            e._pc = t
                        })), e
                    }), i.wrapPeerConnectionEvent(t, "track", (function (t) {
                        return t.receiver._pc = t.srcElement, t
                    })), t.RTCRtpReceiver.prototype.getStats = function () {
                        var t = this;
                        return this._pc.getStats().then((function (e) {
                            return o(e, t.track, !1)
                        }))
                    }
                }
                if ("getStats" in t.RTCRtpSender.prototype && "getStats" in t.RTCRtpReceiver.prototype) {
                    var s = t.RTCPeerConnection.prototype.getStats;
                    t.RTCPeerConnection.prototype.getStats = function () {
                        var e = this;
                        if (arguments.length > 0 && arguments[0] instanceof t.MediaStreamTrack) {
                            var n, i, r, o = arguments[0];
                            return e.getSenders().forEach((function (t) {
                                t.track === o && (n ? r = !0 : n = t)
                            })), e.getReceivers().forEach((function (t) {
                                return t.track === o && (i ? r = !0 : i = t), t.track === o
                            })), r || n && i ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : n ? n.getStats() : i ? i.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"))
                        }
                        return s.apply(e, arguments)
                    }
                }
            }
        },
        shimSourceObject: function (t) {
            var e = t && t.URL;
            "object" == typeof t && t.HTMLMediaElement && !("srcObject" in t.HTMLMediaElement.prototype) && Object.defineProperty(t.HTMLMediaElement.prototype, "srcObject", {
                get: function () {
                    return this._srcObject
                },
                set: function (t) {
                    var n = this;
                    this._srcObject = t, this.src && e.revokeObjectURL(this.src), t ? (this.src = e.createObjectURL(t), t.addEventListener("addtrack", (function () {
                        n.src && e.revokeObjectURL(n.src), n.src = e.createObjectURL(t)
                    })), t.addEventListener("removetrack", (function () {
                        n.src && e.revokeObjectURL(n.src), n.src = e.createObjectURL(t)
                    }))) : this.src = ""
                }
            })
        },
        shimAddTrackRemoveTrackWithNative: function (t) {
            t.RTCPeerConnection.prototype.getLocalStreams = function () {
                var t = this;
                return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map((function (e) {
                    return t._shimmedLocalStreams[e][0]
                }))
            };
            var e = t.RTCPeerConnection.prototype.addTrack;
            t.RTCPeerConnection.prototype.addTrack = function (t, n) {
                if (!n) return e.apply(this, arguments);
                this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                var i = e.apply(this, arguments);
                return this._shimmedLocalStreams[n.id] ? -1 === this._shimmedLocalStreams[n.id].indexOf(i) && this._shimmedLocalStreams[n.id].push(i) : this._shimmedLocalStreams[n.id] = [n, i], i
            };
            var n = t.RTCPeerConnection.prototype.addStream;
            t.RTCPeerConnection.prototype.addStream = function (t) {
                var e = this;
                this._shimmedLocalStreams = this._shimmedLocalStreams || {}, t.getTracks().forEach((function (t) {
                    if (e.getSenders().find((function (e) {
                        return e.track === t
                    }))) throw new DOMException("Track already exists.", "InvalidAccessError")
                }));
                var i = e.getSenders();
                n.apply(this, arguments);
                var r = e.getSenders().filter((function (t) {
                    return -1 === i.indexOf(t)
                }));
                this._shimmedLocalStreams[t.id] = [t].concat(r)
            };
            var i = t.RTCPeerConnection.prototype.removeStream;
            t.RTCPeerConnection.prototype.removeStream = function (t) {
                return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[t.id], i.apply(this, arguments)
            };
            var r = t.RTCPeerConnection.prototype.removeTrack;
            t.RTCPeerConnection.prototype.removeTrack = function (t) {
                var e = this;
                return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, t && Object.keys(this._shimmedLocalStreams).forEach((function (n) {
                    var i = e._shimmedLocalStreams[n].indexOf(t); - 1 !== i && e._shimmedLocalStreams[n].splice(i, 1), 1 === e._shimmedLocalStreams[n].length && delete e._shimmedLocalStreams[n]
                })), r.apply(this, arguments)
            }
        },
        shimAddTrackRemoveTrack: function (t) {
            var e = i.detectBrowser(t);
            if (t.RTCPeerConnection.prototype.addTrack && e.version >= 65) return this.shimAddTrackRemoveTrackWithNative(t);
            var n = t.RTCPeerConnection.prototype.getLocalStreams;
            t.RTCPeerConnection.prototype.getLocalStreams = function () {
                var t = this,
                    e = n.apply(this);
                return t._reverseStreams = t._reverseStreams || {}, e.map((function (e) {
                    return t._reverseStreams[e.id]
                }))
            };
            var r = t.RTCPeerConnection.prototype.addStream;
            t.RTCPeerConnection.prototype.addStream = function (e) {
                var n = this;
                if (n._streams = n._streams || {}, n._reverseStreams = n._reverseStreams || {}, e.getTracks().forEach((function (t) {
                    if (n.getSenders().find((function (e) {
                        return e.track === t
                    }))) throw new DOMException("Track already exists.", "InvalidAccessError")
                })), !n._reverseStreams[e.id]) {
                    var i = new t.MediaStream(e.getTracks());
                    n._streams[e.id] = i, n._reverseStreams[i.id] = e, e = i
                }
                r.apply(n, [e])
            };
            var o = t.RTCPeerConnection.prototype.removeStream;

            function s(t, e) {
                var n = e.sdp;
                return Object.keys(t._reverseStreams || []).forEach((function (e) {
                    var i = t._reverseStreams[e],
                        r = t._streams[i.id];
                    n = n.replace(new RegExp(r.id, "g"), i.id)
                })), new RTCSessionDescription({
                    type: e.type,
                    sdp: n
                })
            }

            function a(t, e) {
                var n = e.sdp;
                return Object.keys(t._reverseStreams || []).forEach((function (e) {
                    var i = t._reverseStreams[e],
                        r = t._streams[i.id];
                    n = n.replace(new RegExp(i.id, "g"), r.id)
                })), new RTCSessionDescription({
                    type: e.type,
                    sdp: n
                })
            }
            t.RTCPeerConnection.prototype.removeStream = function (t) {
                var e = this;
                e._streams = e._streams || {}, e._reverseStreams = e._reverseStreams || {}, o.apply(e, [e._streams[t.id] || t]), delete e._reverseStreams[e._streams[t.id] ? e._streams[t.id].id : t.id], delete e._streams[t.id]
            }, t.RTCPeerConnection.prototype.addTrack = function (e, n) {
                var i = this;
                if ("closed" === i.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                var r = [].slice.call(arguments, 1);
                if (1 !== r.length || !r[0].getTracks().find((function (t) {
                    return t === e
                }))) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
                var o = i.getSenders().find((function (t) {
                    return t.track === e
                }));
                if (o) throw new DOMException("Track already exists.", "InvalidAccessError");
                i._streams = i._streams || {}, i._reverseStreams = i._reverseStreams || {};
                var s = i._streams[n.id];
                if (s) s.addTrack(e), Promise.resolve().then((function () {
                    i.dispatchEvent(new Event("negotiationneeded"))
                }));
                else {
                    var a = new t.MediaStream([e]);
                    i._streams[n.id] = a, i._reverseStreams[a.id] = n, i.addStream(a)
                }
                return i.getSenders().find((function (t) {
                    return t.track === e
                }))
            }, ["createOffer", "createAnswer"].forEach((function (e) {
                var n = t.RTCPeerConnection.prototype[e];
                t.RTCPeerConnection.prototype[e] = function () {
                    var t = this,
                        e = arguments,
                        i = arguments.length && "function" == typeof arguments[0];
                    return i ? n.apply(t, [function (n) {
                        var i = s(t, n);
                        e[0].apply(null, [i])
                    }, function (t) {
                        e[1] && e[1].apply(null, t)
                    }, arguments[2]]) : n.apply(t, arguments).then((function (e) {
                        return s(t, e)
                    }))
                }
            }));
            var c = t.RTCPeerConnection.prototype.setLocalDescription;
            t.RTCPeerConnection.prototype.setLocalDescription = function () {
                var t = this;
                return arguments.length && arguments[0].type ? (arguments[0] = a(t, arguments[0]), c.apply(t, arguments)) : c.apply(t, arguments)
            };
            var u = Object.getOwnPropertyDescriptor(t.RTCPeerConnection.prototype, "localDescription");
            Object.defineProperty(t.RTCPeerConnection.prototype, "localDescription", {
                get: function () {
                    var t = u.get.apply(this);
                    return "" === t.type ? t : s(this, t)
                }
            }), t.RTCPeerConnection.prototype.removeTrack = function (t) {
                var e, n = this;
                if ("closed" === n.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                if (!t._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
                if (!(t._pc === n)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
                n._streams = n._streams || {}, Object.keys(n._streams).forEach((function (i) {
                    n._streams[i].getTracks().find((function (e) {
                        return t.track === e
                    })) && (e = n._streams[i])
                })), e && (1 === e.getTracks().length ? n.removeStream(n._reverseStreams[e.id]) : e.removeTrack(t.track), n.dispatchEvent(new Event("negotiationneeded")))
            }
        },
        shimPeerConnection: function (t) {
            var e = i.detectBrowser(t);
            if (!t.RTCPeerConnection && t.webkitRTCPeerConnection) t.RTCPeerConnection = function (e, n) {
                return r("PeerConnection"), e && e.iceTransportPolicy && (e.iceTransports = e.iceTransportPolicy), new t.webkitRTCPeerConnection(e, n)
            }, t.RTCPeerConnection.prototype = t.webkitRTCPeerConnection.prototype, t.webkitRTCPeerConnection.generateCertificate && Object.defineProperty(t.RTCPeerConnection, "generateCertificate", {
                get: function () {
                    return t.webkitRTCPeerConnection.generateCertificate
                }
            });
            else {
                var n = t.RTCPeerConnection;
                t.RTCPeerConnection = function (t, e) {
                    if (t && t.iceServers) {
                        for (var r = [], o = 0; o < t.iceServers.length; o++) {
                            var s = t.iceServers[o];
                            !s.hasOwnProperty("urls") && s.hasOwnProperty("url") ? (i.deprecated("RTCIceServer.url", "RTCIceServer.urls"), (s = JSON.parse(JSON.stringify(s))).urls = s.url, r.push(s)) : r.push(t.iceServers[o])
                        }
                        t.iceServers = r
                    }
                    return new n(t, e)
                }, t.RTCPeerConnection.prototype = n.prototype, Object.defineProperty(t.RTCPeerConnection, "generateCertificate", {
                    get: function () {
                        return n.generateCertificate
                    }
                })
            }
            var o = t.RTCPeerConnection.prototype.getStats;
            t.RTCPeerConnection.prototype.getStats = function (t, e, n) {
                var i = this,
                    r = arguments;
                if (arguments.length > 0 && "function" == typeof t) return o.apply(this, arguments);
                if (0 === o.length && (0 === arguments.length || "function" != typeof arguments[0])) return o.apply(this, []);
                var s = function (t) {
                    var e = {};
                    return t.result().forEach((function (t) {
                        var n = {
                            id: t.id,
                            timestamp: t.timestamp,
                            type: {
                                localcandidate: "local-candidate",
                                remotecandidate: "remote-candidate"
                            }[t.type] || t.type
                        };
                        t.names().forEach((function (e) {
                            n[e] = t.stat(e)
                        })), e[n.id] = n
                    })), e
                },
                    a = function (t) {
                        return new Map(Object.keys(t).map((function (e) {
                            return [e, t[e]]
                        })))
                    };
                if (arguments.length >= 2) {
                    var c = function (t) {
                        r[1](a(s(t)))
                    };
                    return o.apply(this, [c, arguments[0]])
                }
                return new Promise((function (t, e) {
                    o.apply(i, [function (e) {
                        t(a(s(e)))
                    }, e])
                })).then(e, n)
            }, e.version < 51 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach((function (e) {
                var n = t.RTCPeerConnection.prototype[e];
                t.RTCPeerConnection.prototype[e] = function () {
                    var t = arguments,
                        e = this,
                        i = new Promise((function (i, r) {
                            n.apply(e, [t[0], i, r])
                        }));
                    return t.length < 2 ? i : i.then((function () {
                        t[1].apply(null, [])
                    }), (function (e) {
                        t.length >= 3 && t[2].apply(null, [e])
                    }))
                }
            })), e.version < 52 && ["createOffer", "createAnswer"].forEach((function (e) {
                var n = t.RTCPeerConnection.prototype[e];
                t.RTCPeerConnection.prototype[e] = function () {
                    var t = this;
                    if (arguments.length < 1 || 1 === arguments.length && "object" == typeof arguments[0]) {
                        var e = 1 === arguments.length ? arguments[0] : void 0;
                        return new Promise((function (i, r) {
                            n.apply(t, [i, r, e])
                        }))
                    }
                    return n.apply(this, arguments)
                }
            })), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach((function (e) {
                var n = t.RTCPeerConnection.prototype[e];
                t.RTCPeerConnection.prototype[e] = function () {
                    return arguments[0] = new ("addIceCandidate" === e ? t.RTCIceCandidate : t.RTCSessionDescription)(arguments[0]), n.apply(this, arguments)
                }
            }));
            var s = t.RTCPeerConnection.prototype.addIceCandidate;
            t.RTCPeerConnection.prototype.addIceCandidate = function () {
                return arguments[0] ? s.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
            }
        },
        fixNegotiationNeeded: function (t) {
            i.wrapPeerConnectionEvent(t, "negotiationneeded", (function (t) {
                if ("stable" === t.target.signalingState) return t
            }))
        },
        shimGetDisplayMedia: function (t, e) {
            "getDisplayMedia" in t.navigator || ("function" == typeof e ? navigator.getDisplayMedia = function (t) {
                return e(t).then((function (e) {
                    return t.video = {
                        mandatory: {
                            chromeMediaSource: "desktop",
                            chromeMediaSourceId: e,
                            maxFrameRate: t.video.frameRate || 3
                        }
                    }, navigator.mediaDevices.getUserMedia(t)
                }))
            } : console.error("shimGetDisplayMedia: getSourceId argument is not a function"))
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(25),
        r = i.log;
    t.exports = function (t) {
        var e = i.detectBrowser(t),
            n = t && t.navigator,
            o = function (t) {
                if ("object" != typeof t || t.mandatory || t.optional) return t;
                var e = {};
                return Object.keys(t).forEach((function (n) {
                    if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                        var i = "object" == typeof t[n] ? t[n] : {
                            ideal: t[n]
                        };
                        void 0 !== i.exact && "number" == typeof i.exact && (i.min = i.max = i.exact);
                        var r = function (t, e) {
                            return t ? t + e.charAt(0).toUpperCase() + e.slice(1) : "deviceId" === e ? "sourceId" : e
                        };
                        if (void 0 !== i.ideal) {
                            e.optional = e.optional || [];
                            var o = {};
                            "number" == typeof i.ideal ? (o[r("min", n)] = i.ideal, e.optional.push(o), (o = {})[r("max", n)] = i.ideal, e.optional.push(o)) : (o[r("", n)] = i.ideal, e.optional.push(o))
                        }
                        void 0 !== i.exact && "number" != typeof i.exact ? (e.mandatory = e.mandatory || {}, e.mandatory[r("", n)] = i.exact) : ["min", "max"].forEach((function (t) {
                            void 0 !== i[t] && (e.mandatory = e.mandatory || {}, e.mandatory[r(t, n)] = i[t])
                        }))
                    }
                })), t.advanced && (e.optional = (e.optional || []).concat(t.advanced)), e
            },
            s = function (t, i) {
                if (e.version >= 61) return i(t);
                if ((t = JSON.parse(JSON.stringify(t))) && "object" == typeof t.audio) {
                    var s = function (t, e, n) {
                        e in t && !(n in t) && (t[n] = t[e], delete t[e])
                    };
                    s((t = JSON.parse(JSON.stringify(t))).audio, "autoGainControl", "googAutoGainControl"), s(t.audio, "noiseSuppression", "googNoiseSuppression"), t.audio = o(t.audio)
                }
                if (t && "object" == typeof t.video) {
                    var a = t.video.facingMode;
                    a = a && ("object" == typeof a ? a : {
                        ideal: a
                    });
                    var c, u = e.version < 66;
                    if (a && ("user" === a.exact || "environment" === a.exact || "user" === a.ideal || "environment" === a.ideal) && (!n.mediaDevices.getSupportedConstraints || !n.mediaDevices.getSupportedConstraints().facingMode || u))
                        if (delete t.video.facingMode, "environment" === a.exact || "environment" === a.ideal ? c = ["back", "rear"] : "user" !== a.exact && "user" !== a.ideal || (c = ["front"]), c) return n.mediaDevices.enumerateDevices().then((function (e) {
                            var n = (e = e.filter((function (t) {
                                return "videoinput" === t.kind
                            }))).find((function (t) {
                                return c.some((function (e) {
                                    return -1 !== t.label.toLowerCase().indexOf(e)
                                }))
                            }));
                            return !n && e.length && -1 !== c.indexOf("back") && (n = e[e.length - 1]), n && (t.video.deviceId = a.exact ? {
                                exact: n.deviceId
                            } : {
                                    ideal: n.deviceId
                                }), t.video = o(t.video), r("chrome: " + JSON.stringify(t)), i(t)
                        }));
                    t.video = o(t.video)
                }
                return r("chrome: " + JSON.stringify(t)), i(t)
            },
            a = function (t) {
                return e.version >= 64 ? t : {
                    name: {
                        PermissionDeniedError: "NotAllowedError",
                        PermissionDismissedError: "NotAllowedError",
                        InvalidStateError: "NotAllowedError",
                        DevicesNotFoundError: "NotFoundError",
                        ConstraintNotSatisfiedError: "OverconstrainedError",
                        TrackStartError: "NotReadableError",
                        MediaDeviceFailedDueToShutdown: "NotAllowedError",
                        MediaDeviceKillSwitchOn: "NotAllowedError",
                        TabCaptureError: "AbortError",
                        ScreenCaptureError: "AbortError",
                        DeviceCaptureError: "AbortError"
                    }[t.name] || t.name,
                    message: t.message,
                    constraint: t.constraint || t.constraintName,
                    toString: function () {
                        return this.name + (this.message && ": ") + this.message
                    }
                }
            };
        n.getUserMedia = function (t, e, i) {
            s(t, (function (t) {
                n.webkitGetUserMedia(t, e, (function (t) {
                    i && i(a(t))
                }))
            }))
        };
        var c = function (t) {
            return new Promise((function (e, i) {
                n.getUserMedia(t, e, i)
            }))
        };
        if (n.mediaDevices || (n.mediaDevices = {
            getUserMedia: c,
            enumerateDevices: function () {
                return new Promise((function (e) {
                    var n = {
                        audio: "audioinput",
                        video: "videoinput"
                    };
                    return t.MediaStreamTrack.getSources((function (t) {
                        e(t.map((function (t) {
                            return {
                                label: t.label,
                                kind: n[t.kind],
                                deviceId: t.id,
                                groupId: ""
                            }
                        })))
                    }))
                }))
            },
            getSupportedConstraints: function () {
                return {
                    deviceId: !0,
                    echoCancellation: !0,
                    facingMode: !0,
                    frameRate: !0,
                    height: !0,
                    width: !0
                }
            }
        }), n.mediaDevices.getUserMedia) {
            var u = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
            n.mediaDevices.getUserMedia = function (t) {
                return s(t, (function (t) {
                    return u(t).then((function (e) {
                        if (t.audio && !e.getAudioTracks().length || t.video && !e.getVideoTracks().length) throw e.getTracks().forEach((function (t) {
                            t.stop()
                        })), new DOMException("", "NotFoundError");
                        return e
                    }), (function (t) {
                        return Promise.reject(a(t))
                    }))
                }))
            }
        } else n.mediaDevices.getUserMedia = function (t) {
            return c(t)
        };
        void 0 === n.mediaDevices.addEventListener && (n.mediaDevices.addEventListener = function () {
            r("Dummy mediaDevices.addEventListener called.")
        }), void 0 === n.mediaDevices.removeEventListener && (n.mediaDevices.removeEventListener = function () {
            r("Dummy mediaDevices.removeEventListener called.")
        })
    }
}, function (t, e, n) {
    "use strict";
    var i = n(25),
        r = n(738),
        o = n(739);
    t.exports = {
        shimGetUserMedia: n(740),
        shimPeerConnection: function (t) {
            var e = i.detectBrowser(t);
            if (t.RTCIceGatherer && (t.RTCIceCandidate || (t.RTCIceCandidate = function (t) {
                return t
            }), t.RTCSessionDescription || (t.RTCSessionDescription = function (t) {
                return t
            }), e.version < 15025)) {
                var n = Object.getOwnPropertyDescriptor(t.MediaStreamTrack.prototype, "enabled");
                Object.defineProperty(t.MediaStreamTrack.prototype, "enabled", {
                    set: function (t) {
                        n.set.call(this, t);
                        var e = new Event("enabled");
                        e.enabled = t, this.dispatchEvent(e)
                    }
                })
            }
            t.RTCRtpSender && !("dtmf" in t.RTCRtpSender.prototype) && Object.defineProperty(t.RTCRtpSender.prototype, "dtmf", {
                get: function () {
                    return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = new t.RTCDtmfSender(this) : "video" === this.track.kind && (this._dtmf = null)), this._dtmf
                }
            }), t.RTCDtmfSender && !t.RTCDTMFSender && (t.RTCDTMFSender = t.RTCDtmfSender);
            var s = o(t, e.version);
            t.RTCPeerConnection = function (t) {
                return t && t.iceServers && (t.iceServers = r(t.iceServers)), new s(t)
            }, t.RTCPeerConnection.prototype = s.prototype
        },
        shimReplaceTrack: function (t) {
            t.RTCRtpSender && !("replaceTrack" in t.RTCRtpSender.prototype) && (t.RTCRtpSender.prototype.replaceTrack = t.RTCRtpSender.prototype.setTrack)
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(25);
    t.exports = function (t, e) {
        var n = !1;
        return (t = JSON.parse(JSON.stringify(t))).filter((function (t) {
            if (t && (t.urls || t.url)) {
                var r = t.urls || t.url;
                t.url && !t.urls && i.deprecated("RTCIceServer.url", "RTCIceServer.urls");
                var o = "string" == typeof r;
                return o && (r = [r]), r = r.filter((function (t) {
                    return 0 === t.indexOf("turn:") && -1 !== t.indexOf("transport=udp") && -1 === t.indexOf("turn:[") && !n ? (n = !0, !0) : 0 === t.indexOf("stun:") && e >= 14393 && -1 === t.indexOf("?transport=udp")
                })), delete t.url, t.urls = o ? r[0] : r, !!r.length
            }
        }))
    }
}, function (t, e, n) {
    "use strict";
    var i = n(530);

    function r(t, e, n, r, o) {
        var s = i.writeRtpDescription(t.kind, e);
        if (s += i.writeIceParameters(t.iceGatherer.getLocalParameters()), s += i.writeDtlsParameters(t.dtlsTransport.getLocalParameters(), "offer" === n ? "actpass" : o || "active"), s += "a=mid:" + t.mid + "\r\n", t.rtpSender && t.rtpReceiver ? s += "a=sendrecv\r\n" : t.rtpSender ? s += "a=sendonly\r\n" : t.rtpReceiver ? s += "a=recvonly\r\n" : s += "a=inactive\r\n", t.rtpSender) {
            var a = t.rtpSender._initialTrackId || t.rtpSender.track.id;
            t.rtpSender._initialTrackId = a;
            var c = "msid:" + (r ? r.id : "-") + " " + a + "\r\n";
            s += "a=" + c, s += "a=ssrc:" + t.sendEncodingParameters[0].ssrc + " " + c, t.sendEncodingParameters[0].rtx && (s += "a=ssrc:" + t.sendEncodingParameters[0].rtx.ssrc + " " + c, s += "a=ssrc-group:FID " + t.sendEncodingParameters[0].ssrc + " " + t.sendEncodingParameters[0].rtx.ssrc + "\r\n")
        }
        return s += "a=ssrc:" + t.sendEncodingParameters[0].ssrc + " cname:" + i.localCName + "\r\n", t.rtpSender && t.sendEncodingParameters[0].rtx && (s += "a=ssrc:" + t.sendEncodingParameters[0].rtx.ssrc + " cname:" + i.localCName + "\r\n"), s
    }

    function o(t, e) {
        var n = {
            codecs: [],
            headerExtensions: [],
            fecMechanisms: []
        },
            i = function (t, e) {
                t = parseInt(t, 10);
                for (var n = 0; n < e.length; n++)
                    if (e[n].payloadType === t || e[n].preferredPayloadType === t) return e[n]
            },
            r = function (t, e, n, r) {
                var o = i(t.parameters.apt, n),
                    s = i(e.parameters.apt, r);
                return o && s && o.name.toLowerCase() === s.name.toLowerCase()
            };
        return t.codecs.forEach((function (i) {
            for (var o = 0; o < e.codecs.length; o++) {
                var s = e.codecs[o];
                if (i.name.toLowerCase() === s.name.toLowerCase() && i.clockRate === s.clockRate) {
                    if ("rtx" === i.name.toLowerCase() && i.parameters && s.parameters.apt && !r(i, s, t.codecs, e.codecs)) continue;
                    (s = JSON.parse(JSON.stringify(s))).numChannels = Math.min(i.numChannels, s.numChannels), n.codecs.push(s), s.rtcpFeedback = s.rtcpFeedback.filter((function (t) {
                        for (var e = 0; e < i.rtcpFeedback.length; e++)
                            if (i.rtcpFeedback[e].type === t.type && i.rtcpFeedback[e].parameter === t.parameter) return !0;
                        return !1
                    }));
                    break
                }
            }
        })), t.headerExtensions.forEach((function (t) {
            for (var i = 0; i < e.headerExtensions.length; i++) {
                var r = e.headerExtensions[i];
                if (t.uri === r.uri) {
                    n.headerExtensions.push(r);
                    break
                }
            }
        })), n
    }

    function s(t, e, n) {
        return -1 !== {
            offer: {
                setLocalDescription: ["stable", "have-local-offer"],
                setRemoteDescription: ["stable", "have-remote-offer"]
            },
            answer: {
                setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
                setRemoteDescription: ["have-local-offer", "have-remote-pranswer"]
            }
        }[e][t].indexOf(n)
    }

    function a(t, e) {
        var n = t.getRemoteCandidates().find((function (t) {
            return e.foundation === t.foundation && e.ip === t.ip && e.port === t.port && e.priority === t.priority && e.protocol === t.protocol && e.type === t.type
        }));
        return n || t.addRemoteCandidate(e), !n
    }

    function c(t, e) {
        var n = new Error(e);
        return n.name = t, n.code = {
            NotSupportedError: 9,
            InvalidStateError: 11,
            InvalidAccessError: 15,
            TypeError: void 0,
            OperationError: void 0
        }[t], n
    }
    t.exports = function (t, e) {
        function n(e, n) {
            n.addTrack(e), n.dispatchEvent(new t.MediaStreamTrackEvent("addtrack", {
                track: e
            }))
        }

        function u(e, n, i, r) {
            var o = new Event("track");
            o.track = n, o.receiver = i, o.transceiver = {
                receiver: i
            }, o.streams = r, t.setTimeout((function () {
                e._dispatchEvent("track", o)
            }))
        }
        var h = function (n) {
            var r = this,
                o = document.createDocumentFragment();
            if (["addEventListener", "removeEventListener", "dispatchEvent"].forEach((function (t) {
                r[t] = o[t].bind(o)
            })), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.connectionState = "new", this.iceGatheringState = "new", n = JSON.parse(JSON.stringify(n || {})), this.usingBundle = "max-bundle" === n.bundlePolicy, "negotiate" === n.rtcpMuxPolicy) throw c("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
            switch (n.rtcpMuxPolicy || (n.rtcpMuxPolicy = "require"), n.iceTransportPolicy) {
                case "all":
                case "relay":
                    break;
                default:
                    n.iceTransportPolicy = "all"
            }
            switch (n.bundlePolicy) {
                case "balanced":
                case "max-compat":
                case "max-bundle":
                    break;
                default:
                    n.bundlePolicy = "balanced"
            }
            if (n.iceServers = function (t, e) {
                var n = !1;
                return (t = JSON.parse(JSON.stringify(t))).filter((function (t) {
                    if (t && (t.urls || t.url)) {
                        var i = t.urls || t.url;
                        t.url && !t.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
                        var r = "string" == typeof i;
                        return r && (i = [i]), i = i.filter((function (t) {
                            return 0 === t.indexOf("turn:") && -1 !== t.indexOf("transport=udp") && -1 === t.indexOf("turn:[") && !n ? (n = !0, !0) : 0 === t.indexOf("stun:") && e >= 14393 && -1 === t.indexOf("?transport=udp")
                        })), delete t.url, t.urls = r ? i[0] : i, !!i.length
                    }
                }))
            }(n.iceServers || [], e), this._iceGatherers = [], n.iceCandidatePoolSize)
                for (var s = n.iceCandidatePoolSize; s > 0; s--) this._iceGatherers.push(new t.RTCIceGatherer({
                    iceServers: n.iceServers,
                    gatherPolicy: n.iceTransportPolicy
                }));
            else n.iceCandidatePoolSize = 0;
            this._config = n, this.transceivers = [], this._sdpSessionId = i.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = !1
        };
        Object.defineProperty(h.prototype, "localDescription", {
            configurable: !0,
            get: function () {
                return this._localDescription
            }
        }), Object.defineProperty(h.prototype, "remoteDescription", {
            configurable: !0,
            get: function () {
                return this._remoteDescription
            }
        }), h.prototype.onicecandidate = null, h.prototype.onaddstream = null, h.prototype.ontrack = null, h.prototype.onremovestream = null, h.prototype.onsignalingstatechange = null, h.prototype.oniceconnectionstatechange = null, h.prototype.onconnectionstatechange = null, h.prototype.onicegatheringstatechange = null, h.prototype.onnegotiationneeded = null, h.prototype.ondatachannel = null, h.prototype._dispatchEvent = function (t, e) {
            this._isClosed || (this.dispatchEvent(e), "function" == typeof this["on" + t] && this["on" + t](e))
        }, h.prototype._emitGatheringStateChange = function () {
            var t = new Event("icegatheringstatechange");
            this._dispatchEvent("icegatheringstatechange", t)
        }, h.prototype.getConfiguration = function () {
            return this._config
        }, h.prototype.getLocalStreams = function () {
            return this.localStreams
        }, h.prototype.getRemoteStreams = function () {
            return this.remoteStreams
        }, h.prototype._createTransceiver = function (t, e) {
            var n = this.transceivers.length > 0,
                i = {
                    track: null,
                    iceGatherer: null,
                    iceTransport: null,
                    dtlsTransport: null,
                    localCapabilities: null,
                    remoteCapabilities: null,
                    rtpSender: null,
                    rtpReceiver: null,
                    kind: t,
                    mid: null,
                    sendEncodingParameters: null,
                    recvEncodingParameters: null,
                    stream: null,
                    associatedRemoteMediaStreams: [],
                    wantReceive: !0
                };
            if (this.usingBundle && n) i.iceTransport = this.transceivers[0].iceTransport, i.dtlsTransport = this.transceivers[0].dtlsTransport;
            else {
                var r = this._createIceAndDtlsTransports();
                i.iceTransport = r.iceTransport, i.dtlsTransport = r.dtlsTransport
            }
            return e || this.transceivers.push(i), i
        }, h.prototype.addTrack = function (e, n) {
            if (this._isClosed) throw c("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
            var i;
            if (this.transceivers.find((function (t) {
                return t.track === e
            }))) throw c("InvalidAccessError", "Track already exists.");
            for (var r = 0; r < this.transceivers.length; r++) this.transceivers[r].track || this.transceivers[r].kind !== e.kind || (i = this.transceivers[r]);
            return i || (i = this._createTransceiver(e.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(n) && this.localStreams.push(n), i.track = e, i.stream = n, i.rtpSender = new t.RTCRtpSender(e, i.dtlsTransport), i.rtpSender
        }, h.prototype.addStream = function (t) {
            var n = this;
            if (e >= 15025) t.getTracks().forEach((function (e) {
                n.addTrack(e, t)
            }));
            else {
                var i = t.clone();
                t.getTracks().forEach((function (t, e) {
                    var n = i.getTracks()[e];
                    t.addEventListener("enabled", (function (t) {
                        n.enabled = t.enabled
                    }))
                })), i.getTracks().forEach((function (t) {
                    n.addTrack(t, i)
                }))
            }
        }, h.prototype.removeTrack = function (e) {
            if (this._isClosed) throw c("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
            if (!(e instanceof t.RTCRtpSender)) throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");
            var n = this.transceivers.find((function (t) {
                return t.rtpSender === e
            }));
            if (!n) throw c("InvalidAccessError", "Sender was not created by this connection.");
            var i = n.stream;
            n.rtpSender.stop(), n.rtpSender = null, n.track = null, n.stream = null, -1 === this.transceivers.map((function (t) {
                return t.stream
            })).indexOf(i) && this.localStreams.indexOf(i) > -1 && this.localStreams.splice(this.localStreams.indexOf(i), 1), this._maybeFireNegotiationNeeded()
        }, h.prototype.removeStream = function (t) {
            var e = this;
            t.getTracks().forEach((function (t) {
                var n = e.getSenders().find((function (e) {
                    return e.track === t
                }));
                n && e.removeTrack(n)
            }))
        }, h.prototype.getSenders = function () {
            return this.transceivers.filter((function (t) {
                return !!t.rtpSender
            })).map((function (t) {
                return t.rtpSender
            }))
        }, h.prototype.getReceivers = function () {
            return this.transceivers.filter((function (t) {
                return !!t.rtpReceiver
            })).map((function (t) {
                return t.rtpReceiver
            }))
        }, h.prototype._createIceGatherer = function (e, n) {
            var i = this;
            if (n && e > 0) return this.transceivers[0].iceGatherer;
            if (this._iceGatherers.length) return this._iceGatherers.shift();
            var r = new t.RTCIceGatherer({
                iceServers: this._config.iceServers,
                gatherPolicy: this._config.iceTransportPolicy
            });
            return Object.defineProperty(r, "state", {
                value: "new",
                writable: !0
            }), this.transceivers[e].bufferedCandidateEvents = [], this.transceivers[e].bufferCandidates = function (t) {
                var n = !t.candidate || 0 === Object.keys(t.candidate).length;
                r.state = n ? "completed" : "gathering", null !== i.transceivers[e].bufferedCandidateEvents && i.transceivers[e].bufferedCandidateEvents.push(t)
            }, r.addEventListener("localcandidate", this.transceivers[e].bufferCandidates), r
        }, h.prototype._gather = function (e, n) {
            var r = this,
                o = this.transceivers[n].iceGatherer;
            if (!o.onlocalcandidate) {
                var s = this.transceivers[n].bufferedCandidateEvents;
                this.transceivers[n].bufferedCandidateEvents = null, o.removeEventListener("localcandidate", this.transceivers[n].bufferCandidates), o.onlocalcandidate = function (t) {
                    if (!(r.usingBundle && n > 0)) {
                        var s = new Event("icecandidate");
                        s.candidate = {
                            sdpMid: e,
                            sdpMLineIndex: n
                        };
                        var a = t.candidate,
                            c = !a || 0 === Object.keys(a).length;
                        if (c) "new" !== o.state && "gathering" !== o.state || (o.state = "completed");
                        else {
                            "new" === o.state && (o.state = "gathering"), a.component = 1, a.ufrag = o.getLocalParameters().usernameFragment;
                            var u = i.writeCandidate(a);
                            s.candidate = Object.assign(s.candidate, i.parseCandidate(u)), s.candidate.candidate = u, s.candidate.toJSON = function () {
                                return {
                                    candidate: s.candidate.candidate,
                                    sdpMid: s.candidate.sdpMid,
                                    sdpMLineIndex: s.candidate.sdpMLineIndex,
                                    usernameFragment: s.candidate.usernameFragment
                                }
                            }
                        }
                        var h = i.getMediaSections(r._localDescription.sdp);
                        h[s.candidate.sdpMLineIndex] += c ? "a=end-of-candidates\r\n" : "a=" + s.candidate.candidate + "\r\n", r._localDescription.sdp = i.getDescription(r._localDescription.sdp) + h.join("");
                        var l = r.transceivers.every((function (t) {
                            return t.iceGatherer && "completed" === t.iceGatherer.state
                        }));
                        "gathering" !== r.iceGatheringState && (r.iceGatheringState = "gathering", r._emitGatheringStateChange()), c || r._dispatchEvent("icecandidate", s), l && (r._dispatchEvent("icecandidate", new Event("icecandidate")), r.iceGatheringState = "complete", r._emitGatheringStateChange())
                    }
                }, t.setTimeout((function () {
                    s.forEach((function (t) {
                        o.onlocalcandidate(t)
                    }))
                }), 0)
            }
        }, h.prototype._createIceAndDtlsTransports = function () {
            var e = this,
                n = new t.RTCIceTransport(null);
            n.onicestatechange = function () {
                e._updateIceConnectionState(), e._updateConnectionState()
            };
            var i = new t.RTCDtlsTransport(n);
            return i.ondtlsstatechange = function () {
                e._updateConnectionState()
            }, i.onerror = function () {
                Object.defineProperty(i, "state", {
                    value: "failed",
                    writable: !0
                }), e._updateConnectionState()
            }, {
                iceTransport: n,
                dtlsTransport: i
            }
        }, h.prototype._disposeIceAndDtlsTransports = function (t) {
            var e = this.transceivers[t].iceGatherer;
            e && (delete e.onlocalcandidate, delete this.transceivers[t].iceGatherer);
            var n = this.transceivers[t].iceTransport;
            n && (delete n.onicestatechange, delete this.transceivers[t].iceTransport);
            var i = this.transceivers[t].dtlsTransport;
            i && (delete i.ondtlsstatechange, delete i.onerror, delete this.transceivers[t].dtlsTransport)
        }, h.prototype._transceive = function (t, n, r) {
            var s = o(t.localCapabilities, t.remoteCapabilities);
            n && t.rtpSender && (s.encodings = t.sendEncodingParameters, s.rtcp = {
                cname: i.localCName,
                compound: t.rtcpParameters.compound
            }, t.recvEncodingParameters.length && (s.rtcp.ssrc = t.recvEncodingParameters[0].ssrc), t.rtpSender.send(s)), r && t.rtpReceiver && s.codecs.length > 0 && ("video" === t.kind && t.recvEncodingParameters && e < 15019 && t.recvEncodingParameters.forEach((function (t) {
                delete t.rtx
            })), t.recvEncodingParameters.length ? s.encodings = t.recvEncodingParameters : s.encodings = [{}], s.rtcp = {
                compound: t.rtcpParameters.compound
            }, t.rtcpParameters.cname && (s.rtcp.cname = t.rtcpParameters.cname), t.sendEncodingParameters.length && (s.rtcp.ssrc = t.sendEncodingParameters[0].ssrc), t.rtpReceiver.receive(s))
        }, h.prototype.setLocalDescription = function (t) {
            var e, n, r = this;
            if (-1 === ["offer", "answer"].indexOf(t.type)) return Promise.reject(c("TypeError", 'Unsupported type "' + t.type + '"'));
            if (!s("setLocalDescription", t.type, r.signalingState) || r._isClosed) return Promise.reject(c("InvalidStateError", "Can not set local " + t.type + " in state " + r.signalingState));
            if ("offer" === t.type) e = i.splitSections(t.sdp), n = e.shift(), e.forEach((function (t, e) {
                var n = i.parseRtpParameters(t);
                r.transceivers[e].localCapabilities = n
            })), r.transceivers.forEach((function (t, e) {
                r._gather(t.mid, e)
            }));
            else if ("answer" === t.type) {
                e = i.splitSections(r._remoteDescription.sdp), n = e.shift();
                var a = i.matchPrefix(n, "a=ice-lite").length > 0;
                e.forEach((function (t, e) {
                    var s = r.transceivers[e],
                        c = s.iceGatherer,
                        u = s.iceTransport,
                        h = s.dtlsTransport,
                        l = s.localCapabilities,
                        d = s.remoteCapabilities;
                    if (!(i.isRejected(t) && 0 === i.matchPrefix(t, "a=bundle-only").length) && !s.rejected) {
                        var p = i.getIceParameters(t, n),
                            f = i.getDtlsParameters(t, n);
                        a && (f.role = "server"), r.usingBundle && 0 !== e || (r._gather(s.mid, e), "new" === u.state && u.start(c, p, a ? "controlling" : "controlled"), "new" === h.state && h.start(f));
                        var m = o(l, d);
                        r._transceive(s, m.codecs.length > 0, !1)
                    }
                }))
            }
            return r._localDescription = {
                type: t.type,
                sdp: t.sdp
            }, "offer" === t.type ? r._updateSignalingState("have-local-offer") : r._updateSignalingState("stable"), Promise.resolve()
        }, h.prototype.setRemoteDescription = function (r) {
            var o = this;
            if (-1 === ["offer", "answer"].indexOf(r.type)) return Promise.reject(c("TypeError", 'Unsupported type "' + r.type + '"'));
            if (!s("setRemoteDescription", r.type, o.signalingState) || o._isClosed) return Promise.reject(c("InvalidStateError", "Can not set remote " + r.type + " in state " + o.signalingState));
            var h = {};
            o.remoteStreams.forEach((function (t) {
                h[t.id] = t
            }));
            var l = [],
                d = i.splitSections(r.sdp),
                p = d.shift(),
                f = i.matchPrefix(p, "a=ice-lite").length > 0,
                m = i.matchPrefix(p, "a=group:BUNDLE ").length > 0;
            o.usingBundle = m;
            var g = i.matchPrefix(p, "a=ice-options:")[0];
            return o.canTrickleIceCandidates = !!g && g.substr(14).split(" ").indexOf("trickle") >= 0, d.forEach((function (s, c) {
                var u = i.splitLines(s),
                    d = i.getKind(s),
                    g = i.isRejected(s) && 0 === i.matchPrefix(s, "a=bundle-only").length,
                    v = u[0].substr(2).split(" ")[2],
                    b = i.getDirection(s, p),
                    y = i.parseMsid(s),
                    _ = i.getMid(s) || i.generateIdentifier();
                if (g || "application" === d && ("DTLS/SCTP" === v || "UDP/DTLS/SCTP" === v)) o.transceivers[c] = {
                    mid: _,
                    kind: d,
                    protocol: v,
                    rejected: !0
                };
                else {
                    var w, x, T, S, C, k, E, O, M;
                    !g && o.transceivers[c] && o.transceivers[c].rejected && (o.transceivers[c] = o._createTransceiver(d, !0));
                    var I, A, R = i.parseRtpParameters(s);
                    g || (I = i.getIceParameters(s, p), (A = i.getDtlsParameters(s, p)).role = "client"), E = i.parseRtpEncodingParameters(s);
                    var P = i.parseRtcpParameters(s),
                        D = i.matchPrefix(s, "a=end-of-candidates", p).length > 0,
                        j = i.matchPrefix(s, "a=candidate:").map((function (t) {
                            return i.parseCandidate(t)
                        })).filter((function (t) {
                            return 1 === t.component
                        }));
                    if (("offer" === r.type || "answer" === r.type) && !g && m && c > 0 && o.transceivers[c] && (o._disposeIceAndDtlsTransports(c), o.transceivers[c].iceGatherer = o.transceivers[0].iceGatherer, o.transceivers[c].iceTransport = o.transceivers[0].iceTransport, o.transceivers[c].dtlsTransport = o.transceivers[0].dtlsTransport, o.transceivers[c].rtpSender && o.transceivers[c].rtpSender.setTransport(o.transceivers[0].dtlsTransport), o.transceivers[c].rtpReceiver && o.transceivers[c].rtpReceiver.setTransport(o.transceivers[0].dtlsTransport)), "offer" !== r.type || g) "answer" !== r.type || g || (x = (w = o.transceivers[c]).iceGatherer, T = w.iceTransport, S = w.dtlsTransport, C = w.rtpReceiver, k = w.sendEncodingParameters, O = w.localCapabilities, o.transceivers[c].recvEncodingParameters = E, o.transceivers[c].remoteCapabilities = R, o.transceivers[c].rtcpParameters = P, j.length && "new" === T.state && (!f && !D || m && 0 !== c ? j.forEach((function (t) {
                        a(w.iceTransport, t)
                    })) : T.setRemoteCandidates(j)), m && 0 !== c || ("new" === T.state && T.start(x, I, "controlling"), "new" === S.state && S.start(A)), o._transceive(w, "sendrecv" === b || "recvonly" === b, "sendrecv" === b || "sendonly" === b), !C || "sendrecv" !== b && "sendonly" !== b ? delete w.rtpReceiver : (M = C.track, y ? (h[y.stream] || (h[y.stream] = new t.MediaStream), n(M, h[y.stream]), l.push([M, C, h[y.stream]])) : (h.default || (h.default = new t.MediaStream), n(M, h.default), l.push([M, C, h.default]))));
                    else {
                        (w = o.transceivers[c] || o._createTransceiver(d)).mid = _, w.iceGatherer || (w.iceGatherer = o._createIceGatherer(c, m)), j.length && "new" === w.iceTransport.state && (!D || m && 0 !== c ? j.forEach((function (t) {
                            a(w.iceTransport, t)
                        })) : w.iceTransport.setRemoteCandidates(j)), O = t.RTCRtpReceiver.getCapabilities(d), e < 15019 && (O.codecs = O.codecs.filter((function (t) {
                            return "rtx" !== t.name
                        }))), k = w.sendEncodingParameters || [{
                            ssrc: 1001 * (2 * c + 2)
                        }];
                        var N, L = !1;
                        if ("sendrecv" === b || "sendonly" === b) {
                            if (L = !w.rtpReceiver, C = w.rtpReceiver || new t.RTCRtpReceiver(w.dtlsTransport, d), L) M = C.track, y && "-" === y.stream || (y ? (h[y.stream] || (h[y.stream] = new t.MediaStream, Object.defineProperty(h[y.stream], "id", {
                                get: function () {
                                    return y.stream
                                }
                            })), Object.defineProperty(M, "id", {
                                get: function () {
                                    return y.track
                                }
                            }), N = h[y.stream]) : (h.default || (h.default = new t.MediaStream), N = h.default)), N && (n(M, N), w.associatedRemoteMediaStreams.push(N)), l.push([M, C, N])
                        } else w.rtpReceiver && w.rtpReceiver.track && (w.associatedRemoteMediaStreams.forEach((function (e) {
                            var n = e.getTracks().find((function (t) {
                                return t.id === w.rtpReceiver.track.id
                            }));
                            n && function (e, n) {
                                n.removeTrack(e), n.dispatchEvent(new t.MediaStreamTrackEvent("removetrack", {
                                    track: e
                                }))
                            }(n, e)
                        })), w.associatedRemoteMediaStreams = []);
                        w.localCapabilities = O, w.remoteCapabilities = R, w.rtpReceiver = C, w.rtcpParameters = P, w.sendEncodingParameters = k, w.recvEncodingParameters = E, o._transceive(o.transceivers[c], !1, L)
                    }
                }
            })), void 0 === o._dtlsRole && (o._dtlsRole = "offer" === r.type ? "active" : "passive"), o._remoteDescription = {
                type: r.type,
                sdp: r.sdp
            }, "offer" === r.type ? o._updateSignalingState("have-remote-offer") : o._updateSignalingState("stable"), Object.keys(h).forEach((function (e) {
                var n = h[e];
                if (n.getTracks().length) {
                    if (-1 === o.remoteStreams.indexOf(n)) {
                        o.remoteStreams.push(n);
                        var i = new Event("addstream");
                        i.stream = n, t.setTimeout((function () {
                            o._dispatchEvent("addstream", i)
                        }))
                    }
                    l.forEach((function (t) {
                        var e = t[0],
                            i = t[1];
                        n.id === t[2].id && u(o, e, i, [n])
                    }))
                }
            })), l.forEach((function (t) {
                t[2] || u(o, t[0], t[1], [])
            })), t.setTimeout((function () {
                o && o.transceivers && o.transceivers.forEach((function (t) {
                    t.iceTransport && "new" === t.iceTransport.state && t.iceTransport.getRemoteCandidates().length > 0 && (console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), t.iceTransport.addRemoteCandidate({}))
                }))
            }), 4e3), Promise.resolve()
        }, h.prototype.close = function () {
            this.transceivers.forEach((function (t) {
                t.iceTransport && t.iceTransport.stop(), t.dtlsTransport && t.dtlsTransport.stop(), t.rtpSender && t.rtpSender.stop(), t.rtpReceiver && t.rtpReceiver.stop()
            })), this._isClosed = !0, this._updateSignalingState("closed")
        }, h.prototype._updateSignalingState = function (t) {
            this.signalingState = t;
            var e = new Event("signalingstatechange");
            this._dispatchEvent("signalingstatechange", e)
        }, h.prototype._maybeFireNegotiationNeeded = function () {
            var e = this;
            "stable" === this.signalingState && !0 !== this.needNegotiation && (this.needNegotiation = !0, t.setTimeout((function () {
                if (e.needNegotiation) {
                    e.needNegotiation = !1;
                    var t = new Event("negotiationneeded");
                    e._dispatchEvent("negotiationneeded", t)
                }
            }), 0))
        }, h.prototype._updateIceConnectionState = function () {
            var t, e = {
                new: 0,
                closed: 0,
                checking: 0,
                connected: 0,
                completed: 0,
                disconnected: 0,
                failed: 0
            };
            if (this.transceivers.forEach((function (t) {
                e[t.iceTransport.state]++
            })), t = "new", e.failed > 0 ? t = "failed" : e.checking > 0 ? t = "checking" : e.disconnected > 0 ? t = "disconnected" : e.new > 0 ? t = "new" : e.connected > 0 ? t = "connected" : e.completed > 0 && (t = "completed"), t !== this.iceConnectionState) {
                this.iceConnectionState = t;
                var n = new Event("iceconnectionstatechange");
                this._dispatchEvent("iceconnectionstatechange", n)
            }
        }, h.prototype._updateConnectionState = function () {
            var t, e = {
                new: 0,
                closed: 0,
                connecting: 0,
                connected: 0,
                completed: 0,
                disconnected: 0,
                failed: 0
            };
            if (this.transceivers.forEach((function (t) {
                e[t.iceTransport.state]++, e[t.dtlsTransport.state]++
            })), e.connected += e.completed, t = "new", e.failed > 0 ? t = "failed" : e.connecting > 0 ? t = "connecting" : e.disconnected > 0 ? t = "disconnected" : e.new > 0 ? t = "new" : e.connected > 0 && (t = "connected"), t !== this.connectionState) {
                this.connectionState = t;
                var n = new Event("connectionstatechange");
                this._dispatchEvent("connectionstatechange", n)
            }
        }, h.prototype.createOffer = function () {
            var n = this;
            if (n._isClosed) return Promise.reject(c("InvalidStateError", "Can not call createOffer after close"));
            var o = n.transceivers.filter((function (t) {
                return "audio" === t.kind
            })).length,
                s = n.transceivers.filter((function (t) {
                    return "video" === t.kind
                })).length,
                a = arguments[0];
            if (a) {
                if (a.mandatory || a.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
                void 0 !== a.offerToReceiveAudio && (o = !0 === a.offerToReceiveAudio ? 1 : !1 === a.offerToReceiveAudio ? 0 : a.offerToReceiveAudio), void 0 !== a.offerToReceiveVideo && (s = !0 === a.offerToReceiveVideo ? 1 : !1 === a.offerToReceiveVideo ? 0 : a.offerToReceiveVideo)
            }
            for (n.transceivers.forEach((function (t) {
                "audio" === t.kind ? --o < 0 && (t.wantReceive = !1) : "video" === t.kind && --s < 0 && (t.wantReceive = !1)
            })); o > 0 || s > 0;) o > 0 && (n._createTransceiver("audio"), o--), s > 0 && (n._createTransceiver("video"), s--);
            var u = i.writeSessionBoilerplate(n._sdpSessionId, n._sdpSessionVersion++);
            n.transceivers.forEach((function (r, o) {
                var s = r.track,
                    a = r.kind,
                    c = r.mid || i.generateIdentifier();
                r.mid = c, r.iceGatherer || (r.iceGatherer = n._createIceGatherer(o, n.usingBundle));
                var u = t.RTCRtpSender.getCapabilities(a);
                e < 15019 && (u.codecs = u.codecs.filter((function (t) {
                    return "rtx" !== t.name
                }))), u.codecs.forEach((function (t) {
                    "H264" === t.name && void 0 === t.parameters["level-asymmetry-allowed"] && (t.parameters["level-asymmetry-allowed"] = "1"), r.remoteCapabilities && r.remoteCapabilities.codecs && r.remoteCapabilities.codecs.forEach((function (e) {
                        t.name.toLowerCase() === e.name.toLowerCase() && t.clockRate === e.clockRate && (t.preferredPayloadType = e.payloadType)
                    }))
                })), u.headerExtensions.forEach((function (t) {
                    (r.remoteCapabilities && r.remoteCapabilities.headerExtensions || []).forEach((function (e) {
                        t.uri === e.uri && (t.id = e.id)
                    }))
                }));
                var h = r.sendEncodingParameters || [{
                    ssrc: 1001 * (2 * o + 1)
                }];
                s && e >= 15019 && "video" === a && !h[0].rtx && (h[0].rtx = {
                    ssrc: h[0].ssrc + 1
                }), r.wantReceive && (r.rtpReceiver = new t.RTCRtpReceiver(r.dtlsTransport, a)), r.localCapabilities = u, r.sendEncodingParameters = h
            })), "max-compat" !== n._config.bundlePolicy && (u += "a=group:BUNDLE " + n.transceivers.map((function (t) {
                return t.mid
            })).join(" ") + "\r\n"), u += "a=ice-options:trickle\r\n", n.transceivers.forEach((function (t, e) {
                u += r(t, t.localCapabilities, "offer", t.stream, n._dtlsRole), u += "a=rtcp-rsize\r\n", !t.iceGatherer || "new" === n.iceGatheringState || 0 !== e && n.usingBundle || (t.iceGatherer.getLocalCandidates().forEach((function (t) {
                    t.component = 1, u += "a=" + i.writeCandidate(t) + "\r\n"
                })), "completed" === t.iceGatherer.state && (u += "a=end-of-candidates\r\n"))
            }));
            var h = new t.RTCSessionDescription({
                type: "offer",
                sdp: u
            });
            return Promise.resolve(h)
        }, h.prototype.createAnswer = function () {
            var n = this;
            if (n._isClosed) return Promise.reject(c("InvalidStateError", "Can not call createAnswer after close"));
            if ("have-remote-offer" !== n.signalingState && "have-local-pranswer" !== n.signalingState) return Promise.reject(c("InvalidStateError", "Can not call createAnswer in signalingState " + n.signalingState));
            var s = i.writeSessionBoilerplate(n._sdpSessionId, n._sdpSessionVersion++);
            n.usingBundle && (s += "a=group:BUNDLE " + n.transceivers.map((function (t) {
                return t.mid
            })).join(" ") + "\r\n");
            var a = i.getMediaSections(n._remoteDescription.sdp).length;
            n.transceivers.forEach((function (t, i) {
                if (!(i + 1 > a)) {
                    if (t.rejected) return "application" === t.kind ? "DTLS/SCTP" === t.protocol ? s += "m=application 0 DTLS/SCTP 5000\r\n" : s += "m=application 0 " + t.protocol + " webrtc-datachannel\r\n" : "audio" === t.kind ? s += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n" : "video" === t.kind && (s += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"), void (s += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + t.mid + "\r\n");
                    var c;
                    if (t.stream) "audio" === t.kind ? c = t.stream.getAudioTracks()[0] : "video" === t.kind && (c = t.stream.getVideoTracks()[0]), c && e >= 15019 && "video" === t.kind && !t.sendEncodingParameters[0].rtx && (t.sendEncodingParameters[0].rtx = {
                        ssrc: t.sendEncodingParameters[0].ssrc + 1
                    });
                    var u = o(t.localCapabilities, t.remoteCapabilities);
                    !u.codecs.filter((function (t) {
                        return "rtx" === t.name.toLowerCase()
                    })).length && t.sendEncodingParameters[0].rtx && delete t.sendEncodingParameters[0].rtx, s += r(t, u, "answer", t.stream, n._dtlsRole), t.rtcpParameters && t.rtcpParameters.reducedSize && (s += "a=rtcp-rsize\r\n")
                }
            }));
            var u = new t.RTCSessionDescription({
                type: "answer",
                sdp: s
            });
            return Promise.resolve(u)
        }, h.prototype.addIceCandidate = function (t) {
            var e, n = this;
            return t && void 0 === t.sdpMLineIndex && !t.sdpMid ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")) : new Promise((function (r, o) {
                if (!n._remoteDescription) return o(c("InvalidStateError", "Can not add ICE candidate without a remote description"));
                if (t && "" !== t.candidate) {
                    var s = t.sdpMLineIndex;
                    if (t.sdpMid)
                        for (var u = 0; u < n.transceivers.length; u++)
                            if (n.transceivers[u].mid === t.sdpMid) {
                                s = u;
                                break
                            } var h = n.transceivers[s];
                    if (!h) return o(c("OperationError", "Can not add ICE candidate"));
                    if (h.rejected) return r();
                    var l = Object.keys(t.candidate).length > 0 ? i.parseCandidate(t.candidate) : {};
                    if ("tcp" === l.protocol && (0 === l.port || 9 === l.port)) return r();
                    if (l.component && 1 !== l.component) return r();
                    if ((0 === s || s > 0 && h.iceTransport !== n.transceivers[0].iceTransport) && !a(h.iceTransport, l)) return o(c("OperationError", "Can not add ICE candidate"));
                    var d = t.candidate.trim();
                    0 === d.indexOf("a=") && (d = d.substr(2)), (e = i.getMediaSections(n._remoteDescription.sdp))[s] += "a=" + (l.type ? d : "end-of-candidates") + "\r\n", n._remoteDescription.sdp = i.getDescription(n._remoteDescription.sdp) + e.join("")
                } else
                    for (var p = 0; p < n.transceivers.length && (n.transceivers[p].rejected || (n.transceivers[p].iceTransport.addRemoteCandidate({}), (e = i.getMediaSections(n._remoteDescription.sdp))[p] += "a=end-of-candidates\r\n", n._remoteDescription.sdp = i.getDescription(n._remoteDescription.sdp) + e.join(""), !n.usingBundle)); p++);
                r()
            }))
        }, h.prototype.getStats = function (e) {
            if (e && e instanceof t.MediaStreamTrack) {
                var n = null;
                if (this.transceivers.forEach((function (t) {
                    t.rtpSender && t.rtpSender.track === e ? n = t.rtpSender : t.rtpReceiver && t.rtpReceiver.track === e && (n = t.rtpReceiver)
                })), !n) throw c("InvalidAccessError", "Invalid selector.");
                return n.getStats()
            }
            var i = [];
            return this.transceivers.forEach((function (t) {
                ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach((function (e) {
                    t[e] && i.push(t[e].getStats())
                }))
            })), Promise.all(i).then((function (t) {
                var e = new Map;
                return t.forEach((function (t) {
                    t.forEach((function (t) {
                        e.set(t.id, t)
                    }))
                })), e
            }))
        };
        ["RTCRtpSender", "RTCRtpReceiver", "RTCIceGatherer", "RTCIceTransport", "RTCDtlsTransport"].forEach((function (e) {
            var n = t[e];
            if (n && n.prototype && n.prototype.getStats) {
                var i = n.prototype.getStats;
                n.prototype.getStats = function () {
                    return i.apply(this).then((function (t) {
                        var e = new Map;
                        return Object.keys(t).forEach((function (n) {
                            var i;
                            t[n].type = {
                                inboundrtp: "inbound-rtp",
                                outboundrtp: "outbound-rtp",
                                candidatepair: "candidate-pair",
                                localcandidate: "local-candidate",
                                remotecandidate: "remote-candidate"
                            }[(i = t[n]).type] || i.type, e.set(n, t[n])
                        })), e
                    }))
                }
            }
        }));
        var l = ["createOffer", "createAnswer"];
        return l.forEach((function (t) {
            var e = h.prototype[t];
            h.prototype[t] = function () {
                var t = arguments;
                return "function" == typeof t[0] || "function" == typeof t[1] ? e.apply(this, [arguments[2]]).then((function (e) {
                    "function" == typeof t[0] && t[0].apply(null, [e])
                }), (function (e) {
                    "function" == typeof t[1] && t[1].apply(null, [e])
                })) : e.apply(this, arguments)
            }
        })), (l = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"]).forEach((function (t) {
            var e = h.prototype[t];
            h.prototype[t] = function () {
                var t = arguments;
                return "function" == typeof t[1] || "function" == typeof t[2] ? e.apply(this, arguments).then((function () {
                    "function" == typeof t[1] && t[1].apply(null)
                }), (function (e) {
                    "function" == typeof t[2] && t[2].apply(null, [e])
                })) : e.apply(this, arguments)
            }
        })), ["getStats"].forEach((function (t) {
            var e = h.prototype[t];
            h.prototype[t] = function () {
                var t = arguments;
                return "function" == typeof t[1] ? e.apply(this, arguments).then((function () {
                    "function" == typeof t[1] && t[1].apply(null)
                })) : e.apply(this, arguments)
            }
        })), h
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
        var e = t && t.navigator,
            n = e.mediaDevices.getUserMedia.bind(e.mediaDevices);
        e.mediaDevices.getUserMedia = function (t) {
            return n(t).catch((function (t) {
                return Promise.reject(function (t) {
                    return {
                        name: {
                            PermissionDeniedError: "NotAllowedError"
                        }[t.name] || t.name,
                        message: t.message,
                        constraint: t.constraint,
                        toString: function () {
                            return this.name
                        }
                    }
                }(t))
            }))
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(25);
    t.exports = {
        shimGetUserMedia: n(742),
        shimOnTrack: function (t) {
            "object" == typeof t && t.RTCPeerConnection && !("ontrack" in t.RTCPeerConnection.prototype) && Object.defineProperty(t.RTCPeerConnection.prototype, "ontrack", {
                get: function () {
                    return this._ontrack
                },
                set: function (t) {
                    this._ontrack && (this.removeEventListener("track", this._ontrack), this.removeEventListener("addstream", this._ontrackpoly)), this.addEventListener("track", this._ontrack = t), this.addEventListener("addstream", this._ontrackpoly = function (t) {
                        t.stream.getTracks().forEach(function (e) {
                            var n = new Event("track");
                            n.track = e, n.receiver = {
                                track: e
                            }, n.transceiver = {
                                receiver: n.receiver
                            }, n.streams = [t.stream], this.dispatchEvent(n)
                        }.bind(this))
                    }.bind(this))
                },
                enumerable: !0,
                configurable: !0
            }), "object" == typeof t && t.RTCTrackEvent && "receiver" in t.RTCTrackEvent.prototype && !("transceiver" in t.RTCTrackEvent.prototype) && Object.defineProperty(t.RTCTrackEvent.prototype, "transceiver", {
                get: function () {
                    return {
                        receiver: this.receiver
                    }
                }
            })
        },
        shimSourceObject: function (t) {
            "object" == typeof t && t.HTMLMediaElement && !("srcObject" in t.HTMLMediaElement.prototype) && Object.defineProperty(t.HTMLMediaElement.prototype, "srcObject", {
                get: function () {
                    return this.mozSrcObject
                },
                set: function (t) {
                    this.mozSrcObject = t
                }
            })
        },
        shimPeerConnection: function (t) {
            var e = i.detectBrowser(t);
            if ("object" == typeof t && (t.RTCPeerConnection || t.mozRTCPeerConnection)) {
                t.RTCPeerConnection || (t.RTCPeerConnection = function (n, i) {
                    if (e.version < 38 && n && n.iceServers) {
                        for (var r = [], o = 0; o < n.iceServers.length; o++) {
                            var s = n.iceServers[o];
                            if (s.hasOwnProperty("urls"))
                                for (var a = 0; a < s.urls.length; a++) {
                                    var c = {
                                        url: s.urls[a]
                                    };
                                    0 === s.urls[a].indexOf("turn") && (c.username = s.username, c.credential = s.credential), r.push(c)
                                } else r.push(n.iceServers[o])
                        }
                        n.iceServers = r
                    }
                    return new t.mozRTCPeerConnection(n, i)
                }, t.RTCPeerConnection.prototype = t.mozRTCPeerConnection.prototype, t.mozRTCPeerConnection.generateCertificate && Object.defineProperty(t.RTCPeerConnection, "generateCertificate", {
                    get: function () {
                        return t.mozRTCPeerConnection.generateCertificate
                    }
                }), t.RTCSessionDescription = t.mozRTCSessionDescription, t.RTCIceCandidate = t.mozRTCIceCandidate), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach((function (e) {
                    var n = t.RTCPeerConnection.prototype[e];
                    t.RTCPeerConnection.prototype[e] = function () {
                        return arguments[0] = new ("addIceCandidate" === e ? t.RTCIceCandidate : t.RTCSessionDescription)(arguments[0]), n.apply(this, arguments)
                    }
                }));
                var n = t.RTCPeerConnection.prototype.addIceCandidate;
                t.RTCPeerConnection.prototype.addIceCandidate = function () {
                    return arguments[0] ? n.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
                };
                var r = {
                    inboundrtp: "inbound-rtp",
                    outboundrtp: "outbound-rtp",
                    candidatepair: "candidate-pair",
                    localcandidate: "local-candidate",
                    remotecandidate: "remote-candidate"
                },
                    o = t.RTCPeerConnection.prototype.getStats;
                t.RTCPeerConnection.prototype.getStats = function (t, n, i) {
                    return o.apply(this, [t || null]).then((function (t) {
                        if (e.version < 48 && (t = function (t) {
                            var e = new Map;
                            return Object.keys(t).forEach((function (n) {
                                e.set(n, t[n]), e[n] = t[n]
                            })), e
                        }(t)), e.version < 53 && !n) try {
                            t.forEach((function (t) {
                                t.type = r[t.type] || t.type
                            }))
                        } catch (e) {
                            if ("TypeError" !== e.name) throw e;
                            t.forEach((function (e, n) {
                                t.set(n, Object.assign({}, e, {
                                    type: r[e.type] || e.type
                                }))
                            }))
                        }
                        return t
                    })).then(n, i)
                }
            }
        },
        shimSenderGetStats: function (t) {
            if ("object" == typeof t && t.RTCPeerConnection && t.RTCRtpSender && (!t.RTCRtpSender || !("getStats" in t.RTCRtpSender.prototype))) {
                var e = t.RTCPeerConnection.prototype.getSenders;
                e && (t.RTCPeerConnection.prototype.getSenders = function () {
                    var t = this,
                        n = e.apply(t, []);
                    return n.forEach((function (e) {
                        e._pc = t
                    })), n
                });
                var n = t.RTCPeerConnection.prototype.addTrack;
                n && (t.RTCPeerConnection.prototype.addTrack = function () {
                    var t = n.apply(this, arguments);
                    return t._pc = this, t
                }), t.RTCRtpSender.prototype.getStats = function () {
                    return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map)
                }
            }
        },
        shimReceiverGetStats: function (t) {
            if ("object" == typeof t && t.RTCPeerConnection && t.RTCRtpSender && (!t.RTCRtpSender || !("getStats" in t.RTCRtpReceiver.prototype))) {
                var e = t.RTCPeerConnection.prototype.getReceivers;
                e && (t.RTCPeerConnection.prototype.getReceivers = function () {
                    var t = this,
                        n = e.apply(t, []);
                    return n.forEach((function (e) {
                        e._pc = t
                    })), n
                }), i.wrapPeerConnectionEvent(t, "track", (function (t) {
                    return t.receiver._pc = t.srcElement, t
                })), t.RTCRtpReceiver.prototype.getStats = function () {
                    return this._pc.getStats(this.track)
                }
            }
        },
        shimRemoveStream: function (t) {
            t.RTCPeerConnection && !("removeStream" in t.RTCPeerConnection.prototype) && (t.RTCPeerConnection.prototype.removeStream = function (t) {
                var e = this;
                i.deprecated("removeStream", "removeTrack"), this.getSenders().forEach((function (n) {
                    n.track && -1 !== t.getTracks().indexOf(n.track) && e.removeTrack(n)
                }))
            })
        },
        shimRTCDataChannel: function (t) {
            t.DataChannel && !t.RTCDataChannel && (t.RTCDataChannel = t.DataChannel)
        },
        shimGetDisplayMedia: function (t, e) {
            "getDisplayMedia" in t.navigator || (navigator.getDisplayMedia = function (t) {
                if (!t || !t.video) {
                    var n = new DOMException("getDisplayMedia without video constraints is undefined");
                    return n.name = "NotFoundError", n.code = 8, Promise.reject(n)
                }
                return !0 === t.video ? t.video = {
                    mediaSource: e
                } : t.video.mediaSource = e, navigator.mediaDevices.getUserMedia(t)
            })
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(25),
        r = i.log;
    t.exports = function (t) {
        var e = i.detectBrowser(t),
            n = t && t.navigator,
            o = t && t.MediaStreamTrack,
            s = function (t) {
                return {
                    name: {
                        InternalError: "NotReadableError",
                        NotSupportedError: "TypeError",
                        PermissionDeniedError: "NotAllowedError",
                        SecurityError: "NotAllowedError"
                    }[t.name] || t.name,
                    message: {
                        "The operation is insecure.": "The request is not allowed by the user agent or the platform in the current context."
                    }[t.message] || t.message,
                    constraint: t.constraint,
                    toString: function () {
                        return this.name + (this.message && ": ") + this.message
                    }
                }
            },
            a = function (t, i, o) {
                var a = function (t) {
                    if ("object" != typeof t || t.require) return t;
                    var e = [];
                    return Object.keys(t).forEach((function (n) {
                        if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                            var i = t[n] = "object" == typeof t[n] ? t[n] : {
                                ideal: t[n]
                            };
                            if (void 0 === i.min && void 0 === i.max && void 0 === i.exact || e.push(n), void 0 !== i.exact && ("number" == typeof i.exact ? i.min = i.max = i.exact : t[n] = i.exact, delete i.exact), void 0 !== i.ideal) {
                                t.advanced = t.advanced || [];
                                var r = {};
                                "number" == typeof i.ideal ? r[n] = {
                                    min: i.ideal,
                                    max: i.ideal
                                } : r[n] = i.ideal, t.advanced.push(r), delete i.ideal, Object.keys(i).length || delete t[n]
                            }
                        }
                    })), e.length && (t.require = e), t
                };
                return t = JSON.parse(JSON.stringify(t)), e.version < 38 && (r("spec: " + JSON.stringify(t)), t.audio && (t.audio = a(t.audio)), t.video && (t.video = a(t.video)), r("ff37: " + JSON.stringify(t))), n.mozGetUserMedia(t, i, (function (t) {
                    o(s(t))
                }))
            };
        if (n.mediaDevices || (n.mediaDevices = {
            getUserMedia: function (t) {
                return new Promise((function (e, n) {
                    a(t, e, n)
                }))
            },
            addEventListener: function () { },
            removeEventListener: function () { }
        }), n.mediaDevices.enumerateDevices = n.mediaDevices.enumerateDevices || function () {
            return new Promise((function (t) {
                t([{
                    kind: "audioinput",
                    deviceId: "default",
                    label: "",
                    groupId: ""
                }, {
                    kind: "videoinput",
                    deviceId: "default",
                    label: "",
                    groupId: ""
                }])
            }))
        }, e.version < 41) {
            var c = n.mediaDevices.enumerateDevices.bind(n.mediaDevices);
            n.mediaDevices.enumerateDevices = function () {
                return c().then(void 0, (function (t) {
                    if ("NotFoundError" === t.name) return [];
                    throw t
                }))
            }
        }
        if (e.version < 49) {
            var u = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
            n.mediaDevices.getUserMedia = function (t) {
                return u(t).then((function (e) {
                    if (t.audio && !e.getAudioTracks().length || t.video && !e.getVideoTracks().length) throw e.getTracks().forEach((function (t) {
                        t.stop()
                    })), new DOMException("The object can not be found here.", "NotFoundError");
                    return e
                }), (function (t) {
                    return Promise.reject(s(t))
                }))
            }
        }
        if (!(e.version > 55 && "autoGainControl" in n.mediaDevices.getSupportedConstraints())) {
            var h = function (t, e, n) {
                e in t && !(n in t) && (t[n] = t[e], delete t[e])
            },
                l = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
            if (n.mediaDevices.getUserMedia = function (t) {
                return "object" == typeof t && "object" == typeof t.audio && (t = JSON.parse(JSON.stringify(t)), h(t.audio, "autoGainControl", "mozAutoGainControl"), h(t.audio, "noiseSuppression", "mozNoiseSuppression")), l(t)
            }, o && o.prototype.getSettings) {
                var d = o.prototype.getSettings;
                o.prototype.getSettings = function () {
                    var t = d.apply(this, arguments);
                    return h(t, "mozAutoGainControl", "autoGainControl"), h(t, "mozNoiseSuppression", "noiseSuppression"), t
                }
            }
            if (o && o.prototype.applyConstraints) {
                var p = o.prototype.applyConstraints;
                o.prototype.applyConstraints = function (t) {
                    return "audio" === this.kind && "object" == typeof t && (t = JSON.parse(JSON.stringify(t)), h(t, "autoGainControl", "mozAutoGainControl"), h(t, "noiseSuppression", "mozNoiseSuppression")), p.apply(this, [t])
                }
            }
        }
        n.getUserMedia = function (t, r, o) {
            if (e.version < 44) return a(t, r, o);
            i.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), n.mediaDevices.getUserMedia(t).then(r, o)
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(25);
    t.exports = {
        shimLocalStreamsAPI: function (t) {
            if ("object" == typeof t && t.RTCPeerConnection) {
                if ("getLocalStreams" in t.RTCPeerConnection.prototype || (t.RTCPeerConnection.prototype.getLocalStreams = function () {
                    return this._localStreams || (this._localStreams = []), this._localStreams
                }), "getStreamById" in t.RTCPeerConnection.prototype || (t.RTCPeerConnection.prototype.getStreamById = function (t) {
                    var e = null;
                    return this._localStreams && this._localStreams.forEach((function (n) {
                        n.id === t && (e = n)
                    })), this._remoteStreams && this._remoteStreams.forEach((function (n) {
                        n.id === t && (e = n)
                    })), e
                }), !("addStream" in t.RTCPeerConnection.prototype)) {
                    var e = t.RTCPeerConnection.prototype.addTrack;
                    t.RTCPeerConnection.prototype.addStream = function (t) {
                        this._localStreams || (this._localStreams = []), -1 === this._localStreams.indexOf(t) && this._localStreams.push(t);
                        var n = this;
                        t.getTracks().forEach((function (i) {
                            e.call(n, i, t)
                        }))
                    }, t.RTCPeerConnection.prototype.addTrack = function (t, n) {
                        return n && (this._localStreams ? -1 === this._localStreams.indexOf(n) && this._localStreams.push(n) : this._localStreams = [n]), e.call(this, t, n)
                    }
                }
                "removeStream" in t.RTCPeerConnection.prototype || (t.RTCPeerConnection.prototype.removeStream = function (t) {
                    this._localStreams || (this._localStreams = []);
                    var e = this._localStreams.indexOf(t);
                    if (-1 !== e) {
                        this._localStreams.splice(e, 1);
                        var n = this,
                            i = t.getTracks();
                        this.getSenders().forEach((function (t) {
                            -1 !== i.indexOf(t.track) && n.removeTrack(t)
                        }))
                    }
                })
            }
        },
        shimRemoteStreamsAPI: function (t) {
            if ("object" == typeof t && t.RTCPeerConnection && ("getRemoteStreams" in t.RTCPeerConnection.prototype || (t.RTCPeerConnection.prototype.getRemoteStreams = function () {
                return this._remoteStreams ? this._remoteStreams : []
            }), !("onaddstream" in t.RTCPeerConnection.prototype))) {
                Object.defineProperty(t.RTCPeerConnection.prototype, "onaddstream", {
                    get: function () {
                        return this._onaddstream
                    },
                    set: function (t) {
                        this._onaddstream && this.removeEventListener("addstream", this._onaddstream), this.addEventListener("addstream", this._onaddstream = t)
                    }
                });
                var e = t.RTCPeerConnection.prototype.setRemoteDescription;
                t.RTCPeerConnection.prototype.setRemoteDescription = function () {
                    var t = this;
                    return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function (e) {
                        e.streams.forEach((function (e) {
                            if (t._remoteStreams || (t._remoteStreams = []), !(t._remoteStreams.indexOf(e) >= 0)) {
                                t._remoteStreams.push(e);
                                var n = new Event("addstream");
                                n.stream = e, t.dispatchEvent(n)
                            }
                        }))
                    }), e.apply(t, arguments)
                }
            }
        },
        shimCallbacksAPI: function (t) {
            if ("object" == typeof t && t.RTCPeerConnection) {
                var e = t.RTCPeerConnection.prototype,
                    n = e.createOffer,
                    i = e.createAnswer,
                    r = e.setLocalDescription,
                    o = e.setRemoteDescription,
                    s = e.addIceCandidate;
                e.createOffer = function (t, e) {
                    var i = arguments.length >= 2 ? arguments[2] : arguments[0],
                        r = n.apply(this, [i]);
                    return e ? (r.then(t, e), Promise.resolve()) : r
                }, e.createAnswer = function (t, e) {
                    var n = arguments.length >= 2 ? arguments[2] : arguments[0],
                        r = i.apply(this, [n]);
                    return e ? (r.then(t, e), Promise.resolve()) : r
                };
                var a = function (t, e, n) {
                    var i = r.apply(this, [t]);
                    return n ? (i.then(e, n), Promise.resolve()) : i
                };
                e.setLocalDescription = a, a = function (t, e, n) {
                    var i = o.apply(this, [t]);
                    return n ? (i.then(e, n), Promise.resolve()) : i
                }, e.setRemoteDescription = a, a = function (t, e, n) {
                    var i = s.apply(this, [t]);
                    return n ? (i.then(e, n), Promise.resolve()) : i
                }, e.addIceCandidate = a
            }
        },
        shimGetUserMedia: function (t) {
            var e = t && t.navigator;
            e.getUserMedia || (e.webkitGetUserMedia ? e.getUserMedia = e.webkitGetUserMedia.bind(e) : e.mediaDevices && e.mediaDevices.getUserMedia && (e.getUserMedia = function (t, n, i) {
                e.mediaDevices.getUserMedia(t).then(n, i)
            }.bind(e)))
        },
        shimRTCIceServerUrls: function (t) {
            var e = t.RTCPeerConnection;
            t.RTCPeerConnection = function (t, n) {
                if (t && t.iceServers) {
                    for (var r = [], o = 0; o < t.iceServers.length; o++) {
                        var s = t.iceServers[o];
                        !s.hasOwnProperty("urls") && s.hasOwnProperty("url") ? (i.deprecated("RTCIceServer.url", "RTCIceServer.urls"), (s = JSON.parse(JSON.stringify(s))).urls = s.url, delete s.url, r.push(s)) : r.push(t.iceServers[o])
                    }
                    t.iceServers = r
                }
                return new e(t, n)
            }, t.RTCPeerConnection.prototype = e.prototype, "generateCertificate" in t.RTCPeerConnection && Object.defineProperty(t.RTCPeerConnection, "generateCertificate", {
                get: function () {
                    return e.generateCertificate
                }
            })
        },
        shimTrackEventTransceiver: function (t) {
            "object" == typeof t && t.RTCPeerConnection && "receiver" in t.RTCTrackEvent.prototype && !t.RTCTransceiver && Object.defineProperty(t.RTCTrackEvent.prototype, "transceiver", {
                get: function () {
                    return {
                        receiver: this.receiver
                    }
                }
            })
        },
        shimCreateOfferLegacy: function (t) {
            var e = t.RTCPeerConnection.prototype.createOffer;
            t.RTCPeerConnection.prototype.createOffer = function (t) {
                var n = this;
                if (t) {
                    void 0 !== t.offerToReceiveAudio && (t.offerToReceiveAudio = !!t.offerToReceiveAudio);
                    var i = n.getTransceivers().find((function (t) {
                        return t.sender.track && "audio" === t.sender.track.kind
                    }));
                    !1 === t.offerToReceiveAudio && i ? "sendrecv" === i.direction ? i.setDirection ? i.setDirection("sendonly") : i.direction = "sendonly" : "recvonly" === i.direction && (i.setDirection ? i.setDirection("inactive") : i.direction = "inactive") : !0 !== t.offerToReceiveAudio || i || n.addTransceiver("audio"), void 0 !== t.offerToReceiveVideo && (t.offerToReceiveVideo = !!t.offerToReceiveVideo);
                    var r = n.getTransceivers().find((function (t) {
                        return t.sender.track && "video" === t.sender.track.kind
                    }));
                    !1 === t.offerToReceiveVideo && r ? "sendrecv" === r.direction ? r.setDirection("sendonly") : "recvonly" === r.direction && r.setDirection("inactive") : !0 !== t.offerToReceiveVideo || r || n.addTransceiver("video")
                }
                return e.apply(n, arguments)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(530),
        r = n(25);
    t.exports = {
        shimRTCIceCandidate: function (t) {
            if (!(!t.RTCIceCandidate || t.RTCIceCandidate && "foundation" in t.RTCIceCandidate.prototype)) {
                var e = t.RTCIceCandidate;
                t.RTCIceCandidate = function (t) {
                    if ("object" == typeof t && t.candidate && 0 === t.candidate.indexOf("a=") && ((t = JSON.parse(JSON.stringify(t))).candidate = t.candidate.substr(2)), t.candidate && t.candidate.length) {
                        var n = new e(t),
                            r = i.parseCandidate(t.candidate),
                            o = Object.assign(n, r);
                        return o.toJSON = function () {
                            return {
                                candidate: o.candidate,
                                sdpMid: o.sdpMid,
                                sdpMLineIndex: o.sdpMLineIndex,
                                usernameFragment: o.usernameFragment
                            }
                        }, o
                    }
                    return new e(t)
                }, t.RTCIceCandidate.prototype = e.prototype, r.wrapPeerConnectionEvent(t, "icecandidate", (function (e) {
                    return e.candidate && Object.defineProperty(e, "candidate", {
                        value: new t.RTCIceCandidate(e.candidate),
                        writable: "false"
                    }), e
                }))
            }
        },
        shimCreateObjectURL: function (t) {
            var e = t && t.URL;
            if ("object" == typeof t && t.HTMLMediaElement && "srcObject" in t.HTMLMediaElement.prototype && e.createObjectURL && e.revokeObjectURL) {
                var n = e.createObjectURL.bind(e),
                    i = e.revokeObjectURL.bind(e),
                    o = new Map,
                    s = 0;
                e.createObjectURL = function (t) {
                    if ("getTracks" in t) {
                        var e = "polyblob:" + ++s;
                        return o.set(e, t), r.deprecated("URL.createObjectURL(stream)", "elem.srcObject = stream"), e
                    }
                    return n(t)
                }, e.revokeObjectURL = function (t) {
                    i(t), o.delete(t)
                };
                var a = Object.getOwnPropertyDescriptor(t.HTMLMediaElement.prototype, "src");
                Object.defineProperty(t.HTMLMediaElement.prototype, "src", {
                    get: function () {
                        return a.get.apply(this)
                    },
                    set: function (t) {
                        return this.srcObject = o.get(t) || null, a.set.apply(this, [t])
                    }
                });
                var c = t.HTMLMediaElement.prototype.setAttribute;
                t.HTMLMediaElement.prototype.setAttribute = function () {
                    return 2 === arguments.length && "src" === ("" + arguments[0]).toLowerCase() && (this.srcObject = o.get(arguments[1]) || null), c.apply(this, arguments)
                }
            }
        },
        shimMaxMessageSize: function (t) {
            if (!t.RTCSctpTransport && t.RTCPeerConnection) {
                var e = r.detectBrowser(t);
                "sctp" in t.RTCPeerConnection.prototype || Object.defineProperty(t.RTCPeerConnection.prototype, "sctp", {
                    get: function () {
                        return void 0 === this._sctp ? null : this._sctp
                    }
                });
                var n = function (t) {
                    var e = i.splitSections(t.sdp);
                    return e.shift(), e.some((function (t) {
                        var e = i.parseMLine(t);
                        return e && "application" === e.kind && -1 !== e.protocol.indexOf("SCTP")
                    }))
                },
                    o = function (t) {
                        var e = t.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                        if (null === e || e.length < 2) return -1;
                        var n = parseInt(e[1], 10);
                        return n != n ? -1 : n
                    },
                    s = function (t) {
                        var n = 65536;
                        return "firefox" === e.browser && (n = e.version < 57 ? -1 === t ? 16384 : 2147483637 : e.version < 60 ? 57 === e.version ? 65535 : 65536 : 2147483637), n
                    },
                    a = function (t, n) {
                        var r = 65536;
                        "firefox" === e.browser && 57 === e.version && (r = 65535);
                        var o = i.matchPrefix(t.sdp, "a=max-message-size:");
                        return o.length > 0 ? r = parseInt(o[0].substr(19), 10) : "firefox" === e.browser && -1 !== n && (r = 2147483637), r
                    },
                    c = t.RTCPeerConnection.prototype.setRemoteDescription;
                t.RTCPeerConnection.prototype.setRemoteDescription = function () {
                    var t = this;
                    if (t._sctp = null, n(arguments[0])) {
                        var e, i = o(arguments[0]),
                            r = s(i),
                            u = a(arguments[0], i);
                        e = 0 === r && 0 === u ? Number.POSITIVE_INFINITY : 0 === r || 0 === u ? Math.max(r, u) : Math.min(r, u);
                        var h = {};
                        Object.defineProperty(h, "maxMessageSize", {
                            get: function () {
                                return e
                            }
                        }), t._sctp = h
                    }
                    return c.apply(t, arguments)
                }
            }
        },
        shimSendThrowTypeError: function (t) {
            if (t.RTCPeerConnection && "createDataChannel" in t.RTCPeerConnection.prototype) {
                var e = t.RTCPeerConnection.prototype.createDataChannel;
                t.RTCPeerConnection.prototype.createDataChannel = function () {
                    var t = this,
                        i = e.apply(t, arguments);
                    return n(i, t), i
                }, r.wrapPeerConnectionEvent(t, "datachannel", (function (t) {
                    return n(t.channel, t.target), t
                }))
            }

            function n(t, e) {
                var n = t.send;
                t.send = function () {
                    var i = arguments[0],
                        r = i.length || i.size || i.byteLength;
                    if ("open" === t.readyState && e.sctp && r > e.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + e.sctp.maxMessageSize + " bytes)");
                    return n.apply(t, arguments)
                }
            }
        }
    }
}, function (t, e, n) {
    var i = n(23),
        r = n(746);
    "string" == typeof (r = r.__esModule ? r.default : r) && (r = [
        [t.i, r, ""]
    ]);
    var o = {
        insert: "head",
        singleton: !1
    };
    i(r, o);
    t.exports = r.locals || {}
}, function (t, e, n) {
    (e = n(24)(!1)).push([t.i, '#header-back,#topbar .header-link{font-family:"Poppins",sans-serif;letter-spacing:.1ex}@keyframes dash{0%{stroke-dashoffset:120}50%{stroke-dashoffset:30;transform:rotate(240deg)}100%{stroke-dashoffset:120;transform:rotate(720deg)}}#topbar{position:absolute;left:0px;width:100%;height:81px;top:0px;box-sizing:border-box;border-bottom:1px solid #f5f5f5;box-shadow:1px 1px 1px 1px rgba(0,0,0,.02)}#topbar .header-link{position:relative;display:inline-block;font-size:18px;color:#666;padding-left:35px;cursor:pointer;background:transparent}#topbar .header-link::before{top:50%;transform:translate(0, -50%);position:absolute;display:block;content:"\\a";width:23px;height:24px;background-size:contain;background-repeat:no-repeat;background-position:center;left:0}@media(max-width: 767px){#topbar .header-link{overflow:hidden;text-indent:150%;white-space:nowrap;width:20px;padding-left:0;padding-right:0}#topbar .header-link::before{width:20px;height:20px}}@media(max-width: 495px){#topbar #header-settings{display:none}}@media(max-width: 767px){#topbar{height:60px}}#header-settings::before{background-image:url(/Song-Maker/client/images/icon-startover-small.svg)}#header-about::before{background-image:url(/Song-Maker/client/images/icon-about-small.svg)}#toplinks{top:50%;transform:translate(0, -50%);position:absolute;right:20px}#toplinks>button,#toplinks>div{margin-left:30px}@media(max-width: 767px){#toplinks>button,#toplinks>div{margin-left:15px}}@media(max-width: 767px){#toplinks{height:34px}}#header-back{top:50%;transform:translate(0, -50%);position:absolute;background:transparent;cursor:pointer;position:relative;overflow:hidden;padding-left:0;padding-right:0;min-width:62px;padding-top:65px;font-size:15px;color:#666;left:20px;height:0;position:absolute;padding-top:40px;width:40px;min-width:40px}#header-back::selection{background:none}#header-back:hover:before{background-color:#f5f5f5}#header-back[disabled]{opacity:.3}#header-back[disabled]:hover:before{background-color:transparent}#header-back:before{content:"\\a";position:absolute;background-position:center;background-repeat:no-repeat;top:0;border-radius:50%;background-size:contain}#header-back:before{left:50%;transform:translate(-50%, 0);position:absolute;width:60px;height:60px;line-height:60px}@media(max-width: 767px){#header-back{font-size:10px;min-width:42px;width:54px;padding-top:42px;height:calc(1.6em + 40px)}#header-back:before{width:40px;height:40px;line-height:40px}#header-back span{display:none}}@media(min-width: 768px)and (max-width: 959px){#header-back{min-width:46px;padding-top:46px;font-size:12px}#header-back:before{width:44px;height:44px;line-height:44px}}@media(min-width: 768px)and (max-width: 959px){#header-back{padding-top:40px;width:40px;min-width:40px}}@media(max-width: 767px){#header-back{left:16px;padding-top:40px;width:40px;min-width:40px;height:0}}#header-back::before{background-image:url(/Song-Maker/client/images/icon-back.svg);width:40px;height:40px;line-height:40px}@media(min-width: 768px)and (max-width: 959px){#header-back::before{width:40px;height:40px}}@media(max-width: 767px){#header-back::before{width:40px;height:40px}}#header-back.fade{opacity:.2}#header-logo{left:50%;top:50%;transform:translate(-50%, -50%);position:absolute;font-family:"Quicksand",sans-serif;text-transform:uppercase;font-weight:700;text-align:center;font-size:20px;letter-spacing:2px}@media(max-width: 767px){#header-logo{font-size:17px}}', ""]), e.locals = {
        blue: "#16a8f0",
        red: "red",
        lightGrayFill: "#e6e6e6",
        darkGrayFill: "#a0a0a0",
        "background-gray": "#f5f5f5",
        veryLightGrayFill: "#f5f5f5",
        black: "#000",
        white: "#fff",
        orange: "#f4a806",
        "icon-label-gray": "#666",
        "gray-text": "#666",
        "about-gray-text": "#9e9e9e"
    }, t.exports = e
}, function (t, e, n) {
    var i = n(23),
        r = n(748);
    "string" == typeof (r = r.__esModule ? r.default : r) && (r = [
        [t.i, r, ""]
    ]);
    var o = {
        insert: "head",
        singleton: !1
    };
    i(r, o);
    t.exports = r.locals || {}
}, function (t, e, n) {
    (e = n(24)(!1)).push([t.i, '#share-modal #share-saved .short-url,#share-modal #share-embed textarea{font-family:"Poppins",sans-serif;letter-spacing:.1ex}.open-share.modal .circular-loader{height:100%;width:100%;position:absolute;top:0;left:0;transition:all .1s linear}.open-share.modal .circular-loader .loader-path{stroke:#16a8f0;stroke-dasharray:120;animation:dash 1.5s linear 0s infinite;animation-fill-mode:both;stroke-linecap:round;transform-origin:center center}@keyframes dash{0%{stroke-dashoffset:120}50%{stroke-dashoffset:30;transform:rotate(240deg)}100%{stroke-dashoffset:120;transform:rotate(720deg)}}#share-modal .share-footer{color:#666;font-size:18px;text-transform:uppercase;margin-top:60px}#share-modal .share-footer>div{display:inline-block;margin:0 10px;cursor:pointer}@media(max-width: 767px){#share-modal .share-footer{display:none}}#share-modal #share-embed{display:none;padding:50px 0;color:#666}#share-modal #share-embed h3{font-weight:400}#share-modal #share-embed .expandable-inner{text-align:left}#share-modal #share-embed textarea{border:2px #f5f5f5 solid;width:100%;height:110px;padding:15px;color:#666;font-size:14px;line-height:1.7;max-width:450px}#share-modal #share-embed p{font-size:18px}#share-modal #share-saved{padding:100px 0;color:#666}#share-modal #share-saved .short-url{color:#666;font-size:32px;width:500px;padding:36px 48px;text-align:center;border:2px #f5f5f5 solid}@media(max-width: 767px){#share-modal #share-saved .short-url{font-size:18px;line-height:32px;padding:10px;max-width:450px;width:100%;text-align:center}}#share-modal.show-embed #share-embed{display:block}#share-modal.show-embed #toggle-share-embed span{transform:rotate(180deg)}#share-modal .saved-text{display:block;margin-bottom:40px;font-size:32px;line-height:1.4}@media(max-width: 767px){#share-modal .saved-text{font-size:18px;margin-bottom:20px}}#share-modal #copy-link{color:#16a8f0;font-size:24px;display:block;margin:15px auto 37px;cursor:pointer}@media(max-width: 767px){#share-modal #copy-link{font-size:18px}}#share-modal #share-facebook{margin-right:30px}#share-modal #share-facebook:before{background-image:url(/Song-Maker/client/images/icon-round-facebook.svg)}#share-modal #share-facebook:after{content:"Facebook"}@media(max-width: 767px){#share-modal #share-facebook{margin-top:20px;margin-right:10px}}#share-modal #share-twitter:before{background-image:url(/Song-Maker/client/images/icon-round-twitter.svg)}#share-modal #share-twitter:after{content:"Twitter"}@media(max-width: 767px){#share-modal #share-twitter{margin-top:20px}}#share-modal #toggle-share-embed span{background:url(/Song-Maker/client/images/icon-down-caret.svg) no-repeat right center;display:inline-block;width:13px;height:8px;top:-2px;position:relative;margin-left:8px}@media(max-width: 767px){#share-modal #toggle-share-embed span{top:-2px;margin-left:8px}}#share-modal #iframe-code{width:450px}@media(max-width: 767px){#share-modal #iframe-code{width:auto}}#share-modal #copy-iframe{color:#16a8f0;cursor:pointer}#share-modal .share-center{font-size:18px;letter-spacing:0;margin-top:30px;text-align:center;line-height:1.5}.open-share.modal{background:transparent;transition:background-color .3s}.open-share.modal .saved-circle{position:absolute;width:80px;height:80px;bottom:28px;right:20px}@media(min-width: 768px)and (max-width: 959px){.open-share.modal .saved-circle{width:60px;height:60px;bottom:34px;right:21px}}@media(max-width: 767px){.open-share.modal .saved-circle{width:54px;bottom:18px;height:54px;left:78.5vw;transform:translateX(-50%)}}@media(max-width: 495px){.open-share.modal .saved-circle{bottom:11px;left:70vw}}.open-share.modal #cancel{display:none}.open-share.modal #share-modal{transition:opacity .3s;opacity:0;pointer-events:none}@media(max-width: 767px){.open-share.modal.bottom-expanded .saved-circle{bottom:79px}}.open-share.modal.data-loaded{background:#fff;display:flex;align-items:center;justify-items:center;justify-content:center}.open-share.modal.data-loaded .saved-circle{display:none}.open-share.modal.data-loaded #share-modal{opacity:1;pointer-events:auto}.open-share.modal.data-loaded #cancel{display:block}body.touch-device #share-modal .share-footer{display:none}', ""]), e.locals = {
        blue: "#16a8f0",
        red: "red",
        lightGrayFill: "#e6e6e6",
        darkGrayFill: "#a0a0a0",
        "background-gray": "#f5f5f5",
        veryLightGrayFill: "#f5f5f5",
        black: "#000",
        white: "#fff",
        orange: "#f4a806",
        "icon-label-gray": "#666",
        "gray-text": "#666",
        "about-gray-text": "#9e9e9e"
    }, t.exports = e
}, function (t, e, n) {
    var i = n(23),
        r = n(750);
    "string" == typeof (r = r.__esModule ? r.default : r) && (r = [
        [t.i, r, ""]
    ]);
    var o = {
        insert: "head",
        singleton: !1
    };
    i(r, o);
    t.exports = r.locals || {}
}, function (t, e, n) {
    (e = n(24)(!1)).push([t.i, '@keyframes dash{0%{stroke-dashoffset:120}50%{stroke-dashoffset:30;transform:rotate(240deg)}100%{stroke-dashoffset:120;transform:rotate(720deg)}}#gamepad{position:absolute;height:48px;padding:7px 9px;border-radius:24px;z-index:1;left:65px;top:14px}#gamepad .button{height:34px;width:34px;padding-top:34px;overflow:hidden;display:none;background:transparent;position:relative;margin-left:9px;float:left}#gamepad .button:before{background-image:url(/Song-Maker/client/images/gamepad/left.svg);content:"\\a";position:absolute;height:32px;width:32px;display:block;top:1px;left:1px;background-position:center;background-repeat:no-repeat;background-size:contain}#gamepad::before{content:"\\a"}#gamepad #gamepad-toggle-button{display:inline-block;margin-left:0}#gamepad #gamepad-toggle-button::before{background-image:url(/Song-Maker/client/images/icon-gamepad.svg);background-size:83%;background-color:transparent;border-radius:0}#gamepad #gamepad-up-button::before{background-image:url(/Song-Maker/client/images/gamepad/up.svg)}#gamepad #gamepad-down-button::before{background-image:url(/Song-Maker/client/images/gamepad/down.svg)}#gamepad #gamepad-right-button::before{background-image:url(/Song-Maker/client/images/gamepad/right.svg)}#gamepad #gamepad-return-button{width:65px}#gamepad #gamepad-return-button::before{width:63px;background-image:url(/Song-Maker/client/images/gamepad/return.svg)}#gamepad.expand{background:rgba(0,0,0,.05);border-color:rgba(0,0,0,.03)}#gamepad.expand .button{display:inline-block}#gamepad.expand #gamepad-toggle-button::before{background-image:url(/Song-Maker/client/images/icon-x.svg);background-size:67%;border:1px transparent solid}@media(max-width: 767px){#gamepad{display:none}}', ""]), e.locals = {
        blue: "#16a8f0",
        red: "red",
        lightGrayFill: "#e6e6e6",
        darkGrayFill: "#a0a0a0",
        "background-gray": "#f5f5f5",
        veryLightGrayFill: "#f5f5f5",
        black: "#000",
        white: "#fff",
        orange: "#f4a806",
        "icon-label-gray": "#666",
        "gray-text": "#666",
        "about-gray-text": "#9e9e9e"
    }, t.exports = e
}, function (t, e, n) {
    var i = n(23),
        r = n(752);
    "string" == typeof (r = r.__esModule ? r.default : r) && (r = [
        [t.i, r, ""]
    ]);
    var o = {
        insert: "head",
        singleton: !1
    };
    i(r, o);
    t.exports = r.locals || {}
}, function (t, e, n) {
    (e = n(24)(!1)).push([t.i, '#tempo-slider input.input-number,#tempo-slider,#reset-button,#play-button,#bottom .clear-button,#bottom .button{font-family:"Poppins",sans-serif;letter-spacing:.1ex}@keyframes dash{0%{stroke-dashoffset:120}50%{stroke-dashoffset:30;transform:rotate(240deg)}100%{stroke-dashoffset:120;transform:rotate(720deg)}}#bottom{border-top:1px solid #f5f5f5;position:absolute;left:0px;bottom:0px;width:100%;height:109px;font-size:12px;text-align:center;background:#fff}#bottom .button{background:transparent;cursor:pointer;position:relative;overflow:hidden;padding-left:0;padding-right:0;min-width:62px;padding-top:65px;font-size:15px;color:#666;width:9.5ch;display:inline-block;margin-left:8px}#bottom .button::selection{background:none}#bottom .button:hover:before{background-color:#f5f5f5}#bottom .button[disabled]{opacity:.3}#bottom .button[disabled]:hover:before{background-color:transparent}#bottom .button:before{content:"\\a";position:absolute;background-position:center;background-repeat:no-repeat;top:0;border-radius:50%;background-size:contain}#bottom .button:before{left:50%;transform:translate(-50%, 0);position:absolute;width:60px;height:60px;line-height:60px}@media(max-width: 767px){#bottom .button{font-size:10px;min-width:42px;width:54px;padding-top:42px;height:calc(1.6em + 40px)}#bottom .button:before{width:40px;height:40px;line-height:40px}#bottom .button span{display:none}}@media(min-width: 768px)and (max-width: 959px){#bottom .button{min-width:46px;padding-top:46px;font-size:12px}#bottom .button:before{width:44px;height:44px;line-height:44px}}#bottom .button:before{border:1px solid rgba(0,0,0,.1)}@media(min-width: 768px)and (max-width: 959px){#bottom .button{margin-left:4px}}@media(max-width: 767px){#bottom .button{display:block;position:absolute;margin-left:0px;transform:translateX(-50%)}}#bottom .clear-button{background:transparent;cursor:pointer;position:relative;overflow:hidden;padding-left:0;padding-right:0;min-width:62px;padding-top:65px;font-size:15px;color:#666;display:inline-block}#bottom .clear-button::selection{background:none}#bottom .clear-button:hover:before{background-color:#f5f5f5}#bottom .clear-button[disabled]{opacity:.3}#bottom .clear-button[disabled]:hover:before{background-color:transparent}#bottom .clear-button:before{content:"\\a";position:absolute;background-position:center;background-repeat:no-repeat;top:0;border-radius:50%;background-size:contain}#bottom .clear-button:before{left:50%;transform:translate(-50%, 0);position:absolute;width:60px;height:60px;line-height:60px}@media(max-width: 767px){#bottom .clear-button{font-size:10px;min-width:42px;width:54px;padding-top:42px;height:calc(1.6em + 40px)}#bottom .clear-button:before{width:40px;height:40px;line-height:40px}#bottom .clear-button span{display:none}}@media(min-width: 768px)and (max-width: 959px){#bottom .clear-button{min-width:46px;padding-top:46px;font-size:12px}#bottom .clear-button:before{width:44px;height:44px;line-height:44px}}#bottom .clear-button:hover::before{background-color:transparent}#bottom #bottom-expand-button{display:none}@media(max-width: 767px){#bottom #bottom-expand-button{display:block;position:absolute;right:16px;top:15px}}#bottom #meter-button{display:none}#bottom #meter-button::before{background-image:url(/Song-Maker/client/images/icon-meter.svg)}@media(max-width: 767px){#bottom #meter-button{display:block;top:13px;left:45.5vw;z-index:4}}@media(max-width: 495px){#bottom #meter-button{top:5px;left:70vw}}#bottom #meter-button.expand.button:before{border-color:transparent}#bottom #meter-button.expand.button:hover:before{background-color:transparent}#bottom #bottom-left .button,#bottom #bottom-left #play-button{float:left}@media(max-width: 767px){#bottom #bottom-left .button,#bottom #bottom-left #play-button{float:none}}#bottom #bottom-right .button{width:8.5ch}@media(max-width: 767px){#bottom{height:80px}}@media(max-width: 495px){#bottom{height:125px}}#bottom-left{top:50%;transform:translate(0, -50%);position:absolute;left:20px}@media(max-width: 767px){#bottom-left{position:static;top:0;transform:none}#bottom-left::after{position:absolute;width:1px;content:"\\a";background-color:#f5f5f5;height:60px;left:17vw;top:10px}}@media(max-width: 495px){#bottom-left::after{height:100px;left:26vw;top:13px}}#bottom-right{top:50%;transform:translate(0, -50%);position:absolute;right:20px}@media(max-width: 767px){#bottom-right{position:static;top:0;transform:none}#bottom-right::after{position:absolute;width:1px;content:"\\a";background-color:#f5f5f5;height:60px;left:85vw;top:10px}}@media(max-width: 495px){#bottom-right::after{display:none}}#play-button{background:transparent;cursor:pointer;position:relative;overflow:hidden;padding-left:0;padding-right:0;height:80px;width:80px;display:inline-block;margin-right:20px}#play-button::selection{background:none}#play-button:hover:before{background-color:#f5f5f5}#play-button[disabled]{opacity:.3}#play-button[disabled]:hover:before{background-color:transparent}#play-button:before{content:"\\a";position:absolute;background-position:center;background-repeat:no-repeat;top:0;border-radius:50%;background-size:contain}#play-button:before{left:0;width:80px;height:80px;line-height:80px}@media(max-width: 767px){#play-button{width:60px;height:60px}#play-button:before{width:60px;height:60px;line-height:60px}}@media(min-width: 768px)and (max-width: 959px){#play-button{min-width:64px;width:64px;padding-top:64px;height:64px}#play-button:before{width:64px;height:64px;line-height:64px}}#play-button.playing:before{background-image:url(/Song-Maker/client/images/icon-stop.svg);background-position:center}#play-button:before{background-color:#16a8f0;background-image:url(/Song-Maker/client/images/icon-play.svg);background-position:55%;background-size:34%;text-align:center;text-transform:uppercase}#play-button:hover{margin-right:20px}#play-button:hover:before{background-color:#57c1f9}@media(min-width: 768px)and (max-width: 959px){#play-button{margin-right:16px}#play-button:hover{margin-right:16px}}@media(max-width: 767px){#play-button{position:absolute;left:8vw;top:10px;transform:translateX(-50%)}}@media(max-width: 495px){#play-button{left:13vw;top:31px}}#instrument-toggle-button{width:9.6ch}#instrument-toggle-button.instrument-piano::before{background-image:url(/Song-Maker/client/images/instruments/tonal-piano.svg)}#instrument-toggle-button.instrument-woodwind::before{background-image:url(/Song-Maker/client/images/instruments/tonal-woodwind.svg)}#instrument-toggle-button.instrument-strings::before{background-image:url(/Song-Maker/client/images/instruments/tonal-violin.svg)}#instrument-toggle-button.instrument-marimba::before{background-image:url(/Song-Maker/client/images/instruments/tonal-marimba.svg)}#instrument-toggle-button.instrument-synth::before{background-image:url(/Song-Maker/client/images/instruments/tonal-synth.svg)}@media(max-width: 767px){#instrument-toggle-button{top:13px;left:23.5vw}}@media(max-width: 495px){#instrument-toggle-button{top:5px;left:36vw}}#percussion-toggle-button{width:9ch;margin-left:8px}#percussion-toggle-button.instrument-conga::before{background-image:url(/Song-Maker/client/images/instruments/perc-conga.svg)}#percussion-toggle-button.instrument-electronic::before{background-image:url(/Song-Maker/client/images/instruments/perc-drum-machine.svg)}#percussion-toggle-button.instrument-kit::before{background-image:url(/Song-Maker/client/images/instruments/perc-snare-drum.svg)}#percussion-toggle-button.instrument-blocks::before{background-image:url(/Song-Maker/client/images/instruments/perc-woodblock.svg)}@media(max-width: 767px){#percussion-toggle-button{top:13px;left:34.5vw}}@media(max-width: 495px){#percussion-toggle-button{top:5px;left:53vw}}#undo-button::before{background-image:url(/Song-Maker/client/images/icon-undo.svg)}@media(max-width: 767px){#undo-button{top:13px;left:67.5vw}}@media(max-width: 495px){#undo-button{top:65px;left:53vw}}#reset-button{background:transparent;cursor:pointer;position:relative;overflow:hidden;padding-left:0;padding-right:0;min-width:62px;padding-top:65px;font-size:15px;color:#666;display:none}#reset-button::selection{background:none}#reset-button:hover:before{background-color:#f5f5f5}#reset-button[disabled]{opacity:.3}#reset-button[disabled]:hover:before{background-color:transparent}#reset-button:before{content:"\\a";position:absolute;background-position:center;background-repeat:no-repeat;top:0;border-radius:50%;background-size:contain}#reset-button:before{left:50%;transform:translate(-50%, 0);position:absolute;width:60px;height:60px;line-height:60px}@media(max-width: 767px){#reset-button{font-size:10px;min-width:42px;width:54px;padding-top:42px;height:calc(1.6em + 40px)}#reset-button:before{width:40px;height:40px;line-height:40px}#reset-button span{display:none}}@media(min-width: 768px)and (max-width: 959px){#reset-button{min-width:46px;padding-top:46px;font-size:12px}#reset-button:before{width:44px;height:44px;line-height:44px}}#bottom #reset-button{display:none}#bottom #reset-button::before{background-image:url(/Song-Maker/client/images/icon-startover-small.svg)}#bottom #reset-button:hover:before{background-color:#57c1f9}@media(max-width: 767px){#bottom #reset-button{display:none}}@media(max-width: 495px){#bottom #reset-button{display:inline-block}}@media(max-width: 495px){#reset-button{top:65px;left:87vw}}#bottom #settings-button::before{background-image:url(/Song-Maker/client/images/icon-settings-gray.svg)}@media(max-width: 767px){#bottom #settings-button{display:inline-block}}@media(max-width: 767px){#settings-button{top:13px;left:56.5vw}}@media(max-width: 495px){#settings-button{top:65px;left:36vw}}#save-button::before{background-image:url(/Song-Maker/client/images/icon-save.svg)}@media(max-width: 767px){#save-button{top:13px;left:78.5vw}}@media(max-width: 495px){#save-button{top:65px;left:70vw}}#bottom #midi-button.button{transition:opacity .1s;pointer-events:initial;display:none}#bottom #midi-button.button.visible{display:inline-block}#bottom #midi-button.button:before{background-image:url(/Song-Maker/client/images/icon-keys.svg)}#bottom #midi-button.button.recording{color:red}#bottom #midi-button.button.recording::before{background-color:red;background-image:url(/Song-Maker/client/images/icon-keys-white.svg);border:1px solid red}#bottom #midi-button.button.recording:hover::before{background-color:red}@media(max-width: 767px){#bottom #midi-button.button{display:none;opacity:0;pointer-events:none}}#bottom #mic-button{display:none}#bottom #mic-button.visible{display:inline-block}#mic-button{opacity:1;pointer-events:initial}#mic-button::before{background-image:url(/Song-Maker/client/images/icon-mic.svg)}#mic-button #level{position:absolute;top:0px;left:0px;width:100%;height:100%;border:1px solid red;pointer-events:none;border-radius:50%;box-sizing:border-box;opacity:0;width:100px;height:100px;left:-20px;top:-19px}#mic-button.recording{color:red}#mic-button.recording #level{opacity:1}#mic-button.recording::before{background-color:red;background-image:url(/Song-Maker/client/images/icon-mic-white.svg);border:1px solid red}#mic-button.recording:hover::before{background-color:red}@media(max-width: 767px){#mic-button{right:auto;width:42px;top:13px;left:92vw}#mic-button.mobile-pointer-none{pointer-events:none}}@media(max-width: 495px){#mic-button{top:5px;left:87vw}}#tempo-slider{left:50%;transform:translate(-50%, 0);position:absolute;left:calc(50% - 31px);top:calc(50% - 15px);text-align:center;min-width:200px;width:calc(100% - 780px);max-width:450px}@media(min-width: 768px){#tempo-slider.has-midi{left:calc(50% - 57px)}}@media(min-width: 768px)and (max-width: 959px){#tempo-slider.has-midi{left:calc(50% - 49px)}}#tempo-slider .range-cover{display:inline-block;left:calc(60px + 16px);height:28px;position:absolute;width:calc(100% - 120px - 26px)}#tempo-slider input.input-number{margin-left:10px;color:#16a8f0;font-size:15px;border:none;float:right;margin-top:2px;width:40px;padding:0}#tempo-slider label{color:#666;float:left;font-size:15px;display:block;line-height:25px;margin-right:10px}@media(min-width: 768px)and (max-width: 959px){#tempo-slider{width:calc(100% - 660px);left:calc(50% - 13px)}#tempo-slider .range-cover{left:calc(60px + 5px);width:calc(100% - 120px - 6px)}}@media(max-width: 767px){#tempo-slider{border:1px solid #f5f5f5;height:250px;width:43px;top:-196px;transform:translateX(-50%);border-radius:24px;left:45.5vw;display:none;background:#fff;min-width:0}#tempo-slider label{display:none}#tempo-slider.show{overflow:visible;display:block}#tempo-slider .range-cover{transform:rotate(270deg) translate(-108px, -133px);width:calc(172px - 18px);margin:0}#tempo-slider input.input-number{margin-top:-10px;float:none;position:absolute;top:22px;left:3px;margin-left:0;text-align:center;width:38px;pointer-events:none}}@media(max-width: 495px){#tempo-slider{top:-203px;left:70vw}}', ""]), e.locals = {
        blue: "#16a8f0",
        red: "red",
        lightGrayFill: "#e6e6e6",
        darkGrayFill: "#a0a0a0",
        "background-gray": "#f5f5f5",
        veryLightGrayFill: "#f5f5f5",
        black: "#000",
        white: "#fff",
        orange: "#f4a806",
        "icon-label-gray": "#666",
        "gray-text": "#666",
        "about-gray-text": "#9e9e9e"
    }, t.exports = e
}, function (t, e, n) {
    "use strict";
    n.r(e);
    n(701);
    var i = n(1),
        r = new i.EventEmitter,
        o = [0, 2, 4, 5, 7, 9, 11],
        s = [0, 2, 4, 7, 9],
        a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        c = [0, 1];

    function u(t) {
        switch (t) {
            case "major":
                return o;
            case "pentatonic":
                return s;
            case "chromatic":
                return a;
            case "drums":
                return c;
            default:
                throw new Error("unrecognized scale ".concat(t))
        }
    }

    function h(t, e, n) {
        var i = u(n),
            r = (t - e) % 12,
            o = Math.floor((t - e) / 12),
            s = i.indexOf(r);
        if (-1 !== s) return s + o * i.length;
        throw new Error("pitch not in scale")
    }

    function l(t, e, n) {
        var i = u(n),
            r = Math.floor((t - e) / 12),
            o = -1,
            s = 1 / 0;
        return i.forEach(n => {
            var i = n + e + 12 * r;
            Math.abs(i - t) < s && (s = Math.abs(i - t), o = i)
        }), o
    }

    function d(t) {
        return 69 + 12 * Math.log2(t / 440)
    }
    class p extends i.EventEmitter {
        constructor() {
            super(), this.bars = this.defaultBars, this.beats = 4, this.subdivision = 2, this.tempo = 120, this.octaves = this.defaultOctaves, this.scale = "major", this.percussionNotes = 2, this.rootNote = 48, this.instrument = "marimba", this.percussion = "electronic"
        }
        get rootPitch() {
            return this.rootNote % 12
        }
        set rootPitch(t) {
            this.rootNote = 12 * this.rootOctave + t
        }
        get highestNote() {
            return this.rootNote + 12 * this.octaves - (1 == this.octaves ? 0 : 1)
        }
        set highestNote(t) {
            var e = (t - this.rootNote) / 12;
            this.octaves = Math.max(Math.ceil(e), 1)
        }
        get rootOctave() {
            return Math.floor(this.rootNote / 12)
        }
        set rootOctave(t) {
            this.rootNote = 12 * t + this.rootPitch
        }
        get notesPerOctave() {
            return u(this.scale).length
        }
        get totalNotes() {
            return this.notesPerOctave * this.octaves + (1 === this.octaves ? 1 : 0)
        }
        get totalBeats() {
            return this.bars * this.beats
        }
        get totalSubBeats() {
            return this.totalBeats * this.subdivision
        }
        get subBeatsPerBar() {
            return this.beats * this.subdivision
        }
        get defaultBars() {
            return window.innerWidth < 1024 ? 1 : 4
        }
        get defaultOctaves() {
            return window.innerWidth < 1024 ? 1 : 2
        }
        fromJSON(t) {
            Object.assign(this, t), this.emit("change"), this.emit("change-instrument")
        }
        changeInstrument() {
            this.emit("change-instrument")
        }
        toJSON() {
            return {
                bars: this.bars,
                beats: this.beats,
                subdivision: this.subdivision,
                octaves: this.octaves,
                scale: this.scale,
                rootNote: this.rootNote,
                rootPitch: this.rootPitch,
                rootOctave: this.rootOctave,
                instrument: this.instrument,
                percussion: this.percussion,
                percussionNotes: this.percussionNotes,
                tempo: this.tempo
            }
        }
    }
    var f = n(15);

    function m(t, e) {
        if (!t) throw new Error(e)
    }

    function g(t, e, n = 1 / 0) {
        if (!(e <= t && t <= n)) throw new RangeError(`Value must be within [${e}, ${n}], got: ${t}`)
    }

    function v(t) {
        t.isOffline || "running" === t.state || y('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')
    }
    let b = console;

    function y(...t) {
        b.warn(...t)
    }

    function _(t) {
        return void 0 === t
    }

    function w(t) {
        return !_(t)
    }

    function x(t) {
        return "number" == typeof t
    }

    function T(t) {
        return "[object Object]" === Object.prototype.toString.call(t) && t.constructor === Object
    }

    function S(t) {
        return "boolean" == typeof t
    }

    function C(t) {
        return Array.isArray(t)
    }

    function k(t) {
        return "string" == typeof t
    }

    function E(t) {
        return k(t) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t)
    }
    const O = "object" == typeof self ? self : null,
        M = O && (O.hasOwnProperty("AudioContext") || O.hasOwnProperty("webkitAudioContext"));

    function I(t, e, n, i) {
        var r, o = arguments.length,
            s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i);
        else
            for (var a = t.length - 1; a >= 0; a--)(r = t[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) || s);
        return o > 3 && s && Object.defineProperty(e, n, s), s
    }

    function A(t, e, n, i) {
        return new (n || (n = Promise))((function (r, o) {
            function s(t) {
                try {
                    c(i.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    c(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function (t) {
                    t(e)
                }))).then(s, a)
            }
            c((i = i.apply(t, e || [])).next())
        }))
    }
    class R {
        constructor(t, e, n) {
            this._callback = t, this._type = e, this._updateInterval = n, this._createClock()
        }
        _createWorker() {
            const t = new Blob([`\n\t\t\t// the initial timeout time\n\t\t\tlet timeoutTime =  ${(1e3 * this._updateInterval).toFixed(1)};\n\t\t\t// onmessage callback\n\t\t\tself.onmessage = function(msg){\n\t\t\t\ttimeoutTime = parseInt(msg.data);\n\t\t\t};\n\t\t\t// the tick function which posts a message\n\t\t\t// and schedules a new tick\n\t\t\tfunction tick(){\n\t\t\t\tsetTimeout(tick, timeoutTime);\n\t\t\t\tself.postMessage('tick');\n\t\t\t}\n\t\t\t// call tick initially\n\t\t\ttick();\n\t\t\t`], {
                type: "text/javascript"
            }),
                e = URL.createObjectURL(t),
                n = new Worker(e);
            n.onmessage = this._callback.bind(this), this._worker = n
        }
        _createTimeout() {
            this._timeout = setTimeout(() => {
                this._createTimeout(), this._callback()
            }, 1e3 * this._updateInterval)
        }
        _createClock() {
            if ("worker" === this._type) try {
                this._createWorker()
            } catch (t) {
                this._type = "timeout", this._createClock()
            } else "timeout" === this._type && this._createTimeout()
        }
        _disposeClock() {
            this._timeout && (clearTimeout(this._timeout), this._timeout = 0), this._worker && (this._worker.terminate(), this._worker.onmessage = null)
        }
        get updateInterval() {
            return this._updateInterval
        }
        set updateInterval(t) {
            this._updateInterval = Math.max(t, 128 / 44100), "worker" === this._type && this._worker.postMessage(Math.max(1e3 * t, 1))
        }
        get type() {
            return this._type
        }
        set type(t) {
            this._disposeClock(), this._type = t, this._createClock()
        }
        dispose() {
            this._disposeClock()
        }
    }

    function P(t) {
        return Object(f.isAnyAudioParam)(t)
    }

    function D(t) {
        return Object(f.isAnyAudioNode)(t)
    }

    function j(t) {
        return Object(f.isAnyOfflineAudioContext)(t)
    }

    function N(t) {
        return Object(f.isAnyAudioContext)(t)
    }

    function L(t) {
        return t instanceof AudioBuffer
    }

    function B(t, e) {
        return "value" === t || P(e) || D(e) || L(e)
    }

    function U(t, ...e) {
        if (!e.length) return t;
        const n = e.shift();
        if (T(t) && T(n))
            for (const e in n) B(e, n[e]) ? t[e] = n[e] : T(n[e]) ? (t[e] || Object.assign(t, {
                [e]: {}
            }), U(t[e], n[e])) : Object.assign(t, {
                [e]: n[e]
            });
        return U(t, ...e)
    }

    function F(t, e, n = [], i) {
        const r = {},
            o = Array.from(e);
        if (T(o[0]) && i && !Reflect.has(o[0], i)) {
            Object.keys(o[0]).some(e => Reflect.has(t, e)) || (U(r, {
                [i]: o[0]
            }), n.splice(n.indexOf(i), 1), o.shift())
        }
        if (1 === o.length && T(o[0])) U(r, o[0]);
        else
            for (let t = 0; t < n.length; t++) w(o[t]) && (r[n[t]] = o[t]);
        return U(t, r)
    }

    function V(t, e) {
        return _(t) ? e : t
    }

    function q(t, e) {
        return e.forEach(e => {
            Reflect.has(t, e) && delete t[e]
        }), t
    }
    /**
     * Tone.js
     * @author Yotam Mann
     * @license http://opensource.org/licenses/MIT MIT License
     * @copyright 2014-2019 Yotam Mann
     */
    class z {
        constructor() {
            this.debug = !1, this._wasDisposed = !1
        }
        static getDefaults() {
            return {}
        }
        log(...t) {
            (this.debug || O && this.toString() === O.TONE_DEBUG_CLASS) && function (...t) {
                b.log(...t)
            }(this, ...t)
        }
        dispose() {
            return this._wasDisposed = !0, this
        }
        get disposed() {
            return this._wasDisposed
        }
        toString() {
            return this.name
        }
    }
    z.version = "14.7.2";

    function G(t, e) {
        return t > e + 1e-6
    }

    function H(t, e) {
        return G(t, e) || Y(t, e)
    }

    function W(t, e) {
        return t + 1e-6 < e
    }

    function Y(t, e) {
        return Math.abs(t - e) < 1e-6
    }

    function X(t, e, n) {
        return Math.max(Math.min(t, n), e)
    }
    class Z extends z {
        constructor() {
            super(), this.name = "Timeline", this._timeline = [];
            const t = F(Z.getDefaults(), arguments, ["memory"]);
            this.memory = t.memory, this.increasing = t.increasing
        }
        static getDefaults() {
            return {
                memory: 1 / 0,
                increasing: !1
            }
        }
        get length() {
            return this._timeline.length
        }
        add(t) {
            if (m(Reflect.has(t, "time"), "Timeline: events must have a time attribute"), t.time = t.time.valueOf(), this.increasing && this.length) {
                const e = this._timeline[this.length - 1];
                m(H(t.time, e.time), "The time must be greater than or equal to the last scheduled time"), this._timeline.push(t)
            } else {
                const e = this._search(t.time);
                this._timeline.splice(e + 1, 0, t)
            }
            if (this.length > this.memory) {
                const t = this.length - this.memory;
                this._timeline.splice(0, t)
            }
            return this
        }
        remove(t) {
            const e = this._timeline.indexOf(t);
            return -1 !== e && this._timeline.splice(e, 1), this
        }
        get(t, e = "time") {
            const n = this._search(t, e);
            return -1 !== n ? this._timeline[n] : null
        }
        peek() {
            return this._timeline[0]
        }
        shift() {
            return this._timeline.shift()
        }
        getAfter(t, e = "time") {
            const n = this._search(t, e);
            return n + 1 < this._timeline.length ? this._timeline[n + 1] : null
        }
        getBefore(t) {
            const e = this._timeline.length;
            if (e > 0 && this._timeline[e - 1].time < t) return this._timeline[e - 1];
            const n = this._search(t);
            return n - 1 >= 0 ? this._timeline[n - 1] : null
        }
        cancel(t) {
            if (this._timeline.length > 1) {
                let e = this._search(t);
                if (e >= 0)
                    if (Y(this._timeline[e].time, t)) {
                        for (let n = e; n >= 0 && Y(this._timeline[n].time, t); n--) e = n;
                        this._timeline = this._timeline.slice(0, e)
                    } else this._timeline = this._timeline.slice(0, e + 1);
                else this._timeline = []
            } else 1 === this._timeline.length && H(this._timeline[0].time, t) && (this._timeline = []);
            return this
        }
        cancelBefore(t) {
            const e = this._search(t);
            return e >= 0 && (this._timeline = this._timeline.slice(e + 1)), this
        }
        previousEvent(t) {
            const e = this._timeline.indexOf(t);
            return e > 0 ? this._timeline[e - 1] : null
        }
        _search(t, e = "time") {
            if (0 === this._timeline.length) return -1;
            let n = 0;
            const i = this._timeline.length;
            let r = i;
            if (i > 0 && this._timeline[i - 1][e] <= t) return i - 1;
            for (; n < r;) {
                let i = Math.floor(n + (r - n) / 2);
                const o = this._timeline[i],
                    s = this._timeline[i + 1];
                if (Y(o[e], t)) {
                    for (let n = i; n < this._timeline.length; n++) {
                        if (!Y(this._timeline[n][e], t)) break;
                        i = n
                    }
                    return i
                }
                if (W(o[e], t) && G(s[e], t)) return i;
                G(o[e], t) ? r = i : n = i + 1
            }
            return -1
        }
        _iterate(t, e = 0, n = this._timeline.length - 1) {
            this._timeline.slice(e, n + 1).forEach(t)
        }
        forEach(t) {
            return this._iterate(t), this
        }
        forEachBefore(t, e) {
            const n = this._search(t);
            return -1 !== n && this._iterate(e, 0, n), this
        }
        forEachAfter(t, e) {
            const n = this._search(t);
            return this._iterate(e, n + 1), this
        }
        forEachBetween(t, e, n) {
            let i = this._search(t),
                r = this._search(e);
            return -1 !== i && -1 !== r ? (this._timeline[i].time !== t && (i += 1), this._timeline[r].time === e && (r -= 1), this._iterate(n, i, r)) : -1 === i && this._iterate(n, 0, r), this
        }
        forEachFrom(t, e) {
            let n = this._search(t);
            for (; n >= 0 && this._timeline[n].time >= t;) n--;
            return this._iterate(e, n + 1), this
        }
        forEachAtTime(t, e) {
            const n = this._search(t);
            if (-1 !== n && Y(this._timeline[n].time, t)) {
                let i = n;
                for (let e = n; e >= 0 && Y(this._timeline[e].time, t); e--) i = e;
                this._iterate(t => {
                    e(t)
                }, i, n)
            }
            return this
        }
        dispose() {
            return super.dispose(), this._timeline = [], this
        }
    }
    const J = [];

    function $(t) {
        J.push(t)
    }
    const Q = [];

    function K(t) {
        Q.push(t)
    }
    class tt extends z {
        constructor() {
            super(...arguments), this.name = "Emitter"
        }
        on(t, e) {
            return t.split(/\W+/).forEach(t => {
                _(this._events) && (this._events = {}), this._events.hasOwnProperty(t) || (this._events[t] = []), this._events[t].push(e)
            }), this
        }
        once(t, e) {
            const n = (...i) => {
                e(...i), this.off(t, n)
            };
            return this.on(t, n), this
        }
        off(t, e) {
            return t.split(/\W+/).forEach(n => {
                if (_(this._events) && (this._events = {}), this._events.hasOwnProperty(t))
                    if (_(e)) this._events[t] = [];
                    else {
                        const n = this._events[t];
                        for (let t = 0; t < n.length; t++) n[t] === e && n.splice(t, 1)
                    }
            }), this
        }
        emit(t, ...e) {
            if (this._events && this._events.hasOwnProperty(t)) {
                const n = this._events[t].slice(0);
                for (let t = 0, i = n.length; t < i; t++) n[t].apply(this, e)
            }
            return this
        }
        static mixin(t) {
            ["on", "once", "off", "emit"].forEach(e => {
                const n = Object.getOwnPropertyDescriptor(tt.prototype, e);
                Object.defineProperty(t.prototype, e, n)
            })
        }
        dispose() {
            return super.dispose(), this._events = void 0, this
        }
    }
    class et extends tt {
        constructor() {
            super(...arguments), this.isOffline = !1
        }
    }
    class nt extends et {
        constructor() {
            super(), this.name = "Context", this._constants = new Map, this._timeouts = new Z, this._timeoutIds = 0, this._initialized = !1, this.isOffline = !1, this._workletModules = new Map;
            const t = F(nt.getDefaults(), arguments, ["context"]);
            t.context ? this._context = t.context : this._context = function (t) {
                return new f.AudioContext(t)
            }({
                latencyHint: t.latencyHint
            }), this._ticker = new R(this.emit.bind(this, "tick"), t.clockSource, t.updateInterval), this.on("tick", this._timeoutLoop.bind(this)), this._context.onstatechange = () => {
                this.emit("statechange", this.state)
            }, this._setLatencyHint(t.latencyHint), this.lookAhead = t.lookAhead
        }
        static getDefaults() {
            return {
                clockSource: "worker",
                latencyHint: "interactive",
                lookAhead: .1,
                updateInterval: .05
            }
        }
        initialize() {
            var t;
            return this._initialized || (t = this, J.forEach(e => e(t)), this._initialized = !0), this
        }
        createAnalyser() {
            return this._context.createAnalyser()
        }
        createOscillator() {
            return this._context.createOscillator()
        }
        createBufferSource() {
            return this._context.createBufferSource()
        }
        createBiquadFilter() {
            return this._context.createBiquadFilter()
        }
        createBuffer(t, e, n) {
            return this._context.createBuffer(t, e, n)
        }
        createChannelMerger(t) {
            return this._context.createChannelMerger(t)
        }
        createChannelSplitter(t) {
            return this._context.createChannelSplitter(t)
        }
        createConstantSource() {
            return this._context.createConstantSource()
        }
        createConvolver() {
            return this._context.createConvolver()
        }
        createDelay(t) {
            return this._context.createDelay(t)
        }
        createDynamicsCompressor() {
            return this._context.createDynamicsCompressor()
        }
        createGain() {
            return this._context.createGain()
        }
        createIIRFilter(t, e) {
            return this._context.createIIRFilter(t, e)
        }
        createPanner() {
            return this._context.createPanner()
        }
        createPeriodicWave(t, e, n) {
            return this._context.createPeriodicWave(t, e, n)
        }
        createStereoPanner() {
            return this._context.createStereoPanner()
        }
        createWaveShaper() {
            return this._context.createWaveShaper()
        }
        createMediaStreamSource(t) {
            return m(N(this._context), "Not available if OfflineAudioContext"), this._context.createMediaStreamSource(t)
        }
        createMediaStreamDestination() {
            return m(N(this._context), "Not available if OfflineAudioContext"), this._context.createMediaStreamDestination()
        }
        decodeAudioData(t) {
            return this._context.decodeAudioData(t)
        }
        get currentTime() {
            return this._context.currentTime
        }
        get state() {
            return this._context.state
        }
        get sampleRate() {
            return this._context.sampleRate
        }
        get listener() {
            return this.initialize(), this._listener
        }
        set listener(t) {
            m(!this._initialized, "The listener cannot be set after initialization."), this._listener = t
        }
        get transport() {
            return this.initialize(), this._transport
        }
        set transport(t) {
            m(!this._initialized, "The transport cannot be set after initialization."), this._transport = t
        }
        get draw() {
            return this.initialize(), this._draw
        }
        set draw(t) {
            m(!this._initialized, "Draw cannot be set after initialization."), this._draw = t
        }
        get destination() {
            return this.initialize(), this._destination
        }
        set destination(t) {
            m(!this._initialized, "The destination cannot be set after initialization."), this._destination = t
        }
        createAudioWorkletNode(t, e) {
            return function (t, e, n) {
                return m(w(f.AudioWorkletNode), "This node only works in a secure context (https or localhost)"), new f.AudioWorkletNode(t, e, n)
            }
                /*! *****************************************************************************
                Copyright (c) Microsoft Corporation. All rights reserved.
                Licensed under the Apache License, Version 2.0 (the "License"); you may not use
                this file except in compliance with the License. You may obtain a copy of the
                License at http://www.apache.org/licenses/LICENSE-2.0
    
                THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
                KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
                WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
                MERCHANTABLITY OR NON-INFRINGEMENT.
    
                See the Apache Version 2.0 License for specific language governing permissions
                and limitations under the License.
                ***************************************************************************** */
                (this.rawContext, t, e)
        }
        addAudioWorkletModule(t, e) {
            return A(this, void 0, void 0, (function* () {
                m(w(this.rawContext.audioWorklet), "AudioWorkletNode is only available in a secure context (https or localhost)"), this._workletModules.has(e) || this._workletModules.set(e, this.rawContext.audioWorklet.addModule(t)), yield this._workletModules.get(e)
            }))
        }
        workletsAreReady() {
            return A(this, void 0, void 0, (function* () {
                const t = [];
                this._workletModules.forEach(e => t.push(e)), yield Promise.all(t)
            }))
        }
        get updateInterval() {
            return this._ticker.updateInterval
        }
        set updateInterval(t) {
            this._ticker.updateInterval = t
        }
        get clockSource() {
            return this._ticker.type
        }
        set clockSource(t) {
            this._ticker.type = t
        }
        get latencyHint() {
            return this._latencyHint
        }
        _setLatencyHint(t) {
            let e = 0;
            if (this._latencyHint = t, k(t)) switch (t) {
                case "interactive":
                    e = .1;
                    break;
                case "playback":
                    e = .5;
                    break;
                case "balanced":
                    e = .25
            }
            this.lookAhead = e, this.updateInterval = e / 2
        }
        get rawContext() {
            return this._context
        }
        now() {
            return this._context.currentTime + this.lookAhead
        }
        immediate() {
            return this._context.currentTime
        }
        resume() {
            return "suspended" === this._context.state && N(this._context) ? this._context.resume() : Promise.resolve()
        }
        close() {
            return A(this, void 0, void 0, (function* () {
                var t;
                N(this._context) && (yield this._context.close()), this._initialized && (t = this, Q.forEach(e => e(t)))
            }))
        }
        getConstant(t) {
            if (this._constants.has(t)) return this._constants.get(t); {
                const e = this._context.createBuffer(1, 128, this._context.sampleRate),
                    n = e.getChannelData(0);
                for (let e = 0; e < n.length; e++) n[e] = t;
                const i = this._context.createBufferSource();
                return i.channelCount = 1, i.channelCountMode = "explicit", i.buffer = e, i.loop = !0, i.start(0), this._constants.set(t, i), i
            }
        }
        dispose() {
            return super.dispose(), this._ticker.dispose(), this._timeouts.dispose(), Object.keys(this._constants).map(t => this._constants[t].disconnect()), this
        }
        _timeoutLoop() {
            const t = this.now();
            let e = this._timeouts.peek();
            for (; this._timeouts.length && e && e.time <= t;) e.callback(), this._timeouts.shift(), e = this._timeouts.peek()
        }
        setTimeout(t, e) {
            this._timeoutIds++;
            const n = this.now();
            return this._timeouts.add({
                callback: t,
                id: this._timeoutIds,
                time: n + e
            }), this._timeoutIds
        }
        clearTimeout(t) {
            return this._timeouts.forEach(e => {
                e.id === t && this._timeouts.remove(e)
            }), this
        }
        clearInterval(t) {
            return this.clearTimeout(t)
        }
        setInterval(t, e) {
            const n = ++this._timeoutIds,
                i = () => {
                    const r = this.now();
                    this._timeouts.add({
                        callback: () => {
                            t(), i()
                        },
                        id: n,
                        time: r + e
                    })
                };
            return i(), n
        }
    }

    function it(t, e) {
        C(e) ? e.forEach(e => it(t, e)) : Object.defineProperty(t, e, {
            enumerable: !0,
            writable: !1
        })
    }

    function rt(t, e) {
        C(e) ? e.forEach(e => rt(t, e)) : Object.defineProperty(t, e, {
            writable: !0
        })
    }
    const ot = () => { };
    class st extends z {
        constructor() {
            super(), this.name = "ToneAudioBuffer", this.onload = ot;
            const t = F(st.getDefaults(), arguments, ["url", "onload", "onerror"]);
            this.reverse = t.reverse, this.onload = t.onload, t.url && L(t.url) || t.url instanceof st ? this.set(t.url) : k(t.url) && this.load(t.url).catch(t.onerror)
        }
        static getDefaults() {
            return {
                onerror: ot,
                onload: ot,
                reverse: !1
            }
        }
        get sampleRate() {
            return this._buffer ? this._buffer.sampleRate : ht().sampleRate
        }
        set(t) {
            return t instanceof st ? t.loaded ? this._buffer = t.get() : t.onload = () => {
                this.set(t), this.onload(this)
            } : this._buffer = t, this._reversed && this._reverse(), this
        }
        get() {
            return this._buffer
        }
        load(t) {
            return A(this, void 0, void 0, (function* () {
                const e = st.load(t).then(t => {
                    this.set(t), this.onload(this)
                });
                st.downloads.push(e);
                try {
                    yield e
                } finally {
                    const t = st.downloads.indexOf(e);
                    st.downloads.splice(t, 1)
                }
                return this
            }))
        }
        dispose() {
            return super.dispose(), this._buffer = void 0, this
        }
        fromArray(t) {
            const e = C(t) && t[0].length > 0,
                n = e ? t.length : 1,
                i = e ? t[0].length : t.length,
                r = ht(),
                o = r.createBuffer(n, i, r.sampleRate),
                s = e || 1 !== n ? t : [t];
            for (let t = 0; t < n; t++) o.copyToChannel(s[t], t);
            return this._buffer = o, this
        }
        toMono(t) {
            if (x(t)) this.fromArray(this.toArray(t));
            else {
                let t = new Float32Array(this.length);
                const e = this.numberOfChannels;
                for (let n = 0; n < e; n++) {
                    const e = this.toArray(n);
                    for (let n = 0; n < e.length; n++) t[n] += e[n]
                }
                t = t.map(t => t / e), this.fromArray(t)
            }
            return this
        }
        toArray(t) {
            if (x(t)) return this.getChannelData(t);
            if (1 === this.numberOfChannels) return this.toArray(0); {
                const t = [];
                for (let e = 0; e < this.numberOfChannels; e++) t[e] = this.getChannelData(e);
                return t
            }
        }
        getChannelData(t) {
            return this._buffer ? this._buffer.getChannelData(t) : new Float32Array(0)
        }
        slice(t, e = this.duration) {
            const n = Math.floor(t * this.sampleRate),
                i = Math.floor(e * this.sampleRate);
            m(n < i, "The start time must be less than the end time");
            const r = i - n,
                o = ht().createBuffer(this.numberOfChannels, r, this.sampleRate);
            for (let t = 0; t < this.numberOfChannels; t++) o.copyToChannel(this.getChannelData(t).subarray(n, i), t);
            return new st(o)
        }
        _reverse() {
            if (this.loaded)
                for (let t = 0; t < this.numberOfChannels; t++) this.getChannelData(t).reverse();
            return this
        }
        get loaded() {
            return this.length > 0
        }
        get duration() {
            return this._buffer ? this._buffer.duration : 0
        }
        get length() {
            return this._buffer ? this._buffer.length : 0
        }
        get numberOfChannels() {
            return this._buffer ? this._buffer.numberOfChannels : 0
        }
        get reverse() {
            return this._reversed
        }
        set reverse(t) {
            this._reversed !== t && (this._reversed = t, this._reverse())
        }
        static fromArray(t) {
            return (new st).fromArray(t)
        }
        static fromUrl(t) {
            return A(this, void 0, void 0, (function* () {
                const e = new st;
                return yield e.load(t)
            }))
        }
        static load(t) {
            return A(this, void 0, void 0, (function* () {
                const e = t.match(/\[(.+\|?)+\]$/);
                if (e) {
                    const n = e[1].split("|");
                    let i = n[0];
                    for (const t of n)
                        if (st.supportsType(t)) {
                            i = t;
                            break
                        } t = t.replace(e[0], i)
                }
                const n = "" === st.baseUrl || st.baseUrl.endsWith("/") ? st.baseUrl : st.baseUrl + "/",
                    i = yield fetch(n + t);
                if (!i.ok) throw new Error("could not load url: " + t);
                const r = yield i.arrayBuffer();
                return yield ht().decodeAudioData(r)
            }))
        }
        static supportsType(t) {
            const e = t.split("."),
                n = e[e.length - 1];
            return "" !== document.createElement("audio").canPlayType("audio/" + n)
        }
        static loaded() {
            return A(this, void 0, void 0, (function* () {
                for (yield Promise.resolve(); st.downloads.length;) yield st.downloads[0]
            }))
        }
    }
    st.baseUrl = "", st.downloads = [];
    class at extends nt {
        constructor() {
            var t, e, n;
            super({
                clockSource: "offline",
                context: j(arguments[0]) ? arguments[0] : (t = arguments[0], e = arguments[1] * arguments[2], n = arguments[2], new f.OfflineAudioContext(t, e, n)),
                lookAhead: 0,
                updateInterval: j(arguments[0]) ? 128 / arguments[0].sampleRate : 128 / arguments[2]
            }), this.name = "OfflineContext", this._currentTime = 0, this.isOffline = !0, this._duration = j(arguments[0]) ? arguments[0].length / arguments[0].sampleRate : arguments[1]
        }
        now() {
            return this._currentTime
        }
        get currentTime() {
            return this._currentTime
        }
        _renderClock(t) {
            return A(this, void 0, void 0, (function* () {
                let e = 0;
                for (; this._duration - this._currentTime >= 0;) {
                    this.emit("tick"), this._currentTime += 128 / this.sampleRate, e++;
                    const n = Math.floor(this.sampleRate / 128);
                    t && e % n == 0 && (yield new Promise(t => setTimeout(t, 1)))
                }
            }))
        }
        render(t = !0) {
            return A(this, void 0, void 0, (function* () {
                yield this.workletsAreReady(), yield this._renderClock(t);
                const e = yield this._context.startRendering();
                return new st(e)
            }))
        }
        close() {
            return Promise.resolve()
        }
    }
    const ct = new class extends et {
        constructor() {
            super(...arguments), this.lookAhead = 0, this.latencyHint = 0, this.isOffline = !1
        }
        createAnalyser() {
            return {}
        }
        createOscillator() {
            return {}
        }
        createBufferSource() {
            return {}
        }
        createBiquadFilter() {
            return {}
        }
        createBuffer(t, e, n) {
            return {}
        }
        createChannelMerger(t) {
            return {}
        }
        createChannelSplitter(t) {
            return {}
        }
        createConstantSource() {
            return {}
        }
        createConvolver() {
            return {}
        }
        createDelay(t) {
            return {}
        }
        createDynamicsCompressor() {
            return {}
        }
        createGain() {
            return {}
        }
        createIIRFilter(t, e) {
            return {}
        }
        createPanner() {
            return {}
        }
        createPeriodicWave(t, e, n) {
            return {}
        }
        createStereoPanner() {
            return {}
        }
        createWaveShaper() {
            return {}
        }
        createMediaStreamSource(t) {
            return {}
        }
        createMediaStreamDestination() {
            return {}
        }
        decodeAudioData(t) {
            return Promise.resolve({})
        }
        createAudioWorkletNode(t, e) {
            return {}
        }
        get rawContext() {
            return {}
        }
        addAudioWorkletModule(t, e) {
            return A(this, void 0, void 0, (function* () {
                return Promise.resolve()
            }))
        }
        resume() {
            return Promise.resolve()
        }
        setTimeout(t, e) {
            return 0
        }
        clearTimeout(t) {
            return this
        }
        setInterval(t, e) {
            return 0
        }
        clearInterval(t) {
            return this
        }
        getConstant(t) {
            return {}
        }
        get currentTime() {
            return 0
        }
        get state() {
            return {}
        }
        get sampleRate() {
            return 0
        }
        get listener() {
            return {}
        }
        get transport() {
            return {}
        }
        get draw() {
            return {}
        }
        set draw(t) { }
        get destination() {
            return {}
        }
        set destination(t) { }
        now() {
            return 0
        }
        immediate() {
            return 0
        }
    };
    let ut = ct;

    function ht() {
        return ut === ct && M && lt(new nt), ut
    }

    function lt(t) {
        ut = N(t) ? new nt(t) : j(t) ? new at(t) : t
    }
    if (O && !O.TONE_SILENCE_LOGGING) {
        let t = "v";
        0;
        const e = ` * Tone.js ${t}14.7.2 * `;
        console.log("%c" + e, "background: #000; color: #fff")
    }

    function dt(t) {
        return Math.pow(10, t / 20)
    }

    function pt(t) {
        return Math.log(t) / Math.LN10 * 20
    }

    function ft(t) {
        return Math.pow(2, t / 12)
    }
    let mt = 440;

    function gt(t) {
        return Math.round(function (t) {
            return 69 + 12 * Math.log2(t / mt)
        }(t))
    }

    function vt(t) {
        return mt * Math.pow(2, (t - 69) / 12)
    }
    class bt extends z {
        constructor(t, e, n) {
            super(), this.defaultUnits = "s", this._val = e, this._units = n, this.context = t, this._expressions = this._getExpressions()
        }
        _getExpressions() {
            return {
                hz: {
                    method: t => this._frequencyToUnits(parseFloat(t)),
                    regexp: /^(\d+(?:\.\d+)?)hz$/i
                },
                i: {
                    method: t => this._ticksToUnits(parseInt(t, 10)),
                    regexp: /^(\d+)i$/i
                },
                m: {
                    method: t => this._beatsToUnits(parseInt(t, 10) * this._getTimeSignature()),
                    regexp: /^(\d+)m$/i
                },
                n: {
                    method: (t, e) => {
                        const n = parseInt(t, 10),
                            i = "." === e ? 1.5 : 1;
                        return 1 === n ? this._beatsToUnits(this._getTimeSignature()) * i : this._beatsToUnits(4 / n) * i
                    },
                    regexp: /^(\d+)n(\.?)$/i
                },
                number: {
                    method: t => this._expressions[this.defaultUnits].method.call(this, t),
                    regexp: /^(\d+(?:\.\d+)?)$/
                },
                s: {
                    method: t => this._secondsToUnits(parseFloat(t)),
                    regexp: /^(\d+(?:\.\d+)?)s$/
                },
                samples: {
                    method: t => parseInt(t, 10) / this.context.sampleRate,
                    regexp: /^(\d+)samples$/
                },
                t: {
                    method: t => {
                        const e = parseInt(t, 10);
                        return this._beatsToUnits(8 / (3 * Math.floor(e)))
                    },
                    regexp: /^(\d+)t$/i
                },
                tr: {
                    method: (t, e, n) => {
                        let i = 0;
                        return t && "0" !== t && (i += this._beatsToUnits(this._getTimeSignature() * parseFloat(t))), e && "0" !== e && (i += this._beatsToUnits(parseFloat(e))), n && "0" !== n && (i += this._beatsToUnits(parseFloat(n) / 4)), i
                    },
                    regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/
                }
            }
        }
        valueOf() {
            if (this._val instanceof bt && this.fromType(this._val), _(this._val)) return this._noArg();
            if (k(this._val) && _(this._units)) {
                for (const t in this._expressions)
                    if (this._expressions[t].regexp.test(this._val.trim())) {
                        this._units = t;
                        break
                    }
            } else if (T(this._val)) {
                let t = 0;
                for (const e in this._val)
                    if (w(this._val[e])) {
                        const n = this._val[e];
                        t += new this.constructor(this.context, e).valueOf() * n
                    } return t
            }
            if (w(this._units)) {
                const t = this._expressions[this._units],
                    e = this._val.toString().trim().match(t.regexp);
                return e ? t.method.apply(this, e.slice(1)) : t.method.call(this, this._val)
            }
            return k(this._val) ? parseFloat(this._val) : this._val
        }
        _frequencyToUnits(t) {
            return 1 / t
        }
        _beatsToUnits(t) {
            return 60 / this._getBpm() * t
        }
        _secondsToUnits(t) {
            return t
        }
        _ticksToUnits(t) {
            return t * this._beatsToUnits(1) / this._getPPQ()
        }
        _noArg() {
            return this._now()
        }
        _getBpm() {
            return this.context.transport.bpm.value
        }
        _getTimeSignature() {
            return this.context.transport.timeSignature
        }
        _getPPQ() {
            return this.context.transport.PPQ
        }
        fromType(t) {
            switch (this._units = void 0, this.defaultUnits) {
                case "s":
                    this._val = t.toSeconds();
                    break;
                case "i":
                    this._val = t.toTicks();
                    break;
                case "hz":
                    this._val = t.toFrequency();
                    break;
                case "midi":
                    this._val = t.toMidi()
            }
            return this
        }
        toFrequency() {
            return 1 / this.toSeconds()
        }
        toSamples() {
            return this.toSeconds() * this.context.sampleRate
        }
        toMilliseconds() {
            return 1e3 * this.toSeconds()
        }
    }
    class yt extends bt {
        constructor() {
            super(...arguments), this.name = "TimeClass"
        }
        _getExpressions() {
            return Object.assign(super._getExpressions(), {
                now: {
                    method: t => this._now() + new this.constructor(this.context, t).valueOf(),
                    regexp: /^\+(.+)/
                },
                quantize: {
                    method: t => {
                        const e = new yt(this.context, t).valueOf();
                        return this._secondsToUnits(this.context.transport.nextSubdivision(e))
                    },
                    regexp: /^@(.+)/
                }
            })
        }
        quantize(t, e = 1) {
            const n = new this.constructor(this.context, t).valueOf(),
                i = this.valueOf();
            return i + (Math.round(i / n) * n - i) * e
        }
        toNotation() {
            const t = this.toSeconds(),
                e = ["1m"];
            for (let t = 1; t < 9; t++) {
                const n = Math.pow(2, t);
                e.push(n + "n."), e.push(n + "n"), e.push(n + "t")
            }
            e.push("0");
            let n = e[0],
                i = new yt(this.context, e[0]).toSeconds();
            return e.forEach(e => {
                const r = new yt(this.context, e).toSeconds();
                Math.abs(r - t) < Math.abs(i - t) && (n = e, i = r)
            }), n
        }
        toBarsBeatsSixteenths() {
            const t = this._beatsToUnits(1);
            let e = this.valueOf() / t;
            e = parseFloat(e.toFixed(4));
            const n = Math.floor(e / this._getTimeSignature());
            let i = e % 1 * 4;
            e = Math.floor(e) % this._getTimeSignature();
            const r = i.toString();
            return r.length > 3 && (i = parseFloat(parseFloat(r).toFixed(3))), [n, e, i].join(":")
        }
        toTicks() {
            const t = this._beatsToUnits(1),
                e = this.valueOf() / t;
            return Math.round(e * this._getPPQ())
        }
        toSeconds() {
            return this.valueOf()
        }
        toMidi() {
            return gt(this.toFrequency())
        }
        _now() {
            return this.context.now()
        }
    }

    function _t(t, e) {
        return new yt(ht(), t, e)
    }
    class wt extends yt {
        constructor() {
            super(...arguments), this.name = "Frequency", this.defaultUnits = "hz"
        }
        static get A4() {
            return mt
        }
        static set A4(t) {
            ! function (t) {
                mt = t
            }(t)
        }
        _getExpressions() {
            return Object.assign({}, super._getExpressions(), {
                midi: {
                    regexp: /^(\d+(?:\.\d+)?midi)/,
                    method(t) {
                        return "midi" === this.defaultUnits ? t : wt.mtof(t)
                    }
                },
                note: {
                    regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
                    method(t, e) {
                        const n = xt[t.toLowerCase()] + 12 * (parseInt(e, 10) + 1);
                        return "midi" === this.defaultUnits ? n : wt.mtof(n)
                    }
                },
                tr: {
                    regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                    method(t, e, n) {
                        let i = 1;
                        return t && "0" !== t && (i *= this._beatsToUnits(this._getTimeSignature() * parseFloat(t))), e && "0" !== e && (i *= this._beatsToUnits(parseFloat(e))), n && "0" !== n && (i *= this._beatsToUnits(parseFloat(n) / 4)), i
                    }
                }
            })
        }
        transpose(t) {
            return new wt(this.context, this.valueOf() * ft(t))
        }
        harmonize(t) {
            return t.map(t => this.transpose(t))
        }
        toMidi() {
            return gt(this.valueOf())
        }
        toNote() {
            const t = this.toFrequency(),
                e = Math.log2(t / wt.A4);
            let n = Math.round(12 * e) + 57;
            const i = Math.floor(n / 12);
            return i < 0 && (n += -12 * i), Tt[n % 12] + i.toString()
        }
        toSeconds() {
            return 1 / super.toSeconds()
        }
        toTicks() {
            const t = this._beatsToUnits(1),
                e = this.valueOf() / t;
            return Math.floor(e * this._getPPQ())
        }
        _noArg() {
            return 0
        }
        _frequencyToUnits(t) {
            return t
        }
        _ticksToUnits(t) {
            return 1 / (60 * t / (this._getBpm() * this._getPPQ()))
        }
        _beatsToUnits(t) {
            return 1 / super._beatsToUnits(t)
        }
        _secondsToUnits(t) {
            return 1 / t
        }
        static mtof(t) {
            return vt(t)
        }
        static ftom(t) {
            return gt(t)
        }
    }
    const xt = {
        cbb: -2,
        cb: -1,
        c: 0,
        "c#": 1,
        cx: 2,
        dbb: 0,
        db: 1,
        d: 2,
        "d#": 3,
        dx: 4,
        ebb: 2,
        eb: 3,
        e: 4,
        "e#": 5,
        ex: 6,
        fbb: 3,
        fb: 4,
        f: 5,
        "f#": 6,
        fx: 7,
        gbb: 5,
        gb: 6,
        g: 7,
        "g#": 8,
        gx: 9,
        abb: 7,
        ab: 8,
        a: 9,
        "a#": 10,
        ax: 11,
        bbb: 9,
        bb: 10,
        b: 11,
        "b#": 12,
        bx: 13
    },
        Tt = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

    function St(t, e) {
        return new wt(ht(), t, e)
    }
    class Ct extends yt {
        constructor() {
            super(...arguments), this.name = "TransportTime"
        }
        _now() {
            return this.context.transport.seconds
        }
    }
    class kt extends z {
        constructor() {
            super();
            const t = F(kt.getDefaults(), arguments, ["context"]);
            this.defaultContext ? this.context = this.defaultContext : this.context = t.context
        }
        static getDefaults() {
            return {
                context: ht()
            }
        }
        now() {
            return this.context.currentTime + this.context.lookAhead
        }
        immediate() {
            return this.context.currentTime
        }
        get sampleTime() {
            return 1 / this.context.sampleRate
        }
        get blockTime() {
            return 128 / this.context.sampleRate
        }
        toSeconds(t) {
            return new yt(this.context, t).toSeconds()
        }
        toFrequency(t) {
            return new wt(this.context, t).toFrequency()
        }
        toTicks(t) {
            return new Ct(this.context, t).toTicks()
        }
        _getPartialProperties(t) {
            const e = this.get();
            return Object.keys(e).forEach(n => {
                _(t[n]) && delete e[n]
            }), e
        }
        get() {
            const t = this.constructor.getDefaults();
            return Object.keys(t).forEach(e => {
                if (Reflect.has(this, e)) {
                    const n = this[e];
                    w(n) && w(n.value) && w(n.setValueAtTime) ? t[e] = n.value : n instanceof kt ? t[e] = n._getPartialProperties(t[e]) : C(n) || x(n) || k(n) || S(n) ? t[e] = n : delete t[e]
                }
            }), t
        }
        set(t) {
            return Object.keys(t).forEach(e => {
                Reflect.has(this, e) && w(this[e]) && (this[e] && w(this[e].value) && w(this[e].setValueAtTime) ? this[e].value !== t[e] && (this[e].value = t[e]) : this[e] instanceof kt ? this[e].set(t[e]) : this[e] = t[e])
            }), this
        }
    }
    class Et extends Z {
        constructor(t = "stopped") {
            super(), this.name = "StateTimeline", this._initial = t, this.setStateAtTime(this._initial, 0)
        }
        getValueAtTime(t) {
            const e = this.get(t);
            return null !== e ? e.state : this._initial
        }
        setStateAtTime(t, e, n) {
            return g(e, 0), this.add(Object.assign({}, n, {
                state: t,
                time: e
            })), this
        }
        getLastState(t, e) {
            for (let n = this._search(e); n >= 0; n--) {
                const e = this._timeline[n];
                if (e.state === t) return e
            }
        }
        getNextState(t, e) {
            const n = this._search(e);
            if (-1 !== n)
                for (let e = n; e < this._timeline.length; e++) {
                    const n = this._timeline[e];
                    if (n.state === t) return n
                }
        }
    }
    class Ot extends kt {
        constructor() {
            super(F(Ot.getDefaults(), arguments, ["param", "units", "convert"])), this.name = "Param", this.overridden = !1, this._minOutput = 1e-7;
            const t = F(Ot.getDefaults(), arguments, ["param", "units", "convert"]);
            for (m(w(t.param) && (P(t.param) || t.param instanceof Ot), "param must be an AudioParam"); !P(t.param);) t.param = t.param._param;
            this._swappable = !!w(t.swappable) && t.swappable, this._swappable ? (this.input = this.context.createGain(), this._param = t.param, this.input.connect(this._param)) : this._param = this.input = t.param, this._events = new Z(1e3), this._initialValue = this._param.defaultValue, this.units = t.units, this.convert = t.convert, this._minValue = t.minValue, this._maxValue = t.maxValue, w(t.value) && t.value !== this._toType(this._initialValue) && this.setValueAtTime(t.value, 0)
        }
        static getDefaults() {
            return Object.assign(kt.getDefaults(), {
                convert: !0,
                units: "number"
            })
        }
        get value() {
            const t = this.now();
            return this.getValueAtTime(t)
        }
        set value(t) {
            this.cancelScheduledValues(this.now()), this.setValueAtTime(t, this.now())
        }
        get minValue() {
            return w(this._minValue) ? this._minValue : "time" === this.units || "frequency" === this.units || "normalRange" === this.units || "positive" === this.units || "transportTime" === this.units || "ticks" === this.units || "bpm" === this.units || "hertz" === this.units || "samples" === this.units ? 0 : "audioRange" === this.units ? -1 : "decibels" === this.units ? -1 / 0 : this._param.minValue
        }
        get maxValue() {
            return w(this._maxValue) ? this._maxValue : "normalRange" === this.units || "audioRange" === this.units ? 1 : this._param.maxValue
        }
        _is(t, e) {
            return this.units === e
        }
        _assertRange(t) {
            return w(this.maxValue) && w(this.minValue) && g(t, this._fromType(this.minValue), this._fromType(this.maxValue)), t
        }
        _fromType(t) {
            return this.convert && !this.overridden ? this._is(t, "time") ? this.toSeconds(t) : this._is(t, "decibels") ? dt(t) : this._is(t, "frequency") ? this.toFrequency(t) : t : this.overridden ? 0 : t
        }
        _toType(t) {
            return this.convert && "decibels" === this.units ? pt(t) : t
        }
        setValueAtTime(t, e) {
            const n = this.toSeconds(e),
                i = this._fromType(t);
            return m(isFinite(i) && isFinite(n), `Invalid argument(s) to setValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`), this._assertRange(i), this.log(this.units, "setValueAtTime", t, n), this._events.add({
                time: n,
                type: "setValueAtTime",
                value: i
            }), this._param.setValueAtTime(i, n), this
        }
        getValueAtTime(t) {
            const e = Math.max(this.toSeconds(t), 0),
                n = this._events.getAfter(e),
                i = this._events.get(e);
            let r = this._initialValue;
            if (null === i) r = this._initialValue;
            else if ("setTargetAtTime" !== i.type || null !== n && "setValueAtTime" !== n.type)
                if (null === n) r = i.value;
                else if ("linearRampToValueAtTime" === n.type || "exponentialRampToValueAtTime" === n.type) {
                    let t = i.value;
                    if ("setTargetAtTime" === i.type) {
                        const e = this._events.getBefore(i.time);
                        t = null === e ? this._initialValue : e.value
                    }
                    r = "linearRampToValueAtTime" === n.type ? this._linearInterpolate(i.time, t, n.time, n.value, e) : this._exponentialInterpolate(i.time, t, n.time, n.value, e)
                } else r = i.value;
            else {
                const t = this._events.getBefore(i.time);
                let n;
                n = null === t ? this._initialValue : t.value, "setTargetAtTime" === i.type && (r = this._exponentialApproach(i.time, n, i.value, i.constant, e))
            }
            return this._toType(r)
        }
        setRampPoint(t) {
            t = this.toSeconds(t);
            let e = this.getValueAtTime(t);
            return this.cancelAndHoldAtTime(t), 0 === this._fromType(e) && (e = this._toType(this._minOutput)), this.setValueAtTime(e, t), this
        }
        linearRampToValueAtTime(t, e) {
            const n = this._fromType(t),
                i = this.toSeconds(e);
            return m(isFinite(n) && isFinite(i), `Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`), this._assertRange(n), this._events.add({
                time: i,
                type: "linearRampToValueAtTime",
                value: n
            }), this.log(this.units, "linearRampToValueAtTime", t, i), this._param.linearRampToValueAtTime(n, i), this
        }
        exponentialRampToValueAtTime(t, e) {
            let n = this._fromType(t);
            n = Math.max(this._minOutput, n), this._assertRange(n);
            const i = this.toSeconds(e);
            return m(isFinite(n) && isFinite(i), `Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`), this._events.add({
                time: i,
                type: "exponentialRampToValueAtTime",
                value: n
            }), this.log(this.units, "exponentialRampToValueAtTime", t, i), this._param.exponentialRampToValueAtTime(n, i), this
        }
        exponentialRampTo(t, e, n) {
            return n = this.toSeconds(n), this.setRampPoint(n), this.exponentialRampToValueAtTime(t, n + this.toSeconds(e)), this
        }
        linearRampTo(t, e, n) {
            return n = this.toSeconds(n), this.setRampPoint(n), this.linearRampToValueAtTime(t, n + this.toSeconds(e)), this
        }
        targetRampTo(t, e, n) {
            return n = this.toSeconds(n), this.setRampPoint(n), this.exponentialApproachValueAtTime(t, n, e), this
        }
        exponentialApproachValueAtTime(t, e, n) {
            e = this.toSeconds(e), n = this.toSeconds(n);
            const i = Math.log(n + 1) / Math.log(200);
            return this.setTargetAtTime(t, e, i), this.cancelAndHoldAtTime(e + .9 * n), this.linearRampToValueAtTime(t, e + n), this
        }
        setTargetAtTime(t, e, n) {
            const i = this._fromType(t);
            m(isFinite(n) && n > 0, "timeConstant must be a number greater than 0");
            const r = this.toSeconds(e);
            return this._assertRange(i), m(isFinite(i) && isFinite(r), `Invalid argument(s) to setTargetAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`), this._events.add({
                constant: n,
                time: r,
                type: "setTargetAtTime",
                value: i
            }), this.log(this.units, "setTargetAtTime", t, r, n), this._param.setTargetAtTime(i, r, n), this
        }
        setValueCurveAtTime(t, e, n, i = 1) {
            n = this.toSeconds(n), e = this.toSeconds(e);
            const r = this._fromType(t[0]) * i;
            this.setValueAtTime(this._toType(r), e);
            const o = n / (t.length - 1);
            for (let n = 1; n < t.length; n++) {
                const r = this._fromType(t[n]) * i;
                this.linearRampToValueAtTime(this._toType(r), e + n * o)
            }
            return this
        }
        cancelScheduledValues(t) {
            const e = this.toSeconds(t);
            return m(isFinite(e), "Invalid argument to cancelScheduledValues: " + JSON.stringify(t)), this._events.cancel(e), this._param.cancelScheduledValues(e), this.log(this.units, "cancelScheduledValues", e), this
        }
        cancelAndHoldAtTime(t) {
            const e = this.toSeconds(t),
                n = this._fromType(this.getValueAtTime(e));
            m(isFinite(e), "Invalid argument to cancelAndHoldAtTime: " + JSON.stringify(t)), this.log(this.units, "cancelAndHoldAtTime", e, "value=" + n);
            const i = this._events.get(e),
                r = this._events.getAfter(e);
            return i && Y(i.time, e) ? r ? (this._param.cancelScheduledValues(r.time), this._events.cancel(r.time)) : (this._param.cancelAndHoldAtTime(e), this._events.cancel(e + this.sampleTime)) : r && (this._param.cancelScheduledValues(r.time), this._events.cancel(r.time), "linearRampToValueAtTime" === r.type ? this.linearRampToValueAtTime(this._toType(n), e) : "exponentialRampToValueAtTime" === r.type && this.exponentialRampToValueAtTime(this._toType(n), e)), this._events.add({
                time: e,
                type: "setValueAtTime",
                value: n
            }), this._param.setValueAtTime(n, e), this
        }
        rampTo(t, e = .1, n) {
            return "frequency" === this.units || "bpm" === this.units || "decibels" === this.units ? this.exponentialRampTo(t, e, n) : this.linearRampTo(t, e, n), this
        }
        apply(t) {
            const e = this.context.currentTime;
            t.setValueAtTime(this.getValueAtTime(e), e);
            const n = this._events.get(e);
            if (n && "setTargetAtTime" === n.type) {
                const i = this._events.getAfter(n.time),
                    r = i ? i.time : e + 2,
                    o = (r - e) / 10;
                for (let n = e; n < r; n += o) t.linearRampToValueAtTime(this.getValueAtTime(n), n)
            }
            return this._events.forEachAfter(this.context.currentTime, e => {
                "cancelScheduledValues" === e.type ? t.cancelScheduledValues(e.time) : "setTargetAtTime" === e.type ? t.setTargetAtTime(e.value, e.time, e.constant) : t[e.type](e.value, e.time)
            }), this
        }
        setParam(t) {
            m(this._swappable, "The Param must be assigned as 'swappable' in the constructor");
            const e = this.input;
            return e.disconnect(this._param), this.apply(t), this._param = t, e.connect(this._param), this
        }
        dispose() {
            return super.dispose(), this._events.dispose(), this
        }
        get defaultValue() {
            return this._toType(this._param.defaultValue)
        }
        _exponentialApproach(t, e, n, i, r) {
            return n + (e - n) * Math.exp(-(r - t) / i)
        }
        _linearInterpolate(t, e, n, i, r) {
            return e + (r - t) / (n - t) * (i - e)
        }
        _exponentialInterpolate(t, e, n, i, r) {
            return e * Math.pow(i / e, (r - t) / (n - t))
        }
    }
    class Mt extends kt {
        constructor() {
            super(...arguments), this.name = "ToneAudioNode", this._internalChannels = []
        }
        get numberOfInputs() {
            return w(this.input) ? P(this.input) || this.input instanceof Ot ? 1 : this.input.numberOfInputs : 0
        }
        get numberOfOutputs() {
            return w(this.output) ? this.output.numberOfOutputs : 0
        }
        _isAudioNode(t) {
            return w(t) && (t instanceof Mt || D(t))
        }
        _getInternalNodes() {
            const t = this._internalChannels.slice(0);
            return this._isAudioNode(this.input) && t.push(this.input), this._isAudioNode(this.output) && this.input !== this.output && t.push(this.output), t
        }
        _setChannelProperties(t) {
            this._getInternalNodes().forEach(e => {
                e.channelCount = t.channelCount, e.channelCountMode = t.channelCountMode, e.channelInterpretation = t.channelInterpretation
            })
        }
        _getChannelProperties() {
            const t = this._getInternalNodes();
            m(t.length > 0, "ToneAudioNode does not have any internal nodes");
            const e = t[0];
            return {
                channelCount: e.channelCount,
                channelCountMode: e.channelCountMode,
                channelInterpretation: e.channelInterpretation
            }
        }
        get channelCount() {
            return this._getChannelProperties().channelCount
        }
        set channelCount(t) {
            const e = this._getChannelProperties();
            this._setChannelProperties(Object.assign(e, {
                channelCount: t
            }))
        }
        get channelCountMode() {
            return this._getChannelProperties().channelCountMode
        }
        set channelCountMode(t) {
            const e = this._getChannelProperties();
            this._setChannelProperties(Object.assign(e, {
                channelCountMode: t
            }))
        }
        get channelInterpretation() {
            return this._getChannelProperties().channelInterpretation
        }
        set channelInterpretation(t) {
            const e = this._getChannelProperties();
            this._setChannelProperties(Object.assign(e, {
                channelInterpretation: t
            }))
        }
        connect(t, e = 0, n = 0) {
            return At(this, t, e, n), this
        }
        toDestination() {
            return this.connect(this.context.destination), this
        }
        toMaster() {
            return y("toMaster() has been renamed toDestination()"), this.toDestination()
        }
        disconnect(t, e = 0, n = 0) {
            return Rt(this, t, e, n), this
        }
        chain(...t) {
            return It(this, ...t), this
        }
        fan(...t) {
            return t.forEach(t => this.connect(t)), this
        }
        dispose() {
            return super.dispose(), w(this.input) && (this.input instanceof Mt ? this.input.dispose() : D(this.input) && this.input.disconnect()), w(this.output) && (this.output instanceof Mt ? this.output.dispose() : D(this.output) && this.output.disconnect()), this._internalChannels = [], this
        }
    }

    function It(...t) {
        const e = t.shift();
        t.reduce((t, e) => (t instanceof Mt ? t.connect(e) : D(t) && At(t, e), e), e)
    }

    function At(t, e, n = 0, i = 0) {
        for (m(w(t), "Cannot connect from undefined node"), m(w(e), "Cannot connect to undefined node"), (e instanceof Mt || D(e)) && m(e.numberOfInputs > 0, "Cannot connect to node with no inputs"), m(t.numberOfOutputs > 0, "Cannot connect from node with no outputs"); e instanceof Mt || e instanceof Ot;) w(e.input) && (e = e.input);
        for (; t instanceof Mt;) w(t.output) && (t = t.output);
        P(e) ? t.connect(e, n) : t.connect(e, n, i)
    }

    function Rt(t, e, n = 0, i = 0) {
        if (w(e))
            for (; e instanceof Mt;) e = e.input;
        for (; !D(t);) w(t.output) && (t = t.output);
        P(e) ? t.disconnect(e, n) : D(e) ? t.disconnect(e, n, i) : t.disconnect()
    }
    class Pt extends Mt {
        constructor() {
            super(F(Pt.getDefaults(), arguments, ["gain", "units"])), this.name = "Gain", this._gainNode = this.context.createGain(), this.input = this._gainNode, this.output = this._gainNode;
            const t = F(Pt.getDefaults(), arguments, ["gain", "units"]);
            this.gain = new Ot({
                context: this.context,
                convert: t.convert,
                param: this._gainNode.gain,
                units: t.units,
                value: t.gain,
                minValue: t.minValue,
                maxValue: t.maxValue
            }), it(this, "gain")
        }
        static getDefaults() {
            return Object.assign(Mt.getDefaults(), {
                convert: !0,
                gain: 1,
                units: "gain"
            })
        }
        dispose() {
            return super.dispose(), this._gainNode.disconnect(), this.gain.dispose(), this
        }
    }
    class Dt extends Mt {
        constructor(t) {
            super(t), this.onended = ot, this._startTime = -1, this._stopTime = -1, this._timeout = -1, this.output = new Pt({
                context: this.context,
                gain: 0
            }), this._gainNode = this.output, this.getStateAtTime = function (t) {
                const e = this.toSeconds(t);
                return -1 !== this._startTime && e >= this._startTime && (-1 === this._stopTime || e <= this._stopTime) ? "started" : "stopped"
            }, this._fadeIn = t.fadeIn, this._fadeOut = t.fadeOut, this._curve = t.curve, this.onended = t.onended
        }
        static getDefaults() {
            return Object.assign(Mt.getDefaults(), {
                curve: "linear",
                fadeIn: 0,
                fadeOut: 0,
                onended: ot
            })
        }
        _startGain(t, e = 1) {
            m(-1 === this._startTime, "Source cannot be started more than once");
            const n = this.toSeconds(this._fadeIn);
            return this._startTime = t + n, this._startTime = Math.max(this._startTime, this.context.currentTime), n > 0 ? (this._gainNode.gain.setValueAtTime(0, t), "linear" === this._curve ? this._gainNode.gain.linearRampToValueAtTime(e, t + n) : this._gainNode.gain.exponentialApproachValueAtTime(e, t, n)) : this._gainNode.gain.setValueAtTime(e, t), this
        }
        stop(t) {
            return this.log("stop", t), this._stopGain(this.toSeconds(t)), this
        }
        _stopGain(t) {
            m(-1 !== this._startTime, "'start' must be called before 'stop'"), this.cancelStop();
            const e = this.toSeconds(this._fadeOut);
            return this._stopTime = this.toSeconds(t) + e, this._stopTime = Math.max(this._stopTime, this.context.currentTime), e > 0 ? "linear" === this._curve ? this._gainNode.gain.linearRampTo(0, e, t) : this._gainNode.gain.targetRampTo(0, e, t) : (this._gainNode.gain.cancelAndHoldAtTime(t), this._gainNode.gain.setValueAtTime(0, t)), this.context.clearTimeout(this._timeout), this._timeout = this.context.setTimeout(() => {
                const t = "exponential" === this._curve ? 2 * e : 0;
                this._stopSource(this.now() + t), this._onended()
            }, this._stopTime - this.context.currentTime), this
        }
        _onended() {
            this.onended !== ot && (this.onended(this), this.onended = ot, this.context.isOffline || setTimeout(() => this.dispose(), 1e3))
        }
        get state() {
            return this.getStateAtTime(this.now())
        }
        cancelStop() {
            return this.log("cancelStop"), m(-1 !== this._startTime, "Source is not started"), this._gainNode.gain.cancelScheduledValues(this._startTime + this.sampleTime), this.context.clearTimeout(this._timeout), this._stopTime = -1, this
        }
        dispose() {
            return super.dispose(), this._gainNode.disconnect(), this
        }
    }
    class jt extends Dt {
        constructor() {
            super(F(jt.getDefaults(), arguments, ["offset"])), this.name = "ToneConstantSource", this._source = this.context.createConstantSource();
            const t = F(jt.getDefaults(), arguments, ["offset"]);
            At(this._source, this._gainNode), this.offset = new Ot({
                context: this.context,
                convert: t.convert,
                param: this._source.offset,
                units: t.units,
                value: t.offset,
                minValue: t.minValue,
                maxValue: t.maxValue
            })
        }
        static getDefaults() {
            return Object.assign(Dt.getDefaults(), {
                convert: !0,
                offset: 1,
                units: "number"
            })
        }
        start(t) {
            const e = this.toSeconds(t);
            return this.log("start", e), this._startGain(e), this._source.start(e), this
        }
        _stopSource(t) {
            this._source.stop(t)
        }
        dispose() {
            return super.dispose(), "started" === this.state && this.stop(), this._source.disconnect(), this.offset.dispose(), this
        }
    }
    class Nt extends Mt {
        constructor() {
            super(F(Nt.getDefaults(), arguments, ["value", "units"])), this.name = "Signal", this.override = !0;
            const t = F(Nt.getDefaults(), arguments, ["value", "units"]);
            this.output = this._constantSource = new jt({
                context: this.context,
                convert: t.convert,
                offset: t.value,
                units: t.units,
                minValue: t.minValue,
                maxValue: t.maxValue
            }), this._constantSource.start(0), this.input = this._param = this._constantSource.offset
        }
        static getDefaults() {
            return Object.assign(Mt.getDefaults(), {
                convert: !0,
                units: "number",
                value: 0
            })
        }
        connect(t, e = 0, n = 0) {
            return Lt(this, t, e, n), this
        }
        dispose() {
            return super.dispose(), this._param.dispose(), this._constantSource.dispose(), this
        }
        setValueAtTime(t, e) {
            return this._param.setValueAtTime(t, e), this
        }
        getValueAtTime(t) {
            return this._param.getValueAtTime(t)
        }
        setRampPoint(t) {
            return this._param.setRampPoint(t), this
        }
        linearRampToValueAtTime(t, e) {
            return this._param.linearRampToValueAtTime(t, e), this
        }
        exponentialRampToValueAtTime(t, e) {
            return this._param.exponentialRampToValueAtTime(t, e), this
        }
        exponentialRampTo(t, e, n) {
            return this._param.exponentialRampTo(t, e, n), this
        }
        linearRampTo(t, e, n) {
            return this._param.linearRampTo(t, e, n), this
        }
        targetRampTo(t, e, n) {
            return this._param.targetRampTo(t, e, n), this
        }
        exponentialApproachValueAtTime(t, e, n) {
            return this._param.exponentialApproachValueAtTime(t, e, n), this
        }
        setTargetAtTime(t, e, n) {
            return this._param.setTargetAtTime(t, e, n), this
        }
        setValueCurveAtTime(t, e, n, i) {
            return this._param.setValueCurveAtTime(t, e, n, i), this
        }
        cancelScheduledValues(t) {
            return this._param.cancelScheduledValues(t), this
        }
        cancelAndHoldAtTime(t) {
            return this._param.cancelAndHoldAtTime(t), this
        }
        rampTo(t, e, n) {
            return this._param.rampTo(t, e, n), this
        }
        get value() {
            return this._param.value
        }
        set value(t) {
            this._param.value = t
        }
        get convert() {
            return this._param.convert
        }
        set convert(t) {
            this._param.convert = t
        }
        get units() {
            return this._param.units
        }
        get overridden() {
            return this._param.overridden
        }
        set overridden(t) {
            this._param.overridden = t
        }
        get maxValue() {
            return this._param.maxValue
        }
        get minValue() {
            return this._param.minValue
        }
        apply(t) {
            return this._param.apply(t), this
        }
    }

    function Lt(t, e, n, i) {
        (e instanceof Ot || P(e) || e instanceof Nt && e.override) && (e.cancelScheduledValues(0), e.setValueAtTime(0, 0), e instanceof Nt && (e.overridden = !0)), At(t, e, n, i)
    }
    class Bt extends Ot {
        constructor() {
            super(F(Bt.getDefaults(), arguments, ["value"])), this.name = "TickParam", this._events = new Z(1 / 0), this._multiplier = 1;
            const t = F(Bt.getDefaults(), arguments, ["value"]);
            this._multiplier = t.multiplier, this._events.cancel(0), this._events.add({
                ticks: 0,
                time: 0,
                type: "setValueAtTime",
                value: this._fromType(t.value)
            }), this.setValueAtTime(t.value, 0)
        }
        static getDefaults() {
            return Object.assign(Ot.getDefaults(), {
                multiplier: 1,
                units: "hertz",
                value: 1
            })
        }
        setTargetAtTime(t, e, n) {
            e = this.toSeconds(e), this.setRampPoint(e);
            const i = this._fromType(t),
                r = this._events.get(e),
                o = Math.round(Math.max(1 / n, 1));
            for (let t = 0; t <= o; t++) {
                const o = n * t + e,
                    s = this._exponentialApproach(r.time, r.value, i, n, o);
                this.linearRampToValueAtTime(this._toType(s), o)
            }
            return this
        }
        setValueAtTime(t, e) {
            const n = this.toSeconds(e);
            super.setValueAtTime(t, e);
            const i = this._events.get(n),
                r = this._events.previousEvent(i),
                o = this._getTicksUntilEvent(r, n);
            return i.ticks = Math.max(o, 0), this
        }
        linearRampToValueAtTime(t, e) {
            const n = this.toSeconds(e);
            super.linearRampToValueAtTime(t, e);
            const i = this._events.get(n),
                r = this._events.previousEvent(i),
                o = this._getTicksUntilEvent(r, n);
            return i.ticks = Math.max(o, 0), this
        }
        exponentialRampToValueAtTime(t, e) {
            e = this.toSeconds(e);
            const n = this._fromType(t),
                i = this._events.get(e),
                r = Math.round(Math.max(10 * (e - i.time), 1)),
                o = (e - i.time) / r;
            for (let t = 0; t <= r; t++) {
                const r = o * t + i.time,
                    s = this._exponentialInterpolate(i.time, i.value, e, n, r);
                this.linearRampToValueAtTime(this._toType(s), r)
            }
            return this
        }
        _getTicksUntilEvent(t, e) {
            if (null === t) t = {
                ticks: 0,
                time: 0,
                type: "setValueAtTime",
                value: 0
            };
            else if (_(t.ticks)) {
                const e = this._events.previousEvent(t);
                t.ticks = this._getTicksUntilEvent(e, t.time)
            }
            const n = this._fromType(this.getValueAtTime(t.time));
            let i = this._fromType(this.getValueAtTime(e));
            const r = this._events.get(e);
            return r && r.time === e && "setValueAtTime" === r.type && (i = this._fromType(this.getValueAtTime(e - this.sampleTime))), .5 * (e - t.time) * (n + i) + t.ticks
        }
        getTicksAtTime(t) {
            const e = this.toSeconds(t),
                n = this._events.get(e);
            return Math.max(this._getTicksUntilEvent(n, e), 0)
        }
        getDurationOfTicks(t, e) {
            const n = this.toSeconds(e),
                i = this.getTicksAtTime(e);
            return this.getTimeOfTick(i + t) - n
        }
        getTimeOfTick(t) {
            const e = this._events.get(t, "ticks"),
                n = this._events.getAfter(t, "ticks");
            if (e && e.ticks === t) return e.time;
            if (e && n && "linearRampToValueAtTime" === n.type && e.value !== n.value) {
                const i = this._fromType(this.getValueAtTime(e.time)),
                    r = (this._fromType(this.getValueAtTime(n.time)) - i) / (n.time - e.time),
                    o = Math.sqrt(Math.pow(i, 2) - 2 * r * (e.ticks - t)),
                    s = (-i + o) / r,
                    a = (-i - o) / r;
                return (s > 0 ? s : a) + e.time
            }
            return e ? 0 === e.value ? 1 / 0 : e.time + (t - e.ticks) / e.value : t / this._initialValue
        }
        ticksToTime(t, e) {
            return this.getDurationOfTicks(t, e)
        }
        timeToTicks(t, e) {
            const n = this.toSeconds(e),
                i = this.toSeconds(t),
                r = this.getTicksAtTime(n);
            return this.getTicksAtTime(n + i) - r
        }
        _fromType(t) {
            return "bpm" === this.units && this.multiplier ? 1 / (60 / t / this.multiplier) : super._fromType(t)
        }
        _toType(t) {
            return "bpm" === this.units && this.multiplier ? t / this.multiplier * 60 : super._toType(t)
        }
        get multiplier() {
            return this._multiplier
        }
        set multiplier(t) {
            const e = this.value;
            this._multiplier = t, this.cancelScheduledValues(0), this.setValueAtTime(e, 0)
        }
    }
    class Ut extends Nt {
        constructor() {
            super(F(Ut.getDefaults(), arguments, ["value"])), this.name = "TickSignal";
            const t = F(Ut.getDefaults(), arguments, ["value"]);
            this.input = this._param = new Bt({
                context: this.context,
                convert: t.convert,
                multiplier: t.multiplier,
                param: this._constantSource.offset,
                units: t.units,
                value: t.value
            })
        }
        static getDefaults() {
            return Object.assign(Nt.getDefaults(), {
                multiplier: 1,
                units: "hertz",
                value: 1
            })
        }
        ticksToTime(t, e) {
            return this._param.ticksToTime(t, e)
        }
        timeToTicks(t, e) {
            return this._param.timeToTicks(t, e)
        }
        getTimeOfTick(t) {
            return this._param.getTimeOfTick(t)
        }
        getDurationOfTicks(t, e) {
            return this._param.getDurationOfTicks(t, e)
        }
        getTicksAtTime(t) {
            return this._param.getTicksAtTime(t)
        }
        get multiplier() {
            return this._param.multiplier
        }
        set multiplier(t) {
            this._param.multiplier = t
        }
        dispose() {
            return super.dispose(), this._param.dispose(), this
        }
    }
    class Ft extends kt {
        constructor() {
            super(F(Ft.getDefaults(), arguments, ["frequency"])), this.name = "TickSource", this._state = new Et, this._tickOffset = new Z;
            const t = F(Ft.getDefaults(), arguments, ["frequency"]);
            this.frequency = new Ut({
                context: this.context,
                units: t.units,
                value: t.frequency
            }), it(this, "frequency"), this._state.setStateAtTime("stopped", 0), this.setTicksAtTime(0, 0)
        }
        static getDefaults() {
            return Object.assign({
                frequency: 1,
                units: "hertz"
            }, kt.getDefaults())
        }
        get state() {
            return this.getStateAtTime(this.now())
        }
        start(t, e) {
            const n = this.toSeconds(t);
            return "started" !== this._state.getValueAtTime(n) && (this._state.setStateAtTime("started", n), w(e) && this.setTicksAtTime(e, n)), this
        }
        stop(t) {
            const e = this.toSeconds(t);
            if ("stopped" === this._state.getValueAtTime(e)) {
                const t = this._state.get(e);
                t && t.time > 0 && (this._tickOffset.cancel(t.time), this._state.cancel(t.time))
            }
            return this._state.cancel(e), this._state.setStateAtTime("stopped", e), this.setTicksAtTime(0, e), this
        }
        pause(t) {
            const e = this.toSeconds(t);
            return "started" === this._state.getValueAtTime(e) && this._state.setStateAtTime("paused", e), this
        }
        cancel(t) {
            return t = this.toSeconds(t), this._state.cancel(t), this._tickOffset.cancel(t), this
        }
        getTicksAtTime(t) {
            const e = this.toSeconds(t),
                n = this._state.getLastState("stopped", e),
                i = {
                    state: "paused",
                    time: e
                };
            this._state.add(i);
            let r = n,
                o = 0;
            return this._state.forEachBetween(n.time, e + this.sampleTime, t => {
                let e = r.time;
                const n = this._tickOffset.get(t.time);
                n && n.time >= r.time && (o = n.ticks, e = n.time), "started" === r.state && "started" !== t.state && (o += this.frequency.getTicksAtTime(t.time) - this.frequency.getTicksAtTime(e)), r = t
            }), this._state.remove(i), o
        }
        get ticks() {
            return this.getTicksAtTime(this.now())
        }
        set ticks(t) {
            this.setTicksAtTime(t, this.now())
        }
        get seconds() {
            return this.getSecondsAtTime(this.now())
        }
        set seconds(t) {
            const e = this.now(),
                n = this.frequency.timeToTicks(t, e);
            this.setTicksAtTime(n, e)
        }
        getSecondsAtTime(t) {
            t = this.toSeconds(t);
            const e = this._state.getLastState("stopped", t),
                n = {
                    state: "paused",
                    time: t
                };
            this._state.add(n);
            let i = e,
                r = 0;
            return this._state.forEachBetween(e.time, t + this.sampleTime, t => {
                let e = i.time;
                const n = this._tickOffset.get(t.time);
                n && n.time >= i.time && (r = n.seconds, e = n.time), "started" === i.state && "started" !== t.state && (r += t.time - e), i = t
            }), this._state.remove(n), r
        }
        setTicksAtTime(t, e) {
            return e = this.toSeconds(e), this._tickOffset.cancel(e), this._tickOffset.add({
                seconds: this.frequency.getDurationOfTicks(t, e),
                ticks: t,
                time: e
            }), this
        }
        getStateAtTime(t) {
            return t = this.toSeconds(t), this._state.getValueAtTime(t)
        }
        getTimeOfTick(t, e = this.now()) {
            const n = this._tickOffset.get(e),
                i = this._state.get(e),
                r = Math.max(n.time, i.time),
                o = this.frequency.getTicksAtTime(r) + t - n.ticks;
            return this.frequency.getTimeOfTick(o)
        }
        forEachTickBetween(t, e, n) {
            let i = this._state.get(t);
            this._state.forEachBetween(t, e, e => {
                i && "started" === i.state && "started" !== e.state && this.forEachTickBetween(Math.max(i.time, t), e.time - this.sampleTime, n), i = e
            });
            let r = null;
            if (i && "started" === i.state) {
                const o = Math.max(i.time, t),
                    s = this.frequency.getTicksAtTime(o),
                    a = s - this.frequency.getTicksAtTime(i.time);
                let c = Math.ceil(a) - a;
                c = Y(c, 1) ? 0 : c;
                let u = this.frequency.getTimeOfTick(s + c);
                for (; u < e;) {
                    try {
                        n(u, Math.round(this.getTicksAtTime(u)))
                    } catch (t) {
                        r = t;
                        break
                    }
                    u += this.frequency.getDurationOfTicks(1, u)
                }
            }
            if (r) throw r;
            return this
        }
        dispose() {
            return super.dispose(), this._state.dispose(), this._tickOffset.dispose(), this.frequency.dispose(), this
        }
    }
    class Vt extends kt {
        constructor() {
            super(F(Vt.getDefaults(), arguments, ["callback", "frequency"])), this.name = "Clock", this.callback = ot, this._lastUpdate = 0, this._state = new Et("stopped"), this._boundLoop = this._loop.bind(this);
            const t = F(Vt.getDefaults(), arguments, ["callback", "frequency"]);
            this.callback = t.callback, this._tickSource = new Ft({
                context: this.context,
                frequency: t.frequency,
                units: t.units
            }), this._lastUpdate = 0, this.frequency = this._tickSource.frequency, it(this, "frequency"), this._state.setStateAtTime("stopped", 0), this.context.on("tick", this._boundLoop)
        }
        static getDefaults() {
            return Object.assign(kt.getDefaults(), {
                callback: ot,
                frequency: 1,
                units: "hertz"
            })
        }
        get state() {
            return this._state.getValueAtTime(this.now())
        }
        start(t, e) {
            v(this.context);
            const n = this.toSeconds(t);
            return this.log("start", n), "started" !== this._state.getValueAtTime(n) && (this._state.setStateAtTime("started", n), this._tickSource.start(n, e), n < this._lastUpdate && this.emit("start", n, e)), this
        }
        stop(t) {
            const e = this.toSeconds(t);
            return this.log("stop", e), this._state.cancel(e), this._state.setStateAtTime("stopped", e), this._tickSource.stop(e), e < this._lastUpdate && this.emit("stop", e), this
        }
        pause(t) {
            const e = this.toSeconds(t);
            return "started" === this._state.getValueAtTime(e) && (this._state.setStateAtTime("paused", e), this._tickSource.pause(e), e < this._lastUpdate && this.emit("pause", e)), this
        }
        get ticks() {
            return Math.ceil(this.getTicksAtTime(this.now()))
        }
        set ticks(t) {
            this._tickSource.ticks = t
        }
        get seconds() {
            return this._tickSource.seconds
        }
        set seconds(t) {
            this._tickSource.seconds = t
        }
        getSecondsAtTime(t) {
            return this._tickSource.getSecondsAtTime(t)
        }
        setTicksAtTime(t, e) {
            return this._tickSource.setTicksAtTime(t, e), this
        }
        getTimeOfTick(t, e = this.now()) {
            return this._tickSource.getTimeOfTick(t, e)
        }
        getTicksAtTime(t) {
            return this._tickSource.getTicksAtTime(t)
        }
        nextTickTime(t, e) {
            const n = this.toSeconds(e),
                i = this.getTicksAtTime(n);
            return this._tickSource.getTimeOfTick(i + t, n)
        }
        _loop() {
            const t = this._lastUpdate,
                e = this.now();
            this._lastUpdate = e, this.log("loop", t, e), t !== e && (this._state.forEachBetween(t, e, t => {
                switch (t.state) {
                    case "started":
                        const e = this._tickSource.getTicksAtTime(t.time);
                        this.emit("start", t.time, e);
                        break;
                    case "stopped":
                        0 !== t.time && this.emit("stop", t.time);
                        break;
                    case "paused":
                        this.emit("pause", t.time)
                }
            }), this._tickSource.forEachTickBetween(t, e, (t, e) => {
                this.callback(t, e)
            }))
        }
        getStateAtTime(t) {
            const e = this.toSeconds(t);
            return this._state.getValueAtTime(e)
        }
        dispose() {
            return super.dispose(), this.context.off("tick", this._boundLoop), this._tickSource.dispose(), this._state.dispose(), this
        }
    }
    tt.mixin(Vt);
    class qt extends z {
        constructor(t) {
            super(), this.name = "TimelineValue", this._timeline = new Z({
                memory: 10
            }), this._initialValue = t
        }
        set(t, e) {
            return this._timeline.add({
                value: t,
                time: e
            }), this
        }
        get(t) {
            const e = this._timeline.get(t);
            return e ? e.value : this._initialValue
        }
    }
    class zt extends Ct {
        constructor() {
            super(...arguments), this.name = "Ticks", this.defaultUnits = "i"
        }
        _now() {
            return this.context.transport.ticks
        }
        _beatsToUnits(t) {
            return this._getPPQ() * t
        }
        _secondsToUnits(t) {
            return Math.floor(t / (60 / this._getBpm()) * this._getPPQ())
        }
        _ticksToUnits(t) {
            return t
        }
        toTicks() {
            return this.valueOf()
        }
        toSeconds() {
            return this.valueOf() / this._getPPQ() * (60 / this._getBpm())
        }
    }
    class Gt extends z {
        constructor() {
            super(...arguments), this.name = "IntervalTimeline", this._root = null, this._length = 0
        }
        add(t) {
            m(w(t.time), "Events must have a time property"), m(w(t.duration), "Events must have a duration parameter"), t.time = t.time.valueOf();
            let e = new Ht(t.time, t.time + t.duration, t);
            for (null === this._root ? this._root = e : this._root.insert(e), this._length++; null !== e;) e.updateHeight(), e.updateMax(), this._rebalance(e), e = e.parent;
            return this
        }
        remove(t) {
            if (null !== this._root) {
                const e = [];
                this._root.search(t.time, e);
                for (const n of e)
                    if (n.event === t) {
                        this._removeNode(n), this._length--;
                        break
                    }
            }
            return this
        }
        get length() {
            return this._length
        }
        cancel(t) {
            return this.forEachFrom(t, t => this.remove(t)), this
        }
        _setRoot(t) {
            this._root = t, null !== this._root && (this._root.parent = null)
        }
        _replaceNodeInParent(t, e) {
            null !== t.parent ? (t.isLeftChild() ? t.parent.left = e : t.parent.right = e, this._rebalance(t.parent)) : this._setRoot(e)
        }
        _removeNode(t) {
            if (null === t.left && null === t.right) this._replaceNodeInParent(t, null);
            else if (null === t.right) this._replaceNodeInParent(t, t.left);
            else if (null === t.left) this._replaceNodeInParent(t, t.right);
            else {
                let e, n = null;
                if (t.getBalance() > 0)
                    if (null === t.left.right) e = t.left, e.right = t.right, n = e;
                    else {
                        for (e = t.left.right; null !== e.right;) e = e.right;
                        e.parent && (e.parent.right = e.left, n = e.parent, e.left = t.left, e.right = t.right)
                    }
                else if (null === t.right.left) e = t.right, e.left = t.left, n = e;
                else {
                    for (e = t.right.left; null !== e.left;) e = e.left;
                    e.parent && (e.parent.left = e.right, n = e.parent, e.left = t.left, e.right = t.right)
                }
                null !== t.parent ? t.isLeftChild() ? t.parent.left = e : t.parent.right = e : this._setRoot(e), n && this._rebalance(n)
            }
            t.dispose()
        }
        _rotateLeft(t) {
            const e = t.parent,
                n = t.isLeftChild(),
                i = t.right;
            i && (t.right = i.left, i.left = t), null !== e ? n ? e.left = i : e.right = i : this._setRoot(i)
        }
        _rotateRight(t) {
            const e = t.parent,
                n = t.isLeftChild(),
                i = t.left;
            i && (t.left = i.right, i.right = t), null !== e ? n ? e.left = i : e.right = i : this._setRoot(i)
        }
        _rebalance(t) {
            const e = t.getBalance();
            e > 1 && t.left ? t.left.getBalance() < 0 ? this._rotateLeft(t.left) : this._rotateRight(t) : e < -1 && t.right && (t.right.getBalance() > 0 ? this._rotateRight(t.right) : this._rotateLeft(t))
        }
        get(t) {
            if (null !== this._root) {
                const e = [];
                if (this._root.search(t, e), e.length > 0) {
                    let t = e[0];
                    for (let n = 1; n < e.length; n++) e[n].low > t.low && (t = e[n]);
                    return t.event
                }
            }
            return null
        }
        forEach(t) {
            if (null !== this._root) {
                const e = [];
                this._root.traverse(t => e.push(t)), e.forEach(e => {
                    e.event && t(e.event)
                })
            }
            return this
        }
        forEachAtTime(t, e) {
            if (null !== this._root) {
                const n = [];
                this._root.search(t, n), n.forEach(t => {
                    t.event && e(t.event)
                })
            }
            return this
        }
        forEachFrom(t, e) {
            if (null !== this._root) {
                const n = [];
                this._root.searchAfter(t, n), n.forEach(t => {
                    t.event && e(t.event)
                })
            }
            return this
        }
        dispose() {
            return super.dispose(), null !== this._root && this._root.traverse(t => t.dispose()), this._root = null, this
        }
    }
    class Ht {
        constructor(t, e, n) {
            this._left = null, this._right = null, this.parent = null, this.height = 0, this.event = n, this.low = t, this.high = e, this.max = this.high
        }
        insert(t) {
            t.low <= this.low ? null === this.left ? this.left = t : this.left.insert(t) : null === this.right ? this.right = t : this.right.insert(t)
        }
        search(t, e) {
            t > this.max || (null !== this.left && this.left.search(t, e), this.low <= t && this.high > t && e.push(this), this.low > t || null !== this.right && this.right.search(t, e))
        }
        searchAfter(t, e) {
            this.low >= t && (e.push(this), null !== this.left && this.left.searchAfter(t, e)), null !== this.right && this.right.searchAfter(t, e)
        }
        traverse(t) {
            t(this), null !== this.left && this.left.traverse(t), null !== this.right && this.right.traverse(t)
        }
        updateHeight() {
            null !== this.left && null !== this.right ? this.height = Math.max(this.left.height, this.right.height) + 1 : null !== this.right ? this.height = this.right.height + 1 : null !== this.left ? this.height = this.left.height + 1 : this.height = 0
        }
        updateMax() {
            this.max = this.high, null !== this.left && (this.max = Math.max(this.max, this.left.max)), null !== this.right && (this.max = Math.max(this.max, this.right.max))
        }
        getBalance() {
            let t = 0;
            return null !== this.left && null !== this.right ? t = this.left.height - this.right.height : null !== this.left ? t = this.left.height + 1 : null !== this.right && (t = -(this.right.height + 1)), t
        }
        isLeftChild() {
            return null !== this.parent && this.parent.left === this
        }
        get left() {
            return this._left
        }
        set left(t) {
            this._left = t, null !== t && (t.parent = this), this.updateHeight(), this.updateMax()
        }
        get right() {
            return this._right
        }
        set right(t) {
            this._right = t, null !== t && (t.parent = this), this.updateHeight(), this.updateMax()
        }
        dispose() {
            this.parent = null, this._left = null, this._right = null, this.event = null
        }
    }
    class Wt {
        constructor(t, e) {
            this.id = Wt._eventId++;
            const n = Object.assign(Wt.getDefaults(), e);
            this.transport = t, this.callback = n.callback, this._once = n.once, this.time = n.time
        }
        static getDefaults() {
            return {
                callback: ot,
                once: !1,
                time: 0
            }
        }
        invoke(t) {
            this.callback && (this.callback(t), this._once && this.transport.clear(this.id))
        }
        dispose() {
            return this.callback = void 0, this
        }
    }
    Wt._eventId = 0;
    class Yt extends Wt {
        constructor(t, e) {
            super(t, e), this._currentId = -1, this._nextId = -1, this._nextTick = this.time, this._boundRestart = this._restart.bind(this);
            const n = Object.assign(Yt.getDefaults(), e);
            this.duration = new zt(t.context, n.duration).valueOf(), this._interval = new zt(t.context, n.interval).valueOf(), this._nextTick = n.time, this.transport.on("start", this._boundRestart), this.transport.on("loopStart", this._boundRestart), this.context = this.transport.context, this._restart()
        }
        static getDefaults() {
            return Object.assign({}, Wt.getDefaults(), {
                duration: 1 / 0,
                interval: 1,
                once: !1
            })
        }
        invoke(t) {
            this._createEvents(t), super.invoke(t)
        }
        _createEvents(t) {
            const e = this.transport.getTicksAtTime(t);
            e >= this.time && e >= this._nextTick && this._nextTick + this._interval < this.time + this.duration && (this._nextTick += this._interval, this._currentId = this._nextId, this._nextId = this.transport.scheduleOnce(this.invoke.bind(this), new zt(this.context, this._nextTick).toSeconds()))
        }
        _restart(t) {
            this.transport.clear(this._currentId), this.transport.clear(this._nextId), this._nextTick = this.time;
            const e = this.transport.getTicksAtTime(t);
            e > this.time && (this._nextTick = this.time + Math.ceil((e - this.time) / this._interval) * this._interval), this._currentId = this.transport.scheduleOnce(this.invoke.bind(this), new zt(this.context, this._nextTick).toSeconds()), this._nextTick += this._interval, this._nextId = this.transport.scheduleOnce(this.invoke.bind(this), new zt(this.context, this._nextTick).toSeconds())
        }
        dispose() {
            return super.dispose(), this.transport.clear(this._currentId), this.transport.clear(this._nextId), this.transport.off("start", this._boundRestart), this.transport.off("loopStart", this._boundRestart), this
        }
    }
    class Xt extends kt {
        constructor() {
            super(F(Xt.getDefaults(), arguments)), this.name = "Transport", this._loop = new qt(!1), this._loopStart = 0, this._loopEnd = 0, this._scheduledEvents = {}, this._timeline = new Z, this._repeatedEvents = new Gt, this._syncedSignals = [], this._swingAmount = 0;
            const t = F(Xt.getDefaults(), arguments);
            this._ppq = t.ppq, this._clock = new Vt({
                callback: this._processTick.bind(this),
                context: this.context,
                frequency: 0,
                units: "bpm"
            }), this._bindClockEvents(), this.bpm = this._clock.frequency, this._clock.frequency.multiplier = t.ppq, this.bpm.setValueAtTime(t.bpm, 0), it(this, "bpm"), this._timeSignature = t.timeSignature, this._swingTicks = t.ppq / 2
        }
        static getDefaults() {
            return Object.assign(kt.getDefaults(), {
                bpm: 120,
                loopEnd: "4m",
                loopStart: 0,
                ppq: 192,
                swing: 0,
                swingSubdivision: "8n",
                timeSignature: 4
            })
        }
        _processTick(t, e) {
            if (this._swingAmount > 0 && e % this._ppq != 0 && e % (2 * this._swingTicks) != 0) {
                const n = e % (2 * this._swingTicks) / (2 * this._swingTicks),
                    i = Math.sin(n * Math.PI) * this._swingAmount;
                t += new zt(this.context, 2 * this._swingTicks / 3).toSeconds() * i
            }
            this._loop.get(t) && e >= this._loopEnd && (this.emit("loopEnd", t), this._clock.setTicksAtTime(this._loopStart, t), e = this._loopStart, this.emit("loopStart", t, this._clock.getSecondsAtTime(t)), this.emit("loop", t)), this._timeline.forEachAtTime(e, e => e.invoke(t))
        }
        schedule(t, e) {
            const n = new Wt(this, {
                callback: t,
                time: new Ct(this.context, e).toTicks()
            });
            return this._addEvent(n, this._timeline)
        }
        scheduleRepeat(t, e, n, i = 1 / 0) {
            const r = new Yt(this, {
                callback: t,
                duration: new yt(this.context, i).toTicks(),
                interval: new yt(this.context, e).toTicks(),
                time: new Ct(this.context, n).toTicks()
            });
            return this._addEvent(r, this._repeatedEvents)
        }
        scheduleOnce(t, e) {
            const n = new Wt(this, {
                callback: t,
                once: !0,
                time: new Ct(this.context, e).toTicks()
            });
            return this._addEvent(n, this._timeline)
        }
        clear(t) {
            if (this._scheduledEvents.hasOwnProperty(t)) {
                const e = this._scheduledEvents[t.toString()];
                e.timeline.remove(e.event), e.event.dispose(), delete this._scheduledEvents[t.toString()]
            }
            return this
        }
        _addEvent(t, e) {
            return this._scheduledEvents[t.id.toString()] = {
                event: t,
                timeline: e
            }, e.add(t), t.id
        }
        cancel(t = 0) {
            const e = this.toTicks(t);
            return this._timeline.forEachFrom(e, t => this.clear(t.id)), this._repeatedEvents.forEachFrom(e, t => this.clear(t.id)), this
        }
        _bindClockEvents() {
            this._clock.on("start", (t, e) => {
                e = new zt(this.context, e).toSeconds(), this.emit("start", t, e)
            }), this._clock.on("stop", t => {
                this.emit("stop", t)
            }), this._clock.on("pause", t => {
                this.emit("pause", t)
            })
        }
        get state() {
            return this._clock.getStateAtTime(this.now())
        }
        start(t, e) {
            let n;
            return w(e) && (n = this.toTicks(e)), this._clock.start(t, n), this
        }
        stop(t) {
            return this._clock.stop(t), this
        }
        pause(t) {
            return this._clock.pause(t), this
        }
        toggle(t) {
            return t = this.toSeconds(t), "started" !== this._clock.getStateAtTime(t) ? this.start(t) : this.stop(t), this
        }
        get timeSignature() {
            return this._timeSignature
        }
        set timeSignature(t) {
            C(t) && (t = t[0] / t[1] * 4), this._timeSignature = t
        }
        get loopStart() {
            return new yt(this.context, this._loopStart, "i").toSeconds()
        }
        set loopStart(t) {
            this._loopStart = this.toTicks(t)
        }
        get loopEnd() {
            return new yt(this.context, this._loopEnd, "i").toSeconds()
        }
        set loopEnd(t) {
            this._loopEnd = this.toTicks(t)
        }
        get loop() {
            return this._loop.get(this.now())
        }
        set loop(t) {
            this._loop.set(t, this.now())
        }
        setLoopPoints(t, e) {
            return this.loopStart = t, this.loopEnd = e, this
        }
        get swing() {
            return this._swingAmount
        }
        set swing(t) {
            this._swingAmount = t
        }
        get swingSubdivision() {
            return new zt(this.context, this._swingTicks).toNotation()
        }
        set swingSubdivision(t) {
            this._swingTicks = this.toTicks(t)
        }
        get position() {
            const t = this.now(),
                e = this._clock.getTicksAtTime(t);
            return new zt(this.context, e).toBarsBeatsSixteenths()
        }
        set position(t) {
            const e = this.toTicks(t);
            this.ticks = e
        }
        get seconds() {
            return this._clock.seconds
        }
        set seconds(t) {
            const e = this.now(),
                n = this._clock.frequency.timeToTicks(t, e);
            this.ticks = n
        }
        get progress() {
            if (this.loop) {
                const t = this.now();
                return (this._clock.getTicksAtTime(t) - this._loopStart) / (this._loopEnd - this._loopStart)
            }
            return 0
        }
        get ticks() {
            return this._clock.ticks
        }
        set ticks(t) {
            if (this._clock.ticks !== t) {
                const e = this.now();
                if ("started" === this.state) {
                    const n = this._clock.getTicksAtTime(e),
                        i = this._clock.getTimeOfTick(Math.ceil(n));
                    this.emit("stop", i), this._clock.setTicksAtTime(t, i), this.emit("start", i, this._clock.getSecondsAtTime(i))
                } else this._clock.setTicksAtTime(t, e)
            }
        }
        getTicksAtTime(t) {
            return Math.round(this._clock.getTicksAtTime(t))
        }
        getSecondsAtTime(t) {
            return this._clock.getSecondsAtTime(t)
        }
        get PPQ() {
            return this._clock.frequency.multiplier
        }
        set PPQ(t) {
            this._clock.frequency.multiplier = t
        }
        nextSubdivision(t) {
            if (t = this.toTicks(t), "started" !== this.state) return 0; {
                const e = this.now(),
                    n = t - this.getTicksAtTime(e) % t;
                return this._clock.nextTickTime(n, e)
            }
        }
        syncSignal(t, e) {
            if (!e) {
                const n = this.now();
                if (0 !== t.getValueAtTime(n)) {
                    const i = 1 / (60 / this.bpm.getValueAtTime(n) / this.PPQ);
                    e = t.getValueAtTime(n) / i
                } else e = 0
            }
            const n = new Pt(e);
            return this.bpm.connect(n), n.connect(t._param), this._syncedSignals.push({
                initial: t.value,
                ratio: n,
                signal: t
            }), t.value = 0, this
        }
        unsyncSignal(t) {
            for (let e = this._syncedSignals.length - 1; e >= 0; e--) {
                const n = this._syncedSignals[e];
                n.signal === t && (n.ratio.dispose(), n.signal.value = n.initial, this._syncedSignals.splice(e, 1))
            }
            return this
        }
        dispose() {
            return super.dispose(), this._clock.dispose(), rt(this, "bpm"), this._timeline.dispose(), this._repeatedEvents.dispose(), this
        }
    }
    tt.mixin(Xt), $(t => {
        t.transport = new Xt({
            context: t
        })
    }), K(t => {
        t.transport.dispose()
    });
    class Zt extends Mt {
        constructor() {
            super(F(Zt.getDefaults(), arguments, ["volume"])), this.name = "Volume";
            const t = F(Zt.getDefaults(), arguments, ["volume"]);
            this.input = this.output = new Pt({
                context: this.context,
                gain: t.volume,
                units: "decibels"
            }), this.volume = this.output.gain, it(this, "volume"), this._unmutedVolume = t.volume, this.mute = t.mute
        }
        static getDefaults() {
            return Object.assign(Mt.getDefaults(), {
                mute: !1,
                volume: 0
            })
        }
        get mute() {
            return this.volume.value === -1 / 0
        }
        set mute(t) {
            !this.mute && t ? (this._unmutedVolume = this.volume.value, this.volume.value = -1 / 0) : this.mute && !t && (this.volume.value = this._unmutedVolume)
        }
        dispose() {
            return super.dispose(), this.input.dispose(), this.volume.dispose(), this
        }
    }
    class Jt extends Mt {
        constructor() {
            super(F(Jt.getDefaults(), arguments)), this.name = "Destination", this.input = new Zt({
                context: this.context
            }), this.output = new Pt({
                context: this.context
            }), this.volume = this.input.volume;
            const t = F(Jt.getDefaults(), arguments);
            It(this.input, this.output, this.context.rawContext.destination), this.mute = t.mute, this._internalChannels = [this.input, this.context.rawContext.destination, this.output]
        }
        static getDefaults() {
            return Object.assign(Mt.getDefaults(), {
                mute: !1,
                volume: 0
            })
        }
        get mute() {
            return this.input.mute
        }
        set mute(t) {
            this.input.mute = t
        }
        chain(...t) {
            return this.input.disconnect(), t.unshift(this.input), t.push(this.output), It(...t), this
        }
        get maxChannelCount() {
            return this.context.rawContext.destination.maxChannelCount
        }
        dispose() {
            return super.dispose(), this.volume.dispose(), this
        }
    }
    $(t => {
        t.destination = new Jt({
            context: t
        })
    }), K(t => {
        t.destination.dispose()
    });
    class $t extends z {
        constructor() {
            super(), this.name = "ToneAudioBuffers", this._buffers = new Map, this._loadingCount = 0;
            const t = F($t.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls");
            this.baseUrl = t.baseUrl, Object.keys(t.urls).forEach(e => {
                this._loadingCount++;
                const n = t.urls[e];
                this.add(e, n, this._bufferLoaded.bind(this, t.onload), t.onerror)
            })
        }
        static getDefaults() {
            return {
                baseUrl: "",
                onerror: ot,
                onload: ot,
                urls: {}
            }
        }
        has(t) {
            return this._buffers.has(t.toString())
        }
        get(t) {
            return m(this.has(t), "ToneAudioBuffers has no buffer named: " + t), this._buffers.get(t.toString())
        }
        _bufferLoaded(t) {
            this._loadingCount--, 0 === this._loadingCount && t && t()
        }
        get loaded() {
            return Array.from(this._buffers).every(([t, e]) => e.loaded)
        }
        add(t, e, n = ot, i = ot) {
            return k(e) ? this._buffers.set(t.toString(), new st(this.baseUrl + e, n, i)) : this._buffers.set(t.toString(), new st(e, n, i)), this
        }
        dispose() {
            return super.dispose(), this._buffers.forEach(t => t.dispose()), this._buffers.clear(), this
        }
    }
    class Qt extends kt {
        constructor() {
            super(...arguments), this.name = "Draw", this.expiration = .25, this.anticipation = .008, this._events = new Z, this._boundDrawLoop = this._drawLoop.bind(this), this._animationFrame = -1
        }
        schedule(t, e) {
            return this._events.add({
                callback: t,
                time: this.toSeconds(e)
            }), 1 === this._events.length && (this._animationFrame = requestAnimationFrame(this._boundDrawLoop)), this
        }
        cancel(t) {
            return this._events.cancel(this.toSeconds(t)), this
        }
        _drawLoop() {
            const t = this.context.currentTime;
            for (; this._events.length && this._events.peek().time - this.anticipation <= t;) {
                const e = this._events.shift();
                e && t - e.time <= this.expiration && e.callback()
            }
            this._events.length > 0 && (this._animationFrame = requestAnimationFrame(this._boundDrawLoop))
        }
        dispose() {
            return super.dispose(), this._events.dispose(), cancelAnimationFrame(this._animationFrame), this
        }
    }
    $(t => {
        t.draw = new Qt({
            context: t
        })
    }), K(t => {
        t.draw.dispose()
    });
    n(525);
    class Kt extends Mt {
        constructor(t) {
            super(t), this.input = void 0, this._state = new Et("stopped"), this._synced = !1, this._scheduled = [], this._syncedStart = ot, this._syncedStop = ot, this._state.memory = 100, this._state.increasing = !0, this._volume = this.output = new Zt({
                context: this.context,
                mute: t.mute,
                volume: t.volume
            }), this.volume = this._volume.volume, it(this, "volume"), this.onstop = t.onstop
        }
        static getDefaults() {
            return Object.assign(Mt.getDefaults(), {
                mute: !1,
                onstop: ot,
                volume: 0
            })
        }
        get state() {
            return this._synced ? "started" === this.context.transport.state ? this._state.getValueAtTime(this.context.transport.seconds) : "stopped" : this._state.getValueAtTime(this.now())
        }
        get mute() {
            return this._volume.mute
        }
        set mute(t) {
            this._volume.mute = t
        }
        _clampToCurrentTime(t) {
            return this._synced ? t : Math.max(t, this.context.currentTime)
        }
        start(t, e, n) {
            let i = _(t) && this._synced ? this.context.transport.seconds : this.toSeconds(t);
            if (i = this._clampToCurrentTime(i), this._synced || "started" !== this._state.getValueAtTime(i))
                if (this.log("start", i), this._state.setStateAtTime("started", i), this._synced) {
                    const t = this._state.get(i);
                    t && (t.offset = this.toSeconds(V(e, 0)), t.duration = n ? this.toSeconds(n) : void 0);
                    const r = this.context.transport.schedule(t => {
                        this._start(t, e, n)
                    }, i);
                    this._scheduled.push(r), "started" === this.context.transport.state && this._syncedStart(this.now(), this.context.transport.seconds)
                } else v(this.context), this._start(i, e, n);
            else m(G(i, this._state.get(i).time), "Start time must be strictly greater than previous start time"), this._state.cancel(i), this._state.setStateAtTime("started", i), this.log("restart", i), this.restart(i, e, n);
            return this
        }
        stop(t) {
            let e = _(t) && this._synced ? this.context.transport.seconds : this.toSeconds(t);
            if (e = this._clampToCurrentTime(e), "started" === this._state.getValueAtTime(e) || w(this._state.getNextState("started", e))) {
                if (this.log("stop", e), this._synced) {
                    const t = this.context.transport.schedule(this._stop.bind(this), e);
                    this._scheduled.push(t)
                } else this._stop(e);
                this._state.cancel(e), this._state.setStateAtTime("stopped", e)
            }
            return this
        }
        restart(t, e, n) {
            return t = this.toSeconds(t), "started" === this._state.getValueAtTime(t) && (this._state.cancel(t), this._restart(t, e, n)), this
        }
        sync() {
            return this._synced || (this._synced = !0, this._syncedStart = (t, e) => {
                if (e > 0) {
                    const n = this._state.get(e);
                    if (n && "started" === n.state && n.time !== e) {
                        const i = e - this.toSeconds(n.time);
                        let r;
                        n.duration && (r = this.toSeconds(n.duration) - i), this._start(t, this.toSeconds(n.offset) + i, r)
                    }
                }
            }, this._syncedStop = t => {
                const e = this.context.transport.getSecondsAtTime(Math.max(t - this.sampleTime, 0));
                "started" === this._state.getValueAtTime(e) && this._stop(t)
            }, this.context.transport.on("start", this._syncedStart), this.context.transport.on("loopStart", this._syncedStart), this.context.transport.on("stop", this._syncedStop), this.context.transport.on("pause", this._syncedStop), this.context.transport.on("loopEnd", this._syncedStop)), this
        }
        unsync() {
            return this._synced && (this.context.transport.off("stop", this._syncedStop), this.context.transport.off("pause", this._syncedStop), this.context.transport.off("loopEnd", this._syncedStop), this.context.transport.off("start", this._syncedStart), this.context.transport.off("loopStart", this._syncedStart)), this._synced = !1, this._scheduled.forEach(t => this.context.transport.clear(t)), this._scheduled = [], this._state.cancel(0), this
        }
        dispose() {
            return super.dispose(), this.onstop = ot, this.unsync(), this._volume.dispose(), this._state.dispose(), this
        }
    }
    class te extends Dt {
        constructor() {
            super(F(te.getDefaults(), arguments, ["url", "onload"])), this.name = "ToneBufferSource", this._source = this.context.createBufferSource(), this._internalChannels = [this._source], this._sourceStarted = !1, this._sourceStopped = !1;
            const t = F(te.getDefaults(), arguments, ["url", "onload"]);
            At(this._source, this._gainNode), this._source.onended = () => this._stopSource(), this.playbackRate = new Ot({
                context: this.context,
                param: this._source.playbackRate,
                units: "positive",
                value: t.playbackRate
            }), this.loop = t.loop, this.loopStart = t.loopStart, this.loopEnd = t.loopEnd, this._buffer = new st(t.url, t.onload, t.onerror), this._internalChannels.push(this._source)
        }
        static getDefaults() {
            return Object.assign(Dt.getDefaults(), {
                url: new st,
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                onload: ot,
                onerror: ot,
                playbackRate: 1
            })
        }
        get fadeIn() {
            return this._fadeIn
        }
        set fadeIn(t) {
            this._fadeIn = t
        }
        get fadeOut() {
            return this._fadeOut
        }
        set fadeOut(t) {
            this._fadeOut = t
        }
        get curve() {
            return this._curve
        }
        set curve(t) {
            this._curve = t
        }
        start(t, e, n, i = 1) {
            m(this.buffer.loaded, "buffer is either not set or not loaded");
            const r = this.toSeconds(t);
            this._startGain(r, i), e = this.loop ? V(e, this.loopStart) : V(e, 0);
            let o = Math.max(this.toSeconds(e), 0);
            if (this.loop) {
                const t = this.toSeconds(this.loopEnd) || this.buffer.duration,
                    e = this.toSeconds(this.loopStart),
                    n = t - e;
                H(o, t) && (o = (o - e) % n + e), Y(o, this.buffer.duration) && (o = 0)
            }
            if (this._source.buffer = this.buffer.get(), this._source.loopEnd = this.toSeconds(this.loopEnd) || this.buffer.duration, W(o, this.buffer.duration) && (this._sourceStarted = !0, this._source.start(r, o)), w(n)) {
                let t = this.toSeconds(n);
                t = Math.max(t, 0), this.stop(r + t)
            }
            return this
        }
        _stopSource(t) {
            !this._sourceStopped && this._sourceStarted && (this._sourceStopped = !0, this._source.stop(this.toSeconds(t)), this._onended())
        }
        get loopStart() {
            return this._source.loopStart
        }
        set loopStart(t) {
            this._source.loopStart = this.toSeconds(t)
        }
        get loopEnd() {
            return this._source.loopEnd
        }
        set loopEnd(t) {
            this._source.loopEnd = this.toSeconds(t)
        }
        get buffer() {
            return this._buffer
        }
        set buffer(t) {
            this._buffer.set(t)
        }
        get loop() {
            return this._source.loop
        }
        set loop(t) {
            this._source.loop = t, this._sourceStarted && this.cancelStop()
        }
        dispose() {
            return super.dispose(), this._source.onended = null, this._source.disconnect(), this._buffer.dispose(), this.playbackRate.dispose(), this
        }
    }
    class ee extends Mt {
        constructor() {
            super(F(ee.getDefaults(), arguments, ["volume"])), this.name = "UserMedia";
            const t = F(ee.getDefaults(), arguments, ["volume"]);
            this._volume = this.output = new Zt({
                context: this.context,
                volume: t.volume
            }), this.volume = this._volume.volume, it(this, "volume"), this.mute = t.mute
        }
        static getDefaults() {
            return Object.assign(Mt.getDefaults(), {
                mute: !1,
                volume: 0
            })
        }
        open(t) {
            return A(this, void 0, void 0, (function* () {
                m(ee.supported, "UserMedia is not supported"), "started" === this.state && this.close();
                const e = yield ee.enumerateDevices();
                x(t) ? this._device = e[t] : (this._device = e.find(e => e.label === t || e.deviceId === t), !this._device && e.length > 0 && (this._device = e[0]), m(w(this._device), "No matching device " + t));
                const n = {
                    audio: {
                        echoCancellation: !1,
                        sampleRate: this.context.sampleRate,
                        noiseSuppression: !1,
                        mozNoiseSuppression: !1
                    }
                };
                this._device && (n.audio.deviceId = this._device.deviceId);
                const i = yield navigator.mediaDevices.getUserMedia(n);
                if (!this._stream) {
                    this._stream = i;
                    const t = this.context.createMediaStreamSource(i);
                    At(t, this.output), this._mediaStream = t
                }
                return this
            }))
        }
        close() {
            return this._stream && this._mediaStream && (this._stream.getAudioTracks().forEach(t => {
                t.stop()
            }), this._stream = void 0, this._mediaStream.disconnect(), this._mediaStream = void 0), this._device = void 0, this
        }
        static enumerateDevices() {
            return A(this, void 0, void 0, (function* () {
                return (yield navigator.mediaDevices.enumerateDevices()).filter(t => "audioinput" === t.kind)
            }))
        }
        get state() {
            return this._stream && this._stream.active ? "started" : "stopped"
        }
        get deviceId() {
            return this._device ? this._device.deviceId : void 0
        }
        get groupId() {
            return this._device ? this._device.groupId : void 0
        }
        get label() {
            return this._device ? this._device.label : void 0
        }
        get mute() {
            return this._volume.mute
        }
        set mute(t) {
            this._volume.mute = t
        }
        dispose() {
            return super.dispose(), this.close(), this._volume.dispose(), this.volume.dispose(), this
        }
        static get supported() {
            return w(navigator.mediaDevices) && w(navigator.mediaDevices.getUserMedia)
        }
    }

    function ne(t, e) {
        return A(this, void 0, void 0, (function* () {
            const n = e / t.context.sampleRate,
                i = new at(1, n, t.context.sampleRate);
            return new t.constructor(Object.assign(t.get(), {
                frequency: 2 / n,
                detune: 0,
                context: i
            })).toDestination().start(0), (yield i.render()).getChannelData(0)
        }))
    }
    class ie extends Dt {
        constructor() {
            super(F(ie.getDefaults(), arguments, ["frequency", "type"])), this.name = "ToneOscillatorNode", this._oscillator = this.context.createOscillator(), this._internalChannels = [this._oscillator];
            const t = F(ie.getDefaults(), arguments, ["frequency", "type"]);
            At(this._oscillator, this._gainNode), this.type = t.type, this.frequency = new Ot({
                context: this.context,
                param: this._oscillator.frequency,
                units: "frequency",
                value: t.frequency
            }), this.detune = new Ot({
                context: this.context,
                param: this._oscillator.detune,
                units: "cents",
                value: t.detune
            }), it(this, ["frequency", "detune"])
        }
        static getDefaults() {
            return Object.assign(Dt.getDefaults(), {
                detune: 0,
                frequency: 440,
                type: "sine"
            })
        }
        start(t) {
            const e = this.toSeconds(t);
            return this.log("start", e), this._startGain(e), this._oscillator.start(e), this
        }
        _stopSource(t) {
            this._oscillator.stop(t)
        }
        setPeriodicWave(t) {
            return this._oscillator.setPeriodicWave(t), this
        }
        get type() {
            return this._oscillator.type
        }
        set type(t) {
            this._oscillator.type = t
        }
        dispose() {
            return super.dispose(), "started" === this.state && this.stop(), this._oscillator.disconnect(), this.frequency.dispose(), this.detune.dispose(), this
        }
    }
    class re extends Kt {
        constructor() {
            super(F(re.getDefaults(), arguments, ["frequency", "type"])), this.name = "Oscillator", this._oscillator = null;
            const t = F(re.getDefaults(), arguments, ["frequency", "type"]);
            this.frequency = new Nt({
                context: this.context,
                units: "frequency",
                value: t.frequency
            }), it(this, "frequency"), this.detune = new Nt({
                context: this.context,
                units: "cents",
                value: t.detune
            }), it(this, "detune"), this._partials = t.partials, this._partialCount = t.partialCount, this._type = t.type, t.partialCount && "custom" !== t.type && (this._type = this.baseType + t.partialCount.toString()), this.phase = t.phase
        }
        static getDefaults() {
            return Object.assign(Kt.getDefaults(), {
                detune: 0,
                frequency: 440,
                partialCount: 0,
                partials: [],
                phase: 0,
                type: "sine"
            })
        }
        _start(t) {
            const e = this.toSeconds(t),
                n = new ie({
                    context: this.context,
                    onended: () => this.onstop(this)
                });
            this._oscillator = n, this._wave ? this._oscillator.setPeriodicWave(this._wave) : this._oscillator.type = this._type, this._oscillator.connect(this.output), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.start(e)
        }
        _stop(t) {
            const e = this.toSeconds(t);
            this._oscillator && this._oscillator.stop(e)
        }
        _restart(t) {
            const e = this.toSeconds(t);
            return this.log("restart", e), this._oscillator && this._oscillator.cancelStop(), this._state.cancel(e), this
        }
        syncFrequency() {
            return this.context.transport.syncSignal(this.frequency), this
        }
        unsyncFrequency() {
            return this.context.transport.unsyncSignal(this.frequency), this
        }
        _getCachedPeriodicWave() {
            if ("custom" === this._type) {
                return re._periodicWaveCache.find(t => {
                    return t.phase === this._phase && (e = t.partials, n = this._partials, e.length === n.length && e.every((t, e) => n[e] === t));
                    var e, n
                })
            } {
                const t = re._periodicWaveCache.find(t => t.type === this._type && t.phase === this._phase);
                return this._partialCount = t ? t.partialCount : this._partialCount, t
            }
        }
        get type() {
            return this._type
        }
        set type(t) {
            this._type = t;
            const e = -1 !== ["sine", "square", "sawtooth", "triangle"].indexOf(t);
            if (0 === this._phase && e) this._wave = void 0, this._partialCount = 0, null !== this._oscillator && (this._oscillator.type = t);
            else {
                const e = this._getCachedPeriodicWave();
                if (w(e)) {
                    const {
                        partials: t,
                        wave: n
                    } = e;
                    this._wave = n, this._partials = t, null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave)
                } else {
                    const [e, n] = this._getRealImaginary(t, this._phase), i = this.context.createPeriodicWave(e, n);
                    this._wave = i, null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave), re._periodicWaveCache.push({
                        imag: n,
                        partialCount: this._partialCount,
                        partials: this._partials,
                        phase: this._phase,
                        real: e,
                        type: this._type,
                        wave: this._wave
                    }), re._periodicWaveCache.length > 100 && re._periodicWaveCache.shift()
                }
            }
        }
        get baseType() {
            return this._type.replace(this.partialCount.toString(), "")
        }
        set baseType(t) {
            this.partialCount && "custom" !== this._type && "custom" !== t ? this.type = t + this.partialCount : this.type = t
        }
        get partialCount() {
            return this._partialCount
        }
        set partialCount(t) {
            g(t, 0);
            let e = this._type;
            const n = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
            if (n && (e = n[1]), "custom" !== this._type) this.type = 0 === t ? e : e + t.toString();
            else {
                const e = new Float32Array(t);
                this._partials.forEach((t, n) => e[n] = t), this._partials = Array.from(e), this.type = this._type
            }
        }
        _getRealImaginary(t, e) {
            let n = 2048;
            const i = new Float32Array(n),
                r = new Float32Array(n);
            let o = 1;
            if ("custom" === t) {
                if (o = this._partials.length + 1, this._partialCount = this._partials.length, n = o, 0 === this._partials.length) return [i, r]
            } else {
                const e = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);
                e ? (o = parseInt(e[2], 10) + 1, this._partialCount = parseInt(e[2], 10), t = e[1], o = Math.max(o, 2), n = o) : this._partialCount = 0, this._partials = []
            }
            for (let s = 1; s < n; ++s) {
                const n = 2 / (s * Math.PI);
                let a;
                switch (t) {
                    case "sine":
                        a = s <= o ? 1 : 0, this._partials[s - 1] = a;
                        break;
                    case "square":
                        a = 1 & s ? 2 * n : 0, this._partials[s - 1] = a;
                        break;
                    case "sawtooth":
                        a = n * (1 & s ? 1 : -1), this._partials[s - 1] = a;
                        break;
                    case "triangle":
                        a = 1 & s ? n * n * 2 * (s - 1 >> 1 & 1 ? -1 : 1) : 0, this._partials[s - 1] = a;
                        break;
                    case "custom":
                        a = this._partials[s - 1];
                        break;
                    default:
                        throw new TypeError("Oscillator: invalid type: " + t)
                }
                0 !== a ? (i[s] = -a * Math.sin(e * s), r[s] = a * Math.cos(e * s)) : (i[s] = 0, r[s] = 0)
            }
            return [i, r]
        }
        _inverseFFT(t, e, n) {
            let i = 0;
            const r = t.length;
            for (let o = 0; o < r; o++) i += t[o] * Math.cos(o * n) + e[o] * Math.sin(o * n);
            return i
        }
        getInitialValue() {
            const [t, e] = this._getRealImaginary(this._type, 0);
            let n = 0;
            const i = 2 * Math.PI;
            for (let r = 0; r < 32; r++) n = Math.max(this._inverseFFT(t, e, r / 32 * i), n);
            return X(-this._inverseFFT(t, e, this._phase) / n, -1, 1)
        }
        get partials() {
            return this._partials.slice(0, this.partialCount)
        }
        set partials(t) {
            this._partials = t, this._partialCount = this._partials.length, t.length && (this.type = "custom")
        }
        get phase() {
            return this._phase * (180 / Math.PI)
        }
        set phase(t) {
            this._phase = t * Math.PI / 180, this.type = this._type
        }
        asArray(t = 1024) {
            return A(this, void 0, void 0, (function* () {
                return ne(this, t)
            }))
        }
        dispose() {
            return super.dispose(), null !== this._oscillator && this._oscillator.dispose(), this._wave = void 0, this.frequency.dispose(), this.detune.dispose(), this
        }
    }
    re._periodicWaveCache = [];
    class oe extends Mt {
        constructor() {
            super(Object.assign(F(oe.getDefaults(), arguments, ["context"])))
        }
        connect(t, e = 0, n = 0) {
            return Lt(this, t, e, n), this
        }
    }
    class se extends oe {
        constructor() {
            super(Object.assign(F(se.getDefaults(), arguments, ["mapping", "length"]))), this.name = "WaveShaper", this._shaper = this.context.createWaveShaper(), this.input = this._shaper, this.output = this._shaper;
            const t = F(se.getDefaults(), arguments, ["mapping", "length"]);
            C(t.mapping) || t.mapping instanceof Float32Array ? this.curve = Float32Array.from(t.mapping) : "function" == typeof t.mapping && this.setMap(t.mapping, t.length)
        }
        static getDefaults() {
            return Object.assign(Nt.getDefaults(), {
                length: 1024
            })
        }
        setMap(t, e = 1024) {
            const n = new Float32Array(e);
            for (let i = 0, r = e; i < r; i++) {
                const e = i / (r - 1) * 2 - 1;
                n[i] = t(e, i)
            }
            return this.curve = n, this
        }
        get curve() {
            return this._shaper.curve
        }
        set curve(t) {
            this._shaper.curve = t
        }
        get oversample() {
            return this._shaper.oversample
        }
        set oversample(t) {
            m(["none", "2x", "4x"].some(e => e.includes(t)), "oversampling must be either 'none', '2x', or '4x'"), this._shaper.oversample = t
        }
        dispose() {
            return super.dispose(), this._shaper.disconnect(), this
        }
    }
    class ae extends oe {
        constructor() {
            super(...arguments), this.name = "AudioToGain", this._norm = new se({
                context: this.context,
                mapping: t => (t + 1) / 2
            }), this.input = this._norm, this.output = this._norm
        }
        dispose() {
            return super.dispose(), this._norm.dispose(), this
        }
    }
    class ce extends Nt {
        constructor() {
            super(Object.assign(F(ce.getDefaults(), arguments, ["value"]))), this.name = "Multiply", this.override = !1;
            const t = F(ce.getDefaults(), arguments, ["value"]);
            this._mult = this.input = this.output = new Pt({
                context: this.context,
                minValue: t.minValue,
                maxValue: t.maxValue
            }), this.factor = this._param = this._mult.gain, this.factor.setValueAtTime(t.value, 0)
        }
        static getDefaults() {
            return Object.assign(Nt.getDefaults(), {
                value: 0
            })
        }
        dispose() {
            return super.dispose(), this._mult.dispose(), this
        }
    }
    class ue extends Kt {
        constructor() {
            super(F(ue.getDefaults(), arguments, ["frequency", "type", "modulationType"])), this.name = "AMOscillator", this._modulationScale = new ae({
                context: this.context
            }), this._modulationNode = new Pt({
                context: this.context
            });
            const t = F(ue.getDefaults(), arguments, ["frequency", "type", "modulationType"]);
            this._carrier = new re({
                context: this.context,
                detune: t.detune,
                frequency: t.frequency,
                onstop: () => this.onstop(this),
                phase: t.phase,
                type: t.type
            }), this.frequency = this._carrier.frequency, this.detune = this._carrier.detune, this._modulator = new re({
                context: this.context,
                phase: t.phase,
                type: t.modulationType
            }), this.harmonicity = new ce({
                context: this.context,
                units: "positive",
                value: t.harmonicity
            }), this.frequency.chain(this.harmonicity, this._modulator.frequency), this._modulator.chain(this._modulationScale, this._modulationNode.gain), this._carrier.chain(this._modulationNode, this.output), it(this, ["frequency", "detune", "harmonicity"])
        }
        static getDefaults() {
            return Object.assign(re.getDefaults(), {
                harmonicity: 1,
                modulationType: "square"
            })
        }
        _start(t) {
            this._modulator.start(t), this._carrier.start(t)
        }
        _stop(t) {
            this._modulator.stop(t), this._carrier.stop(t)
        }
        _restart(t) {
            this._modulator.restart(t), this._carrier.restart(t)
        }
        get type() {
            return this._carrier.type
        }
        set type(t) {
            this._carrier.type = t
        }
        get baseType() {
            return this._carrier.baseType
        }
        set baseType(t) {
            this._carrier.baseType = t
        }
        get partialCount() {
            return this._carrier.partialCount
        }
        set partialCount(t) {
            this._carrier.partialCount = t
        }
        get modulationType() {
            return this._modulator.type
        }
        set modulationType(t) {
            this._modulator.type = t
        }
        get phase() {
            return this._carrier.phase
        }
        set phase(t) {
            this._carrier.phase = t, this._modulator.phase = t
        }
        get partials() {
            return this._carrier.partials
        }
        set partials(t) {
            this._carrier.partials = t
        }
        asArray(t = 1024) {
            return A(this, void 0, void 0, (function* () {
                return ne(this, t)
            }))
        }
        dispose() {
            return super.dispose(), this.frequency.dispose(), this.detune.dispose(), this.harmonicity.dispose(), this._carrier.dispose(), this._modulator.dispose(), this._modulationNode.dispose(), this._modulationScale.dispose(), this
        }
    }
    class he extends Kt {
        constructor() {
            super(F(he.getDefaults(), arguments, ["frequency", "type", "modulationType"])), this.name = "FMOscillator", this._modulationNode = new Pt({
                context: this.context,
                gain: 0
            });
            const t = F(he.getDefaults(), arguments, ["frequency", "type", "modulationType"]);
            this._carrier = new re({
                context: this.context,
                detune: t.detune,
                frequency: 0,
                onstop: () => this.onstop(this),
                phase: t.phase,
                type: t.type
            }), this.detune = this._carrier.detune, this.frequency = new Nt({
                context: this.context,
                units: "frequency",
                value: t.frequency
            }), this._modulator = new re({
                context: this.context,
                phase: t.phase,
                type: t.modulationType
            }), this.harmonicity = new ce({
                context: this.context,
                units: "positive",
                value: t.harmonicity
            }), this.modulationIndex = new ce({
                context: this.context,
                units: "positive",
                value: t.modulationIndex
            }), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this._modulator.connect(this._modulationNode.gain), this._modulationNode.connect(this._carrier.frequency), this._carrier.connect(this.output), this.detune.connect(this._modulator.detune), it(this, ["modulationIndex", "frequency", "detune", "harmonicity"])
        }
        static getDefaults() {
            return Object.assign(re.getDefaults(), {
                harmonicity: 1,
                modulationIndex: 2,
                modulationType: "square"
            })
        }
        _start(t) {
            this._modulator.start(t), this._carrier.start(t)
        }
        _stop(t) {
            this._modulator.stop(t), this._carrier.stop(t)
        }
        _restart(t) {
            return this._modulator.restart(t), this._carrier.restart(t), this
        }
        get type() {
            return this._carrier.type
        }
        set type(t) {
            this._carrier.type = t
        }
        get baseType() {
            return this._carrier.baseType
        }
        set baseType(t) {
            this._carrier.baseType = t
        }
        get partialCount() {
            return this._carrier.partialCount
        }
        set partialCount(t) {
            this._carrier.partialCount = t
        }
        get modulationType() {
            return this._modulator.type
        }
        set modulationType(t) {
            this._modulator.type = t
        }
        get phase() {
            return this._carrier.phase
        }
        set phase(t) {
            this._carrier.phase = t, this._modulator.phase = t
        }
        get partials() {
            return this._carrier.partials
        }
        set partials(t) {
            this._carrier.partials = t
        }
        asArray(t = 1024) {
            return A(this, void 0, void 0, (function* () {
                return ne(this, t)
            }))
        }
        dispose() {
            return super.dispose(), this.frequency.dispose(), this.harmonicity.dispose(), this._carrier.dispose(), this._modulator.dispose(), this._modulationNode.dispose(), this.modulationIndex.dispose(), this
        }
    }
    class le extends Kt {
        constructor() {
            super(F(le.getDefaults(), arguments, ["frequency", "width"])), this.name = "PulseOscillator", this._widthGate = new Pt({
                context: this.context,
                gain: 0
            }), this._thresh = new se({
                context: this.context,
                mapping: t => t <= 0 ? -1 : 1
            });
            const t = F(le.getDefaults(), arguments, ["frequency", "width"]);
            this.width = new Nt({
                context: this.context,
                units: "audioRange",
                value: t.width
            }), this._triangle = new re({
                context: this.context,
                detune: t.detune,
                frequency: t.frequency,
                onstop: () => this.onstop(this),
                phase: t.phase,
                type: "triangle"
            }), this.frequency = this._triangle.frequency, this.detune = this._triangle.detune, this._triangle.chain(this._thresh, this.output), this.width.chain(this._widthGate, this._thresh), it(this, ["width", "frequency", "detune"])
        }
        static getDefaults() {
            return Object.assign(Kt.getDefaults(), {
                detune: 0,
                frequency: 440,
                phase: 0,
                type: "pulse",
                width: .2
            })
        }
        _start(t) {
            t = this.toSeconds(t), this._triangle.start(t), this._widthGate.gain.setValueAtTime(1, t)
        }
        _stop(t) {
            t = this.toSeconds(t), this._triangle.stop(t), this._widthGate.gain.cancelScheduledValues(t), this._widthGate.gain.setValueAtTime(0, t)
        }
        _restart(t) {
            this._triangle.restart(t), this._widthGate.gain.cancelScheduledValues(t), this._widthGate.gain.setValueAtTime(1, t)
        }
        get phase() {
            return this._triangle.phase
        }
        set phase(t) {
            this._triangle.phase = t
        }
        get type() {
            return "pulse"
        }
        get baseType() {
            return "pulse"
        }
        get partials() {
            return []
        }
        get partialCount() {
            return 0
        }
        set carrierType(t) {
            this._triangle.type = t
        }
        asArray(t = 1024) {
            return A(this, void 0, void 0, (function* () {
                return ne(this, t)
            }))
        }
        dispose() {
            return super.dispose(), this._triangle.dispose(), this.width.dispose(), this._widthGate.dispose(), this._thresh.dispose(), this
        }
    }
    class de extends Kt {
        constructor() {
            super(F(de.getDefaults(), arguments, ["frequency", "type", "spread"])), this.name = "FatOscillator", this._oscillators = [];
            const t = F(de.getDefaults(), arguments, ["frequency", "type", "spread"]);
            this.frequency = new Nt({
                context: this.context,
                units: "frequency",
                value: t.frequency
            }), this.detune = new Nt({
                context: this.context,
                units: "cents",
                value: t.detune
            }), this._spread = t.spread, this._type = t.type, this._phase = t.phase, this._partials = t.partials, this._partialCount = t.partialCount, this.count = t.count, it(this, ["frequency", "detune"])
        }
        static getDefaults() {
            return Object.assign(re.getDefaults(), {
                count: 3,
                spread: 20,
                type: "sawtooth"
            })
        }
        _start(t) {
            t = this.toSeconds(t), this._forEach(e => e.start(t))
        }
        _stop(t) {
            t = this.toSeconds(t), this._forEach(e => e.stop(t))
        }
        _restart(t) {
            this._forEach(e => e.restart(t))
        }
        _forEach(t) {
            for (let e = 0; e < this._oscillators.length; e++) t(this._oscillators[e], e)
        }
        get type() {
            return this._type
        }
        set type(t) {
            this._type = t, this._forEach(e => e.type = t)
        }
        get spread() {
            return this._spread
        }
        set spread(t) {
            if (this._spread = t, this._oscillators.length > 1) {
                const e = -t / 2,
                    n = t / (this._oscillators.length - 1);
                this._forEach((t, i) => t.detune.value = e + n * i)
            }
        }
        get count() {
            return this._oscillators.length
        }
        set count(t) {
            if (g(t, 1), this._oscillators.length !== t) {
                this._forEach(t => t.dispose()), this._oscillators = [];
                for (let e = 0; e < t; e++) {
                    const n = new re({
                        context: this.context,
                        volume: -6 - 1.1 * t,
                        type: this._type,
                        phase: this._phase + e / t * 360,
                        partialCount: this._partialCount,
                        onstop: 0 === e ? () => this.onstop(this) : ot
                    });
                    "custom" === this.type && (n.partials = this._partials), this.frequency.connect(n.frequency), this.detune.connect(n.detune), n.detune.overridden = !1, n.connect(this.output), this._oscillators[e] = n
                }
                this.spread = this._spread, "started" === this.state && this._forEach(t => t.start())
            }
        }
        get phase() {
            return this._phase
        }
        set phase(t) {
            this._phase = t, this._forEach(e => e.phase = t)
        }
        get baseType() {
            return this._oscillators[0].baseType
        }
        set baseType(t) {
            this._forEach(e => e.baseType = t), this._type = this._oscillators[0].type
        }
        get partials() {
            return this._oscillators[0].partials
        }
        set partials(t) {
            this._partials = t, this._partialCount = this._partials.length, t.length && (this._type = "custom", this._forEach(e => e.partials = t))
        }
        get partialCount() {
            return this._oscillators[0].partialCount
        }
        set partialCount(t) {
            this._partialCount = t, this._forEach(e => e.partialCount = t), this._type = this._oscillators[0].type
        }
        asArray(t = 1024) {
            return A(this, void 0, void 0, (function* () {
                return ne(this, t)
            }))
        }
        dispose() {
            return super.dispose(), this.frequency.dispose(), this.detune.dispose(), this._forEach(t => t.dispose()), this
        }
    }
    class pe extends Kt {
        constructor() {
            super(F(pe.getDefaults(), arguments, ["frequency", "modulationFrequency"])), this.name = "PWMOscillator", this.sourceType = "pwm", this._scale = new ce({
                context: this.context,
                value: 2
            });
            const t = F(pe.getDefaults(), arguments, ["frequency", "modulationFrequency"]);
            this._pulse = new le({
                context: this.context,
                frequency: t.modulationFrequency
            }), this._pulse.carrierType = "sine", this.modulationFrequency = this._pulse.frequency, this._modulator = new re({
                context: this.context,
                detune: t.detune,
                frequency: t.frequency,
                onstop: () => this.onstop(this),
                phase: t.phase
            }), this.frequency = this._modulator.frequency, this.detune = this._modulator.detune, this._modulator.chain(this._scale, this._pulse.width), this._pulse.connect(this.output), it(this, ["modulationFrequency", "frequency", "detune"])
        }
        static getDefaults() {
            return Object.assign(Kt.getDefaults(), {
                detune: 0,
                frequency: 440,
                modulationFrequency: .4,
                phase: 0,
                type: "pwm"
            })
        }
        _start(t) {
            t = this.toSeconds(t), this._modulator.start(t), this._pulse.start(t)
        }
        _stop(t) {
            t = this.toSeconds(t), this._modulator.stop(t), this._pulse.stop(t)
        }
        _restart(t) {
            this._modulator.restart(t), this._pulse.restart(t)
        }
        get type() {
            return "pwm"
        }
        get baseType() {
            return "pwm"
        }
        get partials() {
            return []
        }
        get partialCount() {
            return 0
        }
        get phase() {
            return this._modulator.phase
        }
        set phase(t) {
            this._modulator.phase = t
        }
        asArray(t = 1024) {
            return A(this, void 0, void 0, (function* () {
                return ne(this, t)
            }))
        }
        dispose() {
            return super.dispose(), this._pulse.dispose(), this._scale.dispose(), this._modulator.dispose(), this
        }
    }
    const fe = {
        am: ue,
        fat: de,
        fm: he,
        oscillator: re,
        pulse: le,
        pwm: pe
    };
    class me extends Kt {
        constructor() {
            super(F(me.getDefaults(), arguments, ["frequency", "type"])), this.name = "OmniOscillator";
            const t = F(me.getDefaults(), arguments, ["frequency", "type"]);
            this.frequency = new Nt({
                context: this.context,
                units: "frequency",
                value: t.frequency
            }), this.detune = new Nt({
                context: this.context,
                units: "cents",
                value: t.detune
            }), it(this, ["frequency", "detune"]), this.set(t)
        }
        static getDefaults() {
            return Object.assign(re.getDefaults(), he.getDefaults(), ue.getDefaults(), de.getDefaults(), le.getDefaults(), pe.getDefaults())
        }
        _start(t) {
            this._oscillator.start(t)
        }
        _stop(t) {
            this._oscillator.stop(t)
        }
        _restart(t) {
            return this._oscillator.restart(t), this
        }
        get type() {
            let t = "";
            return ["am", "fm", "fat"].some(t => this._sourceType === t) && (t = this._sourceType), t + this._oscillator.type
        }
        set type(t) {
            "fm" === t.substr(0, 2) ? (this._createNewOscillator("fm"), this._oscillator = this._oscillator, this._oscillator.type = t.substr(2)) : "am" === t.substr(0, 2) ? (this._createNewOscillator("am"), this._oscillator = this._oscillator, this._oscillator.type = t.substr(2)) : "fat" === t.substr(0, 3) ? (this._createNewOscillator("fat"), this._oscillator = this._oscillator, this._oscillator.type = t.substr(3)) : "pwm" === t ? (this._createNewOscillator("pwm"), this._oscillator = this._oscillator) : "pulse" === t ? this._createNewOscillator("pulse") : (this._createNewOscillator("oscillator"), this._oscillator = this._oscillator, this._oscillator.type = t)
        }
        get partials() {
            return this._oscillator.partials
        }
        set partials(t) {
            this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || (this._oscillator.partials = t)
        }
        get partialCount() {
            return this._oscillator.partialCount
        }
        set partialCount(t) {
            this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || (this._oscillator.partialCount = t)
        }
        set(t) {
            return Reflect.has(t, "type") && t.type && (this.type = t.type), super.set(t), this
        }
        _createNewOscillator(t) {
            if (t !== this._sourceType) {
                this._sourceType = t;
                const e = fe[t],
                    n = this.now();
                if (this._oscillator) {
                    const t = this._oscillator;
                    t.stop(n), this.context.setTimeout(() => t.dispose(), this.blockTime)
                }
                this._oscillator = new e({
                    context: this.context
                }), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.connect(this.output), this._oscillator.onstop = () => this.onstop(this), "started" === this.state && this._oscillator.start(n)
            }
        }
        get phase() {
            return this._oscillator.phase
        }
        set phase(t) {
            this._oscillator.phase = t
        }
        get sourceType() {
            return this._sourceType
        }
        set sourceType(t) {
            let e = "sine";
            "pwm" !== this._oscillator.type && "pulse" !== this._oscillator.type && (e = this._oscillator.type), "fm" === t ? this.type = "fm" + e : "am" === t ? this.type = "am" + e : "fat" === t ? this.type = "fat" + e : "oscillator" === t ? this.type = e : "pulse" === t ? this.type = "pulse" : "pwm" === t && (this.type = "pwm")
        }
        _getOscType(t, e) {
            return t instanceof fe[e]
        }
        get baseType() {
            return this._oscillator.baseType
        }
        set baseType(t) {
            this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || "pulse" === t || "pwm" === t || (this._oscillator.baseType = t)
        }
        get width() {
            return this._getOscType(this._oscillator, "pulse") ? this._oscillator.width : void 0
        }
        get count() {
            return this._getOscType(this._oscillator, "fat") ? this._oscillator.count : void 0
        }
        set count(t) {
            this._getOscType(this._oscillator, "fat") && x(t) && (this._oscillator.count = t)
        }
        get spread() {
            return this._getOscType(this._oscillator, "fat") ? this._oscillator.spread : void 0
        }
        set spread(t) {
            this._getOscType(this._oscillator, "fat") && x(t) && (this._oscillator.spread = t)
        }
        get modulationType() {
            return this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am") ? this._oscillator.modulationType : void 0
        }
        set modulationType(t) {
            (this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am")) && k(t) && (this._oscillator.modulationType = t)
        }
        get modulationIndex() {
            return this._getOscType(this._oscillator, "fm") ? this._oscillator.modulationIndex : void 0
        }
        get harmonicity() {
            return this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am") ? this._oscillator.harmonicity : void 0
        }
        get modulationFrequency() {
            return this._getOscType(this._oscillator, "pwm") ? this._oscillator.modulationFrequency : void 0
        }
        asArray(t = 1024) {
            return A(this, void 0, void 0, (function* () {
                return ne(this, t)
            }))
        }
        dispose() {
            return super.dispose(), this.detune.dispose(), this.frequency.dispose(), this._oscillator.dispose(), this
        }
    }

    function ge(t, e = 1 / 0) {
        const n = new WeakMap;
        return function (i, r) {
            Reflect.defineProperty(i, r, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return n.get(this)
                },
                set: function (i) {
                    g(i, t, e), n.set(this, i)
                }
            })
        }
    }

    function ve(t, e = 1 / 0) {
        const n = new WeakMap;
        return function (i, r) {
            Reflect.defineProperty(i, r, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return n.get(this)
                },
                set: function (i) {
                    g(this.toSeconds(i), t, e), n.set(this, i)
                }
            })
        }
    }
    class be extends Kt {
        constructor() {
            super(F(be.getDefaults(), arguments, ["url", "onload"])), this.name = "Player", this._activeSources = new Set;
            const t = F(be.getDefaults(), arguments, ["url", "onload"]);
            this._buffer = new st({
                onload: this._onload.bind(this, t.onload),
                onerror: t.onerror,
                reverse: t.reverse,
                url: t.url
            }), this.autostart = t.autostart, this._loop = t.loop, this._loopStart = t.loopStart, this._loopEnd = t.loopEnd, this._playbackRate = t.playbackRate, this.fadeIn = t.fadeIn, this.fadeOut = t.fadeOut
        }
        static getDefaults() {
            return Object.assign(Kt.getDefaults(), {
                autostart: !1,
                fadeIn: 0,
                fadeOut: 0,
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                onload: ot,
                onerror: ot,
                playbackRate: 1,
                reverse: !1
            })
        }
        load(t) {
            return A(this, void 0, void 0, (function* () {
                return yield this._buffer.load(t), this._onload(), this
            }))
        }
        _onload(t = ot) {
            t(), this.autostart && this.start()
        }
        _onSourceEnd(t) {
            this.onstop(this), this._activeSources.delete(t), 0 !== this._activeSources.size || this._synced || "started" !== this._state.getValueAtTime(this.now()) || this._state.setStateAtTime("stopped", this.now())
        }
        start(t, e, n) {
            return super.start(t, e, n), this
        }
        _start(t, e, n) {
            e = this._loop ? V(e, this._loopStart) : V(e, 0);
            let i = this.toSeconds(e);
            this._synced && (i *= this._playbackRate);
            const r = n;
            n = V(n, Math.max(this._buffer.duration - i, 0));
            let o = this.toSeconds(n);
            o /= this._playbackRate, t = this.toSeconds(t);
            const s = new te({
                url: this._buffer,
                context: this.context,
                fadeIn: this.fadeIn,
                fadeOut: this.fadeOut,
                loop: this._loop,
                loopEnd: this._loopEnd,
                loopStart: this._loopStart,
                onended: this._onSourceEnd.bind(this),
                playbackRate: this._playbackRate
            }).connect(this.output);
            this._loop || this._synced || (this._state.cancel(t + o), this._state.setStateAtTime("stopped", t + o, {
                implicitEnd: !0
            })), this._activeSources.add(s), this._loop && _(r) ? s.start(t, i) : s.start(t, i, o - this.toSeconds(this.fadeOut))
        }
        _stop(t) {
            const e = this.toSeconds(t);
            this._activeSources.forEach(t => t.stop(e))
        }
        restart(t, e, n) {
            return super.restart(t, e, n), this
        }
        _restart(t, e, n) {
            this._stop(t), this._start(t, e, n)
        }
        seek(t, e) {
            const n = this.toSeconds(e);
            if ("started" === this._state.getValueAtTime(n)) {
                const e = this.toSeconds(t);
                this._stop(n), this._start(n, e)
            }
            return this
        }
        setLoopPoints(t, e) {
            return this.loopStart = t, this.loopEnd = e, this
        }
        get loopStart() {
            return this._loopStart
        }
        set loopStart(t) {
            this._loopStart = t, this.buffer.loaded && g(this.toSeconds(t), 0, this.buffer.duration), this._activeSources.forEach(e => {
                e.loopStart = t
            })
        }
        get loopEnd() {
            return this._loopEnd
        }
        set loopEnd(t) {
            this._loopEnd = t, this.buffer.loaded && g(this.toSeconds(t), 0, this.buffer.duration), this._activeSources.forEach(e => {
                e.loopEnd = t
            })
        }
        get buffer() {
            return this._buffer
        }
        set buffer(t) {
            this._buffer.set(t)
        }
        get loop() {
            return this._loop
        }
        set loop(t) {
            if (this._loop !== t && (this._loop = t, this._activeSources.forEach(e => {
                e.loop = t
            }), t)) {
                const t = this._state.getNextState("stopped", this.now());
                t && this._state.cancel(t.time)
            }
        }
        get playbackRate() {
            return this._playbackRate
        }
        set playbackRate(t) {
            this._playbackRate = t;
            const e = this.now(),
                n = this._state.getNextState("stopped", e);
            n && n.implicitEnd && (this._state.cancel(n.time), this._activeSources.forEach(t => t.cancelStop())), this._activeSources.forEach(n => {
                n.playbackRate.setValueAtTime(t, e)
            })
        }
        get reverse() {
            return this._buffer.reverse
        }
        set reverse(t) {
            this._buffer.reverse = t
        }
        get loaded() {
            return this._buffer.loaded
        }
        dispose() {
            return super.dispose(), this._activeSources.forEach(t => t.dispose()), this._activeSources.clear(), this._buffer.dispose(), this
        }
    }
    I([ve(0)], be.prototype, "fadeIn", void 0), I([ve(0)], be.prototype, "fadeOut", void 0);
    class ye extends Mt {
        constructor() {
            super(F(ye.getDefaults(), arguments, ["attack", "decay", "sustain", "release"])), this.name = "Envelope", this._sig = new Nt({
                context: this.context,
                value: 0
            }), this.output = this._sig, this.input = void 0;
            const t = F(ye.getDefaults(), arguments, ["attack", "decay", "sustain", "release"]);
            this.attack = t.attack, this.decay = t.decay, this.sustain = t.sustain, this.release = t.release, this.attackCurve = t.attackCurve, this.releaseCurve = t.releaseCurve, this.decayCurve = t.decayCurve
        }
        static getDefaults() {
            return Object.assign(Mt.getDefaults(), {
                attack: .01,
                attackCurve: "linear",
                decay: .1,
                decayCurve: "exponential",
                release: 1,
                releaseCurve: "exponential",
                sustain: .5
            })
        }
        get value() {
            return this.getValueAtTime(this.now())
        }
        _getCurve(t, e) {
            if (k(t)) return t; {
                let n;
                for (n in _e)
                    if (_e[n][e] === t) return n;
                return t
            }
        }
        _setCurve(t, e, n) {
            if (k(n) && Reflect.has(_e, n)) {
                const i = _e[n];
                T(i) ? "_decayCurve" !== t && (this[t] = i[e]) : this[t] = i
            } else {
                if (!C(n) || "_decayCurve" === t) throw new Error("Envelope: invalid curve: " + n);
                this[t] = n
            }
        }
        get attackCurve() {
            return this._getCurve(this._attackCurve, "In")
        }
        set attackCurve(t) {
            this._setCurve("_attackCurve", "In", t)
        }
        get releaseCurve() {
            return this._getCurve(this._releaseCurve, "Out")
        }
        set releaseCurve(t) {
            this._setCurve("_releaseCurve", "Out", t)
        }
        get decayCurve() {
            return this._decayCurve
        }
        set decayCurve(t) {
            m(["linear", "exponential"].some(e => e === t), "Invalid envelope curve: " + t), this._decayCurve = t
        }
        triggerAttack(t, e = 1) {
            this.log("triggerAttack", t, e), t = this.toSeconds(t);
            let n = this.toSeconds(this.attack);
            const i = this.toSeconds(this.decay),
                r = this.getValueAtTime(t);
            if (r > 0) {
                n = (1 - r) / (1 / n)
            }
            if (n < this.sampleTime) this._sig.cancelScheduledValues(t), this._sig.setValueAtTime(e, t);
            else if ("linear" === this._attackCurve) this._sig.linearRampTo(e, n, t);
            else if ("exponential" === this._attackCurve) this._sig.targetRampTo(e, n, t);
            else {
                this._sig.cancelAndHoldAtTime(t);
                let i = this._attackCurve;
                for (let t = 1; t < i.length; t++)
                    if (i[t - 1] <= r && r <= i[t]) {
                        i = this._attackCurve.slice(t), i[0] = r;
                        break
                    } this._sig.setValueCurveAtTime(i, t, n, e)
            }
            if (i && this.sustain < 1) {
                const r = e * this.sustain,
                    o = t + n;
                this.log("decay", o), "linear" === this._decayCurve ? this._sig.linearRampToValueAtTime(r, i + o) : this._sig.exponentialApproachValueAtTime(r, o, i)
            }
            return this
        }
        triggerRelease(t) {
            this.log("triggerRelease", t), t = this.toSeconds(t);
            const e = this.getValueAtTime(t);
            if (e > 0) {
                const n = this.toSeconds(this.release);
                n < this.sampleTime ? this._sig.setValueAtTime(0, t) : "linear" === this._releaseCurve ? this._sig.linearRampTo(0, n, t) : "exponential" === this._releaseCurve ? this._sig.targetRampTo(0, n, t) : (m(C(this._releaseCurve), "releaseCurve must be either 'linear', 'exponential' or an array"), this._sig.cancelAndHoldAtTime(t), this._sig.setValueCurveAtTime(this._releaseCurve, t, n, e))
            }
            return this
        }
        getValueAtTime(t) {
            return this._sig.getValueAtTime(t)
        }
        triggerAttackRelease(t, e, n = 1) {
            return e = this.toSeconds(e), this.triggerAttack(e, n), this.triggerRelease(e + this.toSeconds(t)), this
        }
        cancel(t) {
            return this._sig.cancelScheduledValues(this.toSeconds(t)), this
        }
        connect(t, e = 0, n = 0) {
            return Lt(this, t, e, n), this
        }
        asArray(t = 1024) {
            return A(this, void 0, void 0, (function* () {
                const e = t / this.context.sampleRate,
                    n = new at(1, e, this.context.sampleRate),
                    i = this.toSeconds(this.attack) + this.toSeconds(this.decay),
                    r = i + this.toSeconds(this.release),
                    o = .1 * r,
                    s = r + o,
                    a = new this.constructor(Object.assign(this.get(), {
                        attack: e * this.toSeconds(this.attack) / s,
                        decay: e * this.toSeconds(this.decay) / s,
                        release: e * this.toSeconds(this.release) / s,
                        context: n
                    }));
                return a._sig.toDestination(), a.triggerAttackRelease(e * (i + o) / s, 0), (yield n.render()).getChannelData(0)
            }))
        }
        dispose() {
            return super.dispose(), this._sig.dispose(), this
        }
    }
    I([ve(0)], ye.prototype, "attack", void 0), I([ve(0)], ye.prototype, "decay", void 0), I([ge(0, 1)], ye.prototype, "sustain", void 0), I([ve(0)], ye.prototype, "release", void 0);
    const _e = (() => {
        let t, e;
        const n = [];
        for (t = 0; t < 128; t++) n[t] = Math.sin(t / 127 * (Math.PI / 2));
        const i = [];
        for (t = 0; t < 127; t++) {
            e = t / 127;
            const n = Math.sin(e * (2 * Math.PI) * 6.4 - Math.PI / 2) + 1;
            i[t] = n / 10 + .83 * e
        }
        i[127] = 1;
        const r = [];
        for (t = 0; t < 128; t++) r[t] = Math.ceil(t / 127 * 5) / 5;
        const o = [];
        for (t = 0; t < 128; t++) e = t / 127, o[t] = .5 * (1 - Math.cos(Math.PI * e));
        const s = [];
        for (t = 0; t < 128; t++) {
            e = t / 127;
            const n = 4 * Math.pow(e, 3) + .2,
                i = Math.cos(n * Math.PI * 2 * e);
            s[t] = Math.abs(i * (1 - e))
        }

        function a(t) {
            const e = new Array(t.length);
            for (let n = 0; n < t.length; n++) e[n] = 1 - t[n];
            return e
        }
        return {
            bounce: {
                In: a(s),
                Out: s
            },
            cosine: {
                In: n,
                Out: (c = n, c.slice(0).reverse())
            },
            exponential: "exponential",
            linear: "linear",
            ripple: {
                In: i,
                Out: a(i)
            },
            sine: {
                In: o,
                Out: a(o)
            },
            step: {
                In: r,
                Out: a(r)
            }
        };
        var c
    })();
    class we extends Mt {
        constructor() {
            super(F(we.getDefaults(), arguments)), this._scheduledEvents = [], this._synced = !1, this._original_triggerAttack = this.triggerAttack, this._original_triggerRelease = this.triggerRelease;
            const t = F(we.getDefaults(), arguments);
            this._volume = this.output = new Zt({
                context: this.context,
                volume: t.volume
            }), this.volume = this._volume.volume, it(this, "volume")
        }
        static getDefaults() {
            return Object.assign(Mt.getDefaults(), {
                volume: 0
            })
        }
        sync() {
            return this._synced || (this._synced = !0, this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 0)), this
        }
        _syncMethod(t, e) {
            const n = this["_original_" + t] = this[t];
            this[t] = (...t) => {
                const i = t[e],
                    r = this.context.transport.schedule(i => {
                        t[e] = i, n.apply(this, t)
                    }, i);
                this._scheduledEvents.push(r)
            }
        }
        unsync() {
            return this._scheduledEvents.forEach(t => this.context.transport.clear(t)), this._scheduledEvents = [], this._synced && (this._synced = !1, this.triggerAttack = this._original_triggerAttack, this.triggerRelease = this._original_triggerRelease), this
        }
        triggerAttackRelease(t, e, n, i) {
            const r = this.toSeconds(n),
                o = this.toSeconds(e);
            return this.triggerAttack(t, r, i), this.triggerRelease(r + o), this
        }
        dispose() {
            return super.dispose(), this._volume.dispose(), this.unsync(), this._scheduledEvents = [], this
        }
    }
    class xe extends we {
        constructor() {
            super(F(xe.getDefaults(), arguments));
            const t = F(xe.getDefaults(), arguments);
            this.portamento = t.portamento, this.onsilence = t.onsilence
        }
        static getDefaults() {
            return Object.assign(we.getDefaults(), {
                detune: 0,
                onsilence: ot,
                portamento: 0
            })
        }
        triggerAttack(t, e, n = 1) {
            this.log("triggerAttack", t, e, n);
            const i = this.toSeconds(e);
            return this._triggerEnvelopeAttack(i, n), this.setNote(t, i), this
        }
        triggerRelease(t) {
            this.log("triggerRelease", t);
            const e = this.toSeconds(t);
            return this._triggerEnvelopeRelease(e), this
        }
        setNote(t, e) {
            const n = this.toSeconds(e),
                i = t instanceof wt ? t.toFrequency() : t;
            if (this.portamento > 0 && this.getLevelAtTime(n) > .05) {
                const t = this.toSeconds(this.portamento);
                this.frequency.exponentialRampTo(i, t, n)
            } else this.frequency.setValueAtTime(i, n);
            return this
        }
    }
    I([ve(0)], xe.prototype, "portamento", void 0);
    class Te extends ye {
        constructor() {
            super(F(Te.getDefaults(), arguments, ["attack", "decay", "sustain", "release"])), this.name = "AmplitudeEnvelope", this._gainNode = new Pt({
                context: this.context,
                gain: 0
            }), this.output = this._gainNode, this.input = this._gainNode, this._sig.connect(this._gainNode.gain), this.output = this._gainNode, this.input = this._gainNode
        }
        dispose() {
            return super.dispose(), this._gainNode.dispose(), this
        }
    }
    class Se extends xe {
        constructor() {
            super(F(Se.getDefaults(), arguments)), this.name = "Synth";
            const t = F(Se.getDefaults(), arguments);
            this.oscillator = new me(Object.assign({
                context: this.context,
                detune: t.detune,
                onstop: () => this.onsilence(this)
            }, t.oscillator)), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.envelope = new Te(Object.assign({
                context: this.context
            }, t.envelope)), this.oscillator.chain(this.envelope, this.output), it(this, ["oscillator", "frequency", "detune", "envelope"])
        }
        static getDefaults() {
            return Object.assign(xe.getDefaults(), {
                envelope: Object.assign(q(ye.getDefaults(), Object.keys(Mt.getDefaults())), {
                    attack: .005,
                    decay: .1,
                    release: 1,
                    sustain: .3
                }),
                oscillator: Object.assign(q(me.getDefaults(), [...Object.keys(Kt.getDefaults()), "frequency", "detune"]), {
                    type: "triangle"
                })
            })
        }
        _triggerEnvelopeAttack(t, e) {
            if (this.envelope.triggerAttack(t, e), this.oscillator.start(t), 0 === this.envelope.sustain) {
                const e = this.toSeconds(this.envelope.attack),
                    n = this.toSeconds(this.envelope.decay);
                this.oscillator.stop(t + e + n)
            }
        }
        _triggerEnvelopeRelease(t) {
            this.envelope.triggerRelease(t), this.oscillator.stop(t + this.toSeconds(this.envelope.release))
        }
        getLevelAtTime(t) {
            return t = this.toSeconds(t), this.envelope.getValueAtTime(t)
        }
        dispose() {
            return super.dispose(), this.oscillator.dispose(), this.envelope.dispose(), this
        }
    }
    class Ce extends Se {
        constructor() {
            super(F(Ce.getDefaults(), arguments)), this.name = "MembraneSynth", this.portamento = 0;
            const t = F(Ce.getDefaults(), arguments);
            this.pitchDecay = t.pitchDecay, this.octaves = t.octaves, it(this, ["oscillator", "envelope"])
        }
        static getDefaults() {
            return U(xe.getDefaults(), Se.getDefaults(), {
                envelope: {
                    attack: .001,
                    attackCurve: "exponential",
                    decay: .4,
                    release: 1.4,
                    sustain: .01
                },
                octaves: 10,
                oscillator: {
                    type: "sine"
                },
                pitchDecay: .05
            })
        }
        setNote(t, e) {
            const n = this.toSeconds(e),
                i = this.toFrequency(t instanceof wt ? t.toFrequency() : t),
                r = i * this.octaves;
            return this.oscillator.frequency.setValueAtTime(r, n), this.oscillator.frequency.exponentialRampToValueAtTime(i, n + this.toSeconds(this.pitchDecay)), this
        }
        dispose() {
            return super.dispose(), this
        }
    }
    I([ge(0)], Ce.prototype, "octaves", void 0), I([ve(0)], Ce.prototype, "pitchDecay", void 0);
    const ke = new Set;

    function Ee(t) {
        ke.add(t)
    }

    function Oe(t, e) {
        const n = `registerProcessor("${t}", ${e})`;
        ke.add(n)
    }
    Ee('\n\t/**\n\t * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. \n\t */\n\tclass ToneAudioWorkletProcessor extends AudioWorkletProcessor {\n\n\t\tconstructor(options) {\n\t\t\t\n\t\t\tsuper(options);\n\t\t\t/**\n\t\t\t * If the processor was disposed or not. Keep alive until it\'s disposed.\n\t\t\t */\n\t\t\tthis.disposed = false;\n\t\t   \t/** \n\t\t\t * The number of samples in the processing block\n\t\t\t */\n\t\t\tthis.blockSize = 128;\n\t\t\t/**\n\t\t\t * the sample rate\n\t\t\t */\n\t\t\tthis.sampleRate = sampleRate;\n\n\t\t\tthis.port.onmessage = (event) => {\n\t\t\t\t// when it receives a dispose \n\t\t\t\tif (event.data === "dispose") {\n\t\t\t\t\tthis.disposed = true;\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t}\n');
    Ee("\n\t/**\n\t * Abstract class for a single input/output processor. \n\t * has a 'generate' function which processes one sample at a time\n\t */\n\tclass SingleIOProcessor extends ToneAudioWorkletProcessor {\n\n\t\tconstructor(options) {\n\t\t\tsuper(Object.assign(options, {\n\t\t\t\tnumberOfInputs: 1,\n\t\t\t\tnumberOfOutputs: 1\n\t\t\t}));\n\t\t\t/**\n\t\t\t * Holds the name of the parameter and a single value of that\n\t\t\t * parameter at the current sample\n\t\t\t * @type { [name: string]: number }\n\t\t\t */\n\t\t\tthis.params = {}\n\t\t}\n\n\t\t/**\n\t\t * Generate an output sample from the input sample and parameters\n\t\t * @abstract\n\t\t * @param input number\n\t\t * @param channel number\n\t\t * @param parameters { [name: string]: number }\n\t\t * @returns number\n\t\t */\n\t\tgenerate(){}\n\n\t\t/**\n\t\t * Update the private params object with the \n\t\t * values of the parameters at the given index\n\t\t * @param parameters { [name: string]: Float32Array },\n\t\t * @param index number\n\t\t */\n\t\tupdateParams(parameters, index) {\n\t\t\tfor (const paramName in parameters) {\n\t\t\t\tconst param = parameters[paramName];\n\t\t\t\tif (param.length > 1) {\n\t\t\t\t\tthis.params[paramName] = parameters[paramName][index];\n\t\t\t\t} else {\n\t\t\t\t\tthis.params[paramName] = parameters[paramName][0];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t/**\n\t\t * Process a single frame of the audio\n\t\t * @param inputs Float32Array[][]\n\t\t * @param outputs Float32Array[][]\n\t\t */\n\t\tprocess(inputs, outputs, parameters) {\n\t\t\tconst input = inputs[0];\n\t\t\tconst output = outputs[0];\n\t\t\t// get the parameter values\n\t\t\tconst channelCount = Math.max(input && input.length || 0, output.length);\n\t\t\tfor (let sample = 0; sample < this.blockSize; sample++) {\n\t\t\t\tthis.updateParams(parameters, sample);\n\t\t\t\tfor (let channel = 0; channel < channelCount; channel++) {\n\t\t\t\t\tconst inputSample = input && input.length ? input[channel][sample] : 0;\n\t\t\t\t\toutput[channel][sample] = this.generate(inputSample, channel, this.params);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn !this.disposed;\n\t\t}\n\t};\n");
    Ee("\n\t/**\n\t * A multichannel buffer for use within an AudioWorkletProcessor as a delay line\n\t */\n\tclass DelayLine {\n\t\t\n\t\tconstructor(size, channels) {\n\t\t\tthis.buffer = [];\n\t\t\tthis.writeHead = []\n\t\t\tthis.size = size;\n\n\t\t\t// create the empty channels\n\t\t\tfor (let i = 0; i < channels; i++) {\n\t\t\t\tthis.buffer[i] = new Float32Array(this.size);\n\t\t\t\tthis.writeHead[i] = 0;\n\t\t\t}\n\t\t}\n\n\t\t/**\n\t\t * Push a value onto the end\n\t\t * @param channel number\n\t\t * @param value number\n\t\t */\n\t\tpush(channel, value) {\n\t\t\tthis.writeHead[channel] += 1;\n\t\t\tif (this.writeHead[channel] > this.size) {\n\t\t\t\tthis.writeHead[channel] = 0;\n\t\t\t}\n\t\t\tthis.buffer[channel][this.writeHead[channel]] = value;\n\t\t}\n\n\t\t/**\n\t\t * Get the recorded value of the channel given the delay\n\t\t * @param channel number\n\t\t * @param delay number delay samples\n\t\t */\n\t\tget(channel, delay) {\n\t\t\tlet readHead = this.writeHead[channel] - Math.floor(delay);\n\t\t\tif (readHead < 0) {\n\t\t\t\treadHead += this.size;\n\t\t\t}\n\t\t\treturn this.buffer[channel][readHead];\n\t\t}\n\t}\n");
    Oe("feedback-comb-filter", '\n\tclass FeedbackCombFilterWorklet extends SingleIOProcessor {\n\n\t\tconstructor(options) {\n\t\t\tsuper(options);\n\t\t\tthis.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);\n\t\t}\n\n\t\tstatic get parameterDescriptors() {\n\t\t\treturn [{\n\t\t\t\tname: "delayTime",\n\t\t\t\tdefaultValue: 0.1,\n\t\t\t\tminValue: 0,\n\t\t\t\tmaxValue: 1\n\t\t\t}, {\n\t\t\t\tname: "feedback",\n\t\t\t\tdefaultValue: 0.5,\n\t\t\t\tminValue: 0,\n\t\t\t\tmaxValue: 0.9999,\n\t\t\t}];\n\t\t}\n\n\t\tgenerate(input, channel, parameters) {\n\t\t\tconst delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);\n\t\t\tthis.delayLine.push(channel, input + delayedSample * parameters.feedback);\n\t\t\treturn delayedSample;\n\t\t}\n\t}\n');
    class Me extends we {
        constructor() {
            super(F(Me.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls")), this.name = "Sampler", this._activeSources = new Map;
            const t = F(Me.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls"),
                e = {};
            Object.keys(t.urls).forEach(n => {
                const i = parseInt(n, 10);
                if (m(E(n) || x(i) && isFinite(i), "url key is neither a note or midi pitch: " + n), E(n)) {
                    const i = new wt(this.context, n).toMidi();
                    e[i] = t.urls[n]
                } else x(i) && isFinite(i) && (e[i] = t.urls[i])
            }), this._buffers = new $t({
                urls: e,
                onload: t.onload,
                baseUrl: t.baseUrl,
                onerror: t.onerror
            }), this.attack = t.attack, this.release = t.release, this.curve = t.curve, this._buffers.loaded && Promise.resolve().then(t.onload)
        }
        static getDefaults() {
            return Object.assign(we.getDefaults(), {
                attack: 0,
                baseUrl: "",
                curve: "exponential",
                onload: ot,
                onerror: ot,
                release: .1,
                urls: {}
            })
        }
        _findClosest(t) {
            let e = 0;
            for (; e < 96;) {
                if (this._buffers.has(t + e)) return -e;
                if (this._buffers.has(t - e)) return e;
                e++
            }
            throw new Error("No available buffers for note: " + t)
        }
        triggerAttack(t, e, n = 1) {
            return this.log("triggerAttack", t, e, n), Array.isArray(t) || (t = [t]), t.forEach(t => {
                const i = new wt(this.context, t).toMidi(),
                    r = this._findClosest(i),
                    o = i - r,
                    s = this._buffers.get(o),
                    a = ft(r),
                    c = new te({
                        url: s,
                        context: this.context,
                        curve: this.curve,
                        fadeIn: this.attack,
                        fadeOut: this.release,
                        playbackRate: a
                    }).connect(this.output);
                c.start(e, 0, s.duration / a, n), C(this._activeSources.get(i)) || this._activeSources.set(i, []), this._activeSources.get(i).push(c), c.onended = () => {
                    if (this._activeSources && this._activeSources.has(i)) {
                        const t = this._activeSources.get(i),
                            e = t.indexOf(c); - 1 !== e && t.splice(e, 1)
                    }
                }
            }), this
        }
        triggerRelease(t, e) {
            return this.log("triggerRelease", t, e), Array.isArray(t) || (t = [t]), t.forEach(t => {
                const n = new wt(this.context, t).toMidi();
                if (this._activeSources.has(n) && this._activeSources.get(n).length) {
                    const t = this._activeSources.get(n);
                    e = this.toSeconds(e), t.forEach(t => {
                        t.stop(e)
                    }), this._activeSources.set(n, [])
                }
            }), this
        }
        releaseAll(t) {
            const e = this.toSeconds(t);
            return this._activeSources.forEach(t => {
                for (; t.length;) {
                    t.shift().stop(e)
                }
            }), this
        }
        sync() {
            return this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1), this
        }
        triggerAttackRelease(t, e, n, i = 1) {
            const r = this.toSeconds(n);
            return this.triggerAttack(t, r, i), C(e) ? (m(C(t), "notes must be an array when duration is array"), t.forEach((t, n) => {
                const i = e[Math.min(n, e.length - 1)];
                this.triggerRelease(t, r + this.toSeconds(i))
            })) : this.triggerRelease(t, r + this.toSeconds(e)), this
        }
        add(t, e, n) {
            if (m(E(t) || isFinite(t), "note must be a pitch or midi: " + t), E(t)) {
                const i = new wt(this.context, t).toMidi();
                this._buffers.add(i, e, n)
            } else this._buffers.add(t, e, n);
            return this
        }
        get loaded() {
            return this._buffers.loaded
        }
        dispose() {
            return super.dispose(), this._buffers.dispose(), this._activeSources.forEach(t => {
                t.forEach(t => t.dispose())
            }), this._activeSources.clear(), this
        }
    }
    I([ve(0)], Me.prototype, "attack", void 0), I([ve(0)], Me.prototype, "release", void 0);
    class Ie extends kt {
        constructor() {
            super(F(Ie.getDefaults(), arguments, ["callback", "value"])), this.name = "ToneEvent", this._state = new Et("stopped"), this._startOffset = 0;
            const t = F(Ie.getDefaults(), arguments, ["callback", "value"]);
            this._loop = t.loop, this.callback = t.callback, this.value = t.value, this._loopStart = this.toTicks(t.loopStart), this._loopEnd = this.toTicks(t.loopEnd), this._playbackRate = t.playbackRate, this._probability = t.probability, this._humanize = t.humanize, this.mute = t.mute, this._playbackRate = t.playbackRate, this._state.increasing = !0, this._rescheduleEvents()
        }
        static getDefaults() {
            return Object.assign(kt.getDefaults(), {
                callback: ot,
                humanize: !1,
                loop: !1,
                loopEnd: "1m",
                loopStart: 0,
                mute: !1,
                playbackRate: 1,
                probability: 1,
                value: null
            })
        }
        _rescheduleEvents(t = -1) {
            this._state.forEachFrom(t, t => {
                let e;
                if ("started" === t.state) {
                    -1 !== t.id && this.context.transport.clear(t.id);
                    const n = t.time + Math.round(this.startOffset / this._playbackRate);
                    if (!0 === this._loop || x(this._loop) && this._loop > 1) {
                        e = 1 / 0, x(this._loop) && (e = this._loop * this._getLoopDuration());
                        const i = this._state.getAfter(n);
                        null !== i && (e = Math.min(e, i.time - n)), e !== 1 / 0 && (this._state.setStateAtTime("stopped", n + e + 1, {
                            id: -1
                        }), e = new zt(this.context, e));
                        const r = new zt(this.context, this._getLoopDuration());
                        t.id = this.context.transport.scheduleRepeat(this._tick.bind(this), r, new zt(this.context, n), e)
                    } else t.id = this.context.transport.schedule(this._tick.bind(this), new zt(this.context, n))
                }
            })
        }
        get state() {
            return this._state.getValueAtTime(this.context.transport.ticks)
        }
        get startOffset() {
            return this._startOffset
        }
        set startOffset(t) {
            this._startOffset = t
        }
        get probability() {
            return this._probability
        }
        set probability(t) {
            this._probability = t
        }
        get humanize() {
            return this._humanize
        }
        set humanize(t) {
            this._humanize = t
        }
        start(t) {
            const e = this.toTicks(t);
            return "stopped" === this._state.getValueAtTime(e) && (this._state.add({
                id: -1,
                state: "started",
                time: e
            }), this._rescheduleEvents(e)), this
        }
        stop(t) {
            this.cancel(t);
            const e = this.toTicks(t);
            if ("started" === this._state.getValueAtTime(e)) {
                this._state.setStateAtTime("stopped", e, {
                    id: -1
                });
                const t = this._state.getBefore(e);
                let n = e;
                null !== t && (n = t.time), this._rescheduleEvents(n)
            }
            return this
        }
        cancel(t) {
            t = V(t, -1 / 0);
            const e = this.toTicks(t);
            return this._state.forEachFrom(e, t => {
                this.context.transport.clear(t.id)
            }), this._state.cancel(e), this
        }
        _tick(t) {
            const e = this.context.transport.getTicksAtTime(t);
            if (!this.mute && "started" === this._state.getValueAtTime(e)) {
                if (this.probability < 1 && Math.random() > this.probability) return;
                if (this.humanize) {
                    let e = .02;
                    S(this.humanize) || (e = this.toSeconds(this.humanize)), t += (2 * Math.random() - 1) * e
                }
                this.callback(t, this.value)
            }
        }
        _getLoopDuration() {
            return Math.round((this._loopEnd - this._loopStart) / this._playbackRate)
        }
        get loop() {
            return this._loop
        }
        set loop(t) {
            this._loop = t, this._rescheduleEvents()
        }
        get playbackRate() {
            return this._playbackRate
        }
        set playbackRate(t) {
            this._playbackRate = t, this._rescheduleEvents()
        }
        get loopEnd() {
            return new zt(this.context, this._loopEnd).toSeconds()
        }
        set loopEnd(t) {
            this._loopEnd = this.toTicks(t), this._loop && this._rescheduleEvents()
        }
        get loopStart() {
            return new zt(this.context, this._loopStart).toSeconds()
        }
        set loopStart(t) {
            this._loopStart = this.toTicks(t), this._loop && this._rescheduleEvents()
        }
        get progress() {
            if (this._loop) {
                const t = this.context.transport.ticks,
                    e = this._state.get(t);
                if (null !== e && "started" === e.state) {
                    const n = this._getLoopDuration();
                    return (t - e.time) % n / n
                }
                return 0
            }
            return 0
        }
        dispose() {
            return super.dispose(), this.cancel(), this._state.dispose(), this
        }
    }
    class Ae extends Ie {
        constructor() {
            super(F(Ae.getDefaults(), arguments, ["callback", "events"])), this.name = "Part", this._state = new Et("stopped"), this._events = new Set;
            const t = F(Ae.getDefaults(), arguments, ["callback", "events"]);
            this._state.increasing = !0, t.events.forEach(t => {
                C(t) ? this.add(t[0], t[1]) : this.add(t)
            })
        }
        static getDefaults() {
            return Object.assign(Ie.getDefaults(), {
                events: []
            })
        }
        start(t, e) {
            const n = this.toTicks(t);
            if ("started" !== this._state.getValueAtTime(n)) {
                e = V(e, this._loop ? this._loopStart : 0), e = this._loop ? V(e, this._loopStart) : V(e, 0);
                const t = this.toTicks(e);
                this._state.add({
                    id: -1,
                    offset: t,
                    state: "started",
                    time: n
                }), this._forEach(e => {
                    this._startNote(e, n, t)
                })
            }
            return this
        }
        _startNote(t, e, n) {
            e -= n, this._loop ? t.startOffset >= this._loopStart && t.startOffset < this._loopEnd ? (t.startOffset < n && (e += this._getLoopDuration()), t.start(new zt(this.context, e))) : t.startOffset < this._loopStart && t.startOffset >= n && (t.loop = !1, t.start(new zt(this.context, e))) : t.startOffset >= n && t.start(new zt(this.context, e))
        }
        get startOffset() {
            return this._startOffset
        }
        set startOffset(t) {
            this._startOffset = t, this._forEach(t => {
                t.startOffset += this._startOffset
            })
        }
        stop(t) {
            const e = this.toTicks(t);
            return this._state.cancel(e), this._state.setStateAtTime("stopped", e), this._forEach(e => {
                e.stop(t)
            }), this
        }
        at(t, e) {
            const n = new Ct(this.context, t).toTicks(),
                i = new zt(this.context, 1).toSeconds(),
                r = this._events.values();
            let o = r.next();
            for (; !o.done;) {
                const t = o.value;
                if (Math.abs(n - t.startOffset) < i) return w(e) && (t.value = e), t;
                o = r.next()
            }
            return w(e) ? (this.add(t, e), this.at(t)) : null
        }
        add(t, e) {
            t instanceof Object && Reflect.has(t, "time") && (t = (e = t).time);
            const n = this.toTicks(t);
            let i;
            return e instanceof Ie ? (i = e, i.callback = this._tick.bind(this)) : i = new Ie({
                callback: this._tick.bind(this),
                context: this.context,
                value: e
            }), i.startOffset = n, i.set({
                humanize: this.humanize,
                loop: this.loop,
                loopEnd: this.loopEnd,
                loopStart: this.loopStart,
                playbackRate: this.playbackRate,
                probability: this.probability
            }), this._events.add(i), this._restartEvent(i), this
        }
        _restartEvent(t) {
            this._state.forEach(e => {
                "started" === e.state ? this._startNote(t, e.time, e.offset) : t.stop(new zt(this.context, e.time))
            })
        }
        remove(t, e) {
            return T(t) && t.hasOwnProperty("time") && (t = (e = t).time), t = this.toTicks(t), this._events.forEach(n => {
                n.startOffset === t && (_(e) || w(e) && n.value === e) && (this._events.delete(n), n.dispose())
            }), this
        }
        clear() {
            return this._forEach(t => t.dispose()), this._events.clear(), this
        }
        cancel(t) {
            return this._forEach(e => e.cancel(t)), this._state.cancel(this.toTicks(t)), this
        }
        _forEach(t) {
            return this._events && this._events.forEach(e => {
                e instanceof Ae ? e._forEach(t) : t(e)
            }), this
        }
        _setAll(t, e) {
            this._forEach(n => {
                n[t] = e
            })
        }
        _tick(t, e) {
            this.mute || this.callback(t, e)
        }
        _testLoopBoundries(t) {
            this._loop && (t.startOffset < this._loopStart || t.startOffset >= this._loopEnd) ? t.cancel(0) : "stopped" === t.state && this._restartEvent(t)
        }
        get probability() {
            return this._probability
        }
        set probability(t) {
            this._probability = t, this._setAll("probability", t)
        }
        get humanize() {
            return this._humanize
        }
        set humanize(t) {
            this._humanize = t, this._setAll("humanize", t)
        }
        get loop() {
            return this._loop
        }
        set loop(t) {
            this._loop = t, this._forEach(e => {
                e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.loop = t, this._testLoopBoundries(e)
            })
        }
        get loopEnd() {
            return new zt(this.context, this._loopEnd).toSeconds()
        }
        set loopEnd(t) {
            this._loopEnd = this.toTicks(t), this._loop && this._forEach(e => {
                e.loopEnd = t, this._testLoopBoundries(e)
            })
        }
        get loopStart() {
            return new zt(this.context, this._loopStart).toSeconds()
        }
        set loopStart(t) {
            this._loopStart = this.toTicks(t), this._loop && this._forEach(t => {
                t.loopStart = this.loopStart, this._testLoopBoundries(t)
            })
        }
        get playbackRate() {
            return this._playbackRate
        }
        set playbackRate(t) {
            this._playbackRate = t, this._setAll("playbackRate", t)
        }
        get length() {
            return this._events.size
        }
        dispose() {
            return super.dispose(), this.clear(), this
        }
    }
    class Re extends Mt {
        constructor() {
            super(Object.assign(F(Re.getDefaults(), arguments, ["pan"]))), this.name = "Panner", this._panner = this.context.createStereoPanner(), this.input = this._panner, this.output = this._panner;
            const t = F(Re.getDefaults(), arguments, ["pan"]);
            this.pan = new Ot({
                context: this.context,
                param: this._panner.pan,
                value: t.pan,
                minValue: -1,
                maxValue: 1
            }), this._panner.channelCount = t.channelCount, this._panner.channelCountMode = "explicit", it(this, "pan")
        }
        static getDefaults() {
            return Object.assign(Mt.getDefaults(), {
                pan: 0,
                channelCount: 1
            })
        }
        dispose() {
            return super.dispose(), this._panner.disconnect(), this.pan.dispose(), this
        }
    }
    Oe("bit-crusher", '\n\tclass BitCrusherWorklet extends SingleIOProcessor {\n\n\t\tstatic get parameterDescriptors() {\n\t\t\treturn [{\n\t\t\t\tname: "bits",\n\t\t\t\tdefaultValue: 12,\n\t\t\t\tminValue: 1,\n\t\t\t\tmaxValue: 32\n\t\t\t}];\n\t\t}\n\n\t\tgenerate(input, _channel, parameters) {\n\t\t\tconst step = Math.pow(0.5, parameters.bits - 1);\n\t\t\tconst val = step * Math.floor(input / step + 0.5);\n\t\t\treturn val;\n\t\t}\n\t}\n');
    class Pe extends Mt {
        constructor() {
            super(F(Pe.getDefaults(), arguments, ["channels"])), this.name = "Split";
            const t = F(Pe.getDefaults(), arguments, ["channels"]);
            this._splitter = this.input = this.output = this.context.createChannelSplitter(t.channels), this._internalChannels = [this._splitter]
        }
        static getDefaults() {
            return Object.assign(Mt.getDefaults(), {
                channels: 2
            })
        }
        dispose() {
            return super.dispose(), this._splitter.disconnect(), this
        }
    }
    class De extends Mt {
        constructor() {
            super(F(De.getDefaults(), arguments, ["type", "size"])), this.name = "Analyser", this._analysers = [], this._buffers = [];
            const t = F(De.getDefaults(), arguments, ["type", "size"]);
            this.input = this.output = this._gain = new Pt({
                context: this.context
            }), this._split = new Pe({
                context: this.context,
                channels: t.channels
            }), this.input.connect(this._split), g(t.channels, 1);
            for (let e = 0; e < t.channels; e++) this._analysers[e] = this.context.createAnalyser(), this._split.connect(this._analysers[e], e, 0);
            this.size = t.size, this.type = t.type
        }
        static getDefaults() {
            return Object.assign(Mt.getDefaults(), {
                size: 1024,
                smoothing: .8,
                type: "fft",
                channels: 1
            })
        }
        getValue() {
            return this._analysers.forEach((t, e) => {
                const n = this._buffers[e];
                "fft" === this._type ? t.getFloatFrequencyData(n) : "waveform" === this._type && t.getFloatTimeDomainData(n)
            }), 1 === this.channels ? this._buffers[0] : this._buffers
        }
        get size() {
            return this._analysers[0].frequencyBinCount
        }
        set size(t) {
            this._analysers.forEach((e, n) => {
                e.fftSize = 2 * t, this._buffers[n] = new Float32Array(t)
            })
        }
        get channels() {
            return this._analysers.length
        }
        get type() {
            return this._type
        }
        set type(t) {
            m("waveform" === t || "fft" === t, "Analyser: invalid type: " + t), this._type = t
        }
        get smoothing() {
            return this._analysers[0].smoothingTimeConstant
        }
        set smoothing(t) {
            this._analysers.forEach(e => e.smoothingTimeConstant = t)
        }
        dispose() {
            return super.dispose(), this._analysers.forEach(t => t.disconnect()), this._split.dispose(), this._gain.dispose(), this
        }
    }
    class je extends Mt {
        constructor() {
            super(F(je.getDefaults(), arguments)), this.name = "MeterBase", this.input = this.output = this._analyser = new De({
                context: this.context,
                size: 256,
                type: "waveform"
            })
        }
        dispose() {
            return super.dispose(), this._analyser.dispose(), this
        }
    }
    class Ne extends je {
        constructor() {
            super(F(Ne.getDefaults(), arguments, ["size"])), this.name = "Waveform";
            const t = F(Ne.getDefaults(), arguments, ["size"]);
            this._analyser.type = "waveform", this.size = t.size
        }
        static getDefaults() {
            return Object.assign(je.getDefaults(), {
                size: 1024
            })
        }
        getValue() {
            return this._analyser.getValue()
        }
        get size() {
            return this._analyser.size
        }
        set size(t) {
            this._analyser.size = t
        }
    }
    class Le extends Mt {
        constructor() {
            super(F(Le.getDefaults(), arguments, ["solo"])), this.name = "Solo";
            const t = F(Le.getDefaults(), arguments, ["solo"]);
            this.input = this.output = new Pt({
                context: this.context
            }), Le._allSolos.has(this.context) || Le._allSolos.set(this.context, new Set), Le._allSolos.get(this.context).add(this), this.solo = t.solo
        }
        static getDefaults() {
            return Object.assign(Mt.getDefaults(), {
                solo: !1
            })
        }
        get solo() {
            return this._isSoloed()
        }
        set solo(t) {
            t ? this._addSolo() : this._removeSolo(), Le._allSolos.get(this.context).forEach(t => t._updateSolo())
        }
        get muted() {
            return 0 === this.input.gain.value
        }
        _addSolo() {
            Le._soloed.has(this.context) || Le._soloed.set(this.context, new Set), Le._soloed.get(this.context).add(this)
        }
        _removeSolo() {
            Le._soloed.has(this.context) && Le._soloed.get(this.context).delete(this)
        }
        _isSoloed() {
            return Le._soloed.has(this.context) && Le._soloed.get(this.context).has(this)
        }
        _noSolos() {
            return !Le._soloed.has(this.context) || Le._soloed.has(this.context) && 0 === Le._soloed.get(this.context).size
        }
        _updateSolo() {
            this._isSoloed() || this._noSolos() ? this.input.gain.value = 1 : this.input.gain.value = 0
        }
        dispose() {
            return super.dispose(), Le._allSolos.get(this.context).delete(this), this._removeSolo(), this
        }
    }
    Le._allSolos = new Map, Le._soloed = new Map;
    class Be extends Mt {
        constructor() {
            super(F(Be.getDefaults(), arguments, ["pan", "volume"])), this.name = "PanVol";
            const t = F(Be.getDefaults(), arguments, ["pan", "volume"]);
            this._panner = this.input = new Re({
                context: this.context,
                pan: t.pan,
                channelCount: t.channelCount
            }), this.pan = this._panner.pan, this._volume = this.output = new Zt({
                context: this.context,
                volume: t.volume
            }), this.volume = this._volume.volume, this._panner.connect(this._volume), this.mute = t.mute, it(this, ["pan", "volume"])
        }
        static getDefaults() {
            return Object.assign(Mt.getDefaults(), {
                mute: !1,
                pan: 0,
                volume: 0,
                channelCount: 1
            })
        }
        get mute() {
            return this._volume.mute
        }
        set mute(t) {
            this._volume.mute = t
        }
        dispose() {
            return super.dispose(), this._panner.dispose(), this.pan.dispose(), this._volume.dispose(), this.volume.dispose(), this
        }
    }
    class Ue extends Mt {
        constructor() {
            super(F(Ue.getDefaults(), arguments, ["volume", "pan"])), this.name = "Channel";
            const t = F(Ue.getDefaults(), arguments, ["volume", "pan"]);
            this._solo = this.input = new Le({
                solo: t.solo,
                context: this.context
            }), this._panVol = this.output = new Be({
                context: this.context,
                pan: t.pan,
                volume: t.volume,
                mute: t.mute
            }), this.pan = this._panVol.pan, this.volume = this._panVol.volume, this._solo.connect(this._panVol), it(this, ["pan", "volume"])
        }
        static getDefaults() {
            return Object.assign(Mt.getDefaults(), {
                pan: 0,
                volume: 0,
                mute: !1,
                solo: !1
            })
        }
        get solo() {
            return this._solo.solo
        }
        set solo(t) {
            this._solo.solo = t
        }
        get muted() {
            return this._solo.muted || this.mute
        }
        get mute() {
            return this._panVol.mute
        }
        set mute(t) {
            this._panVol.mute = t
        }
        _getBus(t) {
            return Ue.buses.has(t) || Ue.buses.set(t, new Pt({
                context: this.context
            })), Ue.buses.get(t)
        }
        send(t, e = 0) {
            const n = this._getBus(t),
                i = new Pt({
                    context: this.context,
                    units: "decibels",
                    gain: e
                });
            return this.connect(i), i.connect(n), i
        }
        receive(t) {
            return this._getBus(t).connect(this), this
        }
        dispose() {
            return super.dispose(), this._panVol.dispose(), this.pan.dispose(), this.volume.dispose(), this._solo.dispose(), this
        }
    }
    Ue.buses = new Map;
    class Fe extends Mt {
        constructor() {
            super(...arguments), this.name = "Listener", this.positionX = new Ot({
                context: this.context,
                param: this.context.rawContext.listener.positionX
            }), this.positionY = new Ot({
                context: this.context,
                param: this.context.rawContext.listener.positionY
            }), this.positionZ = new Ot({
                context: this.context,
                param: this.context.rawContext.listener.positionZ
            }), this.forwardX = new Ot({
                context: this.context,
                param: this.context.rawContext.listener.forwardX
            }), this.forwardY = new Ot({
                context: this.context,
                param: this.context.rawContext.listener.forwardY
            }), this.forwardZ = new Ot({
                context: this.context,
                param: this.context.rawContext.listener.forwardZ
            }), this.upX = new Ot({
                context: this.context,
                param: this.context.rawContext.listener.upX
            }), this.upY = new Ot({
                context: this.context,
                param: this.context.rawContext.listener.upY
            }), this.upZ = new Ot({
                context: this.context,
                param: this.context.rawContext.listener.upZ
            })
        }
        static getDefaults() {
            return Object.assign(Mt.getDefaults(), {
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                forwardX: 0,
                forwardY: 0,
                forwardZ: -1,
                upX: 0,
                upY: 1,
                upZ: 0
            })
        }
        dispose() {
            return super.dispose(), this.positionX.dispose(), this.positionY.dispose(), this.positionZ.dispose(), this.forwardX.dispose(), this.forwardY.dispose(), this.forwardZ.dispose(), this.upX.dispose(), this.upY.dispose(), this.upZ.dispose(), this
        }
    }
    $(t => {
        t.listener = new Fe({
            context: t
        })
    }), K(t => {
        t.listener.dispose()
    });
    const Ve = ht().now.bind(ht()),
        qe = (ht().immediate.bind(ht()), ht().transport),
        ze = (ht().destination, ht().listener, ht().draw, ht());
    st.loaded.bind(st);

    function Ge(t, e, n) {
        var i = null;
        return t.forEachAtTime(e, t => {
            n === t.note && (i = t)
        }), i
    }
    class He extends i.EventEmitter {
        constructor() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            super(), this.timeline = new Gt, this.fixedPitch = t, r.on("history:pop:add", t => {
                t.track === this && this.remove(t.time, t.note, !1)
            }), r.on("history:pop:remove", t => {
                t.track === this && this.add(t.time, t.note, t.duration, !1)
            })
        }
        has(t, e) {
            return null !== this.getEvent(t, e)
        }
        getEvent(t, e) {
            return Ge(this.timeline, t, e)
        }
        getEventsAtTime(t) {
            var e = [];
            return this.timeline.forEachAtTime(t, t => e.push(t)), e
        }
        xToBarCoords(t, e) {
            return [Math.floor(t / (e.beats * e.subdivision)), Math.floor(t % (e.beats * e.subdivision) / e.subdivision), t % e.subdivision]
        }
        barToXCoords(t, e) {
            return t[0] * e.beats * e.subdivision + t[1] * e.subdivision + t[2]
        }
        morphSubdivisions(t, e, n) {
            var i = {
                _2_4: [0, 2],
                _4_2: [0, !1, 1, !1],
                _2_3: [0, 2],
                _3_2: [0, !1, 1]
            },
                r = "_" + n + "_" + e;
            if (void 0 !== i[r]) {
                if (!1 === i[r][t]) throw new Error("outofbounds");
                return i[r][t]
            }
            if (t >= e) throw new Error("outofbounds");
            return t
        }
        morphTiming(t, e, n) {
            var i = [...t];
            if (i[0] >= e.bars) throw new Error("outofbounds");
            if (i[1] >= e.beats) throw new Error("outofbounds");
            return i[2] = this.morphSubdivisions(i[2], e.subdivision, n.subdivision), this.barToXCoords(i, e)
        }
        morphPitch(t, e, n) {
            if (this.fixedPitch) return t;
            t += e.rootNote - n.rootNote, e.scale !== n.scale && (t = l(t, e.rootNote, e.scale));
            var i = e.rootNote + 12 * e.octaves;
            if (1 === e.octaves && (i += 1), t < e.rootNote) throw new Error("outofbounds");
            if (t >= i) throw new Error("outofbounds");
            return t
        }
        morph(t, e) {
            var n = new Gt;
            this.timeline.forEach(i => {
                var r = i.time,
                    o = i.note,
                    s = i.duration,
                    a = this.xToBarCoords(r, e);
                try {
                    r = this.morphTiming(a, t, e), o = this.morphPitch(o, t, e), null === Ge(n, r, o) && n.add({
                        time: r,
                        note: o,
                        duration: s
                    })
                } catch (t) { }
            }), this.timeline = n
        }
        replace(t) {
            this.timeline = t
        }
        add(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
            if (isNaN(e) || void 0 === e) throw new Error("note is note defined");
            if (!this.has(t, e)) {
                var o = {
                    time: t,
                    note: e,
                    duration: n
                };
                return this.timeline.add(o), i && r.emit("history:push", {
                    type: "add",
                    time: t,
                    note: e,
                    duration: n,
                    track: this
                }), this.emit("add", o), o
            }
            return !1
        }
        remove(t, e) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                i = this.getEvent(t, e);
            return !!i && (this.timeline.remove(i), n && r.emit("history:push", {
                type: "remove",
                time: t,
                note: e,
                track: this
            }), this.emit("remove", i), i)
        }
        forEach(t) {
            this.timeline.forEach(t)
        }
        forEachAtTime(t, e) {
            this.timeline.forEachAtTime(t, e)
        }
        clear() {
            this.timeline = new Gt
        }
        get highestNote() {
            if (this.timeline.length) {
                var t = 0;
                return this.forEach(e => {
                    t = Math.max(e.note, t)
                }), t
            }
            return -1
        }
        get lowestNote() {
            if (this.timeline.length) {
                var t = 100;
                return this.forEach(e => {
                    t = Math.min(e.note, t)
                }), t
            }
            return -1
        }
    }
    var We = n(52),
        Ye = n.n(We),
        Xe = ["C", "Ds", "Fs", "A"];
    var Ze, Je = (Ze = {}, ["piano", "marimba", "woodwind", "strings", "synth"].forEach(t => {
        Ze[t] = function (t) {
            for (var e = {}, n = "".concat("audio", "/").concat(t), i = function (t) {
                Xe.forEach(i => {
                    var r = "".concat(i).concat(t);
                    e[r.replace("s", "#")] = "".concat(n, "/").concat(r, ".mp3")
                })
            }, r = 2; r < 7; r++) i(r);
            return e
        }(t)
    }), Ze),
        $e = function (t) {
            var e = {};
            return t.forEach(t => {
                e[t] = ["".concat("audio", "/").concat(t, "/low.mp3"), "".concat("audio", "/").concat(t, "/high.mp3")]
            }), e
        }(["woodblock", "kit", "bongo", "electronic"]),
        Qe = {};
    ! function () {
        for (var [t, e] of Object.entries(Je))
            for (var [n, i] of (Qe[t] = {}, Object.entries(e))) Qe[t][n] = new st(i);
        for (var [r, o] of Object.entries($e))
            for (var [s, a] of (Qe[r] = {}, Object.entries(o))) Qe[r][s] = new st(a)
    }();
    var Ke = {
        piano: 1,
        marimba: 13,
        synth: 82
    };

    function tn(t, e, n) {
        var i = function (t, e) {
            var n = [],
                i = 38,
                r = 35;
            switch (e.percussion) {
                case "electronic":
                    i = 39, r = 35;
                    break;
                case "woodblock":
                    i = 76, r = 77;
                    break;
                case "kit":
                    i = 38, r = 36;
                    break;
                case "bongo":
                    i = 60, r = 61
            }
            t.forEach(t => {
                var e = 1 === t.note ? i : r;
                n.push(an(e, t.time, 9)), n.push(cn(e, t.time + t.duration, 9))
            }), n.length && n.push(sn(e.totalSubBeats));
            return rn(n, e)
        }(e, t),
            r = {
                header: en(t),
                tracks: [nn(t), on(n, t)]
            };
        return i.length > 0 && (r.header.numTracks++, r.tracks.push(i)),
            function (t) {
                var e = new Uint8Array(t);
                return new Blob([e], {
                    type: "audio/midi"
                })
            }(Ye.a.writeMidi(r))
    }

    function en(t) {
        return {
            format: 1,
            numTracks: 3,
            ticksPerBeat: 960
        }
    }

    function nn(t) {
        var e = [];
        return e.push({
            absoluteTime: 0,
            meta: !0,
            type: "setTempo",
            microsecondsPerBeat: 60 / t.tempo * 1e6
        }), e.push(sn()), rn(e, t)
    }

    function rn(t, e) {
        t.sort((t, e) => t.absoluteTime - e.absoluteTime);
        var n = 0;
        return t.forEach(t => {
            var i = t.absoluteTime * (960 / e.subdivision);
            t.deltaTime = Math.round(i - n), n = i
        }), t
    }

    function on(t, e) {
        var n, i = [],
            r = (n = e.instrument, Ke[n] || Ke.piano);
        return i.push({
            absoluteTime: 0,
            channel: 1,
            type: "programChange",
            programNumber: r
        }), t.forEach(t => {
            i.push(an(t.note, t.time, 1)), i.push(cn(t.note, t.time + t.duration, 1))
        }), i.length && i.push(sn(e.totalSubBeats)), rn(i, e)
    }

    function sn() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
            absoluteTime: t,
            meta: !0,
            type: "endOfTrack"
        }
    }

    function an(t, e, n) {
        return {
            absoluteTime: e,
            channel: n,
            noteNumber: t,
            velocity: 127,
            type: "noteOn"
        }
    }

    function cn(t, e, n) {
        return {
            absoluteTime: e,
            channel: n,
            noteNumber: t,
            velocity: 0,
            type: "noteOff"
        }
    }

    function un(t) {
        ! function (t) {
            var e = 0;
            t.forEach(t => {
                e += t.deltaTime, t.absoluteTime = e
            })
        }(t);
        var e = [],
            n = [];
        return t.forEach(t => {
            if ("noteOn" === t.type) n.push(t);
            else if ("noteOff" === t.type)
                for (var i = 0; i < n.length; i++) {
                    var r = n[i];
                    if (r.noteNumber === t.noteNumber && t.absoluteTime > r.absoluteTime) {
                        e.push({
                            note: r.noteNumber,
                            duration: t.absoluteTime - r.absoluteTime,
                            time: r.absoluteTime
                        }), n.splice(i, 1);
                        break
                    }
                }
        }), e
    }

    function hn(t, e) {
        return t / 960 * e.subdivision
    }
    var ln = n(55),
        dn = n.n(ln);
    n(526);
    class pn extends i.EventEmitter {
        constructor() {
            super(dn.a), this.playedThru = !1, this.emittersToWaitFor = ["grid", "sampler"], this.element = document.createElement("div"), this.element.classList.add("modal"), this.element.innerHTML = dn.a, this.animationDuration = 2500, document.body.appendChild(this.element), this.element.classList.add("open-loading"), this.element.classList.add("visible"), this.playTimeout = setTimeout(() => {
                this.checkStatus()
            }, this.animationDuration), document.body.classList.contains("embed-only") && (document.querySelector("#loading-modal img").style.display = "none", document.querySelector("#loading-modal .circle").style.marginTop = "0", this.checkStatus())
        }
        checkStatus() {
            var t = this.emitterSourceCheck();
            this.playedThru = !0, t ? this.fadeOutAndClose() : setTimeout(this.checkStatus.bind(this), 250)
        }
        emitterSourceCheck(t) {
            return this.emittersToWaitFor = this.emittersToWaitFor.filter(e => e !== t), this.emittersToWaitFor.length < 1
        }
        fadeOutAndClose() {
            this.element.classList.add("fadeout"), setTimeout(() => {
                this.element.classList.remove("visible"), this.element.remove()
            }, 300)
        }
        close(t) {
            var e = this.emitterSourceCheck(t);
            this.playedThru && e && this.fadeOutAndClose()
        }
    }
    class fn {
        constructor(t, e, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            this.options = t, this.isPercussion = e, this.samplerArray = {}, this.defaultVolume = i ? -11 : -6, this.onload = n, this.ignoreEvents = i, this.currentInstrument = null, this.options.on("change-instrument", () => {
                this.setInstrument()
            }), this.setInstrument()
        }
        reset() { }
        setInstrument() {
            var t = this.options[this.isPercussion ? "percussion" : "instrument"];
            this.currentInstrument !== t && (this.samplerArray[t] || (this.samplerArray[t] = new Me), this.currentInstrument = t, this.sampler = this.samplerArray[t].toDestination(), Object.entries(Qe[t]).forEach(t => {
                var e = t[0],
                    n = t[1];
                this.sampler.add(e, n)
            }), this.sampler.volume.value = this.defaultVolume, this.isPercussion ? this.sampler.fadeOut = .015 : this.sampler.release = .4, setTimeout(() => {
                this.onload && this.onload(), this.options.emit("load-success")
            }, 100))
        }
        keyDown(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ve(),
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            if (this.sampler)
                if (this.isPercussion) {
                    this.sampler.volume.value = "soften" === n ? -24 : this.defaultVolume;
                    try {
                        var i = St(t, "midi").toNote();
                        this.sampler.triggerAttack(i, e)
                    } catch (t) {
                        console.log(t)
                    }
                } else {
                    var r = St(t, "midi").toNote();
                    n = .8 * n + .2 * Math.random(), this.sampler.triggerAttack(r, e, n)
                }
        }
        keyUp(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ve();
            if (this.sampler && this.sampler && !this.isPercussion) {
                var n = St(t, "midi").toNote();
                this.sampler.triggerRelease(n, e)
            }
        }
        set mute(t) {
            this.sampler.volume.value = t ? -100 : this.defaultVolume
        }
        get mute() {
            return this.sampler.volume.value < this.defaultVolume
        }
    }
    var mn = n(17),
        gn = n.n(mn);
    class vn {
        constructor(t, e, n, i) {
            var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.options = t, this.part = new Ae(this.onnote.bind(this)).start(0), this.hotMic = !1, this.track = e, r || (this.track.on("add", t => this.addNote(t)), this.track.on("remove", t => this.removeNote(t)), this.track.on("touch", t => {
                isNaN(t.pitch) || this.hotMic || (e.getEvent(t.time, t.pitch) ? this.playNote(t.pitch) : this.playNote(t.pitch, .15, void 0, n ? "soften" : .1))
            })), this.instrument = new fn(t, n, i, r)
        }
        addNote(t) {
            this.part.add(t.time * _t("4n") / this.options.subdivision, t), t.envelope = 0
        }
        removeNote(t) {
            this.part.remove(t.time * _t("4n") / this.options.subdivision, t)
        }
        onnote(t, e) {
            var n = this.track.getEventsAtTime(e.time),
                i = e.time % this.options.subBeatsPerBar == 0 ? 1 : .8;
            i = e.time % this.options.subdivision == 0 ? i : .8 * i, n.length > 9 ? i *= .55 : n.length > 4 && (i *= .75);
            var r = _t("4n") / this.options.subdivision;
            this.playNote(e.note, r, t, i);
            var o = new gn.a.Tween(e).to({
                envelope: 0
            }, 1e3 * r).easing(gn.a.Easing.Quadratic.Out).start();
            new gn.a.Tween(e).to({
                envelope: 1
            }, 20).delay(1e3 * ze.lookAhead).start().chain(o)
        }
        set mute(t) {
            this.instrument.mute = t
        }
        get mute() {
            return this.instrument.mute
        }
        clear() {
            this.part.clear()
        }
        syncWithMidiTrack() {
            this.clear(), this.track.forEach(t => this.addNote(t))
        }
        playNote(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _t("4n") / this.options.subdivision,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ve(),
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            this.instrument.keyDown(t, n, i), this.instrument.keyUp(t, n + e)
        }
        setHotMic(t) {
            this.hotMic = t
        }
    }
    var bn = n(680),
        yn = n.n(bn);
    n(715);

    function _n(t, e, n, i, r, o, s) {
        try {
            var a = t[o](s),
                c = a.value
        } catch (t) {
            return void n(t)
        }
        a.done ? e(c) : Promise.resolve(c).then(i, r)
    }
    class wn extends i.EventEmitter {
        constructor(t, e) {
            super(), this.midiData = e, this.options = t, this.instrumentTrack = new vn(t, e.instrument, !1), this.percussionTrack = new vn(t, e.percussion, !0), qe.loop = !0, ze.lookAhead = .1, ze.updateInterval = .01, this.options.on("change", () => {
                qe.bpm.value = this.options.tempo, qe.loopEnd = _t("4n") * this.options.totalBeats
            }), qe.loopEnd = _t("4n") * this.options.totalBeats, this.bumpSound = new be("audio/sfx/bump.mp3").toDestination(), this.bumpSound.autostart = !1, this.bumpPlaying = !1, this.deleteSound = new be("audio/sfx/delete.mp3").toDestination(), this.deleteSound.autostart = !1
        }
        downloadMidi() {
            var t = this.midiData.encode(this.options),
                e = window.URL.createObjectURL(t),
                n = document.createElement("a");
            document.body.appendChild(n), n.style = "display: none", n.href = e, n.download = "song-maker.mid", n.click(), window.URL.revokeObjectURL(e)
        }
        set tempo(t) {
            this.options.tempo = t, qe.bpm.value = t
        }
        get tempo() {
            return this.options.tempo
        }
        set mute(t) {
            this.instrumentTrack.mute = t
        }
        get mute() {
            return this.instrumentTrack.mute
        }
        get position() {
            return "started" === qe.state ? _t(qe.ticks, "i") / qe.loopEnd : -1
        }
        start() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "+0.1",
                e = arguments.length > 1 ? arguments[1] : void 0;
            qe.start(t, e)
        }
        stop() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ve();
            qe.stop(t)
        }
        clear() {
            this.instrumentTrack.clear(), this.percussionTrack.clear()
        }
        playNote() {
            this.instrumentTrack.playNote(...arguments)
        }
        resumeContext() {
            "running" !== ze.state && "closed" !== ze.state && ze.resume()
        }
        syncWithMidiTrack() {
            this.instrumentTrack.syncWithMidiTrack(), this.percussionTrack.syncWithMidiTrack()
        }
        introBeep() {
            var t = _t("4n"),
                e = Ve() + .1,
                n = (new Pt).toMaster(),
                i = (new re).connect(n);
            i.start(e).stop(e + 2 * t), i.frequency.setValueAtTime("C5", e), i.frequency.setValueAtTime("C6", e + t);
            return n.gain.setValueAtTime(0, e), n.gain.linearRampToValueAtTime(.5, e + .01), n.gain.linearRampToValueAtTime(0, e + .1), n.gain.setValueAtTime(0, e + t), n.gain.linearRampToValueAtTime(.5, e + t + .01), n.gain.linearRampToValueAtTime(0, e + t + .1), e + 2 * t
        }
        bump() {
            this.bumpSound.start()
        }
        playDelete() {
            this.deleteSound.start()
        }
        generateWave(t) {
            var e = this,
                n = 60 * this.options.totalBeats / this.options.tempo,
                i = this.options.tempo;
            this.emit("export-start"),
                function (t, e, n = 2, i = ht().sampleRate) {
                    return A(this, void 0, void 0, (function* () {
                        const r = ht(),
                            o = new at(n, e, i);
                        lt(o), yield t(o);
                        const s = o.render();
                        lt(r);
                        const a = yield s;
                        return new st(a)
                    }))
                }(function () {
                    var t, n = (t = function* (t) {
                        var {
                            transport: n
                        } = t;
                        n.bpm.value = i;
                        var r = new vn(e.options, e.midiData.instrument, !1, () => { }, !0, !0),
                            o = new vn(e.options, e.midiData.percussion, !0, () => { }, !0, !0);
                        r.syncWithMidiTrack(), o.syncWithMidiTrack(), n.start()
                    }, function () {
                        var e = this,
                            n = arguments;
                        return new Promise((function (i, r) {
                            var o = t.apply(e, n);

                            function s(t) {
                                _n(o, i, r, s, a, "next", t)
                            }

                            function a(t) {
                                _n(o, i, r, s, a, "throw", t)
                            }
                            s(void 0)
                        }))
                    });
                    return function (t) {
                        return n.apply(this, arguments)
                    }
                }(), n).then(e => {
                    ! function (t, e) {
                        var n = document.createElement("a");
                        document.body.appendChild(n), n.style = "display: none";
                        var i = yn.a(t._buffer),
                            r = new window.Blob([new DataView(i)], {
                                type: "audio/wav"
                            }),
                            o = window.URL.createObjectURL(r);
                        n.href = o, n.download = e + ".wav", n.click(), window.URL.revokeObjectURL(o)
                    }(e, t), this.emit("export-complete"), this.percussionTrack.instrument.reset(), this.instrumentTrack.instrument.reset()
                })
        }
    }
    n(529);
    class xn {
        constructor(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .03,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => { };
            this.coef = e, this.onUpdate = n, this._goal = t, this._val = t
        }
        get value() {
            return this._val
        }
        set value(t) {
            this._val = t
        }
        get goal() {
            return this._goal
        }
        set goal(t) {
            this._goal = t
        }
        get diff() {
            return this._goal - this._val
        }
        skip() {
            this._val = this._goal
        }
        step() {
            this._val = this._val + this.diff * this.coef
        }
    }
    class Tn {
        constructor() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            this.reset(t, e)
        }
        set(t, e, n) {
            if (!(t < 0 || this.cols <= t || e < 0 || this.rows <= e)) {
                var i = this.getIndexFromCoords(t, e);
                this.data[i] = void 0 === n ? 0 : n + 1
            }
        }
        get(t, e) {
            var n = this.getIndexFromCoords(t, e);
            return this.data[n] ? this.data[n] - 1 : void 0
        }
        flipY(t) {
            return this.rows - t - 1
        }
        getIndexFromCoords(t, e) {
            return (e = this.flipY(e)) * this.cols + t
        }
        reset(t, e) {
            this.cols = t, this.rows = e, this.data = new Uint8Array(t * e)
        }
    }
    class Sn extends i.EventEmitter {
        constructor() {
            var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body,
                n = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 ? arguments[2] : void 0,
                r = arguments.length > 3 ? arguments[3] : void 0;
            super(), t = this, this.container = e, this.midiTrack = n, this.notes = new Tn, this.beatsState = this.setupBeatsState(this.notes), this.renderer = new (this.rendererClass())(this.container, r, i), this.selection = {
                x: -1,
                y: -1
            }, this.prevPosition = -1, this.playHeadDuration = 100, this.scroll = {
                x: 0,
                y: 0
            }, this.scrollLength = {
                x: 0,
                y: 0
            }, this.midiTrack.on("add", (function () {
                return t.onMidiTrackAdd(...arguments)
            })), this.midiTrack.on("remove", (function () {
                return t.onMidiTrackRemove(...arguments)
            }))
        }
        get cols() {
            return this.notes.cols
        }
        get rows() {
            return this.notes.rows
        }
        get canvas() {
            return this.renderer.canvas
        }
        get tileHeight() {
            return this.renderer.tileHeight
        }
        get tileWidth() {
            return this.renderer.tileWidth
        }
        get width() {
            return this.renderer.width
        }
        get height() {
            return this.renderer.height
        }
        setupBeatsState(t) {
            for (var e = [], n = 0; n < t.cols; n++) e[n] = {
                on: 0
            };
            return e
        }
        indexToPitch(t) {
            return function (t, e, n) {
                var i = u(n),
                    r = Math.floor(t / i.length);
                return i[t % i.length] + 12 * r + e
            }(t, this.rootNote, this.scale)
        }
        pitchToIndex(t) {
            return h(t, this.rootNote, this.scale)
        }
        has(t) {
            var e = this.indexToPitch(t.y);
            return this.midiTrack.has(t.x, e)
        }

        addNotes(){
            var points = 
            [
                {x:0,y:6},{x:0,y:7},{x:4,y:7},{x:4,y:7},{x:5,y:7},{x:5,y:6},{x:6,y:4},{x:7,y:6},{x:11,y:6},{x:12,y:7},{x:12,y:7},{x:13,y:7},{x:13,y:6},{x:14,y:7},{x:19,y:7},{x:19,y:6},{x:20,y:7},{x:20,y:7},{x:21,y:7},{x:21,y:6},{x:22,y:4},{x:23,y:4},{x:23,y:6},{x:24,y:7},{x:27,y:6},{x:28,y:7},{x:28,y:7},{x:29,y:7},{x:29,y:6},{x:30,y:7},{x:32,y:6},{x:32,y:7},{x:39,y:6},{x:40,y:7},{x:51,y:7},{x:51,y:6},{x:52,y:7},{x:52,y:7},{x:53,y:7},{x:53,y:6},{x:54,y:4},{x:55,y:4},{x:55,y:6},{x:56,y:7},{x:59,y:6},{x:60,y:7},{x:60,y:7},{x:61,y:7},{x:61,y:6},{x:62,y:7},{x:64,y:6},{x:64,y:7},{x:68,y:7},{x:68,y:7},{x:69,y:7},{x:69,y:6},{x:70,y:4},{x:71,y:6},{x:75,y:6},{x:76,y:7},{x:76,y:7},{x:77,y:7},{x:77,y:6},{x:78,y:7},{x:83,y:7},{x:83,y:6},{x:84,y:7},{x:84,y:7},{x:85,y:7},{x:85,y:6},{x:86,y:4},{x:87,y:4},{x:87,y:6},{x:88,y:7},{x:91,y:6},{x:92,y:7},{x:92,y:7},{x:93,y:7},{x:93,y:6},{x:94,y:7},{x:96,y:6},{x:96,y:7},{x:103,y:6},{x:104,y:7},{x:115,y:7},{x:115,y:6},{x:116,y:7},{x:116,y:7},{x:117,y:7},{x:117,y:6},{x:118,y:4},{x:119,y:4},{x:119,y:6},{x:120,y:7},{x:123,y:6},{x:124,y:7},{x:124,y:7},{x:125,y:7},{x:125,y:6},{x:126,y:7},
                ]
            var i;
            for(i=0;i<points.length;i++){
                t=points[i]
                var e = this.indexToPitch(t.y),
                n = this.midiTrack.add(t.x, e);
                this.emit("add", e), !!n
            }

        }

        addNote(t) {
            // try {
            //     var e = this.indexToPitch(t.y),
            //         n = this.midiTrack.add(t.x, e);
            //     return this.emit("add", e), !!n
            // } catch (e) {
            //     return console.log("Cannot add note", t), !1
            // }
             this.addNotes();
            
        }
        removeNote(t) {
            var e = this.indexToPitch(t.y),
                n = this.midiTrack.remove(t.x, e);
            return this.emit("remove", e), !!n
        }
        getPlayHeadDuration(t) {
            return Math.max(100, 6e4 / (this.subdivision * t))
        }
        updateTempo(t) {
            this.playHeadDuration = this.getPlayHeadDuration(t)
        }
        reset(t) {
            this.rootNote = t.rootNote, this.scale = t.scale, this.notes.reset(t.cols, t.rows), this.syncWithMidiTrack(), this.beatsState = this.setupBeatsState(this.notes), this.subdivision = t.subdivision, this.playHeadDuration = this.getPlayHeadDuration(t.tempo), this.renderer.updateSettings({
                groupCols: t.groupCols,
                groupRows: t.groupRows,
                cOffset: t.rootNote % 12,
                subdivision: t.subdivision
            }), this.updateScrollLength(), this.emit("reset")
        }
        resize(t) {
            this.renderer.updateSettings({
                tileWidth: t.tileWidth,
                tileHeight: t.tileHeight
            }), this.renderer.resize(t.canvasWidth, t.canvasHeight), this.updateScrollLength(), this.emit("resize")
        }
        syncWithMidiTrack() {
            this.midiTrack.forEach(t => {
                try {
                    var e = h(t.note, this.rootNote, this.scale);
                    this.notes.set(t.time, e, t.note)
                } catch (e) {
                    console.log("Warning: Pitch out of scale", t)
                }
            })
        }
        select(t) {
            this.midiTrack.emit("touch", {
                time: t.x,
                pitch: this.indexToPitch(t.y)
            }), this.selection = t
        }
        animateNotes(t) {
            t < 0 || void 0 !== this.beatsState[t] && (this.beatsState[t].on = 1, new gn.a.Tween(this.beatsState[t]).to({
                on: 0
            }, this.playHeadDuration).start().onComplete(t => {
                t.on = 0
            }).onStop(t => {
                t.on = 0
            }))
        }
        draw(t, e) {
            var n = t >= 0 ? Math.floor(t * this.notes.cols) : -1;
            this.prevPosition !== n && (this.animateNotes(n), this.prevPosition = n), this.renderer.draw(e, this.notes, this.scroll, t, this.selection, this.beatsState)
        }
        updateScroll(t) {
            this.scroll.x = t.x, this.scroll.y = t.y, this.emit("scroll", this.scroll)
        }
        updateScrollLength() {
            this.scrollLength.x = this.renderer.tileWidth * this.notes.cols - this.renderer.width, this.scrollLength.y = this.renderer.tileHeight * this.notes.rows - this.renderer.height
        }
        getScrollLength() {
            return this.scrollLength
        }
        flashSelector() {
            this.renderer.flashSelector()
        }
        rendererClass() { }
        onMidiTrackAdd(t) {
            var e = h(t.note, this.rootNote, this.scale);
            this.notes.set(t.time, e, t.note)
        }
        onMidiTrackRemove(t) {
            var e = h(t.note, this.rootNote, this.scale);
            this.notes.set(t.time, e, void 0)
        }
    }
    var Cn = n(11),
        kn = n.n(Cn);
    var En = n(30),
        On = n.n(En),
        Mn = [
            [227, 48, 89],
            [247, 88, 57],
            [247, 148, 61],
            [243, 183, 47],
            [237, 217, 41],
            [149, 198, 49],
            [86, 167, 84],
            [17, 130, 109],
            [49, 96, 163],
            [91, 55, 204],
            [163, 71, 191],
            [234, 87, 178]
        ];

    function In(t) {
        return "rgb(".concat(Mn[t % Mn.length].join(", "), ")")
    }
    var An = On.a.red,
        Rn = On.a.blue,
        Pn = kn()(Rn).setAlpha(.08).toRgbString(),
        Dn = kn()(Rn).setAlpha(.2).toRgbString(),
        jn = kn()(Rn).setAlpha(.25).toRgbString(),
        Nn = kn()(Rn).setAlpha(.4).toRgbString(),
        Ln = kn()(Rn).setAlpha(.7).toRgbString(),
        Bn = (kn()(On.a.black).setAlpha(.05).toRgbString(), kn()(On.a.black).setAlpha(.15).toRgbString()),
        Un = On.a.lightGrayFill,
        Fn = On.a.veryLightGrayFill;
    On.a.darkGrayFill;
    class Vn extends class {
        constructor() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "context-2d";
            this.id = e, this.container = t, this.width = 0, this.height = 0, this.dpi = 1, this.createCanvas(), this.resize(this.width, this.height)
        }
        createCanvas() {
            this.canvas = document.createElement("canvas"), this.canvas.id = this.id, this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas)
        }
        resize(t, e) {
            this.width = t, this.height = e, this.dpi = window.devicePixelRatio || 1, this.canvas.width = t * this.dpi, this.canvas.height = e * this.dpi, this.canvas.style.width = t + "px", this.canvas.style.height = e + "px"
        }
    } {
        constructor() {
            var t;
            super(...arguments), this.groupCols = 1, this.groupRows = 7, this.cOffset = 4, this.tileWidth = 0, this.tileHeight = 0, this.drawMethods = [], this.isEmbed = (t = arguments.length - 1) < 0 || arguments.length <= t ? void 0 : arguments[t], this.selector = {
                opacity: 1
            }, this.bounds = {
                xMin: 0,
                xMax: 0,
                yMin: 0,
                yMax: 0
            }, "instrument-canvas" !== (arguments.length <= 1 ? void 0 : arguments[1]) && "percussion-canvas" !== (arguments.length <= 1 ? void 0 : arguments[1]) || this.canvas.setAttribute("aria-hidden", "true")
        }
        registerDrawMethod(t) {
            this.drawMethods.push(t)
        }
        updateSettings(t) {
            void 0 !== t.tileWidth && (this.tileWidth = t.tileWidth), void 0 !== t.tileHeight && (this.tileHeight = t.tileHeight), void 0 !== t.groupCols && (this.groupCols = t.groupCols), void 0 !== t.groupRows && (this.groupRows = t.groupRows), void 0 !== t.cOffset && (this.cOffset = t.cOffset), void 0 !== t.subdivision && (this.subdivision = t.subdivision)
        }
        updateBounds(t, e) {
            var n = Math.ceil(1 + this.width / this.tileWidth),
                i = Math.ceil(1 + this.height / this.tileHeight);
            this.bounds.xMin = Math.floor(e.x / this.tileWidth), this.bounds.yMin = Math.floor(e.y / this.tileHeight), this.bounds.xMax = Math.min(this.bounds.xMin + n, t.cols), this.bounds.yMax = Math.min(this.bounds.yMin + i, t.rows)
        }
        flashSelector() {
            this.selector.opacity = 1, new gn.a.Tween(this.selector).to({
                opacity: 0
            }, 80).repeat(1).yoyo(!0).easing(gn.a.Easing.Cubic.InOut).start()
        }
        draw(t, e, n, i, r, o) {
            this.context.fillStyle = Fn, this.context.fillRect(0, 0, this.width * this.dpi, this.height * this.dpi), this.updateBounds(e, n);
            var s = Math.floor(i * e.cols);
            this.drawBars(e, n), this.drawPositionIndicator(e, n, s), r.x > -1 && r.x !== s && this.drawPositionIndicator(e, n, r.x), this.drawNotes(e, n, s, o), this.drawGrid(e, n);
            var a = !0;
            this.drawMethods.forEach(i => {
                i(this, e, t, n, r) && (a = !1)
            }), r.y > -1 && a && this.drawSelectionBox(e, r, n, this.selector.opacity)
        }
        drawBars(t, e) {
            var n = t.cols / this.groupCols,
                i = Math.floor(this.bounds.xMin / n) * n,
                r = this.tileWidth * n * this.dpi;
            this.context.fillStyle = "white";
            for (var o = i; o < this.bounds.xMax; o += n) o / n % 2 < 1 && this.context.fillRect(o * this.tileWidth * this.dpi - e.x * this.dpi, 0, r, this.height * this.dpi)
        }
        drawPositionIndicator(t, e, n) {
            n > -1 && this.bounds.xMin <= n && n <= this.bounds.xMax && (this.context.fillStyle = Pn, this.context.fillRect(n * this.tileWidth * this.dpi - e.x * this.dpi, 0, this.tileWidth * this.dpi, this.height * this.dpi))
        }
        drawSelectionBox(t, e, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            this.context.strokeStyle = kn()(Rn).setAlpha(i).toRgbString();
            var r = 3 * this.dpi;
            this.context.lineWidth = r, this.context.strokeRect(e.x * this.tileWidth * this.dpi - n.x * this.dpi + .5 * r, t.flipY(e.y) * this.tileHeight * this.dpi - n.y * this.dpi + .5 * r, this.tileWidth * this.dpi - r, this.tileHeight * this.dpi - r)
        }
        drawNotes() { }
        drawGrid() { }
    }
    class qn extends Vn {
        drawNotes(t, e, n, i) {
            for (var r = this.bounds.yMin; r < this.bounds.yMax; r++)
                for (var o = this.bounds.xMin; o < this.bounds.xMax; o++) {
                    var s = t.get(o, t.flipY(r));
                    if (s) {
                        var a = In(s);
                        this.context.fillStyle = kn.a.mix(a, "white", 100 * i[o].on).toRgbString(), this.context.fillRect(o * this.tileWidth * this.dpi - e.x * this.dpi, r * this.tileHeight * this.dpi - e.y * this.dpi, this.tileWidth * this.dpi, this.tileHeight * this.dpi)
                    }
                }
        }
        drawGrid(t, e) {
            if (this.tileHeight > 5) {
                this.context.fillStyle = jn;
                for (var n = this.bounds.yMin + 1; n < this.bounds.yMax; n++) {
                    var i = 1;
                    (t.rows - this.groupRows == 1 ? n - 1 : n) % this.groupRows == 0 && t.rows > this.groupRows + 1 && (i = 3), this.isEmbed && (i = .5), this.context.fillRect(0, n * this.tileHeight * this.dpi - e.y * this.dpi, this.width * this.dpi, i * this.dpi)
                }
            }
            this.context.fillStyle = Nn;
            for (var r = this.bounds.xMin + 1; r < this.bounds.xMax; r++) {
                this.subdivision > 1 && r % this.subdivision == 0 ? this.context.fillStyle = Ln : this.subdivision > 1 && (this.context.fillStyle = Dn);
                var o = 1;
                this.isEmbed && (o = .5), this.context.fillRect(r * this.tileWidth * this.dpi - e.x * this.dpi, 0, o * this.dpi, this.height * this.dpi)
            }
        }
    }
    class zn extends Sn {
        constructor() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            super(...e, "instrument-canvas")
        }
        rendererClass() {
            return qn
        }
    }
    var Gn = 2 * Math.PI;
    class Hn extends Vn {
        drawNotes(t, e, n, i) {
            for (var r = this.bounds.yMin; r < this.bounds.yMax; r++)
                for (var o = this.bounds.xMin; o < this.bounds.xMax; o++) {
                    var s = t.get(o, t.flipY(r)),
                        a = (o + .5) * this.tileWidth - e.x,
                        c = (r + .5) * this.tileHeight - e.y;
                    if (void 0 !== s) {
                        var u = Rn,
                            h = 0;
                        this.context.fillStyle = kn.a.mix(u, "white", 100 * i[o].on).toRgbString(), h = Math.min(this.tileWidth, this.tileHeight) * (.23 + .17 * i[o].on), this.isEmbed ? h *= 1.25 : h *= 1.35, 1 === r ? this.drawCircle(a, c, .9 * h) : this.drawTriangle(a, c, h)
                    } else {
                        this.context.fillStyle = Bn;
                        var l = o % this.subdivision == 0 ? .1 : .05;
                        this.drawCircle(a, c, Math.max(Math.min(this.tileWidth, this.tileHeight) * l, 2.5))
                    }
                }
        }
        drawCircle(t, e, n) {
            t *= this.dpi, e *= this.dpi, n *= this.dpi, this.context.beginPath(), this.context.arc(t, e, n, 0, Gn), this.context.fill()
        }
        drawTriangle(t, e, n) {
            t *= this.dpi, e *= this.dpi, n *= this.dpi, this.context.beginPath(), this.context.moveTo(t, e - n);
            var i = .7551651238 * n;
            this.context.lineTo(t - n, e + i), this.context.lineTo(t + n, e + i), this.context.lineTo(t, e - n), this.context.fill()
        }
        drawGrid(t, e) {
            this.context.fillStyle = Nn;
            for (var n = this.bounds.xMin + 1; n < this.bounds.xMax; n++) {
                this.subdivision > 1 && n % this.subdivision == 0 ? this.context.fillStyle = Ln : this.subdivision > 1 && (this.context.fillStyle = Dn);
                var i = 1;
                this.isEmbed && (i = .5), this.context.fillRect(n * this.tileWidth * this.dpi - e.x * this.dpi, 0, i * this.dpi, this.height * this.dpi)
            }
            var r = this.isEmbed ? jn : Un,
                o = this.isEmbed ? 1 : 3;
            this.context.fillStyle = r, this.context.fillRect(0, 0, this.width * this.dpi, o * this.dpi)
        }
    }
    class Wn extends Sn {
        constructor() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            super(...e, "percussion-canvas")
        }
        rendererClass() {
            return Hn
        }
    }
    n(725);
    class Yn extends i.EventEmitter {
        constructor() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            super(), this.direction = e.direction || "vertical", this.container = t, this.isVisible = !0, this.progress = 0, this.length = 0, this.moving = !1, this.dragPos = 0, this.dragProgress = 0, this.onDrag = e.onDrag || function () { }, this.createDOM(), this.resize(), this.thumb.addEventListener("mousedown", this.onMouseDown.bind(this), !1), window.addEventListener("mousemove", this.onMouseMove.bind(this), !1), window.addEventListener("mouseup", this.onMouseUp.bind(this), !1), this.thumb.addEventListener("touchstart", this.onTouchStart.bind(this), !1), window.addEventListener("touchmove", this.onTouchMove.bind(this), !1), window.addEventListener("touchend", this.onTouchEnd.bind(this), !1), this.track.addEventListener("click", this.onTrackClick.bind(this), !1), window.addEventListener("resize", this.resize.bind(this), !1)
        }
        createDOM() {
            var t = document.createElement("div");
            t.classList.add("scrollbar"), t.classList.add("scrollbar-" + this.direction), this.container.appendChild(t), this.el = t;
            var e = document.createElement("div");
            e.classList.add("scrollbar-track"), this.el.appendChild(e), this.track = e;
            var n = document.createElement("div");
            n.classList.add("scrollbar-thumb"), this.el.appendChild(n), this.thumb = n
        }
        resize() {
            "horizontal" === this.direction ? this.length = this.el.offsetWidth - this.thumb.offsetWidth : this.length = this.el.offsetHeight - this.thumb.offsetHeight, this.moveThumb()
        }
        resizeThumb(t) {
            "horizontal" === this.direction ? this.thumb.style.width = 100 * t + "%" : this.thumb.style.height = 100 * t + "%", this.resize()
        }
        show() {
            this.isVisible || (this.isVisible = !0, this.el.style.visibility = "visible", this.resize())
        }
        hide() {
            this.isVisible && (this.isVisible = !1, this.el.style.visibility = "hidden")
        }
        full() {
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? this.el.classList.add("scrollbar-full") : this.el.classList.remove("scrollbar-full"), this.resize()
        }
        getSize() {
            return "horizontal" === this.direction ? this.el.offsetHeight : this.el.offsetWidth
        }
        moveThumb() {
            var t = this.length * this.progress + "px";
            "horizontal" === this.direction ? this.thumb.style.transform = "translateX(" + t + ")" : this.thumb.style.transform = "translateY(" + t + ")"
        }
        update() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            this.progress = t, this.moveThumb()
        }
        onMouseDown(t) {
            this.startDrag("horizontal" === this.direction ? t.clientX : t.clientY)
        }
        onMouseMove(t) {
            this.moving && (t.preventDefault(), this.drag("horizontal" === this.direction ? t.clientX : t.clientY))
        }
        onMouseUp(t) {
            this.moving && t.preventDefault(), this.stopDrag()
        }
        onTouchStart(t) {
            t.preventDefault();
            var e = t.touches[0];
            this.startDrag("horizontal" === this.direction ? e.clientX : e.clientY)
        }
        onTouchMove(t) {
            var e = t.touches[0];
            this.moving && this.drag("horizontal" === this.direction ? e.clientX : e.clientY)
        }
        onTouchEnd(t) {
            this.stopDrag()
        }
        startDrag(t) {
            this.moving = !0, this.dragPos = t, this.dragProgress = this.progress
        }
        drag(t) {
            var e = (t - this.dragPos) / this.length,
                n = this.dragProgress + e;
            this.onDrag(n)
        }
        stopDrag() {
            this.moving && (this.moving = !1)
        }
        onTrackClick(t) {
            var e = "horizontal" === this.direction ? t.offsetX : t.offsetY,
                n = "horizontal" === this.direction ? this.thumb.offsetWidth : this.thumb.offsetHeight;
            e = Math.max(0, e - .5 * n), this.onDrag(e / this.length)
        }
    }
    var Xn = [];

    function Zn(t) {
        Xn.push(t)
    }
    requestAnimationFrame((function t(e) {
        gn.a.update(e), requestAnimationFrame(t), Xn.forEach(t => t(e))
    }));

    function Jn(t, e, n) {
        return Math.max(e, Math.min(n, t))
    }
    class $n extends i.EventEmitter {
        constructor() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body,
                e = arguments.length > 1 ? arguments[1] : void 0,
                n = arguments.length > 2 ? arguments[2] : void 0,
                i = arguments.length > 3 ? arguments[3] : void 0,
                r = arguments.length > 4 ? arguments[4] : void 0;
            super(), this.container = t, this.songOptions = e, this.sound = i, this.isEmbed = r, this.el = this.createMainElement(t), this.defaultBars = e.defaultBars, this.instrument = new zn(this.el, n.instrument, r), this.percussion = new Wn(this.el, n.percussion, r), this.scrollbars = {
                h: new Yn(this.el, {
                    direction: "horizontal",
                    onDrag: this.onScrollbarHDrag.bind(this)
                }),
                v: new Yn(this.el, {
                    onDrag: this.onScrollbarVDrag.bind(this)
                })
            }, this.scroll = {
                x: new xn(0, .03),
                y: new xn(0, .03)
            }, this.el.addEventListener("wheel", this.onWheel.bind(this), !1), this.resetInstruments(), this.resize(), this.defaultScroll(), window.addEventListener("resize", () => this.resize(), !1), this.songOptions.on("change", () => {
                this.resetInstruments(), this.resize(), this.defaultScroll(), this.emit("load-success", this.songOptions)
            }), Zn(this.loop.bind(this))
        }
        createMainElement(t) {
            var e = document.createElement("div");
            return e.id = "grid-container", e.setAttribute("role", "application"), e.setAttribute("aria-label", "Song Area: press the arrow keys to move, enter and backspace to add and remove notes, and spacebar to play."), e.setAttribute("tabindex", 3), t.appendChild(e), e
        }
        resetInstruments() {
            this.instrument.reset({
                cols: this.songOptions.totalSubBeats,
                rows: this.songOptions.totalNotes,
                groupCols: this.songOptions.bars,
                groupRows: this.songOptions.notesPerOctave,
                subdivision: this.songOptions.subdivision,
                rootNote: this.songOptions.rootNote,
                scale: this.songOptions.scale,
                tempo: this.songOptions.tempo
            }), this.percussion.reset({
                cols: this.songOptions.totalSubBeats,
                rows: this.songOptions.percussionNotes,
                groupCols: this.songOptions.bars,
                subdivision: this.songOptions.subdivision,
                rootNote: 0,
                scale: "drums",
                tempo: this.songOptions.tempo
            })
        }
        updateTempo(t) {
            this.instrument.updateTempo(t), this.percussion.updateTempo(t)
        }
        select(t) {
            if (!(this.sound.position > -1))
                for (var e = 0; e < t.length; e++)
                    if (t[e].instrument === this.instrument) {
                        var n = t[e].position;
                        if (-1 === n.x) break;
                        var i = this.instrument.width,
                            r = this.instrument.height,
                            o = this.instrument.notes.flipY(n.y);
                        this.updateScroll(n.x * this.instrument.tileWidth - i / 2, o * this.instrument.tileHeight - r / 2, !0);
                        break
                    }
        }
        getTileSize(t, e, n, i, r, o) {
            var s = this.getTileHeight(e, n);
            return {
                width: this.getTileWidth(s, t, i, r, o),
                height: s
            }
        }
        getTileHeight(t, e) {
            var n = this.isEmbed ? 1 : 25;
            return Math.max(t / e, n)
        }
        getTileWidth(t, e, n, i, r) {
            if (this.isEmbed) return Math.max(18, e / (n * i * r));
            var o = this.defaultBars * i,
                s = n * i;
            o < s && (s = o);
            var a = Math.max(2 * t / Math.log2(i), e / s);
            return a /= r, Math.max(a, this.isEmbed ? 18 : 25)
        }
        getPercussionHeight(t) {
            return this.isEmbed ? 18 * Math.min(4, Math.max(2, t / 150)) : Math.round(Jn(.17 * t, 60, 120))
        }
        getViewDimensions() {
            var t = this.el.getBoundingClientRect();
            return {
                width: t.width,
                height: t.height
            }
        }
        fitBars() {
            var t = new p,
                e = this.getViewDimensions(),
                n = this.getPercussionHeight(e.height);
            e.height -= n;
            for (var i = !0; i;) {
                t.bars += 1;
                var r = this.getTileSize(e.width, e.height, t.totalNotes, t.bars, t.beats, t.subdivision),
                    o = t.totalSubBeats * r.width,
                    s = t.totalNotes * r.height;
                (o > e.width + .01 || s > e.height + .01) && (i = !1, t.bars -= 1)
            }
            t.bars > this.songOptions.bars && this.songOptions.fromJSON(t.toJSON())
        }
        resize() {
            this.scrollbars.h.hide(), this.scrollbars.v.hide();
            var t = this.getViewDimensions(),
                e = this.getPercussionHeight(t.height);
            t.height -= e;
            var n = this.getTileSize(t.width, t.height, this.songOptions.totalNotes, this.songOptions.bars, this.songOptions.beats, this.songOptions.subdivision),
                i = this.songOptions.totalSubBeats * n.width,
                r = this.songOptions.totalNotes * n.height,
                o = {
                    h: 0,
                    v: 0
                },
                s = this.scrollbars.h.getSize();
            if (!this.isEmbed && i > t.width + .01) {
                o.h = s;
                var a = this.getTileHeight(t.height - o.h, this.songOptions.totalNotes);
                (r = this.songOptions.totalNotes * a) > t.height - o.h + .01 ? o.v = s : n.height = a
            } else if (!this.isEmbed && r > t.height + .01) {
                o.v = s;
                var c = this.getTileWidth(n.height, t.width - o.v, this.songOptions.bars, this.songOptions.beats, this.songOptions.subdivision);
                (i = this.songOptions.totalSubBeats * c) > t.width - o.v + .01 ? o.h = s : n.width = c
            } !this.isEmbed && o.h && this.scrollbars.h.show(), !this.isEmbed && o.v && this.scrollbars.v.show(), 0 === o.v && o.h > 0 ? this.scrollbars.h.full() : this.scrollbars.h.full(!1), this.instrument.resize({
                tileWidth: n.width,
                tileHeight: n.height,
                canvasWidth: t.width - o.v,
                canvasHeight: t.height - o.h
            }), this.percussion.resize({
                tileWidth: n.width,
                tileHeight: e / this.songOptions.percussionNotes,
                canvasWidth: t.width - o.v,
                canvasHeight: e
            }), this.percussion.renderer.canvas.style.bottom = o.h + "px", this.scrollbars.h.resizeThumb((t.width - o.v) / (this.songOptions.totalSubBeats * n.width)), this.scrollbars.v.resizeThumb((t.height - o.h) / (this.songOptions.totalNotes * n.height));
            var u = this.instrument.getScrollLength();
            this.updateScroll(Jn(this.scroll.x.value, 0, u.x), Jn(this.scroll.y.value, 0, u.y))
        }
        loop(t) {
            var e = this.sound.position;
            if (this.instrument.draw(e, t), this.percussion.draw(e, t), (Math.abs(this.scroll.x.diff) > .05 || Math.abs(this.scroll.y.diff) > .05) && (this.scroll.x.step(), this.scroll.y.step(), this.onScroll()), e > -1) {
                var n = this.instrument.width,
                    i = this.instrument.tileWidth * this.instrument.cols;
                this.updateScroll(i * e - n / 2, this.scroll.y.value)
            }
        }
        defaultScroll() {
            var t = this.instrument.getScrollLength();
            this.updateScroll(0, .5 * t.y)
        }
        onScroll() {
            var t = this.scroll.x.value,
                e = this.scroll.y.value,
                n = this.instrument.getScrollLength();
            this.instrument.updateScroll({
                x: t,
                y: e
            }), this.percussion.updateScroll({
                x: t,
                y: 0
            }), this.scrollbars.h.update(t / n.x), this.scrollbars.v.update(e / n.y)
        }
        updateScroll(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = this.instrument.getScrollLength();
            this.scroll.x.goal = Jn(t, 0, i.x), this.scroll.y.goal = Jn(e, 0, i.y), !1 === n && (this.scroll.x.skip(), this.scroll.y.skip(), this.onScroll())
        }
        onScrollbarHDrag(t) {
            var e = this.instrument.getScrollLength();
            this.updateScroll(t * e.x, this.scroll.y.value)
        }
        onScrollbarVDrag(t) {
            var e = this.instrument.getScrollLength();
            this.updateScroll(this.scroll.x.value, t * e.y)
        }
        onWheel(t) {
            t.preventDefault();
            var e = t.deltaX || 0,
                n = t.deltaY || 0;
            this.updateScroll(this.scroll.x.value + e, this.scroll.y.value + n)
        }
        flashSelector() {
            this.instrument.flashSelector(), this.percussion.flashSelector()
        }
    }
    var Qn = {
        x: -1,
        y: -1
    };
    class Kn extends i.EventEmitter {
        constructor() {
            super(), this.rows = 0, this.cols = 0, this.defaultY = 0, this.position = Qn
        }
        update() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            void 0 !== t.rows && (this.rows = t.rows), void 0 !== t.cols && (this.cols = t.cols), void 0 !== t.defaultY && (this.defaultY = t.defaultY)
        }
        set() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                n = {
                    x: this.position.x,
                    y: this.position.y
                };
            void 0 !== t.x && (n.x = t.x), void 0 !== t.y && (n.y = t.y), -1 === n.x && (n.y = -1), n.x === this.position.x && n.y === this.position.y || (this.position = n, this.emit("change", this.position, e))
        }
        moveUp() {
            if (-1 === this.position.x && -1 === this.position.y) return this.show();
            if (this.position.y === this.rows - 1) return this.emit("outofbounds");
            var t = this.position.y + 1;
            this.set({
                y: t
            })
        }
        moveDown() {
            if (-1 === this.position.x && -1 === this.position.y) return this.show();
            if (0 === this.position.y) return this.emit("outofbounds");
            var t = this.position.y - 1;
            this.set({
                y: t
            })
        }
        moveLeft() {
            if (-1 === this.position.x && -1 === this.position.y) return this.show();
            if (0 === this.position.x) return this.emit("outofbounds");
            var t = this.position.x - 1;
            this.position.x < 0 && (t = -1), this.set({
                x: t
            })
        }
        moveRight() {
            if (-1 === this.position.x && -1 === this.position.y) return this.show();
            if (this.position.x === this.cols - 1) return this.emit("outofbounds");
            var t = this.position.x + 1;
            this.set({
                x: t
            })
        }
        add() {
            this.emit("start"), this.emit("add", this.position)
        }
        delete() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.emit("start"), this.emit("delete", this.position, t)
        }
        toggle() {
            this.emit("start"), this.emit("toggle", this.position)
        }
        showNoPick() {
            this.set({
                x: 0,
                y: Math.floor(.5 * (this.rows - this.defaultY))
            }, !1)
        }
        show() {
            this.set({
                x: 0,
                y: this.defaultY
            }, !1)
        }
        hide() {
            this.set(Qn)
        }
    }
    class ti extends i.EventEmitter {
        constructor(t) {
            super(), this.instrument = t, this.el = t.canvas, this.lastTouch = new Map, this.inputMode = new Map, this.tileWidth = 0, this.tileHeight = 0, this.rows = 0, this.cols = 0, this.offsetY = 0, this.scroll = {
                x: t.scroll.x,
                y: t.scroll.y
            }, this.onInstrumentResize(), this.onInstrumentReset(), this.instrument.on("reset", () => this.onInstrumentReset()), this.instrument.on("resize", () => this.onInstrumentResize()), this.instrument.on("scroll", t => this.onInstrumentScroll(t)), this.el.addEventListener("mousedown", t => this.onMouseDown(t)), this.el.addEventListener("mousemove", t => this.onMouseMove(t)), window.addEventListener("mouseup", t => this.onMouseUp(t)), this.el.addEventListener("touchstart", t => this.onTouchStart(t)), this.el.addEventListener("touchmove", t => this.onTouchMove(t)), window.addEventListener("touchend", t => this.onTouchEnd(t))
        }
        onInstrumentReset() {
            this.rows = this.instrument.rows, this.cols = this.instrument.cols
        }
        onInstrumentResize() {
            void 0 !== this.instrument.tileWidth && (this.tileWidth = this.instrument.tileWidth), void 0 !== this.instrument.tileHeight && (this.tileHeight = this.instrument.tileHeight)
        }
        onInstrumentScroll(t) {
            this.scroll.x = t.x, this.scroll.y = t.y
        }
        getPosition(t, e, n) {
            var i = Math.floor((this.scroll.x + t) / this.tileWidth),
                r = Math.floor((this.scroll.y + e) / this.tileHeight);
            if (i < 0 || this.cols <= i) return !1;
            if (r < 0 || this.rows <= r) return !1;
            if (r = this.rows - 1 - r, r += this.offsetY, this.lastTouch.has(n)) {
                var o = this.lastTouch.get(n);
                if (o.x === i && o.y === r) return !1
            }
            return this.lastTouch.set(n, {
                x: i,
                y: r
            }), {
                x: i,
                y: r
            }
        }
        down(t, e, n) {
            var i = this.getPosition(t, e, n);
            i && (this.emit("pointerdown"), this.emit("testPosition", i, t => {
                t ? (this.inputMode.set(n, "remove"), this.emit("remove", i)) : (this.inputMode.set(n, "add"), this.emit("add", i))
            }))
        }
        move(t, e, n) {
            var i = this.inputMode.get(n),
                r = this.getPosition(t, e, n);
            r && i && this.emit(i, r)
        }
        up(t) {
            this.emit("pointerup"), this.lastTouch.delete(t), this.inputMode.delete(t)
        }
        onMouseDown(t) {
            this.down(t.offsetX, t.offsetY, "mouse")
        }
        onMouseMove(t) {
            var e = t.buttons;
            void 0 === e && (e = t.which), 1 === e && this.move(t.offsetX, t.offsetY, "mouse")
        }
        onMouseUp() {
            this.up("mouse")
        }
        touchToOffsetX(t, e) {
            var n = t.getBoundingClientRect();
            return {
                x: e.pageX - n.left,
                y: e.pageY - n.top
            }
        }
        onTouchStart(t) {
            if (!(t.targetTouches.length > 1)) {
                t.preventDefault();
                var e = this.touchToOffsetX(t.target, t.targetTouches[0]);
                this.down(e.x, e.y, "touch")
            }
        }
        onTouchMove(t) {
            if (!(t.targetTouches.length > 1)) {
                var e = this.touchToOffsetX(t.target, t.targetTouches[0]);
                this.move(e.x, e.y, "touch")
            }
        }
        onTouchEnd(t) {
            t.targetTouches.length > 1 || this.up("touch")
        }
    }
    class ei extends i.EventEmitter {
        constructor() {
            var t;
            super(), t = this, this.instruments = [], this.offsets = [], this.touches = [], this.defaultInstrumentIndex = 0, this.selector = new Kn, this.selector.on("start", t => this.onInteractionStart()), this.selector.on("change", t => this.onSelectorChange(t)), this.selector.on("outofbounds", () => this.onSelectorOutOfBounds()), this.selector.on("add", t => this.onAddNote(t)), this.selector.on("toggle", t => this.onSelectorToggle(t)), this.selector.on("delete", (function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t.onSelectorDelete(e, n)
            }))
        }
        computeOffsets() {
            this.offsets = [], this.instruments.forEach((t, e) => {
                this.offsets[e] = (this.instruments[e - 1] ? this.instruments[e - 1].rows : 0) + (this.offsets[e - 1] ? this.offsets[e - 1] : 0), this.touches[e].offsetY = this.offsets[e]
            })
        }
        updateSelector() {
            var t = this.instruments.reduce((t, e) => t + e.rows, 0);
            this.selector.update({
                defaultY: this.offsets[this.defaultInstrumentIndex],
                rows: t,
                cols: this.instruments[0] ? this.instruments[0].cols : 0
            })
        }
        update() {
            this.computeOffsets(), this.updateSelector()
        }
        registerInstrument(t) {
            var e = this,
                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            this.instruments.push(t), t.on("reset", () => this.update()), n && (this.defaultInstrumentIndex = this.instruments.length - 1);
            var i = new ti(t);
            i.on("testPosition", (function () {
                return e.onTestPosition(...arguments)
            })), i.on("pointerdown", (function () {
                return e.onInteractionStart(...arguments)
            })), i.on("add", (function () {
                return e.onAddNote(...arguments)
            })), i.on("remove", (function () {
                return e.onRemoveNote(...arguments)
            })), this.touches.push(i), this.update()
        }
        indexToInstrument(t) {
            for (var e = 0, n = this.offsets.length - 1; n >= 0; n--)
                if (this.offsets[n] <= t.y) {
                    e = n;
                    break
                } return {
                    instrument: this.instruments[e],
                    pos: {
                        x: t.x,
                        y: t.y - this.offsets[e]
                    }
                }
        }
        onInteractionStart() {
            r.emit("history:push", {
                type: "start"
            })
        }
        onSelectorOutOfBounds() {
            this.emit("outofbounds")
        }
        onSelectorChange(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                {
                    instrument: n,
                    pos: i
                } = this.indexToInstrument(t),
                r = [];
            this.instruments.forEach(t => {
                var e = {
                    x: i.x,
                    y: t === n ? i.y : -1
                };
                t.select(e), r.push({
                    instrument: t,
                    position: e
                })
            }), e && this.emit("select", r)
        }
        onSelectorToggle(t) {
            var {
                instrument: e,
                pos: n
            } = this.indexToInstrument(t);
            e.has(n) ? this.onRemoveNote(t) : this.onAddNote(t)
        }
        onSelectorDelete(t) {
            for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = 0; n < this.selector.rows; n++) this.onRemoveNote({
                x: t.x,
                y: n
            }, e)
        }
        onTestPosition(t, e) {
            var {
                instrument: n,
                pos: i
            } = this.indexToInstrument(t);
            e(n.has(i)), this.selector.hide()
        }
        onAddNote(t) {
            var {
                instrument: e,
                pos: n
            } = this.indexToInstrument(t);
            e.addNote(n) && this.emit("song-changed")
        }
        onRemoveNote(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                {
                    instrument: n,
                    pos: i
                } = this.indexToInstrument(t);
            n.removeNote(i) && (e && e.isDeleteKey && this.emit("play-delete-sound"), this.emit("song-changed"))
        }
        selectDefaultInstrument(t) {
            try {
                var e = this.instruments[this.defaultInstrumentIndex].pitchToIndex(t),
                    n = e + this.offsets[this.defaultInstrumentIndex];
                return this.selector.set({
                    y: n
                }), e
            } catch (t) {
                return NaN
            }
        }
    }
    var ni = n(31),
        ii = n.n(ni);
    class ri extends i.EventEmitter {
        constructor() {
            super(), this.enabled = !1, this.connections = [], this.currentNotes = new Map
        }
        enable() {
            return ii.a.supported && !this.enabled ? new Promise((t, e) => {
                ii.a.enable(n => {
                    n ? e(n) : (this.enabled = !0, ii.a.inputs && ii.a.inputs.forEach(t => this._bindInput(t)), ii.a.addListener("connected", t => {
                        "input" === t.port.type && this._bindInput(t.port)
                    }), ii.a.addListener("disconnected", t => {
                        var e = this.getDeviceById(t.port.id);
                        e && (this.emit("disconnect", e), e.removeListener("noteon"), e.removeListener("noteoff"), this.removeDevice(t.port.id))
                    }), t())
                })
            }) : Promise.reject()
        }
        getDeviceById(t) {
            var e = this.connections.findIndex(e => e.id === t);
            return this.connections[e]
        }
        connected() {
            return this.connections.length ? this.connections : new Promise(t => {
                this.on("connect", () => {
                    t(this.connections)
                })
            })
        }
        removeDevice(t) {
            var e = this.connections.findIndex(e => e.id === t);
            this.connections.splice(e, 1)
        }
        _bindInput(t) {
            if (this.enabled && !this.getDeviceById(t.id)) {
                var e = ii.a.getInputById(t.id);
                this.connections.push(e), this.emit("connect", e), e.addListener("noteon", this.channel, t => {
                    (this.currentNotes.has(t.note.number) && t.timestamp - this.currentNotes.get(t.note.number) > 5 || !this.currentNotes.has(t.note.number)) && (this.currentNotes.set(t.note.number, t.timestamp), this.emit("keyDown", t.note.number, t.velocity, t.timestamp))
                }), e.addListener("noteoff", this.channel, t => {
                    this.emit("keyUp", t.note.number, t.velocity, t.timestamp)
                }), e.addListener("controlchange", this.channel, t => {
                    "holdpedal" === t.controller.name && this.emit("pedal", t.value, t.timestamp)
                })
            }
        }
    }

    function oi(t, e, n, i, r, o, s) {
        try {
            var a = t[o](s),
                c = a.value
        } catch (t) {
            return void n(t)
        }
        a.done ? e(c) : Promise.resolve(c).then(i, r)
    }

    function si(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise((function (i, r) {
                var o = t.apply(e, n);

                function s(t) {
                    oi(o, i, r, s, a, "next", t)
                }

                function a(t) {
                    oi(o, i, r, s, a, "throw", t)
                }
                s(void 0)
            }))
        }
    }
    class ai extends i.EventEmitter {
        constructor(t, e) {
            super(), this.songOptions = t, this.inputManager = e, this.midi = new ri, this.midi.on("keyDown", t => this.noteOn(t)), this.inputManager.on("outofbounds", () => {
                this.recording && (this.recording = !1)
            }), this._recording = !1, this._active = !1
        }
        connected() {
            var t = this;
            return si((function* () {
                return yield t.midi.enable(), yield t.midi.connected()
            }))()
        }
        set recording(t) {
            var e = t !== this._recording;
            this._recording = t, this._active = t, e && (t ? this.emit("start") : (this.inputManager.selector.hide(), this.emit("end")))
        }
        get recording() {
            return this._recording
        }
        noteOn(t) {
            var e = this;
            return si((function* () {
                var n;
                if (e._recording && e._active) {
                    var i = e.inputManager.selectDefaultInstrument(t);
                    if (isNaN(i) || t > e.songOptions.highestNote) return void e.emit("outofbounds");
                    e.inputManager.selector.add(), e._active = !1, yield (n = 100, new Promise((function (t) {
                        setTimeout(t, n)
                    }))), e.inputManager.selector.moveRight(), e._active = !0
                }
            }))()
        }
    }
    var ci = n(681),
        ui = n.n(ci);
    class hi extends i.EventEmitter {
        constructor(t, e) {
            super(), this.options = e;
            var n = Math.pow(2, 10);
            this.analyser = new Ne(n), t.connect(this.analyser);
            var i = ui.a.Macleod({
                sampleRate: ze.sampleRate
            });
            this.levelMeter = !1, this.pitchMeter = !1, this.rms = 0, this.smoothingFactor = .9, this.probability = 0, this.frequency = -1, this.lastNote = -1, Zn(() => {
                if (this.active) {
                    var t = this.analyser.getValue();
                    if (this.getRMS(t), this.pitchMeter) {
                        var {
                            freq: e,
                            probability: n
                        } = i(t);
                        this.getPitch(e, n)
                    } else this.probability = 0, this.frequency = -1, this.lastNote = -1
                } else this.probability = 0, this.frequency = -1, this.lastNote = -1, this.rms = 0
            })
        }
        get active() {
            return this.levelMeter || this.pitchMeter
        }
        set active(t) {
            this.levelMeter = t, this.pitchMeter = t
        }
        getRMS(t) {
            var e = Math.sqrt(t.reduce((t, e) => t + Math.pow(e, 2), 0) / t.length);
            this.rms = Math.max(e, this.rms * this.smoothingFactor), this.emit("level", this.rms)
        }
        getPitch(t, e) {
            if (e = (e - .5) / .5, e = Math.max(e, 0), t > 0 ? (-1 === this.lastNote ? this.frequency = t : this.frequency = this.frequency * this.smoothingFactor + (1 - this.smoothingFactor) * t, this.probability = Math.min(this.probability * this.smoothingFactor + e * (1 - this.smoothingFactor), e)) : this.probability *= this.smoothingFactor, -1 !== this.frequency) {
                var n = d(this.frequency),
                    i = function (t) {
                        return Math.round(d(t))
                    }(this.frequency);
                i !== this.lastNote && (this.probability *= .5), this.emit("pitch", {
                    note: i,
                    midi: n,
                    closestPitch: l(i, this.options.rootNote, this.options.scale),
                    probability: this.probability,
                    frequency: this.frequency
                }), this.lastNote = i
            } else this.lastNote = -1
        }
    }
    var li = n(682),
        di = n.n(li),
        pi = 2 * Math.PI,
        fi = kn()(An).setAlpha(.1).toRgbString(),
        mi = kn()(An);
    class gi {
        constructor() {
            this.x = 0, this.y = 0, this.isFlipped = !1, this._yOffset = new xn(0, .03), this._angle = new xn(0, .08), this.amp = 0, this.width = 140, this.height = 140, this.cx = .5 * this.width, this.cy = .5 * this.height, this.innerR = 25, this.outerR = 35, this.arrowR = 60, this.arrowL = 10, this.arrowO = new xn(0, .05), this.arrowVisible = !1, this.arrowTimeout = !1, this.arrowH = 7, this.step = pi / 40, this.simplex = new di.a, this.probability = 0, this.pitch = 48, this.pitchIndex = !1, this.loadMicrophoneImage()
        }
        updateLevel(t) {
            t >= .2 && !this.arrowVisible ? (this.arrowTimeout && clearTimeout(this.arrowTimeout), this.arrowO.goal = 1, this.arrowVisible = !0) : 0 !== this.arrowO.goal && this.arrowVisible && (this.arrowTimeout && clearTimeout(this.arrowTimeout), this.arrowVisible = !1, this.arrowTimeout = setTimeout(() => {
                this.arrowO.goal = 0
            }, 400)), this.amp = t
        }
        loadMicrophoneImage() {
            var t = new Image;
            t.onload = () => {
                var e = document.createElement("canvas"),
                    n = e.getContext("2d"),
                    i = window.devicePixelRatio || 1;
                e.width = t.width * i, e.height = t.height * i, n.drawImage(t, 0, 0, e.width, e.height), this.image = e, this.imageW = t.width, this.imageH = t.height
            }, t.src = "images/icon-mic-red.svg"
        }
        drawCircle(t, e, n, i, r, o, s) {
            t.strokeStyle = r, t.lineWidth = s, t.beginPath();
            for (var a = 0; a < pi; a += this.step) {
                var c = i + 12 * this.amp,
                    u = e + this.cx + c * Math.cos(a),
                    h = n + this.cy + c * Math.sin(a);
                t.lineTo(u * s, h * s)
            }
            t.closePath(), t.stroke()
        }
        drawArrow(t, e, n, i) {
            var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                o = arguments.length > 5 ? arguments[5] : void 0,
                s = this.cx - this.arrowR,
                a = this.cy,
                c = this.rotatePoint(s, a, i),
                u = this.rotatePoint(s + this.arrowL, a - this.arrowH, i),
                h = this.rotatePoint(s + this.arrowL, a + this.arrowH, i);
            t.fillStyle = mi.setAlpha(r).toRgbString(), t.beginPath(), t.moveTo((e + c.x) * o, (n + c.y) * o), t.lineTo((e + u.x) * o, (n + u.y) * o), t.lineTo((e + h.x) * o, (n + h.y) * o), t.closePath(), t.fill()
        }
        rotatePoint(t, e, n) {
            var i = this.cx,
                r = this.cy;
            return {
                x: Math.cos(n) * (t - i) - Math.sin(n) * (e - r) + i,
                y: Math.sin(n) * (t - i) + Math.cos(n) * (e - r) + r
            }
        }
        render(t, e, n, i, r) {
            var o = t.context,
                s = t.dpi,
                a = (r.x + 1) * t.tileWidth - i.x;
            a + this.width > t.width ? (this.isFlipped || (this.isFlipped = !0, this._angle.value = Math.PI - this._angle.value), a = r.x * t.tileWidth - this.width - i.x) : this.isFlipped && (this.isFlipped = !1, this._angle.value = this._angle.value - Math.PI);
            var c = e.flipY(r.y),
                u = (c + .5) * t.tileHeight - this.cy - i.y;
            u = Math.min(t.height - this.height, Math.max(0, u)), this._yOffset.goal = u, this._yOffset.step();
            var h = this._yOffset.value;
            this.image && o.drawImage(this.image, (a + this.cx - .5 * this.imageW) * s, (h + this.cy - .5 * this.imageH) * s, this.imageW * s, this.imageH * s), this.drawCircle(o, a, h, this.innerR, An, n, s), this.drawCircle(o, a, h, this.outerR, fi, n, s);
            var l = this.pitchIndex ? this.pitchIndex : r.y,
                d = (e.flipY(l) + .5) * t.tileHeight - i.y,
                p = Math.atan2(h + this.cy - d, this.cx);
            this.isFlipped && (p = Math.PI - p), this._angle.goal = p, this._angle.step(), this.arrowO.step(), this.drawArrow(o, a, h, this._angle.value, this.arrowO.value, s), o.fillStyle = kn()(In(this.pitch)).setAlpha(this.probability).toRgbString(), o.fillRect((r.x * t.tileWidth - i.x) * s, (c * t.tileHeight - i.y) * s, t.tileWidth * s, t.tileHeight * s), t.drawSelectionBox(e, r, i, this.probability)
        }
    }
    n(733);

    function vi(t, e, n, i, r, o, s) {
        try {
            var a = t[o](s),
                c = a.value
        } catch (t) {
            return void n(t)
        }
        a.done ? e(c) : Promise.resolve(c).then(i, r)
    }

    function bi(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise((function (i, r) {
                var o = t.apply(e, n);

                function s(t) {
                    vi(o, i, r, s, a, "next", t)
                }

                function a(t) {
                    vi(o, i, r, s, a, "throw", t)
                }
                s(void 0)
            }))
        }
    }
    class yi extends i.EventEmitter {
        constructor(t, e) {
            var n;
            super(), n = this, this.songOptions = t, this.inputManager = e, this.changeTimeout = !1, this.microphone = new ee, this.pitchDetect = new hi(this.microphone, t), this.pitchDetect.on("pitch", bi((function* () {
                return n.onPitch(...arguments)
            }))), this.pitchDetect.on("level", (function () {
                return n.onLevel(...arguments)
            })), this.inputManager.on("outofbounds", () => {
                this.recording && (this.recording = !1)
            }), this._recording = !1, this.renderer = new gi, this.render = this._render.bind(this)
        }
        open() {
            var t = this;
            return bi((function* () {
                return t.microphone.open()
            }))()
        }
        supported() {
            return bi((function* () {
                var t = navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
                if (t && navigator.mediaDevices.enumerateDevices) {
                    try {
                        for (var e = yield navigator.mediaDevices.enumerateDevices(), n = 0; n < e.length; n++)
                            if ("audioinput" === e[n].kind) return Promise.resolve(!0)
                    } catch (t) { }
                    return Promise.resolve(!1)
                }
                return Promise.resolve(!!t)
            }))()
        }
        set recording(t) {
            if (!this.changeTimeout) {
                var e = t !== this._recording;
                this._recording = t, this.pitchDetect.active = t, e && (t ? (this.renderer.pitchIndex = !1, this.renderer.probability = 0, this.emit("start")) : (this.inputManager.selector.hide(), this.emit("end")), t || this.close(), this.changeTimeout = setTimeout(() => {
                    clearTimeout(this.changeTimeout), this.changeTimeout = !1
                }, 600))
            }
        }
        get recording() {
            return this._recording
        }
        close() {
            this.microphone.close()
        }
        onLevel(t) {
            this.renderer.updateLevel(Math.min(1, 25 * t)), this.emit("level", t)
        }
        onPitch(t) {
            var e = this;
            return bi((function* () {
                if (e._recording) {
                    if (e.renderer.probability = t.closestPitch >= e.songOptions.rootNote ? t.probability : 0, t.probability > .25) {
                        var n = e.inputManager.selectDefaultInstrument(t.closestPitch);
                        e.renderer.pitch = t.closestPitch, e.renderer.pitchIndex = isNaN(n) ? -20 : n
                    }
                    var i;
                    t.probability > .9 && t.closestPitch >= e.songOptions.rootNote && t.closestPitch <= e.songOptions.highestNote && (e.inputManager.selector.add(), e.pitchDetect.pitchMeter = !1, yield (i = 500, new Promise((function (t) {
                        setTimeout(t, i)
                    }))), e.renderer.probability = 0, e._recording && (e.pitchDetect.pitchMeter = !0), e._recording && e.inputManager.selector.moveRight())
                }
            }))()
        }
        _render() {
            return this.recording && this.renderer.render(...arguments), this.recording
        }
    }
    class _i extends i.EventEmitter {
        constructor() {
            super(), this.pageHasFocus = !0, this.timeoutFunction = () => {
                clearTimeout(this.focusTimeout);
                var t = this.checkPageFocus();
                this.pageHasFocus != t && (this.pageHasFocus = t, this.emit("focus-change", t)), this.focusTimeout = setTimeout(this.timeoutFunction, 500)
            }, this.focusTimeout = setTimeout(this.timeoutFunction, 500), window.addEventListener("blur", () => {
                1 == this.pageHasFocus && (this.emit("focus-change", !1), this.pageHasFocus = !1)
            })
        }
        checkPageFocus() {
            return !document.hidden
        }
    }
    n(745);
    var wi = n(683),
        xi = n.n(wi),
        Ti = t => {
            var e = t,
                n = {
                    hitType: "event",
                    eventCategory: "unknown_category",
                    eventAction: "button_press",
                    eventLabel: "unknown_label"
                };
            for (var i in n) void 0 === e[i] && (e[i] = n[i]);
            try {
                ga("send", e)
            } catch (t) { }
        };
    class Si extends i.EventEmitter {
        constructor(t) {
            var e;
            super(), e = this, this.element = document.createElement("div"), this.element.classList.add("modal"), this.element.innerHTML = t, document.body.appendChild(this.element);
            for (var n = this.element.querySelectorAll(".button"), i = function (t) {
                var i = n[t];
                i.addEventListener("click", () => {
                    "cancel" === i.id ? (e.close(), e.emit("cancel"), e.trackButton(i)) : "submit" === i.id ? (e.close(), e.emit("submit"), e.emit("cancel"), e.trackButton(i)) : e.emit("click", i.id)
                })
            }, r = 0; r < n.length; r++) i(r);
            this.open()
        }
        trackButton(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            Ti({
                eventCategory: "modal",
                eventLabel: (this.element.querySelector(".modal-content") ? this.element.querySelector(".modal-content").id.replace("-", "_") : "modal") + ":" + (e || t.id)
            })
        }
        close() {
            this.element.classList.remove("visible"), setTimeout(() => this.element.remove(), 500)
        }
        open() {
            setTimeout(() => {
                this.element.classList.add("visible")
            }, 10)
        }
    }
    class Ci extends Si {
        constructor(t) {
            super(xi.a), this.element.classList.add("start-song"), this.currentSongOptions = t, this.currentSettingsToKeep = ["instrument", "percussion", "tempo"];
            var e = document.getElementById("settings-modal").querySelectorAll(".quantity"),
                n = document.getElementById("settings-modal").querySelectorAll(".select-wrap");
            this.options = t.toJSON();
            for (var i = 0; i < e.length; i++) this.setupQuantity(e[i]);
            for (var r = 0; r < n.length; r++) this.setupSelect(n[r]);
            this.setUpOctave(), this.on("submit", () => {
                this.emit("options", this.options)
            }), this.on("update-options", t => {
                this.options = t, this.updateQuantity(e)
            })
        }
        Event(t, e) {
            e = e || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
        }
        updateQuantity(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e].querySelector("input");
                t[e].querySelector(".quantity-cover").value = n.value
            }
        }
        setupSelect(t) {
            var e = document.createElement("div"),
                n = t.querySelector("select");
            n.style.opacity = 0, e.classList.add("dupe"), t.appendChild(e), n.addEventListener("change", () => {
                var t = n.querySelector('option[value="' + n.value + '"]').textContent;
                e.textContent = t, n.parentNode.style.width = e.offsetWidth + 40 + "px"
            }), n.dispatchEvent(new Event("change")), n.style.opacity = 1
        }
        setupQuantity(t) {
            var e = document.createElement("div"),
                n = document.createElement("div"),
                i = document.createElement("div"),
                r = document.createElement("img"),
                o = document.createElement("img"),
                s = document.createElement("div"),
                a = document.createElement("input"),
                c = t.querySelector("input"),
                u = new Event("change"),
                h = c.getAttribute("min"),
                l = c.getAttribute("max"),
                d = c.getAttribute("data-label") ? " " + c.getAttribute("data-label") : "",
                p = !1;
            c.changeMax = function (t) {
                l = t, c.value > t && m(t)
            };
            var f = function (t) {
                var e = parseInt(c.value, 10),
                    n = e;
                (t > 0 && e + t <= l || t < 0 && e + t >= h) && (n = e + t, c.value = n, a.value = c.value), c.dispatchEvent(u)
            },
                m = function (t) {
                    var e = parseInt(c.value, 10),
                        n = parseInt(t, 10);
                    n <= l && n >= h ? (c.value = n, a.value = c.value) : a.value = e, c.dispatchEvent(u)
                },
                g = function t(e) {
                    p = setTimeout(() => {
                        p && (f(e), t(e))
                    }, 100)
                };
            e.classList.add("quantity-nav"), t.appendChild(e), a.classList.add("quantity-cover"), s.classList.add("quantity-label"), n.classList.add("quantity-button", "quantity-up"), i.classList.add("quantity-button", "quantity-down"), e.appendChild(n), e.appendChild(i), e.appendChild(s), e.appendChild(a), r.setAttribute("src", "images/icon-quantity-add.svg"), o.setAttribute("src", "images/icon-quantity-minus.svg"), n.appendChild(r), i.appendChild(o), s.innerHTML = d, a.value = c.value, a.addEventListener("change", () => {
                m(a.value)
            }), c.addEventListener("change", () => {
                a.value !== c.value && (a.value = c.value)
            }), s.onclick = function () {
                a.focus()
            }, a.addEventListener("focus", () => {
                a.select()
            }), a.onkeypress = function (t) {
                return t.charCode >= 48 && t.charCode <= 57
            }, n.onclick = function () {
                f(1)
            }, n.onmousedown = function () {
                p = setTimeout(() => {
                    g(1)
                }, 500)
            }, i.onmousedown = function () {
                p = setTimeout(() => {
                    g(-1)
                }, 500)
            }, i.onmouseup = i.onmouseout = n.onmouseup = n.onmouseout = function () {
                clearTimeout(p), p = !1
            }, i.onclick = function () {
                f(-1)
            }
        }
        setUpOctave() {
            var t = document.getElementById("settings-modal").querySelector('select[name="rootOctave"]'),
                e = document.getElementById("settings-modal").querySelector('input[name="octaves"]');
            t.addEventListener("change", () => {
                parseInt(t.value, 10) > 4 ? e.changeMax(2) : e.changeMax(3)
            })
        }
        get options() {
            var t = new p,
                e = t.toJSON();
            for (var n in e) {
                var i = this.element.querySelector("[name=".concat(n, "]"));
                i && (isNaN(parseFloat(i.value)) ? t[n] = i.value : t[n] = parseFloat(i.value)), this.currentSettingsToKeep.indexOf(n) > -1 && (t[n] = this.currentSongOptions[n])
            }
            return t.toJSON()
        }
        set options(t) {
            for (var e in t) {
                var n = this.element.querySelector("[name=".concat(e, "]"));
                n && (n.value = t[e])
            }
        }
    }
    var ki = n(684),
        Ei = n.n(ki);
    class Oi extends Si {
        constructor() {
            super(Ei.a), this.element.classList.add("open-about")
        }
        closeModal() {
            this.close()
        }
    }
    var Mi = n(685),
        Ii = n.n(Mi);
    class Ai extends Si {
        constructor() {
            super(Ii.a), this.modal = document.getElementById("back-modal"), this.cancelButton = this.modal.querySelector("#back-modal-cancel"), this.confirmButton = this.modal.querySelector("#back-modal-confirm"), this.cancelButton.addEventListener("click", t => {
                t.preventDefault(), t.stopPropagation(), this.emit("cancel"), Ti({
                    eventCategory: "modal",
                    eventLabel: "back_modal:cancel"
                }), this.close()
            }), this.confirmButton.addEventListener("click", t => {
                t.preventDefault(), t.stopPropagation(), this.emit("confirm"), Ti({
                    eventCategory: "modal",
                    eventLabel: "back_modal:confirm"
                }), this.close()
            }), this.modal.parentNode.addEventListener("click", t => {
                t.preventDefault(), t.stopPropagation(), Ti({
                    eventCategory: "modal",
                    eventLabel: "back_background:cancel"
                }), this.emit("cancel"), this.close()
            }), this.element.classList.add("open-back")
        }
    }
    var Ri = n(686),
        Pi = n.n(Ri);
    n(747);
    class Di extends Si {
        constructor(t) {
            super(Pi.a), this.showShareEmbed = !1, this.element.classList.add("open-share"), this.expandable = document.getElementById("share-modal"), this.setUpButtons(), this.toggleShareState(!0), this.shortUrl = "", document.getElementById("bottom").classList.contains("expand") && this.element.classList.add("bottom-expanded"), window.saveDataFromCloud && t.immediate && this.populateData(window.saveDataFromCloud)
        }
        exportStart() {
            document.getElementById("download-wav").style.pointerEvents = "none", document.getElementById("download-wav").innerText = "Loadingâ€¦"
        }
        exportEnd() {
            document.getElementById("download-wav").style.pointerEvents = "auto", document.getElementById("download-wav").innerText = "Download Wav"
        }
        setTryCopy(t, e) {
            document.getElementById(t).addEventListener("click", t => {
                this.selectAndCopy(this.expandable.querySelector(e)), Ti({
                    eventCategory: "share",
                    eventLabel: "copy:" + e.replace(".", "").replace("-", "_")
                })
            })
        }
        selectAndCopy(t) {
            if (document.body.createTextRange) {
                var e = document.body.createTextRange();
                e.moveToElementText(t), e.select(), e.execCommand("Copy")
            } else if (window.getSelection && document.createRange) {
                var n = t.contentEditable,
                    i = t.readOnly;
                t.contentEditable = !0, t.readOnly = !1;
                var r = document.createRange();
                r.selectNodeContents(t);
                var o = window.getSelection();
                if (o.removeAllRanges(), o.addRange(r), "TEXTAREA" != t.nodeName && "INPUT" != t.nodeName || t.select(), t.setSelectionRange && navigator.userAgent.match(/ipad|ipod|iphone/i) && t.setSelectionRange(0, 999999), t.contentEditable = n, t.readOnly = i, document.queryCommandSupported("copy")) document.execCommand("copy") ? console.log(t, "Copied to clipboard.") : console.log(t, "Press CTRL+C to copy");
                else navigator.userAgent.match(/ipad|ipod|iphone|android|silk/i) || console.log(t, "Press CTRL+C to copy")
            }
        }
        setUpButtons() {
            this.expandable.querySelectorAll(".switch-state").forEach(t => {
                t.addEventListener("click", () => {
                    this.toggleShareState()
                })
            }), this.setTryCopy("copy-link", ".short-url"), this.setTryCopy("copy-iframe", ".iframe-code"), document.getElementById("share-facebook").addEventListener("click", () => {
                var t = "https://www.facebook.com/sharer.php?u=".concat(this.shortUrl, "&quote=").concat("Check out this song I created with Song Maker%20%23songmaker%20%23chromemusiclab");
                this.popup(t, 570, 520), Ti({
                    eventCategory: "share",
                    eventLabel: "facebook"
                })
            }), document.getElementById("share-twitter").addEventListener("click", () => {
                var t = "Check out this song I created with Song Maker â†’ " + this.shortUrl + "%20%23songmaker%20%23chromemusiclab",
                    e = "https://twitter.com/intent/tweet?text=".concat(t);
                this.popup(e, 253, 600), Ti({
                    eventCategory: "share",
                    eventLabel: "twitter"
                })
            }), document.getElementById("download-midi").addEventListener("click", () => {
                this.emit("request-midi"), Ti({
                    eventCategory: "share",
                    eventLabel: "download_midi"
                })
            }), document.getElementById("download-wav").addEventListener("click", () => {
                this.emit("request-wav", this.currentId), Ti({
                    eventCategory: "share",
                    eventLabel: "download_wav"
                })
            }), /Edge\/\d./i.test(navigator.userAgent) && (document.getElementById("download-wav").style.display = "none")
        }
        toggleShareState() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.expandable.classList.contains("show-embed") || 1 == t ? this.expandable.classList.remove("show-embed") : this.expandable.classList.add("show-embed")
        }
        populateData(t) {
            var e = this.expandable.querySelector(".short-url"),
                n = this.expandable.querySelector(".iframe-code"),
                i = '<iframe width="560" height="315" src="' + window.location.origin + "/Song-Maker/embed/" + t.id + '" frameborder="0" allowfullscreen></iframe>';
            this.currentId = t.id, this.element.classList.add("data-loaded"), this.element.querySelector(".saved-circle").classList.add("done"), this.shortUrl = t.url, e.value = t.url, e.removeAttribute("disabled"), n.value = i
        }
        populateSaveData(t) {
            t.then(t => {
                window.saveDataFromCloud = t, this.populateData(t)
            })
        }
        popup(t, e, n) {
            var i = window.screenLeft ? window.screenLeft : window.screenX,
                r = window.screenTop ? window.screenTop : window.screenY,
                o = i + window.innerWidth / 2 - n / 2,
                s = r + window.innerHeight / 2 - e / 2;
            window.open(t, "_blank", "location=yes,height=" + e + ",width=" + n + ",top=" + s + ",left=" + o + ",scrollbars=yes,status=no").focus()
        }
    }
    n(749);
    class ji extends i.EventEmitter {
        constructor(t, e) {
            super(), this.container = document.createElement("div"), this.container.id = "gamepad", t.appendChild(this.container), this.toggleButton = document.createElement("button"), this.toggleButton.id = "gamepad-toggle-button", this.toggleButton.classList.add("button", "button-toggle"), this.toggleButton.textContent = "GamePad Menu", this.toggleButton.addEventListener("click", t => {
                t.preventDefault(), this.toggleMenu(), Ti({
                    eventCategory: "gamepad",
                    eventLabel: "toggle"
                })
            }), this.selector = e.selector, this.upButton = document.createElement("button"), this.upButton.id = "gamepad-up-button", this.upButton.classList.add("button", "button-up"), this.upButton.textContent = "Up", this.upButton.addEventListener("click", () => {
                this.buttonPress("up")
            }), this.rightButton = document.createElement("button"), this.rightButton.id = "gamepad-right-button", this.rightButton.classList.add("button", "button-right"), this.rightButton.textContent = "Right", this.rightButton.addEventListener("click", () => {
                this.buttonPress("right")
            }), this.downButton = document.createElement("button"), this.downButton.id = "gamepad-down-button", this.downButton.classList.add("button", "button-down"), this.downButton.textContent = "Down", this.downButton.addEventListener("click", () => {
                this.buttonPress("down")
            }), this.leftButton = document.createElement("button"), this.leftButton.id = "gamepad-left-button", this.leftButton.classList.add("button", "button-left"), this.leftButton.textContent = "Left", this.leftButton.addEventListener("click", () => {
                this.buttonPress("left")
            }), this.returnButton = document.createElement("button"), this.returnButton.id = "gamepad-return-button", this.returnButton.classList.add("button", "button-return"), this.returnButton.textContent = "Return", this.returnButton.addEventListener("click", () => {
                this.buttonPress("return")
            }), this.container.appendChild(this.toggleButton), this.container.appendChild(this.leftButton), this.container.appendChild(this.rightButton), this.container.appendChild(this.upButton), this.container.appendChild(this.downButton), this.container.appendChild(this.returnButton)
        }
        toggleTabbable() {
            for (var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = document.querySelectorAll("button, [href], input, select, textarea, [tabindex]"), n = 0; n < e.length; n++) {
                var i = e[n];
                i.getAttribute("id") && i.getAttribute("id").indexOf("gamepad") > -1 || (t ? i.getAttribute("data-tabindex") ? i.setAttribute("tabindex", i.getAttribute("data-tabindex")) : i.removeAttribute("tabindex") : i.getAttribute("tabindex") && !i.getAttribute("data-tabindex") ? i.setAttribute("data-tabindex", i.getAttribute("tabindex")) : i.setAttribute("tabindex", -1))
            }
            t ? document.getElementById("header-back").classList.remove("fade") : document.getElementById("header-back").classList.add("fade")
        }
        toggleMenu() {
            this.container.classList.contains("expand") ? (this.container.classList.remove("expand"), this.toggleTabbable(!0)) : (this.container.classList.add("expand"), this.toggleTabbable(!1))
        }
        buttonPress(t) {
            switch (t) {
                case "right":
                    this.selector.moveRight();
                    break;
                case "left":
                    this.selector.moveLeft();
                    break;
                case "down":
                    this.selector.moveDown();
                    break;
                case "up":
                    this.selector.moveUp();
                    break;
                case "return":
                default:
                    this.selector.toggle()
            }
            Ti({
                eventCategory: "gamepad",
                eventLabel: t
            }), this.emit("change", t)
        }
    }
    class Ni extends i.EventEmitter {
        constructor() {
            var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body,
                n = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 ? arguments[2] : void 0;
            super(), t = this, this.modals = {
                startSong: !1,
                about: !1,
                share: !1
            }, this.gamePad = new ji(e, n), this.gamePad.on("change", t => this.emit("GamePad", t)), this.container = document.createElement("div"), this.container.id = "topbar", this.toplinks = document.createElement("div"), this.toplinks.id = "toplinks", this.container.appendChild(this.toplinks), e.appendChild(this.container), this.settingsButton = document.createElement("button"), this.settingsButton.id = "header-settings", this.settingsButton.classList.add("header-link"), this.settingsButton.textContent = "Restart", this.toplinks.appendChild(this.settingsButton), this.settingsButton.addEventListener("click", t => {
                t.preventDefault(), this.emit("stop"), this.emit("restart"), this.emit("settings-update", (new p).toJSON(), !0), Ti({
                    eventCategory: "top",
                    eventLabel: "restart"
                })
            }), this.aboutButton = document.createElement("button"), this.aboutButton.id = "header-about", this.aboutButton.classList.add("header-link"), this.aboutButton.textContent = "About", this.toplinks.appendChild(this.aboutButton), this.aboutButton.addEventListener("click", t => {
                t.preventDefault(), this.modals.about || (this.modals.about = new Oi, this.modals.about.on("cancel", () => {
                    this.modals.about = !1
                })), this.emit("stop"), Ti({
                    eventCategory: "top",
                    eventLabel: "about"
                })
            }), this.backButton = document.createElement("button"), this.backButton.id = "header-back", this.backButton.setAttribute("aria-label", "Back to Music Lab website"), this.backButton.textContent = "Back", this.container.appendChild(this.backButton), this.backButton.addEventListener("click", t => {
                Ti({
                    eventCategory: "top",
                    eventLabel: "back"
                }), t.preventDefault(), i.instrument.timeline._length < 1 && i.percussion.timeline._length < 1 ? this.emit("back") : this.modals.back || (this.modals.back = new Ai, this.modals.back.on("cancel", () => {
                    this.modals.back = !1
                }), this.modals.back.on("confirm", () => {
                    this.modals.back = !1, this.emit("back")
                }))
            }), this.triggerShare = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                t.modals.share || (t.modals.share = new Di(!1 === e ? e : "immediate" === e ? {
                    immediate: !0
                } : e), t.modals.share.on("cancel", () => {
                    t.modals.share = !1
                }), t.modals.share.on("request-wav", e => {
                    t.emit("request-wav", e)
                }), t.modals.share.on("request-midi", () => {
                    t.emit("request-midi")
                })), !1 !== e && "immediate" !== e && t.modals.share.populateSaveData(e)
            }, this.triggerSettingsModal = t => {
                this.emit("stop"), this.modals.startSong || (this.modals.startSong = new Ci(t), this.modals.startSong.on("options", t => {
                    this.emit("settings-update", t)
                }), this.modals.startSong.on("cancel", () => {
                    this.modals.startSong = !1
                }))
            }, this.logo = document.createElement("div"), this.logo.id = "header-logo", this.logo.textContent = "Song Maker", this.container.appendChild(this.logo)
        }
    }
    n(751);
    class Li extends i.EventEmitter {
        constructor(t) {
            super(), this.container = document.createElement("div"), this.container.id = "tempo-slider", t.appendChild(this.container), this.sliderCover = document.createElement("div"), this.sliderDupe = document.createElement("div"), this.sliderCover.classList.add("range-cover"), this.sliderDupe.classList.add("range-dupe"), this.slider = document.createElement("input"), this.slider.type = "range", this.slider.min = "0", this.slider.max = "100", this.slider.value = "50", this.sliderCover.appendChild(this.slider), this.sliderCover.appendChild(this.sliderDupe), this.container.appendChild(this.sliderCover), this.label = document.createElement("label"), this.label.for = "tempo", this.label.textContent = "Tempo", this.container.appendChild(this.label), this.tempoNumber = document.createElement("input"), this.tempoNumber.classList.add("input-number"), this.tempoNumber.name = "tempo", this.tempoNumber.min = 40, this.tempoNumber.max = 240, this.tempoNumber.value = 120, this.container.appendChild(this.tempoNumber), this.tempoNumber.onkeypress = function (t) {
                return t.charCode >= 48 && t.charCode <= 57
            }, this.tempoNumber.onkeydown = t => (9 === (void 0 === t.which ? t.keyCode : t.which) && this.tempoNumber.blur(), !0), this.tempoNumber.addEventListener("change", t => this.updateSlider()), this.slider.addEventListener("input", t => this.updateNumber()), this.updateSlider()
        }
        set tempo(t) {
            this.tempoNumber.value = t, this.updateSlider()
        }
        updateDupe() {
            this.sliderDupe.style.width = Math.round(1e4 * (this.slider.value - this.slider.min) / (this.slider.max - this.slider.min)) / 100 + "%"
        }
        updateSlider() {
            var t = parseInt(this.tempoNumber.value),
                e = parseInt(this.slider.min),
                n = parseInt(this.slider.max),
                i = Math.log2(parseInt(this.tempoNumber.min)),
                r = (Math.log2(parseInt(this.tempoNumber.max)) - i) / (n - e);
            t > this.tempoNumber.max ? this.tempoNumber.value = t = this.tempoNumber.max : t < this.tempoNumber.min && (this.tempoNumber.value = t = this.tempoNumber.min), this.slider.value = (Math.log2(t) - i) / r + e, this.emit("change", parseInt(this.tempoNumber.value)), this.updateDupe()
        }
        updateNumber() {
            var t = parseInt(this.slider.value),
                e = parseInt(this.slider.min),
                n = parseInt(this.slider.max),
                i = Math.log2(parseInt(this.tempoNumber.min)),
                r = (Math.log2(parseInt(this.tempoNumber.max)) - i) / (n - e);
            this.tempoNumber.value = Math.round(Math.pow(2, i + r * (t - e))), this.emit("change", parseInt(this.tempoNumber.value)), this.updateDupe()
        }
    }
    class Bi extends i.EventEmitter {
        constructor(t, e) {
            super(), this.currentInstrument = 0, this.instruments = e, this.container = document.createElement("button"), this.container.classList.add("button"), t.appendChild(this.container), this.changeInstrument(this.currentInstrument, !0), this.container.addEventListener("click", () => {
                this.changeInstrument()
            })
        }
        changeInstrument(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = this.currentInstrument;
            void 0 !== t ? t > -1 && t < this.instruments.length && (n = t) : ++n >= this.instruments.length && (n = 0), (n !== this.currentInstrument || e) && (this.container.textContent = this.instruments[n].name, this.container.classList.remove("instrument-" + this.instruments[this.currentInstrument].name.toLowerCase()), this.currentInstrument = n, this.container.classList.add("instrument-" + this.instruments[this.currentInstrument].name.toLowerCase()), e || this.emit("change", this.instruments[this.currentInstrument].audioPath))
        }
        changeInstrumentByName(t) {
            if (!t) return !1;
            var e = this.instruments.findIndex((function (e) {
                return e.audioPath == t
            }));
            e > -1 && this.changeInstrument(e)
        }
    }
    var Ui = n(687),
        Fi = n.n(Ui);
    class Vi extends Si {
        constructor() {
            super(Fi.a), this.element.classList.add("open-pitch"), this.closeTimeout = setTimeout(() => {
                this.element.classList.add("fadeout"), this.closeInnerTimeout = setTimeout(() => {
                    this.close()
                }, 300)
            }, 3500)
        }
        closeModal() {
            clearTimeout(this.closeTimeout), clearTimeout(this.closeInnerTimeout), this.close()
        }
    }
    var qi = n(688),
        zi = n.n(qi);
    class Gi extends Si {
        constructor() {
            super(zi.a), this.element.classList.add("open-midi"), this.closeTimeout = setTimeout(() => {
                this.element.classList.add("fadeout"), clearTimeout(this.closeTimeout), this.closeInnerTimeout = setTimeout(() => {
                    this.close()
                }, 300)
            }, 3500)
        }
        closeModal() {
            clearTimeout(this.closeTimeout), clearTimeout(this.closeInnerTimeout), this.close()
        }
    }
    class Hi extends i.EventEmitter {
        constructor() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body,
                e = arguments.length > 1 ? arguments[1] : void 0;
            super(), this.firstLoad = !0, this.modals = {
                pitch: !1,
                midi: !1
            }, this.songChanged = !1, this.container = document.createElement("div"), this.container.id = "bottom", t.appendChild(this.container), this.bottomLeft = document.createElement("div"), this.bottomLeft.id = "bottom-left", this.container.appendChild(this.bottomLeft), this.bottomRight = document.createElement("div"), this.bottomRight.id = "bottom-right", this.container.appendChild(this.bottomRight), this.options = e, this.playButton = document.createElement("button"), this.playButton.id = "play-button", this.playButton.textContent = "Play", this.playButton.addEventListener("click", t => {
                t.preventDefault(), this.toggle(), Ti({
                    eventCategory: "bottom",
                    eventLabel: "play/pause"
                })
            }), this.meterButton = document.createElement("button"), this.meterButton.id = "meter-button", this.meterButton.classList.add("button"), this.meterButton.textContent = "Tempo", this.meterButton.addEventListener("click", t => {
                t.preventDefault(), this.toggleMeter(), Ti({
                    eventCategory: "bottom",
                    eventLabel: "tempo"
                })
            }), this.bottomLeft.appendChild(this.playButton), this.instrumentTonalButton = new Bi(this.bottomLeft, [{
                name: "Marimba",
                audioPath: "marimba"
            }, {
                name: "Piano",
                audioPath: "piano"
            }, {
                name: "Strings",
                audioPath: "strings"
            }, {
                name: "Woodwind",
                audioPath: "woodwind"
            }, {
                name: "Synth",
                audioPath: "synth"
            }]), this.instrumentTonalButton.container.id = "instrument-toggle-button", this.instrumentTonalButton.on("change", t => {
                this.emit("instrument-change", t), this.songChanged = !0, Ti({
                    eventCategory: "bottom",
                    eventLabel: "instrument:tonal:" + t
                })
            }), this.percussionButton = new Bi(this.bottomLeft, [{
                name: "Electronic",
                audioPath: "electronic"
            }, {
                name: "Blocks",
                audioPath: "woodblock"
            }, {
                name: "Kit",
                audioPath: "kit"
            }, {
                name: "Conga",
                audioPath: "bongo"
            }]), this.percussionButton.container.id = "percussion-toggle-button", this.percussionButton.on("change", t => {
                this.emit("percussion-change", t), this.songChanged = !0, Ti({
                    eventCategory: "bottom",
                    eventLabel: "instrument:percussion:" + t
                })
            }), window.addEventListener("keydown", t => {
                32 === t.keyCode && this.toggle(!1)
            }), this.tempoSlider = new Li(this.container), this.tempoSlider.on("change", t => {
                this.emit("tempo", t), this.firstLoad ? this.firstLoad = !1 : (this.disableSaveButton(!1), this.songChanged = !0)
            }), this.options.on("change", () => {
                this.tempoSlider.tempo = this.options.tempo
            }), this.options.on("change-instrument", () => {
                this.percussionButton.changeInstrumentByName(this.options.percussion), this.instrumentTonalButton.changeInstrumentByName(this.options.instrument)
            }), this.undoButton = document.createElement("button"), this.undoButton.id = "undo-button", this.undoButton.classList.add("button"), this.undoButton.textContent = "Undo", this.undoButton.addEventListener("click", t => {
                t.preventDefault(), this.emit("undo"), Ti({
                    eventCategory: "bottom",
                    eventLabel: "undo"
                })
            }), this.resetButton = document.createElement("button"), this.resetButton.id = "reset-button", this.resetButton.classList.add("button"), this.resetButton.textContent = "Restart", this.resetButton.addEventListener("click", t => {
                t.preventDefault(), this.emit("stop"), this.emit("restart"), this.emit("settings-update", (new p).toJSON(), !0), Ti({
                    eventCategory: "bottom",
                    eventLabel: "restart"
                })
            }), this.settingsButton = document.createElement("button"), this.settingsButton.id = "settings-button", this.settingsButton.classList.add("button"), this.settingsButton.textContent = "Settings", this.settingsButton.addEventListener("click", t => {
                t.preventDefault(), this.emit("settings"), Ti({
                    eventCategory: "bottom",
                    eventLabel: "settings"
                })
            }), this.saveButton = document.createElement("button"), this.saveButton.id = "save-button", this.saveButton.classList.add("button"), this.saveButton.textContent = "Save", this.saveButton.addEventListener("click", t => {
                t.preventDefault(), this.emit(this.songChanged ? "save" : "share"), this.songChanged = !1, Ti({
                    eventCategory: "bottom",
                    eventLabel: "save"
                })
            }), this.midiButton = document.createElement("button"), this.midiButton.id = "midi-button", this.midiButton.classList.add("button"), this.midiButton.textContent = "Midi", this.midiButton.addEventListener("click", t => {
                t.preventDefault(), t.stopPropagation(), this.emit("midi"), Ti({
                    eventCategory: "bottom",
                    eventLabel: "midi"
                })
            }), this.micButton = document.createElement("button"), this.micButton.id = "mic-button", this.micButton.classList.add("button"), this.micButton.textContent = "Mic", this.micButton.addEventListener("click", t => {
                t.preventDefault(), t.stopPropagation(), this.emit("mic"), Ti({
                    eventCategory: "bottom",
                    eventLabel: "microphone"
                })
            }), this.bottomRight.appendChild(this.midiButton), this.bottomRight.appendChild(this.micButton), this.bottomRight.appendChild(this.resetButton), this.bottomRight.appendChild(this.settingsButton), this.bottomRight.appendChild(this.undoButton), this.bottomRight.appendChild(this.saveButton), this.bottomLeft.appendChild(this.meterButton), this.disableSaveButton(!0), qe.on("start", () => {
                this.playButtonPlaying(!0)
            }), qe.on("stop", () => {
                this.playButtonPlaying(!1)
            })
        }
        disableSaveButton(t) {
            t ? this.saveButton.disabled = !0 : this.saveButton.removeAttribute("disabled")
        }
        toggleMeter() {
            this.meterButton.classList.contains("expand") ? (this.meterButton.classList.remove("expand"), document.getElementById("tempo-slider").classList.remove("show")) : (this.meterButton.classList.add("expand"), document.getElementById("tempo-slider").classList.add("show"))
        }
        toggle() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.playButtonPlaying(!this.playButton.classList.contains("playing")), t ? this.emit("play", this.playButton.classList.contains("playing")) : this.emit("play-from-selector", this.playButton.classList.contains("playing"))
        }
        playButtonPlaying(t) {
            t ? (this.playButton.classList.add("playing"), this.playButton.textContent = "Stop") : (this.playButton.classList.remove("playing"), this.playButton.textContent = "Play")
        }
        enableKeyboard() {
            this.midiButton.classList.add("visible"), this.tempoSlider.container.classList.add("has-midi")
        }
        enableMicrophone() {
            this.micButton.classList.add("visible")
        }
        midiModal(t) {
            t && !this.modals.midi ? (this.modals.pitch && !0 !== this.modals.pitch && this.modals.pitch.closeModal(), this.modals.midi = new Gi, this.modals.midi.on("cancel", () => {
                this.modals.midi = !1
            })) : this.modals.midi && !t && !0 !== this.modals.midi && (this.modals.midi.close(), this.modals.midi = !0)
        }
        pitchModal(t) {
            t && !this.modals.pitch ? (this.modals.midi && !0 !== this.modals.midi && this.modals.midi.closeModal(), this.modals.pitch = new Vi, this.modals.pitch.on("cancel", () => {
                this.modals.pitch = !1
            })) : this.modals.pitch && !t && !0 !== this.modals.pitch && (this.modals.pitch.close(), this.modals.pitch = !0)
        }
        set micRecording(t) {
            t ? this.micButton.classList.add("recording", "mobile-pointer-none") : (this.micButton.classList.remove("recording"), setTimeout(() => {
                this.micButton.classList.remove("mobile-pointer-none")
            }, 100)), this._micRecording = t, this.pitchModal(t)
        }
        get micRecording() {
            return this._micRecording
        }
        set midiRecording(t) {
            t ? this.midiButton.classList.add("recording") : this.midiButton.classList.remove("recording"), this.midiModal(t)
        }
    }
    class Wi extends i.EventEmitter {
        constructor() {
            super(), this.currentURL = window.location.pathname, Zn(() => {
                window.location.pathname !== this.currentURL && (this.currentURL = window.location.pathname, this.notifyChange())
            }), this.currentURL.includes("/song/") && setTimeout(() => {
                this.notifyChange()
            }, 10)
        }
        notifyChange() {
            if (window.location.pathname.includes("/song/")) {
                var t = window.location.pathname.split("/"),
                    e = t[t.length - 1];
                this.emit("change", e)
            }
            "/" === window.location.pathname && (window.location = "/")
        }
        setId(t) {
            this.currentURL = "/Song-Maker/song/".concat(t), window.history.pushState({}, "Song ".concat(t), this.currentURL)
        }
        clear() {
            this.currentURL = "/Song-Maker/", window.history.pushState({}, "Song Maker", this.currentURL)
        }
    }

    function Yi(t, e, n, i, r, o, s) {
        try {
            var a = t[o](s),
                c = a.value
        } catch (t) {
            return void n(t)
        }
        a.done ? e(c) : Promise.resolve(c).then(i, r)
    }

    function Xi(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise((function (i, r) {
                var o = t.apply(e, n);

                function s(t) {
                    Yi(o, i, r, s, a, "next", t)
                }

                function a(t) {
                    Yi(o, i, r, s, a, "throw", t)
                }
                s(void 0)
            }))
        }
    }

    function Zi(t, e, n, i, r, o, s) {
        try {
            var a = t[o](s),
                c = a.value
        } catch (t) {
            return void n(t)
        }
        a.done ? e(c) : Promise.resolve(c).then(i, r)
    }

    function Ji(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise((function (i, r) {
                var o = t.apply(e, n);

                function s(t) {
                    Zi(o, i, r, s, a, "next", t)
                }

                function a(t) {
                    Zi(o, i, r, s, a, "throw", t)
                }
                s(void 0)
            }))
        }
    }
    var $i = window.location.pathname.indexOf("/embed/") > -1 && window.location.pathname.match(/\/[0-9]+/i)[0].substr(1);
    $i && document.body.classList.add("embed-only");
    var Qi = window.location.pathname.indexOf("/song/") > -1 && window.location.pathname.match(/\/[0-9]+/i)[0].substr(1);
    new class {
        constructor() {
            var t = this;
            this.events = [], r.on("history:push", (function () {
                return t.push(...arguments)
            })), r.on("history:undo", (function () {
                return t.undo(...arguments)
            }))
        }
        push(t) {
            this.events.push(t)
        }
        pop() {
            return this.events.pop()
        }
        undo() {
            var t = this.pop();
            if (t && "save" === t.type) return r.emit("history:pop:" + t.type, t);
            for (; t && "start" !== t.type;) r.emit("history:pop:" + t.type, t), t = this.pop()
        }
        clear() {
            this.events = []
        }
    };
    var Ki = new p,
        tr = new class {
            constructor() {
                this.instrument = new He, this.percussion = new He(!0)
            }
            clear() {
                this.instrument.clear(), this.percussion.clear()
            }
            morph(t, e) {
                this.instrument.morph(t, e), this.percussion.morph(t, e)
            }
            replace(t) {
                this.instrument.replace(t.instrument), this.percussion.replace(t.percussion)
            }
            encode(t) {
                return console.log(t, this.percussion, this.instrument), tn(t, this.percussion, this.instrument)
            }
            decode(t, e) {
                this.clear(),
                    function (t, e, n, i) {
                        var r = Object(We.parseMidi)(new Uint8Array(t));
                        un(r.tracks[1]).forEach(t => {
                            var n = hn(t.duration, e),
                                r = hn(t.time, e);
                            i.add(r, t.note, n)
                        }), un(r.tracks[2]).forEach(t => {
                            var i = [39, 76, 38, 60].includes(t.note) ? 1 : 0,
                                r = hn(t.duration, e),
                                o = hn(t.time, e);
                            n.add(o, i, r)
                        })
                    }(t, e, this.percussion, this.instrument)
            }
            get timelines() {
                return {
                    instrument: this.instrument.timeline,
                    percussion: this.percussion.timeline
                }
            }
            get lowestNote() {
                return this.instrument.lowestNote
            }
            get highestNote() {
                return this.instrument.highestNote
            }
        };
    Ki.on("load-success", () => {
        er.loading && (er.loading.close("sampler"), $i || Qi || er.loading.close("grid"))
    });
    var er = {};
    er.loading = new pn;
    var nr = new wn(Ki, tr);
    nr.on("export-start", () => {
        ur.modals.share.exportStart()
    }), nr.on("export-complete", () => {
        ur.modals.share.exportEnd()
    });
    var ir = new $n(document.body, Ki, tr, nr, !!$i);
    ir.instrument.on("add", t => {
        nr.resumeContext(), nr.instrumentTrack.playNote(t, void 0, void 0, .8)
    }), ir.percussion.on("add", t => {
        nr.resumeContext(), nr.percussionTrack.playNote(t, void 0, void 0, .8)
    }), ir.on("load-success", () => {
        er.loading && er.loading.close("grid")
    });
    var rr = new ei;

    function or() {
        hr.songChanged = !0, tr.instrument.timeline._length + tr.percussion.timeline._length < 1 ? hr.disableSaveButton(!0) : hr.disableSaveButton(!1)
    }

    function sr(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = Ki.toJSON();
        r.emit("history:push", {
            type: "save",
            options: n,
            timelines: tr.timelines
        }), e && tr.clear(), tr.morph(t, n), Ki.fromJSON(t), nr.syncWithMidiTrack(), dr.clear()
    }
    rr.registerInstrument(ir.percussion), rr.registerInstrument(ir.instrument, !0), rr.on("select", t => ir.select(t)), rr.on("outofbounds", () => {
        ir.flashSelector(), nr.bump()
    }), rr.on("play-delete-sound", () => nr.playDelete()), rr.on("song-changed", () => or()), new class {
        constructor(t) {
            this.selector = t.selector, window.addEventListener("keydown", t => {
                32 === t.keyCode && t.preventDefault()
            }), window.addEventListener("keydown", t => {
                this.allowKeypress(t.target) && (39 === t.keyCode ? (this.el, this.selector.moveRight()) : 37 === t.keyCode ? (this.el, this.selector.moveLeft()) : 38 === t.keyCode ? (this.el, this.selector.moveUp()) : 40 === t.keyCode ? (this.el, this.selector.moveDown()) : 13 === t.keyCode || 190 === t.keyCode ? this.selector.toggle() : 8 === t.keyCode || 188 === t.keyCode ? this.selector.delete({
                    isDeleteKey: !0
                }) : 27 === t.keyCode && this.selector.hide())
            })
        }
        allowKeypress(t) {
            return "grid-container" === t.id || ("BODY" === t.tagName || ("midi-button" === t.id || "mic-button" === t.id || (document.querySelector("body").classList.contains("user-is-tabbing"), !1)))
        }
    }(rr);
    var ar = new ai(Ki, rr);
    ar.connected().then(() => {
        hr.enableKeyboard()
    }), ar.on("outofbounds", () => {
        ir.flashSelector(), nr.bump()
    });
    var cr = new yi(Ki, rr);
    ir.instrument.renderer.registerDrawMethod(cr.render), new class {
        constructor() {
            window.handleFirstTab = this.handleFirstTab, window.handleMouseDownOnce = this.handleMouseDownOnce, window.addEventListener("keydown", window.handleFirstTab)
        }
        handleFirstTab(t) {
            9 === t.keyCode && (document.body.classList.add("user-is-tabbing"), window.removeEventListener("keydown", window.handleFirstTab), window.addEventListener("mousedown", window.handleMouseDownOnce))
        }
        handleMouseDownOnce() {
            document.body.classList.remove("user-is-tabbing"), window.removeEventListener("mousedown", window.handleMouseDownOnce), window.addEventListener("keydown", window.handleFirstTab)
        }
    }, (new _i).on("focus-change", t => {
        !t && document.body.classList.contains("touch-device") && nr.stop()
    });
    var ur = new Ni(document.body, rr, tr);
    ur.on("settings-update", sr), r.on("history:pop:save", t => {
        tr.replace(t.timelines), Ki.fromJSON(t.options), nr.syncWithMidiTrack(), dr.clear()
    }), ur.on("stop", () => {
        nr.stop()
    }), ur.on("back", () => {
        window.location = "/"
    }), ur.on("restart", () => {
        hr.firstLoad = !0, hr.disableSaveButton(!0)
    }), ur.on("request-wav", t => {
        nr.generateWave(t)
    }), ur.on("request-midi", () => {
        nr.downloadMidi()
    });
    var hr = new Hi(document.body, Ki);
    hr.on("play", t => {
        nr.resumeContext(), t ? nr.start("+.1", 0) : nr.stop()
    }), hr.on("play-from-selector", t => {
        if (nr.resumeContext(), t) {
            var e = 60 * Ki.totalBeats / Ki.tempo * rr.selector.position.x / Ki.totalSubBeats;
            nr.start("+.1", e)
        } else nr.stop()
    }), hr.on("restart", () => {
        hr.firstLoad = !0, hr.disableSaveButton(!0)
    }), hr.on("instrument-change", t => {
        nr.options.instrument = t, nr.options.changeInstrument(), or()
    }), hr.on("percussion-change", t => {
        nr.options.percussion = t, nr.options.changeInstrument(), or()
    }), hr.on("tempo", t => {
        nr.tempo = t, ir.updateTempo(t)
    }), hr.on("undo", () => {
        r.emit("history:undo"), tr.instrument.timeline._length + tr.percussion.timeline._length < 1 ? hr.disableSaveButton(!0) : hr.disableSaveButton(!1)
    }), hr.on("save", () => {
        dr.save(), ur.triggerShare()
    }), hr.on("stop", () => {
        nr.stop()
    }), hr.on("share", () => {
        ur.triggerShare("immediate")
    }), hr.on("settings", () => {
        ur.triggerSettingsModal(Ki)
    }), hr.on("midi", () => {
        ar.recording = !ar.recording, hr.midiRecording = ar.recording
    }), hr.on("mic", Ji((function* () {
        nr.stop(), cr.recording || (yield cr.open()), cr.recording = !cr.recording
    }))), hr.on("settings-update", sr), cr.on("start", () => {
        ar.recording = !1, hr.micRecording = cr.recording, nr.instrumentTrack.setHotMic(!0), nr.percussionTrack.setHotMic(!0), rr.selector.showNoPick()
    }), cr.on("end", () => {
        hr.micRecording = cr.recording, nr.instrumentTrack.setHotMic(!1), nr.percussionTrack.setHotMic(!1)
    }), ar.on("start", () => {
        cr.recording = !1, hr.midiRecording = ar.recording, nr.instrumentTrack.setHotMic(!0), nr.percussionTrack.setHotMic(!0), rr.selector.show()
    }), ar.on("end", () => {
        hr.midiRecording = ar.recording, nr.instrumentTrack.setHotMic(!1), nr.percussionTrack.setHotMic(!1)
    }), cr.supported().then(t => {
        t && hr.enableMicrophone()
    }), document.body.addEventListener("click", () => {
        cr.recording = !1, ar.recording = !1
    });
    var lr = !0;
    document.body.addEventListener("touchstart", () => {
        lr && (lr = !1, document.body.classList.add("touch-device")), cr.recording = !1, ar.recording = !1
    }), document.body.addEventListener("touchend", () => {
        nr.resumeContext()
    });
    var dr = new class {
        constructor(t, e) {
            this.options = t, this.midiData = e, this.emitter = new i.EventEmitter, this.url = new Wi, this.url.on("change", t => {
                this.load(t)
            })
        }
        loadSong(t) {
            if (this.load(t), document.getElementById("edit-link")) {
                var e = document.getElementById("edit-link");
                e.parentNode.getElementById("edit-link").removeChild(e)
            } else {
                var n = document.createElement("a");
                n.id = "edit-link", n.textContent = "Edit with Song Maker", n.setAttribute("target", "_blank"), n.setAttribute("href", "/Song-Maker/song/" + t), document.body.appendChild(n)
            }
        }
        save() {
            var t = this;
            return Xi((function* () {
                var e = new FormData;
                e.append("midi", t.midiData.encode(t.options)), e.append("data", JSON.stringify(t.options.toJSON()));

                nr.downloadMidi()
                var n = { "url": "https://musiclab.chromeexperiments.com/Song-Maker/song/5505167685320704", "id": 5505167685320704, "success": true }
             
                return t.emitter.emit("save-success", n), n
            }))()
        }
        load(t) {
            var e = this;
            return Xi((function* () {
                e.emitter.emit("load-start", t);
                var n = fetch("https://storage.googleapis.com/song-maker-midifiles-prod/".concat(t, ".mid")).then(e => {
                    if (e.ok) return e.arrayBuffer();
                    throw window.location = "/Song-Maker/", new Error("could not load midi file ".concat(t))
                }),
                    i = fetch("".concat("/Song-Maker/data", "/").concat(t), {
                        method: "POST"
                    }).then(e => {
                        if (e.ok) return e.json();
                        throw window.location = "/Song-Maker/", new Error("could not load data file ".concat(t))
                    }),
                    [r, o] = yield Promise.all([n, i]);
                e.options.fromJSON(o), e.midiData.decode(r, e.options)
            }))()
        }
        clear() {
            this.url.clear()
        }
    }(Ki, tr);
    dr.emitter.on("save-success", t => {
        ur.triggerShare(t)
    }), $i && dr.loadSong($i), ["images/instruments/tonal-marimba.svg", "images/instruments/perc-drum-machine.svg", "images/icon-mic.svg", "images/icon-quantity-add.svg", "images/icon-quantity-minus.svg", "images/icon-down-caret.svg", "images/instruments/tonal-piano.svg", "images/instruments/tonal-synth.svg", "images/instruments/tonal-violin.svg", "images/instruments/tonal-woodwind.svg", "images/instruments/perc-woodblock.svg", "images/instruments/perc-snare-drum.svg", "images/instruments/perc-conga.svg", "images/icon-mic-red.svg", "images/animated-mic.svg", "images/animated-midi.svg"].forEach(t => {
        (new Image).src = t
    })
}]);
