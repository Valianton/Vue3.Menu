import { defineComponent as E, openBlock as w, createElementBlock as k, normalizeClass as Ae, renderSlot as L, createBlock as C, withCtx as _, createElementVNode as ie, resolveDynamicComponent as re, createCommentVNode as j, normalizeStyle as U, toDisplayString as Ce, mergeProps as R, cloneVNode as Je, h as X, toRefs as ue, ref as h, getCurrentInstance as ee, reactive as Qe, watch as I, watchEffect as ae, markRaw as $e, unref as d, onMounted as H, Fragment as W, createVNode as A, createTextVNode as et, computed as T, onUnmounted as q, effectScope as tt, nextTick as ce, inject as nt, provide as ot, getCurrentScope as lt, onScopeDispose as rt, useAttrs as at, onBeforeUnmount as st, Teleport as it, Transition as ut, renderList as ct, withModifiers as dt, normalizeProps as vt, guardReactiveProps as pt } from "vue";
const ft = /* @__PURE__ */ E({
  __name: "Divider",
  props: {
    type: { default: "vertical" }
  },
  setup(t) {
    return (e, o) => (w(), k("div", {
      class: Ae([e.$style.divider, e.$style[e.type]])
    }, null, 2));
  }
}), mt = "_divider_7sc17_3", ht = "_horizontal_7sc17_13", yt = "_vertical_7sc17_27", wt = {
  divider: mt,
  horizontal: ht,
  vertical: yt
}, gt = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, l] of e)
    o[n] = l;
  return o;
}, bt = {
  $style: wt
}, St = /* @__PURE__ */ gt(ft, [["__cssModules", bt]]), _t = ["height", "width"], Et = /* @__PURE__ */ E({
  __name: "IconSvg",
  props: {
    size: { default: 18 }
  },
  setup(t) {
    return (e, o) => (w(), k("svg", {
      height: e.size,
      width: e.size,
      fill: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      L(e.$slots, "default")
    ], 8, _t));
  }
}), Ct = /* @__PURE__ */ ie("path", { d: "M10,17L15,12L10,7V17Z" }, null, -1), $t = /* @__PURE__ */ E({
  __name: "IconMenuRight",
  props: {
    size: { default: 20 }
  },
  setup(t) {
    return (e, o) => (w(), C(Et, { size: e.size }, {
      default: _(() => [
        Ct
      ]),
      _: 1
    }, 8, ["size"]));
  }
}), Nt = { class: "menu-item" }, Lt = {
  key: 1,
  class: "menu-item-shortcut"
}, xt = /* @__PURE__ */ E({
  __name: "MenuItem",
  props: {
    icon: {},
    label: {},
    items: {},
    style: {},
    shortcut: {},
    component: {},
    separator: { type: Boolean },
    command: { type: Function },
    stopPropagation: { type: Boolean }
  },
  setup(t) {
    return (e, o) => (w(), k("div", Nt, [
      e.icon ? (w(), C(re(e.icon), {
        key: 0,
        class: "menu-item-icon"
      })) : j("", !0),
      ie("div", {
        class: "menu-item-caption",
        style: U(e.style)
      }, Ce(e.label), 5),
      e.shortcut ? (w(), k("span", Lt, Ce(e.shortcut), 1)) : j("", !0)
    ]));
  }
});
function G(t, e) {
  const o = typeof t == "string" && !e ? `${t}Context` : e, n = Symbol(o);
  return [(l) => {
    const s = nt(n, l);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(t) ? `one of the following components: ${t.join(
        ", "
      )}` : `\`${t}\``}`
    );
  }, (l) => (ot(n, l), l)];
}
function Tt(t) {
  return lt() ? (rt(t), !0) : !1;
}
function Me(t) {
  let e = !1, o;
  const n = tt(!0);
  return (...l) => (e || (o = n.run(() => t(...l)), e = !0), o);
}
function se(t) {
  return typeof t == "function" ? t() : d(t);
}
const At = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ne = () => {
};
function Mt(t, e) {
  function o(...n) {
    return new Promise((l, s) => {
      Promise.resolve(t(() => e.apply(this, n), { fn: e, thisArg: this, args: n })).then(l).catch(s);
    });
  }
  return o;
}
function Rt(t, e = {}) {
  let o, n, l = Ne;
  const s = (r) => {
    clearTimeout(r), l(), l = Ne;
  };
  return (r) => {
    const a = se(t), i = se(e.maxWait);
    return o && s(o), a <= 0 || i !== void 0 && i <= 0 ? (n && (s(n), n = null), Promise.resolve(r())) : new Promise((u, m) => {
      l = e.rejectOnCancel ? m : u, i && !n && (n = setTimeout(() => {
        o && s(o), n = null, u(r());
      }, i)), o = setTimeout(() => {
        n && s(n), n = null, u(r());
      }, a);
    });
  };
}
function Re(t, e = 200, o = {}) {
  return Mt(
    Rt(e, o),
    t
  );
}
function Ot(t, e, o) {
  const n = I(t, (...l) => (ce(() => n()), e(...l)), o);
  return n;
}
function F(t) {
  var e;
  const o = se(t);
  return (e = o == null ? void 0 : o.$el) != null ? e : o;
}
const kt = At ? window : void 0;
function Pt() {
  const t = h(!1);
  return ee() && H(() => {
    t.value = !0;
  }), t;
}
function zt(t) {
  const e = Pt();
  return T(() => (e.value, !!t()));
}
function Q(t, e, o = {}) {
  const { window: n = kt, ...l } = o;
  let s;
  const r = zt(() => n && "ResizeObserver" in n), a = () => {
    s && (s.disconnect(), s = void 0);
  }, i = T(() => Array.isArray(t) ? t.map((v) => F(v)) : [F(t)]), u = I(
    i,
    (v) => {
      if (a(), r.value && n) {
        s = new ResizeObserver(e);
        for (const p of v)
          p && s.observe(p, l);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), m = () => {
    a(), u();
  };
  return Tt(m), {
    isSupported: r,
    stop: m
  };
}
function de(t) {
  return t ? t.flatMap((e) => e.type === W ? de(e.children) : [e]) : [];
}
const [Dt, rn] = G("ConfigProvider");
Me(() => ({ count: h(0) }));
function Ht(t) {
  const e = Dt({
    dir: h("ltr")
  });
  return T(() => {
    var o;
    return (t == null ? void 0 : t.value) || ((o = e.dir) == null ? void 0 : o.value) || "ltr";
  });
}
function O() {
  const t = ee(), e = h(), o = T(() => {
    var r, a;
    return ["#text", "#comment"].includes((r = e.value) == null ? void 0 : r.$el.nodeName) ? (a = e.value) == null ? void 0 : a.$el.nextElementSibling : F(e);
  }), n = Object.assign({}, t.exposed), l = {};
  for (const r in t.props)
    Object.defineProperty(l, r, {
      enumerable: !0,
      configurable: !0,
      get: () => t.props[r]
    });
  if (Object.keys(n).length > 0)
    for (const r in n)
      Object.defineProperty(l, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r]
      });
  Object.defineProperty(l, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => t.vnode.el
  }), t.exposed = l;
  function s(r) {
    e.value = r, !(r instanceof Element || !r) && (Object.defineProperty(l, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => r.$el
    }), t.exposed = l);
  }
  return { forwardRef: s, currentRef: e, currentElement: o };
}
function Oe(t, e) {
  const o = h(t);
  function n(l) {
    return e[o.value][l] ?? o.value;
  }
  return {
    state: o,
    dispatch: (l) => {
      o.value = n(l);
    }
  };
}
const ve = E({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(t, { attrs: e, slots: o }) {
    return () => {
      var n, l;
      if (!o.default)
        return null;
      const s = de(o.default()), [r, ...a] = s;
      if (Object.keys(e).length > 0) {
        (n = r.props) == null || delete n.ref;
        const i = R(e, r.props ?? {});
        e.class && (l = r.props) != null && l.class && delete r.props.class;
        const u = Je(r, i);
        for (const m in i)
          m.startsWith("on") && (u.props || (u.props = {}), u.props[m] = i[m]);
        return s.length === 1 ? u : [u, ...a];
      }
      return s;
    };
  }
}), K = E({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(t, { attrs: e, slots: o }) {
    return (t.asChild ? "template" : t.as) !== "template" ? () => X(t.as, e, { default: o.default }) : () => X(ve, e, { default: o.default });
  }
});
function ke() {
  const t = h(), e = T(() => {
    var o, n;
    return ["#text", "#comment"].includes((o = t.value) == null ? void 0 : o.$el.nodeName) ? (n = t.value) == null ? void 0 : n.$el.nextElementSibling : F(t);
  });
  return {
    primitiveElement: t,
    currentElement: e
  };
}
function Bt(t, e) {
  const o = h({}), n = h("none"), l = t.value ? "mounted" : "unmounted", { state: s, dispatch: r } = Oe(l, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  I(
    t,
    async (v, p) => {
      var g;
      const M = p !== v;
      if (await ce(), M) {
        const N = n.value, b = Z(e.value);
        v ? r("MOUNT") : b === "none" || ((g = o.value) == null ? void 0 : g.display) === "none" ? r("UNMOUNT") : r(p && N !== b ? "ANIMATION_OUT" : "UNMOUNT");
      }
    },
    { immediate: !0 }
  );
  const a = (v) => {
    const p = Z(e.value), g = p.includes(
      v.animationName
    );
    v.target === e.value && g && r("ANIMATION_END"), v.target === e.value && p === "none" && r("ANIMATION_END");
  }, i = (v) => {
    v.target === e.value && (n.value = Z(e.value));
  }, u = I(
    e,
    (v, p) => {
      v ? (o.value = getComputedStyle(v), v.addEventListener("animationstart", i), v.addEventListener("animationcancel", a), v.addEventListener("animationend", a)) : (r("ANIMATION_END"), p == null || p.removeEventListener("animationstart", i), p == null || p.removeEventListener("animationcancel", a), p == null || p.removeEventListener("animationend", a));
    },
    { immediate: !0 }
  ), m = I(s, () => {
    const v = Z(e.value);
    n.value = s.value === "mounted" ? v : "none";
  });
  return q(() => {
    u(), m();
  }), {
    isPresent: T(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function Z(t) {
  return t && getComputedStyle(t).animationName || "none";
}
const pe = E({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(t, { slots: e, expose: o }) {
    var n;
    const { present: l, forceMount: s } = ue(t), r = h(), { isPresent: a } = Bt(l, r);
    o({ present: a });
    let i = e.default({ present: a });
    i = de(i || []);
    const u = ee();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const m = (n = u == null ? void 0 : u.parent) != null && n.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${m}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((v) => `  - ${v}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => s.value || l.value || a.value ? X(e.default({ present: a })[0], {
      ref: (m) => {
        const v = F(m);
        return typeof (v == null ? void 0 : v.hasAttribute) > "u" || (v != null && v.hasAttribute("data-radix-popper-content-wrapper") ? r.value = v.firstElementChild : r.value = v), v;
      }
    }) : null;
  }
});
Qe({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
Me(() => h([]));
const [Pe, an] = G("CollectionProvider");
E({
  name: "CollectionSlot",
  setup(t, { slots: e }) {
    const o = Pe(), { primitiveElement: n, currentElement: l } = ke();
    return I(l, () => {
      o.collectionRef.value = l.value;
    }), () => X(ve, { ref: n }, e);
  }
});
E({
  name: "CollectionItem",
  setup(t, { slots: e, attrs: o }) {
    const n = Pe(), { primitiveElement: l, currentElement: s } = ke(), r = ee();
    return ae((a) => {
      var i;
      if (s.value) {
        const u = $e(s.value);
        n.itemMap.value.set(u, { ref: s.value, ...$e(((i = r == null ? void 0 : r.parent) == null ? void 0 : i.props) ?? {}) }), a(() => n.itemMap.value.delete(u));
      }
    }), () => X(ve, { ...o, [n.attrName]: "", ref: l }, e);
  }
});
const [P, It] = G("ScrollAreaRoot"), Yt = /* @__PURE__ */ E({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: {},
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: o, currentElement: n } = O(), l = h(0), s = h(0), r = h(), a = h(), i = h(), u = h(), m = h(!1), v = h(!1), { type: p, dir: g, scrollHideDelay: M } = ue(e), N = Ht(g);
    return It({
      type: p,
      dir: N,
      scrollHideDelay: M,
      scrollArea: n,
      viewport: r,
      onViewportChange: (b) => {
        r.value = b || void 0;
      },
      content: a,
      onContentChange: (b) => {
        a.value = b;
      },
      scrollbarX: i,
      scrollbarXEnabled: m,
      scrollbarY: u,
      scrollbarYEnabled: v,
      onScrollbarXChange: (b) => {
        i.value = b || void 0;
      },
      onScrollbarYChange: (b) => {
        u.value = b || void 0;
      },
      onScrollbarXEnabledChange: (b) => {
        m.value = b;
      },
      onScrollbarYEnabledChange: (b) => {
        v.value = b;
      },
      onCornerWidthChange: (b) => {
        l.value = b;
      },
      onCornerHeightChange: (b) => {
        s.value = b;
      }
    }), (b, c) => (w(), C(d(K), {
      ref: d(o),
      "as-child": e.asChild,
      as: b.as,
      dir: d(N),
      style: U({
        position: "relative",
        // Pass corner sizes as CSS vars to reduce re-renders of context consumers
        "--radix-scroll-area-corner-width": `${l.value}px`,
        "--radix-scroll-area-corner-height": `${s.value}px`
      })
    }, {
      default: _(() => [
        L(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "dir", "style"]));
  }
}), Ut = /* @__PURE__ */ E({
  inheritAttrs: !1,
  __name: "ScrollAreaViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t, { expose: e }) {
    const o = t, n = P(), l = h();
    H(() => {
      n.onViewportChange(l.value), n.onContentChange(r.value);
    }), e({
      viewportElement: l
    });
    const { forwardRef: s, currentElement: r } = O();
    return (a, i) => (w(), k(W, null, [
      ie("div", R({
        ref_key: "viewportElement",
        ref: l,
        "data-radix-scroll-area-viewport": "",
        style: {
          /**
           * We don't support `visible` because the intention is to have at least one scrollbar
           * if this component is used and `visible` will behave like `auto` in that case
           * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
           *
           * We don't handle `auto` because the intention is for the native implementation
           * to be hidden if using this component. We just want to ensure the node is scrollable
           * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
           * the browser from having to work out whether to render native scrollbars or not,
           * we tell it to with the intention of hiding them in CSS.
           */
          overflowX: d(n).scrollbarXEnabled.value ? "scroll" : "hidden",
          overflowY: d(n).scrollbarYEnabled.value ? "scroll" : "hidden"
        }
      }, a.$attrs, { tabindex: 0 }), [
        A(d(K), {
          ref: d(s),
          style: { minWidth: "100%", display: "table" },
          "as-child": o.asChild,
          as: a.as
        }, {
          default: _(() => [
            L(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as"])
      ], 16),
      A(d(K), { as: "style" }, {
        default: _(() => [
          et(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-radix-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")
        ]),
        _: 1
      })
    ], 64));
  }
});
function Vt(t, [e, o]) {
  return Math.min(o, Math.max(e, t));
}
function ze(t, e) {
  return (o) => {
    if (t[0] === t[1] || e[0] === e[1])
      return e[0];
    const n = (e[1] - e[0]) / (t[1] - t[0]);
    return e[0] + n * (o - t[0]);
  };
}
function te(t) {
  const e = De(t.viewport, t.content), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, n = (t.scrollbar.size - o) * e;
  return Math.max(n, 18);
}
function De(t, e) {
  const o = t / e;
  return Number.isNaN(o) ? 0 : o;
}
function Wt(t, e = () => {
}) {
  let o = { left: t.scrollLeft, top: t.scrollTop }, n = 0;
  return function l() {
    const s = { left: t.scrollLeft, top: t.scrollTop }, r = o.left !== s.left, a = o.top !== s.top;
    (r || a) && e(), o = s, n = window.requestAnimationFrame(l);
  }(), () => window.cancelAnimationFrame(n);
}
function Le(t, e, o = "ltr") {
  const n = te(e), l = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, s = e.scrollbar.size - l, r = e.content - e.viewport, a = s - n, i = o === "ltr" ? [0, r] : [r * -1, 0], u = Vt(
    t,
    i
  );
  return ze([0, r], [0, a])(u);
}
function J(t) {
  return t ? Number.parseInt(t, 10) : 0;
}
function jt(t, e, o, n = "ltr") {
  const l = te(o), s = l / 2, r = e || s, a = l - r, i = o.scrollbar.paddingStart + r, u = o.scrollbar.size - o.scrollbar.paddingEnd - a, m = o.content - o.viewport, v = n === "ltr" ? [0, m] : [m * -1, 0];
  return ze(
    [i, u],
    v
  )(t);
}
function xe(t, e) {
  return t > 0 && t < e;
}
const He = /* @__PURE__ */ E({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(t, { emit: e }) {
    const o = t, n = e, l = P(), s = ne(), r = oe(), { forwardRef: a, currentElement: i } = O(), u = h(""), m = h();
    function v(c) {
      var S, x;
      if (m.value) {
        const z = c.clientX - ((S = m.value) == null ? void 0 : S.left), D = c.clientY - ((x = m.value) == null ? void 0 : x.top);
        n("onDragScroll", { x: z, y: D });
      }
    }
    function p(c) {
      c.button === 0 && (c.target.setPointerCapture(c.pointerId), m.value = i.value.getBoundingClientRect(), u.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", l.viewport && (l.viewport.value.style.scrollBehavior = "auto"), v(c));
    }
    function g(c) {
      v(c);
    }
    function M(c) {
      const S = c.target;
      S.hasPointerCapture(c.pointerId) && S.releasePointerCapture(c.pointerId), document.body.style.webkitUserSelect = u.value, l.viewport && (l.viewport.value.style.scrollBehavior = ""), m.value = void 0;
    }
    function N(c) {
      var S;
      const x = c.target, z = (S = i.value) == null ? void 0 : S.contains(x), D = s.sizes.value.content - s.sizes.value.viewport;
      z && s.handleWheelScroll(c, D);
    }
    H(() => {
      document.addEventListener("wheel", N, { passive: !1 });
    }), q(() => {
      document.removeEventListener("wheel", N);
    });
    function b() {
      var c, S, x, z, D;
      i.value && (o.isHorizontal ? s.handleSizeChange({
        content: ((c = l.viewport.value) == null ? void 0 : c.scrollWidth) ?? 0,
        viewport: ((S = l.viewport.value) == null ? void 0 : S.offsetWidth) ?? 0,
        scrollbar: {
          size: i.value.clientWidth ?? 0,
          paddingStart: J(getComputedStyle(i.value).paddingLeft),
          paddingEnd: J(getComputedStyle(i.value).paddingRight)
        }
      }) : s.handleSizeChange({
        content: ((x = l.viewport.value) == null ? void 0 : x.scrollHeight) ?? 0,
        viewport: ((z = l.viewport.value) == null ? void 0 : z.offsetHeight) ?? 0,
        scrollbar: {
          size: ((D = i.value) == null ? void 0 : D.clientHeight) ?? 0,
          paddingStart: J(getComputedStyle(i.value).paddingLeft),
          paddingEnd: J(getComputedStyle(i.value).paddingRight)
        }
      }));
    }
    return Q(i, b), Q(l.content, b), (c, S) => (w(), C(d(K), {
      ref: d(a),
      style: { position: "absolute" },
      "data-scrollbarimpl": "",
      as: d(r).as.value,
      "as-child": d(r).asChild.value,
      onPointerdown: p,
      onPointermove: g,
      onPointerup: M
    }, {
      default: _(() => [
        L(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Xt = /* @__PURE__ */ E({
  __name: "ScrollAreaScrollbarX",
  setup(t) {
    const e = P(), o = ne(), { forwardRef: n, currentElement: l } = O();
    H(() => {
      l.value && e.onScrollbarXChange(l.value);
    });
    const s = T(() => o.sizes.value);
    return (r, a) => (w(), C(He, {
      ref: d(n),
      "is-horizontal": !0,
      "data-orientation": "horizontal",
      style: U({
        bottom: 0,
        left: d(e).dir.value === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: d(e).dir.value === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": s.value ? `${d(te)(s.value)}px` : void 0
      }),
      onOnDragScroll: a[0] || (a[0] = (i) => d(o).onDragScroll(i.x))
    }, {
      default: _(() => [
        L(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
}), Ft = /* @__PURE__ */ E({
  __name: "ScrollAreaScrollbarY",
  setup(t) {
    const e = P(), o = ne(), { forwardRef: n, currentElement: l } = O();
    H(() => {
      l.value && e.onScrollbarYChange(l.value);
    });
    const s = T(() => o.sizes.value);
    return (r, a) => (w(), C(He, {
      ref: d(n),
      "is-horizontal": !1,
      "data-orientation": "vertical",
      style: U({
        top: 0,
        right: d(e).dir.value === "ltr" ? 0 : void 0,
        left: d(e).dir.value === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": s.value ? `${d(te)(s.value)}px` : void 0
      }),
      onOnDragScroll: a[0] || (a[0] = (i) => d(o).onDragScroll(i.y))
    }, {
      default: _(() => [
        L(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
}), [ne, Kt] = G("ScrollAreaScrollbarVisible"), fe = /* @__PURE__ */ E({
  __name: "ScrollAreaScrollbarVisible",
  setup(t) {
    const e = P(), o = oe(), { forwardRef: n } = O(), l = h({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), s = T(() => {
      const c = De(l.value.viewport, l.value.content);
      return c > 0 && c < 1;
    }), r = h(), a = h(0);
    function i(c, S) {
      if (g.value) {
        const x = e.viewport.value.scrollLeft + c.deltaY;
        e.viewport.value.scrollLeft = x, xe(x, S) && c.preventDefault();
      } else {
        const x = e.viewport.value.scrollTop + c.deltaY;
        e.viewport.value.scrollTop = x, xe(x, S) && c.preventDefault();
      }
    }
    function u(c, S) {
      g.value ? a.value = S.x : a.value = S.y;
    }
    function m(c) {
      a.value = 0;
    }
    function v(c) {
      l.value = c;
    }
    function p(c, S) {
      return jt(
        c,
        a.value,
        l.value,
        S
      );
    }
    const g = T(
      () => o.isHorizontal.value
    );
    function M(c) {
      g.value ? e.viewport.value.scrollLeft = p(
        c,
        e.dir.value
      ) : e.viewport.value.scrollTop = p(c);
    }
    function N() {
      if (g.value) {
        if (e.viewport.value && r.value) {
          const c = e.viewport.value.scrollLeft, S = Le(
            c,
            l.value,
            e.dir.value
          );
          r.value.style.transform = `translate3d(${S}px, 0, 0)`;
        }
      } else if (e.viewport.value && r.value) {
        const c = e.viewport.value.scrollTop, S = Le(c, l.value);
        r.value.style.transform = `translate3d(0, ${S}px, 0)`;
      }
    }
    function b(c) {
      r.value = c;
    }
    return Kt({
      sizes: l,
      hasThumb: s,
      handleWheelScroll: i,
      handleThumbDown: u,
      handleThumbUp: m,
      handleSizeChange: v,
      onThumbPositionChange: N,
      onThumbChange: b,
      onDragScroll: M
    }), (c, S) => g.value ? (w(), C(Xt, R({ key: 0 }, c.$attrs, { ref: d(n) }), {
      default: _(() => [
        L(c.$slots, "default")
      ]),
      _: 3
    }, 16)) : (w(), C(Ft, R({ key: 1 }, c.$attrs, { ref: d(n) }), {
      default: _(() => [
        L(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Be = /* @__PURE__ */ E({
  __name: "ScrollAreaScrollbarAuto",
  props: {
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = P(), o = oe(), { forwardRef: n } = O(), l = h(!1), s = Re(() => {
      if (e.viewport.value) {
        const r = e.viewport.value.offsetWidth < e.viewport.value.scrollWidth, a = e.viewport.value.offsetHeight < e.viewport.value.scrollHeight;
        l.value = o.isHorizontal.value ? r : a;
      }
    }, 10);
    return H(() => s()), Q(e.viewport, s), Q(e.content, s), (r, a) => (w(), C(d(pe), {
      present: r.forceMount || l.value
    }, {
      default: _(() => [
        A(fe, R(r.$attrs, {
          ref: d(n),
          "data-state": l.value ? "visible" : "hidden"
        }), {
          default: _(() => [
            L(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), qt = /* @__PURE__ */ E({
  inheritAttrs: !1,
  __name: "ScrollAreaScrollbarHover",
  props: {
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = P(), { forwardRef: o } = O();
    let n;
    const l = h(!1);
    function s() {
      window.clearTimeout(n), l.value = !0;
    }
    function r() {
      n = window.setTimeout(() => {
        l.value = !1;
      }, e.scrollHideDelay.value);
    }
    return H(() => {
      const a = e.scrollArea.value;
      a && (a.addEventListener("pointerenter", s), a.addEventListener("pointerleave", r));
    }), q(() => {
      const a = e.scrollArea.value;
      a && (window.clearTimeout(n), a.removeEventListener("pointerenter", s), a.removeEventListener("pointerleave", r));
    }), (a, i) => (w(), C(d(pe), {
      present: a.forceMount || l.value
    }, {
      default: _(() => [
        A(Be, R(a.$attrs, {
          ref: d(o),
          "data-state": l.value ? "visible" : "hidden"
        }), {
          default: _(() => [
            L(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Gt = /* @__PURE__ */ E({
  __name: "ScrollAreaScrollbarScroll",
  props: {
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = P(), o = oe(), { forwardRef: n } = O(), { state: l, dispatch: s } = Oe("hidden", {
      hidden: {
        SCROLL: "scrolling"
      },
      scrolling: {
        SCROLL_END: "idle",
        POINTER_ENTER: "interacting"
      },
      interacting: {
        SCROLL: "interacting",
        POINTER_LEAVE: "idle"
      },
      idle: {
        HIDE: "hidden",
        SCROLL: "scrolling",
        POINTER_ENTER: "interacting"
      }
    });
    ae((a) => {
      if (l.value === "idle") {
        const i = window.setTimeout(
          () => s("HIDE"),
          e.scrollHideDelay.value
        );
        a(() => {
          window.clearTimeout(i);
        });
      }
    });
    const r = Re(() => s("SCROLL_END"), 100);
    return ae((a) => {
      const i = e.viewport.value, u = o.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (i) {
        let m = i[u];
        const v = () => {
          const p = i[u];
          m !== p && (s("SCROLL"), r()), m = p;
        };
        i.addEventListener("scroll", v), a(() => {
          i.removeEventListener("scroll", v);
        });
      }
    }), (a, i) => (w(), C(d(pe), {
      present: a.forceMount || d(l) !== "hidden"
    }, {
      default: _(() => [
        A(fe, R(a.$attrs, { ref: d(n) }), {
          default: _(() => [
            L(a.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [oe, Zt] = G("ScrollAreaScrollbar"), Jt = /* @__PURE__ */ E({
  inheritAttrs: !1,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, { forwardRef: o } = O(), n = P(), l = T(() => e.orientation === "horizontal");
    I(
      l,
      () => {
        l.value ? n.onScrollbarXEnabledChange(!0) : n.onScrollbarYEnabledChange(!0);
      },
      { immediate: !0 }
    ), q(() => {
      n.onScrollbarXEnabledChange(!1), n.onScrollbarYEnabledChange(!1);
    });
    const { orientation: s, forceMount: r, asChild: a, as: i } = ue(e);
    return Zt({
      orientation: s,
      forceMount: r,
      isHorizontal: l,
      as: i,
      asChild: a
    }), (u, m) => d(n).type.value === "hover" ? (w(), C(qt, R({ key: 0 }, u.$attrs, {
      ref: d(o),
      "force-mount": d(r)
    }), {
      default: _(() => [
        L(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : d(n).type.value === "scroll" ? (w(), C(Gt, R({ key: 1 }, u.$attrs, {
      ref: d(o),
      "force-mount": d(r)
    }), {
      default: _(() => [
        L(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : d(n).type.value === "auto" ? (w(), C(Be, R({ key: 2 }, u.$attrs, {
      ref: d(o),
      "force-mount": d(r)
    }), {
      default: _(() => [
        L(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : d(n).type.value === "always" ? (w(), C(fe, R({ key: 3 }, u.$attrs, {
      ref: d(o),
      "data-state": "visible"
    }), {
      default: _(() => [
        L(u.$slots, "default")
      ]),
      _: 3
    }, 16)) : j("", !0);
  }
}), Qt = /* @__PURE__ */ E({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, o = P(), n = ne();
    function l(p) {
      const g = p.target.getBoundingClientRect(), M = p.clientX - g.left, N = p.clientY - g.top;
      n.handleThumbDown(p, { x: M, y: N });
    }
    function s(p) {
      n.handleThumbUp(p);
    }
    const { forwardRef: r, currentElement: a } = O(), i = h(), u = T(() => o.viewport.value);
    function m() {
      if (!i.value) {
        const p = Wt(
          u.value,
          n.onThumbPositionChange
        );
        i.value = p, n.onThumbPositionChange();
      }
    }
    const v = T(() => n.sizes.value);
    return Ot(v, () => {
      n.onThumbChange(a.value), u.value && (n.onThumbPositionChange(), u.value.addEventListener("scroll", m));
    }), q(() => {
      var p;
      u.value.removeEventListener("scroll", m), (p = o.viewport.value) == null || p.removeEventListener("scroll", m);
    }), (p, g) => (w(), C(d(K), {
      ref: d(r),
      "data-state": d(n).hasThumb ? "visible" : "hidden",
      style: U({
        width: "var(--radix-scroll-area-thumb-width)",
        height: "var(--radix-scroll-area-thumb-height)"
      }),
      "as-child": e.asChild,
      as: p.as,
      onPointerdown: l,
      onPointerup: s
    }, {
      default: _(() => [
        L(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-state", "style", "as-child", "as"]));
  }
}), en = /* @__PURE__ */ E({
  __name: "ScrollArea",
  props: {
    scrollHideDelay: { default: 200 }
  },
  setup(t, { expose: e }) {
    const o = h(), n = T(() => o.value.$refs.viewportElement);
    return e({
      scrollElement: n
    }), (l, s) => (w(), C(d(Yt), {
      class: "ScrollAreaRoot",
      "scroll-hide-delay": l.scrollHideDelay
    }, {
      default: _(() => [
        A(d(Ut), {
          ref_key: "scrollAreaViewportRef",
          ref: o
        }, {
          default: _(() => [
            L(l.$slots, "default")
          ]),
          _: 3
        }, 512),
        A(d(Jt), {
          class: "scroll-area-scrollbar",
          orientation: "vertical"
        }, {
          default: _(() => [
            A(d(Qt), { class: "scrollbar-area-thumb" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 8, ["scroll-hide-delay"]));
  }
}), tn = ["onClick", "onMouseenter"], nn = 0.8, Te = "focused", on = /* @__PURE__ */ E({
  __name: "Menu",
  props: {
    items: {},
    appendTo: { default: "body" },
    anchor: { default: [0, 1] },
    offset: { default: [0, 0] },
    behavior: { default: "click" },
    customClassName: {},
    context: { type: Boolean }
  },
  emits: ["hide", "show", "action", "mouseEnter", "mouseLeave"],
  setup(t, { expose: e, emit: o }) {
    const n = t, l = o, s = at(), r = s.style, a = h(), i = h(), u = h({}), m = h(), v = h(!1);
    let p, g = null;
    const M = (f, y) => {
      u.value[y] = f;
    }, N = () => m.value.parentNode, b = () => {
      var $;
      i.value.style.visibility = "hidden", i.value.style.display = "flex";
      let f = 0;
      const y = ($ = a.value) == null ? void 0 : $.scrollElement;
      return y && (y.style.height = "auto", f = y.offsetHeight), i.value.style.display = "none", i.value.style.visibility = "", f;
    }, c = (f) => !i.value.contains(f), S = (f) => {
      if (!i.value || g && !g.isOutsideContainer(f.target))
        return;
      const $ = !N().contains(f.target);
      (n.context || f.target && c(f.target)) && $ && V();
    }, x = () => {
      var f;
      if ((f = a.value) != null && f.scrollElement) {
        const y = a.value.scrollElement;
        y && y.addEventListener("scroll", me);
      }
    }, z = () => {
      var f;
      if ((f = a.value) != null && f.scrollElement) {
        const y = a.value.scrollElement;
        y && y.removeEventListener("scroll", me);
      }
    }, D = () => {
      document.body.addEventListener("mousedown", S);
    }, Ie = () => {
      document.body.removeEventListener("mousedown", S);
    }, me = () => {
      g && g.hide();
    }, Ye = h(""), le = (f) => {
      v.value = !0, ce(() => {
        var Ee;
        const y = N(), $ = y.offsetHeight, B = y.offsetWidth, [Y, Xe] = n.anchor, [Fe, Ke] = n.offset, ge = y.getBoundingClientRect(), qe = ge.left + Fe, Ge = ge.top + Ke, be = $ * Xe + Ge + window.scrollY, Ze = B * Y + qe + window.scrollX, Se = (window.innerHeight - window.scrollY - be) * nn;
        p = p || b();
        const _e = p > Se ? Se : p;
        n.context && f ? (i.value.style.top = f.clientY + "px", i.value.style.left = f.clientX + "px") : (i.value.style.top = be + "px", i.value.style.left = Ze + "px", y.classList.add(Te)), (Ee = a.value) != null && Ee.scrollElement && (a.value.scrollElement.style.height = _e + "px"), Ye.value = _e + "px", i.value.style.display = "flex", x(), D(), l("show");
      });
    }, V = () => {
      N().classList.remove(Te), i.value.style.display = "none", v.value = !1, z(), Ie(), g = null, l("hide");
    }, Ue = () => {
      g = null;
    }, Ve = (f) => {
      g = u.value[f];
    }, We = () => {
      l("action"), V();
    }, he = (f) => {
      var y;
      (y = f.command) == null || y.call(f), (!f.items || f.command) && (V(), l("action"));
    }, je = (f) => {
      const y = u.value[f];
      g !== y && (g && g.hide(), y && y.show());
    }, ye = () => {
      v.value ? V() : le();
    }, we = (f) => {
      f.preventDefault(), le(f);
    };
    return H(() => {
      const f = N();
      n.context ? f.addEventListener("contextmenu", we) : f.addEventListener("click", ye);
    }), st(() => {
      const f = N();
      n.context ? f.removeEventListener("contextmenu", we) : f.removeEventListener("click", ye);
    }), e({
      hide: V,
      show: le,
      getParentNode: N,
      isOutsideContainer: c
    }), (f, y) => (w(), C(it, {
      ref_key: "teleportRef",
      ref: m,
      to: "body"
    }, [
      A(ut, { name: "p-connected-overlay" }, {
        default: _(() => [
          v.value ? (w(), k("div", {
            key: 0,
            class: Ae(["epic-menu", d(s).class, f.customClassName]),
            style: U(d(r)),
            ref_key: "menuRef",
            ref: i,
            onMouseenter: y[1] || (y[1] = ($) => l("mouseEnter", $)),
            onMouseleave: y[2] || (y[2] = ($) => l("mouseLeave", $))
          }, [
            A(en, {
              ref_key: "customScrollRef",
              ref: a
            }, {
              default: _(() => [
                (w(!0), k(W, null, ct(f.items, ($, B) => (w(), k(W, { key: B }, [
                  $.separator ? (w(), C(St, {
                    key: 0,
                    type: "horizontal"
                  })) : $.component ? (w(), C(re($.component), {
                    key: 1,
                    onClick: (Y) => !$.stopPropagation && he($)
                  }, null, 8, ["onClick"])) : (w(), k("a", {
                    key: 2,
                    class: "menu-item-container",
                    tabindex: "-1",
                    "aria-hidden": "true",
                    onClick: (Y) => he($),
                    onMousedown: y[0] || (y[0] = dt(() => {
                    }, ["stop"])),
                    onMouseenter: (Y) => je(B)
                  }, [
                    (w(), C(re(xt), vt(pt($)), null, 16)),
                    $.items ? (w(), k(W, { key: 0 }, [
                      A($t, { class: "menu-item-arrow" }),
                      A(on, {
                        ref_for: !0,
                        ref: (Y) => M(Y, B),
                        items: $.items,
                        anchor: [1, 0],
                        offset: [0, 0],
                        behavior: "hover",
                        onHide: Ue,
                        onShow: () => Ve(B),
                        onAction: We
                      }, null, 8, ["items", "onShow"])
                    ], 64)) : j("", !0)
                  ], 40, tn))
                ], 64))), 128))
              ]),
              _: 1
            }, 512)
          ], 38)) : j("", !0)
        ]),
        _: 1
      })
    ], 512));
  }
});
export {
  on as Vue3Menu
};
