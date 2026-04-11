(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [858], {
        57628: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 3663)), Promise.resolve().then(a.bind(a, 92315)), Promise.resolve().then(a.bind(a, 3353)), Promise.resolve().then(a.bind(a, 53443)), Promise.resolve().then(a.bind(a, 75079))
        },
        3663: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                AutoLoginListener: function() {
                    return i
                }
            });
            var s = a(57420),
                r = a(83839),
                n = a(90978);

            function i() {
                return ! function() {
                    let e = (0, r.useSearchParams)();
                    (0, r.useRouter)();
                    let {
                        update: t
                    } = (0, n.kP)(), [a, i] = (0, s.useState)(!1), l = (0, s.useRef)(!1), o = (0, s.useRef)(null);
                    (0, s.useEffect)(() => {
                        (async () => {
                            let a = e.get("token");
                            if (a && !l.current && o.current !== a) {
                                if (!a.startsWith("eyJ")) {
                                    console.warn("[AUTO-LOGIN] Invalid token format"), d();
                                    return
                                }
                                l.current = !0, o.current = a, i(!0);
                                try {
                                    console.log("[AUTO-LOGIN] Processing token login...");
                                    let e = await fetch("/api/auth/gas-verify", {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json",
                                                "X-Token-Auto-Login": "true"
                                            },
                                            body: JSON.stringify({
                                                token: a
                                            })
                                        }),
                                        s = await e.json();
                                    if (0 === s.code && s.data.user) {
                                        console.log("[AUTO-LOGIN] Token verified for user:", s.data.user.email);
                                        let e = await (0, n.zB)("gas-token", {
                                            email: s.data.user.email,
                                            uuid: s.data.user.uuid,
                                            name: s.data.user.name,
                                            authType: s.data.user.authType,
                                            gasProjectId: s.data.user.gasProjectId,
                                            permissions: JSON.stringify(s.data.user.permissions || []),
                                            redirect: !1
                                        });
                                        (null == e ? void 0 : e.ok) ? (console.log("[AUTO-LOGIN] Auto login successful"), await t(), d(), window.location.pathname.includes("/pricing") && setTimeout(() => {
                                            let e = document.getElementById("pricing");
                                            e && e.scrollIntoView({
                                                behavior: "smooth"
                                            })
                                        }, 150)) : (console.error("[AUTO-LOGIN] Sign in failed:", null == e ? void 0 : e.error), d())
                                    } else console.error("[AUTO-LOGIN] Token verification failed:", s.message), d()
                                } catch (e) {
                                    console.error("[AUTO-LOGIN] Token login process failed:", e), d()
                                } finally {
                                    l.current = !1, i(!1)
                                }
                            }
                        })()
                    }, [e, t]);
                    let d = () => {
                        try {
                            let e = new URL(window.location.href);
                            e.searchParams.has("token") && (e.searchParams.delete("token"), e.searchParams.delete("redirect"), window.history.replaceState({}, "", e.toString()))
                        } catch (e) {
                            console.error("[AUTO-LOGIN] Failed to clear URL:", e)
                        }
                    }
                }(), null
            }
        },
        92315: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return l
                }
            });
            var s = a(18243),
                r = a(23709),
                n = a(83839),
                i = a(54592);

            function l(e) {
                var t, a, l, o, d;
                let {
                    footer: c
                } = e;
                if (c.disabled) return null;
                let u = e => !!e && (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")),
                    m = (0, n.usePathname)(),
                    f = m && "/" !== m ? m.replace(/\/$/, "") : m || "",
                    x = !!f && /^\/([a-z-]+\/)?ai-equation-editor$/.test(f),
                    p = null === (a = c.agreement) || void 0 === a ? void 0 : null === (t = a.items) || void 0 === t ? void 0 : t.map(e => x ? "/privacy-policy" === e.url ? { ...e,
                        url: "/ai-equation-editor/privacy-policy"
                    } : "/terms-of-service" === e.url ? { ...e,
                        url: "/ai-equation-editor/terms-of-service"
                    } : "/refund-policy" === e.url ? { ...e,
                        url: "/ai-equation-editor/refund-policy"
                    } : e : e);
                return (0, s.jsx)("section", {
                    "data-site-footer": !0,
                    id: c.name,
                    className: "py-16",
                    children: (0, s.jsx)("div", {
                        className: "max-w-7xl mx-auto px-8",
                        children: (0, s.jsxs)("footer", {
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-col items-center justify-center gap-10 text-center lg:flex-row lg:justify-start lg:text-left",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start lg:w-auto",
                                    children: [c.brand && (0, s.jsxs)("div", {
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex items-center justify-center gap-2 lg:justify-start",
                                            children: [c.brand.logo && (0, s.jsx)("img", {
                                                src: c.brand.logo.src,
                                                alt: c.brand.logo.alt || c.brand.title,
                                                className: "h-11"
                                            }), c.brand.title && (0, s.jsx)("p", {
                                                className: "text-3xl font-semibold",
                                                children: c.brand.title
                                            })]
                                        }), c.brand.description && (0, s.jsx)("p", {
                                            className: "mt-6 text-md text-muted-foreground",
                                            children: c.brand.description
                                        })]
                                    }), c.social && (0, s.jsx)("ul", {
                                        className: "flex items-center space-x-6 text-muted-foreground",
                                        children: null === (l = c.social.items) || void 0 === l ? void 0 : l.map((e, t) => (0, s.jsx)("li", {
                                            className: "font-medium hover:text-primary",
                                            children: (0, s.jsx)("a", {
                                                href: e.url,
                                                target: e.target,
                                                children: e.icon && (0, s.jsx)(r.default, {
                                                    name: e.icon,
                                                    className: "size-4"
                                                })
                                            })
                                        }, t))
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "w-full flex justify-center lg:flex-1 lg:justify-end",
                                    children: (0, s.jsx)("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16",
                                        children: null === (d = c.nav) || void 0 === d ? void 0 : null === (o = d.items) || void 0 === o ? void 0 : o.map((e, t) => {
                                            var a;
                                            return (0, s.jsxs)("div", {
                                                className: "min-w-[200px]",
                                                children: [(0, s.jsx)("p", {
                                                    className: "mb-6 font-bold",
                                                    children: e.title
                                                }), (0, s.jsx)("ul", {
                                                    className: "space-y-4 text-sm text-muted-foreground",
                                                    children: null === (a = e.children) || void 0 === a ? void 0 : a.map((e, t) => (0, s.jsx)("li", {
                                                        className: "font-medium hover:text-primary",
                                                        children: e.html ? (0, s.jsx)("div", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: e.html
                                                            }
                                                        }) : u(e.url) ? (0, s.jsx)("a", {
                                                            href: e.url,
                                                            target: e.target,
                                                            children: e.title
                                                        }) : (0, s.jsx)(i.rU, {
                                                            href: e.url || "/",
                                                            target: e.target,
                                                            children: e.title
                                                        })
                                                    }, t))
                                                })]
                                            }, t)
                                        })
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "mt-8 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left",
                                children: [c.copyright && (0, s.jsx)("p", {
                                    children: c.copyright
                                }), c.agreement && p && (0, s.jsx)("ul", {
                                    className: "flex justify-center gap-4 lg:justify-start",
                                    children: p.map((e, t) => (0, s.jsx)("li", {
                                        className: "hover:text-primary",
                                        children: u(e.url) ? (0, s.jsx)("a", {
                                            href: e.url,
                                            target: e.target,
                                            children: e.title
                                        }) : (0, s.jsx)(i.rU, {
                                            href: e.url || "/",
                                            target: e.target,
                                            children: e.title
                                        })
                                    }, t))
                                })]
                            })]
                        })
                    })
                })
            }
        },
        3353: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return H
                }
            });
            var s = a(18243),
                r = a(27509),
                n = a(23692),
                i = a(57420),
                l = a(71863),
                o = a(16452),
                d = a(17867),
                c = a(10722);
            let u = i.forwardRef((e, t) => {
                let {
                    className: a,
                    children: r,
                    ...n
                } = e;
                return (0, s.jsxs)(l.fC, {
                    ref: t,
                    className: (0, c.cn)("relative z-10 flex max-w-max flex-1 items-center justify-center", a),
                    ...n,
                    children: [r, (0, s.jsx)(v, {})]
                })
            });
            u.displayName = l.fC.displayName;
            let m = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(l.aV, {
                    ref: t,
                    className: (0, c.cn)("group flex flex-1 list-none items-center justify-center space-x-1", a),
                    ...r
                })
            });
            m.displayName = l.aV.displayName;
            let f = l.ck,
                x = (0, o.j)("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),
                p = i.forwardRef((e, t) => {
                    let {
                        className: a,
                        children: r,
                        ...n
                    } = e;
                    return (0, s.jsxs)(l.xz, {
                        ref: t,
                        className: (0, c.cn)(x(), "group", a),
                        ...n,
                        children: [r, " ", (0, s.jsx)(d.Z, {
                            className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
                            "aria-hidden": "true"
                        })]
                    })
                });
            p.displayName = l.xz.displayName;
            let h = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(l.VY, {
                    ref: t,
                    className: (0, c.cn)("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", a),
                    ...r
                })
            });
            h.displayName = l.VY.displayName;
            let g = l.rU,
                v = i.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...r
                    } = e;
                    return (0, s.jsx)("div", {
                        className: (0, c.cn)("absolute left-0 top-full flex justify-center"),
                        children: (0, s.jsx)(l.l_, {
                            className: (0, c.cn)("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", a),
                            ref: t,
                            ...r
                        })
                    })
                });
            v.displayName = l.l_.displayName, i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(l.z$, {
                    ref: t,
                    className: (0, c.cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", a),
                    ...r,
                    children: (0, s.jsx)("div", {
                        className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"
                    })
                })
            }).displayName = l.z$.displayName;
            var j = a(32223),
                N = a(23709),
                y = a(55007),
                b = a(83839),
                w = a(52506),
                k = a(31146),
                A = a(54592);

            function z(e) {
                let {
                    isIcon: t = !1
                } = e, a = (0, b.useParams)().locale, r = (0, A.tv)(), n = (0, A.jD)();
                return (0, s.jsxs)(y.Ph, {
                    value: a,
                    onValueChange: e => {
                        e !== a && r.replace(n, {
                            locale: e
                        })
                    },
                    children: [(0, s.jsxs)(y.i4, {
                        className: "flex items-center gap-x-2 border-none text-muted-foreground outline-none hover:bg-transparent focus:ring-0 focus:ring-offset-0",
                        children: [(0, s.jsx)(w.$lZ, {
                            className: "text-xl"
                        }), !t && (0, s.jsx)("span", {
                            className: "hidden md:block",
                            children: k.he[a]
                        })]
                    }), (0, s.jsx)(y.Bw, {
                        className: "z-50",
                        children: Object.keys(k.he).map(e => {
                            let t = k.he[e];
                            return (0, s.jsx)(y.Ql, {
                                className: "cursor-pointer",
                                value: e,
                                children: t
                            }, e)
                        })
                    })]
                })
            }
            var _ = a(35756),
                R = a(11209),
                P = a(61111);

            function I() {
                let e = (0, P.useTranslations)(),
                    {
                        setShowSignModal: t
                    } = (0, R.b)();
                return (0, s.jsx)(n.z, {
                    variant: "default",
                    onClick: () => t(!0),
                    children: e("user.sign_in")
                })
            }
            var T = a(10633),
                C = a(79362),
                S = a(526),
                U = a(90978),
                E = a(45785),
                D = a(98408),
                O = a(93436),
                F = a(18076),
                G = a(80449),
                V = a(18240),
                Z = a(24434);

            function L(e) {
                var t, a, r;
                let {
                    user: n
                } = e, l = (0, P.useTranslations)(), {
                    setUser: o
                } = (0, R.b)(), d = "true" === Z.env.NEXT_PUBLIC_SHOW_CREDITS_UI, [u, m] = (0, i.useState)((null === (t = n.credits) || void 0 === t ? void 0 : t.left_credits) || 0), [f, x] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    var e;
                    m((null === (e = n.credits) || void 0 === e ? void 0 : e.left_credits) || 0)
                }, [n.credits]);
                let p = async () => {
                    if (!f) {
                        x(!0);
                        try {
                            let e = await V.QC.getUserStatus();
                            m(e.credits.left_credits || 0), o(t => t ? { ...t,
                                credits: e.credits
                            } : t)
                        } catch (e) {
                            console.error("Failed to refresh credits:", e), G.Am.error("Failed to refresh credits, please try again later")
                        } finally {
                            x(!1)
                        }
                    }
                };
                return (0, s.jsxs)(C.h_, {
                    onOpenChange: e => {
                        e && d && p()
                    },
                    children: [(0, s.jsx)(C.$F, {
                        asChild: !0,
                        children: (0, s.jsxs)("div", {
                            className: "flex items-center gap-2 cursor-pointer rounded-full p-1 hover:bg-accent transition-colors",
                            children: [(0, s.jsxs)(T.qE, {
                                className: "h-8 w-8 border",
                                children: [(0, s.jsx)(T.F$, {
                                    src: n.avatar_url,
                                    alt: n.nickname
                                }), (0, s.jsx)(T.Q5, {
                                    children: null === (a = n.nickname) || void 0 === a ? void 0 : a.charAt(0)
                                })]
                            }), (0, s.jsx)("span", {
                                className: "text-sm font-medium hidden sm:inline-block",
                                children: n.nickname
                            })]
                        })
                    }), (0, s.jsxs)(C.AW, {
                        className: "w-56",
                        align: "end",
                        forceMount: !0,
                        children: [(0, s.jsxs)("div", {
                            className: "flex items-center gap-3 p-4",
                            children: [(0, s.jsxs)(T.qE, {
                                className: "h-9 w-9",
                                children: [(0, s.jsx)(T.F$, {
                                    src: n.avatar_url,
                                    alt: n.nickname
                                }), (0, s.jsx)(T.Q5, {
                                    children: null === (r = n.nickname) || void 0 === r ? void 0 : r.charAt(0)
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col space-y-1",
                                children: [(0, s.jsx)("p", {
                                    className: "text-sm font-medium leading-none",
                                    children: n.nickname
                                }), (0, s.jsx)("p", {
                                    className: "text-xs text-muted-foreground truncate max-w-[140px]",
                                    children: n.email
                                })]
                            })]
                        }), d && (0, s.jsx)("div", {
                            className: "px-4 pb-3",
                            children: (0, s.jsxs)("div", {
                                className: (0, c.cn)("flex items-center justify-between px-3 py-2", f && "opacity-70"),
                                children: [(0, s.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, s.jsx)(E.Z, {
                                        className: "h-4 w-4"
                                    }), (0, s.jsx)("span", {
                                        className: "text-sm font-medium",
                                        children: l("user.credits")
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex items-center gap-1",
                                    children: [(0, s.jsx)("span", {
                                        className: "text-sm font-bold",
                                        children: u
                                    }), f && (0, s.jsx)("div", {
                                        className: "h-3 w-3 rounded-full border-2 border-blue-600 border-t-transparent animate-spin"
                                    })]
                                })]
                            })
                        }), (0, s.jsx)(C.VD, {}), (0, s.jsxs)("div", {
                            className: "px-2 py-1",
                            children: [(0, s.jsx)(C.Xi, {
                                asChild: !0,
                                children: (0, s.jsxs)(S.default, {
                                    href: "/my-orders",
                                    className: "flex items-center gap-3 px-2 py-2 rounded-md cursor-pointer hover:bg-accent transition-colors",
                                    children: [(0, s.jsx)(D.Z, {
                                        className: "h-4 w-4"
                                    }), (0, s.jsx)("span", {
                                        className: "text-sm font-medium",
                                        children: l("user.my_orders")
                                    })]
                                })
                            }), d && (0, s.jsx)(C.Xi, {
                                asChild: !0,
                                children: (0, s.jsxs)(S.default, {
                                    href: "/my-credits",
                                    className: "flex items-center gap-3 px-2 py-2 rounded-md cursor-pointer hover:bg-accent transition-colors",
                                    children: [(0, s.jsx)(O.Z, {
                                        className: "h-4 w-4"
                                    }), (0, s.jsx)("span", {
                                        className: "text-sm font-medium",
                                        children: l("my_credits.title")
                                    })]
                                })
                            })]
                        }), (0, s.jsx)(C.VD, {}), (0, s.jsxs)(C.Xi, {
                            className: "flex items-center gap-3 px-2 py-2 text-destructive focus:text-destructive cursor-pointer",
                            onClick: () => (0, U.w7)(),
                            children: [(0, s.jsx)(F.Z, {
                                className: "h-4 w-4"
                            }), (0, s.jsx)("span", {
                                className: "text-sm font-medium",
                                children: l("user.sign_out")
                            })]
                        })]
                    })]
                })
            }

            function W() {
                (0, P.useTranslations)();
                let {
                    user: e
                } = (0, R.b)();
                return (0, s.jsx)("div", {
                    className: "flex items-center gap-x-2 px-2",
                    children: e ? (0, s.jsx)(L, {
                        user: e
                    }) : (0, s.jsx)(I, {})
                })
            }
            var $ = a(92152),
                q = a(52658),
                Y = a(45450);

            function B() {
                let {
                    theme: e,
                    setTheme: t
                } = (0, R.b)(), a = function(a) {
                    a !== e && ((0, Y.lK)(q.r.Theme, a, -1), t(a))
                };
                return (0, s.jsx)("div", {
                    className: "flex items-center gap-x-2 px-2",
                    children: "dark" === e ? (0, s.jsx)($.eSY, {
                        className: "cursor-pointer text-lg text-muted-foreground",
                        onClick: () => a("light"),
                        width: 80,
                        height: 20
                    }) : (0, s.jsx)($.pwr, {
                        className: "cursor-pointer text-lg text-muted-foreground",
                        onClick: () => a("dark"),
                        width: 80,
                        height: 20
                    })
                })
            }

            function H(e) {
                var t, a, i, l, o, d, v, y, b, w, k, R, P, I, T, C, S, U, E, D, O, F, G, V, Z;
                let {
                    header: L
                } = e;
                if (L.disabled) return null;
                let $ = e => !!e && (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:"));
                return (0, s.jsx)("section", {
                    "data-site-header": !0,
                    className: "py-3",
                    children: (0, s.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-4",
                        children: [(0, s.jsxs)("nav", {
                            className: "hidden justify-between lg:flex",
                            children: [(0, s.jsxs)("div", {
                                className: "flex items-center gap-6",
                                children: [$(null === (t = L.brand) || void 0 === t ? void 0 : t.url) ? (0, s.jsxs)("a", {
                                    href: (null === (a = L.brand) || void 0 === a ? void 0 : a.url) || "",
                                    className: "flex items-center gap-2",
                                    children: [(null === (l = L.brand) || void 0 === l ? void 0 : null === (i = l.logo) || void 0 === i ? void 0 : i.src) && (0, s.jsx)("img", {
                                        src: L.brand.logo.src,
                                        alt: L.brand.logo.alt || L.brand.title,
                                        className: "w-8"
                                    }), (null === (o = L.brand) || void 0 === o ? void 0 : o.title) && (0, s.jsx)("span", {
                                        className: "text-xl text-primary font-bold",
                                        children: (null === (d = L.brand) || void 0 === d ? void 0 : d.title) || ""
                                    })]
                                }) : (0, s.jsxs)(A.rU, {
                                    href: (null === (v = L.brand) || void 0 === v ? void 0 : v.url) || "/",
                                    className: "flex items-center gap-2",
                                    children: [(null === (b = L.brand) || void 0 === b ? void 0 : null === (y = b.logo) || void 0 === y ? void 0 : y.src) && (0, s.jsx)("img", {
                                        src: L.brand.logo.src,
                                        alt: L.brand.logo.alt || L.brand.title,
                                        className: "w-8"
                                    }), (null === (w = L.brand) || void 0 === w ? void 0 : w.title) && (0, s.jsx)("span", {
                                        className: "text-xl text-primary font-bold",
                                        children: (null === (k = L.brand) || void 0 === k ? void 0 : k.title) || ""
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "flex items-center",
                                    children: (0, s.jsx)(u, {
                                        children: (0, s.jsx)(m, {
                                            children: null === (P = L.nav) || void 0 === P ? void 0 : null === (R = P.items) || void 0 === R ? void 0 : R.map((e, t) => e.children && e.children.length > 0 ? (0, s.jsxs)(f, {
                                                className: "text-muted-foreground",
                                                children: [(0, s.jsxs)(p, {
                                                    children: [e.icon && (0, s.jsx)(N.default, {
                                                        name: e.icon,
                                                        className: "size-4 shrink-0 mr-2"
                                                    }), (0, s.jsx)("span", {
                                                        children: e.title
                                                    })]
                                                }), (0, s.jsx)(h, {
                                                    children: (0, s.jsx)("ul", {
                                                        className: "w-80 p-3",
                                                        children: (0, s.jsx)(g, {
                                                            children: e.children.map((e, t) => (0, s.jsx)("li", {
                                                                children: $(e.url) ? (0, s.jsxs)("a", {
                                                                    className: (0, c.cn)("flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"),
                                                                    href: e.url,
                                                                    target: e.target,
                                                                    children: [e.icon && (0, s.jsx)(N.default, {
                                                                        name: e.icon,
                                                                        className: "size-5 shrink-0"
                                                                    }), (0, s.jsxs)("div", {
                                                                        children: [(0, s.jsx)("div", {
                                                                            className: "text-sm font-semibold",
                                                                            children: e.title
                                                                        }), (0, s.jsx)("p", {
                                                                            className: "text-sm leading-snug text-muted-foreground",
                                                                            children: e.description
                                                                        })]
                                                                    })]
                                                                }) : (0, s.jsxs)(A.rU, {
                                                                    className: (0, c.cn)("flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"),
                                                                    href: e.url || "/",
                                                                    target: e.target,
                                                                    children: [e.icon && (0, s.jsx)(N.default, {
                                                                        name: e.icon,
                                                                        className: "size-5 shrink-0"
                                                                    }), (0, s.jsxs)("div", {
                                                                        children: [(0, s.jsx)("div", {
                                                                            className: "text-sm font-semibold",
                                                                            children: e.title
                                                                        }), (0, s.jsx)("p", {
                                                                            className: "text-sm leading-snug text-muted-foreground",
                                                                            children: e.description
                                                                        })]
                                                                    })]
                                                                })
                                                            }, t))
                                                        })
                                                    })
                                                })]
                                            }, t) : (0, s.jsx)(f, {
                                                children: $(e.url) ? (0, s.jsxs)("a", {
                                                    className: (0, c.cn)("text-muted-foreground", x, (0, n.d)({
                                                        variant: "ghost"
                                                    })),
                                                    href: e.url,
                                                    target: e.target,
                                                    children: [e.icon && (0, s.jsx)(N.default, {
                                                        name: e.icon,
                                                        className: "size-4 shrink-0 mr-0"
                                                    }), e.title]
                                                }) : (0, s.jsxs)(A.rU, {
                                                    className: (0, c.cn)("text-muted-foreground", x, (0, n.d)({
                                                        variant: "ghost"
                                                    })),
                                                    href: e.url || "/",
                                                    target: e.target,
                                                    children: [e.icon && (0, s.jsx)(N.default, {
                                                        name: e.icon,
                                                        className: "size-4 shrink-0 mr-0"
                                                    }), e.title]
                                                })
                                            }, t))
                                        })
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "shrink-0 flex gap-2 items-center",
                                children: [L.show_locale && (0, s.jsx)(z, {}), L.show_theme && (0, s.jsx)(B, {}), null === (I = L.buttons) || void 0 === I ? void 0 : I.map((e, t) => (0, s.jsx)(n.z, {
                                    variant: e.variant,
                                    children: $(e.url) ? (0, s.jsxs)("a", {
                                        href: e.url || "",
                                        target: e.target || "",
                                        className: "flex items-center gap-1",
                                        children: [e.title, e.icon && (0, s.jsx)(N.default, {
                                            name: e.icon,
                                            className: "size-4 shrink-0"
                                        })]
                                    }) : (0, s.jsxs)(A.rU, {
                                        href: e.url || "/",
                                        target: e.target || "",
                                        className: "flex items-center gap-1",
                                        children: [e.title, e.icon && (0, s.jsx)(N.default, {
                                            name: e.icon,
                                            className: "size-4 shrink-0"
                                        })]
                                    })
                                }, t)), L.show_sign && (0, s.jsx)(W, {})]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "block lg:hidden",
                            children: (0, s.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(null === (C = L.brand) || void 0 === C ? void 0 : null === (T = C.logo) || void 0 === T ? void 0 : T.src) && (0, s.jsx)("img", {
                                        src: L.brand.logo.src,
                                        alt: L.brand.logo.alt || L.brand.title,
                                        className: "w-8"
                                    }), (null === (S = L.brand) || void 0 === S ? void 0 : S.title) && (0, s.jsx)("span", {
                                        className: "text-xl font-bold",
                                        children: (null === (U = L.brand) || void 0 === U ? void 0 : U.title) || ""
                                    })]
                                }), (0, s.jsxs)(j.yo, {
                                    children: [(0, s.jsx)(j.aM, {
                                        asChild: !0,
                                        children: (0, s.jsx)(n.z, {
                                            variant: "default",
                                            size: "icon",
                                            children: (0, s.jsx)(_.Z, {
                                                className: "size-2"
                                            })
                                        })
                                    }), (0, s.jsxs)(j.ue, {
                                        className: "overflow-y-auto",
                                        children: [(0, s.jsx)(j.Tu, {
                                            children: (0, s.jsx)(j.bC, {
                                                children: (0, s.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [(null === (D = L.brand) || void 0 === D ? void 0 : null === (E = D.logo) || void 0 === E ? void 0 : E.src) && (0, s.jsx)("img", {
                                                        src: L.brand.logo.src,
                                                        alt: L.brand.logo.alt || L.brand.title,
                                                        className: "w-8"
                                                    }), (null === (O = L.brand) || void 0 === O ? void 0 : O.title) && (0, s.jsx)("span", {
                                                        className: "text-xl font-bold",
                                                        children: (null === (F = L.brand) || void 0 === F ? void 0 : F.title) || ""
                                                    })]
                                                })
                                            })
                                        }), (0, s.jsx)("div", {
                                            className: "mb-8 mt-8 flex flex-col gap-4",
                                            children: (0, s.jsx)(r.UQ, {
                                                type: "single",
                                                collapsible: !0,
                                                className: "w-full",
                                                children: null === (V = L.nav) || void 0 === V ? void 0 : null === (G = V.items) || void 0 === G ? void 0 : G.map((e, t) => e.children && e.children.length > 0 ? (0, s.jsxs)(r.Qd, {
                                                    value: e.title || "",
                                                    className: "border-b-0",
                                                    children: [(0, s.jsx)(r.o4, {
                                                        className: "mb-4 py-0 font-semibold hover:no-underline text-left",
                                                        children: e.title
                                                    }), (0, s.jsx)(r.vF, {
                                                        className: "mt-2",
                                                        children: e.children.map((e, t) => $(e.url) ? (0, s.jsxs)("a", {
                                                            className: (0, c.cn)("flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"),
                                                            href: e.url,
                                                            target: e.target,
                                                            children: [e.icon && (0, s.jsx)(N.default, {
                                                                name: e.icon,
                                                                className: "size-4 shrink-0"
                                                            }), (0, s.jsxs)("div", {
                                                                children: [(0, s.jsx)("div", {
                                                                    className: "text-sm font-semibold",
                                                                    children: e.title
                                                                }), (0, s.jsx)("p", {
                                                                    className: "text-sm leading-snug text-muted-foreground",
                                                                    children: e.description
                                                                })]
                                                            })]
                                                        }, t) : (0, s.jsxs)(A.rU, {
                                                            className: (0, c.cn)("flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"),
                                                            href: e.url || "/",
                                                            target: e.target,
                                                            children: [e.icon && (0, s.jsx)(N.default, {
                                                                name: e.icon,
                                                                className: "size-4 shrink-0"
                                                            }), (0, s.jsxs)("div", {
                                                                children: [(0, s.jsx)("div", {
                                                                    className: "text-sm font-semibold",
                                                                    children: e.title
                                                                }), (0, s.jsx)("p", {
                                                                    className: "text-sm leading-snug text-muted-foreground",
                                                                    children: e.description
                                                                })]
                                                            })]
                                                        }, t))
                                                    })]
                                                }, t) : $(e.url) ? (0, s.jsxs)("a", {
                                                    href: e.url,
                                                    target: e.target,
                                                    className: "font-semibold my-4 flex items-center gap-2",
                                                    children: [e.title, e.icon && (0, s.jsx)(N.default, {
                                                        name: e.icon,
                                                        className: "size-4 shrink-0"
                                                    })]
                                                }, t) : (0, s.jsxs)(A.rU, {
                                                    href: e.url || "/",
                                                    target: e.target,
                                                    className: "font-semibold my-4 flex items-center gap-2",
                                                    children: [e.title, e.icon && (0, s.jsx)(N.default, {
                                                        name: e.icon,
                                                        className: "size-4 shrink-0"
                                                    })]
                                                }, t))
                                            })
                                        }), (0, s.jsx)("div", {
                                            className: "flex-1"
                                        }), (0, s.jsxs)("div", {
                                            className: "border-t pt-4",
                                            children: [(0, s.jsxs)("div", {
                                                className: "mt-2 flex flex-col gap-3",
                                                children: [null === (Z = L.buttons) || void 0 === Z ? void 0 : Z.map((e, t) => (0, s.jsx)(n.z, {
                                                    variant: e.variant,
                                                    children: $(e.url) ? (0, s.jsxs)("a", {
                                                        href: e.url || "",
                                                        target: e.target || "",
                                                        className: "flex items-center gap-1",
                                                        children: [e.title, e.icon && (0, s.jsx)(N.default, {
                                                            name: e.icon,
                                                            className: "size-4 shrink-0"
                                                        })]
                                                    }) : (0, s.jsxs)(A.rU, {
                                                        href: e.url || "/",
                                                        target: e.target || "",
                                                        className: "flex items-center gap-1",
                                                        children: [e.title, e.icon && (0, s.jsx)(N.default, {
                                                            name: e.icon,
                                                            className: "size-4 shrink-0"
                                                        })]
                                                    })
                                                }, t)), L.show_sign && (0, s.jsx)(W, {})]
                                            }), (0, s.jsxs)("div", {
                                                className: "mt-4 flex items-center gap-2",
                                                children: [L.show_locale && (0, s.jsx)(z, {}), (0, s.jsx)("div", {
                                                    className: "flex-1"
                                                }), L.show_theme && (0, s.jsx)(B, {})]
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }
        },
        23709: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var s = a(18243),
                r = a(97479),
                n = a(84726),
                i = a(12428);
            r.RiRobot2Line;
            let l = {
                Hi: n,
                Hi2: i,
                Ri: r
            };

            function o(e) {
                let {
                    name: t,
                    className: a
                } = e, r = function(e) {
                    let t = l[e.slice(0, 2)];
                    return t && t[e] || null
                }(t);
                return r ? (0, s.jsx)(r, {
                    className: a
                }) : null
            }
        },
        27509: function(e, t, a) {
            "use strict";
            a.d(t, {
                Qd: function() {
                    return d
                },
                UQ: function() {
                    return o
                },
                o4: function() {
                    return c
                },
                vF: function() {
                    return u
                }
            });
            var s = a(18243),
                r = a(57420),
                n = a(78068),
                i = a(17867),
                l = a(10722);
            let o = n.fC,
                d = r.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...r
                    } = e;
                    return (0, s.jsx)(n.ck, {
                        ref: t,
                        className: (0, l.cn)("border-b", a),
                        ...r
                    })
                });
            d.displayName = "AccordionItem";
            let c = r.forwardRef((e, t) => {
                let {
                    className: a,
                    children: r,
                    ...o
                } = e;
                return (0, s.jsx)(n.h4, {
                    className: "flex",
                    children: (0, s.jsxs)(n.xz, {
                        ref: t,
                        className: (0, l.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", a),
                        ...o,
                        children: [r, (0, s.jsx)(i.Z, {
                            className: "h-4 w-4 shrink-0 transition-transform duration-200"
                        })]
                    })
                })
            });
            c.displayName = n.xz.displayName;
            let u = r.forwardRef((e, t) => {
                let {
                    className: a,
                    children: r,
                    ...i
                } = e;
                return (0, s.jsx)(n.VY, {
                    ref: t,
                    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                    ...i,
                    children: (0, s.jsx)("div", {
                        className: (0, l.cn)("pb-4 pt-0", a),
                        children: r
                    })
                })
            });
            u.displayName = n.VY.displayName
        },
        10633: function(e, t, a) {
            "use strict";
            a.d(t, {
                F$: function() {
                    return o
                },
                Q5: function() {
                    return d
                },
                qE: function() {
                    return l
                }
            });
            var s = a(18243),
                r = a(57420),
                n = a(17769),
                i = a(10722);
            let l = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.fC, {
                    ref: t,
                    className: (0, i.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", a),
                    ...r
                })
            });
            l.displayName = n.fC.displayName;
            let o = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.Ee, {
                    ref: t,
                    className: (0, i.cn)("aspect-square h-full w-full", a),
                    ...r
                })
            });
            o.displayName = n.Ee.displayName;
            let d = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.NY, {
                    ref: t,
                    className: (0, i.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted", a),
                    ...r
                })
            });
            d.displayName = n.NY.displayName
        },
        23692: function(e, t, a) {
            "use strict";
            a.d(t, {
                d: function() {
                    return o
                },
                z: function() {
                    return d
                }
            });
            var s = a(18243),
                r = a(57420),
                n = a(62585),
                i = a(16452),
                l = a(10722);
            let o = (0, i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
                d = r.forwardRef((e, t) => {
                    let {
                        className: a,
                        variant: r,
                        size: i,
                        asChild: d = !1,
                        ...c
                    } = e, u = d ? n.g7 : "button";
                    return (0, s.jsx)(u, {
                        className: (0, l.cn)(o({
                            variant: r,
                            size: i,
                            className: a
                        })),
                        ref: t,
                        ...c
                    })
                });
            d.displayName = "Button"
        },
        79362: function(e, t, a) {
            "use strict";
            a.d(t, {
                $F: function() {
                    return u
                },
                AW: function() {
                    return m
                },
                Ju: function() {
                    return x
                },
                VD: function() {
                    return p
                },
                Xi: function() {
                    return f
                },
                h_: function() {
                    return c
                }
            });
            var s = a(18243),
                r = a(57420),
                n = a(51496),
                i = a(73908),
                l = a(80115),
                o = a(37138),
                d = a(10722);
            let c = n.fC,
                u = n.xz;
            n.ZA, n.Uv, n.Tr, n.Ee, r.forwardRef((e, t) => {
                let {
                    className: a,
                    inset: r,
                    children: l,
                    ...o
                } = e;
                return (0, s.jsxs)(n.fF, {
                    ref: t,
                    className: (0, d.cn)("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", r && "pl-8", a),
                    ...o,
                    children: [l, (0, s.jsx)(i.Z, {
                        className: "ml-auto"
                    })]
                })
            }).displayName = n.fF.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.tu, {
                    ref: t,
                    className: (0, d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a),
                    ...r
                })
            }).displayName = n.tu.displayName;
            let m = r.forwardRef((e, t) => {
                let {
                    className: a,
                    sideOffset: r = 4,
                    ...i
                } = e;
                return (0, s.jsx)(n.Uv, {
                    children: (0, s.jsx)(n.VY, {
                        ref: t,
                        sideOffset: r,
                        className: (0, d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a),
                        ...i
                    })
                })
            });
            m.displayName = n.VY.displayName;
            let f = r.forwardRef((e, t) => {
                let {
                    className: a,
                    inset: r,
                    ...i
                } = e;
                return (0, s.jsx)(n.ck, {
                    ref: t,
                    className: (0, d.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", r && "pl-8", a),
                    ...i
                })
            });
            f.displayName = n.ck.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    children: r,
                    checked: i,
                    ...o
                } = e;
                return (0, s.jsxs)(n.oC, {
                    ref: t,
                    className: (0, d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a),
                    checked: i,
                    ...o,
                    children: [(0, s.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, s.jsx)(n.wU, {
                            children: (0, s.jsx)(l.Z, {
                                className: "h-4 w-4"
                            })
                        })
                    }), r]
                })
            }).displayName = n.oC.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    children: r,
                    ...i
                } = e;
                return (0, s.jsxs)(n.Rk, {
                    ref: t,
                    className: (0, d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a),
                    ...i,
                    children: [(0, s.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, s.jsx)(n.wU, {
                            children: (0, s.jsx)(o.Z, {
                                className: "h-2 w-2 fill-current"
                            })
                        })
                    }), r]
                })
            }).displayName = n.Rk.displayName;
            let x = r.forwardRef((e, t) => {
                let {
                    className: a,
                    inset: r,
                    ...i
                } = e;
                return (0, s.jsx)(n.__, {
                    ref: t,
                    className: (0, d.cn)("px-2 py-1.5 text-sm font-semibold", r && "pl-8", a),
                    ...i
                })
            });
            x.displayName = n.__.displayName;
            let p = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.Z0, {
                    ref: t,
                    className: (0, d.cn)("-mx-1 my-1 h-px bg-muted", a),
                    ...r
                })
            });
            p.displayName = n.Z0.displayName
        },
        55007: function(e, t, a) {
            "use strict";
            a.d(t, {
                Bw: function() {
                    return p
                },
                Ph: function() {
                    return c
                },
                Ql: function() {
                    return h
                },
                i4: function() {
                    return m
                },
                ki: function() {
                    return u
                }
            });
            var s = a(18243),
                r = a(57420),
                n = a(86921),
                i = a(17867),
                l = a(80096),
                o = a(80115),
                d = a(10722);
            let c = n.fC;
            n.ZA;
            let u = n.B4,
                m = r.forwardRef((e, t) => {
                    let {
                        className: a,
                        children: r,
                        ...l
                    } = e;
                    return (0, s.jsxs)(n.xz, {
                        ref: t,
                        className: (0, d.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", a),
                        ...l,
                        children: [r, (0, s.jsx)(n.JO, {
                            asChild: !0,
                            children: (0, s.jsx)(i.Z, {
                                className: "h-4 w-4 opacity-50"
                            })
                        })]
                    })
                });
            m.displayName = n.xz.displayName;
            let f = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.u_, {
                    ref: t,
                    className: (0, d.cn)("flex cursor-default items-center justify-center py-1", a),
                    ...r,
                    children: (0, s.jsx)(l.Z, {
                        className: "h-4 w-4"
                    })
                })
            });
            f.displayName = n.u_.displayName;
            let x = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.$G, {
                    ref: t,
                    className: (0, d.cn)("flex cursor-default items-center justify-center py-1", a),
                    ...r,
                    children: (0, s.jsx)(i.Z, {
                        className: "h-4 w-4"
                    })
                })
            });
            x.displayName = n.$G.displayName;
            let p = r.forwardRef((e, t) => {
                let {
                    className: a,
                    children: r,
                    position: i = "popper",
                    ...l
                } = e;
                return (0, s.jsx)(n.h_, {
                    children: (0, s.jsxs)(n.VY, {
                        ref: t,
                        className: (0, d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === i && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", a),
                        position: i,
                        ...l,
                        children: [(0, s.jsx)(f, {}), (0, s.jsx)(n.l_, {
                            className: (0, d.cn)("p-1", "popper" === i && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                            children: r
                        }), (0, s.jsx)(x, {})]
                    })
                })
            });
            p.displayName = n.VY.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.__, {
                    ref: t,
                    className: (0, d.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", a),
                    ...r
                })
            }).displayName = n.__.displayName;
            let h = r.forwardRef((e, t) => {
                let {
                    className: a,
                    children: r,
                    ...i
                } = e;
                return (0, s.jsxs)(n.ck, {
                    ref: t,
                    className: (0, d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a),
                    ...i,
                    children: [(0, s.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, s.jsx)(n.wU, {
                            children: (0, s.jsx)(o.Z, {
                                className: "h-4 w-4"
                            })
                        })
                    }), (0, s.jsx)(n.eT, {
                        children: r
                    })]
                })
            });
            h.displayName = n.ck.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.Z0, {
                    ref: t,
                    className: (0, d.cn)("-mx-1 my-1 h-px bg-muted", a),
                    ...r
                })
            }).displayName = n.Z0.displayName
        },
        32223: function(e, t, a) {
            "use strict";
            a.d(t, {
                Tu: function() {
                    return p
                },
                aM: function() {
                    return c
                },
                bC: function() {
                    return h
                },
                ue: function() {
                    return x
                },
                yo: function() {
                    return d
                }
            });
            var s = a(18243),
                r = a(57420),
                n = a(93938),
                i = a(16452),
                l = a(72424),
                o = a(10722);
            let d = n.fC,
                c = n.xz;
            n.x8;
            let u = n.h_,
                m = r.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...r
                    } = e;
                    return (0, s.jsx)(n.aV, {
                        className: (0, o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", a),
                        ...r,
                        ref: t
                    })
                });
            m.displayName = n.aV.displayName;
            let f = (0, i.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
                    variants: {
                        side: {
                            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
                        }
                    },
                    defaultVariants: {
                        side: "right"
                    }
                }),
                x = r.forwardRef((e, t) => {
                    let {
                        side: a = "right",
                        className: r,
                        children: i,
                        ...d
                    } = e;
                    return (0, s.jsxs)(u, {
                        children: [(0, s.jsx)(m, {}), (0, s.jsxs)(n.VY, {
                            ref: t,
                            className: (0, o.cn)(f({
                                side: a
                            }), r),
                            ...d,
                            children: [i, (0, s.jsxs)(n.x8, {
                                className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                                children: [(0, s.jsx)(l.Z, {
                                    className: "h-4 w-4"
                                }), (0, s.jsx)("span", {
                                    className: "sr-only",
                                    children: "Close"
                                })]
                            })]
                        })]
                    })
                });
            x.displayName = n.VY.displayName;
            let p = e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, s.jsx)("div", {
                    className: (0, o.cn)("flex flex-col space-y-2 text-center sm:text-left", t),
                    ...a
                })
            };
            p.displayName = "SheetHeader";
            let h = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.Dx, {
                    ref: t,
                    className: (0, o.cn)("text-lg font-semibold text-foreground", a),
                    ...r
                })
            });
            h.displayName = n.Dx.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.dk, {
                    ref: t,
                    className: (0, o.cn)("text-sm text-muted-foreground", a),
                    ...r
                })
            }).displayName = n.dk.displayName
        },
        11209: function(e, t, a) {
            "use strict";
            a.d(t, {
                AppContextProvider: function() {
                    return c
                },
                b: function() {
                    return d
                }
            });
            var s = a(18243),
                r = a(57420),
                n = a(29161),
                i = a.n(n),
                l = a(90978);
            let o = (0, r.createContext)({}),
                d = () => (0, r.useContext)(o),
                c = e => {
                    let {
                        children: t
                    } = e;
                    ! function() {
                        let {
                            data: e,
                            status: t
                        } = (0, l.kP)(), a = async function() {
                            i()({
                                client_id: "57781392641-asj2cirp1vm0a30icfqec1jkd3bth2ol.apps.googleusercontent.com",
                                auto_select: !1,
                                cancel_on_tap_outside: !1,
                                context: "signin"
                            }, e => {
                                console.log("onetap login ok", e), n(e.credential)
                            })
                        }, n = async function(e) {
                            console.log("signIn ok", await (0, l.zB)("google-one-tap", {
                                credential: e,
                                redirect: !1
                            }))
                        };
                        (0, r.useEffect)(() => {
                            if ("unauthenticated" === t) {
                                a();
                                let e = setInterval(() => {
                                    a()
                                }, 3e3);
                                return () => {
                                    clearInterval(e)
                                }
                            }
                        }, [t]), s.Fragment
                    }();
                    let {
                        data: a
                    } = (0, l.kP)(), [n, d] = (0, r.useState)(() => "light"), [c, u] = (0, r.useState)(!1), [m, f] = (0, r.useState)(null);
                    return (0, r.useEffect)(() => {
                        if (a && a.user) {
                            let e = a.user;
                            f({
                                uuid: e.uuid,
                                email: e.email || "",
                                nickname: e.nickname || e.name || "",
                                avatar_url: e.avatar_url || e.image || "",
                                created_at: e.created_at
                            })
                        }
                    }, [a]), (0, s.jsx)(o.Provider, {
                        value: {
                            theme: n,
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
        31146: function(e, t, a) {
            "use strict";
            a.d(t, {
                $O: function() {
                    return o
                },
                al: function() {
                    return n
                },
                ck: function() {
                    return i
                },
                he: function() {
                    return r
                },
                k1: function() {
                    return s
                },
                zm: function() {
                    return l
                }
            });
            let s = ["en", "zh", "es", "fr", "de", "ja", "ko", "pt-br"],
                r = {
                    en: "English",
                    zh: "中文",
                    es: "Espa\xf1ol",
                    fr: "Fran\xe7ais",
                    de: "Deutsch",
                    ja: "日本語",
                    ko: "한국어",
                    "pt-br": "Portugu\xeas (Brasil)"
                },
                n = "en",
                i = "as-needed",
                l = !1,
                o = {
                    en: {
                        "privacy-policy": "/privacy-policy",
                        "terms-of-service": "/terms-of-service",
                        "refund-policy": "/refund-policy",
                        support: "/support"
                    }
                }
        },
        54592: function(e, t, a) {
            "use strict";
            a.d(t, {
                jD: function() {
                    return o
                },
                rU: function() {
                    return i
                },
                tv: function() {
                    return d
                }
            });
            var s = a(31146),
                r = a(85976);
            let n = (0, a(72377).R)({
                    locales: s.k1,
                    defaultLocale: s.al,
                    localePrefix: s.ck,
                    pathnames: s.$O,
                    localeDetection: s.zm
                }),
                {
                    Link: i,
                    redirect: l,
                    usePathname: o,
                    useRouter: d
                } = (0, r.iV)(n)
        },
        18240: function(e, t, a) {
            "use strict";
            var s;
            a.d(t, {
                MS: function() {
                    return d
                },
                QC: function() {
                    return p
                }
            });
            let r = null,
                n = {
                    development: {
                        baseUrl: "http://localhost:3000",
                        timeout: 1e4,
                        retryAttempts: 3
                    },
                    cdn: {
                        baseUrl: "https://ai-math.io",
                        timeout: 15e3,
                        retryAttempts: 3
                    },
                    "google-apps-script": {
                        baseUrl: "https://ai-math.io",
                        timeout: 2e4,
                        retryAttempts: 2
                    }
                };

            function i() {
                var e, t;
                if (void 0 !== window.google && void 0 !== window.google.script && void 0 !== window.google.script.run) return "google-apps-script";
                let a = (null === (e = window.location) || void 0 === e ? void 0 : e.href) || "",
                    s = (null === (t = window.location) || void 0 === t ? void 0 : t.hostname) || "";
                return a.includes("script.google.com") || a.includes("googleusercontent.com") || a.includes("script.googleusercontent.com") || s.includes("script.google.com") || s.includes("googleusercontent.com") ? "google-apps-script" : "localhost" === s || "127.0.0.1" === s || s.includes("localhost") ? "development" : (a.includes("ai-equation-editor.pages.dev") || a.includes("cdn."), "cdn")
            }
            async function l() {
                var e, t;
                if (!(null === (t = window.google) || void 0 === t ? void 0 : null === (e = t.script) || void 0 === e ? void 0 : e.run)) return null;
                try {
                    let e = await new Promise((e, t) => {
                        window.google.script.run.withSuccessHandler(e).withFailureHandler(t).getAuthToken()
                    });
                    if ((null == e ? void 0 : e.success) && e.token) return r = e.token, e.token;
                    return null
                } catch (e) {
                    return null
                }
            }

            function o() {
                {
                    let e = window.ADDON_CONFIG;
                    if (e && "boolean" == typeof e.debugMode) return e.debugMode
                }
                return "development" === i()
            }
            o() && console.log("\uD83D\uDD27 API Configuration:", {
                environment: i(),
                config: n[i()],
                currentUrl: null === (s = window.location) || void 0 === s ? void 0 : s.href,
                userAgent: navigator.userAgent
            });
            class d extends Error {
                constructor(e, t) {
                    super(e), this.name = "ApiError", this.status = null == t ? void 0 : t.status, this.code = null == t ? void 0 : t.code
                }
            }

            function c() {
                return "google-apps-script" === i()
            }

            function u(e) {
                for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) a[s - 1] = arguments[s];
                return new Promise((t, s) => {
                    try {
                        window.google.script.run.withSuccessHandler(e => {
                            e && 0 === e.code ? t(e) : s(Error((null == e ? void 0 : e.message) || "API call failed"))
                        }).withFailureHandler(e => {
                            s(Error((null == e ? void 0 : e.message) || (null == e ? void 0 : e.toString()) || "Script execution failed"))
                        })[e](...a)
                    } catch (e) {
                        s(e)
                    }
                })
            }
            async function m(e, t, a) {
                let s = function(e) {
                        let t = n[i()],
                            a = e.startsWith("/") ? e : "/".concat(e);
                        return t.baseUrl ? "".concat(t.baseUrl).concat(a) : a
                    }(e),
                    r = n[i()],
                    l = await fetch(s, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            ...(null == a ? void 0 : a.headers) || {}
                        },
                        body: JSON.stringify(t),
                        signal: AbortSignal.timeout(r.timeout)
                    }),
                    o = await l.json();
                if (!l.ok) throw new d(o.message || "HTTP error! status: ".concat(l.status), {
                    status: l.status,
                    code: null == o ? void 0 : o.code
                });
                if (0 !== o.code) throw new d(o.message || "API call failed", {
                    status: l.status,
                    code: o.code
                });
                return o
            }

            function f(e) {
                let t = /^data:(.*?);base64,/.exec(e);
                return null == t ? void 0 : t[1]
            }
            async function x(e) {
                return new Promise(t => {
                    let a = new FileReader;
                    a.onload = () => t(a.result), a.readAsDataURL(e)
                })
            }
            class p {
                static async execute(e) {
                    try {
                        let t = { ...e,
                            client: e.client || function() {
                                var e, t;
                                let a = (null === (e = window.location) || void 0 === e ? void 0 : e.pathname) || "",
                                    s = "google-apps-script" === i() ? "gas" : a.includes("sidebar") ? "addonsidebar" : a.includes("dialog") ? "addondialog" : "web",
                                    r = (null === (t = window.location) || void 0 === t ? void 0 : t.href) || "";
                                return {
                                    platform: s,
                                    hostApp: r.includes("docs") ? "docs" : r.includes("sheets") ? "sheets" : r.includes("slides") ? "slides" : "web"
                                }
                            }()
                        };
                        if (c() && r) try {
                            let e = await m("/api/latex", t, {
                                headers: {
                                    Authorization: "Bearer ".concat(r),
                                    "X-GAS-Request": "true"
                                }
                            });
                            if (!e.data) throw Error("Invalid response format from API");
                            return e.data
                        } catch (e) {
                            if (e instanceof d && (401 === e.status || 403 === e.status)) {
                                o() && console.warn("[ApiAdapter] Bearer token expired (", e.status, "), refreshing via GAS...");
                                let a = await l();
                                if (a) try {
                                    let e = await m("/api/latex", t, {
                                        headers: {
                                            Authorization: "Bearer ".concat(a),
                                            "X-GAS-Request": "true"
                                        }
                                    });
                                    if (!e.data) throw Error("Invalid response format from API");
                                    return e.data
                                } catch (e) {
                                    o() && console.warn("[ApiAdapter] Retry with refreshed token also failed, falling back to GAS proxy:", e)
                                } else o() && console.warn("[ApiAdapter] Token refresh failed, falling back to GAS proxy")
                            } else throw e
                        }
                        if (c()) {
                            let e = await u("executeEquationAction", t);
                            if (!e.data) throw Error("Invalid response format from Google Apps Script");
                            return e.data
                        }
                        let a = await m("/api/latex", t);
                        if (!a.data) throw Error("Invalid response format from API");
                        return a.data
                    } catch (e) {
                        throw e
                    }
                }
                static async recognizeHandwriting(e) {
                    let t = await this.execute({
                        action: "recognize",
                        payload: {
                            input: {
                                image: e,
                                sourceType: "handwriting",
                                mimeType: f(e)
                            }
                        }
                    });
                    return {
                        latex: t.latex,
                        candidates: t.candidates
                    }
                }
                static async recognizeImage(e) {
                    let t = await x(e),
                        a = await this.execute({
                            action: "recognize",
                            payload: {
                                input: {
                                    image: t,
                                    sourceType: "upload",
                                    mimeType: e.type || f(t)
                                }
                            }
                        });
                    return {
                        latex: a.latex,
                        candidates: a.candidates
                    }
                }
                static async generateLatex(e) {
                    let t = await this.execute({
                        action: "generate",
                        payload: {
                            input: {
                                text: e
                            }
                        }
                    });
                    return {
                        latex: t.latex,
                        candidates: t.candidates
                    }
                }
                static async refineLatex(e, t, a) {
                    var s;
                    let r = await this.execute({
                        action: "modify",
                        payload: {
                            input: {
                                latex: e,
                                instruction: t
                            },
                            options: {
                                instructionTypeHint: a
                            }
                        }
                    });
                    return {
                        latex: r.latex,
                        hasChanges: null !== (s = r.hasChanges) && void 0 !== s ? s : r.latex !== e,
                        candidates: r.candidates
                    }
                }
                static async correctLatex(e) {
                    var t;
                    let a = await this.execute({
                        action: "correct",
                        payload: {
                            input: {
                                latex: e
                            }
                        }
                    });
                    return {
                        latex: a.latex,
                        hasChanges: null !== (t = a.hasChanges) && void 0 !== t ? t : a.latex !== e,
                        candidates: a.candidates
                    }
                }
                static async getUserStatus() {
                    try {
                        var e;
                        if (console.log("\uD83C\uDF10 [API-ADAPTER] Getting user status..."), console.log("\uD83D\uDD0D [API-ADAPTER] Environment check:", {
                                isGAS: c(),
                                environment: i(),
                                url: null === (e = window.location) || void 0 === e ? void 0 : e.href
                            }), c()) {
                            console.log("\uD83D\uDCF1 [API-ADAPTER] Using Google Apps Script API");
                            let e = await u("getUserStatus");
                            if (!e.data) throw Error("Invalid response format from Google Apps Script");
                            return console.log("✅ [API-ADAPTER] GAS API response received:", e.data), e.data
                        } {
                            console.log("\uD83C\uDF10 [API-ADAPTER] Using Web API");
                            let e = await m("/api/user/status", {});
                            if (!e.data) throw Error("Invalid response format from API");
                            return console.log("✅ [API-ADAPTER] Web API response received:", e.data), e.data
                        }
                    } catch (e) {
                        throw console.error("❌ [API-ADAPTER] getUserStatus failed:", e), e
                    }
                }
            }
            let {
                execute: h,
                recognizeHandwriting: g,
                recognizeImage: v,
                generateLatex: j,
                refineLatex: N,
                correctLatex: y,
                getUserStatus: b
            } = p
        },
        45450: function(e, t, a) {
            "use strict";
            a.d(t, {
                FE: function() {
                    return r
                },
                lK: function() {
                    return n
                }
            });
            let s = () => Date.parse(new Date().toUTCString()) / 1e3,
                r = e => {
                    let t = localStorage.getItem(e);
                    if (!t) return null;
                    let a = t.split(":");
                    if (!a || a.length < 2) return null;
                    let r = Number(a[0]),
                        n = s();
                    if (-1 !== r && r < n) return i(e), null;
                    let l = a[0] + ":";
                    return t.replace(l, "")
                },
                n = (e, t, a) => {
                    localStorage.setItem(e, a + ":" + t)
                },
                i = e => {
                    localStorage.removeItem(e)
                }
        },
        10722: function(e, t, a) {
            "use strict";
            a.d(t, {
                cn: function() {
                    return n
                }
            });
            var s = a(1349),
                r = a(10914);

            function n() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, r.m6)((0, s.W)(t))
            }
        },
        52658: function(e, t, a) {
            "use strict";
            a.d(t, {
                r: function() {
                    return s
                }
            });
            let s = {
                Theme: "THEME"
            }
        }
    },
    function(e) {
        e.O(0, [1321, 2700, 2502, 4277, 6196, 1434, 8589, 9170, 625, 3677, 449, 362, 772, 978, 9666, 1111, 1222, 8249, 8498, 2017, 5490, 1744], function() {
            return e(e.s = 57628)
        }), _N_E = e.O()
    }
]);