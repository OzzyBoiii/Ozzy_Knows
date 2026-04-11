"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9170], {
        30911: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return c
                }
            });
            var n = r(57420);
            let o = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                i = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return t.filter((e, t, r) => !!e && r.indexOf(e) === t).join(" ")
                };
            var l = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let u = (0, n.forwardRef)((e, t) => {
                    let {
                        color: r = "currentColor",
                        size: o = 24,
                        strokeWidth: u = 2,
                        absoluteStrokeWidth: c,
                        className: a = "",
                        children: s,
                        iconNode: f,
                        ...d
                    } = e;
                    return (0, n.createElement)("svg", {
                        ref: t,
                        ...l,
                        width: o,
                        height: o,
                        stroke: r,
                        strokeWidth: c ? 24 * Number(u) / Number(o) : u,
                        className: i("lucide", a),
                        ...d
                    }, [...f.map(e => {
                        let [t, r] = e;
                        return (0, n.createElement)(t, r)
                    }), ...Array.isArray(s) ? s : [s]])
                }),
                c = (e, t) => {
                    let r = (0, n.forwardRef)((r, l) => {
                        let {
                            className: c,
                            ...a
                        } = r;
                        return (0, n.createElement)(u, {
                            ref: l,
                            iconNode: t,
                            className: i("lucide-".concat(o(e)), c),
                            ...a
                        })
                    });
                    return r.displayName = "".concat(e), r
                }
        },
        88864: function(e, t, r) {
            function n(e, t, {
                checkForDefaultPrevented: r = !0
            } = {}) {
                return function(n) {
                    if (e ? .(n), !1 === r || !n.defaultPrevented) return t ? .(n)
                }
            }
            r.d(t, {
                Mj: function() {
                    return n
                }
            }), "undefined" != typeof window && window.document && window.document.createElement
        },
        26059: function(e, t, r) {
            r.d(t, {
                b: function() {
                    return l
                },
                k: function() {
                    return i
                }
            });
            var n = r(57420),
                o = r(18243);

            function i(e, t) {
                let r = n.createContext(t),
                    i = e => {
                        let {
                            children: t,
                            ...i
                        } = e, l = n.useMemo(() => i, Object.values(i));
                        return (0, o.jsx)(r.Provider, {
                            value: l,
                            children: t
                        })
                    };
                return i.displayName = e + "Provider", [i, function(o) {
                    let i = n.useContext(r);
                    if (i) return i;
                    if (void 0 !== t) return t;
                    throw Error(`\`${o}\` must be used within \`${e}\``)
                }]
            }

            function l(e, t = []) {
                let r = [],
                    i = () => {
                        let t = r.map(e => n.createContext(e));
                        return function(r) {
                            let o = r ? .[e] || t;
                            return n.useMemo(() => ({
                                [`__scope${e}`]: { ...r,
                                    [e]: o
                                }
                            }), [r, o])
                        }
                    };
                return i.scopeName = e, [function(t, i) {
                    let l = n.createContext(i),
                        u = r.length;
                    r = [...r, i];
                    let c = t => {
                        let {
                            scope: r,
                            children: i,
                            ...c
                        } = t, a = r ? .[e] ? .[u] || l, s = n.useMemo(() => c, Object.values(c));
                        return (0, o.jsx)(a.Provider, {
                            value: s,
                            children: i
                        })
                    };
                    return c.displayName = t + "Provider", [c, function(r, o) {
                        let c = o ? .[e] ? .[u] || l,
                            a = n.useContext(c);
                        if (a) return a;
                        if (void 0 !== i) return i;
                        throw Error(`\`${r}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let r = () => {
                        let r = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let o = r.reduce((t, {
                                useScope: r,
                                scopeName: n
                            }) => {
                                let o = r(e)[`__scope${n}`];
                                return { ...t,
                                    ...o
                                }
                            }, {});
                            return n.useMemo(() => ({
                                [`__scope${t.scopeName}`]: o
                            }), [o])
                        }
                    };
                    return r.scopeName = t.scopeName, r
                }(i, ...t)]
            }
        },
        57486: function(e, t, r) {
            r.d(t, {
                M: function() {
                    return c
                }
            });
            var n, o = r(57420),
                i = r(92883),
                l = (n || (n = r.t(o, 2)))[" useId ".trim().toString()] || (() => void 0),
                u = 0;

            function c(e) {
                let [t, r] = o.useState(l());
                return (0, i.b)(() => {
                    e || r(e => e ? ? String(u++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
        },
        48769: function(e, t, r) {
            r.d(t, {
                WV: function() {
                    return u
                },
                jH: function() {
                    return c
                }
            });
            var n = r(57420),
                o = r(12537),
                i = r(65600),
                l = r(18243),
                u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
                    let r = (0, i.Z8)(`Primitive.${t}`),
                        o = n.forwardRef((e, n) => {
                            let {
                                asChild: o,
                                ...i
                            } = e, u = o ? r : t;
                            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(u, { ...i,
                                ref: n
                            })
                        });
                    return o.displayName = `Primitive.${t}`, { ...e,
                        [t]: o
                    }
                }, {});

            function c(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t))
            }
        },
        65600: function(e, t, r) {
            r.d(t, {
                Z8: function() {
                    return l
                },
                sA: function() {
                    return c
                }
            });
            var n = r(57420),
                o = r(46965),
                i = r(18243);

            function l(e) {
                let t = function(e) {
                        let t = n.forwardRef((e, t) => {
                            let {
                                children: r,
                                ...i
                            } = e;
                            if (n.isValidElement(r)) {
                                let e, l;
                                let u = (e = Object.getOwnPropertyDescriptor(r.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning ? r.ref : (e = Object.getOwnPropertyDescriptor(r, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning ? r.props.ref : r.props.ref || r.ref,
                                    c = function(e, t) {
                                        let r = { ...t
                                        };
                                        for (let n in t) {
                                            let o = e[n],
                                                i = t[n];
                                            /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                                                let t = i(...e);
                                                return o(...e), t
                                            } : o && (r[n] = o) : "style" === n ? r[n] = { ...o,
                                                ...i
                                            } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                                        }
                                        return { ...e,
                                            ...r
                                        }
                                    }(i, r.props);
                                return r.type !== n.Fragment && (c.ref = t ? (0, o.F)(t, u) : u), n.cloneElement(r, c)
                            }
                            return n.Children.count(r) > 1 ? n.Children.only(null) : null
                        });
                        return t.displayName = `${e}.SlotClone`, t
                    }(e),
                    r = n.forwardRef((e, r) => {
                        let {
                            children: o,
                            ...l
                        } = e, u = n.Children.toArray(o), c = u.find(a);
                        if (c) {
                            let e = c.props.children,
                                o = u.map(t => t !== c ? t : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
                            return (0, i.jsx)(t, { ...l,
                                ref: r,
                                children: n.isValidElement(e) ? n.cloneElement(e, void 0, o) : null
                            })
                        }
                        return (0, i.jsx)(t, { ...l,
                            ref: r,
                            children: o
                        })
                    });
                return r.displayName = `${e}.Slot`, r
            }
            var u = Symbol("radix.slottable");

            function c(e) {
                let t = ({
                    children: e
                }) => (0, i.jsx)(i.Fragment, {
                    children: e
                });
                return t.displayName = `${e}.Slottable`, t.__radixId = u, t
            }

            function a(e) {
                return n.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === u
            }
        },
        30113: function(e, t, r) {
            r.d(t, {
                W: function() {
                    return o
                }
            });
            var n = r(57420);

            function o(e) {
                let t = n.useRef(e);
                return n.useEffect(() => {
                    t.current = e
                }), n.useMemo(() => (...e) => t.current ? .(...e), [])
            }
        },
        73812: function(e, t, r) {
            r.d(t, {
                T: function() {
                    return u
                }
            });
            var n, o = r(57420),
                i = r(92883),
                l = (n || (n = r.t(o, 2)))[" useInsertionEffect ".trim().toString()] || i.b;

            function u({
                prop: e,
                defaultProp: t,
                onChange: r = () => {},
                caller: n
            }) {
                let [i, u, c] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let [r, n] = o.useState(e), i = o.useRef(r), u = o.useRef(t);
                    return l(() => {
                        u.current = t
                    }, [t]), o.useEffect(() => {
                        i.current !== r && (u.current ? .(r), i.current = r)
                    }, [r, i]), [r, n, u]
                }({
                    defaultProp: t,
                    onChange: r
                }), a = void 0 !== e, s = a ? e : i; {
                    let t = o.useRef(void 0 !== e);
                    o.useEffect(() => {
                        let e = t.current;
                        if (e !== a) {
                            let t = a ? "controlled" : "uncontrolled";
                            console.warn(`${n} is changing from ${e?"controlled":"uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
                        }
                        t.current = a
                    }, [a, n])
                }
                return [s, o.useCallback(t => {
                    if (a) {
                        let r = "function" == typeof t ? t(e) : t;
                        r !== e && c.current ? .(r)
                    } else u(t)
                }, [a, e, u, c])]
            }
            Symbol("RADIX:SYNC_STATE")
        },
        92883: function(e, t, r) {
            r.d(t, {
                b: function() {
                    return o
                }
            });
            var n = r(57420),
                o = globalThis ? .document ? n.useLayoutEffect : () => {}
        },
        16452: function(e, t, r) {
            r.d(t, {
                j: function() {
                    return l
                }
            });
            var n = r(1349);
            let o = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
                i = n.W,
                l = (e, t) => r => {
                    var n;
                    if ((null == t ? void 0 : t.variants) == null) return i(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
                    let {
                        variants: l,
                        defaultVariants: u
                    } = t, c = Object.keys(l).map(e => {
                        let t = null == r ? void 0 : r[e],
                            n = null == u ? void 0 : u[e];
                        if (null === t) return null;
                        let i = o(t) || o(n);
                        return l[e][i]
                    }), a = r && Object.entries(r).reduce((e, t) => {
                        let [r, n] = t;
                        return void 0 === n || (e[r] = n), e
                    }, {});
                    return i(e, c, null == t ? void 0 : null === (n = t.compoundVariants) || void 0 === n ? void 0 : n.reduce((e, t) => {
                        let {
                            class: r,
                            className: n,
                            ...o
                        } = t;
                        return Object.entries(o).every(e => {
                            let [t, r] = e;
                            return Array.isArray(r) ? r.includes({ ...u,
                                ...a
                            }[t]) : ({ ...u,
                                ...a
                            })[t] === r
                        }) ? [...e, r, n] : e
                    }, []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
                }
        },
        85652: function(e, t, r) {
            r.d(t, {
                w_: function() {
                    return s
                }
            });
            var n = r(57420),
                o = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                i = n.createContext && n.createContext(o),
                l = ["attr", "size", "title"];

            function u() {
                return (u = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach(function(t) {
                        var n, o;
                        n = t, o = r[t], (n = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(n)) in e ? Object.defineProperty(e, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function s(e) {
                return t => n.createElement(f, u({
                    attr: a({}, e.attr)
                }, t), function e(t) {
                    return t && t.map((t, r) => n.createElement(t.tag, a({
                        key: r
                    }, t.attr), e(t.child)))
                }(e.child))
            }

            function f(e) {
                var t = t => {
                    var r, {
                            attr: o,
                            size: i,
                            title: c
                        } = e,
                        s = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = function(e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        r[n] = e[n]
                                    }
                                return r
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }(e, l),
                        f = i || t.size || "1em";
                    return t.className && (r = t.className), e.className && (r = (r ? r + " " : "") + e.className), n.createElement("svg", u({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, o, s, {
                        className: r,
                        style: a(a({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: f,
                        width: f,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), c && n.createElement("title", null, c), e.children)
                };
                return void 0 !== i ? n.createElement(i.Consumer, null, e => t(e)) : t(o)
            }
        }
    }
]);