/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const $ = {}, ot = [], Te = () => {
}, yn = () => !1, ss = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ws = (e) => e.startsWith("onUpdate:"), G = Object.assign, Js = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, vn = Object.prototype.hasOwnProperty, N = (e, t) => vn.call(e, t), T = Array.isArray, nt = (e) => It(e) === "[object Map]", rs = (e) => It(e) === "[object Set]", vr = (e) => It(e) === "[object Date]", I = (e) => typeof e == "function", W = (e) => typeof e == "string", Re = (e) => typeof e == "symbol", U = (e) => e !== null && typeof e == "object", to = (e) => (U(e) || I(e)) && I(e.then) && I(e.catch), so = Object.prototype.toString, It = (e) => so.call(e), _n = (e) => It(e).slice(8, -1), os = (e) => It(e) === "[object Object]", Gs = (e) => W(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, wt = /* @__PURE__ */ Ks(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ns = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, xn = /-(\w)/g, me = ns(
  (e) => e.replace(xn, (t, s) => s ? s.toUpperCase() : "")
), Sn = /\B([A-Z])/g, de = ns(
  (e) => e.replace(Sn, "-$1").toLowerCase()
), ro = ns((e) => e.charAt(0).toUpperCase() + e.slice(1)), bs = ns(
  (e) => e ? `on${ro(e)}` : ""
), Ve = (e, t) => !Object.is(e, t), Ut = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, oo = (e, t, s, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: s
  });
}, no = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, _r = (e) => {
  const t = W(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let xr;
const is = () => xr || (xr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Qs(e) {
  if (T(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const r = e[s], o = W(r) ? Tn(r) : Qs(r);
      if (o)
        for (const n in o)
          t[n] = o[n];
    }
    return t;
  } else if (W(e) || U(e))
    return e;
}
const En = /;(?![^(]*\))/g, kn = /:([^]+)/, Cn = /\/\*[^]*?\*\//g;
function Tn(e) {
  const t = {};
  return e.replace(Cn, "").split(En).forEach((s) => {
    if (s) {
      const r = s.split(kn);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ls(e) {
  let t = "";
  if (W(e))
    t = e;
  else if (T(e))
    for (let s = 0; s < e.length; s++) {
      const r = ls(e[s]);
      r && (t += r + " ");
    }
  else if (U(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const An = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Rn = /* @__PURE__ */ Ks(An);
function io(e) {
  return !!e || e === "";
}
function In(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let r = 0; s && r < e.length; r++)
    s = as(e[r], t[r]);
  return s;
}
function as(e, t) {
  if (e === t) return !0;
  let s = vr(e), r = vr(t);
  if (s || r)
    return s && r ? e.getTime() === t.getTime() : !1;
  if (s = Re(e), r = Re(t), s || r)
    return e === t;
  if (s = T(e), r = T(t), s || r)
    return s && r ? In(e, t) : !1;
  if (s = U(e), r = U(t), s || r) {
    if (!s || !r)
      return !1;
    const o = Object.keys(e).length, n = Object.keys(t).length;
    if (o !== n)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (l && !c || !l && c || !as(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function On(e, t) {
  return e.findIndex((s) => as(s, t));
}
const lo = (e) => !!(e && e.__v_isRef === !0), ke = (e) => W(e) ? e : e == null ? "" : T(e) || U(e) && (e.toString === so || !I(e.toString)) ? lo(e) ? ke(e.value) : JSON.stringify(e, ao, 2) : String(e), ao = (e, t) => lo(t) ? ao(e, t.value) : nt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [r, o], n) => (s[ys(r, n) + " =>"] = o, s),
    {}
  )
} : rs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => ys(s))
} : Re(t) ? ys(t) : U(t) && !T(t) && !os(t) ? String(t) : t, ys = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Re(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ce;
class Pn {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ce, !t && ce && (this.index = (ce.scopes || (ce.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = ce;
      try {
        return ce = this, t();
      } finally {
        ce = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ce = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ce = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, r;
      for (s = 0, r = this.effects.length; s < r; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, r = this.cleanups.length; s < r; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, r = this.scopes.length; s < r; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Mn() {
  return ce;
}
let V;
const vs = /* @__PURE__ */ new WeakSet();
class co {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ce && ce.active && ce.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, vs.has(this) && (vs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || po(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Sr(this), uo(this);
    const t = V, s = we;
    V = this, we = !0;
    try {
      return this.fn();
    } finally {
      ho(this), V = t, we = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Zs(t);
      this.deps = this.depsTail = void 0, Sr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? vs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Os(this) && this.run();
  }
  get dirty() {
    return Os(this);
  }
}
let fo = 0, bt, yt;
function po(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = yt, yt = e;
    return;
  }
  e.next = bt, bt = e;
}
function Ys() {
  fo++;
}
function Xs() {
  if (--fo > 0)
    return;
  if (yt) {
    let t = yt;
    for (yt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; bt; ) {
    let t = bt;
    for (bt = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function uo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ho(e) {
  let t, s = e.depsTail, r = s;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === s && (s = o), Zs(r), Nn(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = s;
}
function Os(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (go(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function go(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Et))
    return;
  e.globalVersion = Et;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Os(e)) {
    e.flags &= -3;
    return;
  }
  const s = V, r = we;
  V = e, we = !0;
  try {
    uo(e);
    const o = e.fn(e._value);
    (t.version === 0 || Ve(o, e._value)) && (e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    V = s, we = r, ho(e), e.flags &= -3;
  }
}
function Zs(e, t = !1) {
  const { dep: s, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), s.subs === e && (s.subs = r, !r && s.computed)) {
    s.computed.flags &= -5;
    for (let n = s.computed.deps; n; n = n.nextDep)
      Zs(n, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Nn(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let we = !0;
const mo = [];
function Ue() {
  mo.push(we), we = !1;
}
function Be() {
  const e = mo.pop();
  we = e === void 0 ? !0 : e;
}
function Sr(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = V;
    V = void 0;
    try {
      t();
    } finally {
      V = s;
    }
  }
}
let Et = 0;
class jn {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class er {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!V || !we || V === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== V)
      s = this.activeLink = new jn(V, this), V.deps ? (s.prevDep = V.depsTail, V.depsTail.nextDep = s, V.depsTail = s) : V.deps = V.depsTail = s, wo(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const r = s.nextDep;
      r.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = r), s.prevDep = V.depsTail, s.nextDep = void 0, V.depsTail.nextDep = s, V.depsTail = s, V.deps === s && (V.deps = r);
    }
    return s;
  }
  trigger(t) {
    this.version++, Et++, this.notify(t);
  }
  notify(t) {
    Ys();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Xs();
    }
  }
}
function wo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        wo(r);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Ps = /* @__PURE__ */ new WeakMap(), Xe = Symbol(
  ""
), Ms = Symbol(
  ""
), kt = Symbol(
  ""
);
function X(e, t, s) {
  if (we && V) {
    let r = Ps.get(e);
    r || Ps.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(s);
    o || (r.set(s, o = new er()), o.map = r, o.key = s), o.track();
  }
}
function Ne(e, t, s, r, o, n) {
  const i = Ps.get(e);
  if (!i) {
    Et++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Ys(), t === "clear")
    i.forEach(l);
  else {
    const c = T(e), u = c && Gs(s);
    if (c && s === "length") {
      const a = Number(r);
      i.forEach((d, _) => {
        (_ === "length" || _ === kt || !Re(_) && _ >= a) && l(d);
      });
    } else
      switch ((s !== void 0 || i.has(void 0)) && l(i.get(s)), u && l(i.get(kt)), t) {
        case "add":
          c ? u && l(i.get("length")) : (l(i.get(Xe)), nt(e) && l(i.get(Ms)));
          break;
        case "delete":
          c || (l(i.get(Xe)), nt(e) && l(i.get(Ms)));
          break;
        case "set":
          nt(e) && l(i.get(Xe));
          break;
      }
  }
  Xs();
}
function st(e) {
  const t = j(e);
  return t === e ? t : (X(t, "iterate", kt), ge(e) ? t : t.map(Z));
}
function cs(e) {
  return X(e = j(e), "iterate", kt), e;
}
const Fn = {
  __proto__: null,
  [Symbol.iterator]() {
    return _s(this, Symbol.iterator, Z);
  },
  concat(...e) {
    return st(this).concat(
      ...e.map((t) => T(t) ? st(t) : t)
    );
  },
  entries() {
    return _s(this, "entries", (e) => (e[1] = Z(e[1]), e));
  },
  every(e, t) {
    return Oe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Oe(this, "filter", e, t, (s) => s.map(Z), arguments);
  },
  find(e, t) {
    return Oe(this, "find", e, t, Z, arguments);
  },
  findIndex(e, t) {
    return Oe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Oe(this, "findLast", e, t, Z, arguments);
  },
  findLastIndex(e, t) {
    return Oe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Oe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return xs(this, "includes", e);
  },
  indexOf(...e) {
    return xs(this, "indexOf", e);
  },
  join(e) {
    return st(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return xs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Oe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return dt(this, "pop");
  },
  push(...e) {
    return dt(this, "push", e);
  },
  reduce(e, ...t) {
    return Er(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Er(this, "reduceRight", e, t);
  },
  shift() {
    return dt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Oe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return dt(this, "splice", e);
  },
  toReversed() {
    return st(this).toReversed();
  },
  toSorted(e) {
    return st(this).toSorted(e);
  },
  toSpliced(...e) {
    return st(this).toSpliced(...e);
  },
  unshift(...e) {
    return dt(this, "unshift", e);
  },
  values() {
    return _s(this, "values", Z);
  }
};
function _s(e, t, s) {
  const r = cs(e), o = r[t]();
  return r !== e && !ge(e) && (o._next = o.next, o.next = () => {
    const n = o._next();
    return n.value && (n.value = s(n.value)), n;
  }), o;
}
const Dn = Array.prototype;
function Oe(e, t, s, r, o, n) {
  const i = cs(e), l = i !== e && !ge(e), c = i[t];
  if (c !== Dn[t]) {
    const d = c.apply(e, n);
    return l ? Z(d) : d;
  }
  let u = s;
  i !== e && (l ? u = function(d, _) {
    return s.call(this, Z(d), _, e);
  } : s.length > 2 && (u = function(d, _) {
    return s.call(this, d, _, e);
  }));
  const a = c.call(i, u, r);
  return l && o ? o(a) : a;
}
function Er(e, t, s, r) {
  const o = cs(e);
  let n = s;
  return o !== e && (ge(e) ? s.length > 3 && (n = function(i, l, c) {
    return s.call(this, i, l, c, e);
  }) : n = function(i, l, c) {
    return s.call(this, i, Z(l), c, e);
  }), o[t](n, ...r);
}
function xs(e, t, s) {
  const r = j(e);
  X(r, "iterate", kt);
  const o = r[t](...s);
  return (o === -1 || o === !1) && or(s[0]) ? (s[0] = j(s[0]), r[t](...s)) : o;
}
function dt(e, t, s = []) {
  Ue(), Ys();
  const r = j(e)[t].apply(e, s);
  return Xs(), Be(), r;
}
const Ln = /* @__PURE__ */ Ks("__proto__,__v_isRef,__isVue"), bo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Re)
);
function $n(e) {
  Re(e) || (e = String(e));
  const t = j(this);
  return X(t, "has", e), t.hasOwnProperty(e);
}
class yo {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, r) {
    if (s === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, n = this._isShallow;
    if (s === "__v_isReactive")
      return !o;
    if (s === "__v_isReadonly")
      return o;
    if (s === "__v_isShallow")
      return n;
    if (s === "__v_raw")
      return r === (o ? n ? Gn : So : n ? xo : _o).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = T(t);
    if (!o) {
      let c;
      if (i && (c = Fn[s]))
        return c;
      if (s === "hasOwnProperty")
        return $n;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Q(t) ? t : r
    );
    return (Re(s) ? bo.has(s) : Ln(s)) || (o || X(t, "get", s), n) ? l : Q(l) ? i && Gs(s) ? l : l.value : U(l) ? o ? Eo(l) : sr(l) : l;
  }
}
class vo extends yo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, r, o) {
    let n = t[s];
    if (!this._isShallow) {
      const c = et(n);
      if (!ge(r) && !et(r) && (n = j(n), r = j(r)), !T(t) && Q(n) && !Q(r))
        return c ? !1 : (n.value = r, !0);
    }
    const i = T(t) && Gs(s) ? Number(s) < t.length : N(t, s), l = Reflect.set(
      t,
      s,
      r,
      Q(t) ? t : o
    );
    return t === j(o) && (i ? Ve(r, n) && Ne(t, "set", s, r) : Ne(t, "add", s, r)), l;
  }
  deleteProperty(t, s) {
    const r = N(t, s);
    t[s];
    const o = Reflect.deleteProperty(t, s);
    return o && r && Ne(t, "delete", s, void 0), o;
  }
  has(t, s) {
    const r = Reflect.has(t, s);
    return (!Re(s) || !bo.has(s)) && X(t, "has", s), r;
  }
  ownKeys(t) {
    return X(
      t,
      "iterate",
      T(t) ? "length" : Xe
    ), Reflect.ownKeys(t);
  }
}
class Hn extends yo {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const zn = /* @__PURE__ */ new vo(), Vn = /* @__PURE__ */ new Hn(), Un = /* @__PURE__ */ new vo(!0);
const Ns = (e) => e, $t = (e) => Reflect.getPrototypeOf(e);
function Bn(e, t, s) {
  return function(...r) {
    const o = this.__v_raw, n = j(o), i = nt(n), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, u = o[e](...r), a = s ? Ns : t ? js : Z;
    return !t && X(
      n,
      "iterate",
      c ? Ms : Xe
    ), {
      // iterator protocol
      next() {
        const { value: d, done: _ } = u.next();
        return _ ? { value: d, done: _ } : {
          value: l ? [a(d[0]), a(d[1])] : a(d),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ht(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function qn(e, t) {
  const s = {
    get(o) {
      const n = this.__v_raw, i = j(n), l = j(o);
      e || (Ve(o, l) && X(i, "get", o), X(i, "get", l));
      const { has: c } = $t(i), u = t ? Ns : e ? js : Z;
      if (c.call(i, o))
        return u(n.get(o));
      if (c.call(i, l))
        return u(n.get(l));
      n !== i && n.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && X(j(o), "iterate", Xe), Reflect.get(o, "size", o);
    },
    has(o) {
      const n = this.__v_raw, i = j(n), l = j(o);
      return e || (Ve(o, l) && X(i, "has", o), X(i, "has", l)), o === l ? n.has(o) : n.has(o) || n.has(l);
    },
    forEach(o, n) {
      const i = this, l = i.__v_raw, c = j(l), u = t ? Ns : e ? js : Z;
      return !e && X(c, "iterate", Xe), l.forEach((a, d) => o.call(n, u(a), u(d), i));
    }
  };
  return G(
    s,
    e ? {
      add: Ht("add"),
      set: Ht("set"),
      delete: Ht("delete"),
      clear: Ht("clear")
    } : {
      add(o) {
        !t && !ge(o) && !et(o) && (o = j(o));
        const n = j(this);
        return $t(n).has.call(n, o) || (n.add(o), Ne(n, "add", o, o)), this;
      },
      set(o, n) {
        !t && !ge(n) && !et(n) && (n = j(n));
        const i = j(this), { has: l, get: c } = $t(i);
        let u = l.call(i, o);
        u || (o = j(o), u = l.call(i, o));
        const a = c.call(i, o);
        return i.set(o, n), u ? Ve(n, a) && Ne(i, "set", o, n) : Ne(i, "add", o, n), this;
      },
      delete(o) {
        const n = j(this), { has: i, get: l } = $t(n);
        let c = i.call(n, o);
        c || (o = j(o), c = i.call(n, o)), l && l.call(n, o);
        const u = n.delete(o);
        return c && Ne(n, "delete", o, void 0), u;
      },
      clear() {
        const o = j(this), n = o.size !== 0, i = o.clear();
        return n && Ne(
          o,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    s[o] = Bn(o, e, t);
  }), s;
}
function tr(e, t) {
  const s = qn(e, t);
  return (r, o, n) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    N(s, o) && o in r ? s : r,
    o,
    n
  );
}
const Kn = {
  get: /* @__PURE__ */ tr(!1, !1)
}, Wn = {
  get: /* @__PURE__ */ tr(!1, !0)
}, Jn = {
  get: /* @__PURE__ */ tr(!0, !1)
};
const _o = /* @__PURE__ */ new WeakMap(), xo = /* @__PURE__ */ new WeakMap(), So = /* @__PURE__ */ new WeakMap(), Gn = /* @__PURE__ */ new WeakMap();
function Qn(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Yn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Qn(_n(e));
}
function sr(e) {
  return et(e) ? e : rr(
    e,
    !1,
    zn,
    Kn,
    _o
  );
}
function Xn(e) {
  return rr(
    e,
    !1,
    Un,
    Wn,
    xo
  );
}
function Eo(e) {
  return rr(
    e,
    !0,
    Vn,
    Jn,
    So
  );
}
function rr(e, t, s, r, o) {
  if (!U(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const n = o.get(e);
  if (n)
    return n;
  const i = Yn(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? r : s
  );
  return o.set(e, l), l;
}
function it(e) {
  return et(e) ? it(e.__v_raw) : !!(e && e.__v_isReactive);
}
function et(e) {
  return !!(e && e.__v_isReadonly);
}
function ge(e) {
  return !!(e && e.__v_isShallow);
}
function or(e) {
  return e ? !!e.__v_raw : !1;
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function Zn(e) {
  return !N(e, "__v_skip") && Object.isExtensible(e) && oo(e, "__v_skip", !0), e;
}
const Z = (e) => U(e) ? sr(e) : e, js = (e) => U(e) ? Eo(e) : e;
function Q(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ot(e) {
  return ei(e, !1);
}
function ei(e, t) {
  return Q(e) ? e : new ti(e, t);
}
class ti {
  constructor(t, s) {
    this.dep = new er(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : j(t), this._value = s ? t : Z(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, r = this.__v_isShallow || ge(t) || et(t);
    t = r ? t : j(t), Ve(t, s) && (this._rawValue = t, this._value = r ? t : Z(t), this.dep.trigger());
  }
}
function Ye(e) {
  return Q(e) ? e.value : e;
}
const si = {
  get: (e, t, s) => t === "__v_raw" ? e : Ye(Reflect.get(e, t, s)),
  set: (e, t, s, r) => {
    const o = e[t];
    return Q(o) && !Q(s) ? (o.value = s, !0) : Reflect.set(e, t, s, r);
  }
};
function ko(e) {
  return it(e) ? e : new Proxy(e, si);
}
class ri {
  constructor(t, s, r) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new er(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Et - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    V !== this)
      return po(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return go(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function oi(e, t, s = !1) {
  let r, o;
  return I(e) ? r = e : (r = e.get, o = e.set), new ri(r, o, s);
}
const zt = {}, Jt = /* @__PURE__ */ new WeakMap();
let Qe;
function ni(e, t = !1, s = Qe) {
  if (s) {
    let r = Jt.get(s);
    r || Jt.set(s, r = []), r.push(e);
  }
}
function ii(e, t, s = $) {
  const { immediate: r, deep: o, once: n, scheduler: i, augmentJob: l, call: c } = s, u = (A) => o ? A : ge(A) || o === !1 || o === 0 ? je(A, 1) : je(A);
  let a, d, _, S, O = !1, P = !1;
  if (Q(e) ? (d = () => e.value, O = ge(e)) : it(e) ? (d = () => u(e), O = !0) : T(e) ? (P = !0, O = e.some((A) => it(A) || ge(A)), d = () => e.map((A) => {
    if (Q(A))
      return A.value;
    if (it(A))
      return u(A);
    if (I(A))
      return c ? c(A, 2) : A();
  })) : I(e) ? t ? d = c ? () => c(e, 2) : e : d = () => {
    if (_) {
      Ue();
      try {
        _();
      } finally {
        Be();
      }
    }
    const A = Qe;
    Qe = a;
    try {
      return c ? c(e, 3, [S]) : e(S);
    } finally {
      Qe = A;
    }
  } : d = Te, t && o) {
    const A = d, J = o === !0 ? 1 / 0 : o;
    d = () => je(A(), J);
  }
  const Y = Mn(), L = () => {
    a.stop(), Y && Y.active && Js(Y.effects, a);
  };
  if (n && t) {
    const A = t;
    t = (...J) => {
      A(...J), L();
    };
  }
  let q = P ? new Array(e.length).fill(zt) : zt;
  const K = (A) => {
    if (!(!(a.flags & 1) || !a.dirty && !A))
      if (t) {
        const J = a.run();
        if (o || O || (P ? J.some((Le, be) => Ve(Le, q[be])) : Ve(J, q))) {
          _ && _();
          const Le = Qe;
          Qe = a;
          try {
            const be = [
              J,
              // pass undefined as the old value when it's changed for the first time
              q === zt ? void 0 : P && q[0] === zt ? [] : q,
              S
            ];
            c ? c(t, 3, be) : (
              // @ts-expect-error
              t(...be)
            ), q = J;
          } finally {
            Qe = Le;
          }
        }
      } else
        a.run();
  };
  return l && l(K), a = new co(d), a.scheduler = i ? () => i(K, !1) : K, S = (A) => ni(A, !1, a), _ = a.onStop = () => {
    const A = Jt.get(a);
    if (A) {
      if (c)
        c(A, 4);
      else
        for (const J of A) J();
      Jt.delete(a);
    }
  }, t ? r ? K(!0) : q = a.run() : i ? i(K.bind(null, !0), !0) : a.run(), L.pause = a.pause.bind(a), L.resume = a.resume.bind(a), L.stop = L, L;
}
function je(e, t = 1 / 0, s) {
  if (t <= 0 || !U(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(e)))
    return e;
  if (s.add(e), t--, Q(e))
    je(e.value, t, s);
  else if (T(e))
    for (let r = 0; r < e.length; r++)
      je(e[r], t, s);
  else if (rs(e) || nt(e))
    e.forEach((r) => {
      je(r, t, s);
    });
  else if (os(e)) {
    for (const r in e)
      je(e[r], t, s);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && je(e[r], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Pt(e, t, s, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    fs(o, t, s);
  }
}
function Ie(e, t, s, r) {
  if (I(e)) {
    const o = Pt(e, t, s, r);
    return o && to(o) && o.catch((n) => {
      fs(n, t, s);
    }), o;
  }
  if (T(e)) {
    const o = [];
    for (let n = 0; n < e.length; n++)
      o.push(Ie(e[n], t, s, r));
    return o;
  }
}
function fs(e, t, s, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: n, throwUnhandledErrorInProduction: i } = t && t.appContext.config || $;
  if (t) {
    let l = t.parent;
    const c = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, c, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (n) {
      Ue(), Pt(n, null, 10, [
        e,
        c,
        u
      ]), Be();
      return;
    }
  }
  li(e, s, o, r, i);
}
function li(e, t, s, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const re = [];
let Ee = -1;
const lt = [];
let He = null, rt = 0;
const Co = /* @__PURE__ */ Promise.resolve();
let Gt = null;
function nr(e) {
  const t = Gt || Co;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ai(e) {
  let t = Ee + 1, s = re.length;
  for (; t < s; ) {
    const r = t + s >>> 1, o = re[r], n = Ct(o);
    n < e || n === e && o.flags & 2 ? t = r + 1 : s = r;
  }
  return t;
}
function ir(e) {
  if (!(e.flags & 1)) {
    const t = Ct(e), s = re[re.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ct(s) ? re.push(e) : re.splice(ai(t), 0, e), e.flags |= 1, To();
  }
}
function To() {
  Gt || (Gt = Co.then(Ro));
}
function ci(e) {
  T(e) ? lt.push(...e) : He && e.id === -1 ? He.splice(rt + 1, 0, e) : e.flags & 1 || (lt.push(e), e.flags |= 1), To();
}
function kr(e, t, s = Ee + 1) {
  for (; s < re.length; s++) {
    const r = re[s];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      re.splice(s, 1), s--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Ao(e) {
  if (lt.length) {
    const t = [...new Set(lt)].sort(
      (s, r) => Ct(s) - Ct(r)
    );
    if (lt.length = 0, He) {
      He.push(...t);
      return;
    }
    for (He = t, rt = 0; rt < He.length; rt++) {
      const s = He[rt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    He = null, rt = 0;
  }
}
const Ct = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ro(e) {
  try {
    for (Ee = 0; Ee < re.length; Ee++) {
      const t = re[Ee];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Pt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ee < re.length; Ee++) {
      const t = re[Ee];
      t && (t.flags &= -2);
    }
    Ee = -1, re.length = 0, Ao(), Gt = null, (re.length || lt.length) && Ro();
  }
}
let fe = null, Io = null;
function Qt(e) {
  const t = fe;
  return fe = e, Io = e && e.type.__scopeId || null, t;
}
function fi(e, t = fe, s) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Nr(-1);
    const n = Qt(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Qt(n), r._d && Nr(1);
    }
    return i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function pi(e, t) {
  if (fe === null)
    return e;
  const s = gs(fe), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [n, i, l, c = $] = t[o];
    n && (I(n) && (n = {
      mounted: n,
      updated: n
    }), n.deep && je(i), r.push({
      dir: n,
      instance: s,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function Je(e, t, s, r) {
  const o = e.dirs, n = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    n && (l.oldValue = n[i].value);
    let c = l.dir[r];
    c && (Ue(), Ie(c, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Be());
  }
}
const ui = Symbol("_vte"), hi = (e) => e.__isTeleport;
function lr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, lr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ps(e, t) {
  return I(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    G({ name: e.name }, t, { setup: e })
  ) : e;
}
function di() {
  const e = al();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function Oo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Yt(e, t, s, r, o = !1) {
  if (T(e)) {
    e.forEach(
      (O, P) => Yt(
        O,
        t && (T(t) ? t[P] : t),
        s,
        r,
        o
      )
    );
    return;
  }
  if (vt(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Yt(e, t, s, r.component.subTree);
    return;
  }
  const n = r.shapeFlag & 4 ? gs(r.component) : r.el, i = o ? null : n, { i: l, r: c } = e, u = t && t.r, a = l.refs === $ ? l.refs = {} : l.refs, d = l.setupState, _ = j(d), S = d === $ ? () => !1 : (O) => N(_, O);
  if (u != null && u !== c && (W(u) ? (a[u] = null, S(u) && (d[u] = null)) : Q(u) && (u.value = null)), I(c))
    Pt(c, l, 12, [i, a]);
  else {
    const O = W(c), P = Q(c);
    if (O || P) {
      const Y = () => {
        if (e.f) {
          const L = O ? S(c) ? d[c] : a[c] : c.value;
          o ? T(L) && Js(L, n) : T(L) ? L.includes(n) || L.push(n) : O ? (a[c] = [n], S(c) && (d[c] = a[c])) : (c.value = [n], e.k && (a[e.k] = c.value));
        } else O ? (a[c] = i, S(c) && (d[c] = i)) : P && (c.value = i, e.k && (a[e.k] = i));
      };
      i ? (Y.id = -1, ae(Y, s)) : Y();
    }
  }
}
is().requestIdleCallback;
is().cancelIdleCallback;
const vt = (e) => !!e.type.__asyncLoader, Po = (e) => e.type.__isKeepAlive;
function gi(e, t) {
  Mo(e, "a", t);
}
function mi(e, t) {
  Mo(e, "da", t);
}
function Mo(e, t, s = ee) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = s;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (us(t, r, s), s) {
    let o = s.parent;
    for (; o && o.parent; )
      Po(o.parent.vnode) && wi(r, t, s, o), o = o.parent;
  }
}
function wi(e, t, s, r) {
  const o = us(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  jo(() => {
    Js(r[t], o);
  }, s);
}
function us(e, t, s = ee, r = !1) {
  if (s) {
    const o = s[e] || (s[e] = []), n = t.__weh || (t.__weh = (...i) => {
      Ue();
      const l = Mt(s), c = Ie(t, s, e, i);
      return l(), Be(), c;
    });
    return r ? o.unshift(n) : o.push(n), n;
  }
}
const De = (e) => (t, s = ee) => {
  (!At || e === "sp") && us(e, (...r) => t(...r), s);
}, bi = De("bm"), No = De("m"), yi = De(
  "bu"
), vi = De("u"), _i = De(
  "bum"
), jo = De("um"), xi = De(
  "sp"
), Si = De("rtg"), Ei = De("rtc");
function ki(e, t = ee) {
  us("ec", e, t);
}
const Ci = Symbol.for("v-ndc");
function ar(e, t, s, r) {
  let o;
  const n = s, i = T(e);
  if (i || W(e)) {
    const l = i && it(e);
    let c = !1;
    l && (c = !ge(e), e = cs(e)), o = new Array(e.length);
    for (let u = 0, a = e.length; u < a; u++)
      o[u] = t(
        c ? Z(e[u]) : e[u],
        u,
        void 0,
        n
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, n);
  } else if (U(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, c) => t(l, c, void 0, n)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let c = 0, u = l.length; c < u; c++) {
        const a = l[c];
        o[c] = t(e[a], a, c, n);
      }
    }
  else
    o = [];
  return o;
}
const Fs = (e) => e ? nn(e) ? gs(e) : Fs(e.parent) : null, _t = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ G(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Fs(e.parent),
    $root: (e) => Fs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Do(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ir(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = nr.bind(e.proxy)),
    $watch: (e) => Wi.bind(e)
  })
), Ss = (e, t) => e !== $ && !e.__isScriptSetup && N(e, t), Ti = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: r, data: o, props: n, accessCache: i, type: l, appContext: c } = e;
    let u;
    if (t[0] !== "$") {
      const S = i[t];
      if (S !== void 0)
        switch (S) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return s[t];
          case 3:
            return n[t];
        }
      else {
        if (Ss(r, t))
          return i[t] = 1, r[t];
        if (o !== $ && N(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && N(u, t)
        )
          return i[t] = 3, n[t];
        if (s !== $ && N(s, t))
          return i[t] = 4, s[t];
        Ds && (i[t] = 0);
      }
    }
    const a = _t[t];
    let d, _;
    if (a)
      return t === "$attrs" && X(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (s !== $ && N(s, t))
      return i[t] = 4, s[t];
    if (
      // global properties
      _ = c.config.globalProperties, N(_, t)
    )
      return _[t];
  },
  set({ _: e }, t, s) {
    const { data: r, setupState: o, ctx: n } = e;
    return Ss(o, t) ? (o[t] = s, !0) : r !== $ && N(r, t) ? (r[t] = s, !0) : N(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (n[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: r, appContext: o, propsOptions: n }
  }, i) {
    let l;
    return !!s[i] || e !== $ && N(e, i) || Ss(t, i) || (l = n[0]) && N(l, i) || N(r, i) || N(_t, i) || N(o.config.globalProperties, i);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : N(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Cr(e) {
  return T(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Ds = !0;
function Ai(e) {
  const t = Do(e), s = e.proxy, r = e.ctx;
  Ds = !1, t.beforeCreate && Tr(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: n,
    methods: i,
    watch: l,
    provide: c,
    inject: u,
    // lifecycle
    created: a,
    beforeMount: d,
    mounted: _,
    beforeUpdate: S,
    updated: O,
    activated: P,
    deactivated: Y,
    beforeDestroy: L,
    beforeUnmount: q,
    destroyed: K,
    unmounted: A,
    render: J,
    renderTracked: Le,
    renderTriggered: be,
    errorCaptured: $e,
    serverPrefetch: Nt,
    // public API
    expose: qe,
    inheritAttrs: ft,
    // assets
    components: jt,
    directives: Ft,
    filters: ms
  } = t;
  if (u && Ri(u, r, null), i)
    for (const B in i) {
      const H = i[B];
      I(H) && (r[B] = H.bind(s));
    }
  if (o) {
    const B = o.call(s, s);
    U(B) && (e.data = sr(B));
  }
  if (Ds = !0, n)
    for (const B in n) {
      const H = n[B], Ke = I(H) ? H.bind(s, s) : I(H.get) ? H.get.bind(s, s) : Te, Dt = !I(H) && I(H.set) ? H.set.bind(s) : Te, We = Fe({
        get: Ke,
        set: Dt
      });
      Object.defineProperty(r, B, {
        enumerable: !0,
        configurable: !0,
        get: () => We.value,
        set: (ye) => We.value = ye
      });
    }
  if (l)
    for (const B in l)
      Fo(l[B], r, s, B);
  if (c) {
    const B = I(c) ? c.call(s) : c;
    Reflect.ownKeys(B).forEach((H) => {
      $o(H, B[H]);
    });
  }
  a && Tr(a, e, "c");
  function te(B, H) {
    T(H) ? H.forEach((Ke) => B(Ke.bind(s))) : H && B(H.bind(s));
  }
  if (te(bi, d), te(No, _), te(yi, S), te(vi, O), te(gi, P), te(mi, Y), te(ki, $e), te(Ei, Le), te(Si, be), te(_i, q), te(jo, A), te(xi, Nt), T(qe))
    if (qe.length) {
      const B = e.exposed || (e.exposed = {});
      qe.forEach((H) => {
        Object.defineProperty(B, H, {
          get: () => s[H],
          set: (Ke) => s[H] = Ke
        });
      });
    } else e.exposed || (e.exposed = {});
  J && e.render === Te && (e.render = J), ft != null && (e.inheritAttrs = ft), jt && (e.components = jt), Ft && (e.directives = Ft), Nt && Oo(e);
}
function Ri(e, t, s = Te) {
  T(e) && (e = Ls(e));
  for (const r in e) {
    const o = e[r];
    let n;
    U(o) ? "default" in o ? n = xt(
      o.from || r,
      o.default,
      !0
    ) : n = xt(o.from || r) : n = xt(o), Q(n) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    }) : t[r] = n;
  }
}
function Tr(e, t, s) {
  Ie(
    T(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Fo(e, t, s, r) {
  let o = r.includes(".") ? Xo(s, r) : () => s[r];
  if (W(e)) {
    const n = t[e];
    I(n) && Bt(o, n);
  } else if (I(e))
    Bt(o, e.bind(s));
  else if (U(e))
    if (T(e))
      e.forEach((n) => Fo(n, t, s, r));
    else {
      const n = I(e.handler) ? e.handler.bind(s) : t[e.handler];
      I(n) && Bt(o, n, e);
    }
}
function Do(e) {
  const t = e.type, { mixins: s, extends: r } = t, {
    mixins: o,
    optionsCache: n,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = n.get(t);
  let c;
  return l ? c = l : !o.length && !s && !r ? c = t : (c = {}, o.length && o.forEach(
    (u) => Xt(c, u, i, !0)
  ), Xt(c, t, i)), U(t) && n.set(t, c), c;
}
function Xt(e, t, s, r = !1) {
  const { mixins: o, extends: n } = t;
  n && Xt(e, n, s, !0), o && o.forEach(
    (i) => Xt(e, i, s, !0)
  );
  for (const i in t)
    if (!(r && i === "expose")) {
      const l = Ii[i] || s && s[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Ii = {
  data: Ar,
  props: Rr,
  emits: Rr,
  // objects
  methods: mt,
  computed: mt,
  // lifecycle
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  // assets
  components: mt,
  directives: mt,
  // watch
  watch: Pi,
  // provide / inject
  provide: Ar,
  inject: Oi
};
function Ar(e, t) {
  return t ? e ? function() {
    return G(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Oi(e, t) {
  return mt(Ls(e), Ls(t));
}
function Ls(e) {
  if (T(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function mt(e, t) {
  return e ? G(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Rr(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : G(
    /* @__PURE__ */ Object.create(null),
    Cr(e),
    Cr(t ?? {})
  ) : t;
}
function Pi(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = G(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    s[r] = se(e[r], t[r]);
  return s;
}
function Lo() {
  return {
    app: null,
    config: {
      isNativeTag: yn,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Mi = 0;
function Ni(e, t) {
  return function(r, o = null) {
    I(r) || (r = G({}, r)), o != null && !U(o) && (o = null);
    const n = Lo(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const u = n.app = {
      _uid: Mi++,
      _component: r,
      _props: o,
      _container: null,
      _context: n,
      _instance: null,
      version: dl,
      get config() {
        return n.config;
      },
      set config(a) {
      },
      use(a, ...d) {
        return i.has(a) || (a && I(a.install) ? (i.add(a), a.install(u, ...d)) : I(a) && (i.add(a), a(u, ...d))), u;
      },
      mixin(a) {
        return n.mixins.includes(a) || n.mixins.push(a), u;
      },
      component(a, d) {
        return d ? (n.components[a] = d, u) : n.components[a];
      },
      directive(a, d) {
        return d ? (n.directives[a] = d, u) : n.directives[a];
      },
      mount(a, d, _) {
        if (!c) {
          const S = u._ceVNode || Ae(r, o);
          return S.appContext = n, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), e(S, a, _), c = !0, u._container = a, a.__vue_app__ = u, gs(S.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        c && (Ie(
          l,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, d) {
        return n.provides[a] = d, u;
      },
      runWithContext(a) {
        const d = at;
        at = u;
        try {
          return a();
        } finally {
          at = d;
        }
      }
    };
    return u;
  };
}
let at = null;
function $o(e, t) {
  if (ee) {
    let s = ee.provides;
    const r = ee.parent && ee.parent.provides;
    r === s && (s = ee.provides = Object.create(r)), s[e] = t;
  }
}
function xt(e, t, s = !1) {
  const r = ee || fe;
  if (r || at) {
    const o = at ? at._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return s && I(t) ? t.call(r && r.proxy) : t;
  }
}
const Ho = {}, zo = () => Object.create(Ho), Vo = (e) => Object.getPrototypeOf(e) === Ho;
function ji(e, t, s, r = !1) {
  const o = {}, n = zo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Uo(e, t, o, n);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  s ? e.props = r ? o : Xn(o) : e.type.props ? e.props = o : e.props = n, e.attrs = n;
}
function Fi(e, t, s, r) {
  const {
    props: o,
    attrs: n,
    vnode: { patchFlag: i }
  } = e, l = j(o), [c] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const a = e.vnode.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        let _ = a[d];
        if (hs(e.emitsOptions, _))
          continue;
        const S = t[_];
        if (c)
          if (N(n, _))
            S !== n[_] && (n[_] = S, u = !0);
          else {
            const O = me(_);
            o[O] = $s(
              c,
              l,
              O,
              S,
              e,
              !1
            );
          }
        else
          S !== n[_] && (n[_] = S, u = !0);
      }
    }
  } else {
    Uo(e, t, o, n) && (u = !0);
    let a;
    for (const d in l)
      (!t || // for camelCase
      !N(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = de(d)) === d || !N(t, a))) && (c ? s && // for camelCase
      (s[d] !== void 0 || // for kebab-case
      s[a] !== void 0) && (o[d] = $s(
        c,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete o[d]);
    if (n !== l)
      for (const d in n)
        (!t || !N(t, d)) && (delete n[d], u = !0);
  }
  u && Ne(e.attrs, "set", "");
}
function Uo(e, t, s, r) {
  const [o, n] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let c in t) {
      if (wt(c))
        continue;
      const u = t[c];
      let a;
      o && N(o, a = me(c)) ? !n || !n.includes(a) ? s[a] = u : (l || (l = {}))[a] = u : hs(e.emitsOptions, c) || (!(c in r) || u !== r[c]) && (r[c] = u, i = !0);
    }
  if (n) {
    const c = j(s), u = l || $;
    for (let a = 0; a < n.length; a++) {
      const d = n[a];
      s[d] = $s(
        o,
        c,
        d,
        u[d],
        e,
        !N(u, d)
      );
    }
  }
  return i;
}
function $s(e, t, s, r, o, n) {
  const i = e[s];
  if (i != null) {
    const l = N(i, "default");
    if (l && r === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && I(c)) {
        const { propsDefaults: u } = o;
        if (s in u)
          r = u[s];
        else {
          const a = Mt(o);
          r = u[s] = c.call(
            null,
            t
          ), a();
        }
      } else
        r = c;
      o.ce && o.ce._setProp(s, r);
    }
    i[
      0
      /* shouldCast */
    ] && (n && !l ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === de(s)) && (r = !0));
  }
  return r;
}
const Di = /* @__PURE__ */ new WeakMap();
function Bo(e, t, s = !1) {
  const r = s ? Di : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const n = e.props, i = {}, l = [];
  let c = !1;
  if (!I(e)) {
    const a = (d) => {
      c = !0;
      const [_, S] = Bo(d, t, !0);
      G(i, _), S && l.push(...S);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!n && !c)
    return U(e) && r.set(e, ot), ot;
  if (T(n))
    for (let a = 0; a < n.length; a++) {
      const d = me(n[a]);
      Ir(d) && (i[d] = $);
    }
  else if (n)
    for (const a in n) {
      const d = me(a);
      if (Ir(d)) {
        const _ = n[a], S = i[d] = T(_) || I(_) ? { type: _ } : G({}, _), O = S.type;
        let P = !1, Y = !0;
        if (T(O))
          for (let L = 0; L < O.length; ++L) {
            const q = O[L], K = I(q) && q.name;
            if (K === "Boolean") {
              P = !0;
              break;
            } else K === "String" && (Y = !1);
          }
        else
          P = I(O) && O.name === "Boolean";
        S[
          0
          /* shouldCast */
        ] = P, S[
          1
          /* shouldCastTrue */
        ] = Y, (P || N(S, "default")) && l.push(d);
      }
    }
  const u = [i, l];
  return U(e) && r.set(e, u), u;
}
function Ir(e) {
  return e[0] !== "$" && !wt(e);
}
const qo = (e) => e[0] === "_" || e === "$stable", cr = (e) => T(e) ? e.map(Ce) : [Ce(e)], Li = (e, t, s) => {
  if (t._n)
    return t;
  const r = fi((...o) => cr(t(...o)), s);
  return r._c = !1, r;
}, Ko = (e, t, s) => {
  const r = e._ctx;
  for (const o in e) {
    if (qo(o)) continue;
    const n = e[o];
    if (I(n))
      t[o] = Li(o, n, r);
    else if (n != null) {
      const i = cr(n);
      t[o] = () => i;
    }
  }
}, Wo = (e, t) => {
  const s = cr(t);
  e.slots.default = () => s;
}, Jo = (e, t, s) => {
  for (const r in t)
    (s || r !== "_") && (e[r] = t[r]);
}, $i = (e, t, s) => {
  const r = e.slots = zo();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Jo(r, t, s), s && oo(r, "_", o, !0)) : Ko(t, r);
  } else t && Wo(e, t);
}, Hi = (e, t, s) => {
  const { vnode: r, slots: o } = e;
  let n = !0, i = $;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? n = !1 : Jo(o, t, s) : (n = !t.$stable, Ko(t, o)), i = t;
  } else t && (Wo(e, t), i = { default: 1 });
  if (n)
    for (const l in o)
      !qo(l) && i[l] == null && delete o[l];
}, ae = el;
function zi(e) {
  return Vi(e);
}
function Vi(e, t) {
  const s = is();
  s.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: n,
    createElement: i,
    createText: l,
    createComment: c,
    setText: u,
    setElementText: a,
    parentNode: d,
    nextSibling: _,
    setScopeId: S = Te,
    insertStaticContent: O
  } = e, P = (f, p, h, w = null, g = null, m = null, x = void 0, v = null, y = !!p.dynamicChildren) => {
    if (f === p)
      return;
    f && !gt(f, p) && (w = Lt(f), ye(f, g, m, !0), f = null), p.patchFlag === -2 && (y = !1, p.dynamicChildren = null);
    const { type: b, ref: C, shapeFlag: E } = p;
    switch (b) {
      case ds:
        Y(f, p, h, w);
        break;
      case tt:
        L(f, p, h, w);
        break;
      case ks:
        f == null && q(p, h, w, x);
        break;
      case ue:
        jt(
          f,
          p,
          h,
          w,
          g,
          m,
          x,
          v,
          y
        );
        break;
      default:
        E & 1 ? J(
          f,
          p,
          h,
          w,
          g,
          m,
          x,
          v,
          y
        ) : E & 6 ? Ft(
          f,
          p,
          h,
          w,
          g,
          m,
          x,
          v,
          y
        ) : (E & 64 || E & 128) && b.process(
          f,
          p,
          h,
          w,
          g,
          m,
          x,
          v,
          y,
          ut
        );
    }
    C != null && g && Yt(C, f && f.ref, m, p || f, !p);
  }, Y = (f, p, h, w) => {
    if (f == null)
      r(
        p.el = l(p.children),
        h,
        w
      );
    else {
      const g = p.el = f.el;
      p.children !== f.children && u(g, p.children);
    }
  }, L = (f, p, h, w) => {
    f == null ? r(
      p.el = c(p.children || ""),
      h,
      w
    ) : p.el = f.el;
  }, q = (f, p, h, w) => {
    [f.el, f.anchor] = O(
      f.children,
      p,
      h,
      w,
      f.el,
      f.anchor
    );
  }, K = ({ el: f, anchor: p }, h, w) => {
    let g;
    for (; f && f !== p; )
      g = _(f), r(f, h, w), f = g;
    r(p, h, w);
  }, A = ({ el: f, anchor: p }) => {
    let h;
    for (; f && f !== p; )
      h = _(f), o(f), f = h;
    o(p);
  }, J = (f, p, h, w, g, m, x, v, y) => {
    p.type === "svg" ? x = "svg" : p.type === "math" && (x = "mathml"), f == null ? Le(
      p,
      h,
      w,
      g,
      m,
      x,
      v,
      y
    ) : Nt(
      f,
      p,
      g,
      m,
      x,
      v,
      y
    );
  }, Le = (f, p, h, w, g, m, x, v) => {
    let y, b;
    const { props: C, shapeFlag: E, transition: k, dirs: R } = f;
    if (y = f.el = i(
      f.type,
      m,
      C && C.is,
      C
    ), E & 8 ? a(y, f.children) : E & 16 && $e(
      f.children,
      y,
      null,
      w,
      g,
      Es(f, m),
      x,
      v
    ), R && Je(f, null, w, "created"), be(y, f, f.scopeId, x, w), C) {
      for (const z in C)
        z !== "value" && !wt(z) && n(y, z, null, C[z], m, w);
      "value" in C && n(y, "value", null, C.value, m), (b = C.onVnodeBeforeMount) && Se(b, w, f);
    }
    R && Je(f, null, w, "beforeMount");
    const M = Ui(g, k);
    M && k.beforeEnter(y), r(y, p, h), ((b = C && C.onVnodeMounted) || M || R) && ae(() => {
      b && Se(b, w, f), M && k.enter(y), R && Je(f, null, w, "mounted");
    }, g);
  }, be = (f, p, h, w, g) => {
    if (h && S(f, h), w)
      for (let m = 0; m < w.length; m++)
        S(f, w[m]);
    if (g) {
      let m = g.subTree;
      if (p === m || en(m.type) && (m.ssContent === p || m.ssFallback === p)) {
        const x = g.vnode;
        be(
          f,
          x,
          x.scopeId,
          x.slotScopeIds,
          g.parent
        );
      }
    }
  }, $e = (f, p, h, w, g, m, x, v, y = 0) => {
    for (let b = y; b < f.length; b++) {
      const C = f[b] = v ? ze(f[b]) : Ce(f[b]);
      P(
        null,
        C,
        p,
        h,
        w,
        g,
        m,
        x,
        v
      );
    }
  }, Nt = (f, p, h, w, g, m, x) => {
    const v = p.el = f.el;
    let { patchFlag: y, dynamicChildren: b, dirs: C } = p;
    y |= f.patchFlag & 16;
    const E = f.props || $, k = p.props || $;
    let R;
    if (h && Ge(h, !1), (R = k.onVnodeBeforeUpdate) && Se(R, h, p, f), C && Je(p, f, h, "beforeUpdate"), h && Ge(h, !0), (E.innerHTML && k.innerHTML == null || E.textContent && k.textContent == null) && a(v, ""), b ? qe(
      f.dynamicChildren,
      b,
      v,
      h,
      w,
      Es(p, g),
      m
    ) : x || H(
      f,
      p,
      v,
      null,
      h,
      w,
      Es(p, g),
      m,
      !1
    ), y > 0) {
      if (y & 16)
        ft(v, E, k, h, g);
      else if (y & 2 && E.class !== k.class && n(v, "class", null, k.class, g), y & 4 && n(v, "style", E.style, k.style, g), y & 8) {
        const M = p.dynamicProps;
        for (let z = 0; z < M.length; z++) {
          const F = M[z], ie = E[F], oe = k[F];
          (oe !== ie || F === "value") && n(v, F, ie, oe, g, h);
        }
      }
      y & 1 && f.children !== p.children && a(v, p.children);
    } else !x && b == null && ft(v, E, k, h, g);
    ((R = k.onVnodeUpdated) || C) && ae(() => {
      R && Se(R, h, p, f), C && Je(p, f, h, "updated");
    }, w);
  }, qe = (f, p, h, w, g, m, x) => {
    for (let v = 0; v < p.length; v++) {
      const y = f[v], b = p[v], C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !gt(y, b) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? d(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      P(
        y,
        b,
        C,
        null,
        w,
        g,
        m,
        x,
        !0
      );
    }
  }, ft = (f, p, h, w, g) => {
    if (p !== h) {
      if (p !== $)
        for (const m in p)
          !wt(m) && !(m in h) && n(
            f,
            m,
            p[m],
            null,
            g,
            w
          );
      for (const m in h) {
        if (wt(m)) continue;
        const x = h[m], v = p[m];
        x !== v && m !== "value" && n(f, m, v, x, g, w);
      }
      "value" in h && n(f, "value", p.value, h.value, g);
    }
  }, jt = (f, p, h, w, g, m, x, v, y) => {
    const b = p.el = f ? f.el : l(""), C = p.anchor = f ? f.anchor : l("");
    let { patchFlag: E, dynamicChildren: k, slotScopeIds: R } = p;
    R && (v = v ? v.concat(R) : R), f == null ? (r(b, h, w), r(C, h, w), $e(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      h,
      C,
      g,
      m,
      x,
      v,
      y
    )) : E > 0 && E & 64 && k && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren ? (qe(
      f.dynamicChildren,
      k,
      h,
      g,
      m,
      x,
      v
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || g && p === g.subTree) && Go(
      f,
      p,
      !0
      /* shallow */
    )) : H(
      f,
      p,
      h,
      C,
      g,
      m,
      x,
      v,
      y
    );
  }, Ft = (f, p, h, w, g, m, x, v, y) => {
    p.slotScopeIds = v, f == null ? p.shapeFlag & 512 ? g.ctx.activate(
      p,
      h,
      w,
      x,
      y
    ) : ms(
      p,
      h,
      w,
      g,
      m,
      x,
      y
    ) : gr(f, p, y);
  }, ms = (f, p, h, w, g, m, x) => {
    const v = f.component = ll(
      f,
      w,
      g
    );
    if (Po(f) && (v.ctx.renderer = ut), cl(v, !1, x), v.asyncDep) {
      if (g && g.registerDep(v, te, x), !f.el) {
        const y = v.subTree = Ae(tt);
        L(null, y, p, h);
      }
    } else
      te(
        v,
        f,
        p,
        h,
        g,
        m,
        x
      );
  }, gr = (f, p, h) => {
    const w = p.component = f.component;
    if (Xi(f, p, h))
      if (w.asyncDep && !w.asyncResolved) {
        B(w, p, h);
        return;
      } else
        w.next = p, w.update();
    else
      p.el = f.el, w.vnode = p;
  }, te = (f, p, h, w, g, m, x) => {
    const v = () => {
      if (f.isMounted) {
        let { next: E, bu: k, u: R, parent: M, vnode: z } = f;
        {
          const _e = Qo(f);
          if (_e) {
            E && (E.el = z.el, B(f, E, x)), _e.asyncDep.then(() => {
              f.isUnmounted || v();
            });
            return;
          }
        }
        let F = E, ie;
        Ge(f, !1), E ? (E.el = z.el, B(f, E, x)) : E = z, k && Ut(k), (ie = E.props && E.props.onVnodeBeforeUpdate) && Se(ie, M, E, z), Ge(f, !0);
        const oe = Pr(f), ve = f.subTree;
        f.subTree = oe, P(
          ve,
          oe,
          // parent may have changed if it's in a teleport
          d(ve.el),
          // anchor may have changed if it's in a fragment
          Lt(ve),
          f,
          g,
          m
        ), E.el = oe.el, F === null && Zi(f, oe.el), R && ae(R, g), (ie = E.props && E.props.onVnodeUpdated) && ae(
          () => Se(ie, M, E, z),
          g
        );
      } else {
        let E;
        const { el: k, props: R } = p, { bm: M, m: z, parent: F, root: ie, type: oe } = f, ve = vt(p);
        Ge(f, !1), M && Ut(M), !ve && (E = R && R.onVnodeBeforeMount) && Se(E, F, p), Ge(f, !0);
        {
          ie.ce && ie.ce._injectChildStyle(oe);
          const _e = f.subTree = Pr(f);
          P(
            null,
            _e,
            h,
            w,
            f,
            g,
            m
          ), p.el = _e.el;
        }
        if (z && ae(z, g), !ve && (E = R && R.onVnodeMounted)) {
          const _e = p;
          ae(
            () => Se(E, F, _e),
            g
          );
        }
        (p.shapeFlag & 256 || F && vt(F.vnode) && F.vnode.shapeFlag & 256) && f.a && ae(f.a, g), f.isMounted = !0, p = h = w = null;
      }
    };
    f.scope.on();
    const y = f.effect = new co(v);
    f.scope.off();
    const b = f.update = y.run.bind(y), C = f.job = y.runIfDirty.bind(y);
    C.i = f, C.id = f.uid, y.scheduler = () => ir(C), Ge(f, !0), b();
  }, B = (f, p, h) => {
    p.component = f;
    const w = f.vnode.props;
    f.vnode = p, f.next = null, Fi(f, p.props, w, h), Hi(f, p.children, h), Ue(), kr(f), Be();
  }, H = (f, p, h, w, g, m, x, v, y = !1) => {
    const b = f && f.children, C = f ? f.shapeFlag : 0, E = p.children, { patchFlag: k, shapeFlag: R } = p;
    if (k > 0) {
      if (k & 128) {
        Dt(
          b,
          E,
          h,
          w,
          g,
          m,
          x,
          v,
          y
        );
        return;
      } else if (k & 256) {
        Ke(
          b,
          E,
          h,
          w,
          g,
          m,
          x,
          v,
          y
        );
        return;
      }
    }
    R & 8 ? (C & 16 && pt(b, g, m), E !== b && a(h, E)) : C & 16 ? R & 16 ? Dt(
      b,
      E,
      h,
      w,
      g,
      m,
      x,
      v,
      y
    ) : pt(b, g, m, !0) : (C & 8 && a(h, ""), R & 16 && $e(
      E,
      h,
      w,
      g,
      m,
      x,
      v,
      y
    ));
  }, Ke = (f, p, h, w, g, m, x, v, y) => {
    f = f || ot, p = p || ot;
    const b = f.length, C = p.length, E = Math.min(b, C);
    let k;
    for (k = 0; k < E; k++) {
      const R = p[k] = y ? ze(p[k]) : Ce(p[k]);
      P(
        f[k],
        R,
        h,
        null,
        g,
        m,
        x,
        v,
        y
      );
    }
    b > C ? pt(
      f,
      g,
      m,
      !0,
      !1,
      E
    ) : $e(
      p,
      h,
      w,
      g,
      m,
      x,
      v,
      y,
      E
    );
  }, Dt = (f, p, h, w, g, m, x, v, y) => {
    let b = 0;
    const C = p.length;
    let E = f.length - 1, k = C - 1;
    for (; b <= E && b <= k; ) {
      const R = f[b], M = p[b] = y ? ze(p[b]) : Ce(p[b]);
      if (gt(R, M))
        P(
          R,
          M,
          h,
          null,
          g,
          m,
          x,
          v,
          y
        );
      else
        break;
      b++;
    }
    for (; b <= E && b <= k; ) {
      const R = f[E], M = p[k] = y ? ze(p[k]) : Ce(p[k]);
      if (gt(R, M))
        P(
          R,
          M,
          h,
          null,
          g,
          m,
          x,
          v,
          y
        );
      else
        break;
      E--, k--;
    }
    if (b > E) {
      if (b <= k) {
        const R = k + 1, M = R < C ? p[R].el : w;
        for (; b <= k; )
          P(
            null,
            p[b] = y ? ze(p[b]) : Ce(p[b]),
            h,
            M,
            g,
            m,
            x,
            v,
            y
          ), b++;
      }
    } else if (b > k)
      for (; b <= E; )
        ye(f[b], g, m, !0), b++;
    else {
      const R = b, M = b, z = /* @__PURE__ */ new Map();
      for (b = M; b <= k; b++) {
        const le = p[b] = y ? ze(p[b]) : Ce(p[b]);
        le.key != null && z.set(le.key, b);
      }
      let F, ie = 0;
      const oe = k - M + 1;
      let ve = !1, _e = 0;
      const ht = new Array(oe);
      for (b = 0; b < oe; b++) ht[b] = 0;
      for (b = R; b <= E; b++) {
        const le = f[b];
        if (ie >= oe) {
          ye(le, g, m, !0);
          continue;
        }
        let xe;
        if (le.key != null)
          xe = z.get(le.key);
        else
          for (F = M; F <= k; F++)
            if (ht[F - M] === 0 && gt(le, p[F])) {
              xe = F;
              break;
            }
        xe === void 0 ? ye(le, g, m, !0) : (ht[xe - M] = b + 1, xe >= _e ? _e = xe : ve = !0, P(
          le,
          p[xe],
          h,
          null,
          g,
          m,
          x,
          v,
          y
        ), ie++);
      }
      const br = ve ? Bi(ht) : ot;
      for (F = br.length - 1, b = oe - 1; b >= 0; b--) {
        const le = M + b, xe = p[le], yr = le + 1 < C ? p[le + 1].el : w;
        ht[b] === 0 ? P(
          null,
          xe,
          h,
          yr,
          g,
          m,
          x,
          v,
          y
        ) : ve && (F < 0 || b !== br[F] ? We(xe, h, yr, 2) : F--);
      }
    }
  }, We = (f, p, h, w, g = null) => {
    const { el: m, type: x, transition: v, children: y, shapeFlag: b } = f;
    if (b & 6) {
      We(f.component.subTree, p, h, w);
      return;
    }
    if (b & 128) {
      f.suspense.move(p, h, w);
      return;
    }
    if (b & 64) {
      x.move(f, p, h, ut);
      return;
    }
    if (x === ue) {
      r(m, p, h);
      for (let E = 0; E < y.length; E++)
        We(y[E], p, h, w);
      r(f.anchor, p, h);
      return;
    }
    if (x === ks) {
      K(f, p, h);
      return;
    }
    if (w !== 2 && b & 1 && v)
      if (w === 0)
        v.beforeEnter(m), r(m, p, h), ae(() => v.enter(m), g);
      else {
        const { leave: E, delayLeave: k, afterLeave: R } = v, M = () => r(m, p, h), z = () => {
          E(m, () => {
            M(), R && R();
          });
        };
        k ? k(m, M, z) : z();
      }
    else
      r(m, p, h);
  }, ye = (f, p, h, w = !1, g = !1) => {
    const {
      type: m,
      props: x,
      ref: v,
      children: y,
      dynamicChildren: b,
      shapeFlag: C,
      patchFlag: E,
      dirs: k,
      cacheIndex: R
    } = f;
    if (E === -2 && (g = !1), v != null && Yt(v, null, h, f, !0), R != null && (p.renderCache[R] = void 0), C & 256) {
      p.ctx.deactivate(f);
      return;
    }
    const M = C & 1 && k, z = !vt(f);
    let F;
    if (z && (F = x && x.onVnodeBeforeUnmount) && Se(F, p, f), C & 6)
      bn(f.component, h, w);
    else {
      if (C & 128) {
        f.suspense.unmount(h, w);
        return;
      }
      M && Je(f, null, p, "beforeUnmount"), C & 64 ? f.type.remove(
        f,
        p,
        h,
        ut,
        w
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== ue || E > 0 && E & 64) ? pt(
        b,
        p,
        h,
        !1,
        !0
      ) : (m === ue && E & 384 || !g && C & 16) && pt(y, p, h), w && mr(f);
    }
    (z && (F = x && x.onVnodeUnmounted) || M) && ae(() => {
      F && Se(F, p, f), M && Je(f, null, p, "unmounted");
    }, h);
  }, mr = (f) => {
    const { type: p, el: h, anchor: w, transition: g } = f;
    if (p === ue) {
      wn(h, w);
      return;
    }
    if (p === ks) {
      A(f);
      return;
    }
    const m = () => {
      o(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (f.shapeFlag & 1 && g && !g.persisted) {
      const { leave: x, delayLeave: v } = g, y = () => x(h, m);
      v ? v(f.el, m, y) : y();
    } else
      m();
  }, wn = (f, p) => {
    let h;
    for (; f !== p; )
      h = _(f), o(f), f = h;
    o(p);
  }, bn = (f, p, h) => {
    const { bum: w, scope: g, job: m, subTree: x, um: v, m: y, a: b } = f;
    Or(y), Or(b), w && Ut(w), g.stop(), m && (m.flags |= 8, ye(x, f, p, h)), v && ae(v, p), ae(() => {
      f.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve());
  }, pt = (f, p, h, w = !1, g = !1, m = 0) => {
    for (let x = m; x < f.length; x++)
      ye(f[x], p, h, w, g);
  }, Lt = (f) => {
    if (f.shapeFlag & 6)
      return Lt(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const p = _(f.anchor || f.el), h = p && p[ui];
    return h ? _(h) : p;
  };
  let ws = !1;
  const wr = (f, p, h) => {
    f == null ? p._vnode && ye(p._vnode, null, null, !0) : P(
      p._vnode || null,
      f,
      p,
      null,
      null,
      null,
      h
    ), p._vnode = f, ws || (ws = !0, kr(), Ao(), ws = !1);
  }, ut = {
    p: P,
    um: ye,
    m: We,
    r: mr,
    mt: ms,
    mc: $e,
    pc: H,
    pbc: qe,
    n: Lt,
    o: e
  };
  return {
    render: wr,
    hydrate: void 0,
    createApp: Ni(wr)
  };
}
function Es({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Ge({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ui(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Go(e, t, s = !1) {
  const r = e.children, o = t.children;
  if (T(r) && T(o))
    for (let n = 0; n < r.length; n++) {
      const i = r[n];
      let l = o[n];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[n] = ze(o[n]), l.el = i.el), !s && l.patchFlag !== -2 && Go(i, l)), l.type === ds && (l.el = i.el);
    }
}
function Bi(e) {
  const t = e.slice(), s = [0];
  let r, o, n, i, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const u = e[r];
    if (u !== 0) {
      if (o = s[s.length - 1], e[o] < u) {
        t[r] = o, s.push(r);
        continue;
      }
      for (n = 0, i = s.length - 1; n < i; )
        l = n + i >> 1, e[s[l]] < u ? n = l + 1 : i = l;
      u < e[s[n]] && (n > 0 && (t[r] = s[n - 1]), s[n] = r);
    }
  }
  for (n = s.length, i = s[n - 1]; n-- > 0; )
    s[n] = i, i = t[i];
  return s;
}
function Qo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Qo(t);
}
function Or(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const qi = Symbol.for("v-scx"), Ki = () => xt(qi);
function Bt(e, t, s) {
  return Yo(e, t, s);
}
function Yo(e, t, s = $) {
  const { immediate: r, deep: o, flush: n, once: i } = s, l = G({}, s), c = t && r || !t && n !== "post";
  let u;
  if (At) {
    if (n === "sync") {
      const S = Ki();
      u = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!c) {
      const S = () => {
      };
      return S.stop = Te, S.resume = Te, S.pause = Te, S;
    }
  }
  const a = ee;
  l.call = (S, O, P) => Ie(S, a, O, P);
  let d = !1;
  n === "post" ? l.scheduler = (S) => {
    ae(S, a && a.suspense);
  } : n !== "sync" && (d = !0, l.scheduler = (S, O) => {
    O ? S() : ir(S);
  }), l.augmentJob = (S) => {
    t && (S.flags |= 4), d && (S.flags |= 2, a && (S.id = a.uid, S.i = a));
  };
  const _ = ii(e, t, l);
  return At && (u ? u.push(_) : c && _()), _;
}
function Wi(e, t, s) {
  const r = this.proxy, o = W(e) ? e.includes(".") ? Xo(r, e) : () => r[e] : e.bind(r, r);
  let n;
  I(t) ? n = t : (n = t.handler, s = t);
  const i = Mt(this), l = Yo(o, n.bind(r), s);
  return i(), l;
}
function Xo(e, t) {
  const s = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < s.length && r; o++)
      r = r[s[o]];
    return r;
  };
}
const Ji = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${me(t)}Modifiers`] || e[`${de(t)}Modifiers`];
function Gi(e, t, ...s) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || $;
  let o = s;
  const n = t.startsWith("update:"), i = n && Ji(r, t.slice(7));
  i && (i.trim && (o = s.map((a) => W(a) ? a.trim() : a)), i.number && (o = s.map(no)));
  let l, c = r[l = bs(t)] || // also try camelCase event handler (#2249)
  r[l = bs(me(t))];
  !c && n && (c = r[l = bs(de(t))]), c && Ie(
    c,
    e,
    6,
    o
  );
  const u = r[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ie(
      u,
      e,
      6,
      o
    );
  }
}
function Zo(e, t, s = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const n = e.emits;
  let i = {}, l = !1;
  if (!I(e)) {
    const c = (u) => {
      const a = Zo(u, t, !0);
      a && (l = !0, G(i, a));
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !n && !l ? (U(e) && r.set(e, null), null) : (T(n) ? n.forEach((c) => i[c] = null) : G(i, n), U(e) && r.set(e, i), i);
}
function hs(e, t) {
  return !e || !ss(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), N(e, t[0].toLowerCase() + t.slice(1)) || N(e, de(t)) || N(e, t));
}
function Pr(e) {
  const {
    type: t,
    vnode: s,
    proxy: r,
    withProxy: o,
    propsOptions: [n],
    slots: i,
    attrs: l,
    emit: c,
    render: u,
    renderCache: a,
    props: d,
    data: _,
    setupState: S,
    ctx: O,
    inheritAttrs: P
  } = e, Y = Qt(e);
  let L, q;
  try {
    if (s.shapeFlag & 4) {
      const A = o || r, J = A;
      L = Ce(
        u.call(
          J,
          A,
          a,
          d,
          S,
          _,
          O
        )
      ), q = l;
    } else {
      const A = t;
      L = Ce(
        A.length > 1 ? A(
          d,
          { attrs: l, slots: i, emit: c }
        ) : A(
          d,
          null
        )
      ), q = t.props ? l : Qi(l);
    }
  } catch (A) {
    St.length = 0, fs(A, e, 1), L = Ae(tt);
  }
  let K = L;
  if (q && P !== !1) {
    const A = Object.keys(q), { shapeFlag: J } = K;
    A.length && J & 7 && (n && A.some(Ws) && (q = Yi(
      q,
      n
    )), K = ct(K, q, !1, !0));
  }
  return s.dirs && (K = ct(K, null, !1, !0), K.dirs = K.dirs ? K.dirs.concat(s.dirs) : s.dirs), s.transition && lr(K, s.transition), L = K, Qt(Y), L;
}
const Qi = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || ss(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Yi = (e, t) => {
  const s = {};
  for (const r in e)
    (!Ws(r) || !(r.slice(9) in t)) && (s[r] = e[r]);
  return s;
};
function Xi(e, t, s) {
  const { props: r, children: o, component: n } = e, { props: i, children: l, patchFlag: c } = t, u = n.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? Mr(r, i, u) : !!i;
    if (c & 8) {
      const a = t.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        const _ = a[d];
        if (i[_] !== r[_] && !hs(u, _))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : r === i ? !1 : r ? i ? Mr(r, i, u) : !0 : !!i;
  return !1;
}
function Mr(e, t, s) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const n = r[o];
    if (t[n] !== e[n] && !hs(s, n))
      return !0;
  }
  return !1;
}
function Zi({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const en = (e) => e.__isSuspense;
function el(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : ci(e);
}
const ue = Symbol.for("v-fgt"), ds = Symbol.for("v-txt"), tt = Symbol.for("v-cmt"), ks = Symbol.for("v-stc"), St = [];
let pe = null;
function ne(e = !1) {
  St.push(pe = e ? null : []);
}
function tl() {
  St.pop(), pe = St[St.length - 1] || null;
}
let Tt = 1;
function Nr(e, t = !1) {
  Tt += e, e < 0 && pe && t && (pe.hasOnce = !0);
}
function tn(e) {
  return e.dynamicChildren = Tt > 0 ? pe || ot : null, tl(), Tt > 0 && pe && pe.push(e), e;
}
function he(e, t, s, r, o, n) {
  return tn(
    D(
      e,
      t,
      s,
      r,
      o,
      n,
      !0
    )
  );
}
function sn(e, t, s, r, o) {
  return tn(
    Ae(
      e,
      t,
      s,
      r,
      o,
      !0
    )
  );
}
function rn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function gt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const on = ({ key: e }) => e ?? null, qt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? W(e) || Q(e) || I(e) ? { i: fe, r: e, k: t, f: !!s } : e : null);
function D(e, t = null, s = null, r = 0, o = null, n = e === ue ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && on(t),
    ref: t && qt(t),
    scopeId: Io,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: n,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: fe
  };
  return l ? (fr(c, s), n & 128 && e.normalize(c)) : s && (c.shapeFlag |= W(s) ? 8 : 16), Tt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  pe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || n & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && pe.push(c), c;
}
const Ae = sl;
function sl(e, t = null, s = null, r = 0, o = null, n = !1) {
  if ((!e || e === Ci) && (e = tt), rn(e)) {
    const l = ct(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && fr(l, s), Tt > 0 && !n && pe && (l.shapeFlag & 6 ? pe[pe.indexOf(e)] = l : pe.push(l)), l.patchFlag = -2, l;
  }
  if (hl(e) && (e = e.__vccOpts), t) {
    t = rl(t);
    let { class: l, style: c } = t;
    l && !W(l) && (t.class = ls(l)), U(c) && (or(c) && !T(c) && (c = G({}, c)), t.style = Qs(c));
  }
  const i = W(e) ? 1 : en(e) ? 128 : hi(e) ? 64 : U(e) ? 4 : I(e) ? 2 : 0;
  return D(
    e,
    t,
    s,
    r,
    o,
    i,
    n,
    !0
  );
}
function rl(e) {
  return e ? or(e) || Vo(e) ? G({}, e) : e : null;
}
function ct(e, t, s = !1, r = !1) {
  const { props: o, ref: n, patchFlag: i, children: l, transition: c } = e, u = t ? ol(o || {}, t) : o, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && on(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && n ? T(n) ? n.concat(qt(t)) : [n, qt(t)] : qt(t)
    ) : n,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ue ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ct(e.ssContent),
    ssFallback: e.ssFallback && ct(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && lr(
    a,
    c.clone(a)
  ), a;
}
function Pe(e = " ", t = 0) {
  return Ae(ds, null, e, t);
}
function Kt(e = "", t = !1) {
  return t ? (ne(), sn(tt, null, e)) : Ae(tt, null, e);
}
function Ce(e) {
  return e == null || typeof e == "boolean" ? Ae(tt) : T(e) ? Ae(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : rn(e) ? ze(e) : Ae(ds, null, String(e));
}
function ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ct(e);
}
function fr(e, t) {
  let s = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (T(t))
    s = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), fr(e, o()), o._c && (o._d = !0));
      return;
    } else {
      s = 32;
      const o = t._;
      !o && !Vo(t) ? t._ctx = fe : o === 3 && fe && (fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else I(t) ? (t = { default: t, _ctx: fe }, s = 32) : (t = String(t), r & 64 ? (s = 16, t = [Pe(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function ol(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = ls([t.class, r.class]));
      else if (o === "style")
        t.style = Qs([t.style, r.style]);
      else if (ss(o)) {
        const n = t[o], i = r[o];
        i && n !== i && !(T(n) && n.includes(i)) && (t[o] = n ? [].concat(n, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Se(e, t, s, r = null) {
  Ie(e, t, 7, [
    s,
    r
  ]);
}
const nl = Lo();
let il = 0;
function ll(e, t, s) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || nl, n = {
    uid: il++,
    vnode: e,
    type: r,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Pn(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Bo(r, o),
    emitsOptions: Zo(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: $,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: $,
    data: $,
    props: $,
    attrs: $,
    slots: $,
    refs: $,
    setupState: $,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return n.ctx = { _: n }, n.root = t ? t.root : n, n.emit = Gi.bind(null, n), e.ce && e.ce(n), n;
}
let ee = null;
const al = () => ee || fe;
let Zt, Hs;
{
  const e = is(), t = (s, r) => {
    let o;
    return (o = e[s]) || (o = e[s] = []), o.push(r), (n) => {
      o.length > 1 ? o.forEach((i) => i(n)) : o[0](n);
    };
  };
  Zt = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ee = s
  ), Hs = t(
    "__VUE_SSR_SETTERS__",
    (s) => At = s
  );
}
const Mt = (e) => {
  const t = ee;
  return Zt(e), e.scope.on(), () => {
    e.scope.off(), Zt(t);
  };
}, jr = () => {
  ee && ee.scope.off(), Zt(null);
};
function nn(e) {
  return e.vnode.shapeFlag & 4;
}
let At = !1;
function cl(e, t = !1, s = !1) {
  t && Hs(t);
  const { props: r, children: o } = e.vnode, n = nn(e);
  ji(e, r, n, t), $i(e, o, s);
  const i = n ? fl(e, t) : void 0;
  return t && Hs(!1), i;
}
function fl(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ti);
  const { setup: r } = s;
  if (r) {
    Ue();
    const o = e.setupContext = r.length > 1 ? ul(e) : null, n = Mt(e), i = Pt(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), l = to(i);
    if (Be(), n(), (l || e.sp) && !vt(e) && Oo(e), l) {
      if (i.then(jr, jr), t)
        return i.then((c) => {
          Fr(e, c);
        }).catch((c) => {
          fs(c, e, 0);
        });
      e.asyncDep = i;
    } else
      Fr(e, i);
  } else
    ln(e);
}
function Fr(e, t, s) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : U(t) && (e.setupState = ko(t)), ln(e);
}
function ln(e, t, s) {
  const r = e.type;
  e.render || (e.render = r.render || Te);
  {
    const o = Mt(e);
    Ue();
    try {
      Ai(e);
    } finally {
      Be(), o();
    }
  }
}
const pl = {
  get(e, t) {
    return X(e, "get", ""), e[t];
  }
};
function ul(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, pl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function gs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ko(Zn(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in _t)
        return _t[s](e);
    },
    has(t, s) {
      return s in t || s in _t;
    }
  })) : e.proxy;
}
function hl(e) {
  return I(e) && "__vccOpts" in e;
}
const Fe = (e, t) => oi(e, t, At), dl = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let zs;
const Dr = typeof window < "u" && window.trustedTypes;
if (Dr)
  try {
    zs = /* @__PURE__ */ Dr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const an = zs ? (e) => zs.createHTML(e) : (e) => e, gl = "http://www.w3.org/2000/svg", ml = "http://www.w3.org/1998/Math/MathML", Me = typeof document < "u" ? document : null, Lr = Me && /* @__PURE__ */ Me.createElement("template"), wl = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, r) => {
    const o = t === "svg" ? Me.createElementNS(gl, e) : t === "mathml" ? Me.createElementNS(ml, e) : s ? Me.createElement(e, { is: s }) : Me.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Me.createTextNode(e),
  createComment: (e) => Me.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Me.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, r, o, n) {
    const i = s ? s.previousSibling : t.lastChild;
    if (o && (o === n || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), s), !(o === n || !(o = o.nextSibling)); )
        ;
    else {
      Lr.innerHTML = an(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Lr.content;
      if (r === "svg" || r === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, s);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, bl = Symbol("_vtc");
function yl(e, t, s) {
  const r = e[bl];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const $r = Symbol("_vod"), vl = Symbol("_vsh"), _l = Symbol(""), xl = /(^|;)\s*display\s*:/;
function Sl(e, t, s) {
  const r = e.style, o = W(s);
  let n = !1;
  if (s && !o) {
    if (t)
      if (W(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          s[l] == null && Wt(r, l, "");
        }
      else
        for (const i in t)
          s[i] == null && Wt(r, i, "");
    for (const i in s)
      i === "display" && (n = !0), Wt(r, i, s[i]);
  } else if (o) {
    if (t !== s) {
      const i = r[_l];
      i && (s += ";" + i), r.cssText = s, n = xl.test(s);
    }
  } else t && e.removeAttribute("style");
  $r in e && (e[$r] = n ? r.display : "", e[vl] && (r.display = "none"));
}
const Hr = /\s*!important$/;
function Wt(e, t, s) {
  if (T(s))
    s.forEach((r) => Wt(e, t, r));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const r = El(e, t);
    Hr.test(s) ? e.setProperty(
      de(r),
      s.replace(Hr, ""),
      "important"
    ) : e[r] = s;
  }
}
const zr = ["Webkit", "Moz", "ms"], Cs = {};
function El(e, t) {
  const s = Cs[t];
  if (s)
    return s;
  let r = me(t);
  if (r !== "filter" && r in e)
    return Cs[t] = r;
  r = ro(r);
  for (let o = 0; o < zr.length; o++) {
    const n = zr[o] + r;
    if (n in e)
      return Cs[t] = n;
  }
  return t;
}
const Vr = "http://www.w3.org/1999/xlink";
function Ur(e, t, s, r, o, n = Rn(t)) {
  r && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Vr, t.slice(6, t.length)) : e.setAttributeNS(Vr, t, s) : s == null || n && !io(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    n ? "" : Re(s) ? String(s) : s
  );
}
function Br(e, t, s, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? an(s) : s);
    return;
  }
  const n = e.tagName;
  if (t === "value" && n !== "PROGRESS" && // custom elements may use _value internally
  !n.includes("-")) {
    const l = n === "OPTION" ? e.getAttribute("value") || "" : e.value, c = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== c || !("_value" in e)) && (e.value = c), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let i = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean" ? s = io(s) : s == null && l === "string" ? (s = "", i = !0) : l === "number" && (s = 0, i = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  i && e.removeAttribute(o || t);
}
function cn(e, t, s, r) {
  e.addEventListener(t, s, r);
}
function kl(e, t, s, r) {
  e.removeEventListener(t, s, r);
}
const qr = Symbol("_vei");
function Cl(e, t, s, r, o = null) {
  const n = e[qr] || (e[qr] = {}), i = n[t];
  if (r && i)
    i.value = r;
  else {
    const [l, c] = Tl(t);
    if (r) {
      const u = n[t] = Il(
        r,
        o
      );
      cn(e, l, u, c);
    } else i && (kl(e, l, i, c), n[t] = void 0);
  }
}
const Kr = /(?:Once|Passive|Capture)$/;
function Tl(e) {
  let t;
  if (Kr.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Kr); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : de(e.slice(2)), t];
}
let Ts = 0;
const Al = /* @__PURE__ */ Promise.resolve(), Rl = () => Ts || (Al.then(() => Ts = 0), Ts = Date.now());
function Il(e, t) {
  const s = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= s.attached)
      return;
    Ie(
      Ol(r, s.value),
      t,
      5,
      [r]
    );
  };
  return s.value = e, s.attached = Rl(), s;
}
function Ol(e, t) {
  if (T(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const Wr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Pl = (e, t, s, r, o, n) => {
  const i = o === "svg";
  t === "class" ? yl(e, r, i) : t === "style" ? Sl(e, s, r) : ss(t) ? Ws(t) || Cl(e, t, s, r, n) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ml(e, t, r, i)) ? (Br(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ur(e, t, r, i, n, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !W(r)) ? Br(e, me(t), r, n, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ur(e, t, r, i));
};
function Ml(e, t, s, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Wr(t) && I(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Wr(t) && W(s) ? !1 : t in e;
}
const Jr = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function fn(e, t, s) {
  const r = /* @__PURE__ */ ps(e, t);
  os(r) && G(r, t);
  class o extends pr {
    constructor(i) {
      super(r, i, s);
    }
  }
  return o.def = r, o;
}
const Nl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class pr extends Nl {
  constructor(t, s = {}, r = Xr) {
    super(), this._def = t, this._props = s, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== Xr ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof pr) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._instance.provides = t._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, nr(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name);
    this._ob = new MutationObserver((r) => {
      for (const o of r)
        this._setAttr(o.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (r, o = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: n, styles: i } = r;
      let l;
      if (n && !T(n))
        for (const c in n) {
          const u = n[c];
          (u === Number || u && u.type === Number) && (c in this._props && (this._props[c] = _r(this._props[c])), (l || (l = /* @__PURE__ */ Object.create(null)))[me(c)] = !0);
        }
      this._numberProps = l, o && this._resolveProps(r), this.shadowRoot && this._applyStyles(i), this._mount(r);
    }, s = this._def.__asyncLoader;
    s ? this._pendingResolve = s().then(
      (r) => t(this._def = r, !0)
    ) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const s = this._instance && this._instance.exposed;
    if (s)
      for (const r in s)
        N(this, r) || Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Ye(s[r])
        });
  }
  _resolveProps(t) {
    const { props: s } = t, r = T(s) ? s : Object.keys(s || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && r.includes(o) && this._setProp(o, this[o]);
    for (const o of r.map(me))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(n) {
          this._setProp(o, n, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const s = this.hasAttribute(t);
    let r = s ? this.getAttribute(t) : Jr;
    const o = me(t);
    s && this._numberProps && this._numberProps[o] && (r = _r(r)), this._setProp(o, r, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, s, r = !0, o = !1) {
    if (s !== this._props[t] && (s === Jr ? delete this._props[t] : (this._props[t] = s, t === "key" && this._app && (this._app._ceVNode.key = s)), o && this._instance && this._update(), r)) {
      const n = this._ob;
      n && n.disconnect(), s === !0 ? this.setAttribute(de(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(de(t), s + "") : s || this.removeAttribute(de(t)), n && n.observe(this, { attributes: !0 });
    }
  }
  _update() {
    Dl(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const s = Ae(this._def, G(t, this._props));
    return this._instance || (s.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0;
      const o = (n, i) => {
        this.dispatchEvent(
          new CustomEvent(
            n,
            os(i[0]) ? G({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      r.emit = (n, ...i) => {
        o(n, i), de(n) !== n && o(de(n), i);
      }, this._setParent();
    }), s;
  }
  _applyStyles(t, s) {
    if (!t) return;
    if (s) {
      if (s === this._def || this._styleChildren.has(s))
        return;
      this._styleChildren.add(s);
    }
    const r = this._nonce;
    for (let o = t.length - 1; o >= 0; o--) {
      const n = document.createElement("style");
      r && n.setAttribute("nonce", r), n.textContent = t[o], this.shadowRoot.prepend(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let s;
    for (; s = this.firstChild; ) {
      const r = s.nodeType === 1 && s.getAttribute("slot") || "default";
      (t[r] || (t[r] = [])).push(s), this.removeChild(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), s = this._instance.type.__scopeId;
    for (let r = 0; r < t.length; r++) {
      const o = t[r], n = o.getAttribute("name") || "default", i = this._slots[n], l = o.parentNode;
      if (i)
        for (const c of i) {
          if (s && c.nodeType === 1) {
            const u = s + "-s", a = document.createTreeWalker(c, 1);
            c.setAttribute(u, "");
            let d;
            for (; d = a.nextNode(); )
              d.setAttribute(u, "");
          }
          l.insertBefore(c, o);
        }
      else
        for (; o.firstChild; ) l.insertBefore(o.firstChild, o);
      l.removeChild(o);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
const Gr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return T(t) ? (s) => Ut(t, s) : t;
}, As = Symbol("_assign"), jl = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: s } }, r) {
    const o = rs(t);
    cn(e, "change", () => {
      const n = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => s ? no(es(i)) : es(i)
      );
      e[As](
        e.multiple ? o ? new Set(n) : n : n[0]
      ), e._assigning = !0, nr(() => {
        e._assigning = !1;
      });
    }), e[As] = Gr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Qr(e, t);
  },
  beforeUpdate(e, t, s) {
    e[As] = Gr(s);
  },
  updated(e, { value: t }) {
    e._assigning || Qr(e, t);
  }
};
function Qr(e, t) {
  const s = e.multiple, r = T(t);
  if (!(s && !r && !rs(t))) {
    for (let o = 0, n = e.options.length; o < n; o++) {
      const i = e.options[o], l = es(i);
      if (s)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? i.selected = t.some((u) => String(u) === String(l)) : i.selected = On(t, l) > -1;
        } else
          i.selected = t.has(l);
      else if (as(es(i), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !s && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function es(e) {
  return "_value" in e ? e._value : e.value;
}
const Fl = /* @__PURE__ */ G({ patchProp: Pl }, wl);
let Yr;
function pn() {
  return Yr || (Yr = zi(Fl));
}
const Dl = (...e) => {
  pn().render(...e);
}, Xr = (...e) => {
  const t = pn().createApp(...e), { mount: s } = t;
  return t.mount = (r) => {
    const o = $l(r);
    if (!o) return;
    const n = t._component;
    !I(n) && !n.render && !n.template && (n.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = s(o, !1, Ll(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function Ll(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function $l(e) {
  return W(e) ? document.querySelector(e) : e;
}
const Hl = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, zl = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, Vl = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Ul(e, t) {
  if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
    Bl(e);
    return;
  }
  return t;
}
function Bl(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function ql(e, t = {}) {
  if (typeof e != "string")
    return e;
  if (e[0] === '"' && e[e.length - 1] === '"' && e.indexOf("\\") === -1)
    return e.slice(1, -1);
  const s = e.trim();
  if (s.length <= 9)
    switch (s.toLowerCase()) {
      case "true":
        return !0;
      case "false":
        return !1;
      case "undefined":
        return;
      case "null":
        return null;
      case "nan":
        return Number.NaN;
      case "infinity":
        return Number.POSITIVE_INFINITY;
      case "-infinity":
        return Number.NEGATIVE_INFINITY;
    }
  if (!Vl.test(e)) {
    if (t.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return e;
  }
  try {
    if (Hl.test(e) || zl.test(e)) {
      if (t.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e, Ul);
    }
    return JSON.parse(e);
  } catch (r) {
    if (t.strict)
      throw r;
    return e;
  }
}
const Kl = /#/g, Wl = /&/g, Jl = /\//g, Gl = /=/g, ur = /\+/g, Ql = /%5e/gi, Yl = /%60/gi, Xl = /%7c/gi, Zl = /%20/gi;
function ea(e) {
  return encodeURI("" + e).replace(Xl, "|");
}
function Vs(e) {
  return ea(typeof e == "string" ? e : JSON.stringify(e)).replace(ur, "%2B").replace(Zl, "+").replace(Kl, "%23").replace(Wl, "%26").replace(Yl, "`").replace(Ql, "^").replace(Jl, "%2F");
}
function Rs(e) {
  return Vs(e).replace(Gl, "%3D");
}
function un(e = "") {
  try {
    return decodeURIComponent("" + e);
  } catch {
    return "" + e;
  }
}
function ta(e) {
  return un(e.replace(ur, " "));
}
function sa(e) {
  return un(e.replace(ur, " "));
}
function ra(e = "") {
  const t = /* @__PURE__ */ Object.create(null);
  e[0] === "?" && (e = e.slice(1));
  for (const s of e.split("&")) {
    const r = s.match(/([^=]+)=?(.*)/) || [];
    if (r.length < 2)
      continue;
    const o = ta(r[1]);
    if (o === "__proto__" || o === "constructor")
      continue;
    const n = sa(r[2] || "");
    t[o] === void 0 ? t[o] = n : Array.isArray(t[o]) ? t[o].push(n) : t[o] = [t[o], n];
  }
  return t;
}
function oa(e, t) {
  return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map(
    (s) => `${Rs(e)}=${Vs(s)}`
  ).join("&") : `${Rs(e)}=${Vs(t)}` : Rs(e);
}
function na(e) {
  return Object.keys(e).filter((t) => e[t] !== void 0).map((t) => oa(t, e[t])).filter(Boolean).join("&");
}
const ia = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/, la = /^[\s\w\0+.-]{2,}:([/\\]{2})?/, aa = /^([/\\]\s*){2,}[^/\\]/, ca = /^\.?\//;
function hn(e, t = {}) {
  return typeof t == "boolean" && (t = { acceptRelative: t }), t.strict ? ia.test(e) : la.test(e) || (t.acceptRelative ? aa.test(e) : !1);
}
function fa(e = "", t) {
  return e.endsWith("/");
}
function pa(e = "", t) {
  return (fa(e) ? e.slice(0, -1) : e) || "/";
}
function ua(e = "", t) {
  return e.endsWith("/") ? e : e + "/";
}
function ha(e, t) {
  if (ga(t) || hn(e))
    return e;
  const s = pa(t);
  return e.startsWith(s) ? e : wa(s, e);
}
function da(e, t) {
  const s = ba(e), r = { ...ra(s.search), ...t };
  return s.search = na(r), ya(s);
}
function ga(e) {
  return !e || e === "/";
}
function ma(e) {
  return e && e !== "/";
}
function wa(e, ...t) {
  let s = e || "";
  for (const r of t.filter((o) => ma(o)))
    if (s) {
      const o = r.replace(ca, "");
      s = ua(s) + o;
    } else
      s = r;
  return s;
}
const dn = Symbol.for("ufo:protocolRelative");
function ba(e = "", t) {
  const s = e.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (s) {
    const [, d, _ = ""] = s;
    return {
      protocol: d.toLowerCase(),
      pathname: _,
      href: d + _,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hn(e, { acceptRelative: !0 }))
    return Zr(e);
  const [, r = "", o, n = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, i = "", l = ""] = n.match(/([^#/?]*)(.*)?/) || [];
  r === "file:" && (l = l.replace(/\/(?=[A-Za-z]:)/, ""));
  const { pathname: c, search: u, hash: a } = Zr(l);
  return {
    protocol: r.toLowerCase(),
    auth: o ? o.slice(0, Math.max(0, o.length - 1)) : "",
    host: i,
    pathname: c,
    search: u,
    hash: a,
    [dn]: !r
  };
}
function Zr(e = "") {
  const [t = "", s = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname: t,
    search: s,
    hash: r
  };
}
function ya(e) {
  const t = e.pathname || "", s = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "", r = e.hash || "", o = e.auth ? e.auth + "@" : "", n = e.host || "";
  return (e.protocol || e[dn] ? (e.protocol || "") + "//" : "") + o + n + t + s + r;
}
class va extends Error {
  constructor(t, s) {
    super(t, s), this.name = "FetchError", s != null && s.cause && !this.cause && (this.cause = s.cause);
  }
}
function _a(e) {
  var c, u, a, d, _;
  const t = ((c = e.error) == null ? void 0 : c.message) || ((u = e.error) == null ? void 0 : u.toString()) || "", s = ((a = e.request) == null ? void 0 : a.method) || ((d = e.options) == null ? void 0 : d.method) || "GET", r = ((_ = e.request) == null ? void 0 : _.url) || String(e.request) || "/", o = `[${s}] ${JSON.stringify(r)}`, n = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>", i = `${o}: ${n}${t ? ` ${t}` : ""}`, l = new va(
    i,
    e.error ? { cause: e.error } : void 0
  );
  for (const S of ["request", "options", "response"])
    Object.defineProperty(l, S, {
      get() {
        return e[S];
      }
    });
  for (const [S, O] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ])
    Object.defineProperty(l, S, {
      get() {
        return e.response && e.response[O];
      }
    });
  return l;
}
const xa = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function eo(e = "GET") {
  return xa.has(e.toUpperCase());
}
function Sa(e) {
  if (e === void 0)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function";
}
const Ea = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]), ka = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function Ca(e = "") {
  if (!e)
    return "json";
  const t = e.split(";").shift() || "";
  return ka.test(t) ? "json" : Ea.has(t) || t.startsWith("text/") ? "text" : "blob";
}
function Ta(e, t, s, r) {
  const o = Aa(
    (t == null ? void 0 : t.headers) ?? (e == null ? void 0 : e.headers),
    s == null ? void 0 : s.headers,
    r
  );
  let n;
  return (s != null && s.query || s != null && s.params || t != null && t.params || t != null && t.query) && (n = {
    ...s == null ? void 0 : s.params,
    ...s == null ? void 0 : s.query,
    ...t == null ? void 0 : t.params,
    ...t == null ? void 0 : t.query
  }), {
    ...s,
    ...t,
    query: n,
    params: n,
    headers: o
  };
}
function Aa(e, t, s) {
  if (!t)
    return new s(e);
  const r = new s(t);
  if (e)
    for (const [o, n] of Symbol.iterator in e || Array.isArray(e) ? e : new s(e))
      r.set(o, n);
  return r;
}
async function Vt(e, t) {
  if (t)
    if (Array.isArray(t))
      for (const s of t)
        await s(e);
    else
      await t(e);
}
const Ra = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]), Ia = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function gn(e = {}) {
  const {
    fetch: t = globalThis.fetch,
    Headers: s = globalThis.Headers,
    AbortController: r = globalThis.AbortController
  } = e;
  async function o(l) {
    const c = l.error && l.error.name === "AbortError" && !l.options.timeout || !1;
    if (l.options.retry !== !1 && !c) {
      let a;
      typeof l.options.retry == "number" ? a = l.options.retry : a = eo(l.options.method) ? 0 : 1;
      const d = l.response && l.response.status || 500;
      if (a > 0 && (Array.isArray(l.options.retryStatusCodes) ? l.options.retryStatusCodes.includes(d) : Ra.has(d))) {
        const _ = typeof l.options.retryDelay == "function" ? l.options.retryDelay(l) : l.options.retryDelay || 0;
        return _ > 0 && await new Promise((S) => setTimeout(S, _)), n(l.request, {
          ...l.options,
          retry: a - 1
        });
      }
    }
    const u = _a(l);
    throw Error.captureStackTrace && Error.captureStackTrace(u, n), u;
  }
  const n = async function(c, u = {}) {
    const a = {
      request: c,
      options: Ta(
        c,
        u,
        e.defaults,
        s
      ),
      response: void 0,
      error: void 0
    };
    a.options.method && (a.options.method = a.options.method.toUpperCase()), a.options.onRequest && await Vt(a, a.options.onRequest), typeof a.request == "string" && (a.options.baseURL && (a.request = ha(a.request, a.options.baseURL)), a.options.query && (a.request = da(a.request, a.options.query), delete a.options.query), "query" in a.options && delete a.options.query, "params" in a.options && delete a.options.params), a.options.body && eo(a.options.method) && (Sa(a.options.body) ? (a.options.body = typeof a.options.body == "string" ? a.options.body : JSON.stringify(a.options.body), a.options.headers = new s(a.options.headers || {}), a.options.headers.has("content-type") || a.options.headers.set("content-type", "application/json"), a.options.headers.has("accept") || a.options.headers.set("accept", "application/json")) : (
      // ReadableStream Body
      ("pipeTo" in a.options.body && typeof a.options.body.pipeTo == "function" || // Node.js Stream Body
      typeof a.options.body.pipe == "function") && ("duplex" in a.options || (a.options.duplex = "half"))
    ));
    let d;
    if (!a.options.signal && a.options.timeout) {
      const S = new r();
      d = setTimeout(() => {
        const O = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        O.name = "TimeoutError", O.code = 23, S.abort(O);
      }, a.options.timeout), a.options.signal = S.signal;
    }
    try {
      a.response = await t(
        a.request,
        a.options
      );
    } catch (S) {
      return a.error = S, a.options.onRequestError && await Vt(
        a,
        a.options.onRequestError
      ), await o(a);
    } finally {
      d && clearTimeout(d);
    }
    if ((a.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    a.response._bodyInit) && !Ia.has(a.response.status) && a.options.method !== "HEAD") {
      const S = (a.options.parseResponse ? "json" : a.options.responseType) || Ca(a.response.headers.get("content-type") || "");
      switch (S) {
        case "json": {
          const O = await a.response.text(), P = a.options.parseResponse || ql;
          a.response._data = P(O);
          break;
        }
        case "stream": {
          a.response._data = a.response.body || a.response._bodyInit;
          break;
        }
        default:
          a.response._data = await a.response[S]();
      }
    }
    return a.options.onResponse && await Vt(
      a,
      a.options.onResponse
    ), !a.options.ignoreResponseError && a.response.status >= 400 && a.response.status < 600 ? (a.options.onResponseError && await Vt(
      a,
      a.options.onResponseError
    ), await o(a)) : a.response;
  }, i = async function(c, u) {
    return (await n(c, u))._data;
  };
  return i.raw = n, i.native = (...l) => t(...l), i.create = (l = {}, c = {}) => gn({
    ...e,
    ...c,
    defaults: {
      ...e.defaults,
      ...c.defaults,
      ...l
    }
  }), i;
}
const ts = function() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}(), Oa = ts.fetch ? (...e) => ts.fetch(...e) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")), Pa = ts.Headers, Ma = ts.AbortController, Na = gn({ fetch: Oa, Headers: Pa, AbortController: Ma }), ja = Na, hr = Ot();
(async () => hr.value = await ja(
  // @ts-ignore
  "https://mccarthyk.github.io/test-prs-mrs-assignments/data.json"
))();
const Rt = Fe(
  () => {
    var e;
    return ((e = hr.value) == null ? void 0 : e.staffMemberEntries) ?? [];
  }
), dr = Fe(() => {
  var e;
  return ((e = hr.value) == null ? void 0 : e.departmentEntries) ?? [];
}), Ze = Ot(), Fa = Fe(
  () => dr.value.find((e) => e.uid === Ze.value)
), Da = Fe(() => Rt.value.find(
  (e) => {
    var t;
    return e.filter === "PRS" && ((t = e.departments) == null ? void 0 : t.some((s) => s.entry_uid === Ze.value));
  }
)), La = Fe(() => Rt.value.find(
  (e) => {
    var t;
    return e.filter === "MRS" && ((t = e.departments) == null ? void 0 : t.some((s) => s.entry_uid === Ze.value));
  }
)), Us = Ot(), Bs = Ot(), qs = Ot();
Bt(Ze, () => {
  var e, t, s;
  Us.value && Is(
    Us.value,
    ((e = Fa.value) == null ? void 0 : e.title) ?? null
  ), Bs.value && Is(
    Bs.value,
    ((t = Da.value) == null ? void 0 : t.email) ?? null
  ), qs.value && Is(
    qs.value,
    ((s = La.value) == null ? void 0 : s.email) ?? null
  );
});
function Is(e, t) {
  var n, i;
  const s = e.constructor.name, r = (i = (n = Object == null ? void 0 : Object.getOwnPropertyDescriptor) == null ? void 0 : n.call(
    Object,
    window[s].prototype,
    "value"
  )) == null ? void 0 : i.set;
  r == null || r.call(e, t);
  const o = new Event("input", {
    bubbles: !0
  });
  e.dispatchEvent(o);
}
const $a = { class: "space-y-3 my-3" }, Ha = ["for"], za = {
  key: 0,
  class: "text-red-400"
}, Va = ["id"], Ua = ["value"], Ba = /* @__PURE__ */ ps({
  __name: "SelectField.ce",
  props: {
    label: { default: "Department", type: String },
    required: { type: Boolean, default: !0 },
    departmentInputId: { type: String },
    prsEmailInputId: { type: String },
    mrsEmailInputId: { type: String }
  },
  setup(e) {
    const t = di(), s = e;
    return No(() => {
      Us.value = s.departmentInputId ? document.getElementById(s.departmentInputId) : void 0, Bs.value = s.prsEmailInputId ? document.getElementById(s.prsEmailInputId) : void 0, qs.value = s.mrsEmailInputId ? document.getElementById(s.mrsEmailInputId) : void 0;
    }), (r, o) => (ne(), he("div", $a, [
      D("label", {
        class: "block text-sm/6 text-gray-900 font-bold",
        for: Ye(t)
      }, [
        Pe(ke(r.label) + " ", 1),
        r.required ? (ne(), he("span", za, "*")) : Kt("", !0)
      ], 8, Ha),
      pi(D("select", {
        "onUpdate:modelValue": o[0] || (o[0] = (n) => Q(Ze) ? Ze.value = n : null),
        id: Ye(t),
        class: "block w-full bg-white px-4 py-2 rounded"
      }, [
        o[1] || (o[1] = D("option", { value: null }, null, -1)),
        (ne(!0), he(ue, null, ar(Ye(dr), ({ uid: n, title: i }) => (ne(), he("option", {
          value: n,
          key: n
        }, ke(i), 9, Ua))), 128))
      ], 8, Va), [
        [jl, Ye(Ze)]
      ])
    ]));
  }
}), qa = '/*! tailwindcss v4.1.5 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-400:oklch(70.4% .191 22.216);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--font-weight-thin:100;--font-weight-medium:500;--font-weight-bold:700;--radius-lg:.5rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.relative{position:relative}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.my-3{margin-block:calc(var(--spacing)*3)}.block{display:block}.contents{display:contents}.flex{display:flex}.hidden{display:none}.table{display:table}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.w-full{width:100%}.items-center{align-items:center}.gap-2{gap:calc(var(--spacing)*2)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}.overflow-x-auto{overflow-x:auto}.rounded{border-radius:.25rem}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.bg-white{background-color:var(--color-white)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.py-2{padding-block:calc(var(--spacing)*2)}.py-4{padding-block:calc(var(--spacing)*4)}.py-5{padding-block:calc(var(--spacing)*5)}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm\\/6{font-size:var(--text-sm);line-height:calc(var(--spacing)*6)}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-thin{--tw-font-weight:var(--font-weight-thin);font-weight:var(--font-weight-thin)}.text-nowrap{text-wrap:nowrap}.text-gray-900{color:var(--color-gray-900)}.text-red-400{color:var(--color-red-400)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.odd\\:bg-white:nth-child(odd){background-color:var(--color-white)}.even\\:bg-gray-50:nth-child(2n){background-color:var(--color-gray-50)}@media (min-width:40rem){.sm\\:rounded-lg{border-radius:var(--radius-lg)}}@media (prefers-color-scheme:dark){.dark\\:border-gray-700{border-color:var(--color-gray-700)}.odd\\:dark\\:bg-gray-900:nth-child(odd){background-color:var(--color-gray-900)}.even\\:dark\\:bg-gray-800:nth-child(2n){background-color:var(--color-gray-800)}}}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}', mn = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, o] of t)
    s[r] = o;
  return s;
}, Ka = /* @__PURE__ */ mn(Ba, [["styles", [qa]]]), Wa = { class: "px-6 py-4" }, Ja = { class: "text-lg font-medium" }, Ga = { class: "font-thin" }, Qa = { key: 0 }, Ya = {
  key: 1,
  class: "text-xs"
}, Xa = { class: "px-6 py-4 space-y-1" }, Za = ["href"], ec = {
  key: 0,
  class: "text-nowrap flex items-center gap-2",
  title: "VOIP Phone"
}, tc = {
  title: "Office Phone",
  class: "text-nowrap flex items-center gap-2"
}, sc = {
  title: "Cell Phone",
  class: "text-nowrap flex items-center gap-2"
}, rc = /* @__PURE__ */ ps({
  __name: "Row",
  props: {
    person: {}
  },
  setup(e) {
    const t = e, s = Fe(
      () => dr.value.filter(
        (n) => {
          var i;
          return (i = t.person.departments) == null ? void 0 : i.map((l) => l.entry_uid).includes(n.uid);
        }
      )
    ), r = Fe(() => {
      const [n] = t.person.out_of_office_backup ?? [void 0];
      return Rt.value.find((i) => i.uid === (n == null ? void 0 : n.uid));
    }), o = xt("show-voip");
    return (n, i) => (ne(), he("tr", null, [
      D("td", Wa, [
        D("p", Ja, [
          Pe(ke(n.person.title) + " ", 1),
          D("small", Ga, [
            i[0] || (i[0] = D("br", null, null, -1)),
            Pe(" " + ke(n.person.job_title), 1)
          ])
        ]),
        s.value.length ? (ne(), he("ul", Qa, [
          (ne(!0), he(ue, null, ar(s.value, ({ uid: l, title: c }) => (ne(), he("li", { key: l }, ke(c), 1))), 128))
        ])) : Kt("", !0),
        r.value ? (ne(), he("em", Ya, [
          i[1] || (i[1] = D("strong", null, "Out of Office Backup:", -1)),
          Pe(" " + ke(r.value.title), 1)
        ])) : Kt("", !0)
      ]),
      D("td", Xa, [
        D("a", {
          href: `mailto:${n.person.email}`,
          title: "Email",
          class: "text-nowrap flex items-center gap-2"
        }, i[2] || (i[2] = [
          D("svg", {
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-4"
          }, [
            D("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            })
          ], -1),
          Pe(" Email")
        ]), 8, Za),
        Ye(o) ? (ne(), he("div", ec, [
          i[3] || (i[3] = D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-4"
          }, [
            D("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
            })
          ], -1)),
          Pe(" " + ke(n.person.voip), 1)
        ])) : Kt("", !0),
        D("div", tc, [
          i[4] || (i[4] = D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-4"
          }, [
            D("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            })
          ], -1)),
          Pe(" " + ke(n.person.office_phone), 1)
        ]),
        D("div", sc, [
          i[5] || (i[5] = D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-4"
          }, [
            D("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            })
          ], -1)),
          Pe(" " + ke(n.person.mobile_phone), 1)
        ])
      ])
    ]));
  }
}), oc = { class: "" }, nc = /* @__PURE__ */ ps({
  __name: "index.ce",
  props: {
    filter: { type: null },
    showVoip: { type: Boolean },
    dark: { type: Boolean }
  },
  setup(e) {
    const t = e;
    $o("show-voip", t.showVoip);
    const s = Fe(() => t.filter ? Rt.value.filter((r) => r.filter === t.filter) : Rt.value);
    return (r, o) => (ne(), he("div", {
      class: ls([{ dark: r.dark }, "prose relative overflow-x-auto shadow-md sm:rounded-lg"])
    }, [
      D("table", oc, [
        o[0] || (o[0] = D("thead", { class: "" }, [
          D("tr", null, [
            D("th", {
              scope: "col",
              class: "px-6 py-4"
            }, "Name & Responsibilities"),
            D("th", {
              scope: "col",
              class: "px-6 py-4"
            }, "Contact Information")
          ])
        ], -1)),
        D("tbody", null, [
          (ne(!0), he(ue, null, ar(s.value, (n) => (ne(), sn(rc, {
            person: n,
            key: n.uid,
            class: "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
          }, null, 8, ["person"]))), 128))
        ])
      ])
    ], 2));
  }
}), ic = '/*! tailwindcss v4.1.5 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-400:oklch(70.4% .191 22.216);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--font-weight-thin:100;--font-weight-medium:500;--font-weight-bold:700;--radius-lg:.5rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.relative{position:relative}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.my-3{margin-block:calc(var(--spacing)*3)}.prose{color:var(--tw-prose-body);--tw-prose-body:oklch(37.3% .034 259.733);--tw-prose-headings:oklch(21% .034 264.665);--tw-prose-lead:oklch(44.6% .03 256.802);--tw-prose-links:oklch(21% .034 264.665);--tw-prose-bold:oklch(21% .034 264.665);--tw-prose-counters:oklch(55.1% .027 264.364);--tw-prose-bullets:oklch(87.2% .01 258.338);--tw-prose-hr:oklch(92.8% .006 264.531);--tw-prose-quotes:oklch(21% .034 264.665);--tw-prose-quote-borders:oklch(92.8% .006 264.531);--tw-prose-captions:oklch(55.1% .027 264.364);--tw-prose-kbd:oklch(21% .034 264.665);--tw-prose-kbd-shadows:NaN NaN NaN;--tw-prose-code:oklch(21% .034 264.665);--tw-prose-pre-code:oklch(92.8% .006 264.531);--tw-prose-pre-bg:oklch(27.8% .033 256.848);--tw-prose-th-borders:oklch(87.2% .01 258.338);--tw-prose-td-borders:oklch(92.8% .006 264.531);--tw-prose-invert-body:oklch(87.2% .01 258.338);--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:oklch(70.7% .022 261.325);--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:oklch(70.7% .022 261.325);--tw-prose-invert-bullets:oklch(44.6% .03 256.802);--tw-prose-invert-hr:oklch(37.3% .034 259.733);--tw-prose-invert-quotes:oklch(96.7% .003 264.542);--tw-prose-invert-quote-borders:oklch(37.3% .034 259.733);--tw-prose-invert-captions:oklch(70.7% .022 261.325);--tw-prose-invert-kbd:#fff;--tw-prose-invert-kbd-shadows:255 255 255;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:oklch(87.2% .01 258.338);--tw-prose-invert-pre-bg:#00000080;--tw-prose-invert-th-borders:oklch(44.6% .03 256.802);--tw-prose-invert-td-borders:oklch(37.3% .034 259.733);max-width:65ch;font-size:1rem;line-height:1.75}.prose :where(p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em}.prose :where([class~=lead]):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-lead);margin-top:1.2em;margin-bottom:1.2em;font-size:1.25em;line-height:1.6}.prose :where(a):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-links);font-weight:500;text-decoration:underline}.prose :where(strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-bold);font-weight:600}.prose :where(a strong):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(blockquote strong):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(thead th strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em;list-style-type:decimal}.prose :where(ol[type=A]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=A s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=I]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type=I s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type="1"]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:decimal}.prose :where(ul):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em;list-style-type:disc}.prose :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *))::marker{color:var(--tw-prose-counters);font-weight:400}.prose :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *))::marker{color:var(--tw-prose-bullets)}.prose :where(dt):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.25em;font-weight:600}.prose :where(hr):not(:where([class~=not-prose],[class~=not-prose] *)){border-color:var(--tw-prose-hr);border-top-width:1px;margin-top:3em;margin-bottom:3em}.prose :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-quotes);border-inline-start-width:.25rem;border-inline-start-color:var(--tw-prose-quote-borders);quotes:"“""”""‘""’";margin-top:1.6em;margin-bottom:1.6em;padding-inline-start:1em;font-style:italic;font-weight:500}.prose :where(blockquote p:first-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):before{content:open-quote}.prose :where(blockquote p:last-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:close-quote}.prose :where(h1):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:0;margin-bottom:.888889em;font-size:2.25em;font-weight:800;line-height:1.11111}.prose :where(h1 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:900}.prose :where(h2):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:2em;margin-bottom:1em;font-size:1.5em;font-weight:700;line-height:1.33333}.prose :where(h2 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:800}.prose :where(h3):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.6em;margin-bottom:.6em;font-size:1.25em;font-weight:600;line-height:1.6}.prose :where(h3 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:700}.prose :where(h4):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.5em;margin-bottom:.5em;font-weight:600;line-height:1.5}.prose :where(h4 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:700}.prose :where(img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(picture):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em;display:block}.prose :where(video):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(kbd):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-kbd);box-shadow:0 0 0 1px rgb(var(--tw-prose-kbd-shadows)/10%),0 3px rgb(var(--tw-prose-kbd-shadows)/10%);padding-top:.1875em;padding-inline-end:.375em;padding-bottom:.1875em;border-radius:.3125rem;padding-inline-start:.375em;font-family:inherit;font-size:.875em;font-weight:500}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-code);font-size:.875em;font-weight:600}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):before,.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:"`"}.prose :where(a code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h1 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(h2 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-size:.875em}.prose :where(h3 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-size:.9em}.prose :where(h4 code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(blockquote code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(thead th code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-pre-code);background-color:var(--tw-prose-pre-bg);padding-top:.857143em;padding-inline-end:1.14286em;padding-bottom:.857143em;border-radius:.375rem;margin-top:1.71429em;margin-bottom:1.71429em;padding-inline-start:1.14286em;font-size:.875em;font-weight:400;line-height:1.71429;overflow-x:auto}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:inherit;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit;background-color:#0000;border-width:0;border-radius:0;padding:0}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):before,.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:none}.prose :where(table):not(:where([class~=not-prose],[class~=not-prose] *)){table-layout:auto;width:100%;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.71429}.prose :where(thead):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-th-borders)}.prose :where(thead th):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);vertical-align:bottom;padding-inline-end:.571429em;padding-bottom:.571429em;padding-inline-start:.571429em;font-weight:600}.prose :where(tbody tr):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-td-borders)}.prose :where(tbody tr:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:0}.prose :where(tbody td):not(:where([class~=not-prose],[class~=not-prose] *)){vertical-align:baseline}.prose :where(tfoot):not(:where([class~=not-prose],[class~=not-prose] *)){border-top-width:1px;border-top-color:var(--tw-prose-th-borders)}.prose :where(tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){vertical-align:top}.prose :where(th,td):not(:where([class~=not-prose],[class~=not-prose] *)){text-align:start}.prose :where(figure>*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose :where(figcaption):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-captions);margin-top:.857143em;font-size:.875em;line-height:1.42857}.prose :where(picture>img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose :where(li):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5em;margin-bottom:.5em}.prose :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:.375em}.prose :where(.prose>ul>li p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.75em;margin-bottom:.75em}.prose :where(.prose>ul>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em}.prose :where(.prose>ul>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.25em}.prose :where(.prose>ol>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em}.prose :where(.prose>ol>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.25em}.prose :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.75em;margin-bottom:.75em}.prose :where(dl):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em}.prose :where(dd):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5em;padding-inline-start:1.625em}.prose :where(hr+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h2+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h3+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h4+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(thead th:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose :where(thead th:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose :where(tbody td,tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){padding-top:.571429em;padding-inline-end:.571429em;padding-bottom:.571429em;padding-inline-start:.571429em}.prose :where(tbody td:first-child,tfoot td:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose :where(tbody td:last-child,tfoot td:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose :where(figure):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(.prose>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(.prose>:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:0}.block{display:block}.contents{display:contents}.flex{display:flex}.hidden{display:none}.table{display:table}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.w-full{width:100%}.items-center{align-items:center}.gap-2{gap:calc(var(--spacing)*2)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}.overflow-x-auto{overflow-x:auto}.rounded{border-radius:.25rem}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.bg-white{background-color:var(--color-white)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.py-2{padding-block:calc(var(--spacing)*2)}.py-4{padding-block:calc(var(--spacing)*4)}.py-5{padding-block:calc(var(--spacing)*5)}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm\\/6{font-size:var(--text-sm);line-height:calc(var(--spacing)*6)}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-thin{--tw-font-weight:var(--font-weight-thin);font-weight:var(--font-weight-thin)}.text-nowrap{text-wrap:nowrap}.text-gray-900{color:var(--color-gray-900)}.text-red-400{color:var(--color-red-400)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.odd\\:bg-white:nth-child(odd){background-color:var(--color-white)}.even\\:bg-gray-50:nth-child(2n){background-color:var(--color-gray-50)}@media (min-width:40rem){.sm\\:rounded-lg{border-radius:var(--radius-lg)}}.dark\\:border-gray-700:where(.dark,.dark *){border-color:var(--color-gray-700)}.odd\\:dark\\:bg-gray-900:nth-child(odd):where(.dark,.dark *){background-color:var(--color-gray-900)}.even\\:dark\\:bg-gray-800:nth-child(2n):where(.dark,.dark *){background-color:var(--color-gray-800)}}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}', lc = /* @__PURE__ */ mn(nc, [["styles", [ic]]]), ac = /* @__PURE__ */ fn(Ka), cc = /* @__PURE__ */ fn(lc);
customElements.define("hc-select-field", ac);
customElements.define("hc-staff-table", cc);
