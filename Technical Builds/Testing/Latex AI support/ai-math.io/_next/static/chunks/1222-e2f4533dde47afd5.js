(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1222], {
        29161: function(e) {
            e.exports = function({
                client_id: e,
                auto_select: n = !1,
                cancel_on_tap_outside: r = !1,
                context: t = "signin",
                ...o
            }, i) {
                if (!e) throw Error("client_id is required");
                if ("undefined" != typeof window && window.document) {
                    let a = ["signin", "signup", "use"].includes(t) ? t : "signin",
                        l = document.createElement("script");
                    l.src = "https://accounts.google.com/gsi/client", l.async = !0, l.defer = !0, document.head.appendChild(l), window.onload = function() {
                        window.google.accounts.id.initialize({
                            client_id: e,
                            callback: i,
                            auto_select: n,
                            cancel_on_tap_outside: r,
                            context: a,
                            ...o
                        }), window.google.accounts.id.prompt()
                    }
                }
            }
        },
        17867: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return t
                }
            });
            let t = (0, r(30911).Z)("ChevronDown", [
                ["path", {
                    d: "m6 9 6 6 6-6",
                    key: "qrunsl"
                }]
            ])
        },
        78068: function(e, n, r) {
            "use strict";
            r.d(n, {
                VY: function() {
                    return U
                },
                ck: function() {
                    return B
                },
                fC: function() {
                    return Y
                },
                h4: function() {
                    return K
                },
                xz: function() {
                    return L
                }
            });
            var t = r(57420),
                o = r(26059),
                i = r(82534),
                a = r(46965),
                l = r(88864),
                c = r(73812),
                d = r(48769),
                s = r(5465),
                u = r(57486),
                f = r(41890),
                p = r(18243),
                h = "Accordion",
                w = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
                [b, m, v] = (0, i.B)(h),
                [g, x] = (0, o.b)(h, [v, s.p_]),
                y = (0, s.p_)(),
                C = t.forwardRef((e, n) => {
                    let {
                        type: r,
                        ...t
                    } = e;
                    return (0, p.jsx)(b.Provider, {
                        scope: e.__scopeAccordion,
                        children: "multiple" === r ? (0, p.jsx)(N, { ...t,
                            ref: n
                        }) : (0, p.jsx)(A, { ...t,
                            ref: n
                        })
                    })
                });
            C.displayName = h;
            var [j, _] = g(h), [R, k] = g(h, {
                collapsible: !1
            }), A = t.forwardRef((e, n) => {
                let {
                    value: r,
                    defaultValue: o,
                    onValueChange: i = () => {},
                    collapsible: a = !1,
                    ...l
                } = e, [d, s] = (0, c.T)({
                    prop: r,
                    defaultProp: null != o ? o : "",
                    onChange: i,
                    caller: h
                });
                return (0, p.jsx)(j, {
                    scope: e.__scopeAccordion,
                    value: t.useMemo(() => d ? [d] : [], [d]),
                    onItemOpen: s,
                    onItemClose: t.useCallback(() => a && s(""), [a, s]),
                    children: (0, p.jsx)(R, {
                        scope: e.__scopeAccordion,
                        collapsible: a,
                        children: (0, p.jsx)(V, { ...l,
                            ref: n
                        })
                    })
                })
            }), N = t.forwardRef((e, n) => {
                let {
                    value: r,
                    defaultValue: o,
                    onValueChange: i = () => {},
                    ...a
                } = e, [l, d] = (0, c.T)({
                    prop: r,
                    defaultProp: null != o ? o : [],
                    onChange: i,
                    caller: h
                }), s = t.useCallback(e => d(function() {
                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return [...n, e]
                }), [d]), u = t.useCallback(e => d(function() {
                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return n.filter(n => n !== e)
                }), [d]);
                return (0, p.jsx)(j, {
                    scope: e.__scopeAccordion,
                    value: l,
                    onItemOpen: s,
                    onItemClose: u,
                    children: (0, p.jsx)(R, {
                        scope: e.__scopeAccordion,
                        collapsible: !0,
                        children: (0, p.jsx)(V, { ...a,
                            ref: n
                        })
                    })
                })
            }), [I, D] = g(h), V = t.forwardRef((e, n) => {
                let {
                    __scopeAccordion: r,
                    disabled: o,
                    dir: i,
                    orientation: c = "vertical",
                    ...s
                } = e, u = t.useRef(null), h = (0, a.e)(u, n), v = m(r), g = "ltr" === (0, f.gm)(i), x = (0, l.Mj)(e.onKeyDown, e => {
                    var n;
                    if (!w.includes(e.key)) return;
                    let r = e.target,
                        t = v().filter(e => {
                            var n;
                            return !(null === (n = e.ref.current) || void 0 === n ? void 0 : n.disabled)
                        }),
                        o = t.findIndex(e => e.ref.current === r),
                        i = t.length;
                    if (-1 === o) return;
                    e.preventDefault();
                    let a = o,
                        l = i - 1,
                        d = () => {
                            (a = o + 1) > l && (a = 0)
                        },
                        s = () => {
                            (a = o - 1) < 0 && (a = l)
                        };
                    switch (e.key) {
                        case "Home":
                            a = 0;
                            break;
                        case "End":
                            a = l;
                            break;
                        case "ArrowRight":
                            "horizontal" === c && (g ? d() : s());
                            break;
                        case "ArrowDown":
                            "vertical" === c && d();
                            break;
                        case "ArrowLeft":
                            "horizontal" === c && (g ? s() : d());
                            break;
                        case "ArrowUp":
                            "vertical" === c && s()
                    }
                    null === (n = t[a % i].ref.current) || void 0 === n || n.focus()
                });
                return (0, p.jsx)(I, {
                    scope: r,
                    disabled: o,
                    direction: i,
                    orientation: c,
                    children: (0, p.jsx)(b.Slot, {
                        scope: r,
                        children: (0, p.jsx)(d.WV.div, { ...s,
                            "data-orientation": c,
                            ref: h,
                            onKeyDown: o ? void 0 : x
                        })
                    })
                })
            }), z = "AccordionItem", [E, O] = g(z), T = t.forwardRef((e, n) => {
                let {
                    __scopeAccordion: r,
                    value: t,
                    ...o
                } = e, i = D(z, r), a = _(z, r), l = y(r), c = (0, u.M)(), d = t && a.value.includes(t) || !1, f = i.disabled || e.disabled;
                return (0, p.jsx)(E, {
                    scope: r,
                    open: d,
                    disabled: f,
                    triggerId: c,
                    children: (0, p.jsx)(s.fC, {
                        "data-orientation": i.orientation,
                        "data-state": F(d),
                        ...l,
                        ...o,
                        ref: n,
                        disabled: f,
                        open: d,
                        onOpenChange: e => {
                            e ? a.onItemOpen(t) : a.onItemClose(t)
                        }
                    })
                })
            });
            T.displayName = z;
            var W = "AccordionHeader",
                M = t.forwardRef((e, n) => {
                    let {
                        __scopeAccordion: r,
                        ...t
                    } = e, o = D(h, r), i = O(W, r);
                    return (0, p.jsx)(d.WV.h3, {
                        "data-orientation": o.orientation,
                        "data-state": F(i.open),
                        "data-disabled": i.disabled ? "" : void 0,
                        ...t,
                        ref: n
                    })
                });
            M.displayName = W;
            var H = "AccordionTrigger",
                P = t.forwardRef((e, n) => {
                    let {
                        __scopeAccordion: r,
                        ...t
                    } = e, o = D(h, r), i = O(H, r), a = k(H, r), l = y(r);
                    return (0, p.jsx)(b.ItemSlot, {
                        scope: r,
                        children: (0, p.jsx)(s.xz, {
                            "aria-disabled": i.open && !a.collapsible || void 0,
                            "data-orientation": o.orientation,
                            id: i.triggerId,
                            ...l,
                            ...t,
                            ref: n
                        })
                    })
                });
            P.displayName = H;
            var S = "AccordionContent",
                q = t.forwardRef((e, n) => {
                    let {
                        __scopeAccordion: r,
                        ...t
                    } = e, o = D(h, r), i = O(S, r), a = y(r);
                    return (0, p.jsx)(s.VY, {
                        role: "region",
                        "aria-labelledby": i.triggerId,
                        "data-orientation": o.orientation,
                        ...a,
                        ...t,
                        ref: n,
                        style: {
                            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                            ...e.style
                        }
                    })
                });

            function F(e) {
                return e ? "open" : "closed"
            }
            q.displayName = S;
            var Y = C,
                B = T,
                K = M,
                L = P,
                U = q
        },
        5465: function(e, n, r) {
            "use strict";
            r.d(n, {
                Fw: function() {
                    return C
                },
                VY: function() {
                    return A
                },
                fC: function() {
                    return R
                },
                p_: function() {
                    return w
                },
                wy: function() {
                    return x
                },
                xz: function() {
                    return k
                }
            });
            var t = r(57420),
                o = r(88864),
                i = r(26059),
                a = r(73812),
                l = r(92883),
                c = r(46965),
                d = r(48769),
                s = r(61610),
                u = r(57486),
                f = r(18243),
                p = "Collapsible",
                [h, w] = (0, i.b)(p),
                [b, m] = h(p),
                v = t.forwardRef((e, n) => {
                    let {
                        __scopeCollapsible: r,
                        open: o,
                        defaultOpen: i,
                        disabled: l,
                        onOpenChange: c,
                        ...s
                    } = e, [h, w] = (0, a.T)({
                        prop: o,
                        defaultProp: null != i && i,
                        onChange: c,
                        caller: p
                    });
                    return (0, f.jsx)(b, {
                        scope: r,
                        disabled: l,
                        contentId: (0, u.M)(),
                        open: h,
                        onOpenToggle: t.useCallback(() => w(e => !e), [w]),
                        children: (0, f.jsx)(d.WV.div, {
                            "data-state": _(h),
                            "data-disabled": l ? "" : void 0,
                            ...s,
                            ref: n
                        })
                    })
                });
            v.displayName = p;
            var g = "CollapsibleTrigger",
                x = t.forwardRef((e, n) => {
                    let {
                        __scopeCollapsible: r,
                        ...t
                    } = e, i = m(g, r);
                    return (0, f.jsx)(d.WV.button, {
                        type: "button",
                        "aria-controls": i.contentId,
                        "aria-expanded": i.open || !1,
                        "data-state": _(i.open),
                        "data-disabled": i.disabled ? "" : void 0,
                        disabled: i.disabled,
                        ...t,
                        ref: n,
                        onClick: (0, o.Mj)(e.onClick, i.onOpenToggle)
                    })
                });
            x.displayName = g;
            var y = "CollapsibleContent",
                C = t.forwardRef((e, n) => {
                    let {
                        forceMount: r,
                        ...t
                    } = e, o = m(y, e.__scopeCollapsible);
                    return (0, f.jsx)(s.z, {
                        present: r || o.open,
                        children: e => {
                            let {
                                present: r
                            } = e;
                            return (0, f.jsx)(j, { ...t,
                                ref: n,
                                present: r
                            })
                        }
                    })
                });
            C.displayName = y;
            var j = t.forwardRef((e, n) => {
                let {
                    __scopeCollapsible: r,
                    present: o,
                    children: i,
                    ...a
                } = e, s = m(y, r), [u, p] = t.useState(o), h = t.useRef(null), w = (0, c.e)(n, h), b = t.useRef(0), v = b.current, g = t.useRef(0), x = g.current, C = s.open || u, j = t.useRef(C), R = t.useRef(void 0);
                return t.useEffect(() => {
                    let e = requestAnimationFrame(() => j.current = !1);
                    return () => cancelAnimationFrame(e)
                }, []), (0, l.b)(() => {
                    let e = h.current;
                    if (e) {
                        R.current = R.current || {
                            transitionDuration: e.style.transitionDuration,
                            animationName: e.style.animationName
                        }, e.style.transitionDuration = "0s", e.style.animationName = "none";
                        let n = e.getBoundingClientRect();
                        b.current = n.height, g.current = n.width, j.current || (e.style.transitionDuration = R.current.transitionDuration, e.style.animationName = R.current.animationName), p(o)
                    }
                }, [s.open, o]), (0, f.jsx)(d.WV.div, {
                    "data-state": _(s.open),
                    "data-disabled": s.disabled ? "" : void 0,
                    id: s.contentId,
                    hidden: !C,
                    ...a,
                    ref: w,
                    style: {
                        "--radix-collapsible-content-height": v ? "".concat(v, "px") : void 0,
                        "--radix-collapsible-content-width": x ? "".concat(x, "px") : void 0,
                        ...e.style
                    },
                    children: C && i
                })
            });

            function _(e) {
                return e ? "open" : "closed"
            }
            var R = v,
                k = x,
                A = C
        },
        6646: function(e, n, r) {
            "use strict";
            r.d(n, {
                C2: function() {
                    return a
                },
                fC: function() {
                    return c
                }
            });
            var t = r(57420),
                o = r(48769),
                i = r(18243),
                a = Object.freeze({
                    position: "absolute",
                    border: 0,
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    wordWrap: "normal"
                }),
                l = t.forwardRef((e, n) => (0, i.jsx)(o.WV.span, { ...e,
                    ref: n,
                    style: { ...a,
                        ...e.style
                    }
                }));
            l.displayName = "VisuallyHidden";
            var c = l
        }
    }
]);