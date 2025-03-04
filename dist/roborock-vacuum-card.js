function t(t, e, o, i) {
    var s, r = arguments.length, n = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        n = Reflect.decorate(t, e, o, i);
    else
        for (var a = t.length - 1; a >= 0; a--)
            (s = t[a]) && (n = (r < 3 ? s(n) : r > 3 ? s(e, o, n) : s(e, o)) || n);
    return r > 3 && n && Object.defineProperty(e, o, n),
    n
}
"function" == typeof SuppressedError && SuppressedError;
const e = globalThis
  , o = e.ShadowRoot && (void 0 === e.ShadyCSS || e.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
  , i = Symbol()
  , s = new WeakMap;
class r {
    constructor(t, e, o) {
        if (this._$cssResult$ = !0,
        o !== i)
            throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t,
        this.t = e
    }
    get styleSheet() {
        let t = this.o;
        const e = this.t;
        if (o && void 0 === t) {
            const o = void 0 !== e && 1 === e.length;
            o && (t = s.get(e)),
            void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText),
            o && s.set(e, t))
        }
        return t
    }
    toString() {
        return this.cssText
    }
}
const n = (t, ...e) => {
    const o = 1 === t.length ? t[0] : e.reduce(( (e, o, i) => e + (t => {
        if (!0 === t._$cssResult$)
            return t.cssText;
        if ("number" == typeof t)
            return t;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
    }
    )(o) + t[i + 1]), t[0]);
    return new r(o,t,i)
}
  , a = o ? t => t : t => t instanceof CSSStyleSheet ? (t => {
    let e = "";
    for (const o of t.cssRules)
        e += o.cssText;
    return (t => new r("string" == typeof t ? t : t + "",void 0,i))(e)
}
)(t) : t
  , {is: c, defineProperty: l, getOwnPropertyDescriptor: d, getOwnPropertyNames: p, getOwnPropertySymbols: h, getPrototypeOf: u} = Object
  , m = globalThis
  , g = m.trustedTypes
  , v = g ? g.emptyScript : ""
  , _ = m.reactiveElementPolyfillSupport
  , f = (t, e) => t
  , y = {
    toAttribute(t, e) {
        switch (e) {
        case Boolean:
            t = t ? v : null;
            break;
        case Object:
        case Array:
            t = null == t ? t : JSON.stringify(t)
        }
        return t
    },
    fromAttribute(t, e) {
        let o = t;
        switch (e) {
        case Boolean:
            o = null !== t;
            break;
        case Number:
            o = null === t ? null : Number(t);
            break;
        case Object:
        case Array:
            try {
                o = JSON.parse(t)
            } catch (t) {
                o = null
            }
        }
        return o
    }
}
  , b = (t, e) => !c(t, e)
  , $ = {
    attribute: !0,
    type: String,
    converter: y,
    reflect: !1,
    hasChanged: b
};
Symbol.metadata ??= Symbol("metadata"),
m.litPropertyMetadata ??= new WeakMap;
class w extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(),
        (this.l ??= []).push(t)
    }
    static get observedAttributes() {
        return this.finalize(),
        this._$Eh && [...this._$Eh.keys()]
    }
    static createProperty(t, e=$) {
        if (e.state && (e.attribute = !1),
        this._$Ei(),
        this.elementProperties.set(t, e),
        !e.noAccessor) {
            const o = Symbol()
              , i = this.getPropertyDescriptor(t, o, e);
            void 0 !== i && l(this.prototype, t, i)
        }
    }
    static getPropertyDescriptor(t, e, o) {
        const {get: i, set: s} = d(this.prototype, t) ?? {
            get() {
                return this[e]
            },
            set(t) {
                this[e] = t
            }
        };
        return {
            get() {
                return i?.call(this)
            },
            set(e) {
                const r = i?.call(this);
                s.call(this, e),
                this.requestUpdate(t, r, o)
            },
            configurable: !0,
            enumerable: !0
        }
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $
    }
    static _$Ei() {
        if (this.hasOwnProperty(f("elementProperties")))
            return;
        const t = u(this);
        t.finalize(),
        void 0 !== t.l && (this.l = [...t.l]),
        this.elementProperties = new Map(t.elementProperties)
    }
    static finalize() {
        if (this.hasOwnProperty(f("finalized")))
            return;
        if (this.finalized = !0,
        this._$Ei(),
        this.hasOwnProperty(f("properties"))) {
            const t = this.properties
              , e = [...p(t), ...h(t)];
            for (const o of e)
                this.createProperty(o, t[o])
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const e = litPropertyMetadata.get(t);
            if (void 0 !== e)
                for (const [t,o] of e)
                    this.elementProperties.set(t, o)
        }
        this._$Eh = new Map;
        for (const [t,e] of this.elementProperties) {
            const o = this._$Eu(t, e);
            void 0 !== o && this._$Eh.set(o, t)
        }
        this.elementStyles = this.finalizeStyles(this.styles)
    }
    static finalizeStyles(t) {
        const e = [];
        if (Array.isArray(t)) {
            const o = new Set(t.flat(1 / 0).reverse());
            for (const t of o)
                e.unshift(a(t))
        } else
            void 0 !== t && e.push(a(t));
        return e
    }
    static _$Eu(t, e) {
        const o = e.attribute;
        return !1 === o ? void 0 : "string" == typeof o ? o : "string" == typeof t ? t.toLowerCase() : void 0
    }
    constructor() {
        super(),
        this._$Ep = void 0,
        this.isUpdatePending = !1,
        this.hasUpdated = !1,
        this._$Em = null,
        this._$Ev()
    }
    _$Ev() {
        this._$ES = new Promise((t => this.enableUpdating = t)),
        this._$AL = new Map,
        this._$E_(),
        this.requestUpdate(),
        this.constructor.l?.forEach((t => t(this)))
    }
    addController(t) {
        (this._$EO ??= new Set).add(t),
        void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.()
    }
    removeController(t) {
        this._$EO?.delete(t)
    }
    _$E_() {
        const t = new Map
          , e = this.constructor.elementProperties;
        for (const o of e.keys())
            this.hasOwnProperty(o) && (t.set(o, this[o]),
            delete this[o]);
        t.size > 0 && (this._$Ep = t)
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return ( (t, i) => {
            if (o)
                t.adoptedStyleSheets = i.map((t => t instanceof CSSStyleSheet ? t : t.styleSheet));
            else
                for (const o of i) {
                    const i = document.createElement("style")
                      , s = e.litNonce;
                    void 0 !== s && i.setAttribute("nonce", s),
                    i.textContent = o.cssText,
                    t.appendChild(i)
                }
        }
        )(t, this.constructor.elementStyles),
        t
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(),
        this.enableUpdating(!0),
        this._$EO?.forEach((t => t.hostConnected?.()))
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t => t.hostDisconnected?.()))
    }
    attributeChangedCallback(t, e, o) {
        this._$AK(t, o)
    }
    _$EC(t, e) {
        const o = this.constructor.elementProperties.get(t)
          , i = this.constructor._$Eu(t, o);
        if (void 0 !== i && !0 === o.reflect) {
            const s = (void 0 !== o.converter?.toAttribute ? o.converter : y).toAttribute(e, o.type);
            this._$Em = t,
            null == s ? this.removeAttribute(i) : this.setAttribute(i, s),
            this._$Em = null
        }
    }
    _$AK(t, e) {
        const o = this.constructor
          , i = o._$Eh.get(t);
        if (void 0 !== i && this._$Em !== i) {
            const t = o.getPropertyOptions(i)
              , s = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : y;
            this._$Em = i,
            this[i] = s.fromAttribute(e, t.type),
            this._$Em = null
        }
    }
    requestUpdate(t, e, o) {
        if (void 0 !== t) {
            if (o ??= this.constructor.getPropertyOptions(t),
            !(o.hasChanged ?? b)(this[t], e))
                return;
            this.P(t, e, o)
        }
        !1 === this.isUpdatePending && (this._$ES = this._$ET())
    }
    P(t, e, o) {
        this._$AL.has(t) || this._$AL.set(t, e),
        !0 === o.reflect && this._$Em !== t && (this._$Ej ??= new Set).add(t)
    }
    async _$ET() {
        this.isUpdatePending = !0;
        try {
            await this._$ES
        } catch (t) {
            Promise.reject(t)
        }
        const t = this.scheduleUpdate();
        return null != t && await t,
        !this.isUpdatePending
    }
    scheduleUpdate() {
        return this.performUpdate()
    }
    performUpdate() {
        if (!this.isUpdatePending)
            return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(),
            this._$Ep) {
                for (const [t,e] of this._$Ep)
                    this[t] = e;
                this._$Ep = void 0
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0)
                for (const [e,o] of t)
                    !0 !== o.wrapped || this._$AL.has(e) || void 0 === this[e] || this.P(e, this[e], o)
        }
        let t = !1;
        const e = this._$AL;
        try {
            t = this.shouldUpdate(e),
            t ? (this.willUpdate(e),
            this._$EO?.forEach((t => t.hostUpdate?.())),
            this.update(e)) : this._$EU()
        } catch (e) {
            throw t = !1,
            this._$EU(),
            e
        }
        t && this._$AE(e)
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t => t.hostUpdated?.())),
        this.hasUpdated || (this.hasUpdated = !0,
        this.firstUpdated(t)),
        this.updated(t)
    }
    _$EU() {
        this._$AL = new Map,
        this.isUpdatePending = !1
    }
    get updateComplete() {
        return this.getUpdateComplete()
    }
    getUpdateComplete() {
        return this._$ES
    }
    shouldUpdate(t) {
        return !0
    }
    update(t) {
        this._$Ej &&= this._$Ej.forEach((t => this._$EC(t, this[t]))),
        this._$EU()
    }
    updated(t) {}
    firstUpdated(t) {}
}
w.elementStyles = [],
w.shadowRootOptions = {
    mode: "open"
},
w[f("elementProperties")] = new Map,
w[f("finalized")] = new Map,
_?.({
    ReactiveElement: w
}),
(m.reactiveElementVersions ??= []).push("2.0.4");
const k = globalThis
  , M = k.trustedTypes
  , x = M ? M.createPolicy("lit-html", {
    createHTML: t => t
}) : void 0
  , A = "$lit$"
  , S = `lit$${(Math.random() + "").slice(9)}$`
  , C = "?" + S
  , z = `<${C}>`
  , E = document
  , P = () => E.createComment("")
  , R = t => null === t || "object" != typeof t && "function" != typeof t
  , j = Array.isArray
  , O = "[ \t\n\f\r]"
  , B = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
  , T = /-->/g
  , U = />/g
  , V = RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g")
  , N = /'/g
  , I = /"/g
  , H = /^(?:script|style|textarea|title)$/i
  , D = (t => (e, ...o) => ({
    _$litType$: t,
    strings: e,
    values: o
}))(1)
  , L = Symbol.for("lit-noChange")
  , W = Symbol.for("lit-nothing")
  , q = new WeakMap
  , Z = E.createTreeWalker(E, 129);
function F(t, e) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
        throw Error("invalid template strings array");
    return void 0 !== x ? x.createHTML(e) : e
}
const K = (t, e) => {
    const o = t.length - 1
      , i = [];
    let s, r = 2 === e ? "<svg>" : "", n = B;
    for (let e = 0; e < o; e++) {
        const o = t[e];
        let a, c, l = -1, d = 0;
        for (; d < o.length && (n.lastIndex = d,
        c = n.exec(o),
        null !== c); )
            d = n.lastIndex,
            n === B ? "!--" === c[1] ? n = T : void 0 !== c[1] ? n = U : void 0 !== c[2] ? (H.test(c[2]) && (s = RegExp("</" + c[2], "g")),
            n = V) : void 0 !== c[3] && (n = V) : n === V ? ">" === c[0] ? (n = s ?? B,
            l = -1) : void 0 === c[1] ? l = -2 : (l = n.lastIndex - c[2].length,
            a = c[1],
            n = void 0 === c[3] ? V : '"' === c[3] ? I : N) : n === I || n === N ? n = V : n === T || n === U ? n = B : (n = V,
            s = void 0);
        const p = n === V && t[e + 1].startsWith("/>") ? " " : "";
        r += n === B ? o + z : l >= 0 ? (i.push(a),
        o.slice(0, l) + A + o.slice(l) + S + p) : o + S + (-2 === l ? e : p)
    }
    return [F(t, r + (t[o] || "<?>") + (2 === e ? "</svg>" : "")), i]
}
;
class Q {
    constructor({strings: t, _$litType$: e}, o) {
        let i;
        this.parts = [];
        let s = 0
          , r = 0;
        const n = t.length - 1
          , a = this.parts
          , [c,l] = K(t, e);
        if (this.el = Q.createElement(c, o),
        Z.currentNode = this.el.content,
        2 === e) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes)
        }
        for (; null !== (i = Z.nextNode()) && a.length < n; ) {
            if (1 === i.nodeType) {
                if (i.hasAttributes())
                    for (const t of i.getAttributeNames())
                        if (t.endsWith(A)) {
                            const e = l[r++]
                              , o = i.getAttribute(t).split(S)
                              , n = /([.?@])?(.*)/.exec(e);
                            a.push({
                                type: 1,
                                index: s,
                                name: n[2],
                                strings: o,
                                ctor: "." === n[1] ? tt : "?" === n[1] ? et : "@" === n[1] ? ot : Y
                            }),
                            i.removeAttribute(t)
                        } else
                            t.startsWith(S) && (a.push({
                                type: 6,
                                index: s
                            }),
                            i.removeAttribute(t));
                if (H.test(i.tagName)) {
                    const t = i.textContent.split(S)
                      , e = t.length - 1;
                    if (e > 0) {
                        i.textContent = M ? M.emptyScript : "";
                        for (let o = 0; o < e; o++)
                            i.append(t[o], P()),
                            Z.nextNode(),
                            a.push({
                                type: 2,
                                index: ++s
                            });
                        i.append(t[e], P())
                    }
                }
            } else if (8 === i.nodeType)
                if (i.data === C)
                    a.push({
                        type: 2,
                        index: s
                    });
                else {
                    let t = -1;
                    for (; -1 !== (t = i.data.indexOf(S, t + 1)); )
                        a.push({
                            type: 7,
                            index: s
                        }),
                        t += S.length - 1
                }
            s++
        }
    }
    static createElement(t, e) {
        const o = E.createElement("template");
        return o.innerHTML = t,
        o
    }
}
function J(t, e, o=t, i) {
    if (e === L)
        return e;
    let s = void 0 !== i ? o._$Co?.[i] : o._$Cl;
    const r = R(e) ? void 0 : e._$litDirective$;
    return s?.constructor !== r && (s?._$AO?.(!1),
    void 0 === r ? s = void 0 : (s = new r(t),
    s._$AT(t, o, i)),
    void 0 !== i ? (o._$Co ??= [])[i] = s : o._$Cl = s),
    void 0 !== s && (e = J(t, s._$AS(t, e.values), s, i)),
    e
}
class G {
    constructor(t, e) {
        this._$AV = [],
        this._$AN = void 0,
        this._$AD = t,
        this._$AM = e
    }
    get parentNode() {
        return this._$AM.parentNode
    }
    get _$AU() {
        return this._$AM._$AU
    }
    u(t) {
        const {el: {content: e}, parts: o} = this._$AD
          , i = (t?.creationScope ?? E).importNode(e, !0);
        Z.currentNode = i;
        let s = Z.nextNode()
          , r = 0
          , n = 0
          , a = o[0];
        for (; void 0 !== a; ) {
            if (r === a.index) {
                let e;
                2 === a.type ? e = new X(s,s.nextSibling,this,t) : 1 === a.type ? e = new a.ctor(s,a.name,a.strings,this,t) : 6 === a.type && (e = new it(s,this,t)),
                this._$AV.push(e),
                a = o[++n]
            }
            r !== a?.index && (s = Z.nextNode(),
            r++)
        }
        return Z.currentNode = E,
        i
    }
    p(t) {
        let e = 0;
        for (const o of this._$AV)
            void 0 !== o && (void 0 !== o.strings ? (o._$AI(t, o, e),
            e += o.strings.length - 2) : o._$AI(t[e])),
            e++
    }
}
class X {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv
    }
    constructor(t, e, o, i) {
        this.type = 2,
        this._$AH = W,
        this._$AN = void 0,
        this._$AA = t,
        this._$AB = e,
        this._$AM = o,
        this.options = i,
        this._$Cv = i?.isConnected ?? !0
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const e = this._$AM;
        return void 0 !== e && 11 === t?.nodeType && (t = e.parentNode),
        t
    }
    get startNode() {
        return this._$AA
    }
    get endNode() {
        return this._$AB
    }
    _$AI(t, e=this) {
        t = J(this, t, e),
        R(t) ? t === W || null == t || "" === t ? (this._$AH !== W && this._$AR(),
        this._$AH = W) : t !== this._$AH && t !== L && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : (t => j(t) || "function" == typeof t?.[Symbol.iterator])(t) ? this.k(t) : this._(t)
    }
    S(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB)
    }
    T(t) {
        this._$AH !== t && (this._$AR(),
        this._$AH = this.S(t))
    }
    _(t) {
        this._$AH !== W && R(this._$AH) ? this._$AA.nextSibling.data = t : this.T(E.createTextNode(t)),
        this._$AH = t
    }
    $(t) {
        const {values: e, _$litType$: o} = t
          , i = "number" == typeof o ? this._$AC(t) : (void 0 === o.el && (o.el = Q.createElement(F(o.h, o.h[0]), this.options)),
        o);
        if (this._$AH?._$AD === i)
            this._$AH.p(e);
        else {
            const t = new G(i,this)
              , o = t.u(this.options);
            t.p(e),
            this.T(o),
            this._$AH = t
        }
    }
    _$AC(t) {
        let e = q.get(t.strings);
        return void 0 === e && q.set(t.strings, e = new Q(t)),
        e
    }
    k(t) {
        j(this._$AH) || (this._$AH = [],
        this._$AR());
        const e = this._$AH;
        let o, i = 0;
        for (const s of t)
            i === e.length ? e.push(o = new X(this.S(P()),this.S(P()),this,this.options)) : o = e[i],
            o._$AI(s),
            i++;
        i < e.length && (this._$AR(o && o._$AB.nextSibling, i),
        e.length = i)
    }
    _$AR(t=this._$AA.nextSibling, e) {
        for (this._$AP?.(!1, !0, e); t && t !== this._$AB; ) {
            const e = t.nextSibling;
            t.remove(),
            t = e
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t,
        this._$AP?.(t))
    }
}
class Y {
    get tagName() {
        return this.element.tagName
    }
    get _$AU() {
        return this._$AM._$AU
    }
    constructor(t, e, o, i, s) {
        this.type = 1,
        this._$AH = W,
        this._$AN = void 0,
        this.element = t,
        this.name = e,
        this._$AM = i,
        this.options = s,
        o.length > 2 || "" !== o[0] || "" !== o[1] ? (this._$AH = Array(o.length - 1).fill(new String),
        this.strings = o) : this._$AH = W
    }
    _$AI(t, e=this, o, i) {
        const s = this.strings;
        let r = !1;
        if (void 0 === s)
            t = J(this, t, e, 0),
            r = !R(t) || t !== this._$AH && t !== L,
            r && (this._$AH = t);
        else {
            const i = t;
            let n, a;
            for (t = s[0],
            n = 0; n < s.length - 1; n++)
                a = J(this, i[o + n], e, n),
                a === L && (a = this._$AH[n]),
                r ||= !R(a) || a !== this._$AH[n],
                a === W ? t = W : t !== W && (t += (a ?? "") + s[n + 1]),
                this._$AH[n] = a
        }
        r && !i && this.j(t)
    }
    j(t) {
        t === W ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "")
    }
}
class tt extends Y {
    constructor() {
        super(...arguments),
        this.type = 3
    }
    j(t) {
        this.element[this.name] = t === W ? void 0 : t
    }
}
class et extends Y {
    constructor() {
        super(...arguments),
        this.type = 4
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== W)
    }
}
class ot extends Y {
    constructor(t, e, o, i, s) {
        super(t, e, o, i, s),
        this.type = 5
    }
    _$AI(t, e=this) {
        if ((t = J(this, t, e, 0) ?? W) === L)
            return;
        const o = this._$AH
          , i = t === W && o !== W || t.capture !== o.capture || t.once !== o.once || t.passive !== o.passive
          , s = t !== W && (o === W || i);
        i && this.element.removeEventListener(this.name, this, o),
        s && this.element.addEventListener(this.name, this, t),
        this._$AH = t
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t)
    }
}
class it {
    constructor(t, e, o) {
        this.element = t,
        this.type = 6,
        this._$AN = void 0,
        this._$AM = e,
        this.options = o
    }
    get _$AU() {
        return this._$AM._$AU
    }
    _$AI(t) {
        J(this, t)
    }
}
const st = k.litHtmlPolyfillSupport;
st?.(Q, X),
(k.litHtmlVersions ??= []).push("3.1.2");
class rt extends w {
    constructor() {
        super(...arguments),
        this.renderOptions = {
            host: this
        },
        this._$Do = void 0
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild,
        t
    }
    update(t) {
        const e = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
        super.update(t),
        this._$Do = ( (t, e, o) => {
            const i = o?.renderBefore ?? e;
            let s = i._$litPart$;
            if (void 0 === s) {
                const t = o?.renderBefore ?? null;
                i._$litPart$ = s = new X(e.insertBefore(P(), t),t,void 0,o ?? {})
            }
            return s._$AI(t),
            s
        }
        )(e, this.renderRoot, this.renderOptions)
    }
    connectedCallback() {
        super.connectedCallback(),
        this._$Do?.setConnected(!0)
    }
    disconnectedCallback() {
        super.disconnectedCallback(),
        this._$Do?.setConnected(!1)
    }
    render() {
        return L
    }
}
rt._$litElement$ = !0,
rt.finalized = !0,
globalThis.litElementHydrateSupport?.({
    LitElement: rt
});
const nt = globalThis.litElementPolyfillSupport;
nt?.({
    LitElement: rt
}),
(globalThis.litElementVersions ??= []).push("4.0.4");
const at = t => (e, o) => {
    void 0 !== o ? o.addInitializer(( () => {
        customElements.define(t, e)
    }
    )) : customElements.define(t, e)
}
  , ct = {
    attribute: !0,
    type: String,
    converter: y,
    reflect: !1,
    hasChanged: b
}
  , lt = (t=ct, e, o) => {
    const {kind: i, metadata: s} = o;
    let r = globalThis.litPropertyMetadata.get(s);
    if (void 0 === r && globalThis.litPropertyMetadata.set(s, r = new Map),
    r.set(o.name, t),
    "accessor" === i) {
        const {name: i} = o;
        return {
            set(o) {
                const s = e.get.call(this);
                e.set.call(this, o),
                this.requestUpdate(i, s, t)
            },
            init(e) {
                return void 0 !== e && this.P(i, void 0, t),
                e
            }
        }
    }
    if ("setter" === i) {
        const {name: i} = o;
        return function(o) {
            const s = this[i];
            e.call(this, o),
            this.requestUpdate(i, s, t)
        }
    }
    throw Error("Unsupported decorator location: " + i)
}
;
function dt(t) {
    return (e, o) => "object" == typeof o ? lt(t, e, o) : ( (t, e, o) => {
        const i = e.hasOwnProperty(o);
        return e.constructor.createProperty(o, i ? {
            ...t,
            wrapped: !0
        } : t),
        i ? Object.getOwnPropertyDescriptor(e, o) : void 0
    }
    )(t, e, o)
}
function pt(t) {
    return dt({
        ...t,
        state: !0,
        attribute: !1
    })
}
var ht, ut;
!function(t) {
    t.language = "language",
    t.system = "system",
    t.comma_decimal = "comma_decimal",
    t.decimal_comma = "decimal_comma",
    t.space_comma = "space_comma",
    t.none = "none"
}(ht || (ht = {})),
function(t) {
    t.language = "language",
    t.system = "system",
    t.am_pm = "12",
    t.twenty_four = "24"
}(ut || (ut = {}));
function mt(t, e) {
    void 0 === e && (e = {});
    var o = e.insertAt;
    if (t && "undefined" != typeof document) {
        var i = document.head || document.getElementsByTagName("head")[0]
          , s = document.createElement("style");
        s.type = "text/css",
        "top" === o && i.firstChild ? i.insertBefore(s, i.firstChild) : i.appendChild(s),
        s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(document.createTextNode(t))
    }
}
var gt = n`:host{--vc-background:var(
    --ha-card-background,
    var(--card-background-color, white)
  );--vc-spacing:10px;--vc-divider-color:var(--entities-divider-color, var(--divider-color));--vc-primary-text-color:var(--primary-text-color);--vc-secondary-text-color:var(--secondary-text-color);--vc-primary-select-background:color-mix(in srgb, var(--primary-color) 15%, var(--vc-background));--primary-color:#89B3F8;--light-theme-background:#fff;--dark-theme-background:#1d1d1d}@keyframes pulse{from{opacity:1}50%{opacity:.5}to{opacity:1}}ha-card{background-color:var(--vc-background)}ha-card .spacer{flex:1}ha-card .slow-pulse{animation:pulse 4s infinite ease-in-out}ha-card .header{display:flex;padding:var(--vc-spacing)}ha-card .header .tip{margin-right:var(--vc-spacing);cursor:pointer}ha-card .header .tip:last-child{margin-right:0}ha-card .header .modes{display:flex;margin:0 auto;flex-direction:row;justify-content:space-evenly}ha-card .errors{color:var(--error-color);text-align:center}ha-card .state{padding:var(--vc-spacing);color:var(--vc-secondary-text-color);text-align:center}ha-card .stats{border-top:1px solid var(--vc-divider-color);display:flex;flex-direction:row;justify-content:space-evenly;color:var(--vc-secondary-text-color)}ha-card .stats .stats-value{color:var(--vc-primary-text-color)}ha-card .stats-block{cursor:pointer;padding:var(--vc-spacing) 0;text-align:center;border-right:1px solid var(--vc-divider-color);flex-grow:1}ha-card .stats-block:last-of-type{border-right:0}ha-card .stats-value{font-size:20px;color:var(--vc-primary-text-color)}ha-card .actions{display:flex;border-top:1px solid var(--vc-divider-color)}ha-card .actions paper-button{color:var(--vc-toolbar-text-color);display:flex;align-items:center;margin-right:10px;padding:15px 10px;cursor:pointer}ha-card .actions paper-button ha-icon{margin-right:5px}`;
mt(gt);
var vt = {
    cleaning: "Cleaning",
    docked: "Docked",
    error: "Error",
    idle: "Idle",
    offline: "Offline",
    paused: "Paused",
    returning: "Returning",
    unavailable: "Unavailable"
}
  , _t = {
    charger_disconnected: "Charger disconnected",
    charging: "Charging",
    cleaning: "Cleaning",
    emptying_the_bin: "Emptying the bin",
    error: "Error",
    going_to_wash_the_mop: "Going to wash the mop",
    idle: "Idle",
    paused: "paused",
    returning_home: "Returning home",
    segment_cleaning: "Segment cleaning",
    unavailable: "Unavailable",
    updating: "Updating",
    washing_the_mop: "Washing the mop",
    zoned_cleaning: "Zoned cleaning"
}
  , ft = {
    "vac&mop": "Vac & Mop",
    mop: "Mop",
    vac: "Vac"
}
  , yt = {
    off: "Off",
    quiet: "Quiet",
    balanced: "Balanced",
    turbo: "Turbo",
    max: "Max",
    max_plus: "Max+"
}
  , bt = {
    off: "Off",
    low: "Mild",
    medium: "Moderate",
    high: "Intense"
}
  , $t = {
    fast: "Fast",
    standard: "Standard",
    deep: "Deep",
    deep_plus: "Deep+"
}
  , wt = {
    invalid_config: "Invalid configuration",
    missing_entity: "Specifying entity is required!"
}
  , kt = {
    battery_error: "Battery error",
    bumper_stuck: "Bumper stuck",
    cannot_cross_carpet: "Cannot cross carpet",
    charging_error: "Charging error",
    cliff_sensor_error: "Cliff sensor error",
    dock_locator_error: "Dock locator error",
    fan_error: "Fan error",
    filter_blocked: "Filter blocked",
    internal_error: "Internal error",
    invisible_wall_detected: "Invisible wall detected",
    lidar_blocked: "Lidar blocked",
    low_battery: "Low battery",
    main_brush_jammed: "Main brush jammed",
    no_dustbin: "No dustbin",
    nogo_zone_detected: "Nogo zone detected",
    return_to_dock_fail: "Return to dock fail",
    robot_on_carpet: "Robot on carpet",
    robot_tilted: "Robot tilted",
    robot_trapped: "Robot trapped",
    side_brush_error: "Side brush error",
    side_brush_jammed: "Side brush jammed",
    vertical_bumper_pressed: "Vertical bumper pressed",
    vibrarise_jammed: "Vibrarise jammed",
    wall_sensor_dirty: "Wall sensor dirty",
    wheels_jammed: "Wheels jammed",
    wheels_suspended: "Wheels suspended"
}
  , Mt = {
    cleaning_tank_full_or_blocked: "Cleaning tank full or blocked",
    dirty_tank_latch_open: "Dirty tank latch open",
    duct_blockage: "Duct blockage",
    no_dustbin: "No dustbin",
    waste_water_tank_full: "Waste water tank full",
    water_empty: "Water empty"
}
  , xt = {
    custom_cleaning: "Custom cleaning",
    doc_error: "Doc error",
    mop_mode: "Scrub Intensity & Water Flow",
    route_mode: "Route",
    suction_mode: "Suction Power",
    vacuum_error: "Vacuum error",
    start: "Start",
    pause: "Pause",
    resume: "Resume",
    return_to_base: "Return to base",
    locate: "Locate",
    stop: "Stop"
}
  , At = {
    status: vt,
    reach_status: _t,
    mode: ft,
    suction_mode: yt,
    mop_mode: bt,
    route_mode: $t,
    error: wt,
    vacuum_error: kt,
    doc_error: Mt,
    common: xt
}
  , St = {
    cleaning: "Sprzątanie",
    docked: "Zadokowany",
    error: "Błąd",
    idle: "Bezczynny",
    offline: "Offline",
    paused: "Wstrzymany",
    returning: "Powracanie",
    unavailable: "Niedostępny"
}
  , Ct = {
    charger_disconnected: "Ładowarka odłączoma",
    charging: "Ładowanie",
    cleaning: "Sprzątanie",
    emptying_the_bin: "Opróżnianie pojemnika na zanieczyszczenia",
    error: "Błąd",
    going_to_wash_the_mop: "Przejście do mycia mopa",
    idle: "Bezczynny",
    paused: "Wstrzymany",
    returning_home: "Powrót do stacji",
    segment_cleaning: "Sprzątanie segmentu",
    unavailable: "Niedostępny",
    updating: "Aktualizowanie",
    washing_the_mop: "Mycie mopa",
    zoned_cleaning: "Strefowe sprzątanie"
}
  , zt = {
    "vac&mop": "Odk. i Mop.",
    mop: "Mopuj",
    vac: "Odkurz"
}
  , Et = {
    off: "Off",
    quiet: "Cichy",
    balanced: "Zrównoważony",
    turbo: "Turbo",
    max: "Max",
    max_plus: "Max+"
}
  , Pt = {
    off: "Off",
    low: "Niski",
    Medium: "Średni",
    high: "Wysoki"
}
  , Rt = {
    fast: "Szybko",
    standard: "Standard",
    deep: "Intensywny",
    deep_plus: "Intensywny+"
}
  , jt = {
    invalid_config: "Nieprawidłowa konfiguracja",
    missing_entity: "Specifying entity is required!"
}
  , Ot = {
    battery_error: "Błąd baterii",
    bumper_stuck: "Zderzak zablokowany",
    cannot_cross_carpet: "Nie można przekroczyć dywanu",
    charging_error: "Błąd ładowania",
    cliff_sensor_error: "Błąd czujnika spadku",
    dock_locator_error: "Błąd lokalizatora stacji",
    fan_error: "Błąd turbiny",
    filter_blocked: "Filtr zablokowany",
    internal_error: "Błąd wewnętrzny",
    invisible_wall_detected: "Niewidzialna ściana wykryta",
    lidar_blocked: "Lidar zablokowany",
    low_battery: "Niski poziom baterii",
    main_brush_jammed: "Zacięta szczotka główna",
    no_dustbin: "Brak pojemnika na zanieczyszczenia",
    nogo_zone_detected: "Wykryto strefę zakazu ruchu",
    return_to_dock_fail: "Błąd powrotu do stacji",
    robot_on_carpet: "Robot na dywanie",
    robot_tilted: "Robot przechylony",
    robot_trapped: "Robot zablokowany",
    side_brush_error: "Błąd bocznej szczotki",
    side_brush_jammed: "Boczna szczotka zablokowana",
    vertical_bumper_pressed: "Wciśnięty zderzak pionowy",
    vibrarise_jammed: "Vibrarise zablokowany",
    wall_sensor_dirty: "Zabrudzony czujnik ścienny",
    wheels_jammed: "Zablokowane koła",
    wheels_suspended: "Koła w powietrzu"
}
  , Bt = {
    cleaning_tank_full_or_blocked: "Zbiornik czystej wody pełny lub zablokowany",
    dirty_tank_latch_open: "Zatrzask zbiornika zanieczyszczeń otwarty",
    duct_blockage: "Zablokowanie kanału",
    no_dustbin: "Brak worka na zanieczyszczenia",
    waste_water_tank_full: "Zbiornik z brudną wodą pełen",
    water_empty: "Zbiornik czystej wody pusty"
}
  , Tt = {
    custom_cleaning: "Spersonalizowane czyszczenie",
    doc_error: "Błąd stacji",
    mop_mode: "Stan wody",
    route_mode: "Trasa",
    suction_mode: "Tryb sprzątania",
    vacuum_error: "Błąd odkurzania",
    start: "Start",
    pause: "Wstrzymaj",
    resume: "Wznów",
    return_to_base: "Powróć do stacji",
    locate: "Zlokalizuj",
    stop: "Zatrzymaj"
}
  , Ut = {
    status: St,
    reach_status: Ct,
    mode: zt,
    suction_mode: Et,
    mop_mode: Pt,
    route_mode: Rt,
    error: jt,
    vacuum_error: Ot,
    doc_error: Bt,
    common: Tt
};
const Vt = {
    en: Object.freeze({
        __proto__: null,
        status: vt,
        reach_status: _t,
        mode: ft,
        suction_mode: yt,
        mop_mode: bt,
        route_mode: $t,
        error: wt,
        vacuum_error: kt,
        doc_error: Mt,
        common: xt,
        default: At
    }),
    pl: Object.freeze({
        __proto__: null,
        status: St,
        reach_status: Ct,
        mode: zt,
        suction_mode: Et,
        mop_mode: Pt,
        route_mode: Rt,
        error: jt,
        vacuum_error: Ot,
        doc_error: Bt,
        common: Tt,
        default: Ut
    })
}
  , Nt = "en";
function It(t, e, o) {
    var i;
    const [s,r] = t.toLowerCase().split(".");
    let n = null;
    try {
        n = JSON.parse(null !== (i = localStorage.getItem("selectedLanguage")) && void 0 !== i ? i : "")
    } catch (t) {
        n = localStorage.getItem("selectedLanguage")
    }
    const a = (n || navigator.language.split("-")[0] || Nt).replace(/['"]+/g, "").replace("-", "_");
    let c;
    try {
        c = Vt[a][s][r]
    } catch (t) {
        c = Vt[Nt][s][r]
    }
    if (void 0 === c && (c = r),
    void 0 !== c)
        return e && o && (c = null == c ? void 0 : c.replace(e, o)),
        c
}
var Ht, Dt, Lt, Wt;
!function(t) {
    t.VacAndMop = "vac&mop",
    t.Mop = "mop",
    t.Vac = "vac"
}(Ht || (Ht = {})),
function(t) {
    t.Off = "off",
    t.Quiet = "quiet",
    t.Balanced = "balanced",
    t.Turbo = "turbo",
    t.Max = "max",
    t.MaxPlus = "max_plus"
}(Dt || (Dt = {})),
function(t) {
    t.Off = "off",
    t.Low = "low",
    t.Medium = "medium",
    t.High = "high"
}(Lt || (Lt = {})),
function(t) {
    t.Fast = "fast",
    t.Standard = "standard",
    t.Deep = "deep",
    t.DeepPlus = "deep_plus"
}(Wt || (Wt = {}));
class qt {
    get name() {
        return this.entity_id.replace("vacuum.", "")
    }
    static isSupportedSuctionMode(t, e) {
        switch (e) {
        case Ht.VacAndMop:
            return [Dt.Quiet, Dt.Balanced, Dt.Turbo, Dt.Max].includes(t);
        case Ht.Vac:
            return [Dt.Quiet, Dt.Balanced, Dt.Turbo, Dt.Max, Dt.MaxPlus].includes(t);
        case Ht.Mop:
            return t == Dt.Off
        }
    }
    static isSupportedMopMode(t, e) {
        switch (e) {
        case Ht.VacAndMop:
        case Ht.Mop:
            return [Lt.Low, Lt.Medium, Lt.High].includes(t);
        case Ht.Vac:
            return t == Lt.Off
        }
    }
    static isSupportedRouteMode(t, e) {
        switch (e) {
        case Ht.VacAndMop:
        case Ht.Vac:
            return [Wt.Fast, Wt.Standard].includes(t);
        case Ht.Mop:
            return [Wt.Fast, Wt.Standard, Wt.Deep, Wt.DeepPlus].includes(t)
        }
    }
    constructor() {}
    setHass(t) {
        this.hass = t
    }
    setEntity(t) {
        this.entity_id = t
    }
    getSuctionMode() {
        return this.getAttributeValue(this.hass.states[this.entity_id], "fan_speed")
    }
    getMopMode() {
        return this.state(`select.${this.name}_mop_intensity`)
    }
    getRouteMode() {
        return this.state(`select.${this.name}_mop_mode`)
    }
    callServiceAsync(t) {
        return this.hass.callService("vacuum", t, {
            entity_id: this.entity_id
        })
    }
    startSegmentsCleaningAsync(t, e) {
        return this.hass.callService("vacuum", "send_command", {
            entity_id: this.entity_id,
            command: "app_segment_clean",
            params: [{
                segments: t,
                repeat: e
            }]
        })
    }
    setSuctionModeAsync(t) {
        return this.hass.callService("vacuum", "set_fan_speed", {
            entity_id: this.entity_id,
            fan_speed: t
        })
    }
    setMopModeAsync(t) {
        return this.hass.callService("select", "select_option", {
            entity_id: `select.${this.name}_mop_intensity`,
            option: t
        })
    }
    setRouteModeAsync(t) {
        return this.hass.callService("select", "select_option", {
            entity_id: `select.${this.name}_mop_mode`,
            option: t
        })
    }
    state(t) {
        return this.hass.states[t].state
    }
    getAttributeValue(t, e) {
        return t.attributes[e]
    }
}
function Zt(t, e, o) {
    const i = {
        quiet: D`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${e}" height="${e}" viewBox="0 0 11.112 11.112"><path fill="none" stroke="${o}" stroke-width=".529" d="M5.795.8a4.736 4.736 0 1 0 0 9.472 4.736 4.736 0 0 0 4.352-2.874A4.2 4.2 0 0 1 5.61 3.212a4.2 4.2 0 0 1 .742-2.38C6.16.81 5.961.806 5.795.8z"/></svg>`,
        balanced: D`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${e}" height="${e}" viewBox="0 0 11.112 11.113"><path d="M55.986 146.233c1.059-.033 3.044.908 3.017 2.947-.024 1.88-1.601 3.05-2.858 3.1" style="fill:none;fill-opacity:1;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:2.5;stroke-dasharray:none;stroke-opacity:1" transform="translate(-49.835 -142.332)"/><path d="M56.6 148.146c-.501.933-2.309 2.181-4.061 1.139-1.616-.961-1.842-2.913-1.256-4.026" style="fill:none;fill-opacity:1;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:2.5;stroke-dasharray:none;stroke-opacity:1" transform="translate(-49.835 -142.332)"/><path d="M54.637 147.601c-.558-.9-.736-3.09 1.043-4.086 1.64-.918 3.443-.138 4.115.925" style="fill:none;fill-opacity:1;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:2.5;stroke-dasharray:none;stroke-opacity:1" transform="translate(-49.835 -142.332)"/></svg>`,
        turbo: D`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${e}" height="${e}" viewBox="0 0 11.112 11.113"><path d="M104.403 145.24c.567-.459 1.067-.907 2.232-.951 1.249-.075 3.1.66 3.027 2.745M107.79 147.041c.459.567.907 1.068.951 2.233.075 1.248-.66 3.1-2.745 3.026M105.768 150.438c-.567.458-1.067.906-2.232.95-1.249.075-3.1-.66-3.026-2.744M102.421 148.614c-.458-.567-.906-1.067-.95-2.232-.075-1.249.66-3.1 2.744-3.026" style="fill:none;fill-opacity:1;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:2.5;stroke-dasharray:none;stroke-opacity:1" transform="translate(-99.576 -142.332)"/></svg>`,
        max: D`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${e}" height="${e}" viewBox="0 0 11.112 11.113"><path d="M153.113 145.3s.695-2.03 2.828-2.125c.876-.039 1.43.29 1.43.29M156.884 144.916s2.14.147 2.784 2.182c.265.836.09 1.456.09 1.456M158.276 148.682s.413 2.106-1.386 3.254c-.74.472-1.384.464-1.384.464M154.977 151.075s-1.927.944-3.502-.497c-.647-.592-.807-1.216-.807-1.216M152.18 148.833s-1.615-1.412-.896-3.422c.295-.825.809-1.214.809-1.214" style="fill:none;fill-opacity:1;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:2.5;stroke-dasharray:none;stroke-opacity:1" transform="translate(-149.743 -142.332)"/></svg>`,
        max_plus: D`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${e}" height="${e}" viewBox="0 0 11.112 11.113"><g transform="translate(-199.626 -142.332)"><path d="M202.912 151.038c.006.58.989 1.032 2.208 1.032 1.22 0 2.208-.44 2.208-1.032M201.616 148.172a.615.615 0 0 0-.104.328c0 .769 1.615 1.392 3.608 1.392s3.608-.623 3.608-1.392a.62.62 0 0 0-.102-.328" style="fill:none;fill-opacity:1;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:2.5;stroke-dasharray:none;stroke-opacity:1"/><ellipse cx="205.12" cy="145.325" rx="4.701" ry="1.9" style="fill:none;fill-opacity:1;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:2.5;stroke-dasharray:none;stroke-opacity:1"/><path d="M204.964 144.828c1.462-.03 3.075.222 3.087 1.029.01.655-.735 1.052-1.308 1.25" style="fill:none;fill-opacity:1;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:2.5;stroke-dasharray:none;stroke-opacity:1"/></g></svg>`
    };
    return i[t] ? i[t] : W
}
function Ft(t, e, o) {
    const i = {
        low: D`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${e}" height="${e}" viewBox="0 0 11.113 11.113"><path d="M-110.765 136.054a3.324 3.324 0 0 1-6.647 0c0-1.835 1.704-3.847 3.323-4.712 1.659.786 3.324 2.877 3.324 4.712z" style="fill:none;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5" transform="translate(119.628 -130.73)"/><path d="M-117.329 136.799s.713.779 1.977.779c1.263 0 2.342-.817 2.679-.893.074-.033 1.859-.06 1.859-.06v0M-119.023 134.819s-.152.953-.14 1.659c.012.744.163 1.405.373 1.919M-109.154 134.819s.152.953.14 1.659a5.365 5.365 0 0 1-.374 1.919" style="fill:none;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5" transform="translate(119.628 -130.73)"/></svg>`,
        medium: D`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${e}" height="${e}" viewBox="0 0 11.113 11.113"><path d="M-137.966 136.055a3.324 3.324 0 0 1-6.647 0c0-1.836 1.705-3.847 3.323-4.713 1.659.787 3.324 2.877 3.324 4.713z" style="fill:none;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5" transform="translate(146.896 -130.73)"/><path d="M-144.547 135.836s.713.78 1.976.78c1.264 0 2.343-.818 2.68-.894.074-.033 1.859-.059 1.859-.059v0M-146.294 134.813s-.152.954-.14 1.66c.012.743.164 1.404.374 1.918M-136.424 134.813s.152.954.14 1.66a5.365 5.365 0 0 1-.374 1.918M-143.17 140.934s.947.258 1.859.258 1.93-.363 1.93-.363" style="fill:none;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5" transform="translate(146.896 -130.73)"/></svg>`,
        high: D`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${e}" height="${e}" viewBox="0 0 11.113 11.113"><path d="M55.792 136.055a3.324 3.324 0 0 1-6.648 0c0-1.836 1.705-3.847 3.324-4.713 1.659.787 3.324 2.877 3.324 4.713z" style="fill:none;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5" transform="translate(-46.818 -130.73)"/><path d="M49.641 134.22s.349.56 1.612.56c1.264 0 2.342-.818 2.68-.893.074-.033 1.165-.06 1.165-.06M48.117 132.983c-.468.854-.69 1.52-.819 2.432M47.415 137.602c.234 1.356 1.079 2.163 1.465 2.584" style="fill:none;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5" transform="translate(-46.818 -130.73)"/><path d="M48.117 132.983c-.468.854-.69 1.52-.819 2.432M47.415 137.602c.234 1.356 1.079 2.163 1.465 2.584" style="fill:none;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5" transform="matrix(-1 0 0 1 57.873 -130.73)"/></svg>`
    };
    return i[t] ? i[t] : W
}
function Kt(t, e, o) {
    const i = {
        fast: D`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${e}" height="${e}" viewBox="0 0 11.113 11.113"><g transform="translate(-6.01 -117.589)"><rect width="8.996" height="9.525" x="7.069" y="118.383" ry="1.587" style="fill:none;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5"/><path d="M13.495 126.219v-1.637c0-.425-.651-1.417-1.929-1.427v0c-1.278-.01-1.93-1.001-1.93-1.426v-1.637" style="fill:none;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5"/></g></svg>`,
        standard: D`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${e}" height="${e}" viewBox="0 0 11.113 11.113"><g transform="translate(-68.49 -117.589)"><rect width="8.996" height="9.525" x="69.548" y="118.383" ry="1.587" style="fill:none;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5"/><path d="M76.375 125.905v-4.437c0-.687-.52-1.24-1.165-1.24-.646 0-1.166.553-1.166 1.24v3.373c0 .687-.52 1.24-1.166 1.24-.646 0-1.166-.553-1.166-1.24v-4.437" style="fill:none;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5"/></g></svg>`,
        deep: D`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${e}" height="${e}" viewBox="0 0 11.113 11.113"><g transform="translate(-130.888 -117.589)"><rect width="8.996" height="9.525" x="131.946" y="118.383" ry="1.587" style="fill:none;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5"/><path d="M133.972 125.852v-4.641c0-.581.369-1.05.827-1.05.459 0 .828.469.828 1.05v3.883c0 .581.402 1.05.86 1.05.459 0 .861-.469.861-1.05v-3.841c0-.582.37-1.05.828-1.05.458 0 .827.468.827 1.05v4.641" style="fill:none;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5"/></g></svg>`,
        deep_plus: D`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${e}" height="${e}" viewBox="0 0 11.113 11.113"><g transform="translate(-9.236 -117.598)"><rect width="8.996" height="9.525" x="10.294" y="118.392" ry="1.587" style="fill:none;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5"/><path d="M12.034 120.389V125.39c0 .421.3.76.673.76.372 0 .673-.339.673-.76V120.918c0-.421.322-.76.722-.76.4 0 .722.339.722.76V125.39c0 .421.3.76.673.76.372 0 .672-.339.672-.76V120.918c0-.421.3-.76.673-.76.373 0 .673.339.673.76V125.92" style="fill:none;stroke:${o};stroke-width:.529167;stroke-linecap:round;stroke-miterlimit:2.5"/></g></svg>`
    };
    return i[t] ? i[t] : W
}
var Qt = n`.popup-background{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.32);z-index:999}.popup-card{position:relative;color:var(--vc-primary-text-color);border-radius:16px;background-color:var(--card-background-color)}.popup-card .progress{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);z-index:9999}.popup-card .header{display:flex;align-items:center;padding:12px;height:var(--header-height)}.popup-card .header ha-icon{font-size:14px}.popup-card .header .text{flex:1;padding:10px 4px;font-size:22px;line-height:28px;font-weight:400}.popup-card .content{display:flex;padding:0 24px 8px 24px}.popup-card .parameters{min-height:380px;min-width:400px;padding:4px 16px 0}.popup-card .parameters .mode-title{display:flex;margin-bottom:4px}.popup-card .parameters .mode-title .value{margin-left:8px;text-transform:capitalize;color:var(--dark-primary-color)}.popup-card .parameters segment-button-group{margin-bottom:24px}.popup-card .areas{font-size:20px;font-weight:300}.popup-card .actions{display:flex;align-items:center;justify-content:center;padding:0 24px 24px 24px}.popup-card .actions .mwc-button{font-size:150%!important}.popup-card .actions .clean-button{display:inline-block;padding:10px 32px;border:none;border-radius:8px;color:var(--primary-text-color);background:var(--vc-primary-select-background);cursor:pointer}.popup-card .actions .clean-button.disabled{opacity:.3;cursor:default}@media (max-width:600px){.popup-card{width:100vw;max-height:100vh;border-radius:0;overflow-y:auto;overflow-x:hidden}.popup-card .header{padding:0 12px}.popup-card .content{flex-direction:column;overflow:auto}.popup-card .parameters{min-height:auto;min-width:0;min-width:initial;width:100%;max-width:100%;padding:0 0 8px 0;margin-bottom:4px;border-bottom:2px solid var(--divider-color)}.popup-card .parameters segment-button-group{margin-bottom:12px}.popup-card .areas{font-size:18px}.popup-card .actions{flex-wrap:wrap;justify-content:center}.popup-card .actions .clean-button{padding:8px 24px;width:100%;max-width:300px}}`;
mt(Qt);
var Jt = n`.multiselect-button{display:flex;line-height:24px;padding:8px 16px;margin-bottom:4px;cursor:pointer;border-radius:8px}.multiselect-button.active{background-color:var(--vc-primary-select-background)}.multiselect-button .text{margin-left:8px}`;
mt(Jt);
let Gt = class extends rt {
    constructor() {
        super(...arguments),
        this.selection = {}
    }
    static get styles() {
        return Jt
    }
    connectedCallback() {
        super.connectedCallback(),
        this.buttons.forEach((t => this.selection[t.value] = !1))
    }
    render() {
        if (!this.buttons)
            return W;
        const t = this.buttons.map(( ({icon: t, text: e, value: o}) => {
            const i = this.selection[o] ? "active" : "";
            return D`<div class="multiselect-button ${i}" @click="${ () => this._onItemClick(o)}"><ha-icon icon="${t}"></ha-icon><div class="text">${e}</div></div>`
        }
        ));
        return D`${t}`
    }
    _onItemClick(t) {
        this.selection[t] = !this.selection[t],
        this.requestUpdate();
        const e = Object.entries(this.selection).filter(( ([t,e]) => e)).map(( ([t]) => t));
        this.dispatchEvent(new CustomEvent("select",{
            detail: e
        }))
    }
}
;
t([dt()], Gt.prototype, "buttons", void 0),
t([pt()], Gt.prototype, "selection", void 0),
Gt = t([at("multiselect-button-group")], Gt);
var Xt = n`:host{display:flex;box-sizing:border-box;border:1px solid var(--vc-primary-select-background);border-radius:18px;overflow:hidden}.segment-button{display:flex;flex:1;align-items:center;justify-content:center;padding:8px 24px;cursor:pointer}.segment-button.active{background-color:var(--vc-primary-select-background)}.segment-button.disabled{display:none;opacity:.2;cursor:default}.segment-button img{height:24px;width:24px}.segment-button .text{white-space:nowrap}`;
mt(Xt);
let Yt = class extends rt {
    static get styles() {
        return Xt
    }
    render() {
        if (!this.buttons)
            return W;
        const t = this.buttons.map(( ({icon: t, text: e, value: o, disabled: i}) => {
            const s = this.active == o ? "active" : ""
              , r = t ? D`${t}` : W
              , n = e ? D`<div class="text">${e}</div>` : W;
            return D`<div class="segment-button ${s} ${i ? "disabled" : ""}" @click="${ () => this._onItemClick(o, i)}">${r}${n}</div>`
        }
        ));
        return D`${t}`
    }
    _onItemClick(t, e) {
        this.active === t || e || (this.active = t,
        this.dispatchEvent(new CustomEvent("select",{
            detail: t
        })))
    }
}
;
t([dt()], Yt.prototype, "buttons", void 0),
t([dt()], Yt.prototype, "active", void 0),
Yt = t([at("segment-button-group")], Yt);
var te = n`:host{cursor:pointer}.content{display:flex;align-items:center;justify-content:center;height:42px;width:40px;border-radius:8px;background-color:var(--vc-primary-select-background)}`;
mt(te);
let ee = class extends rt {
    constructor() {
        super(...arguments),
        this.color = "#000"
    }
    static get styles() {
        return te
    }
    connectedCallback() {
        super.connectedCallback(),
        this.active || (this.active = "1")
    }
    render() {
        const t = function(t, e, o) {
            const i = {
                1: D`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="0 0 42 42"><path fill="${o}" stroke-linecap="round" stroke-miterlimit="2.5" stroke-width=".01" d="M26.869 7.185a.981.981 0 0 0-.592.176l-5.344 3.55c-.34.193-.511.46-.511.801 0 .256.095.49.287.703.213.214.447.32.703.32a.893.893 0 0 0 .545-.19L25.86 9.93v18.71c0 .255.095.479.287.671s.438.287.737.287.544-.095.736-.287.287-.416.287-.672V8.16a.932.932 0 0 0-.223-.639c-.149-.192-.363-.299-.64-.32a.898.898 0 0 0-.176-.016zm-10.285 5.848a.96.96 0 0 0-.705.287l-4.18 4.152-3.947-4.056a.914.914 0 0 0-.705-.32.788.788 0 0 0-.608.288.87.87 0 0 0-.255.64c0 .236.085.46.255.673l3.96 4.068-4.215 4.188c-.192.192-.287.416-.287.672s.095.48.287.671c.192.192.406.288.64.288.256 0 .49-.107.703-.32l4.188-4.147 4.068 4.18c.235.191.459.287.672.287.192 0 .396-.074.61-.223.213-.15.32-.385.32-.705 0-.256-.107-.48-.32-.672l-4.045-4.156 4.205-4.164c.192-.235.287-.469.287-.704 0-.234-.095-.448-.287-.64a.821.821 0 0 0-.64-.287z" aria-label="×1" style="shape-inside:url(#rect1578);white-space:pre" transform="translate(.992 2.608)"/></svg>`,
                2: D`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="0 0 42 42"><g style="shape-inside:url(#rect1578);white-space:pre"><path fill="${o}" stroke-linecap="round" stroke-miterlimit="2.5" stroke-width=".01" d="M27.272 7.033c-.81 0-1.643.17-2.496.511a8.308 8.308 0 0 0-2.272 1.313c-.682.554-1.215 1.16-1.6 1.822a4.47 4.47 0 0 0-.35.514c-.065.15-.098.298-.098.447 0 .235.097.437.289.607.192.15.416.225.672.225.17 0 .319-.043.447-.129.15-.085.288-.234.416-.447a5.01 5.01 0 0 1 1.152-1.535 6.58 6.58 0 0 1 1.729-1.088 5.097 5.097 0 0 1 1.984-.416c1.45 0 2.602.426 3.455 1.28.853.852 1.28 1.984 1.28 3.392 0 .853-.298 1.824-.895 2.912-.576 1.066-1.452 2.24-2.625 3.52l-7.39 8.16c-.171.213-.259.437-.259.671 0 .32.098.566.29.737.213.149.459.222.736.222h12a.865.865 0 0 0 .639-.255.857.857 0 0 0 .289-.672.82.82 0 0 0-.29-.639.82.82 0 0 0-.638-.29h-9.834l5.898-6.622c1.366-1.515 2.388-2.923 3.07-4.225.705-1.322 1.057-2.539 1.057-3.648 0-1.301-.277-2.42-.832-3.36a5.362 5.362 0 0 0-2.305-2.209c-.98-.533-2.154-.798-3.52-.798zm-10.688 6a.96.96 0 0 0-.705.287l-4.18 4.152-3.947-4.057a.914.914 0 0 0-.705-.32.788.788 0 0 0-.608.29.87.87 0 0 0-.255.64c0 .234.085.458.255.672l3.96 4.068-4.215 4.188c-.192.192-.287.415-.287.671s.095.48.287.672c.192.192.406.287.64.287.256 0 .49-.107.703-.32l4.188-4.146 4.068 4.18c.235.191.459.286.672.286.192 0 .396-.073.61-.222.213-.15.32-.385.32-.705 0-.256-.107-.48-.32-.672l-4.045-4.156 4.205-4.164c.192-.235.287-.469.287-.704 0-.234-.095-.448-.287-.64a.821.821 0 0 0-.64-.287z" style="white-space:pre" transform="translate(.992 2.608)"/></g></svg>`,
                3: D`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="0 0 42 42"><g style="shape-inside:url(#rect1578);white-space:pre"><path fill="${o}" stroke-linecap="round" stroke-miterlimit="2.5" stroke-width=".01" d="M6.824 24.584c-.235 0-.448-.096-.64-.288s-.288-.416-.288-.672.096-.48.288-.672l9.696-9.632a.958.958 0 0 1 .704-.288.82.82 0 0 1 .64.288c.192.192.288.405.288.64s-.096.47-.288.704l-9.696 9.6c-.213.213-.448.32-.704.32zm8.96-.288-9.344-9.6a1.061 1.061 0 0 1-.256-.672c0-.256.085-.47.256-.64a.788.788 0 0 1 .608-.288c.277 0 .512.107.704.32l9.312 9.568c.213.192.32.416.32.672 0 .32-.107.555-.32.704s-.416.224-.608.224c-.213 0-.437-.096-.672-.288zm6.024 1.76c.107 0 .213.021.32.064.128.043.277.139.448.288.448.47.981.832 1.6 1.088.619.235 1.323.352 2.112.352 1.045 0 1.995-.235 2.848-.704a5.387 5.387 0 0 0 2.08-1.952c.512-.853.768-1.824.768-2.912 0-1.237-.277-2.23-.832-2.976a4.747 4.747 0 0 0-2.08-1.696 6.048 6.048 0 0 0-2.56-.576c-.235 0-.47.021-.704.064-.213.021-.416.053-.608.096s-.341.064-.448.064c-.277 0-.49-.085-.64-.256a1.112 1.112 0 0 1-.224-.704c0-.15.032-.277.096-.384.064-.128.15-.267.256-.416l6.496-7.072.384.512h-9.696a.98.98 0 0 1-.672-.256c-.17-.192-.256-.416-.256-.672s.085-.47.256-.64a.98.98 0 0 1 .672-.256h10.752c.363 0 .619.117.768.352.15.213.224.427.224.64a.852.852 0 0 1-.096.384c-.064.107-.15.224-.256.352l-6.496 7.072-.704-.416c.064-.064.277-.128.64-.192.384-.085.683-.128.896-.128 1.173 0 2.272.277 3.296.832a6.498 6.498 0 0 1 2.528 2.4c.661 1.024.992 2.293.992 3.808 0 1.493-.352 2.805-1.056 3.936a7.262 7.262 0 0 1-2.848 2.592c-1.195.619-2.517.928-3.968.928-.875 0-1.739-.15-2.592-.448a6.285 6.285 0 0 1-2.24-1.344c-.15-.128-.256-.256-.32-.384s-.096-.256-.096-.384c0-.256.085-.49.256-.704.192-.235.427-.352.704-.352z" style="white-space:pre" transform="translate(.992 2.608)"/></g></svg>`
            };
            return i[t] ? i[t] : W
        }(this.active, 24, this.color);
        return D`<div class="content" @click="${this._onItemClick}">${t}</div>`
    }
    _onItemClick() {
        let t = parseInt(this.active, 10);
        t += 1,
        t > 3 && (t = 1),
        this.active = t.toString(),
        this.dispatchEvent(new CustomEvent("select",{
            detail: t
        }))
    }
}
;
t([dt()], ee.prototype, "active", void 0),
t([dt()], ee.prototype, "color", void 0),
ee = t([at("cycles-button")], ee);
let oe = class extends rt {
    constructor() {
        super(...arguments),
        this.areas = [],
        this.iconColor = "#000",
        this.popupRequestInProgress = !1,
        this.activeCleaningMode = Ht.Vac,
        this.activeSuctionMode = Dt.Balanced,
        this.activeMopMode = Lt.Medium,
        this.activeRouteMode = Wt.Standard,
        this.activeCycleMode = "1",
        this.activeAreas = [],
        this.cleaningModes = [],
        this.suctionModes = [],
        this.mopModes = [],
        this.routeModes = []
    }
    static get styles() {
        return Qt
    }
    connectedCallback() {
        super.connectedCallback(),
        this.cleaningModes = [{
            text: It("mode.vac&mop"),
            value: Ht.VacAndMop
        }, {
            text: It("mode.mop"),
            value: Ht.Mop
        }, {
            text: It("mode.vac"),
            value: Ht.Vac
        }],
        this.activeSuctionMode = this.robot.getSuctionMode(),
        this.activeMopMode = this.robot.getMopMode(),
        this.activeRouteMode = this.robot.getRouteMode(),
        this.activeSuctionMode == Dt.Off ? this.activeCleaningMode = Ht.Mop : this.activeMopMode == Lt.Off ? this.activeCleaningMode = Ht.Vac : this.activeCleaningMode = Ht.VacAndMop
    }
    onCleaningModeChange(t) {
        const e = t.detail;
        this.activeCleaningMode = e,
        this.fixModesIfNeeded()
    }
    onSuctionModeChange(t) {
        this.activeSuctionMode = t.detail
    }
    onMoppingModeChange(t) {
        this.activeMopMode = t.detail
    }
    onRouteModeChange(t) {
        this.activeRouteMode = t.detail
    }
    onCycleModeChange(t) {
        this.activeCycleMode = t.detail
    }
    onAreasChange(t) {
        this.activeAreas = t.detail,
        this.requestUpdate()
    }
    async onRunCleaning() {
        if (0 == this.activeAreas.length)
            return;
        this.popupRequestInProgress = !0,
        this.fixModesIfNeeded(),
        await this.robot.setSuctionModeAsync(this.activeSuctionMode),
        await new Promise((t => setTimeout(t, 100))),
        await this.robot.setMopModeAsync(this.activeMopMode),
        await new Promise((t => setTimeout(t, 100))),
        await this.robot.setRouteModeAsync(this.activeRouteMode),
        await new Promise((t => setTimeout(t, 100)));
        const t = this.activeAreas.map((t => parseInt(t, 10)));
        await this.robot.startSegmentsCleaningAsync(t, parseInt(this.activeCycleMode, 10)),
        this.closePopup(),
        this.popupRequestInProgress = !1
    }
    onPopupClose(t) {
        t.stopPropagation(),
        this.closePopup()
    }
    onPopupBackgroundClick(t) {
        const e = t.target;
        e && e.classList.contains("popup-background") && this.closePopup()
    }
    closePopup() {
        this.activeAreas = [],
        this.dispatchEvent(new CustomEvent("close"))
    }
    render() {
        const t = this.renderSuctionMode()
          , e = this.renderMoppingMode()
          , o = this.renderRouteMode()
          , i = this.renderAreas()
          , s = this.renderProgress();
        return D`<div class="popup-background" @click="${this.onPopupBackgroundClick}"><div class="popup-card"><div class="header"><ha-icon-button icon="mdi:close" @click="${this.onPopupClose}"><ha-icon icon="mdi:close"></ha-icon></ha-icon-button><div class="text">${It("common.custom_cleaning")}</div></div><div class="content"><div class="parameters"><segment-button-group buttons="${this.cleaningModes}" active="${this.activeCleaningMode}" @select="${this.onCleaningModeChange}"></segment-button-group>${t} ${e} ${o}<cycles-button active="${this.activeCycleMode}" color="${this.iconColor}" @select="${this.onCycleModeChange}"></cycles-button></div>${i}</div><div class="actions"><button class="clean-button ${0 == this.activeAreas.length ? "disabled" : ""}" @click="${this.onRunCleaning}">CLEAN</button></div>${s}</div></div>`
    }
    renderProgress() {
        return this.popupRequestInProgress ? D`<div class="progress"><ha-circular-progress indeterminate="true" size="large"></ha-circular-progress></div>` : W
    }
    renderSuctionMode() {
        if (this.activeCleaningMode == Ht.Mop)
            return W;
        this.suctionModes = Object.values(Dt).map((t => ({
            icon: Zt(t, 24, this.iconColor),
            value: t,
            disabled: !this.isSupportedSuctionMode(t, this.activeCleaningMode)
        })));
        const t = It(`suction_mode.${this.activeSuctionMode}`);
        return D`<div class="mode-title"><div class="title">${It("common.suction_mode")}</div><div class="value">${t}</div></div><segment-button-group buttons="${this.suctionModes}" active="${this.activeSuctionMode}" @select="${this.onSuctionModeChange}"></segment-button-group>`
    }
    renderMoppingMode() {
        if (this.activeCleaningMode == Ht.Vac)
            return W;
        this.mopModes = Object.values(Lt).map((t => ({
            icon: Ft(t, 24, this.iconColor),
            value: t,
            disabled: !this.isSupportedMopMode(t, this.activeCleaningMode)
        })));
        const t = It(`mop_mode.${this.activeMopMode}`);
        return D`<div class="mode-title"><div class="title">${It("common.mop_mode")}</div><div class="value">${t}</div></div><segment-button-group buttons="${this.mopModes}" active="${this.activeMopMode}" @select="${this.onMoppingModeChange}"></segment-button-group>`
    }
    renderRouteMode() {
        this.routeModes = Object.values(Wt).map((t => ({
            icon: Kt(t, 24, this.iconColor),
            value: t,
            disabled: !this.isSupportedRouteMode(t, this.activeCleaningMode)
        })));
        const t = It(`route_mode.${this.activeRouteMode}`);
        return D`<div class="mode-title"><div class="title">${It("common.route_mode")}</div><div class="value">${t}</div></div><segment-button-group buttons="${this.routeModes}" active="${this.activeRouteMode}" @select="${this.onRouteModeChange}"></segment-button-group>`
    }
    renderAreas() {
        const t = this.areas.map((t => ({
            icon: t.icon,
            text: t.name,
            value: t.roborock_area_id.toString()
        })));
        return D`<div class="areas"><multiselect-button-group buttons="${t}" @select="${this.onAreasChange}"></multiselect-button-group></div>`
    }
    fixModesIfNeeded() {
        qt.isSupportedSuctionMode(this.activeSuctionMode, this.activeCleaningMode) || (this.activeSuctionMode = this.activeCleaningMode == Ht.Mop ? Dt.Off : Dt.Turbo),
        qt.isSupportedMopMode(this.activeMopMode, this.activeCleaningMode) || (this.activeMopMode = this.activeCleaningMode == Ht.Vac ? Lt.Off : Lt.Medium),
        qt.isSupportedRouteMode(this.activeRouteMode, this.activeCleaningMode) || (this.activeRouteMode = Wt.Standard)
    }
    isSupportedSuctionMode(t, e) {
        return t != Dt.Off && qt.isSupportedSuctionMode(t, e)
    }
    isSupportedMopMode(t, e) {
        return t != Lt.Off && qt.isSupportedMopMode(t, e)
    }
    isSupportedRouteMode(t, e) {
        return qt.isSupportedRouteMode(t, e)
    }
}
;
t([dt()], oe.prototype, "robot", void 0),
t([dt()], oe.prototype, "areas", void 0),
t([dt()], oe.prototype, "iconColor", void 0),
t([pt()], oe.prototype, "popupRequestInProgress", void 0),
t([pt()], oe.prototype, "activeCleaningMode", void 0),
t([pt()], oe.prototype, "activeSuctionMode", void 0),
t([pt()], oe.prototype, "activeMopMode", void 0),
t([pt()], oe.prototype, "activeRouteMode", void 0),
t([pt()], oe.prototype, "activeCycleMode", void 0),
oe = t([at("custom-cleaning-popup")], oe);
console.info("%c ROBOROCK-VACUUM-CARD %c 1.3.0", "color: white; background: black; font-weight: 700;", "color: black; background: white; font-weight: 700;");
let ie = class extends rt {
    get name() {
        return this.config.entity.replace("vacuum.", "")
    }
    get sensor() {
        const t = this.name;
        return {
            cleaning: `binary_sensor.${t}_cleaning`,
            mopDrying: `binary_sensor.${t}_mop_drying`,
            mopDryingRemainingTime: `sensor.${t}_mop_drying_remaining_time`,
            battery: `sensor.${t}_battery`
        }
    }
    static get styles() {
        return gt
    }
    constructor() {
        super(),
        this.popupActive = !1,
        this.iconColor = "#000",
        this.robot = new qt
    }
    setConfig(t) {
        this.config = function(t) {
            var e, o;
            if (!t)
                throw new Error(It("error.invalid_config"));
            if (!t.entity)
                throw new Error(It("error.missing_entity"));
            const i = {
                [Ht.VacAndMop]: {
                    suction: Dt.Balanced,
                    mop: Lt.Medium,
                    route: Wt.Standard
                },
                [Ht.Mop]: {
                    suction: Dt.Balanced,
                    mop: Lt.Medium,
                    route: Wt.Deep
                },
                [Ht.Vac]: {
                    suction: Dt.Turbo,
                    mop: Lt.Medium,
                    route: Wt.Standard
                }
            };
            return {
                entity: t.entity,
                stats: null !== (e = t.stats) && void 0 !== e ? e : {},
                areas: null !== (o = t.areas) && void 0 !== o ? o : [],
                default_mode: Ht.VacAndMop,
                default_modes: Object.assign(Object.assign({}, t.default_modes), i)
            }
        }(t),
        this.robot.setEntity(this.config.entity)
    }
    getCardSize() {
        return 3
    }
    connectedCallback() {
        super.connectedCallback()
    }
    disconnectedCallback() {
        super.disconnectedCallback()
    }
    onPopupShow(t) {
        t.stopPropagation(),
        this.popupActive = !0
    }
    onPopupClose(t) {
        t.stopPropagation(),
        this.popupActive = !1
    }
    render() {
        if (!this.hass || !this.config)
            return W;
        this.iconColor = getComputedStyle(document.documentElement).getPropertyValue("--state-icon-color").trim(),
        this.robot.setHass(this.hass);
        const t = "on" == this.state(this.sensor.cleaning)
          , e = this.state(this.config.entity)
          , o = this.renderState(e)
          , i = this.renderErrors()
          , s = this.renderName()
          , r = this.renderMode()
          , n = this.renderMopDrying()
          , a = this.renderBattery()
          , c = this.renderStats(t ? "cleaning" : e)
          , l = this.renderActions(t, e)
          , d = this.renderPopup();
        return D`<ha-card><div class="header">${s} ${r} ${n} ${a}</div><div class="content" @click="${this.onPopupShow}">${i}<div class="state">${o}</div></div>${c}<div class="actions">${l}</div></ha-card>${d}`
    }
    renderState(t) {
        const e = this._getExistingSensorId([`sensor.${this.name}_status`]);
        if (!e)
            return It(`status.${t}`);
        const o = this.state(e);
        return t == o ? It(`status.${t}`) : It(`status.${t}`) + ". " + It(`reach_status.${o}`) + "."
    }
    renderPopup() {
        if (!(this.hass && this.config && this.config.areas && this.popupActive))
            return W;
        const t = this.getAreas();
        return D`<custom-cleaning-popup robot="${this.robot}" areas="${t}" iconColor="${this.iconColor}" @close="${this.onPopupClose}"></custom-cleaning-popup>`
    }
    renderErrors() {
        if (!this.hass || !this.config)
            return W;
        const t = this._getExistingSensorId([`sensor.${this.name}_vacuum_error`, `sensor.${this.name}_current_error`])
          , e = this._getExistingSensorId([`sensor.${this.name}_dock_error`]);
        let o = !1
          , i = W;
        if (t) {
            const e = this.state(t)
              , s = `vacuum_error.${e}`;
            o = "none" != e,
            o && (i = D`<div>${It("common.vacuum_error")}: ${It(s)}.</div>`)
        }
        let s = !1
          , r = W;
        if (e) {
            const t = this.state(e)
              , o = `doc_error.${t}`;
            s = "ok" != t,
            s && (r = D`<div>${It("common.doc_error")}: ${It(o)}.</div>`)
        }
        return o || s ? D`<div class="errors">${i} ${r}</div>` : W
    }
    renderStats(t) {
        if (void 0 === t)
            return W;
        const e = (this.config.stats[t] || this.config.stats.default || []).map(( ({entity: t, attribute: e, scale: o, divide_by: i, unit: s, title: r}) => {
            if (!t && !e)
                return W;
            let n;
            if (t && e)
                n = this.getAttributeValue(this.hass.states[t], e);
            else if (e)
                n = this.getAttributeValue(this.hass.states[this.config.entity], e);
            else {
                if (!t)
                    return W;
                n = this.state(t)
            }
            if (void 0 === n)
                n = "N/A";
            else {
                if (null != o || null != i) {
                    let t = parseFloat(n);
                    null != i && i > 0 && (t /= i),
                    n = null != o ? t.toFixed(o) : t.toString()
                }
            }
            return D`<div class="stats-block" @click="${ () => this.handleMore(t)}"><span class="stats-value">${n}</span> ${s}<div class="stats-subtitle">${r}</div></div>`
        }
        ));
        return e.length ? D`<div class="stats">${e}</div>` : W
    }
    renderActions(t, e) {
        if (t) {
            const t = "paused" == e ? D`<paper-button @click="${this.handleVacuumAction("start")}"><ha-icon icon="hass:play"></ha-icon>${It("common.resume")}</paper-button>` : D`<paper-button @click="${this.handleVacuumAction("pause")}"><ha-icon icon="hass:pause"></ha-icon>${It("common.pause")}</paper-button>`;
            return D`${t}<paper-button @click="${this.handleVacuumAction("stop")}"><ha-icon icon="hass:stop"></ha-icon>${It("common.stop")}</paper-button><paper-button @click="${this.handleVacuumAction("return_to_base")}"><ha-icon icon="hass:home-map-marker"></ha-icon>${It("common.return_to_base")}</paper-button>`
        }
        return D`<paper-button @click="${this.handleVacuumAction("start")}"><ha-icon icon="hass:play"></ha-icon>${It("common.start")}</paper-button><paper-button @click="${this.handleVacuumAction("locate")}"><ha-icon icon="mdi:map-marker"></ha-icon>${It("common.locate")}</paper-button>`
    }
    renderName() {
        const t = this.hass.states[this.config.entity]
          , e = this.getAttributeValue(t, "friendly_name")
          , o = this.getAttributeValue(t, "icon");
        return D`<div class="tip" @click="${ () => this.handleMore(this.config.entity)}"><ha-icon icon="${o}"></ha-icon><span class="icon-title">${e}</span></div>`
    }
    renderMode() {
        const t = []
          , e = this.robot.getSuctionMode()
          , o = this.robot.getMopMode()
          , i = this.robot.getRouteMode();
        e != Dt.Off && t.push(Zt(e, 24, this.iconColor)),
        o != Lt.Off && t.push(Ft(o, 24, this.iconColor)),
        t.push(Kt(i, 24, this.iconColor));
        const s = t.map((t => D`<div class="tip">${t}</div>`));
        return D`<div class="modes" @click="${this.onPopupShow}">${s}</div>`
    }
    renderMopDrying() {
        const t = this.hass.states[this.sensor.mopDrying];
        if (!t)
            return W;
        if ("on" != t.state)
            return W;
        const e = Number(this.hass.states[this.sensor.mopDryingRemainingTime].state);
        return D`<div class="tip" @click="${ () => this.handleMore(this.sensor.mopDryingRemainingTime)}"><ha-icon icon="mdi:heat-wave"></ha-icon><span class="icon-title">${function(t) {
            if (0 === t)
                return "0s";
            const e = Math.floor(t / 3600)
              , o = Math.floor(t % 3600 / 60);
            return (e > 0 ? `${e}h ` : "") + (o > 0 ? `${o}min` : "").trim()
        }(e)}</span></div>`
    }
    renderBattery() {
        const t = this.hass.states[this.config.entity]
          , e = this.getAttributeValue(t, "battery_level")
          , o = this.getAttributeValue(t, "battery_icon");
        return D`<div class="tip" @click="${ () => this.handleMore(this.sensor.battery)}"><ha-icon icon="${o}"></ha-icon><span class="icon-title">${e}%</span></div>`
    }
    handleVacuumAction(t) {
        return () => this.robot.callServiceAsync(t)
    }
    handleMore(t) {
        !function(t, e, o, i) {
            i = i || {},
            o = null == o ? {} : o;
            var s = new Event(e,{
                bubbles: void 0 === i.bubbles || i.bubbles,
                cancelable: Boolean(i.cancelable),
                composed: void 0 === i.composed || i.composed
            });
            s.detail = o,
            t.dispatchEvent(s)
        }(this, "hass-more-info", {
            entityId: t
        }, {
            bubbles: !1,
            composed: !0
        })
    }
    getAreas() {
        const t = [];
        if (!this.config.areas)
            return t;
        for (let {area_id: e, roborock_area_id: o} of this.config.areas) {
            const i = this.hass.areas[e];
            i && t.push({
                icon: i.icon,
                name: i.name,
                area_id: e,
                roborock_area_id: o
            })
        }
        return t
    }
    _getExistingSensorId(t) {
        for (let e of t)
            if (this.hass.states[e])
                return e
    }
    getAttributeValue(t, e) {
        return t.attributes[e]
    }
    state(t) {
        var e;
        return null === (e = this.hass.states[t]) || void 0 === e ? void 0 : e.state
    }
}
;
t([dt({
    attribute: !1
})], ie.prototype, "hass", void 0),
t([pt()], ie.prototype, "config", void 0),
t([pt()], ie.prototype, "popupActive", void 0),
ie = t([at("roborock-vacuum-card")], ie);
export {ie as RoborockVacuumCard};
