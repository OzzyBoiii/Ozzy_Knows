"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [362], {
        72424: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return r
                }
            });
            let r = (0, t(30911).Z)("X", [
                ["path", {
                    d: "M18 6 6 18",
                    key: "1bl5f8"
                }],
                ["path", {
                    d: "m6 6 12 12",
                    key: "d8bk6v"
                }]
            ])
        },
        93938: function(e, n, t) {
            t.d(n, {
                Dx: function() {
                    return er
                },
                VY: function() {
                    return et
                },
                aV: function() {
                    return en
                },
                dk: function() {
                    return eo
                },
                fC: function() {
                    return Q
                },
                h_: function() {
                    return ee
                },
                x8: function() {
                    return ei
                },
                xz: function() {
                    return $
                }
            });
            var r = t(57420),
                o = t(88864),
                i = t(46965),
                l = t(26059),
                a = t(57486),
                u = t(73812),
                s = t(18257),
                d = t(16347),
                c = t(10916),
                f = t(61610),
                p = t(48769),
                m = t(5952),
                g = t(78138),
                v = t(32965),
                y = t(65600),
                N = t(18243),
                D = "Dialog",
                [h, O] = (0, l.b)(D),
                [R, b] = h(D),
                j = e => {
                    let {
                        __scopeDialog: n,
                        children: t,
                        open: o,
                        defaultOpen: i,
                        onOpenChange: l,
                        modal: s = !0
                    } = e, d = r.useRef(null), c = r.useRef(null), [f, p] = (0, u.T)({
                        prop: o,
                        defaultProp: null != i && i,
                        onChange: l,
                        caller: D
                    });
                    return (0, N.jsx)(R, {
                        scope: n,
                        triggerRef: d,
                        contentRef: c,
                        contentId: (0, a.M)(),
                        titleId: (0, a.M)(),
                        descriptionId: (0, a.M)(),
                        open: f,
                        onOpenChange: p,
                        onOpenToggle: r.useCallback(() => p(e => !e), [p]),
                        modal: s,
                        children: t
                    })
                };
            j.displayName = D;
            var M = "DialogTrigger",
                w = r.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        ...r
                    } = e, l = b(M, t), a = (0, i.e)(n, l.triggerRef);
                    return (0, N.jsx)(p.WV.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": l.open,
                        "aria-controls": l.contentId,
                        "data-state": q(l.open),
                        ...r,
                        ref: a,
                        onClick: (0, o.Mj)(e.onClick, l.onOpenToggle)
                    })
                });
            w.displayName = M;
            var x = "DialogPortal",
                [I, C] = h(x, {
                    forceMount: void 0
                }),
                E = e => {
                    let {
                        __scopeDialog: n,
                        forceMount: t,
                        children: o,
                        container: i
                    } = e, l = b(x, n);
                    return (0, N.jsx)(I, {
                        scope: n,
                        forceMount: t,
                        children: r.Children.map(o, e => (0, N.jsx)(f.z, {
                            present: t || l.open,
                            children: (0, N.jsx)(c.h, {
                                asChild: !0,
                                container: i,
                                children: e
                            })
                        }))
                    })
                };
            E.displayName = x;
            var _ = "DialogOverlay",
                T = r.forwardRef((e, n) => {
                    let t = C(_, e.__scopeDialog),
                        {
                            forceMount: r = t.forceMount,
                            ...o
                        } = e,
                        i = b(_, e.__scopeDialog);
                    return i.modal ? (0, N.jsx)(f.z, {
                        present: r || i.open,
                        children: (0, N.jsx)(F, { ...o,
                            ref: n
                        })
                    }) : null
                });
            T.displayName = _;
            var A = (0, y.Z8)("DialogOverlay.RemoveScroll"),
                F = r.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        ...r
                    } = e, o = b(_, t);
                    return (0, N.jsx)(g.Z, {
                        as: A,
                        allowPinchZoom: !0,
                        shards: [o.contentRef],
                        children: (0, N.jsx)(p.WV.div, {
                            "data-state": q(o.open),
                            ...r,
                            ref: n,
                            style: {
                                pointerEvents: "auto",
                                ...r.style
                            }
                        })
                    })
                }),
                k = "DialogContent",
                P = r.forwardRef((e, n) => {
                    let t = C(k, e.__scopeDialog),
                        {
                            forceMount: r = t.forceMount,
                            ...o
                        } = e,
                        i = b(k, e.__scopeDialog);
                    return (0, N.jsx)(f.z, {
                        present: r || i.open,
                        children: i.modal ? (0, N.jsx)(W, { ...o,
                            ref: n
                        }) : (0, N.jsx)(U, { ...o,
                            ref: n
                        })
                    })
                });
            P.displayName = k;
            var W = r.forwardRef((e, n) => {
                    let t = b(k, e.__scopeDialog),
                        l = r.useRef(null),
                        a = (0, i.e)(n, t.contentRef, l);
                    return r.useEffect(() => {
                        let e = l.current;
                        if (e) return (0, v.Ry)(e)
                    }, []), (0, N.jsx)(S, { ...e,
                        ref: a,
                        trapFocus: t.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, o.Mj)(e.onCloseAutoFocus, e => {
                            var n;
                            e.preventDefault(), null === (n = t.triggerRef.current) || void 0 === n || n.focus()
                        }),
                        onPointerDownOutside: (0, o.Mj)(e.onPointerDownOutside, e => {
                            let n = e.detail.originalEvent,
                                t = 0 === n.button && !0 === n.ctrlKey;
                            (2 === n.button || t) && e.preventDefault()
                        }),
                        onFocusOutside: (0, o.Mj)(e.onFocusOutside, e => e.preventDefault())
                    })
                }),
                U = r.forwardRef((e, n) => {
                    let t = b(k, e.__scopeDialog),
                        o = r.useRef(!1),
                        i = r.useRef(!1);
                    return (0, N.jsx)(S, { ...e,
                        ref: n,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: n => {
                            var r, l;
                            null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, n), n.defaultPrevented || (o.current || null === (l = t.triggerRef.current) || void 0 === l || l.focus(), n.preventDefault()), o.current = !1, i.current = !1
                        },
                        onInteractOutside: n => {
                            var r, l;
                            null === (r = e.onInteractOutside) || void 0 === r || r.call(e, n), n.defaultPrevented || (o.current = !0, "pointerdown" !== n.detail.originalEvent.type || (i.current = !0));
                            let a = n.target;
                            (null === (l = t.triggerRef.current) || void 0 === l ? void 0 : l.contains(a)) && n.preventDefault(), "focusin" === n.detail.originalEvent.type && i.current && n.preventDefault()
                        }
                    })
                }),
                S = r.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        trapFocus: o,
                        onOpenAutoFocus: l,
                        onCloseAutoFocus: a,
                        ...u
                    } = e, c = b(k, t), f = r.useRef(null), p = (0, i.e)(n, f);
                    return (0, m.EW)(), (0, N.jsxs)(N.Fragment, {
                        children: [(0, N.jsx)(d.M, {
                            asChild: !0,
                            loop: !0,
                            trapped: o,
                            onMountAutoFocus: l,
                            onUnmountAutoFocus: a,
                            children: (0, N.jsx)(s.XB, {
                                role: "dialog",
                                id: c.contentId,
                                "aria-describedby": c.descriptionId,
                                "aria-labelledby": c.titleId,
                                "data-state": q(c.open),
                                ...u,
                                ref: p,
                                onDismiss: () => c.onOpenChange(!1)
                            })
                        }), (0, N.jsxs)(N.Fragment, {
                            children: [(0, N.jsx)(G, {
                                titleId: c.titleId
                            }), (0, N.jsx)(J, {
                                contentRef: f,
                                descriptionId: c.descriptionId
                            })]
                        })]
                    })
                }),
                V = "DialogTitle",
                L = r.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        ...r
                    } = e, o = b(V, t);
                    return (0, N.jsx)(p.WV.h2, {
                        id: o.titleId,
                        ...r,
                        ref: n
                    })
                });
            L.displayName = V;
            var z = "DialogDescription",
                Z = r.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        ...r
                    } = e, o = b(z, t);
                    return (0, N.jsx)(p.WV.p, {
                        id: o.descriptionId,
                        ...r,
                        ref: n
                    })
                });
            Z.displayName = z;
            var B = "DialogClose",
                X = r.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        ...r
                    } = e, i = b(B, t);
                    return (0, N.jsx)(p.WV.button, {
                        type: "button",
                        ...r,
                        ref: n,
                        onClick: (0, o.Mj)(e.onClick, () => i.onOpenChange(!1))
                    })
                });

            function q(e) {
                return e ? "open" : "closed"
            }
            X.displayName = B;
            var H = "DialogTitleWarning",
                [K, Y] = (0, l.k)(H, {
                    contentName: k,
                    titleName: V,
                    docsSlug: "dialog"
                }),
                G = e => {
                    let {
                        titleId: n
                    } = e, t = Y(H), o = "`".concat(t.contentName, "` requires a `").concat(t.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(t.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(t.docsSlug);
                    return r.useEffect(() => {
                        n && !document.getElementById(n) && console.error(o)
                    }, [o, n]), null
                },
                J = e => {
                    let {
                        contentRef: n,
                        descriptionId: t
                    } = e, o = Y("DialogDescriptionWarning"), i = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName, "}.");
                    return r.useEffect(() => {
                        var e;
                        let r = null === (e = n.current) || void 0 === e ? void 0 : e.getAttribute("aria-describedby");
                        t && r && !document.getElementById(t) && console.warn(i)
                    }, [i, n, t]), null
                },
                Q = j,
                $ = w,
                ee = E,
                en = T,
                et = P,
                er = L,
                eo = Z,
                ei = X
        },
        61610: function(e, n, t) {
            t.d(n, {
                z: function() {
                    return l
                }
            });
            var r = t(57420),
                o = t(46965),
                i = t(92883),
                l = e => {
                    var n, t;
                    let l, u;
                    let {
                        present: s,
                        children: d
                    } = e, c = function(e) {
                        var n, t;
                        let [o, l] = r.useState(), u = r.useRef(null), s = r.useRef(e), d = r.useRef("none"), [c, f] = (n = e ? "mounted" : "unmounted", t = {
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
                        }, r.useReducer((e, n) => {
                            let r = t[e][n];
                            return null != r ? r : e
                        }, n));
                        return r.useEffect(() => {
                            let e = a(u.current);
                            d.current = "mounted" === c ? e : "none"
                        }, [c]), (0, i.b)(() => {
                            let n = u.current,
                                t = s.current;
                            if (t !== e) {
                                let r = d.current,
                                    o = a(n);
                                e ? f("MOUNT") : "none" === o || (null == n ? void 0 : n.display) === "none" ? f("UNMOUNT") : t && r !== o ? f("ANIMATION_OUT") : f("UNMOUNT"), s.current = e
                            }
                        }, [e, f]), (0, i.b)(() => {
                            if (o) {
                                var e;
                                let n;
                                let t = null !== (e = o.ownerDocument.defaultView) && void 0 !== e ? e : window,
                                    r = e => {
                                        let r = a(u.current).includes(CSS.escape(e.animationName));
                                        if (e.target === o && r && (f("ANIMATION_END"), !s.current)) {
                                            let e = o.style.animationFillMode;
                                            o.style.animationFillMode = "forwards", n = t.setTimeout(() => {
                                                "forwards" === o.style.animationFillMode && (o.style.animationFillMode = e)
                                            })
                                        }
                                    },
                                    i = e => {
                                        e.target === o && (d.current = a(u.current))
                                    };
                                return o.addEventListener("animationstart", i), o.addEventListener("animationcancel", r), o.addEventListener("animationend", r), () => {
                                    t.clearTimeout(n), o.removeEventListener("animationstart", i), o.removeEventListener("animationcancel", r), o.removeEventListener("animationend", r)
                                }
                            }
                            f("ANIMATION_END")
                        }, [o, f]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(c),
                            ref: r.useCallback(e => {
                                u.current = e ? getComputedStyle(e) : null, l(e)
                            }, [])
                        }
                    }(s), f = "function" == typeof d ? d({
                        present: c.isPresent
                    }) : r.Children.only(d), p = (0, o.e)(c.ref, (l = null === (n = Object.getOwnPropertyDescriptor(f.props, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in l && l.isReactWarning ? f.ref : (l = null === (t = Object.getOwnPropertyDescriptor(f, "ref")) || void 0 === t ? void 0 : t.get) && "isReactWarning" in l && l.isReactWarning ? f.props.ref : f.props.ref || f.ref);
                    return "function" == typeof d || c.isPresent ? r.cloneElement(f, {
                        ref: p
                    }) : null
                };

            function a(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            l.displayName = "Presence"
        }
    }
]);