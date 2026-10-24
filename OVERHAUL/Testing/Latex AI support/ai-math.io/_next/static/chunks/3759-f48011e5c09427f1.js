"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3759], {
        33492: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(30911).Z)("ArrowLeft", [
                ["path", {
                    d: "m12 19-7-7 7-7",
                    key: "1l729n"
                }],
                ["path", {
                    d: "M19 12H5",
                    key: "x3x0zl"
                }]
            ])
        },
        11451: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(30911).Z)("ArrowRight", [
                ["path", {
                    d: "M5 12h14",
                    key: "1ays0h"
                }],
                ["path", {
                    d: "m12 5 7 7-7 7",
                    key: "xquz4c"
                }]
            ])
        },
        7173: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(30911).Z)("Image", [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2",
                    key: "1m3agn"
                }],
                ["circle", {
                    cx: "9",
                    cy: "9",
                    r: "2",
                    key: "af1f0g"
                }],
                ["path", {
                    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
                    key: "1xmnt7"
                }]
            ])
        },
        47585: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(30911).Z)("WandSparkles", [
                ["path", {
                    d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
                    key: "ul74o6"
                }],
                ["path", {
                    d: "m14 7 3 3",
                    key: "1r5n42"
                }],
                ["path", {
                    d: "M5 6v4",
                    key: "ilb8ba"
                }],
                ["path", {
                    d: "M19 14v4",
                    key: "blhpug"
                }],
                ["path", {
                    d: "M10 2v2",
                    key: "7u0qdc"
                }],
                ["path", {
                    d: "M7 8H3",
                    key: "zfb6yr"
                }],
                ["path", {
                    d: "M21 16h-4",
                    key: "1cnmox"
                }],
                ["path", {
                    d: "M11 3H9",
                    key: "1obp7u"
                }]
            ])
        },
        65624: function(e, t, n) {
            n.d(t, {
                VY: function() {
                    return $
                },
                fC: function() {
                    return _
                },
                h_: function() {
                    return U
                },
                xz: function() {
                    return B
                }
            });
            var r = n(57420),
                o = n(88864),
                i = n(46965),
                u = n(26059),
                c = n(18257),
                a = n(5952),
                l = n(16347),
                s = n(57486),
                f = n(3677),
                d = n(10916),
                p = n(61610),
                g = n(48769),
                h = n(65600),
                m = n(73812),
                v = n(32965),
                y = n(78138),
                x = n(18243),
                b = "Popover",
                [w, E] = (0, u.b)(b, [f.D7]),
                S = (0, f.D7)(),
                [k, M] = w(b),
                D = e => {
                    let {
                        __scopePopover: t,
                        children: n,
                        open: o,
                        defaultOpen: i,
                        onOpenChange: u,
                        modal: c = !1
                    } = e, a = S(t), l = r.useRef(null), [d, p] = r.useState(!1), [g, h] = (0, m.T)({
                        prop: o,
                        defaultProp: null != i && i,
                        onChange: u,
                        caller: b
                    });
                    return (0, x.jsx)(f.fC, { ...a,
                        children: (0, x.jsx)(k, {
                            scope: t,
                            contentId: (0, s.M)(),
                            triggerRef: l,
                            open: g,
                            onOpenChange: h,
                            onOpenToggle: r.useCallback(() => h(e => !e), [h]),
                            hasCustomAnchor: d,
                            onCustomAnchorAdd: r.useCallback(() => p(!0), []),
                            onCustomAnchorRemove: r.useCallback(() => p(!1), []),
                            modal: c,
                            children: n
                        })
                    })
                };
            D.displayName = b;
            var O = "PopoverAnchor";
            r.forwardRef((e, t) => {
                let {
                    __scopePopover: n,
                    ...o
                } = e, i = M(O, n), u = S(n), {
                    onCustomAnchorAdd: c,
                    onCustomAnchorRemove: a
                } = i;
                return r.useEffect(() => (c(), () => a()), [c, a]), (0, x.jsx)(f.ee, { ...u,
                    ...o,
                    ref: t
                })
            }).displayName = O;
            var P = "PopoverTrigger",
                j = r.forwardRef((e, t) => {
                    let {
                        __scopePopover: n,
                        ...r
                    } = e, u = M(P, n), c = S(n), a = (0, i.e)(t, u.triggerRef), l = (0, x.jsx)(g.WV.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": u.open,
                        "aria-controls": u.contentId,
                        "data-state": Z(u.open),
                        ...r,
                        ref: a,
                        onClick: (0, o.Mj)(e.onClick, u.onOpenToggle)
                    });
                    return u.hasCustomAnchor ? l : (0, x.jsx)(f.ee, {
                        asChild: !0,
                        ...c,
                        children: l
                    })
                });
            j.displayName = P;
            var A = "PopoverPortal",
                [C, F] = w(A, {
                    forceMount: void 0
                }),
                R = e => {
                    let {
                        __scopePopover: t,
                        forceMount: n,
                        children: r,
                        container: o
                    } = e, i = M(A, t);
                    return (0, x.jsx)(C, {
                        scope: t,
                        forceMount: n,
                        children: (0, x.jsx)(p.z, {
                            present: n || i.open,
                            children: (0, x.jsx)(d.h, {
                                asChild: !0,
                                container: o,
                                children: r
                            })
                        })
                    })
                };
            R.displayName = A;
            var I = "PopoverContent",
                L = r.forwardRef((e, t) => {
                    let n = F(I, e.__scopePopover),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        i = M(I, e.__scopePopover);
                    return (0, x.jsx)(p.z, {
                        present: r || i.open,
                        children: i.modal ? (0, x.jsx)(T, { ...o,
                            ref: t
                        }) : (0, x.jsx)(z, { ...o,
                            ref: t
                        })
                    })
                });
            L.displayName = I;
            var N = (0, h.Z8)("PopoverContent.RemoveScroll"),
                T = r.forwardRef((e, t) => {
                    let n = M(I, e.__scopePopover),
                        u = r.useRef(null),
                        c = (0, i.e)(t, u),
                        a = r.useRef(!1);
                    return r.useEffect(() => {
                        let e = u.current;
                        if (e) return (0, v.Ry)(e)
                    }, []), (0, x.jsx)(y.Z, {
                        as: N,
                        allowPinchZoom: !0,
                        children: (0, x.jsx)(V, { ...e,
                            ref: c,
                            trapFocus: n.open,
                            disableOutsidePointerEvents: !0,
                            onCloseAutoFocus: (0, o.Mj)(e.onCloseAutoFocus, e => {
                                var t;
                                e.preventDefault(), a.current || null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                            }),
                            onPointerDownOutside: (0, o.Mj)(e.onPointerDownOutside, e => {
                                let t = e.detail.originalEvent,
                                    n = 0 === t.button && !0 === t.ctrlKey,
                                    r = 2 === t.button || n;
                                a.current = r
                            }, {
                                checkForDefaultPrevented: !1
                            }),
                            onFocusOutside: (0, o.Mj)(e.onFocusOutside, e => e.preventDefault(), {
                                checkForDefaultPrevented: !1
                            })
                        })
                    })
                }),
                z = r.forwardRef((e, t) => {
                    let n = M(I, e.__scopePopover),
                        o = r.useRef(!1),
                        i = r.useRef(!1);
                    return (0, x.jsx)(V, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var r, u;
                            null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, t), t.defaultPrevented || (o.current || null === (u = n.triggerRef.current) || void 0 === u || u.focus(), t.preventDefault()), o.current = !1, i.current = !1
                        },
                        onInteractOutside: t => {
                            var r, u;
                            null === (r = e.onInteractOutside) || void 0 === r || r.call(e, t), t.defaultPrevented || (o.current = !0, "pointerdown" !== t.detail.originalEvent.type || (i.current = !0));
                            let c = t.target;
                            (null === (u = n.triggerRef.current) || void 0 === u ? void 0 : u.contains(c)) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
                        }
                    })
                }),
                V = r.forwardRef((e, t) => {
                    let {
                        __scopePopover: n,
                        trapFocus: r,
                        onOpenAutoFocus: o,
                        onCloseAutoFocus: i,
                        disableOutsidePointerEvents: u,
                        onEscapeKeyDown: s,
                        onPointerDownOutside: d,
                        onFocusOutside: p,
                        onInteractOutside: g,
                        ...h
                    } = e, m = M(I, n), v = S(n);
                    return (0, a.EW)(), (0, x.jsx)(l.M, {
                        asChild: !0,
                        loop: !0,
                        trapped: r,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: i,
                        children: (0, x.jsx)(c.XB, {
                            asChild: !0,
                            disableOutsidePointerEvents: u,
                            onInteractOutside: g,
                            onEscapeKeyDown: s,
                            onPointerDownOutside: d,
                            onFocusOutside: p,
                            onDismiss: () => m.onOpenChange(!1),
                            children: (0, x.jsx)(f.VY, {
                                "data-state": Z(m.open),
                                role: "dialog",
                                id: m.contentId,
                                ...v,
                                ...h,
                                ref: t,
                                style: { ...h.style,
                                    "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                                    "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                                    "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                                    "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                                    "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                                }
                            })
                        })
                    })
                }),
                H = "PopoverClose";

            function Z(e) {
                return e ? "open" : "closed"
            }
            r.forwardRef((e, t) => {
                let {
                    __scopePopover: n,
                    ...r
                } = e, i = M(H, n);
                return (0, x.jsx)(g.WV.button, {
                    type: "button",
                    ...r,
                    ref: t,
                    onClick: (0, o.Mj)(e.onClick, () => i.onOpenChange(!1))
                })
            }).displayName = H, r.forwardRef((e, t) => {
                let {
                    __scopePopover: n,
                    ...r
                } = e, o = S(n);
                return (0, x.jsx)(f.Eh, { ...o,
                    ...r,
                    ref: t
                })
            }).displayName = "PopoverArrow";
            var _ = D,
                B = j,
                U = R,
                $ = L
        },
        90792: function(e, t, n) {
            function r(e, t, n) {
                return Math.min(Math.max(e, t), n)
            }

            function o(e) {
                return "number" == typeof e && !isNaN(e)
            }

            function i(e = {}) {
                let t, n, i, u;
                let c = [],
                    a = 0,
                    l = 0,
                    s = 0,
                    f = !1;

                function d() {
                    m(t.selectedScrollSnap(), 1)
                }

                function p() {
                    f = !1
                }

                function g() {
                    f = !1, a = 0, l = 0
                }

                function h() {
                    let e = t.internalEngine().scrollBody.duration();
                    l = e ? 0 : 1, f = !0, e || d()
                }

                function m(e, n) {
                    t.scrollSnapList().forEach((o, i) => {
                        let u = Math.abs(n),
                            l = c[i],
                            d = i === e,
                            p = r(d ? l + u : l - u, 0, 1);
                        c[i] = p;
                        let g = d && f,
                            h = t.previousScrollSnap();
                        g && (c[h] = 1 - p), d && function(e, n) {
                                let {
                                    index: r,
                                    dragHandler: o,
                                    scrollSnaps: i
                                } = t.internalEngine(), u = o.pointerDown(), c = 1 / (i.length - 1), l = e, f = u ? t.selectedScrollSnap() : t.previousScrollSnap();
                                if (u && l === f) {
                                    let e = -1 * Math.sign(a);
                                    l = f, f = r.clone().set(f).add(e).get()
                                }
                                s = f * c + (l - f) * c * n
                            }(e, p),
                            function(e) {
                                let n = t.internalEngine().slideRegistry[e],
                                    {
                                        scrollSnaps: r,
                                        containerRect: o
                                    } = t.internalEngine(),
                                    i = c[e];
                                n.forEach(n => {
                                    let u = t.slideNodes()[n].style,
                                        c = parseFloat(i.toFixed(2)),
                                        a = c > 0,
                                        l = function(e) {
                                            let {
                                                axis: n
                                            } = t.internalEngine(), r = n.scroll.toUpperCase();
                                            return `translate${r}(${n.direction(e)}px)`
                                        }(a ? r[e] : o.width + 2);
                                    a && (u.transform = l), u.opacity = c.toString(), u.pointerEvents = i > .5 ? "auto" : "none", a || (u.transform = l)
                                })
                            }(i)
                    })
                }

                function v() {
                    let {
                        dragHandler: e,
                        index: n,
                        scrollBody: r
                    } = t.internalEngine(), o = t.selectedScrollSnap();
                    if (!e.pointerDown()) return o;
                    let i = Math.sign(r.velocity()),
                        u = Math.sign(a),
                        c = n.clone().set(o).add(-1 * i).get();
                    return i && u ? u === i ? c : o : null
                }

                function y() {
                    let {
                        target: e,
                        location: r
                    } = t.internalEngine(), i = e.get() - r.get(), u = v(), s = !o(u);
                    return ! function(e) {
                        let {
                            dragHandler: r,
                            scrollBody: i
                        } = e.internalEngine(), u = r.pointerDown(), s = i.velocity(), f = i.duration(), d = v(), p = !o(d);
                        if (u) {
                            if (!s) return;
                            a += s, l = Math.abs(s / n),
                                function(e) {
                                    let {
                                        scrollSnaps: n,
                                        location: r,
                                        target: i
                                    } = t.internalEngine();
                                    o(e) && !(c[e] < .5) && (r.set(n[e]), i.set(r))
                                }(d)
                        }
                        if (!u) {
                            if (!f || p) return;
                            l += (1 - c[d]) / f, l *= .68
                        }
                        p || m(d, l)
                    }(t), !(s || Math.abs(i) >= 1) && c[u] > .999
                }

                function x() {
                    return s
                }
                return {
                    name: "fade",
                    options: e,
                    init: function(e) {
                        let o = (t = e).selectedScrollSnap(),
                            {
                                scrollBody: a,
                                containerRect: l,
                                axis: s
                            } = t.internalEngine();
                        n = r(.75 * s.measureSize(l), 200, 500), f = !1, c = t.scrollSnapList().map((e, t) => t === o ? 1 : 0), i = a.settled, u = t.scrollProgress, a.settled = y, t.scrollProgress = x, t.on("select", h).on("slideFocus", d).on("pointerDown", g).on("pointerUp", p),
                            function() {
                                let {
                                    translate: e,
                                    slideLooper: n
                                } = t.internalEngine();
                                e.clear(), e.toggleActive(!1), n.loopPoints.forEach(({
                                    translate: e
                                }) => {
                                    e.clear(), e.toggleActive(!1)
                                })
                            }(), d()
                    },
                    destroy: function() {
                        let {
                            scrollBody: e
                        } = t.internalEngine();
                        e.settled = i, t.scrollProgress = u, t.off("select", h).off("slideFocus", d).off("pointerDown", g).off("pointerUp", p), t.slideNodes().forEach(e => {
                            let t = e.style;
                            t.opacity = "", t.transform = "", t.pointerEvents = "", e.getAttribute("style") || e.removeAttribute("style")
                        })
                    }
                }
            }
            n.d(t, {
                Z: function() {
                    return i
                }
            }), i.globalOptions = void 0
        },
        70569: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return M
                }
            });
            var r = n(57420);

            function o(e) {
                return "[object Object]" === Object.prototype.toString.call(e) || Array.isArray(e)
            }

            function i(e, t) {
                let n = Object.keys(e),
                    r = Object.keys(t);
                return n.length === r.length && JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && n.every(n => {
                    let r = e[n],
                        u = t[n];
                    return "function" == typeof r ? `${r}` == `${u}` : o(r) && o(u) ? i(r, u) : r === u
                })
            }

            function u(e) {
                return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
            }

            function c(e) {
                return "number" == typeof e
            }

            function a(e) {
                return "string" == typeof e
            }

            function l(e) {
                return "boolean" == typeof e
            }

            function s(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function f(e) {
                return Math.abs(e)
            }

            function d(e) {
                return Math.sign(e)
            }

            function p(e) {
                return v(e).map(Number)
            }

            function g(e) {
                return e[h(e)]
            }

            function h(e) {
                return Math.max(0, e.length - 1)
            }

            function m(e, t = 0) {
                return Array.from(Array(e), (e, n) => t + n)
            }

            function v(e) {
                return Object.keys(e)
            }

            function y(e, t) {
                return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
            }

            function x() {
                let e = [],
                    t = {
                        add: function(n, r, o, i = {
                            passive: !0
                        }) {
                            let u;
                            return "addEventListener" in n ? (n.addEventListener(r, o, i), u = () => n.removeEventListener(r, o, i)) : (n.addListener(o), u = () => n.removeListener(o)), e.push(u), t
                        },
                        clear: function() {
                            e = e.filter(e => e())
                        }
                    };
                return t
            }

            function b(e = 0, t = 0) {
                let n = f(e - t);

                function r(n) {
                    return n < e || n > t
                }
                return {
                    length: n,
                    max: t,
                    min: e,
                    constrain: function(n) {
                        return r(n) ? n < e ? e : t : n
                    },
                    reachedAny: r,
                    reachedMax: function(e) {
                        return e > t
                    },
                    reachedMin: function(t) {
                        return t < e
                    },
                    removeOffset: function(e) {
                        return n ? e - n * Math.ceil((e - t) / n) : e
                    }
                }
            }

            function w(e) {
                let t = e;

                function n(e) {
                    return c(e) ? e : e.get()
                }
                return {
                    get: function() {
                        return t
                    },
                    set: function(e) {
                        t = n(e)
                    },
                    add: function(e) {
                        t += n(e)
                    },
                    subtract: function(e) {
                        t -= n(e)
                    }
                }
            }

            function E(e, t) {
                let n = "x" === e.scroll ? function(e) {
                        return `translate3d(${e}px,0px,0px)`
                    } : function(e) {
                        return `translate3d(0px,${e}px,0px)`
                    },
                    r = t.style,
                    o = null,
                    i = !1;
                return {
                    clear: function() {
                        i || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
                    },
                    to: function(t) {
                        if (i) return;
                        let u = Math.round(100 * e.direction(t)) / 100;
                        u !== o && (r.transform = n(u), o = u)
                    },
                    toggleActive: function(e) {
                        i = !e
                    }
                }
            }
            let S = {
                align: "center",
                axis: "x",
                container: null,
                slides: null,
                containScroll: "trimSnaps",
                direction: "ltr",
                slidesToScroll: 1,
                inViewThreshold: 0,
                breakpoints: {},
                dragFree: !1,
                dragThreshold: 10,
                loop: !1,
                skipSnaps: !1,
                duration: 25,
                startIndex: 0,
                active: !0,
                watchDrag: !0,
                watchResize: !0,
                watchSlides: !0,
                watchFocus: !0
            };

            function k(e, t, n) {
                let r, o, i, u, M;
                let D = e.ownerDocument,
                    O = D.defaultView,
                    P = function(e) {
                        function t(e, t) {
                            return function e(t, n) {
                                return [t, n].reduce((t, n) => (v(n).forEach(r => {
                                    let o = t[r],
                                        i = n[r],
                                        u = s(o) && s(i);
                                    t[r] = u ? e(o, i) : i
                                }), t), {})
                            }(e, t || {})
                        }
                        return {
                            mergeOptions: t,
                            optionsAtMedia: function(n) {
                                let r = n.breakpoints || {},
                                    o = v(r).filter(t => e.matchMedia(t).matches).map(e => r[e]).reduce((e, n) => t(e, n), {});
                                return t(n, o)
                            },
                            optionsMediaQueries: function(t) {
                                return t.map(e => v(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
                            }
                        }
                    }(O),
                    j = (M = [], {
                        init: function(e, t) {
                            return (M = t.filter(({
                                options: e
                            }) => !1 !== P.optionsAtMedia(e).active)).forEach(t => t.init(e, P)), t.reduce((e, t) => Object.assign(e, {
                                [t.name]: t
                            }), {})
                        },
                        destroy: function() {
                            M = M.filter(e => e.destroy())
                        }
                    }),
                    A = x(),
                    C = function() {
                        let e, t = {},
                            n = {
                                init: function(t) {
                                    e = t
                                },
                                emit: function(r) {
                                    return (t[r] || []).forEach(t => t(e, r)), n
                                },
                                off: function(e, r) {
                                    return t[e] = (t[e] || []).filter(e => e !== r), n
                                },
                                on: function(e, r) {
                                    return t[e] = (t[e] || []).concat([r]), n
                                },
                                clear: function() {
                                    t = {}
                                }
                            };
                        return n
                    }(),
                    {
                        mergeOptions: F,
                        optionsAtMedia: R,
                        optionsMediaQueries: I
                    } = P,
                    {
                        on: L,
                        off: N,
                        emit: T
                    } = C,
                    z = !1,
                    V = F(S, k.globalOptions),
                    H = F(V),
                    Z = [];

                function _(t, n) {
                    !z && (H = R(V = F(V, t)), Z = n || Z, function() {
                        let {
                            container: t,
                            slides: n
                        } = H;
                        i = (a(t) ? e.querySelector(t) : t) || e.children[0];
                        let r = a(n) ? i.querySelectorAll(n) : n;
                        u = [].slice.call(r || i.children)
                    }(), r = function t(n) {
                        let r = function(e, t, n, r, o, i, u) {
                            let s, S;
                            let {
                                align: k,
                                axis: M,
                                direction: D,
                                startIndex: O,
                                loop: P,
                                duration: j,
                                dragFree: A,
                                dragThreshold: C,
                                inViewThreshold: F,
                                slidesToScroll: R,
                                skipSnaps: I,
                                containScroll: L,
                                watchResize: N,
                                watchSlides: T,
                                watchDrag: z,
                                watchFocus: V
                            } = i, H = {
                                measure: function(e) {
                                    let {
                                        offsetTop: t,
                                        offsetLeft: n,
                                        offsetWidth: r,
                                        offsetHeight: o
                                    } = e;
                                    return {
                                        top: t,
                                        right: n + r,
                                        bottom: t + o,
                                        left: n,
                                        width: r,
                                        height: o
                                    }
                                }
                            }, Z = H.measure(t), _ = n.map(H.measure), B = function(e, t) {
                                let n = "rtl" === t,
                                    r = "y" === e,
                                    o = !r && n ? -1 : 1;
                                return {
                                    scroll: r ? "y" : "x",
                                    cross: r ? "x" : "y",
                                    startEdge: r ? "top" : n ? "right" : "left",
                                    endEdge: r ? "bottom" : n ? "left" : "right",
                                    measureSize: function(e) {
                                        let {
                                            height: t,
                                            width: n
                                        } = e;
                                        return r ? t : n
                                    },
                                    direction: function(e) {
                                        return e * o
                                    }
                                }
                            }(M, D), U = B.measureSize(Z), $ = {
                                measure: function(e) {
                                    return e / 100 * U
                                }
                            }, q = function(e, t) {
                                let n = {
                                    start: function() {
                                        return 0
                                    },
                                    center: function(e) {
                                        return (t - e) / 2
                                    },
                                    end: function(e) {
                                        return t - e
                                    }
                                };
                                return {
                                    measure: function(r, o) {
                                        return a(e) ? n[e](r) : e(t, r, o)
                                    }
                                }
                            }(k, U), W = !P && !!L, {
                                slideSizes: X,
                                slideSizesWithGaps: Y,
                                startGap: J,
                                endGap: K
                            } = function(e, t, n, r, o, i) {
                                let {
                                    measureSize: u,
                                    startEdge: c,
                                    endEdge: a
                                } = e, l = n[0] && o, s = function() {
                                    if (!l) return 0;
                                    let e = n[0];
                                    return f(t[c] - e[c])
                                }(), d = l ? parseFloat(i.getComputedStyle(g(r)).getPropertyValue(`margin-${a}`)) : 0, p = n.map(u), m = n.map((e, t, n) => {
                                    let r = t === h(n);
                                    return t ? r ? p[t] + d : n[t + 1][c] - e[c] : p[t] + s
                                }).map(f);
                                return {
                                    slideSizes: p,
                                    slideSizesWithGaps: m,
                                    startGap: s,
                                    endGap: d
                                }
                            }(B, Z, _, n, P || !!L, o), Q = function(e, t, n, r, o, i, u, a, l) {
                                let {
                                    startEdge: s,
                                    endEdge: d,
                                    direction: m
                                } = e, v = c(n);
                                return {
                                    groupSlides: function(e) {
                                        return v ? p(e).filter(e => e % n == 0).map(t => e.slice(t, t + n)) : e.length ? p(e).reduce((n, c, l) => {
                                            let p = g(n) || 0,
                                                v = c === h(e),
                                                y = o[s] - i[p][s],
                                                x = o[s] - i[c][d],
                                                b = r || 0 !== p ? 0 : m(u),
                                                w = f(x - (!r && v ? m(a) : 0) - (y + b));
                                            return l && w > t + 2 && n.push(c), v && n.push(e.length), n
                                        }, []).map((t, n, r) => {
                                            let o = Math.max(r[n - 1] || 0);
                                            return e.slice(o, t)
                                        }) : []
                                    }
                                }
                            }(B, U, R, P, Z, _, J, K, 0), {
                                snaps: G,
                                snapsAligned: ee
                            } = function(e, t, n, r, o) {
                                let {
                                    startEdge: i,
                                    endEdge: u
                                } = e, {
                                    groupSlides: c
                                } = o, a = c(r).map(e => g(e)[u] - e[0][i]).map(f).map(t.measure), l = r.map(e => n[i] - e[i]).map(e => -f(e)), s = c(l).map(e => e[0]).map((e, t) => e + a[t]);
                                return {
                                    snaps: l,
                                    snapsAligned: s
                                }
                            }(B, q, Z, _, Q), et = -g(G) + g(Y), {
                                snapsContained: en,
                                scrollContainLimit: er
                            } = function(e, t, n, r, o) {
                                let i = b(-t + e, 0),
                                    u = n.map((e, t) => {
                                        let {
                                            min: r,
                                            max: o
                                        } = i, u = i.constrain(e), c = t === h(n);
                                        return t ? c || 1 >= f(r - u) ? r : 1 >= f(o - u) ? o : u : o
                                    }).map(e => parseFloat(e.toFixed(3))),
                                    c = function() {
                                        let e = u[0],
                                            t = g(u);
                                        return b(u.lastIndexOf(e), u.indexOf(t) + 1)
                                    }();
                                return {
                                    snapsContained: function() {
                                        if (t <= e + 2) return [i.max];
                                        if ("keepSnaps" === r) return u;
                                        let {
                                            min: n,
                                            max: o
                                        } = c;
                                        return u.slice(n, o)
                                    }(),
                                    scrollContainLimit: c
                                }
                            }(U, et, ee, L, 0), eo = W ? en : ee, {
                                limit: ei
                            } = function(e, t, n) {
                                let r = t[0];
                                return {
                                    limit: b(n ? r - e : g(t), r)
                                }
                            }(et, eo, P), eu = function e(t, n, r) {
                                let {
                                    constrain: o
                                } = b(0, t), i = t + 1, u = c(n);

                                function c(e) {
                                    return r ? f((i + e) % i) : o(e)
                                }

                                function a() {
                                    return e(t, u, r)
                                }
                                let l = {
                                    get: function() {
                                        return u
                                    },
                                    set: function(e) {
                                        return u = c(e), l
                                    },
                                    add: function(e) {
                                        return a().set(u + e)
                                    },
                                    clone: a
                                };
                                return l
                            }(h(eo), O, P), ec = eu.clone(), ea = p(n), el = ({
                                dragHandler: e,
                                scrollBody: t,
                                scrollBounds: n,
                                options: {
                                    loop: r
                                }
                            }) => {
                                r || n.constrain(e.pointerDown()), t.seek()
                            }, es = ({
                                scrollBody: e,
                                translate: t,
                                location: n,
                                offsetLocation: r,
                                previousLocation: o,
                                scrollLooper: i,
                                slideLooper: u,
                                dragHandler: c,
                                animation: a,
                                eventHandler: l,
                                scrollBounds: s,
                                options: {
                                    loop: f
                                }
                            }, d) => {
                                let p = e.settled(),
                                    g = !s.shouldConstrain(),
                                    h = f ? p : p && g,
                                    m = h && !c.pointerDown();
                                m && a.stop();
                                let v = n.get() * d + o.get() * (1 - d);
                                r.set(v), f && (i.loop(e.direction()), u.loop()), t.to(r.get()), m && l.emit("settle"), h || l.emit("scroll")
                            }, ef = function(e, t, n, r) {
                                let o = x(),
                                    i = 1e3 / 60,
                                    u = null,
                                    c = 0,
                                    a = 0;

                                function l(e) {
                                    if (!a) return;
                                    u || (u = e, n(), n());
                                    let o = e - u;
                                    for (u = e, c += o; c >= i;) n(), c -= i;
                                    r(c / i), a && (a = t.requestAnimationFrame(l))
                                }

                                function s() {
                                    t.cancelAnimationFrame(a), u = null, c = 0, a = 0
                                }
                                return {
                                    init: function() {
                                        o.add(e, "visibilitychange", () => {
                                            e.hidden && (u = null, c = 0)
                                        })
                                    },
                                    destroy: function() {
                                        s(), o.clear()
                                    },
                                    start: function() {
                                        a || (a = t.requestAnimationFrame(l))
                                    },
                                    stop: s,
                                    update: n,
                                    render: r
                                }
                            }(r, o, () => el(eM), e => es(eM, e)), ed = eo[eu.get()], ep = w(ed), eg = w(ed), eh = w(ed), em = w(ed), ev = function(e, t, n, r, o, i) {
                                let u = 0,
                                    c = 0,
                                    a = o,
                                    l = .68,
                                    s = e.get(),
                                    p = 0;

                                function g(e) {
                                    return a = e, m
                                }

                                function h(e) {
                                    return l = e, m
                                }
                                let m = {
                                    direction: function() {
                                        return c
                                    },
                                    duration: function() {
                                        return a
                                    },
                                    velocity: function() {
                                        return u
                                    },
                                    seek: function() {
                                        let t = r.get() - e.get(),
                                            o = 0;
                                        return a ? (n.set(e), u += t / a, u *= l, s += u, e.add(u), o = s - p) : (u = 0, n.set(r), e.set(r), o = t), c = d(o), p = s, m
                                    },
                                    settled: function() {
                                        return .001 > f(r.get() - t.get())
                                    },
                                    useBaseFriction: function() {
                                        return h(.68)
                                    },
                                    useBaseDuration: function() {
                                        return g(o)
                                    },
                                    useFriction: h,
                                    useDuration: g
                                };
                                return m
                            }(ep, eh, eg, em, j, 0), ey = function(e, t, n, r, o) {
                                let {
                                    reachedAny: i,
                                    removeOffset: u,
                                    constrain: c
                                } = r;

                                function a(e) {
                                    return e.concat().sort((e, t) => f(e) - f(t))[0]
                                }

                                function l(t, r) {
                                    let o = [t, t + n, t - n];
                                    if (!e) return t;
                                    if (!r) return a(o);
                                    let i = o.filter(e => d(e) === r);
                                    return i.length ? a(i) : g(o) - n
                                }
                                return {
                                    byDistance: function(n, r) {
                                        let a = o.get() + n,
                                            {
                                                index: s,
                                                distance: d
                                            } = function(n) {
                                                let r = e ? u(n) : c(n),
                                                    {
                                                        index: o
                                                    } = t.map((e, t) => ({
                                                        diff: l(e - r, 0),
                                                        index: t
                                                    })).sort((e, t) => f(e.diff) - f(t.diff))[0];
                                                return {
                                                    index: o,
                                                    distance: r
                                                }
                                            }(a),
                                            p = !e && i(a);
                                        if (!r || p) return {
                                            index: s,
                                            distance: n
                                        };
                                        let g = n + l(t[s] - d, 0);
                                        return {
                                            index: s,
                                            distance: g
                                        }
                                    },
                                    byIndex: function(e, n) {
                                        let r = l(t[e] - o.get(), n);
                                        return {
                                            index: e,
                                            distance: r
                                        }
                                    },
                                    shortcut: l
                                }
                            }(P, eo, et, ei, em), ex = function(e, t, n, r, o, i, u) {
                                function c(o) {
                                    let c = o.distance,
                                        a = o.index !== t.get();
                                    i.add(c), c && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), a && (n.set(t.get()), t.set(o.index), u.emit("select"))
                                }
                                return {
                                    distance: function(e, t) {
                                        c(o.byDistance(e, t))
                                    },
                                    index: function(e, n) {
                                        let r = t.clone().set(e);
                                        c(o.byIndex(r.get(), n))
                                    }
                                }
                            }(ef, eu, ec, ev, ey, em, u), eb = function(e) {
                                let {
                                    max: t,
                                    length: n
                                } = e;
                                return {
                                    get: function(e) {
                                        return n ? -((e - t) / n) : 0
                                    }
                                }
                            }(ei), ew = x(), eE = function(e, t, n, r) {
                                let o;
                                let i = {},
                                    u = null,
                                    c = null,
                                    a = !1;
                                return {
                                    init: function() {
                                        o = new IntersectionObserver(e => {
                                            a || (e.forEach(e => {
                                                i[t.indexOf(e.target)] = e
                                            }), u = null, c = null, n.emit("slidesInView"))
                                        }, {
                                            root: e.parentElement,
                                            threshold: r
                                        }), t.forEach(e => o.observe(e))
                                    },
                                    destroy: function() {
                                        o && o.disconnect(), a = !0
                                    },
                                    get: function(e = !0) {
                                        if (e && u) return u;
                                        if (!e && c) return c;
                                        let t = v(i).reduce((t, n) => {
                                            let r = parseInt(n),
                                                {
                                                    isIntersecting: o
                                                } = i[r];
                                            return (e && o || !e && !o) && t.push(r), t
                                        }, []);
                                        return e && (u = t), e || (c = t), t
                                    }
                                }
                            }(t, n, u, F), {
                                slideRegistry: eS
                            } = function(e, t, n, r, o, i) {
                                let {
                                    groupSlides: u
                                } = o, {
                                    min: c,
                                    max: a
                                } = r;
                                return {
                                    slideRegistry: function() {
                                        let r = u(i);
                                        return 1 === n.length ? [i] : e && "keepSnaps" !== t ? r.slice(c, a).map((e, t, n) => {
                                            let r = t === h(n);
                                            return t ? r ? m(h(i) - g(n)[0] + 1, g(n)[0]) : e : m(g(n[0]) + 1)
                                        }) : r
                                    }()
                                }
                            }(W, L, eo, er, Q, ea), ek = function(e, t, n, r, o, i, u, a) {
                                let s = {
                                        passive: !0,
                                        capture: !0
                                    },
                                    f = 0;

                                function d(e) {
                                    "Tab" === e.code && (f = new Date().getTime())
                                }
                                return {
                                    init: function(p) {
                                        a && (i.add(document, "keydown", d, !1), t.forEach((t, d) => {
                                            i.add(t, "focus", t => {
                                                (l(a) || a(p, t)) && function(t) {
                                                    if (new Date().getTime() - f > 10) return;
                                                    u.emit("slideFocusStart"), e.scrollLeft = 0;
                                                    let i = n.findIndex(e => e.includes(t));
                                                    c(i) && (o.useDuration(0), r.index(i, 0), u.emit("slideFocus"))
                                                }(d)
                                            }, s)
                                        }))
                                    }
                                }
                            }(e, n, eS, ex, ev, ew, u, V), eM = {
                                ownerDocument: r,
                                ownerWindow: o,
                                eventHandler: u,
                                containerRect: Z,
                                slideRects: _,
                                animation: ef,
                                axis: B,
                                dragHandler: function(e, t, n, r, o, i, u, c, a, s, p, g, h, m, v, w, E, S, k) {
                                    let {
                                        cross: M,
                                        direction: D
                                    } = e, O = ["INPUT", "SELECT", "TEXTAREA"], P = {
                                        passive: !1
                                    }, j = x(), A = x(), C = b(50, 225).constrain(m.measure(20)), F = {
                                        mouse: 300,
                                        touch: 400
                                    }, R = {
                                        mouse: 500,
                                        touch: 600
                                    }, I = v ? 43 : 25, L = !1, N = 0, T = 0, z = !1, V = !1, H = !1, Z = !1;

                                    function _(e) {
                                        if (!y(e, r) && e.touches.length >= 2) return B(e);
                                        let t = i.readPoint(e),
                                            n = i.readPoint(e, M),
                                            u = f(t - N),
                                            a = f(n - T);
                                        if (!V && !Z && (!e.cancelable || !(V = u > a))) return B(e);
                                        let l = i.pointerMove(e);
                                        u > w && (H = !0), s.useFriction(.3).useDuration(.75), c.start(), o.add(D(l)), e.preventDefault()
                                    }

                                    function B(e) {
                                        let t = p.byDistance(0, !1).index !== g.get(),
                                            n = i.pointerUp(e) * (v ? R : F)[Z ? "mouse" : "touch"],
                                            r = function(e, t) {
                                                let n = g.add(-1 * d(e)),
                                                    r = p.byDistance(e, !v).distance;
                                                return v || f(e) < C ? r : E && t ? .5 * r : p.byIndex(n.get(), 0).distance
                                            }(D(n), t),
                                            o = function(e, t) {
                                                var n, r;
                                                if (0 === e || 0 === t || f(e) <= f(t)) return 0;
                                                let o = (n = f(e), r = f(t), f(n - r));
                                                return f(o / e)
                                            }(n, r);
                                        V = !1, z = !1, A.clear(), s.useDuration(I - 10 * o).useFriction(.68 + o / 50), a.distance(r, !v), Z = !1, h.emit("pointerUp")
                                    }

                                    function U(e) {
                                        H && (e.stopPropagation(), e.preventDefault(), H = !1)
                                    }
                                    return {
                                        init: function(e) {
                                            k && j.add(t, "dragstart", e => e.preventDefault(), P).add(t, "touchmove", () => void 0, P).add(t, "touchend", () => void 0).add(t, "touchstart", c).add(t, "mousedown", c).add(t, "touchcancel", B).add(t, "contextmenu", B).add(t, "click", U, !0);

                                            function c(c) {
                                                (l(k) || k(e, c)) && function(e) {
                                                    let c = y(e, r);
                                                    Z = c, H = v && c && !e.buttons && L, L = f(o.get() - u.get()) >= 2, c && 0 !== e.button || function(e) {
                                                        let t = e.nodeName || "";
                                                        return O.includes(t)
                                                    }(e.target) || (z = !0, i.pointerDown(e), s.useFriction(0).useDuration(0), o.set(u), function() {
                                                        let e = Z ? n : t;
                                                        A.add(e, "touchmove", _, P).add(e, "touchend", B).add(e, "mousemove", _, P).add(e, "mouseup", B)
                                                    }(), N = i.readPoint(e), T = i.readPoint(e, M), h.emit("pointerDown"))
                                                }(c)
                                            }
                                        },
                                        destroy: function() {
                                            j.clear(), A.clear()
                                        },
                                        pointerDown: function() {
                                            return z
                                        }
                                    }
                                }(B, e, r, o, em, function(e, t) {
                                    let n, r;

                                    function o(e) {
                                        return e.timeStamp
                                    }

                                    function i(n, r) {
                                        let o = r || e.scroll,
                                            i = `client${"x"===o?"X":"Y"}`;
                                        return (y(n, t) ? n : n.touches[0])[i]
                                    }
                                    return {
                                        pointerDown: function(e) {
                                            return n = e, r = e, i(e)
                                        },
                                        pointerMove: function(e) {
                                            let t = i(e) - i(r),
                                                u = o(e) - o(n) > 170;
                                            return r = e, u && (n = e), t
                                        },
                                        pointerUp: function(e) {
                                            if (!n || !r) return 0;
                                            let t = i(r) - i(n),
                                                u = o(e) - o(n),
                                                c = o(e) - o(r) > 170,
                                                a = t / u;
                                            return u && !c && f(a) > .1 ? a : 0
                                        },
                                        readPoint: i
                                    }
                                }(B, o), ep, ef, ex, ev, ey, eu, u, $, A, C, I, 0, z),
                                eventStore: ew,
                                percentOfView: $,
                                index: eu,
                                indexPrevious: ec,
                                limit: ei,
                                location: ep,
                                offsetLocation: eh,
                                previousLocation: eg,
                                options: i,
                                resizeHandler: function(e, t, n, r, o, i, u) {
                                    let c, a;
                                    let s = [e].concat(r),
                                        d = [],
                                        p = !1;

                                    function g(e) {
                                        return o.measureSize(u.measure(e))
                                    }
                                    return {
                                        init: function(o) {
                                            i && (a = g(e), d = r.map(g), c = new ResizeObserver(n => {
                                                (l(i) || i(o, n)) && function(n) {
                                                    for (let i of n) {
                                                        if (p) return;
                                                        let n = i.target === e,
                                                            u = r.indexOf(i.target),
                                                            c = n ? a : d[u];
                                                        if (f(g(n ? e : r[u]) - c) >= .5) {
                                                            o.reInit(), t.emit("resize");
                                                            break
                                                        }
                                                    }
                                                }(n)
                                            }), n.requestAnimationFrame(() => {
                                                s.forEach(e => c.observe(e))
                                            }))
                                        },
                                        destroy: function() {
                                            p = !0, c && c.disconnect()
                                        }
                                    }
                                }(t, u, o, n, B, N, H),
                                scrollBody: ev,
                                scrollBounds: function(e, t, n, r, o) {
                                    let i = o.measure(10),
                                        u = o.measure(50),
                                        c = b(.1, .99),
                                        a = !1;

                                    function l() {
                                        return !!(!a && e.reachedAny(n.get()) && e.reachedAny(t.get()))
                                    }
                                    return {
                                        shouldConstrain: l,
                                        constrain: function(o) {
                                            if (!l()) return;
                                            let a = e.reachedMin(t.get()) ? "min" : "max",
                                                s = f(e[a] - t.get()),
                                                d = n.get() - t.get(),
                                                p = c.constrain(s / u);
                                            n.subtract(d * p), !o && f(d) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
                                        },
                                        toggleActive: function(e) {
                                            a = !e
                                        }
                                    }
                                }(ei, eh, em, ev, $),
                                scrollLooper: function(e, t, n, r) {
                                    let {
                                        reachedMin: o,
                                        reachedMax: i
                                    } = b(t.min + .1, t.max + .1);
                                    return {
                                        loop: function(t) {
                                            if (!(1 === t ? i(n.get()) : -1 === t && o(n.get()))) return;
                                            let u = -1 * t * e;
                                            r.forEach(e => e.add(u))
                                        }
                                    }
                                }(et, ei, eh, [ep, eh, eg, em]),
                                scrollProgress: eb,
                                scrollSnapList: eo.map(eb.get),
                                scrollSnaps: eo,
                                scrollTarget: ey,
                                scrollTo: ex,
                                slideLooper: function(e, t, n, r, o, i, u, c, a) {
                                    let l = p(o),
                                        s = g(d(p(o).reverse(), u[0]), n, !1).concat(g(d(l, t - u[0] - 1), -n, !0));

                                    function f(e, t) {
                                        return e.reduce((e, t) => e - o[t], t)
                                    }

                                    function d(e, t) {
                                        return e.reduce((e, n) => f(e, t) > 0 ? e.concat([n]) : e, [])
                                    }

                                    function g(o, u, l) {
                                        let s = i.map((e, n) => ({
                                            start: e - r[n] + .5 + u,
                                            end: e + t - .5 + u
                                        }));
                                        return o.map(t => {
                                            let r = l ? 0 : -n,
                                                o = l ? n : 0,
                                                i = s[t][l ? "end" : "start"];
                                            return {
                                                index: t,
                                                loopPoint: i,
                                                slideLocation: w(-1),
                                                translate: E(e, a[t]),
                                                target: () => c.get() > i ? r : o
                                            }
                                        })
                                    }
                                    return {
                                        canLoop: function() {
                                            return s.every(({
                                                index: e
                                            }) => .1 >= f(l.filter(t => t !== e), t))
                                        },
                                        clear: function() {
                                            s.forEach(e => e.translate.clear())
                                        },
                                        loop: function() {
                                            s.forEach(e => {
                                                let {
                                                    target: t,
                                                    translate: n,
                                                    slideLocation: r
                                                } = e, o = t();
                                                o !== r.get() && (n.to(o), r.set(o))
                                            })
                                        },
                                        loopPoints: s
                                    }
                                }(B, U, et, X, Y, G, eo, eh, n),
                                slideFocus: ek,
                                slidesHandler: (S = !1, {
                                    init: function(e) {
                                        T && (s = new MutationObserver(t => {
                                            !S && (l(T) || T(e, t)) && function(t) {
                                                for (let n of t)
                                                    if ("childList" === n.type) {
                                                        e.reInit(), u.emit("slidesChanged");
                                                        break
                                                    }
                                            }(t)
                                        })).observe(t, {
                                            childList: !0
                                        })
                                    },
                                    destroy: function() {
                                        s && s.disconnect(), S = !0
                                    }
                                }),
                                slidesInView: eE,
                                slideIndexes: ea,
                                slideRegistry: eS,
                                slidesToScroll: Q,
                                target: em,
                                translate: E(B, t)
                            };
                            return eM
                        }(e, i, u, D, O, n, C);
                        return n.loop && !r.slideLooper.canLoop() ? t(Object.assign({}, n, {
                            loop: !1
                        })) : r
                    }(H), I([V, ...Z.map(({
                        options: e
                    }) => e)]).forEach(e => A.add(e, "change", B)), H.active && (r.translate.to(r.location.get()), r.animation.init(), r.slidesInView.init(), r.slideFocus.init(W), r.eventHandler.init(W), r.resizeHandler.init(W), r.slidesHandler.init(W), r.options.loop && r.slideLooper.loop(), i.offsetParent && u.length && r.dragHandler.init(W), o = j.init(W, Z)))
                }

                function B(e, t) {
                    let n = q();
                    U(), _(F({
                        startIndex: n
                    }, e), t), C.emit("reInit")
                }

                function U() {
                    r.dragHandler.destroy(), r.eventStore.clear(), r.translate.clear(), r.slideLooper.clear(), r.resizeHandler.destroy(), r.slidesHandler.destroy(), r.slidesInView.destroy(), r.animation.destroy(), j.destroy(), A.clear()
                }

                function $(e, t, n) {
                    H.active && !z && (r.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : H.duration), r.scrollTo.index(e, n || 0))
                }

                function q() {
                    return r.index.get()
                }
                let W = {
                    canScrollNext: function() {
                        return r.index.add(1).get() !== q()
                    },
                    canScrollPrev: function() {
                        return r.index.add(-1).get() !== q()
                    },
                    containerNode: function() {
                        return i
                    },
                    internalEngine: function() {
                        return r
                    },
                    destroy: function() {
                        z || (z = !0, A.clear(), U(), C.emit("destroy"), C.clear())
                    },
                    off: N,
                    on: L,
                    emit: T,
                    plugins: function() {
                        return o
                    },
                    previousScrollSnap: function() {
                        return r.indexPrevious.get()
                    },
                    reInit: B,
                    rootNode: function() {
                        return e
                    },
                    scrollNext: function(e) {
                        $(r.index.add(1).get(), e, -1)
                    },
                    scrollPrev: function(e) {
                        $(r.index.add(-1).get(), e, 1)
                    },
                    scrollProgress: function() {
                        return r.scrollProgress.get(r.offsetLocation.get())
                    },
                    scrollSnapList: function() {
                        return r.scrollSnapList
                    },
                    scrollTo: $,
                    selectedScrollSnap: q,
                    slideNodes: function() {
                        return u
                    },
                    slidesInView: function() {
                        return r.slidesInView.get()
                    },
                    slidesNotInView: function() {
                        return r.slidesInView.get(!1)
                    }
                };
                return _(t, n), setTimeout(() => C.emit("init"), 0), W
            }

            function M(e = {}, t = []) {
                let n = (0, r.useRef)(e),
                    o = (0, r.useRef)(t),
                    [c, a] = (0, r.useState)(),
                    [l, s] = (0, r.useState)(),
                    f = (0, r.useCallback)(() => {
                        c && c.reInit(n.current, o.current)
                    }, [c]);
                return (0, r.useEffect)(() => {
                    i(n.current, e) || (n.current = e, f())
                }, [e, f]), (0, r.useEffect)(() => {
                    ! function(e, t) {
                        if (e.length !== t.length) return !1;
                        let n = u(e),
                            r = u(t);
                        return n.every((e, t) => i(e, r[t]))
                    }(o.current, t) && (o.current = t, f())
                }, [t, f]), (0, r.useEffect)(() => {
                    if ("undefined" != typeof window && window.document && window.document.createElement && l) {
                        k.globalOptions = M.globalOptions;
                        let e = k(l, n.current, o.current);
                        return a(e), () => e.destroy()
                    }
                    a(void 0)
                }, [l, a]), [s, c]
            }
            k.globalOptions = void 0, M.globalOptions = void 0
        }
    }
]);