(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9875], {
        39875: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return e7
                }
            });
            var i = r(18243),
                a = r(57420),
                s = r(1349),
                n = r(23692),
                l = r(30092),
                o = r(41607),
                c = r(10722);
            let d = o.fC,
                u = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        ...a
                    } = e;
                    return (0, i.jsx)(o.aV, {
                        ref: t,
                        className: (0, c.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", r),
                        ...a
                    })
                });
            u.displayName = o.aV.displayName;
            let m = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, i.jsx)(o.xz, {
                    ref: t,
                    className: (0, c.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", r),
                    ...a
                })
            });
            m.displayName = o.xz.displayName;
            let h = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, i.jsx)(o.VY, {
                    ref: t,
                    className: (0, c.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", r),
                    ...a
                })
            });
            h.displayName = o.VY.displayName;
            var g = r(7173),
                x = r(47585),
                p = r(49250),
                f = r(68382),
                b = r(63195),
                y = r(72424),
                v = r(21929),
                w = r(7519),
                j = r(9314),
                _ = r(73351);

            function k(e) {
                let {
                    tooltip: t,
                    children: r
                } = e;
                return (0, i.jsxs)(_.u, {
                    children: [(0, i.jsx)(_.aJ, {
                        asChild: !0,
                        children: (0, i.jsx)("span", {
                            className: "inline-flex",
                            children: r
                        })
                    }), (0, i.jsx)(_._v, {
                        children: t
                    })]
                })
            }
            let N = {
                    iconSizes: {
                        web: {
                            symbol: "w-8 h-8",
                            greek: "w-8 h-8",
                            bracket: "w-12 h-10",
                            frac: "w-12 h-10",
                            sqrt: "w-12 h-10",
                            limit: "w-12 h-10",
                            trig: "w-12 h-10",
                            integral: "w-12 h-12",
                            sum: "w-10 h-10",
                            matrix: "w-14 h-12",
                            default: "w-10 h-8"
                        },
                        addondialog: {
                            symbol: "w-6 h-6",
                            greek: "w-6 h-6",
                            bracket: "w-10 h-8",
                            frac: "w-10 h-8",
                            sqrt: "w-10 h-8",
                            limit: "w-10 h-8",
                            trig: "w-12 h-8",
                            integral: "w-10 h-10",
                            sum: "w-8 h-8",
                            matrix: "w-12 h-10",
                            default: "w-8 h-6"
                        },
                        addonsidebar: {
                            symbol: "w-6 h-5",
                            greek: "w-5 h-4",
                            bracket: "w-8 h-6",
                            frac: "w-8 h-6",
                            sqrt: "w-8 h-6",
                            limit: "w-8 h-6",
                            trig: "w-12 h-6",
                            integral: "w-8 h-8",
                            sum: "w-6 h-8",
                            matrix: "w-10 h-8",
                            default: "w-6 h-5"
                        }
                    },
                    popoverConfig: {
                        web: {
                            width: "w-auto min-w-96",
                            maxWidth: "max-w-2xl",
                            padding: "p-4"
                        },
                        addondialog: {
                            width: "w-auto min-w-80",
                            maxWidth: "max-w-lg",
                            padding: "p-3"
                        },
                        addonsidebar: {
                            width: "w-auto min-w-56",
                            maxWidth: "max-w-sm",
                            padding: "p-2"
                        }
                    },
                    categoryGridConfig: {
                        web: {
                            symbol: "grid-cols-8 md:grid-cols-10 lg:grid-cols-12",
                            greek: "grid-cols-10 md:grid-cols-12 lg:grid-cols-14",
                            bracket: "grid-cols-6 md:grid-cols-8 lg:grid-cols-10",
                            frac: "grid-cols-6 md:grid-cols-8 lg:grid-cols-10",
                            sqrt: "grid-cols-6 md:grid-cols-8 lg:grid-cols-10",
                            limit: "grid-cols-5 md:grid-cols-7 lg:grid-cols-9",
                            trig: "grid-cols-4 md:grid-cols-6 lg:grid-cols-8",
                            integral: "grid-cols-5 md:grid-cols-7 lg:grid-cols-9",
                            sum: "grid-cols-5 md:grid-cols-7 lg:grid-cols-9",
                            matrix: "grid-cols-4 md:grid-cols-6 lg:grid-cols-8",
                            default: "grid-cols-8 md:grid-cols-10 lg:grid-cols-12"
                        },
                        addondialog: {
                            symbol: "grid-cols-6 md:grid-cols-8",
                            greek: "grid-cols-8 md:grid-cols-10",
                            bracket: "grid-cols-4 md:grid-cols-5",
                            frac: "grid-cols-5 md:grid-cols-6",
                            sqrt: "grid-cols-5 md:grid-cols-6",
                            limit: "grid-cols-4 md:grid-cols-5",
                            trig: "grid-cols-3 md:grid-cols-4",
                            integral: "grid-cols-4 md:grid-cols-5",
                            sum: "grid-cols-4 md:grid-cols-5",
                            matrix: "grid-cols-3 md:grid-cols-4",
                            default: "grid-cols-6 md:grid-cols-8"
                        },
                        addonsidebar: {
                            symbol: "grid-cols-4",
                            greek: "grid-cols-5",
                            bracket: "grid-cols-3",
                            frac: "grid-cols-3",
                            sqrt: "grid-cols-3",
                            limit: "grid-cols-3",
                            trig: "grid-cols-2",
                            integral: "grid-cols-3",
                            sum: "grid-cols-3",
                            matrix: "grid-cols-2",
                            default: "grid-cols-4"
                        }
                    },
                    spacing: {
                        web: {
                            iconGap: "gap-2",
                            categoryGap: "gap-2 mb-2"
                        },
                        addondialog: {
                            iconGap: "gap-1.5",
                            categoryGap: "gap-0.5 mb-1"
                        },
                        addonsidebar: {
                            iconGap: "gap-1.5",
                            categoryGap: "gap-0.5 mb-1"
                        }
                    }
                },
                C = (e, t, r) => {
                    if (null == r ? void 0 : r.iconSize) return r.iconSize + " object-contain";
                    let i = N.iconSizes[t];
                    return ((null == i ? void 0 : i[e]) || (null == i ? void 0 : i.default)) + " object-contain"
                },
                S = e => N.popoverConfig[e],
                z = (e, t) => {
                    let r = N.spacing[e];
                    if (t) {
                        let i = N.categoryGridConfig[e],
                            a = (null == i ? void 0 : i[t]) || (null == i ? void 0 : i.default);
                        return "grid ".concat(a, " ").concat(r.iconGap)
                    }
                    let i = N.categoryGridConfig[e];
                    return "grid ".concat(null == i ? void 0 : i.default, " ").concat(r.iconGap)
                },
                A = [{
                    id: "symbol",
                    name: "Common Symbols",
                    icon: "/imgs/shortcut/layer1/symbol.png",
                    iconSize: "w-4 h-9",
                    symbols: [{
                        latex: "+ ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_1_binary_plus.svg",
                        description: "Plus",
                        cursor: 0
                    }, {
                        latex: "- ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_2_binary_minus.svg",
                        description: "Minus",
                        cursor: 0
                    }, {
                        latex: "\\times ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_3_binary_times.svg",
                        description: "Times",
                        cursor: 0
                    }, {
                        latex: "\\div ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_4_binary_div.svg",
                        description: "Divide",
                        cursor: 0
                    }, {
                        latex: "= ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_41_relation_equal.svg",
                        description: "Equal",
                        cursor: 0
                    }, {
                        latex: "< ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_39_relation_less.svg",
                        description: "Less Than",
                        cursor: 0
                    }, {
                        latex: "> ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_40_relation_more.svg",
                        description: "Greater Than",
                        cursor: 0
                    }, {
                        latex: "\\le ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_42_relation_le.svg",
                        description: "Less or Equal",
                        cursor: 0
                    }, {
                        latex: "\\ge ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_43_relation_ge.svg",
                        description: "Greater or Equal",
                        cursor: 0
                    }, {
                        latex: "\\ne ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_80_relation_ne.svg",
                        description: "Not Equal",
                        cursor: 0
                    }, {
                        latex: "\\cdot ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_9_binary_cdot.svg",
                        description: "Center Dot",
                        cursor: 0
                    }, {
                        latex: "\\pm ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_5_binary_pm.svg",
                        description: "Plus Minus",
                        cursor: 0
                    }, {
                        latex: "\\approx ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_54_relation_approx.svg",
                        description: "Approximately",
                        cursor: 0
                    }, {
                        latex: "\\equiv ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_44_relation_equiv.svg",
                        description: "Equivalent",
                        cursor: 0
                    }, {
                        latex: "\\in ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_67_relation_in.svg",
                        description: "Element of",
                        cursor: 0
                    }, {
                        latex: "\\notin ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_79_relation_notin.svg",
                        description: "Not Element of",
                        cursor: 0
                    }, {
                        latex: "\\subset ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_55_relation_subset.svg",
                        description: "Subset",
                        cursor: 0
                    }, {
                        latex: "\\subseteq ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_57_relation_subseteq.svg",
                        description: "Subset or Equal",
                        cursor: 0
                    }, {
                        latex: "\\cap ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_14_binary_cap.svg",
                        description: "Intersection",
                        cursor: 0
                    }, {
                        latex: "\\cup ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_13_binary_cup.svg",
                        description: "Union",
                        cursor: 0
                    }, {
                        latex: "\\emptyset ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_125_other_emptyset.svg",
                        description: "Empty Set",
                        cursor: 0
                    }, {
                        latex: "\\to ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_82_arrow_to.svg",
                        description: "Right Arrow",
                        cursor: 0
                    }, {
                        latex: "\\Rightarrow ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_95_arrow_Rightarrow.svg",
                        description: "Implies",
                        cursor: 0
                    }, {
                        latex: "\\Leftrightarrow ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_97_arrow_Leftrightarrowb.svg",
                        description: "If and only if",
                        cursor: 0
                    }, {
                        latex: "\\leftrightarrow ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_88_arrow_leftrightarrowa.svg",
                        description: "Left Right Arrow",
                        cursor: 0
                    }, {
                        latex: "\\forall ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_119_other_forall.svg",
                        description: "For All",
                        cursor: 0
                    }, {
                        latex: "\\exists ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_120_other_exists.svg",
                        description: "Exists",
                        cursor: 0
                    }, {
                        latex: "\\wedge ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_18_binary_wedge.svg",
                        description: "Logical And",
                        cursor: 0
                    }, {
                        latex: "\\vee ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_17_binary_vee.svg",
                        description: "Logical Or",
                        cursor: 0
                    }, {
                        latex: "\\lnot ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_123_other_neg.svg",
                        description: "Logical Not",
                        cursor: 0
                    }, {
                        latex: "\\infty ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_126_other_infty.svg",
                        description: "Infinity",
                        cursor: 0
                    }, {
                        latex: "\\propto ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_66_relation_propto.svg",
                        description: "Proportional",
                        cursor: 0
                    }, {
                        latex: "\\therefore ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_114_other_therefore.svg",
                        description: "Therefore",
                        cursor: 0
                    }, {
                        latex: "\\angle ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_133_other_angle.svg",
                        description: "Angle",
                        cursor: 0
                    }, {
                        latex: "\\triangle ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_128_other_triangle.svg",
                        description: "Triangle",
                        cursor: 0
                    }, {
                        latex: "\\parallel ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_73_relation_parallel.svg",
                        description: "Parallel",
                        cursor: 0
                    }, {
                        latex: "\\perp ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_74_relation_perp.svg",
                        description: "Perpendicular",
                        cursor: 0
                    }, {
                        latex: "\\cdots ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_116_other_cdots.svg",
                        description: "Center Dots",
                        cursor: 0
                    }, {
                        latex: "\\ldots ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_115_other_dots.svg",
                        description: "Horizontal Dots",
                        cursor: 0
                    }, {
                        latex: "\\vdots ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_117_other_vdots.svg",
                        description: "Vertical Dots",
                        cursor: 0
                    }, {
                        latex: "\\ddots ",
                        display: "/imgs/shortcut/layer2/symbol/symbol_118_other_ddots.svg",
                        description: "Diagonal Dots",
                        cursor: 0
                    }]
                }, {
                    id: "greek",
                    name: "Greek Letters",
                    icon: "/imgs/shortcut/layer1/greek.png",
                    iconSize: "w-3 h-5",
                    symbols: [{
                        latex: "\\alpha ",
                        display: "/imgs/shortcut/layer2/greek/greek_1_lower_alpha.svg",
                        description: "alpha",
                        cursor: 0
                    }, {
                        latex: "\\beta ",
                        display: "/imgs/shortcut/layer2/greek/greek_2_lower_beta.svg",
                        description: "beta",
                        cursor: 0
                    }, {
                        latex: "\\gamma ",
                        display: "/imgs/shortcut/layer2/greek/greek_3_lower_gammaa.svg",
                        description: "gamma",
                        cursor: 0
                    }, {
                        latex: "\\delta ",
                        display: "/imgs/shortcut/layer2/greek/greek_4_lower_deltaa.svg",
                        description: "delta",
                        cursor: 0
                    }, {
                        latex: "\\epsilon ",
                        display: "/imgs/shortcut/layer2/greek/greek_5_lower_epsilon.svg",
                        description: "epsilon",
                        cursor: 0
                    }, {
                        latex: "\\theta ",
                        display: "/imgs/shortcut/layer2/greek/greek_9_lower_thetaa.svg",
                        description: "theta",
                        cursor: 0
                    }, {
                        latex: "\\lambda ",
                        display: "/imgs/shortcut/layer2/greek/greek_13_lower_lambdaa.svg",
                        description: "lambda",
                        cursor: 0
                    }, {
                        latex: "\\mu ",
                        display: "/imgs/shortcut/layer2/greek/greek_14_lower_mu.svg",
                        description: "mu",
                        cursor: 0
                    }, {
                        latex: "\\pi ",
                        display: "/imgs/shortcut/layer2/greek/greek_18_lower_pia.svg",
                        description: "pi",
                        cursor: 0
                    }, {
                        latex: "\\sigma ",
                        display: "/imgs/shortcut/layer2/greek/greek_22_lower_sigmaa.svg",
                        description: "sigma",
                        cursor: 0
                    }, {
                        latex: "\\phi ",
                        display: "/imgs/shortcut/layer2/greek/greek_26_lower_phia.svg",
                        description: "phi",
                        cursor: 0
                    }, {
                        latex: "\\omega ",
                        display: "/imgs/shortcut/layer2/greek/greek_30_lower_omegaa.svg",
                        description: "omega",
                        cursor: 0
                    }, {
                        latex: "\\rho ",
                        display: "/imgs/shortcut/layer2/greek/greek_20_lower_rho.svg",
                        description: "rho",
                        cursor: 0
                    }, {
                        latex: "\\tau ",
                        display: "/imgs/shortcut/layer2/greek/greek_24_lower_tau.svg",
                        description: "tau",
                        cursor: 0
                    }, {
                        latex: "\\chi ",
                        display: "/imgs/shortcut/layer2/greek/greek_28_lower_chi.svg",
                        description: "chi",
                        cursor: 0
                    }, {
                        latex: "\\psi ",
                        display: "/imgs/shortcut/layer2/greek/greek_29_lower_psia.svg",
                        description: "psi",
                        cursor: 0
                    }, {
                        latex: "\\zeta ",
                        display: "/imgs/shortcut/layer2/greek/greek_7_lower_zeta.svg",
                        description: "zeta",
                        cursor: 0
                    }, {
                        latex: "\\eta ",
                        display: "/imgs/shortcut/layer2/greek/greek_8_lower_eta.svg",
                        description: "eta",
                        cursor: 0
                    }, {
                        latex: "\\kappa ",
                        display: "/imgs/shortcut/layer2/greek/greek_12_lower_kappa.svg",
                        description: "kappa",
                        cursor: 0
                    }, {
                        latex: "\\nu ",
                        display: "/imgs/shortcut/layer2/greek/greek_15_lower_nu.svg",
                        description: "nu",
                        cursor: 0
                    }, {
                        latex: "\\xi ",
                        display: "/imgs/shortcut/layer2/greek/greek_16_lower_xia.svg",
                        description: "xi",
                        cursor: 0
                    }, {
                        latex: "\\varepsilon ",
                        display: "/imgs/shortcut/layer2/greek/greek_6_lower_varepsilon.svg",
                        description: "varepsilon",
                        cursor: 0
                    }, {
                        latex: "\\vartheta ",
                        display: "/imgs/shortcut/layer2/greek/greek_10_lower_vartheta.svg",
                        description: "vartheta",
                        cursor: 0
                    }, {
                        latex: "\\varphi ",
                        display: "/imgs/shortcut/layer2/greek/greek_27_lower_varphi.svg",
                        description: "varphi",
                        cursor: 0
                    }, {
                        latex: "\\Delta ",
                        display: "/imgs/shortcut/layer2/greek/greek_32_upper_Deltab.svg",
                        description: "Delta",
                        cursor: 0
                    }, {
                        latex: "\\Gamma ",
                        display: "/imgs/shortcut/layer2/greek/greek_31_upper_Gammab.svg",
                        description: "Gamma",
                        cursor: 0
                    }, {
                        latex: "\\Lambda ",
                        display: "/imgs/shortcut/layer2/greek/greek_34_upper_Lambdab.svg",
                        description: "Lambda",
                        cursor: 0
                    }, {
                        latex: "\\Pi ",
                        display: "/imgs/shortcut/layer2/greek/greek_36_upper_Pib.svg",
                        description: "Pi",
                        cursor: 0
                    }, {
                        latex: "\\Sigma ",
                        display: "/imgs/shortcut/layer2/greek/greek_37_upper_Sigmab.svg",
                        description: "Sigma",
                        cursor: 0
                    }, {
                        latex: "\\Theta ",
                        display: "/imgs/shortcut/layer2/greek/greek_33_upper_Thetab.svg",
                        description: "Theta",
                        cursor: 0
                    }, {
                        latex: "\\Phi ",
                        display: "/imgs/shortcut/layer2/greek/greek_39_upper_Phib.svg",
                        description: "Phi",
                        cursor: 0
                    }, {
                        latex: "\\Omega ",
                        display: "/imgs/shortcut/layer2/greek/greek_41_upper_Omegab.svg",
                        description: "Omega",
                        cursor: 0
                    }, {
                        latex: "\\partial",
                        display: "/imgs/shortcut/layer2/greek/greek_55_other_partial.svg",
                        description: "Partial Symbol",
                        cursor: 0
                    }]
                }, {
                    id: "frac",
                    name: "Fractions & Derivatives",
                    icon: "/imgs/shortcut/layer1/frac.png",
                    iconSize: "w-5 h-8",
                    symbols: [{
                        latex: "\\frac{a}{b}",
                        display: "/imgs/shortcut/layer2/frac/frac_1_frac_frac.svg",
                        description: "Fraction",
                        cursor: 0
                    }, {
                        latex: "\\tfrac{a}{b}",
                        display: "/imgs/shortcut/layer2/frac/frac_2_frac_tfrac.svg",
                        description: "Small Fraction",
                        cursor: 0
                    }, {
                        latex: "\\frac{d y}{d x}",
                        display: "/imgs/shortcut/layer2/frac/frac_3_frac_dif.svg",
                        description: "Derivative",
                        cursor: 0
                    }, {
                        latex: "\\frac{\\partial y}{\\partial x}",
                        display: "/imgs/shortcut/layer2/frac/frac_5_frac_partial.svg",
                        description: "Partial Derivative",
                        cursor: 0
                    }, {
                        latex: "\\nabla\\psi ",
                        display: "/imgs/shortcut/layer2/frac/frac_7_frac_nabla.svg",
                        description: "Gradient",
                        cursor: 0
                    }, {
                        latex: "f'",
                        display: "/imgs/shortcut/layer2/frac/frac_13_der_prime.svg",
                        description: "Derivative Symbol",
                        cursor: 0
                    }, {
                        latex: "\\dot{a}",
                        display: "/imgs/shortcut/layer2/frac/frac_11_der_dot.svg",
                        description: "First Derivative Dot",
                        cursor: 0
                    }, {
                        latex: "\\ddot{a}",
                        display: "/imgs/shortcut/layer2/frac/frac_12_der_ddot.svg",
                        description: "Second Derivative Dot",
                        cursor: 0
                    }, {
                        latex: "\\gcd(m, n)",
                        display: "/imgs/shortcut/layer2/frac/frac_18_mod_gcd.svg",
                        description: "Greatest Common Divisor",
                        cursor: 0,
                        iconSize: "w-18 h-8"
                    }, {
                        latex: "\\operatorname{lcm}(m, n)",
                        display: "/imgs/shortcut/layer2/frac/frac_19_mod_lcm.svg",
                        description: "Least Common Multiple",
                        cursor: 0,
                        iconSize: "w-18 h-8"
                    }]
                }, {
                    id: "sqrt",
                    name: "Roots & Subscripts",
                    icon: "/imgs/shortcut/layer1/sqrt.png",
                    iconSize: "w-6 h-8",
                    symbols: [{
                        latex: "\\sqrt{x} ",
                        display: "/imgs/shortcut/layer2/sqrt/sqrt_1_sqrt_sqrt.svg",
                        description: "Square Root",
                        cursor: 0
                    }, {
                        latex: "\\sqrt[n]{x} ",
                        display: "/imgs/shortcut/layer2/sqrt/sqrt_2_sqrt_sqrtn.svg",
                        description: "Nth Root",
                        cursor: 0
                    }, {
                        latex: "x^a ",
                        display: "/imgs/shortcut/layer2/sqrt/sqrt_3_superscript_topright.svg",
                        description: "Superscript",
                        cursor: 0
                    }, {
                        latex: "x_a ",
                        display: "/imgs/shortcut/layer2/sqrt/sqrt_4_superscript_bottomright.svg",
                        description: "Subscript",
                        cursor: 0
                    }, {
                        latex: "x^b_a ",
                        display: "/imgs/shortcut/layer2/sqrt/sqrt_5_superscript_right.svg",
                        description: "Superscript & Subscript",
                        cursor: 0
                    }, {
                        latex: "{}_a^b x ",
                        display: "/imgs/shortcut/layer2/sqrt/sqrt_6_superscript_left.svg",
                        description: "Left Superscript & Subscript",
                        cursor: 0
                    }, {
                        latex: "\\hat{a} ",
                        display: "/imgs/shortcut/layer2/sqrt/sqrt_8_other_hat.svg",
                        description: "Hat",
                        cursor: 0
                    }, {
                        latex: "\\vec{a} ",
                        display: "/imgs/shortcut/layer2/sqrt/sqrt_15_other_vec.svg",
                        description: "Vector",
                        cursor: 0
                    }, {
                        latex: "\\overline{abc} ",
                        display: "/imgs/shortcut/layer2/sqrt/sqrt_22_other_overline_a.svg",
                        description: "Overline",
                        cursor: 0
                    }, {
                        latex: "\\underline{abc} ",
                        display: "/imgs/shortcut/layer2/sqrt/sqrt_23_other_underline.svg",
                        description: "Underline",
                        cursor: 0
                    }, {
                        latex: "\\overbrace{abc} ",
                        display: "/imgs/shortcut/layer2/sqrt/sqrt_24_other_overbrace.svg",
                        description: "Overbrace",
                        cursor: 0
                    }, {
                        latex: "\\underbrace{abc} ",
                        display: "/imgs/shortcut/layer2/sqrt/sqrt_25_other_underbrace.svg",
                        description: "Underbrace",
                        cursor: 0
                    }]
                }, {
                    id: "limit",
                    name: "Limits & Logarithms",
                    icon: "/imgs/shortcut/layer1/limit.png",
                    iconSize: "w-8 h-7",
                    symbols: [{
                        latex: "\\lim ",
                        display: "/imgs/shortcut/layer2/limit/limit_1_lim_lim.svg",
                        description: "Limit",
                        cursor: 0
                    }, {
                        latex: "\\lim_{x \\to 0} ",
                        display: "/imgs/shortcut/layer2/limit/limit_2_lim_limto0.svg",
                        description: "Limit to Zero",
                        cursor: 0
                    }, {
                        latex: "\\lim_{x \\to \\infty} ",
                        display: "/imgs/shortcut/layer2/limit/limit_3_lim_limtoinfty.svg",
                        description: "Limit to Infinity",
                        cursor: 0
                    }, {
                        latex: "\\log_{a}{b} ",
                        display: "/imgs/shortcut/layer2/limit/limit_7_log_log.svg",
                        description: "Logarithm",
                        cursor: 0
                    }, {
                        latex: "\\lg_{a}{b} ",
                        display: "/imgs/shortcut/layer2/limit/limit_8_log_lg.svg",
                        description: "Base-10 Logarithm",
                        cursor: 0
                    }, {
                        latex: "\\ln_{a}{b} ",
                        display: "/imgs/shortcut/layer2/limit/limit_9_log_ln.svg",
                        description: "Natural Logarithm",
                        cursor: 0
                    }, {
                        latex: "\\exp ",
                        display: "/imgs/shortcut/layer2/limit/limit_10_log_exp.svg",
                        description: "Exponential Function",
                        cursor: 0
                    }, {
                        latex: "\\min x ",
                        display: "/imgs/shortcut/layer2/limit/limit_11_bound_min.svg",
                        description: "Minimum",
                        cursor: 0
                    }, {
                        latex: "\\max x ",
                        display: "/imgs/shortcut/layer2/limit/limit_12_bound_max.svg",
                        description: "Maximum",
                        cursor: 0
                    }, {
                        latex: "\\sup t ",
                        display: "/imgs/shortcut/layer2/limit/limit_13_bound_sup.svg",
                        description: "Supremum",
                        cursor: 0
                    }, {
                        latex: "\\inf s ",
                        display: "/imgs/shortcut/layer2/limit/limit_14_bound_inf.svg",
                        description: "Infimum",
                        cursor: 0
                    }]
                }, {
                    id: "trig",
                    name: "Trigonometric Functions",
                    icon: "/imgs/shortcut/layer1/trig.png",
                    iconSize: "w-10 h-7",
                    symbols: [{
                        latex: "\\sin ",
                        display: "/imgs/shortcut/layer2/trig/trig_1_sin.svg",
                        description: "Sine",
                        cursor: 0
                    }, {
                        latex: "\\cos ",
                        display: "/imgs/shortcut/layer2/trig/trig_2_cos.svg",
                        description: "Cosine",
                        cursor: 0
                    }, {
                        latex: "\\tan ",
                        display: "/imgs/shortcut/layer2/trig/trig_3_tan.svg",
                        description: "Tangent",
                        cursor: 0
                    }, {
                        latex: "\\cot ",
                        display: "/imgs/shortcut/layer2/trig/trig_4_cot.svg",
                        description: "Cotangent",
                        cursor: 0
                    }, {
                        latex: "\\sec ",
                        display: "/imgs/shortcut/layer2/trig/trig_5_sec.svg",
                        description: "Secant",
                        cursor: 0
                    }, {
                        latex: "\\csc ",
                        display: "/imgs/shortcut/layer2/trig/trig_6_csc.svg",
                        description: "Cosecant",
                        cursor: 0
                    }, {
                        latex: "\\arcsin ",
                        display: "/imgs/shortcut/layer2/trig/trig_13_arcsin.svg",
                        description: "Arcsine",
                        cursor: 0
                    }, {
                        latex: "\\arccos ",
                        display: "/imgs/shortcut/layer2/trig/trig_14_arccos.svg",
                        description: "Arccosine",
                        cursor: 0
                    }, {
                        latex: "\\arctan ",
                        display: "/imgs/shortcut/layer2/trig/trig_15_arctan.svg",
                        description: "Arctangent",
                        cursor: 0
                    }, {
                        latex: "\\sinh ",
                        display: "/imgs/shortcut/layer2/trig/trig_19_sinh.svg",
                        description: "Hyperbolic Sine",
                        cursor: 0
                    }, {
                        latex: "\\cosh ",
                        display: "/imgs/shortcut/layer2/trig/trig_20_cosh.svg",
                        description: "Hyperbolic Cosine",
                        cursor: 0
                    }, {
                        latex: "\\tanh ",
                        display: "/imgs/shortcut/layer2/trig/trig_21_tanh.svg",
                        description: "Hyperbolic Tangent",
                        cursor: 0
                    }]
                }, {
                    id: "integral",
                    name: "Integration",
                    icon: "/imgs/shortcut/layer1/integral.png",
                    iconSize: "w-8 h-10",
                    symbols: [{
                        latex: "\\int",
                        display: "/imgs/shortcut/layer2/integral/integral_1_int.svg",
                        description: "Integral",
                        cursor: 0
                    }, {
                        latex: "\\int_{a}^{b}",
                        display: "/imgs/shortcut/layer2/integral/integral_2_inta.svg",
                        description: "Definite Integral",
                        cursor: 0
                    }, {
                        latex: "\\int\\limits_{a}^{b}",
                        display: "/imgs/shortcut/layer2/integral/integral_3_intb.svg",
                        description: "Large Definite Integral",
                        cursor: 0
                    }, {
                        latex: "\\iint",
                        display: "/imgs/shortcut/layer2/integral/integral_4_iint.svg",
                        description: "Double Integral",
                        cursor: 0
                    }, {
                        latex: "\\iint_{a}^{b}",
                        display: "/imgs/shortcut/layer2/integral/integral_5_iinta.svg",
                        description: "Definite Double Integral",
                        cursor: 0
                    }, {
                        latex: "\\iiint",
                        display: "/imgs/shortcut/layer2/integral/integral_7_iiint.svg",
                        description: "Triple Integral",
                        cursor: 0
                    }, {
                        latex: "\\iiint_{a}^{b}",
                        display: "/imgs/shortcut/layer2/integral/integral_8_iiinta.svg",
                        description: "Definite Triple Integral",
                        cursor: 0
                    }, {
                        latex: "\\oint",
                        display: "/imgs/shortcut/layer2/integral/integral_10_oint.svg",
                        description: "Contour Integral",
                        cursor: 0
                    }, {
                        latex: "\\oint_{}^{} ",
                        display: "/imgs/shortcut/layer2/integral/integral_11_ointa.svg",
                        description: "Definite Contour Integral",
                        cursor: 0
                    }]
                }, {
                    id: "sum",
                    name: "Large Operators",
                    icon: "/imgs/shortcut/layer1/sum.png",
                    iconSize: "w-8 h-10",
                    symbols: [{
                        latex: "\\sum",
                        display: "/imgs/shortcut/layer2/sum/sum_1_sum_sum.svg",
                        description: "Sum",
                        cursor: 0
                    }, {
                        latex: "\\sum_{a}^{b}",
                        display: "/imgs/shortcut/layer2/sum/sum_2_sum_suma.svg",
                        description: "Sum with Limits",
                        cursor: 0
                    }, {
                        latex: "\\sum_{a}^{b}",
                        display: "/imgs/shortcut/layer2/sum/sum_3_sum_sumb.svg",
                        description: "Large Sum with Limits",
                        cursor: 0
                    }, {
                        latex: "\\prod",
                        display: "/imgs/shortcut/layer2/sum/sum_4_prod_prod.svg",
                        description: "Product",
                        cursor: 0
                    }, {
                        latex: "\\prod_{a}^{b}",
                        display: "/imgs/shortcut/layer2/sum/sum_5_prod_proda.svg",
                        description: "Product with Limits",
                        cursor: 0
                    }, {
                        latex: "\\bigcup",
                        display: "/imgs/shortcut/layer2/sum/sum_10_cup_cup.svg",
                        description: "Union",
                        cursor: 0
                    }, {
                        latex: "\\bigcap",
                        display: "/imgs/shortcut/layer2/sum/sum_13_cup_cap.svg",
                        description: "Intersection",
                        cursor: 0
                    }, {
                        latex: "\\bigvee",
                        display: "/imgs/shortcut/layer2/sum/sum_16_vee_vee.svg",
                        description: "Logical OR",
                        cursor: 0
                    }, {
                        latex: "\\bigwedge",
                        display: "/imgs/shortcut/layer2/sum/sum_19_vee_wedage.svg",
                        description: "Logical AND",
                        cursor: 0
                    }]
                }, {
                    id: "matrix",
                    name: "Matrices & Arrays",
                    icon: "/imgs/shortcut/layer1/matrix.png",
                    iconSize: "w-8 h-6",
                    symbols: [{
                        latex: "\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}",
                        display: "/imgs/shortcut/layer2/matrix/matrix_2_bmatrix.svg",
                        description: "Bracket Matrix",
                        cursor: 16,
                        isMatrix: !0,
                        matrixType: "bmatrix"
                    }, {
                        latex: "\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}",
                        display: "/imgs/shortcut/layer2/matrix/matrix_3_pmatrix.svg",
                        description: "Parentheses Matrix",
                        cursor: 16,
                        isMatrix: !0,
                        matrixType: "pmatrix"
                    }, {
                        latex: "\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}",
                        display: "/imgs/shortcut/layer2/matrix/matrix_4_vmatrix.svg",
                        description: "Determinant",
                        cursor: 16,
                        isMatrix: !0,
                        matrixType: "vmatrix"
                    }, {
                        latex: "\\begin{matrix} a & b \\\\ c & d \\end{matrix}",
                        display: "/imgs/shortcut/layer2/matrix/matrix_1_matrix.svg",
                        description: "Plain Matrix",
                        cursor: 15,
                        isMatrix: !0,
                        matrixType: "matrix"
                    }, {
                        latex: "\\begin{Vmatrix} a & b \\\\ c & d \\end{Vmatrix}",
                        display: "/imgs/shortcut/layer2/matrix/matrix_5_bigVmatrix.svg",
                        description: "Double Bar Matrix",
                        cursor: 16,
                        isMatrix: !0,
                        matrixType: "Vmatrix"
                    }, {
                        latex: "\\begin{cases} a & \\text{if } x > 0 \\\\ b & \\text{if } x \\le 0 \\end{cases}",
                        display: "/imgs/shortcut/layer2/matrix/matrix_9_case.svg",
                        description: "Cases",
                        cursor: 14,
                        isMatrix: !0,
                        matrixType: "cases"
                    }, {
                        latex: "\\begin{align} a &= b \\\\ c &= d \\end{align}",
                        display: "/imgs/shortcut/layer2/matrix/matrix_10_align.svg",
                        description: "Align",
                        cursor: 14,
                        isMatrix: !0,
                        matrixType: "align"
                    }, {
                        latex: "\\begin{smallmatrix} a & b \\\\ c & d \\end{smallmatrix}",
                        display: "/imgs/shortcut/layer2/matrix/matrix_1_matrix.svg",
                        description: "Small Matrix",
                        cursor: 18,
                        isMatrix: !0,
                        matrixType: "smallmatrix"
                    }, {
                        latex: "\\left[\\begin{array}{c|c} a & b \\\\ c & d \\end{array}\\right]",
                        display: "/imgs/shortcut/layer2/matrix/matrix_6_bigBmatrix.svg",
                        description: "Augmented Matrix",
                        cursor: 25,
                        isMatrix: !0,
                        matrixType: "augmented"
                    }, {
                        latex: "\\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{bmatrix}",
                        display: "/imgs/shortcut/layer2/matrix/matrix_2_bmatrix.svg",
                        description: "3x3 Matrix",
                        cursor: 16,
                        isMatrix: !0,
                        matrixType: "bmatrix"
                    }, {
                        latex: "\\left\\{ \\begin{matrix} a & b \\\\\n c & d \\end{matrix} \\right.",
                        display: "/imgs/shortcut/layer2/matrix/matrix_7_leftmatrix.svg",
                        description: "Left Bracket Matrix",
                        cursor: 24,
                        isMatrix: !0,
                        matrixType: "leftmatrix"
                    }, {
                        latex: "\\left. \\begin{matrix} a & b \\\\\n c & d \\end{matrix} \\right\\}",
                        display: "/imgs/shortcut/layer2/matrix/matrix_8_rightmatrix.svg",
                        description: "Right Bracket Matrix",
                        cursor: 24,
                        isMatrix: !0,
                        matrixType: "rightmatrix"
                    }]
                }, {
                    id: "bracket",
                    name: "Brackets & Parentheses",
                    icon: "/imgs/shortcut/layer1/bracket.png",
                    iconSize: "w-6 h-8",
                    symbols: [{
                        latex: "\\left( \\right)",
                        display: "/imgs/shortcut/layer2/bracket/bracket_1_bracket_1.svg",
                        description: "Parentheses",
                        cursor: 7
                    }, {
                        latex: "\\left\\| \\right\\|",
                        display: "/imgs/shortcut/layer2/bracket/bracket_2_bracket_2.svg",
                        description: "Double Bars",
                        cursor: 8
                    }, {
                        latex: "\\left[ \\right]",
                        display: "/imgs/shortcut/layer2/bracket/bracket_3_bracket_3.svg",
                        description: "Square Brackets",
                        cursor: 7
                    }, {
                        latex: "\\langle \\rangle",
                        display: "/imgs/shortcut/layer2/bracket/bracket_4_bracket_4.svg",
                        description: "Angle Brackets",
                        cursor: 8
                    }, {
                        latex: "\\left\\{ \\right\\}",
                        display: "/imgs/shortcut/layer2/bracket/bracket_5_bracket_5.svg",
                        description: "Curly Braces",
                        cursor: 8
                    }, {
                        latex: "\\left \\lfloor  \\right \\rfloor ",
                        display: "/imgs/shortcut/layer2/bracket/bracket_6_bracket_6.svg",
                        description: "Double Square Brackets",
                        cursor: 14
                    }, {
                        latex: "\\left| \\right|",
                        display: "/imgs/shortcut/layer2/bracket/bracket_7_bracket_7.svg",
                        description: "Absolute Value",
                        cursor: 7
                    }, {
                        latex: "\\left \\lceil  \\right \\rceil ",
                        display: "/imgs/shortcut/layer2/bracket/bracket_8_bracket_8.svg",
                        description: "Triple Bars",
                        cursor: 12
                    }]
                }];

            function E(e) {
                let {
                    onSymbolClick: t,
                    mode: r = "web"
                } = e, l = (0, a.useRef)(null), [o, c] = (0, a.useState)(null), [d, u] = (0, a.useState)("2"), [m, h] = (0, a.useState)("2"), g = (e, r) => {
                    t(e, r)
                }, x = e => {
                    o === e ? c(null) : (c(e), u("2"), h("2"))
                }, p = (e, t, r) => {
                    if ("cases" === e || "align" === e) {
                        let r = [];
                        for (let i = 0; i < t; i++) "cases" === e ? r.push("\\placeholder{} & \\text{if } \\placeholder{}") : r.push("\\placeholder{} &= \\placeholder{}");
                        let i = r.join(" \\\\ ");
                        return "cases" === e ? "\\begin{cases} ".concat(i, " \\end{cases}") : "\\begin{align} ".concat(i, " \\end{align}")
                    }
                    let i = [];
                    for (let e = 0; e < t; e++) {
                        let e = [];
                        for (let t = 0; t < r; t++) e.push("\\placeholder{}");
                        i.push(e.join(" & "))
                    }
                    let a = i.join(" \\\\ ");
                    switch (e) {
                        case "bmatrix":
                            return "\\begin{bmatrix} ".concat(a, " \\end{bmatrix}");
                        case "pmatrix":
                            return "\\begin{pmatrix} ".concat(a, " \\end{pmatrix}");
                        case "vmatrix":
                            return "\\begin{vmatrix} ".concat(a, " \\end{vmatrix}");
                        case "Vmatrix":
                            return "\\begin{Vmatrix} ".concat(a, " \\end{Vmatrix}");
                        case "smallmatrix":
                            return "\\begin{smallmatrix} ".concat(a, " \\end{smallmatrix}");
                        case "augmented":
                            let s = [];
                            for (let e = 0; e < t; e++) {
                                let e = [];
                                for (let t = 0; t < r; t++) e.push("\\placeholder{}");
                                if (r > 1) {
                                    let t = e.pop();
                                    s.push(e.join(" & ") + " & " + t)
                                } else s.push(e.join(" & "))
                            }
                            let n = s.join(" \\\\ "),
                                l = "c".repeat(r - 1) + "|c";
                            return "\\left[\\begin{array}{".concat(l, "} ").concat(n, " \\end{array}\\right]");
                        case "leftmatrix":
                            return "\\left\\{ \\begin{matrix} ".concat(a, " \\end{matrix} \\right.");
                        case "rightmatrix":
                            return "\\left. \\begin{matrix} ".concat(a, " \\end{matrix} \\right\\}");
                        default:
                            return "\\begin{matrix} ".concat(a, " \\end{matrix}")
                    }
                }, f = e => {
                    let r = parseInt(d),
                        i = parseInt(m);
                    "cases" === e || "align" === e ? r > 0 && r <= 10 && (t(p(e, r, 2), 0), c(null), u("2"), h("2")) : r > 0 && i > 0 && r <= 10 && i <= 10 && (t(p(e, r, i), 0), c(null), u("2"), h("2"))
                }, b = (e, t) => {
                    "Enter" === e.key ? f(t) : "Escape" === e.key && c(null)
                }, y = e => (0, i.jsx)("div", {
                    className: z(r, e.id),
                    children: e.symbols.map((t, a) => {
                        if (t.divider) return (0, i.jsxs)("div", {
                            className: "col-span-full mb-1 mt-1",
                            children: [(0, i.jsx)("div", {
                                className: "text-xs font-medium text-muted-foreground",
                                children: t.group
                            }), (0, i.jsx)("div", {
                                className: "h-px bg-border mt-0.5"
                            })]
                        }, "divider-".concat(a));
                        let l = "".concat(e.id, "-").concat(a),
                            p = o === l;
                        return (0, i.jsxs)("div", {
                            className: "relative flex flex-col items-center",
                            "data-matrix-element": t.isMatrix ? "true" : void 0,
                            children: [(0, i.jsx)(k, {
                                tooltip: t.description || "Insert symbol",
                                children: (0, i.jsx)(n.z, {
                                    variant: "web" === r ? "outline" : "ghost",
                                    size: "web" !== r ? "icon-compact" : "default",
                                    className: (0, s.Z)("p-1 h-auto w-auto min-w-0 flex items-center justify-center", "web" === r && "border", "web" !== r && "border-0 hover:bg-gray-100 rounded-lg", "pointer-events-auto cursor-pointer relative z-[9999]", p && "bg-blue-50 border-blue-300"),
                                    style: {
                                        pointerEvents: "auto",
                                        position: "relative",
                                        zIndex: 9999
                                    },
                                    "data-matrix-element": t.isMatrix ? "true" : void 0,
                                    onMouseDown: e => {
                                        e.preventDefault(), e.stopPropagation(), requestAnimationFrame(() => {
                                            if (t.isMatrix && t.matrixType) x(l);
                                            else {
                                                var e;
                                                g(t.latex || "", null !== (e = t.cursor) && void 0 !== e ? e : 0)
                                            }
                                        })
                                    },
                                    title: t.description || "",
                                    children: (0, i.jsx)("img", {
                                        src: t.display || "",
                                        alt: t.description || "",
                                        className: C(e.id, r, t)
                                    })
                                })
                            }), t.isMatrix && p && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("div", {
                                    className: "fixed inset-0 bg-black bg-opacity-20 z-[10000]",
                                    onClick: () => c(null)
                                }), (0, i.jsx)("div", {
                                    className: "fixed bg-white border border-gray-300 rounded-md shadow-lg p-3 z-[10001]",
                                    style: {
                                        left: "50%",
                                        top: "50%",
                                        transform: "translate(-50%, -50%)",
                                        minWidth: "180px"
                                    },
                                    onClick: e => e.stopPropagation(),
                                    "data-matrix-element": "true",
                                    children: (0, i.jsxs)("div", {
                                        className: "flex flex-col gap-2",
                                        children: [(0, i.jsx)("div", {
                                            className: "flex items-center justify-center",
                                            children: (0, i.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [(0, i.jsx)(j.I, {
                                                    type: "number",
                                                    min: "1",
                                                    max: "10",
                                                    value: d,
                                                    onChange: e => u(e.target.value),
                                                    className: "w-10 h-7 text-sm text-center border-gray-300 rounded px-1",
                                                    autoFocus: !0,
                                                    onKeyDown: e => b(e, t.matrixType),
                                                    "data-matrix-element": "true"
                                                }), "cases" !== t.matrixType && "align" !== t.matrixType && (0, i.jsxs)(i.Fragment, {
                                                    children: [(0, i.jsx)("span", {
                                                        className: "text-gray-400 text-sm",
                                                        children: "\xd7"
                                                    }), (0, i.jsx)(j.I, {
                                                        type: "number",
                                                        min: "1",
                                                        max: "10",
                                                        value: m,
                                                        onChange: e => h(e.target.value),
                                                        className: "w-10 h-7 text-sm text-center border-gray-300 rounded px-1",
                                                        onKeyDown: e => b(e, t.matrixType),
                                                        "data-matrix-element": "true"
                                                    })]
                                                })]
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "flex justify-center gap-2 mt-1",
                                            children: [(0, i.jsx)(k, {
                                                tooltip: "Cancel matrix insertion",
                                                children: (0, i.jsx)(n.z, {
                                                    size: "sm",
                                                    variant: "outline",
                                                    className: "px-3 py-1 text-xs h-6",
                                                    onClick: () => c(null),
                                                    "data-matrix-element": "true",
                                                    children: "Cancel"
                                                })
                                            }), (0, i.jsx)(k, {
                                                tooltip: "Insert the configured matrix",
                                                children: (0, i.jsx)(n.z, {
                                                    size: "sm",
                                                    className: "px-3 py-1 text-xs h-6 bg-blue-500 hover:bg-blue-600 text-white",
                                                    onClick: () => f(t.matrixType),
                                                    disabled: 1 > parseInt(d) || parseInt(d) > 10 || "cases" !== t.matrixType && "align" !== t.matrixType && (1 > parseInt(m) || parseInt(m) > 10) || isNaN(parseInt(d)) || "cases" !== t.matrixType && "align" !== t.matrixType && isNaN(parseInt(m)),
                                                    "data-matrix-element": "true",
                                                    children: "OK"
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        }, "".concat(e.id, "-").concat(t.description || "", "-").concat(a))
                    })
                });
                return (0, i.jsx)(_.pn, {
                    delayDuration: 120,
                    children: (0, i.jsx)("div", {
                        ref: l,
                        className: (0, s.Z)("thin-scrollbar border rounded-md bg-white relative overflow-y-auto h-full", {
                            "p-4 space-y-4": "web" === r,
                            "p-1 space-y-1": "addondialog" === r || "addonsidebar" === r
                        }),
                        onClick: e => {
                            let t = e.target.closest("[data-matrix-element]");
                            o && !t && c(null)
                        },
                        children: (0, i.jsx)("div", {
                            className: (0, s.Z)("flex flex-wrap", N.spacing[r].categoryGap),
                            children: A.map(e => (0, i.jsxs)(w.J2, {
                                modal: !1,
                                children: [(0, i.jsxs)(_.u, {
                                    children: [(0, i.jsx)(_.aJ, {
                                        asChild: !0,
                                        children: (0, i.jsx)(w.xo, {
                                            asChild: !0,
                                            children: (0, i.jsx)(n.z, {
                                                variant: "outline",
                                                className: (0, s.Z)("flex flex-col items-center justify-center\n                      shadow-sm hover:shadow-md\n                      transition-all duration-200", {
                                                    "rounded-lg p-2": "web" === r,
                                                    "rounded-md border-0 p-1": "web" !== r
                                                }, {
                                                    "w-16 h-18": "web" === r,
                                                    "w-11 h-12": "addondialog" === r,
                                                    "w-10 h-12": "addonsidebar" === r
                                                }),
                                                title: e.name,
                                                children: (0, i.jsx)("img", {
                                                    src: e.icon,
                                                    alt: e.name,
                                                    className: "object-contain transition-all duration-200 hover:scale-110",
                                                    style: "web" !== r ? {
                                                        width: "2.2rem",
                                                        height: "2.2rem",
                                                        padding: "0"
                                                    } : {
                                                        width: "greek" === e.id ? "2.5rem" : "symbol" === e.id ? "2.2rem" : "frac" === e.id ? "2.8rem" : "trig" === e.id ? "3rem" : "2.5rem",
                                                        height: "integral" === e.id || "sum" === e.id ? "3.5rem" : "frac" === e.id || "sqrt" === e.id ? "3.2rem" : "greek" === e.id ? "2.2rem" : "2.8rem",
                                                        minWidth: "2.5rem",
                                                        minHeight: "2.5rem",
                                                        maxWidth: "3.5rem",
                                                        maxHeight: "3.5rem",
                                                        padding: "0.2rem"
                                                    }
                                                })
                                            })
                                        })
                                    }), (0, i.jsx)(_._v, {
                                        children: e.name
                                    })]
                                }), (0, i.jsx)(w.yk, {
                                    className: (0, s.Z)(S(r).padding, S(r).width, S(r).maxWidth, "overflow-hidden"),
                                    side: "bottom",
                                    align: "addonsidebar" === r ? "center" : "start",
                                    sideOffset: "addonsidebar" === r ? 8 : 4,
                                    alignOffset: 0,
                                    avoidCollisions: !0,
                                    collisionPadding: "addonsidebar" === r ? 12 : 4,
                                    children: (0, i.jsxs)("div", {
                                        className: (0, s.Z)("space-y-2", {
                                            "max-w-full": "addonsidebar" === r
                                        }),
                                        children: [(0, i.jsx)("h4", {
                                            className: "font-medium text-sm truncate",
                                            children: e.name
                                        }), (0, i.jsx)("div", {
                                            className: (0, s.Z)({
                                                "overflow-hidden max-w-full": "addonsidebar" === r,
                                                "overflow-hidden": "addonsidebar" !== r
                                            }),
                                            children: y(e)
                                        })]
                                    })
                                })]
                            }, e.id))
                        })
                    })
                })
            }
            var M = r(79362),
                D = r(17745),
                I = r(20363),
                L = r(37519),
                R = r(89027),
                q = r(63499);

            function T(e) {
                let {
                    latex: t,
                    isClient: r,
                    mode: o = "web",
                    fontSize: c = 12
                } = e, d = (0, a.useRef)(null), [u, m] = (0, a.useState)(!1), [h, g] = (0, a.useState)({
                    horizontal: !1,
                    vertical: !1
                }), [x, p] = (0, a.useState)(""), f = (0, a.useMemo)(() => ({
                    __html: q.RT
                }), []), b = (0, a.useMemo)(() => Math.round(1.333 * c), [c]), y = (0, a.useMemo)(() => {
                    if (!t || !t.trim()) return "";
                    let e = t.trim();
                    if (0 === e.length) return "";
                    let r = e.replace(/\\placeholder(\{\})?/g, "\\square");
                    return (0, R.iV)(r)
                }, [t]);
                (0, a.useEffect)(() => {
                    (async () => {
                        if (!r || !y.trim()) {
                            p("");
                            return
                        }
                        try {
                            let e = await (0, R.CY)(y, !0);
                            p(e)
                        } catch (e) {
                            console.error("Error rendering equation:", e), p('<div style="color: red;">Error: '.concat(e instanceof Error ? e.message : String(e), "</div>"))
                        }
                    })()
                }, [y, r]), (0, a.useEffect)(() => {
                    (async () => {
                        if (d.current) try {
                            x || await (0, q.au)(), setTimeout(() => {
                                if (d.current) {
                                    let {
                                        scrollWidth: e,
                                        clientWidth: t,
                                        scrollHeight: r,
                                        clientHeight: i
                                    } = d.current, a = e > t, s = r > i;
                                    g({
                                        horizontal: a,
                                        vertical: s
                                    }), m(a || s)
                                }
                            }, 100)
                        } catch (e) {
                            console.error("MathJax rendering error:", e)
                        }
                    })()
                }, [x, y, r]);
                let v = async () => {
                        if (d.current) try {
                            await (0, q.au)();
                            let e = d.current.querySelector(".MathJax");
                            if (!e) {
                                console.error("MathJax element not found");
                                return
                            }
                            let t = e.querySelector("svg");
                            if (!t) {
                                console.error("SVG element not found");
                                return
                            }
                            let r = t.cloneNode(!0),
                                i = t.getAttribute("width"),
                                a = t.getAttribute("height"),
                                s = t.getAttribute("viewBox");
                            r.setAttribute("xmlns", "http://www.w3.org/2000/svg"), r.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), i && r.setAttribute("width", i), a && r.setAttribute("height", a), s && r.setAttribute("viewBox", s), r.removeAttribute("role"), r.removeAttribute("focusable"), r.removeAttribute("aria-hidden"), r.removeAttribute("style");
                            let n = '<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n' + new XMLSerializer().serializeToString(r);
                            await navigator.clipboard.writeText(n)
                        } catch (e) {
                            console.error("Error copying SVG:", e)
                        }
                    },
                    w = async () => {
                        window.MathJax || await (0, R.Vi)();
                        try {
                            let e = await window.MathJax.tex2mmlPromise(t, {
                                display: !0
                            });
                            navigator.clipboard.writeText(e)
                        } catch (e) {
                            console.error("Error converting to MathML:", e)
                        }
                    },
                    j = async () => {
                        if (window.MathJax) try {
                            let e = await window.MathJax.tex2mmlPromise(t, {
                                    display: !0
                                }),
                                r = '<m:oMathPara xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math">\n  <m:oMath>\n    '.concat(e.replace(/<\/?math[^>]*>/g, ""), "\n  </m:oMath>\n</m:oMathPara>");
                            navigator.clipboard.writeText(r)
                        } catch (e) {
                            console.error("Error converting to OMML:", e)
                        }
                    },
                    _ = async () => {
                        if (d.current) try {
                            await (0, q.au)();
                            let e = d.current.querySelector(".MathJax");
                            if (!e) {
                                console.error("MathJax element not found");
                                return
                            }
                            let t = e.querySelector("svg");
                            if (!t) {
                                console.error("SVG element not found");
                                return
                            }
                            let r = t.cloneNode(!0),
                                i = t.getAttribute("width"),
                                a = t.getAttribute("height"),
                                s = t.getAttribute("viewBox");
                            r.setAttribute("xmlns", "http://www.w3.org/2000/svg"), r.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), i && r.setAttribute("width", i), a && r.setAttribute("height", a), s && r.setAttribute("viewBox", s), r.removeAttribute("role"), r.removeAttribute("focusable"), r.removeAttribute("aria-hidden"), r.removeAttribute("style");
                            let n = '<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n' + new XMLSerializer().serializeToString(r),
                                l = new Blob([n], {
                                    type: "image/svg+xml"
                                }),
                                o = URL.createObjectURL(l),
                                c = document.createElement("a");
                            c.href = o, c.download = "math-equation.svg", c.click(), URL.revokeObjectURL(o)
                        } catch (e) {
                            console.error("Error exporting SVG:", e), alert("Failed to export SVG. Please check the console for details.")
                        }
                    },
                    k = async () => {
                        if (d.current) try {
                            let e, t;
                            await (0, q.au)();
                            let r = d.current.querySelector(".MathJax");
                            if (!r) {
                                console.error("MathJax element not found");
                                return
                            }
                            let i = r.querySelector("svg");
                            if (!i) {
                                console.error("SVG element not found");
                                return
                            }
                            let a = i.getAttribute("viewBox");
                            if (a) {
                                let r = a.split(" ").map(parseFloat);
                                e = r[2], t = r[3]
                            } else {
                                let r = i.getAttribute("width"),
                                    a = i.getAttribute("height");
                                if (r && a && !r.includes("%") && !a.includes("%")) e = parseFloat(r), t = parseFloat(a);
                                else {
                                    let r = i.getBoundingClientRect();
                                    e = r.width, t = r.height
                                }
                            }
                            if (!e || !t || 0 === e || 0 === t) {
                                console.error("Could not determine valid SVG dimensions");
                                let r = i.getBoundingClientRect();
                                if (e = r.width, t = r.height, !e || !t || 0 === e || 0 === t) {
                                    alert("Failed to determine equation dimensions for export.");
                                    return
                                }
                            }
                            let s = .2 * e,
                                n = .2 * t,
                                l = i.cloneNode(!0);
                            l.setAttribute("xmlns", "http://www.w3.org/2000/svg"), l.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), l.setAttribute("width", s.toString()), l.setAttribute("height", n.toString()), a && l.setAttribute("viewBox", a), l.removeAttribute("role"), l.removeAttribute("focusable"), l.removeAttribute("aria-hidden"), l.removeAttribute("style");
                            let o = new XMLSerializer().serializeToString(l),
                                c = window.btoa(unescape(encodeURIComponent(o))),
                                u = "data:image/svg+xml;base64,".concat(c),
                                m = new Image;
                            await new Promise((e, t) => {
                                m.onload = () => e(), m.onerror = e => {
                                    console.error("Failed to load image from SVG data URI", e), t(Error("Failed to load image for export"))
                                }, m.src = u
                            });
                            let h = document.createElement("canvas");
                            h.width = s, h.height = n;
                            let g = h.getContext("2d");
                            if (!g) throw Error("Failed to get Canvas context");
                            g.drawImage(m, 0, 0, h.width, h.height);
                            let x = g.getImageData(0, 0, h.width, h.height).data,
                                p = h.width,
                                f = 0,
                                b = h.height,
                                y = 0,
                                v = !1;
                            for (let e = 0; e < h.height; e++)
                                for (let t = 0; t < h.width; t++) x[(e * h.width + t) * 4 + 3] > 0 && (p = Math.min(t, p), f = Math.max(t, f), b = Math.min(e, b), y = Math.max(e, y), v = !0);
                            v || (p = 0, f = h.width - 1, b = 0, y = h.height - 1), f = Math.max(p, f), y = Math.max(b, y);
                            let w = f - p + 1,
                                j = y - b + 1;
                            if (w <= 0 || j <= 0) {
                                console.error("Calculated content dimensions are invalid."), alert("Failed to calculate equation boundaries for export.");
                                return
                            }
                            let _ = document.createElement("canvas");
                            _.width = w + 100, _.height = j + 100;
                            let k = _.getContext("2d");
                            if (!k) throw Error("Failed to get final Canvas context");
                            k.drawImage(h, p, b, f - p, y - b, 50, 50, f - p, y - b);
                            let N = _.toDataURL("image/png"),
                                C = document.createElement("a");
                            C.href = N, C.download = "math-equation.png", C.click()
                        } catch (e) {
                            console.error("Error exporting PNG:", e), alert("Failed to export PNG. Please check the console for details.")
                        }
                    },
                    N = async () => {
                        if (d.current) try {
                            let e, t;
                            await (0, q.au)();
                            let r = d.current.querySelector(".MathJax");
                            if (!r) {
                                console.error("MathJax element not found");
                                return
                            }
                            let i = r.querySelector("svg");
                            if (!i) {
                                console.error("SVG element not found");
                                return
                            }
                            let a = i.getAttribute("viewBox");
                            if (a) {
                                let r = a.split(" ").map(parseFloat);
                                e = r[2], t = r[3]
                            } else {
                                let r = i.getAttribute("width"),
                                    a = i.getAttribute("height");
                                if (r && a && !r.includes("%") && !a.includes("%")) e = parseFloat(r), t = parseFloat(a);
                                else {
                                    let r = i.getBoundingClientRect();
                                    e = r.width, t = r.height
                                }
                            }
                            if (!e || !t || 0 === e || 0 === t) {
                                console.error("Could not determine valid SVG dimensions");
                                let r = i.getBoundingClientRect();
                                if (e = r.width, t = r.height, !e || !t || 0 === e || 0 === t) {
                                    alert("Failed to determine equation dimensions for export.");
                                    return
                                }
                            }
                            let s = .2 * e,
                                n = .2 * t,
                                l = i.cloneNode(!0);
                            l.setAttribute("xmlns", "http://www.w3.org/2000/svg"), l.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), l.setAttribute("width", s.toString()), l.setAttribute("height", n.toString()), a && l.setAttribute("viewBox", a), l.removeAttribute("role"), l.removeAttribute("focusable"), l.removeAttribute("aria-hidden"), l.removeAttribute("style");
                            let o = new XMLSerializer().serializeToString(l),
                                c = window.btoa(unescape(encodeURIComponent(o))),
                                u = "data:image/svg+xml;base64,".concat(c),
                                m = new Image;
                            await new Promise((e, t) => {
                                m.onload = () => e(), m.onerror = e => {
                                    console.error("Failed to load image from SVG data URI", e), t(Error("Failed to load image for export"))
                                }, m.src = u
                            });
                            let h = document.createElement("canvas");
                            h.width = s, h.height = n;
                            let g = h.getContext("2d");
                            if (!g) throw Error("Failed to get Canvas context");
                            g.drawImage(m, 0, 0, h.width, h.height);
                            let x = g.getImageData(0, 0, h.width, h.height).data,
                                p = h.width,
                                f = 0,
                                b = h.height,
                                y = 0,
                                v = !1;
                            for (let e = 0; e < h.height; e++)
                                for (let t = 0; t < h.width; t++) {
                                    let r = (e * h.width + t) * 4;
                                    x[r + 3] > 0 && (x[r] < 255 || x[r + 1] < 255 || x[r + 2] < 255) && (p = Math.min(t, p), f = Math.max(t, f), b = Math.min(e, b), y = Math.max(e, y), v = !0)
                                }
                            v || (p = 0, f = h.width - 1, b = 0, y = h.height - 1), f = Math.max(p, f), y = Math.max(b, y);
                            let w = f - p + 1,
                                j = y - b + 1;
                            if (w <= 0 || j <= 0) {
                                console.error("Calculated content dimensions are invalid."), alert("Failed to calculate equation boundaries for export.");
                                return
                            }
                            let _ = document.createElement("canvas");
                            _.width = w + 100, _.height = j + 100;
                            let k = _.getContext("2d");
                            if (!k) throw Error("Failed to get final Canvas context");
                            k.fillStyle = "white", k.fillRect(0, 0, _.width, _.height), k.drawImage(h, p, b, f - p, y - b, 50, 50, f - p, y - b);
                            let N = _.toDataURL("image/jpeg", .9),
                                C = document.createElement("a");
                            C.href = N, C.download = "math-equation.jpg", C.click()
                        } catch (e) {
                            console.error("Error exporting JPG:", e), alert("Failed to export JPG. Please check the console for details.")
                        }
                    },
                    C = async () => {
                        if (d.current) try {
                            let e = d.current.querySelector(".MathJax");
                            if (!e) {
                                console.error("MathJax element not found");
                                return
                            }
                            let t = e.querySelector("svg");
                            if (!t) {
                                console.error("SVG element not found");
                                return
                            }
                            let r = t.cloneNode(!0),
                                i = t.getAttribute("width"),
                                a = t.getAttribute("height"),
                                s = t.getAttribute("viewBox");
                            r.setAttribute("xmlns", "http://www.w3.org/2000/svg"), r.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), i && r.setAttribute("width", i), a && r.setAttribute("height", a), s && r.setAttribute("viewBox", s), r.removeAttribute("role"), r.removeAttribute("focusable"), r.removeAttribute("aria-hidden"), r.removeAttribute("style");
                            let n = new XMLSerializer().serializeToString(r),
                                l = window.btoa(unescape(encodeURIComponent(n))),
                                o = "data:image/svg+xml;base64,".concat(l),
                                c = new Image;
                            await new Promise((e, t) => {
                                c.onload = e, c.onerror = e => {
                                    console.error("Failed to load image", e), t(e)
                                }, c.src = o
                            });
                            let u = document.createElement("canvas"),
                                m = t.getBoundingClientRect();
                            u.width = 2 * m.width, u.height = 2 * m.height;
                            let h = u.getContext("2d");
                            if (!h) throw Error("Failed to get Canvas context");
                            h.drawImage(c, 0, 0, u.width, u.height);
                            let g = h.getImageData(0, 0, u.width, u.height).data,
                                x = u.width,
                                p = 0,
                                f = u.height,
                                b = 0;
                            for (let e = 0; e < u.width; e++)
                                for (let t = 0; t < u.height; t++) {
                                    let r = (e + u.width * t) * 4;
                                    (g[r] > 0 || g[r + 1] > 0 || g[r + 2] > 0 || g[r + 3] > 0) && (x = Math.min(e, x), p = Math.max(e, p), f = Math.min(t, f), b = Math.max(t, b))
                                }
                            let y = document.createElement("canvas");
                            y.width = p - x + 100, y.height = b - f + 100;
                            let v = y.getContext("2d");
                            if (!v) throw Error("Failed to get final Canvas context");
                            v.drawImage(u, x, f, p - x, b - f, 50, 50, p - x, b - f), y.toBlob(async e => {
                                if (!e) throw Error("Failed to create image Blob");
                                try {
                                    await navigator.clipboard.write([new ClipboardItem({
                                        "image/png": e
                                    })]), console.log("Image copied to clipboard")
                                } catch (r) {
                                    console.error("Failed to copy to clipboard:", r);
                                    let e = y.toDataURL("image/png"),
                                        t = document.createElement("a");
                                    t.href = e, t.download = "math-equation.png", t.click()
                                }
                            }, "image/png", 1)
                        } catch (e) {
                            console.error("Error copying image:", e), alert("Unable to copy image. Attempting to download as a fallback.")
                        }
                    };
                return "addonsidebar" === o ? (0, i.jsxs)("div", {
                    className: "h-full relative",
                    children: [(0, i.jsx)("style", {
                        dangerouslySetInnerHTML: f
                    }), (0, i.jsx)("div", {
                        ref: d,
                        "data-latex-output-container": "true",
                        className: (0, s.Z)("h-full flex", h.horizontal && h.vertical ? "justify-start items-start" : h.horizontal ? "justify-start items-center" : h.vertical ? "justify-center items-start" : "justify-center items-center"),
                        style: {
                            whiteSpace: "nowrap",
                            fontSize: "".concat(b, "px")
                        },
                        children: x ? (0, i.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: x
                            },
                            style: {
                                display: "inline-block",
                                minWidth: "max-content",
                                padding: "2px"
                            }
                        }) : null
                    })]
                }) : "addondialog" === o ? (0, i.jsxs)("div", {
                    className: "h-full flex flex-col bg-white rounded-md relative",
                    children: [(0, i.jsx)("style", {
                        dangerouslySetInnerHTML: f
                    }), (0, i.jsx)("div", {
                        ref: d,
                        "data-latex-output-container": "true",
                        className: (0, s.Z)("flex-1 flex p-2", h.horizontal && h.vertical ? "justify-start items-start" : h.horizontal ? "justify-start items-center" : h.vertical ? "justify-center items-start" : "justify-center items-center"),
                        style: {
                            fontSize: "".concat(b, "px")
                        },
                        children: x ? (0, i.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: x
                            },
                            style: {
                                display: "inline-block",
                                minWidth: "max-content"
                            }
                        }) : (0, i.jsx)("div", {
                            className: "text-gray-500 text-sm",
                            children: t ? "Rendering..." : ""
                        })
                    })]
                }) : (0, i.jsxs)(l.Zb, {
                    className: "mt-4",
                    children: [(0, i.jsx)("style", {
                        dangerouslySetInnerHTML: f
                    }), (0, i.jsx)(l.Ol, {
                        children: (0, i.jsxs)(l.ll, {
                            className: "flex min-w-0 flex-nowrap items-center justify-between gap-2",
                            children: [(0, i.jsx)("span", {
                                className: "min-w-0 flex-1 truncate",
                                children: "Preview"
                            }), (0, i.jsxs)("div", {
                                className: "flex shrink-0 gap-1 min-[510px]:gap-2",
                                children: [(0, i.jsxs)(M.h_, {
                                    children: [(0, i.jsx)(M.$F, {
                                        asChild: !0,
                                        children: (0, i.jsxs)(n.z, {
                                            variant: "outline",
                                            size: "sm",
                                            className: "h-8 px-2 min-[510px]:h-9 min-[510px]:px-3",
                                            "aria-label": "Code",
                                            children: [(0, i.jsx)(D.Z, {
                                                className: "h-4 w-4 min-[510px]:mr-1"
                                            }), (0, i.jsx)("span", {
                                                className: "hidden min-[510px]:inline",
                                                children: "Code"
                                            })]
                                        })
                                    }), (0, i.jsxs)(M.AW, {
                                        align: "end",
                                        children: [(0, i.jsx)(M.Xi, {
                                            onClick: () => {
                                                navigator.clipboard.writeText(t)
                                            },
                                            children: "Copy LaTeX"
                                        }), (0, i.jsx)(M.Xi, {
                                            onClick: () => {
                                                if (!d.current) return;
                                                let e = d.current.querySelector("math") || d.current.querySelector(".MathJax") || d.current.querySelector("mjx-container"),
                                                    t = "";
                                                if (0 === (t = e ? e.outerHTML : x || d.current.innerHTML).trim().length) {
                                                    console.error("No rendered HTML found to copy");
                                                    return
                                                }
                                                navigator.clipboard.writeText(t)
                                            },
                                            children: "Copy HTML"
                                        }), (0, i.jsx)(M.Xi, {
                                            onClick: v,
                                            children: "Copy SVG Code"
                                        }), (0, i.jsx)(M.Xi, {
                                            onClick: w,
                                            children: "Copy MathML"
                                        }), (0, i.jsx)(M.Xi, {
                                            onClick: j,
                                            children: "Copy OMML (Office)"
                                        })]
                                    })]
                                }), (0, i.jsxs)(M.h_, {
                                    children: [(0, i.jsx)(M.$F, {
                                        asChild: !0,
                                        children: (0, i.jsxs)(n.z, {
                                            variant: "outline",
                                            size: "sm",
                                            className: "h-8 px-2 min-[510px]:h-9 min-[510px]:px-3",
                                            "aria-label": "Image",
                                            children: [(0, i.jsx)(I.Z, {
                                                className: "h-4 w-4 min-[510px]:mr-1"
                                            }), (0, i.jsx)("span", {
                                                className: "hidden min-[510px]:inline",
                                                children: "Image"
                                            })]
                                        })
                                    }), (0, i.jsxs)(M.AW, {
                                        align: "end",
                                        children: [(0, i.jsx)(M.Xi, {
                                            onClick: _,
                                            children: "SVG Format"
                                        }), (0, i.jsx)(M.Xi, {
                                            onClick: k,
                                            children: "PNG Format"
                                        }), (0, i.jsx)(M.Xi, {
                                            onClick: N,
                                            children: "JPG Format"
                                        }), (0, i.jsx)(M.Xi, {
                                            onClick: C,
                                            children: "Copy to Clipboard"
                                        })]
                                    })]
                                }), (0, i.jsxs)(M.h_, {
                                    children: [(0, i.jsx)(M.$F, {
                                        asChild: !0,
                                        children: (0, i.jsxs)(n.z, {
                                            variant: "outline",
                                            size: "sm",
                                            className: "h-8 px-2 min-[510px]:h-9 min-[510px]:px-3",
                                            "aria-label": "More",
                                            children: [(0, i.jsx)(L.Z, {
                                                className: "h-4 w-4 min-[510px]:mr-1"
                                            }), (0, i.jsx)("span", {
                                                className: "hidden min-[510px]:inline",
                                                children: "More"
                                            })]
                                        })
                                    }), (0, i.jsxs)(M.AW, {
                                        align: "end",
                                        children: [(0, i.jsx)(M.Xi, {
                                            onClick: () => {
                                                let e = t.replace(/([\{\}\[\]\(\)\#\$\%\&\_\^])/g, "\\$1");
                                                navigator.clipboard.writeText(e)
                                            },
                                            children: "Escaped LaTeX"
                                        }), (0, i.jsx)(M.Xi, {
                                            onClick: () => {
                                                navigator.clipboard.writeText("$".concat(t, "$"))
                                            },
                                            children: "$...$ Wrapped"
                                        }), (0, i.jsx)(M.Xi, {
                                            onClick: () => {
                                                navigator.clipboard.writeText("$$".concat(t, "$$"))
                                            },
                                            children: "$$...$$ Wrapped"
                                        })]
                                    })]
                                })]
                            })]
                        })
                    }), (0, i.jsx)(l.aY, {
                        ref: d,
                        "data-latex-output-container": "true",
                        className: (0, s.Z)("thin-scrollbar p-4 min-h-[220px] max-h-[800px] overflow-auto rounded-md bg-white border-gray-200 dark:bg-gray-950 dark:border-gray-800 flex", h.horizontal && h.vertical ? "justify-start items-start" : h.horizontal ? "justify-start items-center" : h.vertical ? "justify-center items-start" : "justify-center items-center"),
                        style: {
                            whiteSpace: "nowrap",
                            fontSize: "".concat(b, "px")
                        },
                        children: x ? (0, i.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: x
                            },
                            style: {
                                display: "inline-block",
                                minWidth: "max-content"
                            }
                        }) : r && "" !== y.trim() ? (0, i.jsx)("div", {
                            className: "math-container"
                        }) : null
                    })]
                })
            }
            var F = r(15121),
                P = r(31398),
                U = r(67873);
            let Z = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        r = {
                            web: {
                                fontSize: 20,
                                minHeight: 140,
                                maxHeight: 420,
                                padding: 12,
                                lineHeight: 2,
                                borderRadius: 6
                            },
                            addondialog: {
                                fontSize: 20,
                                minHeight: 140,
                                maxHeight: 420,
                                padding: 12,
                                lineHeight: 2,
                                borderRadius: 6
                            },
                            addonsidebar: {
                                fontSize: 20,
                                minHeight: 140,
                                maxHeight: 420,
                                padding: 12,
                                lineHeight: 2,
                                borderRadius: 6
                            }
                        },
                        i = r[e] || r.web,
                        a = Math.min(Math.max(t, .5), 2),
                        s = e => "".concat(Math.round(e * a), "px");
                    return {
                        fontSize: s(i.fontSize),
                        minHeight: s(i.minHeight),
                        maxHeight: s(i.maxHeight),
                        padding: s(i.padding),
                        lineHeight: i.lineHeight.toString(),
                        borderRadius: s(i.borderRadius)
                    }
                },
                G = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = Z(e, t),
                        a = {
                            virtualKeyboardMode: "addonsidebar" === e ? "off" : "onfocus",
                            smartMode: !1,
                            smartFence: !0,
                            smartSuperscript: !0,
                            menuItems: [],
                            style: {
                                fontSize: i.fontSize,
                                minHeight: i.minHeight,
                                maxHeight: i.maxHeight,
                                padding: i.padding,
                                lineHeight: i.lineHeight,
                                borderRadius: i.borderRadius,
                                border: "2px solid #e2e8f0",
                                backgroundColor: "#ffffff",
                                width: "100%",
                                "--selection-background-color": "rgba(255, 193, 7, 0.4)",
                                "--selection-color": "#000000",
                                "--caret-color": "#ff6b35",
                                "--caret-width": "3px",
                                "--placeholder-color": "#ff9500",
                                "--placeholder-background": "rgba(255, 149, 0, 0.15)",
                                "--prompt-background": "#fff3cd",
                                "--prompt-color": "#856404",
                                "--prompt-border": "2px dashed #ffc107",
                                "--prompt-min-width": "30px",
                                "--hover-background": "rgba(0, 123, 255, 0.1)",
                                "--focus-outline": "3px solid rgba(66, 153, 225, 0.5)",
                                "--focus-outline-offset": "2px"
                            }
                        };
                    return { ...a,
                        ...r,
                        style: { ...a.style,
                            ...r.style
                        },
                        keybindings: [{
                            key: "Space",
                            command: ["insert", " "]
                        }, ...a.keybindings || [], ...r.keybindings || []]
                    }
                },
                H = e => {
                    let t = {
                        web: "mathlive-web",
                        addondialog: "mathlive-dialog",
                        addonsidebar: "mathlive-sidebar"
                    };
                    return t[e] || t.web
                };
            class V {
                saveState() {
                    if (!this.mathfield) throw Error("MathField not available");
                    let e = {
                        value: this.mathfield.getValue(),
                        selection: this.mathfield.selection,
                        position: this.mathfield.position,
                        hasFocus: this.mathfield.hasFocus()
                    };
                    try {
                        void 0 !== this.mathfield.selectionIsCollapsed && (e.selectionIsCollapsed = this.mathfield.selectionIsCollapsed), void 0 !== this.mathfield.selectionDepth && (e.selectionDepth = this.mathfield.selectionDepth)
                    } catch (e) {
                        console.warn("Unable to get detailed selection info:", e)
                    }
                    return this.savedState = e, e
                }
                restoreState(e) {
                    let t = e || this.savedState;
                    if (!t || !this.mathfield) return !1;
                    try {
                        return this.mathfield.setValue(t.value), t.selection && (this.mathfield.selection = t.selection), void 0 !== t.position && (this.mathfield.position = t.position), t.hasFocus && this.mathfield.focus(), !0
                    } catch (e) {
                        return console.error("❌ State restore failed:", e), !1
                    }
                }
                safeInsert(e) {
                    if (!this.mathfield) return !1;
                    let t = this.saveState();
                    try {
                        return this.mathfield.insert(e, {
                            insertionMode: "replaceSelection",
                            selectionMode: "placeholder",
                            format: "latex"
                        }), console.log("✅ Safe insertion successful (method 1)"), !0
                    } catch (r) {
                        console.warn("⚠️ Method 1 failed, trying method 2:", r);
                        try {
                            return t.selection && t.selection.length > 0 && this.mathfield.executeCommand("deleteBackward"), this.mathfield.insert(e, {
                                selectionMode: "placeholder",
                                format: "latex"
                            }), console.log("✅ Safe insertion successful (method 2)"), !0
                        } catch (r) {
                            if (console.warn("⚠️ Method 2 failed, trying to restore state:", r), this.restoreState(t)) try {
                                return this.mathfield.insert(e), console.log("✅ Safe insertion successful (after restore)"), !0
                            } catch (e) {
                                console.error("❌ Insertion after restore also failed:", e)
                            }
                        }
                    }
                    return !1
                }
                simulateKeyboardInput(e) {
                    if (!this.mathfield) return !1;
                    try {
                        let t = {
                            "\\frac{#0}{#1}": "ctrl+1",
                            "\\sqrt{#0}": "ctrl+2",
                            "^{#0}": "ctrl+3",
                            "_{#0}": "ctrl+4"
                        }[e];
                        if (t) {
                            let [e, r] = t.split("+"), i = new KeyboardEvent("keydown", {
                                key: r,
                                code: "Key".concat(r.toUpperCase()),
                                ctrlKey: "ctrl" === e,
                                bubbles: !0,
                                cancelable: !0
                            });
                            return this.mathfield.dispatchEvent(i), !0
                        }
                        let r = new InputEvent("input", {
                            data: e,
                            inputType: "insertText",
                            bubbles: !0,
                            cancelable: !0
                        });
                        return this.mathfield.dispatchEvent(r), console.log("✅ Input event simulation successful"), !0
                    } catch (e) {
                        return console.warn("⚠️ Keyboard event simulation failed:", e), !1
                    }
                }
                insertWithMultipleStrategies(e) {
                    if (this.safeInsert(e) || this.simulateKeyboardInput(e)) return !0;
                    try {
                        return this.mathfield.insert(e), console.log("✅ Basic insertion successful"), !0
                    } catch (e) {
                        return console.error("❌ All strategies failed:", e), !1
                    }
                }
                constructor(e) {
                    this.savedState = null, this.mathfield = e
                }
            }
            let X = [{
                    latex: "\\alpha ",
                    command: ["insert", "\\alpha"],
                    category: "greek"
                }, {
                    latex: "\\beta ",
                    command: ["insert", "\\beta"],
                    category: "greek"
                }, {
                    latex: "\\gamma ",
                    command: ["insert", "\\gamma"],
                    category: "greek"
                }, {
                    latex: "\\delta ",
                    command: ["insert", "\\delta"],
                    category: "greek"
                }, {
                    latex: "\\pi ",
                    command: ["insert", "\\pi"],
                    category: "greek"
                }, {
                    latex: "\\theta ",
                    command: ["insert", "\\theta"],
                    category: "greek"
                }, {
                    latex: "\\lambda ",
                    command: ["insert", "\\lambda"],
                    category: "greek"
                }, {
                    latex: "\\mu ",
                    command: ["insert", "\\mu"],
                    category: "greek"
                }, {
                    latex: "\\sigma ",
                    command: ["insert", "\\sigma"],
                    category: "greek"
                }, {
                    latex: "\\omega ",
                    command: ["insert", "\\omega"],
                    category: "greek"
                }, {
                    latex: "+ ",
                    command: ["insert", "+"],
                    category: "operator"
                }, {
                    latex: "- ",
                    command: ["insert", "-"],
                    category: "operator"
                }, {
                    latex: "\\times ",
                    command: ["insert", "\\times"],
                    category: "operator"
                }, {
                    latex: "\\div ",
                    command: ["insert", "\\div"],
                    category: "operator"
                }, {
                    latex: "\\pm ",
                    command: ["insert", "\\pm"],
                    category: "operator"
                }, {
                    latex: "\\mp ",
                    command: ["insert", "\\mp"],
                    category: "operator"
                }, {
                    latex: "\\cdot ",
                    command: ["insert", "\\cdot"],
                    category: "operator"
                }, {
                    latex: "\\frac{a}{b}",
                    command: ["insert", "\\frac{#0}{#1}"],
                    description: "Fraction with placeholders",
                    category: "structure"
                }, {
                    latex: "\\tfrac{a}{b}",
                    command: ["insert", "\\tfrac{#0}{#1}"],
                    description: "Small fraction",
                    category: "structure"
                }, {
                    latex: "\\sqrt{x} ",
                    command: ["insert", "\\sqrt{#0}"],
                    description: "Square root",
                    category: "structure"
                }, {
                    latex: "\\sqrt[n]{x} ",
                    command: ["insert", "\\sqrt[#0]{#1}"],
                    description: "Nth root",
                    category: "structure"
                }, {
                    latex: "x^a ",
                    command: ["insert", "^{#0}"],
                    description: "Superscript",
                    category: "structure"
                }, {
                    latex: "x_a ",
                    command: ["insert", "_{#0}"],
                    description: "Subscript",
                    category: "structure"
                }, {
                    latex: "x^b_a ",
                    command: ["insert", "^{#0}_{#1}"],
                    description: "Super and subscript",
                    category: "structure"
                }, {
                    latex: "{}_a^b x ",
                    command: ["insert", "{}_{#0}^{#1}"],
                    description: "Left super and subscript",
                    category: "structure"
                }, {
                    latex: "\\int",
                    command: ["insert", "\\int_{#0}^{#1}"],
                    description: "Definite integral",
                    category: "calculus"
                }, {
                    latex: "\\int_{a}^{b}",
                    command: ["insert", "\\int_{#0}^{#1}"],
                    description: "Definite integral",
                    category: "calculus"
                }, {
                    latex: "\\sum",
                    command: ["insert", "\\sum_{#0}^{#1}"],
                    description: "Sum with limits",
                    category: "calculus"
                }, {
                    latex: "\\sum_{a}^{b}",
                    command: ["insert", "\\sum_{#0}^{#1}"],
                    description: "Sum with limits",
                    category: "calculus"
                }, {
                    latex: "\\prod",
                    command: ["insert", "\\prod_{#0}^{#1}"],
                    description: "Product with limits",
                    category: "calculus"
                }, {
                    latex: "\\lim ",
                    command: ["insert", "\\lim_{#0}"],
                    description: "Limit",
                    category: "calculus"
                }, {
                    latex: "\\lim_{x \\to 0} ",
                    command: ["insert", "\\lim_{#0 \\to #1}"],
                    description: "Limit with variable",
                    category: "calculus"
                }, {
                    latex: "\\log_{a}{b} ",
                    command: ["insert", "\\log_{#0}{#1}"],
                    description: "Logarithm",
                    category: "function"
                }, {
                    latex: "\\ln_{a}{b} ",
                    command: ["insert", "\\ln_{#0}{#1}"],
                    description: "Natural logarithm",
                    category: "function"
                }, {
                    latex: "\\sin ",
                    command: ["insert", "\\sin"],
                    category: "function"
                }, {
                    latex: "\\cos ",
                    command: ["insert", "\\cos"],
                    category: "function"
                }, {
                    latex: "\\tan ",
                    command: ["insert", "\\tan"],
                    category: "function"
                }, {
                    latex: "\\cot ",
                    command: ["insert", "\\cot"],
                    category: "function"
                }, {
                    latex: "\\sec ",
                    command: ["insert", "\\sec"],
                    category: "function"
                }, {
                    latex: "\\csc ",
                    command: ["insert", "\\csc"],
                    category: "function"
                }, {
                    latex: "\\hat{a} ",
                    command: ["insert", "\\hat{#0}"],
                    description: "Hat accent",
                    category: "accent"
                }, {
                    latex: "\\vec{a} ",
                    command: ["insert", "\\vec{#0}"],
                    description: "Vector arrow",
                    category: "accent"
                }, {
                    latex: "\\overline{abc} ",
                    command: ["insert", "\\overline{#0}"],
                    description: "Overline",
                    category: "accent"
                }, {
                    latex: "\\underline{abc} ",
                    command: ["insert", "\\underline{#0}"],
                    description: "Underline",
                    category: "accent"
                }],
                B = e => e.trim(),
                W = (() => {
                    let e = new Map;
                    return X.forEach(t => {
                        let r = B(t.latex);
                        e.set(r, t.command)
                    }), e
                })(),
                O = e => {
                    let t = B(e);
                    return W.get(t) || ["insert", e]
                },
                $ = null,
                J = null,
                K = () => !!customElements.get("math-field"),
                Y = (e, t) => new Promise((r, i) => {
                    if (document.getElementById(e)) return r();
                    let a = document.createElement("link");
                    a.id = e, a.rel = "stylesheet", a.href = t, a.onload = () => r(), a.onerror = () => i(Error("Stylesheet load failed")), document.head.appendChild(a)
                }),
                Q = () => $ || ($ = (async () => {
                    try {
                        await Y("MathLive-static-css", "https://cdn.jsdelivr.net/npm/mathlive@0.108.2/mathlive-static.css")
                    } catch (e) {
                        await Y("MathLive-static-css", "https://unpkg.com/mathlive@0.108.2/mathlive-static.css")
                    }
                })()).catch(e => {
                    throw $ = null, e
                }),
                ee = async () => {
                    await new Promise(e => {
                        if (document.body) return e();
                        window.addEventListener("DOMContentLoaded", () => e(), {
                            once: !0
                        })
                    });
                    let e = document.createElement("math-field");
                    e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.left = "-99999px", e.style.top = "0", e.style.visibility = "hidden", e.style.pointerEvents = "none", document.body.appendChild(e), await new Promise(e => window.requestAnimationFrame(() => e())), e.remove()
                },
                et = () => J || (J = (async () => {
                    var e;
                    Q().catch(() => {});
                    let t = customElements.get("math-field"),
                        i = null !== (e = window.MathfieldElement) && void 0 !== e ? e : t;
                    if (!i) try {
                        i = (await r.e(3577).then(r.bind(r, 96334))).MathfieldElement
                    } catch (t) {
                        let e = async e => {
                            await new Promise((t, r) => {
                                let i = document.createElement("script");
                                i.src = e, i.async = !0, i.onload = () => t(), i.onerror = () => r(Error("CDN load failed")), document.head.appendChild(i)
                            })
                        };
                        try {
                            await e("https://cdn.jsdelivr.net/npm/mathlive@0.108.2/dist/mathlive.min.js")
                        } catch (t) {
                            await e("https://unpkg.com/mathlive@0.108.2/dist/mathlive.min.js")
                        }
                        i = window.MathfieldElement
                    }
                    if (!i) throw Error("MathfieldElement is undefined");
                    try {
                        i.fontsDirectory = "https://cdn.jsdelivr.net/npm/mathlive@0.108.2/fonts/"
                    } catch (e) {
                        try {
                            i.fontsDirectory = "https://unpkg.com/mathlive@0.108.2/fonts/"
                        } catch (e) {
                            i.fontsDirectory = ""
                        }
                    }
                    i.soundsDirectory = null, i.textToSpeechRules = "mathlive", customElements.get("math-field") || customElements.define("math-field", i), await ee().catch(() => {})
                })()).catch(e => {
                    throw J = null, e
                }),
                er = () => {
                    let [e, t] = (0, a.useState)(() => !K()), [r, i] = (0, a.useState)(!1);
                    return (0, a.useEffect)(() => {
                        let e = !0;
                        return K() || t(!0), et().then(() => {
                            e && (i(!1), t(!1))
                        }).catch(r => {
                            console.error("Failed to load MathLive:", r), e && (i(!0), t(!1))
                        }), () => {
                            e = !1
                        }
                    }, []), {
                        isLoading: e,
                        hasError: r
                    }
                };
            var ei = r(51922),
                ea = r.n(ei);
            let es = {
                    min: 120,
                    max: 400
                },
                en = () => {
                    var e, t, r, i, a, s;
                    return !!((null !== (a = null === (e = navigator) || void 0 === e ? void 0 : e.maxTouchPoints) && void 0 !== a ? a : 0) > 0 || "ontouchstart" in window) || null !== (s = null === (r = (i = window).matchMedia) || void 0 === r ? void 0 : null === (t = r.call(i, "(pointer: coarse)")) || void 0 === t ? void 0 : t.matches) && void 0 !== s && s
                },
                el = e => {
                    if (!e) return es.min;
                    let t = e.match(/([0-9]+(?:\.[0-9]+)?)/),
                        r = t ? Number.parseFloat(t[1]) : Number.NaN;
                    return Number.isFinite(r) ? r : es.min
                },
                eo = /\\placeholder(\{\})?/g,
                ec = RegExp("□", "g"),
                ed = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    if (!e) return "";
                    let t = e.trim();
                    return t.startsWith("\\[") && t.endsWith("\\]") && (t = t.substring(2, t.length - 2)), t.startsWith("\\(") && t.endsWith("\\)") && (t = t.substring(2, t.length - 2)), t.startsWith("$$") && t.endsWith("$$") && (t = t.substring(2, t.length - 2)), t.startsWith("$") && t.endsWith("$") && t.length > 2 && (t = t.substring(1, t.length - 1)), t.includes("\\begin") || (t = t.replace(RegExp("(?<!\\\\)&", "g"), "\\&")), t.trim()
                },
                eu = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return e.replace(eo, "□")
                },
                em = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return e.replace(ec, "\\placeholder{}")
                },
                eh = (0, a.forwardRef)((e, t) => {
                    let {
                        value: r,
                        onChange: l,
                        mode: o = "web",
                        placeholder: c = "Enter LaTeX or use visual editor...",
                        className: d,
                        maxHeightLimit: u,
                        fillAvailableHeight: m = !1
                    } = e, [h, g] = (0, a.useState)("visual"), [x, p] = (0, a.useState)(r), f = (0, a.useMemo)(() => eu(x), [x]), {
                        isLoading: b,
                        hasError: y
                    } = er(), v = (0, a.useMemo)(() => en(), []), w = (0, a.useMemo)(() => Z(o, 1), [o]), j = (0, a.useMemo)(() => Math.max(el(w.minHeight), es.min), [w.minHeight]), k = (0, a.useMemo)(() => el(w.maxHeight) || es.max, [w.maxHeight]), N = (0, a.useMemo)(() => "number" == typeof u && Number.isFinite(u) ? Math.min(u, k) : k, [k, u]), C = (0, a.useCallback)(e => Math.min(Math.max(e, j), N > 0 ? N : es.max), [j, N]), S = !("addondialog" === o && m), [z, A] = (0, a.useState)(j), [E, M] = (0, a.useState)(j), D = (0, a.useRef)(!1), I = (0, a.useRef)(null), L = (0, a.useRef)(null), R = (0, a.useRef)(null), q = (0, a.useRef)(null), T = (0, a.useRef)(null), X = (0, a.useRef)(0), B = (0, a.useCallback)(() => {
                        X.current += 1;
                        let e = X.current;
                        null !== T.current && window.cancelAnimationFrame(T.current), T.current = window.requestAnimationFrame(() => {
                            T.current = null, (async () => {
                                var t, r, i;
                                if (e !== X.current || y || "visual" !== h) return;
                                let a = L.current,
                                    s = I.current;
                                if (s && (!a || 0 !== a.getClientRects().length)) {
                                    try {
                                        let e = null === (r = document) || void 0 === r ? void 0 : null === (t = r.fonts) || void 0 === t ? void 0 : t.ready;
                                        e && "function" == typeof e.then && await Promise.race([e, new Promise(e => window.setTimeout(e, 500))])
                                    } catch (e) {}
                                    if (await new Promise(e => window.requestAnimationFrame(() => e())), await new Promise(e => window.requestAnimationFrame(() => e())), e === X.current && !y && "visual" === h && (!a || 0 !== a.getClientRects().length)) try {
                                        if ("function" == typeof s.reflow) s.reflow();
                                        else if ("function" == typeof s.executeCommand) try {
                                            s.executeCommand("reflow")
                                        } catch (e) {}
                                        let e = null === (i = s.getBoundingClientRect) || void 0 === i ? void 0 : i.call(s);
                                        S && (null == e ? void 0 : e.height) && A(t => Math.abs(t - e.height) > 1 ? C(e.height) : t)
                                    } catch (e) {}
                                }
                            })()
                        })
                    }, [C, h, y, S]);
                    (0, a.useEffect)(() => {
                        y && g("latex")
                    }, [y]);
                    let W = (0, a.useMemo)(() => ({
                        fontSize: w.fontSize,
                        minHeight: "".concat(j, "px"),
                        maxHeight: "".concat(N, "px"),
                        padding: w.padding,
                        lineHeight: w.lineHeight,
                        borderRadius: w.borderRadius,
                        textAlign: "left",
                        verticalAlign: "top",
                        display: "block",
                        width: "fit-content",
                        minWidth: "100%",
                        maxWidth: "none",
                        border: "none",
                        background: "transparent",
                        outline: "none"
                    }), [w, j, N]);
                    (0, a.useEffect)(() => {
                        if (!b && I.current && "visual" === h && !y) try {
                            let e = G(o, 1),
                                t = v && "off" !== e.virtualKeyboardMode,
                                r = () => {
                                    if (!I.current) return;
                                    let r = I.current.getBoundingClientRect();
                                    r.height && A(e => Math.abs(e - r.height) > 1 ? C(r.height) : e), I.current.virtualKeyboardMode = t ? e.virtualKeyboardMode : "off", I.current.menuItems = e.menuItems || [], I.current.smartMode = e.smartMode, I.current.smartFence = e.smartFence, I.current.smartSuperscript = e.smartSuperscript, I.current.letterShapeStyle = "tex", I.current.mathVirtualKeyboardPolicy = t ? "auto" : "manual", !t && window.mathVirtualKeyboard && window.mathVirtualKeyboard.hide();
                                    try {
                                        let e = I.current.getValue();
                                        x && e !== x ? I.current.setValue(x) : !e && x && I.current.setValue(x)
                                    } catch (e) {}
                                    if (!q.current) {
                                        var i;
                                        q.current = (i = I.current, new V(i))
                                    }
                                };
                            r(), I.current && (I.current.scrollIntoView = () => {}), requestAnimationFrame(() => {
                                r()
                            })
                        } catch (e) {}
                    }, [o, h, y, v, w, j, N, C, b]);
                    let O = (0, a.useCallback)(e => {
                        let t = ed(e);
                        p(t), l(t)
                    }, [l]);
                    (0, a.useEffect)(() => {
                        if ("visual" !== h || y || !S) return;
                        let e = I.current;
                        if (!e || "undefined" == typeof ResizeObserver) return;
                        let t = new ResizeObserver(e => {
                            for (let t of e) {
                                let e = C(t.contentRect.height);
                                A(t => Math.abs(t - e) > 1 ? e : t)
                            }
                        });
                        return t.observe(e), () => t.disconnect()
                    }, [h, y, C, S]), (0, a.useEffect)(() => {
                        if ("visual" !== h || y || !S || "undefined" == typeof ResizeObserver) return;
                        let e = L.current;
                        if (!e) return;
                        let t = new ResizeObserver(() => {
                            B()
                        });
                        return t.observe(e), () => t.disconnect()
                    }, [h, y, B, S]), (0, a.useEffect)(() => {
                        "visual" !== h || y || B()
                    }, [h, y, B]), (0, a.useEffect)(() => {
                        if ("latex" !== h || !S) return;
                        let e = R.current;
                        if (!e || "undefined" == typeof ResizeObserver) return;
                        let t = new ResizeObserver(e => {
                            for (let t of e) {
                                let e = C(t.contentRect.height);
                                M(t => Math.abs(t - e) > 1 ? e : t)
                            }
                        });
                        return t.observe(e), () => t.disconnect()
                    }, [h, C, S]), (0, a.useEffect)(() => {
                        S && (A(j), M(e => Math.max(e, j)))
                    }, [j, S]);
                    let $ = (0, a.useCallback)(() => {
                            if (!S) return;
                            let e = C(z || j);
                            D.current = !0, M(e)
                        }, [C, z, j, S]),
                        J = (0, a.useCallback)(e => {
                            if (e === h || "visual" === e && y) return;
                            let t = x;
                            if ("visual" === h && I.current) try {
                                let e = I.current.getValue();
                                O(e), t = ed(e)
                            } catch (e) {}
                            if ("latex" === h && R.current) {
                                let e = em(R.current.value);
                                O(e), t = ed(e)
                            }
                            g(e), setTimeout(() => {
                                if ("visual" === e && I.current && !y) try {
                                    I.current.setValue(t), I.current.focus({
                                        preventScroll: !0
                                    }), t.trim() && (I.current.executeCommand("moveToMathfieldStart"), I.current.executeCommand("moveToNextPlaceholder")), B()
                                } catch (e) {} else "latex" === e && R.current && (S && !D.current && $(), R.current.value = eu(x), R.current.focus())
                            }, 100)
                        }, [h, x, O, y, B, $, S]),
                        K = (0, a.useCallback)(() => {
                            if (I.current) try {
                                let e = I.current.getValue();
                                O(e)
                            } catch (e) {}
                        }, [O]),
                        Y = (0, a.useCallback)(() => {
                            if (v && window.mathVirtualKeyboard) try {
                                var e, t;
                                null === (e = (t = window.mathVirtualKeyboard).show) || void 0 === e || e.call(t)
                            } catch (e) {}
                        }, [v]),
                        Q = (0, a.useCallback)(e => {
                            O(em(e.target.value))
                        }, [O]);
                    return ((0, a.useEffect)(() => {
                        if (r !== x) {
                            if (p(r), "visual" === h && I.current && !y) try {
                                I.current.setValue(r)
                            } catch (e) {} else "latex" === h && R.current && (R.current.value = eu(r))
                        }
                    }, [r, x, h, y]), (0, a.useImperativeHandle)(t, () => ({
                        focus: () => {
                            if ("visual" === h && I.current && !y) try {
                                I.current.focus({
                                    preventScroll: !0
                                })
                            } catch (e) {} else "latex" === h && R.current && R.current.focus()
                        },
                        getCurrentMode: () => h,
                        switchMode: J,
                        insertLatex: e => {
                            if ("visual" === h && I.current && !y) try {
                                I.current.insert(e, {
                                    insertionMode: "replaceSelection",
                                    selectionMode: "placeholder"
                                })
                            } catch (t) {
                                try {
                                    I.current.executeCommand(["insert", e])
                                } catch (e) {}
                            } else if ("latex" === h && R.current) {
                                let t = R.current,
                                    r = t.selectionStart,
                                    i = t.selectionEnd,
                                    a = t.value,
                                    s = eu(e),
                                    n = a.substring(0, r) + s + a.substring(i);
                                t.value = n;
                                let o = em(n);
                                p(o), l(o), setTimeout(() => {
                                    t.focus(), t.setSelectionRange(r + s.length, r + s.length)
                                }, 0)
                            }
                        },
                        insertLatexWithSelection: e => {
                            if ("visual" === h && I.current && !y) try {
                                let t = {
                                    value: I.current.getValue(),
                                    selection: I.current.selection,
                                    position: I.current.position,
                                    hasFocus: I.current.hasFocus()
                                };
                                try {
                                    I.current.insert(e, {
                                        insertionMode: "replaceSelection",
                                        selectionMode: "placeholder",
                                        format: "latex"
                                    }), I.current.getValue(), I.current.hasFocus() || I.current.focus();
                                    return
                                } catch (e) {}
                                try {
                                    t.selection && t.selection.length > 0 && I.current.executeCommand("deleteBackward"), I.current.insert(e, {
                                        selectionMode: "placeholder",
                                        format: "latex"
                                    }), I.current.hasFocus() || I.current.focus();
                                    return
                                } catch (e) {}
                                try {
                                    I.current.setValue(t.value), t.selection && (I.current.selection = t.selection), t.hasFocus && I.current.focus(), I.current.insert(e)
                                } catch (e) {}
                            } catch (t) {
                                console.error("All LaTeX insertion methods failed:", t);
                                try {
                                    I.current.executeCommand(["insert", e])
                                } catch (e) {
                                    console.error("Fallback LaTeX insertion failed:", e)
                                }
                            } else if ("latex" === h && R.current) {
                                let t = R.current,
                                    r = t.selectionStart,
                                    i = t.selectionEnd,
                                    a = t.value,
                                    s = eu(e),
                                    n = a.substring(0, r) + s + a.substring(i);
                                t.value = n;
                                let o = em(n);
                                p(o), l(o), setTimeout(() => {
                                    t.focus(), t.setSelectionRange(r + s.length, r + s.length)
                                }, 0)
                            }
                        }
                    }), [h, J, y, l]), b) ? (0, i.jsx)("div", {
                        className: (0, s.Z)("relative", d),
                        children: (0, i.jsx)("div", {
                            className: (0, s.Z)("w-full border border-input rounded-md bg-background px-3 py-2 flex items-center justify-center", m ? "h-full min-h-0" : "min-h-[140px]"),
                            children: (0, i.jsx)("span", {
                                className: "text-sm text-muted-foreground",
                                children: "Loading enhanced editor..."
                            })
                        })
                    }) : (0, i.jsxs)("div", {
                        className: (0, s.Z)("relative dual-mode-editor flex flex-col", ea().root, m && "flex-1 min-h-0 h-full", "mode-".concat(o), d),
                        style: {
                            minWidth: 0
                        },
                        children: [(0, i.jsx)("div", {
                            className: "absolute bottom-2 right-2 z-10",
                            children: (0, i.jsx)(_.pn, {
                                delayDuration: 120,
                                children: (0, i.jsxs)(_.u, {
                                    children: [(0, i.jsx)(_.aJ, {
                                        asChild: !0,
                                        children: (0, i.jsx)("span", {
                                            className: "inline-flex",
                                            children: (0, i.jsx)(n.z, {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: () => J("visual" === h ? "latex" : "visual"),
                                                className: "h-6 px-2 text-xs bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white",
                                                title: "visual" === h ? "Switch to LaTeX Code" : "Switch to Visual Editor",
                                                disabled: y,
                                                children: "visual" === h ? (0, i.jsx)(P.Z, {
                                                    className: "h-3 w-3"
                                                }) : (0, i.jsx)(U.Z, {
                                                    className: "h-3 w-3"
                                                })
                                            })
                                        })
                                    }), (0, i.jsx)(_._v, {
                                        children: y ? "Visual editor unavailable" : "visual" === h ? "Switch to LaTeX Code" : "Switch to Visual Editor"
                                    })]
                                })
                            })
                        }), !y && (0, i.jsx)("div", {
                            className: (0, s.Z)("mathlive-editor-wrapper thin-scrollbar relative w-full border border-input rounded-md bg-background", m && "flex-1 min-h-0", "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"),
                            ref: L,
                            style: {
                                maxHeight: m ? "100%" : "".concat(N, "px"),
                                minHeight: m ? "0px" : "".concat(j, "px"),
                                height: m ? "100%" : void 0,
                                overflowX: "auto",
                                overflowY: "auto",
                                scrollbarGutter: "stable both-edges",
                                overflowAnchor: "none",
                                padding: "2px",
                                cursor: "text",
                                display: "visual" === h ? "block" : "none"
                            },
                            onClick: e => {
                                if (e.target === e.currentTarget) {
                                    var t;
                                    e.preventDefault(), null === (t = I.current) || void 0 === t || t.focus({
                                        preventScroll: !0
                                    })
                                }
                            },
                            children: (0, i.jsx)("math-field", {
                                ref: I,
                                className: (0, s.Z)("mathlive-editor flex-shrink-0", H(o), "outline-none border-none bg-transparent"),
                                onInput: K,
                                onFocus: Y,
                                onMouseDown: e => {
                                    document.activeElement !== e.currentTarget && (e.preventDefault(), e.currentTarget.focus({
                                        preventScroll: !0
                                    }))
                                },
                                onContextMenu: e => {
                                    e.preventDefault(), e.stopPropagation()
                                },
                                style: W
                            })
                        }), (0, i.jsx)(F.g, {
                            ref: R,
                            value: f,
                            onChange: Q,
                            placeholder: y ? "Visual editor unavailable. Using LaTeX text mode." : c,
                            className: (0, s.Z)("thin-scrollbar font-mono text-sm", m && "flex-1 min-h-0", "latex" === h || y ? "block" : "hidden"),
                            style: {
                                minHeight: m ? "0px" : "".concat(j, "px"),
                                maxHeight: m ? "100%" : "".concat(N, "px"),
                                height: m ? "100%" : "".concat(E, "px"),
                                padding: "web" === o ? "8px ".concat(w.padding, " 4px") : w.padding,
                                lineHeight: w.lineHeight,
                                borderRadius: w.borderRadius,
                                resize: m ? "none" : "vertical",
                                minWidth: "200px",
                                border: "1px solid #e2e8f0",
                                backgroundColor: "#ffffff",
                                overflowX: "auto",
                                overflowY: "auto",
                                scrollbarGutter: "stable both-edges",
                                display: "latex" === h || y ? "block" : "none"
                            },
                            spellCheck: !1
                        })]
                    })
                });

            function eg(e) {
                let {
                    value: t,
                    onChange: r,
                    buttonClassName: s
                } = e, [l, o] = (0, a.useState)(String(t)), [c, d] = (0, a.useState)(!1), u = () => {
                    let e = parseInt(l);
                    !isNaN(e) && e >= 8 && e <= 72 ? (r(e), d(!1)) : o(String(t))
                };
                return (0, i.jsx)(_.pn, {
                    delayDuration: 120,
                    children: (0, i.jsxs)(M.h_, {
                        open: c,
                        onOpenChange: d,
                        children: [(0, i.jsxs)(_.u, {
                            children: [(0, i.jsx)(_.aJ, {
                                asChild: !0,
                                children: (0, i.jsx)(M.$F, {
                                    asChild: !0,
                                    children: (0, i.jsxs)(n.z, {
                                        variant: "outline",
                                        size: "sm",
                                        className: s || "h-6 px-2 text-xs font-medium min-w-[45px]",
                                        children: [t, "pt"]
                                    })
                                })
                            }), (0, i.jsx)(_._v, {
                                children: "Adjust preview and insert font size"
                            })]
                        }), (0, i.jsxs)(M.AW, {
                            align: "start",
                            className: "w-[65px] min-w-[65px] max-w-[65px]",
                            children: [(0, i.jsx)("div", {
                                className: "p-1",
                                children: (0, i.jsx)(j.I, {
                                    type: "number",
                                    value: l,
                                    onChange: e => {
                                        o(e.target.value)
                                    },
                                    onKeyDown: e => {
                                        "Enter" === e.key ? u() : "Escape" === e.key && (o(String(t)), d(!1))
                                    },
                                    onBlur: u,
                                    className: "h-6 text-xs px-1.5 w-full",
                                    placeholder: "8-72",
                                    min: 8,
                                    max: 72
                                })
                            }), (0, i.jsx)(M.VD, {}), (0, i.jsx)("div", {
                                className: "py-0.5",
                                children: [10, 11, 12, 14, 16, 18, 24].map(e => (0, i.jsx)(M.Xi, {
                                    onClick: () => {
                                        r(e), o(String(e)), d(!1)
                                    },
                                    className: "cursor-pointer text-xs h-6 px-2 ".concat(t === e ? "bg-blue-50 text-blue-600 font-medium" : ""),
                                    children: (0, i.jsxs)("span", {
                                        className: "flex items-center justify-between w-full",
                                        children: [(0, i.jsx)("span", {
                                            children: e
                                        }), t === e && (0, i.jsx)("span", {
                                            className: "ml-1 text-blue-600 text-sm",
                                            children: "✓"
                                        })]
                                    })
                                }, e))
                            })]
                        })]
                    })
                })
            }
            eh.displayName = "DualModeEditor";
            var ex = r(63479),
                ep = r(17867),
                ef = r(47552),
                eb = r(93989),
                ey = r(8548),
                ev = r(57623),
                ew = r(18240);
            let ej = /^```(?:json|latex|text)?\s*([\s\S]*?)\s*```$/i,
                e_ = /^\$\$\s*([\s\S]*?)\s*\$\$$/,
                ek = /^\\\[\s*([\s\S]*?)\s*\\\]$/,
                eN = /^\$(?!\$)\s*([\s\S]*?)\s*\$(?!\$)$/,
                eC = /[A-Za-zÀ-ÖØ-öø-ÿ\u0100-\u024F\u1E00-\u1EFF\u3400-\u9FFF]+(?:['’\-][A-Za-zÀ-ÖØ-öø-ÿ\u0100-\u024F\u1E00-\u1EFF\u3400-\u9FFF]+)*/g,
                eS = /[\u3400-\u9FFF]/g,
                ez = /\\[a-zA-Z]+/g,
                eA = /\\begin\{[^}]+\}|\\end\{[^}]+\}/g,
                eE = RegExp("(?<!\\\\)[=+\\-*/^_<>|]", "g"),
                eM = /[.!?;:。！？；：]/g,
                eD = /\\text\{([^{}]*)\}/g;

            function eI(e) {
                return e.replace(/\r\n?/g, "\n").replace(/\t/g, " ").replace(/\u00a0/g, " ").trim()
            }

            function eL(e) {
                return (e.replace(ez, " ").replace(/\\./g, " ").replace(/[{}\[\]^_=+\-*/<>|&]/g, " ").replace(/\d+/g, " ").match(eC) || []).filter(e => e.length >= 2)
            }

            function eR(e, t) {
                return (e.match(t) || []).length
            }

            function eq(e) {
                return new Set(eL(e).map(e => e.toLowerCase()).filter(e => e.length >= 3))
            }

            function eT(e, t) {
                let r = eq(e),
                    i = eq(t);
                if (0 === r.size || 0 === i.size) return 0;
                let a = 0;
                return r.forEach(e => {
                    i.has(e) && (a += 1)
                }), a / r.size
            }

            function eF(e, t) {
                let r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = (r = function(e) {
                        let t = eI(function(e) {
                                let t = e.trim(),
                                    r = t.match(ej);
                                return r ? r[1].trim() : t
                            }(e)),
                            r = !0;
                        for (; r && t;) {
                            if (r = !1, e_.test(t)) {
                                t = t.replace(e_, "$1").trim(), r = !0;
                                continue
                            }
                            if (ek.test(t)) {
                                t = t.replace(ek, "$1").trim(), r = !0;
                                continue
                            }
                            eN.test(t) && (t = t.replace(eN, "$1").trim(), r = !0)
                        }
                        return t
                    }(e), eI(r = function(e) {
                        let t = e.trim(),
                            r = t.match(/\\begin\{([a-z*]+)\}([\s\S]*?)\\end\{\1\}/);
                        if (r) {
                            let e = r[1],
                                t = r[2].trim();
                            if (!t.includes("\\\\") && ["align", "align*", "equation", "equation*", "gather", "gather*", "split"].includes(e)) return t.replace(RegExp("(?<!\\\\)&", "g"), "").trim()
                        }
                        return t.includes("\\\\") || t.includes("\\begin{matrix}") || (t = t.replace(RegExp("(?<!\\\\)&", "g"), "").trim()), t
                    }(r = r.replace(/^\\boxed\{([\s\S]*)\}$/m, "$1").trim()))),
                    s = [],
                    n = [],
                    l = i.strictness || "server";
                if (!a) return {
                    valid: !1,
                    normalizedLatex: "",
                    score: -10,
                    reasons: ["empty_result"],
                    warnings: n
                };
                let o = eR(a, ez),
                    c = eR(a, eA),
                    d = eR(a, eE),
                    u = eR(a, eM),
                    m = eR(a, eS),
                    h = eL(a),
                    g = function(e) {
                        let t;
                        let r = [];
                        for (; null !== (t = eD.exec(e));) r.push(t[1].trim());
                        return eD.lastIndex = 0, r
                    }(a),
                    x = h.length,
                    p = x ? h.reduce((e, t) => e + t.length, 0) / x : 0,
                    f = 0;
                c > 0 && (f += 4), o > 0 && (f += Math.min(4, o)), /[\^_]/.test(a) && (f += 2), d > 0 && (f += Math.min(3, d)), /[{}()[\]]/.test(a) && (f += 1), /\d/.test(a) && (f += 1),
                    function(e) {
                        let t = e.trim();
                        return !(!t || /\s/.test(t)) && (!!/^[A-Za-z]{1,4}$/.test(t) || /[\\^_=+\-*/<>()[\]{}\d]/.test(t))
                    }(a) && (f += 2), ! function(e) {
                        let t = 0;
                        for (let r of e)
                            if ("{" === r && (t += 1), "}" === r && (t -= 1), t < 0) return !1;
                        return 0 === t
                    }(a) && (f -= 3), x >= 4 && (f -= x >= 8 ? 6 : 4), p >= 5 && x >= 4 && (f -= 2), u > 0 && x >= 3 && (f -= 2), m >= 6 && (f -= 4), /\s/.test(a) && x >= 5 && 0 === o && d <= 1 && (f -= 4), a.length > 240 && o < 3 && d < 3 && (f -= 4, n.push("long_low_signal_output"));
                let b = g.reduce((e, t) => e + eL(t).length, 0),
                    y = g.reduce((e, t) => e + eR(t, eS), 0);
                if ((b >= 6 || y >= 10) && (f -= 5, s.push("text_env_natural_language")), i.instruction) {
                    let e = eT(a, i.instruction);
                    x >= 3 && e >= .6 && (f -= 4, s.push("output_echos_instruction"))
                }
                if (i.inputText) {
                    let e = eT(a, i.inputText);
                    x >= 3 && e >= .6 && (f -= 4, s.push("output_echos_prompt_text"))
                }
                "recognize" === t && x >= 4 && 0 === o && 0 === c && (f -= 5, s.push("recognize_natural_language_output")), "modify" === t && x >= 4 && 0 === d && 0 === o && (f -= 3, s.push("modify_non_formula_output")), "generate" === t && x >= 5 && d <= 1 && 0 === o && (f -= 3, s.push("generate_non_formula_output")), "correct" === t && x >= 5 && 0 === d && 0 === o && (f -= 3, s.push("correct_non_formula_output")), a.length > 20 && x >= 5 && 0 === o && d <= 1 && s.push("natural_language_dominant_output"), m >= 8 && 0 === o && d < 2 && s.push("cjk_natural_language_output");
                let v = f >= ("client" === l ? 1 : 2) && 0 === s.length;
                return {
                    valid: v,
                    normalizedLatex: a,
                    score: f,
                    reasons: v ? [] : Array.from(new Set(s.length ? s : ["insufficient_math_signal"])),
                    warnings: n
                }
            }

            function eP(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = new Set;
                for (let a of e) {
                    let e = eF(a, t, { ...r,
                        strictness: "client"
                    });
                    e.valid && e.normalizedLatex && i.add(e.normalizedLatex)
                }
                return Array.from(i).slice(0, 6)
            }

            function eU(e, t) {
                return eF(e, t, {
                    strictness: "client"
                }).valid
            }
            let eZ = [{
                label: "Quadratic formula",
                prompt: "Generate the quadratic formula for solving ax^2 + bx + c = 0. Use display math."
            }, {
                label: "Definite integral",
                prompt: "Generate the definite integral from 0 to 1 of x squared times e to the x dx. Use display math."
            }, {
                label: "3\xd73 matrix",
                prompt: "Generate a 3 by 3 matrix with a, b, c in the first row, d, e, f in the second, and g, h, i in the third. Use a matrix environment such as pmatrix."
            }, {
                label: "Piecewise function",
                prompt: "Generate a piecewise function f(x) equals x squared when x is greater than or equal to 0, and negative x when x is less than 0. Use a cases environment."
            }, {
                label: "System of equations",
                prompt: "Generate a system of equations with x plus y equals 3 and 2x minus y equals 1. Use an aligned system of equations layout."
            }, {
                label: "Aligned derivation",
                prompt: "Generate a multi-line aligned derivation showing (x+1)^2 equals x^2 + 2x + 1. Use an align* environment."
            }];

            function eG(e) {
                let {
                    tooltip: t,
                    children: r
                } = e;
                return (0, i.jsxs)(_.u, {
                    children: [(0, i.jsx)(_.aJ, {
                        asChild: !0,
                        children: (0, i.jsx)("span", {
                            className: "inline-flex",
                            children: r
                        })
                    }), (0, i.jsx)(_._v, {
                        children: t
                    })]
                })
            }

            function eH(e) {
                let {
                    mode: t = "web",
                    latex: r,
                    isClient: s,
                    onApplyLatex: o,
                    candidates: d = [],
                    selectedCandidate: u,
                    onCandidatesChange: m = () => {},
                    onRequireSignIn: h,
                    isLoginRequiredError: g
                } = e, p = "addonsidebar" === t, f = "web" !== t, y = (0, a.useRef)(null), [v, j] = (0, a.useState)(""), [k, N] = (0, a.useState)(!1), [C, S] = (0, a.useState)(!1), [z, A] = (0, a.useState)(null), [E, D] = (0, a.useState)(null), [I, L] = (0, a.useState)(null), R = f ? 1 : 5, q = p ? 60 : f ? 60 : 148, T = p ? 120 : f ? 132 : 320, P = p ? "px-3 py-1.5 text-xs" : f ? "px-3 py-2 text-xs" : "min-h-[148px] px-4 py-4", U = C && r.trim() ? "modify" : "generate", Z = "generate" === U ? "Generate" : "Modify";
                (0, a.useLayoutEffect)(() => {
                    if (!f) return;
                    let e = y.current;
                    if (!e) return;
                    e.style.height = "0px";
                    let t = Math.min(Math.max(e.scrollHeight, q), T);
                    e.style.height = "".concat(t, "px")
                }, [f, v, T, q]), (0, a.useEffect)(() => {
                    r.trim() || (S(!1), L(null))
                }, [r]);
                let G = (0, a.useCallback)(() => {
                        j(""), A(null), D(null), L(null), o(""), m([], null)
                    }, [o, m]),
                    H = (0, a.useCallback)(e => {
                        j(e.prompt), A(null), D(null)
                    }, []),
                    V = (0, a.useCallback)(async () => {
                        let e = v.trim();
                        if (!e) {
                            A("generate" === U ? "Please describe the formula you want to generate." : "Please describe how to modify the current formula.");
                            return
                        }
                        N(!0), A(null), D(null);
                        try {
                            var t, i, a;
                            let s = "",
                                n = [];
                            if ("generate" === U) {
                                let r = await ew.QC.generateLatex(e);
                                s = (null === (t = r.latex) || void 0 === t ? void 0 : t.trim()) || "", n = eP(r.candidates || [], "generate", {
                                    inputText: e,
                                    strictness: "client"
                                })
                            } else {
                                let t = await ew.QC.refineLatex(r, e);
                                s = (null === (i = t.latex) || void 0 === i ? void 0 : i.trim()) || "", n = eP(t.candidates || [], "modify", {
                                    instruction: e,
                                    strictness: "client"
                                })
                            }
                            if (!s) {
                                A("AI returned an empty LaTeX result. Please try a clearer instruction.");
                                return
                            }
                            if (!eU(s, "generate" === U ? "generate" : "modify")) {
                                A("AI returned non-LaTeX content. Please try a clearer formula instruction."), m([], null);
                                return
                            }
                            if (s && function(e) {
                                    let t = e.trim();
                                    return !!(!t || /^here(?:'|')s/i.test(t) || /^latex code[:：]/i.test(t)) || t.includes("```")
                                }(s)) {
                                let e = await ew.QC.correctLatex(s),
                                    t = (null === (a = e.latex) || void 0 === a ? void 0 : a.trim()) || s;
                                if (!eU(t, "correct")) {
                                    A("AI returned non-LaTeX content during correction. Please try again."), m([], null);
                                    return
                                }
                                s = t, e.candidates && e.candidates.length > 0 && (n = eP(e.candidates, "correct", {
                                    strictness: "client"
                                }))
                            }
                            m(n, s), o(s), S(!0), j(""), L("generate" === U ? "generated" : "modified"), D("generate" === U ? "Formula generated." : "Formula updated.")
                        } catch (t) {
                            console.error("Failed to ".concat(U, " LaTeX:"), t);
                            let e = t instanceof Error ? t.message : "generate" === U ? "Generation failed. Please try again later." : "Modification failed. Please try again later.";
                            if (null == g ? void 0 : g(t)) {
                                null == h || h(), A("Please sign in to use this feature.");
                                return
                            }
                            if (e.includes("Insufficient credits, please recharge") || t instanceof ew.MS && 402 === t.code) {
                                window.dispatchEvent(new CustomEvent("insufficient-credits", {
                                    detail: {
                                        message: e
                                    }
                                }));
                                return
                            }
                            A(e)
                        } finally {
                            N(!1)
                        }
                    }, [g, r, o, m, h, U, v]),
                    X = (0, a.useCallback)(e => {
                        (e.metaKey || e.ctrlKey) && "Enter" === e.key && (e.preventDefault(), k || V())
                    }, [V, k]),
                    B = (0, a.useMemo)(() => I ? "generated" === I ? "Generated" : "modified" === I ? "Modified" : "Corrected" : null, [I]);
                return (0, i.jsx)(_.pn, {
                    delayDuration: 120,
                    children: (0, i.jsx)(l.Zb, {
                        className: (0, c.cn)("border-border/80 shadow-sm", f && "border-none bg-transparent shadow-none"),
                        children: (0, i.jsxs)(l.aY, {
                            className: (0, c.cn)("space-y-2.5", f ? "px-0 py-0" : "px-4 py-4"),
                            children: [f ? null : (0, i.jsxs)("div", {
                                className: "flex items-center justify-between gap-3 text-sm font-medium text-foreground",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, i.jsx)("span", {
                                        children: "Prompt"
                                    }), B ? (0, i.jsx)(ev.C, {
                                        variant: "outline",
                                        className: "px-1.5 py-0 text-[10px] font-medium",
                                        children: B
                                    }) : null]
                                }), (0, i.jsx)(eG, {
                                    tooltip: "Start a new AI task and clear the current prompt and formula",
                                    children: (0, i.jsxs)(n.z, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "h-8 px-2 min-[510px]:h-9 min-[510px]:px-3 text-xs",
                                        onClick: G,
                                        disabled: k,
                                        children: [(0, i.jsx)(ex.Z, {
                                            className: "h-3.5 w-3.5"
                                        }), "New"]
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: (0, c.cn)("overflow-hidden rounded-lg border bg-background/95", f ? "border-border/70 shadow-none" : "border-border/80 shadow-sm"),
                                children: [(0, i.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, i.jsx)(F.g, {
                                        ref: y,
                                        value: v,
                                        onChange: e => {
                                            j(e.target.value), A(null), D(null)
                                        },
                                        rows: R,
                                        onKeyDown: X,
                                        placeholder: "generate" === U ? "Describe the formula you want to generate..." : "Describe how to modify the current formula...",
                                        className: (0, c.cn)("thin-scrollbar min-h-0 border-0 bg-transparent text-sm shadow-none focus-visible:ring-0 focus-visible:ring-offset-0", f ? "resize-none overflow-y-auto" : "resize-y", f ? "pr-20" : "pr-4", P),
                                        style: {
                                            minHeight: "".concat(q, "px"),
                                            maxHeight: "".concat(T, "px")
                                        }
                                    }), f ? (0, i.jsxs)(_.u, {
                                        children: [(0, i.jsx)(_.aJ, {
                                            asChild: !0,
                                            children: (0, i.jsxs)(n.z, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "absolute right-2 top-2 h-6 gap-1.5 px-2 text-[11px]",
                                                onClick: G,
                                                disabled: k,
                                                children: [(0, i.jsx)(ex.Z, {
                                                    className: "h-3 w-3"
                                                }), "New"]
                                            })
                                        }), (0, i.jsx)(_._v, {
                                            children: "Start a new AI task and clear all"
                                        })]
                                    }) : null]
                                }), (0, i.jsxs)("div", {
                                    className: (0, c.cn)("flex items-center justify-between gap-2 border-t bg-muted/15 px-3 py-2", f ? p ? "gap-1 px-1.5 py-1.5" : "px-2 py-1.5" : ""),
                                    children: [(0, i.jsxs)("div", {
                                        className: "flex min-w-0 items-center gap-2",
                                        children: [d.length > 0 ? (0, i.jsxs)(M.h_, {
                                            children: [(0, i.jsx)(M.$F, {
                                                asChild: !0,
                                                children: (0, i.jsxs)(n.z, {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: (0, c.cn)("justify-between gap-2 border-border/70 bg-background/90 text-foreground shadow-none hover:border-primary/30 hover:bg-primary/5", f ? p ? "h-6 min-w-[92px] max-w-[116px] px-1.5 text-[10px]" : "h-6 min-w-[120px] max-w-[160px] px-2.5 text-[11px]" : "h-8 min-w-[190px] max-w-[280px] px-3 text-xs"),
                                                    children: [(0, i.jsx)("span", {
                                                        className: "truncate font-mono",
                                                        children: function(e) {
                                                            let t = (null == e ? void 0 : e.trim()) || "";
                                                            return t ? t.length > 24 ? t.slice(0, 24) + "…" : t : "Candidates"
                                                        }(u)
                                                    }), (0, i.jsx)(ep.Z, {
                                                        className: (0, c.cn)("shrink-0", p ? "h-2.5 w-2.5" : f ? "h-3 w-3" : "h-3.5 w-3.5")
                                                    })]
                                                })
                                            }), (0, i.jsx)(M.AW, {
                                                align: "start",
                                                className: (0, c.cn)("w-80", f && "w-64"),
                                                children: d.map((e, t) => (0, i.jsxs)(M.Xi, {
                                                    onClick: () => {
                                                        m(d, e), o(e)
                                                    },
                                                    className: "flex items-start justify-between gap-2",
                                                    children: [(0, i.jsx)("span", {
                                                        className: "min-w-0 flex-1 truncate font-mono text-xs",
                                                        children: function(e, t) {
                                                            let r = e.trim();
                                                            return r ? r.length > 28 ? r.slice(0, 28) + "…" : r : "Candidate " + (t + 1)
                                                        }(e, t)
                                                    }), (null == u ? void 0 : u.trim()) === e.trim() ? (0, i.jsx)(b.Z, {
                                                        className: "mt-0.5 h-3.5 w-3.5 shrink-0"
                                                    }) : null]
                                                }, t))
                                            })]
                                        }) : (0, i.jsxs)(n.z, {
                                            variant: "outline",
                                            size: "sm",
                                            disabled: !0,
                                            className: (0, c.cn)("justify-between gap-2 opacity-60 shadow-none", f ? p ? "h-6 min-w-[92px] max-w-[116px] px-1.5 text-[10px]" : "h-6 min-w-[120px] max-w-[160px] px-2.5 text-[11px]" : "h-8 min-w-[190px] max-w-[280px] px-3 text-xs"),
                                            children: [(0, i.jsx)("span", {
                                                className: "truncate font-mono",
                                                children: "Candidates"
                                            }), (0, i.jsx)(ep.Z, {
                                                className: (0, c.cn)("shrink-0", p ? "h-2.5 w-2.5" : f ? "h-3 w-3" : "h-3.5 w-3.5")
                                            })]
                                        }), (0, i.jsxs)(w.J2, {
                                            children: [(0, i.jsx)(w.xo, {
                                                asChild: !0,
                                                children: (0, i.jsxs)(n.z, {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: (0, c.cn)("gap-1.5", f ? p ? "h-6 shrink-0 justify-center px-1.5 text-[10px] bg-background" : "h-6 shrink-0 justify-center px-2.5 text-[11px] bg-background" : "h-8 px-2 min-[510px]:h-9 min-[510px]:px-3 text-xs"),
                                                    children: ["Examples", (0, i.jsx)(ep.Z, {
                                                        className: (0, c.cn)(p ? "h-2.5 w-2.5" : f ? "h-3 w-3" : "h-3.5 w-3.5")
                                                    })]
                                                })
                                            }), (0, i.jsx)(w.yk, {
                                                align: "start",
                                                className: (0, c.cn)("w-72 p-2", f && "w-60 p-1.5"),
                                                children: (0, i.jsx)("div", {
                                                    className: "space-y-1",
                                                    children: eZ.map(e => (0, i.jsxs)("button", {
                                                        type: "button",
                                                        className: (0, c.cn)("flex w-full flex-col rounded-lg px-3 py-2 text-left hover:bg-muted", f && "px-2.5 py-1.5"),
                                                        onClick: () => H(e),
                                                        children: [(0, i.jsx)("span", {
                                                            className: (0, c.cn)("text-sm font-medium", f && "text-xs"),
                                                            children: e.label
                                                        }), (0, i.jsx)("span", {
                                                            className: (0, c.cn)("text-xs text-muted-foreground line-clamp-2", f && "text-[11px]"),
                                                            children: e.prompt
                                                        })]
                                                    }, e.label))
                                                })
                                            })]
                                        })]
                                    }), (0, i.jsx)(eG, {
                                        tooltip: k ? "".concat(Z, " in progress") : "generate" === U ? "Generate LaTeX from the current prompt" : "Modify the current formula with the prompt",
                                        children: (0, i.jsxs)(n.z, {
                                            onClick: () => void V(),
                                            disabled: k,
                                            className: (0, c.cn)("gap-1.5", f ? p ? "h-6 shrink-0 px-2 text-[10px]" : "h-6 shrink-0 px-3 text-[11px]" : "h-8 px-2 min-[510px]:h-9 min-[510px]:px-3 text-xs"),
                                            children: [k ? (0, i.jsx)(ef.Z, {
                                                className: (0, c.cn)("animate-spin", f ? "h-3 w-3" : "h-3.5 w-3.5")
                                            }) : "generate" === U ? (0, i.jsx)(x.Z, {
                                                className: (0, c.cn)(f ? "h-3 w-3" : "h-3.5 w-3.5")
                                            }) : (0, i.jsx)(eb.Z, {
                                                className: (0, c.cn)(f ? "h-3 w-3" : "h-3.5 w-3.5")
                                            }), Z]
                                        })
                                    })]
                                })]
                            }), f || "modify" !== U ? null : (0, i.jsx)("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Continuing the current AI formula conversation."
                            }), z ? (0, i.jsx)(ey.bZ, {
                                variant: "destructive",
                                className: (0, c.cn)(f && "px-3 py-2"),
                                children: (0, i.jsx)(ey.X, {
                                    children: z
                                })
                            }) : null, !f && E ? (0, i.jsx)("div", {
                                className: (0, c.cn)("rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs text-blue-700", f && "px-2.5 py-1.5 text-[11px]"),
                                children: E
                            }) : null]
                        })
                    })
                })
            }
            var eV = r(90094),
                eX = r(82122),
                eB = r(52515),
                eW = r(26039),
                eO = r(13755),
                e$ = r(11209);

            function eJ(e) {
                let {
                    tooltip: t,
                    children: r
                } = e;
                return (0, i.jsxs)(_.u, {
                    children: [(0, i.jsx)(_.aJ, {
                        asChild: !0,
                        children: (0, i.jsx)("span", {
                            className: "inline-flex",
                            children: r
                        })
                    }), (0, i.jsx)(_._v, {
                        children: t
                    })]
                })
            }
            let eK = ["image/jpeg", "image/png", "image/gif", "image/bmp"];

            function eY(e) {
                let {
                    mode: t = "web",
                    layout: r = "inline",
                    isActive: s = !0,
                    candidates: l = [],
                    selectedCandidate: o,
                    onCandidatesChange: d = () => {},
                    onRecognize: u
                } = e, {
                    setShowSignModal: m
                } = (0, e$.b)(), h = "overlay" === r, g = (0, a.useRef)(null), b = (0, a.useRef)(null), v = (0, a.useRef)(null), w = (0, a.useRef)(0), [j, k] = (0, a.useState)(!1), [N, C] = (0, a.useState)(!1), [S, z] = (0, a.useState)([]), [A, E] = (0, a.useState)([]), [D, I] = (0, a.useState)([]), [L, R] = (0, a.useState)(null), [q, T] = (0, a.useState)(null), [F, P] = (0, a.useState)(null), [U, Z] = (0, a.useState)(!1), [G, H] = (0, a.useState)(!h), [V, X] = (0, a.useState)(!1), [B, W] = (0, a.useState)(null), O = q ? "image" : "canvas", $ = S.length > 0 || D.length > 0, J = $ || !!B, K = !!q || J, Y = h && "addonsidebar" === t, Q = (0, a.useCallback)(() => {
                    let e = g.current;
                    if (e) try {
                        W(e.toDataURL("image/png"))
                    } catch (e) {
                        console.error("Failed to generate drawing thumbnail:", e)
                    }
                }, []), ee = (0, a.useCallback)(() => {
                    Q(), H(!1)
                }, [Q]);
                (0, a.useEffect)(() => {
                    if (h) {
                        if (s) {
                            H(!0);
                            return
                        }
                        Q(), H(!1)
                    }
                }, [Q, s, h]), (0, a.useEffect)(() => {
                    s || (w.current = 0, X(!1))
                }, [s]);
                let et = (0, a.useCallback)(e => e instanceof ew.MS ? 401 === e.status || 401 === e.code : e instanceof Error && e.message.includes("Please login first"), []),
                    er = (0, a.useCallback)(e => {
                        let t = e.getContext("2d");
                        return t ? (t.lineWidth = 3, t.lineCap = "round", t.lineJoin = "round", t.strokeStyle = "#111111", t) : null
                    }, []),
                    ei = (0, a.useCallback)(() => {
                        let e = g.current;
                        if (!e) return;
                        let t = er(e);
                        if (!t) return;
                        t.clearRect(0, 0, e.width, e.height);
                        let r = e => {
                            var r;
                            if (!(e.length < 2)) {
                                t.save(), (null === (r = e[0]) || void 0 === r ? void 0 : r.erase) ? (t.globalCompositeOperation = "destination-out", t.lineWidth = 20) : (t.globalCompositeOperation = "source-over", t.lineWidth = 3), t.beginPath(), t.moveTo(e[0].x, e[0].y);
                                for (let r = 1; r < e.length; r += 1) t.lineTo(e[r].x, e[r].y);
                                t.stroke(), t.restore()
                            }
                        };
                        S.forEach(r), r(D)
                    }, [er, D, S]);
                (0, a.useEffect)(() => {
                    ei()
                }, [ei]), (0, a.useEffect)(() => {
                    if (!g.current || !$) {
                        $ || W(null);
                        return
                    }
                    Q()
                }, [Q, D, $, G, S]), (0, a.useEffect)(() => {
                    if (!h || !s || !G) return;
                    let e = e => {
                        "Escape" === e.key && ee()
                    };
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, [ee, s, G, h]), (0, a.useEffect)(() => {
                    let e = g.current,
                        t = b.current;
                    if (!e || !t) return;
                    let r = () => {
                        let r = Math.max(1, Math.floor(t.clientWidth)),
                            i = Math.max(1, Math.floor(t.clientHeight));
                        (e.width !== r || e.height !== i) && (e.width = r, e.height = i, er(e), ei())
                    };
                    r();
                    let i = new ResizeObserver(() => {
                        r()
                    });
                    return i.observe(t), () => i.disconnect()
                }, [er, ei, G]);
                let ea = (0, a.useCallback)(e => eK.includes(e.type) ? e.size > 5242880 ? "Image size cannot exceed 5MB." : null : "Please upload or paste a valid image file (JPG, PNG, GIF or BMP).", []),
                    es = (0, a.useCallback)(() => {
                        z([]), E([]), I([]), W(null), P(null)
                    }, []),
                    en = (0, a.useCallback)(() => {
                        R(null), T(null), P(null), v.current && (v.current.value = "")
                    }, []),
                    el = (0, a.useCallback)(() => {
                        en(), P(null)
                    }, [en]),
                    eo = (0, a.useCallback)(() => {
                        var e;
                        null === (e = v.current) || void 0 === e || e.click()
                    }, []),
                    ec = (0, a.useCallback)(() => {
                        if (q) {
                            en();
                            return
                        }
                        es()
                    }, [es, en, q]),
                    ed = (0, a.useCallback)(e => {
                        let t = ea(e);
                        if (t) {
                            P(t);
                            return
                        }
                        z([]), E([]), I([]), W(null), R(e), P(null), h && H(!1);
                        let r = new FileReader;
                        r.onload = () => {
                            T(r.result)
                        }, r.readAsDataURL(e)
                    }, [h, ea]),
                    eu = (0, a.useCallback)(e => {
                        var t;
                        let r = null === (t = e.target.files) || void 0 === t ? void 0 : t[0];
                        r && ed(r)
                    }, [ed]),
                    em = (0, a.useCallback)(e => !!e && Array.from(e.types).includes("Files"), []),
                    eh = (0, a.useCallback)(e => {
                        var t, r;
                        return (null == e ? void 0 : null === (t = e.files) || void 0 === t ? void 0 : t.length) && null !== (r = Array.from(e.files).find(e => e.type.startsWith("image/"))) && void 0 !== r ? r : null
                    }, []),
                    eg = (0, a.useCallback)(() => {
                        w.current = 0, X(!1)
                    }, []),
                    ex = (0, a.useCallback)(e => {
                        em(e.dataTransfer) && (e.preventDefault(), w.current += 1, X(!0))
                    }, [em]),
                    eb = (0, a.useCallback)(e => {
                        em(e.dataTransfer) && (e.preventDefault(), e.dataTransfer.dropEffect = "copy", X(!0))
                    }, [em]),
                    ev = (0, a.useCallback)(e => {
                        em(e.dataTransfer) && (e.preventDefault(), w.current = Math.max(0, w.current - 1), 0 === w.current && X(!1))
                    }, [em]),
                    ej = (0, a.useCallback)(e => {
                        if (!em(e.dataTransfer)) return;
                        e.preventDefault();
                        let t = eh(e.dataTransfer);
                        if (eg(), !t) {
                            P("Please drop a valid image file.");
                            return
                        }
                        ed(t)
                    }, [ed, eg, eh, em]);
                (0, a.useEffect)(() => {
                    if (!(h ? s && G : s)) return;
                    let e = e => {
                        var t;
                        let r = null === (t = e.clipboardData) || void 0 === t ? void 0 : t.items;
                        if (r)
                            for (let t = 0; t < r.length; t += 1) {
                                let i = r[t];
                                if (!i.type.startsWith("image/")) continue;
                                let a = i.getAsFile();
                                a && (e.preventDefault(), ed(a));
                                break
                            }
                    };
                    return document.addEventListener("paste", e), () => document.removeEventListener("paste", e)
                }, [ed, s, G, h]);
                let e_ = (0, a.useCallback)((e, t) => {
                        let r = g.current;
                        r && (e < 0 || t < 0 || e > r.width || t > r.height || (P(null), k(!0), E([]), I([{
                            x: e,
                            y: t,
                            erase: N
                        }])))
                    }, [N]),
                    ek = (0, a.useCallback)(e => {
                        let t = g.current;
                        if (!t) return;
                        let r = t.getBoundingClientRect();
                        e_(e.clientX - r.left, e.clientY - r.top), t.setPointerCapture(e.pointerId)
                    }, [e_]),
                    eN = (0, a.useCallback)(e => {
                        if (!j) return;
                        let t = g.current;
                        if (!t) return;
                        let r = t.getBoundingClientRect(),
                            i = e.clientX - r.left,
                            a = e.clientY - r.top;
                        i < 0 || a < 0 || i > t.width || a > t.height || I(e => [...e, {
                            x: i,
                            y: a,
                            erase: N
                        }])
                    }, [j, N]),
                    eC = (0, a.useCallback)(() => {
                        j && (k(!1), z(e => D.length > 1 ? [...e, D] : e), I([]))
                    }, [D, j]),
                    eS = (0, a.useCallback)(() => {
                        z(e => {
                            let t = e.at(-1);
                            return t ? (E(e => [...e, t]), e.slice(0, -1)) : e
                        })
                    }, []),
                    ez = (0, a.useCallback)(() => {
                        E(e => {
                            let t = e.at(-1);
                            return t ? (z(e => [...e, t]), e.slice(0, -1)) : e
                        })
                    }, []),
                    eA = (0, a.useCallback)(() => {
                        let e = g.current;
                        if (!e) {
                            if (B) return B;
                            throw Error("Canvas is not ready.")
                        }
                        let t = document.createElement("canvas"),
                            r = t.getContext("2d");
                        if (!r) throw Error("Failed to create temporary canvas.");
                        let i = e.width,
                            a = e.height;
                        if (i > 800) {
                            let e = 800 / i;
                            i = 800, a *= e
                        }
                        if (a > 600) {
                            let e = 600 / a;
                            a = 600, i *= e
                        }
                        return t.width = Math.max(1, Math.floor(i)), t.height = Math.max(1, Math.floor(a)), r.fillStyle = "#FFFFFF", r.fillRect(0, 0, t.width, t.height), r.drawImage(e, 0, 0, e.width, e.height, 0, 0, t.width, t.height), t.toDataURL("image/jpeg", .85)
                    }, [B]),
                    eE = (0, a.useCallback)(async () => {
                        if ("image" === O && !L) {
                            P("Please upload or paste an image first.");
                            return
                        }
                        if ("canvas" === O && !J) {
                            P("Please draw an equation first.");
                            return
                        }
                        Z(!0), P(null);
                        try {
                            var e;
                            let t = "image" === O && L ? await ew.QC.recognizeImage(L) : await ew.QC.recognizeHandwriting(eA()),
                                r = (null === (e = t.latex) || void 0 === e ? void 0 : e.trim()) || "";
                            if (!r) {
                                P("Recognition returned an empty LaTeX result.");
                                return
                            }
                            if (!eU(r, "recognize")) {
                                P("Recognition returned non-LaTeX content. Please try a clearer image."), d([], null);
                                return
                            }
                            let i = eP(t.candidates || [], "recognize", {
                                strictness: "client"
                            });
                            d(i, r), u(r, i), h && ee()
                        } catch (r) {
                            console.error("Failed to recognize image source:", r);
                            let e = r instanceof Error ? r.message : "Recognition failed. Please try again.";
                            if ("web" === t && et(r)) {
                                m(!0), P("Please sign in to use this feature.");
                                return
                            }
                            if (e.includes("Insufficient credits, please recharge") || r instanceof ew.MS && 402 === r.code) {
                                window.dispatchEvent(new CustomEvent("insufficient-credits", {
                                    detail: {
                                        message: e
                                    }
                                }));
                                return
                            }
                            P(e)
                        } finally {
                            Z(!1)
                        }
                    }, [eA, O, ee, J, L, et, d, h, t, u, m]),
                    eM = h ? "rounded-md" : "rounded-full",
                    eD = h ? "h-6 w-6" : "h-8 w-8",
                    eI = h ? "h-6 px-2" : "h-8 px-3",
                    eL = h ? "h-6 px-2.5" : "h-8 px-3.5",
                    eR = h ? "mr-1 h-3 w-3" : "mr-1.5 h-3.5 w-3.5",
                    eq = h ? "h-3.5 w-3.5" : "h-4 w-4",
                    eT = h ? "h-6 w-6 rounded-md border border-border/60 bg-background text-foreground shadow-none hover:bg-accent hover:text-accent-foreground" : "h-8 w-8 rounded-full border border-border/60 bg-background text-foreground shadow-none hover:bg-accent hover:text-accent-foreground",
                    eF = h ? "h-6 rounded-md border-border/70 bg-background px-2.5 text-[11px] font-medium whitespace-nowrap shadow-none" : "h-8 rounded-full border-border/70 bg-background px-3 text-xs font-medium shadow-none",
                    eZ = h ? "h-6 rounded-md px-2.5 text-[11px] font-medium whitespace-nowrap shadow-none" : "h-8 rounded-full px-3.5 text-xs font-medium shadow-none",
                    eG = h ? "h-3 w-3" : "h-4 w-4",
                    eH = h ? "mr-1 h-3 w-3" : "mr-1.5 h-3.5 w-3.5",
                    eV = h ? "h-3.5 w-3.5" : "h-4 w-4";
                (0, c.cn)("border border-border/60 bg-background text-foreground shadow-none hover:bg-accent hover:text-accent-foreground", eD, eM);
                let eY = (0, c.cn)("border-border/70 bg-background text-xs font-medium shadow-none", eI, eM),
                    eQ = (0, c.cn)("text-xs font-medium shadow-none", eL, eM),
                    e0 = (0, c.cn)("h-6 rounded-md border-border/70 bg-background px-2 text-[10px] font-medium shadow-none", "gap-1"),
                    e1 = "h-6 rounded-md px-2.5 text-[10px] font-medium shadow-none",
                    e2 = (0, c.cn)("relative overflow-hidden rounded-lg bg-white", h ? "border border-border/60" : "border border-border/70 shadow-sm", V && "border-primary/70 bg-primary/5"),
                    e3 = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return V ? (0, i.jsx)("div", {
                            className: (0, c.cn)("pointer-events-none absolute inset-0 z-20 flex items-center justify-center", e ? "bg-background/96" : "bg-background"),
                            children: (0, i.jsx)("div", {
                                className: (0, c.cn)("border border-primary/30 bg-white px-4 py-2 text-xs font-medium text-primary shadow-sm", e ? "px-3 py-1.5 text-[11px]" : "", eM),
                                children: "Drop image to upload"
                            })
                        }) : null
                    },
                    e5 = (0, a.useCallback)(e => {
                        let t = e.trim();
                        t && (u(t), h && ee())
                    }, [ee, h, u]),
                    e4 = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return l.length > 0 ? (0, i.jsxs)(M.h_, {
                            children: [(0, i.jsx)(M.$F, {
                                asChild: !0,
                                children: (0, i.jsxs)(n.z, {
                                    type: "button",
                                    variant: "outline",
                                    size: "sm",
                                    className: (0, c.cn)("justify-between gap-2 border-primary/30 bg-primary/5 text-foreground shadow-sm", e, t ? "min-w-[120px] max-w-[150px]" : "min-w-[150px] max-w-[220px]"),
                                    children: [(0, i.jsx)("span", {
                                        className: "truncate font-mono",
                                        children: function(e) {
                                            let t = (null == e ? void 0 : e.trim()) || "";
                                            return t ? t.length > 20 ? t.slice(0, 20) + "…" : t : "Candidates"
                                        }(o)
                                    }), (0, i.jsx)(ep.Z, {
                                        className: "h-3 w-3 shrink-0"
                                    })]
                                })
                            }), (0, i.jsx)(M.AW, {
                                align: "end",
                                className: (0, c.cn)(t ? "w-56" : "w-72"),
                                children: l.map((e, t) => (0, i.jsx)(M.Xi, {
                                    onClick: () => {
                                        d(l, e), e5(e)
                                    },
                                    className: "flex items-start justify-between gap-2",
                                    children: (0, i.jsx)("span", {
                                        className: "min-w-0 flex-1 truncate font-mono text-xs",
                                        children: function(e, t) {
                                            let r = e.trim();
                                            return r ? r.length > 22 ? r.slice(0, 22) + "…" : r : "Candidate " + (t + 1)
                                        }(e, t)
                                    })
                                }, t))
                            })]
                        }) : null
                    },
                    e6 = e => (0, i.jsxs)("div", {
                        ref: b,
                        className: (0, c.cn)(e2, e),
                        onDragEnter: ex,
                        onDragOver: eb,
                        onDragLeave: ev,
                        onDrop: ej,
                        children: [(0, i.jsx)("canvas", {
                            ref: g,
                            className: "h-full w-full touch-none",
                            onPointerDown: ek,
                            onPointerMove: eN,
                            onPointerUp: eC,
                            onPointerLeave: eC
                        }), $ ? null : (0, i.jsxs)("div", {
                            className: (0, c.cn)("pointer-events-none absolute left-4 z-10 max-w-[72%]", Y ? "top-20 max-w-[calc(100%-2rem)]" : "top-4"),
                            children: [(0, i.jsx)("p", {
                                className: "text-sm font-medium text-foreground/80",
                                children: "Draw, paste, or drop an image"
                            }), (0, i.jsx)("p", {
                                className: "text-xs text-muted-foreground/80",
                                children: "Paste and drag-and-drop work directly here."
                            })]
                        }), e3(), (0, i.jsxs)("div", {
                            className: (0, c.cn)("absolute flex gap-3", Y ? "left-1/2 top-3 -translate-x-1/2 flex-col items-center gap-1.5 max-w-[calc(100%-4rem)]" : "inset-x-3 bottom-3 flex-col items-center justify-center sm:flex-row sm:items-end sm:justify-between"),
                            children: [(0, i.jsxs)("div", {
                                className: (0, c.cn)("flex flex-wrap items-center justify-center gap-2", Y && "flex-nowrap justify-center gap-1.5"),
                                children: [(0, i.jsx)(eJ, {
                                    tooltip: "Use the pen tool",
                                    children: (0, i.jsx)(n.z, {
                                        type: "button",
                                        variant: N ? "ghost" : "secondary",
                                        size: "icon",
                                        className: eT,
                                        onClick: () => C(!1),
                                        children: (0, i.jsx)(eB.Z, {
                                            className: eG
                                        })
                                    })
                                }), (0, i.jsx)(eJ, {
                                    tooltip: "Use the eraser tool",
                                    children: (0, i.jsx)(n.z, {
                                        type: "button",
                                        variant: N ? "secondary" : "ghost",
                                        size: "icon",
                                        className: eT,
                                        onClick: () => C(!0),
                                        children: (0, i.jsx)(p.Z, {
                                            className: eG
                                        })
                                    })
                                }), (0, i.jsx)(eJ, {
                                    tooltip: 0 === S.length ? "Nothing to undo" : "Undo the last stroke",
                                    children: (0, i.jsx)(n.z, {
                                        type: "button",
                                        variant: "outline",
                                        size: "icon",
                                        className: eT,
                                        onClick: eS,
                                        disabled: 0 === S.length,
                                        children: (0, i.jsx)(f.Z, {
                                            className: eG
                                        })
                                    })
                                }), (0, i.jsx)(eJ, {
                                    tooltip: 0 === A.length ? "Nothing to redo" : "Redo the last undone stroke",
                                    children: (0, i.jsx)(n.z, {
                                        type: "button",
                                        variant: "outline",
                                        size: "icon",
                                        className: eT,
                                        onClick: ez,
                                        disabled: 0 === A.length,
                                        children: (0, i.jsxs)("svg", {
                                            className: eG,
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [(0, i.jsx)("path", {
                                                d: "M21 7v6h-6"
                                            }), (0, i.jsx)("path", {
                                                d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
                                            })]
                                        })
                                    })
                                }), (0, i.jsx)(eJ, {
                                    tooltip: "Clear the current canvas",
                                    children: (0, i.jsx)(n.z, {
                                        type: "button",
                                        variant: "outline",
                                        size: "icon",
                                        className: eT,
                                        onClick: es,
                                        children: (0, i.jsx)(eW.Z, {
                                            className: eG
                                        })
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: (0, c.cn)("flex flex-wrap items-center justify-center gap-2", Y && "flex-nowrap justify-center gap-1.5"),
                                children: [(0, i.jsx)(eJ, {
                                    tooltip: "Upload an image to recognize instead of drawing",
                                    children: (0, i.jsxs)(n.z, {
                                        type: "button",
                                        variant: "outline",
                                        size: "sm",
                                        className: eF,
                                        onClick: eo,
                                        children: [(0, i.jsx)(eO.Z, {
                                            className: eH
                                        }), "Upload"]
                                    })
                                }), (0, i.jsx)(eJ, {
                                    tooltip: U ? "Recognizing current drawing" : $ ? "Recognize the current drawing into LaTeX" : "Draw an equation before recognizing",
                                    children: (0, i.jsxs)(n.z, {
                                        type: "button",
                                        size: "sm",
                                        className: eZ,
                                        onClick: () => void eE(),
                                        disabled: U || !$,
                                        children: [U ? (0, i.jsx)(ef.Z, {
                                            className: (0, c.cn)(eH, "animate-spin")
                                        }) : (0, i.jsx)(x.Z, {
                                            className: eH
                                        }), "Recognize"]
                                    })
                                })]
                            })]
                        })]
                    }),
                    e8 = e => (0, i.jsxs)("div", {
                        className: (0, c.cn)(e2, e),
                        onDragEnter: ex,
                        onDragOver: eb,
                        onDragLeave: ev,
                        onDrop: ej,
                        children: [q ? (0, i.jsx)(eX.default, {
                            src: q,
                            alt: "Recognition source preview",
                            fill: !0,
                            unoptimized: !0,
                            className: "object-contain p-3",
                            sizes: "(max-width: 768px) 100vw, 800px"
                        }) : null, (0, i.jsxs)("div", {
                            className: "pointer-events-none absolute left-4 top-4 z-10",
                            children: [(0, i.jsx)("p", {
                                className: "text-sm font-medium text-foreground/80",
                                children: "Uploaded image"
                            }), (0, i.jsx)("p", {
                                className: "text-xs text-muted-foreground/80",
                                children: "Drop another image to replace it."
                            })]
                        }), e3(), (0, i.jsxs)("div", {
                            className: "absolute right-14 top-4 flex items-center gap-2",
                            children: [(0, i.jsx)(eJ, {
                                tooltip: "Upload a different image",
                                children: (0, i.jsxs)(n.z, {
                                    type: "button",
                                    variant: "outline",
                                    size: "sm",
                                    className: eF,
                                    onClick: eo,
                                    children: [(0, i.jsx)(eO.Z, {
                                        className: eH
                                    }), "Upload"]
                                })
                            }), (0, i.jsx)(eJ, {
                                tooltip: "Switch back to drawing on the canvas",
                                children: (0, i.jsxs)(n.z, {
                                    type: "button",
                                    variant: "outline",
                                    size: "sm",
                                    className: eF,
                                    onClick: el,
                                    children: [(0, i.jsx)(eB.Z, {
                                        className: eH
                                    }), "Draw"]
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "absolute bottom-4 right-4 flex items-center gap-2",
                            children: [e4(eF), (0, i.jsx)(eJ, {
                                tooltip: U ? "Recognizing current image" : L ? "Recognize the uploaded image into LaTeX" : "Upload an image before recognizing",
                                children: (0, i.jsxs)(n.z, {
                                    type: "button",
                                    size: "sm",
                                    className: eZ,
                                    onClick: () => void eE(),
                                    disabled: U || !L,
                                    children: [U ? (0, i.jsx)(ef.Z, {
                                        className: (0, c.cn)(eH, "animate-spin")
                                    }) : (0, i.jsx)(x.Z, {
                                        className: eH
                                    }), "Recognize"]
                                })
                            })]
                        })]
                    }),
                    e9 = () => q ? e8(h ? "flex-1 min-h-0" : "h-[340px]") : e6(h ? "flex-1 min-h-0" : "h-[380px]"),
                    e7 = q ? "Upload" : J ? "Draw" : "Empty";
                return h ? s ? (0, i.jsxs)(_.pn, {
                    delayDuration: 120,
                    children: [(0, i.jsx)("input", {
                        ref: v,
                        type: "file",
                        accept: "image/jpeg,image/png,image/gif,image/bmp",
                        className: "hidden",
                        onChange: eu
                    }), (0, i.jsx)("div", {
                        className: (0, c.cn)("relative z-10", Y && "px-0.5 pt-0.5"),
                        children: (0, i.jsxs)("div", {
                            className: (0, c.cn)("relative overflow-hidden rounded-lg border bg-background/95", h ? "border-border/70 shadow-none" : "border-border/80 shadow-sm"),
                            onDragEnter: ex,
                            onDragOver: eb,
                            onDragLeave: ev,
                            onDrop: ej,
                            children: [e3(!0), (0, i.jsxs)("div", {
                                className: (0, c.cn)("flex items-center justify-between gap-3 px-3 py-3", Y ? "items-start gap-2.5 px-2.5 py-2.5" : ""),
                                children: [(0, i.jsxs)("div", {
                                    className: (0, c.cn)("flex min-w-0 flex-1 items-center", Y ? "gap-2.5" : "gap-3"),
                                    children: [K ? (0, i.jsxs)("div", {
                                        className: (0, c.cn)("relative shrink-0 overflow-hidden rounded-md border border-border/50 bg-muted/20", Y ? "h-16 w-28" : "h-16 w-24"),
                                        children: [(0, i.jsx)(eX.default, {
                                            src: q || B || "",
                                            alt: "Current ".concat(e7.toLowerCase(), " source preview"),
                                            fill: !0,
                                            unoptimized: !0,
                                            className: (0, c.cn)("object-contain", Y ? "p-0.5" : "p-1"),
                                            sizes: "96px"
                                        }), (0, i.jsx)("div", {
                                            className: "absolute right-1 top-1",
                                            children: (0, i.jsx)(eJ, {
                                                tooltip: "Remove the current image source",
                                                children: (0, i.jsx)(n.z, {
                                                    type: "button",
                                                    variant: "outline",
                                                    size: "icon",
                                                    className: (0, c.cn)("border-border/60 bg-white/95 p-0 shadow-none", Y ? "h-5 w-5 rounded-sm" : (0, c.cn)(eD, eM)),
                                                    onClick: ec,
                                                    children: (0, i.jsx)(y.Z, {
                                                        className: Y ? "h-3 w-3" : eq
                                                    })
                                                })
                                            })
                                        })]
                                    }) : null, Y ? K ? null : (0, i.jsxs)("div", {
                                        className: "min-w-0 flex-1",
                                        children: [(0, i.jsx)("p", {
                                            className: "text-xs font-medium text-foreground",
                                            children: "Draw or upload an image."
                                        }), (0, i.jsx)("p", {
                                            className: "mt-0.5 text-[10px] leading-snug text-muted-foreground",
                                            children: "Then recognize it into LaTeX."
                                        })]
                                    }) : (0, i.jsx)("div", {
                                        className: "min-w-0 flex-1",
                                        children: K ? (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsx)("p", {
                                                className: "text-sm font-medium leading-none text-foreground",
                                                children: "Image ready"
                                            }), (0, i.jsx)("p", {
                                                className: "mt-1 text-[11px] leading-none text-muted-foreground",
                                                children: "Upload or draw to replace it"
                                            })]
                                        }) : (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsx)("p", {
                                                className: "text-sm font-medium text-foreground",
                                                children: "Draw or upload an image."
                                            }), (0, i.jsx)("p", {
                                                className: "mt-0.5 text-[11px] leading-snug text-muted-foreground",
                                                children: "Then recognize it into LaTeX."
                                            })]
                                        })
                                    })]
                                }), Y ? (0, i.jsxs)("div", {
                                    className: "flex w-[136px] shrink-0 flex-col gap-1.5 self-center border-l border-border/60 pl-2.5",
                                    children: [(0, i.jsxs)("div", {
                                        className: "grid grid-cols-2 gap-1",
                                        children: [(0, i.jsx)(eJ, {
                                            tooltip: "Open the drawing canvas",
                                            children: (0, i.jsx)(n.z, {
                                                type: "button",
                                                variant: "outline",
                                                size: "sm",
                                                className: e0,
                                                onClick: () => {
                                                    q && el(), P(null), H(!0)
                                                },
                                                children: "Draw"
                                            })
                                        }), (0, i.jsx)(eJ, {
                                            tooltip: "Upload an image file",
                                            children: (0, i.jsx)(n.z, {
                                                type: "button",
                                                variant: "outline",
                                                size: "sm",
                                                className: e0,
                                                onClick: eo,
                                                children: "Upload"
                                            })
                                        })]
                                    }), e4(e1, !0), K ? (0, i.jsx)(eJ, {
                                        tooltip: U ? "Recognizing current source" : "Recognize current source into LaTeX",
                                        children: (0, i.jsxs)(n.z, {
                                            type: "button",
                                            size: "sm",
                                            className: e1,
                                            onClick: () => void eE(),
                                            disabled: U || !q && !J,
                                            children: [U ? (0, i.jsx)(ef.Z, {
                                                className: "mr-1 h-2.5 w-2.5 animate-spin"
                                            }) : (0, i.jsx)(x.Z, {
                                                className: "mr-1 h-2.5 w-2.5"
                                            }), "Recognize"]
                                        })
                                    }) : null]
                                }) : (0, i.jsxs)("div", {
                                    className: (0, c.cn)("flex shrink-0 border-l border-border/60 pl-3", h ? "w-[168px] flex-col items-stretch gap-1.5 self-center" : "items-center gap-2"),
                                    children: [(0, i.jsxs)("div", {
                                        className: (0, c.cn)(h ? "grid grid-cols-2 gap-1.5" : "flex items-center gap-2"),
                                        children: [(0, i.jsx)(eJ, {
                                            tooltip: "Open the drawing canvas",
                                            children: (0, i.jsx)(n.z, {
                                                type: "button",
                                                variant: "outline",
                                                size: "sm",
                                                className: eY,
                                                onClick: () => {
                                                    q && el(), P(null), H(!0)
                                                },
                                                children: "Draw"
                                            })
                                        }), (0, i.jsx)(eJ, {
                                            tooltip: "Upload an image file",
                                            children: (0, i.jsx)(n.z, {
                                                type: "button",
                                                variant: "outline",
                                                size: "sm",
                                                className: eY,
                                                onClick: eo,
                                                children: "Upload"
                                            })
                                        })]
                                    }), e4(eY, !0), K ? (0, i.jsx)(eJ, {
                                        tooltip: U ? "Recognizing current source" : "Recognize current source into LaTeX",
                                        children: (0, i.jsxs)(n.z, {
                                            type: "button",
                                            size: "sm",
                                            className: eQ,
                                            onClick: () => void eE(),
                                            disabled: U || !q && !J,
                                            children: [U ? (0, i.jsx)(ef.Z, {
                                                className: (0, c.cn)(eR, "animate-spin")
                                            }) : (0, i.jsx)(x.Z, {
                                                className: eR
                                            }), "Recognize"]
                                        })
                                    }) : null]
                                })]
                            })]
                        })
                    }), G ? (0, i.jsx)("div", {
                        className: "absolute inset-0 z-20 bg-background",
                        children: (0, i.jsxs)("div", {
                            className: "relative flex h-full flex-col bg-background",
                            children: [(0, i.jsx)("div", {
                                className: "absolute right-3 top-3 z-10",
                                children: (0, i.jsx)(eJ, {
                                    tooltip: "Close image workspace",
                                    children: (0, i.jsx)(n.z, {
                                        type: "button",
                                        variant: "outline",
                                        size: "icon",
                                        className: "h-7 w-7 rounded-md border-border/60 bg-white/96 shadow-none",
                                        onClick: ee,
                                        children: (0, i.jsx)(y.Z, {
                                            className: eV
                                        })
                                    })
                                })
                            }), e9()]
                        })
                    }) : null, F ? (0, i.jsx)(ey.bZ, {
                        variant: "destructive",
                        children: (0, i.jsx)(ey.X, {
                            children: F
                        })
                    }) : null]
                }) : (0, i.jsx)("input", {
                    ref: v,
                    type: "file",
                    accept: "image/jpeg,image/png,image/gif,image/bmp",
                    className: "hidden",
                    onChange: eu
                }) : (0, i.jsx)(_.pn, {
                    delayDuration: 120,
                    children: (0, i.jsxs)("div", {
                        className: "space-y-3",
                        children: [(0, i.jsx)("input", {
                            ref: v,
                            type: "file",
                            accept: "image/jpeg,image/png,image/gif,image/bmp",
                            className: "hidden",
                            onChange: eu
                        }), e9(), F ? (0, i.jsx)(ey.bZ, {
                            variant: "destructive",
                            children: (0, i.jsx)(ey.X, {
                                children: F
                            })
                        }) : null]
                    })
                })
            }
            let eQ = "h-6 rounded-md border border-blue-200 bg-blue-50/80 px-2.5 text-[11px] font-medium text-blue-700 shadow-none hover:border-blue-300 hover:bg-blue-100/90 hover:text-blue-800";

            function e0(e) {
                let {
                    tooltip: t,
                    children: r
                } = e;
                return (0, i.jsx)(_.pn, {
                    delayDuration: 120,
                    children: (0, i.jsxs)(_.u, {
                        children: [(0, i.jsx)(_.aJ, {
                            asChild: !0,
                            children: (0, i.jsx)("span", {
                                className: "inline-flex",
                                children: r
                            })
                        }), (0, i.jsx)(_._v, {
                            children: t
                        })]
                    })
                })
            }
            let e1 = "equation_editor_user_status",
                e2 = "__addon_storage_test__",
                e3 = "aimath_smart_extract_guide_shown",
                e5 = e => "ai" === e || "ai-assistant" === e ? "ai" : "image" === e || "image-handwriting" === e || "image-upload" === e || "image-recognition" === e ? "image" : "symbols",
                e4 = () => {
                    try {
                        if ("undefined" == typeof localStorage) return null;
                        let e = localStorage.getItem(e1);
                        if (!e) return null;
                        return JSON.parse(e)
                    } catch (e) {
                        return console.error("Failed to read cached user status:", e), null
                    }
                },
                e6 = e => {
                    try {
                        if ("undefined" == typeof localStorage) return;
                        localStorage.setItem(e1, JSON.stringify(e))
                    } catch (e) {
                        console.error("Failed to save cached user status:", e)
                    }
                },
                e8 = e => {
                    if (!e) return !1;
                    let t = new Date(e);
                    return !Number.isNaN(t.getTime()) && t.getTime() > Date.now()
                },
                e9 = () => {
                    (() => {
                        try {
                            let e = window.localStorage;
                            if (!e) throw Error("localStorage not available");
                            e.setItem(e2, "1"), e.removeItem(e2);
                            return
                        } catch (e) {
                            console.warn("[ADDON] localStorage unavailable, using in-memory store:", e)
                        }
                        let e = new Map;
                        Object.defineProperty(window, "localStorage", {
                            value: {
                                get length() {
                                    return e.size
                                },
                                clear() {
                                    e.clear()
                                },
                                getItem(t) {
                                    var r;
                                    return null !== (r = e.get(t)) && void 0 !== r ? r : null
                                },
                                key(t) {
                                    var r;
                                    return null !== (r = Array.from(e.keys())[t]) && void 0 !== r ? r : null
                                },
                                removeItem(t) {
                                    e.delete(t)
                                },
                                setItem(t, r) {
                                    e.set(t, r)
                                }
                            },
                            configurable: !0
                        })
                    })(), "function" != typeof window.CustomEvent && (window.CustomEvent = function(e, t) {
                        var r, i;
                        let a = null !== (r = null == t ? void 0 : t.bubbles) && void 0 !== r && r,
                            s = null !== (i = null == t ? void 0 : t.cancelable) && void 0 !== i && i,
                            n = null == t ? void 0 : t.detail,
                            l = document.createEvent("CustomEvent");
                        return l.initCustomEvent(e, a, s, n), l
                    })
                };

            function e7(e) {
                var t, r, o, c;
                let {
                    section: w,
                    onComplete: j,
                    initialLatex: k,
                    initialTab: N = "symbols",
                    onLatexChange: C,
                    mode: S = "web",
                    onUsageCheck: z,
                    onUsageIncrement: A,
                    uiOverrides: M
                } = e, {
                    setShowSignModal: D
                } = (0, e$.b)(), I = "addondialog" === S || "addonsidebar" === S, L = null !== (t = null == M ? void 0 : M.hidePreview) && void 0 !== t && t, F = null !== (r = null == M ? void 0 : M.hideFontSizeControl) && void 0 !== r && r, P = "addondialog" === S, U = null == M ? void 0 : M.primaryAction, Z = null !== (o = null == M ? void 0 : M.hideSmartExtractGuide) && void 0 !== o && o, G = e => U ? (0, i.jsx)(e0, {
                    tooltip: U.label,
                    children: (0, i.jsx)(n.z, {
                        variant: "outline",
                        size: "sm",
                        onClick: th,
                        disabled: !V.trim(),
                        title: U.label,
                        className: eQ,
                        children: U.label
                    })
                }) : (0, i.jsx)(e0, {
                    tooltip: eF ? "Smart extraction in progress" : "Smart extract equation from ".concat(e2()),
                    children: (0, i.jsx)(n.z, {
                        variant: "outline",
                        size: "sm",
                        onClick: te,
                        disabled: eF,
                        title: "Smart extract equation from ".concat(e2()),
                        className: eQ,
                        children: eF ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("svg", {
                                className: "h-3 w-3 animate-spin mr-1",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: (0, i.jsx)("path", {
                                    d: "M21 12a9 9 0 11-6.219-8.56"
                                })
                            }), "Extracting..."]
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)("div", {
                                className: "relative mr-1",
                                children: [(0, i.jsx)(g.Z, {
                                    className: "h-3 w-3"
                                }), eW && (0, i.jsx)("div", {
                                    className: "absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full border border-white"
                                })]
                            }), e]
                        })
                    })
                }), H = "equationeditor", [V, X] = (0, a.useState)(k || ""), [B, W] = (0, a.useState)([]), [$, J] = (0, a.useState)(null), [K, Y] = (0, a.useState)([]), [Q, ee] = (0, a.useState)(null), [et, er] = (0, a.useState)(12), [ei, ea] = (0, a.useState)(!1), es = (0, a.useRef)(null), en = (0, a.useRef)(null), [el, eo] = (0, a.useState)(() => e5(N)), ec = e => {
                    ("symbols" === e || "ai" === e || "image" === e) && eo(e)
                }, [ed, eu] = (0, a.useState)([]), [em, ex] = (0, a.useState)(-1), [ep, ef] = (0, a.useState)(!1), eb = (0, a.useCallback)(e => e instanceof ew.MS ? 401 === e.status || 401 === e.code : e instanceof Error && e.message.includes("Please login first"), []);
                (0, a.useEffect)(() => {
                    eo(e5(N))
                }, [N]), (0, a.useEffect)(() => {
                    I && e9()
                }, [I]);
                let [ev, ej] = (0, a.useState)({
                    isProUser: !1,
                    isLoading: !0,
                    trialActive: !1,
                    trialEnd: null,
                    trialScopes: [],
                    trialDaysRemaining: 0,
                    userEmail: "",
                    lastCheckDate: ""
                }), [e_, ek] = (0, a.useState)(!1), [eN, eC] = (0, a.useState)(""), [eS, ez] = (0, a.useState)("credits_insufficient"), [eA, eE] = (0, a.useState)(!1), [eM, eD] = (0, a.useState)(!1), [eI, eL] = (0, a.useState)(""), [eR] = (0, a.useState)("credits_insufficient"), [eq, eT] = (0, a.useState)(!1), [eF, eP] = (0, a.useState)(!1), [eZ, eG] = (0, a.useState)(null), [eX, eB] = (0, a.useState)(!1), [eW, eO] = (0, a.useState)(() => {
                    try {
                        if ("undefined" != typeof localStorage) return "true" !== localStorage.getItem(e3)
                    } catch (e) {
                        console.warn("localStorage not available:", e)
                    }
                    return !0
                });
                (0, a.useEffect)(() => {
                    I && (async () => {
                        var e, t, r, i, a, s, n, l, o;
                        let c = e4();
                        if (c) {
                            let i = null !== (e = c.trialEnd) && void 0 !== e ? e : null,
                                a = null !== (t = c.trialScopes) && void 0 !== t ? t : [],
                                s = !c.isProUser && e8(i) && a.includes("addon_insert") && a.includes("addon_extract");
                            if (ej({
                                    isProUser: c.isProUser,
                                    isLoading: !1,
                                    trialActive: s,
                                    trialEnd: i,
                                    trialScopes: a,
                                    trialDaysRemaining: null !== (r = c.trialDaysRemaining) && void 0 !== r ? r : 0,
                                    userEmail: c.userEmail,
                                    lastCheckDate: new Date().toDateString()
                                }), c.isProUser) return
                        }
                        try {
                            let e = await ew.QC.getUserStatus(),
                                t = !e.subscription.isProUser && e.trial.active && e.trial.scopes.includes("addon_insert") && e.trial.scopes.includes("addon_extract"),
                                r = {
                                    isProUser: e.subscription.isProUser,
                                    isLoading: !1,
                                    trialActive: t,
                                    trialEnd: e.trial.end,
                                    trialScopes: e.trial.scopes,
                                    trialDaysRemaining: e.trial.daysRemaining,
                                    userEmail: e.user.email,
                                    lastCheckDate: new Date().toDateString()
                                };
                            ej(r), e6({
                                isProUser: e.subscription.isProUser,
                                userEmail: e.user.email,
                                lastCheck: Date.now(),
                                trialEnd: e.trial.end,
                                trialScopes: e.trial.scopes,
                                trialDaysRemaining: e.trial.daysRemaining
                            })
                        } catch (c) {
                            console.error("Failed to load add-on user status:", c);
                            let e = e4(),
                                t = null !== (i = null == e ? void 0 : e.trialEnd) && void 0 !== i ? i : null,
                                r = null !== (a = null == e ? void 0 : e.trialScopes) && void 0 !== a ? a : [];
                            ej({
                                isProUser: null !== (s = null == e ? void 0 : e.isProUser) && void 0 !== s && s,
                                isLoading: !1,
                                trialActive: !(null !== (n = null == e ? void 0 : e.isProUser) && void 0 !== n && n) && e8(t) && r.includes("addon_insert") && r.includes("addon_extract"),
                                trialEnd: t,
                                trialScopes: r,
                                trialDaysRemaining: null !== (l = null == e ? void 0 : e.trialDaysRemaining) && void 0 !== l ? l : 0,
                                userEmail: null !== (o = null == e ? void 0 : e.userEmail) && void 0 !== o ? o : "",
                                lastCheckDate: new Date().toDateString()
                            })
                        }
                    })()
                }, [I]);
                let eJ = (0, a.useCallback)(() => !I || ((console.log("[ADDON] Usage check triggered", {
                        isProUser: ev.isProUser,
                        trialActive: ev.trialActive,
                        trialEnd: ev.trialEnd
                    }), ev.isProUser) ? (console.log("[ADDON] Pro user detected, skipping trial gating"), !0) : ev.trialActive ? (console.log("[ADDON] Trial active, usage allowed"), !0) : (ez("trial_ended"), eC("Your trial ended. Upgrade to keep using Insert and Smart Extract in the Google Workspace™ add-on."), ek(!0), !1)), [I, ev]),
                    eK = (0, a.useCallback)(() => {}, []);
                (0, a.useEffect)(() => {
                    ea(!0);
                    let e = e => {
                            var t;
                            let r = (null === (t = e.detail) || void 0 === t ? void 0 : t.message) || "Insufficient credits. Please upgrade to continue using the service.";
                            I ? (ez("credits_insufficient"), eC(r), ek(!0)) : (eL(r), eD(!0))
                        },
                        t = !(null == M ? void 0 : M.disableInternalPaywalls);
                    return t && window.addEventListener("insufficient-credits", e), (async () => {
                        try {
                            await (0, R.Vi)(), await (0, q.au)()
                        } catch (e) {
                            console.error("MathJax initialization error:", e)
                        }
                    })(), () => {
                        t && window.removeEventListener("insufficient-credits", e)
                    }
                }, [I, null == M ? void 0 : M.disableInternalPaywalls]), (0, a.useEffect)(() => {
                    if (ei) {
                        let e = setTimeout(async () => {
                            try {
                                await (0, q.au)()
                            } catch (e) {
                                console.error("MathJax rendering error:", e)
                            }
                        }, 30);
                        return () => clearTimeout(e)
                    }
                }, [V, ei]);
                let e1 = e => {
                        if (e === ed[em]) return;
                        let t = em < ed.length - 1 ? ed.slice(0, em + 1) : ed;
                        eu([...t, e]), ex(t.length)
                    },
                    e2 = () => {
                        var e, t;
                        return (null === (t = window.google) || void 0 === t ? void 0 : null === (e = t.script) || void 0 === e ? void 0 : e.run) ? "Docs" : "document"
                    },
                    e7 = e => {
                        eZ && eG(null), X(e), C && C(e), e1(e)
                    },
                    te = async () => {
                        if (I) {
                            if (!(z ? await z() : eJ())) return
                        } else if (z && !await z()) return;
                        let e = !1;
                        try {
                            "undefined" != typeof localStorage && (e = "true" === localStorage.getItem(e3))
                        } catch (e) {
                            console.warn("localStorage not available:", e)
                        }
                        if (!e) {
                            eB(!0);
                            return
                        }
                        await tt()
                    },
                    tt = async () => {
                        eP(!0), eG(null);
                        let e = !1;
                        try {
                            var t, r;
                            if (null === (r = window.google) || void 0 === r ? void 0 : null === (t = r.script) || void 0 === t ? void 0 : t.run) {
                                let t = await new Promise((e, t) => {
                                    window.google.script.run.withSuccessHandler(t => {
                                        e(t)
                                    }).withFailureHandler(e => {
                                        t(Error(e.message || "Failed to extract equation from image"))
                                    }).extractLatexFromSelectedImage()
                                });
                                if (t.success) tr(t.latex), e = !0;
                                else if (t.multipleImages) eG(t.error);
                                else {
                                    if (t.error && t.error.includes("Insufficient credits, please recharge")) {
                                        window.dispatchEvent(new CustomEvent("insufficient-credits", {
                                            detail: {
                                                message: t.error
                                            }
                                        }));
                                        return
                                    }
                                    eG(t.error)
                                }
                            } else console.log("Demo mode: Simulating Smart Extract functionality"), await new Promise(e => setTimeout(e, 1500)), tr("x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"), e = !0, console.log("Demo extraction completed with sample equation");
                            e && (I ? A ? A() : eK() : A && A())
                        } catch (t) {
                            console.error("Failed to extract equation from image:", t);
                            let e = t instanceof Error ? t.message : "Failed to extract equation from image";
                            if (e.includes("Insufficient credits, please recharge")) {
                                window.dispatchEvent(new CustomEvent("insufficient-credits", {
                                    detail: {
                                        message: e
                                    }
                                }));
                                return
                            }
                            eG(e)
                        } finally {
                            eP(!1)
                        }
                    },
                    tr = (e, t) => {
                        e && (t && (Y(t), ee(e)), e7(e))
                    },
                    ti = (0, a.useCallback)((e, t) => {
                        var r;
                        W(e), J(null !== (r = null != t ? t : e[0]) && void 0 !== r ? r : null)
                    }, []),
                    ta = (0, a.useCallback)((e, t) => {
                        var r;
                        Y(e), ee(null !== (r = null != t ? t : e[0]) && void 0 !== r ? r : null)
                    }, []),
                    ts = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (eB(!1), eO(!1), e) try {
                            "undefined" != typeof localStorage && localStorage.setItem(e3, "true")
                        } catch (e) {
                            console.warn("localStorage not available:", e)
                        }
                        setTimeout(() => {
                            tt()
                        }, 100)
                    },
                    tn = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!es.current) return !1;
                        let r = es.current,
                            i = "visual" === r.getCurrentMode();
                        if (t.preferAdvanced && i) try {
                            if (r.insertLatexWithAdvancedManager) return r.insertLatexWithAdvancedManager(e), !0;
                            if (r.insertLatexWithEventSimulation) return r.insertLatexWithEventSimulation(e), !0;
                            if (r.insertLatexWithSelection) return r.insertLatexWithSelection(e), !0
                        } catch (e) {
                            console.error("Advanced insertion strategies failed:", e)
                        }
                        try {
                            var a;
                            return null === (a = r.insertLatex) || void 0 === a || a.call(r, e), !0
                        } catch (e) {
                            return console.error("Standard insertion failed:", e), !1
                        }
                    },
                    tl = function(e) {
                        arguments.length > 1 && void 0 !== arguments[1] && arguments[1], eZ && eG(null);
                        let t = es.current,
                            r = null == t ? void 0 : t.getCurrentMode();
                        if (t && "visual" === r) {
                            let t = O(e);
                            if (Array.isArray(t)) {
                                if (tn(t[1] || e, {
                                        preferAdvanced: !0
                                    }) || tn(e, {
                                        preferAdvanced: !0
                                    })) return
                            } else if (tn(e, {
                                    preferAdvanced: !0
                                })) return
                        } else if (t && tn(e)) return;
                        e7(V + e)
                    },
                    to = () => {
                        W([]), J(null), Y([]), ee(null), e7("")
                    },
                    tc = () => {
                        if (em > 0) {
                            let e = em - 1;
                            ex(e);
                            let t = ed[e];
                            X(t), C && C(t)
                        }
                    },
                    td = () => {
                        if (em < ed.length - 1) {
                            let e = em + 1;
                            ex(e);
                            let t = ed[e];
                            X(t), C && C(t)
                        }
                    },
                    tu = async () => {
                        if (V.trim() && !ep) {
                            ef(!0);
                            try {
                                var e;
                                let t = await ew.QC.correctLatex(V),
                                    r = (null === (e = t.latex) || void 0 === e ? void 0 : e.trim()) || "";
                                if (r && !eU(r, "correct")) throw Error("AI returned non-LaTeX content. Please try again.");
                                r && e7(r)
                            } catch (t) {
                                console.error("Failed to correct current LaTeX:", t);
                                let e = t instanceof Error ? t.message : "Correction failed. Please try again later";
                                if (!I && eb(t)) {
                                    D(!0);
                                    return
                                }
                                if (e.includes("Insufficient credits, please recharge")) {
                                    window.dispatchEvent(new CustomEvent("insufficient-credits", {
                                        detail: {
                                            message: e
                                        }
                                    }));
                                    return
                                }
                            } finally {
                                ef(!1)
                            }
                        }
                    },
                    tm = async () => {
                        if (!V.trim()) {
                            console.warn("No LaTeX content to insert");
                            return
                        }
                        if (I) {
                            if (!(z ? await z() : eJ())) return
                        } else if (z && !await z()) return;
                        eT(!0);
                        try {
                            var e, t;
                            let r = !1,
                                {
                                    imageBase64: i,
                                    dimensions: a
                                } = await tj();
                            if (!a) throw Error("Could not determine equation dimensions. Please try re-typing the equation.");
                            if (null === (t = window.google) || void 0 === t ? void 0 : null === (e = t.script) || void 0 === e ? void 0 : e.run) {
                                let e = a ? { ...a,
                                    fontSize: et
                                } : null;
                                await new Promise((t, r) => {
                                    window.google.script.run.withSuccessHandler(e => {
                                        if (e && "object" == typeof e) {
                                            if ("success" in e && !e.success) {
                                                r(Error(e.error || "Insert failed"));
                                                return
                                            }
                                            if ("error" in e && e.error) {
                                                r(Error(e.error));
                                                return
                                            }
                                        }
                                        console.log("Equation inserted successfully:", e), t(e)
                                    }).withFailureHandler(e => {
                                        console.error("Failed to insert equation:", e), r(Error(e.message || "Insert failed"))
                                    }).insertEquation(V, i, e)
                                }), console.log("Equation inserted to document successfully"), r = !0
                            } else console.log("Google Apps Script environment not available - demo mode");
                            r && (I ? A ? A() : eK() : A && A())
                        } catch (e) {
                            console.error("Failed to insert equation:", e)
                        } finally {
                            eT(!1)
                        }
                    },
                    th = async () => {
                        let e = V.trim();
                        if (e) {
                            if (null == U ? void 0 : U.onClick) {
                                await U.onClick(e);
                                return
                            }
                            j(e)
                        }
                    },
                    tg = null !== (c = null == U ? void 0 : U.label) && void 0 !== c ? c : "Insert",
                    tx = U ? U.label : eq ? "Inserting equation..." : "Insert equation into document",
                    tp = U ? !V.trim() : eq || !V.trim(),
                    tf = U ? th : tm,
                    tb = !F,
                    ty = "addonsidebar" === S,
                    tv = !U,
                    tw = () => (0, i.jsx)(eY, {
                        mode: S,
                        layout: I ? "overlay" : "inline",
                        isActive: "image" === el,
                        onRecognize: tr,
                        candidates: K,
                        selectedCandidate: Q,
                        onCandidatesChange: ta
                    }),
                    tj = async () => {
                        try {
                            let e = en.current;
                            if (!e) throw Error("Equation editor root not available");
                            let t = Array.from(e.querySelectorAll("[data-latex-output-container]")),
                                r = null;
                            for (let e of t)
                                if (e.querySelector(".MathJax")) {
                                    r = e;
                                    break
                                }
                            if (!r) throw Error("Math output element not found");
                            await (0, q.au)();
                            let i = r.querySelector(".MathJax");
                            if (!i) throw Error("MathJax element not found");
                            let a = i.querySelector("svg");
                            if (!a) throw Error("SVG element not found");
                            let s = null,
                                n = (e => {
                                    let t = parseFloat(window.getComputedStyle(e).fontSize || "16"),
                                        r = 40 / t,
                                        i = Math.max(16, Math.min(64, t * r / 2));
                                    return console.log("[Equation PNG] Font-size: ".concat(t.toFixed(1), "px, ") + "Scale: ".concat(r.toFixed(2), "x, ") + "Pixels/ex: ".concat(i.toFixed(1))), i
                                })(a),
                                l = a.getAttribute("width") || "",
                                o = a.getAttribute("height") || "",
                                c = 0,
                                d = 0;
                            if (l.endsWith("ex") && o.endsWith("ex")) c = parseFloat(l.replace("ex", "")), d = parseFloat(o.replace("ex", "")), s = {
                                unit: "ex",
                                width: c,
                                height: d
                            }, console.log("Got intrinsic dimensions in 'ex':", s);
                            else {
                                let e = a.getBoundingClientRect();
                                c = e.width / 8, d = e.height / 8, s = {
                                    unit: "px",
                                    width: e.width,
                                    height: e.height
                                }, console.warn("Fallback to pixel dimensions:", s)
                            }
                            let u = c * n,
                                m = d * n;
                            if (u > 8192 || m > 8192) {
                                let e = Math.min(8192 / u, 8192 / m);
                                u *= e, m *= e, console.warn("Image dimensions capped to safe limits. Scale: ".concat(e))
                            }
                            u = Math.max(1, Math.ceil(u)), m = Math.max(1, Math.ceil(m));
                            let h = a.cloneNode(!0);
                            h.setAttribute("xmlns", "http://www.w3.org/2000/svg"), h.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), h.setAttribute("width", u + "px"), h.setAttribute("height", m + "px");
                            let g = a.getAttribute("viewBox");
                            g && h.setAttribute("viewBox", g), h.removeAttribute("role"), h.removeAttribute("focusable"), h.removeAttribute("aria-hidden"), h.removeAttribute("style"), h.style.color = "black", h.style.fill = "currentColor";
                            let x = new XMLSerializer().serializeToString(h),
                                p = window.btoa(unescape(encodeURIComponent(x))),
                                f = "data:image/svg+xml;base64,".concat(p),
                                b = new Image;
                            await new Promise((e, t) => {
                                b.onload = () => e(), b.onerror = e => t(Error("Failed to load image from SVG")), b.src = f
                            });
                            let y = document.createElement("canvas");
                            y.width = u, y.height = m;
                            let v = y.getContext("2d");
                            if (!v) throw Error("Failed to get Canvas context");
                            return v.imageSmoothingEnabled = !0, v.imageSmoothingQuality = "high", v.drawImage(b, 0, 0, u, m), {
                                imageBase64: y.toDataURL("image/png"),
                                dimensions: s
                            }
                        } catch (e) {
                            return console.error("Error generating equation image:", e), {
                                imageBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
                                dimensions: null
                            }
                        }
                    };
                switch (S) {
                    case "addonsidebar":
                        return (0, i.jsxs)("section", {
                            id: H,
                            className: "relative w-full h-full scroll-mt-24",
                            children: [(0, i.jsxs)("div", {
                                ref: en,
                                className: "flex flex-col h-full w-full bg-white",
                                style: {
                                    padding: 0,
                                    width: "100%",
                                    boxSizing: "border-box"
                                },
                                children: [(0, i.jsxs)(d, {
                                    value: el,
                                    className: "flex-shrink-0",
                                    onValueChange: ec,
                                    children: [(0, i.jsxs)(u, {
                                        className: "grid w-full grid-cols-3",
                                        children: [(0, i.jsx)(m, {
                                            value: "symbols",
                                            className: "text-xs p-2",
                                            children: "Symbols"
                                        }), (0, i.jsxs)(m, {
                                            value: "ai",
                                            className: "text-xs p-2 flex items-center gap-1",
                                            children: [(0, i.jsx)(x.Z, {
                                                className: "h-3 w-3"
                                            }), "AI"]
                                        }), (0, i.jsxs)(m, {
                                            value: "image",
                                            className: "text-xs p-2 flex items-center gap-1",
                                            children: [(0, i.jsx)(g.Z, {
                                                className: "h-3 w-3"
                                            }), "Image"]
                                        })]
                                    }), "image" !== el ? (0, i.jsxs)("div", {
                                        className: "thin-scrollbar flex-grow overflow-y-auto pt-1.5",
                                        children: [(0, i.jsx)(h, {
                                            value: "symbols",
                                            className: "mt-0",
                                            children: (0, i.jsx)(E, {
                                                onSymbolClick: tl,
                                                mode: S
                                            })
                                        }), (0, i.jsx)(h, {
                                            value: "ai",
                                            className: "mt-0",
                                            children: (0, i.jsx)(eH, {
                                                mode: S,
                                                latex: V,
                                                isClient: ei,
                                                onApplyLatex: e7,
                                                onRequireSignIn: () => D(!0),
                                                isLoginRequiredError: eb,
                                                candidates: B,
                                                selectedCandidate: $,
                                                onCandidatesChange: ti
                                            })
                                        })]
                                    }) : null]
                                }), (0, i.jsxs)("div", {
                                    className: "relative flex-1 flex flex-col overflow-hidden mt-1.5",
                                    children: [(0, i.jsx)("div", {
                                        className: (0, s.Z)("flex-shrink-0", "image" === el && "mb-1.5"),
                                        children: tw()
                                    }), (0, i.jsxs)("div", {
                                        className: "flex-shrink-0",
                                        children: [(0, i.jsxs)("div", {
                                            className: "flex items-center justify-between mb-1.5",
                                            children: [(0, i.jsx)(_.pn, {
                                                delayDuration: 120,
                                                children: (0, i.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [(0, i.jsx)(e0, {
                                                        tooltip: "Clear the current formula",
                                                        children: (0, i.jsx)(n.z, {
                                                            variant: "outline",
                                                            size: "icon",
                                                            onClick: to,
                                                            title: "Clear",
                                                            className: "h-6 w-6",
                                                            children: (0, i.jsx)(p.Z, {
                                                                className: "h-4 w-4"
                                                            })
                                                        })
                                                    }), (0, i.jsx)(e0, {
                                                        tooltip: em <= 0 ? "Nothing to undo" : "Undo the last change",
                                                        children: (0, i.jsx)(n.z, {
                                                            variant: "outline",
                                                            size: "icon",
                                                            onClick: tc,
                                                            disabled: em <= 0,
                                                            title: "Undo",
                                                            className: "h-6 w-6",
                                                            children: (0, i.jsx)(f.Z, {
                                                                className: "h-4 w-4"
                                                            })
                                                        })
                                                    }), (0, i.jsx)(e0, {
                                                        tooltip: em >= ed.length - 1 ? "Nothing to redo" : "Redo the next change",
                                                        children: (0, i.jsx)(n.z, {
                                                            variant: "outline",
                                                            size: "icon",
                                                            onClick: td,
                                                            disabled: em >= ed.length - 1,
                                                            title: "Redo",
                                                            className: "h-6 w-6",
                                                            children: (0, i.jsxs)("svg", {
                                                                className: "h-4 w-4",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: [(0, i.jsx)("path", {
                                                                    d: "M21 7v6h-6"
                                                                }), (0, i.jsx)("path", {
                                                                    d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
                                                                })]
                                                            })
                                                        })
                                                    }), "ai" === el && V.trim() && (0, i.jsx)(e0, {
                                                        tooltip: ep ? "Correcting current LaTeX" : "Correct the current LaTeX output",
                                                        children: (0, i.jsx)(n.z, {
                                                            variant: "outline",
                                                            size: "icon",
                                                            onClick: tu,
                                                            disabled: ep,
                                                            title: "Correct",
                                                            className: "h-6 w-6",
                                                            children: (0, i.jsx)(b.Z, {
                                                                className: "h-4 w-4"
                                                            })
                                                        })
                                                    })]
                                                })
                                            }), I && U ? (0, i.jsx)(e0, {
                                                tooltip: U.label,
                                                children: (0, i.jsx)(n.z, {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: th,
                                                    disabled: !V.trim(),
                                                    title: U.label,
                                                    className: "h-6 px-2 text-xs font-medium",
                                                    children: U.label
                                                })
                                            }) : I && "addonsidebar" !== S ? (0, i.jsx)(e0, {
                                                tooltip: eF ? "Smart extraction in progress" : "Smart extract equation from ".concat(e2()),
                                                children: (0, i.jsx)(n.z, {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: te,
                                                    disabled: eF,
                                                    title: "Smart extract equation from ".concat(e2()),
                                                    className: "h-6 px-2 text-xs font-medium",
                                                    children: eF ? (0, i.jsxs)(i.Fragment, {
                                                        children: [(0, i.jsx)("svg", {
                                                            className: "h-3 w-3 animate-spin mr-1",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: (0, i.jsx)("path", {
                                                                d: "M21 12a9 9 0 11-6.219-8.56"
                                                            })
                                                        }), "Extracting..."]
                                                    }) : (0, i.jsxs)(i.Fragment, {
                                                        children: [(0, i.jsxs)("div", {
                                                            className: "relative mr-1",
                                                            children: [(0, i.jsx)(g.Z, {
                                                                className: "h-3 w-3"
                                                            }), eW && (0, i.jsx)("div", {
                                                                className: "absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full border border-white"
                                                            })]
                                                        }), "addonsidebar" === S ? "Extract" : "Smart Extract"]
                                                    })
                                                })
                                            }) : null]
                                        }), (0, i.jsx)(eh, {
                                            ref: es,
                                            value: V,
                                            onChange: e7,
                                            mode: S,
                                            placeholder: "Enter LaTeX...",
                                            className: "w-full",
                                            maxHeightLimit: 250
                                        }), eZ && (0, i.jsx)(ey.bZ, {
                                            variant: "destructive",
                                            className: "mt-2",
                                            children: (0, i.jsx)(ey.X, {
                                                className: "text-xs",
                                                children: eZ
                                            })
                                        })]
                                    }), !L && (0, i.jsxs)("div", {
                                        className: "flex-1 flex flex-col bg-white rounded-md overflow-hidden",
                                        children: [(0, i.jsxs)("div", {
                                            className: "flex-shrink-0 flex items-center justify-between px-2 pt-2 pb-1 border-b border-gray-200",
                                            children: [(0, i.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [tb ? (0, i.jsx)(eg, {
                                                    value: et,
                                                    onChange: er
                                                }) : null, ty ? G("Extract") : null]
                                            }), (0, i.jsx)("div", {
                                                className: "flex items-center gap-1.5",
                                                children: (0, i.jsx)(e0, {
                                                    tooltip: eq ? "Inserting equation..." : V.trim() ? tx : "Enter or generate a formula first",
                                                    children: (0, i.jsx)(n.z, {
                                                        onClick: tf,
                                                        disabled: tp,
                                                        className: "h-7 min-w-[72px] px-3 text-xs text-white shadow-xl rounded-md transition-all duration-300 font-bold ring-1 ring-blue-300/40 ".concat(!U && eq ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 animate-pulse" : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500"),
                                                        size: "sm",
                                                        title: tx,
                                                        children: !U && eq ? (0, i.jsxs)(i.Fragment, {
                                                            children: [(0, i.jsx)("div", {
                                                                className: "animate-spin h-3 w-3 border border-white border-t-transparent rounded-full mr-1"
                                                            }), (0, i.jsx)("span", {
                                                                children: "Inserting"
                                                            })]
                                                        }) : (0, i.jsx)("span", {
                                                            children: tg
                                                        })
                                                    })
                                                })
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "thin-scrollbar flex-1 min-h-0 overflow-auto",
                                            children: (0, i.jsx)(T, {
                                                latex: V,
                                                isClient: ei,
                                                mode: S,
                                                fontSize: et
                                            })
                                        })]
                                    })]
                                })]
                            }), !Z && eX && (0, i.jsx)("div", {
                                className: "fixed inset-0 z-50 pointer-events-none",
                                children: (0, i.jsx)("div", {
                                    className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto",
                                    children: (0, i.jsxs)("div", {
                                        className: "bg-white rounded-lg shadow-lg border border-gray-200 p-3 max-w-xs",
                                        children: [(0, i.jsxs)("div", {
                                            className: "flex items-start justify-between mb-2",
                                            children: [(0, i.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [(0, i.jsx)("div", {
                                                    className: "w-2 h-2 bg-green-500 rounded-full"
                                                }), (0, i.jsx)("span", {
                                                    className: "text-sm font-medium text-gray-900",
                                                    children: "Smart Extract"
                                                })]
                                            }), (0, i.jsx)("button", {
                                                onClick: () => ts(!1),
                                                className: "text-gray-400 hover:text-gray-600 p-0.5",
                                                children: (0, i.jsx)(y.Z, {
                                                    className: "w-3 h-3"
                                                })
                                            })]
                                        }), (0, i.jsx)("p", {
                                            className: "text-xs text-gray-600 mb-3",
                                            children: "Select an equation image in your document, then click this button to extract and re-edit the equation."
                                        }), (0, i.jsxs)("div", {
                                            className: "flex gap-1",
                                            children: [(0, i.jsx)(n.z, {
                                                onClick: () => ts(!1),
                                                size: "sm",
                                                className: "flex-1 h-7 text-xs",
                                                children: "Got it"
                                            }), (0, i.jsx)(n.z, {
                                                variant: "outline",
                                                onClick: () => ts(!0),
                                                size: "sm",
                                                className: "flex-1 h-7 text-xs",
                                                children: "Don't show again"
                                            })]
                                        })]
                                    })
                                })
                            })]
                        });
                    case "addondialog":
                        return (0, i.jsxs)("section", {
                            id: H,
                            className: "relative w-full h-full scroll-mt-24",
                            children: [(0, i.jsxs)("div", {
                                ref: en,
                                className: "flex flex-col h-full w-full bg-white",
                                style: {
                                    padding: 0,
                                    width: "100%",
                                    minHeight: "300px",
                                    boxSizing: "border-box"
                                },
                                children: [(0, i.jsxs)(d, {
                                    value: el,
                                    className: "flex-shrink-0",
                                    onValueChange: ec,
                                    children: [(0, i.jsxs)(u, {
                                        className: "grid w-full grid-cols-3",
                                        children: [(0, i.jsx)(m, {
                                            value: "symbols",
                                            className: "text-sm",
                                            children: "Symbols"
                                        }), (0, i.jsxs)(m, {
                                            value: "ai",
                                            className: "text-sm flex items-center gap-1",
                                            children: [(0, i.jsx)(x.Z, {
                                                className: "h-3 w-3"
                                            }), "AI"]
                                        }), (0, i.jsxs)(m, {
                                            value: "image",
                                            className: "text-sm flex items-center gap-1",
                                            children: [(0, i.jsx)(g.Z, {
                                                className: "h-3 w-3"
                                            }), "Image"]
                                        })]
                                    }), "image" !== el ? (0, i.jsxs)("div", {
                                        className: "thin-scrollbar flex-grow overflow-y-auto pt-1.5",
                                        children: [(0, i.jsx)(h, {
                                            value: "symbols",
                                            className: "mt-0",
                                            children: (0, i.jsx)(E, {
                                                onSymbolClick: tl,
                                                mode: S
                                            })
                                        }), (0, i.jsx)(h, {
                                            value: "ai",
                                            className: "mt-0",
                                            children: (0, i.jsx)(eH, {
                                                mode: S,
                                                latex: V,
                                                isClient: ei,
                                                onApplyLatex: e7,
                                                onRequireSignIn: () => D(!0),
                                                isLoginRequiredError: eb,
                                                candidates: B,
                                                selectedCandidate: $,
                                                onCandidatesChange: ti
                                            })
                                        })]
                                    }) : null]
                                }), (0, i.jsxs)("div", {
                                    className: "relative flex-1 flex flex-col overflow-hidden mt-1.5 min-h-0",
                                    children: [(0, i.jsx)("div", {
                                        className: (0, s.Z)("flex-shrink-0", "image" === el && "mb-1.5"),
                                        children: tw()
                                    }), (0, i.jsxs)("div", {
                                        className: "flex-1 min-h-0 flex flex-col",
                                        children: [(0, i.jsx)("div", {
                                            className: "flex-shrink-0 flex items-center justify-between mb-1.5",
                                            children: (0, i.jsx)(_.pn, {
                                                delayDuration: 120,
                                                children: (0, i.jsx)("div", {
                                                    className: "flex items-center gap-1",
                                                    children: (0, i.jsxs)(i.Fragment, {
                                                        children: [(0, i.jsx)(e0, {
                                                            tooltip: "Clear the current formula",
                                                            children: (0, i.jsx)(n.z, {
                                                                variant: "outline",
                                                                size: "sm",
                                                                onClick: to,
                                                                title: "Clear All",
                                                                className: "h-6 w-6 p-0",
                                                                children: (0, i.jsx)(p.Z, {
                                                                    className: "h-3 w-3"
                                                                })
                                                            })
                                                        }), (0, i.jsx)(e0, {
                                                            tooltip: em <= 0 ? "Nothing to undo" : "Undo the last change",
                                                            children: (0, i.jsx)(n.z, {
                                                                variant: "outline",
                                                                size: "sm",
                                                                onClick: tc,
                                                                disabled: em <= 0,
                                                                title: "Undo",
                                                                className: "h-6 w-6 p-0",
                                                                children: (0, i.jsx)(f.Z, {
                                                                    className: "h-3 w-3"
                                                                })
                                                            })
                                                        }), (0, i.jsx)(e0, {
                                                            tooltip: em >= ed.length - 1 ? "Nothing to redo" : "Redo the next change",
                                                            children: (0, i.jsx)(n.z, {
                                                                variant: "outline",
                                                                size: "sm",
                                                                onClick: td,
                                                                disabled: em >= ed.length - 1,
                                                                title: "Redo",
                                                                className: "h-6 w-6 p-0",
                                                                children: (0, i.jsxs)("svg", {
                                                                    className: "h-3 w-3",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    children: [(0, i.jsx)("path", {
                                                                        d: "M21 7v6h-6"
                                                                    }), (0, i.jsx)("path", {
                                                                        d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
                                                                    })]
                                                                })
                                                            })
                                                        }), "ai" === el && V.trim() && (0, i.jsx)(e0, {
                                                            tooltip: ep ? "Correcting current LaTeX" : "Correct the current LaTeX output",
                                                            children: (0, i.jsx)(n.z, {
                                                                variant: "outline",
                                                                size: "sm",
                                                                onClick: tu,
                                                                disabled: ep,
                                                                title: "Correct",
                                                                className: "h-6 w-6 p-0",
                                                                children: (0, i.jsx)(b.Z, {
                                                                    className: "h-3 w-3"
                                                                })
                                                            })
                                                        })]
                                                    })
                                                })
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "flex-1 min-h-0",
                                            children: (0, i.jsx)(eh, {
                                                ref: es,
                                                value: V,
                                                onChange: e7,
                                                mode: S,
                                                placeholder: "Enter LaTeX equation here...",
                                                className: "w-full h-full",
                                                fillAvailableHeight: !0
                                            })
                                        }), eZ && (0, i.jsx)(ey.bZ, {
                                            variant: "destructive",
                                            className: "mt-2 flex-shrink-0",
                                            children: (0, i.jsx)(ey.X, {
                                                className: "text-xs",
                                                children: eZ
                                            })
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "flex-shrink-0 flex items-center px-2 pt-2 pb-1 border-b border-gray-200 bg-white rounded-md ".concat(tb || tv ? "justify-between" : "justify-end"),
                                        children: [(0, i.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [tb ? (0, i.jsx)(eg, {
                                                value: et,
                                                onChange: er
                                            }) : null, tv ? G("Smart Extract") : null]
                                        }), (0, i.jsx)("div", {
                                            className: "flex items-center gap-2",
                                            children: (0, i.jsx)(e0, {
                                                tooltip: eq ? "Inserting equation..." : V.trim() ? tx : "Enter or generate a formula first",
                                                children: (0, i.jsx)(n.z, {
                                                    onClick: tf,
                                                    disabled: tp,
                                                    className: "h-7 min-w-[72px] px-3 text-xs text-white shadow-xl rounded-md transition-all duration-300 font-bold ring-1 ring-blue-300/40 ".concat(!U && eq ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 animate-pulse" : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500"),
                                                    size: "sm",
                                                    title: tx,
                                                    children: !U && eq ? (0, i.jsxs)(i.Fragment, {
                                                        children: [(0, i.jsx)("div", {
                                                            className: "animate-spin h-3 w-3 border border-white border-t-transparent rounded-full mr-1"
                                                        }), (0, i.jsx)("span", {
                                                            children: "Inserting"
                                                        })]
                                                    }) : (0, i.jsx)("span", {
                                                        children: tg
                                                    })
                                                })
                                            })
                                        })]
                                    }), !L && !P && (0, i.jsx)("div", {
                                        className: "flex-1 flex flex-col bg-white rounded-md overflow-hidden min-h-0",
                                        children: (0, i.jsx)("div", {
                                            className: "thin-scrollbar flex-1 min-h-0 overflow-auto",
                                            children: (0, i.jsx)(T, {
                                                latex: V,
                                                isClient: ei,
                                                mode: S,
                                                fontSize: et
                                            })
                                        })
                                    }), P && (0, i.jsx)("div", {
                                        "aria-hidden": "true",
                                        className: "absolute left-[-10000px] top-0 h-[240px] w-[640px] opacity-0 pointer-events-none overflow-hidden",
                                        children: (0, i.jsx)(T, {
                                            latex: V,
                                            isClient: ei,
                                            mode: S,
                                            fontSize: et
                                        })
                                    })]
                                })]
                            }), !Z && eX && (0, i.jsx)("div", {
                                className: "fixed inset-0 z-50 pointer-events-none",
                                children: (0, i.jsx)("div", {
                                    className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto",
                                    children: (0, i.jsxs)("div", {
                                        className: "bg-white rounded-lg shadow-lg border border-gray-200 p-3 max-w-xs",
                                        children: [(0, i.jsxs)("div", {
                                            className: "flex items-start justify-between mb-2",
                                            children: [(0, i.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [(0, i.jsx)("div", {
                                                    className: "w-2 h-2 bg-green-500 rounded-full"
                                                }), (0, i.jsx)("span", {
                                                    className: "text-sm font-medium text-gray-900",
                                                    children: "Smart Extract"
                                                })]
                                            }), (0, i.jsx)("button", {
                                                onClick: () => ts(!1),
                                                className: "text-gray-400 hover:text-gray-600 p-0.5",
                                                children: (0, i.jsx)(y.Z, {
                                                    className: "w-3 h-3"
                                                })
                                            })]
                                        }), (0, i.jsx)("p", {
                                            className: "text-xs text-gray-600 mb-3",
                                            children: "Select an image in your document, then click this button to extract and re-edit the equation."
                                        }), (0, i.jsxs)("div", {
                                            className: "flex gap-1",
                                            children: [(0, i.jsx)(n.z, {
                                                onClick: () => ts(!1),
                                                size: "sm",
                                                className: "flex-1 h-7 text-xs",
                                                children: "Got it"
                                            }), (0, i.jsx)(n.z, {
                                                variant: "outline",
                                                onClick: () => ts(!0),
                                                size: "sm",
                                                className: "flex-1 h-7 text-xs",
                                                children: "Don't show again"
                                            })]
                                        })]
                                    })
                                })
                            })]
                        });
                    default:
                        return (0, i.jsxs)("section", {
                            id: H,
                            className: "relative w-full scroll-mt-24 pt-6",
                            children: [(0, i.jsx)("div", {
                                ref: en,
                                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                                children: (0, i.jsxs)("div", {
                                    className: "w-full max-w-4xl mx-auto",
                                    children: [(0, i.jsx)(l.Zb, {
                                        className: (0, s.Z)({
                                            "p-2": "web" === S,
                                            "p-1": "web" !== S
                                        }),
                                        children: (0, i.jsxs)("div", {
                                            className: (0, s.Z)({
                                                "space-y-2": "web" === S,
                                                "space-y-1": "web" !== S
                                            }),
                                            children: [(0, i.jsxs)(d, {
                                                value: el,
                                                className: "w-full",
                                                onValueChange: ec,
                                                children: [(0, i.jsxs)(u, {
                                                    className: "grid w-full grid-cols-3",
                                                    children: [(0, i.jsx)(m, {
                                                        value: "symbols",
                                                        className: "flex items-center gap-1",
                                                        children: "Symbols"
                                                    }), (0, i.jsxs)(m, {
                                                        value: "ai",
                                                        className: "flex items-center gap-1",
                                                        children: [(0, i.jsx)(x.Z, {
                                                            className: "h-4 w-4"
                                                        }), (0, i.jsx)("span", {
                                                            className: "hidden md:inline",
                                                            children: "AI"
                                                        }), (0, i.jsx)("span", {
                                                            className: "md:hidden",
                                                            children: "AI"
                                                        })]
                                                    }), (0, i.jsxs)(m, {
                                                        value: "image",
                                                        className: "flex items-center gap-1",
                                                        children: [(0, i.jsx)(g.Z, {
                                                            className: "h-4 w-4"
                                                        }), (0, i.jsx)("span", {
                                                            className: "hidden md:inline",
                                                            children: "Image"
                                                        }), (0, i.jsx)("span", {
                                                            className: "md:hidden",
                                                            children: "Image"
                                                        })]
                                                    })]
                                                }), (0, i.jsx)(h, {
                                                    value: "symbols",
                                                    className: "mt-4",
                                                    children: (0, i.jsx)("div", {
                                                        className: "space-y-4",
                                                        children: (0, i.jsx)(E, {
                                                            onSymbolClick: tl,
                                                            mode: S
                                                        })
                                                    })
                                                }), (0, i.jsx)(h, {
                                                    value: "ai",
                                                    className: "mt-4",
                                                    children: (0, i.jsx)(eH, {
                                                        mode: S,
                                                        latex: V,
                                                        isClient: ei,
                                                        onApplyLatex: e7,
                                                        onRequireSignIn: () => D(!0),
                                                        isLoginRequiredError: eb,
                                                        candidates: B,
                                                        selectedCandidate: $,
                                                        onCandidatesChange: ti
                                                    })
                                                }), (0, i.jsx)(h, {
                                                    value: "image",
                                                    className: "mt-4",
                                                    children: tw()
                                                })]
                                            }), (0, i.jsx)(_.pn, {
                                                delayDuration: 120,
                                                children: (0, i.jsxs)("div", {
                                                    className: "mt-4 mb-2 flex flex-wrap gap-2",
                                                    children: [(0, i.jsx)(e0, {
                                                        tooltip: "Clear the current formula",
                                                        children: (0, i.jsx)(n.z, {
                                                            variant: "outline",
                                                            size: "sm",
                                                            onClick: to,
                                                            title: "Clear All",
                                                            children: "\uD83D\uDDD1️ Clear"
                                                        })
                                                    }), (0, i.jsx)(e0, {
                                                        tooltip: em <= 0 ? "Nothing to undo" : "Undo the last change",
                                                        children: (0, i.jsxs)(n.z, {
                                                            variant: "outline",
                                                            size: "sm",
                                                            onClick: tc,
                                                            disabled: em <= 0,
                                                            title: "Undo",
                                                            children: [(0, i.jsx)(f.Z, {
                                                                className: "h-4 w-4 mr-1"
                                                            }), "Undo"]
                                                        })
                                                    }), (0, i.jsx)(e0, {
                                                        tooltip: em >= ed.length - 1 ? "Nothing to redo" : "Redo the next change",
                                                        children: (0, i.jsxs)(n.z, {
                                                            variant: "outline",
                                                            size: "sm",
                                                            onClick: td,
                                                            disabled: em >= ed.length - 1,
                                                            title: "Redo",
                                                            children: [(0, i.jsxs)("svg", {
                                                                className: "h-4 w-4 mr-1",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: [(0, i.jsx)("path", {
                                                                    d: "M21 7v6h-6"
                                                                }), (0, i.jsx)("path", {
                                                                    d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
                                                                })]
                                                            }), "Redo"]
                                                        })
                                                    }), "ai" === el && V.trim() && (0, i.jsx)(e0, {
                                                        tooltip: ep ? "Correcting current LaTeX" : "Correct the current LaTeX output",
                                                        children: (0, i.jsxs)(n.z, {
                                                            variant: "outline",
                                                            size: "sm",
                                                            onClick: tu,
                                                            disabled: ep,
                                                            title: "Correct",
                                                            children: [(0, i.jsx)(b.Z, {
                                                                className: "h-4 w-4 mr-1"
                                                            }), "Correct"]
                                                        })
                                                    })]
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "w-full",
                                                children: (0, i.jsx)(eh, {
                                                    ref: es,
                                                    value: V,
                                                    onChange: e7,
                                                    mode: S,
                                                    placeholder: "Enter LaTeX or use visual editor...",
                                                    className: "min-h-[120px] w-full"
                                                })
                                            })]
                                        })
                                    }), !L && (0, i.jsx)(T, {
                                        latex: V,
                                        isClient: ei,
                                        mode: S
                                    })]
                                })
                            }), I && (0, i.jsx)(eV.Vq, {
                                open: e_,
                                onOpenChange: ek,
                                children: (0, i.jsxs)(eV.cZ, {
                                    className: "max-w-md",
                                    children: [(0, i.jsx)(eV.fK, {
                                        children: (0, i.jsx)(eV.$N, {
                                            children: "Upgrade Required"
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [(0, i.jsx)("p", {
                                            className: "text-sm text-gray-600",
                                            children: eN
                                        }), (0, i.jsxs)("div", {
                                            className: "flex gap-2",
                                            children: [(0, i.jsxs)(n.z, {
                                                onClick: async () => {
                                                    eE(!0);
                                                    try {
                                                        let e = await new Promise((e, t) => {
                                                            window.google.script.run.withSuccessHandler(e).withFailureHandler(t).getAuthToken()
                                                        });
                                                        if (e.success) {
                                                            let t = "https://ai-math.io/pricing?token=".concat(encodeURIComponent(e.token), "&source=addon&reason=").concat(encodeURIComponent(eS));
                                                            window.open(t, "_blank"), ek(!1)
                                                        } else throw Error(e.error || "Failed to get auth token")
                                                    } catch (e) {
                                                        console.error("Failed to redirect to upgrade:", e), alert("Redirect failed, please try again later")
                                                    } finally {
                                                        eE(!1)
                                                    }
                                                },
                                                disabled: eA,
                                                className: "flex-1",
                                                children: [(0, i.jsx)(v.Z, {
                                                    className: "w-3 h-3 mr-2 opacity-70"
                                                }), eA ? "Redirecting..." : "Upgrade"]
                                            }), (0, i.jsx)(n.z, {
                                                variant: "outline",
                                                onClick: () => ek(!1),
                                                children: "Cancel"
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, i.jsx)(eV.Vq, {
                                open: eM,
                                onOpenChange: eD,
                                children: (0, i.jsxs)(eV.cZ, {
                                    className: "max-w-md",
                                    children: [(0, i.jsx)(eV.fK, {
                                        children: (0, i.jsx)(eV.$N, {
                                            children: "Upgrade Required"
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [(0, i.jsx)("p", {
                                            className: "text-sm text-gray-600",
                                            children: eI
                                        }), (0, i.jsxs)("div", {
                                            className: "flex gap-2",
                                            children: [(0, i.jsxs)(n.z, {
                                                onClick: () => {
                                                    window.open("https://ai-math.io/pricing?reason=".concat(encodeURIComponent(eR)), "_blank"), eD(!1)
                                                },
                                                className: "flex-1",
                                                children: [(0, i.jsx)(v.Z, {
                                                    className: "w-3 h-3 mr-2 opacity-70"
                                                }), "Upgrade"]
                                            }), (0, i.jsx)(n.z, {
                                                variant: "outline",
                                                onClick: () => eD(!1),
                                                children: "Cancel"
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })
                }
            }
        },
        9314: function(e, t, r) {
            "use strict";
            r.d(t, {
                I: function() {
                    return n
                }
            });
            var i = r(18243),
                a = r(57420),
                s = r(10722);
            let n = a.forwardRef((e, t) => {
                let {
                    className: r,
                    type: a,
                    ...n
                } = e;
                return (0, i.jsx)("input", {
                    type: a,
                    className: (0, s.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r),
                    ref: t,
                    ...n
                })
            });
            n.displayName = "Input"
        },
        15121: function(e, t, r) {
            "use strict";
            r.d(t, {
                g: function() {
                    return n
                }
            });
            var i = r(18243),
                a = r(57420),
                s = r(10722);
            let n = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, i.jsx)("textarea", {
                    className: (0, s.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r),
                    ref: t,
                    ...a
                })
            });
            n.displayName = "Textarea"
        },
        73351: function(e, t, r) {
            "use strict";
            r.d(t, {
                _v: function() {
                    return d
                },
                aJ: function() {
                    return c
                },
                pn: function() {
                    return l
                },
                u: function() {
                    return o
                }
            });
            var i = r(18243),
                a = r(57420),
                s = r(68144),
                n = r(10722);
            let l = s.zt,
                o = s.fC,
                c = s.xz,
                d = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        sideOffset: a = 4,
                        ...l
                    } = e;
                    return (0, i.jsx)(s.h_, {
                        children: (0, i.jsx)(s.VY, {
                            ref: t,
                            sideOffset: a,
                            className: (0, n.cn)("z-[120] overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", r),
                            ...l
                        })
                    })
                });
            d.displayName = s.VY.displayName
        },
        18240: function(e, t, r) {
            "use strict";
            var i;
            r.d(t, {
                MS: function() {
                    return c
                },
                QC: function() {
                    return x
                }
            });
            let a = null,
                s = {
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

            function n() {
                var e, t;
                if (void 0 !== window.google && void 0 !== window.google.script && void 0 !== window.google.script.run) return "google-apps-script";
                let r = (null === (e = window.location) || void 0 === e ? void 0 : e.href) || "",
                    i = (null === (t = window.location) || void 0 === t ? void 0 : t.hostname) || "";
                return r.includes("script.google.com") || r.includes("googleusercontent.com") || r.includes("script.googleusercontent.com") || i.includes("script.google.com") || i.includes("googleusercontent.com") ? "google-apps-script" : "localhost" === i || "127.0.0.1" === i || i.includes("localhost") ? "development" : (r.includes("ai-equation-editor.pages.dev") || r.includes("cdn."), "cdn")
            }
            async function l() {
                var e, t;
                if (!(null === (t = window.google) || void 0 === t ? void 0 : null === (e = t.script) || void 0 === e ? void 0 : e.run)) return null;
                try {
                    let e = await new Promise((e, t) => {
                        window.google.script.run.withSuccessHandler(e).withFailureHandler(t).getAuthToken()
                    });
                    if ((null == e ? void 0 : e.success) && e.token) return a = e.token, e.token;
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
                return "development" === n()
            }
            o() && console.log("\uD83D\uDD27 API Configuration:", {
                environment: n(),
                config: s[n()],
                currentUrl: null === (i = window.location) || void 0 === i ? void 0 : i.href,
                userAgent: navigator.userAgent
            });
            class c extends Error {
                constructor(e, t) {
                    super(e), this.name = "ApiError", this.status = null == t ? void 0 : t.status, this.code = null == t ? void 0 : t.code
                }
            }

            function d() {
                return "google-apps-script" === n()
            }

            function u(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                return new Promise((t, i) => {
                    try {
                        window.google.script.run.withSuccessHandler(e => {
                            e && 0 === e.code ? t(e) : i(Error((null == e ? void 0 : e.message) || "API call failed"))
                        }).withFailureHandler(e => {
                            i(Error((null == e ? void 0 : e.message) || (null == e ? void 0 : e.toString()) || "Script execution failed"))
                        })[e](...r)
                    } catch (e) {
                        i(e)
                    }
                })
            }
            async function m(e, t, r) {
                let i = function(e) {
                        let t = s[n()],
                            r = e.startsWith("/") ? e : "/".concat(e);
                        return t.baseUrl ? "".concat(t.baseUrl).concat(r) : r
                    }(e),
                    a = s[n()],
                    l = await fetch(i, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            ...(null == r ? void 0 : r.headers) || {}
                        },
                        body: JSON.stringify(t),
                        signal: AbortSignal.timeout(a.timeout)
                    }),
                    o = await l.json();
                if (!l.ok) throw new c(o.message || "HTTP error! status: ".concat(l.status), {
                    status: l.status,
                    code: null == o ? void 0 : o.code
                });
                if (0 !== o.code) throw new c(o.message || "API call failed", {
                    status: l.status,
                    code: o.code
                });
                return o
            }

            function h(e) {
                let t = /^data:(.*?);base64,/.exec(e);
                return null == t ? void 0 : t[1]
            }
            async function g(e) {
                return new Promise(t => {
                    let r = new FileReader;
                    r.onload = () => t(r.result), r.readAsDataURL(e)
                })
            }
            class x {
                static async execute(e) {
                    try {
                        let t = { ...e,
                            client: e.client || function() {
                                var e, t;
                                let r = (null === (e = window.location) || void 0 === e ? void 0 : e.pathname) || "",
                                    i = "google-apps-script" === n() ? "gas" : r.includes("sidebar") ? "addonsidebar" : r.includes("dialog") ? "addondialog" : "web",
                                    a = (null === (t = window.location) || void 0 === t ? void 0 : t.href) || "";
                                return {
                                    platform: i,
                                    hostApp: a.includes("docs") ? "docs" : a.includes("sheets") ? "sheets" : a.includes("slides") ? "slides" : "web"
                                }
                            }()
                        };
                        if (d() && a) try {
                            let e = await m("/api/latex", t, {
                                headers: {
                                    Authorization: "Bearer ".concat(a),
                                    "X-GAS-Request": "true"
                                }
                            });
                            if (!e.data) throw Error("Invalid response format from API");
                            return e.data
                        } catch (e) {
                            if (e instanceof c && (401 === e.status || 403 === e.status)) {
                                o() && console.warn("[ApiAdapter] Bearer token expired (", e.status, "), refreshing via GAS...");
                                let r = await l();
                                if (r) try {
                                    let e = await m("/api/latex", t, {
                                        headers: {
                                            Authorization: "Bearer ".concat(r),
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
                        if (d()) {
                            let e = await u("executeEquationAction", t);
                            if (!e.data) throw Error("Invalid response format from Google Apps Script");
                            return e.data
                        }
                        let r = await m("/api/latex", t);
                        if (!r.data) throw Error("Invalid response format from API");
                        return r.data
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
                                mimeType: h(e)
                            }
                        }
                    });
                    return {
                        latex: t.latex,
                        candidates: t.candidates
                    }
                }
                static async recognizeImage(e) {
                    let t = await g(e),
                        r = await this.execute({
                            action: "recognize",
                            payload: {
                                input: {
                                    image: t,
                                    sourceType: "upload",
                                    mimeType: e.type || h(t)
                                }
                            }
                        });
                    return {
                        latex: r.latex,
                        candidates: r.candidates
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
                static async refineLatex(e, t, r) {
                    var i;
                    let a = await this.execute({
                        action: "modify",
                        payload: {
                            input: {
                                latex: e,
                                instruction: t
                            },
                            options: {
                                instructionTypeHint: r
                            }
                        }
                    });
                    return {
                        latex: a.latex,
                        hasChanges: null !== (i = a.hasChanges) && void 0 !== i ? i : a.latex !== e,
                        candidates: a.candidates
                    }
                }
                static async correctLatex(e) {
                    var t;
                    let r = await this.execute({
                        action: "correct",
                        payload: {
                            input: {
                                latex: e
                            }
                        }
                    });
                    return {
                        latex: r.latex,
                        hasChanges: null !== (t = r.hasChanges) && void 0 !== t ? t : r.latex !== e,
                        candidates: r.candidates
                    }
                }
                static async getUserStatus() {
                    try {
                        var e;
                        if (console.log("\uD83C\uDF10 [API-ADAPTER] Getting user status..."), console.log("\uD83D\uDD0D [API-ADAPTER] Environment check:", {
                                isGAS: d(),
                                environment: n(),
                                url: null === (e = window.location) || void 0 === e ? void 0 : e.href
                            }), d()) {
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
                execute: p,
                recognizeHandwriting: f,
                recognizeImage: b,
                generateLatex: y,
                refineLatex: v,
                correctLatex: w,
                getUserStatus: j
            } = x
        },
        51922: function(e) {
            e.exports = {
                root: "dual-mode-editor_root__OgOAt"
            }
        }
    }
]);