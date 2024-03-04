import W, { useRef as Er, useDebugValue as St, createElement as Tr, useContext as xr, useState as ke, useEffect as Cr } from "react";
function Pr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ot = { exports: {} }, _e = { exports: {} }, M = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Et;
function Or() {
  if (Et)
    return M;
  Et = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, k = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
  function S(c) {
    if (typeof c == "object" && c !== null) {
      var E = c.$$typeof;
      switch (E) {
        case t:
          switch (c = c.type, c) {
            case l:
            case h:
            case n:
            case a:
            case o:
            case m:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case u:
                case y:
                case k:
                case g:
                case i:
                  return c;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function T(c) {
    return S(c) === h;
  }
  return M.AsyncMode = l, M.ConcurrentMode = h, M.ContextConsumer = u, M.ContextProvider = i, M.Element = t, M.ForwardRef = y, M.Fragment = n, M.Lazy = k, M.Memo = g, M.Portal = r, M.Profiler = a, M.StrictMode = o, M.Suspense = m, M.isAsyncMode = function(c) {
    return T(c) || S(c) === l;
  }, M.isConcurrentMode = T, M.isContextConsumer = function(c) {
    return S(c) === u;
  }, M.isContextProvider = function(c) {
    return S(c) === i;
  }, M.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === t;
  }, M.isForwardRef = function(c) {
    return S(c) === y;
  }, M.isFragment = function(c) {
    return S(c) === n;
  }, M.isLazy = function(c) {
    return S(c) === k;
  }, M.isMemo = function(c) {
    return S(c) === g;
  }, M.isPortal = function(c) {
    return S(c) === r;
  }, M.isProfiler = function(c) {
    return S(c) === a;
  }, M.isStrictMode = function(c) {
    return S(c) === o;
  }, M.isSuspense = function(c) {
    return S(c) === m;
  }, M.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === h || c === a || c === o || c === m || c === v || typeof c == "object" && c !== null && (c.$$typeof === k || c.$$typeof === g || c.$$typeof === i || c.$$typeof === u || c.$$typeof === y || c.$$typeof === N || c.$$typeof === A || c.$$typeof === j || c.$$typeof === w);
  }, M.typeOf = S, M;
}
var L = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function Rr() {
  return Tt || (Tt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, k = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
    function S(f) {
      return typeof f == "string" || typeof f == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      f === n || f === h || f === a || f === o || f === m || f === v || typeof f == "object" && f !== null && (f.$$typeof === k || f.$$typeof === g || f.$$typeof === i || f.$$typeof === u || f.$$typeof === y || f.$$typeof === N || f.$$typeof === A || f.$$typeof === j || f.$$typeof === w);
    }
    function T(f) {
      if (typeof f == "object" && f !== null) {
        var te = f.$$typeof;
        switch (te) {
          case t:
            var Re = f.type;
            switch (Re) {
              case l:
              case h:
              case n:
              case a:
              case o:
              case m:
                return Re;
              default:
                var wt = Re && Re.$$typeof;
                switch (wt) {
                  case u:
                  case y:
                  case k:
                  case g:
                  case i:
                    return wt;
                  default:
                    return te;
                }
            }
          case r:
            return te;
        }
      }
    }
    var c = l, E = h, p = u, F = i, Y = t, H = y, ee = n, xe = k, he = g, ae = r, Ce = a, K = o, J = m, se = !1;
    function X(f) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), s(f) || T(f) === l;
    }
    function s(f) {
      return T(f) === h;
    }
    function d(f) {
      return T(f) === u;
    }
    function b(f) {
      return T(f) === i;
    }
    function O(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function x(f) {
      return T(f) === y;
    }
    function I(f) {
      return T(f) === n;
    }
    function C(f) {
      return T(f) === k;
    }
    function P(f) {
      return T(f) === g;
    }
    function _(f) {
      return T(f) === r;
    }
    function $(f) {
      return T(f) === a;
    }
    function D(f) {
      return T(f) === o;
    }
    function V(f) {
      return T(f) === m;
    }
    L.AsyncMode = c, L.ConcurrentMode = E, L.ContextConsumer = p, L.ContextProvider = F, L.Element = Y, L.ForwardRef = H, L.Fragment = ee, L.Lazy = xe, L.Memo = he, L.Portal = ae, L.Profiler = Ce, L.StrictMode = K, L.Suspense = J, L.isAsyncMode = X, L.isConcurrentMode = s, L.isContextConsumer = d, L.isContextProvider = b, L.isElement = O, L.isForwardRef = x, L.isFragment = I, L.isLazy = C, L.isMemo = P, L.isPortal = _, L.isProfiler = $, L.isStrictMode = D, L.isSuspense = V, L.isValidElementType = S, L.typeOf = T;
  }()), L;
}
var xt;
function Kt() {
  return xt || (xt = 1, process.env.NODE_ENV === "production" ? _e.exports = Or() : _e.exports = Rr()), _e.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ge, Ct;
function kr() {
  if (Ct)
    return Ge;
  Ct = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var i = {}, u = 0; u < 10; u++)
        i["_" + String.fromCharCode(u)] = u;
      var l = Object.getOwnPropertyNames(i).map(function(y) {
        return i[y];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(y) {
        h[y] = y;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ge = o() ? Object.assign : function(a, i) {
    for (var u, l = n(a), h, y = 1; y < arguments.length; y++) {
      u = Object(arguments[y]);
      for (var m in u)
        t.call(u, m) && (l[m] = u[m]);
      if (e) {
        h = e(u);
        for (var v = 0; v < h.length; v++)
          r.call(u, h[v]) && (l[h[v]] = u[h[v]]);
      }
    }
    return l;
  }, Ge;
}
var Xe, Pt;
function dt() {
  if (Pt)
    return Xe;
  Pt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Xe = e, Xe;
}
var Ke, Ot;
function Zt() {
  return Ot || (Ot = 1, Ke = Function.call.bind(Object.prototype.hasOwnProperty)), Ke;
}
var Ze, Rt;
function _r() {
  if (Rt)
    return Ze;
  Rt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = dt(), r = {}, n = Zt();
    e = function(a) {
      var i = "Warning: " + a;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(a, i, u, l, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var y in a)
        if (n(a, y)) {
          var m;
          try {
            if (typeof a[y] != "function") {
              var v = Error(
                (l || "React class") + ": " + u + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            m = a[y](i, y, l, u, null, t);
          } catch (k) {
            m = k;
          }
          if (m && !(m instanceof Error) && e(
            (l || "React class") + ": type specification of " + u + " `" + y + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var g = h ? h() : "";
            e(
              "Failed " + u + " type: " + m.message + (g ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ze = o, Ze;
}
var Je, kt;
function Ar() {
  if (kt)
    return Je;
  kt = 1;
  var e = Kt(), t = kr(), r = dt(), n = Zt(), o = _r(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(u) {
    var l = "Warning: " + u;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return Je = function(u, l) {
    var h = typeof Symbol == "function" && Symbol.iterator, y = "@@iterator";
    function m(s) {
      var d = s && (h && s[h] || s[y]);
      if (typeof d == "function")
        return d;
    }
    var v = "<<anonymous>>", g = {
      array: A("array"),
      bigint: A("bigint"),
      bool: A("boolean"),
      func: A("function"),
      number: A("number"),
      object: A("object"),
      string: A("string"),
      symbol: A("symbol"),
      any: j(),
      arrayOf: S,
      element: T(),
      elementType: c(),
      instanceOf: E,
      node: H(),
      objectOf: F,
      oneOf: p,
      oneOfType: Y,
      shape: xe,
      exact: he
    };
    function k(s, d) {
      return s === d ? s !== 0 || 1 / s === 1 / d : s !== s && d !== d;
    }
    function w(s, d) {
      this.message = s, this.data = d && typeof d == "object" ? d : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function N(s) {
      if (process.env.NODE_ENV !== "production")
        var d = {}, b = 0;
      function O(I, C, P, _, $, D, V) {
        if (_ = _ || v, D = D || P, V !== r) {
          if (l) {
            var f = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw f.name = "Invariant Violation", f;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var te = _ + ":" + P;
            !d[te] && // Avoid spamming the console because they are often not actionable except for lib authors
            b < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + D + "` prop on `" + _ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), d[te] = !0, b++);
          }
        }
        return C[P] == null ? I ? C[P] === null ? new w("The " + $ + " `" + D + "` is marked as required " + ("in `" + _ + "`, but its value is `null`.")) : new w("The " + $ + " `" + D + "` is marked as required in " + ("`" + _ + "`, but its value is `undefined`.")) : null : s(C, P, _, $, D);
      }
      var x = O.bind(null, !1);
      return x.isRequired = O.bind(null, !0), x;
    }
    function A(s) {
      function d(b, O, x, I, C, P) {
        var _ = b[O], $ = K(_);
        if ($ !== s) {
          var D = J(_);
          return new w(
            "Invalid " + I + " `" + C + "` of type " + ("`" + D + "` supplied to `" + x + "`, expected ") + ("`" + s + "`."),
            { expectedType: s }
          );
        }
        return null;
      }
      return N(d);
    }
    function j() {
      return N(i);
    }
    function S(s) {
      function d(b, O, x, I, C) {
        if (typeof s != "function")
          return new w("Property `" + C + "` of component `" + x + "` has invalid PropType notation inside arrayOf.");
        var P = b[O];
        if (!Array.isArray(P)) {
          var _ = K(P);
          return new w("Invalid " + I + " `" + C + "` of type " + ("`" + _ + "` supplied to `" + x + "`, expected an array."));
        }
        for (var $ = 0; $ < P.length; $++) {
          var D = s(P, $, x, I, C + "[" + $ + "]", r);
          if (D instanceof Error)
            return D;
        }
        return null;
      }
      return N(d);
    }
    function T() {
      function s(d, b, O, x, I) {
        var C = d[b];
        if (!u(C)) {
          var P = K(C);
          return new w("Invalid " + x + " `" + I + "` of type " + ("`" + P + "` supplied to `" + O + "`, expected a single ReactElement."));
        }
        return null;
      }
      return N(s);
    }
    function c() {
      function s(d, b, O, x, I) {
        var C = d[b];
        if (!e.isValidElementType(C)) {
          var P = K(C);
          return new w("Invalid " + x + " `" + I + "` of type " + ("`" + P + "` supplied to `" + O + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return N(s);
    }
    function E(s) {
      function d(b, O, x, I, C) {
        if (!(b[O] instanceof s)) {
          var P = s.name || v, _ = X(b[O]);
          return new w("Invalid " + I + " `" + C + "` of type " + ("`" + _ + "` supplied to `" + x + "`, expected ") + ("instance of `" + P + "`."));
        }
        return null;
      }
      return N(d);
    }
    function p(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function d(b, O, x, I, C) {
        for (var P = b[O], _ = 0; _ < s.length; _++)
          if (k(P, s[_]))
            return null;
        var $ = JSON.stringify(s, function(V, f) {
          var te = J(f);
          return te === "symbol" ? String(f) : f;
        });
        return new w("Invalid " + I + " `" + C + "` of value `" + String(P) + "` " + ("supplied to `" + x + "`, expected one of " + $ + "."));
      }
      return N(d);
    }
    function F(s) {
      function d(b, O, x, I, C) {
        if (typeof s != "function")
          return new w("Property `" + C + "` of component `" + x + "` has invalid PropType notation inside objectOf.");
        var P = b[O], _ = K(P);
        if (_ !== "object")
          return new w("Invalid " + I + " `" + C + "` of type " + ("`" + _ + "` supplied to `" + x + "`, expected an object."));
        for (var $ in P)
          if (n(P, $)) {
            var D = s(P, $, x, I, C + "." + $, r);
            if (D instanceof Error)
              return D;
          }
        return null;
      }
      return N(d);
    }
    function Y(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var d = 0; d < s.length; d++) {
        var b = s[d];
        if (typeof b != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(b) + " at index " + d + "."
          ), i;
      }
      function O(x, I, C, P, _) {
        for (var $ = [], D = 0; D < s.length; D++) {
          var V = s[D], f = V(x, I, C, P, _, r);
          if (f == null)
            return null;
          f.data && n(f.data, "expectedType") && $.push(f.data.expectedType);
        }
        var te = $.length > 0 ? ", expected one of type [" + $.join(", ") + "]" : "";
        return new w("Invalid " + P + " `" + _ + "` supplied to " + ("`" + C + "`" + te + "."));
      }
      return N(O);
    }
    function H() {
      function s(d, b, O, x, I) {
        return ae(d[b]) ? null : new w("Invalid " + x + " `" + I + "` supplied to " + ("`" + O + "`, expected a ReactNode."));
      }
      return N(s);
    }
    function ee(s, d, b, O, x) {
      return new w(
        (s || "React class") + ": " + d + " type `" + b + "." + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + x + "`."
      );
    }
    function xe(s) {
      function d(b, O, x, I, C) {
        var P = b[O], _ = K(P);
        if (_ !== "object")
          return new w("Invalid " + I + " `" + C + "` of type `" + _ + "` " + ("supplied to `" + x + "`, expected `object`."));
        for (var $ in s) {
          var D = s[$];
          if (typeof D != "function")
            return ee(x, I, C, $, J(D));
          var V = D(P, $, x, I, C + "." + $, r);
          if (V)
            return V;
        }
        return null;
      }
      return N(d);
    }
    function he(s) {
      function d(b, O, x, I, C) {
        var P = b[O], _ = K(P);
        if (_ !== "object")
          return new w("Invalid " + I + " `" + C + "` of type `" + _ + "` " + ("supplied to `" + x + "`, expected `object`."));
        var $ = t({}, b[O], s);
        for (var D in $) {
          var V = s[D];
          if (n(s, D) && typeof V != "function")
            return ee(x, I, C, D, J(V));
          if (!V)
            return new w(
              "Invalid " + I + " `" + C + "` key `" + D + "` supplied to `" + x + "`.\nBad object: " + JSON.stringify(b[O], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(s), null, "  ")
            );
          var f = V(P, D, x, I, C + "." + D, r);
          if (f)
            return f;
        }
        return null;
      }
      return N(d);
    }
    function ae(s) {
      switch (typeof s) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !s;
        case "object":
          if (Array.isArray(s))
            return s.every(ae);
          if (s === null || u(s))
            return !0;
          var d = m(s);
          if (d) {
            var b = d.call(s), O;
            if (d !== s.entries) {
              for (; !(O = b.next()).done; )
                if (!ae(O.value))
                  return !1;
            } else
              for (; !(O = b.next()).done; ) {
                var x = O.value;
                if (x && !ae(x[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Ce(s, d) {
      return s === "symbol" ? !0 : d ? d["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && d instanceof Symbol : !1;
    }
    function K(s) {
      var d = typeof s;
      return Array.isArray(s) ? "array" : s instanceof RegExp ? "object" : Ce(d, s) ? "symbol" : d;
    }
    function J(s) {
      if (typeof s > "u" || s === null)
        return "" + s;
      var d = K(s);
      if (d === "object") {
        if (s instanceof Date)
          return "date";
        if (s instanceof RegExp)
          return "regexp";
      }
      return d;
    }
    function se(s) {
      var d = J(s);
      switch (d) {
        case "array":
        case "object":
          return "an " + d;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + d;
        default:
          return d;
      }
    }
    function X(s) {
      return !s.constructor || !s.constructor.name ? v : s.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, Je;
}
var Qe, _t;
function Ir() {
  if (_t)
    return Qe;
  _t = 1;
  var e = dt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Qe = function() {
    function n(i, u, l, h, y, m) {
      if (m !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Qe;
}
if (process.env.NODE_ENV !== "production") {
  var $r = Kt(), Dr = !0;
  ot.exports = Ar()($r.isElement, Dr);
} else
  ot.exports = Ir()();
var Nr = ot.exports;
const ce = /* @__PURE__ */ Pr(Nr);
var G = function() {
  return G = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, G.apply(this, arguments);
};
function me(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, a; n < o; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function jr(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Mr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Lr = /* @__PURE__ */ jr(
  function(e) {
    return Mr.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), q = "-ms-", Oe = "-moz-", z = "-webkit-", Jt = "comm", Ye = "rule", ht = "decl", zr = "@import", Qt = "@keyframes", qr = "@layer", er = Math.abs, yt = String.fromCharCode, at = Object.assign;
function Fr(e, t) {
  return U(e, 0) ^ 45 ? (((t << 2 ^ U(e, 0)) << 2 ^ U(e, 1)) << 2 ^ U(e, 2)) << 2 ^ U(e, 3) : 0;
}
function tr(e) {
  return e.trim();
}
function ne(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function R(e, t, r) {
  return e.replace(t, r);
}
function Ne(e, t, r) {
  return e.indexOf(t, r);
}
function U(e, t) {
  return e.charCodeAt(t) | 0;
}
function ge(e, t, r) {
  return e.slice(t, r);
}
function re(e) {
  return e.length;
}
function rr(e) {
  return e.length;
}
function Pe(e, t) {
  return t.push(e), e;
}
function Yr(e, t) {
  return e.map(t).join("");
}
function At(e, t) {
  return e.filter(function(r) {
    return !ne(r, t);
  });
}
var We = 1, ve = 1, nr = 0, Z = 0, B = 0, Ee = "";
function Be(e, t, r, n, o, a, i, u) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: We, column: ve, length: i, return: "", siblings: u };
}
function ie(e, t) {
  return at(Be("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function ye(e) {
  for (; e.root; )
    e = ie(e.root, { children: [e] });
  Pe(e, e.siblings);
}
function Wr() {
  return B;
}
function Br() {
  return B = Z > 0 ? U(Ee, --Z) : 0, ve--, B === 10 && (ve = 1, We--), B;
}
function Q() {
  return B = Z < nr ? U(Ee, Z++) : 0, ve++, B === 10 && (ve = 1, We++), B;
}
function fe() {
  return U(Ee, Z);
}
function je() {
  return Z;
}
function Ve(e, t) {
  return ge(Ee, e, t);
}
function it(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Vr(e) {
  return We = ve = 1, nr = re(Ee = e), Z = 0, [];
}
function Ur(e) {
  return Ee = "", e;
}
function et(e) {
  return tr(Ve(Z - 1, st(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Hr(e) {
  for (; (B = fe()) && B < 33; )
    Q();
  return it(e) > 2 || it(B) > 3 ? "" : " ";
}
function Gr(e, t) {
  for (; --t && Q() && !(B < 48 || B > 102 || B > 57 && B < 65 || B > 70 && B < 97); )
    ;
  return Ve(e, je() + (t < 6 && fe() == 32 && Q() == 32));
}
function st(e) {
  for (; Q(); )
    switch (B) {
      case e:
        return Z;
      case 34:
      case 39:
        e !== 34 && e !== 39 && st(B);
        break;
      case 40:
        e === 41 && st(e);
        break;
      case 92:
        Q();
        break;
    }
  return Z;
}
function Xr(e, t) {
  for (; Q() && e + B !== 57; )
    if (e + B === 84 && fe() === 47)
      break;
  return "/*" + Ve(t, Z - 1) + "*" + yt(e === 47 ? e : Q());
}
function Kr(e) {
  for (; !it(fe()); )
    Q();
  return Ve(e, Z);
}
function Zr(e) {
  return Ur(Me("", null, null, null, [""], e = Vr(e), 0, [0], e));
}
function Me(e, t, r, n, o, a, i, u, l) {
  for (var h = 0, y = 0, m = i, v = 0, g = 0, k = 0, w = 1, N = 1, A = 1, j = 0, S = "", T = o, c = a, E = n, p = S; N; )
    switch (k = j, j = Q()) {
      case 40:
        if (k != 108 && U(p, m - 1) == 58) {
          Ne(p += R(et(j), "&", "&\f"), "&\f", er(h ? u[h - 1] : 0)) != -1 && (A = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        p += et(j);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        p += Hr(k);
        break;
      case 92:
        p += Gr(je() - 1, 7);
        continue;
      case 47:
        switch (fe()) {
          case 42:
          case 47:
            Pe(Jr(Xr(Q(), je()), t, r, l), l);
            break;
          default:
            p += "/";
        }
        break;
      case 123 * w:
        u[h++] = re(p) * A;
      case 125 * w:
      case 59:
      case 0:
        switch (j) {
          case 0:
          case 125:
            N = 0;
          case 59 + y:
            A == -1 && (p = R(p, /\f/g, "")), g > 0 && re(p) - m && Pe(g > 32 ? $t(p + ";", n, r, m - 1, l) : $t(R(p, " ", "") + ";", n, r, m - 2, l), l);
            break;
          case 59:
            p += ";";
          default:
            if (Pe(E = It(p, t, r, h, y, o, u, S, T = [], c = [], m, a), a), j === 123)
              if (y === 0)
                Me(p, t, E, E, T, a, m, u, c);
              else
                switch (v === 99 && U(p, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Me(e, E, E, n && Pe(It(e, E, E, 0, 0, o, u, S, o, T = [], m, c), c), o, c, m, u, n ? T : c);
                    break;
                  default:
                    Me(p, E, E, E, [""], c, 0, u, c);
                }
        }
        h = y = g = 0, w = A = 1, S = p = "", m = i;
        break;
      case 58:
        m = 1 + re(p), g = k;
      default:
        if (w < 1) {
          if (j == 123)
            --w;
          else if (j == 125 && w++ == 0 && Br() == 125)
            continue;
        }
        switch (p += yt(j), j * w) {
          case 38:
            A = y > 0 ? 1 : (p += "\f", -1);
            break;
          case 44:
            u[h++] = (re(p) - 1) * A, A = 1;
            break;
          case 64:
            fe() === 45 && (p += et(Q())), v = fe(), y = m = re(S = p += Kr(je())), j++;
            break;
          case 45:
            k === 45 && re(p) == 2 && (w = 0);
        }
    }
  return a;
}
function It(e, t, r, n, o, a, i, u, l, h, y, m) {
  for (var v = o - 1, g = o === 0 ? a : [""], k = rr(g), w = 0, N = 0, A = 0; w < n; ++w)
    for (var j = 0, S = ge(e, v + 1, v = er(N = i[w])), T = e; j < k; ++j)
      (T = tr(N > 0 ? g[j] + " " + S : R(S, /&\f/g, g[j]))) && (l[A++] = T);
  return Be(e, t, r, o === 0 ? Ye : u, l, h, y, m);
}
function Jr(e, t, r, n) {
  return Be(e, t, r, Jt, yt(Wr()), ge(e, 2, -2), 0, n);
}
function $t(e, t, r, n, o) {
  return Be(e, t, r, ht, ge(e, 0, n), ge(e, n + 1, -1), n, o);
}
function or(e, t, r) {
  switch (Fr(e, t)) {
    case 5103:
      return z + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return z + e + e;
    case 4789:
      return Oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return z + e + Oe + e + q + e + e;
    case 5936:
      switch (U(e, t + 11)) {
        case 114:
          return z + e + q + R(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return z + e + q + R(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return z + e + q + R(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return z + e + q + e + e;
    case 6165:
      return z + e + q + "flex-" + e + e;
    case 5187:
      return z + e + R(e, /(\w+).+(:[^]+)/, z + "box-$1$2" + q + "flex-$1$2") + e;
    case 5443:
      return z + e + q + "flex-item-" + R(e, /flex-|-self/g, "") + (ne(e, /flex-|baseline/) ? "" : q + "grid-row-" + R(e, /flex-|-self/g, "")) + e;
    case 4675:
      return z + e + q + "flex-line-pack" + R(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return z + e + q + R(e, "shrink", "negative") + e;
    case 5292:
      return z + e + q + R(e, "basis", "preferred-size") + e;
    case 6060:
      return z + "box-" + R(e, "-grow", "") + z + e + q + R(e, "grow", "positive") + e;
    case 4554:
      return z + R(e, /([^-])(transform)/g, "$1" + z + "$2") + e;
    case 6187:
      return R(R(R(e, /(zoom-|grab)/, z + "$1"), /(image-set)/, z + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return R(e, /(image-set\([^]*)/, z + "$1$`$1");
    case 4968:
      return R(R(e, /(.+:)(flex-)?(.*)/, z + "box-pack:$3" + q + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + z + e + e;
    case 4200:
      if (!ne(e, /flex-|baseline/))
        return q + "grid-column-align" + ge(e, t) + e;
      break;
    case 2592:
    case 3360:
      return q + R(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, ne(n.props, /grid-\w+-end/);
      }) ? ~Ne(e + (r = r[t].value), "span", 0) ? e : q + R(e, "-start", "") + e + q + "grid-row-span:" + (~Ne(r, "span", 0) ? ne(r, /\d+/) : +ne(r, /\d+/) - +ne(e, /\d+/)) + ";" : q + R(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return ne(n.props, /grid-\w+-start/);
      }) ? e : q + R(R(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return R(e, /(.+)-inline(.+)/, z + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (re(e) - 1 - t > 6)
        switch (U(e, t + 1)) {
          case 109:
            if (U(e, t + 4) !== 45)
              break;
          case 102:
            return R(e, /(.+:)(.+)-([^]+)/, "$1" + z + "$2-$3$1" + Oe + (U(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ne(e, "stretch", 0) ? or(R(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return R(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, a, i, u, l, h) {
        return q + o + ":" + a + h + (i ? q + o + "-span:" + (u ? l : +l - +a) + h : "") + e;
      });
    case 4949:
      if (U(e, t + 6) === 121)
        return R(e, ":", ":" + z) + e;
      break;
    case 6444:
      switch (U(e, U(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return R(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + z + (U(e, 14) === 45 ? "inline-" : "") + "box$3$1" + z + "$2$3$1" + q + "$2box$3") + e;
        case 100:
          return R(e, ":", ":" + q) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return R(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function qe(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Qr(e, t, r, n) {
  switch (e.type) {
    case qr:
      if (e.children.length)
        break;
    case zr:
    case ht:
      return e.return = e.return || e.value;
    case Jt:
      return "";
    case Qt:
      return e.return = e.value + "{" + qe(e.children, n) + "}";
    case Ye:
      if (!re(e.value = e.props.join(",")))
        return "";
  }
  return re(r = qe(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function en(e) {
  var t = rr(e);
  return function(r, n, o, a) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](r, n, o, a) || "";
    return i;
  };
}
function tn(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function rn(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case ht:
        e.return = or(e.value, e.length, r);
        return;
      case Qt:
        return qe([ie(e, { value: R(e.value, "@", "@" + z) })], n);
      case Ye:
        if (e.length)
          return Yr(r = e.props, function(o) {
            switch (ne(o, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ye(ie(e, { props: [R(o, /:(read-\w+)/, ":" + Oe + "$1")] })), ye(ie(e, { props: [o] })), at(e, { props: At(r, n) });
                break;
              case "::placeholder":
                ye(ie(e, { props: [R(o, /:(plac\w+)/, ":" + z + "input-$1")] })), ye(ie(e, { props: [R(o, /:(plac\w+)/, ":" + Oe + "$1")] })), ye(ie(e, { props: [R(o, /:(plac\w+)/, q + "input-$1")] })), ye(ie(e, { props: [o] })), at(e, { props: At(r, n) });
                break;
            }
            return "";
          });
    }
}
var nn = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, de = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", ar = "active", ir = "data-styled-version", Ue = "6.1.8", mt = `/*!sc*/
`, gt = typeof window < "u" && "HTMLElement" in window, on = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Dt = /invalid hook call/i, Ae = /* @__PURE__ */ new Set(), an = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var a = !0;
      console.error = function(i) {
        for (var u = [], l = 1; l < arguments.length; l++)
          u[l - 1] = arguments[l];
        Dt.test(i) ? (a = !1, Ae.delete(n)) : o.apply(void 0, me([i], u, !1));
      }, Er(), a && !Ae.has(n) && (console.warn(n), Ae.add(n));
    } catch (i) {
      Dt.test(i.message) && Ae.delete(n);
    } finally {
      console.error = o;
    }
  }
}, He = Object.freeze([]), be = Object.freeze({});
function sn(e, t, r) {
  return r === void 0 && (r = be), e.theme !== r.theme && e.theme || t || r.theme;
}
var ct = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), cn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, un = /(^-|-$)/g;
function Nt(e) {
  return e.replace(cn, "-").replace(un, "");
}
var ln = /(a)(d)/gi, Ie = 52, jt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ut(e) {
  var t, r = "";
  for (t = Math.abs(e); t > Ie; t = t / Ie | 0)
    r = jt(t % Ie) + r;
  return (jt(t % Ie) + r).replace(ln, "$1-$2");
}
var tt, sr = 5381, ue = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, cr = function(e) {
  return ue(sr, e);
};
function fn(e) {
  return ut(cr(e) >>> 0);
}
function ur(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function rt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var lr = typeof Symbol == "function" && Symbol.for, fr = lr ? Symbol.for("react.memo") : 60115, pn = lr ? Symbol.for("react.forward_ref") : 60112, dn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, hn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, pr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, yn = ((tt = {})[pn] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, tt[fr] = pr, tt);
function Mt(e) {
  return ("type" in (t = e) && t.type.$$typeof) === fr ? pr : "$$typeof" in e ? yn[e.$$typeof] : dn;
  var t;
}
var mn = Object.defineProperty, gn = Object.getOwnPropertyNames, Lt = Object.getOwnPropertySymbols, vn = Object.getOwnPropertyDescriptor, bn = Object.getPrototypeOf, zt = Object.prototype;
function dr(e, t, r) {
  if (typeof t != "string") {
    if (zt) {
      var n = bn(t);
      n && n !== zt && dr(e, n, r);
    }
    var o = gn(t);
    Lt && (o = o.concat(Lt(t)));
    for (var a = Mt(e), i = Mt(t), u = 0; u < o.length; ++u) {
      var l = o[u];
      if (!(l in hn || r && r[l] || i && l in i || a && l in a)) {
        var h = vn(t, l);
        try {
          mn(e, l, h);
        } catch {
        }
      }
    }
  }
  return e;
}
function we(e) {
  return typeof e == "function";
}
function vt(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function le(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function qt(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], n = 1; n < e.length; n++)
    r += t ? t + e[n] : e[n];
  return r;
}
function Se(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function lt(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Se(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      e[n] = lt(e[n], t[n]);
  else if (Se(t))
    for (var n in t)
      e[n] = lt(e[n], t[n]);
  return e;
}
function bt(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var wn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Sn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], n = [], o = 1, a = e.length; o < a; o += 1)
    n.push(e[o]);
  return n.forEach(function(i) {
    r = r.replace(/%[a-z]/, i);
  }), r;
}
function Te(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Sn.apply(void 0, me([wn[e]], t, !1)).trim());
}
var En = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++)
      r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, a = o; t >= a; )
        if ((a <<= 1) < 0)
          throw Te(16, "".concat(t));
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(n), this.length = a;
      for (var i = o; i < a; i++)
        this.groupSizes[i] = 0;
    }
    for (var u = this.indexOfGroup(t + 1), l = (i = 0, r.length); i < l; i++)
      this.tag.insertRule(u, r[i]) && (this.groupSizes[t]++, u++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), o = n + r;
      this.groupSizes[t] = 0;
      for (var a = n; a < o; a++)
        this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var n = this.groupSizes[t], o = this.indexOfGroup(t), a = o + n, i = o; i < a; i++)
      r += "".concat(this.tag.getRule(i)).concat(mt);
    return r;
  }, e;
}(), Le = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map(), ze = 1, $e = function(e) {
  if (Le.has(e))
    return Le.get(e);
  for (; Fe.has(ze); )
    ze++;
  var t = ze++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw Te(16, "".concat(t));
  return Le.set(e, t), Fe.set(t, e), t;
}, Tn = function(e, t) {
  ze = t + 1, Le.set(e, t), Fe.set(t, e);
}, xn = "style[".concat(de, "][").concat(ir, '="').concat(Ue, '"]'), Cn = new RegExp("^".concat(de, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Pn = function(e, t, r) {
  for (var n, o = r.split(","), a = 0, i = o.length; a < i; a++)
    (n = o[a]) && e.registerName(t, n);
}, On = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(mt), o = [], a = 0, i = n.length; a < i; a++) {
    var u = n[a].trim();
    if (u) {
      var l = u.match(Cn);
      if (l) {
        var h = 0 | parseInt(l[1], 10), y = l[2];
        h !== 0 && (Tn(y, h), Pn(e, y, l[3]), e.getTag().insertRules(h, o)), o.length = 0;
      } else
        o.push(u);
    }
  }
};
function Rn() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var hr = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(u) {
    var l = Array.from(u.querySelectorAll("style[".concat(de, "]")));
    return l[l.length - 1];
  }(r), a = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(de, ar), n.setAttribute(ir, Ue);
  var i = Rn();
  return i && n.setAttribute("nonce", i), r.insertBefore(n, a), n;
}, kn = function() {
  function e(t) {
    this.element = hr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var n = document.styleSheets, o = 0, a = n.length; o < a; o++) {
        var i = n[o];
        if (i.ownerNode === r)
          return i;
      }
      throw Te(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), _n = function() {
  function e(t) {
    this.element = hr(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), An = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Ft = gt, In = { isServer: !gt, useCSSOMInjection: !on }, yr = function() {
  function e(t, r, n) {
    t === void 0 && (t = be), r === void 0 && (r = {});
    var o = this;
    this.options = G(G({}, In), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && gt && Ft && (Ft = !1, function(a) {
      for (var i = document.querySelectorAll(xn), u = 0, l = i.length; u < l; u++) {
        var h = i[u];
        h && h.getAttribute(de) !== ar && (On(a, h), h.parentNode && h.parentNode.removeChild(h));
      }
    }(this)), bt(this, function() {
      return function(a) {
        for (var i = a.getTag(), u = i.length, l = "", h = function(m) {
          var v = function(A) {
            return Fe.get(A);
          }(m);
          if (v === void 0)
            return "continue";
          var g = a.names.get(v), k = i.getGroup(m);
          if (g === void 0 || k.length === 0)
            return "continue";
          var w = "".concat(de, ".g").concat(m, '[id="').concat(v, '"]'), N = "";
          g !== void 0 && g.forEach(function(A) {
            A.length > 0 && (N += "".concat(A, ","));
          }), l += "".concat(k).concat(w, '{content:"').concat(N, '"}').concat(mt);
        }, y = 0; y < u; y++)
          h(y);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return $e(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(G(G({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new An(o) : n ? new kn(o) : new _n(o);
    }(this.options), new En(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if ($e(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules($e(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup($e(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), $n = /&/g, Dn = /^\s*\/\/.*$/gm;
function mr(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = mr(r.children, t)), r;
  });
}
function Nn(e) {
  var t, r, n, o = e === void 0 ? be : e, a = o.options, i = a === void 0 ? be : a, u = o.plugins, l = u === void 0 ? He : u, h = function(v, g, k) {
    return k.startsWith(r) && k.endsWith(r) && k.replaceAll(r, "").length > 0 ? ".".concat(t) : v;
  }, y = l.slice();
  y.push(function(v) {
    v.type === Ye && v.value.includes("&") && (v.props[0] = v.props[0].replace($n, r).replace(n, h));
  }), i.prefix && y.push(rn), y.push(Qr);
  var m = function(v, g, k, w) {
    g === void 0 && (g = ""), k === void 0 && (k = ""), w === void 0 && (w = "&"), t = w, r = g, n = new RegExp("\\".concat(r, "\\b"), "g");
    var N = v.replace(Dn, ""), A = Zr(k || g ? "".concat(k, " ").concat(g, " { ").concat(N, " }") : N);
    i.namespace && (A = mr(A, i.namespace));
    var j = [];
    return qe(A, en(y.concat(tn(function(S) {
      return j.push(S);
    })))), j;
  };
  return m.hash = l.length ? l.reduce(function(v, g) {
    return g.name || Te(15), ue(v, g.name);
  }, sr).toString() : "", m;
}
var jn = new yr(), ft = Nn(), gr = W.createContext({ shouldForwardProp: void 0, styleSheet: jn, stylis: ft });
gr.Consumer;
W.createContext(void 0);
function Yt() {
  return xr(gr);
}
var Wt = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, a) {
      a === void 0 && (a = ft);
      var i = n.name + a.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, a(n.rules, i, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, bt(this, function() {
      throw Te(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ft), this.name + t.hash;
  }, e;
}(), Mn = function(e) {
  return e >= "A" && e <= "Z";
};
function Bt(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-")
      return e;
    Mn(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var vr = function(e) {
  return e == null || e === !1 || e === "";
}, br = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var a = e[o];
    e.hasOwnProperty(o) && !vr(a) && (Array.isArray(a) && a.isCss || we(a) ? n.push("".concat(Bt(o), ":"), a, ";") : Se(a) ? n.push.apply(n, me(me(["".concat(o, " {")], br(a), !1), ["}"], !1)) : n.push("".concat(Bt(o), ": ").concat((t = o, (r = a) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in nn || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function pe(e, t, r, n) {
  if (vr(e))
    return [];
  if (vt(e))
    return [".".concat(e.styledComponentId)];
  if (we(e)) {
    if (!we(a = e) || a.prototype && a.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Wt || Se(o) || o === null || console.error("".concat(ur(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), pe(o, t, r, n);
  }
  var a;
  return e instanceof Wt ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : Se(e) ? br(e) : Array.isArray(e) ? Array.prototype.concat.apply(He, e.map(function(i) {
    return pe(i, t, r, n);
  })) : [e.toString()];
}
function Ln(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (we(r) && !vt(r))
      return !1;
  }
  return !0;
}
var zn = cr(Ue), qn = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Ln(t), this.componentId = r, this.baseHash = ue(zn, r), this.baseStyle = n, yr.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        o = le(o, this.staticRulesId);
      else {
        var a = qt(pe(this.rules, t, r, n)), i = ut(ue(this.baseHash, a) >>> 0);
        if (!r.hasNameForId(this.componentId, i)) {
          var u = n(a, ".".concat(i), void 0, this.componentId);
          r.insertRules(this.componentId, i, u);
        }
        o = le(o, i), this.staticRulesId = i;
      }
    else {
      for (var l = ue(this.baseHash, n.hash), h = "", y = 0; y < this.rules.length; y++) {
        var m = this.rules[y];
        if (typeof m == "string")
          h += m, process.env.NODE_ENV !== "production" && (l = ue(l, m));
        else if (m) {
          var v = qt(pe(m, t, r, n));
          l = ue(l, v + y), h += v;
        }
      }
      if (h) {
        var g = ut(l >>> 0);
        r.hasNameForId(this.componentId, g) || r.insertRules(this.componentId, g, n(h, ".".concat(g), void 0, this.componentId)), o = le(o, g);
      }
    }
    return o;
  }, e;
}(), wr = W.createContext(void 0);
wr.Consumer;
var nt = {}, Vt = /* @__PURE__ */ new Set();
function Fn(e, t, r) {
  var n = vt(e), o = e, a = !rt(e), i = t.attrs, u = i === void 0 ? He : i, l = t.componentId, h = l === void 0 ? function(T, c) {
    var E = typeof T != "string" ? "sc" : Nt(T);
    nt[E] = (nt[E] || 0) + 1;
    var p = "".concat(E, "-").concat(fn(Ue + E + nt[E]));
    return c ? "".concat(c, "-").concat(p) : p;
  }(t.displayName, t.parentComponentId) : l, y = t.displayName, m = y === void 0 ? function(T) {
    return rt(T) ? "styled.".concat(T) : "Styled(".concat(ur(T), ")");
  }(e) : y, v = t.displayName && t.componentId ? "".concat(Nt(t.displayName), "-").concat(t.componentId) : t.componentId || h, g = n && o.attrs ? o.attrs.concat(u).filter(Boolean) : u, k = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var w = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var N = t.shouldForwardProp;
      k = function(T, c) {
        return w(T, c) && N(T, c);
      };
    } else
      k = w;
  }
  var A = new qn(r, v, n ? o.componentStyle : void 0);
  function j(T, c) {
    return function(E, p, F) {
      var Y = E.attrs, H = E.componentStyle, ee = E.defaultProps, xe = E.foldedComponentIds, he = E.styledComponentId, ae = E.target, Ce = W.useContext(wr), K = Yt(), J = E.shouldForwardProp || K.shouldForwardProp;
      process.env.NODE_ENV !== "production" && St(he);
      var se = sn(p, Ce, ee) || be, X = function(I, C, P) {
        for (var _, $ = G(G({}, C), { className: void 0, theme: P }), D = 0; D < I.length; D += 1) {
          var V = we(_ = I[D]) ? _($) : _;
          for (var f in V)
            $[f] = f === "className" ? le($[f], V[f]) : f === "style" ? G(G({}, $[f]), V[f]) : V[f];
        }
        return C.className && ($.className = le($.className, C.className)), $;
      }(Y, p, se), s = X.as || ae, d = {};
      for (var b in X)
        X[b] === void 0 || b[0] === "$" || b === "as" || b === "theme" && X.theme === se || (b === "forwardedAs" ? d.as = X.forwardedAs : J && !J(b, s) || (d[b] = X[b], J || process.env.NODE_ENV !== "development" || Lr(b) || Vt.has(b) || !ct.has(s) || (Vt.add(b), console.warn('styled-components: it looks like an unknown prop "'.concat(b, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var O = function(I, C) {
        var P = Yt(), _ = I.generateAndInjectStyles(C, P.styleSheet, P.stylis);
        return process.env.NODE_ENV !== "production" && St(_), _;
      }(H, X);
      process.env.NODE_ENV !== "production" && E.warnTooManyClasses && E.warnTooManyClasses(O);
      var x = le(xe, he);
      return O && (x += " " + O), X.className && (x += " " + X.className), d[rt(s) && !ct.has(s) ? "class" : "className"] = x, d.ref = F, Tr(s, d);
    }(S, T, c);
  }
  j.displayName = m;
  var S = W.forwardRef(j);
  return S.attrs = g, S.componentStyle = A, S.displayName = m, S.shouldForwardProp = k, S.foldedComponentIds = n ? le(o.foldedComponentIds, o.styledComponentId) : "", S.styledComponentId = v, S.target = n ? o.target : e, Object.defineProperty(S, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = n ? function(c) {
      for (var E = [], p = 1; p < arguments.length; p++)
        E[p - 1] = arguments[p];
      for (var F = 0, Y = E; F < Y.length; F++)
        lt(c, Y[F], !0);
      return c;
    }({}, o.defaultProps, T) : T;
  } }), process.env.NODE_ENV !== "production" && (an(m, v), S.warnTooManyClasses = /* @__PURE__ */ function(T, c) {
    var E = {}, p = !1;
    return function(F) {
      if (!p && (E[F] = !0, Object.keys(E).length >= 200)) {
        var Y = c ? ' with the id of "'.concat(c, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(T).concat(Y, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), p = !0, E = {};
      }
    };
  }(m, v)), bt(S, function() {
    return ".".concat(S.styledComponentId);
  }), a && dr(S, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), S;
}
function Ut(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}
var Ht = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Yn(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (we(e) || Se(e))
    return Ht(pe(Ut(He, me([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? pe(n) : Ht(pe(Ut(n, t)));
}
function pt(e, t, r) {
  if (r === void 0 && (r = be), !t)
    throw Te(1, t);
  var n = function(o) {
    for (var a = [], i = 1; i < arguments.length; i++)
      a[i - 1] = arguments[i];
    return e(t, r, Yn.apply(void 0, me([o], a, !1)));
  };
  return n.attrs = function(o) {
    return pt(e, t, G(G({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return pt(e, t, G(G({}, r), o));
  }, n;
}
var Sr = function(e) {
  return pt(Fn, e);
}, oe = Sr;
ct.forEach(function(e) {
  oe[e] = Sr(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var De = "__sc-".concat(de, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[De] || (window[De] = 0), window[De] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[De] += 1);
const Wn = oe.div`
  width: 94.5%;
`, Bn = oe.input`
  padding: 10px;
  width: 200px;
  border: none;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: larger;
  color: ${({ color: e }) => e};
  border: ${(e) => e.border};
`, Vn = oe.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  border: 1px solid ${({ color: e }) => e};
`, Un = oe.th`
  border: 1px solid ${({ color: e }) => e};
  padding: 8px;
  text-align: left;
  cursor: pointer;
  background-color: ${({ backgroundcolor: e }) => e};
  color: ${({ color: e }) => e};
  font-size: larger;

  &.active {
    color: ${({ color: e }) => e};
  }
`, Gt = oe.td`
  border: 1px solid ${({ color: e }) => e};
  padding: 8px;
  text-align: left;
`, Hn = oe.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`, Xt = oe.button`
  background-color: ${({ backgroundcolor: e }) => e};
  color: ${({ color: e }) => e};
  font-weight: 800;

  &:disabled {
    color: gray;
    opacity: 0.5;
    font-weight: 400;
  }

  &:hover {
    border: none;
  }
`;
oe.div`
  text-align: center;
  padding: 20px;
`;
const Gn = ({ rowsPerPage: e, datas: t, headers: r, apparenceColor: n }) => {
  const [o, a] = ke(1), [i, u] = ke(null), [l, h] = ke("asc"), [y, m] = ke("");
  Cr(() => {
    t.length === 0 && a(0);
  }, [t]);
  const v = (p) => i ? [...p].sort((F, Y) => {
    const H = new Date(F[i]), ee = new Date(Y[i]);
    return H < ee ? l === "asc" ? -1 : 1 : H > ee ? l === "asc" ? 1 : -1 : 0;
  }) : p, g = (p) => {
    let F = parseInt(p.slice(1, 3), 16), Y = parseInt(p.slice(3, 5), 16), H = parseInt(p.slice(5, 7), 16);
    return F = Math.round(F * 0.6), Y = Math.round(Y * 0.6), H = Math.round(H * 0.6), `#${F.toString(16).padStart(2, "0")}${Y.toString(16).padStart(2, "0")}${H.toString(16).padStart(2, "0")}`;
  }, k = (p) => {
    p === i ? h(l === "asc" ? "desc" : "asc") : (u(p), h("asc"));
  }, w = (p) => p !== i ? null : l === "asc" ? " ▲" : " ▼", A = ((p) => y ? p.filter(
    (F) => Object.values(F).some((Y) => Y != null ? Y.toString().toLowerCase().includes(y.toLowerCase()) : !1)
  ) : p)(t), j = v(A), S = o * e, T = S - e, c = j.slice(T, S), E = Math.ceil(A.length / e);
  return /* @__PURE__ */ W.createElement(Wn, null, /* @__PURE__ */ W.createElement(
    Bn,
    {
      type: "text",
      placeholder: "Rechercher...",
      value: y,
      onChange: (p) => m(p.target.value),
      color: g(n),
      border: `1px solid ${g(n)}`
    }
  ), /* @__PURE__ */ W.createElement(Vn, { color: g(n) }, /* @__PURE__ */ W.createElement("thead", null, /* @__PURE__ */ W.createElement("tr", null, r.map((p, F) => /* @__PURE__ */ W.createElement(
    Un,
    {
      key: F,
      onClick: () => k(p.key),
      backgroundcolor: n,
      color: g(n)
    },
    p.name,
    w(p.key)
  )))), /* @__PURE__ */ W.createElement("tbody", null, A.length === 0 ? /* @__PURE__ */ W.createElement("tr", null, /* @__PURE__ */ W.createElement(Gt, { colSpan: r.length, className: "no_data" }, "No data available in table")) : c.map((p, F) => /* @__PURE__ */ W.createElement("tr", { key: F }, r.map((Y, H) => /* @__PURE__ */ W.createElement(Gt, { key: H }, p[Y.key])))))), /* @__PURE__ */ W.createElement(Hn, null, /* @__PURE__ */ W.createElement(
    Xt,
    {
      backgroundcolor: n,
      color: g(n),
      onClick: () => a((p) => Math.max(p - 1, 1)),
      disabled: o === 1 || A.length === 0
    },
    "Précédent"
  ), /* @__PURE__ */ W.createElement("span", null, "Page ", o, " sur ", E), /* @__PURE__ */ W.createElement(
    Xt,
    {
      backgroundcolor: n,
      color: g(n),
      onClick: () => a((p) => Math.min(p + 1, E)),
      disabled: o === E || E === 0
    },
    "Suivant"
  )));
};
Gn.propTypes = {
  rowsPerPage: ce.number.isRequired,
  datas: ce.arrayOf(ce.object).isRequired,
  headers: ce.arrayOf(
    ce.shape({
      key: ce.string.isRequired,
      name: ce.string.isRequired
    })
  ).isRequired
};
export {
  Gn as Table
};
