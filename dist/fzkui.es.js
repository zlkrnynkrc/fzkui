import * as w from "react";
import J, { createContext as ue, useState as le, useCallback as V, useEffect as ie, useContext as de } from "react";
import { clsx as fe } from "clsx";
import { twMerge as me } from "tailwind-merge";
var D = { exports: {} }, T = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X;
function be() {
  if (X) return T;
  X = 1;
  var e = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function a(s, u, l) {
    var t = null;
    if (l !== void 0 && (t = "" + l), u.key !== void 0 && (t = "" + u.key), "key" in u) {
      l = {};
      for (var m in u)
        m !== "key" && (l[m] = u[m]);
    } else l = u;
    return u = l.ref, {
      $$typeof: e,
      type: s,
      key: t,
      ref: u !== void 0 ? u : null,
      props: l
    };
  }
  return T.Fragment = o, T.jsx = a, T.jsxs = a, T;
}
var h = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q;
function ve() {
  return q || (q = 1, process.env.NODE_ENV !== "production" && function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === ae ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case j:
          return "Fragment";
        case H:
          return "Profiler";
        case K:
          return "StrictMode";
        case re:
          return "Suspense";
        case te:
          return "SuspenseList";
        case oe:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case Q:
            return "Portal";
          case B:
            return (r.displayName || "Context") + ".Provider";
          case W:
            return (r._context.displayName || "Context") + ".Consumer";
          case ee:
            var n = r.render;
            return r = r.displayName, r || (r = n.displayName || n.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case ne:
            return n = r.displayName || null, n !== null ? n : e(r.type) || "Memo";
          case Y:
            n = r._payload, r = r._init;
            try {
              return e(r(n));
            } catch {
            }
        }
      return null;
    }
    function o(r) {
      return "" + r;
    }
    function a(r) {
      try {
        o(r);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var c = n.error, i = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return c.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), o(r);
      }
    }
    function s(r) {
      if (r === j) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === Y)
        return "<...>";
      try {
        var n = e(r);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var r = k.A;
      return r === null ? null : r.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function t(r) {
      if (I.call(r, "key")) {
        var n = Object.getOwnPropertyDescriptor(r, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function m(r, n) {
      function c() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: c,
        configurable: !0
      });
    }
    function x() {
      var r = e(this.type);
      return $[r] || ($[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function b(r, n, c, i, E, v, O, S) {
      return c = v.ref, r = {
        $$typeof: F,
        type: r,
        key: n,
        props: v,
        _owner: E
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function A(r, n, c, i, E, v, O, S) {
      var d = n.children;
      if (d !== void 0)
        if (i)
          if (se(d)) {
            for (i = 0; i < d.length; i++)
              M(d[i]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else M(d);
      if (I.call(n, "key")) {
        d = e(r);
        var _ = Object.keys(n).filter(function(ce) {
          return ce !== "key";
        });
        i = 0 < _.length ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}", G[d + i] || (_ = 0 < _.length ? "{" + _.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          d,
          _,
          d
        ), G[d + i] = !0);
      }
      if (d = null, c !== void 0 && (a(c), d = "" + c), t(n) && (a(n.key), d = "" + n.key), "key" in n) {
        c = {};
        for (var C in n)
          C !== "key" && (c[C] = n[C]);
      } else c = n;
      return d && m(
        c,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), b(
        r,
        d,
        v,
        E,
        u(),
        c,
        O,
        S
      );
    }
    function M(r) {
      typeof r == "object" && r !== null && r.$$typeof === F && r._store && (r._store.validated = 1);
    }
    var y = J, F = Symbol.for("react.transitional.element"), Q = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), W = Symbol.for("react.consumer"), B = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), oe = Symbol.for("react.activity"), ae = Symbol.for("react.client.reference"), k = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, se = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      "react-stack-bottom-frame": function(r) {
        return r();
      }
    };
    var L, $ = {}, U = y["react-stack-bottom-frame"].bind(
      y,
      l
    )(), z = N(s(l)), G = {};
    h.Fragment = j, h.jsx = function(r, n, c, i, E) {
      var v = 1e4 > k.recentlyCreatedOwnerStacks++;
      return A(
        r,
        n,
        c,
        !1,
        i,
        E,
        v ? Error("react-stack-top-frame") : U,
        v ? N(s(r)) : z
      );
    }, h.jsxs = function(r, n, c, i, E) {
      var v = 1e4 > k.recentlyCreatedOwnerStacks++;
      return A(
        r,
        n,
        c,
        !0,
        i,
        E,
        v ? Error("react-stack-top-frame") : U,
        v ? N(s(r)) : z
      );
    };
  }()), h;
}
process.env.NODE_ENV === "production" ? D.exports = be() : D.exports = ve();
var f = D.exports;
function p(...e) {
  return me(fe(e));
}
var pe = /* @__PURE__ */ ((e) => (e.Start = "justify-start", e.Center = "justify-center", e.End = "justify-end", e.SpaceBetween = "justify-between", e.SpaceAround = "justify-around", e.SpaceEvenly = "justify-evenly", e))(pe || {}), xe = /* @__PURE__ */ ((e) => (e.Start = "items-start", e.Center = "items-center", e.End = "items-end", e.Stretch = "items-stretch", e.Baseline = "items-baseline", e))(xe || {}), we = /* @__PURE__ */ ((e) => (e.Start = "self-start", e.Center = "self-center", e.End = "self-end", e.Stretch = "self-stretch", e.Baseline = "self-baseline", e))(we || {}), Ee = /* @__PURE__ */ ((e) => (e.None = "", e.All = "border", e.X = "border-x", e.Y = "border-y", e.Top = "border-t", e.Bottom = "border-b", e.Left = "border-l", e.Right = "border-r", e.Dashed = "border-dashed", e.Dotted = "border-dotted", e.Double = "border-double", e.Solid = "border-solid", e))(Ee || {}), ge = /* @__PURE__ */ ((e) => (e.None = "rounded-none", e.Sm = "rounded-sm", e.Md = "rounded-md", e.Lg = "rounded-lg", e.Xl = "rounded-xl", e["2xl"] = "rounded-2xl", e["3xl"] = "rounded-3xl", e.Full = "rounded-full", e))(ge || {}), g = /* @__PURE__ */ ((e) => (e.Default = "default", e.Destructive = "destructive", e.Outline = "outline", e.Secondary = "secondary", e.Ghost = "ghost", e.Link = "link", e))(g || {}), _e = /* @__PURE__ */ ((e) => (e.Default = "default", e.Secondary = "secondary", e.Outline = "outline", e.Destructive = "destructive", e))(_e || {}), R = /* @__PURE__ */ ((e) => (e.Default = "default", e.Secondary = "secondary", e.Destructive = "destructive", e.Outline = "outline", e))(R || {}), Re = /* @__PURE__ */ ((e) => (e.Auto = "w-auto", e.Px = "w-px", e.Full = "w-full", e.Screen = "w-screen", e.Fit = "w-fit", e.Min = "w-min", e.Max = "w-max", e["1/2"] = "w-1/2", e["1/3"] = "w-1/3", e["2/3"] = "w-2/3", e["1/4"] = "w-1/4", e["3/4"] = "w-3/4", e["1/5"] = "w-1/5", e["2/5"] = "w-2/5", e["3/5"] = "w-3/5", e["4/5"] = "w-4/5", e["1/6"] = "w-1/6", e["5/6"] = "w-5/6", e["1/12"] = "w-1/12", e["11/12"] = "w-11/12", e.w4 = "w-4", e.w16 = "w-16", e.w24 = "w-24", e.w28 = "w-28", e.w32 = "w-32", e.w48 = "w-48", e["250px"] = "w-[250px]", e["280px"] = "w-[280px]", e["300px"] = "w-[300px]", e))(Re || {}), Te = /* @__PURE__ */ ((e) => (e.Auto = "h-auto", e.Px = "h-px", e.Full = "h-full", e.Screen = "h-screen", e.Fit = "h-fit", e.Min = "h-min", e.Max = "h-max", e.h4 = "h-4", e.h16 = "h-16", e.h20 = "h-20", e.h24 = "h-24", e.h32 = "h-32", e.h40 = "h-40", e.h48 = "h-48", e["300px"] = "h-[300px]", e.Min_200px = "min-h-[200px]", e.Min_250px = "min-h-[250px]", e.Min_300px = "min-h-[300px]", e.Calc_100_minus_80px = "h-[calc(100%-80px)]", e))(Te || {});
const Ye = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
  None: "grid-cols-none"
}, he = (e, o) => {
  const a = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", s = {
    [g.Default]: "bg-primary text-primary-foreground hover:bg-primary/90",
    [g.Destructive]: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    [g.Outline]: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    [g.Secondary]: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    [g.Ghost]: "hover:bg-accent hover:text-accent-foreground",
    [g.Link]: "text-primary underline-offset-4 hover:underline"
  }, u = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10"
  };
  return p(
    a,
    s[e],
    u[o || "default"]
  );
}, ye = w.forwardRef(
  ({ className: e, variant: o = g.Default, size: a = "default", ...s }, u) => /* @__PURE__ */ f.jsx(
    "button",
    {
      className: p(he(o, a), e),
      ref: u,
      ...s
    }
  )
);
ye.displayName = "Button";
const je = w.forwardRef(({ className: e, width: o, height: a, borderStyle: s, borderRadius: u, ...l }, t) => /* @__PURE__ */ f.jsx(
  "div",
  {
    ref: t,
    className: p(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      o,
      a,
      s,
      u,
      e
    ),
    ...l
  }
));
je.displayName = "Card";
const ke = w.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ f.jsx(
  "div",
  {
    ref: a,
    className: p("flex flex-col space-y-1.5 p-6", e),
    ...o
  }
));
ke.displayName = "CardHeader";
const Ne = w.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ f.jsx(
  "h3",
  {
    ref: a,
    className: p(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...o
  }
));
Ne.displayName = "CardTitle";
const Oe = w.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ f.jsx(
  "p",
  {
    ref: a,
    className: p("text-sm text-muted-foreground", e),
    ...o
  }
));
Oe.displayName = "CardDescription";
const Se = w.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ f.jsx("div", { ref: a, className: p("p-6 pt-0", e), ...o }));
Se.displayName = "CardContent";
const Ce = w.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ f.jsx(
  "div",
  {
    ref: a,
    className: p("flex items-center p-6 pt-0", e),
    ...o
  }
));
Ce.displayName = "CardFooter";
const Ie = ({
  children: e,
  className: o,
  variant: a = R.Default,
  width: s,
  height: u,
  borderStyle: l,
  borderRadius: t,
  ...m
}) => {
  const x = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", b = {
    [R.Default]: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    [R.Secondary]: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    [R.Destructive]: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    [R.Outline]: "text-foreground"
  };
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: p(
        x,
        b[a],
        s,
        u,
        l,
        t,
        o
      ),
      ...m,
      children: e
    }
  );
}, Z = ue(
  void 0
), Pe = 300, De = 5e3, Le = ({
  children: e
}) => {
  const [o, a] = le([]), s = J.useRef(/* @__PURE__ */ new Map()), u = V((t) => {
    const m = Math.random().toString(36).substring(2, 9), x = {
      ...t,
      id: m,
      open: !0,
      duration: t.duration ?? De
    };
    return a((b) => [...b, x]), m;
  }, []), l = V((t) => {
    a(
      (x) => x.map((b) => b.id === t ? { ...b, open: !1 } : b)
    ), s.current.has(t) && clearTimeout(s.current.get(t));
    const m = setTimeout(() => {
      a((x) => x.filter((b) => b.id !== t)), s.current.delete(t);
    }, Pe);
    s.current.set(t, m);
  }, []);
  return ie(() => {
    o.forEach((t) => {
      if (t.open && t.duration !== 1 / 0 && !s.current.has(t.id)) {
        const m = setTimeout(() => {
          l(t.id);
        }, t.duration);
        s.current.set(t.id, m);
      }
    });
  }, [o, l]), /* @__PURE__ */ f.jsxs(Z.Provider, { value: { toasts: o, addToast: u, dismissToast: l }, children: [
    e,
    /* @__PURE__ */ f.jsx("div", { className: "fixed top-0 right-0 z-[9999] p-4 space-y-2 w-full max-w-xs pointer-events-none", children: o.map((t) => /* @__PURE__ */ f.jsxs(
      "div",
      {
        className: p(
          "relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all duration-300",
          t.open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full",
          // Simple slide/fade animation
          t.variant === "destructive" && "border-destructive bg-destructive text-destructive-foreground",
          t.variant === "success" && "border-green-500 bg-green-500 text-white",
          t.variant === "info" && "border-blue-500 bg-blue-500 text-white",
          t.variant === "default" && "bg-background text-foreground"
        ),
        style: { transitionProperty: "opacity, transform" },
        children: [
          /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1", children: [
            t.title && /* @__PURE__ */ f.jsx("div", { className: "text-sm font-semibold", children: t.title }),
            t.description && /* @__PURE__ */ f.jsx("div", { className: "text-sm opacity-90", children: t.description })
          ] }),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: () => l(t.id),
              className: "absolute right-2 top-2 rounded-md p-1 text-foreground/50 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 pointer-events-auto",
              children: "✕"
            }
          )
        ]
      },
      t.id
    )) })
  ] });
}, $e = () => {
  const e = de(Z);
  if (e === void 0)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, P = 768;
function Ue() {
  const [e, o] = w.useState(
    void 0
  );
  return w.useEffect(() => {
    const a = window.matchMedia(`(max-width: ${P - 1}px)`), s = () => {
      o(window.innerWidth < P);
    };
    return a.addEventListener("change", s), o(window.innerWidth < P), () => a.removeEventListener("change", s);
  }, []), !!e;
}
export {
  Ie as Badge,
  R as BadgeType,
  ge as BorderRadius,
  Ee as BorderStyle,
  we as BoxAlign,
  ye as Button,
  g as ButtonType,
  je as Card,
  Se as CardContent,
  Oe as CardDescription,
  Ce as CardFooter,
  ke as CardHeader,
  Ne as CardTitle,
  _e as ChipType,
  xe as CrossAxisAlignment,
  Ye as GridColumns,
  Te as Height,
  pe as MainAxisAlignment,
  Z as ToastContext,
  Le as ToastProvider,
  Re as Width,
  p as cn,
  Ue as useIsMobile,
  $e as useToast
};
