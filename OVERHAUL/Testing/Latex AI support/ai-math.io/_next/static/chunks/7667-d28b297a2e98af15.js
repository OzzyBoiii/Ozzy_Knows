"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7667], {
        70015: function(e, t, n) {
            n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n(18243),
                l = n(23709);

            function i(e) {
                var t;
                let {
                    section: n
                } = e;
                return n.disabled ? null : (0, a.jsx)("section", {
                    id: n.name,
                    className: "py-16 bg-background",
                    children: (0, a.jsx)("div", {
                        className: "container",
                        children: (0, a.jsxs)("div", {
                            className: "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
                            children: [(0, a.jsxs)("div", {
                                className: "order-1 lg:order-1 flex flex-col lg:text-left h-full justify-center",
                                children: [n.title && (0, a.jsx)("h2", {
                                    className: "mb-6 text-pretty text-3xl font-bold lg:text-4xl",
                                    children: n.title
                                }), n.description && (0, a.jsx)("p", {
                                    className: "mb-8 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg",
                                    children: n.description
                                }), (0, a.jsx)("ul", {
                                    className: "flex flex-col justify-center gap-y-8",
                                    children: null === (t = n.items) || void 0 === t ? void 0 : t.map((e, t) => (0, a.jsxs)("li", {
                                        className: "flex",
                                        children: [e.icon && (0, a.jsx)(l.default, {
                                            name: e.icon,
                                            className: "mr-2 size-6 shrink-0 lg:mr-2 lg:size-6"
                                        }), (0, a.jsxs)("div", {
                                            children: [(0, a.jsx)("div", {
                                                className: "mb-3 h-5 text-sm font-semibold text-accent-foreground md:text-base",
                                                children: e.title
                                            }), (0, a.jsx)("div", {
                                                className: "text-sm font-medium text-muted-foreground md:text-base",
                                                children: e.description
                                            })]
                                        })]
                                    }, t))
                                })]
                            }), (0, a.jsx)("div", {
                                className: "order-2 lg:order-2 h-full",
                                children: n.content && (0, a.jsxs)("div", {
                                    className: "p-6 h-full flex flex-col justify-center",
                                    children: [n.content.title && (0, a.jsx)("h3", {
                                        className: "mb-4 text-xl font-semibold text-primary",
                                        children: n.content.title
                                    }), n.content.description && (0, a.jsx)("p", {
                                        className: "mb-6 text-muted-foreground",
                                        children: n.content.description
                                    }), n.content.categories && (0, a.jsx)("div", {
                                        className: "space-y-4",
                                        children: n.content.categories.map((e, t) => {
                                            var n;
                                            return (0, a.jsxs)("div", {
                                                className: "p-4",
                                                children: [(0, a.jsxs)("h4", {
                                                    className: "mb-3 font-medium text-accent-foreground flex items-center",
                                                    children: [e.icon && (0, a.jsx)(l.default, {
                                                        name: e.icon,
                                                        className: "mr-2 size-5 shrink-0"
                                                    }), e.title]
                                                }), (0, a.jsx)("ul", {
                                                    className: "grid gap-2 sm:grid-cols-2",
                                                    children: null === (n = e.items) || void 0 === n ? void 0 : n.map((e, t) => (0, a.jsxs)("li", {
                                                        className: "flex items-start text-sm",
                                                        children: [(0, a.jsx)("span", {
                                                            className: "mr-2 mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                                                        }), (0, a.jsx)("span", {
                                                            className: "text-muted-foreground",
                                                            children: e
                                                        })]
                                                    }, t))
                                                })]
                                            }, t)
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        },
        14300: function(e, t, n) {
            n.d(t, {
                default: function() {
                    return y
                }
            });
            var a = n(18243),
                l = n(27509),
                i = n(57420),
                o = n(70569),
                r = n(33492),
                s = n(11451),
                d = n(10722),
                c = n(23692);
            let u = i.createContext(null);

            function m() {
                let e = i.useContext(u);
                if (!e) throw Error("useCarousel must be used within a <Carousel />");
                return e
            }
            let f = i.forwardRef((e, t) => {
                let {
                    orientation: n = "horizontal",
                    opts: l,
                    setApi: r,
                    plugins: s,
                    className: c,
                    children: m,
                    ...f
                } = e, [p, v] = (0, o.Z)({ ...l,
                    axis: "horizontal" === n ? "x" : "y"
                }, s), [x, g] = i.useState(!1), [h, y] = i.useState(!1), w = i.useCallback(e => {
                    e && (g(e.canScrollPrev()), y(e.canScrollNext()))
                }, []), b = i.useCallback(() => {
                    null == v || v.scrollPrev()
                }, [v]), N = i.useCallback(() => {
                    null == v || v.scrollNext()
                }, [v]), j = i.useCallback(e => {
                    "ArrowLeft" === e.key ? (e.preventDefault(), b()) : "ArrowRight" === e.key && (e.preventDefault(), N())
                }, [b, N]);
                return i.useEffect(() => {
                    v && r && r(v)
                }, [v, r]), i.useEffect(() => {
                    if (v) return w(v), v.on("reInit", w), v.on("select", w), () => {
                        null == v || v.off("select", w)
                    }
                }, [v, w]), (0, a.jsx)(u.Provider, {
                    value: {
                        carouselRef: p,
                        api: v,
                        opts: l,
                        orientation: n || ((null == l ? void 0 : l.axis) === "y" ? "vertical" : "horizontal"),
                        scrollPrev: b,
                        scrollNext: N,
                        canScrollPrev: x,
                        canScrollNext: h
                    },
                    children: (0, a.jsx)("div", {
                        ref: t,
                        onKeyDownCapture: j,
                        className: (0, d.cn)("relative", c),
                        role: "region",
                        "aria-roledescription": "carousel",
                        ...f,
                        children: m
                    })
                })
            });
            f.displayName = "Carousel";
            let p = i.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e, {
                    carouselRef: i,
                    orientation: o
                } = m();
                return (0, a.jsx)("div", {
                    ref: i,
                    className: "overflow-hidden",
                    children: (0, a.jsx)("div", {
                        ref: t,
                        className: (0, d.cn)("flex", "horizontal" === o ? "-ml-4" : "-mt-4 flex-col", n),
                        ...l
                    })
                })
            });
            p.displayName = "CarouselContent";
            let v = i.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e, {
                    orientation: i
                } = m();
                return (0, a.jsx)("div", {
                    ref: t,
                    role: "group",
                    "aria-roledescription": "slide",
                    className: (0, d.cn)("min-w-0 shrink-0 grow-0 basis-full", "horizontal" === i ? "pl-4" : "pt-4", n),
                    ...l
                })
            });
            v.displayName = "CarouselItem", i.forwardRef((e, t) => {
                let {
                    className: n,
                    variant: l = "outline",
                    size: i = "icon",
                    ...o
                } = e, {
                    orientation: s,
                    scrollPrev: u,
                    canScrollPrev: f
                } = m();
                return (0, a.jsxs)(c.z, {
                    ref: t,
                    variant: l,
                    size: i,
                    className: (0, d.cn)("absolute  h-8 w-8 rounded-full", "horizontal" === s ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", n),
                    disabled: !f,
                    onClick: u,
                    ...o,
                    children: [(0, a.jsx)(r.Z, {
                        className: "h-4 w-4"
                    }), (0, a.jsx)("span", {
                        className: "sr-only",
                        children: "Previous slide"
                    })]
                })
            }).displayName = "CarouselPrevious", i.forwardRef((e, t) => {
                let {
                    className: n,
                    variant: l = "outline",
                    size: i = "icon",
                    ...o
                } = e, {
                    orientation: r,
                    scrollNext: u,
                    canScrollNext: f
                } = m();
                return (0, a.jsxs)(c.z, {
                    ref: t,
                    variant: l,
                    size: i,
                    className: (0, d.cn)("absolute h-8 w-8 rounded-full", "horizontal" === r ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", n),
                    disabled: !f,
                    onClick: u,
                    ...o,
                    children: [(0, a.jsx)(s.Z, {
                        className: "h-4 w-4"
                    }), (0, a.jsx)("span", {
                        className: "sr-only",
                        children: "Next slide"
                    })]
                })
            }).displayName = "CarouselNext";
            var x = n(57623),
                g = n(90792),
                h = n(23709);

            function y(e) {
                var t, n;
                let {
                    section: o
                } = e;
                if (o.disabled) return null;
                let [r, s] = (0, i.useState)(), [d, c] = (0, i.useState)("1");
                return (0, i.useEffect)(() => {
                    null == r || r.scrollTo(+d - 1);
                    let e = setInterval(() => {
                        c(e => {
                            let t = parseInt(e) + 1;
                            return t > 3 ? "1" : t.toString()
                        })
                    }, 5e3);
                    return () => clearInterval(e)
                }, [r, d]), (0, a.jsx)("section", {
                    id: o.name,
                    className: "py-32",
                    children: (0, a.jsx)("div", {
                        className: "container",
                        children: (0, a.jsxs)("div", {
                            className: "mx-auto grid gap-20 lg:grid-cols-2",
                            children: [(0, a.jsxs)("div", {
                                children: [o.label && (0, a.jsx)(x.C, {
                                    variant: "outline",
                                    className: "mb-4",
                                    children: o.label
                                }), (0, a.jsx)("h2", {
                                    className: "mb-6 text-pretty text-3xl font-bold lg:text-4xl",
                                    children: o.title
                                }), (0, a.jsx)("p", {
                                    className: "mb-4 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg",
                                    children: o.description
                                }), (0, a.jsx)(l.UQ, {
                                    type: "single",
                                    value: d,
                                    onValueChange: e => {
                                        c(e), console.log(e), null == r || r.scrollTo(+e - 1)
                                    },
                                    children: null === (t = o.items) || void 0 === t ? void 0 : t.map((e, t) => (0, a.jsxs)(l.Qd, {
                                        value: (t + 1).toString(),
                                        className: "border-b-0 border-secondary",
                                        children: [(0, a.jsx)(l.o4, {
                                            className: "text-left data-[state=closed]:text-muted-foreground",
                                            children: (0, a.jsxs)("div", {
                                                className: "flex items-center justify-between gap-2",
                                                children: [e.icon && (0, a.jsx)("p", {
                                                    className: "flex size-9 items-center justify-center rounded-lg bg-muted",
                                                    children: (0, a.jsx)(h.default, {
                                                        name: e.icon,
                                                        className: "size-5 shrink-0 lg:size-6"
                                                    })
                                                }), (0, a.jsx)("span", {
                                                    className: "font-medium lg:text-lg",
                                                    children: e.title
                                                })]
                                            })
                                        }), (0, a.jsxs)(l.vF, {
                                            className: "text-muted-foreground lg:text-base",
                                            children: [e.description, (0, a.jsx)("div", {
                                                className: "mt-8 h-px bg-muted",
                                                children: (0, a.jsx)("div", {
                                                    className: "h-px animate-progress bg-primary",
                                                    style: {
                                                        animationDuration: "".concat(5e3, "ms")
                                                    }
                                                })
                                            })]
                                        })]
                                    }, t))
                                })]
                            }), (0, a.jsx)("div", {
                                children: (0, a.jsx)(f, {
                                    opts: {
                                        duration: 50
                                    },
                                    setApi: s,
                                    plugins: [(0, g.Z)()],
                                    children: (0, a.jsx)(p, {
                                        children: null === (n = o.items) || void 0 === n ? void 0 : n.map((e, t) => {
                                            var n, l;
                                            return (0, a.jsx)(v, {
                                                children: (0, a.jsx)("div", {
                                                    children: (0, a.jsx)("img", {
                                                        src: null === (n = e.image) || void 0 === n ? void 0 : n.src,
                                                        alt: (null === (l = e.image) || void 0 === l ? void 0 : l.alt) || e.title,
                                                        className: "max-h-auto w-full object-cover lg:max-h-none rounded-md"
                                                    })
                                                })
                                            }, t)
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })
            }
        },
        23709: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n(18243),
                l = n(97479),
                i = n(84726),
                o = n(12428);
            l.RiRobot2Line;
            let r = {
                Hi: i,
                Hi2: o,
                Ri: l
            };

            function s(e) {
                let {
                    name: t,
                    className: n
                } = e, l = function(e) {
                    let t = r[e.slice(0, 2)];
                    return t && t[e] || null
                }(t);
                return l ? (0, a.jsx)(l, {
                    className: n
                }) : null
            }
        },
        27509: function(e, t, n) {
            n.d(t, {
                Qd: function() {
                    return d
                },
                UQ: function() {
                    return s
                },
                o4: function() {
                    return c
                },
                vF: function() {
                    return u
                }
            });
            var a = n(18243),
                l = n(57420),
                i = n(78068),
                o = n(17867),
                r = n(10722);
            let s = i.fC,
                d = l.forwardRef((e, t) => {
                    let {
                        className: n,
                        ...l
                    } = e;
                    return (0, a.jsx)(i.ck, {
                        ref: t,
                        className: (0, r.cn)("border-b", n),
                        ...l
                    })
                });
            d.displayName = "AccordionItem";
            let c = l.forwardRef((e, t) => {
                let {
                    className: n,
                    children: l,
                    ...s
                } = e;
                return (0, a.jsx)(i.h4, {
                    className: "flex",
                    children: (0, a.jsxs)(i.xz, {
                        ref: t,
                        className: (0, r.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", n),
                        ...s,
                        children: [l, (0, a.jsx)(o.Z, {
                            className: "h-4 w-4 shrink-0 transition-transform duration-200"
                        })]
                    })
                })
            });
            c.displayName = i.xz.displayName;
            let u = l.forwardRef((e, t) => {
                let {
                    className: n,
                    children: l,
                    ...o
                } = e;
                return (0, a.jsx)(i.VY, {
                    ref: t,
                    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                    ...o,
                    children: (0, a.jsx)("div", {
                        className: (0, r.cn)("pb-4 pt-0", n),
                        children: l
                    })
                })
            });
            u.displayName = i.VY.displayName
        },
        8548: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return d
                },
                bZ: function() {
                    return s
                }
            });
            var a = n(18243),
                l = n(57420),
                i = n(16452),
                o = n(10722);
            let r = (0, i.j)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
                    variants: {
                        variant: {
                            default: "bg-background text-foreground",
                            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
                        }
                    },
                    defaultVariants: {
                        variant: "default"
                    }
                }),
                s = l.forwardRef((e, t) => {
                    let {
                        className: n,
                        variant: l,
                        ...i
                    } = e;
                    return (0, a.jsx)("div", {
                        ref: t,
                        role: "alert",
                        className: (0, o.cn)(r({
                            variant: l
                        }), n),
                        ...i
                    })
                });
            s.displayName = "Alert", l.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)("h5", {
                    ref: t,
                    className: (0, o.cn)("mb-1 font-medium leading-none tracking-tight", n),
                    ...l
                })
            }).displayName = "AlertTitle";
            let d = l.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: (0, o.cn)("text-sm [&_p]:leading-relaxed", n),
                    ...l
                })
            });
            d.displayName = "AlertDescription"
        },
        57623: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return r
                }
            });
            var a = n(18243);
            n(57420);
            var l = n(16452),
                i = n(10722);
            let o = (0, l.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
                variants: {
                    variant: {
                        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                        outline: "text-foreground"
                    }
                },
                defaultVariants: {
                    variant: "default"
                }
            });

            function r(e) {
                let {
                    className: t,
                    variant: n,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, i.cn)(o({
                        variant: n
                    }), t),
                    ...l
                })
            }
        },
        23692: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return s
                },
                z: function() {
                    return d
                }
            });
            var a = n(18243),
                l = n(57420),
                i = n(62585),
                o = n(16452),
                r = n(10722);
            let s = (0, o.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline"
                        },
                        size: {
                            default: "h-10 px-4 py-2",
                            sm: "h-9 rounded-md px-3",
                            lg: "h-11 rounded-md px-8",
                            icon: "h-10 w-10",
                            "icon-compact": "h-8 w-8 rounded-md"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                d = l.forwardRef((e, t) => {
                    let {
                        className: n,
                        variant: l,
                        size: o,
                        asChild: d = !1,
                        ...c
                    } = e, u = d ? i.g7 : "button";
                    return (0, a.jsx)(u, {
                        className: (0, r.cn)(s({
                            variant: l,
                            size: o,
                            className: n
                        })),
                        ref: t,
                        ...c
                    })
                });
            d.displayName = "Button"
        },
        30092: function(e, t, n) {
            n.d(t, {
                Ol: function() {
                    return r
                },
                SZ: function() {
                    return d
                },
                Zb: function() {
                    return o
                },
                aY: function() {
                    return c
                },
                eW: function() {
                    return u
                },
                ll: function() {
                    return s
                }
            });
            var a = n(18243),
                l = n(57420),
                i = n(10722);
            let o = l.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: (0, i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", n),
                    ...l
                })
            });
            o.displayName = "Card";
            let r = l.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: (0, i.cn)("flex flex-col space-y-1.5 p-6", n),
                    ...l
                })
            });
            r.displayName = "CardHeader";
            let s = l.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: (0, i.cn)("text-2xl font-semibold leading-none tracking-tight", n),
                    ...l
                })
            });
            s.displayName = "CardTitle";
            let d = l.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: (0, i.cn)("text-sm text-muted-foreground", n),
                    ...l
                })
            });
            d.displayName = "CardDescription";
            let c = l.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: (0, i.cn)("p-6 pt-0", n),
                    ...l
                })
            });
            c.displayName = "CardContent";
            let u = l.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: (0, i.cn)("flex items-center p-6 pt-0", n),
                    ...l
                })
            });
            u.displayName = "CardFooter"
        },
        90094: function(e, t, n) {
            n.d(t, {
                $N: function() {
                    return v
                },
                Be: function() {
                    return x
                },
                GG: function() {
                    return c
                },
                Vq: function() {
                    return s
                },
                cN: function() {
                    return p
                },
                cZ: function() {
                    return m
                },
                fK: function() {
                    return f
                }
            });
            var a = n(18243),
                l = n(57420),
                i = n(93938),
                o = n(72424),
                r = n(10722);
            let s = i.fC;
            i.xz;
            let d = i.h_,
                c = i.x8,
                u = l.forwardRef((e, t) => {
                    let {
                        className: n,
                        ...l
                    } = e;
                    return (0, a.jsx)(i.aV, {
                        ref: t,
                        className: (0, r.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", n),
                        ...l
                    })
                });
            u.displayName = i.aV.displayName;
            let m = l.forwardRef((e, t) => {
                let {
                    className: n,
                    children: l,
                    hideClose: s,
                    ...c
                } = e;
                return (0, a.jsxs)(d, {
                    children: [(0, a.jsx)(u, {}), (0, a.jsxs)(i.VY, {
                        ref: t,
                        className: (0, r.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", n),
                        ...c,
                        children: [l, s ? null : (0, a.jsxs)(i.x8, {
                            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                            children: [(0, a.jsx)(o.Z, {
                                className: "h-4 w-4"
                            }), (0, a.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })]
                        })]
                    })]
                })
            });
            m.displayName = i.VY.displayName;
            let f = e => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, r.cn)("flex flex-col space-y-1.5 text-center sm:text-left", t),
                    ...n
                })
            };
            f.displayName = "DialogHeader";
            let p = e => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, r.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t),
                    ...n
                })
            };
            p.displayName = "DialogFooter";
            let v = l.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)(i.Dx, {
                    ref: t,
                    className: (0, r.cn)("text-lg font-semibold leading-none tracking-tight", n),
                    ...l
                })
            });
            v.displayName = i.Dx.displayName;
            let x = l.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)(i.dk, {
                    ref: t,
                    className: (0, r.cn)("text-sm text-muted-foreground", n),
                    ...l
                })
            });
            x.displayName = i.dk.displayName
        },
        79362: function(e, t, n) {
            n.d(t, {
                $F: function() {
                    return u
                },
                AW: function() {
                    return m
                },
                Ju: function() {
                    return p
                },
                VD: function() {
                    return v
                },
                Xi: function() {
                    return f
                },
                h_: function() {
                    return c
                }
            });
            var a = n(18243),
                l = n(57420),
                i = n(51496),
                o = n(73908),
                r = n(80115),
                s = n(37138),
                d = n(10722);
            let c = i.fC,
                u = i.xz;
            i.ZA, i.Uv, i.Tr, i.Ee, l.forwardRef((e, t) => {
                let {
                    className: n,
                    inset: l,
                    children: r,
                    ...s
                } = e;
                return (0, a.jsxs)(i.fF, {
                    ref: t,
                    className: (0, d.cn)("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", l && "pl-8", n),
                    ...s,
                    children: [r, (0, a.jsx)(o.Z, {
                        className: "ml-auto"
                    })]
                })
            }).displayName = i.fF.displayName, l.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)(i.tu, {
                    ref: t,
                    className: (0, d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n),
                    ...l
                })
            }).displayName = i.tu.displayName;
            let m = l.forwardRef((e, t) => {
                let {
                    className: n,
                    sideOffset: l = 4,
                    ...o
                } = e;
                return (0, a.jsx)(i.Uv, {
                    children: (0, a.jsx)(i.VY, {
                        ref: t,
                        sideOffset: l,
                        className: (0, d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n),
                        ...o
                    })
                })
            });
            m.displayName = i.VY.displayName;
            let f = l.forwardRef((e, t) => {
                let {
                    className: n,
                    inset: l,
                    ...o
                } = e;
                return (0, a.jsx)(i.ck, {
                    ref: t,
                    className: (0, d.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", l && "pl-8", n),
                    ...o
                })
            });
            f.displayName = i.ck.displayName, l.forwardRef((e, t) => {
                let {
                    className: n,
                    children: l,
                    checked: o,
                    ...s
                } = e;
                return (0, a.jsxs)(i.oC, {
                    ref: t,
                    className: (0, d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n),
                    checked: o,
                    ...s,
                    children: [(0, a.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, a.jsx)(i.wU, {
                            children: (0, a.jsx)(r.Z, {
                                className: "h-4 w-4"
                            })
                        })
                    }), l]
                })
            }).displayName = i.oC.displayName, l.forwardRef((e, t) => {
                let {
                    className: n,
                    children: l,
                    ...o
                } = e;
                return (0, a.jsxs)(i.Rk, {
                    ref: t,
                    className: (0, d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n),
                    ...o,
                    children: [(0, a.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, a.jsx)(i.wU, {
                            children: (0, a.jsx)(s.Z, {
                                className: "h-2 w-2 fill-current"
                            })
                        })
                    }), l]
                })
            }).displayName = i.Rk.displayName;
            let p = l.forwardRef((e, t) => {
                let {
                    className: n,
                    inset: l,
                    ...o
                } = e;
                return (0, a.jsx)(i.__, {
                    ref: t,
                    className: (0, d.cn)("px-2 py-1.5 text-sm font-semibold", l && "pl-8", n),
                    ...o
                })
            });
            p.displayName = i.__.displayName;
            let v = l.forwardRef((e, t) => {
                let {
                    className: n,
                    ...l
                } = e;
                return (0, a.jsx)(i.Z0, {
                    ref: t,
                    className: (0, d.cn)("-mx-1 my-1 h-px bg-muted", n),
                    ...l
                })
            });
            v.displayName = i.Z0.displayName
        },
        7519: function(e, t, n) {
            n.d(t, {
                J2: function() {
                    return r
                },
                xo: function() {
                    return s
                },
                yk: function() {
                    return d
                }
            });
            var a = n(18243),
                l = n(57420),
                i = n(65624),
                o = n(10722);
            let r = i.fC,
                s = i.xz,
                d = l.forwardRef((e, t) => {
                    let {
                        className: n,
                        align: l = "center",
                        sideOffset: r = 4,
                        ...s
                    } = e;
                    return (0, a.jsx)(i.h_, {
                        children: (0, a.jsx)(i.VY, {
                            ref: t,
                            align: l,
                            sideOffset: r,
                            className: (0, o.cn)("w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n),
                            style: {
                                zIndex: 60
                            },
                            ...s
                        })
                    })
                });
            d.displayName = i.VY.displayName
        },
        11209: function(e, t, n) {
            n.d(t, {
                AppContextProvider: function() {
                    return c
                },
                b: function() {
                    return d
                }
            });
            var a = n(18243),
                l = n(57420),
                i = n(29161),
                o = n.n(i),
                r = n(90978);
            let s = (0, l.createContext)({}),
                d = () => (0, l.useContext)(s),
                c = e => {
                    let {
                        children: t
                    } = e;
                    ! function() {
                        let {
                            data: e,
                            status: t
                        } = (0, r.kP)(), n = async function() {
                            o()({
                                client_id: "57781392641-asj2cirp1vm0a30icfqec1jkd3bth2ol.apps.googleusercontent.com",
                                auto_select: !1,
                                cancel_on_tap_outside: !1,
                                context: "signin"
                            }, e => {
                                console.log("onetap login ok", e), i(e.credential)
                            })
                        }, i = async function(e) {
                            console.log("signIn ok", await (0, r.zB)("google-one-tap", {
                                credential: e,
                                redirect: !1
                            }))
                        };
                        (0, l.useEffect)(() => {
                            if ("unauthenticated" === t) {
                                n();
                                let e = setInterval(() => {
                                    n()
                                }, 3e3);
                                return () => {
                                    clearInterval(e)
                                }
                            }
                        }, [t]), a.Fragment
                    }();
                    let {
                        data: n
                    } = (0, r.kP)(), [i, d] = (0, l.useState)(() => "light"), [c, u] = (0, l.useState)(!1), [m, f] = (0, l.useState)(null);
                    return (0, l.useEffect)(() => {
                        if (n && n.user) {
                            let e = n.user;
                            f({
                                uuid: e.uuid,
                                email: e.email || "",
                                nickname: e.nickname || e.name || "",
                                avatar_url: e.avatar_url || e.image || "",
                                created_at: e.created_at
                            })
                        }
                    }, [n]), (0, a.jsx)(s.Provider, {
                        value: {
                            theme: i,
                            setTheme: d,
                            showSignModal: c,
                            setShowSignModal: u,
                            user: m,
                            setUser: f
                        },
                        children: t
                    })
                }
        },
        89027: function(e, t, n) {
            n.d(t, {
                CY: function() {
                    return r
                },
                Vi: function() {
                    return i
                },
                iV: function() {
                    return o
                }
            });
            var a = n(57642),
                l = n(76521);
            let i = async () => (0, a.TC)((0, l.i$)()),
                o = e => e.replace(/\\newline/g, "\\\\\n").replace(/\\\\(?!\n)/g, "\\\\\n"),
                r = async function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (!e.trim()) return "";
                    try {
                        await i();
                        let n = o(e);
                        if (n.trim().startsWith("$$") && n.trim().endsWith("$$")) {
                            let e = (0, a.tt)(n);
                            if (e.equations.length > 0) {
                                let t = "";
                                for (let n of e.equations) t += await (0, a.c_)(n.latex, {
                                    displayMode: !0,
                                    config: (0, l.i$)()
                                });
                                return t
                            }
                        }
                        if (n.trim().startsWith("\\[") && n.trim().endsWith("\\]")) {
                            let e = n.trim().substring(2, n.trim().length - 2),
                                t = (0, a.tt)("\\[".concat(e, "\\]"));
                            if (1 === t.equations.length) return await (0, a.c_)(t.equations[0].latex, {
                                displayMode: !0,
                                config: (0, l.i$)()
                            })
                        }
                        if (n.includes("\\begin{")) {
                            let e = (0, a.tt)(n),
                                i = "";
                            for (let t of e.equations) {
                                let e = await (0, a.c_)(t.latex, {
                                    displayMode: t.displayMode,
                                    config: (0, l.i$)()
                                });
                                i += e
                            }
                            return i || await (0, a.c_)(n, {
                                displayMode: t,
                                config: (0, l.i$)()
                            })
                        }
                        return await (0, a.c_)(n, {
                            displayMode: t,
                            config: (0, l.i$)()
                        })
                    } catch (e) {
                        return console.error("Error rendering LaTeX:", e), '<div style="color: red; border: 1px solid red; padding: 4px;">\n      Error rendering equation: '.concat(e instanceof Error ? e.message : String(e), "\n    </div>")
                    }
                }
        },
        76521: function(e, t, n) {
            n.d(t, {
                dm: function() {
                    return i
                },
                g5: function() {
                    return a
                },
                i$: function() {
                    return o
                },
                iU: function() {
                    return l
                }
            });
            let a = {
                    enableMenu: !1,
                    zoom: "None",
                    zscale: "100%",
                    displayAlign: "center",
                    displayIndent: "0",
                    scale: 1.2,
                    rawSvgOutput: !1,
                    tex: {
                        inlineMath: [
                            ["$", "$"]
                        ],
                        displayMath: [
                            ["$$", "$$"]
                        ],
                        processEscapes: !0,
                        processEnvironments: !0,
                        packages: ["base", "ams", "noerrors", "noundefined", "autoload", "textmacros", "color"],
                        macros: {
                            RR: "{\\mathbb{R}}",
                            dd: "\\mathrm{d}",
                            differentialD: "\\mathrm{d}"
                        },
                        tags: "none"
                    },
                    svg: {
                        scale: 1.2,
                        minScale: .5,
                        mtextInheritFont: !1,
                        merrorInheritFont: !0,
                        mathmlSpacing: !1,
                        skipAttributes: {},
                        exFactor: .5,
                        displayAlign: "center",
                        displayIndent: "0",
                        fontCache: "local",
                        localID: null,
                        internalSpeechTitles: !0,
                        titleID: 0
                    },
                    startup: {
                        typeset: !1
                    }
                },
                l = e => ({ ...a,
                    enableMenu: !0,
                    zoom: "Click",
                    zscale: "200%",
                    ...e
                }),
                i = e => ({ ...a,
                    ...e
                }),
                o = () => ({ ...a,
                    rawSvgOutput: !1
                })
        },
        63499: function(e, t, n) {
            n.d(t, {
                RT: function() {
                    return d
                },
                v2: function() {
                    return a
                },
                Dh: function() {
                    return l.Dh
                },
                au: function() {
                    return l.au
                }
            });
            var a = {};
            n.r(a), n.d(a, {
                loadMathSolverMathJax: function() {
                    return o
                },
                renderMathContent: function() {
                    return r
                },
                renderPreviewEquation: function() {
                    return s
                }
            });
            var l = n(57642),
                i = n(76521);
            let o = async () => (0, l.TC)((0, i.iU)()),
                r = async (e, t) => {
                    let n = (0, l.tt)(e);
                    if (t.innerHTML = n.html, n.equations.length > 0) {
                        let e = await (0, l.sY)(n.equations, (0, i.iU)());
                        (0, l.BF)(t, e)
                    }
                    return n
                },
                s = async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return await o(), (0, l.c_)(e, {
                        displayMode: t,
                        config: (0, i.iU)()
                    })
                };
            n(89027);
            let d = '\n.math-display {\n  overflow-x: auto;\n  margin: 1em 0;\n  padding: 0.5em 0;\n  text-align: center;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.math-inline {\n  display: inline-flex;\n  vertical-align: middle;\n  margin: 0 0.2em;\n  align-items: center;\n}\n.align-env {\n  overflow-x: auto;\n  padding: 1em 0;\n  margin: 1em 0;\n}\n.align-env mjx-container {\n  margin: 0 !important;\n  padding: 0 1em;\n  min-width: max-content;\n}\nmjx-container {\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  min-height: 2em;\n}\nmjx-container[jax="SVG"] {\n  display: inline-flex !important;\n  overflow-x: auto;\n  overflow-y: hidden;\n  max-width: 100%;\n}\nmjx-container[jax="SVG"] > svg {\n  display: inline-block !important;\n  max-width: 100%;\n  max-height: none;\n  height: auto !important;\n  vertical-align: middle;\n}\n'
        },
        57642: function(e, t, n) {
            n.d(t, {
                BF: function() {
                    return f
                },
                Dh: function() {
                    return p
                },
                TC: function() {
                    return c
                },
                au: function() {
                    return v
                },
                c_: function() {
                    return u
                },
                sY: function() {
                    return m
                },
                tt: function() {
                    return l
                }
            });
            var a = n(76521);
            let l = e => {
                    let t = [],
                        n = 0,
                        a = e;
                    return {
                        html: a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = a.replace(/\$\$([\s\S]*?)\$\$/g, (e, a) => {
                            let l = "equation-".concat(n++);
                            return t.push({
                                id: l,
                                latex: a.trim(),
                                displayMode: !0
                            }), '<div id="'.concat(l, '" class="math-display"></div>')
                        })).replace(/\\\[([\s\S]*?)\\\]/g, (e, a) => {
                            let l = "equation-".concat(n++);
                            return t.push({
                                id: l,
                                latex: a.trim(),
                                displayMode: !0
                            }), '<div id="'.concat(l, '" class="math-display"></div>')
                        })).replace(/\\begin\{equation\}([\s\S]*?)\\end\{equation\}/g, e => {
                            let a = "equation-".concat(n++);
                            return t.push({
                                id: a,
                                latex: e.trim(),
                                displayMode: !0
                            }), '<div id="'.concat(a, '" class="math-display"></div>')
                        })).replace(/\\begin\{align\*\}([\s\S]*?)\\end\{align\*\}/g, e => {
                            let a = "equation-".concat(n++);
                            return t.push({
                                id: a,
                                latex: e.trim(),
                                displayMode: !0
                            }), '<div id="'.concat(a, '" class="math-display align-env"></div>')
                        })).replace(/\$([^$\n]+?)\$/g, (e, a) => {
                            if (a.includes("$")) return "$".concat(a, "$");
                            let l = "equation-".concat(n++);
                            return t.push({
                                id: l,
                                latex: a.trim(),
                                displayMode: !1
                            }), '<span id="'.concat(l, '" class="math-inline"></span>')
                        })).replace(/\\\((.*?)\\\)/g, (e, a) => {
                            let l = "equation-".concat(n++);
                            return t.push({
                                id: l,
                                latex: a.trim(),
                                displayMode: !1
                            }), '<span id="'.concat(l, '" class="math-inline"></span>')
                        })).replace(/^# (.*$)/gm, "<h1>$1</h1>").replace(/^## (.*$)/gm, "<h2>$1</h2>").replace(/^### (.*$)/gm, "<h3>$1</h3>")).replace(/^\s*[-*+] (.*)$/gm, (e, t) => e.startsWith("<") ? e : "<li>".concat(t, "</li>"))).replace(/(<li>.*<\/li>\n?)+/g, e => e.includes("<pre") || e.includes("<code") || e.includes("<ul") || e.includes("<ol") ? e : '<ul class="list-disc pl-6 space-y-2">' + e + "</ul>")).replace(/(\d+\.\s+)\*\*(.*?)\*\*/g, '<h3 class="step-title">$1$2</h3>')).replace(/```([\s\S]*?)```/g, (e, t) => t.includes('id="equation-') ? e : '<pre class="code-block">'.concat(t.replace(/</g, "&lt;").replace(/>/g, "&gt;"), " </pre>"))).split("\n").map(e => {
                            let t = e.trim();
                            return "" === t || t.startsWith('<div id="equation-') || t.startsWith('<span id="equation-') || t.match(/^<(h[1-6]|ul|ol|li|pre|blockquote|hr|br)/i) ? e : "<p>".concat(e, "</p>")
                        }).join("\n")).replace(/<p>\s*<\/p>/g, "")).replace(/^\s*$/gm, "<br/>")).replace(/(<br\s*\/?>\s*)+/g, "<br/>")).replace(/<p><br\s*\/?><\/p>/g, "<br/>"),
                        equations: t
                    }
                },
                i = {},
                o = null,
                r = () => {
                    let e = document.getElementById("MathJax-script");
                    (null == e ? void 0 : e.parentNode) && e.parentNode.removeChild(e);
                    let t = document.getElementById("MathJax-script-fallback");
                    (null == t ? void 0 : t.parentNode) && t.parentNode.removeChild(t), window.MathJax && delete window.MathJax
                },
                s = () => {
                    let e = document.querySelector("base[href]");
                    return (null == e ? void 0 : e.href) ? e.href : "".concat(window.location.origin, "/")
                },
                d = e => new URL(e.replace(/^\/+/, ""), s()).toString(),
                c = e => {
                    var t, n, l, s, c, u, m, f, p, v, x, g, h, y, w, b, N, j, M, k, z, C, J, $, R, S, E, I, _, A, P, q, F, D, T, V, Z, B, O, Y, U, L, W, H, G, Q, X, K, ee, et, en, ea, el, ei, eo, er, es, ed, ec, eu, em, ef, ep, ev, ex, eg, eh, ey, ew, eb, eN, ej, eM, ek, ez, eC, eJ, e$, eR, eS, eE, eI, e_, eA, eP, eq, eF, eD, eT, eV, eZ, eB;
                    let eO = (0, a.dm)(),
                        eY = { ...eO,
                            ...e,
                            tex: {
                                inlineMath: null !== (H = null !== (W = null == e ? void 0 : null === (t = e.tex) || void 0 === t ? void 0 : t.inlineMath) && void 0 !== W ? W : null === (n = eO.tex) || void 0 === n ? void 0 : n.inlineMath) && void 0 !== H ? H : [
                                    ["$", "$"]
                                ],
                                displayMath: null !== (Q = null !== (G = null == e ? void 0 : null === (l = e.tex) || void 0 === l ? void 0 : l.displayMath) && void 0 !== G ? G : null === (s = eO.tex) || void 0 === s ? void 0 : s.displayMath) && void 0 !== Q ? Q : [
                                    ["$$", "$$"]
                                ],
                                processEscapes: null === (K = null !== (X = null == e ? void 0 : null === (c = e.tex) || void 0 === c ? void 0 : c.processEscapes) && void 0 !== X ? X : null === (u = eO.tex) || void 0 === u ? void 0 : u.processEscapes) || void 0 === K || K,
                                processEnvironments: null === (et = null !== (ee = null == e ? void 0 : null === (m = e.tex) || void 0 === m ? void 0 : m.processEnvironments) && void 0 !== ee ? ee : null === (f = eO.tex) || void 0 === f ? void 0 : f.processEnvironments) || void 0 === et || et,
                                packages: null !== (ea = null !== (en = null == e ? void 0 : null === (p = e.tex) || void 0 === p ? void 0 : p.packages) && void 0 !== en ? en : null === (v = eO.tex) || void 0 === v ? void 0 : v.packages) && void 0 !== ea ? ea : ["base", "ams", "noerrors", "noundefined", "autoload"],
                                macros: null !== (el = null == e ? void 0 : null === (x = e.tex) || void 0 === x ? void 0 : x.macros) && void 0 !== el ? el : null === (g = eO.tex) || void 0 === g ? void 0 : g.macros,
                                tags: null !== (eo = null !== (ei = null == e ? void 0 : null === (h = e.tex) || void 0 === h ? void 0 : h.tags) && void 0 !== ei ? ei : null === (y = eO.tex) || void 0 === y ? void 0 : y.tags) && void 0 !== eo ? eo : "none"
                            },
                            svg: {
                                fontCache: null !== (es = null !== (er = null == e ? void 0 : null === (w = e.svg) || void 0 === w ? void 0 : w.fontCache) && void 0 !== er ? er : null === (b = eO.svg) || void 0 === b ? void 0 : b.fontCache) && void 0 !== es ? es : "global",
                                scale: null !== (em = null !== (eu = null !== (ec = null !== (ed = null == e ? void 0 : null === (N = e.svg) || void 0 === N ? void 0 : N.scale) && void 0 !== ed ? ed : null == e ? void 0 : e.scale) && void 0 !== ec ? ec : null === (j = eO.svg) || void 0 === j ? void 0 : j.scale) && void 0 !== eu ? eu : eO.scale) && void 0 !== em ? em : a.g5.scale,
                                minScale: null !== (ep = null !== (ef = null == e ? void 0 : null === (M = e.svg) || void 0 === M ? void 0 : M.minScale) && void 0 !== ef ? ef : null === (k = eO.svg) || void 0 === k ? void 0 : k.minScale) && void 0 !== ep ? ep : .8,
                                mtextInheritFont: null === (ex = null !== (ev = null == e ? void 0 : null === (z = e.svg) || void 0 === z ? void 0 : z.mtextInheritFont) && void 0 !== ev ? ev : null === (C = eO.svg) || void 0 === C ? void 0 : C.mtextInheritFont) || void 0 === ex || ex,
                                merrorInheritFont: null === (eh = null !== (eg = null == e ? void 0 : null === (J = e.svg) || void 0 === J ? void 0 : J.merrorInheritFont) && void 0 !== eg ? eg : null === ($ = eO.svg) || void 0 === $ ? void 0 : $.merrorInheritFont) || void 0 === eh || eh,
                                mathmlSpacing: null === (ew = null !== (ey = null == e ? void 0 : null === (R = e.svg) || void 0 === R ? void 0 : R.mathmlSpacing) && void 0 !== ey ? ey : null === (S = eO.svg) || void 0 === S ? void 0 : S.mathmlSpacing) || void 0 === ew || ew,
                                skipAttributes: null !== (eN = null !== (eb = null == e ? void 0 : null === (E = e.svg) || void 0 === E ? void 0 : E.skipAttributes) && void 0 !== eb ? eb : null === (I = eO.svg) || void 0 === I ? void 0 : I.skipAttributes) && void 0 !== eN ? eN : {},
                                exFactor: null !== (eM = null !== (ej = null == e ? void 0 : null === (_ = e.svg) || void 0 === _ ? void 0 : _.exFactor) && void 0 !== ej ? ej : null === (A = eO.svg) || void 0 === A ? void 0 : A.exFactor) && void 0 !== eM ? eM : .5,
                                displayAlign: null !== (eJ = null !== (eC = null !== (ez = null !== (ek = null == e ? void 0 : null === (P = e.svg) || void 0 === P ? void 0 : P.displayAlign) && void 0 !== ek ? ek : null == e ? void 0 : e.displayAlign) && void 0 !== ez ? ez : null === (q = eO.svg) || void 0 === q ? void 0 : q.displayAlign) && void 0 !== eC ? eC : eO.displayAlign) && void 0 !== eJ ? eJ : a.g5.displayAlign,
                                displayIndent: null !== (eE = null !== (eS = null !== (eR = null !== (e$ = null == e ? void 0 : null === (F = e.svg) || void 0 === F ? void 0 : F.displayIndent) && void 0 !== e$ ? e$ : null == e ? void 0 : e.displayIndent) && void 0 !== eR ? eR : null === (D = eO.svg) || void 0 === D ? void 0 : D.displayIndent) && void 0 !== eS ? eS : eO.displayIndent) && void 0 !== eE ? eE : a.g5.displayIndent,
                                localID: null !== (e_ = null !== (eI = null == e ? void 0 : null === (T = e.svg) || void 0 === T ? void 0 : T.localID) && void 0 !== eI ? eI : null === (V = eO.svg) || void 0 === V ? void 0 : V.localID) && void 0 !== e_ ? e_ : null,
                                internalSpeechTitles: null !== (eP = null !== (eA = null == e ? void 0 : null === (Z = e.svg) || void 0 === Z ? void 0 : Z.internalSpeechTitles) && void 0 !== eA ? eA : null === (B = eO.svg) || void 0 === B ? void 0 : B.internalSpeechTitles) && void 0 !== eP && eP,
                                titleID: null !== (eF = null !== (eq = null == e ? void 0 : null === (O = e.svg) || void 0 === O ? void 0 : O.titleID) && void 0 !== eq ? eq : null === (Y = eO.svg) || void 0 === Y ? void 0 : Y.titleID) && void 0 !== eF ? eF : 0
                            },
                            startup: {
                                typeset: null !== (eT = null !== (eD = null == e ? void 0 : null === (U = e.startup) || void 0 === U ? void 0 : U.typeset) && void 0 !== eD ? eD : null === (L = eO.startup) || void 0 === L ? void 0 : L.typeset) && void 0 !== eT && eT
                            }
                        },
                        eU = JSON.stringify({
                            enableMenu: null !== (eV = eY.enableMenu) && void 0 !== eV && eV,
                            zoom: null !== (eZ = eY.zoom) && void 0 !== eZ ? eZ : eO.zoom,
                            rawSvgOutput: null !== (eB = eY.rawSvgOutput) && void 0 !== eB && eB,
                            tex: eY.tex,
                            svg: eY.svg
                        });
                    return window.MathJax && "function" == typeof window.MathJax.typesetPromise && o === eU ? Promise.resolve() : (window.MathJax && "function" == typeof window.MathJax.typesetPromise && o !== eU && (r(), o = null), i[eU] || (i[eU] = new Promise((e, t) => {
                        let n = () => {
                            delete i[eU]
                        };
                        try {
                            var a, l, s, c, u, m, f, p;
                            window.MathJax || (window.MathJax = {});
                            let e = {
                                loader: {
                                    load: ["input/tex", "output/svg"]
                                },
                                tex: {
                                    inlineMath: null === (a = eY.tex) || void 0 === a ? void 0 : a.inlineMath,
                                    displayMath: null === (l = eY.tex) || void 0 === l ? void 0 : l.displayMath,
                                    processEscapes: null === (s = eY.tex) || void 0 === s ? void 0 : s.processEscapes,
                                    processEnvironments: null === (c = eY.tex) || void 0 === c ? void 0 : c.processEnvironments,
                                    packages: null === (u = eY.tex) || void 0 === u ? void 0 : u.packages,
                                    tags: null === (m = eY.tex) || void 0 === m ? void 0 : m.tags,
                                    ...(null === (f = eY.tex) || void 0 === f ? void 0 : f.macros) ? {
                                        macros: eY.tex.macros
                                    } : {}
                                },
                                svg: eY.svg,
                                options: {
                                    enableMenu: eY.enableMenu
                                },
                                menuOptions: {
                                    settings: {
                                        zoom: eY.zoom,
                                        zscale: eY.zscale
                                    }
                                },
                                startup: {
                                    typeset: null === (p = eY.startup) || void 0 === p ? void 0 : p.typeset,
                                    ready: () => {
                                        window.MathJax.startup && "function" == typeof window.MathJax.startup.defaultReady && window.MathJax.startup.defaultReady()
                                    }
                                }
                            };
                            Object.assign(window.MathJax, e)
                        } catch (e) {
                            console.error("Failed to initialize MathJax configuration:", e), n(), t(e);
                            return
                        }
                        let v = () => {
                                o = eU, n(), e()
                            },
                            x = e => {
                                console.warn("MathJax CDN failed to load. Falling back to local version.", e);
                                let a = "MathJax-script-fallback",
                                    l = document.getElementById(a);
                                l || ((l = document.createElement("script")).id = a, l.async = !0), l.src = d("lib/MathJax/tex-svg.js"), l.onload = v, l.onerror = e => {
                                    n(), r(), o = null, console.error("Local MathJax fallback also failed to load.", e), t(e)
                                }, l.parentNode || document.head.appendChild(l)
                            },
                            g = "MathJax-script",
                            h = document.getElementById(g);
                        h || ((h = document.createElement("script")).id = g, h.async = !0, h.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js", document.head.appendChild(h)), h.onload = v, h.onerror = e => {
                            r(), x(e)
                        }
                    }), i[eU]))
                },
                u = async (e, t) => {
                    try {
                        let i = (null == t ? void 0 : t.displayMode) !== void 0 && t.displayMode;
                        window.MathJax || await c(null == t ? void 0 : t.config);
                        let o = document.createElement("div");
                        o.style.visibility = "hidden", o.style.position = "absolute", o.style.left = "-99999px", document.body.appendChild(o);
                        try {
                            let o = (await window.MathJax.tex2svgPromise(e, {
                                display: i
                            })).getElementsByTagName("svg")[0];
                            if (o) {
                                var n, a, l;
                                o.setAttribute("role", "img"), o.setAttribute("focusable", "false"), o.setAttribute("aria-hidden", "true");
                                let e = null === (a = window.MathJax) || void 0 === a ? void 0 : null === (n = a.startup) || void 0 === n ? void 0 : n.adaptor,
                                    r = (() => {
                                        var n;
                                        let a = e ? e.outerHTML(o) : o.outerHTML;
                                        if (!(null == t ? void 0 : null === (n = t.config) || void 0 === n ? void 0 : n.rawSvgOutput)) return a;
                                        let l = a.match(/viewBox="([^"]+)"/);
                                        if (l) {
                                            let [e, t, n, i] = l[1].split(/\s+/).map(Number);
                                            if (!Number.isNaN(t)) return a.replace(/viewBox="[^"]+"/, 'viewBox="'.concat(e, " ").concat(t - 100, " ").concat(n, " ").concat(i + 100, '"'))
                                        }
                                        return a
                                    })();
                                if ((null == t ? void 0 : null === (l = t.config) || void 0 === l ? void 0 : l.rawSvgOutput) === !0) return r;
                                let s = ['class="MathJax"', 'jax="SVG"', i ? 'display="block"' : 'display="inline"'].join(" ");
                                return "<mjx-container ".concat(s, ">").concat(r, "</mjx-container>")
                            }
                            return ""
                        } finally {
                            document.body.removeChild(o)
                        }
                    } catch (n) {
                        return console.error('Error rendering LaTeX "'.concat(e, '" (display=').concat(null == t ? void 0 : t.displayMode, "):"), n), '<span style="color: red; border: 1px solid red; padding: 2px;">Render Error: '.concat(n instanceof Error ? n.message : String(n), "</span>")
                    }
                },
                m = async (e, t) => {
                    let n = {};
                    for (let a of (window.MathJax || await c(t), e)) {
                        let e = await u(a.latex, {
                            displayMode: a.displayMode,
                            config: t
                        });
                        n[a.id] = e
                    }
                    return n
                },
                f = (e, t) => {
                    for (let [n, a] of Object.entries(t)) {
                        let t = e.querySelector("#".concat(n));
                        t && (t.innerHTML = a)
                    }
                },
                p = e => e.includes("\\begin{") || e.includes("\\]") || e.includes("\\[") || e.includes("$$"),
                v = async e => {
                    try {
                        if (window.MathJax && "function" == typeof window.MathJax.typesetPromise) await window.MathJax.typesetPromise(e);
                        else {
                            if (console.warn("MathJax typesetPromise not available, skipping typeset"), window.MathJax && !window.MathJax.typesetPromise) {
                                console.log("MathJax is loading, waiting for initialization...");
                                let t = 0;
                                for (; t < 50;) {
                                    if (window.MathJax && "function" == typeof window.MathJax.typesetPromise) {
                                        console.log("MathJax is now ready, proceeding with typeset"), await window.MathJax.typesetPromise(e);
                                        return
                                    }
                                    await new Promise(e => setTimeout(e, 100)), t++
                                }
                                console.warn("MathJax initialization timeout after 5 seconds")
                            }
                            try {
                                console.log("Attempting to reload MathJax..."), await c(), window.MathJax && "function" == typeof window.MathJax.typesetPromise ? await window.MathJax.typesetPromise(e) : console.error("MathJax typesetPromise still not available after reload")
                            } catch (e) {
                                console.error("Failed to reload MathJax:", e)
                            }
                        }
                    } catch (e) {
                        console.error("MathJax typeset failed:", e), e instanceof Error && console.error("Error details:", {
                            message: e.message,
                            stack: e.stack,
                            mathJaxExists: !!window.MathJax,
                            typesetPromiseAvailable: !!(window.MathJax && "function" == typeof window.MathJax.typesetPromise)
                        }), window.MathJax && (window.MathJax._lastError = e)
                    }
                }
        },
        10722: function(e, t, n) {
            n.d(t, {
                cn: function() {
                    return i
                }
            });
            var a = n(1349),
                l = n(10914);

            function i() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, l.m6)((0, a.W)(t))
            }
        }
    }
]);