"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8144], {
        68144: function(e, t, n) {
            n.d(t, {
                VY: function() {
                    return G
                },
                fC: function() {
                    return S
                },
                h_: function() {
                    return q
                },
                xz: function() {
                    return W
                },
                zt: function() {
                    return X
                }
            });
            var r = n(57420),
                o = n(88864),
                i = n(46965),
                l = n(26059),
                a = n(18257),
                u = n(57486),
                s = n(3677),
                c = n(10916),
                p = n(61610),
                d = n(48769),
                f = n(65600),
                h = n(73812),
                x = n(6646),
                v = n(18243),
                [g, y] = (0, l.b)("Tooltip", [s.D7]),
                b = (0, s.D7)(),
                w = "TooltipProvider",
                m = "tooltip.open",
                [C, T] = g(w),
                E = e => {
                    let {
                        __scopeTooltip: t,
                        delayDuration: n = 700,
                        skipDelayDuration: o = 300,
                        disableHoverableContent: i = !1,
                        children: l
                    } = e, a = r.useRef(!0), u = r.useRef(!1), s = r.useRef(0);
                    return r.useEffect(() => {
                        let e = s.current;
                        return () => window.clearTimeout(e)
                    }, []), (0, v.jsx)(C, {
                        scope: t,
                        isOpenDelayedRef: a,
                        delayDuration: n,
                        onOpen: r.useCallback(() => {
                            window.clearTimeout(s.current), a.current = !1
                        }, []),
                        onClose: r.useCallback(() => {
                            window.clearTimeout(s.current), s.current = window.setTimeout(() => a.current = !0, o)
                        }, [o]),
                        isPointerInTransitRef: u,
                        onPointerInTransitChange: r.useCallback(e => {
                            u.current = e
                        }, []),
                        disableHoverableContent: i,
                        children: l
                    })
                };
            E.displayName = w;
            var j = "Tooltip",
                [k, R] = g(j),
                M = e => {
                    let {
                        __scopeTooltip: t,
                        children: n,
                        open: o,
                        defaultOpen: i,
                        onOpenChange: l,
                        disableHoverableContent: a,
                        delayDuration: c
                    } = e, p = T(j, e.__scopeTooltip), d = b(t), [f, x] = r.useState(null), g = (0, u.M)(), y = r.useRef(0), w = null != a ? a : p.disableHoverableContent, C = null != c ? c : p.delayDuration, E = r.useRef(!1), [R, M] = (0, h.T)({
                        prop: o,
                        defaultProp: null != i && i,
                        onChange: e => {
                            e ? (p.onOpen(), document.dispatchEvent(new CustomEvent(m))) : p.onClose(), null == l || l(e)
                        },
                        caller: j
                    }), L = r.useMemo(() => R ? E.current ? "delayed-open" : "instant-open" : "closed", [R]), _ = r.useCallback(() => {
                        window.clearTimeout(y.current), y.current = 0, E.current = !1, M(!0)
                    }, [M]), P = r.useCallback(() => {
                        window.clearTimeout(y.current), y.current = 0, M(!1)
                    }, [M]), D = r.useCallback(() => {
                        window.clearTimeout(y.current), y.current = window.setTimeout(() => {
                            E.current = !0, M(!0), y.current = 0
                        }, C)
                    }, [C, M]);
                    return r.useEffect(() => () => {
                        y.current && (window.clearTimeout(y.current), y.current = 0)
                    }, []), (0, v.jsx)(s.fC, { ...d,
                        children: (0, v.jsx)(k, {
                            scope: t,
                            contentId: g,
                            open: R,
                            stateAttribute: L,
                            trigger: f,
                            onTriggerChange: x,
                            onTriggerEnter: r.useCallback(() => {
                                p.isOpenDelayedRef.current ? D() : _()
                            }, [p.isOpenDelayedRef, D, _]),
                            onTriggerLeave: r.useCallback(() => {
                                w ? P() : (window.clearTimeout(y.current), y.current = 0)
                            }, [P, w]),
                            onOpen: _,
                            onClose: P,
                            disableHoverableContent: w,
                            children: n
                        })
                    })
                };
            M.displayName = j;
            var L = "TooltipTrigger",
                _ = r.forwardRef((e, t) => {
                    let {
                        __scopeTooltip: n,
                        ...l
                    } = e, a = R(L, n), u = T(L, n), c = b(n), p = r.useRef(null), f = (0, i.e)(t, p, a.onTriggerChange), h = r.useRef(!1), x = r.useRef(!1), g = r.useCallback(() => h.current = !1, []);
                    return r.useEffect(() => () => document.removeEventListener("pointerup", g), [g]), (0, v.jsx)(s.ee, {
                        asChild: !0,
                        ...c,
                        children: (0, v.jsx)(d.WV.button, {
                            "aria-describedby": a.open ? a.contentId : void 0,
                            "data-state": a.stateAttribute,
                            ...l,
                            ref: f,
                            onPointerMove: (0, o.Mj)(e.onPointerMove, e => {
                                "touch" === e.pointerType || x.current || u.isPointerInTransitRef.current || (a.onTriggerEnter(), x.current = !0)
                            }),
                            onPointerLeave: (0, o.Mj)(e.onPointerLeave, () => {
                                a.onTriggerLeave(), x.current = !1
                            }),
                            onPointerDown: (0, o.Mj)(e.onPointerDown, () => {
                                a.open && a.onClose(), h.current = !0, document.addEventListener("pointerup", g, {
                                    once: !0
                                })
                            }),
                            onFocus: (0, o.Mj)(e.onFocus, () => {
                                h.current || a.onOpen()
                            }),
                            onBlur: (0, o.Mj)(e.onBlur, a.onClose),
                            onClick: (0, o.Mj)(e.onClick, a.onClose)
                        })
                    })
                });
            _.displayName = L;
            var P = "TooltipPortal",
                [D, N] = g(P, {
                    forceMount: void 0
                }),
                O = e => {
                    let {
                        __scopeTooltip: t,
                        forceMount: n,
                        children: r,
                        container: o
                    } = e, i = R(P, t);
                    return (0, v.jsx)(D, {
                        scope: t,
                        forceMount: n,
                        children: (0, v.jsx)(p.z, {
                            present: n || i.open,
                            children: (0, v.jsx)(c.h, {
                                asChild: !0,
                                container: o,
                                children: r
                            })
                        })
                    })
                };
            O.displayName = P;
            var I = "TooltipContent",
                B = r.forwardRef((e, t) => {
                    let n = N(I, e.__scopeTooltip),
                        {
                            forceMount: r = n.forceMount,
                            side: o = "top",
                            ...i
                        } = e,
                        l = R(I, e.__scopeTooltip);
                    return (0, v.jsx)(p.z, {
                        present: r || l.open,
                        children: l.disableHoverableContent ? (0, v.jsx)(H, {
                            side: o,
                            ...i,
                            ref: t
                        }) : (0, v.jsx)(z, {
                            side: o,
                            ...i,
                            ref: t
                        })
                    })
                }),
                z = r.forwardRef((e, t) => {
                    let n = R(I, e.__scopeTooltip),
                        o = T(I, e.__scopeTooltip),
                        l = r.useRef(null),
                        a = (0, i.e)(t, l),
                        [u, s] = r.useState(null),
                        {
                            trigger: c,
                            onClose: p
                        } = n,
                        d = l.current,
                        {
                            onPointerInTransitChange: f
                        } = o,
                        h = r.useCallback(() => {
                            s(null), f(!1)
                        }, [f]),
                        x = r.useCallback((e, t) => {
                            let n = e.currentTarget,
                                r = {
                                    x: e.clientX,
                                    y: e.clientY
                                },
                                o = function(e, t) {
                                    let n = Math.abs(t.top - e.y),
                                        r = Math.abs(t.bottom - e.y),
                                        o = Math.abs(t.right - e.x),
                                        i = Math.abs(t.left - e.x);
                                    switch (Math.min(n, r, o, i)) {
                                        case i:
                                            return "left";
                                        case o:
                                            return "right";
                                        case n:
                                            return "top";
                                        case r:
                                            return "bottom";
                                        default:
                                            throw Error("unreachable")
                                    }
                                }(r, n.getBoundingClientRect());
                            s(function(e) {
                                let t = e.slice();
                                return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0),
                                    function(e) {
                                        if (e.length <= 1) return e.slice();
                                        let t = [];
                                        for (let n = 0; n < e.length; n++) {
                                            let r = e[n];
                                            for (; t.length >= 2;) {
                                                let e = t[t.length - 1],
                                                    n = t[t.length - 2];
                                                if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
                                                else break
                                            }
                                            t.push(r)
                                        }
                                        t.pop();
                                        let n = [];
                                        for (let t = e.length - 1; t >= 0; t--) {
                                            let r = e[t];
                                            for (; n.length >= 2;) {
                                                let e = n[n.length - 1],
                                                    t = n[n.length - 2];
                                                if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
                                                else break
                                            }
                                            n.push(r)
                                        }
                                        return (n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y) ? t : t.concat(n)
                                    }(t)
                            }([... function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                                    r = [];
                                switch (t) {
                                    case "top":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y + n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "bottom":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y - n
                                        });
                                        break;
                                    case "left":
                                        r.push({
                                            x: e.x + n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "right":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x - n,
                                            y: e.y + n
                                        })
                                }
                                return r
                            }(r, o), ... function(e) {
                                let {
                                    top: t,
                                    right: n,
                                    bottom: r,
                                    left: o
                                } = e;
                                return [{
                                    x: o,
                                    y: t
                                }, {
                                    x: n,
                                    y: t
                                }, {
                                    x: n,
                                    y: r
                                }, {
                                    x: o,
                                    y: r
                                }]
                            }(t.getBoundingClientRect())])), f(!0)
                        }, [f]);
                    return r.useEffect(() => () => h(), [h]), r.useEffect(() => {
                        if (c && d) {
                            let e = e => x(e, d),
                                t = e => x(e, c);
                            return c.addEventListener("pointerleave", e), d.addEventListener("pointerleave", t), () => {
                                c.removeEventListener("pointerleave", e), d.removeEventListener("pointerleave", t)
                            }
                        }
                    }, [c, d, x, h]), r.useEffect(() => {
                        if (u) {
                            let e = e => {
                                let t = e.target,
                                    n = {
                                        x: e.clientX,
                                        y: e.clientY
                                    },
                                    r = (null == c ? void 0 : c.contains(t)) || (null == d ? void 0 : d.contains(t)),
                                    o = ! function(e, t) {
                                        let {
                                            x: n,
                                            y: r
                                        } = e, o = !1;
                                        for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                                            let l = t[e],
                                                a = t[i],
                                                u = l.x,
                                                s = l.y,
                                                c = a.x,
                                                p = a.y;
                                            s > r != p > r && n < (c - u) * (r - s) / (p - s) + u && (o = !o)
                                        }
                                        return o
                                    }(n, u);
                                r ? h() : o && (h(), p())
                            };
                            return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
                        }
                    }, [c, d, u, p, h]), (0, v.jsx)(H, { ...e,
                        ref: a
                    })
                }),
                [A, Y] = g(j, {
                    isInside: !1
                }),
                F = (0, f.sA)("TooltipContent"),
                H = r.forwardRef((e, t) => {
                    let {
                        __scopeTooltip: n,
                        children: o,
                        "aria-label": i,
                        onEscapeKeyDown: l,
                        onPointerDownOutside: u,
                        ...c
                    } = e, p = R(I, n), d = b(n), {
                        onClose: f
                    } = p;
                    return r.useEffect(() => (document.addEventListener(m, f), () => document.removeEventListener(m, f)), [f]), r.useEffect(() => {
                        if (p.trigger) {
                            let e = e => {
                                let t = e.target;
                                (null == t ? void 0 : t.contains(p.trigger)) && f()
                            };
                            return window.addEventListener("scroll", e, {
                                capture: !0
                            }), () => window.removeEventListener("scroll", e, {
                                capture: !0
                            })
                        }
                    }, [p.trigger, f]), (0, v.jsx)(a.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: !1,
                        onEscapeKeyDown: l,
                        onPointerDownOutside: u,
                        onFocusOutside: e => e.preventDefault(),
                        onDismiss: f,
                        children: (0, v.jsxs)(s.VY, {
                            "data-state": p.stateAttribute,
                            ...d,
                            ...c,
                            ref: t,
                            style: { ...c.style,
                                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                            },
                            children: [(0, v.jsx)(F, {
                                children: o
                            }), (0, v.jsx)(A, {
                                scope: n,
                                isInside: !0,
                                children: (0, v.jsx)(x.fC, {
                                    id: p.contentId,
                                    role: "tooltip",
                                    children: i || o
                                })
                            })]
                        })
                    })
                });
            B.displayName = I;
            var V = "TooltipArrow";
            r.forwardRef((e, t) => {
                let {
                    __scopeTooltip: n,
                    ...r
                } = e, o = b(n);
                return Y(V, n).isInside ? null : (0, v.jsx)(s.Eh, { ...o,
                    ...r,
                    ref: t
                })
            }).displayName = V;
            var X = E,
                S = M,
                W = _,
                q = O,
                G = B
        }
    }
]);