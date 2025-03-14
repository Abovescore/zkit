/*! tsParticles v1.32.0 by Matteo Bruni */ ! function(t, i) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = i();
    else if ("function" == typeof define && define.amd) define([], i);
    else {
        var e = i();
        for (var o in e)("object" == typeof exports ? exports : t)[o] = e[o]
    }
}(this, (function() {
    return (() => {
        "use strict";
        var t = {
                d: (i, e) => {
                    for (var o in e) t.o(e, o) && !t.o(i, o) && Object.defineProperty(i, o, {
                        enumerable: !0,
                        get: e[o]
                    })
                },
                o: (t, i) => Object.prototype.hasOwnProperty.call(t, i),
                r: t => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }
            },
            i = {};
        t.r(i), t.d(i, {
            AbsorberClickMode: () => ho,
            AlterType: () => g,
            AnimationStatus: () => b,
            CanvasUtils: () => n,
            Circle: () => Yt,
            CircleWarp: () => Kt,
            ClickMode: () => d,
            CollisionMode: () => p,
            ColorUtils: () => s,
            Constants: () => dt,
            Container: () => so,
            DestroyMode: () => h,
            DestroyType: () => w,
            DivMode: () => u,
            DivType: () => M,
            EasingType: () => z,
            EmitterClickMode: () => uo,
            ExternalInteractorBase: () => Ss,
            HoverMode: () => v,
            InlineArrangement: () => vo,
            InteractivityDetect: () => S,
            InteractorType: () => x,
            Main: () => go,
            MoveDirection: () => a,
            MoveType: () => po,
            NumberUtils: () => e,
            OrbitType: () => C,
            OutMode: () => f,
            OutModeDirection: () => l,
            Particle: () => ve,
            ParticlesInteractorBase: () => Hs,
            Point: () => hi,
            Rectangle: () => Zt,
            RotateDirection: () => r,
            ShapeType: () => k,
            SizeMode: () => y,
            StartValueType: () => P,
            ThemeMode: () => m,
            TiltDirection: () => c,
            Type: () => fo,
            Utils: () => o,
            Vector: () => O,
            loadFull: () => js,
            pJSDom: () => Xs,
            particlesJS: () => Js,
            tsParticles: () => Qs
        });
        var e = {};
        t.r(e), t.d(e, {
            calcEasing: () => W,
            clamp: () => T,
            collisionVelocity: () => B,
            getDistance: () => q,
            getDistances: () => H,
            getParticleBaseVelocity: () => V,
            getParticleDirectionAngle: () => _,
            getRangeMax: () => I,
            getRangeMin: () => D,
            getRangeValue: () => R,
            getValue: () => F,
            mix: () => A,
            randomInRange: () => E,
            setRangeValue: () => L
        });
        var o = {};
        t.r(o), t.d(o, {
            animate: () => j,
            areBoundsInside: () => tt,
            arrayRandomIndex: () => Y,
            calculateBounds: () => it,
            cancelAnimation: () => Q,
            circleBounce: () => lt,
            circleBounceDataFromParticle: () => rt,
            deepExtend: () => et,
            divMode: () => at,
            divModeExecute: () => st,
            isDivModeEnabled: () => ot,
            isInArray: () => J,
            isPointInside: () => K,
            isSsr: () => $,
            itemFromArray: () => Z,
            loadFont: () => X,
            rectBounce: () => ct,
            singleDivModeExecute: () => nt
        });
        var s = {};
        t.r(s), t.d(s, {
            colorMix: () => Rt,
            colorToHsl: () => pt,
            colorToRgb: () => vt,
            getHslFromAnimation: () => Lt,
            getLinkColor: () => Dt,
            getLinkRandomColor: () => It,
            getRandomRgbColor: () => Ot,
            getStyleFromHsl: () => At,
            getStyleFromHsv: () => Et,
            getStyleFromRgb: () => Tt,
            hslToHsv: () => wt,
            hslToRgb: () => bt,
            hslaToHsva: () => xt,
            hslaToRgba: () => gt,
            hsvToHsl: () => kt,
            hsvToRgb: () => Mt,
            hsvaToHsla: () => Pt,
            hsvaToRgba: () => zt,
            rgbToHsl: () => ft,
            rgbToHsv: () => Ct,
            rgbaToHsva: () => St,
            stringToAlpha: () => yt,
            stringToRgb: () => mt
        });
        var n = {};
        t.r(n), t.d(n, {
            clear: () => qt,
            drawConnectLine: () => Bt,
            drawEllipse: () => Jt,
            drawGrabLine: () => Ut,
            drawLinkLine: () => _t,
            drawLinkTriangle: () => Vt,
            drawParticle: () => Gt,
            drawParticlePlugin: () => Qt,
            drawPlugin: () => jt,
            drawShape: () => Nt,
            drawShapeAfterEffect: () => $t,
            gradient: () => Wt,
            paintBase: () => Ht
        });
        var a, r, l, c, d, h, u, v, p, f, y, m, b, g, w, x, k, P, M, z, C, S;
        ! function(t) {
            t.bottom = "bottom", t.bottomLeft = "bottom-left", t.bottomRight = "bottom-right", t.left = "left", t.none = "none", t.right = "right", t.top = "top", t.topLeft = "top-left", t.topRight = "top-right"
        }(a || (a = {})),
        function(t) {
            t.clockwise = "clockwise", t.counterClockwise = "counter-clockwise", t.random = "random"
        }(r || (r = {})),
        function(t) {
            t.bottom = "bottom", t.left = "left", t.right = "right", t.top = "top"
        }(l || (l = {})),
        function(t) {
            t.clockwise = "clockwise", t.counterClockwise = "counter-clockwise", t.random = "random"
        }(c || (c = {})),
        function(t) {
            t.attract = "attract", t.bubble = "bubble", t.push = "push", t.remove = "remove", t.repulse = "repulse", t.pause = "pause", t.trail = "trail"
        }(d || (d = {})),
        function(t) {
            t.none = "none", t.split = "split"
        }(h || (h = {})),
        function(t) {
            t.bounce = "bounce", t.bubble = "bubble", t.repulse = "repulse"
        }(u || (u = {})),
        function(t) {
            t.attract = "attract", t.bounce = "bounce", t.bubble = "bubble", t.connect = "connect", t.grab = "grab", t.light = "light", t.repulse = "repulse", t.slow = "slow", t.trail = "trail"
        }(v || (v = {})),
        function(t) {
            t.absorb = "absorb", t.bounce = "bounce", t.destroy = "destroy"
        }(p || (p = {})),
        function(t) {
            t.bounce = "bounce", t.bounceHorizontal = "bounce-horizontal", t.bounceVertical = "bounce-vertical", t.none = "none", t.out = "out", t.destroy = "destroy", t.split = "split"
        }(f || (f = {})),
        function(t) {
            t.precise = "precise", t.percent = "percent"
        }(y || (y = {})),
        function(t) {
            t.any = "any", t.dark = "dark", t.light = "light"
        }(m || (m = {})),
        function(t) {
            t[t.increasing = 0] = "increasing", t[t.decreasing = 1] = "decreasing"
        }(b || (b = {})),
        function(t) {
            t.darken = "darken", t.enlighten = "enlighten"
        }(g || (g = {})),
        function(t) {
            t.none = "none", t.max = "max", t.min = "min"
        }(w || (w = {})),
        function(t) {
            t[t.External = 0] = "External", t[t.Particles = 1] = "Particles"
        }(x || (x = {})),
        function(t) {
            t.char = "char", t.character = "character", t.circle = "circle", t.edge = "edge", t.image = "image", t.images = "images", t.line = "line", t.polygon = "polygon", t.square = "square", t.star = "star", t.triangle = "triangle"
        }(k || (k = {})),
        function(t) {
            t.max = "max", t.min = "min", t.random = "random"
        }(P || (P = {})),
        function(t) {
            t.circle = "circle", t.rectangle = "rectangle"
        }(M || (M = {})),
        function(t) {
            t.easeOutBack = "ease-out-back", t.easeOutCirc = "ease-out-circ", t.easeOutCubic = "ease-out-cubic", t.easeOutQuad = "ease-out-quad", t.easeOutQuart = "ease-out-quart", t.easeOutQuint = "ease-out-quint", t.easeOutExpo = "ease-out-expo", t.easeOutSine = "ease-out-sine"
        }(z || (z = {})),
        function(t) {
            t.front = "front", t.back = "back"
        }(C || (C = {})),
        function(t) {
            t.canvas = "canvas", t.parent = "parent", t.window = "window"
        }(S || (S = {}));
        class O {
            constructor(t, i) {
                let e, o;
                if (void 0 === i) {
                    if ("number" == typeof t) throw new Error("tsParticles - Vector not initialized correctly");
                    const i = t;
                    [e, o] = [i.x, i.y]
                } else [e, o] = [t, i];
                this.x = e, this.y = o
            }
            static clone(t) {
                return O.create(t.x, t.y)
            }
            static create(t, i) {
                return new O(t, i)
            }
            get angle() {
                return Math.atan2(this.y, this.x)
            }
            set angle(t) {
                this.updateFromAngle(t, this.length)
            }
            get length() {
                return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
            }
            set length(t) {
                this.updateFromAngle(this.angle, t)
            }
            add(t) {
                return O.create(this.x + t.x, this.y + t.y)
            }
            addTo(t) {
                this.x += t.x, this.y += t.y
            }
            sub(t) {
                return O.create(this.x - t.x, this.y - t.y)
            }
            subFrom(t) {
                this.x -= t.x, this.y -= t.y
            }
            mult(t) {
                return O.create(this.x * t, this.y * t)
            }
            multTo(t) {
                this.x *= t, this.y *= t
            }
            div(t) {
                return O.create(this.x / t, this.y / t)
            }
            divTo(t) {
                this.x /= t, this.y /= t
            }
            distanceTo(t) {
                return this.sub(t).length
            }
            getLengthSq() {
                return Math.pow(this.x, 2) + Math.pow(this.y, 2)
            }
            distanceToSq(t) {
                return this.sub(t).getLengthSq()
            }
            manhattanDistanceTo(t) {
                return Math.abs(t.x - this.x) + Math.abs(t.y - this.y)
            }
            copy() {
                return O.clone(this)
            }
            setTo(t) {
                this.x = t.x, this.y = t.y
            }
            rotate(t) {
                return O.create(this.x * Math.cos(t) - this.y * Math.sin(t), this.x * Math.sin(t) + this.y * Math.cos(t))
            }
            updateFromAngle(t, i) {
                this.x = Math.cos(t) * i, this.y = Math.sin(t) * i
            }
        }

        function T(t, i, e) {
            return Math.min(Math.max(t, i), e)
        }

        function A(t, i, e, o) {
            return Math.floor((t * e + i * o) / (e + o))
        }

        function E(t) {
            const i = I(t);
            let e = D(t);
            return i === e && (e = 0), Math.random() * (i - e) + e
        }

        function R(t) {
            return "number" == typeof t ? t : E(t)
        }

        function D(t) {
            return "number" == typeof t ? t : t.min
        }

        function I(t) {
            return "number" == typeof t ? t : t.max
        }

        function L(t, i) {
            if (t === i || void 0 === i && "number" == typeof t) return t;
            const e = D(t),
                o = I(t);
            return void 0 !== i ? {
                min: Math.min(e, i),
                max: Math.max(o, i)
            } : L(e, o)
        }

        function F(t) {
            const i = t.random,
                {
                    enable: e,
                    minimumValue: o
                } = "boolean" == typeof i ? {
                    enable: i,
                    minimumValue: 0
                } : i;
            return R(e ? L(t.value, o) : t.value)
        }

        function H(t, i) {
            const e = t.x - i.x,
                o = t.y - i.y;
            return {
                dx: e,
                dy: o,
                distance: Math.sqrt(e * e + o * o)
            }
        }

        function q(t, i) {
            return H(t, i).distance
        }

        function _(t) {
            if ("number" == typeof t) return t * Math.PI / 180;
            switch (t) {
                case a.top:
                    return -Math.PI / 2;
                case a.topRight:
                    return -Math.PI / 4;
                case a.right:
                    return 0;
                case a.bottomRight:
                    return Math.PI / 4;
                case a.bottom:
                    return Math.PI / 2;
                case a.bottomLeft:
                    return 3 * Math.PI / 4;
                case a.left:
                    return Math.PI;
                case a.topLeft:
                    return -3 * Math.PI / 4;
                case a.none:
                default:
                    return Math.random() * Math.PI * 2
            }
        }

        function V(t) {
            const i = O.origin;
            return i.length = 1, i.angle = t, i
        }

        function B(t, i, e, o) {
            return O.create(t.x * (e - o) / (e + o) + 2 * i.x * o / (e + o), t.y)
        }

        function W(t, i) {
            switch (i) {
                case z.easeOutQuad:
                    return 1 - Math.pow(1 - t, 2);
                case z.easeOutCubic:
                    return 1 - Math.pow(1 - t, 3);
                case z.easeOutQuart:
                    return 1 - Math.pow(1 - t, 4);
                case z.easeOutQuint:
                    return 1 - Math.pow(1 - t, 5);
                case z.easeOutExpo:
                    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
                case z.easeOutSine:
                    return Math.sin(t * Math.PI / 2);
                case z.easeOutBack: {
                    const i = 1.70158;
                    return 1 + (i + 1) * Math.pow(t - 1, 3) + i * Math.pow(t - 1, 2)
                }
                case z.easeOutCirc:
                    return Math.sqrt(1 - Math.pow(t - 1, 2));
                default:
                    return t
            }
        }
        O.origin = O.create(0, 0);
        var U = function(t, i, e, o) {
            return new(e || (e = Promise))((function(s, n) {
                function a(t) {
                    try {
                        l(o.next(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function r(t) {
                    try {
                        l(o.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function l(t) {
                    var i;
                    t.done ? s(t.value) : (i = t.value, i instanceof e ? i : new e((function(t) {
                        t(i)
                    }))).then(a, r)
                }
                l((o = o.apply(t, i || [])).next())
            }))
        };

        function G(t, i, e, o, s, n) {
            const a = {
                bounced: !1
            };
            return i.min >= o.min && i.min <= o.max && i.max >= o.min && i.max <= o.max && (t.max >= e.min && t.max <= (e.max + e.min) / 2 && s > 0 || t.min <= e.max && t.min > (e.max + e.min) / 2 && s < 0) && (a.velocity = s * -n, a.bounced = !0), a
        }

        function N(t, i) {
            if (i instanceof Array) {
                for (const e of i)
                    if (t.matches(e)) return !0;
                return !1
            }
            return t.matches(i)
        }

        function $() {
            return "undefined" == typeof window || !window
        }

        function j() {
            return $() ? t => setTimeout(t) : t => (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout)(t)
        }

        function Q() {
            return $() ? t => clearTimeout(t) : t => (window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout)(t)
        }

        function J(t, i) {
            return t === i || i instanceof Array && i.indexOf(t) > -1
        }

        function X(t) {
            var i, e;
            return U(this, void 0, void 0, (function*() {
                try {
                    yield document.fonts.load(`${null!==(i=t.weight)&&void 0!==i?i:"400"} 36px '${null!==(e=t.font)&&void 0!==e?e:"Verdana"}'`)
                } catch (t) {}
            }))
        }

        function Y(t) {
            return Math.floor(Math.random() * t.length)
        }

        function Z(t, i, e = !0) {
            return t[void 0 !== i && e ? i % t.length : Y(t)]
        }

        function K(t, i, e, o) {
            return tt(it(t, null != e ? e : 0), i, o)
        }

        function tt(t, i, e) {
            let o = !0;
            return e && e !== l.bottom || (o = t.top < i.height), !o || e && e !== l.left || (o = t.right > 0), !o || e && e !== l.right || (o = t.left < i.width), !o || e && e !== l.top || (o = t.bottom > 0), o
        }

        function it(t, i) {
            return {
                bottom: t.y + i,
                left: t.x - i,
                right: t.x + i,
                top: t.y - i
            }
        }

        function et(t, ...i) {
            for (const e of i) {
                if (null == e) continue;
                if ("object" != typeof e) {
                    t = e;
                    continue
                }
                const i = Array.isArray(e);
                !i || "object" == typeof t && t && Array.isArray(t) ? i || "object" == typeof t && t && !Array.isArray(t) || (t = {}) : t = [];
                for (const i in e) {
                    if ("__proto__" === i) continue;
                    const o = e[i],
                        s = "object" == typeof o,
                        n = t;
                    n[i] = s && Array.isArray(o) ? o.map((t => et(n[i], t))) : et(n[i], o)
                }
            }
            return t
        }

        function ot(t, i) {
            return i instanceof Array ? !!i.find((i => i.enable && J(t, i.mode))) : J(t, i.mode)
        }

        function st(t, i, e) {
            if (i instanceof Array)
                for (const o of i) {
                    const i = o.mode;
                    o.enable && J(t, i) && nt(o, e)
                } else {
                    const o = i.mode;
                    i.enable && J(t, o) && nt(i, e)
                }
        }

        function nt(t, i) {
            const e = t.selectors;
            if (e instanceof Array)
                for (const o of e) i(o, t);
            else i(e, t)
        }

        function at(t, i) {
            if (i && t) return t instanceof Array ? t.find((t => N(i, t.selectors))) : N(i, t.selectors) ? t : void 0
        }

        function rt(t) {
            return {
                position: t.getPosition(),
                radius: t.getRadius(),
                mass: t.getMass(),
                velocity: t.velocity,
                factor: O.create(F(t.options.bounce.horizontal), F(t.options.bounce.vertical))
            }
        }

        function lt(t, i) {
            const e = t.velocity.x,
                o = t.velocity.y,
                s = t.position,
                n = i.position;
            if (e * (n.x - s.x) + o * (n.y - s.y) >= 0) {
                const e = -Math.atan2(n.y - s.y, n.x - s.x),
                    o = t.mass,
                    a = i.mass,
                    r = t.velocity.rotate(e),
                    l = i.velocity.rotate(e),
                    c = B(r, l, o, a),
                    d = B(l, r, o, a),
                    h = c.rotate(-e),
                    u = d.rotate(-e);
                t.velocity.x = h.x * t.factor.x, t.velocity.y = h.y * t.factor.y, i.velocity.x = u.x * i.factor.x, i.velocity.y = u.y * i.factor.y
            }
        }

        function ct(t, i) {
            const e = it(t.getPosition(), t.getRadius()),
                o = G({
                    min: e.left,
                    max: e.right
                }, {
                    min: e.top,
                    max: e.bottom
                }, {
                    min: i.left,
                    max: i.right
                }, {
                    min: i.top,
                    max: i.bottom
                }, t.velocity.x, F(t.options.bounce.horizontal));
            o.bounced && (void 0 !== o.velocity && (t.velocity.x = o.velocity), void 0 !== o.position && (t.position.x = o.position));
            const s = G({
                min: e.top,
                max: e.bottom
            }, {
                min: e.left,
                max: e.right
            }, {
                min: i.top,
                max: i.bottom
            }, {
                min: i.left,
                max: i.right
            }, t.velocity.y, F(t.options.bounce.vertical));
            s.bounced && (void 0 !== s.velocity && (t.velocity.y = s.velocity), void 0 !== s.position && (t.position.y = s.position))
        }
        class dt {}

        function ht(t, i, e) {
            let o = e;
            return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? t + 6 * (i - t) * o : o < .5 ? i : o < 2 / 3 ? t + (i - t) * (2 / 3 - o) * 6 : t
        }

        function ut(t) {
            if (t.startsWith("rgb")) {
                const i = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                return i ? {
                    a: i.length > 4 ? parseFloat(i[5]) : 1,
                    b: parseInt(i[3], 10),
                    g: parseInt(i[2], 10),
                    r: parseInt(i[1], 10)
                } : void 0
            }
            if (t.startsWith("hsl")) {
                const i = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                return i ? gt({
                    a: i.length > 4 ? parseFloat(i[5]) : 1,
                    h: parseInt(i[1], 10),
                    l: parseInt(i[3], 10),
                    s: parseInt(i[2], 10)
                }) : void 0
            }
            if (t.startsWith("hsv")) {
                const i = /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                return i ? zt({
                    a: i.length > 4 ? parseFloat(i[5]) : 1,
                    h: parseInt(i[1], 10),
                    s: parseInt(i[2], 10),
                    v: parseInt(i[3], 10)
                }) : void 0
            } {
                const i = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
                    e = t.replace(i, ((t, i, e, o, s) => i + i + e + e + o + o + (void 0 !== s ? s + s : ""))),
                    o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(e);
                return o ? {
                    a: void 0 !== o[4] ? parseInt(o[4], 16) / 255 : 1,
                    b: parseInt(o[3], 16),
                    g: parseInt(o[2], 16),
                    r: parseInt(o[1], 16)
                } : void 0
            }
        }

        function vt(t, i, e = !0) {
            var o, s, n;
            if (void 0 === t) return;
            const a = "string" == typeof t ? {
                value: t
            } : t;
            let r;
            if ("string" == typeof a.value) r = a.value === dt.randomColorValue ? Ot() : mt(a.value);
            else if (a.value instanceof Array) {
                r = vt({
                    value: Z(a.value, i, e)
                })
            } else {
                const t = a.value,
                    i = null !== (o = t.rgb) && void 0 !== o ? o : a.value;
                if (void 0 !== i.r) r = i;
                else {
                    const i = null !== (s = t.hsl) && void 0 !== s ? s : a.value;
                    if (void 0 !== i.h && void 0 !== i.l) r = bt(i);
                    else {
                        const i = null !== (n = t.hsv) && void 0 !== n ? n : a.value;
                        void 0 !== i.h && void 0 !== i.v && (r = Mt(i))
                    }
                }
            }
            return r
        }

        function pt(t, i, e = !0) {
            const o = vt(t, i, e);
            return void 0 !== o ? ft(o) : void 0
        }

        function ft(t) {
            const i = t.r / 255,
                e = t.g / 255,
                o = t.b / 255,
                s = Math.max(i, e, o),
                n = Math.min(i, e, o),
                a = {
                    h: 0,
                    l: (s + n) / 2,
                    s: 0
                };
            return s != n && (a.s = a.l < .5 ? (s - n) / (s + n) : (s - n) / (2 - s - n), a.h = i === s ? (e - o) / (s - n) : a.h = e === s ? 2 + (o - i) / (s - n) : 4 + (i - e) / (s - n)), a.l *= 100, a.s *= 100, a.h *= 60, a.h < 0 && (a.h += 360), a
        }

        function yt(t) {
            var i;
            return null === (i = ut(t)) || void 0 === i ? void 0 : i.a
        }

        function mt(t) {
            return ut(t)
        }

        function bt(t) {
            const i = {
                    b: 0,
                    g: 0,
                    r: 0
                },
                e = {
                    h: t.h / 360,
                    l: t.l / 100,
                    s: t.s / 100
                };
            if (0 === e.s) i.b = e.l, i.g = e.l, i.r = e.l;
            else {
                const t = e.l < .5 ? e.l * (1 + e.s) : e.l + e.s - e.l * e.s,
                    o = 2 * e.l - t;
                i.r = ht(o, t, e.h + 1 / 3), i.g = ht(o, t, e.h), i.b = ht(o, t, e.h - 1 / 3)
            }
            return i.r = Math.floor(255 * i.r), i.g = Math.floor(255 * i.g), i.b = Math.floor(255 * i.b), i
        }

        function gt(t) {
            const i = bt(t);
            return {
                a: t.a,
                b: i.b,
                g: i.g,
                r: i.r
            }
        }

        function wt(t) {
            const i = t.l / 100,
                e = i + t.s / 100 * Math.min(i, 1 - i),
                o = e ? 2 * (1 - i / e) : 0;
            return {
                h: t.h,
                s: 100 * o,
                v: 100 * e
            }
        }

        function xt(t) {
            const i = wt(t);
            return {
                a: t.a,
                h: i.h,
                s: i.s,
                v: i.v
            }
        }

        function kt(t) {
            const i = t.v / 100,
                e = i * (1 - t.s / 100 / 2),
                o = 0 === e || 1 === e ? 0 : (i - e) / Math.min(e, 1 - e);
            return {
                h: t.h,
                l: 100 * e,
                s: 100 * o
            }
        }

        function Pt(t) {
            const i = kt(t);
            return {
                a: t.a,
                h: i.h,
                l: i.l,
                s: i.s
            }
        }

        function Mt(t) {
            const i = {
                    b: 0,
                    g: 0,
                    r: 0
                },
                e = t.h / 60,
                o = t.s / 100,
                s = t.v / 100,
                n = s * o,
                a = n * (1 - Math.abs(e % 2 - 1));
            let r;
            if (e >= 0 && e <= 1 ? r = {
                    r: n,
                    g: a,
                    b: 0
                } : e > 1 && e <= 2 ? r = {
                    r: a,
                    g: n,
                    b: 0
                } : e > 2 && e <= 3 ? r = {
                    r: 0,
                    g: n,
                    b: a
                } : e > 3 && e <= 4 ? r = {
                    r: 0,
                    g: a,
                    b: n
                } : e > 4 && e <= 5 ? r = {
                    r: a,
                    g: 0,
                    b: n
                } : e > 5 && e <= 6 && (r = {
                    r: n,
                    g: 0,
                    b: a
                }), r) {
                const t = s - n;
                i.r = Math.floor(255 * (r.r + t)), i.g = Math.floor(255 * (r.g + t)), i.b = Math.floor(255 * (r.b + t))
            }
            return i
        }

        function zt(t) {
            const i = Mt(t);
            return {
                a: t.a,
                b: i.b,
                g: i.g,
                r: i.r
            }
        }

        function Ct(t) {
            const i = {
                    r: t.r / 255,
                    g: t.g / 255,
                    b: t.b / 255
                },
                e = Math.max(i.r, i.g, i.b),
                o = e - Math.min(i.r, i.g, i.b);
            let s = 0;
            e === i.r ? s = (i.g - i.b) / o * 60 : e === i.g ? s = 60 * (2 + (i.b - i.r) / o) : e === i.b && (s = 60 * (4 + (i.r - i.g) / o));
            return {
                h: s,
                s: 100 * (e ? o / e : 0),
                v: 100 * e
            }
        }

        function St(t) {
            const i = Ct(t);
            return {
                a: t.a,
                h: i.h,
                s: i.s,
                v: i.v
            }
        }

        function Ot(t) {
            const i = null != t ? t : 0;
            return {
                b: Math.floor(E(L(i, 256))),
                g: Math.floor(E(L(i, 256))),
                r: Math.floor(E(L(i, 256)))
            }
        }

        function Tt(t, i) {
            return `rgba(${t.r}, ${t.g}, ${t.b}, ${null!=i?i:1})`
        }

        function At(t, i) {
            return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${null!=i?i:1})`
        }

        function Et(t, i) {
            return At(kt(t), i)
        }

        function Rt(t, i, e, o) {
            let s = t,
                n = i;
            return void 0 === s.r && (s = bt(t)), void 0 === n.r && (n = bt(i)), {
                b: A(s.b, n.b, e, o),
                g: A(s.g, n.g, e, o),
                r: A(s.r, n.r, e, o)
            }
        }

        function Dt(t, i, e) {
            var o, s;
            if (e === dt.randomColorValue) return Ot();
            if ("mid" !== e) return e;
            {
                const e = null !== (o = t.getFillColor()) && void 0 !== o ? o : t.getStrokeColor(),
                    n = null !== (s = null == i ? void 0 : i.getFillColor()) && void 0 !== s ? s : null == i ? void 0 : i.getStrokeColor();
                if (e && n && i) return Rt(e, n, t.getRadius(), i.getRadius());
                {
                    const t = null != e ? e : n;
                    if (t) return bt(t)
                }
            }
        }

        function It(t, i, e) {
            const o = "string" == typeof t ? t : t.value;
            return o === dt.randomColorValue ? e ? vt({
                value: o
            }) : i ? dt.randomColorValue : dt.midColorValue : vt({
                value: o
            })
        }

        function Lt(t) {
            return void 0 !== t ? {
                h: t.h.value,
                s: t.s.value,
                l: t.l.value
            } : void 0
        }

        function Ft(t, i, e) {
            t.beginPath(), t.moveTo(i.x, i.y), t.lineTo(e.x, e.y), t.closePath()
        }

        function Ht(t, i, e) {
            t.save(), t.fillStyle = null != e ? e : "rgba(0,0,0,0)", t.fillRect(0, 0, i.width, i.height), t.restore()
        }

        function qt(t, i) {
            t.clearRect(0, 0, i.width, i.height)
        }

        function _t(t, i, e, o, s, n, a, r, l, c, d, h) {
            let u = !1;
            if (q(e, o) <= s) Ft(t, e, o), u = !0;
            else if (a) {
                let i, a;
                const r = H(e, {
                    x: o.x - n.width,
                    y: o.y
                });
                if (r.distance <= s) {
                    const t = e.y - r.dy / r.dx * e.x;
                    i = {
                        x: 0,
                        y: t
                    }, a = {
                        x: n.width,
                        y: t
                    }
                } else {
                    const t = H(e, {
                        x: o.x,
                        y: o.y - n.height
                    });
                    if (t.distance <= s) {
                        const o = -(e.y - t.dy / t.dx * e.x) / (t.dy / t.dx);
                        i = {
                            x: o,
                            y: 0
                        }, a = {
                            x: o,
                            y: n.height
                        }
                    } else {
                        const t = H(e, {
                            x: o.x - n.width,
                            y: o.y - n.height
                        });
                        if (t.distance <= s) {
                            const o = e.y - t.dy / t.dx * e.x;
                            i = {
                                x: -o / (t.dy / t.dx),
                                y: o
                            }, a = {
                                x: i.x + n.width,
                                y: i.y + n.height
                            }
                        }
                    }
                }
                i && a && (Ft(t, e, i), Ft(t, o, a), u = !0)
            }
            if (u) {
                if (t.lineWidth = i, r && (t.globalCompositeOperation = l), t.strokeStyle = Tt(c, d), h.enable) {
                    const i = vt(h.color);
                    i && (t.shadowBlur = h.blur, t.shadowColor = Tt(i))
                }
                t.stroke()
            }
        }

        function Vt(t, i, e, o, s, n, a, r) {
            ! function(t, i, e, o) {
                t.beginPath(), t.moveTo(i.x, i.y), t.lineTo(e.x, e.y), t.lineTo(o.x, o.y), t.closePath()
            }(t, i, e, o), s && (t.globalCompositeOperation = n), t.fillStyle = Tt(a, r), t.fill()
        }

        function Bt(t, i, e, o, s) {
            t.save(), Ft(t, o, s), t.lineWidth = i, t.strokeStyle = e, t.stroke(), t.restore()
        }

        function Wt(t, i, e, o) {
            const s = Math.floor(e.getRadius() / i.getRadius()),
                n = i.getFillColor(),
                a = e.getFillColor();
            if (!n || !a) return;
            const r = i.getPosition(),
                l = e.getPosition(),
                c = Rt(n, a, i.getRadius(), e.getRadius()),
                d = t.createLinearGradient(r.x, r.y, l.x, l.y);
            return d.addColorStop(0, At(n, o)), d.addColorStop(s > 1 ? 1 : s, Tt(c, o)), d.addColorStop(1, At(a, o)), d
        }

        function Ut(t, i, e, o, s, n) {
            t.save(), Ft(t, e, o), t.strokeStyle = Tt(s, n), t.lineWidth = i, t.stroke(), t.restore()
        }

        function Gt(t, i, e, o, s, n, a, r, l, c, d) {
            const h = e.getPosition(),
                u = e.options.tilt,
                v = e.options.roll;
            i.save(), u.enable || v.enable ? i.setTransform(v.enable ? Math.cos(e.rollAngle) : 1, u.enable ? Math.cos(e.tilt.value) * e.tilt.cosDirection : 0, u.enable ? Math.sin(e.tilt.value) * e.tilt.sinDirection : 0, v.enable ? Math.sin(e.rollAngle) : 1, h.x, h.y) : i.translate(h.x, h.y), i.beginPath();
            const p = e.rotate.value + (e.options.rotate.path ? e.velocity.angle : 0);
            0 !== p && i.rotate(p), a && (i.globalCompositeOperation = r);
            const f = e.shadowColor;
            d.enable && f && (i.shadowBlur = d.blur, i.shadowColor = Tt(f), i.shadowOffsetX = d.offset.x, i.shadowOffsetY = d.offset.y), s && (i.fillStyle = s);
            const y = e.stroke;
            i.lineWidth = e.strokeWidth, n && (i.strokeStyle = n), Nt(t, i, e, l, c, o), y.width > 0 && i.stroke(), e.close && i.closePath(), e.fill && i.fill(), i.restore(), i.save(), u.enable ? i.setTransform(1, Math.cos(e.tilt.value) * e.tilt.cosDirection, Math.sin(e.tilt.value) * e.tilt.sinDirection, 1, h.x, h.y) : i.translate(h.x, h.y), 0 !== p && i.rotate(p), a && (i.globalCompositeOperation = r), $t(t, i, e, l, c, o), i.restore()
        }

        function Nt(t, i, e, o, s, n) {
            if (!e.shape) return;
            const a = t.drawers.get(e.shape);
            a && a.draw(i, e, o, s, n, t.retina.pixelRatio)
        }

        function $t(t, i, e, o, s, n) {
            if (!e.shape) return;
            const a = t.drawers.get(e.shape);
            (null == a ? void 0 : a.afterEffect) && a.afterEffect(i, e, o, s, n, t.retina.pixelRatio)
        }

        function jt(t, i, e) {
            i.draw && (t.save(), i.draw(t, e), t.restore())
        }

        function Qt(t, i, e, o) {
            void 0 !== i.drawParticle && (t.save(), i.drawParticle(t, e, o), t.restore())
        }

        function Jt(t, i, e, o, s, n, a, r, l) {
            const c = i.getPosition();
            if (t.beginPath(), e && (t.strokeStyle = At(e, s)), 0 === n) return;
            t.lineWidth = n;
            const d = a * Math.PI / 180;
            t.ellipse(c.x, c.y, o / 2, 2 * o, d, r, l), t.stroke()
        }
        dt.canvasClass = "tsparticles-canvas-el", dt.randomColorValue = "random", dt.midColorValue = "mid", dt.touchEndEvent = "touchend", dt.mouseDownEvent = "mousedown", dt.mouseUpEvent = "mouseup", dt.mouseMoveEvent = "mousemove", dt.touchStartEvent = "touchstart", dt.touchMoveEvent = "touchmove", dt.mouseLeaveEvent = "mouseleave", dt.mouseOutEvent = "mouseout", dt.touchCancelEvent = "touchcancel", dt.resizeEvent = "resize", dt.visibilityChangeEvent = "visibilitychange", dt.noPolygonDataLoaded = "No polygon data loaded.", dt.noPolygonFound = "No polygon found, you need to specify SVG url in config.";
        class Xt {
            constructor(t, i) {
                this.position = {
                    x: t,
                    y: i
                }
            }
        }
        class Yt extends Xt {
            constructor(t, i, e) {
                super(t, i), this.radius = e
            }
            contains(t) {
                return Math.pow(t.x - this.position.x, 2) + Math.pow(t.y - this.position.y, 2) <= this.radius * this.radius
            }
            intersects(t) {
                const i = t,
                    e = t,
                    o = this.position,
                    s = t.position,
                    n = Math.abs(s.x - o.x),
                    a = Math.abs(s.y - o.y),
                    r = this.radius;
                if (void 0 !== e.radius) {
                    return r + e.radius > Math.sqrt(n * n + a + a)
                }
                if (void 0 !== i.size) {
                    const t = i.size.width,
                        e = i.size.height,
                        o = Math.pow(n - t, 2) + Math.pow(a - e, 2);
                    return !(n > r + t || a > r + e) && (n <= t || a <= e || o <= r * r)
                }
                return !1
            }
        }
        class Zt extends Xt {
            constructor(t, i, e, o) {
                super(t, i), this.size = {
                    height: o,
                    width: e
                }
            }
            contains(t) {
                const i = this.size.width,
                    e = this.size.height,
                    o = this.position;
                return t.x >= o.x && t.x <= o.x + i && t.y >= o.y && t.y <= o.y + e
            }
            intersects(t) {
                const i = t,
                    e = t,
                    o = this.size.width,
                    s = this.size.height,
                    n = this.position,
                    a = t.position;
                if (void 0 !== e.radius) return e.intersects(this);
                if (void 0 !== i.size) {
                    const t = i.size,
                        e = t.width,
                        r = t.height;
                    return a.x < n.x + o && a.x + e > n.x && a.y < n.y + s && a.y + r > n.y
                }
                return !1
            }
        }
        class Kt extends Yt {
            constructor(t, i, e, o) {
                super(t, i, e), this.canvasSize = o, this.canvasSize = {
                    height: o.height,
                    width: o.width
                }
            }
            contains(t) {
                if (super.contains(t)) return !0;
                const i = {
                    x: t.x - this.canvasSize.width,
                    y: t.y
                };
                if (super.contains(i)) return !0;
                const e = {
                    x: t.x - this.canvasSize.width,
                    y: t.y - this.canvasSize.height
                };
                if (super.contains(e)) return !0;
                const o = {
                    x: t.x,
                    y: t.y - this.canvasSize.height
                };
                return super.contains(o)
            }
            intersects(t) {
                if (super.intersects(t)) return !0;
                const i = t,
                    e = t,
                    o = {
                        x: t.position.x - this.canvasSize.width,
                        y: t.position.y - this.canvasSize.height
                    };
                if (void 0 !== e.radius) {
                    const t = new Yt(o.x, o.y, 2 * e.radius);
                    return super.intersects(t)
                }
                if (void 0 !== i.size) {
                    const t = new Zt(o.x, o.y, 2 * i.size.width, 2 * i.size.height);
                    return super.intersects(t)
                }
                return !1
            }
        }

        function ti(t, i, e, o, s) {
            if (o) {
                let o = {
                    passive: !0
                };
                "boolean" == typeof s ? o.capture = s : void 0 !== s && (o = s), t.addEventListener(i, e, o)
            } else {
                const o = s;
                t.removeEventListener(i, e, o)
            }
        }
        class ii {
            constructor(t) {
                this.container = t, this.canPush = !0, this.mouseMoveHandler = t => this.mouseTouchMove(t), this.touchStartHandler = t => this.mouseTouchMove(t), this.touchMoveHandler = t => this.mouseTouchMove(t), this.touchEndHandler = () => this.mouseTouchFinish(), this.mouseLeaveHandler = () => this.mouseTouchFinish(), this.touchCancelHandler = () => this.mouseTouchFinish(), this.touchEndClickHandler = t => this.mouseTouchClick(t), this.mouseUpHandler = t => this.mouseTouchClick(t), this.mouseDownHandler = () => this.mouseDown(), this.visibilityChangeHandler = () => this.handleVisibilityChange(), this.resizeHandler = () => this.handleWindowResize()
            }
            addListeners() {
                this.manageListeners(!0)
            }
            removeListeners() {
                this.manageListeners(!1)
            }
            manageListeners(t) {
                var i;
                const e = this.container,
                    o = e.actualOptions,
                    s = o.interactivity.detectsOn;
                let n = dt.mouseLeaveEvent;
                if (s === S.window) e.interactivity.element = window, n = dt.mouseOutEvent;
                else if (s === S.parent && e.canvas.element) {
                    const t = e.canvas.element;
                    e.interactivity.element = null !== (i = t.parentElement) && void 0 !== i ? i : t.parentNode
                } else e.interactivity.element = e.canvas.element;
                const a = e.interactivity.element;
                if (!a) return;
                const r = a;
                (o.interactivity.events.onHover.enable || o.interactivity.events.onClick.enable) && (ti(a, dt.mouseMoveEvent, this.mouseMoveHandler, t), ti(a, dt.touchStartEvent, this.touchStartHandler, t), ti(a, dt.touchMoveEvent, this.touchMoveHandler, t), o.interactivity.events.onClick.enable ? (ti(a, dt.touchEndEvent, this.touchEndClickHandler, t), ti(a, dt.mouseUpEvent, this.mouseUpHandler, t), ti(a, dt.mouseDownEvent, this.mouseDownHandler, t)) : ti(a, dt.touchEndEvent, this.touchEndHandler, t), ti(a, n, this.mouseLeaveHandler, t), ti(a, dt.touchCancelEvent, this.touchCancelHandler, t)), e.canvas.element && (e.canvas.element.style.pointerEvents = r === e.canvas.element ? "initial" : "none"), o.interactivity.events.resize && ti(window, dt.resizeEvent, this.resizeHandler, t), document && ti(document, dt.visibilityChangeEvent, this.visibilityChangeHandler, t, !1)
            }
            handleWindowResize() {
                this.resizeTimeout && (clearTimeout(this.resizeTimeout), delete this.resizeTimeout), this.resizeTimeout = setTimeout((() => {
                    var t;
                    return null === (t = this.container.canvas) || void 0 === t ? void 0 : t.windowResize()
                }), 500)
            }
            handleVisibilityChange() {
                const t = this.container,
                    i = t.actualOptions;
                this.mouseTouchFinish(), i.pauseOnBlur && ((null === document || void 0 === document ? void 0 : document.hidden) ? (t.pageHidden = !0, t.pause()) : (t.pageHidden = !1, t.getAnimationStatus() ? t.play(!0) : t.draw()))
            }
            mouseDown() {
                const t = this.container.interactivity;
                if (t) {
                    const i = t.mouse;
                    i.clicking = !0, i.downPosition = i.position
                }
            }
            mouseTouchMove(t) {
                var i, e, o, s, n, a, r;
                const l = this.container,
                    c = l.actualOptions;
                if (void 0 === (null === (i = l.interactivity) || void 0 === i ? void 0 : i.element)) return;
                let d;
                l.interactivity.mouse.inside = !0;
                const h = l.canvas.element;
                if (t.type.startsWith("mouse")) {
                    this.canPush = !0;
                    const i = t;
                    if (l.interactivity.element === window) {
                        if (h) {
                            const t = h.getBoundingClientRect();
                            d = {
                                x: i.clientX - t.left,
                                y: i.clientY - t.top
                            }
                        }
                    } else if (c.interactivity.detectsOn === S.parent) {
                        const t = i.target,
                            s = i.currentTarget,
                            n = l.canvas.element;
                        if (t && s && n) {
                            const e = t.getBoundingClientRect(),
                                o = s.getBoundingClientRect(),
                                a = n.getBoundingClientRect();
                            d = {
                                x: i.offsetX + 2 * e.left - (o.left + a.left),
                                y: i.offsetY + 2 * e.top - (o.top + a.top)
                            }
                        } else d = {
                            x: null !== (e = i.offsetX) && void 0 !== e ? e : i.clientX,
                            y: null !== (o = i.offsetY) && void 0 !== o ? o : i.clientY
                        }
                    } else i.target === l.canvas.element && (d = {
                        x: null !== (s = i.offsetX) && void 0 !== s ? s : i.clientX,
                        y: null !== (n = i.offsetY) && void 0 !== n ? n : i.clientY
                    })
                } else {
                    this.canPush = "touchmove" !== t.type;
                    const i = t,
                        e = i.touches[i.touches.length - 1],
                        o = null == h ? void 0 : h.getBoundingClientRect();
                    d = {
                        x: e.clientX - (null !== (a = null == o ? void 0 : o.left) && void 0 !== a ? a : 0),
                        y: e.clientY - (null !== (r = null == o ? void 0 : o.top) && void 0 !== r ? r : 0)
                    }
                }
                const u = l.retina.pixelRatio;
                d && (d.x *= u, d.y *= u), l.interactivity.mouse.position = d, l.interactivity.status = dt.mouseMoveEvent
            }
            mouseTouchFinish() {
                const t = this.container.interactivity;
                if (void 0 === t) return;
                const i = t.mouse;
                delete i.position, delete i.clickPosition, delete i.downPosition, t.status = dt.mouseLeaveEvent, i.inside = !1, i.clicking = !1
            }
            mouseTouchClick(t) {
                const i = this.container,
                    e = i.actualOptions,
                    o = i.interactivity.mouse;
                o.inside = !0;
                let s = !1;
                const n = o.position;
                if (void 0 !== n && e.interactivity.events.onClick.enable) {
                    for (const [, t] of i.plugins)
                        if (void 0 !== t.clickPositionValid && (s = t.clickPositionValid(n), s)) break;
                    s || this.doMouseTouchClick(t), o.clicking = !1
                }
            }
            doMouseTouchClick(t) {
                const i = this.container,
                    e = i.actualOptions;
                if (this.canPush) {
                    const t = i.interactivity.mouse.position;
                    if (!t) return;
                    i.interactivity.mouse.clickPosition = {
                        x: t.x,
                        y: t.y
                    }, i.interactivity.mouse.clickTime = (new Date).getTime();
                    const o = e.interactivity.events.onClick;
                    if (o.mode instanceof Array)
                        for (const t of o.mode) this.handleClickMode(t);
                    else this.handleClickMode(o.mode)
                }
                "touchend" === t.type && setTimeout((() => this.mouseTouchFinish()), 500)
            }
            handleClickMode(t) {
                const i = this.container,
                    e = i.actualOptions,
                    o = e.interactivity.modes.push.quantity,
                    s = e.interactivity.modes.remove.quantity;
                switch (t) {
                    case d.push:
                        if (o > 0) {
                            const t = Z([void 0, ...e.interactivity.modes.push.groups]),
                                s = void 0 !== t ? i.actualOptions.particles.groups[t] : void 0;
                            i.particles.push(o, i.interactivity.mouse, s, t)
                        }
                        break;
                    case d.remove:
                        i.particles.removeQuantity(s);
                        break;
                    case d.bubble:
                        i.bubble.clicking = !0;
                        break;
                    case d.repulse:
                        i.repulse.clicking = !0, i.repulse.count = 0;
                        for (const t of i.repulse.particles) t.velocity.setTo(t.initialVelocity);
                        i.repulse.particles = [], i.repulse.finish = !1, setTimeout((() => {
                            i.destroyed || (i.repulse.clicking = !1)
                        }), 1e3 * e.interactivity.modes.repulse.duration);
                        break;
                    case d.attract:
                        i.attract.clicking = !0, i.attract.count = 0;
                        for (const t of i.attract.particles) t.velocity.setTo(t.initialVelocity);
                        i.attract.particles = [], i.attract.finish = !1, setTimeout((() => {
                            i.destroyed || (i.attract.clicking = !1)
                        }), 1e3 * e.interactivity.modes.attract.duration);
                        break;
                    case d.pause:
                        i.getAnimationStatus() ? i.pause() : i.play()
                }
                for (const [, e] of i.plugins) e.handleClickMode && e.handleClickMode(t)
            }
        }
        const ei = [],
            oi = new Map,
            si = new Map,
            ni = new Map,
            ai = new Map,
            ri = new Map,
            li = new Map,
            ci = new Map;
        class di {
            static getPlugin(t) {
                return ei.find((i => i.id === t))
            }
            static addPlugin(t) {
                di.getPlugin(t.id) || ei.push(t)
            }
            static getAvailablePlugins(t) {
                const i = new Map;
                for (const e of ei) e.needsPlugin(t.actualOptions) && i.set(e.id, e.getPlugin(t));
                return i
            }
            static loadOptions(t, i) {
                for (const e of ei) e.loadOptions(t, i)
            }
            static getPreset(t) {
                return ri.get(t)
            }
            static addPreset(t, i, e = !1) {
                !e && di.getPreset(t) || ri.set(t, i)
            }
            static addShapeDrawer(t, i) {
                di.getShapeDrawer(t) || li.set(t, i)
            }
            static getShapeDrawer(t) {
                return li.get(t)
            }
            static getSupportedShapes() {
                return li.keys()
            }
            static getPathGenerator(t) {
                return ci.get(t)
            }
            static addPathGenerator(t, i) {
                di.getPathGenerator(t) || ci.set(t, i)
            }
            static getInteractors(t) {
                let i = ni.get(t);
                return i || (i = [...oi.values()].map((i => i(t))), ni.set(t, i)), i
            }
            static addInteractor(t, i) {
                oi.set(t, i)
            }
            static getUpdaters(t) {
                let i = ai.get(t);
                return i || (i = [...si.values()].map((i => i(t))), ai.set(t, i)), i
            }
            static addParticleUpdater(t, i) {
                si.set(t, i)
            }
        }
        class hi {
            constructor(t, i) {
                this.position = t, this.particle = i
            }
        }
        class ui {
            constructor(t, i) {
                this.rectangle = t, this.capacity = i, this.points = [], this.divided = !1
            }
            subdivide() {
                const t = this.rectangle.position.x,
                    i = this.rectangle.position.y,
                    e = this.rectangle.size.width,
                    o = this.rectangle.size.height,
                    s = this.capacity;
                this.northEast = new ui(new Zt(t, i, e / 2, o / 2), s), this.northWest = new ui(new Zt(t + e / 2, i, e / 2, o / 2), s), this.southEast = new ui(new Zt(t, i + o / 2, e / 2, o / 2), s), this.southWest = new ui(new Zt(t + e / 2, i + o / 2, e / 2, o / 2), s), this.divided = !0
            }
            insert(t) {
                var i, e, o, s, n;
                return !!this.rectangle.contains(t.position) && (this.points.length < this.capacity ? (this.points.push(t), !0) : (this.divided || this.subdivide(), null !== (n = (null === (i = this.northEast) || void 0 === i ? void 0 : i.insert(t)) || (null === (e = this.northWest) || void 0 === e ? void 0 : e.insert(t)) || (null === (o = this.southEast) || void 0 === o ? void 0 : o.insert(t)) || (null === (s = this.southWest) || void 0 === s ? void 0 : s.insert(t))) && void 0 !== n && n))
            }
            queryCircle(t, i) {
                return this.query(new Yt(t.x, t.y, i))
            }
            queryCircleWarp(t, i, e) {
                const o = e,
                    s = e;
                return this.query(new Kt(t.x, t.y, i, void 0 !== o.canvas ? o.canvas.size : s))
            }
            queryRectangle(t, i) {
                return this.query(new Zt(t.x, t.y, i.width, i.height))
            }
            query(t, i) {
                var e, o, s, n;
                const a = null != i ? i : [];
                if (!t.intersects(this.rectangle)) return [];
                for (const i of this.points) t.contains(i.position) && a.push(i.particle);
                return this.divided && (null === (e = this.northEast) || void 0 === e || e.query(t, a), null === (o = this.northWest) || void 0 === o || o.query(t, a), null === (s = this.southEast) || void 0 === s || s.query(t, a), null === (n = this.southWest) || void 0 === n || n.query(t, a)), a
            }
        }
        class vi {
            constructor(t) {
                this.container = t, this.size = {
                    height: 0,
                    width: 0
                }, this.context = null, this.generatedCanvas = !1
            }
            init() {
                this.resize(), this.initStyle(), this.initCover(), this.initTrail(), this.initBackground(), this.paint()
            }
            loadCanvas(t, i) {
                var e;
                t.className || (t.className = dt.canvasClass), this.generatedCanvas && (null === (e = this.element) || void 0 === e || e.remove()), this.generatedCanvas = null != i ? i : this.generatedCanvas, this.element = t, this.originalStyle = et({}, this.element.style), this.size.height = t.offsetHeight, this.size.width = t.offsetWidth, this.context = this.element.getContext("2d"), this.container.retina.init(), this.initBackground()
            }
            destroy() {
                var t;
                this.generatedCanvas && (null === (t = this.element) || void 0 === t || t.remove()), this.draw((t => {
                    qt(t, this.size)
                }))
            }
            paint() {
                const t = this.container.actualOptions;
                this.draw((i => {
                    t.backgroundMask.enable && t.backgroundMask.cover && this.coverColor ? (qt(i, this.size), this.paintBase(Tt(this.coverColor, this.coverColor.a))) : this.paintBase()
                }))
            }
            clear() {
                const t = this.container.actualOptions,
                    i = t.particles.move.trail;
                t.backgroundMask.enable ? this.paint() : i.enable && i.length > 0 && this.trailFillColor ? this.paintBase(Tt(this.trailFillColor, 1 / i.length)) : this.draw((t => {
                    qt(t, this.size)
                }))
            }
            windowResize() {
                if (!this.element) return;
                const t = this.container;
                this.resize(), t.actualOptions.setResponsive(this.size.width, t.retina.pixelRatio, t.options), t.particles.setDensity();
                for (const [, i] of t.plugins) void 0 !== i.resize && i.resize()
            }
            resize() {
                if (!this.element) return;
                const t = this.container,
                    i = t.retina.pixelRatio,
                    e = t.canvas.size,
                    o = e.width,
                    s = e.height;
                e.width = this.element.offsetWidth * i, e.height = this.element.offsetHeight * i, this.element.width = e.width, this.element.height = e.height, this.container.started && (this.resizeFactor = {
                    width: e.width / o,
                    height: e.height / s
                })
            }
            drawConnectLine(t, i) {
                this.draw((e => {
                    var o;
                    const s = this.lineStyle(t, i);
                    if (!s) return;
                    const n = t.getPosition(),
                        a = i.getPosition();
                    Bt(e, null !== (o = t.linksWidth) && void 0 !== o ? o : this.container.retina.linksWidth, s, n, a)
                }))
            }
            drawGrabLine(t, i, e, o) {
                const s = this.container;
                this.draw((n => {
                    var a;
                    const r = t.getPosition();
                    Ut(n, null !== (a = t.linksWidth) && void 0 !== a ? a : s.retina.linksWidth, r, o, i, e)
                }))
            }
            drawParticle(t, i) {
                var e, o, s;
                if (t.spawning || t.destroyed) return;
                const n = t.getFillColor(),
                    a = null !== (e = t.getStrokeColor()) && void 0 !== e ? e : n;
                if (!n && !a) return;
                let [r, l] = this.getPluginParticleColors(t);
                const c = t.options.twinkle.particles,
                    d = c.enable && Math.random() < c.frequency;
                if (!r || !l) {
                    const t = pt(c.color);
                    r || (r = d && void 0 !== t ? t : n || void 0), l || (l = d && void 0 !== t ? t : a || void 0)
                }
                const h = this.container.actualOptions,
                    u = t.options.zIndex,
                    v = 1 - u.opacityRate * t.zIndexFactor,
                    p = t.getRadius(),
                    f = d ? c.opacity : null !== (o = t.bubble.opacity) && void 0 !== o ? o : t.opacity.value,
                    y = null !== (s = t.stroke.opacity) && void 0 !== s ? s : f,
                    m = f * v,
                    b = r ? At(r, m) : void 0;
                if (!b && !l) return;
                const g = t.options.orbit;
                this.draw((e => {
                    const o = 1 - u.sizeRate * t.zIndexFactor,
                        s = l ? At(l, y * v) : b;
                    p <= 0 || (g.enable && this.drawOrbit(t, C.back), Gt(this.container, e, t, i, b, s, h.backgroundMask.enable, h.backgroundMask.composite, p * o, m, t.options.shadow), g.enable && this.drawOrbit(t, C.front))
                }))
            }
            drawOrbit(t, i) {
                const e = this.container,
                    o = t.options.orbit;
                let s, n;
                i === C.back ? (s = Math.PI / 2, n = 3 * Math.PI / 2) : i === C.front ? (s = 3 * Math.PI / 2, n = Math.PI / 2) : (s = 0, n = 2 * Math.PI), this.draw((i => {
                    var a, r, l, c;
                    Jt(i, t, null !== (a = t.orbitColor) && void 0 !== a ? a : t.getFillColor(), null !== (l = null !== (r = t.orbitRadius) && void 0 !== r ? r : e.retina.orbitRadius) && void 0 !== l ? l : t.getRadius(), o.opacity, o.width, (null !== (c = t.orbitRotation) && void 0 !== c ? c : 0) * e.retina.pixelRatio, s, n)
                }))
            }
            drawPlugin(t, i) {
                this.draw((e => {
                    jt(e, t, i)
                }))
            }
            drawParticlePlugin(t, i, e) {
                this.draw((o => {
                    Qt(o, t, i, e)
                }))
            }
            initBackground() {
                const t = this.container.actualOptions.background,
                    i = this.element,
                    e = null == i ? void 0 : i.style;
                if (e) {
                    if (t.color) {
                        const i = vt(t.color);
                        e.backgroundColor = i ? Tt(i, t.opacity) : ""
                    } else e.backgroundColor = "";
                    e.backgroundImage = t.image || "", e.backgroundPosition = t.position || "", e.backgroundRepeat = t.repeat || "", e.backgroundSize = t.size || ""
                }
            }
            draw(t) {
                if (this.context) return t(this.context)
            }
            initCover() {
                const t = this.container.actualOptions.backgroundMask.cover,
                    i = vt(t.color);
                i && (this.coverColor = {
                    r: i.r,
                    g: i.g,
                    b: i.b,
                    a: t.opacity
                })
            }
            initTrail() {
                const t = this.container.actualOptions,
                    i = vt(t.particles.move.trail.fillColor);
                if (i) {
                    const e = t.particles.move.trail;
                    this.trailFillColor = {
                        r: i.r,
                        g: i.g,
                        b: i.b,
                        a: 1 / e.length
                    }
                }
            }
            getPluginParticleColors(t) {
                let i, e;
                for (const [, o] of this.container.plugins)
                    if (!i && o.particleFillColor && (i = pt(o.particleFillColor(t))), !e && o.particleStrokeColor && (e = pt(o.particleStrokeColor(t))), i && e) break;
                return [i, e]
            }
            initStyle() {
                const t = this.element,
                    i = this.container.actualOptions;
                if (!t) return;
                const e = this.originalStyle;
                i.fullScreen.enable ? (this.originalStyle = et({}, t.style), t.style.position = "fixed", t.style.zIndex = i.fullScreen.zIndex.toString(10), t.style.top = "0", t.style.left = "0", t.style.width = "100%", t.style.height = "100%") : e && (t.style.position = e.position, t.style.zIndex = e.zIndex, t.style.top = e.top, t.style.left = e.left, t.style.width = e.width, t.style.height = e.height)
            }
            paintBase(t) {
                this.draw((i => {
                    Ht(i, this.size, t)
                }))
            }
            lineStyle(t, i) {
                return this.draw((e => {
                    const o = this.container.actualOptions.interactivity.modes.connect;
                    return Wt(e, t, i, o.links.opacity)
                }))
            }
        }
        class pi {
            constructor() {
                this.value = "#fff"
            }
            static create(t, i) {
                const e = null != t ? t : new pi;
                return void 0 !== i && ("string" == typeof i || i instanceof Array ? e.load({
                    value: i
                }) : e.load(i)), e
            }
            load(t) {
                void 0 !== (null == t ? void 0 : t.value) && (this.value = t.value)
            }
        }
        class fi {
            constructor() {
                this.blur = 5, this.color = new pi, this.enable = !1, this.color.value = "#00ff00"
            }
            load(t) {
                void 0 !== t && (void 0 !== t.blur && (this.blur = t.blur), this.color = pi.create(this.color, t.color), void 0 !== t.enable && (this.enable = t.enable))
            }
        }
        class yi {
            constructor() {
                this.enable = !1, this.frequency = 1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.color && (this.color = pi.create(this.color, t.color)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = t.opacity))
            }
        }
        class mi {
            constructor() {
                this.blink = !1, this.color = new pi, this.consent = !1, this.distance = 100, this.enable = !1, this.frequency = 1, this.opacity = 1, this.shadow = new fi, this.triangles = new yi, this.width = 1, this.warp = !1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.id && (this.id = t.id), void 0 !== t.blink && (this.blink = t.blink), this.color = pi.create(this.color, t.color), void 0 !== t.consent && (this.consent = t.consent), void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = t.opacity), this.shadow.load(t.shadow), this.triangles.load(t.triangles), void 0 !== t.width && (this.width = t.width), void 0 !== t.warp && (this.warp = t.warp))
            }
        }
        class bi {
            constructor() {
                this.distance = 200, this.enable = !1, this.rotate = {
                    x: 3e3,
                    y: 3e3
                }
            }
            get rotateX() {
                return this.rotate.x
            }
            set rotateX(t) {
                this.rotate.x = t
            }
            get rotateY() {
                return this.rotate.y
            }
            set rotateY(t) {
                this.rotate.y = t
            }
            load(t) {
                var i, e, o, s;
                if (!t) return;
                void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.enable && (this.enable = t.enable);
                const n = null !== (e = null === (i = t.rotate) || void 0 === i ? void 0 : i.x) && void 0 !== e ? e : t.rotateX;
                void 0 !== n && (this.rotate.x = n);
                const a = null !== (s = null === (o = t.rotate) || void 0 === o ? void 0 : o.y) && void 0 !== s ? s : t.rotateY;
                void 0 !== a && (this.rotate.y = a)
            }
        }
        class gi {
            constructor() {
                this.enable = !1, this.length = 10, this.fillColor = new pi, this.fillColor.value = "#000000"
            }
            load(t) {
                void 0 !== t && (void 0 !== t.enable && (this.enable = t.enable), this.fillColor = pi.create(this.fillColor, t.fillColor), void 0 !== t.length && (this.length = t.length))
            }
        }
        class wi {
            constructor() {
                this.enable = !1, this.minimumValue = 0
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.minimumValue && (this.minimumValue = t.minimumValue))
            }
        }
        class xi {
            constructor() {
                this.random = new wi, this.value = 0
            }
            load(t) {
                t && ("boolean" == typeof t.random ? this.random.enable = t.random : this.random.load(t.random), void 0 !== t.value && (this.value = L(t.value, this.random.enable ? this.random.minimumValue : void 0)))
            }
        }
        class ki extends xi {
            constructor() {
                super()
            }
        }
        class Pi {
            constructor() {
                this.clamp = !0, this.delay = new ki, this.enable = !1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.clamp && (this.clamp = t.clamp), this.delay.load(t.delay), void 0 !== t.enable && (this.enable = t.enable), this.generator = t.generator)
            }
        }
        class Mi {
            constructor() {
                this.offset = 0, this.value = 90
            }
            load(t) {
                void 0 !== t && (void 0 !== t.offset && (this.offset = t.offset), void 0 !== t.value && (this.value = t.value))
            }
        }
        class zi {
            constructor() {
                this.acceleration = 9.81, this.enable = !1, this.inverse = !1, this.maxSpeed = 50
            }
            load(t) {
                t && (void 0 !== t.acceleration && (this.acceleration = t.acceleration), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.inverse && (this.inverse = t.inverse), void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed))
            }
        }
        class Ci {
            constructor() {
                this.default = f.out
            }
            load(t) {
                var i, e, o, s;
                t && (void 0 !== t.default && (this.default = t.default), this.bottom = null !== (i = t.bottom) && void 0 !== i ? i : t.default, this.left = null !== (e = t.left) && void 0 !== e ? e : t.default, this.right = null !== (o = t.right) && void 0 !== o ? o : t.default, this.top = null !== (s = t.top) && void 0 !== s ? s : t.default)
            }
        }
        class Si {
            constructor() {
                this.angle = new Mi, this.attract = new bi, this.decay = 0, this.distance = {}, this.direction = a.none, this.drift = 0, this.enable = !1, this.gravity = new zi, this.path = new Pi, this.outModes = new Ci, this.random = !1, this.size = !1, this.speed = 2, this.straight = !1, this.trail = new gi, this.vibrate = !1, this.warp = !1
            }
            get collisions() {
                return !1
            }
            set collisions(t) {}
            get bounce() {
                return this.collisions
            }
            set bounce(t) {
                this.collisions = t
            }
            get out_mode() {
                return this.outMode
            }
            set out_mode(t) {
                this.outMode = t
            }
            get outMode() {
                return this.outModes.default
            }
            set outMode(t) {
                this.outModes.default = t
            }
            get noise() {
                return this.path
            }
            set noise(t) {
                this.path = t
            }
            load(t) {
                var i, e, o;
                if (void 0 === t) return;
                void 0 !== t.angle && ("number" == typeof t.angle ? this.angle.value = t.angle : this.angle.load(t.angle)), this.attract.load(t.attract), void 0 !== t.decay && (this.decay = t.decay), void 0 !== t.direction && (this.direction = t.direction), void 0 !== t.distance && (this.distance = "number" == typeof t.distance ? {
                    horizontal: t.distance,
                    vertical: t.distance
                } : et({}, t.distance)), void 0 !== t.drift && (this.drift = L(t.drift)), void 0 !== t.enable && (this.enable = t.enable), this.gravity.load(t.gravity);
                const s = null !== (i = t.outMode) && void 0 !== i ? i : t.out_mode;
                void 0 === t.outModes && void 0 === s || ("string" == typeof t.outModes || void 0 === t.outModes && void 0 !== s ? this.outModes.load({
                    default: null !== (e = t.outModes) && void 0 !== e ? e : s
                }) : this.outModes.load(t.outModes)), this.path.load(null !== (o = t.path) && void 0 !== o ? o : t.noise), void 0 !== t.random && (this.random = t.random), void 0 !== t.size && (this.size = t.size), void 0 !== t.speed && (this.speed = L(t.speed)), void 0 !== t.straight && (this.straight = t.straight), this.trail.load(t.trail), void 0 !== t.vibrate && (this.vibrate = t.vibrate), void 0 !== t.warp && (this.warp = t.warp)
            }
        }
        class Oi {
            constructor() {
                this.enable = !1, this.area = 800, this.factor = 1e3
            }
            get value_area() {
                return this.area
            }
            set value_area(t) {
                this.area = t
            }
            load(t) {
                var i;
                if (void 0 === t) return;
                void 0 !== t.enable && (this.enable = t.enable);
                const e = null !== (i = t.area) && void 0 !== i ? i : t.value_area;
                void 0 !== e && (this.area = e), void 0 !== t.factor && (this.factor = t.factor)
            }
        }
        class Ti {
            constructor() {
                this.density = new Oi, this.limit = 0, this.value = 100
            }
            get max() {
                return this.limit
            }
            set max(t) {
                this.limit = t
            }
            load(t) {
                var i;
                if (void 0 === t) return;
                this.density.load(t.density);
                const e = null !== (i = t.limit) && void 0 !== i ? i : t.max;
                void 0 !== e && (this.limit = e), void 0 !== t.value && (this.value = t.value)
            }
        }
        class Ai {
            constructor() {
                this.count = 0, this.enable = !1, this.speed = 1, this.sync = !1
            }
            load(t) {
                t && (void 0 !== t.count && (this.count = t.count), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.sync && (this.sync = t.sync))
            }
        }
        class Ei extends Ai {
            constructor() {
                super(), this.destroy = w.none, this.enable = !1, this.minimumValue = 0, this.speed = 2, this.startValue = P.random, this.sync = !1
            }
            get opacity_min() {
                return this.minimumValue
            }
            set opacity_min(t) {
                this.minimumValue = t
            }
            load(t) {
                var i;
                if (void 0 === t) return;
                super.load(t), void 0 !== t.destroy && (this.destroy = t.destroy), void 0 !== t.enable && (this.enable = t.enable);
                const e = null !== (i = t.minimumValue) && void 0 !== i ? i : t.opacity_min;
                void 0 !== e && (this.minimumValue = e), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.startValue && (this.startValue = t.startValue), void 0 !== t.sync && (this.sync = t.sync)
            }
        }
        class Ri extends xi {
            constructor() {
                super(), this.animation = new Ei, this.random.minimumValue = .1, this.value = 1
            }
            get anim() {
                return this.animation
            }
            set anim(t) {
                this.animation = t
            }
            load(t) {
                var i;
                if (!t) return;
                super.load(t);
                const e = null !== (i = t.animation) && void 0 !== i ? i : t.anim;
                void 0 !== e && (this.animation.load(e), this.value = L(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
            }
        }
        class Di {
            constructor() {
                this.options = {}, this.type = k.circle
            }
            get image() {
                var t;
                return null !== (t = this.options[k.image]) && void 0 !== t ? t : this.options[k.images]
            }
            set image(t) {
                this.options[k.image] = t, this.options[k.images] = t
            }
            get custom() {
                return this.options
            }
            set custom(t) {
                this.options = t
            }
            get images() {
                return this.image instanceof Array ? this.image : [this.image]
            }
            set images(t) {
                this.image = t
            }
            get stroke() {
                return []
            }
            set stroke(t) {}
            get character() {
                var t;
                return null !== (t = this.options[k.character]) && void 0 !== t ? t : this.options[k.char]
            }
            set character(t) {
                this.options[k.character] = t, this.options[k.char] = t
            }
            get polygon() {
                var t;
                return null !== (t = this.options[k.polygon]) && void 0 !== t ? t : this.options[k.star]
            }
            set polygon(t) {
                this.options[k.polygon] = t, this.options[k.star] = t
            }
            load(t) {
                var i, e, o;
                if (void 0 === t) return;
                const s = null !== (i = t.options) && void 0 !== i ? i : t.custom;
                if (void 0 !== s)
                    for (const t in s) {
                        const i = s[t];
                        void 0 !== i && (this.options[t] = et(null !== (e = this.options[t]) && void 0 !== e ? e : {}, i))
                    }
                this.loadShape(t.character, k.character, k.char, !0), this.loadShape(t.polygon, k.polygon, k.star, !1), this.loadShape(null !== (o = t.image) && void 0 !== o ? o : t.images, k.image, k.images, !0), void 0 !== t.type && (this.type = t.type)
            }
            loadShape(t, i, e, o) {
                var s, n, a, r;
                void 0 !== t && (t instanceof Array ? (this.options[i] instanceof Array || (this.options[i] = [], this.options[e] && !o || (this.options[e] = [])), this.options[i] = et(null !== (s = this.options[i]) && void 0 !== s ? s : [], t), this.options[e] && !o || (this.options[e] = et(null !== (n = this.options[e]) && void 0 !== n ? n : [], t))) : (this.options[i] instanceof Array && (this.options[i] = {}, this.options[e] && !o || (this.options[e] = {})), this.options[i] = et(null !== (a = this.options[i]) && void 0 !== a ? a : {}, t), this.options[e] && !o || (this.options[e] = et(null !== (r = this.options[e]) && void 0 !== r ? r : {}, t))))
            }
        }
        class Ii extends Ai {
            constructor() {
                super(), this.destroy = w.none, this.enable = !1, this.minimumValue = 0, this.speed = 5, this.startValue = P.random, this.sync = !1
            }
            get size_min() {
                return this.minimumValue
            }
            set size_min(t) {
                this.minimumValue = t
            }
            load(t) {
                var i;
                if (void 0 === t) return;
                super.load(t), void 0 !== t.destroy && (this.destroy = t.destroy), void 0 !== t.enable && (this.enable = t.enable);
                const e = null !== (i = t.minimumValue) && void 0 !== i ? i : t.size_min;
                void 0 !== e && (this.minimumValue = e), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.startValue && (this.startValue = t.startValue), void 0 !== t.sync && (this.sync = t.sync)
            }
        }
        class Li extends xi {
            constructor() {
                super(), this.animation = new Ii, this.random.minimumValue = 1, this.value = 3
            }
            get anim() {
                return this.animation
            }
            set anim(t) {
                this.animation = t
            }
            load(t) {
                var i;
                if (!t) return;
                super.load(t);
                const e = null !== (i = t.animation) && void 0 !== i ? i : t.anim;
                void 0 !== e && (this.animation.load(e), this.value = L(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
            }
        }
        class Fi {
            constructor() {
                this.enable = !1, this.speed = 0, this.sync = !1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.sync && (this.sync = t.sync))
            }
        }
        class Hi extends xi {
            constructor() {
                super(), this.animation = new Fi, this.direction = r.clockwise, this.path = !1, this.value = 0
            }
            load(t) {
                t && (super.load(t), void 0 !== t.direction && (this.direction = t.direction), this.animation.load(t.animation), void 0 !== t.path && (this.path = t.path))
            }
        }
        class qi {
            constructor() {
                this.blur = 0, this.color = new pi, this.enable = !1, this.offset = {
                    x: 0,
                    y: 0
                }, this.color.value = "#000000"
            }
            load(t) {
                void 0 !== t && (void 0 !== t.blur && (this.blur = t.blur), this.color = pi.create(this.color, t.color), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.offset && (void 0 !== t.offset.x && (this.offset.x = t.offset.x), void 0 !== t.offset.y && (this.offset.y = t.offset.y)))
            }
        }
        class _i {
            constructor() {
                this.count = 0, this.enable = !1, this.offset = 0, this.speed = 1, this.sync = !0
            }
            load(t) {
                void 0 !== t && (void 0 !== t.count && (this.count = t.count), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.offset && (this.offset = L(t.offset)), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.sync && (this.sync = t.sync))
            }
        }
        class Vi {
            constructor() {
                this.h = new _i, this.s = new _i, this.l = new _i
            }
            load(t) {
                t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l))
            }
        }
        class Bi extends pi {
            constructor() {
                super(), this.animation = new Vi
            }
            static create(t, i) {
                const e = null != t ? t : new Bi;
                return void 0 !== i && e.load("string" == typeof i ? {
                    value: i
                } : i), e
            }
            load(t) {
                if (super.load(t), !t) return;
                const i = t.animation;
                void 0 !== i && (void 0 !== i.enable ? this.animation.h.load(i) : this.animation.load(t.animation))
            }
        }
        class Wi {
            constructor() {
                this.width = 0
            }
            load(t) {
                void 0 !== t && (void 0 !== t.color && (this.color = Bi.create(this.color, t.color)), void 0 !== t.width && (this.width = t.width), void 0 !== t.opacity && (this.opacity = t.opacity))
            }
        }
        class Ui extends xi {
            constructor() {
                super(), this.random.minimumValue = .1, this.value = 1
            }
        }
        class Gi {
            constructor() {
                this.horizontal = new Ui, this.vertical = new Ui
            }
            load(t) {
                t && (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical))
            }
        }
        class Ni {
            constructor() {
                this.enable = !0, this.retries = 0
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.retries && (this.retries = t.retries))
            }
        }
        class $i {
            constructor() {
                this.bounce = new Gi, this.enable = !1, this.mode = p.bounce, this.overlap = new Ni
            }
            load(t) {
                void 0 !== t && (this.bounce.load(t.bounce), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.overlap.load(t.overlap))
            }
        }
        class ji {
            constructor() {
                this.enable = !1, this.frequency = .05, this.opacity = 1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.color && (this.color = pi.create(this.color, t.color)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = t.opacity))
            }
        }
        class Qi {
            constructor() {
                this.lines = new ji, this.particles = new ji
            }
            load(t) {
                void 0 !== t && (this.lines.load(t.lines), this.particles.load(t.particles))
            }
        }
        class Ji extends xi {
            constructor() {
                super(), this.sync = !1
            }
            load(t) {
                t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync))
            }
        }
        class Xi extends xi {
            constructor() {
                super(), this.random.minimumValue = 1e-4, this.sync = !1
            }
            load(t) {
                void 0 !== t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync))
            }
        }
        class Yi {
            constructor() {
                this.count = 0, this.delay = new Ji, this.duration = new Xi
            }
            load(t) {
                void 0 !== t && (void 0 !== t.count && (this.count = t.count), this.delay.load(t.delay), this.duration.load(t.duration))
            }
        }
        class Zi extends xi {
            constructor() {
                super(), this.value = 3
            }
        }
        class Ki extends xi {
            constructor() {
                super(), this.value = {
                    min: 4,
                    max: 9
                }
            }
        }
        class te {
            constructor() {
                this.count = 1, this.factor = new Zi, this.rate = new Ki, this.sizeOffset = !0
            }
            load(t) {
                t && (void 0 !== t.count && (this.count = t.count), this.factor.load(t.factor), this.rate.load(t.rate), void 0 !== t.particles && (this.particles = et({}, t.particles)), void 0 !== t.sizeOffset && (this.sizeOffset = t.sizeOffset))
            }
        }
        class ie {
            constructor() {
                this.mode = h.none, this.split = new te
            }
            load(t) {
                t && (void 0 !== t.mode && (this.mode = t.mode), this.split.load(t.split))
            }
        }
        class ee {
            constructor() {
                this.distance = 5, this.enable = !1, this.speed = 50
            }
            load(t) {
                t && (void 0 !== t.distance && (this.distance = L(t.distance)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = L(t.speed)))
            }
        }
        class oe {
            constructor() {
                this.enable = !1, this.speed = 0, this.sync = !1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.sync && (this.sync = t.sync))
            }
        }
        class se extends xi {
            constructor() {
                super(), this.animation = new oe, this.direction = c.clockwise, this.enable = !1, this.value = 0
            }
            load(t) {
                t && (super.load(t), this.animation.load(t.animation), void 0 !== t.direction && (this.direction = t.direction), void 0 !== t.enable && (this.enable = t.enable))
            }
        }
        class ne {
            constructor() {
                this.enable = !1, this.value = 0
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.value && (this.value = t.value))
            }
        }
        class ae {
            constructor() {
                this.darken = new ne, this.enable = !1, this.enlighten = new ne, this.speed = 25
            }
            load(t) {
                t && (void 0 !== t.backColor && (this.backColor = pi.create(this.backColor, t.backColor)), this.darken.load(t.darken), void 0 !== t.enable && (this.enable = t.enable), this.enlighten.load(t.enlighten), void 0 !== t.speed && (this.speed = L(t.speed)))
            }
        }
        class re extends xi {
            constructor() {
                super(), this.opacityRate = 1, this.sizeRate = 1, this.velocityRate = 1
            }
            load(t) {
                super.load(t), t && (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate), void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate), void 0 !== t.velocityRate && (this.velocityRate = t.velocityRate))
            }
        }
        class le extends xi {
            constructor() {
                super(), this.value = 45, this.random.enable = !1, this.random.minimumValue = 0
            }
            load(t) {
                void 0 !== t && super.load(t)
            }
        }
        class ce {
            constructor() {
                this.animation = new Ai, this.enable = !1, this.opacity = 1, this.rotation = new le, this.width = 1
            }
            load(t) {
                void 0 !== t && (this.animation.load(t.animation), this.rotation.load(t.rotation), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.width && (this.width = t.width), void 0 !== t.radius && (this.radius = t.radius), void 0 !== t.color && (this.color = pi.create(this.color, t.color)))
            }
        }
        class de extends xi {
            constructor() {
                super(), this.enabled = !1, this.distance = 1, this.duration = 1, this.factor = 1, this.speed = 1
            }
            load(t) {
                super.load(t), t && (void 0 !== t.enabled && (this.enabled = t.enabled), void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.speed && (this.speed = t.speed))
            }
        }
        class he {
            constructor() {
                this.bounce = new Gi, this.collisions = new $i, this.color = new Bi, this.destroy = new ie, this.groups = {}, this.life = new Yi, this.links = new mi, this.move = new Si, this.number = new Ti, this.opacity = new Ri, this.orbit = new ce, this.reduceDuplicates = !1, this.repulse = new de, this.roll = new ae, this.rotate = new Hi, this.shadow = new qi, this.shape = new Di, this.size = new Li, this.stroke = new Wi, this.tilt = new se, this.twinkle = new Qi, this.wobble = new ee, this.zIndex = new re
            }
            get line_linked() {
                return this.links
            }
            set line_linked(t) {
                this.links = t
            }
            get lineLinked() {
                return this.links
            }
            set lineLinked(t) {
                this.links = t
            }
            load(t) {
                var i, e, o, s, n, a, r, l;
                if (void 0 === t) return;
                this.bounce.load(t.bounce), this.color = Bi.create(this.color, t.color), this.destroy.load(t.destroy), this.life.load(t.life);
                const c = null !== (e = null !== (i = t.links) && void 0 !== i ? i : t.lineLinked) && void 0 !== e ? e : t.line_linked;
                if (void 0 !== c && this.links.load(c), void 0 !== t.groups)
                    for (const i in t.groups) {
                        const e = t.groups[i];
                        void 0 !== e && (this.groups[i] = et(null !== (o = this.groups[i]) && void 0 !== o ? o : {}, e))
                    }
                this.move.load(t.move), this.number.load(t.number), this.opacity.load(t.opacity), this.orbit.load(t.orbit), void 0 !== t.reduceDuplicates && (this.reduceDuplicates = t.reduceDuplicates), this.repulse.load(t.repulse), this.roll.load(t.roll), this.rotate.load(t.rotate), this.shape.load(t.shape), this.size.load(t.size), this.shadow.load(t.shadow), this.tilt.load(t.tilt), this.twinkle.load(t.twinkle), this.wobble.load(t.wobble), this.zIndex.load(t.zIndex);
                const d = null !== (n = null === (s = t.move) || void 0 === s ? void 0 : s.collisions) && void 0 !== n ? n : null === (a = t.move) || void 0 === a ? void 0 : a.bounce;
                void 0 !== d && (this.collisions.enable = d), this.collisions.load(t.collisions);
                const h = null !== (r = t.stroke) && void 0 !== r ? r : null === (l = t.shape) || void 0 === l ? void 0 : l.stroke;
                void 0 !== h && (h instanceof Array ? this.stroke = h.map((t => {
                    const i = new Wi;
                    return i.load(t), i
                })) : (this.stroke instanceof Array && (this.stroke = new Wi), this.stroke.load(h)))
            }
        }
        class ue extends O {
            constructor(t, i, e) {
                super(t, i), this.z = void 0 === e ? t.z : e
            }
            static clone(t) {
                return ue.create(t.x, t.y, t.z)
            }
            static create(t, i, e) {
                return new ue(t, i, e)
            }
            add(t) {
                return t instanceof ue ? ue.create(this.x + t.x, this.y + t.y, this.z + t.z) : super.add(t)
            }
            addTo(t) {
                super.addTo(t), t instanceof ue && (this.z += t.z)
            }
            sub(t) {
                return t instanceof ue ? ue.create(this.x - t.x, this.y - t.y, this.z - t.z) : super.sub(t)
            }
            subFrom(t) {
                super.subFrom(t), t instanceof ue && (this.z -= t.z)
            }
            mult(t) {
                return ue.create(this.x * t, this.y * t, this.z * t)
            }
            multTo(t) {
                super.multTo(t), this.z *= t
            }
            div(t) {
                return ue.create(this.x / t, this.y / t, this.z / t)
            }
            divTo(t) {
                super.divTo(t), this.z /= t
            }
            copy() {
                return ue.clone(this)
            }
            setTo(t) {
                super.setTo(t), t instanceof ue && (this.z = t.z)
            }
        }
        class ve {
            constructor(t, i, e, o, s) {
                var n, a, l, d, h, u, v, p, f;
                this.id = t, this.container = i, this.group = s, this.fill = !0, this.close = !0, this.lastPathTime = 0, this.destroyed = !1, this.unbreakable = !1, this.splitCount = 0, this.misplaced = !1, this.loops = {
                    opacity: 0,
                    size: 0
                }, this.maxDistance = {};
                const y = i.retina.pixelRatio,
                    m = i.actualOptions,
                    w = new he;
                w.load(m.particles);
                const x = w.shape.type,
                    k = w.reduceDuplicates;
                if (this.shape = x instanceof Array ? Z(x, this.id, k) : x, null == o ? void 0 : o.shape) {
                    if (o.shape.type) {
                        const t = o.shape.type;
                        this.shape = t instanceof Array ? Z(t, this.id, k) : t
                    }
                    const t = new Di;
                    t.load(o.shape), this.shape && (this.shapeData = this.loadShapeData(t, k))
                } else this.shapeData = this.loadShapeData(w.shape, k);
                void 0 !== o && w.load(o), void 0 !== (null === (n = this.shapeData) || void 0 === n ? void 0 : n.particles) && w.load(null === (a = this.shapeData) || void 0 === a ? void 0 : a.particles), this.fill = null !== (d = null === (l = this.shapeData) || void 0 === l ? void 0 : l.fill) && void 0 !== d ? d : this.fill, this.close = null !== (u = null === (h = this.shapeData) || void 0 === h ? void 0 : h.close) && void 0 !== u ? u : this.close, this.options = w;
                const M = R(this.options.zIndex.value);
                this.pathDelay = 1e3 * F(this.options.move.path.delay), this.wobbleDistance = 0, i.retina.initParticle(this);
                const z = this.options.color,
                    C = this.options.size,
                    S = F(C) * i.retina.pixelRatio;
                this.size = {
                    value: S,
                    max: I(C.value) * y,
                    min: D(C.value) * y
                };
                const A = C.animation;
                if (A.enable) {
                    this.size.status = b.increasing;
                    const t = L(C.value, A.minimumValue * y);
                    switch (this.size.min = D(t), this.size.max = I(t), A.startValue) {
                        case P.min:
                            this.size.value = this.size.min, this.size.status = b.increasing;
                            break;
                        case P.random:
                            this.size.value = E(this.size), this.size.status = Math.random() >= .5 ? b.increasing : b.decreasing;
                            break;
                        case P.max:
                        default:
                            this.size.value = this.size.max, this.size.status = b.decreasing
                    }
                    this.size.velocity = (null !== (v = this.sizeAnimationSpeed) && void 0 !== v ? v : i.retina.sizeAnimationSpeed) / 100 * i.retina.reduceFactor, A.sync || (this.size.velocity *= Math.random())
                }
                this.direction = _(this.options.move.direction), this.bubble = {
                    inRange: !1
                }, this.initialVelocity = this.calculateVelocity(), this.velocity = this.initialVelocity.copy();
                const H = this.options.rotate;
                this.rotate = {
                    value: R(H.value) * Math.PI / 180
                };
                let q = H.direction;
                if (q === r.random) {
                    q = Math.floor(2 * Math.random()) > 0 ? r.counterClockwise : r.clockwise
                }
                switch (q) {
                    case r.counterClockwise:
                    case "counterClockwise":
                        this.rotate.status = b.decreasing;
                        break;
                    case r.clockwise:
                        this.rotate.status = b.increasing
                }
                const V = this.options.rotate.animation;
                V.enable && (this.rotate.velocity = V.speed / 360 * i.retina.reduceFactor, V.sync || (this.rotate.velocity *= Math.random()));
                const B = this.options.tilt;
                this.tilt = {
                    value: R(B.value) * Math.PI / 180,
                    sinDirection: Math.random() >= .5 ? 1 : -1,
                    cosDirection: Math.random() >= .5 ? 1 : -1
                };
                let W = B.direction;
                if (W === c.random) {
                    W = Math.floor(2 * Math.random()) > 0 ? c.counterClockwise : c.clockwise
                }
                switch (W) {
                    case c.counterClockwise:
                    case "counterClockwise":
                        this.tilt.status = b.decreasing;
                        break;
                    case c.clockwise:
                        this.tilt.status = b.increasing
                }
                const U = this.options.tilt.animation;
                U.enable && (this.tilt.velocity = U.speed / 360 * i.retina.reduceFactor, U.sync || (this.tilt.velocity *= Math.random()));
                const G = w.orbit;
                G.enable && (this.orbitRotation = R(G.rotation.value), this.orbitColor = pt(G.color));
                const N = pt(z, this.id, k);
                if (N) {
                    this.color = {
                        h: {
                            value: N.h
                        },
                        s: {
                            value: N.s
                        },
                        l: {
                            value: N.l
                        }
                    };
                    const t = this.options.color.animation;
                    this.setColorAnimation(t.h, this.color.h), this.setColorAnimation(t.s, this.color.s), this.setColorAnimation(t.l, this.color.l)
                }
                const $ = this.options.roll;
                $.enable ? (this.color && ($.backColor ? this.backColor = pt($.backColor) : $.darken.enable && $.enlighten.enable ? (this.alterType = Math.random() >= .5 ? g.darken : g.enlighten, this.alterValue = this.alterType === g.darken ? $.darken.value : $.enlighten.value) : $.darken.enable ? (this.alterType = g.darken, this.alterValue = $.darken.value) : $.enlighten.enable && (this.alterType = g.enlighten, this.alterValue = $.enlighten.value)), this.rollAngle = Math.random() * Math.PI * 2, this.rollSpeed = R($.speed) / 360) : (this.rollAngle = 0, this.rollSpeed = 0);
                const j = this.options.wobble;
                j.enable ? (this.wobbleAngle = Math.random() * Math.PI * 2, this.wobbleSpeed = R(j.speed) / 360) : (this.wobbleAngle = 0, this.wobbleSpeed = 0), this.position = this.calcPosition(this.container, e, T(M, 0, i.zLayers)), this.initialPosition = this.position.copy(), this.offset = O.origin;
                const Q = this.container.particles;
                Q.needsSort = Q.needsSort || Q.lastZIndex < this.position.z, Q.lastZIndex = this.position.z, this.zIndexFactor = this.position.z / i.zLayers;
                const J = this.options.opacity;
                this.opacity = {
                    max: I(J.value),
                    min: D(J.value),
                    value: F(J)
                };
                const X = J.animation;
                if (X.enable) {
                    this.opacity.status = b.increasing;
                    const t = L(J.value, X.minimumValue);
                    switch (this.opacity.min = D(t), this.opacity.max = I(t), X.startValue) {
                        case P.min:
                            this.opacity.value = this.opacity.min, this.opacity.status = b.increasing;
                            break;
                        case P.random:
                            this.opacity.value = E(this.opacity), this.opacity.status = Math.random() >= .5 ? b.increasing : b.decreasing;
                            break;
                        case P.max:
                        default:
                            this.opacity.value = this.opacity.max, this.opacity.status = b.decreasing
                    }
                    this.opacity.velocity = X.speed / 100 * i.retina.reduceFactor, X.sync || (this.opacity.velocity *= Math.random())
                }
                this.sides = 24;
                let Y = i.drawers.get(this.shape);
                Y || (Y = di.getShapeDrawer(this.shape), Y && i.drawers.set(this.shape, Y)), (null == Y ? void 0 : Y.loadShape) && (null == Y || Y.loadShape(this));
                const K = null == Y ? void 0 : Y.getSidesCount;
                K && (this.sides = K(this)), this.stroke = this.options.stroke instanceof Array ? Z(this.options.stroke, this.id, k) : this.options.stroke, this.strokeWidth = this.stroke.width * i.retina.pixelRatio;
                const tt = null !== (p = pt(this.stroke.color)) && void 0 !== p ? p : this.getFillColor();
                if (tt) {
                    this.strokeColor = {
                        h: {
                            value: tt.h
                        },
                        s: {
                            value: tt.s
                        },
                        l: {
                            value: tt.l
                        }
                    };
                    const t = null === (f = this.stroke.color) || void 0 === f ? void 0 : f.animation;
                    t && this.strokeColor && (this.setColorAnimation(t.h, this.strokeColor.h), this.setColorAnimation(t.s, this.strokeColor.s), this.setColorAnimation(t.l, this.strokeColor.l))
                }
                this.life = this.loadLife(), this.spawning = this.life.delay > 0, this.shadowColor = vt(this.options.shadow.color), Y && Y.particleInit && Y.particleInit(i, this);
                for (const [, t] of i.plugins) t.particleCreated && t.particleCreated(this)
            }
            draw(t) {
                const i = this.container;
                for (const [, e] of i.plugins) i.canvas.drawParticlePlugin(e, this, t);
                this.container.canvas.drawParticle(this, t)
            }
            getPosition() {
                return {
                    x: this.position.x + this.offset.x,
                    y: this.position.y + this.offset.y,
                    z: this.position.z
                }
            }
            getRadius() {
                return this.bubble.radius || this.size.value
            }
            getMass() {
                const t = this.getRadius();
                return Math.pow(t, 2) * Math.PI / 2
            }
            getFillColor() {
                if (this.bubble.color) return this.bubble.color;
                const t = Lt(this.color);
                if (t && (this.backColor || this.alterType && void 0 !== this.alterValue)) {
                    if (Math.floor(this.rollAngle / (Math.PI / 2)) % 2) {
                        if (this.backColor) return this.backColor;
                        if (this.alterType && void 0 !== this.alterValue) return {
                            h: t.h,
                            s: t.s,
                            l: t.l + (this.alterType === g.darken ? -1 : 1) * this.alterValue
                        }
                    }
                }
                return t
            }
            getStrokeColor() {
                var t, i;
                return null !== (i = null !== (t = this.bubble.color) && void 0 !== t ? t : Lt(this.strokeColor)) && void 0 !== i ? i : this.getFillColor()
            }
            destroy(t) {
                if (this.destroyed = !0, this.bubble.inRange = !1, this.unbreakable) return;
                this.destroyed = !0, this.bubble.inRange = !1;
                for (const [, i] of this.container.plugins) i.particleDestroyed && i.particleDestroyed(this, t);
                if (t) return;
                this.options.destroy.mode === h.split && this.split()
            }
            reset() {
                this.loops.opacity = 0, this.loops.size = 0
            }
            split() {
                const t = this.options.destroy.split;
                if (t.count >= 0 && this.splitCount++ > t.count) return;
                const i = R(t.rate.value);
                for (let t = 0; t < i; t++) this.container.particles.addSplitParticle(this)
            }
            setColorAnimation(t, i) {
                if (t.enable) {
                    if (i.velocity = t.speed / 100 * this.container.retina.reduceFactor, t.sync) return;
                    i.status = b.increasing, i.velocity *= Math.random(), i.value && (i.value *= Math.random())
                } else i.velocity = 0
            }
            calcPosition(t, i, e, o = 0) {
                var s, n;
                for (const [, o] of t.plugins) {
                    const t = void 0 !== o.particlePosition ? o.particlePosition(i, this) : void 0;
                    if (void 0 !== t) return ue.create(t.x, t.y, e)
                }
                const a = t.canvas.size,
                    r = ue.create(null !== (s = null == i ? void 0 : i.x) && void 0 !== s ? s : Math.random() * a.width, null !== (n = null == i ? void 0 : i.y) && void 0 !== n ? n : Math.random() * a.height, e),
                    l = this.options.move.outMode;
                return (J(l, f.bounce) || J(l, f.bounceHorizontal)) && (r.x > t.canvas.size.width - 2 * this.size.value ? r.x -= this.size.value : r.x < 2 * this.size.value && (r.x += this.size.value)), (J(l, f.bounce) || J(l, f.bounceVertical)) && (r.y > t.canvas.size.height - 2 * this.size.value ? r.y -= this.size.value : r.y < 2 * this.size.value && (r.y += this.size.value)), this.checkOverlap(r, o) ? this.calcPosition(t, void 0, e, o + 1) : r
            }
            checkOverlap(t, i = 0) {
                const e = this.options.collisions.overlap;
                if (!e.enable) {
                    const o = e.retries;
                    if (o >= 0 && i > o) throw new Error("Particle is overlapping and can't be placed");
                    let s = !1;
                    for (const i of this.container.particles.array)
                        if (q(t, i.position) < this.size.value + i.size.value) {
                            s = !0;
                            break
                        } return s
                }
                return !1
            }
            calculateVelocity() {
                const t = V(this.direction).copy(),
                    i = this.options.move,
                    e = Math.PI / 180 * i.angle.value,
                    o = Math.PI / 180 * i.angle.offset,
                    s = {
                        left: o - e / 2,
                        right: o + e / 2
                    };
                return i.straight || (t.angle += E(L(s.left, s.right))), i.random && "number" == typeof i.speed && (t.length *= Math.random()), t
            }
            loadShapeData(t, i) {
                const e = t.options[this.shape];
                if (e) return et({}, e instanceof Array ? Z(e, this.id, i) : e)
            }
            loadLife() {
                const t = this.container,
                    i = this.options,
                    e = i.life,
                    o = {
                        delay: t.retina.reduceFactor ? R(e.delay.value) * (e.delay.sync ? 1 : Math.random()) / t.retina.reduceFactor * 1e3 : 0,
                        delayTime: 0,
                        duration: t.retina.reduceFactor ? R(e.duration.value) * (e.duration.sync ? 1 : Math.random()) / t.retina.reduceFactor * 1e3 : 0,
                        time: 0,
                        count: i.life.count
                    };
                return o.duration <= 0 && (o.duration = -1), o.count <= 0 && (o.count = -1), o
            }
        }
        class pe {
            constructor(t) {
                this.container = t;
                const i = di.getInteractors(t);
                this.externalInteractors = [], this.particleInteractors = [];
                for (const t of i) switch (t.type) {
                    case x.External:
                        this.externalInteractors.push(t);
                        break;
                    case x.Particles:
                        this.particleInteractors.push(t)
                }
            }
            externalInteract(t) {
                for (const i of this.externalInteractors) i.isEnabled() && i.interact(t)
            }
            particlesInteract(t, i) {
                for (const i of this.externalInteractors) i.reset(t);
                for (const e of this.particleInteractors) e.isEnabled(t) && e.interact(t, i)
            }
        }
        class fe {
            constructor(t) {
                this.container = t
            }
            move(t, i) {
                t.bubble.inRange = !1;
                for (const [, e] of this.container.plugins) {
                    if (t.destroyed) break;
                    e.particleUpdate && e.particleUpdate(t, i)
                }
                t.destroyed || (this.moveParticle(t, i), this.moveParallax(t))
            }
            moveParticle(t, i) {
                var e, o, s;
                const n = t.options;
                if (!n.move.enable) return;
                const a = this.container,
                    r = this.getProximitySpeedFactor(t),
                    l = (null !== (e = t.moveSpeed) && void 0 !== e ? e : R(t.options.move.speed) * a.retina.pixelRatio) * a.retina.reduceFactor,
                    c = I(t.options.size.value) * a.retina.pixelRatio,
                    d = l / 2 * (n.move.size ? t.getRadius() / c : 1) * r * i.factor,
                    h = null !== (o = t.moveDrift) && void 0 !== o ? o : R(t.options.move.drift) * a.retina.pixelRatio;
                this.applyPath(t, i);
                const u = n.move.gravity,
                    v = u.enable && u.inverse ? -1 : 1;
                u.enable && (t.velocity.y += v * (u.acceleration * i.factor) / (60 * d)), d && (t.velocity.x += h * i.factor / (60 * d)), t.velocity.multTo(1 - t.options.move.decay);
                const p = t.velocity.mult(d),
                    f = null !== (s = t.maxSpeed) && void 0 !== s ? s : a.retina.maxSpeed;
                u.enable && (!u.inverse && p.y >= 0 && p.y >= f || u.inverse && p.y <= 0 && p.y <= -f) && u.maxSpeed > 0 && (p.y = v * f, d && (t.velocity.y = p.y / d));
                const y = 1 - t.options.zIndex.velocityRate * t.zIndexFactor;
                p.multTo(y), t.position.addTo(p), n.move.vibrate && (t.position.x += Math.sin(t.position.x * Math.cos(t.position.y)), t.position.y += Math.cos(t.position.y * Math.sin(t.position.x)));
                const m = t.initialPosition,
                    b = q(m, t.position);
                t.maxDistance && (b >= t.maxDistance && !t.misplaced ? (t.misplaced = b > t.maxDistance, t.velocity.x = t.velocity.y / 2 - t.velocity.x, t.velocity.y = t.velocity.x / 2 - t.velocity.y) : b < t.maxDistance && t.misplaced ? t.misplaced = !1 : t.misplaced && ((t.position.x < m.x && t.velocity.x < 0 || t.position.x > m.x && t.velocity.x > 0) && (t.velocity.x *= -Math.random()), (t.position.y < m.y && t.velocity.y < 0 || t.position.y > m.y && t.velocity.y > 0) && (t.velocity.y *= -Math.random()))),
                    function(t) {
                        const i = t.initialPosition,
                            {
                                dx: e,
                                dy: o
                            } = H(i, t.position),
                            s = Math.abs(e),
                            n = Math.abs(o),
                            a = t.maxDistance.horizontal,
                            r = t.maxDistance.vertical;
                        if (a || r)
                            if ((a && s >= a || r && n >= r) && !t.misplaced) t.misplaced = !!a && s > a || !!r && n > r, a && (t.velocity.x = t.velocity.y / 2 - t.velocity.x), r && (t.velocity.y = t.velocity.x / 2 - t.velocity.y);
                            else if ((!a || s < a) && (!r || n < r) && t.misplaced) t.misplaced = !1;
                        else if (t.misplaced) {
                            const e = t.position,
                                o = t.velocity;
                            a && (e.x < i.x && o.x < 0 || e.x > i.x && o.x > 0) && (o.x *= -Math.random()), r && (e.y < i.y && o.y < 0 || e.y > i.y && o.y > 0) && (o.y *= -Math.random())
                        }
                    }(t)
            }
            applyPath(t, i) {
                const e = t.options.move.path;
                if (!e.enable) return;
                const o = this.container;
                if (t.lastPathTime <= t.pathDelay) return void(t.lastPathTime += i.value);
                let s = o.pathGenerator;
                if (e.generator) {
                    const t = di.getPathGenerator(e.generator);
                    t && (s = t)
                }
                const n = s.generate(t);
                t.velocity.addTo(n), e.clamp && (t.velocity.x = T(t.velocity.x, -1, 1), t.velocity.y = T(t.velocity.y, -1, 1)), t.lastPathTime -= t.pathDelay
            }
            moveParallax(t) {
                const i = this.container,
                    e = i.actualOptions;
                if ($() || !e.interactivity.events.onHover.parallax.enable) return;
                const o = e.interactivity.events.onHover.parallax.force,
                    s = i.interactivity.mouse.position;
                if (!s) return;
                const n = i.canvas.size.width / 2,
                    a = i.canvas.size.height / 2,
                    r = e.interactivity.events.onHover.parallax.smooth,
                    l = t.getRadius() / o,
                    c = (s.x - n) * l,
                    d = (s.y - a) * l;
                t.offset.x += (c - t.offset.x) / r, t.offset.y += (d - t.offset.y) / r
            }
            getProximitySpeedFactor(t) {
                const i = this.container,
                    e = i.actualOptions;
                if (!J(v.slow, e.interactivity.events.onHover.mode)) return 1;
                const o = this.container.interactivity.mouse.position;
                if (!o) return 1;
                const s = q(o, t.getPosition()),
                    n = i.retina.slowModeRadius;
                if (s > n) return 1;
                return (s / n || 0) / e.interactivity.modes.slow.factor
            }
        }
        class ye {
            constructor(t) {
                this.container = t, this.nextId = 0, this.array = [], this.zArray = [], this.mover = new fe(t), this.limit = 0, this.needsSort = !1, this.lastZIndex = 0, this.linksFreq = new Map, this.trianglesFreq = new Map, this.interactionManager = new pe(t);
                const i = this.container.canvas.size;
                this.linksColors = new Map, this.quadTree = new ui(new Zt(-i.width / 4, -i.height / 4, 3 * i.width / 2, 3 * i.height / 2), 4), this.updaters = di.getUpdaters(t)
            }
            get count() {
                return this.array.length
            }
            init() {
                var t;
                const i = this.container,
                    e = i.actualOptions;
                this.lastZIndex = 0, this.needsSort = !1, this.linksFreq = new Map, this.trianglesFreq = new Map;
                let o = !1;
                for (const [, t] of i.plugins)
                    if (void 0 !== t.particlesInitialization && (o = t.particlesInitialization()), o) break;
                if (this.addManualParticles(), !o) {
                    for (const i in e.particles.groups) {
                        const o = e.particles.groups[i];
                        for (let s = this.count, n = 0; n < (null === (t = o.number) || void 0 === t ? void 0 : t.value) && s < e.particles.number.value; s++, n++) this.addParticle(void 0, o, i)
                    }
                    for (let t = this.count; t < e.particles.number.value; t++) this.addParticle()
                }
                i.pathGenerator.init()
            }
            redraw() {
                this.clear(), this.init(), this.draw({
                    value: 0,
                    factor: 0
                })
            }
            removeAt(t, i = 1, e, o) {
                if (!(t >= 0 && t <= this.count)) return;
                let s = 0;
                for (let n = t; s < i && n < this.count; n++) {
                    const t = this.array[n];
                    if (!t || t.group !== e) continue;
                    t.destroy(o), this.array.splice(n--, 1);
                    const i = this.zArray.indexOf(t);
                    this.zArray.splice(i, 1), s++
                }
            }
            remove(t, i, e) {
                this.removeAt(this.array.indexOf(t), void 0, i, e)
            }
            update(t) {
                const i = this.container,
                    e = [];
                i.pathGenerator.update();
                for (const [, e] of i.plugins) void 0 !== e.update && e.update(t);
                for (const i of this.array) {
                    const o = this.container.canvas.resizeFactor;
                    o && (i.position.x *= o.width, i.position.y *= o.height);
                    for (const [, e] of this.container.plugins) {
                        if (i.destroyed) break;
                        e.particleUpdate && e.particleUpdate(i, t)
                    }
                    this.mover.move(i, t), i.destroyed ? e.push(i) : this.quadTree.insert(new hi(i.getPosition(), i))
                }
                for (const t of e) this.remove(t);
                this.interactionManager.externalInteract(t);
                for (const i of this.container.particles.array) {
                    for (const e of this.updaters) e.update(i, t);
                    i.destroyed || i.spawning || this.interactionManager.particlesInteract(i, t)
                }
                delete i.canvas.resizeFactor
            }
            draw(t) {
                const i = this.container;
                i.canvas.clear();
                const e = this.container.canvas.size;
                this.quadTree = new ui(new Zt(-e.width / 4, -e.height / 4, 3 * e.width / 2, 3 * e.height / 2), 4), this.update(t), this.needsSort && (this.zArray.sort(((t, i) => i.position.z - t.position.z || t.id - i.id)), this.lastZIndex = this.zArray[this.zArray.length - 1].position.z, this.needsSort = !1);
                for (const [, e] of i.plugins) i.canvas.drawPlugin(e, t);
                for (const i of this.zArray) i.draw(t)
            }
            clear() {
                this.array = [], this.zArray = []
            }
            push(t, i, e, o) {
                this.pushing = !0;
                for (let s = 0; s < t; s++) this.addParticle(null == i ? void 0 : i.position, e, o);
                this.pushing = !1
            }
            addParticle(t, i, e) {
                const o = this.container,
                    s = o.actualOptions.particles.number.limit * o.density;
                if (s > 0) {
                    const t = this.count + 1 - s;
                    t > 0 && this.removeQuantity(t)
                }
                return this.pushParticle(t, i, e)
            }
            addSplitParticle(t) {
                const i = t.options.destroy.split,
                    e = new he;
                e.load(t.options);
                const o = R(i.factor.value);
                e.color.load({
                    value: {
                        hsl: t.getFillColor()
                    }
                }), "number" == typeof e.size.value ? e.size.value /= o : (e.size.value.min /= o, e.size.value.max /= o), e.load(i.particles);
                const s = i.sizeOffset ? L(-t.size.value, t.size.value) : 0,
                    n = {
                        x: t.position.x + E(s),
                        y: t.position.y + E(s)
                    };
                return this.pushParticle(n, e, t.group, (i => !(i.size.value < .5) && (i.velocity.length = E(L(t.velocity.length, i.velocity.length)), i.splitCount = t.splitCount + 1, i.unbreakable = !0, setTimeout((() => {
                    i.unbreakable = !1
                }), 500), !0)))
            }
            removeQuantity(t, i) {
                this.removeAt(0, t, i)
            }
            getLinkFrequency(t, i) {
                const e = `${Math.min(t.id,i.id)}_${Math.max(t.id,i.id)}`;
                let o = this.linksFreq.get(e);
                return void 0 === o && (o = Math.random(), this.linksFreq.set(e, o)), o
            }
            getTriangleFrequency(t, i, e) {
                let [o, s, n] = [t.id, i.id, e.id];
                o > s && ([s, o] = [o, s]), s > n && ([n, s] = [s, n]), o > n && ([n, o] = [o, n]);
                const a = `${o}_${s}_${n}`;
                let r = this.trianglesFreq.get(a);
                return void 0 === r && (r = Math.random(), this.trianglesFreq.set(a, r)), r
            }
            addManualParticles() {
                const t = this.container,
                    i = t.actualOptions;
                for (const e of i.manualParticles) {
                    const i = e.position ? {
                        x: e.position.x * t.canvas.size.width / 100,
                        y: e.position.y * t.canvas.size.height / 100
                    } : void 0;
                    this.addParticle(i, e.options)
                }
            }
            setDensity() {
                const t = this.container.actualOptions;
                for (const i in t.particles.groups) this.applyDensity(t.particles.groups[i], 0, i);
                this.applyDensity(t.particles, t.manualParticles.length)
            }
            applyDensity(t, i, e) {
                var o;
                if (!(null === (o = t.number.density) || void 0 === o ? void 0 : o.enable)) return;
                const s = t.number,
                    n = this.initDensityFactor(s.density),
                    a = s.value,
                    r = s.limit > 0 ? s.limit : a,
                    l = Math.min(a, r) * n + i,
                    c = Math.min(this.count, this.array.filter((t => t.group === e)).length);
                this.limit = s.limit * n, c < l ? this.push(Math.abs(l - c), void 0, t, e) : c > l && this.removeQuantity(c - l, e)
            }
            initDensityFactor(t) {
                const i = this.container;
                if (!i.canvas.element || !t.enable) return 1;
                const e = i.canvas.element,
                    o = i.retina.pixelRatio;
                return e.width * e.height / (t.factor * Math.pow(o, 2) * t.area)
            }
            pushParticle(t, i, e, o) {
                try {
                    const s = new ve(this.nextId, this.container, t, i, e);
                    let n = !0;
                    if (o && (n = o(s)), !n) return;
                    return this.array.push(s), this.zArray.push(s), this.nextId++, s
                } catch (t) {
                    return void console.warn(`error adding particle: ${t}`)
                }
            }
        }
        class me {
            constructor(t) {
                this.container = t
            }
            init() {
                const t = this.container,
                    i = t.actualOptions;
                this.pixelRatio = !i.detectRetina || $() ? 1 : window.devicePixelRatio;
                const e = this.container.actualOptions.motion;
                if (e && (e.disable || e.reduce.value))
                    if ($() || "undefined" == typeof matchMedia || !matchMedia) this.reduceFactor = 1;
                    else {
                        const i = matchMedia("(prefers-reduced-motion: reduce)");
                        if (i) {
                            this.handleMotionChange(i);
                            const e = () => {
                                this.handleMotionChange(i), t.refresh().catch((() => {}))
                            };
                            void 0 !== i.addEventListener ? i.addEventListener("change", e) : void 0 !== i.addListener && i.addListener(e)
                        }
                    }
                else this.reduceFactor = 1;
                const o = this.pixelRatio;
                if (t.canvas.element) {
                    const i = t.canvas.element;
                    t.canvas.size.width = i.offsetWidth * o, t.canvas.size.height = i.offsetHeight * o
                }
                const s = i.particles;
                this.attractDistance = s.move.attract.distance * o, this.linksDistance = s.links.distance * o, this.linksWidth = s.links.width * o, this.sizeAnimationSpeed = s.size.animation.speed * o, this.maxSpeed = s.move.gravity.maxSpeed * o, void 0 !== s.orbit.radius && (this.orbitRadius = s.orbit.radius * this.container.retina.pixelRatio);
                const n = i.interactivity.modes;
                this.connectModeDistance = n.connect.distance * o, this.connectModeRadius = n.connect.radius * o, this.grabModeDistance = n.grab.distance * o, this.repulseModeDistance = n.repulse.distance * o, this.bounceModeDistance = n.bounce.distance * o, this.attractModeDistance = n.attract.distance * o, this.slowModeRadius = n.slow.radius * o, this.bubbleModeDistance = n.bubble.distance * o, n.bubble.size && (this.bubbleModeSize = n.bubble.size * o)
            }
            initParticle(t) {
                const i = t.options,
                    e = this.pixelRatio,
                    o = i.move.distance,
                    s = i.orbit;
                t.attractDistance = i.move.attract.distance * e, t.linksDistance = i.links.distance * e, t.linksWidth = i.links.width * e, t.moveDrift = R(i.move.drift) * e, t.moveSpeed = R(i.move.speed) * e, t.sizeAnimationSpeed = i.size.animation.speed * e, t.orbitRadius = void 0 !== (null == s ? void 0 : s.radius) ? s.radius * e : void 0;
                const n = t.maxDistance;
                n.horizontal = void 0 !== o.horizontal ? o.horizontal * e : void 0, n.vertical = void 0 !== o.vertical ? o.vertical * e : void 0, t.wobbleDistance = R(i.wobble.distance) * e, t.maxSpeed = i.move.gravity.maxSpeed * e
            }
            handleMotionChange(t) {
                const i = this.container.actualOptions;
                if (t.matches) {
                    const t = i.motion;
                    this.reduceFactor = t.disable ? 0 : t.reduce.value ? 1 / t.reduce.factor : 1
                } else this.reduceFactor = 1
            }
        }
        class be {
            constructor(t) {
                this.container = t
            }
            nextFrame(t) {
                try {
                    const i = this.container;
                    if (void 0 !== i.lastFrameTime && t < i.lastFrameTime + 1e3 / i.fpsLimit) return void i.draw();
                    const e = t - i.lastFrameTime,
                        o = {
                            value: e,
                            factor: 60 * e / 1e3
                        };
                    if (i.lifeTime += o.value, i.lastFrameTime = t, i.particles.draw(o), i.duration > 0 && i.lifeTime > i.duration) return void i.destroy();
                    i.getAnimationStatus() && i.draw()
                } catch (t) {
                    console.error("tsParticles error in animation loop", t)
                }
            }
        }
        class ge {
            constructor() {
                this.enable = !1, this.mode = []
            }
            load(t) {
                void 0 !== t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode))
            }
        }
        class we {
            constructor() {
                this.selectors = [], this.enable = !1, this.mode = [], this.type = M.circle
            }
            get elementId() {
                return this.ids
            }
            set elementId(t) {
                this.ids = t
            }
            get el() {
                return this.elementId
            }
            set el(t) {
                this.elementId = t
            }
            get ids() {
                return this.selectors instanceof Array ? this.selectors.map((t => t.replace("#", ""))) : this.selectors.replace("#", "")
            }
            set ids(t) {
                this.selectors = t instanceof Array ? t.map((t => `#${t}`)) : `#${t}`
            }
            load(t) {
                var i, e;
                if (void 0 === t) return;
                const o = null !== (e = null !== (i = t.ids) && void 0 !== i ? i : t.elementId) && void 0 !== e ? e : t.el;
                void 0 !== o && (this.ids = o), void 0 !== t.selectors && (this.selectors = t.selectors), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.type && (this.type = t.type)
            }
        }
        class xe {
            constructor() {
                this.enable = !1, this.force = 2, this.smooth = 10
            }
            load(t) {
                void 0 !== t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.force && (this.force = t.force), void 0 !== t.smooth && (this.smooth = t.smooth))
            }
        }
        class ke {
            constructor() {
                this.enable = !1, this.mode = [], this.parallax = new xe
            }
            load(t) {
                void 0 !== t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.parallax.load(t.parallax))
            }
        }
        class Pe {
            constructor() {
                this.onClick = new ge, this.onDiv = new we, this.onHover = new ke, this.resize = !0
            }
            get onclick() {
                return this.onClick
            }
            set onclick(t) {
                this.onClick = t
            }
            get ondiv() {
                return this.onDiv
            }
            set ondiv(t) {
                this.onDiv = t
            }
            get onhover() {
                return this.onHover
            }
            set onhover(t) {
                this.onHover = t
            }
            load(t) {
                var i, e, o;
                if (void 0 === t) return;
                this.onClick.load(null !== (i = t.onClick) && void 0 !== i ? i : t.onclick);
                const s = null !== (e = t.onDiv) && void 0 !== e ? e : t.ondiv;
                void 0 !== s && (s instanceof Array ? this.onDiv = s.map((t => {
                    const i = new we;
                    return i.load(t), i
                })) : (this.onDiv = new we, this.onDiv.load(s))), this.onHover.load(null !== (o = t.onHover) && void 0 !== o ? o : t.onhover), void 0 !== t.resize && (this.resize = t.resize)
            }
        }
        class Me {
            constructor() {
                this.distance = 200, this.duration = .4
            }
            load(t) {
                void 0 !== t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.color && (t.color instanceof Array ? this.color = t.color.map((t => pi.create(void 0, t))) : (this.color instanceof Array && (this.color = new pi), this.color = pi.create(this.color, t.color))), void 0 !== t.size && (this.size = t.size))
            }
        }
        class ze extends Me {
            constructor() {
                super(), this.selectors = []
            }
            get ids() {
                return this.selectors instanceof Array ? this.selectors.map((t => t.replace("#", ""))) : this.selectors.replace("#", "")
            }
            set ids(t) {
                this.selectors = t instanceof Array ? t.map((t => `#${t}`)) : `#${t}`
            }
            load(t) {
                super.load(t), void 0 !== t && (void 0 !== t.ids && (this.ids = t.ids), void 0 !== t.selectors && (this.selectors = t.selectors))
            }
        }
        class Ce extends Me {
            load(t) {
                super.load(t), void 0 !== t && void 0 !== t.divs && (t.divs instanceof Array ? this.divs = t.divs.map((t => {
                    const i = new ze;
                    return i.load(t), i
                })) : ((this.divs instanceof Array || !this.divs) && (this.divs = new ze), this.divs.load(t.divs)))
            }
        }
        class Se {
            constructor() {
                this.opacity = .5
            }
            load(t) {
                void 0 !== t && void 0 !== t.opacity && (this.opacity = t.opacity)
            }
        }
        class Oe {
            constructor() {
                this.distance = 80, this.links = new Se, this.radius = 60
            }
            get line_linked() {
                return this.links
            }
            set line_linked(t) {
                this.links = t
            }
            get lineLinked() {
                return this.links
            }
            set lineLinked(t) {
                this.links = t
            }
            load(t) {
                var i, e;
                void 0 !== t && (void 0 !== t.distance && (this.distance = t.distance), this.links.load(null !== (e = null !== (i = t.links) && void 0 !== i ? i : t.lineLinked) && void 0 !== e ? e : t.line_linked), void 0 !== t.radius && (this.radius = t.radius))
            }
        }
        class Te {
            constructor() {
                this.blink = !1, this.consent = !1, this.opacity = 1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.blink && (this.blink = t.blink), void 0 !== t.color && (this.color = pi.create(this.color, t.color)), void 0 !== t.consent && (this.consent = t.consent), void 0 !== t.opacity && (this.opacity = t.opacity))
            }
        }
        class Ae {
            constructor() {
                this.distance = 100, this.links = new Te
            }
            get line_linked() {
                return this.links
            }
            set line_linked(t) {
                this.links = t
            }
            get lineLinked() {
                return this.links
            }
            set lineLinked(t) {
                this.links = t
            }
            load(t) {
                var i, e;
                void 0 !== t && (void 0 !== t.distance && (this.distance = t.distance), this.links.load(null !== (e = null !== (i = t.links) && void 0 !== i ? i : t.lineLinked) && void 0 !== e ? e : t.line_linked))
            }
        }
        class Ee {
            constructor() {
                this.quantity = 2
            }
            get particles_nb() {
                return this.quantity
            }
            set particles_nb(t) {
                this.quantity = t
            }
            load(t) {
                var i;
                if (void 0 === t) return;
                const e = null !== (i = t.quantity) && void 0 !== i ? i : t.particles_nb;
                void 0 !== e && (this.quantity = e)
            }
        }
        class Re {
            constructor() {
                this.default = !0, this.groups = [], this.quantity = 4
            }
            get particles_nb() {
                return this.quantity
            }
            set particles_nb(t) {
                this.quantity = t
            }
            load(t) {
                var i;
                if (void 0 === t) return;
                void 0 !== t.default && (this.default = t.default), void 0 !== t.groups && (this.groups = t.groups.map((t => t))), this.groups.length || (this.default = !0);
                const e = null !== (i = t.quantity) && void 0 !== i ? i : t.particles_nb;
                void 0 !== e && (this.quantity = e)
            }
        }
        class De {
            constructor() {
                this.distance = 200, this.duration = .4, this.factor = 100, this.speed = 1, this.maxSpeed = 50, this.easing = z.easeOutQuad
            }
            load(t) {
                t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.easing && (this.easing = t.easing), void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed))
            }
        }
        class Ie extends De {
            constructor() {
                super(), this.selectors = []
            }
            get ids() {
                return this.selectors instanceof Array ? this.selectors.map((t => t.replace("#", ""))) : this.selectors.replace("#", "")
            }
            set ids(t) {
                this.selectors = t instanceof Array ? t.map((() => `#${t}`)) : `#${t}`
            }
            load(t) {
                super.load(t), void 0 !== t && (void 0 !== t.ids && (this.ids = t.ids), void 0 !== t.selectors && (this.selectors = t.selectors))
            }
        }
        class Le extends De {
            load(t) {
                super.load(t), void 0 !== (null == t ? void 0 : t.divs) && (t.divs instanceof Array ? this.divs = t.divs.map((t => {
                    const i = new Ie;
                    return i.load(t), i
                })) : ((this.divs instanceof Array || !this.divs) && (this.divs = new Ie), this.divs.load(t.divs)))
            }
        }
        class Fe {
            constructor() {
                this.factor = 3, this.radius = 200
            }
            get active() {
                return !1
            }
            set active(t) {}
            load(t) {
                void 0 !== t && (void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.radius && (this.radius = t.radius))
            }
        }
        class He {
            constructor() {
                this.delay = 1, this.pauseOnStop = !1, this.quantity = 1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.quantity && (this.quantity = t.quantity), void 0 !== t.particles && (this.particles = et({}, t.particles)), void 0 !== t.pauseOnStop && (this.pauseOnStop = t.pauseOnStop))
            }
        }
        class qe {
            constructor() {
                this.distance = 200, this.duration = .4, this.easing = z.easeOutQuad, this.factor = 1, this.maxSpeed = 50, this.speed = 1
            }
            load(t) {
                t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.easing && (this.easing = t.easing), void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed), void 0 !== t.speed && (this.speed = t.speed))
            }
        }
        class _e {
            constructor() {
                this.start = new pi, this.stop = new pi, this.start.value = "#ffffff", this.stop.value = "#000000"
            }
            load(t) {
                void 0 !== t && (this.start = pi.create(this.start, t.start), this.stop = pi.create(this.stop, t.stop))
            }
        }
        class Ve {
            constructor() {
                this.gradient = new _e, this.radius = 1e3
            }
            load(t) {
                void 0 !== t && (this.gradient.load(t.gradient), void 0 !== t.radius && (this.radius = t.radius))
            }
        }
        class Be {
            constructor() {
                this.color = new pi, this.color.value = "#000000", this.length = 2e3
            }
            load(t) {
                void 0 !== t && (this.color = pi.create(this.color, t.color), void 0 !== t.length && (this.length = t.length))
            }
        }
        class We {
            constructor() {
                this.area = new Ve, this.shadow = new Be
            }
            load(t) {
                void 0 !== t && (this.area.load(t.area), this.shadow.load(t.shadow))
            }
        }
        class Ue {
            constructor() {
                this.distance = 200
            }
            load(t) {
                t && void 0 !== t.distance && (this.distance = t.distance)
            }
        }
        class Ge {
            constructor() {
                this.attract = new qe, this.bounce = new Ue, this.bubble = new Ce, this.connect = new Oe, this.grab = new Ae, this.light = new We, this.push = new Re, this.remove = new Ee, this.repulse = new Le, this.slow = new Fe, this.trail = new He
            }
            load(t) {
                void 0 !== t && (this.attract.load(t.attract), this.bubble.load(t.bubble), this.connect.load(t.connect), this.grab.load(t.grab), this.light.load(t.light), this.push.load(t.push), this.remove.load(t.remove), this.repulse.load(t.repulse), this.slow.load(t.slow), this.trail.load(t.trail))
            }
        }
        class Ne {
            constructor() {
                this.detectsOn = S.canvas, this.events = new Pe, this.modes = new Ge
            }
            get detect_on() {
                return this.detectsOn
            }
            set detect_on(t) {
                this.detectsOn = t
            }
            load(t) {
                var i, e, o;
                if (void 0 === t) return;
                const s = null !== (i = t.detectsOn) && void 0 !== i ? i : t.detect_on;
                void 0 !== s && (this.detectsOn = s), this.events.load(t.events), this.modes.load(t.modes), !0 === (null === (o = null === (e = t.modes) || void 0 === e ? void 0 : e.slow) || void 0 === o ? void 0 : o.active) && (this.events.onHover.mode instanceof Array ? this.events.onHover.mode.indexOf(v.slow) < 0 && this.events.onHover.mode.push(v.slow) : this.events.onHover.mode !== v.slow && (this.events.onHover.mode = [this.events.onHover.mode, v.slow]))
            }
        }
        class $e {
            constructor() {
                this.color = new pi, this.opacity = 1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.color && (this.color = pi.create(this.color, t.color)), void 0 !== t.opacity && (this.opacity = t.opacity))
            }
        }
        class je {
            constructor() {
                this.composite = "destination-out", this.cover = new $e, this.enable = !1
            }
            load(t) {
                if (void 0 !== t) {
                    if (void 0 !== t.composite && (this.composite = t.composite), void 0 !== t.cover) {
                        const i = t.cover,
                            e = "string" == typeof t.cover ? {
                                color: t.cover
                            } : t.cover;
                        this.cover.load(void 0 !== i.color ? i : {
                            color: e
                        })
                    }
                    void 0 !== t.enable && (this.enable = t.enable)
                }
            }
        }
        class Qe {
            constructor() {
                this.color = new pi, this.color.value = "", this.image = "", this.position = "", this.repeat = "", this.size = "", this.opacity = 1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.color && (this.color = pi.create(this.color, t.color)), void 0 !== t.image && (this.image = t.image), void 0 !== t.position && (this.position = t.position), void 0 !== t.repeat && (this.repeat = t.repeat), void 0 !== t.size && (this.size = t.size), void 0 !== t.opacity && (this.opacity = t.opacity))
            }
        }
        class Je {
            constructor() {
                this.mode = m.any, this.value = !1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.value && (this.value = t.value))
            }
        }
        class Xe {
            constructor() {
                this.name = "", this.default = new Je
            }
            load(t) {
                void 0 !== t && (void 0 !== t.name && (this.name = t.name), this.default.load(t.default), void 0 !== t.options && (this.options = et({}, t.options)))
            }
        }
        class Ye {
            constructor() {
                this.enable = !1, this.zIndex = -1
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.zIndex && (this.zIndex = t.zIndex))
            }
        }
        class Ze {
            constructor() {
                this.factor = 4, this.value = !0
            }
            load(t) {
                t && (void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.value && (this.value = t.value))
            }
        }
        class Ke {
            constructor() {
                this.disable = !1, this.reduce = new Ze
            }
            load(t) {
                t && (void 0 !== t.disable && (this.disable = t.disable), this.reduce.load(t.reduce))
            }
        }
        class to {
            load(t) {
                var i, e;
                t && (void 0 !== t.position && (this.position = {
                    x: null !== (i = t.position.x) && void 0 !== i ? i : 50,
                    y: null !== (e = t.position.y) && void 0 !== e ? e : 50
                }), void 0 !== t.options && (this.options = et({}, t.options)))
            }
        }
        class io {
            constructor() {
                this.maxWidth = 1 / 0, this.options = {}
            }
            load(t) {
                t && (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth), void 0 !== t.options && (this.options = et({}, t.options)))
            }
        }
        class eo {
            constructor() {
                this.autoPlay = !0, this.background = new Qe, this.backgroundMask = new je, this.fullScreen = new Ye, this.detectRetina = !0, this.duration = 0, this.fpsLimit = 60, this.interactivity = new Ne, this.manualParticles = [], this.motion = new Ke, this.particles = new he, this.pauseOnBlur = !0, this.pauseOnOutsideViewport = !0, this.responsive = [], this.themes = []
            }
            get fps_limit() {
                return this.fpsLimit
            }
            set fps_limit(t) {
                this.fpsLimit = t
            }
            get retina_detect() {
                return this.detectRetina
            }
            set retina_detect(t) {
                this.detectRetina = t
            }
            get backgroundMode() {
                return this.fullScreen
            }
            set backgroundMode(t) {
                this.fullScreen.load(t)
            }
            load(t) {
                var i, e, o;
                if (void 0 === t) return;
                if (void 0 !== t.preset)
                    if (t.preset instanceof Array)
                        for (const i of t.preset) this.importPreset(i);
                    else this.importPreset(t.preset);
                void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay);
                const s = null !== (i = t.detectRetina) && void 0 !== i ? i : t.retina_detect;
                void 0 !== s && (this.detectRetina = s), void 0 !== t.duration && (this.duration = t.duration);
                const n = null !== (e = t.fpsLimit) && void 0 !== e ? e : t.fps_limit;
                if (void 0 !== n && (this.fpsLimit = n), void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur), void 0 !== t.pauseOnOutsideViewport && (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport), this.background.load(t.background), this.fullScreen.load(null !== (o = t.fullScreen) && void 0 !== o ? o : t.backgroundMode), this.backgroundMask.load(t.backgroundMask), this.interactivity.load(t.interactivity), void 0 !== t.manualParticles && (this.manualParticles = t.manualParticles.map((t => {
                        const i = new to;
                        return i.load(t), i
                    }))), this.motion.load(t.motion), this.particles.load(t.particles), di.loadOptions(this, t), void 0 !== t.responsive)
                    for (const i of t.responsive) {
                        const t = new io;
                        t.load(i), this.responsive.push(t)
                    }
                if (this.responsive.sort(((t, i) => t.maxWidth - i.maxWidth)), void 0 !== t.themes)
                    for (const i of t.themes) {
                        const t = new Xe;
                        t.load(i), this.themes.push(t)
                    }
            }
            setTheme(t) {
                if (t) {
                    const i = this.themes.find((i => i.name === t));
                    i && this.load(i.options)
                } else {
                    const t = "undefined" != typeof matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;
                    let i = this.themes.find((i => i.default.value && (i.default.mode === m.dark && t || i.default.mode === m.light && !t)));
                    i || (i = this.themes.find((t => t.default.value && t.default.mode === m.any))), i && this.load(i.options)
                }
            }
            importPreset(t) {
                this.load(di.getPreset(t))
            }
            setResponsive(t, i, e) {
                var o;
                this.load(e), this.load(null === (o = this.responsive.find((e => e.maxWidth * i > t))) || void 0 === o ? void 0 : o.options)
            }
        }
        var oo = function(t, i, e, o) {
            return new(e || (e = Promise))((function(s, n) {
                function a(t) {
                    try {
                        l(o.next(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function r(t) {
                    try {
                        l(o.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function l(t) {
                    var i;
                    t.done ? s(t.value) : (i = t.value, i instanceof e ? i : new e((function(t) {
                        t(i)
                    }))).then(a, r)
                }
                l((o = o.apply(t, i || [])).next())
            }))
        };
        class so {
            constructor(t, i, ...e) {
                this.id = t, this.zLayers = 1e4, this.fpsLimit = 60, this.duration = 0, this.lifeTime = 0, this.firstStart = !0, this.started = !1, this.destroyed = !1, this.paused = !0, this.lastFrameTime = 0, this.pageHidden = !1, this._sourceOptions = i, this.retina = new me(this), this.canvas = new vi(this), this.particles = new ye(this), this.drawer = new be(this), this.pathGenerator = {
                    generate: () => {
                        const t = O.create(0, 0);
                        return t.length = Math.random(), t.angle = Math.random() * Math.PI * 2, t
                    },
                    init: () => {},
                    update: () => {}
                }, this.interactivity = {
                    mouse: {
                        clicking: !1,
                        inside: !1
                    }
                }, this.bubble = {}, this.repulse = {
                    particles: []
                }, this.attract = {
                    particles: []
                }, this.plugins = new Map, this.drawers = new Map, this.density = 1, this._options = new eo, this.actualOptions = new eo;
                for (const t of e) this._options.load(di.getPreset(t));
                const o = di.getSupportedShapes();
                for (const t of o) {
                    const i = di.getShapeDrawer(t);
                    i && this.drawers.set(t, i)
                }
                this._options && this._options.load(this._sourceOptions), this.eventListeners = new ii(this), "undefined" != typeof IntersectionObserver && IntersectionObserver && (this.intersectionObserver = new IntersectionObserver((t => this.intersectionManager(t))))
            }
            get options() {
                return this._options
            }
            get sourceOptions() {
                return this._sourceOptions
            }
            play(t) {
                const i = this.paused || t;
                if (!this.firstStart || this.actualOptions.autoPlay) {
                    if (this.paused && (this.paused = !1), i) {
                        for (const [, t] of this.plugins) t.play && t.play();
                        this.lastFrameTime = performance.now()
                    }
                    this.draw()
                } else this.firstStart = !1
            }
            pause() {
                if (void 0 !== this.drawAnimationFrame && (Q()(this.drawAnimationFrame), delete this.drawAnimationFrame), !this.paused) {
                    for (const [, t] of this.plugins) t.pause && t.pause();
                    this.pageHidden || (this.paused = !0)
                }
            }
            draw() {
                this.drawAnimationFrame = j()((t => this.drawer.nextFrame(t)))
            }
            getAnimationStatus() {
                return !this.paused
            }
            setNoise(t, i, e) {
                this.setPath(t, i, e)
            }
            setPath(t, i, e) {
                t && ("function" == typeof t ? (this.pathGenerator.generate = t, i && (this.pathGenerator.init = i), e && (this.pathGenerator.update = e)) : (t.generate && (this.pathGenerator.generate = t.generate), t.init && (this.pathGenerator.init = t.init), t.update && (this.pathGenerator.update = t.update)))
            }
            destroy() {
                this.stop(), this.canvas.destroy();
                for (const [, t] of this.drawers) t.destroy && t.destroy(this);
                for (const t of this.drawers.keys()) this.drawers.delete(t);
                this.destroyed = !0
            }
            exportImg(t) {
                this.exportImage(t)
            }
            exportImage(t, i, e) {
                var o;
                return null === (o = this.canvas.element) || void 0 === o ? void 0 : o.toBlob(t, null != i ? i : "image/png", e)
            }
            exportConfiguration() {
                return JSON.stringify(this.actualOptions, void 0, 2)
            }
            refresh() {
                return this.stop(), this.start()
            }
            reset() {
                return this._options = new eo, this.refresh()
            }
            stop() {
                if (this.started) {
                    this.firstStart = !0, this.started = !1, this.eventListeners.removeListeners(), this.pause(), this.particles.clear(), this.canvas.clear(), this.interactivity.element instanceof HTMLElement && this.intersectionObserver && this.intersectionObserver.observe(this.interactivity.element);
                    for (const [, t] of this.plugins) t.stop && t.stop();
                    for (const t of this.plugins.keys()) this.plugins.delete(t);
                    this.particles.linksColors = new Map, delete this.particles.grabLineColor, delete this.particles.linksColor
                }
            }
            loadTheme(t) {
                return oo(this, void 0, void 0, (function*() {
                    this.currentTheme = t, yield this.refresh()
                }))
            }
            start() {
                return oo(this, void 0, void 0, (function*() {
                    if (!this.started) {
                        yield this.init(), this.started = !0, this.eventListeners.addListeners(), this.interactivity.element instanceof HTMLElement && this.intersectionObserver && this.intersectionObserver.observe(this.interactivity.element);
                        for (const [, t] of this.plugins) void 0 !== t.startAsync ? yield t.startAsync(): void 0 !== t.start && t.start();
                        this.play()
                    }
                }))
            }
            addClickHandler(t) {
                const i = this.interactivity.element;
                if (!i) return;
                const e = (i, e) => {
                    if (this.destroyed) return;
                    const o = this.retina.pixelRatio,
                        s = {
                            x: e.x * o,
                            y: e.y * o
                        },
                        n = this.particles.quadTree.queryCircle(s, this.retina.sizeValue);
                    t(i, n)
                };
                let o = !1,
                    s = !1;
                i.addEventListener("click", (t => {
                    if (this.destroyed) return;
                    const i = t,
                        o = {
                            x: i.offsetX || i.clientX,
                            y: i.offsetY || i.clientY
                        };
                    e(t, o)
                })), i.addEventListener("touchstart", (() => {
                    this.destroyed || (o = !0, s = !1)
                })), i.addEventListener("touchmove", (() => {
                    this.destroyed || (s = !0)
                })), i.addEventListener("touchend", (t => {
                    var i, n, a;
                    if (!this.destroyed) {
                        if (o && !s) {
                            const o = t,
                                s = o.touches[o.touches.length - 1],
                                r = null === (i = this.canvas.element) || void 0 === i ? void 0 : i.getBoundingClientRect(),
                                l = {
                                    x: s.clientX - (null !== (n = null == r ? void 0 : r.left) && void 0 !== n ? n : 0),
                                    y: s.clientY - (null !== (a = null == r ? void 0 : r.top) && void 0 !== a ? a : 0)
                                };
                            e(t, l)
                        }
                        o = !1, s = !1
                    }
                })), i.addEventListener("touchcancel", (() => {
                    this.destroyed || (o = !1, s = !1)
                }))
            }
            init() {
                return oo(this, void 0, void 0, (function*() {
                    this.actualOptions = new eo, this.actualOptions.load(this._options), this.retina.init(), this.canvas.init(), this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options), this.actualOptions.setTheme(this.currentTheme), this.canvas.initBackground(), this.canvas.resize(), this.duration = R(this.actualOptions.duration), this.lifeTime = 0, this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 60;
                    const t = di.getAvailablePlugins(this);
                    for (const [i, e] of t) this.plugins.set(i, e);
                    for (const [, t] of this.drawers) t.init && (yield t.init(this));
                    for (const [, t] of this.plugins) t.init ? t.init(this.actualOptions) : void 0 !== t.initAsync && (yield t.initAsync(this.actualOptions));
                    this.particles.init(), this.particles.setDensity();
                    for (const [, t] of this.plugins) void 0 !== t.particlesSetup && t.particlesSetup()
                }))
            }
            intersectionManager(t) {
                if (this.actualOptions.pauseOnOutsideViewport)
                    for (const i of t) i.target === this.interactivity.element && (i.isIntersecting ? this.play() : this.pause())
            }
        }
        var no = function(t, i, e, o) {
            return new(e || (e = Promise))((function(s, n) {
                function a(t) {
                    try {
                        l(o.next(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function r(t) {
                    try {
                        l(o.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function l(t) {
                    var i;
                    t.done ? s(t.value) : (i = t.value, i instanceof e ? i : new e((function(t) {
                        t(i)
                    }))).then(a, r)
                }
                l((o = o.apply(t, i || [])).next())
            }))
        };
        const ao = [];

        function ro(t) {
            console.error(`Error tsParticles - fetch status: ${t}`), console.error("Error tsParticles - File config not found")
        }
        class lo {
            static dom() {
                return ao
            }
            static domItem(t) {
                const i = lo.dom(),
                    e = i[t];
                if (e && !e.destroyed) return e;
                i.splice(t, 1)
            }
            static load(t, i, e) {
                return no(this, void 0, void 0, (function*() {
                    let o = document.getElementById(t);
                    return o || (o = document.createElement("div"), o.id = t, document.append(o)), lo.set(t, o, i, e)
                }))
            }
            static set(t, i, e, o) {
                return no(this, void 0, void 0, (function*() {
                    const s = e instanceof Array ? Z(e, o) : e,
                        n = lo.dom(),
                        a = n.findIndex((i => i.id === t));
                    if (a >= 0) {
                        const t = lo.domItem(a);
                        t && !t.destroyed && (t.destroy(), n.splice(a, 1))
                    }
                    let r, l;
                    if ("canvas" === i.tagName.toLowerCase()) r = i, l = !1;
                    else {
                        const t = i.getElementsByTagName("canvas");
                        t.length ? (r = t[0], r.className || (r.className = dt.canvasClass), l = !1) : (l = !0, r = document.createElement("canvas"), r.className = dt.canvasClass, r.style.width = "100%", r.style.height = "100%", i.appendChild(r))
                    }
                    const c = new so(t, s);
                    return a >= 0 ? n.splice(a, 0, c) : n.push(c), c.canvas.loadCanvas(r, l), yield c.start(), c
                }))
            }
            static loadJSON(t, i, e) {
                return no(this, void 0, void 0, (function*() {
                    const o = i instanceof Array ? Z(i, e) : i,
                        s = yield fetch(o);
                    if (s.ok) return lo.load(t, yield s.json());
                    ro(s.status)
                }))
            }
            static setJSON(t, i, e, o) {
                return no(this, void 0, void 0, (function*() {
                    const s = e instanceof Array ? Z(e, o) : e,
                        n = yield fetch(s);
                    if (n.ok) {
                        const e = yield n.json();
                        return lo.set(t, i, e)
                    }
                    ro(n.status)
                }))
            }
            static setOnClickHandler(t) {
                const i = lo.dom();
                if (0 === i.length) throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
                for (const e of i) e.addClickHandler(t)
            }
        }
        var co, ho, uo, vo, po, fo, yo = function(t, i, e, o) {
                return new(e || (e = Promise))((function(s, n) {
                    function a(t) {
                        try {
                            l(o.next(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function r(t) {
                        try {
                            l(o.throw(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(t) {
                        var i;
                        t.done ? s(t.value) : (i = t.value, i instanceof e ? i : new e((function(t) {
                            t(i)
                        }))).then(a, r)
                    }
                    l((o = o.apply(t, i || [])).next())
                }))
            },
            mo = function(t, i, e, o, s) {
                if ("m" === o) throw new TypeError("Private method is not writable");
                if ("a" === o && !s) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof i ? t !== i || !s : !i.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === o ? s.call(t, e) : s ? s.value = e : i.set(t, e), e
            },
            bo = function(t, i, e, o) {
                if ("a" === e && !o) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof i ? t !== i || !o : !i.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === e ? o : "a" === e ? o.call(t) : o ? o.value : i.get(t)
            };
        class go {
            constructor() {
                co.set(this, void 0), mo(this, co, !1, "f")
            }
            init() {
                bo(this, co, "f") || mo(this, co, !0, "f")
            }
            loadFromArray(t, i, e) {
                return yo(this, void 0, void 0, (function*() {
                    return lo.load(t, i, e)
                }))
            }
            load(t, i) {
                return yo(this, void 0, void 0, (function*() {
                    return lo.load(t, i)
                }))
            }
            set(t, i, e) {
                return yo(this, void 0, void 0, (function*() {
                    return lo.set(t, i, e)
                }))
            }
            loadJSON(t, i, e) {
                return lo.loadJSON(t, i, e)
            }
            setJSON(t, i, e, o) {
                return yo(this, void 0, void 0, (function*() {
                    return lo.setJSON(t, i, e, o)
                }))
            }
            setOnClickHandler(t) {
                lo.setOnClickHandler(t)
            }
            dom() {
                return lo.dom()
            }
            domItem(t) {
                return lo.domItem(t)
            }
            addShape(t, i, e, o, s) {
                let n;
                n = "function" == typeof i ? {
                    afterEffect: o,
                    destroy: s,
                    draw: i,
                    init: e
                } : i, di.addShapeDrawer(t, n)
            }
            addPreset(t, i, e = !1) {
                di.addPreset(t, i, e)
            }
            addPlugin(t) {
                di.addPlugin(t)
            }
            addPathGenerator(t, i) {
                di.addPathGenerator(t, i)
            }
            addInteractor(t, i) {
                di.addInteractor(t, i)
            }
            addParticleUpdater(t, i) {
                di.addParticleUpdater(t, i)
            }
        }
        co = new WeakMap;
        class wo {
            constructor(t, i, e, o) {
                var s, n, a;
                this.absorbers = t, this.container = i, this.initialPosition = o ? O.create(o.x, o.y) : void 0, this.options = e, this.dragging = !1, this.name = this.options.name, this.opacity = this.options.opacity, this.size = F(e.size) * i.retina.pixelRatio, this.mass = this.size * e.size.density * i.retina.reduceFactor;
                const r = e.size.limit;
                this.limit = void 0 !== r ? r * i.retina.pixelRatio * i.retina.reduceFactor : r;
                const l = "string" == typeof e.color ? {
                    value: e.color
                } : e.color;
                this.color = null !== (s = vt(l)) && void 0 !== s ? s : {
                    b: 0,
                    g: 0,
                    r: 0
                }, this.position = null !== (a = null === (n = this.initialPosition) || void 0 === n ? void 0 : n.copy()) && void 0 !== a ? a : this.calcPosition()
            }
            attract(t) {
                const i = this.options;
                if (i.draggable) {
                    const t = this.container.interactivity.mouse;
                    if (t.clicking && t.downPosition) {
                        q(this.position, t.downPosition) <= this.size && (this.dragging = !0)
                    } else this.dragging = !1;
                    this.dragging && t.position && (this.position.x = t.position.x, this.position.y = t.position.y)
                }
                const e = t.getPosition(),
                    {
                        dx: o,
                        dy: s,
                        distance: n
                    } = H(this.position, e),
                    a = O.create(o, s);
                if (a.length = this.mass / Math.pow(n, 2) * this.container.retina.reduceFactor, n < this.size + t.getRadius()) {
                    const e = .033 * t.getRadius() * this.container.retina.pixelRatio;
                    this.size > t.getRadius() && n < this.size - t.getRadius() ? i.destroy ? t.destroy() : (t.needsNewPosition = !0, this.updateParticlePosition(t, a)) : (i.destroy && (t.size.value -= e), this.updateParticlePosition(t, a)), (void 0 === this.limit || this.size < this.limit) && (this.size += e), this.mass += e * this.options.size.density * this.container.retina.reduceFactor
                } else this.updateParticlePosition(t, a)
            }
            resize() {
                const t = this.initialPosition;
                this.position = t && K(t, this.container.canvas.size) ? t : this.calcPosition()
            }
            draw(t) {
                t.translate(this.position.x, this.position.y), t.beginPath(), t.arc(0, 0, this.size, 0, 2 * Math.PI, !1), t.closePath(), t.fillStyle = Tt(this.color, this.opacity), t.fill()
            }
            calcPosition() {
                var t, i;
                const e = this.container,
                    o = this.options.position;
                return O.create((null !== (t = null == o ? void 0 : o.x) && void 0 !== t ? t : 100 * Math.random()) / 100 * e.canvas.size.width, (null !== (i = null == o ? void 0 : o.y) && void 0 !== i ? i : 100 * Math.random()) / 100 * e.canvas.size.height)
            }
            updateParticlePosition(t, i) {
                var e;
                if (t.destroyed) return;
                const o = this.container.canvas.size;
                if (t.needsNewPosition) {
                    const i = t.getRadius();
                    t.position.x = Math.random() * (o.width - 2 * i) + i, t.position.y = Math.random() * (o.height - 2 * i) + i, t.needsNewPosition = !1
                }
                this.options.orbits ? (void 0 === t.orbit && (t.orbit = O.create(0, 0), t.orbit.length = q(t.getPosition(), this.position), t.orbit.angle = Math.random() * Math.PI * 2), t.orbit.length <= this.size && !this.options.destroy && (t.orbit.length = Math.random() * Math.max(o.width, o.height)), t.velocity.x = 0, t.velocity.y = 0, t.position.setTo(t.orbit.add(this.position)), t.orbit.length -= i.length, t.orbit.angle += (null !== (e = t.moveSpeed) && void 0 !== e ? e : R(t.options.move.speed) * this.container.retina.pixelRatio) / 100 * this.container.retina.reduceFactor) : t.velocity.addTo(i)
            }
        }
        class xo extends xi {
            constructor() {
                super(), this.density = 5, this.random.minimumValue = 1, this.value = 50
            }
            load(t) {
                t && (super.load(t), void 0 !== t.density && (this.density = t.density), void 0 !== t.limit && (this.limit = t.limit), void 0 !== t.limit && (this.limit = t.limit))
            }
        }
        class ko {
            constructor() {
                this.color = new pi, this.color.value = "#000000", this.draggable = !1, this.opacity = 1, this.destroy = !0, this.orbits = !1, this.size = new xo
            }
            load(t) {
                void 0 !== t && (void 0 !== t.color && (this.color = pi.create(this.color, t.color)), void 0 !== t.draggable && (this.draggable = t.draggable), this.name = t.name, void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.position && (this.position = {
                    x: t.position.x,
                    y: t.position.y
                }), void 0 !== t.size && this.size.load(t.size), void 0 !== t.destroy && (this.destroy = t.destroy), void 0 !== t.orbits && (this.orbits = t.orbits))
            }
        }! function(t) {
            t.absorber = "absorber"
        }(ho || (ho = {}));
        class Po {
            constructor(t) {
                this.container = t, this.array = [], this.absorbers = [], this.interactivityAbsorbers = [];
                const i = t;
                i.getAbsorber = t => void 0 === t || "number" == typeof t ? this.array[t || 0] : this.array.find((i => i.name === t)), i.addAbsorber = (t, i) => this.addAbsorber(t, i)
            }
            init(t) {
                var i, e;
                if (!t) return;
                t.absorbers && (t.absorbers instanceof Array ? this.absorbers = t.absorbers.map((t => {
                    const i = new ko;
                    return i.load(t), i
                })) : (this.absorbers instanceof Array && (this.absorbers = new ko), this.absorbers.load(t.absorbers)));
                const o = null === (e = null === (i = t.interactivity) || void 0 === i ? void 0 : i.modes) || void 0 === e ? void 0 : e.absorbers;
                if (o && (o instanceof Array ? this.interactivityAbsorbers = o.map((t => {
                        const i = new ko;
                        return i.load(t), i
                    })) : (this.interactivityAbsorbers instanceof Array && (this.interactivityAbsorbers = new ko), this.interactivityAbsorbers.load(o))), this.absorbers instanceof Array)
                    for (const t of this.absorbers) this.addAbsorber(t);
                else this.addAbsorber(this.absorbers)
            }
            particleUpdate(t) {
                for (const i of this.array)
                    if (i.attract(t), t.destroyed) break
            }
            draw(t) {
                for (const i of this.array) t.save(), i.draw(t), t.restore()
            }
            stop() {
                this.array = []
            }
            resize() {
                for (const t of this.array) t.resize()
            }
            handleClickMode(t) {
                const i = this.container,
                    e = this.absorbers,
                    o = this.interactivityAbsorbers;
                if (t === ho.absorber) {
                    let t;
                    o instanceof Array ? o.length > 0 && (t = Z(o)) : t = o;
                    const s = null != t ? t : e instanceof Array ? Z(e) : e,
                        n = i.interactivity.mouse.clickPosition;
                    this.addAbsorber(s, n)
                }
            }
            addAbsorber(t, i) {
                const e = new wo(this, this.container, t, i);
                return this.array.push(e), e
            }
            removeAbsorber(t) {
                const i = this.array.indexOf(t);
                i >= 0 && this.array.splice(i, 1)
            }
        }
        class Mo {
            constructor() {
                this.id = "absorbers"
            }
            getPlugin(t) {
                return new Po(t)
            }
            needsPlugin(t) {
                var i, e, o;
                if (void 0 === t) return !1;
                const s = t.absorbers;
                return s instanceof Array && !!s.length || void 0 !== s || !!(null === (o = null === (e = null === (i = t.interactivity) || void 0 === i ? void 0 : i.events) || void 0 === e ? void 0 : e.onClick) || void 0 === o ? void 0 : o.mode) && J(ho.absorber, t.interactivity.events.onClick.mode)
            }
            loadOptions(t, i) {
                var e, o;
                if (!this.needsPlugin(t) && !this.needsPlugin(i)) return;
                const s = t;
                if (null == i ? void 0 : i.absorbers)
                    if ((null == i ? void 0 : i.absorbers) instanceof Array) s.absorbers = null == i ? void 0 : i.absorbers.map((t => {
                        const i = new ko;
                        return i.load(t), i
                    }));
                    else {
                        let t = s.absorbers;
                        void 0 === (null == t ? void 0 : t.load) && (s.absorbers = t = new ko), t.load(null == i ? void 0 : i.absorbers)
                    } const n = null === (o = null === (e = null == i ? void 0 : i.interactivity) || void 0 === e ? void 0 : e.modes) || void 0 === o ? void 0 : o.absorbers;
                if (n)
                    if (n instanceof Array) s.interactivity.modes.absorbers = n.map((t => {
                        const i = new ko;
                        return i.load(t), i
                    }));
                    else {
                        let t = s.interactivity.modes.absorbers;
                        void 0 === (null == t ? void 0 : t.load) && (s.interactivity.modes.absorbers = t = new ko), t.load(n)
                    }
            }
        }
        class zo {
            constructor() {
                this.mode = y.percent, this.height = 0, this.width = 0
            }
            load(t) {
                void 0 !== t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.height && (this.height = t.height), void 0 !== t.width && (this.width = t.width))
            }
        }

        function Co(t, i) {
            return t + i * (Math.random() - .5)
        }

        function So(t, i) {
            return {
                x: Co(t.x, i.x),
                y: Co(t.y, i.y)
            }
        }
        class Oo {
            constructor(t, i, e, o) {
                var s, n, a, r, l, c, d;
                this.emitters = t, this.container = i, this.firstSpawn = !0, this.currentDuration = 0, this.currentEmitDelay = 0, this.currentSpawnDelay = 0, this.initialPosition = o, this.emitterOptions = et({}, e), this.spawnDelay = 1e3 * (null !== (s = this.emitterOptions.life.delay) && void 0 !== s ? s : 0) / this.container.retina.reduceFactor, this.position = null !== (n = this.initialPosition) && void 0 !== n ? n : this.calcPosition(), this.name = e.name;
                let h = et({}, this.emitterOptions.particles);
                null != h || (h = {}), null !== (a = h.move) && void 0 !== a || (h.move = {}), null !== (r = (d = h.move).direction) && void 0 !== r || (d.direction = this.emitterOptions.direction), void 0 !== this.emitterOptions.spawnColor && (this.spawnColor = pt(this.emitterOptions.spawnColor)), this.paused = !this.emitterOptions.autoPlay, this.particlesOptions = h, this.size = null !== (l = this.emitterOptions.size) && void 0 !== l ? l : (() => {
                    const t = new zo;
                    return t.load({
                        height: 0,
                        mode: y.percent,
                        width: 0
                    }), t
                })(), this.lifeCount = null !== (c = this.emitterOptions.life.count) && void 0 !== c ? c : -1, this.immortal = this.lifeCount <= 0, this.play()
            }
            externalPlay() {
                this.paused = !1, this.play()
            }
            externalPause() {
                this.paused = !0, this.pause()
            }
            play() {
                if (!this.paused && this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal || !this.emitterOptions.life.count)) {
                    if (void 0 === this.emitDelay) {
                        const t = R(this.emitterOptions.rate.delay);
                        this.emitDelay = 1e3 * t / this.container.retina.reduceFactor
                    }(this.lifeCount > 0 || this.immortal) && this.prepareToDie()
                }
            }
            pause() {
                this.paused || delete this.emitDelay
            }
            resize() {
                const t = this.initialPosition;
                this.position = t && K(t, this.container.canvas.size) ? t : this.calcPosition()
            }
            update(t) {
                var i, e, o;
                this.paused || (this.firstSpawn && (this.firstSpawn = !1, this.currentSpawnDelay = null !== (i = this.spawnDelay) && void 0 !== i ? i : 0, this.currentEmitDelay = null !== (e = this.emitDelay) && void 0 !== e ? e : 0, t.value = 0), void 0 !== this.duration && (this.currentDuration += t.value, this.currentDuration >= this.duration && (this.pause(), void 0 !== this.spawnDelay && delete this.spawnDelay, this.immortal || this.lifeCount--, this.lifeCount > 0 || this.immortal ? (this.position = this.calcPosition(), this.spawnDelay = 1e3 * (null !== (o = this.emitterOptions.life.delay) && void 0 !== o ? o : 0) / this.container.retina.reduceFactor) : this.destroy(), this.currentDuration -= this.duration, delete this.duration)), void 0 !== this.spawnDelay && (this.currentSpawnDelay += t.value, this.currentSpawnDelay >= this.spawnDelay && (this.play(), this.currentSpawnDelay -= this.currentSpawnDelay, delete this.spawnDelay)), void 0 !== this.emitDelay && (this.currentEmitDelay += t.value, this.currentEmitDelay >= this.emitDelay && (this.emit(), this.currentEmitDelay -= this.emitDelay)))
            }
            prepareToDie() {
                var t;
                if (this.paused) return;
                const i = null === (t = this.emitterOptions.life) || void 0 === t ? void 0 : t.duration;
                this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal) && void 0 !== i && i > 0 && (this.duration = 1e3 * i)
            }
            destroy() {
                this.emitters.removeEmitter(this)
            }
            calcPosition() {
                var t, i;
                const e = this.container,
                    o = this.emitterOptions.position;
                return {
                    x: (null !== (t = null == o ? void 0 : o.x) && void 0 !== t ? t : 100 * Math.random()) / 100 * e.canvas.size.width,
                    y: (null !== (i = null == o ? void 0 : o.y) && void 0 !== i ? i : 100 * Math.random()) / 100 * e.canvas.size.height
                }
            }
            emit() {
                var t;
                if (this.paused) return;
                const i = this.container,
                    e = this.position,
                    o = {
                        x: this.size.mode === y.percent ? i.canvas.size.width * this.size.width / 100 : this.size.width,
                        y: this.size.mode === y.percent ? i.canvas.size.height * this.size.height / 100 : this.size.height
                    },
                    s = R(this.emitterOptions.rate.quantity);
                for (let n = 0; n < s; n++) {
                    const s = et({}, this.particlesOptions);
                    if (void 0 !== this.spawnColor) {
                        const i = null === (t = this.emitterOptions.spawnColor) || void 0 === t ? void 0 : t.animation;
                        if (i) {
                            const t = i;
                            if (t.enable) this.spawnColor.h = this.setColorAnimation(t, this.spawnColor.h, 360);
                            else {
                                const t = i;
                                this.spawnColor.h = this.setColorAnimation(t.h, this.spawnColor.h, 360), this.spawnColor.s = this.setColorAnimation(t.s, this.spawnColor.s, 100), this.spawnColor.l = this.setColorAnimation(t.l, this.spawnColor.l, 100)
                            }
                        }
                        s.color ? s.color.value = this.spawnColor : s.color = {
                            value: this.spawnColor
                        }
                    }
                    i.particles.addParticle(So(e, o), s)
                }
            }
            setColorAnimation(t, i, e) {
                var o;
                const s = this.container;
                if (!t.enable) return i;
                const n = E(t.offset),
                    a = 1e3 * R(this.emitterOptions.rate.delay) / s.retina.reduceFactor;
                return (i + (null !== (o = t.speed) && void 0 !== o ? o : 0) * s.fpsLimit / a + 3.6 * n) % e
            }
        }
        class To {
            constructor() {
                this.quantity = 1, this.delay = .1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.quantity && (this.quantity = L(t.quantity)), void 0 !== t.delay && (this.delay = L(t.delay)))
            }
        }
        class Ao {
            load(t) {
                void 0 !== t && (void 0 !== t.count && (this.count = t.count), void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.duration && (this.duration = t.duration))
            }
        }
        class Eo {
            constructor() {
                this.autoPlay = !0, this.life = new Ao, this.rate = new To
            }
            load(t) {
                void 0 !== t && (void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay), void 0 !== t.size && (void 0 === this.size && (this.size = new zo), this.size.load(t.size)), void 0 !== t.direction && (this.direction = t.direction), this.life.load(t.life), this.name = t.name, void 0 !== t.particles && (this.particles = et({}, t.particles)), this.rate.load(t.rate), void 0 !== t.position && (this.position = {
                    x: t.position.x,
                    y: t.position.y
                }), void 0 !== t.spawnColor && (void 0 === this.spawnColor && (this.spawnColor = new Bi), this.spawnColor.load(t.spawnColor)))
            }
        }! function(t) {
            t.emitter = "emitter"
        }(uo || (uo = {}));
        class Ro {
            constructor(t) {
                this.container = t, this.array = [], this.emitters = [], this.interactivityEmitters = [];
                const i = t;
                i.getEmitter = t => void 0 === t || "number" == typeof t ? this.array[t || 0] : this.array.find((i => i.name === t)), i.addEmitter = (t, i) => this.addEmitter(t, i), i.playEmitter = t => {
                    const e = i.getEmitter(t);
                    e && e.externalPlay()
                }, i.pauseEmitter = t => {
                    const e = i.getEmitter(t);
                    e && e.externalPause()
                }
            }
            init(t) {
                var i, e;
                if (!t) return;
                t.emitters && (t.emitters instanceof Array ? this.emitters = t.emitters.map((t => {
                    const i = new Eo;
                    return i.load(t), i
                })) : (this.emitters instanceof Array && (this.emitters = new Eo), this.emitters.load(t.emitters)));
                const o = null === (e = null === (i = t.interactivity) || void 0 === i ? void 0 : i.modes) || void 0 === e ? void 0 : e.emitters;
                if (o && (o instanceof Array ? this.interactivityEmitters = o.map((t => {
                        const i = new Eo;
                        return i.load(t), i
                    })) : (this.interactivityEmitters instanceof Array && (this.interactivityEmitters = new Eo), this.interactivityEmitters.load(o))), this.emitters instanceof Array)
                    for (const t of this.emitters) this.addEmitter(t);
                else this.addEmitter(this.emitters)
            }
            play() {
                for (const t of this.array) t.play()
            }
            pause() {
                for (const t of this.array) t.pause()
            }
            stop() {
                this.array = []
            }
            update(t) {
                for (const i of this.array) i.update(t)
            }
            handleClickMode(t) {
                const i = this.container,
                    e = this.emitters,
                    o = this.interactivityEmitters;
                if (t === uo.emitter) {
                    let t;
                    o instanceof Array ? o.length > 0 && (t = Z(o)) : t = o;
                    const s = null != t ? t : e instanceof Array ? Z(e) : e,
                        n = i.interactivity.mouse.clickPosition;
                    this.addEmitter(et({}, s), n)
                }
            }
            resize() {
                for (const t of this.array) t.resize()
            }
            addEmitter(t, i) {
                const e = new Oo(this, this.container, t, i);
                return this.array.push(e), e
            }
            removeEmitter(t) {
                const i = this.array.indexOf(t);
                i >= 0 && this.array.splice(i, 1)
            }
        }
        class Do {
            constructor() {
                this.id = "emitters"
            }
            getPlugin(t) {
                return new Ro(t)
            }
            needsPlugin(t) {
                var i, e, o;
                if (void 0 === t) return !1;
                const s = t.emitters;
                return s instanceof Array && !!s.length || void 0 !== s || !!(null === (o = null === (e = null === (i = t.interactivity) || void 0 === i ? void 0 : i.events) || void 0 === e ? void 0 : e.onClick) || void 0 === o ? void 0 : o.mode) && J(uo.emitter, t.interactivity.events.onClick.mode)
            }
            loadOptions(t, i) {
                var e, o;
                if (!this.needsPlugin(t) && !this.needsPlugin(i)) return;
                const s = t;
                if (null == i ? void 0 : i.emitters)
                    if ((null == i ? void 0 : i.emitters) instanceof Array) s.emitters = null == i ? void 0 : i.emitters.map((t => {
                        const i = new Eo;
                        return i.load(t), i
                    }));
                    else {
                        let t = s.emitters;
                        void 0 === (null == t ? void 0 : t.load) && (s.emitters = t = new Eo), t.load(null == i ? void 0 : i.emitters)
                    } const n = null === (o = null === (e = null == i ? void 0 : i.interactivity) || void 0 === e ? void 0 : e.modes) || void 0 === o ? void 0 : o.emitters;
                if (n)
                    if (n instanceof Array) s.interactivity.modes.emitters = n.map((t => {
                        const i = new Eo;
                        return i.load(t), i
                    }));
                    else {
                        let t = s.interactivity.modes.emitters;
                        void 0 === (null == t ? void 0 : t.load) && (s.interactivity.modes.emitters = t = new Eo), t.load(n)
                    }
            }
        }! function(t) {
            t.equidistant = "equidistant", t.onePerPoint = "one-per-point", t.perPoint = "per-point", t.randomLength = "random-length", t.randomPoint = "random-point"
        }(vo || (vo = {})),
        function(t) {
            t.path = "path", t.radius = "radius"
        }(po || (po = {})),
        function(t) {
            t.inline = "inline", t.inside = "inside", t.outside = "outside", t.none = "none"
        }(fo || (fo = {}));
        class Io {
            constructor() {
                this.color = new pi, this.width = .5, this.opacity = 1
            }
            load(t) {
                var i;
                void 0 !== t && (this.color = pi.create(this.color, t.color), "string" == typeof this.color.value && (this.opacity = null !== (i = yt(this.color.value)) && void 0 !== i ? i : this.opacity), void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.width && (this.width = t.width))
            }
        }
        class Lo {
            constructor() {
                this.enable = !1, this.stroke = new Io
            }
            get lineWidth() {
                return this.stroke.width
            }
            set lineWidth(t) {
                this.stroke.width = t
            }
            get lineColor() {
                return this.stroke.color
            }
            set lineColor(t) {
                this.stroke.color = pi.create(this.stroke.color, t)
            }
            load(t) {
                var i;
                if (void 0 !== t) {
                    void 0 !== t.enable && (this.enable = t.enable);
                    const e = null !== (i = t.stroke) && void 0 !== i ? i : {
                        color: t.lineColor,
                        width: t.lineWidth
                    };
                    this.stroke.load(e)
                }
            }
        }
        class Fo {
            constructor() {
                this.radius = 10, this.type = po.path
            }
            load(t) {
                void 0 !== t && (void 0 !== t.radius && (this.radius = t.radius), void 0 !== t.type && (this.type = t.type))
            }
        }
        class Ho {
            constructor() {
                this.arrangement = vo.onePerPoint
            }
            load(t) {
                void 0 !== t && void 0 !== t.arrangement && (this.arrangement = t.arrangement)
            }
        }
        class qo {
            constructor() {
                this.path = [], this.size = {
                    height: 0,
                    width: 0
                }
            }
            load(t) {
                void 0 !== t && (void 0 !== t.path && (this.path = t.path), void 0 !== t.size && (void 0 !== t.size.width && (this.size.width = t.size.width), void 0 !== t.size.height && (this.size.height = t.size.height)))
            }
        }
        class _o {
            constructor() {
                this.draw = new Lo, this.enable = !1, this.inline = new Ho, this.move = new Fo, this.scale = 1, this.type = fo.none
            }
            get inlineArrangement() {
                return this.inline.arrangement
            }
            set inlineArrangement(t) {
                this.inline.arrangement = t
            }
            load(t) {
                var i;
                if (void 0 !== t) {
                    this.draw.load(t.draw);
                    const e = null !== (i = t.inline) && void 0 !== i ? i : {
                        arrangement: t.inlineArrangement
                    };
                    void 0 !== e && this.inline.load(e), this.move.load(t.move), void 0 !== t.scale && (this.scale = t.scale), void 0 !== t.type && (this.type = t.type), void 0 !== t.enable ? this.enable = t.enable : this.enable = this.type !== fo.none, void 0 !== t.url && (this.url = t.url), void 0 !== t.data && ("string" == typeof t.data ? this.data = t.data : (this.data = new qo, this.data.load(t.data))), void 0 !== t.position && (this.position = et({}, t.position))
                }
            }
        }
        var Vo = function(t, i, e, o) {
            return new(e || (e = Promise))((function(s, n) {
                function a(t) {
                    try {
                        l(o.next(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function r(t) {
                    try {
                        l(o.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function l(t) {
                    var i;
                    t.done ? s(t.value) : (i = t.value, i instanceof e ? i : new e((function(t) {
                        t(i)
                    }))).then(a, r)
                }
                l((o = o.apply(t, i || [])).next())
            }))
        };

        function Bo(t, i, e) {
            const o = vt(e.color);
            if (o) {
                t.beginPath(), t.moveTo(i[0].x, i[0].y);
                for (const e of i) t.lineTo(e.x, e.y);
                t.closePath(), t.strokeStyle = Tt(o), t.lineWidth = e.width, t.stroke()
            }
        }

        function Wo(t, i, e, o) {
            t.translate(o.x, o.y);
            const s = vt(e.color);
            s && (t.strokeStyle = Tt(s, e.opacity), t.lineWidth = e.width, t.stroke(i))
        }

        function Uo(t, i, e) {
            const {
                dx: o,
                dy: s
            } = H(e, t), {
                dx: n,
                dy: a
            } = H(i, t), r = (o * n + s * a) / (Math.pow(n, 2) + Math.pow(a, 2));
            let l = t.x + n * r,
                c = t.y + a * r;
            return r < 0 ? (l = t.x, c = t.y) : r > 1 && (l = i.x, c = i.y), {
                x: l,
                y: c,
                isOnSegment: r >= 0 && r <= 1
            }
        }

        function Go(t, i, e) {
            const {
                dx: o,
                dy: s
            } = H(t, i), n = Math.atan2(s, o), a = Math.sin(n), r = -Math.cos(n), l = 2 * (e.x * a + e.y * r);
            e.x -= l * a, e.y -= l * r
        }
        class No {
            constructor(t) {
                this.container = t, this.dimension = {
                    height: 0,
                    width: 0
                }, this.path2DSupported = !!window.Path2D, this.options = new _o, this.polygonMaskMoveRadius = this.options.move.radius * t.retina.pixelRatio
            }
            initAsync(t) {
                return Vo(this, void 0, void 0, (function*() {
                    this.options.load(null == t ? void 0 : t.polygon);
                    const i = this.options;
                    this.polygonMaskMoveRadius = i.move.radius * this.container.retina.pixelRatio, i.enable && (yield this.initRawData())
                }))
            }
            resize() {
                const t = this.container,
                    i = this.options;
                i.enable && i.type !== fo.none && (this.redrawTimeout && clearTimeout(this.redrawTimeout), this.redrawTimeout = window.setTimeout((() => Vo(this, void 0, void 0, (function*() {
                    yield this.initRawData(!0), t.particles.redraw()
                }))), 250))
            }
            stop() {
                delete this.raw, delete this.paths
            }
            particlesInitialization() {
                const t = this.options;
                return !(!t.enable || t.type !== fo.inline || t.inline.arrangement !== vo.onePerPoint && t.inline.arrangement !== vo.perPoint) && (this.drawPoints(), !0)
            }
            particlePosition(t) {
                var i, e;
                if (this.options.enable && (null !== (e = null === (i = this.raw) || void 0 === i ? void 0 : i.length) && void 0 !== e ? e : 0) > 0) return et({}, t || this.randomPoint())
            }
            particleBounce(t, i, e) {
                return this.polygonBounce(t, i, e)
            }
            clickPositionValid(t) {
                const i = this.options;
                return i.enable && i.type !== fo.none && i.type !== fo.inline && this.checkInsidePolygon(t)
            }
            draw(t) {
                var i;
                if (!(null === (i = this.paths) || void 0 === i ? void 0 : i.length)) return;
                const e = this.options,
                    o = e.draw;
                if (!e.enable || !o.enable) return;
                const s = this.raw;
                for (const i of this.paths) {
                    const e = i.path2d,
                        n = this.path2DSupported;
                    t && (n && e && this.offset ? Wo(t, e, o.stroke, this.offset) : s && Bo(t, s, o.stroke))
                }
            }
            polygonBounce(t, i, e) {
                const o = this.options;
                if (!this.raw || !o.enable || e !== l.top) return !1;
                if (o.type === fo.inside || o.type === fo.outside) {
                    let i, e, o;
                    const s = t.getPosition(),
                        n = t.getRadius();
                    for (let a = 0, r = this.raw.length - 1; a < this.raw.length; r = a++) {
                        const l = this.raw[a],
                            c = this.raw[r];
                        i = Uo(l, c, s);
                        const d = H(s, i);
                        if ([e, o] = [d.dx, d.dy], d.distance < n) return Go(l, c, t.velocity), !0
                    }
                    if (i && void 0 !== e && void 0 !== o && !this.checkInsidePolygon(s)) {
                        const e = {
                            x: 1,
                            y: 1
                        };
                        return t.position.x >= i.x && (e.x = -1), t.position.y >= i.y && (e.y = -1), t.position.x = i.x + 2 * n * e.x, t.position.y = i.y + 2 * n * e.y, t.velocity.mult(-1), !0
                    }
                } else if (o.type === fo.inline && t.initialPosition) {
                    if (q(t.initialPosition, t.getPosition()) > this.polygonMaskMoveRadius) return t.velocity.x = t.velocity.y / 2 - t.velocity.x, t.velocity.y = t.velocity.x / 2 - t.velocity.y, !0
                }
                return !1
            }
            checkInsidePolygon(t) {
                var i, e;
                const o = this.container,
                    s = this.options;
                if (!s.enable || s.type === fo.none || s.type === fo.inline) return !0;
                if (!this.raw) throw new Error(dt.noPolygonFound);
                const n = o.canvas.size,
                    a = null !== (i = null == t ? void 0 : t.x) && void 0 !== i ? i : Math.random() * n.width,
                    r = null !== (e = null == t ? void 0 : t.y) && void 0 !== e ? e : Math.random() * n.height;
                let l = !1;
                for (let t = 0, i = this.raw.length - 1; t < this.raw.length; i = t++) {
                    const e = this.raw[t],
                        o = this.raw[i];
                    e.y > r != o.y > r && a < (o.x - e.x) * (r - e.y) / (o.y - e.y) + e.x && (l = !l)
                }
                return s.type === fo.inside ? l : s.type === fo.outside && !l
            }
            parseSvgPath(t, i) {
                var e, o, s;
                const n = null != i && i;
                if (void 0 !== this.paths && !n) return this.raw;
                const a = this.container,
                    r = this.options,
                    l = (new DOMParser).parseFromString(t, "image/svg+xml"),
                    c = l.getElementsByTagName("svg")[0];
                let d = c.getElementsByTagName("path");
                d.length || (d = l.getElementsByTagName("path")), this.paths = [];
                for (let t = 0; t < d.length; t++) {
                    const i = d.item(t);
                    i && this.paths.push({
                        element: i,
                        length: i.getTotalLength()
                    })
                }
                const h = a.retina.pixelRatio,
                    u = r.scale / h;
                this.dimension.width = parseFloat(null !== (e = c.getAttribute("width")) && void 0 !== e ? e : "0") * u, this.dimension.height = parseFloat(null !== (o = c.getAttribute("height")) && void 0 !== o ? o : "0") * u;
                const v = null !== (s = r.position) && void 0 !== s ? s : {
                    x: 50,
                    y: 50
                };
                return this.offset = {
                        x: a.canvas.size.width * v.x / (100 * h) - this.dimension.width / 2,
                        y: a.canvas.size.height * v.y / (100 * h) - this.dimension.height / 2
                    },
                    function(t, i, e) {
                        const o = [];
                        for (const s of t) {
                            const t = s.element.pathSegList,
                                n = t.numberOfItems,
                                a = {
                                    x: 0,
                                    y: 0
                                };
                            for (let s = 0; s < n; s++) {
                                const n = t.getItem(s),
                                    r = window.SVGPathSeg;
                                switch (n.pathSegType) {
                                    case r.PATHSEG_MOVETO_ABS:
                                    case r.PATHSEG_LINETO_ABS:
                                    case r.PATHSEG_CURVETO_CUBIC_ABS:
                                    case r.PATHSEG_CURVETO_QUADRATIC_ABS:
                                    case r.PATHSEG_ARC_ABS:
                                    case r.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                                    case r.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
                                        const t = n;
                                        a.x = t.x, a.y = t.y;
                                        break
                                    }
                                    case r.PATHSEG_LINETO_HORIZONTAL_ABS:
                                        a.x = n.x;
                                        break;
                                    case r.PATHSEG_LINETO_VERTICAL_ABS:
                                        a.y = n.y;
                                        break;
                                    case r.PATHSEG_LINETO_REL:
                                    case r.PATHSEG_MOVETO_REL:
                                    case r.PATHSEG_CURVETO_CUBIC_REL:
                                    case r.PATHSEG_CURVETO_QUADRATIC_REL:
                                    case r.PATHSEG_ARC_REL:
                                    case r.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                                    case r.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
                                        const t = n;
                                        a.x += t.x, a.y += t.y;
                                        break
                                    }
                                    case r.PATHSEG_LINETO_HORIZONTAL_REL:
                                        a.x += n.x;
                                        break;
                                    case r.PATHSEG_LINETO_VERTICAL_REL:
                                        a.y += n.y;
                                        break;
                                    case r.PATHSEG_UNKNOWN:
                                    case r.PATHSEG_CLOSEPATH:
                                        continue
                                }
                                o.push({
                                    x: a.x * i + e.x,
                                    y: a.y * i + e.y
                                })
                            }
                        }
                        return o
                    }(this.paths, u, this.offset)
            }
            downloadSvgPath(t, i) {
                return Vo(this, void 0, void 0, (function*() {
                    const e = this.options,
                        o = t || e.url,
                        s = null != i && i;
                    if (!o || void 0 !== this.paths && !s) return this.raw;
                    const n = yield fetch(o);
                    if (!n.ok) throw new Error("tsParticles Error - Error occurred during polygon mask download");
                    return this.parseSvgPath(yield n.text(), i)
                }))
            }
            drawPoints() {
                if (this.raw)
                    for (const t of this.raw) this.container.particles.addParticle({
                        x: t.x,
                        y: t.y
                    })
            }
            randomPoint() {
                const t = this.container,
                    i = this.options;
                let e;
                if (i.type === fo.inline) switch (i.inline.arrangement) {
                    case vo.randomPoint:
                        e = this.getRandomPoint();
                        break;
                    case vo.randomLength:
                        e = this.getRandomPointByLength();
                        break;
                    case vo.equidistant:
                        e = this.getEquidistantPointByIndex(t.particles.count);
                        break;
                    case vo.onePerPoint:
                    case vo.perPoint:
                    default:
                        e = this.getPointByIndex(t.particles.count)
                } else e = {
                    x: Math.random() * t.canvas.size.width,
                    y: Math.random() * t.canvas.size.height
                };
                return this.checkInsidePolygon(e) ? e : this.randomPoint()
            }
            getRandomPoint() {
                if (!this.raw || !this.raw.length) throw new Error(dt.noPolygonDataLoaded);
                const t = Z(this.raw);
                return {
                    x: t.x,
                    y: t.y
                }
            }
            getRandomPointByLength() {
                var t, i, e;
                const o = this.options;
                if (!this.raw || !this.raw.length || !(null === (t = this.paths) || void 0 === t ? void 0 : t.length)) throw new Error(dt.noPolygonDataLoaded);
                const s = Z(this.paths),
                    n = Math.floor(Math.random() * s.length) + 1,
                    a = s.element.getPointAtLength(n);
                return {
                    x: a.x * o.scale + ((null === (i = this.offset) || void 0 === i ? void 0 : i.x) || 0),
                    y: a.y * o.scale + ((null === (e = this.offset) || void 0 === e ? void 0 : e.y) || 0)
                }
            }
            getEquidistantPointByIndex(t) {
                var i, e, o, s, n, a, r;
                const l = this.container.actualOptions,
                    c = this.options;
                if (!this.raw || !this.raw.length || !(null === (i = this.paths) || void 0 === i ? void 0 : i.length)) throw new Error(dt.noPolygonDataLoaded);
                let d, h = 0;
                const u = this.paths.reduce(((t, i) => t + i.length), 0) / l.particles.number.value;
                for (const i of this.paths) {
                    const e = u * t - h;
                    if (e <= i.length) {
                        d = i.element.getPointAtLength(e);
                        break
                    }
                    h += i.length
                }
                return {
                    x: (null !== (e = null == d ? void 0 : d.x) && void 0 !== e ? e : 0) * c.scale + (null !== (s = null === (o = this.offset) || void 0 === o ? void 0 : o.x) && void 0 !== s ? s : 0),
                    y: (null !== (n = null == d ? void 0 : d.y) && void 0 !== n ? n : 0) * c.scale + (null !== (r = null === (a = this.offset) || void 0 === a ? void 0 : a.y) && void 0 !== r ? r : 0)
                }
            }
            getPointByIndex(t) {
                if (!this.raw || !this.raw.length) throw new Error(dt.noPolygonDataLoaded);
                const i = this.raw[t % this.raw.length];
                return {
                    x: i.x,
                    y: i.y
                }
            }
            createPath2D() {
                var t, i;
                const e = this.options;
                if (this.path2DSupported && (null === (t = this.paths) || void 0 === t ? void 0 : t.length))
                    for (const t of this.paths) {
                        const o = null === (i = t.element) || void 0 === i ? void 0 : i.getAttribute("d");
                        if (o) {
                            const i = new Path2D(o),
                                s = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix(),
                                n = new Path2D,
                                a = s.scale(e.scale);
                            n.addPath ? (n.addPath(i, a), t.path2d = n) : delete t.path2d
                        } else delete t.path2d;
                        !t.path2d && this.raw && (t.path2d = new Path2D, t.path2d.moveTo(this.raw[0].x, this.raw[0].y), this.raw.forEach(((i, e) => {
                            var o;
                            e > 0 && (null === (o = t.path2d) || void 0 === o || o.lineTo(i.x, i.y))
                        })), t.path2d.closePath())
                    }
            }
            initRawData(t) {
                return Vo(this, void 0, void 0, (function*() {
                    const i = this.options;
                    if (i.url) this.raw = yield this.downloadSvgPath(i.url, t);
                    else if (i.data) {
                        const e = i.data;
                        let o;
                        if ("string" != typeof e) {
                            const t = e.path instanceof Array ? e.path.map((t => `<path d="${t}" />`)).join("") : `<path d="${e.path}" />`;
                            o = `<svg ${'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'} width="${e.size.width}" height="${e.size.height}">${t}</svg>`
                        } else o = e;
                        this.raw = this.parseSvgPath(o, t)
                    }
                    this.createPath2D()
                }))
            }
        }
        class $o {
            constructor() {
                this.id = "polygonMask"
            }
            getPlugin(t) {
                return new No(t)
            }
            needsPlugin(t) {
                var i, e, o;
                return null !== (e = null === (i = null == t ? void 0 : t.polygon) || void 0 === i ? void 0 : i.enable) && void 0 !== e ? e : void 0 !== (null === (o = null == t ? void 0 : t.polygon) || void 0 === o ? void 0 : o.type) && t.polygon.type !== fo.none
            }
            loadOptions(t, i) {
                if (!this.needsPlugin(i)) return;
                const e = t;
                let o = e.polygon;
                void 0 === (null == o ? void 0 : o.load) && (e.polygon = o = new _o), o.load(null == i ? void 0 : i.polygon)
            }
        }
        class jo {
            getSidesCount() {
                return 12
            }
            draw(t, i, e) {
                t.arc(0, 0, e, 0, 2 * Math.PI, !1)
            }
        }
        var Qo = function(t, i, e, o) {
            return new(e || (e = Promise))((function(s, n) {
                function a(t) {
                    try {
                        l(o.next(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function r(t) {
                    try {
                        l(o.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function l(t) {
                    var i;
                    t.done ? s(t.value) : (i = t.value, i instanceof e ? i : new e((function(t) {
                        t(i)
                    }))).then(a, r)
                }
                l((o = o.apply(t, i || [])).next())
            }))
        };

        function Jo(t) {
            return new Promise(((i, e) => {
                if (!t) return void e("Error tsParticles - No image.src");
                const o = {
                        source: t,
                        type: t.substr(t.length - 3)
                    },
                    s = new Image;
                s.addEventListener("load", (() => {
                    o.element = s, i(o)
                })), s.addEventListener("error", (() => {
                    e(`Error tsParticles - loading image: ${t}`)
                })), s.src = t
            }))
        }

        function Xo(t) {
            return Qo(this, void 0, void 0, (function*() {
                if (!t) throw new Error("Error tsParticles - No image.src");
                const i = {
                    source: t,
                    type: t.substr(t.length - 3)
                };
                if ("svg" !== i.type) return Jo(t);
                const e = yield fetch(i.source);
                if (!e.ok) throw new Error("Error tsParticles - Image not found");
                return i.svgData = yield e.text(), i
            }))
        }
        var Yo, Zo = function(t, i, e, o) {
                return new(e || (e = Promise))((function(s, n) {
                    function a(t) {
                        try {
                            l(o.next(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function r(t) {
                        try {
                            l(o.throw(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(t) {
                        var i;
                        t.done ? s(t.value) : (i = t.value, i instanceof e ? i : new e((function(t) {
                            t(i)
                        }))).then(a, r)
                    }
                    l((o = o.apply(t, i || [])).next())
                }))
            },
            Ko = function(t, i, e, o, s) {
                if ("m" === o) throw new TypeError("Private method is not writable");
                if ("a" === o && !s) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof i ? t !== i || !s : !i.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === o ? s.call(t, e) : s ? s.value = e : i.set(t, e), e
            },
            ts = function(t, i, e, o) {
                if ("a" === e && !o) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof i ? t !== i || !o : !i.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === e ? o : "a" === e ? o.call(t) : o ? o.value : i.get(t)
            };
        class is {
            constructor() {
                Yo.set(this, void 0), Ko(this, Yo, [], "f")
            }
            getSidesCount() {
                return 12
            }
            getImages(t) {
                const i = ts(this, Yo, "f").find((i => i.id === t.id));
                return i || (ts(this, Yo, "f").push({
                    id: t.id,
                    images: []
                }), this.getImages(t))
            }
            addImage(t, i) {
                const e = this.getImages(t);
                null == e || e.images.push(i)
            }
            init(t) {
                return Zo(this, void 0, void 0, (function*() {
                    yield this.loadImagesFromParticlesOptions(t, t.actualOptions.particles), yield this.loadImagesFromParticlesOptions(t, t.actualOptions.interactivity.modes.trail.particles);
                    for (const i of t.actualOptions.manualParticles) yield this.loadImagesFromParticlesOptions(t, i.options);
                    const i = t.actualOptions;
                    if (i.emitters)
                        if (i.emitters instanceof Array)
                            for (const e of i.emitters) yield this.loadImagesFromParticlesOptions(t, e.particles);
                        else yield this.loadImagesFromParticlesOptions(t, i.emitters.particles);
                    const e = i.interactivity.modes.emitters;
                    if (e)
                        if (e instanceof Array)
                            for (const i of e) yield this.loadImagesFromParticlesOptions(t, i.particles);
                        else yield this.loadImagesFromParticlesOptions(t, e.particles)
                }))
            }
            destroy() {
                Ko(this, Yo, [], "f")
            }
            loadImagesFromParticlesOptions(t, i) {
                var e, o, s;
                return Zo(this, void 0, void 0, (function*() {
                    const n = null == i ? void 0 : i.shape;
                    if (!(null == n ? void 0 : n.type) || !n.options || !J(k.image, n.type) && !J(k.images, n.type)) return;
                    const a = ts(this, Yo, "f").findIndex((i => i.id === t.id));
                    a >= 0 && ts(this, Yo, "f").splice(a, 1);
                    const r = null !== (e = n.options[k.images]) && void 0 !== e ? e : n.options[k.image];
                    if (r instanceof Array)
                        for (const i of r) yield this.loadImageShape(t, i);
                    else yield this.loadImageShape(t, r);
                    if (null == i ? void 0 : i.groups)
                        for (const e in i.groups) {
                            const o = i.groups[e];
                            yield this.loadImagesFromParticlesOptions(t, o)
                        }(null === (s = null === (o = null == i ? void 0 : i.destroy) || void 0 === o ? void 0 : o.split) || void 0 === s ? void 0 : s.particles) && (yield this.loadImagesFromParticlesOptions(t, null == i ? void 0 : i.destroy.split.particles))
                }))
            }
            loadImageShape(t, i) {
                return Zo(this, void 0, void 0, (function*() {
                    try {
                        const e = i.replaceColor ? Xo : Jo,
                            o = yield e(i.src);
                        o && this.addImage(t, o)
                    } catch (t) {
                        console.warn(`tsParticles error - ${i.src} not found`)
                    }
                }))
            }
            draw(t, i, e, o) {
                var s, n;
                if (!t) return;
                const a = i.image,
                    r = null === (s = null == a ? void 0 : a.data) || void 0 === s ? void 0 : s.element;
                if (!r) return;
                const l = null !== (n = null == a ? void 0 : a.ratio) && void 0 !== n ? n : 1,
                    c = {
                        x: -e,
                        y: -e
                    };
                (null == a ? void 0 : a.data.svgData) && (null == a ? void 0 : a.replaceColor) || (t.globalAlpha = o), t.drawImage(r, c.x, c.y, 2 * e, 2 * e / l), (null == a ? void 0 : a.data.svgData) && (null == a ? void 0 : a.replaceColor) || (t.globalAlpha = 1)
            }
            loadShape(t) {
                var i, e, o, s, n;
                if ("image" !== t.shape && "images" !== t.shape) return;
                const a = t.container,
                    r = this.getImages(a).images,
                    l = t.shapeData,
                    c = null !== (i = r.find((t => t.source === l.src))) && void 0 !== i ? i : r[0],
                    d = t.getFillColor();
                let h;
                if (!c) return;
                if (void 0 !== c.svgData && l.replaceColor && d) {
                    const i = function(t, i, e) {
                            const {
                                svgData: o
                            } = t;
                            if (!o) return "";
                            if (o.includes("fill")) {
                                const t = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
                                return o.replace(t, (() => At(i, e)))
                            }
                            const s = o.indexOf(">");
                            return `${o.substring(0,s)} fill="${At(i,e)}"${o.substring(s)}`
                        }(c, d, t.opacity.value),
                        o = new Blob([i], {
                            type: "image/svg+xml"
                        }),
                        s = URL || window.URL || window.webkitURL || window,
                        n = s.createObjectURL(o),
                        a = new Image;
                    h = {
                        data: Object.assign(Object.assign({}, c), {
                            svgData: i
                        }),
                        ratio: l.width / l.height,
                        replaceColor: null !== (e = l.replaceColor) && void 0 !== e ? e : l.replace_color,
                        source: l.src
                    }, a.addEventListener("load", (() => {
                        const i = t.image;
                        i && (i.loaded = !0, c.element = a), s.revokeObjectURL(n)
                    })), a.addEventListener("error", (() => {
                        s.revokeObjectURL(n), Jo(l.src).then((i => {
                            const e = t.image;
                            e && (c.element = null == i ? void 0 : i.element, e.loaded = !0)
                        }))
                    })), a.src = n
                } else h = {
                    data: c,
                    loaded: !0,
                    ratio: l.width / l.height,
                    replaceColor: null !== (o = l.replaceColor) && void 0 !== o ? o : l.replace_color,
                    source: l.src
                };
                h.ratio || (h.ratio = 1);
                const u = {
                    image: h,
                    fill: null !== (s = l.fill) && void 0 !== s ? s : t.fill,
                    close: null !== (n = l.close) && void 0 !== n ? n : t.close
                };
                t.image = u.image, t.fill = u.fill, t.close = u.close
            }
        }
        Yo = new WeakMap;
        class es {
            getSidesCount() {
                return 1
            }
            draw(t, i, e) {
                t.moveTo(-e / 2, 0), t.lineTo(e / 2, 0)
            }
        }
        class os {
            getSidesCount(t) {
                var i, e;
                const o = t.shapeData;
                return null !== (e = null !== (i = null == o ? void 0 : o.sides) && void 0 !== i ? i : null == o ? void 0 : o.nb_sides) && void 0 !== e ? e : 5
            }
            draw(t, i, e) {
                const o = this.getCenter(i, e),
                    s = this.getSidesData(i, e),
                    n = s.count.numerator * s.count.denominator,
                    a = s.count.numerator / s.count.denominator,
                    r = 180 * (a - 2) / a,
                    l = Math.PI - Math.PI * r / 180;
                if (t) {
                    t.beginPath(), t.translate(o.x, o.y), t.moveTo(0, 0);
                    for (let i = 0; i < n; i++) t.lineTo(s.length, 0), t.translate(s.length, 0), t.rotate(l)
                }
            }
        }
        class ss extends os {
            getSidesData(t, i) {
                var e, o;
                const s = t.shapeData,
                    n = null !== (o = null !== (e = null == s ? void 0 : s.sides) && void 0 !== e ? e : null == s ? void 0 : s.nb_sides) && void 0 !== o ? o : 5;
                return {
                    count: {
                        denominator: 1,
                        numerator: n
                    },
                    length: 2.66 * i / (n / 3)
                }
            }
            getCenter(t, i) {
                return {
                    x: -i / (this.getSidesCount(t) / 3.5),
                    y: -i / .76
                }
            }
        }
        class ns extends os {
            getSidesCount() {
                return 3
            }
            getSidesData(t, i) {
                return {
                    count: {
                        denominator: 2,
                        numerator: 3
                    },
                    length: 2 * i
                }
            }
            getCenter(t, i) {
                return {
                    x: -i,
                    y: i / 1.66
                }
            }
        }

        function as(t) {
            ! function(t) {
                t.addShape("polygon", new ss)
            }(t),
            function(t) {
                t.addShape("triangle", new ns)
            }(t)
        }
        const rs = Math.sqrt(2);
        class ls {
            getSidesCount() {
                return 4
            }
            draw(t, i, e) {
                t.rect(-e / rs, -e / rs, 2 * e / rs, 2 * e / rs)
            }
        }
        class cs {
            getSidesCount(t) {
                var i, e;
                const o = t.shapeData;
                return null !== (e = null !== (i = null == o ? void 0 : o.sides) && void 0 !== i ? i : null == o ? void 0 : o.nb_sides) && void 0 !== e ? e : 5
            }
            draw(t, i, e) {
                var o;
                const s = i.shapeData,
                    n = this.getSidesCount(i),
                    a = null !== (o = null == s ? void 0 : s.inset) && void 0 !== o ? o : 2;
                t.moveTo(0, 0 - e);
                for (let i = 0; i < n; i++) t.rotate(Math.PI / n), t.lineTo(0, 0 - e * a), t.rotate(Math.PI / n), t.lineTo(0, 0 - e)
            }
        }
        var ds = function(t, i, e, o) {
            return new(e || (e = Promise))((function(s, n) {
                function a(t) {
                    try {
                        l(o.next(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function r(t) {
                    try {
                        l(o.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function l(t) {
                    var i;
                    t.done ? s(t.value) : (i = t.value, i instanceof e ? i : new e((function(t) {
                        t(i)
                    }))).then(a, r)
                }
                l((o = o.apply(t, i || [])).next())
            }))
        };
        const hs = ["text", "character", "char"];
        class us {
            getSidesCount() {
                return 12
            }
            init(t) {
                return ds(this, void 0, void 0, (function*() {
                    const i = t.actualOptions;
                    if (hs.find((t => J(t, i.particles.shape.type)))) {
                        const t = hs.map((t => i.particles.shape.options[t])).find((t => !!t));
                        if (t instanceof Array) {
                            const i = [];
                            for (const e of t) i.push(X(e));
                            yield Promise.allSettled(i)
                        } else void 0 !== t && (yield X(t))
                    }
                }))
            }
            draw(t, i, e, o) {
                var s, n, a;
                const r = i.shapeData;
                if (void 0 === r) return;
                const l = r.value;
                if (void 0 === l) return;
                const c = i;
                void 0 === c.text && (c.text = l instanceof Array ? Z(l, i.randomIndexData) : l);
                const d = c.text,
                    h = null !== (s = r.style) && void 0 !== s ? s : "",
                    u = null !== (n = r.weight) && void 0 !== n ? n : "400",
                    v = 2 * Math.round(e),
                    p = null !== (a = r.font) && void 0 !== a ? a : "Verdana",
                    f = i.fill,
                    y = d.length * e / 2;
                t.font = `${h} ${u} ${v}px "${p}"`;
                const m = {
                    x: -y,
                    y: e / 2
                };
                t.globalAlpha = o, f ? t.fillText(d, m.x, m.y) : t.strokeText(d, m.x, m.y), t.globalAlpha = 1
            }
        }
        class vs {
            isEnabled(t) {
                const i = t.options.rotate,
                    e = i.animation;
                return !t.destroyed && !t.spawning && !i.path && e.enable
            }
            update(t, i) {
                this.isEnabled(t) && function(t, i) {
                    var e;
                    const o = t.options.rotate.animation,
                        s = (null !== (e = t.rotate.velocity) && void 0 !== e ? e : 0) * i.factor,
                        n = 2 * Math.PI;
                    if (o.enable) switch (t.rotate.status) {
                        case b.increasing:
                            t.rotate.value += s, t.rotate.value > n && (t.rotate.value -= n);
                            break;
                        case b.decreasing:
                        default:
                            t.rotate.value -= s, t.rotate.value < 0 && (t.rotate.value += n)
                    }
                }(t, i)
            }
        }

        function ps(t, i, e, o, s) {
            var n;
            const a = i;
            if (!a || !e.enable) return;
            const r = E(e.offset),
                l = (null !== (n = i.velocity) && void 0 !== n ? n : 0) * t.factor + 3.6 * r;
            s && a.status !== b.increasing ? (a.value -= l, a.value < 0 && (a.status = b.increasing, a.value += a.value)) : (a.value += l, s && a.value > o && (a.status = b.decreasing, a.value -= a.value % o)), a.value > o && (a.value %= o)
        }
        class fs {
            isEnabled(t) {
                var i, e, o;
                const s = t.options.color.animation;
                return !t.destroyed && !t.spawning && (void 0 !== (null === (i = t.color) || void 0 === i ? void 0 : i.h.value) && s.h.enable || void 0 !== (null === (e = t.color) || void 0 === e ? void 0 : e.s.value) && s.s.enable || void 0 !== (null === (o = t.color) || void 0 === o ? void 0 : o.l.value) && s.l.enable)
            }
            update(t, i) {
                ! function(t, i) {
                    var e, o, s;
                    const n = t.options.color.animation;
                    void 0 !== (null === (e = t.color) || void 0 === e ? void 0 : e.h) && ps(i, t.color.h, n.h, 360, !1), void 0 !== (null === (o = t.color) || void 0 === o ? void 0 : o.s) && ps(i, t.color.s, n.s, 100, !0), void 0 !== (null === (s = t.color) || void 0 === s ? void 0 : s.l) && ps(i, t.color.l, n.l, 100, !0)
                }(t, i)
            }
        }
        class ys {
            constructor(t) {
                this.container = t
            }
            isEnabled(t) {
                return !t.destroyed
            }
            update(t, i) {
                if (!this.isEnabled(t)) return;
                const e = t.life;
                let o = !1;
                if (t.spawning) {
                    if (e.delayTime += i.value, !(e.delayTime >= t.life.delay)) return;
                    o = !0, t.spawning = !1, e.delayTime = 0, e.time = 0
                }
                if (-1 === e.duration) return;
                if (t.spawning) return;
                if (o ? e.time = 0 : e.time += i.value, e.time < e.duration) return;
                if (e.time = 0, t.life.count > 0 && t.life.count--, 0 === t.life.count) return void t.destroy();
                const s = this.container.canvas.size,
                    n = L(0, s.width),
                    a = L(0, s.width);
                t.position.x = E(n), t.position.y = E(a), t.spawning = !0, e.delayTime = 0, e.time = 0, t.reset();
                const r = t.options.life;
                e.delay = 1e3 * R(r.delay.value), e.duration = 1e3 * R(r.duration.value)
            }
        }

        function ms(t, i) {
            var e, o;
            const s = t.options.opacity.animation,
                n = t.opacity.min,
                a = t.opacity.max;
            if (!t.destroyed && s.enable && (s.count <= 0 || t.loops.opacity < s.count)) {
                switch (t.opacity.status) {
                    case b.increasing:
                        t.opacity.value >= a ? (t.opacity.status = b.decreasing, t.loops.opacity++) : t.opacity.value += (null !== (e = t.opacity.velocity) && void 0 !== e ? e : 0) * i.factor;
                        break;
                    case b.decreasing:
                        t.opacity.value <= n ? (t.opacity.status = b.increasing, t.loops.opacity++) : t.opacity.value -= (null !== (o = t.opacity.velocity) && void 0 !== o ? o : 0) * i.factor
                }! function(t, i, e, o, s) {
                    switch (i) {
                        case w.max:
                            e >= s && t.destroy();
                            break;
                        case w.min:
                            e <= o && t.destroy()
                    }
                }(t, s.destroy, t.opacity.value, n, a), t.destroyed || (t.opacity.value = T(t.opacity.value, n, a))
            }
        }
        class bs {
            isEnabled(t) {
                const i = t.options.opacity.anim;
                return !t.destroyed && !t.spawning && i.enable && (i.count <= 0 || t.loops.opacity < i.count)
            }
            update(t, i) {
                this.isEnabled(t) && ms(t, i)
            }
        }

        function gs(t, i) {
            var e;
            const o = t.options.size.animation,
                s = (null !== (e = t.size.velocity) && void 0 !== e ? e : 0) * i.factor,
                n = t.size.min,
                a = t.size.max;
            if (!t.destroyed && o.enable && (o.count <= 0 || t.loops.size < o.count)) {
                switch (t.size.status) {
                    case b.increasing:
                        t.size.value >= a ? (t.size.status = b.decreasing, t.loops.size++) : t.size.value += s;
                        break;
                    case b.decreasing:
                        t.size.value <= n ? (t.size.status = b.increasing, t.loops.size++) : t.size.value -= s
                }! function(t, i, e, o, s) {
                    switch (i) {
                        case w.max:
                            e >= s && t.destroy();
                            break;
                        case w.min:
                            e <= o && t.destroy()
                    }
                }(t, o.destroy, t.size.value, n, a), t.destroyed || (t.size.value = T(t.size.value, n, a))
            }
        }
        class ws {
            isEnabled(t) {
                const i = t.options.size.animation;
                return !t.destroyed && !t.spawning && i.enable && (i.count <= 0 || t.loops.size < i.count)
            }
            update(t, i) {
                this.isEnabled(t) && gs(t, i)
            }
        }

        function xs(t, i, e, o, s) {
            var n;
            const a = i;
            if (!a || !e.enable) return;
            const r = E(e.offset),
                l = (null !== (n = i.velocity) && void 0 !== n ? n : 0) * t.factor + 3.6 * r;
            s && a.status !== b.increasing ? (a.value -= l, a.value < 0 && (a.status = b.increasing, a.value += a.value)) : (a.value += l, s && a.value > o && (a.status = b.decreasing, a.value -= a.value % o)), a.value > o && (a.value %= o)
        }
        class ks {
            isEnabled(t) {
                var i, e, o;
                const s = t.stroke.color;
                return !t.destroyed && !t.spawning && void 0 !== s && (void 0 !== (null === (i = t.strokeColor) || void 0 === i ? void 0 : i.h.value) && s.animation.h.enable || void 0 !== (null === (e = t.strokeColor) || void 0 === e ? void 0 : e.s.value) && s.animation.s.enable || void 0 !== (null === (o = t.strokeColor) || void 0 === o ? void 0 : o.l.value) && s.animation.l.enable)
            }
            update(t, i) {
                this.isEnabled(t) && function(t, i) {
                    var e, o, s, n, a, r, l, c, d, h, u, v;
                    if (!t.stroke.color) return;
                    const p = t.stroke.color.animation,
                        f = p;
                    if (void 0 !== f.enable) {
                        const n = null !== (o = null === (e = t.strokeColor) || void 0 === e ? void 0 : e.h) && void 0 !== o ? o : null === (s = t.color) || void 0 === s ? void 0 : s.h;
                        n && xs(i, n, f, 360, !1)
                    } else {
                        const e = p,
                            o = null !== (a = null === (n = t.strokeColor) || void 0 === n ? void 0 : n.h) && void 0 !== a ? a : null === (r = t.color) || void 0 === r ? void 0 : r.h;
                        o && xs(i, o, e.h, 360, !1);
                        const s = null !== (c = null === (l = t.strokeColor) || void 0 === l ? void 0 : l.s) && void 0 !== c ? c : null === (d = t.color) || void 0 === d ? void 0 : d.s;
                        s && xs(i, s, e.s, 100, !0);
                        const f = null !== (u = null === (h = t.strokeColor) || void 0 === h ? void 0 : h.l) && void 0 !== u ? u : null === (v = t.color) || void 0 === v ? void 0 : v.l;
                        f && xs(i, f, e.l, 100, !0)
                    }
                }(t, i)
            }
        }
        class Ps {
            constructor(t) {
                this.container = t
            }
            isEnabled(t) {
                return !t.destroyed && !t.spawning
            }
            update(t, i) {
                var e, o, s, n;
                const a = t.options.move.outModes;
                this.updateOutMode(t, i, null !== (e = a.bottom) && void 0 !== e ? e : a.default, l.bottom), this.updateOutMode(t, i, null !== (o = a.left) && void 0 !== o ? o : a.default, l.left), this.updateOutMode(t, i, null !== (s = a.right) && void 0 !== s ? s : a.default, l.right), this.updateOutMode(t, i, null !== (n = a.top) && void 0 !== n ? n : a.default, l.top)
            }
            updateOutMode(t, i, e, o) {
                switch (e) {
                    case f.bounce:
                    case f.bounceVertical:
                    case f.bounceHorizontal:
                    case "bounceVertical":
                    case "bounceHorizontal":
                    case f.split:
                        this.bounce(t, i, o, e);
                        break;
                    case f.destroy:
                        this.destroy(t, o);
                        break;
                    case f.out:
                        this.out(t, o);
                        break;
                    case f.none:
                    default:
                        this.none(t, o)
                }
            }
            destroy(t, i) {
                const e = this.container;
                K(t.position, e.canvas.size, t.getRadius(), i) || e.particles.remove(t, void 0, !0)
            }
            out(t, i) {
                const e = this.container;
                if (K(t.position, e.canvas.size, t.getRadius(), i)) return;
                const o = t.options.move.warp,
                    s = e.canvas.size,
                    n = {
                        bottom: s.height + t.offset.y,
                        left: -t.offset.x,
                        right: s.width + t.offset.x,
                        top: -t.offset.y
                    },
                    a = t.getRadius(),
                    r = it(t.position, a);
                i === l.right && r.left > s.width + t.offset.x ? (t.position.x = n.left, t.initialPosition.x = t.position.x, o || (t.position.y = Math.random() * s.height, t.initialPosition.y = t.position.y)) : i === l.left && r.right < -t.offset.x && (t.position.x = n.right, t.initialPosition.x = t.position.x, o || (t.position.y = Math.random() * s.height, t.initialPosition.y = t.position.y)), i === l.bottom && r.top > s.height + t.offset.y ? (o || (t.position.x = Math.random() * s.width, t.initialPosition.x = t.position.x), t.position.y = n.top, t.initialPosition.y = t.position.y) : i === l.top && r.bottom < -t.offset.y && (o || (t.position.x = Math.random() * s.width, t.initialPosition.x = t.position.x), t.position.y = n.bottom, t.initialPosition.y = t.position.y)
            }
            bounce(t, i, e, o) {
                const s = this.container;
                let n = !1;
                for (const [, o] of s.plugins)
                    if (void 0 !== o.particleBounce && (n = o.particleBounce(t, i, e)), n) break;
                if (n) return;
                const a = t.getPosition(),
                    r = t.offset,
                    c = t.getRadius(),
                    d = it(a, c),
                    h = s.canvas.size;
                ! function(t) {
                    if (t.outMode !== f.bounce && t.outMode !== f.bounceHorizontal && "bounceHorizontal" !== t.outMode && t.outMode !== f.split) return;
                    const i = t.particle.velocity.x;
                    let e = !1;
                    if (t.direction === l.right && t.bounds.right >= t.canvasSize.width && i > 0 || t.direction === l.left && t.bounds.left <= 0 && i < 0) {
                        const i = R(t.particle.options.bounce.horizontal.value);
                        t.particle.velocity.x *= -i, e = !0
                    }
                    if (!e) return;
                    const o = t.offset.x + t.size;
                    t.bounds.right >= t.canvasSize.width ? t.particle.position.x = t.canvasSize.width - o : t.bounds.left <= 0 && (t.particle.position.x = o), t.outMode === f.split && t.particle.destroy()
                }({
                    particle: t,
                    outMode: o,
                    direction: e,
                    bounds: d,
                    canvasSize: h,
                    offset: r,
                    size: c
                }),
                function(t) {
                    if (t.outMode === f.bounce || t.outMode === f.bounceVertical || "bounceVertical" === t.outMode || t.outMode === f.split) {
                        const i = t.particle.velocity.y;
                        let e = !1;
                        if (t.direction === l.bottom && t.bounds.bottom >= t.canvasSize.height && i > 0 || t.direction === l.top && t.bounds.top <= 0 && i < 0) {
                            const i = R(t.particle.options.bounce.vertical.value);
                            t.particle.velocity.y *= -i, e = !0
                        }
                        if (!e) return;
                        const o = t.offset.y + t.size;
                        t.bounds.bottom >= t.canvasSize.height ? t.particle.position.y = t.canvasSize.height - o : t.bounds.top <= 0 && (t.particle.position.y = o), t.outMode === f.split && t.particle.destroy()
                    }
                }({
                    particle: t,
                    outMode: o,
                    direction: e,
                    bounds: d,
                    canvasSize: h,
                    offset: r,
                    size: c
                })
            }
            none(t, i) {
                if (t.options.move.distance.horizontal && (i === l.left || i === l.right) || t.options.move.distance.vertical && (i === l.top || i === l.bottom)) return;
                const e = t.options.move.gravity,
                    o = this.container;
                if (e.enable) {
                    const s = t.position;
                    (!e.inverse && s.y > o.canvas.size.height && i === l.bottom || e.inverse && s.y < 0 && i === l.top) && o.particles.remove(t)
                } else K(t.position, o.canvas.size, t.getRadius(), i) || o.particles.remove(t)
            }
        }
        class Ms {
            isEnabled(t) {
                const i = t.options.rotate,
                    e = i.animation;
                return !t.destroyed && !t.spawning && !i.path && e.enable
            }
            update(t, i) {
                this.isEnabled(t) && function(t, i) {
                    const e = t.options.roll,
                        o = t.rollSpeed * i.factor,
                        s = 2 * Math.PI;
                    e.enable && (t.rollAngle += o, t.rollAngle > s && (t.rollAngle -= s))
                }(t, i)
            }
        }
        class zs {
            isEnabled(t) {
                const i = t.options.rotate,
                    e = i.animation;
                return !t.destroyed && !t.spawning && !i.path && e.enable
            }
            update(t, i) {
                this.isEnabled(t) && function(t, i) {
                    var e;
                    const o = t.options.tilt.animation,
                        s = (null !== (e = t.tilt.velocity) && void 0 !== e ? e : 0) * i.factor,
                        n = 2 * Math.PI;
                    if (o.enable) switch (t.tilt.status) {
                        case b.increasing:
                            t.tilt.value += s, t.tilt.value > n && (t.tilt.value -= n);
                            break;
                        case b.decreasing:
                        default:
                            t.tilt.value -= s, t.tilt.value < 0 && (t.tilt.value += n)
                    }
                }(t, i)
            }
        }
        class Cs {
            isEnabled(t) {
                const i = t.options.rotate,
                    e = i.animation;
                return !t.destroyed && !t.spawning && !i.path && e.enable
            }
            update(t, i) {
                this.isEnabled(t) && function(t, i) {
                    const e = t.options.wobble,
                        o = t.wobbleSpeed * i.factor,
                        s = t.wobbleDistance * i.factor / (1e3 / 60),
                        n = 2 * Math.PI;
                    e.enable && (t.wobbleAngle += o, t.wobbleAngle > n && (t.wobbleAngle -= n), t.position.x += s * Math.cos(t.wobbleAngle), t.position.y += s * Math.abs(Math.sin(t.wobbleAngle)))
                }(t, i)
            }
        }
        class Ss {
            constructor(t) {
                this.container = t, this.type = x.External
            }
        }
        class Os extends Ss {
            constructor(t) {
                super(t)
            }
            isEnabled() {
                const t = this.container,
                    i = t.actualOptions,
                    e = t.interactivity.mouse,
                    o = i.interactivity.events;
                if (!(e.position && o.onHover.enable || e.clickPosition && o.onClick.enable)) return !1;
                const s = o.onHover.mode,
                    n = o.onClick.mode;
                return J(v.attract, s) || J(d.attract, n)
            }
            reset() {}
            interact() {
                const t = this.container,
                    i = t.actualOptions,
                    e = t.interactivity.status === dt.mouseMoveEvent,
                    o = i.interactivity.events,
                    s = o.onHover.enable,
                    n = o.onHover.mode,
                    a = o.onClick.enable,
                    r = o.onClick.mode;
                e && s && J(v.attract, n) ? this.hoverAttract() : a && J(d.attract, r) && this.clickAttract()
            }
            hoverAttract() {
                const t = this.container,
                    i = t.interactivity.mouse.position;
                if (!i) return;
                const e = t.retina.attractModeDistance;
                this.processAttract(i, e, new Yt(i.x, i.y, e))
            }
            processAttract(t, i, e) {
                const o = this.container,
                    s = o.actualOptions.interactivity.modes.attract,
                    n = o.particles.quadTree.query(e);
                for (const e of n) {
                    const {
                        dx: o,
                        dy: n,
                        distance: a
                    } = H(e.position, t), r = s.speed * s.factor, l = T(W(1 - a / i, s.easing) * r, 0, s.maxSpeed), c = O.create(0 === a ? r : o / a * l, 0 === a ? r : n / a * l);
                    e.position.subFrom(c)
                }
            }
            clickAttract() {
                const t = this.container;
                if (t.attract.finish || (t.attract.count || (t.attract.count = 0), t.attract.count++, t.attract.count === t.particles.count && (t.attract.finish = !0)), t.attract.clicking) {
                    const i = t.interactivity.mouse.clickPosition;
                    if (!i) return;
                    const e = t.retina.attractModeDistance;
                    this.processAttract(i, e, new Yt(i.x, i.y, e))
                } else !1 === t.attract.clicking && (t.attract.particles = [])
            }
        }
        class Ts extends Ss {
            constructor(t) {
                super(t)
            }
            isEnabled() {
                const t = this.container,
                    i = t.actualOptions,
                    e = t.interactivity.mouse,
                    o = i.interactivity.events,
                    s = o.onDiv;
                return e.position && o.onHover.enable && J(v.bounce, o.onHover.mode) || ot(u.bounce, s)
            }
            interact() {
                const t = this.container,
                    i = t.actualOptions.interactivity.events,
                    e = t.interactivity.status === dt.mouseMoveEvent,
                    o = i.onHover.enable,
                    s = i.onHover.mode,
                    n = i.onDiv;
                e && o && J(v.bounce, s) ? this.processMouseBounce() : st(u.bounce, n, ((t, i) => this.singleSelectorBounce(t, i)))
            }
            reset() {}
            processMouseBounce() {
                const t = this.container,
                    i = 10 * t.retina.pixelRatio,
                    e = t.interactivity.mouse.position,
                    o = t.retina.bounceModeDistance;
                e && this.processBounce(e, o, new Yt(e.x, e.y, o + i))
            }
            singleSelectorBounce(t, i) {
                const e = this.container,
                    o = document.querySelectorAll(t);
                o.length && o.forEach((t => {
                    const o = t,
                        s = e.retina.pixelRatio,
                        n = {
                            x: (o.offsetLeft + o.offsetWidth / 2) * s,
                            y: (o.offsetTop + o.offsetHeight / 2) * s
                        },
                        a = o.offsetWidth / 2 * s,
                        r = 10 * s,
                        l = i.type === M.circle ? new Yt(n.x, n.y, a + r) : new Zt(o.offsetLeft * s - r, o.offsetTop * s - r, o.offsetWidth * s + 2 * r, o.offsetHeight * s + 2 * r);
                    this.processBounce(n, a, l)
                }))
            }
            processBounce(t, i, e) {
                const o = this.container.particles.quadTree.query(e);
                for (const s of o) e instanceof Yt ? lt(rt(s), {
                    position: t,
                    radius: i,
                    mass: Math.pow(i, 2) * Math.PI / 2,
                    velocity: O.origin,
                    factor: O.origin
                }) : e instanceof Zt && ct(s, it(t, i))
            }
        }
        var As;

        function Es(t, i, e, o) {
            if (i > e) {
                return T(t + (i - e) * o, t, i)
            }
            if (i < e) {
                return T(t - (e - i) * o, i, t)
            }
        }! function(t) {
            t.color = "color", t.opacity = "opacity", t.size = "size"
        }(As || (As = {}));
        class Rs extends Ss {
            constructor(t) {
                super(t)
            }
            isEnabled() {
                const t = this.container,
                    i = t.actualOptions,
                    e = t.interactivity.mouse,
                    o = i.interactivity.events,
                    s = o.onDiv,
                    n = ot(u.bubble, s);
                if (!(n || o.onHover.enable && e.position || o.onClick.enable && e.clickPosition)) return !1;
                const a = o.onHover.mode,
                    r = o.onClick.mode;
                return J(v.bubble, a) || J(d.bubble, r) || n
            }
            reset(t, i) {
                t.bubble.inRange && !i || (delete t.bubble.div, delete t.bubble.opacity, delete t.bubble.radius, delete t.bubble.color)
            }
            interact() {
                const t = this.container.actualOptions.interactivity.events,
                    i = t.onHover,
                    e = t.onClick,
                    o = i.enable,
                    s = i.mode,
                    n = e.enable,
                    a = e.mode,
                    r = t.onDiv;
                o && J(v.bubble, s) ? this.hoverBubble() : n && J(d.bubble, a) ? this.clickBubble() : st(u.bubble, r, ((t, i) => this.singleSelectorHover(t, i)))
            }
            singleSelectorHover(t, i) {
                const e = this.container,
                    o = document.querySelectorAll(t);
                o.length && o.forEach((t => {
                    const o = t,
                        s = e.retina.pixelRatio,
                        n = {
                            x: (o.offsetLeft + o.offsetWidth / 2) * s,
                            y: (o.offsetTop + o.offsetHeight / 2) * s
                        },
                        a = o.offsetWidth / 2 * s,
                        r = i.type === M.circle ? new Yt(n.x, n.y, a) : new Zt(o.offsetLeft * s, o.offsetTop * s, o.offsetWidth * s, o.offsetHeight * s),
                        l = e.particles.quadTree.query(r);
                    for (const t of l) {
                        if (!r.contains(t.getPosition())) continue;
                        t.bubble.inRange = !0;
                        const i = at(e.actualOptions.interactivity.modes.bubble.divs, o);
                        t.bubble.div && t.bubble.div === o || (this.reset(t, !0), t.bubble.div = o), this.hoverBubbleSize(t, 1, i), this.hoverBubbleOpacity(t, 1, i), this.hoverBubbleColor(t, i)
                    }
                }))
            }
            process(t, i, e, o) {
                const s = this.container,
                    n = o.bubbleObj.optValue;
                if (void 0 === n) return;
                const a = s.actualOptions.interactivity.modes.bubble.duration,
                    r = s.retina.bubbleModeDistance,
                    l = o.particlesObj.optValue,
                    c = o.bubbleObj.value,
                    d = o.particlesObj.value || 0,
                    h = o.type;
                if (n !== l)
                    if (s.bubble.durationEnd) c && (h === As.size && delete t.bubble.radius, h === As.opacity && delete t.bubble.opacity);
                    else if (i <= r) {
                    if ((null != c ? c : d) !== n) {
                        const i = d - e * (d - n) / a;
                        h === As.size && (t.bubble.radius = i), h === As.opacity && (t.bubble.opacity = i)
                    }
                } else h === As.size && delete t.bubble.radius, h === As.opacity && delete t.bubble.opacity
            }
            clickBubble() {
                const t = this.container,
                    i = t.actualOptions,
                    e = t.interactivity.mouse.clickPosition;
                if (!e) return;
                const o = t.retina.bubbleModeDistance,
                    s = t.particles.quadTree.queryCircle(e, o);
                for (const o of s) {
                    if (!t.bubble.clicking) continue;
                    o.bubble.inRange = !t.bubble.durationEnd;
                    const s = q(o.getPosition(), e),
                        n = ((new Date).getTime() - (t.interactivity.mouse.clickTime || 0)) / 1e3;
                    n > i.interactivity.modes.bubble.duration && (t.bubble.durationEnd = !0), n > 2 * i.interactivity.modes.bubble.duration && (t.bubble.clicking = !1, t.bubble.durationEnd = !1);
                    const a = {
                        bubbleObj: {
                            optValue: t.retina.bubbleModeSize,
                            value: o.bubble.radius
                        },
                        particlesObj: {
                            optValue: I(o.options.size.value) * t.retina.pixelRatio,
                            value: o.size.value
                        },
                        type: As.size
                    };
                    this.process(o, s, n, a);
                    const r = {
                        bubbleObj: {
                            optValue: i.interactivity.modes.bubble.opacity,
                            value: o.bubble.opacity
                        },
                        particlesObj: {
                            optValue: I(o.options.opacity.value),
                            value: o.opacity.value
                        },
                        type: As.opacity
                    };
                    this.process(o, s, n, r), t.bubble.durationEnd ? delete o.bubble.color : s <= t.retina.bubbleModeDistance ? this.hoverBubbleColor(o) : delete o.bubble.color
                }
            }
            hoverBubble() {
                const t = this.container,
                    i = t.interactivity.mouse.position;
                if (void 0 === i) return;
                const e = t.retina.bubbleModeDistance,
                    o = t.particles.quadTree.queryCircle(i, e);
                for (const s of o) {
                    s.bubble.inRange = !0;
                    const o = q(s.getPosition(), i),
                        n = 1 - o / e;
                    o <= e ? n >= 0 && t.interactivity.status === dt.mouseMoveEvent && (this.hoverBubbleSize(s, n), this.hoverBubbleOpacity(s, n), this.hoverBubbleColor(s)) : this.reset(s), t.interactivity.status === dt.mouseLeaveEvent && this.reset(s)
                }
            }
            hoverBubbleSize(t, i, e) {
                const o = this.container,
                    s = (null == e ? void 0 : e.size) ? e.size * o.retina.pixelRatio : o.retina.bubbleModeSize;
                if (void 0 === s) return;
                const n = I(t.options.size.value) * o.retina.pixelRatio,
                    a = Es(t.size.value, s, n, i);
                void 0 !== a && (t.bubble.radius = a)
            }
            hoverBubbleOpacity(t, i, e) {
                var o;
                const s = this.container.actualOptions,
                    n = null !== (o = null == e ? void 0 : e.opacity) && void 0 !== o ? o : s.interactivity.modes.bubble.opacity;
                if (!n) return;
                const a = t.options.opacity.value,
                    r = Es(t.opacity.value, n, I(a), i);
                void 0 !== r && (t.bubble.opacity = r)
            }
            hoverBubbleColor(t, i) {
                var e;
                const o = this.container.actualOptions;
                if (void 0 !== t.bubble.color) return;
                const s = null !== (e = null == i ? void 0 : i.color) && void 0 !== e ? e : o.interactivity.modes.bubble.color;
                if (!s) return;
                const n = s instanceof Array ? Z(s) : s;
                t.bubble.color = pt(n)
            }
        }
        class Ds extends Ss {
            constructor(t) {
                super(t)
            }
            isEnabled() {
                const t = this.container,
                    i = t.interactivity.mouse,
                    e = t.actualOptions.interactivity.events;
                return !(!e.onHover.enable || !i.position) && J(v.connect, e.onHover.mode)
            }
            reset() {}
            interact() {
                const t = this.container;
                if (t.actualOptions.interactivity.events.onHover.enable && "mousemove" === t.interactivity.status) {
                    const i = t.interactivity.mouse.position;
                    if (!i) return;
                    const e = Math.abs(t.retina.connectModeRadius),
                        o = t.particles.quadTree.queryCircle(i, e);
                    let s = 0;
                    for (const i of o) {
                        const e = i.getPosition();
                        for (const n of o.slice(s + 1)) {
                            const o = n.getPosition(),
                                s = Math.abs(t.retina.connectModeDistance),
                                a = Math.abs(e.x - o.x),
                                r = Math.abs(e.y - o.y);
                            a < s && r < s && t.canvas.drawConnectLine(i, n)
                        }++s
                    }
                }
            }
        }
        class Is extends Ss {
            constructor(t) {
                super(t)
            }
            isEnabled() {
                const t = this.container,
                    i = t.interactivity.mouse,
                    e = t.actualOptions.interactivity.events;
                return e.onHover.enable && !!i.position && J(v.grab, e.onHover.mode)
            }
            reset() {}
            interact() {
                var t;
                const i = this.container,
                    e = i.actualOptions,
                    o = e.interactivity;
                if (o.events.onHover.enable && i.interactivity.status === dt.mouseMoveEvent) {
                    const s = i.interactivity.mouse.position;
                    if (!s) return;
                    const n = i.retina.grabModeDistance,
                        a = i.particles.quadTree.queryCircle(s, n);
                    for (const r of a) {
                        const a = q(r.getPosition(), s);
                        if (a <= n) {
                            const l = o.modes.grab.links,
                                c = l.opacity,
                                d = c - a * c / n;
                            if (d <= 0) continue;
                            const h = null !== (t = l.color) && void 0 !== t ? t : r.options.links.color;
                            if (!i.particles.grabLineColor) {
                                const t = e.interactivity.modes.grab.links;
                                i.particles.grabLineColor = It(h, t.blink, t.consent)
                            }
                            const u = Dt(r, void 0, i.particles.grabLineColor);
                            if (!u) return;
                            i.canvas.drawGrabLine(r, u, d, s)
                        }
                    }
                }
            }
        }
        class Ls extends Ss {
            constructor(t) {
                super(t)
            }
            isEnabled() {
                const t = this.container,
                    i = t.actualOptions,
                    e = t.interactivity.mouse,
                    o = i.interactivity.events,
                    s = o.onDiv,
                    n = ot(u.repulse, s);
                if (!(n || o.onHover.enable && e.position || o.onClick.enable && e.clickPosition)) return !1;
                const a = o.onHover.mode,
                    r = o.onClick.mode;
                return J(v.repulse, a) || J(d.repulse, r) || n
            }
            reset() {}
            interact() {
                const t = this.container,
                    i = t.actualOptions,
                    e = t.interactivity.status === dt.mouseMoveEvent,
                    o = i.interactivity.events,
                    s = o.onHover.enable,
                    n = o.onHover.mode,
                    a = o.onClick.enable,
                    r = o.onClick.mode,
                    l = o.onDiv;
                e && s && J(v.repulse, n) ? this.hoverRepulse() : a && J(d.repulse, r) ? this.clickRepulse() : st(u.repulse, l, ((t, i) => this.singleSelectorRepulse(t, i)))
            }
            singleSelectorRepulse(t, i) {
                const e = this.container,
                    o = document.querySelectorAll(t);
                o.length && o.forEach((t => {
                    const o = t,
                        s = e.retina.pixelRatio,
                        n = {
                            x: (o.offsetLeft + o.offsetWidth / 2) * s,
                            y: (o.offsetTop + o.offsetHeight / 2) * s
                        },
                        a = o.offsetWidth / 2 * s,
                        r = i.type === M.circle ? new Yt(n.x, n.y, a) : new Zt(o.offsetLeft * s, o.offsetTop * s, o.offsetWidth * s, o.offsetHeight * s),
                        l = at(e.actualOptions.interactivity.modes.repulse.divs, o);
                    this.processRepulse(n, a, r, l)
                }))
            }
            hoverRepulse() {
                const t = this.container,
                    i = t.interactivity.mouse.position;
                if (!i) return;
                const e = t.retina.repulseModeDistance;
                this.processRepulse(i, e, new Yt(i.x, i.y, e))
            }
            processRepulse(t, i, e, o) {
                var s;
                const n = this.container,
                    a = n.particles.quadTree.query(e),
                    r = n.actualOptions.interactivity.modes.repulse;
                for (const e of a) {
                    const {
                        dx: n,
                        dy: a,
                        distance: l
                    } = H(e.position, t), c = (null !== (s = null == o ? void 0 : o.speed) && void 0 !== s ? s : r.speed) * r.factor, d = T(W(1 - l / i, r.easing) * c, 0, r.maxSpeed), h = O.create(0 === l ? c : n / l * d, 0 === l ? c : a / l * d);
                    e.position.addTo(h)
                }
            }
            clickRepulse() {
                const t = this.container;
                if (t.repulse.finish || (t.repulse.count || (t.repulse.count = 0), t.repulse.count++, t.repulse.count === t.particles.count && (t.repulse.finish = !0)), t.repulse.clicking) {
                    const i = t.retina.repulseModeDistance,
                        e = Math.pow(i / 6, 3),
                        o = t.interactivity.mouse.clickPosition;
                    if (void 0 === o) return;
                    const s = new Yt(o.x, o.y, e),
                        n = t.particles.quadTree.query(s);
                    for (const i of n) {
                        const {
                            dx: s,
                            dy: n,
                            distance: a
                        } = H(o, i.position), r = Math.pow(a, 2), l = t.actualOptions.interactivity.modes.repulse.speed, c = -e * l / r;
                        if (r <= e) {
                            t.repulse.particles.push(i);
                            const e = O.create(s, n);
                            e.length = c, i.velocity.setTo(e)
                        }
                    }
                } else if (!1 === t.repulse.clicking) {
                    for (const i of t.repulse.particles) i.velocity.setTo(i.initialVelocity);
                    t.repulse.particles = []
                }
            }
        }
        class Fs extends Ss {
            constructor(t) {
                super(t), this.delay = 0
            }
            interact(t) {
                var i, e, o, s;
                if (!this.container.retina.reduceFactor) return;
                const n = this.container,
                    a = n.actualOptions.interactivity.modes.trail,
                    r = 1e3 * a.delay / this.container.retina.reduceFactor;
                if (this.delay < r && (this.delay += t.value), this.delay < r) return;
                let l = !0;
                a.pauseOnStop && (n.interactivity.mouse.position === this.lastPosition || (null === (i = n.interactivity.mouse.position) || void 0 === i ? void 0 : i.x) === (null === (e = this.lastPosition) || void 0 === e ? void 0 : e.x) && (null === (o = n.interactivity.mouse.position) || void 0 === o ? void 0 : o.y) === (null === (s = this.lastPosition) || void 0 === s ? void 0 : s.y)) && (l = !1), n.interactivity.mouse.position ? this.lastPosition = {
                    x: n.interactivity.mouse.position.x,
                    y: n.interactivity.mouse.position.y
                } : delete this.lastPosition, l && n.particles.push(a.quantity, n.interactivity.mouse, a.particles), this.delay -= r
            }
            isEnabled() {
                const t = this.container,
                    i = t.actualOptions,
                    e = t.interactivity.mouse,
                    o = i.interactivity.events;
                return e.clicking && e.inside && !!e.position && J(d.trail, o.onClick.mode) || e.inside && !!e.position && J(v.trail, o.onHover.mode)
            }
            reset() {}
        }
        class Hs {
            constructor(t) {
                this.container = t, this.type = x.Particles
            }
        }
        class qs extends Hs {
            constructor(t) {
                super(t)
            }
            interact(t) {
                var i;
                const e = this.container,
                    o = null !== (i = t.attractDistance) && void 0 !== i ? i : e.retina.attractDistance,
                    s = t.getPosition(),
                    n = e.particles.quadTree.queryCircle(s, o);
                for (const i of n) {
                    if (t === i || !i.options.move.attract.enable || i.destroyed || i.spawning) continue;
                    const e = i.getPosition(),
                        {
                            dx: o,
                            dy: n
                        } = H(s, e),
                        a = t.options.move.attract.rotate,
                        r = o / (1e3 * a.x),
                        l = n / (1e3 * a.y),
                        c = i.size.value / t.size.value,
                        d = 1 / c;
                    t.velocity.x -= r * c, t.velocity.y -= l * c, i.velocity.x += r * d, i.velocity.y += l * d
                }
            }
            isEnabled(t) {
                return t.options.move.attract.enable
            }
            reset() {}
        }

        function _s(t, i) {
            lt(rt(t), rt(i))
        }
        class Vs extends Hs {
            constructor(t) {
                super(t)
            }
            isEnabled(t) {
                return t.options.collisions.enable
            }
            reset() {}
            interact(t) {
                const i = this.container,
                    e = t.getPosition(),
                    o = t.getRadius(),
                    s = i.particles.quadTree.queryCircle(e, 2 * o);
                for (const i of s) {
                    if (t === i || !i.options.collisions.enable || t.options.collisions.mode !== i.options.collisions.mode || i.destroyed || i.spawning) continue;
                    const s = i.getPosition();
                    if (Math.round(e.z) !== Math.round(s.z)) continue;
                    q(e, s) <= o + i.getRadius() && this.resolveCollision(t, i)
                }
            }
            resolveCollision(t, i) {
                switch (t.options.collisions.mode) {
                    case p.absorb:
                        this.absorb(t, i);
                        break;
                    case p.bounce:
                        _s(t, i);
                        break;
                    case p.destroy:
                        ! function(t, i) {
                            t.unbreakable || i.unbreakable || _s(t, i), void 0 === t.getRadius() && void 0 !== i.getRadius() ? t.destroy() : void 0 !== t.getRadius() && void 0 === i.getRadius() ? i.destroy() : void 0 !== t.getRadius() && void 0 !== i.getRadius() && (t.getRadius() >= i.getRadius() ? i.destroy() : t.destroy())
                        }(t, i)
                }
            }
            absorb(t, i) {
                const e = this.container,
                    o = e.fpsLimit / 1e3;
                if (void 0 === t.getRadius() && void 0 !== i.getRadius()) t.destroy();
                else if (void 0 !== t.getRadius() && void 0 === i.getRadius()) i.destroy();
                else if (void 0 !== t.getRadius() && void 0 !== i.getRadius())
                    if (t.getRadius() >= i.getRadius()) {
                        const s = T(t.getRadius() / i.getRadius(), 0, i.getRadius()) * o;
                        t.size.value += s, i.size.value -= s, i.getRadius() <= e.retina.pixelRatio && (i.size.value = 0, i.destroy())
                    } else {
                        const s = T(i.getRadius() / t.getRadius(), 0, t.getRadius()) * o;
                        t.size.value -= s, i.size.value += s, t.getRadius() <= e.retina.pixelRatio && (t.size.value = 0, t.destroy())
                    }
            }
        }

        function Bs(t, i, e, o, s) {
            let n = q(t, i);
            if (!s || n <= e) return n;
            if (n = q(t, {
                    x: i.x - o.width,
                    y: i.y
                }), n <= e) return n;
            if (n = q(t, {
                    x: i.x - o.width,
                    y: i.y - o.height
                }), n <= e) return n;
            return n = q(t, {
                x: i.x,
                y: i.y - o.height
            }), n
        }
        class Ws extends Hs {
            constructor(t) {
                super(t)
            }
            isEnabled(t) {
                return t.options.links.enable
            }
            reset() {}
            interact(t) {
                var i;
                t.links = [];
                const e = t.getPosition(),
                    o = this.container,
                    s = o.canvas.size;
                if (e.x < 0 || e.y < 0 || e.x > s.width || e.y > s.height) return;
                const n = t.options.links,
                    a = n.opacity,
                    r = null !== (i = t.linksDistance) && void 0 !== i ? i : o.retina.linksDistance,
                    l = n.warp,
                    c = l ? new Kt(e.x, e.y, r, s) : new Yt(e.x, e.y, r),
                    d = o.particles.quadTree.query(c);
                for (const i of d) {
                    const o = i.options.links;
                    if (t === i || !o.enable || n.id !== o.id || i.spawning || i.destroyed || -1 !== t.links.map((t => t.destination)).indexOf(i) || -1 !== i.links.map((t => t.destination)).indexOf(t)) continue;
                    const c = i.getPosition();
                    if (c.x < 0 || c.y < 0 || c.x > s.width || c.y > s.height) continue;
                    const d = Bs(e, c, r, s, l && o.warp);
                    if (d > r) return;
                    const h = (1 - d / r) * a;
                    this.setColor(t), t.links.push({
                        destination: i,
                        opacity: h
                    })
                }
            }
            setColor(t) {
                const i = this.container,
                    e = t.options.links;
                let o = void 0 === e.id ? i.particles.linksColor : i.particles.linksColors.get(e.id);
                if (!o) {
                    o = It(e.color, e.blink, e.consent), void 0 === e.id ? i.particles.linksColor = o : i.particles.linksColors.set(e.id, o)
                }
            }
        }
        class Us {
            constructor(t) {
                this.container = t
            }
            particleCreated(t) {
                t.links = []
            }
            particleDestroyed(t) {
                t.links = []
            }
            drawParticle(t, i) {
                const e = i,
                    o = this.container,
                    s = o.particles,
                    n = i.options;
                if (e.links.length > 0) {
                    t.save();
                    const i = e.links.filter((t => o.particles.getLinkFrequency(e, t.destination) <= n.links.frequency));
                    for (const t of i) {
                        const a = t.destination;
                        if (n.links.triangles.enable) {
                            const r = i.map((t => t.destination)),
                                l = a.links.filter((t => o.particles.getLinkFrequency(a, t.destination) <= a.options.links.frequency && r.indexOf(t.destination) >= 0));
                            if (l.length)
                                for (const i of l) {
                                    const o = i.destination;
                                    s.getTriangleFrequency(e, a, o) > n.links.triangles.frequency || this.drawLinkTriangle(e, t, i)
                                }
                        }
                        t.opacity > 0 && o.retina.linksWidth > 0 && this.drawLinkLine(e, t)
                    }
                    t.restore()
                }
            }
            drawLinkTriangle(t, i, e) {
                var o;
                const s = this.container,
                    n = s.actualOptions,
                    a = i.destination,
                    r = e.destination,
                    l = t.options.links.triangles,
                    c = null !== (o = l.opacity) && void 0 !== o ? o : (i.opacity + e.opacity) / 2;
                if (c <= 0) return;
                const d = t.getPosition(),
                    h = a.getPosition(),
                    u = r.getPosition();
                s.canvas.draw((i => {
                    if (q(d, h) > s.retina.linksDistance || q(u, h) > s.retina.linksDistance || q(u, d) > s.retina.linksDistance) return;
                    let e = vt(l.color);
                    if (!e) {
                        const i = t.options.links,
                            o = void 0 !== i.id ? s.particles.linksColors.get(i.id) : s.particles.linksColor;
                        e = Dt(t, a, o)
                    }
                    e && Vt(i, d, h, u, n.backgroundMask.enable, n.backgroundMask.composite, e, c)
                }))
            }
            drawLinkLine(t, i) {
                const e = this.container,
                    o = e.actualOptions,
                    s = i.destination;
                let n = i.opacity;
                const a = t.getPosition(),
                    r = s.getPosition();
                e.canvas.draw((i => {
                    var l, c;
                    let d;
                    const h = t.options.twinkle.lines;
                    if (h.enable) {
                        const t = h.frequency,
                            i = vt(h.color);
                        Math.random() < t && void 0 !== i && (d = i, n = h.opacity)
                    }
                    if (!d) {
                        const i = t.options.links,
                            o = void 0 !== i.id ? e.particles.linksColors.get(i.id) : e.particles.linksColor;
                        d = Dt(t, s, o)
                    }
                    if (!d) return;
                    const u = null !== (l = t.linksWidth) && void 0 !== l ? l : e.retina.linksWidth,
                        v = null !== (c = t.linksDistance) && void 0 !== c ? c : e.retina.linksDistance;
                    _t(i, u, a, r, v, e.canvas.size, t.options.links.warp, o.backgroundMask.enable, o.backgroundMask.composite, d, n, t.options.links.shadow)
                }))
            }
        }
        class Gs {
            constructor() {
                this.id = "links"
            }
            getPlugin(t) {
                return new Us(t)
            }
            needsPlugin() {
                return !0
            }
            loadOptions() {}
        }

        function Ns(t) {
            ! function(t) {
                t.addInteractor("particlesLinks", (t => new Ws(t)))
            }(t),
            function(t) {
                const i = new Gs;
                t.addPlugin(i)
            }(t)
        }

        function $s(t) {
            ! function(t) {
                t.addInteractor("externalAttract", (t => new Os(t)))
            }(t),
            function(t) {
                t.addInteractor("externalBounce", (t => new Ts(t)))
            }(t),
            function(t) {
                t.addInteractor("externalBubble", (t => new Rs(t)))
            }(t),
            function(t) {
                t.addInteractor("externalConnect", (t => new Ds(t)))
            }(t),
            function(t) {
                t.addInteractor("externalGrab", (t => new Is(t)))
            }(t),
            function(t) {
                t.addInteractor("externalRepulse", (t => new Ls(t)))
            }(t),
            function(t) {
                t.addInteractor("externalTrail", (t => new Fs(t)))
            }(t),
            function(t) {
                t.addInteractor("particlesAttract", (t => new qs(t)))
            }(t),
            function(t) {
                t.addInteractor("particlesCollisions", (t => new Vs(t)))
            }(t), Ns(t),
                function(t) {
                    t.addShape("circle", new jo)
                }(t),
                function(t) {
                    const i = new is;
                    t.addShape("image", i), t.addShape("images", i)
                }(t),
                function(t) {
                    t.addShape("shape", new es)
                }(t), as(t),
                function(t) {
                    const i = new ls;
                    t.addShape("edge", i), t.addShape("square", i)
                }(t),
                function(t) {
                    t.addShape("star", new cs)
                }(t),
                function(t) {
                    const i = new us;
                    for (const e of hs) t.addShape(e, i)
                }(t),
                function(t) {
                    t.addParticleUpdater("life", (t => new ys(t)))
                }(t),
                function(t) {
                    t.addParticleUpdater("opacity", (() => new bs))
                }(t),
                function(t) {
                    t.addParticleUpdater("size", (() => new ws))
                }(t),
                function(t) {
                    t.addParticleUpdater("angle", (() => new vs))
                }(t),
                function(t) {
                    t.addParticleUpdater("tilt", (() => new zs))
                }(t),
                function(t) {
                    t.addParticleUpdater("roll", (() => new Ms))
                }(t),
                function(t) {
                    t.addParticleUpdater("wobble", (() => new Cs))
                }(t),
                function(t) {
                    t.addParticleUpdater("color", (() => new fs))
                }(t),
                function(t) {
                    t.addParticleUpdater("strokeColor", (() => new ks))
                }(t),
                function(t) {
                    t.addParticleUpdater("outModes", (t => new Ps(t)))
                }(t)
        }

        function js(t) {
            $s(t),
                function(t) {
                    const i = new Mo;
                    t.addPlugin(i)
                }(t),
                function(t) {
                    const i = new Do;
                    t.addPlugin(i)
                }(t),
                function(t) {
                    const i = new $o;
                    t.addPlugin(i)
                }(t)
        }
        const Qs = new go;
        Qs.init(), js(Qs);
        const {
            particlesJS: Js,
            pJSDom: Xs
        } = (t => {
            const i = (i, e) => t.load(i, e);
            i.load = (i, e, o) => {
                t.loadJSON(i, e).then((t => {
                    t && o(t)
                })).catch((() => {
                    o(void 0)
                }))
            }, i.setOnClickHandler = i => {
                t.setOnClickHandler(i)
            };
            return {
                particlesJS: i,
                pJSDom: t.dom()
            }
        })(Qs);
        return i
    })()
}));
