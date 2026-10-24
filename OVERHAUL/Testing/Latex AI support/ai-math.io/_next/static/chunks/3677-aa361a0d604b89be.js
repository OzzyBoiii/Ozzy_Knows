"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3677], {
        3677: function(t, e, n) {
            n.d(e, {
                ee: function() {
                    return et
                },
                Eh: function() {
                    return en
                },
                VY: function() {
                    return ee
                },
                fC: function() {
                    return t4
                },
                D7: function() {
                    return tq
                }
            });
            var r = n(57420);
            let i = ["top", "right", "bottom", "left"],
                o = Math.min,
                l = Math.max,
                a = Math.round,
                f = Math.floor,
                u = t => ({
                    x: t,
                    y: t
                }),
                s = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                c = {
                    start: "end",
                    end: "start"
                };

            function d(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function p(t) {
                return t.split("-")[0]
            }

            function h(t) {
                return t.split("-")[1]
            }

            function m(t) {
                return "x" === t ? "y" : "x"
            }

            function g(t) {
                return "y" === t ? "height" : "width"
            }
            let y = new Set(["top", "bottom"]);

            function w(t) {
                return y.has(p(t)) ? "y" : "x"
            }

            function v(t) {
                return t.replace(/start|end/g, t => c[t])
            }
            let x = ["left", "right"],
                b = ["right", "left"],
                R = ["top", "bottom"],
                A = ["bottom", "top"];

            function S(t) {
                return t.replace(/left|right|bottom|top/g, t => s[t])
            }

            function L(t) {
                return "number" != typeof t ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...t
                } : {
                    top: t,
                    right: t,
                    bottom: t,
                    left: t
                }
            }

            function C(t) {
                let {
                    x: e,
                    y: n,
                    width: r,
                    height: i
                } = t;
                return {
                    width: r,
                    height: i,
                    top: n,
                    left: e,
                    right: e + r,
                    bottom: n + i,
                    x: e,
                    y: n
                }
            }

            function T(t, e, n) {
                let r, {
                        reference: i,
                        floating: o
                    } = t,
                    l = w(e),
                    a = m(w(e)),
                    f = g(a),
                    u = p(e),
                    s = "y" === l,
                    c = i.x + i.width / 2 - o.width / 2,
                    d = i.y + i.height / 2 - o.height / 2,
                    y = i[f] / 2 - o[f] / 2;
                switch (u) {
                    case "top":
                        r = {
                            x: c,
                            y: i.y - o.height
                        };
                        break;
                    case "bottom":
                        r = {
                            x: c,
                            y: i.y + i.height
                        };
                        break;
                    case "right":
                        r = {
                            x: i.x + i.width,
                            y: d
                        };
                        break;
                    case "left":
                        r = {
                            x: i.x - o.width,
                            y: d
                        };
                        break;
                    default:
                        r = {
                            x: i.x,
                            y: i.y
                        }
                }
                switch (h(e)) {
                    case "start":
                        r[a] -= y * (n && s ? -1 : 1);
                        break;
                    case "end":
                        r[a] += y * (n && s ? -1 : 1)
                }
                return r
            }
            let E = async (t, e, n) => {
                let {
                    placement: r = "bottom",
                    strategy: i = "absolute",
                    middleware: o = [],
                    platform: l
                } = n, a = o.filter(Boolean), f = await (null == l.isRTL ? void 0 : l.isRTL(e)), u = await l.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: i
                }), {
                    x: s,
                    y: c
                } = T(u, r, f), d = r, p = {}, h = 0;
                for (let n = 0; n < a.length; n++) {
                    let {
                        name: o,
                        fn: m
                    } = a[n], {
                        x: g,
                        y: y,
                        data: w,
                        reset: v
                    } = await m({
                        x: s,
                        y: c,
                        initialPlacement: r,
                        placement: d,
                        strategy: i,
                        middlewareData: p,
                        rects: u,
                        platform: l,
                        elements: {
                            reference: t,
                            floating: e
                        }
                    });
                    s = null != g ? g : s, c = null != y ? y : c, p = { ...p,
                        [o]: { ...p[o],
                            ...w
                        }
                    }, v && h <= 50 && (h++, "object" == typeof v && (v.placement && (d = v.placement), v.rects && (u = !0 === v.rects ? await l.getElementRects({
                        reference: t,
                        floating: e,
                        strategy: i
                    }) : v.rects), {
                        x: s,
                        y: c
                    } = T(u, d, f)), n = -1)
                }
                return {
                    x: s,
                    y: c,
                    placement: d,
                    strategy: i,
                    middlewareData: p
                }
            };
            async function O(t, e) {
                var n;
                void 0 === e && (e = {});
                let {
                    x: r,
                    y: i,
                    platform: o,
                    rects: l,
                    elements: a,
                    strategy: f
                } = t, {
                    boundary: u = "clippingAncestors",
                    rootBoundary: s = "viewport",
                    elementContext: c = "floating",
                    altBoundary: p = !1,
                    padding: h = 0
                } = d(e, t), m = L(h), g = a[p ? "floating" === c ? "reference" : "floating" : c], y = C(await o.getClippingRect({
                    element: null == (n = await (null == o.isElement ? void 0 : o.isElement(g))) || n ? g : g.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(a.floating)),
                    boundary: u,
                    rootBoundary: s,
                    strategy: f
                })), w = "floating" === c ? {
                    x: r,
                    y: i,
                    width: l.floating.width,
                    height: l.floating.height
                } : l.reference, v = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(a.floating)), x = await (null == o.isElement ? void 0 : o.isElement(v)) && await (null == o.getScale ? void 0 : o.getScale(v)) || {
                    x: 1,
                    y: 1
                }, b = C(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: a,
                    rect: w,
                    offsetParent: v,
                    strategy: f
                }) : w);
                return {
                    top: (y.top - b.top + m.top) / x.y,
                    bottom: (b.bottom - y.bottom + m.bottom) / x.y,
                    left: (y.left - b.left + m.left) / x.x,
                    right: (b.right - y.right + m.right) / x.x
                }
            }

            function P(t, e) {
                return {
                    top: t.top - e.height,
                    right: t.right - e.width,
                    bottom: t.bottom - e.height,
                    left: t.left - e.width
                }
            }

            function k(t) {
                return i.some(e => t[e] >= 0)
            }
            let D = new Set(["left", "top"]);
            async function H(t, e) {
                let {
                    placement: n,
                    platform: r,
                    elements: i
                } = t, o = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)), l = p(n), a = h(n), f = "y" === w(n), u = D.has(l) ? -1 : 1, s = o && f ? -1 : 1, c = d(e, t), {
                    mainAxis: m,
                    crossAxis: g,
                    alignmentAxis: y
                } = "number" == typeof c ? {
                    mainAxis: c,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: c.mainAxis || 0,
                    crossAxis: c.crossAxis || 0,
                    alignmentAxis: c.alignmentAxis
                };
                return a && "number" == typeof y && (g = "end" === a ? -1 * y : y), f ? {
                    x: g * s,
                    y: m * u
                } : {
                    x: m * u,
                    y: g * s
                }
            }

            function W() {
                return "undefined" != typeof window
            }

            function F(t) {
                return V(t) ? (t.nodeName || "").toLowerCase() : "#document"
            }

            function M(t) {
                var e;
                return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
            }

            function j(t) {
                var e;
                return null == (e = (V(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
            }

            function V(t) {
                return !!W() && (t instanceof Node || t instanceof M(t).Node)
            }

            function z(t) {
                return !!W() && (t instanceof Element || t instanceof M(t).Element)
            }

            function N(t) {
                return !!W() && (t instanceof HTMLElement || t instanceof M(t).HTMLElement)
            }

            function B(t) {
                return !!W() && "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof M(t).ShadowRoot)
            }
            let _ = new Set(["inline", "contents"]);

            function Y(t) {
                let {
                    overflow: e,
                    overflowX: n,
                    overflowY: r,
                    display: i
                } = tt(t);
                return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !_.has(i)
            }
            let I = new Set(["table", "td", "th"]),
                X = [":popover-open", ":modal"];

            function $(t) {
                return X.some(e => {
                    try {
                        return t.matches(e)
                    } catch (t) {
                        return !1
                    }
                })
            }
            let q = ["transform", "translate", "scale", "rotate", "perspective"],
                G = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
                J = ["paint", "layout", "strict", "content"];

            function K(t) {
                let e = Q(),
                    n = z(t) ? tt(t) : t;
                return q.some(t => !!n[t] && "none" !== n[t]) || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || G.some(t => (n.willChange || "").includes(t)) || J.some(t => (n.contain || "").includes(t))
            }

            function Q() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }
            let U = new Set(["html", "body", "#document"]);

            function Z(t) {
                return U.has(F(t))
            }

            function tt(t) {
                return M(t).getComputedStyle(t)
            }

            function te(t) {
                return z(t) ? {
                    scrollLeft: t.scrollLeft,
                    scrollTop: t.scrollTop
                } : {
                    scrollLeft: t.scrollX,
                    scrollTop: t.scrollY
                }
            }

            function tn(t) {
                if ("html" === F(t)) return t;
                let e = t.assignedSlot || t.parentNode || B(t) && t.host || j(t);
                return B(e) ? e.host : e
            }

            function tr(t, e, n) {
                var r;
                void 0 === e && (e = []), void 0 === n && (n = !0);
                let i = function t(e) {
                        let n = tn(e);
                        return Z(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : N(n) && Y(n) ? n : t(n)
                    }(t),
                    o = i === (null == (r = t.ownerDocument) ? void 0 : r.body),
                    l = M(i);
                if (o) {
                    let t = ti(l);
                    return e.concat(l, l.visualViewport || [], Y(i) ? i : [], t && n ? tr(t) : [])
                }
                return e.concat(i, tr(i, [], n))
            }

            function ti(t) {
                return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
            }

            function to(t) {
                let e = tt(t),
                    n = parseFloat(e.width) || 0,
                    r = parseFloat(e.height) || 0,
                    i = N(t),
                    o = i ? t.offsetWidth : n,
                    l = i ? t.offsetHeight : r,
                    f = a(n) !== o || a(r) !== l;
                return f && (n = o, r = l), {
                    width: n,
                    height: r,
                    $: f
                }
            }

            function tl(t) {
                return z(t) ? t : t.contextElement
            }

            function ta(t) {
                let e = tl(t);
                if (!N(e)) return u(1);
                let n = e.getBoundingClientRect(),
                    {
                        width: r,
                        height: i,
                        $: o
                    } = to(e),
                    l = (o ? a(n.width) : n.width) / r,
                    f = (o ? a(n.height) : n.height) / i;
                return l && Number.isFinite(l) || (l = 1), f && Number.isFinite(f) || (f = 1), {
                    x: l,
                    y: f
                }
            }
            let tf = u(0);

            function tu(t) {
                let e = M(t);
                return Q() && e.visualViewport ? {
                    x: e.visualViewport.offsetLeft,
                    y: e.visualViewport.offsetTop
                } : tf
            }

            function ts(t, e, n, r) {
                var i;
                void 0 === e && (e = !1), void 0 === n && (n = !1);
                let o = t.getBoundingClientRect(),
                    l = tl(t),
                    a = u(1);
                e && (r ? z(r) && (a = ta(r)) : a = ta(t));
                let f = (void 0 === (i = n) && (i = !1), r && (!i || r === M(l)) && i) ? tu(l) : u(0),
                    s = (o.left + f.x) / a.x,
                    c = (o.top + f.y) / a.y,
                    d = o.width / a.x,
                    p = o.height / a.y;
                if (l) {
                    let t = M(l),
                        e = r && z(r) ? M(r) : r,
                        n = t,
                        i = ti(n);
                    for (; i && r && e !== n;) {
                        let t = ta(i),
                            e = i.getBoundingClientRect(),
                            r = tt(i),
                            o = e.left + (i.clientLeft + parseFloat(r.paddingLeft)) * t.x,
                            l = e.top + (i.clientTop + parseFloat(r.paddingTop)) * t.y;
                        s *= t.x, c *= t.y, d *= t.x, p *= t.y, s += o, c += l, i = ti(n = M(i))
                    }
                }
                return C({
                    width: d,
                    height: p,
                    x: s,
                    y: c
                })
            }

            function tc(t, e) {
                let n = te(t).scrollLeft;
                return e ? e.left + n : ts(j(t)).left + n
            }

            function td(t, e) {
                let n = t.getBoundingClientRect();
                return {
                    x: n.left + e.scrollLeft - tc(t, n),
                    y: n.top + e.scrollTop
                }
            }
            let tp = new Set(["absolute", "fixed"]);

            function th(t, e, n) {
                let r;
                if ("viewport" === e) r = function(t, e) {
                    let n = M(t),
                        r = j(t),
                        i = n.visualViewport,
                        o = r.clientWidth,
                        l = r.clientHeight,
                        a = 0,
                        f = 0;
                    if (i) {
                        o = i.width, l = i.height;
                        let t = Q();
                        (!t || t && "fixed" === e) && (a = i.offsetLeft, f = i.offsetTop)
                    }
                    let u = tc(r);
                    if (u <= 0) {
                        let t = r.ownerDocument,
                            e = t.body,
                            n = getComputedStyle(e),
                            i = "CSS1Compat" === t.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
                            l = Math.abs(r.clientWidth - e.clientWidth - i);
                        l <= 25 && (o -= l)
                    } else u <= 25 && (o += u);
                    return {
                        width: o,
                        height: l,
                        x: a,
                        y: f
                    }
                }(t, n);
                else if ("document" === e) r = function(t) {
                    let e = j(t),
                        n = te(t),
                        r = t.ownerDocument.body,
                        i = l(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth),
                        o = l(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight),
                        a = -n.scrollLeft + tc(t),
                        f = -n.scrollTop;
                    return "rtl" === tt(r).direction && (a += l(e.clientWidth, r.clientWidth) - i), {
                        width: i,
                        height: o,
                        x: a,
                        y: f
                    }
                }(j(t));
                else if (z(e)) r = function(t, e) {
                    let n = ts(t, !0, "fixed" === e),
                        r = n.top + t.clientTop,
                        i = n.left + t.clientLeft,
                        o = N(t) ? ta(t) : u(1),
                        l = t.clientWidth * o.x;
                    return {
                        width: l,
                        height: t.clientHeight * o.y,
                        x: i * o.x,
                        y: r * o.y
                    }
                }(e, n);
                else {
                    let n = tu(t);
                    r = {
                        x: e.x - n.x,
                        y: e.y - n.y,
                        width: e.width,
                        height: e.height
                    }
                }
                return C(r)
            }

            function tm(t) {
                return "static" === tt(t).position
            }

            function tg(t, e) {
                if (!N(t) || "fixed" === tt(t).position) return null;
                if (e) return e(t);
                let n = t.offsetParent;
                return j(t) === n && (n = n.ownerDocument.body), n
            }

            function ty(t, e) {
                var n;
                let r = M(t);
                if ($(t)) return r;
                if (!N(t)) {
                    let e = tn(t);
                    for (; e && !Z(e);) {
                        if (z(e) && !tm(e)) return e;
                        e = tn(e)
                    }
                    return r
                }
                let i = tg(t, e);
                for (; i && (n = i, I.has(F(n))) && tm(i);) i = tg(i, e);
                return i && Z(i) && tm(i) && !K(i) ? r : i || function(t) {
                    let e = tn(t);
                    for (; N(e) && !Z(e);) {
                        if (K(e)) return e;
                        if ($(e)) break;
                        e = tn(e)
                    }
                    return null
                }(t) || r
            }
            let tw = async function(t) {
                    let e = this.getOffsetParent || ty,
                        n = this.getDimensions,
                        r = await n(t.floating);
                    return {
                        reference: function(t, e, n) {
                            let r = N(e),
                                i = j(e),
                                o = "fixed" === n,
                                l = ts(t, !0, o, e),
                                a = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                f = u(0);
                            if (r || !r && !o) {
                                if (("body" !== F(e) || Y(i)) && (a = te(e)), r) {
                                    let t = ts(e, !0, o, e);
                                    f.x = t.x + e.clientLeft, f.y = t.y + e.clientTop
                                } else i && (f.x = tc(i))
                            }
                            o && !r && i && (f.x = tc(i));
                            let s = !i || r || o ? u(0) : td(i, a);
                            return {
                                x: l.left + a.scrollLeft - f.x - s.x,
                                y: l.top + a.scrollTop - f.y - s.y,
                                width: l.width,
                                height: l.height
                            }
                        }(t.reference, await e(t.floating), t.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: r.width,
                            height: r.height
                        }
                    }
                },
                tv = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
                        let {
                            elements: e,
                            rect: n,
                            offsetParent: r,
                            strategy: i
                        } = t, o = "fixed" === i, l = j(r), a = !!e && $(e.floating);
                        if (r === l || a && o) return n;
                        let f = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            s = u(1),
                            c = u(0),
                            d = N(r);
                        if ((d || !d && !o) && (("body" !== F(r) || Y(l)) && (f = te(r)), N(r))) {
                            let t = ts(r);
                            s = ta(r), c.x = t.x + r.clientLeft, c.y = t.y + r.clientTop
                        }
                        let p = !l || d || o ? u(0) : td(l, f);
                        return {
                            width: n.width * s.x,
                            height: n.height * s.y,
                            x: n.x * s.x - f.scrollLeft * s.x + c.x + p.x,
                            y: n.y * s.y - f.scrollTop * s.y + c.y + p.y
                        }
                    },
                    getDocumentElement: j,
                    getClippingRect: function(t) {
                        let {
                            element: e,
                            boundary: n,
                            rootBoundary: r,
                            strategy: i
                        } = t, a = [..."clippingAncestors" === n ? $(e) ? [] : function(t, e) {
                            let n = e.get(t);
                            if (n) return n;
                            let r = tr(t, [], !1).filter(t => z(t) && "body" !== F(t)),
                                i = null,
                                o = "fixed" === tt(t).position,
                                l = o ? tn(t) : t;
                            for (; z(l) && !Z(l);) {
                                let e = tt(l),
                                    n = K(l);
                                n || "fixed" !== e.position || (i = null), (o ? !n && !i : !n && "static" === e.position && !!i && tp.has(i.position) || Y(l) && !n && function t(e, n) {
                                    let r = tn(e);
                                    return !(r === n || !z(r) || Z(r)) && ("fixed" === tt(r).position || t(r, n))
                                }(t, l)) ? r = r.filter(t => t !== l) : i = e, l = tn(l)
                            }
                            return e.set(t, r), r
                        }(e, this._c) : [].concat(n), r], f = a[0], u = a.reduce((t, n) => {
                            let r = th(e, n, i);
                            return t.top = l(r.top, t.top), t.right = o(r.right, t.right), t.bottom = o(r.bottom, t.bottom), t.left = l(r.left, t.left), t
                        }, th(e, f, i));
                        return {
                            width: u.right - u.left,
                            height: u.bottom - u.top,
                            x: u.left,
                            y: u.top
                        }
                    },
                    getOffsetParent: ty,
                    getElementRects: tw,
                    getClientRects: function(t) {
                        return Array.from(t.getClientRects())
                    },
                    getDimensions: function(t) {
                        let {
                            width: e,
                            height: n
                        } = to(t);
                        return {
                            width: e,
                            height: n
                        }
                    },
                    getScale: ta,
                    isElement: z,
                    isRTL: function(t) {
                        return "rtl" === tt(t).direction
                    }
                };

            function tx(t, e) {
                return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
            }
            let tb = t => ({
                    name: "arrow",
                    options: t,
                    async fn(e) {
                        let {
                            x: n,
                            y: r,
                            placement: i,
                            rects: a,
                            platform: f,
                            elements: u,
                            middlewareData: s
                        } = e, {
                            element: c,
                            padding: p = 0
                        } = d(t, e) || {};
                        if (null == c) return {};
                        let y = L(p),
                            v = {
                                x: n,
                                y: r
                            },
                            x = m(w(i)),
                            b = g(x),
                            R = await f.getDimensions(c),
                            A = "y" === x,
                            S = A ? "clientHeight" : "clientWidth",
                            C = a.reference[b] + a.reference[x] - v[x] - a.floating[b],
                            T = v[x] - a.reference[x],
                            E = await (null == f.getOffsetParent ? void 0 : f.getOffsetParent(c)),
                            O = E ? E[S] : 0;
                        O && await (null == f.isElement ? void 0 : f.isElement(E)) || (O = u.floating[S] || a.floating[b]);
                        let P = O / 2 - R[b] / 2 - 1,
                            k = o(y[A ? "top" : "left"], P),
                            D = o(y[A ? "bottom" : "right"], P),
                            H = O - R[b] - D,
                            W = O / 2 - R[b] / 2 + (C / 2 - T / 2),
                            F = l(k, o(W, H)),
                            M = !s.arrow && null != h(i) && W !== F && a.reference[b] / 2 - (W < k ? k : D) - R[b] / 2 < 0,
                            j = M ? W < k ? W - k : W - H : 0;
                        return {
                            [x]: v[x] + j,
                            data: {
                                [x]: F,
                                centerOffset: W - F - j,
                                ...M && {
                                    alignmentOffset: j
                                }
                            },
                            reset: M
                        }
                    }
                }),
                tR = (t, e, n) => {
                    let r = new Map,
                        i = {
                            platform: tv,
                            ...n
                        },
                        o = { ...i.platform,
                            _c: r
                        };
                    return E(t, e, { ...i,
                        platform: o
                    })
                };
            var tA = n(12537),
                tS = "undefined" != typeof document ? r.useLayoutEffect : function() {};

            function tL(t, e) {
                let n, r, i;
                if (t === e) return !0;
                if (typeof t != typeof e) return !1;
                if ("function" == typeof t && t.toString() === e.toString()) return !0;
                if (t && e && "object" == typeof t) {
                    if (Array.isArray(t)) {
                        if ((n = t.length) !== e.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!tL(t[r], e[r])) return !1;
                        return !0
                    }
                    if ((n = (i = Object.keys(t)).length) !== Object.keys(e).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(e, i[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = i[r];
                        if (("_owner" !== n || !t.$$typeof) && !tL(t[n], e[n])) return !1
                    }
                    return !0
                }
                return t != t && e != e
            }

            function tC(t) {
                return "undefined" == typeof window ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function tT(t, e) {
                let n = tC(t);
                return Math.round(e * n) / n
            }

            function tE(t) {
                let e = r.useRef(t);
                return tS(() => {
                    e.current = t
                }), e
            }
            let tO = t => ({
                    name: "arrow",
                    options: t,
                    fn(e) {
                        let {
                            element: n,
                            padding: r
                        } = "function" == typeof t ? t(e) : t;
                        return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? tb({
                            element: n.current,
                            padding: r
                        }).fn(e) : {} : n ? tb({
                            element: n,
                            padding: r
                        }).fn(e) : {}
                    }
                }),
                tP = (t, e) => {
                    var n;
                    return { ...(void 0 === (n = t) && (n = 0), {
                            name: "offset",
                            options: n,
                            async fn(t) {
                                var e, r;
                                let {
                                    x: i,
                                    y: o,
                                    placement: l,
                                    middlewareData: a
                                } = t, f = await H(t, n);
                                return l === (null == (e = a.offset) ? void 0 : e.placement) && null != (r = a.arrow) && r.alignmentOffset ? {} : {
                                    x: i + f.x,
                                    y: o + f.y,
                                    data: { ...f,
                                        placement: l
                                    }
                                }
                            }
                        }),
                        options: [t, e]
                    }
                },
                tk = (t, e) => {
                    var n;
                    return { ...(void 0 === (n = t) && (n = {}), {
                            name: "shift",
                            options: n,
                            async fn(t) {
                                let {
                                    x: e,
                                    y: r,
                                    placement: i
                                } = t, {
                                    mainAxis: a = !0,
                                    crossAxis: f = !1,
                                    limiter: u = {
                                        fn: t => {
                                            let {
                                                x: e,
                                                y: n
                                            } = t;
                                            return {
                                                x: e,
                                                y: n
                                            }
                                        }
                                    },
                                    ...s
                                } = d(n, t), c = {
                                    x: e,
                                    y: r
                                }, h = await O(t, s), g = w(p(i)), y = m(g), v = c[y], x = c[g];
                                if (a) {
                                    let t = "y" === y ? "top" : "left",
                                        e = "y" === y ? "bottom" : "right",
                                        n = v + h[t],
                                        r = v - h[e];
                                    v = l(n, o(v, r))
                                }
                                if (f) {
                                    let t = "y" === g ? "top" : "left",
                                        e = "y" === g ? "bottom" : "right",
                                        n = x + h[t],
                                        r = x - h[e];
                                    x = l(n, o(x, r))
                                }
                                let b = u.fn({ ...t,
                                    [y]: v,
                                    [g]: x
                                });
                                return { ...b,
                                    data: {
                                        x: b.x - e,
                                        y: b.y - r,
                                        enabled: {
                                            [y]: a,
                                            [g]: f
                                        }
                                    }
                                }
                            }
                        }),
                        options: [t, e]
                    }
                },
                tD = (t, e) => {
                    var n;
                    return { ...(void 0 === (n = t) && (n = {}), {
                            options: n,
                            fn(t) {
                                let {
                                    x: e,
                                    y: r,
                                    placement: i,
                                    rects: o,
                                    middlewareData: l
                                } = t, {
                                    offset: a = 0,
                                    mainAxis: f = !0,
                                    crossAxis: u = !0
                                } = d(n, t), s = {
                                    x: e,
                                    y: r
                                }, c = w(i), h = m(c), g = s[h], y = s[c], v = d(a, t), x = "number" == typeof v ? {
                                    mainAxis: v,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...v
                                };
                                if (f) {
                                    let t = "y" === h ? "height" : "width",
                                        e = o.reference[h] - o.floating[t] + x.mainAxis,
                                        n = o.reference[h] + o.reference[t] - x.mainAxis;
                                    g < e ? g = e : g > n && (g = n)
                                }
                                if (u) {
                                    var b, R;
                                    let t = "y" === h ? "width" : "height",
                                        e = D.has(p(i)),
                                        n = o.reference[c] - o.floating[t] + (e && (null == (b = l.offset) ? void 0 : b[c]) || 0) + (e ? 0 : x.crossAxis),
                                        r = o.reference[c] + o.reference[t] + (e ? 0 : (null == (R = l.offset) ? void 0 : R[c]) || 0) - (e ? x.crossAxis : 0);
                                    y < n ? y = n : y > r && (y = r)
                                }
                                return {
                                    [h]: g,
                                    [c]: y
                                }
                            }
                        }),
                        options: [t, e]
                    }
                },
                tH = (t, e) => {
                    var n;
                    return { ...(void 0 === (n = t) && (n = {}), {
                            name: "flip",
                            options: n,
                            async fn(t) {
                                var e, r, i, o, l;
                                let {
                                    placement: a,
                                    middlewareData: f,
                                    rects: u,
                                    initialPlacement: s,
                                    platform: c,
                                    elements: y
                                } = t, {
                                    mainAxis: L = !0,
                                    crossAxis: C = !0,
                                    fallbackPlacements: T,
                                    fallbackStrategy: E = "bestFit",
                                    fallbackAxisSideDirection: P = "none",
                                    flipAlignment: k = !0,
                                    ...D
                                } = d(n, t);
                                if (null != (e = f.arrow) && e.alignmentOffset) return {};
                                let H = p(a),
                                    W = w(s),
                                    F = p(s) === s,
                                    M = await (null == c.isRTL ? void 0 : c.isRTL(y.floating)),
                                    j = T || (F || !k ? [S(s)] : function(t) {
                                        let e = S(t);
                                        return [v(t), e, v(e)]
                                    }(s)),
                                    V = "none" !== P;
                                !T && V && j.push(... function(t, e, n, r) {
                                    let i = h(t),
                                        o = function(t, e, n) {
                                            switch (t) {
                                                case "top":
                                                case "bottom":
                                                    if (n) return e ? b : x;
                                                    return e ? x : b;
                                                case "left":
                                                case "right":
                                                    return e ? R : A;
                                                default:
                                                    return []
                                            }
                                        }(p(t), "start" === n, r);
                                    return i && (o = o.map(t => t + "-" + i), e && (o = o.concat(o.map(v)))), o
                                }(s, k, P, M));
                                let z = [s, ...j],
                                    N = await O(t, D),
                                    B = [],
                                    _ = (null == (r = f.flip) ? void 0 : r.overflows) || [];
                                if (L && B.push(N[H]), C) {
                                    let t = function(t, e, n) {
                                        void 0 === n && (n = !1);
                                        let r = h(t),
                                            i = m(w(t)),
                                            o = g(i),
                                            l = "x" === i ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                        return e.reference[o] > e.floating[o] && (l = S(l)), [l, S(l)]
                                    }(a, u, M);
                                    B.push(N[t[0]], N[t[1]])
                                }
                                if (_ = [..._, {
                                        placement: a,
                                        overflows: B
                                    }], !B.every(t => t <= 0)) {
                                    let t = ((null == (i = f.flip) ? void 0 : i.index) || 0) + 1,
                                        e = z[t];
                                    if (e && (!("alignment" === C && W !== w(e)) || _.every(t => w(t.placement) !== W || t.overflows[0] > 0))) return {
                                        data: {
                                            index: t,
                                            overflows: _
                                        },
                                        reset: {
                                            placement: e
                                        }
                                    };
                                    let n = null == (o = _.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : o.placement;
                                    if (!n) switch (E) {
                                        case "bestFit":
                                            {
                                                let t = null == (l = _.filter(t => {
                                                    if (V) {
                                                        let e = w(t.placement);
                                                        return e === W || "y" === e
                                                    }
                                                    return !0
                                                }).map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : l[0];t && (n = t);
                                                break
                                            }
                                        case "initialPlacement":
                                            n = s
                                    }
                                    if (a !== n) return {
                                        reset: {
                                            placement: n
                                        }
                                    }
                                }
                                return {}
                            }
                        }),
                        options: [t, e]
                    }
                },
                tW = (t, e) => {
                    var n;
                    return { ...(void 0 === (n = t) && (n = {}), {
                            name: "size",
                            options: n,
                            async fn(t) {
                                var e, r;
                                let i, a;
                                let {
                                    placement: f,
                                    rects: u,
                                    platform: s,
                                    elements: c
                                } = t, {
                                    apply: m = () => {},
                                    ...g
                                } = d(n, t), y = await O(t, g), v = p(f), x = h(f), b = "y" === w(f), {
                                    width: R,
                                    height: A
                                } = u.floating;
                                "top" === v || "bottom" === v ? (i = v, a = x === (await (null == s.isRTL ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (a = v, i = "end" === x ? "top" : "bottom");
                                let S = A - y.top - y.bottom,
                                    L = R - y.left - y.right,
                                    C = o(A - y[i], S),
                                    T = o(R - y[a], L),
                                    E = !t.middlewareData.shift,
                                    P = C,
                                    k = T;
                                if (null != (e = t.middlewareData.shift) && e.enabled.x && (k = L), null != (r = t.middlewareData.shift) && r.enabled.y && (P = S), E && !x) {
                                    let t = l(y.left, 0),
                                        e = l(y.right, 0),
                                        n = l(y.top, 0),
                                        r = l(y.bottom, 0);
                                    b ? k = R - 2 * (0 !== t || 0 !== e ? t + e : l(y.left, y.right)) : P = A - 2 * (0 !== n || 0 !== r ? n + r : l(y.top, y.bottom))
                                }
                                await m({ ...t,
                                    availableWidth: k,
                                    availableHeight: P
                                });
                                let D = await s.getDimensions(c.floating);
                                return R !== D.width || A !== D.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }),
                        options: [t, e]
                    }
                },
                tF = (t, e) => {
                    var n;
                    return { ...(void 0 === (n = t) && (n = {}), {
                            name: "hide",
                            options: n,
                            async fn(t) {
                                let {
                                    rects: e
                                } = t, {
                                    strategy: r = "referenceHidden",
                                    ...i
                                } = d(n, t);
                                switch (r) {
                                    case "referenceHidden":
                                        {
                                            let n = P(await O(t, { ...i,
                                                elementContext: "reference"
                                            }), e.reference);
                                            return {
                                                data: {
                                                    referenceHiddenOffsets: n,
                                                    referenceHidden: k(n)
                                                }
                                            }
                                        }
                                    case "escaped":
                                        {
                                            let n = P(await O(t, { ...i,
                                                altBoundary: !0
                                            }), e.floating);
                                            return {
                                                data: {
                                                    escapedOffsets: n,
                                                    escaped: k(n)
                                                }
                                            }
                                        }
                                    default:
                                        return {}
                                }
                            }
                        }),
                        options: [t, e]
                    }
                },
                tM = (t, e) => ({ ...tO(t),
                    options: [t, e]
                });
            var tj = n(48769),
                tV = n(18243),
                tz = r.forwardRef((t, e) => {
                    let {
                        children: n,
                        width: r = 10,
                        height: i = 5,
                        ...o
                    } = t;
                    return (0, tV.jsx)(tj.WV.svg, { ...o,
                        ref: e,
                        width: r,
                        height: i,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none",
                        children: t.asChild ? n : (0, tV.jsx)("polygon", {
                            points: "0,0 30,0 15,10"
                        })
                    })
                });
            tz.displayName = "Arrow";
            var tN = n(46965),
                tB = n(26059),
                t_ = n(30113),
                tY = n(92883),
                tI = n(58870),
                tX = "Popper",
                [t$, tq] = (0, tB.b)(tX),
                [tG, tJ] = t$(tX),
                tK = t => {
                    let {
                        __scopePopper: e,
                        children: n
                    } = t, [i, o] = r.useState(null);
                    return (0, tV.jsx)(tG, {
                        scope: e,
                        anchor: i,
                        onAnchorChange: o,
                        children: n
                    })
                };
            tK.displayName = tX;
            var tQ = "PopperAnchor",
                tU = r.forwardRef((t, e) => {
                    let {
                        __scopePopper: n,
                        virtualRef: i,
                        ...o
                    } = t, l = tJ(tQ, n), a = r.useRef(null), f = (0, tN.e)(e, a), u = r.useRef(null);
                    return r.useEffect(() => {
                        let t = u.current;
                        u.current = (null == i ? void 0 : i.current) || a.current, t !== u.current && l.onAnchorChange(u.current)
                    }), i ? null : (0, tV.jsx)(tj.WV.div, { ...o,
                        ref: f
                    })
                });
            tU.displayName = tQ;
            var tZ = "PopperContent",
                [t0, t1] = t$(tZ),
                t2 = r.forwardRef((t, e) => {
                    var n, i, a, u, s, c, d, p;
                    let {
                        __scopePopper: h,
                        side: m = "bottom",
                        sideOffset: g = 0,
                        align: y = "center",
                        alignOffset: w = 0,
                        arrowPadding: v = 0,
                        avoidCollisions: x = !0,
                        collisionBoundary: b = [],
                        collisionPadding: R = 0,
                        sticky: A = "partial",
                        hideWhenDetached: S = !1,
                        updatePositionStrategy: L = "optimized",
                        onPlaced: C,
                        ...T
                    } = t, E = tJ(tZ, h), [O, P] = r.useState(null), k = (0, tN.e)(e, t => P(t)), [D, H] = r.useState(null), W = (0, tI.t)(D), F = null !== (d = null == W ? void 0 : W.width) && void 0 !== d ? d : 0, M = null !== (p = null == W ? void 0 : W.height) && void 0 !== p ? p : 0, V = "number" == typeof R ? R : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...R
                    }, z = Array.isArray(b) ? b : [b], N = z.length > 0, B = {
                        padding: V,
                        boundary: z.filter(t8),
                        altBoundary: N
                    }, {
                        refs: _,
                        floatingStyles: Y,
                        placement: I,
                        isPositioned: X,
                        middlewareData: $
                    } = function(t) {
                        void 0 === t && (t = {});
                        let {
                            placement: e = "bottom",
                            strategy: n = "absolute",
                            middleware: i = [],
                            platform: o,
                            elements: {
                                reference: l,
                                floating: a
                            } = {},
                            transform: f = !0,
                            whileElementsMounted: u,
                            open: s
                        } = t, [c, d] = r.useState({
                            x: 0,
                            y: 0,
                            strategy: n,
                            placement: e,
                            middlewareData: {},
                            isPositioned: !1
                        }), [p, h] = r.useState(i);
                        tL(p, i) || h(i);
                        let [m, g] = r.useState(null), [y, w] = r.useState(null), v = r.useCallback(t => {
                            t !== A.current && (A.current = t, g(t))
                        }, []), x = r.useCallback(t => {
                            t !== S.current && (S.current = t, w(t))
                        }, []), b = l || m, R = a || y, A = r.useRef(null), S = r.useRef(null), L = r.useRef(c), C = null != u, T = tE(u), E = tE(o), O = tE(s), P = r.useCallback(() => {
                            if (!A.current || !S.current) return;
                            let t = {
                                placement: e,
                                strategy: n,
                                middleware: p
                            };
                            E.current && (t.platform = E.current), tR(A.current, S.current, t).then(t => {
                                let e = { ...t,
                                    isPositioned: !1 !== O.current
                                };
                                k.current && !tL(L.current, e) && (L.current = e, tA.flushSync(() => {
                                    d(e)
                                }))
                            })
                        }, [p, e, n, E, O]);
                        tS(() => {
                            !1 === s && L.current.isPositioned && (L.current.isPositioned = !1, d(t => ({ ...t,
                                isPositioned: !1
                            })))
                        }, [s]);
                        let k = r.useRef(!1);
                        tS(() => (k.current = !0, () => {
                            k.current = !1
                        }), []), tS(() => {
                            if (b && (A.current = b), R && (S.current = R), b && R) {
                                if (T.current) return T.current(b, R, P);
                                P()
                            }
                        }, [b, R, P, T, C]);
                        let D = r.useMemo(() => ({
                                reference: A,
                                floating: S,
                                setReference: v,
                                setFloating: x
                            }), [v, x]),
                            H = r.useMemo(() => ({
                                reference: b,
                                floating: R
                            }), [b, R]),
                            W = r.useMemo(() => {
                                let t = {
                                    position: n,
                                    left: 0,
                                    top: 0
                                };
                                if (!H.floating) return t;
                                let e = tT(H.floating, c.x),
                                    r = tT(H.floating, c.y);
                                return f ? { ...t,
                                    transform: "translate(" + e + "px, " + r + "px)",
                                    ...tC(H.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: n,
                                    left: e,
                                    top: r
                                }
                            }, [n, f, H.floating, c.x, c.y]);
                        return r.useMemo(() => ({ ...c,
                            update: P,
                            refs: D,
                            elements: H,
                            floatingStyles: W
                        }), [c, P, D, H, W])
                    }({
                        strategy: "fixed",
                        placement: m + ("center" !== y ? "-" + y : ""),
                        whileElementsMounted: function() {
                            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            return function(t, e, n, r) {
                                let i;
                                void 0 === r && (r = {});
                                let {
                                    ancestorScroll: a = !0,
                                    ancestorResize: u = !0,
                                    elementResize: s = "function" == typeof ResizeObserver,
                                    layoutShift: c = "function" == typeof IntersectionObserver,
                                    animationFrame: d = !1
                                } = r, p = tl(t), h = a || u ? [...p ? tr(p) : [], ...tr(e)] : [];
                                h.forEach(t => {
                                    a && t.addEventListener("scroll", n, {
                                        passive: !0
                                    }), u && t.addEventListener("resize", n)
                                });
                                let m = p && c ? function(t, e) {
                                        let n, r = null,
                                            i = j(t);

                                        function a() {
                                            var t;
                                            clearTimeout(n), null == (t = r) || t.disconnect(), r = null
                                        }
                                        return ! function u(s, c) {
                                            void 0 === s && (s = !1), void 0 === c && (c = 1), a();
                                            let d = t.getBoundingClientRect(),
                                                {
                                                    left: p,
                                                    top: h,
                                                    width: m,
                                                    height: g
                                                } = d;
                                            if (s || e(), !m || !g) return;
                                            let y = f(h),
                                                w = f(i.clientWidth - (p + m)),
                                                v = {
                                                    rootMargin: -y + "px " + -w + "px " + -f(i.clientHeight - (h + g)) + "px " + -f(p) + "px",
                                                    threshold: l(0, o(1, c)) || 1
                                                },
                                                x = !0;

                                            function b(e) {
                                                let r = e[0].intersectionRatio;
                                                if (r !== c) {
                                                    if (!x) return u();
                                                    r ? u(!1, r) : n = setTimeout(() => {
                                                        u(!1, 1e-7)
                                                    }, 1e3)
                                                }
                                                1 !== r || tx(d, t.getBoundingClientRect()) || u(), x = !1
                                            }
                                            try {
                                                r = new IntersectionObserver(b, { ...v,
                                                    root: i.ownerDocument
                                                })
                                            } catch (t) {
                                                r = new IntersectionObserver(b, v)
                                            }
                                            r.observe(t)
                                        }(!0), a
                                    }(p, n) : null,
                                    g = -1,
                                    y = null;
                                s && (y = new ResizeObserver(t => {
                                    let [r] = t;
                                    r && r.target === p && y && (y.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
                                        var t;
                                        null == (t = y) || t.observe(e)
                                    })), n()
                                }), p && !d && y.observe(p), y.observe(e));
                                let w = d ? ts(t) : null;
                                return d && function e() {
                                    let r = ts(t);
                                    w && !tx(w, r) && n(), w = r, i = requestAnimationFrame(e)
                                }(), n(), () => {
                                    var t;
                                    h.forEach(t => {
                                        a && t.removeEventListener("scroll", n), u && t.removeEventListener("resize", n)
                                    }), null == m || m(), null == (t = y) || t.disconnect(), y = null, d && cancelAnimationFrame(i)
                                }
                            }(...e, {
                                animationFrame: "always" === L
                            })
                        },
                        elements: {
                            reference: E.anchor
                        },
                        middleware: [tP({
                            mainAxis: g + M,
                            alignmentAxis: w
                        }), x && tk({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === A ? tD() : void 0,
                            ...B
                        }), x && tH({ ...B
                        }), tW({ ...B,
                            apply: t => {
                                let {
                                    elements: e,
                                    rects: n,
                                    availableWidth: r,
                                    availableHeight: i
                                } = t, {
                                    width: o,
                                    height: l
                                } = n.reference, a = e.floating.style;
                                a.setProperty("--radix-popper-available-width", "".concat(r, "px")), a.setProperty("--radix-popper-available-height", "".concat(i, "px")), a.setProperty("--radix-popper-anchor-width", "".concat(o, "px")), a.setProperty("--radix-popper-anchor-height", "".concat(l, "px"))
                            }
                        }), D && tM({
                            element: D,
                            padding: v
                        }), t9({
                            arrowWidth: F,
                            arrowHeight: M
                        }), S && tF({
                            strategy: "referenceHidden",
                            ...B
                        })]
                    }), [q, G] = t6(I), J = (0, t_.W)(C);
                    (0, tY.b)(() => {
                        X && (null == J || J())
                    }, [X, J]);
                    let K = null === (n = $.arrow) || void 0 === n ? void 0 : n.x,
                        Q = null === (i = $.arrow) || void 0 === i ? void 0 : i.y,
                        U = (null === (a = $.arrow) || void 0 === a ? void 0 : a.centerOffset) !== 0,
                        [Z, tt] = r.useState();
                    return (0, tY.b)(() => {
                        O && tt(window.getComputedStyle(O).zIndex)
                    }, [O]), (0, tV.jsx)("div", {
                        ref: _.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...Y,
                            transform: X ? Y.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: Z,
                            "--radix-popper-transform-origin": [null === (u = $.transformOrigin) || void 0 === u ? void 0 : u.x, null === (s = $.transformOrigin) || void 0 === s ? void 0 : s.y].join(" "),
                            ...(null === (c = $.hide) || void 0 === c ? void 0 : c.referenceHidden) && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: t.dir,
                        children: (0, tV.jsx)(t0, {
                            scope: h,
                            placedSide: q,
                            onArrowChange: H,
                            arrowX: K,
                            arrowY: Q,
                            shouldHideArrow: U,
                            children: (0, tV.jsx)(tj.WV.div, {
                                "data-side": q,
                                "data-align": G,
                                ...T,
                                ref: k,
                                style: { ...T.style,
                                    animation: X ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            t2.displayName = tZ;
            var t5 = "PopperArrow",
                t7 = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                t3 = r.forwardRef(function(t, e) {
                    let {
                        __scopePopper: n,
                        ...r
                    } = t, i = t1(t5, n), o = t7[i.placedSide];
                    return (0, tV.jsx)("span", {
                        ref: i.onArrowChange,
                        style: {
                            position: "absolute",
                            left: i.arrowX,
                            top: i.arrowY,
                            [o]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[i.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[i.placedSide],
                            visibility: i.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, tV.jsx)(tz, { ...r,
                            ref: e,
                            style: { ...r.style,
                                display: "block"
                            }
                        })
                    })
                });

            function t8(t) {
                return null !== t
            }
            t3.displayName = t5;
            var t9 = t => ({
                name: "transformOrigin",
                options: t,
                fn(e) {
                    var n, r, i, o, l;
                    let {
                        placement: a,
                        rects: f,
                        middlewareData: u
                    } = e, s = (null === (n = u.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0, c = s ? 0 : t.arrowWidth, d = s ? 0 : t.arrowHeight, [p, h] = t6(a), m = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[h], g = (null !== (o = null === (r = u.arrow) || void 0 === r ? void 0 : r.x) && void 0 !== o ? o : 0) + c / 2, y = (null !== (l = null === (i = u.arrow) || void 0 === i ? void 0 : i.y) && void 0 !== l ? l : 0) + d / 2, w = "", v = "";
                    return "bottom" === p ? (w = s ? m : "".concat(g, "px"), v = "".concat(-d, "px")) : "top" === p ? (w = s ? m : "".concat(g, "px"), v = "".concat(f.floating.height + d, "px")) : "right" === p ? (w = "".concat(-d, "px"), v = s ? m : "".concat(y, "px")) : "left" === p && (w = "".concat(f.floating.width + d, "px"), v = s ? m : "".concat(y, "px")), {
                        data: {
                            x: w,
                            y: v
                        }
                    }
                }
            });

            function t6(t) {
                let [e, n = "center"] = t.split("-");
                return [e, n]
            }
            var t4 = tK,
                et = tU,
                ee = t2,
                en = t3
        },
        58870: function(t, e, n) {
            n.d(e, {
                t: function() {
                    return o
                }
            });
            var r = n(57420),
                i = n(92883);

            function o(t) {
                let [e, n] = r.useState(void 0);
                return (0, i.b)(() => {
                    if (t) {
                        n({
                            width: t.offsetWidth,
                            height: t.offsetHeight
                        });
                        let e = new ResizeObserver(e => {
                            let r, i;
                            if (!Array.isArray(e) || !e.length) return;
                            let o = e[0];
                            if ("borderBoxSize" in o) {
                                let t = o.borderBoxSize,
                                    e = Array.isArray(t) ? t[0] : t;
                                r = e.inlineSize, i = e.blockSize
                            } else r = t.offsetWidth, i = t.offsetHeight;
                            n({
                                width: r,
                                height: i
                            })
                        });
                        return e.observe(t, {
                            box: "border-box"
                        }), () => e.unobserve(t)
                    }
                    n(void 0)
                }, [t]), e
            }
        }
    }
]);