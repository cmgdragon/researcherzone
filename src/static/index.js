var b3 = Object.create, s = Object.defineProperty, p = Object.getPrototypeOf, O2 = Object.prototype.hasOwnProperty, j = Object.getOwnPropertyNames, g = Object.getOwnPropertyDescriptor;
var m = (r)=>s(r, "__esModule", {
        value: !0
    })
;
var v = (r, e)=>()=>(e || r((e = {
            exports: {
            }
        }).exports, e), e.exports)
;
var y2 = (r, e, t)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let n of j(e))!O2.call(r, n) && n !== "default" && s(r, n, {
        get: ()=>e[n]
        ,
        enumerable: !(t = g(e, n)) || t.enumerable
    });
    return r;
}, h2 = (r)=>y2(m(s(r != null ? b3(p(r)) : {
    }, "default", r && r.__esModule && "default" in r ? {
        get: ()=>r.default
        ,
        enumerable: !0
    } : {
        value: r,
        enumerable: !0
    })), r)
;
var l1 = v((q, u)=>{
    "use strict";
    var i = Object.getOwnPropertySymbols, d = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
    function P(r) {
        if (r == null) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(r);
    }
    function E() {
        try {
            if (!Object.assign) return !1;
            var r = new String("abc");
            if (r[5] = "de", Object.getOwnPropertyNames(r)[0] === "5") return !1;
            for(var e = {
            }, t = 0; t < 10; t++)e["_" + String.fromCharCode(t)] = t;
            var n = Object.getOwnPropertyNames(e).map(function(o) {
                return e[o];
            });
            if (n.join("") !== "0123456789") return !1;
            var a = {
            };
            return "abcdefghijklmnopqrst".split("").forEach(function(o) {
                a[o] = o;
            }), Object.keys(Object.assign({
            }, a)).join("") === "abcdefghijklmnopqrst";
        } catch (o) {
            return !1;
        }
    }
    u.exports = E() ? Object.assign : function(r, e) {
        for(var t, n = P(r), a, o = 1; o < arguments.length; o++){
            t = Object(arguments[o]);
            for(var f in t)d.call(t, f) && (n[f] = t[f]);
            if (i) {
                a = i(t);
                for(var c = 0; c < a.length; c++)w.call(t, a[c]) && (n[a[c]] = t[a[c]]);
            }
        }
        return n;
    };
});
var S1 = h2(l1());
var export_default = S1.default;
var W1 = Object.create, h1 = Object.defineProperty, Y1 = Object.getPrototypeOf, G = Object.prototype.hasOwnProperty, J = Object.getOwnPropertyNames, K1 = Object.getOwnPropertyDescriptor;
var Q1 = (e)=>h1(e, "__esModule", {
        value: !0
    })
;
var j1 = (e, t)=>()=>(t || e((t = {
            exports: {
            }
        }).exports, t), t.exports)
;
var X1 = (e, t, r)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let o of J(t))!G.call(e, o) && o !== "default" && h1(e, o, {
        get: ()=>t[o]
        ,
        enumerable: !(r = K1(t, o)) || r.enumerable
    });
    return e;
}, O1 = (e)=>X1(Q1(h1(e != null ? W1(Y1(e)) : {
    }, "default", e && e.__esModule && "default" in e ? {
        get: ()=>e.default
        ,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e)
;
var z5 = j1((n)=>{
    "use strict";
    var E = export_default, y1 = 60103, P = 60106;
    n.Fragment = 60107;
    n.StrictMode = 60108;
    n.Profiler = 60114;
    var x = 60109, I = 60110, w = 60112;
    n.Suspense = 60113;
    var A = 60115, F = 60116;
    typeof Symbol == "function" && Symbol.for && (l2 = Symbol.for, y1 = l2("react.element"), P = l2("react.portal"), n.Fragment = l2("react.fragment"), n.StrictMode = l2("react.strict_mode"), n.Profiler = l2("react.profiler"), x = l2("react.provider"), I = l2("react.context"), w = l2("react.forward_ref"), n.Suspense = l2("react.suspense"), A = l2("react.memo"), F = l2("react.lazy"));
    var l2, L = typeof Symbol == "function" && Symbol.iterator;
    function Z(e) {
        return e === null || typeof e != "object" ? null : (e = L && e[L] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function _(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)t += "&args[]=" + encodeURIComponent(arguments[r]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var q = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {
        },
        enqueueReplaceState: function() {
        },
        enqueueSetState: function() {
        }
    }, D = {
    };
    function d(e, t, r) {
        this.props = e, this.context = t, this.refs = D, this.updater = r || q;
    }
    d.prototype.isReactComponent = {
    };
    d.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error(_(85));
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    d.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function M() {
    }
    M.prototype = d.prototype;
    function S1(e, t, r) {
        this.props = e, this.context = t, this.refs = D, this.updater = r || q;
    }
    var C = S1.prototype = new M;
    C.constructor = S1;
    E(C, d.prototype);
    C.isPureReactComponent = !0;
    var R = {
        current: null
    }, N = Object.prototype.hasOwnProperty, U = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function T(e, t, r) {
        var o, u = {
        }, c = null, f = null;
        if (t != null) for(o in t.ref !== void 0 && (f = t.ref), t.key !== void 0 && (c = "" + t.key), t)N.call(t, o) && !U.hasOwnProperty(o) && (u[o] = t[o]);
        var s1 = arguments.length - 2;
        if (s1 === 1) u.children = r;
        else if (1 < s1) {
            for(var i = Array(s1), p1 = 0; p1 < s1; p1++)i[p1] = arguments[p1 + 2];
            u.children = i;
        }
        if (e && e.defaultProps) for(o in s1 = e.defaultProps, s1)u[o] === void 0 && (u[o] = s1[o]);
        return {
            $$typeof: y1,
            type: e,
            key: c,
            ref: f,
            props: u,
            _owner: R.current
        };
    }
    function b1(e, t) {
        return {
            $$typeof: y1,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function k(e) {
        return typeof e == "object" && e !== null && e.$$typeof === y1;
    }
    function ee(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(r) {
            return t[r];
        });
    }
    var V = /\/+/g;
    function $(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? ee("" + e.key) : t.toString(36);
    }
    function v1(e, t, r, o, u) {
        var c = typeof e;
        (c === "undefined" || c === "boolean") && (e = null);
        var f = !1;
        if (e === null) f = !0;
        else switch(c){
            case "string":
            case "number":
                f = !0;
                break;
            case "object":
                switch(e.$$typeof){
                    case y1:
                    case P:
                        f = !0;
                }
        }
        if (f) return f = e, u = u(f), e = o === "" ? "." + $(f, 0) : o, Array.isArray(u) ? (r = "", e != null && (r = e.replace(V, "$&/") + "/"), v1(u, t, r, "", function(p2) {
            return p2;
        })) : u != null && (k(u) && (u = b1(u, r + (!u.key || f && f.key === u.key ? "" : ("" + u.key).replace(V, "$&/") + "/") + e)), t.push(u)), 1;
        if (f = 0, o = o === "" ? "." : o + ":", Array.isArray(e)) for(var s1 = 0; s1 < e.length; s1++){
            c = e[s1];
            var i = o + $(c, s1);
            f += v1(c, t, r, i, u);
        }
        else if (i = Z(e), typeof i == "function") for(e = i.call(e), s1 = 0; !(c = e.next()).done;)c = c.value, i = o + $(c, s1++), f += v1(c, t, r, i, u);
        else if (c === "object") throw t = "" + e, Error(_(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
        return f;
    }
    function m1(e, t, r) {
        if (e == null) return e;
        var o = [], u = 0;
        return v1(e, o, "", "", function(c) {
            return t.call(r, c, u++);
        }), o;
    }
    function te(e) {
        if (e._status === -1) {
            var t = e._result;
            t = t(), e._status = 0, e._result = t, t.then(function(r) {
                e._status === 0 && (r = r.default, e._status = 1, e._result = r);
            }, function(r) {
                e._status === 0 && (e._status = 2, e._result = r);
            });
        }
        if (e._status === 1) return e._result;
        throw e._result;
    }
    var B = {
        current: null
    };
    function a() {
        var e = B.current;
        if (e === null) throw Error(_(321));
        return e;
    }
    var re = {
        ReactCurrentDispatcher: B,
        ReactCurrentBatchConfig: {
            transition: 0
        },
        ReactCurrentOwner: R,
        IsSomeRendererActing: {
            current: !1
        },
        assign: E
    };
    n.Children = {
        map: m1,
        forEach: function(e, t, r) {
            m1(e, function() {
                t.apply(this, arguments);
            }, r);
        },
        count: function(e) {
            var t = 0;
            return m1(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return m1(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!k(e)) throw Error(_(143));
            return e;
        }
    };
    n.Component = d;
    n.PureComponent = S1;
    n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re;
    n.cloneElement = function(e, t, r) {
        if (e == null) throw Error(_(267, e));
        var o = E({
        }, e.props), u = e.key, c = e.ref, f = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (c = t.ref, f = R.current), t.key !== void 0 && (u = "" + t.key), e.type && e.type.defaultProps) var s1 = e.type.defaultProps;
            for(i in t)N.call(t, i) && !U.hasOwnProperty(i) && (o[i] = t[i] === void 0 && s1 !== void 0 ? s1[i] : t[i]);
        }
        var i = arguments.length - 2;
        if (i === 1) o.children = r;
        else if (1 < i) {
            s1 = Array(i);
            for(var p2 = 0; p2 < i; p2++)s1[p2] = arguments[p2 + 2];
            o.children = s1;
        }
        return {
            $$typeof: y1,
            type: e.type,
            key: u,
            ref: c,
            props: o,
            _owner: f
        };
    };
    n.createContext = function(e, t) {
        return t === void 0 && (t = null), e = {
            $$typeof: I,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, e.Provider = {
            $$typeof: x,
            _context: e
        }, e.Consumer = e;
    };
    n.createElement = T;
    n.createFactory = function(e) {
        var t = T.bind(null, e);
        return t.type = e, t;
    };
    n.createRef = function() {
        return {
            current: null
        };
    };
    n.forwardRef = function(e) {
        return {
            $$typeof: w,
            render: e
        };
    };
    n.isValidElement = k;
    n.lazy = function(e) {
        return {
            $$typeof: F,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: te
        };
    };
    n.memo = function(e, t) {
        return {
            $$typeof: A,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    n.useCallback = function(e, t) {
        return a().useCallback(e, t);
    };
    n.useContext = function(e, t) {
        return a().useContext(e, t);
    };
    n.useDebugValue = function() {
    };
    n.useEffect = function(e, t) {
        return a().useEffect(e, t);
    };
    n.useImperativeHandle = function(e, t, r) {
        return a().useImperativeHandle(e, t, r);
    };
    n.useLayoutEffect = function(e, t) {
        return a().useLayoutEffect(e, t);
    };
    n.useMemo = function(e, t) {
        return a().useMemo(e, t);
    };
    n.useReducer = function(e, t, r) {
        return a().useReducer(e, t, r);
    };
    n.useRef = function(e) {
        return a().useRef(e);
    };
    n.useState = function(e) {
        return a().useState(e);
    };
    n.version = "17.0.2";
});
var g1 = j1((ce, H)=>{
    "use strict";
    H.exports = z5();
});
var ne = O1(g1()), oe = O1(g1()), { Suspense: fe , PureComponent: le , useEffect: pe1 , useMemo: ae , Profiler: ye1 , createFactory: de , isValidElement: _e , Children: ve , forwardRef: me , lazy: he , useDebugValue: Ee , StrictMode: Se , useContext: Ce , useLayoutEffect: Re , useState: ke , Fragment: $e , useImperativeHandle: ge , version: je , createContext: Oe , cloneElement: Pe , createElement: xe , createRef: Ie1 , Component: we , useReducer: Ae , useRef: Fe1 , __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Le , useCallback: qe , memo: De1  } = ne;
var export_default1 = oe.default;
var D6 = Object.create, j2 = Object.defineProperty, z1 = Object.getPrototypeOf, B = Object.prototype.hasOwnProperty, G1 = Object.getOwnPropertyNames, ee = Object.getOwnPropertyDescriptor;
var ne1 = (e)=>j2(e, "__esModule", {
        value: !0
    })
;
var H = (e, n)=>()=>(n || e((n = {
            exports: {
            }
        }).exports, n), n.exports)
;
var te = (e, n, t)=>{
    if (n && typeof n == "object" || typeof n == "function") for (let l3 of G1(n))!B.call(e, l3) && l3 !== "default" && j2(e, l3, {
        get: ()=>n[l3]
        ,
        enumerable: !(t = ee(n, l3)) || t.enumerable
    });
    return e;
}, J1 = (e)=>te(ne1(j2(e != null ? D6(z1(e)) : {
    }, "default", e && e.__esModule && "default" in e ? {
        get: ()=>e.default
        ,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e)
;
var $1 = H((r)=>{
    "use strict";
    var _, v1, g2, C;
    typeof performance == "object" && typeof performance.now == "function" ? (K2 = performance, r.unstable_now = function() {
        return K2.now();
    }) : (F = Date, Q2 = F.now(), r.unstable_now = function() {
        return F.now() - Q2;
    });
    var K2, F, Q2;
    typeof window == "undefined" || typeof MessageChannel != "function" ? (y3 = null, L = null, N = function() {
        if (y3 !== null) try {
            var e = r.unstable_now();
            y3(!0, e), y3 = null;
        } catch (n) {
            throw setTimeout(N, 0), n;
        }
    }, _ = function(e) {
        y3 !== null ? setTimeout(_, 0, e) : (y3 = e, setTimeout(N, 0));
    }, v1 = function(e, n) {
        L = setTimeout(e, n);
    }, g2 = function() {
        clearTimeout(L);
    }, r.unstable_shouldYield = function() {
        return !1;
    }, C = r.unstable_forceFrameRate = function() {
    }) : (S2 = window.setTimeout, X2 = window.clearTimeout, typeof console != "undefined" && (Z = window.cancelAnimationFrame, typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof Z != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")), h3 = !1, w = null, P = -1, E = 5, R = 0, r.unstable_shouldYield = function() {
        return r.unstable_now() >= R;
    }, C = function() {
    }, r.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < e ? Math.floor(1000 / e) : 5;
    }, q = new MessageChannel, x = q.port2, q.port1.onmessage = function() {
        if (w !== null) {
            var e = r.unstable_now();
            R = e + E;
            try {
                w(!0, e) ? x.postMessage(null) : (h3 = !1, w = null);
            } catch (n) {
                throw x.postMessage(null), n;
            }
        } else h3 = !1;
    }, _ = function(e) {
        w = e, h3 || (h3 = !0, x.postMessage(null));
    }, v1 = function(e, n) {
        P = S2(function() {
            e(r.unstable_now());
        }, n);
    }, g2 = function() {
        X2(P), P = -1;
    });
    var y3, L, N, S2, X2, Z, h3, w, P, E, R, q, x;
    function Y1(e, n) {
        var t = e.length;
        e.push(n);
        e: for(;;){
            var l3 = t - 1 >>> 1, o = e[l3];
            if (o !== void 0 && 0 < T(o, n)) e[l3] = n, e[t] = o, t = l3;
            else break e;
        }
    }
    function a(e) {
        return e = e[0], e === void 0 ? null : e;
    }
    function I(e) {
        var n = e[0];
        if (n !== void 0) {
            var t = e.pop();
            if (t !== n) {
                e[0] = t;
                e: for(var l4 = 0, o = e.length; l4 < o;){
                    var f = 2 * (l4 + 1) - 1, b1 = e[f], m1 = f + 1, d = e[m1];
                    if (b1 !== void 0 && 0 > T(b1, t)) d !== void 0 && 0 > T(d, b1) ? (e[l4] = d, e[m1] = t, l4 = m1) : (e[l4] = b1, e[f] = t, l4 = f);
                    else if (d !== void 0 && 0 > T(d, t)) e[l4] = d, e[m1] = t, l4 = m1;
                    else break e;
                }
            }
            return n;
        }
        return null;
    }
    function T(e, n) {
        var t = e.sortIndex - n.sortIndex;
        return t !== 0 ? t : e.id - n.id;
    }
    var s2 = [], c = [], re = 1, u = null, i = 3, M = !1, p3 = !1, k = !1;
    function U(e) {
        for(var n = a(c); n !== null;){
            if (n.callback === null) I(c);
            else if (n.startTime <= e) I(c), n.sortIndex = n.expirationTime, Y1(s2, n);
            else break;
            n = a(c);
        }
    }
    function W1(e) {
        if (k = !1, U(e), !p3) {
            if (a(s2) !== null) p3 = !0, _(O3);
            else {
                var n = a(c);
                n !== null && v1(W1, n.startTime - e);
            }
        }
    }
    function O3(e, n) {
        p3 = !1, k && (k = !1, g2()), M = !0;
        var t = i;
        try {
            for(U(n), u = a(s2); u !== null && (!(u.expirationTime > n) || e && !r.unstable_shouldYield());){
                var l5 = u.callback;
                if (typeof l5 == "function") {
                    u.callback = null, i = u.priorityLevel;
                    var o = l5(u.expirationTime <= n);
                    n = r.unstable_now(), typeof o == "function" ? u.callback = o : u === a(s2) && I(s2), U(n);
                } else I(s2);
                u = a(s2);
            }
            if (u !== null) var f = !0;
            else {
                var b2 = a(c);
                b2 !== null && v1(W1, b2.startTime - n), f = !1;
            }
            return f;
        } finally{
            u = null, i = t, M = !1;
        }
    }
    var le1 = C;
    r.unstable_IdlePriority = 5;
    r.unstable_ImmediatePriority = 1;
    r.unstable_LowPriority = 4;
    r.unstable_NormalPriority = 3;
    r.unstable_Profiling = null;
    r.unstable_UserBlockingPriority = 2;
    r.unstable_cancelCallback = function(e) {
        e.callback = null;
    };
    r.unstable_continueExecution = function() {
        p3 || M || (p3 = !0, _(O3));
    };
    r.unstable_getCurrentPriorityLevel = function() {
        return i;
    };
    r.unstable_getFirstCallbackNode = function() {
        return a(s2);
    };
    r.unstable_next = function(e) {
        switch(i){
            case 1:
            case 2:
            case 3:
                var n = 3;
                break;
            default:
                n = i;
        }
        var t = i;
        i = n;
        try {
            return e();
        } finally{
            i = t;
        }
    };
    r.unstable_pauseExecution = function() {
    };
    r.unstable_requestPaint = le1;
    r.unstable_runWithPriority = function(e, n) {
        switch(e){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: break;
            default:
                e = 3;
        }
        var t = i;
        i = e;
        try {
            return n();
        } finally{
            i = t;
        }
    };
    r.unstable_scheduleCallback = function(e, n, t) {
        var l6 = r.unstable_now();
        switch(typeof t == "object" && t !== null ? (t = t.delay, t = typeof t == "number" && 0 < t ? l6 + t : l6) : t = l6, e){
            case 1:
                var o = -1;
                break;
            case 2:
                o = 250;
                break;
            case 5:
                o = 1073741823;
                break;
            case 4:
                o = 10000;
                break;
            default:
                o = 5000;
        }
        return o = t + o, e = {
            id: re++,
            callback: n,
            priorityLevel: e,
            startTime: t,
            expirationTime: o,
            sortIndex: -1
        }, t > l6 ? (e.sortIndex = t, Y1(c, e), a(s2) === null && e === a(c) && (k ? g2() : k = !0, v1(W1, t - l6))) : (e.sortIndex = o, Y1(s2, e), p3 || M || (p3 = !0, _(O3))), e;
    };
    r.unstable_wrapCallback = function(e) {
        var n = i;
        return function() {
            var t = i;
            i = n;
            try {
                return e.apply(this, arguments);
            } finally{
                i = t;
            }
        };
    };
});
var V = H((se, A)=>{
    "use strict";
    A.exports = $1();
});
var ie1 = J1(V());
var export_default2 = ie1.default;
var Cs = Object.create, zr = Object.defineProperty, _s = Object.getPrototypeOf, Ns = Object.prototype.hasOwnProperty, Ps = Object.getOwnPropertyNames, Ts = Object.getOwnPropertyDescriptor;
var Ls = (e)=>zr(e, "__esModule", {
        value: !0
    })
;
var Oi = (e, n)=>()=>(n || e((n = {
            exports: {
            }
        }).exports, n), n.exports)
;
var zs = (e, n, t)=>{
    if (n && typeof n == "object" || typeof n == "function") for (let r of Ps(n))!Ns.call(e, r) && r !== "default" && zr(e, r, {
        get: ()=>n[r]
        ,
        enumerable: !(t = Ts(n, r)) || t.enumerable
    });
    return e;
}, Mi = (e)=>zs(Ls(zr(e != null ? Cs(_s(e)) : {
    }, "default", e && e.__esModule && "default" in e ? {
        get: ()=>e.default
        ,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e)
;
var Ss = Oi((ee1)=>{
    "use strict";
    var _t = export_default1, M = export_default, U = export_default2;
    function v2(e) {
        for(var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)n += "&args[]=" + encodeURIComponent(arguments[t]);
        return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    if (!_t) throw Error(v2(227));
    var Ri = new Set, On = {
    };
    function We(e, n) {
        nn(e, n), nn(e + "Capture", n);
    }
    function nn(e, n) {
        for(On[e] = n, e = 0; e < n.length; e++)Ri.add(n[e]);
    }
    var me1 = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), Os = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Di = Object.prototype.hasOwnProperty, Ii = {
    }, Fi = {
    };
    function Ms(e) {
        return Di.call(Fi, e) ? !0 : Di.call(Ii, e) ? !1 : Os.test(e) ? Fi[e] = !0 : (Ii[e] = !0, !1);
    }
    function Rs(e, n, t, r) {
        if (t !== null && t.type === 0) return !1;
        switch(typeof n){
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1;
        }
    }
    function Ds(e, n, t, r) {
        if (n === null || typeof n == "undefined" || Rs(e, n, t, r)) return !0;
        if (r) return !1;
        if (t !== null) switch(t.type){
            case 3:
                return !n;
            case 4:
                return n === !1;
            case 5:
                return isNaN(n);
            case 6:
                return isNaN(n) || 1 > n;
        }
        return !1;
    }
    function Y1(e, n, t, r, l6, i, o) {
        this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l6, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = i, this.removeEmptyString = o;
    }
    var V1 = {
    };
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        V1[e] = new Y1(e, 0, !1, e, null, !1, !1);
    });
    [
        [
            "acceptCharset",
            "accept-charset"
        ],
        [
            "className",
            "class"
        ],
        [
            "htmlFor",
            "for"
        ],
        [
            "httpEquiv",
            "http-equiv"
        ]
    ].forEach(function(e) {
        var n = e[0];
        V1[n] = new Y1(n, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        V1[e] = new Y1(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        V1[e] = new Y1(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        V1[e] = new Y1(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        V1[e] = new Y1(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        V1[e] = new Y1(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        V1[e] = new Y1(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        V1[e] = new Y1(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var Or = /[\-:]([a-z])/g;
    function Mr(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var n = e.replace(Or, Mr);
        V1[n] = new Y1(n, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var n = e.replace(Or, Mr);
        V1[n] = new Y1(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var n = e.replace(Or, Mr);
        V1[n] = new Y1(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        V1[e] = new Y1(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    V1.xlinkHref = new Y1("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        V1[e] = new Y1(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Rr(e, n, t, r) {
        var l6 = V1.hasOwnProperty(n) ? V1[n] : null, i = l6 !== null ? l6.type === 0 : r ? !1 : !(!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N");
        i || (Ds(n, t, l6, r) && (t = null), r || l6 === null ? Ms(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l6.mustUseProperty ? e[l6.propertyName] = t === null ? l6.type === 3 ? !1 : "" : t : (n = l6.attributeName, r = l6.attributeNamespace, t === null ? e.removeAttribute(n) : (l6 = l6.type, t = l6 === 3 || l6 === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
    }
    var He = _t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Mn = 60103, Ae1 = 60106, Ee1 = 60107, Dr = 60108, Rn = 60114, Ir = 60109, Fr = 60110, Nt = 60112, Dn = 60113, Pt = 60120, Tt = 60115, jr = 60116, Ur = 60121, Vr = 60128, ji = 60129, Br = 60130, Wr = 60131;
    typeof Symbol == "function" && Symbol.for && (F = Symbol.for, Mn = F("react.element"), Ae1 = F("react.portal"), Ee1 = F("react.fragment"), Dr = F("react.strict_mode"), Rn = F("react.profiler"), Ir = F("react.provider"), Fr = F("react.context"), Nt = F("react.forward_ref"), Dn = F("react.suspense"), Pt = F("react.suspense_list"), Tt = F("react.memo"), jr = F("react.lazy"), Ur = F("react.block"), F("react.scope"), Vr = F("react.opaque.id"), ji = F("react.debug_trace_mode"), Br = F("react.offscreen"), Wr = F("react.legacy_hidden"));
    var F, Ui = typeof Symbol == "function" && Symbol.iterator;
    function In(e) {
        return e === null || typeof e != "object" ? null : (e = Ui && e[Ui] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var Hr;
    function Fn(e) {
        if (Hr === void 0) try {
            throw Error();
        } catch (t) {
            var n = t.stack.trim().match(/\n( *(at )?)/);
            Hr = n && n[1] || "";
        }
        return `\n` + Hr + e;
    }
    var Ar = !1;
    function Lt(e, n) {
        if (!e || Ar) return "";
        Ar = !0;
        var t = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (n) {
                if (n = function() {
                    throw Error();
                }, Object.defineProperty(n.prototype, "props", {
                    set: function() {
                        throw Error();
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(n, []);
                    } catch (s3) {
                        var r = s3;
                    }
                    Reflect.construct(e, [], n);
                } else {
                    try {
                        n.call();
                    } catch (s3) {
                        r = s3;
                    }
                    e.call(n.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (s3) {
                    r = s3;
                }
                e();
            }
        } catch (s3) {
            if (s3 && r && typeof s3.stack == "string") {
                for(var l6 = s3.stack.split(`\n`), i = r.stack.split(`\n`), o = l6.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l6[o] !== i[u];)u--;
                for(; 1 <= o && 0 <= u; o--, u--)if (l6[o] !== i[u]) {
                    if (o !== 1 || u !== 1) do if (o--, u--, 0 > u || l6[o] !== i[u]) return `\n` + l6[o].replace(" at new ", " at ");
                    while (1 <= o && 0 <= u)
                    break;
                }
            }
        } finally{
            Ar = !1, Error.prepareStackTrace = t;
        }
        return (e = e ? e.displayName || e.name : "") ? Fn(e) : "";
    }
    function Is(e) {
        switch(e.tag){
            case 5:
                return Fn(e.type);
            case 16:
                return Fn("Lazy");
            case 13:
                return Fn("Suspense");
            case 19:
                return Fn("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = Lt(e.type, !1), e;
            case 11:
                return e = Lt(e.type.render, !1), e;
            case 22:
                return e = Lt(e.type._render, !1), e;
            case 1:
                return e = Lt(e.type, !0), e;
            default:
                return "";
        }
    }
    function tn(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case Ee1:
                return "Fragment";
            case Ae1:
                return "Portal";
            case Rn:
                return "Profiler";
            case Dr:
                return "StrictMode";
            case Dn:
                return "Suspense";
            case Pt:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case Fr:
                return (e.displayName || "Context") + ".Consumer";
            case Ir:
                return (e._context.displayName || "Context") + ".Provider";
            case Nt:
                var n = e.render;
                return n = n.displayName || n.name || "", e.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
            case Tt:
                return tn(e.type);
            case Ur:
                return tn(e._render);
            case jr:
                n = e._payload, e = e._init;
                try {
                    return tn(e(n));
                } catch (t) {
                }
        }
        return null;
    }
    function ke1(e) {
        switch(typeof e){
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return e;
            default:
                return "";
        }
    }
    function Vi(e) {
        var n = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
    }
    function Fs(e) {
        var n = Vi(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
        if (!e.hasOwnProperty(n) && typeof t != "undefined" && typeof t.get == "function" && typeof t.set == "function") {
            var l7 = t.get, i = t.set;
            return Object.defineProperty(e, n, {
                configurable: !0,
                get: function() {
                    return l7.call(this);
                },
                set: function(o) {
                    r = "" + o, i.call(this, o);
                }
            }), Object.defineProperty(e, n, {
                enumerable: t.enumerable
            }), {
                getValue: function() {
                    return r;
                },
                setValue: function(o) {
                    r = "" + o;
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[n];
                }
            };
        }
    }
    function zt(e) {
        e._valueTracker || (e._valueTracker = Fs(e));
    }
    function Bi(e) {
        if (!e) return !1;
        var n = e._valueTracker;
        if (!n) return !0;
        var t = n.getValue(), r = "";
        return e && (r = Vi(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
    }
    function Ot(e) {
        if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined") return null;
        try {
            return e.activeElement || e.body;
        } catch (n) {
            return e.body;
        }
    }
    function Qr(e, n) {
        var t = n.checked;
        return M({
        }, n, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: t ?? e._wrapperState.initialChecked
        });
    }
    function Wi(e, n) {
        var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
        t = ke1(n.value != null ? n.value : t), e._wrapperState = {
            initialChecked: r,
            initialValue: t,
            controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
        };
    }
    function Hi(e, n) {
        n = n.checked, n != null && Rr(e, "checked", n, !1);
    }
    function Yr(e, n) {
        Hi(e, n);
        var t = ke1(n.value), r = n.type;
        if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        n.hasOwnProperty("value") ? $r(e, n.type, t) : n.hasOwnProperty("defaultValue") && $r(e, n.type, ke1(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
    }
    function Ai(e, n, t) {
        if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
            var r = n.type;
            if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
            n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
        }
        t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
    }
    function $r(e, n, t) {
        (n !== "number" || Ot(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
    }
    function js(e) {
        var n = "";
        return _t.Children.forEach(e, function(t) {
            t != null && (n += t);
        }), n;
    }
    function Xr(e, n) {
        return e = M({
            children: void 0
        }, n), (n = js(n.children)) && (e.children = n), e;
    }
    function rn(e, n, t, r) {
        if (e = e.options, n) {
            n = {
            };
            for(var l8 = 0; l8 < t.length; l8++)n["$" + t[l8]] = !0;
            for(t = 0; t < e.length; t++)l8 = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l8 && (e[t].selected = l8), l8 && r && (e[t].defaultSelected = !0);
        } else {
            for(t = "" + ke1(t), n = null, l8 = 0; l8 < e.length; l8++){
                if (e[l8].value === t) {
                    e[l8].selected = !0, r && (e[l8].defaultSelected = !0);
                    return;
                }
                n !== null || e[l8].disabled || (n = e[l8]);
            }
            n !== null && (n.selected = !0);
        }
    }
    function Kr(e, n) {
        if (n.dangerouslySetInnerHTML != null) throw Error(v2(91));
        return M({
        }, n, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function Qi(e, n) {
        var t = n.value;
        if (t == null) {
            if (t = n.children, n = n.defaultValue, t != null) {
                if (n != null) throw Error(v2(92));
                if (Array.isArray(t)) {
                    if (!(1 >= t.length)) throw Error(v2(93));
                    t = t[0];
                }
                n = t;
            }
            n == null && (n = ""), t = n;
        }
        e._wrapperState = {
            initialValue: ke1(t)
        };
    }
    function $i(e, n) {
        var t = ke1(n.value), r = ke1(n.defaultValue);
        t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
    }
    function Yi(e) {
        var n = e.textContent;
        n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
    }
    var Gr = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };
    function Xi(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function Zr(e, n) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Xi(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var Mt, Ki = function(e) {
        return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l9) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(n, t, r, l9);
            });
        } : e;
    }(function(e, n) {
        if (e.namespaceURI !== Gr.svg || "innerHTML" in e) e.innerHTML = n;
        else {
            for(Mt = Mt || document.createElement("div"), Mt.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Mt.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; n.firstChild;)e.appendChild(n.firstChild);
        }
    });
    function jn(e, n) {
        if (n) {
            var t = e.firstChild;
            if (t && t === e.lastChild && t.nodeType === 3) {
                t.nodeValue = n;
                return;
            }
        }
        e.textContent = n;
    }
    var Un = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }, Us = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(Un).forEach(function(e) {
        Us.forEach(function(n) {
            n = n + e.charAt(0).toUpperCase() + e.substring(1), Un[n] = Un[e];
        });
    });
    function Gi(e, n, t) {
        return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Un.hasOwnProperty(e) && Un[e] ? ("" + n).trim() : n + "px";
    }
    function Zi(e, n) {
        e = e.style;
        for(var t in n)if (n.hasOwnProperty(t)) {
            var r = t.indexOf("--") === 0, l9 = Gi(t, n[t], r);
            t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l9) : e[t] = l9;
        }
    }
    var Vs = M({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function Jr(e, n) {
        if (n) {
            if (Vs[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(v2(137, e));
            if (n.dangerouslySetInnerHTML != null) {
                if (n.children != null) throw Error(v2(60));
                if (!(typeof n.dangerouslySetInnerHTML == "object" && "__html" in n.dangerouslySetInnerHTML)) throw Error(v2(61));
            }
            if (n.style != null && typeof n.style != "object") throw Error(v2(62));
        }
    }
    function qr(e, n) {
        if (e.indexOf("-") === -1) return typeof n.is == "string";
        switch(e){
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0;
        }
    }
    function br(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var el = null, ln = null, on = null;
    function Ji(e) {
        if (e = Vn(e)) {
            if (typeof el != "function") throw Error(v2(280));
            var n = e.stateNode;
            n && (n = Rt(n), el(e.stateNode, e.type, n));
        }
    }
    function qi(e) {
        ln ? on ? on.push(e) : on = [
            e
        ] : ln = e;
    }
    function bi() {
        if (ln) {
            var e = ln, n = on;
            if (on = ln = null, Ji(e), n) for(e = 0; e < n.length; e++)Ji(n[e]);
        }
    }
    function nl(e, n) {
        return e(n);
    }
    function eo(e, n, t, r, l10) {
        return e(n, t, r, l10);
    }
    function tl() {
    }
    var no = nl, Qe = !1, rl = !1;
    function ll() {
        (ln !== null || on !== null) && (tl(), bi());
    }
    function Bs(e, n, t) {
        if (rl) return e(n, t);
        rl = !0;
        try {
            return no(e, n, t);
        } finally{
            rl = !1, ll();
        }
    }
    function Bn(e, n) {
        var t = e.stateNode;
        if (t === null) return null;
        var r = Rt(t);
        if (r === null) return null;
        t = r[n];
        e: switch(n){
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (t && typeof t != "function") throw Error(v2(231, n, typeof t));
        return t;
    }
    var il = !1;
    if (me1) try {
        un = {
        }, Object.defineProperty(un, "passive", {
            get: function() {
                il = !0;
            }
        }), window.addEventListener("test", un, un), window.removeEventListener("test", un, un);
    } catch (e) {
        il = !1;
    }
    var un;
    function Ws(e, n, t, r, l10, i, o, u, s3) {
        var d = Array.prototype.slice.call(arguments, 3);
        try {
            n.apply(t, d);
        } catch (y4) {
            this.onError(y4);
        }
    }
    var Wn = !1, Dt = null, It = !1, ol = null, Hs = {
        onError: function(e) {
            Wn = !0, Dt = e;
        }
    };
    function As(e, n, t, r, l10, i, o, u, s3) {
        Wn = !1, Dt = null, Ws.apply(Hs, arguments);
    }
    function Qs(e, n, t, r, l10, i, o, u, s3) {
        if (As.apply(this, arguments), Wn) {
            if (Wn) {
                var d = Dt;
                Wn = !1, Dt = null;
            } else throw Error(v2(198));
            It || (It = !0, ol = d);
        }
    }
    function $e1(e) {
        var n = e, t = e;
        if (e.alternate) for(; n.return;)n = n.return;
        else {
            e = n;
            do n = e, (n.flags & 1026) != 0 && (t = n.return), e = n.return;
            while (e)
        }
        return n.tag === 3 ? t : null;
    }
    function to(e) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
        }
        return null;
    }
    function ro(e) {
        if ($e1(e) !== e) throw Error(v2(188));
    }
    function $s(e) {
        var n = e.alternate;
        if (!n) {
            if (n = $e1(e), n === null) throw Error(v2(188));
            return n !== e ? null : e;
        }
        for(var t = e, r = n;;){
            var l10 = t.return;
            if (l10 === null) break;
            var i = l10.alternate;
            if (i === null) {
                if (r = l10.return, r !== null) {
                    t = r;
                    continue;
                }
                break;
            }
            if (l10.child === i.child) {
                for(i = l10.child; i;){
                    if (i === t) return ro(l10), e;
                    if (i === r) return ro(l10), n;
                    i = i.sibling;
                }
                throw Error(v2(188));
            }
            if (t.return !== r.return) t = l10, r = i;
            else {
                for(var o = !1, u = l10.child; u;){
                    if (u === t) {
                        o = !0, t = l10, r = i;
                        break;
                    }
                    if (u === r) {
                        o = !0, r = l10, t = i;
                        break;
                    }
                    u = u.sibling;
                }
                if (!o) {
                    for(u = i.child; u;){
                        if (u === t) {
                            o = !0, t = i, r = l10;
                            break;
                        }
                        if (u === r) {
                            o = !0, r = i, t = l10;
                            break;
                        }
                        u = u.sibling;
                    }
                    if (!o) throw Error(v2(189));
                }
            }
            if (t.alternate !== r) throw Error(v2(190));
        }
        if (t.tag !== 3) throw Error(v2(188));
        return t.stateNode.current === t ? e : n;
    }
    function lo(e) {
        if (e = $s(e), !e) return null;
        for(var n = e;;){
            if (n.tag === 5 || n.tag === 6) return n;
            if (n.child) n.child.return = n, n = n.child;
            else {
                if (n === e) break;
                for(; !n.sibling;){
                    if (!n.return || n.return === e) return null;
                    n = n.return;
                }
                n.sibling.return = n.return, n = n.sibling;
            }
        }
        return null;
    }
    function io(e, n) {
        for(var t = e.alternate; n !== null;){
            if (n === e || n === t) return !0;
            n = n.return;
        }
        return !1;
    }
    var oo, ul, uo, so, sl = !1, se = [], xe1 = null, Ce1 = null, _e1 = null, Hn = new Map, An = new Map, Qn = [], ao = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function al(e, n, t, r, l11) {
        return {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: t | 16,
            nativeEvent: l11,
            targetContainers: [
                r
            ]
        };
    }
    function fo(e, n) {
        switch(e){
            case "focusin":
            case "focusout":
                xe1 = null;
                break;
            case "dragenter":
            case "dragleave":
                Ce1 = null;
                break;
            case "mouseover":
            case "mouseout":
                _e1 = null;
                break;
            case "pointerover":
            case "pointerout":
                Hn.delete(n.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                An.delete(n.pointerId);
        }
    }
    function $n(e, n, t, r, l11, i) {
        return e === null || e.nativeEvent !== i ? (e = al(n, t, r, l11, i), n !== null && (n = Vn(n), n !== null && ul(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l11 !== null && n.indexOf(l11) === -1 && n.push(l11), e);
    }
    function Ys(e, n, t, r, l11) {
        switch(n){
            case "focusin":
                return xe1 = $n(xe1, e, n, t, r, l11), !0;
            case "dragenter":
                return Ce1 = $n(Ce1, e, n, t, r, l11), !0;
            case "mouseover":
                return _e1 = $n(_e1, e, n, t, r, l11), !0;
            case "pointerover":
                var i = l11.pointerId;
                return Hn.set(i, $n(Hn.get(i) || null, e, n, t, r, l11)), !0;
            case "gotpointercapture":
                return i = l11.pointerId, An.set(i, $n(An.get(i) || null, e, n, t, r, l11)), !0;
        }
        return !1;
    }
    function Xs(e) {
        var n = Ye(e.target);
        if (n !== null) {
            var t = $e1(n);
            if (t !== null) {
                if (n = t.tag, n === 13) {
                    if (n = to(t), n !== null) {
                        e.blockedOn = n, so(e.lanePriority, function() {
                            U.unstable_runWithPriority(e.priority, function() {
                                uo(t);
                            });
                        });
                        return;
                    }
                } else if (n === 3 && t.stateNode.hydrate) {
                    e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function Ft(e) {
        if (e.blockedOn !== null) return !1;
        for(var n = e.targetContainers; 0 < n.length;){
            var t = fl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
            if (t !== null) return n = Vn(t), n !== null && ul(n), e.blockedOn = t, !1;
            n.shift();
        }
        return !0;
    }
    function co(e, n, t) {
        Ft(e) && t.delete(n);
    }
    function Ks() {
        for(sl = !1; 0 < se.length;){
            var e = se[0];
            if (e.blockedOn !== null) {
                e = Vn(e.blockedOn), e !== null && oo(e);
                break;
            }
            for(var n = e.targetContainers; 0 < n.length;){
                var t = fl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
                if (t !== null) {
                    e.blockedOn = t;
                    break;
                }
                n.shift();
            }
            e.blockedOn === null && se.shift();
        }
        xe1 !== null && Ft(xe1) && (xe1 = null), Ce1 !== null && Ft(Ce1) && (Ce1 = null), _e1 !== null && Ft(_e1) && (_e1 = null), Hn.forEach(co), An.forEach(co);
    }
    function Yn(e, n) {
        e.blockedOn === n && (e.blockedOn = null, sl || (sl = !0, U.unstable_scheduleCallback(U.unstable_NormalPriority, Ks)));
    }
    function po(e) {
        function n(l11) {
            return Yn(l11, e);
        }
        if (0 < se.length) {
            Yn(se[0], e);
            for(var t = 1; t < se.length; t++){
                var r = se[t];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(xe1 !== null && Yn(xe1, e), Ce1 !== null && Yn(Ce1, e), _e1 !== null && Yn(_e1, e), Hn.forEach(n), An.forEach(n), t = 0; t < Qn.length; t++)r = Qn[t], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < Qn.length && (t = Qn[0], t.blockedOn === null);)Xs(t), t.blockedOn === null && Qn.shift();
    }
    function jt(e, n) {
        var t = {
        };
        return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
    }
    var sn = {
        animationend: jt("Animation", "AnimationEnd"),
        animationiteration: jt("Animation", "AnimationIteration"),
        animationstart: jt("Animation", "AnimationStart"),
        transitionend: jt("Transition", "TransitionEnd")
    }, cl = {
    }, mo = {
    };
    me1 && (mo = document.createElement("div").style, "AnimationEvent" in window || (delete sn.animationend.animation, delete sn.animationiteration.animation, delete sn.animationstart.animation), "TransitionEvent" in window || delete sn.transitionend.transition);
    function Ut(e) {
        if (cl[e]) return cl[e];
        if (!sn[e]) return e;
        var n = sn[e], t;
        for(t in n)if (n.hasOwnProperty(t) && t in mo) return cl[e] = n[t];
        return e;
    }
    var ho = Ut("animationend"), vo = Ut("animationiteration"), yo = Ut("animationstart"), go = Ut("transitionend"), wo = new Map, dl = new Map, Gs = [
        "abort",
        "abort",
        ho,
        "animationEnd",
        vo,
        "animationIteration",
        yo,
        "animationStart",
        "canplay",
        "canPlay",
        "canplaythrough",
        "canPlayThrough",
        "durationchange",
        "durationChange",
        "emptied",
        "emptied",
        "encrypted",
        "encrypted",
        "ended",
        "ended",
        "error",
        "error",
        "gotpointercapture",
        "gotPointerCapture",
        "load",
        "load",
        "loadeddata",
        "loadedData",
        "loadedmetadata",
        "loadedMetadata",
        "loadstart",
        "loadStart",
        "lostpointercapture",
        "lostPointerCapture",
        "playing",
        "playing",
        "progress",
        "progress",
        "seeking",
        "seeking",
        "stalled",
        "stalled",
        "suspend",
        "suspend",
        "timeupdate",
        "timeUpdate",
        go,
        "transitionEnd",
        "waiting",
        "waiting"
    ];
    function pl(e, n) {
        for(var t = 0; t < e.length; t += 2){
            var r = e[t], l11 = e[t + 1];
            l11 = "on" + (l11[0].toUpperCase() + l11.slice(1)), dl.set(r, n), wo.set(r, l11), We(l11, [
                r
            ]);
        }
    }
    var Zs = U.unstable_now;
    Zs();
    var L = 8;
    function an(e) {
        if ((1 & e) != 0) return L = 15, 1;
        if ((2 & e) != 0) return L = 14, 2;
        if ((4 & e) != 0) return L = 13, 4;
        var n = 24 & e;
        return n !== 0 ? (L = 12, n) : (e & 32) != 0 ? (L = 11, 32) : (n = 192 & e, n !== 0 ? (L = 10, n) : (e & 256) != 0 ? (L = 9, 256) : (n = 3584 & e, n !== 0 ? (L = 8, n) : (e & 4096) != 0 ? (L = 7, 4096) : (n = 4186112 & e, n !== 0 ? (L = 6, n) : (n = 62914560 & e, n !== 0 ? (L = 5, n) : e & 67108864 ? (L = 4, 67108864) : (e & 134217728) != 0 ? (L = 3, 134217728) : (n = 805306368 & e, n !== 0 ? (L = 2, n) : (1073741824 & e) != 0 ? (L = 1, 1073741824) : (L = 8, e))))));
    }
    function Js(e) {
        switch(e){
            case 99:
                return 15;
            case 98:
                return 10;
            case 97:
            case 96:
                return 8;
            case 95:
                return 2;
            default:
                return 0;
        }
    }
    function qs(e) {
        switch(e){
            case 15:
            case 14:
                return 99;
            case 13:
            case 12:
            case 11:
            case 10:
                return 98;
            case 9:
            case 8:
            case 7:
            case 6:
            case 4:
            case 5:
                return 97;
            case 3:
            case 2:
            case 1:
                return 95;
            case 0:
                return 90;
            default:
                throw Error(v2(358, e));
        }
    }
    function Xn(e, n) {
        var t = e.pendingLanes;
        if (t === 0) return L = 0;
        var r = 0, l12 = 0, i = e.expiredLanes, o = e.suspendedLanes, u = e.pingedLanes;
        if (i !== 0) r = i, l12 = L = 15;
        else if (i = t & 134217727, i !== 0) {
            var s3 = i & ~o;
            s3 !== 0 ? (r = an(s3), l12 = L) : (u &= i, u !== 0 && (r = an(u), l12 = L));
        } else i = t & ~o, i !== 0 ? (r = an(i), l12 = L) : u !== 0 && (r = an(u), l12 = L);
        if (r === 0) return 0;
        if (r = 31 - Ne(r), r = t & ((0 > r ? 0 : 1 << r) << 1) - 1, n !== 0 && n !== r && (n & o) == 0) {
            if (an(n), l12 <= L) return n;
            L = l12;
        }
        if (n = e.entangledLanes, n !== 0) for(e = e.entanglements, n &= r; 0 < n;)t = 31 - Ne(n), l12 = 1 << t, r |= e[t], n &= ~l12;
        return r;
    }
    function So(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Vt(e, n) {
        switch(e){
            case 15:
                return 1;
            case 14:
                return 2;
            case 12:
                return e = fn(24 & ~n), e === 0 ? Vt(10, n) : e;
            case 10:
                return e = fn(192 & ~n), e === 0 ? Vt(8, n) : e;
            case 8:
                return e = fn(3584 & ~n), e === 0 && (e = fn(4186112 & ~n), e === 0 && (e = 512)), e;
            case 2:
                return n = fn(805306368 & ~n), n === 0 && (n = 268435456), n;
        }
        throw Error(v2(358, e));
    }
    function fn(e) {
        return e & -e;
    }
    function ml(e) {
        for(var n = [], t = 0; 31 > t; t++)n.push(e);
        return n;
    }
    function Bt(e, n, t) {
        e.pendingLanes |= n;
        var r = n - 1;
        e.suspendedLanes &= r, e.pingedLanes &= r, e = e.eventTimes, n = 31 - Ne(n), e[n] = t;
    }
    var Ne = Math.clz32 ? Math.clz32 : bs, ea = Math.log, na = Math.LN2;
    function bs(e) {
        return e === 0 ? 32 : 31 - (ea(e) / na | 0) | 0;
    }
    var ta = U.unstable_UserBlockingPriority, ra = U.unstable_runWithPriority, Wt = !0;
    function la(e, n, t, r) {
        Qe || tl();
        var l12 = hl, i = Qe;
        Qe = !0;
        try {
            eo(l12, e, n, t, r);
        } finally{
            (Qe = i) || ll();
        }
    }
    function ia(e, n, t, r) {
        ra(ta, hl.bind(null, e, n, t, r));
    }
    function hl(e, n, t, r) {
        if (Wt) {
            var l12;
            if ((l12 = (n & 4) == 0) && 0 < se.length && -1 < ao.indexOf(e)) e = al(null, e, n, t, r), se.push(e);
            else {
                var i = fl(e, n, t, r);
                if (i === null) l12 && fo(e, r);
                else {
                    if (l12) {
                        if (-1 < ao.indexOf(e)) {
                            e = al(i, e, n, t, r), se.push(e);
                            return;
                        }
                        if (Ys(i, e, n, t, r)) return;
                        fo(e, r);
                    }
                    Eo(e, n, r, null, t);
                }
            }
        }
    }
    function fl(e, n, t, r) {
        var l13 = br(r);
        if (l13 = Ye(l13), l13 !== null) {
            var i = $e1(l13);
            if (i === null) l13 = null;
            else {
                var o = i.tag;
                if (o === 13) {
                    if (l13 = to(i), l13 !== null) return l13;
                    l13 = null;
                } else if (o === 3) {
                    if (i.stateNode.hydrate) return i.tag === 3 ? i.stateNode.containerInfo : null;
                    l13 = null;
                } else i !== l13 && (l13 = null);
            }
        }
        return Eo(e, n, r, l13, t), null;
    }
    var Pe1 = null, vl = null, Ht = null;
    function ko() {
        if (Ht) return Ht;
        var e, n = vl, t = n.length, r, l13 = "value" in Pe1 ? Pe1.value : Pe1.textContent, i = l13.length;
        for(e = 0; e < t && n[e] === l13[e]; e++);
        var o = t - e;
        for(r = 1; r <= o && n[t - r] === l13[i - r]; r++);
        return Ht = l13.slice(e, 1 < r ? 1 - r : void 0);
    }
    function At(e) {
        var n = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Qt() {
        return !0;
    }
    function xo() {
        return !1;
    }
    function q(e) {
        function n(t, r, l13, i, o) {
            this._reactName = t, this._targetInst = l13, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
            for(var u in e)e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(i) : i[u]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Qt : xo, this.isPropagationStopped = xo, this;
        }
        return M(n.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Qt);
            },
            stopPropagation: function() {
                var t = this.nativeEvent;
                t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Qt);
            },
            persist: function() {
            },
            isPersistent: Qt
        }), n;
    }
    var cn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, yl = q(cn), Kn = M({
    }, cn, {
        view: 0,
        detail: 0
    }), oa = q(Kn), gl, wl, Gn, $t = M({
    }, Kn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Sl,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Gn && (Gn && e.type === "mousemove" ? (gl = e.screenX - Gn.screenX, wl = e.screenY - Gn.screenY) : wl = gl = 0, Gn = e), gl);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : wl;
        }
    }), Co = q($t), ua = M({
    }, $t, {
        dataTransfer: 0
    }), sa = q(ua), aa = M({
    }, Kn, {
        relatedTarget: 0
    }), El = q(aa), fa = M({
    }, cn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), ca = q(fa), da = M({
    }, cn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), pa = q(da), ma = M({
    }, cn, {
        data: 0
    }), _o = q(ma), ha = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, va = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, ya = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function ga(e) {
        var n = this.nativeEvent;
        return n.getModifierState ? n.getModifierState(e) : (e = ya[e]) ? !!n[e] : !1;
    }
    function Sl() {
        return ga;
    }
    var wa = M({
    }, Kn, {
        key: function(e) {
            if (e.key) {
                var n = ha[e.key] || e.key;
                if (n !== "Unidentified") return n;
            }
            return e.type === "keypress" ? (e = At(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? va[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Sl,
        charCode: function(e) {
            return e.type === "keypress" ? At(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? At(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), Sa = q(wa), Ea = M({
    }, $t, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }), No = q(Ea), ka = M({
    }, Kn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Sl
    }), xa = q(ka), Ca = M({
    }, cn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), _a = q(Ca), Na = M({
    }, $t, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), Pa = q(Na), Ta = [
        9,
        13,
        27,
        32
    ], kl = me1 && "CompositionEvent" in window, Zn = null;
    me1 && "documentMode" in document && (Zn = document.documentMode);
    var La = me1 && "TextEvent" in window && !Zn, Po = me1 && (!kl || Zn && 8 < Zn && 11 >= Zn), To = String.fromCharCode(32), Lo = !1;
    function zo(e, n) {
        switch(e){
            case "keyup":
                return Ta.indexOf(n.keyCode) !== -1;
            case "keydown":
                return n.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1;
        }
    }
    function Oo(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var dn = !1;
    function za(e, n) {
        switch(e){
            case "compositionend":
                return Oo(n);
            case "keypress":
                return n.which !== 32 ? null : (Lo = !0, To);
            case "textInput":
                return e = n.data, e === To && Lo ? null : e;
            default:
                return null;
        }
    }
    function Oa(e, n) {
        if (dn) return e === "compositionend" || !kl && zo(e, n) ? (e = ko(), Ht = vl = Pe1 = null, dn = !1, e) : null;
        switch(e){
            case "paste":
                return null;
            case "keypress":
                if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                    if (n.char && 1 < n.char.length) return n.char;
                    if (n.which) return String.fromCharCode(n.which);
                }
                return null;
            case "compositionend":
                return Po && n.locale !== "ko" ? null : n.data;
            default:
                return null;
        }
    }
    var Ma = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Mo(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n === "input" ? !!Ma[e.type] : n === "textarea";
    }
    function Ro(e, n, t, r) {
        qi(r), n = Yt(n, "onChange"), 0 < n.length && (t = new yl("onChange", "change", null, t, r), e.push({
            event: t,
            listeners: n
        }));
    }
    var Jn = null, qn = null;
    function Ra(e) {
        Do(e, 0);
    }
    function Xt(e) {
        var n = pn(e);
        if (Bi(n)) return e;
    }
    function Da(e, n) {
        if (e === "change") return n;
    }
    var Io = !1;
    me1 && (me1 ? (Gt = "oninput" in document, Gt || (xl = document.createElement("div"), xl.setAttribute("oninput", "return;"), Gt = typeof xl.oninput == "function"), Kt = Gt) : Kt = !1, Io = Kt && (!document.documentMode || 9 < document.documentMode));
    var Kt, Gt, xl;
    function jo() {
        Jn && (Jn.detachEvent("onpropertychange", Fo), qn = Jn = null);
    }
    function Fo(e) {
        if (e.propertyName === "value" && Xt(qn)) {
            var n = [];
            if (Ro(n, qn, e, br(e)), e = Ra, Qe) e(n);
            else {
                Qe = !0;
                try {
                    nl(e, n);
                } finally{
                    Qe = !1, ll();
                }
            }
        }
    }
    function Ia(e, n, t) {
        e === "focusin" ? (jo(), Jn = n, qn = t, Jn.attachEvent("onpropertychange", Fo)) : e === "focusout" && jo();
    }
    function Fa(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Xt(qn);
    }
    function ja(e, n) {
        if (e === "click") return Xt(n);
    }
    function Ua(e, n) {
        if (e === "input" || e === "change") return Xt(n);
    }
    function Va(e, n) {
        return e === n && (e !== 0 || 1 / e == 1 / n) || e !== e && n !== n;
    }
    var ne2 = typeof Object.is == "function" ? Object.is : Va, Ba = Object.prototype.hasOwnProperty;
    function bn(e, n) {
        if (ne2(e, n)) return !0;
        if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
        var t = Object.keys(e), r = Object.keys(n);
        if (t.length !== r.length) return !1;
        for(r = 0; r < t.length; r++)if (!Ba.call(n, t[r]) || !ne2(e[t[r]], n[t[r]])) return !1;
        return !0;
    }
    function Uo(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function Vo(e, n) {
        var t = Uo(e);
        e = 0;
        for(var r; t;){
            if (t.nodeType === 3) {
                if (r = e + t.textContent.length, e <= n && r >= n) return {
                    node: t,
                    offset: n - e
                };
                e = r;
            }
            e: {
                for(; t;){
                    if (t.nextSibling) {
                        t = t.nextSibling;
                        break e;
                    }
                    t = t.parentNode;
                }
                t = void 0;
            }
            t = Uo(t);
        }
    }
    function Bo(e, n) {
        return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Bo(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
    }
    function Wo() {
        for(var e = window, n = Ot(); n instanceof e.HTMLIFrameElement;){
            try {
                var t = typeof n.contentWindow.location.href == "string";
            } catch (r) {
                t = !1;
            }
            if (t) e = n.contentWindow;
            else break;
            n = Ot(e.document);
        }
        return n;
    }
    function Cl(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
    }
    var Wa = me1 && "documentMode" in document && 11 >= document.documentMode, mn = null, _l = null, et = null, Nl = !1;
    function Ho(e, n, t) {
        var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
        Nl || mn == null || mn !== Ot(r) || (r = mn, "selectionStart" in r && Cl(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), et && bn(et, r) || (et = r, r = Yt(_l, "onSelect"), 0 < r.length && (n = new yl("onSelect", "select", null, n, t), e.push({
            event: n,
            listeners: r
        }), n.target = mn)));
    }
    pl("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
    pl("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
    pl(Gs, 2);
    for(var Ao = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Pl = 0; Pl < Ao.length; Pl++)dl.set(Ao[Pl], 0);
    nn("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    nn("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    nn("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    nn("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]);
    We("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    We("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    We("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    We("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    We("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    We("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var nt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Qo = new Set("cancel close invalid load scroll toggle".split(" ").concat(nt));
    function $o(e, n, t) {
        var r = e.type || "unknown-event";
        e.currentTarget = t, Qs(r, n, void 0, e), e.currentTarget = null;
    }
    function Do(e, n) {
        n = (n & 4) != 0;
        for(var t = 0; t < e.length; t++){
            var r = e[t], l13 = r.event;
            r = r.listeners;
            e: {
                var i = void 0;
                if (n) for(var o = r.length - 1; 0 <= o; o--){
                    var u = r[o], s4 = u.instance, d = u.currentTarget;
                    if (u = u.listener, s4 !== i && l13.isPropagationStopped()) break e;
                    $o(l13, u, d), i = s4;
                }
                else for(o = 0; o < r.length; o++){
                    if (u = r[o], s4 = u.instance, d = u.currentTarget, u = u.listener, s4 !== i && l13.isPropagationStopped()) break e;
                    $o(l13, u, d), i = s4;
                }
            }
        }
        if (It) throw e = ol, It = !1, ol = null, e;
    }
    function z2(e, n) {
        var t = Xo(n), r = e + "__bubble";
        t.has(r) || (Yo(n, e, 2, !1), t.add(r));
    }
    var Ko = "_reactListening" + Math.random().toString(36).slice(2);
    function Zo(e) {
        e[Ko] || (e[Ko] = !0, Ri.forEach(function(n) {
            Qo.has(n) || Go(n, !1, e, null), Go(n, !0, e, null);
        }));
    }
    function Go(e, n, t, r) {
        var l14 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, i = t;
        if (e === "selectionchange" && t.nodeType !== 9 && (i = t.ownerDocument), r !== null && !n && Qo.has(e)) {
            if (e !== "scroll") return;
            l14 |= 2, i = r;
        }
        var o = Xo(i), u = e + "__" + (n ? "capture" : "bubble");
        o.has(u) || (n && (l14 |= 4), Yo(i, e, l14, n), o.add(u));
    }
    function Yo(e, n, t, r) {
        var l14 = dl.get(n);
        switch(l14 === void 0 ? 2 : l14){
            case 0:
                l14 = la;
                break;
            case 1:
                l14 = ia;
                break;
            default:
                l14 = hl;
        }
        t = l14.bind(null, n, t, e), l14 = void 0, !il || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l14 = !0), r ? l14 !== void 0 ? e.addEventListener(n, t, {
            capture: !0,
            passive: l14
        }) : e.addEventListener(n, t, !0) : l14 !== void 0 ? e.addEventListener(n, t, {
            passive: l14
        }) : e.addEventListener(n, t, !1);
    }
    function Eo(e, n, t, r, l14) {
        var i = r;
        if ((n & 1) == 0 && (n & 2) == 0 && r !== null) e: for(;;){
            if (r === null) return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l14 || u.nodeType === 8 && u.parentNode === l14) break;
                if (o === 4) for(o = r.return; o !== null;){
                    var s5 = o.tag;
                    if ((s5 === 3 || s5 === 4) && (s5 = o.stateNode.containerInfo, s5 === l14 || s5.nodeType === 8 && s5.parentNode === l14)) return;
                    o = o.return;
                }
                for(; u !== null;){
                    if (o = Ye(u), o === null) return;
                    if (s5 = o.tag, s5 === 5 || s5 === 6) {
                        r = i = o;
                        continue e;
                    }
                    u = u.parentNode;
                }
            }
            r = r.return;
        }
        Bs(function() {
            var d = i, y4 = br(t), C = [];
            e: {
                var h4 = wo.get(e);
                if (h4 !== void 0) {
                    var S3 = yl, k = e;
                    switch(e){
                        case "keypress":
                            if (At(t) === 0) break e;
                        case "keydown":
                        case "keyup":
                            S3 = Sa;
                            break;
                        case "focusin":
                            k = "focus", S3 = El;
                            break;
                        case "focusout":
                            k = "blur", S3 = El;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            S3 = El;
                            break;
                        case "click":
                            if (t.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            S3 = Co;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            S3 = sa;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            S3 = xa;
                            break;
                        case ho:
                        case vo:
                        case yo:
                            S3 = ca;
                            break;
                        case go:
                            S3 = _a;
                            break;
                        case "scroll":
                            S3 = oa;
                            break;
                        case "wheel":
                            S3 = Pa;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            S3 = pa;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            S3 = No;
                    }
                    var E = (n & 4) != 0, c = !E && e === "scroll", a = E ? h4 !== null ? h4 + "Capture" : null : h4;
                    E = [];
                    for(var f = d, p4; f !== null;){
                        p4 = f;
                        var m2 = p4.stateNode;
                        if (p4.tag === 5 && m2 !== null && (p4 = m2, a !== null && (m2 = Bn(f, a), m2 != null && E.push(tt(f, m2, p4)))), c) break;
                        f = f.return;
                    }
                    0 < E.length && (h4 = new S3(h4, k, null, t, y4), C.push({
                        event: h4,
                        listeners: E
                    }));
                }
            }
            if ((n & 7) == 0) {
                e: {
                    if (h4 = e === "mouseover" || e === "pointerover", S3 = e === "mouseout" || e === "pointerout", h4 && (n & 16) == 0 && (k = t.relatedTarget || t.fromElement) && (Ye(k) || k[vn])) break e;
                    if ((S3 || h4) && (h4 = y4.window === y4 ? y4 : (h4 = y4.ownerDocument) ? h4.defaultView || h4.parentWindow : window, S3 ? (k = t.relatedTarget || t.toElement, S3 = d, k = k ? Ye(k) : null, k !== null && (c = $e1(k), k !== c || k.tag !== 5 && k.tag !== 6) && (k = null)) : (S3 = null, k = d), S3 !== k)) {
                        if (E = Co, m2 = "onMouseLeave", a = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (E = No, m2 = "onPointerLeave", a = "onPointerEnter", f = "pointer"), c = S3 == null ? h4 : pn(S3), p4 = k == null ? h4 : pn(k), h4 = new E(m2, f + "leave", S3, t, y4), h4.target = c, h4.relatedTarget = p4, m2 = null, Ye(y4) === d && (E = new E(a, f + "enter", k, t, y4), E.target = p4, E.relatedTarget = c, m2 = E), c = m2, S3 && k) n: {
                            for(E = S3, a = k, f = 0, p4 = E; p4; p4 = hn(p4))f++;
                            for(p4 = 0, m2 = a; m2; m2 = hn(m2))p4++;
                            for(; 0 < f - p4;)E = hn(E), f--;
                            for(; 0 < p4 - f;)a = hn(a), p4--;
                            for(; f--;){
                                if (E === a || a !== null && E === a.alternate) break n;
                                E = hn(E), a = hn(a);
                            }
                            E = null;
                        }
                        else E = null;
                        S3 !== null && Jo(C, h4, S3, E, !1), k !== null && c !== null && Jo(C, c, k, E, !0);
                    }
                }
                e: {
                    if (h4 = d ? pn(d) : window, S3 = h4.nodeName && h4.nodeName.toLowerCase(), S3 === "select" || S3 === "input" && h4.type === "file") var _ = Da;
                    else if (Mo(h4)) {
                        if (Io) _ = Ua;
                        else {
                            _ = Fa;
                            var w = Ia;
                        }
                    } else (S3 = h4.nodeName) && S3.toLowerCase() === "input" && (h4.type === "checkbox" || h4.type === "radio") && (_ = ja);
                    if (_ && (_ = _(e, d))) {
                        Ro(C, _, t, y4);
                        break e;
                    }
                    w && w(e, h4, d), e === "focusout" && (w = h4._wrapperState) && w.controlled && h4.type === "number" && $r(h4, "number", h4.value);
                }
                switch(w = d ? pn(d) : window, e){
                    case "focusin":
                        (Mo(w) || w.contentEditable === "true") && (mn = w, _l = d, et = null);
                        break;
                    case "focusout":
                        et = _l = mn = null;
                        break;
                    case "mousedown":
                        Nl = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Nl = !1, Ho(C, t, y4);
                        break;
                    case "selectionchange":
                        if (Wa) break;
                    case "keydown":
                    case "keyup":
                        Ho(C, t, y4);
                }
                var N;
                if (kl) e: {
                    switch(e){
                        case "compositionstart":
                            var T = "onCompositionStart";
                            break e;
                        case "compositionend":
                            T = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            T = "onCompositionUpdate";
                            break e;
                    }
                    T = void 0;
                }
                else dn ? zo(e, t) && (T = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (T = "onCompositionStart");
                T && (Po && t.locale !== "ko" && (dn || T !== "onCompositionStart" ? T === "onCompositionEnd" && dn && (N = ko()) : (Pe1 = y4, vl = "value" in Pe1 ? Pe1.value : Pe1.textContent, dn = !0)), w = Yt(d, T), 0 < w.length && (T = new _o(T, e, null, t, y4), C.push({
                    event: T,
                    listeners: w
                }), N ? T.data = N : (N = Oo(t), N !== null && (T.data = N)))), (N = La ? za(e, t) : Oa(e, t)) && (d = Yt(d, "onBeforeInput"), 0 < d.length && (y4 = new _o("onBeforeInput", "beforeinput", null, t, y4), C.push({
                    event: y4,
                    listeners: d
                }), y4.data = N));
            }
            Do(C, n);
        });
    }
    function tt(e, n, t) {
        return {
            instance: e,
            listener: n,
            currentTarget: t
        };
    }
    function Yt(e, n) {
        for(var t = n + "Capture", r = []; e !== null;){
            var l14 = e, i = l14.stateNode;
            l14.tag === 5 && i !== null && (l14 = i, i = Bn(e, t), i != null && r.unshift(tt(e, i, l14)), i = Bn(e, n), i != null && r.push(tt(e, i, l14))), e = e.return;
        }
        return r;
    }
    function hn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5)
        return e || null;
    }
    function Jo(e, n, t, r, l15) {
        for(var i = n._reactName, o = []; t !== null && t !== r;){
            var u = t, s6 = u.alternate, d = u.stateNode;
            if (s6 !== null && s6 === r) break;
            u.tag === 5 && d !== null && (u = d, l15 ? (s6 = Bn(t, i), s6 != null && o.unshift(tt(t, s6, u))) : l15 || (s6 = Bn(t, i), s6 != null && o.push(tt(t, s6, u)))), t = t.return;
        }
        o.length !== 0 && e.push({
            event: n,
            listeners: o
        });
    }
    function Zt() {
    }
    var Tl = null, Ll = null;
    function qo(e, n) {
        switch(e){
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!n.autoFocus;
        }
        return !1;
    }
    function zl(e, n) {
        return e === "textarea" || e === "option" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
    }
    var bo = typeof setTimeout == "function" ? setTimeout : void 0, Ha = typeof clearTimeout == "function" ? clearTimeout : void 0;
    function Ol(e) {
        e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ""));
    }
    function yn(e) {
        for(; e != null; e = e.nextSibling){
            var n = e.nodeType;
            if (n === 1 || n === 3) break;
        }
        return e;
    }
    function eu(e) {
        e = e.previousSibling;
        for(var n = 0; e;){
            if (e.nodeType === 8) {
                var t = e.data;
                if (t === "$" || t === "$!" || t === "$?") {
                    if (n === 0) return e;
                    n--;
                } else t === "/$" && n++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    var Ml = 0;
    function Aa(e) {
        return {
            $$typeof: Vr,
            toString: e,
            valueOf: e
        };
    }
    var Jt = Math.random().toString(36).slice(2), Te = "__reactFiber$" + Jt, qt = "__reactProps$" + Jt, vn = "__reactContainer$" + Jt, nu = "__reactEvents$" + Jt;
    function Ye(e) {
        var n = e[Te];
        if (n) return n;
        for(var t = e.parentNode; t;){
            if (n = t[vn] || t[Te]) {
                if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for(e = eu(e); e !== null;){
                    if (t = e[Te]) return t;
                    e = eu(e);
                }
                return n;
            }
            e = t, t = e.parentNode;
        }
        return null;
    }
    function Vn(e) {
        return e = e[Te] || e[vn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function pn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(v2(33));
    }
    function Rt(e) {
        return e[qt] || null;
    }
    function Xo(e) {
        var n = e[nu];
        return n === void 0 && (n = e[nu] = new Set), n;
    }
    var Rl = [], gn = -1;
    function Le1(e) {
        return {
            current: e
        };
    }
    function O3(e) {
        0 > gn || (e.current = Rl[gn], Rl[gn] = null, gn--);
    }
    function R(e, n) {
        gn++, Rl[gn] = e.current, e.current = n;
    }
    var ze = {
    }, H1 = Le1(ze), K3 = Le1(!1), Xe = ze;
    function wn(e, n) {
        var t = e.type.contextTypes;
        if (!t) return ze;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
        var l15 = {
        }, i;
        for(i in t)l15[i] = n[i];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l15), l15;
    }
    function G2(e) {
        return e = e.childContextTypes, e != null;
    }
    function bt() {
        O3(K3), O3(H1);
    }
    function tu(e, n, t) {
        if (H1.current !== ze) throw Error(v2(168));
        R(H1, n), R(K3, t);
    }
    function ru(e, n, t) {
        var r = e.stateNode;
        if (e = n.childContextTypes, typeof r.getChildContext != "function") return t;
        r = r.getChildContext();
        for(var l15 in r)if (!(l15 in e)) throw Error(v2(108, tn(n) || "Unknown", l15));
        return M({
        }, t, r);
    }
    function er(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ze, Xe = H1.current, R(H1, e), R(K3, K3.current), !0;
    }
    function lu(e, n, t) {
        var r = e.stateNode;
        if (!r) throw Error(v2(169));
        t ? (e = ru(e, n, Xe), r.__reactInternalMemoizedMergedChildContext = e, O3(K3), O3(H1), R(H1, e)) : O3(K3), R(K3, t);
    }
    var Dl = null, Ke = null, Qa = U.unstable_runWithPriority, Il = U.unstable_scheduleCallback, Fl = U.unstable_cancelCallback, $a = U.unstable_shouldYield, iu = U.unstable_requestPaint, jl = U.unstable_now, Ya = U.unstable_getCurrentPriorityLevel, nr = U.unstable_ImmediatePriority, ou = U.unstable_UserBlockingPriority, uu = U.unstable_NormalPriority, su = U.unstable_LowPriority, au = U.unstable_IdlePriority, Ul = {
    }, Xa = iu !== void 0 ? iu : function() {
    }, he1 = null, tr = null, Vl = !1, fu = jl(), A = 10000 > fu ? jl : function() {
        return jl() - fu;
    };
    function Sn() {
        switch(Ya()){
            case nr:
                return 99;
            case ou:
                return 98;
            case uu:
                return 97;
            case su:
                return 96;
            case au:
                return 95;
            default:
                throw Error(v2(332));
        }
    }
    function cu(e) {
        switch(e){
            case 99:
                return nr;
            case 98:
                return ou;
            case 97:
                return uu;
            case 96:
                return su;
            case 95:
                return au;
            default:
                throw Error(v2(332));
        }
    }
    function Ge(e, n) {
        return e = cu(e), Qa(e, n);
    }
    function rt(e, n, t) {
        return e = cu(e), Il(e, n, t);
    }
    function ae1() {
        if (tr !== null) {
            var e = tr;
            tr = null, Fl(e);
        }
        du();
    }
    function du() {
        if (!Vl && he1 !== null) {
            Vl = !0;
            var e = 0;
            try {
                var n = he1;
                Ge(99, function() {
                    for(; e < n.length; e++){
                        var t = n[e];
                        do t = t(!0);
                        while (t !== null)
                    }
                }), he1 = null;
            } catch (t) {
                throw he1 !== null && (he1 = he1.slice(e + 1)), Il(nr, ae1), t;
            } finally{
                Vl = !1;
            }
        }
    }
    var Ka = He.ReactCurrentBatchConfig;
    function oe1(e, n) {
        if (e && e.defaultProps) {
            n = M({
            }, n), e = e.defaultProps;
            for(var t in e)n[t] === void 0 && (n[t] = e[t]);
            return n;
        }
        return n;
    }
    var rr = Le1(null), lr = null, En = null, ir = null;
    function Bl() {
        ir = En = lr = null;
    }
    function Wl(e) {
        var n = rr.current;
        O3(rr), e.type._context._currentValue = n;
    }
    function pu(e, n) {
        for(; e !== null;){
            var t = e.alternate;
            if ((e.childLanes & n) === n) {
                if (t === null || (t.childLanes & n) === n) break;
                t.childLanes |= n;
            } else e.childLanes |= n, t !== null && (t.childLanes |= n);
            e = e.return;
        }
    }
    function kn(e, n) {
        lr = e, ir = En = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) != 0 && (ue = !0), e.firstContext = null);
    }
    function te1(e, n) {
        if (ir !== e && n !== !1 && n !== 0) {
            if ((typeof n != "number" || n === 1073741823) && (ir = e, n = 1073741823), n = {
                context: e,
                observedBits: n,
                next: null
            }, En === null) {
                if (lr === null) throw Error(v2(308));
                En = n, lr.dependencies = {
                    lanes: 0,
                    firstContext: n,
                    responders: null
                };
            } else En = En.next = n;
        }
        return e._currentValue;
    }
    var Oe1 = !1;
    function Hl(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null
            },
            effects: null
        };
    }
    function mu(e, n) {
        e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        });
    }
    function Me(e, n) {
        return {
            eventTime: e,
            lane: n,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        };
    }
    function Re1(e, n) {
        if (e = e.updateQueue, e !== null) {
            e = e.shared;
            var t = e.pending;
            t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
        }
    }
    function hu(e, n) {
        var t = e.updateQueue, r = e.alternate;
        if (r !== null && (r = r.updateQueue, t === r)) {
            var l15 = null, i = null;
            if (t = t.firstBaseUpdate, t !== null) {
                do {
                    var o = {
                        eventTime: t.eventTime,
                        lane: t.lane,
                        tag: t.tag,
                        payload: t.payload,
                        callback: t.callback,
                        next: null
                    };
                    i === null ? l15 = i = o : i = i.next = o, t = t.next;
                }while (t !== null)
                i === null ? l15 = i = n : i = i.next = n;
            } else l15 = i = n;
            t = {
                baseState: r.baseState,
                firstBaseUpdate: l15,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects
            }, e.updateQueue = t;
            return;
        }
        e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
    }
    function it(e, n, t, r) {
        var l16 = e.updateQueue;
        Oe1 = !1;
        var i = l16.firstBaseUpdate, o = l16.lastBaseUpdate, u = l16.shared.pending;
        if (u !== null) {
            l16.shared.pending = null;
            var s7 = u, d = s7.next;
            s7.next = null, o === null ? i = d : o.next = d, o = s7;
            var y4 = e.alternate;
            if (y4 !== null) {
                y4 = y4.updateQueue;
                var C = y4.lastBaseUpdate;
                C !== o && (C === null ? y4.firstBaseUpdate = d : C.next = d, y4.lastBaseUpdate = s7);
            }
        }
        if (i !== null) {
            C = l16.baseState, o = 0, y4 = d = s7 = null;
            do {
                u = i.lane;
                var h5 = i.eventTime;
                if ((r & u) === u) {
                    y4 !== null && (y4 = y4.next = {
                        eventTime: h5,
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null
                    });
                    e: {
                        var S4 = e, k = i;
                        switch(u = n, h5 = t, k.tag){
                            case 1:
                                if (S4 = k.payload, typeof S4 == "function") {
                                    C = S4.call(h5, C, u);
                                    break e;
                                }
                                C = S4;
                                break e;
                            case 3:
                                S4.flags = S4.flags & -4097 | 64;
                            case 0:
                                if (S4 = k.payload, u = typeof S4 == "function" ? S4.call(h5, C, u) : S4, u == null) break e;
                                C = M({
                                }, C, u);
                                break e;
                            case 2:
                                Oe1 = !0;
                        }
                    }
                    i.callback !== null && (e.flags |= 32, u = l16.effects, u === null ? l16.effects = [
                        i
                    ] : u.push(i));
                } else h5 = {
                    eventTime: h5,
                    lane: u,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                }, y4 === null ? (d = y4 = h5, s7 = C) : y4 = y4.next = h5, o |= u;
                if (i = i.next, i === null) {
                    if (u = l16.shared.pending, u === null) break;
                    i = u.next, u.next = null, l16.lastBaseUpdate = u, l16.shared.pending = null;
                }
            }while (1)
            y4 === null && (s7 = C), l16.baseState = s7, l16.firstBaseUpdate = d, l16.lastBaseUpdate = y4, lt |= o, e.lanes = o, e.memoizedState = C;
        }
    }
    function vu(e, n, t) {
        if (e = n.effects, n.effects = null, e !== null) for(n = 0; n < e.length; n++){
            var r = e[n], l16 = r.callback;
            if (l16 !== null) {
                if (r.callback = null, r = t, typeof l16 != "function") throw Error(v2(191, l16));
                l16.call(r);
            }
        }
    }
    var yu = new _t.Component().refs;
    function or(e, n, t, r) {
        n = e.memoizedState, t = t(r, n), t = t == null ? n : M({
        }, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
    }
    var ur = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? $e1(e) === e : !1;
        },
        enqueueSetState: function(e, n, t) {
            e = e._reactInternals;
            var r = b4(), l17 = De2(e), i = Me(r, l17);
            i.payload = n, t != null && (i.callback = t), Re1(e, i), Ie2(e, l17, r);
        },
        enqueueReplaceState: function(e, n, t) {
            e = e._reactInternals;
            var r = b4(), l17 = De2(e), i = Me(r, l17);
            i.tag = 1, i.payload = n, t != null && (i.callback = t), Re1(e, i), Ie2(e, l17, r);
        },
        enqueueForceUpdate: function(e, n) {
            e = e._reactInternals;
            var t = b4(), r = De2(e), l17 = Me(t, r);
            l17.tag = 2, n != null && (l17.callback = n), Re1(e, l17), Ie2(e, r, t);
        }
    };
    function gu(e, n, t, r, l17, i, o) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : n.prototype && n.prototype.isPureReactComponent ? !bn(t, r) || !bn(l17, i) : !0;
    }
    function wu(e, n, t) {
        var r = !1, l17 = ze, i = n.contextType;
        return typeof i == "object" && i !== null ? i = te1(i) : (l17 = G2(n) ? Xe : H1.current, r = n.contextTypes, i = (r = r != null) ? wn(e, l17) : ze), n = new n(t, i), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = ur, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l17, e.__reactInternalMemoizedMaskedChildContext = i), n;
    }
    function Su(e, n, t, r) {
        e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && ur.enqueueReplaceState(n, n.state, null);
    }
    function Al(e, n, t, r) {
        var l17 = e.stateNode;
        l17.props = t, l17.state = e.memoizedState, l17.refs = yu, Hl(e);
        var i = n.contextType;
        typeof i == "object" && i !== null ? l17.context = te1(i) : (i = G2(n) ? Xe : H1.current, l17.context = wn(e, i)), it(e, t, l17, r), l17.state = e.memoizedState, i = n.getDerivedStateFromProps, typeof i == "function" && (or(e, n, i, t), l17.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l17.getSnapshotBeforeUpdate == "function" || typeof l17.UNSAFE_componentWillMount != "function" && typeof l17.componentWillMount != "function" || (n = l17.state, typeof l17.componentWillMount == "function" && l17.componentWillMount(), typeof l17.UNSAFE_componentWillMount == "function" && l17.UNSAFE_componentWillMount(), n !== l17.state && ur.enqueueReplaceState(l17, l17.state, null), it(e, t, l17, r), l17.state = e.memoizedState), typeof l17.componentDidMount == "function" && (e.flags |= 4);
    }
    var sr = Array.isArray;
    function ot(e, n, t) {
        if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (t._owner) {
                if (t = t._owner, t) {
                    if (t.tag !== 1) throw Error(v2(309));
                    var r = t.stateNode;
                }
                if (!r) throw Error(v2(147, e));
                var l17 = "" + e;
                return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === l17 ? n.ref : (n = function(i) {
                    var o = r.refs;
                    o === yu && (o = r.refs = {
                    }), i === null ? delete o[l17] : o[l17] = i;
                }, n._stringRef = l17, n);
            }
            if (typeof e != "string") throw Error(v2(284));
            if (!t._owner) throw Error(v2(290, e));
        }
        return e;
    }
    function ar(e, n) {
        if (e.type !== "textarea") throw Error(v2(31, Object.prototype.toString.call(n) === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : n));
    }
    function Eu(e) {
        function n(c, a) {
            if (e) {
                var f = c.lastEffect;
                f !== null ? (f.nextEffect = a, c.lastEffect = a) : c.firstEffect = c.lastEffect = a, a.nextEffect = null, a.flags = 8;
            }
        }
        function t(c, a) {
            if (!e) return null;
            for(; a !== null;)n(c, a), a = a.sibling;
            return null;
        }
        function r(c, a) {
            for(c = new Map; a !== null;)a.key !== null ? c.set(a.key, a) : c.set(a.index, a), a = a.sibling;
            return c;
        }
        function l18(c, a) {
            return c = Fe2(c, a), c.index = 0, c.sibling = null, c;
        }
        function i(c, a, f) {
            return c.index = f, e ? (f = c.alternate, f !== null ? (f = f.index, f < a ? (c.flags = 2, a) : f) : (c.flags = 2, a)) : a;
        }
        function o(c) {
            return e && c.alternate === null && (c.flags = 2), c;
        }
        function u(c, a, f, p5) {
            return a === null || a.tag !== 6 ? (a = Ql(f, c.mode, p5), a.return = c, a) : (a = l18(a, f), a.return = c, a);
        }
        function s8(c, a, f, p5) {
            return a !== null && a.elementType === f.type ? (p5 = l18(a, f.props), p5.ref = ot(c, a, f), p5.return = c, p5) : (p5 = fr(f.type, f.key, f.props, null, c.mode, p5), p5.ref = ot(c, a, f), p5.return = c, p5);
        }
        function d(c, a, f, p5) {
            return a === null || a.tag !== 4 || a.stateNode.containerInfo !== f.containerInfo || a.stateNode.implementation !== f.implementation ? (a = $l(f, c.mode, p5), a.return = c, a) : (a = l18(a, f.children || []), a.return = c, a);
        }
        function y5(c, a, f, p5, m3) {
            return a === null || a.tag !== 7 ? (a = xn(f, c.mode, p5, m3), a.return = c, a) : (a = l18(a, f), a.return = c, a);
        }
        function C(c, a, f) {
            if (typeof a == "string" || typeof a == "number") return a = Ql("" + a, c.mode, f), a.return = c, a;
            if (typeof a == "object" && a !== null) {
                switch(a.$$typeof){
                    case Mn:
                        return f = fr(a.type, a.key, a.props, null, c.mode, f), f.ref = ot(c, null, a), f.return = c, f;
                    case Ae1:
                        return a = $l(a, c.mode, f), a.return = c, a;
                }
                if (sr(a) || In(a)) return a = xn(a, c.mode, f, null), a.return = c, a;
                ar(c, a);
            }
            return null;
        }
        function h6(c, a, f, p5) {
            var m3 = a !== null ? a.key : null;
            if (typeof f == "string" || typeof f == "number") return m3 !== null ? null : u(c, a, "" + f, p5);
            if (typeof f == "object" && f !== null) {
                switch(f.$$typeof){
                    case Mn:
                        return f.key === m3 ? f.type === Ee1 ? y5(c, a, f.props.children, p5, m3) : s8(c, a, f, p5) : null;
                    case Ae1:
                        return f.key === m3 ? d(c, a, f, p5) : null;
                }
                if (sr(f) || In(f)) return m3 !== null ? null : y5(c, a, f, p5, null);
                ar(c, f);
            }
            return null;
        }
        function S5(c, a, f, p5, m3) {
            if (typeof p5 == "string" || typeof p5 == "number") return c = c.get(f) || null, u(a, c, "" + p5, m3);
            if (typeof p5 == "object" && p5 !== null) {
                switch(p5.$$typeof){
                    case Mn:
                        return c = c.get(p5.key === null ? f : p5.key) || null, p5.type === Ee1 ? y5(a, c, p5.props.children, m3, p5.key) : s8(a, c, p5, m3);
                    case Ae1:
                        return c = c.get(p5.key === null ? f : p5.key) || null, d(a, c, p5, m3);
                }
                if (sr(p5) || In(p5)) return c = c.get(f) || null, y5(a, c, p5, m3, null);
                ar(a, p5);
            }
            return null;
        }
        function k(c, a, f, p5) {
            for(var m3 = null, _ = null, w = a, N = a = 0, T = null; w !== null && N < f.length; N++){
                w.index > N ? (T = w, w = null) : T = w.sibling;
                var P = h6(c, w, f[N], p5);
                if (P === null) {
                    w === null && (w = T);
                    break;
                }
                e && w && P.alternate === null && n(c, w), a = i(P, a, N), _ === null ? m3 = P : _.sibling = P, _ = P, w = T;
            }
            if (N === f.length) return t(c, w), m3;
            if (w === null) {
                for(; N < f.length; N++)w = C(c, f[N], p5), w !== null && (a = i(w, a, N), _ === null ? m3 = w : _.sibling = w, _ = w);
                return m3;
            }
            for(w = r(c, w); N < f.length; N++)T = S5(w, c, N, f[N], p5), T !== null && (e && T.alternate !== null && w.delete(T.key === null ? N : T.key), a = i(T, a, N), _ === null ? m3 = T : _.sibling = T, _ = T);
            return e && w.forEach(function(Se1) {
                return n(c, Se1);
            }), m3;
        }
        function E(c, a, f, p5) {
            var m3 = In(f);
            if (typeof m3 != "function") throw Error(v2(150));
            if (f = m3.call(f), f == null) throw Error(v2(151));
            for(var _ = m3 = null, w = a, N = a = 0, T = null, P = f.next(); w !== null && !P.done; N++, P = f.next()){
                w.index > N ? (T = w, w = null) : T = w.sibling;
                var Se1 = h6(c, w, P.value, p5);
                if (Se1 === null) {
                    w === null && (w = T);
                    break;
                }
                e && w && Se1.alternate === null && n(c, w), a = i(Se1, a, N), _ === null ? m3 = Se1 : _.sibling = Se1, _ = Se1, w = T;
            }
            if (P.done) return t(c, w), m3;
            if (w === null) {
                for(; !P.done; N++, P = f.next())P = C(c, P.value, p5), P !== null && (a = i(P, a, N), _ === null ? m3 = P : _.sibling = P, _ = P);
                return m3;
            }
            for(w = r(c, w); !P.done; N++, P = f.next())P = S5(w, c, N, P.value, p5), P !== null && (e && P.alternate !== null && w.delete(P.key === null ? N : P.key), a = i(P, a, N), _ === null ? m3 = P : _.sibling = P, _ = P);
            return e && w.forEach(function(xs) {
                return n(c, xs);
            }), m3;
        }
        return function(c, a, f, p5) {
            var m3 = typeof f == "object" && f !== null && f.type === Ee1 && f.key === null;
            m3 && (f = f.props.children);
            var _ = typeof f == "object" && f !== null;
            if (_) switch(f.$$typeof){
                case Mn:
                    e: {
                        for(_ = f.key, m3 = a; m3 !== null;){
                            if (m3.key === _) {
                                switch(m3.tag){
                                    case 7:
                                        if (f.type === Ee1) {
                                            t(c, m3.sibling), a = l18(m3, f.props.children), a.return = c, c = a;
                                            break e;
                                        }
                                        break;
                                    default:
                                        if (m3.elementType === f.type) {
                                            t(c, m3.sibling), a = l18(m3, f.props), a.ref = ot(c, m3, f), a.return = c, c = a;
                                            break e;
                                        }
                                }
                                t(c, m3);
                                break;
                            } else n(c, m3);
                            m3 = m3.sibling;
                        }
                        f.type === Ee1 ? (a = xn(f.props.children, c.mode, p5, f.key), a.return = c, c = a) : (p5 = fr(f.type, f.key, f.props, null, c.mode, p5), p5.ref = ot(c, a, f), p5.return = c, c = p5);
                    }
                    return o(c);
                case Ae1:
                    e: {
                        for(m3 = f.key; a !== null;){
                            if (a.key === m3) {
                                if (a.tag === 4 && a.stateNode.containerInfo === f.containerInfo && a.stateNode.implementation === f.implementation) {
                                    t(c, a.sibling), a = l18(a, f.children || []), a.return = c, c = a;
                                    break e;
                                } else {
                                    t(c, a);
                                    break;
                                }
                            } else n(c, a);
                            a = a.sibling;
                        }
                        a = $l(f, c.mode, p5), a.return = c, c = a;
                    }
                    return o(c);
            }
            if (typeof f == "string" || typeof f == "number") return f = "" + f, a !== null && a.tag === 6 ? (t(c, a.sibling), a = l18(a, f), a.return = c, c = a) : (t(c, a), a = Ql(f, c.mode, p5), a.return = c, c = a), o(c);
            if (sr(f)) return k(c, a, f, p5);
            if (In(f)) return E(c, a, f, p5);
            if (_ && ar(c, f), typeof f == "undefined" && !m3) switch(c.tag){
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                    throw Error(v2(152, tn(c.type) || "Component"));
            }
            return t(c, a);
        };
    }
    var cr = Eu(!0), ku = Eu(!1), ut = {
    }, fe1 = Le1(ut), st = Le1(ut), at = Le1(ut);
    function Ze(e) {
        if (e === ut) throw Error(v2(174));
        return e;
    }
    function Yl(e, n) {
        switch(R(at, n), R(st, e), R(fe1, ut), e = n.nodeType, e){
            case 9:
            case 11:
                n = (n = n.documentElement) ? n.namespaceURI : Zr(null, "");
                break;
            default:
                e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Zr(n, e);
        }
        O3(fe1), R(fe1, n);
    }
    function Cn() {
        O3(fe1), O3(st), O3(at);
    }
    function xu(e) {
        Ze(at.current);
        var n = Ze(fe1.current), t = Zr(n, e.type);
        n !== t && (R(st, e), R(fe1, t));
    }
    function Xl(e) {
        st.current === e && (O3(fe1), O3(st));
    }
    var D1 = Le1(0);
    function dr(e) {
        for(var n = e; n !== null;){
            if (n.tag === 13) {
                var t = n.memoizedState;
                if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
            } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
                if ((n.flags & 64) != 0) return n;
            } else if (n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
            }
            if (n === e) break;
            for(; n.sibling === null;){
                if (n.return === null || n.return === e) return null;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        }
        return null;
    }
    var ve1 = null, je1 = null, ce = !1;
    function Cu(e, n) {
        var t = re(5, null, null, 0);
        t.elementType = "DELETED", t.type = "DELETED", t.stateNode = n, t.return = e, t.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = t, e.lastEffect = t) : e.firstEffect = e.lastEffect = t;
    }
    function _u(e, n) {
        switch(e.tag){
            case 5:
                var t = e.type;
                return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, !0) : !1;
            case 6:
                return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, !0) : !1;
            case 13:
                return !1;
            default:
                return !1;
        }
    }
    function Kl(e) {
        if (ce) {
            var n = je1;
            if (n) {
                var t = n;
                if (!_u(e, n)) {
                    if (n = yn(t.nextSibling), !n || !_u(e, n)) {
                        e.flags = e.flags & -1025 | 2, ce = !1, ve1 = e;
                        return;
                    }
                    Cu(ve1, t);
                }
                ve1 = e, je1 = yn(n.firstChild);
            } else e.flags = e.flags & -1025 | 2, ce = !1, ve1 = e;
        }
    }
    function Nu(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        ve1 = e;
    }
    function pr(e) {
        if (e !== ve1) return !1;
        if (!ce) return Nu(e), ce = !0, !1;
        var n = e.type;
        if (e.tag !== 5 || n !== "head" && n !== "body" && !zl(n, e.memoizedProps)) for(n = je1; n;)Cu(e, n), n = yn(n.nextSibling);
        if (Nu(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(v2(317));
            e: {
                for(e = e.nextSibling, n = 0; e;){
                    if (e.nodeType === 8) {
                        var t = e.data;
                        if (t === "/$") {
                            if (n === 0) {
                                je1 = yn(e.nextSibling);
                                break e;
                            }
                            n--;
                        } else t !== "$" && t !== "$!" && t !== "$?" || n++;
                    }
                    e = e.nextSibling;
                }
                je1 = null;
            }
        } else je1 = ve1 ? yn(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Gl() {
        je1 = ve1 = null, ce = !1;
    }
    var _n = [];
    function Zl() {
        for(var e = 0; e < _n.length; e++)_n[e]._workInProgressVersionPrimary = null;
        _n.length = 0;
    }
    var ft = He.ReactCurrentDispatcher, le2 = He.ReactCurrentBatchConfig, ct = 0, I = null, Q3 = null, B1 = null, mr = !1, dt = !1;
    function Z() {
        throw Error(v2(321));
    }
    function Jl(e, n) {
        if (n === null) return !1;
        for(var t = 0; t < n.length && t < e.length; t++)if (!ne2(e[t], n[t])) return !1;
        return !0;
    }
    function ql(e, n, t, r, l18, i) {
        if (ct = i, I = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, ft.current = e === null || e.memoizedState === null ? Ga : Za, e = t(r, l18), dt) {
            i = 0;
            do {
                if (dt = !1, !(25 > i)) throw Error(v2(301));
                i += 1, B1 = Q3 = null, n.updateQueue = null, ft.current = Ja, e = t(r, l18);
            }while (dt)
        }
        if (ft.current = hr, n = Q3 !== null && Q3.next !== null, ct = 0, B1 = Q3 = I = null, mr = !1, n) throw Error(v2(300));
        return e;
    }
    function Je() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return B1 === null ? I.memoizedState = B1 = e : B1 = B1.next = e, B1;
    }
    function qe1() {
        if (Q3 === null) {
            var e = I.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = Q3.next;
        var n = B1 === null ? I.memoizedState : B1.next;
        if (n !== null) B1 = n, Q3 = e;
        else {
            if (e === null) throw Error(v2(310));
            Q3 = e, e = {
                memoizedState: Q3.memoizedState,
                baseState: Q3.baseState,
                baseQueue: Q3.baseQueue,
                queue: Q3.queue,
                next: null
            }, B1 === null ? I.memoizedState = B1 = e : B1 = B1.next = e;
        }
        return B1;
    }
    function de1(e, n) {
        return typeof n == "function" ? n(e) : n;
    }
    function pt(e) {
        var n = qe1(), t = n.queue;
        if (t === null) throw Error(v2(311));
        t.lastRenderedReducer = e;
        var r = Q3, l18 = r.baseQueue, i = t.pending;
        if (i !== null) {
            if (l18 !== null) {
                var o = l18.next;
                l18.next = i.next, i.next = o;
            }
            r.baseQueue = l18 = i, t.pending = null;
        }
        if (l18 !== null) {
            l18 = l18.next, r = r.baseState;
            var u = o = i = null, s8 = l18;
            do {
                var d = s8.lane;
                if ((ct & d) === d) u !== null && (u = u.next = {
                    lane: 0,
                    action: s8.action,
                    eagerReducer: s8.eagerReducer,
                    eagerState: s8.eagerState,
                    next: null
                }), r = s8.eagerReducer === e ? s8.eagerState : e(r, s8.action);
                else {
                    var y5 = {
                        lane: d,
                        action: s8.action,
                        eagerReducer: s8.eagerReducer,
                        eagerState: s8.eagerState,
                        next: null
                    };
                    u === null ? (o = u = y5, i = r) : u = u.next = y5, I.lanes |= d, lt |= d;
                }
                s8 = s8.next;
            }while (s8 !== null && s8 !== l18)
            u === null ? i = r : u.next = o, ne2(r, n.memoizedState) || (ue = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = u, t.lastRenderedState = r;
        }
        return [
            n.memoizedState,
            t.dispatch
        ];
    }
    function mt(e) {
        var n = qe1(), t = n.queue;
        if (t === null) throw Error(v2(311));
        t.lastRenderedReducer = e;
        var r = t.dispatch, l18 = t.pending, i = n.memoizedState;
        if (l18 !== null) {
            t.pending = null;
            var o = l18 = l18.next;
            do i = e(i, o.action), o = o.next;
            while (o !== l18)
            ne2(i, n.memoizedState) || (ue = !0), n.memoizedState = i, n.baseQueue === null && (n.baseState = i), t.lastRenderedState = i;
        }
        return [
            i,
            r
        ];
    }
    function Pu(e, n, t) {
        var r = n._getVersion;
        r = r(n._source);
        var l18 = n._workInProgressVersionPrimary;
        if (l18 !== null ? e = l18 === r : (e = e.mutableReadLanes, (e = (ct & e) === e) && (n._workInProgressVersionPrimary = r, _n.push(n))), e) return t(n._source);
        throw _n.push(n), Error(v2(350));
    }
    function Tu(e, n, t, r) {
        var l18 = X3;
        if (l18 === null) throw Error(v2(349));
        var i = n._getVersion, o = i(n._source), u = ft.current, s9 = u.useState(function() {
            return Pu(l18, n, t);
        }), d = s9[1], y6 = s9[0];
        s9 = B1;
        var C = e.memoizedState, h6 = C.refs, S5 = h6.getSnapshot, k = C.source;
        C = C.subscribe;
        var E = I;
        return e.memoizedState = {
            refs: h6,
            source: n,
            subscribe: r
        }, u.useEffect(function() {
            h6.getSnapshot = t, h6.setSnapshot = d;
            var c = i(n._source);
            if (!ne2(o, c)) {
                c = t(n._source), ne2(y6, c) || (d(c), c = De2(E), l18.mutableReadLanes |= c & l18.pendingLanes), c = l18.mutableReadLanes, l18.entangledLanes |= c;
                for(var a = l18.entanglements, f = c; 0 < f;){
                    var p5 = 31 - Ne(f), m3 = 1 << p5;
                    a[p5] |= c, f &= ~m3;
                }
            }
        }, [
            t,
            n,
            r
        ]), u.useEffect(function() {
            return r(n._source, function() {
                var c = h6.getSnapshot, a = h6.setSnapshot;
                try {
                    a(c(n._source));
                    var f = De2(E);
                    l18.mutableReadLanes |= f & l18.pendingLanes;
                } catch (p6) {
                    a(function() {
                        throw p6;
                    });
                }
            });
        }, [
            n,
            r
        ]), ne2(S5, t) && ne2(k, n) && ne2(C, r) || (e = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: de1,
            lastRenderedState: y6
        }, e.dispatch = d = bl.bind(null, I, e), s9.queue = e, s9.baseQueue = null, y6 = Pu(l18, n, t), s9.memoizedState = s9.baseState = y6), y6;
    }
    function Lu(e, n, t) {
        var r = qe1();
        return Tu(r, e, n, t);
    }
    function ht(e) {
        var n = Je();
        return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = n.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: de1,
            lastRenderedState: e
        }, e = e.dispatch = bl.bind(null, I, e), [
            n.memoizedState,
            e
        ];
    }
    function vr(e, n, t, r) {
        return e = {
            tag: e,
            create: n,
            destroy: t,
            deps: r,
            next: null
        }, n = I.updateQueue, n === null ? (n = {
            lastEffect: null
        }, I.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
    }
    function zu(e) {
        var n = Je();
        return e = {
            current: e
        }, n.memoizedState = e;
    }
    function yr() {
        return qe1().memoizedState;
    }
    function ei(e, n, t, r) {
        var l18 = Je();
        I.flags |= e, l18.memoizedState = vr(1 | n, t, void 0, r === void 0 ? null : r);
    }
    function ni(e, n, t, r) {
        var l18 = qe1();
        r = r === void 0 ? null : r;
        var i = void 0;
        if (Q3 !== null) {
            var o = Q3.memoizedState;
            if (i = o.destroy, r !== null && Jl(r, o.deps)) {
                vr(n, t, i, r);
                return;
            }
        }
        I.flags |= e, l18.memoizedState = vr(1 | n, t, i, r);
    }
    function Ou(e, n) {
        return ei(516, 4, e, n);
    }
    function gr(e, n) {
        return ni(516, 4, e, n);
    }
    function Mu(e, n) {
        return ni(4, 2, e, n);
    }
    function Ru(e, n) {
        if (typeof n == "function") return e = e(), n(e), function() {
            n(null);
        };
        if (n != null) return e = e(), n.current = e, function() {
            n.current = null;
        };
    }
    function Du(e, n, t) {
        return t = t != null ? t.concat([
            e
        ]) : null, ni(4, 2, Ru.bind(null, n, e), t);
    }
    function ti() {
    }
    function Iu(e, n) {
        var t = qe1();
        n = n === void 0 ? null : n;
        var r = t.memoizedState;
        return r !== null && n !== null && Jl(n, r[1]) ? r[0] : (t.memoizedState = [
            e,
            n
        ], e);
    }
    function Fu(e, n) {
        var t = qe1();
        n = n === void 0 ? null : n;
        var r = t.memoizedState;
        return r !== null && n !== null && Jl(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [
            e,
            n
        ], e);
    }
    function qa(e, n) {
        var t = Sn();
        Ge(98 > t ? 98 : t, function() {
            e(!0);
        }), Ge(97 < t ? 97 : t, function() {
            var r = le2.transition;
            le2.transition = 1;
            try {
                e(!1), n();
            } finally{
                le2.transition = r;
            }
        });
    }
    function bl(e, n, t) {
        var r = b4(), l18 = De2(e), i = {
            lane: l18,
            action: t,
            eagerReducer: null,
            eagerState: null,
            next: null
        }, o = n.pending;
        if (o === null ? i.next = i : (i.next = o.next, o.next = i), n.pending = i, o = e.alternate, e === I || o !== null && o === I) dt = mr = !0;
        else {
            if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
                var u = n.lastRenderedState, s9 = o(u, t);
                if (i.eagerReducer = o, i.eagerState = s9, ne2(s9, u)) return;
            } catch (d) {
            } finally{
            }
            Ie2(e, l18, r);
        }
    }
    var hr = {
        readContext: te1,
        useCallback: Z,
        useContext: Z,
        useEffect: Z,
        useImperativeHandle: Z,
        useLayoutEffect: Z,
        useMemo: Z,
        useReducer: Z,
        useRef: Z,
        useState: Z,
        useDebugValue: Z,
        useDeferredValue: Z,
        useTransition: Z,
        useMutableSource: Z,
        useOpaqueIdentifier: Z,
        unstable_isNewReconciler: !1
    }, Ga = {
        readContext: te1,
        useCallback: function(e, n) {
            return Je().memoizedState = [
                e,
                n === void 0 ? null : n
            ], e;
        },
        useContext: te1,
        useEffect: Ou,
        useImperativeHandle: function(e, n, t) {
            return t = t != null ? t.concat([
                e
            ]) : null, ei(4, 2, Ru.bind(null, n, e), t);
        },
        useLayoutEffect: function(e, n) {
            return ei(4, 2, e, n);
        },
        useMemo: function(e, n) {
            var t = Je();
            return n = n === void 0 ? null : n, e = e(), t.memoizedState = [
                e,
                n
            ], e;
        },
        useReducer: function(e, n, t) {
            var r = Je();
            return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = r.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: n
            }, e = e.dispatch = bl.bind(null, I, e), [
                r.memoizedState,
                e
            ];
        },
        useRef: zu,
        useState: ht,
        useDebugValue: ti,
        useDeferredValue: function(e) {
            var n = ht(e), t = n[0], r = n[1];
            return Ou(function() {
                var l18 = le2.transition;
                le2.transition = 1;
                try {
                    r(e);
                } finally{
                    le2.transition = l18;
                }
            }, [
                e
            ]), t;
        },
        useTransition: function() {
            var e = ht(!1), n = e[0];
            return e = qa.bind(null, e[1]), zu(e), [
                e,
                n
            ];
        },
        useMutableSource: function(e, n, t) {
            var r = Je();
            return r.memoizedState = {
                refs: {
                    getSnapshot: n,
                    setSnapshot: null
                },
                source: e,
                subscribe: t
            }, Tu(r, e, n, t);
        },
        useOpaqueIdentifier: function() {
            if (ce) {
                var e = !1, n = Aa(function() {
                    throw e || (e = !0, t("r:" + (Ml++).toString(36))), Error(v2(355));
                }), t = ht(n)[1];
                return (I.mode & 2) == 0 && (I.flags |= 516, vr(5, function() {
                    t("r:" + (Ml++).toString(36));
                }, void 0, null)), n;
            }
            return n = "r:" + (Ml++).toString(36), ht(n), n;
        },
        unstable_isNewReconciler: !1
    }, Za = {
        readContext: te1,
        useCallback: Iu,
        useContext: te1,
        useEffect: gr,
        useImperativeHandle: Du,
        useLayoutEffect: Mu,
        useMemo: Fu,
        useReducer: pt,
        useRef: yr,
        useState: function() {
            return pt(de1);
        },
        useDebugValue: ti,
        useDeferredValue: function(e) {
            var n = pt(de1), t = n[0], r = n[1];
            return gr(function() {
                var l18 = le2.transition;
                le2.transition = 1;
                try {
                    r(e);
                } finally{
                    le2.transition = l18;
                }
            }, [
                e
            ]), t;
        },
        useTransition: function() {
            var e = pt(de1)[0];
            return [
                yr().current,
                e
            ];
        },
        useMutableSource: Lu,
        useOpaqueIdentifier: function() {
            return pt(de1)[0];
        },
        unstable_isNewReconciler: !1
    }, Ja = {
        readContext: te1,
        useCallback: Iu,
        useContext: te1,
        useEffect: gr,
        useImperativeHandle: Du,
        useLayoutEffect: Mu,
        useMemo: Fu,
        useReducer: mt,
        useRef: yr,
        useState: function() {
            return mt(de1);
        },
        useDebugValue: ti,
        useDeferredValue: function(e) {
            var n = mt(de1), t = n[0], r = n[1];
            return gr(function() {
                var l18 = le2.transition;
                le2.transition = 1;
                try {
                    r(e);
                } finally{
                    le2.transition = l18;
                }
            }, [
                e
            ]), t;
        },
        useTransition: function() {
            var e = mt(de1)[0];
            return [
                yr().current,
                e
            ];
        },
        useMutableSource: Lu,
        useOpaqueIdentifier: function() {
            return mt(de1)[0];
        },
        unstable_isNewReconciler: !1
    }, ba = He.ReactCurrentOwner, ue = !1;
    function J2(e, n, t, r) {
        n.child = e === null ? ku(n, null, t, r) : cr(n, e.child, t, r);
    }
    function ju(e, n, t, r, l18) {
        t = t.render;
        var i = n.ref;
        return kn(n, l18), r = ql(e, n, t, r, i, l18), e !== null && !ue ? (n.updateQueue = e.updateQueue, n.flags &= -517, e.lanes &= ~l18, ye2(e, n, l18)) : (n.flags |= 1, J2(e, n, r, l18), n.child);
    }
    function Vu(e, n, t, r, l18, i) {
        if (e === null) {
            var o = t.type;
            return typeof o == "function" && !ri(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Uu(e, n, o, r, l18, i)) : (e = fr(t.type, null, r, n, n.mode, i), e.ref = n.ref, e.return = n, n.child = e);
        }
        return o = e.child, (l18 & i) == 0 && (l18 = o.memoizedProps, t = t.compare, t = t !== null ? t : bn, t(l18, r) && e.ref === n.ref) ? ye2(e, n, i) : (n.flags |= 1, e = Fe2(o, r), e.ref = n.ref, e.return = n, n.child = e);
    }
    function Uu(e, n, t, r, l18, i) {
        if (e !== null && bn(e.memoizedProps, r) && e.ref === n.ref) {
            if (ue = !1, (i & l18) != 0) (e.flags & 16384) != 0 && (ue = !0);
            else return n.lanes = e.lanes, ye2(e, n, i);
        }
        return li(e, n, t, r, i);
    }
    function ii(e, n, t) {
        var r = n.pendingProps, l18 = r.children, i = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding") {
            if ((n.mode & 4) == 0) n.memoizedState = {
                baseLanes: 0
            }, wr(n, t);
            else if ((t & 1073741824) != 0) n.memoizedState = {
                baseLanes: 0
            }, wr(n, i !== null ? i.baseLanes : t);
            else return e = i !== null ? i.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
                baseLanes: e
            }, wr(n, e), null;
        } else i !== null ? (r = i.baseLanes | t, n.memoizedState = null) : r = t, wr(n, r);
        return J2(e, n, l18, t), n.child;
    }
    function Bu(e, n) {
        var t = n.ref;
        (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 128);
    }
    function li(e, n, t, r, l18) {
        var i = G2(t) ? Xe : H1.current;
        return i = wn(n, i), kn(n, l18), t = ql(e, n, t, r, i, l18), e !== null && !ue ? (n.updateQueue = e.updateQueue, n.flags &= -517, e.lanes &= ~l18, ye2(e, n, l18)) : (n.flags |= 1, J2(e, n, t, l18), n.child);
    }
    function Wu(e, n, t, r, l18) {
        if (G2(t)) {
            var i = !0;
            er(n);
        } else i = !1;
        if (kn(n, l18), n.stateNode === null) e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), wu(n, t, r), Al(n, t, r, l18), r = !0;
        else if (e === null) {
            var o = n.stateNode, u = n.memoizedProps;
            o.props = u;
            var s10 = o.context, d = t.contextType;
            typeof d == "object" && d !== null ? d = te1(d) : (d = G2(t) ? Xe : H1.current, d = wn(n, d));
            var y6 = t.getDerivedStateFromProps, C = typeof y6 == "function" || typeof o.getSnapshotBeforeUpdate == "function";
            C || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s10 !== d) && Su(n, o, r, d), Oe1 = !1;
            var h6 = n.memoizedState;
            o.state = h6, it(n, r, o, l18), s10 = n.memoizedState, u !== r || h6 !== s10 || K3.current || Oe1 ? (typeof y6 == "function" && (or(n, t, y6, r), s10 = n.memoizedState), (u = Oe1 || gu(n, t, u, r, h6, s10, d)) ? (C || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (n.flags |= 4)) : (typeof o.componentDidMount == "function" && (n.flags |= 4), n.memoizedProps = r, n.memoizedState = s10), o.props = r, o.state = s10, o.context = d, r = u) : (typeof o.componentDidMount == "function" && (n.flags |= 4), r = !1);
        } else {
            o = n.stateNode, mu(e, n), u = n.memoizedProps, d = n.type === n.elementType ? u : oe1(n.type, u), o.props = d, C = n.pendingProps, h6 = o.context, s10 = t.contextType, typeof s10 == "object" && s10 !== null ? s10 = te1(s10) : (s10 = G2(t) ? Xe : H1.current, s10 = wn(n, s10));
            var S5 = t.getDerivedStateFromProps;
            (y6 = typeof S5 == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== C || h6 !== s10) && Su(n, o, r, s10), Oe1 = !1, h6 = n.memoizedState, o.state = h6, it(n, r, o, l18);
            var k = n.memoizedState;
            u !== C || h6 !== k || K3.current || Oe1 ? (typeof S5 == "function" && (or(n, t, S5, r), k = n.memoizedState), (d = Oe1 || gu(n, t, d, r, h6, k, s10)) ? (y6 || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k, s10), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k, s10)), typeof o.componentDidUpdate == "function" && (n.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 256)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h6 === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h6 === e.memoizedState || (n.flags |= 256), n.memoizedProps = r, n.memoizedState = k), o.props = r, o.state = k, o.context = s10, r = d) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h6 === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h6 === e.memoizedState || (n.flags |= 256), r = !1);
        }
        return oi(e, n, t, r, i, l18);
    }
    function oi(e, n, t, r, l18, i) {
        Bu(e, n);
        var o = (n.flags & 64) != 0;
        if (!r && !o) return l18 && lu(n, t, !1), ye2(e, n, i);
        r = n.stateNode, ba.current = n;
        var u = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
        return n.flags |= 1, e !== null && o ? (n.child = cr(n, e.child, null, i), n.child = cr(n, null, u, i)) : J2(e, n, u, i), n.memoizedState = r.state, l18 && lu(n, t, !0), n.child;
    }
    function Hu(e) {
        var n = e.stateNode;
        n.pendingContext ? tu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && tu(e, n.context, !1), Yl(e, n.containerInfo);
    }
    var Sr = {
        dehydrated: null,
        retryLane: 0
    };
    function Yu(e, n, t) {
        var r = n.pendingProps, l18 = D1.current, i = !1, o;
        return (o = (n.flags & 64) != 0) || (o = e !== null && e.memoizedState === null ? !1 : (l18 & 2) != 0), o ? (i = !0, n.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === !0 || (l18 |= 1), R(D1, l18 & 1), e === null ? (r.fallback !== void 0 && Kl(n), e = r.children, l18 = r.fallback, i ? (e = Au(n, e, l18, t), n.child.memoizedState = {
            baseLanes: t
        }, n.memoizedState = Sr, e) : typeof r.unstable_expectedLoadTime == "number" ? (e = Au(n, e, l18, t), n.child.memoizedState = {
            baseLanes: t
        }, n.memoizedState = Sr, n.lanes = 33554432, e) : (t = ui({
            mode: "visible",
            children: e
        }, n.mode, t, null), t.return = n, n.child = t)) : e.memoizedState !== null ? i ? (r = $u(e, n, r.children, r.fallback, t), i = n.child, l18 = e.child.memoizedState, i.memoizedState = l18 === null ? {
            baseLanes: t
        } : {
            baseLanes: l18.baseLanes | t
        }, i.childLanes = e.childLanes & ~t, n.memoizedState = Sr, r) : (t = Qu(e, n, r.children, t), n.memoizedState = null, t) : i ? (r = $u(e, n, r.children, r.fallback, t), i = n.child, l18 = e.child.memoizedState, i.memoizedState = l18 === null ? {
            baseLanes: t
        } : {
            baseLanes: l18.baseLanes | t
        }, i.childLanes = e.childLanes & ~t, n.memoizedState = Sr, r) : (t = Qu(e, n, r.children, t), n.memoizedState = null, t);
    }
    function Au(e, n, t, r) {
        var l18 = e.mode, i = e.child;
        return n = {
            mode: "hidden",
            children: n
        }, (l18 & 2) == 0 && i !== null ? (i.childLanes = 0, i.pendingProps = n) : i = ui(n, l18, 0, null), t = xn(t, l18, r, null), i.return = e, t.return = e, i.sibling = t, e.child = i, t;
    }
    function Qu(e, n, t, r) {
        var l18 = e.child;
        return e = l18.sibling, t = Fe2(l18, {
            mode: "visible",
            children: t
        }), (n.mode & 2) == 0 && (t.lanes = r), t.return = n, t.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, n.firstEffect = n.lastEffect = e), n.child = t;
    }
    function $u(e, n, t, r, l18) {
        var i = n.mode, o = e.child;
        e = o.sibling;
        var u = {
            mode: "hidden",
            children: t
        };
        return (i & 2) == 0 && n.child !== o ? (t = n.child, t.childLanes = 0, t.pendingProps = u, o = t.lastEffect, o !== null ? (n.firstEffect = t.firstEffect, n.lastEffect = o, o.nextEffect = null) : n.firstEffect = n.lastEffect = null) : t = Fe2(o, u), e !== null ? r = Fe2(e, r) : (r = xn(r, i, l18, null), r.flags |= 2), r.return = n, t.return = n, t.sibling = r, n.child = t, r;
    }
    function Xu(e, n) {
        e.lanes |= n;
        var t = e.alternate;
        t !== null && (t.lanes |= n), pu(e.return, n);
    }
    function si(e, n, t, r, l18, i) {
        var o = e.memoizedState;
        o === null ? e.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: t,
            tailMode: l18,
            lastEffect: i
        } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l18, o.lastEffect = i);
    }
    function Ku(e, n, t) {
        var r = n.pendingProps, l18 = r.revealOrder, i = r.tail;
        if (J2(e, n, r.children, t), r = D1.current, (r & 2) != 0) r = r & 1 | 2, n.flags |= 64;
        else {
            if (e !== null && (e.flags & 64) != 0) e: for(e = n.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && Xu(e, t);
                else if (e.tag === 19) Xu(e, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue;
                }
                if (e === n) break e;
                for(; e.sibling === null;){
                    if (e.return === null || e.return === n) break e;
                    e = e.return;
                }
                e.sibling.return = e.return, e = e.sibling;
            }
            r &= 1;
        }
        if (R(D1, r), (n.mode & 2) == 0) n.memoizedState = null;
        else switch(l18){
            case "forwards":
                for(t = n.child, l18 = null; t !== null;)e = t.alternate, e !== null && dr(e) === null && (l18 = t), t = t.sibling;
                t = l18, t === null ? (l18 = n.child, n.child = null) : (l18 = t.sibling, t.sibling = null), si(n, !1, l18, t, i, n.lastEffect);
                break;
            case "backwards":
                for(t = null, l18 = n.child, n.child = null; l18 !== null;){
                    if (e = l18.alternate, e !== null && dr(e) === null) {
                        n.child = l18;
                        break;
                    }
                    e = l18.sibling, l18.sibling = t, t = l18, l18 = e;
                }
                si(n, !0, t, null, i, n.lastEffect);
                break;
            case "together":
                si(n, !1, null, null, void 0, n.lastEffect);
                break;
            default:
                n.memoizedState = null;
        }
        return n.child;
    }
    function ye2(e, n, t) {
        if (e !== null && (n.dependencies = e.dependencies), lt |= n.lanes, (t & n.childLanes) != 0) {
            if (e !== null && n.child !== e.child) throw Error(v2(153));
            if (n.child !== null) {
                for(e = n.child, t = Fe2(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null;)e = e.sibling, t = t.sibling = Fe2(e, e.pendingProps), t.return = n;
                t.sibling = null;
            }
            return n.child;
        }
        return null;
    }
    var Gu, ai, Zu, Ju;
    Gu = function(e, n) {
        for(var t = n.child; t !== null;){
            if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
            else if (t.tag !== 4 && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === n) break;
            for(; t.sibling === null;){
                if (t.return === null || t.return === n) return;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        }
    };
    ai = function() {
    };
    Zu = function(e, n, t, r) {
        var l18 = e.memoizedProps;
        if (l18 !== r) {
            e = n.stateNode, Ze(fe1.current);
            var i = null;
            switch(t){
                case "input":
                    l18 = Qr(e, l18), r = Qr(e, r), i = [];
                    break;
                case "option":
                    l18 = Xr(e, l18), r = Xr(e, r), i = [];
                    break;
                case "select":
                    l18 = M({
                    }, l18, {
                        value: void 0
                    }), r = M({
                    }, r, {
                        value: void 0
                    }), i = [];
                    break;
                case "textarea":
                    l18 = Kr(e, l18), r = Kr(e, r), i = [];
                    break;
                default:
                    typeof l18.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zt);
            }
            Jr(t, r);
            var o;
            t = null;
            for(d in l18)if (!r.hasOwnProperty(d) && l18.hasOwnProperty(d) && l18[d] != null) {
                if (d === "style") {
                    var u = l18[d];
                    for(o in u)u.hasOwnProperty(o) && (t || (t = {
                    }), t[o] = "");
                } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (On.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
            }
            for(d in r){
                var s11 = r[d];
                if (u = l18 != null ? l18[d] : void 0, r.hasOwnProperty(d) && s11 !== u && (s11 != null || u != null)) {
                    if (d === "style") {
                        if (u) {
                            for(o in u)!u.hasOwnProperty(o) || s11 && s11.hasOwnProperty(o) || (t || (t = {
                            }), t[o] = "");
                            for(o in s11)s11.hasOwnProperty(o) && u[o] !== s11[o] && (t || (t = {
                            }), t[o] = s11[o]);
                        } else t || (i || (i = []), i.push(d, t)), t = s11;
                    } else d === "dangerouslySetInnerHTML" ? (s11 = s11 ? s11.__html : void 0, u = u ? u.__html : void 0, s11 != null && u !== s11 && (i = i || []).push(d, s11)) : d === "children" ? typeof s11 != "string" && typeof s11 != "number" || (i = i || []).push(d, "" + s11) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (On.hasOwnProperty(d) ? (s11 != null && d === "onScroll" && z2("scroll", e), i || u === s11 || (i = [])) : typeof s11 == "object" && s11 !== null && s11.$$typeof === Vr ? s11.toString() : (i = i || []).push(d, s11));
                }
            }
            t && (i = i || []).push("style", t);
            var d = i;
            (n.updateQueue = d) && (n.flags |= 4);
        }
    };
    Ju = function(e, n, t, r) {
        t !== r && (n.flags |= 4);
    };
    function vt(e, n) {
        if (!ce) switch(e.tailMode){
            case "hidden":
                n = e.tail;
                for(var t = null; n !== null;)n.alternate !== null && (t = n), n = n.sibling;
                t === null ? e.tail = null : t.sibling = null;
                break;
            case "collapsed":
                t = e.tail;
                for(var r = null; t !== null;)t.alternate !== null && (r = t), t = t.sibling;
                r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
        }
    }
    function ef(e, n, t) {
        var r = n.pendingProps;
        switch(n.tag){
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return null;
            case 1:
                return G2(n.type) && bt(), null;
            case 3:
                return Cn(), O3(K3), O3(H1), Zl(), r = n.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (pr(n) ? n.flags |= 4 : r.hydrate || (n.flags |= 256)), ai(n), null;
            case 5:
                Xl(n);
                var l18 = Ze(at.current);
                if (t = n.type, e !== null && n.stateNode != null) Zu(e, n, t, r, l18), e.ref !== n.ref && (n.flags |= 128);
                else {
                    if (!r) {
                        if (n.stateNode === null) throw Error(v2(166));
                        return null;
                    }
                    if (e = Ze(fe1.current), pr(n)) {
                        r = n.stateNode, t = n.type;
                        var i = n.memoizedProps;
                        switch(r[Te] = n, r[qt] = i, t){
                            case "dialog":
                                z2("cancel", r), z2("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                z2("load", r);
                                break;
                            case "video":
                            case "audio":
                                for(e = 0; e < nt.length; e++)z2(nt[e], r);
                                break;
                            case "source":
                                z2("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                z2("error", r), z2("load", r);
                                break;
                            case "details":
                                z2("toggle", r);
                                break;
                            case "input":
                                Wi(r, i), z2("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!i.multiple
                                }, z2("invalid", r);
                                break;
                            case "textarea":
                                Qi(r, i), z2("invalid", r);
                        }
                        Jr(t, i), e = null;
                        for(var o in i)i.hasOwnProperty(o) && (l18 = i[o], o === "children" ? typeof l18 == "string" ? r.textContent !== l18 && (e = [
                            "children",
                            l18
                        ]) : typeof l18 == "number" && r.textContent !== "" + l18 && (e = [
                            "children",
                            "" + l18
                        ]) : On.hasOwnProperty(o) && l18 != null && o === "onScroll" && z2("scroll", r));
                        switch(t){
                            case "input":
                                zt(r), Ai(r, i, !0);
                                break;
                            case "textarea":
                                zt(r), Yi(r);
                                break;
                            case "select":
                            case "option": break;
                            default:
                                typeof i.onClick == "function" && (r.onclick = Zt);
                        }
                        r = e, n.updateQueue = r, r !== null && (n.flags |= 4);
                    } else {
                        switch(o = l18.nodeType === 9 ? l18 : l18.ownerDocument, e === Gr.html && (e = Xi(t)), e === Gr.html ? t === "script" ? (e = o.createElement("div"), e.innerHTML = "<script></script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(t, {
                            is: r.is
                        }) : (e = o.createElement(t), t === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, t), e[Te] = n, e[qt] = r, Gu(e, n, !1, !1), n.stateNode = e, o = qr(t, r), t){
                            case "dialog":
                                z2("cancel", e), z2("close", e), l18 = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                z2("load", e), l18 = r;
                                break;
                            case "video":
                            case "audio":
                                for(l18 = 0; l18 < nt.length; l18++)z2(nt[l18], e);
                                l18 = r;
                                break;
                            case "source":
                                z2("error", e), l18 = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                z2("error", e), z2("load", e), l18 = r;
                                break;
                            case "details":
                                z2("toggle", e), l18 = r;
                                break;
                            case "input":
                                Wi(e, r), l18 = Qr(e, r), z2("invalid", e);
                                break;
                            case "option":
                                l18 = Xr(e, r);
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l18 = M({
                                }, r, {
                                    value: void 0
                                }), z2("invalid", e);
                                break;
                            case "textarea":
                                Qi(e, r), l18 = Kr(e, r), z2("invalid", e);
                                break;
                            default:
                                l18 = r;
                        }
                        Jr(t, l18);
                        var u = l18;
                        for(i in u)if (u.hasOwnProperty(i)) {
                            var s12 = u[i];
                            i === "style" ? Zi(e, s12) : i === "dangerouslySetInnerHTML" ? (s12 = s12 ? s12.__html : void 0, s12 != null && Ki(e, s12)) : i === "children" ? typeof s12 == "string" ? (t !== "textarea" || s12 !== "") && jn(e, s12) : typeof s12 == "number" && jn(e, "" + s12) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (On.hasOwnProperty(i) ? s12 != null && i === "onScroll" && z2("scroll", e) : s12 != null && Rr(e, i, s12, o));
                        }
                        switch(t){
                            case "input":
                                zt(e), Ai(e, r, !1);
                                break;
                            case "textarea":
                                zt(e), Yi(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + ke1(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? rn(e, !!r.multiple, i, !1) : r.defaultValue != null && rn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l18.onClick == "function" && (e.onclick = Zt);
                        }
                        qo(t, r) && (n.flags |= 4);
                    }
                    n.ref !== null && (n.flags |= 128);
                }
                return null;
            case 6:
                if (e && n.stateNode != null) Ju(e, n, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && n.stateNode === null) throw Error(v2(166));
                    t = Ze(at.current), Ze(fe1.current), pr(n) ? (r = n.stateNode, t = n.memoizedProps, r[Te] = n, r.nodeValue !== t && (n.flags |= 4)) : (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Te] = n, n.stateNode = r);
                }
                return null;
            case 13:
                return O3(D1), r = n.memoizedState, (n.flags & 64) != 0 ? (n.lanes = t, n) : (r = r !== null, t = !1, e === null ? n.memoizedProps.fallback !== void 0 && pr(n) : t = e.memoizedState !== null, r && !t && (n.mode & 2) != 0 && (e === null && n.memoizedProps.unstable_avoidThisFallback !== !0 || (D1.current & 1) != 0 ? W2 === 0 && (W2 = 3) : ((W2 === 0 || W2 === 3) && (W2 = 4), X3 === null || (lt & 134217727) == 0 && (Nn & 134217727) == 0 || Pn(X3, $2))), (r || t) && (n.flags |= 4), null);
            case 4:
                return Cn(), ai(n), e === null && Zo(n.stateNode.containerInfo), null;
            case 10:
                return Wl(n), null;
            case 17:
                return G2(n.type) && bt(), null;
            case 19:
                if (O3(D1), r = n.memoizedState, r === null) return null;
                if (i = (n.flags & 64) != 0, o = r.rendering, o === null) {
                    if (i) vt(r, !1);
                    else {
                        if (W2 !== 0 || e !== null && (e.flags & 64) != 0) for(e = n.child; e !== null;){
                            if (o = dr(e), o !== null) {
                                for(n.flags |= 64, vt(r, !1), i = o.updateQueue, i !== null && (n.updateQueue = i, n.flags |= 4), r.lastEffect === null && (n.firstEffect = null), n.lastEffect = r.lastEffect, r = t, t = n.child; t !== null;)i = t, e = r, i.flags &= 2, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), t = t.sibling;
                                return R(D1, D1.current & 1 | 2), n.child;
                            }
                            e = e.sibling;
                        }
                        r.tail !== null && A() > fi && (n.flags |= 64, i = !0, vt(r, !1), n.lanes = 33554432);
                    }
                } else {
                    if (!i) {
                        if (e = dr(o), e !== null) {
                            if (n.flags |= 64, i = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), vt(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !ce) return n = n.lastEffect = r.lastEffect, n !== null && (n.nextEffect = null), null;
                        } else 2 * A() - r.renderingStartTime > fi && t !== 1073741824 && (n.flags |= 64, i = !0, vt(r, !1), n.lanes = 33554432);
                    }
                    r.isBackwards ? (o.sibling = n.child, n.child = o) : (t = r.last, t !== null ? t.sibling = o : n.child = o, r.last = o);
                }
                return r.tail !== null ? (t = r.tail, r.rendering = t, r.tail = t.sibling, r.lastEffect = n.lastEffect, r.renderingStartTime = A(), t.sibling = null, n = D1.current, R(D1, i ? n & 1 | 2 : n & 1), t) : null;
            case 23:
            case 24:
                return ci(), e !== null && e.memoizedState !== null != (n.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (n.flags |= 4), null;
        }
        throw Error(v2(156, n.tag));
    }
    function nf(e) {
        switch(e.tag){
            case 1:
                G2(e.type) && bt();
                var n = e.flags;
                return n & 4096 ? (e.flags = n & -4097 | 64, e) : null;
            case 3:
                if (Cn(), O3(K3), O3(H1), Zl(), n = e.flags, (n & 64) != 0) throw Error(v2(285));
                return e.flags = n & -4097 | 64, e;
            case 5:
                return Xl(e), null;
            case 13:
                return O3(D1), n = e.flags, n & 4096 ? (e.flags = n & -4097 | 64, e) : null;
            case 19:
                return O3(D1), null;
            case 4:
                return Cn(), null;
            case 10:
                return Wl(e), null;
            case 23:
            case 24:
                return ci(), null;
            default:
                return null;
        }
    }
    function di(e, n) {
        try {
            var t = "", r = n;
            do t += Is(r), r = r.return;
            while (r)
            var l18 = t;
        } catch (i) {
            l18 = `\nError generating stack: ` + i.message + `\n` + i.stack;
        }
        return {
            value: e,
            source: n,
            stack: l18
        };
    }
    function pi(e, n) {
        try {
            console.error(n.value);
        } catch (t) {
            setTimeout(function() {
                throw t;
            });
        }
    }
    var tf = typeof WeakMap == "function" ? WeakMap : Map;
    function qu(e, n, t) {
        t = Me(-1, t), t.tag = 3, t.payload = {
            element: null
        };
        var r = n.value;
        return t.callback = function() {
            Er || (Er = !0, mi = r), pi(e, n);
        }, t;
    }
    function bu(e, n, t) {
        t = Me(-1, t), t.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var l18 = n.value;
            t.payload = function() {
                return pi(e, n), r(l18);
            };
        }
        var i = e.stateNode;
        return i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
            typeof r != "function" && (pe2 === null ? pe2 = new Set([
                this
            ]) : pe2.add(this), pi(e, n));
            var o = n.stack;
            this.componentDidCatch(n.value, {
                componentStack: o !== null ? o : ""
            });
        }), t;
    }
    var rf = typeof WeakSet == "function" ? WeakSet : Set;
    function es(e) {
        var n = e.ref;
        if (n !== null) {
            if (typeof n == "function") try {
                n(null);
            } catch (t) {
                Ue(e, t);
            }
            else n.current = null;
        }
    }
    function lf(e, n) {
        switch(n.tag){
            case 0:
            case 11:
            case 15:
            case 22:
                return;
            case 1:
                if (n.flags & 256 && e !== null) {
                    var t = e.memoizedProps, r = e.memoizedState;
                    e = n.stateNode, n = e.getSnapshotBeforeUpdate(n.elementType === n.type ? t : oe1(n.type, t), r), e.__reactInternalSnapshotBeforeUpdate = n;
                }
                return;
            case 3:
                n.flags & 256 && Ol(n.stateNode.containerInfo);
                return;
            case 5:
            case 6:
            case 4:
            case 17:
                return;
        }
        throw Error(v2(163));
    }
    function uf(e, n, t) {
        switch(t.tag){
            case 0:
            case 11:
            case 15:
            case 22:
                if (n = t.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
                    e = n = n.next;
                    do {
                        if ((e.tag & 3) == 3) {
                            var r = e.create;
                            e.destroy = r();
                        }
                        e = e.next;
                    }while (e !== n)
                }
                if (n = t.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
                    e = n = n.next;
                    do {
                        var l19 = e;
                        r = l19.next, l19 = l19.tag, (l19 & 4) != 0 && (l19 & 1) != 0 && (ns(t, e), of(t, e)), e = r;
                    }while (e !== n)
                }
                return;
            case 1:
                e = t.stateNode, t.flags & 4 && (n === null ? e.componentDidMount() : (r = t.elementType === t.type ? n.memoizedProps : oe1(t.type, n.memoizedProps), e.componentDidUpdate(r, n.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), n = t.updateQueue, n !== null && vu(t, n, e);
                return;
            case 3:
                if (n = t.updateQueue, n !== null) {
                    if (e = null, t.child !== null) switch(t.child.tag){
                        case 5:
                            e = t.child.stateNode;
                            break;
                        case 1:
                            e = t.child.stateNode;
                    }
                    vu(t, n, e);
                }
                return;
            case 5:
                e = t.stateNode, n === null && t.flags & 4 && qo(t.type, t.memoizedProps) && e.focus();
                return;
            case 6:
                return;
            case 4:
                return;
            case 12:
                return;
            case 13:
                t.memoizedState === null && (t = t.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null && po(t))));
                return;
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
                return;
        }
        throw Error(v2(163));
    }
    function ts(e, n) {
        for(var t = e;;){
            if (t.tag === 5) {
                var r = t.stateNode;
                if (n) r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
                else {
                    r = t.stateNode;
                    var l20 = t.memoizedProps.style;
                    l20 = l20 != null && l20.hasOwnProperty("display") ? l20.display : null, r.style.display = Gi("display", l20);
                }
            } else if (t.tag === 6) t.stateNode.nodeValue = n ? "" : t.memoizedProps;
            else if ((t.tag !== 23 && t.tag !== 24 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e) break;
            for(; t.sibling === null;){
                if (t.return === null || t.return === e) return;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        }
    }
    function ls(e, n) {
        if (Ke && typeof Ke.onCommitFiberUnmount == "function") try {
            Ke.onCommitFiberUnmount(Dl, n);
        } catch (i) {
        }
        switch(n.tag){
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                if (e = n.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
                    var t = e = e.next;
                    do {
                        var r = t, l21 = r.destroy;
                        if (r = r.tag, l21 !== void 0) {
                            if ((r & 4) != 0) ns(n, t);
                            else {
                                r = n;
                                try {
                                    l21();
                                } catch (i) {
                                    Ue(r, i);
                                }
                            }
                        }
                        t = t.next;
                    }while (t !== e)
                }
                break;
            case 1:
                if (es(n), e = n.stateNode, typeof e.componentWillUnmount == "function") try {
                    e.props = n.memoizedProps, e.state = n.memoizedState, e.componentWillUnmount();
                } catch (i) {
                    Ue(n, i);
                }
                break;
            case 5:
                es(n);
                break;
            case 4:
                rs(e, n);
        }
    }
    function is(e) {
        e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null;
    }
    function os(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function us(e) {
        e: {
            for(var n = e.return; n !== null;){
                if (os(n)) break e;
                n = n.return;
            }
            throw Error(v2(160));
        }
        var t = n;
        switch(n = t.stateNode, t.tag){
            case 5:
                var r = !1;
                break;
            case 3:
                n = n.containerInfo, r = !0;
                break;
            case 4:
                n = n.containerInfo, r = !0;
                break;
            default:
                throw Error(v2(161));
        }
        t.flags & 16 && (jn(n, ""), t.flags &= -17);
        e: n: for(t = e;;){
            for(; t.sibling === null;){
                if (t.return === null || os(t.return)) {
                    t = null;
                    break e;
                }
                t = t.return;
            }
            for(t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;){
                if (t.flags & 2 || t.child === null || t.tag === 4) continue n;
                t.child.return = t, t = t.child;
            }
            if (!(t.flags & 2)) {
                t = t.stateNode;
                break e;
            }
        }
        r ? hi(e, t, n) : vi(e, t, n);
    }
    function hi(e, n, t) {
        var r = e.tag, l22 = r === 5 || r === 6;
        if (l22) e = l22 ? e.stateNode : e.stateNode.instance, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Zt));
        else if (r !== 4 && (e = e.child, e !== null)) for(hi(e, n, t), e = e.sibling; e !== null;)hi(e, n, t), e = e.sibling;
    }
    function vi(e, n, t) {
        var r = e.tag, l22 = r === 5 || r === 6;
        if (l22) e = l22 ? e.stateNode : e.stateNode.instance, n ? t.insertBefore(e, n) : t.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(vi(e, n, t), e = e.sibling; e !== null;)vi(e, n, t), e = e.sibling;
    }
    function rs(e, n) {
        for(var t = n, r = !1, l22, i;;){
            if (!r) {
                r = t.return;
                e: for(;;){
                    if (r === null) throw Error(v2(160));
                    switch(l22 = r.stateNode, r.tag){
                        case 5:
                            i = !1;
                            break e;
                        case 3:
                            l22 = l22.containerInfo, i = !0;
                            break e;
                        case 4:
                            l22 = l22.containerInfo, i = !0;
                            break e;
                    }
                    r = r.return;
                }
                r = !0;
            }
            if (t.tag === 5 || t.tag === 6) {
                e: for(var o = e, u = t, s13 = u;;)if (ls(o, s13), s13.child !== null && s13.tag !== 4) s13.child.return = s13, s13 = s13.child;
                else {
                    if (s13 === u) break e;
                    for(; s13.sibling === null;){
                        if (s13.return === null || s13.return === u) break e;
                        s13 = s13.return;
                    }
                    s13.sibling.return = s13.return, s13 = s13.sibling;
                }
                i ? (o = l22, u = t.stateNode, o.nodeType === 8 ? o.parentNode.removeChild(u) : o.removeChild(u)) : l22.removeChild(t.stateNode);
            } else if (t.tag === 4) {
                if (t.child !== null) {
                    l22 = t.stateNode.containerInfo, i = !0, t.child.return = t, t = t.child;
                    continue;
                }
            } else if (ls(e, t), t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === n) break;
            for(; t.sibling === null;){
                if (t.return === null || t.return === n) return;
                t = t.return, t.tag === 4 && (r = !1);
            }
            t.sibling.return = t.return, t = t.sibling;
        }
    }
    function gi(e, n) {
        switch(n.tag){
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                var t = n.updateQueue;
                if (t = t !== null ? t.lastEffect : null, t !== null) {
                    var r = t = t.next;
                    do (r.tag & 3) == 3 && (e = r.destroy, r.destroy = void 0, e !== void 0 && e()), r = r.next;
                    while (r !== t)
                }
                return;
            case 1:
                return;
            case 5:
                if (t = n.stateNode, t != null) {
                    r = n.memoizedProps;
                    var l22 = e !== null ? e.memoizedProps : r;
                    e = n.type;
                    var i = n.updateQueue;
                    if (n.updateQueue = null, i !== null) {
                        for(t[qt] = r, e === "input" && r.type === "radio" && r.name != null && Hi(t, r), qr(e, l22), n = qr(e, r), l22 = 0; l22 < i.length; l22 += 2){
                            var o = i[l22], u = i[l22 + 1];
                            o === "style" ? Zi(t, u) : o === "dangerouslySetInnerHTML" ? Ki(t, u) : o === "children" ? jn(t, u) : Rr(t, o, u, n);
                        }
                        switch(e){
                            case "input":
                                Yr(t, r);
                                break;
                            case "textarea":
                                $i(t, r);
                                break;
                            case "select":
                                e = t._wrapperState.wasMultiple, t._wrapperState.wasMultiple = !!r.multiple, i = r.value, i != null ? rn(t, !!r.multiple, i, !1) : e !== !!r.multiple && (r.defaultValue != null ? rn(t, !!r.multiple, r.defaultValue, !0) : rn(t, !!r.multiple, r.multiple ? [] : "", !1));
                        }
                    }
                }
                return;
            case 6:
                if (n.stateNode === null) throw Error(v2(162));
                n.stateNode.nodeValue = n.memoizedProps;
                return;
            case 3:
                t = n.stateNode, t.hydrate && (t.hydrate = !1, po(t.containerInfo));
                return;
            case 12:
                return;
            case 13:
                n.memoizedState !== null && (yi = A(), ts(n.child, !0)), ss(n);
                return;
            case 19:
                ss(n);
                return;
            case 17:
                return;
            case 23:
            case 24:
                ts(n, n.memoizedState !== null);
                return;
        }
        throw Error(v2(163));
    }
    function ss(e) {
        var n = e.updateQueue;
        if (n !== null) {
            e.updateQueue = null;
            var t = e.stateNode;
            t === null && (t = e.stateNode = new rf), n.forEach(function(r) {
                var l23 = sf.bind(null, e, r);
                t.has(r) || (t.add(r), r.then(l23, l23));
            });
        }
    }
    function af(e, n) {
        return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (n = n.memoizedState, n !== null && n.dehydrated === null) : !1;
    }
    var ff = Math.ceil, kr = He.ReactCurrentDispatcher, wi = He.ReactCurrentOwner, x = 0, X3 = null, j3 = null, $2 = 0, be = 0, Si = Le1(0), W2 = 0, xr = null, Tn = 0, lt = 0, Nn = 0, Ei = 0, ki = null, yi = 0, fi = Infinity;
    function Ln() {
        fi = A() + 500;
    }
    var g3 = null, Er = !1, mi = null, pe2 = null, Ve = !1, yt = null, gt = 90, xi = [], Ci = [], ge1 = null, wt = 0, _i = null, Cr = -1, we1 = 0, _r = 0, St = null, Nr = !1;
    function b4() {
        return (x & 48) != 0 ? A() : Cr !== -1 ? Cr : Cr = A();
    }
    function De2(e) {
        if (e = e.mode, (e & 2) == 0) return 1;
        if ((e & 4) == 0) return Sn() === 99 ? 1 : 2;
        if (we1 === 0 && (we1 = Tn), Ka.transition !== 0) {
            _r !== 0 && (_r = ki !== null ? ki.pendingLanes : 0), e = we1;
            var n = 4186112 & ~_r;
            return n &= -n, n === 0 && (e = 4186112 & ~e, n = e & -e, n === 0 && (n = 8192)), n;
        }
        return e = Sn(), (x & 4) != 0 && e === 98 ? e = Vt(12, we1) : (e = Js(e), e = Vt(e, we1)), e;
    }
    function Ie2(e, n, t) {
        if (50 < wt) throw wt = 0, _i = null, Error(v2(185));
        if (e = Pr(e, n), e === null) return null;
        Bt(e, n, t), e === X3 && (Nn |= n, W2 === 4 && Pn(e, $2));
        var r = Sn();
        n === 1 ? (x & 8) != 0 && (x & 48) == 0 ? Ni(e) : (ie2(e, t), x === 0 && (Ln(), ae1())) : ((x & 4) == 0 || r !== 98 && r !== 99 || (ge1 === null ? ge1 = new Set([
            e
        ]) : ge1.add(e)), ie2(e, t)), ki = e;
    }
    function Pr(e, n) {
        e.lanes |= n;
        var t = e.alternate;
        for(t !== null && (t.lanes |= n), t = e, e = e.return; e !== null;)e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
        return t.tag === 3 ? t.stateNode : null;
    }
    function ie2(e, n) {
        for(var t = e.callbackNode, r = e.suspendedLanes, l23 = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;){
            var u = 31 - Ne(o), s14 = 1 << u, d = i[u];
            if (d === -1) {
                if ((s14 & r) == 0 || (s14 & l23) != 0) {
                    d = n, an(s14);
                    var y7 = L;
                    i[u] = 10 <= y7 ? d + 250 : 6 <= y7 ? d + 5000 : -1;
                }
            } else d <= n && (e.expiredLanes |= s14);
            o &= ~s14;
        }
        if (r = Xn(e, e === X3 ? $2 : 0), n = L, r === 0) t !== null && (t !== Ul && Fl(t), e.callbackNode = null, e.callbackPriority = 0);
        else {
            if (t !== null) {
                if (e.callbackPriority === n) return;
                t !== Ul && Fl(t);
            }
            n === 15 ? (t = Ni.bind(null, e), he1 === null ? (he1 = [
                t
            ], tr = Il(nr, du)) : he1.push(t), t = Ul) : n === 14 ? t = rt(99, Ni.bind(null, e)) : (t = qs(n), t = rt(t, as.bind(null, e))), e.callbackPriority = n, e.callbackNode = t;
        }
    }
    function as(e) {
        if (Cr = -1, _r = we1 = 0, (x & 48) != 0) throw Error(v2(327));
        var n = e.callbackNode;
        if (Be() && e.callbackNode !== n) return null;
        var t = Xn(e, e === X3 ? $2 : 0);
        if (t === 0) return null;
        var r = t, l23 = x;
        x |= 16;
        var i = cs();
        (X3 !== e || $2 !== r) && (Ln(), zn(e, r));
        do try {
            cf();
            break;
        } catch (u) {
            fs(e, u);
        }
        while (1)
        if (Bl(), kr.current = i, x = l23, j3 !== null ? r = 0 : (X3 = null, $2 = 0, r = W2), (Tn & Nn) != 0) zn(e, 0);
        else if (r !== 0) {
            if (r === 2 && (x |= 64, e.hydrate && (e.hydrate = !1, Ol(e.containerInfo)), t = So(e), t !== 0 && (r = Et(e, t))), r === 1) throw n = xr, zn(e, 0), Pn(e, t), ie2(e, A()), n;
            switch(e.finishedWork = e.current.alternate, e.finishedLanes = t, r){
                case 0:
                case 1:
                    throw Error(v2(345));
                case 2:
                    en(e);
                    break;
                case 3:
                    if (Pn(e, t), (t & 62914560) === t && (r = yi + 500 - A(), 10 < r)) {
                        if (Xn(e, 0) !== 0) break;
                        if (l23 = e.suspendedLanes, (l23 & t) !== t) {
                            b4(), e.pingedLanes |= e.suspendedLanes & l23;
                            break;
                        }
                        e.timeoutHandle = bo(en.bind(null, e), r);
                        break;
                    }
                    en(e);
                    break;
                case 4:
                    if (Pn(e, t), (t & 4186112) === t) break;
                    for(r = e.eventTimes, l23 = -1; 0 < t;){
                        var o = 31 - Ne(t);
                        i = 1 << o, o = r[o], o > l23 && (l23 = o), t &= ~i;
                    }
                    if (t = l23, t = A() - t, t = (120 > t ? 120 : 480 > t ? 480 : 1080 > t ? 1080 : 1920 > t ? 1920 : 3000 > t ? 3000 : 4320 > t ? 4320 : 1960 * ff(t / 1960)) - t, 10 < t) {
                        e.timeoutHandle = bo(en.bind(null, e), t);
                        break;
                    }
                    en(e);
                    break;
                case 5:
                    en(e);
                    break;
                default:
                    throw Error(v2(329));
            }
        }
        return ie2(e, A()), e.callbackNode === n ? as.bind(null, e) : null;
    }
    function Pn(e, n) {
        for(n &= ~Ei, n &= ~Nn, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n;){
            var t = 31 - Ne(n), r = 1 << t;
            e[t] = -1, n &= ~r;
        }
    }
    function Ni(e) {
        if ((x & 48) != 0) throw Error(v2(327));
        if (Be(), e === X3 && (e.expiredLanes & $2) != 0) {
            var n = $2, t = Et(e, n);
            (Tn & Nn) != 0 && (n = Xn(e, n), t = Et(e, n));
        } else n = Xn(e, 0), t = Et(e, n);
        if (e.tag !== 0 && t === 2 && (x |= 64, e.hydrate && (e.hydrate = !1, Ol(e.containerInfo)), n = So(e), n !== 0 && (t = Et(e, n))), t === 1) throw t = xr, zn(e, 0), Pn(e, n), ie2(e, A()), t;
        return e.finishedWork = e.current.alternate, e.finishedLanes = n, en(e), ie2(e, A()), null;
    }
    function df() {
        if (ge1 !== null) {
            var e = ge1;
            ge1 = null, e.forEach(function(n) {
                n.expiredLanes |= 24 & n.pendingLanes, ie2(n, A());
            });
        }
        ae1();
    }
    function ds(e, n) {
        var t = x;
        x |= 1;
        try {
            return e(n);
        } finally{
            x = t, x === 0 && (Ln(), ae1());
        }
    }
    function ps(e, n) {
        var t = x;
        x &= -2, x |= 8;
        try {
            return e(n);
        } finally{
            x = t, x === 0 && (Ln(), ae1());
        }
    }
    function wr(e, n) {
        R(Si, be), be |= n, Tn |= n;
    }
    function ci() {
        be = Si.current, O3(Si);
    }
    function zn(e, n) {
        e.finishedWork = null, e.finishedLanes = 0;
        var t = e.timeoutHandle;
        if (t !== -1 && (e.timeoutHandle = -1, Ha(t)), j3 !== null) for(t = j3.return; t !== null;){
            var r = t;
            switch(r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && bt();
                    break;
                case 3:
                    Cn(), O3(K3), O3(H1), Zl();
                    break;
                case 5:
                    Xl(r);
                    break;
                case 4:
                    Cn();
                    break;
                case 13:
                    O3(D1);
                    break;
                case 19:
                    O3(D1);
                    break;
                case 10:
                    Wl(r);
                    break;
                case 23:
                case 24:
                    ci();
            }
            t = t.return;
        }
        X3 = e, j3 = Fe2(e.current, null), $2 = be = Tn = n, W2 = 0, xr = null, Ei = Nn = lt = 0;
    }
    function fs(e, n) {
        do {
            var t = j3;
            try {
                if (Bl(), ft.current = hr, mr) {
                    for(var r = I.memoizedState; r !== null;){
                        var l23 = r.queue;
                        l23 !== null && (l23.pending = null), r = r.next;
                    }
                    mr = !1;
                }
                if (ct = 0, B1 = Q3 = I = null, dt = !1, wi.current = null, t === null || t.return === null) {
                    W2 = 1, xr = n, j3 = null;
                    break;
                }
                e: {
                    var i = e, o = t.return, u = t, s15 = n;
                    if (n = $2, u.flags |= 2048, u.firstEffect = u.lastEffect = null, s15 !== null && typeof s15 == "object" && typeof s15.then == "function") {
                        var d = s15;
                        if ((u.mode & 2) == 0) {
                            var y8 = u.alternate;
                            y8 ? (u.updateQueue = y8.updateQueue, u.memoizedState = y8.memoizedState, u.lanes = y8.lanes) : (u.updateQueue = null, u.memoizedState = null);
                        }
                        var C = (D1.current & 1) != 0, h7 = o;
                        do {
                            var S6;
                            if (S6 = h7.tag === 13) {
                                var k = h7.memoizedState;
                                if (k !== null) S6 = k.dehydrated !== null;
                                else {
                                    var E = h7.memoizedProps;
                                    S6 = E.fallback === void 0 ? !1 : E.unstable_avoidThisFallback !== !0 ? !0 : !C;
                                }
                            }
                            if (S6) {
                                var c = h7.updateQueue;
                                if (c === null) {
                                    var a = new Set;
                                    a.add(d), h7.updateQueue = a;
                                } else c.add(d);
                                if ((h7.mode & 2) == 0) {
                                    if (h7.flags |= 64, u.flags |= 16384, u.flags &= -2981, u.tag === 1) {
                                        if (u.alternate === null) u.tag = 17;
                                        else {
                                            var f = Me(-1, 1);
                                            f.tag = 2, Re1(u, f);
                                        }
                                    }
                                    u.lanes |= 1;
                                    break e;
                                }
                                s15 = void 0, u = n;
                                var p6 = i.pingCache;
                                if (p6 === null ? (p6 = i.pingCache = new tf, s15 = new Set, p6.set(d, s15)) : (s15 = p6.get(d), s15 === void 0 && (s15 = new Set, p6.set(d, s15))), !s15.has(u)) {
                                    s15.add(u);
                                    var m4 = pf.bind(null, i, d, u);
                                    d.then(m4, m4);
                                }
                                h7.flags |= 4096, h7.lanes = n;
                                break e;
                            }
                            h7 = h7.return;
                        }while (h7 !== null)
                        s15 = Error((tn(u.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
                    }
                    W2 !== 5 && (W2 = 2), s15 = di(s15, u), h7 = o;
                    do {
                        switch(h7.tag){
                            case 3:
                                i = s15, h7.flags |= 4096, n &= -n, h7.lanes |= n;
                                var _ = qu(h7, i, n);
                                hu(h7, _);
                                break e;
                            case 1:
                                i = s15;
                                var w = h7.type, N = h7.stateNode;
                                if ((h7.flags & 64) == 0 && (typeof w.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (pe2 === null || !pe2.has(N)))) {
                                    h7.flags |= 4096, n &= -n, h7.lanes |= n;
                                    var T = bu(h7, i, n);
                                    hu(h7, T);
                                    break e;
                                }
                        }
                        h7 = h7.return;
                    }while (h7 !== null)
                }
                ms(t);
            } catch (P) {
                n = P, j3 === t && t !== null && (j3 = t = t.return);
                continue;
            }
            break;
        }while (1)
    }
    function cs() {
        var e = kr.current;
        return kr.current = hr, e === null ? hr : e;
    }
    function Et(e, n) {
        var t = x;
        x |= 16;
        var r = cs();
        X3 === e && $2 === n || zn(e, n);
        do try {
            mf();
            break;
        } catch (l24) {
            fs(e, l24);
        }
        while (1)
        if (Bl(), x = t, kr.current = r, j3 !== null) throw Error(v2(261));
        return X3 = null, $2 = 0, W2;
    }
    function mf() {
        for(; j3 !== null;)hs(j3);
    }
    function cf() {
        for(; j3 !== null && !$a();)hs(j3);
    }
    function hs(e) {
        var n = vs(e.alternate, e, be);
        e.memoizedProps = e.pendingProps, n === null ? ms(e) : j3 = n, wi.current = null;
    }
    function ms(e) {
        var n = e;
        do {
            var t = n.alternate;
            if (e = n.return, (n.flags & 2048) == 0) {
                if (t = ef(t, n, be), t !== null) {
                    j3 = t;
                    return;
                }
                if (t = n, t.tag !== 24 && t.tag !== 23 || t.memoizedState === null || (be & 1073741824) != 0 || (t.mode & 4) == 0) {
                    for(var r = 0, l24 = t.child; l24 !== null;)r |= l24.lanes | l24.childLanes, l24 = l24.sibling;
                    t.childLanes = r;
                }
                e !== null && (e.flags & 2048) == 0 && (e.firstEffect === null && (e.firstEffect = n.firstEffect), n.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = n.firstEffect), e.lastEffect = n.lastEffect), 1 < n.flags && (e.lastEffect !== null ? e.lastEffect.nextEffect = n : e.firstEffect = n, e.lastEffect = n));
            } else {
                if (t = nf(n), t !== null) {
                    t.flags &= 2047, j3 = t;
                    return;
                }
                e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048);
            }
            if (n = n.sibling, n !== null) {
                j3 = n;
                return;
            }
            j3 = n = e;
        }while (n !== null)
        W2 === 0 && (W2 = 5);
    }
    function en(e) {
        var n = Sn();
        return Ge(99, hf.bind(null, e, n)), null;
    }
    function hf(e, n) {
        do Be();
        while (yt !== null)
        if ((x & 48) != 0) throw Error(v2(327));
        var t = e.finishedWork;
        if (t === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(v2(177));
        e.callbackNode = null;
        var r = t.lanes | t.childLanes, l25 = r, i = e.pendingLanes & ~l25;
        e.pendingLanes = l25, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= l25, e.mutableReadLanes &= l25, e.entangledLanes &= l25, l25 = e.entanglements;
        for(var o = e.eventTimes, u = e.expirationTimes; 0 < i;){
            var s16 = 31 - Ne(i), d = 1 << s16;
            l25[s16] = 0, o[s16] = -1, u[s16] = -1, i &= ~d;
        }
        if (ge1 !== null && (r & 24) == 0 && ge1.has(e) && ge1.delete(e), e === X3 && (j3 = X3 = null, $2 = 0), 1 < t.flags ? t.lastEffect !== null ? (t.lastEffect.nextEffect = t, r = t.firstEffect) : r = t : r = t.firstEffect, r !== null) {
            if (l25 = x, x |= 32, wi.current = null, Tl = Wt, o = Wo(), Cl(o)) {
                if ("selectionStart" in o) u = {
                    start: o.selectionStart,
                    end: o.selectionEnd
                };
                else e: if (u = (u = o.ownerDocument) && u.defaultView || window, (d = u.getSelection && u.getSelection()) && d.rangeCount !== 0) {
                    u = d.anchorNode, i = d.anchorOffset, s16 = d.focusNode, d = d.focusOffset;
                    try {
                        u.nodeType, s16.nodeType;
                    } catch (P) {
                        u = null;
                        break e;
                    }
                    var y9 = 0, C = -1, h8 = -1, S7 = 0, k = 0, E = o, c = null;
                    n: for(;;){
                        for(var a; E !== u || i !== 0 && E.nodeType !== 3 || (C = y9 + i), E !== s16 || d !== 0 && E.nodeType !== 3 || (h8 = y9 + d), E.nodeType === 3 && (y9 += E.nodeValue.length), (a = E.firstChild) !== null;)c = E, E = a;
                        for(;;){
                            if (E === o) break n;
                            if (c === u && (++S7) === i && (C = y9), c === s16 && (++k) === d && (h8 = y9), (a = E.nextSibling) !== null) break;
                            E = c, c = E.parentNode;
                        }
                        E = a;
                    }
                    u = C === -1 || h8 === -1 ? null : {
                        start: C,
                        end: h8
                    };
                } else u = null;
                u = u || {
                    start: 0,
                    end: 0
                };
            } else u = null;
            Ll = {
                focusedElem: o,
                selectionRange: u
            }, Wt = !1, St = null, Nr = !1, g3 = r;
            do try {
                vf();
            } catch (P) {
                if (g3 === null) throw Error(v2(330));
                Ue(g3, P), g3 = g3.nextEffect;
            }
            while (g3 !== null)
            St = null, g3 = r;
            do try {
                for(o = e; g3 !== null;){
                    var f = g3.flags;
                    if (f & 16 && jn(g3.stateNode, ""), f & 128) {
                        var p7 = g3.alternate;
                        if (p7 !== null) {
                            var m5 = p7.ref;
                            m5 !== null && (typeof m5 == "function" ? m5(null) : m5.current = null);
                        }
                    }
                    switch(f & 1038){
                        case 2:
                            us(g3), g3.flags &= -3;
                            break;
                        case 6:
                            us(g3), g3.flags &= -3, gi(g3.alternate, g3);
                            break;
                        case 1024:
                            g3.flags &= -1025;
                            break;
                        case 1028:
                            g3.flags &= -1025, gi(g3.alternate, g3);
                            break;
                        case 4:
                            gi(g3.alternate, g3);
                            break;
                        case 8:
                            u = g3, rs(o, u);
                            var _ = u.alternate;
                            is(u), _ !== null && is(_);
                    }
                    g3 = g3.nextEffect;
                }
            } catch (P) {
                if (g3 === null) throw Error(v2(330));
                Ue(g3, P), g3 = g3.nextEffect;
            }
            while (g3 !== null)
            if (m5 = Ll, p7 = Wo(), f = m5.focusedElem, o = m5.selectionRange, p7 !== f && f && f.ownerDocument && Bo(f.ownerDocument.documentElement, f)) {
                for(o !== null && Cl(f) && (p7 = o.start, m5 = o.end, m5 === void 0 && (m5 = p7), "selectionStart" in f ? (f.selectionStart = p7, f.selectionEnd = Math.min(m5, f.value.length)) : (m5 = (p7 = f.ownerDocument || document) && p7.defaultView || window, m5.getSelection && (m5 = m5.getSelection(), u = f.textContent.length, _ = Math.min(o.start, u), o = o.end === void 0 ? _ : Math.min(o.end, u), !m5.extend && _ > o && (u = o, o = _, _ = u), u = Vo(f, _), i = Vo(f, o), u && i && (m5.rangeCount !== 1 || m5.anchorNode !== u.node || m5.anchorOffset !== u.offset || m5.focusNode !== i.node || m5.focusOffset !== i.offset) && (p7 = p7.createRange(), p7.setStart(u.node, u.offset), m5.removeAllRanges(), _ > o ? (m5.addRange(p7), m5.extend(i.node, i.offset)) : (p7.setEnd(i.node, i.offset), m5.addRange(p7)))))), p7 = [], m5 = f; m5 = m5.parentNode;)m5.nodeType === 1 && p7.push({
                    element: m5,
                    left: m5.scrollLeft,
                    top: m5.scrollTop
                });
                for(typeof f.focus == "function" && f.focus(), f = 0; f < p7.length; f++)m5 = p7[f], m5.element.scrollLeft = m5.left, m5.element.scrollTop = m5.top;
            }
            Wt = !!Tl, Ll = Tl = null, e.current = t, g3 = r;
            do try {
                for(f = e; g3 !== null;){
                    var w = g3.flags;
                    if (w & 36 && uf(f, g3.alternate, g3), w & 128) {
                        p7 = void 0;
                        var N = g3.ref;
                        if (N !== null) {
                            var T = g3.stateNode;
                            switch(g3.tag){
                                case 5:
                                    p7 = T;
                                    break;
                                default:
                                    p7 = T;
                            }
                            typeof N == "function" ? N(p7) : N.current = p7;
                        }
                    }
                    g3 = g3.nextEffect;
                }
            } catch (P) {
                if (g3 === null) throw Error(v2(330));
                Ue(g3, P), g3 = g3.nextEffect;
            }
            while (g3 !== null)
            g3 = null, Xa(), x = l25;
        } else e.current = t;
        if (Ve) Ve = !1, yt = e, gt = n;
        else for(g3 = r; g3 !== null;)n = g3.nextEffect, g3.nextEffect = null, g3.flags & 8 && (w = g3, w.sibling = null, w.stateNode = null), g3 = n;
        if (r = e.pendingLanes, r === 0 && (pe2 = null), r === 1 ? e === _i ? wt++ : (wt = 0, _i = e) : wt = 0, t = t.stateNode, Ke && typeof Ke.onCommitFiberRoot == "function") try {
            Ke.onCommitFiberRoot(Dl, t, void 0, (t.current.flags & 64) == 64);
        } catch (P) {
        }
        if (ie2(e, A()), Er) throw Er = !1, e = mi, mi = null, e;
        return (x & 8) != 0 || ae1(), null;
    }
    function vf() {
        for(; g3 !== null;){
            var e = g3.alternate;
            Nr || St === null || ((g3.flags & 8) != 0 ? io(g3, St) && (Nr = !0) : g3.tag === 13 && af(e, g3) && io(g3, St) && (Nr = !0));
            var n = g3.flags;
            (n & 256) != 0 && lf(e, g3), (n & 512) == 0 || Ve || (Ve = !0, rt(97, function() {
                return Be(), null;
            })), g3 = g3.nextEffect;
        }
    }
    function Be() {
        if (gt !== 90) {
            var e = 97 < gt ? 97 : gt;
            return gt = 90, Ge(e, yf);
        }
        return !1;
    }
    function of(e, n) {
        xi.push(n, e), Ve || (Ve = !0, rt(97, function() {
            return Be(), null;
        }));
    }
    function ns(e, n) {
        Ci.push(n, e), Ve || (Ve = !0, rt(97, function() {
            return Be(), null;
        }));
    }
    function yf() {
        if (yt === null) return !1;
        var e = yt;
        if (yt = null, (x & 48) != 0) throw Error(v2(331));
        var n = x;
        x |= 32;
        var t = Ci;
        Ci = [];
        for(var r = 0; r < t.length; r += 2){
            var l25 = t[r], i = t[r + 1], o = l25.destroy;
            if (l25.destroy = void 0, typeof o == "function") try {
                o();
            } catch (s17) {
                if (i === null) throw Error(v2(330));
                Ue(i, s17);
            }
        }
        for(t = xi, xi = [], r = 0; r < t.length; r += 2){
            l25 = t[r], i = t[r + 1];
            try {
                var u = l25.create;
                l25.destroy = u();
            } catch (s17) {
                if (i === null) throw Error(v2(330));
                Ue(i, s17);
            }
        }
        for(u = e.current.firstEffect; u !== null;)e = u.nextEffect, u.nextEffect = null, u.flags & 8 && (u.sibling = null, u.stateNode = null), u = e;
        return x = n, ae1(), !0;
    }
    function ys(e, n, t) {
        n = di(t, n), n = qu(e, n, 1), Re1(e, n), n = b4(), e = Pr(e, 1), e !== null && (Bt(e, 1, n), ie2(e, n));
    }
    function Ue(e, n) {
        if (e.tag === 3) ys(e, e, n);
        else for(var t = e.return; t !== null;){
            if (t.tag === 3) {
                ys(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (pe2 === null || !pe2.has(r))) {
                    e = di(n, e);
                    var l26 = bu(t, e, 1);
                    if (Re1(t, l26), l26 = b4(), t = Pr(t, 1), t !== null) Bt(t, 1, l26), ie2(t, l26);
                    else if (typeof r.componentDidCatch == "function" && (pe2 === null || !pe2.has(r))) try {
                        r.componentDidCatch(n, e);
                    } catch (i) {
                    }
                    break;
                }
            }
            t = t.return;
        }
    }
    function pf(e, n, t) {
        var r = e.pingCache;
        r !== null && r.delete(n), n = b4(), e.pingedLanes |= e.suspendedLanes & t, X3 === e && ($2 & t) === t && (W2 === 4 || W2 === 3 && ($2 & 62914560) === $2 && 500 > A() - yi ? zn(e, 0) : Ei |= t), ie2(e, n);
    }
    function sf(e, n) {
        var t = e.stateNode;
        t !== null && t.delete(n), n = 0, n === 0 && (n = e.mode, (n & 2) == 0 ? n = 1 : (n & 4) == 0 ? n = Sn() === 99 ? 1 : 2 : (we1 === 0 && (we1 = Tn), n = fn(62914560 & ~we1), n === 0 && (n = 4194304))), t = b4(), e = Pr(e, n), e !== null && (Bt(e, n, t), ie2(e, t));
    }
    var vs;
    vs = function(e, n, t) {
        var r = n.lanes;
        if (e !== null) {
            if (e.memoizedProps !== n.pendingProps || K3.current) ue = !0;
            else if ((t & r) != 0) ue = (e.flags & 16384) != 0;
            else {
                switch(ue = !1, n.tag){
                    case 3:
                        Hu(n), Gl();
                        break;
                    case 5:
                        xu(n);
                        break;
                    case 1:
                        G2(n.type) && er(n);
                        break;
                    case 4:
                        Yl(n, n.stateNode.containerInfo);
                        break;
                    case 10:
                        r = n.memoizedProps.value;
                        var l27 = n.type._context;
                        R(rr, l27._currentValue), l27._currentValue = r;
                        break;
                    case 13:
                        if (n.memoizedState !== null) return (t & n.child.childLanes) != 0 ? Yu(e, n, t) : (R(D1, D1.current & 1), n = ye2(e, n, t), n !== null ? n.sibling : null);
                        R(D1, D1.current & 1);
                        break;
                    case 19:
                        if (r = (t & n.childLanes) != 0, (e.flags & 64) != 0) {
                            if (r) return Ku(e, n, t);
                            n.flags |= 64;
                        }
                        if (l27 = n.memoizedState, l27 !== null && (l27.rendering = null, l27.tail = null, l27.lastEffect = null), R(D1, D1.current), r) break;
                        return null;
                    case 23:
                    case 24:
                        return n.lanes = 0, ii(e, n, t);
                }
                return ye2(e, n, t);
            }
        } else ue = !1;
        switch(n.lanes = 0, n.tag){
            case 2:
                if (r = n.type, e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps, l27 = wn(n, H1.current), kn(n, t), l27 = ql(null, n, r, e, l27, t), n.flags |= 1, typeof l27 == "object" && l27 !== null && typeof l27.render == "function" && l27.$$typeof === void 0) {
                    if (n.tag = 1, n.memoizedState = null, n.updateQueue = null, G2(r)) {
                        var i = !0;
                        er(n);
                    } else i = !1;
                    n.memoizedState = l27.state !== null && l27.state !== void 0 ? l27.state : null, Hl(n);
                    var o = r.getDerivedStateFromProps;
                    typeof o == "function" && or(n, r, o, e), l27.updater = ur, n.stateNode = l27, l27._reactInternals = n, Al(n, r, e, t), n = oi(null, n, r, !0, i, t);
                } else n.tag = 0, J2(null, n, l27, t), n = n.child;
                return n;
            case 16:
                l27 = n.elementType;
                e: {
                    switch(e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps, i = l27._init, l27 = i(l27._payload), n.type = l27, i = n.tag = gf(l27), e = oe1(l27, e), i){
                        case 0:
                            n = li(null, n, l27, e, t);
                            break e;
                        case 1:
                            n = Wu(null, n, l27, e, t);
                            break e;
                        case 11:
                            n = ju(null, n, l27, e, t);
                            break e;
                        case 14:
                            n = Vu(null, n, l27, oe1(l27.type, e), r, t);
                            break e;
                    }
                    throw Error(v2(306, l27, ""));
                }
                return n;
            case 0:
                return r = n.type, l27 = n.pendingProps, l27 = n.elementType === r ? l27 : oe1(r, l27), li(e, n, r, l27, t);
            case 1:
                return r = n.type, l27 = n.pendingProps, l27 = n.elementType === r ? l27 : oe1(r, l27), Wu(e, n, r, l27, t);
            case 3:
                if (Hu(n), r = n.updateQueue, e === null || r === null) throw Error(v2(282));
                if (r = n.pendingProps, l27 = n.memoizedState, l27 = l27 !== null ? l27.element : null, mu(e, n), it(n, r, null, t), r = n.memoizedState.element, r === l27) Gl(), n = ye2(e, n, t);
                else {
                    if (l27 = n.stateNode, (i = l27.hydrate) && (je1 = yn(n.stateNode.containerInfo.firstChild), ve1 = n, i = ce = !0), i) {
                        if (e = l27.mutableSourceEagerHydrationData, e != null) for(l27 = 0; l27 < e.length; l27 += 2)i = e[l27], i._workInProgressVersionPrimary = e[l27 + 1], _n.push(i);
                        for(t = ku(n, null, r, t), n.child = t; t;)t.flags = t.flags & -3 | 1024, t = t.sibling;
                    } else J2(e, n, r, t), Gl();
                    n = n.child;
                }
                return n;
            case 5:
                return xu(n), e === null && Kl(n), r = n.type, l27 = n.pendingProps, i = e !== null ? e.memoizedProps : null, o = l27.children, zl(r, l27) ? o = null : i !== null && zl(r, i) && (n.flags |= 16), Bu(e, n), J2(e, n, o, t), n.child;
            case 6:
                return e === null && Kl(n), null;
            case 13:
                return Yu(e, n, t);
            case 4:
                return Yl(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = cr(n, null, r, t) : J2(e, n, r, t), n.child;
            case 11:
                return r = n.type, l27 = n.pendingProps, l27 = n.elementType === r ? l27 : oe1(r, l27), ju(e, n, r, l27, t);
            case 7:
                return J2(e, n, n.pendingProps, t), n.child;
            case 8:
                return J2(e, n, n.pendingProps.children, t), n.child;
            case 12:
                return J2(e, n, n.pendingProps.children, t), n.child;
            case 10:
                e: {
                    r = n.type._context, l27 = n.pendingProps, o = n.memoizedProps, i = l27.value;
                    var u = n.type._context;
                    if (R(rr, u._currentValue), u._currentValue = i, o !== null) {
                        if (u = o.value, i = ne2(u, i) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(u, i) : 1073741823) | 0, i === 0) {
                            if (o.children === l27.children && !K3.current) {
                                n = ye2(e, n, t);
                                break e;
                            }
                        } else for(u = n.child, u !== null && (u.return = n); u !== null;){
                            var s17 = u.dependencies;
                            if (s17 !== null) {
                                o = u.child;
                                for(var d = s17.firstContext; d !== null;){
                                    if (d.context === r && (d.observedBits & i) != 0) {
                                        u.tag === 1 && (d = Me(-1, t & -t), d.tag = 2, Re1(u, d)), u.lanes |= t, d = u.alternate, d !== null && (d.lanes |= t), pu(u.return, t), s17.lanes |= t;
                                        break;
                                    }
                                    d = d.next;
                                }
                            } else o = u.tag === 10 && u.type === n.type ? null : u.child;
                            if (o !== null) o.return = u;
                            else for(o = u; o !== null;){
                                if (o === n) {
                                    o = null;
                                    break;
                                }
                                if (u = o.sibling, u !== null) {
                                    u.return = o.return, o = u;
                                    break;
                                }
                                o = o.return;
                            }
                            u = o;
                        }
                    }
                    J2(e, n, l27.children, t), n = n.child;
                }
                return n;
            case 9:
                return l27 = n.type, i = n.pendingProps, r = i.children, kn(n, t), l27 = te1(l27, i.unstable_observedBits), r = r(l27), n.flags |= 1, J2(e, n, r, t), n.child;
            case 14:
                return l27 = n.type, i = oe1(l27, n.pendingProps), i = oe1(l27.type, i), Vu(e, n, l27, i, r, t);
            case 15:
                return Uu(e, n, n.type, n.pendingProps, r, t);
            case 17:
                return r = n.type, l27 = n.pendingProps, l27 = n.elementType === r ? l27 : oe1(r, l27), e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), n.tag = 1, G2(r) ? (e = !0, er(n)) : e = !1, kn(n, t), wu(n, r, l27), Al(n, r, l27, t), oi(null, n, r, !0, e, t);
            case 19:
                return Ku(e, n, t);
            case 23:
                return ii(e, n, t);
            case 24:
                return ii(e, n, t);
        }
        throw Error(v2(156, n.tag));
    };
    function wf(e, n, t, r) {
        this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function re(e, n, t, r) {
        return new wf(e, n, t, r);
    }
    function ri(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function gf(e) {
        if (typeof e == "function") return ri(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Nt) return 11;
            if (e === Tt) return 14;
        }
        return 2;
    }
    function Fe2(e, n) {
        var t = e.alternate;
        return t === null ? (t = re(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.nextEffect = null, t.firstEffect = null, t.lastEffect = null), t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
    }
    function fr(e, n, t, r, l28, i) {
        var o = 2;
        if (r = e, typeof e == "function") ri(e) && (o = 1);
        else if (typeof e == "string") o = 5;
        else e: switch(e){
            case Ee1:
                return xn(t.children, l28, i, n);
            case ji:
                o = 8, l28 |= 16;
                break;
            case Dr:
                o = 8, l28 |= 1;
                break;
            case Rn:
                return e = re(12, t, n, l28 | 8), e.elementType = Rn, e.type = Rn, e.lanes = i, e;
            case Dn:
                return e = re(13, t, n, l28), e.type = Dn, e.elementType = Dn, e.lanes = i, e;
            case Pt:
                return e = re(19, t, n, l28), e.elementType = Pt, e.lanes = i, e;
            case Br:
                return ui(t, l28, i, n);
            case Wr:
                return e = re(24, t, n, l28), e.elementType = Wr, e.lanes = i, e;
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case Ir:
                        o = 10;
                        break e;
                    case Fr:
                        o = 9;
                        break e;
                    case Nt:
                        o = 11;
                        break e;
                    case Tt:
                        o = 14;
                        break e;
                    case jr:
                        o = 16, r = null;
                        break e;
                    case Ur:
                        o = 22;
                        break e;
                }
                throw Error(v2(130, e == null ? e : typeof e, ""));
        }
        return n = re(o, t, n, l28), n.elementType = e, n.type = r, n.lanes = i, n;
    }
    function xn(e, n, t, r) {
        return e = re(7, e, r, n), e.lanes = t, e;
    }
    function ui(e, n, t, r) {
        return e = re(23, e, r, n), e.elementType = Br, e.lanes = t, e;
    }
    function Ql(e, n, t) {
        return e = re(6, e, null, n), e.lanes = t, e;
    }
    function $l(e, n, t) {
        return n = re(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, n;
    }
    function Sf(e, n, t) {
        this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = t, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = ml(0), this.expirationTimes = ml(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ml(0), this.mutableSourceEagerHydrationData = null;
    }
    function Ef(e, n, t) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Ae1,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: n,
            implementation: t
        };
    }
    function Tr(e, n, t, r) {
        var l28 = n.current, i = b4(), o = De2(l28);
        e: if (t) {
            t = t._reactInternals;
            n: {
                if ($e1(t) !== t || t.tag !== 1) throw Error(v2(170));
                var u = t;
                do {
                    switch(u.tag){
                        case 3:
                            u = u.stateNode.context;
                            break n;
                        case 1:
                            if (G2(u.type)) {
                                u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                break n;
                            }
                    }
                    u = u.return;
                }while (u !== null)
                throw Error(v2(171));
            }
            if (t.tag === 1) {
                var s18 = t.type;
                if (G2(s18)) {
                    t = ru(t, s18, u);
                    break e;
                }
            }
            t = u;
        } else t = ze;
        return n.context === null ? n.context = t : n.pendingContext = t, n = Me(i, o), n.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (n.callback = r), Re1(l28, n), Ie2(l28, o, i), o;
    }
    function Pi(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function gs(e, n) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var t = e.retryLane;
            e.retryLane = t !== 0 && t < n ? t : n;
        }
    }
    function Ti(e, n) {
        gs(e, n), (e = e.alternate) && gs(e, n);
    }
    function kf() {
        return null;
    }
    function Li(e, n, t) {
        var r = t != null && t.hydrationOptions != null && t.hydrationOptions.mutableSources || null;
        if (t = new Sf(e, n, t != null && t.hydrate === !0), n = re(3, null, null, n === 2 ? 7 : n === 1 ? 3 : 0), t.current = n, n.stateNode = t, Hl(n), e[vn] = t.current, Zo(e.nodeType === 8 ? e.parentNode : e), r) for(e = 0; e < r.length; e++){
            n = r[e];
            var l28 = n._getVersion;
            l28 = l28(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
                n,
                l28
            ] : t.mutableSourceEagerHydrationData.push(n, l28);
        }
        this._internalRoot = t;
    }
    Li.prototype.render = function(e) {
        Tr(e, this._internalRoot, null, null);
    };
    Li.prototype.unmount = function() {
        var e = this._internalRoot, n = e.containerInfo;
        Tr(null, e, null, function() {
            n[vn] = null;
        });
    };
    function kt(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function xf(e, n) {
        if (n || (n = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, n = !(!n || n.nodeType !== 1 || !n.hasAttribute("data-reactroot"))), !n) for(var t; t = e.lastChild;)e.removeChild(t);
        return new Li(e, 0, n ? {
            hydrate: !0
        } : void 0);
    }
    function Lr(e, n, t, r, l29) {
        var i = t._reactRootContainer;
        if (i) {
            var o = i._internalRoot;
            if (typeof l29 == "function") {
                var u = l29;
                l29 = function() {
                    var d = Pi(o);
                    u.call(d);
                };
            }
            Tr(n, o, e, l29);
        } else {
            if (i = t._reactRootContainer = xf(t, r), o = i._internalRoot, typeof l29 == "function") {
                var s19 = l29;
                l29 = function() {
                    var d = Pi(o);
                    s19.call(d);
                };
            }
            ps(function() {
                Tr(n, o, e, l29);
            });
        }
        return Pi(o);
    }
    oo = function(e) {
        if (e.tag === 13) {
            var n = b4();
            Ie2(e, 4, n), Ti(e, 4);
        }
    };
    ul = function(e) {
        if (e.tag === 13) {
            var n = b4();
            Ie2(e, 67108864, n), Ti(e, 67108864);
        }
    };
    uo = function(e) {
        if (e.tag === 13) {
            var n = b4(), t = De2(e);
            Ie2(e, t, n), Ti(e, t);
        }
    };
    so = function(e, n) {
        return n();
    };
    el = function(e, n, t) {
        switch(n){
            case "input":
                if (Yr(e, t), n = t.name, t.type === "radio" && n != null) {
                    for(t = e; t.parentNode;)t = t.parentNode;
                    for(t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++){
                        var r = t[n];
                        if (r !== e && r.form === e.form) {
                            var l29 = Rt(r);
                            if (!l29) throw Error(v2(90));
                            Bi(r), Yr(r, l29);
                        }
                    }
                }
                break;
            case "textarea":
                $i(e, t);
                break;
            case "select":
                n = t.value, n != null && rn(e, !!t.multiple, n, !1);
        }
    };
    nl = ds;
    eo = function(e, n, t, r, l30) {
        var i = x;
        x |= 4;
        try {
            return Ge(98, e.bind(null, n, t, r, l30));
        } finally{
            x = i, x === 0 && (Ln(), ae1());
        }
    };
    tl = function() {
        (x & 49) == 0 && (df(), Be());
    };
    no = function(e, n) {
        var t = x;
        x |= 2;
        try {
            return e(n);
        } finally{
            x = t, x === 0 && (Ln(), ae1());
        }
    };
    function ws(e, n) {
        var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!kt(n)) throw Error(v2(200));
        return Ef(e, n, null, t);
    }
    var Cf = {
        Events: [
            Vn,
            pn,
            Rt,
            qi,
            bi,
            Be,
            {
                current: !1
            }
        ]
    }, xt = {
        findFiberByHostInstance: Ye,
        bundleType: 0,
        version: "17.0.2",
        rendererPackageName: "react-dom"
    }, _f = {
        bundleType: xt.bundleType,
        version: xt.version,
        rendererPackageName: xt.rendererPackageName,
        rendererConfig: xt.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: He.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = lo(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: xt.findFiberByHostInstance || kf,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && (Ct = __REACT_DEVTOOLS_GLOBAL_HOOK__, !Ct.isDisabled && Ct.supportsFiber)) try {
        Dl = Ct.inject(_f), Ke = Ct;
    } catch (e) {
    }
    var Ct;
    ee1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cf;
    ee1.createPortal = ws;
    ee1.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var n = e._reactInternals;
        if (n === void 0) throw typeof e.render == "function" ? Error(v2(188)) : Error(v2(268, Object.keys(e)));
        return e = lo(n), e = e === null ? null : e.stateNode, e;
    };
    ee1.flushSync = function(e, n) {
        var t = x;
        if ((t & 48) != 0) return e(n);
        x |= 1;
        try {
            if (e) return Ge(99, e.bind(null, n));
        } finally{
            x = t, ae1();
        }
    };
    ee1.hydrate = function(e, n, t) {
        if (!kt(n)) throw Error(v2(200));
        return Lr(null, e, n, !0, t);
    };
    ee1.render = function(e, n, t) {
        if (!kt(n)) throw Error(v2(200));
        return Lr(null, e, n, !1, t);
    };
    ee1.unmountComponentAtNode = function(e) {
        if (!kt(e)) throw Error(v2(40));
        return e._reactRootContainer ? (ps(function() {
            Lr(null, null, e, !1, function() {
                e._reactRootContainer = null, e[vn] = null;
            });
        }), !0) : !1;
    };
    ee1.unstable_batchedUpdates = ds;
    ee1.unstable_createPortal = function(e, n) {
        return ws(e, n, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
    };
    ee1.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
        if (!kt(t)) throw Error(v2(200));
        if (e == null || e._reactInternals === void 0) throw Error(v2(38));
        return Lr(e, n, t, !1, r);
    };
    ee1.version = "17.0.2";
});
var zi = Oi((zf, Es)=>{
    "use strict";
    function ks() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ks);
        } catch (e) {
            console.error(e);
        }
    }
    ks(), Es.exports = Ss();
});
var Pf = Mi(zi());
var export_default3 = Pf.default;
function getLengths(b64) {
    const len = b64.length;
    let validLen = b64.indexOf("=");
    if (validLen === -1) {
        validLen = len;
    }
    const placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
function init(lookup, revLookup, urlsafe = false) {
    function _byteLength(validLen, placeHoldersLen) {
        return Math.floor((validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen);
    }
    function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(buf, start, end) {
        const out = new Array((end - start) / 3);
        for(let i = start, curTriplet = 0; i < end; i += 3){
            out[curTriplet++] = tripletToBase64((buf[i] << 16) + (buf[i + 1] << 8) + buf[i + 2]);
        }
        return out.join("");
    }
    return {
        byteLength (b64) {
            return _byteLength.apply(null, getLengths(b64));
        },
        toUint8Array (b64) {
            const [validLen, placeHoldersLen] = getLengths(b64);
            const buf = new Uint8Array(_byteLength(validLen, placeHoldersLen));
            const len = placeHoldersLen ? validLen - 4 : validLen;
            let tmp;
            let curByte = 0;
            let i;
            for(i = 0; i < len; i += 4){
                tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
                buf[curByte++] = tmp >> 16 & 255;
                buf[curByte++] = tmp >> 8 & 255;
                buf[curByte++] = tmp & 255;
            }
            if (placeHoldersLen === 2) {
                tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
                buf[curByte++] = tmp & 255;
            } else if (placeHoldersLen === 1) {
                tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
                buf[curByte++] = tmp >> 8 & 255;
                buf[curByte++] = tmp & 255;
            }
            return buf;
        },
        fromUint8Array (buf) {
            const maxChunkLength = 16383;
            const len = buf.length;
            const extraBytes = len % 3;
            const len2 = len - extraBytes;
            const parts = new Array(Math.ceil(len2 / 16383) + (extraBytes ? 1 : 0));
            let curChunk = 0;
            let chunkEnd;
            for(let i = 0; i < len2; i += maxChunkLength){
                chunkEnd = i + maxChunkLength;
                parts[curChunk++] = encodeChunk(buf, i, chunkEnd > len2 ? len2 : chunkEnd);
            }
            let tmp;
            if (extraBytes === 1) {
                tmp = buf[len2];
                parts[curChunk] = lookup[tmp >> 2] + lookup[tmp << 4 & 63];
                if (!urlsafe) parts[curChunk] += "==";
            } else if (extraBytes === 2) {
                tmp = buf[len2] << 8 | buf[len2 + 1] & 255;
                parts[curChunk] = lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63];
                if (!urlsafe) parts[curChunk] += "=";
            }
            return parts.join("");
        }
    };
}
const lookup = [];
const revLookup = [];
const code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
for(let i = 0, l30 = code.length; i < l30; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
const { byteLength , toUint8Array , fromUint8Array  } = init(lookup, revLookup, true);
const decoder = new TextDecoder();
const encoder = new TextEncoder();
function toHexString(buf) {
    return buf.reduce((hex, __byte)=>`${hex}${__byte < 16 ? "0" : ""}${__byte.toString(16)}`
    , "");
}
function fromHexString(hex) {
    const len = hex.length;
    if (len % 2 || !/^[0-9a-fA-F]+$/.test(hex)) {
        throw new TypeError("Invalid hex string.");
    }
    hex = hex.toLowerCase();
    const buf = new Uint8Array(Math.floor(len / 2));
    const end = len / 2;
    for(let i1 = 0; i1 < end; ++i1){
        buf[i1] = parseInt(hex.substr(i1 * 2, 2), 16);
    }
    return buf;
}
function decode(buf, encoding = "utf8") {
    if (/^utf-?8$/i.test(encoding)) {
        return decoder.decode(buf);
    } else if (/^base64$/i.test(encoding)) {
        return fromUint8Array(buf);
    } else if (/^hex(?:adecimal)?$/i.test(encoding)) {
        return toHexString(buf);
    } else {
        throw new TypeError("Unsupported string encoding.");
    }
}
function encode(str, encoding = "utf8") {
    if (/^utf-?8$/i.test(encoding)) {
        return encoder.encode(str);
    } else if (/^base64$/i.test(encoding)) {
        return toUint8Array(str);
    } else if (/^hex(?:adecimal)?$/i.test(encoding)) {
        return fromHexString(str);
    } else {
        throw new TypeError("Unsupported string encoding.");
    }
}
class SHA256 {
    hashSize = 32;
    _buf;
    _bufIdx;
    _count;
    _K;
    _H;
    _finalized;
    constructor(){
        this._buf = new Uint8Array(64);
        this._K = new Uint32Array([
            1116352408,
            1899447441,
            3049323471,
            3921009573,
            961987163,
            1508970993,
            2453635748,
            2870763221,
            3624381080,
            310598401,
            607225278,
            1426881987,
            1925078388,
            2162078206,
            2614888103,
            3248222580,
            3835390401,
            4022224774,
            264347078,
            604807628,
            770255983,
            1249150122,
            1555081692,
            1996064986,
            2554220882,
            2821834349,
            2952996808,
            3210313671,
            3336571891,
            3584528711,
            113926993,
            338241895,
            666307205,
            773529912,
            1294757372,
            1396182291,
            1695183700,
            1986661051,
            2177026350,
            2456956037,
            2730485921,
            2820302411,
            3259730800,
            3345764771,
            3516065817,
            3600352804,
            4094571909,
            275423344,
            430227734,
            506948616,
            659060556,
            883997877,
            958139571,
            1322822218,
            1537002063,
            1747873779,
            1955562222,
            2024104815,
            2227730452,
            2361852424,
            2428436474,
            2756734187,
            3204031479,
            3329325298
        ]);
        this.init();
    }
    init() {
        this._H = new Uint32Array([
            1779033703,
            3144134277,
            1013904242,
            2773480762,
            1359893119,
            2600822924,
            528734635,
            1541459225
        ]);
        this._bufIdx = 0;
        this._count = new Uint32Array(2);
        this._buf.fill(0);
        this._finalized = false;
        return this;
    }
    update(msg, inputEncoding) {
        if (msg === null) {
            throw new TypeError("msg must be a string or Uint8Array.");
        } else if (typeof msg === "string") {
            msg = encode(msg, inputEncoding);
        }
        for(let i1 = 0, len = msg.length; i1 < len; i1++){
            this._buf[this._bufIdx++] = msg[i1];
            if (this._bufIdx === 64) {
                this._transform();
                this._bufIdx = 0;
            }
        }
        const c = this._count;
        if ((c[0] += msg.length << 3) < msg.length << 3) {
            c[1]++;
        }
        c[1] += msg.length >>> 29;
        return this;
    }
    digest(outputEncoding) {
        if (this._finalized) {
            throw new Error("digest has already been called.");
        }
        this._finalized = true;
        const b4 = this._buf;
        let idx = this._bufIdx;
        b4[idx++] = 128;
        while(idx !== 56){
            if (idx === 64) {
                this._transform();
                idx = 0;
            }
            b4[idx++] = 0;
        }
        const c = this._count;
        b4[56] = c[1] >>> 24 & 255;
        b4[57] = c[1] >>> 16 & 255;
        b4[58] = c[1] >>> 8 & 255;
        b4[59] = c[1] >>> 0 & 255;
        b4[60] = c[0] >>> 24 & 255;
        b4[61] = c[0] >>> 16 & 255;
        b4[62] = c[0] >>> 8 & 255;
        b4[63] = c[0] >>> 0 & 255;
        this._transform();
        const hash = new Uint8Array(32);
        for(let i1 = 0; i1 < 8; i1++){
            hash[(i1 << 2) + 0] = this._H[i1] >>> 24 & 255;
            hash[(i1 << 2) + 1] = this._H[i1] >>> 16 & 255;
            hash[(i1 << 2) + 2] = this._H[i1] >>> 8 & 255;
            hash[(i1 << 2) + 3] = this._H[i1] >>> 0 & 255;
        }
        this.init();
        return outputEncoding ? decode(hash, outputEncoding) : hash;
    }
    _transform() {
        const h9 = this._H;
        let h0 = h9[0];
        let h11 = h9[1];
        let h21 = h9[2];
        let h31 = h9[3];
        let h41 = h9[4];
        let h51 = h9[5];
        let h61 = h9[6];
        let h71 = h9[7];
        const w = new Uint32Array(16);
        let i1;
        for(i1 = 0; i1 < 16; i1++){
            w[i1] = this._buf[(i1 << 2) + 3] | this._buf[(i1 << 2) + 2] << 8 | this._buf[(i1 << 2) + 1] << 16 | this._buf[i1 << 2] << 24;
        }
        for(i1 = 0; i1 < 64; i1++){
            let tmp;
            if (i1 < 16) {
                tmp = w[i1];
            } else {
                let a = w[i1 + 1 & 15];
                let b4 = w[i1 + 14 & 15];
                tmp = w[i1 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b4 >>> 17 ^ b4 >>> 19 ^ b4 >>> 10 ^ b4 << 15 ^ b4 << 13) + w[i1 & 15] + w[i1 + 9 & 15] | 0;
            }
            tmp = tmp + h71 + (h41 >>> 6 ^ h41 >>> 11 ^ h41 >>> 25 ^ h41 << 26 ^ h41 << 21 ^ h41 << 7) + (h61 ^ h41 & (h51 ^ h61)) + this._K[i1] | 0;
            h71 = h61;
            h61 = h51;
            h51 = h41;
            h41 = h31 + tmp;
            h31 = h21;
            h21 = h11;
            h11 = h0;
            h0 = tmp + (h11 & h21 ^ h31 & (h11 ^ h21)) + (h11 >>> 2 ^ h11 >>> 13 ^ h11 >>> 22 ^ h11 << 30 ^ h11 << 19 ^ h11 << 10) | 0;
        }
        h9[0] = h9[0] + h0 | 0;
        h9[1] = h9[1] + h11 | 0;
        h9[2] = h9[2] + h21 | 0;
        h9[3] = h9[3] + h31 | 0;
        h9[4] = h9[4] + h41 | 0;
        h9[5] = h9[5] + h51 | 0;
        h9[6] = h9[6] + h61 | 0;
        h9[7] = h9[7] + h71 | 0;
    }
}
function sha256(msg, inputEncoding, outputEncoding) {
    return new SHA256().update(msg, inputEncoding).digest(outputEncoding);
}
class User {
    _id;
    name;
    surname = '';
    email;
    pwd;
    profile_slot_1 = '';
    profile_slot_2 = '';
    categories = [];
    image = '';
    optional_image = '';
    social_media = [];
    verified;
    constructor(user1){
        this.email = user1.email;
        this.name = user1.name;
        this.surname = user1.surname;
        this.verified = false;
        this.pwd = sha256(user1.pwd, "utf8", "hex");
    }
}
const Footer = ({ dynamic  })=>{
    const [styles, setStyle] = ke({
        margin: '6rem 0 0 0'
    });
    pe1(()=>{
        if (dynamic && window.outerHeight - 150 >= document.getElementById('app').clientHeight) {
            setStyle({
                position: 'fixed',
                bottom: '0'
            });
        }
    }, []);
    return export_default1.createElement("footer", {
        style: styles
    }, export_default1.createElement("div", {
        className: "footer-credits"
    }, "\xa9 ResearcherZone 2021 \u2013 cmgdragon ", export_default1.createElement("span", {
        role: "img"
    }, "\u{1f432}")), export_default1.createElement("a", {
        href: "https://github.com/cmgdragon/researcherzone",
        target: "_blank",
        "aria-hidden": "true"
    }, export_default1.createElement("img", {
        src: `${'https://researcher.zone/'}img/github.png`
    })));
};
const Register = ({ changeRoute  })=>{
    const [inputs, setInputs] = ke({
        email: '',
        name: '',
        password: '',
        password2: ''
    });
    const [errors, setError] = ke({
        email: '',
        name: '',
        password: '',
        password2: '',
        form: ''
    });
    const [sending, setSending] = ke(false);
    const validate = ({ target  })=>{
        setInputs({
            ...inputs,
            [target.id]: target.value
        });
        switch(target.id){
            case 'name':
                if (target.value.length < 3) {
                    target.classList.add('invalid');
                    setError({
                        ...errors,
                        [target.id]: 'Too short! Min. 3 chars.'
                    });
                    return;
                }
                setError({
                    ...errors,
                    [target.id]: '✓'
                });
                target.classList.remove('invalid');
                break;
            case 'password':
                if (target.value.length < 8) {
                    target.classList.add('invalid');
                    setError({
                        ...errors,
                        [target.id]: 'Too short! Min. 8 chars.'
                    });
                    return;
                } else {
                    if (target.value !== document.getElementById('password2').value) {
                        target.classList.remove('invalid');
                        document.getElementById('password2').classList.add('invalid');
                        setError({
                            ...errors,
                            password2: 'Passwords must match!',
                            [target.id]: '✓'
                        });
                        return;
                    }
                }
                setError({
                    ...errors,
                    password2: '✓',
                    [target.id]: '✓'
                });
                document.getElementById('password2').classList.remove('invalid');
                target.classList.remove('invalid');
                break;
            case 'password2':
                if (target.value !== document.getElementById('password').value) {
                    target.classList.add('invalid');
                    setError({
                        ...errors,
                        [target.id]: 'Passwords must match!'
                    });
                    return;
                }
                setError({
                    ...errors,
                    [target.id]: '✓'
                });
                target.classList.remove('invalid');
                break;
            case 'email':
                if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(target.value)) {
                    target.classList.add('invalid');
                    setError({
                        ...errors,
                        [target.id]: 'Invalid email'
                    });
                    return;
                }
                setError({
                    ...errors,
                    [target.id]: '✓'
                });
                target.classList.remove('invalid');
        }
    };
    const canBeSent = ()=>{
        for (const [key, value] of Object.entries(errors)){
            if (key === 'form') continue;
            if (value !== '✓') return false;
        }
        return true;
    };
    const register = async (event)=>{
        event.preventDefault();
        setSending(true);
        if (!canBeSent()) return;
        const newUser = new User({
            email: [
                ...event.target
            ].find((input)=>input.id === 'email'
            ).value,
            name: [
                ...event.target
            ].find((input)=>input.id === 'name'
            ).value,
            surname: [
                ...event.target
            ].find((input)=>input.id === 'surname'
            ).value,
            pwd: [
                ...event.target
            ].find((input)=>input.id === 'password'
            ).value
        });
        const request = await fetch('/register', {
            method: 'post',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newUser)
        });
        const response = await request.json();
        switch(response.status){
            case 200:
                changeRoute('newuser');
                break;
            default:
                setError({
                    ...errors,
                    form: response.message
                });
                setSending(false);
        }
    };
    return export_default1.createElement(export_default1.Fragment, null, export_default1.createElement("div", {
        className: "container row"
    }, export_default1.createElement("pre", {
        className: "red-text"
    }, errors.form), export_default1.createElement("form", {
        className: "col s12",
        onSubmit: register
    }, export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("div", {
        className: "input-field col s6"
    }, export_default1.createElement("input", {
        id: "name",
        type: "text",
        onChange: validate
    }), export_default1.createElement("span", {
        className: `helper-text ${errors.name === '✓' ? 'green-text accent-4' : 'red-text'}`
    }, errors.name), export_default1.createElement("label", {
        htmlFor: "name"
    }, "Name")), export_default1.createElement("div", {
        className: "input-field col s6"
    }, export_default1.createElement("input", {
        id: "surname",
        type: "text"
    }), export_default1.createElement("label", {
        htmlFor: "surname"
    }, "Last Name"))), export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "password",
        type: "password",
        onChange: validate
    }), export_default1.createElement("span", {
        className: `helper-text ${errors.password === '✓' ? 'green-text accent-4' : 'red-text'}`
    }, errors.password), export_default1.createElement("label", {
        htmlFor: "password"
    }, "Password"))), export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "password2",
        type: "password",
        onChange: validate
    }), export_default1.createElement("span", {
        className: `helper-text ${errors.password2 === '✓' ? 'green-text accent-4' : 'red-text'}`
    }, errors.password2), export_default1.createElement("label", {
        htmlFor: "password2"
    }, "Repeat password"))), export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "email",
        type: "email",
        onChange: validate
    }), export_default1.createElement("span", {
        className: `helper-text ${errors.email === '✓' ? 'green-text accent-4' : 'red-text'}`
    }, errors.email), export_default1.createElement("label", {
        htmlFor: "email"
    }, "Email"))), export_default1.createElement("button", {
        id: "send-form",
        className: "btn waves-effect waves-light green accent-4",
        type: "submit",
        name: "action",
        disabled: !(errors.name === '✓' && errors.password === '✓' && errors.password2 === '✓' && errors.email === '✓') || sending
    }, sending ? 'Registering...' : 'Register', export_default1.createElement("i", {
        className: "material-icons right"
    }, "done")))), export_default1.createElement("div", {
        className: "container"
    }, "Already a member? ", export_default1.createElement("a", {
        href: "#",
        className: "link",
        onClick: ()=>changeRoute('login')
    }, "Log in")), export_default1.createElement(Footer, {
        dynamic: true
    }));
};
const Login = ({ registered , changeRoute  })=>{
    const [error, setError] = ke('');
    const [message, setMessage] = ke(undefined);
    pe1(()=>{
        if (registered) {
            setMessage('We have sent a verification URL to your email. Check your spam folder.');
        }
        if (window.location.search.includes('verification_successful')) {
            setMessage('Verification successful! Please, log in');
        }
    }, []);
    const login = async (event)=>{
        event.preventDefault();
        setMessage(undefined);
        const login1 = {
        };
        login1.email = [
            ...event.target
        ].find((input)=>input.id === 'email'
        ).value;
        login1.pwd = [
            ...event.target
        ].find((input)=>input.id === 'password'
        ).value;
        const request = await fetch('/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login1)
        });
        const response = await request.json();
        switch(response.status){
            case 200:
                window.location.href = "/";
                break;
            default:
                setError(response.message);
        }
    };
    return export_default1.createElement(export_default1.Fragment, null, export_default1.createElement("div", {
        className: "container row"
    }, export_default1.createElement("form", {
        className: "col s12",
        onSubmit: login
    }, export_default1.createElement("pre", {
        className: "green-text"
    }, message), export_default1.createElement("pre", {
        className: "red-text"
    }, error), export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "email",
        type: "email"
    }), export_default1.createElement("label", {
        htmlFor: "email"
    }, "Email"))), export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "password",
        type: "password"
    }), export_default1.createElement("label", {
        htmlFor: "password"
    }, "Password"))), export_default1.createElement("button", {
        id: "send-form",
        className: "btn waves-effect waves-light blue accent-4",
        type: "submit",
        name: "action"
    }, "Login", export_default1.createElement("i", {
        className: "material-icons right"
    }, "login")))), export_default1.createElement("div", {
        className: "container"
    }, "Not yet a member? ", export_default1.createElement("a", {
        href: "#",
        className: "link",
        onClick: ()=>changeRoute('register')
    }, "Register")), export_default1.createElement(Footer, {
        dynamic: true
    }));
};
const Auth = ()=>{
    const [router, setRouter] = ke('login');
    const changeRoute = (route)=>setRouter(route)
    ;
    return export_default1.createElement("div", {
        className: "auth"
    }, export_default1.createElement("div", {
        className: "app__auth-header"
    }, export_default1.createElement("img", {
        src: "img/icon.png",
        alt: "ResearcherZone"
    }), export_default1.createElement("h1", null, "ResearcherZone")), router === 'login' || router === 'newuser' ? export_default1.createElement(Login, {
        registered: router === 'newuser' ? true : false,
        changeRoute: changeRoute
    }) : export_default1.createElement(Register, {
        changeRoute: changeRoute
    }));
};
const getUserInfo = async ()=>{
    try {
        const request = await fetch(`${'https://researcher.zone/'}getuserinfo`, {
            headers: {
                'Content-Type': 'application/json',
                'pragma': 'no-cache',
                'cache-control': 'no-cache'
            }
        });
        const { isGuest , user: user1 , documents  } = await request.json();
        return {
            isGuest,
            user: user1,
            documents
        };
    } catch ({ message  }) {
        return false;
    }
};
const UserContext = Oe(false);
const UserInfoContext = ({ children  })=>{
    const [userInfo, setUserInfo] = ke('loading');
    pe1(async ()=>{
        try {
            const userInfo1 = await getUserInfo();
            setUserInfo(userInfo1);
        } catch (error) {
            console.error(error);
        }
    }, []);
    return export_default1.createElement(UserContext.Provider, {
        value: userInfo
    }, children);
};
const updateUser = async (newUser)=>fetch('/updateuser', {
        method: 'put',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            newUser,
            email: newUser.email
        })
    })
;
function Nn(r, a, s20) {
    return a in r ? Object.defineProperty(r, a, {
        value: s20,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s20, r;
}
function hn(r, a) {
    var s20 = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(r);
        a && (t = t.filter(function(n) {
            return Object.getOwnPropertyDescriptor(r, n).enumerable;
        })), s20.push.apply(s20, t);
    }
    return s20;
}
function An(r) {
    for(var a = 1; a < arguments.length; a++){
        var s20 = arguments[a] != null ? arguments[a] : {
        };
        a % 2 ? hn(Object(s20), !0).forEach(function(t) {
            Nn(r, t, s20[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s20)) : hn(Object(s20)).forEach(function(t) {
            Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(s20, t));
        });
    }
    return r;
}
function J2(r, a) {
    return En(r) || In(r, a) || Hn(r, a) || Bn();
}
function En(r) {
    if (Array.isArray(r)) return r;
}
function In(r, a) {
    if (typeof Symbol != "undefined" && Symbol.iterator in Object(r)) {
        var s21 = [], t = !0, n = !1, e = void 0;
        try {
            for(var i1, o = r[Symbol.iterator](); !(t = (i1 = o.next()).done) && (s21.push(i1.value), !a || s21.length !== a); t = !0);
        } catch (l31) {
            n = !0, e = l31;
        } finally{
            try {
                t || o.return == null || o.return();
            } finally{
                if (n) throw e;
            }
        }
        return s21;
    }
}
function Hn(r, a) {
    if (r) {
        if (typeof r == "string") return mn(r, a);
        var s22 = Object.prototype.toString.call(r).slice(8, -1);
        return s22 === "Object" && r.constructor && (s22 = r.constructor.name), s22 === "Map" || s22 === "Set" ? Array.from(r) : s22 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s22) ? mn(r, a) : void 0;
    }
}
function mn(r, a) {
    (a == null || a > r.length) && (a = r.length);
    for(var s23 = 0, t = new Array(a); s23 < a; s23++)t[s23] = r[s23];
    return t;
}
function Bn() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cn(r) {
    var a = {
        exports: {
        }
    };
    return r(a, a.exports), a.exports;
}
var W3 = Cn(function(r) {
    var a, s23, t = {
    };
    r.exports = t, t.parse = function(n, e) {
        for(var i2 = t.bin.readUshort, o = t.bin.readUint, l31 = 0, c = {
        }, A = new Uint8Array(n), h9 = A.length - 4; o(A, h9) != 101010256;)h9--;
        l31 = h9, l31 += 4;
        var u = i2(A, l31 += 4), d = (i2(A, l31 += 2), o(A, l31 += 2)), m6 = o(A, l31 += 4);
        l31 += 4, l31 = m6;
        for(var g4 = 0; g4 < u; g4++){
            o(A, l31), l31 += 4, l31 += 4, l31 += 4, o(A, l31 += 4), d = o(A, l31 += 4);
            var v2 = o(A, l31 += 4), I = i2(A, l31 += 4), E = i2(A, l31 + 2), p8 = i2(A, l31 + 4);
            l31 += 6;
            var H2 = o(A, l31 += 8);
            l31 += 4, l31 += I + E + p8, t._readLocal(A, H2, c, d, v2, e);
        }
        return c;
    }, t._readLocal = function(n, e, i2, o, l31, c) {
        var A = t.bin.readUshort, h9 = t.bin.readUint, u = (h9(n, e), A(n, e += 4), A(n, e += 2), A(n, e += 2));
        h9(n, e += 2), h9(n, e += 4), e += 4;
        var d = A(n, e += 8), m6 = A(n, e += 2);
        e += 2;
        var g4 = t.bin.readUTF8(n, e, d);
        if (e += d, e += m6, c) i2[g4] = {
            size: l31,
            csize: o
        };
        else {
            var v3 = new Uint8Array(n.buffer, e);
            if (u == 0) i2[g4] = new Uint8Array(v3.buffer.slice(e, e + o));
            else {
                if (u != 8) throw "unknown compression method: " + u;
                var I = new Uint8Array(l31);
                t.inflateRaw(v3, I), i2[g4] = I;
            }
        }
    }, t.inflateRaw = function(n, e) {
        return t.F.inflate(n, e);
    }, t.inflate = function(n, e) {
        return n[0], n[1], t.inflateRaw(new Uint8Array(n.buffer, n.byteOffset + 2, n.length - 6), e);
    }, t.deflate = function(n, e) {
        e == null && (e = {
            level: 6
        });
        var i2 = 0, o = new Uint8Array(50 + Math.floor(1.1 * n.length));
        o[i2] = 120, o[i2 + 1] = 156, i2 += 2, i2 = t.F.deflateRaw(n, o, i2, e.level);
        var l31 = t.adler(n, 0, n.length);
        return o[i2 + 0] = l31 >>> 24 & 255, o[i2 + 1] = l31 >>> 16 & 255, o[i2 + 2] = l31 >>> 8 & 255, o[i2 + 3] = l31 >>> 0 & 255, new Uint8Array(o.buffer, 0, i2 + 4);
    }, t.deflateRaw = function(n, e) {
        e == null && (e = {
            level: 6
        });
        var i2 = new Uint8Array(50 + Math.floor(1.1 * n.length)), o = t.F.deflateRaw(n, i2, o, e.level);
        return new Uint8Array(i2.buffer, 0, o);
    }, t.encode = function(n, e) {
        e == null && (e = !1);
        var i2 = 0, o = t.bin.writeUint, l31 = t.bin.writeUshort, c = {
        };
        for(var A in n){
            var h9 = !t._noNeed(A) && !e, u = n[A], d = t.crc.crc(u, 0, u.length);
            c[A] = {
                cpr: h9,
                usize: u.length,
                crc: d,
                file: h9 ? t.deflateRaw(u) : u
            };
        }
        for(var A in c)i2 += c[A].file.length + 30 + 46 + 2 * t.bin.sizeUTF8(A);
        i2 += 22;
        var m6 = new Uint8Array(i2), g4 = 0, v4 = [];
        for(var A in c){
            var I = c[A];
            v4.push(g4), g4 = t._writeHeader(m6, g4, A, I, 0);
        }
        var E = 0, p9 = g4;
        for(var A in c)I = c[A], v4.push(g4), g4 = t._writeHeader(m6, g4, A, I, 1, v4[E++]);
        var H3 = g4 - p9;
        return o(m6, g4, 101010256), g4 += 4, l31(m6, g4 += 4, E), l31(m6, g4 += 2, E), o(m6, g4 += 2, H3), o(m6, g4 += 4, p9), g4 += 4, g4 += 2, m6.buffer;
    }, t._noNeed = function(n) {
        var e = n.split(".").pop().toLowerCase();
        return "png,jpg,jpeg,zip".indexOf(e) != -1;
    }, t._writeHeader = function(n, e, i2, o, l31, c) {
        var A = t.bin.writeUint, h10 = t.bin.writeUshort, u = o.file;
        return A(n, e, l31 == 0 ? 67324752 : 33639248), e += 4, l31 == 1 && (e += 2), h10(n, e, 20), h10(n, e += 2, 0), h10(n, e += 2, o.cpr ? 8 : 0), A(n, e += 2, 0), A(n, e += 4, o.crc), A(n, e += 4, u.length), A(n, e += 4, o.usize), h10(n, e += 4, t.bin.sizeUTF8(i2)), h10(n, e += 2, 0), e += 2, l31 == 1 && (e += 2, e += 2, A(n, e += 6, c), e += 4), e += t.bin.writeUTF8(n, e, i2), l31 == 0 && (n.set(u, e), e += u.length), e;
    }, t.crc = {
        table: (function() {
            for(var n = new Uint32Array(256), e = 0; e < 256; e++){
                for(var i2 = e, o = 0; o < 8; o++)1 & i2 ? i2 = 3988292384 ^ i2 >>> 1 : i2 >>>= 1;
                n[e] = i2;
            }
            return n;
        })(),
        update: function(n, e, i3, o) {
            for(var l31 = 0; l31 < o; l31++)n = t.crc.table[255 & (n ^ e[i3 + l31])] ^ n >>> 8;
            return n;
        },
        crc: function(n, e, i3) {
            return 4294967295 ^ t.crc.update(4294967295, n, e, i3);
        }
    }, t.adler = function(n, e, i3) {
        for(var o = 1, l31 = 0, c = e, A = e + i3; c < A;){
            for(var h10 = Math.min(c + 5552, A); c < h10;)l31 += o += n[c++];
            o %= 65521, l31 %= 65521;
        }
        return l31 << 16 | o;
    }, t.bin = {
        readUshort: function(n, e) {
            return n[e] | n[e + 1] << 8;
        },
        writeUshort: function(n, e, i3) {
            n[e] = 255 & i3, n[e + 1] = i3 >> 8 & 255;
        },
        readUint: function(n, e) {
            return 16777216 * n[e + 3] + (n[e + 2] << 16 | n[e + 1] << 8 | n[e]);
        },
        writeUint: function(n, e, i3) {
            n[e] = 255 & i3, n[e + 1] = i3 >> 8 & 255, n[e + 2] = i3 >> 16 & 255, n[e + 3] = i3 >> 24 & 255;
        },
        readASCII: function(n, e, i3) {
            for(var o = "", l31 = 0; l31 < i3; l31++)o += String.fromCharCode(n[e + l31]);
            return o;
        },
        writeASCII: function(n, e, i3) {
            for(var o = 0; o < i3.length; o++)n[e + o] = i3.charCodeAt(o);
        },
        pad: function(n) {
            return n.length < 2 ? "0" + n : n;
        },
        readUTF8: function(n, e, i3) {
            for(var o, l31 = "", c = 0; c < i3; c++)l31 += "%" + t.bin.pad(n[e + c].toString(16));
            try {
                o = decodeURIComponent(l31);
            } catch (A) {
                return t.bin.readASCII(n, e, i3);
            }
            return o;
        },
        writeUTF8: function(n, e, i3) {
            for(var o = i3.length, l31 = 0, c = 0; c < o; c++){
                var A = i3.charCodeAt(c);
                if ((4294967168 & A) == 0) n[e + l31] = A, l31++;
                else if ((4294965248 & A) == 0) n[e + l31] = 192 | A >> 6, n[e + l31 + 1] = 128 | A >> 0 & 63, l31 += 2;
                else if ((4294901760 & A) == 0) n[e + l31] = 224 | A >> 12, n[e + l31 + 1] = 128 | A >> 6 & 63, n[e + l31 + 2] = 128 | A >> 0 & 63, l31 += 3;
                else {
                    if ((4292870144 & A) != 0) throw "e";
                    n[e + l31] = 240 | A >> 18, n[e + l31 + 1] = 128 | A >> 12 & 63, n[e + l31 + 2] = 128 | A >> 6 & 63, n[e + l31 + 3] = 128 | A >> 0 & 63, l31 += 4;
                }
            }
            return l31;
        },
        sizeUTF8: function(n) {
            for(var e = n.length, i3 = 0, o = 0; o < e; o++){
                var l31 = n.charCodeAt(o);
                if ((4294967168 & l31) == 0) i3++;
                else if ((4294965248 & l31) == 0) i3 += 2;
                else if ((4294901760 & l31) == 0) i3 += 3;
                else {
                    if ((4292870144 & l31) != 0) throw "e";
                    i3 += 4;
                }
            }
            return i3;
        }
    }, t.F = {
    }, t.F.deflateRaw = function(n, e, i3, o) {
        var l32 = [
            [
                0,
                0,
                0,
                0,
                0
            ],
            [
                4,
                4,
                8,
                4,
                0
            ],
            [
                4,
                5,
                16,
                8,
                0
            ],
            [
                4,
                6,
                16,
                16,
                0
            ],
            [
                4,
                10,
                16,
                32,
                0
            ],
            [
                8,
                16,
                32,
                32,
                0
            ],
            [
                8,
                16,
                128,
                128,
                0
            ],
            [
                8,
                32,
                128,
                256,
                0
            ],
            [
                32,
                128,
                258,
                1024,
                1
            ],
            [
                32,
                258,
                258,
                4096,
                1
            ]
        ][o], c = t.F.U, A = t.F._goodIndex, h11 = (t.F._hash, t.F._putsE), u = 0, d = i3 << 3, m6 = 0, g4 = n.length;
        if (o == 0) {
            for(; u < g4;)h11(e, d, u + (C = Math.min(65535, g4 - u)) == g4 ? 1 : 0), d = t.F._copyExact(n, u, C, e, d + 8), u += C;
            return d >>> 3;
        }
        var v4 = c.lits, I = c.strt, E = c.prev, p9 = 0, H3 = 0, _ = 0, b4 = 0, U = 0, F = 0;
        for(g4 > 2 && (I[F = t.F._hash(n, 0)] = 0), u = 0; u < g4; u++){
            if (U = F, u + 1 < g4 - 2) {
                F = t.F._hash(n, u + 1);
                var y10 = u + 1 & 32767;
                E[y10] = I[F], I[F] = y10;
            }
            if (m6 <= u) {
                (p9 > 14000 || H3 > 26697) && g4 - u > 100 && (m6 < u && (v4[p9] = u - m6, p9 += 2, m6 = u), d = t.F._writeBlock(u == g4 - 1 || m6 == g4 ? 1 : 0, v4, p9, b4, n, _, u - _, e, d), p9 = H3 = b4 = 0, _ = u);
                var N = 0;
                u < g4 - 2 && (N = t.F._bestMatch(n, u, E, U, Math.min(l32[2], g4 - u), l32[3]));
                var C = N >>> 16, B2 = 65535 & N;
                if (N != 0) {
                    B2 = 65535 & N;
                    var P = A(C = N >>> 16, c.of0);
                    c.lhst[257 + P]++;
                    var Q4 = A(B2, c.df0);
                    c.dhst[Q4]++, b4 += c.exb[P] + c.dxb[Q4], v4[p9] = C << 23 | u - m6, v4[p9 + 1] = B2 << 16 | P << 8 | Q4, p9 += 2, m6 = u + C;
                } else c.lhst[n[u]]++;
                H3++;
            }
        }
        for(_ == u && n.length != 0 || (m6 < u && (v4[p9] = u - m6, p9 += 2, m6 = u), d = t.F._writeBlock(1, v4, p9, b4, n, _, u - _, e, d), p9 = 0, H3 = 0, p9 = H3 = b4 = 0, _ = u); (7 & d) != 0;)d++;
        return d >>> 3;
    }, t.F._bestMatch = function(n, e, i3, o, l32, c) {
        var A = 32767 & e, h11 = i3[A], u = A - h11 + 32768 & 32767;
        if (h11 == A || o != t.F._hash(n, e - u)) return 0;
        for(var d = 0, m6 = 0, g4 = Math.min(32767, e); u <= g4 && (--c) != 0 && h11 != A;){
            if (d == 0 || n[e + d] == n[e + d - u]) {
                var v4 = t.F._howLong(n, e, u);
                if (v4 > d) {
                    if (m6 = u, (d = v4) >= l32) break;
                    u + 2 < v4 && (v4 = u + 2);
                    for(var I = 0, E = 0; E < v4 - 2; E++){
                        var p9 = e - u + E + 32768 & 32767, H3 = p9 - i3[p9] + 32768 & 32767;
                        H3 > I && (I = H3, h11 = p9);
                    }
                }
            }
            u += (A = h11) - (h11 = i3[A]) + 32768 & 32767;
        }
        return d << 16 | m6;
    }, t.F._howLong = function(n, e, i3) {
        if (n[e] != n[e - i3] || n[e + 1] != n[e + 1 - i3] || n[e + 2] != n[e + 2 - i3]) return 0;
        var o = e, l32 = Math.min(n.length, e + 258);
        for(e += 3; e < l32 && n[e] == n[e - i3];)e++;
        return e - o;
    }, t.F._hash = function(n, e) {
        return (n[e] << 8 | n[e + 1]) + (n[e + 2] << 4) & 65535;
    }, t.saved = 0, t.F._writeBlock = function(n, e, i3, o, l32, c, A, h11, u) {
        var d, m6, g4, v5, I, E, p10, H4, _, b4 = t.F.U, U = t.F._putsF, F = t.F._putsE;
        b4.lhst[256]++, m6 = (d = t.F.getTrees())[0], g4 = d[1], v5 = d[2], I = d[3], E = d[4], p10 = d[5], H4 = d[6], _ = d[7];
        var y11 = 32 + ((u + 3 & 7) == 0 ? 0 : 8 - (u + 3 & 7)) + (A << 3), N = o + t.F.contSize(b4.fltree, b4.lhst) + t.F.contSize(b4.fdtree, b4.dhst), C = o + t.F.contSize(b4.ltree, b4.lhst) + t.F.contSize(b4.dtree, b4.dhst);
        C += 14 + 3 * p10 + t.F.contSize(b4.itree, b4.ihst) + (2 * b4.ihst[16] + 3 * b4.ihst[17] + 7 * b4.ihst[18]);
        for(var B3 = 0; B3 < 286; B3++)b4.lhst[B3] = 0;
        for(B3 = 0; B3 < 30; B3++)b4.dhst[B3] = 0;
        for(B3 = 0; B3 < 19; B3++)b4.ihst[B3] = 0;
        var P = y11 < N && y11 < C ? 0 : N < C ? 1 : 2;
        if (U(h11, u, n), U(h11, u + 1, P), u += 3, P == 0) {
            for(; (7 & u) != 0;)u++;
            u = t.F._copyExact(l32, c, A, h11, u);
        } else {
            var Q5, R;
            if (P == 1 && (Q5 = b4.fltree, R = b4.fdtree), P == 2) {
                t.F.makeCodes(b4.ltree, m6), t.F.revCodes(b4.ltree, m6), t.F.makeCodes(b4.dtree, g4), t.F.revCodes(b4.dtree, g4), t.F.makeCodes(b4.itree, v5), t.F.revCodes(b4.itree, v5), Q5 = b4.ltree, R = b4.dtree, F(h11, u, I - 257), F(h11, u += 5, E - 1), F(h11, u += 5, p10 - 4), u += 4;
                for(var M = 0; M < p10; M++)F(h11, u + 3 * M, b4.itree[1 + (b4.ordr[M] << 1)]);
                u += 3 * p10, u = t.F._codeTiny(H4, b4.itree, h11, u), u = t.F._codeTiny(_, b4.itree, h11, u);
            }
            for(var x = c, z2 = 0; z2 < i3; z2 += 2){
                for(var D2 = e[z2], V2 = D2 >>> 23, q = x + (8388607 & D2); x < q;)u = t.F._writeLit(l32[x++], Q5, h11, u);
                if (V2 != 0) {
                    var j4 = e[z2 + 1], L = j4 >> 16, O3 = j4 >> 8 & 255, k = 255 & j4;
                    F(h11, u = t.F._writeLit(257 + O3, Q5, h11, u), V2 - b4.of0[O3]), u += b4.exb[O3], U(h11, u = t.F._writeLit(k, R, h11, u), L - b4.df0[k]), u += b4.dxb[k], x += V2;
                }
            }
            u = t.F._writeLit(256, Q5, h11, u);
        }
        return u;
    }, t.F._copyExact = function(n, e, i3, o, l32) {
        var c = l32 >>> 3;
        return o[c] = i3, o[c + 1] = i3 >>> 8, o[c + 2] = 255 - o[c], o[c + 3] = 255 - o[c + 1], c += 4, o.set(new Uint8Array(n.buffer, e, i3), c), l32 + (i3 + 4 << 3);
    }, t.F.getTrees = function() {
        for(var n = t.F.U, e = t.F._hufTree(n.lhst, n.ltree, 15), i3 = t.F._hufTree(n.dhst, n.dtree, 15), o = [], l32 = t.F._lenCodes(n.ltree, o), c = [], A = t.F._lenCodes(n.dtree, c), h11 = 0; h11 < o.length; h11 += 2)n.ihst[o[h11]]++;
        for(h11 = 0; h11 < c.length; h11 += 2)n.ihst[c[h11]]++;
        for(var u = t.F._hufTree(n.ihst, n.itree, 7), d = 19; d > 4 && n.itree[1 + (n.ordr[d - 1] << 1)] == 0;)d--;
        return [
            e,
            i3,
            u,
            l32,
            A,
            d,
            o,
            c
        ];
    }, t.F.getSecond = function(n) {
        for(var e = [], i3 = 0; i3 < n.length; i3 += 2)e.push(n[i3 + 1]);
        return e;
    }, t.F.nonZero = function(n) {
        for(var e = "", i3 = 0; i3 < n.length; i3 += 2)n[i3 + 1] != 0 && (e += (i3 >> 1) + ",");
        return e;
    }, t.F.contSize = function(n, e) {
        for(var i3 = 0, o = 0; o < e.length; o++)i3 += e[o] * n[1 + (o << 1)];
        return i3;
    }, t.F._codeTiny = function(n, e, i3, o) {
        for(var l32 = 0; l32 < n.length; l32 += 2){
            var c = n[l32], A = n[l32 + 1];
            o = t.F._writeLit(c, e, i3, o);
            var h11 = c == 16 ? 2 : c == 17 ? 3 : 7;
            c > 15 && (t.F._putsE(i3, o, A, h11), o += h11);
        }
        return o;
    }, t.F._lenCodes = function(n, e) {
        for(var i3 = n.length; i3 != 2 && n[i3 - 1] == 0;)i3 -= 2;
        for(var o = 0; o < i3; o += 2){
            var l32 = n[o + 1], c = o + 3 < i3 ? n[o + 3] : -1, A = o + 5 < i3 ? n[o + 5] : -1, h12 = o == 0 ? -1 : n[o - 1];
            if (l32 == 0 && c == l32 && A == l32) {
                for(var u = o + 5; u + 2 < i3 && n[u + 2] == l32;)u += 2;
                (d = Math.min(u + 1 - o >>> 1, 138)) < 11 ? e.push(17, d - 3) : e.push(18, d - 11), o += 2 * d - 2;
            } else if (l32 == h12 && c == l32 && A == l32) {
                for(u = o + 5; u + 2 < i3 && n[u + 2] == l32;)u += 2;
                var d = Math.min(u + 1 - o >>> 1, 6);
                e.push(16, d - 3), o += 2 * d - 2;
            } else e.push(l32, 0);
        }
        return i3 >>> 1;
    }, t.F._hufTree = function(n, e, i3) {
        var o = [], l33 = n.length, c = e.length, A = 0;
        for(A = 0; A < c; A += 2)e[A] = 0, e[A + 1] = 0;
        for(A = 0; A < l33; A++)n[A] != 0 && o.push({
            lit: A,
            f: n[A]
        });
        var h13 = o.length, u = o.slice(0);
        if (h13 == 0) return 0;
        if (h13 == 1) {
            var d = o[0].lit;
            return u = d == 0 ? 1 : 0, e[1 + (d << 1)] = 1, e[1 + (u << 1)] = 1, 1;
        }
        o.sort(function(H4, _) {
            return H4.f - _.f;
        });
        var m6 = o[0], g4 = o[1], v5 = 0, I = 1, E = 2;
        for(o[0] = {
            lit: -1,
            f: m6.f + g4.f,
            l: m6,
            r: g4,
            d: 0
        }; I != h13 - 1;)m6 = v5 != I && (E == h13 || o[v5].f < o[E].f) ? o[v5++] : o[E++], g4 = v5 != I && (E == h13 || o[v5].f < o[E].f) ? o[v5++] : o[E++], o[I++] = {
            lit: -1,
            f: m6.f + g4.f,
            l: m6,
            r: g4
        };
        var p10 = t.F.setDepth(o[I - 1], 0);
        for(p10 > i3 && (t.F.restrictDepth(u, i3, p10), p10 = i3), A = 0; A < h13; A++)e[1 + (u[A].lit << 1)] = u[A].d;
        return p10;
    }, t.F.setDepth = function(n, e) {
        return n.lit != -1 ? (n.d = e, e) : Math.max(t.F.setDepth(n.l, e + 1), t.F.setDepth(n.r, e + 1));
    }, t.F.restrictDepth = function(n, e, i3) {
        var o = 0, l33 = 1 << i3 - e, c = 0;
        for(n.sort(function(h13, u) {
            return u.d == h13.d ? h13.f - u.f : u.d - h13.d;
        }), o = 0; o < n.length && n[o].d > e; o++){
            var A = n[o].d;
            n[o].d = e, c += l33 - (1 << i3 - A);
        }
        for(c >>>= i3 - e; c > 0;)(A = n[o].d) < e ? (n[o].d++, c -= 1 << e - A - 1) : o++;
        for(; o >= 0; o--)n[o].d == e && c < 0 && (n[o].d--, c++);
        c != 0 && console.log("debt left");
    }, t.F._goodIndex = function(n, e) {
        var i3 = 0;
        return e[16 | i3] <= n && (i3 |= 16), e[8 | i3] <= n && (i3 |= 8), e[4 | i3] <= n && (i3 |= 4), e[2 | i3] <= n && (i3 |= 2), e[1 | i3] <= n && (i3 |= 1), i3;
    }, t.F._writeLit = function(n, e, i3, o) {
        return t.F._putsF(i3, o, e[n << 1]), o + e[1 + (n << 1)];
    }, t.F.inflate = function(n, e) {
        var i3 = Uint8Array;
        if (n[0] == 3 && n[1] == 0) return e || new i3(0);
        var o = t.F, l33 = o._bitsF, c = o._bitsE, A = o._decodeTiny, h13 = o.makeCodes, u = o.codes2map, d = o._get17, m6 = o.U, g4 = e == null;
        g4 && (e = new i3(n.length >>> 2 << 3));
        for(var v5, I, E = 0, p10 = 0, H4 = 0, _ = 0, b4 = 0, U = 0, F = 0, y11 = 0, N = 0; E == 0;)if (E = l33(n, N, 1), p10 = l33(n, N + 1, 2), N += 3, p10 != 0) {
            if (g4 && (e = t.F._check(e, y11 + (1 << 17))), p10 == 1 && (v5 = m6.flmap, I = m6.fdmap, U = 511, F = 31), p10 == 2) {
                H4 = c(n, N, 5) + 257, _ = c(n, N + 5, 5) + 1, b4 = c(n, N + 10, 4) + 4, N += 14;
                for(var C = 0; C < 38; C += 2)m6.itree[C] = 0, m6.itree[C + 1] = 0;
                var B3 = 1;
                for(C = 0; C < b4; C++){
                    var P = c(n, N + 3 * C, 3);
                    m6.itree[1 + (m6.ordr[C] << 1)] = P, P > B3 && (B3 = P);
                }
                N += 3 * b4, h13(m6.itree, B3), u(m6.itree, B3, m6.imap), v5 = m6.lmap, I = m6.dmap, N = A(m6.imap, (1 << B3) - 1, H4 + _, n, N, m6.ttree);
                var Q6 = o._copyOut(m6.ttree, 0, H4, m6.ltree);
                U = (1 << Q6) - 1;
                var R = o._copyOut(m6.ttree, H4, _, m6.dtree);
                F = (1 << R) - 1, h13(m6.ltree, Q6), u(m6.ltree, Q6, v5), h13(m6.dtree, R), u(m6.dtree, R, I);
            }
            for(;;){
                var M = v5[d(n, N) & U];
                N += 15 & M;
                var x = M >>> 4;
                if (x >>> 8 == 0) e[y11++] = x;
                else {
                    if (x == 256) break;
                    var z3 = y11 + x - 254;
                    if (x > 264) {
                        var D3 = m6.ldef[x - 257];
                        z3 = y11 + (D3 >>> 3) + c(n, N, 7 & D3), N += 7 & D3;
                    }
                    var V3 = I[d(n, N) & F];
                    N += 15 & V3;
                    var q = V3 >>> 4, j5 = m6.ddef[q], L = (j5 >>> 4) + l33(n, N, 15 & j5);
                    for(N += 15 & j5, g4 && (e = t.F._check(e, y11 + (1 << 17))); y11 < z3;)e[y11] = e[(y11++) - L], e[y11] = e[(y11++) - L], e[y11] = e[(y11++) - L], e[y11] = e[(y11++) - L];
                    y11 = z3;
                }
            }
        } else {
            (7 & N) != 0 && (N += 8 - (7 & N));
            var O4 = 4 + (N >>> 3), k = n[O4 - 4] | n[O4 - 3] << 8;
            g4 && (e = t.F._check(e, y11 + k)), e.set(new i3(n.buffer, n.byteOffset + O4, k), y11), N = O4 + k << 3, y11 += k;
        }
        return e.length == y11 ? e : e.slice(0, y11);
    }, t.F._check = function(n, e) {
        var i3 = n.length;
        if (e <= i3) return n;
        var o = new Uint8Array(Math.max(i3 << 1, e));
        return o.set(n, 0), o;
    }, t.F._decodeTiny = function(n, e, i3, o, l33, c) {
        for(var A = t.F._bitsE, h13 = t.F._get17, u = 0; u < i3;){
            var d = n[h13(o, l33) & e];
            l33 += 15 & d;
            var m6 = d >>> 4;
            if (m6 <= 15) c[u] = m6, u++;
            else {
                var g4 = 0, v5 = 0;
                m6 == 16 ? (v5 = 3 + A(o, l33, 2), l33 += 2, g4 = c[u - 1]) : m6 == 17 ? (v5 = 3 + A(o, l33, 3), l33 += 3) : m6 == 18 && (v5 = 11 + A(o, l33, 7), l33 += 7);
                for(var I = u + v5; u < I;)c[u] = g4, u++;
            }
        }
        return l33;
    }, t.F._copyOut = function(n, e, i3, o) {
        for(var l33 = 0, c = 0, A = o.length >>> 1; c < i3;){
            var h13 = n[c + e];
            o[c << 1] = 0, o[1 + (c << 1)] = h13, h13 > l33 && (l33 = h13), c++;
        }
        for(; c < A;)o[c << 1] = 0, o[1 + (c << 1)] = 0, c++;
        return l33;
    }, t.F.makeCodes = function(n, e) {
        for(var i3, o, l33, c, A = t.F.U, h14 = n.length, u = A.bl_count, d = 0; d <= e; d++)u[d] = 0;
        for(d = 1; d < h14; d += 2)u[n[d]]++;
        var m7 = A.next_code;
        for(i3 = 0, u[0] = 0, o = 1; o <= e; o++)i3 = i3 + u[o - 1] << 1, m7[o] = i3;
        for(l33 = 0; l33 < h14; l33 += 2)(c = n[l33 + 1]) != 0 && (n[l33] = m7[c], m7[c]++);
    }, t.F.codes2map = function(n, e, i3) {
        for(var o = n.length, l33 = t.F.U.rev15, c = 0; c < o; c += 2)if (n[c + 1] != 0) for(var A = c >> 1, h14 = n[c + 1], u = A << 4 | h14, d = e - h14, m7 = n[c] << d, g5 = m7 + (1 << d); m7 != g5;)i3[l33[m7] >>> 15 - e] = u, m7++;
    }, t.F.revCodes = function(n, e) {
        for(var i3 = t.F.U.rev15, o = 15 - e, l33 = 0; l33 < n.length; l33 += 2){
            var c = n[l33] << e - n[l33 + 1];
            n[l33] = i3[c] >>> o;
        }
    }, t.F._putsE = function(n, e, i3) {
        i3 <<= 7 & e;
        var o = e >>> 3;
        n[o] |= i3, n[o + 1] |= i3 >>> 8;
    }, t.F._putsF = function(n, e, i3) {
        i3 <<= 7 & e;
        var o = e >>> 3;
        n[o] |= i3, n[o + 1] |= i3 >>> 8, n[o + 2] |= i3 >>> 16;
    }, t.F._bitsE = function(n, e, i3) {
        return (n[e >>> 3] | n[1 + (e >>> 3)] << 8) >>> (7 & e) & (1 << i3) - 1;
    }, t.F._bitsF = function(n, e, i3) {
        return (n[e >>> 3] | n[1 + (e >>> 3)] << 8 | n[2 + (e >>> 3)] << 16) >>> (7 & e) & (1 << i3) - 1;
    }, t.F._get17 = function(n, e) {
        return (n[e >>> 3] | n[1 + (e >>> 3)] << 8 | n[2 + (e >>> 3)] << 16) >>> (7 & e);
    }, t.F._get25 = function(n, e) {
        return (n[e >>> 3] | n[1 + (e >>> 3)] << 8 | n[2 + (e >>> 3)] << 16 | n[3 + (e >>> 3)] << 24) >>> (7 & e);
    }, t.F.U = (a = Uint16Array, s23 = Uint32Array, {
        next_code: new a(16),
        bl_count: new a(16),
        ordr: [
            16,
            17,
            18,
            0,
            8,
            7,
            9,
            6,
            10,
            5,
            11,
            4,
            12,
            3,
            13,
            2,
            14,
            1,
            15
        ],
        of0: [
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            13,
            15,
            17,
            19,
            23,
            27,
            31,
            35,
            43,
            51,
            59,
            67,
            83,
            99,
            115,
            131,
            163,
            195,
            227,
            258,
            999,
            999,
            999
        ],
        exb: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            3,
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            5,
            5,
            5,
            5,
            0,
            0,
            0,
            0
        ],
        ldef: new a(32),
        df0: [
            1,
            2,
            3,
            4,
            5,
            7,
            9,
            13,
            17,
            25,
            33,
            49,
            65,
            97,
            129,
            193,
            257,
            385,
            513,
            769,
            1025,
            1537,
            2049,
            3073,
            4097,
            6145,
            8193,
            12289,
            16385,
            24577,
            65535,
            65535
        ],
        dxb: [
            0,
            0,
            0,
            0,
            1,
            1,
            2,
            2,
            3,
            3,
            4,
            4,
            5,
            5,
            6,
            6,
            7,
            7,
            8,
            8,
            9,
            9,
            10,
            10,
            11,
            11,
            12,
            12,
            13,
            13,
            0,
            0
        ],
        ddef: new s23(32),
        flmap: new a(512),
        fltree: [],
        fdmap: new a(32),
        fdtree: [],
        lmap: new a(32768),
        ltree: [],
        ttree: [],
        dmap: new a(32768),
        dtree: [],
        imap: new a(512),
        itree: [],
        rev15: new a(32768),
        lhst: new s23(286),
        dhst: new s23(30),
        ihst: new s23(19),
        lits: new s23(15000),
        strt: new a(65536),
        prev: new a(32768)
    }), (function() {
        for(var n = t.F.U, e = 0; e < 32768; e++){
            var i3 = e;
            i3 = (4278255360 & (i3 = (4042322160 & (i3 = (3435973836 & (i3 = (2863311530 & i3) >>> 1 | (1431655765 & i3) << 1)) >>> 2 | (858993459 & i3) << 2)) >>> 4 | (252645135 & i3) << 4)) >>> 8 | (16711935 & i3) << 8, n.rev15[e] = (i3 >>> 16 | i3 << 16) >>> 17;
        }
        function o(l33, c, A) {
            for(; (c--) != 0;)l33.push(0, A);
        }
        for(e = 0; e < 32; e++)n.ldef[e] = n.of0[e] << 3 | n.exb[e], n.ddef[e] = n.df0[e] << 4 | n.dxb[e];
        o(n.fltree, 144, 8), o(n.fltree, 112, 9), o(n.fltree, 24, 7), o(n.fltree, 8, 8), t.F.makeCodes(n.fltree, 9), t.F.codes2map(n.fltree, 9, n.flmap), t.F.revCodes(n.fltree, 9), o(n.fdtree, 32, 5), t.F.makeCodes(n.fdtree, 5), t.F.codes2map(n.fdtree, 5, n.fdmap), t.F.revCodes(n.fdtree, 5), o(n.itree, 19, 0), o(n.ltree, 286, 0), o(n.dtree, 30, 0), o(n.ttree, 320, 0);
    })();
}), Qn = Object.freeze(Object.assign(Object.create(null), W3, {
    default: W3
})), w = {
}, G2, X4, T;
w.toRGBA8 = function(r) {
    var a = r.width, s23 = r.height;
    if (r.tabs.acTL == null) return [
        w.toRGBA8.decodeImage(r.data, a, s23, r).buffer
    ];
    var t = [];
    r.frames[0].data == null && (r.frames[0].data = r.data);
    for(var n = a * s23 * 4, e = new Uint8Array(n), i4 = new Uint8Array(n), o = new Uint8Array(n), l33 = 0; l33 < r.frames.length; l33++){
        var c = r.frames[l33], A = c.rect.x, h14 = c.rect.y, u = c.rect.width, d = c.rect.height, m7 = w.toRGBA8.decodeImage(c.data, u, d, r);
        if (l33 != 0) for(var g5 = 0; g5 < n; g5++)o[g5] = e[g5];
        if (c.blend == 0 ? w._copyTile(m7, u, d, e, a, s23, A, h14, 0) : c.blend == 1 && w._copyTile(m7, u, d, e, a, s23, A, h14, 1), t.push(e.buffer.slice(0)), c.dispose != 0) {
            if (c.dispose == 1) w._copyTile(i4, u, d, e, a, s23, A, h14, 0);
            else if (c.dispose == 2) for(g5 = 0; g5 < n; g5++)e[g5] = o[g5];
        }
    }
    return t;
}, w.toRGBA8.decodeImage = function(r, a, s23, t) {
    var n = a * s23, e = w.decode._getBPP(t), i4 = Math.ceil(a * e / 8), o = new Uint8Array(4 * n), l33 = new Uint32Array(o.buffer), c = t.ctype, A = t.depth, h15 = w._bin.readUshort;
    if (c == 6) {
        var u = n << 2;
        if (A == 8) for(var d = 0; d < u; d += 4)o[d] = r[d], o[d + 1] = r[d + 1], o[d + 2] = r[d + 2], o[d + 3] = r[d + 3];
        if (A == 16) for(d = 0; d < u; d++)o[d] = r[d << 1];
    } else if (c == 2) {
        var m8 = t.tabs.tRNS;
        if (m8 == null) {
            if (A == 8) for(d = 0; d < n; d++){
                var g6 = 3 * d;
                l33[d] = 255 << 24 | r[g6 + 2] << 16 | r[g6 + 1] << 8 | r[g6];
            }
            if (A == 16) for(d = 0; d < n; d++)g6 = 6 * d, l33[d] = 255 << 24 | r[g6 + 4] << 16 | r[g6 + 2] << 8 | r[g6];
        } else {
            var v6 = m8[0], I = m8[1], E = m8[2];
            if (A == 8) for(d = 0; d < n; d++){
                var p10 = d << 2;
                g6 = 3 * d, l33[d] = 255 << 24 | r[g6 + 2] << 16 | r[g6 + 1] << 8 | r[g6], r[g6] == v6 && r[g6 + 1] == I && r[g6 + 2] == E && (o[p10 + 3] = 0);
            }
            if (A == 16) for(d = 0; d < n; d++)p10 = d << 2, g6 = 6 * d, l33[d] = 255 << 24 | r[g6 + 4] << 16 | r[g6 + 2] << 8 | r[g6], h15(r, g6) == v6 && h15(r, g6 + 2) == I && h15(r, g6 + 4) == E && (o[p10 + 3] = 0);
        }
    } else if (c == 3) {
        var H4 = t.tabs.PLTE, _ = t.tabs.tRNS, b4 = _ ? _.length : 0;
        if (A == 1) for(var U = 0; U < s23; U++){
            var F = U * i4, y11 = U * a;
            for(d = 0; d < a; d++){
                p10 = y11 + d << 2;
                var N = 3 * (C = r[F + (d >> 3)] >> 7 - ((7 & d) << 0) & 1);
                o[p10] = H4[N], o[p10 + 1] = H4[N + 1], o[p10 + 2] = H4[N + 2], o[p10 + 3] = C < b4 ? _[C] : 255;
            }
        }
        if (A == 2) for(U = 0; U < s23; U++)for(F = U * i4, y11 = U * a, d = 0; d < a; d++)p10 = y11 + d << 2, N = 3 * (C = r[F + (d >> 2)] >> 6 - ((3 & d) << 1) & 3), o[p10] = H4[N], o[p10 + 1] = H4[N + 1], o[p10 + 2] = H4[N + 2], o[p10 + 3] = C < b4 ? _[C] : 255;
        if (A == 4) for(U = 0; U < s23; U++)for(F = U * i4, y11 = U * a, d = 0; d < a; d++)p10 = y11 + d << 2, N = 3 * (C = r[F + (d >> 1)] >> 4 - ((1 & d) << 2) & 15), o[p10] = H4[N], o[p10 + 1] = H4[N + 1], o[p10 + 2] = H4[N + 2], o[p10 + 3] = C < b4 ? _[C] : 255;
        if (A == 8) for(d = 0; d < n; d++){
            var C;
            p10 = d << 2, N = 3 * (C = r[d]), o[p10] = H4[N], o[p10 + 1] = H4[N + 1], o[p10 + 2] = H4[N + 2], o[p10 + 3] = C < b4 ? _[C] : 255;
        }
    } else if (c == 4) {
        if (A == 8) for(d = 0; d < n; d++){
            p10 = d << 2;
            var B4 = r[P = d << 1];
            o[p10] = B4, o[p10 + 1] = B4, o[p10 + 2] = B4, o[p10 + 3] = r[P + 1];
        }
        if (A == 16) for(d = 0; d < n; d++){
            var P;
            p10 = d << 2, B4 = r[P = d << 2], o[p10] = B4, o[p10 + 1] = B4, o[p10 + 2] = B4, o[p10 + 3] = r[P + 2];
        }
    } else if (c == 0) for(v6 = t.tabs.tRNS ? t.tabs.tRNS : -1, U = 0; U < s23; U++){
        var Q7 = U * i4, R = U * a;
        if (A == 1) for(var M = 0; M < a; M++){
            var x = (B4 = 255 * (r[Q7 + (M >>> 3)] >>> 7 - (7 & M) & 1)) == 255 * v6 ? 0 : 255;
            l33[R + M] = x << 24 | B4 << 16 | B4 << 8 | B4;
        }
        else if (A == 2) for(M = 0; M < a; M++)x = (B4 = 85 * (r[Q7 + (M >>> 2)] >>> 6 - ((3 & M) << 1) & 3)) == 85 * v6 ? 0 : 255, l33[R + M] = x << 24 | B4 << 16 | B4 << 8 | B4;
        else if (A == 4) for(M = 0; M < a; M++)x = (B4 = 17 * (r[Q7 + (M >>> 1)] >>> 4 - ((1 & M) << 2) & 15)) == 17 * v6 ? 0 : 255, l33[R + M] = x << 24 | B4 << 16 | B4 << 8 | B4;
        else if (A == 8) for(M = 0; M < a; M++)x = (B4 = r[Q7 + M]) == v6 ? 0 : 255, l33[R + M] = x << 24 | B4 << 16 | B4 << 8 | B4;
        else if (A == 16) for(M = 0; M < a; M++)B4 = r[Q7 + (M << 1)], x = h15(r, Q7 + (M << d)) == v6 ? 0 : 255, l33[R + M] = x << 24 | B4 << 16 | B4 << 8 | B4;
    }
    return o;
}, w.decode = function(r) {
    for(var a, s23 = new Uint8Array(r), t = 8, n = w._bin, e = n.readUshort, i4 = n.readUint, o = {
        tabs: {
        },
        frames: []
    }, l33 = new Uint8Array(s23.length), c = 0, A = 0, h15 = [
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        10
    ], u = 0; u < 8; u++)if (s23[u] != h15[u]) throw "The input is not a PNG file!";
    for(; t < s23.length;){
        var d = n.readUint(s23, t);
        t += 4;
        var m9 = n.readASCII(s23, t, 4);
        if (t += 4, m9 == "IHDR") w.decode._IHDR(s23, t, o);
        else if (m9 == "CgBI") o.tabs[m9] = s23.slice(t, t + 4);
        else if (m9 == "IDAT") {
            for(u = 0; u < d; u++)l33[c + u] = s23[t + u];
            c += d;
        } else if (m9 == "acTL") o.tabs[m9] = {
            num_frames: i4(s23, t),
            num_plays: i4(s23, t + 4)
        }, a = new Uint8Array(s23.length);
        else if (m9 == "fcTL") {
            var g7;
            A != 0 && ((g7 = o.frames[o.frames.length - 1]).data = w.decode._decompress(o, a.slice(0, A), g7.rect.width, g7.rect.height), A = 0);
            var v7 = {
                x: i4(s23, t + 12),
                y: i4(s23, t + 16),
                width: i4(s23, t + 4),
                height: i4(s23, t + 8)
            }, I = e(s23, t + 22);
            I = e(s23, t + 20) / (I == 0 ? 100 : I);
            var E = {
                rect: v7,
                delay: Math.round(1000 * I),
                dispose: s23[t + 24],
                blend: s23[t + 25]
            };
            o.frames.push(E);
        } else if (m9 == "fdAT") {
            for(u = 0; u < d - 4; u++)a[A + u] = s23[t + u + 4];
            A += d - 4;
        } else if (m9 == "pHYs") o.tabs[m9] = [
            n.readUint(s23, t),
            n.readUint(s23, t + 4),
            s23[t + 8]
        ];
        else if (m9 == "cHRM") for(o.tabs[m9] = [], u = 0; u < 8; u++)o.tabs[m9].push(n.readUint(s23, t + 4 * u));
        else if (m9 == "tEXt" || m9 == "zTXt") {
            o.tabs[m9] == null && (o.tabs[m9] = {
            });
            var p11 = n.nextZero(s23, t), H5 = n.readASCII(s23, t, p11 - t), _ = t + d - p11 - 1;
            if (m9 == "tEXt") y12 = n.readASCII(s23, p11 + 1, _);
            else {
                var b5 = w.decode._inflate(s23.slice(p11 + 2, p11 + 2 + _));
                y12 = n.readUTF8(b5, 0, b5.length);
            }
            o.tabs[m9][H5] = y12;
        } else if (m9 == "iTXt") {
            o.tabs[m9] == null && (o.tabs[m9] = {
            }), p11 = 0;
            var U = t;
            p11 = n.nextZero(s23, U), H5 = n.readASCII(s23, U, p11 - U);
            var F = s23[U = p11 + 1];
            U += 2, p11 = n.nextZero(s23, U), n.readASCII(s23, U, p11 - U), U = p11 + 1, p11 = n.nextZero(s23, U);
            var y12;
            n.readUTF8(s23, U, p11 - U), _ = d - ((U = p11 + 1) - t), F == 0 ? y12 = n.readUTF8(s23, U, _) : (b5 = w.decode._inflate(s23.slice(U, U + _)), y12 = n.readUTF8(b5, 0, b5.length)), o.tabs[m9][H5] = y12;
        } else if (m9 == "PLTE") o.tabs[m9] = n.readBytes(s23, t, d);
        else if (m9 == "hIST") {
            var N = o.tabs.PLTE.length / 3;
            for(o.tabs[m9] = [], u = 0; u < N; u++)o.tabs[m9].push(e(s23, t + 2 * u));
        } else if (m9 == "tRNS") o.ctype == 3 ? o.tabs[m9] = n.readBytes(s23, t, d) : o.ctype == 0 ? o.tabs[m9] = e(s23, t) : o.ctype == 2 && (o.tabs[m9] = [
            e(s23, t),
            e(s23, t + 2),
            e(s23, t + 4)
        ]);
        else if (m9 == "gAMA") o.tabs[m9] = n.readUint(s23, t) / 100000;
        else if (m9 == "sRGB") o.tabs[m9] = s23[t];
        else if (m9 == "bKGD") o.ctype == 0 || o.ctype == 4 ? o.tabs[m9] = [
            e(s23, t)
        ] : o.ctype == 2 || o.ctype == 6 ? o.tabs[m9] = [
            e(s23, t),
            e(s23, t + 2),
            e(s23, t + 4)
        ] : o.ctype == 3 && (o.tabs[m9] = s23[t]);
        else if (m9 == "IEND") break;
        t += d, n.readUint(s23, t), t += 4;
    }
    return A != 0 && ((g7 = o.frames[o.frames.length - 1]).data = w.decode._decompress(o, a.slice(0, A), g7.rect.width, g7.rect.height), A = 0), o.data = w.decode._decompress(o, l33, o.width, o.height), delete o.compress, delete o.interlace, delete o.filter, o;
}, w.decode._decompress = function(r, a, s23, t) {
    var n = w.decode._getBPP(r), e = Math.ceil(s23 * n / 8), i4 = new Uint8Array((e + 1 + r.interlace) * t);
    return a = r.tabs.CgBI ? w.inflateRaw(a, i4) : w.decode._inflate(a, i4), r.interlace == 0 ? a = w.decode._filterZero(a, r, 0, s23, t) : r.interlace == 1 && (a = w.decode._readInterlace(a, r)), a;
}, w.decode._inflate = function(r, a) {
    return w.inflateRaw(new Uint8Array(r.buffer, 2, r.length - 6), a);
}, w.inflateRaw = (T = {
}, T.H = {
}, T.H.N = function(r, a) {
    var s23, t, n = Uint8Array, e = 0, i4 = 0, o = 0, l33 = 0, c = 0, A = 0, h15 = 0, u = 0, d = 0;
    if (r[0] == 3 && r[1] == 0) return a || new n(0);
    var m10 = T.H, g8 = m10.b, v8 = m10.e, I = m10.R, E = m10.n, p12 = m10.A, H6 = m10.Z, _ = m10.m, b6 = a == null;
    for(b6 && (a = new n(r.length >>> 2 << 5)); e == 0;)if (e = g8(r, d, 1), i4 = g8(r, d + 1, 2), d += 3, i4 != 0) {
        if (b6 && (a = T.H.W(a, u + (1 << 17))), i4 == 1 && (s23 = _.J, t = _.h, A = 511, h15 = 31), i4 == 2) {
            o = v8(r, d, 5) + 257, l33 = v8(r, d + 5, 5) + 1, c = v8(r, d + 10, 4) + 4, d += 14;
            for(var U = 1, F = 0; F < 38; F += 2)_.Q[F] = 0, _.Q[F + 1] = 0;
            for(F = 0; F < c; F++){
                var y13 = v8(r, d + 3 * F, 3);
                _.Q[1 + (_.X[F] << 1)] = y13, y13 > U && (U = y13);
            }
            d += 3 * c, E(_.Q, U), p12(_.Q, U, _.u), s23 = _.w, t = _.d, d = I(_.u, (1 << U) - 1, o + l33, r, d, _.v);
            var N = m10.V(_.v, 0, o, _.C);
            A = (1 << N) - 1;
            var C = m10.V(_.v, o, l33, _.D);
            h15 = (1 << C) - 1, E(_.C, N), p12(_.C, N, s23), E(_.D, C), p12(_.D, C, t);
        }
        for(;;){
            var B5 = s23[H6(r, d) & A];
            d += 15 & B5;
            var P = B5 >>> 4;
            if (P >>> 8 == 0) a[u++] = P;
            else {
                if (P == 256) break;
                var Q8 = u + P - 254;
                if (P > 264) {
                    var R = _.q[P - 257];
                    Q8 = u + (R >>> 3) + v8(r, d, 7 & R), d += 7 & R;
                }
                var M = t[H6(r, d) & h15];
                d += 15 & M;
                var x = M >>> 4, z4 = _.c[x], D4 = (z4 >>> 4) + g8(r, d, 15 & z4);
                for(d += 15 & z4; u < Q8;)a[u] = a[(u++) - D4], a[u] = a[(u++) - D4], a[u] = a[(u++) - D4], a[u] = a[(u++) - D4];
                u = Q8;
            }
        }
    } else {
        (7 & d) != 0 && (d += 8 - (7 & d));
        var V4 = 4 + (d >>> 3), q = r[V4 - 4] | r[V4 - 3] << 8;
        b6 && (a = T.H.W(a, u + q)), a.set(new n(r.buffer, r.byteOffset + V4, q), u), d = V4 + q << 3, u += q;
    }
    return a.length == u ? a : a.slice(0, u);
}, T.H.W = function(r, a) {
    var s23 = r.length;
    if (a <= s23) return r;
    var t = new Uint8Array(s23 << 1);
    return t.set(r, 0), t;
}, T.H.R = function(r, a, s23, t, n, e) {
    for(var i4 = T.H.e, o = T.H.Z, l33 = 0; l33 < s23;){
        var c = r[o(t, n) & a];
        n += 15 & c;
        var A = c >>> 4;
        if (A <= 15) e[l33] = A, l33++;
        else {
            var h15 = 0, u = 0;
            A == 16 ? (u = 3 + i4(t, n, 2), n += 2, h15 = e[l33 - 1]) : A == 17 ? (u = 3 + i4(t, n, 3), n += 3) : A == 18 && (u = 11 + i4(t, n, 7), n += 7);
            for(var d = l33 + u; l33 < d;)e[l33] = h15, l33++;
        }
    }
    return n;
}, T.H.V = function(r, a, s23, t) {
    for(var n = 0, e = 0, i4 = t.length >>> 1; e < s23;){
        var o = r[e + a];
        t[e << 1] = 0, t[1 + (e << 1)] = o, o > n && (n = o), e++;
    }
    for(; e < i4;)t[e << 1] = 0, t[1 + (e << 1)] = 0, e++;
    return n;
}, T.H.n = function(r, a) {
    for(var s23, t, n, e, i4 = T.H.m, o = r.length, l33 = i4.j, c = 0; c <= a; c++)l33[c] = 0;
    for(c = 1; c < o; c += 2)l33[r[c]]++;
    var A = i4.K;
    for(s23 = 0, l33[0] = 0, t = 1; t <= a; t++)s23 = s23 + l33[t - 1] << 1, A[t] = s23;
    for(n = 0; n < o; n += 2)(e = r[n + 1]) != 0 && (r[n] = A[e], A[e]++);
}, T.H.A = function(r, a, s23) {
    for(var t = r.length, n = T.H.m.r, e = 0; e < t; e += 2)if (r[e + 1] != 0) for(var i4 = e >> 1, o = r[e + 1], l33 = i4 << 4 | o, c = a - o, A = r[e] << c, h16 = A + (1 << c); A != h16;)s23[n[A] >>> 15 - a] = l33, A++;
}, T.H.l = function(r, a) {
    for(var s23 = T.H.m.r, t = 15 - a, n = 0; n < r.length; n += 2){
        var e = r[n] << a - r[n + 1];
        r[n] = s23[e] >>> t;
    }
}, T.H.M = function(r, a, s23) {
    s23 <<= 7 & a;
    var t = a >>> 3;
    r[t] |= s23, r[t + 1] |= s23 >>> 8;
}, T.H.I = function(r, a, s23) {
    s23 <<= 7 & a;
    var t = a >>> 3;
    r[t] |= s23, r[t + 1] |= s23 >>> 8, r[t + 2] |= s23 >>> 16;
}, T.H.e = function(r, a, s23) {
    return (r[a >>> 3] | r[1 + (a >>> 3)] << 8) >>> (7 & a) & (1 << s23) - 1;
}, T.H.b = function(r, a, s23) {
    return (r[a >>> 3] | r[1 + (a >>> 3)] << 8 | r[2 + (a >>> 3)] << 16) >>> (7 & a) & (1 << s23) - 1;
}, T.H.Z = function(r, a) {
    return (r[a >>> 3] | r[1 + (a >>> 3)] << 8 | r[2 + (a >>> 3)] << 16) >>> (7 & a);
}, T.H.i = function(r, a) {
    return (r[a >>> 3] | r[1 + (a >>> 3)] << 8 | r[2 + (a >>> 3)] << 16 | r[3 + (a >>> 3)] << 24) >>> (7 & a);
}, T.H.m = (G2 = Uint16Array, X4 = Uint32Array, {
    K: new G2(16),
    j: new G2(16),
    X: [
        16,
        17,
        18,
        0,
        8,
        7,
        9,
        6,
        10,
        5,
        11,
        4,
        12,
        3,
        13,
        2,
        14,
        1,
        15
    ],
    S: [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        13,
        15,
        17,
        19,
        23,
        27,
        31,
        35,
        43,
        51,
        59,
        67,
        83,
        99,
        115,
        131,
        163,
        195,
        227,
        258,
        999,
        999,
        999
    ],
    T: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3,
        4,
        4,
        4,
        4,
        5,
        5,
        5,
        5,
        0,
        0,
        0,
        0
    ],
    q: new G2(32),
    p: [
        1,
        2,
        3,
        4,
        5,
        7,
        9,
        13,
        17,
        25,
        33,
        49,
        65,
        97,
        129,
        193,
        257,
        385,
        513,
        769,
        1025,
        1537,
        2049,
        3073,
        4097,
        6145,
        8193,
        12289,
        16385,
        24577,
        65535,
        65535
    ],
    z: [
        0,
        0,
        0,
        0,
        1,
        1,
        2,
        2,
        3,
        3,
        4,
        4,
        5,
        5,
        6,
        6,
        7,
        7,
        8,
        8,
        9,
        9,
        10,
        10,
        11,
        11,
        12,
        12,
        13,
        13,
        0,
        0
    ],
    c: new X4(32),
    J: new G2(512),
    _: [],
    h: new G2(32),
    $: [],
    w: new G2(32768),
    C: [],
    v: [],
    d: new G2(32768),
    D: [],
    u: new G2(512),
    Q: [],
    r: new G2(32768),
    s: new X4(286),
    Y: new X4(30),
    a: new X4(19),
    t: new X4(15000),
    k: new G2(65536),
    g: new G2(32768)
}), (function() {
    for(var r = T.H.m, a = 0; a < 32768; a++){
        var s23 = a;
        s23 = (4278255360 & (s23 = (4042322160 & (s23 = (3435973836 & (s23 = (2863311530 & s23) >>> 1 | (1431655765 & s23) << 1)) >>> 2 | (858993459 & s23) << 2)) >>> 4 | (252645135 & s23) << 4)) >>> 8 | (16711935 & s23) << 8, r.r[a] = (s23 >>> 16 | s23 << 16) >>> 17;
    }
    function t(n, e, i4) {
        for(; (e--) != 0;)n.push(0, i4);
    }
    for(a = 0; a < 32; a++)r.q[a] = r.S[a] << 3 | r.T[a], r.c[a] = r.p[a] << 4 | r.z[a];
    t(r._, 144, 8), t(r._, 112, 9), t(r._, 24, 7), t(r._, 8, 8), T.H.n(r._, 9), T.H.A(r._, 9, r.J), T.H.l(r._, 9), t(r.$, 32, 5), T.H.n(r.$, 5), T.H.A(r.$, 5, r.h), T.H.l(r.$, 5), t(r.Q, 19, 0), t(r.C, 286, 0), t(r.D, 30, 0), t(r.v, 320, 0);
})(), T.H.N), w.decode._readInterlace = function(r, a) {
    for(var s24 = a.width, t = a.height, n = w.decode._getBPP(a), e = n >> 3, i4 = Math.ceil(s24 * n / 8), o = new Uint8Array(t * i4), l33 = 0, c = [
        0,
        0,
        4,
        0,
        2,
        0,
        1
    ], A = [
        0,
        4,
        0,
        2,
        0,
        1,
        0
    ], h16 = [
        8,
        8,
        8,
        4,
        4,
        2,
        2
    ], u = [
        8,
        8,
        4,
        4,
        2,
        2,
        1
    ], d = 0; d < 7;){
        for(var m10 = h16[d], g8 = u[d], v8 = 0, I = 0, E = c[d]; E < t;)E += m10, I++;
        for(var p12 = A[d]; p12 < s24;)p12 += g8, v8++;
        var H6 = Math.ceil(v8 * n / 8);
        w.decode._filterZero(r, a, l33, v8, I);
        for(var _ = 0, b6 = c[d]; b6 < t;){
            for(var U = A[d], F = l33 + _ * H6 << 3; U < s24;){
                var y14;
                if (n == 1 && (y14 = (y14 = r[F >> 3]) >> 7 - (7 & F) & 1, o[b6 * i4 + (U >> 3)] |= y14 << 7 - ((7 & U) << 0)), n == 2 && (y14 = (y14 = r[F >> 3]) >> 6 - (7 & F) & 3, o[b6 * i4 + (U >> 2)] |= y14 << 6 - ((3 & U) << 1)), n == 4 && (y14 = (y14 = r[F >> 3]) >> 4 - (7 & F) & 15, o[b6 * i4 + (U >> 1)] |= y14 << 4 - ((1 & U) << 2)), n >= 8) for(var N = b6 * i4 + U * e, C = 0; C < e; C++)o[N + C] = r[(F >> 3) + C];
                F += n, U += g8;
            }
            _++, b6 += m10;
        }
        v8 * I != 0 && (l33 += I * (1 + H6)), d += 1;
    }
    return o;
}, w.decode._getBPP = function(r) {
    return [
        1,
        null,
        3,
        1,
        2,
        null,
        4
    ][r.ctype] * r.depth;
}, w.decode._filterZero = function(r, a, s24, t, n) {
    var e = w.decode._getBPP(a), i4 = Math.ceil(t * e / 8), o = w.decode._paeth;
    e = Math.ceil(e / 8);
    var l33 = 0, c = 1, A = r[s24], h16 = 0;
    if (A > 1 && (r[s24] = [
        0,
        0,
        1
    ][A - 2]), A == 3) for(h16 = e; h16 < i4; h16++)r[h16 + 1] = r[h16 + 1] + (r[h16 + 1 - e] >>> 1) & 255;
    for(var u = 0; u < n; u++)if (h16 = 0, (A = r[(c = (l33 = s24 + u * i4) + u + 1) - 1]) == 0) for(; h16 < i4; h16++)r[l33 + h16] = r[c + h16];
    else if (A == 1) {
        for(; h16 < e; h16++)r[l33 + h16] = r[c + h16];
        for(; h16 < i4; h16++)r[l33 + h16] = r[c + h16] + r[l33 + h16 - e];
    } else if (A == 2) for(; h16 < i4; h16++)r[l33 + h16] = r[c + h16] + r[l33 + h16 - i4];
    else if (A == 3) {
        for(; h16 < e; h16++)r[l33 + h16] = r[c + h16] + (r[l33 + h16 - i4] >>> 1);
        for(; h16 < i4; h16++)r[l33 + h16] = r[c + h16] + (r[l33 + h16 - i4] + r[l33 + h16 - e] >>> 1);
    } else {
        for(; h16 < e; h16++)r[l33 + h16] = r[c + h16] + o(0, r[l33 + h16 - i4], 0);
        for(; h16 < i4; h16++)r[l33 + h16] = r[c + h16] + o(r[l33 + h16 - e], r[l33 + h16 - i4], r[l33 + h16 - e - i4]);
    }
    return r;
}, w.decode._paeth = function(r, a, s24) {
    var t = r + a - s24, n = t - r, e = t - a, i4 = t - s24;
    return n * n <= e * e && n * n <= i4 * i4 ? r : e * e <= i4 * i4 ? a : s24;
}, w.decode._IHDR = function(r, a, s24) {
    var t = w._bin;
    s24.width = t.readUint(r, a), a += 4, s24.height = t.readUint(r, a), a += 4, s24.depth = r[a], a++, s24.ctype = r[a], a++, s24.compress = r[a], a++, s24.filter = r[a], a++, s24.interlace = r[a], a++;
}, w._bin = {
    nextZero: function(a, s24) {
        for(; a[s24] != 0;)s24++;
        return s24;
    },
    readUshort: function(a, s24) {
        return a[s24] << 8 | a[s24 + 1];
    },
    writeUshort: function(a, s24, t) {
        a[s24] = t >> 8 & 255, a[s24 + 1] = 255 & t;
    },
    readUint: function(a, s24) {
        return 16777216 * a[s24] + (a[s24 + 1] << 16 | a[s24 + 2] << 8 | a[s24 + 3]);
    },
    writeUint: function(a, s24, t) {
        a[s24] = t >> 24 & 255, a[s24 + 1] = t >> 16 & 255, a[s24 + 2] = t >> 8 & 255, a[s24 + 3] = 255 & t;
    },
    readASCII: function(a, s24, t) {
        for(var n = "", e = 0; e < t; e++)n += String.fromCharCode(a[s24 + e]);
        return n;
    },
    writeASCII: function(a, s24, t) {
        for(var n = 0; n < t.length; n++)a[s24 + n] = t.charCodeAt(n);
    },
    readBytes: function(a, s24, t) {
        for(var n = [], e = 0; e < t; e++)n.push(a[s24 + e]);
        return n;
    },
    pad: function(a) {
        return a.length < 2 ? "0" + a : a;
    },
    readUTF8: function(a, s24, t) {
        for(var n, e = "", i4 = 0; i4 < t; i4++)e += "%" + w._bin.pad(a[s24 + i4].toString(16));
        try {
            n = decodeURIComponent(e);
        } catch (o) {
            return w._bin.readASCII(a, s24, t);
        }
        return n;
    }
}, w._copyTile = function(r, a, s24, t, n, e, i4, o, l33) {
    for(var c = Math.min(a, n), A = Math.min(s24, e), h16 = 0, u = 0, d = 0; d < A; d++)for(var m11 = 0; m11 < c; m11++)if (i4 >= 0 && o >= 0 ? (h16 = d * a + m11 << 2, u = (o + d) * n + i4 + m11 << 2) : (h16 = (-o + d) * a - i4 + m11 << 2, u = d * n + m11 << 2), l33 == 0) t[u] = r[h16], t[u + 1] = r[h16 + 1], t[u + 2] = r[h16 + 2], t[u + 3] = r[h16 + 3];
    else if (l33 == 1) {
        var g9 = r[h16 + 3] * (1 / 255), v9 = r[h16] * g9, I = r[h16 + 1] * g9, E = r[h16 + 2] * g9, p13 = t[u + 3] * (1 / 255), H7 = t[u] * p13, _ = t[u + 1] * p13, b7 = t[u + 2] * p13, U = 1 - g9, F = g9 + p13 * U, y15 = F == 0 ? 0 : 1 / F;
        t[u + 3] = 255 * F, t[u + 0] = (v9 + H7 * U) * y15, t[u + 1] = (I + _ * U) * y15, t[u + 2] = (E + b7 * U) * y15;
    } else if (l33 == 2) g9 = r[h16 + 3], v9 = r[h16], I = r[h16 + 1], E = r[h16 + 2], p13 = t[u + 3], H7 = t[u], _ = t[u + 1], b7 = t[u + 2], g9 == p13 && v9 == H7 && I == _ && E == b7 ? (t[u] = 0, t[u + 1] = 0, t[u + 2] = 0, t[u + 3] = 0) : (t[u] = v9, t[u + 1] = I, t[u + 2] = E, t[u + 3] = g9);
    else if (l33 == 3) {
        if (g9 = r[h16 + 3], v9 = r[h16], I = r[h16 + 1], E = r[h16 + 2], p13 = t[u + 3], H7 = t[u], _ = t[u + 1], b7 = t[u + 2], g9 == p13 && v9 == H7 && I == _ && E == b7) continue;
        if (g9 < 220 && p13 > 20) return !1;
    }
    return !0;
}, w.encode = function(r, a, s24, t, n, e, i4) {
    t == null && (t = 0), i4 == null && (i4 = !1);
    var o = w.encode.compress(r, a, s24, t, [
        !1,
        !1,
        !1,
        0,
        i4
    ]);
    return w.encode.compressPNG(o, -1), w.encode._main(o, a, s24, n, e);
}, w.encodeLL = function(r, a, s24, t, n, e, i4, o) {
    for(var l33 = {
        ctype: 0 + (t == 1 ? 0 : 2) + (n == 0 ? 0 : 4),
        depth: e,
        frames: []
    }, c = (t + n) * e, A = c * a, h16 = 0; h16 < r.length; h16++)l33.frames.push({
        rect: {
            x: 0,
            y: 0,
            width: a,
            height: s24
        },
        img: new Uint8Array(r[h16]),
        blend: 0,
        dispose: 1,
        bpp: Math.ceil(c / 8),
        bpl: Math.ceil(A / 8)
    });
    return w.encode.compressPNG(l33, 0, !0), w.encode._main(l33, a, s24, i4, o);
}, w.encode._main = function(r, a, s24, t, n) {
    n == null && (n = {
    });
    var e = w.crc.crc, i4 = w._bin.writeUint, o = w._bin.writeUshort, l33 = w._bin.writeASCII, c = 8, A = r.frames.length > 1, h16 = !1, u = 33 + (A ? 20 : 0);
    if (n.sRGB != null && (u += 13), n.pHYs != null && (u += 21), r.ctype == 3) {
        for(var d = r.plte.length, m11 = 0; m11 < d; m11++)r.plte[m11] >>> 24 != 255 && (h16 = !0);
        u += 8 + 3 * d + 4 + (h16 ? 8 + 1 * d + 4 : 0);
    }
    for(var g10 = 0; g10 < r.frames.length; g10++)A && (u += 38), u += (F = r.frames[g10]).cimg.length + 12, g10 != 0 && (u += 4);
    u += 12;
    var v10 = new Uint8Array(u), I = [
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        10
    ];
    for(m11 = 0; m11 < 8; m11++)v10[m11] = I[m11];
    if (i4(v10, c, 13), l33(v10, c += 4, "IHDR"), i4(v10, c += 4, a), i4(v10, c += 4, s24), v10[c += 4] = r.depth, v10[++c] = r.ctype, v10[++c] = 0, v10[++c] = 0, v10[++c] = 0, i4(v10, ++c, e(v10, c - 17, 17)), c += 4, n.sRGB != null && (i4(v10, c, 1), l33(v10, c += 4, "sRGB"), v10[c += 4] = n.sRGB, i4(v10, ++c, e(v10, c - 5, 5)), c += 4), n.pHYs != null && (i4(v10, c, 9), l33(v10, c += 4, "pHYs"), i4(v10, c += 4, n.pHYs[0]), i4(v10, c += 4, n.pHYs[1]), v10[c += 4] = n.pHYs[2], i4(v10, ++c, e(v10, c - 13, 13)), c += 4), A && (i4(v10, c, 8), l33(v10, c += 4, "acTL"), i4(v10, c += 4, r.frames.length), i4(v10, c += 4, n.loop != null ? n.loop : 0), i4(v10, c += 4, e(v10, c - 12, 12)), c += 4), r.ctype == 3) {
        for(i4(v10, c, 3 * (d = r.plte.length)), l33(v10, c += 4, "PLTE"), c += 4, m11 = 0; m11 < d; m11++){
            var E = 3 * m11, p14 = r.plte[m11], H8 = 255 & p14, _ = p14 >>> 8 & 255, b8 = p14 >>> 16 & 255;
            v10[c + E + 0] = H8, v10[c + E + 1] = _, v10[c + E + 2] = b8;
        }
        if (i4(v10, c += 3 * d, e(v10, c - 3 * d - 4, 3 * d + 4)), c += 4, h16) {
            for(i4(v10, c, d), l33(v10, c += 4, "tRNS"), c += 4, m11 = 0; m11 < d; m11++)v10[c + m11] = r.plte[m11] >>> 24 & 255;
            i4(v10, c += d, e(v10, c - d - 4, d + 4)), c += 4;
        }
    }
    var U = 0;
    for(g10 = 0; g10 < r.frames.length; g10++){
        var F = r.frames[g10];
        A && (i4(v10, c, 26), l33(v10, c += 4, "fcTL"), i4(v10, c += 4, U++), i4(v10, c += 4, F.rect.width), i4(v10, c += 4, F.rect.height), i4(v10, c += 4, F.rect.x), i4(v10, c += 4, F.rect.y), o(v10, c += 4, t[g10]), o(v10, c += 2, 1000), v10[c += 2] = F.dispose, v10[++c] = F.blend, i4(v10, ++c, e(v10, c - 30, 30)), c += 4);
        var y16 = F.cimg;
        i4(v10, c, (d = y16.length) + (g10 == 0 ? 0 : 4));
        var N = c += 4;
        l33(v10, c, g10 == 0 ? "IDAT" : "fdAT"), c += 4, g10 != 0 && (i4(v10, c, U++), c += 4), v10.set(y16, c), i4(v10, c += d, e(v10, N, c - N)), c += 4;
    }
    return i4(v10, c, 0), l33(v10, c += 4, "IEND"), i4(v10, c += 4, e(v10, c - 4, 4)), c += 4, v10.buffer;
}, w.encode.compressPNG = function(r, a, s24) {
    for(var t = 0; t < r.frames.length; t++){
        var n = r.frames[t], e = (n.rect.width, n.rect.height), i4 = new Uint8Array(e * n.bpl + e);
        n.cimg = w.encode._filterZero(n.img, e, n.bpp, n.bpl, i4, a, s24);
    }
}, w.encode.compress = function(r, a, s24, t, n) {
    for(var e = n[0], i5 = n[1], o = n[2], l33 = n[3], c = n[4], A = 6, h16 = 8, u = 255, d = 0; d < r.length; d++)for(var m12 = new Uint8Array(r[d]), g10 = m12.length, v10 = 0; v10 < g10; v10 += 4)u &= m12[v10 + 3];
    var I = u != 255, E = w.encode.framize(r, a, s24, e, i5, o), p15 = {
    }, H9 = [], _ = [];
    if (t != 0) {
        var b9 = [];
        for(v10 = 0; v10 < E.length; v10++)b9.push(E[v10].img.buffer);
        var U = w.encode.concatRGBA(b9), F = w.quantize(U, t), y17 = 0, N = new Uint8Array(F.abuf);
        for(v10 = 0; v10 < E.length; v10++){
            var C = (Y2 = E[v10].img).length;
            for(_.push(new Uint8Array(F.inds.buffer, y17 >> 2, C >> 2)), d = 0; d < C; d += 4)Y2[d] = N[y17 + d], Y2[d + 1] = N[y17 + d + 1], Y2[d + 2] = N[y17 + d + 2], Y2[d + 3] = N[y17 + d + 3];
            y17 += C;
        }
        for(v10 = 0; v10 < F.plte.length; v10++)H9.push(F.plte[v10].est.rgba);
    } else for(d = 0; d < E.length; d++){
        var B6 = E[d], P = new Uint32Array(B6.img.buffer), Q9 = B6.rect.width, R = (g10 = P.length, new Uint8Array(g10));
        for(_.push(R), v10 = 0; v10 < g10; v10++){
            var M = P[v10];
            if (v10 != 0 && M == P[v10 - 1]) R[v10] = R[v10 - 1];
            else if (v10 > Q9 && M == P[v10 - Q9]) R[v10] = R[v10 - Q9];
            else {
                var x = p15[M];
                if (x == null && (p15[M] = x = H9.length, H9.push(M), H9.length >= 300)) break;
                R[v10] = x;
            }
        }
    }
    var z5 = H9.length;
    for(z5 <= 256 && c == 0 && (h16 = z5 <= 2 ? 1 : z5 <= 4 ? 2 : z5 <= 16 ? 4 : 8, h16 = Math.max(h16, l33)), d = 0; d < E.length; d++){
        (B6 = E[d]).rect.x, B6.rect.y, Q9 = B6.rect.width;
        var D5 = B6.rect.height, V5 = B6.img, q = (new Uint32Array(V5.buffer), 4 * Q9), j6 = 4;
        if (z5 <= 256 && c == 0) {
            q = Math.ceil(h16 * Q9 / 8);
            for(var L = new Uint8Array(q * D5), O5 = _[d], k = 0; k < D5; k++){
                v10 = k * q;
                var rn = k * Q9;
                if (h16 == 8) for(var S8 = 0; S8 < Q9; S8++)L[v10 + S8] = O5[rn + S8];
                else if (h16 == 4) for(S8 = 0; S8 < Q9; S8++)L[v10 + (S8 >> 1)] |= O5[rn + S8] << 4 - 4 * (1 & S8);
                else if (h16 == 2) for(S8 = 0; S8 < Q9; S8++)L[v10 + (S8 >> 2)] |= O5[rn + S8] << 6 - 2 * (3 & S8);
                else if (h16 == 1) for(S8 = 0; S8 < Q9; S8++)L[v10 + (S8 >> 3)] |= O5[rn + S8] << 7 - 1 * (7 & S8);
            }
            V5 = L, A = 3, j6 = 1;
        } else if (I == 0 && E.length == 1) {
            L = new Uint8Array(Q9 * D5 * 3);
            var Fn = Q9 * D5;
            for(v10 = 0; v10 < Fn; v10++){
                var Y2, sn = 4 * v10;
                L[Y2 = 3 * v10] = V5[sn], L[Y2 + 1] = V5[sn + 1], L[Y2 + 2] = V5[sn + 2];
            }
            V5 = L, A = 2, j6 = 3, q = 3 * Q9;
        }
        B6.img = V5, B6.bpl = q, B6.bpp = j6;
    }
    return {
        ctype: A,
        depth: h16,
        plte: H9,
        frames: E
    };
}, w.encode.framize = function(r, a, s24, t, n, e) {
    for(var i5 = [], o = 0; o < r.length; o++){
        var l33, c = new Uint8Array(r[o]), A = new Uint32Array(c.buffer), h16 = 0, u = 0, d = a, m12 = s24, g10 = t ? 1 : 0;
        if (o != 0) {
            for(var v10 = e || t || o == 1 || i5[o - 2].dispose != 0 ? 1 : 2, I = 0, E = 1000000000, p15 = 0; p15 < v10; p15++){
                for(var H9 = new Uint8Array(r[o - 1 - p15]), _ = new Uint32Array(r[o - 1 - p15]), b10 = a, U = s24, F = -1, y18 = -1, N = 0; N < s24; N++)for(var C = 0; C < a; C++)A[z6 = N * a + C] != _[z6] && (C < b10 && (b10 = C), C > F && (F = C), N < U && (U = N), N > y18 && (y18 = N));
                F == -1 && (b10 = U = F = y18 = 0), n && ((1 & b10) == 1 && b10--, (1 & U) == 1 && U--);
                var B7 = (F - b10 + 1) * (y18 - U + 1);
                B7 < E && (E = B7, I = p15, h16 = b10, u = U, d = F - b10 + 1, m12 = y18 - U + 1);
            }
            H9 = new Uint8Array(r[o - 1 - I]), I == 1 && (i5[o - 1].dispose = 2), l33 = new Uint8Array(d * m12 * 4), w._copyTile(H9, a, s24, l33, d, m12, -h16, -u, 0), (g10 = w._copyTile(c, a, s24, l33, d, m12, -h16, -u, 3) ? 1 : 0) == 1 ? w.encode._prepareDiff(c, a, s24, l33, {
                x: h16,
                y: u,
                width: d,
                height: m12
            }) : w._copyTile(c, a, s24, l33, d, m12, -h16, -u, 0);
        } else l33 = c.slice(0);
        i5.push({
            rect: {
                x: h16,
                y: u,
                width: d,
                height: m12
            },
            img: l33,
            blend: g10,
            dispose: 0
        });
    }
    if (t) {
        for(o = 0; o < i5.length; o++)if ((D7 = i5[o]).blend != 1) {
            var P = D7.rect, Q10 = i5[o - 1].rect, R = Math.min(P.x, Q10.x), M = Math.min(P.y, Q10.y), x = {
                x: R,
                y: M,
                width: Math.max(P.x + P.width, Q10.x + Q10.width) - R,
                height: Math.max(P.y + P.height, Q10.y + Q10.height) - M
            };
            i5[o - 1].dispose = 1, o - 1 != 0 && w.encode._updateFrame(r, a, s24, i5, o - 1, x, n), w.encode._updateFrame(r, a, s24, i5, o, x, n);
        }
    }
    if (r.length != 1) for(var z6 = 0; z6 < i5.length; z6++){
        var D7;
        (D7 = i5[z6]).rect.width * D7.rect.height;
    }
    return i5;
}, w.encode._updateFrame = function(r, a, s24, t, n, e, i5) {
    for(var o = Uint8Array, l34 = Uint32Array, c = new o(r[n - 1]), A = new l34(r[n - 1]), h17 = n + 1 < r.length ? new o(r[n + 1]) : null, u = new o(r[n]), d = new l34(u.buffer), m13 = a, g11 = s24, v11 = -1, I = -1, E = 0; E < e.height; E++)for(var p16 = 0; p16 < e.width; p16++){
        var H10 = e.x + p16, _ = e.y + E, b11 = _ * a + H10, U = d[b11];
        U == 0 || t[n - 1].dispose == 0 && A[b11] == U && (h17 == null || h17[4 * b11 + 3] != 0) || (H10 < m13 && (m13 = H10), H10 > v11 && (v11 = H10), _ < g11 && (g11 = _), _ > I && (I = _));
    }
    v11 == -1 && (m13 = g11 = v11 = I = 0), i5 && ((1 & m13) == 1 && m13--, (1 & g11) == 1 && g11--), e = {
        x: m13,
        y: g11,
        width: v11 - m13 + 1,
        height: I - g11 + 1
    };
    var F = t[n];
    F.rect = e, F.blend = 1, F.img = new Uint8Array(e.width * e.height * 4), t[n - 1].dispose == 0 ? (w._copyTile(c, a, s24, F.img, e.width, e.height, -e.x, -e.y, 0), w.encode._prepareDiff(u, a, s24, F.img, e)) : w._copyTile(u, a, s24, F.img, e.width, e.height, -e.x, -e.y, 0);
}, w.encode._prepareDiff = function(r, a, s24, t, n) {
    w._copyTile(r, a, s24, t, n.width, n.height, -n.x, -n.y, 2);
}, w.encode._filterZero = function(r, a, s24, t, n, e, i5) {
    var o, l34 = [], c = [
        0,
        1,
        2,
        3,
        4
    ];
    e != -1 ? c = [
        e
    ] : (a * t > 500000 || s24 == 1) && (c = [
        0
    ]), i5 && (o = {
        level: 0
    });
    for(var A = Qn, h17 = 0; h17 < c.length; h17++){
        for(var u = 0; u < a; u++)w.encode._filterLine(n, r, u, t, s24, c[h17]);
        l34.push(A.deflate(n, o));
    }
    var d, m13 = 1000000000;
    for(h17 = 0; h17 < l34.length; h17++)l34[h17].length < m13 && (d = h17, m13 = l34[h17].length);
    return l34[d];
}, w.encode._filterLine = function(r, a, s24, t, n, e) {
    var i5 = s24 * t, o = i5 + s24, l34 = w.decode._paeth;
    if (r[o] = e, o++, e == 0) {
        if (t < 500) for(var c = 0; c < t; c++)r[o + c] = a[i5 + c];
        else r.set(new Uint8Array(a.buffer, i5, t), o);
    } else if (e == 1) {
        for(c = 0; c < n; c++)r[o + c] = a[i5 + c];
        for(c = n; c < t; c++)r[o + c] = a[i5 + c] - a[i5 + c - n] + 256 & 255;
    } else if (s24 == 0) {
        for(c = 0; c < n; c++)r[o + c] = a[i5 + c];
        if (e == 2) for(c = n; c < t; c++)r[o + c] = a[i5 + c];
        if (e == 3) for(c = n; c < t; c++)r[o + c] = a[i5 + c] - (a[i5 + c - n] >> 1) + 256 & 255;
        if (e == 4) for(c = n; c < t; c++)r[o + c] = a[i5 + c] - l34(a[i5 + c - n], 0, 0) + 256 & 255;
    } else {
        if (e == 2) for(c = 0; c < t; c++)r[o + c] = a[i5 + c] + 256 - a[i5 + c - t] & 255;
        if (e == 3) {
            for(c = 0; c < n; c++)r[o + c] = a[i5 + c] + 256 - (a[i5 + c - t] >> 1) & 255;
            for(c = n; c < t; c++)r[o + c] = a[i5 + c] + 256 - (a[i5 + c - t] + a[i5 + c - n] >> 1) & 255;
        }
        if (e == 4) {
            for(c = 0; c < n; c++)r[o + c] = a[i5 + c] + 256 - l34(0, a[i5 + c - t], 0) & 255;
            for(c = n; c < t; c++)r[o + c] = a[i5 + c] + 256 - l34(a[i5 + c - n], a[i5 + c - t], a[i5 + c - n - t]) & 255;
        }
    }
}, w.crc = {
    table: (function() {
        for(var r = new Uint32Array(256), a = 0; a < 256; a++){
            for(var s24 = a, t = 0; t < 8; t++)1 & s24 ? s24 = 3988292384 ^ s24 >>> 1 : s24 >>>= 1;
            r[a] = s24;
        }
        return r;
    })(),
    update: function(a, s25, t, n) {
        for(var e = 0; e < n; e++)a = w.crc.table[255 & (a ^ s25[t + e])] ^ a >>> 8;
        return a;
    },
    crc: function(a, s25, t) {
        return 4294967295 ^ w.crc.update(4294967295, a, s25, t);
    }
}, w.quantize = function(r, a) {
    var s25, t = new Uint8Array(r), n = t.slice(0), e = new Uint32Array(n.buffer), i5 = w.quantize.getKDtree(n, a), o = i5[0], l34 = i5[1], c = w.quantize.planeDst, A = t, h17 = e, u = A.length, d = new Uint8Array(t.length >> 2);
    if (t.length < 20000000) for(var m13 = 0; m13 < u; m13 += 4){
        var g11 = A[m13] * (1 / 255), v11 = A[m13 + 1] * (1 / 255), I = A[m13 + 2] * (1 / 255), E = A[m13 + 3] * (1 / 255);
        s25 = w.quantize.getNearest(o, g11, v11, I, E), d[m13 >> 2] = s25.ind, h17[m13 >> 2] = s25.est.rgba;
    }
    else for(m13 = 0; m13 < u; m13 += 4){
        for(g11 = A[m13] * (1 / 255), v11 = A[m13 + 1] * (1 / 255), I = A[m13 + 2] * (1 / 255), E = A[m13 + 3] * (1 / 255), s25 = o; s25.left;)s25 = c(s25.est, g11, v11, I, E) <= 0 ? s25.left : s25.right;
        d[m13 >> 2] = s25.ind, h17[m13 >> 2] = s25.est.rgba;
    }
    return {
        abuf: n.buffer,
        inds: d,
        plte: l34
    };
}, w.quantize.getKDtree = function(r, a, s25) {
    s25 == null && (s25 = 0.0001);
    var t = new Uint32Array(r.buffer), n = {
        i0: 0,
        i1: r.length,
        bst: null,
        est: null,
        tdst: 0,
        left: null,
        right: null
    };
    n.bst = w.quantize.stats(r, n.i0, n.i1), n.est = w.quantize.estats(n.bst);
    for(var e = [
        n
    ]; e.length < a;){
        for(var i5 = 0, o = 0, l34 = 0; l34 < e.length; l34++)e[l34].est.L > i5 && (i5 = e[l34].est.L, o = l34);
        if (i5 < s25) break;
        var c = e[o], A = w.quantize.splitPixels(r, t, c.i0, c.i1, c.est.e, c.est.eMq255);
        if (c.i0 >= A || c.i1 <= A) c.est.L = 0;
        else {
            var h17 = {
                i0: c.i0,
                i1: A,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null
            };
            h17.bst = w.quantize.stats(r, h17.i0, h17.i1), h17.est = w.quantize.estats(h17.bst);
            var u = {
                i0: A,
                i1: c.i1,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null
            };
            for(u.bst = {
                R: [],
                m: [],
                N: c.bst.N - h17.bst.N
            }, l34 = 0; l34 < 16; l34++)u.bst.R[l34] = c.bst.R[l34] - h17.bst.R[l34];
            for(l34 = 0; l34 < 4; l34++)u.bst.m[l34] = c.bst.m[l34] - h17.bst.m[l34];
            u.est = w.quantize.estats(u.bst), c.left = h17, c.right = u, e[o] = h17, e.push(u);
        }
    }
    for(e.sort(function(d, m13) {
        return m13.bst.N - d.bst.N;
    }), l34 = 0; l34 < e.length; l34++)e[l34].ind = l34;
    return [
        n,
        e
    ];
}, w.quantize.getNearest = function(r, a, s25, t, n) {
    if (r.left == null) return r.tdst = w.quantize.dist(r.est.q, a, s25, t, n), r;
    var e = w.quantize.planeDst(r.est, a, s25, t, n), i6 = r.left, o = r.right;
    e > 0 && (i6 = r.right, o = r.left);
    var l35 = w.quantize.getNearest(i6, a, s25, t, n);
    if (l35.tdst <= e * e) return l35;
    var c = w.quantize.getNearest(o, a, s25, t, n);
    return c.tdst < l35.tdst ? c : l35;
}, w.quantize.planeDst = function(r, a, s25, t, n) {
    var e = r.e;
    return e[0] * a + e[1] * s25 + e[2] * t + e[3] * n - r.eMq;
}, w.quantize.dist = function(r, a, s25, t, n) {
    var e = a - r[0], i6 = s25 - r[1], o = t - r[2], l35 = n - r[3];
    return e * e + i6 * i6 + o * o + l35 * l35;
}, w.quantize.splitPixels = function(r, a, s25, t, n, e) {
    var i6 = w.quantize.vecDot;
    for(t -= 4; s25 < t;){
        for(; i6(r, s25, n) <= e;)s25 += 4;
        for(; i6(r, t, n) > e;)t -= 4;
        if (s25 >= t) break;
        var o = a[s25 >> 2];
        a[s25 >> 2] = a[t >> 2], a[t >> 2] = o, s25 += 4, t -= 4;
    }
    for(; i6(r, s25, n) > e;)s25 -= 4;
    return s25 + 4;
}, w.quantize.vecDot = function(r, a, s25) {
    return r[a] * s25[0] + r[a + 1] * s25[1] + r[a + 2] * s25[2] + r[a + 3] * s25[3];
}, w.quantize.stats = function(r, a, s25) {
    for(var t = [
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
        0
    ], n = [
        0,
        0,
        0,
        0
    ], e = s25 - a >> 2, i6 = a; i6 < s25; i6 += 4){
        var o = r[i6] * (1 / 255), l35 = r[i6 + 1] * (1 / 255), c = r[i6 + 2] * (1 / 255), A = r[i6 + 3] * (1 / 255);
        n[0] += o, n[1] += l35, n[2] += c, n[3] += A, t[0] += o * o, t[1] += o * l35, t[2] += o * c, t[3] += o * A, t[5] += l35 * l35, t[6] += l35 * c, t[7] += l35 * A, t[10] += c * c, t[11] += c * A, t[15] += A * A;
    }
    return t[4] = t[1], t[8] = t[2], t[9] = t[6], t[12] = t[3], t[13] = t[7], t[14] = t[11], {
        R: t,
        m: n,
        N: e
    };
}, w.quantize.estats = function(r) {
    var a = r.R, s25 = r.m, t = r.N, n = s25[0], e = s25[1], i6 = s25[2], o = s25[3], l36 = t == 0 ? 0 : 1 / t, c = [
        a[0] - n * n * l36,
        a[1] - n * e * l36,
        a[2] - n * i6 * l36,
        a[3] - n * o * l36,
        a[4] - e * n * l36,
        a[5] - e * e * l36,
        a[6] - e * i6 * l36,
        a[7] - e * o * l36,
        a[8] - i6 * n * l36,
        a[9] - i6 * e * l36,
        a[10] - i6 * i6 * l36,
        a[11] - i6 * o * l36,
        a[12] - o * n * l36,
        a[13] - o * e * l36,
        a[14] - o * i6 * l36,
        a[15] - o * o * l36
    ], A = c, h18 = w.M4, u = [
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random()
    ], d = 0, m13 = 0;
    if (t != 0) for(var g12 = 0; g12 < 16 && (u = h18.multVec(A, u), m13 = Math.sqrt(h18.dot(u, u)), u = h18.sml(1 / m13, u), !(g12 != 0 && Math.abs(m13 - d) < 0.000000001)); g12++)d = m13;
    var v12 = [
        n * l36,
        e * l36,
        i6 * l36,
        o * l36
    ];
    return {
        Cov: c,
        q: v12,
        e: u,
        L: d,
        eMq255: h18.dot(h18.sml(255, v12), u),
        eMq: h18.dot(u, v12),
        rgba: (Math.round(255 * v12[3]) << 24 | Math.round(255 * v12[2]) << 16 | Math.round(255 * v12[1]) << 8 | Math.round(255 * v12[0]) << 0) >>> 0
    };
}, w.M4 = {
    multVec: function(a, s25) {
        return [
            a[0] * s25[0] + a[1] * s25[1] + a[2] * s25[2] + a[3] * s25[3],
            a[4] * s25[0] + a[5] * s25[1] + a[6] * s25[2] + a[7] * s25[3],
            a[8] * s25[0] + a[9] * s25[1] + a[10] * s25[2] + a[11] * s25[3],
            a[12] * s25[0] + a[13] * s25[1] + a[14] * s25[2] + a[15] * s25[3]
        ];
    },
    dot: function(a, s25) {
        return a[0] * s25[0] + a[1] * s25[1] + a[2] * s25[2] + a[3] * s25[3];
    },
    sml: function(a, s25) {
        return [
            a * s25[0],
            a * s25[1],
            a * s25[2],
            a * s25[3]
        ];
    }
}, w.encode.concatRGBA = function(r) {
    for(var a = 0, s25 = 0; s25 < r.length; s25++)a += r[s25].byteLength;
    var t = new Uint8Array(a), n = 0;
    for(s25 = 0; s25 < r.length; s25++){
        for(var e = new Uint8Array(r[s25]), i6 = e.length, o = 0; o < i6; o += 4){
            var l36 = e[o], c = e[o + 1], A = e[o + 2], h18 = e[o + 3];
            h18 == 0 && (l36 = c = A = 0), t[n + o] = l36, t[n + o + 1] = c, t[n + o + 2] = A, t[n + o + 3] = h18;
        }
        n += i6;
    }
    return t.buffer;
};
var on = typeof window != "undefined", an = on && window.cordova && window.cordova.require && window.cordova.require("cordova/modulemapper"), Mn = on && (an && an.getOriginalSymbol(window, "File") || File), vn = on && (an && an.getOriginalSymbol(window, "FileReader") || FileReader);
function K4() {
    return new Promise(function(r, a) {
        var s25, t, n, e;
        return K4.result !== void 0 ? r(K4.result) : ln("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==", "test.jpg", Date.now()).then(function(i7) {
            try {
                return fn(s25 = i7).then(function(o) {
                    try {
                        return cn(t = o[1], s25.type, s25.name, s25.lastModified).then(function(l37) {
                            try {
                                return n = l37, $3(t), fn(n).then(function(c) {
                                    try {
                                        return e = c[0], K4.result = e.width === 1 && e.height === 2, r(K4.result);
                                    } catch (A) {
                                        return a(A);
                                    }
                                }, a);
                            } catch (c) {
                                return a(c);
                            }
                        }, a);
                    } catch (l37) {
                        return a(l37);
                    }
                }, a);
            } catch (o) {
                return a(o);
            }
        }, a);
    });
}
function gn(r) {
    return new Promise(function(a, s25) {
        var t = new vn;
        t.onload = function() {
            return a(t.result);
        }, t.onerror = function(n) {
            return s25(n);
        }, t.readAsDataURL(r);
    });
}
function ln(r, a) {
    var s25 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Date.now();
    return new Promise(function(t) {
        for(var n = r.split(","), e = n[0].match(/:(.*?);/)[1], i7 = globalThis.atob(n[1]), o = i7.length, l37 = new Uint8Array(o); o--;)l37[o] = i7.charCodeAt(o);
        var c = new Blob([
            l37
        ], {
            type: e
        });
        c.name = a, c.lastModified = s25, t(c);
    });
}
function wn(r) {
    return new Promise(function(a, s25) {
        var t = new Image;
        t.onload = function() {
            return a(t);
        }, t.onerror = function(n) {
            return s25(n);
        }, t.src = r;
    });
}
function pn(r) {
    var a = J2(en(r.width, r.height), 2), s25 = a[0];
    return a[1].drawImage(r, 0, 0, s25.width, s25.height), s25;
}
function fn(r) {
    return new Promise(function(a, s25) {
        var t, n, e = function() {
            try {
                return n = pn(t), a([
                    t,
                    n
                ]);
            } catch (l37) {
                return s25(l37);
            }
        }, i7 = function(l37) {
            try {
                return gn(r).then(function(c) {
                    try {
                        return wn(c).then(function(A) {
                            try {
                                return t = A, e();
                            } catch (h19) {
                                return s25(h19);
                            }
                        }, s25);
                    } catch (A) {
                        return s25(A);
                    }
                }, s25);
            } catch (c) {
                return s25(c);
            }
        };
        try {
            return createImageBitmap(r).then(function(o) {
                try {
                    return t = o, e();
                } catch (l37) {
                    return i7();
                }
            }, i7);
        } catch (o) {
            i7();
        }
    });
}
function cn(r, a, s25, t) {
    var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1;
    return new Promise(function(e, i7) {
        var o, l37, c;
        if (a === "image/png") return l37 = r.getContext("2d").getImageData(0, 0, r.width, r.height).data, c = w.encode([
            l37
        ], r.width, r.height, 256 * n), (o = new Blob([
            c
        ], {
            type: a
        })).name = s25, o.lastModified = t, A.call(this);
        {
            let h19 = function() {
                return A.call(this);
            };
            return typeof OffscreenCanvas == "function" && r instanceof OffscreenCanvas ? r.convertToBlob({
                type: a,
                quality: n
            }).then((function(u) {
                try {
                    return (o = u).name = s25, o.lastModified = t, h19.call(this);
                } catch (d) {
                    return i7(d);
                }
            }).bind(this), i7) : ln(r.toDataURL(a, n), s25, t).then((function(u) {
                try {
                    return o = u, h19.call(this);
                } catch (d) {
                    return i7(d);
                }
            }).bind(this), i7);
        }
        function A() {
            return e(o);
        }
    });
}
function bn(r) {
    return new Promise(function(a, s25) {
        var t = new vn;
        t.onload = function(n) {
            var e = new DataView(n.target.result);
            if (e.getUint16(0, !1) != 65496) return a(-2);
            for(var i7 = e.byteLength, o = 2; o < i7;){
                if (e.getUint16(o + 2, !1) <= 8) return a(-1);
                var l37 = e.getUint16(o, !1);
                if (o += 2, l37 == 65505) {
                    if (e.getUint32(o += 2, !1) != 1165519206) return a(-1);
                    var c = e.getUint16(o += 6, !1) == 18761;
                    o += e.getUint32(o + 4, c);
                    var A = e.getUint16(o, c);
                    o += 2;
                    for(var h19 = 0; h19 < A; h19++)if (e.getUint16(o + 12 * h19, c) == 274) return a(e.getUint16(o + 12 * h19 + 8, c));
                } else {
                    if ((65280 & l37) != 65280) break;
                    o += e.getUint16(o, !1);
                }
            }
            return a(-1);
        }, t.onerror = function(n) {
            return s25(n);
        }, t.readAsArrayBuffer(r);
    });
}
function Un(r, a) {
    var s25, t = r.width, n = r.height, e = a.maxWidthOrHeight, i7 = r;
    if (isFinite(e) && (t > e || n > e)) {
        var o = J2(en(t, n), 2);
        i7 = o[0], s25 = o[1], t > n ? (i7.width = e, i7.height = n / t * e) : (i7.width = t / n * e, i7.height = e), s25.drawImage(r, 0, 0, i7.width, i7.height), $3(r);
    }
    return i7;
}
function _n(r, a) {
    var s25 = r.width, t = r.height, n = J2(en(s25, t), 2), e = n[0], i7 = n[1];
    switch(4 < a && a < 9 ? (e.width = t, e.height = s25) : (e.width = s25, e.height = t), a){
        case 2:
            i7.transform(-1, 0, 0, 1, s25, 0);
            break;
        case 3:
            i7.transform(-1, 0, 0, -1, s25, t);
            break;
        case 4:
            i7.transform(1, 0, 0, -1, 0, t);
            break;
        case 5:
            i7.transform(0, 1, 1, 0, 0, 0);
            break;
        case 6:
            i7.transform(0, 1, -1, 0, t, 0);
            break;
        case 7:
            i7.transform(0, -1, -1, 0, t, s25);
            break;
        case 8:
            i7.transform(0, -1, 1, 0, 0, s25);
    }
    return i7.drawImage(r, 0, 0, s25, t), $3(r), e;
}
function en(r, a) {
    var s25, t;
    try {
        if ((t = (s25 = new OffscreenCanvas(r, a)).getContext("2d")) === null) throw new Error("getContext of OffscreenCanvas returns null");
    } catch (n) {
        t = (s25 = document.createElement("canvas")).getContext("2d");
    }
    return s25.width = r, s25.height = a, [
        s25,
        t
    ];
}
function $3(r) {
    r.width = 0, r.height = 0;
}
function un(r, a) {
    var s25 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    return new Promise(function(t, n) {
        var e, i7, o, l38, c, A, h20, u, d, m13, g12, v12, I, E, p16, H11, _, b12;
        function U() {
            var y19 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 5;
            e += y19, a.onProgress(Math.min(e, 100));
        }
        function F(y19) {
            e = Math.min(Math.max(y19, e), 100), a.onProgress(e);
        }
        return e = s25, i7 = a.maxIteration || 10, o = 1024 * a.maxSizeMB * 1024, U(), fn(r).then((function(y19) {
            try {
                var N = J2(y19, 2);
                return N[0], l38 = N[1], U(), c = Un(l38, a), U(), new Promise(function(C, B8) {
                    var P;
                    if (!(P = a.exifOrientation)) return bn(r).then((function(R) {
                        try {
                            return P = R, Q11.call(this);
                        } catch (M) {
                            return B8(M);
                        }
                    }).bind(this), B8);
                    function Q11() {
                        return C(P);
                    }
                    return Q11.call(this);
                }).then((function(C) {
                    try {
                        return A = C, U(), K4().then((function(B8) {
                            try {
                                return h20 = B8 ? c : _n(c, A), U(), u = a.initialQuality || 1, d = a.fileType || r.type, cn(h20, d, r.name, r.lastModified, u).then((function(P) {
                                    try {
                                        {
                                            let R = function() {
                                                if ((i7--) && (p16 > o || p16 > I)) {
                                                    var x, z6, D8 = J2(en(x = g12 ? 0.95 * b12.width : b12.width, z6 = g12 ? 0.95 * b12.height : b12.height), 2);
                                                    return _ = D8[0], D8[1].drawImage(b12, 0, 0, x, z6), u *= 0.95, cn(_, d, r.name, r.lastModified, u).then(function(V6) {
                                                        try {
                                                            return H11 = V6, $3(b12), b12 = _, p16 = H11.size, F(Math.min(99, Math.floor((E - p16) / (E - o) * 100))), R;
                                                        } catch (q) {
                                                            return n(q);
                                                        }
                                                    }, n);
                                                }
                                                return [
                                                    1
                                                ];
                                            }, M = function() {
                                                return $3(b12), $3(_), $3(c), $3(h20), $3(l38), F(100), t(H11);
                                            };
                                            if (m13 = P, U(), g12 = m13.size > o, v12 = m13.size > r.size, !g12 && !v12) return F(100), t(m13);
                                            var Q11;
                                            return I = r.size, E = m13.size, p16 = E, b12 = h20, (Q11 = (function(x) {
                                                for(; x;){
                                                    if (x.then) return void x.then(Q11, n);
                                                    try {
                                                        if (x.pop) {
                                                            if (x.length) return x.pop() ? M.call(this) : x;
                                                            x = R;
                                                        } else x = x.call(this);
                                                    } catch (z7) {
                                                        return n(z7);
                                                    }
                                                }
                                            }).bind(this))(R);
                                        }
                                    } catch (R) {
                                        return n(R);
                                    }
                                }).bind(this), n);
                            } catch (P) {
                                return n(P);
                            }
                        }).bind(this), n);
                    } catch (B8) {
                        return n(B8);
                    }
                }).bind(this), n);
            } catch (C) {
                return n(C);
            }
        }).bind(this), n);
    });
}
on && (Number.isInteger = Number.isInteger || function(r) {
    return typeof r == "number" && isFinite(r) && Math.floor(r) === r;
});
var Wn = 0, dn, nn;
function Pn(r) {
    return typeof r == "function" && (r = "(".concat(f, ")()")), new Worker(URL.createObjectURL(new Blob([
        r
    ])));
}
function xn(r) {
    return URL.createObjectURL(new Blob([
        r
    ], {
        type: "application/javascript"
    }));
}
function tn(r) {
    return JSON.stringify(r, function(a, s25) {
        return typeof s25 == "function" ? "BIC_FN:::(() => ".concat(s25.toString(), ")()") : s25;
    });
}
function yn(o) {
    if (typeof o == "string") return o;
    var result = {
    };
    return Object.entries(o).forEach(function(_ref) {
        var _ref2 = J2(_ref, 2), key = _ref2[0], value = _ref2[1];
        if (typeof value == "string" && value.startsWith("BIC_FN:::")) try {
            result[key] = eval(value.replace(/^BIC_FN:::/, ""));
        } catch (r) {
            throw console.log(key, r), r;
        }
        else result[key] = yn(value);
    }), result;
}
function Rn() {
    return xn(`\n    // reconstruct library\n    function imageCompression (){return (`.concat(Z, `).apply(null, arguments)}\n\n    imageCompression.getDataUrlFromFile = `).concat(Z.getDataUrlFromFile, `\n    imageCompression.getFilefromDataUrl = `).concat(Z.getFilefromDataUrl, `\n    imageCompression.loadImage = `).concat(Z.loadImage, `\n    imageCompression.drawImageInCanvas = `).concat(Z.drawImageInCanvas, `\n    imageCompression.drawFileInCanvas = `).concat(Z.drawFileInCanvas, `\n    imageCompression.canvasToFile = `).concat(Z.canvasToFile, `\n    imageCompression.getExifOrientation = `).concat(Z.getExifOrientation, `\n    imageCompression.handleMaxWidthOrHeight = `).concat(Z.handleMaxWidthOrHeight, `\n    imageCompression.followExifOrientation = `).concat(Z.followExifOrientation, `\n    imageCompression.cleanupCanvasMemory = `).concat(Z.cleanupCanvasMemory, `\n    imageCompression.isAutoOrientationInBrowser = `).concat(Z.isAutoOrientationInBrowser, `\n\n    // functions / objects\n    getDataUrlFromFile = imageCompression.getDataUrlFromFile\n    getFilefromDataUrl = imageCompression.getFilefromDataUrl\n    loadImage = imageCompression.loadImage\n    drawImageInCanvas = imageCompression.drawImageInCanvas\n    drawFileInCanvas = imageCompression.drawFileInCanvas\n    canvasToFile = imageCompression.canvasToFile\n    getExifOrientation = imageCompression.getExifOrientation\n    handleMaxWidthOrHeight = imageCompression.handleMaxWidthOrHeight\n    followExifOrientation = imageCompression.followExifOrientation\n    cleanupCanvasMemory = imageCompression.cleanupCanvasMemory\n    isAutoOrientationInBrowser = imageCompression.isAutoOrientationInBrowser\n    \n    getNewCanvasAndCtx = `).concat(en, `\n    CustomFileReader = FileReader\n    CustomFile = File\n    function _slicedToArray(arr, n) { return arr }\n    function _typeof(a) { return typeof a }\n    function compress (){return (`).concat(un, `).apply(null, arguments)}\n\n    // Libraries\n    const parse = `).concat(yn, `\n    const UPNG = {}\n    UPNG.toRGBA8 = `).concat(w.toRGBA8, `\n    UPNG.toRGBA8.decodeImage = `).concat(w.toRGBA8.decodeImage, `\n    UPNG.decode = `).concat(w.decode, `\n    UPNG.decode._decompress = `).concat(w.decode._decompress, `\n    UPNG.decode._inflate = `).concat(w.decode._inflate, `\n    UPNG.decode._readInterlace = `).concat(w.decode._readInterlace, `\n    UPNG.decode._getBPP = `).concat(w.decode._getBPP, ` \n    UPNG.decode._filterZero = `).concat(w.decode._filterZero, `\n    UPNG.decode._paeth = `).concat(w.decode._paeth, `\n    UPNG.decode._IHDR = `).concat(w.decode._IHDR, `\n    UPNG._bin = parse(`).concat(tn(w._bin), `)\n    UPNG._copyTile = `).concat(w._copyTile, `\n    UPNG.encode = `).concat(w.encode, `\n    UPNG.encodeLL = `).concat(w.encodeLL, ` \n    UPNG.encode._main = `).concat(w.encode._main, `\n    UPNG.encode.compressPNG = `).concat(w.encode.compressPNG, ` \n    UPNG.encode.compress = `).concat(w.encode.compress, `\n    UPNG.encode.framize = `).concat(w.encode.framize, ` \n    UPNG.encode._updateFrame = `).concat(w.encode._updateFrame, ` \n    UPNG.encode._prepareDiff = `).concat(w.encode._prepareDiff, ` \n    UPNG.encode._filterZero = `).concat(w.encode._filterZero, ` \n    UPNG.encode._filterLine = `).concat(w.encode._filterLine, `\n    UPNG.encode.concatRGBA = `).concat(w.encode.concatRGBA, `\n    UPNG.crc = parse(`).concat(tn(w.crc), `)\n    UPNG.crc.table = ( function() {\n    var tab = new Uint32Array(256);\n    for (var n=0; n<256; n++) {\n      var c = n;\n      for (var k=0; k<8; k++) {\n        if (c & 1)  c = 0xedb88320 ^ (c >>> 1);\n        else        c = c >>> 1;\n      }\n      tab[n] = c;  }\n    return tab;  })()\n    UPNG.quantize = `).concat(w.quantize, ` \n    UPNG.quantize.getKDtree = `).concat(w.quantize.getKDtree, ` \n    UPNG.quantize.getNearest = `).concat(w.quantize.getNearest, ` \n    UPNG.quantize.planeDst = `).concat(w.quantize.planeDst, ` \n    UPNG.quantize.dist = `).concat(w.quantize.dist, `     \n    UPNG.quantize.splitPixels = `).concat(w.quantize.splitPixels, ` \n    UPNG.quantize.vecDot = `).concat(w.quantize.vecDot, ` \n    UPNG.quantize.stats = `).concat(w.quantize.stats, ` \n    UPNG.quantize.estats = `).concat(w.quantize.estats, `\n    UPNG.M4 = parse(`).concat(tn(w.M4), `)\n    UPNG.encode.concatRGBA = `).concat(w.encode.concatRGBA, `\n    UPNG.inflateRaw=function(){\n    var H={};H.H={};H.H.N=function(N,W){var R=Uint8Array,i=0,m=0,J=0,h=0,Q=0,X=0,u=0,w=0,d=0,v,C;\n      if(N[0]==3&&N[1]==0)return W?W:new R(0);var V=H.H,n=V.b,A=V.e,l=V.R,M=V.n,I=V.A,e=V.Z,b=V.m,Z=W==null;\n      if(Z)W=new R(N.length>>>2<<5);while(i==0){i=n(N,d,1);m=n(N,d+1,2);d+=3;if(m==0){if((d&7)!=0)d+=8-(d&7);\n        var D=(d>>>3)+4,q=N[D-4]|N[D-3]<<8;if(Z)W=H.H.W(W,w+q);W.set(new R(N.buffer,N.byteOffset+D,q),w);d=D+q<<3;\n        w+=q;continue}if(Z)W=H.H.W(W,w+(1<<17));if(m==1){v=b.J;C=b.h;X=(1<<9)-1;u=(1<<5)-1}if(m==2){J=A(N,d,5)+257;\n        h=A(N,d+5,5)+1;Q=A(N,d+10,4)+4;d+=14;var E=d,j=1;for(var c=0;c<38;c+=2){b.Q[c]=0;b.Q[c+1]=0}for(var c=0;\n                                                                                                        c<Q;c++){var K=A(N,d+c*3,3);b.Q[(b.X[c]<<1)+1]=K;if(K>j)j=K}d+=3*Q;M(b.Q,j);I(b.Q,j,b.u);v=b.w;C=b.d;\n        d=l(b.u,(1<<j)-1,J+h,N,d,b.v);var r=V.V(b.v,0,J,b.C);X=(1<<r)-1;var S=V.V(b.v,J,h,b.D);u=(1<<S)-1;M(b.C,r);\n        I(b.C,r,v);M(b.D,S);I(b.D,S,C)}while(!0){var T=v[e(N,d)&X];d+=T&15;var p=T>>>4;if(p>>>8==0){W[w++]=p}else if(p==256){break}else{var z=w+p-254;\n        if(p>264){var _=b.q[p-257];z=w+(_>>>3)+A(N,d,_&7);d+=_&7}var $=C[e(N,d)&u];d+=$&15;var s=$>>>4,Y=b.c[s],a=(Y>>>4)+n(N,d,Y&15);\n        d+=Y&15;while(w<z){W[w]=W[w++-a];W[w]=W[w++-a];W[w]=W[w++-a];W[w]=W[w++-a]}w=z}}}return W.length==w?W:W.slice(0,w)};\n      H.H.W=function(N,W){var R=N.length;if(W<=R)return N;var V=new Uint8Array(R<<1);V.set(N,0);return V};\n      H.H.R=function(N,W,R,V,n,A){var l=H.H.e,M=H.H.Z,I=0;while(I<R){var e=N[M(V,n)&W];n+=e&15;var b=e>>>4;\n        if(b<=15){A[I]=b;I++}else{var Z=0,m=0;if(b==16){m=3+l(V,n,2);n+=2;Z=A[I-1]}else if(b==17){m=3+l(V,n,3);\n          n+=3}else if(b==18){m=11+l(V,n,7);n+=7}var J=I+m;while(I<J){A[I]=Z;I++}}}return n};H.H.V=function(N,W,R,V){var n=0,A=0,l=V.length>>>1;\n        while(A<R){var M=N[A+W];V[A<<1]=0;V[(A<<1)+1]=M;if(M>n)n=M;A++}while(A<l){V[A<<1]=0;V[(A<<1)+1]=0;A++}return n};\n      H.H.n=function(N,W){var R=H.H.m,V=N.length,n,A,l,M,I,e=R.j;for(var M=0;M<=W;M++)e[M]=0;for(M=1;M<V;M+=2)e[N[M]]++;\n        var b=R.K;n=0;e[0]=0;for(A=1;A<=W;A++){n=n+e[A-1]<<1;b[A]=n}for(l=0;l<V;l+=2){I=N[l+1];if(I!=0){N[l]=b[I];\n          b[I]++}}};H.H.A=function(N,W,R){var V=N.length,n=H.H.m,A=n.r;for(var l=0;l<V;l+=2)if(N[l+1]!=0){var M=l>>1,I=N[l+1],e=M<<4|I,b=W-I,Z=N[l]<<b,m=Z+(1<<b);\n        while(Z!=m){var J=A[Z]>>>15-W;R[J]=e;Z++}}};H.H.l=function(N,W){var R=H.H.m.r,V=15-W;for(var n=0;n<N.length;\n                                                                                                 n+=2){var A=N[n]<<W-N[n+1];N[n]=R[A]>>>V}};H.H.M=function(N,W,R){R=R<<(W&7);var V=W>>>3;N[V]|=R;N[V+1]|=R>>>8};\n      H.H.I=function(N,W,R){R=R<<(W&7);var V=W>>>3;N[V]|=R;N[V+1]|=R>>>8;N[V+2]|=R>>>16};H.H.e=function(N,W,R){return(N[W>>>3]|N[(W>>>3)+1]<<8)>>>(W&7)&(1<<R)-1};\n      H.H.b=function(N,W,R){return(N[W>>>3]|N[(W>>>3)+1]<<8|N[(W>>>3)+2]<<16)>>>(W&7)&(1<<R)-1};H.H.Z=function(N,W){return(N[W>>>3]|N[(W>>>3)+1]<<8|N[(W>>>3)+2]<<16)>>>(W&7)};\n      H.H.i=function(N,W){return(N[W>>>3]|N[(W>>>3)+1]<<8|N[(W>>>3)+2]<<16|N[(W>>>3)+3]<<24)>>>(W&7)};H.H.m=function(){var N=Uint16Array,W=Uint32Array;\n        return{K:new N(16),j:new N(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new N(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new W(32),J:new N(512),_:[],h:new N(32),$:[],w:new N(32768),C:[],v:[],d:new N(32768),D:[],u:new N(512),Q:[],r:new N(1<<15),s:new W(286),Y:new W(30),a:new W(19),t:new W(15e3),k:new N(1<<16),g:new N(1<<15)}}();\n      (function(){var N=H.H.m,W=1<<15;for(var R=0;R<W;R++){var V=R;V=(V&2863311530)>>>1|(V&1431655765)<<1;\n        V=(V&3435973836)>>>2|(V&858993459)<<2;V=(V&4042322160)>>>4|(V&252645135)<<4;V=(V&4278255360)>>>8|(V&16711935)<<8;\n        N.r[R]=(V>>>16|V<<16)>>>17}function n(A,l,M){while(l--!=0)A.push(0,M)}for(var R=0;R<32;R++){N.q[R]=N.S[R]<<3|N.T[R];\n        N.c[R]=N.p[R]<<4|N.z[R]}n(N._,144,8);n(N._,255-143,9);n(N._,279-255,7);n(N._,287-279,8);H.H.n(N._,9);\n        H.H.A(N._,9,N.J);H.H.l(N._,9);n(N.$,32,5);H.H.n(N.$,5);H.H.A(N.$,5,N.h);H.H.l(N.$,5);n(N.Q,19,0);n(N.C,286,0);\n        n(N.D,30,0);n(N.v,320,0)}());return H.H.N}()\n    \n    const UZIP = {}\n    UZIP["parse"] = `).concat(W3.parse, `\n    UZIP._readLocal = `).concat(W3._readLocal, `\n    UZIP.inflateRaw = `).concat(W3.inflateRaw, `\n    UZIP.inflate = `).concat(W3.inflate, `\n    UZIP.deflate = `).concat(W3.deflate, `\n    UZIP.deflateRaw = `).concat(W3.deflateRaw, `\n    UZIP.encode = `).concat(W3.encode, `\n    UZIP._noNeed = `).concat(W3._noNeed, `\n    UZIP._writeHeader = `).concat(W3._writeHeader, `\n    UZIP.crc = parse(`).concat(tn(W3.crc), `)\n    UZIP.crc.table = ( function() {\n      var tab = new Uint32Array(256);\n      for (var n=0; n<256; n++) {\n        var c = n;\n        for (var k=0; k<8; k++) {\n          if (c & 1)  c = 0xedb88320 ^ (c >>> 1);\n          else        c = c >>> 1;\n        }\n        tab[n] = c;  }\n      return tab;  })()\n    \n    UZIP.adler = `).concat(W3.adler, `\n    UZIP.bin = parse(`).concat(tn(W3.bin), `)\n    UZIP.F = {}\n    UZIP.F.deflateRaw = `).concat(W3.F.deflateRaw, `\n    UZIP.F._bestMatch = `).concat(W3.F._bestMatch, `\n    UZIP.F._howLong = `).concat(W3.F._howLong, `\n    UZIP.F._hash = `).concat(W3.F._hash, `\n    UZIP.saved = `).concat(W3.saved, `\n    UZIP.F._writeBlock = `).concat(W3.F._writeBlock, `\n    UZIP.F._copyExact = `).concat(W3.F._copyExact, `\n    UZIP.F.getTrees = `).concat(W3.F.getTrees, `\n    UZIP.F.getSecond = `).concat(W3.F.getSecond, `\n    UZIP.F.nonZero = `).concat(W3.F.nonZero, `\n    UZIP.F.contSize = `).concat(W3.F.contSize, `\n    UZIP.F._codeTiny = `).concat(W3.F._codeTiny, ` \n    UZIP.F._lenCodes = `).concat(W3.F._lenCodes, ` \n    UZIP.F._hufTree = `).concat(W3.F._hufTree, ` \n    UZIP.F.setDepth = `).concat(W3.F.setDepth, ` \n    UZIP.F.restrictDepth = `).concat(W3.F.restrictDepth, `\n    UZIP.F._goodIndex = `).concat(W3.F._goodIndex, ` \n    UZIP.F._writeLit = `).concat(W3.F._writeLit, ` \n    UZIP.F.inflate = `).concat(W3.F.inflate, ` \n    UZIP.F._check = `).concat(W3.F._check, ` \n    UZIP.F._decodeTiny = `).concat(W3.F._decodeTiny, ` \n    UZIP.F._copyOut = `).concat(W3.F._copyOut, ` \n    UZIP.F.makeCodes = `).concat(W3.F.makeCodes, ` \n    UZIP.F.codes2map = `).concat(W3.F.codes2map, ` \n    UZIP.F.revCodes = `).concat(W3.F.revCodes, ` \n\n    // used only in deflate\n    UZIP.F._putsE = `).concat(W3.F._putsE, `\n    UZIP.F._putsF = `).concat(W3.F._putsF, `\n  \n    UZIP.F._bitsE = `).concat(W3.F._bitsE, `\n    UZIP.F._bitsF = `).concat(W3.F._bitsF, `\n\n    UZIP.F._get17 = `).concat(W3.F._get17, `\n    UZIP.F._get25 = `).concat(W3.F._get25, `\n    UZIP.F.U = function(){\n      var u16=Uint16Array, u32=Uint32Array;\n      return {\n        next_code : new u16(16),\n        bl_count  : new u16(16),\n        ordr : [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ],\n        of0  : [3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],\n        exb  : [0,0,0,0,0,0,0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,  4,  5,  5,  5,  5,  0,  0,  0,  0],\n        ldef : new u16(32),\n        df0  : [1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577, 65535, 65535],\n        dxb  : [0,0,0,0,1,1,2, 2, 3, 3, 4, 4, 5, 5,  6,  6,  7,  7,  8,  8,   9,   9,  10,  10,  11,  11,  12,   12,   13,   13,     0,     0],\n        ddef : new u32(32),\n        flmap: new u16(  512),  fltree: [],\n        fdmap: new u16(   32),  fdtree: [],\n        lmap : new u16(32768),  ltree : [],  ttree:[],\n        dmap : new u16(32768),  dtree : [],\n        imap : new u16(  512),  itree : [],\n        //rev9 : new u16(  512)\n        rev15: new u16(1<<15),\n        lhst : new u32(286), dhst : new u32( 30), ihst : new u32(19),\n        lits : new u32(15000),\n        strt : new u16(1<<16),\n        prev : new u16(1<<15)\n      };\n    } ();\n\n    (function(){\n      var U = UZIP.F.U;\n      var len = 1<<15;\n      for(var i=0; i<len; i++) {\n        var x = i;\n        x = (((x & 0xaaaaaaaa) >>> 1) | ((x & 0x55555555) << 1));\n        x = (((x & 0xcccccccc) >>> 2) | ((x & 0x33333333) << 2));\n        x = (((x & 0xf0f0f0f0) >>> 4) | ((x & 0x0f0f0f0f) << 4));\n        x = (((x & 0xff00ff00) >>> 8) | ((x & 0x00ff00ff) << 8));\n        U.rev15[i] = (((x >>> 16) | (x << 16)))>>>17;\n      }\n  \n      function pushV(tgt, n, sv) {  while(n--!=0) tgt.push(0,sv);  }\n  \n      for(var i=0; i<32; i++) {  U.ldef[i]=(U.of0[i]<<3)|U.exb[i];  U.ddef[i]=(U.df0[i]<<4)|U.dxb[i];  }\n  \n      pushV(U.fltree, 144, 8);  pushV(U.fltree, 255-143, 9);  pushV(U.fltree, 279-255, 7);  pushV(U.fltree,287-279,8);\n      /*\n        var i = 0;\n        for(; i<=143; i++) U.fltree.push(0,8);\n        for(; i<=255; i++) U.fltree.push(0,9);\n        for(; i<=279; i++) U.fltree.push(0,7);\n        for(; i<=287; i++) U.fltree.push(0,8);\n        */\n      UZIP.F.makeCodes(U.fltree, 9);\n      UZIP.F.codes2map(U.fltree, 9, U.flmap);\n      UZIP.F.revCodes (U.fltree, 9)\n  \n      pushV(U.fdtree,32,5);\n      //for(i=0;i<32; i++) U.fdtree.push(0,5);\n      UZIP.F.makeCodes(U.fdtree, 5);\n      UZIP.F.codes2map(U.fdtree, 5, U.fdmap);\n      UZIP.F.revCodes (U.fdtree, 5)\n  \n      pushV(U.itree,19,0);  pushV(U.ltree,286,0);  pushV(U.dtree,30,0);  pushV(U.ttree,320,0);\n      /*\n        for(var i=0; i< 19; i++) U.itree.push(0,0);\n        for(var i=0; i<286; i++) U.ltree.push(0,0);\n        for(var i=0; i< 30; i++) U.dtree.push(0,0);\n        for(var i=0; i<320; i++) U.ttree.push(0,0);\n        */\n    })()\n    `));
}
function Tn() {
    return Pn(`\n    let scriptImported = false\n    self.addEventListener('message', async (e) => {\n      const { file, id, imageCompressionLibUrl, options } = e.data\n      options.onProgress = (progress) => self.postMessage({ progress, id })\n      try {\n        if (!scriptImported) {\n          // console.log('[worker] importScripts', imageCompressionLibUrl)\n          self.importScripts(imageCompressionLibUrl)\n          scriptImported = true\n        }\n        // console.log('[worker] self', self)\n        const compressedFile = await imageCompression(file, options)\n        self.postMessage({ file: compressedFile, id })\n      } catch (e) {\n        // console.error('[worker] error', e)\n        self.postMessage({ error: e.message + '\\n' + e.stack, id })\n      }\n    })\n  `);
}
function zn(r, a) {
    return new Promise(function(s25, t) {
        return new Promise(function(n, e) {
            var i7 = Wn++;
            return dn || (dn = Rn()), nn || (nn = Tn()), nn.addEventListener("message", function o(l38) {
                if (l38.data.id === i7) {
                    if (l38.data.progress !== void 0) return void a.onProgress(l38.data.progress);
                    nn.removeEventListener("message", o), l38.data.error && t(new Error(l38.data.error)), s25(l38.data.file);
                }
            }), nn.addEventListener("error", t), nn.postMessage({
                file: r,
                id: i7,
                imageCompressionLibUrl: dn,
                options: An(An({
                }, a), {
                }, {
                    onProgress: void 0
                })
            }), n();
        });
    });
}
function Z(r, a) {
    return new Promise(function(s25, t) {
        var n, e, i7, o, l38;
        if (e = 0, a.maxSizeMB = a.maxSizeMB || Number.POSITIVE_INFINITY, o = typeof a.useWebWorker != "boolean" || a.useWebWorker, delete a.useWebWorker, i7 = a.onProgress, a.onProgress = function(u) {
            e = u, typeof i7 == "function" && i7(e);
        }, !(r instanceof Blob || r instanceof Mn)) return t(new Error("The file given is not an instance of Blob or File"));
        if (!/^image/.test(r.type)) return t(new Error("The file given is not an image"));
        if (l38 = typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope, !o || typeof Worker != "function" || l38) return un(r, a).then((function(u) {
            try {
                return n = u, h20.call(this);
            } catch (d) {
                return t(d);
            }
        }).bind(this), t);
        var c = (function() {
            try {
                return h20.call(this);
            } catch (u) {
                return t(u);
            }
        }).bind(this), A = function(d) {
            try {
                return un(r, a).then(function(m13) {
                    try {
                        return n = m13, c();
                    } catch (g12) {
                        return t(g12);
                    }
                }, t);
            } catch (m13) {
                return t(m13);
            }
        };
        try {
            return zn(r, a).then(function(u) {
                try {
                    return n = u, c();
                } catch (d) {
                    return A();
                }
            }, A);
        } catch (u) {
            A();
        }
        function h20() {
            try {
                n.name = r.name, n.lastModified = r.lastModified;
            } catch (u) {
            }
            return s25(n);
        }
    });
}
Z.getDataUrlFromFile = gn, Z.getFilefromDataUrl = ln, Z.loadImage = wn, Z.drawImageInCanvas = pn, Z.drawFileInCanvas = fn, Z.canvasToFile = cn, Z.getExifOrientation = bn, Z.handleMaxWidthOrHeight = Un, Z.followExifOrientation = _n, Z.cleanupCanvasMemory = $3, Z.isAutoOrientationInBrowser = K4, Z.version = "1.0.14";
var Zn = Z;
class ImageHelper {
    async resizeBase64Image(base64Image) {
        const options = {
            maxSizeMB: 0.1,
            maxWidthOrHeight: 1392,
            useWebWorker: true,
            maxIteration: 10
        };
        const fileImage = await Zn.getFilefromDataUrl(base64Image);
        const compressImage = await Zn(fileImage, options);
        const base64 = await Zn.getDataUrlFromFile(compressImage);
        return base64;
    }
}
const SocialMediaModal = ({ children , show  })=>{
    pe1(()=>{
        if (show) document.querySelector('#social-modal').classList.add('show-modal');
        else document.querySelector('#social-modal').classList.remove('show-modal');
    }, [
        show
    ]);
    return export_default1.createElement("div", {
        className: 'modal',
        id: "social-modal",
        onClick: (event)=>event.stopPropagation()
    }, children);
};
const logout = async ()=>fetch('/logout', {
        method: 'get'
    }).then(()=>window.location.href = '/'
    )
;
const SocialMediaForm = ({ userInfo , setShowModal , setUserInfo  })=>{
    const form = Fe1();
    const { social_media  } = userInfo.user;
    const [links, setLinks] = ke([
        ...Array(social_media.length ? social_media.length : 1).keys()
    ]);
    const addLink = ()=>setLinks([
            ...links,
            Math.max(...links) + 1
        ])
    ;
    const removeLink = (id)=>setLinks(links.filter((link)=>link !== id
        ))
    ;
    const closeModal = (ask = true)=>{
        setShowModal(false);
        document.body.classList.remove('show-modal-body');
    };
    const send = async (event)=>{
        event.preventDefault();
        event.stopPropagation();
        event.target.lastElementChild.disabled = true;
        event.target.lastElementChild.firstChild.data = 'Sending...';
        const fixURL = (url)=>{
            if (!url.includes('http')) {
                return `http://${url}`;
            } else return url;
        };
        const newSocialMedia = [
            ...form.current.querySelectorAll('[data-social]')
        ].map((link)=>({
                name: link.querySelector(`#link-name-${link.getAttribute('data-social')}`).value,
                url: fixURL(link.querySelector(`#link-url-${link.getAttribute('data-social')}`).value)
            })
        );
        try {
            await updateUser({
                ...userInfo.user,
                social_media: newSocialMedia
            });
            setUserInfo({
                ...userInfo,
                user: {
                    ...userInfo.user,
                    social_media: newSocialMedia
                }
            });
            event.target.lastElementChild.disabled = false;
            event.target.lastElementChild.firstChild.data = 'Submit';
            closeModal(false);
        } catch (error) {
            console.error(error);
        }
    };
    return export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("span", {
        className: "modal-label"
    }, "Edit social media"), export_default1.createElement("button", {
        className: "close-modal btn-floating red btn-small",
        onClick: closeModal
    }, export_default1.createElement("i", {
        className: "material-icons right"
    }, "clear")), export_default1.createElement("form", {
        className: "col s12",
        onSubmit: send,
        ref: form
    }, export_default1.createElement("div", {
        className: "row"
    }, links.map((link)=>{
        return export_default1.createElement("div", {
            key: link,
            "data-social": link
        }, export_default1.createElement("div", {
            className: "input-field col s6"
        }, export_default1.createElement("input", {
            id: `link-name-${link}`,
            type: "text",
            defaultValue: social_media[link]?.name ?? '',
            required: true
        }), export_default1.createElement("label", {
            htmlFor: `link-name-${link}`,
            className: "active",
            onClick: ({ target  })=>target.previousElementSibling.focus()
        }, "Name")), export_default1.createElement("div", {
            className: "input-field col s6"
        }, export_default1.createElement("input", {
            id: `link-url-${link}`,
            type: "text",
            defaultValue: social_media[link]?.url ?? '',
            required: true
        }), export_default1.createElement("label", {
            htmlFor: `link-url-${link}`,
            className: "active",
            onClick: ({ target  })=>target.previousElementSibling.focus()
        }, "URL")), export_default1.createElement("a", {
            onClick: ()=>removeLink(link)
            ,
            className: "button-remove-modal waves-effect waves-light red btn-small"
        }, export_default1.createElement("i", {
            className: "material-icons right"
        }, "delete_forever")));
    }), export_default1.createElement("a", {
        onClick: addLink,
        className: "button-add-modal waves-effect waves-light btn-small"
    }, "Add social link ", export_default1.createElement("i", {
        className: "material-icons right"
    }, "add"))), export_default1.createElement("button", {
        id: "send-form",
        className: "btn waves-effect waves-light blue accent-4",
        type: "submit",
        name: "action"
    }, "Submit", export_default1.createElement("i", {
        className: "material-icons right"
    }, "send"))));
};
const Header = ({ userInfo , setUserInfo  })=>{
    const [showModal, setShowModal] = ke(false);
    const editInfo = {
        isEditing: false,
        currentElement: undefined
    };
    const social_networks = [
        'youtube',
        'twitter',
        'instagram',
        'youtube'
    ];
    const selectImage = ({ target  })=>{
        if (userInfo.isGuest) return;
        target.previousElementSibling.click();
    };
    const changeImage = ({ target  })=>{
        const file = target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async (readerEvent)=>{
            const imageHelper = new ImageHelper();
            const content = readerEvent.target.result;
            const compressedContent = await imageHelper.resizeBase64Image(content);
            target.nextElementSibling.src = compressedContent;
            try {
                const updatedUser = {
                    ...userInfo.user,
                    [target.id]: compressedContent
                };
                await updateUser(updatedUser);
                setUserInfo({
                    ...userInfo,
                    user: updatedUser
                });
            } catch (error) {
                console.error(error);
            }
        };
    };
    const removeOptionalImage = async ()=>{
        if (confirm('Remove optional image?')) {
            try {
                const updatedUser = {
                    ...userInfo.user,
                    optional_image: ''
                };
                await updateUser(updatedUser);
                setUserInfo({
                    ...userInfo,
                    user: updatedUser
                });
            } catch (error) {
                console.error(error);
            }
        }
    };
    const editField = (event)=>{
        if (userInfo.isGuest || editInfo.isEditing) return;
        editInfo.currentElement?.classList.remove('updating-field');
        event.target.setAttribute('contenteditable', true);
        event.target.focus();
        if (editInfo.currentElement?.innerText !== userInfo.user[editInfo.currentElement?.id]) {
            document.body.click();
        }
        event.target.classList.add('updating-field');
        editInfo.currentElement = event.target;
        const oldValue = userInfo.user[event.target.id];
        const fireEvent = async ()=>{
            event.target.classList.remove('updated-field');
            if (event.target.innerText !== oldValue) {
                try {
                    const updatedUser = {
                        ...userInfo.user,
                        [event.target.id]: event.target.innerText
                    };
                    await updateUser(updatedUser);
                    setUserInfo({
                        ...userInfo,
                        user: updatedUser
                    });
                    event.target.classList.add('updated-field');
                    setTimeout(()=>{
                        event.target.classList.remove('updated-field');
                    }, 500);
                } catch (error) {
                    console.error(error);
                }
            }
            document.body.removeEventListener('click', fireEvent, false);
            event.target.classList.remove('updating-field');
            event.target.setAttribute('contenteditable', false);
            editInfo.isEditing = false;
        };
        if (!editInfo.isEditing) {
            document.body.addEventListener('click', fireEvent, false);
            editInfo.isEditing = true;
        }
        event.stopPropagation();
    };
    const copyShare = ()=>{
        const copyInput = document.getElementById("copy-share");
        copyInput.select();
        copyInput.setSelectionRange(0, 99999);
        document.execCommand("copy");
    };
    return export_default1.createElement(export_default1.Fragment, null, !userInfo.isGuest ? export_default1.createElement("div", {
        className: "profile-logout logout waves-effect waves-light red btn-small",
        onClick: logout
    }, export_default1.createElement("i", {
        className: "material-icons left"
    }, "exit_to_app")) : export_default1.createElement("div", {
        className: "profile-logout login waves-effect waves-light blue btn-small",
        onClick: ()=>window.location.href = '/'
    }, export_default1.createElement("i", {
        className: "material-icons left"
    }, "login")), export_default1.createElement("div", {
        className: "profile-container"
    }, export_default1.createElement("div", {
        className: "profile-header container"
    }, export_default1.createElement("input", {
        id: "image",
        type: "file",
        name: "name",
        style: {
            display: 'none'
        },
        accept: "image/png, image/jpeg",
        onChange: changeImage
    }), export_default1.createElement("img", {
        src: userInfo.user.image !== '' ? userInfo.user.image : `${'https://researcher.zone/'}img/default.png`,
        className: `profile-header__image ${userInfo.isGuest ? 'isguest' : ''}`,
        onClick: selectImage
    }), export_default1.createElement("div", {
        className: 'profile-header__textgroup'
    }, export_default1.createElement("div", {
        className: 'profile-header__name-group'
    }, export_default1.createElement("span", {
        id: "name",
        className: `h3 profile-header__name blue-text lighten-2  ${!userInfo.isGuest && userInfo.user.name === '' ? 'empty' : ''} ${userInfo.isGuest ? 'isguest' : ''}`,
        onClick: editField
    }, userInfo.user.name), export_default1.createElement("span", {
        id: "surname",
        className: `h3 profile-header__name blue-text lighten-2  ${!userInfo.isGuest && userInfo.user.surname === '' ? 'empty' : ''} ${userInfo.isGuest ? 'isguest' : ''}`,
        onClick: editField
    }, userInfo.user.surname)), export_default1.createElement("div", {
        className: "profile-header__slotsgroup"
    }, export_default1.createElement("div", {
        className: 'profile-header__optional-image'
    }, userInfo.isGuest && userInfo.user.optional_image === '' ? undefined : export_default1.createElement(export_default1.Fragment, null, export_default1.createElement("input", {
        id: "optional_image",
        type: "file",
        name: "name",
        style: {
            display: 'none'
        },
        accept: "image/png, image/jpeg",
        onChange: changeImage
    }), export_default1.createElement("img", {
        id: "optional_image",
        src: userInfo.user.optional_image && userInfo.user.optional_image !== '' ? userInfo.user.optional_image : `${'https://researcher.zone/'}img/default.png`,
        className: `profile-header__image2 ${userInfo.isGuest ? 'isguest' : ''}`,
        onClick: selectImage
    }), " "), !userInfo.isGuest && userInfo.user.optional_image && userInfo.user.optional_image !== '' ? export_default1.createElement("i", {
        onClick: removeOptionalImage,
        className: "material-icons right"
    }, "close") : undefined), export_default1.createElement("div", {
        className: 'profile-header__slots'
    }, export_default1.createElement("span", {
        id: "profile_slot_1",
        className: `profile-header__slot ${!userInfo.isGuest && userInfo.user.profile_slot_1 === '' ? 'empty' : ''} ${userInfo.isGuest ? 'isguest' : ''}`,
        onClick: editField
    }, userInfo.user.profile_slot_1), export_default1.createElement("span", {
        id: "profile_slot_2",
        className: `profile-header__slot ${!userInfo.isGuest && userInfo.user.profile_slot_2 === '' ? 'empty' : ''} ${userInfo.isGuest ? 'isguest' : ''}`,
        onClick: editField
    }, userInfo.user.profile_slot_2)))))), export_default1.createElement("div", {
        className: "profile__social container"
    }, export_default1.createElement("div", {
        className: "profile__social-links"
    }, userInfo.user.social_media.map(({ name , url  }, index)=>{
        const social_name = name.replace(/\s/g, '').replace(/[^\w\s]/gi, '').toLowerCase();
        let image;
        for (const network of social_networks){
            if (social_name === network || url.includes(network)) {
                image = network;
                break;
            }
        }
        return export_default1.createElement("a", {
            className: `profile__social-link ${image ? '' : 'no-image'}`,
            key: index,
            href: url,
            title: name
        }, image ? export_default1.createElement("img", {
            src: `${'https://researcher.zone/'}img/${image}.png`,
            alt: name
        }) : export_default1.createElement("i", {
            className: "material-icons right"
        }, "link"));
    }), !userInfo.isGuest ? export_default1.createElement("div", {
        className: "btn waves-effect waves-light btn-floating blue btn-small",
        onClick: ()=>{
            document.body.classList.add('show-modal-body');
            setShowModal(true);
        }
    }, export_default1.createElement("i", {
        className: "material-icons right"
    }, "add")) : undefined), export_default1.createElement("div", {
        className: "profile__share"
    }, export_default1.createElement("a", {
        className: "btn-floating btn-small waves-effect waves-light red",
        onClick: copyShare
    }, export_default1.createElement("i", {
        className: "material-icons"
    }, "content_paste")), export_default1.createElement("span", null, "Share: ", export_default1.createElement("input", {
        readOnly: true,
        id: "copy-share",
        type: "text",
        className: "profile__share-link",
        value: `${'https://researcher.zone/'}user/${userInfo.user._id}`
    }), " "))), export_default1.createElement(SocialMediaModal, {
        show: showModal
    }, export_default1.createElement(SocialMediaForm, {
        userInfo: userInfo,
        setUserInfo: setUserInfo,
        setShowModal: setShowModal
    })));
};
const FreeDocumentRender = ({ doc  })=>{
    pe1(()=>{
        const node = document.querySelector(`[data-article-id=id-${doc._id}]`);
        node.innerHTML = doc.html;
    });
    return export_default1.createElement("div", {
        "data-article-id": `id-${doc._id}`,
        "data-article-order": doc.order
    }, doc.html);
};
const AuthorCitator = ({ authors  })=>{
    const formatNames = ()=>{
        const formatted = [];
        for (const { name , surname  } of authors){
            const initials = name.split(' ').reduce((acc, curr)=>acc.substring(0, 1) + curr.substring(0, 1)
            , "").toUpperCase();
            formatted.push(`${surname} ${initials}`);
        }
        return formatted;
    };
    return export_default1.createElement(export_default1.Fragment, null, authors.length && formatNames().map((name, index)=>{
        return export_default1.createElement(export_default1.Fragment, {
            key: index
        }, index < 6 ? export_default1.createElement("span", {
            className: "documents__aut-name"
        }, name) : undefined, index < 5 && index !== authors.length - 1 ? export_default1.createElement("span", null, ", ") : undefined, index === 6 ? export_default1.createElement("span", null, " et al.") : undefined);
    }));
};
const JournalArticleRender = ({ doc  })=>{
    const __abstract = Fe1();
    const collapse = ({ target  })=>target.classList.toggle('show')
    ;
    pe1(()=>{
        if (__abstract.current?.clientHeight > 50) __abstract.current.classList.add('collapse');
    });
    return export_default1.createElement("div", {
        "data-article-id": `id-${doc._id}`,
        "data-article-order": doc.order,
        className: 'profile-articles__journalArticle'
    }, export_default1.createElement("div", {
        className: "documents__title"
    }, doc.title), export_default1.createElement("div", {
        className: "documents__subtitle"
    }, doc.journal), export_default1.createElement("div", {
        className: "documents__authors"
    }, export_default1.createElement(AuthorCitator, {
        authors: doc.authors
    })), doc?.abstract ? export_default1.createElement("div", {
        ref: __abstract,
        className: `documents__abstract`,
        onClick: collapse
    }, export_default1.createElement("div", {
        className: "documents__subtitle"
    }, "Abstract"), doc.abstract) : undefined);
};
const BookRender = ({ doc  })=>{
    const __abstract = Fe1();
    const collapse = ({ target  })=>target.classList.toggle('show')
    ;
    pe1(()=>{
        if (__abstract.current?.clientHeight > 50) __abstract.current.classList.add('collapse');
    });
    return export_default1.createElement("div", {
        "data-article-id": `id-${doc._id}`,
        "data-article-order": doc.order,
        className: 'profile-articles__journalArticle'
    }, export_default1.createElement("div", {
        className: "documents__title"
    }, doc.title), export_default1.createElement("div", {
        className: "documents__authors"
    }, export_default1.createElement(AuthorCitator, {
        authors: doc.authors
    })), doc?.abstract ? export_default1.createElement("div", {
        ref: __abstract,
        className: `documents__abstract`,
        onClick: collapse
    }, export_default1.createElement("div", {
        className: "documents__subtitle"
    }, "Abstract"), doc.abstract) : undefined);
};
const BookChapterRender = ({ doc  })=>{
    const __abstract = Fe1();
    const collapse = ({ target  })=>target.classList.toggle('show')
    ;
    pe1(()=>{
        if (__abstract.current?.clientHeight > 50) __abstract.current.classList.add('collapse');
    });
    return export_default1.createElement("div", {
        "data-article-id": `id-${doc._id}`,
        "data-article-order": doc.order,
        className: 'profile-articles__journalArticle'
    }, export_default1.createElement("div", {
        className: "documents__title"
    }, doc.title, doc?.subtitle ? export_default1.createElement("span", {
        className: "documents__title"
    }, ": ", doc.subtitle) : undefined), export_default1.createElement("div", {
        className: "documents__subtitle"
    }, doc.chapter_title), export_default1.createElement("div", {
        className: "documents__authors"
    }, export_default1.createElement(AuthorCitator, {
        authors: doc.authors
    })), doc?.abstract ? export_default1.createElement("div", {
        ref: __abstract,
        className: `documents__abstract`,
        onClick: collapse
    }, export_default1.createElement("div", {
        className: "documents__subtitle"
    }, "Abstract"), doc.abstract) : undefined);
};
const ConferenceProceedingRender = ({ doc  })=>{
    const __abstract = Fe1();
    const collapse = ({ target  })=>target.classList.toggle('show')
    ;
    pe1(()=>{
        if (__abstract.current?.clientHeight > 50) __abstract.current.classList.add('collapse');
    });
    return export_default1.createElement("div", {
        "data-article-id": `id-${doc._id}`,
        "data-article-order": doc.order,
        className: 'profile-articles__journalArticle'
    }, export_default1.createElement("div", {
        className: "documents__title"
    }, doc.title), export_default1.createElement("div", {
        className: "documents__subtitle"
    }, "Location: ", doc.conference_location), export_default1.createElement("div", {
        className: "documents__authors"
    }, export_default1.createElement(AuthorCitator, {
        authors: doc.authors
    })), doc?.abstract ? export_default1.createElement("div", {
        ref: __abstract,
        className: `documents__abstract`,
        onClick: collapse
    }, export_default1.createElement("div", {
        className: "documents__subtitle"
    }, "Abstract"), doc.abstract) : undefined);
};
const ThesisRender = ({ doc  })=>{
    const __abstract = Fe1();
    const collapse = ({ target  })=>target.classList.toggle('show')
    ;
    pe1(()=>{
        if (__abstract.current?.clientHeight > 50) __abstract.current.classList.add('collapse');
    });
    return export_default1.createElement("div", {
        "data-article-id": `id-${doc._id}`,
        "data-article-order": doc.order,
        className: 'profile-articles__journalArticle'
    }, export_default1.createElement("div", {
        className: "documents__title"
    }, doc.title), export_default1.createElement("div", {
        className: "documents__subtitle"
    }, doc.subtitle), export_default1.createElement("div", {
        className: "documents__authors"
    }, doc.author.name, " ", doc.author.surname), doc?.abstract ? export_default1.createElement("div", {
        ref: __abstract,
        className: `documents__abstract`,
        onClick: collapse
    }, export_default1.createElement("div", {
        className: "documents__subtitle"
    }, "Abstract"), doc.abstract) : undefined);
};
const DocumentRender = ({ doc  })=>{
    const switchDocument = ()=>{
        switch(doc.type){
            case 'freedocument':
                return export_default1.createElement(FreeDocumentRender, {
                    doc: doc
                });
            case 'journalarticle':
                return export_default1.createElement(JournalArticleRender, {
                    doc: doc
                });
            case 'book':
                return export_default1.createElement(BookRender, {
                    doc: doc
                });
            case 'bookchapter':
                return export_default1.createElement(BookChapterRender, {
                    doc: doc
                });
            case 'conferenceproceeding':
                return export_default1.createElement(ConferenceProceedingRender, {
                    doc: doc
                });
            case 'thesis':
                return export_default1.createElement(ThesisRender, {
                    doc: doc
                });
        }
    };
    const switchBadge = ()=>{
        switch(doc.type){
            case 'freedocument':
                return false;
            case 'journalarticle':
                return 'Journal Article';
            case 'book':
                return 'Book';
            case 'bookchapter':
                return 'Book chapter';
            case 'conferenceproceeding':
                return 'Conference proceeding';
            case 'thesis':
                return 'Thesis';
        }
    };
    return export_default1.createElement("div", {
        className: 'profile-articles__document'
    }, export_default1.createElement("div", {
        className: "profile-article__badge"
    }, switchBadge() ? switchBadge() : undefined), switchDocument());
};
const NewCategoryForm = ({ current , userInfo , setUserInfo , setShowModal , setActiveForm  })=>{
    const form = Fe1(undefined);
    pe1(()=>{
        document.body.classList.add('show-modal-body');
        document.body.addEventListener('click', closeModal, false);
        if (current) form.current.getElementsByTagName('input')[0].value = current.category_name;
    }, []);
    const closeModal = ()=>{
        setShowModal(false);
        document.body.classList.remove('show-modal-body');
        setActiveForm(undefined);
        document.body.removeEventListener('click', closeModal, false);
    };
    const send = async (event)=>{
        event.preventDefault();
        event.stopPropagation();
        event.target.lastElementChild.disabled = true;
        event.target.lastElementChild.firstChild.data = 'Sending...';
        const category_name = [
            ...event.target
        ].find((input)=>input.id === 'category_name'
        ).value;
        try {
            let updatedUser;
            if (!current) {
                updatedUser = {
                    ...userInfo.user,
                    categories: [
                        ...userInfo.user.categories,
                        {
                            category_name: category_name,
                            order: document.querySelectorAll('.profile-articles__category').length ? Math.max(...userInfo.user.categories.map(({ id  })=>id
                            )) + 1 : 1,
                            id: document.querySelectorAll('.profile-articles__category').length ? Math.max(...userInfo.user.categories.map(({ id  })=>id
                            )) + 1 : 1
                        }
                    ]
                };
            } else {
                updatedUser = {
                    ...userInfo.user,
                    categories: [
                        ...userInfo.user.categories.filter(({ id  })=>id !== current.id
                        ),
                        {
                            id: current.id,
                            order: current.order,
                            category_name
                        }
                    ]
                };
            }
            await updateUser(updatedUser);
            setUserInfo({
                user: updatedUser,
                documents: userInfo.documents
            });
            event.target.lastElementChild.disabled = false;
            event.target.lastElementChild.firstChild.data = 'Submit';
            closeModal();
        } catch (error) {
            console.error(error);
        }
    };
    return export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("span", {
        className: "modal-label"
    }, !current ? 'Add new ' : 'Edit ', "category"), export_default1.createElement("button", {
        className: "close-modal btn-floating red btn-small",
        onClick: closeModal
    }, export_default1.createElement("i", {
        className: "material-icons right"
    }, "clear")), export_default1.createElement("form", {
        className: "col s12",
        onSubmit: send,
        ref: form
    }, export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "category_name",
        type: "text",
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "category-name",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Category name"))), export_default1.createElement("button", {
        id: "send-form",
        className: "btn waves-effect waves-light blue accent-4",
        type: "submit",
        name: "action"
    }, "Submit", export_default1.createElement("i", {
        className: "material-icons right"
    }, "send"))));
};
const deleteDocument = async (document_id, user1)=>fetch('/deletedocument', {
        method: 'delete',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            document_id,
            email: user1.email
        })
    })
;
const deleteCategory = (categoryId, user1)=>fetch('/deletecategory', {
        method: 'delete',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            categoryId,
            user: user1,
            email: user1.email
        })
    })
;
const updateDocument = async (document)=>fetch('/updatedocument', {
        method: 'put',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            document,
            email: document.user
        })
    })
;
const DocumentsModal = ({ activeForm , show  })=>{
    pe1(()=>{
        if (show) document.querySelector('#documents-modal').classList.add('show-modal');
        else document.querySelector('#documents-modal').classList.remove('show-modal');
    }, [
        show
    ]);
    return export_default1.createElement("div", {
        className: 'modal',
        id: "documents-modal",
        onClick: (event)=>event.stopPropagation()
    }, activeForm);
};
const CitationModal = ({ activeCitation , show  })=>{
    pe1(()=>{
        if (show) document.querySelector('#citation-modal').classList.add('show-modal');
        else document.querySelector('#citation-modal').classList.remove('show-modal');
    }, [
        show
    ]);
    return export_default1.createElement("div", {
        className: 'modal',
        id: "citation-modal",
        onClick: (event)=>event.stopPropagation()
    }, export_default1.createElement("div", {
        className: "citation-modal-text"
    }, activeCitation));
};
const JournalArticleCitation = ({ doc , setShowCitation , setActiveCitation  })=>{
    pe1(()=>{
        document.body.classList.add('show-modal-body');
        document.body.addEventListener('click', closeModal, false);
    }, []);
    const closeModal = ()=>{
        setShowCitation(false);
        document.body.classList.remove('show-modal-body');
        setActiveCitation(undefined);
        document.body.removeEventListener('click', closeModal, false);
    };
    return export_default1.createElement(export_default1.Fragment, null, export_default1.createElement("button", {
        className: "close-modal btn-floating red btn-small",
        onClick: closeModal
    }, export_default1.createElement("i", {
        className: "material-icons right"
    }, "clear")), export_default1.createElement(AuthorCitator, {
        authors: doc.authors
    }), export_default1.createElement("span", null, " ", doc.title, ". "), export_default1.createElement("span", null, doc.journal, ". "), export_default1.createElement("span", null, doc.publication_year), export_default1.createElement("span", null, doc?.volume ? `; ${doc.volume}` : undefined, doc?.issue ? `(${doc.issue})` : undefined), export_default1.createElement("span", null, doc?.start_page ? `:${doc.start_page}` : undefined, doc?.end_page ? "-" + doc.end_page : undefined, ". "), export_default1.createElement("span", null, doc?.doi ? doc.doi : undefined));
};
const BookCitation = ({ doc , setShowCitation , setActiveCitation  })=>{
    pe1(()=>{
        document.body.classList.add('show-modal-body');
        document.body.addEventListener('click', closeModal, false);
    }, []);
    const closeModal = ()=>{
        setShowCitation(false);
        document.body.classList.remove('show-modal-body');
        setActiveCitation(undefined);
        document.body.removeEventListener('click', closeModal, false);
    };
    return export_default1.createElement(export_default1.Fragment, null, export_default1.createElement("button", {
        className: "close-modal btn-floating red btn-small",
        onClick: closeModal
    }, export_default1.createElement("i", {
        className: "material-icons right"
    }, "clear")), export_default1.createElement(AuthorCitator, {
        authors: doc.authors
    }), export_default1.createElement("span", null, " ", doc.chapter_title, ". "), export_default1.createElement("span", null, doc.title, doc?.subtitle ? `: ${doc.subtitle}` : undefined, ". "), doc?.edition ? export_default1.createElement("span", null, doc.edition, " - ed. ") : undefined, export_default1.createElement("span", null, doc.publication_place, ": ", doc?.publisher ? `${doc.publisher}; ` : undefined, " ", doc.publication_year), export_default1.createElement("span", null, doc?.start_page ? `:${doc.start_page}` : undefined, doc?.end_page ? "-" + doc.end_page : undefined, ". "), export_default1.createElement("span", null, doc?.doi ? doc.doi : undefined));
};
const BookChapterCitation = ({ doc , setShowCitation , setActiveCitation  })=>{
    pe1(()=>{
        document.body.classList.add('show-modal-body');
        document.body.addEventListener('click', closeModal, false);
    }, []);
    const closeModal = ()=>{
        setShowCitation(false);
        document.body.classList.remove('show-modal-body');
        setActiveCitation(undefined);
        document.body.removeEventListener('click', closeModal, false);
    };
    return export_default1.createElement(export_default1.Fragment, null, export_default1.createElement("button", {
        className: "close-modal btn-floating red btn-small",
        onClick: closeModal
    }, export_default1.createElement("i", {
        className: "material-icons right"
    }, "clear")), export_default1.createElement(AuthorCitator, {
        authors: doc.authors
    }), export_default1.createElement("span", null, " ", doc.chapter_title, ". "), doc.editors.length ? export_default1.createElement("span", null, "In: ", export_default1.createElement(AuthorCitator, {
        authors: doc.editors
    }), ". ") : undefined, export_default1.createElement("span", null, doc.title, doc?.subtitle ? `: ${doc.subtitle}` : undefined, ". "), doc?.edition ? export_default1.createElement("span", null, doc.edition, ". ") : undefined, export_default1.createElement("span", null, doc.publication_place, ": ", doc?.publisher ? `${doc.publisher} ;` : undefined, " ", doc.publication_year), export_default1.createElement("span", null, doc?.start_page ? `:${doc.start_page}` : undefined, doc?.end_page ? "-" + doc.end_page : undefined, ". "), export_default1.createElement("span", null, doc?.doi ? doc.doi : undefined));
};
const ConferenceProceedingCitation = ({ doc , setShowCitation , setActiveCitation  })=>{
    pe1(()=>{
        document.body.classList.add('show-modal-body');
        document.body.addEventListener('click', closeModal, false);
    }, []);
    const closeModal = ()=>{
        setShowCitation(false);
        document.body.classList.remove('show-modal-body');
        setActiveCitation(undefined);
        document.body.removeEventListener('click', closeModal, false);
    };
    return export_default1.createElement(export_default1.Fragment, null, export_default1.createElement("button", {
        className: "close-modal btn-floating red btn-small",
        onClick: closeModal
    }, export_default1.createElement("i", {
        className: "material-icons right"
    }, "clear")), export_default1.createElement(AuthorCitator, {
        authors: doc.authors
    }), export_default1.createElement("span", null, " ", doc.chapter_title, ". "), doc.editors.length ? export_default1.createElement("span", null, "In: ", export_default1.createElement(AuthorCitator, {
        authors: doc.editors
    }), ". ") : undefined, export_default1.createElement("span", null, doc.title, doc?.subtitle ? `: ${doc.subtitle}` : undefined, "; "), export_default1.createElement("span", null, doc.publication_year, " ", doc?.publication_month ? ` ${doc.publication_month}` : undefined, doc?.publication_day ? ` ${doc.publication_day}` : undefined), export_default1.createElement("span", null, "; ", doc.conference_location, ". "), export_default1.createElement("span", null, doc.publication_place, ": ", doc?.publisher ? `${doc.publisher}; ` : undefined, " ", doc.publication_year), export_default1.createElement("span", null, doc?.start_page ? `:${doc.start_page}` : undefined, doc?.end_page ? "-" + doc.end_page : undefined, ". "), export_default1.createElement("span", null, doc?.doi ? doc.doi : undefined));
};
const ThesisCitation = ({ doc , setShowCitation , setActiveCitation  })=>{
    pe1(()=>{
        document.body.classList.add('show-modal-body');
        document.body.addEventListener('click', closeModal, false);
    }, []);
    const closeModal = ()=>{
        setShowCitation(false);
        document.body.classList.remove('show-modal-body');
        setActiveCitation(undefined);
        document.body.removeEventListener('click', closeModal, false);
    };
    return export_default1.createElement(export_default1.Fragment, null, export_default1.createElement("button", {
        className: "close-modal btn-floating red btn-small",
        onClick: closeModal
    }, export_default1.createElement("i", {
        className: "material-icons right"
    }, "clear")), export_default1.createElement(AuthorCitator, {
        authors: [
            doc.author
        ]
    }), export_default1.createElement("span", null, ". ", doc.title, doc?.subtitle ? `: ${doc.subtitle}` : undefined, ". "), export_default1.createElement("span", null, doc.university_location, ": ", doc.university, "; ", doc.publication_year, ". "), export_default1.createElement("span", null, doc?.url ? doc.url : undefined));
};
const selectCitation = (type)=>{
    switch(type){
        case 'journalarticle':
            return JournalArticleCitation;
        case 'book':
            return BookCitation;
        case 'bookchapter':
            return BookChapterCitation;
        case 'conferenceproceeding':
            return ConferenceProceedingCitation;
        case 'thesis':
            return ThesisCitation;
    }
};
const addDocument = async (newDocument)=>fetch('/documentadd', {
        method: 'post',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            newDocument,
            email: newDocument.user
        })
    })
;
const FreeDocumentForm = ({ current , userInfo , setUserInfo , setShowModal , setActiveForm , categoryId  })=>{
    pe1(()=>{
        document.body.classList.add('show-modal-body');
        CKEDITOR.plugins.addExternal('youtube', `${'https://researcher.zone/'}plugins/youtube/plugin.js`);
        CKEDITOR.replace('editor', {
            extraPlugins: 'youtube',
            allowedContent: true
        });
        if (current) {
            CKEDITOR.instances.editor1.setData(current.html);
        }
    }, []);
    const closeModal = (ask = true)=>{
        if (!ask || confirm('Cancel current operation?')) {
            setShowModal(false);
            document.body.classList.remove('show-modal-body');
            setActiveForm(undefined);
        }
    };
    const send = async (event)=>{
        event.preventDefault();
        event.stopPropagation();
        if (CKEDITOR.instances.editor1.getData() === "") return;
        event.target.lastElementChild.disabled = true;
        event.target.lastElementChild.firstChild.data = 'Sending...';
        try {
            if (!current) {
                const newDocument = {
                    can_be_cited: false,
                    category: userInfo.user.categories.find(({ id  })=>id === categoryId
                    ).id,
                    user: userInfo.user.email,
                    type: 'freedocument',
                    html: CKEDITOR.instances.editor1.getData(),
                    order: userInfo.documents.length ? Math.max(...userInfo.documents.filter(({ category  })=>category === categoryId
                    ).map(({ order  })=>order
                    )) + 1 : 1
                };
                const response = await addDocument(newDocument);
                const { document_id  } = await response.json();
                event.target.lastElementChild.disabled = false;
                event.target.lastElementChild.firstChild.data = 'Submit';
                setUserInfo({
                    user: {
                        ...userInfo.user
                    },
                    documents: [
                        ...userInfo.documents,
                        {
                            ...newDocument,
                            _id: document_id
                        }
                    ]
                });
            } else {
                const updatedDocuments = [
                    ...userInfo.documents.filter((doc)=>doc._id !== current._id
                    ),
                    {
                        ...current,
                        html: CKEDITOR.instances.editor1.getData()
                    }
                ];
                await updateDocument({
                    ...current,
                    html: CKEDITOR.instances.editor1.getData()
                });
                setUserInfo({
                    user: userInfo.user,
                    documents: updatedDocuments
                });
            }
            document.body.removeEventListener('click', closeModal, false);
            event.target.disabled = false;
            event.target.firstChild.data = 'Submit';
            closeModal(false);
        } catch (error) {
            console.error(error);
        }
    };
    return export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("form", {
        className: "col s12",
        onSubmit: send
    }, export_default1.createElement("span", {
        className: "modal-label"
    }, current ? 'Edit ' : 'Add new ', "FreeDocument"), export_default1.createElement("button", {
        className: "close-modal btn-floating red btn-small",
        onClick: closeModal
    }, export_default1.createElement("i", {
        className: "material-icons right"
    }, "clear")), export_default1.createElement("textarea", {
        name: "editor",
        id: "editor1",
        rows: "15",
        cols: "80"
    }), export_default1.createElement("button", {
        id: "send-form",
        className: "btn waves-effect waves-light blue accent-4",
        type: "submit",
        name: "action"
    }, "Submit", export_default1.createElement("i", {
        className: "material-icons right"
    }, "send"))));
};
class Book {
    order;
    _id;
    category;
    user;
    type = 'book';
    can_be_cited;
    volume;
    authors;
    title;
    subtitle;
    edition;
    publication_place;
    publisher;
    publication_year;
    doi;
}
class BookChapter extends Book {
    editors;
    number;
    start_page;
    end_page;
    chapter_title;
    coordinator;
}
const BookForm = ({ current , userInfo , setUserInfo , setShowModal , setActiveForm , categoryId  })=>{
    const [authors, setAuthors] = ke([
        0
    ]);
    const form = Fe1();
    pe1(()=>{
        document.body.classList.add('show-modal-body');
    }, []);
    const closeModal = (ask = true)=>{
        if (!ask || confirm('Cancel current operation?')) {
            setShowModal(false);
            document.body.classList.remove('show-modal-body');
            setActiveForm(undefined);
        }
    };
    const createDocumentObject = ()=>{
        const document = new Book();
        if (!current) {
            document.category = userInfo.user.categories.find(({ id  })=>id === categoryId
            ).id;
            document.type = 'book';
            document.order = userInfo.documents.length ? Math.max(...userInfo.documents.filter(({ category  })=>category === categoryId
            ).map(({ order  })=>order
            )) + 1 : 1;
        }
        document.can_be_cited = true;
        document.user = userInfo.user.email;
        document.authors = [
            ...form.current.querySelectorAll('[data-authors]')
        ].map((aut, index)=>({
                name: form.current.querySelector(`#aut-name-${index}`).value,
                surname: form.current.querySelector(`#aut-surname-${index}`).value
            })
        );
        document.title = form.current.querySelector(`#title`).value;
        document.subtitle = form.current.querySelector(`#subtitle`).value ?? '';
        document.edition = +form.current.querySelector(`#edition`).value;
        document.publication_place = form.current.querySelector(`#publication_place`).value;
        document.publisher = form.current.querySelector(`#publisher`).value;
        document.abstract = form.current.querySelector(`#abstract`).value;
        document.publication_year = +form.current.querySelector(`#publication_year`).value;
        document.volume = +form.current.querySelector(`#volume`).value;
        document.doi = form.current.querySelector(`#doi`).value;
        return document;
    };
    const send = async (event)=>{
        event.preventDefault();
        event.stopPropagation();
        event.target.lastElementChild.disabled = true;
        event.target.lastElementChild.firstChild.data = 'Sending...';
        try {
            const newDocument = createDocumentObject();
            if (!current) {
                const response = await addDocument(newDocument);
                const { document_id  } = await response.json();
                setUserInfo({
                    user: {
                        ...userInfo.user
                    },
                    documents: [
                        ...userInfo.documents,
                        {
                            ...newDocument,
                            _id: document_id
                        }
                    ]
                });
            } else {
                const updatedDocuments = [
                    ...userInfo.documents.filter((doc)=>doc._id !== current._id
                    ),
                    {
                        ...current,
                        ...newDocument,
                        _id: current._id,
                        category: current.category,
                        order: current.order,
                        type: current.type
                    }
                ];
                await updateDocument({
                    ...newDocument,
                    _id: current._id
                });
                setUserInfo({
                    user: userInfo.user,
                    documents: updatedDocuments
                });
            }
            document.body.removeEventListener('click', closeModal, false);
            event.target.lastElementChild.disabled = false;
            event.target.lastElementChild.firstChild.data = 'Submit';
            closeModal(false);
        } catch (error) {
            console.error(error);
        }
    };
    const addAuthor = ()=>setAuthors([
            ...authors,
            Math.max(...authors) + 1
        ])
    ;
    const removeAuthor = (id)=>setAuthors(authors.filter((aut)=>aut !== id
        ))
    ;
    return export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("span", {
        className: "modal-label"
    }, !current ? 'Add new ' : 'Edit ', "Book"), export_default1.createElement("button", {
        className: "close-modal btn-floating red btn-small",
        onClick: closeModal
    }, export_default1.createElement("i", {
        className: "material-icons right"
    }, "clear")), export_default1.createElement("form", {
        className: "col s12",
        onSubmit: send,
        ref: form
    }, export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "title",
        type: "text",
        defaultValue: current?.title,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "title",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Book title *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "subtitle",
        type: "text",
        defaultValue: current?.subtitle
    }), export_default1.createElement("label", {
        htmlFor: "subtitle",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Book subtitle")), export_default1.createElement("div", {
        id: "authors"
    }, authors.map((aut)=>{
        return export_default1.createElement("div", {
            key: aut,
            "data-authors": true
        }, export_default1.createElement("div", {
            className: "input-field col s6"
        }, export_default1.createElement("input", {
            id: `aut-name-${aut}`,
            type: "text",
            defaultValue: current?.authors[aut]?.name,
            required: true
        }), export_default1.createElement("label", {
            htmlFor: `aut-name-${aut}`,
            className: "active",
            onClick: ({ target  })=>target.previousElementSibling.focus()
        }, "Author name *")), export_default1.createElement("div", {
            className: "input-field col s6"
        }, export_default1.createElement("input", {
            id: `aut-surname-${aut}`,
            type: "text",
            defaultValue: current?.authors[aut]?.surname,
            required: true
        }), export_default1.createElement("label", {
            htmlFor: `aut-surname-${aut}`,
            className: "active",
            onClick: ({ target  })=>target.previousElementSibling.focus()
        }, "Author surname *")), aut !== 0 ? export_default1.createElement("a", {
            onClick: ()=>removeAuthor(aut)
            ,
            className: "button-remove-modal waves-effect waves-light red btn-small"
        }, export_default1.createElement("i", {
            className: "material-icons right"
        }, "delete_forever")) : undefined);
    }), export_default1.createElement("a", {
        onClick: addAuthor,
        className: "button-add-modal waves-effect waves-light btn-small"
    }, "Add author ", export_default1.createElement("i", {
        className: "material-icons right"
    }, "add"))), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "volume",
        type: "number",
        defaultValue: current?.volume
    }), export_default1.createElement("label", {
        htmlFor: "volume",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Volume")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("textarea", {
        id: "abstract",
        className: "materialize-textarea",
        defaultValue: current?.abstract
    }), export_default1.createElement("label", {
        htmlFor: "abstract",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Abstract")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "publisher",
        type: "text",
        defaultValue: current?.publisher
    }), export_default1.createElement("label", {
        htmlFor: "publisher",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Publisher")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "edition",
        type: "text",
        defaultValue: current?.edition
    }), export_default1.createElement("label", {
        htmlFor: "edition",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Edition")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "publication_place",
        type: "text",
        defaultValue: current?.publication_place,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "publication_place",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Publication Place *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "publication_year",
        type: "number",
        defaultValue: current?.publication_year,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "publication_year",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Publication year *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "doi",
        type: "text",
        defaultValue: current?.doi
    }), export_default1.createElement("label", {
        htmlFor: "doi",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "DOI / URI"))), export_default1.createElement("button", {
        id: "send-form",
        className: "btn waves-effect waves-light blue accent-4",
        type: "submit",
        name: "action"
    }, "Submit", export_default1.createElement("i", {
        className: "material-icons right"
    }, "send"))));
};
class JournalArticle {
    _id;
    type;
    category;
    abstract;
    order;
    user;
    can_be_cited;
    authors;
    title;
    journal;
    volume;
    issue;
    start_page;
    end_page;
    publication_year;
    doi;
}
const JournalArticleForm = ({ current , userInfo , setUserInfo , setShowModal , setActiveForm , categoryId  })=>{
    const [authors, setAuthors] = ke([
        0
    ]);
    const form = Fe1();
    pe1(()=>{
        document.body.classList.add('show-modal-body');
        if (current) {
            setAuthors([
                ...Array(current.authors.length).keys()
            ]);
        }
    }, []);
    const closeModal = (ask = true)=>{
        if (!ask || confirm('Cancel current operation?')) {
            setShowModal(false);
            document.body.classList.remove('show-modal-body');
            setActiveForm(undefined);
        }
    };
    const createDocumentObject = ()=>{
        const document = new JournalArticle();
        if (!current) {
            document.category = userInfo.user.categories.find(({ id  })=>id === categoryId
            ).id;
            document.type = 'journalarticle';
            document.order = userInfo.documents.length ? Math.max(...userInfo.documents.filter(({ category  })=>category === categoryId
            ).map(({ order  })=>order
            )) + 1 : 1;
        }
        document.can_be_cited = true;
        document.user = userInfo.user.email;
        document.authors = [
            ...form.current.querySelectorAll('[data-authors]')
        ].map((aut, index)=>({
                name: form.current.querySelector(`#aut-name-${index}`).value,
                surname: form.current.querySelector(`#aut-surname-${index}`).value
            })
        );
        document.title = form.current.querySelector(`#title`).value;
        document.journal = form.current.querySelector(`#journal`).value;
        document.volume = +form.current.querySelector(`#volume`).value ?? 0;
        document.issue = +form.current.querySelector(`#issue`).value ?? 0;
        document.abstract = form.current.querySelector(`#abstract`).value ?? '';
        document.start_page = +form.current.querySelector(`#start_page`).value ?? 0;
        document.end_page = +form.current.querySelector(`#end_page`).value ?? 0;
        document.publication_year = +form.current.querySelector(`#publication_year`).value ?? 0;
        document.doi = form.current.querySelector(`#doi`).value ?? '';
        return document;
    };
    const send = async (event)=>{
        event.preventDefault();
        event.stopPropagation();
        event.target.lastElementChild.disabled = true;
        event.target.lastElementChild.firstChild.data = 'Sending...';
        try {
            const newDocument = createDocumentObject();
            if (!current) {
                const response = await addDocument(newDocument);
                const { document_id  } = await response.json();
                setUserInfo({
                    user: {
                        ...userInfo.user
                    },
                    documents: [
                        ...userInfo.documents,
                        {
                            ...newDocument,
                            _id: document_id
                        }
                    ]
                });
            } else {
                const updatedDocuments = [
                    ...userInfo.documents.filter((doc)=>doc._id !== current._id
                    ),
                    {
                        ...current,
                        ...newDocument,
                        _id: current._id,
                        category: current.category,
                        order: current.order,
                        type: current.type
                    }
                ];
                await updateDocument({
                    ...newDocument,
                    _id: current._id
                });
                setUserInfo({
                    user: userInfo.user,
                    documents: updatedDocuments
                });
            }
            document.body.removeEventListener('click', closeModal, false);
            event.target.lastElementChild.disabled = false;
            event.target.lastElementChild.firstChild.data = 'Submit';
            closeModal(false);
        } catch (error) {
            console.error(error);
        }
    };
    const addAuthor = ()=>setAuthors([
            ...authors,
            Math.max(...authors) + 1
        ])
    ;
    const removeAuthor = (id)=>setAuthors(authors.filter((aut)=>aut !== id
        ))
    ;
    return export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("span", {
        className: "modal-label"
    }, !current ? 'Add new ' : 'Edit ', "journal article"), export_default1.createElement("button", {
        className: "close-modal btn-floating red btn-small",
        onClick: closeModal
    }, export_default1.createElement("i", {
        className: "material-icons right"
    }, "clear")), export_default1.createElement("form", {
        className: "col s12",
        onSubmit: send,
        ref: form
    }, export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "title",
        type: "text",
        defaultValue: current?.title,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "title",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Article title *")), export_default1.createElement("div", {
        id: "authors"
    }, authors.map((aut)=>{
        return export_default1.createElement("div", {
            key: aut,
            "data-authors": true
        }, export_default1.createElement("div", {
            className: "input-field col s6"
        }, export_default1.createElement("input", {
            id: `aut-name-${aut}`,
            type: "text",
            defaultValue: current?.authors[aut]?.name,
            required: true
        }), export_default1.createElement("label", {
            htmlFor: `aut-name-${aut}`,
            className: "active",
            onClick: ({ target  })=>target.previousElementSibling.focus()
        }, "Author name *")), export_default1.createElement("div", {
            className: "input-field col s6"
        }, export_default1.createElement("input", {
            id: `aut-surname-${aut}`,
            type: "text",
            defaultValue: current?.authors[aut]?.surname,
            required: true
        }), export_default1.createElement("label", {
            htmlFor: `aut-surname-${aut}`,
            className: "active",
            onClick: ({ target  })=>target.previousElementSibling.focus()
        }, "Author surname *")), aut !== 0 ? export_default1.createElement("a", {
            onClick: ()=>removeAuthor(aut)
            ,
            className: "button-remove-modal waves-effect waves-light red btn-small"
        }, export_default1.createElement("i", {
            className: "material-icons right"
        }, "delete_forever")) : undefined);
    }), export_default1.createElement("a", {
        onClick: addAuthor,
        className: "button-add-modal waves-effect waves-light btn-small"
    }, "Add author ", export_default1.createElement("i", {
        className: "material-icons right"
    }, "add"))), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "journal",
        type: "text",
        defaultValue: current?.journal,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "journal",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Journal *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("textarea", {
        id: "abstract",
        className: "materialize-textarea",
        defaultValue: current?.abstract
    }), export_default1.createElement("label", {
        htmlFor: "abstract",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Abstract")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "issue",
        type: "number",
        defaultValue: current?.issue
    }), export_default1.createElement("label", {
        htmlFor: "issue",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Issue")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "volume",
        type: "number",
        defaultValue: current?.volume
    }), export_default1.createElement("label", {
        htmlFor: "volume",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Volume")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "start_page",
        type: "number",
        defaultValue: current?.start_page
    }), export_default1.createElement("label", {
        htmlFor: "start_page",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Start page")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "end_page",
        type: "number",
        defaultValue: current?.end_page
    }), export_default1.createElement("label", {
        htmlFor: "end_page",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "End page")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "publication_year",
        type: "number",
        defaultValue: current?.publication_year,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "publication_year",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Publication year *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "doi",
        type: "text",
        defaultValue: current?.doi
    }), export_default1.createElement("label", {
        htmlFor: "doi",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "DOI / URI"))), export_default1.createElement("button", {
        id: "send-form",
        className: "btn waves-effect waves-light blue accent-4",
        type: "submit",
        name: "action"
    }, "Submit", export_default1.createElement("i", {
        className: "material-icons right"
    }, "send"))));
};
const BookChapterForm = ({ current , userInfo , setUserInfo , setShowModal , setActiveForm , categoryId  })=>{
    const [authors, setAuthors] = ke([
        0
    ]);
    const [editors, setEditors] = ke([]);
    const form = Fe1();
    pe1(()=>{
        document.body.classList.add('show-modal-body');
    }, []);
    const closeModal = (ask = true)=>{
        if (!ask || confirm('Cancel current operation?')) {
            setShowModal(false);
            document.body.classList.remove('show-modal-body');
            setActiveForm(undefined);
        }
    };
    const createDocumentObject = ()=>{
        const document = new BookChapter();
        if (!current) {
            document.category = userInfo.user.categories.find(({ id  })=>id === categoryId
            ).id;
            document.type = 'bookchapter';
            document.order = userInfo.documents.length ? Math.max(...userInfo.documents.filter(({ category  })=>category === categoryId
            ).map(({ order  })=>order
            )) + 1 : 1;
        }
        document.can_be_cited = true;
        document.user = userInfo.user.email;
        document.authors = [
            ...form.current.querySelectorAll('[data-editors]')
        ].length ? [
            ...form.current.querySelectorAll('[data-authors]')
        ].map((aut, index)=>({
                name: form.current.querySelector(`#aut-name-${index}`).value,
                surname: form.current.querySelector(`#aut-surname-${index}`).value
            })
        ) : [];
        document.editors = [
            ...form.current.querySelectorAll('[data-editors]')
        ].map((ed, index)=>({
                name: form.current.querySelector(`#ed-name-${index}`).value,
                surname: form.current.querySelector(`#ed-surname-${index}`).value
            })
        );
        document.title = form.current.querySelector(`#title`).value ?? '';
        document.subtitle = form.current.querySelector(`#subtitle`).value ?? '';
        document.edition = +form.current.querySelector(`#edition`).value ?? 0;
        document.publication_place = form.current.querySelector(`#publication_place`).value ?? 0;
        document.publisher = form.current.querySelector(`#publisher`).value ?? '';
        document.abstract = form.current.querySelector(`#abstract`).value ?? '';
        document.publication_year = +form.current.querySelector(`#publication_year`).value ?? 0;
        document.volume = +form.current.querySelector(`#volume`).value ?? 0;
        document.doi = form.current.querySelector(`#doi`).value ?? '';
        document.start_page = +form.current.querySelector(`#start_page`).value ?? 0;
        document.end_page = +form.current.querySelector(`#end_page`).value ?? 0;
        document.coordinator = +form.current.querySelector(`#coordinator`).value ?? 0;
        document.number = +form.current.querySelector(`#number`).value ?? 0;
        document.chapter_title = form.current.querySelector(`#chapter_title`).value ?? '';
        return document;
    };
    const send = async (event)=>{
        event.preventDefault();
        event.stopPropagation();
        event.target.lastElementChild.disabled = true;
        event.target.lastElementChild.firstChild.data = 'Sending...';
        try {
            const newDocument = createDocumentObject();
            if (!current) {
                const response = await addDocument(newDocument);
                const { document_id  } = await response.json();
                setUserInfo({
                    user: {
                        ...userInfo.user
                    },
                    documents: [
                        ...userInfo.documents,
                        {
                            ...newDocument,
                            _id: document_id
                        }
                    ]
                });
            } else {
                const updatedDocuments = [
                    ...userInfo.documents.filter((doc)=>doc._id !== current._id
                    ),
                    {
                        ...current,
                        ...newDocument,
                        _id: current._id,
                        category: current.category,
                        order: current.order,
                        type: current.type
                    }
                ];
                await updateDocument({
                    ...newDocument,
                    _id: current._id
                });
                setUserInfo({
                    user: userInfo.user,
                    documents: updatedDocuments
                });
            }
            document.body.removeEventListener('click', closeModal, false);
            event.target.lastElementChild.disabled = false;
            event.target.lastElementChild.firstChild.data = 'Submit';
            closeModal(false);
        } catch (error) {
            console.error(error);
        }
    };
    const addAuthor = ()=>setAuthors([
            ...authors,
            Math.max(...authors) + 1
        ])
    ;
    const removeAuthor = (id)=>setAuthors(authors.filter((aut)=>aut !== id
        ))
    ;
    const addEditor = ()=>setEditors(editors.length ? [
            ...editors,
            Math.max(...editors) + 1
        ] : [
            0
        ])
    ;
    const removeEditor = (id)=>setEditors(editors.filter((aut)=>aut !== id
        ))
    ;
    return export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("span", {
        className: "modal-label"
    }, !current ? 'Add new ' : 'Edit ', "Book chapter"), export_default1.createElement("button", {
        className: "close-modal btn-floating red btn-small",
        onClick: closeModal
    }, export_default1.createElement("i", {
        className: "material-icons right"
    }, "clear")), export_default1.createElement("form", {
        className: "col s12",
        onSubmit: send,
        ref: form
    }, export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "title",
        type: "text",
        defaultValue: current?.title,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "title",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Book title *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "subtitle",
        type: "text",
        defaultValue: current?.subtitle,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "subtitle",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Book subtitle *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "chapter_title",
        type: "text",
        defaultValue: current?.chapter_title,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "chapter_title",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Chapter title *")), export_default1.createElement("div", {
        id: "authors"
    }, authors.map((aut)=>{
        return export_default1.createElement("div", {
            key: aut,
            "data-authors": true
        }, export_default1.createElement("div", {
            className: "input-field col s6"
        }, export_default1.createElement("input", {
            id: `aut-name-${aut}`,
            type: "text",
            defaultValue: current?.authors[aut]?.name,
            required: true
        }), export_default1.createElement("label", {
            htmlFor: `aut-name-${aut}`,
            className: "active",
            onClick: ({ target  })=>target.previousElementSibling.focus()
        }, "Author name *")), export_default1.createElement("div", {
            className: "input-field col s6"
        }, export_default1.createElement("input", {
            id: `aut-surname-${aut}`,
            type: "text",
            defaultValue: current?.authors[aut]?.surname,
            required: true
        }), export_default1.createElement("label", {
            htmlFor: `aut-surname-${aut}`,
            className: "active",
            onClick: ({ target  })=>target.previousElementSibling.focus()
        }, "Author surname *")), aut !== 0 ? export_default1.createElement("a", {
            onClick: ()=>removeAuthor(aut)
            ,
            className: "button-remove-modal waves-effect waves-light red btn-small"
        }, export_default1.createElement("i", {
            className: "material-icons right"
        }, "delete_forever")) : undefined);
    }), export_default1.createElement("a", {
        onClick: addAuthor,
        className: "button-add-modal waves-effect waves-light btn-small"
    }, "Add author", export_default1.createElement("i", {
        className: "material-icons right"
    }, "add"))), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "coordinator",
        type: "text",
        defaultValue: current?.coordinator
    }), export_default1.createElement("label", {
        htmlFor: "coordinator",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Coordinator")), export_default1.createElement("div", {
        id: "editors"
    }, editors.map((ed)=>{
        return export_default1.createElement("div", {
            key: ed,
            "data-editors": true
        }, export_default1.createElement("div", {
            className: "input-field col s6"
        }, export_default1.createElement("input", {
            id: `ed-name-${ed}`,
            type: "text",
            defaultValue: current?.editors[ed]?.name
        }), export_default1.createElement("label", {
            htmlFor: `ed-name-${ed}`,
            className: "active",
            onClick: ({ target  })=>target.previousElementSibling.focus()
        }, "Editor name")), export_default1.createElement("div", {
            className: "input-field col s6"
        }, export_default1.createElement("input", {
            id: `ed-surname-${ed}`,
            type: "text",
            defaultValue: current?.editors[ed]?.surname
        }), export_default1.createElement("label", {
            htmlFor: `ed-surname-${ed}`,
            className: "active",
            onClick: ({ target  })=>target.previousElementSibling.focus()
        }, "Editor surname")), export_default1.createElement("a", {
            onClick: ()=>removeEditor(ed)
            ,
            className: "button-remove-modal waves-effect waves-light red btn-small"
        }, export_default1.createElement("i", {
            className: "material-icons right"
        }, "delete_forever")));
    }), export_default1.createElement("a", {
        onClick: addEditor,
        className: "button-add-modal waves-effect waves-light btn-small"
    }, "Add editor", export_default1.createElement("i", {
        className: "material-icons right"
    }, "add"))), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "volume",
        type: "number",
        defaultValue: current?.volume
    }), export_default1.createElement("label", {
        htmlFor: "volume",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Volume")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "number",
        type: "number",
        defaultValue: current?.number
    }), export_default1.createElement("label", {
        htmlFor: "number",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Chapter number")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "start_page",
        type: "number",
        defaultValue: current?.start_page
    }), export_default1.createElement("label", {
        htmlFor: "start_page",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Start page")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "end_page",
        type: "number",
        defaultValue: current?.end_page
    }), export_default1.createElement("label", {
        htmlFor: "end_page",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "End page")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("textarea", {
        id: "abstract",
        className: "materialize-textarea",
        defaultValue: current?.abstract
    }), export_default1.createElement("label", {
        htmlFor: "abstract",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Abstract")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "publisher",
        type: "text",
        defaultValue: current?.publisher
    }), export_default1.createElement("label", {
        htmlFor: "publisher",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Publisher")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "edition",
        type: "text",
        defaultValue: current?.edition
    }), export_default1.createElement("label", {
        htmlFor: "edition",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Edition")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "publication_place",
        type: "text",
        defaultValue: current?.publication_place,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "publication_place",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Publication Place *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "publication_year",
        type: "number",
        defaultValue: current?.publication_year,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "publication_year",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Publication year *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "doi",
        type: "text",
        defaultValue: current?.doi
    }), export_default1.createElement("label", {
        htmlFor: "doi",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "DOI / URI"))), export_default1.createElement("button", {
        id: "send-form",
        className: "btn waves-effect waves-light blue accent-4",
        type: "submit",
        name: "action"
    }, "Submit", export_default1.createElement("i", {
        className: "material-icons right"
    }, "send"))));
};
class ConferenceProceeding {
    _id;
    type;
    category;
    order;
    user;
    can_be_cited;
    title;
    authors;
    editors;
    subtitle;
    conference_year;
    conference_month;
    conference_day;
    publisher;
    conference_location;
    publication_place;
    publication_year;
    doi;
}
const ConferenceProceedingForm = ({ current , userInfo , setUserInfo , setShowModal , setActiveForm , categoryId  })=>{
    const [authors, setAuthors] = ke([
        0
    ]);
    const [editors, setEditors] = ke([]);
    const form = Fe1();
    pe1(()=>{
        document.body.classList.add('show-modal-body');
    }, []);
    const closeModal = (ask = true)=>{
        if (!ask || confirm('Cancel current operation?')) {
            setShowModal(false);
            document.body.classList.remove('show-modal-body');
            setActiveForm(undefined);
        }
    };
    const createDocumentObject = ()=>{
        const document = new ConferenceProceeding();
        if (!current) {
            document.category = userInfo.user.categories.find(({ id  })=>id === categoryId
            ).id;
            document.type = 'conferenceproceeding';
            document.order = userInfo.documents.length ? Math.max(...userInfo.documents.filter(({ category  })=>category === categoryId
            ).map(({ order  })=>order
            )) + 1 : 1;
        }
        document.abstract = form.current.querySelector(`#abstract`).value;
        document.can_be_cited = true;
        document.user = userInfo.user.email;
        document.authors = [
            ...form.current.querySelectorAll('[data-authors]')
        ].map((aut, index)=>({
                name: form.current.querySelector(`#aut-name-${index}`).value,
                surname: form.current.querySelector(`#aut-surname-${index}`).value
            })
        );
        document.editors = [
            ...form.current.querySelectorAll('[data-editors]')
        ].map((ed, index)=>({
                name: form.current.querySelector(`#ed-name-${index}`).value,
                surname: form.current.querySelector(`#ed-surname-${index}`).value
            })
        );
        document.title = form.current.querySelector(`#title`).value;
        document.subtitle = form.current.querySelector(`#subtitle`).value ?? '';
        document.publication_place = form.current.querySelector(`#publication_place`).value ?? '';
        document.publication_year = +form.current.querySelector(`#publication_year`).value ?? 0;
        document.conference_year = +form.current.querySelector(`#conference_year`).value ?? 0;
        document.conference_month = +form.current.querySelector(`#conference_month`).value ?? 0;
        document.conference_day = +form.current.querySelector(`#conference_day`).value ?? 0;
        document.publisher = form.current.querySelector(`#publisher`).value ?? '';
        document.conference_location = form.current.querySelector(`#conference_location`).value ?? '';
        document.doi = form.current.querySelector(`#doi`).value ?? '';
        return document;
    };
    const send = async (event)=>{
        event.preventDefault();
        event.stopPropagation();
        event.target.lastElementChild.disabled = true;
        event.target.lastElementChild.firstChild.data = 'Sending...';
        try {
            const newDocument = createDocumentObject();
            if (!current) {
                const response = await addDocument(newDocument);
                const { document_id  } = await response.json();
                setUserInfo({
                    user: {
                        ...userInfo.user
                    },
                    documents: [
                        ...userInfo.documents,
                        {
                            ...newDocument,
                            _id: document_id
                        }
                    ]
                });
            } else {
                const updatedDocuments = [
                    ...userInfo.documents.filter((doc)=>doc._id !== current._id
                    ),
                    {
                        ...current,
                        ...newDocument,
                        _id: current._id,
                        category: current.category,
                        order: current.order,
                        type: current.type
                    }
                ];
                await updateDocument({
                    ...newDocument,
                    _id: current._id
                });
                setUserInfo({
                    user: userInfo.user,
                    documents: updatedDocuments
                });
            }
            document.body.removeEventListener('click', closeModal, false);
            event.target.lastElementChild.disabled = false;
            event.target.lastElementChild.firstChild.data = 'Submit';
            closeModal(false);
        } catch (error) {
            console.error(error);
        }
    };
    const addAuthor = ()=>setAuthors([
            ...authors,
            Math.max(...authors) + 1
        ])
    ;
    const removeAuthor = (id)=>setAuthors(authors.filter((aut)=>aut !== id
        ))
    ;
    const addEditor = ()=>setEditors(editors.length ? [
            ...editors,
            Math.max(...editors) + 1
        ] : [
            0
        ])
    ;
    const removeEditor = (id)=>setEditors(editors.filter((aut)=>aut !== id
        ))
    ;
    return export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("span", {
        className: "modal-label"
    }, !current ? 'Add new ' : 'Edit ', "Conference proceeding"), export_default1.createElement("button", {
        className: "close-modal btn-floating red btn-small",
        onClick: closeModal
    }, export_default1.createElement("i", {
        className: "material-icons right"
    }, "clear")), export_default1.createElement("form", {
        className: "col s12",
        onSubmit: send,
        ref: form
    }, export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "title",
        type: "text",
        defaultValue: current?.title,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "title",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Conference title *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "subtitle",
        type: "text",
        defaultValue: current?.subtitle
    }), export_default1.createElement("label", {
        htmlFor: "subtitle",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Conference subtitle")), export_default1.createElement("div", {
        id: "authors"
    }, authors.map((aut)=>{
        return export_default1.createElement("div", {
            key: aut,
            "data-authors": true
        }, export_default1.createElement("div", {
            className: "input-field col s6"
        }, export_default1.createElement("input", {
            id: `aut-name-${aut}`,
            type: "text",
            defaultValue: current?.authors[aut]?.name,
            required: true
        }), export_default1.createElement("label", {
            htmlFor: `aut-name-${aut}`,
            className: "active",
            onClick: ({ target  })=>target.previousElementSibling.focus()
        }, "Author name *")), export_default1.createElement("div", {
            className: "input-field col s6"
        }, export_default1.createElement("input", {
            id: `aut-surname-${aut}`,
            type: "text",
            defaultValue: current?.authors[aut]?.surname,
            required: true
        }), export_default1.createElement("label", {
            htmlFor: `aut-surname-${aut}`,
            className: "active",
            onClick: ({ target  })=>target.previousElementSibling.focus()
        }, "Author surname *")), aut !== 0 ? export_default1.createElement("a", {
            onClick: ()=>removeAuthor(aut)
            ,
            className: "button-remove-modal waves-effect waves-light red btn-small"
        }, export_default1.createElement("i", {
            className: "material-icons right"
        }, "delete_forever")) : undefined);
    }), export_default1.createElement("a", {
        onClick: addAuthor,
        className: "button-add-modal waves-effect waves-light btn-small"
    }, "Add author ", export_default1.createElement("i", {
        className: "material-icons right"
    }, "add"))), export_default1.createElement("div", {
        id: "editors"
    }, editors.map((ed)=>{
        return export_default1.createElement("div", {
            key: ed,
            "data-editors": true
        }, export_default1.createElement("div", {
            className: "input-field col s6"
        }, export_default1.createElement("input", {
            id: `ed-name-${ed}`,
            type: "text",
            defaultValue: current?.editors[ed]?.name
        }), export_default1.createElement("label", {
            htmlFor: `ed-name-${ed}`,
            className: "active",
            onClick: ({ target  })=>target.previousElementSibling.focus()
        }, "Editor name")), export_default1.createElement("div", {
            className: "input-field col s6"
        }, export_default1.createElement("input", {
            id: `ed-surname-${ed}`,
            type: "text",
            defaultValue: current?.editors[ed]?.surname
        }), export_default1.createElement("label", {
            htmlFor: `ed-surname-${ed}`,
            className: "active",
            onClick: ({ target  })=>target.previousElementSibling.focus()
        }, "Editor surname")), export_default1.createElement("a", {
            onClick: ()=>removeEditor(ed)
            ,
            className: "button-remove-modal waves-effect waves-light red btn-small"
        }, export_default1.createElement("i", {
            className: "material-icons right"
        }, "delete_forever")));
    }), export_default1.createElement("span", {
        onClick: addEditor,
        className: "button-add-modal waves-effect waves-light btn-small"
    }, "Add editor")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("textarea", {
        id: "abstract",
        className: "materialize-textarea",
        defaultValue: current?.abstract
    }), export_default1.createElement("label", {
        htmlFor: "abstract",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Abstract")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "conference_place",
        type: "text",
        defaultValue: current?.conference_place,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "conference_place",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Conference place *")), export_default1.createElement("div", {
        className: "input-field col s4"
    }, export_default1.createElement("input", {
        id: "conference_year",
        type: "number",
        defaultValue: current?.conference_year,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "conference_year",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Conference year *")), export_default1.createElement("div", {
        className: "input-field col s4"
    }, export_default1.createElement("input", {
        id: "conference_month",
        type: "number",
        defaultValue: current?.conference_month,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "conference_month",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Conference month *")), export_default1.createElement("div", {
        className: "input-field col s4"
    }, export_default1.createElement("input", {
        id: "conference_day",
        type: "number",
        defaultValue: current?.conference_day,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "conference_day",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Conference day *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "publisher",
        type: "text",
        defaultValue: current?.publisher
    }), export_default1.createElement("label", {
        htmlFor: "publisher",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Publisher")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "publication_place",
        type: "text",
        defaultValue: current?.publication_place,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "publication_place",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Publication Place *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "publication_year",
        type: "number",
        defaultValue: current?.publication_year,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "publication_year",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Publication year *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "doi",
        type: "text",
        defaultValue: current?.doi
    }), export_default1.createElement("label", {
        htmlFor: "doi",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "DOI / URI"))), export_default1.createElement("button", {
        id: "send-form",
        className: "btn waves-effect waves-light blue accent-4",
        type: "submit",
        name: "action"
    }, "Submit", export_default1.createElement("i", {
        className: "material-icons right"
    }, "send"))));
};
class Thesis {
    _id;
    type;
    category;
    order;
    user;
    can_be_cited;
    title;
    abstract;
    author;
    subtitle;
    university;
    university_location;
    publication_year;
    uri;
}
const ThesisForm = ({ current , userInfo , setUserInfo , setShowModal , setActiveForm , categoryId  })=>{
    const form = Fe1();
    pe1(()=>{
        document.body.classList.add('show-modal-body');
    }, []);
    const closeModal = (ask = true)=>{
        if (!ask || confirm('Cancel current operation?')) {
            setShowModal(false);
            document.body.classList.remove('show-modal-body');
            setActiveForm(undefined);
        }
    };
    const createDocumentObject = ()=>{
        const document = new Thesis();
        if (!current) {
            document.category = userInfo.user.categories.find(({ id  })=>id === categoryId
            ).id;
            document.type = 'thesis';
            document.order = userInfo.documents.length ? Math.max(...userInfo.documents.filter(({ category  })=>category === categoryId
            ).map(({ order  })=>order
            )) + 1 : 1;
        }
        document.can_be_cited = true;
        document.user = userInfo.user.email;
        document.author = {
            name: form.current.querySelector(`#aut-name`).value,
            surname: form.current.querySelector(`#aut-surname`).value
        };
        document.title = form.current.querySelector(`#title`).value ?? '';
        document.subtitle = form.current.querySelector(`#subtitle`).value ?? '';
        document.university = form.current.querySelector(`#university`).value ?? '';
        document.university_location = form.current.querySelector(`#university_location`).value ?? '';
        document.abstract = form.current.querySelector(`#abstract`).value ?? '';
        document.publication_year = +form.current.querySelector(`#publication_year`).value ?? 0;
        document.uri = form.current.querySelector(`#uri`).value ?? '';
        return document;
    };
    const send = async (event)=>{
        event.preventDefault();
        event.stopPropagation();
        event.target.lastElementChild.disabled = true;
        event.target.lastElementChild.firstChild.data = 'Sending...';
        try {
            const newDocument = createDocumentObject();
            if (!current) {
                const response = await addDocument(newDocument);
                const { document_id  } = await response.json();
                setUserInfo({
                    user: {
                        ...userInfo.user
                    },
                    documents: [
                        ...userInfo.documents,
                        {
                            ...newDocument,
                            _id: document_id
                        }
                    ]
                });
            } else {
                const updatedDocuments = [
                    ...userInfo.documents.filter((doc)=>doc._id !== current._id
                    ),
                    {
                        ...current,
                        ...newDocument,
                        _id: current._id,
                        category: current.category,
                        order: current.order,
                        type: current.type
                    }
                ];
                await updateDocument({
                    ...newDocument,
                    _id: current._id
                });
                setUserInfo({
                    user: userInfo.user,
                    documents: updatedDocuments
                });
            }
            document.body.removeEventListener('click', closeModal, false);
            event.target.lastElementChild.disabled = false;
            event.target.lastElementChild.firstChild.data = 'Submit';
            closeModal(false);
        } catch (error) {
            console.error(error);
        }
    };
    return export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("span", {
        className: "modal-label"
    }, !current ? 'Add new ' : 'Edit ', "Thesis"), export_default1.createElement("button", {
        className: "close-modal btn-floating red btn-small",
        onClick: closeModal
    }, export_default1.createElement("i", {
        className: "material-icons right"
    }, "clear")), export_default1.createElement("form", {
        className: "col s12",
        onSubmit: send,
        ref: form
    }, export_default1.createElement("div", {
        className: "row"
    }, export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "title",
        type: "text",
        defaultValue: current?.title,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "title",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Title *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "subtitle",
        type: "text",
        defaultValue: current?.subtitle,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "subtitle",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Subtitle *")), export_default1.createElement("div", {
        className: "input-field col s6"
    }, export_default1.createElement("input", {
        id: `aut-name`,
        type: "text",
        defaultValue: current?.author?.name,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: `aut-name`,
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Author name *")), export_default1.createElement("div", {
        className: "input-field col s6"
    }, export_default1.createElement("input", {
        id: `aut-surname`,
        type: "text",
        defaultValue: current?.author?.surname,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: `aut-surname`,
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Author surname *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "university",
        type: "text",
        defaultValue: current?.university,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "university",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "University *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "university_location",
        type: "text",
        defaultValue: current?.university_location,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "university_location",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "University place *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("textarea", {
        id: "abstract",
        className: "materialize-textarea",
        defaultValue: current?.abstract
    }), export_default1.createElement("label", {
        htmlFor: "abstract",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Abstract")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "publication_year",
        type: "number",
        defaultValue: current?.publication_year,
        required: true
    }), export_default1.createElement("label", {
        htmlFor: "publication_year",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "Publication year *")), export_default1.createElement("div", {
        className: "input-field col s12"
    }, export_default1.createElement("input", {
        id: "uri",
        type: "text",
        defaultValue: current?.uri
    }), export_default1.createElement("label", {
        htmlFor: "uri",
        className: "active",
        onClick: ({ target  })=>target.previousElementSibling.focus()
    }, "URI"))), export_default1.createElement("button", {
        id: "send-form",
        className: "btn waves-effect waves-light blue accent-4",
        type: "submit",
        name: "action"
    }, "Submit", export_default1.createElement("i", {
        className: "material-icons right"
    }, "send"))));
};
const selectForm = (type)=>{
    switch(type){
        case 'freedocument':
            return FreeDocumentForm;
        case 'journalarticle':
            return JournalArticleForm;
        case 'book':
            return BookForm;
        case 'bookchapter':
            return BookChapterForm;
        case 'conferenceproceeding':
            return ConferenceProceedingForm;
        case 'thesis':
            return ThesisForm;
    }
};
const ProfileDocuments = ({ userInfo , setUserInfo  })=>{
    const [showModal, setShowModal] = ke(false);
    const [showCitation, setShowCitation] = ke(false);
    const [activeCitation, setActiveCitation] = ke(undefined);
    const [activeForm, setActiveForm] = ke(undefined);
    pe1(()=>{
        const elems = document.querySelectorAll('.dropdown-trigger');
        if (!userInfo.isGuest) M.Dropdown.init(elems);
    }, [
        userInfo
    ]);
    const addEditCategory = (category)=>{
        setShowModal(true);
        setActiveForm(export_default1.createElement(NewCategoryForm, {
            userInfo: userInfo,
            setShowModal: setShowModal,
            setActiveForm: setActiveForm,
            setUserInfo: setUserInfo,
            current: category
        }));
    };
    const addDocument1 = (category_id, Form, doc)=>{
        setShowModal(true);
        setActiveForm(export_default1.createElement(Form, {
            userInfo: userInfo,
            setShowModal: setShowModal,
            setActiveForm: setActiveForm,
            setUserInfo: setUserInfo,
            categoryId: category_id,
            current: doc
        }));
    };
    const citate = (Form, doc)=>{
        setShowCitation(true);
        setActiveCitation(export_default1.createElement(Form, {
            setShowCitation: setShowCitation,
            setActiveCitation: setActiveCitation,
            doc: doc
        }));
    };
    const changeVisibility = async (target, category_id, visible)=>{
        target.parentElement.disabled = true;
        target.classList.add('rotating');
        target.innerText = "autorenew";
        try {
            const updatedCategories = userInfo.user.categories.map((cat)=>{
                if (cat.id === category_id) {
                    return {
                        ...cat,
                        visible: !visible
                    };
                } else return cat;
            });
            const updatedUser = {
                ...userInfo.user,
                categories: updatedCategories
            };
            await updateUser(updatedUser);
            setUserInfo({
                user: updatedUser,
                documents: userInfo.documents
            });
            target.parentElement.disabled = false;
            target.classList.remove('rotating');
        } catch (error) {
            console.error(error);
            target.parentElement.disabled = false;
            target.classList.remove('rotating');
            target.innerText = `${visible ? 'visibility' : 'visibility_off'}`;
        }
    };
    const deleteOneDocument = async (target, id)=>{
        if (confirm('Delete this document?')) {
            target.parentElement.disabled = true;
            target.classList.add('rotating');
            target.innerText = "autorenew";
            try {
                await deleteDocument(id, userInfo.user);
                const updatedDocuments = userInfo.documents.filter(({ _id  })=>_id !== id
                ).sort((a, b12)=>orderList(a, b12)
                ).map((doc, index)=>({
                        ...doc,
                        order: index
                    })
                );
                setUserInfo({
                    user: userInfo.user,
                    documents: updatedDocuments
                });
            } catch (error) {
                console.error(error);
                target.parentElement.disabled = false;
                target.classList.remove('rotating');
                target.innerText = "delete";
            }
        }
    };
    const deleteCategoryDocuments = async (target, category, categoryId)=>{
        if (confirm(`Delete category "${category}" and all its documents?`)) {
            target.parentElement.disabled = true;
            target.classList.add('rotating');
            target.innerText = "autorenew";
            try {
                const updatedDocuments = userInfo.documents.filter(({ category: currentCat  })=>currentCat !== category
                );
                const updatedUser = {
                    ...userInfo.user,
                    categories: userInfo.user.categories.filter(({ category_name  })=>category_name !== category
                    )
                };
                updatedUser.categories = [
                    ...updatedUser.categories
                ].sort((a, b12)=>orderList(a, b12)
                ).map((cat, index)=>({
                        ...cat,
                        order: index
                    })
                );
                await deleteCategory(categoryId, updatedUser);
                setUserInfo({
                    user: updatedUser,
                    documents: updatedDocuments
                });
            } catch (error) {
                console.error(error);
                target.parentElement.disabled = false;
                target.classList.remove('rotating');
                target.innerText = "delete";
            }
        }
    };
    const orderList = (a, b12)=>{
        if (a.order > b12.order) {
            return 1;
        }
        if (a.order < b12.order) {
            return -1;
        }
        return 0;
    };
    const changeCategoryOrder = async (target, modify, currentName, currentOrder)=>{
        if (target.disabled) return;
        target.disabled = true;
        const categoryChangedOrder = currentOrder + modify;
        const updatedCategories = [
            ...userInfo.user.categories
        ];
        const toChangeIndex = updatedCategories.findIndex(({ category_name , order  })=>category_name === currentName && order == currentOrder
        );
        const toSwitchIndex = updatedCategories.findIndex((cat)=>cat.order === categoryChangedOrder
        );
        const oldOrder = updatedCategories[toChangeIndex].order;
        updatedCategories[toChangeIndex].order = categoryChangedOrder;
        updatedCategories[toSwitchIndex].order = oldOrder;
        const updatedUser = {
            ...userInfo.user,
            categories: updatedCategories
        };
        try {
            await updateUser(updatedUser);
            setUserInfo({
                user: updatedUser,
                documents: userInfo.documents
            });
            target.disabled = false;
        } catch (error) {
            console.error(error);
        }
    };
    const changeDocumentOrder = async (target, modify, currentCategory, currentOrder)=>{
        if (target.disabled) return;
        target.disabled = true;
        const documentChangedOrder = currentOrder + modify;
        const updatedCategoryDocuments = [
            ...userInfo.documents.filter(({ category  })=>category === currentCategory
            )
        ];
        const toChangeIndex = updatedCategoryDocuments.findIndex(({ category , order  })=>category === currentCategory && order == currentOrder
        );
        const toSwitchIndex = updatedCategoryDocuments.findIndex((doc)=>doc.order === documentChangedOrder
        );
        const oldOrder = updatedCategoryDocuments[toChangeIndex].order;
        updatedCategoryDocuments[toChangeIndex].order = documentChangedOrder;
        updatedCategoryDocuments[toSwitchIndex].order = oldOrder;
        const updatedDocuments = [
            ...userInfo.documents.filter((doc)=>doc.category !== currentCategory
            ),
            ...updatedCategoryDocuments
        ];
        try {
            await updateDocument(updatedCategoryDocuments[toChangeIndex]);
            await updateDocument(updatedCategoryDocuments[toSwitchIndex]);
            setUserInfo({
                user: userInfo.user,
                documents: updatedDocuments
            });
            target.disabled = false;
        } catch (error) {
            console.error(error);
        }
    };
    return export_default1.createElement("div", {
        className: 'profile-articles container'
    }, !userInfo.isGuest ? export_default1.createElement(export_default1.Fragment, null, export_default1.createElement("div", {
        className: "profile-articles__add-category"
    }, export_default1.createElement("a", {
        className: "btn-floating btn-medium waves-effect waves-light blue dropdown-trigger",
        href: "#",
        "data-target": "dropdownc"
    }, export_default1.createElement("i", {
        className: "material-icons"
    }, "add"))), export_default1.createElement("ul", {
        id: "dropdownc",
        className: "dropdown-content"
    }, export_default1.createElement("li", null, export_default1.createElement("a", {
        onClick: ()=>addEditCategory(undefined)
    }, "Add category")))) : undefined, export_default1.createElement("div", {
        className: 'profile-articles__categories'
    }, userInfo.user.categories.sort((a, b12)=>orderList(a, b12)
    ).map(({ id: category_id , category_name , order , visible  }, index)=>{
        if (userInfo.isGuest && !visible) return;
        return export_default1.createElement("div", {
            className: `profile-articles__category ${visible ? '' : 'profile-articles__category-hidden'}`,
            key: index,
            "data-category": category_name,
            "data-order": `order-${order}`
        }, export_default1.createElement("div", {
            className: "profile-articles__category-header"
        }, export_default1.createElement("div", {
            className: "profile-articles__buttons-group1"
        }, export_default1.createElement("span", {
            className: 'profile-articles__category-name'
        }, category_name), !userInfo.isGuest ? export_default1.createElement(export_default1.Fragment, null, export_default1.createElement("div", {
            className: "profile-articles__order-controls"
        }, index === 0 ? undefined : export_default1.createElement("button", {
            className: "profile-articles__order-button",
            onClick: ({ target  })=>changeCategoryOrder(target, -1, category_name, order)
        }, export_default1.createElement("i", {
            className: "material-icons"
        }, "expand_less")), index === userInfo.user.categories.length - 1 ? undefined : export_default1.createElement("button", {
            className: "profile-articles__order-button",
            onClick: ({ target  })=>changeCategoryOrder(target, 1, category_name, order)
        }, export_default1.createElement("i", {
            className: "material-icons"
        }, "expand_more")))) : undefined), !userInfo.isGuest ? export_default1.createElement(export_default1.Fragment, null, export_default1.createElement("div", {
            className: "profile-articles__buttons-group2"
        }, export_default1.createElement("button", {
            className: "btn-floating btn-small waves-effect waves-light blue dropdown-trigger",
            href: "#",
            "data-target": `dropdown${index}`
        }, export_default1.createElement("i", {
            className: "material-icons"
        }, "add")), export_default1.createElement("button", {
            id: "view-category",
            onClick: ({ target  })=>changeVisibility(target, category_id, visible)
            ,
            className: "btn waves-effect waves-light btn-floating blue btn-small"
        }, export_default1.createElement("i", {
            className: "material-icons right"
        }, `${visible ? 'visibility' : 'visibility_off'}`)), export_default1.createElement("button", {
            id: "delete-category",
            onClick: ({ target  })=>deleteCategoryDocuments(target, category_name, category_id)
            ,
            className: "btn waves-effect waves-light btn-floating red btn-small"
        }, export_default1.createElement("i", {
            className: "material-icons right"
        }, "delete")), export_default1.createElement("button", {
            id: "edit-category",
            onClick: ()=>addEditCategory({
                    id: category_id,
                    category_name,
                    order
                })
            ,
            className: "profile-articles__edit-category btn waves-effect waves-light btn-floating blue btn-small"
        }, export_default1.createElement("i", {
            className: "material-icons right"
        }, "edit"))), " ") : undefined, export_default1.createElement("ul", {
            id: `dropdown${index}`,
            className: "dropdown-content"
        }, export_default1.createElement("li", null, export_default1.createElement("a", {
            onClick: ()=>addDocument1(category_id, selectForm('freedocument'), undefined)
        }, "Add free document")), export_default1.createElement("li", null, export_default1.createElement("a", {
            onClick: ()=>addDocument1(category_id, selectForm('journalarticle'), undefined)
        }, "Add journal article")), export_default1.createElement("li", null, export_default1.createElement("a", {
            onClick: ()=>addDocument1(category_id, selectForm('book'), undefined)
        }, "Add book")), export_default1.createElement("li", null, export_default1.createElement("a", {
            onClick: ()=>addDocument1(category_id, selectForm('bookchapter'), undefined)
        }, "Add book chapter")), export_default1.createElement("li", null, export_default1.createElement("a", {
            onClick: ()=>addDocument1(category_id, selectForm('conferenceproceeding'), undefined)
        }, "Add conference proceeding")), export_default1.createElement("li", null, export_default1.createElement("a", {
            onClick: ()=>addDocument1(category_id, selectForm('thesis'), undefined)
        }, "Add thesis")))), userInfo.documents.filter(({ category  })=>category === category_id
        ).sort((a, b12)=>orderList(a, b12)
        ).map((doc, docIndex)=>{
            return export_default1.createElement("div", {
                className: 'profile-articles__category-document',
                key: JSON.stringify(doc)
            }, export_default1.createElement(DocumentRender, {
                doc: doc
            }), export_default1.createElement("div", {
                className: "profile-articles__buttons-group"
            }, !userInfo.isGuest ? export_default1.createElement("div", {
                className: "profile-articles__buttons-group1"
            }, export_default1.createElement("button", {
                id: "delete-document",
                onClick: ({ target  })=>deleteOneDocument(target, doc._id)
                ,
                className: "btn waves-effect waves-light btn-floating red btn-small"
            }, export_default1.createElement("i", {
                className: "material-icons right"
            }, "delete")), export_default1.createElement("button", {
                id: "edit-document",
                onClick: ()=>addDocument1(category_id, selectForm(doc.type), doc)
                ,
                className: "btn waves-effect waves-light btn-floating blue btn-small"
            }, export_default1.createElement("i", {
                className: "material-icons right"
            }, "edit")), export_default1.createElement("div", {
                className: "profile-articles__order-controls"
            }, docIndex === 0 ? undefined : export_default1.createElement("button", {
                className: "profile-articles__order-button",
                onClick: ({ target  })=>changeDocumentOrder(target, -1, doc.category, doc.order)
            }, export_default1.createElement("i", {
                className: "material-icons"
            }, "expand_less")), docIndex === 0 && userInfo.documents.filter(({ category  })=>category === category_id
            ).length <= 1 || docIndex === userInfo.documents.filter(({ category  })=>category === category_id
            ).length - 1 ? undefined : export_default1.createElement("button", {
                className: "profile-articles__order-button",
                onClick: ({ target  })=>changeDocumentOrder(target, 1, doc.category, doc.order)
            }, export_default1.createElement("i", {
                className: "material-icons"
            }, "expand_more")))) : export_default1.createElement("span", null), doc.can_be_cited ? export_default1.createElement("div", {
                className: "profile-articles__buttons-group2"
            }, export_default1.createElement("a", {
                className: "waves-effect waves-light blue btn",
                onClick: ()=>citate(selectCitation(doc.type), doc)
            }, export_default1.createElement("i", {
                className: "material-icons right"
            }, "book"), "Citate")) : undefined), docIndex === userInfo.documents.filter(({ category  })=>category === category_id
            ).length - 1 ? undefined : export_default1.createElement("div", {
                className: "profile-articles__document-separator"
            }));
        }));
    })), export_default1.createElement(DocumentsModal, {
        show: showModal,
        activeForm: activeForm
    }), export_default1.createElement(CitationModal, {
        show: showCitation,
        activeCitation: activeCitation
    }));
};
const Profile = ({ userInfo  })=>{
    const [profileUserInfo, setUserInfo] = ke(userInfo);
    return export_default1.createElement("div", {
        className: "profile"
    }, export_default1.createElement(Header, {
        userInfo: profileUserInfo,
        setUserInfo: setUserInfo
    }), export_default1.createElement(ProfileDocuments, {
        userInfo: profileUserInfo,
        setUserInfo: setUserInfo
    }), export_default1.createElement(Footer, {
        dynamic: false
    }));
};
const App = ()=>{
    const userInfo = Ce(UserContext);
    return export_default1.createElement(export_default1.Fragment, null, userInfo === 'loading' ? '' : userInfo?.user ? export_default1.createElement(Profile, {
        userInfo: userInfo
    }) : export_default1.createElement(Auth, null));
};
const getGuestInfo = async ()=>{
    try {
        const request = await fetch(`${'https://researcher.zone/'}getguestinfo`, {
            headers: {
                'Content-Type': 'application/json',
                'pathname': window.location.pathname,
                'pragma': 'no-cache',
                'cache-control': 'no-cache'
            }
        });
        const guestInfo = await request.json();
        return guestInfo;
    } catch ({ message  }) {
        console.error(message);
    }
};
if (!window.location.pathname.includes('/user')) {
    export_default3.hydrate(export_default1.createElement(UserInfoContext, null, export_default1.createElement(App, null)), document.getElementById('app'));
} else {
    document.getElementById('app').innerHTML = "Loading...";
    (async ()=>{
        const userInfo = await getGuestInfo();
        export_default3.hydrate(export_default1.createElement(Profile, {
            userInfo: userInfo
        }), document.getElementById('app'));
    })();
}
