(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = t(l);
    fetch(l.href, o);
  }
})();
function Ac(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ts = { exports: {} },
  fl = {},
  rs = { exports: {} },
  R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ur = Symbol.for("react.element"),
  wc = Symbol.for("react.portal"),
  kc = Symbol.for("react.fragment"),
  Sc = Symbol.for("react.strict_mode"),
  xc = Symbol.for("react.profiler"),
  Ec = Symbol.for("react.provider"),
  Cc = Symbol.for("react.context"),
  Nc = Symbol.for("react.forward_ref"),
  _c = Symbol.for("react.suspense"),
  Pc = Symbol.for("react.memo"),
  zc = Symbol.for("react.lazy"),
  Wi = Symbol.iterator;
function Tc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wi && e[Wi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ls = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  os = Object.assign,
  is = {};
function wt(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = is),
    (this.updater = t || ls);
}
wt.prototype.isReactComponent = {};
wt.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, n, "setState");
};
wt.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function us() {}
us.prototype = wt.prototype;
function Go(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = is),
    (this.updater = t || ls);
}
var Zo = (Go.prototype = new us());
Zo.constructor = Go;
os(Zo, wt.prototype);
Zo.isPureReactComponent = !0;
var qi = Array.isArray,
  ss = Object.prototype.hasOwnProperty,
  Xo = { current: null },
  as = { key: !0, ref: !0, __self: !0, __source: !0 };
function cs(e, n, t) {
  var r,
    l = {},
    o = null,
    i = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (i = n.ref),
    n.key !== void 0 && (o = "" + n.key),
    n))
      ss.call(n, r) && !as.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var s = Array(u), d = 0; d < u; d++) s[d] = arguments[d + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: ur,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Xo.current,
  };
}
function Lc(e, n) {
  return {
    $$typeof: ur,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Jo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ur;
}
function jc(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Qi = /\/+/g;
function Pl(e, n) {
  return typeof e == "object" && e !== null && e.key != null
    ? jc("" + e.key)
    : n.toString(36);
}
function Tr(e, n, t, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ur:
          case wc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Pl(i, 0) : r),
      qi(l)
        ? ((t = ""),
          e != null && (t = e.replace(Qi, "$&/") + "/"),
          Tr(l, n, t, "", function (d) {
            return d;
          }))
        : l != null &&
          (Jo(l) &&
            (l = Lc(
              l,
              t +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Qi, "$&/") + "/") +
                e
            )),
          n.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), qi(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Pl(o, u);
      i += Tr(o, n, t, s, l);
    }
  else if (((s = Tc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Pl(o, u++)), (i += Tr(o, n, t, s, l));
  else if (o === "object")
    throw (
      ((n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function pr(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Tr(e, r, "", "", function (o) {
      return n.call(t, o, l++);
    }),
    r
  );
}
function Ic(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var he = { current: null },
  Lr = { transition: null },
  Rc = {
    ReactCurrentDispatcher: he,
    ReactCurrentBatchConfig: Lr,
    ReactCurrentOwner: Xo,
  };
function ds() {
  throw Error("act(...) is not supported in production builds of React.");
}
R.Children = {
  map: pr,
  forEach: function (e, n, t) {
    pr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      pr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      pr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!Jo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
R.Component = wt;
R.Fragment = kc;
R.Profiler = xc;
R.PureComponent = Go;
R.StrictMode = Sc;
R.Suspense = _c;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rc;
R.act = ds;
R.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = os({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((o = n.ref), (i = Xo.current)),
      n.key !== void 0 && (l = "" + n.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in n)
      ss.call(n, s) &&
        !as.hasOwnProperty(s) &&
        (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var d = 0; d < s; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: ur, type: e.type, key: l, ref: o, props: r, _owner: i };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: Cc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ec, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = cs;
R.createFactory = function (e) {
  var n = cs.bind(null, e);
  return (n.type = e), n;
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: Nc, render: e };
};
R.isValidElement = Jo;
R.lazy = function (e) {
  return { $$typeof: zc, _payload: { _status: -1, _result: e }, _init: Ic };
};
R.memo = function (e, n) {
  return { $$typeof: Pc, type: e, compare: n === void 0 ? null : n };
};
R.startTransition = function (e) {
  var n = Lr.transition;
  Lr.transition = {};
  try {
    e();
  } finally {
    Lr.transition = n;
  }
};
R.unstable_act = ds;
R.useCallback = function (e, n) {
  return he.current.useCallback(e, n);
};
R.useContext = function (e) {
  return he.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return he.current.useDeferredValue(e);
};
R.useEffect = function (e, n) {
  return he.current.useEffect(e, n);
};
R.useId = function () {
  return he.current.useId();
};
R.useImperativeHandle = function (e, n, t) {
  return he.current.useImperativeHandle(e, n, t);
};
R.useInsertionEffect = function (e, n) {
  return he.current.useInsertionEffect(e, n);
};
R.useLayoutEffect = function (e, n) {
  return he.current.useLayoutEffect(e, n);
};
R.useMemo = function (e, n) {
  return he.current.useMemo(e, n);
};
R.useReducer = function (e, n, t) {
  return he.current.useReducer(e, n, t);
};
R.useRef = function (e) {
  return he.current.useRef(e);
};
R.useState = function (e) {
  return he.current.useState(e);
};
R.useSyncExternalStore = function (e, n, t) {
  return he.current.useSyncExternalStore(e, n, t);
};
R.useTransition = function () {
  return he.current.useTransition();
};
R.version = "18.3.1";
rs.exports = R;
var Z = rs.exports;
const Mc = Ac(Z);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fc = Z,
  Dc = Symbol.for("react.element"),
  Bc = Symbol.for("react.fragment"),
  Oc = Object.prototype.hasOwnProperty,
  Uc = Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Hc = { key: !0, ref: !0, __self: !0, __source: !0 };
function fs(e, n, t) {
  var r,
    l = {},
    o = null,
    i = null;
  t !== void 0 && (o = "" + t),
    n.key !== void 0 && (o = "" + n.key),
    n.ref !== void 0 && (i = n.ref);
  for (r in n) Oc.call(n, r) && !Hc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return {
    $$typeof: Dc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Uc.current,
  };
}
fl.Fragment = Bc;
fl.jsx = fs;
fl.jsxs = fs;
ts.exports = fl;
var y = ts.exports,
  no = {},
  ps = { exports: {} },
  _e = {},
  ms = { exports: {} },
  hs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(E, L) {
    var j = E.length;
    E.push(L);
    e: for (; 0 < j; ) {
      var V = (j - 1) >>> 1,
        J = E[V];
      if (0 < l(J, L)) (E[V] = L), (E[j] = J), (j = V);
      else break e;
    }
  }
  function t(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var L = E[0],
      j = E.pop();
    if (j !== L) {
      E[0] = j;
      e: for (var V = 0, J = E.length, qn = J >>> 1; V < qn; ) {
        var Ze = 2 * (V + 1) - 1,
          Qn = E[Ze],
          Xe = Ze + 1,
          Yn = E[Xe];
        if (0 > l(Qn, j))
          Xe < J && 0 > l(Yn, Qn)
            ? ((E[V] = Yn), (E[Xe] = j), (V = Xe))
            : ((E[V] = Qn), (E[Ze] = j), (V = Ze));
        else if (Xe < J && 0 > l(Yn, j)) (E[V] = Yn), (E[Xe] = j), (V = Xe);
        else break e;
      }
    }
    return L;
  }
  function l(E, L) {
    var j = E.sortIndex - L.sortIndex;
    return j !== 0 ? j : E.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    d = [],
    m = 1,
    h = null,
    p = 3,
    A = !1,
    w = !1,
    k = !1,
    D = typeof setTimeout == "function" ? setTimeout : null,
    c = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(E) {
    for (var L = t(d); L !== null; ) {
      if (L.callback === null) r(d);
      else if (L.startTime <= E)
        r(d), (L.sortIndex = L.expirationTime), n(s, L);
      else break;
      L = t(d);
    }
  }
  function g(E) {
    if (((k = !1), f(E), !w))
      if (t(s) !== null) (w = !0), se(x);
      else {
        var L = t(d);
        L !== null && Ge(g, L.startTime - E);
      }
  }
  function x(E, L) {
    (w = !1), k && ((k = !1), c(P), (P = -1)), (A = !0);
    var j = p;
    try {
      for (
        f(L), h = t(s);
        h !== null && (!(h.expirationTime > L) || (E && !Se()));

      ) {
        var V = h.callback;
        if (typeof V == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var J = V(h.expirationTime <= L);
          (L = e.unstable_now()),
            typeof J == "function" ? (h.callback = J) : h === t(s) && r(s),
            f(L);
        } else r(s);
        h = t(s);
      }
      if (h !== null) var qn = !0;
      else {
        var Ze = t(d);
        Ze !== null && Ge(g, Ze.startTime - L), (qn = !1);
      }
      return qn;
    } finally {
      (h = null), (p = j), (A = !1);
    }
  }
  var _ = !1,
    N = null,
    P = -1,
    O = 5,
    I = -1;
  function Se() {
    return !(e.unstable_now() - I < O);
  }
  function Ke() {
    if (N !== null) {
      var E = e.unstable_now();
      I = E;
      var L = !0;
      try {
        L = N(!0, E);
      } finally {
        L ? cn() : ((_ = !1), (N = null));
      }
    } else _ = !1;
  }
  var cn;
  if (typeof a == "function")
    cn = function () {
      a(Ke);
    };
  else if (typeof MessageChannel < "u") {
    var fr = new MessageChannel(),
      Ve = fr.port2;
    (fr.port1.onmessage = Ke),
      (cn = function () {
        Ve.postMessage(null);
      });
  } else
    cn = function () {
      D(Ke, 0);
    };
  function se(E) {
    (N = E), _ || ((_ = !0), cn());
  }
  function Ge(E, L) {
    P = D(function () {
      E(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || A || ((w = !0), se(x));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(s);
    }),
    (e.unstable_next = function (E) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = p;
      }
      var j = p;
      p = L;
      try {
        return E();
      } finally {
        p = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, L) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var j = p;
      p = E;
      try {
        return L();
      } finally {
        p = j;
      }
    }),
    (e.unstable_scheduleCallback = function (E, L, j) {
      var V = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? V + j : V))
          : (j = V),
        E)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = j + J),
        (E = {
          id: m++,
          callback: L,
          priorityLevel: E,
          startTime: j,
          expirationTime: J,
          sortIndex: -1,
        }),
        j > V
          ? ((E.sortIndex = j),
            n(d, E),
            t(s) === null &&
              E === t(d) &&
              (k ? (c(P), (P = -1)) : (k = !0), Ge(g, j - V)))
          : ((E.sortIndex = J), n(s, E), w || A || ((w = !0), se(x))),
        E
      );
    }),
    (e.unstable_shouldYield = Se),
    (e.unstable_wrapCallback = function (E) {
      var L = p;
      return function () {
        var j = p;
        p = L;
        try {
          return E.apply(this, arguments);
        } finally {
          p = j;
        }
      };
    });
})(hs);
ms.exports = hs;
var Vc = ms.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $c = Z,
  Ne = Vc;
function v(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var gs = new Set(),
  Wt = {};
function $n(e, n) {
  pt(e, n), pt(e + "Capture", n);
}
function pt(e, n) {
  for (Wt[e] = n, e = 0; e < n.length; e++) gs.add(n[e]);
}
var ln = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  to = Object.prototype.hasOwnProperty,
  Wc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Yi = {},
  Ki = {};
function qc(e) {
  return to.call(Ki, e)
    ? !0
    : to.call(Yi, e)
    ? !1
    : Wc.test(e)
    ? (Ki[e] = !0)
    : ((Yi[e] = !0), !1);
}
function Qc(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Yc(e, n, t, r) {
  if (n === null || typeof n > "u" || Qc(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
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
function ge(e, n, t, r, l, o, i) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ge(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  ue[n] = new ge(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ue[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ue[e] = new ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ue[e] = new ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ue[e] = new ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ue[e] = new ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ue[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bo = /[\-:]([a-z])/g;
function ei(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(bo, ei);
    ue[n] = new ge(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(bo, ei);
    ue[n] = new ge(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(bo, ei);
  ue[n] = new ge(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ue[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new ge(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ue[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ni(e, n, t, r) {
  var l = ue.hasOwnProperty(n) ? ue[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (Yc(n, t, l, r) && (t = null),
    r || l === null
      ? qc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var an = $c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  mr = Symbol.for("react.element"),
  Gn = Symbol.for("react.portal"),
  Zn = Symbol.for("react.fragment"),
  ti = Symbol.for("react.strict_mode"),
  ro = Symbol.for("react.profiler"),
  vs = Symbol.for("react.provider"),
  ys = Symbol.for("react.context"),
  ri = Symbol.for("react.forward_ref"),
  lo = Symbol.for("react.suspense"),
  oo = Symbol.for("react.suspense_list"),
  li = Symbol.for("react.memo"),
  fn = Symbol.for("react.lazy"),
  As = Symbol.for("react.offscreen"),
  Gi = Symbol.iterator;
function xt(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Gi && e[Gi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var K = Object.assign,
  zl;
function Lt(e) {
  if (zl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      zl = (n && n[1]) || "";
    }
  return (
    `
` +
    zl +
    e
  );
}
var Tl = !1;
function Ll(e, n) {
  if (!e || Tl) return "";
  Tl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (d) {
          r = d;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var l = d.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Tl = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? Lt(e) : "";
}
function Kc(e) {
  switch (e.tag) {
    case 5:
      return Lt(e.type);
    case 16:
      return Lt("Lazy");
    case 13:
      return Lt("Suspense");
    case 19:
      return Lt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ll(e.type, !1)), e;
    case 11:
      return (e = Ll(e.type.render, !1)), e;
    case 1:
      return (e = Ll(e.type, !0)), e;
    default:
      return "";
  }
}
function io(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zn:
      return "Fragment";
    case Gn:
      return "Portal";
    case ro:
      return "Profiler";
    case ti:
      return "StrictMode";
    case lo:
      return "Suspense";
    case oo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ys:
        return (e.displayName || "Context") + ".Consumer";
      case vs:
        return (e._context.displayName || "Context") + ".Provider";
      case ri:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case li:
        return (
          (n = e.displayName || null), n !== null ? n : io(e.type) || "Memo"
        );
      case fn:
        (n = e._payload), (e = e._init);
        try {
          return io(e(n));
        } catch {}
    }
  return null;
}
function Gc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return io(n);
    case 8:
      return n === ti ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function Nn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ws(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function Zc(e) {
  var n = ws(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var l = t.get,
      o = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function hr(e) {
  e._valueTracker || (e._valueTracker = Zc(e));
}
function ks(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return (
    e && (r = ws(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Vr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function uo(e, n) {
  var t = n.checked;
  return K({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Zi(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = Nn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function Ss(e, n) {
  (n = n.checked), n != null && ni(e, "checked", n, !1);
}
function so(e, n) {
  Ss(e, n);
  var t = Nn(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? ao(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && ao(e, n.type, Nn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function Xi(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function ao(e, n, t) {
  (n !== "number" || Vr(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var jt = Array.isArray;
function ut(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + Nn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function co(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(v(91));
  return K({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ji(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(v(92));
      if (jt(t)) {
        if (1 < t.length) throw Error(v(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: Nn(t) };
}
function xs(e, n) {
  var t = Nn(n.value),
    r = Nn(n.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r);
}
function bi(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function Es(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fo(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Es(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var gr,
  Cs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        gr = gr || document.createElement("div"),
          gr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = gr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function qt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Mt = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
    strokeWidth: !0,
  },
  Xc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mt).forEach(function (e) {
  Xc.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Mt[n] = Mt[e]);
  });
});
function Ns(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (Mt.hasOwnProperty(e) && Mt[e])
    ? ("" + n).trim()
    : n + "px";
}
function _s(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = Ns(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var Jc = K(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function po(e, n) {
  if (n) {
    if (Jc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(v(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(v(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(v(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(v(62));
  }
}
function mo(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
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
var ho = null;
function oi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var go = null,
  st = null,
  at = null;
function eu(e) {
  if ((e = cr(e))) {
    if (typeof go != "function") throw Error(v(280));
    var n = e.stateNode;
    n && ((n = vl(n)), go(e.stateNode, e.type, n));
  }
}
function Ps(e) {
  st ? (at ? at.push(e) : (at = [e])) : (st = e);
}
function zs() {
  if (st) {
    var e = st,
      n = at;
    if (((at = st = null), eu(e), n)) for (e = 0; e < n.length; e++) eu(n[e]);
  }
}
function Ts(e, n) {
  return e(n);
}
function Ls() {}
var jl = !1;
function js(e, n, t) {
  if (jl) return e(n, t);
  jl = !0;
  try {
    return Ts(e, n, t);
  } finally {
    (jl = !1), (st !== null || at !== null) && (Ls(), zs());
  }
}
function Qt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = vl(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(v(231, n, typeof t));
  return t;
}
var vo = !1;
if (ln)
  try {
    var Et = {};
    Object.defineProperty(Et, "passive", {
      get: function () {
        vo = !0;
      },
    }),
      window.addEventListener("test", Et, Et),
      window.removeEventListener("test", Et, Et);
  } catch {
    vo = !1;
  }
function bc(e, n, t, r, l, o, i, u, s) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, d);
  } catch (m) {
    this.onError(m);
  }
}
var Ft = !1,
  $r = null,
  Wr = !1,
  yo = null,
  ed = {
    onError: function (e) {
      (Ft = !0), ($r = e);
    },
  };
function nd(e, n, t, r, l, o, i, u, s) {
  (Ft = !1), ($r = null), bc.apply(ed, arguments);
}
function td(e, n, t, r, l, o, i, u, s) {
  if ((nd.apply(this, arguments), Ft)) {
    if (Ft) {
      var d = $r;
      (Ft = !1), ($r = null);
    } else throw Error(v(198));
    Wr || ((Wr = !0), (yo = d));
  }
}
function Wn(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Is(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function nu(e) {
  if (Wn(e) !== e) throw Error(v(188));
}
function rd(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = Wn(e)), n === null)) throw Error(v(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === t) return nu(l), e;
        if (o === r) return nu(l), n;
        o = o.sibling;
      }
      throw Error(v(188));
    }
    if (t.return !== r.return) (t = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === t) {
          (i = !0), (t = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (t = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === t) {
            (i = !0), (t = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (t = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(v(189));
      }
    }
    if (t.alternate !== r) throw Error(v(190));
  }
  if (t.tag !== 3) throw Error(v(188));
  return t.stateNode.current === t ? e : n;
}
function Rs(e) {
  return (e = rd(e)), e !== null ? Ms(e) : null;
}
function Ms(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Ms(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Fs = Ne.unstable_scheduleCallback,
  tu = Ne.unstable_cancelCallback,
  ld = Ne.unstable_shouldYield,
  od = Ne.unstable_requestPaint,
  X = Ne.unstable_now,
  id = Ne.unstable_getCurrentPriorityLevel,
  ii = Ne.unstable_ImmediatePriority,
  Ds = Ne.unstable_UserBlockingPriority,
  qr = Ne.unstable_NormalPriority,
  ud = Ne.unstable_LowPriority,
  Bs = Ne.unstable_IdlePriority,
  pl = null,
  Qe = null;
function sd(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == "function")
    try {
      Qe.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : dd,
  ad = Math.log,
  cd = Math.LN2;
function dd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ad(e) / cd) | 0)) | 0;
}
var vr = 64,
  yr = 4194304;
function It(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Qr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = It(u)) : ((o &= i), o !== 0 && (r = It(o)));
  } else (i = t & ~l), i !== 0 ? (r = It(i)) : o !== 0 && (r = It(o));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (o = n & -n), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - Oe(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function fd(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function pd(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Oe(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & t) || u & r) && (l[i] = fd(u, n))
      : s <= n && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Ao(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Os() {
  var e = vr;
  return (vr <<= 1), !(vr & 4194240) && (vr = 64), e;
}
function Il(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function sr(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Oe(n)),
    (e[n] = t);
}
function md(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Oe(t),
      o = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~o);
  }
}
function ui(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Oe(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var B = 0;
function Us(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Hs,
  si,
  Vs,
  $s,
  Ws,
  wo = !1,
  Ar = [],
  yn = null,
  An = null,
  wn = null,
  Yt = new Map(),
  Kt = new Map(),
  mn = [],
  hd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ru(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      yn = null;
      break;
    case "dragenter":
    case "dragleave":
      An = null;
      break;
    case "mouseover":
    case "mouseout":
      wn = null;
      break;
    case "pointerover":
    case "pointerout":
      Yt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kt.delete(n.pointerId);
  }
}
function Ct(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      n !== null && ((n = cr(n)), n !== null && si(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function gd(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (yn = Ct(yn, e, n, t, r, l)), !0;
    case "dragenter":
      return (An = Ct(An, e, n, t, r, l)), !0;
    case "mouseover":
      return (wn = Ct(wn, e, n, t, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Yt.set(o, Ct(Yt.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Kt.set(o, Ct(Kt.get(o) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function qs(e) {
  var n = In(e.target);
  if (n !== null) {
    var t = Wn(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = Is(t)), n !== null)) {
          (e.blockedOn = n),
            Ws(e.priority, function () {
              Vs(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function jr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = ko(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (ho = r), t.target.dispatchEvent(r), (ho = null);
    } else return (n = cr(t)), n !== null && si(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function lu(e, n, t) {
  jr(e) && t.delete(n);
}
function vd() {
  (wo = !1),
    yn !== null && jr(yn) && (yn = null),
    An !== null && jr(An) && (An = null),
    wn !== null && jr(wn) && (wn = null),
    Yt.forEach(lu),
    Kt.forEach(lu);
}
function Nt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    wo ||
      ((wo = !0),
      Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, vd)));
}
function Gt(e) {
  function n(l) {
    return Nt(l, e);
  }
  if (0 < Ar.length) {
    Nt(Ar[0], e);
    for (var t = 1; t < Ar.length; t++) {
      var r = Ar[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    yn !== null && Nt(yn, e),
      An !== null && Nt(An, e),
      wn !== null && Nt(wn, e),
      Yt.forEach(n),
      Kt.forEach(n),
      t = 0;
    t < mn.length;
    t++
  )
    (r = mn[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < mn.length && ((t = mn[0]), t.blockedOn === null); )
    qs(t), t.blockedOn === null && mn.shift();
}
var ct = an.ReactCurrentBatchConfig,
  Yr = !0;
function yd(e, n, t, r) {
  var l = B,
    o = ct.transition;
  ct.transition = null;
  try {
    (B = 1), ai(e, n, t, r);
  } finally {
    (B = l), (ct.transition = o);
  }
}
function Ad(e, n, t, r) {
  var l = B,
    o = ct.transition;
  ct.transition = null;
  try {
    (B = 4), ai(e, n, t, r);
  } finally {
    (B = l), (ct.transition = o);
  }
}
function ai(e, n, t, r) {
  if (Yr) {
    var l = ko(e, n, t, r);
    if (l === null) $l(e, n, r, Kr, t), ru(e, r);
    else if (gd(l, e, n, t, r)) r.stopPropagation();
    else if ((ru(e, r), n & 4 && -1 < hd.indexOf(e))) {
      for (; l !== null; ) {
        var o = cr(l);
        if (
          (o !== null && Hs(o),
          (o = ko(e, n, t, r)),
          o === null && $l(e, n, r, Kr, t),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else $l(e, n, r, null, t);
  }
}
var Kr = null;
function ko(e, n, t, r) {
  if (((Kr = null), (e = oi(r)), (e = In(e)), e !== null))
    if (((n = Wn(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = Is(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (Kr = e), null;
}
function Qs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (id()) {
        case ii:
          return 1;
        case Ds:
          return 4;
        case qr:
        case ud:
          return 16;
        case Bs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gn = null,
  ci = null,
  Ir = null;
function Ys() {
  if (Ir) return Ir;
  var e,
    n = ci,
    t = n.length,
    r,
    l = "value" in gn ? gn.value : gn.textContent,
    o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++);
  return (Ir = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Rr(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function wr() {
  return !0;
}
function ou() {
  return !1;
}
function Pe(e) {
  function n(t, r, l, o, i) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? wr
        : ou),
      (this.isPropagationStopped = ou),
      this
    );
  }
  return (
    K(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = wr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = wr));
      },
      persist: function () {},
      isPersistent: wr,
    }),
    n
  );
}
var kt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  di = Pe(kt),
  ar = K({}, kt, { view: 0, detail: 0 }),
  wd = Pe(ar),
  Rl,
  Ml,
  _t,
  ml = K({}, ar, {
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
    getModifierState: fi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== _t &&
            (_t && e.type === "mousemove"
              ? ((Rl = e.screenX - _t.screenX), (Ml = e.screenY - _t.screenY))
              : (Ml = Rl = 0),
            (_t = e)),
          Rl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ml;
    },
  }),
  iu = Pe(ml),
  kd = K({}, ml, { dataTransfer: 0 }),
  Sd = Pe(kd),
  xd = K({}, ar, { relatedTarget: 0 }),
  Fl = Pe(xd),
  Ed = K({}, kt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cd = Pe(Ed),
  Nd = K({}, kt, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  _d = Pe(Nd),
  Pd = K({}, kt, { data: 0 }),
  uu = Pe(Pd),
  zd = {
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
    MozPrintableKey: "Unidentified",
  },
  Td = {
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
    224: "Meta",
  },
  Ld = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function jd(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Ld[e]) ? !!n[e] : !1;
}
function fi() {
  return jd;
}
var Id = K({}, ar, {
    key: function (e) {
      if (e.key) {
        var n = zd[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = Rr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Td[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fi,
    charCode: function (e) {
      return e.type === "keypress" ? Rr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Rr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Rd = Pe(Id),
  Md = K({}, ml, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  su = Pe(Md),
  Fd = K({}, ar, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fi,
  }),
  Dd = Pe(Fd),
  Bd = K({}, kt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Od = Pe(Bd),
  Ud = K({}, ml, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Hd = Pe(Ud),
  Vd = [9, 13, 27, 32],
  pi = ln && "CompositionEvent" in window,
  Dt = null;
ln && "documentMode" in document && (Dt = document.documentMode);
var $d = ln && "TextEvent" in window && !Dt,
  Ks = ln && (!pi || (Dt && 8 < Dt && 11 >= Dt)),
  au = " ",
  cu = !1;
function Gs(e, n) {
  switch (e) {
    case "keyup":
      return Vd.indexOf(n.keyCode) !== -1;
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
function Zs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Xn = !1;
function Wd(e, n) {
  switch (e) {
    case "compositionend":
      return Zs(n);
    case "keypress":
      return n.which !== 32 ? null : ((cu = !0), au);
    case "textInput":
      return (e = n.data), e === au && cu ? null : e;
    default:
      return null;
  }
}
function qd(e, n) {
  if (Xn)
    return e === "compositionend" || (!pi && Gs(e, n))
      ? ((e = Ys()), (Ir = ci = gn = null), (Xn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Ks && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Qd = {
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
  week: !0,
};
function du(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Qd[e.type] : n === "textarea";
}
function Xs(e, n, t, r) {
  Ps(r),
    (n = Gr(n, "onChange")),
    0 < n.length &&
      ((t = new di("onChange", "change", null, t, r)),
      e.push({ event: t, listeners: n }));
}
var Bt = null,
  Zt = null;
function Yd(e) {
  sa(e, 0);
}
function hl(e) {
  var n = et(e);
  if (ks(n)) return e;
}
function Kd(e, n) {
  if (e === "change") return n;
}
var Js = !1;
if (ln) {
  var Dl;
  if (ln) {
    var Bl = "oninput" in document;
    if (!Bl) {
      var fu = document.createElement("div");
      fu.setAttribute("oninput", "return;"),
        (Bl = typeof fu.oninput == "function");
    }
    Dl = Bl;
  } else Dl = !1;
  Js = Dl && (!document.documentMode || 9 < document.documentMode);
}
function pu() {
  Bt && (Bt.detachEvent("onpropertychange", bs), (Zt = Bt = null));
}
function bs(e) {
  if (e.propertyName === "value" && hl(Zt)) {
    var n = [];
    Xs(n, Zt, e, oi(e)), js(Yd, n);
  }
}
function Gd(e, n, t) {
  e === "focusin"
    ? (pu(), (Bt = n), (Zt = t), Bt.attachEvent("onpropertychange", bs))
    : e === "focusout" && pu();
}
function Zd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return hl(Zt);
}
function Xd(e, n) {
  if (e === "click") return hl(n);
}
function Jd(e, n) {
  if (e === "input" || e === "change") return hl(n);
}
function bd(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var He = typeof Object.is == "function" ? Object.is : bd;
function Xt(e, n) {
  if (He(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!to.call(n, l) || !He(e[l], n[l])) return !1;
  }
  return !0;
}
function mu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function hu(e, n) {
  var t = mu(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = mu(t);
  }
}
function ea(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? ea(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function na() {
  for (var e = window, n = Vr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Vr(e.document);
  }
  return n;
}
function mi(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function ef(e) {
  var n = na(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    ea(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && mi(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        "selectionStart" in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = hu(t, o));
        var i = hu(t, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(n), e.extend(i.node, i.offset))
            : (n.setEnd(i.node, i.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var nf = ln && "documentMode" in document && 11 >= document.documentMode,
  Jn = null,
  So = null,
  Ot = null,
  xo = !1;
function gu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  xo ||
    Jn == null ||
    Jn !== Vr(r) ||
    ((r = Jn),
    "selectionStart" in r && mi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ot && Xt(Ot, r)) ||
      ((Ot = r),
      (r = Gr(So, "onSelect")),
      0 < r.length &&
        ((n = new di("onSelect", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = Jn))));
}
function kr(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t["Webkit" + e] = "webkit" + n),
    (t["Moz" + e] = "moz" + n),
    t
  );
}
var bn = {
    animationend: kr("Animation", "AnimationEnd"),
    animationiteration: kr("Animation", "AnimationIteration"),
    animationstart: kr("Animation", "AnimationStart"),
    transitionend: kr("Transition", "TransitionEnd"),
  },
  Ol = {},
  ta = {};
ln &&
  ((ta = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete bn.animationend.animation,
    delete bn.animationiteration.animation,
    delete bn.animationstart.animation),
  "TransitionEvent" in window || delete bn.transitionend.transition);
function gl(e) {
  if (Ol[e]) return Ol[e];
  if (!bn[e]) return e;
  var n = bn[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in ta) return (Ol[e] = n[t]);
  return e;
}
var ra = gl("animationend"),
  la = gl("animationiteration"),
  oa = gl("animationstart"),
  ia = gl("transitionend"),
  ua = new Map(),
  vu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Pn(e, n) {
  ua.set(e, n), $n(n, [e]);
}
for (var Ul = 0; Ul < vu.length; Ul++) {
  var Hl = vu[Ul],
    tf = Hl.toLowerCase(),
    rf = Hl[0].toUpperCase() + Hl.slice(1);
  Pn(tf, "on" + rf);
}
Pn(ra, "onAnimationEnd");
Pn(la, "onAnimationIteration");
Pn(oa, "onAnimationStart");
Pn("dblclick", "onDoubleClick");
Pn("focusin", "onFocus");
Pn("focusout", "onBlur");
Pn(ia, "onTransitionEnd");
pt("onMouseEnter", ["mouseout", "mouseover"]);
pt("onMouseLeave", ["mouseout", "mouseover"]);
pt("onPointerEnter", ["pointerout", "pointerover"]);
pt("onPointerLeave", ["pointerout", "pointerover"]);
$n(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
$n(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
$n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$n(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
$n(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
$n(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Rt =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  lf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rt));
function yu(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), td(r, n, void 0, e), (e.currentTarget = null);
}
function sa(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          yu(l, u, d), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (d = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          yu(l, u, d), (o = s);
        }
    }
  }
  if (Wr) throw ((e = yo), (Wr = !1), (yo = null), e);
}
function $(e, n) {
  var t = n[Po];
  t === void 0 && (t = n[Po] = new Set());
  var r = e + "__bubble";
  t.has(r) || (aa(n, e, 2, !1), t.add(r));
}
function Vl(e, n, t) {
  var r = 0;
  n && (r |= 4), aa(t, e, r, n);
}
var Sr = "_reactListening" + Math.random().toString(36).slice(2);
function Jt(e) {
  if (!e[Sr]) {
    (e[Sr] = !0),
      gs.forEach(function (t) {
        t !== "selectionchange" && (lf.has(t) || Vl(t, !1, e), Vl(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[Sr] || ((n[Sr] = !0), Vl("selectionchange", !1, n));
  }
}
function aa(e, n, t, r) {
  switch (Qs(n)) {
    case 1:
      var l = yd;
      break;
    case 4:
      l = Ad;
      break;
    default:
      l = ai;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !vo ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function $l(e, n, t, r, l) {
  var o = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = In(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  js(function () {
    var d = o,
      m = oi(t),
      h = [];
    e: {
      var p = ua.get(e);
      if (p !== void 0) {
        var A = di,
          w = e;
        switch (e) {
          case "keypress":
            if (Rr(t) === 0) break e;
          case "keydown":
          case "keyup":
            A = Rd;
            break;
          case "focusin":
            (w = "focus"), (A = Fl);
            break;
          case "focusout":
            (w = "blur"), (A = Fl);
            break;
          case "beforeblur":
          case "afterblur":
            A = Fl;
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
            A = iu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            A = Sd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            A = Dd;
            break;
          case ra:
          case la:
          case oa:
            A = Cd;
            break;
          case ia:
            A = Od;
            break;
          case "scroll":
            A = wd;
            break;
          case "wheel":
            A = Hd;
            break;
          case "copy":
          case "cut":
          case "paste":
            A = _d;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            A = su;
        }
        var k = (n & 4) !== 0,
          D = !k && e === "scroll",
          c = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var a = d, f; a !== null; ) {
          f = a;
          var g = f.stateNode;
          if (
            (f.tag === 5 &&
              g !== null &&
              ((f = g),
              c !== null && ((g = Qt(a, c)), g != null && k.push(bt(a, g, f)))),
            D)
          )
            break;
          a = a.return;
        }
        0 < k.length &&
          ((p = new A(p, w, null, t, m)), h.push({ event: p, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (A = e === "mouseout" || e === "pointerout"),
          p &&
            t !== ho &&
            (w = t.relatedTarget || t.fromElement) &&
            (In(w) || w[on]))
        )
          break e;
        if (
          (A || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          A
            ? ((w = t.relatedTarget || t.toElement),
              (A = d),
              (w = w ? In(w) : null),
              w !== null &&
                ((D = Wn(w)), w !== D || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((A = null), (w = d)),
          A !== w)
        ) {
          if (
            ((k = iu),
            (g = "onMouseLeave"),
            (c = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = su),
              (g = "onPointerLeave"),
              (c = "onPointerEnter"),
              (a = "pointer")),
            (D = A == null ? p : et(A)),
            (f = w == null ? p : et(w)),
            (p = new k(g, a + "leave", A, t, m)),
            (p.target = D),
            (p.relatedTarget = f),
            (g = null),
            In(m) === d &&
              ((k = new k(c, a + "enter", w, t, m)),
              (k.target = f),
              (k.relatedTarget = D),
              (g = k)),
            (D = g),
            A && w)
          )
            n: {
              for (k = A, c = w, a = 0, f = k; f; f = Kn(f)) a++;
              for (f = 0, g = c; g; g = Kn(g)) f++;
              for (; 0 < a - f; ) (k = Kn(k)), a--;
              for (; 0 < f - a; ) (c = Kn(c)), f--;
              for (; a--; ) {
                if (k === c || (c !== null && k === c.alternate)) break n;
                (k = Kn(k)), (c = Kn(c));
              }
              k = null;
            }
          else k = null;
          A !== null && Au(h, p, A, k, !1),
            w !== null && D !== null && Au(h, D, w, k, !0);
        }
      }
      e: {
        if (
          ((p = d ? et(d) : window),
          (A = p.nodeName && p.nodeName.toLowerCase()),
          A === "select" || (A === "input" && p.type === "file"))
        )
          var x = Kd;
        else if (du(p))
          if (Js) x = Jd;
          else {
            x = Zd;
            var _ = Gd;
          }
        else
          (A = p.nodeName) &&
            A.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (x = Xd);
        if (x && (x = x(e, d))) {
          Xs(h, x, t, m);
          break e;
        }
        _ && _(e, p, d),
          e === "focusout" &&
            (_ = p._wrapperState) &&
            _.controlled &&
            p.type === "number" &&
            ao(p, "number", p.value);
      }
      switch (((_ = d ? et(d) : window), e)) {
        case "focusin":
          (du(_) || _.contentEditable === "true") &&
            ((Jn = _), (So = d), (Ot = null));
          break;
        case "focusout":
          Ot = So = Jn = null;
          break;
        case "mousedown":
          xo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (xo = !1), gu(h, t, m);
          break;
        case "selectionchange":
          if (nf) break;
        case "keydown":
        case "keyup":
          gu(h, t, m);
      }
      var N;
      if (pi)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Xn
          ? Gs(e, t) && (P = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Ks &&
          t.locale !== "ko" &&
          (Xn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Xn && (N = Ys())
            : ((gn = m),
              (ci = "value" in gn ? gn.value : gn.textContent),
              (Xn = !0))),
        (_ = Gr(d, P)),
        0 < _.length &&
          ((P = new uu(P, e, null, t, m)),
          h.push({ event: P, listeners: _ }),
          N ? (P.data = N) : ((N = Zs(t)), N !== null && (P.data = N)))),
        (N = $d ? Wd(e, t) : qd(e, t)) &&
          ((d = Gr(d, "onBeforeInput")),
          0 < d.length &&
            ((m = new uu("onBeforeInput", "beforeinput", null, t, m)),
            h.push({ event: m, listeners: d }),
            (m.data = N)));
    }
    sa(h, n);
  });
}
function bt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Gr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Qt(e, t)),
      o != null && r.unshift(bt(e, o, l)),
      (o = Qt(e, n)),
      o != null && r.push(bt(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Kn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Au(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t,
      s = u.alternate,
      d = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      d !== null &&
      ((u = d),
      l
        ? ((s = Qt(t, o)), s != null && i.unshift(bt(t, s, u)))
        : l || ((s = Qt(t, o)), s != null && i.push(bt(t, s, u)))),
      (t = t.return);
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var of = /\r\n?/g,
  uf = /\u0000|\uFFFD/g;
function wu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      of,
      `
`
    )
    .replace(uf, "");
}
function xr(e, n, t) {
  if (((n = wu(n)), wu(e) !== n && t)) throw Error(v(425));
}
function Zr() {}
var Eo = null,
  Co = null;
function No(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var _o = typeof setTimeout == "function" ? setTimeout : void 0,
  sf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ku = typeof Promise == "function" ? Promise : void 0,
  af =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ku < "u"
      ? function (e) {
          return ku.resolve(null).then(e).catch(cf);
        }
      : _o;
function cf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Wl(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === "/$")) {
        if (r === 0) {
          e.removeChild(l), Gt(n);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = l;
  } while (t);
  Gt(n);
}
function kn(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function Su(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
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
var St = Math.random().toString(36).slice(2),
  qe = "__reactFiber$" + St,
  er = "__reactProps$" + St,
  on = "__reactContainer$" + St,
  Po = "__reactEvents$" + St,
  df = "__reactListeners$" + St,
  ff = "__reactHandles$" + St;
function In(e) {
  var n = e[qe];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[on] || t[qe])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = Su(e); e !== null; ) {
          if ((t = e[qe])) return t;
          e = Su(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function cr(e) {
  return (
    (e = e[qe] || e[on]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function et(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(v(33));
}
function vl(e) {
  return e[er] || null;
}
var zo = [],
  nt = -1;
function zn(e) {
  return { current: e };
}
function W(e) {
  0 > nt || ((e.current = zo[nt]), (zo[nt] = null), nt--);
}
function H(e, n) {
  nt++, (zo[nt] = e.current), (e.current = n);
}
var _n = {},
  fe = zn(_n),
  Ae = zn(!1),
  Bn = _n;
function mt(e, n) {
  var t = e.type.contextTypes;
  if (!t) return _n;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in t) l[o] = n[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function we(e) {
  return (e = e.childContextTypes), e != null;
}
function Xr() {
  W(Ae), W(fe);
}
function xu(e, n, t) {
  if (fe.current !== _n) throw Error(v(168));
  H(fe, n), H(Ae, t);
}
function ca(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(v(108, Gc(e) || "Unknown", l));
  return K({}, t, r);
}
function Jr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || _n),
    (Bn = fe.current),
    H(fe, e),
    H(Ae, Ae.current),
    !0
  );
}
function Eu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(v(169));
  t
    ? ((e = ca(e, n, Bn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(Ae),
      W(fe),
      H(fe, e))
    : W(Ae),
    H(Ae, t);
}
var en = null,
  yl = !1,
  ql = !1;
function da(e) {
  en === null ? (en = [e]) : en.push(e);
}
function pf(e) {
  (yl = !0), da(e);
}
function Tn() {
  if (!ql && en !== null) {
    ql = !0;
    var e = 0,
      n = B;
    try {
      var t = en;
      for (B = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (en = null), (yl = !1);
    } catch (l) {
      throw (en !== null && (en = en.slice(e + 1)), Fs(ii, Tn), l);
    } finally {
      (B = n), (ql = !1);
    }
  }
  return null;
}
var tt = [],
  rt = 0,
  br = null,
  el = 0,
  ze = [],
  Te = 0,
  On = null,
  nn = 1,
  tn = "";
function Ln(e, n) {
  (tt[rt++] = el), (tt[rt++] = br), (br = e), (el = n);
}
function fa(e, n, t) {
  (ze[Te++] = nn), (ze[Te++] = tn), (ze[Te++] = On), (On = e);
  var r = nn;
  e = tn;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var o = 32 - Oe(n) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (nn = (1 << (32 - Oe(n) + l)) | (t << l) | r),
      (tn = o + e);
  } else (nn = (1 << o) | (t << l) | r), (tn = e);
}
function hi(e) {
  e.return !== null && (Ln(e, 1), fa(e, 1, 0));
}
function gi(e) {
  for (; e === br; )
    (br = tt[--rt]), (tt[rt] = null), (el = tt[--rt]), (tt[rt] = null);
  for (; e === On; )
    (On = ze[--Te]),
      (ze[Te] = null),
      (tn = ze[--Te]),
      (ze[Te] = null),
      (nn = ze[--Te]),
      (ze[Te] = null);
}
var Ce = null,
  Ee = null,
  q = !1,
  Be = null;
function pa(e, n) {
  var t = Le(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function Cu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (Ce = e), (Ee = kn(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (Ce = e), (Ee = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = On !== null ? { id: nn, overflow: tn } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = Le(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (Ce = e),
            (Ee = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function To(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Lo(e) {
  if (q) {
    var n = Ee;
    if (n) {
      var t = n;
      if (!Cu(e, n)) {
        if (To(e)) throw Error(v(418));
        n = kn(t.nextSibling);
        var r = Ce;
        n && Cu(e, n)
          ? pa(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (q = !1), (Ce = e));
      }
    } else {
      if (To(e)) throw Error(v(418));
      (e.flags = (e.flags & -4097) | 2), (q = !1), (Ce = e);
    }
  }
}
function Nu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ce = e;
}
function Er(e) {
  if (e !== Ce) return !1;
  if (!q) return Nu(e), (q = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !No(e.type, e.memoizedProps))),
    n && (n = Ee))
  ) {
    if (To(e)) throw (ma(), Error(v(418)));
    for (; n; ) pa(e, n), (n = kn(n.nextSibling));
  }
  if ((Nu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(v(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              Ee = kn(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = Ce ? kn(e.stateNode.nextSibling) : null;
  return !0;
}
function ma() {
  for (var e = Ee; e; ) e = kn(e.nextSibling);
}
function ht() {
  (Ee = Ce = null), (q = !1);
}
function vi(e) {
  Be === null ? (Be = [e]) : Be.push(e);
}
var mf = an.ReactCurrentBatchConfig;
function Pt(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(v(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(v(147, e));
      var l = r,
        o = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === o
        ? n.ref
        : ((n = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (n._stringRef = o),
          n);
    }
    if (typeof e != "string") throw Error(v(284));
    if (!t._owner) throw Error(v(290, e));
  }
  return e;
}
function Cr(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      v(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e
      )
    ))
  );
}
function _u(e) {
  var n = e._init;
  return n(e._payload);
}
function ha(e) {
  function n(c, a) {
    if (e) {
      var f = c.deletions;
      f === null ? ((c.deletions = [a]), (c.flags |= 16)) : f.push(a);
    }
  }
  function t(c, a) {
    if (!e) return null;
    for (; a !== null; ) n(c, a), (a = a.sibling);
    return null;
  }
  function r(c, a) {
    for (c = new Map(); a !== null; )
      a.key !== null ? c.set(a.key, a) : c.set(a.index, a), (a = a.sibling);
    return c;
  }
  function l(c, a) {
    return (c = Cn(c, a)), (c.index = 0), (c.sibling = null), c;
  }
  function o(c, a, f) {
    return (
      (c.index = f),
      e
        ? ((f = c.alternate),
          f !== null
            ? ((f = f.index), f < a ? ((c.flags |= 2), a) : f)
            : ((c.flags |= 2), a))
        : ((c.flags |= 1048576), a)
    );
  }
  function i(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function u(c, a, f, g) {
    return a === null || a.tag !== 6
      ? ((a = Jl(f, c.mode, g)), (a.return = c), a)
      : ((a = l(a, f)), (a.return = c), a);
  }
  function s(c, a, f, g) {
    var x = f.type;
    return x === Zn
      ? m(c, a, f.props.children, g, f.key)
      : a !== null &&
        (a.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === fn &&
            _u(x) === a.type))
      ? ((g = l(a, f.props)), (g.ref = Pt(c, a, f)), (g.return = c), g)
      : ((g = Hr(f.type, f.key, f.props, null, c.mode, g)),
        (g.ref = Pt(c, a, f)),
        (g.return = c),
        g);
  }
  function d(c, a, f, g) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== f.containerInfo ||
      a.stateNode.implementation !== f.implementation
      ? ((a = bl(f, c.mode, g)), (a.return = c), a)
      : ((a = l(a, f.children || [])), (a.return = c), a);
  }
  function m(c, a, f, g, x) {
    return a === null || a.tag !== 7
      ? ((a = Dn(f, c.mode, g, x)), (a.return = c), a)
      : ((a = l(a, f)), (a.return = c), a);
  }
  function h(c, a, f) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Jl("" + a, c.mode, f)), (a.return = c), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case mr:
          return (
            (f = Hr(a.type, a.key, a.props, null, c.mode, f)),
            (f.ref = Pt(c, null, a)),
            (f.return = c),
            f
          );
        case Gn:
          return (a = bl(a, c.mode, f)), (a.return = c), a;
        case fn:
          var g = a._init;
          return h(c, g(a._payload), f);
      }
      if (jt(a) || xt(a))
        return (a = Dn(a, c.mode, f, null)), (a.return = c), a;
      Cr(c, a);
    }
    return null;
  }
  function p(c, a, f, g) {
    var x = a !== null ? a.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return x !== null ? null : u(c, a, "" + f, g);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case mr:
          return f.key === x ? s(c, a, f, g) : null;
        case Gn:
          return f.key === x ? d(c, a, f, g) : null;
        case fn:
          return (x = f._init), p(c, a, x(f._payload), g);
      }
      if (jt(f) || xt(f)) return x !== null ? null : m(c, a, f, g, null);
      Cr(c, f);
    }
    return null;
  }
  function A(c, a, f, g, x) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (c = c.get(f) || null), u(a, c, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case mr:
          return (c = c.get(g.key === null ? f : g.key) || null), s(a, c, g, x);
        case Gn:
          return (c = c.get(g.key === null ? f : g.key) || null), d(a, c, g, x);
        case fn:
          var _ = g._init;
          return A(c, a, f, _(g._payload), x);
      }
      if (jt(g) || xt(g)) return (c = c.get(f) || null), m(a, c, g, x, null);
      Cr(a, g);
    }
    return null;
  }
  function w(c, a, f, g) {
    for (
      var x = null, _ = null, N = a, P = (a = 0), O = null;
      N !== null && P < f.length;
      P++
    ) {
      N.index > P ? ((O = N), (N = null)) : (O = N.sibling);
      var I = p(c, N, f[P], g);
      if (I === null) {
        N === null && (N = O);
        break;
      }
      e && N && I.alternate === null && n(c, N),
        (a = o(I, a, P)),
        _ === null ? (x = I) : (_.sibling = I),
        (_ = I),
        (N = O);
    }
    if (P === f.length) return t(c, N), q && Ln(c, P), x;
    if (N === null) {
      for (; P < f.length; P++)
        (N = h(c, f[P], g)),
          N !== null &&
            ((a = o(N, a, P)), _ === null ? (x = N) : (_.sibling = N), (_ = N));
      return q && Ln(c, P), x;
    }
    for (N = r(c, N); P < f.length; P++)
      (O = A(N, c, P, f[P], g)),
        O !== null &&
          (e && O.alternate !== null && N.delete(O.key === null ? P : O.key),
          (a = o(O, a, P)),
          _ === null ? (x = O) : (_.sibling = O),
          (_ = O));
    return (
      e &&
        N.forEach(function (Se) {
          return n(c, Se);
        }),
      q && Ln(c, P),
      x
    );
  }
  function k(c, a, f, g) {
    var x = xt(f);
    if (typeof x != "function") throw Error(v(150));
    if (((f = x.call(f)), f == null)) throw Error(v(151));
    for (
      var _ = (x = null), N = a, P = (a = 0), O = null, I = f.next();
      N !== null && !I.done;
      P++, I = f.next()
    ) {
      N.index > P ? ((O = N), (N = null)) : (O = N.sibling);
      var Se = p(c, N, I.value, g);
      if (Se === null) {
        N === null && (N = O);
        break;
      }
      e && N && Se.alternate === null && n(c, N),
        (a = o(Se, a, P)),
        _ === null ? (x = Se) : (_.sibling = Se),
        (_ = Se),
        (N = O);
    }
    if (I.done) return t(c, N), q && Ln(c, P), x;
    if (N === null) {
      for (; !I.done; P++, I = f.next())
        (I = h(c, I.value, g)),
          I !== null &&
            ((a = o(I, a, P)), _ === null ? (x = I) : (_.sibling = I), (_ = I));
      return q && Ln(c, P), x;
    }
    for (N = r(c, N); !I.done; P++, I = f.next())
      (I = A(N, c, P, I.value, g)),
        I !== null &&
          (e && I.alternate !== null && N.delete(I.key === null ? P : I.key),
          (a = o(I, a, P)),
          _ === null ? (x = I) : (_.sibling = I),
          (_ = I));
    return (
      e &&
        N.forEach(function (Ke) {
          return n(c, Ke);
        }),
      q && Ln(c, P),
      x
    );
  }
  function D(c, a, f, g) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Zn &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case mr:
          e: {
            for (var x = f.key, _ = a; _ !== null; ) {
              if (_.key === x) {
                if (((x = f.type), x === Zn)) {
                  if (_.tag === 7) {
                    t(c, _.sibling),
                      (a = l(_, f.props.children)),
                      (a.return = c),
                      (c = a);
                    break e;
                  }
                } else if (
                  _.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === fn &&
                    _u(x) === _.type)
                ) {
                  t(c, _.sibling),
                    (a = l(_, f.props)),
                    (a.ref = Pt(c, _, f)),
                    (a.return = c),
                    (c = a);
                  break e;
                }
                t(c, _);
                break;
              } else n(c, _);
              _ = _.sibling;
            }
            f.type === Zn
              ? ((a = Dn(f.props.children, c.mode, g, f.key)),
                (a.return = c),
                (c = a))
              : ((g = Hr(f.type, f.key, f.props, null, c.mode, g)),
                (g.ref = Pt(c, a, f)),
                (g.return = c),
                (c = g));
          }
          return i(c);
        case Gn:
          e: {
            for (_ = f.key; a !== null; ) {
              if (a.key === _)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === f.containerInfo &&
                  a.stateNode.implementation === f.implementation
                ) {
                  t(c, a.sibling),
                    (a = l(a, f.children || [])),
                    (a.return = c),
                    (c = a);
                  break e;
                } else {
                  t(c, a);
                  break;
                }
              else n(c, a);
              a = a.sibling;
            }
            (a = bl(f, c.mode, g)), (a.return = c), (c = a);
          }
          return i(c);
        case fn:
          return (_ = f._init), D(c, a, _(f._payload), g);
      }
      if (jt(f)) return w(c, a, f, g);
      if (xt(f)) return k(c, a, f, g);
      Cr(c, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        a !== null && a.tag === 6
          ? (t(c, a.sibling), (a = l(a, f)), (a.return = c), (c = a))
          : (t(c, a), (a = Jl(f, c.mode, g)), (a.return = c), (c = a)),
        i(c))
      : t(c, a);
  }
  return D;
}
var gt = ha(!0),
  ga = ha(!1),
  nl = zn(null),
  tl = null,
  lt = null,
  yi = null;
function Ai() {
  yi = lt = tl = null;
}
function wi(e) {
  var n = nl.current;
  W(nl), (e._currentValue = n);
}
function jo(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function dt(e, n) {
  (tl = e),
    (yi = lt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (ye = !0), (e.firstContext = null));
}
function Ie(e) {
  var n = e._currentValue;
  if (yi !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), lt === null)) {
      if (tl === null) throw Error(v(308));
      (lt = e), (tl.dependencies = { lanes: 0, firstContext: e });
    } else lt = lt.next = e;
  return n;
}
var Rn = null;
function ki(e) {
  Rn === null ? (Rn = [e]) : Rn.push(e);
}
function va(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), ki(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    un(e, r)
  );
}
function un(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var pn = !1;
function Si(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ya(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function rn(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Sn(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      un(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), ki(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    un(e, t)
  );
}
function Mr(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), ui(e, t);
  }
}
function Pu(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      o = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var i = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (t = t.next);
      } while (t !== null);
      o === null ? (l = o = n) : (o = o.next = n);
    } else l = o = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function rl(e, n, t, r) {
  var l = e.updateQueue;
  pn = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      d = s.next;
    (s.next = null), i === null ? (o = d) : (i.next = d), (i = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== i &&
        (u === null ? (m.firstBaseUpdate = d) : (u.next = d),
        (m.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (m = d = s = null), (u = o);
    do {
      var p = u.lane,
        A = u.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: A,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            k = u;
          switch (((p = n), (A = t), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                h = w.call(A, h, p);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (p = typeof w == "function" ? w.call(A, h, p) : w),
                p == null)
              )
                break e;
              h = K({}, h, p);
              break e;
            case 2:
              pn = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (A = {
          eventTime: A,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((d = m = A), (s = h)) : (m = m.next = A),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = m),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (i |= l.lane), (l = l.next);
      while (l !== n);
    } else o === null && (l.shared.lanes = 0);
    (Hn |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function zu(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != "function"))
          throw Error(v(191, l));
        l.call(r);
      }
    }
}
var dr = {},
  Ye = zn(dr),
  nr = zn(dr),
  tr = zn(dr);
function Mn(e) {
  if (e === dr) throw Error(v(174));
  return e;
}
function xi(e, n) {
  switch ((H(tr, n), H(nr, e), H(Ye, dr), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : fo(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = fo(n, e));
  }
  W(Ye), H(Ye, n);
}
function vt() {
  W(Ye), W(nr), W(tr);
}
function Aa(e) {
  Mn(tr.current);
  var n = Mn(Ye.current),
    t = fo(n, e.type);
  n !== t && (H(nr, e), H(Ye, t));
}
function Ei(e) {
  nr.current === e && (W(Ye), W(nr));
}
var Q = zn(0);
function ll(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Ql = [];
function Ci() {
  for (var e = 0; e < Ql.length; e++)
    Ql[e]._workInProgressVersionPrimary = null;
  Ql.length = 0;
}
var Fr = an.ReactCurrentDispatcher,
  Yl = an.ReactCurrentBatchConfig,
  Un = 0,
  Y = null,
  ne = null,
  re = null,
  ol = !1,
  Ut = !1,
  rr = 0,
  hf = 0;
function ae() {
  throw Error(v(321));
}
function Ni(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!He(e[t], n[t])) return !1;
  return !0;
}
function _i(e, n, t, r, l, o) {
  if (
    ((Un = o),
    (Y = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (Fr.current = e === null || e.memoizedState === null ? Af : wf),
    (e = t(r, l)),
    Ut)
  ) {
    o = 0;
    do {
      if (((Ut = !1), (rr = 0), 25 <= o)) throw Error(v(301));
      (o += 1),
        (re = ne = null),
        (n.updateQueue = null),
        (Fr.current = kf),
        (e = t(r, l));
    } while (Ut);
  }
  if (
    ((Fr.current = il),
    (n = ne !== null && ne.next !== null),
    (Un = 0),
    (re = ne = Y = null),
    (ol = !1),
    n)
  )
    throw Error(v(300));
  return e;
}
function Pi() {
  var e = rr !== 0;
  return (rr = 0), e;
}
function We() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return re === null ? (Y.memoizedState = re = e) : (re = re.next = e), re;
}
function Re() {
  if (ne === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var n = re === null ? Y.memoizedState : re.next;
  if (n !== null) (re = n), (ne = e);
  else {
    if (e === null) throw Error(v(310));
    (ne = e),
      (e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null,
      }),
      re === null ? (Y.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function lr(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Kl(e) {
  var n = Re(),
    t = n.queue;
  if (t === null) throw Error(v(311));
  t.lastRenderedReducer = e;
  var r = ne,
    l = r.baseQueue,
    o = t.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (t.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      d = o;
    do {
      var m = d.lane;
      if ((Un & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var h = {
          lane: m,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (i = r)) : (s = s.next = h),
          (Y.lanes |= m),
          (Hn |= m);
      }
      d = d.next;
    } while (d !== null && d !== o);
    s === null ? (i = r) : (s.next = u),
      He(r, n.memoizedState) || (ye = !0),
      (n.memoizedState = r),
      (n.baseState = i),
      (n.baseQueue = s),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (Y.lanes |= o), (Hn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Gl(e) {
  var n = Re(),
    t = n.queue;
  if (t === null) throw Error(v(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    He(o, n.memoizedState) || (ye = !0),
      (n.memoizedState = o),
      n.baseQueue === null && (n.baseState = o),
      (t.lastRenderedState = o);
  }
  return [o, r];
}
function wa() {}
function ka(e, n) {
  var t = Y,
    r = Re(),
    l = n(),
    o = !He(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ye = !0)),
    (r = r.queue),
    zi(Ea.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || o || (re !== null && re.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      or(9, xa.bind(null, t, r, l, n), void 0, null),
      le === null)
    )
      throw Error(v(349));
    Un & 30 || Sa(t, n, l);
  }
  return l;
}
function Sa(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = Y.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (Y.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function xa(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), Ca(n) && Na(e);
}
function Ea(e, n, t) {
  return t(function () {
    Ca(n) && Na(e);
  });
}
function Ca(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !He(e, t);
  } catch {
    return !0;
  }
}
function Na(e) {
  var n = un(e, 1);
  n !== null && Ue(n, e, 1, -1);
}
function Tu(e) {
  var n = We();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lr,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = yf.bind(null, Y, e)),
    [n.memoizedState, e]
  );
}
function or(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = Y.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (Y.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function _a() {
  return Re().memoizedState;
}
function Dr(e, n, t, r) {
  var l = We();
  (Y.flags |= e),
    (l.memoizedState = or(1 | n, t, void 0, r === void 0 ? null : r));
}
function Al(e, n, t, r) {
  var l = Re();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ne !== null) {
    var i = ne.memoizedState;
    if (((o = i.destroy), r !== null && Ni(r, i.deps))) {
      l.memoizedState = or(n, t, o, r);
      return;
    }
  }
  (Y.flags |= e), (l.memoizedState = or(1 | n, t, o, r));
}
function Lu(e, n) {
  return Dr(8390656, 8, e, n);
}
function zi(e, n) {
  return Al(2048, 8, e, n);
}
function Pa(e, n) {
  return Al(4, 2, e, n);
}
function za(e, n) {
  return Al(4, 4, e, n);
}
function Ta(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function La(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), Al(4, 4, Ta.bind(null, n, e), t)
  );
}
function Ti() {}
function ja(e, n) {
  var t = Re();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Ni(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Ia(e, n) {
  var t = Re();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Ni(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function Ra(e, n, t) {
  return Un & 21
    ? (He(t, n) || ((t = Os()), (Y.lanes |= t), (Hn |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (ye = !0)), (e.memoizedState = t));
}
function gf(e, n) {
  var t = B;
  (B = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Yl.transition;
  Yl.transition = {};
  try {
    e(!1), n();
  } finally {
    (B = t), (Yl.transition = r);
  }
}
function Ma() {
  return Re().memoizedState;
}
function vf(e, n, t) {
  var r = En(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Fa(e))
  )
    Da(n, t);
  else if (((t = va(e, n, t, r)), t !== null)) {
    var l = me();
    Ue(t, e, r, l), Ba(t, n, r);
  }
}
function yf(e, n, t) {
  var r = En(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Fa(e)) Da(n, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = n.lastRenderedReducer), o !== null)
    )
      try {
        var i = n.lastRenderedState,
          u = o(i, t);
        if (((l.hasEagerState = !0), (l.eagerState = u), He(u, i))) {
          var s = n.interleaved;
          s === null
            ? ((l.next = l), ki(n))
            : ((l.next = s.next), (s.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = va(e, n, l, r)),
      t !== null && ((l = me()), Ue(t, e, r, l), Ba(t, n, r));
  }
}
function Fa(e) {
  var n = e.alternate;
  return e === Y || (n !== null && n === Y);
}
function Da(e, n) {
  Ut = ol = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function Ba(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), ui(e, t);
  }
}
var il = {
    readContext: Ie,
    useCallback: ae,
    useContext: ae,
    useEffect: ae,
    useImperativeHandle: ae,
    useInsertionEffect: ae,
    useLayoutEffect: ae,
    useMemo: ae,
    useReducer: ae,
    useRef: ae,
    useState: ae,
    useDebugValue: ae,
    useDeferredValue: ae,
    useTransition: ae,
    useMutableSource: ae,
    useSyncExternalStore: ae,
    useId: ae,
    unstable_isNewReconciler: !1,
  },
  Af = {
    readContext: Ie,
    useCallback: function (e, n) {
      return (We().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: Ie,
    useEffect: Lu,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        Dr(4194308, 4, Ta.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return Dr(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return Dr(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = We();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = We();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = vf.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = We();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: Tu,
    useDebugValue: Ti,
    useDeferredValue: function (e) {
      return (We().memoizedState = e);
    },
    useTransition: function () {
      var e = Tu(!1),
        n = e[0];
      return (e = gf.bind(null, e[1])), (We().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = Y,
        l = We();
      if (q) {
        if (t === void 0) throw Error(v(407));
        t = t();
      } else {
        if (((t = n()), le === null)) throw Error(v(349));
        Un & 30 || Sa(r, n, t);
      }
      l.memoizedState = t;
      var o = { value: t, getSnapshot: n };
      return (
        (l.queue = o),
        Lu(Ea.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        or(9, xa.bind(null, r, o, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = We(),
        n = le.identifierPrefix;
      if (q) {
        var t = tn,
          r = nn;
        (t = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = rr++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":");
      } else (t = hf++), (n = ":" + n + "r" + t.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  wf = {
    readContext: Ie,
    useCallback: ja,
    useContext: Ie,
    useEffect: zi,
    useImperativeHandle: La,
    useInsertionEffect: Pa,
    useLayoutEffect: za,
    useMemo: Ia,
    useReducer: Kl,
    useRef: _a,
    useState: function () {
      return Kl(lr);
    },
    useDebugValue: Ti,
    useDeferredValue: function (e) {
      var n = Re();
      return Ra(n, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = Kl(lr)[0],
        n = Re().memoizedState;
      return [e, n];
    },
    useMutableSource: wa,
    useSyncExternalStore: ka,
    useId: Ma,
    unstable_isNewReconciler: !1,
  },
  kf = {
    readContext: Ie,
    useCallback: ja,
    useContext: Ie,
    useEffect: zi,
    useImperativeHandle: La,
    useInsertionEffect: Pa,
    useLayoutEffect: za,
    useMemo: Ia,
    useReducer: Gl,
    useRef: _a,
    useState: function () {
      return Gl(lr);
    },
    useDebugValue: Ti,
    useDeferredValue: function (e) {
      var n = Re();
      return ne === null ? (n.memoizedState = e) : Ra(n, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = Gl(lr)[0],
        n = Re().memoizedState;
      return [e, n];
    },
    useMutableSource: wa,
    useSyncExternalStore: ka,
    useId: Ma,
    unstable_isNewReconciler: !1,
  };
function Fe(e, n) {
  if (e && e.defaultProps) {
    (n = K({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function Io(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : K({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var wl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Wn(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = me(),
      l = En(e),
      o = rn(r, l);
    (o.payload = n),
      t != null && (o.callback = t),
      (n = Sn(e, o, l)),
      n !== null && (Ue(n, e, l, r), Mr(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = me(),
      l = En(e),
      o = rn(r, l);
    (o.tag = 1),
      (o.payload = n),
      t != null && (o.callback = t),
      (n = Sn(e, o, l)),
      n !== null && (Ue(n, e, l, r), Mr(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = me(),
      r = En(e),
      l = rn(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = Sn(e, l, r)),
      n !== null && (Ue(n, e, r, t), Mr(n, e, r));
  },
};
function ju(e, n, t, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : n.prototype && n.prototype.isPureReactComponent
      ? !Xt(t, r) || !Xt(l, o)
      : !0
  );
}
function Oa(e, n, t) {
  var r = !1,
    l = _n,
    o = n.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ie(o))
      : ((l = we(n) ? Bn : fe.current),
        (r = n.contextTypes),
        (o = (r = r != null) ? mt(e, l) : _n)),
    (n = new n(t, o)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = wl),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    n
  );
}
function Iu(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && wl.enqueueReplaceState(n, n.state, null);
}
function Ro(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = {}), Si(e);
  var o = n.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ie(o))
    : ((o = we(n) ? Bn : fe.current), (l.context = mt(e, o))),
    (l.state = e.memoizedState),
    (o = n.getDerivedStateFromProps),
    typeof o == "function" && (Io(e, n, o, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((n = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && wl.enqueueReplaceState(l, l.state, null),
      rl(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function yt(e, n) {
  try {
    var t = "",
      r = n;
    do (t += Kc(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Zl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Mo(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var Sf = typeof WeakMap == "function" ? WeakMap : Map;
function Ua(e, n, t) {
  (t = rn(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      sl || ((sl = !0), (qo = r)), Mo(e, n);
    }),
    t
  );
}
function Ha(e, n, t) {
  (t = rn(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        Mo(e, n);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (t.callback = function () {
        Mo(e, n),
          typeof r != "function" &&
            (xn === null ? (xn = new Set([this])) : xn.add(this));
        var i = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    t
  );
}
function Ru(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sf();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = Ff.bind(null, e, n, t)), n.then(e, e));
}
function Mu(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Fu(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = rn(-1, 1)), (n.tag = 2), Sn(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var xf = an.ReactCurrentOwner,
  ye = !1;
function pe(e, n, t, r) {
  n.child = e === null ? ga(n, null, t, r) : gt(n, e.child, t, r);
}
function Du(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return (
    dt(n, l),
    (r = _i(e, n, t, r, o, l)),
    (t = Pi()),
    e !== null && !ye
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        sn(e, n, l))
      : (q && t && hi(n), (n.flags |= 1), pe(e, n, r, l), n.child)
  );
}
function Bu(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" &&
      !Bi(o) &&
      o.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = o), Va(e, n, o, r, l))
      : ((e = Hr(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : Xt), t(i, r) && e.ref === n.ref)
    )
      return sn(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = Cn(o, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Va(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Xt(o, r) && e.ref === n.ref)
      if (((ye = !1), (n.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ye = !0);
      else return (n.lanes = e.lanes), sn(e, n, l);
  }
  return Fo(e, n, t, r, l);
}
function $a(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        H(it, xe),
        (xe |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          H(it, xe),
          (xe |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : t),
        H(it, xe),
        (xe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | t), (n.memoizedState = null)) : (r = t),
      H(it, xe),
      (xe |= r);
  return pe(e, n, l, t), n.child;
}
function Wa(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function Fo(e, n, t, r, l) {
  var o = we(t) ? Bn : fe.current;
  return (
    (o = mt(n, o)),
    dt(n, l),
    (t = _i(e, n, t, r, o, l)),
    (r = Pi()),
    e !== null && !ye
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        sn(e, n, l))
      : (q && r && hi(n), (n.flags |= 1), pe(e, n, t, l), n.child)
  );
}
function Ou(e, n, t, r, l) {
  if (we(t)) {
    var o = !0;
    Jr(n);
  } else o = !1;
  if ((dt(n, l), n.stateNode === null))
    Br(e, n), Oa(n, t, r), Ro(n, t, r, l), (r = !0);
  else if (e === null) {
    var i = n.stateNode,
      u = n.memoizedProps;
    i.props = u;
    var s = i.context,
      d = t.contextType;
    typeof d == "object" && d !== null
      ? (d = Ie(d))
      : ((d = we(t) ? Bn : fe.current), (d = mt(n, d)));
    var m = t.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== d) && Iu(n, i, r, d)),
      (pn = !1);
    var p = n.memoizedState;
    (i.state = p),
      rl(n, r, i, l),
      (s = n.memoizedState),
      u !== r || p !== s || Ae.current || pn
        ? (typeof m == "function" && (Io(n, t, m, r), (s = n.memoizedState)),
          (u = pn || ju(n, t, u, r, p, s, d))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = d),
          (r = u))
        : (typeof i.componentDidMount == "function" && (n.flags |= 4194308),
          (r = !1));
  } else {
    (i = n.stateNode),
      ya(e, n),
      (u = n.memoizedProps),
      (d = n.type === n.elementType ? u : Fe(n.type, u)),
      (i.props = d),
      (h = n.pendingProps),
      (p = i.context),
      (s = t.contextType),
      typeof s == "object" && s !== null
        ? (s = Ie(s))
        : ((s = we(t) ? Bn : fe.current), (s = mt(n, s)));
    var A = t.getDerivedStateFromProps;
    (m =
      typeof A == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== h || p !== s) && Iu(n, i, r, s)),
      (pn = !1),
      (p = n.memoizedState),
      (i.state = p),
      rl(n, r, i, l);
    var w = n.memoizedState;
    u !== h || p !== w || Ae.current || pn
      ? (typeof A == "function" && (Io(n, t, A, r), (w = n.memoizedState)),
        (d = pn || ju(n, t, d, r, p, w, s) || !1)
          ? (m ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == "function" && (n.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = d))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return Do(e, n, t, r, o, l);
}
function Do(e, n, t, r, l, o) {
  Wa(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i) return l && Eu(n, t, !1), sn(e, n, o);
  (r = n.stateNode), (xf.current = n);
  var u =
    i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && i
      ? ((n.child = gt(n, e.child, null, o)), (n.child = gt(n, null, u, o)))
      : pe(e, n, u, o),
    (n.memoizedState = r.state),
    l && Eu(n, t, !0),
    n.child
  );
}
function qa(e) {
  var n = e.stateNode;
  n.pendingContext
    ? xu(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && xu(e, n.context, !1),
    xi(e, n.containerInfo);
}
function Uu(e, n, t, r, l) {
  return ht(), vi(l), (n.flags |= 256), pe(e, n, t, r), n.child;
}
var Bo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qa(e, n, t) {
  var r = n.pendingProps,
    l = Q.current,
    o = !1,
    i = (n.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    H(Q, l & 1),
    e === null)
  )
    return (
      Lo(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = n.mode),
              (o = n.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = xl(i, r, 0, null)),
              (e = Dn(e, r, t, null)),
              (o.return = n),
              (e.return = n),
              (o.sibling = e),
              (n.child = o),
              (n.child.memoizedState = Oo(t)),
              (n.memoizedState = Bo),
              e)
            : Li(n, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Ef(e, n, i, r, u, l, t);
  if (o) {
    (o = r.fallback), (i = n.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (n.deletions = null))
        : ((r = Cn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Cn(u, o)) : ((o = Dn(o, i, t, null)), (o.flags |= 2)),
      (o.return = n),
      (r.return = n),
      (r.sibling = o),
      (n.child = r),
      (r = o),
      (o = n.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Oo(t)
          : {
              baseLanes: i.baseLanes | t,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~t),
      (n.memoizedState = Bo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Cn(o, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function Li(e, n) {
  return (
    (n = xl({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function Nr(e, n, t, r) {
  return (
    r !== null && vi(r),
    gt(n, e.child, null, t),
    (e = Li(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function Ef(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Zl(Error(v(422)))), Nr(e, n, i, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((o = r.fallback),
        (l = n.mode),
        (r = xl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Dn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = n),
        (o.return = n),
        (r.sibling = o),
        (n.child = r),
        n.mode & 1 && gt(n, e.child, null, i),
        (n.child.memoizedState = Oo(i)),
        (n.memoizedState = Bo),
        o);
  if (!(n.mode & 1)) return Nr(e, n, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(v(419))), (r = Zl(o, r, void 0)), Nr(e, n, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ye || u)) {
    if (((r = le), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), un(e, l), Ue(r, e, l, -1));
    }
    return Di(), (r = Zl(Error(v(421)))), Nr(e, n, i, r);
  }
  return l.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = Df.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = o.treeContext),
      (Ee = kn(l.nextSibling)),
      (Ce = n),
      (q = !0),
      (Be = null),
      e !== null &&
        ((ze[Te++] = nn),
        (ze[Te++] = tn),
        (ze[Te++] = On),
        (nn = e.id),
        (tn = e.overflow),
        (On = n)),
      (n = Li(n, r.children)),
      (n.flags |= 4096),
      n);
}
function Hu(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), jo(e.return, n, t);
}
function Xl(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((o.isBackwards = n),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = t),
      (o.tailMode = l));
}
function Ya(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((pe(e, n, r.children, t), (r = Q.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hu(e, t, n);
        else if (e.tag === 19) Hu(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((H(Q, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate),
            e !== null && ll(e) === null && (l = t),
            (t = t.sibling);
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          Xl(n, !1, l, t, o);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ll(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        Xl(n, !0, t, null, o);
        break;
      case "together":
        Xl(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function Br(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function sn(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (Hn |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(v(153));
  if (n.child !== null) {
    for (
      e = n.child, t = Cn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = Cn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function Cf(e, n, t) {
  switch (n.tag) {
    case 3:
      qa(n), ht();
      break;
    case 5:
      Aa(n);
      break;
    case 1:
      we(n.type) && Jr(n);
      break;
    case 4:
      xi(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      H(nl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (H(Q, Q.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? Qa(e, n, t)
          : (H(Q, Q.current & 1),
            (e = sn(e, n, t)),
            e !== null ? e.sibling : null);
      H(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ya(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        H(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), $a(e, n, t);
  }
  return sn(e, n, t);
}
var Ka, Uo, Ga, Za;
Ka = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Uo = function () {};
Ga = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), Mn(Ye.current);
    var o = null;
    switch (t) {
      case "input":
        (l = uo(e, l)), (r = uo(e, r)), (o = []);
        break;
      case "select":
        (l = K({}, l, { value: void 0 })),
          (r = K({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = co(e, l)), (r = co(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Zr);
    }
    po(t, r);
    var i;
    t = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var u = l[d];
          for (i in u) u.hasOwnProperty(i) && (t || (t = {}), (t[i] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Wt.hasOwnProperty(d)
              ? o || (o = [])
              : (o = o || []).push(d, null));
    for (d in r) {
      var s = r[d];
      if (
        ((u = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && s !== u && (s != null || u != null))
      )
        if (d === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (t || (t = {}), (t[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (t || (t = {}), (t[i] = s[i]));
          } else t || (o || (o = []), o.push(d, t)), (t = s);
        else
          d === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(d, s))
            : d === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(d, "" + s)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (Wt.hasOwnProperty(d)
                ? (s != null && d === "onScroll" && $("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(d, s));
    }
    t && (o = o || []).push("style", t);
    var d = o;
    (n.updateQueue = d) && (n.flags |= 4);
  }
};
Za = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function zt(e, n) {
  if (!q)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ce(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function Nf(e, n, t) {
  var r = n.pendingProps;
  switch ((gi(n), n.tag)) {
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
      return ce(n), null;
    case 1:
      return we(n.type) && Xr(), ce(n), null;
    case 3:
      return (
        (r = n.stateNode),
        vt(),
        W(Ae),
        W(fe),
        Ci(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Er(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Be !== null && (Ko(Be), (Be = null)))),
        Uo(e, n),
        ce(n),
        null
      );
    case 5:
      Ei(n);
      var l = Mn(tr.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        Ga(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(v(166));
          return ce(n), null;
        }
        if (((e = Mn(Ye.current)), Er(n))) {
          (r = n.stateNode), (t = n.type);
          var o = n.memoizedProps;
          switch (((r[qe] = n), (r[er] = o), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Rt.length; l++) $(Rt[l], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $("error", r), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              Zi(r, o), $("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                $("invalid", r);
              break;
            case "textarea":
              Ji(r, o), $("invalid", r);
          }
          po(t, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      xr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      xr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Wt.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  $("scroll", r);
            }
          switch (t) {
            case "input":
              hr(r), Xi(r, o, !0);
              break;
            case "textarea":
              hr(r), bi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Zr);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Es(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(t, { is: r.is }))
                : ((e = i.createElement(t)),
                  t === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, t)),
            (e[qe] = n),
            (e[er] = r),
            Ka(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((i = mo(t, r)), t)) {
              case "dialog":
                $("cancel", e), $("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Rt.length; l++) $(Rt[l], e);
                l = r;
                break;
              case "source":
                $("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                $("error", e), $("load", e), (l = r);
                break;
              case "details":
                $("toggle", e), (l = r);
                break;
              case "input":
                Zi(e, r), (l = uo(e, r)), $("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = K({}, r, { value: void 0 })),
                  $("invalid", e);
                break;
              case "textarea":
                Ji(e, r), (l = co(e, r)), $("invalid", e);
                break;
              default:
                l = r;
            }
            po(t, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? _s(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Cs(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (t !== "textarea" || s !== "") && qt(e, s)
                    : typeof s == "number" && qt(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Wt.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && $("scroll", e)
                      : s != null && ni(e, o, s, i));
              }
            switch (t) {
              case "input":
                hr(e), Xi(e, r, !1);
                break;
              case "textarea":
                hr(e), bi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Nn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? ut(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      ut(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Zr);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return ce(n), null;
    case 6:
      if (e && n.stateNode != null) Za(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(v(166));
        if (((t = Mn(tr.current)), Mn(Ye.current), Er(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[qe] = n),
            (o = r.nodeValue !== t) && ((e = Ce), e !== null))
          )
            switch (e.tag) {
              case 3:
                xr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  xr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          o && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[qe] = n),
            (n.stateNode = r);
      }
      return ce(n), null;
    case 13:
      if (
        (W(Q),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (q && Ee !== null && n.mode & 1 && !(n.flags & 128))
          ma(), ht(), (n.flags |= 98560), (o = !1);
        else if (((o = Er(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(v(318));
            if (
              ((o = n.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(v(317));
            o[qe] = n;
          } else
            ht(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          ce(n), (o = !1);
        } else Be !== null && (Ko(Be), (Be = null)), (o = !0);
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || Q.current & 1 ? te === 0 && (te = 3) : Di())),
          n.updateQueue !== null && (n.flags |= 4),
          ce(n),
          null);
    case 4:
      return (
        vt(), Uo(e, n), e === null && Jt(n.stateNode.containerInfo), ce(n), null
      );
    case 10:
      return wi(n.type._context), ce(n), null;
    case 17:
      return we(n.type) && Xr(), ce(n), null;
    case 19:
      if ((W(Q), (o = n.memoizedState), o === null)) return ce(n), null;
      if (((r = (n.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) zt(o, !1);
        else {
          if (te !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((i = ll(e)), i !== null)) {
                for (
                  n.flags |= 128,
                    zt(o, !1),
                    r = i.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (o = t),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return H(Q, (Q.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            X() > At &&
            ((n.flags |= 128), (r = !0), zt(o, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ll(i)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              zt(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !q)
            )
              return ce(n), null;
          } else
            2 * X() - o.renderingStartTime > At &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), zt(o, !1), (n.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = n.child), (n.child = i))
          : ((t = o.last),
            t !== null ? (t.sibling = i) : (n.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((n = o.tail),
          (o.rendering = n),
          (o.tail = n.sibling),
          (o.renderingStartTime = X()),
          (n.sibling = null),
          (t = Q.current),
          H(Q, r ? (t & 1) | 2 : t & 1),
          n)
        : (ce(n), null);
    case 22:
    case 23:
      return (
        Fi(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? xe & 1073741824 && (ce(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : ce(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(v(156, n.tag));
}
function _f(e, n) {
  switch ((gi(n), n.tag)) {
    case 1:
      return (
        we(n.type) && Xr(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        vt(),
        W(Ae),
        W(fe),
        Ci(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return Ei(n), null;
    case 13:
      if ((W(Q), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(v(340));
        ht();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return W(Q), null;
    case 4:
      return vt(), null;
    case 10:
      return wi(n.type._context), null;
    case 22:
    case 23:
      return Fi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _r = !1,
  de = !1,
  Pf = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function ot(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        G(e, n, r);
      }
    else t.current = null;
}
function Ho(e, n, t) {
  try {
    t();
  } catch (r) {
    G(e, n, r);
  }
}
var Vu = !1;
function zf(e, n) {
  if (((Eo = Yr), (e = na()), mi(e))) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, o.nodeType;
          } catch {
            t = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            d = 0,
            m = 0,
            h = e,
            p = null;
          n: for (;;) {
            for (
              var A;
              h !== t || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (s = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (A = h.firstChild) !== null;

            )
              (p = h), (h = A);
            for (;;) {
              if (h === e) break n;
              if (
                (p === t && ++d === l && (u = i),
                p === o && ++m === r && (s = i),
                (A = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = A;
          }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Co = { focusedElem: e, selectionRange: t }, Yr = !1, C = n; C !== null; )
    if (((n = C), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (C = e);
    else
      for (; C !== null; ) {
        n = C;
        try {
          var w = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    D = w.memoizedState,
                    c = n.stateNode,
                    a = c.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? k : Fe(n.type, k),
                      D
                    );
                  c.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var f = n.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(v(163));
            }
        } catch (g) {
          G(n, n.return, g);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (C = e);
          break;
        }
        C = n.return;
      }
  return (w = Vu), (Vu = !1), w;
}
function Ht(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ho(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function kl(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Vo(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function Xa(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Xa(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[qe], delete n[er], delete n[Po], delete n[df], delete n[ff])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ja(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $u(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ja(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function $o(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Zr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($o(e, n, t), e = e.sibling; e !== null; ) $o(e, n, t), (e = e.sibling);
}
function Wo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wo(e, n, t), e = e.sibling; e !== null; ) Wo(e, n, t), (e = e.sibling);
}
var oe = null,
  De = !1;
function dn(e, n, t) {
  for (t = t.child; t !== null; ) ba(e, n, t), (t = t.sibling);
}
function ba(e, n, t) {
  if (Qe && typeof Qe.onCommitFiberUnmount == "function")
    try {
      Qe.onCommitFiberUnmount(pl, t);
    } catch {}
  switch (t.tag) {
    case 5:
      de || ot(t, n);
    case 6:
      var r = oe,
        l = De;
      (oe = null),
        dn(e, n, t),
        (oe = r),
        (De = l),
        oe !== null &&
          (De
            ? ((e = oe),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : oe.removeChild(t.stateNode));
      break;
    case 18:
      oe !== null &&
        (De
          ? ((e = oe),
            (t = t.stateNode),
            e.nodeType === 8
              ? Wl(e.parentNode, t)
              : e.nodeType === 1 && Wl(e, t),
            Gt(e))
          : Wl(oe, t.stateNode));
      break;
    case 4:
      (r = oe),
        (l = De),
        (oe = t.stateNode.containerInfo),
        (De = !0),
        dn(e, n, t),
        (oe = r),
        (De = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !de &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Ho(t, n, i),
            (l = l.next);
        } while (l !== r);
      }
      dn(e, n, t);
      break;
    case 1:
      if (
        !de &&
        (ot(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          G(t, n, u);
        }
      dn(e, n, t);
      break;
    case 21:
      dn(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((de = (r = de) || t.memoizedState !== null), dn(e, n, t), (de = r))
        : dn(e, n, t);
      break;
    default:
      dn(e, n, t);
  }
}
function Wu(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new Pf()),
      n.forEach(function (r) {
        var l = Bf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function Me(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e,
          i = n,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (oe = u.stateNode), (De = !1);
              break e;
            case 3:
              (oe = u.stateNode.containerInfo), (De = !0);
              break e;
            case 4:
              (oe = u.stateNode.containerInfo), (De = !0);
              break e;
          }
          u = u.return;
        }
        if (oe === null) throw Error(v(160));
        ba(o, i, l), (oe = null), (De = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (d) {
        G(l, n, d);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) ec(n, e), (n = n.sibling);
}
function ec(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Me(n, e), $e(e), r & 4)) {
        try {
          Ht(3, e, e.return), kl(3, e);
        } catch (k) {
          G(e, e.return, k);
        }
        try {
          Ht(5, e, e.return);
        } catch (k) {
          G(e, e.return, k);
        }
      }
      break;
    case 1:
      Me(n, e), $e(e), r & 512 && t !== null && ot(t, t.return);
      break;
    case 5:
      if (
        (Me(n, e),
        $e(e),
        r & 512 && t !== null && ot(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          qt(l, "");
        } catch (k) {
          G(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = t !== null ? t.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Ss(l, o),
              mo(u, i);
            var d = mo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var m = s[i],
                h = s[i + 1];
              m === "style"
                ? _s(l, h)
                : m === "dangerouslySetInnerHTML"
                ? Cs(l, h)
                : m === "children"
                ? qt(l, h)
                : ni(l, m, h, d);
            }
            switch (u) {
              case "input":
                so(l, o);
                break;
              case "textarea":
                xs(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var A = o.value;
                A != null
                  ? ut(l, !!o.multiple, A, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? ut(l, !!o.multiple, o.defaultValue, !0)
                      : ut(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[er] = o;
          } catch (k) {
            G(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Me(n, e), $e(e), r & 4)) {
        if (e.stateNode === null) throw Error(v(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (k) {
          G(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Me(n, e), $e(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          Gt(n.containerInfo);
        } catch (k) {
          G(e, e.return, k);
        }
      break;
    case 4:
      Me(n, e), $e(e);
      break;
    case 13:
      Me(n, e),
        $e(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ri = X())),
        r & 4 && Wu(e);
      break;
    case 22:
      if (
        ((m = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((de = (d = de) || m), Me(n, e), (de = d)) : Me(n, e),
        $e(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !m && e.mode & 1)
        )
          for (C = e, m = e.child; m !== null; ) {
            for (h = C = m; C !== null; ) {
              switch (((p = C), (A = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ht(4, p, p.return);
                  break;
                case 1:
                  ot(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (t = p.return);
                    try {
                      (n = r),
                        (w.props = n.memoizedProps),
                        (w.state = n.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      G(r, t, k);
                    }
                  }
                  break;
                case 5:
                  ot(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Qu(h);
                    continue;
                  }
              }
              A !== null ? ((A.return = p), (C = A)) : Qu(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (l = h.stateNode),
                  d
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Ns("display", i)));
              } catch (k) {
                G(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = d ? "" : h.memoizedProps;
              } catch (k) {
                G(e, e.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Me(n, e), $e(e), r & 4 && Wu(e);
      break;
    case 21:
      break;
    default:
      Me(n, e), $e(e);
  }
}
function $e(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Ja(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(v(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (qt(l, ""), (r.flags &= -33));
          var o = $u(e);
          Wo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = $u(e);
          $o(e, u, i);
          break;
        default:
          throw Error(v(161));
      }
    } catch (s) {
      G(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function Tf(e, n, t) {
  (C = e), nc(e);
}
function nc(e, n, t) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || _r;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || de;
        u = _r;
        var d = de;
        if (((_r = i), (de = s) && !d))
          for (C = l; C !== null; )
            (i = C),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Yu(l)
                : s !== null
                ? ((s.return = i), (C = s))
                : Yu(l);
        for (; o !== null; ) (C = o), nc(o), (o = o.sibling);
        (C = l), (_r = u), (de = d);
      }
      qu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (C = o)) : qu(e);
  }
}
function qu(e) {
  for (; C !== null; ) {
    var n = C;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              de || kl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !de)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Fe(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = n.updateQueue;
              o !== null && zu(n, o, r);
              break;
            case 3:
              var i = n.updateQueue;
              if (i !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                zu(n, i, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var d = n.alternate;
                if (d !== null) {
                  var m = d.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Gt(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(v(163));
          }
        de || (n.flags & 512 && Vo(n));
      } catch (p) {
        G(n, n.return, p);
      }
    }
    if (n === e) {
      C = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (C = t);
      break;
    }
    C = n.return;
  }
}
function Qu(e) {
  for (; C !== null; ) {
    var n = C;
    if (n === e) {
      C = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (C = t);
      break;
    }
    C = n.return;
  }
}
function Yu(e) {
  for (; C !== null; ) {
    var n = C;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            kl(4, n);
          } catch (s) {
            G(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              G(n, l, s);
            }
          }
          var o = n.return;
          try {
            Vo(n);
          } catch (s) {
            G(n, o, s);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Vo(n);
          } catch (s) {
            G(n, i, s);
          }
      }
    } catch (s) {
      G(n, n.return, s);
    }
    if (n === e) {
      C = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      (u.return = n.return), (C = u);
      break;
    }
    C = n.return;
  }
}
var Lf = Math.ceil,
  ul = an.ReactCurrentDispatcher,
  ji = an.ReactCurrentOwner,
  je = an.ReactCurrentBatchConfig,
  M = 0,
  le = null,
  ee = null,
  ie = 0,
  xe = 0,
  it = zn(0),
  te = 0,
  ir = null,
  Hn = 0,
  Sl = 0,
  Ii = 0,
  Vt = null,
  ve = null,
  Ri = 0,
  At = 1 / 0,
  be = null,
  sl = !1,
  qo = null,
  xn = null,
  Pr = !1,
  vn = null,
  al = 0,
  $t = 0,
  Qo = null,
  Or = -1,
  Ur = 0;
function me() {
  return M & 6 ? X() : Or !== -1 ? Or : (Or = X());
}
function En(e) {
  return e.mode & 1
    ? M & 2 && ie !== 0
      ? ie & -ie
      : mf.transition !== null
      ? (Ur === 0 && (Ur = Os()), Ur)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qs(e.type))),
        e)
    : 1;
}
function Ue(e, n, t, r) {
  if (50 < $t) throw (($t = 0), (Qo = null), Error(v(185)));
  sr(e, t, r),
    (!(M & 2) || e !== le) &&
      (e === le && (!(M & 2) && (Sl |= t), te === 4 && hn(e, ie)),
      ke(e, r),
      t === 1 && M === 0 && !(n.mode & 1) && ((At = X() + 500), yl && Tn()));
}
function ke(e, n) {
  var t = e.callbackNode;
  pd(e, n);
  var r = Qr(e, e === le ? ie : 0);
  if (r === 0)
    t !== null && tu(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && tu(t), n === 1))
      e.tag === 0 ? pf(Ku.bind(null, e)) : da(Ku.bind(null, e)),
        af(function () {
          !(M & 6) && Tn();
        }),
        (t = null);
    else {
      switch (Us(r)) {
        case 1:
          t = ii;
          break;
        case 4:
          t = Ds;
          break;
        case 16:
          t = qr;
          break;
        case 536870912:
          t = Bs;
          break;
        default:
          t = qr;
      }
      t = ac(t, tc.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function tc(e, n) {
  if (((Or = -1), (Ur = 0), M & 6)) throw Error(v(327));
  var t = e.callbackNode;
  if (ft() && e.callbackNode !== t) return null;
  var r = Qr(e, e === le ? ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = cl(e, r);
  else {
    n = r;
    var l = M;
    M |= 2;
    var o = lc();
    (le !== e || ie !== n) && ((be = null), (At = X() + 500), Fn(e, n));
    do
      try {
        Rf();
        break;
      } catch (u) {
        rc(e, u);
      }
    while (!0);
    Ai(),
      (ul.current = o),
      (M = l),
      ee !== null ? (n = 0) : ((le = null), (ie = 0), (n = te));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = Ao(e)), l !== 0 && ((r = l), (n = Yo(e, l)))), n === 1)
    )
      throw ((t = ir), Fn(e, 0), hn(e, r), ke(e, X()), t);
    if (n === 6) hn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !jf(l) &&
          ((n = cl(e, r)),
          n === 2 && ((o = Ao(e)), o !== 0 && ((r = o), (n = Yo(e, o)))),
          n === 1))
      )
        throw ((t = ir), Fn(e, 0), hn(e, r), ke(e, X()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(v(345));
        case 2:
          jn(e, ve, be);
          break;
        case 3:
          if (
            (hn(e, r), (r & 130023424) === r && ((n = Ri + 500 - X()), 10 < n))
          ) {
            if (Qr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = _o(jn.bind(null, e, ve, be), n);
            break;
          }
          jn(e, ve, be);
          break;
        case 4:
          if ((hn(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Oe(r);
            (o = 1 << i), (i = n[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = X() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Lf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = _o(jn.bind(null, e, ve, be), r);
            break;
          }
          jn(e, ve, be);
          break;
        case 5:
          jn(e, ve, be);
          break;
        default:
          throw Error(v(329));
      }
    }
  }
  return ke(e, X()), e.callbackNode === t ? tc.bind(null, e) : null;
}
function Yo(e, n) {
  var t = Vt;
  return (
    e.current.memoizedState.isDehydrated && (Fn(e, n).flags |= 256),
    (e = cl(e, n)),
    e !== 2 && ((n = ve), (ve = t), n !== null && Ko(n)),
    e
  );
}
function Ko(e) {
  ve === null ? (ve = e) : ve.push.apply(ve, e);
}
function jf(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!He(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function hn(e, n) {
  for (
    n &= ~Ii,
      n &= ~Sl,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Oe(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function Ku(e) {
  if (M & 6) throw Error(v(327));
  ft();
  var n = Qr(e, 0);
  if (!(n & 1)) return ke(e, X()), null;
  var t = cl(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = Ao(e);
    r !== 0 && ((n = r), (t = Yo(e, r)));
  }
  if (t === 1) throw ((t = ir), Fn(e, 0), hn(e, n), ke(e, X()), t);
  if (t === 6) throw Error(v(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    jn(e, ve, be),
    ke(e, X()),
    null
  );
}
function Mi(e, n) {
  var t = M;
  M |= 1;
  try {
    return e(n);
  } finally {
    (M = t), M === 0 && ((At = X() + 500), yl && Tn());
  }
}
function Vn(e) {
  vn !== null && vn.tag === 0 && !(M & 6) && ft();
  var n = M;
  M |= 1;
  var t = je.transition,
    r = B;
  try {
    if (((je.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (je.transition = t), (M = n), !(M & 6) && Tn();
  }
}
function Fi() {
  (xe = it.current), W(it);
}
function Fn(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), sf(t)), ee !== null))
    for (t = ee.return; t !== null; ) {
      var r = t;
      switch ((gi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Xr();
          break;
        case 3:
          vt(), W(Ae), W(fe), Ci();
          break;
        case 5:
          Ei(r);
          break;
        case 4:
          vt();
          break;
        case 13:
          W(Q);
          break;
        case 19:
          W(Q);
          break;
        case 10:
          wi(r.type._context);
          break;
        case 22:
        case 23:
          Fi();
      }
      t = t.return;
    }
  if (
    ((le = e),
    (ee = e = Cn(e.current, null)),
    (ie = xe = n),
    (te = 0),
    (ir = null),
    (Ii = Sl = Hn = 0),
    (ve = Vt = null),
    Rn !== null)
  ) {
    for (n = 0; n < Rn.length; n++)
      if (((t = Rn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          o = t.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        t.pending = r;
      }
    Rn = null;
  }
  return e;
}
function rc(e, n) {
  do {
    var t = ee;
    try {
      if ((Ai(), (Fr.current = il), ol)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ol = !1;
      }
      if (
        ((Un = 0),
        (re = ne = Y = null),
        (Ut = !1),
        (rr = 0),
        (ji.current = null),
        t === null || t.return === null)
      ) {
        (te = 1), (ir = n), (ee = null);
        break;
      }
      e: {
        var o = e,
          i = t.return,
          u = t,
          s = n;
        if (
          ((n = ie),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var d = s,
            m = u,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var A = Mu(i);
          if (A !== null) {
            (A.flags &= -257),
              Fu(A, i, u, o, n),
              A.mode & 1 && Ru(o, d, n),
              (n = A),
              (s = d);
            var w = n.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(s), (n.updateQueue = k);
            } else w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              Ru(o, d, n), Di();
              break e;
            }
            s = Error(v(426));
          }
        } else if (q && u.mode & 1) {
          var D = Mu(i);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256),
              Fu(D, i, u, o, n),
              vi(yt(s, u));
            break e;
          }
        }
        (o = s = yt(s, u)),
          te !== 4 && (te = 2),
          Vt === null ? (Vt = [o]) : Vt.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (n &= -n), (o.lanes |= n);
              var c = Ua(o, s, n);
              Pu(o, c);
              break e;
            case 1:
              u = s;
              var a = o.type,
                f = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (xn === null || !xn.has(f))))
              ) {
                (o.flags |= 65536), (n &= -n), (o.lanes |= n);
                var g = Ha(o, u, n);
                Pu(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ic(t);
    } catch (x) {
      (n = x), ee === t && t !== null && (ee = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function lc() {
  var e = ul.current;
  return (ul.current = il), e === null ? il : e;
}
function Di() {
  (te === 0 || te === 3 || te === 2) && (te = 4),
    le === null || (!(Hn & 268435455) && !(Sl & 268435455)) || hn(le, ie);
}
function cl(e, n) {
  var t = M;
  M |= 2;
  var r = lc();
  (le !== e || ie !== n) && ((be = null), Fn(e, n));
  do
    try {
      If();
      break;
    } catch (l) {
      rc(e, l);
    }
  while (!0);
  if ((Ai(), (M = t), (ul.current = r), ee !== null)) throw Error(v(261));
  return (le = null), (ie = 0), te;
}
function If() {
  for (; ee !== null; ) oc(ee);
}
function Rf() {
  for (; ee !== null && !ld(); ) oc(ee);
}
function oc(e) {
  var n = sc(e.alternate, e, xe);
  (e.memoizedProps = e.pendingProps),
    n === null ? ic(e) : (ee = n),
    (ji.current = null);
}
function ic(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = _f(t, n)), t !== null)) {
        (t.flags &= 32767), (ee = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (te = 6), (ee = null);
        return;
      }
    } else if (((t = Nf(t, n, xe)), t !== null)) {
      ee = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      ee = n;
      return;
    }
    ee = n = e;
  } while (n !== null);
  te === 0 && (te = 5);
}
function jn(e, n, t) {
  var r = B,
    l = je.transition;
  try {
    (je.transition = null), (B = 1), Mf(e, n, t, r);
  } finally {
    (je.transition = l), (B = r);
  }
  return null;
}
function Mf(e, n, t, r) {
  do ft();
  while (vn !== null);
  if (M & 6) throw Error(v(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(v(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = t.lanes | t.childLanes;
  if (
    (md(e, o),
    e === le && ((ee = le = null), (ie = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      Pr ||
      ((Pr = !0),
      ac(qr, function () {
        return ft(), null;
      })),
    (o = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || o)
  ) {
    (o = je.transition), (je.transition = null);
    var i = B;
    B = 1;
    var u = M;
    (M |= 4),
      (ji.current = null),
      zf(e, t),
      ec(t, e),
      ef(Co),
      (Yr = !!Eo),
      (Co = Eo = null),
      (e.current = t),
      Tf(t),
      od(),
      (M = u),
      (B = i),
      (je.transition = o);
  } else e.current = t;
  if (
    (Pr && ((Pr = !1), (vn = e), (al = l)),
    (o = e.pendingLanes),
    o === 0 && (xn = null),
    sd(t.stateNode),
    ke(e, X()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (sl) throw ((sl = !1), (e = qo), (qo = null), e);
  return (
    al & 1 && e.tag !== 0 && ft(),
    (o = e.pendingLanes),
    o & 1 ? (e === Qo ? $t++ : (($t = 0), (Qo = e))) : ($t = 0),
    Tn(),
    null
  );
}
function ft() {
  if (vn !== null) {
    var e = Us(al),
      n = je.transition,
      t = B;
    try {
      if (((je.transition = null), (B = 16 > e ? 16 : e), vn === null))
        var r = !1;
      else {
        if (((e = vn), (vn = null), (al = 0), M & 6)) throw Error(v(331));
        var l = M;
        for (M |= 4, C = e.current; C !== null; ) {
          var o = C,
            i = o.child;
          if (C.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var d = u[s];
                for (C = d; C !== null; ) {
                  var m = C;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ht(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (C = h);
                  else
                    for (; C !== null; ) {
                      m = C;
                      var p = m.sibling,
                        A = m.return;
                      if ((Xa(m), m === d)) {
                        C = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = A), (C = p);
                        break;
                      }
                      C = A;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var D = k.sibling;
                    (k.sibling = null), (k = D);
                  } while (k !== null);
                }
              }
              C = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (C = i);
          else
            e: for (; C !== null; ) {
              if (((o = C), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ht(9, o, o.return);
                }
              var c = o.sibling;
              if (c !== null) {
                (c.return = o.return), (C = c);
                break e;
              }
              C = o.return;
            }
        }
        var a = e.current;
        for (C = a; C !== null; ) {
          i = C;
          var f = i.child;
          if (i.subtreeFlags & 2064 && f !== null) (f.return = i), (C = f);
          else
            e: for (i = a; C !== null; ) {
              if (((u = C), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kl(9, u);
                  }
                } catch (x) {
                  G(u, u.return, x);
                }
              if (u === i) {
                C = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (C = g);
                break e;
              }
              C = u.return;
            }
        }
        if (
          ((M = l), Tn(), Qe && typeof Qe.onPostCommitFiberRoot == "function")
        )
          try {
            Qe.onPostCommitFiberRoot(pl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = t), (je.transition = n);
    }
  }
  return !1;
}
function Gu(e, n, t) {
  (n = yt(t, n)),
    (n = Ua(e, n, 1)),
    (e = Sn(e, n, 1)),
    (n = me()),
    e !== null && (sr(e, 1, n), ke(e, n));
}
function G(e, n, t) {
  if (e.tag === 3) Gu(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Gu(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (xn === null || !xn.has(r)))
        ) {
          (e = yt(t, e)),
            (e = Ha(n, e, 1)),
            (n = Sn(n, e, 1)),
            (e = me()),
            n !== null && (sr(n, 1, e), ke(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Ff(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = me()),
    (e.pingedLanes |= e.suspendedLanes & t),
    le === e &&
      (ie & t) === t &&
      (te === 4 || (te === 3 && (ie & 130023424) === ie && 500 > X() - Ri)
        ? Fn(e, 0)
        : (Ii |= t)),
    ke(e, n);
}
function uc(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = yr), (yr <<= 1), !(yr & 130023424) && (yr = 4194304))
      : (n = 1));
  var t = me();
  (e = un(e, n)), e !== null && (sr(e, n, t), ke(e, t));
}
function Df(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), uc(e, t);
}
function Bf(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(v(314));
  }
  r !== null && r.delete(n), uc(e, t);
}
var sc;
sc = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || Ae.current) ye = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (ye = !1), Cf(e, n, t);
      ye = !!(e.flags & 131072);
    }
  else (ye = !1), q && n.flags & 1048576 && fa(n, el, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      Br(e, n), (e = n.pendingProps);
      var l = mt(n, fe.current);
      dt(n, t), (l = _i(null, n, r, e, l, t));
      var o = Pi();
      return (
        (n.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            we(r) ? ((o = !0), Jr(n)) : (o = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Si(n),
            (l.updater = wl),
            (n.stateNode = l),
            (l._reactInternals = n),
            Ro(n, r, e, t),
            (n = Do(null, n, r, !0, o, t)))
          : ((n.tag = 0), q && o && hi(n), pe(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (Br(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = Uf(r)),
          (e = Fe(r, e)),
          l)
        ) {
          case 0:
            n = Fo(null, n, r, e, t);
            break e;
          case 1:
            n = Ou(null, n, r, e, t);
            break e;
          case 11:
            n = Du(null, n, r, e, t);
            break e;
          case 14:
            n = Bu(null, n, r, Fe(r.type, e), t);
            break e;
        }
        throw Error(v(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Fe(r, l)),
        Fo(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Fe(r, l)),
        Ou(e, n, r, l, t)
      );
    case 3:
      e: {
        if ((qa(n), e === null)) throw Error(v(387));
        (r = n.pendingProps),
          (o = n.memoizedState),
          (l = o.element),
          ya(e, n),
          rl(n, r, null, t);
        var i = n.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (n.updateQueue.baseState = o),
            (n.memoizedState = o),
            n.flags & 256)
          ) {
            (l = yt(Error(v(423)), n)), (n = Uu(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = yt(Error(v(424)), n)), (n = Uu(e, n, r, t, l));
            break e;
          } else
            for (
              Ee = kn(n.stateNode.containerInfo.firstChild),
                Ce = n,
                q = !0,
                Be = null,
                t = ga(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((ht(), r === l)) {
            n = sn(e, n, t);
            break e;
          }
          pe(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        Aa(n),
        e === null && Lo(n),
        (r = n.type),
        (l = n.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        No(r, l) ? (i = null) : o !== null && No(r, o) && (n.flags |= 32),
        Wa(e, n),
        pe(e, n, i, t),
        n.child
      );
    case 6:
      return e === null && Lo(n), null;
    case 13:
      return Qa(e, n, t);
    case 4:
      return (
        xi(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = gt(n, null, r, t)) : pe(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Fe(r, l)),
        Du(e, n, r, l, t)
      );
    case 7:
      return pe(e, n, n.pendingProps, t), n.child;
    case 8:
      return pe(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return pe(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (o = n.memoizedProps),
          (i = l.value),
          H(nl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (He(o.value, i)) {
            if (o.children === l.children && !Ae.current) {
              n = sn(e, n, t);
              break e;
            }
          } else
            for (o = n.child, o !== null && (o.return = n); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = rn(-1, t & -t)), (s.tag = 2);
                      var d = o.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var m = d.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (d.pending = s);
                      }
                    }
                    (o.lanes |= t),
                      (s = o.alternate),
                      s !== null && (s.lanes |= t),
                      jo(o.return, t, n),
                      (u.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === n.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(v(341));
                (i.lanes |= t),
                  (u = i.alternate),
                  u !== null && (u.lanes |= t),
                  jo(i, t, n),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === n) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        pe(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        dt(n, t),
        (l = Ie(l)),
        (r = r(l)),
        (n.flags |= 1),
        pe(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = Fe(r, n.pendingProps)),
        (l = Fe(r.type, l)),
        Bu(e, n, r, l, t)
      );
    case 15:
      return Va(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Fe(r, l)),
        Br(e, n),
        (n.tag = 1),
        we(r) ? ((e = !0), Jr(n)) : (e = !1),
        dt(n, t),
        Oa(n, r, l),
        Ro(n, r, l, t),
        Do(null, n, r, !0, e, t)
      );
    case 19:
      return Ya(e, n, t);
    case 22:
      return $a(e, n, t);
  }
  throw Error(v(156, n.tag));
};
function ac(e, n) {
  return Fs(e, n);
}
function Of(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Le(e, n, t, r) {
  return new Of(e, n, t, r);
}
function Bi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Uf(e) {
  if (typeof e == "function") return Bi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ri)) return 11;
    if (e === li) return 14;
  }
  return 2;
}
function Cn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = Le(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Hr(e, n, t, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Bi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Zn:
        return Dn(t.children, l, o, n);
      case ti:
        (i = 8), (l |= 8);
        break;
      case ro:
        return (
          (e = Le(12, t, n, l | 2)), (e.elementType = ro), (e.lanes = o), e
        );
      case lo:
        return (e = Le(13, t, n, l)), (e.elementType = lo), (e.lanes = o), e;
      case oo:
        return (e = Le(19, t, n, l)), (e.elementType = oo), (e.lanes = o), e;
      case As:
        return xl(t, l, o, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case vs:
              i = 10;
              break e;
            case ys:
              i = 9;
              break e;
            case ri:
              i = 11;
              break e;
            case li:
              i = 14;
              break e;
            case fn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(v(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = Le(i, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = o), n
  );
}
function Dn(e, n, t, r) {
  return (e = Le(7, e, r, n)), (e.lanes = t), e;
}
function xl(e, n, t, r) {
  return (
    (e = Le(22, e, r, n)),
    (e.elementType = As),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Jl(e, n, t) {
  return (e = Le(6, e, null, n)), (e.lanes = t), e;
}
function bl(e, n, t) {
  return (
    (n = Le(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function Hf(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Il(0)),
    (this.expirationTimes = Il(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Il(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Oi(e, n, t, r, l, o, i, u, s) {
  return (
    (e = new Hf(e, n, t, u, s)),
    n === 1 ? ((n = 1), o === !0 && (n |= 8)) : (n = 0),
    (o = Le(3, null, null, n)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Si(o),
    e
  );
}
function Vf(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Gn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function cc(e) {
  if (!e) return _n;
  e = e._reactInternals;
  e: {
    if (Wn(e) !== e || e.tag !== 1) throw Error(v(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (we(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(v(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (we(t)) return ca(e, t, n);
  }
  return n;
}
function dc(e, n, t, r, l, o, i, u, s) {
  return (
    (e = Oi(t, r, !0, e, l, o, i, u, s)),
    (e.context = cc(null)),
    (t = e.current),
    (r = me()),
    (l = En(t)),
    (o = rn(r, l)),
    (o.callback = n ?? null),
    Sn(t, o, l),
    (e.current.lanes = l),
    sr(e, l, r),
    ke(e, r),
    e
  );
}
function El(e, n, t, r) {
  var l = n.current,
    o = me(),
    i = En(l);
  return (
    (t = cc(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = rn(o, i)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = Sn(l, n, i)),
    e !== null && (Ue(e, l, i, o), Mr(e, l, i)),
    i
  );
}
function dl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zu(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Ui(e, n) {
  Zu(e, n), (e = e.alternate) && Zu(e, n);
}
function $f() {
  return null;
}
var fc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Hi(e) {
  this._internalRoot = e;
}
Cl.prototype.render = Hi.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(v(409));
  El(e, n, null, null);
};
Cl.prototype.unmount = Hi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Vn(function () {
      El(null, e, null, null);
    }),
      (n[on] = null);
  }
};
function Cl(e) {
  this._internalRoot = e;
}
Cl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = $s();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < mn.length && n !== 0 && n < mn[t].priority; t++);
    mn.splice(t, 0, e), t === 0 && qs(e);
  }
};
function Vi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Nl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Xu() {}
function Wf(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var d = dl(i);
        o.call(d);
      };
    }
    var i = dc(n, r, e, 0, null, !1, !1, "", Xu);
    return (
      (e._reactRootContainer = i),
      (e[on] = i.current),
      Jt(e.nodeType === 8 ? e.parentNode : e),
      Vn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var d = dl(s);
      u.call(d);
    };
  }
  var s = Oi(e, 0, !1, null, null, !1, !1, "", Xu);
  return (
    (e._reactRootContainer = s),
    (e[on] = s.current),
    Jt(e.nodeType === 8 ? e.parentNode : e),
    Vn(function () {
      El(n, s, t, r);
    }),
    s
  );
}
function _l(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = dl(i);
        u.call(s);
      };
    }
    El(n, i, e, l);
  } else i = Wf(t, n, e, l, r);
  return dl(i);
}
Hs = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = It(n.pendingLanes);
        t !== 0 &&
          (ui(n, t | 1), ke(n, X()), !(M & 6) && ((At = X() + 500), Tn()));
      }
      break;
    case 13:
      Vn(function () {
        var r = un(e, 1);
        if (r !== null) {
          var l = me();
          Ue(r, e, 1, l);
        }
      }),
        Ui(e, 1);
  }
};
si = function (e) {
  if (e.tag === 13) {
    var n = un(e, 134217728);
    if (n !== null) {
      var t = me();
      Ue(n, e, 134217728, t);
    }
    Ui(e, 134217728);
  }
};
Vs = function (e) {
  if (e.tag === 13) {
    var n = En(e),
      t = un(e, n);
    if (t !== null) {
      var r = me();
      Ue(t, e, n, r);
    }
    Ui(e, n);
  }
};
$s = function () {
  return B;
};
Ws = function (e, n) {
  var t = B;
  try {
    return (B = e), n();
  } finally {
    B = t;
  }
};
go = function (e, n, t) {
  switch (n) {
    case "input":
      if ((so(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = vl(r);
            if (!l) throw Error(v(90));
            ks(r), so(r, l);
          }
        }
      }
      break;
    case "textarea":
      xs(e, t);
      break;
    case "select":
      (n = t.value), n != null && ut(e, !!t.multiple, n, !1);
  }
};
Ts = Mi;
Ls = Vn;
var qf = { usingClientEntryPoint: !1, Events: [cr, et, vl, Ps, zs, Mi] },
  Tt = {
    findFiberByHostInstance: In,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Qf = {
    bundleType: Tt.bundleType,
    version: Tt.version,
    rendererPackageName: Tt.rendererPackageName,
    rendererConfig: Tt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: an.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Rs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tt.findFiberByHostInstance || $f,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zr.isDisabled && zr.supportsFiber)
    try {
      (pl = zr.inject(Qf)), (Qe = zr);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qf;
_e.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vi(n)) throw Error(v(200));
  return Vf(e, n, null, t);
};
_e.createRoot = function (e, n) {
  if (!Vi(e)) throw Error(v(299));
  var t = !1,
    r = "",
    l = fc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = Oi(e, 1, !1, null, null, t, !1, r, l)),
    (e[on] = n.current),
    Jt(e.nodeType === 8 ? e.parentNode : e),
    new Hi(n)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(v(188))
      : ((e = Object.keys(e).join(",")), Error(v(268, e)));
  return (e = Rs(n)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return Vn(e);
};
_e.hydrate = function (e, n, t) {
  if (!Nl(n)) throw Error(v(200));
  return _l(null, e, n, !0, t);
};
_e.hydrateRoot = function (e, n, t) {
  if (!Vi(e)) throw Error(v(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    o = "",
    i = fc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (n = dc(n, null, e, 1, t ?? null, l, !1, o, i)),
    (e[on] = n.current),
    Jt(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new Cl(n);
};
_e.render = function (e, n, t) {
  if (!Nl(n)) throw Error(v(200));
  return _l(null, e, n, !1, t);
};
_e.unmountComponentAtNode = function (e) {
  if (!Nl(e)) throw Error(v(40));
  return e._reactRootContainer
    ? (Vn(function () {
        _l(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[on] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = Mi;
_e.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!Nl(t)) throw Error(v(200));
  if (e == null || e._reactInternals === void 0) throw Error(v(38));
  return _l(e, n, t, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function pc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pc);
    } catch (e) {
      console.error(e);
    }
}
pc(), (ps.exports = _e);
var Yf = ps.exports,
  Ju = Yf;
(no.createRoot = Ju.createRoot), (no.hydrateRoot = Ju.hydrateRoot);
const eo = "/assets/plastergreen2-fhPISPXC.png",
  Kf = "/assets/plasterorange-CT8j5aM3.png",
  bu = "/assets/plasterpink-BR3n7Usc.png";
function Gf({ timer: e }) {
  var n = {
    width: `${(e / 60) * 100}%`,
    backgroundImage: `url(${eo})`,
    borderRadius: "1.5rem",
    zIndex: 0,
  };
  return (
    e === 59 || e === 58
      ? (n = {
          width: `${(e / 60) * 100}%`,
          backgroundImage: `url(${eo})`,
          borderTopLeftRadius: "1.5rem",
          borderBottomLeftRadius: "1.5rem",
          borderTopRightRadius: "1rem",
          borderBottomRightRadius: "1rem",
          zIndex: 0,
        })
      : e <= 57 && e > 30
      ? (n = {
          width: `${(e / 60) * 100}%`,
          backgroundImage: `url(${eo})`,
          borderTopLeftRadius: "1.5rem",
          borderBottomLeftRadius: "1.5rem",
          zIndex: 0,
        })
      : e <= 30 && e > 15
      ? (n = {
          width: `${(e / 60) * 100}%`,
          backgroundImage: `url(${Kf})`,
          borderTopLeftRadius: "1.5rem",
          borderBottomLeftRadius: "1.5rem",
          zIndex: 0,
        })
      : e <= 15 && e > 2
      ? (n = {
          width: `${(e / 60) * 100}%`,
          backgroundImage: `url(${bu})`,
          borderTopLeftRadius: "1.5rem",
          borderBottomLeftRadius: "1.5rem",
          zIndex: 0,
        })
      : e <= 2 &&
        (n = {
          width: `${(e / 60) * 100 + 0.8}%`,
          backgroundImage: `url(${bu})`,
          borderTopLeftRadius: "7rem",
          borderBottomLeftRadius: "7rem",
          zIndex: 0,
        }),
    y.jsx(y.Fragment, {
      children: y.jsxs("div", {
        className: "timer-div2",
        children: [
          y.jsx("div", {
            className: "timer-div",
            children: y.jsx("div", { className: "timer", style: n }),
          }),
          y.jsx("img", { src: "./assets/plaster.png", alt: "" }),
        ],
      }),
    })
  );
}
function Je({ handleAddTime: e, children: n, handleClass: t }) {
  function r() {
    e();
  }
  return y.jsx(y.Fragment, {
    children: y.jsx("button", { onClick: r, className: t, children: n }),
  });
}
function Zf({ name: e, onChange: n }) {
  const [t, r] = Z.useState(!1),
    l = () => {
      r((i) => !i), console.log(e);
    };
  var o = y.jsxs("div", {
    className: "player-and-image",
    children: [
      y.jsx("img", { src: "./assets/playerpicture.png", alt: "" }),
      y.jsx("span", { className: "player-name", children: e }),
    ],
  });
  return (
    t &&
      (o = y.jsxs("div", {
        className: "player-and-image",
        children: [
          y.jsx("img", { src: "./assets/playerpicture.png", alt: "" }),
          y.jsx("input", {
            className: "name-input",
            type: "text",
            onChange: n,
            placeholder: e,
          }),
        ],
      })),
    y.jsx(y.Fragment, {
      children: y.jsxs("div", {
        className: "player-div",
        children: [
          o,
          y.jsx("button", {
            style: { backgroundColor: "#ffebcd00", border: "none" },
            onClick: l,
            children: y.jsx("i", {
              className: t
                ? "fa-regular fa-circle-check"
                : "fa-solid fa-pencil",
              style: t
                ? { fontSize: "1.5rem", cursor: "pointer" }
                : { fontSize: "1rem", cursor: "pointer", fontColor: "3C3B3B" },
            }),
          }),
        ],
      }),
    })
  );
}
const es = "/assets/Startsound-DrGhIdJv.mp3",
  Xf = "/assets/successsound-CZ_j9Ykn.mp3",
  Jf = "/assets/drumroll-BDaWbgIo.mp3",
  bf = "/assets/shuffle-DGe_ePs1.mp3",
  ep = "/assets/lowscore-BPTH5nxY.mp3",
  ns = "/assets/incorrect-B5nG8bcU.mp3",
  np = "/assets/hintsound-DXSZZM3T.mp3",
  tp =
    "data:audio/mpeg;base64,SUQzAwAAAAAAUFRFTkMAAAAVIAAAU291bmQgR3JpbmRlciA0LjAuNABBUElDAAAABCAAAAAAAFRDT1AAAAAZIAAAQ29weXJpZ2h0IEFsYW4gTWNLaW5uZXkA//uUyAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAIAAAIWAAODg4ODg4ODg4ODg5wcHBwcHBwcHBwcHCIiIiIiIiIiIiIiIiIsrKysrKysrKysrKy1dXV1dXV1dXV1dXV1ePj4+Pj4+Pj4+Pj4/Hx8fHx8fHx8fHx8fH///////////////8AAABOTEFNRTMuMTAwA7oAAAAAAAAAANQgJALAgQAB4AAACFjz2z9zAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sUyAADwAABpAAAACAAADSCgAAEC4eB4OE4fC4VAYCAIAzMgYHZGioG8M3OOMR+BhqE8BlhCnqYDGIR4DGkEbdADNh0AxISeaDsKYGsTaBi4vgZxCvNyfUBkogAZpAA//vEyCWAFpoTGblqgAcRQul3OdAAGTiN9kNgAgCBlINAYNHYGNQaBhMS/rupmBvwGDgAAuAALAgG2YKAn//DLZSEHiOBYBQA5P//i4yNJMghEiCGZIf//5NnyfKBOGBqXzEn////9A+hNFprdBTJ///////////opoG6DILN2/+//////////34/H4/ElUn2ZsEBjkgnH9ObqhjuzIcNzDoTNOis1Gf52JFxgUEDGayMyB/KmMAAUMBAXByDGCAj7yxMPQZMZQHBwYmpTLGQE4GhS+73gYeg+Y7iuYIhIZAoMuMz5ODWu48MQAYKgiGOQnIBTHYJDEoozHM9jNtfTXAsDLhJd//96YViiYegWYnh6YVg+EA+ZEhSZEFAY3HsYdCgYMhAYclEZUqR/P//8w6GYxMBAyOFIhD8xLBkxfDcVBgy7C0zMLcwtOMzYC8wCPoAE8ZJgr/////mDgAGEwgGHwBGCYEmFgZmQY2jQZGWIlmI5NmUotGGRkmlx2G2TGmO6FGjYOGRq1f/////+YXDQYrAsYyCsYUAKYZgqYOgWzaKAEEwwHjPUFTLQtTAoQjJo4TFw4AEAACMYx8FIyoD0xBKj////////zBoBjBICFWQ/HEEisBgsCBMAiV40JJheHYKEMxBKcKgaLCQEAQYFgQVAFMHRHGiDMSAzCAoMWixMYhMMnRW//////////////////////UvjkU6+kUZZO26KV2//////////////wuASZ7exxiSRrcV2uwzFxHuJ5iFMyAA0STEgoFjwOKg6ZAqlZaxFoymLgLFf12Vu24ZckVNocpYiBIEkNNIiIVE2xatCzFUUsx9NNeKsYrStVlwNHYNRUkIh4KlQVBVRYGn6wVBURBwGitIKhpt//tEyC6ADOR3Xf2EgAHjHmaxow4x46IgpxEDP3fWCom2AcIMAGxCGJyZlAYGNFuV0oKISkBbT0w1WU7cDNikNndlkEw7ByWWJEAI0MnOChwKARxFRVT1HYdYBwk5FmqwUjlbrbszBJZGyKiRKwEgwkuf/qUPvNjqrs2fNmbYGQpLLG1aUFx5Fd5sv6N9/0sBvH6t5M27A3QFmUAFRTssbJLPWINyABQF//t0yAgAEWF/Le0xD2HwoyR1vBg4IokBwyKhBYUXlZGFBbq0EFmCAhBGGpSZDTZIiVCCYxLfseGbDKs/6tHvVMrD1Uw0q8xasIvlD1AabjR4sSbZr0c88TXKY0dd9WwxVZ0u1OVndf14sponyQk10u4HdXPc7UMNlEWY+u+kZp4auqhktHnnRmpYsnG6vMUMCtyOlbjkcaR6Y4/JeleqAulVLArooNJyKI1YKLPC1lyxWmgHe9IadjiSLFLdW6GTokXMJScdt4iazFJPSdZLGHJVefybOZFU/8vkJfTq1PM2Toeq/zdZmlVbm8SQUt2by7VrZ/f1inhRRJzlonkqNPPPQFSxMCmZVCtH9VUSut223XWxsnECAAGWeZCwZL3C//tkyAmADfDxH608ykFIniO1kYm87JG0EIJ3u1hwm0z0ko+CYUsCTUbhEigaKJOYHYcPuTfhEpH1+dhE4WEHKYtjTfme8/RyqZbb9euYdBLXzdnmz22Yb/761s/kAiPaEwVqKsMx17ioiNgbej6P//6g0XK5Ndc0QAfhIksuKGcMefcxgODrtmPHYh046oBi3DqHzEwSOTA8HeDkmqsRBGNgADIUGumqrMrMTu35ddnIeZXOTY3fpiX6+hpUrbShCPc0ag25ZLdtrWimAEgvgwWIZe60QszecubZ5JoWpkczqEZjFKUzIHLSjApfCYpm//sUyBYASkCRHaekYSCACyP1gYgVejRheMe4rLKSUDx+0ArFmYo9qd9+28VQi5rHIDV+sWBsu0KBFQ1JNB2C36gMY6xDp179+1f1fbR4IpBThQE9Lw0Ea/8kegSUmw4L//sUyAKARXQFGaeEQCBBgKP0wIwEbKymIy4CjhpQekY7tf5Ji6t1v/ZpYNobxRFs+hPt/rs2dPto7HihBYYAFtAAU0ceH3/ppW5TKhJZjiacakxBTUUzLjEwMKqqqqqq//sUyAoDwEgDEgCMQCgMAEAB0AAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqVEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8=";
function rp() {
  const e = [
      "apple",
      "grape",
      "bread",
      "chair",
      "table",
      "clock",
      "spoon",
      "glass",
      "plate",
      "phone",
      "mouse",
      "piano",
      "plant",
      "cable",
      "shirt",
      "pants",
      "shoes",
      "dress",
      "pouch",
      "brush",
      "purse",
      "broom",
      "alarm",
      "light",
      "drive",
      "drink",
      "pizza",
      "bagel",
      "lemon",
      "berry",
      "truck",
      "frame",
      "photo",
      "paint",
      "block",
      "beach",
      "water",
      "straw",
      "rugby",
      "score",
      "teach",
      "paper",
      "music",
      "beard",
      "grill",
      "salad",
      "floor",
      "couch",
      "scarf",
      "sword",
      "candy",
      "swing",
      "fries",
      "lunch",
      "bench",
      "train",
      "coast",
      "house",
      "brick",
      "snake",
      "shark",
      "badge",
      "glove",
      "razor",
      "plane",
      "stair",
      "chalk",
      "towel",
      "tiger",
      "peach",
      "leash",
      "match",
      "liver",
      "frank",
      "cycle",
      "scoop",
      "vocal",
      "crate",
      "globe",
      "crown",
      "mower",
      "radio",
      "angel",
      "fruit",
      "grain",
      "flask",
      "blend",
      "timer",
      "gravy",
      "onion",
      "shelf",
      "linen",
      "pasta",
      "trunk",
      "spool",
      "flute",
      "write",
      "shade",
      "valve",
      "trail",
      "booth",
      "panel",
      "brake",
      "crane",
      "pearl",
      "press",
      "angle",
      "pearl",
      "flask",
      "score",
      "booth",
      "panel",
      "grill",
      "watch",
      "shade",
      "press",
      "valve",
      "wrist",
      "shock",
      "cider",
      "flare",
      "slice",
      "stone",
      "storm",
      "guard",
      "sword",
      "table",
      "cargo",
      "quiet",
      "crisp",
      "scent",
      "smoke",
      "flame",
      "shine",
      "weave",
      "snail",
      "field",
      "ridge",
      "trail",
      "spark",
      "cloud",
      "flour",
      "serve",
      "stove",
      "blame",
      "crash",
      "grove",
      "harsh",
      "nurse",
      "slope",
      "trace",
      "pitch",
      "dough",
      "frost",
      "petal",
      "bloom",
      "blend",
      "chess",
      "curve",
      "flock",
      "stack",
      "frank",
      "blush",
      "query",
      "spear",
      "vivid",
      "blend",
      "relax",
      "spine",
      "spray",
      "bride",
      "moist",
      "crisp",
      "joint",
      "lease",
      "crawl",
      "sweep",
      "swell",
      "rider",
      "taste",
      "climb",
      "spoon",
      "spoke",
      "pride",
      "grove",
      "thief",
      "torch",
      "globe",
      "couch",
      "alarm",
      "crane",
      "pouch",
      "frame",
      "snack",
      "trout",
      "grind",
      "clerk",
      "paint",
      "stair",
      "floor",
      "blink",
      "grape",
      "broom",
      "stool",
      "pride",
      "shift",
      "brave",
      "thumb",
      "toast",
      "grape",
      "wrist",
      "smile",
      "shine",
      "proud",
      "groom",
      "baker",
      "drain",
      "flood",
      "stick",
      "cross",
      "slide",
      "track",
      "shock",
      "wrath",
      "whale",
      "flute",
      "prune",
      "tread",
      "groan",
      "rival",
      "scout",
      "sheep",
      "stalk",
      "flash",
      "trace",
      "spade",
      "crate",
      "grind",
      "glide",
      "clown",
      "feast",
      "bloom",
      "slate",
      "cheer",
      "flash",
      "shout",
      "fever",
      "grill",
      "brisk",
      "flute",
      "skate",
      "spout",
      "crane",
      "flock",
      "shine",
      "groan",
      "flask",
      "catch",
      "prove",
      "blaze",
      "spray",
      "chill",
      "broth",
      "crest",
      "stake",
      "frown",
      "crust",
      "shrub",
      "greet",
      "swing",
      "clash",
      "flesh",
      "blend",
      "frown",
      "slope",
      "spine",
      "brush",
      "straw",
      "drive",
      "teach",
      "mower",
      "blend",
      "shear",
      "crane",
      "spark",
      "grave",
      "thigh",
      "plaza",
      "feast",
      "catch",
      "spike",
      "brisk",
      "nudge",
      "broil",
      "ranch",
      "grove",
      "wring",
      "scorn",
      "drown",
      "crest",
    ],
    n = [
      "picture",
      "morning",
      "kitchen",
      "address",
      "backpack",
      "battery",
      "bedroom",
      "blanket",
      "cabinet",
      "carwash",
      "ceiling",
      "chicken",
      "cleaner",
      "closets",
      "clothes",
      "cupcake",
      "curtain",
      "disease",
      "doorway",
      "drawers",
      "dustbin",
      "evening",
      "eyebrow",
      "flowers",
      "grocery",
      "haircut",
      "highway",
      "iceberg",
      "kettle",
      "library",
      "mailbox",
      "monitor",
      "notepad",
      "parking",
      "pencil",
      "printer",
      "receipt",
      "sandals",
      "scanner",
      "soapbox",
      "stadium",
      "stapler",
      "station",
      "sunrise",
      "tissues",
      "toaster",
      "traffic",
      "umbrella",
      "vacuum",
      "waiting",
      "wardrobe",
      "weekend",
      "windows",
      "account",
      "alcohol",
      "amazing",
      "article",
      "balloon",
      "bananas",
      "banking",
      "barrier",
      "baskets",
      "battery",
      "blanket",
      "bottles",
      "builder",
      "buttons",
      "cabinet",
      "calling",
      "cameras",
      "caravan",
      "carpets",
      "cartoon",
      "catalog",
      "ceiling",
      "central",
      "ceramic",
      "chances",
      "chicken",
      "cleaner",
      "classes",
      "cleaned",
      "closets",
      "clothes",
      "coffees",
      "college",
      "cooking",
      "copying",
      "correct",
      "cotton",
      "counter",
      "cupcake",
      "curtain",
      "dancers",
      "decides",
      "default",
      "defense",
      "density",
      "deserts",
      "despite",
      "details",
      "devices",
      "diamond",
      "digital",
      "discuss",
      "disease",
      "dislike",
      "display",
      "doorway",
      "drawing",
      "drawers",
      "drivers",
      "dustbin",
      "earring",
      "editors",
      "efforts",
      "evening",
      "eyebrow",
      "fashion",
      "feather",
      "figures",
      "flowers",
      "freedom",
      "freezer",
      "friends",
      "gaining",
      "gardens",
      "grocery",
      "haircut",
      "hangers",
      "heading",
      "healthy",
      "hearing",
      "holiday",
      "horizon",
      "iceberg",
      "impress",
      "improve",
      "include",
      "indoors",
      "insight",
      "instant",
      "kettle",
      "kitchen",
      "laptops",
      "laundry",
      "library",
      "luggage",
      "mailbox",
      "married",
      "matches",
      "maximum",
      "meaning",
      "meeting",
      "members",
      "message",
      "monitor",
      "morning",
      "muscles",
      "napkins",
      "natural",
      "necklace",
      "network",
      "notepad",
      "numbers",
      "opening",
      "package",
      "parking",
      "partner",
      "passage",
      "pencils",
      "perfect",
      "perform",
      "phones",
      "picture",
      "plastic",
      "playing",
      "pleased",
      "pockets",
      "popular",
      "posters",
      "pottery",
      "printer",
      "privacy",
      "produce",
      "project",
      "protect",
      "pudding",
      "purpose",
      "pushing",
      "receipt",
      "regular",
      "related",
      "removed",
      "replace",
      "rescue",
      "respect",
      "resting",
      "rewards",
      "ringing",
      "roadway",
      "roasted",
      "running",
      "sandals",
      "scanner",
      "schools",
      "scratch",
      "seasons",
      "seating",
      "service",
      "shampoo",
      "sharing",
      "shaving",
      "shelter",
      "shorter",
      "shouted",
      "signing",
      "silence",
      "sitting",
      "skating",
      "smiling",
      "soapbox",
      "someone",
      "speaker",
      "special",
      "stadium",
      "stapler",
      "station",
      "staying",
      "storage",
      "student",
      "subjects",
      "subways",
      "sunrise",
      "sweater",
      "systems",
      "t-shirts",
      "teacher",
      "teaching",
      "testing",
      "theatre",
      "thought",
      "tissues",
      "toaster",
      "tourism",
      "towards",
      "traffic",
      "travels",
      "treating",
      "trouble",
      "trucks",
      "turning",
      "umbrella",
      "unicorn",
      "updates",
      "upwards",
      "useful",
      "vacancy",
      "vacuum",
      "variety",
      "venture",
      "village",
      "waiting",
      "walking",
      "wardrobe",
      "watches",
      "weekend",
      "whisper",
      "windows",
      "winning",
      "without",
      "workers",
      "writing",
      "written",
      "yelling",
      "yellow",
      "yogurt",
      "zippers",
      "zealous",
      "zooming",
      "absence",
      "ballast",
      "beating",
      "brother",
      "cabbage",
      "caramel",
      "certain",
      "channel",
      "charity",
      "chemist",
      "chiming",
      "choices",
      "citizen",
      "climate",
      "colleagues",
      "compact",
      "complex",
      "contact",
      "content",
      "control",
      "cooking",
      "counter",
      "courage",
      "couple",
      "crucial",
      "culture",
      "cupcake",
      "current",
      "curtain",
      "cutting",
      "dealing",
      "decades",
      "decided",
      "default",
      "defense",
      "density",
      "despite",
      "desktop",
      "diamond",
      "digital",
      "discuss",
      "display",
      "drivers",
      "earring",
      "efforts",
      "elderly",
      "emotion",
      "emperor",
      "evening",
      "fashion",
      "feeding",
      "feather",
      "fiction",
      "figured",
      "finance",
      "freedom",
      "freezer",
      "friends",
      "gaining",
      "gardens",
      "general",
      "genuine",
      "glasses",
      "growing",
      "hangers",
      "heading",
      "healthy",
      "holiday",
      "housing",
      "iceberg",
      "improve",
      "include",
      "indoors",
      "instant",
      "kitchen",
      "laptops",
      "laundry",
      "library",
      "luggage",
      "mailbox",
      "matches",
      "meeting",
      "members",
      "monitor",
      "morning",
      "muscles",
      "natural",
      "network",
      "notepad",
      "opening",
      "package",
      "parking",
      "partner",
      "passage",
      "perfect",
      "perform",
      "plastic",
      "playing",
      "popular",
      "pottery",
      "produce",
      "project",
      "protect",
      "pudding",
      "purpose",
      "regular",
      "related",
      "removed",
      "replace",
      "rescue",
      "respect",
      "resting",
      "ringing",
      "roadway",
      "running",
      "schools",
      "scratch",
      "service",
      "shampoo",
      "sharing",
      "shaving",
      "shelter",
      "shorter",
      "silence",
      "skating",
      "smiling",
      "someone",
      "speaker",
      "special",
      "stadium",
      "station",
      "storage",
      "student",
      "sunrise",
      "teacher",
      "testing",
      "theatre",
      "tissues",
      "traffic",
      "turning",
      "updates",
      "useful",
      "vacancy",
      "waiting",
      "walking",
      "wardrobe",
      "weekend",
      "windows",
      "writing",
      "yellow",
      "absence",
      "certain",
      "choices",
      "climate",
      "control",
      "current",
      "diamond",
      "digital",
      "drivers",
      "elderly",
      "emotion",
      "finance",
      "general",
      "genuine",
      "growing",
      "healthy",
      "holiday",
      "include",
      "instant",
      "matches",
      "natural",
      "perfect",
      "plastic",
      "project",
      "rescue",
      "respect",
      "running",
      "schools",
      "service",
      "silence",
      "someone",
      "special",
      "station",
      "student",
      "sunrise",
      "theatre",
      "traffic",
      "updates",
      "walking",
      "weekend",
      "writing",
    ],
    t = [
      "computer",
      "sandwich",
      "birthday",
      "notebook",
      "building",
      "umbrella",
      "headache",
      "delivery",
      "hardware",
      "treasure",
      "children",
      "keyboard",
      "elevator",
      "hospital",
      "calendar",
      "location",
      "strategy",
      "industry",
      "planning",
      "invoices",
      "medicine",
      "learning",
      "reliable",
      "document",
      "aluminum",
      "magazine",
      "friendly",
      "vacation",
      "airplane",
      "baseball",
      "mountain",
      "language",
      "gardener",
      "graduate",
      "holidays",
      "newspaper",
      "bathroom",
      "headquarters",
      "reception",
      "scissors",
      "applause",
      "training",
      "passport",
      "colleague",
      "colorful",
      "stadiums",
      "festival",
      "assembly",
      "compound",
      "inflation",
      "semester",
      "official",
      "deadline",
      "workshop",
      "envelope",
      "software",
      "barbecue",
      "disaster",
      "research",
      "computer",
      "backpack",
      "dentists",
      "football",
      "medicine",
      "midnight",
      "platform",
      "quitting",
      "birthday",
      "solution",
      "strategy",
      "volcanic",
      "feedback",
      "tomorrow",
      "frequent",
      "incoming",
      "resource",
      "marathon",
      "textbook",
      "snapshot",
      "customer",
      "portrait",
      "workflow",
      "laughter",
      "wireless",
      "television",
      "lifestyle",
      "delivery",
      "ordinary",
      "customer",
      "sunshine",
      "checkout",
      "hospital",
      "reliable",
      "download",
      "umbrella",
      "vacation",
      "deadline",
      "organize",
      "headache",
      "backpack",
    ],
    [r, l] = Z.useState(""),
    [o, i] = Z.useState(60);
  var [u, s] = Z.useState(0);
  const [d, m] = Z.useState(""),
    [h, p] = Z.useState(""),
    [A, w] = Z.useState([]),
    [k, D] = Z.useState([]),
    [c, a] = Z.useState(3),
    [f, g] = Z.useState(!1),
    [x, _] = Z.useState("Player"),
    [N, P] = Z.useState(!1);
  var O = JSON.parse(localStorage.getItem("leaderboard"));
  const [I, Se] = Z.useState(
      O ? O.map((S) => ({ name: S.name, score: S.score })) : []
    ),
    [Ke, cn] = Z.useState(!1),
    [fr, Ve] = Z.useState([]);
  var se = document.getElementsByClassName("word-letters");
  let Ge;
  function E(S) {
    let z = {
      position: "absolute",
      zIndex: `${I.length - S}`,
      "--offset": `${S * 40}px`,
      "--offset2": `${S * 50}px`,
      top: 0,
      height: "auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "start",
      alignItems: "center",
      borderRadius: "2rem",
      border: "solid 2px #3C3B3B",
      backgroundColor: "#FFEBCD",
      color: "#3C3B3B",
      fontFamily: '"Jaini Purva", system-ui',
      fontStyle: "normal",
      fontWeight: "400",
    };
    return (
      S === 0
        ? (z = { ...z, backgroundColor: "#7AA497", color: "#FFEBCD" })
        : S === 1
        ? (z = { ...z, backgroundColor: "#FF8B5E", color: "#FFEBCD" })
        : S === 2 &&
          (z = { ...z, backgroundColor: "#CAB3B7", color: "#FFEBCD" }),
      z
    );
  }
  if (
    (Z.useEffect(() => {
      if ((gc(k), o === 0)) {
        const S = { name: x, score: u * 100 };
        Se((z) => {
          const T = [...z];
          if (T.length < 10) T.push(S);
          else {
            for (let F = 0; F < T.length; F++)
              if (S.score > T[F].score) {
                T.splice(F, 0, S);
                break;
              }
            T.length = 10;
          }
          return (
            T.sort((F, b) => b.score - F.score),
            localStorage.setItem("leaderboard", JSON.stringify(T)),
            T
          );
        });
      }
    }, [o]),
    o == 0 && u >= 10)
  ) {
    var L = new Audio(Jf);
    L.play();
  } else if (o == 0 && u < 10) {
    var L = new Audio(ep);
    L.play();
  }
  var j = document.getElementById("hint-text");
  function V(S) {
    let z = S.split("");
    for (let T = z.length - 1; T > 0; T--) {
      const F = Math.floor(Math.random() * (T + 1));
      [z[T], z[F]] = [z[F], z[T]];
    }
    return w(z), z.join("");
  }
  function J(S) {
    m(S.target.value);
    var z = new Audio(tp);
    z.play();
  }
  function qn(S) {
    _(S.target.value);
  }
  function Ze(S, z, T) {
    fr.includes(S)
      ? (m((F) => F.replace(z, "")),
        Ve((F) => F.filter((b) => b !== S)),
        (T.target.style.backgroundColor = "#3C3B3B"),
        (T.target.style.transform = "translate(0px, 0px)"))
      : (m((F) => F + z),
        Ve((F) => [...F, S]),
        (T.target.style.backgroundColor = "#646161"),
        (T.target.style.transform = "translate(0px, 4px)"));
  }
  function Qn() {
    Ge || ((Ge = new Audio(es)), (Ge.loop = !0)),
      f
        ? (g(!1), Ge.pause(), console.log("isplaying is false now"))
        : (Ge.play().catch((S) => {
            console.error("Error playing sound:", S);
          }),
          g(!0),
          console.log("isplaying is true now"));
  }
  Z.useEffect(() => {
    if (u < 5) {
      var S = Math.floor(Math.random(e) * e.length),
        z = e[S];
      l(z);
      var T = V(z);
      p(T);
    } else if (u >= 5 && u < 20) {
      var S = Math.floor(Math.random(n) * n.length),
        F = n[S];
      l(F);
      var T = V(F);
      p(T);
    } else if (u >= 20) {
      var S = Math.floor(Math.random(t) * t.length),
        F = t[S];
      l(F);
      var T = V(F);
      p(T);
    }
    Ve([]);
  }, [u]),
    Z.useEffect(() => {
      const S = setInterval(() => {
        i((z) => (z == 0 ? (clearInterval(S), 0) : z - 1));
      }, 1e3);
      return () => clearInterval(S);
    }, [o]);
  const Xe = [
    "#FFA785",
    "#7AA497",
    "#D2CF8A",
    "#96856A",
    "#8795A9",
    "#A987A4",
    "C9C22F",
    "A98787",
  ];
  function Yn(S) {
    let z = Math.floor(Math.random(S) * S.length);
    return {
      backgroundColor: `${S[z]}`,
      borderRadius: "2rem",
      boxShadow: "3px 4px 0 #3C3B3B",
      color: "#FFEBCD",
      fontFamily: '"Jaini Purva", system-ui',
      fontStyle: "normal",
      fontWeight: "400",
    };
  }
  function mc() {
    m(""), Ve([]);
    for (let S = 0; S < se.length; S++)
      (se[S].style.backgroundColor = "#3C3B3B"),
        (se[S].style.transform = "translate(0px, 0px)");
  }
  function $i() {
    i(60), s(0), a(3), D([]), m(""), P(!1), Ve([]), console.log(I);
  }
  function hc(S) {
    var z = new Audio(bf);
    let T = S.split("");
    for (let F = T.length - 1; F > 0; F--) {
      const b = Math.floor(Math.random() * (F + 1));
      [T[F], T[b]] = [T[b], T[F]];
    }
    w(T), z.play();
  }
  function gc(S) {
    for (let z = S.length - 1; z > 0; z--) {
      const T = Math.floor(Math.random() * (z + 1));
      [S[z], S[T]] = [S[T], S[z]];
    }
  }
  function vc() {
    var S = new Audio(np),
      z = new Audio(ns);
    c > 0 && !Ke
      ? ((j.innerHTML = `<span style="color: #3C3B3B; font-family:"Jaini Purva", system-ui">The first three letters are <span style='color:#FF8B5E'>${r
          .slice(0, 3)
          .toUpperCase()}</span></span>`),
        a((T) => T - 1),
        cn(!0),
        S.play())
      : c == 0
      ? ((j.innerHTML =
          '<span style="color: #3C3B3B;">You have exhausted your hints</span>'),
        z.play())
      : Ke &&
        ((j.innerHTML = `<span style="color: #3C3B3B; font-family:"Jaini Purva", system-ui">The first three letters are <span style='color:#FF8B5E'>${r
          .slice(0, 3)
          .toUpperCase()}</span></span>`),
        z.play());
  }
  function yc() {
    var S = document.getElementById("guess-input").value.toLowerCase(),
      z = new Audio(Xf);
    if (S == r && u < 5) {
      D((b) => [...b, S]);
      var T = Math.floor(Math.random(e) * e.length);
      s((b) => b + 1),
        i((b) => (b > 55 ? b + (60 - b) : b + 5)),
        l(e[T]),
        m(""),
        (j.textContent = ""),
        z.play();
      for (let b = 0; b < se.length; b++)
        (se[b].style.backgroundColor = "#3C3B3B"),
          (se[b].style.transform = "translate(0px, 0px)");
      Ve([]),
        setTimeout(() => {
          document.getElementById("guess-div").style.boxShadow =
            "green 0 0 100px 20px";
        }, 0),
        setTimeout(() => {
          document.getElementById("guess-div").style.boxShadow = "none";
        }, 100),
        window.innerWidth > 1e3 &&
          document.getElementById("guess-input").focus(),
        Ke && cn(!1);
    } else if (S == r && u >= 5 && u < 20) {
      D((U) => [...U, S]);
      var T = Math.floor(Math.random(n) * n.length);
      s((U) => U + 1),
        i((U) => (U > 50 ? U + (60 - U) : U + 10)),
        l(n[T]),
        m(""),
        (j.textContent = ""),
        z.play();
      for (let U = 0; U < se.length; U++)
        (se[U].style.backgroundColor = "#3C3B3B"),
          (se[U].style.transform = "translate(0px, 0px)");
      Ve([]),
        setTimeout(() => {
          document.getElementById("guess-div").style.boxShadow =
            "green 0 0 100px 20px";
        }, 0),
        setTimeout(() => {
          document.getElementById("guess-div").style.boxShadow = "none";
        }, 100),
        window.innerWidth > 1e3 &&
          document.getElementById("guess-input").focus();
    } else if (S == r && u >= 20) {
      D((U) => [...U, S]);
      var T = Math.floor(Math.random(t) * t.length);
      s((U) => U + 1),
        i((U) => (U > 50 ? U + (60 - U) : U + 10)),
        l(t[T]),
        m(""),
        (j.textContent = ""),
        z.play();
      for (let U = 0; U < se.length; U++)
        (se[U].style.backgroundColor = "#3C3B3B"),
          (se[U].style.transform = "translate(0px, 0px)");
      Ve([]),
        setTimeout(() => {
          document.getElementById("guess-div").style.boxShadow =
            "green 0 0 100px 20px";
        }, 0),
        setTimeout(() => {
          document.getElementById("guess-div").style.boxShadow = "none";
        }, 100),
        window.innerWidth > 1e3 &&
          document.getElementById("guess-input").focus();
    } else {
      var F = new Audio(ns);
      console.log("wrong attempt"),
        F.play(),
        setTimeout(() => {
          document.getElementById("guess-div").style.boxShadow =
            "red 0 0 100px 20px";
        }, 0),
        setTimeout(() => {
          document.getElementById("guess-div").style.boxShadow = "none";
        }, 100);
    }
  }
  if (o > 0)
    return y.jsx(y.Fragment, {
      children: y.jsx("section", {
        className: "game-area",
        children: y.jsxs("div", {
          className: "game-area-container",
          children: [
            y.jsx("div", { children: y.jsx(Zf, { name: x, onChange: qn }) }),
            y.jsx(Gf, { timer: o }),
            y.jsx("div", {
              className: "letters-container",
              children: A.map((S, z) =>
                y.jsx(
                  "div",
                  {
                    className: "word-letters",
                    id: "letters",
                    onClick: (T) => Ze(z, S, T),
                    children: S.toUpperCase(),
                  },
                  z
                )
              ),
            }),
            y.jsx("span", { id: "hint-text" }),
            y.jsxs("div", {
              className: "butons-div",
              children: [
                y.jsx("div", { className: "hint-count", children: c }),
                y.jsx(Je, {
                  handleAddTime: vc,
                  handleClass: "special-button",
                  children: y.jsx("i", {
                    className: "fa-regular fa-lightbulb",
                  }),
                }),
                y.jsx(Je, {
                  handleAddTime: () => hc(h),
                  handleClass: "special-button",
                  children: y.jsx("i", { className: "fa-solid fa-shuffle" }),
                }),
                y.jsx(Je, {
                  handleAddTime: Qn,
                  handleClass: "special-button",
                  children: y.jsx("i", { className: "fa-solid fa-music" }),
                }),
              ],
            }),
            y.jsxs("span", {
              className: "score",
              children: ["Score: ", u * 100],
            }),
            y.jsxs("div", {
              className: "guess-input",
              id: "guess-div",
              children: [
                y.jsx("input", {
                  type: "text",
                  id: "guess-input",
                  value: d,
                  onChange: J,
                }),
                y.jsx(Je, {
                  handleAddTime: mc,
                  handleClass: "special-button",
                  children: y.jsx("i", {
                    className: "fa-solid fa-delete-left",
                  }),
                }),
              ],
            }),
            y.jsx(Je, {
              handleAddTime: yc,
              handleClass: "play-button",
              style: { backgroundColor: "#3C3B3B" },
              children: "Play",
            }),
          ],
        }),
      }),
    });
  if (o === 0 && N === !1)
    return y.jsx(y.Fragment, {
      children: y.jsx("section", {
        className: "game-area",
        children: y.jsxs("div", {
          className: "result-area-container",
          children: [
            y.jsx("span", {
              className: "performance-message",
              children: u > 10 ? "Fantastic!" : "Better luck next time!",
            }),
            y.jsxs("span", {
              className: "words-list-heading-text",
              children: [
                "The correct answer was ",
                y.jsx("span", {
                  style: { color: "#FFA785" },
                  children: r.toUpperCase(),
                }),
              ],
            }),
            y.jsxs("span", {
              className: "words-list-heading-text",
              children: [
                "Your score was ",
                y.jsx("span", {
                  style: { color: "#FFA785" },
                  children: u * 100,
                }),
                ". Here is a list of words you unscrambled:",
              ],
            }),
            y.jsx("div", {
              className: "letters-container2",
              children: k.map((S, z) =>
                y.jsx(
                  "span",
                  {
                    className: "word-letters2",
                    style: Yn(Xe),
                    children: `${S.charAt(0).toUpperCase()}${S.slice(
                      1
                    ).toLowerCase()}`,
                  },
                  z
                )
              ),
            }),
            y.jsx(Je, {
              handleAddTime: $i,
              handleClass: "play-button",
              children: "Play again",
            }),
            y.jsx(Je, {
              handleAddTime: () => {
                P(!0), console.log(O);
              },
              handleClass: "play-button",
              children: "Go to leaderboards",
            }),
          ],
        }),
      }),
    });
  if (o === 0 && N === !0)
    return y.jsx(y.Fragment, {
      children: y.jsx("section", {
        className: "leaderboard-section",
        children: y.jsxs("div", {
          className: "leaderboard-area",
          children: [
            y.jsx("span", {
              className: "performance-message",
              children: "LEADERBOARD",
            }),
            y.jsxs("div", {
              className: "leaderboard-heading",
              children: [
                y.jsx("span", {
                  className: "heading-text",
                  children: "Player",
                }),
                y.jsx("span", { className: "heading-text", children: "Score" }),
              ],
            }),
            y.jsx("div", {
              className: "ranking",
              style: { height: `${O.length * 3}rem` },
              children: O.map((S, z) =>
                y.jsxs(
                  "div",
                  {
                    className: "playerClass",
                    style: E(z),
                    children: [
                      y.jsx("div", {
                        className: "player-rank",
                        children: y.jsx("div", {
                          className: "rank-text",
                          children: y.jsx("span", { children: z + 1 }),
                        }),
                      }),
                      y.jsxs("div", {
                        className: "player-details",
                        children: [
                          y.jsx("span", {
                            className: "player-name",
                            children: S.name,
                          }),
                          y.jsx("span", {
                            className: "player-score",
                            children: S.score,
                          }),
                        ],
                      }),
                    ],
                  },
                  z
                )
              ),
            }),
            y.jsx("div", {
              style:
                window.innerWidth > 1e3
                  ? { marginTop: "2rem" }
                  : { marginTop: "0rem" },
              children: y.jsx(Je, {
                handleAddTime: $i,
                handleClass: "play-button",
                children: "Play again",
              }),
            }),
            y.jsx("div", {
              style: { marginTop: "0.5rem" },
              children: y.jsx(Je, {
                handleAddTime: () => localStorage.clear(),
                handleClass: "play-button",
                children: "Clear Leaderboards",
              }),
            }),
          ],
        }),
      }),
    });
}
no.createRoot(document.getElementById("root")).render(
  y.jsx(Mc.StrictMode, { children: y.jsx(rp, {}) })
);
