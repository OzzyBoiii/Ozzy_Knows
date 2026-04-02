# 🔤 LaTeX Quick Reference - Lovrin Cornell Edition

## 📖 How to Use This Sheet

1. Type the **trigger** (shown in left column)
2. Press **TAB** (or Space if configured)
3. Snippet expands automatically

---

## 🔤 Greek Alphabet

### Lowercase

| Trigger | Result | Trigger | Result | Trigger | Result |
|---------|--------|---------|--------|---------|--------|
| `alpha` | α | `beta` | β | `gamma` | γ |
| `delta` | δ | `eps` | ε | `zeta` | ζ |
| `eta` | η | `theta` | θ | `iota` | ι |
| `kappa` | κ | `lambda` | λ | `mu` | μ |
| `nu` | ν | `xi` | ξ | `pi` | π |
| `rho` | ρ | `sigma` | σ | `tau` | τ |
| `upsilon` | υ | `phi` | φ | `chi` | χ |
| `psi` | ψ | `omega` | ω | | |

### Uppercase

| Trigger | Result | Trigger | Result | Trigger | Result |
|---------|--------|---------|--------|---------|--------|
| `Gamma` | Γ | `Delta` | Δ | `Theta` | Θ |
| `Lambda` | Λ | `Xi` | Ξ | `Pi` | Π |
| `Sigma` | Σ | `Upsilon` | Υ | `Phi` | Φ |
| `Psi` | Ψ | `Omega` | Ω | | |

### Variants

| Trigger | Result | Description |
|---------|--------|-------------|
| `veps` | ε | Variant epsilon |
| `vtheta` | ϑ | Variant theta |
| `vpi` | ϖ | Variant pi |
| `vrho` | ϱ | Variant rho |
| `vsigma` | ς | Variant sigma (final) |
| `vphi` | φ | Variant phi |

---

## 🔢 Superscripts & Subscripts

| Trigger | Result | Description |
|---------|--------|-------------|
| `sr` | x² | Squared |
| `cb` | x³ | Cubed |
| `rd` | x^{} | General superscript |
| `_` | x_{} | Subscript |
| `sts` | x_text{} | Text subscript |
| `invs` | x⁻¹ | Inverse |
| `conj` | x* | Complex conjugate |
| `dag` | x† | Dagger (Hermitian) |

**Examples:**
- `x sr` + TAB → x²
- `E_sts k` + TAB → E_text{k}
- `A invs` + TAB → A⁻¹

---

## ➗ Fractions & Roots

| Trigger | Result | Description |
|---------|--------|-------------|
| `//` | $$\frac{}{}$$ | Fraction |
| `sq` | √{} | Square root |
| `nrt` | ⁿ√{} | nth root |

**Examples:**
- `x // y` + TAB → $$\frac{x}{y}$$
- `sq 2` + TAB → √{2}
- `nrt 3 8` + TAB → ³√{8}

---

## ➕ Operators & Operations

| Trigger | Result | Description |
|---------|--------|-------------|
| `sum` | Σ | Summation |
| `prod` | Π | Product |
| `lim` | lim_{n→∞} | Limit |
| `+-` | ± | Plus-minus |
| `-+` | ∓ | Minus-plus |
| `ooo` | ∞ | Infinity |
| `...` | ... | Ellipsis |
| `nabl` | ∇ | Nabla/Del |
| `xx` | × | Times |
| `**` | · | Dot product |
| `para` | ∥ | Parallel |

---

## 🔗 Relations

| Trigger | Result | Description |
|---------|--------|-------------|
| `===` | ≡ | Equivalent |
| `!=` | ≠ | Not equal |
| `>=` | ≥ | Greater or equal |
| `<=` | ≤ | Less or equal |
| `>>` | ≫ | Much greater |
| `<<` | ≪ | Much less |
| `simm` | ∼ | Similar |
| `sim=` | ≃ | Similar or equal |
| `prop` | ∝ | Proportional |
| `approx` | ≈ | Approximately |

---

## ➡️ Arrows

| Trigger | Result | Description |
|---------|--------|-------------|
| `->` | → | Right arrow |
| `<->` | ↔ | Left-right arrow |
| `!>` | ↦ | Maps to |
| `=>` | ⇒ | Implies |
| `=<` | ⇐ | Implied by |
| `<=>` | ⇔ | If and only if |

---

## 📐 Set Theory

| Trigger | Result | Description |
|---------|--------|-------------|
| `and` | ∩ | Intersection |
| `orr` | ∪ | Union |
| `inn` | ∈ | Element of |
| `notin` | ∉ | Not element of |
| `\\\` | \ | Set difference |
| `sub=` | ⊆ | Subset or equal |
| `sup=` | ⊇ | Superset or equal |
| `eset` | ∅ | Empty set |
| `set` | {  } | Set braces |
| `exists` | ∃ | There exists |
| `forall` | ∀ | For all |

---

## 🔤 Number Sets (Blackboard Bold)

| Trigger | Result | Description |
|---------|--------|-------------|
| `NN` | ℕ | Natural numbers |
| `ZZ` | ℤ | Integers |
| `QQ` | ℚ | Rational numbers |
| `RR` | ℝ | Real numbers |
| `CC` | ℂ | Complex numbers |
| `PP` | ℙ | Probability |
| `EE` | 𝔼 | Expected value |
| `HH` | ℋ | Hilbert space |
| `LL` | ℒ | Lagrangian |

---

## 📝 Font Styles

| Trigger | Result | Description |
|---------|--------|-------------|
| `bf` | **x** | Bold |
| `rm` | x | Roman |
| `cal` | 𝒳 | Calligraphic |
| `bb` | 𝕏 | Blackboard bold |
| `frak` | 𝔵 | Fraktur |
| `tt` | x | Typewriter |
| `text` | text | Text mode |

---

## 📊 Calculus

### Derivatives

| Trigger | Result | Description |
|---------|--------|-------------|
| `par` | ∂y/∂x | Partial derivative |
| `ddt` | d/dt | Time derivative |
| `ddx` | d/dx | Derivative wrt x |

### Integrals

| Trigger | Result | Description |
|---------|--------|-------------|
| `int` | ∫ dx | Integral |
| `dint` | ∫₀¹ dx | Definite integral |
| `oint` | ∮ | Contour integral |
| `iint` | ∬ | Double integral |
| `iiint` | ∭ | Triple integral |
| `oinf` | ∫₀^∞ dx | 0 to infinity |
| `infi` | ∫₋∞^∞ dx | -∞ to +∞ |

**Examples:**
```
int x^2 dx     → ∫ x² dx
dint 0 1 x dx  → ∫₀¹ x dx
par y x        → ∂y/∂x
```

---

## 📐 Trigonometry

| Trigger | Result | Trigger | Result |
|---------|--------|---------|--------|
| `sin` | sin | `cos` | cos |
| `tan` | tan | `cot` | cot |
| `sec` | sec | `csc` | csc |
| `arcsin` | arcsin | `arccos` | arccos |
| `arctan` | arctan | | |
| `sinh` | sinh | `cosh` | cosh |
| `tanh` | tanh | `coth` | coth |

---

## 📈 Logarithms & Exponentials

| Trigger | Result | Description |
|---------|--------|-------------|
| `ee` | e^{} | Exponential |
| `exp` | exp() | Exp function |
| `ln` | ln | Natural log |
| `log` | log | Logarithm |
| `lg` | lg | Base-2 log |

**Examples:**
- `ee x` → e^x
- `ln x` → ln(x)

---

## 📐 Matrices

| Trigger | Result | Description |
|---------|--------|-------------|
| `pmat` | (  ) | Parentheses matrix |
| `bmat` | [  ] | Bracket matrix |
| `Bmat` | {  } | Brace matrix |
| `vmat` | \|  \| | Determinant |
| `Vmat` | ‖  ‖ | Matrix norm |
| `matrix` | plain | No delimiters |

**Example:**
```
pmat + TAB →
\begin{pmatrix}
  
\end{pmatrix}
```

---

## 🎨 Accents & Decorations

| Trigger | Result | Description |
|---------|--------|-------------|
| `vec` | x⃗ | Vector arrow |
| `bar` | x̄ | Bar |
| `hat` | x̂ | Hat |
| `tilde` | x̃ | Tilde |
| `dot` | ẋ | Dot (derivative) |
| `ddot` | ẍ | Double dot |

---

## 🔢 Environments

| Trigger | Result | Description |
|---------|--------|-------------|
| `cases` | cases{} | Piecewise functions |
| `align` | align{} | Aligned equations |
| `array` | array{} | Array/table |
| `split` | split{} | Split equations |
| `beg` | begin{}…end{} | General environment |

**Example:**
```
cases + TAB →
\begin{cases}
  x^2 & \text{if } x ≥ 0 \\
  -x^2 & \text{if } x < 0
\end{cases}
```

---

## 📏 Brackets & Delimiters

| Trigger | Result | Description |
|---------|--------|-------------|
| `lr(` | ( ) | Auto-size parentheses |
| `lr[` | [ ] | Auto-size brackets |
| `lr{` | { } | Auto-size braces |
| `lr\|` | \| \| | Auto-size bars |
| `lra` | ⟨ ⟩ | Angle brackets |
| `avg` | ⟨ ⟩ | Average/expectation |
| `norm` | \| \| | Norm (single) |
| `Norm` | ‖ ‖ | Norm (double) |
| `ceil` | ⌈ ⌉ | Ceiling |
| `floor` | ⌊ ⌋ | Floor |

---

## ⚛️ Physics & Chemistry

| Trigger | Result | Description |
|---------|--------|-------------|
| `kbt` | k_B T | Boltzmann × temp |
| `hbar` | ℏ | Reduced Planck |
| `bra` | ⟨ \| | Bra |
| `ket` | \| ⟩ | Ket |
| `brk` | ⟨ \| ⟩ | Braket |
| `outer` | \|ψ⟩⟨ψ\| | Outer product |
| `pu` | \pu{} | Physical units |
| `cee` | \ce{} | Chemical equation |
| `isotope` | ^A_Z X | Isotope notation |

---

## ✨ Visual Helpers (Selection Required)

1. **Select text first**
2. **Then type trigger + TAB**

| Trigger | Result | Description |
|---------|--------|-------------|
| `U` | _{} | Underbrace |
| `O` | ^{} | Overbrace |
| `B` | underset{}{} | Underset |
| `C` | cancel{} | Cancel/strikethrough |
| `K` | cancelto{}{} | Cancel to value |
| `S` | √{} | Square root |

**Example:**
1. Type: `x + y + z`
2. Select it
3. Type: `U` + TAB
4. Result: underbrace{x + y + z}_{}

---

## 🎯 Common Formulas - Quick Examples

### Quadratic Formula
```
x = // -b +- sq b sr - 4ac // 2a

Result:
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
```

### Derivative Definition
```
f'(x) = lim // f(x+h) - f(x) // h

Result:
f'(x) = \lim_{h→0} \frac{f(x+h) - f(x)}{h}
```

### Integral
```
int x sr dx = // x cb // 3 + C

Result:
∫ x² dx = \frac{x³}{3} + C
```

### Matrix
```
pmat TAB
a & b \\
c & d

Result:
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
```

---

## 💡 Pro Tips

### Chaining Snippets
You can chain multiple triggers:
```
// x sr + 1 // y cb - 3

Result:
\frac{x^2 + 1}{y^3 - 3}
```

### Speed Typing
Common patterns to memorize:
- Fraction: `//`
- Squared: `sr`
- Subscript: `_`
- Greek: full name (e.g., `alpha`, `beta`)

### When TAB Doesn't Work
Check LaTeX Suite settings:
- Settings → LaTeX Suite
- Make sure "Trigger on TAB" is enabled
- Some snippets need space, some need TAB

---

## 📌 Print This Sheet!

Keep this open in a separate pane while studying:
1. Pin this note (right-click → Pin)
2. Open in new pane (Ctrl+Click on note)
3. Reference while typing LaTeX

---

## 🔍 Quick Search

Use Ctrl+F to find triggers quickly:
- "integral" → find int, dint, oint
- "matrix" → find all matrix types
- "greek" → find all Greek letters

---

*Master these shortcuts and LaTeX will become second nature!*
*Practice makes perfect - start with the basics and gradually add more.*

---

**Most Used (Learn These First):**
1. `//` - fraction
2. `sr` - squared  
3. `_` - subscript
4. Greek letters: alpha, beta, gamma, delta
5. `sum`, `int` - summation, integral
6. `>=`, `<=` - inequalities
7. `RR`, `NN`, `CC` - number sets

**Next Level:**
8. `par` - partial derivative
9. `pmat` - matrices
10. `cases` - piecewise functions
11. `lim` - limits
12. Trig functions: sin, cos, tan

**Advanced:**
13. Physics: bra, ket, hbar
14. Visual helpers: U, O, S
15. Chemistry: cee, pu
