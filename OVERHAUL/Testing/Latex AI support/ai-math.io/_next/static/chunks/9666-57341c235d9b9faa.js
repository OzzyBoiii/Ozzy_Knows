"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9666], {
        73908: function(e, r, n) {
            n.d(r, {
                Z: function() {
                    return t
                }
            });
            let t = (0, n(30911).Z)("ChevronRight", [
                ["path", {
                    d: "m9 18 6-6-6-6",
                    key: "mthhwq"
                }]
            ])
        },
        37138: function(e, r, n) {
            n.d(r, {
                Z: function() {
                    return t
                }
            });
            let t = (0, n(30911).Z)("Circle", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }]
            ])
        },
        51496: function(e, r, n) {
            n.d(r, {
                oC: function() {
                    return e9
                },
                VY: function() {
                    return e8
                },
                ZA: function() {
                    return e3
                },
                ck: function() {
                    return e7
                },
                wU: function() {
                    return re
                },
                __: function() {
                    return e2
                },
                Uv: function() {
                    return e6
                },
                Ee: function() {
                    return e4
                },
                Rk: function() {
                    return e5
                },
                fC: function() {
                    return e0
                },
                Z0: function() {
                    return rr
                },
                Tr: function() {
                    return rn
                },
                tu: function() {
                    return ro
                },
                fF: function() {
                    return rt
                },
                xz: function() {
                    return e1
                }
            });
            var t = n(57420),
                o = n(88864),
                a = n(46965),
                u = n(26059),
                l = n(73812),
                i = n(48769),
                c = n(82534),
                d = n(41890),
                s = n(18257),
                f = n(5952),
                p = n(16347),
                v = n(57486),
                h = n(3677),
                g = n(10916),
                m = n(61610),
                w = n(22789),
                x = n(65600),
                M = n(30113),
                y = n(32965),
                j = n(78138),
                b = n(18243),
                C = ["Enter", " "],
                R = ["ArrowUp", "PageDown", "End"],
                D = ["ArrowDown", "PageUp", "Home", ...R],
                k = {
                    ltr: [...C, "ArrowRight"],
                    rtl: [...C, "ArrowLeft"]
                },
                _ = {
                    ltr: ["ArrowLeft"],
                    rtl: ["ArrowRight"]
                },
                I = "Menu",
                [P, E, T] = (0, c.B)(I),
                [S, F] = (0, u.b)(I, [T, h.D7, w.Pc]),
                N = (0, h.D7)(),
                A = (0, w.Pc)(),
                [O, L] = S(I),
                [K, V] = S(I),
                G = e => {
                    let {
                        __scopeMenu: r,
                        open: n = !1,
                        children: o,
                        dir: a,
                        onOpenChange: u,
                        modal: l = !0
                    } = e, i = N(r), [c, s] = t.useState(null), f = t.useRef(!1), p = (0, M.W)(u), v = (0, d.gm)(a);
                    return t.useEffect(() => {
                        let e = () => {
                                f.current = !0, document.addEventListener("pointerdown", r, {
                                    capture: !0,
                                    once: !0
                                }), document.addEventListener("pointermove", r, {
                                    capture: !0,
                                    once: !0
                                })
                            },
                            r = () => f.current = !1;
                        return document.addEventListener("keydown", e, {
                            capture: !0
                        }), () => {
                            document.removeEventListener("keydown", e, {
                                capture: !0
                            }), document.removeEventListener("pointerdown", r, {
                                capture: !0
                            }), document.removeEventListener("pointermove", r, {
                                capture: !0
                            })
                        }
                    }, []), (0, b.jsx)(h.fC, { ...i,
                        children: (0, b.jsx)(O, {
                            scope: r,
                            open: n,
                            onOpenChange: p,
                            content: c,
                            onContentChange: s,
                            children: (0, b.jsx)(K, {
                                scope: r,
                                onClose: t.useCallback(() => p(!1), [p]),
                                isUsingKeyboardRef: f,
                                dir: v,
                                modal: l,
                                children: o
                            })
                        })
                    })
                };
            G.displayName = I;
            var W = t.forwardRef((e, r) => {
                let {
                    __scopeMenu: n,
                    ...t
                } = e, o = N(n);
                return (0, b.jsx)(h.ee, { ...o,
                    ...t,
                    ref: r
                })
            });
            W.displayName = "MenuAnchor";
            var U = "MenuPortal",
                [B, Z] = S(U, {
                    forceMount: void 0
                }),
                z = e => {
                    let {
                        __scopeMenu: r,
                        forceMount: n,
                        children: t,
                        container: o
                    } = e, a = L(U, r);
                    return (0, b.jsx)(B, {
                        scope: r,
                        forceMount: n,
                        children: (0, b.jsx)(m.z, {
                            present: n || a.open,
                            children: (0, b.jsx)(g.h, {
                                asChild: !0,
                                container: o,
                                children: t
                            })
                        })
                    })
                };
            z.displayName = U;
            var X = "MenuContent",
                [Y, H] = S(X),
                q = t.forwardRef((e, r) => {
                    let n = Z(X, e.__scopeMenu),
                        {
                            forceMount: t = n.forceMount,
                            ...o
                        } = e,
                        a = L(X, e.__scopeMenu),
                        u = V(X, e.__scopeMenu);
                    return (0, b.jsx)(P.Provider, {
                        scope: e.__scopeMenu,
                        children: (0, b.jsx)(m.z, {
                            present: t || a.open,
                            children: (0, b.jsx)(P.Slot, {
                                scope: e.__scopeMenu,
                                children: u.modal ? (0, b.jsx)(J, { ...o,
                                    ref: r
                                }) : (0, b.jsx)(Q, { ...o,
                                    ref: r
                                })
                            })
                        })
                    })
                }),
                J = t.forwardRef((e, r) => {
                    let n = L(X, e.__scopeMenu),
                        u = t.useRef(null),
                        l = (0, a.e)(r, u);
                    return t.useEffect(() => {
                        let e = u.current;
                        if (e) return (0, y.Ry)(e)
                    }, []), (0, b.jsx)(ee, { ...e,
                        ref: l,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: n.open,
                        disableOutsideScroll: !0,
                        onFocusOutside: (0, o.Mj)(e.onFocusOutside, e => e.preventDefault(), {
                            checkForDefaultPrevented: !1
                        }),
                        onDismiss: () => n.onOpenChange(!1)
                    })
                }),
                Q = t.forwardRef((e, r) => {
                    let n = L(X, e.__scopeMenu);
                    return (0, b.jsx)(ee, { ...e,
                        ref: r,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        onDismiss: () => n.onOpenChange(!1)
                    })
                }),
                $ = (0, x.Z8)("MenuContent.ScrollLock"),
                ee = t.forwardRef((e, r) => {
                    let {
                        __scopeMenu: n,
                        loop: u = !1,
                        trapFocus: l,
                        onOpenAutoFocus: i,
                        onCloseAutoFocus: c,
                        disableOutsidePointerEvents: d,
                        onEntryFocus: v,
                        onEscapeKeyDown: g,
                        onPointerDownOutside: m,
                        onFocusOutside: x,
                        onInteractOutside: M,
                        onDismiss: y,
                        disableOutsideScroll: C,
                        ...k
                    } = e, _ = L(X, n), I = V(X, n), P = N(n), T = A(n), S = E(n), [F, O] = t.useState(null), K = t.useRef(null), G = (0, a.e)(r, K, _.onContentChange), W = t.useRef(0), U = t.useRef(""), B = t.useRef(0), Z = t.useRef(null), z = t.useRef("right"), H = t.useRef(0), q = C ? j.Z : t.Fragment, J = e => {
                        var r, n;
                        let t = U.current + e,
                            o = S().filter(e => !e.disabled),
                            a = document.activeElement,
                            u = null === (r = o.find(e => e.ref.current === a)) || void 0 === r ? void 0 : r.textValue,
                            l = function(e, r, n) {
                                var t;
                                let o = r.length > 1 && Array.from(r).every(e => e === r[0]) ? r[0] : r,
                                    a = (t = Math.max(n ? e.indexOf(n) : -1, 0), e.map((r, n) => e[(t + n) % e.length]));
                                1 === o.length && (a = a.filter(e => e !== n));
                                let u = a.find(e => e.toLowerCase().startsWith(o.toLowerCase()));
                                return u !== n ? u : void 0
                            }(o.map(e => e.textValue), t, u),
                            i = null === (n = o.find(e => e.textValue === l)) || void 0 === n ? void 0 : n.ref.current;
                        ! function e(r) {
                            U.current = r, window.clearTimeout(W.current), "" !== r && (W.current = window.setTimeout(() => e(""), 1e3))
                        }(t), i && setTimeout(() => i.focus())
                    };
                    t.useEffect(() => () => window.clearTimeout(W.current), []), (0, f.EW)();
                    let Q = t.useCallback(e => {
                        var r, n, t;
                        return z.current === (null === (r = Z.current) || void 0 === r ? void 0 : r.side) && !!(t = null === (n = Z.current) || void 0 === n ? void 0 : n.area) && function(e, r) {
                            let {
                                x: n,
                                y: t
                            } = e, o = !1;
                            for (let e = 0, a = r.length - 1; e < r.length; a = e++) {
                                let u = r[e],
                                    l = r[a],
                                    i = u.x,
                                    c = u.y,
                                    d = l.x,
                                    s = l.y;
                                c > t != s > t && n < (d - i) * (t - c) / (s - c) + i && (o = !o)
                            }
                            return o
                        }({
                            x: e.clientX,
                            y: e.clientY
                        }, t)
                    }, []);
                    return (0, b.jsx)(Y, {
                        scope: n,
                        searchRef: U,
                        onItemEnter: t.useCallback(e => {
                            Q(e) && e.preventDefault()
                        }, [Q]),
                        onItemLeave: t.useCallback(e => {
                            var r;
                            Q(e) || (null === (r = K.current) || void 0 === r || r.focus(), O(null))
                        }, [Q]),
                        onTriggerLeave: t.useCallback(e => {
                            Q(e) && e.preventDefault()
                        }, [Q]),
                        pointerGraceTimerRef: B,
                        onPointerGraceIntentChange: t.useCallback(e => {
                            Z.current = e
                        }, []),
                        children: (0, b.jsx)(q, { ...C ? {
                                as: $,
                                allowPinchZoom: !0
                            } : void 0,
                            children: (0, b.jsx)(p.M, {
                                asChild: !0,
                                trapped: l,
                                onMountAutoFocus: (0, o.Mj)(i, e => {
                                    var r;
                                    e.preventDefault(), null === (r = K.current) || void 0 === r || r.focus({
                                        preventScroll: !0
                                    })
                                }),
                                onUnmountAutoFocus: c,
                                children: (0, b.jsx)(s.XB, {
                                    asChild: !0,
                                    disableOutsidePointerEvents: d,
                                    onEscapeKeyDown: g,
                                    onPointerDownOutside: m,
                                    onFocusOutside: x,
                                    onInteractOutside: M,
                                    onDismiss: y,
                                    children: (0, b.jsx)(w.fC, {
                                        asChild: !0,
                                        ...T,
                                        dir: I.dir,
                                        orientation: "vertical",
                                        loop: u,
                                        currentTabStopId: F,
                                        onCurrentTabStopIdChange: O,
                                        onEntryFocus: (0, o.Mj)(v, e => {
                                            I.isUsingKeyboardRef.current || e.preventDefault()
                                        }),
                                        preventScrollOnEntryFocus: !0,
                                        children: (0, b.jsx)(h.VY, {
                                            role: "menu",
                                            "aria-orientation": "vertical",
                                            "data-state": e_(_.open),
                                            "data-radix-menu-content": "",
                                            dir: I.dir,
                                            ...P,
                                            ...k,
                                            ref: G,
                                            style: {
                                                outline: "none",
                                                ...k.style
                                            },
                                            onKeyDown: (0, o.Mj)(k.onKeyDown, e => {
                                                let r = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                                                    n = e.ctrlKey || e.altKey || e.metaKey,
                                                    t = 1 === e.key.length;
                                                r && ("Tab" === e.key && e.preventDefault(), !n && t && J(e.key));
                                                let o = K.current;
                                                if (e.target !== o || !D.includes(e.key)) return;
                                                e.preventDefault();
                                                let a = S().filter(e => !e.disabled).map(e => e.ref.current);
                                                R.includes(e.key) && a.reverse(),
                                                    function(e) {
                                                        let r = document.activeElement;
                                                        for (let n of e)
                                                            if (n === r || (n.focus(), document.activeElement !== r)) return
                                                    }(a)
                                            }),
                                            onBlur: (0, o.Mj)(e.onBlur, e => {
                                                e.currentTarget.contains(e.target) || (window.clearTimeout(W.current), U.current = "")
                                            }),
                                            onPointerMove: (0, o.Mj)(e.onPointerMove, eE(e => {
                                                let r = e.target,
                                                    n = H.current !== e.clientX;
                                                if (e.currentTarget.contains(r) && n) {
                                                    let r = e.clientX > H.current ? "right" : "left";
                                                    z.current = r, H.current = e.clientX
                                                }
                                            }))
                                        })
                                    })
                                })
                            })
                        })
                    })
                });
            q.displayName = X;
            var er = t.forwardRef((e, r) => {
                let {
                    __scopeMenu: n,
                    ...t
                } = e;
                return (0, b.jsx)(i.WV.div, {
                    role: "group",
                    ...t,
                    ref: r
                })
            });
            er.displayName = "MenuGroup";
            var en = t.forwardRef((e, r) => {
                let {
                    __scopeMenu: n,
                    ...t
                } = e;
                return (0, b.jsx)(i.WV.div, { ...t,
                    ref: r
                })
            });
            en.displayName = "MenuLabel";
            var et = "MenuItem",
                eo = "menu.itemSelect",
                ea = t.forwardRef((e, r) => {
                    let {
                        disabled: n = !1,
                        onSelect: u,
                        ...l
                    } = e, c = t.useRef(null), d = V(et, e.__scopeMenu), s = H(et, e.__scopeMenu), f = (0, a.e)(r, c), p = t.useRef(!1);
                    return (0, b.jsx)(eu, { ...l,
                        ref: f,
                        disabled: n,
                        onClick: (0, o.Mj)(e.onClick, () => {
                            let e = c.current;
                            if (!n && e) {
                                let r = new CustomEvent(eo, {
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                e.addEventListener(eo, e => null == u ? void 0 : u(e), {
                                    once: !0
                                }), (0, i.jH)(e, r), r.defaultPrevented ? p.current = !1 : d.onClose()
                            }
                        }),
                        onPointerDown: r => {
                            var n;
                            null === (n = e.onPointerDown) || void 0 === n || n.call(e, r), p.current = !0
                        },
                        onPointerUp: (0, o.Mj)(e.onPointerUp, e => {
                            var r;
                            p.current || null === (r = e.currentTarget) || void 0 === r || r.click()
                        }),
                        onKeyDown: (0, o.Mj)(e.onKeyDown, e => {
                            let r = "" !== s.searchRef.current;
                            !n && (!r || " " !== e.key) && C.includes(e.key) && (e.currentTarget.click(), e.preventDefault())
                        })
                    })
                });
            ea.displayName = et;
            var eu = t.forwardRef((e, r) => {
                    let {
                        __scopeMenu: n,
                        disabled: u = !1,
                        textValue: l,
                        ...c
                    } = e, d = H(et, n), s = A(n), f = t.useRef(null), p = (0, a.e)(r, f), [v, h] = t.useState(!1), [g, m] = t.useState("");
                    return t.useEffect(() => {
                        let e = f.current;
                        if (e) {
                            var r;
                            m((null !== (r = e.textContent) && void 0 !== r ? r : "").trim())
                        }
                    }, [c.children]), (0, b.jsx)(P.ItemSlot, {
                        scope: n,
                        disabled: u,
                        textValue: null != l ? l : g,
                        children: (0, b.jsx)(w.ck, {
                            asChild: !0,
                            ...s,
                            focusable: !u,
                            children: (0, b.jsx)(i.WV.div, {
                                role: "menuitem",
                                "data-highlighted": v ? "" : void 0,
                                "aria-disabled": u || void 0,
                                "data-disabled": u ? "" : void 0,
                                ...c,
                                ref: p,
                                onPointerMove: (0, o.Mj)(e.onPointerMove, eE(e => {
                                    u ? d.onItemLeave(e) : (d.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({
                                        preventScroll: !0
                                    }))
                                })),
                                onPointerLeave: (0, o.Mj)(e.onPointerLeave, eE(e => d.onItemLeave(e))),
                                onFocus: (0, o.Mj)(e.onFocus, () => h(!0)),
                                onBlur: (0, o.Mj)(e.onBlur, () => h(!1))
                            })
                        })
                    })
                }),
                el = t.forwardRef((e, r) => {
                    let {
                        checked: n = !1,
                        onCheckedChange: t,
                        ...a
                    } = e;
                    return (0, b.jsx)(eh, {
                        scope: e.__scopeMenu,
                        checked: n,
                        children: (0, b.jsx)(ea, {
                            role: "menuitemcheckbox",
                            "aria-checked": eI(n) ? "mixed" : n,
                            ...a,
                            ref: r,
                            "data-state": eP(n),
                            onSelect: (0, o.Mj)(a.onSelect, () => null == t ? void 0 : t(!!eI(n) || !n), {
                                checkForDefaultPrevented: !1
                            })
                        })
                    })
                });
            el.displayName = "MenuCheckboxItem";
            var ei = "MenuRadioGroup",
                [ec, ed] = S(ei, {
                    value: void 0,
                    onValueChange: () => {}
                }),
                es = t.forwardRef((e, r) => {
                    let {
                        value: n,
                        onValueChange: t,
                        ...o
                    } = e, a = (0, M.W)(t);
                    return (0, b.jsx)(ec, {
                        scope: e.__scopeMenu,
                        value: n,
                        onValueChange: a,
                        children: (0, b.jsx)(er, { ...o,
                            ref: r
                        })
                    })
                });
            es.displayName = ei;
            var ef = "MenuRadioItem",
                ep = t.forwardRef((e, r) => {
                    let {
                        value: n,
                        ...t
                    } = e, a = ed(ef, e.__scopeMenu), u = n === a.value;
                    return (0, b.jsx)(eh, {
                        scope: e.__scopeMenu,
                        checked: u,
                        children: (0, b.jsx)(ea, {
                            role: "menuitemradio",
                            "aria-checked": u,
                            ...t,
                            ref: r,
                            "data-state": eP(u),
                            onSelect: (0, o.Mj)(t.onSelect, () => {
                                var e;
                                return null === (e = a.onValueChange) || void 0 === e ? void 0 : e.call(a, n)
                            }, {
                                checkForDefaultPrevented: !1
                            })
                        })
                    })
                });
            ep.displayName = ef;
            var ev = "MenuItemIndicator",
                [eh, eg] = S(ev, {
                    checked: !1
                }),
                em = t.forwardRef((e, r) => {
                    let {
                        __scopeMenu: n,
                        forceMount: t,
                        ...o
                    } = e, a = eg(ev, n);
                    return (0, b.jsx)(m.z, {
                        present: t || eI(a.checked) || !0 === a.checked,
                        children: (0, b.jsx)(i.WV.span, { ...o,
                            ref: r,
                            "data-state": eP(a.checked)
                        })
                    })
                });
            em.displayName = ev;
            var ew = t.forwardRef((e, r) => {
                let {
                    __scopeMenu: n,
                    ...t
                } = e;
                return (0, b.jsx)(i.WV.div, {
                    role: "separator",
                    "aria-orientation": "horizontal",
                    ...t,
                    ref: r
                })
            });
            ew.displayName = "MenuSeparator";
            var ex = t.forwardRef((e, r) => {
                let {
                    __scopeMenu: n,
                    ...t
                } = e, o = N(n);
                return (0, b.jsx)(h.Eh, { ...o,
                    ...t,
                    ref: r
                })
            });
            ex.displayName = "MenuArrow";
            var eM = "MenuSub",
                [ey, ej] = S(eM),
                eb = e => {
                    let {
                        __scopeMenu: r,
                        children: n,
                        open: o = !1,
                        onOpenChange: a
                    } = e, u = L(eM, r), l = N(r), [i, c] = t.useState(null), [d, s] = t.useState(null), f = (0, M.W)(a);
                    return t.useEffect(() => (!1 === u.open && f(!1), () => f(!1)), [u.open, f]), (0, b.jsx)(h.fC, { ...l,
                        children: (0, b.jsx)(O, {
                            scope: r,
                            open: o,
                            onOpenChange: f,
                            content: d,
                            onContentChange: s,
                            children: (0, b.jsx)(ey, {
                                scope: r,
                                contentId: (0, v.M)(),
                                triggerId: (0, v.M)(),
                                trigger: i,
                                onTriggerChange: c,
                                children: n
                            })
                        })
                    })
                };
            eb.displayName = eM;
            var eC = "MenuSubTrigger",
                eR = t.forwardRef((e, r) => {
                    let n = L(eC, e.__scopeMenu),
                        u = V(eC, e.__scopeMenu),
                        l = ej(eC, e.__scopeMenu),
                        i = H(eC, e.__scopeMenu),
                        c = t.useRef(null),
                        {
                            pointerGraceTimerRef: d,
                            onPointerGraceIntentChange: s
                        } = i,
                        f = {
                            __scopeMenu: e.__scopeMenu
                        },
                        p = t.useCallback(() => {
                            c.current && window.clearTimeout(c.current), c.current = null
                        }, []);
                    return t.useEffect(() => p, [p]), t.useEffect(() => {
                        let e = d.current;
                        return () => {
                            window.clearTimeout(e), s(null)
                        }
                    }, [d, s]), (0, b.jsx)(W, {
                        asChild: !0,
                        ...f,
                        children: (0, b.jsx)(eu, {
                            id: l.triggerId,
                            "aria-haspopup": "menu",
                            "aria-expanded": n.open,
                            "aria-controls": l.contentId,
                            "data-state": e_(n.open),
                            ...e,
                            ref: (0, a.F)(r, l.onTriggerChange),
                            onClick: r => {
                                var t;
                                null === (t = e.onClick) || void 0 === t || t.call(e, r), e.disabled || r.defaultPrevented || (r.currentTarget.focus(), n.open || n.onOpenChange(!0))
                            },
                            onPointerMove: (0, o.Mj)(e.onPointerMove, eE(r => {
                                i.onItemEnter(r), r.defaultPrevented || e.disabled || n.open || c.current || (i.onPointerGraceIntentChange(null), c.current = window.setTimeout(() => {
                                    n.onOpenChange(!0), p()
                                }, 100))
                            })),
                            onPointerLeave: (0, o.Mj)(e.onPointerLeave, eE(e => {
                                var r, t;
                                p();
                                let o = null === (r = n.content) || void 0 === r ? void 0 : r.getBoundingClientRect();
                                if (o) {
                                    let r = null === (t = n.content) || void 0 === t ? void 0 : t.dataset.side,
                                        a = "right" === r,
                                        u = o[a ? "left" : "right"],
                                        l = o[a ? "right" : "left"];
                                    i.onPointerGraceIntentChange({
                                        area: [{
                                            x: e.clientX + (a ? -5 : 5),
                                            y: e.clientY
                                        }, {
                                            x: u,
                                            y: o.top
                                        }, {
                                            x: l,
                                            y: o.top
                                        }, {
                                            x: l,
                                            y: o.bottom
                                        }, {
                                            x: u,
                                            y: o.bottom
                                        }],
                                        side: r
                                    }), window.clearTimeout(d.current), d.current = window.setTimeout(() => i.onPointerGraceIntentChange(null), 300)
                                } else {
                                    if (i.onTriggerLeave(e), e.defaultPrevented) return;
                                    i.onPointerGraceIntentChange(null)
                                }
                            })),
                            onKeyDown: (0, o.Mj)(e.onKeyDown, r => {
                                let t = "" !== i.searchRef.current;
                                if (!e.disabled && (!t || " " !== r.key) && k[u.dir].includes(r.key)) {
                                    var o;
                                    n.onOpenChange(!0), null === (o = n.content) || void 0 === o || o.focus(), r.preventDefault()
                                }
                            })
                        })
                    })
                });
            eR.displayName = eC;
            var eD = "MenuSubContent",
                ek = t.forwardRef((e, r) => {
                    let n = Z(X, e.__scopeMenu),
                        {
                            forceMount: u = n.forceMount,
                            ...l
                        } = e,
                        i = L(X, e.__scopeMenu),
                        c = V(X, e.__scopeMenu),
                        d = ej(eD, e.__scopeMenu),
                        s = t.useRef(null),
                        f = (0, a.e)(r, s);
                    return (0, b.jsx)(P.Provider, {
                        scope: e.__scopeMenu,
                        children: (0, b.jsx)(m.z, {
                            present: u || i.open,
                            children: (0, b.jsx)(P.Slot, {
                                scope: e.__scopeMenu,
                                children: (0, b.jsx)(ee, {
                                    id: d.contentId,
                                    "aria-labelledby": d.triggerId,
                                    ...l,
                                    ref: f,
                                    align: "start",
                                    side: "rtl" === c.dir ? "left" : "right",
                                    disableOutsidePointerEvents: !1,
                                    disableOutsideScroll: !1,
                                    trapFocus: !1,
                                    onOpenAutoFocus: e => {
                                        var r;
                                        c.isUsingKeyboardRef.current && (null === (r = s.current) || void 0 === r || r.focus()), e.preventDefault()
                                    },
                                    onCloseAutoFocus: e => e.preventDefault(),
                                    onFocusOutside: (0, o.Mj)(e.onFocusOutside, e => {
                                        e.target !== d.trigger && i.onOpenChange(!1)
                                    }),
                                    onEscapeKeyDown: (0, o.Mj)(e.onEscapeKeyDown, e => {
                                        c.onClose(), e.preventDefault()
                                    }),
                                    onKeyDown: (0, o.Mj)(e.onKeyDown, e => {
                                        let r = e.currentTarget.contains(e.target),
                                            n = _[c.dir].includes(e.key);
                                        if (r && n) {
                                            var t;
                                            i.onOpenChange(!1), null === (t = d.trigger) || void 0 === t || t.focus(), e.preventDefault()
                                        }
                                    })
                                })
                            })
                        })
                    })
                });

            function e_(e) {
                return e ? "open" : "closed"
            }

            function eI(e) {
                return "indeterminate" === e
            }

            function eP(e) {
                return eI(e) ? "indeterminate" : e ? "checked" : "unchecked"
            }

            function eE(e) {
                return r => "mouse" === r.pointerType ? e(r) : void 0
            }
            ek.displayName = eD;
            var eT = "DropdownMenu",
                [eS, eF] = (0, u.b)(eT, [F]),
                eN = F(),
                [eA, eO] = eS(eT),
                eL = e => {
                    let {
                        __scopeDropdownMenu: r,
                        children: n,
                        dir: o,
                        open: a,
                        defaultOpen: u,
                        onOpenChange: i,
                        modal: c = !0
                    } = e, d = eN(r), s = t.useRef(null), [f, p] = (0, l.T)({
                        prop: a,
                        defaultProp: null != u && u,
                        onChange: i,
                        caller: eT
                    });
                    return (0, b.jsx)(eA, {
                        scope: r,
                        triggerId: (0, v.M)(),
                        triggerRef: s,
                        contentId: (0, v.M)(),
                        open: f,
                        onOpenChange: p,
                        onOpenToggle: t.useCallback(() => p(e => !e), [p]),
                        modal: c,
                        children: (0, b.jsx)(G, { ...d,
                            open: f,
                            onOpenChange: p,
                            dir: o,
                            modal: c,
                            children: n
                        })
                    })
                };
            eL.displayName = eT;
            var eK = "DropdownMenuTrigger",
                eV = t.forwardRef((e, r) => {
                    let {
                        __scopeDropdownMenu: n,
                        disabled: t = !1,
                        ...u
                    } = e, l = eO(eK, n), c = eN(n);
                    return (0, b.jsx)(W, {
                        asChild: !0,
                        ...c,
                        children: (0, b.jsx)(i.WV.button, {
                            type: "button",
                            id: l.triggerId,
                            "aria-haspopup": "menu",
                            "aria-expanded": l.open,
                            "aria-controls": l.open ? l.contentId : void 0,
                            "data-state": l.open ? "open" : "closed",
                            "data-disabled": t ? "" : void 0,
                            disabled: t,
                            ...u,
                            ref: (0, a.F)(r, l.triggerRef),
                            onPointerDown: (0, o.Mj)(e.onPointerDown, e => {
                                t || 0 !== e.button || !1 !== e.ctrlKey || (l.onOpenToggle(), l.open || e.preventDefault())
                            }),
                            onKeyDown: (0, o.Mj)(e.onKeyDown, e => {
                                !t && (["Enter", " "].includes(e.key) && l.onOpenToggle(), "ArrowDown" === e.key && l.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
                            })
                        })
                    })
                });
            eV.displayName = eK;
            var eG = e => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, t = eN(r);
                return (0, b.jsx)(z, { ...t,
                    ...n
                })
            };
            eG.displayName = "DropdownMenuPortal";
            var eW = "DropdownMenuContent",
                eU = t.forwardRef((e, r) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...a
                    } = e, u = eO(eW, n), l = eN(n), i = t.useRef(!1);
                    return (0, b.jsx)(q, {
                        id: u.contentId,
                        "aria-labelledby": u.triggerId,
                        ...l,
                        ...a,
                        ref: r,
                        onCloseAutoFocus: (0, o.Mj)(e.onCloseAutoFocus, e => {
                            var r;
                            i.current || null === (r = u.triggerRef.current) || void 0 === r || r.focus(), i.current = !1, e.preventDefault()
                        }),
                        onInteractOutside: (0, o.Mj)(e.onInteractOutside, e => {
                            let r = e.detail.originalEvent,
                                n = 0 === r.button && !0 === r.ctrlKey,
                                t = 2 === r.button || n;
                            (!u.modal || t) && (i.current = !0)
                        }),
                        style: { ...e.style,
                            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    })
                });
            eU.displayName = eW;
            var eB = t.forwardRef((e, r) => {
                let {
                    __scopeDropdownMenu: n,
                    ...t
                } = e, o = eN(n);
                return (0, b.jsx)(er, { ...o,
                    ...t,
                    ref: r
                })
            });
            eB.displayName = "DropdownMenuGroup";
            var eZ = t.forwardRef((e, r) => {
                let {
                    __scopeDropdownMenu: n,
                    ...t
                } = e, o = eN(n);
                return (0, b.jsx)(en, { ...o,
                    ...t,
                    ref: r
                })
            });
            eZ.displayName = "DropdownMenuLabel";
            var ez = t.forwardRef((e, r) => {
                let {
                    __scopeDropdownMenu: n,
                    ...t
                } = e, o = eN(n);
                return (0, b.jsx)(ea, { ...o,
                    ...t,
                    ref: r
                })
            });
            ez.displayName = "DropdownMenuItem";
            var eX = t.forwardRef((e, r) => {
                let {
                    __scopeDropdownMenu: n,
                    ...t
                } = e, o = eN(n);
                return (0, b.jsx)(el, { ...o,
                    ...t,
                    ref: r
                })
            });
            eX.displayName = "DropdownMenuCheckboxItem";
            var eY = t.forwardRef((e, r) => {
                let {
                    __scopeDropdownMenu: n,
                    ...t
                } = e, o = eN(n);
                return (0, b.jsx)(es, { ...o,
                    ...t,
                    ref: r
                })
            });
            eY.displayName = "DropdownMenuRadioGroup";
            var eH = t.forwardRef((e, r) => {
                let {
                    __scopeDropdownMenu: n,
                    ...t
                } = e, o = eN(n);
                return (0, b.jsx)(ep, { ...o,
                    ...t,
                    ref: r
                })
            });
            eH.displayName = "DropdownMenuRadioItem";
            var eq = t.forwardRef((e, r) => {
                let {
                    __scopeDropdownMenu: n,
                    ...t
                } = e, o = eN(n);
                return (0, b.jsx)(em, { ...o,
                    ...t,
                    ref: r
                })
            });
            eq.displayName = "DropdownMenuItemIndicator";
            var eJ = t.forwardRef((e, r) => {
                let {
                    __scopeDropdownMenu: n,
                    ...t
                } = e, o = eN(n);
                return (0, b.jsx)(ew, { ...o,
                    ...t,
                    ref: r
                })
            });
            eJ.displayName = "DropdownMenuSeparator", t.forwardRef((e, r) => {
                let {
                    __scopeDropdownMenu: n,
                    ...t
                } = e, o = eN(n);
                return (0, b.jsx)(ex, { ...o,
                    ...t,
                    ref: r
                })
            }).displayName = "DropdownMenuArrow";
            var eQ = t.forwardRef((e, r) => {
                let {
                    __scopeDropdownMenu: n,
                    ...t
                } = e, o = eN(n);
                return (0, b.jsx)(eR, { ...o,
                    ...t,
                    ref: r
                })
            });
            eQ.displayName = "DropdownMenuSubTrigger";
            var e$ = t.forwardRef((e, r) => {
                let {
                    __scopeDropdownMenu: n,
                    ...t
                } = e, o = eN(n);
                return (0, b.jsx)(ek, { ...o,
                    ...t,
                    ref: r,
                    style: { ...e.style,
                        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            });
            e$.displayName = "DropdownMenuSubContent";
            var e0 = eL,
                e1 = eV,
                e6 = eG,
                e8 = eU,
                e3 = eB,
                e2 = eZ,
                e7 = ez,
                e9 = eX,
                e4 = eY,
                e5 = eH,
                re = eq,
                rr = eJ,
                rn = e => {
                    let {
                        __scopeDropdownMenu: r,
                        children: n,
                        open: t,
                        onOpenChange: o,
                        defaultOpen: a
                    } = e, u = eN(r), [i, c] = (0, l.T)({
                        prop: t,
                        defaultProp: null != a && a,
                        onChange: o,
                        caller: "DropdownMenuSub"
                    });
                    return (0, b.jsx)(eb, { ...u,
                        open: i,
                        onOpenChange: c,
                        children: n
                    })
                },
                rt = eQ,
                ro = e$
        },
        22789: function(e, r, n) {
            n.d(r, {
                Pc: function() {
                    return y
                },
                ck: function() {
                    return E
                },
                fC: function() {
                    return P
                }
            });
            var t = n(57420),
                o = n(88864),
                a = n(82534),
                u = n(46965),
                l = n(26059),
                i = n(57486),
                c = n(48769),
                d = n(30113),
                s = n(73812),
                f = n(41890),
                p = n(18243),
                v = "rovingFocusGroup.onEntryFocus",
                h = {
                    bubbles: !1,
                    cancelable: !0
                },
                g = "RovingFocusGroup",
                [m, w, x] = (0, a.B)(g),
                [M, y] = (0, l.b)(g, [x]),
                [j, b] = M(g),
                C = t.forwardRef((e, r) => (0, p.jsx)(m.Provider, {
                    scope: e.__scopeRovingFocusGroup,
                    children: (0, p.jsx)(m.Slot, {
                        scope: e.__scopeRovingFocusGroup,
                        children: (0, p.jsx)(R, { ...e,
                            ref: r
                        })
                    })
                }));
            C.displayName = g;
            var R = t.forwardRef((e, r) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        orientation: a,
                        loop: l = !1,
                        dir: i,
                        currentTabStopId: m,
                        defaultCurrentTabStopId: x,
                        onCurrentTabStopIdChange: M,
                        onEntryFocus: y,
                        preventScrollOnEntryFocus: b = !1,
                        ...C
                    } = e, R = t.useRef(null), D = (0, u.e)(r, R), k = (0, f.gm)(i), [_, P] = (0, s.T)({
                        prop: m,
                        defaultProp: null != x ? x : null,
                        onChange: M,
                        caller: g
                    }), [E, T] = t.useState(!1), S = (0, d.W)(y), F = w(n), N = t.useRef(!1), [A, O] = t.useState(0);
                    return t.useEffect(() => {
                        let e = R.current;
                        if (e) return e.addEventListener(v, S), () => e.removeEventListener(v, S)
                    }, [S]), (0, p.jsx)(j, {
                        scope: n,
                        orientation: a,
                        dir: k,
                        loop: l,
                        currentTabStopId: _,
                        onItemFocus: t.useCallback(e => P(e), [P]),
                        onItemShiftTab: t.useCallback(() => T(!0), []),
                        onFocusableItemAdd: t.useCallback(() => O(e => e + 1), []),
                        onFocusableItemRemove: t.useCallback(() => O(e => e - 1), []),
                        children: (0, p.jsx)(c.WV.div, {
                            tabIndex: E || 0 === A ? -1 : 0,
                            "data-orientation": a,
                            ...C,
                            ref: D,
                            style: {
                                outline: "none",
                                ...e.style
                            },
                            onMouseDown: (0, o.Mj)(e.onMouseDown, () => {
                                N.current = !0
                            }),
                            onFocus: (0, o.Mj)(e.onFocus, e => {
                                let r = !N.current;
                                if (e.target === e.currentTarget && r && !E) {
                                    let r = new CustomEvent(v, h);
                                    if (e.currentTarget.dispatchEvent(r), !r.defaultPrevented) {
                                        let e = F().filter(e => e.focusable);
                                        I([e.find(e => e.active), e.find(e => e.id === _), ...e].filter(Boolean).map(e => e.ref.current), b)
                                    }
                                }
                                N.current = !1
                            }),
                            onBlur: (0, o.Mj)(e.onBlur, () => T(!1))
                        })
                    })
                }),
                D = "RovingFocusGroupItem",
                k = t.forwardRef((e, r) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        focusable: a = !0,
                        active: u = !1,
                        tabStopId: l,
                        children: d,
                        ...s
                    } = e, f = (0, i.M)(), v = l || f, h = b(D, n), g = h.currentTabStopId === v, x = w(n), {
                        onFocusableItemAdd: M,
                        onFocusableItemRemove: y,
                        currentTabStopId: j
                    } = h;
                    return t.useEffect(() => {
                        if (a) return M(), () => y()
                    }, [a, M, y]), (0, p.jsx)(m.ItemSlot, {
                        scope: n,
                        id: v,
                        focusable: a,
                        active: u,
                        children: (0, p.jsx)(c.WV.span, {
                            tabIndex: g ? 0 : -1,
                            "data-orientation": h.orientation,
                            ...s,
                            ref: r,
                            onMouseDown: (0, o.Mj)(e.onMouseDown, e => {
                                a ? h.onItemFocus(v) : e.preventDefault()
                            }),
                            onFocus: (0, o.Mj)(e.onFocus, () => h.onItemFocus(v)),
                            onKeyDown: (0, o.Mj)(e.onKeyDown, e => {
                                if ("Tab" === e.key && e.shiftKey) {
                                    h.onItemShiftTab();
                                    return
                                }
                                if (e.target !== e.currentTarget) return;
                                let r = function(e, r, n) {
                                    var t;
                                    let o = (t = e.key, "rtl" !== n ? t : "ArrowLeft" === t ? "ArrowRight" : "ArrowRight" === t ? "ArrowLeft" : t);
                                    if (!("vertical" === r && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === r && ["ArrowUp", "ArrowDown"].includes(o))) return _[o]
                                }(e, h.orientation, h.dir);
                                if (void 0 !== r) {
                                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                                    e.preventDefault();
                                    let o = x().filter(e => e.focusable).map(e => e.ref.current);
                                    if ("last" === r) o.reverse();
                                    else if ("prev" === r || "next" === r) {
                                        var n, t;
                                        "prev" === r && o.reverse();
                                        let a = o.indexOf(e.currentTarget);
                                        o = h.loop ? (n = o, t = a + 1, n.map((e, r) => n[(t + r) % n.length])) : o.slice(a + 1)
                                    }
                                    setTimeout(() => I(o))
                                }
                            }),
                            children: "function" == typeof d ? d({
                                isCurrentTabStop: g,
                                hasTabStop: null != j
                            }) : d
                        })
                    })
                });
            k.displayName = D;
            var _ = {
                ArrowLeft: "prev",
                ArrowUp: "prev",
                ArrowRight: "next",
                ArrowDown: "next",
                PageUp: "first",
                Home: "first",
                PageDown: "last",
                End: "last"
            };

            function I(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = document.activeElement;
                for (let t of e)
                    if (t === n || (t.focus({
                            preventScroll: r
                        }), document.activeElement !== n)) return
            }
            var P = C,
                E = k
        }
    }
]);