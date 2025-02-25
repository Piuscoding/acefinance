"use strict";
this.default_tr = this.default_tr || {};
(function(_) {
    var window = this;
    try {
        _.ma("sy1");

        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        _.Ug = function() {
            return _.t("Firefox") || _.t("FxiOS")
        }
        ;
        _.Vg = function() {
            return (_.t("Chrome") || _.t("CriOS")) && !_.t("Edge") || _.t("Silk")
        }
        ;
        _.Wg = function() {
            return _.t("Safari") && !(_.Vg() || _.t("Coast") || _.t("Opera") || _.t("Edge") || _.t("Edg/") || _.t("OPR") || _.Ug() || _.t("Silk") || _.t("Android"))
        }
        ;
        _.Xg = function() {
            return _.t("Android") && !(_.Vg() || _.Ug() || _.t("Opera") || _.t("Silk"))
        }
        ;
        _.Yg = _.Ug();
        _.Zg = _.Da() || _.t("iPod");
        _.$g = _.t("iPad");
        _.ah = _.Xg();
        _.bh = _.Vg();
        _.ch = _.Wg() && !_.Ea();

        _.oa();

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ma("sy0");

        var fh, jh, kh, ih, gh, hh, oh, ph, uh, yh;
        _.eh = function(a) {
            Object.isFrozen(a) || (dh ? a[dh] |= 1 : void 0 !== a.g ? a.g |= 1 : Object.defineProperties(a, {
                g: {
                    value: 1,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            }));
            return a
        }
        ;
        fh = function(a) {
            return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
        }
        ;
        jh = function(a) {
            var b = gh;
            b = void 0 === b ? hh : b;
            return ih(a, b)
        }
        ;
        kh = function(a, b) {
            if (null != a) {
                if (Array.isArray(a))
                    a = ih(a, b);
                else if (fh(a)) {
                    var c = {}, d;
                    for (d in a)
                        c[d] = kh(a[d], b);
                    a = c
                } else
                    a = b(a);
                return a
            }
        }
        ;
        ih = function(a, b) {
            for (var c = a.slice(), d = 0; d < c.length; d++)
                c[d] = kh(c[d], b);
            if (b = Array.isArray(a)) {
                var e;
                dh ? e = a[dh] : e = a.g;
                b = (null == e ? 0 : e) & 1
            }
            b && _.eh(c);
            return c
        }
        ;
        gh = function(a) {
            if (a && "object" == typeof a && a.toJSON)
                return a.toJSON();
            a: switch (typeof a) {
            case "number":
                a = isFinite(a) ? a : String(a);
                break a;
            case "object":
                if (a && !Array.isArray(a) && lh && null != a && a instanceof Uint8Array) {
                    var b;
                    void 0 === b && (b = 0);
                    _.mh();
                    b = nh[b];
                    for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                        var g = a[e]
                          , k = a[e + 1]
                          , l = a[e + 2]
                          , m = b[g >> 2];
                        g = b[(g & 3) << 4 | k >> 4];
                        k = b[(k & 15) << 2 | l >> 6];
                        l = b[l & 63];
                        c[f++] = m + g + k + l
                    }
                    m = 0;
                    l = d;
                    switch (a.length - e) {
                    case 2:
                        m = a[e + 1],
                        l = b[(m & 15) << 2] || d;
                    case 1:
                        a = a[e],
                        c[f] = b[a >> 2] + b[(a & 3) << 4 | m >> 4] + l + d
                    }
                    a = c.join("")
                }
            }
            return Array.isArray(a) ? jh(a) : a
        }
        ;
        hh = function(a) {
            return lh && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
        }
        ;
        oh = {};
        ph = {};
        _.qh = function(a, b) {
            this.g = a === oh && b || "";
            this.h = ph
        }
        ;
        _.qh.prototype.qb = !0;
        _.qh.prototype.Wa = function() {
            return this.g
        }
        ;
        _.rh = function(a) {
            return new _.qh(oh,a)
        }
        ;
        _.sh = function(a, b) {
            return _.jd(a.U, b)
        }
        ;
        _.th = function(a) {
            return a instanceof _.qh && a.constructor === _.qh && a.h === ph ? a.g : "type_error:Const"
        }
        ;
        uh = /^[\w+/_-]+[=]{0,2}$/;
        _.vh = function(a, b) {
            b = (b || _.p).document;
            return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && uh.test(a) ? a : "" : ""
        }
        ;
        _.wh = function(a) {
            return _.vh("script[nonce]", a)
        }
        ;
        _.xh = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        }
        ;
        yh = function(a) {
            return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
                return c + d.toUpperCase()
            })
        }
        ;
        _.zh = function(a) {
            if (a instanceof _.se)
                return a;
            var b = new _.se(_.v);
            _.re(b, 2, a);
            return b
        }
        ;
        _.Ah = function(a, b, c, d, e, f, g) {
            var k = new _.pg;
            _.sg.push(k);
            b && k.D("complete", b);
            k.Vb("ready", k.aa);
            f && (k.s = Math.max(0, f));
            g && (k.W = g);
            k.send(a, c, d, e)
        }
        ;
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        var nh;
        nh = {};
        _.Bh = null;
        _.Ch = _.C || _.D || !_.ch && !_.B && "function" == typeof _.p.atob;
        _.mh = function() {
            if (!_.Bh) {
                _.Bh = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    nh[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === _.Bh[f] && (_.Bh[f] = e)
                    }
                }
            }
        }
        ;
        var lh = "function" === typeof Uint8Array;
        var dh = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;
        var Eh;
        _.Dh = Object.freeze(_.eh([]));
        Eh = "undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance;
        _.Fh = function(a, b, c) {
            return -1 === b ? null : b >= a.l ? a.h ? a.h[b] : void 0 : (void 0 === c ? 0 : c) && a.h && (c = a.h[b],
            null != c) ? c : a.kb[b + a.j]
        }
        ;
        _.Gh = function(a, b, c, d) {
            b < a.l && (void 0 === d || !d) ? a.kb[b + a.j] = c : (a.h || (a.h = a.kb[a.l + a.j] = {}))[b] = c;
            return a
        }
        ;
        _.Hh = function(a, b, c) {
            var d;
            a.g || (a.g = {});
            var e = c ? c.kb : c;
            a.g[b] = c;
            return _.Gh(a, b, e, void 0 === d ? !1 : d)
        }
        ;
        var Jh = function(a, b, c) {
            var d = _.Ih;
            _.Ih = null;
            a || (a = d);
            d = this.constructor.h;
            a || (a = d ? [d] : []);
            this.j = (d ? 0 : -1) - (this.constructor.g || 0);
            this.g = void 0;
            this.kb = a;
            a: {
                d = this.kb.length;
                a = d - 1;
                if (d && (d = this.kb[a],
                fh(d))) {
                    this.l = a - this.j;
                    this.h = d;
                    break a
                }
                void 0 !== b && -1 < b ? (this.l = Math.max(b, a + 1 - this.j),
                this.h = void 0) : this.l = Number.MAX_VALUE
            }
            if (c)
                for (b = 0; b < c.length; b++)
                    if (a = c[b],
                    a < this.l)
                        a += this.j,
                        (d = this.kb[a]) ? Array.isArray(d) && _.eh(d) : this.kb[a] = _.Dh;
                    else {
                        d = this.h || (this.h = this.kb[this.l + this.j] = {});
                        var e = d[a];
                        e ? Array.isArray(e) && _.eh(e) : d[a] = _.Dh
                    }
        };
        Jh.prototype.toJSON = function() {
            return jh(this.kb)
        }
        ;
        Jh.prototype.toString = function() {
            return this.kb.toString()
        }
        ;
        var Kh = function() {
            Jh.apply(this, arguments)
        };
        _.u(Kh, Jh);
        var Lh = function() {
            var a = {};
            Object.defineProperties(Kh, (a[Symbol.hasInstance] = {
                value: Object[Symbol.hasInstance],
                configurable: !1,
                writable: !1,
                enumerable: !1
            },
            a))
        };
        Eh && Lh();
        _.Mh = function() {
            Kh.apply(this, arguments)
        }
        ;
        _.u(_.Mh, Kh);
        var Nh = function() {
            var a = {};
            Object.defineProperties(_.Mh, (a[Symbol.hasInstance] = {
                value: Object[Symbol.hasInstance],
                configurable: !1,
                writable: !1,
                enumerable: !1
            },
            a))
        };
        Eh && Nh();
        var Ph;
        _.L = function(a, b, c) {
            if ("string" === typeof b)
                (b = _.Oh(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d]
                      , f = _.Oh(c, d);
                    f && (c.style[f] = e)
                }
        }
        ;
        Ph = {};
        _.Oh = function(a, b) {
            var c = Ph[b];
            if (!c) {
                var d = _.xh(b);
                c = d;
                void 0 === a.style[d] && (d = (_.D ? "Webkit" : _.C ? "Moz" : _.B ? "ms" : null) + yh(d),
                void 0 !== a.style[d] && (c = d));
                Ph[b] = c
            }
            return c
        }
        ;
        _.Qh = _.C ? "MozUserSelect" : _.D || _.ic ? "WebkitUserSelect" : null;

        _.oa();

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ma("sy3");

        var Wh;
        _.Rh = function(a) {
            if (null !== a && void 0 !== a.tagName) {
                if ("script" === a.tagName.toLowerCase())
                    throw Error("J");
                if ("style" === a.tagName.toLowerCase())
                    throw Error("K");
            }
        }
        ;
        _.Sh = {};
        _.Th = function(a) {
            return a instanceof _.Hc && a.constructor === _.Hc ? a.g : "type_error:SafeUrl"
        }
        ;
        _.Uh = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
        _.Vh = function(a) {
            if (a instanceof _.Hc)
                return a;
            a = "object" == typeof a && a.qb ? a.Wa() : String(a);
            _.Uh.test(a) || (a = "about:invalid#zClosurez");
            return _.Ic(a)
        }
        ;
        Wh = {};
        _.Xh = function(a, b) {
            this.g = b === Wh ? a : "";
            this.qb = !0
        }
        ;
        _.Xh.prototype.Wa = function() {
            return this.g
        }
        ;
        _.Xh.prototype.toString = function() {
            return this.g.toString()
        }
        ;
        _.Yh = {};
        _.Mf = function() {
            throw Error("O");
        }
        ;
        _.Mf.prototype.Md = null;
        _.Mf.prototype.wa = function() {
            return this.g
        }
        ;
        _.Mf.prototype.toString = function() {
            return this.g
        }
        ;
        var Zh = function() {
            _.Mf.call(this)
        };
        _.x(Zh, _.Mf);
        Zh.prototype.Fb = _.Yh;
        var $h = function() {
            _.Mf.call(this)
        };
        _.x($h, _.Mf);
        $h.prototype.Fb = _.Sh;
        $h.prototype.Md = 1;
        $h.prototype.h = function() {
            return new _.Xh(this.toString(),Wh)
        }
        ;
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        _.ai = function(a) {
            function b(c) {
                this.g = c
            }
            b.prototype = a.prototype;
            return function(c, d) {
                c = new b(String(c));
                void 0 !== d && (c.Md = d);
                return c
            }
        }(Zh);
        _.bi = function(a) {
            function b(c) {
                this.g = c
            }
            b.prototype = a.prototype;
            return function(c) {
                return new b(String(c))
            }
        }($h);

        _.oa();

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ma("sy2");

        var ci, di, ei, fi, gi, hi, ii, ki, mi, oi, ri, Ai, zi, Bi, Ei, Gi, Hi, Mi, N, Ni, Pi, Qi, Si, Ti, Ui, Vi, Wi, qi, Xi, Yi, Zi, $i, aj, bj, cj, dj, ej, fj, ni, pi, ui, hj, ij, kj, mj, oj, pj, qj, rj, sj, uj, vj, wj, yj, zj, Aj, Bj, Cj, Dj, Fj, Gj, Hj, Ij, Jj, Lj, Mj, Nj, Oj, Pj, Rj, Sj, Tj, Uj, Vj, Wj, Xj, Yj, Zj, ak, bk, ck, dk, ek, tk, uk, vk, wk, xk, wi, Ak, Bk, Ck, Ek, Fk, Gk, Ik, Jk, Kk, Lk, Mk, Nk, Pk, Qk, Rk, Tk, Uk, Vk, Wk, Xk, Yk, Zk, bl, dl, el, fl, gl, hl, jl, kl, ll, nl, pl, rl, tl;
        ci = function(a) {
            return Array.prototype.concat.apply([], arguments)
        }
        ;
        di = function(a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        }
        ;
        ei = function(a, b, c, d) {
            Array.prototype.splice.apply(a, di(arguments, 1))
        }
        ;
        fi = function(a) {
            var b = {};
            a.forEach(function(c) {
                b[c[0]] = c[1]
            });
            return function(c) {
                return b[c.find(function(d) {
                    return d in b
                })] || ""
            }
        }
        ;
        gi = function(a) {
            var b = _.Ba();
            if ("Internet Explorer" === a) {
                if (_.Ca())
                    if ((a = /rv: *([\d\.]*)/.exec(b)) && a[1])
                        b = a[1];
                    else {
                        a = "";
                        var c = /MSIE +([\d\.]+)/.exec(b);
                        if (c && c[1])
                            if (b = /Trident\/(\d.\d)/.exec(b),
                            "7.0" == c[1])
                                if (b && b[1])
                                    switch (b[1]) {
                                    case "4.0":
                                        a = "8.0";
                                        break;
                                    case "5.0":
                                        a = "9.0";
                                        break;
                                    case "6.0":
                                        a = "10.0";
                                        break;
                                    case "7.0":
                                        a = "11.0"
                                    }
                                else
                                    a = "7.0";
                            else
                                a = c[1];
                        b = a
                    }
                else
                    b = "";
                return b
            }
            var d = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
            c = [];
            for (var e; e = d.exec(b); )
                c.push([e[1], e[2], e[3] || void 0]);
            b = fi(c);
            switch (a) {
            case "Opera":
                if (_.t("Opera"))
                    return b(["Version", "Opera"]);
                if (_.t("OPR"))
                    return b(["OPR"]);
                break;
            case "Microsoft Edge":
                if (_.t("Edge"))
                    return b(["Edge"]);
                if (_.t("Edg/"))
                    return b(["Edg"]);
                break;
            case "Chromium":
                if (_.Vg())
                    return b(["Chrome", "CriOS", "HeadlessChrome"])
            }
            return "Firefox" === a && _.Ug() || "Safari" === a && _.Wg() || "Android Browser" === a && _.Xg() || "Silk" === a && _.t("Silk") ? (b = c[2]) && b[1] || "" : ""
        }
        ;
        hi = function(a) {
            a = gi(a);
            if ("" === a)
                return NaN;
            a = a.split(".");
            return 0 === a.length ? NaN : Number(a[0])
        }
        ;
        ii = function(a) {
            var b = [], c = 0, d;
            for (d in a)
                b[c++] = d;
            return b
        }
        ;
        ki = function() {
            var a = ji, b;
            for (b in a)
                return !1;
            return !0
        }
        ;
        _.li = function(a) {
            var b = {}, c;
            for (c in a)
                b[c] = a[c];
            return b
        }
        ;
        mi = function(a) {
            for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if ("]" == e) {
                    if (b)
                        return !1;
                    b = !0
                } else if ("[" == e) {
                    if (!b)
                        return !1;
                    b = !1
                } else if (!b && !c.test(e))
                    return !1
            }
            return b
        }
        ;
        oi = function(a) {
            return a.replace(_.Oc, function(b, c, d, e) {
                var f = "";
                d = d.replace(/^(['"])(.*)\1$/, function(g, k, l) {
                    f = k;
                    return l
                });
                b = (ni(d) || _.Jc).Wa();
                return c + f + b + f + e
            })
        }
        ;
        ri = function(a) {
            if (a instanceof _.Hc)
                return 'url("' + _.Th(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            if (a instanceof _.qh)
                a = _.th(a);
            else {
                a = String(a);
                var b = a.replace(_.Pc, "$1").replace(_.Pc, "$1").replace(_.Oc, "url");
                if (_.Nc.test(b)) {
                    if (b = !pi.test(a)) {
                        for (var c = b = !0, d = 0; d < a.length; d++) {
                            var e = a.charAt(d);
                            "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                        }
                        b = b && c && mi(a)
                    }
                    a = b ? oi(a) : "zClosurez"
                } else
                    a = "zClosurez"
            }
            if (/[{;}]/.test(a))
                throw new qi("Value does not allow [{;}], got: %s.",[a]);
            return a
        }
        ;
        _.si = function(a) {
            a = _.Oa(a);
            var b;
            return (null == (b = _.Ka()) ? 0 : b.isScriptURL(a)) ? TrustedScriptURL.prototype.toString.apply(a) : a
        }
        ;
        _.vi = function(a) {
            return _.ya(a) ? a instanceof _.Mf ? _.ti(a) : ui("zSoyz") : ui(String(a))
        }
        ;
        _.yi = function(a, b) {
            b = a(b || wi, void 0);
            a = _.sh(_.F(), "DIV");
            b = _.vi(b);
            _.xi(a, b);
            1 == a.childNodes.length && (b = a.firstChild,
            1 == b.nodeType && (a = b));
            return a
        }
        ;
        Ai = function(a, b) {
            var c = a[b - 1];
            if (null == c || zi(c))
                a = a[a.length - 1],
                zi(a) && (c = a[b]);
            return c
        }
        ;
        zi = function(a) {
            return _.ya(a) && !_.da(a)
        }
        ;
        Bi = function(a, b, c, d) {
            for (var e = 0; 0 < b; --b,
            ++a)
                null != c[a] && (d[a + 1] = c[a],
                delete c[a],
                e++);
            return e
        }
        ;
        Ei = function(a, b, c) {
            var d = Array.prototype.slice.call(arguments);
            d.splice(0, 2);
            d = "l" + a.toString(16) + "i" + b.toString(16) + (d.length ? "-" + d.join("_") : "");
            _.Ci ? _.Ci.push(d) : _.Di(d)
        }
        ;
        Gi = function() {
            var a = new Fi([null, null, null, null, null, '(function(){/*\n\n Copyright The Closure Library Authors.\n SPDX-License-Identifier: Apache-2.0\n*/\nvar d="function"==typeof Object.create?Object.create:function(a){var c=function(){};c.prototype=a;return new c},e;if("function"==typeof Object.setPrototypeOf)e=Object.setPrototypeOf;else{var f;a:{var g={a:!0},l={};try{l.__proto__=g;f=l.a;break a}catch(a){}f=!1}e=f?function(a,c){a.__proto__=c;if(a.__proto__!==c)throw new TypeError(a+" is not extensible");return a}:null}var m=e;/*\n\n SPDX-License-Identifier: Apache-2.0\n*/\nvar n={};function p(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!=a?a:null}var q;function r(){if(void 0===q)try{var a,c;q=null!=(c=null==(a=p())?void 0:a.createPolicy("google#safe",{createHTML:function(b){return b},createScript:function(b){return b},createScriptURL:function(b){return b}}))?c:null}catch(b){q=null}return q};var t=function(a,c){if(c!==n)throw Error("Bad secret");this.g=a},u=function(){};t.prototype=d(u.prototype);t.prototype.constructor=t;if(m)m(t,u);else for(var v in u)if("prototype"!=v)if(Object.defineProperties){var w=Object.getOwnPropertyDescriptor(u,v);w&&Object.defineProperty(t,v,w)}else t[v]=u[v];t.prototype.toString=function(){return this.g.toString()};function x(a){var c,b=null==(c=r())?void 0:c.createScriptURL(a);return new t(null!=b?b:a,n)};if(!function(){if(self.origin)return"null"===self.origin;if(""!==location.host)return!1;try{return window.parent.escape(""),!1}catch(a){return!0}}())throw Error("sandboxing error");\nwindow.addEventListener("message",function(a){var c=a.ports[0];a=a.data;var b=a.callbackName.split("."),h=window;"window"===b[0]&&b.unshift();for(var k=0;k<b.length-1;k++)h[b[k]]={},h=h[b[k]];h[b[b.length-1]]=function(y){c.postMessage(JSON.stringify(y))};b=document.createElement("script");a=x(a.url);if(a instanceof t)a=a.g;else throw Error("Unexpected type when unwrapping TrustedResourceUrl");b.src=a;document.body.appendChild(b)},!0);}).call(this);\n']);
            if (!a)
                return null;
            a = _.Fh(a, 6);
            var b;
            null === a || void 0 === a ? b = null : b = _.Ra(a);
            return b
        }
        ;
        Hi = function(a) {
            _.M.call(this);
            a = a || {};
            this.id = a.id || this.ib();
            this.vf = a.vf || "";
            this.ee = a.ee || null;
            this.fe = a.fe || null;
            this.Id = a.Id || !1;
            this.className = a.className || null;
            this.B = null
        }
        ;
        _.Li = function() {
            for (var a in Object.prototype) {
                _.Fc = function(d, e, f) {
                    for (var g in d)
                        d[g] !== Object.prototype[g] && e.call(f, d[g], g, d)
                }
                ;
                break
            }
            var b = _.zb()
              , c = Ii(Ji);
            c && "function" == typeof c && (1 == _.Ki ? c() : function e() {
                var f = document.readyState;
                "undefined" == _.sb(f) || "complete" == f || "interactive" == f || 2E4 <= _.zb() - b ? c() : window.setTimeout(e, 500)
            }())
        }
        ;
        Mi = function(a, b) {
            a.gb ? b() : (a.ta || (a.ta = []),
            a.ta.push(b))
        }
        ;
        N = function(a, b) {
            this.x = void 0 !== a ? a : 0;
            this.y = void 0 !== b ? b : 0
        }
        ;
        N.prototype.ceil = function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this
        }
        ;
        N.prototype.floor = function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this
        }
        ;
        N.prototype.round = function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this
        }
        ;
        N.prototype.translate = function(a, b) {
            a instanceof N ? (this.x += a.x,
            this.y += a.y) : (this.x += Number(a),
            "number" === typeof b && (this.y += b));
            return this
        }
        ;
        Ni = function(a) {
            return new N(a.x,a.y)
        }
        ;
        _.Oi = function(a, b, c, d) {
            a = d || a;
            b = b && "*" != b ? String(b).toUpperCase() : "";
            if (a.querySelectorAll && a.querySelector && (b || c))
                return a.querySelectorAll(b + (c ? "." + c : ""));
            if (c && a.getElementsByClassName) {
                a = a.getElementsByClassName(c);
                if (b) {
                    d = {};
                    for (var e = 0, f = 0, g; g = a[f]; f++)
                        b == g.nodeName && (d[e++] = g);
                    d.length = e;
                    return d
                }
                return a
            }
            a = a.getElementsByTagName(b || "*");
            if (c) {
                d = {};
                for (f = e = 0; g = a[f]; f++)
                    b = g.className,
                    "function" == typeof b.split && _.ta(b.split(/\s+/), c) && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        ;
        Pi = function(a, b) {
            var c = b || document;
            if (c.getElementsByClassName)
                a = c.getElementsByClassName(a)[0];
            else {
                c = document;
                var d = b || c;
                a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : _.Oi(c, "*", a, b)[0] || null
            }
            return a || null
        }
        ;
        Qi = function(a) {
            return a.scrollingElement ? a.scrollingElement : !_.D && _.gd(a) ? a.documentElement : a.body || a.documentElement
        }
        ;
        _.Ri = function(a) {
            var b = Qi(a);
            a = a.parentWindow || a.defaultView;
            return _.B && _.Ac("10") && a.pageYOffset != b.scrollTop ? new N(b.scrollLeft,b.scrollTop) : new N(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
        }
        ;
        Si = function(a) {
            a.h = {};
            a.g.length = 0;
            a.size = 0;
            a.j = 0
        }
        ;
        Ti = function(a) {
            if (a.jb && "function" == typeof a.jb)
                return a.jb();
            if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set)
                return Array.from(a.values());
            if ("string" === typeof a)
                return a.split("");
            if (_.da(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++)
                    b.push(a[d]);
                return b
            }
            return _.Ga(a)
        }
        ;
        Ui = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
        _.ti = function(a) {
            if (a.Fb !== _.Yh)
                throw Error("P");
            return _.Tc(a.toString(), a.Md || null)
        }
        ;
        Vi = function(a) {
            a.kc = void 0;
            a.ea = function() {
                return a.kc ? a.kc : a.kc = new a
            }
        }
        ;
        Wi = {};
        qi = function(a, b) {
            a = a.split("%s");
            for (var c = "", d = a.length - 1, e = 0; e < d; e++)
                c += a[e] + (e < b.length ? b[e] : "%s");
            _.aa.call(this, c + a[d])
        }
        ;
        _.x(qi, _.aa);
        qi.prototype.name = "AssertionError";
        Xi = function(a) {
            var b = _.Gb();
            a = b ? b.createScript(a) : a;
            return new _.Ib(a,_.Hb)
        }
        ;
        Yi = /&/g;
        Zi = /</g;
        $i = />/g;
        aj = /"/g;
        bj = /'/g;
        cj = /\x00/g;
        dj = /[\x00&<>"']/;
        ej = function(a, b) {
            if (b)
                a = a.replace(Yi, "&amp;").replace(Zi, "&lt;").replace($i, "&gt;").replace(aj, "&quot;").replace(bj, "&#39;").replace(cj, "&#0;");
            else {
                if (!dj.test(a))
                    return a;
                -1 != a.indexOf("&") && (a = a.replace(Yi, "&amp;"));
                -1 != a.indexOf("<") && (a = a.replace(Zi, "&lt;"));
                -1 != a.indexOf(">") && (a = a.replace($i, "&gt;"));
                -1 != a.indexOf('"') && (a = a.replace(aj, "&quot;"));
                -1 != a.indexOf("'") && (a = a.replace(bj, "&#39;"));
                -1 != a.indexOf("\x00") && (a = a.replace(cj, "&#0;"))
            }
            return a
        }
        ;
        fj = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            command: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        };
        ni = function(a) {
            if (a instanceof _.Hc)
                return a;
            a = "object" == typeof a && a.qb ? a.Wa() : String(a);
            _.Uh.test(a) ? a = _.Ic(a) : (a = String(a),
            a = a.replace(/(%0A|%0D)/g, ""),
            a = a.match(Ui) ? _.Ic(a) : null);
            return a
        }
        ;
        _.gj = function(a) {
            return a instanceof _.Lc && a.constructor === _.Lc ? a.g : "type_error:SafeStyle"
        }
        ;
        pi = /\/\*/;
        ui = function(a) {
            if (a instanceof _.Rc)
                return a;
            var b = "object" == typeof a
              , c = null;
            b && a.qf && (c = a.$b());
            return _.Tc(ej(b && a.qb ? a.Wa() : String(a)), c)
        }
        ;
        hj = /^[a-zA-Z0-9-]+$/;
        ij = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
        _.jj = function(a) {
            if (!hj.test(a))
                throw Error("w");
            if (a.toUpperCase()in ij)
                throw Error("w");
        }
        ;
        kj = function(a) {
            var b = ui(_.Vc)
              , c = b.$b()
              , d = []
              , e = function(f) {
                Array.isArray(f) ? f.forEach(e) : (f = ui(f),
                d.push(_.Sc(f).toString()),
                f = f.$b(),
                0 == c ? c = f : 0 != f && c != f && (c = null))
            };
            a.forEach(e);
            return _.Tc(d.join(_.Sc(b).toString()), c)
        }
        ;
        _.lj = function(a) {
            return kj(Array.prototype.slice.call(arguments))
        }
        ;
        mj = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        };
        _.nj = function(a) {
            var b = "";
            if (a)
                for (var c in a)
                    if (Object.prototype.hasOwnProperty.call(a, c)) {
                        if (!hj.test(c))
                            throw Error("w");
                        var d = a[c];
                        if (null != d) {
                            var e = c;
                            if (d instanceof _.qh)
                                d = _.th(d);
                            else if ("style" == e.toLowerCase()) {
                                var f = d;
                                if (!_.ya(f))
                                    throw Error("w");
                                if (!(f instanceof _.Lc)) {
                                    d = void 0;
                                    var g = "";
                                    for (d in f)
                                        if (Object.prototype.hasOwnProperty.call(f, d)) {
                                            if (!/^[-_a-zA-Z0-9]+$/.test(d))
                                                throw Error("v`" + d);
                                            var k = f[d];
                                            null != k && (k = Array.isArray(k) ? k.map(ri).join(" ") : ri(k),
                                            g += d + ":" + k + ";")
                                        }
                                    f = g ? new _.Lc(g,_.Kc) : _.Mc
                                }
                                d = _.gj(f)
                            } else {
                                if (/^on/i.test(e))
                                    throw Error("w");
                                if (e.toLowerCase()in mj)
                                    if (d instanceof _.Lb)
                                        d = _.Wa(d).toString();
                                    else if (d instanceof _.Hc)
                                        d = _.Th(d);
                                    else if ("string" === typeof d)
                                        d = (ni(d) || _.Jc).Wa();
                                    else
                                        throw Error("w");
                            }
                            d.qb && (d = d.Wa());
                            e = e + '="' + ej(String(d)) + '"';
                            b += " " + e
                        }
                    }
            return b
        }
        ;
        oj = function(a, b, c) {
            var d = null;
            var e = "<" + a + _.nj(b);
            null == c ? c = [] : Array.isArray(c) || (c = [c]);
            !0 === fj[a.toLowerCase()] ? e += ">" : (d = _.lj(c),
            e += ">" + _.Sc(d).toString() + "</" + a + ">",
            d = d.$b());
            (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
            return _.Tc(e, d)
        }
        ;
        pj = function(a) {
            var b = {
                nonce: _.wh()
            };
            for (d in b)
                if (Object.prototype.hasOwnProperty.call(b, d)) {
                    var c = d.toLowerCase();
                    if ("language" == c || "src" == c || "text" == c)
                        throw Error("w");
                }
            var d = "";
            a = ci(a);
            for (c = 0; c < a.length; c++)
                d += _.Ta(a[c]).toString();
            a = _.Tc(d, 0);
            return oj("script", b, a)
        }
        ;
        qj = function(a, b, c) {
            _.jj(String(a));
            return oj(String(a), b, c)
        }
        ;
        _.xi = function(a, b) {
            if ((0,
            _.Xc)())
                for (; a.lastChild; )
                    a.removeChild(a.lastChild);
            a.innerHTML = _.Sc(b)
        }
        ;
        rj = function(a, b) {
            b = b instanceof _.Hc ? b : _.Vh(b);
            a.action = _.Th(b)
        }
        ;
        sj = function(a, b) {
            return new N(a.x - b.x,a.y - b.y)
        }
        ;
        _.tj = function(a) {
            return a.replace(/\xa0|[ \t]+/g, " ")
        }
        ;
        uj = function(a) {
            return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
        }
        ;
        vj = function(a) {
            return a.replace(/^[\s\xa0]+/, "")
        }
        ;
        wj = function(a) {
            return a.replace(/[\s\xa0]+$/, "")
        }
        ;
        _.xj = function(a) {
            return a = ej(a, void 0)
        }
        ;
        yj = function(a) {
            return a.replace(/&([^;]+);/g, function(b, c) {
                switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)),
                    isNaN(c)) ? b : String.fromCharCode(c)
                }
            })
        }
        ;
        zj = /&([^;\s<&]+);?/g;
        Aj = function(a) {
            var b = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"'
            };
            var c = _.p.document.createElement("div");
            return a.replace(zj, function(d, e) {
                var f = b[d];
                if (f)
                    return f;
                "#" == e.charAt(0) && (e = Number("0" + e.substr(1)),
                isNaN(e) || (f = String.fromCharCode(e)));
                f || (f = _.Tc(d + " ", null),
                _.xi(c, f),
                f = c.firstChild.nodeValue.slice(0, -1));
                return b[d] = f
            })
        }
        ;
        Bj = function(a) {
            return -1 != a.indexOf("&") ? "document"in _.p ? Aj(a) : yj(a) : a
        }
        ;
        Cj = function(a, b) {
            return (b || document).getElementsByTagName(String(a))
        }
        ;
        Dj = function() {
            var a = document;
            return a.querySelectorAll && a.querySelector ? a.querySelectorAll(".alt-edited") : _.Oi(document, "*", "alt-edited", void 0)
        }
        ;
        _.Ej = function(a, b, c) {
            return _.ld(document, arguments)
        }
        ;
        Fj = function() {
            var a = qj("WBR")
              , b = document;
            var c = _.jd(b, "DIV");
            _.B ? (a = _.lj(_.Wc, a),
            _.xi(c, a),
            c.removeChild(c.firstChild)) : _.xi(c, a);
            if (1 == c.childNodes.length)
                c = c.removeChild(c.firstChild);
            else {
                for (b = b.createDocumentFragment(); c.firstChild; )
                    b.appendChild(c.firstChild);
                c = b
            }
            return c
        }
        ;
        Gj = function(a) {
            if (1 != a.nodeType)
                return !1;
            switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
            }
            return !0
        }
        ;
        Hj = function(a, b) {
            _.kd(_.E(a), a, arguments, 1)
        }
        ;
        Ij = function(a, b) {
            b.parentNode && b.parentNode.insertBefore(a, b)
        }
        ;
        Jj = function(a, b) {
            b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
        }
        ;
        _.Kj = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        }
        ;
        Lj = function(a) {
            return _.ya(a) && 1 == a.nodeType
        }
        ;
        Mj = function(a, b) {
            for (; b = b.previousSibling; )
                if (b == a)
                    return -1;
            return 1
        }
        ;
        Nj = function(a, b) {
            var c = a.parentNode;
            if (c == b)
                return -1;
            for (; b.parentNode != c; )
                b = b.parentNode;
            return Mj(b, a)
        }
        ;
        Oj = function(a, b) {
            if (a == b)
                return 0;
            if (a.compareDocumentPosition)
                return a.compareDocumentPosition(b) & 2 ? 1 : -1;
            if (_.B && !(9 <= Number(_.Dc))) {
                if (9 == a.nodeType)
                    return -1;
                if (9 == b.nodeType)
                    return 1
            }
            if ("sourceIndex"in a || a.parentNode && "sourceIndex"in a.parentNode) {
                var c = 1 == a.nodeType
                  , d = 1 == b.nodeType;
                if (c && d)
                    return a.sourceIndex - b.sourceIndex;
                var e = a.parentNode
                  , f = b.parentNode;
                return e == f ? Mj(a, b) : !c && _.qd(e, b) ? -1 * Nj(a, b) : !d && _.qd(f, a) ? Nj(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
            }
            d = _.E(a);
            c = d.createRange();
            c.selectNode(a);
            c.collapse(!0);
            a = d.createRange();
            a.selectNode(b);
            a.collapse(!0);
            return c.compareBoundaryPoints(_.p.Range.START_TO_END, a)
        }
        ;
        Pj = function(a) {
            var b, c = arguments.length;
            if (!c)
                return null;
            if (1 == c)
                return arguments[0];
            var d = []
              , e = Infinity;
            for (b = 0; b < c; b++) {
                for (var f = [], g = arguments[b]; g; )
                    f.unshift(g),
                    g = g.parentNode;
                d.push(f);
                e = Math.min(e, f.length)
            }
            f = null;
            for (b = 0; b < e; b++) {
                g = d[0][b];
                for (var k = 1; k < c; k++)
                    if (g != d[k][b])
                        return f;
                f = g
            }
            return f
        }
        ;
        _.Qj = function(a) {
            return a.contentDocument || a.contentWindow.document
        }
        ;
        Rj = function(a) {
            return a.hasAttribute("tabindex")
        }
        ;
        Sj = function(a) {
            a = a.tabIndex;
            return "number" === typeof a && 0 <= a && 32768 > a
        }
        ;
        Tj = function(a, b) {
            b ? a.tabIndex = 0 : (a.tabIndex = -1,
            a.removeAttribute("tabIndex"))
        }
        ;
        Uj = function(a) {
            var b = [];
            _.ud(a, b, !1);
            return b.join("")
        }
        ;
        Vj = {
            rc: "mousedown",
            sc: "mouseup",
            Sc: "mousecancel",
            Pk: "mousemove",
            Rk: "mouseover",
            Qk: "mouseout",
            Nk: "mouseenter",
            Ok: "mouseleave"
        };
        Wj = function(a, b) {
            if (!a)
                return 0;
            if (_.Ed(a))
                return a.hb ? _.Ld(a.hb, b) : 0;
            a = _.Sd(a);
            if (!a)
                return 0;
            var c = 0;
            b = b && b.toString();
            for (var d in a.g)
                if (!b || d == b)
                    for (var e = a.g[d].concat(), f = 0; f < e.length; ++f)
                        _.Xd(e[f]) && ++c;
            return c
        }
        ;
        Xj = function(a, b, c) {
            this.promise = a;
            this.resolve = b;
            this.reject = c
        }
        ;
        Yj = function() {
            var a, b, c = new _.se(function(d, e) {
                a = d;
                b = e
            }
            );
            return new Xj(c,a,b)
        }
        ;
        Zj = function(a) {
            if (a instanceof _.lf)
                return a;
            if ("function" == typeof a.Ha)
                return a.Ha(!1);
            if (_.da(a)) {
                var b = 0
                  , c = new _.lf;
                c.next = function() {
                    for (; ; ) {
                        if (b >= a.length)
                            return _.mf;
                        if (b in a)
                            return _.nf(a[b++]);
                        b++
                    }
                }
                ;
                var d = c.next;
                c.Ka = function() {
                    return _.of(d.call(c))
                }
                ;
                return c
            }
            throw Error("F");
        }
        ;
        ak = function(a, b, c) {
            for (a = Zj(a); ; ) {
                var d = void 0;
                try {
                    d = a.Ka()
                } catch (e) {
                    if (e === _.kf)
                        break;
                    throw e;
                }
                try {
                    if (!b.call(c, d, void 0, a))
                        break
                } catch (e) {
                    if (e === _.kf)
                        throw Error("E");
                    throw e;
                }
            }
        }
        ;
        bk = function(a) {
            if (a.Ub && "function" == typeof a.Ub)
                return a.Ub();
            if (!a.jb || "function" != typeof a.jb) {
                if ("undefined" !== typeof Map && a instanceof Map)
                    return Array.from(a.keys());
                if (!("undefined" !== typeof Set && a instanceof Set)) {
                    if (_.da(a) || "string" === typeof a) {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++)
                            b.push(c);
                        return b
                    }
                    return ii(a)
                }
            }
        }
        ;
        ck = function(a, b, c) {
            if (a.forEach && "function" == typeof a.forEach)
                a.forEach(b, c);
            else if (_.da(a) || "string" === typeof a)
                Array.prototype.forEach.call(a, b, c);
            else
                for (var d = bk(a), e = Ti(a), f = e.length, g = 0; g < f; g++)
                    b.call(c, e[g], d && d[g], a)
        }
        ;
        dk = function(a, b) {
            this.h = this.g = null;
            this.j = a || null;
            this.l = !!b
        }
        ;
        ek = function(a) {
            a.g || (a.g = new Map,
            a.h = 0,
            a.j && _.Jf(a.j, function(b, c) {
                a.add(_.ad(b), c)
            }))
        }
        ;
        dk.prototype.add = function(a, b) {
            ek(this);
            this.j = null;
            a = fk(this, a);
            var c = this.g.get(a);
            c || this.g.set(a, c = []);
            c.push(b);
            this.h += 1;
            return this
        }
        ;
        dk.prototype.remove = function(a) {
            ek(this);
            a = fk(this, a);
            return this.g.has(a) ? (this.j = null,
            this.h -= this.g.get(a).length,
            this.g.delete(a)) : !1
        }
        ;
        var gk = function(a, b) {
            ek(a);
            b = fk(a, b);
            return a.g.has(b)
        };
        _.h = dk.prototype;
        _.h.forEach = function(a, b) {
            ek(this);
            this.g.forEach(function(c, d) {
                c.forEach(function(e) {
                    a.call(b, e, d, this)
                }, this)
            }, this)
        }
        ;
        _.h.Ub = function() {
            ek(this);
            for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
                for (var e = a[d], f = 0; f < e.length; f++)
                    c.push(b[d]);
            return c
        }
        ;
        _.h.jb = function(a) {
            ek(this);
            var b = [];
            if ("string" === typeof a)
                gk(this, a) && (b = b.concat(this.g.get(fk(this, a))));
            else {
                a = Array.from(this.g.values());
                for (var c = 0; c < a.length; c++)
                    b = b.concat(a[c])
            }
            return b
        }
        ;
        _.h.set = function(a, b) {
            ek(this);
            this.j = null;
            a = fk(this, a);
            gk(this, a) && (this.h -= this.g.get(a).length);
            this.g.set(a, [b]);
            this.h += 1;
            return this
        }
        ;
        _.h.get = function(a, b) {
            if (!a)
                return b;
            a = this.jb(a);
            return 0 < a.length ? String(a[0]) : b
        }
        ;
        var hk = function(a, b, c) {
            a.remove(b);
            0 < c.length && (a.j = null,
            a.g.set(fk(a, b), _.wa(c)),
            a.h += c.length)
        };
        dk.prototype.toString = function() {
            if (this.j)
                return this.j;
            if (!this.g)
                return "";
            for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
                var d = b[c]
                  , e = _.$c(d);
                d = this.jb(d);
                for (var f = 0; f < d.length; f++) {
                    var g = e;
                    "" !== d[f] && (g += "=" + _.$c(d[f]));
                    a.push(g)
                }
            }
            return this.j = a.join("&")
        }
        ;
        var ik = function(a) {
            var b = new dk;
            b.j = a.j;
            a.g && (b.g = new Map(a.g),
            b.h = a.h);
            return b
        }
          , fk = function(a, b) {
            b = String(b);
            a.l && (b = b.toLowerCase());
            return b
        }
          , jk = function(a, b) {
            b && !a.l && (ek(a),
            a.j = null,
            a.g.forEach(function(c, d) {
                var e = d.toLowerCase();
                d != e && (this.remove(d),
                hk(this, e, c))
            }, a));
            a.l = b
        };
        dk.prototype.o = function(a) {
            for (var b = 0; b < arguments.length; b++)
                ck(arguments[b], function(c, d) {
                    this.add(d, c)
                }, this)
        }
        ;
        var kk = /[#\/\?@]/g
          , lk = /[#\?]/g
          , mk = /[#\?:]/g
          , nk = /#/g
          , ok = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        }
          , pk = /[#\?@]/g
          , qk = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        }
          , rk = function(a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, qk),
            c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            a) : null
        }
          , sk = function(a) {
            this.j = this.C = this.l = "";
            this.B = null;
            this.s = this.h = "";
            this.o = !1;
            var b;
            a instanceof sk ? (this.o = a.o,
            tk(this, a.l),
            this.C = a.C,
            this.j = a.j,
            uk(this, a.B),
            this.h = a.h,
            vk(this, ik(a.g)),
            this.s = a.s) : a && (b = String(a).match(_.Hf)) ? (this.o = !1,
            tk(this, b[1] || "", !0),
            this.C = ok(b[2] || ""),
            this.j = ok(b[3] || "", !0),
            uk(this, b[4]),
            this.h = ok(b[5] || "", !0),
            vk(this, b[6] || "", !0),
            this.s = ok(b[7] || "")) : (this.o = !1,
            this.g = new dk(null,this.o))
        };
        sk.prototype.toString = function() {
            var a = []
              , b = this.l;
            b && a.push(rk(b, kk, !0), ":");
            var c = this.j;
            if (c || "file" == b)
                a.push("//"),
                (b = this.C) && a.push(rk(b, kk, !0), "@"),
                a.push(_.$c(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                c = this.B,
                null != c && a.push(":", String(c));
            if (c = this.h)
                this.j && "/" != c.charAt(0) && a.push("/"),
                a.push(rk(c, "/" == c.charAt(0) ? lk : mk, !0));
            (c = this.g.toString()) && a.push("?", c);
            (c = this.s) && a.push("#", rk(c, nk));
            return a.join("")
        }
        ;
        sk.prototype.resolve = function(a) {
            var b = new sk(this)
              , c = !!a.l;
            c ? tk(b, a.l) : c = !!a.C;
            c ? b.C = a.C : c = !!a.j;
            c ? b.j = a.j : c = null != a.B;
            var d = a.h;
            if (c)
                uk(b, a.B);
            else if (c = !!a.h) {
                if ("/" != d.charAt(0))
                    if (this.j && !this.h)
                        d = "/" + d;
                    else {
                        var e = b.h.lastIndexOf("/");
                        -1 != e && (d = b.h.substr(0, e + 1) + d)
                    }
                e = d;
                if (".." == e || "." == e)
                    d = "";
                else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                    d = 0 == e.lastIndexOf("/", 0);
                    e = e.split("/");
                    for (var f = [], g = 0; g < e.length; ) {
                        var k = e[g++];
                        "." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                        d && g == e.length && f.push("")) : (f.push(k),
                        d = !0)
                    }
                    d = f.join("/")
                } else
                    d = e
            }
            c ? b.h = d : c = "" !== a.g.toString();
            c ? vk(b, ik(a.g)) : c = !!a.s;
            c && (b.s = a.s);
            return b
        }
        ;
        tk = function(a, b, c) {
            a.l = c ? ok(b, !0) : b;
            a.l && (a.l = a.l.replace(/:$/, ""))
        }
        ;
        uk = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b)
                    throw Error("L`" + b);
                a.B = b
            } else
                a.B = null
        }
        ;
        vk = function(a, b, c) {
            b instanceof dk ? (a.g = b,
            jk(a.g, a.o)) : (c || (b = rk(b, pk)),
            a.g = new dk(b,a.o))
        }
        ;
        wk = function(a) {
            var b = bk(a);
            if ("undefined" == typeof b)
                throw Error("N");
            var c = new dk(null,void 0);
            a = Ti(a);
            for (var d = 0; d < b.length; d++) {
                var e = b[d]
                  , f = a[d];
                Array.isArray(f) ? hk(c, e, f) : c.add(e, f)
            }
            return c
        }
        ;
        xk = {};
        _.yk = {};
        wi = {};
        _.zk = function(a) {
            (0,
            _.dg)();
            return _.Tc(a, null)
        }
        ;
        Ak = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            var d = _.Fh(a, b, c);
            null == d && (d = _.Dh);
            d === _.Dh && (d = _.eh(d.slice()),
            _.Gh(a, b, d, c));
            return d
        }
        ;
        Bk = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            a.g || (a.g = {});
            var e = a.g[b];
            if (!e) {
                d = Ak(a, b, void 0 === d ? !1 : d);
                e = [];
                for (var f = 0; f < d.length; f++)
                    e[f] = new c(d[f]);
                a.g[b] = e
            }
            c = new c;
            a = Ak(a, b);
            e.push(c);
            a.push(c.kb);
            return c
        }
        ;
        Ck = function(a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        }
        ;
        _.h = Ck.prototype;
        _.h.contains = function(a) {
            return this && a ? a instanceof Ck ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
        }
        ;
        _.h.ceil = function() {
            this.top = Math.ceil(this.top);
            this.right = Math.ceil(this.right);
            this.bottom = Math.ceil(this.bottom);
            this.left = Math.ceil(this.left);
            return this
        }
        ;
        _.h.floor = function() {
            this.top = Math.floor(this.top);
            this.right = Math.floor(this.right);
            this.bottom = Math.floor(this.bottom);
            this.left = Math.floor(this.left);
            return this
        }
        ;
        _.h.round = function() {
            this.top = Math.round(this.top);
            this.right = Math.round(this.right);
            this.bottom = Math.round(this.bottom);
            this.left = Math.round(this.left);
            return this
        }
        ;
        _.h.translate = function(a, b) {
            a instanceof N ? (this.left += a.x,
            this.right += a.x,
            this.top += a.y,
            this.bottom += a.y) : (this.left += a,
            this.right += a,
            "number" === typeof b && (this.top += b,
            this.bottom += b));
            return this
        }
        ;
        var Dk = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        };
        _.h = Dk.prototype;
        _.h.contains = function(a) {
            return a instanceof N ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
        }
        ;
        _.h.ceil = function() {
            this.left = Math.ceil(this.left);
            this.top = Math.ceil(this.top);
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        }
        ;
        _.h.floor = function() {
            this.left = Math.floor(this.left);
            this.top = Math.floor(this.top);
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        }
        ;
        _.h.round = function() {
            this.left = Math.round(this.left);
            this.top = Math.round(this.top);
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        }
        ;
        _.h.translate = function(a, b) {
            a instanceof N ? (this.left += a.x,
            this.top += a.y) : (this.left += a,
            "number" === typeof b && (this.top += b));
            return this
        }
        ;
        Ek = function(a, b) {
            var c = _.E(a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
        }
        ;
        Fk = function(a, b) {
            return Ek(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        }
        ;
        Gk = function(a) {
            "number" == typeof a && (a += "px");
            return a
        }
        ;
        _.Hk = function(a, b, c) {
            if (b instanceof N) {
                var d = b.x;
                b = b.y
            } else
                d = b,
                b = c;
            a.style.left = Gk(d);
            a.style.top = Gk(b)
        }
        ;
        Ik = function(a) {
            a = a ? _.E(a) : document;
            return !_.B || 9 <= Number(_.Dc) || _.gd(_.F(a).U) ? a.documentElement : a.body
        }
        ;
        Jk = function(a) {
            try {
                return a.getBoundingClientRect()
            } catch (b) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
        }
        ;
        Kk = function(a) {
            if (_.B && !(8 <= Number(_.Dc)))
                return a.offsetParent;
            var b = _.E(a)
              , c = Fk(a, "position")
              , d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType && a.host && (a = a.host),
                c = Fk(a, "position"),
                d = d && "static" == c && a != b.documentElement && a != b.body,
                !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                    return a;
            return null
        }
        ;
        Lk = function(a) {
            var b = _.E(a)
              , c = new N(0,0)
              , d = Ik(b);
            if (a == d)
                return c;
            a = Jk(a);
            b = _.Ri(_.F(b).U);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        }
        ;
        Mk = function(a) {
            for (var b = new Ck(0,Infinity,Infinity,0), c = _.F(a), d = c.U.body, e = c.U.documentElement, f = Qi(c.U); a = Kk(a); )
                if (!(_.B && 0 == a.clientWidth || _.D && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != Fk(a, "overflow")) {
                    var g = Lk(a)
                      , k = new N(a.clientLeft,a.clientTop);
                    g.x += k.x;
                    g.y += k.y;
                    b.top = Math.max(b.top, g.y);
                    b.right = Math.min(b.right, g.x + a.clientWidth);
                    b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                    b.left = Math.max(b.left, g.x)
                }
            d = f.scrollLeft;
            f = f.scrollTop;
            b.left = Math.max(b.left, d);
            b.top = Math.max(b.top, f);
            c = _.hd(_.xd(c) || window);
            b.right = Math.min(b.right, d + c.width);
            b.bottom = Math.min(b.bottom, f + c.height);
            return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
        }
        ;
        Nk = function(a) {
            var b = a.offsetWidth
              , c = a.offsetHeight
              , d = _.D && !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect ? (a = Jk(a),
            new _.Yc(a.right - a.left,a.bottom - a.top)) : new _.Yc(b,c)
        }
        ;
        _.Ok = function(a, b) {
            var c = new N(0,0)
              , d = _.id(_.E(a));
            if (!_.fc(d, "parent"))
                return c;
            do {
                if (d == b)
                    var e = Lk(a);
                else
                    e = Jk(a),
                    e = new N(e.left,e.top);
                c.x += e.x;
                c.y += e.y
            } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
            return c
        }
        ;
        Pk = function(a) {
            if ("none" != Fk(a, "display"))
                return Nk(a);
            var b = a.style
              , c = b.display
              , d = b.visibility
              , e = b.position;
            b.visibility = "hidden";
            b.position = "absolute";
            b.display = "inline";
            a = Nk(a);
            b.display = c;
            b.position = e;
            b.visibility = d;
            return a
        }
        ;
        _.O = function(a, b) {
            a.style.display = b ? "" : "none"
        }
        ;
        Qk = function(a) {
            return "rtl" == Fk(a, "direction")
        }
        ;
        Rk = function(a, b, c) {
            c = c ? null : a.getElementsByTagName("*");
            if (_.Qh) {
                if (b = b ? "none" : "",
                a.style && (a.style[_.Qh] = b),
                c) {
                    a = 0;
                    for (var d; d = c[a]; a++)
                        d.style && (d.style[_.Qh] = b)
                }
            } else if (_.B && (b = b ? "on" : "",
            a.setAttribute("unselectable", b),
            c))
                for (a = 0; d = c[a]; a++)
                    d.setAttribute("unselectable", b)
        }
        ;
        _.Sk = function(a) {
            return new _.Yc(a.offsetWidth,a.offsetHeight)
        }
        ;
        Tk = function(a, b, c) {
            a = a.style;
            _.C ? a.MozBoxSizing = c : _.D ? a.WebkitBoxSizing = c : a.boxSizing = c;
            a.width = Math.max(b.width, 0) + "px";
            a.height = Math.max(b.height, 0) + "px"
        }
        ;
        Uk = function(a, b, c, d) {
            if (/^\d+px?$/.test(b))
                return parseInt(b, 10);
            var e = a.style[c]
              , f = a.runtimeStyle[c];
            a.runtimeStyle[c] = a.currentStyle[c];
            a.style[c] = b;
            b = a.style[d];
            a.style[c] = e;
            a.runtimeStyle[c] = f;
            return +b
        }
        ;
        Vk = function(a, b) {
            return (b = a.currentStyle ? a.currentStyle[b] : null) ? Uk(a, b, "left", "pixelLeft") : 0
        }
        ;
        Wk = function(a) {
            if (_.B) {
                var b = Vk(a, "paddingLeft")
                  , c = Vk(a, "paddingRight")
                  , d = Vk(a, "paddingTop");
                a = Vk(a, "paddingBottom");
                return new Ck(d,c,a,b)
            }
            b = Ek(a, "paddingLeft");
            c = Ek(a, "paddingRight");
            d = Ek(a, "paddingTop");
            a = Ek(a, "paddingBottom");
            return new Ck(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))
        }
        ;
        Xk = {
            thin: 2,
            medium: 4,
            thick: 6
        };
        Yk = function(a, b) {
            if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
                return 0;
            b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
            return b in Xk ? Xk[b] : Uk(a, b, "left", "pixelLeft")
        }
        ;
        Zk = function(a) {
            if (_.B && !(9 <= Number(_.Dc))) {
                var b = Yk(a, "borderLeft")
                  , c = Yk(a, "borderRight")
                  , d = Yk(a, "borderTop");
                a = Yk(a, "borderBottom");
                return new Ck(d,c,a,b)
            }
            b = Ek(a, "borderLeftWidth");
            c = Ek(a, "borderRightWidth");
            d = Ek(a, "borderTopWidth");
            a = Ek(a, "borderBottomWidth");
            return new Ck(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))
        }
        ;
        _.$k = function(a, b) {
            var c = _.gd(_.F(_.E(a)).U);
            if (!_.B || _.Ac("10") || c)
                Tk(a, b, "content-box");
            else {
                var d = a.style;
                c ? (d.pixelWidth = b.width,
                d.pixelHeight = b.height) : (c = Wk(a),
                a = Zk(a),
                d.pixelWidth = b.width + a.left + c.left + c.right + a.right,
                d.pixelHeight = b.height + a.top + c.top + c.bottom + a.bottom)
            }
        }
        ;
        _.al = function(a, b) {
            return null != a && a.Fb === b
        }
        ;
        bl = function(a) {
            if (null != a)
                switch (a.Md) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0
                }
            return null
        }
        ;
        _.cl = function(a, b) {
            return a && b && a.kj && b.kj ? a.Fb !== b.Fb ? !1 : a.toString() === b.toString() : a instanceof _.Mf && b instanceof _.Mf ? a.Fb != b.Fb ? !1 : a.toString() == b.toString() : a == b
        }
        ;
        dl = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
        el = /</g;
        fl = {
            "\x00": "&#0;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "-": "&#45;",
            "/": "&#47;",
            "<": "&lt;",
            "=": "&#61;",
            ">": "&gt;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        };
        gl = function(a) {
            return fl[a]
        }
        ;
        hl = {
            "\x00": "\\0 ",
            "\b": "\\8 ",
            "\t": "\\9 ",
            "\n": "\\a ",
            "\v": "\\b ",
            "\f": "\\c ",
            "\r": "\\d ",
            '"': "\\22 ",
            "&": "\\26 ",
            "'": "\\27 ",
            "(": "\\28 ",
            ")": "\\29 ",
            "*": "\\2a ",
            "/": "\\2f ",
            ":": "\\3a ",
            ";": "\\3b ",
            "<": "\\3c ",
            "=": "\\3d ",
            ">": "\\3e ",
            "@": "\\40 ",
            "\\": "\\5c ",
            "{": "\\7b ",
            "}": "\\7d ",
            "\u0085": "\\85 ",
            "\u00a0": "\\a0 ",
            "\u2028": "\\2028 ",
            "\u2029": "\\2029 "
        };
        _.il = function(a) {
            return hl[a]
        }
        ;
        jl = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\v": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        };
        kl = function(a) {
            return jl[a]
        }
        ;
        ll = /[\x00\x22\x26\x27\x3c\x3e]/g;
        _.ml = function(a) {
            return _.al(a, _.Yh) ? a : a instanceof _.Rc ? (0,
            _.ai)(_.Sc(a).toString(), a.$b()) : (0,
            _.ai)(String(String(a)).replace(ll, gl), bl(a))
        }
        ;
        nl = /[\x00\x22\x27\x3c\x3e]/g;
        _.P = function(a) {
            if (_.al(a, _.Yh)) {
                var b = String;
                a = String(a.wa()).replace(dl, "").replace(el, "&lt;");
                b = b(a).replace(nl, gl)
            } else
                b = String(a).replace(ll, gl);
            return b
        }
        ;
        _.ol = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g;
        pl = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;
        _.ql = function(a) {
            return String(a).replace(pl, kl)
        }
        ;
        rl = /^(?:(?:https?|mailto|ftp):|[^&:\/?#]*(?:[\/?#]|$))/i;
        _.sl = function(a) {
            _.al(a, xk) || _.al(a, _.yk) ? a = _.ql(a) : a instanceof _.Hc ? a = _.ql(_.Th(a)) : a instanceof _.Lb ? a = _.ql(_.Wa(a).toString()) : "function" == typeof _.Va && a instanceof _.Va ? a = _.ql(_.si(a)) : (a = String(a),
            a = rl.test(a) ? a.replace(pl, kl) : "about:invalid#zSoyz");
            return a
        }
        ;
        tl = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;
        _.ul = function(a) {
            _.al(a, xk) || _.al(a, _.yk) ? a = _.ql(a) : a instanceof _.Hc ? a = _.ql(_.Th(a)) : a instanceof _.Lb ? a = _.ql(_.Wa(a).toString()) : "function" == typeof _.Va && a instanceof _.Va ? a = _.ql(_.si(a)) : (a = String(a),
            a = tl.test(a) ? a.replace(pl, kl) : "about:invalid#zSoyz");
            return a
        }
        ;
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        var vl, wl, xl, yl, zl, Bl;
        vl = function(a) {
            return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
        }
        ;
        wl = function(a) {
            return a.classList ? a.classList : vl(a).match(/\S+/g) || []
        }
        ;
        xl = function(a, b) {
            "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        }
        ;
        yl = function(a, b) {
            return a.classList ? a.classList.contains(b) : _.ta(wl(a), b)
        }
        ;
        _.R = function(a, b) {
            if (a.classList)
                a.classList.add(b);
            else if (!yl(a, b)) {
                var c = vl(a);
                xl(a, c + (0 < c.length ? " " + b : b))
            }
        }
        ;
        zl = function(a, b) {
            if (a.classList)
                Array.prototype.forEach.call(b, function(e) {
                    _.R(a, e)
                });
            else {
                var c = {};
                Array.prototype.forEach.call(wl(a), function(e) {
                    c[e] = !0
                });
                Array.prototype.forEach.call(b, function(e) {
                    c[e] = !0
                });
                b = "";
                for (var d in c)
                    b += 0 < b.length ? " " + d : d;
                xl(a, b)
            }
        }
        ;
        _.Al = function(a, b) {
            a.classList ? a.classList.remove(b) : yl(a, b) && xl(a, Array.prototype.filter.call(wl(a), function(c) {
                return c != b
            }).join(" "))
        }
        ;
        Bl = function(a, b) {
            a.classList ? Array.prototype.forEach.call(b, function(c) {
                _.Al(a, c)
            }) : xl(a, Array.prototype.filter.call(wl(a), function(c) {
                return !_.ta(b, c)
            }).join(" "))
        }
        ;
        var Cl = function() {};
        Cl.prototype.h = function() {}
        ;
        var Dl = function() {
            if (_.mc) {
                var a = /Windows NT ([0-9.]+)/;
                return (a = a.exec(_.Ba())) ? a[1] : "0"
            }
            return _.lc ? (a = /1[0|1][_.][0-9_.]+/,
            (a = a.exec(_.Ba())) ? a[0].replace(/_/g, ".") : "10") : _.oc ? (a = /Android\s+([^\);]+)(\)|;)/,
            (a = a.exec(_.Ba())) ? a[1] : "") : _.pc || _.qc || _.rc ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/,
            (a = a.exec(_.Ba())) ? a[1].replace(/_/g, ".") : "") : ""
        }();
        var El = function(a) {
            return (a = a.exec(_.Ba())) ? a[1] : ""
        }
          , Fl = function() {
            if (_.Yg)
                return El(/Firefox\/([0-9.]+)/);
            if (_.B || _.ic || _.hc)
                return _.yc;
            if (_.bh) {
                if (_.Ea() || _.t("Macintosh")) {
                    var a = El(/CriOS\/([0-9.]+)/);
                    if (a)
                        return a
                }
                return El(/Chrome\/([0-9.]+)/)
            }
            if (_.ch && !_.Ea())
                return El(/Version\/([0-9.]+)/);
            if (_.Zg || _.$g) {
                if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(_.Ba()))
                    return a[1] + "." + a[2]
            } else if (_.ah)
                return (a = El(/Android\s+([0-9.]+)/)) ? a : El(/Version\/([0-9.]+)/);
            return ""
        }();
        var Jl = function(a, b, c, d, e, f, g, k, l) {
            var m = Gl(c);
            var n = Lk(a);
            var q = Pk(a);
            n = new Dk(n.x,n.y,q.width,q.height);
            if (q = Mk(a)) {
                var r = new Dk(q.left,q.top,q.right - q.left,q.bottom - q.top);
                q = Math.max(n.left, r.left);
                var z = Math.min(n.left + n.width, r.left + r.width);
                if (q <= z) {
                    var G = Math.max(n.top, r.top);
                    r = Math.min(n.top + n.height, r.top + r.height);
                    G <= r && (n.left = q,
                    n.top = G,
                    n.width = z - q,
                    n.height = r - G)
                }
            }
            q = _.F(a);
            G = _.F(c);
            q.U != G.U && (z = q.U.body,
            G = _.Ok(z, _.xd(G)),
            G = sj(G, Lk(z)),
            !_.B || 9 <= Number(_.Dc) || _.gd(q.U) || (G = sj(G, _.Ri(q.U))),
            n.left += G.x,
            n.top += G.y);
            a = Hl(a, b);
            b = n.left;
            a & 4 ? b += n.width : a & 2 && (b += n.width / 2);
            b = new N(b,n.top + (a & 1 ? n.height : 0));
            b = sj(b, m);
            e && (b.x += (a & 4 ? -1 : 1) * e.x,
            b.y += (a & 1 ? -1 : 1) * e.y);
            if (g)
                if (l)
                    var Q = l;
                else if (Q = Mk(c))
                    Q.top -= m.y,
                    Q.right -= m.x,
                    Q.bottom -= m.y,
                    Q.left -= m.x;
            return Il(b, c, d, f, Q, g, k)
        }
          , Gl = function(a) {
            if (a = a.offsetParent) {
                var b = "HTML" == a.tagName || "BODY" == a.tagName;
                if (!b || "static" != Fk(a, "position")) {
                    var c = Lk(a);
                    if (!b) {
                        b = Qk(a);
                        var d;
                        if (d = b) {
                            d = _.ch && 0 <= _.dc(Fl, 10);
                            var e;
                            if (e = _.sc)
                                e = 0 <= _.dc(Dl, 10);
                            var f = _.bh && 0 <= _.dc(Fl, 85);
                            d = _.C || d || e || f
                        }
                        b = d ? -a.scrollLeft : b && !_.jc && "visible" != Fk(a, "overflowX") ? a.scrollWidth - a.clientWidth - a.scrollLeft : a.scrollLeft;
                        c = sj(c, new N(b,a.scrollTop))
                    }
                }
            }
            return c || new N
        }
          , Il = function(a, b, c, d, e, f, g) {
            a = Ni(a);
            var k = Hl(b, c);
            c = Pk(b);
            g = g ? new _.Yc(g.width,g.height) : new _.Yc(c.width,c.height);
            a = Ni(a);
            g = new _.Yc(g.width,g.height);
            var l = 0;
            if (d || 0 != k)
                k & 4 ? a.x -= g.width + (d ? d.right : 0) : k & 2 ? a.x -= g.width / 2 : d && (a.x += d.left),
                k & 1 ? a.y -= g.height + (d ? d.bottom : 0) : d && (a.y += d.top);
            if (f) {
                if (e) {
                    d = a;
                    k = g;
                    l = 0;
                    65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                    132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
                    d.x < e.left && f & 1 && (d.x = e.left,
                    l |= 1);
                    if (f & 16) {
                        var m = d.x;
                        d.x < e.left && (d.x = e.left,
                        l |= 4);
                        d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, m + k.width - e.left),
                        k.width = Math.max(k.width, 0),
                        l |= 4)
                    }
                    d.x + k.width > e.right && f & 1 && (d.x = Math.max(e.right - k.width, e.left),
                    l |= 1);
                    f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                    d.y < e.top && f & 4 && (d.y = e.top,
                    l |= 2);
                    f & 32 && (m = d.y,
                    d.y < e.top && (d.y = e.top,
                    l |= 8),
                    d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, m + k.height - e.top),
                    k.height = Math.max(k.height, 0),
                    l |= 8));
                    d.y + k.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - k.height, e.top),
                    l |= 2);
                    f & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
                    e = l
                } else
                    e = 256;
                l = e
            }
            f = new Dk(0,0,0,0);
            f.left = a.x;
            f.top = a.y;
            f.width = g.width;
            f.height = g.height;
            e = l;
            if (e & 496)
                return e;
            _.Hk(b, new N(f.left,f.top));
            g = new _.Yc(f.width,f.height);
            _.Zc(c, g) || (c = g,
            a = _.gd(_.F(_.E(b)).U),
            !_.B || _.Ac("10") || a ? Tk(b, c, "border-box") : (g = b.style,
            a ? (a = Wk(b),
            b = Zk(b),
            g.pixelWidth = c.width - b.left - a.left - a.right - b.right,
            g.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (g.pixelWidth = c.width,
            g.pixelHeight = c.height)));
            return e
        }
          , Hl = function(a, b) {
            return (b & 8 && Qk(a) ? b ^ 4 : b) & -9
        };
        var Kl;
        var Ll = function(a, b) {
            b ? a.setAttribute("role", b) : a.removeAttribute("role")
        }
          , Ml = function(a, b, c) {
            Array.isArray(c) && (c = c.join(" "));
            var d = "aria-" + b;
            "" === c || void 0 == c ? (Kl || (Kl = {
                atomic: !1,
                autocomplete: "none",
                dropeffect: "none",
                haspopup: !1,
                live: "off",
                multiline: !1,
                multiselectable: !1,
                orientation: "vertical",
                readonly: !1,
                relevant: "additions text",
                required: !1,
                sort: "none",
                busy: !1,
                disabled: !1,
                hidden: !1,
                invalid: "false"
            }),
            c = Kl,
            b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
        };
        var Nl = function(a, b, c) {
            _.y.call(this);
            this.h = a;
            this.l = b || 0;
            this.j = c;
            this.g = (0,
            _.w)(this.Mh, this)
        };
        _.x(Nl, _.y);
        _.h = Nl.prototype;
        _.h.nc = 0;
        _.h.L = function() {
            Nl.G.L.call(this);
            this.stop();
            delete this.h;
            delete this.j
        }
        ;
        _.h.start = function(a) {
            this.stop();
            this.nc = _.ng(this.g, void 0 !== a ? a : this.l)
        }
        ;
        _.h.stop = function() {
            0 != this.nc && _.og(this.nc);
            this.nc = 0
        }
        ;
        _.h.Mh = function() {
            this.nc = 0;
            this.h && this.h.call(this.j)
        }
        ;
        var Ol = function(a) {
            var b = "kc";
            if (a.kc && a.hasOwnProperty(b))
                return a.kc;
            b = new a;
            return a.kc = b
        };
        var Ql = function(a) {
            if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode)
                return !1;
            if (Pl(a.keyCode))
                return !0;
            switch (a.keyCode) {
            case 18:
            case 20:
            case 93:
            case 17:
            case 40:
            case 35:
            case 27:
            case 36:
            case 45:
            case 37:
            case 224:
            case 91:
            case 144:
            case 12:
            case 34:
            case 33:
            case 19:
            case 255:
            case 44:
            case 39:
            case 145:
            case 16:
            case 38:
            case 252:
            case 224:
            case 92:
                return !1;
            case 0:
                return !_.C;
            default:
                return 166 > a.keyCode || 183 < a.keyCode
            }
        }
          , Sl = function(a, b, c, d, e, f) {
            if (_.lc && e)
                return Pl(a);
            if (e && !d)
                return !1;
            if (!_.C) {
                "number" === typeof b && (b = Rl(b));
                var g = 17 == b || 18 == b || _.lc && 91 == b;
                if ((!c || _.lc) && g || _.lc && 16 == b && (d || f))
                    return !1
            }
            if ((_.D || _.ic) && d && c)
                switch (a) {
                case 220:
                case 219:
                case 221:
                case 192:
                case 186:
                case 189:
                case 187:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                    return !1
                }
            if (_.B && d && b == a)
                return !1;
            switch (a) {
            case 13:
                return _.C ? f || e ? !1 : !(c && d) : !0;
            case 27:
                return !(_.D || _.ic || _.C)
            }
            return _.C && (d || e || f) ? !1 : Pl(a)
        }
          , Pl = function(a) {
            if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (_.D || _.ic) && 0 == a)
                return !0;
            switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
            case 163:
            case 58:
                return !0;
            case 173:
                return _.C;
            default:
                return !1
            }
        }
          , Rl = function(a) {
            if (_.C)
                a = Tl(a);
            else if (_.lc && _.D)
                switch (a) {
                case 93:
                    a = 91
                }
            return a
        }
          , Tl = function(a) {
            switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
            }
        };
        var Ul = function(a, b, c, d) {
            _.Cd.call(this, d);
            this.type = "key";
            this.keyCode = a;
            this.charCode = b;
            this.repeat = c
        };
        _.x(Ul, _.Cd);
        var Vl = function(a, b) {
            _.I.call(this);
            a && this.attach(a, b)
        };
        _.x(Vl, _.I);
        _.h = Vl.prototype;
        _.h.I = null;
        _.h.ce = null;
        _.h.tf = null;
        _.h.de = null;
        _.h.Ya = -1;
        _.h.Ib = -1;
        _.h.Ne = !1;
        var Wl = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45
        }
          , Xl = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        }
          , Yl = _.lc && _.C;
        _.h = Vl.prototype;
        _.h.Pi = function(a) {
            if (_.D || _.ic)
                if (17 == this.Ya && !a.ctrlKey || 18 == this.Ya && !a.altKey || _.lc && 91 == this.Ya && !a.metaKey)
                    this.Ib = this.Ya = -1;
            -1 == this.Ya && (a.ctrlKey && 17 != a.keyCode ? this.Ya = 17 : a.altKey && 18 != a.keyCode ? this.Ya = 18 : a.metaKey && 91 != a.keyCode && (this.Ya = 91));
            Sl(a.keyCode, this.Ya, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? (this.Ib = Rl(a.keyCode),
            Yl && (this.Ne = a.altKey)) : this.handleEvent(a)
        }
        ;
        _.h.Qi = function(a) {
            this.Ib = this.Ya = -1;
            this.Ne = a.altKey
        }
        ;
        _.h.handleEvent = function(a) {
            var b = a.g
              , c = b.altKey;
            if (_.B && "keypress" == a.type) {
                var d = this.Ib;
                var e = 13 != d && 27 != d ? b.keyCode : 0
            } else
                (_.D || _.ic) && "keypress" == a.type ? (d = this.Ib,
                e = 0 <= b.charCode && 63232 > b.charCode && Pl(d) ? b.charCode : 0) : ("keypress" == a.type ? (Yl && (c = this.Ne),
                b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode,
                e = 0) : (d = this.Ib,
                e = b.charCode) : (d = b.keyCode || this.Ib,
                e = b.charCode || 0)) : (d = b.keyCode || this.Ib,
                e = b.charCode || 0),
                _.lc && 63 == e && 224 == d && (d = 191));
            var f = d = Rl(d);
            d ? 63232 <= d && d in Wl ? f = Wl[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in Xl && (f = Xl[b.keyIdentifier]);
            if (!_.C || "keypress" != a.type || Sl(f, this.Ya, a.shiftKey, a.ctrlKey, c, a.metaKey))
                a = f == this.Ya,
                this.Ya = f,
                b = new Ul(f,e,a,b),
                b.altKey = c,
                this.dispatchEvent(b)
        }
        ;
        _.h.A = function() {
            return this.I
        }
        ;
        _.h.attach = function(a, b) {
            this.de && Zl(this);
            this.I = a;
            this.ce = _.H(this.I, "keypress", this, b);
            this.tf = _.H(this.I, "keydown", this.Pi, b, this);
            this.de = _.H(this.I, "keyup", this.Qi, b, this)
        }
        ;
        var Zl = function(a) {
            a.ce && (_.Xd(a.ce),
            _.Xd(a.tf),
            _.Xd(a.de),
            a.ce = null,
            a.tf = null,
            a.de = null);
            a.I = null;
            a.Ya = -1;
            a.Ib = -1
        };
        Vl.prototype.L = function() {
            Vl.G.L.call(this);
            Zl(this)
        }
        ;
        var $l = function() {};
        Vi($l);
        $l.prototype.g = 0;
        var hm;
        _.M = function(a) {
            _.I.call(this);
            this.g = a || _.F();
            this.Na = am;
            this.Z = null;
            this.ia = !1;
            this.I = null;
            this.W = void 0;
            this.M = this.C = this.K = this.ob = null;
            this.Sb = !1
        }
        ;
        _.x(_.M, _.I);
        _.M.prototype.uc = $l.ea();
        var am = null
          , bm = function(a, b) {
            switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? "highlight" : "unhighlight";
            case 4:
                return b ? "activate" : "deactivate";
            case 8:
                return b ? "select" : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? "focus" : "blur";
            case 64:
                return b ? "open" : "close"
            }
            throw Error("ea");
        };
        _.M.prototype.ib = function() {
            return this.Z || (this.Z = ":" + (this.uc.g++).toString(36))
        }
        ;
        var cm = function(a, b) {
            if (a.K && a.K.M) {
                var c = a.K.M
                  , d = a.Z;
                d in c && delete c[d];
                c = a.K.M;
                if (null !== c && b in c)
                    throw Error("t`" + b);
                c[b] = a
            }
            a.Z = b
        };
        _.M.prototype.A = function() {
            return this.I
        }
        ;
        var dm = function(a, b) {
            return a.I ? Pi(b, a.I || a.g.U) : null
        }
          , S = function(a) {
            a.W || (a.W = new _.J(a));
            return a.W
        }
          , fm = function(a, b) {
            if (a == b)
                throw Error("fa");
            if (b && a.K && a.Z && em(a.K, a.Z) && a.K != b)
                throw Error("fa");
            a.K = b;
            _.M.G.me.call(a, b)
        };
        _.M.prototype.T = function() {
            return this.K
        }
        ;
        _.M.prototype.me = function(a) {
            if (this.K && this.K != a)
                throw Error("ga");
            _.M.G.me.call(this, a)
        }
        ;
        _.M.prototype.N = function() {
            this.I = _.sh(this.g, "DIV")
        }
        ;
        _.M.prototype.ja = function(a) {
            _.gm(this, a)
        }
        ;
        _.gm = function(a, b, c) {
            if (a.ia)
                throw Error("ha");
            a.I || a.N();
            b ? b.insertBefore(a.I, c || null) : a.g.U.body.appendChild(a.I);
            a.K && !a.K.ia || a.Y()
        }
        ;
        hm = function(a, b) {
            if (a.ia)
                throw Error("ha");
            if (b && a.ve(b)) {
                a.Sb = !0;
                var c = _.E(b);
                a.g && a.g.U == c || (a.g = _.F(b));
                a.da(b);
                a.Y()
            } else
                throw Error("ia");
        }
        ;
        _.h = _.M.prototype;
        _.h.ve = function() {
            return !0
        }
        ;
        _.h.da = function(a) {
            this.I = a
        }
        ;
        _.h.Y = function() {
            this.ia = !0;
            im(this, function(a) {
                !a.ia && a.A() && a.Y()
            })
        }
        ;
        _.h.ca = function() {
            im(this, function(a) {
                a.ia && a.ca()
            });
            this.W && _.cg(this.W);
            this.ia = !1
        }
        ;
        _.h.L = function() {
            this.ia && this.ca();
            this.W && (this.W.R(),
            delete this.W);
            im(this, function(a) {
                a.R()
            });
            !this.Sb && this.I && _.Kj(this.I);
            this.K = this.ob = this.I = this.M = this.C = null;
            _.M.G.L.call(this)
        }
        ;
        _.T = function(a, b) {
            return a.ib() + "." + b
        }
        ;
        _.M.prototype.Uc = function(a, b) {
            this.Ke(a, jm(this), b)
        }
        ;
        _.M.prototype.Ke = function(a, b, c) {
            if (a.ia && (c || !this.ia))
                throw Error("ha");
            if (0 > b || b > jm(this))
                throw Error("ja");
            this.M && this.C || (this.M = {},
            this.C = []);
            if (a.T() == this) {
                var d = a.ib();
                this.M[d] = a;
                _.va(this.C, a)
            } else {
                d = this.M;
                var e = a.ib();
                if (null !== d && e in d)
                    throw Error("t`" + e);
                d[e] = a
            }
            fm(a, this);
            ei(this.C, b, 0, a);
            a.ia && this.ia && a.T() == this ? (c = this.rd(),
            (c.childNodes[b] || null) != a.A() && (a.A().parentElement == c && c.removeChild(a.A()),
            b = c.childNodes[b] || null,
            c.insertBefore(a.A(), b))) : c ? (this.I || this.N(),
            b = km(this, b + 1),
            _.gm(a, this.rd(), b ? b.I : null)) : this.ia && !a.ia && a.I && a.I.parentNode && 1 == a.I.parentNode.nodeType && a.Y()
        }
        ;
        _.M.prototype.rd = function() {
            return this.I
        }
        ;
        var lm = function(a) {
            null == a.Na && (a.Na = Qk(a.ia ? a.I : a.g.U.body));
            return a.Na
        }
          , jm = function(a) {
            return a.C ? a.C.length : 0
        }
          , em = function(a, b) {
            a.M && b ? (a = a.M,
            b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
            return b
        }
          , km = function(a, b) {
            return a.C ? a.C[b] || null : null
        }
          , im = function(a, b, c) {
            a.C && a.C.forEach(b, c)
        }
          , mm = function(a, b) {
            return a.C && b ? a.C.indexOf(b) : -1
        };
        _.M.prototype.we = function(a, b) {
            if (a) {
                var c = "string" === typeof a ? a : a.ib();
                a = em(this, c);
                if (c && a) {
                    var d = this.M;
                    c in d && delete d[c];
                    _.va(this.C, a);
                    b && (a.ca(),
                    a.I && _.Kj(a.I));
                    fm(a, null)
                }
            }
            if (!a)
                throw Error("ka");
            return a
        }
        ;
        _.M.prototype.ld = function(a) {
            for (var b = []; this.C && 0 != this.C.length; ) {
                var c = b
                  , d = c.push;
                var e = this.we(km(this, 0), a);
                d.call(c, e)
            }
            return b
        }
        ;
        var nm = function() {}, om;
        Vi(nm);
        var pm = {
            button: "pressed",
            checkbox: "checked",
            menuitem: "selected",
            menuitemcheckbox: "checked",
            menuitemradio: "checked",
            radio: "checked",
            tab: "selected",
            treeitem: "selected"
        };
        _.h = nm.prototype;
        _.h.oc = function() {}
        ;
        _.h.N = function(a) {
            return a.g.N("DIV", qm(this, a).join(" "), a.wa())
        }
        ;
        _.h.Pb = function(a) {
            return a
        }
        ;
        _.h.sd = function() {
            return !0
        }
        ;
        _.h.cb = function(a, b) {
            b.id && cm(a, b.id);
            var c = this.Pb(b);
            c && c.firstChild ? rm(a, c.firstChild.nextSibling ? _.wa(c.childNodes) : c.firstChild) : a.ac = null;
            var d = 0
              , e = this.ua()
              , f = this.ua()
              , g = !1
              , k = !1
              , l = _.wa(wl(b));
            l.forEach(function(m) {
                g || m != e ? k || m != f ? d |= this.j(m) : k = !0 : (g = !0,
                f == e && (k = !0));
                1 == this.j(m) && Rj(c) && Sj(c) && Tj(c, !1)
            }, this);
            a.ka = d;
            g || (l.push(e),
            f == e && (k = !0));
            k || l.push(f);
            (a = a.$e) && l.push.apply(l, a);
            g && k && !a || xl(b, l.join(" "));
            return b
        }
        ;
        _.h.hg = function(a) {
            lm(a) && this.ye(a.A(), !0);
            a.isEnabled() && this.pc(a, a.isVisible())
        }
        ;
        var sm = function(a, b, c) {
            if (a = c || a.oc())
                c = b.getAttribute("role") || null,
                a != c && Ll(b, a)
        }
          , tm = function(a, b, c) {
            b.isVisible() || Ml(c, "hidden", !b.isVisible());
            b.isEnabled() || a.sb(c, 1, !b.isEnabled());
            b.ra & 8 && a.sb(c, 8, !!(b.ka & 8));
            b.ra & 16 && a.sb(c, 16, !!(b.ka & 16));
            b.ra & 64 && a.sb(c, 64, !!(b.ka & 64))
        };
        _.h = nm.prototype;
        _.h.td = function(a, b) {
            Rk(a, !b, !_.B)
        }
        ;
        _.h.ye = function(a, b) {
            var c = this.ua() + "-SIsrTd";
            (a = a.A ? a.A() : a) && (b ? zl : Bl)(a, [c])
        }
        ;
        _.h.xe = function(a) {
            var b;
            return a.ra & 32 && (b = a.A()) ? Rj(b) && Sj(b) : !1
        }
        ;
        _.h.pc = function(a, b) {
            var c;
            if (a.ra & 32 && (c = a.A())) {
                if (!b && a.ka & 32) {
                    try {
                        c.blur()
                    } catch (d) {}
                    a.ka & 32 && a.ig(null)
                }
                (Rj(c) && Sj(c)) != b && Tj(c, b)
            }
        }
        ;
        _.h.S = function(a, b) {
            _.O(a, b);
            a && Ml(a, "hidden", !b)
        }
        ;
        _.h.Nc = function(a, b, c) {
            var d = a.A();
            if (d) {
                var e = this.g(b);
                e && (a = a.A ? a.A() : a) && (c ? zl : Bl)(a, [e]);
                this.sb(d, b, c)
            }
        }
        ;
        _.h.sb = function(a, b, c) {
            om || (om = {
                1: "disabled",
                8: "selected",
                16: "checked",
                64: "expanded"
            });
            b = om[b];
            var d = a.getAttribute("role") || null;
            d && (d = pm[d] || b,
            b = "checked" == b || "selected" == b ? d : b);
            b && Ml(a, b, c)
        }
        ;
        _.h.Mc = function(a, b) {
            var c = this.Pb(a);
            c && (_.md(c),
            b && ("string" === typeof b ? _.rd(c, b) : (a = function(d) {
                if (d) {
                    var e = _.E(c);
                    c.appendChild("string" === typeof d ? e.createTextNode(d) : d)
                }
            }
            ,
            Array.isArray(b) ? b.forEach(a) : !_.da(b) || "nodeType"in b ? a(b) : _.wa(b).forEach(a))))
        }
        ;
        _.h.ua = function() {
            return "VIpgJd-bMcfAe"
        }
        ;
        var qm = function(a, b) {
            var c = a.ua()
              , d = [c]
              , e = a.ua();
            e != c && d.push(e);
            c = b.ka;
            for (e = []; c; ) {
                var f = c & -c;
                e.push(a.g(f));
                c &= ~f
            }
            d.push.apply(d, e);
            (a = b.$e) && d.push.apply(d, a);
            return d
        };
        nm.prototype.g = function(a) {
            this.h || um(this);
            return this.h[a]
        }
        ;
        nm.prototype.j = function(a) {
            if (!this.o) {
                this.h || um(this);
                var b = this.h, c = {}, d;
                for (d in b)
                    c[b[d]] = d;
                this.o = c
            }
            a = parseInt(this.o[a], 10);
            return isNaN(a) ? 0 : a
        }
        ;
        var um = function(a) {
            var b = a.ua();
            a.h = {
                1: b + "-OWB6Me",
                2: b + "-ZmdkE",
                4: b + "-auswjd",
                8: b + "-gk6SMd",
                16: b + "-barxie",
                32: b + "-XpnDCe",
                64: b + "-FNFY6c"
            }
        };
        var vm = function() {};
        _.x(vm, nm);
        Vi(vm);
        _.h = vm.prototype;
        _.h.oc = function() {
            return "button"
        }
        ;
        _.h.sb = function(a, b, c) {
            switch (b) {
            case 8:
            case 16:
                Ml(a, "pressed", c);
                break;
            default:
            case 64:
            case 1:
                vm.G.sb.call(this, a, b, c)
            }
        }
        ;
        _.h.N = function(a) {
            var b = vm.G.N.call(this, a);
            this.ne(b, a.ma());
            var c = a.Qa();
            c && this.Ma(b, c);
            a.ra & 16 && this.sb(b, 16, !!(a.ka & 16));
            return b
        }
        ;
        _.h.cb = function(a, b) {
            b = vm.G.cb.call(this, a, b);
            var c = this.Qa(b);
            a.l = c;
            a.X = this.ma(b);
            a.ra & 16 && this.sb(b, 16, !!(a.ka & 16));
            return b
        }
        ;
        _.h.Qa = _.v;
        _.h.Ma = _.v;
        _.h.ma = function(a) {
            return a.title
        }
        ;
        _.h.ne = function(a, b) {
            a && (b ? a.title = b : a.removeAttribute("title"))
        }
        ;
        _.h.ua = function() {
            return "VIpgJd-LgbsSe"
        }
        ;
        var xm = function(a, b) {
            if (!a)
                throw Error("la`" + a);
            if ("function" !== typeof b)
                throw Error("ma`" + b);
            wm[a] = b
        }
          , ym = {}
          , wm = {};
        var U = function(a, b, c) {
            _.M.call(this, c);
            if (!b) {
                for (b = this.constructor; b; ) {
                    var d = _.za(b);
                    if (d = ym[d])
                        break;
                    b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor
                }
                b = d ? "function" === typeof d.ea ? d.ea() : new d : null
            }
            this.h = b;
            this.ac = void 0 !== a ? a : null
        };
        _.x(U, _.M);
        _.h = U.prototype;
        _.h.ac = null;
        _.h.ka = 0;
        _.h.ra = 39;
        _.h.Qe = 255;
        _.h.qd = 0;
        _.h.za = !0;
        _.h.$e = null;
        _.h.mf = !0;
        _.h.Fd = !1;
        var Am = function(a, b) {
            a.ia && b != a.mf && zm(a, b);
            a.mf = b
        };
        _.h = U.prototype;
        _.h.N = function() {
            var a = this.h.N(this);
            this.I = a;
            sm(this.h, a, this.gd());
            this.Fd || this.h.td(a, !1);
            this.isVisible() || this.h.S(a, !1)
        }
        ;
        _.h.gd = function() {
            return null
        }
        ;
        _.h.rd = function() {
            return this.h.Pb(this.A())
        }
        ;
        _.h.ve = function(a) {
            return this.h.sd(a)
        }
        ;
        _.h.da = function(a) {
            this.I = a = this.h.cb(this, a);
            sm(this.h, a, this.gd());
            this.Fd || this.h.td(a, !1);
            this.za = "none" != a.style.display
        }
        ;
        _.h.Y = function() {
            U.G.Y.call(this);
            tm(this.h, this, this.I);
            this.h.hg(this);
            if (this.ra & -2 && (this.mf && zm(this, !0),
            this.ra & 32)) {
                var a = this.A();
                if (a) {
                    var b = this.s || (this.s = new Vl);
                    b.attach(a);
                    S(this).D(b, "key", this.ab).D(a, "focus", this.Nh).D(a, "blur", this.ig)
                }
            }
        }
        ;
        var zm = function(a, b) {
            var c = S(a)
              , d = a.A();
            b ? (c.D(d, Vj.rc, a.Pc).D(d, [Vj.sc, Vj.Sc], a.Cc).D(d, "mouseover", a.V).D(d, "mouseout", a.ba),
            a.B != _.v && c.D(d, "contextmenu", a.B),
            _.B && (_.Ac(9) || c.D(d, "dblclick", a.Mg),
            a.J || (a.J = new Bm(a),
            Mi(a, _.yb(_.ca, a.J))))) : (c.sa(d, Vj.rc, a.Pc).sa(d, [Vj.sc, Vj.Sc], a.Cc).sa(d, "mouseover", a.V).sa(d, "mouseout", a.ba),
            a.B != _.v && c.sa(d, "contextmenu", a.B),
            _.B && (_.Ac(9) || c.sa(d, "dblclick", a.Mg),
            _.ca(a.J),
            a.J = null))
        };
        U.prototype.ca = function() {
            U.G.ca.call(this);
            this.s && Zl(this.s);
            this.isVisible() && this.isEnabled() && this.h.pc(this, !1)
        }
        ;
        U.prototype.L = function() {
            U.G.L.call(this);
            this.s && (this.s.R(),
            delete this.s);
            delete this.h;
            this.J = this.$e = this.ac = null
        }
        ;
        U.prototype.wa = function() {
            return this.ac
        }
        ;
        U.prototype.j = function(a) {
            this.h.Mc(this.A(), a);
            this.ac = a
        }
        ;
        var rm = function(a, b) {
            a.ac = b
        };
        _.h = U.prototype;
        _.h.xb = function() {
            var a = this.wa();
            if (!a)
                return "";
            a = "string" === typeof a ? a : Array.isArray(a) ? a.map(Uj).join("") : _.wd(a);
            return uj(a)
        }
        ;
        _.h.wh = function(a) {
            this.j(a)
        }
        ;
        _.h.isVisible = function() {
            return this.za
        }
        ;
        _.h.S = function(a, b) {
            return b || this.za != a && this.dispatchEvent(a ? "show" : "hide") ? ((b = this.A()) && this.h.S(b, a),
            this.isEnabled() && this.h.pc(this, a),
            this.za = a,
            !0) : !1
        }
        ;
        _.h.isEnabled = function() {
            return !(this.ka & 1)
        }
        ;
        _.h.qa = function(a) {
            var b = this.T();
            b && "function" == typeof b.isEnabled && !b.isEnabled() || !Cm(this, 1, !a) || (a || (Dm(this, !1),
            Em(this, !1)),
            this.isVisible() && this.h.pc(this, a),
            Fm(this, 1, !a, !0))
        }
        ;
        var Em = function(a, b) {
            Cm(a, 2, b) && Fm(a, 2, b)
        }
          , Dm = function(a, b) {
            Cm(a, 4, b) && Fm(a, 4, b)
        }
          , Gm = function(a, b) {
            Cm(a, 64, b) && Fm(a, 64, b)
        }
          , Fm = function(a, b, c, d) {
            d || 1 != b ? a.ra & b && c != !!(a.ka & b) && (a.h.Nc(a, b, c),
            a.ka = c ? a.ka | b : a.ka & ~b) : a.qa(!c)
        };
        U.prototype.Ga = function(a, b) {
            if (this.ia && this.ka & a && !b)
                throw Error("ha");
            !b && this.ka & a && Fm(this, a, !1);
            this.ra = b ? this.ra | a : this.ra & ~a
        }
        ;
        var Hm = function(a, b) {
            return !!(a.Qe & b) && !!(a.ra & b)
        }
          , Im = function(a) {
            a.Qe &= -256
        }
          , Cm = function(a, b, c) {
            return !!(a.ra & b) && !!(a.ka & b) != c && (!(a.qd & b) || a.dispatchEvent(bm(b, c))) && !a.Db()
        };
        U.prototype.V = function(a) {
            !Jm(a, this.A()) && this.dispatchEvent("enter") && this.isEnabled() && Hm(this, 2) && Em(this, !0)
        }
        ;
        U.prototype.ba = function(a) {
            !Jm(a, this.A()) && this.dispatchEvent("leave") && (Hm(this, 4) && Dm(this, !1),
            Hm(this, 2) && Em(this, !1))
        }
        ;
        U.prototype.B = _.v;
        var Jm = function(a, b) {
            return !!a.relatedTarget && _.qd(b, a.relatedTarget)
        };
        _.h = U.prototype;
        _.h.Pc = function(a) {
            this.isEnabled() && (Hm(this, 2) && Em(this, !0),
            0 != a.g.button || _.lc && a.ctrlKey || (Hm(this, 4) && Dm(this, !0),
            this.h && this.h.xe(this) && this.A().focus()));
            this.Fd || 0 != a.g.button || _.lc && a.ctrlKey || a.preventDefault()
        }
        ;
        _.h.Cc = function(a) {
            this.isEnabled() && (Hm(this, 2) && Em(this, !0),
            this.ka & 4 && this.Ic(a) && Hm(this, 4) && Dm(this, !1))
        }
        ;
        _.h.Mg = function(a) {
            this.isEnabled() && this.Ic(a)
        }
        ;
        _.h.Ic = function(a) {
            if (Hm(this, 16)) {
                var b = !(this.ka & 16);
                Cm(this, 16, b) && Fm(this, 16, b)
            }
            Hm(this, 8) && Cm(this, 8, !0) && Fm(this, 8, !0);
            Hm(this, 64) && Gm(this, !(this.ka & 64));
            b = new _.zd("action",this);
            a && (b.altKey = a.altKey,
            b.ctrlKey = a.ctrlKey,
            b.metaKey = a.metaKey,
            b.shiftKey = a.shiftKey,
            b.j = a.j);
            return this.dispatchEvent(b)
        }
        ;
        _.h.Nh = function() {
            Hm(this, 32) && Cm(this, 32, !0) && Fm(this, 32, !0)
        }
        ;
        _.h.ig = function() {
            Hm(this, 4) && Dm(this, !1);
            Hm(this, 32) && Cm(this, 32, !1) && Fm(this, 32, !1)
        }
        ;
        _.h.ab = function(a) {
            return this.isVisible() && this.isEnabled() && this.Oc(a) ? (a.preventDefault(),
            a.stopPropagation(),
            !0) : !1
        }
        ;
        _.h.Oc = function(a) {
            return 13 == a.keyCode && this.Ic(a)
        }
        ;
        if ("function" !== typeof U)
            throw Error("na`" + U);
        if ("function" !== typeof nm)
            throw Error("oa`" + nm);
        var Km = _.za(U);
        ym[Km] = nm;
        xm("VIpgJd-bMcfAe", function() {
            return new U(null)
        });
        var Bm = function(a) {
            _.y.call(this);
            this.h = a;
            this.g = !1;
            this.j = new _.J(this);
            Mi(this, _.yb(_.ca, this.j));
            a = this.h.I;
            this.j.D(a, Vj.rc, this.o).D(a, Vj.sc, this.s).D(a, "click", this.l)
        };
        _.x(Bm, _.y);
        var Lm = !_.B || 9 <= Number(_.Dc);
        Bm.prototype.o = function() {
            this.g = !1
        }
        ;
        Bm.prototype.s = function() {
            this.g = !0
        }
        ;
        var Mm = function(a, b) {
            if (!Lm)
                return a.button = 0,
                a.type = b,
                a;
            var c = document.createEvent("MouseEvents");
            c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
            return c
        };
        Bm.prototype.l = function(a) {
            if (this.g)
                this.g = !1;
            else {
                var b = a.g
                  , c = b.button
                  , d = b.type
                  , e = Mm(b, "mousedown");
                this.h.Pc(new _.Cd(e,a.currentTarget));
                e = Mm(b, "mouseup");
                this.h.Cc(new _.Cd(e,a.currentTarget));
                Lm || (b.button = c,
                b.type = d)
            }
        }
        ;
        Bm.prototype.L = function() {
            this.h = null;
            Bm.G.L.call(this)
        }
        ;
        var Nm = function() {};
        _.x(Nm, vm);
        Vi(Nm);
        _.h = Nm.prototype;
        _.h.oc = function() {}
        ;
        _.h.N = function(a) {
            Am(a, !1);
            Im(a);
            a.Ga(32, !1);
            return a.g.N("BUTTON", {
                "class": qm(this, a).join(" "),
                disabled: !a.isEnabled(),
                title: a.ma() || "",
                value: a.Qa() || ""
            }, a.xb() || "")
        }
        ;
        _.h.sd = function(a) {
            return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
        }
        ;
        _.h.cb = function(a, b) {
            Am(a, !1);
            Im(a);
            a.Ga(32, !1);
            if (b.disabled) {
                var c = this.g(1);
                _.R(b, c)
            }
            return Nm.G.cb.call(this, a, b)
        }
        ;
        _.h.hg = function(a) {
            S(a).D(a.A(), "click", a.Ic)
        }
        ;
        _.h.td = _.v;
        _.h.ye = _.v;
        _.h.xe = function(a) {
            return a.isEnabled()
        }
        ;
        _.h.pc = _.v;
        _.h.Nc = function(a, b, c) {
            Nm.G.Nc.call(this, a, b, c);
            (a = a.A()) && 1 == b && (a.disabled = c)
        }
        ;
        _.h.Qa = function(a) {
            return a.value
        }
        ;
        _.h.Ma = function(a, b) {
            a && (a.value = b)
        }
        ;
        _.h.sb = _.v;
        var Om = function(a, b, c) {
            U.call(this, a, b || Nm.ea(), c)
        };
        _.x(Om, U);
        _.h = Om.prototype;
        _.h.Qa = function() {
            return this.l
        }
        ;
        _.h.Ma = function(a) {
            this.l = a;
            this.h.Ma(this.A(), a)
        }
        ;
        _.h.ma = function() {
            return this.X
        }
        ;
        _.h.ne = function(a) {
            this.X = a;
            this.h.ne(this.A(), a)
        }
        ;
        _.h.L = function() {
            Om.G.L.call(this);
            delete this.l;
            delete this.X
        }
        ;
        _.h.Y = function() {
            Om.G.Y.call(this);
            if (this.ra & 32) {
                var a = this.A();
                a && S(this).D(a, "keyup", this.Oc)
            }
        }
        ;
        _.h.Oc = function(a) {
            return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Ic(a) : 32 == a.keyCode
        }
        ;
        xm("VIpgJd-LgbsSe", function() {
            return new Om(null)
        });
        var Pm = function() {};
        _.x(Pm, vm);
        Vi(Pm);
        Pm.prototype.N = function(a) {
            var b = qm(this, a);
            b = a.g.N("DIV", "VIpgJd-TzA9Ye-eEGnhe " + b.join(" "), Qm(this, a.wa(), a.g));
            this.ne(b, a.ma());
            return b
        }
        ;
        Pm.prototype.oc = function() {
            return "button"
        }
        ;
        Pm.prototype.Pb = function(a) {
            return a && a.firstChild && a.firstChild.firstChild
        }
        ;
        var Qm = function(a, b, c) {
            return c.N("DIV", "VIpgJd-TzA9Ye-eEGnhe " + (a.ua() + "-n0tgWb-Q4BLdf"), c.N("DIV", "VIpgJd-TzA9Ye-eEGnhe " + (a.ua() + "-SmKAyb-Q4BLdf"), b))
        };
        Pm.prototype.sd = function(a) {
            return "DIV" == a.tagName
        }
        ;
        Pm.prototype.cb = function(a, b) {
            Rm(b, !0);
            Rm(b, !1);
            a: {
                var c = a.g.Ig(b);
                var d = this.ua() + "-n0tgWb-Q4BLdf";
                if (c && yl(c, d) && (c = a.g.Ig(c),
                d = this.ua() + "-SmKAyb-Q4BLdf",
                c && yl(c, d))) {
                    c = !0;
                    break a
                }
                c = !1
            }
            c || b.appendChild(Qm(this, b.childNodes, a.g));
            zl(b, ["VIpgJd-TzA9Ye-eEGnhe", this.ua()]);
            return Pm.G.cb.call(this, a, b)
        }
        ;
        Pm.prototype.ua = function() {
            return "goog-custom-button"
        }
        ;
        var Rm = function(a, b) {
            if (a)
                for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a; ) {
                    d = b ? c.nextSibling : c.previousSibling;
                    if (3 == c.nodeType) {
                        var e = c.nodeValue;
                        if ("" == (0,
                        _.bc)(e))
                            a.removeChild(c);
                        else {
                            c.nodeValue = b ? vj(e) : wj(e);
                            break
                        }
                    } else
                        break;
                    c = d
                }
        };
        var Sm = function(a, b, c) {
            Om.call(this, a, b || Pm.ea(), c);
            this.Ga(16, !0)
        };
        _.x(Sm, Om);
        xm("VIpgJd-ornU0b-LgbsSe", function() {
            return new Sm(null)
        });
        var Tm = function() {
            _.B || 25 <= hi("Chromium") || 8 <= hi("Internet Explorer") || _.ic || hi("Firefox")
        };
        Tm.ea = function() {
            return Ol(Tm)
        }
        ;
        var Um = function() {
            this.h = [];
            this.g = {};
            this.l = !1;
            this.M = 1;
            this.s = {};
            this.j = null;
            this.o = "";
            _.H(window, "beforeunload", this.K, !1, this)
        }
          , Vm = function(a, b, c) {
            if (null == b)
                return "1";
            switch (_.sb(b)) {
            case "string":
                return a = b,
                64 < a.length && (null == c || !c) && (a = a.substr(0, 64)),
                _.$c(a);
            case "number":
                return "" + b;
            case "boolean":
                return b ? "1" : "0";
            case "array":
                var d = [], e;
                for (e in b)
                    d.push(Vm(a, b[e], c));
                return d.join(",");
            case "object":
                d = [];
                for (e in b)
                    d.push(Wm(a, e, b[e], c));
                return d.join(",");
            default:
                return ""
            }
        }
          , Wm = function(a, b, c, d) {
            return [_.$c(b), Vm(a, c, d || "smtalt" == b)].join("=")
        };
        Um.prototype.log = function(a, b) {
            this.h.push([a, b]);
            this.l || (this.l = !0,
            _.ng(this.C, 0, this))
        }
        ;
        Um.prototype.C = function() {
            for (var a = 0; a < this.h.length; a++) {
                var b = this.h[a];
                Xm(this, b[0], b[1])
            }
            this.h = [];
            this.l = !1
        }
        ;
        var Xm = function(a, b, c) {
            Ym(a, a.o + "/gen204?" + (a.j ? ["client=", a.j, "&"].join("") : "") + Wm(a, b, c))
        }
          , Ym = function(a, b) {
            var c = new Image
              , d = a.M++;
            a.s[d] = c;
            c.onload = c.onerror = function() {
                delete Um.ea().s[d]
            }
            ;
            c.src = b;
            c = null
        }
          , $m = function(a, b) {
            var c = 0
              , d = null;
            b in a.g && (d = a.g[b],
            c = d[0],
            d = d[1]);
            if ("object" == _.sb(1)) {
                "object" != _.sb(d) && (d = {});
                for (var e in 1)
                    d[e] = Zm(e in d ? d[e] : null, 1[e])
            } else
                d = Zm(d, 1);
            a.g[b] = [c, d];
            _.og(a.g[b][0]);
            c = _.ng((0,
            _.w)(a.B, a, b), 2E3);
            a.g[b][0] = c
        };
        Um.prototype.B = function(a) {
            Xm(this, a, this.g[a][1]);
            a in this.g && (_.og(this.g[a][0]),
            delete this.g[a])
        }
        ;
        var Zm = function(a, b) {
            null == b && (b = 1);
            isNaN(a) && (a = parseInt(a, 10));
            isNaN(b) && (b = parseInt(b, 10));
            return a + b
        };
        Um.prototype.K = function() {
            this.C();
            for (var a in this.g)
                0 != this.g[a] && this.B(a)
        }
        ;
        Um.ea = function() {
            return Ol(Um)
        }
        ;
        var an = function(a) {
            _.Mh.call(this, a)
        };
        _.u(an, _.Mh);
        var cn = function(a) {
            _.Mh.call(this, a, -1, bn)
        };
        _.u(cn, _.Mh);
        var bn = [5, 3, 4];
        var en = function(a) {
            _.Mh.call(this, a, -1, dn)
        };
        _.u(en, _.Mh);
        en.prototype.ef = function() {
            return _.Fh(this, 1)
        }
        ;
        var dn = [3];
        var gn = function(a) {
            _.Mh.call(this, a, -1, fn)
        };
        _.u(gn, _.Mh);
        var fn = [2];
        var jn = function(a) {
            _.Mh.call(this, a, -1, hn)
        };
        _.u(jn, _.Mh);
        _.h = jn.prototype;
        _.h.Va = function() {
            return _.Fh(this, 16)
        }
        ;
        _.h.Lb = function(a) {
            _.Gh(this, 16, a)
        }
        ;
        _.h.ga = function() {
            return _.Fh(this, 1)
        }
        ;
        _.h.oa = function(a) {
            _.Gh(this, 1, a)
        }
        ;
        _.h.ef = function() {
            return _.Fh(this, 53)
        }
        ;
        var hn = [26, 80];
        var kn = function() {
            this.P = this.h = "";
            Tm.ea()
        };
        kn.prototype.Lb = function(a) {
            this.h = a
        }
        ;
        kn.prototype.oa = function(a) {
            this.P = a
        }
        ;
        kn.prototype.store = function(a) {
            _.Gh(a, 65, 0);
            a.Lb(this.h);
            _.Gh(a, 14, "");
            a.oa(this.P);
            _.Gh(a, 50, "");
            _.Gh(a, 52, "");
            _.Gh(a, 32, 0)
        }
        ;
        kn.ea = function() {
            return Ol(kn)
        }
        ;
        var mn = function(a, b) {
            return a === b ? !0 : _.$b(a, function(c, d) {
                if (zi(c)) {
                    d = c;
                    for (var e in d)
                        if (c = d[e],
                        !ln(c, Ai(b, +e)))
                            return !1;
                    return !0
                }
                return ln(c, Ai(b, d + 1))
            }) && _.$b(b, function(c, d) {
                if (zi(c)) {
                    for (var e in c)
                        if (null == Ai(a, +e))
                            return !1;
                    return !0
                }
                return null == c == (null == Ai(a, d + 1))
            })
        }
          , ln = function(a, b) {
            return a === b || null == a && null == b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b) ? !0 : Array.isArray(a) && Array.isArray(b) ? mn(a, b) : !1
        };
        var nn = function() {};
        nn.prototype.initialize = function(a, b, c, d) {
            this.g = a = a || [];
            if (a.length) {
                c = a.length - 1;
                var e = zi(a[c]);
                c = e ? a[c] : {};
                e && a.length--;
                e = 0;
                for (var f in c) {
                    var g = +f;
                    g <= b ? (a[g - 1] = c[f],
                    delete c[f]) : e++
                }
                for (g = f = 0; d && g < d.length; ) {
                    f += d[g++];
                    var k = d[g++];
                    e += Bi(f, k, a, c);
                    f += k
                }
                a.length > b && (e += Bi(b, a.length - b, a, c),
                a.length = b);
                e && (a[b] = c)
            }
        }
        ;
        var on = function(a, b, c) {
            a = a.g[b];
            return null != a ? a : c
        }
          , pn = function(a, b) {
            return !!on(a, b, void 0)
        }
          , qn = function(a, b) {
            return +on(a, b, 0)
        }
          , rn = function(a, b) {
            return on(a, b, "")
        }
          , sn = function(a, b, c) {
            a = a.g;
            a[b] || (a[b] = []);
            return a[b][c]
        }
          , V = function(a, b) {
            return (a = a.g[b]) ? a.length : 0
        };
        new Uint8Array(0);
        var tn = function() {
            _.y.call(this);
            this.g = kn.ea()
        };
        _.u(tn, _.y);
        tn.prototype.h = function() {
            un(this, 25)
        }
        ;
        var un = function(a, b) {
            var c = new jn;
            a.g.store(c);
            _.Gh(c, 31, b);
            return c
        };
        tn.ea = function() {
            return Ol(tn)
        }
        ;
        _.wn = function(a, b, c, d, e) {
            this.C = !!b;
            this.node = null;
            this.g = 0;
            this.se = !1;
            this.B = !c;
            a && vn(this, a, d);
            this.depth = void 0 != e ? e : this.g || 0;
            this.C && (this.depth *= -1)
        }
        ;
        _.x(_.wn, _.lf);
        var vn = function(a, b, c, d) {
            if (a.node = b)
                a.g = "number" === typeof c ? c : 1 != a.node.nodeType ? 0 : a.C ? -1 : 1;
            "number" === typeof d && (a.depth = d)
        };
        _.wn.prototype.Mb = function() {
            var a = this.C ? -1 : 1;
            this.g == a && (this.g = -1 * a,
            this.depth += this.g * (this.C ? -1 : 1))
        }
        ;
        _.wn.prototype.next = function() {
            if (this.se) {
                if (!this.node || this.B && 0 == this.depth)
                    return _.mf;
                var a = this.node;
                var b = this.C ? -1 : 1;
                if (this.g == b) {
                    var c = this.C ? a.lastChild : a.firstChild;
                    c ? vn(this, c) : vn(this, a, -1 * b)
                } else
                    (c = this.C ? a.previousSibling : a.nextSibling) ? vn(this, c) : vn(this, a.parentNode, -1 * b);
                this.depth += this.g * (this.C ? -1 : 1)
            } else
                this.se = !0;
            return (a = this.node) ? _.nf(a) : _.mf
        }
        ;
        _.wn.prototype.Ka = function() {
            return _.of(_.wn.prototype.next.call(this))
        }
        ;
        var xn = function() {}
          , yn = function(a) {
            for (var b = [], c = 0, d = a.hd(); c < d; c++)
                b.push(a.Ac(c));
            return b
        }
          , zn = function(a) {
            return a.sf() ? a.eb() : a.ub()
        };
        xn.prototype.sf = function() {
            return !1
        }
        ;
        var An = function(a, b) {
            _.wn.call(this, a, b, !0)
        };
        _.x(An, _.wn);
        var Bn = function(a, b, c, d, e) {
            this.j = this.h = null;
            this.o = this.s = 0;
            this.l = !!e;
            if (a) {
                this.h = a;
                this.s = b;
                this.j = c;
                this.o = d;
                if (1 == a.nodeType && "BR" != a.tagName)
                    if (a = a.childNodes,
                    b = a[b])
                        this.h = b,
                        this.s = 0;
                    else {
                        a.length && (this.h = _.ra(a));
                        var f = !0
                    }
                1 == c.nodeType && ((this.j = c.childNodes[d]) ? this.o = 0 : this.j = c)
            }
            _.wn.call(this, this.l ? this.j : this.h, this.l, !0);
            if (f)
                try {
                    this.Ka()
                } catch (g) {
                    if (g != _.kf)
                        throw g;
                }
        };
        _.x(Bn, An);
        _.h = Bn.prototype;
        _.h.Wg = !1;
        _.h.xd = function() {
            return this.h
        }
        ;
        _.h.kd = function() {
            return this.se && (this.node != (this.l ? this.h : this.j) ? !1 : this.l ? this.s ? -1 != this.g : 1 == this.g : !this.o || 1 != this.g)
        }
        ;
        _.h.next = function() {
            if (this.kd() || this.Wg)
                return _.mf;
            try {
                return _.nf(Bn.G.Ka.call(this))
            } catch (a) {
                if (a === _.kf)
                    return _.mf;
                throw a;
            }
        }
        ;
        _.h.Ka = function() {
            return _.of(Bn.prototype.next.call(this))
        }
        ;
        _.h.Mb = function() {
            Bn.G.Mb.apply(this);
            _.qd(this.node, this.l ? this.h : this.j) && (this.Wg = !0)
        }
        ;
        var Cn = function() {};
        Cn.prototype.Ha = function() {
            return new Bn(this.g.startContainer,this.g.startOffset,this.g.endContainer,this.g.endOffset)
        }
        ;
        var Dn = function(a) {
            this.g = a
        };
        _.x(Dn, Cn);
        var En = function(a) {
            var b = _.E(a).createRange();
            if (3 == a.nodeType)
                b.setStart(a, 0),
                b.setEnd(a, a.length);
            else if (Gj(a) || 3 == a.nodeType) {
                for (var c, d = a; (c = d.firstChild) && (Gj(c) || 3 == c.nodeType); )
                    d = c;
                b.setStart(d, 0);
                for (d = a; (c = d.lastChild) && (Gj(c) || 3 == c.nodeType); )
                    d = c;
                b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
            } else
                c = a.parentNode,
                a = Array.prototype.indexOf.call(c.childNodes, a),
                b.setStart(c, a),
                b.setEnd(c, a + 1);
            return b
        }
          , Fn = function(a, b, c, d) {
            var e = _.E(a).createRange();
            e.setStart(a, b);
            e.setEnd(c, d);
            return e
        };
        Dn.prototype.select = function(a) {
            this.h(_.id(_.E(this.g.startContainer)).getSelection(), a)
        }
        ;
        Dn.prototype.h = function(a) {
            a.removeAllRanges();
            a.addRange(this.g)
        }
        ;
        var Gn = function(a) {
            this.g = a
        };
        _.x(Gn, Dn);
        Gn.prototype.h = function(a, b) {
            !b || this.g.collapsed ? Gn.G.h.call(this, a, b) : (a.collapse(this.g.endContainer, this.g.endOffset),
            a.extend(this.g.startContainer, this.g.startOffset))
        }
        ;
        var Hn = function(a) {
            this.g = a
        };
        _.x(Hn, Dn);
        Hn.prototype.h = function(a, b) {
            b ? a.setBaseAndExtent(this.g.endContainer, this.g.endOffset, this.g.startContainer, this.g.startOffset) : a.setBaseAndExtent(this.g.startContainer, this.g.startOffset, this.g.endContainer, this.g.endOffset)
        }
        ;
        var In = function(a) {
            return _.D ? new Hn(a) : _.C ? new Gn(a) : new Dn(a)
        }
          , Jn = function(a) {
            return _.D ? new Hn(En(a)) : _.C ? new Gn(En(a)) : new Dn(En(a))
        };
        var Kn = function() {
            this.o = this.j = this.s = this.h = this.g = null;
            this.l = !1
        };
        _.x(Kn, xn);
        var Ln = function(a, b) {
            var c = new Kn;
            c.g = a;
            c.l = !!b;
            return c
        };
        Kn.prototype.bf = function() {
            return Mn(this).g
        }
        ;
        Kn.prototype.hd = function() {
            return 1
        }
        ;
        Kn.prototype.Ac = function() {
            return this
        }
        ;
        var Mn = function(a) {
            var b;
            if (!(b = a.g)) {
                b = a.eb();
                var c = a.fb()
                  , d = a.ub()
                  , e = a.vb();
                b = _.D ? new Hn(Fn(b, c, d, e)) : _.C ? new Gn(Fn(b, c, d, e)) : new Dn(Fn(b, c, d, e));
                b = a.g = b
            }
            return b
        };
        _.h = Kn.prototype;
        _.h.ud = function() {
            return Mn(this).g.commonAncestorContainer
        }
        ;
        _.h.eb = function() {
            return this.h || (this.h = Mn(this).g.startContainer)
        }
        ;
        _.h.fb = function() {
            return null != this.s ? this.s : this.s = Mn(this).g.startOffset
        }
        ;
        _.h.ub = function() {
            return this.j || (this.j = Mn(this).g.endContainer)
        }
        ;
        _.h.vb = function() {
            return null != this.o ? this.o : this.o = Mn(this).g.endOffset
        }
        ;
        _.h.sf = function() {
            return this.l
        }
        ;
        _.h.wd = function() {
            return Mn(this).g.collapsed
        }
        ;
        _.h.vd = function() {
            return Mn(this).g.toString()
        }
        ;
        _.h.Ha = function() {
            return new Bn(this.eb(),this.fb(),this.ub(),this.vb())
        }
        ;
        _.h.select = function() {
            Mn(this).select(this.l)
        }
        ;
        var Nn = function() {};
        _.x(Nn, xn);
        var On = function() {
            this.j = this.h = this.g = null
        };
        _.x(On, Nn);
        _.h = On.prototype;
        _.h.bf = function() {
            return this.g || document.body.createControlRange()
        }
        ;
        _.h.hd = function() {
            return this.g ? this.g.length : 0
        }
        ;
        _.h.Ac = function(a) {
            a = this.g.item(a);
            return Ln(Jn(a), void 0)
        }
        ;
        _.h.ud = function() {
            return Pj.apply(null, this.df())
        }
        ;
        _.h.eb = function() {
            return Pn(this)[0]
        }
        ;
        _.h.fb = function() {
            return 0
        }
        ;
        _.h.ub = function() {
            var a = Pn(this)
              , b = _.ra(a);
            return a.find(function(c) {
                return _.qd(c, b)
            })
        }
        ;
        _.h.vb = function() {
            return this.ub().childNodes.length
        }
        ;
        _.h.df = function() {
            if (!this.h && (this.h = [],
            this.g))
                for (var a = 0; a < this.g.length; a++)
                    this.h.push(this.g.item(a));
            return this.h
        }
        ;
        var Pn = function(a) {
            a.j || (a.j = a.df().concat(),
            a.j.sort(function(b, c) {
                return b.sourceIndex - c.sourceIndex
            }));
            return a.j
        };
        On.prototype.wd = function() {
            return !this.g || !this.g.length
        }
        ;
        On.prototype.vd = function() {
            return ""
        }
        ;
        On.prototype.Ha = function() {
            return new Qn(this)
        }
        ;
        On.prototype.select = function() {
            this.g && this.g.select()
        }
        ;
        var Qn = function(a) {
            this.l = this.j = this.h = null;
            a && (this.l = Pn(a),
            this.h = this.l.shift(),
            this.j = _.ra(this.l) || this.h);
            _.wn.call(this, this.h, !1, !0)
        };
        _.x(Qn, An);
        Qn.prototype.xd = function() {
            return this.h
        }
        ;
        Qn.prototype.kd = function() {
            return !this.depth && !this.l.length
        }
        ;
        Qn.prototype.next = function() {
            if (this.kd())
                return _.mf;
            if (!this.depth) {
                var a = this.l.shift();
                vn(this, a, 1, 1);
                return _.nf(a)
            }
            return Qn.G.next.call(this)
        }
        ;
        Qn.prototype.Ka = function() {
            return _.of(Qn.prototype.next.call(this))
        }
        ;
        var Rn = function() {
            this.g = [];
            this.l = [];
            this.j = this.h = null
        };
        _.x(Rn, Nn);
        Rn.prototype.bf = function() {
            return this.g[0]
        }
        ;
        Rn.prototype.hd = function() {
            return this.g.length
        }
        ;
        Rn.prototype.Ac = function(a) {
            this.l[a] || (this.l[a] = Ln(In(this.g[a]), void 0));
            return this.l[a]
        }
        ;
        Rn.prototype.ud = function() {
            if (!this.j) {
                for (var a = [], b = 0, c = this.hd(); b < c; b++)
                    a.push(this.Ac(b).ud());
                this.j = Pj.apply(null, a)
            }
            return this.j
        }
        ;
        var Tn = function(a) {
            a.h || (a.h = yn(a),
            a.h.sort(function(b, c) {
                var d = b.eb();
                b = b.fb();
                var e = c.eb();
                c = c.fb();
                return d == e && b == c ? 0 : Sn(d, b, e, c) ? 1 : -1
            }));
            return a.h
        };
        _.h = Rn.prototype;
        _.h.eb = function() {
            return Tn(this)[0].eb()
        }
        ;
        _.h.fb = function() {
            return Tn(this)[0].fb()
        }
        ;
        _.h.ub = function() {
            return _.ra(Tn(this)).ub()
        }
        ;
        _.h.vb = function() {
            return _.ra(Tn(this)).vb()
        }
        ;
        _.h.wd = function() {
            return 0 == this.g.length || 1 == this.g.length && this.Ac(0).wd()
        }
        ;
        _.h.vd = function() {
            return yn(this).map(function(a) {
                return a.vd()
            }).join("")
        }
        ;
        _.h.Ha = function() {
            return new Un(this)
        }
        ;
        _.h.select = function() {
            var a = _.id(_.E(_.B ? this.ud() : this.eb())).getSelection();
            a.removeAllRanges();
            for (var b = 0, c = this.hd(); b < c; b++)
                a.addRange(this.Ac(b).bf())
        }
        ;
        var Un = function(a) {
            this.h = null;
            this.j = 0;
            a && (this.h = Tn(a).map(function(b) {
                return Zj(b)
            }));
            _.wn.call(this, a ? this.xd() : null, !1, !0)
        };
        _.x(Un, An);
        Un.prototype.xd = function() {
            return this.h[0].xd()
        }
        ;
        Un.prototype.kd = function() {
            return this.h[this.j].kd()
        }
        ;
        Un.prototype.next = function() {
            try {
                var a = this.h[this.j]
                  , b = a.Ka();
                vn(this, a.node, a.g, a.depth);
                return _.nf(b)
            } catch (c) {
                if (c !== _.kf || this.h.length - 1 == this.j)
                    throw c;
                this.j++;
                return this.next()
            }
        }
        ;
        Un.prototype.Ka = function() {
            return _.of(Un.prototype.next.call(this))
        }
        ;
        var Wn = function() {
            var a = window.getSelection();
            return a && Vn(a)
        }
          , Vn = function(a) {
            var b = !1;
            if (a.createRange)
                try {
                    var c = a.createRange()
                } catch (e) {
                    return null
                }
            else if (a.rangeCount) {
                if (1 < a.rangeCount) {
                    b = new Rn;
                    c = 0;
                    for (var d = a.rangeCount; c < d; c++)
                        b.g.push(a.getRangeAt(c));
                    return b
                }
                c = a.getRangeAt(0);
                b = Sn(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
            } else
                return null;
            (a = c) && a.addElement ? (b = new On,
            b.g = a,
            a = b) : a = Ln(In(a), b);
            return a
        }
          , Sn = function(a, b, c, d) {
            if (a == c)
                return d < b;
            var e;
            if (1 == a.nodeType && b)
                if (e = a.childNodes[b])
                    a = e,
                    b = 0;
                else if (_.qd(a, c))
                    return !0;
            if (1 == c.nodeType && d)
                if (e = c.childNodes[d])
                    c = e,
                    d = 0;
                else if (_.qd(c, a))
                    return !1;
            return 0 < (Oj(a, c) || b - d)
        };
        var Xn = function() {
            var a = Wn();
            return null != a && !a.wd() && 0 < a.vd().length
        };
        var Yn = function(a) {
            return function() {
                return a
            }
        }
          , Zn = function(a, b) {
            for (var c = 0; c < b.length - 2; c += 3) {
                var d = b.charAt(c + 2);
                d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
                d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
                a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
            }
            return a
        }
          , $n = function(a, b) {
            var c = b.split(".");
            b = Number(c[0]) || 0;
            for (var d = [], e = 0, f = 0; f < a.length; f++) {
                var g = a.charCodeAt(f);
                128 > g ? d[e++] = g : (2048 > g ? d[e++] = g >> 6 | 192 : (55296 == (g & 64512) && f + 1 < a.length && 56320 == (a.charCodeAt(f + 1) & 64512) ? (g = 65536 + ((g & 1023) << 10) + (a.charCodeAt(++f) & 1023),
                d[e++] = g >> 18 | 240,
                d[e++] = g >> 12 & 63 | 128) : d[e++] = g >> 12 | 224,
                d[e++] = g >> 6 & 63 | 128),
                d[e++] = g & 63 | 128)
            }
            a = b;
            for (e = 0; e < d.length; e++)
                a += d[e],
                a = Zn(a, "+-a^+6");
            a = Zn(a, "+-3^+b+-f");
            a ^= Number(c[1]) || 0;
            0 > a && (a = (a & 2147483647) + 2147483648);
            c = a % 1E6;
            return c.toString() + "." + (c ^ b)
        }
          , ao = null
          , bo = function() {
            var a = Yn(String.fromCharCode(116))
              , b = Yn(String.fromCharCode(107));
            a = [a(), a()];
            a[1] = b();
            return a.join("")
        };
        var co = function(a) {
            this.initialize(a, 6)
        };
        _.x(co, nn);
        var eo = function(a) {
            this.initialize(a, 2)
        };
        _.x(eo, nn);
        var fo = function(a) {
            this.initialize(a, 8)
        };
        _.x(fo, nn);
        var go = function(a, b) {
            return new co(sn(a, 2, b))
        };
        var ho = function(a) {
            this.initialize(a, 9)
        };
        _.x(ho, nn);
        var io = function(a) {
            this.initialize(a, 21)
        };
        _.x(io, nn);
        var jo = function(a, b) {
            return new fo(sn(a, 5, b))
        };
        var ko = function() {
            this.g = 0;
            this.h = tn.ea()
        }
          , lo = function(a) {
            a = a.jb("q").join("");
            if (null !== ao)
                var b = ao;
            else {
                var c = Yn(String.fromCharCode(84));
                b = Yn(String.fromCharCode(75));
                c = [c(), c()];
                c[1] = b();
                b = (ao = window[c.join(b())] || "") || ""
            }
            return "&" + bo() + "=" + $n(a, b)
        }
          , mo = function(a, b, c, d, e) {
            c = c.toString();
            c += lo(d);
            d = d.toString();
            var f = "POST";
            b += "?" + c;
            2E3 > b.length + d.length && (f = "GET",
            b += "&" + d,
            d = "");
            ++a.g;
            _.Ah(b, function(g) {
                --a.g;
                e(g)
            }, f, d, void 0, void 0)
        };
        ko.prototype.j = function(a, b, c) {
            c = c.target;
            !_.Ag(c) || "[" != _.Bg(c)[0] && "{" != _.Bg(c)[0] ? (no(this, c),
            b && b(_.zg(c))) : (b = oo(c, "handleSingleResult_"),
            Array.isArray(b) && (b = new io(b)),
            a(b))
        }
        ;
        ko.prototype.l = function(a, b, c) {
            c = c.target;
            if (_.Ag(c)) {
                c = oo(c, "handleTextResult_");
                var d = [];
                if (a)
                    d.push(Array.isArray(c) ? c[0] : c);
                else if (Array.isArray(c))
                    for (a = 0; a < c.length; ++a)
                        d.push(Array.isArray(c[a]) ? c[a][0] : c[a]);
                b(d)
            } else
                no(this, c),
                b(null, c.j)
        }
        ;
        var oo = function(a, b) {
            var c = _.Bg(a);
            a = {
                "class": "trans.common.TranslationAPI",
                func: b,
                url: String(a.o)
            };
            try {
                var d = JSON.parse(c)
            } catch (e) {
                throw d = Um.ea(),
                a.js = c,
                a.error = e.message,
                d.log("jsonParseErr", a),
                e;
            }
            return d
        }
          , no = function(a, b) {
            var c = b.j;
            c = c in po ? po[c] : 0;
            a = un(a.h, 148);
            var d = new an;
            d = _.Gh(d, 1, 156);
            c && _.Gh(d, 5, c);
            _.Hh(a, 63, d);
            c = Um.ea();
            a = String(b.o);
            b = _.Bg(b);
            c.log("invalidResponse", {
                q: a.substring(0, 500),
                ql: a.length,
                r: b.substring(0, 500),
                rl: b.length
            })
        }
          , qo = {}
          , po = (qo[1] = 15,
        qo[2] = 16,
        qo[3] = 17,
        qo[4] = 18,
        qo[5] = 19,
        qo[6] = 20,
        qo[7] = 21,
        qo[8] = 22,
        qo[9] = 23,
        qo);
        var ro = function(a) {
            switch (a) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            case 10:
                return 4;
            case 3:
                return 5;
            case 4:
                return 6;
            case 11:
                return 7;
            case 5:
                return 8;
            case 6:
                return 9;
            case 7:
                return 10;
            case 8:
                return 11;
            case 9:
                return 12;
            default:
                return 0
            }
        };
        _.so = function() {
            return ""
        }
        ;
        var to = window.google && google.translate && google.translate._const, uo, Ji, zo, Ao, Eo, Io;
        to || (to = {
            _cac: "",
            _cam: "",
            _cest: new Date,
            _cjlc: "",
            _cl: "",
            _cuc: "",
            _cnad: !1,
            _cnal: {},
            nl: "",
            _pah: "",
            _pas: "",
            _pbi: "",
            _pci: "",
            _phf: "",
            _pli: "",
            _plla: "",
            _pmi: "",
            _ps: "",
            _pta: "",
            _puh: ""
        });
        uo = window.google && window.google.translate && window.google.translate.v || "";
        _.W = to._cl || "en";
        Ji = to._cuc;
        _.vo = to._cnad;
        _.wo = to._cest;
        _.xo = to._cnal || {};
        _.Ki = "lib" == to._cam ? 1 : 0;
        _.yo = (to._cac || "te") + (1 == _.Ki ? "_lib" : "");
        zo = function() {
            function a(d) {
                return function() {
                    return d
                }
            }
            var b = String.fromCharCode(107)
              , c = a(String.fromCharCode(116));
            b = a(b);
            c = [c(), c()];
            c[1] = b();
            return to["_c" + c.join(b())] || ""
        }();
        Ao = to._pah || "";
        _.Bo = to._pas || "https://";
        _.Co = to._pbi || "";
        _.Do = to._pci || "";
        Eo = to._plla || "";
        _.Fo = to._pli || "";
        _.Go = to._pmi || "";
        _.Ho = to._ps || "";
        Io = to._puh || "";
        _.Jo = "//" + Io + "/translate_suggestion?client=" + _.yo + _.so();
        _.Ko = "https://www.google.com/support/translate" + ("en" == _.W ? "" : "#googtrans/en/" + _.W);
        var No, Uo, Vo, Wo, Xo;
        _.Lo = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c)
                b[a[c]] = !0;
            return b
        }
        ;
        _.Mo = function(a) {
            this.h = a ? [a] : [];
            this.g = [0];
            this.j = !1
        }
        ;
        _.Mo.prototype.register = function(a) {
            if (this.j)
                return a || function() {}
                ;
            this.g.push(0);
            var b = this.g.length - 1;
            return (0,
            _.w)(function() {
                this.g[b]++;
                a && a.apply(null, arguments);
                No(this)
            }, this)
        }
        ;
        _.Mo.prototype.delay = function(a) {
            return this.j ? a : (0,
            _.w)(function() {
                if (this.j)
                    a.apply(null, arguments);
                else {
                    var b = arguments;
                    this.h.push(function() {
                        a.apply(null, b)
                    })
                }
            }, this)
        }
        ;
        _.Mo.prototype.finish = function() {
            this.g[0] = 1;
            No(this)
        }
        ;
        No = function(a) {
            for (var b = 0; b < a.g.length; ++b)
                if (0 == a.g[b])
                    return;
            a.j = !0;
            for (b = 0; b < a.h.length; ++b) {
                var c = a.h[b];
                a.h[b] = null;
                c.call()
            }
            a.h = [];
            a.g = []
        }
        ;
        _.Oo = function(a) {
            this.j = a;
            this.h = this.g = !1
        }
        ;
        _.Po = function(a, b) {
            return (0,
            _.w)(function() {
                b && b.apply(null, arguments);
                this.h ? this.g || (this.j.call(),
                this.g = !0) : this.g = !0
            }, a)
        }
        ;
        _.Oo.prototype.finish = function() {
            this.h || (this.h = !0,
            this.g && this.j.call())
        }
        ;
        var Qo = function(a, b, c) {
            this.g = b;
            this.C = a;
            this.s = c || 0;
            this.j = this.h = !1
        }
          , Ro = function(a) {
            a.h || a.o()
        };
        Qo.prototype.o = function() {
            (this.h = (this.j = !!this.C.call()) || 0 >= --this.s) ? (this.g.call(null, this.j),
            this.l = 0) : this.l = window.setTimeout((0,
            _.w)(this.o, this), 30)
        }
        ;
        Qo.prototype.cancel = function() {
            this.l && window.clearTimeout(this.l);
            this.h = !0;
            this.g.call(null, this.j)
        }
        ;
        _.So = function(a, b) {
            return function() {
                a.dispatchEvent(b)
            }
        }
        ;
        _.To = function(a) {
            a = (0,
            _.bc)(a).toLowerCase().replace("_", "-");
            if ("zh-cn" == a)
                return "zh-CN";
            if ("zh-tw" == a)
                return "zh-TW";
            var b = a.indexOf("-");
            a = 0 <= b ? a.substring(0, b) : a;
            return "zh" == a ? "zh-CN" : a
        }
        ;
        Uo = function(a) {
            var b = [], c;
            for (c in a)
                if (a[c] !== Object.prototype[c]) {
                    var d = _.$c(c);
                    if ("array" == _.sb(a[c]))
                        for (var e = 0; e < a[c].length; ++e)
                            b.push(d + "=" + _.$c(a[c][e]));
                    else
                        b.push(d + "=" + _.$c(a[c]))
                }
            return b.join("&")
        }
        ;
        _.Di = function(a, b) {
            b = b || {};
            b.nca = a;
            b.client = _.yo;
            uo && (b.logld = "v" + uo);
            var c = new Image;
            c.src = "//" + Io + "/gen204?" + Uo(b);
            c.onload = function() {
                c.onload = null
            }
        }
        ;
        Vo = function() {
            var a = {};
            try {
                for (var b in Object.prototype) {
                    var c = Object.prototype[b];
                    delete Object.prototype[b];
                    a[b] = c
                }
            } catch (d) {
                return {}
            }
            return a
        }
        ;
        Wo = function(a) {
            for (var b in a)
                Object.prototype[b] = a[b]
        }
        ;
        Xo = function(a) {
            for (var b in a)
                if (a[b] !== Object.prototype[b])
                    return !1;
            return !0
        }
        ;
        var Yo;
        _.Ci = null;
        Yo = function() {}
        ;
        Yo.prototype.attach = function(a, b, c) {
            for (var d in c)
                c[d] !== Object.prototype[d] && (b[d] = "function" === typeof c[d] ? c[d] : _.yb(Ei, a, Number(c[d])))
        }
        ;
        _.Zo = new Yo;
        var Fi = function(a) {
            _.Mh.call(this, a)
        };
        _.u(Fi, _.Mh);
        /*

 SPDX-License-Identifier: Apache-2.0
*/
        var $o = function(a) {
            this.url = a;
            this.timeout = -1;
            this.j = this.h = "callback";
            this.g = this.fc = null
        }
          , dp = function(a, b) {
            b = void 0 === b ? {} : b;
            a.g = Yj();
            var c = new sk(a.url)
              , d = new Map;
            a.j && d.set(a.j, a.h);
            c.g.o(wk(b), d);
            ap(a).then(function() {
                bp(a, c.toString())
            }).then(function() {
                return a.g.promise
            }).then(function() {
                cp(a)
            }, function() {
                cp(a)
            });
            0 < a.timeout && (a.l = setTimeout(function() {
                a.g.reject("Timeout!")
            }, a.timeout));
            return a.g.promise
        }
          , bp = function(a, b) {
            var c = new MessageChannel;
            a.fc.contentWindow.postMessage({
                url: b,
                callbackName: a.h
            }, "*", [c.port2]);
            c.port1.onmessage = function(d) {
                var e = {};
                void 0 !== a.l && (clearTimeout(a.l),
                a.l = void 0);
                void 0 === d.data && a.g.reject("Callback called, but no data received");
                "string" !== typeof d.data && a.g.reject("Exploitation attempt! Data is not a string!");
                try {
                    e = JSON.parse(d.data)
                } catch (f) {
                    a.g.reject("Invalid Data received: " + f.message)
                }
                a.g.resolve(e)
            }
        }
          , ap = function(a) {
            var b = Yj()
              , c = _.jd(document, "IFRAME");
            if (!c.sandbox)
                throw Error("pa");
            c.sandbox.value = "allow-scripts";
            c.style.display = "none";
            a.fc = c;
            a = Gi();
            a = _.lj(_.Uc, qj("body", {}, pj(Xi(_.Ua(a).toString()))));
            c.srcdoc = _.Sc(a);
            a = _.Nb("data:text/html;charset=UTF-8;base64," + btoa(_.Sc(a).toString()));
            c.src = _.Wa(a).toString();
            c.addEventListener("load", function() {
                return b.resolve(c)
            }, !1);
            c.addEventListener("error", function(d) {
                b.reject(d)
            }, !1);
            document.documentElement.appendChild(c);
            return b.promise
        }
          , cp = function(a) {
            null !== a.fc && (document.documentElement.removeChild(a.fc),
            a.fc = null)
        };
        var ep = function(a, b) {
            _.y.call(this);
            this.g = new sk(a);
            if (b)
                for (var c in b)
                    b[c] !== Object.prototype[c] && this.g.g.set(c, b[c])
        };
        _.u(ep, _.y);
        ep.prototype.j = function() {
            return !0
        }
        ;
        ep.prototype.Ja = function() {
            return this.j()
        }
        ;
        ep.prototype.send = function() {
            return null
        }
        ;
        ep.prototype.cancel = function() {}
        ;
        var fp = function(a, b, c, d) {
            ep.call(this, a, b);
            this.l = null == d || !!d;
            a = this.h = new $o(this.g);
            a.h = "callback";
            a.j = void 0 === c ? "callback" : c
        };
        _.u(fp, ep);
        fp.prototype.j = function() {
            return this.l
        }
        ;
        fp.prototype.send = function(a, b) {
            a = dp(this.h, a);
            a.then(b);
            return a
        }
        ;
        fp.prototype.cancel = function(a) {
            a.cancel()
        }
        ;
        var gp = function(a, b) {
            ep.call(this, a, b);
            this.l = {};
            this.h = this.o = 0;
            window.XMLHttpRequest && "withCredentials"in new XMLHttpRequest && (this.h = 1);
            !this.h && window.XDomainRequest && "file:" != window.location.protocol && (this.h = 2,
            this.g.g.set("u", window.location.href))
        };
        _.u(gp, ep);
        gp.prototype.j = function() {
            return !!this.h
        }
        ;
        gp.prototype.send = function(a, b) {
            var c = Vo()
              , d = ++this.o
              , e = {}
              , f = {};
            "q"in a && (f.q = a.q,
            delete a.q);
            a.mode = this.h;
            1 == this.h ? (e.Nb = new _.pg,
            _.H(e.Nb, "complete", (0,
            _.w)(function() {
                e.Wc || (_.Ag(e.Nb) ? b(_.Bg(e.Nb)) : (this.eh(),
                b(null, _.Bg(e.Nb) || null)),
                hp(this, d))
            }, this)),
            _.H(e.Nb, "timeout", (0,
            _.w)(function() {
                e.Wc || (this.fh(),
                hp(this, d))
            }, this)),
            e.Nb.send(this.g.toString() + "&" + Uo(a), "POST", Uo(f), {
                "Content-Type": "application/x-www-form-urlencoded"
            })) : (e.tb = new XDomainRequest,
            e.tb.timeout = 2E4,
            e.tb.onload = (0,
            _.w)(function() {
                e.Wc || (b(e.tb.responseText),
                hp(this, d))
            }, this),
            e.tb.onerror = (0,
            _.w)(function() {
                e.Wc || (this.eh(),
                b(null),
                hp(this, d))
            }, this),
            e.tb.ontimeout = (0,
            _.w)(function() {
                e.Wc || (this.fh(),
                b(null),
                hp(this, d))
            }, this),
            e.tb.open("POST", this.g.toString() + "&" + Uo(a)),
            e.tb.send(Uo(f)));
            this.l[d] = e;
            Wo(c);
            return d
        }
        ;
        gp.prototype.cancel = function(a) {
            var b = this.l[a];
            b && (b.Wc = !0,
            b.tb && b.tb.abort(),
            hp(this, a))
        }
        ;
        var hp = function(a, b) {
            var c = a.l[b];
            c && (c.Nb ? (c.Nb.R(),
            c.Nb = null) : c.tb && (c.tb = null),
            delete a.l[b])
        };
        gp.prototype.L = function() {
            ep.prototype.L.call(this);
            for (var a in this.l)
                this.cancel(a)
        }
        ;
        _.Zo.attach(17170, gp.prototype, {
            fh: 1,
            eh: 2
        });
        var ip = function(a, b, c) {
            ep.call(this, a, c);
            this.l = b.proxyIsSupported;
            this.o = b.proxySend;
            this.h = b.proxyCancel
        };
        _.u(ip, ep);
        ip.prototype.j = function() {
            return this.l()
        }
        ;
        ip.prototype.send = function(a, b) {
            return this.o(this.g.toString(), a, b)
        }
        ;
        ip.prototype.cancel = function(a) {
            this.h(a)
        }
        ;
        _.jp = function(a, b) {
            b && (a.hl = b);
            return a
        }
        ;
        _.kp = function() {
            return !0
        }
        ;
        _.lp = function(a) {
            return a
        }
        ;
        var mp = function(a, b) {
            _.y.call(this);
            this.j = !0;
            this.h = a;
            this.g = b ? b : null
        };
        _.u(mp, _.y);
        var np = function(a, b) {
            if (!a.j)
                return b;
            if ("array" != _.sb(b))
                a = [[b, 200]];
            else if (2 == b.length && "array" != _.sb(b[0]) && "array" != _.sb(b[1]))
                a = [[b[0], 200, b[1]], [b[1], 200, b[1]]];
            else {
                a = [];
                for (var c = 0; c < b.length; ++c)
                    a[c] = "array" != _.sb(b[c]) ? [b[c], 200] : [b[c][0], 200, b[c][1]]
            }
            return a
        };
        mp.prototype.o = function(a) {
            var b = this;
            return function(c) {
                if (c)
                    try {
                        var d = c.indexOf("\x00");
                        0 <= d && (c = c.substr(0, d));
                        var e = JSON.parse(c)
                    } catch (f) {
                        e = null,
                        b.pj()
                    }
                e ? a(np(b, e), 200) : a([], 500)
            }
        }
        ;
        mp.prototype.l = function(a) {
            var b = this;
            return function(c) {
                c ? a(np(b, c), 200) : a([], 500)
            }
        }
        ;
        mp.prototype.L = function() {
            _.y.prototype.L.call(this)
        }
        ;
        _.Zo.attach(47504, mp.prototype, {
            pj: function() {
                _.Di("te_afbr")
            }
        });
        _.op = {
            0: "NO_ERROR",
            1: "UNKNOWN_ERROR",
            2: "JWT_TOKEN_CANNOT_PARSE",
            3: "JWT_TOKEN_MISS_PARAM",
            4: "JWT_TOKEN_INVALID_ISS",
            5: "JWT_TOKEN_INVALID",
            6: "INTERNAL_SERVER_ERROR",
            7: "OUT_OF_QUOTA",
            8: "INTERNAL_SERVER_ERROR"
        };
        _.qp = function(a, b, c, d, e, f) {
            _.y.call(this);
            var g;
            b ? g = {
                client: b
            } : g = {
                anno: 3,
                client: _.yo,
                format: "html",
                v: "1.0"
            };
            c && (g.sp = c);
            g.key = a;
            uo && (g.logld = "v" + uo);
            this.s = d || null;
            this.mc = e || null;
            this.g = null;
            this.j = {
                Xc: (0,
                _.w)(this.K, this),
                zf: 300
            };
            a = this.o = new mp(g,f);
            b = _.Bo + Eo;
            this.l = a.g ? new ip(b,a.g,{
                client: _.yo
            }) : new fp(b,{
                client: _.yo
            },_.kp() ? "cb" : void 0);
            a = this.o;
            if (a.g) {
                if (!a.g)
                    throw Error("qa");
                a = [{
                    Da: new ip(_.Bo + Ao + "/translate_a/t",a.g,a.h),
                    Xc: (0,
                    _.w)(a.l, a),
                    he: 1900,
                    Af: 4294967295,
                    yf: -1,
                    Rf: 0,
                    Qd: !1
                }]
            } else
                b = _.Bo + Ao,
                a = [{
                    Da: new gp(b + "/translate_a/t",a.h),
                    Xc: (0,
                    _.w)(a.o, a),
                    he: 30720,
                    Af: 4294967295,
                    yf: -1,
                    Rf: 0,
                    Qd: !1
                }, {
                    Da: new fp(b + "/translate_a/t",a.h,"cb",_.B && 7 >= _.yc),
                    Xc: (0,
                    _.w)(a.l, a),
                    he: 1900,
                    Af: 4294967295,
                    yf: -1,
                    Rf: 3,
                    Qd: !0
                }];
            this.C = new pp(a);
            this.h = !1;
            for (b = 0; b < a.length; ++b)
                this.h = this.h || a[b].Da.j();
            this.h || this.qj()
        }
        ;
        _.u(_.qp, _.y);
        _.qp.prototype.K = function(a) {
            return function(b) {
                if (b)
                    try {
                        var c = JSON.parse(b)
                    } catch (d) {
                        c = null
                    }
                a(c && c[1] || void 0)
            }
        }
        ;
        _.qp.prototype.initialize = function(a) {
            this.B || (this.B = !0,
            this.C.start((0,
            _.w)(function(b) {
                b && (this.g = b,
                this.j.Da = b.Da);
                a()
            }, this)))
        }
        ;
        _.qp.prototype.Ja = function() {
            return null !== this.g && null !== this.g.Da && this.g.Da.Ja()
        }
        ;
        _.rp = function(a, b, c) {
            b = a.j.Xc(b);
            a.j.Da.send({
                q: c.substring(0, a.j.zf),
                sl: "auto",
                tl: "en"
            }, b)
        }
        ;
        _.qp.prototype.translate = function(a, b, c, d, e, f, g, k) {
            var l = this
              , m = this.g.Xc(a)
              , n = {
                q: b,
                sl: c,
                tl: d
            };
            n.tc = e;
            f && (n.ctt = 1);
            g && (n.dom = 1);
            k && (n.sr = 1);
            n[bo()] = $n(b.join(""), zo);
            return this.s ? this.s.h().then(function(q) {
                null != q && (n.jwtt = q,
                n.rurl = location.hostname);
                return l.g.Da.send(n, (0,
                _.w)(sp(m), l))
            }, function(q) {
                q && l.mc && l.mc(q)
            }) : this.g.Da.send(n, m)
        }
        ;
        var sp = function(a) {
            return function(b, c) {
                if (c && this.mc) {
                    try {
                        var d = JSON.parse(c).error_code
                    } catch (e) {
                        d = null
                    }
                    c = _.op[1];
                    this.mc(null == d ? c : _.op[d] || c)
                }
                a(b)
            }
        }
          , tp = function(a, b) {
            b instanceof _.se ? b.then(function(c) {
                a.g.Da.cancel(c)
            }) : a.g.Da.cancel(b)
        }
          , up = function(a) {
            return a.g.Qd ? a.g.he - (new sk(a.g.Da.g)).toString().length : a.g.he
        };
        _.qp.prototype.L = function() {
            _.y.prototype.L.call(this);
            this.g && (this.g.Da.R(),
            this.g.Da = null);
            this.j.Da = null;
            this.l.R();
            this.l = null
        }
        ;
        _.Zo.attach(7361, _.qp.prototype, {
            qj: function() {
                _.Di("te_au")
            }
        });
        var pp = function(a) {
            this.h = a
        };
        pp.prototype.start = function(a) {
            this.g = a;
            this.j = 0;
            vp(this)
        }
        ;
        var vp = function(a) {
            if (a.j >= a.h.length)
                a.g(null);
            else {
                var b = a.h[a.j++];
                b.Oj ? Ro(new Qo((0,
                _.w)(b.Da.Ja, b.Da),(0,
                _.w)(function(c) {
                    c ? this.g(b) : vp(this)
                }, a),b.Oj)) : b.Da.Ja() ? a.g(b) : vp(a)
            }
        };
        var wp = function() {
            this.g = []
        };
        wp.prototype.add = function(a) {
            this.g.push(a)
        }
        ;
        var xp = function() {
            this.g = []
        };
        _.u(xp, wp);
        xp.prototype.add = function(a) {
            if (a)
                for (; a(); )
                    ;
        }
        ;
        xp.ea = function() {
            return Ol(xp)
        }
        ;
        _.zp = function(a) {
            this.g = [];
            this.h = .5;
            yp(this, a);
            this.l = 0;
            this.j = !0;
            this.o = (0,
            _.w)(this.s, this)
        }
        ;
        _.u(_.zp, wp);
        var yp = function(a, b) {
            1 < b ? a.h = 1 : .001 > b ? a.h = .001 : b && (a.h = b)
        };
        _.zp.prototype.add = function(a) {
            wp.prototype.add.call(this, a);
            this.j && Ap(this)
        }
        ;
        var Ap = function(a) {
            a.j = !1;
            window.setTimeout(a.o, Math.min(a.l, 5E3))
        };
        _.zp.prototype.s = function() {
            var a = (new Date).getTime();
            do {
                this.g.length && (this.g[0] && this.g[0]() || this.g.shift());
                var b = !!this.g.length;
                var c = 95 * this.h + 5;
                var d = (new Date).getTime() - a
            } while (b && d < c);
            this.l = Math.ceil(d * (1 / this.h - 1)) + 1;
            b ? Ap(this) : this.j = !0
        }
        ;
        var Bp = _.Lo("A ABBR ACRONYM B BASEFONT BDO BIG CITE DFN EM FONT I INPUT NOBR LABEL Q S SMALL SPAN STRIKE STRONG SUB SUP TEXTAREA TT U VAR".split(" "))
          , Cp = _.Lo("APPLET AREA BASE FRAME FRAMESET HR LINK META NOFRAMES NOSCRIPT INPUT TEXTAREA TITLE".split(" "))
          , Dp = _.Lo("BR CODE IMG KBD MAP OBJECT PARAM SCRIPT STYLE WBR svg".split(" "))
          , Ep = _.Lo(["submit", "button"]);
        var Gp = function(a, b) {
            this.j = _.B ? [] : null;
            this.h = [];
            this.done = !1;
            for (this.g = new _.wn(a,!1,b,3 === a.nodeType ? 0 : 1,1); a = a.parentNode; )
                Fp(this, a, !0);
            this.h.push(!1);
            this.h.reverse();
            for (a = 1; a < this.h.length; ++a)
                null == this.h[a] && (this.h[a] = this.h[a - 1])
        }
          , Fp = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            var d = (b.style && b.style.whiteSpace || "").substring(0, 3);
            "pre" === d || !d && "PRE" === b.tagName ? a.h.push(!0) : d && "pre" !== d ? a.h.push(!1) : c ? a.h.push(null) : a.h.push(a.h[a.h.length - 1])
        }
          , Hp = function(a) {
            return !!a.h[a.h.length - 1]
        };
        Gp.prototype.node = function() {
            return this.g.node
        }
        ;
        Gp.prototype.depth = function() {
            return this.g.depth
        }
        ;
        Gp.prototype.next = function() {
            try {
                this.j && 0 < this.j.length && -1 === this.g.g && this.j.length--,
                -1 === this.g.g && this.h.length--,
                this.j && 0 < this.j.length && 1 !== this.g.g && !this.g.node.nextSibling ? vn(this.g, this.j[this.j.length - 1], -1, this.g.depth - 1) : (this.g.Ka(),
                this.j && 1 === this.g.g && this.j.push(this.g.node)),
                1 === this.g.g && this.g.se && Fp(this, this.g.node)
            } catch (a) {
                a !== _.kf && this.wj(a),
                this.done = !0
            }
        }
        ;
        _.Zo.attach(52754, Gp.prototype, {
            wj: 1
        });
        var Ip;
        Ip = function() {
            return "[msg_undefined]"
        }
        ;
        _.X = {};
        (function() {
            var a = function(b) {
                return function() {
                    return b
                }
            };
            _.X = {
                Ie: a(0),
                ue: a(1),
                cg: a(2),
                Tk: a(3),
                fi: a(4),
                dg: a(5),
                Yh: a(45),
                Zh: a(6),
                ng: a(7),
                Tc: a(8),
                hi: a(9),
                il: a(10),
                li: a(11),
                og: a(12),
                el: a(13),
                di: a(14),
                dl: a(15),
                pg: a(16),
                kl: a(17),
                ii: a(18),
                nk: a(19),
                Sk: a(20),
                Kh: a(21),
                ei: a(22),
                Zk: a(23),
                Yk: a(24),
                bi: a(25),
                jl: a(26),
                gi: a(27),
                ci: a(28),
                $h: a(29),
                ji: a(30),
                mk: a(32),
                lk: a(33),
                ki: a(34),
                zk: a(35),
                tk: a(36),
                yk: a(37),
                qg: a(38),
                Kk: a(39),
                bg: a(40),
                ai: a(41),
                mg: a(46)
            }
        }
        )();
        _.Jp = function() {
            var a = Ii("google.translate.m");
            if (a)
                for (var b in _.X)
                    if (_.X[b] !== Object.prototype[_.X[b]] && _.X[b]) {
                        var c = _.X[b]();
                        _.X[b] = a[c] ? a[c] : Ip
                    }
        }
        ;
        var Kp = function() {
            _.I.call(this);
            this.g = 0;
            this.endTime = this.startTime = null
        };
        _.x(Kp, _.I);
        Kp.prototype.j = function() {
            this.h("begin")
        }
        ;
        Kp.prototype.l = function() {
            this.h("end")
        }
        ;
        Kp.prototype.Wb = function() {
            this.h("stop")
        }
        ;
        Kp.prototype.h = function(a) {
            this.dispatchEvent(a)
        }
        ;
        var Lp = function(a, b) {
            Array.isArray(b) || (b = [b]);
            b = b.map(function(c) {
                return "string" === typeof c ? c : c.Al + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
            });
            _.L(a, "transition", b.join(","))
        }
          , Mp = _.Eb(function() {
            if (_.B)
                return _.Ac("10.0");
            var a = _.jd(document, "DIV")
              , b = _.D ? "-webkit" : _.C ? "-moz" : _.B ? "-ms" : null
              , c = {
                transition: "opacity 1s linear"
            };
            b && (c[b + "-transition"] = "opacity 1s linear");
            b = qj("div", {
                style: c
            });
            _.xi(a, b);
            a = a.firstChild;
            b = a.style[_.xh("transition")];
            return "" != ("undefined" !== typeof b ? b : a.style[_.Oh(a, "transition")] || "")
        });
        var Np = function(a, b, c, d, e) {
            Kp.call(this);
            this.I = a;
            this.C = b;
            this.B = c;
            this.o = d;
            this.K = Array.isArray(e) ? e : [e]
        };
        _.x(Np, Kp);
        _.h = Np.prototype;
        _.h.play = function() {
            if (1 == this.g)
                return !1;
            this.j();
            this.h("play");
            this.startTime = _.zb();
            this.g = 1;
            if (Mp())
                return _.L(this.I, this.B),
                this.s = _.ng(this.Nj, void 0, this),
                !0;
            this.ze(!1);
            return !1
        }
        ;
        _.h.Nj = function() {
            Pk(this.I);
            Lp(this.I, this.K);
            _.L(this.I, this.o);
            this.s = _.ng((0,
            _.w)(this.ze, this, !1), 1E3 * this.C)
        }
        ;
        _.h.stop = function() {
            1 == this.g && this.ze(!0)
        }
        ;
        _.h.ze = function(a) {
            _.L(this.I, "transition", "");
            _.og(this.s);
            _.L(this.I, this.o);
            this.endTime = _.zb();
            this.g = 0;
            a ? this.Wb() : this.h("finish");
            this.l()
        }
        ;
        _.h.L = function() {
            this.stop();
            Np.G.L.call(this)
        }
        ;
        var Op = function(a, b) {
            _.I.call(this);
            this.o = new _.J(this);
            this.qc(a || null);
            b && (this.Lc = b)
        };
        _.x(Op, _.I);
        _.h = Op.prototype;
        _.h.I = null;
        _.h.Vc = !0;
        _.h.tg = null;
        _.h.bc = !1;
        _.h.uf = -1;
        _.h.Lc = "toggle_display";
        _.h.A = function() {
            return this.I
        }
        ;
        _.h.qc = function(a) {
            if (this.bc)
                throw Error("ra");
            this.I = a
        }
        ;
        _.h.nd = function(a) {
            if (this.bc)
                throw Error("ra");
            this.Vc = a
        }
        ;
        _.h.isVisible = function() {
            return this.bc
        }
        ;
        _.h.S = function(a) {
            this.xa && this.xa.stop();
            this.la && this.la.stop();
            if (a) {
                if (!this.bc && this.Ae()) {
                    if (!this.I)
                        throw Error("sa");
                    this.Ab();
                    a = _.E(this.I);
                    if (this.Vc)
                        if (this.o.D(a, "mousedown", this.Ef, !0),
                        _.B) {
                            try {
                                var b = a.activeElement
                            } catch (d) {}
                            for (; b && "IFRAME" == b.nodeName; ) {
                                try {
                                    var c = _.Qj(b)
                                } catch (d) {
                                    break
                                }
                                a = c;
                                b = a.activeElement
                            }
                            this.o.D(a, "mousedown", this.Ef, !0);
                            this.o.D(a, "deactivate", this.lh)
                        } else
                            this.o.D(a, "blur", this.lh);
                    "toggle_display" == this.Lc ? (this.I.style.visibility = "visible",
                    _.O(this.I, !0)) : "move_offscreen" == this.Lc && this.Ab();
                    this.bc = !0;
                    this.uf = Date.now();
                    this.xa ? (_.Pd(this.xa, "end", this.mh, !1, this),
                    this.xa.play()) : this.mh()
                }
            } else
                Pp(this)
        }
        ;
        _.h.Ab = _.v;
        var Pp = function(a, b) {
            a.bc && a.dispatchEvent({
                type: "beforehide",
                target: b
            }) && (a.o && _.cg(a.o),
            a.bc = !1,
            a.la ? (_.Pd(a.la, "end", _.yb(a.wg, b), !1, a),
            a.la.play()) : a.wg(b))
        };
        _.h = Op.prototype;
        _.h.wg = function(a) {
            "toggle_display" == this.Lc ? this.hj() : "move_offscreen" == this.Lc && (this.I.style.top = "-10000px");
            this.Gf(a)
        }
        ;
        _.h.hj = function() {
            this.I.style.visibility = "hidden";
            _.O(this.I, !1)
        }
        ;
        _.h.Ae = function() {
            return this.dispatchEvent("beforeshow")
        }
        ;
        _.h.mh = function() {
            this.dispatchEvent("show")
        }
        ;
        _.h.Gf = function(a) {
            this.dispatchEvent({
                type: "hide",
                target: a
            })
        }
        ;
        _.h.Ef = function(a) {
            a = a.target;
            _.qd(this.I, a) || Qp(this, a) || 150 > Date.now() - this.uf || Pp(this, a)
        }
        ;
        _.h.lh = function(a) {
            var b = _.E(this.I);
            if ("undefined" != typeof document.activeElement) {
                if (a = b.activeElement,
                !a || _.qd(this.I, a) || "BODY" == a.tagName || Qp(this, a))
                    return
            } else if (a.target != b)
                return;
            150 > Date.now() - this.uf || Pp(this)
        }
        ;
        var Qp = function(a, b) {
            return _.Zb(a.tg || [], function(c) {
                return b === c || _.qd(c, b)
            })
        };
        Op.prototype.L = function() {
            Op.G.L.call(this);
            this.o.R();
            _.ca(this.xa);
            _.ca(this.la);
            delete this.I;
            delete this.o;
            delete this.tg
        }
        ;
        var Rp = function(a, b) {
            this.s = b || void 0;
            Op.call(this, a)
        };
        _.x(Rp, Op);
        Rp.prototype.Ab = function() {
            if (this.s) {
                var a = !this.isVisible() && "move_offscreen" != this.Lc
                  , b = this.A();
                a && (b.style.visibility = "hidden",
                _.O(b, !0));
                this.s.h(b, 8, this.xf);
                a && _.O(b, !1)
            }
        }
        ;
        var Sp = function(a, b) {
            Rp.call(this, a);
            this.j = b;
            this.g = 0;
            this.h = null;
            this.l = 0;
            this.S(!0);
            this.S(!1);
            _.R(this.A(), "round-trip-popup");
            _.R(this.j, "round-trip-content")
        };
        _.u(Sp, Rp);
        Sp.prototype.K = function() {
            _.og(this.l);
            1 == this.g ? _.Pd(this.h, "finish", (0,
            _.w)(this.K, this)) : 0 == this.g && (this.l = _.ng((0,
            _.w)(this.B, this, -1), 200))
        }
        ;
        Sp.prototype.B = function(a) {
            if (this.g != a && (0 != this.g || !(this.isVisible() && 1 == a || !this.isVisible() && -1 == a))) {
                var b = this.isVisible();
                this.S(!0);
                var c = -Math.ceil(Pk(this.j).width);
                Qk(this.A()) && (c = -c);
                var d = 1 == a ? c : 0;
                c = 1 == a ? 0 : c;
                this.S(b);
                if (Mp()) {
                    b = .2;
                    if (0 != this.g) {
                        var e = parseInt(Ek(this.j, "left"), 10);
                        this.C();
                        b *= (c - e) / (c - d);
                        d = e
                    }
                    this.g = a;
                    this.h = new Np(this.j,b,{
                        left: d + "px"
                    },{
                        left: c + "px"
                    },"left " + b + "s");
                    this.h.play();
                    _.Pd(this.h, "finish", (0,
                    _.w)(this.C, this));
                    -1 == a ? _.Pd(this.h, "finish", (0,
                    _.w)(this.S, this, !1)) : this.S(!0)
                } else
                    _.L(this.j, "left", c + "px"),
                    this.S(1 == a ? !0 : !1)
            }
        }
        ;
        Sp.prototype.C = function() {
            0 != this.g && (this.h.stop(),
            _.ng((0,
            _.w)(Wj, this, this.h)),
            this.g = 0,
            this.h = null)
        }
        ;
        var Up = function() {
            this.I = null;
            this.g = _.Ej("DIV", "gt-hl-layer", document.createTextNode(""));
            this.h = null;
            this.I && (Ij(this.g, this.I),
            Tp(this))
        };
        Up.prototype.attach = function(a) {
            this.h = a
        }
        ;
        var Wp = function(a, b, c, d, e) {
            var f = d || "gt-hl-text";
            d = a.I && (a.I.value || _.wd(a.I));
            Tp(a);
            _.md(a.g);
            if (b != c || e) {
                if (0 < b) {
                    var g = d.substring(0, b);
                    Vp(a.g, g, 0, e)
                }
                b < c && (g = d.substring(b, c),
                f = _.Ej("SPAN", f),
                Vp(f, g, b, e),
                a.g.appendChild(f));
                c < d.length && (g = d.substring(c),
                Vp(a.g, g, c, e))
            }
        }
          , Tp = function(a) {
            var b = a.I;
            var c = _.E(b)
              , d = _.B && b.currentStyle;
            d && _.gd(_.F(c).U) && "auto" != d.width && "auto" != d.height && !d.boxSizing ? (c = Uk(b, d.width, "width", "pixelWidth"),
            b = Uk(b, d.height, "height", "pixelHeight"),
            b = new _.Yc(c,b)) : (d = _.Sk(b),
            c = Wk(b),
            b = Zk(b),
            b = new _.Yc(d.width - b.left - c.left - c.right - b.right,d.height - b.top - c.top - c.bottom - b.bottom));
            _.$k(a.g, b);
            c = Lk(a.I);
            b = a.g;
            d = c.x;
            c = c.y;
            var e = Lk(b);
            d instanceof N && (c = d.y,
            d = d.x);
            _.Hk(b, b.offsetLeft + (d - e.x), b.offsetTop + (Number(c) - e.y));
            b = Wk(a.I);
            _.L(a.g, "paddingLeft", b.left + "px");
            _.L(a.g, "paddingRight", b.right + "px");
            a.g.dir = a.I.dir
        }
          , Vp = function(a, b, c, d) {
            d = d || [];
            for (var e = 0, f; f = d[e]; e++)
                if (!(0 > f.cd - c)) {
                    if (f.cd - c >= b.length)
                        break;
                    if (0 < f.cd - c) {
                        var g = b.substring(0, f.cd - c);
                        Xp(a, g)
                    }
                    var k = f.className || "gt-hl-text";
                    g = b.substring(f.cd - c, f.Zf - c);
                    var l = _.Ej("SPAN");
                    xl(l, k);
                    Xp(l, g);
                    a.appendChild(l);
                    b = b.substring(f.Zf - c);
                    c = f.Zf
                }
            b && Xp(a, b)
        }
          , Xp = function(a, b) {
            b = b.replace(/(\r\n|\r|\n)/g, "\n").split("\n");
            for (var c = 0, d = b.length; c < d; c++) {
                if (0 < c) {
                    var e = _.Ej("BR");
                    a.appendChild(e)
                }
                a.appendChild(document.createTextNode(String(b[c])))
            }
        };
        var Yp = function(a) {
            _.I.call(this);
            this.I = a;
            a = _.B ? "focusout" : "blur";
            this.g = _.H(this.I, _.B ? "focusin" : "focus", this, !_.B);
            this.h = _.H(this.I, a, this, !_.B)
        };
        _.x(Yp, _.I);
        Yp.prototype.handleEvent = function(a) {
            var b = new _.Cd(a.g);
            b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
            this.dispatchEvent(b)
        }
        ;
        Yp.prototype.L = function() {
            Yp.G.L.call(this);
            _.Xd(this.g);
            _.Xd(this.h);
            delete this.I
        }
        ;
        var Zp = function(a, b, c) {
            this.element = a;
            this.j = b;
            this.C = c
        };
        _.x(Zp, Cl);
        Zp.prototype.h = function(a, b, c) {
            Jl(this.element, this.j, a, b, void 0, c, this.C)
        }
        ;
        var $p = function(a, b) {
            this.g = a instanceof N ? a : new N(a,b)
        };
        _.x($p, Cl);
        $p.prototype.h = function(a, b, c) {
            Jl(Ik(a), 0, a, b, this.g, c, null, void 0)
        }
        ;
        var Y = function(a, b, c) {
            this.V = c || (a ? _.F(_.dd(document, a)) : _.F());
            Rp.call(this, this.V.N("DIV", {
                style: "position:absolute;display:none;"
            }));
            this.Sb = new N(1,1);
            this.C = new _.yf;
            this.K = null;
            a && this.attach(a);
            null != b && this.mb(b)
        };
        _.x(Y, Rp);
        var aq = [];
        _.h = Y.prototype;
        _.h.Oa = null;
        _.h.className = "VIpgJd-suEOdc";
        _.h.zh = 500;
        _.h.Xg = 0;
        _.h.attach = function(a) {
            a = _.dd(document, a);
            this.C.add(a);
            _.H(a, "mouseover", this.Be, !1, this);
            _.H(a, "mouseout", this.Bc, !1, this);
            _.H(a, "mousemove", this.zg, !1, this);
            _.H(a, "focus", this.uc, !1, this);
            _.H(a, "blur", this.Bc, !1, this)
        }
        ;
        var cq = function(a, b) {
            if (b)
                b = _.dd(document, b),
                bq(a, b),
                a.C.remove(b);
            else {
                for (var c = a.C.jb(), d = 0; b = c[d]; d++)
                    bq(a, b);
                a = a.C;
                Si(a.g);
                a.size = 0
            }
        }
          , bq = function(a, b) {
            _.Wd(b, "mouseover", a.Be, !1, a);
            _.Wd(b, "mouseout", a.Bc, !1, a);
            _.Wd(b, "mousemove", a.zg, !1, a);
            _.Wd(b, "focus", a.uc, !1, a);
            _.Wd(b, "blur", a.Bc, !1, a)
        };
        Y.prototype.mb = function(a) {
            _.rd(this.A(), a)
        }
        ;
        Y.prototype.qc = function(a) {
            var b = this.A();
            b && _.Kj(b);
            Y.G.qc.call(this, a);
            a ? (b = this.V.U.body,
            b.insertBefore(a, b.lastChild),
            _.ca(this.K),
            this.K = new Yp(this.A()),
            Mi(this, _.yb(_.ca, this.K)),
            _.H(this.K, "focusin", this.O, void 0, this),
            _.H(this.K, "focusout", this.Ta, void 0, this)) : (_.ca(this.K),
            this.K = null)
        }
        ;
        Y.prototype.Qc = function() {
            return _.wd(this.A())
        }
        ;
        var dq = function(a) {
            return a.W ? a.isVisible() ? 4 : 1 : a.ba ? 3 : a.isVisible() ? 2 : 0
        };
        _.h = Y.prototype;
        _.h.Ae = function() {
            if (!Op.prototype.Ae.call(this))
                return !1;
            if (this.g)
                for (var a, b = 0; a = aq[b]; b++)
                    _.qd(a.A(), this.g) || a.S(!1);
            _.ua(aq, this);
            a = this.A();
            a.className = this.className;
            this.O();
            _.H(a, "mouseover", this.Zd, !1, this);
            _.H(a, "mouseout", this.Yd, !1, this);
            eq(this);
            return !0
        }
        ;
        _.h.Gf = function() {
            _.va(aq, this);
            for (var a = this.A(), b, c = 0; b = aq[c]; c++)
                b.g && _.qd(a, b.g) && b.S(!1);
            this.Dg && this.Dg.Ta();
            _.Wd(a, "mouseover", this.Zd, !1, this);
            _.Wd(a, "mouseout", this.Yd, !1, this);
            this.g = void 0;
            0 == dq(this) && (this.Sa = !1);
            Op.prototype.Gf.call(this)
        }
        ;
        _.h.Bf = function(a, b) {
            this.g == a && this.C.contains(this.g) && (this.Sa || !this.wl ? (this.S(!1),
            this.isVisible() || (this.g = a,
            this.s = b || new fq(Ni(this.Sb)),
            this.isVisible() && this.Ab(),
            this.S(!0))) : this.g = void 0);
            this.W = void 0
        }
        ;
        _.h.df = function() {
            return this.C
        }
        ;
        _.h.zj = function(a) {
            this.ba = void 0;
            if (a == this.g) {
                a = this.V;
                var b = a.U;
                try {
                    var c = b && b.activeElement;
                    var d = c && c.nodeName ? c : null
                } catch (e) {
                    d = null
                }
                d = d && this.A() && a.contains(this.A(), d);
                null != this.Oa && (this.Oa == this.A() || this.C.contains(this.Oa)) || d || this.xc && this.xc.Oa || this.S(!1)
            }
        }
        ;
        var gq = function(a, b) {
            var c = _.Ri(a.V.U);
            a.Sb.x = b.clientX + c.x;
            a.Sb.y = b.clientY + c.y
        };
        Y.prototype.Be = function(a) {
            var b = hq(this, a.target);
            this.Oa = b;
            this.O();
            b != this.g && (this.g = b,
            iq(this, b),
            jq(this),
            gq(this, a))
        }
        ;
        var hq = function(a, b) {
            try {
                for (; b && !a.C.contains(b); )
                    b = b.parentNode;
                return b
            } catch (c) {
                return null
            }
        };
        Y.prototype.zg = function(a) {
            gq(this, a);
            this.Sa = !0
        }
        ;
        Y.prototype.uc = function(a) {
            this.Oa = a = hq(this, a.target);
            this.Sa = !0;
            if (this.g != a) {
                this.g = a;
                var b = new kq(this.Oa);
                this.O();
                iq(this, a, b);
                jq(this)
            }
        }
        ;
        var jq = function(a) {
            if (a.g)
                for (var b, c = 0; b = aq[c]; c++)
                    _.qd(b.A(), a.g) && (b.xc = a,
                    a.Dg = b)
        };
        Y.prototype.Bc = function(a) {
            var b = hq(this, a.target)
              , c = hq(this, a.relatedTarget);
            b != c && (b == this.Oa && (this.Oa = null),
            eq(this),
            this.Sa = !1,
            !this.isVisible() || a.relatedTarget && _.qd(this.A(), a.relatedTarget) ? this.g = void 0 : this.Ta())
        }
        ;
        Y.prototype.Zd = function() {
            var a = this.A();
            this.Oa != a && (this.O(),
            this.Oa = a)
        }
        ;
        Y.prototype.Yd = function(a) {
            var b = this.A();
            this.Oa != b || a.relatedTarget && _.qd(b, a.relatedTarget) || (this.Oa = null,
            this.Ta())
        }
        ;
        var iq = function(a, b, c) {
            a.W || (a.W = _.ng((0,
            _.w)(a.Bf, a, b, c), a.zh))
        }
          , eq = function(a) {
            a.W && (_.og(a.W),
            a.W = void 0)
        };
        Y.prototype.Ta = function() {
            2 == dq(this) && (this.ba = _.ng((0,
            _.w)(this.zj, this, this.g), this.Xg))
        }
        ;
        Y.prototype.O = function() {
            this.ba && (_.og(this.ba),
            this.ba = void 0)
        }
        ;
        Y.prototype.L = function() {
            this.S(!1);
            eq(this);
            cq(this);
            this.A() && _.Kj(this.A());
            this.Oa = null;
            delete this.V;
            Y.G.L.call(this)
        }
        ;
        var fq = function(a, b) {
            $p.call(this, a, b)
        };
        _.x(fq, $p);
        fq.prototype.h = function(a, b, c) {
            b = Ik(a);
            b = Mk(b);
            c = c ? new Ck(c.top + 10,c.right,c.bottom,c.left + 10) : new Ck(10,0,0,10);
            Il(this.g, a, 8, c, b, 9) & 496 && Il(this.g, a, 8, c, b, 5)
        }
        ;
        var kq = function(a) {
            Zp.call(this, a, 5)
        };
        _.x(kq, Zp);
        kq.prototype.h = function(a, b, c) {
            var d = new N(10,0);
            Jl(this.element, this.j, a, b, d, c, 9) & 496 && Jl(this.element, 4, a, 1, d, c, 5)
        }
        ;
        var lq = function() {
            this.l = []
        };
        _.x(lq, nm);
        Vi(lq);
        var mq = function(a, b) {
            var c = a.l[b];
            if (!c) {
                switch (b) {
                case 0:
                    c = a.ua() + "-sn54Q";
                    break;
                case 1:
                    c = a.ua() + "-MPu53c";
                    break;
                case 2:
                    c = a.ua() + "-bN97Pc"
                }
                a.l[b] = c
            }
            return c
        };
        _.h = lq.prototype;
        _.h.oc = function() {
            return "menuitem"
        }
        ;
        _.h.N = function(a) {
            var b = a.g.N("DIV", qm(this, a).join(" "), nq(this, a.wa(), a.g));
            oq(this, a, b, !!(a.ra & 8) || !!(a.ra & 16));
            return b
        }
        ;
        _.h.Pb = function(a) {
            return a && a.firstChild
        }
        ;
        _.h.cb = function(a, b) {
            var c = _.pd(b)
              , d = mq(this, 2);
            c && yl(c, d) || b.appendChild(nq(this, b.childNodes, a.g));
            yl(b, "VIpgJd-wQNmvb") && (a.le(!0),
            this.le(a, b, !0));
            return lq.G.cb.call(this, a, b)
        }
        ;
        _.h.Mc = function(a, b) {
            var c = this.Pb(a)
              , d = pq(this, a) ? c.firstChild : null;
            lq.G.Mc.call(this, a, b);
            d && !pq(this, a) && c.insertBefore(d, c.firstChild || null)
        }
        ;
        var nq = function(a, b, c) {
            a = mq(a, 2);
            return c.N("DIV", a, b)
        };
        lq.prototype.yh = function(a, b, c) {
            a && b && oq(this, a, b, c)
        }
        ;
        lq.prototype.le = function(a, b, c) {
            a && b && oq(this, a, b, c)
        }
        ;
        var pq = function(a, b) {
            return (b = a.Pb(b)) ? (b = b.firstChild,
            a = mq(a, 1),
            !!b && Lj(b) && yl(b, a)) : !1
        }
          , oq = function(a, b, c, d) {
            sm(a, c, b.gd());
            tm(a, b, c);
            d != pq(a, c) && (d ? _.R(c, "VIpgJd-wQNmvb") : _.Al(c, "VIpgJd-wQNmvb"),
            c = a.Pb(c),
            d ? (a = mq(a, 1),
            c.insertBefore(b.g.N("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
        };
        lq.prototype.g = function(a) {
            switch (a) {
            case 2:
                return mq(this, 0);
            case 16:
            case 8:
                return "VIpgJd-wQNmvb-gk6SMd";
            default:
                return lq.G.g.call(this, a)
            }
        }
        ;
        lq.prototype.j = function(a) {
            var b = mq(this, 0);
            switch (a) {
            case "VIpgJd-wQNmvb-gk6SMd":
                return 16;
            case b:
                return 2;
            default:
                return lq.G.j.call(this, a)
            }
        }
        ;
        lq.prototype.ua = function() {
            return "VIpgJd-j7LFlb"
        }
        ;
        var qq = function(a, b, c, d) {
            U.call(this, a, d || lq.ea(), c);
            this.Ma(b)
        };
        _.x(qq, U);
        _.h = qq.prototype;
        _.h.Qa = function() {
            var a = this.ob;
            return null != a ? a : this.xb()
        }
        ;
        _.h.Ma = function(a) {
            this.ob = a
        }
        ;
        _.h.Ga = function(a, b) {
            qq.G.Ga.call(this, a, b);
            switch (a) {
            case 8:
                this.ka & 16 && !b && Cm(this, 16, !1) && Fm(this, 16, !1);
                (a = this.A()) && this.h.yh(this, a, b);
                break;
            case 16:
                (a = this.A()) && this.h.le(this, a, b)
            }
        }
        ;
        _.h.yh = function(a) {
            this.Ga(8, a)
        }
        ;
        _.h.le = function(a) {
            this.Ga(16, a)
        }
        ;
        _.h.xb = function() {
            var a = this.wa();
            return Array.isArray(a) ? (a = _.Xb(a, function(b) {
                return Lj(b) && (yl(b, "VIpgJd-j7LFlb-x29Bmf") || yl(b, "VIpgJd-j7LFlb-PQTlnb-hgDUwe")) ? "" : Uj(b)
            }).join(""),
            uj(a)) : qq.G.xb.call(this)
        }
        ;
        _.h.Cc = function(a) {
            var b = this.T();
            if (b) {
                var c = b.la;
                b.la = null;
                if (b = c && "number" === typeof a.clientX)
                    b = new N(a.clientX,a.clientY),
                    b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
                if (b)
                    return
            }
            qq.G.Cc.call(this, a)
        }
        ;
        _.h.Oc = function(a) {
            return a.keyCode == this.ih && this.Ic(a) ? !0 : qq.G.Oc.call(this, a)
        }
        ;
        _.h.Ci = function() {
            return this.ih
        }
        ;
        xm("VIpgJd-j7LFlb", function() {
            return new qq(null)
        });
        qq.prototype.gd = function() {
            return this.ra & 16 ? "menuitemcheckbox" : this.ra & 8 ? "menuitemradio" : qq.G.gd.call(this)
        }
        ;
        qq.prototype.T = function() {
            return U.prototype.T.call(this)
        }
        ;
        qq.prototype.Sd = function() {
            return U.prototype.Sd.call(this)
        }
        ;
        var rq = function(a) {
            this.g = a
        };
        Vi(rq);
        var sq = function(a, b) {
            a && (a.tabIndex = b ? 0 : -1)
        };
        rq.prototype.N = function(a) {
            var b = a.g
              , c = b.N
              , d = this.yd()
              , e = [d, "horizontal" == a.Xb ? d + "-DKlKme" : d + "-BvBYQ"];
            a.isEnabled() || e.push(d + "-OWB6Me");
            return c.call(b, "DIV", e.join(" "))
        }
        ;
        rq.prototype.Ce = function(a) {
            return "DIV" == a.tagName
        }
        ;
        var uq = function(a, b, c) {
            c.id && cm(b, c.id);
            var d = a.yd()
              , e = !1
              , f = wl(c);
            f && Array.prototype.forEach.call(f, function(g) {
                if (g == d)
                    e = !0;
                else if (g)
                    if (g == d + "-OWB6Me")
                        b.qa(!1);
                    else if (g == d + "-DKlKme") {
                        if (b.A())
                            throw Error("ha");
                        b.Xb = "horizontal"
                    } else if (g == d + "-BvBYQ") {
                        if (b.A())
                            throw Error("ha");
                        b.Xb = "vertical"
                    }
            }, a);
            e || _.R(c, d);
            tq(a, b, c);
            return c
        }
          , tq = function(a, b, c) {
            if (c)
                for (var d = c.firstChild, e; d && d.parentNode == c; ) {
                    e = d.nextSibling;
                    if (1 == d.nodeType) {
                        var f = a.cf(d);
                        f && (f.I = d,
                        b.isEnabled() || f.qa(!1),
                        b.Uc(f),
                        hm(f, d))
                    } else
                        d.nodeValue && "" != (0,
                        _.bc)(d.nodeValue) || c.removeChild(d);
                    d = e
                }
        };
        rq.prototype.cf = function(a) {
            a: {
                a = wl(a);
                for (var b = 0, c = a.length; b < c; b++) {
                    var d = a[b];
                    if (d = d in wm ? wm[d]() : null) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
            return a
        }
        ;
        rq.prototype.De = function(a) {
            a = a.A();
            Rk(a, !0, _.C);
            _.B && (a.hideFocus = !0);
            var b = this.g;
            b && Ll(a, b)
        }
        ;
        rq.prototype.yd = function() {
            return "VIpgJd-haAclf"
        }
        ;
        var vq = function() {};
        _.x(vq, nm);
        Vi(vq);
        vq.prototype.N = function(a) {
            return a.g.N("DIV", this.ua())
        }
        ;
        vq.prototype.cb = function(a, b) {
            b.id && cm(a, b.id);
            if ("HR" == b.tagName) {
                var c = b;
                b = this.N(a);
                Ij(b, c);
                _.Kj(c)
            } else
                _.R(b, this.ua());
            return b
        }
        ;
        vq.prototype.Mc = function() {}
        ;
        vq.prototype.ua = function() {
            return "VIpgJd-gqMrKb"
        }
        ;
        var wq = function(a, b) {
            U.call(this, null, a || vq.ea(), b);
            this.Ga(1, !1);
            this.Ga(2, !1);
            this.Ga(4, !1);
            this.Ga(32, !1);
            this.ka = 1
        };
        _.x(wq, U);
        wq.prototype.Y = function() {
            wq.G.Y.call(this);
            var a = this.A();
            Ll(a, "separator")
        }
        ;
        xm("VIpgJd-gqMrKb", function() {
            return new wq
        });
        var xq = function(a) {
            this.g = a || "menu"
        };
        _.x(xq, rq);
        Vi(xq);
        _.h = xq.prototype;
        _.h.Ce = function(a) {
            return "UL" == a.tagName || xq.G.Ce.call(this, a)
        }
        ;
        _.h.cf = function(a) {
            return "HR" == a.tagName ? new wq : xq.G.cf.call(this, a)
        }
        ;
        _.h.Yc = function(a, b) {
            return _.qd(a.A(), b)
        }
        ;
        _.h.yd = function() {
            return "VIpgJd-xl07Ob"
        }
        ;
        _.h.De = function(a) {
            xq.G.De.call(this, a);
            a = a.A();
            Ml(a, "haspopup", "true")
        }
        ;
        var yq = function(a, b, c, d) {
            Zp.call(this, a, b);
            this.s = c ? 5 : 0;
            this.l = d || void 0
        };
        _.x(yq, Zp);
        yq.prototype.o = function(a) {
            this.s = a
        }
        ;
        yq.prototype.h = function(a, b, c) {
            var d = Jl(this.element, this.j, a, b, null, c, 10, void 0, this.l);
            if (d & 496) {
                var e = zq(d, this.j);
                b = zq(d, b);
                d = Jl(this.element, e, a, b, null, c, 10, void 0, this.l);
                d & 496 && (e = zq(d, e),
                b = zq(d, b),
                Jl(this.element, e, a, b, null, c, this.s, void 0, this.l))
            }
        }
        ;
        var zq = function(a, b) {
            a & 48 && (b ^= 4);
            a & 192 && (b ^= 1);
            return b
        };
        var Aq = function(a, b) {
            this.g = a instanceof N ? a : new N(a,b)
        };
        _.x(Aq, Cl);
        Aq.prototype.h = function(a, b, c) {
            var d = _.E(a);
            var e = d.body;
            d = d.documentElement;
            d = new N(e.scrollLeft || d.scrollLeft,e.scrollTop || d.scrollTop);
            e = this.g.x + d.x;
            d = this.g.y + d.y;
            var f = Gl(a);
            e -= f.x;
            d -= f.y;
            Il(new N(e,d), a, b, c, null, null, void 0)
        }
        ;
        var Bq = function(a, b) {
            Aq.call(this, a, b)
        };
        _.x(Bq, Aq);
        Bq.prototype.j = 0;
        Bq.prototype.o = function(a) {
            this.j = a
        }
        ;
        Bq.prototype.h = function(a, b, c) {
            var d = Ik(a);
            d = Mk(d);
            var e = Qi(_.F(a).U);
            e = new N(this.g.x + e.scrollLeft,this.g.y + e.scrollTop);
            var f = b
              , g = Il(e, a, f, c, d, 10, void 0);
            if (0 != (g & 496)) {
                if (g & 16 || g & 32)
                    f ^= 4;
                if (g & 64 || g & 128)
                    f ^= 1;
                g = Il(e, a, f, c, d, 10, void 0);
                0 != (g & 496) && Il(e, a, b, c, d, this.j, void 0)
            }
        }
        ;
        var Cq = function(a, b, c) {
            _.M.call(this, c);
            this.Rb = b || rq.ea();
            this.Xb = a || "vertical"
        };
        _.x(Cq, _.M);
        _.h = Cq.prototype;
        _.h.Fc = null;
        _.h.Rc = null;
        _.h.Rb = null;
        _.h.Xb = null;
        _.h.za = !0;
        _.h.Qb = !0;
        _.h.ec = !0;
        _.h.Aa = -1;
        _.h.Fa = null;
        _.h.Gc = !1;
        _.h.Eb = null;
        var Dq = function(a) {
            return a.Fc || a.A()
        }
          , Gq = function(a, b) {
            if (a.ec) {
                var c = Dq(a)
                  , d = a.ia;
                a.Fc = b;
                var e = Dq(a);
                d && (a.Fc = c,
                Eq(a, !1),
                a.Fc = b,
                Fq(a).attach(e),
                Eq(a, !0))
            } else
                throw Error("ta");
        }
          , Fq = function(a) {
            return a.Rc || (a.Rc = new Vl(Dq(a)))
        };
        _.h = Cq.prototype;
        _.h.N = function() {
            this.I = this.Rb.N(this)
        }
        ;
        _.h.rd = function() {
            return this.A()
        }
        ;
        _.h.ve = function(a) {
            return this.Rb.Ce(a)
        }
        ;
        _.h.da = function(a) {
            this.I = uq(this.Rb, this, a);
            "none" == a.style.display && (this.za = !1)
        }
        ;
        _.h.Y = function() {
            Cq.G.Y.call(this);
            im(this, function(b) {
                b.ia && Hq(this, b)
            }, this);
            var a = this.A();
            this.Rb.De(this);
            this.S(this.za, !0);
            S(this).D(this, "enter", this.hf).D(this, "highlight", this.jd).D(this, "unhighlight", this.nf).D(this, "open", this.Ti).D(this, "close", this.Ki).D(a, Vj.rc, this.Oh).D(_.E(a), [Vj.sc, Vj.Sc], this.Li).D(a, [Vj.rc, Vj.sc, Vj.Sc, "mouseover", "mouseout", "contextmenu"], this.Ii);
            this.ec && Eq(this, !0)
        }
        ;
        var Eq = function(a, b) {
            var c = S(a)
              , d = Dq(a);
            b ? c.D(d, "focus", a.jg).D(d, "blur", a.zd).D(Fq(a), "key", a.ab) : c.sa(d, "focus", a.jg).sa(d, "blur", a.zd).sa(Fq(a), "key", a.ab)
        };
        _.h = Cq.prototype;
        _.h.ca = function() {
            this.Yb(-1);
            this.Fa && Gm(this.Fa, !1);
            this.Gc = !1;
            Cq.G.ca.call(this)
        }
        ;
        _.h.L = function() {
            Cq.G.L.call(this);
            this.Rc && (this.Rc.R(),
            this.Rc = null);
            this.Rb = this.Fa = this.Eb = this.Fc = null
        }
        ;
        _.h.hf = function() {
            return !0
        }
        ;
        _.h.jd = function(a) {
            var b = mm(this, a.target);
            if (-1 < b && b != this.Aa) {
                var c = Iq(this);
                c && Em(c, !1);
                this.Aa = b;
                c = Iq(this);
                this.Gc && Dm(c, !0);
                this.Fa && c != this.Fa && (c.ra & 64 ? Gm(c, !0) : Gm(this.Fa, !1))
            }
            b = this.A();
            null != a.target.A() && Ml(b, "activedescendant", a.target.A().id)
        }
        ;
        _.h.nf = function(a) {
            a.target == Iq(this) && (this.Aa = -1);
            this.A().removeAttribute("aria-activedescendant")
        }
        ;
        _.h.Ti = function(a) {
            (a = a.target) && a != this.Fa && a.T() == this && (this.Fa && Gm(this.Fa, !1),
            this.Fa = a)
        }
        ;
        _.h.Ki = function(a) {
            a.target == this.Fa && (this.Fa = null);
            var b = this.A()
              , c = a.target.A();
            b && a.target.ka & 2 && c && (a = "",
            c && (a = c.id),
            Ml(b, "activedescendant", a))
        }
        ;
        _.h.Oh = function(a) {
            this.Qb && (this.Gc = !0);
            var b = Dq(this);
            b && Rj(b) && Sj(b) ? b.focus() : a.preventDefault()
        }
        ;
        _.h.Li = function() {
            this.Gc = !1
        }
        ;
        _.h.Ii = function(a) {
            a: {
                var b = a.target;
                if (this.Eb)
                    for (var c = this.A(); b && b !== c; ) {
                        var d = b.id;
                        if (d in this.Eb) {
                            b = this.Eb[d];
                            break a
                        }
                        b = b.parentNode
                    }
                b = null
            }
            if (b)
                switch (a.type) {
                case Vj.rc:
                    b.Pc(a);
                    break;
                case Vj.sc:
                case Vj.Sc:
                    b.Cc(a);
                    break;
                case "mouseover":
                    b.V(a);
                    break;
                case "mouseout":
                    b.ba(a);
                    break;
                case "contextmenu":
                    b.B(a)
                }
        }
        ;
        _.h.jg = function() {}
        ;
        _.h.zd = function() {
            this.Yb(-1);
            this.Gc = !1;
            this.Fa && Gm(this.Fa, !1)
        }
        ;
        _.h.ab = function(a) {
            return this.isEnabled() && this.isVisible() && (0 != jm(this) || this.Fc) && this.Ee(a) ? (a.preventDefault(),
            a.stopPropagation(),
            !0) : !1
        }
        ;
        _.h.Ee = function(a) {
            var b = Iq(this);
            if (b && "function" == typeof b.ab && b.ab(a) || this.Fa && this.Fa != b && "function" == typeof this.Fa.ab && this.Fa.ab(a))
                return !0;
            if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)
                return !1;
            switch (a.keyCode) {
            case 27:
                if (this.ec)
                    Dq(this).blur();
                else
                    return !1;
                break;
            case 36:
                Jq(this);
                break;
            case 35:
                Kq(this);
                break;
            case 38:
                if ("vertical" == this.Xb)
                    Lq(this);
                else
                    return !1;
                break;
            case 37:
                if ("horizontal" == this.Xb)
                    lm(this) ? Mq(this) : Lq(this);
                else
                    return !1;
                break;
            case 40:
                if ("vertical" == this.Xb)
                    Mq(this);
                else
                    return !1;
                break;
            case 39:
                if ("horizontal" == this.Xb)
                    lm(this) ? Lq(this) : Mq(this);
                else
                    return !1;
                break;
            default:
                return !1
            }
            return !0
        }
        ;
        var Hq = function(a, b) {
            var c = b.A();
            c = c.id || (c.id = b.ib());
            a.Eb || (a.Eb = {});
            a.Eb[c] = b
        };
        _.h = Cq.prototype;
        _.h.Uc = function(a, b) {
            Cq.G.Uc.call(this, a, b)
        }
        ;
        _.h.Ke = function(a, b, c) {
            a.qd |= 2;
            a.qd |= 64;
            a.Ga(32, !1);
            Am(a, !1);
            var d = a.T() == this ? mm(this, a) : -1;
            Cq.G.Ke.call(this, a, b, c);
            a.ia && this.ia && Hq(this, a);
            a = d;
            -1 == a && (a = jm(this));
            a == this.Aa ? this.Aa = Math.min(jm(this) - 1, b) : a > this.Aa && b <= this.Aa ? this.Aa++ : a < this.Aa && b > this.Aa && this.Aa--
        }
        ;
        _.h.we = function(a, b) {
            if (a = "string" === typeof a ? em(this, a) : a) {
                var c = mm(this, a);
                -1 != c && (c == this.Aa ? (Em(a, !1),
                this.Aa = -1) : c < this.Aa && this.Aa--);
                var d = a.A();
                d && d.id && this.Eb && (c = this.Eb,
                d = d.id,
                d in c && delete c[d])
            }
            a = Cq.G.we.call(this, a, b);
            Am(a, !0);
            return a
        }
        ;
        _.h.isVisible = function() {
            return this.za
        }
        ;
        _.h.S = function(a, b) {
            if (b || this.za != a && this.dispatchEvent(a ? "show" : "hide")) {
                this.za = a;
                var c = this.A();
                c && (_.O(c, a),
                this.ec && sq(Dq(this), this.Qb && this.za),
                b || this.dispatchEvent(this.za ? "aftershow" : "afterhide"));
                return !0
            }
            return !1
        }
        ;
        _.h.isEnabled = function() {
            return this.Qb
        }
        ;
        _.h.qa = function(a) {
            this.Qb != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Qb = !0,
            im(this, function(b) {
                b.Jh ? delete b.Jh : b.qa(!0)
            })) : (im(this, function(b) {
                b.isEnabled() ? b.qa(!1) : b.Jh = !0
            }),
            this.Gc = this.Qb = !1),
            this.ec && sq(Dq(this), a && this.za))
        }
        ;
        var Nq = function(a, b) {
            b != a.ec && a.ia && Eq(a, b);
            a.ec = b;
            a.Qb && a.za && sq(Dq(a), b)
        };
        Cq.prototype.Yb = function(a) {
            (a = km(this, a)) ? Em(a, !0) : -1 < this.Aa && Em(Iq(this), !1)
        }
        ;
        var Iq = function(a) {
            return km(a, a.Aa)
        }
          , Jq = function(a) {
            Oq(a, function(b, c) {
                return (b + 1) % c
            }, jm(a) - 1)
        }
          , Kq = function(a) {
            Oq(a, function(b, c) {
                b--;
                return 0 > b ? c - 1 : b
            }, 0)
        }
          , Mq = function(a) {
            Oq(a, function(b, c) {
                return (b + 1) % c
            }, a.Aa)
        }
          , Lq = function(a) {
            Oq(a, function(b, c) {
                b--;
                return 0 > b ? c - 1 : b
            }, a.Aa)
        }
          , Oq = function(a, b, c) {
            c = 0 > c ? mm(a, a.Fa) : c;
            var d = jm(a);
            c = b.call(a, c, d);
            for (var e = 0; e <= d; ) {
                var f = km(a, c);
                if (f && a.ug(f)) {
                    a.Yb(c);
                    break
                }
                e++;
                c = b.call(a, c, d)
            }
        };
        Cq.prototype.ug = function(a) {
            return a.isVisible() && a.isEnabled() && !!(a.ra & 2)
        }
        ;
        var Pq = function() {};
        _.x(Pq, nm);
        Vi(Pq);
        Pq.prototype.ua = function() {
            return "VIpgJd-wckcKc"
        }
        ;
        var Qq = function(a, b, c) {
            U.call(this, a, c || Pq.ea(), b);
            this.Ga(1, !1);
            this.Ga(2, !1);
            this.Ga(4, !1);
            this.Ga(32, !1);
            this.ka = 1
        };
        _.x(Qq, U);
        xm("VIpgJd-wckcKc", function() {
            return new Qq(null)
        });
        xm("VIpgJd-gqMrKb", function() {
            return new wq
        });
        var Rq = function(a, b) {
            Cq.call(this, "vertical", b || xq.ea(), a);
            Nq(this, !1)
        };
        _.x(Rq, Cq);
        _.h = Rq.prototype;
        _.h.Le = !0;
        _.h.Yc = function(a) {
            if (this.Rb.Yc(this, a))
                return !0;
            for (var b = 0, c = jm(this); b < c; b++) {
                var d = km(this, b);
                if ("function" == typeof d.Yc && d.Yc(a))
                    return !0
            }
            return !1
        }
        ;
        _.h.S = function(a, b, c) {
            (b = Rq.G.S.call(this, a, b)) && a && this.ia && this.Le && Dq(this).focus();
            a && c && "number" === typeof c.clientX ? this.la = new N(c.clientX,c.clientY) : this.la = null;
            return b
        }
        ;
        _.h.hf = function(a) {
            this.Le && Dq(this).focus();
            return Rq.G.hf.call(this, a)
        }
        ;
        _.h.ug = function(a) {
            return a.isEnabled() && a.isVisible() && !!(a.ra & 2)
        }
        ;
        _.h.da = function(a) {
            for (var b = this.Rb, c = _.Oi(this.g.U, "DIV", b.yd() + "-bN97Pc", a), d = c.length, e = 0; e < d; e++)
                tq(b, this, c[e]);
            Rq.G.da.call(this, a)
        }
        ;
        _.h.Ee = function(a) {
            var b = Rq.G.Ee.call(this, a);
            b || im(this, function(c) {
                !b && c.Ci && c.ih == a.keyCode && (this.isEnabled() && this.Yb(mm(this, c)),
                b = c.ab(a))
            }, this);
            return b
        }
        ;
        _.h.Yb = function(a) {
            Rq.G.Yb.call(this, a);
            if (a = km(this, a)) {
                var b = a.A();
                a = this.A() || Qi(document);
                var c = a || Qi(document);
                var d = Lk(b)
                  , e = Lk(c)
                  , f = Zk(c);
                if (c == Qi(document)) {
                    var g = d.x - c.scrollLeft;
                    d = d.y - c.scrollTop;
                    !_.B || 10 <= Number(_.Dc) || (g += f.left,
                    d += f.top)
                } else
                    g = d.x - e.x - f.left,
                    d = d.y - e.y - f.top;
                b = Nk(b);
                f = c.clientHeight - b.height;
                e = c.scrollLeft;
                var k = c.scrollTop;
                e += Math.min(g, Math.max(g - (c.clientWidth - b.width), 0));
                k += Math.min(d, Math.max(d - f, 0));
                c = new N(e,k);
                a.scrollLeft = c.x;
                a.scrollTop = c.y
            }
        }
        ;
        var Sq = function(a, b) {
            Rq.call(this, a, b);
            this.Le = !0;
            Nq(this, !0);
            this.S(!1, !0);
            this.h = new _.uf
        };
        _.x(Sq, Rq);
        _.h = Sq.prototype;
        _.h.Hh = !1;
        _.h.bh = 0;
        _.h.Ua = null;
        _.h.da = function(a) {
            Sq.G.da.call(this, a);
            (a = a.getAttribute("for") || a.htmlFor) && this.attach(this.g.A(a), 1)
        }
        ;
        _.h.Y = function() {
            Sq.G.Y.call(this);
            this.h.forEach(this.Gd, this);
            var a = S(this);
            a.D(this, "action", this.Df);
            a.D(this.g.U, "mousedown", this.wb, !0)
        }
        ;
        _.h.attach = function(a, b, c, d, e) {
            a && _.wf(this.h, _.za(a)) || (b = this.Te(a, b, c, d, e),
            this.ia && this.Gd(b),
            a = _.yb(this.Dj, a),
            this.A() && S(this).D(this.A(), "keydown", a))
        }
        ;
        _.h.Dj = function(a, b) {
            if (27 == b.keyCode)
                a.focus();
            else if (a = km(this, this.Aa)) {
                var c = a.A();
                a = new _.Cd(b.g,c);
                a.target = c;
                if (32 == b.keyCode || 13 == b.keyCode)
                    if (_.Ed(c))
                        _.$d(c, "keydown", !1, a);
                    else if (c = _.Sd(c))
                        if (c = c.g["keydown".toString()]) {
                            c = c.concat();
                            for (var d = 0; d < c.length; d++) {
                                var e = c[d];
                                e && 0 == e.capture && !e.Kc && _.Yd(e, a)
                            }
                        }
                32 == b.keyCode && this.Bb()
            }
        }
        ;
        _.h.Te = function(a, b, c, d, e) {
            if (!a)
                return null;
            b = {
                I: a,
                Eh: b,
                Aj: c,
                bd: d ? "contextmenu" : "mousedown",
                xf: e
            };
            this.h.set(_.za(a), b);
            return b
        }
        ;
        _.h.Gd = function(a) {
            S(this).D(a.I, a.bd, this.ke);
            "contextmenu" != a.bd && S(this).D(a.I, "keydown", this.Fj)
        }
        ;
        _.h.Pd = function() {
            if (this.ia)
                for (var a = this.h.Ub(), b = 0; b < a.length; b++)
                    this.We(this.h.get(a[b]));
            Si(this.h)
        }
        ;
        _.h.We = function(a) {
            S(this).sa(a.I, a.bd, this.ke)
        }
        ;
        _.h.Ad = function(a, b, c) {
            b = void 0 !== a.Eh ? new yq(a.I,a.Eh,!0) : new Bq(b,c);
            b.o && b.o(5);
            var d = a.Aj;
            c = a.xf;
            var e = a.I;
            a = this.isVisible();
            (this.isVisible() || 150 > Date.now() - this.bh) && this.Hh ? this.Bb() : (this.Ua = e || null,
            this.dispatchEvent("beforeshow") && (d = "undefined" != typeof d ? d : 8,
            a || (this.A().style.visibility = "hidden"),
            _.O(this.A(), !0),
            b.h(this.A(), d, c),
            a || (this.A().style.visibility = "visible"),
            this.Yb(-1),
            this.S(!0)))
        }
        ;
        _.h.Bb = function() {
            this.isVisible() && (this.S(!1),
            this.isVisible() || (this.bh = Date.now(),
            this.Ua = null))
        }
        ;
        _.h.Df = function() {
            this.Bb()
        }
        ;
        _.h.ke = function(a) {
            Tq(this, a)
        }
        ;
        _.h.Fj = function(a) {
            32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || Tq(this, a);
            40 == a.keyCode && Jq(this)
        }
        ;
        var Tq = function(a, b) {
            for (var c = a.h.Ub(), d = 0; d < c.length; d++) {
                var e = a.h.get(c[d]);
                if (e.I == b.currentTarget) {
                    a.Ad(e, b.clientX, b.clientY);
                    b.preventDefault();
                    b.stopPropagation();
                    break
                }
            }
        };
        Sq.prototype.wb = function(a) {
            this.isVisible() && !this.Yc(a.target) && this.Bb()
        }
        ;
        Sq.prototype.zd = function(a) {
            Sq.G.zd.call(this, a);
            this.Bb()
        }
        ;
        Sq.prototype.L = function() {
            Sq.G.L.call(this);
            this.h && (Si(this.h),
            delete this.h)
        }
        ;
        var Z = function(a, b, c) {
            Sq.call(this, b, c);
            this.s = new _.uf;
            this.l = a || 5;
            this.B = null;
            this.J = !1;
            this.o = Array(this.l);
            this.aa = Array(this.l);
            this.O = Um.ea();
            this.V = tn.ea();
            this.ba = null;
            this.Hh = !0
        };
        _.x(Z, Sq);
        var Uq = "";
        Z.prototype.N = function() {
            Z.G.N.call(this);
            for (var a = 0; a < this.l; ++a)
                this.Uc(new qq(""), !0)
        }
        ;
        Z.prototype.ja = function(a) {
            Z.G.ja.call(this, a);
            _.R(this.A(), "alt-menu")
        }
        ;
        Z.prototype.Vf = function(a) {
            a = this.s.get(_.za(a));
            for (var b = 0; b < V(a, 2) && b < this.l; ++b) {
                var c = km(this, b);
                c.j(rn(go(a, b), 0));
                c.Ma(b);
                c.S(!0, !0)
            }
            for (; b < this.l; ++b)
                km(this, b).S(!1)
        }
        ;
        var Vq = function(a, b, c) {
            a.s.set(_.za(b), c);
            a.attach(b, 9, 8, !1, new Ck(-2,1,-2,1))
        };
        _.h = Z.prototype;
        _.h.Pd = function() {
            Z.G.Pd.call(this);
            Si(this.s)
        }
        ;
        _.h.S = function(a, b) {
            var c = this.Ua;
            this.ba = c;
            a && null != c ? (Wq(this, c),
            $m(this.O, "altshow"),
            un(this.V, 207)) : null != this.B && Wp(this.B, 0, 0);
            null != c && (a ? this.Ue(c) : this.Re(c));
            b = Z.G.S.call(this, a, b);
            a && null != this.A() && Rk(this.A(), !1);
            return b
        }
        ;
        _.h.xb = function() {
            if (null != this.ba) {
                var a = _.wd(this.ba);
                if (null != a)
                    return a
            }
            return ""
        }
        ;
        _.h.Bb = function() {
            Z.G.Bb.call(this);
            if (this.J)
                for (var a = 0; a < this.o.length; a++) {
                    var b = this.o[a];
                    _.og(b.l);
                    b.C();
                    b.B(-1);
                    b.C();
                    b.S(!1)
                }
        }
        ;
        _.h.Ue = function(a) {
            _.R(a, "trans-target");
            a.title = ""
        }
        ;
        _.h.Re = function(a) {
            _.Al(a, "trans-target");
            a.title = Uq
        }
        ;
        _.h.ab = function(a) {
            if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode)
                return !1;
            var b = Z.G.ab.call(this, a);
            if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
                var c = Qk(this.Ua.parentNode.parentNode)
                  , d = null;
                if (!c && 37 == a.keyCode || c && 39 == a.keyCode)
                    d = !1;
                if (!c && 39 == a.keyCode || c && 37 == a.keyCode)
                    d = !0;
                if (this.Me(d) && (c = this.Ua,
                (c = d ? void 0 !== c.nextElementSibling ? c.nextElementSibling : _.od(c.nextSibling, !0) : void 0 !== c.previousElementSibling ? c.previousElementSibling : _.od(c.previousSibling, !1)) && c != this.Ua))
                    return this.Bb(),
                    this.xh(d),
                    this.Ad(c ? this.h.get(_.za(c)) : null, 0, 0),
                    Xq(this),
                    a.preventDefault(),
                    a.stopPropagation(),
                    !0
            }
            return b
        }
        ;
        _.h.Ad = function(a, b, c) {
            Qk((a.I || this.Ua).parentNode.parentNode) ? _.L(this.A(), "direction", "rtl") : _.L(this.A(), "direction", "");
            if (this.J)
                for (var d = 0; d < this.o.length; d++)
                    Yq(this, d),
                    _.rd(this.o[d].j, "...");
            this.Vf(a.I);
            Z.G.Ad.call(this, a, b, c)
        }
        ;
        var Zq = function(a, b, c) {
            !a.J || b >= a.l || "" == c || (_.rd(a.o[b].j, c),
            Yq(a, b))
        }
          , Yq = function(a, b) {
            var c = a.o[b];
            Jl(km(a, b).A(), 12, c.A(), 8, new N(1,0))
        };
        _.h = Z.prototype;
        _.h.jd = function(a) {
            Z.G.jd.call(this, a);
            var b = this.Ua;
            null != b && ($m(this.O, "altmenuhl"),
            un(this.V, 209),
            Wq(this, b),
            a = this.Td(a.target),
            -1 != a && a != this.l && (_.og(this.aa[a]),
            this.aa[a] = _.ng(this.yj, 300, this),
            this.J && (b = this.o[a],
            Qk(this.Ua.parentNode.parentNode) ? (_.R(b.A(), "rtl"),
            _.L(b.A(), "direction", "rtl")) : (_.Al(b.A(), "rtl"),
            _.L(b.A(), "direction", "")),
            Yq(this, a),
            _.og(b.l),
            0 == b.g ? b.l = _.ng((0,
            _.w)(b.B, b, 1), 300) : b.B(1))))
        }
        ;
        _.h.yj = function() {
            $m(this.O, "altmenuhold");
            un(this.V, 208)
        }
        ;
        _.h.nf = function(a) {
            Z.G.nf.call(this, a);
            a = this.Td(a.target);
            -1 != a && a != this.l && (_.og(this.aa[a]),
            this.J && this.o[a].K())
        }
        ;
        _.h.Td = function(a) {
            return mm(this, a)
        }
        ;
        _.h.Me = function() {
            return !0
        }
        ;
        _.h.xh = function() {}
        ;
        _.h.Te = function(a, b, c, d, e) {
            (a = Z.G.Te.call(this, a, b, c, d, e)) && "mousedown" == a.bd && (a.bd = "click");
            return a
        }
        ;
        _.h.Gd = function(a) {
            Z.G.Gd.call(this, a);
            S(this).D(a.I, "mouseover", this.$a);
            S(this).D(a.I, "mouseout", this.X);
            S(this).D(a.I, "contextmenu", this.Sa);
            S(this).D(a.I, "mousemove", this.Ta)
        }
        ;
        _.h.We = function(a) {
            Z.G.We.call(this, a);
            S(this).sa(a.I, "mouseover", this.$a);
            S(this).sa(a.I, "mouseout", this.X);
            S(this).sa(a.I, "contextmenu", this.Sa);
            S(this).sa(a.I, "mousemove", this.Ta)
        }
        ;
        var Wq = function(a, b) {
            if (null != a.B && (b = a.s.get(_.za(b))) && (a = a.B,
            a.h))
                for (var c = a.I && (a.I.value || _.wd(a.I)), d = -1, e = -1, f = !1, g = 0; g < V(a.h, 5); g++) {
                    var k = jo(a.h, g);
                    if (0 != V(k, 2) && (0 == qn(k, 5) && (f = c.indexOf(rn(k, 4), e + 1),
                    0 <= f ? (d = f,
                    e = d + rn(k, 4).length,
                    f = !0) : f = !1),
                    jo(a.h, g).g == b.g)) {
                        if (f) {
                            c = [];
                            for (e = 0; e < V(b, 3); ++e)
                                c.push({
                                    cd: d + qn(new eo(sn(b, 3, e)), 0),
                                    Zf: d + qn(new eo(sn(b, 3, e)), 1)
                                });
                            Wp(a, 0, 0, void 0, c)
                        } else
                            d = c.indexOf(rn(b, 0)),
                            0 <= d && Wp(a, d, d + rn(b, 0).length);
                        break
                    }
                }
        }
          , $q = function(a, b) {
            b ? ak(a.h.Ha(!1), function(c) {
                "" == this.g.fg(c.I) && (_.R(c.I, "trans-target-empty"),
                this.g.nb(c.I, "_"));
                return !0
            }, a) : ak(a.h.Ha(!1), function(c) {
                yl(c.I, "trans-target-empty") && (_.Al(c.I, "trans-target-empty"),
                this.g.nb(c.I, ""));
                return !0
            }, a)
        };
        Z.prototype.$a = function(a) {
            !Xn() && this.isEnabled() && (_.R(a.target, "trans-target-highlight"),
            Wq(this, a.target),
            $q(this, !0),
            $m(this.O, "althighlight"),
            un(this.V, 206))
        }
        ;
        Z.prototype.X = function(a) {
            _.Al(a.target, "trans-target-highlight");
            null == this.B || this.isVisible() || Wp(this.B, 0, 0);
            $q(this, !1)
        }
        ;
        Z.prototype.Ta = function(a) {
            Xn() && this.X(a)
        }
        ;
        Z.prototype.Sa = function(a) {
            Xn() || (this.X(a),
            Ln(Jn(a.target), void 0).select())
        }
        ;
        var Xq = function(a) {
            ak(a.h.Ha(!1), function(b) {
                _.Al(b.I, "trans-target-highlight");
                return !0
            }, a)
        };
        Z.prototype.Df = function(a) {
            a && a.currentTarget && a.currentTarget.Ua && (a.l = a.currentTarget.Ua);
            Z.G.Df.call(this, a)
        }
        ;
        Z.prototype.ke = function(a) {
            Xn() ? Xq(this) : this.Qb && Z.G.ke.call(this, a)
        }
        ;
        var ar = function(a, b, c) {
            this.xa = this.j = null;
            Z.call(this, a, b, c)
        };
        _.x(ar, Z);
        _.h = ar.prototype;
        _.h.xh = function(a) {
            this.j = a
        }
        ;
        _.h.S = function(a, b) {
            b = ar.G.S.call(this, a, b);
            this.j = null;
            a ? this.xa = this.xb() : null != this.xa && this.xa != this.xb() && this.dispatchEvent(new _.zd("action",this));
            return b
        }
        ;
        _.h.Ue = function(a) {
            ar.G.Ue.call(this, a);
            _.R(a, "trans-edit");
            a.contentEditable = !0;
            Gq(this, a);
            Dq(this).focus();
            Tj(Dq(this), !0);
            S(this).D(a, "keydown", this.Ng);
            S(this).D(a, "mouseout", this.Xd);
            S(this).D(a, "mouseover", this.Xd);
            if (null != this.j) {
                a = Ln(Jn(a), void 0);
                var b = this.j ? a.fb() : a.vb()
                  , c = zn(a);
                a = c;
                var d = b
                  , e = new Kn;
                e.l = Sn(a, d, c, b);
                if (Lj(a) && !Gj(a)) {
                    var f = a.parentNode;
                    d = Array.prototype.indexOf.call(f.childNodes, a);
                    a = f
                }
                Lj(c) && !Gj(c) && (f = c.parentNode,
                b = Array.prototype.indexOf.call(f.childNodes, c),
                c = f);
                e.l ? (e.h = c,
                e.s = b,
                e.j = a,
                e.o = d) : (e.h = a,
                e.s = d,
                e.j = c,
                e.o = b);
                e.select()
            }
        }
        ;
        _.h.Re = function(a) {
            ar.G.Re.call(this, a);
            _.Al(a, "trans-edit");
            a.contentEditable = !1;
            Dq(this) && Tj(Dq(this), !1);
            S(this).sa(a, "keydown", this.Ng);
            S(this).sa(a, "mouseout", this.Xd);
            S(this).sa(a, "mouseover", this.Xd)
        }
        ;
        _.h.Xd = function() {
            var a = Wn();
            null == a || a.eb() == a.ub() && a.fb() == a.vb() || this.S(a.eb() == a.ub())
        }
        ;
        _.h.Ng = function(a) {
            for (var b = 0; b < this.l; ++b)
                km(this, b).S(!1);
            if (13 == a.keyCode || 3 == a.keyCode)
                return null === Iq(this) ? (this.Bb(),
                a.stopPropagation(),
                a.preventDefault(),
                !0) : !1;
            null === Iq(this) || !Ql(a) && 37 != a.keyCode && 39 != a.keyCode || (this.Ua.focus(),
            this.Yb(mm(this, null)));
            return !1
        }
        ;
        _.h.Me = function(a) {
            var b = Wn();
            if (b.eb() == b.ub() && b.fb() == b.vb()) {
                var c = b.sf() ? b.fb() : b.vb();
                b = Ln(Jn(zn(b)), void 0);
                if (!a && c == b.fb() || a && c == b.vb())
                    return !0
            }
            return !1
        }
        ;
        var br = function(a, b, c) {
            Z.call(this, a, b, c);
            this.j = null
        };
        _.u(br, Z);
        _.h = br.prototype;
        _.h.ja = function(a) {
            Z.prototype.ja.call(this, a);
            this.j = new cr("");
            this.Uc(this.j, !0)
        }
        ;
        _.h.Vf = function(a) {
            Z.prototype.Vf.call(this, a);
            this.j.Gb().value = this.g.fg(a)
        }
        ;
        _.h.S = function(a, b) {
            b = Z.prototype.S.call(this, a, b);
            a && null != this.A() && (Dq(this) == this.j.Gb() || Dq(this) == this.j.dd()) && Em(this.j, !0);
            return b
        }
        ;
        _.h.jd = function(a) {
            Z.prototype.jd.call(this, a);
            a.target == this.j ? Gq(this, this.j.Gb()) : Gq(this, this.A());
            Dq(this).focus();
            Dq(this).tabIndex = 0
        }
        ;
        _.h.Td = function(a) {
            return a == this.j ? -1 : Z.prototype.Td.call(this, a)
        }
        ;
        _.h.ab = function(a) {
            return 9 == a.keyCode ? (this.j.ka & 2 ? (Dq(this) == this.j.Gb() ? Gq(this, this.j.dd()) : Gq(this, this.j.Gb()),
            Dq(this).focus(),
            Dq(this).tabIndex = 0) : Em(this.j, !0),
            a.preventDefault(),
            a.stopPropagation(),
            !0) : Z.prototype.ab.call(this, a)
        }
        ;
        _.h.Me = function() {
            return null === Iq(this) || !(Iq(this)instanceof cr)
        }
        ;
        var cr = function(a, b, c) {
            U.call(this, a, c || dr.ea(), b);
            this.Ga(4, !1)
        };
        _.u(cr, U);
        _.h = cr.prototype;
        _.h.Pc = function(a) {
            a.target == this.dd() && this.dispatchEvent("action")
        }
        ;
        _.h.Y = function() {
            U.prototype.Y.call(this);
            S(this).D(this.Gb(), "keydown", function(a) {
                32 == a.keyCode && a.stopPropagation()
            })
        }
        ;
        _.h.Gb = function() {
            return this.h.Gb(this.A())
        }
        ;
        _.h.dd = function() {
            return this.h.dd(this.A())
        }
        ;
        _.h.xb = function() {
            return this.Gb().value
        }
        ;
        var dr = function() {};
        _.u(dr, nm);
        dr.prototype.N = function(a) {
            var b = a.g.N("INPUT", {
                value: a.wa(),
                id: "alt-input-text",
                type: "text"
            })
              , c = a.g.N("INPUT", {
                value: er,
                id: "alt-input-submit",
                "class": fr,
                type: "button"
            });
            return a.g.N("DIV", {
                id: "alt-input"
            }, b, c)
        }
        ;
        dr.prototype.Gb = function(a) {
            return a.firstChild
        }
        ;
        dr.prototype.dd = function(a) {
            return a.firstChild.nextSibling
        }
        ;
        dr.ea = function() {
            return Ol(dr)
        }
        ;
        var er = ""
          , fr = "";
        var gr = function() {};
        _.x(gr, nm);
        Vi(gr);
        _.h = gr.prototype;
        _.h.oc = function() {}
        ;
        _.h.cb = function(a, b) {
            Am(a, !1);
            Im(a);
            a.Ga(32, !1);
            gr.G.cb.call(this, a, b);
            a.j(b.value);
            return b
        }
        ;
        _.h.N = function(a) {
            Am(a, !1);
            Im(a);
            a.Ga(32, !1);
            return a.g.N("TEXTAREA", {
                "class": qm(this, a).join(" "),
                disabled: !a.isEnabled()
            }, a.wa() || "")
        }
        ;
        _.h.sd = function(a) {
            return "TEXTAREA" == a.tagName
        }
        ;
        _.h.ye = _.v;
        _.h.xe = function(a) {
            return a.isEnabled()
        }
        ;
        _.h.pc = _.v;
        _.h.Nc = function(a, b, c) {
            gr.G.Nc.call(this, a, b, c);
            (a = a.A()) && 1 == b && (a.disabled = c)
        }
        ;
        _.h.sb = _.v;
        _.h.Mc = function(a, b) {
            a && (a.value = b)
        }
        ;
        _.h.ua = function() {
            return "VIpgJd-B7I4Od"
        }
        ;
        var hr = function(a, b, c) {
            U.call(this, a, b || gr.ea(), c);
            Am(this, !1);
            this.Fd = !0;
            (b = this.A()) && this.h.td(b, !0);
            this.Dc = "" != a;
            a || (this.ac = "")
        };
        _.x(hr, U);
        var ir = !(_.B && !(11 <= Number(_.Dc)));
        _.h = hr.prototype;
        _.h.Ec = !1;
        _.h.ae = !1;
        _.h.Dc = !1;
        _.h.Hb = 0;
        _.h.hh = 0;
        _.h.Cf = 0;
        _.h.Vg = !1;
        _.h.ie = !1;
        _.h.Qf = !1;
        _.h.Pf = !1;
        _.h.Jc = "";
        var jr = function(a) {
            return a.o.top + a.o.bottom + a.aa.top + a.aa.bottom
        }
          , kr = function(a) {
            var b = a.Cf
              , c = a.A();
            b && c && a.ie && (b -= jr(a));
            return b
        }
          , mr = function(a) {
            a.Cf = 50;
            lr(a)
        }
          , nr = function(a) {
            a.hh = 50;
            lr(a)
        };
        hr.prototype.Ma = function(a) {
            this.j(String(a))
        }
        ;
        hr.prototype.Qa = function() {
            return this.A().value != this.Jc || or(this) || this.Dc ? this.A().value : ""
        }
        ;
        hr.prototype.j = function(a) {
            hr.G.j.call(this, a);
            this.Dc = "" != a;
            lr(this)
        }
        ;
        hr.prototype.qa = function(a) {
            hr.G.qa.call(this, a);
            this.A().disabled = !a
        }
        ;
        var lr = function(a) {
            a.A() && a.O()
        }
          , or = function(a) {
            return "placeholder"in a.A()
        }
          , pr = function(a) {
            a.Jc && (or(a) ? a.A().placeholder = a.Jc : !a.A() || a.Dc || a.ae || (_.R(a.A(), "B7I4Od-LwH6nd-YPqjbf"),
            a.A().value = a.Jc))
        };
        hr.prototype.Y = function() {
            hr.G.Y.call(this);
            var a = this.A();
            _.L(a, {
                overflowY: "hidden",
                overflowX: "auto",
                boxSizing: "border-box",
                MsBoxSizing: "border-box",
                WebkitBoxSizing: "border-box",
                MozBoxSizing: "border-box"
            });
            this.o = Wk(a);
            this.aa = Zk(a);
            S(this).D(a, "scroll", this.O).D(a, "focus", this.O).D(a, "keyup", this.O).D(a, "mouseup", this.xa).D(a, "blur", this.la);
            pr(this);
            lr(this)
        }
        ;
        var qr = function(a) {
            if (!a.Vg) {
                var b = a.A().cloneNode(!1);
                _.L(b, {
                    position: "absolute",
                    height: "auto",
                    top: "-9999px",
                    margin: "0",
                    padding: "1px",
                    border: "1px solid #000",
                    overflow: "hidden"
                });
                a.g.U.body.appendChild(b);
                var c = b.scrollHeight;
                b.style.padding = "10px";
                var d = b.scrollHeight;
                a.Qf = d > c;
                b.style.borderWidth = "10px";
                a.Pf = b.scrollHeight > d;
                b.style.height = "100px";
                100 != b.offsetHeight && (a.ie = !0);
                _.Kj(b);
                a.Vg = !0
            }
            b = a.A();
            isNaN(a.o.top) && (a.o = Wk(b),
            a.aa = Zk(b));
            c = a.A().scrollHeight;
            var e = a.A();
            d = e.offsetHeight - e.clientHeight;
            if (!a.Qf) {
                var f = a.o;
                d -= f.top + f.bottom
            }
            a.Pf || (e = Zk(e),
            d -= e.top + e.bottom);
            c += 0 < d ? d : 0;
            a.ie ? c -= jr(a) : (a.Qf || (d = a.o,
            c += d.top + d.bottom),
            a.Pf || (a = Zk(b),
            c += a.top + a.bottom));
            return c
        }
          , rr = function(a, b) {
            a.Hb != b && (a.Hb = b,
            a.A().style.height = b + "px")
        }
          , sr = function(a) {
            var b = a.A();
            b.style.height = "auto";
            var c = b.value.match(/\n/g) || [];
            b.rows = c.length + 1;
            a.Hb = 0
        };
        hr.prototype.la = function() {
            or(this) || (this.ae = !1,
            "" == this.A().value && (this.Dc = !1,
            pr(this)))
        }
        ;
        hr.prototype.O = function(a) {
            if (!this.Ec) {
                var b = this.A();
                !or(this) && a && "focus" == a.type && (b.value == this.Jc && this.Jc && !this.ae && (_.Al(b, "B7I4Od-LwH6nd-YPqjbf"),
                b.value = ""),
                this.ae = !0,
                this.Dc = "" != b.value);
                var c = !1;
                this.Ec = !0;
                a = this.Hb;
                if (b.scrollHeight) {
                    var d = !1
                      , e = !1
                      , f = qr(this)
                      , g = b.offsetHeight
                      , k = kr(this);
                    var l = this.hh;
                    var m = this.A();
                    l && m && this.ie && (l -= jr(this));
                    k && f < k ? (rr(this, k),
                    d = !0) : l && f > l ? (rr(this, l),
                    b.style.overflowY = "",
                    e = !0) : g != f ? rr(this, f) : this.Hb || (this.Hb = f);
                    d || e || !ir || (c = !0)
                } else
                    sr(this);
                this.Ec = !1;
                c && (b = this.A(),
                this.Ec || (this.Ec = !0,
                (e = b.scrollHeight) ? (f = qr(this),
                c = kr(this),
                c && f <= c || (d = this.o,
                b.style.paddingTop = d.top + 1 + "px",
                qr(this) == f && (b.style.paddingTop = d.top + e + "px",
                b.scrollTop = 0,
                e = qr(this) - e,
                e >= c ? rr(this, e) : rr(this, c)),
                b.style.paddingTop = d.top + "px")) : sr(this),
                this.Ec = !1));
                a != this.Hb && this.dispatchEvent("resize")
            }
        }
        ;
        hr.prototype.xa = function() {
            var a = this.A()
              , b = a.offsetHeight;
            a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
            b != this.Hb && (this.Hb = this.Cf = b)
        }
        ;
        var tr = function(a, b) {
            this.h = b;
            for (var c = [], d = !0, e = a.length - 1; 0 <= e; e--) {
                var f = a[e] | 0;
                d && f == b || (c[e] = f,
                d = !1)
            }
            this.g = c
        }
          , ur = {}
          , vr = function(a) {
            return -128 <= a && 128 > a ? _.gc(ur, a, function(b) {
                return new tr([b | 0],0 > b ? -1 : 0)
            }) : new tr([a | 0],0 > a ? -1 : 0)
        }
          , yr = function(a) {
            if (isNaN(a) || !isFinite(a))
                return wr;
            if (0 > a)
                return xr(yr(-a));
            for (var b = [], c = 1, d = 0; a >= c; d++)
                b[d] = a / c | 0,
                c *= 4294967296;
            return new tr(b,0)
        }
          , wr = vr(0)
          , zr = vr(1)
          , Ar = vr(16777216)
          , Cr = function(a) {
            if (Br(a))
                return -Cr(xr(a));
            for (var b = 0, c = 1, d = 0; d < a.g.length; d++) {
                var e = Dr(a, d);
                b += (0 <= e ? e : 4294967296 + e) * c;
                c *= 4294967296
            }
            return b
        };
        tr.prototype.toString = function(a) {
            a = a || 10;
            if (2 > a || 36 < a)
                throw Error("ua`" + a);
            if (Er(this))
                return "0";
            if (Br(this))
                return "-" + xr(this).toString(a);
            for (var b = yr(Math.pow(a, 6)), c = this, d = ""; ; ) {
                var e = Fr(c, b).g;
                c = Gr(c, Hr(e, b));
                var f = ((0 < c.g.length ? c.g[0] : c.h) >>> 0).toString(a);
                c = e;
                if (Er(c))
                    return f + d;
                for (; 6 > f.length; )
                    f = "0" + f;
                d = f + d
            }
        }
        ;
        var Dr = function(a, b) {
            return 0 > b ? 0 : b < a.g.length ? a.g[b] : a.h
        }
          , Er = function(a) {
            if (0 != a.h)
                return !1;
            for (var b = 0; b < a.g.length; b++)
                if (0 != a.g[b])
                    return !1;
            return !0
        }
          , Br = function(a) {
            return -1 == a.h
        }
          , Ir = function(a, b) {
            a = Gr(a, b);
            return Br(a) ? -1 : Er(a) ? 0 : 1
        }
          , xr = function(a) {
            for (var b = a.g.length, c = [], d = 0; d < b; d++)
                c[d] = ~a.g[d];
            return (new tr(c,~a.h)).add(zr)
        };
        tr.prototype.abs = function() {
            return Br(this) ? xr(this) : this
        }
        ;
        tr.prototype.add = function(a) {
            for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0, e = 0; e <= b; e++) {
                var f = d + (Dr(this, e) & 65535) + (Dr(a, e) & 65535)
                  , g = (f >>> 16) + (Dr(this, e) >>> 16) + (Dr(a, e) >>> 16);
                d = g >>> 16;
                f &= 65535;
                g &= 65535;
                c[e] = g << 16 | f
            }
            return new tr(c,c[c.length - 1] & -2147483648 ? -1 : 0)
        }
        ;
        var Gr = function(a, b) {
            return a.add(xr(b))
        }
          , Hr = function(a, b) {
            if (Er(a) || Er(b))
                return wr;
            if (Br(a))
                return Br(b) ? Hr(xr(a), xr(b)) : xr(Hr(xr(a), b));
            if (Br(b))
                return xr(Hr(a, xr(b)));
            if (0 > Ir(a, Ar) && 0 > Ir(b, Ar))
                return yr(Cr(a) * Cr(b));
            for (var c = a.g.length + b.g.length, d = [], e = 0; e < 2 * c; e++)
                d[e] = 0;
            for (e = 0; e < a.g.length; e++)
                for (var f = 0; f < b.g.length; f++) {
                    var g = Dr(a, e) >>> 16
                      , k = Dr(a, e) & 65535
                      , l = Dr(b, f) >>> 16
                      , m = Dr(b, f) & 65535;
                    d[2 * e + 2 * f] += k * m;
                    Jr(d, 2 * e + 2 * f);
                    d[2 * e + 2 * f + 1] += g * m;
                    Jr(d, 2 * e + 2 * f + 1);
                    d[2 * e + 2 * f + 1] += k * l;
                    Jr(d, 2 * e + 2 * f + 1);
                    d[2 * e + 2 * f + 2] += g * l;
                    Jr(d, 2 * e + 2 * f + 2)
                }
            for (e = 0; e < c; e++)
                d[e] = d[2 * e + 1] << 16 | d[2 * e];
            for (e = c; e < 2 * c; e++)
                d[e] = 0;
            return new tr(d,0)
        }
          , Jr = function(a, b) {
            for (; (a[b] & 65535) != a[b]; )
                a[b + 1] += a[b] >>> 16,
                a[b] &= 65535,
                b++
        }
          , Kr = function(a, b) {
            this.g = a;
            this.h = b
        }
          , Fr = function(a, b) {
            if (Er(b))
                throw Error("wa");
            if (Er(a))
                return new Kr(wr,wr);
            if (Br(a))
                return b = Fr(xr(a), b),
                new Kr(xr(b.g),xr(b.h));
            if (Br(b))
                return b = Fr(a, xr(b)),
                new Kr(xr(b.g),b.h);
            if (30 < a.g.length) {
                if (Br(a) || Br(b))
                    throw Error("va");
                for (var c = zr, d = b; 0 >= Ir(d, a); )
                    c = c.shiftLeft(1),
                    d = d.shiftLeft(1);
                var e = Lr(c, 1)
                  , f = Lr(d, 1);
                d = Lr(d, 2);
                for (c = Lr(c, 2); !Er(d); ) {
                    var g = f.add(d);
                    0 >= Ir(g, a) && (e = e.add(c),
                    f = g);
                    d = Lr(d, 1);
                    c = Lr(c, 1)
                }
                b = Gr(a, Hr(e, b));
                return new Kr(e,b)
            }
            for (e = wr; 0 <= Ir(a, b); ) {
                c = Math.max(1, Math.floor(Cr(a) / Cr(b)));
                d = Math.ceil(Math.log(c) / Math.LN2);
                d = 48 >= d ? 1 : Math.pow(2, d - 48);
                f = yr(c);
                for (g = Hr(f, b); Br(g) || 0 < Ir(g, a); )
                    c -= d,
                    f = yr(c),
                    g = Hr(f, b);
                Er(f) && (f = zr);
                e = e.add(f);
                a = Gr(a, g)
            }
            return new Kr(e,a)
        };
        tr.prototype.and = function(a) {
            for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++)
                c[d] = Dr(this, d) & Dr(a, d);
            return new tr(c,this.h & a.h)
        }
        ;
        tr.prototype.or = function(a) {
            for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++)
                c[d] = Dr(this, d) | Dr(a, d);
            return new tr(c,this.h | a.h)
        }
        ;
        tr.prototype.xor = function(a) {
            for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++)
                c[d] = Dr(this, d) ^ Dr(a, d);
            return new tr(c,this.h ^ a.h)
        }
        ;
        tr.prototype.shiftLeft = function(a) {
            var b = a >> 5;
            a %= 32;
            for (var c = this.g.length + b + (0 < a ? 1 : 0), d = [], e = 0; e < c; e++)
                d[e] = 0 < a ? Dr(this, e - b) << a | Dr(this, e - b - 1) >>> 32 - a : Dr(this, e - b);
            return new tr(d,this.h)
        }
        ;
        var Lr = function(a, b) {
            var c = b >> 5;
            b %= 32;
            for (var d = a.g.length - c, e = [], f = 0; f < d; f++)
                e[f] = 0 < b ? Dr(a, f + c) >>> b | Dr(a, f + c + 1) << 32 - b : Dr(a, f + c);
            return new tr(e,a.h)
        };
        Gr(zr.shiftLeft(32), zr);
        Gr(zr.shiftLeft(128), zr);
        var Mr = _.B || _.D || _.ic || !1;
        var Nr = function(a, b, c, d, e, f, g, k, l) {
            _.M.call(this, a);
            this.j = g || null;
            null != this.j && this.j.C((0,
            _.w)(this.Mi, this));
            this.s = null;
            this.h = "auto";
            this.Sa = this.P = "";
            this.Ob = new ko;
            this.xc = !!b && Mr && !_.B;
            this.aa = null != e ? e : 0;
            this.l = this.xc ? new ar : new br;
            l && this.l.qa(!1);
            if (0 < this.aa)
                for (a = this.l,
                a.J = !0,
                b = 0; b < a.l; b++)
                    g = _.Ej("DIV", "goog-menu", ""),
                    e = _.Ej("DIV", null, g),
                    g = new Sp(e,g),
                    a.o[b] = g,
                    document.body.appendChild(e);
            this.l.ja(c);
            this.o = k || null;
            this.wb = null != d ? d : -1;
            this.X = Um.ea();
            this.J = new _.uf;
            this.V = null;
            this.$a = "t";
            this.ba = this.la = null;
            this.B = f || null;
            this.Ta = !1;
            null != this.B && (this.B.l((0,
            _.w)(this.wc, this)),
            this.B.j((0,
            _.w)(this.Ji, this)));
            this.xa = null;
            this.O = tn.ea()
        };
        _.u(Nr, _.M);
        var Or = function(a, b) {
            a.xa = b;
            a.l.B = b
        }
          , Pr = function(a) {
            a.V = "https://translate.google.com";
            a.l.O.o = a.V || ""
        }
          , Rr = function(a) {
            var b = Qr;
            a.X.j = b;
            a.$a = b
        }
          , $r = function(a, b) {
            null != a.B && a.B.h();
            b && (a.s = new io(b),
            a.ba = null);
            Sr(a) && (a.j.h(),
            null != a.o && a.o.g(!1));
            if (a.s) {
                b = 0 != Dj().length;
                a.g.ld(a.A());
                a.l.Pd();
                a.xa && a.xa.attach(a.s);
                for (var c = "", d = 0, e = 0; e < V(a.s, 5); e++)
                    Tr(a.s, e) && (c += " "),
                    c += Ur(a.s, e),
                    d += V(jo(a.s, e), 2);
                if (0 != d) {
                    c = [];
                    d = !1;
                    e = a.s;
                    for (var f = "", g = 0; g < V(e, 5); g++) {
                        var k = jo(e, g);
                        null != k.g[4] && 0 < rn(k, 4).length ? f = rn(k, 4) : (new fo(k.g)).g[4] = f
                    }
                    for (e = 0; e < V(a.s, 5); e++) {
                        f = jo(a.s, e);
                        g = go(f, 0);
                        if (Tr(a.s, e))
                            a.g.appendChild(a.A(), a.g.U.createTextNode(" "));
                        else if ("km" == a.P || "lo" == a.P) {
                            k = a.g;
                            var l = k.appendChild
                              , m = a.A();
                            var n = _.D ? Fj() : _.hc ? document.createTextNode("&shy;") : _.B ? document.createTextNode("&#8203;") : Fj();
                            l.call(k, m, n)
                        }
                        null != f.g[4] && 0 < rn(f, 4).length && 0 == qn(f, 5) && c.push(rn(f, 4));
                        var q;
                        k = Ur(a.s, e);
                        /^[\s\xa0]*$/.test(k) ? 0 == k.length || (q = Vr(k)) : (q = a.g.N("SPAN", null, k),
                        g = qn(g, 1),
                        0 <= a.wb && g < a.wb && _.R(q, "alt-low-conf"),
                        a.J.has(a.h + "." + a.P + "." + rn(f, 0)) && (g = a.J.get(a.h + "." + a.P + "." + rn(f, 0)),
                        g != Wr(f, 0) && (a.g.nb(q, g),
                        _.R(q, "alt-edited"),
                        d = !0,
                        Xr(a, !0))),
                        q.title = Uq,
                        Vq(a.l, q, f));
                        q && a.g.appendChild(a.A(), q)
                    }
                    if (null != a.j) {
                        q = a.h + "." + a.P;
                        for (e = 0; e < c.length; ++e)
                            q += "." + c[e];
                        a.J.has(q) && (Yr(a, !1),
                        d = !0,
                        Zr(a, a.J.get(q)),
                        null != a.o && a.o.g(!1),
                        Xr(a, !0))
                    }
                    d || (Xr(a, !1),
                    Yr(a, !1));
                    (d || b) && a.dispatchEvent("action")
                }
            } else
                Xr(a, !1),
                Yr(a, !1)
        }
          , Vr = function(a) {
            a = _.xj(a).replace(/(\r\n|\r|\n)/g, "<br>").split("<br>");
            var b = document.createDocumentFragment()
              , c = 0;
            _.Wb(a, function(d) {
                0 != c && b.appendChild(_.Ej("BR"));
                c++;
                "" != d && b.appendChild(document.createTextNode(String(Bj(d))))
            });
            return b
        }
          , as = function(a, b) {
            if (Sr(a))
                return a.j.g();
            var c = [];
            if (a.A() && a.A().childNodes)
                for (var d = 0; d < a.A().childNodes.length; ++d) {
                    var e = a.A().childNodes[d];
                    c[d] = b && "BR" == e.tagName ? "\n" : _.wd(e)
                }
            return c.join("")
        }
          , cs = function(a, b, c) {
            if (a)
                for (var d = 0; d < V(a, 5); d++) {
                    var e = jo(a, d);
                    if ((e = e && e) && mn(b.g, e.g)) {
                        e = -1;
                        b = V(a, 5);
                        for (var f = d; 0 <= f; f--)
                            if (0 == qn(jo(a, f), 5)) {
                                e = f;
                                break
                            }
                        for (f = d + 1; f <= V(a, 5); f++)
                            if (0 == qn(jo(a, f), 5)) {
                                b = f;
                                break
                            }
                        if (c)
                            d = bs(a, e, b);
                        else if (c = a,
                        a = e,
                        c) {
                            e = d + 1;
                            f = d;
                            for (d = Ur(c, d).length; 64 > d && (e != b || f != a); )
                                e < b && (d += Ur(c, e++).length + 1),
                                64 > d && f > a && (d += Ur(c, --f).length + 1);
                            d = bs(c, f, e)
                        } else
                            d = "";
                        return d
                    }
                }
            return ""
        }
          , bs = function(a, b, c) {
            var d = [];
            d.push(Ur(a, b));
            for (b += 1; b < c; b++)
                Tr(a, b) && d.push(" "),
                d.push(Ur(a, b));
            return d.join("")
        }
          , Tr = function(a, b) {
            if (0 == b)
                return !1;
            var c = jo(a, b)
              , d = jo(a, b - 1);
            return pn(go(c, 0), 2) && !pn(go(d, 0), 3) && !_.ac(Ur(a, b - 1), "\n")
        };
        _.h = Nr.prototype;
        _.h.Va = function() {
            return this.h
        }
        ;
        _.h.ga = function() {
            return this.P
        }
        ;
        _.h.N = function() {
            this.da(_.sh(this.g, "span"))
        }
        ;
        _.h.da = function(a) {
            _.M.prototype.da.call(this, a);
            $r(this)
        }
        ;
        _.h.Y = function() {
            _.M.prototype.Y.call(this);
            S(this).D(this.l, "action", this.Wi);
            null != this.o && null != this.o.h && (S(this).D(this.o.h, "click", this.cj),
            _.ag(S(this), this.o.h, "click", this.O.h, this.O));
            S(this).D(this.l, "show", this.Vi);
            this.A() && S(this).D(this.A(), "keydown", function(a) {
                32 == a.keyCode && a.stopPropagation()
            }, !0)
        }
        ;
        _.h.L = function() {
            _.M.prototype.L.call(this);
            this.l.R()
        }
        ;
        _.h.Mi = function() {
            this.B.qa(this.j.j());
            Xr(this, this.j.j())
        }
        ;
        _.h.Wi = function(a) {
            if ("hide" != a.type || a.target == this.l)
                if (null == a.target && null != this.j)
                    this.X.log("editpopupclk"),
                    un(this.O, 233),
                    null != this.o && this.o.g(!0),
                    this.j.l(as(this)),
                    this.Ta = "none" != this.B.A().style.display,
                    this.B.reset(),
                    null != this.o ? this.B.qa("none" != this.o.h.style.display) : this.B.qa(!1),
                    Xr(this, !1);
                else {
                    var b = a.l;
                    null == b && null != a.currentTarget && (b = a.currentTarget.Ua);
                    var c = a.target.xb();
                    if (null != b && null != a.target) {
                        var d = b
                          , e = this.l.s.get(_.za(d));
                        this.g.nb(d, c);
                        c == Wr(e, 0) ? (_.Al(d, "alt-edited"),
                        0 == Dj().length && (Xr(this, !1),
                        Yr(this, !1))) : (_.R(d, "alt-edited"),
                        Xr(this, !0),
                        Yr(this, !0));
                        null != this.J && this.J.set(this.h + "." + this.P + "." + rn(e, 0), c);
                        e = this.l.s.get(_.za(b));
                        null != this.J && this.J.set(this.h + "." + this.P + "." + rn(e, 0), c);
                        d = Wr(e, 0);
                        b = mm(this.l, a.target);
                        d = {
                            sl: this.h,
                            tl: this.P,
                            utrans: c,
                            gtrans: d,
                            index: b,
                            ophrase: rn(e, 0),
                            osentence: rn(e, 4),
                            tsentence: cs(this.s, e)
                        };
                        0 < V(e, 2) && (d.confidence = qn(go(e, 0), 1));
                        if (a.target instanceof cr || -1 == b)
                            d.manual = 1,
                            un(this.O, 240);
                        else {
                            a = un(this.O, 239);
                            e = new gn;
                            var f = Bk(Bk(e, 2, en), 3, cn);
                            _.Gh(f, 1, b);
                            _.Hh(a, 27, e)
                        }
                        for (var g in d)
                            "string" === typeof d[g] && 64 < d[g].length && (d.tr = 1,
                            d[g] = d[g].substr(0, 64));
                        this.X.log("usealt", d, this.V);
                        g = new _.zd("usealt");
                        g.text = c;
                        this.dispatchEvent(g);
                        this.dispatchEvent("action")
                    }
                }
        }
        ;
        var Zr = function(a, b) {
            if (a.A()) {
                null == a.la && (a.ba = _.wa(a.g.Bi(a.A())));
                a.la = b;
                var c;
                if (c = a.A().childNodes && 0 < a.A().childNodes.length)
                    c = (c = a.A().childNodes[0]) ? _.wf(a.l.h, _.za(c)) : !1;
                if (c)
                    a.g.ld(a.A()),
                    a.l.Pd(),
                    b = a.g.N("SPAN", "alt-edited", a.la),
                    a.g.appendChild(a.A(), b),
                    Vq(a.l, b, new fo);
                else {
                    _.md(a.A());
                    a = a.A();
                    c = _.xj(b);
                    b = _.Ej("DIV");
                    c = c.replace(/(\r\n|\r|\n)/g, "<br>").split("<br>");
                    for (var d = 0; d < c.length; ++d) {
                        var e = c[d];
                        e.length && (e = _.Ej("SPAN", "alt-edited", e),
                        b.appendChild(e));
                        d != c.length - 1 && (e = _.Ej("BR"),
                        b.appendChild(e))
                    }
                    a.appendChild(b)
                }
            }
        };
        _.h = Nr.prototype;
        _.h.cj = function() {
            null != this.j && Sr(this) ? this.j.s() : ds(this);
            this.X.log("clkundo", void 0, this.V)
        }
        ;
        _.h.Ji = function() {
            Sr(this) && (this.j.j() && (Zr(this, this.j.g()),
            this.Ta = !0),
            this.j.h(),
            null != this.o && this.o.g(!1),
            this.j.j() && Xr(this, !0),
            this.B.qa(!0),
            _.O(this.B.A(), this.Ta),
            this.dispatchEvent("action"));
            un(this.O, 215);
            this.X.log("clkcancel", void 0, this.V)
        }
        ;
        _.h.Vi = function() {
            var a = this.l.s.get(_.za(this.l.Ua));
            if (a) {
                if (0 < this.aa) {
                    var b = new dk("source=baf");
                    if (1 == this.aa) {
                        for (var c = [], d = 0, e = V(a, 2); d < e; d++)
                            c.push(Wr(a, d));
                        d = this.Ob;
                        var f = this.P
                          , g = this.h
                          , k = es(this)
                          , l = (0,
                        _.w)(this.Xj, this);
                        e = new dk;
                        var m = new dk;
                        e.set("client", "mt");
                        e.set("sl", f);
                        e.set("tl", g);
                        e.set("hl", k);
                        e.set("v", "1.0");
                        b && e.o(b);
                        (b = !Array.isArray(c) || Array.isArray(c) && 1 == c.length) ? m.set("q", c) : hk(m, "q", c);
                        b = (0,
                        _.w)(d.l, d, b, l);
                        mo(d, "/translate_a/t", e, m, b)
                    } else
                        for (d = 0,
                        e = V(a, 2); d < e; d++) {
                            g = Wr(a, d);
                            c = this.Ob;
                            m = this.P;
                            l = this.h;
                            f = es(this);
                            k = (0,
                            _.w)(this.Yj, this, d);
                            var n = b
                              , q = new dk
                              , r = new dk;
                            q.set("client", "mt");
                            q.set("sl", m);
                            q.set("tl", l);
                            q.set("hl", f);
                            hk(q, "dt", ["at", "t"]);
                            n && q.o(n);
                            r.set("q", g);
                            mo(c, "/translate_a/single", q, r, (0,
                            _.w)(c.j, c, k, void 0))
                        }
                }
                b = new _.zd("click");
                b.text = this.l.xb();
                b.o = V(this.s, 5);
                this.dispatchEvent(b);
                b = {};
                b.confidence = qn(go(a, 0), 1);
                this.h && this.P && this.Sa && (b.segments = V(this.s, 5),
                b.sl = this.h,
                b.tl = this.P,
                b.hl = this.Sa);
                un(this.O, 238);
                this.X.log("phrsclk", b, this.V)
            }
        }
        ;
        _.h.Yj = function(a, b) {
            if (1 == this.aa || 1 < V(b, 5)) {
                var c = rn(new ho(sn(b, 0, 0)), 0);
                var d = 1;
                for (var e = V(b, 0); d < e; d++)
                    c += " " + rn(new ho(sn(b, 0, d)), 0);
                d = c
            } else if (1 == V(b, 5)) {
                c = [];
                b = jo(b, 0);
                d = 0;
                for (e = Math.min(this.aa, V(b, 2)); d < e; d++)
                    c.push(Wr(b, d));
                d = c.join(", ")
            } else
                d = "...";
            Zq(this.l, a, d)
        }
        ;
        _.h.Xj = function(a) {
            for (var b = 0; b < a.length; b++)
                Zq(this.l, b, a[b])
        }
        ;
        var ds = function(a) {
            Sr(a) && (null != a.o && a.o.g(!1),
            a.j.h());
            Si(a.J);
            a.la = null;
            $r(a);
            a.dispatchEvent("action")
        }
          , Xr = function(a, b) {
            null != a.o && null != a.o.h && _.O(a.o.h, b)
        }
          , Yr = function(a, b) {
            null != a.B && (b && a.B.reset(),
            _.O(a.B.A(), b))
        };
        Nr.prototype.wc = function() {
            un(this.O, 374);
            var a = [], b;
            null != this.ba ? b = this.ba : b = _.nd(this.A());
            for (var c = {
                segment: []
            }, d = null, e = 0, f = 0; f < b.length; f++) {
                var g = jo(this.s, f);
                if (null != g) {
                    var k = _.wd(b[f]);
                    a: {
                        var l = k;
                        var m = g;
                        if (0 == V(m, 2))
                            l = 0;
                        else {
                            for (var n = 0; n < V(m, 2); ++n)
                                if (l == Wr(m, n)) {
                                    l = n;
                                    break a
                                }
                            l = -1
                        }
                    }
                    m = (0,
                    _.bc)(rn(g, 4));
                    n = cs(this.s, g, !0);
                    if (0 != m.length) {
                        if (0 == a.length || m != a[a.length - 1])
                            a.push(m),
                            e = a.length - 1,
                            d = null,
                            e < V(this.s, 0) && (d = on(new ho(sn(this.s, 0, e)), 4, 0)),
                            d = ro(d),
                            e = 0,
                            d = {
                                source: m,
                                original_target: n,
                                segment_source: d,
                                phrase_correction: []
                            },
                            c.segment.push(d);
                        if (0 != l)
                            for (m = Wr(g, 0).length,
                            l = {
                                alternative_index: l,
                                edited_phrase: k,
                                source_span: [],
                                target_span: [{
                                    start: e,
                                    end: e + m
                                }]
                            },
                            d.phrase_correction.push(l),
                            m = 0; m < V(g, 3); ++m)
                                n = new eo(sn(g, 3, m)),
                                l.source_span.push({
                                    start: qn(n, 0),
                                    end: qn(n, 1)
                                });
                        e += k.length;
                        pn(go(g, 0), 2) && e++
                    }
                }
            }
            if (Sr(this)) {
                this.dispatchEvent("action");
                this.j.h();
                null != this.o && this.o.g(!1);
                Xr(this, !0);
                this.j.g() != as(this) && Zr(this, this.j.g());
                b = this.h + "." + this.P;
                for (f = 0; f < a.length; ++f)
                    b += "." + a[f];
                a = this.j.g();
                this.J.set(b, a);
                c.contains_full_edit = !0
            }
            c.edited_target = as(this, !0);
            a = new dk;
            a.set("ue", JSON.stringify(c));
            a.set("sl", this.h);
            a.set("tl", this.P);
            _.Ah("/translate_suggestion?client=" + this.$a, void 0, "POST", a.toString(), void 0, 1E4)
        }
        ;
        var Sr = function(a) {
            return null != a.j && a.j.o()
        }
          , Ur = function(a, b) {
            a = jo(a, b);
            return 0 == V(a, 2) ? rn(a, 0) : Wr(a, 0)
        }
          , Wr = function(a, b) {
            return rn(go(a, b), 0)
        }
          , es = function(a) {
            a = a.Sa;
            0 === a.length && null != _.dd(document, "hl") && (a = _.dd(document, "hl").value);
            return a
        };
        var gs, hs, is, js;
        _.fs = function(a) {
            var b = a.ge
              , c = a.gh;
            a.Zg ? b = "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" + String(b).replace(_.ol, _.il) + "',sizingMethod='scale');\"></span>" : (a = _.X.Tc,
            b = '<img src="' + _.P(_.ul(b)) + '" width="37px" height="14px" style="padding-right: 3px" alt="Google ' + _.P(a) + '">');
            a = _.X.Tc;
            return (0,
            _.ai)('<span style="white-space:nowrap"><a class="goog-logo-link" href="' + _.P(_.sl(c)) + '" target="_blank">' + b + _.ml(a) + "</a></span>")
        }
        ;
        gs = function(a) {
            var b = a.ge
              , c = _.X.Tc
              , d = _.X.ai;
            return (0,
            _.ai)('<div id="goog-gt-tt" class="skiptranslate" dir="' + _.P(a.dir) + '"><div style="padding: 8px;"><div><div class="logo"><img src="' + _.P(_.ul(b)) + '" width="20" height="20" alt="Google ' + _.P(c) + '"/></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">' + _.ml(d) + '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"/><div class="activity-root"></div></div></div><div class="status-message"></div></div>')
        }
        ;
        hs = function(a) {
            var b = a.method
              , c = a.zi
              , d = a.dir
              , e = _.X.ei
              , f = _.X.ue;
            a = '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' + _.P(_.sl(a.mi)) + '" method="' + _.P(b) + '"><div class="form-buttons" style="text-align:' + (_.cl(d, "rtl") ? "right" : "left") + '"><input class="activity-submit" type="button" value="' + _.P(e) + '"><input class="activity-cancel" type="button" value="' + _.P(f) + '"></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
            b = c.length;
            for (d = 0; d < b; d++)
                a += '<input type="hidden" name="' + _.P(c[d]) + '"/>';
            return (0,
            _.ai)(a + "</div></form></div>")
        }
        ;
        is = function() {
            return (0,
            _.ai)('<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>')
        }
        ;
        js = function(a) {
            return (0,
            _.ai)('<div><span class="alt-translated-text"></span><div class="alt-helper-text">' + _.ml(a.gj) + '</div><div class="activity-form-container"></div></div>')
        }
        ;
        _.x(Hi, _.M);
        _.h = Hi.prototype;
        _.h.Hc = function(a) {
            this.B = a
        }
        ;
        _.h.cc = function() {
            if (!this.ia)
                throw Error("xa");
            if (!this.B)
                throw Error("ya");
        }
        ;
        _.h.Wb = function() {}
        ;
        _.h.R = function() {
            this.Db() || (Hi.G.R.call(this),
            delete this.fe)
        }
        ;
        _.h.ma = function() {
            return this.B
        }
        ;
        var ms = function() {
            _.I.call(this);
            this.l = "closure_frame" + ks++;
            this.j = [];
            ls[this.l] = this
        }, ns;
        _.x(ms, _.I);
        var ls = {}
          , ks = 0
          , os = function(a, b) {
            var c = _.F(a);
            ck(b, function(d, e) {
                Array.isArray(d) || (d = [d]);
                _.Wb(d, function(f) {
                    f = c.N("INPUT", {
                        type: "hidden",
                        name: e,
                        value: f
                    });
                    a.appendChild(f)
                })
            })
        };
        _.h = ms.prototype;
        _.h.na = null;
        _.h.Ea = null;
        _.h.ic = null;
        _.h.Cj = 0;
        _.h.Cb = !1;
        _.h.hc = null;
        _.h.send = function(a, b, c, d) {
            if (this.Cb)
                throw Error("za");
            a = new sk(a);
            b = b ? b.toUpperCase() : "GET";
            c && (c = _.bd(),
            a.g.set("zx", c));
            ns || (ns = _.Ej("FORM"),
            ns.acceptCharset = "utf-8",
            c = ns.style,
            c.position = "absolute",
            c.visibility = "hidden",
            c.top = c.left = "-10px",
            c.width = c.height = "10px",
            c.overflow = "hidden",
            document.body.appendChild(ns));
            this.na = ns;
            "GET" == b && os(this.na, a.g);
            d && os(this.na, d);
            d = this.na;
            a = a.toString();
            (0,
            _.dg)();
            rj(d, _.Ic(a));
            this.na.method = b;
            ps(this);
            qs(this)
        }
        ;
        var rs = function(a, b) {
            if (a.Cb)
                throw Error("za");
            var c = new sk(b.action);
            a.na = b;
            rj(a.na, c.toString());
            ps(a)
        };
        ms.prototype.abort = function() {
            if (this.Cb) {
                var a = ss(this);
                Wj(a);
                this.Cb = !1;
                this.dispatchEvent("abort");
                ts(this)
            }
        }
        ;
        ms.prototype.L = function() {
            this.Cb && this.abort();
            ms.G.L.call(this);
            this.Ea && us(this);
            qs(this);
            delete this.C;
            this.na = null;
            delete ls[this.l]
        }
        ;
        var ps = function(a) {
            a.Cb = !0;
            a.ic = a.l + "_" + (a.Cj++).toString(36);
            a.Ea = _.F(a.na).N("IFRAME", {
                name: a.ic,
                id: a.ic
            });
            _.B && 7 > Number(_.yc) && rj(a.Ea, _.Ic(_.th(_.rh('javascript:""'))));
            var b = a.Ea.style;
            b.visibility = "hidden";
            b.width = b.height = "10px";
            b.display = "none";
            _.D ? b.marginTop = b.marginLeft = "-10px" : (b.position = "absolute",
            b.top = b.left = "-10px");
            if (_.B && !_.Ac("11")) {
                a.na.target = a.ic || "";
                _.F(a.na).U.body.appendChild(a.Ea);
                _.H(a.Ea, "readystatechange", a.o, !1, a);
                try {
                    a.h = !1,
                    a.na.submit()
                } catch (r) {
                    _.Wd(a.Ea, "readystatechange", a.o, !1, a),
                    vs(a)
                }
            } else {
                _.F(a.na).U.body.appendChild(a.Ea);
                b = a.ic + "_inner";
                var c = _.Qj(a.Ea);
                if (document.baseURI) {
                    var d = _.xj(b);
                    d = '<head><base href="' + _.xj(document.baseURI) + '"></head><body><iframe id="' + d + '" name="' + d + '"></iframe>';
                    d = _.Tc(d, null)
                } else
                    d = _.xj(b),
                    d = _.Tc('<body><iframe id="' + d + '" name="' + d + '"></iframe>', null);
                c.write(_.Sc(d));
                _.H(c.getElementById(b), "load", a.g, !1, a);
                d = Cj("TEXTAREA", a.na);
                for (var e = 0, f = d.length; e < f; e++) {
                    var g = d[e].value;
                    Uj(d[e]) != g && (_.rd(d[e], g),
                    d[e].value = g)
                }
                d = c.importNode(a.na, !0);
                d.target = b;
                d.action = a.na.action;
                c.body.appendChild(d);
                e = Cj("SELECT", a.na);
                f = Cj("SELECT", d);
                g = 0;
                for (var k = e.length; g < k; g++)
                    for (var l = Cj("OPTION", e[g]), m = Cj("OPTION", f[g]), n = 0, q = l.length; n < q; n++)
                        m[n].selected = l[n].selected;
                e = Cj("INPUT", a.na);
                f = Cj("INPUT", d);
                g = 0;
                for (k = e.length; g < k; g++)
                    if ("file" == e[g].type && e[g].value != f[g].value) {
                        a.na.target = b;
                        d = a.na;
                        break
                    }
                try {
                    a.h = !1,
                    d.submit(),
                    c.close(),
                    _.C && _.ng(a.B, 250, a)
                } catch (r) {
                    _.Wd(c.getElementById(b), "load", a.g, !1, a),
                    c.close(),
                    vs(a)
                }
            }
        };
        ms.prototype.o = function() {
            if ("complete" == this.Ea.readyState) {
                _.Wd(this.Ea, "readystatechange", this.o, !1, this);
                try {
                    var a = _.Qj(this.Ea);
                    if (_.B && "about:blank" == a.location && !navigator.onLine) {
                        vs(this);
                        return
                    }
                } catch (b) {
                    vs(this);
                    return
                }
                ws(this, a)
            }
        }
        ;
        ms.prototype.g = function() {
            _.Wd(ss(this), "load", this.g, !1, this);
            try {
                ws(this, this.Ea ? _.Qj(ss(this)) : null)
            } catch (a) {
                vs(this)
            }
        }
        ;
        var ws = function(a, b) {
            a.Cb = !1;
            var c;
            c || "function" != typeof a.C || (b = a.C(b)) && (c = 4);
            c ? vs(a) : (a.dispatchEvent("complete"),
            a.dispatchEvent("success"),
            ts(a))
        }
          , vs = function(a) {
            a.h || (a.Cb = !1,
            a.dispatchEvent("complete"),
            a.dispatchEvent("error"),
            ts(a),
            a.h = !0)
        }
          , ts = function(a) {
            us(a);
            qs(a);
            a.na = null;
            a.dispatchEvent("ready")
        }
          , us = function(a) {
            var b = a.Ea;
            b && (b.onreadystatechange = null,
            b.onload = null,
            b.onerror = null,
            a.j.push(b));
            a.hc && (_.og(a.hc),
            a.hc = null);
            _.C ? a.hc = _.ng(a.s, 2E3, a) : a.s();
            a.Ea = null;
            a.ic = null
        };
        ms.prototype.s = function() {
            this.hc && (_.og(this.hc),
            this.hc = null);
            for (; 0 != this.j.length; ) {
                var a = this.j.pop();
                _.Kj(a)
            }
        }
        ;
        var qs = function(a) {
            a.na && a.na == ns && _.md(a.na)
        }
          , ss = function(a) {
            return a.Ea ? _.B && !_.Ac("11") ? a.Ea : _.Qj(a.Ea).getElementById(a.ic + "_inner") : null
        };
        ms.prototype.B = function() {
            if (this.Cb) {
                var a = this.Ea ? _.Qj(ss(this)) : null;
                a && !_.fc(a, "documentUri") ? (_.Wd(ss(this), "load", this.g, !1, this),
                vs(this)) : _.ng(this.B, 250, this)
            }
        }
        ;
        var xs = function(a, b) {
            _.M.call(this);
            this.B = a || "";
            this.j = null;
            this.o = [];
            this.h = null;
            this.J = b || "GET";
            this.l = this.s = null
        };
        _.u(xs, _.M);
        xs.prototype.N = function() {
            var a = {
                mi: this.B,
                method: this.J,
                zi: this.o,
                dir: _.Jb.test(_.W) ? "rtl" : "ltr"
            };
            this.da(_.yi(hs, a))
        }
        ;
        xs.prototype.da = function(a) {
            this.I = a;
            this.h = dm(this, "activity-form");
            a = dm(this, "activity-submit");
            this.l = new Om("");
            hm(this.l, a);
            a = dm(this, "activity-cancel");
            this.j = new Om("");
            hm(this.j, a)
        }
        ;
        xs.prototype.Y = function() {
            var a = S(this);
            a.D(this.l, "action", (0,
            _.w)(this.O, this));
            a.D(this.j, "action", this.dispatchEvent.bind(this, "cancelled"))
        }
        ;
        xs.prototype.O = function() {
            var a = !0;
            this.s && (a = this.s());
            a && (a = new ms,
            _.H(a, "success", function() {
                this.dispatchEvent("successful")
            }),
            _.H(a, "error", function() {
                this.dispatchEvent("failed")
            }),
            rs(a, this.h));
            this.dispatchEvent("submitted")
        }
        ;
        var ys = function(a, b) {
            for (var c in b)
                a.h[c] && (a.h[c].value = b[c])
        }
          , zs = function(a, b) {
            return a.h[b] ? a.h[b].value : ""
        };
        xs.prototype.L = function() {
            this.l = this.h = this.j = null;
            _.M.prototype.L.call(this)
        }
        ;
        var As = function(a, b) {
            a.s = b
        };
        var Bs = function(a, b) {
            Hi.call(this, a);
            this.j = null;
            this.J = b || {};
            this.o = new Up;
            this.s = this.h = null;
            this.l = new _.qp((a || {}).apiKey || "",Qr);
            this.l.o.j = !1
        };
        _.u(Bs, Hi);
        _.h = Bs.prototype;
        _.h.Hc = function(a) {
            Hi.prototype.Hc.call(this, a);
            this.l.initialize((0,
            _.w)(this.cc, this))
        }
        ;
        _.h.cc = function() {
            Hi.prototype.cc.call(this);
            var a = this.ma().Z
              , b = this.ma().B;
            if (a && b) {
                _.rd(this.s, a);
                var c = this.o;
                c.I = b;
                Ij(c.g, c.I);
                Tp(c);
                _.O(this.o.g, !0);
                b = this.ma().Va();
                c = this.ma().ga();
                if (this.l.Ja() && b && c) {
                    var d = this.ma().Qc()
                      , e = (0,
                    _.w)(this.Ej, this);
                    this.l && this.l.translate(e, [d], b, c, 0, !1);
                    ys(this.h, {
                        gtrans: a,
                        text: this.ma().Qc(),
                        hl: _.W,
                        langpair: b + "|" + c
                    });
                    ys(this.h, this.J);
                    ys(this.h, {
                        client: Qr
                    })
                }
                this.dispatchEvent("ready")
            }
        }
        ;
        _.h.N = function() {
            this.da(_.yi(js, {
                gj: _.X.bg
            }))
        }
        ;
        _.h.da = function(a) {
            this.I = a;
            this.s = dm(this, "alt-translated-text");
            var b = dm(this, "activity-form-container");
            this.h = new xs(_.Jo,"POST");
            this.h.o = ii(this.J);
            As(this.h, (0,
            _.w)(function() {
                ys(this.h, {
                    utrans: as(this.j)
                });
                return zs(this.h, "utrans") != zs(this.h, "gtrans")
            }, this));
            this.h.ja(b);
            er = _.X.ki;
            Uq = _.X.bg;
            this.j = new Nr(void 0,!0,a);
            Or(this.j, this.o);
            Pr(this.j);
            Rr(this.j);
            hm(this.j, this.s)
        }
        ;
        _.h.Y = function() {
            Hi.prototype.Y.call(this);
            var a = S(this);
            a.D(this.h, "cancelled", (0,
            _.w)(function() {
                ds(this.j);
                this.dispatchEvent("cancelled")
            }, this));
            a.D(this.h, "submitted", (0,
            _.w)(function() {
                var b = as(this.j);
                this.ma().Z = b && (0,
                _.bc)(b);
                this.dispatchEvent("submitted");
                b = _.X.qg;
                _.rd(this.ma().l.A(), b)
            }, this))
        }
        ;
        _.h.Ej = function(a) {
            a && $r(this.j, a)
        }
        ;
        _.h.Wb = function() {
            _.O(this.o.g, !1)
        }
        ;
        _.h.L = function() {
            this.j && this.j.R();
            this.s = this.o = this.j = null;
            this.l && this.l.R();
            this.l = null;
            this.h && this.h.R();
            this.h = null;
            Hi.prototype.L.call(this)
        }
        ;
        var Qr = _.yo.replace("_", "-") + "-alt";
        var Cs = function(a, b) {
            Hi.call(this, a);
            this.o = !1;
            this.l = b || {};
            this.j = null
        };
        _.u(Cs, Hi);
        _.h = Cs.prototype;
        _.h.Hc = function(a) {
            Hi.prototype.Hc.call(this, a);
            S(this).D(this.j.A(), "keydown", (0,
            _.w)(this.ma().nd, this.ma(), !1));
            this.o = this.ma().Vc;
            this.cc()
        }
        ;
        _.h.cc = function() {
            Hi.prototype.cc.call(this);
            this.j.j(this.ma().Z);
            var a = this.ma().Va()
              , b = this.ma().ga();
            a && b && (ys(this.h, {
                gtrans: this.ma().Z,
                text: this.ma().Qc(),
                hl: _.W,
                langpair: a + "|" + b
            }),
            ys(this.h, this.l));
            this.dispatchEvent("ready");
            this.j.A().focus()
        }
        ;
        _.h.Wb = function() {
            this.ma().nd(this.o)
        }
        ;
        _.h.N = function() {
            this.da(_.yi(is))
        }
        ;
        _.h.da = function(a) {
            this.I = a;
            a = dm(this, "contribute-original-text");
            this.j = new hr("");
            hm(this.j, a);
            nr(this.j);
            mr(this.j);
            a = dm(this, "activity-form-container");
            this.h = new xs(_.Jo,"POST");
            this.h.o = ii(this.l);
            As(this.h, (0,
            _.w)(function() {
                ys(this.h, {
                    utrans: (0,
                    _.bc)(this.j.Qa())
                });
                return zs(this.h, "utrans") != zs(this.h, "gtrans")
            }, this));
            this.h.ja(a)
        }
        ;
        _.h.Y = function() {
            Hi.prototype.Y.call(this);
            var a = S(this);
            a.D(this.h, "cancelled", (0,
            _.w)(function() {
                this.dispatchEvent("cancelled")
            }, this));
            a.D(this.h, "submitted", (0,
            _.w)(function() {
                var b = this.j.Qa();
                this.ma().Z = b && (0,
                _.bc)(b);
                this.dispatchEvent("submitted");
                b = _.X.qg;
                _.rd(this.ma().l.A(), b)
            }, this))
        }
        ;
        _.h.L = function() {
            this.j && this.j.R();
            this.j = null;
            this.h && this.h.R();
            this.h = null;
            Hi.prototype.L.call(this)
        }
        ;
        var Ds = function(a) {
            _.I.call(this);
            this.ya = a;
            this.j = {};
            this.H = new _.J(this);
            this.h = null
        };
        _.u(Ds, _.I);
        Ds.prototype.attach = function() {}
        ;
        Ds.prototype.kg = function() {}
        ;
        Ds.prototype.L = function() {
            this.H.R();
            this.H = null
        }
        ;
        var Es = function(a, b, c) {
            if (b = a.ya.h[b]) {
                c = c || "undefined" == typeof c;
                for (var d = 0; d < b.Ra.length; ++d)
                    b.Ra[d] && a.Yg(b.Ra[d], c)
            }
        };
        Ds.prototype.Yg = function(a, b) {
            _.L(a, "backgroundColor", b ? "#E6ECF9" : "");
            _.L(a, "color", b ? "#000" : "")
        }
        ;
        var ji = {}
          , Fs = null
          , Gs = function(a) {
            a = _.za(a);
            delete ji[a];
            ki() && Fs && Fs.stop()
        }
          , Is = function() {
            Fs || (Fs = new Nl(function() {
                Hs()
            }
            ,20));
            var a = Fs;
            0 != a.nc || a.start()
        }
          , Hs = function() {
            var a = _.zb();
            _.Fc(ji, function(b) {
                Js(b, a)
            });
            ki() || Is()
        };
        var Ks = function(a, b, c, d) {
            Kp.call(this);
            if (!Array.isArray(a) || !Array.isArray(b))
                throw Error("Aa");
            if (a.length != b.length)
                throw Error("Ba");
            this.o = a;
            this.M = b;
            this.duration = c;
            this.K = d;
            this.coords = [];
            this.progress = 0
        };
        _.x(Ks, Kp);
        Ks.prototype.play = function(a) {
            if (a || 0 == this.g)
                this.progress = 0,
                this.coords = this.o;
            else if (1 == this.g)
                return !1;
            Gs(this);
            this.startTime = a = _.zb();
            -1 == this.g && (this.startTime -= this.duration * this.progress);
            this.endTime = this.startTime + this.duration;
            this.progress || this.j();
            this.h("play");
            -1 == this.g && this.h("resume");
            this.g = 1;
            var b = _.za(this);
            b in ji || (ji[b] = this);
            Is();
            Js(this, a);
            return !0
        }
        ;
        Ks.prototype.stop = function(a) {
            Gs(this);
            this.g = 0;
            a && (this.progress = 1);
            Ls(this, this.progress);
            this.Wb();
            this.l()
        }
        ;
        Ks.prototype.Uf = function(a) {
            this.progress = a;
            1 == this.g && (this.startTime = _.zb() - this.duration * this.progress,
            this.endTime = this.startTime + this.duration)
        }
        ;
        Ks.prototype.L = function() {
            0 == this.g || this.stop(!1);
            this.h("destroy");
            Ks.G.L.call(this)
        }
        ;
        var Js = function(a, b) {
            b < a.startTime && (a.endTime = b + a.endTime - a.startTime,
            a.startTime = b);
            a.progress = (b - a.startTime) / (a.endTime - a.startTime);
            1 < a.progress && (a.progress = 1);
            Ls(a, a.progress);
            1 == a.progress ? (a.g = 0,
            Gs(a),
            a.h("finish"),
            a.l()) : 1 == a.g && a.B()
        }
          , Ls = function(a, b) {
            "function" === typeof a.K && (b = a.K(b));
            a.coords = Array(a.o.length);
            for (var c = 0; c < a.o.length; c++)
                a.coords[c] = (a.M[c] - a.o[c]) * b + a.o[c]
        };
        Ks.prototype.B = function() {
            this.h("animate")
        }
        ;
        Ks.prototype.h = function(a) {
            this.dispatchEvent(new Ms(a,this))
        }
        ;
        var Ms = function(a, b) {
            _.zd.call(this, a);
            this.coords = b.coords;
            this.x = b.coords[0];
            this.y = b.coords[1];
            this.z = b.coords[2];
            this.duration = b.duration;
            this.progress = b.progress;
            this.state = b.g
        };
        _.x(Ms, _.zd);
        var Ns = function(a, b, c, d, e) {
            Ks.call(this, b, c, d, e);
            this.element = a
        };
        _.x(Ns, Ks);
        Ns.prototype.C = _.v;
        Ns.prototype.B = function() {
            this.C();
            Ns.G.B.call(this)
        }
        ;
        Ns.prototype.l = function() {
            this.C();
            Ns.G.l.call(this)
        }
        ;
        Ns.prototype.j = function() {
            this.C();
            Ns.G.j.call(this)
        }
        ;
        var Os = function(a, b, c, d, e) {
            "number" === typeof b && (b = [b]);
            "number" === typeof c && (c = [c]);
            Ns.call(this, a, b, c, d, e);
            if (1 != b.length || 1 != c.length)
                throw Error("Ca");
            this.s = -1
        };
        _.x(Os, Ns);
        var Ps = 1 / 1024;
        Os.prototype.C = function() {
            var a = this.coords[0];
            if (Math.abs(a - this.s) >= Ps) {
                var b = this.element.style;
                "opacity"in b ? b.opacity = a : "MozOpacity"in b ? b.MozOpacity = a : "filter"in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * Number(a) + ")");
                this.s = a
            }
        }
        ;
        Os.prototype.j = function() {
            this.s = -1;
            Os.G.j.call(this)
        }
        ;
        Os.prototype.l = function() {
            this.s = -1;
            Os.G.l.call(this)
        }
        ;
        var Qs = function(a, b, c) {
            Os.call(this, a, 1, 0, b, c)
        };
        _.x(Qs, Os);
        Qs.prototype.j = function() {
            this.element.style.display = "";
            Qs.G.j.call(this)
        }
        ;
        Qs.prototype.l = function() {
            this.element.style.display = "none";
            Qs.G.l.call(this)
        }
        ;
        var Rs = function(a, b, c) {
            Os.call(this, a, 0, 1, b, c)
        };
        _.x(Rs, Os);
        Rs.prototype.j = function() {
            this.element.style.display = "";
            Rs.G.j.call(this)
        }
        ;
        var Ss = function() {
            _.M.call(this);
            this.h = null
        };
        _.u(Ss, _.M);
        Ss.prototype.N = function() {
            this.da(this.g.N("DIV", {
                "class": "status-message"
            }))
        }
        ;
        Ss.prototype.da = function(a) {
            this.I = a;
            a.style.display = "none"
        }
        ;
        var Us = function(a) {
            var b = c;
            var c = (0,
            _.w)(function() {
                _.rd(this.A(), "");
                b && b()
            }, a);
            c = (0,
            _.w)(a.j, a, 750, c);
            Ts(a, c)
        }
          , Vs = function(a) {
            a.h && (a.h.stop(!0),
            a.h = null);
            _.rd(a.A(), "");
            a.S(!1)
        }
          , Ts = function(a, b) {
            a.h = new Rs(a.A(),750);
            S(a).Vb(a.h, "begin", (0,
            _.w)(function() {
                this.A().style.display = "block"
            }, a));
            S(a).Vb(a.h, "finish", (0,
            _.w)(function() {
                this.h = null;
                window.setTimeout(b, 2E3)
            }, a));
            a.h.play()
        };
        Ss.prototype.j = function(a, b) {
            this.isVisible() && (this.h = new Qs(this.A(),a),
            S(this).Vb(this.h, "finish", (0,
            _.w)(function() {
                b && b()
            }, this)),
            this.h.play())
        }
        ;
        Ss.prototype.S = function(a) {
            this.A().style.display = a ? "block" : "none";
            this.A().style.opacity = a ? "1" : "0"
        }
        ;
        Ss.prototype.isVisible = function() {
            return "none" !== this.A().style.display && "0" !== this.A().style.opacity
        }
        ;
        var Ws = function() {
            Y.call(this);
            this.X = {};
            this.wb = {};
            this.J = null;
            this.wc = !1;
            this.Ob = this.j = this.T = null;
            this.aa = {};
            this.H = new _.J(this);
            this.B = this.P = this.l = this.ob = this.h = this.Z = this.Na = null;
            this.M = !0;
            this.$a = []
        };
        _.u(Ws, Y);
        _.h = Ws.prototype;
        _.h.ja = function() {
            this.M = !1;
            var a = _.Jb.test(_.W) ? "rtl" : "ltr";
            this.qc(_.yi(gs, {
                ge: "https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
                ul: "https://www.google.com/images/cleardot.gif",
                yl: _.Do,
                dir: a
            }));
            this.className += " skiptranslate";
            this.A() && this.J && this.ob && this.l.A() && this.T && this.B && (this.H.D(window, "resize", (0,
            _.w)(this.Ab, this)),
            this.H.D(this, "hide", (0,
            _.w)(this.Hj, this)),
            this.$a.length && (this.Je.apply(this, this.$a),
            this.$a = []))
        }
        ;
        _.h.Je = function(a) {
            for (var b = [], c = 0; c < arguments.length; ++c) {
                var d = arguments[c];
                if (d)
                    if (this.J || d.fe) {
                        var e = d;
                        var f = _.Ej("SPAN", {
                            "class": e.className || "activity-link"
                        });
                        _.rd(f, e.vf || "");
                        e = f;
                        b.push(e);
                        Hj(d.fe || this.J, e);
                        d.Hc && d.Wb && (f = (0,
                        _.w)(this.Di, this, d),
                        this.H.D(e, "click", f),
                        d.ee && this.H.D(this.T, d.ee, f));
                        d.id = d.id || d.ib();
                        this.X[d.id] && this.th(d);
                        this.X[d.id] = d;
                        this.wb[d.id] = e
                    } else
                        this.$a.push(d)
            }
            return b
        }
        ;
        _.h.th = function(a) {
            for (var b = 0; b < arguments.length; ++b) {
                var c = "string" === typeof arguments[b] || arguments[b]instanceof String ? arguments[b] : arguments[b].id
                  , d = this.X[c]
                  , e = this.wb[c];
                d && e && (this.j && this.j.id === c && this.Se(),
                this.H.sa(d, ["submitted", "cancelled"]),
                d.R(),
                this.aa[c] && delete this.aa[c],
                delete this.X[c],
                delete this.wb[c],
                _.Kj(e))
            }
        }
        ;
        _.h.Di = function(a) {
            if (this.T) {
                a != this.j && this.j && (Vs(this.l),
                this.j.Wb.call(this.j),
                this.j.A() && (this.j.A().style.display = "none"),
                Xs(this, !1),
                this.j = null);
                Xs(this, !0);
                Vs(this.l);
                this.j = a;
                if (this.aa[a.id]) {
                    var b = this.aa[a.id];
                    var c = a.cc
                } else
                    a.ja(),
                    b = a.A(),
                    c = a.Hc,
                    this.H.D(a, ["submitted", "cancelled"], (0,
                    _.w)(this.Se, this)),
                    a.Id && (this.aa[a.id] = b);
                Hj(this.T, b);
                c.call(a, this);
                a = new Rs(b,100);
                this.H.Vb(a, "finish", (0,
                _.w)(this.Ab, this, !0, !0));
                a.play()
            }
        }
        ;
        _.h.Se = function() {
            if (this.j)
                if (Vs(this.l),
                this.j.Wb.call(this.j),
                this.j.A()) {
                    var a = new Qs(this.j.A(),100);
                    this.H.Vb(a, "finish", (0,
                    _.w)(function() {
                        _.Kj(this.j.A());
                        this.j = null;
                        Xs(this, !1);
                        _.wd(this.l.A()) && (Us(this.l),
                        this.Ab(!0, !0))
                    }, this));
                    a.play()
                } else
                    Xs(this, !1),
                    this.j = null
        }
        ;
        _.h.Bf = function(a, b) {
            this.Ob = a;
            Y.prototype.Bf.call(this, a, b);
            this.A().style.display = "block"
        }
        ;
        _.h.Be = function(a) {
            if (!this.M) {
                var b = hq(this, a.target);
                this.Oa = b;
                this.O();
                b != this.g ? (this.g = b,
                iq(this, b),
                jq(this),
                gq(this, a)) : iq(this, b)
            }
        }
        ;
        _.h.Hj = function() {
            Vs(this.l);
            this.wc && this.Se()
        }
        ;
        _.h.L = function() {
            for (var a in this.X)
                this.th(a);
            this.H && this.H.R();
            this.H = null;
            this.l && this.l.R();
            this.B = this.ob = this.Ob = this.T = this.J = this.l = null;
            Y.prototype.L.call(this)
        }
        ;
        var Xs = function(a, b) {
            a.wc = b;
            a.M = b;
            if (a.M) {
                var c = a.A();
                a.Na = new N(c.offsetLeft,c.offsetTop)
            } else
                a.Na && (null != (a.s || null) && ((a.s || null).g = a.Na),
                _.Hk(a.A(), a.Na),
                a.Na = null);
            a.J.style.display = b ? "none" : "inline-block";
            a.ob.style.display = b ? "inline-block" : "none"
        };
        _.h = Ws.prototype;
        _.h.nd = function(a) {
            if (this.isVisible()) {
                a = (this.Vc = a) ? this.o.D : this.o.sa;
                var b = _.E(this.A());
                a.call(this.o, b, "mousedown", this.Ef, !0)
            } else
                Y.prototype.nd.call(this, a)
        }
        ;
        _.h.qc = function(a) {
            Y.prototype.qc.call(this, a);
            if (a) {
                this.J = Pi("activity-links", a);
                var b = Pi("status-message", a);
                b && (this.l = new Ss,
                hm(this.l, b));
                this.ob = Pi("started-activity-container", a);
                this.T = Pi("activity-root", a);
                this.B = Pi("original-text", a)
            }
        }
        ;
        _.h.Ab = function(a, b) {
            var c = Lk(document.body).y;
            if (this.s) {
                (this.s || null).g.y += c;
                Y.prototype.Ab.call(this);
                var d = parseInt(this.A().style.left, 10);
                a = parseInt(this.A().style.top, 10) - (a ? 0 : c);
                b && (b = this.xf || {},
                a -= b.top || 10,
                d -= b.left || 10);
                a -= c;
                (this.s || null).g.y = a;
                (this.s || null).g.x = d;
                c = new N(d,a);
                _.Hk(this.A(), c)
            }
        }
        ;
        _.h.S = function(a) {
            Y.prototype.S.call(this, a)
        }
        ;
        _.h.Lb = function(a) {
            this.h = a
        }
        ;
        _.h.oa = function(a) {
            this.P = a
        }
        ;
        _.h.mb = function(a) {
            a = a ? (0,
            _.bc)(a) : "";
            this.B ? _.rd(this.B, a) : Y.prototype.mb.call(this, a)
        }
        ;
        _.h.Va = function() {
            return this.h
        }
        ;
        _.h.ga = function() {
            return this.P
        }
        ;
        _.h.Qc = function() {
            return this.B ? _.wd(this.B) : Y.prototype.Qc.call(this)
        }
        ;
        _.h.Bc = function(a) {
            this.M || Y.prototype.Bc.call(this, a)
        }
        ;
        _.h.Zd = function(a) {
            this.M || Y.prototype.Zd.call(this, a)
        }
        ;
        _.h.Yd = function(a) {
            this.M || Y.prototype.Yd.call(this, a)
        }
        ;
        var Ys = {
            set: function(a, b) {
                a.className = b
            },
            get: function(a) {
                a = a.className;
                return "string" === typeof a && a.match(/\S+/g) || []
            },
            add: function(a, b) {
                var c = Ys.get(a)
                  , d = Array.prototype.slice.call(arguments, 1)
                  , e = c.length + d.length;
                Ys.rg(c, d);
                Ys.set(a, c.join(" "));
                return c.length == e
            },
            remove: function(a, b) {
                var c = Ys.get(a)
                  , d = Array.prototype.slice.call(arguments, 1)
                  , e = Ys.Hg(c, d);
                Ys.set(a, e.join(" "));
                return e.length == c.length - d.length
            },
            rg: function(a, b) {
                for (var c = 0; c < b.length; c++)
                    _.ta(a, b[c]) || a.push(b[c])
            },
            Hg: function(a, b) {
                return a.filter(function(c) {
                    return !_.ta(b, c)
                })
            },
            El: function(a, b, c) {
                for (var d = Ys.get(a), e = !1, f = 0; f < d.length; f++)
                    d[f] == b && (d.splice(f--, 1),
                    e = !0);
                e && (d.push(c),
                Ys.set(a, d.join(" ")));
                return e
            },
            ol: function(a, b, c) {
                var d = Ys.get(a);
                "string" === typeof b ? _.va(d, b) : Array.isArray(b) && (d = Ys.Hg(d, b));
                "string" !== typeof c || _.ta(d, c) ? Array.isArray(c) && Ys.rg(d, c) : d.push(c);
                Ys.set(a, d.join(" "))
            },
            has: function(a, b) {
                return _.ta(Ys.get(a), b)
            },
            enable: function(a, b, c) {
                c ? Ys.add(a, b) : Ys.remove(a, b)
            },
            toggle: function(a, b) {
                var c = !Ys.has(a, b);
                Ys.enable(a, b, c);
                return c
            }
        };
        var Zs = function(a, b) {
            Ds.call(this, a);
            b = b || {};
            this.F = {
                apiKey: b.apiKey || "",
                Tb: b.Tb || 1
            };
            this.g = null
        };
        _.u(Zs, Ds);
        _.h = Zs.prototype;
        _.h.attach = function(a, b) {
            b && (b.g = a,
            this.g.attach(b))
        }
        ;
        _.h.kg = function(a) {
            a && cq(this.g, a)
        }
        ;
        _.h.Qh = function() {
            var a = this.g.Ob;
            if (a && void 0 !== a.g) {
                var b = a.g;
                a = this.ya.h[b];
                Es(this, this.h, !1);
                this.h = b;
                Es(this, b);
                this.g.Lb(a.ck);
                this.g.oa(a.fk);
                b = a.ha;
                this.g.Z = b && (0,
                _.bc)(b);
                this.g.mb(a.text)
            }
        }
        ;
        _.h.Ph = function() {
            Es(this, this.h, !1)
        }
        ;
        _.h.nh = function() {
            this.ya.h[this.h].wi.dispatchEvent("updating")
        }
        ;
        _.h.L = function() {
            this.g.R();
            this.g = null;
            Ds.prototype.L.call(this)
        }
        ;
        _.h.Yg = function(a, b) {
            Ys[b ? "add" : "remove"](a, "goog-text-highlight")
        }
        ;
        /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
        var $s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
        var at = function(a) {
            this.s = a;
            this.l = this.h = this.o = this.j = -1;
            this.g = !1;
            this.B = 0;
            this.K = "";
            this.M = 0
        };
        at.prototype.start = function() {
            if (!this.g) {
                this.g = !0;
                var a = [], b;
                var c = 62;
                for (b = 0; 15 > b; b++)
                    a[b] = $s[0 | Math.random() * c];
                this.K = a.join("");
                this.B = 0;
                this.l = this.h = this.o = this.j = -1;
                this.M = _.zb();
                _.ng(this.C, 1E4, this)
            }
        }
        ;
        at.prototype.stop = function() {
            this.g && (this.g = !1,
            bt(this))
        }
        ;
        at.prototype.C = function() {
            this.g && (bt(this),
            _.ng(this.C, 1E3, this))
        }
        ;
        var bt = function(a) {
            var b = a.s.l
              , c = a.s.s
              , d = a.s.j
              , e = a.s.o;
            if (a.j != b || a.o != c || a.h != d || a.l != e) {
                var f = {};
                f.ct = b;
                f.cv = c;
                f.cts = d;
                f.cvs = e;
                f.sid = a.K;
                f.seq = a.B++;
                f.tat = _.zb() - a.M;
                if (0 <= a.j || 0 <= a.o || 0 <= a.h || 0 <= a.l)
                    f.pt = a.j,
                    f.pv = a.o,
                    f.pts = a.h,
                    f.pvs = a.l;
                _.Di("te_v", f);
                a.j = b;
                a.o = c;
                a.h = d;
                a.l = e
            }
        };
        var ct = function() {
            this.o = this.j = this.s = this.l = 0;
            this.g = [];
            this.h = null != _.p.IntersectionObserver ? new IntersectionObserver((0,
            _.w)(this.C, this)) : null
        };
        ct.prototype.attach = function(a, b) {
            this.j += b;
            var c = this.g.length;
            this.g.push(b);
            for (b = 0; b < a.length; ++b) {
                var d = a[b];
                Lj(d) ? (d[dt] = c,
                this.l += _.wd(d).length,
                this.h && this.h.observe(d)) : this.dh(d.nodeType)
            }
        }
        ;
        ct.prototype.reset = function() {
            this.o = this.j = this.s = this.l = 0;
            this.g = []
        }
        ;
        ct.prototype.C = function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (0 < c.intersectionRatio && null != c.target[dt]) {
                    this.s += _.wd(c.target).length;
                    var d = c.target[dt];
                    this.o += this.g[d];
                    this.g[d] = 0;
                    c.target[dt] = void 0
                }
            }
        }
        ;
        _.Zo.attach(36546, ct.prototype, {
            dh: 1
        });
        var dt = "_gt_" + Math.random().toString(36).substr(2);
        _.et = function(a, b) {
            _.y.call(this);
            a = a || {};
            this.F = _.li(a);
            this.F.Tb = a.Tb;
            this.F.pe = !!a.pe;
            this.F.ri = parseInt(a.ri, 10) || 300;
            this.F.Pj = a.Pj;
            this.F.trackVisibility = a.trackVisibility || !1;
            this.o = 0;
            this.h = {};
            this.H = new _.J(this);
            this.j = new Zs(this,this.F);
            b && (this.j.j = b || {});
            a = this.j;
            a.g = new Ws({
                ak: a.F.ak
            });
            a.g.Xg = 300;
            a.g.zh = 1E3;
            a.g.nd(!0);
            a.H.D(a.g, "show", (0,
            _.w)(a.Qh, a));
            a.H.D(a.g, "hide", (0,
            _.w)(a.Ph, a));
            b = new Bs({
                apiKey: a.F.apiKey,
                id: "alternate",
                vf: _.X.Kh,
                Id: !0
            },a.j);
            a.g.Je(b);
            a.H.D(b, "submitted", (0,
            _.w)(a.nh, a));
            a.F.Tb && (b = new Cs({
                id: "contribute",
                ee: "dblclick",
                Id: !0
            },a.j),
            a.g.Je(b),
            a.H.D(b, "submitted", (0,
            _.w)(a.nh, a)));
            a.g.ja();
            this.l = this.g = null;
            this.F.trackVisibility && null != _.p.IntersectionObserver && (this.g = new ct,
            this.l = new at(this.g))
        }
        ;
        _.u(_.et, _.y);
        var ft = function(a) {
            a.l && a.l.stop();
            for (var b in a.h) {
                var c = a
                  , d = b
                  , e = c.h[d];
                if (e) {
                    if (c.g)
                        for (var f = c.g, g = e.Ra, k = 0; k < g.length; ++k) {
                            var l = f
                              , m = g[k];
                            Lj(m) ? (m[dt] = void 0,
                            l.h && l.h.unobserve(m)) : l.dh(m.nodeType)
                        }
                    for (f = 0; f < e.Ra.length; ++f)
                        e.Ra[f] && c.j.kg(e.Ra[f]);
                    delete c.h[d]
                }
            }
            a.g && a.g.reset()
        };
        _.et.prototype.L = function() {
            ft(this);
            this.H.R();
            this.H = null;
            this.j.R();
            this.j = null
        }
        ;
        var gt = function(a) {
            for (var b = 0; b < a.length; ++b)
                if (a[b] && a[b].node)
                    return a[b].node;
            return null
        }, kt = function(a) {
            var b = gt(a);
            if (!b)
                return null;
            var c = []
              , d = []
              , e = [];
            b = new Gp(b,!0);
            var f = a[a.length - 1].node
              , g = 0
              , k = !1;
            do {
                b.next();
                var l = b.node();
                if (!l)
                    break;
                var m = b.g.g
                  , n = b.depth();
                for (1 == m && --n; g < a.length && !a[g].node; )
                    ++g;
                l == a[g].node || !k && 1 == m && (null != l && null == l.previousSibling ? 0 : !ht(it(l))) ? (m = jt(l),
                d.push({
                    node: m,
                    mb: function() {}
                }),
                e[d.length - 1] = n,
                Ij(m, l),
                l == a[g].node && (c[g++] = d.length - 1,
                k = !0)) : k = !1
            } while (l != f);
            return {
                ag: e,
                Lj: c,
                ij: d
            }
        }, ht = function(a) {
            return null != a && Dp[a.tagName]
        }, it = function(a) {
            if (null == a)
                return null;
            for (a = a.previousSibling; null != a && null != a && 3 == a.nodeType && "" == (0,
            _.bc)(_.wd(a)); )
                a = a.previousSibling;
            return a
        }, nt = function(a, b, c, d, e, f, g) {
            _.I.call(this);
            this.g = [];
            for (var k = 0; k < a.length; ++k)
                this.g.push("nodeType"in a[k] ? lt(a[k]) : a[k]),
                mt(a[k].node);
            this.j = b;
            this.M = d || 0;
            this.Z = e || 0;
            this.C = c;
            this.ya = f || null;
            this.vc = g || "transparent";
            this.T = this.K = this.O = !1;
            this.o = [];
            this.s = [];
            this.h = [];
            this.W = [];
            this.H = new _.J(this);
            this.l = this.J = !1
        }, lt, mt, vt, tt, jt;
        _.u(nt, _.I);
        var qt = function(a) {
            if (!a)
                return !1;
            if (3 != a.nodeType || !_.B)
                return ot in a && !!a[ot];
            if (!a.parentNode)
                return !0;
            if (!(pt in a.parentNode))
                return !1;
            var b = a.parentNode[pt];
            if (!b || !b[a.nodeValue])
                return !1;
            b = b[a.nodeValue];
            for (var c = 0; c < b.length; ++c)
                if (b[c] == a)
                    return !0;
            return !1
        }
          , rt = function(a, b) {
            if (!a)
                return "";
            if ("TITLE" == a.tagName)
                return String(document.title);
            3 == a.nodeType ? b = "nodeValue" : b || (b = "value");
            return a.getAttribute && a.getAttribute(b) ? String(a.getAttribute(b)) : "string" === typeof a[b] ? String(a[b]) : ""
        };
        nt.prototype.wa = function() {
            return this.j
        }
        ;
        var st = function(a, b, c) {
            b = {
                oh: b,
                Hf: c,
                pa: []
            };
            a.h.push(b);
            return b
        }
          , ut = function(a) {
            if (!a.l && a.O && !a.K && !a.T) {
                a.K = !0;
                var b;
                if (b = tt(a.g)) {
                    b = a.g;
                    var c = a.h;
                    if (1 == b.length && b[0] && b[0].$f) {
                        for (var d = [], e = 0; e < c.length; ++e)
                            for (var f = 0; f < c[e].pa.length; ++f)
                                d.push(c[e].pa[f].ha);
                        b[0].mb(d.join(" "), b[0].node);
                        b = !0
                    } else
                        b = !1;
                    b = !b
                }
                if (b && (b = kt(a.g))) {
                    a.s = b.Lj;
                    a.o = b.ij;
                    d = a.g;
                    e = a.s;
                    f = a.o;
                    var g = b.ag;
                    c = [];
                    for (var k = 0; k < d.length; ++k)
                        if (c[k] = [],
                        d[k].node && void 0 !== e[k])
                            for (var l = 0; l < f.length; ++l)
                                if (!(g[l] > g[e[k]])) {
                                    if (g[l] == g[e[k]]) {
                                        if (f[l].node.parentNode != f[e[k]].node.parentNode)
                                            continue
                                    } else {
                                        for (var m = g[e[k]] - g[l], n = f[e[k]].node.parentNode; m-- && n && n != f[l].node.parentNode; )
                                            n = n.parentNode;
                                        if (n != f[l].node.parentNode)
                                            continue
                                    }
                                    c[k].push(l)
                                }
                    d = a.g;
                    e = a.h;
                    f = -1;
                    for (g = e.length - 1; 0 <= g; --g)
                        for (k = e[g],
                        l = k.pa.length - 1; 0 <= l; --l)
                            if (m = k.pa[l],
                            !(0 > m.fa) && d[m.fa] && d[m.fa].node)
                                if (0 > f)
                                    m.be = _.Lo(c[m.fa]),
                                    f = c[m.fa][c[m.fa].length - 1];
                                else
                                    for (n = c[m.fa].length - 1; 0 <= n; --n)
                                        if (c[m.fa][n] <= f) {
                                            m.be = _.Lo(c[m.fa].slice(0, n + 1));
                                            f = c[m.fa][n];
                                            break
                                        }
                    for (c = e = 0; c < a.h.length; ++c) {
                        d = a.h[c];
                        f = a.g;
                        g = d;
                        k = b.ag;
                        l = a.s;
                        m = "";
                        for (n = 0; n < g.pa.length; ++n) {
                            var q = g.pa[n];
                            m += q.ha;
                            if (0 > q.fa) {
                                var r = -1
                                  , z = -1
                                  , G = l[g.pa[n - 1].fa];
                                void 0 !== G && (r = k[G]);
                                n < g.pa.length - 1 && (G = l[g.pa[n + 1].fa],
                                void 0 !== G && (z = k[G]));
                                if (0 <= r || 0 <= z)
                                    a: if (z = (0 > r || z < r) && n < g.pa.length - 1,
                                    r = g.pa[z ? n + 1 : n - 1],
                                    !(r.fa >= f.length || null == f[r.fa].node)) {
                                        G = q.ha;
                                        q.ha = "";
                                        if (/^ +$/.test(G) && (q = z ? r.ha.charCodeAt(0) : r.ha.charCodeAt(r.ha.length - 1),
                                        3584 <= q && 3711 >= q || 12288 <= q && 12351 >= q || 12352 <= q && 12543 >= q || 12784 <= q && 12799 >= q || 19968 <= q && 40959 >= q || 65280 <= q && 65519 >= q))
                                            break a;
                                        r.ha = z ? G + r.ha : r.ha + G
                                    }
                            }
                        }
                        f = m;
                        g = a.g;
                        k = d;
                        l = a.o;
                        m = b.ag;
                        n = a.s;
                        q = [];
                        for (r = 0; r < k.pa.length && !(e >= l.length); ++r)
                            if (z = k.pa[r],
                            z.be && !(0 > z.fa) && g[z.fa].node && z.ha)
                                if (e == n[z.fa] || e in z.be && (!(e + 1 in z.be) || e + 1 != n[z.fa])) {
                                    if (l[e] && l[e].node) {
                                        G = jt(l[e].node);
                                        q.push(G);
                                        for (var Q = l[e].node, vd = m[n[z.fa]] - m[e], nc = G, ub = g[z.fa].node.parentNode, jf = nc; ub && vd--; )
                                            jf = ub.cloneNode(!1),
                                            jf.appendChild(nc),
                                            ub = ub.parentNode,
                                            nc = jf;
                                        Q.appendChild(jf);
                                        Q = g[z.fa].node;
                                        g[z.fa].te ? g[z.fa].$g || G.appendChild(Q) : (Q = g[z.fa].node.cloneNode(!1),
                                        Q.id && (Q.id = ""),
                                        G.appendChild(Q));
                                        g[z.fa].mb(z.ha, Q)
                                    }
                                } else
                                    ++e,
                                    --r;
                        g = q;
                        q = a.g;
                        k = a.C;
                        if (d.oh)
                            k = d.oh;
                        else {
                            l = q.length;
                            m = -1;
                            for (n = 0; n < d.pa.length; ++n)
                                r = d.pa[n].fa,
                                0 <= r && q[r] && q[r].node && (m = Math.max(m, r),
                                l = Math.min(l, r));
                            q = "";
                            for (n = l; n <= m; ++n)
                                k[n] && (q += k[n]);
                            k = q
                        }
                        m = g;
                        n = k;
                        if (a.ya) {
                            if (3 != a.ya.F.Tb) {
                                g = a.W;
                                k = g.push;
                                l = a.ya;
                                d = d.Hf;
                                q = a;
                                d = l.h[++l.o] = {
                                    id: l.o.toString(),
                                    wi: q,
                                    text: n,
                                    Dl: d || n,
                                    ha: f,
                                    ck: l.s,
                                    fk: l.C,
                                    Ra: m
                                };
                                for (f = 0; f < m.length; ++f)
                                    m[f] && l.j.attach(d.id, m[f]);
                                l.g && l.g.attach(m, n.length);
                                l.l && l.l.start();
                                k.call(g, d.id)
                            }
                        } else
                            for (d = 0; d < m.length; ++d)
                                m[d].title = n
                    }
                    b = a.g;
                    for (c = 0; c < b.length; ++c)
                        b[c].node && !b[c].te && _.Kj(b[c].node);
                    b = a.g;
                    c = a.o;
                    a = a.s;
                    for (e = d = 0; e < c.length; ++e)
                        if (f = c[e].node) {
                            for (; d < b.length && e > a[d]; )
                                d++;
                            (d >= b.length || e != a[d]) && !f.firstChild && (_.Kj(f),
                            c[e].node = null)
                        }
                }
            }
        };
        nt.prototype.restore = function() {
            if (this.K)
                if (this.K = !1,
                this.ya && ft(this.ya),
                this.W = [],
                tt(this.o),
                1 == this.g.length && this.g[0].$f)
                    this.g[0].mb(this.C[0], this.g[0].node);
                else {
                    for (var a = 0, b = 0; b < this.o.length; ++b) {
                        var c = this.o[b].node;
                        if (c) {
                            for (; a < this.g.length && b > this.s[a]; ) {
                                var d = a++;
                                this.g[d].node && (vt(this.g[d].node),
                                this.g[d].node = null)
                            }
                            if (a < this.g.length && b == this.s[a] && this.g[a].node) {
                                this.g[a].$g || (_.md(c),
                                c.appendChild(this.g[a].node));
                                this.g[a].mb(this.C[a], this.g[a].node);
                                a++;
                                d = c;
                                var e = d.parentNode;
                                if (e && 11 != e.nodeType)
                                    if (d.removeNode)
                                        d.removeNode(!1);
                                    else {
                                        for (; c = d.firstChild; )
                                            e.insertBefore(c, d);
                                        _.Kj(d)
                                    }
                            } else
                                _.Kj(c)
                        }
                    }
                    this.o = []
                }
        }
        ;
        nt.prototype.L = function() {
            _.I.prototype.L.call(this);
            this.restore();
            for (var a = 0; a < this.g.length; ++a)
                this.g[a].node && vt(this.g[a].node);
            this.g = null
        }
        ;
        mt = function(a) {
            if (a)
                if (3 == a.nodeType && _.B) {
                    pt in a.parentNode && a.parentNode[pt] || (a.parentNode[pt] = {});
                    var b = a.parentNode[pt];
                    b[a.nodeValue] || (b[a.nodeValue] = []);
                    b = b[a.nodeValue];
                    for (var c = 0; c < b.length; ++c)
                        if (b[c] == a)
                            return;
                    b.push(a)
                } else
                    a[ot] = 1
        }
        ;
        vt = function(a) {
            if (!a || 3 == a.nodeType && _.B) {
                var b = a.parentNode;
                if (b && pt in b) {
                    var c = b[pt];
                    if (c && a && c[a.nodeValue]) {
                        var d = c[a.nodeValue];
                        if (d)
                            for (var e = 0; e < d.length; ++e)
                                if (d[e] == a) {
                                    d.splice(e, 1);
                                    break
                                }
                        0 == d.length && delete c[a.nodeValue]
                    }
                    if (c && Xo(c))
                        try {
                            delete b[pt]
                        } catch (f) {
                            b[pt] = ""
                        }
                }
            } else if (ot in a)
                try {
                    delete a[ot]
                } catch (f) {
                    a[ot] = ""
                }
        }
        ;
        tt = function(a) {
            for (var b = 0; b < a.length; ++b)
                try {
                    a[b].node && !a[b].node.parentNode && (a[b].node = null)
                } catch (c) {
                    a[b].node = null
                }
            for (b = a.length - 1; 0 <= b && !a[b].node; --b)
                ;
            a.length = b + 1;
            return a.length
        }
        ;
        jt = function(a) {
            a = a.ownerDocument ? a.ownerDocument.createElement("font") : _.jd(document, "font");
            mt(a);
            a.style.verticalAlign = "inherit";
            return a
        }
        ;
        _.wt = function() {
            this.h = {};
            this.g = {}
        }
        ;
        _.wt.prototype.has = function(a, b) {
            return null != this.h[a] || null != this.g[a] || b && (a in this.h || a in this.g)
        }
        ;
        _.wt.prototype.write = function(a, b) {
            this.g[a] = b
        }
        ;
        _.wt.prototype.remove = function(a) {
            delete this.g[a];
            delete this.h[a]
        }
        ;
        var ot = "_gt_" + Math.random().toString(36).substr(2)
          , pt = "_gtn_" + Math.random().toString(36).substr(2);
        (function() {
            function a(c) {
                document.title = c
            }
            var b = {};
            lt = function(c, d) {
                if ("TITLE" == c.tagName)
                    return {
                        node: c,
                        mb: a,
                        te: !0,
                        $g: !0,
                        $f: !0
                    };
                if (3 == c.nodeType)
                    return {
                        node: c,
                        mb: function(e, f) {
                            _.rd(f, e)
                        }
                    };
                d || (d = "value");
                b[d] || (b[d] = function(e, f) {
                    f.setAttribute && f.setAttribute(d, e);
                    "string" === typeof e && (f[d] = e)
                }
                );
                c = {
                    node: c,
                    mb: b[d],
                    te: !0
                };
                "value" != d && (c.$f = !0);
                return c
            }
        }
        )();
        var xt = function(a, b, c, d) {
            d = d.firstChild && 3 == d.firstChild.nodeType ? d.firstChild.nodeValue : _.wd(d);
            d = {
                fa: c,
                ha: Bj(d)
            };
            a.push(d);
            b[c] ? b[c].end = d : b[c] = {
                start: d,
                end: d
            };
            return d
        }
          , yt = function(a) {
            for (var b, c = a.firstChild; c; c = b)
                b = c.nextSibling,
                3 != c.nodeType && (c == a.firstChild ? Ij(c, a) : Jj(c, a),
                yt(c))
        };
        var zt = function(a, b) {
            this.K = a || null;
            this.T = b || xp.ea();
            this.C = this.s = this.J = null;
            this.l = this.j = !1;
            this.o = null;
            this.g = [];
            this.h = 0
        }
          , At = function(a, b) {
            a.j || (a.J = b)
        }
          , Bt = function(a, b, c) {
            a.s = c ? (0,
            _.w)(b, c) : b
        }
          , Ct = function(a, b, c) {
            a.C = c ? (0,
            _.w)(b, c) : b
        }
          , Dt = function(a, b) {
            a.j || (a.j = !0,
            a.M = b,
            a.h++,
            a.o = a.J,
            a.B())
        };
        zt.prototype.stop = function() {
            this.h++;
            this.j = !1;
            this.g = []
        }
        ;
        var Et = function(a) {
            if (!a.j)
                return null;
            for (var b = !1, c = 0; c < a.g.length; ++c)
                if (a.g[c].target === a) {
                    a.g[c].ready = !1;
                    a.g[c].Ih = a.h + 1;
                    b = !0;
                    break
                }
            b || a.g.push({
                target: a,
                ready: !1,
                Ih: a.h + 1
            });
            return (0,
            _.w)(a.B, a, a, a.h + 1)
        }
          , Ft = function(a) {
            if (!a.j)
                return !0;
            for (var b = 0; b < a.g.length; ++b)
                if (a.g[b].target === a && a.g[b].Ih == a.h)
                    return a.g[b].ready;
            return !0
        };
        zt.prototype.B = function(a, b) {
            if (this.j) {
                if (a)
                    for (var c = 0; c < this.g.length; ++c)
                        if (this.g[c].target === a) {
                            this.g[c].ready = !0;
                            break
                        }
                this.l || this.T.add((0,
                _.w)(this.O, this, b || this.h))
            }
        }
        ;
        zt.prototype.O = function(a) {
            if (this.h != a)
                return !1;
            a = this.o;
            if (a == Gt)
                return this.stop(),
                this.s && this.s.call(this.K, this, this.M),
                !1;
            this.l = !0;
            try {
                var b = a.call(this.K, this, this.M);
                if (!b)
                    throw Error();
            } catch (c) {
                this.stop();
                a = c;
                if (this.C)
                    this.C.call(this.K, a, this, this.M);
                else
                    throw a;
                return !1
            } finally {
                this.l = !1
            }
            b != Ht && (this.o = b,
            this.h++,
            this.B());
            return !1
        }
        ;
        var Ht = function() {}
          , Gt = function() {};
        var Jt = function(a, b, c, d, e) {
            b = b || {};
            this.O = e || [];
            this.s = [];
            this.M = [];
            It(this, a || document.documentElement, void 0 === b.uh || !!b.uh);
            this.B = c || nt;
            this.K = b.oj;
            this.j = this.g = this.o = this.ad = null;
            this.C = !!b.jk;
            this.ta = !!b.ik;
            this.W = this.C ? 27 : 13;
            this.T = !0;
            this.J = [];
            this.l = new zt(this,d)
        }, Kt = function(a, b, c, d) {
            a.l.j || (b = {
                Gh: b,
                Ah: c,
                Ra: [],
                ph: [],
                dc: [],
                textLength: 0,
                size: 0,
                continuous: !0
            },
            a.ad = null,
            At(a.l, a.h),
            Bt(a.l, d),
            Ct(a.l, (0,
            _.w)(function(e) {
                this.vj(e);
                d()
            }, a)),
            Dt(a.l, b))
        }, Lt = function(a, b) {
            return 0 < a.Ra.length ? new b(a.Ra,a.dc.join(""),a.ph,a.textLength,a.size) : null
        }, Mt = function(a, b) {
            if (!a.j)
                return a.ad = Lt(b, a.B),
                !0;
            if (!b.continuous && 0 < b.Ra.length)
                return a.ad = Lt(b, a.B),
                !0;
            b.continuous = a.j.kh;
            a: {
                var c = a.j;
                var d = a.W;
                if (b.size > b.Ah || b.textLength > b.Gh)
                    c = !1;
                else {
                    var e = c.size
                      , f = c.text.length;
                    if (0 != b.Ra.length && (e += 1 == b.Ra.length ? b.size + d + d : b.size + d,
                    f += b.textLength,
                    e > b.Ah || f > b.Gh)) {
                        c = !1;
                        break a
                    }
                    b.size = e;
                    b.textLength = f;
                    b.Ra.push(c.node);
                    b.ph.push(c.text);
                    d = b.Ra.length - 1;
                    0 == d ? b.dc.push(c.Ze) : (1 == d && (b.dc[0] = "<a i=0>" + b.dc[0] + "</a>"),
                    b.dc.push("<a i=" + d + ">"),
                    b.dc.push(c.Ze),
                    b.dc.push("</a>"));
                    c = !0
                }
            }
            if (c)
                return a.j = null,
                !1;
            a.ad = Lt(b, a.B);
            return !0
        }, Nt = function(a, b, c) {
            var d = rt(b, c);
            d && (0,
            _.bc)(_.tj(d)) && a.J.push({
                node: b,
                oi: c,
                text: d
            })
        }, Vt, St, Pt, Rt, It, Tt, Qt, Ot;
        Jt.prototype.h = function(a, b) {
            var c = this;
            if (this.j && Mt(this, b))
                return Gt;
            if (!this.g) {
                this.T = !!this.s.length;
                if (!this.s.length && (a = this.J.shift()))
                    return this.j = {
                        kh: !1,
                        node: lt(a.node, a.oi),
                        text: a.text,
                        Ze: _.xj(a.text),
                        size: this.C ? _.$c(a.text).length : a.text.length
                    },
                    b.continuous = !1,
                    Mt(this, b),
                    Gt;
                a = this.s.shift() || this.M.shift();
                if (!a)
                    return this.j = null,
                    Mt(this, b),
                    Gt;
                this.o = [a.hk];
                this.g = new Gp(a.root)
            }
            this.g.next();
            if (this.g.done)
                return this.g = null,
                b.continuous = !1,
                this.h;
            a = this.g.node();
            var d = this.g.g.g;
            if (-1 == d)
                return Ot(this),
                Pt(a) || (b.continuous = !1),
                this.h;
            Qt(this, a);
            d = 1 == d;
            var e = Rt(a);
            if ((e || d) && this.T && !St(a))
                return It(this, a, Tt(this), !0),
                this.g.g.Mb(),
                Ot(this),
                this.h;
            if (d && Tt(this) && (this.ta && Nt(this, a, "title"),
            Nt(this, a, "alt"),
            Nt(this, a, "placeholder"),
            Nt(this, a, "aria-label"),
            Nt(this, a, "aria-placeholder"),
            Nt(this, a, "aria-roledescription"),
            Nt(this, a, "aria-valuetext"),
            Hp(this.g)))
                for (var f = a.firstChild; f; ) {
                    if (3 == f.nodeType) {
                        var g = f.nodeValue.split("\n");
                        if (2 < g.length || 2 == g.length && "" != (0,
                        _.bc)(g[0]) && "" != (0,
                        _.bc)(g[1])) {
                            f.nodeValue = g[0];
                            for (var k = 1; k < g.length; ++k) {
                                var l = _.E(a).createElement("font");
                                this.O.push(l);
                                Jj(l, f);
                                f = l;
                                Jj(_.E(a).createTextNode("\n" + g[k]), f);
                                f = f.nextSibling
                            }
                        }
                    }
                    f = f.nextSibling
                }
            a.shadowRoot && Array.from(a.shadowRoot.childNodes).forEach(function(n) {
                It(c, n, Tt(c))
            });
            if (e) {
                this.g.g.Mb();
                if (Tt(this)) {
                    var m = rt(a);
                    if ((0,
                    _.bc)(_.tj(m)) && (this.j = {
                        kh: !0,
                        node: lt(a),
                        text: m,
                        Ze: _.xj(m),
                        size: this.C ? _.$c(m).length : m.length
                    },
                    Mt(this, b)))
                        return Ot(this),
                        Gt
                }
                Ot(this);
                return this.h
            }
            if (d) {
                if (_.Ut(a) || !a.firstChild && "IFRAME" != a.tagName)
                    return b.continuous = b.continuous && !!Dp[a.tagName],
                    this.g.g.Mb(),
                    Ot(this),
                    this.h;
                if ("IFRAME" == a.tagName) {
                    try {
                        a.src.match(/https?:\/\//) && _.If(a.src.match(_.Hf)[3] || null) != window.location.hostname || (m = _.Qj(a).documentElement) && It(this, m, Tt(this))
                    } catch (n) {}
                    b.continuous = !1;
                    this.g.g.Mb();
                    Ot(this);
                    return this.h
                }
                Tt(this) && Pt(a) ? this.K && "A" == a.tagName && a.href && this.K(a) : b.continuous = !1;
                return this.h
            }
            this.g.g.Mb();
            Ot(this);
            return this.h
        }
        ;
        _.Ut = function(a) {
            return qt(a) || 3 != a.nodeType && (!a.tagName || Cp[a.tagName] || Dp[a.tagName] || yl(a, "skiptranslate"))
        }
        ;
        Vt = function(a) {
            var b = _.E(a);
            return b.defaultView && b.defaultView.getComputedStyle ? b.defaultView.getComputedStyle(a, null) : a.currentStyle
        }
        ;
        St = function(a) {
            return 3 == a.nodeType ? !0 : 1 != a.nodeType ? !1 : a.offsetWidth && a.offsetHeight ? !0 : (a = Vt(a),
            !!a && "none" != a.display && "hidden" != a.visibility)
        }
        ;
        Pt = function(a) {
            if (3 == a.nodeType)
                return !0;
            if (1 != a.nodeType)
                return !1;
            var b = Vt(a);
            return !!Bp[a.tagName] && (!b || !b.display || "inline" == b.display)
        }
        ;
        Rt = function(a) {
            return !!a && (3 == a.nodeType && "string" === typeof a.nodeValue || "TITLE" == a.tagName && "string" === typeof a.value || "TEXTAREA" == a.tagName && yl(a, "translate") || "INPUT" == a.tagName && (Ep[a.type] || yl(a, "translate")))
        }
        ;
        It = function(a, b, c, d) {
            (d ? a.M : a.s).push({
                root: b,
                hk: void 0 === c || c
            })
        }
        ;
        Tt = function(a) {
            return a.o[a.o.length - 1]
        }
        ;
        Qt = function(a, b) {
            b = !qt(b) && (b.nodeType == Wi && Tt(a) || !(yl(b, "notranslate") || b.attributes && b.attributes.translate && "no" == b.attributes.translate.value) && (yl(b, "translate") || !!b.attributes && !!b.attributes.translate && "yes" == b.attributes.translate.value || Tt(a)));
            a.o.push(b)
        }
        ;
        Ot = function(a) {
            a.o.pop()
        }
        ;
        _.Zo.attach(5762, Jt.prototype, {
            vj: 1
        });
        var Wt = function() {
            _.y.call(this);
            this.g = []
        };
        _.u(Wt, _.y);
        Wt.prototype.restore = function() {
            _.ng(this.h, 0, this)
        }
        ;
        Wt.prototype.h = function() {
            for (var a = 0; a < this.g.length; ++a)
                _.Kj(this.g[a]);
            this.g = []
        }
        ;
        Wt.prototype.L = function() {
            _.y.prototype.L.call(this);
            this.restore()
        }
        ;
        var Xt = function(a) {
            var b = new _.yf;
            ck(a, function(c) {
                if (Lj(c))
                    b.add(c);
                else {
                    a: {
                        var d;
                        if (_.Ec && !(_.B && _.Ac("9") && !_.Ac("10") && _.p.SVGElement && c instanceof _.p.SVGElement) && (d = c.parentElement)) {
                            c = d;
                            break a
                        }
                        d = c.parentNode;
                        c = Lj(d) ? d : null
                    }
                    null != c && b.add(c)
                }
            });
            return b
        };
        var Yt = function(a) {
            this.h = !0;
            this.l = a;
            this.j = !1;
            this.g = []
        };
        Yt.prototype.wa = function() {
            return this.g.join("")
        }
        ;
        var Zt = function(a, b) {
            this.o = a;
            this.l = !0;
            this.j = b;
            this.g = null;
            this.h = 0
        }
          , $t = function(a, b) {
            return a.l ? (b((0,
            _.w)(a.s, a), a.o, a.j ? "en" : ""),
            !0) : !1
        };
        Zt.prototype.s = function(a, b, c) {
            this.g = b;
            this.h = c;
            a()
        }
        ;
        var au = function(a, b) {
            this.l = a;
            this.K = !!b;
            this.g = this.B = 0;
            this.o = this.j = -1;
            this.s = this.C = this.h = 0
        }
          , du = function(a, b, c) {
            a.K && (b -= 9);
            for (var d = "", e = 0, f = a.B; f < a.l.length; ++f) {
                var g = a.l.charAt(f)
                  , k = g.charCodeAt(0);
                e++;
                a.h += a.K ? 127 >= k ? 32 >= k || bu[k] ? 3 : 1 : 2047 >= k || 55296 <= k && 56319 >= k || 56320 <= k && 57343 >= k ? 6 : 9 : 1;
                k = a.h >= b;
                cu[g] ? (a.o = f,
                a.C = a.h,
                k = k || e > c) : " " == g && (a.j = f,
                a.s = a.h,
                k = k || e > c);
                if (k)
                    return 0 <= a.o ? (d = a.l.substring(a.g, a.o + 1),
                    a.h -= a.C,
                    a.g = a.o + 1,
                    a.o >= a.j ? (a.j = -1,
                    a.s = 0) : a.s -= a.C,
                    a.o = -1,
                    a.C = 0) : 0 <= a.j ? (d = a.l.substring(a.g, a.j + 1),
                    a.h -= a.s,
                    a.g = a.j + 1,
                    a.j = -1,
                    a.s = 0) : (d = a.l.substring(a.g, f + 1),
                    a.h = 0,
                    a.g = f + 1,
                    a.o = a.j = -1,
                    a.s = a.C = 0),
                    a.B = f + 1,
                    d
            }
            a.g < a.l.length && (d = a.l.substring(a.g),
            a.g = a.l.length);
            return d
        }
          , cu = _.Lo(". , ; : \\? !".split(" "))
          , bu = _.Lo([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);
        var eu = function(a, b, c, d, e, f) {
            this.C = d || function() {}
            ;
            this.Db = f || function() {}
            ;
            this.W = !!e;
            this.j = a.g.Af;
            this.l = 0;
            this.T = function() {}
            ;
            this.K = c;
            this.M = this.h = this.o = 0;
            this.g = null;
            this.O = 0;
            this.ba = !1;
            this.aa = a.g.yf;
            this.ta = [];
            this.X = 0;
            this.Z = a.g.Qd;
            this.s = up(a);
            this.Na = this.W ? 1 : 6;
            this.xa = a.g.Rf;
            this.V = b;
            this.B = [];
            this.gb = a
        }
          , fu = function(a, b) {
            var c = 0;
            a.T = (0,
            _.w)(function() {
                ++c == this.B.length && b()
            }, a)
        }
          , gu = function(a, b, c) {
            a.C = function() {}
            ;
            a.V = b;
            a.g = null;
            a.X = 0;
            a.B = [];
            a.T = function() {}
            ;
            a.K = c
        }
          , hu = function(a, b, c) {
            if (0 == a.h && (a.h = b ? 860 : a.s,
            !c || c <= a.s)) {
                a.o = a.h;
                return
            }
            do
                b = a.h,
                a.h < a.s && (a.h *= a.Na,
                a.h > a.s && (a.h = a.s));
            while (b != a.h && c && a.h < c);
            a.o = a.h
        }
          , iu = function(a, b) {
            var c = null != b
              , d = !c && !a.ba;
            (d || c) && a.C(100, d, b)
        }
          , ju = function(a) {
            return a.Z ? a.g.Z : a.g.wa().length
        }
          , ku = function(a, b, c, d, e) {
            return new Jt(a.V.shift(),{
                jk: a.Z,
                oj: b,
                uh: !0,
                ik: !!c
            },function() {
                var f = Array.prototype.slice.call(arguments);
                return new nt(f.shift(),f.shift(),f.shift(),f.shift(),f.shift(),c,d)
            }
            ,a.K,e)
        }
          , nu = function(a, b, c) {
            if (0 < a.aa && lu(b) >= a.aa)
                return !0;
            if (ju(a) > a.h) {
                if (0 < lu(b))
                    return !0;
                hu(a, c, ju(a));
                for (var d = a.g.wa(), e = new au(d,a.Z), f; f = du(e, a.h, a.j); )
                    if (b.l.push(new Zt([f],!1)),
                    a.l += f.length,
                    a.j -= f.length,
                    0 >= a.j) {
                        b.K = d.substring(e.g);
                        break
                    } else
                        hu(a, c);
                mu(b, a.g, !0);
                a.g = null;
                return !0
            }
            if (ju(a) > a.o)
                return !0;
            mu(b, a.g, !0);
            a.o -= ju(a) + a.xa;
            a.l += a.g.M;
            a.j -= a.g.M;
            a.g = null;
            return !1
        };
        var ou = function(a, b) {
            _.y.call(this);
            this.l = b;
            this.j = {
                rootMargin: a
            };
            this.g = new IntersectionObserver((0,
            _.w)(this.h, this),this.j)
        };
        _.u(ou, _.y);
        ou.prototype.L = function() {
            _.y.prototype.L.call(this);
            this.g = null
        }
        ;
        ou.prototype.h = function(a) {
            for (var b = 0; b < a.length; b++)
                if (0 < a[b].intersectionRatio) {
                    this.l();
                    break
                }
        }
        ;
        var pu = function(a, b, c, d, e, f, g, k) {
            this.l = a;
            this.g = b;
            this.C = [];
            this.K = null;
            this.j = c;
            this.h = d;
            this.P = e;
            this.O = f;
            this.W = g;
            this.B = this.o = null;
            this.s = k || null;
            this.T = this.J = !1;
            this.M = {}
        }
          , qu = function(a) {
            for (var b = new _.yf, c = 0; c < a.length; c++) {
                for (var d = a[c], e = new _.yf, f = 0; f < d.g.length; f++) {
                    var g = d.g[f].node;
                    null != g && e.add(g)
                }
                d = b;
                e = Ti(e);
                f = e.length;
                for (g = 0; g < f; g++)
                    d.add(e[g]);
                d.size = d.g.size
            }
            return b
        };
        pu.prototype.trackVisibility = function(a) {
            a = this.o = new ou("200px",(0,
            _.w)(this.Z, this, a));
            var b = Xt(qu([].concat(this.g, this.C)));
            ck(b, (0,
            _.w)(a.g.observe, a.g));
            a = this.B = new ou("0px",(0,
            _.w)(this.V, this));
            b = Xt(qu([].concat(this.g, this.C)));
            ck(b, (0,
            _.w)(a.g.observe, a.g))
        }
        ;
        pu.prototype.Z = function(a) {
            this.o && (this.o.g.disconnect(),
            this.o = null);
            a()
        }
        ;
        pu.prototype.V = function() {
            this.J = !0;
            ru(this);
            !this.T && this.s && this.s.l()
        }
        ;
        var ru = function(a) {
            a.B && (a.B.g.disconnect(),
            a.B = null)
        };
        pu.prototype.ta = function() {
            this.J && !this.T && this.s && this.s.j();
            this.o && (this.o.g.disconnect(),
            this.o = null);
            ru(this)
        }
        ;
        var mu = function(a, b, c) {
            c ? (a.g.push(b),
            a.M[b.wa()] = !0) : a.C.push(b)
        }
          , lu = function(a) {
            return a.g.length + a.C.length
        }
          , su = function(a) {
            if (0 == a.l.length) {
                for (var b = [], c = 0; c < a.g.length; ++c)
                    b.push(a.g[c].wa());
                a.l.push(new Zt(b,!1))
            }
        };
        pu.prototype.translate = function(a) {
            function b() {
                d++;
                d == c && e()
            }
            su(this);
            for (var c = 0, d = 0, e = function() {}, f = this.j, g = this.h, k = this.P, l = this.O, m = this.W, n = 0; n < this.l.length; ++n)
                $t(this.l[n], function(q, r, z) {
                    q = f.gb.translate(_.yb(q, b), r, z || g, k, ++f.X, l, m, f.W);
                    f.ta.push(q);
                    return q
                }) && c++;
            0 != c && (e = Et(a));
            return c
        }
        ;
        var tu = function(a, b) {
            _.y.call(this);
            this.g = [];
            this.j = [];
            this.h = a;
            this.P = b
        };
        _.u(tu, _.y);
        tu.prototype.l = function(a) {
            var b = (0,
            _.bc)(a.href);
            0 == b.indexOf("javascript:") || 0 <= b.indexOf("#") || (this.j.push(a.href),
            this.g.push(a),
            a.href = b + "#googtrans/" + this.h + "/" + this.P)
        }
        ;
        tu.prototype.L = function() {
            _.y.prototype.L.call(this);
            this.restore()
        }
        ;
        tu.prototype.restore = function() {
            if (this.g.length) {
                for (var a = 0; a < this.g.length; ++a)
                    this.g[a].href = this.j[a];
                this.g = [];
                this.j = []
            }
        }
        ;
        var uu = function(a, b) {
            _.y.call(this);
            this.g = a;
            this.h = _.Jb.test(b) ? "translated-rtl" : "translated-ltr";
            a = [].concat(this.g);
            for (b = 0; b < a.length; ++b)
                Lj(a[b]) && _.R(a[b], this.h)
        };
        _.u(uu, _.y);
        uu.prototype.L = function() {
            _.y.prototype.L.call(this);
            this.restore()
        }
        ;
        uu.prototype.restore = function() {
            for (var a = [].concat(this.g), b = 0; b < a.length; ++b)
                Lj(a[b]) && _.Al(a[b], this.h)
        }
        ;
        _.vu = function(a, b, c, d, e, f, g, k, l, m) {
            _.y.call(this);
            this.C = a;
            this.wb = b;
            this.ya = c || null;
            this.aa = m || null;
            this.J = null;
            this.Sa = !!d;
            this.Sb = e || "transparent";
            this.Ob = !!f;
            this.K = [];
            this.ba = this.M = this.g = !1;
            this.j = k || new _.wt;
            this.xc = !k;
            this.X = g || xp.ea();
            this.Ta = new Wt;
            this.Na = this.la = this.T = !1;
            this.ob = this.l = .5;
            this.$a = .01;
            this.B = new _.zp(this.l);
            this.Z = (this.s = this.V = !!l) ? new MutationObserver((0,
            _.w)(this.Si, this)) : null;
            this.P = this.h = null;
            _.H(window, "blur", this.Tg, !0, this);
            _.H(window, "focus", this.Ug, !0, this)
        }
        ;
        _.u(_.vu, _.y);
        _.h = _.vu.prototype;
        _.h.Va = function() {
            return this.h ? this.h : ""
        }
        ;
        _.h.ga = function() {
            return this.P ? this.P : ""
        }
        ;
        _.h.ti = function(a) {
            this.rj.apply(this, arguments);
            this.o && this.o(0, !1, 1)
        }
        ;
        _.h.Cg = function(a) {
            this.sj.apply(this, arguments);
            this.o && this.o(0, !1, 1)
        }
        ;
        _.h.ui = function(a) {
            this.tj.apply(this, arguments);
            this.o && this.o(0, !1, 1)
        }
        ;
        _.h.vi = function(a) {
            this.uj.apply(this, arguments);
            this.o && this.o(0, !1, 1)
        }
        ;
        _.h.translate = function(a, b, c, d, e) {
            if (d || a != this.h || b != this.P)
                wu(this),
                this.xc && (this.j = new _.wt);
            else if (this.g)
                return;
            this.o = c;
            this.uc = e;
            this.s = this.V;
            this.Z && this.Z.observe(document.body, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            });
            this.g = !0;
            this.h = a;
            this.P = b;
            this.Sa && (this.J = new tu(a,b));
            this.Na = "auto" == this.h;
            this.ya && (c = this.ya,
            a && (c.s = a),
            b && (c.C = b));
            this.xa = new uu(this.C,this.P);
            this.O = xu(this);
            (a = this.C instanceof Node ? this.C : null) && yu(a, this.P)
        }
        ;
        var xu = function(a) {
            var b = new zt(a,a.X);
            At(b, a.Sg);
            Ct(b, (0,
            _.w)(a.ti, a));
            Dt(b, new eu(a.wb,[].concat(a.C),a.X,a.o,a.s,a.uc));
            return b
        };
        _.vu.prototype.restore = function() {
            wu(this);
            this.Ta.restore();
            var a = this.C instanceof Node ? this.C : null;
            a && yu(a, this.Va())
        }
        ;
        _.vu.prototype.L = function() {
            _.y.prototype.L.call(this);
            this.restore();
            _.Wd(window, "blur", this.Tg, !0, this);
            _.Wd(window, "focus", this.Ug, !0, this)
        }
        ;
        var zu = function(a, b, c, d) {
            var e = Xo(a.j.h)
              , f = new zt(a,b.K);
            b.B.push(f);
            Bt(f, b.T);
            hu(b, e);
            At(f, d || a.Og);
            b = c || new pu([],[],b,a.Va(),a.ga(),a.ba,a.M,a.aa);
            Ct(f, a.aj, a);
            a.s && Bt(f, b.ta, b);
            Dt(f, b)
        };
        _.h = _.vu.prototype;
        _.h.aj = function(a, b, c) {
            c.ta();
            this.M ? this.vi(a) : this.ui(a);
            c.j.T()
        }
        ;
        _.h.Ug = function() {
            this.T = !1;
            this.W = 0;
            yp(this.B, this.l)
        }
        ;
        _.h.Tg = function(a) {
            a.target == window && (this.T = !0,
            this.W = 0,
            yp(this.B, .01))
        }
        ;
        _.h.Si = function(a) {
            if (this.g && this.s) {
                for (var b = 0; b < a.length; b++)
                    if (a[b].target && a[b].target.className && "string" === typeof a[b].target.className && (0 <= a[b].target.className.indexOf("translate") || 0 == a[b].target.className.indexOf("goog-")))
                        return;
                this.X.add((0,
                _.w)(this.Sj, this))
            }
        }
        ;
        _.h.Sj = function() {
            this.M = !0;
            this.O.stop();
            this.O = xu(this);
            return !1
        }
        ;
        _.h.Sg = function(a, b) {
            fu(b, Et(a));
            zu(this, b);
            return this.ej
        }
        ;
        _.h.ej = function(a, b) {
            if (!this.g)
                return Gt;
            if (!Ft(a))
                return Ht;
            if (!this.s)
                for (a = 0; a < this.K.length; ++a) {
                    var c = (0,
                    _.w)(this.sg, this, b, this.K[a]);
                    b.K.add(c)
                }
            return this.dj
        }
        ;
        _.h.Lg = function(a, b) {
            if (this.W && !this.T) {
                a = (new Date).getTime() - this.W;
                var c = this.l;
                900 > a && .01 < c ? c = Math.max(.9 * c, .01) : 1100 < a && .5 > c && (c = Math.min(1.5 * c, .5));
                this.l = c;
                this.la ? this.$a = .01 : this.ob = this.l
            }
            this.M = this.g = !0;
            this.W = (new Date).getTime();
            this.wc != (a = document.body.innerText || document.body.textContent || document.body.innerHTML) ? (this.wc = a,
            a = !0) : a = !1;
            a ? (this.la = !1,
            this.l = this.ob,
            this.T || yp(this.B, this.l),
            gu(b, [].concat(this.C), this.B),
            a = new zt(this,this.B),
            At(a, this.Sg),
            Ct(a, (0,
            _.w)(this.Cg, this)),
            Dt(a, b),
            this.O = a) : (this.la = !0,
            this.l = this.$a,
            this.T || yp(this.B, this.l),
            a = new zt(this,this.B),
            At(a, this.Lg),
            Ct(a, (0,
            _.w)(this.Cg, this)),
            Dt(a, b),
            this.O = a);
            return Gt
        }
        ;
        _.h.dj = function(a, b) {
            if (!this.g)
                return Gt;
            this.M = this.g = !1;
            this.Na ? iu(b, !0) : (iu(b),
            b.Db(b.l));
            if (this.Ob)
                return this.Lg;
            for (a = 0; a < b.B.length; ++a)
                b.B[a].stop();
            for (a = 0; a < b.ta.length; ++a)
                tp(b.gb, b.ta[a]);
            return Gt
        }
        ;
        var Bu = function(a, b, c) {
            a: {
                var d = Au(a)
                  , e = a.ya
                  , f = a.Sb
                  , g = a.Ta.g;
                b = Et(b);
                if (!c.J) {
                    if (0 == c.V.length) {
                        0 == c.l && 0 == c.X && c.C(0, !0);
                        c = !1;
                        break a
                    }
                    c.J = ku(c, d, e, f, g)
                }
                c.la = !0;
                Kt(c.J, c.j, c.h, b);
                c = !0
            }
            return c ? a.Og : a.Wd
        }
          , Au = function(a) {
            return a.Sa ? (0,
            _.w)(a.J.l, a.J) : function() {}
        };
        _.h = _.vu.prototype;
        _.h.Og = function(a, b) {
            if (!this.g)
                return Gt;
            var c = b.j;
            if (null == c.g) {
                if (!c.la)
                    return Bu(this, a, b.j);
                if (!Ft(a))
                    return Ht;
                c.la = !1;
                c.g = c.J.ad || null;
                var d = c.g ? c.g : c.J = null;
                if (!d)
                    return Bu(this, a, b.j);
                this.K.push(d);
                var e = d.wa();
                if (this.j.has(e, !this.s) || null != b.M[e] && b.M[e])
                    return e = c.g.M,
                    c.l += e,
                    c.j -= e,
                    c.g = null,
                    this.s && mu(b, d, !1),
                    Bu(this, a, b.j);
                this.j.g[d.wa()] = null
            }
            0 < lu(b) && yp(this.B, .5);
            return nu(c, b, Xo(this.j.h)) ? this.Wd : Bu(this, a, b.j)
        }
        ;
        _.h.Wd = function(a, b) {
            if (!this.g || 0 == lu(b))
                return Gt;
            zu(this, b.j);
            return this.s ? (b.trackVisibility(Et(a)),
            this.fj) : 0 == b.translate(a) ? Gt : this.Qg
        }
        ;
        _.h.fj = function(a, b) {
            return this.g ? Ft(a) ? 0 == b.translate(a) ? Gt : this.Qg : Ht : Gt
        }
        ;
        _.h.sg = function(a, b) {
            b.l && this.j.remove(b.j);
            if (!this.g)
                return !1;
            if (this.j.has(b.wa(), !1)) {
                var c = this.j;
                if (c.has(b.j, !1)) {
                    var d = b.j
                      , e = c.g[d];
                    e || (e = c.h[d],
                    c.g[d] = e);
                    b.h = e;
                    b.O = !0
                } else
                    c.remove(b.j),
                    b.l = !0;
                ut(b)
            } else if (c = this.j,
            b.l)
                c.remove(b.j);
            else if (b.B) {
                d = b.B.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
                b.O = !0;
                delete b.B;
                b.B = null;
                b.h = [];
                e = _.jd(document, "div");
                _.O(e, !1);
                d = _.zk(0 <= d.indexOf("<i>") ? d : "<b>" + d + "</b>");
                _.Rh(e);
                e.innerHTML = _.Sc(d);
                document.body.appendChild(e);
                d = [];
                var f;
                for (f = e.firstChild; f; f = f.nextSibling)
                    if ("I" == f.tagName)
                        var g = st(b, _.wd(f), f.innerHTML);
                    else if ("B" == f.tagName) {
                        g || (g = st(b, "", ""));
                        if (1 == b.g.length)
                            xt(g.pa, d, 0, f);
                        else {
                            var k = d;
                            var l = f;
                            var m = b.g;
                            g = g.pa;
                            for (var n = [], q = l.firstChild; q; q = r) {
                                var r = q.nextSibling;
                                yt(q)
                            }
                            for (r = l.firstChild; r; r = r.nextSibling)
                                r.attributes && r.attributes.i ? (l = parseInt(r.attributes.i.nodeValue, 10),
                                !isNaN(l) && 0 <= l && l < m.length && (m[l].te && n[l] ? n[l].ha += r.firstChild && 3 == r.firstChild.nodeType ? r.firstChild.nodeValue : _.wd(r) : n[l] = xt(g, k, l, r))) : 3 == r.nodeType && g.push({
                                    fa: -1,
                                    ha: Bj(r.nodeValue)
                                });
                            null != g && 0 < g.length && -1 == g[0].fa && (1 == g.length ? g[0].fa = 0 : (g[1].ha = g[0].ha + g[1].ha,
                            g.shift()))
                        }
                        g = void 0
                    }
                f = b.h;
                for (k = 0; k < f.length - 1; ++k)
                    m = f[k],
                    g = wj(m.pa[m.pa.length - 1].ha),
                    g = g.charCodeAt(g.length - 1),
                    12288 <= g && 12351 >= g || 65280 <= g && 65519 >= g || (m.pa[m.pa.length - 1].ha += " ");
                _.Kj(e);
                for (e = 0; e < b.g.length; ++e)
                    e < d.length && e < b.C.length && null != d[e] && (f = b.C[e],
                    k = d[e].start,
                    null != k && (m = f.substring(0, f.length - vj(f).length),
                    " " == m && (m = ""),
                    m && (k.ha = m + vj(k.ha))),
                    k = d[e].end,
                    null != k && (f = f.substring(wj(f).length),
                    " " == f && (f = ""),
                    f && (k.ha = wj(k.ha) + f)));
                1 != b.h.length || b.h[0].Hf || (b.h[0].Hf = b.j);
                c.write(b.j, b.h);
                ut(b)
            }
            b.J || (this.Na = !1);
            c = b.l ? !0 : void 0;
            a.O += b.M;
            null != c && (a.ba = !0);
            b = Math.min(Math.floor(100 * a.O / a.l), 100);
            if (a.M != b || c)
                a.M = b,
                a.W ? (a.C(a.M, !0, c),
                a.Db(a.O)) : a.C(a.M, !1, c);
            return !1
        }
        ;
        _.h.Qg = function(a, b) {
            if (!this.g)
                return Gt;
            if (!Ft(a))
                return Ht;
            if (1 < lu(b)) {
                a = b.l[0];
                var c = b.g;
                if (a.j || 0 == c.length || null == a.g || 0 == a.g.length)
                    a = null;
                else {
                    for (var d = [], e = [], f = 0; f < a.g.length && f < c.length; ++f) {
                        var g = a.g[f];
                        g && g[0] && 200 == g[1] || (e.push(c[f]),
                        d.push(a.o[f]))
                    }
                    a = 0 < e.length ? {
                        Tj: new Zt(d,!0),
                        Uj: e
                    } : null
                }
                a = a ? new pu([a.Tj],a.Uj,b.j,b.h,b.P,b.O,b.W,b.s) : null;
                null != a && zu(this, b.j, a, this.Wd)
            } else {
                a = !1;
                for (c = 0; c < b.l.length; ++c)
                    d = b.l[c],
                    d.j || 200 == d.h && d.g && d.g[0] ? d = d.l = !1 : (d.j = !0,
                    d = d.l = !0),
                    a = d || a;
                if (a)
                    return this.Wd
            }
            d = this.Va();
            a = this.ga();
            if (1 < b.g.length)
                if (c = b.l[0],
                e = "auto" == d,
                d = b.g,
                200 == c.h)
                    for (f = 0; f < c.g.length && f < d.length; ++f)
                        if ((g = c.g[f]) && 200 == g[1]) {
                            var k = g[2]
                              , l = d[f]
                              , m = l
                              , n = null != k && k == a;
                            m.B = g[0];
                            void 0 !== n && (m.T = n);
                            l.J = e && null == k
                        } else
                            d[f].l = !0;
                else
                    for (a = 0; a < d.length; ++a)
                        d[a].l = !0;
            else {
                c = new Yt("auto" == d);
                for (d = 0; d < b.l.length; ++d)
                    g = b.l[d],
                    e = a,
                    f = c,
                    200 == g.h && g.g && g.g[0] ? (g = g.g[0],
                    f.g.push(g[0]),
                    g = g[2],
                    f.h = f.h && null != g && g == e,
                    null != g && (f.l = !1)) : 500 != g.h && (f.j = !0);
                null != b.K && (c.g.push(b.K),
                b.K = null);
                if (a = b.g[0])
                    d = c.h,
                    a.B = c.wa(),
                    void 0 !== d && (a.T = d),
                    a.J = c.l,
                    a.l = c.j
            }
            if (this.s) {
                a = (0,
                _.w)(this.sg, this);
                for (c = 0; c < b.g.length; c++)
                    a(b.j, b.g[c]);
                for (c = 0; c < b.C.length; c++)
                    a(b.j, b.C[c]);
                ru(b);
                b.T = !0;
                b.J && b.s && b.s.j()
            }
            return Gt
        }
        ;
        var wu = function(a) {
            a.Z && a.Z.disconnect();
            a.aa && a.aa.reset();
            a.g && (a.O.stop(),
            a.g = !1,
            a.M = !1);
            if (a.K.length) {
                for (var b = 0; b < a.K.length; ++b)
                    a.K[b].R();
                a.K = []
            }
            null != a.J && (a.J.restore(),
            a.J = null);
            null != a.xa && (a.xa.restore(),
            a.xa = null)
        }
          , yu = function(a, b) {
            a.getAttribute("xml:lang") && a.setAttribute("xml:lang", b);
            a.getAttribute("lang") && a.setAttribute("lang", b)
        };
        _.Zo.attach(3046, _.vu.prototype, {
            rj: 1,
            tj: 2,
            sj: 3,
            uj: 4
        });
        var Ii = function(a) {
            if (a && (a = String(a),
            a = a.split("."),
            a.length)) {
                for (var b = window, c = 0; c < a.length; ++c) {
                    var d = a[c];
                    if (!(d && d in b))
                        return;
                    b = b[d]
                }
                return b
            }
        };

        var Cu = function(a) {
            var b = {};
            a = _.db(a);
            for (var c = a.next(); !c.done; c = a.next())
                c = c.value,
                b[c.language] = c.name;
            return b
        };
        _.jp = function(a, b) {
            return {
                display_language: b,
                key: "AIzaSyBwiZMnpJaVvcWHlTAcFdNmtrJb_P4aLXc"
            }
        }
        ;
        _.kp = function() {
            return !1
        }
        ;
        _.lp = function(a) {
            var b = a.targetLanguages || [];
            return {
                sl: Cu(a.sourceLanguages || []),
                tl: Cu(b)
            }
        }
        ;

        _.so = function() {
            return "&ue=boq"
        }
        ;

        _.oa();

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ma("el_main");

        var Du = function(a, b) {
            function c(l) {
                for (; d < a.length; ) {
                    var m = a.charAt(d++)
                      , n = _.Bh[m];
                    if (null != n)
                        return n;
                    if (!/^[\s\xa0]*$/.test(m))
                        throw Error("aa`" + m);
                }
                return l
            }
            _.mh();
            for (var d = 0; ; ) {
                var e = c(-1)
                  , f = c(0)
                  , g = c(64)
                  , k = c(64);
                if (64 === k && -1 === e)
                    break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2),
                64 != k && b(g << 6 & 192 | k))
            }
        }, Eu = null, Fu = function() {
            Eu && (_.Xd(Eu),
            Eu = null);
            _.Ci && _.Ci.length && _.Di(_.Ci.join(""));
            _.Ci = null
        }, Gu = function() {
            _.Ci && Fu();
            _.Ci = [];
            Eu = _.H(window, "pagehide", function() {
                Fu()
            })
        }, Iu = function(a, b) {
            b = Hu(b || {}, a.j ? a.j.g() : {});
            a.h(null, b.Fb);
            return b.h()
        }, Ju = function(a) {
            return a instanceof _.Xh && a.constructor === _.Xh ? a.g : "type_error:SafeStyleSheet"
        }, Ku = function(a) {
            try {
                return a.contentWindow || (a.contentDocument ? _.id(a.contentDocument) : null)
            } catch (b) {}
            return null
        }, Lu = function() {
            var a = _.op[5];
            return new _.se(function(b, c) {
                c(a)
            }
            )
        }, Mu = function(a) {
            if (_.Ch)
                return _.p.atob(a);
            var b = "";
            Du(a, function(c) {
                b += String.fromCharCode(c)
            });
            return b
        }, Nu = function(a, b) {
            b = Ju(b);
            _.B && void 0 !== a.cssText ? a.cssText = b : _.p.trustedTypes ? _.rd(a, b) : a.innerHTML = b
        }, Ou = function(a, b) {
            b = _.F(b);
            var c = b.U;
            if (_.B && c.createStyleSheet)
                b = c.createStyleSheet(),
                Nu(b, a);
            else {
                c = _.Oi(b.U, "HEAD", void 0, void 0)[0];
                if (!c) {
                    var d = _.Oi(b.U, "BODY", void 0, void 0)[0];
                    c = b.N("HEAD");
                    d.parentNode.insertBefore(c, d)
                }
                d = b.N("STYLE");
                var e;
                (e = _.vh('style[nonce],link[rel="stylesheet"][nonce]', void 0)) && d.setAttribute("nonce", e);
                Nu(d, a);
                b.appendChild(c, d)
            }
        }, Pu = function(a) {
            return a instanceof _.Mf ? !!a.wa() : !!a
        }, Qu = function(a) {
            return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
        }, Ru = function(a) {
            return _.al(a, _.yk) ? a.wa() : a instanceof _.Lb ? _.Wa(a).toString() : "function" == typeof _.Va && a instanceof _.Va ? _.ql(_.si(a)) : "about:invalid#zSoyz"
        }, Su = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i, Tu = function(a) {
            _.al(a, _.Sh) ? a = Qu(a.wa()) : null == a ? a = "" : a instanceof _.Lc ? a = Qu(_.gj(a)) : a instanceof _.Xh ? a = Qu(Ju(a)) : (a = String(a),
            a = Su.test(a) ? a : "zSoyz");
            return a
        }, Uu, Vu = function(a, b) {
            if ((_.B || _.hc) && window.location.hostname != document.domain) {
                Uu = Uu ? Uu + 1 : 1;
                var c = "f" + Uu + "_" + _.zb().toString(36);
                window[c] = function() {
                    window[c] = void 0;
                    a.src = "javascript:void(0)";
                    b && window.setTimeout(function() {
                        b()
                    }, 0)
                }
                ;
                a.src = "javascript:void(document.write(\"<script>document.domain='" + document.domain + "';parent['" + c + "']();\x3c/script>\"))"
            } else
                b && b()
        }, Wu = function(a, b) {
            return "auto" != a && "zh-CN" != a && a == b
        }, Xu = function() {
            var a = window.location.hash.match(/google\.translate\.element\.sp=([^&]+)/);
            return a && a[1] ? a[1] : null
        }, Yu = function() {};
        Yu.prototype.h = function() {}
        ;
        var Zu = function(a) {
            a = a.split(".");
            if (3 !== a.length)
                return !1;
            a = JSON.parse(Mu(a[1]));
            return null == a || !a.exp || 1E3 * a.exp < _.zb() ? !1 : !0
        }
          , $u = function(a) {
            this.g = a
        };
        _.u($u, Yu);
        $u.prototype.h = function() {
            return Zu(this.g) ? _.zh(this.g) : Lu()
        }
        ;
        var av = function(a) {
            this.g = null;
            this.j = a
        };
        _.u(av, Yu);
        av.prototype.h = function() {
            if (null != this.g && Zu(this.g))
                return _.zh(this.g);
            this.g = null;
            return new _.se(function(a, b) {
                var c = this;
                this.j(function(d) {
                    c.g = d;
                    Zu(c.g) ? a(d) : b(_.op[5])
                }, b)
            }
            ,this)
        }
        ;
        var bv = function(a) {
            return (0,
            _.ai)('<span id="' + _.P(a.id) + '"></span>')
        }
          , cv = function(a) {
            var b = a.id
              , c = a.qh;
            return (0,
            _.ai)(_.ml(a.rh) + '<div id="' + _.P(b) + '"></div>' + _.ml(c))
        }
          , Hu = function(a) {
            var b = a.id
              , c = a.top
              , d = a.left
              , e = a.bottom
              , f = a.right;
            return (0,
            _.bi)("." + Tu(a.className) + " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" + (Pu(c) || _.cl(c, 0) ? "top:" + Tu(c) + "px; _top:expression((" + Tu(c) + "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "top:auto;") + (Pu(d) || _.cl(d, 0) ? "left:" + Tu(d) + "px; _left:expression((" + Tu(d) + "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "left:auto;") + (Pu(e) || _.cl(e, 0) ? "bottom:" + Tu(e) + "px; _top:expression((-" + Tu(e) + "-document.getElementById('" + String(b).replace(_.ol, _.il) + "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "bottom:auto;") + (Pu(f) || _.cl(f, 0) ? "right:" + Tu(f) + "px; _left:expression((-" + Tu(f) + "-document.getElementById('" + String(b).replace(_.ol, _.il) + "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "right:auto;") + "}")
        }
          , dv = function() {
            return (0,
            _.ai)('<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>')
        }
          , ev = function() {
            _.M.call(this)
        };
        _.u(ev, _.M);
        ev.prototype.N = function() {
            this.da(_.yi(dv))
        }
        ;
        ev.prototype.da = function(a) {
            this.I = a
        }
        ;
        var fv = function(a) {
            _.Al(a.A(), "goog-te-spinner-pos-show");
            _.Al(a.A().firstChild, "goog-te-spinner-animation-show")
        }
          , gv = function() {
            this.g = new ev;
            this.g.N();
            this.g.ja();
            this.h = 0
        };
        gv.prototype.reset = function() {
            this.h = 0;
            fv(this.g)
        }
        ;
        gv.prototype.l = function() {
            if (0 == this.h++) {
                var a = this.g;
                _.R(a.A(), "goog-te-spinner-pos-show");
                _.R(a.A().firstChild, "goog-te-spinner-animation-show")
            }
        }
        ;
        gv.prototype.j = function() {
            0 == --this.h && fv(this.g)
        }
        ;
        var hv = function(a, b, c, d, e, f, g, k, l, m, n) {
            _.y.call(this);
            this.ya = b || null;
            this.T = !!c;
            this.vc = d || "transparent";
            this.K = f || "";
            b = g || {
                fetchStart: 0,
                vl: 0
            };
            a = b.fetchStart || 0;
            b = b.fetchEnd || 0;
            this.M = a && b ? b - a : 0;
            this.O = Date.now() - _.wo;
            this.o = !1;
            this.g = new _.qp(e || "",void 0,f,l,m,n);
            this.J = new _.zp(1);
            this.s = new _.wt;
            this.j = null;
            this.C = !0;
            this.l = null != _.p.IntersectionObserver;
            this.B = k || null;
            this.H = new _.J(this);
            e = new _.Mo;
            f = new _.Oo((0,
            _.w)(this.g.initialize, this.g, e.register()));
            this.Cd = _.Po(f, e.delay((0,
            _.w)(this.Cd, this)));
            this.Bd = _.Po(f, e.delay((0,
            _.w)(this.Bd, this)));
            this.Dd = _.Po(f, e.delay((0,
            _.w)(this.Dd, this)));
            this.restore = _.Po(f, e.delay((0,
            _.w)(this.restore, this)));
            f.finish();
            e.finish()
        };
        _.x(hv, _.y);
        _.Zo.attach(14097, hv.prototype, {
            wf: function() {
                _.Di(this.g.h ? "te_afas" : "te_afau")
            }
        });
        _.h = hv.prototype;
        _.h.Wj = function(a) {
            this.l = a
        }
        ;
        _.h.Ja = function() {
            return this.g.h
        }
        ;
        _.h.Cd = function(a, b) {
            if (this.g.Ja()) {
                var c = this.g
                  , d = {
                    alpha: !0
                };
                d = _.jp(d, b);
                c.l.send(d, a)
            } else
                this.wf(),
                a(null)
        }
        ;
        _.h.Bd = function(a) {
            var b = document.documentElement.lang;
            if (b)
                a(b);
            else if (this.g.Ja()) {
                b = new _.wn(document.body,!1,!1,1,1);
                var c = [];
                try {
                    for (var d = 0, e = this.g.j.zf; c.length + d < e; ) {
                        var f = b.Ka();
                        if (1 == b.g && _.Ut(f))
                            b.Mb();
                        else if (3 == f.nodeType) {
                            var g = (0,
                            _.bc)(_.tj(f.nodeValue));
                            g && (c.push(g),
                            d += g.length)
                        }
                    }
                } catch (k) {
                    if (k != _.kf)
                        throw k;
                }
                _.rp(this.g, a, c.join(" "))
            } else
                this.wf(),
                a(null, !0)
        }
        ;
        _.h.Dd = function(a, b, c, d, e) {
            var f = Date.now();
            Gu();
            if (!a || Wu(a, b))
                a = "auto";
            if (e || a != this.h || b != this.P)
                this.s = new _.wt;
            this.h = a;
            this.P = b;
            this.g.Ja() ? (d = d || document.documentElement,
            this.j && this.j.R(),
            this.B.reset(),
            this.j = new _.vu(d,this.g,this.ya,this.T,this.vc,!0,this.J,this.s,this.l,this.B),
            this.j.ba = this.o,
            this.C = !0,
            this.j.translate(a, b, c, e, (0,
            _.w)(this.xj, this, f, a, b))) : (this.wf(),
            c(0, !1, !0))
        }
        ;
        _.h.Rh = function() {
            return !!this.j && this.j.g
        }
        ;
        _.h.lg = function(a) {
            this.o = a
        }
        ;
        _.h.restore = function() {
            Gu();
            this.g.Ja() && this.j && this.j.restore()
        }
        ;
        _.h.L = function() {
            Fu();
            hv.G.L.call(this);
            this.g.R();
            this.j = this.g = null;
            this.s = new _.wt
        }
        ;
        _.h.xj = function(a, b, c, d) {
            this.C && (this.C = !1,
            b = {
                sl: b,
                tl: c,
                textlen: d
            },
            this.o && (b.ctt = "1"),
            "" != this.K && (b.sp = this.K),
            b.ttt = Date.now() - a,
            b.ttl = this.O,
            this.M && (b.ttf = this.M),
            this.l && (b.sr = 1),
            _.Di("te_time", b))
        }
        ;
        var iv = function(a) {
            _.M.call(this, a);
            this.H = new _.J(this)
        };
        _.u(iv, _.M);
        iv.prototype.N = function() {
            var a = _.sh(this.g, "select");
            a.className = "goog-te-combo";
            a.setAttribute("aria-label", _.X.mg);
            this.da(a)
        }
        ;
        iv.prototype.Y = function() {
            _.M.prototype.Y.call(this);
            this.Ag()
        }
        ;
        iv.prototype.Ag = function() {
            _.H(this.A(), "change", _.So(this, "change"));
            this.dispatchEvent("load")
        }
        ;
        iv.prototype.ca = function() {
            _.M.prototype.ca.call(this);
            this.H.R();
            this.H = null
        }
        ;
        var jv = function(a, b) {
            a.A().parentNode != b && (a.A().parentNode.removeChild(a.A()),
            b.appendChild(a.A()))
        };
        _.h = iv.prototype;
        _.h.od = function(a) {
            this.g.ld(this.A());
            for (var b in a)
                if (a[b] !== Object.prototype[b]) {
                    var c = this.g.N("OPTION", {
                        value: b
                    });
                    this.g.nb(c, a[b]);
                    this.A().appendChild(c)
                }
            this.A().selectedIndex = 0
        }
        ;
        _.h.Qa = function() {
            return this.A().value
        }
        ;
        _.h.Ma = function(a) {
            if (this.A().value != a)
                for (var b = 0, c; c = this.A().options.item(b); ++b)
                    if (c.value == a) {
                        this.A().selectedIndex = b;
                        break
                    }
        }
        ;
        _.h.Ed = function(a) {
            if ("undefined" == _.sb(a))
                return this.A().options.item(this.A().selectedIndex).text;
            for (var b = 0, c; c = this.A().options.item(b); ++b)
                if (c.value == a)
                    return c.text
        }
        ;
        _.h.qa = function(a) {
            this.A().disabled = !a
        }
        ;
        var kv = function(a) {
            iv.call(this, a)
        };
        _.u(kv, iv);
        kv.prototype.pd = function(a) {
            this.od.call(this, a)
        }
        ;
        var lv = function(a, b) {
            iv.call(this, b);
            this.F = a && _.li(a) || {};
            this.F.Of = this.F.Of || 11;
            this.F.qe = 0 != this.F.qe;
            this.F.rb || (this.F.rb = _.Ho)
        };
        _.u(lv, iv);
        _.h = lv.prototype;
        _.h.Od = function() {
            throw Error("Da");
        }
        ;
        _.h.N = function() {
            this.Od();
            this.s = this.A();
            this.j = _.Ej("IFRAME", {
                frameBorder: 0,
                "class": "goog-te-menu-frame skiptranslate",
                title: _.X.mg
            });
            this.j.style.visibility = "visible";
            _.O(this.j, !1);
            document.body.appendChild(this.j)
        }
        ;
        _.h.Ag = function() {
            var a = _.Jb.test(_.W) ? "rtl" : "ltr"
              , b = _.eg(this.F.rb)
              , c = _.T(this, "menuBody");
            this.H.D(this.j, "load", this.Sh);
            Vu(this.j, (0,
            _.w)(function() {
                var d = _.Qj(this.j);
                var e = (0,
                _.ai)('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' + _.P(Ru(b)) + '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' + _.P(a) + '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' + _.P(c) + '" class="goog-te-menu"></div></body>');
                e = _.ti(e);
                d.write(_.Sc(e));
                d.close()
            }, this))
        }
        ;
        _.h.Sh = function() {
            this.h = new _.cd(_.Qj(this.j));
            this.O = this.h.A(_.T(this, "menuBody"));
            this.H.D(this.s, "click", this.jf);
            _.B ? this.H.D(this.j, "blur", this.Vd) : this.H.D(Ku(this.j), "blur", this.Vd);
            this.dispatchEvent("load")
        }
        ;
        _.h.ca = function() {
            iv.prototype.ca.call(this);
            _.Kj(this.j);
            this.s = this.X = this.o = this.O = this.h = this.j = null
        }
        ;
        _.h.Pg = function(a) {
            this.l != a.currentTarget.value && (this.Ma(a.currentTarget.value),
            this.dispatchEvent("change"));
            this.Vd()
        }
        ;
        _.h.jf = function() {
            mv(this);
            Ku(this.j).focus();
            this.aa = !0
        }
        ;
        _.h.Vd = function() {
            this.aa && (this.aa = !1,
            mv(this, !1),
            _.id(_.E(this.s)).focus())
        }
        ;
        _.h.Lf = function() {}
        ;
        _.h.Mf = function() {}
        ;
        var mv = function(a, b) {
            if ("undefined" == typeof b || b) {
                a.Mf();
                b = _.Ok(a.s, window);
                var c = b.y + a.s.offsetHeight
                  , d = b.y - a.B.height
                  , e = b.x
                  , f = b.x + a.s.offsetWidth - a.B.width;
                if (_.B && !_.Ac("7.0")) {
                    var g = document.body;
                    c -= g.offsetTop;
                    d -= g.offsetTop;
                    e -= g.offsetLeft;
                    f -= g.offsetLeft
                } else
                    g = _.Ri(document),
                    c -= g.y,
                    d -= g.y,
                    e -= g.x,
                    f -= g.x;
                g = _.hd(window);
                b.y = b.y <= g.height - a.B.height ? c : d;
                b.y > g.height - a.B.height && (b.y = g.height - a.B.height);
                0 > b.y && (b.y = 0);
                _.Jb.test(_.W) ? b.x = 0 <= f ? f : e : b.x = e <= g.width - a.B.width ? e : f;
                b.x > g.width - a.B.width && (b.x = g.width - a.B.width);
                0 > b.x && (b.x = 0);
                _.Hk(a.j, b);
                _.O(a.j, !0);
                nv(a)
            } else
                a.Lf(),
                _.O(a.j, !1)
        };
        _.h = lv.prototype;
        _.h.Qa = function() {
            return this.l
        }
        ;
        _.h.od = function(a) {
            this.h.ld(this.O);
            _.O(this.j, !0);
            this.ba = a;
            this.o = [];
            for (var b in a)
                if (a[b] !== Object.prototype[b])
                    if ("---" == a[b]) {
                        var c = {
                            link: this.h.N("DIV", {
                                className: "goog-te-menu2-separator",
                                value: b
                            }),
                            lj: !0
                        };
                        this.o.push(c)
                    } else {
                        c = {
                            link: this.h.N("A", {
                                className: "goog-te-menu2-item-selected",
                                href: "javascript:void(0)",
                                value: b
                            })
                        };
                        this.o.push(c);
                        var d = this.h.N("DIV", {
                            style: "white-space:nowrap"
                        });
                        this.h.appendChild(c.link, d);
                        this.F.qe && this.h.appendChild(d, this.h.N("SPAN", {
                            className: "indicator"
                        }, "\u203a"));
                        this.h.appendChild(d, this.h.N("SPAN", {
                            className: "text"
                        }, a[b]));
                        this.H.D(c.link, "click", this.Pg)
                    }
            a = this.o.length - 1;
            a = Math.round((a - a % this.F.Of) / this.F.Of) + 1;
            this.X = this.h.N("TABLE", {
                cellspacing: 0,
                cellpadding: 0,
                border: 0
            });
            c = this.h.N("TBODY");
            b = this.h.N("TR", {
                valign: "top"
            });
            this.O.className = "goog-te-menu2";
            this.h.appendChild(this.O, this.X);
            this.h.appendChild(this.X, c);
            this.h.appendChild(c, b);
            for (d = c = 0; c < a; ++c) {
                var e = this.h.N("TD");
                this.h.appendChild(b, e);
                for (var f = 0; 11 > f && d < this.o.length; ++f,
                ++d)
                    this.h.appendChild(e, this.o[d].link);
                c != a - 1 && (e = this.h.N("TD", {
                    "class": "goog-te-menu2-colpad"
                }, "\u00a0"),
                this.h.appendChild(b, e))
            }
            this.l = null;
            this.Ma(this.o[0].link.value);
            nv(this);
            _.O(this.j, !1)
        }
        ;
        _.h.Ed = function(a) {
            return this.ba["undefined" == _.sb(a) ? this.l : a]
        }
        ;
        _.h.Nf = function() {}
        ;
        _.h.Ma = function(a) {
            if (this.l != a) {
                this.Ed(a) && (this.l = a,
                this.Nf());
                for (var b = 0; b < this.o.length; ++b) {
                    var c = this.o[b];
                    c.lj || (c.link.className = c.link.value == a && this.F.qe ? "goog-te-menu2-item-selected" : "goog-te-menu2-item")
                }
            }
        }
        ;
        var nv = function(a) {
            _.$k(a.O, _.Sk(a.X));
            _.$k(a.j, _.Sk(a.O));
            a.B = _.Sk(a.j)
        }
          , ov = function(a, b) {
            lv.call(this, a, b)
        };
        _.u(ov, lv);
        _.h = ov.prototype;
        _.h.Od = function() {
            var a = this.g.N("a", {
                "aria-haspopup": "true"
            });
            a.className = "goog-te-menu-value";
            a.href = "javascript:void(0)";
            this.J = this.g.N("SPAN");
            a.appendChild(this.J);
            this.V = this.g.N("IMG", {
                src: "https://www.google.com/images/cleardot.gif",
                alt: "",
                style: "background-image:url(" + _.Do + ");background-position:-14px 0px;border:none",
                width: 14,
                height: 14
            });
            a.appendChild(this.V);
            this.da(a)
        }
        ;
        _.h.Lf = function() {
            _.L(this.V, "backgroundPosition", "-14px 0px")
        }
        ;
        _.h.Mf = function() {
            _.L(this.V, "backgroundPosition", "0px 0px")
        }
        ;
        _.h.ca = function() {
            lv.prototype.ca.call(this);
            this.V = this.J = null
        }
        ;
        _.h.Nf = function() {
            this.g.nb(this.J, this.Ed(this.l) || "")
        }
        ;
        _.h.pd = function(a) {
            this.od.call(this, a)
        }
        ;
        var pv = function(a, b) {
            lv.call(this, a, b)
        };
        _.u(pv, lv);
        _.h = pv.prototype;
        _.h.Od = function() {
            var a = this.g.N("a", {
                "aria-haspopup": "true"
            });
            a.className = "goog-te-menu-value";
            a.href = "javascript:void(0)";
            this.J = this.g.N("SPAN");
            a.appendChild(this.J);
            a.appendChild(this.g.N("IMG", {
                src: "https://www.google.com/images/cleardot.gif",
                alt: "",
                width: 1,
                height: 1
            }));
            a.appendChild(this.g.N("SPAN", {
                style: "border-left:1px solid #bbb"
            }, "\u200b"));
            a.appendChild(this.g.N("IMG", {
                src: "https://www.google.com/images/cleardot.gif",
                alt: "",
                width: 1,
                height: 1
            }));
            this.V = this.g.N("span", {
                style: "color:#767676",
                "aria-hidden": "true"
            }, "\u25bc");
            a.appendChild(this.V);
            this.da(a)
        }
        ;
        _.h.Lf = function() {
            _.L(this.V, "color", "#9b9b9b")
        }
        ;
        _.h.Mf = function() {
            _.L(this.V, "color", "#d5d5d5")
        }
        ;
        _.h.ca = function() {
            lv.prototype.ca.call(this);
            this.V = this.J = null
        }
        ;
        _.h.Nf = function() {
            this.g.nb(this.J, this.Ed(this.l) || "")
        }
        ;
        _.h.pd = function(a) {
            this.od.call(this, a)
        }
        ;
        var qv = function(a, b) {
            lv.call(this, a, b);
            this.F.qe = !1
        };
        _.u(qv, lv);
        qv.prototype.Od = function() {
            var a = _.sh(this.g, "div");
            a.className = "goog-te-button";
            var b = this.g.N("DIV", {
                style: "background: url(" + _.Co + ") repeat-x 0 -39px"
            });
            a.appendChild(b);
            this.J = _.sh(this.g, "button");
            b.appendChild(this.J);
            this.da(a)
        }
        ;
        qv.prototype.wh = function(a) {
            _.md(this.J);
            this.J.appendChild(this.g.U.createTextNode(String(a + "\u00a0\u25bc")))
        }
        ;
        qv.prototype.ca = function() {
            lv.prototype.ca.call(this);
            this.J = null
        }
        ;
        qv.prototype.Pg = function(a) {
            this.Ma(a.currentTarget.value);
            this.dispatchEvent("change");
            this.Vd()
        }
        ;
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        var rv = function() {
            this.h = {};
            this.g = 0
        };
        rv.prototype.j = function(a, b) {
            a = this.h[b];
            if (!a)
                return b;
            b = "";
            a.Yf && (b += "<" + a.Yf + a.attributes + ">");
            a.pf && (b += a.pf);
            a.Ye && (b += "</" + a.Ye + ">");
            return b
        }
        ;
        rv.prototype.Yf = function(a, b) {
            _.jj(a);
            return sv(this, {
                Yf: a,
                attributes: _.nj(b)
            })
        }
        ;
        rv.prototype.Ye = function(a) {
            _.jj(a);
            return sv(this, {
                Ye: a
            })
        }
        ;
        rv.prototype.text = function(a) {
            return sv(this, {
                pf: _.xj(a)
            })
        }
        ;
        var sv = function(a, b) {
            a.g++;
            var c = "{SafeHtmlFormatter:" + a.g + "_" + _.bd() + "}";
            a.h[_.xj(c)] = b;
            return c
        };
        var tv = function(a, b) {
            _.M.call(this, b);
            this.F = a && _.li(a) || {};
            this.H = new _.J(this)
        };
        _.x(tv, _.M);
        var uv = {
            ll: 0,
            Hk: 1,
            al: 2
        };
        _.h = tv.prototype;
        _.h.N = function() {
            var a = _.sh(this.g, "div");
            _.R(a, "skiptranslate");
            _.R(a, "goog-te-gadget");
            a.dir = _.Jb.test(_.W) ? "rtl" : "ltr";
            _.O(a, !1);
            if (2 == this.F.lc) {
                var b = cv({
                    id: _.T(this, "targetLanguage"),
                    rh: "",
                    qh: ""
                });
                _.xi(a, _.vi(b))
            } else {
                b = new rv;
                var c = _.fs({
                    Zg: _.B && !_.Ac("7.0"),
                    ge: "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png",
                    gh: "https://translate.google.com"
                })
                  , d = _.X
                  , e = d.ng;
                c = _.ti(c);
                c = sv(b, {
                    pf: _.Sc(c).toString()
                });
                d = e.call(d, c);
                e = _.xj("SafeHtmlFormatter:");
                b = _.xj(d).replace(new RegExp("\\{" + e + "[\\w&#;]+\\}","g"), (0,
                _.w)(b.j, b, []));
                b = _.Tc(b, null);
                b = cv({
                    id: _.T(this, "targetLanguage"),
                    rh: "",
                    qh: 1 == this.F.lc ? _.lj("\u00a0", "\u00a0", b) : b
                });
                _.xi(a, _.vi(b))
            }
            this.da(a)
        }
        ;
        _.h.Y = function() {
            tv.G.Y.call(this);
            this.j = 2 == this.F.lc ? new pv(null,this.g) : new kv(this.g);
            this.H.D(this.j, "change", _.So(this, "chg_tgt_lang"));
            this.H.D(this.j, "load", this.Th);
            var a = this.g.A(_.T(this, "targetLanguage"));
            if (2 == this.F.lc) {
                var b = this.g.N("IMG", {
                    src: "https://www.google.com/images/cleardot.gif",
                    "class": "goog-te-gadget-icon",
                    alt: ""
                });
                b.style.backgroundImage = "url(" + _.Do + ")";
                b.style.backgroundPosition = "-65px 0px";
                var c = this.g.N("SPAN", {
                    style: "vertical-align: middle"
                });
                a.appendChild(b);
                a.appendChild(c);
                this.j.ja(c);
                a.style.whiteSpace = "nowrap";
                a.className = "goog-te-gadget-simple"
            } else
                this.j.ja(a),
                1 == this.F.lc && (a.style.display = "inline")
        }
        ;
        _.h.Th = function() {
            if (2 == this.F.lc) {
                var a = this.j
                  , b = this.g.A(_.T(this, "targetLanguage"));
                a.H.sa(a.s, "click", a.jf);
                a.s = b;
                a.H.D(a.s, "click", a.jf)
            }
            this.dispatchEvent("load")
        }
        ;
        _.h.ca = function() {
            tv.G.ca.call(this);
            this.H.R();
            this.H = null;
            this.j.R();
            this.j = null
        }
        ;
        _.h.ga = function() {
            return this.j.Qa()
        }
        ;
        _.h.zb = function(a) {
            this.j.pd(a)
        }
        ;
        _.h.oa = function(a) {
            "" == a ? this.J && this.zb(this.J) : this.B && this.zb(this.B);
            this.j.Ma(a)
        }
        ;
        _.h.S = function(a) {
            _.O(this.A(), a)
        }
        ;
        _.h.qa = function(a) {
            this.j.qa(a)
        }
        ;
        _.h.Wf = function(a, b) {
            this.J = a;
            this.B = b
        }
        ;
        var vv = function(a, b) {
            _.M.call(this, b);
            this.F = a && _.li(a) || {};
            this.F.rb || (this.F.rb = _.Ho);
            this.H = new _.J(this)
        };
        _.x(vv, _.M);
        var wv = {
            fl: 1,
            gl: 2,
            rk: 3,
            qk: 4
        };
        _.h = vv.prototype;
        _.h.N = function() {
            var a = _.sh(this.g, "div");
            this.za = !1;
            _.O(a, !1);
            var b = _.T(this, "container");
            b = (0,
            _.ai)('<iframe id="' + _.P(b) + '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>');
            _.xi(a, _.vi(b));
            this.da(a)
        }
        ;
        _.h.Y = function() {
            vv.G.Y.call(this);
            var a = _.Jb.test(_.W) ? "rtl" : "ltr"
              , b = _.eg(this.F.rb)
              , c = _.T(this, "translate");
            this.A().id = _.T(this, "floatContainer");
            var d = {
                id: this.A().id,
                className: "goog-te-ftab-float"
            };
            this.A().className += " goog-te-ftab-float";
            switch (this.F.Rd) {
            case 2:
                var e = "goog-float-top";
                d.top = 0;
                d.right = 20;
                break;
            case 3:
                e = "goog-float-bottom";
                d.bottom = 0;
                d.right = 20;
                break;
            case 4:
                e = "goog-float-bottom";
                d.bottom = 0;
                d.left = 20;
                break;
            default:
                e = "goog-float-top",
                d.top = 0,
                d.left = 20
            }
            Ou(Iu(new _.Lf, d), this.A());
            this.o = this.g.A(_.T(this, "container"));
            this.H.D(this.o, "load", this.Uh);
            Vu(this.o, (0,
            _.w)(function() {
                var f = _.Qj(this.o);
                var g = e;
                var k = _.X.Ie;
                g = (0,
                _.ai)('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' + _.P(Ru(b)) + '"></head><body class="goog-te-ftab ' + _.P(g) + '" scroll="no" style="overflow:hidden" dir="' + _.P(a) + '"><a id="' + _.P(c) + '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' + _.P(_.ul("https://www.google.com/images/cleardot.gif")) + '" style="background-image:url(' + _.P(_.ul(_.Do)) + ');background-position:-65px 0px"><span>' + _.ml(k) + "</span></a></body>");
                g = _.ti(g);
                f.write(_.Sc(g));
                f.close()
            }, this))
        }
        ;
        _.h.Uh = function() {
            this.h = (new _.cd(_.Qj(this.o))).A(_.T(this, "translate"));
            this.H.D(this.h, "click", _.So(this, "clk_trans"));
            _.O(this.A(), !0);
            var a = _.Sk(this.h);
            _.O(this.A(), !1);
            _.$k(this.o, a);
            _.$k(this.A(), a);
            this.dispatchEvent("load")
        }
        ;
        _.h.ca = function() {
            vv.G.ca.call(this);
            this.H.R();
            this.H = null;
            _.Kj(this.o);
            this.h = this.o = null
        }
        ;
        _.h.isVisible = function() {
            return this.za
        }
        ;
        _.h.S = function(a) {
            this.za = a;
            _.O(this.A(), a)
        }
        ;
        var xv = function(a, b) {
            _.M.call(this, b);
            this.H = new _.J(this);
            this.F = a && _.li(a) || {};
            this.F.rb || (this.F.rb = _.Ho);
            this.F.Xf = !1;
            _.L(this.g.U.body, "position", "relative");
            _.ah || _.L(this.g.U.body, "minHeight", "100%");
            _.L(this.g.U.documentElement, "height", "100%");
            _.L(this.g.U.body, "top", "0px");
            _.B && (window._bannerquirkfixleft = -parseInt("0" + this.g.U.body.leftMargin, 10),
            window._bannerquirkfixtop = -parseInt("0" + this.g.U.body.topMargin, 10) - 40)
        };
        _.x(xv, _.M);
        _.h = xv.prototype;
        _.h.ja = function() {
            var a = this.g.U.body.firstChild;
            _.gm(this, a.parentNode, a)
        }
        ;
        _.h.N = function() {
            var a = _.sh(this.g, "div");
            this.za = !1;
            _.O(a, !1);
            _.R(a, "skiptranslate");
            var b = _.T(this, "container");
            b = (0,
            _.ai)('<iframe id="' + _.P(b) + '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>');
            _.xi(a, _.vi(b));
            this.da(a)
        }
        ;
        _.h.Y = function() {
            xv.G.Y.call(this);
            var a = _.Jb.test(_.W) ? "rtl" : "ltr", b = _.eg(this.F.rb), c = _.T(this, "promptSection"), d = _.T(this, "confirm"), e = _.T(this, "progressSection"), f = _.T(this, "progressValue"), g = _.T(this, "cancel"), k = _.T(this, "finishSection"), l = _.T(this, "restore"), m = _.T(this, "errorSection"), n = _.T(this, "errorContent"), q = _.T(this, "close"), r = _.T(this, "noAutoPopup"), z, G = [];
            this.F.Xf && G.push(bv({
                id: _.T(this, "promptSourceLang")
            }));
            G.push(bv({
                id: _.T(this, "promptTargetLang")
            }));
            var Q = _.zk(_.X.li.apply(null, G));
            G = [];
            this.F.Xf && G.push(bv({
                id: _.T(this, "finishSourceLang")
            }));
            G.push(bv({
                id: _.T(this, "finishTargetLang")
            }));
            var vd = _.zk(_.X.fi.apply(null, G));
            this.F.Dh && (z = this.F.Dh);
            this.o = this.g.A(_.T(this, "container"));
            this.H.D(this.o, "load", this.Vh);
            Vu(this.o, (0,
            _.w)(function() {
                var nc = _.Qj(this.o);
                var ub = z;
                var jf = _.X.Tc
                  , Vw = _.X.Ie
                  , Ww = _.X.hi
                  , Xw = _.X.ue
                  , Yw = _.X.og
                  , Zw = _.X.cg
                  , $w = _.X.cg;
                ub = (0,
                _.ai)('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' + _.P(Ru(b)) + '"></head><body class="goog-te-banner" scroll="no" border=0 dir="' + _.P(a) + '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' + _.P(_.sl("https://translate.google.com")) + '" class="goog-logo-link" target="_blank"><img src="' + _.P(_.ul("https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_68x28dp.png")) + '" alt="Google ' + _.P(jf) + '"></a></td>' + (ub ? '<td width=1><img src="' + _.P(_.ul("https://www.google.com/images/cleardot.gif")) + '" width="9" height="15" title="' + _.P(ub) + '" alt="' + _.P(ub) + '" style="background-image:url(' + _.P(_.ul(_.Do)) + ');background-position:-56px 0px;margin:0 4px"></td>' : "") + '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' + _.P(c) + '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' + _.ml(Q) + '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + _.P(d) + '"><b>' + _.ml(Vw) + '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + _.P(r) + '"></button></div></div></td></tr><tr id="' + _.P(e) + '" style="display:none" valign=middle><td><span class="goog-te-banner-content">' + _.ml(Ww) + '&nbsp;<span dir="ltr">(<b id="' + _.P(f) + '"></b>%)</span>&nbsp;<img src="' + _.P(_.ul(_.Fo)) + '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + _.P(g) + '">' + _.ml(Xw) + '</button></div></div></td></tr><tr id="' + _.P(k) + '" style="display:none"><td><span class="goog-te-banner-content">' + _.ml(vd) + '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + _.P(l) + '">' + _.ml(Yw) + '</button></div></div></td></tr><tr id="' + _.P(m) + '" style="display:none" valign=middle><td><span id="' + _.P(n) + '" class="goog-te-banner-content"></span></td></tr></table></td><td class="goog-te-banner-margin"></td><td width=1 id="options"></td><td width=1><a id="' + _.P(q) + '" class="goog-close-link" href="javascript:void(0)" title="' + _.P(Zw) + '"><img src="' + _.P(_.ul("https://www.google.com/images/cleardot.gif")) + '" width="15" height="15" alt="' + _.P($w) + '" style="background-image:url(' + _.P(_.ul(_.Do)) + ');background-position:-28px 0px"></a></td></tr></table></body>');
                ub = _.ti(ub);
                nc.write(_.Sc(ub));
                nc.close()
            }, this))
        }
        ;
        _.h.Vh = function() {
            this.h = new _.cd(_.Qj(this.o));
            yv(this, _.X.dg);
            if (this.F.rb == _.Ho) {
                var a = "url(" + _.Co + ")";
                _.L(this.h.U.body, "backgroundImage", a);
                for (var b = this.h.U.getElementsByTagName("button"), c = 0; c < b.length; ++c) {
                    var d = b[c].parentNode;
                    _.L(d, "backgroundImage", a);
                    _.L(d, "backgroundRepeat", "repeat-x");
                    _.L(d, "backgroundPosition", "0 -39px")
                }
            }
            this.F.Xf && (this.l = new ov(this.F,this.h));
            this.j = new ov(this.F,this.h);
            this.s = new qv(this.F,this.h);
            this.H.D(this.h.A(_.T(this, "confirm")), "click", _.So(this, "clk_confirm"));
            this.H.D(this.h.A(_.T(this, "cancel")), "click", _.So(this, "clk_cancel"));
            this.H.D(this.h.A(_.T(this, "restore")), "click", _.So(this, "clk_restore"));
            this.H.D(this.h.A(_.T(this, "close")), "click", _.So(this, "clk_close"));
            this.O = this.h.A(_.T(this, "noAutoPopup"));
            this.H.D(this.O, "click", _.So(this, "clk_no_ap"));
            this.l && this.H.D(this.l, "change", _.So(this, "chg_src_lang"));
            this.H.D(this.j, "change", _.So(this, "chg_tgt_lang"));
            this.H.D(this.s, "change", this.Ui);
            a = new _.Mo((0,
            _.w)(this.Wh, this));
            this.l && this.H.D(this.l, "load", a.register());
            this.H.D(this.j, "load", a.register());
            this.H.D(this.s, "load", a.register());
            a.finish();
            this.l && this.l.ja(this.h.A(_.T(this, "promptSourceLang")));
            this.j.ja(this.h.A(_.T(this, "promptTargetLang")));
            this.s.ja(this.h.A("options"))
        }
        ;
        _.h.Wh = function() {
            this.s.wh(_.X.$h);
            this.s.od({
                turn_off_site: _.X.ji,
                s1: "---",
                learn_more: _.X.Zh
            });
            this.dispatchEvent("load")
        }
        ;
        _.h.Ui = function() {
            switch (this.s.Qa()) {
            case "learn_more":
                window.open(_.Ko, "_blank");
                break;
            case "turn_off_site":
                this.dispatchEvent("clk_no_ap_site")
            }
        }
        ;
        _.h.ca = function() {
            this.S(!1);
            xv.G.ca.call(this);
            this.H.R();
            this.H = null;
            this.l && (this.l.R(),
            this.l = null);
            this.j.R();
            this.j = null;
            this.s.R();
            this.s = null;
            _.Kj(this.o);
            this.$c = this.h = null
        }
        ;
        _.h.Va = function() {
            return this.l ? this.l.Qa() : ""
        }
        ;
        _.h.ga = function() {
            return this.j.Qa()
        }
        ;
        _.h.zb = function(a) {
            this.j.pd(a)
        }
        ;
        _.h.Lb = function(a) {
            this.l && this.l.Ma(a);
            this.V && this.V[a] && this.h.nb(this.O, _.X.ii(this.V[a]))
        }
        ;
        _.h.oa = function(a) {
            this.j.Ma(a)
        }
        ;
        var zv = function(a, b, c, d) {
            if (a.$c != b) {
                a.$c = b;
                if (0 == b) {
                    a.l && jv(a.l, a.h.A(_.T(a, "promptSourceLang")));
                    if (a.J) {
                        var e = a.ga();
                        a.zb(a.J);
                        a.oa(e)
                    }
                    jv(a.j, a.h.A(_.T(a, "promptTargetLang")))
                } else
                    2 == b && (a.l && jv(a.l, a.h.A(_.T(a, "finishSourceLang"))),
                    a.B && (e = a.ga(),
                    a.zb(a.B),
                    a.oa(e)),
                    jv(a.j, a.h.A(_.T(a, "finishTargetLang"))));
                e = {};
                e[-1] = a.h.A(_.T(a, "errorSection"));
                e[0] = a.h.A(_.T(a, "promptSection"));
                e[1] = a.h.A(_.T(a, "progressSection"));
                e[2] = a.h.A(_.T(a, "finishSection"));
                for (var f in e)
                    e[f] !== Object.prototype[f] && _.O(e[f], f == b)
            }
            c && a.S(!0);
            a.O.parentNode.parentNode.style.display = d ? "block" : "none"
        };
        xv.prototype.isVisible = function() {
            return this.za
        }
        ;
        xv.prototype.S = function(a) {
            if (this.za != a) {
                this.za = a;
                if (_.B)
                    var b = parseInt("0" + this.g.U.body.leftMargin, 10)
                      , c = parseInt("0" + this.g.U.body.topMargin, 10);
                var d = "BackCompat" == this.g.U.compatMode;
                a ? (_.L(this.g.U.body, "top", "40px"),
                _.O(this.A(), !0),
                _.B && (_.Ac("7.0") ? (window._bannerquirkfixleft = window._bannerquirkfixtop = 0,
                d && (this.g.U.body.topMargin = c + 40)) : d ? (this.g.U.body.topMargin = c + 40,
                window._bannerquirkfixleft = window._bannerquirkfixtop = 0) : (window._bannerquirkfixleft = -b,
                window._bannerquirkfixtop = -c - 40))) : (_.L(this.g.U.body, "top", "0px"),
                _.O(this.A(), !1),
                d && 40 <= c && (this.g.U.body.topMargin = c - 40))
            }
        }
        ;
        xv.prototype.Uf = function(a) {
            this.h.nb(this.h.A(_.T(this, "progressValue")), a)
        }
        ;
        var yv = function(a, b) {
            a.h.nb(a.h.A(_.T(a, "errorContent")), b)
        };
        xv.prototype.Wf = function(a, b) {
            this.J = a;
            this.B = b;
            this.zb(a)
        }
        ;
        var Av = function(a, b) {
            _.y.call(this);
            "string" == _.sb(a) && (b = a,
            a = {});
            "string" == _.sb(b) && (b = _.dd(document, String(b)));
            this.M = b;
            this.H = new _.J(this);
            this.mc = this.J = void 0;
            this.Jf(Object(a));
            this.ya = new _.et({
                apiKey: this.F.apiKey,
                Tb: 1,
                pe: !0,
                ek: _.Jo
            },{
                client: _.yo,
                u: window.location.href
            });
            this.Ca = new hv(void 0,this.ya,void 0,void 0,this.F.apiKey,void 0,void 0,new gv,this.J,this.mc);
            this.o = !1;
            this.H.D(window, "pagehide", this.R);
            this.rf()
        };
        _.u(Av, _.y);
        Av.prototype.Jf = function(a) {
            this.$ = "auto";
            var b;
            !(b = window.parent != window) && (b = (!window.external || !window.external.googleToolbarVersion || 6.2 > parseFloat(window.external.googleToolbarVersion)) && (!window.gtbExternal || !window.gtbExternal.isTranslateEnabled || !window.gtbExternal.isTranslateEnabled())) && (b = navigator.appVersion && navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/),
            b = !(b && b[2] && b[3] && 4001 <= 1E3 * Number(b[2]) + Number(b[3])));
            this.F = {
                Oe: b,
                Eg: !1,
                Pe: null,
                Hd: null,
                jc: [],
                yc: [],
                Xe: !1,
                Jb: !1,
                apiKey: "",
                Fg: !1,
                af: "",
                lc: 0,
                xg: !1
            };
            this.T = {
                rb: _.Ho,
                Dh: "https://" == _.Bo ? _.X.di : null
            };
            this.K = {
                rb: _.Ho,
                Rd: null
            };
            a && ("autoDisplay"in a && (this.F.Oe = this.F.Oe && !!a.autoDisplay),
            "multilanguagePage"in a && (this.F.Jb = !!a.multilanguagePage),
            "gaTrack"in a && (this.F.Fg = !!a.gaTrack),
            "layout"in a && (this.F.lc = a.layout),
            a.pageLanguage && (this.F.yb = _.To(a.pageLanguage)),
            a.includedLanguages && (this.F.jc = a.includedLanguages.split(",")),
            a.excludedLanguages && (this.F.yc = a.excludedLanguages.split(",")),
            this.F.yb && (this.$ = this.F.yb),
            a.key && (this.F.apiKey = a.key),
            a.gaId && (this.F.af = a.gaId),
            this.K.Rd = Number(a.floatPosition) || this.K.Rd,
            "disableAutoTranslation"in a && (this.F.xg = !!a.disableAutoTranslation),
            a.jwtToken && (this.J = new $u(a.jwtToken)),
            a.jwtTokenProvider && (this.J = new av(a.jwtTokenProvider)),
            a.translateErrorHandler && (this.mc = a.translateErrorHandler));
            !this.F.xg && Bv(this) && (this.F.Eg = !0);
            this.l = {};
            if ((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) && a[2])
                for (this.l = {},
                a = _.ad(a[2]).split("|"),
                b = 0; b < a.length; ++b) {
                    var c = a[b].split("=");
                    c[0] && (this.l[c[0]] = c[1])
                }
        }
        ;
        var Bv = function(a) {
            function b(f, g) {
                if (f = _.ad(f).match("^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)")) {
                    if (f[3])
                        return g.F.Pe = f[2],
                        g.F.Hd = f[3],
                        !0;
                    if (f[6])
                        return g.F.Pe = f[5],
                        g.F.Hd = f[6],
                        !0
                }
                return !1
            }
            var c = {
                url: function() {
                    var f = window.location.href.match(/#.*googtrans(.*)/);
                    return f && f[1]
                },
                cookie: function() {
                    var f = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
                    return f && f[2]
                }
            }, d;
            for (d in c)
                if (c[d] !== Object.prototype[d]) {
                    var e = c[d]();
                    if (e && b(e, a))
                        return d
                }
            return ""
        }
          , Cv = function(a, b) {
            for (var c = window.location.hostname.split("."); 2 < c.length; )
                c.shift();
            c = ";domain=" + c.join(".");
            null != b ? a = a + "=" + b : (b = new Date,
            b.setTime(b.getTime() - 1),
            a = a + "=none;expires=" + b.toGMTString());
            a += ";path=/";
            document.cookie = a;
            try {
                document.cookie = a + c
            } catch (d) {}
        }
          , Dv = function(a, b) {
            var c = null;
            void 0 !== b && (c = void 0 !== a ? "/" + a + "/" + b : "/" + b);
            Cv("googtrans", c)
        };
        _.h = Av.prototype;
        _.h.kf = function(a) {
            this.P = _.To(_.W);
            this.lb = _.lp(a || {});
            this.Ba = {};
            this.B = {};
            a = !this.F.jc.length;
            var b = _.Lo(this.F.jc)
              , c = _.Lo(this.F.yc);
            this.Ba[_.W] = "";
            this.B[_.W] = "";
            for (var d in this.lb.tl)
                this.lb.tl[d] === Object.prototype[d] || !(a || d in b) || d in c || (this.B[d] = this.lb.tl[d],
                d == this.F.yb && !this.F.Jb) || (this.Ba[d] = this.lb.tl[d]);
            this.Ba[_.W] || delete this.Ba[_.W];
            this.B[_.W] || delete this.B[_.W];
            this.re = _.li(this.lb.sl)
        }
        ;
        _.h.gf = function(a) {
            a && (this.$ = _.To(a))
        }
        ;
        _.h.lf = function() {
            delete this.Xa;
            if (this.lb) {
                this.$ = this.$ || this.F.Pe;
                this.P = this.F.Hd || this.P;
                var a = this.F.Eg || this.F.Oe && this.$ != this.P && !(this.$ in _.xo) && "1" != this.l.os && "1" != this.l["o" + this.$];
                "zh-TW" == this.$ && (this.$ = "zh-CN");
                this.re[this.$] || (a = !1,
                this.$ = "auto");
                if (!this.Ba[this.P])
                    if (a = !1,
                    this.Ba.en)
                        this.P = "en";
                    else
                        for (var b in this.Ba)
                            if (this.Ba[b] !== Object.prototype[b]) {
                                this.P = b;
                                break
                            }
                if (this.h) {
                    var c = this.Ba
                      , d = {
                        "": _.X.pg
                    };
                    for (b in c)
                        c[b] !== Object.prototype[b] && (d[b] = c[b]);
                    this.h.Wf(d, this.B);
                    this.h.oa("")
                }
                !_.vo && a ? this.F.Hd ? _.Po(this.C, this.s.delay((0,
                _.w)(this.oe, this, !0, !0))).call() : (this.o = !0,
                _.Po(this.C, this.s.delay((0,
                _.w)(this.oe, this))).call(),
                _.Di("te_ap", {
                    sl: this.$
                })) : (this.j && this.j.S(!0),
                this.h && this.h.S(!0));
                window.google.translate.TranslateService && this.qa(!1);
                this.C.finish()
            }
        }
        ;
        _.h.rf = function() {
            this.Xa = new _.Mo((0,
            _.w)(this.lf, this));
            this.s = new _.Mo((0,
            _.w)(this.Ri, this));
            this.C = new _.Oo((0,
            _.w)(this.nj, this));
            this.g = new xv(this.T);
            this.Ca.Cd(this.Xa.register((0,
            _.w)(this.kf, this)), _.W);
            this.M ? (this.h = new tv(this.F),
            this.H.D(this.h, "load", this.Xa.register()),
            this.H.D(this.h, "chg_tgt_lang", _.Po(this.C, this.s.delay((0,
            _.w)(this.Oi, this)))),
            this.h.ja(this.M)) : this.K.Rd && (this.j = new vv(this.K),
            this.H.D(this.j, "load", this.Xa.register()),
            this.H.D(this.j, "clk_trans", _.Po(this.C, this.s.delay((0,
            _.w)(this.Ni, this)))),
            this.j.ja());
            !this.F.yb && this.F.Xe && this.Ca.Bd(this.Xa.register((0,
            _.w)(this.gf, this)));
            this.Xa.finish()
        }
        ;
        _.h.Ri = function() {
            var a = this.g
              , b = this.re;
            a.l && a.l.pd(b);
            a.V = b;
            this.g.Wf(this.Ba, this.B);
            this.g.Lb(this.$);
            this.g.oa(this.P);
            this.H.D(this.g, "clk_confirm", this.Fi);
            this.H.D(this.g, "clk_cancel", this.Ei);
            this.H.D(this.g, "clk_restore", this.ff);
            this.H.D(this.g, "clk_close", this.Ud);
            this.H.D(this.g, "clk_no_ap", this.Gi);
            this.H.D(this.g, "clk_no_ap_site", this.Hi);
            this.H.D(this.g, "chg_src_lang", this.Kg);
            this.H.D(this.g, "chg_tgt_lang", this.Kg);
            this.h && this.h.S(!0)
        }
        ;
        _.h.nj = function() {
            this.H.D(this.g, "load", this.s.register());
            this.g.ja();
            this.s.finish()
        }
        ;
        _.h.L = function() {
            this.Ca.restore();
            _.y.prototype.L.call(this);
            this.Ca.R();
            this.H.R();
            this.H = null;
            this.g && this.g.R();
            this.g = null;
            this.j && this.j.R();
            this.j = null;
            this.h && this.h.R();
            this.M = this.h = null
        }
        ;
        _.h.Fi = function() {
            !this.g.isVisible() || !this.F.Jb && Wu(this.$, this.g.ga()) || (this.o && _.Di("te_apt", {
                sl: this.$
            }),
            Ev(this, !1),
            this.h && this.h.oa(this.g.ga()))
        }
        ;
        _.h.Ei = function() {
            this.g.isVisible() && (Fv(this),
            zv(this.g, 0),
            this.h && this.h.oa(""))
        }
        ;
        _.h.ff = function() {
            this.g.isVisible() && (Fv(this),
            zv(this.g, 0));
            this.h && this.h.oa("")
        }
        ;
        _.h.Ud = function() {
            this.g.isVisible() && (this.o && (this.o = !1,
            _.Di("te_apc", {
                sl: this.$
            })),
            Fv(this),
            this.g.S(!1),
            this.h && this.h.oa(""),
            this.j && this.j.S(!0))
        }
        ;
        _.h.Gi = function() {
            this.g.isVisible() && (this.l["o" + this.$] = "1",
            _.Di("te_apr", {
                sl: this.$
            }),
            this.o = !1,
            this.Ud())
        }
        ;
        _.h.Hi = function() {
            if (this.g.isVisible()) {
                this.o = !1;
                this.l.os = "1";
                var a = null;
                if (this.l) {
                    a = [];
                    for (var b in this.l)
                        this.l[b] !== Object.prototype[b] && a.push(b + "=" + this.l[b]);
                    a = a.join("|")
                }
                Cv("googtransopt", a);
                this.Ud()
            }
        }
        ;
        _.h.Kg = function() {
            this.g.isVisible() && (!this.F.Jb && Wu(this.$, this.g.ga()) ? this.ff() : (this.$ = this.g.Va() || this.$,
            this.P = this.g.ga(),
            2 == this.g.$c && (this.h && this.h.oa(this.g.ga()),
            Ev(this))))
        }
        ;
        _.h.oe = function(a, b) {
            this.g.isVisible() || (this.j && this.j.S(!1),
            a ? Ev(this, b) : zv(this.g, 0, !0, this.o))
        }
        ;
        _.h.Zj = function(a, b) {
            _.Po(this.C, this.s.delay((0,
            _.w)(this.oe, this, a, b))).call()
        }
        ;
        _.h.Ni = function() {
            this.oe(2 == this.g.$c)
        }
        ;
        _.h.Oi = function() {
            this.h.ga() ? !this.F.Jb && Wu(this.$, this.g.ga()) ? this.ff() : (this.P = this.h.ga(),
            this.g.oa(this.P),
            Ev(this)) : this.h.oa(this.P)
        }
        ;
        var Ev = function(a, b) {
            if (window.google.translate.TranslateService)
                try {
                    window.google.translate.TranslateService.getInstance().restore()
                } catch (c) {}
            Dv(a.$, a.P);
            a.o = !1;
            !b && a.$ in _.xo && _.Di("te_ape", {
                sl: a.$
            });
            a.g.Uf(0);
            zv(a.g, 1, !0);
            a.Ca.lg(!!b);
            window.setTimeout((0,
            _.w)(a.Ca.Dd, a.Ca, a.F.Jb ? "auto" : a.$, a.P, (0,
            _.w)(a.O, a), void 0, void 0), 0);
            if (a.F.Fg && window._gaq && window._gat)
                try {
                    a.F.af ? window._gat._getTracker(a.F.af)._trackEvent("Google Website Translator", "Translate", a.P) : window._gat._getTrackerByName()._trackEvent("Google Website Translator", "Translate", a.P)
                } catch (c) {}
        };
        Av.prototype.O = function(a, b, c) {
            "function" == typeof this.W && this.W();
            this.g.isVisible() && 1 == this.g.$c && (c ? (Fv(this),
            zv(this.g, -1, !0),
            2 == c ? yv(this.g, _.X.Yh) : yv(this.g, _.X.dg)) : (this.g.Uf(a),
            b && (this.h && this.h.oa(this.P),
            this.g.Lb(this.$),
            zv(this.g, 2))))
        }
        ;
        var Fv = function(a) {
            Dv();
            window.setTimeout((0,
            _.w)(a.Ca.restore, a.Ca, null), 0)
        };
        Av.prototype.qa = function(a) {
            a || this.Ud();
            this.h && this.h.qa(a);
            this.j && this.j.S(a)
        }
        ;
        _.Jp();
        if (1 == _.Ki) {
            var Gv = null
              , Hv = function(a) {
                if (!Gv) {
                    var b, c, d, e;
                    a && ("key"in a && (b = a.key),
                    "serverParams"in a && (c = a.serverParams),
                    "timeInfo"in a && (d = a.timeInfo),
                    "remoteApiProxyHandlers"in a && (e = a.remoteApiProxyHandlers),
                    (a = Xu()) && (c = a));
                    a = 0;
                    if ("te_lib" == _.yo || _.kc)
                        a = 3;
                    Gv = new hv(void 0,new _.et({
                        apiKey: b,
                        Tb: a,
                        pe: !0,
                        trackVisibility: "tvis" == c
                    }),void 0,void 0,b,c,d,new gv,void 0,void 0,e);
                    Gv.constructor = function() {}
                    ;
                    Gv.isAvailable = Gv.Ja;
                    Gv.getSupportedLanguages = Gv.Cd;
                    Gv.getPageLanguage = Gv.Bd;
                    Gv.setClickThrough = Gv.lg;
                    Gv.translatePage = Gv.Dd;
                    Gv.restore = Gv.restore;
                    Gv.isTranslating = Gv.Rh;
                    Gv.setCheckVisibility = Gv.Wj
                }
                return Gv
            };
            Hv.getInstance = function() {
                return Gv
            }
            ;
            _.Ab("google.translate.TranslateService", Hv);
            _.Di("te_li")
        } else {
            var Iv = null
              , Jv = function(a, b) {
                Iv || (Iv = new Av(a,b),
                Iv.constructor = function() {}
                );
                return Iv
            };
            Jv.getInstance = function() {
                return Iv
            }
            ;
            _.Ab("google.translate.TranslateElement", Jv);
            Av.prototype.dispose = Av.prototype.R;
            Av.prototype.showBanner = Av.prototype.Zj;
            Av.prototype.setEnabled = Av.prototype.qa;
            _.Ab("google.translate.TranslateElement.FloatPosition", wv);
            wv.TOP_LEFT = 1;
            wv.TOP_RIGHT = 2;
            wv.BOTTOM_RIGHT = 3;
            wv.BOTTOM_LEFT = 4;
            _.Ab("google.translate.TranslateElement.InlineLayout", uv);
            uv.VERTICAL = 0;
            uv.HORIZONTAL = 1;
            uv.SIMPLE = 2
        }
        _.Li();

        _.oa();

    } catch (e) {
        _._DumpException(e)
    }
}
).call(this, this.default_tr);
// Google Inc.
